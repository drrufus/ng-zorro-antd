/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Inject, Input, NgZone, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { fromEvent, merge, Subscription } from 'rxjs';
import { auditTime } from 'rxjs/operators';
import { getStyleAsText, shallowEqual, InputNumber, NzConfigService, NzScrollService, WithConfig } from 'ng-zorro-antd/core';
import { isTargetWindow } from './utils';
/**
 * @record
 */
function SimpleRect() { }
if (false) {
    /** @type {?} */
    SimpleRect.prototype.top;
    /** @type {?} */
    SimpleRect.prototype.left;
    /** @type {?|undefined} */
    SimpleRect.prototype.width;
    /** @type {?|undefined} */
    SimpleRect.prototype.height;
    /** @type {?|undefined} */
    SimpleRect.prototype.bottom;
}
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'affix';
/** @type {?} */
const NZ_AFFIX_CLS_PREFIX = 'ant-affix';
/** @type {?} */
const NZ_AFFIX_DEFAULT_SCROLL_TIME = 20;
/** @type {?} */
const NZ_AFFIX_RESPOND_EVENTS = ['resize', 'scroll', 'touchstart', 'touchmove', 'touchend', 'pageshow', 'load'];
export class NzAffixComponent {
    /**
     * @param {?} el
     * @param {?} doc
     * @param {?} nzConfigService
     * @param {?} scrollSrv
     * @param {?} ngZone
     * @param {?} platform
     */
    constructor(el, doc, // tslint:disable-line no-any
    nzConfigService, scrollSrv, ngZone, platform) {
        this.nzConfigService = nzConfigService;
        this.scrollSrv = scrollSrv;
        this.ngZone = ngZone;
        this.platform = platform;
        this.nzChange = new EventEmitter();
        this.scroll$ = Subscription.EMPTY;
        // The wrapper would stay at the original position as a placeholder.
        this.placeholderNode = el.nativeElement;
        this.document = doc;
    }
    /**
     * @private
     * @return {?}
     */
    get target() {
        /** @type {?} */
        const el = this.nzTarget;
        return (typeof el === 'string' ? this.document.querySelector(el) : el) || window;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzOffsetBottom, nzOffsetTop, nzTarget } = changes;
        if (nzOffsetBottom || nzOffsetTop) {
            this.updatePosition((/** @type {?} */ ({})));
        }
        if (nzTarget) {
            this.registerListeners();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.registerListeners();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.removeListeners();
    }
    /**
     * @private
     * @return {?}
     */
    registerListeners() {
        this.removeListeners();
        this.scroll$ = this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            return merge(...NZ_AFFIX_RESPOND_EVENTS.map((/**
             * @param {?} evName
             * @return {?}
             */
            evName => fromEvent(this.target, evName))))
                .pipe(auditTime(NZ_AFFIX_DEFAULT_SCROLL_TIME))
                .subscribe((/**
             * @param {?} e
             * @return {?}
             */
            e => this.updatePosition(e)));
        }));
        this.timeout = setTimeout((/**
         * @return {?}
         */
        () => this.updatePosition((/** @type {?} */ ({})))));
    }
    /**
     * @private
     * @return {?}
     */
    removeListeners() {
        clearTimeout(this.timeout);
        this.scroll$.unsubscribe();
    }
    /**
     * @param {?} element
     * @param {?} target
     * @return {?}
     */
    getOffset(element, target) {
        /** @type {?} */
        const elemRect = element.getBoundingClientRect();
        /** @type {?} */
        const targetRect = this.getTargetRect((/** @type {?} */ (target)));
        /** @type {?} */
        const scrollTop = this.scrollSrv.getScroll(target, true);
        /** @type {?} */
        const scrollLeft = this.scrollSrv.getScroll(target, false);
        /** @type {?} */
        const docElem = this.document.body;
        /** @type {?} */
        const clientTop = docElem.clientTop || 0;
        /** @type {?} */
        const clientLeft = docElem.clientLeft || 0;
        return {
            top: elemRect.top - targetRect.top + scrollTop - clientTop,
            left: elemRect.left - targetRect.left + scrollLeft - clientLeft,
            width: elemRect.width,
            height: elemRect.height
        };
    }
    /**
     * @private
     * @param {?} target
     * @return {?}
     */
    getTargetRect(target) {
        return !isTargetWindow(target)
            ? target.getBoundingClientRect()
            : {
                top: 0,
                left: 0,
                bottom: 0
            };
    }
    /**
     * @private
     * @param {?} e
     * @param {?=} affixStyle
     * @return {?}
     */
    setAffixStyle(e, affixStyle) {
        /** @type {?} */
        const originalAffixStyle = this.affixStyle;
        /** @type {?} */
        const isWindow = this.target === window;
        if (e.type === 'scroll' && originalAffixStyle && affixStyle && isWindow) {
            return;
        }
        if (shallowEqual(originalAffixStyle, affixStyle)) {
            return;
        }
        /** @type {?} */
        const fixed = !!affixStyle;
        /** @type {?} */
        const wrapEl = this.fixedEl.nativeElement;
        wrapEl.style.cssText = getStyleAsText(affixStyle);
        this.affixStyle = affixStyle;
        if (fixed) {
            wrapEl.classList.add(NZ_AFFIX_CLS_PREFIX);
        }
        else {
            wrapEl.classList.remove(NZ_AFFIX_CLS_PREFIX);
        }
        if ((affixStyle && !originalAffixStyle) || (!affixStyle && originalAffixStyle)) {
            this.nzChange.emit(fixed);
        }
    }
    /**
     * @private
     * @param {?=} placeholderStyle
     * @return {?}
     */
    setPlaceholderStyle(placeholderStyle) {
        /** @type {?} */
        const originalPlaceholderStyle = this.placeholderStyle;
        if (shallowEqual(placeholderStyle, originalPlaceholderStyle)) {
            return;
        }
        this.placeholderNode.style.cssText = getStyleAsText(placeholderStyle);
        this.placeholderStyle = placeholderStyle;
    }
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    syncPlaceholderStyle(e) {
        if (!this.affixStyle) {
            return;
        }
        this.placeholderNode.style.cssText = '';
        this.placeholderStyle = undefined;
        /** @type {?} */
        const styleObj = {
            width: this.placeholderNode.offsetWidth,
            height: this.fixedEl.nativeElement.offsetHeight
        };
        this.setAffixStyle(e, Object.assign({}, this.affixStyle, styleObj));
        this.setPlaceholderStyle(styleObj);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    updatePosition(e) {
        if (!this.platform.isBrowser) {
            return;
        }
        /** @type {?} */
        const targetNode = this.target;
        /** @type {?} */
        let offsetTop = this.nzOffsetTop;
        /** @type {?} */
        const scrollTop = this.scrollSrv.getScroll(targetNode, true);
        /** @type {?} */
        const elemOffset = this.getOffset(this.placeholderNode, (/** @type {?} */ (targetNode)));
        /** @type {?} */
        const fixedNode = this.fixedEl.nativeElement;
        /** @type {?} */
        const elemSize = {
            width: fixedNode.offsetWidth,
            height: fixedNode.offsetHeight
        };
        /** @type {?} */
        const offsetMode = {
            top: false,
            bottom: false
        };
        // Default to `offsetTop=0`.
        if (typeof offsetTop !== 'number' && typeof this.nzOffsetBottom !== 'number') {
            offsetMode.top = true;
            offsetTop = 0;
        }
        else {
            offsetMode.top = typeof offsetTop === 'number';
            offsetMode.bottom = typeof this.nzOffsetBottom === 'number';
        }
        /** @type {?} */
        const targetRect = this.getTargetRect((/** @type {?} */ (targetNode)));
        /** @type {?} */
        const targetInnerHeight = ((/** @type {?} */ (targetNode))).innerHeight || ((/** @type {?} */ (targetNode))).clientHeight;
        if (scrollTop >= elemOffset.top - ((/** @type {?} */ (offsetTop))) && offsetMode.top) {
            /** @type {?} */
            const width = elemOffset.width;
            /** @type {?} */
            const top = targetRect.top + ((/** @type {?} */ (offsetTop)));
            this.setAffixStyle(e, {
                position: 'fixed',
                top,
                left: targetRect.left + elemOffset.left,
                maxHeight: `calc(100vh - ${top}px)`,
                width
            });
            this.setPlaceholderStyle({
                width,
                height: elemSize.height
            });
        }
        else if (scrollTop <= elemOffset.top + elemSize.height + ((/** @type {?} */ (this.nzOffsetBottom))) - targetInnerHeight &&
            offsetMode.bottom) {
            /** @type {?} */
            const targetBottomOffet = targetNode === window ? 0 : window.innerHeight - (/** @type {?} */ (targetRect.bottom));
            /** @type {?} */
            const width = elemOffset.width;
            this.setAffixStyle(e, {
                position: 'fixed',
                bottom: targetBottomOffet + ((/** @type {?} */ (this.nzOffsetBottom))),
                left: targetRect.left + elemOffset.left,
                width
            });
            this.setPlaceholderStyle({
                width,
                height: elemOffset.height
            });
        }
        else {
            if (e.type === 'resize' &&
                this.affixStyle &&
                this.affixStyle.position === 'fixed' &&
                this.placeholderNode.offsetWidth) {
                this.setAffixStyle(e, Object.assign({}, this.affixStyle, { width: this.placeholderNode.offsetWidth }));
            }
            else {
                this.setAffixStyle(e);
            }
            this.setPlaceholderStyle();
        }
        if (e.type === 'resize') {
            this.syncPlaceholderStyle(e);
        }
    }
}
NzAffixComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-affix',
                exportAs: 'nzAffix',
                template: "<div #fixedEl>\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [`
      nz-affix {
        display: block;
      }
    `]
            }] }
];
/** @nocollapse */
NzAffixComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: NzConfigService },
    { type: NzScrollService },
    { type: NgZone },
    { type: Platform }
];
NzAffixComponent.propDecorators = {
    fixedEl: [{ type: ViewChild, args: ['fixedEl', { static: true },] }],
    nzTarget: [{ type: Input }],
    nzOffsetTop: [{ type: Input }],
    nzOffsetBottom: [{ type: Input }],
    nzChange: [{ type: Output }]
};
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, 0),
    InputNumber(),
    tslib_1.__metadata("design:type", Object)
], NzAffixComponent.prototype, "nzOffsetTop", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, null),
    InputNumber(),
    tslib_1.__metadata("design:type", Object)
], NzAffixComponent.prototype, "nzOffsetBottom", void 0);
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzAffixComponent.prototype.fixedEl;
    /** @type {?} */
    NzAffixComponent.prototype.nzTarget;
    /** @type {?} */
    NzAffixComponent.prototype.nzOffsetTop;
    /** @type {?} */
    NzAffixComponent.prototype.nzOffsetBottom;
    /** @type {?} */
    NzAffixComponent.prototype.nzChange;
    /**
     * @type {?}
     * @private
     */
    NzAffixComponent.prototype.placeholderNode;
    /**
     * @type {?}
     * @private
     */
    NzAffixComponent.prototype.affixStyle;
    /**
     * @type {?}
     * @private
     */
    NzAffixComponent.prototype.placeholderStyle;
    /**
     * @type {?}
     * @private
     */
    NzAffixComponent.prototype.scroll$;
    /**
     * @type {?}
     * @private
     */
    NzAffixComponent.prototype.timeout;
    /**
     * @type {?}
     * @private
     */
    NzAffixComponent.prototype.document;
    /** @type {?} */
    NzAffixComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzAffixComponent.prototype.scrollSrv;
    /**
     * @type {?}
     * @private
     */
    NzAffixComponent.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    NzAffixComponent.prototype.platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYWZmaXguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9hZmZpeC8iLCJzb3VyY2VzIjpbIm56LWFmZml4LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEVBR04sTUFBTSxFQUVOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQ0wsY0FBYyxFQUNkLFlBQVksRUFDWixXQUFXLEVBRVgsZUFBZSxFQUNmLGVBQWUsRUFDZixVQUFVLEVBQ1gsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sU0FBUyxDQUFDOzs7O0FBRXpDLHlCQU1DOzs7SUFMQyx5QkFBWTs7SUFDWiwwQkFBYTs7SUFDYiwyQkFBZTs7SUFDZiw0QkFBZ0I7O0lBQ2hCLDRCQUFnQjs7O01BR1osd0JBQXdCLEdBQUcsT0FBTzs7TUFDbEMsbUJBQW1CLEdBQUcsV0FBVzs7TUFDakMsNEJBQTRCLEdBQUcsRUFBRTs7TUFDakMsdUJBQXVCLEdBQUcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLENBQUM7QUFnQi9HLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7Ozs7OztJQThCM0IsWUFDRSxFQUFjLEVBQ0ksR0FBUSxFQUFFLDZCQUE2QjtJQUNsRCxlQUFnQyxFQUMvQixTQUEwQixFQUMxQixNQUFjLEVBQ2QsUUFBa0I7UUFIbkIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQy9CLGNBQVMsR0FBVCxTQUFTLENBQWlCO1FBQzFCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBckJULGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBTWxELFlBQU8sR0FBaUIsWUFBWSxDQUFDLEtBQUssQ0FBQztRQWlCakQsb0VBQW9FO1FBQ3BFLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztRQUN4QyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztJQUN0QixDQUFDOzs7OztJQWhCRCxJQUFZLE1BQU07O2NBQ1YsRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRO1FBQ3hCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxNQUFNLENBQUM7SUFDbkYsQ0FBQzs7Ozs7SUFlRCxXQUFXLENBQUMsT0FBc0I7Y0FDMUIsRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxHQUFHLE9BQU87UUFFekQsSUFBSSxjQUFjLElBQUksV0FBVyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxjQUFjLENBQUMsbUJBQUEsRUFBRSxFQUFTLENBQUMsQ0FBQztTQUNsQztRQUNELElBQUksUUFBUSxFQUFFO1lBQ1osSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDMUI7SUFDSCxDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRU8saUJBQWlCO1FBQ3ZCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCOzs7UUFBQyxHQUFHLEVBQUU7WUFDaEQsT0FBTyxLQUFLLENBQUMsR0FBRyx1QkFBdUIsQ0FBQyxHQUFHOzs7O1lBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFBQyxDQUFDO2lCQUNuRixJQUFJLENBQUMsU0FBUyxDQUFDLDRCQUE0QixDQUFDLENBQUM7aUJBQzdDLFNBQVM7Ozs7WUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUM1QyxDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVTs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxtQkFBQSxFQUFFLEVBQVMsQ0FBQyxFQUFDLENBQUM7SUFDcEUsQ0FBQzs7Ozs7SUFFTyxlQUFlO1FBQ3JCLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7Ozs7SUFFRCxTQUFTLENBQUMsT0FBZ0IsRUFBRSxNQUFvQzs7Y0FDeEQsUUFBUSxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRTs7Y0FDMUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQUEsTUFBTSxFQUFDLENBQUM7O2NBRXhDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDOztjQUNsRCxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQzs7Y0FFcEQsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSTs7Y0FDNUIsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLElBQUksQ0FBQzs7Y0FDbEMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLElBQUksQ0FBQztRQUUxQyxPQUFPO1lBQ0wsR0FBRyxFQUFFLFFBQVEsQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDLEdBQUcsR0FBRyxTQUFTLEdBQUcsU0FBUztZQUMxRCxJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsSUFBSSxHQUFHLFVBQVUsR0FBRyxVQUFVO1lBQy9ELEtBQUssRUFBRSxRQUFRLENBQUMsS0FBSztZQUNyQixNQUFNLEVBQUUsUUFBUSxDQUFDLE1BQU07U0FDeEIsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVPLGFBQWEsQ0FBQyxNQUF3QjtRQUM1QyxPQUFPLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQztZQUM1QixDQUFDLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFO1lBQ2hDLENBQUMsQ0FBQztnQkFDRSxHQUFHLEVBQUUsQ0FBQztnQkFDTixJQUFJLEVBQUUsQ0FBQztnQkFDUCxNQUFNLEVBQUUsQ0FBQzthQUNWLENBQUM7SUFDUixDQUFDOzs7Ozs7O0lBRU8sYUFBYSxDQUFDLENBQVEsRUFBRSxVQUE2Qjs7Y0FDckQsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFVBQVU7O2NBQ3BDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxLQUFLLE1BQU07UUFDdkMsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLFFBQVEsSUFBSSxrQkFBa0IsSUFBSSxVQUFVLElBQUksUUFBUSxFQUFFO1lBQ3ZFLE9BQU87U0FDUjtRQUNELElBQUksWUFBWSxDQUFDLGtCQUFrQixFQUFFLFVBQVUsQ0FBQyxFQUFFO1lBQ2hELE9BQU87U0FDUjs7Y0FFSyxLQUFLLEdBQUcsQ0FBQyxDQUFDLFVBQVU7O2NBQ3BCLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWE7UUFDekMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksS0FBSyxFQUFFO1lBQ1QsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztTQUMzQzthQUFNO1lBQ0wsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQztTQUM5QztRQUVELElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLElBQUksa0JBQWtCLENBQUMsRUFBRTtZQUM5RSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzQjtJQUNILENBQUM7Ozs7OztJQUVPLG1CQUFtQixDQUFDLGdCQUFtQzs7Y0FDdkQsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQjtRQUN0RCxJQUFJLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSx3QkFBd0IsQ0FBQyxFQUFFO1lBQzVELE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7SUFDM0MsQ0FBQzs7Ozs7O0lBRU8sb0JBQW9CLENBQUMsQ0FBUTtRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7O2NBQzVCLFFBQVEsR0FBRztZQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVc7WUFDdkMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFlBQVk7U0FDaEQ7UUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsb0JBQ2YsSUFBSSxDQUFDLFVBQVUsRUFDZixRQUFRLEVBQ1gsQ0FBQztRQUNILElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxDQUFRO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUM1QixPQUFPO1NBQ1I7O2NBRUssVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNOztZQUMxQixTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVc7O2NBQzFCLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDOztjQUN0RCxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLG1CQUFBLFVBQVUsRUFBQyxDQUFDOztjQUM5RCxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhOztjQUN0QyxRQUFRLEdBQUc7WUFDZixLQUFLLEVBQUUsU0FBUyxDQUFDLFdBQVc7WUFDNUIsTUFBTSxFQUFFLFNBQVMsQ0FBQyxZQUFZO1NBQy9COztjQUNLLFVBQVUsR0FBRztZQUNqQixHQUFHLEVBQUUsS0FBSztZQUNWLE1BQU0sRUFBRSxLQUFLO1NBQ2Q7UUFDRCw0QkFBNEI7UUFDNUIsSUFBSSxPQUFPLFNBQVMsS0FBSyxRQUFRLElBQUksT0FBTyxJQUFJLENBQUMsY0FBYyxLQUFLLFFBQVEsRUFBRTtZQUM1RSxVQUFVLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztZQUN0QixTQUFTLEdBQUcsQ0FBQyxDQUFDO1NBQ2Y7YUFBTTtZQUNMLFVBQVUsQ0FBQyxHQUFHLEdBQUcsT0FBTyxTQUFTLEtBQUssUUFBUSxDQUFDO1lBQy9DLFVBQVUsQ0FBQyxNQUFNLEdBQUcsT0FBTyxJQUFJLENBQUMsY0FBYyxLQUFLLFFBQVEsQ0FBQztTQUM3RDs7Y0FDSyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBQSxVQUFVLEVBQVUsQ0FBQzs7Y0FDckQsaUJBQWlCLEdBQUcsQ0FBQyxtQkFBQSxVQUFVLEVBQVUsQ0FBQyxDQUFDLFdBQVcsSUFBSSxDQUFDLG1CQUFBLFVBQVUsRUFBZSxDQUFDLENBQUMsWUFBWTtRQUN4RyxJQUFJLFNBQVMsSUFBSSxVQUFVLENBQUMsR0FBRyxHQUFHLENBQUMsbUJBQUEsU0FBUyxFQUFVLENBQUMsSUFBSSxVQUFVLENBQUMsR0FBRyxFQUFFOztrQkFDbkUsS0FBSyxHQUFHLFVBQVUsQ0FBQyxLQUFLOztrQkFDeEIsR0FBRyxHQUFHLFVBQVUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxtQkFBQSxTQUFTLEVBQVUsQ0FBQztZQUNsRCxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRTtnQkFDcEIsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLEdBQUc7Z0JBQ0gsSUFBSSxFQUFFLFVBQVUsQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLElBQUk7Z0JBQ3ZDLFNBQVMsRUFBRSxnQkFBZ0IsR0FBRyxLQUFLO2dCQUNuQyxLQUFLO2FBQ04sQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLG1CQUFtQixDQUFDO2dCQUN2QixLQUFLO2dCQUNMLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTTthQUN4QixDQUFDLENBQUM7U0FDSjthQUFNLElBQ0wsU0FBUyxJQUFJLFVBQVUsQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLG1CQUFBLElBQUksQ0FBQyxjQUFjLEVBQVUsQ0FBQyxHQUFHLGlCQUFpQjtZQUNuRyxVQUFVLENBQUMsTUFBTSxFQUNqQjs7a0JBQ00saUJBQWlCLEdBQUcsVUFBVSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLG1CQUFBLFVBQVUsQ0FBQyxNQUFNLEVBQUM7O2tCQUN2RixLQUFLLEdBQUcsVUFBVSxDQUFDLEtBQUs7WUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3BCLFFBQVEsRUFBRSxPQUFPO2dCQUNqQixNQUFNLEVBQUUsaUJBQWlCLEdBQUcsQ0FBQyxtQkFBQSxJQUFJLENBQUMsY0FBYyxFQUFVLENBQUM7Z0JBQzNELElBQUksRUFBRSxVQUFVLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQyxJQUFJO2dCQUN2QyxLQUFLO2FBQ04sQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLG1CQUFtQixDQUFDO2dCQUN2QixLQUFLO2dCQUNMLE1BQU0sRUFBRSxVQUFVLENBQUMsTUFBTTthQUMxQixDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsSUFDRSxDQUFDLENBQUMsSUFBSSxLQUFLLFFBQVE7Z0JBQ25CLElBQUksQ0FBQyxVQUFVO2dCQUNmLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxLQUFLLE9BQU87Z0JBQ3BDLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUNoQztnQkFDQSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsb0JBQ2YsSUFBSSxDQUFDLFVBQVUsSUFDbEIsS0FBSyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxJQUN2QyxDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN2QjtZQUNELElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1NBQzVCO1FBRUQsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUN2QixJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDOUI7SUFDSCxDQUFDOzs7WUF6UEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQixRQUFRLEVBQUUsU0FBUztnQkFDbkIsdUVBQXdDO2dCQUN4QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFRL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7eUJBTm5DOzs7O0tBSUM7YUFHSjs7OztZQXBEQyxVQUFVOzRDQXFGUCxNQUFNLFNBQUMsUUFBUTtZQWpFbEIsZUFBZTtZQUNmLGVBQWU7WUFqQmYsTUFBTTtZQVZDLFFBQVE7OztzQkE0RGQsU0FBUyxTQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7dUJBRXJDLEtBQUs7MEJBRUwsS0FBSzs2QkFLTCxLQUFLO3VCQUtMLE1BQU07O0FBUFA7SUFGQyxVQUFVLENBQWdCLHdCQUF3QixFQUFFLENBQUMsQ0FBQztJQUN0RCxXQUFXLEVBQUU7O3FEQUNhO0FBSzNCO0lBRkMsVUFBVSxDQUFnQix3QkFBd0IsRUFBRSxJQUFJLENBQUM7SUFDekQsV0FBVyxFQUFFOzt3REFDZ0I7Ozs7OztJQVo5QixtQ0FBb0Y7O0lBRXBGLG9DQUE2Qzs7SUFFN0MsdUNBRzJCOztJQUUzQiwwQ0FHOEI7O0lBRTlCLG9DQUEwRDs7Ozs7SUFFMUQsMkNBQThDOzs7OztJQUU5QyxzQ0FBc0M7Ozs7O0lBQ3RDLDRDQUE0Qzs7Ozs7SUFDNUMsbUNBQW1EOzs7OztJQUNuRCxtQ0FBeUI7Ozs7O0lBQ3pCLG9DQUEyQjs7SUFVekIsMkNBQXVDOzs7OztJQUN2QyxxQ0FBa0M7Ozs7O0lBQ2xDLGtDQUFzQjs7Ozs7SUFDdEIsb0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbmplY3QsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGZyb21FdmVudCwgbWVyZ2UsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBhdWRpdFRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIGdldFN0eWxlQXNUZXh0LFxyXG4gIHNoYWxsb3dFcXVhbCxcclxuICBJbnB1dE51bWJlcixcclxuICBOZ1N0eWxlSW50ZXJmYWNlLFxyXG4gIE56Q29uZmlnU2VydmljZSxcclxuICBOelNjcm9sbFNlcnZpY2UsXHJcbiAgV2l0aENvbmZpZ1xyXG59IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IGlzVGFyZ2V0V2luZG93IH0gZnJvbSAnLi91dGlscyc7XHJcblxyXG5pbnRlcmZhY2UgU2ltcGxlUmVjdCB7XHJcbiAgdG9wOiBudW1iZXI7XHJcbiAgbGVmdDogbnVtYmVyO1xyXG4gIHdpZHRoPzogbnVtYmVyO1xyXG4gIGhlaWdodD86IG51bWJlcjtcclxuICBib3R0b20/OiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICdhZmZpeCc7XHJcbmNvbnN0IE5aX0FGRklYX0NMU19QUkVGSVggPSAnYW50LWFmZml4JztcclxuY29uc3QgTlpfQUZGSVhfREVGQVVMVF9TQ1JPTExfVElNRSA9IDIwO1xyXG5jb25zdCBOWl9BRkZJWF9SRVNQT05EX0VWRU5UUyA9IFsncmVzaXplJywgJ3Njcm9sbCcsICd0b3VjaHN0YXJ0JywgJ3RvdWNobW92ZScsICd0b3VjaGVuZCcsICdwYWdlc2hvdycsICdsb2FkJ107XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LWFmZml4JyxcclxuICBleHBvcnRBczogJ256QWZmaXgnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1hZmZpeC5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIG56LWFmZml4IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF0sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpBZmZpeENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICBAVmlld0NoaWxkKCdmaXhlZEVsJywgeyBzdGF0aWM6IHRydWUgfSkgcHJpdmF0ZSBmaXhlZEVsOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcclxuXHJcbiAgQElucHV0KCkgbnpUYXJnZXQ6IHN0cmluZyB8IEVsZW1lbnQgfCBXaW5kb3c7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgQFdpdGhDb25maWc8bnVtYmVyIHwgbnVsbD4oTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCAwKVxyXG4gIEBJbnB1dE51bWJlcigpXHJcbiAgbnpPZmZzZXRUb3A6IG51bGwgfCBudW1iZXI7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgQFdpdGhDb25maWc8bnVtYmVyIHwgbnVsbD4oTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCBudWxsKVxyXG4gIEBJbnB1dE51bWJlcigpXHJcbiAgbnpPZmZzZXRCb3R0b206IG51bGwgfCBudW1iZXI7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgcHJpdmF0ZSByZWFkb25seSBwbGFjZWhvbGRlck5vZGU6IEhUTUxFbGVtZW50O1xyXG5cclxuICBwcml2YXRlIGFmZml4U3R5bGU/OiBOZ1N0eWxlSW50ZXJmYWNlO1xyXG4gIHByaXZhdGUgcGxhY2Vob2xkZXJTdHlsZT86IE5nU3R5bGVJbnRlcmZhY2U7XHJcbiAgcHJpdmF0ZSBzY3JvbGwkOiBTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XHJcbiAgcHJpdmF0ZSB0aW1lb3V0PzogbnVtYmVyO1xyXG4gIHByaXZhdGUgZG9jdW1lbnQ6IERvY3VtZW50O1xyXG5cclxuICBwcml2YXRlIGdldCB0YXJnZXQoKTogRWxlbWVudCB8IFdpbmRvdyB7XHJcbiAgICBjb25zdCBlbCA9IHRoaXMubnpUYXJnZXQ7XHJcbiAgICByZXR1cm4gKHR5cGVvZiBlbCA9PT0gJ3N0cmluZycgPyB0aGlzLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpIDogZWwpIHx8IHdpbmRvdztcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgZWw6IEVsZW1lbnRSZWYsXHJcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBkb2M6IGFueSwgLy8gdHNsaW50OmRpc2FibGUtbGluZSBuby1hbnlcclxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcclxuICAgIHByaXZhdGUgc2Nyb2xsU3J2OiBOelNjcm9sbFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxyXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm1cclxuICApIHtcclxuICAgIC8vIFRoZSB3cmFwcGVyIHdvdWxkIHN0YXkgYXQgdGhlIG9yaWdpbmFsIHBvc2l0aW9uIGFzIGEgcGxhY2Vob2xkZXIuXHJcbiAgICB0aGlzLnBsYWNlaG9sZGVyTm9kZSA9IGVsLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB0aGlzLmRvY3VtZW50ID0gZG9jO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc3QgeyBuek9mZnNldEJvdHRvbSwgbnpPZmZzZXRUb3AsIG56VGFyZ2V0IH0gPSBjaGFuZ2VzO1xyXG5cclxuICAgIGlmIChuek9mZnNldEJvdHRvbSB8fCBuek9mZnNldFRvcCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKHt9IGFzIEV2ZW50KTtcclxuICAgIH1cclxuICAgIGlmIChuelRhcmdldCkge1xyXG4gICAgICB0aGlzLnJlZ2lzdGVyTGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlZ2lzdGVyTGlzdGVuZXJzKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXJzKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlZ2lzdGVyTGlzdGVuZXJzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKTtcclxuICAgIHRoaXMuc2Nyb2xsJCA9IHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgcmV0dXJuIG1lcmdlKC4uLk5aX0FGRklYX1JFU1BPTkRfRVZFTlRTLm1hcChldk5hbWUgPT4gZnJvbUV2ZW50KHRoaXMudGFyZ2V0LCBldk5hbWUpKSlcclxuICAgICAgICAucGlwZShhdWRpdFRpbWUoTlpfQUZGSVhfREVGQVVMVF9TQ1JPTExfVElNRSkpXHJcbiAgICAgICAgLnN1YnNjcmliZShlID0+IHRoaXMudXBkYXRlUG9zaXRpb24oZSkpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMudXBkYXRlUG9zaXRpb24oe30gYXMgRXZlbnQpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVtb3ZlTGlzdGVuZXJzKCk6IHZvaWQge1xyXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XHJcbiAgICB0aGlzLnNjcm9sbCQudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIGdldE9mZnNldChlbGVtZW50OiBFbGVtZW50LCB0YXJnZXQ6IEVsZW1lbnQgfCBXaW5kb3cgfCB1bmRlZmluZWQpOiBTaW1wbGVSZWN0IHtcclxuICAgIGNvbnN0IGVsZW1SZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IHRhcmdldFJlY3QgPSB0aGlzLmdldFRhcmdldFJlY3QodGFyZ2V0ISk7XHJcblxyXG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gdGhpcy5zY3JvbGxTcnYuZ2V0U2Nyb2xsKHRhcmdldCwgdHJ1ZSk7XHJcbiAgICBjb25zdCBzY3JvbGxMZWZ0ID0gdGhpcy5zY3JvbGxTcnYuZ2V0U2Nyb2xsKHRhcmdldCwgZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGRvY0VsZW0gPSB0aGlzLmRvY3VtZW50LmJvZHk7XHJcbiAgICBjb25zdCBjbGllbnRUb3AgPSBkb2NFbGVtLmNsaWVudFRvcCB8fCAwO1xyXG4gICAgY29uc3QgY2xpZW50TGVmdCA9IGRvY0VsZW0uY2xpZW50TGVmdCB8fCAwO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRvcDogZWxlbVJlY3QudG9wIC0gdGFyZ2V0UmVjdC50b3AgKyBzY3JvbGxUb3AgLSBjbGllbnRUb3AsXHJcbiAgICAgIGxlZnQ6IGVsZW1SZWN0LmxlZnQgLSB0YXJnZXRSZWN0LmxlZnQgKyBzY3JvbGxMZWZ0IC0gY2xpZW50TGVmdCxcclxuICAgICAgd2lkdGg6IGVsZW1SZWN0LndpZHRoLFxyXG4gICAgICBoZWlnaHQ6IGVsZW1SZWN0LmhlaWdodFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0VGFyZ2V0UmVjdCh0YXJnZXQ6IEVsZW1lbnQgfCBXaW5kb3cpOiBTaW1wbGVSZWN0IHtcclxuICAgIHJldHVybiAhaXNUYXJnZXRXaW5kb3codGFyZ2V0KVxyXG4gICAgICA/IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4gICAgICA6IHtcclxuICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICBib3R0b206IDBcclxuICAgICAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRBZmZpeFN0eWxlKGU6IEV2ZW50LCBhZmZpeFN0eWxlPzogTmdTdHlsZUludGVyZmFjZSk6IHZvaWQge1xyXG4gICAgY29uc3Qgb3JpZ2luYWxBZmZpeFN0eWxlID0gdGhpcy5hZmZpeFN0eWxlO1xyXG4gICAgY29uc3QgaXNXaW5kb3cgPSB0aGlzLnRhcmdldCA9PT0gd2luZG93O1xyXG4gICAgaWYgKGUudHlwZSA9PT0gJ3Njcm9sbCcgJiYgb3JpZ2luYWxBZmZpeFN0eWxlICYmIGFmZml4U3R5bGUgJiYgaXNXaW5kb3cpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHNoYWxsb3dFcXVhbChvcmlnaW5hbEFmZml4U3R5bGUsIGFmZml4U3R5bGUpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmaXhlZCA9ICEhYWZmaXhTdHlsZTtcclxuICAgIGNvbnN0IHdyYXBFbCA9IHRoaXMuZml4ZWRFbC5uYXRpdmVFbGVtZW50O1xyXG4gICAgd3JhcEVsLnN0eWxlLmNzc1RleHQgPSBnZXRTdHlsZUFzVGV4dChhZmZpeFN0eWxlKTtcclxuICAgIHRoaXMuYWZmaXhTdHlsZSA9IGFmZml4U3R5bGU7XHJcbiAgICBpZiAoZml4ZWQpIHtcclxuICAgICAgd3JhcEVsLmNsYXNzTGlzdC5hZGQoTlpfQUZGSVhfQ0xTX1BSRUZJWCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB3cmFwRWwuY2xhc3NMaXN0LnJlbW92ZShOWl9BRkZJWF9DTFNfUFJFRklYKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoKGFmZml4U3R5bGUgJiYgIW9yaWdpbmFsQWZmaXhTdHlsZSkgfHwgKCFhZmZpeFN0eWxlICYmIG9yaWdpbmFsQWZmaXhTdHlsZSkpIHtcclxuICAgICAgdGhpcy5uekNoYW5nZS5lbWl0KGZpeGVkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0UGxhY2Vob2xkZXJTdHlsZShwbGFjZWhvbGRlclN0eWxlPzogTmdTdHlsZUludGVyZmFjZSk6IHZvaWQge1xyXG4gICAgY29uc3Qgb3JpZ2luYWxQbGFjZWhvbGRlclN0eWxlID0gdGhpcy5wbGFjZWhvbGRlclN0eWxlO1xyXG4gICAgaWYgKHNoYWxsb3dFcXVhbChwbGFjZWhvbGRlclN0eWxlLCBvcmlnaW5hbFBsYWNlaG9sZGVyU3R5bGUpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMucGxhY2Vob2xkZXJOb2RlLnN0eWxlLmNzc1RleHQgPSBnZXRTdHlsZUFzVGV4dChwbGFjZWhvbGRlclN0eWxlKTtcclxuICAgIHRoaXMucGxhY2Vob2xkZXJTdHlsZSA9IHBsYWNlaG9sZGVyU3R5bGU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN5bmNQbGFjZWhvbGRlclN0eWxlKGU6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuYWZmaXhTdHlsZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnBsYWNlaG9sZGVyTm9kZS5zdHlsZS5jc3NUZXh0ID0gJyc7XHJcbiAgICB0aGlzLnBsYWNlaG9sZGVyU3R5bGUgPSB1bmRlZmluZWQ7XHJcbiAgICBjb25zdCBzdHlsZU9iaiA9IHtcclxuICAgICAgd2lkdGg6IHRoaXMucGxhY2Vob2xkZXJOb2RlLm9mZnNldFdpZHRoLFxyXG4gICAgICBoZWlnaHQ6IHRoaXMuZml4ZWRFbC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodFxyXG4gICAgfTtcclxuICAgIHRoaXMuc2V0QWZmaXhTdHlsZShlLCB7XHJcbiAgICAgIC4uLnRoaXMuYWZmaXhTdHlsZSxcclxuICAgICAgLi4uc3R5bGVPYmpcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zZXRQbGFjZWhvbGRlclN0eWxlKHN0eWxlT2JqKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVBvc2l0aW9uKGU6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0YXJnZXROb2RlID0gdGhpcy50YXJnZXQ7XHJcbiAgICBsZXQgb2Zmc2V0VG9wID0gdGhpcy5uek9mZnNldFRvcDtcclxuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuc2Nyb2xsU3J2LmdldFNjcm9sbCh0YXJnZXROb2RlLCB0cnVlKTtcclxuICAgIGNvbnN0IGVsZW1PZmZzZXQgPSB0aGlzLmdldE9mZnNldCh0aGlzLnBsYWNlaG9sZGVyTm9kZSwgdGFyZ2V0Tm9kZSEpO1xyXG4gICAgY29uc3QgZml4ZWROb2RlID0gdGhpcy5maXhlZEVsLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBjb25zdCBlbGVtU2l6ZSA9IHtcclxuICAgICAgd2lkdGg6IGZpeGVkTm9kZS5vZmZzZXRXaWR0aCxcclxuICAgICAgaGVpZ2h0OiBmaXhlZE5vZGUub2Zmc2V0SGVpZ2h0XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgb2Zmc2V0TW9kZSA9IHtcclxuICAgICAgdG9wOiBmYWxzZSxcclxuICAgICAgYm90dG9tOiBmYWxzZVxyXG4gICAgfTtcclxuICAgIC8vIERlZmF1bHQgdG8gYG9mZnNldFRvcD0wYC5cclxuICAgIGlmICh0eXBlb2Ygb2Zmc2V0VG9wICE9PSAnbnVtYmVyJyAmJiB0eXBlb2YgdGhpcy5uek9mZnNldEJvdHRvbSAhPT0gJ251bWJlcicpIHtcclxuICAgICAgb2Zmc2V0TW9kZS50b3AgPSB0cnVlO1xyXG4gICAgICBvZmZzZXRUb3AgPSAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgb2Zmc2V0TW9kZS50b3AgPSB0eXBlb2Ygb2Zmc2V0VG9wID09PSAnbnVtYmVyJztcclxuICAgICAgb2Zmc2V0TW9kZS5ib3R0b20gPSB0eXBlb2YgdGhpcy5uek9mZnNldEJvdHRvbSA9PT0gJ251bWJlcic7XHJcbiAgICB9XHJcbiAgICBjb25zdCB0YXJnZXRSZWN0ID0gdGhpcy5nZXRUYXJnZXRSZWN0KHRhcmdldE5vZGUgYXMgV2luZG93KTtcclxuICAgIGNvbnN0IHRhcmdldElubmVySGVpZ2h0ID0gKHRhcmdldE5vZGUgYXMgV2luZG93KS5pbm5lckhlaWdodCB8fCAodGFyZ2V0Tm9kZSBhcyBIVE1MRWxlbWVudCkuY2xpZW50SGVpZ2h0O1xyXG4gICAgaWYgKHNjcm9sbFRvcCA+PSBlbGVtT2Zmc2V0LnRvcCAtIChvZmZzZXRUb3AgYXMgbnVtYmVyKSAmJiBvZmZzZXRNb2RlLnRvcCkge1xyXG4gICAgICBjb25zdCB3aWR0aCA9IGVsZW1PZmZzZXQud2lkdGg7XHJcbiAgICAgIGNvbnN0IHRvcCA9IHRhcmdldFJlY3QudG9wICsgKG9mZnNldFRvcCBhcyBudW1iZXIpO1xyXG4gICAgICB0aGlzLnNldEFmZml4U3R5bGUoZSwge1xyXG4gICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgICAgIHRvcCxcclxuICAgICAgICBsZWZ0OiB0YXJnZXRSZWN0LmxlZnQgKyBlbGVtT2Zmc2V0LmxlZnQsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiBgY2FsYygxMDB2aCAtICR7dG9wfXB4KWAsXHJcbiAgICAgICAgd2lkdGhcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuc2V0UGxhY2Vob2xkZXJTdHlsZSh7XHJcbiAgICAgICAgd2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiBlbGVtU2l6ZS5oZWlnaHRcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICBzY3JvbGxUb3AgPD0gZWxlbU9mZnNldC50b3AgKyBlbGVtU2l6ZS5oZWlnaHQgKyAodGhpcy5uek9mZnNldEJvdHRvbSBhcyBudW1iZXIpIC0gdGFyZ2V0SW5uZXJIZWlnaHQgJiZcclxuICAgICAgb2Zmc2V0TW9kZS5ib3R0b21cclxuICAgICkge1xyXG4gICAgICBjb25zdCB0YXJnZXRCb3R0b21PZmZldCA9IHRhcmdldE5vZGUgPT09IHdpbmRvdyA/IDAgOiB3aW5kb3cuaW5uZXJIZWlnaHQgLSB0YXJnZXRSZWN0LmJvdHRvbSE7XHJcbiAgICAgIGNvbnN0IHdpZHRoID0gZWxlbU9mZnNldC53aWR0aDtcclxuICAgICAgdGhpcy5zZXRBZmZpeFN0eWxlKGUsIHtcclxuICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICAgICAgICBib3R0b206IHRhcmdldEJvdHRvbU9mZmV0ICsgKHRoaXMubnpPZmZzZXRCb3R0b20gYXMgbnVtYmVyKSxcclxuICAgICAgICBsZWZ0OiB0YXJnZXRSZWN0LmxlZnQgKyBlbGVtT2Zmc2V0LmxlZnQsXHJcbiAgICAgICAgd2lkdGhcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuc2V0UGxhY2Vob2xkZXJTdHlsZSh7XHJcbiAgICAgICAgd2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiBlbGVtT2Zmc2V0LmhlaWdodFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBlLnR5cGUgPT09ICdyZXNpemUnICYmXHJcbiAgICAgICAgdGhpcy5hZmZpeFN0eWxlICYmXHJcbiAgICAgICAgdGhpcy5hZmZpeFN0eWxlLnBvc2l0aW9uID09PSAnZml4ZWQnICYmXHJcbiAgICAgICAgdGhpcy5wbGFjZWhvbGRlck5vZGUub2Zmc2V0V2lkdGhcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBZmZpeFN0eWxlKGUsIHtcclxuICAgICAgICAgIC4uLnRoaXMuYWZmaXhTdHlsZSxcclxuICAgICAgICAgIHdpZHRoOiB0aGlzLnBsYWNlaG9sZGVyTm9kZS5vZmZzZXRXaWR0aFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2V0QWZmaXhTdHlsZShlKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNldFBsYWNlaG9sZGVyU3R5bGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZS50eXBlID09PSAncmVzaXplJykge1xyXG4gICAgICB0aGlzLnN5bmNQbGFjZWhvbGRlclN0eWxlKGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=
/**
 * @fileoverview added by tsickle
 * Generated from: nz-affix.component.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYWZmaXguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9hZmZpeC8iLCJzb3VyY2VzIjpbIm56LWFmZml4LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxFQUdOLE1BQU0sRUFFTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUNMLGNBQWMsRUFDZCxZQUFZLEVBQ1osV0FBVyxFQUVYLGVBQWUsRUFDZixlQUFlLEVBQ2YsVUFBVSxFQUNYLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7OztBQUV6Qyx5QkFNQzs7O0lBTEMseUJBQVk7O0lBQ1osMEJBQWE7O0lBQ2IsMkJBQWU7O0lBQ2YsNEJBQWdCOztJQUNoQiw0QkFBZ0I7OztNQUdaLHdCQUF3QixHQUFHLE9BQU87O01BQ2xDLG1CQUFtQixHQUFHLFdBQVc7O01BQ2pDLDRCQUE0QixHQUFHLEVBQUU7O01BQ2pDLHVCQUF1QixHQUFHLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSxDQUFDO0FBZ0IvRyxNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7Ozs7SUE4QjNC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QUFDLFFBQVE7WUFqRWxCLGVBQWU7WUFDZixlQUFlO1lBakJmLE1BQU07WUFWQyxRQUFROzs7c0JBNERkLFNBQVMsU0FBQyxTQUFTLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO3VCQUVyQyxLQUFLOzBCQUVMLEtBQUs7NkJBS0wsS0FBSzt1QkFLTCxNQUFNOztBQVBQO0lBRkMsVUFBVSxDQUFnQix3QkFBd0IsRUFBRSxDQUFDLENBQUM7SUFDdEQsV0FBVyxFQUFFOztxREFDYTtBQUszQjtJQUZDLFVBQVUsQ0FBZ0Isd0JBQXdCLEVBQUUsSUFBSSxDQUFDO0lBQ3pELFdBQVcsRUFBRTs7d0RBQ2dCOzs7Ozs7SUFaOUIsbUNBQW9GOztJQUVwRixvQ0FBNkM7O0lBRTdDLHVDQUcyQjs7SUFFM0IsMENBRzhCOztJQUU5QixvQ0FBMEQ7Ozs7O0lBRTFELDJDQUE4Qzs7Ozs7SUFFOUMsc0NBQXNDOzs7OztJQUN0Qyw0Q0FBNEM7Ozs7O0lBQzVDLG1DQUFtRDs7Ozs7SUFDbkQsbUNBQXlCOzs7OztJQUN6QixvQ0FBMkI7O0lBVXpCLDJDQUF1Qzs7Ozs7SUFDdkMscUNBQWtDOzs7OztJQUNsQyxrQ0FBc0I7Ozs7O0lBQ3RCLG9DQUEwQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5qZWN0LFxyXG4gIElucHV0LFxyXG4gIE5nWm9uZSxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQsIG1lcmdlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgYXVkaXRUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBnZXRTdHlsZUFzVGV4dCxcclxuICBzaGFsbG93RXF1YWwsXHJcbiAgSW5wdXROdW1iZXIsXHJcbiAgTmdTdHlsZUludGVyZmFjZSxcclxuICBOekNvbmZpZ1NlcnZpY2UsXHJcbiAgTnpTY3JvbGxTZXJ2aWNlLFxyXG4gIFdpdGhDb25maWdcclxufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBpc1RhcmdldFdpbmRvdyB9IGZyb20gJy4vdXRpbHMnO1xyXG5cclxuaW50ZXJmYWNlIFNpbXBsZVJlY3Qge1xyXG4gIHRvcDogbnVtYmVyO1xyXG4gIGxlZnQ6IG51bWJlcjtcclxuICB3aWR0aD86IG51bWJlcjtcclxuICBoZWlnaHQ/OiBudW1iZXI7XHJcbiAgYm90dG9tPzogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAnYWZmaXgnO1xyXG5jb25zdCBOWl9BRkZJWF9DTFNfUFJFRklYID0gJ2FudC1hZmZpeCc7XHJcbmNvbnN0IE5aX0FGRklYX0RFRkFVTFRfU0NST0xMX1RJTUUgPSAyMDtcclxuY29uc3QgTlpfQUZGSVhfUkVTUE9ORF9FVkVOVFMgPSBbJ3Jlc2l6ZScsICdzY3JvbGwnLCAndG91Y2hzdGFydCcsICd0b3VjaG1vdmUnLCAndG91Y2hlbmQnLCAncGFnZXNob3cnLCAnbG9hZCddO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei1hZmZpeCcsXHJcbiAgZXhwb3J0QXM6ICduekFmZml4JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotYWZmaXguY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICBuei1hZmZpeCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIE56QWZmaXhDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgQFZpZXdDaGlsZCgnZml4ZWRFbCcsIHsgc3RhdGljOiB0cnVlIH0pIHByaXZhdGUgZml4ZWRFbDogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XHJcblxyXG4gIEBJbnB1dCgpIG56VGFyZ2V0OiBzdHJpbmcgfCBFbGVtZW50IHwgV2luZG93O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIEBXaXRoQ29uZmlnPG51bWJlciB8IG51bGw+KE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgMClcclxuICBASW5wdXROdW1iZXIoKVxyXG4gIG56T2Zmc2V0VG9wOiBudWxsIHwgbnVtYmVyO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIEBXaXRoQ29uZmlnPG51bWJlciB8IG51bGw+KE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgbnVsbClcclxuICBASW5wdXROdW1iZXIoKVxyXG4gIG56T2Zmc2V0Qm90dG9tOiBudWxsIHwgbnVtYmVyO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIHByaXZhdGUgcmVhZG9ubHkgcGxhY2Vob2xkZXJOb2RlOiBIVE1MRWxlbWVudDtcclxuXHJcbiAgcHJpdmF0ZSBhZmZpeFN0eWxlPzogTmdTdHlsZUludGVyZmFjZTtcclxuICBwcml2YXRlIHBsYWNlaG9sZGVyU3R5bGU/OiBOZ1N0eWxlSW50ZXJmYWNlO1xyXG4gIHByaXZhdGUgc2Nyb2xsJDogU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xyXG4gIHByaXZhdGUgdGltZW91dD86IG51bWJlcjtcclxuICBwcml2YXRlIGRvY3VtZW50OiBEb2N1bWVudDtcclxuXHJcbiAgcHJpdmF0ZSBnZXQgdGFyZ2V0KCk6IEVsZW1lbnQgfCBXaW5kb3cge1xyXG4gICAgY29uc3QgZWwgPSB0aGlzLm56VGFyZ2V0O1xyXG4gICAgcmV0dXJuICh0eXBlb2YgZWwgPT09ICdzdHJpbmcnID8gdGhpcy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKSA6IGVsKSB8fCB3aW5kb3c7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGVsOiBFbGVtZW50UmVmLFxyXG4gICAgQEluamVjdChET0NVTUVOVCkgZG9jOiBhbnksIC8vIHRzbGludDpkaXNhYmxlLWxpbmUgbm8tYW55XHJcbiAgICBwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHNjcm9sbFNydjogTnpTY3JvbGxTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcclxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtXHJcbiAgKSB7XHJcbiAgICAvLyBUaGUgd3JhcHBlciB3b3VsZCBzdGF5IGF0IHRoZSBvcmlnaW5hbCBwb3NpdGlvbiBhcyBhIHBsYWNlaG9sZGVyLlxyXG4gICAgdGhpcy5wbGFjZWhvbGRlck5vZGUgPSBlbC5uYXRpdmVFbGVtZW50O1xyXG4gICAgdGhpcy5kb2N1bWVudCA9IGRvYztcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgbnpPZmZzZXRCb3R0b20sIG56T2Zmc2V0VG9wLCBuelRhcmdldCB9ID0gY2hhbmdlcztcclxuXHJcbiAgICBpZiAobnpPZmZzZXRCb3R0b20gfHwgbnpPZmZzZXRUb3ApIHtcclxuICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbih7fSBhcyBFdmVudCk7XHJcbiAgICB9XHJcbiAgICBpZiAobnpUYXJnZXQpIHtcclxuICAgICAgdGhpcy5yZWdpc3Rlckxpc3RlbmVycygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZWdpc3Rlckxpc3RlbmVycygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZWdpc3Rlckxpc3RlbmVycygpOiB2b2lkIHtcclxuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXJzKCk7XHJcbiAgICB0aGlzLnNjcm9sbCQgPSB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgIHJldHVybiBtZXJnZSguLi5OWl9BRkZJWF9SRVNQT05EX0VWRU5UUy5tYXAoZXZOYW1lID0+IGZyb21FdmVudCh0aGlzLnRhcmdldCwgZXZOYW1lKSkpXHJcbiAgICAgICAgLnBpcGUoYXVkaXRUaW1lKE5aX0FGRklYX0RFRkFVTFRfU0NST0xMX1RJTUUpKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoZSA9PiB0aGlzLnVwZGF0ZVBvc2l0aW9uKGUpKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLnVwZGF0ZVBvc2l0aW9uKHt9IGFzIEV2ZW50KSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbW92ZUxpc3RlbmVycygpOiB2b2lkIHtcclxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xyXG4gICAgdGhpcy5zY3JvbGwkLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBnZXRPZmZzZXQoZWxlbWVudDogRWxlbWVudCwgdGFyZ2V0OiBFbGVtZW50IHwgV2luZG93IHwgdW5kZWZpbmVkKTogU2ltcGxlUmVjdCB7XHJcbiAgICBjb25zdCBlbGVtUmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBjb25zdCB0YXJnZXRSZWN0ID0gdGhpcy5nZXRUYXJnZXRSZWN0KHRhcmdldCEpO1xyXG5cclxuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuc2Nyb2xsU3J2LmdldFNjcm9sbCh0YXJnZXQsIHRydWUpO1xyXG4gICAgY29uc3Qgc2Nyb2xsTGVmdCA9IHRoaXMuc2Nyb2xsU3J2LmdldFNjcm9sbCh0YXJnZXQsIGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBkb2NFbGVtID0gdGhpcy5kb2N1bWVudC5ib2R5O1xyXG4gICAgY29uc3QgY2xpZW50VG9wID0gZG9jRWxlbS5jbGllbnRUb3AgfHwgMDtcclxuICAgIGNvbnN0IGNsaWVudExlZnQgPSBkb2NFbGVtLmNsaWVudExlZnQgfHwgMDtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0b3A6IGVsZW1SZWN0LnRvcCAtIHRhcmdldFJlY3QudG9wICsgc2Nyb2xsVG9wIC0gY2xpZW50VG9wLFxyXG4gICAgICBsZWZ0OiBlbGVtUmVjdC5sZWZ0IC0gdGFyZ2V0UmVjdC5sZWZ0ICsgc2Nyb2xsTGVmdCAtIGNsaWVudExlZnQsXHJcbiAgICAgIHdpZHRoOiBlbGVtUmVjdC53aWR0aCxcclxuICAgICAgaGVpZ2h0OiBlbGVtUmVjdC5oZWlnaHRcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFRhcmdldFJlY3QodGFyZ2V0OiBFbGVtZW50IHwgV2luZG93KTogU2ltcGxlUmVjdCB7XHJcbiAgICByZXR1cm4gIWlzVGFyZ2V0V2luZG93KHRhcmdldClcclxuICAgICAgPyB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuICAgICAgOiB7XHJcbiAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgYm90dG9tOiAwXHJcbiAgICAgICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0QWZmaXhTdHlsZShlOiBFdmVudCwgYWZmaXhTdHlsZT86IE5nU3R5bGVJbnRlcmZhY2UpOiB2b2lkIHtcclxuICAgIGNvbnN0IG9yaWdpbmFsQWZmaXhTdHlsZSA9IHRoaXMuYWZmaXhTdHlsZTtcclxuICAgIGNvbnN0IGlzV2luZG93ID0gdGhpcy50YXJnZXQgPT09IHdpbmRvdztcclxuICAgIGlmIChlLnR5cGUgPT09ICdzY3JvbGwnICYmIG9yaWdpbmFsQWZmaXhTdHlsZSAmJiBhZmZpeFN0eWxlICYmIGlzV2luZG93KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChzaGFsbG93RXF1YWwob3JpZ2luYWxBZmZpeFN0eWxlLCBhZmZpeFN0eWxlKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZml4ZWQgPSAhIWFmZml4U3R5bGU7XHJcbiAgICBjb25zdCB3cmFwRWwgPSB0aGlzLmZpeGVkRWwubmF0aXZlRWxlbWVudDtcclxuICAgIHdyYXBFbC5zdHlsZS5jc3NUZXh0ID0gZ2V0U3R5bGVBc1RleHQoYWZmaXhTdHlsZSk7XHJcbiAgICB0aGlzLmFmZml4U3R5bGUgPSBhZmZpeFN0eWxlO1xyXG4gICAgaWYgKGZpeGVkKSB7XHJcbiAgICAgIHdyYXBFbC5jbGFzc0xpc3QuYWRkKE5aX0FGRklYX0NMU19QUkVGSVgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgd3JhcEVsLmNsYXNzTGlzdC5yZW1vdmUoTlpfQUZGSVhfQ0xTX1BSRUZJWCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKChhZmZpeFN0eWxlICYmICFvcmlnaW5hbEFmZml4U3R5bGUpIHx8ICghYWZmaXhTdHlsZSAmJiBvcmlnaW5hbEFmZml4U3R5bGUpKSB7XHJcbiAgICAgIHRoaXMubnpDaGFuZ2UuZW1pdChmaXhlZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFBsYWNlaG9sZGVyU3R5bGUocGxhY2Vob2xkZXJTdHlsZT86IE5nU3R5bGVJbnRlcmZhY2UpOiB2b2lkIHtcclxuICAgIGNvbnN0IG9yaWdpbmFsUGxhY2Vob2xkZXJTdHlsZSA9IHRoaXMucGxhY2Vob2xkZXJTdHlsZTtcclxuICAgIGlmIChzaGFsbG93RXF1YWwocGxhY2Vob2xkZXJTdHlsZSwgb3JpZ2luYWxQbGFjZWhvbGRlclN0eWxlKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnBsYWNlaG9sZGVyTm9kZS5zdHlsZS5jc3NUZXh0ID0gZ2V0U3R5bGVBc1RleHQocGxhY2Vob2xkZXJTdHlsZSk7XHJcbiAgICB0aGlzLnBsYWNlaG9sZGVyU3R5bGUgPSBwbGFjZWhvbGRlclN0eWxlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzeW5jUGxhY2Vob2xkZXJTdHlsZShlOiBFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmFmZml4U3R5bGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wbGFjZWhvbGRlck5vZGUuc3R5bGUuY3NzVGV4dCA9ICcnO1xyXG4gICAgdGhpcy5wbGFjZWhvbGRlclN0eWxlID0gdW5kZWZpbmVkO1xyXG4gICAgY29uc3Qgc3R5bGVPYmogPSB7XHJcbiAgICAgIHdpZHRoOiB0aGlzLnBsYWNlaG9sZGVyTm9kZS5vZmZzZXRXaWR0aCxcclxuICAgICAgaGVpZ2h0OiB0aGlzLmZpeGVkRWwubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHRcclxuICAgIH07XHJcbiAgICB0aGlzLnNldEFmZml4U3R5bGUoZSwge1xyXG4gICAgICAuLi50aGlzLmFmZml4U3R5bGUsXHJcbiAgICAgIC4uLnN0eWxlT2JqXHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2V0UGxhY2Vob2xkZXJTdHlsZShzdHlsZU9iaik7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVQb3NpdGlvbihlOiBFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdGFyZ2V0Tm9kZSA9IHRoaXMudGFyZ2V0O1xyXG4gICAgbGV0IG9mZnNldFRvcCA9IHRoaXMubnpPZmZzZXRUb3A7XHJcbiAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLnNjcm9sbFNydi5nZXRTY3JvbGwodGFyZ2V0Tm9kZSwgdHJ1ZSk7XHJcbiAgICBjb25zdCBlbGVtT2Zmc2V0ID0gdGhpcy5nZXRPZmZzZXQodGhpcy5wbGFjZWhvbGRlck5vZGUsIHRhcmdldE5vZGUhKTtcclxuICAgIGNvbnN0IGZpeGVkTm9kZSA9IHRoaXMuZml4ZWRFbC5uYXRpdmVFbGVtZW50O1xyXG4gICAgY29uc3QgZWxlbVNpemUgPSB7XHJcbiAgICAgIHdpZHRoOiBmaXhlZE5vZGUub2Zmc2V0V2lkdGgsXHJcbiAgICAgIGhlaWdodDogZml4ZWROb2RlLm9mZnNldEhlaWdodFxyXG4gICAgfTtcclxuICAgIGNvbnN0IG9mZnNldE1vZGUgPSB7XHJcbiAgICAgIHRvcDogZmFsc2UsXHJcbiAgICAgIGJvdHRvbTogZmFsc2VcclxuICAgIH07XHJcbiAgICAvLyBEZWZhdWx0IHRvIGBvZmZzZXRUb3A9MGAuXHJcbiAgICBpZiAodHlwZW9mIG9mZnNldFRvcCAhPT0gJ251bWJlcicgJiYgdHlwZW9mIHRoaXMubnpPZmZzZXRCb3R0b20gIT09ICdudW1iZXInKSB7XHJcbiAgICAgIG9mZnNldE1vZGUudG9wID0gdHJ1ZTtcclxuICAgICAgb2Zmc2V0VG9wID0gMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG9mZnNldE1vZGUudG9wID0gdHlwZW9mIG9mZnNldFRvcCA9PT0gJ251bWJlcic7XHJcbiAgICAgIG9mZnNldE1vZGUuYm90dG9tID0gdHlwZW9mIHRoaXMubnpPZmZzZXRCb3R0b20gPT09ICdudW1iZXInO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdGFyZ2V0UmVjdCA9IHRoaXMuZ2V0VGFyZ2V0UmVjdCh0YXJnZXROb2RlIGFzIFdpbmRvdyk7XHJcbiAgICBjb25zdCB0YXJnZXRJbm5lckhlaWdodCA9ICh0YXJnZXROb2RlIGFzIFdpbmRvdykuaW5uZXJIZWlnaHQgfHwgKHRhcmdldE5vZGUgYXMgSFRNTEVsZW1lbnQpLmNsaWVudEhlaWdodDtcclxuICAgIGlmIChzY3JvbGxUb3AgPj0gZWxlbU9mZnNldC50b3AgLSAob2Zmc2V0VG9wIGFzIG51bWJlcikgJiYgb2Zmc2V0TW9kZS50b3ApIHtcclxuICAgICAgY29uc3Qgd2lkdGggPSBlbGVtT2Zmc2V0LndpZHRoO1xyXG4gICAgICBjb25zdCB0b3AgPSB0YXJnZXRSZWN0LnRvcCArIChvZmZzZXRUb3AgYXMgbnVtYmVyKTtcclxuICAgICAgdGhpcy5zZXRBZmZpeFN0eWxlKGUsIHtcclxuICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICAgICAgICB0b3AsXHJcbiAgICAgICAgbGVmdDogdGFyZ2V0UmVjdC5sZWZ0ICsgZWxlbU9mZnNldC5sZWZ0LFxyXG4gICAgICAgIG1heEhlaWdodDogYGNhbGMoMTAwdmggLSAke3RvcH1weClgLFxyXG4gICAgICAgIHdpZHRoXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnNldFBsYWNlaG9sZGVyU3R5bGUoe1xyXG4gICAgICAgIHdpZHRoLFxyXG4gICAgICAgIGhlaWdodDogZWxlbVNpemUuaGVpZ2h0XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChcclxuICAgICAgc2Nyb2xsVG9wIDw9IGVsZW1PZmZzZXQudG9wICsgZWxlbVNpemUuaGVpZ2h0ICsgKHRoaXMubnpPZmZzZXRCb3R0b20gYXMgbnVtYmVyKSAtIHRhcmdldElubmVySGVpZ2h0ICYmXHJcbiAgICAgIG9mZnNldE1vZGUuYm90dG9tXHJcbiAgICApIHtcclxuICAgICAgY29uc3QgdGFyZ2V0Qm90dG9tT2ZmZXQgPSB0YXJnZXROb2RlID09PSB3aW5kb3cgPyAwIDogd2luZG93LmlubmVySGVpZ2h0IC0gdGFyZ2V0UmVjdC5ib3R0b20hO1xyXG4gICAgICBjb25zdCB3aWR0aCA9IGVsZW1PZmZzZXQud2lkdGg7XHJcbiAgICAgIHRoaXMuc2V0QWZmaXhTdHlsZShlLCB7XHJcbiAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICAgICAgYm90dG9tOiB0YXJnZXRCb3R0b21PZmZldCArICh0aGlzLm56T2Zmc2V0Qm90dG9tIGFzIG51bWJlciksXHJcbiAgICAgICAgbGVmdDogdGFyZ2V0UmVjdC5sZWZ0ICsgZWxlbU9mZnNldC5sZWZ0LFxyXG4gICAgICAgIHdpZHRoXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnNldFBsYWNlaG9sZGVyU3R5bGUoe1xyXG4gICAgICAgIHdpZHRoLFxyXG4gICAgICAgIGhlaWdodDogZWxlbU9mZnNldC5oZWlnaHRcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgZS50eXBlID09PSAncmVzaXplJyAmJlxyXG4gICAgICAgIHRoaXMuYWZmaXhTdHlsZSAmJlxyXG4gICAgICAgIHRoaXMuYWZmaXhTdHlsZS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJyAmJlxyXG4gICAgICAgIHRoaXMucGxhY2Vob2xkZXJOb2RlLm9mZnNldFdpZHRoXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMuc2V0QWZmaXhTdHlsZShlLCB7XHJcbiAgICAgICAgICAuLi50aGlzLmFmZml4U3R5bGUsXHJcbiAgICAgICAgICB3aWR0aDogdGhpcy5wbGFjZWhvbGRlck5vZGUub2Zmc2V0V2lkdGhcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNldEFmZml4U3R5bGUoZSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXRQbGFjZWhvbGRlclN0eWxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGUudHlwZSA9PT0gJ3Jlc2l6ZScpIHtcclxuICAgICAgdGhpcy5zeW5jUGxhY2Vob2xkZXJTdHlsZShlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19
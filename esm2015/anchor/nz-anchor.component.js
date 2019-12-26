/**
 * @fileoverview added by tsickle
 * Generated from: nz-anchor.component.ts
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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { fromEvent } from 'rxjs';
import { distinctUntilChanged, throttleTime } from 'rxjs/operators';
import { toNumber, InputBoolean, InputNumber, NzConfigService, NzScrollService, WithConfig } from 'ng-zorro-antd/core';
/**
 * @record
 */
function Section() { }
if (false) {
    /** @type {?} */
    Section.prototype.comp;
    /** @type {?} */
    Section.prototype.top;
}
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'anchor';
/** @type {?} */
const sharpMatcherRegx = /#([^#]+)$/;
export class NzAnchorComponent {
    /**
     * @param {?} nzConfigService
     * @param {?} scrollSrv
     * @param {?} doc
     * @param {?} cdr
     * @param {?} platform
     */
    constructor(nzConfigService, scrollSrv, doc, cdr, platform) {
        this.nzConfigService = nzConfigService;
        this.scrollSrv = scrollSrv;
        this.doc = doc;
        this.cdr = cdr;
        this.platform = platform;
        this.nzAffix = true;
        this.nzClick = new EventEmitter();
        this.nzScroll = new EventEmitter();
        this.visible = false;
        this.wrapperStyle = { 'max-height': '100vh' };
        this.links = [];
        this.animating = false;
        this.target = null;
        this.scroll$ = null;
        this.destroyed = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzOffsetTop(value) {
        this._offsetTop = toNumber(value, 0);
        this.wrapperStyle = {
            'max-height': `calc(100vh - ${this._offsetTop}px)`
        };
    }
    /**
     * @return {?}
     */
    get nzOffsetTop() {
        return this._offsetTop;
    }
    /**
     * @param {?} el
     * @return {?}
     */
    set nzTarget(el) {
        this.target = typeof el === 'string' ? this.doc.querySelector(el) : el;
        this.registerScrollEvent();
    }
    /**
     * @param {?} link
     * @return {?}
     */
    registerLink(link) {
        this.links.push(link);
    }
    /**
     * @param {?} link
     * @return {?}
     */
    unregisterLink(link) {
        this.links.splice(this.links.indexOf(link), 1);
    }
    /**
     * @private
     * @return {?}
     */
    getTarget() {
        return this.target || window;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.registerScrollEvent();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroyed = true;
        this.removeListen();
    }
    /**
     * @private
     * @return {?}
     */
    registerScrollEvent() {
        if (!this.platform.isBrowser) {
            return;
        }
        this.removeListen();
        this.scroll$ = fromEvent(this.getTarget(), 'scroll')
            .pipe(throttleTime(50), distinctUntilChanged())
            .subscribe((/**
         * @return {?}
         */
        () => this.handleScroll()));
        // Browser would maintain the scrolling position when refreshing.
        // So we have to delay calculation in avoid of getting a incorrect result.
        setTimeout((/**
         * @return {?}
         */
        () => this.handleScroll()));
    }
    /**
     * @private
     * @return {?}
     */
    removeListen() {
        if (this.scroll$) {
            this.scroll$.unsubscribe();
        }
    }
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    getOffsetTop(element) {
        if (!element || !element.getClientRects().length) {
            return 0;
        }
        /** @type {?} */
        const rect = element.getBoundingClientRect();
        if (rect.width || rect.height) {
            if (this.getTarget() === window) {
                return rect.top - (/** @type {?} */ ((/** @type {?} */ (element.ownerDocument)).documentElement)).clientTop;
            }
            return rect.top - ((/** @type {?} */ (this.getTarget()))).getBoundingClientRect().top;
        }
        return rect.top;
    }
    /**
     * @return {?}
     */
    handleScroll() {
        if (typeof document === 'undefined' || this.destroyed || this.animating) {
            return;
        }
        /** @type {?} */
        const sections = [];
        /** @type {?} */
        const scope = (this.nzOffsetTop || 0) + this.nzBounds;
        this.links.forEach((/**
         * @param {?} comp
         * @return {?}
         */
        comp => {
            /** @type {?} */
            const sharpLinkMatch = sharpMatcherRegx.exec(comp.nzHref.toString());
            if (!sharpLinkMatch) {
                return;
            }
            /** @type {?} */
            const target = this.doc.getElementById(sharpLinkMatch[1]);
            if (target) {
                /** @type {?} */
                const top = this.getOffsetTop(target);
                if (top < scope) {
                    sections.push({
                        top,
                        comp
                    });
                }
            }
        }));
        this.visible = !!sections.length;
        if (!this.visible) {
            this.clearActive();
            this.cdr.detectChanges();
        }
        else {
            /** @type {?} */
            const maxSection = sections.reduce((/**
             * @param {?} prev
             * @param {?} curr
             * @return {?}
             */
            (prev, curr) => (curr.top > prev.top ? curr : prev)));
            this.handleActive(maxSection.comp);
        }
    }
    /**
     * @private
     * @return {?}
     */
    clearActive() {
        this.links.forEach((/**
         * @param {?} i
         * @return {?}
         */
        i => {
            i.active = false;
            i.markForCheck();
        }));
    }
    /**
     * @private
     * @param {?} comp
     * @return {?}
     */
    handleActive(comp) {
        this.clearActive();
        comp.active = true;
        comp.markForCheck();
        /** @type {?} */
        const linkNode = (/** @type {?} */ (((/** @type {?} */ (comp.elementRef.nativeElement))).querySelector('.ant-anchor-link-title')));
        this.ink.nativeElement.style.top = `${linkNode.offsetTop + linkNode.clientHeight / 2 - 4.5}px`;
        this.visible = true;
        this.cdr.detectChanges();
        this.nzScroll.emit(comp);
    }
    /**
     * @param {?} linkComp
     * @return {?}
     */
    handleScrollTo(linkComp) {
        /** @type {?} */
        const el = this.doc.querySelector(linkComp.nzHref);
        if (!el) {
            return;
        }
        this.animating = true;
        /** @type {?} */
        const containerScrollTop = this.scrollSrv.getScroll(this.getTarget());
        /** @type {?} */
        const elOffsetTop = this.getOffsetTop(el);
        /** @type {?} */
        const targetScrollTop = containerScrollTop + elOffsetTop - (this.nzOffsetTop || 0);
        this.scrollSrv.scrollTo(this.getTarget(), targetScrollTop, undefined, (/**
         * @return {?}
         */
        () => {
            this.animating = false;
            this.handleActive(linkComp);
        }));
        this.nzClick.emit(linkComp.nzHref);
    }
}
NzAnchorComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-anchor',
                exportAs: 'nzAnchor',
                preserveWhitespaces: false,
                template: "<nz-affix *ngIf=\"nzAffix;else content\" [nzOffsetTop]=\"nzOffsetTop\">\r\n  <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\r\n</nz-affix>\r\n<ng-template #content>\r\n  <div class=\"ant-anchor-wrapper\" [ngStyle]=\"wrapperStyle\">\r\n    <div class=\"ant-anchor\" [ngClass]=\"{'fixed': !nzAffix && !nzShowInkInFixed}\">\r\n      <div class=\"ant-anchor-ink\">\r\n        <div class=\"ant-anchor-ink-ball\" [class.visible]=\"visible\" #ink></div>\r\n      </div>\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n</ng-template>",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
NzAnchorComponent.ctorParameters = () => [
    { type: NzConfigService },
    { type: NzScrollService },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: ChangeDetectorRef },
    { type: Platform }
];
NzAnchorComponent.propDecorators = {
    ink: [{ type: ViewChild, args: ['ink', { static: false },] }],
    nzAffix: [{ type: Input }],
    nzShowInkInFixed: [{ type: Input }],
    nzBounds: [{ type: Input }],
    nzOffsetTop: [{ type: Input }],
    nzTarget: [{ type: Input }],
    nzClick: [{ type: Output }],
    nzScroll: [{ type: Output }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzAnchorComponent.prototype, "nzAffix", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, false),
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzAnchorComponent.prototype, "nzShowInkInFixed", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, 5),
    InputNumber(),
    tslib_1.__metadata("design:type", Number)
], NzAnchorComponent.prototype, "nzBounds", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], NzAnchorComponent.prototype, "nzOffsetTop", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.ink;
    /** @type {?} */
    NzAnchorComponent.prototype.nzAffix;
    /** @type {?} */
    NzAnchorComponent.prototype.nzShowInkInFixed;
    /** @type {?} */
    NzAnchorComponent.prototype.nzBounds;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype._offsetTop;
    /** @type {?} */
    NzAnchorComponent.prototype.nzClick;
    /** @type {?} */
    NzAnchorComponent.prototype.nzScroll;
    /** @type {?} */
    NzAnchorComponent.prototype.visible;
    /** @type {?} */
    NzAnchorComponent.prototype.wrapperStyle;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.links;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.animating;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.target;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.scroll$;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.destroyed;
    /** @type {?} */
    NzAnchorComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.scrollSrv;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.doc;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYW5jaG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvYW5jaG9yLyIsInNvdXJjZXMiOlsibnotYW5jaG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVwRSxPQUFPLEVBQ0wsUUFBUSxFQUNSLFlBQVksRUFDWixXQUFXLEVBRVgsZUFBZSxFQUNmLGVBQWUsRUFDZixVQUFVLEVBQ1gsTUFBTSxvQkFBb0IsQ0FBQzs7OztBQUk1QixzQkFHQzs7O0lBRkMsdUJBQTRCOztJQUM1QixzQkFBWTs7O01BR1Isd0JBQXdCLEdBQUcsUUFBUTs7TUFDbkMsZ0JBQWdCLEdBQUcsV0FBVztBQVVwQyxNQUFNLE9BQU8saUJBQWlCOzs7Ozs7OztJQWdENUIsWUFDUyxlQUFnQyxFQUMvQixTQUEwQixFQUVSLEdBQVEsRUFDMUIsR0FBc0IsRUFDdEIsUUFBa0I7UUFMbkIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQy9CLGNBQVMsR0FBVCxTQUFTLENBQWlCO1FBRVIsUUFBRyxHQUFILEdBQUcsQ0FBSztRQUMxQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBbkRILFlB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Y2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEluamVjdCxcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT3V0cHV0LFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgdGhyb3R0bGVUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHtcclxuICB0b051bWJlcixcclxuICBJbnB1dEJvb2xlYW4sXHJcbiAgSW5wdXROdW1iZXIsXHJcbiAgTmdTdHlsZUludGVyZmFjZSxcclxuICBOekNvbmZpZ1NlcnZpY2UsXHJcbiAgTnpTY3JvbGxTZXJ2aWNlLFxyXG4gIFdpdGhDb25maWdcclxufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpBbmNob3JMaW5rQ29tcG9uZW50IH0gZnJvbSAnLi9uei1hbmNob3ItbGluay5jb21wb25lbnQnO1xyXG5cclxuaW50ZXJmYWNlIFNlY3Rpb24ge1xyXG4gIGNvbXA6IE56QW5jaG9yTGlua0NvbXBvbmVudDtcclxuICB0b3A6IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ2FuY2hvcic7XHJcbmNvbnN0IHNoYXJwTWF0Y2hlclJlZ3ggPSAvIyhbXiNdKykkLztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotYW5jaG9yJyxcclxuICBleHBvcnRBczogJ256QW5jaG9yJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotYW5jaG9yLmNvbXBvbmVudC5odG1sJyxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekFuY2hvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQFZpZXdDaGlsZCgnaW5rJywgeyBzdGF0aWM6IGZhbHNlIH0pIHByaXZhdGUgaW5rOiBFbGVtZW50UmVmO1xyXG5cclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpBZmZpeCA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCBmYWxzZSlcclxuICBASW5wdXRCb29sZWFuKClcclxuICBuelNob3dJbmtJbkZpeGVkOiBib29sZWFuO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgNSlcclxuICBASW5wdXROdW1iZXIoKVxyXG4gIG56Qm91bmRzOiBudW1iZXI7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgQFdpdGhDb25maWc8bnVtYmVyPihOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpXHJcbiAgc2V0IG56T2Zmc2V0VG9wKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX29mZnNldFRvcCA9IHRvTnVtYmVyKHZhbHVlLCAwKTtcclxuICAgIHRoaXMud3JhcHBlclN0eWxlID0ge1xyXG4gICAgICAnbWF4LWhlaWdodCc6IGBjYWxjKDEwMHZoIC0gJHt0aGlzLl9vZmZzZXRUb3B9cHgpYFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGdldCBuek9mZnNldFRvcCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX29mZnNldFRvcDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX29mZnNldFRvcDogbnVtYmVyO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelRhcmdldChlbDogc3RyaW5nIHwgRWxlbWVudCkge1xyXG4gICAgdGhpcy50YXJnZXQgPSB0eXBlb2YgZWwgPT09ICdzdHJpbmcnID8gdGhpcy5kb2MucXVlcnlTZWxlY3RvcihlbCkgOiBlbDtcclxuICAgIHRoaXMucmVnaXN0ZXJTY3JvbGxFdmVudCgpO1xyXG4gIH1cclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpTY3JvbGwgPSBuZXcgRXZlbnRFbWl0dGVyPE56QW5jaG9yTGlua0NvbXBvbmVudD4oKTtcclxuXHJcbiAgdmlzaWJsZSA9IGZhbHNlO1xyXG4gIHdyYXBwZXJTdHlsZTogTmdTdHlsZUludGVyZmFjZSA9IHsgJ21heC1oZWlnaHQnOiAnMTAwdmgnIH07XHJcblxyXG4gIHByaXZhdGUgbGlua3M6IE56QW5jaG9yTGlua0NvbXBvbmVudFtdID0gW107XHJcbiAgcHJpdmF0ZSBhbmltYXRpbmcgPSBmYWxzZTtcclxuICBwcml2YXRlIHRhcmdldDogRWxlbWVudCB8IG51bGwgPSBudWxsO1xyXG4gIHByaXZhdGUgc2Nyb2xsJDogU3Vic2NyaXB0aW9uIHwgbnVsbCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBkZXN0cm95ZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHNjcm9sbFNydjogTnpTY3JvbGxTZXJ2aWNlLFxyXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xyXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSxcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtXHJcbiAgKSB7fVxyXG5cclxuICByZWdpc3RlckxpbmsobGluazogTnpBbmNob3JMaW5rQ29tcG9uZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLmxpbmtzLnB1c2gobGluayk7XHJcbiAgfVxyXG5cclxuICB1bnJlZ2lzdGVyTGluayhsaW5rOiBOekFuY2hvckxpbmtDb21wb25lbnQpOiB2b2lkIHtcclxuICAgIHRoaXMubGlua3Muc3BsaWNlKHRoaXMubGlua3MuaW5kZXhPZihsaW5rKSwgMSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFRhcmdldCgpOiBFbGVtZW50IHwgV2luZG93IHtcclxuICAgIHJldHVybiB0aGlzLnRhcmdldCB8fCB3aW5kb3c7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlZ2lzdGVyU2Nyb2xsRXZlbnQoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5yZW1vdmVMaXN0ZW4oKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVnaXN0ZXJTY3JvbGxFdmVudCgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yZW1vdmVMaXN0ZW4oKTtcclxuICAgIHRoaXMuc2Nyb2xsJCA9IGZyb21FdmVudCh0aGlzLmdldFRhcmdldCgpLCAnc2Nyb2xsJylcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgdGhyb3R0bGVUaW1lKDUwKSxcclxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmhhbmRsZVNjcm9sbCgpKTtcclxuICAgIC8vIEJyb3dzZXIgd291bGQgbWFpbnRhaW4gdGhlIHNjcm9sbGluZyBwb3NpdGlvbiB3aGVuIHJlZnJlc2hpbmcuXHJcbiAgICAvLyBTbyB3ZSBoYXZlIHRvIGRlbGF5IGNhbGN1bGF0aW9uIGluIGF2b2lkIG9mIGdldHRpbmcgYSBpbmNvcnJlY3QgcmVzdWx0LlxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmhhbmRsZVNjcm9sbCgpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVtb3ZlTGlzdGVuKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuc2Nyb2xsJCkge1xyXG4gICAgICB0aGlzLnNjcm9sbCQudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0T2Zmc2V0VG9wKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogbnVtYmVyIHtcclxuICAgIGlmICghZWxlbWVudCB8fCAhZWxlbWVudC5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgaWYgKHJlY3Qud2lkdGggfHwgcmVjdC5oZWlnaHQpIHtcclxuICAgICAgaWYgKHRoaXMuZ2V0VGFyZ2V0KCkgPT09IHdpbmRvdykge1xyXG4gICAgICAgIHJldHVybiByZWN0LnRvcCAtIGVsZW1lbnQub3duZXJEb2N1bWVudCEuZG9jdW1lbnRFbGVtZW50IS5jbGllbnRUb3A7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJlY3QudG9wIC0gKHRoaXMuZ2V0VGFyZ2V0KCkgYXMgSFRNTEVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcclxuICAgIH1cclxuICAgIHJldHVybiByZWN0LnRvcDtcclxuICB9XHJcblxyXG4gIGhhbmRsZVNjcm9sbCgpOiB2b2lkIHtcclxuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnIHx8IHRoaXMuZGVzdHJveWVkIHx8IHRoaXMuYW5pbWF0aW5nKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZWN0aW9uczogU2VjdGlvbltdID0gW107XHJcbiAgICBjb25zdCBzY29wZSA9ICh0aGlzLm56T2Zmc2V0VG9wIHx8IDApICsgdGhpcy5uekJvdW5kcztcclxuICAgIHRoaXMubGlua3MuZm9yRWFjaChjb21wID0+IHtcclxuICAgICAgY29uc3Qgc2hhcnBMaW5rTWF0Y2ggPSBzaGFycE1hdGNoZXJSZWd4LmV4ZWMoY29tcC5uekhyZWYudG9TdHJpbmcoKSk7XHJcbiAgICAgIGlmICghc2hhcnBMaW5rTWF0Y2gpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5kb2MuZ2V0RWxlbWVudEJ5SWQoc2hhcnBMaW5rTWF0Y2hbMV0pO1xyXG4gICAgICBpZiAodGFyZ2V0KSB7XHJcbiAgICAgICAgY29uc3QgdG9wID0gdGhpcy5nZXRPZmZzZXRUb3AodGFyZ2V0KTtcclxuICAgICAgICBpZiAodG9wIDwgc2NvcGUpIHtcclxuICAgICAgICAgIHNlY3Rpb25zLnB1c2goe1xyXG4gICAgICAgICAgICB0b3AsXHJcbiAgICAgICAgICAgIGNvbXBcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy52aXNpYmxlID0gISFzZWN0aW9ucy5sZW5ndGg7XHJcbiAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xyXG4gICAgICB0aGlzLmNsZWFyQWN0aXZlKCk7XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IG1heFNlY3Rpb24gPSBzZWN0aW9ucy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IChjdXJyLnRvcCA+IHByZXYudG9wID8gY3VyciA6IHByZXYpKTtcclxuICAgICAgdGhpcy5oYW5kbGVBY3RpdmUobWF4U2VjdGlvbi5jb21wKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xlYXJBY3RpdmUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmxpbmtzLmZvckVhY2goaSA9PiB7XHJcbiAgICAgIGkuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgIGkubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlQWN0aXZlKGNvbXA6IE56QW5jaG9yTGlua0NvbXBvbmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5jbGVhckFjdGl2ZSgpO1xyXG5cclxuICAgIGNvbXAuYWN0aXZlID0gdHJ1ZTtcclxuICAgIGNvbXAubWFya0ZvckNoZWNrKCk7XHJcblxyXG4gICAgY29uc3QgbGlua05vZGUgPSAoY29tcC5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTERpdkVsZW1lbnQpLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICcuYW50LWFuY2hvci1saW5rLXRpdGxlJ1xyXG4gICAgKSBhcyBIVE1MRWxlbWVudDtcclxuICAgIHRoaXMuaW5rLm5hdGl2ZUVsZW1lbnQuc3R5bGUudG9wID0gYCR7bGlua05vZGUub2Zmc2V0VG9wICsgbGlua05vZGUuY2xpZW50SGVpZ2h0IC8gMiAtIDQuNX1weGA7XHJcbiAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG5cclxuICAgIHRoaXMubnpTY3JvbGwuZW1pdChjb21wKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVNjcm9sbFRvKGxpbmtDb21wOiBOekFuY2hvckxpbmtDb21wb25lbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IGVsID0gdGhpcy5kb2MucXVlcnlTZWxlY3RvcihsaW5rQ29tcC5uekhyZWYpO1xyXG4gICAgaWYgKCFlbCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hbmltYXRpbmcgPSB0cnVlO1xyXG4gICAgY29uc3QgY29udGFpbmVyU2Nyb2xsVG9wID0gdGhpcy5zY3JvbGxTcnYuZ2V0U2Nyb2xsKHRoaXMuZ2V0VGFyZ2V0KCkpO1xyXG4gICAgY29uc3QgZWxPZmZzZXRUb3AgPSB0aGlzLmdldE9mZnNldFRvcChlbCk7XHJcbiAgICBjb25zdCB0YXJnZXRTY3JvbGxUb3AgPSBjb250YWluZXJTY3JvbGxUb3AgKyBlbE9mZnNldFRvcCAtICh0aGlzLm56T2Zmc2V0VG9wIHx8IDApO1xyXG4gICAgdGhpcy5zY3JvbGxTcnYuc2Nyb2xsVG8odGhpcy5nZXRUYXJnZXQoKSwgdGFyZ2V0U2Nyb2xsVG9wLCB1bmRlZmluZWQsICgpID0+IHtcclxuICAgICAgdGhpcy5hbmltYXRpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5oYW5kbGVBY3RpdmUobGlua0NvbXApO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLm56Q2xpY2suZW1pdChsaW5rQ29tcC5uekhyZWYpO1xyXG4gIH1cclxufVxyXG4iXX0=
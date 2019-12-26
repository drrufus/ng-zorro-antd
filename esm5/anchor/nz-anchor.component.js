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
var NZ_CONFIG_COMPONENT_NAME = 'anchor';
/** @type {?} */
var sharpMatcherRegx = /#([^#]+)$/;
var NzAnchorComponent = /** @class */ (function () {
    function NzAnchorComponent(nzConfigService, scrollSrv, doc, cdr, platform) {
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
    Object.defineProperty(NzAnchorComponent.prototype, "nzOffsetTop", {
        get: /**
         * @return {?}
         */
        function () {
            return this._offsetTop;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._offsetTop = toNumber(value, 0);
            this.wrapperStyle = {
                'max-height': "calc(100vh - " + this._offsetTop + "px)"
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzAnchorComponent.prototype, "nzTarget", {
        set: /**
         * @param {?} el
         * @return {?}
         */
        function (el) {
            this.target = typeof el === 'string' ? this.doc.querySelector(el) : el;
            this.registerScrollEvent();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} link
     * @return {?}
     */
    NzAnchorComponent.prototype.registerLink = /**
     * @param {?} link
     * @return {?}
     */
    function (link) {
        this.links.push(link);
    };
    /**
     * @param {?} link
     * @return {?}
     */
    NzAnchorComponent.prototype.unregisterLink = /**
     * @param {?} link
     * @return {?}
     */
    function (link) {
        this.links.splice(this.links.indexOf(link), 1);
    };
    /**
     * @private
     * @return {?}
     */
    NzAnchorComponent.prototype.getTarget = /**
     * @private
     * @return {?}
     */
    function () {
        return this.target || window;
    };
    /**
     * @return {?}
     */
    NzAnchorComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.registerScrollEvent();
    };
    /**
     * @return {?}
     */
    NzAnchorComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroyed = true;
        this.removeListen();
    };
    /**
     * @private
     * @return {?}
     */
    NzAnchorComponent.prototype.registerScrollEvent = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.platform.isBrowser) {
            return;
        }
        this.removeListen();
        this.scroll$ = fromEvent(this.getTarget(), 'scroll')
            .pipe(throttleTime(50), distinctUntilChanged())
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.handleScroll(); }));
        // Browser would maintain the scrolling position when refreshing.
        // So we have to delay calculation in avoid of getting a incorrect result.
        setTimeout((/**
         * @return {?}
         */
        function () { return _this.handleScroll(); }));
    };
    /**
     * @private
     * @return {?}
     */
    NzAnchorComponent.prototype.removeListen = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.scroll$) {
            this.scroll$.unsubscribe();
        }
    };
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    NzAnchorComponent.prototype.getOffsetTop = /**
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (!element || !element.getClientRects().length) {
            return 0;
        }
        /** @type {?} */
        var rect = element.getBoundingClientRect();
        if (rect.width || rect.height) {
            if (this.getTarget() === window) {
                return rect.top - (/** @type {?} */ ((/** @type {?} */ (element.ownerDocument)).documentElement)).clientTop;
            }
            return rect.top - ((/** @type {?} */ (this.getTarget()))).getBoundingClientRect().top;
        }
        return rect.top;
    };
    /**
     * @return {?}
     */
    NzAnchorComponent.prototype.handleScroll = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (typeof document === 'undefined' || this.destroyed || this.animating) {
            return;
        }
        /** @type {?} */
        var sections = [];
        /** @type {?} */
        var scope = (this.nzOffsetTop || 0) + this.nzBounds;
        this.links.forEach((/**
         * @param {?} comp
         * @return {?}
         */
        function (comp) {
            /** @type {?} */
            var sharpLinkMatch = sharpMatcherRegx.exec(comp.nzHref.toString());
            if (!sharpLinkMatch) {
                return;
            }
            /** @type {?} */
            var target = _this.doc.getElementById(sharpLinkMatch[1]);
            if (target) {
                /** @type {?} */
                var top_1 = _this.getOffsetTop(target);
                if (top_1 < scope) {
                    sections.push({
                        top: top_1,
                        comp: comp
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
            var maxSection = sections.reduce((/**
             * @param {?} prev
             * @param {?} curr
             * @return {?}
             */
            function (prev, curr) { return (curr.top > prev.top ? curr : prev); }));
            this.handleActive(maxSection.comp);
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzAnchorComponent.prototype.clearActive = /**
     * @private
     * @return {?}
     */
    function () {
        this.links.forEach((/**
         * @param {?} i
         * @return {?}
         */
        function (i) {
            i.active = false;
            i.markForCheck();
        }));
    };
    /**
     * @private
     * @param {?} comp
     * @return {?}
     */
    NzAnchorComponent.prototype.handleActive = /**
     * @private
     * @param {?} comp
     * @return {?}
     */
    function (comp) {
        this.clearActive();
        comp.active = true;
        comp.markForCheck();
        /** @type {?} */
        var linkNode = (/** @type {?} */ (((/** @type {?} */ (comp.elementRef.nativeElement))).querySelector('.ant-anchor-link-title')));
        this.ink.nativeElement.style.top = linkNode.offsetTop + linkNode.clientHeight / 2 - 4.5 + "px";
        this.visible = true;
        this.cdr.detectChanges();
        this.nzScroll.emit(comp);
    };
    /**
     * @param {?} linkComp
     * @return {?}
     */
    NzAnchorComponent.prototype.handleScrollTo = /**
     * @param {?} linkComp
     * @return {?}
     */
    function (linkComp) {
        var _this = this;
        /** @type {?} */
        var el = this.doc.querySelector(linkComp.nzHref);
        if (!el) {
            return;
        }
        this.animating = true;
        /** @type {?} */
        var containerScrollTop = this.scrollSrv.getScroll(this.getTarget());
        /** @type {?} */
        var elOffsetTop = this.getOffsetTop(el);
        /** @type {?} */
        var targetScrollTop = containerScrollTop + elOffsetTop - (this.nzOffsetTop || 0);
        this.scrollSrv.scrollTo(this.getTarget(), targetScrollTop, undefined, (/**
         * @return {?}
         */
        function () {
            _this.animating = false;
            _this.handleActive(linkComp);
        }));
        this.nzClick.emit(linkComp.nzHref);
    };
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
    NzAnchorComponent.ctorParameters = function () { return [
        { type: NzConfigService },
        { type: NzScrollService },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: ChangeDetectorRef },
        { type: Platform }
    ]; };
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
    return NzAnchorComponent;
}());
export { NzAnchorComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYW5jaG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvYW5jaG9yLyIsInNvdXJjZXMiOlsibnotYW5jaG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVwRSxPQUFPLEVBQ0wsUUFBUSxFQUNSLFlBQVksRUFDWixXQUFXLEVBRVgsZUFBZSxFQUNmLGVBQWUsRUFDZixVQUFVLEVBQ1gsTUFBTSxvQkFBb0IsQ0FBQzs7OztBQUk1QixzQkFHQzs7O0lBRkMsdUJBQTRCOztJQUM1QixzQkFBWTs7O0lBR1Isd0JBQXdCLEdBQUcsUUFBUTs7SUFDbkMsZ0JBQWdCLEdBQUcsV0FBVztBQUVwQztJQXdERSwyQkFDUyxlQUFnQyxFQUMvQixTQUEwQixFQUVSLEdBQVEsRUFDMUIsR0FBc0IsRUFDdEIsUUFBa0I7UUFMbkIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQy9CLGNBQVMsR0FBVCxTQUFTLENBQWlCO1FBRVIsUUFBRyxHQUFILEdBQUcsQ0FBSztRQUMxQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBbkRILFlBQU8sR0FBRyxJQUFJLENBQUM7UUFpQ3JC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b0NBQWdCOztJQUNoQix5Q0FBMkQ7Ozs7O0lBRTNELGtDQUE0Qzs7Ozs7SUFDNUMsc0NBQTBCOzs7OztJQUMxQixtQ0FBc0M7Ozs7O0lBQ3RDLG9DQUE0Qzs7Ozs7SUFDNUMsc0NBQTBCOztJQUd4Qiw0Q0FBdUM7Ozs7O0lBQ3ZDLHNDQUFrQzs7Ozs7SUFFbEMsZ0NBQWtDOzs7OztJQUNsQyxnQ0FBOEI7Ozs7O0lBQzlCLHFDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5qZWN0LFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPdXRwdXQsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGZyb21FdmVudCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCB0aHJvdHRsZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIHRvTnVtYmVyLFxyXG4gIElucHV0Qm9vbGVhbixcclxuICBJbnB1dE51bWJlcixcclxuICBOZ1N0eWxlSW50ZXJmYWNlLFxyXG4gIE56Q29uZmlnU2VydmljZSxcclxuICBOelNjcm9sbFNlcnZpY2UsXHJcbiAgV2l0aENvbmZpZ1xyXG59IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOekFuY2hvckxpbmtDb21wb25lbnQgfSBmcm9tICcuL256LWFuY2hvci1saW5rLmNvbXBvbmVudCc7XHJcblxyXG5pbnRlcmZhY2UgU2VjdGlvbiB7XHJcbiAgY29tcDogTnpBbmNob3JMaW5rQ29tcG9uZW50O1xyXG4gIHRvcDogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAnYW5jaG9yJztcclxuY29uc3Qgc2hhcnBNYXRjaGVyUmVneCA9IC8jKFteI10rKSQvO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei1hbmNob3InLFxyXG4gIGV4cG9ydEFzOiAnbnpBbmNob3InLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1hbmNob3IuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE56QW5jaG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcclxuICBAVmlld0NoaWxkKCdpbmsnLCB7IHN0YXRpYzogZmFsc2UgfSkgcHJpdmF0ZSBpbms6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekFmZml4ID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIGZhbHNlKVxyXG4gIEBJbnB1dEJvb2xlYW4oKVxyXG4gIG56U2hvd0lua0luRml4ZWQ6IGJvb2xlYW47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCA1KVxyXG4gIEBJbnB1dE51bWJlcigpXHJcbiAgbnpCb3VuZHM6IG51bWJlcjtcclxuXHJcbiAgQElucHV0KClcclxuICBAV2l0aENvbmZpZzxudW1iZXI+KE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSlcclxuICBzZXQgbnpPZmZzZXRUb3AodmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5fb2Zmc2V0VG9wID0gdG9OdW1iZXIodmFsdWUsIDApO1xyXG4gICAgdGhpcy53cmFwcGVyU3R5bGUgPSB7XHJcbiAgICAgICdtYXgtaGVpZ2h0JzogYGNhbGMoMTAwdmggLSAke3RoaXMuX29mZnNldFRvcH1weClgXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56T2Zmc2V0VG9wKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fb2Zmc2V0VG9wO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfb2Zmc2V0VG9wOiBudW1iZXI7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56VGFyZ2V0KGVsOiBzdHJpbmcgfCBFbGVtZW50KSB7XHJcbiAgICB0aGlzLnRhcmdldCA9IHR5cGVvZiBlbCA9PT0gJ3N0cmluZycgPyB0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKGVsKSA6IGVsO1xyXG4gICAgdGhpcy5yZWdpc3RlclNjcm9sbEV2ZW50KCk7XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNjcm9sbCA9IG5ldyBFdmVudEVtaXR0ZXI8TnpBbmNob3JMaW5rQ29tcG9uZW50PigpO1xyXG5cclxuICB2aXNpYmxlID0gZmFsc2U7XHJcbiAgd3JhcHBlclN0eWxlOiBOZ1N0eWxlSW50ZXJmYWNlID0geyAnbWF4LWhlaWdodCc6ICcxMDB2aCcgfTtcclxuXHJcbiAgcHJpdmF0ZSBsaW5rczogTnpBbmNob3JMaW5rQ29tcG9uZW50W10gPSBbXTtcclxuICBwcml2YXRlIGFuaW1hdGluZyA9IGZhbHNlO1xyXG4gIHByaXZhdGUgdGFyZ2V0OiBFbGVtZW50IHwgbnVsbCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBzY3JvbGwkOiBTdWJzY3JpcHRpb24gfCBudWxsID0gbnVsbDtcclxuICBwcml2YXRlIGRlc3Ryb3llZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcclxuICAgIHByaXZhdGUgc2Nyb2xsU3J2OiBOelNjcm9sbFNlcnZpY2UsXHJcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXHJcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm1cclxuICApIHt9XHJcblxyXG4gIHJlZ2lzdGVyTGluayhsaW5rOiBOekFuY2hvckxpbmtDb21wb25lbnQpOiB2b2lkIHtcclxuICAgIHRoaXMubGlua3MucHVzaChsaW5rKTtcclxuICB9XHJcblxyXG4gIHVucmVnaXN0ZXJMaW5rKGxpbms6IE56QW5jaG9yTGlua0NvbXBvbmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5saW5rcy5zcGxpY2UodGhpcy5saW5rcy5pbmRleE9mKGxpbmspLCAxKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0VGFyZ2V0KCk6IEVsZW1lbnQgfCBXaW5kb3cge1xyXG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0IHx8IHdpbmRvdztcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVnaXN0ZXJTY3JvbGxFdmVudCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWU7XHJcbiAgICB0aGlzLnJlbW92ZUxpc3RlbigpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZWdpc3RlclNjcm9sbEV2ZW50KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnJlbW92ZUxpc3RlbigpO1xyXG4gICAgdGhpcy5zY3JvbGwkID0gZnJvbUV2ZW50KHRoaXMuZ2V0VGFyZ2V0KCksICdzY3JvbGwnKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICB0aHJvdHRsZVRpbWUoNTApLFxyXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuaGFuZGxlU2Nyb2xsKCkpO1xyXG4gICAgLy8gQnJvd3NlciB3b3VsZCBtYWludGFpbiB0aGUgc2Nyb2xsaW5nIHBvc2l0aW9uIHdoZW4gcmVmcmVzaGluZy5cclxuICAgIC8vIFNvIHdlIGhhdmUgdG8gZGVsYXkgY2FsY3VsYXRpb24gaW4gYXZvaWQgb2YgZ2V0dGluZyBhIGluY29ycmVjdCByZXN1bHQuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaGFuZGxlU2Nyb2xsKCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVMaXN0ZW4oKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zY3JvbGwkKSB7XHJcbiAgICAgIHRoaXMuc2Nyb2xsJC51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRPZmZzZXRUb3AoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBudW1iZXIge1xyXG4gICAgaWYgKCFlbGVtZW50IHx8ICFlbGVtZW50LmdldENsaWVudFJlY3RzKCkubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBpZiAocmVjdC53aWR0aCB8fCByZWN0LmhlaWdodCkge1xyXG4gICAgICBpZiAodGhpcy5nZXRUYXJnZXQoKSA9PT0gd2luZG93KSB7XHJcbiAgICAgICAgcmV0dXJuIHJlY3QudG9wIC0gZWxlbWVudC5vd25lckRvY3VtZW50IS5kb2N1bWVudEVsZW1lbnQhLmNsaWVudFRvcDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmVjdC50b3AgLSAodGhpcy5nZXRUYXJnZXQoKSBhcyBIVE1MRWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlY3QudG9wO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlU2Nyb2xsKCk6IHZvaWQge1xyXG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcgfHwgdGhpcy5kZXN0cm95ZWQgfHwgdGhpcy5hbmltYXRpbmcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNlY3Rpb25zOiBTZWN0aW9uW10gPSBbXTtcclxuICAgIGNvbnN0IHNjb3BlID0gKHRoaXMubnpPZmZzZXRUb3AgfHwgMCkgKyB0aGlzLm56Qm91bmRzO1xyXG4gICAgdGhpcy5saW5rcy5mb3JFYWNoKGNvbXAgPT4ge1xyXG4gICAgICBjb25zdCBzaGFycExpbmtNYXRjaCA9IHNoYXJwTWF0Y2hlclJlZ3guZXhlYyhjb21wLm56SHJlZi50b1N0cmluZygpKTtcclxuICAgICAgaWYgKCFzaGFycExpbmtNYXRjaCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmRvYy5nZXRFbGVtZW50QnlJZChzaGFycExpbmtNYXRjaFsxXSk7XHJcbiAgICAgIGlmICh0YXJnZXQpIHtcclxuICAgICAgICBjb25zdCB0b3AgPSB0aGlzLmdldE9mZnNldFRvcCh0YXJnZXQpO1xyXG4gICAgICAgIGlmICh0b3AgPCBzY29wZSkge1xyXG4gICAgICAgICAgc2VjdGlvbnMucHVzaCh7XHJcbiAgICAgICAgICAgIHRvcCxcclxuICAgICAgICAgICAgY29tcFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnZpc2libGUgPSAhIXNlY3Rpb25zLmxlbmd0aDtcclxuICAgIGlmICghdGhpcy52aXNpYmxlKSB7XHJcbiAgICAgIHRoaXMuY2xlYXJBY3RpdmUoKTtcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgbWF4U2VjdGlvbiA9IHNlY3Rpb25zLnJlZHVjZSgocHJldiwgY3VycikgPT4gKGN1cnIudG9wID4gcHJldi50b3AgPyBjdXJyIDogcHJldikpO1xyXG4gICAgICB0aGlzLmhhbmRsZUFjdGl2ZShtYXhTZWN0aW9uLmNvbXApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGVhckFjdGl2ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMubGlua3MuZm9yRWFjaChpID0+IHtcclxuICAgICAgaS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgaS5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVBY3RpdmUoY29tcDogTnpBbmNob3JMaW5rQ29tcG9uZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLmNsZWFyQWN0aXZlKCk7XHJcblxyXG4gICAgY29tcC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgY29tcC5tYXJrRm9yQ2hlY2soKTtcclxuXHJcbiAgICBjb25zdCBsaW5rTm9kZSA9IChjb21wLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MRGl2RWxlbWVudCkucXVlcnlTZWxlY3RvcihcclxuICAgICAgJy5hbnQtYW5jaG9yLWxpbmstdGl0bGUnXHJcbiAgICApIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgdGhpcy5pbmsubmF0aXZlRWxlbWVudC5zdHlsZS50b3AgPSBgJHtsaW5rTm9kZS5vZmZzZXRUb3AgKyBsaW5rTm9kZS5jbGllbnRIZWlnaHQgLyAyIC0gNC41fXB4YDtcclxuICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcblxyXG4gICAgdGhpcy5uelNjcm9sbC5lbWl0KGNvbXApO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlU2Nyb2xsVG8obGlua0NvbXA6IE56QW5jaG9yTGlua0NvbXBvbmVudCk6IHZvaWQge1xyXG4gICAgY29uc3QgZWwgPSB0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKGxpbmtDb21wLm56SHJlZik7XHJcbiAgICBpZiAoIWVsKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFuaW1hdGluZyA9IHRydWU7XHJcbiAgICBjb25zdCBjb250YWluZXJTY3JvbGxUb3AgPSB0aGlzLnNjcm9sbFNydi5nZXRTY3JvbGwodGhpcy5nZXRUYXJnZXQoKSk7XHJcbiAgICBjb25zdCBlbE9mZnNldFRvcCA9IHRoaXMuZ2V0T2Zmc2V0VG9wKGVsKTtcclxuICAgIGNvbnN0IHRhcmdldFNjcm9sbFRvcCA9IGNvbnRhaW5lclNjcm9sbFRvcCArIGVsT2Zmc2V0VG9wIC0gKHRoaXMubnpPZmZzZXRUb3AgfHwgMCk7XHJcbiAgICB0aGlzLnNjcm9sbFNydi5zY3JvbGxUbyh0aGlzLmdldFRhcmdldCgpLCB0YXJnZXRTY3JvbGxUb3AsIHVuZGVmaW5lZCwgKCkgPT4ge1xyXG4gICAgICB0aGlzLmFuaW1hdGluZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmhhbmRsZUFjdGl2ZShsaW5rQ29tcCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMubnpDbGljay5lbWl0KGxpbmtDb21wLm56SHJlZik7XHJcbiAgfVxyXG59XHJcbiJdfQ==
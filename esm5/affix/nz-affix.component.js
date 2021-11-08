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
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core';
import * as ɵngcc2 from '@angular/cdk/platform';

var _c0 = ["fixedEl"];
var _c1 = ["*"];
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
var NZ_CONFIG_COMPONENT_NAME = 'affix';
/** @type {?} */
var NZ_AFFIX_CLS_PREFIX = 'ant-affix';
/** @type {?} */
var NZ_AFFIX_DEFAULT_SCROLL_TIME = 20;
/** @type {?} */
var NZ_AFFIX_RESPOND_EVENTS = ['resize', 'scroll', 'touchstart', 'touchmove', 'touchend', 'pageshow', 'load'];
var NzAffixComponent = /** @class */ (function () {
    function NzAffixComponent(el, doc, // tslint:disable-line no-any
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
    Object.defineProperty(NzAffixComponent.prototype, "target", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var el = this.nzTarget;
            return (typeof el === 'string' ? this.document.querySelector(el) : el) || window;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    NzAffixComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzOffsetBottom = changes.nzOffsetBottom, nzOffsetTop = changes.nzOffsetTop, nzTarget = changes.nzTarget;
        if (nzOffsetBottom || nzOffsetTop) {
            this.updatePosition((/** @type {?} */ ({})));
        }
        if (nzTarget) {
            this.registerListeners();
        }
    };
    /**
     * @return {?}
     */
    NzAffixComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.registerListeners();
    };
    /**
     * @return {?}
     */
    NzAffixComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.removeListeners();
    };
    /**
     * @private
     * @return {?}
     */
    NzAffixComponent.prototype.registerListeners = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.removeListeners();
        this.scroll$ = this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            return merge.apply(void 0, tslib_1.__spread(NZ_AFFIX_RESPOND_EVENTS.map((/**
             * @param {?} evName
             * @return {?}
             */
            function (evName) { return fromEvent(_this.target, evName); })))).pipe(auditTime(NZ_AFFIX_DEFAULT_SCROLL_TIME))
                .subscribe((/**
             * @param {?} e
             * @return {?}
             */
            function (e) { return _this.updatePosition(e); }));
        }));
        this.timeout = setTimeout((/**
         * @return {?}
         */
        function () { return _this.updatePosition((/** @type {?} */ ({}))); }));
    };
    /**
     * @private
     * @return {?}
     */
    NzAffixComponent.prototype.removeListeners = /**
     * @private
     * @return {?}
     */
    function () {
        clearTimeout(this.timeout);
        this.scroll$.unsubscribe();
    };
    /**
     * @param {?} element
     * @param {?} target
     * @return {?}
     */
    NzAffixComponent.prototype.getOffset = /**
     * @param {?} element
     * @param {?} target
     * @return {?}
     */
    function (element, target) {
        /** @type {?} */
        var elemRect = element.getBoundingClientRect();
        /** @type {?} */
        var targetRect = this.getTargetRect((/** @type {?} */ (target)));
        /** @type {?} */
        var scrollTop = this.scrollSrv.getScroll(target, true);
        /** @type {?} */
        var scrollLeft = this.scrollSrv.getScroll(target, false);
        /** @type {?} */
        var docElem = this.document.body;
        /** @type {?} */
        var clientTop = docElem.clientTop || 0;
        /** @type {?} */
        var clientLeft = docElem.clientLeft || 0;
        return {
            top: elemRect.top - targetRect.top + scrollTop - clientTop,
            left: elemRect.left - targetRect.left + scrollLeft - clientLeft,
            width: elemRect.width,
            height: elemRect.height
        };
    };
    /**
     * @private
     * @param {?} target
     * @return {?}
     */
    NzAffixComponent.prototype.getTargetRect = /**
     * @private
     * @param {?} target
     * @return {?}
     */
    function (target) {
        return !isTargetWindow(target)
            ? target.getBoundingClientRect()
            : {
                top: 0,
                left: 0,
                bottom: 0
            };
    };
    /**
     * @private
     * @param {?} e
     * @param {?=} affixStyle
     * @return {?}
     */
    NzAffixComponent.prototype.setAffixStyle = /**
     * @private
     * @param {?} e
     * @param {?=} affixStyle
     * @return {?}
     */
    function (e, affixStyle) {
        /** @type {?} */
        var originalAffixStyle = this.affixStyle;
        /** @type {?} */
        var isWindow = this.target === window;
        if (e.type === 'scroll' && originalAffixStyle && affixStyle && isWindow) {
            return;
        }
        if (shallowEqual(originalAffixStyle, affixStyle)) {
            return;
        }
        /** @type {?} */
        var fixed = !!affixStyle;
        /** @type {?} */
        var wrapEl = this.fixedEl.nativeElement;
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
    };
    /**
     * @private
     * @param {?=} placeholderStyle
     * @return {?}
     */
    NzAffixComponent.prototype.setPlaceholderStyle = /**
     * @private
     * @param {?=} placeholderStyle
     * @return {?}
     */
    function (placeholderStyle) {
        /** @type {?} */
        var originalPlaceholderStyle = this.placeholderStyle;
        if (shallowEqual(placeholderStyle, originalPlaceholderStyle)) {
            return;
        }
        this.placeholderNode.style.cssText = getStyleAsText(placeholderStyle);
        this.placeholderStyle = placeholderStyle;
    };
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    NzAffixComponent.prototype.syncPlaceholderStyle = /**
     * @private
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!this.affixStyle) {
            return;
        }
        this.placeholderNode.style.cssText = '';
        this.placeholderStyle = undefined;
        /** @type {?} */
        var styleObj = {
            width: this.placeholderNode.offsetWidth,
            height: this.fixedEl.nativeElement.offsetHeight
        };
        this.setAffixStyle(e, tslib_1.__assign({}, this.affixStyle, styleObj));
        this.setPlaceholderStyle(styleObj);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzAffixComponent.prototype.updatePosition = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!this.platform.isBrowser) {
            return;
        }
        /** @type {?} */
        var targetNode = this.target;
        /** @type {?} */
        var offsetTop = this.nzOffsetTop;
        /** @type {?} */
        var scrollTop = this.scrollSrv.getScroll(targetNode, true);
        /** @type {?} */
        var elemOffset = this.getOffset(this.placeholderNode, (/** @type {?} */ (targetNode)));
        /** @type {?} */
        var fixedNode = this.fixedEl.nativeElement;
        /** @type {?} */
        var elemSize = {
            width: fixedNode.offsetWidth,
            height: fixedNode.offsetHeight
        };
        /** @type {?} */
        var offsetMode = {
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
        var targetRect = this.getTargetRect((/** @type {?} */ (targetNode)));
        /** @type {?} */
        var targetInnerHeight = ((/** @type {?} */ (targetNode))).innerHeight || ((/** @type {?} */ (targetNode))).clientHeight;
        if (scrollTop >= elemOffset.top - ((/** @type {?} */ (offsetTop))) && offsetMode.top) {
            /** @type {?} */
            var width = elemOffset.width;
            /** @type {?} */
            var top_1 = targetRect.top + ((/** @type {?} */ (offsetTop)));
            this.setAffixStyle(e, {
                position: 'fixed',
                top: top_1,
                left: targetRect.left + elemOffset.left,
                maxHeight: "calc(100vh - " + top_1 + "px)",
                width: width
            });
            this.setPlaceholderStyle({
                width: width,
                height: elemSize.height
            });
        }
        else if (scrollTop <= elemOffset.top + elemSize.height + ((/** @type {?} */ (this.nzOffsetBottom))) - targetInnerHeight &&
            offsetMode.bottom) {
            /** @type {?} */
            var targetBottomOffet = targetNode === window ? 0 : window.innerHeight - (/** @type {?} */ (targetRect.bottom));
            /** @type {?} */
            var width = elemOffset.width;
            this.setAffixStyle(e, {
                position: 'fixed',
                bottom: targetBottomOffet + ((/** @type {?} */ (this.nzOffsetBottom))),
                left: targetRect.left + elemOffset.left,
                width: width
            });
            this.setPlaceholderStyle({
                width: width,
                height: elemOffset.height
            });
        }
        else {
            if (e.type === 'resize' &&
                this.affixStyle &&
                this.affixStyle.position === 'fixed' &&
                this.placeholderNode.offsetWidth) {
                this.setAffixStyle(e, tslib_1.__assign({}, this.affixStyle, { width: this.placeholderNode.offsetWidth }));
            }
            else {
                this.setAffixStyle(e);
            }
            this.setPlaceholderStyle();
        }
        if (e.type === 'resize') {
            this.syncPlaceholderStyle(e);
        }
    };
    /** @nocollapse */
    NzAffixComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: NzConfigService },
        { type: NzScrollService },
        { type: NgZone },
        { type: Platform }
    ]; };
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
NzAffixComponent.ɵfac = function NzAffixComponent_Factory(t) { return new (t || NzAffixComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(DOCUMENT), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzConfigService), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzScrollService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Platform)); };
NzAffixComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzAffixComponent, selectors: [["nz-affix"]], viewQuery: function NzAffixComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.fixedEl = _t.first);
    } }, inputs: { nzTarget: "nzTarget", nzOffsetTop: "nzOffsetTop", nzOffsetBottom: "nzOffsetBottom" }, outputs: { nzChange: "nzChange" }, exportAs: ["nzAffix"], features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c1, decls: 3, vars: 0, consts: [["fixedEl", ""]], template: function NzAffixComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", null, 0);
        ɵngcc0.ɵɵprojection(2);
        ɵngcc0.ɵɵelementEnd();
    } }, styles: ["\n      nz-affix {\n        display: block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzAffixComponent, [{
        type: Component,
        args: [{
                selector: 'nz-affix',
                exportAs: 'nzAffix',
                template: "<div #fixedEl>\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: ["\n      nz-affix {\n        display: block;\n      }\n    "]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: ɵngcc1.NzConfigService }, { type: ɵngcc1.NzScrollService }, { type: ɵngcc0.NgZone }, { type: ɵngcc2.Platform }]; }, { nzChange: [{
            type: Output
        }], fixedEl: [{
            type: ViewChild,
            args: ['fixedEl', { static: true }]
        }], nzTarget: [{
            type: Input
        }], nzOffsetTop: [{
            type: Input
        }], nzOffsetBottom: [{
            type: Input
        }] }); })();
    return NzAffixComponent;
}());
export { NzAffixComponent };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYWZmaXguY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJuZzovbmctem9ycm8tYW50ZC9hZmZpeC9uei1hZmZpeC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxFQUdOLE1BQU0sRUFFTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUNMLGNBQWMsRUFDZCxZQUFZLEVBQ1osV0FBVyxFQUVYLGVBQWUsRUFDZixlQUFlLEVBQ2YsVUFBVSxFQUNYLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7Ozs7Ozs7OztBQUV6Qyx5QkFNQzs7O0lBTEMseUJBQVk7O0lBQ1osMEJBQWE7O0lBQ2IsMkJBQWU7O0lBQ2YsNEJBQWdCOztJQUNoQiw0QkFBZ0I7OztJQUdaLHdCQUF3QixHQUFHLE9BQU87O0lBQ2xDLG1CQUFtQixHQUFHLFdBQVc7O0lBQ2pDLDRCQUE0QixHQUFHLEVBQUU7O0lBQ2pDLHVCQUF1QixHQUFHLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSxDQUFDO0FBRS9HO0lBNENFLDBCQUNFLEVBQWMsRUFDSSxHQUFRLEVBQUUsNkJBQTZCO0lBQ2xE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QVEsRUFBRSxTQUFTLHNCQUNuQixiQTJDRyxNQUFNLFNBQUMsUUFBUTtnQkFqRWxCLGVBQWU7aUJBc0J5QixEQXJCeEMsZUFBZTtJQXNCZixlQUFlLEVBQUUsTEF2Q2pCLE1BQU07a0JBdUNrQyxDQUFDLE1BQU0sVEFqRHhDLFFBQVE7O1VBeURmLGFBQWEsRUFBRTtFQUFpQixDQUFDLElBQUksK0JBTm5DLFpBU0QsU0FBUyxTQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7b0JBTG5DLE9BT0YsS0FBSztFQUpQLDRCQU1FLEtBQUs7aUNBS0wsS0FBSzsyQkFLTCxNQUFNOztJQVBQO1FBRkMsVUFBVSxDQUFnQix3QkFBd0IsRUFBRSxDQUFDLENBQUM7UUFDdEQsV0FBVyxFQUFFOzt5REFDYTtJQUszQjtRQUZDLFVBQVUsQ0FBZ0Isd0JBQXdCLEVBQUUsSUFBSSxDQUFDO1FBQ3pELFdBQVcsRUFBRTs7NERBQ2dCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUNoQztJQThOQSx1QkFBQztDQUFBLEFBMVBELElBMFBDO1NBNU9ZLGdCQUFnQjs7Ozs7O0lBQzNCLG1DQUFvRjs7SUFFcEYsb0NBQTZDOztJQUU3Qyx1Q0FHMkI7O0lBRTNCLDBDQUc4Qjs7SUFFOUIsb0NBQTBEOzs7OztJQUUxRCwyQ0FBOEM7Ozs7O0lBRTlDLHNDQUFzQzs7Ozs7SUFDdEMsNENBQTRDOzs7OztJQUM1QyxtQ0FBbUQ7Ozs7O0lBQ25ELG1DQUF5Qjs7Ozs7SUFDekIsb0NBQTJCOztJQVV6QiwyQ0FBdUM7Ozs7O0lBQ3ZDLHFDQUFrQzs7Ozs7SUFDbEMsa0NBQXNCOzs7OztJQUN0QixvQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEluamVjdCxcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZnJvbUV2ZW50LCBtZXJnZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGF1ZGl0VGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgZ2V0U3R5bGVBc1RleHQsXHJcbiAgc2hhbGxvd0VxdWFsLFxyXG4gIElucHV0TnVtYmVyLFxyXG4gIE5nU3R5bGVJbnRlcmZhY2UsXHJcbiAgTnpDb25maWdTZXJ2aWNlLFxyXG4gIE56U2Nyb2xsU2VydmljZSxcclxuICBXaXRoQ29uZmlnXHJcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgaXNUYXJnZXRXaW5kb3cgfSBmcm9tICcuL3V0aWxzJztcclxuXHJcbmludGVyZmFjZSBTaW1wbGVSZWN0IHtcclxuICB0b3A6IG51bWJlcjtcclxuICBsZWZ0OiBudW1iZXI7XHJcbiAgd2lkdGg/OiBudW1iZXI7XHJcbiAgaGVpZ2h0PzogbnVtYmVyO1xyXG4gIGJvdHRvbT86IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ2FmZml4JztcclxuY29uc3QgTlpfQUZGSVhfQ0xTX1BSRUZJWCA9ICdhbnQtYWZmaXgnO1xyXG5jb25zdCBOWl9BRkZJWF9ERUZBVUxUX1NDUk9MTF9USU1FID0gMjA7XHJcbmNvbnN0IE5aX0FGRklYX1JFU1BPTkRfRVZFTlRTID0gWydyZXNpemUnLCAnc2Nyb2xsJywgJ3RvdWNoc3RhcnQnLCAndG91Y2htb3ZlJywgJ3RvdWNoZW5kJywgJ3BhZ2VzaG93JywgJ2xvYWQnXTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotYWZmaXgnLFxyXG4gIGV4cG9ydEFzOiAnbnpBZmZpeCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LWFmZml4LmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgbnotYWZmaXgge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekFmZml4Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIEBWaWV3Q2hpbGQoJ2ZpeGVkRWwnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcml2YXRlIGZpeGVkRWw6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xyXG5cclxuICBASW5wdXQoKSBuelRhcmdldDogc3RyaW5nIHwgRWxlbWVudCB8IFdpbmRvdztcclxuXHJcbiAgQElucHV0KClcclxuICBAV2l0aENvbmZpZzxudW1iZXIgfCBudWxsPihOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIDApXHJcbiAgQElucHV0TnVtYmVyKClcclxuICBuek9mZnNldFRvcDogbnVsbCB8IG51bWJlcjtcclxuXHJcbiAgQElucHV0KClcclxuICBAV2l0aENvbmZpZzxudW1iZXIgfCBudWxsPihOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIG51bGwpXHJcbiAgQElucHV0TnVtYmVyKClcclxuICBuek9mZnNldEJvdHRvbTogbnVsbCB8IG51bWJlcjtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IHBsYWNlaG9sZGVyTm9kZTogSFRNTEVsZW1lbnQ7XHJcblxyXG4gIHByaXZhdGUgYWZmaXhTdHlsZT86IE5nU3R5bGVJbnRlcmZhY2U7XHJcbiAgcHJpdmF0ZSBwbGFjZWhvbGRlclN0eWxlPzogTmdTdHlsZUludGVyZmFjZTtcclxuICBwcml2YXRlIHNjcm9sbCQ6IFN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcclxuICBwcml2YXRlIHRpbWVvdXQ/OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBkb2N1bWVudDogRG9jdW1lbnQ7XHJcblxyXG4gIHByaXZhdGUgZ2V0IHRhcmdldCgpOiBFbGVtZW50IHwgV2luZG93IHtcclxuICAgIGNvbnN0IGVsID0gdGhpcy5uelRhcmdldDtcclxuICAgIHJldHVybiAodHlwZW9mIGVsID09PSAnc3RyaW5nJyA/IHRoaXMuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbCkgOiBlbCkgfHwgd2luZG93O1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBlbDogRWxlbWVudFJlZixcclxuICAgIEBJbmplY3QoRE9DVU1FTlQpIGRvYzogYW55LCAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lIG5vLWFueVxyXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBzY3JvbGxTcnY6IE56U2Nyb2xsU2VydmljZSxcclxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXHJcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybVxyXG4gICkge1xyXG4gICAgLy8gVGhlIHdyYXBwZXIgd291bGQgc3RheSBhdCB0aGUgb3JpZ2luYWwgcG9zaXRpb24gYXMgYSBwbGFjZWhvbGRlci5cclxuICAgIHRoaXMucGxhY2Vob2xkZXJOb2RlID0gZWwubmF0aXZlRWxlbWVudDtcclxuICAgIHRoaXMuZG9jdW1lbnQgPSBkb2M7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBjb25zdCB7IG56T2Zmc2V0Qm90dG9tLCBuek9mZnNldFRvcCwgbnpUYXJnZXQgfSA9IGNoYW5nZXM7XHJcblxyXG4gICAgaWYgKG56T2Zmc2V0Qm90dG9tIHx8IG56T2Zmc2V0VG9wKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oe30gYXMgRXZlbnQpO1xyXG4gICAgfVxyXG4gICAgaWYgKG56VGFyZ2V0KSB7XHJcbiAgICAgIHRoaXMucmVnaXN0ZXJMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVnaXN0ZXJMaXN0ZW5lcnMoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVnaXN0ZXJMaXN0ZW5lcnMoKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xyXG4gICAgdGhpcy5zY3JvbGwkID0gdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICByZXR1cm4gbWVyZ2UoLi4uTlpfQUZGSVhfUkVTUE9ORF9FVkVOVFMubWFwKGV2TmFtZSA9PiBmcm9tRXZlbnQodGhpcy50YXJnZXQsIGV2TmFtZSkpKVxyXG4gICAgICAgIC5waXBlKGF1ZGl0VGltZShOWl9BRkZJWF9ERUZBVUxUX1NDUk9MTF9USU1FKSlcclxuICAgICAgICAuc3Vic2NyaWJlKGUgPT4gdGhpcy51cGRhdGVQb3NpdGlvbihlKSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy51cGRhdGVQb3NpdGlvbih7fSBhcyBFdmVudCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVMaXN0ZW5lcnMoKTogdm9pZCB7XHJcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcclxuICAgIHRoaXMuc2Nyb2xsJC51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0T2Zmc2V0KGVsZW1lbnQ6IEVsZW1lbnQsIHRhcmdldDogRWxlbWVudCB8IFdpbmRvdyB8IHVuZGVmaW5lZCk6IFNpbXBsZVJlY3Qge1xyXG4gICAgY29uc3QgZWxlbVJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgY29uc3QgdGFyZ2V0UmVjdCA9IHRoaXMuZ2V0VGFyZ2V0UmVjdCh0YXJnZXQhKTtcclxuXHJcbiAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLnNjcm9sbFNydi5nZXRTY3JvbGwodGFyZ2V0LCB0cnVlKTtcclxuICAgIGNvbnN0IHNjcm9sbExlZnQgPSB0aGlzLnNjcm9sbFNydi5nZXRTY3JvbGwodGFyZ2V0LCBmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgZG9jRWxlbSA9IHRoaXMuZG9jdW1lbnQuYm9keTtcclxuICAgIGNvbnN0IGNsaWVudFRvcCA9IGRvY0VsZW0uY2xpZW50VG9wIHx8IDA7XHJcbiAgICBjb25zdCBjbGllbnRMZWZ0ID0gZG9jRWxlbS5jbGllbnRMZWZ0IHx8IDA7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdG9wOiBlbGVtUmVjdC50b3AgLSB0YXJnZXRSZWN0LnRvcCArIHNjcm9sbFRvcCAtIGNsaWVudFRvcCxcclxuICAgICAgbGVmdDogZWxlbVJlY3QubGVmdCAtIHRhcmdldFJlY3QubGVmdCArIHNjcm9sbExlZnQgLSBjbGllbnRMZWZ0LFxyXG4gICAgICB3aWR0aDogZWxlbVJlY3Qud2lkdGgsXHJcbiAgICAgIGhlaWdodDogZWxlbVJlY3QuaGVpZ2h0XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRUYXJnZXRSZWN0KHRhcmdldDogRWxlbWVudCB8IFdpbmRvdyk6IFNpbXBsZVJlY3Qge1xyXG4gICAgcmV0dXJuICFpc1RhcmdldFdpbmRvdyh0YXJnZXQpXHJcbiAgICAgID8gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcbiAgICAgIDoge1xyXG4gICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgbGVmdDogMCxcclxuICAgICAgICAgIGJvdHRvbTogMFxyXG4gICAgICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldEFmZml4U3R5bGUoZTogRXZlbnQsIGFmZml4U3R5bGU/OiBOZ1N0eWxlSW50ZXJmYWNlKTogdm9pZCB7XHJcbiAgICBjb25zdCBvcmlnaW5hbEFmZml4U3R5bGUgPSB0aGlzLmFmZml4U3R5bGU7XHJcbiAgICBjb25zdCBpc1dpbmRvdyA9IHRoaXMudGFyZ2V0ID09PSB3aW5kb3c7XHJcbiAgICBpZiAoZS50eXBlID09PSAnc2Nyb2xsJyAmJiBvcmlnaW5hbEFmZml4U3R5bGUgJiYgYWZmaXhTdHlsZSAmJiBpc1dpbmRvdykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoc2hhbGxvd0VxdWFsKG9yaWdpbmFsQWZmaXhTdHlsZSwgYWZmaXhTdHlsZSkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZpeGVkID0gISFhZmZpeFN0eWxlO1xyXG4gICAgY29uc3Qgd3JhcEVsID0gdGhpcy5maXhlZEVsLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB3cmFwRWwuc3R5bGUuY3NzVGV4dCA9IGdldFN0eWxlQXNUZXh0KGFmZml4U3R5bGUpO1xyXG4gICAgdGhpcy5hZmZpeFN0eWxlID0gYWZmaXhTdHlsZTtcclxuICAgIGlmIChmaXhlZCkge1xyXG4gICAgICB3cmFwRWwuY2xhc3NMaXN0LmFkZChOWl9BRkZJWF9DTFNfUFJFRklYKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHdyYXBFbC5jbGFzc0xpc3QucmVtb3ZlKE5aX0FGRklYX0NMU19QUkVGSVgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICgoYWZmaXhTdHlsZSAmJiAhb3JpZ2luYWxBZmZpeFN0eWxlKSB8fCAoIWFmZml4U3R5bGUgJiYgb3JpZ2luYWxBZmZpeFN0eWxlKSkge1xyXG4gICAgICB0aGlzLm56Q2hhbmdlLmVtaXQoZml4ZWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRQbGFjZWhvbGRlclN0eWxlKHBsYWNlaG9sZGVyU3R5bGU/OiBOZ1N0eWxlSW50ZXJmYWNlKTogdm9pZCB7XHJcbiAgICBjb25zdCBvcmlnaW5hbFBsYWNlaG9sZGVyU3R5bGUgPSB0aGlzLnBsYWNlaG9sZGVyU3R5bGU7XHJcbiAgICBpZiAoc2hhbGxvd0VxdWFsKHBsYWNlaG9sZGVyU3R5bGUsIG9yaWdpbmFsUGxhY2Vob2xkZXJTdHlsZSkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wbGFjZWhvbGRlck5vZGUuc3R5bGUuY3NzVGV4dCA9IGdldFN0eWxlQXNUZXh0KHBsYWNlaG9sZGVyU3R5bGUpO1xyXG4gICAgdGhpcy5wbGFjZWhvbGRlclN0eWxlID0gcGxhY2Vob2xkZXJTdHlsZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3luY1BsYWNlaG9sZGVyU3R5bGUoZTogRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5hZmZpeFN0eWxlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMucGxhY2Vob2xkZXJOb2RlLnN0eWxlLmNzc1RleHQgPSAnJztcclxuICAgIHRoaXMucGxhY2Vob2xkZXJTdHlsZSA9IHVuZGVmaW5lZDtcclxuICAgIGNvbnN0IHN0eWxlT2JqID0ge1xyXG4gICAgICB3aWR0aDogdGhpcy5wbGFjZWhvbGRlck5vZGUub2Zmc2V0V2lkdGgsXHJcbiAgICAgIGhlaWdodDogdGhpcy5maXhlZEVsLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0XHJcbiAgICB9O1xyXG4gICAgdGhpcy5zZXRBZmZpeFN0eWxlKGUsIHtcclxuICAgICAgLi4udGhpcy5hZmZpeFN0eWxlLFxyXG4gICAgICAuLi5zdHlsZU9ialxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNldFBsYWNlaG9sZGVyU3R5bGUoc3R5bGVPYmopO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlUG9zaXRpb24oZTogRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRhcmdldE5vZGUgPSB0aGlzLnRhcmdldDtcclxuICAgIGxldCBvZmZzZXRUb3AgPSB0aGlzLm56T2Zmc2V0VG9wO1xyXG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gdGhpcy5zY3JvbGxTcnYuZ2V0U2Nyb2xsKHRhcmdldE5vZGUsIHRydWUpO1xyXG4gICAgY29uc3QgZWxlbU9mZnNldCA9IHRoaXMuZ2V0T2Zmc2V0KHRoaXMucGxhY2Vob2xkZXJOb2RlLCB0YXJnZXROb2RlISk7XHJcbiAgICBjb25zdCBmaXhlZE5vZGUgPSB0aGlzLmZpeGVkRWwubmF0aXZlRWxlbWVudDtcclxuICAgIGNvbnN0IGVsZW1TaXplID0ge1xyXG4gICAgICB3aWR0aDogZml4ZWROb2RlLm9mZnNldFdpZHRoLFxyXG4gICAgICBoZWlnaHQ6IGZpeGVkTm9kZS5vZmZzZXRIZWlnaHRcclxuICAgIH07XHJcbiAgICBjb25zdCBvZmZzZXRNb2RlID0ge1xyXG4gICAgICB0b3A6IGZhbHNlLFxyXG4gICAgICBib3R0b206IGZhbHNlXHJcbiAgICB9O1xyXG4gICAgLy8gRGVmYXVsdCB0byBgb2Zmc2V0VG9wPTBgLlxyXG4gICAgaWYgKHR5cGVvZiBvZmZzZXRUb3AgIT09ICdudW1iZXInICYmIHR5cGVvZiB0aGlzLm56T2Zmc2V0Qm90dG9tICE9PSAnbnVtYmVyJykge1xyXG4gICAgICBvZmZzZXRNb2RlLnRvcCA9IHRydWU7XHJcbiAgICAgIG9mZnNldFRvcCA9IDA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBvZmZzZXRNb2RlLnRvcCA9IHR5cGVvZiBvZmZzZXRUb3AgPT09ICdudW1iZXInO1xyXG4gICAgICBvZmZzZXRNb2RlLmJvdHRvbSA9IHR5cGVvZiB0aGlzLm56T2Zmc2V0Qm90dG9tID09PSAnbnVtYmVyJztcclxuICAgIH1cclxuICAgIGNvbnN0IHRhcmdldFJlY3QgPSB0aGlzLmdldFRhcmdldFJlY3QodGFyZ2V0Tm9kZSBhcyBXaW5kb3cpO1xyXG4gICAgY29uc3QgdGFyZ2V0SW5uZXJIZWlnaHQgPSAodGFyZ2V0Tm9kZSBhcyBXaW5kb3cpLmlubmVySGVpZ2h0IHx8ICh0YXJnZXROb2RlIGFzIEhUTUxFbGVtZW50KS5jbGllbnRIZWlnaHQ7XHJcbiAgICBpZiAoc2Nyb2xsVG9wID49IGVsZW1PZmZzZXQudG9wIC0gKG9mZnNldFRvcCBhcyBudW1iZXIpICYmIG9mZnNldE1vZGUudG9wKSB7XHJcbiAgICAgIGNvbnN0IHdpZHRoID0gZWxlbU9mZnNldC53aWR0aDtcclxuICAgICAgY29uc3QgdG9wID0gdGFyZ2V0UmVjdC50b3AgKyAob2Zmc2V0VG9wIGFzIG51bWJlcik7XHJcbiAgICAgIHRoaXMuc2V0QWZmaXhTdHlsZShlLCB7XHJcbiAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICAgICAgdG9wLFxyXG4gICAgICAgIGxlZnQ6IHRhcmdldFJlY3QubGVmdCArIGVsZW1PZmZzZXQubGVmdCxcclxuICAgICAgICBtYXhIZWlnaHQ6IGBjYWxjKDEwMHZoIC0gJHt0b3B9cHgpYCxcclxuICAgICAgICB3aWR0aFxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5zZXRQbGFjZWhvbGRlclN0eWxlKHtcclxuICAgICAgICB3aWR0aCxcclxuICAgICAgICBoZWlnaHQ6IGVsZW1TaXplLmhlaWdodFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgIHNjcm9sbFRvcCA8PSBlbGVtT2Zmc2V0LnRvcCArIGVsZW1TaXplLmhlaWdodCArICh0aGlzLm56T2Zmc2V0Qm90dG9tIGFzIG51bWJlcikgLSB0YXJnZXRJbm5lckhlaWdodCAmJlxyXG4gICAgICBvZmZzZXRNb2RlLmJvdHRvbVxyXG4gICAgKSB7XHJcbiAgICAgIGNvbnN0IHRhcmdldEJvdHRvbU9mZmV0ID0gdGFyZ2V0Tm9kZSA9PT0gd2luZG93ID8gMCA6IHdpbmRvdy5pbm5lckhlaWdodCAtIHRhcmdldFJlY3QuYm90dG9tITtcclxuICAgICAgY29uc3Qgd2lkdGggPSBlbGVtT2Zmc2V0LndpZHRoO1xyXG4gICAgICB0aGlzLnNldEFmZml4U3R5bGUoZSwge1xyXG4gICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgICAgIGJvdHRvbTogdGFyZ2V0Qm90dG9tT2ZmZXQgKyAodGhpcy5uek9mZnNldEJvdHRvbSBhcyBudW1iZXIpLFxyXG4gICAgICAgIGxlZnQ6IHRhcmdldFJlY3QubGVmdCArIGVsZW1PZmZzZXQubGVmdCxcclxuICAgICAgICB3aWR0aFxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5zZXRQbGFjZWhvbGRlclN0eWxlKHtcclxuICAgICAgICB3aWR0aCxcclxuICAgICAgICBoZWlnaHQ6IGVsZW1PZmZzZXQuaGVpZ2h0XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGUudHlwZSA9PT0gJ3Jlc2l6ZScgJiZcclxuICAgICAgICB0aGlzLmFmZml4U3R5bGUgJiZcclxuICAgICAgICB0aGlzLmFmZml4U3R5bGUucG9zaXRpb24gPT09ICdmaXhlZCcgJiZcclxuICAgICAgICB0aGlzLnBsYWNlaG9sZGVyTm9kZS5vZmZzZXRXaWR0aFxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLnNldEFmZml4U3R5bGUoZSwge1xyXG4gICAgICAgICAgLi4udGhpcy5hZmZpeFN0eWxlLFxyXG4gICAgICAgICAgd2lkdGg6IHRoaXMucGxhY2Vob2xkZXJOb2RlLm9mZnNldFdpZHRoXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZXRBZmZpeFN0eWxlKGUpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2V0UGxhY2Vob2xkZXJTdHlsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlLnR5cGUgPT09ICdyZXNpemUnKSB7XHJcbiAgICAgIHRoaXMuc3luY1BsYWNlaG9sZGVyU3R5bGUoZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==
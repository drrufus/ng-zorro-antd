import { __assign, __decorate, __metadata, __read, __spread } from "tslib";
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
import { getStyleAsText, InputNumber, NzConfigService, NzScrollService, shallowEqual, WithConfig } from 'ng-zorro-antd/core';
import { fromEvent, merge, Subscription } from 'rxjs';
import { auditTime } from 'rxjs/operators';
import { isTargetWindow } from './utils';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
import * as i2 from "@angular/cdk/platform";
var _c0 = ["fixedEl"];
var _c1 = ["*"];
var NZ_CONFIG_COMPONENT_NAME = 'affix';
var NZ_AFFIX_CLS_PREFIX = 'ant-affix';
var NZ_AFFIX_DEFAULT_SCROLL_TIME = 20;
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
        get: function () {
            var el = this.nzTarget;
            return (typeof el === 'string' ? this.document.querySelector(el) : el) || window;
        },
        enumerable: true,
        configurable: true
    });
    NzAffixComponent.prototype.ngOnChanges = function (changes) {
        var nzOffsetBottom = changes.nzOffsetBottom, nzOffsetTop = changes.nzOffsetTop, nzTarget = changes.nzTarget;
        if (nzOffsetBottom || nzOffsetTop) {
            this.updatePosition({});
        }
        if (nzTarget) {
            this.registerListeners();
        }
    };
    NzAffixComponent.prototype.ngAfterViewInit = function () {
        this.registerListeners();
    };
    NzAffixComponent.prototype.ngOnDestroy = function () {
        this.removeListeners();
    };
    NzAffixComponent.prototype.registerListeners = function () {
        var _this = this;
        this.removeListeners();
        this.scroll$ = this.ngZone.runOutsideAngular(function () {
            return merge.apply(void 0, __spread(NZ_AFFIX_RESPOND_EVENTS.map(function (evName) { return fromEvent(_this.target, evName); }))).pipe(auditTime(NZ_AFFIX_DEFAULT_SCROLL_TIME))
                .subscribe(function (e) { return _this.updatePosition(e); });
        });
        this.timeout = setTimeout(function () { return _this.updatePosition({}); });
    };
    NzAffixComponent.prototype.removeListeners = function () {
        clearTimeout(this.timeout);
        this.scroll$.unsubscribe();
    };
    NzAffixComponent.prototype.getOffset = function (element, target) {
        var elemRect = element.getBoundingClientRect();
        var targetRect = this.getTargetRect(target);
        var scrollTop = this.scrollSrv.getScroll(target, true);
        var scrollLeft = this.scrollSrv.getScroll(target, false);
        var docElem = this.document.body;
        var clientTop = docElem.clientTop || 0;
        var clientLeft = docElem.clientLeft || 0;
        return {
            top: elemRect.top - targetRect.top + scrollTop - clientTop,
            left: elemRect.left - targetRect.left + scrollLeft - clientLeft,
            width: elemRect.width,
            height: elemRect.height
        };
    };
    NzAffixComponent.prototype.getTargetRect = function (target) {
        return !isTargetWindow(target)
            ? target.getBoundingClientRect()
            : {
                top: 0,
                left: 0,
                bottom: 0
            };
    };
    NzAffixComponent.prototype.setAffixStyle = function (e, affixStyle) {
        var originalAffixStyle = this.affixStyle;
        var isWindow = this.target === window;
        if (e.type === 'scroll' && originalAffixStyle && affixStyle && isWindow) {
            return;
        }
        if (shallowEqual(originalAffixStyle, affixStyle)) {
            return;
        }
        var fixed = !!affixStyle;
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
    NzAffixComponent.prototype.setPlaceholderStyle = function (placeholderStyle) {
        var originalPlaceholderStyle = this.placeholderStyle;
        if (shallowEqual(placeholderStyle, originalPlaceholderStyle)) {
            return;
        }
        this.placeholderNode.style.cssText = getStyleAsText(placeholderStyle);
        this.placeholderStyle = placeholderStyle;
    };
    NzAffixComponent.prototype.syncPlaceholderStyle = function (e) {
        if (!this.affixStyle) {
            return;
        }
        this.placeholderNode.style.cssText = '';
        this.placeholderStyle = undefined;
        var styleObj = {
            width: this.placeholderNode.offsetWidth,
            height: this.fixedEl.nativeElement.offsetHeight
        };
        this.setAffixStyle(e, __assign(__assign({}, this.affixStyle), styleObj));
        this.setPlaceholderStyle(styleObj);
    };
    NzAffixComponent.prototype.updatePosition = function (e) {
        if (!this.platform.isBrowser) {
            return;
        }
        var targetNode = this.target;
        var offsetTop = this.nzOffsetTop;
        var scrollTop = this.scrollSrv.getScroll(targetNode, true);
        var elemOffset = this.getOffset(this.placeholderNode, targetNode);
        var fixedNode = this.fixedEl.nativeElement;
        var elemSize = {
            width: fixedNode.offsetWidth,
            height: fixedNode.offsetHeight
        };
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
        var targetRect = this.getTargetRect(targetNode);
        var targetInnerHeight = targetNode.innerHeight || targetNode.clientHeight;
        if (scrollTop >= elemOffset.top - offsetTop && offsetMode.top) {
            var width = elemOffset.width;
            var top_1 = targetRect.top + offsetTop;
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
        else if (scrollTop <= elemOffset.top + elemSize.height + this.nzOffsetBottom - targetInnerHeight && offsetMode.bottom) {
            var targetBottomOffet = targetNode === window ? 0 : window.innerHeight - targetRect.bottom;
            var width = elemOffset.width;
            this.setAffixStyle(e, {
                position: 'fixed',
                bottom: targetBottomOffet + this.nzOffsetBottom,
                left: targetRect.left + elemOffset.left,
                width: width
            });
            this.setPlaceholderStyle({
                width: width,
                height: elemOffset.height
            });
        }
        else {
            if (e.type === 'resize' && this.affixStyle && this.affixStyle.position === 'fixed' && this.placeholderNode.offsetWidth) {
                this.setAffixStyle(e, __assign(__assign({}, this.affixStyle), { width: this.placeholderNode.offsetWidth }));
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
    /** @nocollapse */ NzAffixComponent.ɵfac = function NzAffixComponent_Factory(t) { return new (t || NzAffixComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(DOCUMENT), i0.ɵɵdirectiveInject(i1.NzConfigService), i0.ɵɵdirectiveInject(i1.NzScrollService), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i2.Platform)); };
    /** @nocollapse */ NzAffixComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzAffixComponent, selectors: [["nz-affix"]], viewQuery: function NzAffixComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵstaticViewQuery(_c0, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.fixedEl = _t.first);
        } }, inputs: { nzTarget: "nzTarget", nzOffsetTop: "nzOffsetTop", nzOffsetBottom: "nzOffsetBottom" }, outputs: { nzChange: "nzChange" }, exportAs: ["nzAffix"], features: [i0.ɵɵNgOnChangesFeature()], ngContentSelectors: _c1, decls: 3, vars: 0, consts: [["fixedEl", ""]], template: function NzAffixComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", null, 0);
            i0.ɵɵprojection(2);
            i0.ɵɵelementEnd();
        } }, styles: ["\n      nz-affix {\n        display: block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, 0),
        InputNumber(),
        __metadata("design:type", Object)
    ], NzAffixComponent.prototype, "nzOffsetTop", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, null),
        InputNumber(),
        __metadata("design:type", Object)
    ], NzAffixComponent.prototype, "nzOffsetBottom", void 0);
    return NzAffixComponent;
}());
export { NzAffixComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzAffixComponent, [{
        type: Component,
        args: [{
                selector: 'nz-affix',
                exportAs: 'nzAffix',
                templateUrl: './nz-affix.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [
                    "\n      nz-affix {\n        display: block;\n      }\n    "
                ],
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: i1.NzConfigService }, { type: i1.NzScrollService }, { type: i0.NgZone }, { type: i2.Platform }]; }, { fixedEl: [{
            type: ViewChild,
            args: ['fixedEl', { static: true }]
        }], nzTarget: [{
            type: Input
        }], nzOffsetTop: [{
            type: Input
        }], nzOffsetBottom: [{
            type: Input
        }], nzChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYWZmaXguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9hZmZpeC8iLCJzb3VyY2VzIjpbIm56LWFmZml4LmNvbXBvbmVudC50cyIsIm56LWFmZml4LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEVBR04sTUFBTSxFQUVOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUNMLGNBQWMsRUFDZCxXQUFXLEVBRVgsZUFBZSxFQUNmLGVBQWUsRUFDZixZQUFZLEVBQ1osVUFBVSxFQUNYLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sU0FBUyxDQUFDOzs7Ozs7QUFVekMsSUFBTSx3QkFBd0IsR0FBRyxPQUFPLENBQUM7QUFDekMsSUFBTSxtQkFBbUIsR0FBRyxXQUFXLENBQUM7QUFDeEMsSUFBTSw0QkFBNEIsR0FBRyxFQUFFLENBQUM7QUFDeEMsSUFBTSx1QkFBdUIsR0FBRyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBRWhIO0lBNENFLDBCQUNFLEVBQWMsRUFDSSxHQUFRLEVBQUUsNkJBQTZCO0lB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QUFFLENBQUMsQ0FBQztRQUN0RCxXQUFXLEVBQUU7O3lEQUNhO0lBSzNCO1FBRkMsVUFBVSxDQUFnQix3QkFBd0IsRUFBRSxJQUFJLENBQUM7UUFDekQsV0FBVyxFQUFFOzs0REFDZ0I7MkJBaEZoQztDQXVTQyxBQWxQRCxJQWtQQztTQXBPWSxnQkFBZ0I7a0RBQWhCLGdCQUFnQjtjQWQ1QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFFBQVEsRUFBRSxTQUFTO2dCQUNuQixXQUFXLEVBQUUsMkJBQTJCO2dCQUN4QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsTUFBTSxFQUFFO29CQUNOLDREQUlDO2lCQUNGO2dCQUNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOztzQkFpQ0ksTUFBTTt1QkFBQyxRQUFROztrQkEvQmpCLFNBQVM7bUJBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7a0JBRXJDLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUtMLEtBQUs7O2tCQUtMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEluamVjdCxcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7XHJcbiAgZ2V0U3R5bGVBc1RleHQsXHJcbiAgSW5wdXROdW1iZXIsXHJcbiAgTmdTdHlsZUludGVyZmFjZSxcclxuICBOekNvbmZpZ1NlcnZpY2UsXHJcbiAgTnpTY3JvbGxTZXJ2aWNlLFxyXG4gIHNoYWxsb3dFcXVhbCxcclxuICBXaXRoQ29uZmlnXHJcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgZnJvbUV2ZW50LCBtZXJnZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGF1ZGl0VGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgaXNUYXJnZXRXaW5kb3cgfSBmcm9tICcuL3V0aWxzJztcclxuXHJcbmludGVyZmFjZSBTaW1wbGVSZWN0IHtcclxuICB0b3A6IG51bWJlcjtcclxuICBsZWZ0OiBudW1iZXI7XHJcbiAgd2lkdGg/OiBudW1iZXI7XHJcbiAgaGVpZ2h0PzogbnVtYmVyO1xyXG4gIGJvdHRvbT86IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ2FmZml4JztcclxuY29uc3QgTlpfQUZGSVhfQ0xTX1BSRUZJWCA9ICdhbnQtYWZmaXgnO1xyXG5jb25zdCBOWl9BRkZJWF9ERUZBVUxUX1NDUk9MTF9USU1FID0gMjA7XHJcbmNvbnN0IE5aX0FGRklYX1JFU1BPTkRfRVZFTlRTID0gWydyZXNpemUnLCAnc2Nyb2xsJywgJ3RvdWNoc3RhcnQnLCAndG91Y2htb3ZlJywgJ3RvdWNoZW5kJywgJ3BhZ2VzaG93JywgJ2xvYWQnXTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotYWZmaXgnLFxyXG4gIGV4cG9ydEFzOiAnbnpBZmZpeCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LWFmZml4LmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgbnotYWZmaXgge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekFmZml4Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIEBWaWV3Q2hpbGQoJ2ZpeGVkRWwnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcml2YXRlIGZpeGVkRWw6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xyXG5cclxuICBASW5wdXQoKSBuelRhcmdldDogc3RyaW5nIHwgRWxlbWVudCB8IFdpbmRvdztcclxuXHJcbiAgQElucHV0KClcclxuICBAV2l0aENvbmZpZzxudW1iZXIgfCBudWxsPihOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIDApXHJcbiAgQElucHV0TnVtYmVyKClcclxuICBuek9mZnNldFRvcDogbnVsbCB8IG51bWJlcjtcclxuXHJcbiAgQElucHV0KClcclxuICBAV2l0aENvbmZpZzxudW1iZXIgfCBudWxsPihOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIG51bGwpXHJcbiAgQElucHV0TnVtYmVyKClcclxuICBuek9mZnNldEJvdHRvbTogbnVsbCB8IG51bWJlcjtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IHBsYWNlaG9sZGVyTm9kZTogSFRNTEVsZW1lbnQ7XHJcblxyXG4gIHByaXZhdGUgYWZmaXhTdHlsZT86IE5nU3R5bGVJbnRlcmZhY2U7XHJcbiAgcHJpdmF0ZSBwbGFjZWhvbGRlclN0eWxlPzogTmdTdHlsZUludGVyZmFjZTtcclxuICBwcml2YXRlIHNjcm9sbCQ6IFN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcclxuICBwcml2YXRlIHRpbWVvdXQ/OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBkb2N1bWVudDogRG9jdW1lbnQ7XHJcblxyXG4gIHByaXZhdGUgZ2V0IHRhcmdldCgpOiBFbGVtZW50IHwgV2luZG93IHtcclxuICAgIGNvbnN0IGVsID0gdGhpcy5uelRhcmdldDtcclxuICAgIHJldHVybiAodHlwZW9mIGVsID09PSAnc3RyaW5nJyA/IHRoaXMuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbCkgOiBlbCkgfHwgd2luZG93O1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBlbDogRWxlbWVudFJlZixcclxuICAgIEBJbmplY3QoRE9DVU1FTlQpIGRvYzogYW55LCAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lIG5vLWFueVxyXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBzY3JvbGxTcnY6IE56U2Nyb2xsU2VydmljZSxcclxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXHJcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybVxyXG4gICkge1xyXG4gICAgLy8gVGhlIHdyYXBwZXIgd291bGQgc3RheSBhdCB0aGUgb3JpZ2luYWwgcG9zaXRpb24gYXMgYSBwbGFjZWhvbGRlci5cclxuICAgIHRoaXMucGxhY2Vob2xkZXJOb2RlID0gZWwubmF0aXZlRWxlbWVudDtcclxuICAgIHRoaXMuZG9jdW1lbnQgPSBkb2M7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBjb25zdCB7IG56T2Zmc2V0Qm90dG9tLCBuek9mZnNldFRvcCwgbnpUYXJnZXQgfSA9IGNoYW5nZXM7XHJcblxyXG4gICAgaWYgKG56T2Zmc2V0Qm90dG9tIHx8IG56T2Zmc2V0VG9wKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oe30gYXMgRXZlbnQpO1xyXG4gICAgfVxyXG4gICAgaWYgKG56VGFyZ2V0KSB7XHJcbiAgICAgIHRoaXMucmVnaXN0ZXJMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVnaXN0ZXJMaXN0ZW5lcnMoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVnaXN0ZXJMaXN0ZW5lcnMoKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xyXG4gICAgdGhpcy5zY3JvbGwkID0gdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICByZXR1cm4gbWVyZ2UoLi4uTlpfQUZGSVhfUkVTUE9ORF9FVkVOVFMubWFwKGV2TmFtZSA9PiBmcm9tRXZlbnQodGhpcy50YXJnZXQsIGV2TmFtZSkpKVxyXG4gICAgICAgIC5waXBlKGF1ZGl0VGltZShOWl9BRkZJWF9ERUZBVUxUX1NDUk9MTF9USU1FKSlcclxuICAgICAgICAuc3Vic2NyaWJlKGUgPT4gdGhpcy51cGRhdGVQb3NpdGlvbihlKSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy51cGRhdGVQb3NpdGlvbih7fSBhcyBFdmVudCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVMaXN0ZW5lcnMoKTogdm9pZCB7XHJcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcclxuICAgIHRoaXMuc2Nyb2xsJC51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0T2Zmc2V0KGVsZW1lbnQ6IEVsZW1lbnQsIHRhcmdldDogRWxlbWVudCB8IFdpbmRvdyB8IHVuZGVmaW5lZCk6IFNpbXBsZVJlY3Qge1xyXG4gICAgY29uc3QgZWxlbVJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgY29uc3QgdGFyZ2V0UmVjdCA9IHRoaXMuZ2V0VGFyZ2V0UmVjdCh0YXJnZXQhKTtcclxuXHJcbiAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLnNjcm9sbFNydi5nZXRTY3JvbGwodGFyZ2V0LCB0cnVlKTtcclxuICAgIGNvbnN0IHNjcm9sbExlZnQgPSB0aGlzLnNjcm9sbFNydi5nZXRTY3JvbGwodGFyZ2V0LCBmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgZG9jRWxlbSA9IHRoaXMuZG9jdW1lbnQuYm9keTtcclxuICAgIGNvbnN0IGNsaWVudFRvcCA9IGRvY0VsZW0uY2xpZW50VG9wIHx8IDA7XHJcbiAgICBjb25zdCBjbGllbnRMZWZ0ID0gZG9jRWxlbS5jbGllbnRMZWZ0IHx8IDA7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdG9wOiBlbGVtUmVjdC50b3AgLSB0YXJnZXRSZWN0LnRvcCArIHNjcm9sbFRvcCAtIGNsaWVudFRvcCxcclxuICAgICAgbGVmdDogZWxlbVJlY3QubGVmdCAtIHRhcmdldFJlY3QubGVmdCArIHNjcm9sbExlZnQgLSBjbGllbnRMZWZ0LFxyXG4gICAgICB3aWR0aDogZWxlbVJlY3Qud2lkdGgsXHJcbiAgICAgIGhlaWdodDogZWxlbVJlY3QuaGVpZ2h0XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRUYXJnZXRSZWN0KHRhcmdldDogRWxlbWVudCB8IFdpbmRvdyk6IFNpbXBsZVJlY3Qge1xyXG4gICAgcmV0dXJuICFpc1RhcmdldFdpbmRvdyh0YXJnZXQpXHJcbiAgICAgID8gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcbiAgICAgIDoge1xyXG4gICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgbGVmdDogMCxcclxuICAgICAgICAgIGJvdHRvbTogMFxyXG4gICAgICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldEFmZml4U3R5bGUoZTogRXZlbnQsIGFmZml4U3R5bGU/OiBOZ1N0eWxlSW50ZXJmYWNlKTogdm9pZCB7XHJcbiAgICBjb25zdCBvcmlnaW5hbEFmZml4U3R5bGUgPSB0aGlzLmFmZml4U3R5bGU7XHJcbiAgICBjb25zdCBpc1dpbmRvdyA9IHRoaXMudGFyZ2V0ID09PSB3aW5kb3c7XHJcbiAgICBpZiAoZS50eXBlID09PSAnc2Nyb2xsJyAmJiBvcmlnaW5hbEFmZml4U3R5bGUgJiYgYWZmaXhTdHlsZSAmJiBpc1dpbmRvdykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoc2hhbGxvd0VxdWFsKG9yaWdpbmFsQWZmaXhTdHlsZSwgYWZmaXhTdHlsZSkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZpeGVkID0gISFhZmZpeFN0eWxlO1xyXG4gICAgY29uc3Qgd3JhcEVsID0gdGhpcy5maXhlZEVsLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB3cmFwRWwuc3R5bGUuY3NzVGV4dCA9IGdldFN0eWxlQXNUZXh0KGFmZml4U3R5bGUpO1xyXG4gICAgdGhpcy5hZmZpeFN0eWxlID0gYWZmaXhTdHlsZTtcclxuICAgIGlmIChmaXhlZCkge1xyXG4gICAgICB3cmFwRWwuY2xhc3NMaXN0LmFkZChOWl9BRkZJWF9DTFNfUFJFRklYKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHdyYXBFbC5jbGFzc0xpc3QucmVtb3ZlKE5aX0FGRklYX0NMU19QUkVGSVgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICgoYWZmaXhTdHlsZSAmJiAhb3JpZ2luYWxBZmZpeFN0eWxlKSB8fCAoIWFmZml4U3R5bGUgJiYgb3JpZ2luYWxBZmZpeFN0eWxlKSkge1xyXG4gICAgICB0aGlzLm56Q2hhbmdlLmVtaXQoZml4ZWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRQbGFjZWhvbGRlclN0eWxlKHBsYWNlaG9sZGVyU3R5bGU/OiBOZ1N0eWxlSW50ZXJmYWNlKTogdm9pZCB7XHJcbiAgICBjb25zdCBvcmlnaW5hbFBsYWNlaG9sZGVyU3R5bGUgPSB0aGlzLnBsYWNlaG9sZGVyU3R5bGU7XHJcbiAgICBpZiAoc2hhbGxvd0VxdWFsKHBsYWNlaG9sZGVyU3R5bGUsIG9yaWdpbmFsUGxhY2Vob2xkZXJTdHlsZSkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wbGFjZWhvbGRlck5vZGUuc3R5bGUuY3NzVGV4dCA9IGdldFN0eWxlQXNUZXh0KHBsYWNlaG9sZGVyU3R5bGUpO1xyXG4gICAgdGhpcy5wbGFjZWhvbGRlclN0eWxlID0gcGxhY2Vob2xkZXJTdHlsZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3luY1BsYWNlaG9sZGVyU3R5bGUoZTogRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5hZmZpeFN0eWxlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMucGxhY2Vob2xkZXJOb2RlLnN0eWxlLmNzc1RleHQgPSAnJztcclxuICAgIHRoaXMucGxhY2Vob2xkZXJTdHlsZSA9IHVuZGVmaW5lZDtcclxuICAgIGNvbnN0IHN0eWxlT2JqID0ge1xyXG4gICAgICB3aWR0aDogdGhpcy5wbGFjZWhvbGRlck5vZGUub2Zmc2V0V2lkdGgsXHJcbiAgICAgIGhlaWdodDogdGhpcy5maXhlZEVsLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0XHJcbiAgICB9O1xyXG4gICAgdGhpcy5zZXRBZmZpeFN0eWxlKGUsIHtcclxuICAgICAgLi4udGhpcy5hZmZpeFN0eWxlLFxyXG4gICAgICAuLi5zdHlsZU9ialxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNldFBsYWNlaG9sZGVyU3R5bGUoc3R5bGVPYmopO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlUG9zaXRpb24oZTogRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRhcmdldE5vZGUgPSB0aGlzLnRhcmdldDtcclxuICAgIGxldCBvZmZzZXRUb3AgPSB0aGlzLm56T2Zmc2V0VG9wO1xyXG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gdGhpcy5zY3JvbGxTcnYuZ2V0U2Nyb2xsKHRhcmdldE5vZGUsIHRydWUpO1xyXG4gICAgY29uc3QgZWxlbU9mZnNldCA9IHRoaXMuZ2V0T2Zmc2V0KHRoaXMucGxhY2Vob2xkZXJOb2RlLCB0YXJnZXROb2RlISk7XHJcbiAgICBjb25zdCBmaXhlZE5vZGUgPSB0aGlzLmZpeGVkRWwubmF0aXZlRWxlbWVudDtcclxuICAgIGNvbnN0IGVsZW1TaXplID0ge1xyXG4gICAgICB3aWR0aDogZml4ZWROb2RlLm9mZnNldFdpZHRoLFxyXG4gICAgICBoZWlnaHQ6IGZpeGVkTm9kZS5vZmZzZXRIZWlnaHRcclxuICAgIH07XHJcbiAgICBjb25zdCBvZmZzZXRNb2RlID0ge1xyXG4gICAgICB0b3A6IGZhbHNlLFxyXG4gICAgICBib3R0b206IGZhbHNlXHJcbiAgICB9O1xyXG4gICAgLy8gRGVmYXVsdCB0byBgb2Zmc2V0VG9wPTBgLlxyXG4gICAgaWYgKHR5cGVvZiBvZmZzZXRUb3AgIT09ICdudW1iZXInICYmIHR5cGVvZiB0aGlzLm56T2Zmc2V0Qm90dG9tICE9PSAnbnVtYmVyJykge1xyXG4gICAgICBvZmZzZXRNb2RlLnRvcCA9IHRydWU7XHJcbiAgICAgIG9mZnNldFRvcCA9IDA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBvZmZzZXRNb2RlLnRvcCA9IHR5cGVvZiBvZmZzZXRUb3AgPT09ICdudW1iZXInO1xyXG4gICAgICBvZmZzZXRNb2RlLmJvdHRvbSA9IHR5cGVvZiB0aGlzLm56T2Zmc2V0Qm90dG9tID09PSAnbnVtYmVyJztcclxuICAgIH1cclxuICAgIGNvbnN0IHRhcmdldFJlY3QgPSB0aGlzLmdldFRhcmdldFJlY3QodGFyZ2V0Tm9kZSBhcyBXaW5kb3cpO1xyXG4gICAgY29uc3QgdGFyZ2V0SW5uZXJIZWlnaHQgPSAodGFyZ2V0Tm9kZSBhcyBXaW5kb3cpLmlubmVySGVpZ2h0IHx8ICh0YXJnZXROb2RlIGFzIEhUTUxFbGVtZW50KS5jbGllbnRIZWlnaHQ7XHJcbiAgICBpZiAoc2Nyb2xsVG9wID49IGVsZW1PZmZzZXQudG9wIC0gKG9mZnNldFRvcCBhcyBudW1iZXIpICYmIG9mZnNldE1vZGUudG9wKSB7XHJcbiAgICAgIGNvbnN0IHdpZHRoID0gZWxlbU9mZnNldC53aWR0aDtcclxuICAgICAgY29uc3QgdG9wID0gdGFyZ2V0UmVjdC50b3AgKyAob2Zmc2V0VG9wIGFzIG51bWJlcik7XHJcbiAgICAgIHRoaXMuc2V0QWZmaXhTdHlsZShlLCB7XHJcbiAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICAgICAgdG9wLFxyXG4gICAgICAgIGxlZnQ6IHRhcmdldFJlY3QubGVmdCArIGVsZW1PZmZzZXQubGVmdCxcclxuICAgICAgICBtYXhIZWlnaHQ6IGBjYWxjKDEwMHZoIC0gJHt0b3B9cHgpYCxcclxuICAgICAgICB3aWR0aFxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5zZXRQbGFjZWhvbGRlclN0eWxlKHtcclxuICAgICAgICB3aWR0aCxcclxuICAgICAgICBoZWlnaHQ6IGVsZW1TaXplLmhlaWdodFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAoc2Nyb2xsVG9wIDw9IGVsZW1PZmZzZXQudG9wICsgZWxlbVNpemUuaGVpZ2h0ICsgKHRoaXMubnpPZmZzZXRCb3R0b20gYXMgbnVtYmVyKSAtIHRhcmdldElubmVySGVpZ2h0ICYmIG9mZnNldE1vZGUuYm90dG9tKSB7XHJcbiAgICAgIGNvbnN0IHRhcmdldEJvdHRvbU9mZmV0ID0gdGFyZ2V0Tm9kZSA9PT0gd2luZG93ID8gMCA6IHdpbmRvdy5pbm5lckhlaWdodCAtIHRhcmdldFJlY3QuYm90dG9tITtcclxuICAgICAgY29uc3Qgd2lkdGggPSBlbGVtT2Zmc2V0LndpZHRoO1xyXG4gICAgICB0aGlzLnNldEFmZml4U3R5bGUoZSwge1xyXG4gICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgICAgIGJvdHRvbTogdGFyZ2V0Qm90dG9tT2ZmZXQgKyAodGhpcy5uek9mZnNldEJvdHRvbSBhcyBudW1iZXIpLFxyXG4gICAgICAgIGxlZnQ6IHRhcmdldFJlY3QubGVmdCArIGVsZW1PZmZzZXQubGVmdCxcclxuICAgICAgICB3aWR0aFxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5zZXRQbGFjZWhvbGRlclN0eWxlKHtcclxuICAgICAgICB3aWR0aCxcclxuICAgICAgICBoZWlnaHQ6IGVsZW1PZmZzZXQuaGVpZ2h0XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKGUudHlwZSA9PT0gJ3Jlc2l6ZScgJiYgdGhpcy5hZmZpeFN0eWxlICYmIHRoaXMuYWZmaXhTdHlsZS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJyAmJiB0aGlzLnBsYWNlaG9sZGVyTm9kZS5vZmZzZXRXaWR0aCkge1xyXG4gICAgICAgIHRoaXMuc2V0QWZmaXhTdHlsZShlLCB7XHJcbiAgICAgICAgICAuLi50aGlzLmFmZml4U3R5bGUsXHJcbiAgICAgICAgICB3aWR0aDogdGhpcy5wbGFjZWhvbGRlck5vZGUub2Zmc2V0V2lkdGhcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNldEFmZml4U3R5bGUoZSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXRQbGFjZWhvbGRlclN0eWxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGUudHlwZSA9PT0gJ3Jlc2l6ZScpIHtcclxuICAgICAgdGhpcy5zeW5jUGxhY2Vob2xkZXJTdHlsZShlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPGRpdiAjZml4ZWRFbD5cclxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvZGl2PlxyXG4iXX0=
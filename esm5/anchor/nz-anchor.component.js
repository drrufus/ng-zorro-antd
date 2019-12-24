import { __decorate, __metadata } from "tslib";
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
import { InputBoolean, InputNumber, NzConfigService, NzScrollService, toNumber, WithConfig } from 'ng-zorro-antd/core';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
import * as i2 from "@angular/cdk/platform";
import * as i3 from "@angular/common";
import * as i4 from "ng-zorro-antd/affix";
var _c0 = ["ink"];
function NzAnchorComponent_nz_affix_0_ng_template_1_Template(rf, ctx) { }
function NzAnchorComponent_nz_affix_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nz-affix", 2);
    i0.ɵɵtemplate(1, NzAnchorComponent_nz_affix_0_ng_template_1_Template, 0, 0, "ng-template", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r360 = i0.ɵɵnextContext();
    var _r361 = i0.ɵɵreference(2);
    i0.ɵɵproperty("nzOffsetTop", ctx_r360.nzOffsetTop);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r361);
} }
var _c1 = function (a0) { return { fixed: a0 }; };
function NzAnchorComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵelementStart(2, "div", 6);
    i0.ɵɵelement(3, "div", 7, 8);
    i0.ɵɵelementEnd();
    i0.ɵɵprojection(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r362 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngStyle", ctx_r362.wrapperStyle);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c1, !ctx_r362.nzAffix && !ctx_r362.nzShowInkInFixed));
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("visible", ctx_r362.visible);
} }
var _c2 = ["*"];
var NZ_CONFIG_COMPONENT_NAME = 'anchor';
var sharpMatcherRegx = /#([^#]+)$/;
var NzAnchorComponent = /** @class */ (function () {
    function NzAnchorComponent(nzConfigService, scrollSrv, 
    /* tslint:disable-next-line:no-any */
    doc, cdr, platform) {
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
        get: function () {
            return this._offsetTop;
        },
        set: function (value) {
            this._offsetTop = toNumber(value, 0);
            this.wrapperStyle = {
                'max-height': "calc(100vh - " + this._offsetTop + "px)"
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzAnchorComponent.prototype, "nzTarget", {
        set: function (el) {
            this.target = typeof el === 'string' ? this.doc.querySelector(el) : el;
            this.registerScrollEvent();
        },
        enumerable: true,
        configurable: true
    });
    NzAnchorComponent.prototype.registerLink = function (link) {
        this.links.push(link);
    };
    NzAnchorComponent.prototype.unregisterLink = function (link) {
        this.links.splice(this.links.indexOf(link), 1);
    };
    NzAnchorComponent.prototype.getTarget = function () {
        return this.target || window;
    };
    NzAnchorComponent.prototype.ngAfterViewInit = function () {
        this.registerScrollEvent();
    };
    NzAnchorComponent.prototype.ngOnDestroy = function () {
        this.destroyed = true;
        this.removeListen();
    };
    NzAnchorComponent.prototype.registerScrollEvent = function () {
        var _this = this;
        if (!this.platform.isBrowser) {
            return;
        }
        this.removeListen();
        this.scroll$ = fromEvent(this.getTarget(), 'scroll')
            .pipe(throttleTime(50), distinctUntilChanged())
            .subscribe(function () { return _this.handleScroll(); });
        // Browser would maintain the scrolling position when refreshing.
        // So we have to delay calculation in avoid of getting a incorrect result.
        setTimeout(function () { return _this.handleScroll(); });
    };
    NzAnchorComponent.prototype.removeListen = function () {
        if (this.scroll$) {
            this.scroll$.unsubscribe();
        }
    };
    NzAnchorComponent.prototype.getOffsetTop = function (element) {
        if (!element || !element.getClientRects().length) {
            return 0;
        }
        var rect = element.getBoundingClientRect();
        if (rect.width || rect.height) {
            if (this.getTarget() === window) {
                return rect.top - element.ownerDocument.documentElement.clientTop;
            }
            return rect.top - this.getTarget().getBoundingClientRect().top;
        }
        return rect.top;
    };
    NzAnchorComponent.prototype.handleScroll = function () {
        var _this = this;
        if (typeof document === 'undefined' || this.destroyed || this.animating) {
            return;
        }
        var sections = [];
        var scope = (this.nzOffsetTop || 0) + this.nzBounds;
        this.links.forEach(function (comp) {
            var sharpLinkMatch = sharpMatcherRegx.exec(comp.nzHref.toString());
            if (!sharpLinkMatch) {
                return;
            }
            var target = _this.doc.getElementById(sharpLinkMatch[1]);
            if (target) {
                var top_1 = _this.getOffsetTop(target);
                if (top_1 < scope) {
                    sections.push({
                        top: top_1,
                        comp: comp
                    });
                }
            }
        });
        this.visible = !!sections.length;
        if (!this.visible) {
            this.clearActive();
            this.cdr.detectChanges();
        }
        else {
            var maxSection = sections.reduce(function (prev, curr) { return (curr.top > prev.top ? curr : prev); });
            this.handleActive(maxSection.comp);
        }
    };
    NzAnchorComponent.prototype.clearActive = function () {
        this.links.forEach(function (i) {
            i.active = false;
            i.markForCheck();
        });
    };
    NzAnchorComponent.prototype.handleActive = function (comp) {
        this.clearActive();
        comp.active = true;
        comp.markForCheck();
        var linkNode = comp.elementRef.nativeElement.querySelector('.ant-anchor-link-title');
        this.ink.nativeElement.style.top = linkNode.offsetTop + linkNode.clientHeight / 2 - 4.5 + "px";
        this.visible = true;
        this.cdr.detectChanges();
        this.nzScroll.emit(comp);
    };
    NzAnchorComponent.prototype.handleScrollTo = function (linkComp) {
        var _this = this;
        var el = this.doc.querySelector(linkComp.nzHref);
        if (!el) {
            return;
        }
        this.animating = true;
        var containerScrollTop = this.scrollSrv.getScroll(this.getTarget());
        var elOffsetTop = this.getOffsetTop(el);
        var targetScrollTop = containerScrollTop + elOffsetTop - (this.nzOffsetTop || 0);
        this.scrollSrv.scrollTo(this.getTarget(), targetScrollTop, undefined, function () {
            _this.animating = false;
            _this.handleActive(linkComp);
        });
        this.nzClick.emit(linkComp.nzHref);
    };
    /** @nocollapse */ NzAnchorComponent.ɵfac = function NzAnchorComponent_Factory(t) { return new (t || NzAnchorComponent)(i0.ɵɵdirectiveInject(i1.NzConfigService), i0.ɵɵdirectiveInject(i1.NzScrollService), i0.ɵɵdirectiveInject(DOCUMENT), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.Platform)); };
    /** @nocollapse */ NzAnchorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzAnchorComponent, selectors: [["nz-anchor"]], viewQuery: function NzAnchorComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.ink = _t.first);
        } }, inputs: { nzAffix: "nzAffix", nzShowInkInFixed: "nzShowInkInFixed", nzBounds: "nzBounds", nzOffsetTop: "nzOffsetTop", nzTarget: "nzTarget" }, outputs: { nzClick: "nzClick", nzScroll: "nzScroll" }, exportAs: ["nzAnchor"], ngContentSelectors: _c2, decls: 3, vars: 2, consts: [[3, "nzOffsetTop", 4, "ngIf", "ngIfElse"], ["content", ""], [3, "nzOffsetTop"], [3, "ngTemplateOutlet"], [1, "ant-anchor-wrapper", 3, "ngStyle"], [1, "ant-anchor", 3, "ngClass"], [1, "ant-anchor-ink"], [1, "ant-anchor-ink-ball"], ["ink", ""]], template: function NzAnchorComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, NzAnchorComponent_nz_affix_0_Template, 2, 2, "nz-affix", 0);
            i0.ɵɵtemplate(1, NzAnchorComponent_ng_template_1_Template, 6, 5, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            var _r361 = i0.ɵɵreference(2);
            i0.ɵɵproperty("ngIf", ctx.nzAffix)("ngIfElse", _r361);
        } }, directives: [i3.NgIf, i4.NzAffixComponent, i3.NgTemplateOutlet, i3.NgStyle, i3.NgClass], encapsulation: 2, changeDetection: 0 });
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzAnchorComponent.prototype, "nzAffix", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, false),
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzAnchorComponent.prototype, "nzShowInkInFixed", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, 5),
        InputNumber(),
        __metadata("design:type", Number)
    ], NzAnchorComponent.prototype, "nzBounds", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], NzAnchorComponent.prototype, "nzOffsetTop", null);
    return NzAnchorComponent;
}());
export { NzAnchorComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzAnchorComponent, [{
        type: Component,
        args: [{
                selector: 'nz-anchor',
                exportAs: 'nzAnchor',
                preserveWhitespaces: false,
                templateUrl: './nz-anchor.component.html',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.NzConfigService }, { type: i1.NzScrollService }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: i0.ChangeDetectorRef }, { type: i2.Platform }]; }, { ink: [{
            type: ViewChild,
            args: ['ink', { static: false }]
        }], nzAffix: [{
            type: Input
        }], nzShowInkInFixed: [{
            type: Input
        }], nzBounds: [{
            type: Input
        }], nzOffsetTop: [{
            type: Input
        }], nzTarget: [{
            type: Input
        }], nzClick: [{
            type: Output
        }], nzScroll: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYW5jaG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvYW5jaG9yLyIsInNvdXJjZXMiOlsibnotYW5jaG9yLmNvbXBvbmVudC50cyIsIm56LWFuY2hvci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVwRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBb0IsZUFBZSxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7OztJQzNCekksbUNBQ0U7SUFBQSw2RkFBMEM7SUFDNUMsaUJBQVc7Ozs7SUFGNkIsa0RBQTJCO0lBQ3BELGVBQTRCO0lBQTVCLHdDQUE0Qjs7OztJQUd6Qyw4QkFDRTtJQUFBLDhCQUNFO0lBQUEsOEJBQ0U7SUFBQSw0QkFBc0U7SUFDeEUsaUJBQU07SUFDTixrQkFBWTtJQUNkLGlCQUFNO0lBQ1IsaUJBQU07OztJQVAwQiwrQ0FBd0I7SUFDOUIsZUFBb0Q7SUFBcEQscUdBQW9EO0lBRXZDLGVBQXlCO0lBQXpCLDJDQUF5Qjs7O0FENkJsRSxJQUFNLHdCQUF3QixHQUFHLFFBQVEsQ0FBQztBQUMxQyxJQUFNLGdC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QVE7O2tCQW5EakIsU0FBUzttQkFBQyxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOztrQkFFbEMsS0FBSzs7a0JBRUwsS0FBSzs7a0JBS0wsS0FBSzs7a0JBS0wsS0FBSzs7a0JBZUwsS0FBSzs7a0JBTUwsTUFBTTs7a0JBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5qZWN0LFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPdXRwdXQsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGZyb21FdmVudCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCB0aHJvdHRsZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyLCBOZ1N0eWxlSW50ZXJmYWNlLCBOekNvbmZpZ1NlcnZpY2UsIE56U2Nyb2xsU2VydmljZSwgdG9OdW1iZXIsIFdpdGhDb25maWcgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpBbmNob3JMaW5rQ29tcG9uZW50IH0gZnJvbSAnLi9uei1hbmNob3ItbGluay5jb21wb25lbnQnO1xyXG5cclxuaW50ZXJmYWNlIFNlY3Rpb24ge1xyXG4gIGNvbXA6IE56QW5jaG9yTGlua0NvbXBvbmVudDtcclxuICB0b3A6IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ2FuY2hvcic7XHJcbmNvbnN0IHNoYXJwTWF0Y2hlclJlZ3ggPSAvIyhbXiNdKykkLztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotYW5jaG9yJyxcclxuICBleHBvcnRBczogJ256QW5jaG9yJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotYW5jaG9yLmNvbXBvbmVudC5odG1sJyxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekFuY2hvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQFZpZXdDaGlsZCgnaW5rJywgeyBzdGF0aWM6IGZhbHNlIH0pIHByaXZhdGUgaW5rOiBFbGVtZW50UmVmO1xyXG5cclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpBZmZpeCA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCBmYWxzZSlcclxuICBASW5wdXRCb29sZWFuKClcclxuICBuelNob3dJbmtJbkZpeGVkOiBib29sZWFuO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgNSlcclxuICBASW5wdXROdW1iZXIoKVxyXG4gIG56Qm91bmRzOiBudW1iZXI7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgQFdpdGhDb25maWc8bnVtYmVyPihOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpXHJcbiAgc2V0IG56T2Zmc2V0VG9wKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX29mZnNldFRvcCA9IHRvTnVtYmVyKHZhbHVlLCAwKTtcclxuICAgIHRoaXMud3JhcHBlclN0eWxlID0ge1xyXG4gICAgICAnbWF4LWhlaWdodCc6IGBjYWxjKDEwMHZoIC0gJHt0aGlzLl9vZmZzZXRUb3B9cHgpYFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGdldCBuek9mZnNldFRvcCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX29mZnNldFRvcDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX29mZnNldFRvcDogbnVtYmVyO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelRhcmdldChlbDogc3RyaW5nIHwgRWxlbWVudCkge1xyXG4gICAgdGhpcy50YXJnZXQgPSB0eXBlb2YgZWwgPT09ICdzdHJpbmcnID8gdGhpcy5kb2MucXVlcnlTZWxlY3RvcihlbCkgOiBlbDtcclxuICAgIHRoaXMucmVnaXN0ZXJTY3JvbGxFdmVudCgpO1xyXG4gIH1cclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpTY3JvbGwgPSBuZXcgRXZlbnRFbWl0dGVyPE56QW5jaG9yTGlua0NvbXBvbmVudD4oKTtcclxuXHJcbiAgdmlzaWJsZSA9IGZhbHNlO1xyXG4gIHdyYXBwZXJTdHlsZTogTmdTdHlsZUludGVyZmFjZSA9IHsgJ21heC1oZWlnaHQnOiAnMTAwdmgnIH07XHJcblxyXG4gIHByaXZhdGUgbGlua3M6IE56QW5jaG9yTGlua0NvbXBvbmVudFtdID0gW107XHJcbiAgcHJpdmF0ZSBhbmltYXRpbmcgPSBmYWxzZTtcclxuICBwcml2YXRlIHRhcmdldDogRWxlbWVudCB8IG51bGwgPSBudWxsO1xyXG4gIHByaXZhdGUgc2Nyb2xsJDogU3Vic2NyaXB0aW9uIHwgbnVsbCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBkZXN0cm95ZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHNjcm9sbFNydjogTnpTY3JvbGxTZXJ2aWNlLFxyXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xyXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSxcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtXHJcbiAgKSB7fVxyXG5cclxuICByZWdpc3RlckxpbmsobGluazogTnpBbmNob3JMaW5rQ29tcG9uZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLmxpbmtzLnB1c2gobGluayk7XHJcbiAgfVxyXG5cclxuICB1bnJlZ2lzdGVyTGluayhsaW5rOiBOekFuY2hvckxpbmtDb21wb25lbnQpOiB2b2lkIHtcclxuICAgIHRoaXMubGlua3Muc3BsaWNlKHRoaXMubGlua3MuaW5kZXhPZihsaW5rKSwgMSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFRhcmdldCgpOiBFbGVtZW50IHwgV2luZG93IHtcclxuICAgIHJldHVybiB0aGlzLnRhcmdldCB8fCB3aW5kb3c7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlZ2lzdGVyU2Nyb2xsRXZlbnQoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5yZW1vdmVMaXN0ZW4oKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVnaXN0ZXJTY3JvbGxFdmVudCgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yZW1vdmVMaXN0ZW4oKTtcclxuICAgIHRoaXMuc2Nyb2xsJCA9IGZyb21FdmVudCh0aGlzLmdldFRhcmdldCgpLCAnc2Nyb2xsJylcclxuICAgICAgLnBpcGUodGhyb3R0bGVUaW1lKDUwKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSlcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmhhbmRsZVNjcm9sbCgpKTtcclxuICAgIC8vIEJyb3dzZXIgd291bGQgbWFpbnRhaW4gdGhlIHNjcm9sbGluZyBwb3NpdGlvbiB3aGVuIHJlZnJlc2hpbmcuXHJcbiAgICAvLyBTbyB3ZSBoYXZlIHRvIGRlbGF5IGNhbGN1bGF0aW9uIGluIGF2b2lkIG9mIGdldHRpbmcgYSBpbmNvcnJlY3QgcmVzdWx0LlxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmhhbmRsZVNjcm9sbCgpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVtb3ZlTGlzdGVuKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuc2Nyb2xsJCkge1xyXG4gICAgICB0aGlzLnNjcm9sbCQudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0T2Zmc2V0VG9wKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogbnVtYmVyIHtcclxuICAgIGlmICghZWxlbWVudCB8fCAhZWxlbWVudC5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgaWYgKHJlY3Qud2lkdGggfHwgcmVjdC5oZWlnaHQpIHtcclxuICAgICAgaWYgKHRoaXMuZ2V0VGFyZ2V0KCkgPT09IHdpbmRvdykge1xyXG4gICAgICAgIHJldHVybiByZWN0LnRvcCAtIGVsZW1lbnQub3duZXJEb2N1bWVudCEuZG9jdW1lbnRFbGVtZW50IS5jbGllbnRUb3A7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJlY3QudG9wIC0gKHRoaXMuZ2V0VGFyZ2V0KCkgYXMgSFRNTEVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcclxuICAgIH1cclxuICAgIHJldHVybiByZWN0LnRvcDtcclxuICB9XHJcblxyXG4gIGhhbmRsZVNjcm9sbCgpOiB2b2lkIHtcclxuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnIHx8IHRoaXMuZGVzdHJveWVkIHx8IHRoaXMuYW5pbWF0aW5nKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZWN0aW9uczogU2VjdGlvbltdID0gW107XHJcbiAgICBjb25zdCBzY29wZSA9ICh0aGlzLm56T2Zmc2V0VG9wIHx8IDApICsgdGhpcy5uekJvdW5kcztcclxuICAgIHRoaXMubGlua3MuZm9yRWFjaChjb21wID0+IHtcclxuICAgICAgY29uc3Qgc2hhcnBMaW5rTWF0Y2ggPSBzaGFycE1hdGNoZXJSZWd4LmV4ZWMoY29tcC5uekhyZWYudG9TdHJpbmcoKSk7XHJcbiAgICAgIGlmICghc2hhcnBMaW5rTWF0Y2gpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5kb2MuZ2V0RWxlbWVudEJ5SWQoc2hhcnBMaW5rTWF0Y2hbMV0pO1xyXG4gICAgICBpZiAodGFyZ2V0KSB7XHJcbiAgICAgICAgY29uc3QgdG9wID0gdGhpcy5nZXRPZmZzZXRUb3AodGFyZ2V0KTtcclxuICAgICAgICBpZiAodG9wIDwgc2NvcGUpIHtcclxuICAgICAgICAgIHNlY3Rpb25zLnB1c2goe1xyXG4gICAgICAgICAgICB0b3AsXHJcbiAgICAgICAgICAgIGNvbXBcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy52aXNpYmxlID0gISFzZWN0aW9ucy5sZW5ndGg7XHJcbiAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xyXG4gICAgICB0aGlzLmNsZWFyQWN0aXZlKCk7XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IG1heFNlY3Rpb24gPSBzZWN0aW9ucy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IChjdXJyLnRvcCA+IHByZXYudG9wID8gY3VyciA6IHByZXYpKTtcclxuICAgICAgdGhpcy5oYW5kbGVBY3RpdmUobWF4U2VjdGlvbi5jb21wKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xlYXJBY3RpdmUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmxpbmtzLmZvckVhY2goaSA9PiB7XHJcbiAgICAgIGkuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgIGkubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlQWN0aXZlKGNvbXA6IE56QW5jaG9yTGlua0NvbXBvbmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5jbGVhckFjdGl2ZSgpO1xyXG5cclxuICAgIGNvbXAuYWN0aXZlID0gdHJ1ZTtcclxuICAgIGNvbXAubWFya0ZvckNoZWNrKCk7XHJcblxyXG4gICAgY29uc3QgbGlua05vZGUgPSAoY29tcC5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTERpdkVsZW1lbnQpLnF1ZXJ5U2VsZWN0b3IoJy5hbnQtYW5jaG9yLWxpbmstdGl0bGUnKSBhcyBIVE1MRWxlbWVudDtcclxuICAgIHRoaXMuaW5rLm5hdGl2ZUVsZW1lbnQuc3R5bGUudG9wID0gYCR7bGlua05vZGUub2Zmc2V0VG9wICsgbGlua05vZGUuY2xpZW50SGVpZ2h0IC8gMiAtIDQuNX1weGA7XHJcbiAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG5cclxuICAgIHRoaXMubnpTY3JvbGwuZW1pdChjb21wKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVNjcm9sbFRvKGxpbmtDb21wOiBOekFuY2hvckxpbmtDb21wb25lbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IGVsID0gdGhpcy5kb2MucXVlcnlTZWxlY3RvcihsaW5rQ29tcC5uekhyZWYpO1xyXG4gICAgaWYgKCFlbCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hbmltYXRpbmcgPSB0cnVlO1xyXG4gICAgY29uc3QgY29udGFpbmVyU2Nyb2xsVG9wID0gdGhpcy5zY3JvbGxTcnYuZ2V0U2Nyb2xsKHRoaXMuZ2V0VGFyZ2V0KCkpO1xyXG4gICAgY29uc3QgZWxPZmZzZXRUb3AgPSB0aGlzLmdldE9mZnNldFRvcChlbCk7XHJcbiAgICBjb25zdCB0YXJnZXRTY3JvbGxUb3AgPSBjb250YWluZXJTY3JvbGxUb3AgKyBlbE9mZnNldFRvcCAtICh0aGlzLm56T2Zmc2V0VG9wIHx8IDApO1xyXG4gICAgdGhpcy5zY3JvbGxTcnYuc2Nyb2xsVG8odGhpcy5nZXRUYXJnZXQoKSwgdGFyZ2V0U2Nyb2xsVG9wLCB1bmRlZmluZWQsICgpID0+IHtcclxuICAgICAgdGhpcy5hbmltYXRpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5oYW5kbGVBY3RpdmUobGlua0NvbXApO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLm56Q2xpY2suZW1pdChsaW5rQ29tcC5uekhyZWYpO1xyXG4gIH1cclxufVxyXG4iLCI8bnotYWZmaXggKm5nSWY9XCJuekFmZml4OyBlbHNlIGNvbnRlbnRcIiBbbnpPZmZzZXRUb3BdPVwibnpPZmZzZXRUb3BcIj5cclxuICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29udGVudFwiPjwvbmctdGVtcGxhdGU+XHJcbjwvbnotYWZmaXg+XHJcbjxuZy10ZW1wbGF0ZSAjY29udGVudD5cclxuICA8ZGl2IGNsYXNzPVwiYW50LWFuY2hvci13cmFwcGVyXCIgW25nU3R5bGVdPVwid3JhcHBlclN0eWxlXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYW50LWFuY2hvclwiIFtuZ0NsYXNzXT1cInsgZml4ZWQ6ICFuekFmZml4ICYmICFuelNob3dJbmtJbkZpeGVkIH1cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImFudC1hbmNob3ItaW5rXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImFudC1hbmNob3ItaW5rLWJhbGxcIiBbY2xhc3MudmlzaWJsZV09XCJ2aXNpYmxlXCIgI2luaz48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=
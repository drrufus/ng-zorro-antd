import { __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Host, Input, NgZone, Optional, Output, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { InputBoolean, NzDomEventService, toCssPixel } from 'ng-zorro-antd/core';
import { NzLayoutComponent } from './nz-layout.component';
import * as i0 from "@angular/core";
import * as i1 from "./nz-layout.component";
import * as i2 from "@angular/cdk/layout";
import * as i3 from "@angular/cdk/platform";
import * as i4 from "ng-zorro-antd/core";
import * as i5 from "@angular/common";
import * as i6 from "ng-zorro-antd/icon";
var _c0 = ["defaultTrigger"];
function NzSiderComponent_span_2_ng_template_1_Template(rf, ctx) { }
function NzSiderComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    var _r560 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 5);
    i0.ɵɵlistener("click", function NzSiderComponent_span_2_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r560); var ctx_r559 = i0.ɵɵnextContext(); return ctx_r559.toggleCollapse(); });
    i0.ɵɵtemplate(1, NzSiderComponent_span_2_ng_template_1_Template, 0, 0, "ng-template", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r552 = i0.ɵɵnextContext();
    var _r556 = i0.ɵɵreference(7);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r552.nzZeroTrigger || _r556);
} }
function NzSiderComponent_div_3_ng_template_1_Template(rf, ctx) { }
function NzSiderComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r563 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵlistener("click", function NzSiderComponent_div_3_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r563); var ctx_r562 = i0.ɵɵnextContext(); return ctx_r562.toggleCollapse(); });
    i0.ɵɵtemplate(1, NzSiderComponent_div_3_ng_template_1_Template, 0, 0, "ng-template", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r553 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("width", ctx_r553.widthSetting);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r553.trigger);
} }
function NzSiderComponent_ng_template_4_i_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 9);
} if (rf & 2) {
    var ctx_r564 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("nzType", ctx_r564.nzCollapsed ? "right" : "left");
} }
function NzSiderComponent_ng_template_4_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 9);
} if (rf & 2) {
    var ctx_r565 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("nzType", ctx_r565.nzCollapsed ? "left" : "right");
} }
function NzSiderComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NzSiderComponent_ng_template_4_i_0_Template, 1, 1, "i", 8);
    i0.ɵɵtemplate(1, NzSiderComponent_ng_template_4_i_1_Template, 1, 1, "i", 8);
} if (rf & 2) {
    var ctx_r555 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", !ctx_r555.nzReverseArrow);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r555.nzReverseArrow);
} }
function NzSiderComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 10);
} }
var _c1 = ["*"];
var NzSiderComponent = /** @class */ (function () {
    function NzSiderComponent(nzLayoutComponent, mediaMatcher, ngZone, platform, cdr, nzDomEventService, renderer, elementRef) {
        this.nzLayoutComponent = nzLayoutComponent;
        this.mediaMatcher = mediaMatcher;
        this.ngZone = ngZone;
        this.platform = platform;
        this.cdr = cdr;
        this.nzDomEventService = nzDomEventService;
        this.below = false;
        this.destroy$ = new Subject();
        this.dimensionMap = {
            xs: '480px',
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1200px',
            xxl: '1600px'
        };
        this.nzCollapsedChange = new EventEmitter();
        this.nzWidth = 200;
        this.nzTheme = 'dark';
        this.nzCollapsedWidth = 80;
        this.nzReverseArrow = false;
        this.nzCollapsible = false;
        this.nzCollapsed = false;
        renderer.addClass(elementRef.nativeElement, 'ant-layout-sider');
    }
    Object.defineProperty(NzSiderComponent.prototype, "trigger", {
        get: function () {
            return this.nzTrigger !== undefined ? this.nzTrigger : this.defaultTrigger;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSiderComponent.prototype, "flexSetting", {
        get: function () {
            return "0 0 " + this.widthSetting;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSiderComponent.prototype, "widthSetting", {
        get: function () {
            if (this.nzCollapsed) {
                return this.nzCollapsedWidth + "px";
            }
            else {
                return toCssPixel(this.nzWidth);
            }
        },
        enumerable: true,
        configurable: true
    });
    NzSiderComponent.prototype.watchMatchMedia = function () {
        var _this = this;
        if (this.nzBreakpoint) {
            var matchBelow = this.mediaMatcher.matchMedia("(max-width: " + this.dimensionMap[this.nzBreakpoint] + ")").matches;
            this.below = matchBelow;
            this.nzCollapsed = matchBelow;
            this.nzCollapsedChange.emit(matchBelow);
            this.ngZone.run(function () {
                _this.cdr.markForCheck();
            });
        }
    };
    NzSiderComponent.prototype.toggleCollapse = function () {
        this.nzCollapsed = !this.nzCollapsed;
        this.nzCollapsedChange.emit(this.nzCollapsed);
    };
    Object.defineProperty(NzSiderComponent.prototype, "isZeroTrigger", {
        get: function () {
            return this.nzCollapsible && this.trigger && this.nzCollapsedWidth === 0 && ((this.nzBreakpoint && this.below) || !this.nzBreakpoint);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSiderComponent.prototype, "isSiderTrigger", {
        get: function () {
            return this.nzCollapsible && this.trigger && this.nzCollapsedWidth !== 0;
        },
        enumerable: true,
        configurable: true
    });
    NzSiderComponent.prototype.ngOnInit = function () {
        if (this.nzLayoutComponent) {
            this.nzLayoutComponent.initSider();
        }
    };
    NzSiderComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.platform.isBrowser) {
            Promise.resolve().then(function () { return _this.watchMatchMedia(); });
            this.nzDomEventService
                .registerResizeListener()
                .pipe(takeUntil(this.destroy$), finalize(function () { return _this.nzDomEventService.unregisterResizeListener(); }))
                .subscribe(function () { return _this.watchMatchMedia(); });
        }
    };
    NzSiderComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
        if (this.nzLayoutComponent) {
            this.nzLayoutComponent.destroySider();
        }
    };
    /** @nocollapse */ NzSiderComponent.ɵfac = function NzSiderComponent_Factory(t) { return new (t || NzSiderComponent)(i0.ɵɵdirectiveInject(i1.NzLayoutComponent, 9), i0.ɵɵdirectiveInject(i2.MediaMatcher), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i3.Platform), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i4.NzDomEventService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    /** @nocollapse */ NzSiderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzSiderComponent, selectors: [["nz-sider"]], viewQuery: function NzSiderComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵstaticViewQuery(_c0, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.defaultTrigger = _t.first);
        } }, hostBindings: function NzSiderComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            i0.ɵɵallocHostVars(7);
        } if (rf & 2) {
            i0.ɵɵstyleProp("flex", ctx.flexSetting)("max-width", ctx.widthSetting)("min-width", ctx.widthSetting)("width", ctx.widthSetting);
            i0.ɵɵclassProp("ant-layout-sider-zero-width", ctx.nzCollapsed && ctx.nzCollapsedWidth === 0)("ant-layout-sider-light", ctx.nzTheme === "light")("ant-layout-sider-collapsed", ctx.nzCollapsed);
        } }, inputs: { nzWidth: "nzWidth", nzTheme: "nzTheme", nzCollapsedWidth: "nzCollapsedWidth", nzBreakpoint: "nzBreakpoint", nzZeroTrigger: "nzZeroTrigger", nzReverseArrow: "nzReverseArrow", nzCollapsible: "nzCollapsible", nzCollapsed: "nzCollapsed", nzTrigger: "nzTrigger" }, outputs: { nzCollapsedChange: "nzCollapsedChange" }, exportAs: ["nzSider"], ngContentSelectors: _c1, decls: 8, vars: 2, consts: [[1, "ant-layout-sider-children"], ["class", "ant-layout-sider-zero-width-trigger", 3, "click", 4, "ngIf"], ["class", "ant-layout-sider-trigger", 3, "width", "click", 4, "ngIf"], ["defaultTrigger", ""], ["zeroTrigger", ""], [1, "ant-layout-sider-zero-width-trigger", 3, "click"], [3, "ngTemplateOutlet"], [1, "ant-layout-sider-trigger", 3, "click"], ["nz-icon", "", 3, "nzType", 4, "ngIf"], ["nz-icon", "", 3, "nzType"], ["nz-icon", "", "nzType", "bars"]], template: function NzSiderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵprojection(1);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(2, NzSiderComponent_span_2_Template, 2, 1, "span", 1);
            i0.ɵɵtemplate(3, NzSiderComponent_div_3_Template, 2, 2, "div", 2);
            i0.ɵɵtemplate(4, NzSiderComponent_ng_template_4_Template, 2, 2, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(6, NzSiderComponent_ng_template_6_Template, 1, 0, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.isZeroTrigger);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.isSiderTrigger);
        } }, directives: [i5.NgIf, i5.NgTemplateOutlet, i6.NzIconDirective], encapsulation: 2, changeDetection: 0 });
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzSiderComponent.prototype, "nzReverseArrow", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzSiderComponent.prototype, "nzCollapsible", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzSiderComponent.prototype, "nzCollapsed", void 0);
    return NzSiderComponent;
}());
export { NzSiderComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzSiderComponent, [{
        type: Component,
        args: [{
                selector: 'nz-sider',
                exportAs: 'nzSider',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                templateUrl: './nz-sider.component.html',
                host: {
                    '[class.ant-layout-sider-zero-width]': 'nzCollapsed && nzCollapsedWidth === 0',
                    '[class.ant-layout-sider-light]': "nzTheme === 'light'",
                    '[class.ant-layout-sider-collapsed]': 'nzCollapsed',
                    '[style.flex]': 'flexSetting',
                    '[style.max-width]': 'widthSetting',
                    '[style.min-width]': 'widthSetting',
                    '[style.width]': 'widthSetting'
                }
            }]
    }], function () { return [{ type: i1.NzLayoutComponent, decorators: [{
                type: Optional
            }, {
                type: Host
            }] }, { type: i2.MediaMatcher }, { type: i0.NgZone }, { type: i3.Platform }, { type: i0.ChangeDetectorRef }, { type: i4.NzDomEventService }, { type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { nzCollapsedChange: [{
            type: Output
        }], nzWidth: [{
            type: Input
        }], nzTheme: [{
            type: Input
        }], nzCollapsedWidth: [{
            type: Input
        }], nzBreakpoint: [{
            type: Input
        }], nzZeroTrigger: [{
            type: Input
        }], nzReverseArrow: [{
            type: Input
        }], nzCollapsible: [{
            type: Input
        }], nzCollapsed: [{
            type: Input
        }], nzTrigger: [{
            type: Input
        }], defaultTrigger: [{
            type: ViewChild,
            args: ['defaultTrigger', { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2lkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9sYXlvdXQvIiwic291cmNlcyI6WyJuei1zaWRlci5jb21wb25lbnQudHMiLCJuei1zaWRlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osSUFBSSxFQUNKLEtBQUssRUFDTCxNQUFNLEVBR04sUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckQsT0FBTyxFQUFFLFlBQVksRUFBZ0IsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFL0YsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7Ozs7Ozs7OztJQ2hDMUQsK0JBQ0U7SUFEc0UsaU1BQTBCO0lBQ2hHLHdGQUErRDtJQUNqRSxpQkFBTzs7OztJQURRLGVBQWlEO0lBQWpELGtFQUFpRDs7Ozs7SUFFaEUsOEJBTUU7SUFIQSwrTEFBMEI7SUFHMUIsdUZBQTBDO0lBQzVDLGlCQUFNOzs7SUFISiw4Q0FBNEI7SUFFZixlQUE0QjtJQUE1QixtREFBNEI7OztJQUd6Qyx1QkFBaUY7OztJQUF0RSxnRUFBeUM7OztJQUNwRCx1QkFBZ0Y7OztJQUFyRSxnRUFBeUM7OztJ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QUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxTQUFTO21CQUFDLGdCQUFnQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBIb3N0LFxyXG4gIElucHV0LFxyXG4gIE5nWm9uZSxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBNZWRpYU1hdGNoZXIgfSBmcm9tICdAYW5ndWxhci9jZGsvbGF5b3V0JztcclxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpbmFsaXplLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIE56QnJlYWtQb2ludCwgTnpEb21FdmVudFNlcnZpY2UsIHRvQ3NzUGl4ZWwgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL256LWxheW91dC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei1zaWRlcicsXHJcbiAgZXhwb3J0QXM6ICduelNpZGVyJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1zaWRlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtbGF5b3V0LXNpZGVyLXplcm8td2lkdGhdJzogJ256Q29sbGFwc2VkICYmIG56Q29sbGFwc2VkV2lkdGggPT09IDAnLFxyXG4gICAgJ1tjbGFzcy5hbnQtbGF5b3V0LXNpZGVyLWxpZ2h0XSc6IGBuelRoZW1lID09PSAnbGlnaHQnYCxcclxuICAgICdbY2xhc3MuYW50LWxheW91dC1zaWRlci1jb2xsYXBzZWRdJzogJ256Q29sbGFwc2VkJyxcclxuICAgICdbc3R5bGUuZmxleF0nOiAnZmxleFNldHRpbmcnLFxyXG4gICAgJ1tzdHlsZS5tYXgtd2lkdGhdJzogJ3dpZHRoU2V0dGluZycsXHJcbiAgICAnW3N0eWxlLm1pbi13aWR0aF0nOiAnd2lkdGhTZXR0aW5nJyxcclxuICAgICdbc3R5bGUud2lkdGhdJzogJ3dpZHRoU2V0dGluZydcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelNpZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgYmVsb3cgPSBmYWxzZTtcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcclxuICBwcml2YXRlIGRpbWVuc2lvbk1hcCA9IHtcclxuICAgIHhzOiAnNDgwcHgnLFxyXG4gICAgc206ICc1NzZweCcsXHJcbiAgICBtZDogJzc2OHB4JyxcclxuICAgIGxnOiAnOTkycHgnLFxyXG4gICAgeGw6ICcxMjAwcHgnLFxyXG4gICAgeHhsOiAnMTYwMHB4J1xyXG4gIH07XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNvbGxhcHNlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgQElucHV0KCkgbnpXaWR0aDogc3RyaW5nIHwgbnVtYmVyID0gMjAwO1xyXG4gIEBJbnB1dCgpIG56VGhlbWU6ICdsaWdodCcgfCAnZGFyaycgPSAnZGFyayc7XHJcbiAgQElucHV0KCkgbnpDb2xsYXBzZWRXaWR0aCA9IDgwO1xyXG4gIEBJbnB1dCgpIG56QnJlYWtwb2ludDogTnpCcmVha1BvaW50O1xyXG4gIEBJbnB1dCgpIG56WmVyb1RyaWdnZXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelJldmVyc2VBcnJvdyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekNvbGxhcHNpYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q29sbGFwc2VkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpUcmlnZ2VyOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBAVmlld0NoaWxkKCdkZWZhdWx0VHJpZ2dlcicsIHsgc3RhdGljOiB0cnVlIH0pIGRlZmF1bHRUcmlnZ2VyOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBnZXQgdHJpZ2dlcigpOiBUZW1wbGF0ZVJlZjx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5uelRyaWdnZXIgIT09IHVuZGVmaW5lZCA/IHRoaXMubnpUcmlnZ2VyIDogdGhpcy5kZWZhdWx0VHJpZ2dlcjtcclxuICB9XHJcblxyXG4gIGdldCBmbGV4U2V0dGluZygpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGAwIDAgJHt0aGlzLndpZHRoU2V0dGluZ31gO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHdpZHRoU2V0dGluZygpOiBzdHJpbmcge1xyXG4gICAgaWYgKHRoaXMubnpDb2xsYXBzZWQpIHtcclxuICAgICAgcmV0dXJuIGAke3RoaXMubnpDb2xsYXBzZWRXaWR0aH1weGA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdG9Dc3NQaXhlbCh0aGlzLm56V2lkdGgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgd2F0Y2hNYXRjaE1lZGlhKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpCcmVha3BvaW50KSB7XHJcbiAgICAgIGNvbnN0IG1hdGNoQmVsb3cgPSB0aGlzLm1lZGlhTWF0Y2hlci5tYXRjaE1lZGlhKGAobWF4LXdpZHRoOiAke3RoaXMuZGltZW5zaW9uTWFwW3RoaXMubnpCcmVha3BvaW50XX0pYCkubWF0Y2hlcztcclxuICAgICAgdGhpcy5iZWxvdyA9IG1hdGNoQmVsb3c7XHJcbiAgICAgIHRoaXMubnpDb2xsYXBzZWQgPSBtYXRjaEJlbG93O1xyXG4gICAgICB0aGlzLm56Q29sbGFwc2VkQ2hhbmdlLmVtaXQobWF0Y2hCZWxvdyk7XHJcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlQ29sbGFwc2UoKTogdm9pZCB7XHJcbiAgICB0aGlzLm56Q29sbGFwc2VkID0gIXRoaXMubnpDb2xsYXBzZWQ7XHJcbiAgICB0aGlzLm56Q29sbGFwc2VkQ2hhbmdlLmVtaXQodGhpcy5uekNvbGxhcHNlZCk7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNaZXJvVHJpZ2dlcigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm56Q29sbGFwc2libGUgJiYgdGhpcy50cmlnZ2VyICYmIHRoaXMubnpDb2xsYXBzZWRXaWR0aCA9PT0gMCAmJiAoKHRoaXMubnpCcmVha3BvaW50ICYmIHRoaXMuYmVsb3cpIHx8ICF0aGlzLm56QnJlYWtwb2ludCk7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNTaWRlclRyaWdnZXIoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5uekNvbGxhcHNpYmxlICYmIHRoaXMudHJpZ2dlciAmJiB0aGlzLm56Q29sbGFwc2VkV2lkdGggIT09IDA7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBPcHRpb25hbCgpIEBIb3N0KCkgcHJpdmF0ZSBuekxheW91dENvbXBvbmVudDogTnpMYXlvdXRDb21wb25lbnQsXHJcbiAgICBwcml2YXRlIG1lZGlhTWF0Y2hlcjogTWVkaWFNYXRjaGVyLFxyXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcclxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBuekRvbUV2ZW50U2VydmljZTogTnpEb21FdmVudFNlcnZpY2UsXHJcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZlxyXG4gICkge1xyXG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWxheW91dC1zaWRlcicpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uekxheW91dENvbXBvbmVudCkge1xyXG4gICAgICB0aGlzLm56TGF5b3V0Q29tcG9uZW50LmluaXRTaWRlcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XHJcbiAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy53YXRjaE1hdGNoTWVkaWEoKSk7XHJcbiAgICAgIHRoaXMubnpEb21FdmVudFNlcnZpY2VcclxuICAgICAgICAucmVnaXN0ZXJSZXNpemVMaXN0ZW5lcigpXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXHJcbiAgICAgICAgICBmaW5hbGl6ZSgoKSA9PiB0aGlzLm56RG9tRXZlbnRTZXJ2aWNlLnVucmVnaXN0ZXJSZXNpemVMaXN0ZW5lcigpKVxyXG4gICAgICAgIClcclxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMud2F0Y2hNYXRjaE1lZGlhKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICAgIGlmICh0aGlzLm56TGF5b3V0Q29tcG9uZW50KSB7XHJcbiAgICAgIHRoaXMubnpMYXlvdXRDb21wb25lbnQuZGVzdHJveVNpZGVyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJhbnQtbGF5b3V0LXNpZGVyLWNoaWxkcmVuXCI+XHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L2Rpdj5cclxuPHNwYW4gY2xhc3M9XCJhbnQtbGF5b3V0LXNpZGVyLXplcm8td2lkdGgtdHJpZ2dlclwiICpuZ0lmPVwiaXNaZXJvVHJpZ2dlclwiIChjbGljayk9XCJ0b2dnbGVDb2xsYXBzZSgpXCI+XHJcbiAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIm56WmVyb1RyaWdnZXIgfHwgemVyb1RyaWdnZXJcIj48L25nLXRlbXBsYXRlPlxyXG48L3NwYW4+XHJcbjxkaXZcclxuICBjbGFzcz1cImFudC1sYXlvdXQtc2lkZXItdHJpZ2dlclwiXHJcbiAgKm5nSWY9XCJpc1NpZGVyVHJpZ2dlclwiXHJcbiAgKGNsaWNrKT1cInRvZ2dsZUNvbGxhcHNlKClcIlxyXG4gIFtzdHlsZS53aWR0aF09XCJ3aWR0aFNldHRpbmdcIlxyXG4+XHJcbiAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRyaWdnZXJcIj48L25nLXRlbXBsYXRlPlxyXG48L2Rpdj5cclxuPG5nLXRlbXBsYXRlICNkZWZhdWx0VHJpZ2dlcj5cclxuICA8aSBuei1pY29uIFtuelR5cGVdPVwibnpDb2xsYXBzZWQgPyAncmlnaHQnIDogJ2xlZnQnXCIgKm5nSWY9XCIhbnpSZXZlcnNlQXJyb3dcIj48L2k+XHJcbiAgPGkgbnotaWNvbiBbbnpUeXBlXT1cIm56Q29sbGFwc2VkID8gJ2xlZnQnIDogJ3JpZ2h0J1wiICpuZ0lmPVwibnpSZXZlcnNlQXJyb3dcIj48L2k+XHJcbjwvbmctdGVtcGxhdGU+XHJcbjxuZy10ZW1wbGF0ZSAjemVyb1RyaWdnZXI+XHJcbiAgPGkgbnotaWNvbiBuelR5cGU9XCJiYXJzXCI+PC9pPlxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=
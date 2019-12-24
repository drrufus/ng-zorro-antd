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
const _c0 = ["defaultTrigger"];
function NzSiderComponent_span_2_ng_template_1_Template(rf, ctx) { }
function NzSiderComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r546 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 5);
    i0.ɵɵlistener("click", function NzSiderComponent_span_2_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r546); const ctx_r545 = i0.ɵɵnextContext(); return ctx_r545.toggleCollapse(); });
    i0.ɵɵtemplate(1, NzSiderComponent_span_2_ng_template_1_Template, 0, 0, "ng-template", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r538 = i0.ɵɵnextContext();
    const _r542 = i0.ɵɵreference(7);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r538.nzZeroTrigger || _r542);
} }
function NzSiderComponent_div_3_ng_template_1_Template(rf, ctx) { }
function NzSiderComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r549 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵlistener("click", function NzSiderComponent_div_3_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r549); const ctx_r548 = i0.ɵɵnextContext(); return ctx_r548.toggleCollapse(); });
    i0.ɵɵtemplate(1, NzSiderComponent_div_3_ng_template_1_Template, 0, 0, "ng-template", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r539 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("width", ctx_r539.widthSetting);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r539.trigger);
} }
function NzSiderComponent_ng_template_4_i_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 9);
} if (rf & 2) {
    const ctx_r550 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("nzType", ctx_r550.nzCollapsed ? "right" : "left");
} }
function NzSiderComponent_ng_template_4_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 9);
} if (rf & 2) {
    const ctx_r551 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("nzType", ctx_r551.nzCollapsed ? "left" : "right");
} }
function NzSiderComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NzSiderComponent_ng_template_4_i_0_Template, 1, 1, "i", 8);
    i0.ɵɵtemplate(1, NzSiderComponent_ng_template_4_i_1_Template, 1, 1, "i", 8);
} if (rf & 2) {
    const ctx_r541 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", !ctx_r541.nzReverseArrow);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r541.nzReverseArrow);
} }
function NzSiderComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 10);
} }
const _c1 = ["*"];
export class NzSiderComponent {
    constructor(nzLayoutComponent, mediaMatcher, ngZone, platform, cdr, nzDomEventService, renderer, elementRef) {
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
    get trigger() {
        return this.nzTrigger !== undefined ? this.nzTrigger : this.defaultTrigger;
    }
    get flexSetting() {
        return `0 0 ${this.widthSetting}`;
    }
    get widthSetting() {
        if (this.nzCollapsed) {
            return `${this.nzCollapsedWidth}px`;
        }
        else {
            return toCssPixel(this.nzWidth);
        }
    }
    watchMatchMedia() {
        if (this.nzBreakpoint) {
            const matchBelow = this.mediaMatcher.matchMedia(`(max-width: ${this.dimensionMap[this.nzBreakpoint]})`).matches;
            this.below = matchBelow;
            this.nzCollapsed = matchBelow;
            this.nzCollapsedChange.emit(matchBelow);
            this.ngZone.run(() => {
                this.cdr.markForCheck();
            });
        }
    }
    toggleCollapse() {
        this.nzCollapsed = !this.nzCollapsed;
        this.nzCollapsedChange.emit(this.nzCollapsed);
    }
    get isZeroTrigger() {
        return this.nzCollapsible && this.trigger && this.nzCollapsedWidth === 0 && ((this.nzBreakpoint && this.below) || !this.nzBreakpoint);
    }
    get isSiderTrigger() {
        return this.nzCollapsible && this.trigger && this.nzCollapsedWidth !== 0;
    }
    ngOnInit() {
        if (this.nzLayoutComponent) {
            this.nzLayoutComponent.initSider();
        }
    }
    ngAfterViewInit() {
        if (this.platform.isBrowser) {
            Promise.resolve().then(() => this.watchMatchMedia());
            this.nzDomEventService
                .registerResizeListener()
                .pipe(takeUntil(this.destroy$), finalize(() => this.nzDomEventService.unregisterResizeListener()))
                .subscribe(() => this.watchMatchMedia());
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        if (this.nzLayoutComponent) {
            this.nzLayoutComponent.destroySider();
        }
    }
}
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
                    '[class.ant-layout-sider-light]': `nzTheme === 'light'`,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2lkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9sYXlvdXQvIiwic291cmNlcyI6WyJuei1zaWRlci5jb21wb25lbnQudHMiLCJuei1zaWRlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osSUFBSSxFQUNKLEtBQUssRUFDTCxNQUFNLEVBR04sUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckQsT0FBTyxFQUFFLFlBQVksRUFBZ0IsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFL0YsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7Ozs7Ozs7OztJQ2hDMUQsK0JBQ0U7SUFEc0UsbU1BQTBCO0lBQ2hHLHdGQUErRDtJQUNqRSxpQkFBTzs7OztJQURRLGVBQWlEO0lBQWpELGtFQUFpRDs7Ozs7SUFFaEUsOEJBTUU7SUFIQSxpTUFBMEI7SUFHMUIsdUZBQTBDO0lBQzVDLGlCQUFNOzs7SUFISiw4Q0FBNEI7SUFFZixlQUE0QjtJQUE1QixtREFBNEI7OztJQUd6Qyx1QkFBaUY7OztJQUF0RSxnRUFBeUM7OztJQUNwRCx1QkFBZ0Y7OztJQUFyRSxnRUFBeUM7OztJ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IEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEhvc3QsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE1lZGlhTWF0Y2hlciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9sYXlvdXQnO1xyXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmluYWxpemUsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgTnpCcmVha1BvaW50LCBOekRvbUV2ZW50U2VydmljZSwgdG9Dc3NQaXhlbCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOekxheW91dENvbXBvbmVudCB9IGZyb20gJy4vbnotbGF5b3V0LmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LXNpZGVyJyxcclxuICBleHBvcnRBczogJ256U2lkZXInLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXNpZGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC1sYXlvdXQtc2lkZXItemVyby13aWR0aF0nOiAnbnpDb2xsYXBzZWQgJiYgbnpDb2xsYXBzZWRXaWR0aCA9PT0gMCcsXHJcbiAgICAnW2NsYXNzLmFudC1sYXlvdXQtc2lkZXItbGlnaHRdJzogYG56VGhlbWUgPT09ICdsaWdodCdgLFxyXG4gICAgJ1tjbGFzcy5hbnQtbGF5b3V0LXNpZGVyLWNvbGxhcHNlZF0nOiAnbnpDb2xsYXBzZWQnLFxyXG4gICAgJ1tzdHlsZS5mbGV4XSc6ICdmbGV4U2V0dGluZycsXHJcbiAgICAnW3N0eWxlLm1heC13aWR0aF0nOiAnd2lkdGhTZXR0aW5nJyxcclxuICAgICdbc3R5bGUubWluLXdpZHRoXSc6ICd3aWR0aFNldHRpbmcnLFxyXG4gICAgJ1tzdHlsZS53aWR0aF0nOiAnd2lkdGhTZXR0aW5nJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56U2lkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBiZWxvdyA9IGZhbHNlO1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xyXG4gIHByaXZhdGUgZGltZW5zaW9uTWFwID0ge1xyXG4gICAgeHM6ICc0ODBweCcsXHJcbiAgICBzbTogJzU3NnB4JyxcclxuICAgIG1kOiAnNzY4cHgnLFxyXG4gICAgbGc6ICc5OTJweCcsXHJcbiAgICB4bDogJzEyMDBweCcsXHJcbiAgICB4eGw6ICcxNjAwcHgnXHJcbiAgfTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q29sbGFwc2VkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBASW5wdXQoKSBueldpZHRoOiBzdHJpbmcgfCBudW1iZXIgPSAyMDA7XHJcbiAgQElucHV0KCkgbnpUaGVtZTogJ2xpZ2h0JyB8ICdkYXJrJyA9ICdkYXJrJztcclxuICBASW5wdXQoKSBuekNvbGxhcHNlZFdpZHRoID0gODA7XHJcbiAgQElucHV0KCkgbnpCcmVha3BvaW50OiBOekJyZWFrUG9pbnQ7XHJcbiAgQElucHV0KCkgbnpaZXJvVHJpZ2dlcjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56UmV2ZXJzZUFycm93ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q29sbGFwc2libGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDb2xsYXBzZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBuelRyaWdnZXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBWaWV3Q2hpbGQoJ2RlZmF1bHRUcmlnZ2VyJywgeyBzdGF0aWM6IHRydWUgfSkgZGVmYXVsdFRyaWdnZXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIGdldCB0cmlnZ2VyKCk6IFRlbXBsYXRlUmVmPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLm56VHJpZ2dlciAhPT0gdW5kZWZpbmVkID8gdGhpcy5uelRyaWdnZXIgOiB0aGlzLmRlZmF1bHRUcmlnZ2VyO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGZsZXhTZXR0aW5nKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYDAgMCAke3RoaXMud2lkdGhTZXR0aW5nfWA7XHJcbiAgfVxyXG5cclxuICBnZXQgd2lkdGhTZXR0aW5nKCk6IHN0cmluZyB7XHJcbiAgICBpZiAodGhpcy5uekNvbGxhcHNlZCkge1xyXG4gICAgICByZXR1cm4gYCR7dGhpcy5uekNvbGxhcHNlZFdpZHRofXB4YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0b0Nzc1BpeGVsKHRoaXMubnpXaWR0aCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB3YXRjaE1hdGNoTWVkaWEoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uekJyZWFrcG9pbnQpIHtcclxuICAgICAgY29uc3QgbWF0Y2hCZWxvdyA9IHRoaXMubWVkaWFNYXRjaGVyLm1hdGNoTWVkaWEoYChtYXgtd2lkdGg6ICR7dGhpcy5kaW1lbnNpb25NYXBbdGhpcy5uekJyZWFrcG9pbnRdfSlgKS5tYXRjaGVzO1xyXG4gICAgICB0aGlzLmJlbG93ID0gbWF0Y2hCZWxvdztcclxuICAgICAgdGhpcy5uekNvbGxhcHNlZCA9IG1hdGNoQmVsb3c7XHJcbiAgICAgIHRoaXMubnpDb2xsYXBzZWRDaGFuZ2UuZW1pdChtYXRjaEJlbG93KTtcclxuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2dnbGVDb2xsYXBzZSgpOiB2b2lkIHtcclxuICAgIHRoaXMubnpDb2xsYXBzZWQgPSAhdGhpcy5uekNvbGxhcHNlZDtcclxuICAgIHRoaXMubnpDb2xsYXBzZWRDaGFuZ2UuZW1pdCh0aGlzLm56Q29sbGFwc2VkKTtcclxuICB9XHJcblxyXG4gIGdldCBpc1plcm9UcmlnZ2VyKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubnpDb2xsYXBzaWJsZSAmJiB0aGlzLnRyaWdnZXIgJiYgdGhpcy5uekNvbGxhcHNlZFdpZHRoID09PSAwICYmICgodGhpcy5uekJyZWFrcG9pbnQgJiYgdGhpcy5iZWxvdykgfHwgIXRoaXMubnpCcmVha3BvaW50KTtcclxuICB9XHJcblxyXG4gIGdldCBpc1NpZGVyVHJpZ2dlcigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm56Q29sbGFwc2libGUgJiYgdGhpcy50cmlnZ2VyICYmIHRoaXMubnpDb2xsYXBzZWRXaWR0aCAhPT0gMDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQE9wdGlvbmFsKCkgQEhvc3QoKSBwcml2YXRlIG56TGF5b3V0Q29tcG9uZW50OiBOekxheW91dENvbXBvbmVudCxcclxuICAgIHByaXZhdGUgbWVkaWFNYXRjaGVyOiBNZWRpYU1hdGNoZXIsXHJcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxyXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIG56RG9tRXZlbnRTZXJ2aWNlOiBOekRvbUV2ZW50U2VydmljZSxcclxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmXHJcbiAgKSB7XHJcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtbGF5b3V0LXNpZGVyJyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56TGF5b3V0Q29tcG9uZW50KSB7XHJcbiAgICAgIHRoaXMubnpMYXlvdXRDb21wb25lbnQuaW5pdFNpZGVyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLndhdGNoTWF0Y2hNZWRpYSgpKTtcclxuICAgICAgdGhpcy5uekRvbUV2ZW50U2VydmljZVxyXG4gICAgICAgIC5yZWdpc3RlclJlc2l6ZUxpc3RlbmVyKClcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcclxuICAgICAgICAgIGZpbmFsaXplKCgpID0+IHRoaXMubnpEb21FdmVudFNlcnZpY2UudW5yZWdpc3RlclJlc2l6ZUxpc3RlbmVyKCkpXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy53YXRjaE1hdGNoTWVkaWEoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gICAgaWYgKHRoaXMubnpMYXlvdXRDb21wb25lbnQpIHtcclxuICAgICAgdGhpcy5uekxheW91dENvbXBvbmVudC5kZXN0cm95U2lkZXIoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImFudC1sYXlvdXQtc2lkZXItY2hpbGRyZW5cIj5cclxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvZGl2PlxyXG48c3BhbiBjbGFzcz1cImFudC1sYXlvdXQtc2lkZXItemVyby13aWR0aC10cmlnZ2VyXCIgKm5nSWY9XCJpc1plcm9UcmlnZ2VyXCIgKGNsaWNrKT1cInRvZ2dsZUNvbGxhcHNlKClcIj5cclxuICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwibnpaZXJvVHJpZ2dlciB8fCB6ZXJvVHJpZ2dlclwiPjwvbmctdGVtcGxhdGU+XHJcbjwvc3Bhbj5cclxuPGRpdlxyXG4gIGNsYXNzPVwiYW50LWxheW91dC1zaWRlci10cmlnZ2VyXCJcclxuICAqbmdJZj1cImlzU2lkZXJUcmlnZ2VyXCJcclxuICAoY2xpY2spPVwidG9nZ2xlQ29sbGFwc2UoKVwiXHJcbiAgW3N0eWxlLndpZHRoXT1cIndpZHRoU2V0dGluZ1wiXHJcbj5cclxuICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwidHJpZ2dlclwiPjwvbmctdGVtcGxhdGU+XHJcbjwvZGl2PlxyXG48bmctdGVtcGxhdGUgI2RlZmF1bHRUcmlnZ2VyPlxyXG4gIDxpIG56LWljb24gW256VHlwZV09XCJuekNvbGxhcHNlZCA/ICdyaWdodCcgOiAnbGVmdCdcIiAqbmdJZj1cIiFuelJldmVyc2VBcnJvd1wiPjwvaT5cclxuICA8aSBuei1pY29uIFtuelR5cGVdPVwibnpDb2xsYXBzZWQgPyAnbGVmdCcgOiAncmlnaHQnXCIgKm5nSWY9XCJuelJldmVyc2VBcnJvd1wiPjwvaT5cclxuPC9uZy10ZW1wbGF0ZT5cclxuPG5nLXRlbXBsYXRlICN6ZXJvVHJpZ2dlcj5cclxuICA8aSBuei1pY29uIG56VHlwZT1cImJhcnNcIj48L2k+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==
import { __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { InputBoolean, InputNumber, NzConfigService, WithConfig } from 'ng-zorro-antd/core';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
import * as i2 from "@angular/common";
function NzSpinComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 3);
    i0.ɵɵelement(1, "i", 4);
    i0.ɵɵelement(2, "i", 4);
    i0.ɵɵelement(3, "i", 4);
    i0.ɵɵelement(4, "i", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r281 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("ant-spin-dot-spin", ctx_r281.loading);
} }
function NzSpinComponent_div_2_ng_template_2_Template(rf, ctx) { }
function NzSpinComponent_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r285 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r285.nzTip);
} }
function NzSpinComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵtemplate(2, NzSpinComponent_div_2_ng_template_2_Template, 0, 0, "ng-template", 6);
    i0.ɵɵtemplate(3, NzSpinComponent_div_2_div_3_Template, 2, 1, "div", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r282 = i0.ɵɵnextContext();
    var _r280 = i0.ɵɵreference(1);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("ant-spin-spinning", ctx_r282.loading)("ant-spin-lg", ctx_r282.nzSize === "large")("ant-spin-sm", ctx_r282.nzSize === "small")("ant-spin-show-text", ctx_r282.nzTip);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r282.nzIndicator || _r280);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r282.nzTip);
} }
function NzSpinComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵprojection(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r283 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("ant-spin-blur", ctx_r283.loading);
} }
var _c0 = ["*"];
var NZ_CONFIG_COMPONENT_NAME = 'spin';
var NzSpinComponent = /** @class */ (function () {
    function NzSpinComponent(nzConfigService, cdr) {
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.nzSize = 'default';
        this.nzDelay = 0;
        this.nzSimple = false;
        this.nzSpinning = true;
        this.loading = true;
        this.destroy$ = new Subject();
        this.spinning$ = new BehaviorSubject(this.nzSpinning);
        this.loading$ = this.spinning$.pipe(debounceTime(this.nzDelay));
    }
    NzSpinComponent.prototype.subscribeLoading = function () {
        var _this = this;
        this.unsubscribeLoading();
        this.loading_ = this.loading$.subscribe(function (data) {
            _this.loading = data;
            _this.cdr.markForCheck();
        });
    };
    NzSpinComponent.prototype.unsubscribeLoading = function () {
        if (this.loading_) {
            this.loading_.unsubscribe();
            this.loading_ = null;
        }
    };
    NzSpinComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscribeLoading();
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe(function () { return _this.cdr.markForCheck(); });
    };
    NzSpinComponent.prototype.ngOnChanges = function (changes) {
        if (changes.nzSpinning) {
            if (changes.nzSpinning.isFirstChange()) {
                this.loading = this.nzSpinning;
            }
            this.spinning$.next(this.nzSpinning);
        }
        if (changes.nzDelay) {
            this.loading$ = this.spinning$.pipe(debounceTime(this.nzDelay));
            this.subscribeLoading();
        }
    };
    NzSpinComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
        this.unsubscribeLoading();
    };
    /** @nocollapse */ NzSpinComponent.ɵfac = function NzSpinComponent_Factory(t) { return new (t || NzSpinComponent)(i0.ɵɵdirectiveInject(i1.NzConfigService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ NzSpinComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzSpinComponent, selectors: [["nz-spin"]], hostBindings: function NzSpinComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            i0.ɵɵallocHostVars(1);
        } if (rf & 2) {
            i0.ɵɵclassProp("ant-spin-nested-loading", !ctx.nzSimple);
        } }, inputs: { nzIndicator: "nzIndicator", nzSize: "nzSize", nzTip: "nzTip", nzDelay: "nzDelay", nzSimple: "nzSimple", nzSpinning: "nzSpinning" }, exportAs: ["nzSpin"], features: [i0.ɵɵNgOnChangesFeature()], ngContentSelectors: _c0, decls: 4, vars: 2, consts: [["defaultIndicatorTemplate", ""], [4, "ngIf"], ["class", "ant-spin-container", 3, "ant-spin-blur", 4, "ngIf"], [1, "ant-spin-dot"], [1, "ant-spin-dot-item"], [1, "ant-spin"], [3, "ngTemplateOutlet"], ["class", "ant-spin-text", 4, "ngIf"], [1, "ant-spin-text"], [1, "ant-spin-container"]], template: function NzSpinComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, NzSpinComponent_ng_template_0_Template, 5, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(2, NzSpinComponent_div_2_Template, 4, 6, "div", 1);
            i0.ɵɵtemplate(3, NzSpinComponent_div_3_Template, 2, 1, "div", 2);
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.loading);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.nzSimple);
        } }, directives: [i2.NgIf, i2.NgTemplateOutlet], styles: ["\n      nz-spin {\n        display: block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", TemplateRef)
    ], NzSpinComponent.prototype, "nzIndicator", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], NzSpinComponent.prototype, "nzDelay", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzSpinComponent.prototype, "nzSimple", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzSpinComponent.prototype, "nzSpinning", void 0);
    return NzSpinComponent;
}());
export { NzSpinComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzSpinComponent, [{
        type: Component,
        args: [{
                selector: 'nz-spin',
                exportAs: 'nzSpin',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                templateUrl: './nz-spin.component.html',
                host: {
                    '[class.ant-spin-nested-loading]': '!nzSimple'
                },
                styles: [
                    "\n      nz-spin {\n        display: block;\n      }\n    "
                ]
            }]
    }], function () { return [{ type: i1.NzConfigService }, { type: i0.ChangeDetectorRef }]; }, { nzIndicator: [{
            type: Input
        }], nzSize: [{
            type: Input
        }], nzTip: [{
            type: Input
        }], nzDelay: [{
            type: Input
        }], nzSimple: [{
            type: Input
        }], nzSpinning: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3Bpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3NwaW4vIiwic291cmNlcyI6WyJuei1zcGluLmNvbXBvbmVudC50cyIsIm56LXNwaW4uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxLQUFLLEVBS0wsV0FBVyxFQUNYLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFjLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDMUUsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQWlCLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7OztJQ3RCekcsK0JBQ0U7SUFBQSx1QkFBaUM7SUFBQSx1QkFDaEM7SUFBQSx1QkFBaUM7SUFBQSx1QkFBaUM7SUFDckUsaUJBQU87OztJQUhvQixxREFBbUM7Ozs7SUFjNUQsOEJBQXlDO0lBQUEsWUFBVztJQUFBLGlCQUFNOzs7SUFBakIsZUFBVztJQUFYLG9DQUFXOzs7SUFUeEQsMkJBQ0U7SUFBQSw4QkFPRTtJQUFBLHNGQUEwRTtJQUMxRSxzRUFBeUM7SUFDM0MsaUJBQU07SUFDUixpQkFBTTs7OztJQVJGLGVBQW1DO0lBQW5DLHFEQUFtQyw0Q0FBQSw0Q0FBQSxzQ0FBQTtJQUt0QixlQUE0RDtJQUE1RCxnRUFBNEQ7SUFDOUMsZUFBYTtJQUFiLHFDQUFhOzs7SUFHNUMsOEJBQ0U7SUFBQSxrQkFBWTtJQUNkLGlCQUFNOzs7SUFGNEMsaURBQStCOzs7QURPakYsSUFBTSx3QkFBd0IsR0FBRyxNQUFNLENBQUM7QUFFeEM7SUE4Q0UseUJBQW1CLGVBQWdDLEVBQVUsR0FBc0I7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LEFBM0VELElBMkVDO1NBekRZLGVBQWU7a0RBQWYsZUFBZTtjQWxCM0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQixRQUFRLEVBQUUsUUFBUTtnQkFDbEIsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxXQUFXLEVBQUUsMEJBQTBCO2dCQUN2QyxJQUFJLEVBQUU7b0JBQ0osaUNBQWlDLEVBQUUsV0FBVztpQkFDL0M7Z0JBQ0QsTUFBTSxFQUFFO29CQUNOLDJEQUlDO2lCQUNGO2FBQ0Y7O2tCQUVFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyLCBOekNvbmZpZ1NlcnZpY2UsIE56U2l6ZUxEU1R5cGUsIFdpdGhDb25maWcgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ3NwaW4nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei1zcGluJyxcclxuICBleHBvcnRBczogJ256U3BpbicsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotc3Bpbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtc3Bpbi1uZXN0ZWQtbG9hZGluZ10nOiAnIW56U2ltcGxlJ1xyXG4gIH0sXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIG56LXNwaW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpTcGluQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKSBuekluZGljYXRvcjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpTaXplOiBOelNpemVMRFNUeXBlID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIG56VGlwOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbnpEZWxheSA9IDA7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2ltcGxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U3Bpbm5pbmcgPSB0cnVlO1xyXG4gIGxvYWRpbmcgPSB0cnVlO1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIHByaXZhdGUgc3Bpbm5pbmckID0gbmV3IEJlaGF2aW9yU3ViamVjdCh0aGlzLm56U3Bpbm5pbmcpO1xyXG4gIHByaXZhdGUgbG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLnNwaW5uaW5nJC5waXBlKGRlYm91bmNlVGltZSh0aGlzLm56RGVsYXkpKTtcclxuICBwcml2YXRlIGxvYWRpbmdfOiBTdWJzY3JpcHRpb24gfCBudWxsO1xyXG5cclxuICBzdWJzY3JpYmVMb2FkaW5nKCk6IHZvaWQge1xyXG4gICAgdGhpcy51bnN1YnNjcmliZUxvYWRpbmcoKTtcclxuICAgIHRoaXMubG9hZGluZ18gPSB0aGlzLmxvYWRpbmckLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgdGhpcy5sb2FkaW5nID0gZGF0YTtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHVuc3Vic2NyaWJlTG9hZGluZygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmxvYWRpbmdfKSB7XHJcbiAgICAgIHRoaXMubG9hZGluZ18udW5zdWJzY3JpYmUoKTtcclxuICAgICAgdGhpcy5sb2FkaW5nXyA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnN1YnNjcmliZUxvYWRpbmcoKTtcclxuXHJcbiAgICB0aGlzLm56Q29uZmlnU2VydmljZVxyXG4gICAgICAuZ2V0Q29uZmlnQ2hhbmdlRXZlbnRGb3JDb21wb25lbnQoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jZHIubWFya0ZvckNoZWNrKCkpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMubnpTcGlubmluZykge1xyXG4gICAgICBpZiAoY2hhbmdlcy5uelNwaW5uaW5nLmlzRmlyc3RDaGFuZ2UoKSkge1xyXG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRoaXMubnpTcGlubmluZztcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNwaW5uaW5nJC5uZXh0KHRoaXMubnpTcGlubmluZyk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy5uekRlbGF5KSB7XHJcbiAgICAgIHRoaXMubG9hZGluZyQgPSB0aGlzLnNwaW5uaW5nJC5waXBlKGRlYm91bmNlVGltZSh0aGlzLm56RGVsYXkpKTtcclxuICAgICAgdGhpcy5zdWJzY3JpYmVMb2FkaW5nKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gICAgdGhpcy51bnN1YnNjcmliZUxvYWRpbmcoKTtcclxuICB9XHJcbn1cclxuIiwiPG5nLXRlbXBsYXRlICNkZWZhdWx0SW5kaWNhdG9yVGVtcGxhdGU+XHJcbiAgPHNwYW4gY2xhc3M9XCJhbnQtc3Bpbi1kb3RcIiBbY2xhc3MuYW50LXNwaW4tZG90LXNwaW5dPVwibG9hZGluZ1wiPlxyXG4gICAgPGkgY2xhc3M9XCJhbnQtc3Bpbi1kb3QtaXRlbVwiPjwvaT48aSBjbGFzcz1cImFudC1zcGluLWRvdC1pdGVtXCI+PC9pXHJcbiAgICA+PGkgY2xhc3M9XCJhbnQtc3Bpbi1kb3QtaXRlbVwiPjwvaT48aSBjbGFzcz1cImFudC1zcGluLWRvdC1pdGVtXCI+PC9pPlxyXG4gIDwvc3Bhbj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuPGRpdiAqbmdJZj1cImxvYWRpbmdcIj5cclxuICA8ZGl2XHJcbiAgICBjbGFzcz1cImFudC1zcGluXCJcclxuICAgIFtjbGFzcy5hbnQtc3Bpbi1zcGlubmluZ109XCJsb2FkaW5nXCJcclxuICAgIFtjbGFzcy5hbnQtc3Bpbi1sZ109XCJuelNpemUgPT09ICdsYXJnZSdcIlxyXG4gICAgW2NsYXNzLmFudC1zcGluLXNtXT1cIm56U2l6ZSA9PT0gJ3NtYWxsJ1wiXHJcbiAgICBbY2xhc3MuYW50LXNwaW4tc2hvdy10ZXh0XT1cIm56VGlwXCJcclxuICA+XHJcbiAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwibnpJbmRpY2F0b3IgfHwgZGVmYXVsdEluZGljYXRvclRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJhbnQtc3Bpbi10ZXh0XCIgKm5nSWY9XCJuelRpcFwiPnt7IG56VGlwIH19PC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG48ZGl2ICpuZ0lmPVwiIW56U2ltcGxlXCIgY2xhc3M9XCJhbnQtc3Bpbi1jb250YWluZXJcIiBbY2xhc3MuYW50LXNwaW4tYmx1cl09XCJsb2FkaW5nXCI+XHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L2Rpdj5cclxuIl19
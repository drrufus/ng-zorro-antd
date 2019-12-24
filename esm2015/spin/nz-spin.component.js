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
    const ctx_r275 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("ant-spin-dot-spin", ctx_r275.loading);
} }
function NzSpinComponent_div_2_ng_template_2_Template(rf, ctx) { }
function NzSpinComponent_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r279 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r279.nzTip);
} }
function NzSpinComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵtemplate(2, NzSpinComponent_div_2_ng_template_2_Template, 0, 0, "ng-template", 6);
    i0.ɵɵtemplate(3, NzSpinComponent_div_2_div_3_Template, 2, 1, "div", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r276 = i0.ɵɵnextContext();
    const _r274 = i0.ɵɵreference(1);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("ant-spin-spinning", ctx_r276.loading)("ant-spin-lg", ctx_r276.nzSize === "large")("ant-spin-sm", ctx_r276.nzSize === "small")("ant-spin-show-text", ctx_r276.nzTip);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r276.nzIndicator || _r274);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r276.nzTip);
} }
function NzSpinComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵprojection(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r277 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("ant-spin-blur", ctx_r277.loading);
} }
const _c0 = ["*"];
const NZ_CONFIG_COMPONENT_NAME = 'spin';
export class NzSpinComponent {
    constructor(nzConfigService, cdr) {
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
    subscribeLoading() {
        this.unsubscribeLoading();
        this.loading_ = this.loading$.subscribe(data => {
            this.loading = data;
            this.cdr.markForCheck();
        });
    }
    unsubscribeLoading() {
        if (this.loading_) {
            this.loading_.unsubscribe();
            this.loading_ = null;
        }
    }
    ngOnInit() {
        this.subscribeLoading();
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => this.cdr.markForCheck());
    }
    ngOnChanges(changes) {
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
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.unsubscribeLoading();
    }
}
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
                    `
      nz-spin {
        display: block;
      }
    `
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3Bpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3NwaW4vIiwic291cmNlcyI6WyJuei1zcGluLmNvbXBvbmVudC50cyIsIm56LXNwaW4uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxLQUFLLEVBS0wsV0FBVyxFQUNYLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFjLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDMUUsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQWlCLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7OztJQ3RCekcsK0JBQ0U7SUFBQSx1QkFBaUM7SUFBQSx1QkFDaEM7SUFBQSx1QkFBaUM7SUFBQSx1QkFBaUM7SUFDckUsaUJBQU87OztJQUhvQixxREFBbUM7Ozs7SUFjNUQsOEJBQXlDO0lBQUEsWUFBVztJQUFBLGlCQUFNOzs7SUFBakIsZUFBVztJQUFYLG9DQUFXOzs7SUFUeEQsMkJBQ0U7SUFBQSw4QkFPRTtJQUFBLHNGQUEwRTtJQUMxRSxzRUFBeUM7SUFDM0MsaUJBQU07SUFDUixpQkFBTTs7OztJQVJGLGVBQW1DO0lBQW5DLHFEQUFtQyw0Q0FBQSw0Q0FBQSxzQ0FBQTtJQUt0QixlQUE0RDtJQUE1RCxnRUFBNEQ7SUFDOUMsZUFBYTtJQUFiLHFDQUFhOzs7SUFHNUMsOEJBQ0U7SUFBQSxrQkFBWTtJQUNkLGlCQUFNOzs7SUFGNEMsaURBQStCOzs7QURPakYsTUFBTSx3QkFBd0IsR0FBRyxNQUFNLENBQUM7QUFvQnhDLE1BQU0sT0FBTyxlQUFlO0lBNEIxQixZQUFtQixl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O2dCQUNuQixRQUFRLEVBQUUsUUFBUTtnQkFDbEIsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxXQUFXLEVBQUUsMEJBQTBCO2dCQUN2QyxJQUFJLEVBQUU7b0JBQ0osaUNBQWlDLEVBQUUsV0FBVztpQkFDL0M7Z0JBQ0QsTUFBTSxFQUFFO29CQUNOOzs7O0tBSUM7aUJBQ0Y7YUFDRjs7a0JBRUUsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIsIE56Q29uZmlnU2VydmljZSwgTnpTaXplTERTVHlwZSwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAnc3Bpbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LXNwaW4nLFxyXG4gIGV4cG9ydEFzOiAnbnpTcGluJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1zcGluLmNvbXBvbmVudC5odG1sJyxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC1zcGluLW5lc3RlZC1sb2FkaW5nXSc6ICchbnpTaW1wbGUnXHJcbiAgfSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgbnotc3BpbiB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelNwaW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0IHtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpIG56SW5kaWNhdG9yOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuelNpemU6IE56U2l6ZUxEU1R5cGUgPSAnZGVmYXVsdCc7XHJcbiAgQElucHV0KCkgbnpUaXA6IHN0cmluZztcclxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBuekRlbGF5ID0gMDtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaW1wbGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTcGlubmluZyA9IHRydWU7XHJcbiAgbG9hZGluZyA9IHRydWU7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgcHJpdmF0ZSBzcGlubmluZyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRoaXMubnpTcGlubmluZyk7XHJcbiAgcHJpdmF0ZSBsb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMuc3Bpbm5pbmckLnBpcGUoZGVib3VuY2VUaW1lKHRoaXMubnpEZWxheSkpO1xyXG4gIHByaXZhdGUgbG9hZGluZ186IFN1YnNjcmlwdGlvbiB8IG51bGw7XHJcblxyXG4gIHN1YnNjcmliZUxvYWRpbmcoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVuc3Vic2NyaWJlTG9hZGluZygpO1xyXG4gICAgdGhpcy5sb2FkaW5nXyA9IHRoaXMubG9hZGluZyQuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICB0aGlzLmxvYWRpbmcgPSBkYXRhO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdW5zdWJzY3JpYmVMb2FkaW5nKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubG9hZGluZ18pIHtcclxuICAgICAgdGhpcy5sb2FkaW5nXy51bnN1YnNjcmliZSgpO1xyXG4gICAgICB0aGlzLmxvYWRpbmdfID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc3Vic2NyaWJlTG9hZGluZygpO1xyXG5cclxuICAgIHRoaXMubnpDb25maWdTZXJ2aWNlXHJcbiAgICAgIC5nZXRDb25maWdDaGFuZ2VFdmVudEZvckNvbXBvbmVudChOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5uelNwaW5uaW5nKSB7XHJcbiAgICAgIGlmIChjaGFuZ2VzLm56U3Bpbm5pbmcuaXNGaXJzdENoYW5nZSgpKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdGhpcy5uelNwaW5uaW5nO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc3Bpbm5pbmckLm5leHQodGhpcy5uelNwaW5uaW5nKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLm56RGVsYXkpIHtcclxuICAgICAgdGhpcy5sb2FkaW5nJCA9IHRoaXMuc3Bpbm5pbmckLnBpcGUoZGVib3VuY2VUaW1lKHRoaXMubnpEZWxheSkpO1xyXG4gICAgICB0aGlzLnN1YnNjcmliZUxvYWRpbmcoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgICB0aGlzLnVuc3Vic2NyaWJlTG9hZGluZygpO1xyXG4gIH1cclxufVxyXG4iLCI8bmctdGVtcGxhdGUgI2RlZmF1bHRJbmRpY2F0b3JUZW1wbGF0ZT5cclxuICA8c3BhbiBjbGFzcz1cImFudC1zcGluLWRvdFwiIFtjbGFzcy5hbnQtc3Bpbi1kb3Qtc3Bpbl09XCJsb2FkaW5nXCI+XHJcbiAgICA8aSBjbGFzcz1cImFudC1zcGluLWRvdC1pdGVtXCI+PC9pPjxpIGNsYXNzPVwiYW50LXNwaW4tZG90LWl0ZW1cIj48L2lcclxuICAgID48aSBjbGFzcz1cImFudC1zcGluLWRvdC1pdGVtXCI+PC9pPjxpIGNsYXNzPVwiYW50LXNwaW4tZG90LWl0ZW1cIj48L2k+XHJcbiAgPC9zcGFuPlxyXG48L25nLXRlbXBsYXRlPlxyXG48ZGl2ICpuZ0lmPVwibG9hZGluZ1wiPlxyXG4gIDxkaXZcclxuICAgIGNsYXNzPVwiYW50LXNwaW5cIlxyXG4gICAgW2NsYXNzLmFudC1zcGluLXNwaW5uaW5nXT1cImxvYWRpbmdcIlxyXG4gICAgW2NsYXNzLmFudC1zcGluLWxnXT1cIm56U2l6ZSA9PT0gJ2xhcmdlJ1wiXHJcbiAgICBbY2xhc3MuYW50LXNwaW4tc21dPVwibnpTaXplID09PSAnc21hbGwnXCJcclxuICAgIFtjbGFzcy5hbnQtc3Bpbi1zaG93LXRleHRdPVwibnpUaXBcIlxyXG4gID5cclxuICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJuekluZGljYXRvciB8fCBkZWZhdWx0SW5kaWNhdG9yVGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cImFudC1zcGluLXRleHRcIiAqbmdJZj1cIm56VGlwXCI+e3sgbnpUaXAgfX08L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbjxkaXYgKm5nSWY9XCIhbnpTaW1wbGVcIiBjbGFzcz1cImFudC1zcGluLWNvbnRhaW5lclwiIFtjbGFzcy5hbnQtc3Bpbi1ibHVyXT1cImxvYWRpbmdcIj5cclxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvZGl2PlxyXG4iXX0=
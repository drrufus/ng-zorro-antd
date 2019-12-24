/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
export class OkButtonComponent {
    constructor() {
        this.okDisabled = false;
        this.clickOk = new EventEmitter();
        this.prefixCls = 'ant-calendar';
    }
}
/** @nocollapse */ OkButtonComponent.ɵfac = function OkButtonComponent_Factory(t) { return new (t || OkButtonComponent)(); };
/** @nocollapse */ OkButtonComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OkButtonComponent, selectors: [["ok-button"]], inputs: { locale: "locale", okDisabled: "okDisabled" }, outputs: { clickOk: "clickOk" }, exportAs: ["okButton"], decls: 2, vars: 5, consts: [["role", "button", 3, "click"]], template: function OkButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "a", 0);
        i0.ɵɵlistener("click", function OkButtonComponent_Template_a_click_0_listener($event) { return ctx.okDisabled ? null : ctx.clickOk.emit(); });
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMapInterpolate2("", ctx.prefixCls, "-ok-btn ", ctx.okDisabled ? ctx.prefixCls + "-ok-btn-disabled" : "", "");
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.locale.ok, "\n");
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OkButtonComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'ok-button',
                exportAs: 'okButton',
                templateUrl: 'ok-button.component.html'
            }]
    }], null, { locale: [{
            type: Input
        }], okDisabled: [{
            type: Input
        }], clickOk: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2stYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvY2FsZW5kYXIvb2stYnV0dG9uLmNvbXBvbmVudC50cyIsImxpYi9jYWxlbmRhci9vay1idXR0b24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFZbkgsTUFBTSxPQUFPLGlCQUFpQjtJQVI5QjtRQVVXLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFDbEIsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFFdEQsY0FBUyxHQUFXLGNBQWMsQ0FBQztLQUNwQzs7a0ZBTlksaUJBQWlCO3NEQUFqQixpQkFBaUI7UUNwQjlCLDRCQUtFO1FBRkEsZ0hBQXNCLElBQUssR0FBRSxrQkFBYyxJQUFDO1FBRTVDLFlBQ0Y7UUFBQSxpQkFBSTs7UUFMRixzSEFBcUY7UUFJckYsZUFDRjtRQURFLCtDQUNGOztrRERjYSxpQkFBaUI7Y0FSN0IsU0FBUztlQUFDO2dCQUNULGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsOENBQThDO2dCQUM5QyxRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFdBQVcsRUFBRSwwQkFBMEI7YUFDeEM7O2tCQUVFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnb2stYnV0dG9uJyxcclxuICBleHBvcnRBczogJ29rQnV0dG9uJyxcclxuICB0ZW1wbGF0ZVVybDogJ29rLWJ1dHRvbi5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE9rQnV0dG9uQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBsb2NhbGU6IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlO1xyXG4gIEBJbnB1dCgpIG9rRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2xpY2tPayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW50LWNhbGVuZGFyJztcclxufVxyXG4iLCI8YVxyXG4gIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LW9rLWJ0biB7eyBva0Rpc2FibGVkID8gcHJlZml4Q2xzICsgJy1vay1idG4tZGlzYWJsZWQnIDogJycgfX1cIlxyXG4gIHJvbGU9XCJidXR0b25cIlxyXG4gIChjbGljayk9XCJva0Rpc2FibGVkID8gbnVsbCA6IGNsaWNrT2suZW1pdCgpXCJcclxuPlxyXG4gIHt7IGxvY2FsZS5vayB9fVxyXG48L2E+XHJcbiJdfQ==
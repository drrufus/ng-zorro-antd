/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ElementRef, Host, Input, Optional, Renderer2, ViewEncapsulation } from '@angular/core';
import { FormControl, FormControlDirective, FormControlName, NgControl, NgModel } from '@angular/forms';
import { Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { helpMotion, NzUpdateHostClassService, toBoolean } from 'ng-zorro-antd/core';
import { NzColDirective, NzRowDirective } from 'ng-zorro-antd/grid';
import { NzFormItemComponent } from './nz-form-item.component';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
import * as i2 from "./nz-form-item.component";
import * as i3 from "ng-zorro-antd/grid";
import * as i4 from "@angular/common";
import * as i5 from "ng-zorro-antd/icon";
function NzFormControlComponent_i_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 7);
} if (rf & 2) {
    const ctx_r446 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nzType", ctx_r446.iconType);
} }
function NzFormControlComponent_div_5_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r455 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r455.nzSuccessTip);
} }
const _c0 = function (a0) { return { $implicit: a0 }; };
function NzFormControlComponent_div_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzFormControlComponent_div_5_ng_container_2_ng_container_1_Template, 2, 1, "ng-container", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r451 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r451.nzSuccessTip)("nzStringTemplateOutletContext", i0.ɵɵpureFunction1(2, _c0, ctx_r451.validateControl));
} }
function NzFormControlComponent_div_5_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r456 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r456.nzWarningTip);
} }
function NzFormControlComponent_div_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzFormControlComponent_div_5_ng_container_3_ng_container_1_Template, 2, 1, "ng-container", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r452 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r452.nzWarningTip)("nzStringTemplateOutletContext", i0.ɵɵpureFunction1(2, _c0, ctx_r452.validateControl));
} }
function NzFormControlComponent_div_5_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r457 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r457.nzErrorTip);
} }
function NzFormControlComponent_div_5_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzFormControlComponent_div_5_ng_container_4_ng_container_1_Template, 2, 1, "ng-container", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r453 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r453.nzErrorTip)("nzStringTemplateOutletContext", i0.ɵɵpureFunction1(2, _c0, ctx_r453.validateControl));
} }
function NzFormControlComponent_div_5_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r458 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r458.nzValidatingTip);
} }
function NzFormControlComponent_div_5_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzFormControlComponent_div_5_ng_container_5_ng_container_1_Template, 2, 1, "ng-container", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r454 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r454.nzValidatingTip)("nzStringTemplateOutletContext", i0.ɵɵpureFunction1(2, _c0, ctx_r454.validateControl));
} }
function NzFormControlComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, NzFormControlComponent_div_5_ng_container_2_Template, 2, 4, "ng-container", 5);
    i0.ɵɵtemplate(3, NzFormControlComponent_div_5_ng_container_3_Template, 2, 4, "ng-container", 5);
    i0.ɵɵtemplate(4, NzFormControlComponent_div_5_ng_container_4_Template, 2, 4, "ng-container", 5);
    i0.ɵɵtemplate(5, NzFormControlComponent_div_5_ng_container_5_Template, 2, 4, "ng-container", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r447 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("@helpMotion", undefined);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r447.showSuccessTip);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r447.showWarningTip);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r447.showErrorTip);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r447.showValidatingTip);
} }
function NzFormControlComponent_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 1, ["*ngIf", "!hasTips"]);
} }
function NzFormControlComponent_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 2, ["*ngIf", "!nzExtra"]);
} }
function NzFormControlComponent_div_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r459 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r459.nzExtra);
} }
function NzFormControlComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtemplate(1, NzFormControlComponent_div_8_ng_container_1_Template, 2, 1, "ng-container", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r450 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r450.nzExtra);
} }
const _c1 = ["*", [["nz-form-explain"]], [["nz-form-extra"]]];
const _c2 = ["*", "nz-form-explain", "nz-form-extra"];
export class NzFormControlComponent extends NzColDirective {
    constructor(nzUpdateHostClassService, elementRef, nzFormItemComponent, nzRowDirective, cdr, renderer) {
        super(nzUpdateHostClassService, elementRef, nzFormItemComponent || nzRowDirective, renderer);
        this.nzFormItemComponent = nzFormItemComponent;
        this.cdr = cdr;
        this._hasFeedback = false;
        this.validateChanges = Subscription.EMPTY;
        this.status = null;
        this.controlClassMap = {};
        renderer.addClass(elementRef.nativeElement, 'ant-form-item-control-wrapper');
    }
    set nzHasFeedback(value) {
        this._hasFeedback = toBoolean(value);
        this.setControlClassMap();
    }
    get nzHasFeedback() {
        return this._hasFeedback;
    }
    set nzValidateStatus(value) {
        if (value instanceof FormControl || value instanceof NgModel) {
            this.validateControl = value;
            this.validateString = null;
            this.watchControl();
        }
        else if (value instanceof FormControlName) {
            this.validateControl = value.control;
            this.validateString = null;
            this.watchControl();
        }
        else {
            this.validateString = value;
            this.validateControl = null;
            this.setControlClassMap();
        }
    }
    removeSubscribe() {
        this.validateChanges.unsubscribe();
    }
    watchControl() {
        this.removeSubscribe();
        /** miss detect https://github.com/angular/angular/issues/10887 **/
        if (this.validateControl && this.validateControl.statusChanges) {
            this.validateChanges = this.validateControl.statusChanges.pipe(startWith(null)).subscribe(() => {
                this.setControlClassMap();
                this.cdr.markForCheck();
            });
        }
    }
    validateControlStatus(status) {
        return (!!this.validateControl &&
            (this.validateControl.dirty || this.validateControl.touched) &&
            this.validateControl.status === status);
    }
    setControlClassMap() {
        if (this.validateString === 'warning') {
            this.status = 'warning';
            this.iconType = 'exclamation-circle-fill';
        }
        else if (this.validateString === 'validating' || this.validateString === 'pending' || this.validateControlStatus('PENDING')) {
            this.status = 'validating';
            this.iconType = 'loading';
        }
        else if (this.validateString === 'error' || this.validateControlStatus('INVALID')) {
            this.status = 'error';
            this.iconType = 'close-circle-fill';
        }
        else if (this.validateString === 'success' || this.validateControlStatus('VALID')) {
            this.status = 'success';
            this.iconType = 'check-circle-fill';
        }
        else {
            this.status = null;
            this.iconType = '';
        }
        if (this.hasTips) {
            this.nzFormItemComponent.setWithHelpViaTips(this.showErrorTip);
        }
        this.controlClassMap = {
            [`has-warning`]: this.status === 'warning',
            [`is-validating`]: this.status === 'validating',
            [`has-error`]: this.status === 'error',
            [`has-success`]: this.status === 'success',
            [`has-feedback`]: this.nzHasFeedback && this.status
        };
    }
    get hasTips() {
        return !!(this.nzSuccessTip || this.nzWarningTip || this.nzErrorTip || this.nzValidatingTip);
    }
    get showSuccessTip() {
        return this.status === 'success' && !!this.nzSuccessTip;
    }
    get showWarningTip() {
        return this.status === 'warning' && !!this.nzWarningTip;
    }
    get showErrorTip() {
        return this.status === 'error' && !!this.nzErrorTip;
    }
    get showValidatingTip() {
        return this.status === 'validating' && !!this.nzValidatingTip;
    }
    get showInnerTip() {
        return this.showSuccessTip || this.showWarningTip || this.showErrorTip || this.showValidatingTip;
    }
    ngOnInit() {
        super.ngOnInit();
        this.setControlClassMap();
    }
    ngOnDestroy() {
        this.removeSubscribe();
        super.ngOnDestroy();
    }
    ngAfterContentInit() {
        if (!this.validateControl && !this.validateString) {
            if (this.defaultValidateControl instanceof FormControlDirective) {
                this.nzValidateStatus = this.defaultValidateControl.control;
            }
            else {
                this.nzValidateStatus = this.defaultValidateControl;
            }
        }
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
    }
}
/** @nocollapse */ NzFormControlComponent.ɵfac = function NzFormControlComponent_Factory(t) { return new (t || NzFormControlComponent)(i0.ɵɵdirectiveInject(i1.NzUpdateHostClassService), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i2.NzFormItemComponent, 9), i0.ɵɵdirectiveInject(i3.NzRowDirective, 9), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
/** @nocollapse */ NzFormControlComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzFormControlComponent, selectors: [["nz-form-control"]], contentQueries: function NzFormControlComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, NgControl, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.defaultValidateControl = _t.first);
    } }, inputs: { nzSuccessTip: "nzSuccessTip", nzWarningTip: "nzWarningTip", nzErrorTip: "nzErrorTip", nzValidatingTip: "nzValidatingTip", nzExtra: "nzExtra", nzHasFeedback: "nzHasFeedback", nzValidateStatus: "nzValidateStatus" }, exportAs: ["nzFormControl"], features: [i0.ɵɵProvidersFeature([NzUpdateHostClassService]), i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c2, decls: 9, vars: 6, consts: [[1, "ant-form-item-control", 3, "ngClass"], [1, "ant-form-item-children"], [1, "ant-form-item-children-icon"], ["nz-icon", "", 3, "nzType", 4, "ngIf"], ["class", "ant-form-explain", 4, "ngIf"], [4, "ngIf"], ["class", "ant-form-extra", 4, "ngIf"], ["nz-icon", "", 3, "nzType"], [1, "ant-form-explain"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], [1, "ant-form-extra"], [4, "nzStringTemplateOutlet"]], template: function NzFormControlComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c1);
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "span", 1);
        i0.ɵɵprojection(2);
        i0.ɵɵelementStart(3, "span", 2);
        i0.ɵɵtemplate(4, NzFormControlComponent_i_4_Template, 1, 1, "i", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(5, NzFormControlComponent_div_5_Template, 6, 5, "div", 4);
        i0.ɵɵtemplate(6, NzFormControlComponent_6_Template, 1, 0, undefined, 5);
        i0.ɵɵtemplate(7, NzFormControlComponent_7_Template, 1, 0, undefined, 5);
        i0.ɵɵtemplate(8, NzFormControlComponent_div_8_Template, 2, 1, "div", 6);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.controlClassMap);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", ctx.nzHasFeedback && ctx.iconType);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showSuccessTip || ctx.showWarningTip || ctx.showErrorTip || ctx.showValidatingTip);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.hasTips);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.nzExtra);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.nzExtra);
    } }, directives: [i4.NgClass, i4.NgIf, i5.NzIconDirective, i1.NzStringTemplateOutletDirective], styles: ["\n      nz-form-control {\n        display: block;\n      }\n      form .has-feedback .ant-input-suffix i {\n        margin-right: 18px;\n      }\n    "], encapsulation: 2, data: { animation: [helpMotion] }, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzFormControlComponent, [{
        type: Component,
        args: [{
                selector: 'nz-form-control',
                exportAs: 'nzFormControl',
                preserveWhitespaces: false,
                animations: [helpMotion],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [NzUpdateHostClassService],
                templateUrl: './nz-form-control.component.html',
                styles: [
                    `
      nz-form-control {
        display: block;
      }
      form .has-feedback .ant-input-suffix i {
        margin-right: 18px;
      }
    `
                ]
            }]
    }], function () { return [{ type: i1.NzUpdateHostClassService }, { type: i0.ElementRef }, { type: i2.NzFormItemComponent, decorators: [{
                type: Optional
            }, {
                type: Host
            }] }, { type: i3.NzRowDirective, decorators: [{
                type: Optional
            }, {
                type: Host
            }] }, { type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }]; }, { defaultValidateControl: [{
            type: ContentChild,
            args: [NgControl, { static: false }]
        }], nzSuccessTip: [{
            type: Input
        }], nzWarningTip: [{
            type: Input
        }], nzErrorTip: [{
            type: Input
        }], nzValidatingTip: [{
            type: Input
        }], nzExtra: [{
            type: Input
        }], nzHasFeedback: [{
            type: Input
        }], nzValidateStatus: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZm9ybS1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZm9ybS8iLCJzb3VyY2VzIjpbIm56LWZvcm0tY29udHJvbC5jb21wb25lbnQudHMiLCJuei1mb3JtLWNvbnRyb2wuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUdMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsSUFBSSxFQUNKLEtBQUssRUFHTCxRQUFRLEVBQ1IsU0FBUyxFQUVULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLG9CQUFvQixFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLFVBQVUsRUFBZSx3QkFBd0IsRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRyxPQUFPLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7OztJQzNCekQsdUJBQXFFOzs7SUFBeEIsMENBQW1COzs7SUFTOUQsNkJBRUc7SUFBQSxZQUFrQjtJQUFBLDBCQUNwQjs7O0lBREUsZUFBa0I7SUFBbEIsMkNBQWtCOzs7O0lBSHZCLDZCQUNFO0lBQUEsOEdBRUc7SUFFTCwwQkFBZTs7O0lBSFgsZUFBK0U7SUFBL0UsOERBQStFLHVGQUFBOzs7SUFLakYsNkJBRUc7SUFBQSxZQUFrQjtJQUFBLDBCQUNwQjs7O0lBREUsZUFBa0I7SUFBbEIs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QUFFLEtBQUssRUFBRTs7a0JBQ3pDLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQVVMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGQsXHJcbiAgRWxlbWVudFJlZixcclxuICBIb3N0LFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtQ29udHJvbERpcmVjdGl2ZSwgRm9ybUNvbnRyb2xOYW1lLCBOZ0NvbnRyb2wsIE5nTW9kZWwgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBzdGFydFdpdGggfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBoZWxwTW90aW9uLCBOZ0NsYXNzVHlwZSwgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLCB0b0Jvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOekNvbERpcmVjdGl2ZSwgTnpSb3dEaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2dyaWQnO1xyXG5pbXBvcnQgeyBOekZvcm1JdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9uei1mb3JtLWl0ZW0uY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCB0eXBlIE56Rm9ybUNvbnRyb2xTdGF0dXNUeXBlID0gJ3dhcm5pbmcnIHwgJ3ZhbGlkYXRpbmcnIHwgJ2Vycm9yJyB8ICdzdWNjZXNzJyB8IG51bGw7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LWZvcm0tY29udHJvbCcsXHJcbiAgZXhwb3J0QXM6ICduekZvcm1Db250cm9sJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBhbmltYXRpb25zOiBbaGVscE1vdGlvbl0sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcm92aWRlcnM6IFtOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VdLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1mb3JtLWNvbnRyb2wuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICBuei1mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICAgIGZvcm0gLmhhcy1mZWVkYmFjayAuYW50LWlucHV0LXN1ZmZpeCBpIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE4cHg7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekZvcm1Db250cm9sQ29tcG9uZW50IGV4dGVuZHMgTnpDb2xEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuICBwcml2YXRlIF9oYXNGZWVkYmFjayA9IGZhbHNlO1xyXG4gIHByaXZhdGUgdmFsaWRhdGVDaGFuZ2VzOiBTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XHJcbiAgcHJpdmF0ZSB2YWxpZGF0ZVN0cmluZzogc3RyaW5nIHwgbnVsbDtcclxuICB2YWxpZGF0ZUNvbnRyb2w6IEZvcm1Db250cm9sIHwgTmdNb2RlbCB8IG51bGw7XHJcbiAgc3RhdHVzOiBOekZvcm1Db250cm9sU3RhdHVzVHlwZSA9IG51bGw7XHJcbiAgY29udHJvbENsYXNzTWFwOiBOZ0NsYXNzVHlwZSA9IHt9O1xyXG4gIGljb25UeXBlOiBzdHJpbmc7XHJcbiAgQENvbnRlbnRDaGlsZChOZ0NvbnRyb2wsIHsgc3RhdGljOiBmYWxzZSB9KSBkZWZhdWx0VmFsaWRhdGVDb250cm9sOiBGb3JtQ29udHJvbE5hbWUgfCBGb3JtQ29udHJvbERpcmVjdGl2ZTtcclxuICBASW5wdXQoKSBuelN1Y2Nlc3NUaXA6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBGb3JtQ29udHJvbCB8IE5nTW9kZWwgfT47XHJcbiAgQElucHV0KCkgbnpXYXJuaW5nVGlwOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogRm9ybUNvbnRyb2wgfCBOZ01vZGVsIH0+O1xyXG4gIEBJbnB1dCgpIG56RXJyb3JUaXA6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBGb3JtQ29udHJvbCB8IE5nTW9kZWwgfT47XHJcbiAgQElucHV0KCkgbnpWYWxpZGF0aW5nVGlwOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogRm9ybUNvbnRyb2wgfCBOZ01vZGVsIH0+O1xyXG4gIEBJbnB1dCgpIG56RXh0cmE6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekhhc0ZlZWRiYWNrKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9oYXNGZWVkYmFjayA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgICB0aGlzLnNldENvbnRyb2xDbGFzc01hcCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56SGFzRmVlZGJhY2soKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5faGFzRmVlZGJhY2s7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelZhbGlkYXRlU3RhdHVzKHZhbHVlOiBzdHJpbmcgfCBGb3JtQ29udHJvbCB8IEZvcm1Db250cm9sTmFtZSB8IE5nTW9kZWwpIHtcclxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEZvcm1Db250cm9sIHx8IHZhbHVlIGluc3RhbmNlb2YgTmdNb2RlbCkge1xyXG4gICAgICB0aGlzLnZhbGlkYXRlQ29udHJvbCA9IHZhbHVlO1xyXG4gICAgICB0aGlzLnZhbGlkYXRlU3RyaW5nID0gbnVsbDtcclxuICAgICAgdGhpcy53YXRjaENvbnRyb2woKTtcclxuICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBGb3JtQ29udHJvbE5hbWUpIHtcclxuICAgICAgdGhpcy52YWxpZGF0ZUNvbnRyb2wgPSB2YWx1ZS5jb250cm9sO1xyXG4gICAgICB0aGlzLnZhbGlkYXRlU3RyaW5nID0gbnVsbDtcclxuICAgICAgdGhpcy53YXRjaENvbnRyb2woKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudmFsaWRhdGVTdHJpbmcgPSB2YWx1ZTtcclxuICAgICAgdGhpcy52YWxpZGF0ZUNvbnRyb2wgPSBudWxsO1xyXG4gICAgICB0aGlzLnNldENvbnRyb2xDbGFzc01hcCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlU3Vic2NyaWJlKCk6IHZvaWQge1xyXG4gICAgdGhpcy52YWxpZGF0ZUNoYW5nZXMudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIHdhdGNoQ29udHJvbCgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVtb3ZlU3Vic2NyaWJlKCk7XHJcbiAgICAvKiogbWlzcyBkZXRlY3QgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTA4ODcgKiovXHJcbiAgICBpZiAodGhpcy52YWxpZGF0ZUNvbnRyb2wgJiYgdGhpcy52YWxpZGF0ZUNvbnRyb2wuc3RhdHVzQ2hhbmdlcykge1xyXG4gICAgICB0aGlzLnZhbGlkYXRlQ2hhbmdlcyA9IHRoaXMudmFsaWRhdGVDb250cm9sLnN0YXR1c0NoYW5nZXMucGlwZShzdGFydFdpdGgobnVsbCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRDb250cm9sQ2xhc3NNYXAoKTtcclxuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZUNvbnRyb2xTdGF0dXMoc3RhdHVzOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAoISF0aGlzLnZhbGlkYXRlQ29udHJvbCAmJlxyXG4gICAgICAodGhpcy52YWxpZGF0ZUNvbnRyb2wuZGlydHkgfHwgdGhpcy52YWxpZGF0ZUNvbnRyb2wudG91Y2hlZCkgJiZcclxuICAgICAgdGhpcy52YWxpZGF0ZUNvbnRyb2wuc3RhdHVzID09PSBzdGF0dXMpIGFzIGJvb2xlYW47XHJcbiAgfVxyXG5cclxuICBzZXRDb250cm9sQ2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy52YWxpZGF0ZVN0cmluZyA9PT0gJ3dhcm5pbmcnKSB7XHJcbiAgICAgIHRoaXMuc3RhdHVzID0gJ3dhcm5pbmcnO1xyXG4gICAgICB0aGlzLmljb25UeXBlID0gJ2V4Y2xhbWF0aW9uLWNpcmNsZS1maWxsJztcclxuICAgIH0gZWxzZSBpZiAodGhpcy52YWxpZGF0ZVN0cmluZyA9PT0gJ3ZhbGlkYXRpbmcnIHx8IHRoaXMudmFsaWRhdGVTdHJpbmcgPT09ICdwZW5kaW5nJyB8fCB0aGlzLnZhbGlkYXRlQ29udHJvbFN0YXR1cygnUEVORElORycpKSB7XHJcbiAgICAgIHRoaXMuc3RhdHVzID0gJ3ZhbGlkYXRpbmcnO1xyXG4gICAgICB0aGlzLmljb25UeXBlID0gJ2xvYWRpbmcnO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnZhbGlkYXRlU3RyaW5nID09PSAnZXJyb3InIHx8IHRoaXMudmFsaWRhdGVDb250cm9sU3RhdHVzKCdJTlZBTElEJykpIHtcclxuICAgICAgdGhpcy5zdGF0dXMgPSAnZXJyb3InO1xyXG4gICAgICB0aGlzLmljb25UeXBlID0gJ2Nsb3NlLWNpcmNsZS1maWxsJztcclxuICAgIH0gZWxzZSBpZiAodGhpcy52YWxpZGF0ZVN0cmluZyA9PT0gJ3N1Y2Nlc3MnIHx8IHRoaXMudmFsaWRhdGVDb250cm9sU3RhdHVzKCdWQUxJRCcpKSB7XHJcbiAgICAgIHRoaXMuc3RhdHVzID0gJ3N1Y2Nlc3MnO1xyXG4gICAgICB0aGlzLmljb25UeXBlID0gJ2NoZWNrLWNpcmNsZS1maWxsJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc3RhdHVzID0gbnVsbDtcclxuICAgICAgdGhpcy5pY29uVHlwZSA9ICcnO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaGFzVGlwcykge1xyXG4gICAgICB0aGlzLm56Rm9ybUl0ZW1Db21wb25lbnQuc2V0V2l0aEhlbHBWaWFUaXBzKHRoaXMuc2hvd0Vycm9yVGlwKTtcclxuICAgIH1cclxuICAgIHRoaXMuY29udHJvbENsYXNzTWFwID0ge1xyXG4gICAgICBbYGhhcy13YXJuaW5nYF06IHRoaXMuc3RhdHVzID09PSAnd2FybmluZycsXHJcbiAgICAgIFtgaXMtdmFsaWRhdGluZ2BdOiB0aGlzLnN0YXR1cyA9PT0gJ3ZhbGlkYXRpbmcnLFxyXG4gICAgICBbYGhhcy1lcnJvcmBdOiB0aGlzLnN0YXR1cyA9PT0gJ2Vycm9yJyxcclxuICAgICAgW2BoYXMtc3VjY2Vzc2BdOiB0aGlzLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnLFxyXG4gICAgICBbYGhhcy1mZWVkYmFja2BdOiB0aGlzLm56SGFzRmVlZGJhY2sgJiYgdGhpcy5zdGF0dXNcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBnZXQgaGFzVGlwcygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhISh0aGlzLm56U3VjY2Vzc1RpcCB8fCB0aGlzLm56V2FybmluZ1RpcCB8fCB0aGlzLm56RXJyb3JUaXAgfHwgdGhpcy5uelZhbGlkYXRpbmdUaXApO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNob3dTdWNjZXNzVGlwKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSAnc3VjY2VzcycgJiYgISF0aGlzLm56U3VjY2Vzc1RpcDtcclxuICB9XHJcblxyXG4gIGdldCBzaG93V2FybmluZ1RpcCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXR1cyA9PT0gJ3dhcm5pbmcnICYmICEhdGhpcy5ueldhcm5pbmdUaXA7XHJcbiAgfVxyXG5cclxuICBnZXQgc2hvd0Vycm9yVGlwKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSAnZXJyb3InICYmICEhdGhpcy5uekVycm9yVGlwO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNob3dWYWxpZGF0aW5nVGlwKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSAndmFsaWRhdGluZycgJiYgISF0aGlzLm56VmFsaWRhdGluZ1RpcDtcclxuICB9XHJcblxyXG4gIGdldCBzaG93SW5uZXJUaXAoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5zaG93U3VjY2Vzc1RpcCB8fCB0aGlzLnNob3dXYXJuaW5nVGlwIHx8IHRoaXMuc2hvd0Vycm9yVGlwIHx8IHRoaXMuc2hvd1ZhbGlkYXRpbmdUaXA7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLFxyXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIEBPcHRpb25hbCgpIEBIb3N0KCkgcHJpdmF0ZSBuekZvcm1JdGVtQ29tcG9uZW50OiBOekZvcm1JdGVtQ29tcG9uZW50LFxyXG4gICAgQE9wdGlvbmFsKCkgQEhvc3QoKSBuelJvd0RpcmVjdGl2ZTogTnpSb3dEaXJlY3RpdmUsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyXHJcbiAgKSB7XHJcbiAgICBzdXBlcihuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsIGVsZW1lbnRSZWYsIG56Rm9ybUl0ZW1Db21wb25lbnQgfHwgbnpSb3dEaXJlY3RpdmUsIHJlbmRlcmVyKTtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1mb3JtLWl0ZW0tY29udHJvbC13cmFwcGVyJyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHN1cGVyLm5nT25Jbml0KCk7XHJcbiAgICB0aGlzLnNldENvbnRyb2xDbGFzc01hcCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlbW92ZVN1YnNjcmliZSgpO1xyXG4gICAgc3VwZXIubmdPbkRlc3Ryb3koKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy52YWxpZGF0ZUNvbnRyb2wgJiYgIXRoaXMudmFsaWRhdGVTdHJpbmcpIHtcclxuICAgICAgaWYgKHRoaXMuZGVmYXVsdFZhbGlkYXRlQ29udHJvbCBpbnN0YW5jZW9mIEZvcm1Db250cm9sRGlyZWN0aXZlKSB7XHJcbiAgICAgICAgdGhpcy5uelZhbGlkYXRlU3RhdHVzID0gdGhpcy5kZWZhdWx0VmFsaWRhdGVDb250cm9sLmNvbnRyb2w7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5uelZhbGlkYXRlU3RhdHVzID0gdGhpcy5kZWZhdWx0VmFsaWRhdGVDb250cm9sO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBzdXBlci5uZ0FmdGVyVmlld0luaXQoKTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tY29udHJvbFwiIFtuZ0NsYXNzXT1cImNvbnRyb2xDbGFzc01hcFwiPlxyXG4gIDxzcGFuIGNsYXNzPVwiYW50LWZvcm0taXRlbS1jaGlsZHJlblwiPlxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgPHNwYW4gY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWNoaWxkcmVuLWljb25cIj5cclxuICAgICAgPGkgKm5nSWY9XCJuekhhc0ZlZWRiYWNrICYmIGljb25UeXBlXCIgbnotaWNvbiBbbnpUeXBlXT1cImljb25UeXBlXCI+PC9pPlxyXG4gICAgPC9zcGFuPlxyXG4gIDwvc3Bhbj5cclxuICA8ZGl2XHJcbiAgICBjbGFzcz1cImFudC1mb3JtLWV4cGxhaW5cIlxyXG4gICAgKm5nSWY9XCJzaG93U3VjY2Vzc1RpcCB8fCBzaG93V2FybmluZ1RpcCB8fCBzaG93RXJyb3JUaXAgfHwgc2hvd1ZhbGlkYXRpbmdUaXBcIlxyXG4gID5cclxuICAgIDxkaXYgQGhlbHBNb3Rpb24+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzaG93U3VjY2Vzc1RpcFwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXJcclxuICAgICAgICAgICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpTdWNjZXNzVGlwOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogdmFsaWRhdGVDb250cm9sIH1cIlxyXG4gICAgICAgICAgPnt7IG56U3VjY2Vzc1RpcCB9fTwvbmctY29udGFpbmVyXHJcbiAgICAgICAgPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNob3dXYXJuaW5nVGlwXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lclxyXG4gICAgICAgICAgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJueldhcm5pbmdUaXA7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiB2YWxpZGF0ZUNvbnRyb2wgfVwiXHJcbiAgICAgICAgICA+e3sgbnpXYXJuaW5nVGlwIH19PC9uZy1jb250YWluZXJcclxuICAgICAgICA+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic2hvd0Vycm9yVGlwXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lclxyXG4gICAgICAgICAgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJuekVycm9yVGlwOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogdmFsaWRhdGVDb250cm9sIH1cIlxyXG4gICAgICAgICAgPnt7IG56RXJyb3JUaXAgfX08L25nLWNvbnRhaW5lclxyXG4gICAgICAgID5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzaG93VmFsaWRhdGluZ1RpcFwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXJcclxuICAgICAgICAgICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpWYWxpZGF0aW5nVGlwOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogdmFsaWRhdGVDb250cm9sIH1cIlxyXG4gICAgICAgICAgPnt7IG56VmFsaWRhdGluZ1RpcCB9fTwvbmctY29udGFpbmVyXHJcbiAgICAgICAgPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxuZy1jb250ZW50ICpuZ0lmPVwiIWhhc1RpcHNcIiBzZWxlY3Q9XCJuei1mb3JtLWV4cGxhaW5cIj48L25nLWNvbnRlbnQ+XHJcbiAgPG5nLWNvbnRlbnQgKm5nSWY9XCIhbnpFeHRyYVwiIHNlbGVjdD1cIm56LWZvcm0tZXh0cmFcIj48L25nLWNvbnRlbnQ+XHJcbiAgPGRpdiBjbGFzcz1cImFudC1mb3JtLWV4dHJhXCIgKm5nSWY9XCJuekV4dHJhXCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpFeHRyYVwiPnt7IG56RXh0cmEgfX08L25nLWNvbnRhaW5lcj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==
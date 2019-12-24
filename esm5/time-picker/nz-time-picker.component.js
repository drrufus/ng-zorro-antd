import { __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CdkOverlayOrigin } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputBoolean, isNotNil, NzConfigService, NzUpdateHostClassService as UpdateCls, slideMotion, WithConfig } from 'ng-zorro-antd/core';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
import * as i2 from "./nz-time-value-accessor.directive";
import * as i3 from "@angular/forms";
import * as i4 from "ng-zorro-antd/icon";
import * as i5 from "@angular/common";
import * as i6 from "@angular/cdk/overlay";
import * as i7 from "./nz-time-picker-panel.component";
import * as i8 from "ng-zorro-antd/i18n";
var _c0 = ["inputElement"];
function NzTimePickerComponent_i_5_Template(rf, ctx) { if (rf & 1) {
    var _r917 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 6);
    i0.ɵɵlistener("click", function NzTimePickerComponent_i_5_Template_i_click_0_listener($event) { i0.ɵɵrestoreView(_r917); var ctx_r916 = i0.ɵɵnextContext(); return ctx_r916.onClickClearBtn(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r914 = i0.ɵɵnextContext();
    i0.ɵɵattribute("aria-label", ctx_r914.nzClearText)("title", ctx_r914.nzClearText);
} }
function NzTimePickerComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    var _r919 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nz-time-picker-panel", 7);
    i0.ɵɵlistener("ngModelChange", function NzTimePickerComponent_ng_template_6_Template_nz_time_picker_panel_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r919); var ctx_r918 = i0.ɵɵnextContext(); return ctx_r918.value = $event; });
    i0.ɵɵpipe(1, "nzI18n");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r915 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r915.nzPopupClassName)("@slideMotion", "bottom")("format", ctx_r915.nzFormat)("nzHourStep", ctx_r915.nzHourStep)("nzMinuteStep", ctx_r915.nzMinuteStep)("nzSecondStep", ctx_r915.nzSecondStep)("nzDisabledHours", ctx_r915.nzDisabledHours)("nzDisabledMinutes", ctx_r915.nzDisabledMinutes)("nzDisabledSeconds", ctx_r915.nzDisabledSeconds)("nzPlaceHolder", ctx_r915.nzPlaceHolder || i0.ɵɵpipeBind1(1, 18, "TimePicker.placeholder"))("nzHideDisabledOptions", ctx_r915.nzHideDisabledOptions)("nzUse12Hours", ctx_r915.nzUse12Hours)("nzDefaultOpenValue", ctx_r915.nzDefaultOpenValue)("nzAddOn", ctx_r915.nzAddOn)("opened", ctx_r915.nzOpen)("nzClearText", ctx_r915.nzClearText)("nzAllowEmpty", ctx_r915.nzAllowEmpty)("ngModel", ctx_r915.value);
} }
var NZ_CONFIG_COMPONENT_NAME = 'timePicker';
var NzTimePickerComponent = /** @class */ (function () {
    function NzTimePickerComponent(nzConfigService, element, renderer, updateCls, cdr) {
        this.nzConfigService = nzConfigService;
        this.element = element;
        this.renderer = renderer;
        this.updateCls = updateCls;
        this.cdr = cdr;
        this._value = null;
        this.isInit = false;
        this.overlayPositions = [
            {
                originX: 'start',
                originY: 'top',
                overlayX: 'end',
                overlayY: 'top',
                offsetX: 0,
                offsetY: 0
            }
        ];
        this.nzSize = null;
        this.nzPlaceHolder = '';
        this.nzDefaultOpenValue = new Date();
        this.nzOpen = false;
        this.nzOpenChange = new EventEmitter();
        this.nzHideDisabledOptions = false;
        this.nzDisabled = false;
        this.nzAutoFocus = false;
    }
    Object.defineProperty(NzTimePickerComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
            if (this._onChange) {
                this._onChange(this.value);
            }
            if (this._onTouched) {
                this._onTouched();
            }
        },
        enumerable: true,
        configurable: true
    });
    NzTimePickerComponent.prototype.open = function () {
        if (this.nzDisabled) {
            return;
        }
        this.nzOpen = true;
        this.nzOpenChange.emit(this.nzOpen);
    };
    NzTimePickerComponent.prototype.close = function () {
        this.nzOpen = false;
        this.cdr.markForCheck();
        this.nzOpenChange.emit(this.nzOpen);
    };
    NzTimePickerComponent.prototype.updateAutoFocus = function () {
        if (this.isInit && !this.nzDisabled) {
            if (this.nzAutoFocus) {
                this.renderer.setAttribute(this.inputRef.nativeElement, 'autofocus', 'autofocus');
            }
            else {
                this.renderer.removeAttribute(this.inputRef.nativeElement, 'autofocus');
            }
        }
    };
    NzTimePickerComponent.prototype.onClickClearBtn = function () {
        this.value = null;
    };
    NzTimePickerComponent.prototype.setClassMap = function () {
        var _a;
        this.updateCls.updateHostClass(this.element.nativeElement, (_a = {},
            _a["ant-time-picker"] = true,
            _a["ant-time-picker-" + this.nzSize] = isNotNil(this.nzSize),
            _a));
    };
    NzTimePickerComponent.prototype.focus = function () {
        if (this.inputRef.nativeElement) {
            this.inputRef.nativeElement.focus();
        }
    };
    NzTimePickerComponent.prototype.blur = function () {
        if (this.inputRef.nativeElement) {
            this.inputRef.nativeElement.blur();
        }
    };
    NzTimePickerComponent.prototype.ngOnInit = function () {
        this.setClassMap();
        this.origin = new CdkOverlayOrigin(this.element);
    };
    NzTimePickerComponent.prototype.ngOnChanges = function (changes) {
        var nzUse12Hours = changes.nzUse12Hours, nzFormat = changes.nzFormat, nzDisabled = changes.nzDisabled, nzAutoFocus = changes.nzAutoFocus;
        if (nzUse12Hours && !nzUse12Hours.previousValue && nzUse12Hours.currentValue && !nzFormat) {
            this.nzFormat = 'h:mm:ss a';
        }
        if (nzDisabled) {
            var value = nzDisabled.currentValue;
            var input = this.inputRef.nativeElement;
            if (value) {
                this.renderer.setAttribute(input, 'disabled', '');
            }
            else {
                this.renderer.removeAttribute(input, 'disabled');
            }
        }
        if (nzAutoFocus) {
            this.updateAutoFocus();
        }
    };
    NzTimePickerComponent.prototype.ngAfterViewInit = function () {
        this.isInit = true;
        this.updateAutoFocus();
    };
    NzTimePickerComponent.prototype.writeValue = function (time) {
        this._value = time;
        this.cdr.markForCheck();
    };
    NzTimePickerComponent.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    NzTimePickerComponent.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    NzTimePickerComponent.prototype.setDisabledState = function (isDisabled) {
        this.nzDisabled = isDisabled;
        this.cdr.markForCheck();
    };
    /** @nocollapse */ NzTimePickerComponent.ɵfac = function NzTimePickerComponent_Factory(t) { return new (t || NzTimePickerComponent)(i0.ɵɵdirectiveInject(i1.NzConfigService), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.NzUpdateHostClassService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ NzTimePickerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzTimePickerComponent, selectors: [["nz-time-picker"]], viewQuery: function NzTimePickerComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵstaticViewQuery(_c0, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputRef = _t.first);
        } }, inputs: { nzSize: "nzSize", nzHourStep: "nzHourStep", nzMinuteStep: "nzMinuteStep", nzSecondStep: "nzSecondStep", nzClearText: "nzClearText", nzPopupClassName: "nzPopupClassName", nzPlaceHolder: "nzPlaceHolder", nzAddOn: "nzAddOn", nzDefaultOpenValue: "nzDefaultOpenValue", nzDisabledHours: "nzDisabledHours", nzDisabledMinutes: "nzDisabledMinutes", nzDisabledSeconds: "nzDisabledSeconds", nzFormat: "nzFormat", nzOpen: "nzOpen", nzUse12Hours: "nzUse12Hours", nzHideDisabledOptions: "nzHideDisabledOptions", nzAllowEmpty: "nzAllowEmpty", nzDisabled: "nzDisabled", nzAutoFocus: "nzAutoFocus" }, outputs: { nzOpenChange: "nzOpenChange" }, exportAs: ["nzTimePicker"], features: [i0.ɵɵProvidersFeature([UpdateCls, { provide: NG_VALUE_ACCESSOR, useExisting: NzTimePickerComponent, multi: true }]), i0.ɵɵNgOnChangesFeature()], decls: 7, vars: 10, consts: [["nzType", "text", "readonly", "readonly", 1, "ant-time-picker-input", 3, "nzTime", "placeholder", "ngModel", "ngModelChange", "click"], ["inputElement", ""], [1, "ant-time-picker-icon"], ["nz-icon", "", "nzType", "clock-circle"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", "class", "anticon anticon-close-circle ant-time-picker-clear", "tabindex", "-1", 3, "click", 4, "ngIf"], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", "cdkConnectedOverlayHasBackdrop", "", 3, "cdkConnectedOverlayPositions", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayOffsetY", "detach", "backdropClick"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", "tabindex", "-1", 1, "anticon", "anticon-close-circle", "ant-time-picker-clear", 3, "click"], [3, "ngClass", "format", "nzHourStep", "nzMinuteStep", "nzSecondStep", "nzDisabledHours", "nzDisabledMinutes", "nzDisabledSeconds", "nzPlaceHolder", "nzHideDisabledOptions", "nzUse12Hours", "nzDefaultOpenValue", "nzAddOn", "opened", "nzClearText", "nzAllowEmpty", "ngModel", "ngModelChange"]], template: function NzTimePickerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "input", 0, 1);
            i0.ɵɵlistener("ngModelChange", function NzTimePickerComponent_Template_input_ngModelChange_0_listener($event) { return ctx.value = $event; })("click", function NzTimePickerComponent_Template_input_click_0_listener($event) { return ctx.open(); });
            i0.ɵɵpipe(2, "nzI18n");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "span", 2);
            i0.ɵɵelement(4, "i", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, NzTimePickerComponent_i_5_Template, 1, 2, "i", 4);
            i0.ɵɵtemplate(6, NzTimePickerComponent_ng_template_6_Template, 2, 20, "ng-template", 5);
            i0.ɵɵlistener("detach", function NzTimePickerComponent_Template_ng_template_detach_6_listener($event) { return ctx.close(); })("backdropClick", function NzTimePickerComponent_Template_ng_template_backdropClick_6_listener($event) { return ctx.close(); });
        } if (rf & 2) {
            i0.ɵɵproperty("nzTime", ctx.nzFormat)("placeholder", ctx.nzPlaceHolder || i0.ɵɵpipeBind1(2, 8, "TimePicker.placeholder"))("ngModel", ctx.value);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ctx.nzAllowEmpty && ctx.value);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("cdkConnectedOverlayPositions", ctx.overlayPositions)("cdkConnectedOverlayOrigin", ctx.origin)("cdkConnectedOverlayOpen", ctx.nzOpen)("cdkConnectedOverlayOffsetY", 0 - 2);
        } }, directives: [i2.NzTimeValueAccessorDirective, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel, i4.NzIconDirective, i5.NgIf, i6.CdkConnectedOverlay, i1.NzConnectedOverlayDirective, i7.NzTimePickerPanelComponent, i5.NgClass], pipes: [i8.NzI18nPipe], encapsulation: 2, data: { animation: [slideMotion] }, changeDetection: 0 });
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, 1),
        __metadata("design:type", Number)
    ], NzTimePickerComponent.prototype, "nzHourStep", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, 1),
        __metadata("design:type", Number)
    ], NzTimePickerComponent.prototype, "nzMinuteStep", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, 1),
        __metadata("design:type", Number)
    ], NzTimePickerComponent.prototype, "nzSecondStep", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, 'clear'),
        __metadata("design:type", String)
    ], NzTimePickerComponent.prototype, "nzClearText", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", String)
    ], NzTimePickerComponent.prototype, "nzPopupClassName", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, 'HH:mm:ss'),
        __metadata("design:type", String)
    ], NzTimePickerComponent.prototype, "nzFormat", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzTimePickerComponent.prototype, "nzUse12Hours", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTimePickerComponent.prototype, "nzHideDisabledOptions", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, true), InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzTimePickerComponent.prototype, "nzAllowEmpty", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTimePickerComponent.prototype, "nzDisabled", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTimePickerComponent.prototype, "nzAutoFocus", void 0);
    return NzTimePickerComponent;
}());
export { NzTimePickerComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzTimePickerComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'nz-time-picker',
                exportAs: 'nzTimePicker',
                templateUrl: './nz-time-picker.component.html',
                animations: [slideMotion],
                providers: [UpdateCls, { provide: NG_VALUE_ACCESSOR, useExisting: NzTimePickerComponent, multi: true }]
            }]
    }], function () { return [{ type: i1.NzConfigService }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.NzUpdateHostClassService }, { type: i0.ChangeDetectorRef }]; }, { inputRef: [{
            type: ViewChild,
            args: ['inputElement', { static: true }]
        }], nzSize: [{
            type: Input
        }], nzHourStep: [{
            type: Input
        }], nzMinuteStep: [{
            type: Input
        }], nzSecondStep: [{
            type: Input
        }], nzClearText: [{
            type: Input
        }], nzPopupClassName: [{
            type: Input
        }], nzPlaceHolder: [{
            type: Input
        }], nzAddOn: [{
            type: Input
        }], nzDefaultOpenValue: [{
            type: Input
        }], nzDisabledHours: [{
            type: Input
        }], nzDisabledMinutes: [{
            type: Input
        }], nzDisabledSeconds: [{
            type: Input
        }], nzFormat: [{
            type: Input
        }], nzOpen: [{
            type: Input
        }], nzUse12Hours: [{
            type: Input
        }], nzOpenChange: [{
            type: Output
        }], nzHideDisabledOptions: [{
            type: Input
        }], nzAllowEmpty: [{
            type: Input
        }], nzDisabled: [{
            type: Input
        }], nzAutoFocus: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGltZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90aW1lLXBpY2tlci8iLCJzb3VyY2VzIjpbIm56LXRpbWUtcGlja2VyLmNvbXBvbmVudC50cyIsIm56LXRpbWUtcGlja2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsZ0JBQWdCLEVBQTBCLE1BQU0sc0JBQXNCLENBQUM7QUFDaEYsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEVBRVQsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQU8sRUFDTCxZQUFZLEVBQ1osUUFBUSxFQUNSLGVBQWUsRUFDZix3QkFBd0IsSUFBSSxTQUFTLEVBQ3JDLFdBQVcsRUFDWCxVQUFVLEVBQ1gsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7OztJQ3RCNUIsNEJBVUs7SUFESCxpTUFBMkI7SUFDNUIsaUJBQUk7OztJQUhILGtEQUErQiwrQkFBQTs7OztJQWdCL0IsK0NBb0J1QjtJQUZyQiwyT0FBbUI7O0lBRXJCLGlCQUF1Qjs7O0lBbkJyQixtREFBNEIsMEJBQUEsNkJBQUEsbUNBQUEsdUNBQUEsdUNBQUEsNkNBQUEsaURBQUEsaURBQUEsNEZBQUEseURBQUEsdUNBQUEsbURBQUEsNkJBQUEsMkJBQUEscUNBQUEsdUNBQUEsMkJBQUE7O0FEQWhDLElBQU0sd0JBQXdCLEdBQUcsWUFBWSxDQUFDO0FBRTlDO0lBNkdFLCtCQUNTLGVBQWdDLEVBQy9CLE9BQW1CLEVBQ25CLFFBQW1CLEVBQ25CLFNBQW9CLEVBQ3JCLEdBQXNCO1FBSnRC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LElBQUksRUFBRTs7a0JBQzFDLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLE1BQU07O2tCQUVOLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENka092ZXJsYXlPcmlnaW4sIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7XHJcbiAgSW5wdXRCb29sZWFuLFxyXG4gIGlzTm90TmlsLFxyXG4gIE56Q29uZmlnU2VydmljZSxcclxuICBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgYXMgVXBkYXRlQ2xzLFxyXG4gIHNsaWRlTW90aW9uLFxyXG4gIFdpdGhDb25maWdcclxufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ3RpbWVQaWNrZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBzZWxlY3RvcjogJ256LXRpbWUtcGlja2VyJyxcclxuICBleHBvcnRBczogJ256VGltZVBpY2tlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXRpbWUtcGlja2VyLmNvbXBvbmVudC5odG1sJyxcclxuICBhbmltYXRpb25zOiBbc2xpZGVNb3Rpb25dLFxyXG4gIHByb3ZpZGVyczogW1VwZGF0ZUNscywgeyBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUiwgdXNlRXhpc3Rpbmc6IE56VGltZVBpY2tlckNvbXBvbmVudCwgbXVsdGk6IHRydWUgfV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56VGltZVBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XHJcbiAgcHJpdmF0ZSBfdmFsdWU6IERhdGUgfCBudWxsID0gbnVsbDtcclxuICBwcml2YXRlIF9vbkNoYW5nZTogKHZhbHVlOiBEYXRlIHwgbnVsbCkgPT4gdm9pZDtcclxuICBwcml2YXRlIF9vblRvdWNoZWQ6ICgpID0+IHZvaWQ7XHJcbiAgaXNJbml0ID0gZmFsc2U7XHJcbiAgb3JpZ2luOiBDZGtPdmVybGF5T3JpZ2luO1xyXG4gIG92ZXJsYXlQb3NpdGlvbnM6IENvbm5lY3Rpb25Qb3NpdGlvblBhaXJbXSA9IFtcclxuICAgIHtcclxuICAgICAgb3JpZ2luWDogJ3N0YXJ0JyxcclxuICAgICAgb3JpZ2luWTogJ3RvcCcsXHJcbiAgICAgIG92ZXJsYXlYOiAnZW5kJyxcclxuICAgICAgb3ZlcmxheVk6ICd0b3AnLFxyXG4gICAgICBvZmZzZXRYOiAwLFxyXG4gICAgICBvZmZzZXRZOiAwXHJcbiAgICB9XHJcbiAgXTtcclxuICBAVmlld0NoaWxkKCdpbnB1dEVsZW1lbnQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBpbnB1dFJlZjogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PjtcclxuICBASW5wdXQoKSBuelNpemU6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgMSkgbnpIb3VyU3RlcDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgMSkgbnpNaW51dGVTdGVwOiBudW1iZXI7XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCAxKSBuelNlY29uZFN0ZXA6IG51bWJlcjtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsICdjbGVhcicpIG56Q2xlYXJUZXh0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKSBuelBvcHVwQ2xhc3NOYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpQbGFjZUhvbGRlciA9ICcnO1xyXG4gIEBJbnB1dCgpIG56QWRkT246IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56RGVmYXVsdE9wZW5WYWx1ZSA9IG5ldyBEYXRlKCk7XHJcbiAgQElucHV0KCkgbnpEaXNhYmxlZEhvdXJzOiAoKSA9PiBudW1iZXJbXTtcclxuICBASW5wdXQoKSBuekRpc2FibGVkTWludXRlczogKGhvdXI6IG51bWJlcikgPT4gbnVtYmVyW107XHJcbiAgQElucHV0KCkgbnpEaXNhYmxlZFNlY29uZHM6IChob3VyOiBudW1iZXIsIG1pbnV0ZTogbnVtYmVyKSA9PiBudW1iZXJbXTtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsICdISDptbTpzcycpIG56Rm9ybWF0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpPcGVuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCBmYWxzZSkgQElucHV0Qm9vbGVhbigpIG56VXNlMTJIb3VyczogYm9vbGVhbjtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpIaWRlRGlzYWJsZWRPcHRpb25zID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCB0cnVlKSBASW5wdXRCb29sZWFuKCkgbnpBbGxvd0VtcHR5OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QXV0b0ZvY3VzID0gZmFsc2U7XHJcblxyXG4gIHNldCB2YWx1ZSh2YWx1ZTogRGF0ZSB8IG51bGwpIHtcclxuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XHJcbiAgICBpZiAodGhpcy5fb25DaGFuZ2UpIHtcclxuICAgICAgdGhpcy5fb25DaGFuZ2UodGhpcy52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5fb25Ub3VjaGVkKSB7XHJcbiAgICAgIHRoaXMuX29uVG91Y2hlZCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IHZhbHVlKCk6IERhdGUgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcclxuICB9XHJcblxyXG4gIG9wZW4oKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uekRpc2FibGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMubnpPcGVuID0gdHJ1ZTtcclxuICAgIHRoaXMubnpPcGVuQ2hhbmdlLmVtaXQodGhpcy5uek9wZW4pO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoKTogdm9pZCB7XHJcbiAgICB0aGlzLm56T3BlbiA9IGZhbHNlO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB0aGlzLm56T3BlbkNoYW5nZS5lbWl0KHRoaXMubnpPcGVuKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUF1dG9Gb2N1cygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzSW5pdCAmJiAhdGhpcy5uekRpc2FibGVkKSB7XHJcbiAgICAgIGlmICh0aGlzLm56QXV0b0ZvY3VzKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50LCAnYXV0b2ZvY3VzJywgJ2F1dG9mb2N1cycpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMuaW5wdXRSZWYubmF0aXZlRWxlbWVudCwgJ2F1dG9mb2N1cycpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrQ2xlYXJCdG4oKTogdm9pZCB7XHJcbiAgICB0aGlzLnZhbHVlID0gbnVsbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZUNscy51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHtcclxuICAgICAgW2BhbnQtdGltZS1waWNrZXJgXTogdHJ1ZSxcclxuICAgICAgW2BhbnQtdGltZS1waWNrZXItJHt0aGlzLm56U2l6ZX1gXTogaXNOb3ROaWwodGhpcy5uelNpemUpXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZvY3VzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaW5wdXRSZWYubmF0aXZlRWxlbWVudCkge1xyXG4gICAgICB0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGJsdXIoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuaW5wdXRSZWYubmF0aXZlRWxlbWVudC5ibHVyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcclxuICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgdXBkYXRlQ2xzOiBVcGRhdGVDbHMsXHJcbiAgICBwdWJsaWMgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICB0aGlzLm9yaWdpbiA9IG5ldyBDZGtPdmVybGF5T3JpZ2luKHRoaXMuZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBjb25zdCB7IG56VXNlMTJIb3VycywgbnpGb3JtYXQsIG56RGlzYWJsZWQsIG56QXV0b0ZvY3VzIH0gPSBjaGFuZ2VzO1xyXG4gICAgaWYgKG56VXNlMTJIb3VycyAmJiAhbnpVc2UxMkhvdXJzLnByZXZpb3VzVmFsdWUgJiYgbnpVc2UxMkhvdXJzLmN1cnJlbnRWYWx1ZSAmJiAhbnpGb3JtYXQpIHtcclxuICAgICAgdGhpcy5uekZvcm1hdCA9ICdoOm1tOnNzIGEnO1xyXG4gICAgfVxyXG4gICAgaWYgKG56RGlzYWJsZWQpIHtcclxuICAgICAgY29uc3QgdmFsdWUgPSBuekRpc2FibGVkLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgY29uc3QgaW5wdXQgPSB0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoaW5wdXQsICdkaXNhYmxlZCcsICcnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZShpbnB1dCwgJ2Rpc2FibGVkJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChuekF1dG9Gb2N1cykge1xyXG4gICAgICB0aGlzLnVwZGF0ZUF1dG9Gb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0luaXQgPSB0cnVlO1xyXG4gICAgdGhpcy51cGRhdGVBdXRvRm9jdXMoKTtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodGltZTogRGF0ZSB8IG51bGwpOiB2b2lkIHtcclxuICAgIHRoaXMuX3ZhbHVlID0gdGltZTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHRpbWU6IERhdGUgfCBudWxsKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLl9vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMuX29uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLm56RGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG59XHJcbiIsIjxpbnB1dFxyXG4gICNpbnB1dEVsZW1lbnRcclxuICBuelR5cGU9XCJ0ZXh0XCJcclxuICBbbnpUaW1lXT1cIm56Rm9ybWF0XCJcclxuICBjbGFzcz1cImFudC10aW1lLXBpY2tlci1pbnB1dFwiXHJcbiAgW3BsYWNlaG9sZGVyXT1cIm56UGxhY2VIb2xkZXIgfHwgKCdUaW1lUGlja2VyLnBsYWNlaG9sZGVyJyB8IG56STE4bilcIlxyXG4gIFsobmdNb2RlbCldPVwidmFsdWVcIlxyXG4gIHJlYWRvbmx5PVwicmVhZG9ubHlcIlxyXG4gIChjbGljayk9XCJvcGVuKClcIlxyXG4vPlxyXG48c3BhbiBjbGFzcz1cImFudC10aW1lLXBpY2tlci1pY29uXCI+XHJcbiAgPGkgbnotaWNvbiBuelR5cGU9XCJjbG9jay1jaXJjbGVcIj48L2k+XHJcbjwvc3Bhbj5cclxuPGlcclxuICAqbmdJZj1cIm56QWxsb3dFbXB0eSAmJiB2YWx1ZVwiXHJcbiAgbnotaWNvblxyXG4gIG56VHlwZT1cImNsb3NlLWNpcmNsZVwiXHJcbiAgbnpUaGVtZT1cImZpbGxcIlxyXG4gIGNsYXNzPVwiYW50aWNvbiBhbnRpY29uLWNsb3NlLWNpcmNsZSBhbnQtdGltZS1waWNrZXItY2xlYXJcIlxyXG4gIHRhYmluZGV4PVwiLTFcIlxyXG4gIFthdHRyLmFyaWEtbGFiZWxdPVwibnpDbGVhclRleHRcIlxyXG4gIFthdHRyLnRpdGxlXT1cIm56Q2xlYXJUZXh0XCJcclxuICAoY2xpY2spPVwib25DbGlja0NsZWFyQnRuKClcIlxyXG4+PC9pPlxyXG5cclxuPG5nLXRlbXBsYXRlXHJcbiAgY2RrQ29ubmVjdGVkT3ZlcmxheVxyXG4gIG56Q29ubmVjdGVkT3ZlcmxheVxyXG4gIGNka0Nvbm5lY3RlZE92ZXJsYXlIYXNCYWNrZHJvcFxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25zXT1cIm92ZXJsYXlQb3NpdGlvbnNcIlxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5T3JpZ2luXT1cIm9yaWdpblwiXHJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcGVuXT1cIm56T3BlblwiXHJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPZmZzZXRZXT1cIi0yXCJcclxuICAoZGV0YWNoKT1cImNsb3NlKClcIlxyXG4gIChiYWNrZHJvcENsaWNrKT1cImNsb3NlKClcIlxyXG4+XHJcbiAgPG56LXRpbWUtcGlja2VyLXBhbmVsXHJcbiAgICBbbmdDbGFzc109XCJuelBvcHVwQ2xhc3NOYW1lXCJcclxuICAgIFtAc2xpZGVNb3Rpb25dPVwiJ2JvdHRvbSdcIlxyXG4gICAgW2Zvcm1hdF09XCJuekZvcm1hdFwiXHJcbiAgICBbbnpIb3VyU3RlcF09XCJuekhvdXJTdGVwXCJcclxuICAgIFtuek1pbnV0ZVN0ZXBdPVwibnpNaW51dGVTdGVwXCJcclxuICAgIFtuelNlY29uZFN0ZXBdPVwibnpTZWNvbmRTdGVwXCJcclxuICAgIFtuekRpc2FibGVkSG91cnNdPVwibnpEaXNhYmxlZEhvdXJzXCJcclxuICAgIFtuekRpc2FibGVkTWludXRlc109XCJuekRpc2FibGVkTWludXRlc1wiXHJcbiAgICBbbnpEaXNhYmxlZFNlY29uZHNdPVwibnpEaXNhYmxlZFNlY29uZHNcIlxyXG4gICAgW256UGxhY2VIb2xkZXJdPVwibnpQbGFjZUhvbGRlciB8fCAoJ1RpbWVQaWNrZXIucGxhY2Vob2xkZXInIHwgbnpJMThuKVwiXHJcbiAgICBbbnpIaWRlRGlzYWJsZWRPcHRpb25zXT1cIm56SGlkZURpc2FibGVkT3B0aW9uc1wiXHJcbiAgICBbbnpVc2UxMkhvdXJzXT1cIm56VXNlMTJIb3Vyc1wiXHJcbiAgICBbbnpEZWZhdWx0T3BlblZhbHVlXT1cIm56RGVmYXVsdE9wZW5WYWx1ZVwiXHJcbiAgICBbbnpBZGRPbl09XCJuekFkZE9uXCJcclxuICAgIFtvcGVuZWRdPVwibnpPcGVuXCJcclxuICAgIFtuekNsZWFyVGV4dF09XCJuekNsZWFyVGV4dFwiXHJcbiAgICBbbnpBbGxvd0VtcHR5XT1cIm56QWxsb3dFbXB0eVwiXHJcbiAgICBbKG5nTW9kZWwpXT1cInZhbHVlXCJcclxuICA+XHJcbiAgPC9uei10aW1lLXBpY2tlci1wYW5lbD5cclxuPC9uZy10ZW1wbGF0ZT5cclxuIl19
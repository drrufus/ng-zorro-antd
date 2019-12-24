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
const _c0 = ["inputElement"];
function NzTimePickerComponent_i_5_Template(rf, ctx) { if (rf & 1) {
    const _r872 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 6);
    i0.ɵɵlistener("click", function NzTimePickerComponent_i_5_Template_i_click_0_listener($event) { i0.ɵɵrestoreView(_r872); const ctx_r871 = i0.ɵɵnextContext(); return ctx_r871.onClickClearBtn(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r869 = i0.ɵɵnextContext();
    i0.ɵɵattribute("aria-label", ctx_r869.nzClearText)("title", ctx_r869.nzClearText);
} }
function NzTimePickerComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r874 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nz-time-picker-panel", 7);
    i0.ɵɵlistener("ngModelChange", function NzTimePickerComponent_ng_template_6_Template_nz_time_picker_panel_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r874); const ctx_r873 = i0.ɵɵnextContext(); return ctx_r873.value = $event; });
    i0.ɵɵpipe(1, "nzI18n");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r870 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r870.nzPopupClassName)("@slideMotion", "bottom")("format", ctx_r870.nzFormat)("nzHourStep", ctx_r870.nzHourStep)("nzMinuteStep", ctx_r870.nzMinuteStep)("nzSecondStep", ctx_r870.nzSecondStep)("nzDisabledHours", ctx_r870.nzDisabledHours)("nzDisabledMinutes", ctx_r870.nzDisabledMinutes)("nzDisabledSeconds", ctx_r870.nzDisabledSeconds)("nzPlaceHolder", ctx_r870.nzPlaceHolder || i0.ɵɵpipeBind1(1, 18, "TimePicker.placeholder"))("nzHideDisabledOptions", ctx_r870.nzHideDisabledOptions)("nzUse12Hours", ctx_r870.nzUse12Hours)("nzDefaultOpenValue", ctx_r870.nzDefaultOpenValue)("nzAddOn", ctx_r870.nzAddOn)("opened", ctx_r870.nzOpen)("nzClearText", ctx_r870.nzClearText)("nzAllowEmpty", ctx_r870.nzAllowEmpty)("ngModel", ctx_r870.value);
} }
const NZ_CONFIG_COMPONENT_NAME = 'timePicker';
export class NzTimePickerComponent {
    constructor(nzConfigService, element, renderer, updateCls, cdr) {
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
    set value(value) {
        this._value = value;
        if (this._onChange) {
            this._onChange(this.value);
        }
        if (this._onTouched) {
            this._onTouched();
        }
    }
    get value() {
        return this._value;
    }
    open() {
        if (this.nzDisabled) {
            return;
        }
        this.nzOpen = true;
        this.nzOpenChange.emit(this.nzOpen);
    }
    close() {
        this.nzOpen = false;
        this.cdr.markForCheck();
        this.nzOpenChange.emit(this.nzOpen);
    }
    updateAutoFocus() {
        if (this.isInit && !this.nzDisabled) {
            if (this.nzAutoFocus) {
                this.renderer.setAttribute(this.inputRef.nativeElement, 'autofocus', 'autofocus');
            }
            else {
                this.renderer.removeAttribute(this.inputRef.nativeElement, 'autofocus');
            }
        }
    }
    onClickClearBtn() {
        this.value = null;
    }
    setClassMap() {
        this.updateCls.updateHostClass(this.element.nativeElement, {
            [`ant-time-picker`]: true,
            [`ant-time-picker-${this.nzSize}`]: isNotNil(this.nzSize)
        });
    }
    focus() {
        if (this.inputRef.nativeElement) {
            this.inputRef.nativeElement.focus();
        }
    }
    blur() {
        if (this.inputRef.nativeElement) {
            this.inputRef.nativeElement.blur();
        }
    }
    ngOnInit() {
        this.setClassMap();
        this.origin = new CdkOverlayOrigin(this.element);
    }
    ngOnChanges(changes) {
        const { nzUse12Hours, nzFormat, nzDisabled, nzAutoFocus } = changes;
        if (nzUse12Hours && !nzUse12Hours.previousValue && nzUse12Hours.currentValue && !nzFormat) {
            this.nzFormat = 'h:mm:ss a';
        }
        if (nzDisabled) {
            const value = nzDisabled.currentValue;
            const input = this.inputRef.nativeElement;
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
    }
    ngAfterViewInit() {
        this.isInit = true;
        this.updateAutoFocus();
    }
    writeValue(time) {
        this._value = time;
        this.cdr.markForCheck();
    }
    registerOnChange(fn) {
        this._onChange = fn;
    }
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.nzDisabled = isDisabled;
        this.cdr.markForCheck();
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGltZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90aW1lLXBpY2tlci8iLCJzb3VyY2VzIjpbIm56LXRpbWUtcGlja2VyLmNvbXBvbmVudC50cyIsIm56LXRpbWUtcGlja2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsZ0JBQWdCLEVBQTBCLE1BQU0sc0JBQXNCLENBQUM7QUFDaEYsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEVBRVQsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQU8sRUFDTCxZQUFZLEVBQ1osUUFBUSxFQUNSLGVBQWUsRUFDZix3QkFBd0IsSUFBSSxTQUFTLEVBQ3JDLFdBQVcsRUFDWCxVQUFVLEVBQ1gsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7OztJQ3RCNUIsNEJBVUs7SUFESCxtTUFBMkI7SUFDNUIsaUJBQUk7OztJQUhILGtEQUErQiwrQkFBQTs7OztJQWdCL0IsK0NBb0J1QjtJQUZyQiw2T0FBbUI7O0lBRXJCLGlCQUF1Qjs7O0lBbkJyQixtREFBNEIsMEJBQUEsNkJBQUEsbUNBQUEsdUNBQUEsdUNBQUEsNkNBQUEsaURBQUEsaURBQUEsNEZBQUEseURBQUEsdUNBQUEsbURBQUEsNkJBQUEsMkJBQUEscUNBQUEsdUNBQUEsMkJBQUE7O0FEQWhDLE1BQU0sd0JBQXdCLEdBQUcsWUFBWSxDQUFDO0FBVzlDLE1BQU0sT0FBTyxxQkFBcUI7SUFvR2hDLFlBQ1MsZUFBZ0MsRUFDL0IsT0FBbUIsRUFDbkIsUUFBbUIsRUFDbkIsU0FBb0Is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QkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxNQUFNOztrQkFFTixLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBDZGtPdmVybGF5T3JpZ2luLCBDb25uZWN0aW9uUG9zaXRpb25QYWlyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIElucHV0Qm9vbGVhbixcclxuICBpc05vdE5pbCxcclxuICBOekNvbmZpZ1NlcnZpY2UsXHJcbiAgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIGFzIFVwZGF0ZUNscyxcclxuICBzbGlkZU1vdGlvbixcclxuICBXaXRoQ29uZmlnXHJcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICd0aW1lUGlja2VyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgc2VsZWN0b3I6ICduei10aW1lLXBpY2tlcicsXHJcbiAgZXhwb3J0QXM6ICduelRpbWVQaWNrZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei10aW1lLXBpY2tlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgYW5pbWF0aW9uczogW3NsaWRlTW90aW9uXSxcclxuICBwcm92aWRlcnM6IFtVcGRhdGVDbHMsIHsgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsIHVzZUV4aXN0aW5nOiBOelRpbWVQaWNrZXJDb21wb25lbnQsIG11bHRpOiB0cnVlIH1dXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelRpbWVQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xyXG4gIHByaXZhdGUgX3ZhbHVlOiBEYXRlIHwgbnVsbCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBfb25DaGFuZ2U6ICh2YWx1ZTogRGF0ZSB8IG51bGwpID0+IHZvaWQ7XHJcbiAgcHJpdmF0ZSBfb25Ub3VjaGVkOiAoKSA9PiB2b2lkO1xyXG4gIGlzSW5pdCA9IGZhbHNlO1xyXG4gIG9yaWdpbjogQ2RrT3ZlcmxheU9yaWdpbjtcclxuICBvdmVybGF5UG9zaXRpb25zOiBDb25uZWN0aW9uUG9zaXRpb25QYWlyW10gPSBbXHJcbiAgICB7XHJcbiAgICAgIG9yaWdpblg6ICdzdGFydCcsXHJcbiAgICAgIG9yaWdpblk6ICd0b3AnLFxyXG4gICAgICBvdmVybGF5WDogJ2VuZCcsXHJcbiAgICAgIG92ZXJsYXlZOiAndG9wJyxcclxuICAgICAgb2Zmc2V0WDogMCxcclxuICAgICAgb2Zmc2V0WTogMFxyXG4gICAgfVxyXG4gIF07XHJcbiAgQFZpZXdDaGlsZCgnaW5wdXRFbGVtZW50JywgeyBzdGF0aWM6IHRydWUgfSkgaW5wdXRSZWY6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XHJcbiAgQElucHV0KCkgbnpTaXplOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIDEpIG56SG91clN0ZXA6IG51bWJlcjtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIDEpIG56TWludXRlU3RlcDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgMSkgbnpTZWNvbmRTdGVwOiBudW1iZXI7XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCAnY2xlYXInKSBuekNsZWFyVGV4dDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkgbnpQb3B1cENsYXNzTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG56UGxhY2VIb2xkZXIgPSAnJztcclxuICBASW5wdXQoKSBuekFkZE9uOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuekRlZmF1bHRPcGVuVmFsdWUgPSBuZXcgRGF0ZSgpO1xyXG4gIEBJbnB1dCgpIG56RGlzYWJsZWRIb3VyczogKCkgPT4gbnVtYmVyW107XHJcbiAgQElucHV0KCkgbnpEaXNhYmxlZE1pbnV0ZXM6IChob3VyOiBudW1iZXIpID0+IG51bWJlcltdO1xyXG4gIEBJbnB1dCgpIG56RGlzYWJsZWRTZWNvbmRzOiAoaG91cjogbnVtYmVyLCBtaW51dGU6IG51bWJlcikgPT4gbnVtYmVyW107XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCAnSEg6bW06c3MnKSBuekZvcm1hdDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG56T3BlbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgZmFsc2UpIEBJbnB1dEJvb2xlYW4oKSBuelVzZTEySG91cnM6IGJvb2xlYW47XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T3BlbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56SGlkZURpc2FibGVkT3B0aW9ucyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgdHJ1ZSkgQElucHV0Qm9vbGVhbigpIG56QWxsb3dFbXB0eTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekF1dG9Gb2N1cyA9IGZhbHNlO1xyXG5cclxuICBzZXQgdmFsdWUodmFsdWU6IERhdGUgfCBudWxsKSB7XHJcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xyXG4gICAgaWYgKHRoaXMuX29uQ2hhbmdlKSB7XHJcbiAgICAgIHRoaXMuX29uQ2hhbmdlKHRoaXMudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuX29uVG91Y2hlZCkge1xyXG4gICAgICB0aGlzLl9vblRvdWNoZWQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCB2YWx1ZSgpOiBEYXRlIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAgfVxyXG5cclxuICBvcGVuKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpEaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLm56T3BlbiA9IHRydWU7XHJcbiAgICB0aGlzLm56T3BlbkNoYW5nZS5lbWl0KHRoaXMubnpPcGVuKTtcclxuICB9XHJcblxyXG4gIGNsb3NlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5uek9wZW4gPSBmYWxzZTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgdGhpcy5uek9wZW5DaGFuZ2UuZW1pdCh0aGlzLm56T3Blbik7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVBdXRvRm9jdXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc0luaXQgJiYgIXRoaXMubnpEaXNhYmxlZCkge1xyXG4gICAgICBpZiAodGhpcy5uekF1dG9Gb2N1cykge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuaW5wdXRSZWYubmF0aXZlRWxlbWVudCwgJ2F1dG9mb2N1cycsICdhdXRvZm9jdXMnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQsICdhdXRvZm9jdXMnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DbGlja0NsZWFyQnRuKCk6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgdGhpcy51cGRhdGVDbHMudXBkYXRlSG9zdENsYXNzKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCB7XHJcbiAgICAgIFtgYW50LXRpbWUtcGlja2VyYF06IHRydWUsXHJcbiAgICAgIFtgYW50LXRpbWUtcGlja2VyLSR7dGhpcy5uelNpemV9YF06IGlzTm90TmlsKHRoaXMubnpTaXplKVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmb2N1cygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBibHVyKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaW5wdXRSZWYubmF0aXZlRWxlbWVudCkge1xyXG4gICAgICB0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIHVwZGF0ZUNsczogVXBkYXRlQ2xzLFxyXG4gICAgcHVibGljIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgdGhpcy5vcmlnaW4gPSBuZXcgQ2RrT3ZlcmxheU9yaWdpbih0aGlzLmVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc3QgeyBuelVzZTEySG91cnMsIG56Rm9ybWF0LCBuekRpc2FibGVkLCBuekF1dG9Gb2N1cyB9ID0gY2hhbmdlcztcclxuICAgIGlmIChuelVzZTEySG91cnMgJiYgIW56VXNlMTJIb3Vycy5wcmV2aW91c1ZhbHVlICYmIG56VXNlMTJIb3Vycy5jdXJyZW50VmFsdWUgJiYgIW56Rm9ybWF0KSB7XHJcbiAgICAgIHRoaXMubnpGb3JtYXQgPSAnaDptbTpzcyBhJztcclxuICAgIH1cclxuICAgIGlmIChuekRpc2FibGVkKSB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gbnpEaXNhYmxlZC5jdXJyZW50VmFsdWU7XHJcbiAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGlucHV0LCAnZGlzYWJsZWQnLCAnJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUoaW5wdXQsICdkaXNhYmxlZCcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAobnpBdXRvRm9jdXMpIHtcclxuICAgICAgdGhpcy51cGRhdGVBdXRvRm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNJbml0ID0gdHJ1ZTtcclxuICAgIHRoaXMudXBkYXRlQXV0b0ZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHRpbWU6IERhdGUgfCBudWxsKTogdm9pZCB7XHJcbiAgICB0aGlzLl92YWx1ZSA9IHRpbWU7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh0aW1lOiBEYXRlIHwgbnVsbCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5fb25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLl9vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5uekRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxufVxyXG4iLCI8aW5wdXRcclxuICAjaW5wdXRFbGVtZW50XHJcbiAgbnpUeXBlPVwidGV4dFwiXHJcbiAgW256VGltZV09XCJuekZvcm1hdFwiXHJcbiAgY2xhc3M9XCJhbnQtdGltZS1waWNrZXItaW5wdXRcIlxyXG4gIFtwbGFjZWhvbGRlcl09XCJuelBsYWNlSG9sZGVyIHx8ICgnVGltZVBpY2tlci5wbGFjZWhvbGRlcicgfCBuekkxOG4pXCJcclxuICBbKG5nTW9kZWwpXT1cInZhbHVlXCJcclxuICByZWFkb25seT1cInJlYWRvbmx5XCJcclxuICAoY2xpY2spPVwib3BlbigpXCJcclxuLz5cclxuPHNwYW4gY2xhc3M9XCJhbnQtdGltZS1waWNrZXItaWNvblwiPlxyXG4gIDxpIG56LWljb24gbnpUeXBlPVwiY2xvY2stY2lyY2xlXCI+PC9pPlxyXG48L3NwYW4+XHJcbjxpXHJcbiAgKm5nSWY9XCJuekFsbG93RW1wdHkgJiYgdmFsdWVcIlxyXG4gIG56LWljb25cclxuICBuelR5cGU9XCJjbG9zZS1jaXJjbGVcIlxyXG4gIG56VGhlbWU9XCJmaWxsXCJcclxuICBjbGFzcz1cImFudGljb24gYW50aWNvbi1jbG9zZS1jaXJjbGUgYW50LXRpbWUtcGlja2VyLWNsZWFyXCJcclxuICB0YWJpbmRleD1cIi0xXCJcclxuICBbYXR0ci5hcmlhLWxhYmVsXT1cIm56Q2xlYXJUZXh0XCJcclxuICBbYXR0ci50aXRsZV09XCJuekNsZWFyVGV4dFwiXHJcbiAgKGNsaWNrKT1cIm9uQ2xpY2tDbGVhckJ0bigpXCJcclxuPjwvaT5cclxuXHJcbjxuZy10ZW1wbGF0ZVxyXG4gIGNka0Nvbm5lY3RlZE92ZXJsYXlcclxuICBuekNvbm5lY3RlZE92ZXJsYXlcclxuICBjZGtDb25uZWN0ZWRPdmVybGF5SGFzQmFja2Ryb3BcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uc109XCJvdmVybGF5UG9zaXRpb25zXCJcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9yaWdpbl09XCJvcmlnaW5cIlxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5T3Blbl09XCJuek9wZW5cIlxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5T2Zmc2V0WV09XCItMlwiXHJcbiAgKGRldGFjaCk9XCJjbG9zZSgpXCJcclxuICAoYmFja2Ryb3BDbGljayk9XCJjbG9zZSgpXCJcclxuPlxyXG4gIDxuei10aW1lLXBpY2tlci1wYW5lbFxyXG4gICAgW25nQ2xhc3NdPVwibnpQb3B1cENsYXNzTmFtZVwiXHJcbiAgICBbQHNsaWRlTW90aW9uXT1cIidib3R0b20nXCJcclxuICAgIFtmb3JtYXRdPVwibnpGb3JtYXRcIlxyXG4gICAgW256SG91clN0ZXBdPVwibnpIb3VyU3RlcFwiXHJcbiAgICBbbnpNaW51dGVTdGVwXT1cIm56TWludXRlU3RlcFwiXHJcbiAgICBbbnpTZWNvbmRTdGVwXT1cIm56U2Vjb25kU3RlcFwiXHJcbiAgICBbbnpEaXNhYmxlZEhvdXJzXT1cIm56RGlzYWJsZWRIb3Vyc1wiXHJcbiAgICBbbnpEaXNhYmxlZE1pbnV0ZXNdPVwibnpEaXNhYmxlZE1pbnV0ZXNcIlxyXG4gICAgW256RGlzYWJsZWRTZWNvbmRzXT1cIm56RGlzYWJsZWRTZWNvbmRzXCJcclxuICAgIFtuelBsYWNlSG9sZGVyXT1cIm56UGxhY2VIb2xkZXIgfHwgKCdUaW1lUGlja2VyLnBsYWNlaG9sZGVyJyB8IG56STE4bilcIlxyXG4gICAgW256SGlkZURpc2FibGVkT3B0aW9uc109XCJuekhpZGVEaXNhYmxlZE9wdGlvbnNcIlxyXG4gICAgW256VXNlMTJIb3Vyc109XCJuelVzZTEySG91cnNcIlxyXG4gICAgW256RGVmYXVsdE9wZW5WYWx1ZV09XCJuekRlZmF1bHRPcGVuVmFsdWVcIlxyXG4gICAgW256QWRkT25dPVwibnpBZGRPblwiXHJcbiAgICBbb3BlbmVkXT1cIm56T3BlblwiXHJcbiAgICBbbnpDbGVhclRleHRdPVwibnpDbGVhclRleHRcIlxyXG4gICAgW256QWxsb3dFbXB0eV09XCJuekFsbG93RW1wdHlcIlxyXG4gICAgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiXHJcbiAgPlxyXG4gIDwvbnotdGltZS1waWNrZXItcGFuZWw+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==
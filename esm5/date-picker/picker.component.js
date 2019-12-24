/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { slideMotion } from 'ng-zorro-antd/core';
import { DateHelperService } from 'ng-zorro-antd/i18n';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/i18n";
import * as i2 from "@angular/cdk/overlay";
import * as i3 from "@angular/common";
import * as i4 from "ng-zorro-antd/core";
import * as i5 from "ng-zorro-antd/icon";
var _c0 = ["origin"];
var _c1 = ["pickerInput"];
function NzPickerComponent_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function NzPickerComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "input", 6, 7);
    i0.ɵɵtemplate(3, NzPickerComponent_ng_container_2_ng_container_3_Template, 1, 0, "ng-container", 8);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r2469 = i0.ɵɵnextContext();
    var _r2473 = i0.ɵɵreference(7);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("", ctx_r2469.prefixCls, "-picker-input ant-input");
    i0.ɵɵclassProp("ant-input-lg", ctx_r2469.size === "large")("ant-input-sm", ctx_r2469.size === "small")("ant-input-disabled", ctx_r2469.disabled);
    i0.ɵɵpropertyInterpolate("value", ctx_r2469.getReadableValue());
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r2469.getPlaceholder());
    i0.ɵɵproperty("disabled", ctx_r2469.disabled);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", _r2473);
} }
function NzPickerComponent_ng_container_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function NzPickerComponent_ng_container_3_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function NzPickerComponent_ng_container_3_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
var _c2 = function () { return { partType: "left" }; };
var _c3 = function () { return { partType: "right" }; };
function NzPickerComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", null, 7);
    i0.ɵɵtemplate(3, NzPickerComponent_ng_container_3_ng_container_3_Template, 1, 0, "ng-container", 9);
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5, " ~ ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, NzPickerComponent_ng_container_3_ng_container_6_Template, 1, 0, "ng-container", 9);
    i0.ɵɵtemplate(7, NzPickerComponent_ng_container_3_ng_container_7_Template, 1, 0, "ng-container", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r2470 = i0.ɵɵnextContext();
    var _r2471 = i0.ɵɵreference(5);
    var _r2473 = i0.ɵɵreference(7);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("", ctx_r2470.prefixCls, "-picker-input ant-input");
    i0.ɵɵclassProp("ant-input-lg", ctx_r2470.size === "large")("ant-input-sm", ctx_r2470.size === "small")("ant-input-disabled", ctx_r2470.disabled);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", _r2471)("ngTemplateOutletContext", i0.ɵɵpureFunction0(14, _c2));
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("", ctx_r2470.prefixCls, "-range-picker-separator");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", _r2471)("ngTemplateOutletContext", i0.ɵɵpureFunction0(15, _c3));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r2473);
} }
function NzPickerComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 6);
} if (rf & 2) {
    var partType_r2482 = ctx.partType;
    var ctx_r2472 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("", ctx_r2472.prefixCls, "-range-picker-input");
    i0.ɵɵpropertyInterpolate("value", ctx_r2472.getReadableValue(partType_r2482));
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r2472.getPlaceholder(partType_r2482));
    i0.ɵɵproperty("disabled", ctx_r2472.disabled);
} }
function NzPickerComponent_ng_template_6_i_0_Template(rf, ctx) { if (rf & 1) {
    var _r2485 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 12);
    i0.ɵɵlistener("click", function NzPickerComponent_ng_template_6_i_0_Template_i_click_0_listener($event) { i0.ɵɵrestoreView(_r2485); var ctx_r2484 = i0.ɵɵnextContext(2); return ctx_r2484.onClickClear($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2483 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("", ctx_r2483.prefixCls, "-picker-clear");
} }
function NzPickerComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NzPickerComponent_ng_template_6_i_0_Template, 1, 3, "i", 10);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵelement(2, "i", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2474 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", !ctx_r2474.disabled && !ctx_r2474.isEmptyValue(ctx_r2474.value) && ctx_r2474.allowClear);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("", ctx_r2474.prefixCls, "-picker-icon");
} }
function NzPickerComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    var _r2487 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵlistener("@slideMotion.done", function NzPickerComponent_ng_template_8_Template_div_animation_slideMotion_done_0_listener($event) { i0.ɵɵrestoreView(_r2487); var ctx_r2486 = i0.ɵɵnextContext(); return ctx_r2486.animationDone(); });
    i0.ɵɵprojection(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2475 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("left", ctx_r2475.currentPositionX === "start" ? "-2px" : "2px")("top", ctx_r2475.currentPositionY === "top" ? "-2px" : "2px");
    i0.ɵɵproperty("nzNoAnimation", ctx_r2475.noAnimation)("@slideMotion", ctx_r2475.dropdownAnimation);
} }
var _c4 = ["*"];
var NzPickerComponent = /** @class */ (function () {
    function NzPickerComponent(dateHelper, changeDetector) {
        this.dateHelper = dateHelper;
        this.changeDetector = changeDetector;
        this.noAnimation = false;
        this.isRange = false;
        this.open = undefined;
        this.valueChange = new EventEmitter();
        this.openChange = new EventEmitter(); // Emitted when overlay's open state change
        this.prefixCls = 'ant-calendar';
        this.animationOpenState = false;
        this.overlayOpen = false; // Available when "open"=undefined
        this.overlayOffsetY = 0;
        this.overlayOffsetX = -2;
        this.overlayPositions = [
            {
                // offsetX: -10, // TODO: What a pity, cdk/overlay current not support offset configs even though it already provide these properties
                // offsetY: -10,
                originX: 'start',
                originY: 'top',
                overlayX: 'start',
                overlayY: 'top'
            },
            {
                originX: 'start',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'bottom'
            },
            {
                originX: 'end',
                originY: 'top',
                overlayX: 'end',
                overlayY: 'top'
            },
            {
                originX: 'end',
                originY: 'bottom',
                overlayX: 'end',
                overlayY: 'bottom'
            }
        ];
        this.dropdownAnimation = 'bottom';
        this.currentPositionX = 'start';
        this.currentPositionY = 'top';
    }
    Object.defineProperty(NzPickerComponent.prototype, "realOpenState", {
        get: function () {
            // The value that really decide the open state of overlay
            return this.isOpenHandledByUser() ? !!this.open : this.overlayOpen;
        },
        enumerable: true,
        configurable: true
    });
    NzPickerComponent.prototype.ngAfterViewInit = function () {
        if (this.autoFocus) {
            this.focus();
        }
    };
    NzPickerComponent.prototype.ngOnChanges = function (changes) {
        if (changes.open) {
            this.animationStart();
        }
    };
    NzPickerComponent.prototype.focus = function () {
        if (this.isRange) {
            var firstInput = this.pickerInput.nativeElement.querySelector('input:first-child');
            firstInput.focus(); // Focus on the first input
        }
        else {
            this.pickerInput.nativeElement.focus();
        }
    };
    // Show overlay content
    NzPickerComponent.prototype.showOverlay = function () {
        var _this = this;
        if (!this.realOpenState) {
            this.overlayOpen = true;
            this.animationStart();
            this.openChange.emit(this.overlayOpen);
            setTimeout(function () {
                if (_this.cdkConnectedOverlay && _this.cdkConnectedOverlay.overlayRef) {
                    _this.cdkConnectedOverlay.overlayRef.updatePosition();
                }
            });
        }
    };
    NzPickerComponent.prototype.hideOverlay = function () {
        if (this.realOpenState) {
            this.overlayOpen = false;
            this.openChange.emit(this.overlayOpen);
            this.focus();
        }
    };
    NzPickerComponent.prototype.onClickInputBox = function () {
        if (!this.disabled && !this.isOpenHandledByUser()) {
            this.showOverlay();
        }
    };
    NzPickerComponent.prototype.onClickBackdrop = function () {
        this.hideOverlay();
    };
    NzPickerComponent.prototype.onOverlayDetach = function () {
        this.hideOverlay();
    };
    // NOTE: A issue here, the first time position change, the animation will not be triggered.
    // Because the overlay's "positionChange" event is emitted after the content's full shown up.
    // All other components like "nz-dropdown" which depends on overlay also has the same issue.
    // See: https://github.com/NG-ZORRO/ng-zorro-antd/issues/1429
    NzPickerComponent.prototype.onPositionChange = function (position) {
        this.dropdownAnimation = position.connectionPair.originY === 'top' ? 'bottom' : 'top';
        this.currentPositionX = position.connectionPair.originX;
        this.currentPositionY = position.connectionPair.originY;
        this.changeDetector.detectChanges(); // Take side-effects to position styles
    };
    NzPickerComponent.prototype.onClickClear = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.value = this.isRange ? [] : null;
        this.valueChange.emit(this.value);
    };
    NzPickerComponent.prototype.getReadableValue = function (partType) {
        var value;
        if (this.isRange) {
            value = this.value[this.getPartTypeIndex(partType)];
        }
        else {
            value = this.value;
        }
        return value ? this.dateHelper.format(value.nativeDate, this.format) : null;
    };
    NzPickerComponent.prototype.getPartTypeIndex = function (partType) {
        return { left: 0, right: 1 }[partType];
    };
    NzPickerComponent.prototype.getPlaceholder = function (partType) {
        return this.isRange ? this.placeholder[this.getPartTypeIndex(partType)] : this.placeholder;
    };
    NzPickerComponent.prototype.isEmptyValue = function (value) {
        if (value === null) {
            return true;
        }
        else if (this.isRange) {
            return !value || !Array.isArray(value) || value.every(function (val) { return !val; });
        }
        else {
            return !value;
        }
    };
    // Whether open state is permanently controlled by user himself
    NzPickerComponent.prototype.isOpenHandledByUser = function () {
        return this.open !== undefined;
    };
    NzPickerComponent.prototype.animationStart = function () {
        if (this.realOpenState) {
            this.animationOpenState = true;
        }
    };
    NzPickerComponent.prototype.animationDone = function () {
        if (!this.realOpenState) {
            this.animationOpenState = false;
            this.changeDetector.markForCheck();
        }
    };
    /** @nocollapse */ NzPickerComponent.ɵfac = function NzPickerComponent_Factory(t) { return new (t || NzPickerComponent)(i0.ɵɵdirectiveInject(i1.DateHelperService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ NzPickerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzPickerComponent, selectors: [["nz-picker"]], viewQuery: function NzPickerComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, true);
            i0.ɵɵviewQuery(CdkConnectedOverlay, true);
            i0.ɵɵviewQuery(_c1, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.origin = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.cdkConnectedOverlay = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.pickerInput = _t.first);
        } }, inputs: { noAnimation: "noAnimation", isRange: "isRange", open: "open", disabled: "disabled", placeholder: "placeholder", allowClear: "allowClear", autoFocus: "autoFocus", className: "className", format: "format", size: "size", style: "style", value: "value" }, outputs: { valueChange: "valueChange", openChange: "openChange" }, exportAs: ["nzPicker"], features: [i0.ɵɵNgOnChangesFeature()], ngContentSelectors: _c4, decls: 9, vars: 12, consts: [["cdkOverlayOrigin", "", "tabindex", "0", 3, "ngStyle", "click", "keyup.enter"], ["origin", "cdkOverlayOrigin"], [4, "ngIf"], ["tplRangeInput", ""], ["tplRightRest", ""], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayPositions", "positionChange", "backdropClick", "detach"], ["readonly", "", 3, "disabled", "value", "placeholder"], ["pickerInput", ""], [4, "ngTemplateOutlet"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", 3, "class", "click", 4, "ngIf"], ["nz-icon", "", "nzType", "calendar"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", 3, "click"], [2, "position", "relative", 3, "nzNoAnimation"]], template: function NzPickerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "span", 0, 1);
            i0.ɵɵlistener("click", function NzPickerComponent_Template_span_click_0_listener($event) { return ctx.onClickInputBox(); })("keyup.enter", function NzPickerComponent_Template_span_keyup_enter_0_listener($event) { return ctx.onClickInputBox(); });
            i0.ɵɵtemplate(2, NzPickerComponent_ng_container_2_Template, 4, 10, "ng-container", 2);
            i0.ɵɵtemplate(3, NzPickerComponent_ng_container_3_Template, 8, 16, "ng-container", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, NzPickerComponent_ng_template_4_Template, 1, 6, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(6, NzPickerComponent_ng_template_6_Template, 3, 4, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(8, NzPickerComponent_ng_template_8_Template, 2, 4, "ng-template", 5);
            i0.ɵɵlistener("positionChange", function NzPickerComponent_Template_ng_template_positionChange_8_listener($event) { return ctx.onPositionChange($event); })("backdropClick", function NzPickerComponent_Template_ng_template_backdropClick_8_listener($event) { return ctx.onClickBackdrop(); })("detach", function NzPickerComponent_Template_ng_template_detach_8_listener($event) { return ctx.onOverlayDetach(); });
        } if (rf & 2) {
            var _r2468 = i0.ɵɵreference(1);
            i0.ɵɵclassMapInterpolate3("", ctx.prefixCls, "-picker ", ctx.size ? ctx.prefixCls + "-picker-" + ctx.size : "", " ", ctx.className, "");
            i0.ɵɵproperty("ngStyle", ctx.style);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.isRange);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.isRange);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("cdkConnectedOverlayOrigin", _r2468)("cdkConnectedOverlayOpen", ctx.realOpenState)("cdkConnectedOverlayHasBackdrop", !ctx.isOpenHandledByUser())("cdkConnectedOverlayPositions", ctx.overlayPositions);
        } }, directives: [i2.CdkOverlayOrigin, i3.NgStyle, i3.NgIf, i2.CdkConnectedOverlay, i4.NzConnectedOverlayDirective, i3.NgTemplateOutlet, i5.NzIconDirective, i4.NzNoAnimationDirective], encapsulation: 2, data: { animation: [slideMotion] }, changeDetection: 0 });
    return NzPickerComponent;
}());
export { NzPickerComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzPickerComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-picker',
                exportAs: 'nzPicker',
                templateUrl: './picker.component.html',
                animations: [slideMotion],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.DateHelperService }, { type: i0.ChangeDetectorRef }]; }, { noAnimation: [{
            type: Input
        }], isRange: [{
            type: Input
        }], open: [{
            type: Input
        }], disabled: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], allowClear: [{
            type: Input
        }], autoFocus: [{
            type: Input
        }], className: [{
            type: Input
        }], format: [{
            type: Input
        }], size: [{
            type: Input
        }], style: [{
            type: Input
        }], value: [{
            type: Input
        }], valueChange: [{
            type: Output
        }], openChange: [{
            type: Output
        }], origin: [{
            type: ViewChild,
            args: ['origin', { static: false }]
        }], cdkConnectedOverlay: [{
            type: ViewChild,
            args: [CdkConnectedOverlay, { static: false }]
        }], pickerInput: [{
            type: ViewChild,
            args: ['pickerInput', { static: false }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXIvIiwic291cmNlcyI6WyJwaWNrZXIuY29tcG9uZW50LnRzIiwicGlja2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxnQkFBZ0IsRUFBMEQsTUFBTSxzQkFBc0IsQ0FBQztBQUNySSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUVOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFhLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzVELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7O0lDSG5ELHdCQUE4RDs7O0lBWmhFLDZCQUNFO0lBQUEsOEJBV0E7SUFBQSxtR0FBK0M7SUFDakQsMEJBQWU7Ozs7SUFWWCxlQUE4QztJQUE5Qyw2RUFBOEM7SUFDOUMsMERBQXVDLDRDQUFBLDBDQUFBO0lBS3ZDLCtEQUFnQztJQUNoQyxtRUFBb0M7SUFIcEMsNkNBQXFCO0lBS1QsZUFBZ0M7SUFBaEMseUNBQWdDOzs7SUFZNUMsd0JBQThGOzs7SUFFOUYsd0JBRWdCOzs7SUFDaEIsd0JBQThEOzs7OztJQWJsRSw2QkFDRTtJQUFBLHFDQU9FO0lBQUEsbUdBQStFO0lBQy9FLDRCQUFzRDtJQUFBLG1CQUFFO0lBQUEsaUJBQU87SUFDL0QsbUdBRUM7SUFDRCxtR0FBK0M7SUFDakQsaUJBQU87SUFDVCwwQkFBZTs7Ozs7SUFaWCxlQUE4QztJQUE5Qyw2RUFBOEM7SUFDOUMsMERBQXVDLDRDQUFBLDBDQUFBO0lBSXpCLGVBQWdFO0lBQWhFLHlDQUFnRSx3REFBQTtJQUN4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QUs7O2tCQUNMLE1BQU07O2tCQUNOLE1BQU07O2tCQUVOLFNBQVM7bUJBQUMsUUFBUSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7a0JBQ3JDLFNBQVM7bUJBQUMsbUJBQW1CLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOztrQkFDaEQsU0FBUzttQkFBQyxhQUFhLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBDZGtDb25uZWN0ZWRPdmVybGF5LCBDZGtPdmVybGF5T3JpZ2luLCBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UsIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ2FuZHlEYXRlLCBzbGlkZU1vdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IERhdGVIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc2VsZWN0b3I6ICduei1waWNrZXInLFxyXG4gIGV4cG9ydEFzOiAnbnpQaWNrZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGFuaW1hdGlvbnM6IFtzbGlkZU1vdGlvbl0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE56UGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBub0FuaW1hdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGlzUmFuZ2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBvcGVuOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICBASW5wdXQoKSBhbGxvd0NsZWFyOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGF1dG9Gb2N1czogYm9vbGVhbjtcclxuICBASW5wdXQoKSBjbGFzc05hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBmb3JtYXQ6IHN0cmluZztcclxuICBASW5wdXQoKSBzaXplOiAnbGFyZ2UnIHwgJ3NtYWxsJztcclxuICBASW5wdXQoKSBzdHlsZTogb2JqZWN0O1xyXG4gIEBJbnB1dCgpIHZhbHVlOiBDYW5keURhdGUgfCBDYW5keURhdGVbXSB8IG51bGw7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGUgfCBDYW5keURhdGVbXSB8IG51bGw+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7IC8vIEVtaXR0ZWQgd2hlbiBvdmVybGF5J3Mgb3BlbiBzdGF0ZSBjaGFuZ2VcclxuXHJcbiAgQFZpZXdDaGlsZCgnb3JpZ2luJywgeyBzdGF0aWM6IGZhbHNlIH0pIG9yaWdpbjogQ2RrT3ZlcmxheU9yaWdpbjtcclxuICBAVmlld0NoaWxkKENka0Nvbm5lY3RlZE92ZXJsYXksIHsgc3RhdGljOiBmYWxzZSB9KSBjZGtDb25uZWN0ZWRPdmVybGF5OiBDZGtDb25uZWN0ZWRPdmVybGF5O1xyXG4gIEBWaWV3Q2hpbGQoJ3BpY2tlcklucHV0JywgeyBzdGF0aWM6IGZhbHNlIH0pIHBpY2tlcklucHV0OiBFbGVtZW50UmVmO1xyXG5cclxuICBwcmVmaXhDbHMgPSAnYW50LWNhbGVuZGFyJztcclxuICBhbmltYXRpb25PcGVuU3RhdGUgPSBmYWxzZTtcclxuICBvdmVybGF5T3BlbjogYm9vbGVhbiA9IGZhbHNlOyAvLyBBdmFpbGFibGUgd2hlbiBcIm9wZW5cIj11bmRlZmluZWRcclxuICBvdmVybGF5T2Zmc2V0WTogbnVtYmVyID0gMDtcclxuICBvdmVybGF5T2Zmc2V0WDogbnVtYmVyID0gLTI7XHJcbiAgb3ZlcmxheVBvc2l0aW9uczogQ29ubmVjdGlvblBvc2l0aW9uUGFpcltdID0gW1xyXG4gICAge1xyXG4gICAgICAvLyBvZmZzZXRYOiAtMTAsIC8vIFRPRE86IFdoYXQgYSBwaXR5LCBjZGsvb3ZlcmxheSBjdXJyZW50IG5vdCBzdXBwb3J0IG9mZnNldCBjb25maWdzIGV2ZW4gdGhvdWdoIGl0IGFscmVhZHkgcHJvdmlkZSB0aGVzZSBwcm9wZXJ0aWVzXHJcbiAgICAgIC8vIG9mZnNldFk6IC0xMCxcclxuICAgICAgb3JpZ2luWDogJ3N0YXJ0JyxcclxuICAgICAgb3JpZ2luWTogJ3RvcCcsXHJcbiAgICAgIG92ZXJsYXlYOiAnc3RhcnQnLFxyXG4gICAgICBvdmVybGF5WTogJ3RvcCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG9yaWdpblg6ICdzdGFydCcsXHJcbiAgICAgIG9yaWdpblk6ICdib3R0b20nLFxyXG4gICAgICBvdmVybGF5WDogJ3N0YXJ0JyxcclxuICAgICAgb3ZlcmxheVk6ICdib3R0b20nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBvcmlnaW5YOiAnZW5kJyxcclxuICAgICAgb3JpZ2luWTogJ3RvcCcsXHJcbiAgICAgIG92ZXJsYXlYOiAnZW5kJyxcclxuICAgICAgb3ZlcmxheVk6ICd0b3AnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBvcmlnaW5YOiAnZW5kJyxcclxuICAgICAgb3JpZ2luWTogJ2JvdHRvbScsXHJcbiAgICAgIG92ZXJsYXlYOiAnZW5kJyxcclxuICAgICAgb3ZlcmxheVk6ICdib3R0b20nXHJcbiAgICB9XHJcbiAgXSBhcyBDb25uZWN0aW9uUG9zaXRpb25QYWlyW107XHJcbiAgZHJvcGRvd25BbmltYXRpb246ICd0b3AnIHwgJ2JvdHRvbScgPSAnYm90dG9tJztcclxuICBjdXJyZW50UG9zaXRpb25YOiAnc3RhcnQnIHwgJ2VuZCcgPSAnc3RhcnQnO1xyXG4gIGN1cnJlbnRQb3NpdGlvblk6ICd0b3AnIHwgJ2JvdHRvbScgPSAndG9wJztcclxuXHJcbiAgZ2V0IHJlYWxPcGVuU3RhdGUoKTogYm9vbGVhbiB7XHJcbiAgICAvLyBUaGUgdmFsdWUgdGhhdCByZWFsbHkgZGVjaWRlIHRoZSBvcGVuIHN0YXRlIG9mIG92ZXJsYXlcclxuICAgIHJldHVybiB0aGlzLmlzT3BlbkhhbmRsZWRCeVVzZXIoKSA/ICEhdGhpcy5vcGVuIDogdGhpcy5vdmVybGF5T3BlbjtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0ZUhlbHBlcjogRGF0ZUhlbHBlclNlcnZpY2UsIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmKSB7fVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5hdXRvRm9jdXMpIHtcclxuICAgICAgdGhpcy5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMub3Blbikge1xyXG4gICAgICB0aGlzLmFuaW1hdGlvblN0YXJ0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb2N1cygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgY29uc3QgZmlyc3RJbnB1dCA9ICh0aGlzLnBpY2tlcklucHV0Lm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0OmZpcnN0LWNoaWxkJykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgZmlyc3RJbnB1dC5mb2N1cygpOyAvLyBGb2N1cyBvbiB0aGUgZmlyc3QgaW5wdXRcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucGlja2VySW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gU2hvdyBvdmVybGF5IGNvbnRlbnRcclxuICBzaG93T3ZlcmxheSgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5yZWFsT3BlblN0YXRlKSB7XHJcbiAgICAgIHRoaXMub3ZlcmxheU9wZW4gPSB0cnVlO1xyXG4gICAgICB0aGlzLmFuaW1hdGlvblN0YXJ0KCk7XHJcbiAgICAgIHRoaXMub3BlbkNoYW5nZS5lbWl0KHRoaXMub3ZlcmxheU9wZW4pO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5ICYmIHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheS5vdmVybGF5UmVmKSB7XHJcbiAgICAgICAgICB0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkub3ZlcmxheVJlZi51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoaWRlT3ZlcmxheSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnJlYWxPcGVuU3RhdGUpIHtcclxuICAgICAgdGhpcy5vdmVybGF5T3BlbiA9IGZhbHNlO1xyXG4gICAgICB0aGlzLm9wZW5DaGFuZ2UuZW1pdCh0aGlzLm92ZXJsYXlPcGVuKTtcclxuICAgICAgdGhpcy5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DbGlja0lucHV0Qm94KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmRpc2FibGVkICYmICF0aGlzLmlzT3BlbkhhbmRsZWRCeVVzZXIoKSkge1xyXG4gICAgICB0aGlzLnNob3dPdmVybGF5KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrQmFja2Ryb3AoKTogdm9pZCB7XHJcbiAgICB0aGlzLmhpZGVPdmVybGF5KCk7XHJcbiAgfVxyXG5cclxuICBvbk92ZXJsYXlEZXRhY2goKTogdm9pZCB7XHJcbiAgICB0aGlzLmhpZGVPdmVybGF5KCk7XHJcbiAgfVxyXG5cclxuICAvLyBOT1RFOiBBIGlzc3VlIGhlcmUsIHRoZSBmaXJzdCB0aW1lIHBvc2l0aW9uIGNoYW5nZSwgdGhlIGFuaW1hdGlvbiB3aWxsIG5vdCBiZSB0cmlnZ2VyZWQuXHJcbiAgLy8gQmVjYXVzZSB0aGUgb3ZlcmxheSdzIFwicG9zaXRpb25DaGFuZ2VcIiBldmVudCBpcyBlbWl0dGVkIGFmdGVyIHRoZSBjb250ZW50J3MgZnVsbCBzaG93biB1cC5cclxuICAvLyBBbGwgb3RoZXIgY29tcG9uZW50cyBsaWtlIFwibnotZHJvcGRvd25cIiB3aGljaCBkZXBlbmRzIG9uIG92ZXJsYXkgYWxzbyBoYXMgdGhlIHNhbWUgaXNzdWUuXHJcbiAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9pc3N1ZXMvMTQyOVxyXG4gIG9uUG9zaXRpb25DaGFuZ2UocG9zaXRpb246IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSk6IHZvaWQge1xyXG4gICAgdGhpcy5kcm9wZG93bkFuaW1hdGlvbiA9IHBvc2l0aW9uLmNvbm5lY3Rpb25QYWlyLm9yaWdpblkgPT09ICd0b3AnID8gJ2JvdHRvbScgOiAndG9wJztcclxuICAgIHRoaXMuY3VycmVudFBvc2l0aW9uWCA9IHBvc2l0aW9uLmNvbm5lY3Rpb25QYWlyLm9yaWdpblggYXMgJ3N0YXJ0JyB8ICdlbmQnO1xyXG4gICAgdGhpcy5jdXJyZW50UG9zaXRpb25ZID0gcG9zaXRpb24uY29ubmVjdGlvblBhaXIub3JpZ2luWSBhcyAndG9wJyB8ICdib3R0b20nO1xyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7IC8vIFRha2Ugc2lkZS1lZmZlY3RzIHRvIHBvc2l0aW9uIHN0eWxlc1xyXG4gIH1cclxuXHJcbiAgb25DbGlja0NsZWFyKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuaXNSYW5nZSA/IFtdIDogbnVsbDtcclxuICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldFJlYWRhYmxlVmFsdWUocGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogc3RyaW5nIHwgbnVsbCB7XHJcbiAgICBsZXQgdmFsdWU6IENhbmR5RGF0ZTtcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgdmFsdWUgPSAodGhpcy52YWx1ZSBhcyBDYW5keURhdGVbXSlbdGhpcy5nZXRQYXJ0VHlwZUluZGV4KHBhcnRUeXBlIGFzIFJhbmdlUGFydFR5cGUpXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhbHVlID0gdGhpcy52YWx1ZSBhcyBDYW5keURhdGU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsdWUgPyB0aGlzLmRhdGVIZWxwZXIuZm9ybWF0KHZhbHVlLm5hdGl2ZURhdGUsIHRoaXMuZm9ybWF0KSA6IG51bGw7XHJcbiAgfVxyXG5cclxuICBnZXRQYXJ0VHlwZUluZGV4KHBhcnRUeXBlOiBSYW5nZVBhcnRUeXBlKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB7IGxlZnQ6IDAsIHJpZ2h0OiAxIH1bcGFydFR5cGVdO1xyXG4gIH1cclxuXHJcbiAgZ2V0UGxhY2Vob2xkZXIocGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmlzUmFuZ2UgPyB0aGlzLnBsYWNlaG9sZGVyW3RoaXMuZ2V0UGFydFR5cGVJbmRleChwYXJ0VHlwZSEpXSA6ICh0aGlzLnBsYWNlaG9sZGVyIGFzIHN0cmluZyk7XHJcbiAgfVxyXG5cclxuICBpc0VtcHR5VmFsdWUodmFsdWU6IENhbmR5RGF0ZVtdIHwgQ2FuZHlEYXRlIHwgbnVsbCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHZhbHVlID09PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgcmV0dXJuICF2YWx1ZSB8fCAhQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgdmFsdWUuZXZlcnkodmFsID0+ICF2YWwpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuICF2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFdoZXRoZXIgb3BlbiBzdGF0ZSBpcyBwZXJtYW5lbnRseSBjb250cm9sbGVkIGJ5IHVzZXIgaGltc2VsZlxyXG4gIGlzT3BlbkhhbmRsZWRCeVVzZXIoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5vcGVuICE9PSB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBhbmltYXRpb25TdGFydCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnJlYWxPcGVuU3RhdGUpIHtcclxuICAgICAgdGhpcy5hbmltYXRpb25PcGVuU3RhdGUgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYW5pbWF0aW9uRG9uZSgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5yZWFsT3BlblN0YXRlKSB7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uT3BlblN0YXRlID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBSYW5nZVBhcnRUeXBlID0gJ2xlZnQnIHwgJ3JpZ2h0JztcclxuIiwiPHNwYW5cclxuICBjZGtPdmVybGF5T3JpZ2luXHJcbiAgI29yaWdpbj1cImNka092ZXJsYXlPcmlnaW5cIlxyXG4gIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LXBpY2tlciB7eyBzaXplID8gcHJlZml4Q2xzICsgJy1waWNrZXItJyArIHNpemUgOiAnJyB9fSB7eyBjbGFzc05hbWUgfX1cIlxyXG4gIFtuZ1N0eWxlXT1cInN0eWxlXCJcclxuICB0YWJpbmRleD1cIjBcIlxyXG4gIChjbGljayk9XCJvbkNsaWNrSW5wdXRCb3goKVwiXHJcbiAgKGtleXVwLmVudGVyKT1cIm9uQ2xpY2tJbnB1dEJveCgpXCJcclxuPlxyXG4gIDwhLS0gQ29udGVudCBvZiBzaW5nbGUgcGlja2VyIC0tPlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXNSYW5nZVwiPlxyXG4gICAgPGlucHV0XHJcbiAgICAgICNwaWNrZXJJbnB1dFxyXG4gICAgICBjbGFzcz1cInt7IHByZWZpeENscyB9fS1waWNrZXItaW5wdXQgYW50LWlucHV0XCJcclxuICAgICAgW2NsYXNzLmFudC1pbnB1dC1sZ109XCJzaXplID09PSAnbGFyZ2UnXCJcclxuICAgICAgW2NsYXNzLmFudC1pbnB1dC1zbV09XCJzaXplID09PSAnc21hbGwnXCJcclxuICAgICAgW2NsYXNzLmFudC1pbnB1dC1kaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgIHJlYWRvbmx5XHJcbiAgICAgIHZhbHVlPVwie3sgZ2V0UmVhZGFibGVWYWx1ZSgpIH19XCJcclxuICAgICAgcGxhY2Vob2xkZXI9XCJ7eyBnZXRQbGFjZWhvbGRlcigpIH19XCJcclxuICAgIC8+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidHBsUmlnaHRSZXN0XCI+PC9uZy1jb250YWluZXI+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gIDwhLS0gQ29udGVudCBvZiByYW5nZSBwaWNrZXIgLS0+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzUmFuZ2VcIj5cclxuICAgIDxzcGFuXHJcbiAgICAgICNwaWNrZXJJbnB1dFxyXG4gICAgICBjbGFzcz1cInt7IHByZWZpeENscyB9fS1waWNrZXItaW5wdXQgYW50LWlucHV0XCJcclxuICAgICAgW2NsYXNzLmFudC1pbnB1dC1sZ109XCJzaXplID09PSAnbGFyZ2UnXCJcclxuICAgICAgW2NsYXNzLmFudC1pbnB1dC1zbV09XCJzaXplID09PSAnc21hbGwnXCJcclxuICAgICAgW2NsYXNzLmFudC1pbnB1dC1kaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICA+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0cGxSYW5nZUlucHV0OyBjb250ZXh0OiB7IHBhcnRUeXBlOiAnbGVmdCcgfVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cInt7IHByZWZpeENscyB9fS1yYW5nZS1waWNrZXItc2VwYXJhdG9yXCI+IH4gPC9zcGFuPlxyXG4gICAgICA8bmctY29udGFpbmVyXHJcbiAgICAgICAgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0cGxSYW5nZUlucHV0OyBjb250ZXh0OiB7IHBhcnRUeXBlOiAncmlnaHQnIH1cIlxyXG4gICAgICA+PC9uZy1jb250YWluZXI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0cGxSaWdodFJlc3RcIj48L25nLWNvbnRhaW5lcj5cclxuICAgIDwvc3Bhbj5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuPC9zcGFuPlxyXG5cclxuPCEtLSBJbnB1dCBmb3IgUmFuZ2UgT05MWSAtLT5cclxuPG5nLXRlbXBsYXRlICN0cGxSYW5nZUlucHV0IGxldC1wYXJ0VHlwZT1cInBhcnRUeXBlXCI+XHJcbiAgPGlucHV0XHJcbiAgICBjbGFzcz1cInt7IHByZWZpeENscyB9fS1yYW5nZS1waWNrZXItaW5wdXRcIlxyXG4gICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgIHJlYWRvbmx5XHJcbiAgICB2YWx1ZT1cInt7IGdldFJlYWRhYmxlVmFsdWUocGFydFR5cGUpIH19XCJcclxuICAgIHBsYWNlaG9sZGVyPVwie3sgZ2V0UGxhY2Vob2xkZXIocGFydFR5cGUpIH19XCJcclxuICAvPlxyXG48L25nLXRlbXBsYXRlPlxyXG5cclxuPCEtLSBSaWdodCBvcGVyYXRvciBpY29ucyAtLT5cclxuPG5nLXRlbXBsYXRlICN0cGxSaWdodFJlc3Q+XHJcbiAgPGlcclxuICAgIG56LWljb25cclxuICAgIG56VHlwZT1cImNsb3NlLWNpcmNsZVwiXHJcbiAgICBuelRoZW1lPVwiZmlsbFwiXHJcbiAgICAqbmdJZj1cIiFkaXNhYmxlZCAmJiAhaXNFbXB0eVZhbHVlKHZhbHVlKSAmJiBhbGxvd0NsZWFyXCJcclxuICAgIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LXBpY2tlci1jbGVhclwiXHJcbiAgICAoY2xpY2spPVwib25DbGlja0NsZWFyKCRldmVudClcIlxyXG4gID48L2k+XHJcbiAgPHNwYW4gY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tcGlja2VyLWljb25cIj5cclxuICAgIDxpIG56LWljb24gbnpUeXBlPVwiY2FsZW5kYXJcIj48L2k+XHJcbiAgPC9zcGFuPlxyXG48L25nLXRlbXBsYXRlPlxyXG5cclxuPCEtLSBPdmVybGF5IC0tPlxyXG48bmctdGVtcGxhdGVcclxuICBjZGtDb25uZWN0ZWRPdmVybGF5XHJcbiAgbnpDb25uZWN0ZWRPdmVybGF5XHJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcmlnaW5dPVwib3JpZ2luXCJcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9wZW5dPVwicmVhbE9wZW5TdGF0ZVwiXHJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlIYXNCYWNrZHJvcF09XCIhaXNPcGVuSGFuZGxlZEJ5VXNlcigpXCJcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uc109XCJvdmVybGF5UG9zaXRpb25zXCJcclxuICAocG9zaXRpb25DaGFuZ2UpPVwib25Qb3NpdGlvbkNoYW5nZSgkZXZlbnQpXCJcclxuICAoYmFja2Ryb3BDbGljayk9XCJvbkNsaWNrQmFja2Ryb3AoKVwiXHJcbiAgKGRldGFjaCk9XCJvbk92ZXJsYXlEZXRhY2goKVwiXHJcbj5cclxuICA8ZGl2XHJcbiAgICBbbnpOb0FuaW1hdGlvbl09XCJub0FuaW1hdGlvblwiXHJcbiAgICBbQHNsaWRlTW90aW9uXT1cImRyb3Bkb3duQW5pbWF0aW9uXCJcclxuICAgIChAc2xpZGVNb3Rpb24uZG9uZSk9XCJhbmltYXRpb25Eb25lKClcIlxyXG4gICAgc3R5bGU9XCJwb3NpdGlvbjogcmVsYXRpdmU7XCJcclxuICAgIFtzdHlsZS5sZWZ0XT1cImN1cnJlbnRQb3NpdGlvblggPT09ICdzdGFydCcgPyAnLTJweCcgOiAnMnB4J1wiXHJcbiAgICBbc3R5bGUudG9wXT1cImN1cnJlbnRQb3NpdGlvblkgPT09ICd0b3AnID8gJy0ycHgnIDogJzJweCdcIlxyXG4gID5cclxuICAgIDwhLS0gQ29tcGF0aWJsZSBmb3Igb3ZlcmxheSB0aGF0IG5vdCBzdXBwb3J0IG9mZnNldCBkeW5hbWljYWxseSBhbmQgaW1tZWRpYXRlbHkgLS0+XHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgPC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==
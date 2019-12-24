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
const _c0 = ["origin"];
const _c1 = ["pickerInput"];
function NzPickerComponent_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function NzPickerComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "input", 6, 7);
    i0.ɵɵtemplate(3, NzPickerComponent_ng_container_2_ng_container_3_Template, 1, 0, "ng-container", 8);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2310 = i0.ɵɵnextContext();
    const _r2314 = i0.ɵɵreference(7);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("", ctx_r2310.prefixCls, "-picker-input ant-input");
    i0.ɵɵclassProp("ant-input-lg", ctx_r2310.size === "large")("ant-input-sm", ctx_r2310.size === "small")("ant-input-disabled", ctx_r2310.disabled);
    i0.ɵɵpropertyInterpolate("value", ctx_r2310.getReadableValue());
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r2310.getPlaceholder());
    i0.ɵɵproperty("disabled", ctx_r2310.disabled);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", _r2314);
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
const _c2 = function () { return { partType: "left" }; };
const _c3 = function () { return { partType: "right" }; };
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
    const ctx_r2311 = i0.ɵɵnextContext();
    const _r2312 = i0.ɵɵreference(5);
    const _r2314 = i0.ɵɵreference(7);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("", ctx_r2311.prefixCls, "-picker-input ant-input");
    i0.ɵɵclassProp("ant-input-lg", ctx_r2311.size === "large")("ant-input-sm", ctx_r2311.size === "small")("ant-input-disabled", ctx_r2311.disabled);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", _r2312)("ngTemplateOutletContext", i0.ɵɵpureFunction0(14, _c2));
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("", ctx_r2311.prefixCls, "-range-picker-separator");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", _r2312)("ngTemplateOutletContext", i0.ɵɵpureFunction0(15, _c3));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r2314);
} }
function NzPickerComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 6);
} if (rf & 2) {
    const partType_r2323 = ctx.partType;
    const ctx_r2313 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("", ctx_r2313.prefixCls, "-range-picker-input");
    i0.ɵɵpropertyInterpolate("value", ctx_r2313.getReadableValue(partType_r2323));
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r2313.getPlaceholder(partType_r2323));
    i0.ɵɵproperty("disabled", ctx_r2313.disabled);
} }
function NzPickerComponent_ng_template_6_i_0_Template(rf, ctx) { if (rf & 1) {
    const _r2326 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 12);
    i0.ɵɵlistener("click", function NzPickerComponent_ng_template_6_i_0_Template_i_click_0_listener($event) { i0.ɵɵrestoreView(_r2326); const ctx_r2325 = i0.ɵɵnextContext(2); return ctx_r2325.onClickClear($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2324 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("", ctx_r2324.prefixCls, "-picker-clear");
} }
function NzPickerComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NzPickerComponent_ng_template_6_i_0_Template, 1, 3, "i", 10);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵelement(2, "i", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2315 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", !ctx_r2315.disabled && !ctx_r2315.isEmptyValue(ctx_r2315.value) && ctx_r2315.allowClear);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("", ctx_r2315.prefixCls, "-picker-icon");
} }
function NzPickerComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r2328 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵlistener("@slideMotion.done", function NzPickerComponent_ng_template_8_Template_div_animation_slideMotion_done_0_listener($event) { i0.ɵɵrestoreView(_r2328); const ctx_r2327 = i0.ɵɵnextContext(); return ctx_r2327.animationDone(); });
    i0.ɵɵprojection(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2316 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("left", ctx_r2316.currentPositionX === "start" ? "-2px" : "2px")("top", ctx_r2316.currentPositionY === "top" ? "-2px" : "2px");
    i0.ɵɵproperty("nzNoAnimation", ctx_r2316.noAnimation)("@slideMotion", ctx_r2316.dropdownAnimation);
} }
const _c4 = ["*"];
export class NzPickerComponent {
    constructor(dateHelper, changeDetector) {
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
    get realOpenState() {
        // The value that really decide the open state of overlay
        return this.isOpenHandledByUser() ? !!this.open : this.overlayOpen;
    }
    ngAfterViewInit() {
        if (this.autoFocus) {
            this.focus();
        }
    }
    ngOnChanges(changes) {
        if (changes.open) {
            this.animationStart();
        }
    }
    focus() {
        if (this.isRange) {
            const firstInput = this.pickerInput.nativeElement.querySelector('input:first-child');
            firstInput.focus(); // Focus on the first input
        }
        else {
            this.pickerInput.nativeElement.focus();
        }
    }
    // Show overlay content
    showOverlay() {
        if (!this.realOpenState) {
            this.overlayOpen = true;
            this.animationStart();
            this.openChange.emit(this.overlayOpen);
            setTimeout(() => {
                if (this.cdkConnectedOverlay && this.cdkConnectedOverlay.overlayRef) {
                    this.cdkConnectedOverlay.overlayRef.updatePosition();
                }
            });
        }
    }
    hideOverlay() {
        if (this.realOpenState) {
            this.overlayOpen = false;
            this.openChange.emit(this.overlayOpen);
            this.focus();
        }
    }
    onClickInputBox() {
        if (!this.disabled && !this.isOpenHandledByUser()) {
            this.showOverlay();
        }
    }
    onClickBackdrop() {
        this.hideOverlay();
    }
    onOverlayDetach() {
        this.hideOverlay();
    }
    // NOTE: A issue here, the first time position change, the animation will not be triggered.
    // Because the overlay's "positionChange" event is emitted after the content's full shown up.
    // All other components like "nz-dropdown" which depends on overlay also has the same issue.
    // See: https://github.com/NG-ZORRO/ng-zorro-antd/issues/1429
    onPositionChange(position) {
        this.dropdownAnimation = position.connectionPair.originY === 'top' ? 'bottom' : 'top';
        this.currentPositionX = position.connectionPair.originX;
        this.currentPositionY = position.connectionPair.originY;
        this.changeDetector.detectChanges(); // Take side-effects to position styles
    }
    onClickClear(event) {
        event.preventDefault();
        event.stopPropagation();
        this.value = this.isRange ? [] : null;
        this.valueChange.emit(this.value);
    }
    getReadableValue(partType) {
        let value;
        if (this.isRange) {
            value = this.value[this.getPartTypeIndex(partType)];
        }
        else {
            value = this.value;
        }
        return value ? this.dateHelper.format(value.nativeDate, this.format) : null;
    }
    getPartTypeIndex(partType) {
        return { left: 0, right: 1 }[partType];
    }
    getPlaceholder(partType) {
        return this.isRange ? this.placeholder[this.getPartTypeIndex(partType)] : this.placeholder;
    }
    isEmptyValue(value) {
        if (value === null) {
            return true;
        }
        else if (this.isRange) {
            return !value || !Array.isArray(value) || value.every(val => !val);
        }
        else {
            return !value;
        }
    }
    // Whether open state is permanently controlled by user himself
    isOpenHandledByUser() {
        return this.open !== undefined;
    }
    animationStart() {
        if (this.realOpenState) {
            this.animationOpenState = true;
        }
    }
    animationDone() {
        if (!this.realOpenState) {
            this.animationOpenState = false;
            this.changeDetector.markForCheck();
        }
    }
}
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
        const _r2309 = i0.ɵɵreference(1);
        i0.ɵɵclassMapInterpolate3("", ctx.prefixCls, "-picker ", ctx.size ? ctx.prefixCls + "-picker-" + ctx.size : "", " ", ctx.className, "");
        i0.ɵɵproperty("ngStyle", ctx.style);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.isRange);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isRange);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("cdkConnectedOverlayOrigin", _r2309)("cdkConnectedOverlayOpen", ctx.realOpenState)("cdkConnectedOverlayHasBackdrop", !ctx.isOpenHandledByUser())("cdkConnectedOverlayPositions", ctx.overlayPositions);
    } }, directives: [i2.CdkOverlayOrigin, i3.NgStyle, i3.NgIf, i2.CdkConnectedOverlay, i4.NzConnectedOverlayDirective, i3.NgTemplateOutlet, i5.NzIconDirective, i4.NzNoAnimationDirective], encapsulation: 2, data: { animation: [slideMotion] }, changeDetection: 0 });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXIvIiwic291cmNlcyI6WyJwaWNrZXIuY29tcG9uZW50LnRzIiwicGlja2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxnQkFBZ0IsRUFBMEQsTUFBTSxzQkFBc0IsQ0FBQztBQUNySSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUVOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFhLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzVELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7O0lDSG5ELHdCQUE4RDs7O0lBWmhFLDZCQUNFO0lBQUEsOEJBV0E7SUFBQSxtR0FBK0M7SUFDakQsMEJBQWU7Ozs7SUFWWCxlQUE4QztJQUE5Qyw2RUFBOEM7SUFDOUMsMERBQXVDLDRDQUFBLDBDQUFBO0lBS3ZDLCtEQUFnQztJQUNoQyxtRUFBb0M7SUFIcEMsNkNBQXFCO0lBS1QsZUFBZ0M7SUFBaEMseUNBQWdDOzs7SUFZNUMsd0JBQThGOzs7SUFFOUYsd0JBRWdCOzs7SUFDaEIsd0JBQThEOzs7OztJQWJsRSw2QkFDRTtJQUFBLHFDQU9FO0lBQUEsbUdBQStFO0lBQy9FLDRCQUFzRDtJQUFBLG1CQUFFO0lBQUEsaUJBQU87SUFDL0QsbUdBRUM7SUFDRCxtR0FBK0M7SUFDakQsaUJBQU87SUFDVCwwQkFBZTs7Ozs7SUFaWCxlQUE4QztJQUE5Qyw2RUFBOEM7SUFDOUMsMERBQXVDLDRDQUFBLDBDQUFBO0lBSXpCLGVBQWdFO0lBQWhFLHlDQUFnRSx3REFBQTtJQUN4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QUMsYUFBYSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ2RrQ29ubmVjdGVkT3ZlcmxheSwgQ2RrT3ZlcmxheU9yaWdpbiwgQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlLCBDb25uZWN0aW9uUG9zaXRpb25QYWlyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IENhbmR5RGF0ZSwgc2xpZGVNb3Rpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRlSGVscGVyU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHNlbGVjdG9yOiAnbnotcGlja2VyJyxcclxuICBleHBvcnRBczogJ256UGlja2VyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGlja2VyLmNvbXBvbmVudC5odG1sJyxcclxuICBhbmltYXRpb25zOiBbc2xpZGVNb3Rpb25dLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgbm9BbmltYXRpb246IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBpc1JhbmdlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgb3BlbjogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgQElucHV0KCkgYWxsb3dDbGVhcjogYm9vbGVhbjtcclxuICBASW5wdXQoKSBhdXRvRm9jdXM6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgY2xhc3NOYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZm9ybWF0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc2l6ZTogJ2xhcmdlJyB8ICdzbWFsbCc7XHJcbiAgQElucHV0KCkgc3R5bGU6IG9iamVjdDtcclxuICBASW5wdXQoKSB2YWx1ZTogQ2FuZHlEYXRlIHwgQ2FuZHlEYXRlW10gfCBudWxsO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlIHwgQ2FuZHlEYXRlW10gfCBudWxsPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpOyAvLyBFbWl0dGVkIHdoZW4gb3ZlcmxheSdzIG9wZW4gc3RhdGUgY2hhbmdlXHJcblxyXG4gIEBWaWV3Q2hpbGQoJ29yaWdpbicsIHsgc3RhdGljOiBmYWxzZSB9KSBvcmlnaW46IENka092ZXJsYXlPcmlnaW47XHJcbiAgQFZpZXdDaGlsZChDZGtDb25uZWN0ZWRPdmVybGF5LCB7IHN0YXRpYzogZmFsc2UgfSkgY2RrQ29ubmVjdGVkT3ZlcmxheTogQ2RrQ29ubmVjdGVkT3ZlcmxheTtcclxuICBAVmlld0NoaWxkKCdwaWNrZXJJbnB1dCcsIHsgc3RhdGljOiBmYWxzZSB9KSBwaWNrZXJJbnB1dDogRWxlbWVudFJlZjtcclxuXHJcbiAgcHJlZml4Q2xzID0gJ2FudC1jYWxlbmRhcic7XHJcbiAgYW5pbWF0aW9uT3BlblN0YXRlID0gZmFsc2U7XHJcbiAgb3ZlcmxheU9wZW46IGJvb2xlYW4gPSBmYWxzZTsgLy8gQXZhaWxhYmxlIHdoZW4gXCJvcGVuXCI9dW5kZWZpbmVkXHJcbiAgb3ZlcmxheU9mZnNldFk6IG51bWJlciA9IDA7XHJcbiAgb3ZlcmxheU9mZnNldFg6IG51bWJlciA9IC0yO1xyXG4gIG92ZXJsYXlQb3NpdGlvbnM6IENvbm5lY3Rpb25Qb3NpdGlvblBhaXJbXSA9IFtcclxuICAgIHtcclxuICAgICAgLy8gb2Zmc2V0WDogLTEwLCAvLyBUT0RPOiBXaGF0IGEgcGl0eSwgY2RrL292ZXJsYXkgY3VycmVudCBub3Qgc3VwcG9ydCBvZmZzZXQgY29uZmlncyBldmVuIHRob3VnaCBpdCBhbHJlYWR5IHByb3ZpZGUgdGhlc2UgcHJvcGVydGllc1xyXG4gICAgICAvLyBvZmZzZXRZOiAtMTAsXHJcbiAgICAgIG9yaWdpblg6ICdzdGFydCcsXHJcbiAgICAgIG9yaWdpblk6ICd0b3AnLFxyXG4gICAgICBvdmVybGF5WDogJ3N0YXJ0JyxcclxuICAgICAgb3ZlcmxheVk6ICd0b3AnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBvcmlnaW5YOiAnc3RhcnQnLFxyXG4gICAgICBvcmlnaW5ZOiAnYm90dG9tJyxcclxuICAgICAgb3ZlcmxheVg6ICdzdGFydCcsXHJcbiAgICAgIG92ZXJsYXlZOiAnYm90dG9tJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgb3JpZ2luWDogJ2VuZCcsXHJcbiAgICAgIG9yaWdpblk6ICd0b3AnLFxyXG4gICAgICBvdmVybGF5WDogJ2VuZCcsXHJcbiAgICAgIG92ZXJsYXlZOiAndG9wJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgb3JpZ2luWDogJ2VuZCcsXHJcbiAgICAgIG9yaWdpblk6ICdib3R0b20nLFxyXG4gICAgICBvdmVybGF5WDogJ2VuZCcsXHJcbiAgICAgIG92ZXJsYXlZOiAnYm90dG9tJ1xyXG4gICAgfVxyXG4gIF0gYXMgQ29ubmVjdGlvblBvc2l0aW9uUGFpcltdO1xyXG4gIGRyb3Bkb3duQW5pbWF0aW9uOiAndG9wJyB8ICdib3R0b20nID0gJ2JvdHRvbSc7XHJcbiAgY3VycmVudFBvc2l0aW9uWDogJ3N0YXJ0JyB8ICdlbmQnID0gJ3N0YXJ0JztcclxuICBjdXJyZW50UG9zaXRpb25ZOiAndG9wJyB8ICdib3R0b20nID0gJ3RvcCc7XHJcblxyXG4gIGdldCByZWFsT3BlblN0YXRlKCk6IGJvb2xlYW4ge1xyXG4gICAgLy8gVGhlIHZhbHVlIHRoYXQgcmVhbGx5IGRlY2lkZSB0aGUgb3BlbiBzdGF0ZSBvZiBvdmVybGF5XHJcbiAgICByZXR1cm4gdGhpcy5pc09wZW5IYW5kbGVkQnlVc2VyKCkgPyAhIXRoaXMub3BlbiA6IHRoaXMub3ZlcmxheU9wZW47XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGVIZWxwZXI6IERhdGVIZWxwZXJTZXJ2aWNlLCBwcml2YXRlIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZikge31cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuYXV0b0ZvY3VzKSB7XHJcbiAgICAgIHRoaXMuZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLm9wZW4pIHtcclxuICAgICAgdGhpcy5hbmltYXRpb25TdGFydCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9jdXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgIGNvbnN0IGZpcnN0SW5wdXQgPSAodGhpcy5waWNrZXJJbnB1dC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5xdWVyeVNlbGVjdG9yKCdpbnB1dDpmaXJzdC1jaGlsZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgIGZpcnN0SW5wdXQuZm9jdXMoKTsgLy8gRm9jdXMgb24gdGhlIGZpcnN0IGlucHV0XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnBpY2tlcklucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFNob3cgb3ZlcmxheSBjb250ZW50XHJcbiAgc2hvd092ZXJsYXkoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMucmVhbE9wZW5TdGF0ZSkge1xyXG4gICAgICB0aGlzLm92ZXJsYXlPcGVuID0gdHJ1ZTtcclxuICAgICAgdGhpcy5hbmltYXRpb25TdGFydCgpO1xyXG4gICAgICB0aGlzLm9wZW5DaGFuZ2UuZW1pdCh0aGlzLm92ZXJsYXlPcGVuKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheSAmJiB0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkub3ZlcmxheVJlZikge1xyXG4gICAgICAgICAgdGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5Lm92ZXJsYXlSZWYudXBkYXRlUG9zaXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGlkZU92ZXJsYXkoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5yZWFsT3BlblN0YXRlKSB7XHJcbiAgICAgIHRoaXMub3ZlcmxheU9wZW4gPSBmYWxzZTtcclxuICAgICAgdGhpcy5vcGVuQ2hhbmdlLmVtaXQodGhpcy5vdmVybGF5T3Blbik7XHJcbiAgICAgIHRoaXMuZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ2xpY2tJbnB1dEJveCgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiAhdGhpcy5pc09wZW5IYW5kbGVkQnlVc2VyKCkpIHtcclxuICAgICAgdGhpcy5zaG93T3ZlcmxheSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DbGlja0JhY2tkcm9wKCk6IHZvaWQge1xyXG4gICAgdGhpcy5oaWRlT3ZlcmxheSgpO1xyXG4gIH1cclxuXHJcbiAgb25PdmVybGF5RGV0YWNoKCk6IHZvaWQge1xyXG4gICAgdGhpcy5oaWRlT3ZlcmxheSgpO1xyXG4gIH1cclxuXHJcbiAgLy8gTk9URTogQSBpc3N1ZSBoZXJlLCB0aGUgZmlyc3QgdGltZSBwb3NpdGlvbiBjaGFuZ2UsIHRoZSBhbmltYXRpb24gd2lsbCBub3QgYmUgdHJpZ2dlcmVkLlxyXG4gIC8vIEJlY2F1c2UgdGhlIG92ZXJsYXkncyBcInBvc2l0aW9uQ2hhbmdlXCIgZXZlbnQgaXMgZW1pdHRlZCBhZnRlciB0aGUgY29udGVudCdzIGZ1bGwgc2hvd24gdXAuXHJcbiAgLy8gQWxsIG90aGVyIGNvbXBvbmVudHMgbGlrZSBcIm56LWRyb3Bkb3duXCIgd2hpY2ggZGVwZW5kcyBvbiBvdmVybGF5IGFsc28gaGFzIHRoZSBzYW1lIGlzc3VlLlxyXG4gIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvaXNzdWVzLzE0MjlcclxuICBvblBvc2l0aW9uQ2hhbmdlKHBvc2l0aW9uOiBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UpOiB2b2lkIHtcclxuICAgIHRoaXMuZHJvcGRvd25BbmltYXRpb24gPSBwb3NpdGlvbi5jb25uZWN0aW9uUGFpci5vcmlnaW5ZID09PSAndG9wJyA/ICdib3R0b20nIDogJ3RvcCc7XHJcbiAgICB0aGlzLmN1cnJlbnRQb3NpdGlvblggPSBwb3NpdGlvbi5jb25uZWN0aW9uUGFpci5vcmlnaW5YIGFzICdzdGFydCcgfCAnZW5kJztcclxuICAgIHRoaXMuY3VycmVudFBvc2l0aW9uWSA9IHBvc2l0aW9uLmNvbm5lY3Rpb25QYWlyLm9yaWdpblkgYXMgJ3RvcCcgfCAnYm90dG9tJztcclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpOyAvLyBUYWtlIHNpZGUtZWZmZWN0cyB0byBwb3NpdGlvbiBzdHlsZXNcclxuICB9XHJcblxyXG4gIG9uQ2xpY2tDbGVhcihldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgIHRoaXMudmFsdWUgPSB0aGlzLmlzUmFuZ2UgPyBbXSA6IG51bGw7XHJcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXRSZWFkYWJsZVZhbHVlKHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IHN0cmluZyB8IG51bGwge1xyXG4gICAgbGV0IHZhbHVlOiBDYW5keURhdGU7XHJcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgIHZhbHVlID0gKHRoaXMudmFsdWUgYXMgQ2FuZHlEYXRlW10pW3RoaXMuZ2V0UGFydFR5cGVJbmRleChwYXJ0VHlwZSBhcyBSYW5nZVBhcnRUeXBlKV07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YWx1ZSA9IHRoaXMudmFsdWUgYXMgQ2FuZHlEYXRlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbHVlID8gdGhpcy5kYXRlSGVscGVyLmZvcm1hdCh2YWx1ZS5uYXRpdmVEYXRlLCB0aGlzLmZvcm1hdCkgOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgZ2V0UGFydFR5cGVJbmRleChwYXJ0VHlwZTogUmFuZ2VQYXJ0VHlwZSk6IG51bWJlciB7XHJcbiAgICByZXR1cm4geyBsZWZ0OiAwLCByaWdodDogMSB9W3BhcnRUeXBlXTtcclxuICB9XHJcblxyXG4gIGdldFBsYWNlaG9sZGVyKHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1JhbmdlID8gdGhpcy5wbGFjZWhvbGRlclt0aGlzLmdldFBhcnRUeXBlSW5kZXgocGFydFR5cGUhKV0gOiAodGhpcy5wbGFjZWhvbGRlciBhcyBzdHJpbmcpO1xyXG4gIH1cclxuXHJcbiAgaXNFbXB0eVZhbHVlKHZhbHVlOiBDYW5keURhdGVbXSB8IENhbmR5RGF0ZSB8IG51bGwpOiBib29sZWFuIHtcclxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgIHJldHVybiAhdmFsdWUgfHwgIUFycmF5LmlzQXJyYXkodmFsdWUpIHx8IHZhbHVlLmV2ZXJ5KHZhbCA9PiAhdmFsKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAhdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBXaGV0aGVyIG9wZW4gc3RhdGUgaXMgcGVybWFuZW50bHkgY29udHJvbGxlZCBieSB1c2VyIGhpbXNlbGZcclxuICBpc09wZW5IYW5kbGVkQnlVc2VyKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMub3BlbiAhPT0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgYW5pbWF0aW9uU3RhcnQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5yZWFsT3BlblN0YXRlKSB7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uT3BlblN0YXRlID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFuaW1hdGlvbkRvbmUoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMucmVhbE9wZW5TdGF0ZSkge1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbk9wZW5TdGF0ZSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgUmFuZ2VQYXJ0VHlwZSA9ICdsZWZ0JyB8ICdyaWdodCc7XHJcbiIsIjxzcGFuXHJcbiAgY2RrT3ZlcmxheU9yaWdpblxyXG4gICNvcmlnaW49XCJjZGtPdmVybGF5T3JpZ2luXCJcclxuICBjbGFzcz1cInt7IHByZWZpeENscyB9fS1waWNrZXIge3sgc2l6ZSA/IHByZWZpeENscyArICctcGlja2VyLScgKyBzaXplIDogJycgfX0ge3sgY2xhc3NOYW1lIH19XCJcclxuICBbbmdTdHlsZV09XCJzdHlsZVwiXHJcbiAgdGFiaW5kZXg9XCIwXCJcclxuICAoY2xpY2spPVwib25DbGlja0lucHV0Qm94KClcIlxyXG4gIChrZXl1cC5lbnRlcik9XCJvbkNsaWNrSW5wdXRCb3goKVwiXHJcbj5cclxuICA8IS0tIENvbnRlbnQgb2Ygc2luZ2xlIHBpY2tlciAtLT5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWlzUmFuZ2VcIj5cclxuICAgIDxpbnB1dFxyXG4gICAgICAjcGlja2VySW5wdXRcclxuICAgICAgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tcGlja2VyLWlucHV0IGFudC1pbnB1dFwiXHJcbiAgICAgIFtjbGFzcy5hbnQtaW5wdXQtbGddPVwic2l6ZSA9PT0gJ2xhcmdlJ1wiXHJcbiAgICAgIFtjbGFzcy5hbnQtaW5wdXQtc21dPVwic2l6ZSA9PT0gJ3NtYWxsJ1wiXHJcbiAgICAgIFtjbGFzcy5hbnQtaW5wdXQtZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICByZWFkb25seVxyXG4gICAgICB2YWx1ZT1cInt7IGdldFJlYWRhYmxlVmFsdWUoKSB9fVwiXHJcbiAgICAgIHBsYWNlaG9sZGVyPVwie3sgZ2V0UGxhY2Vob2xkZXIoKSB9fVwiXHJcbiAgICAvPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRwbFJpZ2h0UmVzdFwiPjwvbmctY29udGFpbmVyPlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG5cclxuICA8IS0tIENvbnRlbnQgb2YgcmFuZ2UgcGlja2VyIC0tPlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc1JhbmdlXCI+XHJcbiAgICA8c3BhblxyXG4gICAgICAjcGlja2VySW5wdXRcclxuICAgICAgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tcGlja2VyLWlucHV0IGFudC1pbnB1dFwiXHJcbiAgICAgIFtjbGFzcy5hbnQtaW5wdXQtbGddPVwic2l6ZSA9PT0gJ2xhcmdlJ1wiXHJcbiAgICAgIFtjbGFzcy5hbnQtaW5wdXQtc21dPVwic2l6ZSA9PT0gJ3NtYWxsJ1wiXHJcbiAgICAgIFtjbGFzcy5hbnQtaW5wdXQtZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidHBsUmFuZ2VJbnB1dDsgY29udGV4dDogeyBwYXJ0VHlwZTogJ2xlZnQnIH1cIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tcmFuZ2UtcGlja2VyLXNlcGFyYXRvclwiPiB+IDwvc3Bhbj5cclxuICAgICAgPG5nLWNvbnRhaW5lclxyXG4gICAgICAgICpuZ1RlbXBsYXRlT3V0bGV0PVwidHBsUmFuZ2VJbnB1dDsgY29udGV4dDogeyBwYXJ0VHlwZTogJ3JpZ2h0JyB9XCJcclxuICAgICAgPjwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidHBsUmlnaHRSZXN0XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICA8L3NwYW4+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbjwvc3Bhbj5cclxuXHJcbjwhLS0gSW5wdXQgZm9yIFJhbmdlIE9OTFkgLS0+XHJcbjxuZy10ZW1wbGF0ZSAjdHBsUmFuZ2VJbnB1dCBsZXQtcGFydFR5cGU9XCJwYXJ0VHlwZVwiPlxyXG4gIDxpbnB1dFxyXG4gICAgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tcmFuZ2UtcGlja2VyLWlucHV0XCJcclxuICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICByZWFkb25seVxyXG4gICAgdmFsdWU9XCJ7eyBnZXRSZWFkYWJsZVZhbHVlKHBhcnRUeXBlKSB9fVwiXHJcbiAgICBwbGFjZWhvbGRlcj1cInt7IGdldFBsYWNlaG9sZGVyKHBhcnRUeXBlKSB9fVwiXHJcbiAgLz5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjwhLS0gUmlnaHQgb3BlcmF0b3IgaWNvbnMgLS0+XHJcbjxuZy10ZW1wbGF0ZSAjdHBsUmlnaHRSZXN0PlxyXG4gIDxpXHJcbiAgICBuei1pY29uXHJcbiAgICBuelR5cGU9XCJjbG9zZS1jaXJjbGVcIlxyXG4gICAgbnpUaGVtZT1cImZpbGxcIlxyXG4gICAgKm5nSWY9XCIhZGlzYWJsZWQgJiYgIWlzRW1wdHlWYWx1ZSh2YWx1ZSkgJiYgYWxsb3dDbGVhclwiXHJcbiAgICBjbGFzcz1cInt7IHByZWZpeENscyB9fS1waWNrZXItY2xlYXJcIlxyXG4gICAgKGNsaWNrKT1cIm9uQ2xpY2tDbGVhcigkZXZlbnQpXCJcclxuICA+PC9pPlxyXG4gIDxzcGFuIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LXBpY2tlci1pY29uXCI+XHJcbiAgICA8aSBuei1pY29uIG56VHlwZT1cImNhbGVuZGFyXCI+PC9pPlxyXG4gIDwvc3Bhbj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjwhLS0gT3ZlcmxheSAtLT5cclxuPG5nLXRlbXBsYXRlXHJcbiAgY2RrQ29ubmVjdGVkT3ZlcmxheVxyXG4gIG56Q29ubmVjdGVkT3ZlcmxheVxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5T3JpZ2luXT1cIm9yaWdpblwiXHJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcGVuXT1cInJlYWxPcGVuU3RhdGVcIlxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5SGFzQmFja2Ryb3BdPVwiIWlzT3BlbkhhbmRsZWRCeVVzZXIoKVwiXHJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbnNdPVwib3ZlcmxheVBvc2l0aW9uc1wiXHJcbiAgKHBvc2l0aW9uQ2hhbmdlKT1cIm9uUG9zaXRpb25DaGFuZ2UoJGV2ZW50KVwiXHJcbiAgKGJhY2tkcm9wQ2xpY2spPVwib25DbGlja0JhY2tkcm9wKClcIlxyXG4gIChkZXRhY2gpPVwib25PdmVybGF5RGV0YWNoKClcIlxyXG4+XHJcbiAgPGRpdlxyXG4gICAgW256Tm9BbmltYXRpb25dPVwibm9BbmltYXRpb25cIlxyXG4gICAgW0BzbGlkZU1vdGlvbl09XCJkcm9wZG93bkFuaW1hdGlvblwiXHJcbiAgICAoQHNsaWRlTW90aW9uLmRvbmUpPVwiYW5pbWF0aW9uRG9uZSgpXCJcclxuICAgIHN0eWxlPVwicG9zaXRpb246IHJlbGF0aXZlO1wiXHJcbiAgICBbc3R5bGUubGVmdF09XCJjdXJyZW50UG9zaXRpb25YID09PSAnc3RhcnQnID8gJy0ycHgnIDogJzJweCdcIlxyXG4gICAgW3N0eWxlLnRvcF09XCJjdXJyZW50UG9zaXRpb25ZID09PSAndG9wJyA/ICctMnB4JyA6ICcycHgnXCJcclxuICA+XHJcbiAgICA8IS0tIENvbXBhdGlibGUgZm9yIG92ZXJsYXkgdGhhdCBub3Qgc3VwcG9ydCBvZmZzZXQgZHluYW1pY2FsbHkgYW5kIGltbWVkaWF0ZWx5IC0tPlxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIDwvZGl2PlxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=
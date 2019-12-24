import { __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { InputBoolean, NzNoAnimationDirective, toBoolean, valueFunctionProp } from 'ng-zorro-antd/core';
import { DateHelperService, NzI18nService } from 'ng-zorro-antd/i18n';
import { AbstractPickerComponent } from './abstract-picker.component';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/i18n";
import * as i2 from "ng-zorro-antd/core";
export class DateRangePickerComponent extends AbstractPickerComponent {
    constructor(i18n, cdr, dateHelper, noAnimation) {
        super(i18n, cdr, dateHelper, noAnimation);
        this.showWeek = false; // Should show as week picker
        this.nzShowToday = true;
        this.nzOnPanelChange = new EventEmitter();
        this.nzOnCalendarChange = new EventEmitter();
        this.nzOnOk = new EventEmitter();
    }
    get nzShowTime() {
        return this._showTime;
    }
    set nzShowTime(value) {
        this._showTime = typeof value === 'object' ? value : toBoolean(value);
    }
    get realShowToday() {
        // Range not support nzShowToday currently
        return !this.isRange && this.nzShowToday;
    }
    ngOnInit() {
        super.ngOnInit();
        // Default format when it's empty
        if (!this.nzFormat) {
            if (this.showWeek) {
                this.nzFormat = this.dateHelper.relyOnDatePipe ? 'yyyy-ww' : 'YYYY-WW'; // Format for week
            }
            else {
                if (this.dateHelper.relyOnDatePipe) {
                    this.nzFormat = this.nzShowTime ? 'yyyy-MM-dd HH:mm:ss' : 'yyyy-MM-dd';
                }
                else {
                    this.nzFormat = this.nzShowTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD';
                }
            }
        }
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        if (changes.nzRenderExtraFooter) {
            this.extraFooter = valueFunctionProp(this.nzRenderExtraFooter);
        }
        if (changes.nzShowTime || changes.nzStyle) {
            this.setFixedPickerStyle();
        }
    }
    /**
     * If user press 'Enter' in input box or `nzShowTime` is false, overlay will close.
     */
    onValueChange(value, isEnter = false) {
        super.onValueChange(value);
        if (!this.nzShowTime || isEnter) {
            this.closeOverlay();
        }
    }
    // Emit nzOnCalendarChange when select date by nz-range-picker
    onCalendarChange(value) {
        if (this.isRange) {
            const rangeValue = value.map(x => x.nativeDate);
            this.nzOnCalendarChange.emit(rangeValue);
        }
    }
    // Emitted when done with date selecting
    onResultOk() {
        if (this.isRange) {
            const value = this.nzValue;
            if (value.length) {
                this.nzOnOk.emit([value[0].nativeDate, value[1].nativeDate]);
            }
            else {
                this.nzOnOk.emit([]);
            }
        }
        else {
            if (this.nzValue) {
                this.nzOnOk.emit(this.nzValue.nativeDate);
            }
            else {
                this.nzOnOk.emit(null);
            }
        }
        this.closeOverlay();
    }
    onOpenChange(open) {
        this.nzOnOpenChange.emit(open);
    }
    // Setup fixed style for picker
    setFixedPickerStyle() {
        const showTimeFixes = {};
        if (this.nzShowTime) {
            showTimeFixes.width = this.isRange ? '350px' : '195px';
        }
        this.pickerStyle = Object.assign(Object.assign({}, showTimeFixes), this.nzStyle);
    }
}
/** @nocollapse */ DateRangePickerComponent.ɵfac = function DateRangePickerComponent_Factory(t) { return new (t || DateRangePickerComponent)(i0.ɵɵdirectiveInject(i1.NzI18nService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.DateHelperService), i0.ɵɵdirectiveInject(i2.NzNoAnimationDirective)); };
/** @nocollapse */ DateRangePickerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DateRangePickerComponent, selectors: [["ng-component"]], inputs: { nzDateRender: "nzDateRender", nzDisabledTime: "nzDisabledTime", nzRenderExtraFooter: "nzRenderExtraFooter", nzShowToday: "nzShowToday", nzMode: "nzMode", nzRanges: "nzRanges", nzShowTime: "nzShowTime" }, outputs: { nzOnPanelChange: "nzOnPanelChange", nzOnCalendarChange: "nzOnCalendarChange", nzOnOk: "nzOnOk" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature()], decls: 0, vars: 0, template: function DateRangePickerComponent_Template(rf, ctx) { }, encapsulation: 2 });
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], DateRangePickerComponent.prototype, "nzShowToday", void 0);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DateRangePickerComponent, [{
        type: Component,
        args: [{
                template: `` // Just for rollup
            }]
    }], function () { return [{ type: i1.NzI18nService }, { type: i0.ChangeDetectorRef }, { type: i1.DateHelperService }, { type: i2.NzNoAnimationDirective }]; }, { nzDateRender: [{
            type: Input
        }], nzDisabledTime: [{
            type: Input
        }], nzRenderExtraFooter: [{
            type: Input
        }], nzShowToday: [{
            type: Input
        }], nzMode: [{
            type: Input
        }], nzRanges: [{
            type: Input
        }], nzOnPanelChange: [{
            type: Output
        }], nzOnCalendarChange: [{
            type: Output
        }], nzShowTime: [{
            type: Input
        }], nzOnOk: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9kYXRlLXBpY2tlci8iLCJzb3VyY2VzIjpbImRhdGUtcmFuZ2UtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQThCLE1BQU0sZUFBZSxDQUFDO0FBRXpJLE9BQU8sRUFBMkIsWUFBWSxFQUFFLHNCQUFzQixFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2pJLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV0RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7OztBQU10RSxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsdUJBQXVCO0lBOEJuRSxZQUFZLElBQW1CLEVBQUUsR0FBc0IsRUFBRSxVQUE2QixFQUFFLFdBQW9DO1FBQzFILEtBQUssQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQztRQTlCNUMsYUFBUSxHQUFZLEtBQUssQ0FBQyxDQUFDLDZCQUE2QjtRQUsvQixnQkFBVyxHQUFZLElBQUksQ0FBQztRQUdsQyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUEyQixDQUFDO1FBQzlELHVCQUFrQixHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFVaEQsV0FBTSxHQUFHLElBQUksWUFBWSxFQUF5QixDQUFDO0lBWXRFLENBQUM7SUFuQkQsSUFBYSxVQUFVO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxVQUFVLENBQUMsS0FBdUI7UUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFP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SSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDeEI7U0FDRjtRQUNELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsWUFBWSxDQUFDLElBQWE7UUFDeEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELCtCQUErQjtJQUN2QixtQkFBbUI7UUFDekIsTUFBTSxhQUFhLEdBQXVCLEVBQUUsQ0FBQztRQUM3QyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsYUFBYSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztTQUN4RDtRQUVELElBQUksQ0FBQyxXQUFXLG1DQUFRLGFBQWEsR0FBSyxJQUFJLENBQUMsT0FBTyxDQUFFLENBQUM7SUFDM0QsQ0FBQzs7Z0dBakhVLHdCQUF3Qjs2REFBeEIsd0JBQXdCO0FBTVY7SUFBZixZQUFZLEVBQUU7OzZEQUE2QjtrREFOMUMsd0JBQXdCO2NBSHBDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsRUFBRSxDQUFDLGtCQUFrQjthQUNoQzs7a0JBSUUsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsTUFBTTs7a0JBQ04sTUFBTTs7a0JBR04sS0FBSzs7a0JBT0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcywgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IENhbmR5RGF0ZSwgRnVuY3Rpb25Qcm9wLCBJbnB1dEJvb2xlYW4sIE56Tm9BbmltYXRpb25EaXJlY3RpdmUsIHRvQm9vbGVhbiwgdmFsdWVGdW5jdGlvblByb3AgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRlSGVscGVyU2VydmljZSwgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcblxyXG5pbXBvcnQgeyBBYnN0cmFjdFBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vYWJzdHJhY3QtcGlja2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbXBhdGlibGVEYXRlLCBEaXNhYmxlZFRpbWVGbiwgUGFuZWxNb2RlLCBQcmVzZXRSYW5nZXMgfSBmcm9tICcuL3N0YW5kYXJkLXR5cGVzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHRlbXBsYXRlOiBgYCAvLyBKdXN0IGZvciByb2xsdXBcclxufSlcclxuZXhwb3J0IGNsYXNzIERhdGVSYW5nZVBpY2tlckNvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0UGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIHNob3dXZWVrOiBib29sZWFuID0gZmFsc2U7IC8vIFNob3VsZCBzaG93IGFzIHdlZWsgcGlja2VyXHJcblxyXG4gIEBJbnB1dCgpIG56RGF0ZVJlbmRlcjogRnVuY3Rpb25Qcm9wPFRlbXBsYXRlUmVmPERhdGU+IHwgc3RyaW5nPjtcclxuICBASW5wdXQoKSBuekRpc2FibGVkVGltZTogRGlzYWJsZWRUaW1lRm47XHJcbiAgQElucHV0KCkgbnpSZW5kZXJFeHRyYUZvb3RlcjogRnVuY3Rpb25Qcm9wPFRlbXBsYXRlUmVmPHZvaWQ+IHwgc3RyaW5nPjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93VG9kYXk6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIG56TW9kZTogUGFuZWxNb2RlIHwgUGFuZWxNb2RlW107XHJcbiAgQElucHV0KCkgbnpSYW5nZXM6IFByZXNldFJhbmdlcztcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPblBhbmVsQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxQYW5lbE1vZGUgfCBQYW5lbE1vZGVbXT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkNhbGVuZGFyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlW10+KCk7XHJcblxyXG4gIHByaXZhdGUgX3Nob3dUaW1lOiBvYmplY3QgfCBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGdldCBuelNob3dUaW1lKCk6IG9iamVjdCB8IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Nob3dUaW1lO1xyXG4gIH1cclxuICBzZXQgbnpTaG93VGltZSh2YWx1ZTogb2JqZWN0IHwgYm9vbGVhbikge1xyXG4gICAgdGhpcy5fc2hvd1RpbWUgPSB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnID8gdmFsdWUgOiB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25PayA9IG5ldyBFdmVudEVtaXR0ZXI8Q29tcGF0aWJsZURhdGUgfCBudWxsPigpO1xyXG5cclxuICBnZXQgcmVhbFNob3dUb2RheSgpOiBib29sZWFuIHtcclxuICAgIC8vIFJhbmdlIG5vdCBzdXBwb3J0IG56U2hvd1RvZGF5IGN1cnJlbnRseVxyXG4gICAgcmV0dXJuICF0aGlzLmlzUmFuZ2UgJiYgdGhpcy5uelNob3dUb2RheTtcclxuICB9XHJcblxyXG4gIHBpY2tlclN0eWxlOiBvYmplY3Q7IC8vIEZpbmFsIHBpY2tlciBzdHlsZSB0aGF0IGNvbnRhaW5zIHdpZHRoIGZpeCBjb3JyZWN0aW9ucyBldGMuXHJcbiAgZXh0cmFGb290ZXI6IFRlbXBsYXRlUmVmPHZvaWQ+IHwgc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihpMThuOiBOekkxOG5TZXJ2aWNlLCBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBkYXRlSGVscGVyOiBEYXRlSGVscGVyU2VydmljZSwgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlKSB7XHJcbiAgICBzdXBlcihpMThuLCBjZHIsIGRhdGVIZWxwZXIsIG5vQW5pbWF0aW9uKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgc3VwZXIubmdPbkluaXQoKTtcclxuXHJcbiAgICAvLyBEZWZhdWx0IGZvcm1hdCB3aGVuIGl0J3MgZW1wdHlcclxuICAgIGlmICghdGhpcy5uekZvcm1hdCkge1xyXG4gICAgICBpZiAodGhpcy5zaG93V2Vlaykge1xyXG4gICAgICAgIHRoaXMubnpGb3JtYXQgPSB0aGlzLmRhdGVIZWxwZXIucmVseU9uRGF0ZVBpcGUgPyAneXl5eS13dycgOiAnWVlZWS1XVyc7IC8vIEZvcm1hdCBmb3Igd2Vla1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGVIZWxwZXIucmVseU9uRGF0ZVBpcGUpIHtcclxuICAgICAgICAgIHRoaXMubnpGb3JtYXQgPSB0aGlzLm56U2hvd1RpbWUgPyAneXl5eS1NTS1kZCBISDptbTpzcycgOiAneXl5eS1NTS1kZCc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMubnpGb3JtYXQgPSB0aGlzLm56U2hvd1RpbWUgPyAnWVlZWS1NTS1ERCBISDptbTpzcycgOiAnWVlZWS1NTS1ERCc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBzdXBlci5uZ09uQ2hhbmdlcyhjaGFuZ2VzKTtcclxuXHJcbiAgICBpZiAoY2hhbmdlcy5uelJlbmRlckV4dHJhRm9vdGVyKSB7XHJcbiAgICAgIHRoaXMuZXh0cmFGb290ZXIgPSB2YWx1ZUZ1bmN0aW9uUHJvcCh0aGlzLm56UmVuZGVyRXh0cmFGb290ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VzLm56U2hvd1RpbWUgfHwgY2hhbmdlcy5uelN0eWxlKSB7XHJcbiAgICAgIHRoaXMuc2V0Rml4ZWRQaWNrZXJTdHlsZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSWYgdXNlciBwcmVzcyAnRW50ZXInIGluIGlucHV0IGJveCBvciBgbnpTaG93VGltZWAgaXMgZmFsc2UsIG92ZXJsYXkgd2lsbCBjbG9zZS5cclxuICAgKi9cclxuICBvblZhbHVlQ2hhbmdlKHZhbHVlOiBDYW5keURhdGUsIGlzRW50ZXI6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgc3VwZXIub25WYWx1ZUNoYW5nZSh2YWx1ZSk7XHJcblxyXG4gICAgaWYgKCF0aGlzLm56U2hvd1RpbWUgfHwgaXNFbnRlcikge1xyXG4gICAgICB0aGlzLmNsb3NlT3ZlcmxheSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gRW1pdCBuek9uQ2FsZW5kYXJDaGFuZ2Ugd2hlbiBzZWxlY3QgZGF0ZSBieSBuei1yYW5nZS1waWNrZXJcclxuICBvbkNhbGVuZGFyQ2hhbmdlKHZhbHVlOiBDYW5keURhdGVbXSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xyXG4gICAgICBjb25zdCByYW5nZVZhbHVlID0gdmFsdWUubWFwKHggPT4geC5uYXRpdmVEYXRlKTtcclxuICAgICAgdGhpcy5uek9uQ2FsZW5kYXJDaGFuZ2UuZW1pdChyYW5nZVZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEVtaXR0ZWQgd2hlbiBkb25lIHdpdGggZGF0ZSBzZWxlY3RpbmdcclxuICBvblJlc3VsdE9rKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMubnpWYWx1ZSBhcyBDYW5keURhdGVbXTtcclxuICAgICAgaWYgKHZhbHVlLmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMubnpPbk9rLmVtaXQoW3ZhbHVlWzBdLm5hdGl2ZURhdGUsIHZhbHVlWzFdLm5hdGl2ZURhdGVdKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLm56T25Pay5lbWl0KFtdKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMubnpWYWx1ZSkge1xyXG4gICAgICAgIHRoaXMubnpPbk9rLmVtaXQoKHRoaXMubnpWYWx1ZSBhcyBDYW5keURhdGUpLm5hdGl2ZURhdGUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMubnpPbk9rLmVtaXQobnVsbCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuY2xvc2VPdmVybGF5KCk7XHJcbiAgfVxyXG5cclxuICBvbk9wZW5DaGFuZ2Uob3BlbjogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5uek9uT3BlbkNoYW5nZS5lbWl0KG9wZW4pO1xyXG4gIH1cclxuXHJcbiAgLy8gU2V0dXAgZml4ZWQgc3R5bGUgZm9yIHBpY2tlclxyXG4gIHByaXZhdGUgc2V0Rml4ZWRQaWNrZXJTdHlsZSgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHNob3dUaW1lRml4ZXM6IHsgd2lkdGg/OiBzdHJpbmcgfSA9IHt9O1xyXG4gICAgaWYgKHRoaXMubnpTaG93VGltZSkge1xyXG4gICAgICBzaG93VGltZUZpeGVzLndpZHRoID0gdGhpcy5pc1JhbmdlID8gJzM1MHB4JyA6ICcxOTVweCc7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5waWNrZXJTdHlsZSA9IHsgLi4uc2hvd1RpbWVGaXhlcywgLi4udGhpcy5uelN0eWxlIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==
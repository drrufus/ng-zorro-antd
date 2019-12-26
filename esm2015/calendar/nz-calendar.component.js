/**
 * @fileoverview added by tsickle
 * Generated from: nz-calendar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, EventEmitter, HostBinding, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { toBoolean, warnDeprecation, CandyDate, InputBoolean } from 'ng-zorro-antd/core';
import { NzDateCellDirective as DateCell, NzDateFullCellDirective as DateFullCell, NzMonthCellDirective as MonthCell, NzMonthFullCellDirective as MonthFullCell } from './nz-calendar-cells';
export class NzCalendarComponent {
    /**
     * @param {?} cdr
     */
    constructor(cdr) {
        this.cdr = cdr;
        this.activeDate = new CandyDate();
        this.prefixCls = 'ant-fullcalendar';
        this.onChangeFn = (/**
         * @return {?}
         */
        () => { });
        this.onTouchFn = (/**
         * @return {?}
         */
        () => { });
        this.nzMode = 'month';
        this.nzModeChange = new EventEmitter();
        this.nzPanelChange = new EventEmitter();
        this.nzSelectChange = new EventEmitter();
        this.nzValueChange = new EventEmitter();
        this.nzFullscreen = true;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzValue(value) {
        this.updateDate(new CandyDate(value), false);
    }
    /**
     * @return {?}
     */
    get dateCell() {
        return this.nzDateCell || this.nzDateCellChild;
    }
    /**
     * @return {?}
     */
    get dateFullCell() {
        return this.nzDateFullCell || this.nzDateFullCellChild;
    }
    /**
     * @return {?}
     */
    get monthCell() {
        return this.nzMonthCell || this.nzMonthCellChild;
    }
    /**
     * @return {?}
     */
    get monthFullCell() {
        return this.nzMonthFullCell || this.nzMonthFullCellChild;
    }
    /**
     * @deprecated use `[nzFullscreen]` instead.
     * @param {?} value
     * @return {?}
     */
    set nzCard(value) {
        warnDeprecation(`'nzCard' is going to be removed in 9.0.0. Please use 'nzFullscreen' instead.`);
        this.nzFullscreen = !toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzCard() {
        return !this.nzFullscreen;
    }
    /**
     * @param {?} mode
     * @return {?}
     */
    onModeChange(mode) {
        this.nzModeChange.emit(mode);
        this.nzPanelChange.emit({ date: this.activeDate.nativeDate, mode });
    }
    /**
     * @param {?} year
     * @return {?}
     */
    onYearSelect(year) {
        /** @type {?} */
        const date = this.activeDate.setYear(year);
        this.updateDate(date);
    }
    /**
     * @param {?} month
     * @return {?}
     */
    onMonthSelect(month) {
        /** @type {?} */
        const date = this.activeDate.setMonth(month);
        this.updateDate(date);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    onDateSelect(date) {
        // Only activeDate is enough in calendar
        // this.value = date;
        this.updateDate(date);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.updateDate(new CandyDate((/** @type {?} */ (value))), false);
        this.cdr.markForCheck();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangeFn = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouchFn = fn;
    }
    /**
     * @private
     * @param {?} date
     * @param {?=} touched
     * @return {?}
     */
    updateDate(date, touched = true) {
        this.activeDate = date;
        if (touched) {
            this.onChangeFn(date.nativeDate);
            this.onTouchFn();
            this.nzSelectChange.emit(date.nativeDate);
            this.nzValueChange.emit(date.nativeDate);
        }
    }
}
NzCalendarComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'nz-calendar',
                exportAs: 'nzCalendar',
                template: "<nz-calendar-header [fullscreen]=\"nzFullscreen\" [activeDate]=\"activeDate\" [(mode)]=\"nzMode\"\r\n  (modeChange)=\"onModeChange($event)\" (yearChange)=\"onYearSelect($event)\" (monthChange)=\"onMonthSelect($event)\">\r\n</nz-calendar-header>\r\n\r\n<div class=\"{{prefixCls}} {{prefixCls}}-full\" [class.ant-fullcalendar-fullscreen]=\"nzFullscreen\">\r\n  <div class=\"{{prefixCls}}-calendar-body\">\r\n    <ng-container *ngIf=\"nzMode === 'month' then monthModeTable else yearModeTable\"></ng-container>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #monthModeTable>\r\n  <date-table [prefixCls]=\"prefixCls\" [value]=\"activeDate\" [dateCellRender]=\"dateCell\"\r\n    [dateFullCellRender]=\"dateFullCell\" (valueChange)=\"onDateSelect($event)\"></date-table>\r\n</ng-template>\r\n\r\n<ng-template #yearModeTable>\r\n  <month-table [prefixCls]=\"prefixCls\" [value]=\"activeDate\" [monthCellRender]=\"monthCell\"\r\n    [monthFullCellRender]=\"monthFullCell\" (valueChange)=\"onDateSelect($event)\"></month-table>\r\n</ng-template>",
                providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => NzCalendarComponent)), multi: true }]
            }] }
];
/** @nocollapse */
NzCalendarComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
NzCalendarComponent.propDecorators = {
    nzMode: [{ type: Input }],
    nzModeChange: [{ type: Output }],
    nzPanelChange: [{ type: Output }],
    nzSelectChange: [{ type: Output }],
    nzValue: [{ type: Input }],
    nzValueChange: [{ type: Output }],
    nzDateCell: [{ type: Input }],
    nzDateCellChild: [{ type: ContentChild, args: [DateCell, { static: false, read: TemplateRef },] }],
    nzDateFullCell: [{ type: Input }],
    nzDateFullCellChild: [{ type: ContentChild, args: [DateFullCell, { static: false, read: TemplateRef },] }],
    nzMonthCell: [{ type: Input }],
    nzMonthCellChild: [{ type: ContentChild, args: [MonthCell, { static: false, read: TemplateRef },] }],
    nzMonthFullCell: [{ type: Input }],
    nzMonthFullCellChild: [{ type: ContentChild, args: [MonthFullCell, { static: false, read: TemplateRef },] }],
    nzFullscreen: [{ type: Input }, { type: HostBinding, args: ['class.ant-fullcalendar--fullscreen',] }],
    nzCard: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzCalendarComponent.prototype, "nzFullscreen", void 0);
if (false) {
    /** @type {?} */
    NzCalendarComponent.prototype.activeDate;
    /** @type {?} */
    NzCalendarComponent.prototype.prefixCls;
    /**
     * @type {?}
     * @private
     */
    NzCalendarComponent.prototype.onChangeFn;
    /**
     * @type {?}
     * @private
     */
    NzCalendarComponent.prototype.onTouchFn;
    /** @type {?} */
    NzCalendarComponent.prototype.nzMode;
    /** @type {?} */
    NzCalendarComponent.prototype.nzModeChange;
    /** @type {?} */
    NzCalendarComponent.prototype.nzPanelChange;
    /** @type {?} */
    NzCalendarComponent.prototype.nzSelectChange;
    /** @type {?} */
    NzCalendarComponent.prototype.nzValueChange;
    /**
     * Cannot use \@Input and \@ContentChild on one variable
     * because { static: false } will make \@Input property get delayed
     *
     * @type {?}
     */
    NzCalendarComponent.prototype.nzDateCell;
    /** @type {?} */
    NzCalendarComponent.prototype.nzDateCellChild;
    /** @type {?} */
    NzCalendarComponent.prototype.nzDateFullCell;
    /** @type {?} */
    NzCalendarComponent.prototype.nzDateFullCellChild;
    /** @type {?} */
    NzCalendarComponent.prototype.nzMonthCell;
    /** @type {?} */
    NzCalendarComponent.prototype.nzMonthCellChild;
    /** @type {?} */
    NzCalendarComponent.prototype.nzMonthFullCell;
    /** @type {?} */
    NzCalendarComponent.prototype.nzMonthFullCellChild;
    /** @type {?} */
    NzCalendarComponent.prototype.nzFullscreen;
    /**
     * @type {?}
     * @private
     */
    NzCalendarComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jYWxlbmRhci8iLCJzb3VyY2VzIjpbIm56LWNhbGVuZGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLFVBQVUsRUFDVix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6RixPQUFPLEVBQ0wsbUJBQW1CLElBQUksUUFBUSxFQUMvQix1QkFBdUIsSUFBSSxZQUFZLEVBQ3ZDLG9CQUFvQixJQUFJLFNBQVMsRUFDakMsd0JBQXdCLElBQUksYUFBYSxFQUMxQyxNQUFNLHFCQUFxQixDQUFDO0FBYTdCLE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUErRDlCLFlBQW9CLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBOUQxQyxlQUFVLEdBQWMsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUN4QyxjQUFTLEdBQVcsa0JBQWtCLENBQUM7UUFFL0IsZUFBVTs7O1FBQXlCLEdBQUcsRUFBRSxHQUFFLENBQUMsRUFBQztRQUM1QyxjQUFTOzs7UUFBZSxHQUFHLEVBQUUsR0FBRSxDQUFDLEVBQUM7UUFFaEMsV0FBTSxHQUFhLE9BQU8sQ0FBQztRQUVqQixpQkFBWSxHQUEyQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzFELGtCQUFhLEdBQWlELElBQUksWUFBWSxFQUFFLENBQUM7UUFDakYsbUJBQWMsR0FB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LHdDQUF1Qzs7Ozs7SUFFdkMseUNBQW9EOzs7OztJQUNwRCx3Q0FBeUM7O0lBRXpDLHFDQUFvQzs7SUFFcEMsMkNBQTZFOztJQUM3RSw0Q0FBb0c7O0lBQ3BHLDZDQUEyRTs7SUFLM0UsNENBQTBFOzs7Ozs7O0lBTTFFLHlDQUFrQzs7SUFDbEMsOENBQTRGOztJQUs1Riw2Q0FBc0M7O0lBQ3RDLGtEQUFvRzs7SUFLcEcsMENBQW1DOztJQUNuQywrQ0FBOEY7O0lBSzlGLDhDQUF1Qzs7SUFDdkMsbURBQXNHOztJQUt0RywyQ0FHNkI7Ozs7O0lBY2pCLGtDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBmb3J3YXJkUmVmLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyB0b0Jvb2xlYW4sIHdhcm5EZXByZWNhdGlvbiwgQ2FuZHlEYXRlLCBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIE56RGF0ZUNlbGxEaXJlY3RpdmUgYXMgRGF0ZUNlbGwsXHJcbiAgTnpEYXRlRnVsbENlbGxEaXJlY3RpdmUgYXMgRGF0ZUZ1bGxDZWxsLFxyXG4gIE56TW9udGhDZWxsRGlyZWN0aXZlIGFzIE1vbnRoQ2VsbCxcclxuICBOek1vbnRoRnVsbENlbGxEaXJlY3RpdmUgYXMgTW9udGhGdWxsQ2VsbFxyXG59IGZyb20gJy4vbnotY2FsZW5kYXItY2VsbHMnO1xyXG5cclxuZXhwb3J0IHR5cGUgTW9kZVR5cGUgPSAnbW9udGgnIHwgJ3llYXInO1xyXG5leHBvcnQgdHlwZSBEYXRlVGVtcGxhdGUgPSBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogRGF0ZSB9PjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgc2VsZWN0b3I6ICduei1jYWxlbmRhcicsXHJcbiAgZXhwb3J0QXM6ICduekNhbGVuZGFyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotY2FsZW5kYXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE56Q2FsZW5kYXJDb21wb25lbnQpLCBtdWx0aTogdHJ1ZSB9XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpDYWxlbmRhckNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcclxuICBhY3RpdmVEYXRlOiBDYW5keURhdGUgPSBuZXcgQ2FuZHlEYXRlKCk7XHJcbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW50LWZ1bGxjYWxlbmRhcic7XHJcblxyXG4gIHByaXZhdGUgb25DaGFuZ2VGbjogKGRhdGU6IERhdGUpID0+IHZvaWQgPSAoKSA9PiB7fTtcclxuICBwcml2YXRlIG9uVG91Y2hGbjogKCkgPT4gdm9pZCA9ICgpID0+IHt9O1xyXG5cclxuICBASW5wdXQoKSBuek1vZGU6IE1vZGVUeXBlID0gJ21vbnRoJztcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56TW9kZUNoYW5nZTogRXZlbnRFbWl0dGVyPE1vZGVUeXBlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpQYW5lbENoYW5nZTogRXZlbnRFbWl0dGVyPHsgZGF0ZTogRGF0ZTsgbW9kZTogTW9kZVR5cGUgfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56U2VsZWN0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8RGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBJbnB1dCgpIHNldCBuelZhbHVlKHZhbHVlOiBEYXRlKSB7XHJcbiAgICB0aGlzLnVwZGF0ZURhdGUobmV3IENhbmR5RGF0ZSh2YWx1ZSksIGZhbHNlKTtcclxuICB9XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56VmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ2Fubm90IHVzZSBASW5wdXQgYW5kIEBDb250ZW50Q2hpbGQgb24gb25lIHZhcmlhYmxlXHJcbiAgICogYmVjYXVzZSB7IHN0YXRpYzogZmFsc2UgfSB3aWxsIG1ha2UgQElucHV0IHByb3BlcnR5IGdldCBkZWxheWVkXHJcbiAgICoqL1xyXG4gIEBJbnB1dCgpIG56RGF0ZUNlbGw6IERhdGVUZW1wbGF0ZTtcclxuICBAQ29udGVudENoaWxkKERhdGVDZWxsLCB7IHN0YXRpYzogZmFsc2UsIHJlYWQ6IFRlbXBsYXRlUmVmIH0pIG56RGF0ZUNlbGxDaGlsZDogRGF0ZVRlbXBsYXRlO1xyXG4gIGdldCBkYXRlQ2VsbCgpOiBEYXRlVGVtcGxhdGUge1xyXG4gICAgcmV0dXJuIHRoaXMubnpEYXRlQ2VsbCB8fCB0aGlzLm56RGF0ZUNlbGxDaGlsZDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIG56RGF0ZUZ1bGxDZWxsOiBEYXRlVGVtcGxhdGU7XHJcbiAgQENvbnRlbnRDaGlsZChEYXRlRnVsbENlbGwsIHsgc3RhdGljOiBmYWxzZSwgcmVhZDogVGVtcGxhdGVSZWYgfSkgbnpEYXRlRnVsbENlbGxDaGlsZDogRGF0ZVRlbXBsYXRlO1xyXG4gIGdldCBkYXRlRnVsbENlbGwoKTogRGF0ZVRlbXBsYXRlIHtcclxuICAgIHJldHVybiB0aGlzLm56RGF0ZUZ1bGxDZWxsIHx8IHRoaXMubnpEYXRlRnVsbENlbGxDaGlsZDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIG56TW9udGhDZWxsOiBEYXRlVGVtcGxhdGU7XHJcbiAgQENvbnRlbnRDaGlsZChNb250aENlbGwsIHsgc3RhdGljOiBmYWxzZSwgcmVhZDogVGVtcGxhdGVSZWYgfSkgbnpNb250aENlbGxDaGlsZDogRGF0ZVRlbXBsYXRlO1xyXG4gIGdldCBtb250aENlbGwoKTogRGF0ZVRlbXBsYXRlIHtcclxuICAgIHJldHVybiB0aGlzLm56TW9udGhDZWxsIHx8IHRoaXMubnpNb250aENlbGxDaGlsZDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIG56TW9udGhGdWxsQ2VsbDogRGF0ZVRlbXBsYXRlO1xyXG4gIEBDb250ZW50Q2hpbGQoTW9udGhGdWxsQ2VsbCwgeyBzdGF0aWM6IGZhbHNlLCByZWFkOiBUZW1wbGF0ZVJlZiB9KSBuek1vbnRoRnVsbENlbGxDaGlsZDogRGF0ZVRlbXBsYXRlO1xyXG4gIGdldCBtb250aEZ1bGxDZWxsKCk6IERhdGVUZW1wbGF0ZSB7XHJcbiAgICByZXR1cm4gdGhpcy5uek1vbnRoRnVsbENlbGwgfHwgdGhpcy5uek1vbnRoRnVsbENlbGxDaGlsZDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgQElucHV0Qm9vbGVhbigpXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtZnVsbGNhbGVuZGFyLS1mdWxsc2NyZWVuJylcclxuICBuekZ1bGxzY3JlZW46IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCB1c2UgYFtuekZ1bGxzY3JlZW5dYCBpbnN0ZWFkLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56Q2FyZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgd2FybkRlcHJlY2F0aW9uKGAnbnpDYXJkJyBpcyBnb2luZyB0byBiZSByZW1vdmVkIGluIDkuMC4wLiBQbGVhc2UgdXNlICduekZ1bGxzY3JlZW4nIGluc3RlYWQuYCk7XHJcbiAgICB0aGlzLm56RnVsbHNjcmVlbiA9ICF0b0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuICBnZXQgbnpDYXJkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICF0aGlzLm56RnVsbHNjcmVlbjtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cclxuXHJcbiAgb25Nb2RlQ2hhbmdlKG1vZGU6IE1vZGVUeXBlKTogdm9pZCB7XHJcbiAgICB0aGlzLm56TW9kZUNoYW5nZS5lbWl0KG1vZGUpO1xyXG4gICAgdGhpcy5uelBhbmVsQ2hhbmdlLmVtaXQoeyBkYXRlOiB0aGlzLmFjdGl2ZURhdGUubmF0aXZlRGF0ZSwgbW9kZSB9KTtcclxuICB9XHJcblxyXG4gIG9uWWVhclNlbGVjdCh5ZWFyOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGNvbnN0IGRhdGUgPSB0aGlzLmFjdGl2ZURhdGUuc2V0WWVhcih5ZWFyKTtcclxuICAgIHRoaXMudXBkYXRlRGF0ZShkYXRlKTtcclxuICB9XHJcblxyXG4gIG9uTW9udGhTZWxlY3QobW9udGg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgY29uc3QgZGF0ZSA9IHRoaXMuYWN0aXZlRGF0ZS5zZXRNb250aChtb250aCk7XHJcbiAgICB0aGlzLnVwZGF0ZURhdGUoZGF0ZSk7XHJcbiAgfVxyXG5cclxuICBvbkRhdGVTZWxlY3QoZGF0ZTogQ2FuZHlEYXRlKTogdm9pZCB7XHJcbiAgICAvLyBPbmx5IGFjdGl2ZURhdGUgaXMgZW5vdWdoIGluIGNhbGVuZGFyXHJcbiAgICAvLyB0aGlzLnZhbHVlID0gZGF0ZTtcclxuICAgIHRoaXMudXBkYXRlRGF0ZShkYXRlKTtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IERhdGUgfCBudWxsKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZURhdGUobmV3IENhbmR5RGF0ZSh2YWx1ZSBhcyBEYXRlKSwgZmFsc2UpO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoZGF0ZTogRGF0ZSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZUZuID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoRm4gPSBmbjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlRGF0ZShkYXRlOiBDYW5keURhdGUsIHRvdWNoZWQ6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XHJcbiAgICB0aGlzLmFjdGl2ZURhdGUgPSBkYXRlO1xyXG5cclxuICAgIGlmICh0b3VjaGVkKSB7XHJcbiAgICAgIHRoaXMub25DaGFuZ2VGbihkYXRlLm5hdGl2ZURhdGUpO1xyXG4gICAgICB0aGlzLm9uVG91Y2hGbigpO1xyXG4gICAgICB0aGlzLm56U2VsZWN0Q2hhbmdlLmVtaXQoZGF0ZS5uYXRpdmVEYXRlKTtcclxuICAgICAgdGhpcy5uelZhbHVlQ2hhbmdlLmVtaXQoZGF0ZS5uYXRpdmVEYXRlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19
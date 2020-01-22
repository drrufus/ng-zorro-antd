/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jYWxlbmRhci8iLCJzb3VyY2VzIjpbIm56LWNhbGVuZGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsVUFBVSxFQUNWLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixZQUFZLEVBQ1osV0FBVyxFQUNYLEtBQUssRUFDTCxNQUFNLEVBQ04sV0FBVyxFQUNYLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3pGLE9BQU8sRUFDTCxtQkFBbUIsSUFBSSxRQUFRLEVBQy9CLHVCQUF1QixJQUFJLFlBQVksRUFDdkMsb0JBQW9CLElBQUksU0FBUyxFQUNqQyx3QkFBd0IsSUFBSSxhQUFhLEVBQzFDLE1BQU0scUJBQXFCLENBQUM7QUFhN0IsTUFBTSxPQUFPLG1CQUFtQjs7OztJQStEOUIsWUFBb0IsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUE5RDFDLGVBQVUsR0FBYyxJQUFJLFNBQVMsRUFBRSxDQUFDO1FBQ3hDLGNBQVMsR0FBVyxrQkFBa0IsQ0FBQztRQUUvQixlQUFVOzs7UUFBeUIsR0FBRyxFQUFFLEdBQUUsQ0FBQyxFQUFDO1FBQzVDLGNBQVM7OztRQUFlLEdBQUcsRUFBRSxHQUFFLENBQUMsRUFBQztRQUVoQyxXQUFNLEdBQWEsT0FBTyxDQUFDO1FBRWpCLGlCQUFZLEdBQTJCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDMUQsa0JBQWEsR0FBaUQsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqRixtQkFBYyxHQUF1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d0NBQXVDOzs7OztJQUV2Qyx5Q0FBb0Q7Ozs7O0lBQ3BELHdDQUF5Qzs7SUFFekMscUNBQW9DOztJQUVwQywyQ0FBNkU7O0lBQzdFLDRDQUFvRzs7SUFDcEcsNkNBQTJFOztJQUszRSw0Q0FBMEU7Ozs7Ozs7SUFNMUUseUNBQWtDOztJQUNsQyw4Q0FBNEY7O0lBSzVGLDZDQUFzQzs7SUFDdEMsa0RBQW9HOztJQUtwRywwQ0FBbUM7O0lBQ25DLCtDQUE4Rjs7SUFLOUYsOENBQXVDOztJQUN2QyxtREFBc0c7O0lBS3RHLDJDQUc2Qjs7Ozs7SUFjakIsa0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIGZvcndhcmRSZWYsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IHRvQm9vbGVhbiwgd2FybkRlcHJlY2F0aW9uLCBDYW5keURhdGUsIElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgTnpEYXRlQ2VsbERpcmVjdGl2ZSBhcyBEYXRlQ2VsbCxcclxuICBOekRhdGVGdWxsQ2VsbERpcmVjdGl2ZSBhcyBEYXRlRnVsbENlbGwsXHJcbiAgTnpNb250aENlbGxEaXJlY3RpdmUgYXMgTW9udGhDZWxsLFxyXG4gIE56TW9udGhGdWxsQ2VsbERpcmVjdGl2ZSBhcyBNb250aEZ1bGxDZWxsXHJcbn0gZnJvbSAnLi9uei1jYWxlbmRhci1jZWxscyc7XHJcblxyXG5leHBvcnQgdHlwZSBNb2RlVHlwZSA9ICdtb250aCcgfCAneWVhcic7XHJcbmV4cG9ydCB0eXBlIERhdGVUZW1wbGF0ZSA9IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBEYXRlIH0+O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBzZWxlY3RvcjogJ256LWNhbGVuZGFyJyxcclxuICBleHBvcnRBczogJ256Q2FsZW5kYXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1jYWxlbmRhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUiwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnpDYWxlbmRhckNvbXBvbmVudCksIG11bHRpOiB0cnVlIH1dXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekNhbGVuZGFyQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG4gIGFjdGl2ZURhdGU6IENhbmR5RGF0ZSA9IG5ldyBDYW5keURhdGUoKTtcclxuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbnQtZnVsbGNhbGVuZGFyJztcclxuXHJcbiAgcHJpdmF0ZSBvbkNoYW5nZUZuOiAoZGF0ZTogRGF0ZSkgPT4gdm9pZCA9ICgpID0+IHt9O1xyXG4gIHByaXZhdGUgb25Ub3VjaEZuOiAoKSA9PiB2b2lkID0gKCkgPT4ge307XHJcblxyXG4gIEBJbnB1dCgpIG56TW9kZTogTW9kZVR5cGUgPSAnbW9udGgnO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpNb2RlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TW9kZVR5cGU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelBhbmVsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBkYXRlOiBEYXRlOyBtb2RlOiBNb2RlVHlwZSB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpTZWxlY3RDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgQElucHV0KCkgc2V0IG56VmFsdWUodmFsdWU6IERhdGUpIHtcclxuICAgIHRoaXMudXBkYXRlRGF0ZShuZXcgQ2FuZHlEYXRlKHZhbHVlKSwgZmFsc2UpO1xyXG4gIH1cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpWYWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPERhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAvKipcclxuICAgKiBDYW5ub3QgdXNlIEBJbnB1dCBhbmQgQENvbnRlbnRDaGlsZCBvbiBvbmUgdmFyaWFibGVcclxuICAgKiBiZWNhdXNlIHsgc3RhdGljOiBmYWxzZSB9IHdpbGwgbWFrZSBASW5wdXQgcHJvcGVydHkgZ2V0IGRlbGF5ZWRcclxuICAgKiovXHJcbiAgQElucHV0KCkgbnpEYXRlQ2VsbDogRGF0ZVRlbXBsYXRlO1xyXG4gIEBDb250ZW50Q2hpbGQoRGF0ZUNlbGwsIHsgc3RhdGljOiBmYWxzZSwgcmVhZDogVGVtcGxhdGVSZWYgfSkgbnpEYXRlQ2VsbENoaWxkOiBEYXRlVGVtcGxhdGU7XHJcbiAgZ2V0IGRhdGVDZWxsKCk6IERhdGVUZW1wbGF0ZSB7XHJcbiAgICByZXR1cm4gdGhpcy5uekRhdGVDZWxsIHx8IHRoaXMubnpEYXRlQ2VsbENoaWxkO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgbnpEYXRlRnVsbENlbGw6IERhdGVUZW1wbGF0ZTtcclxuICBAQ29udGVudENoaWxkKERhdGVGdWxsQ2VsbCwgeyBzdGF0aWM6IGZhbHNlLCByZWFkOiBUZW1wbGF0ZVJlZiB9KSBuekRhdGVGdWxsQ2VsbENoaWxkOiBEYXRlVGVtcGxhdGU7XHJcbiAgZ2V0IGRhdGVGdWxsQ2VsbCgpOiBEYXRlVGVtcGxhdGUge1xyXG4gICAgcmV0dXJuIHRoaXMubnpEYXRlRnVsbENlbGwgfHwgdGhpcy5uekRhdGVGdWxsQ2VsbENoaWxkO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgbnpNb250aENlbGw6IERhdGVUZW1wbGF0ZTtcclxuICBAQ29udGVudENoaWxkKE1vbnRoQ2VsbCwgeyBzdGF0aWM6IGZhbHNlLCByZWFkOiBUZW1wbGF0ZVJlZiB9KSBuek1vbnRoQ2VsbENoaWxkOiBEYXRlVGVtcGxhdGU7XHJcbiAgZ2V0IG1vbnRoQ2VsbCgpOiBEYXRlVGVtcGxhdGUge1xyXG4gICAgcmV0dXJuIHRoaXMubnpNb250aENlbGwgfHwgdGhpcy5uek1vbnRoQ2VsbENoaWxkO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgbnpNb250aEZ1bGxDZWxsOiBEYXRlVGVtcGxhdGU7XHJcbiAgQENvbnRlbnRDaGlsZChNb250aEZ1bGxDZWxsLCB7IHN0YXRpYzogZmFsc2UsIHJlYWQ6IFRlbXBsYXRlUmVmIH0pIG56TW9udGhGdWxsQ2VsbENoaWxkOiBEYXRlVGVtcGxhdGU7XHJcbiAgZ2V0IG1vbnRoRnVsbENlbGwoKTogRGF0ZVRlbXBsYXRlIHtcclxuICAgIHJldHVybiB0aGlzLm56TW9udGhGdWxsQ2VsbCB8fCB0aGlzLm56TW9udGhGdWxsQ2VsbENoaWxkO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBASW5wdXRCb29sZWFuKClcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1mdWxsY2FsZW5kYXItLWZ1bGxzY3JlZW4nKVxyXG4gIG56RnVsbHNjcmVlbjogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXByZWNhdGVkIHVzZSBgW256RnVsbHNjcmVlbl1gIGluc3RlYWQuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpDYXJkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB3YXJuRGVwcmVjYXRpb24oYCduekNhcmQnIGlzIGdvaW5nIHRvIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFBsZWFzZSB1c2UgJ256RnVsbHNjcmVlbicgaW5zdGVhZC5gKTtcclxuICAgIHRoaXMubnpGdWxsc2NyZWVuID0gIXRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG4gIGdldCBuekNhcmQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gIXRoaXMubnpGdWxsc2NyZWVuO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxyXG5cclxuICBvbk1vZGVDaGFuZ2UobW9kZTogTW9kZVR5cGUpOiB2b2lkIHtcclxuICAgIHRoaXMubnpNb2RlQ2hhbmdlLmVtaXQobW9kZSk7XHJcbiAgICB0aGlzLm56UGFuZWxDaGFuZ2UuZW1pdCh7IGRhdGU6IHRoaXMuYWN0aXZlRGF0ZS5uYXRpdmVEYXRlLCBtb2RlIH0pO1xyXG4gIH1cclxuXHJcbiAgb25ZZWFyU2VsZWN0KHllYXI6IG51bWJlcik6IHZvaWQge1xyXG4gICAgY29uc3QgZGF0ZSA9IHRoaXMuYWN0aXZlRGF0ZS5zZXRZZWFyKHllYXIpO1xyXG4gICAgdGhpcy51cGRhdGVEYXRlKGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgb25Nb250aFNlbGVjdChtb250aDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBjb25zdCBkYXRlID0gdGhpcy5hY3RpdmVEYXRlLnNldE1vbnRoKG1vbnRoKTtcclxuICAgIHRoaXMudXBkYXRlRGF0ZShkYXRlKTtcclxuICB9XHJcblxyXG4gIG9uRGF0ZVNlbGVjdChkYXRlOiBDYW5keURhdGUpOiB2b2lkIHtcclxuICAgIC8vIE9ubHkgYWN0aXZlRGF0ZSBpcyBlbm91Z2ggaW4gY2FsZW5kYXJcclxuICAgIC8vIHRoaXMudmFsdWUgPSBkYXRlO1xyXG4gICAgdGhpcy51cGRhdGVEYXRlKGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogRGF0ZSB8IG51bGwpOiB2b2lkIHtcclxuICAgIHRoaXMudXBkYXRlRGF0ZShuZXcgQ2FuZHlEYXRlKHZhbHVlIGFzIERhdGUpLCBmYWxzZSk7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChkYXRlOiBEYXRlKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlRm4gPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hGbiA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVEYXRlKGRhdGU6IENhbmR5RGF0ZSwgdG91Y2hlZDogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcclxuICAgIHRoaXMuYWN0aXZlRGF0ZSA9IGRhdGU7XHJcblxyXG4gICAgaWYgKHRvdWNoZWQpIHtcclxuICAgICAgdGhpcy5vbkNoYW5nZUZuKGRhdGUubmF0aXZlRGF0ZSk7XHJcbiAgICAgIHRoaXMub25Ub3VjaEZuKCk7XHJcbiAgICAgIHRoaXMubnpTZWxlY3RDaGFuZ2UuZW1pdChkYXRlLm5hdGl2ZURhdGUpO1xyXG4gICAgICB0aGlzLm56VmFsdWVDaGFuZ2UuZW1pdChkYXRlLm5hdGl2ZURhdGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=
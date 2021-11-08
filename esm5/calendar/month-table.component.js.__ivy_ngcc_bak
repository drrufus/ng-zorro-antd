/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { CandyDate } from 'ng-zorro-antd/core';
import { DateHelperService } from 'ng-zorro-antd/i18n';
/** @type {?} */
var MAX_ROW = 4;
/** @type {?} */
var MAX_COL = 3;
var MonthTableComponent = /** @class */ (function () {
    function MonthTableComponent(dateHelper) {
        this.dateHelper = dateHelper;
        this.value = new CandyDate();
        this.prefixCls = 'ant-fullcalendar';
        this.valueChange = new EventEmitter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    MonthTableComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.value || changes.disabledDate) {
            this.render();
        }
    };
    /**
     * @param {?} _index
     * @return {?}
     */
    MonthTableComponent.prototype.trackYear = /**
     * @param {?} _index
     * @return {?}
     */
    function (_index) {
        return this.value ? this.value.getYear() : _index;
    };
    /**
     * @param {?} _index
     * @param {?} monthData
     * @return {?}
     */
    MonthTableComponent.prototype.trackPanelMonth = /**
     * @param {?} _index
     * @param {?} monthData
     * @return {?}
     */
    function (_index, monthData) {
        return monthData.content;
    };
    /**
     * @private
     * @return {?}
     */
    MonthTableComponent.prototype.render = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.value) {
            this.panelMonths = this.makePanelMonths();
        }
    };
    /**
     * @private
     * @return {?}
     */
    MonthTableComponent.prototype.makePanelMonths = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var months = [];
        /** @type {?} */
        var currentMonth = this.value.getMonth();
        /** @type {?} */
        var today = new CandyDate();
        /** @type {?} */
        var monthValue = 0;
        for (var rowIndex = 0; rowIndex < MAX_ROW; rowIndex++) {
            months[rowIndex] = [];
            var _loop_1 = function (colIndex) {
                var _a;
                /** @type {?} */
                var month = this_1.value.setMonth(monthValue);
                /** @type {?} */
                var disabled = this_1.disabledDate ? this_1.disabledDate(this_1.value.setMonth(monthValue).nativeDate) : false;
                /** @type {?} */
                var content = this_1.dateHelper.format(month.nativeDate, 'MMM');
                /** @type {?} */
                var cell = (months[rowIndex][colIndex] = {
                    value: month.nativeDate,
                    disabled: disabled,
                    content: content,
                    month: monthValue,
                    title: content,
                    classMap: null,
                    onClick: (/**
                     * @return {?}
                     */
                    function () { return _this.chooseMonth(cell.month); }) // don't use monthValue here
                });
                cell.classMap = (_a = {},
                    _a[this_1.prefixCls + "-month-panel-cell"] = true,
                    _a[this_1.prefixCls + "-month-panel-cell-disabled"] = disabled,
                    _a[this_1.prefixCls + "-month-panel-selected-cell"] = monthValue === currentMonth,
                    _a[this_1.prefixCls + "-month-panel-current-cell"] = today.getYear() === this_1.value.getYear() && monthValue === today.getMonth(),
                    _a);
                monthValue++;
            };
            var this_1 = this;
            for (var colIndex = 0; colIndex < MAX_COL; colIndex++) {
                _loop_1(colIndex);
            }
        }
        return months;
    };
    /**
     * @private
     * @param {?} month
     * @return {?}
     */
    MonthTableComponent.prototype.chooseMonth = /**
     * @private
     * @param {?} month
     * @return {?}
     */
    function (month) {
        this.value = this.value.setMonth(month);
        this.valueChange.emit(this.value);
        this.render();
    };
    MonthTableComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    // tslint:disable-next-line:component-selector
                    selector: 'month-table',
                    exportAs: 'monthTable',
                    template: "<table class=\"{{ prefixCls }}-month-panel-table\" cellSpacing=\"0\" role=\"grid\">\r\n  <tbody class=\"{{ prefixCls }}-month-panel-tbody\">\r\n    <tr *ngFor=\"let row of panelMonths; trackBy: trackYear\" role=\"row\">\r\n      <td *ngFor=\"let monthCell of row; trackBy: trackPanelMonth\" role=\"gridcell\" title=\"{{ monthCell.title }}\"\r\n        (click)=\"monthCell.disabled ? null : monthCell.onClick()\" [ngClass]=\"monthCell.classMap\">\r\n        <ng-container [ngSwitch]=\"prefixCls\">\r\n          <ng-container *ngSwitchCase=\"'ant-fullcalendar'\">\r\n            <div class=\"{{ prefixCls }}-month\">\r\n              <ng-container *ngIf=\"monthFullCellRender else defaultCell\">\r\n                <ng-container *ngTemplateOutlet=\"monthFullCellRender; context: { $implicit: monthCell.value }\">\r\n                </ng-container>\r\n              </ng-container>\r\n              <ng-template #defaultCell>\r\n                <div class=\"{{prefixCls}}-value\">{{ monthCell.content }}</div>\r\n                <div *ngIf=\"monthCellRender\" class=\"{{prefixCls}}-content\">\r\n                  <ng-container *ngTemplateOutlet=\"monthCellRender; context: { $implicit: monthCell.value }\">\r\n                  </ng-container>\r\n                </div>\r\n              </ng-template>\r\n            </div>\r\n          </ng-container>\r\n          <ng-container *ngSwitchCase=\"'ant-calendar'\">\r\n            <a class=\"{{ prefixCls }}-month-panel-month\">{{ monthCell.content }}</a>\r\n          </ng-container>\r\n        </ng-container>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>"
                }] }
    ];
    /** @nocollapse */
    MonthTableComponent.ctorParameters = function () { return [
        { type: DateHelperService }
    ]; };
    MonthTableComponent.propDecorators = {
        value: [{ type: Input }],
        prefixCls: [{ type: Input }],
        monthCellRender: [{ type: Input }],
        monthFullCellRender: [{ type: Input }],
        valueChange: [{ type: Output }],
        disabledDate: [{ type: Input }]
    };
    return MonthTableComponent;
}());
export { MonthTableComponent };
if (false) {
    /** @type {?} */
    MonthTableComponent.prototype.value;
    /** @type {?} */
    MonthTableComponent.prototype.prefixCls;
    /** @type {?} */
    MonthTableComponent.prototype.monthCellRender;
    /** @type {?} */
    MonthTableComponent.prototype.monthFullCellRender;
    /** @type {?} */
    MonthTableComponent.prototype.valueChange;
    /** @type {?} */
    MonthTableComponent.prototype.disabledDate;
    /** @type {?} */
    MonthTableComponent.prototype.panelMonths;
    /**
     * @type {?}
     * @private
     */
    MonthTableComponent.prototype.dateHelper;
}
/**
 * @record
 */
export function PanelMonthData() { }
if (false) {
    /** @type {?} */
    PanelMonthData.prototype.disabled;
    /** @type {?} */
    PanelMonthData.prototype.content;
    /** @type {?} */
    PanelMonthData.prototype.month;
    /** @type {?} */
    PanelMonthData.prototype.title;
    /** @type {?} */
    PanelMonthData.prototype.classMap;
    /** @type {?} */
    PanelMonthData.prototype.onClick;
    /** @type {?} */
    PanelMonthData.prototype.value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jYWxlbmRhci8iLCJzb3VyY2VzIjpbIm1vbnRoLXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUVOLFdBQVcsRUFDWCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztJQUVqRCxPQUFPLEdBQUcsQ0FBQzs7SUFDWCxPQUFPLEdBQUcsQ0FBQztBQUVqQjtJQW1CRSw2QkFBb0IsVUFBNkI7UUFBN0IsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFWeEMsVUFBSyxHQUFjLElBQUksU0FBUyxFQUFFLENBQUM7UUFDbkMsY0FBUyxHQUFXLGtCQUFrQixDQUFDO1FBRzdCLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztJQU1YLENBQUM7Ozs7O0lBRXJELHlDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLFlBQVksRUFBRTtZQUN6QyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDZjtJQUNILENBQUM7Ozs7O0lBRUQsdUNBQVM7Ozs7SUFBVCxVQUFVLE1BQWM7UUFDdEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDcEQsQ0FBQzs7Ozs7O0lBRUQsNkNBQWU7Ozs7O0lBQWYsVUFBZ0IsTUFBYyxFQUFFLFNBQXlCO1FBQ3ZELE9BQU8sU0FBUyxD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NEJBQ0wsS0FBSztrQ0FDTCxLQUFLO3NDQUNMLEtBQUs7OEJBQ0wsTUFBTTsrQkFFTixLQUFLOztJQW9FUiwwQkFBQztDQUFBLEFBbkZELElBbUZDO1NBM0VZLG1CQUFtQjs7O0lBQzlCLG9DQUE0Qzs7SUFDNUMsd0NBQWdEOztJQUNoRCw4Q0FBMkQ7O0lBQzNELGtEQUErRDs7SUFDL0QsMENBQStEOztJQUUvRCwyQ0FBK0M7O0lBRS9DLDBDQUFnQzs7Ozs7SUFFcEIseUNBQXFDOzs7OztBQWtFbkQsb0NBUUM7OztJQVBDLGtDQUFrQjs7SUFDbEIsaUNBQWdCOztJQUNoQiwrQkFBYzs7SUFDZCwrQkFBYzs7SUFDZCxrQ0FBd0I7O0lBQ3hCLGlDQUE2Qjs7SUFDN0IsK0JBQVkiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IENhbmR5RGF0ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IERhdGVIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuXHJcbmNvbnN0IE1BWF9ST1cgPSA0O1xyXG5jb25zdCBNQVhfQ09MID0gMztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnbW9udGgtdGFibGUnLFxyXG4gIGV4cG9ydEFzOiAnbW9udGhUYWJsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICdtb250aC10YWJsZS5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE1vbnRoVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIHZhbHVlOiBDYW5keURhdGUgPSBuZXcgQ2FuZHlEYXRlKCk7XHJcbiAgQElucHV0KCkgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW50LWZ1bGxjYWxlbmRhcic7XHJcbiAgQElucHV0KCkgbW9udGhDZWxsUmVuZGVyOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogRGF0ZSB9PjtcclxuICBASW5wdXQoKSBtb250aEZ1bGxDZWxsUmVuZGVyOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogRGF0ZSB9PjtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENhbmR5RGF0ZT4oKTtcclxuXHJcbiAgQElucHV0KCkgZGlzYWJsZWREYXRlOiAoZGF0ZTogRGF0ZSkgPT4gYm9vbGVhbjtcclxuXHJcbiAgcGFuZWxNb250aHM6IFBhbmVsTW9udGhEYXRhW11bXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRlSGVscGVyOiBEYXRlSGVscGVyU2VydmljZSkge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMudmFsdWUgfHwgY2hhbmdlcy5kaXNhYmxlZERhdGUpIHtcclxuICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRyYWNrWWVhcihfaW5kZXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy52YWx1ZSA/IHRoaXMudmFsdWUuZ2V0WWVhcigpIDogX2luZGV4O1xyXG4gIH1cclxuXHJcbiAgdHJhY2tQYW5lbE1vbnRoKF9pbmRleDogbnVtYmVyLCBtb250aERhdGE6IFBhbmVsTW9udGhEYXRhKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBtb250aERhdGEuY29udGVudDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVuZGVyKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudmFsdWUpIHtcclxuICAgICAgdGhpcy5wYW5lbE1vbnRocyA9IHRoaXMubWFrZVBhbmVsTW9udGhzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1ha2VQYW5lbE1vbnRocygpOiBQYW5lbE1vbnRoRGF0YVtdW10ge1xyXG4gICAgY29uc3QgbW9udGhzOiBQYW5lbE1vbnRoRGF0YVtdW10gPSBbXTtcclxuICAgIGNvbnN0IGN1cnJlbnRNb250aCA9IHRoaXMudmFsdWUuZ2V0TW9udGgoKTtcclxuICAgIGNvbnN0IHRvZGF5ID0gbmV3IENhbmR5RGF0ZSgpO1xyXG5cclxuICAgIGxldCBtb250aFZhbHVlID0gMDtcclxuICAgIGZvciAobGV0IHJvd0luZGV4ID0gMDsgcm93SW5kZXggPCBNQVhfUk9XOyByb3dJbmRleCsrKSB7XHJcbiAgICAgIG1vbnRoc1tyb3dJbmRleF0gPSBbXTtcclxuICAgICAgZm9yIChsZXQgY29sSW5kZXggPSAwOyBjb2xJbmRleCA8IE1BWF9DT0w7IGNvbEluZGV4KyspIHtcclxuICAgICAgICBjb25zdCBtb250aCA9IHRoaXMudmFsdWUuc2V0TW9udGgobW9udGhWYWx1ZSk7XHJcbiAgICAgICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkRGF0ZSA/IHRoaXMuZGlzYWJsZWREYXRlKHRoaXMudmFsdWUuc2V0TW9udGgobW9udGhWYWx1ZSkubmF0aXZlRGF0ZSkgOiBmYWxzZTtcclxuICAgICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5kYXRlSGVscGVyLmZvcm1hdChtb250aC5uYXRpdmVEYXRlLCAnTU1NJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNlbGw6IFBhbmVsTW9udGhEYXRhID0gKG1vbnRoc1tyb3dJbmRleF1bY29sSW5kZXhdID0ge1xyXG4gICAgICAgICAgdmFsdWU6IG1vbnRoLm5hdGl2ZURhdGUsXHJcbiAgICAgICAgICBkaXNhYmxlZCxcclxuICAgICAgICAgIGNvbnRlbnQsXHJcbiAgICAgICAgICBtb250aDogbW9udGhWYWx1ZSxcclxuICAgICAgICAgIHRpdGxlOiBjb250ZW50LFxyXG4gICAgICAgICAgY2xhc3NNYXA6IG51bGwsXHJcbiAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB0aGlzLmNob29zZU1vbnRoKGNlbGwubW9udGgpIC8vIGRvbid0IHVzZSBtb250aFZhbHVlIGhlcmVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY2VsbC5jbGFzc01hcCA9IHtcclxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbW9udGgtcGFuZWwtY2VsbGBdOiB0cnVlLFxyXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1tb250aC1wYW5lbC1jZWxsLWRpc2FibGVkYF06IGRpc2FibGVkLFxyXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1tb250aC1wYW5lbC1zZWxlY3RlZC1jZWxsYF06IG1vbnRoVmFsdWUgPT09IGN1cnJlbnRNb250aCxcclxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbW9udGgtcGFuZWwtY3VycmVudC1jZWxsYF06XHJcbiAgICAgICAgICAgIHRvZGF5LmdldFllYXIoKSA9PT0gdGhpcy52YWx1ZS5nZXRZZWFyKCkgJiYgbW9udGhWYWx1ZSA9PT0gdG9kYXkuZ2V0TW9udGgoKVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIG1vbnRoVmFsdWUrKztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1vbnRocztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hvb3NlTW9udGgobW9udGg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUuc2V0TW9udGgobW9udGgpO1xyXG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGFuZWxNb250aERhdGEge1xyXG4gIGRpc2FibGVkOiBib29sZWFuO1xyXG4gIGNvbnRlbnQ6IHN0cmluZztcclxuICBtb250aDogbnVtYmVyO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgY2xhc3NNYXA6IG9iamVjdCB8IG51bGw7XHJcbiAgb25DbGljazogVm9pZEZ1bmN0aW9uIHwgbnVsbDtcclxuICB2YWx1ZTogRGF0ZTtcclxufVxyXG4iXX0=
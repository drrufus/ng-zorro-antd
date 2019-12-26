/**
 * @fileoverview added by tsickle
 * Generated from: month-table.component.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jYWxlbmRhci8iLCJzb3VyY2VzIjpbIm1vbnRoLXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFFTixXQUFXLEVBQ1gsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7SUFFakQsT0FBTyxHQUFHLENBQUM7O0lBQ1gsT0FBTyxHQUFHLENBQUM7QUFFakI7SUFtQkUsNkJBQW9CLFVBQTZCO1FBQTdCLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBVnhDLFVBQUssR0FBYyxJQUFJLFNBQVMsRUFBRSxDQUFDO1FBQ25DLGNBQVMsR0FBVyxrQkFBa0IsQ0FBQztRQUc3QixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7SUFNWCxDQUFDOzs7OztJQUVyRCx5Q0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxZQUFZLEVBQUU7WUFDekMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2Y7SUFDSCxDQUFDOzs7OztJQUVELHVDQUFTOzs7O0lBQVQsVUFBVSxNQUFjO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ3BELENBQUM7Ozs7OztJQUVELDZDQUFlOzs7OztJQUFmLFVBQWdCLE1BQWMsRUFBRSxTQUF5QjtRQUN2RCxPQUFPLFNBQVMs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OzRCQUNMLEtBQUs7a0NBQ0wsS0FBSztzQ0FDTCxLQUFLOzhCQUNMLE1BQU07K0JBRU4sS0FBSzs7SUFvRVIsMEJBQUM7Q0FBQSxBQW5GRCxJQW1GQztTQTNFWSxtQkFBbUI7OztJQUM5QixvQ0FBNEM7O0lBQzVDLHdDQUFnRDs7SUFDaEQsOENBQTJEOztJQUMzRCxrREFBK0Q7O0lBQy9ELDBDQUErRDs7SUFFL0QsMkNBQStDOztJQUUvQywwQ0FBZ0M7Ozs7O0lBRXBCLHlDQUFxQzs7Ozs7QUFrRW5ELG9DQVFDOzs7SUFQQyxrQ0FBa0I7O0lBQ2xCLGlDQUFnQjs7SUFDaEIsK0JBQWM7O0lBQ2QsK0JBQWM7O0lBQ2Qsa0NBQXdCOztJQUN4QixpQ0FBNkI7O0lBQzdCLCtCQUFZIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDYW5keURhdGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRlSGVscGVyU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcblxyXG5jb25zdCBNQVhfUk9XID0gNDtcclxuY29uc3QgTUFYX0NPTCA9IDM7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ21vbnRoLXRhYmxlJyxcclxuICBleHBvcnRBczogJ21vbnRoVGFibGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnbW9udGgtdGFibGUuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNb250aFRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSB2YWx1ZTogQ2FuZHlEYXRlID0gbmV3IENhbmR5RGF0ZSgpO1xyXG4gIEBJbnB1dCgpIHByZWZpeENsczogc3RyaW5nID0gJ2FudC1mdWxsY2FsZW5kYXInO1xyXG4gIEBJbnB1dCgpIG1vbnRoQ2VsbFJlbmRlcjogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IERhdGUgfT47XHJcbiAgQElucHV0KCkgbW9udGhGdWxsQ2VsbFJlbmRlcjogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IERhdGUgfT47XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+KCk7XHJcblxyXG4gIEBJbnB1dCgpIGRpc2FibGVkRGF0ZTogKGRhdGU6IERhdGUpID0+IGJvb2xlYW47XHJcblxyXG4gIHBhbmVsTW9udGhzOiBQYW5lbE1vbnRoRGF0YVtdW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0ZUhlbHBlcjogRGF0ZUhlbHBlclNlcnZpY2UpIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLnZhbHVlIHx8IGNoYW5nZXMuZGlzYWJsZWREYXRlKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0cmFja1llYXIoX2luZGV4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMudmFsdWUgPyB0aGlzLnZhbHVlLmdldFllYXIoKSA6IF9pbmRleDtcclxuICB9XHJcblxyXG4gIHRyYWNrUGFuZWxNb250aChfaW5kZXg6IG51bWJlciwgbW9udGhEYXRhOiBQYW5lbE1vbnRoRGF0YSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gbW9udGhEYXRhLmNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlcigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnZhbHVlKSB7XHJcbiAgICAgIHRoaXMucGFuZWxNb250aHMgPSB0aGlzLm1ha2VQYW5lbE1vbnRocygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtYWtlUGFuZWxNb250aHMoKTogUGFuZWxNb250aERhdGFbXVtdIHtcclxuICAgIGNvbnN0IG1vbnRoczogUGFuZWxNb250aERhdGFbXVtdID0gW107XHJcbiAgICBjb25zdCBjdXJyZW50TW9udGggPSB0aGlzLnZhbHVlLmdldE1vbnRoKCk7XHJcbiAgICBjb25zdCB0b2RheSA9IG5ldyBDYW5keURhdGUoKTtcclxuXHJcbiAgICBsZXQgbW9udGhWYWx1ZSA9IDA7XHJcbiAgICBmb3IgKGxldCByb3dJbmRleCA9IDA7IHJvd0luZGV4IDwgTUFYX1JPVzsgcm93SW5kZXgrKykge1xyXG4gICAgICBtb250aHNbcm93SW5kZXhdID0gW107XHJcbiAgICAgIGZvciAobGV0IGNvbEluZGV4ID0gMDsgY29sSW5kZXggPCBNQVhfQ09MOyBjb2xJbmRleCsrKSB7XHJcbiAgICAgICAgY29uc3QgbW9udGggPSB0aGlzLnZhbHVlLnNldE1vbnRoKG1vbnRoVmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5kaXNhYmxlZERhdGUgPyB0aGlzLmRpc2FibGVkRGF0ZSh0aGlzLnZhbHVlLnNldE1vbnRoKG1vbnRoVmFsdWUpLm5hdGl2ZURhdGUpIDogZmFsc2U7XHJcbiAgICAgICAgY29uc3QgY29udGVudCA9IHRoaXMuZGF0ZUhlbHBlci5mb3JtYXQobW9udGgubmF0aXZlRGF0ZSwgJ01NTScpO1xyXG5cclxuICAgICAgICBjb25zdCBjZWxsOiBQYW5lbE1vbnRoRGF0YSA9IChtb250aHNbcm93SW5kZXhdW2NvbEluZGV4XSA9IHtcclxuICAgICAgICAgIHZhbHVlOiBtb250aC5uYXRpdmVEYXRlLFxyXG4gICAgICAgICAgZGlzYWJsZWQsXHJcbiAgICAgICAgICBjb250ZW50LFxyXG4gICAgICAgICAgbW9udGg6IG1vbnRoVmFsdWUsXHJcbiAgICAgICAgICB0aXRsZTogY29udGVudCxcclxuICAgICAgICAgIGNsYXNzTWFwOiBudWxsLFxyXG4gICAgICAgICAgb25DbGljazogKCkgPT4gdGhpcy5jaG9vc2VNb250aChjZWxsLm1vbnRoKSAvLyBkb24ndCB1c2UgbW9udGhWYWx1ZSBoZXJlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNlbGwuY2xhc3NNYXAgPSB7XHJcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LW1vbnRoLXBhbmVsLWNlbGxgXTogdHJ1ZSxcclxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbW9udGgtcGFuZWwtY2VsbC1kaXNhYmxlZGBdOiBkaXNhYmxlZCxcclxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbW9udGgtcGFuZWwtc2VsZWN0ZWQtY2VsbGBdOiBtb250aFZhbHVlID09PSBjdXJyZW50TW9udGgsXHJcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LW1vbnRoLXBhbmVsLWN1cnJlbnQtY2VsbGBdOlxyXG4gICAgICAgICAgICB0b2RheS5nZXRZZWFyKCkgPT09IHRoaXMudmFsdWUuZ2V0WWVhcigpICYmIG1vbnRoVmFsdWUgPT09IHRvZGF5LmdldE1vbnRoKClcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBtb250aFZhbHVlKys7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBtb250aHM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNob29zZU1vbnRoKG1vbnRoOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlLnNldE1vbnRoKG1vbnRoKTtcclxuICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBhbmVsTW9udGhEYXRhIHtcclxuICBkaXNhYmxlZDogYm9vbGVhbjtcclxuICBjb250ZW50OiBzdHJpbmc7XHJcbiAgbW9udGg6IG51bWJlcjtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGNsYXNzTWFwOiBvYmplY3QgfCBudWxsO1xyXG4gIG9uQ2xpY2s6IFZvaWRGdW5jdGlvbiB8IG51bGw7XHJcbiAgdmFsdWU6IERhdGU7XHJcbn1cclxuIl19
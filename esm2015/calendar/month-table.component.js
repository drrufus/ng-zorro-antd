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
const MAX_ROW = 4;
/** @type {?} */
const MAX_COL = 3;
export class MonthTableComponent {
    /**
     * @param {?} dateHelper
     */
    constructor(dateHelper) {
        this.dateHelper = dateHelper;
        this.value = new CandyDate();
        this.prefixCls = 'ant-fullcalendar';
        this.valueChange = new EventEmitter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.value || changes.disabledDate) {
            this.render();
        }
    }
    /**
     * @param {?} _index
     * @return {?}
     */
    trackYear(_index) {
        return this.value ? this.value.getYear() : _index;
    }
    /**
     * @param {?} _index
     * @param {?} monthData
     * @return {?}
     */
    trackPanelMonth(_index, monthData) {
        return monthData.content;
    }
    /**
     * @private
     * @return {?}
     */
    render() {
        if (this.value) {
            this.panelMonths = this.makePanelMonths();
        }
    }
    /**
     * @private
     * @return {?}
     */
    makePanelMonths() {
        /** @type {?} */
        const months = [];
        /** @type {?} */
        const currentMonth = this.value.getMonth();
        /** @type {?} */
        const today = new CandyDate();
        /** @type {?} */
        let monthValue = 0;
        for (let rowIndex = 0; rowIndex < MAX_ROW; rowIndex++) {
            months[rowIndex] = [];
            for (let colIndex = 0; colIndex < MAX_COL; colIndex++) {
                /** @type {?} */
                const month = this.value.setMonth(monthValue);
                /** @type {?} */
                const disabled = this.disabledDate ? this.disabledDate(this.value.setMonth(monthValue).nativeDate) : false;
                /** @type {?} */
                const content = this.dateHelper.format(month.nativeDate, 'MMM');
                /** @type {?} */
                const cell = (months[rowIndex][colIndex] = {
                    value: month.nativeDate,
                    disabled,
                    content,
                    month: monthValue,
                    title: content,
                    classMap: null,
                    onClick: (/**
                     * @return {?}
                     */
                    () => this.chooseMonth(cell.month)) // don't use monthValue here
                });
                cell.classMap = {
                    [`${this.prefixCls}-month-panel-cell`]: true,
                    [`${this.prefixCls}-month-panel-cell-disabled`]: disabled,
                    [`${this.prefixCls}-month-panel-selected-cell`]: monthValue === currentMonth,
                    [`${this.prefixCls}-month-panel-current-cell`]: today.getYear() === this.value.getYear() && monthValue === today.getMonth()
                };
                monthValue++;
            }
        }
        return months;
    }
    /**
     * @private
     * @param {?} month
     * @return {?}
     */
    chooseMonth(month) {
        this.value = this.value.setMonth(month);
        this.valueChange.emit(this.value);
        this.render();
    }
}
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
MonthTableComponent.ctorParameters = () => [
    { type: DateHelperService }
];
MonthTableComponent.propDecorators = {
    value: [{ type: Input }],
    prefixCls: [{ type: Input }],
    monthCellRender: [{ type: Input }],
    monthFullCellRender: [{ type: Input }],
    valueChange: [{ type: Output }],
    disabledDate: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jYWxlbmRhci8iLCJzb3VyY2VzIjpbIm1vbnRoLXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUVOLFdBQVcsRUFDWCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztNQUVqRCxPQUFPLEdBQUcsQ0FBQzs7TUFDWCxPQUFPLEdBQUcsQ0FBQztBQVVqQixNQUFNLE9BQU8sbUJBQW1COzs7O0lBVzlCLFlBQW9CLFVBQTZCO1FBQTdCLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBVnhDLFVBQUssR0FBYyxJQUFJLFNBQVMsRUFBRSxDQUFDO1FBQ25DLGNBQVMsR0FBVyxrQkFBa0IsQ0FBQztRQUc3QixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7SUFNWCxDQUFDOzs7OztJQUVyRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxZQUFZLEVBQUU7WUFDekMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2Y7SUFDSCxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxNQUFjO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ3BELENBQUM7Ozs7OztJQUVELGVBQWUsQ0FBQyxNQUFjLEVBQUUsU0FBeUI7UUFDdkQsT0FBTyxTQUFTLENBQUMsT0FBTyxD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d0JBQ0wsS0FBSzs4QkFDTCxLQUFLO2tDQUNMLEtBQUs7MEJBQ0wsTUFBTTsyQkFFTixLQUFLOzs7O0lBTk4sb0NBQTRDOztJQUM1Qyx3Q0FBZ0Q7O0lBQ2hELDhDQUEyRDs7SUFDM0Qsa0RBQStEOztJQUMvRCwwQ0FBK0Q7O0lBRS9ELDJDQUErQzs7SUFFL0MsMENBQWdDOzs7OztJQUVwQix5Q0FBcUM7Ozs7O0FBa0VuRCxvQ0FRQzs7O0lBUEMsa0NBQWtCOztJQUNsQixpQ0FBZ0I7O0lBQ2hCLCtCQUFjOztJQUNkLCtCQUFjOztJQUNkLGtDQUF3Qjs7SUFDeEIsaUNBQTZCOztJQUM3QiwrQkFBWSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ2FuZHlEYXRlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgRGF0ZUhlbHBlclNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5cclxuY29uc3QgTUFYX1JPVyA9IDQ7XHJcbmNvbnN0IE1BWF9DT0wgPSAzO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdtb250aC10YWJsZScsXHJcbiAgZXhwb3J0QXM6ICdtb250aFRhYmxlJyxcclxuICB0ZW1wbGF0ZVVybDogJ21vbnRoLXRhYmxlLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTW9udGhUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgdmFsdWU6IENhbmR5RGF0ZSA9IG5ldyBDYW5keURhdGUoKTtcclxuICBASW5wdXQoKSBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbnQtZnVsbGNhbGVuZGFyJztcclxuICBASW5wdXQoKSBtb250aENlbGxSZW5kZXI6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBEYXRlIH0+O1xyXG4gIEBJbnB1dCgpIG1vbnRoRnVsbENlbGxSZW5kZXI6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBEYXRlIH0+O1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpO1xyXG5cclxuICBASW5wdXQoKSBkaXNhYmxlZERhdGU6IChkYXRlOiBEYXRlKSA9PiBib29sZWFuO1xyXG5cclxuICBwYW5lbE1vbnRoczogUGFuZWxNb250aERhdGFbXVtdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGVIZWxwZXI6IERhdGVIZWxwZXJTZXJ2aWNlKSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy52YWx1ZSB8fCBjaGFuZ2VzLmRpc2FibGVkRGF0ZSkge1xyXG4gICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdHJhY2tZZWFyKF9pbmRleDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLnZhbHVlID8gdGhpcy52YWx1ZS5nZXRZZWFyKCkgOiBfaW5kZXg7XHJcbiAgfVxyXG5cclxuICB0cmFja1BhbmVsTW9udGgoX2luZGV4OiBudW1iZXIsIG1vbnRoRGF0YTogUGFuZWxNb250aERhdGEpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIG1vbnRoRGF0YS5jb250ZW50O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXIoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy52YWx1ZSkge1xyXG4gICAgICB0aGlzLnBhbmVsTW9udGhzID0gdGhpcy5tYWtlUGFuZWxNb250aHMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgbWFrZVBhbmVsTW9udGhzKCk6IFBhbmVsTW9udGhEYXRhW11bXSB7XHJcbiAgICBjb25zdCBtb250aHM6IFBhbmVsTW9udGhEYXRhW11bXSA9IFtdO1xyXG4gICAgY29uc3QgY3VycmVudE1vbnRoID0gdGhpcy52YWx1ZS5nZXRNb250aCgpO1xyXG4gICAgY29uc3QgdG9kYXkgPSBuZXcgQ2FuZHlEYXRlKCk7XHJcblxyXG4gICAgbGV0IG1vbnRoVmFsdWUgPSAwO1xyXG4gICAgZm9yIChsZXQgcm93SW5kZXggPSAwOyByb3dJbmRleCA8IE1BWF9ST1c7IHJvd0luZGV4KyspIHtcclxuICAgICAgbW9udGhzW3Jvd0luZGV4XSA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBjb2xJbmRleCA9IDA7IGNvbEluZGV4IDwgTUFYX0NPTDsgY29sSW5kZXgrKykge1xyXG4gICAgICAgIGNvbnN0IG1vbnRoID0gdGhpcy52YWx1ZS5zZXRNb250aChtb250aFZhbHVlKTtcclxuICAgICAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWREYXRlID8gdGhpcy5kaXNhYmxlZERhdGUodGhpcy52YWx1ZS5zZXRNb250aChtb250aFZhbHVlKS5uYXRpdmVEYXRlKSA6IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmRhdGVIZWxwZXIuZm9ybWF0KG1vbnRoLm5hdGl2ZURhdGUsICdNTU0nKTtcclxuXHJcbiAgICAgICAgY29uc3QgY2VsbDogUGFuZWxNb250aERhdGEgPSAobW9udGhzW3Jvd0luZGV4XVtjb2xJbmRleF0gPSB7XHJcbiAgICAgICAgICB2YWx1ZTogbW9udGgubmF0aXZlRGF0ZSxcclxuICAgICAgICAgIGRpc2FibGVkLFxyXG4gICAgICAgICAgY29udGVudCxcclxuICAgICAgICAgIG1vbnRoOiBtb250aFZhbHVlLFxyXG4gICAgICAgICAgdGl0bGU6IGNvbnRlbnQsXHJcbiAgICAgICAgICBjbGFzc01hcDogbnVsbCxcclxuICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHRoaXMuY2hvb3NlTW9udGgoY2VsbC5tb250aCkgLy8gZG9uJ3QgdXNlIG1vbnRoVmFsdWUgaGVyZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjZWxsLmNsYXNzTWFwID0ge1xyXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1tb250aC1wYW5lbC1jZWxsYF06IHRydWUsXHJcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LW1vbnRoLXBhbmVsLWNlbGwtZGlzYWJsZWRgXTogZGlzYWJsZWQsXHJcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LW1vbnRoLXBhbmVsLXNlbGVjdGVkLWNlbGxgXTogbW9udGhWYWx1ZSA9PT0gY3VycmVudE1vbnRoLFxyXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1tb250aC1wYW5lbC1jdXJyZW50LWNlbGxgXTpcclxuICAgICAgICAgICAgdG9kYXkuZ2V0WWVhcigpID09PSB0aGlzLnZhbHVlLmdldFllYXIoKSAmJiBtb250aFZhbHVlID09PSB0b2RheS5nZXRNb250aCgpXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbW9udGhWYWx1ZSsrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbW9udGhzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaG9vc2VNb250aChtb250aDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZS5zZXRNb250aChtb250aCk7XHJcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQYW5lbE1vbnRoRGF0YSB7XHJcbiAgZGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgY29udGVudDogc3RyaW5nO1xyXG4gIG1vbnRoOiBudW1iZXI7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBjbGFzc01hcDogb2JqZWN0IHwgbnVsbDtcclxuICBvbkNsaWNrOiBWb2lkRnVuY3Rpb24gfCBudWxsO1xyXG4gIHZhbHVlOiBEYXRlO1xyXG59XHJcbiJdfQ==
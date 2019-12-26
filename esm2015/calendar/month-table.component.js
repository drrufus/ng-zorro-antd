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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jYWxlbmRhci8iLCJzb3VyY2VzIjpbIm1vbnRoLXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFFTixXQUFXLEVBQ1gsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7TUFFakQsT0FBTyxHQUFHLENBQUM7O01BQ1gsT0FBTyxHQUFHLENBQUM7QUFVakIsTUFBTSxPQUFPLG1CQUFtQjs7OztJQVc5QixZQUFvQixVQUE2QjtRQUE3QixlQUFVLEdBQVYsVUFBVSxDQUFtQjtRQVZ4QyxVQUFLLEdBQWMsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUNuQyxjQUFTLEdBQVcsa0JBQWtCLENBQUM7UUFHN0IsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO0lBTVgsQ0FBQzs7Ozs7SUFFckQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsWUFBWSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNmO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsTUFBYztRQUN0QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNwRCxDQUFDOzs7Ozs7SUFFRCxlQUFlLENBQUMsTUFBYyxFQUFFLFNBQXlCO1FBQ3ZELE9BQU8sU0FBUyxDQUFDLE9BQU8sQ0FBQztJQUMzQixDQUFDOzs7OztJQUVPLE1BQU07UUFDWixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUMzQztJQUNILENBQUM7Ozs7O0lBRU8sZUFBZTs7Y0FDZixNQUFNLEdBQXVCLEVBQUU7O2NBQy9CLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRTs7Y0FDcEMsS0FBSyxHQUFHLElBQUksU0FBUyxFQUFFOztZQUV6QixVQUFVLEdBQUcsQ0FBQztRQUNsQixLQUFLLElBQUksUUFBUSxHQUFHLENBQUMsRUFBRSxRQUFRLEdBQUcsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUFFO1lBQ3JELE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDdEIsS0FBSyxJQUFJLFFBQVEsR0FBRyxDQUFDLEVBQUUsUUFBUSxHQUFHLE9BQU8sRUFBRSxRQUFRLEVBQUUsRUFBRTs7c0JBQy9DLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7O3NCQUN2QyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSzs7c0JBQ3BHLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQzs7c0JBRXpELElBQUksR0FBbUIsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUc7b0JBQ3pELEtBQUssRUFBRSxLQUFLLENBQUMsVUFBVTtvQkFDdkIsUUFBUTtvQkFDUixPQUFPO29CQUNQLEtBQUssRUFBRSxVQUFVO29CQUNqQixLQUFLLEVBQUUsT0FBTztvQkFDZCxRQUFRLEVBQUUsSUFBSTtvQkFDZCxPQUFPOzs7b0JBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUEsQ0FBQyw0QkFBNEI7aUJBQ3pFLENBQUM7Z0JBRUYsSUFBSSxDQUFDLFFBQVEsR0FBRztvQkFDZCxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsbUJBQW1CLENBQUMsRUFBRSxJQUFJO29CQUM1QyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsNEJBQTRCLENBQUMsRUFBRSxRQUFRO29CQUN6RCxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsNEJBQTRCLENBQUMsRUFBRSxVQUFVLEtBQUssWUFBWTtvQkFDNUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLDJCQUEyQixDQUFDLEVBQzVDLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLFVBQVUsS0FBSyxLQUFLLENBQUMsUUFBUSxFQUFFO2lCQUM5RSxDQUFDO2dCQUVGLFVBQVUsRUFBRSxDQUFDO2FBQ2Q7U0FDRjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7OztJQUVPLFdBQVcsQ0FBQyxLQUFhO1FBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7WUFsRkYsU0FBUyxTQUFDO2dCQUNULGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7Z0JBRS9DLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUUsWUFBWTtnQkFDdEIsdWxEQUF5QzthQUMxQzs7OztZQVpRLGlCQUFpQjs7O29CQWN2QixLQUFLO3dCQUNMLEtBQUs7OEJBQ0wsS0FBSztrQ0FDTCxLQUFLOzBCQUNMLE1BQU07MkJBRU4sS0FBSzs7OztJQU5OLG9DQUE0Qzs7SUFDNUMsd0NBQWdEOztJQUNoRCw4Q0FBMkQ7O0lBQzNELGtEQUErRDs7SUFDL0QsMENBQStEOztJQUUvRCwyQ0FBK0M7O0lBRS9DLDBDQUFnQzs7Ozs7SUFFcEIseUNBQXFDOzs7OztBQWtFbkQsb0NBUUM7OztJQVBDLGtDQUFrQjs7SUFDbEIsaUNBQWdCOztJQUNoQiwrQkFBYzs7SUFDZCwrQkFBYzs7SUFDZCxrQ0FBd0I7O0lBQ3hCLGlDQUE2Qjs7SUFDN0IsK0JBQVkiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IENhbmR5RGF0ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IERhdGVIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuXHJcbmNvbnN0IE1BWF9ST1cgPSA0O1xyXG5jb25zdCBNQVhfQ09MID0gMztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnbW9udGgtdGFibGUnLFxyXG4gIGV4cG9ydEFzOiAnbW9udGhUYWJsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICdtb250aC10YWJsZS5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE1vbnRoVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIHZhbHVlOiBDYW5keURhdGUgPSBuZXcgQ2FuZHlEYXRlKCk7XHJcbiAgQElucHV0KCkgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW50LWZ1bGxjYWxlbmRhcic7XHJcbiAgQElucHV0KCkgbW9udGhDZWxsUmVuZGVyOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogRGF0ZSB9PjtcclxuICBASW5wdXQoKSBtb250aEZ1bGxDZWxsUmVuZGVyOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogRGF0ZSB9PjtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENhbmR5RGF0ZT4oKTtcclxuXHJcbiAgQElucHV0KCkgZGlzYWJsZWREYXRlOiAoZGF0ZTogRGF0ZSkgPT4gYm9vbGVhbjtcclxuXHJcbiAgcGFuZWxNb250aHM6IFBhbmVsTW9udGhEYXRhW11bXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRlSGVscGVyOiBEYXRlSGVscGVyU2VydmljZSkge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMudmFsdWUgfHwgY2hhbmdlcy5kaXNhYmxlZERhdGUpIHtcclxuICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRyYWNrWWVhcihfaW5kZXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy52YWx1ZSA/IHRoaXMudmFsdWUuZ2V0WWVhcigpIDogX2luZGV4O1xyXG4gIH1cclxuXHJcbiAgdHJhY2tQYW5lbE1vbnRoKF9pbmRleDogbnVtYmVyLCBtb250aERhdGE6IFBhbmVsTW9udGhEYXRhKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBtb250aERhdGEuY29udGVudDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVuZGVyKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudmFsdWUpIHtcclxuICAgICAgdGhpcy5wYW5lbE1vbnRocyA9IHRoaXMubWFrZVBhbmVsTW9udGhzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1ha2VQYW5lbE1vbnRocygpOiBQYW5lbE1vbnRoRGF0YVtdW10ge1xyXG4gICAgY29uc3QgbW9udGhzOiBQYW5lbE1vbnRoRGF0YVtdW10gPSBbXTtcclxuICAgIGNvbnN0IGN1cnJlbnRNb250aCA9IHRoaXMudmFsdWUuZ2V0TW9udGgoKTtcclxuICAgIGNvbnN0IHRvZGF5ID0gbmV3IENhbmR5RGF0ZSgpO1xyXG5cclxuICAgIGxldCBtb250aFZhbHVlID0gMDtcclxuICAgIGZvciAobGV0IHJvd0luZGV4ID0gMDsgcm93SW5kZXggPCBNQVhfUk9XOyByb3dJbmRleCsrKSB7XHJcbiAgICAgIG1vbnRoc1tyb3dJbmRleF0gPSBbXTtcclxuICAgICAgZm9yIChsZXQgY29sSW5kZXggPSAwOyBjb2xJbmRleCA8IE1BWF9DT0w7IGNvbEluZGV4KyspIHtcclxuICAgICAgICBjb25zdCBtb250aCA9IHRoaXMudmFsdWUuc2V0TW9udGgobW9udGhWYWx1ZSk7XHJcbiAgICAgICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkRGF0ZSA/IHRoaXMuZGlzYWJsZWREYXRlKHRoaXMudmFsdWUuc2V0TW9udGgobW9udGhWYWx1ZSkubmF0aXZlRGF0ZSkgOiBmYWxzZTtcclxuICAgICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5kYXRlSGVscGVyLmZvcm1hdChtb250aC5uYXRpdmVEYXRlLCAnTU1NJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNlbGw6IFBhbmVsTW9udGhEYXRhID0gKG1vbnRoc1tyb3dJbmRleF1bY29sSW5kZXhdID0ge1xyXG4gICAgICAgICAgdmFsdWU6IG1vbnRoLm5hdGl2ZURhdGUsXHJcbiAgICAgICAgICBkaXNhYmxlZCxcclxuICAgICAgICAgIGNvbnRlbnQsXHJcbiAgICAgICAgICBtb250aDogbW9udGhWYWx1ZSxcclxuICAgICAgICAgIHRpdGxlOiBjb250ZW50LFxyXG4gICAgICAgICAgY2xhc3NNYXA6IG51bGwsXHJcbiAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB0aGlzLmNob29zZU1vbnRoKGNlbGwubW9udGgpIC8vIGRvbid0IHVzZSBtb250aFZhbHVlIGhlcmVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY2VsbC5jbGFzc01hcCA9IHtcclxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbW9udGgtcGFuZWwtY2VsbGBdOiB0cnVlLFxyXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1tb250aC1wYW5lbC1jZWxsLWRpc2FibGVkYF06IGRpc2FibGVkLFxyXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1tb250aC1wYW5lbC1zZWxlY3RlZC1jZWxsYF06IG1vbnRoVmFsdWUgPT09IGN1cnJlbnRNb250aCxcclxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbW9udGgtcGFuZWwtY3VycmVudC1jZWxsYF06XHJcbiAgICAgICAgICAgIHRvZGF5LmdldFllYXIoKSA9PT0gdGhpcy52YWx1ZS5nZXRZZWFyKCkgJiYgbW9udGhWYWx1ZSA9PT0gdG9kYXkuZ2V0TW9udGgoKVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIG1vbnRoVmFsdWUrKztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1vbnRocztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hvb3NlTW9udGgobW9udGg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUuc2V0TW9udGgobW9udGgpO1xyXG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGFuZWxNb250aERhdGEge1xyXG4gIGRpc2FibGVkOiBib29sZWFuO1xyXG4gIGNvbnRlbnQ6IHN0cmluZztcclxuICBtb250aDogbnVtYmVyO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgY2xhc3NNYXA6IG9iamVjdCB8IG51bGw7XHJcbiAgb25DbGljazogVm9pZEZ1bmN0aW9uIHwgbnVsbDtcclxuICB2YWx1ZTogRGF0ZTtcclxufVxyXG4iXX0=
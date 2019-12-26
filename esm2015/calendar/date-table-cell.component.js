/**
 * @fileoverview added by tsickle
 * Generated from: date-table-cell.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Component, Input } from '@angular/core';
import { isNonEmptyString, isTemplateRef } from 'ng-zorro-antd/core';
export class DateTableCellComponent {
    constructor() {
        this.isTemplateRef = isTemplateRef;
        this.isNonEmptyString = isNonEmptyString;
    }
}
DateTableCellComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line: component-selector
                selector: '[date-table-cell]',
                exportAs: 'dateTableCell',
                template: "<ng-container [ngSwitch]=\"prefixCls\">\r\n  <ng-container *ngSwitchCase=\"'ant-calendar'\">\r\n    <ng-container [ngSwitch]=\"true\">\r\n      <ng-container *ngSwitchCase=\"isTemplateRef(cell.dateCellRender)\">\r\n        <ng-container *ngTemplateOutlet=\"cell.dateCellRender; context: { $implicit: cell.value }\"></ng-container>\r\n      </ng-container>\r\n      <ng-container *ngSwitchCase=\"isNonEmptyString(cell.dateCellRender)\">\r\n        <span [innerHTML]=\"cell.dateCellRender\"></span>\r\n      </ng-container>\r\n      <ng-container *ngSwitchDefault>\r\n        <div class=\"{{ prefixCls }}-date\" [attr.aria-selected]=\"cell.isSelected\" [attr.aria-disabled]=\"cell.isDisabled\">\r\n          {{ cell.content }}\r\n        </div>\r\n      </ng-container>\r\n    </ng-container>\r\n  </ng-container>\r\n  <ng-container *ngSwitchCase=\"'ant-fullcalendar'\">\r\n    <div class=\"ant-fullcalendar-date\">\r\n      <ng-container *ngIf=\"cell.dateFullCellRender else defaultCell\">\r\n        <ng-container *ngTemplateOutlet=\"cell.dateFullCellRender; context: {$implicit: cell.value}\"></ng-container>\r\n      </ng-container>\r\n      <ng-template #defaultCell>\r\n        <div class=\"{{ prefixCls }}-value\">{{ cell.content }}</div>\r\n        <div *ngIf=\"cell.dateCellRender\" class=\"{{ prefixCls }}-content\">\r\n          <ng-container *ngTemplateOutlet=\"cell.dateCellRender; context: {$implicit: cell.value}\"></ng-container>\r\n        </div>\r\n      </ng-template>\r\n    </div>\r\n  </ng-container>\r\n</ng-container>"
            }] }
];
DateTableCellComponent.propDecorators = {
    prefixCls: [{ type: Input }],
    cell: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DateTableCellComponent.prototype.isTemplateRef;
    /** @type {?} */
    DateTableCellComponent.prototype.isNonEmptyString;
    /** @type {?} */
    DateTableCellComponent.prototype.prefixCls;
    /** @type {?} */
    DateTableCellComponent.prototype.cell;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10YWJsZS1jZWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY2FsZW5kYXIvIiwic291cmNlcyI6WyJkYXRlLXRhYmxlLWNlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQVVyRSxNQUFNLE9BQU8sc0JBQXNCO0lBUG5DO1FBUUUsa0JBQWEsR0FBRyxhQUFhLENBQUM7UUFDOUIscUJBQWdCLEdBQUcsZ0JBQWdCLENBQUM7SUFJdEMsQ0FBQzs7O1lBYkEsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUUsZUFBZTtnQkFDekIsK2dEQUErQzthQUVoRDs7O3dCQUtFLEtBQUs7bUJBQ0wsS0FBSzs7OztJQUpOLCtDQUE4Qjs7SUFDOUIsa0RBQW9DOztJQUVwQywyQ0FBd0Q7O0lBQ3hELHNDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc05vbkVtcHR5U3RyaW5nLCBpc1RlbXBsYXRlUmVmIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgRGF0ZUNlbGwgfSBmcm9tICcuL2RhdGUtdGFibGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdbZGF0ZS10YWJsZS1jZWxsXScsXHJcbiAgZXhwb3J0QXM6ICdkYXRlVGFibGVDZWxsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZGF0ZS10YWJsZS1jZWxsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZXM6IFtdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRlVGFibGVDZWxsQ29tcG9uZW50IHtcclxuICBpc1RlbXBsYXRlUmVmID0gaXNUZW1wbGF0ZVJlZjtcclxuICBpc05vbkVtcHR5U3RyaW5nID0gaXNOb25FbXB0eVN0cmluZztcclxuXHJcbiAgQElucHV0KCkgcHJlZml4Q2xzOiAnYW50LWNhbGVuZGFyJyB8ICdhbnQtZnVsbGNhbGVuZGFyJztcclxuICBASW5wdXQoKSBjZWxsOiBEYXRlQ2VsbDtcclxufVxyXG4iXX0=
import { isNonEmptyString, isTemplateRef } from 'ng-zorro-antd/core';
import { DateCell } from './date-table.component';
import * as i0 from "@angular/core";
export declare class DateTableCellComponent {
    isTemplateRef: typeof isTemplateRef;
    isNonEmptyString: typeof isNonEmptyString;
    prefixCls: 'ant-calendar' | 'ant-fullcalendar';
    cell: DateCell;
    static ɵfac: i0.ɵɵFactoryDef<DateTableCellComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<DateTableCellComponent, "[date-table-cell]", ["dateTableCell"], { 'prefixCls': "prefixCls", 'cell': "cell" }, {}, never>;
}

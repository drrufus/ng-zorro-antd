import { OnChanges, TemplateRef } from '@angular/core';
import { NzStatisticValueType } from './nz-statistic-definitions';
import * as i0 from "@angular/core";
export declare class NzStatisticNumberComponent implements OnChanges {
    private locale_id;
    nzValue: NzStatisticValueType;
    nzValueTemplate: TemplateRef<{
        $implicit: NzStatisticValueType;
    }>;
    displayInt: string;
    displayDecimal: string;
    constructor(locale_id: string);
    ngOnChanges(): void;
    private formatNumber;
    static ɵfac: i0.ɵɵFactoryDef<NzStatisticNumberComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NzStatisticNumberComponent, "nz-statistic-number", ["nzStatisticNumber"], { 'nzValue': "nzValue", 'nzValueTemplate': "nzValueTemplate" }, {}, never>;
}

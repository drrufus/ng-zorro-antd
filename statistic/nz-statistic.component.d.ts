/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { TemplateRef } from '@angular/core';
import { NzStatisticValueType } from './nz-statistic-definitions';
import * as i0 from "@angular/core";
export declare class NzStatisticComponent {
    nzPrefix: string | TemplateRef<void>;
    nzSuffix: string | TemplateRef<void>;
    nzTitle: string | TemplateRef<void>;
    nzValue: NzStatisticValueType;
    nzValueStyle: {};
    nzValueTemplate: TemplateRef<{
        $implicit: NzStatisticValueType;
    }>;
    static ɵfac: i0.ɵɵFactoryDef<NzStatisticComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NzStatisticComponent, "nz-statistic", ["nzStatistic"], { 'nzPrefix': "nzPrefix", 'nzSuffix': "nzSuffix", 'nzTitle': "nzTitle", 'nzValue': "nzValue", 'nzValueStyle': "nzValueStyle", 'nzValueTemplate': "nzValueTemplate" }, {}, never>;
}

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { OnChanges, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class NzOptionComponent implements OnChanges {
    changes: Subject<unknown>;
    template: TemplateRef<void>;
    nzLabel: string;
    nzValue: any;
    nzDisabled: boolean;
    nzHide: boolean;
    nzCustomContent: boolean;
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDef<NzOptionComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NzOptionComponent, "nz-option", ["nzOption"], { 'nzLabel': "nzLabel", 'nzValue': "nzValue", 'nzDisabled': "nzDisabled", 'nzHide': "nzHide", 'nzCustomContent': "nzCustomContent" }, {}, never>;
}

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { OnChanges, OnDestroy, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class NzDescriptionsItemComponent implements OnChanges, OnDestroy {
    content: TemplateRef<void>;
    nzSpan: number;
    nzTitle: string;
    readonly inputChange$: Subject<void>;
    ngOnChanges(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<NzDescriptionsItemComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NzDescriptionsItemComponent, "nz-descriptions-item", ["nzDescriptionsItem"], { 'nzSpan': "nzSpan", 'nzTitle': "nzTitle" }, {}, never>;
}

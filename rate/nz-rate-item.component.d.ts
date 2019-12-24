/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { EventEmitter, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NzRateItemComponent {
    character: TemplateRef<void>;
    allowHalf: boolean;
    readonly itemHover: EventEmitter<boolean>;
    readonly itemClick: EventEmitter<boolean>;
    hoverRate(isHalf: boolean): void;
    clickRate(isHalf: boolean): void;
    static ɵfac: i0.ɵɵFactoryDef<NzRateItemComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NzRateItemComponent, "[nz-rate-item]", ["nzRateItem"], { 'character': "character", 'allowHalf': "allowHalf" }, { 'itemHover': "itemHover", 'itemClick': "itemClick" }, never>;
}

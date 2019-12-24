/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NzToCssUnitPipe implements PipeTransform {
    transform(value: number | string, defaultUnit?: string): string;
    static ɵfac: i0.ɵɵFactoryDef<NzToCssUnitPipe>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<NzToCssUnitPipe, "nzToCssUnit">;
}

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NzHighlightPipe implements PipeTransform {
    private UNIQUE_WRAPPERS;
    transform(value: string, highlightValue: string, flags?: string, klass?: string): string | null;
    static ɵfac: i0.ɵɵFactoryDef<NzHighlightPipe>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<NzHighlightPipe, "nzHighlight">;
}

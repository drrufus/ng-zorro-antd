/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NzVirtualScrollDirective {
    templateRef: TemplateRef<{
        $implicit: any;
        index: number;
    }>;
    constructor(templateRef: TemplateRef<{
        $implicit: any;
        index: number;
    }>);
    static ɵfac: i0.ɵɵFactoryDef<NzVirtualScrollDirective>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<NzVirtualScrollDirective, "[nz-virtual-scroll]", ["nzVirtualScroll"], {}, {}, never>;
}

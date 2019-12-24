/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { TemplateRef } from '@angular/core';
import { NzModalRef } from './nz-modal-ref.class';
import * as i0 from "@angular/core";
export declare class NzModalFooterDirective {
    private nzModalRef;
    templateRef: TemplateRef<{}>;
    constructor(nzModalRef: NzModalRef, templateRef: TemplateRef<{}>);
    static ɵfac: i0.ɵɵFactoryDef<NzModalFooterDirective>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<NzModalFooterDirective, "[nzModalFooter]", ["nzModalFooter"], {}, {}, never>;
}

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { QueryList, TemplateRef } from '@angular/core';
import { NzCommentActionComponent as CommentAction } from './nz-comment-cells';
import * as i0 from "@angular/core";
export declare class NzCommentComponent {
    nzAuthor: string | TemplateRef<void>;
    nzDatetime: string | TemplateRef<void>;
    actions: QueryList<CommentAction>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDef<NzCommentComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NzCommentComponent, "nz-comment", ["nzComment"], { 'nzAuthor': "nzAuthor", 'nzDatetime': "nzDatetime" }, {}, ["actions"]>;
}

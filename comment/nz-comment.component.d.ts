/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { QueryList, TemplateRef } from '@angular/core';
import { NzCommentActionComponent as CommentAction } from './nz-comment-cells';
import * as ɵngcc0 from '@angular/core';
export declare class NzCommentComponent {
    nzAuthor: string | TemplateRef<void>;
    nzDatetime: string | TemplateRef<void>;
    actions: QueryList<CommentAction>;
    constructor();
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzCommentComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzCommentComponent, "nz-comment", ["nzComment"], { "nzAuthor": "nzAuthor"; "nzDatetime": "nzDatetime"; }, {}, ["actions"], ["nz-avatar[nz-comment-avatar]", "nz-comment-content", "*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29tbWVudC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsibnotY29tbWVudC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQVNBOzs7Ozs7O0FBS0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgUXVlcnlMaXN0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOekNvbW1lbnRBY3Rpb25Db21wb25lbnQgYXMgQ29tbWVudEFjdGlvbiB9IGZyb20gJy4vbnotY29tbWVudC1jZWxscyc7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE56Q29tbWVudENvbXBvbmVudCB7XHJcbiAgICBuekF1dGhvcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgICBuekRhdGV0aW1lOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICAgIGFjdGlvbnM6IFF1ZXJ5TGlzdDxDb21tZW50QWN0aW9uPjtcclxuICAgIGNvbnN0cnVjdG9yKCk7XHJcbn1cclxuIl19
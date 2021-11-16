/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Subject } from 'rxjs';
import { NzModalRef } from './nz-modal-ref.class';
import * as ɵngcc0 from '@angular/core';
export declare class NzModalControlService {
    private parentService;
    readonly afterAllClose: Subject<void>;
    readonly openModals: NzModalRef[];
    private rootOpenModals;
    private rootAfterAllClose;
    private rootRegisteredMetaMap;
    private readonly registeredMetaMap;
    constructor(parentService: NzModalControlService);
    registerModal(modalRef: NzModalRef): void;
    deregisterModal(modalRef: NzModalRef): void;
    hasRegistered(modalRef: NzModalRef): boolean;
    closeAll(): void;
    private removeOpenModal;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzModalControlService, [{ optional: true; skipSelf: true; }]>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NzModalControlService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbW9kYWwtY29udHJvbC5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbIm56LW1vZGFsLWNvbnRyb2wuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE56TW9kYWxSZWYgfSBmcm9tICcuL256LW1vZGFsLXJlZi5jbGFzcyc7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE56TW9kYWxDb250cm9sU2VydmljZSB7XHJcbiAgICBwcml2YXRlIHBhcmVudFNlcnZpY2U7XHJcbiAgICByZWFkb25seSBhZnRlckFsbENsb3NlOiBTdWJqZWN0PHZvaWQ+O1xyXG4gICAgcmVhZG9ubHkgb3Blbk1vZGFsczogTnpNb2RhbFJlZltdO1xyXG4gICAgcHJpdmF0ZSByb290T3Blbk1vZGFscztcclxuICAgIHByaXZhdGUgcm9vdEFmdGVyQWxsQ2xvc2U7XHJcbiAgICBwcml2YXRlIHJvb3RSZWdpc3RlcmVkTWV0YU1hcDtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgcmVnaXN0ZXJlZE1ldGFNYXA7XHJcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnRTZXJ2aWNlOiBOek1vZGFsQ29udHJvbFNlcnZpY2UpO1xyXG4gICAgcmVnaXN0ZXJNb2RhbChtb2RhbFJlZjogTnpNb2RhbFJlZik6IHZvaWQ7XHJcbiAgICBkZXJlZ2lzdGVyTW9kYWwobW9kYWxSZWY6IE56TW9kYWxSZWYpOiB2b2lkO1xyXG4gICAgaGFzUmVnaXN0ZXJlZChtb2RhbFJlZjogTnpNb2RhbFJlZik6IGJvb2xlYW47XHJcbiAgICBjbG9zZUFsbCgpOiB2b2lkO1xyXG4gICAgcHJpdmF0ZSByZW1vdmVPcGVuTW9kYWw7XHJcbn1cclxuIl19
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Overlay } from '@angular/cdk/overlay';
import { Observable } from 'rxjs';
import { NzModalControlService } from './nz-modal-control.service';
import { NzModalRef } from './nz-modal-ref.class';
import { NzModalComponent } from './nz-modal.component';
import { ConfirmType, ModalOptionsForService } from './nz-modal.type';
import * as ɵngcc0 from '@angular/core';
export declare class ModalBuilderForService {
    private overlay;
    private modalRef;
    private overlayRef;
    constructor(overlay: Overlay, options?: ModalOptionsForService);
    getInstance(): NzModalComponent | null;
    destroyModal(): void;
    private changeProps;
    private createModal;
}
export declare class NzModalService {
    private overlay;
    private modalControl;
    readonly openModals: NzModalRef[];
    readonly afterAllClose: Observable<void>;
    constructor(overlay: Overlay, modalControl: NzModalControlService);
    closeAll(): void;
    create<T>(options?: ModalOptionsForService<T>): NzModalRef<T>;
    confirm<T>(options?: ModalOptionsForService<T>, confirmType?: ConfirmType): NzModalRef<T>;
    info<T>(options?: ModalOptionsForService<T>): NzModalRef<T>;
    success<T>(options?: ModalOptionsForService<T>): NzModalRef<T>;
    error<T>(options?: ModalOptionsForService<T>): NzModalRef<T>;
    warning<T>(options?: ModalOptionsForService<T>): NzModalRef<T>;
    private simpleConfirm;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzModalService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NzModalService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbW9kYWwuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJuei1tb2RhbC5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0FBYUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcbmltcG9ydCB7IE92ZXJsYXkgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTnpNb2RhbENvbnRyb2xTZXJ2aWNlIH0gZnJvbSAnLi9uei1tb2RhbC1jb250cm9sLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOek1vZGFsUmVmIH0gZnJvbSAnLi9uei1tb2RhbC1yZWYuY2xhc3MnO1xyXG5pbXBvcnQgeyBOek1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9uei1tb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb25maXJtVHlwZSwgTW9kYWxPcHRpb25zRm9yU2VydmljZSB9IGZyb20gJy4vbnotbW9kYWwudHlwZSc7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE1vZGFsQnVpbGRlckZvclNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBvdmVybGF5O1xyXG4gICAgcHJpdmF0ZSBtb2RhbFJlZjtcclxuICAgIHByaXZhdGUgb3ZlcmxheVJlZjtcclxuICAgIGNvbnN0cnVjdG9yKG92ZXJsYXk6IE92ZXJsYXksIG9wdGlvbnM/OiBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlKTtcclxuICAgIGdldEluc3RhbmNlKCk6IE56TW9kYWxDb21wb25lbnQgfCBudWxsO1xyXG4gICAgZGVzdHJveU1vZGFsKCk6IHZvaWQ7XHJcbiAgICBwcml2YXRlIGNoYW5nZVByb3BzO1xyXG4gICAgcHJpdmF0ZSBjcmVhdGVNb2RhbDtcclxufVxyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOek1vZGFsU2VydmljZSB7XHJcbiAgICBwcml2YXRlIG92ZXJsYXk7XHJcbiAgICBwcml2YXRlIG1vZGFsQ29udHJvbDtcclxuICAgIHJlYWRvbmx5IG9wZW5Nb2RhbHM6IE56TW9kYWxSZWZbXTtcclxuICAgIHJlYWRvbmx5IGFmdGVyQWxsQ2xvc2U6IE9ic2VydmFibGU8dm9pZD47XHJcbiAgICBjb25zdHJ1Y3RvcihvdmVybGF5OiBPdmVybGF5LCBtb2RhbENvbnRyb2w6IE56TW9kYWxDb250cm9sU2VydmljZSk7XHJcbiAgICBjbG9zZUFsbCgpOiB2b2lkO1xyXG4gICAgY3JlYXRlPFQ+KG9wdGlvbnM/OiBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlPFQ+KTogTnpNb2RhbFJlZjxUPjtcclxuICAgIGNvbmZpcm08VD4ob3B0aW9ucz86IE1vZGFsT3B0aW9uc0ZvclNlcnZpY2U8VD4sIGNvbmZpcm1UeXBlPzogQ29uZmlybVR5cGUpOiBOek1vZGFsUmVmPFQ+O1xyXG4gICAgaW5mbzxUPihvcHRpb25zPzogTW9kYWxPcHRpb25zRm9yU2VydmljZTxUPik6IE56TW9kYWxSZWY8VD47XHJcbiAgICBzdWNjZXNzPFQ+KG9wdGlvbnM/OiBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlPFQ+KTogTnpNb2RhbFJlZjxUPjtcclxuICAgIGVycm9yPFQ+KG9wdGlvbnM/OiBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlPFQ+KTogTnpNb2RhbFJlZjxUPjtcclxuICAgIHdhcm5pbmc8VD4ob3B0aW9ucz86IE1vZGFsT3B0aW9uc0ZvclNlcnZpY2U8VD4pOiBOek1vZGFsUmVmPFQ+O1xyXG4gICAgcHJpdmF0ZSBzaW1wbGVDb25maXJtO1xyXG59XHJcbiJdfQ==
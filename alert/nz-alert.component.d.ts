/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { EventEmitter, OnChanges, SimpleChanges, TemplateRef } from '@angular/core';
import { NgClassType, NzConfigService } from 'ng-zorro-antd/core';
import * as ɵngcc0 from '@angular/core';
export declare class NzAlertComponent implements OnChanges {
    nzConfigService: NzConfigService;
    nzCloseText: string | TemplateRef<void>;
    nzIconType: NgClassType;
    nzMessage: string | TemplateRef<void>;
    nzDescription: string | TemplateRef<void>;
    nzType: 'success' | 'info' | 'warning' | 'error';
    nzCloseable: boolean;
    nzShowIcon: boolean;
    nzBanner: boolean;
    readonly nzOnClose: EventEmitter<boolean>;
    readonly iconType: NgClassType;
    destroy: boolean;
    iconTheme: string;
    isIconTypeObject: boolean;
    private isTypeSet;
    private isShowIconSet;
    private inferredIconType;
    constructor(nzConfigService: NzConfigService);
    closeAlert(): void;
    onFadeAnimationDone(): void;
    updateIconClassMap(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzAlertComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzAlertComponent, "nz-alert", ["nzAlert"], { "nzType": "nzType"; "nzBanner": "nzBanner"; "nzShowIcon": "nzShowIcon"; "nzCloseText": "nzCloseText"; "nzIconType": "nzIconType"; "nzMessage": "nzMessage"; "nzDescription": "nzDescription"; "nzCloseable": "nzCloseable"; }, { "nzOnClose": "nzOnClose"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYWxlcnQuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbIm56LWFsZXJ0LmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nQ2xhc3NUeXBlLCBOekNvbmZpZ1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOekFsZXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICAgIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlO1xyXG4gICAgbnpDbG9zZVRleHQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gICAgbnpJY29uVHlwZTogTmdDbGFzc1R5cGU7XHJcbiAgICBuek1lc3NhZ2U6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gICAgbnpEZXNjcmlwdGlvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgICBuelR5cGU6ICdzdWNjZXNzJyB8ICdpbmZvJyB8ICd3YXJuaW5nJyB8ICdlcnJvcic7XHJcbiAgICBuekNsb3NlYWJsZTogYm9vbGVhbjtcclxuICAgIG56U2hvd0ljb246IGJvb2xlYW47XHJcbiAgICBuekJhbm5lcjogYm9vbGVhbjtcclxuICAgIHJlYWRvbmx5IG56T25DbG9zZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG4gICAgcmVhZG9ubHkgaWNvblR5cGU6IE5nQ2xhc3NUeXBlO1xyXG4gICAgZGVzdHJveTogYm9vbGVhbjtcclxuICAgIGljb25UaGVtZTogc3RyaW5nO1xyXG4gICAgaXNJY29uVHlwZU9iamVjdDogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgaXNUeXBlU2V0O1xyXG4gICAgcHJpdmF0ZSBpc1Nob3dJY29uU2V0O1xyXG4gICAgcHJpdmF0ZSBpbmZlcnJlZEljb25UeXBlO1xyXG4gICAgY29uc3RydWN0b3IobnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UpO1xyXG4gICAgY2xvc2VBbGVydCgpOiB2b2lkO1xyXG4gICAgb25GYWRlQW5pbWF0aW9uRG9uZSgpOiB2b2lkO1xyXG4gICAgdXBkYXRlSWNvbkNsYXNzTWFwKCk6IHZvaWQ7XHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcclxufVxyXG4iXX0=
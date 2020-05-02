/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { NgZone, RendererFactory2 } from '@angular/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class NzDomEventService {
    private ngZone;
    private rendererFactory2;
    private readonly resizeSource;
    private readonly domEventListeners;
    private renderer;
    constructor(ngZone: NgZone, rendererFactory2: RendererFactory2);
    registerResizeListener(): Observable<void>;
    unregisterResizeListener(): void;
    private tryToStartListener;
    private tryToStopListener;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzDomEventService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NzDomEventService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZG9tLWV2ZW50LnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsibnotZG9tLWV2ZW50LnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQVNBOzs7Ozs7Ozs7Ozs7O0FBV0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgTmdab25lLCBSZW5kZXJlckZhY3RvcnkyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTnpEb21FdmVudFNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBuZ1pvbmU7XHJcbiAgICBwcml2YXRlIHJlbmRlcmVyRmFjdG9yeTI7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJlc2l6ZVNvdXJjZTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZG9tRXZlbnRMaXN0ZW5lcnM7XHJcbiAgICBwcml2YXRlIHJlbmRlcmVyO1xyXG4gICAgY29uc3RydWN0b3Iobmdab25lOiBOZ1pvbmUsIHJlbmRlcmVyRmFjdG9yeTI6IFJlbmRlcmVyRmFjdG9yeTIpO1xyXG4gICAgcmVnaXN0ZXJSZXNpemVMaXN0ZW5lcigpOiBPYnNlcnZhYmxlPHZvaWQ+O1xyXG4gICAgdW5yZWdpc3RlclJlc2l6ZUxpc3RlbmVyKCk6IHZvaWQ7XHJcbiAgICBwcml2YXRlIHRyeVRvU3RhcnRMaXN0ZW5lcjtcclxuICAgIHByaXZhdGUgdHJ5VG9TdG9wTGlzdGVuZXI7XHJcbn1cclxuIl19
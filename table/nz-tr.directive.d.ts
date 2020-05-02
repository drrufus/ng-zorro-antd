/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, Renderer2 } from '@angular/core';
import { NzTableComponent } from './nz-table.component';
import * as ɵngcc0 from '@angular/core';
export declare class NzTrDirective {
    private elementRef;
    private renderer;
    nzTableComponent: NzTableComponent;
    nzExpand: boolean;
    constructor(elementRef: ElementRef, renderer: Renderer2, nzTableComponent: NzTableComponent);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzTrDirective, [null, null, { optional: true; host: true; }]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NzTrDirective, "tr:not([mat-row]):not([mat-header-row])", never, { "nzExpand": "nzExpand"; }, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHIuZGlyZWN0aXZlLmQudHMiLCJzb3VyY2VzIjpbIm56LXRyLmRpcmVjdGl2ZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBU0E7Ozs7Ozs7O0FBTUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE56VGFibGVDb21wb25lbnQgfSBmcm9tICcuL256LXRhYmxlLmNvbXBvbmVudCc7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE56VHJEaXJlY3RpdmUge1xyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmO1xyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjtcclxuICAgIG56VGFibGVDb21wb25lbnQ6IE56VGFibGVDb21wb25lbnQ7XHJcbiAgICBuekV4cGFuZDogYm9vbGVhbjtcclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIG56VGFibGVDb21wb25lbnQ6IE56VGFibGVDb21wb25lbnQpO1xyXG59XHJcbiJdfQ==
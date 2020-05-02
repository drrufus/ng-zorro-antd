/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, EventEmitter, Renderer2 } from '@angular/core';
import { NzCheckboxComponent } from './nz-checkbox.component';
import * as ɵngcc0 from '@angular/core';
export declare class NzCheckboxWrapperComponent {
    readonly nzOnChange: EventEmitter<string[]>;
    private checkboxList;
    addCheckbox(value: NzCheckboxComponent): void;
    removeCheckbox(value: NzCheckboxComponent): void;
    outputValue(): string[];
    onChange(): void;
    constructor(renderer: Renderer2, elementRef: ElementRef);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzCheckboxWrapperComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzCheckboxWrapperComponent, "nz-checkbox-wrapper", ["nzCheckboxWrapper"], {}, { "nzOnChange": "nzOnChange"; }, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2hlY2tib3gtd3JhcHBlci5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsibnotY2hlY2tib3gtd3JhcHBlci5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQVNBOzs7Ozs7Ozs7O0FBUUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpDaGVja2JveENvbXBvbmVudCB9IGZyb20gJy4vbnotY2hlY2tib3guY29tcG9uZW50JztcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTnpDaGVja2JveFdyYXBwZXJDb21wb25lbnQge1xyXG4gICAgcmVhZG9ubHkgbnpPbkNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZ1tdPjtcclxuICAgIHByaXZhdGUgY2hlY2tib3hMaXN0O1xyXG4gICAgYWRkQ2hlY2tib3godmFsdWU6IE56Q2hlY2tib3hDb21wb25lbnQpOiB2b2lkO1xyXG4gICAgcmVtb3ZlQ2hlY2tib3godmFsdWU6IE56Q2hlY2tib3hDb21wb25lbnQpOiB2b2lkO1xyXG4gICAgb3V0cHV0VmFsdWUoKTogc3RyaW5nW107XHJcbiAgICBvbkNoYW5nZSgpOiB2b2lkO1xyXG4gICAgY29uc3RydWN0b3IocmVuZGVyZXI6IFJlbmRlcmVyMiwgZWxlbWVudFJlZjogRWxlbWVudFJlZik7XHJcbn1cclxuIl19
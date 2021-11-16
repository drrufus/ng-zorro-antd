/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { NzUpdateHostClassService } from 'ng-zorro-antd/core';
import * as ɵngcc0 from '@angular/core';
export declare class NzTdComponent implements OnChanges {
    private elementRef;
    private nzUpdateHostClassService;
    nzChecked: boolean;
    nzDisabled: boolean;
    nzIndeterminate: boolean;
    nzLeft: string;
    nzRight: string;
    nzAlign: 'left' | 'right' | 'center';
    nzIndentSize: number;
    nzExpand: boolean;
    nzShowExpand: boolean;
    nzShowCheckbox: boolean;
    nzBreakWord: boolean;
    readonly nzCheckedChange: EventEmitter<boolean>;
    readonly nzExpandChange: EventEmitter<boolean>;
    expandChange(e: Event): void;
    setClassMap(): void;
    constructor(elementRef: ElementRef, nzUpdateHostClassService: NzUpdateHostClassService);
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzTdComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzTdComponent, "td:not(.nz-disable-td):not([mat-cell])", never, { "nzChecked": "nzChecked"; "nzDisabled": "nzDisabled"; "nzIndeterminate": "nzIndeterminate"; "nzExpand": "nzExpand"; "nzShowExpand": "nzShowExpand"; "nzShowCheckbox": "nzShowCheckbox"; "nzBreakWord": "nzBreakWord"; "nzLeft": "nzLeft"; "nzRight": "nzRight"; "nzAlign": "nzAlign"; "nzIndentSize": "nzIndentSize"; }, { "nzCheckedChange": "nzCheckedChange"; "nzExpandChange": "nzExpandChange"; }, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGQuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbIm56LXRkLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTnpUZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY7XHJcbiAgICBwcml2YXRlIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTtcclxuICAgIG56Q2hlY2tlZDogYm9vbGVhbjtcclxuICAgIG56RGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgICBuekluZGV0ZXJtaW5hdGU6IGJvb2xlYW47XHJcbiAgICBuekxlZnQ6IHN0cmluZztcclxuICAgIG56UmlnaHQ6IHN0cmluZztcclxuICAgIG56QWxpZ246ICdsZWZ0JyB8ICdyaWdodCcgfCAnY2VudGVyJztcclxuICAgIG56SW5kZW50U2l6ZTogbnVtYmVyO1xyXG4gICAgbnpFeHBhbmQ6IGJvb2xlYW47XHJcbiAgICBuelNob3dFeHBhbmQ6IGJvb2xlYW47XHJcbiAgICBuelNob3dDaGVja2JveDogYm9vbGVhbjtcclxuICAgIG56QnJlYWtXb3JkOiBib29sZWFuO1xyXG4gICAgcmVhZG9ubHkgbnpDaGVja2VkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcbiAgICByZWFkb25seSBuekV4cGFuZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG4gICAgZXhwYW5kQ2hhbmdlKGU6IEV2ZW50KTogdm9pZDtcclxuICAgIHNldENsYXNzTWFwKCk6IHZvaWQ7XHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSk7XHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcclxufVxyXG4iXX0=
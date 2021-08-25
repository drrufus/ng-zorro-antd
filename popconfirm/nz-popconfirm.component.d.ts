/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, EventEmitter, TemplateRef } from '@angular/core';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { NzTooltipTrigger, NzToolTipComponent } from 'ng-zorro-antd/tooltip';
import { ElementRef } from '@angular/core';
import { FocusTrapFactory } from '@angular/cdk/a11y';
import * as ɵngcc0 from '@angular/core';
export declare class NzPopconfirmComponent extends NzToolTipComponent {
    private focusTrapFactory;
    noAnimation?: NzNoAnimationDirective | undefined;
    nzOkText: string;
    nzOkType: string;
    nzCancelText: string;
    nzCondition: boolean;
    nzIcon: string | TemplateRef<void>;
    readonly nzOnCancel: EventEmitter<void>;
    readonly nzOnConfirm: EventEmitter<void>;
    popoverContainer: ElementRef;
    private focusTrap;
    private previouslyFocusedElement;
    private focusableTitle;
    _prefix: string;
    _trigger: NzTooltipTrigger;
    _hasBackdrop: boolean;
    constructor(cdr: ChangeDetectorRef, focusTrapFactory: FocusTrapFactory, noAnimation?: NzNoAnimationDirective | undefined);
    show(): void;
    close(): void;
    onCancel(): void;
    onConfirm(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzPopconfirmComponent, [null, null, { optional: true; host: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzPopconfirmComponent, "nz-popconfirm", ["nzPopconfirmComponent"], { "nzOkType": "nzOkType"; "nzCondition": "nzCondition"; "nzOkText": "nzOkText"; "nzCancelText": "nzCancelText"; "nzIcon": "nzIcon"; }, { "nzOnCancel": "nzOnCancel"; "nzOnConfirm": "nzOnConfirm"; }, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcG9wY29uZmlybS5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsibnotcG9wY29uZmlybS5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OztBQVlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIEV2ZW50RW1pdHRlciwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56VG9vbHRpcFRyaWdnZXIsIE56VG9vbFRpcENvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvdG9vbHRpcCc7XHJcbmltcG9ydCB7IEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9jdXNUcmFwRmFjdG9yeSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTnpQb3Bjb25maXJtQ29tcG9uZW50IGV4dGVuZHMgTnpUb29sVGlwQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgZm9jdXNUcmFwRmFjdG9yeTtcclxuICAgIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSB8IHVuZGVmaW5lZDtcclxuICAgIG56T2tUZXh0OiBzdHJpbmc7XHJcbiAgICBuek9rVHlwZTogc3RyaW5nO1xyXG4gICAgbnpDYW5jZWxUZXh0OiBzdHJpbmc7XHJcbiAgICBuekNvbmRpdGlvbjogYm9vbGVhbjtcclxuICAgIG56SWNvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgICByZWFkb25seSBuek9uQ2FuY2VsOiBFdmVudEVtaXR0ZXI8dm9pZD47XHJcbiAgICByZWFkb25seSBuek9uQ29uZmlybTogRXZlbnRFbWl0dGVyPHZvaWQ+O1xyXG4gICAgcG9wb3ZlckNvbnRhaW5lcjogRWxlbWVudFJlZjtcclxuICAgIHByaXZhdGUgZm9jdXNUcmFwO1xyXG4gICAgcHJpdmF0ZSBwcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGZvY3VzYWJsZVRpdGxlO1xyXG4gICAgX3ByZWZpeDogc3RyaW5nO1xyXG4gICAgX3RyaWdnZXI6IE56VG9vbHRpcFRyaWdnZXI7XHJcbiAgICBfaGFzQmFja2Ryb3A6IGJvb2xlYW47XHJcbiAgICBjb25zdHJ1Y3RvcihjZHI6IENoYW5nZURldGVjdG9yUmVmLCBmb2N1c1RyYXBGYWN0b3J5OiBGb2N1c1RyYXBGYWN0b3J5LCBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmUgfCB1bmRlZmluZWQpO1xyXG4gICAgc2hvdygpOiB2b2lkO1xyXG4gICAgY2xvc2UoKTogdm9pZDtcclxuICAgIG9uQ2FuY2VsKCk6IHZvaWQ7XHJcbiAgICBvbkNvbmZpcm0oKTogdm9pZDtcclxufVxyXG4iXX0=
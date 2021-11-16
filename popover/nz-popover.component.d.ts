/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, ElementRef, TemplateRef } from '@angular/core';
import { NzNoAnimationDirective, NzTSType } from 'ng-zorro-antd/core';
import { NzToolTipComponent } from 'ng-zorro-antd/tooltip';
import * as ɵngcc0 from '@angular/core';
export declare class NzPopoverComponent extends NzToolTipComponent {
    noAnimation?: NzNoAnimationDirective | undefined;
    _prefix: string;
    /**
     * Use `neverUsedTemplate` to force `nzTemplate` to be catched by `nzPopoverContent`.
     */
    nzTitle: NzTSType;
    nzTitleTemplate: TemplateRef<void>;
    nzContent: NzTSType;
    nzContentTemplate: TemplateRef<void>;
    nzShowPopoverCloseButton: boolean;
    nzPopoverCloseButtonLabel: string;
    nzPopoverForceRestoreFocus: boolean;
    readonly simpleHeader: boolean;
    focusableHeader: ElementRef;
    constructor(cdr: ChangeDetectorRef, noAnimation?: NzNoAnimationDirective | undefined);
    focusOnHeader(): void;
    afterAppearing(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzPopoverComponent, [null, { optional: true; host: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzPopoverComponent, "nz-popover", ["nzPopoverComponent"], { "nzShowPopoverCloseButton": "nzShowPopoverCloseButton"; "nzPopoverCloseButtonLabel": "nzPopoverCloseButtonLabel"; "nzPopoverForceRestoreFocus": "nzPopoverForceRestoreFocus"; "nzTitle": "nzTitle"; "nzContent": "nzContent"; }, {}, ["nzTitleTemplate", "nzContentTemplate"], ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcG9wb3Zlci5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsibnotcG9wb3Zlci5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIEVsZW1lbnRSZWYsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE56Tm9BbmltYXRpb25EaXJlY3RpdmUsIE56VFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpUb29sVGlwQ29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC90b29sdGlwJztcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTnpQb3BvdmVyQ29tcG9uZW50IGV4dGVuZHMgTnpUb29sVGlwQ29tcG9uZW50IHtcclxuICAgIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSB8IHVuZGVmaW5lZDtcclxuICAgIF9wcmVmaXg6IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogVXNlIGBuZXZlclVzZWRUZW1wbGF0ZWAgdG8gZm9yY2UgYG56VGVtcGxhdGVgIHRvIGJlIGNhdGNoZWQgYnkgYG56UG9wb3ZlckNvbnRlbnRgLlxyXG4gICAgICovXHJcbiAgICBuelRpdGxlOiBOelRTVHlwZTtcclxuICAgIG56VGl0bGVUZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgICBuekNvbnRlbnQ6IE56VFNUeXBlO1xyXG4gICAgbnpDb250ZW50VGVtcGxhdGU6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gICAgbnpTaG93UG9wb3ZlckNsb3NlQnV0dG9uOiBib29sZWFuO1xyXG4gICAgbnpQb3BvdmVyQ2xvc2VCdXR0b25MYWJlbDogc3RyaW5nO1xyXG4gICAgbnpQb3BvdmVyRm9yY2VSZXN0b3JlRm9jdXM6IGJvb2xlYW47XHJcbiAgICByZWFkb25seSBzaW1wbGVIZWFkZXI6IGJvb2xlYW47XHJcbiAgICBmb2N1c2FibGVIZWFkZXI6IEVsZW1lbnRSZWY7XHJcbiAgICBjb25zdHJ1Y3RvcihjZHI6IENoYW5nZURldGVjdG9yUmVmLCBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmUgfCB1bmRlZmluZWQpO1xyXG4gICAgZm9jdXNPbkhlYWRlcigpOiB2b2lkO1xyXG4gICAgYWZ0ZXJBcHBlYXJpbmcoKTogdm9pZDtcclxufVxyXG4iXX0=
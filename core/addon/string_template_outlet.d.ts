/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class NzStringTemplateOutletDirective implements OnChanges {
    private viewContainer;
    private defaultTemplate;
    private isTemplate;
    private inputTemplate;
    private inputViewRef;
    private defaultViewRef;
    nzStringTemplateOutletContext: any | null;
    nzStringTemplateOutlet: string | TemplateRef<any>;
    recreateView(): void;
    private getType;
    private shouldRecreateView;
    private hasContextShapeChanged;
    private updateExistingContext;
    constructor(viewContainer: ViewContainerRef, defaultTemplate: TemplateRef<void>);
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzStringTemplateOutletDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NzStringTemplateOutletDirective, "[nzStringTemplateOutlet]", ["nzStringTemplateOutlet"], { "nzStringTemplateOutletContext": "nzStringTemplateOutletContext"; "nzStringTemplateOutlet": "nzStringTemplateOutlet"; }, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nX3RlbXBsYXRlX291dGxldC5kLnRzIiwic291cmNlcyI6WyJzdHJpbmdfdGVtcGxhdGVfb3V0bGV0LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOelN0cmluZ1RlbXBsYXRlT3V0bGV0RGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lcjtcclxuICAgIHByaXZhdGUgZGVmYXVsdFRlbXBsYXRlO1xyXG4gICAgcHJpdmF0ZSBpc1RlbXBsYXRlO1xyXG4gICAgcHJpdmF0ZSBpbnB1dFRlbXBsYXRlO1xyXG4gICAgcHJpdmF0ZSBpbnB1dFZpZXdSZWY7XHJcbiAgICBwcml2YXRlIGRlZmF1bHRWaWV3UmVmO1xyXG4gICAgbnpTdHJpbmdUZW1wbGF0ZU91dGxldENvbnRleHQ6IGFueSB8IG51bGw7XHJcbiAgICBuelN0cmluZ1RlbXBsYXRlT3V0bGV0OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gICAgcmVjcmVhdGVWaWV3KCk6IHZvaWQ7XHJcbiAgICBwcml2YXRlIGdldFR5cGU7XHJcbiAgICBwcml2YXRlIHNob3VsZFJlY3JlYXRlVmlldztcclxuICAgIHByaXZhdGUgaGFzQ29udGV4dFNoYXBlQ2hhbmdlZDtcclxuICAgIHByaXZhdGUgdXBkYXRlRXhpc3RpbmdDb250ZXh0O1xyXG4gICAgY29uc3RydWN0b3Iodmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZiwgZGVmYXVsdFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx2b2lkPik7XHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcclxufVxyXG4iXX0=
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { NzAutosizeDirective } from 'ng-zorro-antd/input';
import * as ɵngcc0 from '@angular/core';
export declare class NzTextEditComponent implements OnInit, OnDestroy {
    private host;
    private cdr;
    private i18n;
    editing: boolean;
    locale: any;
    private destroy$;
    text: string;
    readonly startEditing: EventEmitter<void>;
    readonly endEditing: EventEmitter<string>;
    textarea: ElementRef<HTMLTextAreaElement>;
    autosizeDirective: NzAutosizeDirective;
    beforeText: string;
    currentText: string;
    nativeElement: any;
    constructor(host: ElementRef, cdr: ChangeDetectorRef, i18n: NzI18nService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onClick(): void;
    confirm(): void;
    onInput(event: Event): void;
    onEnter(event: KeyboardEvent): void;
    onCancel(): void;
    focusAndSetValue(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzTextEditComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzTextEditComponent, "nz-text-edit", ["nzTextEdit"], { "text": "text"; }, { "startEditing": "startEditing"; "endEditing": "endEditing"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGV4dC1lZGl0LmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJuei10ZXh0LWVkaXQuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0FBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5pbXBvcnQgeyBOekF1dG9zaXplRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pbnB1dCc7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE56VGV4dEVkaXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgICBwcml2YXRlIGhvc3Q7XHJcbiAgICBwcml2YXRlIGNkcjtcclxuICAgIHByaXZhdGUgaTE4bjtcclxuICAgIGVkaXRpbmc6IGJvb2xlYW47XHJcbiAgICBsb2NhbGU6IGFueTtcclxuICAgIHByaXZhdGUgZGVzdHJveSQ7XHJcbiAgICB0ZXh0OiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBzdGFydEVkaXRpbmc6IEV2ZW50RW1pdHRlcjx2b2lkPjtcclxuICAgIHJlYWRvbmx5IGVuZEVkaXRpbmc6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG4gICAgdGV4dGFyZWE6IEVsZW1lbnRSZWY8SFRNTFRleHRBcmVhRWxlbWVudD47XHJcbiAgICBhdXRvc2l6ZURpcmVjdGl2ZTogTnpBdXRvc2l6ZURpcmVjdGl2ZTtcclxuICAgIGJlZm9yZVRleHQ6IHN0cmluZztcclxuICAgIGN1cnJlbnRUZXh0OiBzdHJpbmc7XHJcbiAgICBuYXRpdmVFbGVtZW50OiBhbnk7XHJcbiAgICBjb25zdHJ1Y3Rvcihob3N0OiBFbGVtZW50UmVmLCBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBpMThuOiBOekkxOG5TZXJ2aWNlKTtcclxuICAgIG5nT25Jbml0KCk6IHZvaWQ7XHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xyXG4gICAgb25DbGljaygpOiB2b2lkO1xyXG4gICAgY29uZmlybSgpOiB2b2lkO1xyXG4gICAgb25JbnB1dChldmVudDogRXZlbnQpOiB2b2lkO1xyXG4gICAgb25FbnRlcihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQ7XHJcbiAgICBvbkNhbmNlbCgpOiB2b2lkO1xyXG4gICAgZm9jdXNBbmRTZXRWYWx1ZSgpOiB2b2lkO1xyXG59XHJcbiJdfQ==
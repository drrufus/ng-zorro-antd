/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { FocusMonitor } from '@angular/cdk/a11y';
import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NzCheckboxWrapperComponent } from './nz-checkbox-wrapper.component';
import * as ɵngcc0 from '@angular/core';
export declare class NzCheckboxComponent implements OnInit, ControlValueAccessor, OnChanges, AfterViewInit, OnDestroy {
    private elementRef;
    private renderer;
    private nzCheckboxWrapperComponent;
    private cdr;
    private focusMonitor;
    onChange: (value: any) => void;
    onTouched: () => any;
    private inputElement;
    private contentElement;
    readonly nzCheckedChange: EventEmitter<boolean>;
    nzValue: string;
    nzAutoFocus: boolean;
    nzDisabled: boolean;
    nzIndeterminate: boolean;
    nzChecked: boolean;
    nzAriaLabel: string | null;
    hostClick(e: MouseEvent): void;
    innerCheckedChange(checked: boolean): void;
    updateAutoFocus(): void;
    writeValue(value: boolean): void;
    registerOnChange(fn: (_: boolean) => {}): void;
    registerOnTouched(fn: () => {}): void;
    setDisabledState(isDisabled: boolean): void;
    focus(): void;
    blur(): void;
    checkContent(): void;
    constructor(elementRef: ElementRef<HTMLElement>, renderer: Renderer2, nzCheckboxWrapperComponent: NzCheckboxWrapperComponent, cdr: ChangeDetectorRef, focusMonitor: FocusMonitor);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzCheckboxComponent, [null, null, { optional: true; }, null, null]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzCheckboxComponent, "[nz-checkbox]", ["nzCheckbox"], { "nzAutoFocus": "nzAutoFocus"; "nzDisabled": "nzDisabled"; "nzIndeterminate": "nzIndeterminate"; "nzChecked": "nzChecked"; "nzAriaLabel": "nzAriaLabel"; "nzValue": "nzValue"; }, { "nzCheckedChange": "nzCheckedChange"; }, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2hlY2tib3guY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbIm56LWNoZWNrYm94LmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFXQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdDQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5pbXBvcnQgeyBGb2N1c01vbml0b3IgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XHJcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIFJlbmRlcmVyMiwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTnpDaGVja2JveFdyYXBwZXJDb21wb25lbnQgfSBmcm9tICcuL256LWNoZWNrYm94LXdyYXBwZXIuY29tcG9uZW50JztcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTnpDaGVja2JveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjtcclxuICAgIHByaXZhdGUgcmVuZGVyZXI7XHJcbiAgICBwcml2YXRlIG56Q2hlY2tib3hXcmFwcGVyQ29tcG9uZW50O1xyXG4gICAgcHJpdmF0ZSBjZHI7XHJcbiAgICBwcml2YXRlIGZvY3VzTW9uaXRvcjtcclxuICAgIG9uQ2hhbmdlOiAodmFsdWU6IGFueSkgPT4gdm9pZDtcclxuICAgIG9uVG91Y2hlZDogKCkgPT4gYW55O1xyXG4gICAgcHJpdmF0ZSBpbnB1dEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGNvbnRlbnRFbGVtZW50O1xyXG4gICAgcmVhZG9ubHkgbnpDaGVja2VkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcbiAgICBuelZhbHVlOiBzdHJpbmc7XHJcbiAgICBuekF1dG9Gb2N1czogYm9vbGVhbjtcclxuICAgIG56RGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgICBuekluZGV0ZXJtaW5hdGU6IGJvb2xlYW47XHJcbiAgICBuekNoZWNrZWQ6IGJvb2xlYW47XHJcbiAgICBuekFyaWFMYWJlbDogc3RyaW5nIHwgbnVsbDtcclxuICAgIGhvc3RDbGljayhlOiBNb3VzZUV2ZW50KTogdm9pZDtcclxuICAgIGlubmVyQ2hlY2tlZENoYW5nZShjaGVja2VkOiBib29sZWFuKTogdm9pZDtcclxuICAgIHVwZGF0ZUF1dG9Gb2N1cygpOiB2b2lkO1xyXG4gICAgd3JpdGVWYWx1ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQ7XHJcbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYm9vbGVhbikgPT4ge30pOiB2b2lkO1xyXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KTogdm9pZDtcclxuICAgIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQ7XHJcbiAgICBmb2N1cygpOiB2b2lkO1xyXG4gICAgYmx1cigpOiB2b2lkO1xyXG4gICAgY2hlY2tDb250ZW50KCk6IHZvaWQ7XHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PiwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbnpDaGVja2JveFdyYXBwZXJDb21wb25lbnQ6IE56Q2hlY2tib3hXcmFwcGVyQ29tcG9uZW50LCBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBmb2N1c01vbml0b3I6IEZvY3VzTW9uaXRvcik7XHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZDtcclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XHJcbn1cclxuIl19
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
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzCheckboxComponent, "[nz-checkbox]", ["nzCheckbox"], { "nzAutoFocus": "nzAutoFocus"; "nzDisabled": "nzDisabled"; "nzIndeterminate": "nzIndeterminate"; "nzChecked": "nzChecked"; "nzValue": "nzValue"; }, { "nzCheckedChange": "nzCheckedChange"; }, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2hlY2tib3guY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbIm56LWNoZWNrYm94LmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFXQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0JBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcbmltcG9ydCB7IEZvY3VzTW9uaXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcclxuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBOekNoZWNrYm94V3JhcHBlckNvbXBvbmVudCB9IGZyb20gJy4vbnotY2hlY2tib3gtd3JhcHBlci5jb21wb25lbnQnO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOekNoZWNrYm94Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmO1xyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjtcclxuICAgIHByaXZhdGUgbnpDaGVja2JveFdyYXBwZXJDb21wb25lbnQ7XHJcbiAgICBwcml2YXRlIGNkcjtcclxuICAgIHByaXZhdGUgZm9jdXNNb25pdG9yO1xyXG4gICAgb25DaGFuZ2U6ICh2YWx1ZTogYW55KSA9PiB2b2lkO1xyXG4gICAgb25Ub3VjaGVkOiAoKSA9PiBhbnk7XHJcbiAgICBwcml2YXRlIGlucHV0RWxlbWVudDtcclxuICAgIHByaXZhdGUgY29udGVudEVsZW1lbnQ7XHJcbiAgICByZWFkb25seSBuekNoZWNrZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuICAgIG56VmFsdWU6IHN0cmluZztcclxuICAgIG56QXV0b0ZvY3VzOiBib29sZWFuO1xyXG4gICAgbnpEaXNhYmxlZDogYm9vbGVhbjtcclxuICAgIG56SW5kZXRlcm1pbmF0ZTogYm9vbGVhbjtcclxuICAgIG56Q2hlY2tlZDogYm9vbGVhbjtcclxuICAgIGhvc3RDbGljayhlOiBNb3VzZUV2ZW50KTogdm9pZDtcclxuICAgIGlubmVyQ2hlY2tlZENoYW5nZShjaGVja2VkOiBib29sZWFuKTogdm9pZDtcclxuICAgIHVwZGF0ZUF1dG9Gb2N1cygpOiB2b2lkO1xyXG4gICAgd3JpdGVWYWx1ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQ7XHJcbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYm9vbGVhbikgPT4ge30pOiB2b2lkO1xyXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KTogdm9pZDtcclxuICAgIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQ7XHJcbiAgICBmb2N1cygpOiB2b2lkO1xyXG4gICAgYmx1cigpOiB2b2lkO1xyXG4gICAgY2hlY2tDb250ZW50KCk6IHZvaWQ7XHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PiwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbnpDaGVja2JveFdyYXBwZXJDb21wb25lbnQ6IE56Q2hlY2tib3hXcmFwcGVyQ29tcG9uZW50LCBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBmb2N1c01vbml0b3I6IEZvY3VzTW9uaXRvcik7XHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZDtcclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XHJcbn1cclxuIl19
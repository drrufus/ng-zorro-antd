/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { FocusMonitor } from '@angular/cdk/a11y';
import { ChangeDetectorRef, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
export interface NzCheckBoxOptionInterface {
    label: string;
    value: string;
    checked?: boolean;
    disabled?: boolean;
}
export declare class NzCheckboxGroupComponent implements ControlValueAccessor, OnInit, OnDestroy {
    private elementRef;
    private focusMonitor;
    private cdr;
    onChange: (value: any) => void;
    onTouched: () => any;
    options: NzCheckBoxOptionInterface[];
    nzDisabled: boolean;
    onOptionChange(): void;
    trackByOption(_index: number, option: NzCheckBoxOptionInterface): string;
    constructor(elementRef: ElementRef, focusMonitor: FocusMonitor, cdr: ChangeDetectorRef, renderer: Renderer2);
    ngOnInit(): void;
    ngOnDestroy(): void;
    writeValue(value: NzCheckBoxOptionInterface[]): void;
    registerOnChange(fn: (_: NzCheckBoxOptionInterface[]) => {}): void;
    registerOnTouched(fn: () => {}): void;
    setDisabledState(isDisabled: boolean): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzCheckboxGroupComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzCheckboxGroupComponent, "nz-checkbox-group", ["nzCheckboxGroup"], { "nzDisabled": "nzDisabled"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2hlY2tib3gtZ3JvdXAuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbIm56LWNoZWNrYm94LWdyb3VwLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztBQVVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcbmltcG9ydCB7IEZvY3VzTW9uaXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIEVsZW1lbnRSZWYsIE9uRGVzdHJveSwgT25Jbml0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmV4cG9ydCBpbnRlcmZhY2UgTnpDaGVja0JveE9wdGlvbkludGVyZmFjZSB7XHJcbiAgICBsYWJlbDogc3RyaW5nO1xyXG4gICAgdmFsdWU6IHN0cmluZztcclxuICAgIGNoZWNrZWQ/OiBib29sZWFuO1xyXG4gICAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE56Q2hlY2tib3hHcm91cENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY7XHJcbiAgICBwcml2YXRlIGZvY3VzTW9uaXRvcjtcclxuICAgIHByaXZhdGUgY2RyO1xyXG4gICAgb25DaGFuZ2U6ICh2YWx1ZTogYW55KSA9PiB2b2lkO1xyXG4gICAgb25Ub3VjaGVkOiAoKSA9PiBhbnk7XHJcbiAgICBvcHRpb25zOiBOekNoZWNrQm94T3B0aW9uSW50ZXJmYWNlW107XHJcbiAgICBuekRpc2FibGVkOiBib29sZWFuO1xyXG4gICAgb25PcHRpb25DaGFuZ2UoKTogdm9pZDtcclxuICAgIHRyYWNrQnlPcHRpb24oX2luZGV4OiBudW1iZXIsIG9wdGlvbjogTnpDaGVja0JveE9wdGlvbkludGVyZmFjZSk6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIGZvY3VzTW9uaXRvcjogRm9jdXNNb25pdG9yLCBjZHI6IENoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlcjogUmVuZGVyZXIyKTtcclxuICAgIG5nT25Jbml0KCk6IHZvaWQ7XHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xyXG4gICAgd3JpdGVWYWx1ZSh2YWx1ZTogTnpDaGVja0JveE9wdGlvbkludGVyZmFjZVtdKTogdm9pZDtcclxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBOekNoZWNrQm94T3B0aW9uSW50ZXJmYWNlW10pID0+IHt9KTogdm9pZDtcclxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQ7XHJcbiAgICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkO1xyXG59XHJcbiJdfQ==
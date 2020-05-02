/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { OnDestroy } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { NzCascaderComponentAsSource, NzCascaderOption, NzCascaderSearchOption } from './nz-cascader-definitions';
/**
 * All data is stored and parsed in NzCascaderService.
 */
import * as ɵngcc0 from '@angular/core';
export declare class NzCascaderService implements OnDestroy {
    /** Activated options in each column. */
    activatedOptions: NzCascaderOption[];
    /** An array to store cascader items arranged in different layers. */
    columns: NzCascaderOption[][];
    /** If user has entered searching mode. */
    inSearchingMode: boolean;
    /** Selected options would be output to user. */
    selectedOptions: NzCascaderOption[];
    values: any[];
    readonly $loading: BehaviorSubject<boolean>;
    /**
     * Emit an event to notify cascader it needs to redraw because activated or
     * selected options are changed.
     */
    readonly $redraw: Subject<void>;
    /**
     * Emit an event when an option gets selected.
     * Emit true if a leaf options is selected.
     */
    readonly $optionSelected: Subject<{
        option: import("./nz-cascader-definitions").CascaderOption;
        index: number;
    } | null>;
    /**
     * Emit an event to notify cascader it needs to quit searching mode.
     * Only emit when user do select a searching option.
     */
    readonly $quitSearching: Subject<void>;
    /** To hold columns before entering searching mode. */
    private columnsSnapshot;
    /** To hold activated options before entering searching mode. */
    private activatedOptionsSnapshot;
    private cascaderComponent;
    /** Return cascader options in the first layer. */
    readonly nzOptions: NzCascaderOption[];
    ngOnDestroy(): void;
    /**
     * Make sure that value matches what is displayed in the dropdown.
     */
    syncOptions(first?: boolean): void;
    /**
     * Bind cascader component so this service could use inputs.
     */
    withComponent(cascaderComponent: NzCascaderComponentAsSource): void;
    /**
     * Reset all options. Rebuild searching options if in searching mode.
     */
    withOptions(options: NzCascaderOption[] | null): void;
    /**
     * Try to set a option as activated.
     * @param option Cascader option
     * @param columnIndex Of which column this option is in
     * @param performSelect Select
     * @param loadingChildren Try to load children asynchronously.
     */
    setOptionActivated(option: NzCascaderOption, columnIndex: number, performSelect?: boolean, loadingChildren?: boolean): void;
    setOptionSelected(option: NzCascaderOption, index: number): void;
    setOptionDeactivatedSinceColumn(column: number): void;
    /**
     * Set a searching option as selected, finishing up things.
     * @param option
     */
    setSearchOptionSelected(option: NzCascaderSearchOption): void;
    /**
     * Filter cascader options to reset `columns`.
     * @param searchValue The string user wants to search.
     */
    prepareSearchOptions(searchValue: string): void;
    /**
     * Toggle searching mode by UI. It deals with things not directly related to UI.
     * @param toSearching If this cascader is entering searching mode
     */
    toggleSearchingMode(toSearching: boolean): void;
    /**
     * Clear selected options.
     */
    clear(): void;
    getOptionLabel(o: NzCascaderOption): string;
    getOptionValue(o: NzCascaderOption): any;
    /**
     * Try to insert options into a column.
     * @param options Options to insert
     * @param columnIndex Position
     */
    private setColumnData;
    /**
     * Set all ancestor options as activated.
     */
    private trackAncestorActivatedOptions;
    private dropBehindActivatedOptions;
    private dropBehindColumns;
    /**
     * Load children of an option asynchronously.
     */
    loadChildren(option: NzCascaderOption | any, // tslint:disable-line:no-any
    columnIndex: number, success?: VoidFunction, failure?: VoidFunction): void;
    private isLoaded;
    /**
     * Find a option that has a given value in a given column.
     */
    private findOptionWithValue;
    private prepareEmitValue;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzCascaderService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NzCascaderService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FzY2FkZXIuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJuei1jYXNjYWRlci5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0FBYUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVHQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5pbXBvcnQgeyBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE56Q2FzY2FkZXJDb21wb25lbnRBc1NvdXJjZSwgTnpDYXNjYWRlck9wdGlvbiwgTnpDYXNjYWRlclNlYXJjaE9wdGlvbiB9IGZyb20gJy4vbnotY2FzY2FkZXItZGVmaW5pdGlvbnMnO1xyXG4vKipcclxuICogQWxsIGRhdGEgaXMgc3RvcmVkIGFuZCBwYXJzZWQgaW4gTnpDYXNjYWRlclNlcnZpY2UuXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOekNhc2NhZGVyU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgICAvKiogQWN0aXZhdGVkIG9wdGlvbnMgaW4gZWFjaCBjb2x1bW4uICovXHJcbiAgICBhY3RpdmF0ZWRPcHRpb25zOiBOekNhc2NhZGVyT3B0aW9uW107XHJcbiAgICAvKiogQW4gYXJyYXkgdG8gc3RvcmUgY2FzY2FkZXIgaXRlbXMgYXJyYW5nZWQgaW4gZGlmZmVyZW50IGxheWVycy4gKi9cclxuICAgIGNvbHVtbnM6IE56Q2FzY2FkZXJPcHRpb25bXVtdO1xyXG4gICAgLyoqIElmIHVzZXIgaGFzIGVudGVyZWQgc2VhcmNoaW5nIG1vZGUuICovXHJcbiAgICBpblNlYXJjaGluZ01vZGU6IGJvb2xlYW47XHJcbiAgICAvKiogU2VsZWN0ZWQgb3B0aW9ucyB3b3VsZCBiZSBvdXRwdXQgdG8gdXNlci4gKi9cclxuICAgIHNlbGVjdGVkT3B0aW9uczogTnpDYXNjYWRlck9wdGlvbltdO1xyXG4gICAgdmFsdWVzOiBhbnlbXTtcclxuICAgIHJlYWRvbmx5ICRsb2FkaW5nOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj47XHJcbiAgICAvKipcclxuICAgICAqIEVtaXQgYW4gZXZlbnQgdG8gbm90aWZ5IGNhc2NhZGVyIGl0IG5lZWRzIHRvIHJlZHJhdyBiZWNhdXNlIGFjdGl2YXRlZCBvclxyXG4gICAgICogc2VsZWN0ZWQgb3B0aW9ucyBhcmUgY2hhbmdlZC5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgJHJlZHJhdzogU3ViamVjdDx2b2lkPjtcclxuICAgIC8qKlxyXG4gICAgICogRW1pdCBhbiBldmVudCB3aGVuIGFuIG9wdGlvbiBnZXRzIHNlbGVjdGVkLlxyXG4gICAgICogRW1pdCB0cnVlIGlmIGEgbGVhZiBvcHRpb25zIGlzIHNlbGVjdGVkLlxyXG4gICAgICovXHJcbiAgICByZWFkb25seSAkb3B0aW9uU2VsZWN0ZWQ6IFN1YmplY3Q8e1xyXG4gICAgICAgIG9wdGlvbjogaW1wb3J0KFwiLi9uei1jYXNjYWRlci1kZWZpbml0aW9uc1wiKS5DYXNjYWRlck9wdGlvbjtcclxuICAgICAgICBpbmRleDogbnVtYmVyO1xyXG4gICAgfSB8IG51bGw+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBFbWl0IGFuIGV2ZW50IHRvIG5vdGlmeSBjYXNjYWRlciBpdCBuZWVkcyB0byBxdWl0IHNlYXJjaGluZyBtb2RlLlxyXG4gICAgICogT25seSBlbWl0IHdoZW4gdXNlciBkbyBzZWxlY3QgYSBzZWFyY2hpbmcgb3B0aW9uLlxyXG4gICAgICovXHJcbiAgICByZWFkb25seSAkcXVpdFNlYXJjaGluZzogU3ViamVjdDx2b2lkPjtcclxuICAgIC8qKiBUbyBob2xkIGNvbHVtbnMgYmVmb3JlIGVudGVyaW5nIHNlYXJjaGluZyBtb2RlLiAqL1xyXG4gICAgcHJpdmF0ZSBjb2x1bW5zU25hcHNob3Q7XHJcbiAgICAvKiogVG8gaG9sZCBhY3RpdmF0ZWQgb3B0aW9ucyBiZWZvcmUgZW50ZXJpbmcgc2VhcmNoaW5nIG1vZGUuICovXHJcbiAgICBwcml2YXRlIGFjdGl2YXRlZE9wdGlvbnNTbmFwc2hvdDtcclxuICAgIHByaXZhdGUgY2FzY2FkZXJDb21wb25lbnQ7XHJcbiAgICAvKiogUmV0dXJuIGNhc2NhZGVyIG9wdGlvbnMgaW4gdGhlIGZpcnN0IGxheWVyLiAqL1xyXG4gICAgcmVhZG9ubHkgbnpPcHRpb25zOiBOekNhc2NhZGVyT3B0aW9uW107XHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBNYWtlIHN1cmUgdGhhdCB2YWx1ZSBtYXRjaGVzIHdoYXQgaXMgZGlzcGxheWVkIGluIHRoZSBkcm9wZG93bi5cclxuICAgICAqL1xyXG4gICAgc3luY09wdGlvbnMoZmlyc3Q/OiBib29sZWFuKTogdm9pZDtcclxuICAgIC8qKlxyXG4gICAgICogQmluZCBjYXNjYWRlciBjb21wb25lbnQgc28gdGhpcyBzZXJ2aWNlIGNvdWxkIHVzZSBpbnB1dHMuXHJcbiAgICAgKi9cclxuICAgIHdpdGhDb21wb25lbnQoY2FzY2FkZXJDb21wb25lbnQ6IE56Q2FzY2FkZXJDb21wb25lbnRBc1NvdXJjZSk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIFJlc2V0IGFsbCBvcHRpb25zLiBSZWJ1aWxkIHNlYXJjaGluZyBvcHRpb25zIGlmIGluIHNlYXJjaGluZyBtb2RlLlxyXG4gICAgICovXHJcbiAgICB3aXRoT3B0aW9ucyhvcHRpb25zOiBOekNhc2NhZGVyT3B0aW9uW10gfCBudWxsKTogdm9pZDtcclxuICAgIC8qKlxyXG4gICAgICogVHJ5IHRvIHNldCBhIG9wdGlvbiBhcyBhY3RpdmF0ZWQuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9uIENhc2NhZGVyIG9wdGlvblxyXG4gICAgICogQHBhcmFtIGNvbHVtbkluZGV4IE9mIHdoaWNoIGNvbHVtbiB0aGlzIG9wdGlvbiBpcyBpblxyXG4gICAgICogQHBhcmFtIHBlcmZvcm1TZWxlY3QgU2VsZWN0XHJcbiAgICAgKiBAcGFyYW0gbG9hZGluZ0NoaWxkcmVuIFRyeSB0byBsb2FkIGNoaWxkcmVuIGFzeW5jaHJvbm91c2x5LlxyXG4gICAgICovXHJcbiAgICBzZXRPcHRpb25BY3RpdmF0ZWQob3B0aW9uOiBOekNhc2NhZGVyT3B0aW9uLCBjb2x1bW5JbmRleDogbnVtYmVyLCBwZXJmb3JtU2VsZWN0PzogYm9vbGVhbiwgbG9hZGluZ0NoaWxkcmVuPzogYm9vbGVhbik6IHZvaWQ7XHJcbiAgICBzZXRPcHRpb25TZWxlY3RlZChvcHRpb246IE56Q2FzY2FkZXJPcHRpb24sIGluZGV4OiBudW1iZXIpOiB2b2lkO1xyXG4gICAgc2V0T3B0aW9uRGVhY3RpdmF0ZWRTaW5jZUNvbHVtbihjb2x1bW46IG51bWJlcik6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIFNldCBhIHNlYXJjaGluZyBvcHRpb24gYXMgc2VsZWN0ZWQsIGZpbmlzaGluZyB1cCB0aGluZ3MuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9uXHJcbiAgICAgKi9cclxuICAgIHNldFNlYXJjaE9wdGlvblNlbGVjdGVkKG9wdGlvbjogTnpDYXNjYWRlclNlYXJjaE9wdGlvbik6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIEZpbHRlciBjYXNjYWRlciBvcHRpb25zIHRvIHJlc2V0IGBjb2x1bW5zYC5cclxuICAgICAqIEBwYXJhbSBzZWFyY2hWYWx1ZSBUaGUgc3RyaW5nIHVzZXIgd2FudHMgdG8gc2VhcmNoLlxyXG4gICAgICovXHJcbiAgICBwcmVwYXJlU2VhcmNoT3B0aW9ucyhzZWFyY2hWYWx1ZTogc3RyaW5nKTogdm9pZDtcclxuICAgIC8qKlxyXG4gICAgICogVG9nZ2xlIHNlYXJjaGluZyBtb2RlIGJ5IFVJLiBJdCBkZWFscyB3aXRoIHRoaW5ncyBub3QgZGlyZWN0bHkgcmVsYXRlZCB0byBVSS5cclxuICAgICAqIEBwYXJhbSB0b1NlYXJjaGluZyBJZiB0aGlzIGNhc2NhZGVyIGlzIGVudGVyaW5nIHNlYXJjaGluZyBtb2RlXHJcbiAgICAgKi9cclxuICAgIHRvZ2dsZVNlYXJjaGluZ01vZGUodG9TZWFyY2hpbmc6IGJvb2xlYW4pOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDbGVhciBzZWxlY3RlZCBvcHRpb25zLlxyXG4gICAgICovXHJcbiAgICBjbGVhcigpOiB2b2lkO1xyXG4gICAgZ2V0T3B0aW9uTGFiZWwobzogTnpDYXNjYWRlck9wdGlvbik6IHN0cmluZztcclxuICAgIGdldE9wdGlvblZhbHVlKG86IE56Q2FzY2FkZXJPcHRpb24pOiBhbnk7XHJcbiAgICAvKipcclxuICAgICAqIFRyeSB0byBpbnNlcnQgb3B0aW9ucyBpbnRvIGEgY29sdW1uLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgT3B0aW9ucyB0byBpbnNlcnRcclxuICAgICAqIEBwYXJhbSBjb2x1bW5JbmRleCBQb3NpdGlvblxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHNldENvbHVtbkRhdGE7XHJcbiAgICAvKipcclxuICAgICAqIFNldCBhbGwgYW5jZXN0b3Igb3B0aW9ucyBhcyBhY3RpdmF0ZWQuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdHJhY2tBbmNlc3RvckFjdGl2YXRlZE9wdGlvbnM7XHJcbiAgICBwcml2YXRlIGRyb3BCZWhpbmRBY3RpdmF0ZWRPcHRpb25zO1xyXG4gICAgcHJpdmF0ZSBkcm9wQmVoaW5kQ29sdW1ucztcclxuICAgIC8qKlxyXG4gICAgICogTG9hZCBjaGlsZHJlbiBvZiBhbiBvcHRpb24gYXN5bmNocm9ub3VzbHkuXHJcbiAgICAgKi9cclxuICAgIGxvYWRDaGlsZHJlbihvcHRpb246IE56Q2FzY2FkZXJPcHRpb24gfCBhbnksIC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcbiAgICBjb2x1bW5JbmRleDogbnVtYmVyLCBzdWNjZXNzPzogVm9pZEZ1bmN0aW9uLCBmYWlsdXJlPzogVm9pZEZ1bmN0aW9uKTogdm9pZDtcclxuICAgIHByaXZhdGUgaXNMb2FkZWQ7XHJcbiAgICAvKipcclxuICAgICAqIEZpbmQgYSBvcHRpb24gdGhhdCBoYXMgYSBnaXZlbiB2YWx1ZSBpbiBhIGdpdmVuIGNvbHVtbi5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBmaW5kT3B0aW9uV2l0aFZhbHVlO1xyXG4gICAgcHJpdmF0ZSBwcmVwYXJlRW1pdFZhbHVlO1xyXG59XHJcbiJdfQ==
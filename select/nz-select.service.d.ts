/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ReplaySubject, Subject } from 'rxjs';
import { NzOptionGroupComponent } from './nz-option-group.component';
import { NzOptionComponent } from './nz-option.component';
import { TFilterOption } from './nz-option.pipe';
import * as ɵngcc0 from '@angular/core';
export declare class NzSelectService {
    /** Input params **/
    autoClearSearchValue: boolean;
    serverSearch: boolean;
    filterOption: TFilterOption;
    mode: 'default' | 'multiple' | 'tags';
    maxMultipleCount: number;
    disabled: boolean;
    compareWith: (o1: any, o2: any) => boolean;
    /** selectedValueChanged should emit ngModelChange or not **/
    private listOfSelectedValueWithEmit$;
    /** ContentChildren Change **/
    private mapOfTemplateOption$;
    /** searchValue Change **/
    private searchValueRaw$;
    private listOfFilteredOption;
    private openRaw$;
    private checkRaw$;
    private open;
    clearInput$: Subject<boolean>;
    searchValue: string;
    isShowNotFound: boolean;
    /** animation event **/
    animationEvent$: Subject<unknown>;
    /** open event **/
    open$: import("rxjs").Observable<boolean>;
    activatedOption: NzOptionComponent | null;
    activatedOption$: ReplaySubject<NzOptionComponent | null>;
    listOfSelectedValue$: import("rxjs").Observable<any[]>;
    modelChange$: import("rxjs").Observable<any[] | null>;
    searchValue$: import("rxjs").Observable<string>;
    listOfSelectedValue: any[];
    /** flat ViewChildren **/
    listOfTemplateOption: NzOptionComponent[];
    /** tag option **/
    listOfTagOption: NzOptionComponent[];
    /** tag option concat template option **/
    listOfTagAndTemplateOption: NzOptionComponent[];
    /** ViewChildren **/
    listOfNzOptionComponent: NzOptionComponent[];
    listOfNzOptionGroupComponent: NzOptionGroupComponent[];
    /** click or enter add tag option **/
    addedTagOption: NzOptionComponent | null;
    /** display in top control **/
    listOfCachedSelectedOption: NzOptionComponent[];
    /** selected value or ViewChildren change **/
    valueOrOption$: import("rxjs").Observable<[any[], {
        listOfNzOptionComponent: NzOptionComponent[];
        listOfNzOptionGroupComponent: NzOptionGroupComponent[];
    }]>;
    check$: import("rxjs").Observable<unknown>;
    clickOption(option: NzOptionComponent): void;
    updateListOfCachedOption(): void;
    updateListOfTagOption(): void;
    updateAddTagOption(): void;
    updateListOfFilteredOption(): void;
    clearInput(): void;
    updateListOfSelectedValue(value: any[], emit: boolean): void;
    updateActivatedOption(option: NzOptionComponent | null): void;
    tokenSeparate(inputValue: string, tokenSeparators: string[]): void;
    includesSeparators(str: string | string[], separators: string[]): boolean;
    splitBySeparators(str: string | string[], separators: string[]): string[];
    resetActivatedOptionIfNeeded(): void;
    updateTemplateOption(listOfNzOptionComponent: NzOptionComponent[], listOfNzOptionGroupComponent: NzOptionGroupComponent[]): void;
    updateSearchValue(value: string): void;
    updateSelectedValueByLabelList(listOfLabel: string[]): void;
    onKeyDown(e: KeyboardEvent): void;
    removeValueFormSelected(option: NzOptionComponent): void;
    setOpenState(value: boolean): void;
    check(): void;
    readonly isSingleMode: boolean;
    readonly isTagsMode: boolean;
    readonly isMultipleMode: boolean;
    readonly isMultipleOrTags: boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzSelectService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NzSelectService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2VsZWN0LnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsibnotc2VsZWN0LnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwRUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgUmVwbGF5U3ViamVjdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBOek9wdGlvbkdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9uei1vcHRpb24tZ3JvdXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpPcHRpb25Db21wb25lbnQgfSBmcm9tICcuL256LW9wdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBURmlsdGVyT3B0aW9uIH0gZnJvbSAnLi9uei1vcHRpb24ucGlwZSc7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE56U2VsZWN0U2VydmljZSB7XHJcbiAgICAvKiogSW5wdXQgcGFyYW1zICoqL1xyXG4gICAgYXV0b0NsZWFyU2VhcmNoVmFsdWU6IGJvb2xlYW47XHJcbiAgICBzZXJ2ZXJTZWFyY2g6IGJvb2xlYW47XHJcbiAgICBmaWx0ZXJPcHRpb246IFRGaWx0ZXJPcHRpb247XHJcbiAgICBtb2RlOiAnZGVmYXVsdCcgfCAnbXVsdGlwbGUnIHwgJ3RhZ3MnO1xyXG4gICAgbWF4TXVsdGlwbGVDb3VudDogbnVtYmVyO1xyXG4gICAgZGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgICBjb21wYXJlV2l0aDogKG8xOiBhbnksIG8yOiBhbnkpID0+IGJvb2xlYW47XHJcbiAgICAvKiogc2VsZWN0ZWRWYWx1ZUNoYW5nZWQgc2hvdWxkIGVtaXQgbmdNb2RlbENoYW5nZSBvciBub3QgKiovXHJcbiAgICBwcml2YXRlIGxpc3RPZlNlbGVjdGVkVmFsdWVXaXRoRW1pdCQ7XHJcbiAgICAvKiogQ29udGVudENoaWxkcmVuIENoYW5nZSAqKi9cclxuICAgIHByaXZhdGUgbWFwT2ZUZW1wbGF0ZU9wdGlvbiQ7XHJcbiAgICAvKiogc2VhcmNoVmFsdWUgQ2hhbmdlICoqL1xyXG4gICAgcHJpdmF0ZSBzZWFyY2hWYWx1ZVJhdyQ7XHJcbiAgICBwcml2YXRlIGxpc3RPZkZpbHRlcmVkT3B0aW9uO1xyXG4gICAgcHJpdmF0ZSBvcGVuUmF3JDtcclxuICAgIHByaXZhdGUgY2hlY2tSYXckO1xyXG4gICAgcHJpdmF0ZSBvcGVuO1xyXG4gICAgY2xlYXJJbnB1dCQ6IFN1YmplY3Q8Ym9vbGVhbj47XHJcbiAgICBzZWFyY2hWYWx1ZTogc3RyaW5nO1xyXG4gICAgaXNTaG93Tm90Rm91bmQ6IGJvb2xlYW47XHJcbiAgICAvKiogYW5pbWF0aW9uIGV2ZW50ICoqL1xyXG4gICAgYW5pbWF0aW9uRXZlbnQkOiBTdWJqZWN0PHVua25vd24+O1xyXG4gICAgLyoqIG9wZW4gZXZlbnQgKiovXHJcbiAgICBvcGVuJDogaW1wb3J0KFwicnhqc1wiKS5PYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG4gICAgYWN0aXZhdGVkT3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudCB8IG51bGw7XHJcbiAgICBhY3RpdmF0ZWRPcHRpb24kOiBSZXBsYXlTdWJqZWN0PE56T3B0aW9uQ29tcG9uZW50IHwgbnVsbD47XHJcbiAgICBsaXN0T2ZTZWxlY3RlZFZhbHVlJDogaW1wb3J0KFwicnhqc1wiKS5PYnNlcnZhYmxlPGFueVtdPjtcclxuICAgIG1vZGVsQ2hhbmdlJDogaW1wb3J0KFwicnhqc1wiKS5PYnNlcnZhYmxlPGFueVtdIHwgbnVsbD47XHJcbiAgICBzZWFyY2hWYWx1ZSQ6IGltcG9ydChcInJ4anNcIikuT2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG4gICAgbGlzdE9mU2VsZWN0ZWRWYWx1ZTogYW55W107XHJcbiAgICAvKiogZmxhdCBWaWV3Q2hpbGRyZW4gKiovXHJcbiAgICBsaXN0T2ZUZW1wbGF0ZU9wdGlvbjogTnpPcHRpb25Db21wb25lbnRbXTtcclxuICAgIC8qKiB0YWcgb3B0aW9uICoqL1xyXG4gICAgbGlzdE9mVGFnT3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudFtdO1xyXG4gICAgLyoqIHRhZyBvcHRpb24gY29uY2F0IHRlbXBsYXRlIG9wdGlvbiAqKi9cclxuICAgIGxpc3RPZlRhZ0FuZFRlbXBsYXRlT3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudFtdO1xyXG4gICAgLyoqIFZpZXdDaGlsZHJlbiAqKi9cclxuICAgIGxpc3RPZk56T3B0aW9uQ29tcG9uZW50OiBOek9wdGlvbkNvbXBvbmVudFtdO1xyXG4gICAgbGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudDogTnpPcHRpb25Hcm91cENvbXBvbmVudFtdO1xyXG4gICAgLyoqIGNsaWNrIG9yIGVudGVyIGFkZCB0YWcgb3B0aW9uICoqL1xyXG4gICAgYWRkZWRUYWdPcHRpb246IE56T3B0aW9uQ29tcG9uZW50IHwgbnVsbDtcclxuICAgIC8qKiBkaXNwbGF5IGluIHRvcCBjb250cm9sICoqL1xyXG4gICAgbGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb246IE56T3B0aW9uQ29tcG9uZW50W107XHJcbiAgICAvKiogc2VsZWN0ZWQgdmFsdWUgb3IgVmlld0NoaWxkcmVuIGNoYW5nZSAqKi9cclxuICAgIHZhbHVlT3JPcHRpb24kOiBpbXBvcnQoXCJyeGpzXCIpLk9ic2VydmFibGU8W2FueVtdLCB7XHJcbiAgICAgICAgbGlzdE9mTnpPcHRpb25Db21wb25lbnQ6IE56T3B0aW9uQ29tcG9uZW50W107XHJcbiAgICAgICAgbGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudDogTnpPcHRpb25Hcm91cENvbXBvbmVudFtdO1xyXG4gICAgfV0+O1xyXG4gICAgY2hlY2skOiBpbXBvcnQoXCJyeGpzXCIpLk9ic2VydmFibGU8dW5rbm93bj47XHJcbiAgICBjbGlja09wdGlvbihvcHRpb246IE56T3B0aW9uQ29tcG9uZW50KTogdm9pZDtcclxuICAgIHVwZGF0ZUxpc3RPZkNhY2hlZE9wdGlvbigpOiB2b2lkO1xyXG4gICAgdXBkYXRlTGlzdE9mVGFnT3B0aW9uKCk6IHZvaWQ7XHJcbiAgICB1cGRhdGVBZGRUYWdPcHRpb24oKTogdm9pZDtcclxuICAgIHVwZGF0ZUxpc3RPZkZpbHRlcmVkT3B0aW9uKCk6IHZvaWQ7XHJcbiAgICBjbGVhcklucHV0KCk6IHZvaWQ7XHJcbiAgICB1cGRhdGVMaXN0T2ZTZWxlY3RlZFZhbHVlKHZhbHVlOiBhbnlbXSwgZW1pdDogYm9vbGVhbik6IHZvaWQ7XHJcbiAgICB1cGRhdGVBY3RpdmF0ZWRPcHRpb24ob3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudCB8IG51bGwpOiB2b2lkO1xyXG4gICAgdG9rZW5TZXBhcmF0ZShpbnB1dFZhbHVlOiBzdHJpbmcsIHRva2VuU2VwYXJhdG9yczogc3RyaW5nW10pOiB2b2lkO1xyXG4gICAgaW5jbHVkZXNTZXBhcmF0b3JzKHN0cjogc3RyaW5nIHwgc3RyaW5nW10sIHNlcGFyYXRvcnM6IHN0cmluZ1tdKTogYm9vbGVhbjtcclxuICAgIHNwbGl0QnlTZXBhcmF0b3JzKHN0cjogc3RyaW5nIHwgc3RyaW5nW10sIHNlcGFyYXRvcnM6IHN0cmluZ1tdKTogc3RyaW5nW107XHJcbiAgICByZXNldEFjdGl2YXRlZE9wdGlvbklmTmVlZGVkKCk6IHZvaWQ7XHJcbiAgICB1cGRhdGVUZW1wbGF0ZU9wdGlvbihsaXN0T2ZOek9wdGlvbkNvbXBvbmVudDogTnpPcHRpb25Db21wb25lbnRbXSwgbGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudDogTnpPcHRpb25Hcm91cENvbXBvbmVudFtdKTogdm9pZDtcclxuICAgIHVwZGF0ZVNlYXJjaFZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkO1xyXG4gICAgdXBkYXRlU2VsZWN0ZWRWYWx1ZUJ5TGFiZWxMaXN0KGxpc3RPZkxhYmVsOiBzdHJpbmdbXSk6IHZvaWQ7XHJcbiAgICBvbktleURvd24oZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQ7XHJcbiAgICByZW1vdmVWYWx1ZUZvcm1TZWxlY3RlZChvcHRpb246IE56T3B0aW9uQ29tcG9uZW50KTogdm9pZDtcclxuICAgIHNldE9wZW5TdGF0ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQ7XHJcbiAgICBjaGVjaygpOiB2b2lkO1xyXG4gICAgcmVhZG9ubHkgaXNTaW5nbGVNb2RlOiBib29sZWFuO1xyXG4gICAgcmVhZG9ubHkgaXNUYWdzTW9kZTogYm9vbGVhbjtcclxuICAgIHJlYWRvbmx5IGlzTXVsdGlwbGVNb2RlOiBib29sZWFuO1xyXG4gICAgcmVhZG9ubHkgaXNNdWx0aXBsZU9yVGFnczogYm9vbGVhbjtcclxufVxyXG4iXX0=
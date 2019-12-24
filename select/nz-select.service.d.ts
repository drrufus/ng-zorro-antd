import { ReplaySubject, Subject } from 'rxjs';
import { NzOptionGroupComponent } from './nz-option-group.component';
import { NzOptionComponent } from './nz-option.component';
import { TFilterOption } from './nz-option.pipe';
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDef<NzSelectService>;
    static ɵprov: i0.ɵɵInjectableDef<NzSelectService>;
}

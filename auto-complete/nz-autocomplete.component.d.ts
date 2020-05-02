/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AfterContentInit, AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnDestroy, QueryList, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { CompareWith, NzDropDownPosition, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { NzAutocompleteOptionComponent, NzOptionSelectionChange } from './nz-autocomplete-option.component';
import * as ɵngcc0 from '@angular/core';
export interface AutocompleteDataSourceItem {
    value: string;
    label: string;
}
export declare type AutocompleteDataSource = AutocompleteDataSourceItem[] | string[] | number[];
export declare class NzAutocompleteComponent implements AfterContentInit, AfterViewInit, OnDestroy {
    private changeDetectorRef;
    private ngZone;
    noAnimation?: NzNoAnimationDirective | undefined;
    nzWidth: number;
    nzOverlayClassName: string;
    nzOverlayStyle: {
        [key: string]: string;
    };
    nzDefaultActiveFirstOption: boolean;
    nzBackfill: boolean;
    compareWith: CompareWith;
    nzDataSource: AutocompleteDataSource;
    readonly selectionChange: EventEmitter<NzAutocompleteOptionComponent>;
    showPanel: boolean;
    isOpen: boolean;
    activeItem: NzAutocompleteOptionComponent;
    dropDownPosition: NzDropDownPosition;
    /**
     * Options accessor, its source may be content or dataSource
     */
    readonly options: QueryList<NzAutocompleteOptionComponent>;
    /** Provided by content */
    fromContentOptions: QueryList<NzAutocompleteOptionComponent>;
    /** Provided by dataSource */
    fromDataSourceOptions: QueryList<NzAutocompleteOptionComponent>;
    /** cdk-overlay */
    template: TemplateRef<{}>;
    panel: ElementRef;
    content: ElementRef;
    private activeItemIndex;
    private selectionChangeSubscription;
    private dataSourceChangeSubscription;
    /** Options changes listener */
    readonly optionSelectionChanges: Observable<NzOptionSelectionChange>;
    constructor(changeDetectorRef: ChangeDetectorRef, ngZone: NgZone, noAnimation?: NzNoAnimationDirective | undefined);
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    setVisibility(): void;
    setActiveItem(index: number): void;
    setNextItemActive(): void;
    setPreviousItemActive(): void;
    getOptionIndex(value: any): number;
    updatePosition(position: NzDropDownPosition): void;
    private optionsInit;
    /**
     * Clear the status of options
     */
    clearSelectedOptions(skip?: NzAutocompleteOptionComponent | null, deselect?: boolean): void;
    private subscribeOptionChanges;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzAutocompleteComponent, [null, null, { optional: true; host: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzAutocompleteComponent, "nz-autocomplete", ["nzAutocomplete"], { "nzOverlayClassName": "nzOverlayClassName"; "nzOverlayStyle": "nzOverlayStyle"; "nzDefaultActiveFirstOption": "nzDefaultActiveFirstOption"; "nzBackfill": "nzBackfill"; "compareWith": "compareWith"; "nzWidth": "nzWidth"; "nzDataSource": "nzDataSource"; }, { "selectionChange": "selectionChange"; }, ["fromContentOptions"], ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJuei1hdXRvY29tcGxldGUuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQVdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0RBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcbmltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE5nWm9uZSwgT25EZXN0cm95LCBRdWVyeUxpc3QsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQ29tcGFyZVdpdGgsIE56RHJvcERvd25Qb3NpdGlvbiwgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50LCBOek9wdGlvblNlbGVjdGlvbkNoYW5nZSB9IGZyb20gJy4vbnotYXV0b2NvbXBsZXRlLW9wdGlvbi5jb21wb25lbnQnO1xyXG5leHBvcnQgaW50ZXJmYWNlIEF1dG9jb21wbGV0ZURhdGFTb3VyY2VJdGVtIHtcclxuICAgIHZhbHVlOiBzdHJpbmc7XHJcbiAgICBsYWJlbDogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBkZWNsYXJlIHR5cGUgQXV0b2NvbXBsZXRlRGF0YVNvdXJjZSA9IEF1dG9jb21wbGV0ZURhdGFTb3VyY2VJdGVtW10gfCBzdHJpbmdbXSB8IG51bWJlcltdO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOekF1dG9jb21wbGV0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmO1xyXG4gICAgcHJpdmF0ZSBuZ1pvbmU7XHJcbiAgICBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmUgfCB1bmRlZmluZWQ7XHJcbiAgICBueldpZHRoOiBudW1iZXI7XHJcbiAgICBuek92ZXJsYXlDbGFzc05hbWU6IHN0cmluZztcclxuICAgIG56T3ZlcmxheVN0eWxlOiB7XHJcbiAgICAgICAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xyXG4gICAgfTtcclxuICAgIG56RGVmYXVsdEFjdGl2ZUZpcnN0T3B0aW9uOiBib29sZWFuO1xyXG4gICAgbnpCYWNrZmlsbDogYm9vbGVhbjtcclxuICAgIGNvbXBhcmVXaXRoOiBDb21wYXJlV2l0aDtcclxuICAgIG56RGF0YVNvdXJjZTogQXV0b2NvbXBsZXRlRGF0YVNvdXJjZTtcclxuICAgIHJlYWRvbmx5IHNlbGVjdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50PjtcclxuICAgIHNob3dQYW5lbDogYm9vbGVhbjtcclxuICAgIGlzT3BlbjogYm9vbGVhbjtcclxuICAgIGFjdGl2ZUl0ZW06IE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50O1xyXG4gICAgZHJvcERvd25Qb3NpdGlvbjogTnpEcm9wRG93blBvc2l0aW9uO1xyXG4gICAgLyoqXHJcbiAgICAgKiBPcHRpb25zIGFjY2Vzc29yLCBpdHMgc291cmNlIG1heSBiZSBjb250ZW50IG9yIGRhdGFTb3VyY2VcclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgb3B0aW9uczogUXVlcnlMaXN0PE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50PjtcclxuICAgIC8qKiBQcm92aWRlZCBieSBjb250ZW50ICovXHJcbiAgICBmcm9tQ29udGVudE9wdGlvbnM6IFF1ZXJ5TGlzdDxOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudD47XHJcbiAgICAvKiogUHJvdmlkZWQgYnkgZGF0YVNvdXJjZSAqL1xyXG4gICAgZnJvbURhdGFTb3VyY2VPcHRpb25zOiBRdWVyeUxpc3Q8TnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQ+O1xyXG4gICAgLyoqIGNkay1vdmVybGF5ICovXHJcbiAgICB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8e30+O1xyXG4gICAgcGFuZWw6IEVsZW1lbnRSZWY7XHJcbiAgICBjb250ZW50OiBFbGVtZW50UmVmO1xyXG4gICAgcHJpdmF0ZSBhY3RpdmVJdGVtSW5kZXg7XHJcbiAgICBwcml2YXRlIHNlbGVjdGlvbkNoYW5nZVN1YnNjcmlwdGlvbjtcclxuICAgIHByaXZhdGUgZGF0YVNvdXJjZUNoYW5nZVN1YnNjcmlwdGlvbjtcclxuICAgIC8qKiBPcHRpb25zIGNoYW5nZXMgbGlzdGVuZXIgKi9cclxuICAgIHJlYWRvbmx5IG9wdGlvblNlbGVjdGlvbkNoYW5nZXM6IE9ic2VydmFibGU8TnpPcHRpb25TZWxlY3Rpb25DaGFuZ2U+O1xyXG4gICAgY29uc3RydWN0b3IoY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLCBuZ1pvbmU6IE5nWm9uZSwgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIHwgdW5kZWZpbmVkKTtcclxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkO1xyXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQ7XHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xyXG4gICAgc2V0VmlzaWJpbGl0eSgpOiB2b2lkO1xyXG4gICAgc2V0QWN0aXZlSXRlbShpbmRleDogbnVtYmVyKTogdm9pZDtcclxuICAgIHNldE5leHRJdGVtQWN0aXZlKCk6IHZvaWQ7XHJcbiAgICBzZXRQcmV2aW91c0l0ZW1BY3RpdmUoKTogdm9pZDtcclxuICAgIGdldE9wdGlvbkluZGV4KHZhbHVlOiBhbnkpOiBudW1iZXI7XHJcbiAgICB1cGRhdGVQb3NpdGlvbihwb3NpdGlvbjogTnpEcm9wRG93blBvc2l0aW9uKTogdm9pZDtcclxuICAgIHByaXZhdGUgb3B0aW9uc0luaXQ7XHJcbiAgICAvKipcclxuICAgICAqIENsZWFyIHRoZSBzdGF0dXMgb2Ygb3B0aW9uc1xyXG4gICAgICovXHJcbiAgICBjbGVhclNlbGVjdGVkT3B0aW9ucyhza2lwPzogTnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQgfCBudWxsLCBkZXNlbGVjdD86IGJvb2xlYW4pOiB2b2lkO1xyXG4gICAgcHJpdmF0ZSBzdWJzY3JpYmVPcHRpb25DaGFuZ2VzO1xyXG59XHJcbiJdfQ==
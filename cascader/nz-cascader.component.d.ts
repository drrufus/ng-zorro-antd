/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CdkConnectedOverlay, ConnectedOverlayPositionChange, ConnectionPositionPair } from '@angular/cdk/overlay';
import { ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, OnInit, QueryList, Renderer2, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NgClassType, NgStyleInterface, NzConfigService, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { NzCascaderI18nInterface, NzI18nService } from 'ng-zorro-antd/i18n';
import { NzCascaderComponentAsSource, NzCascaderExpandTrigger, NzCascaderOption, NzCascaderSize, NzCascaderTriggerType, NzShowSearchOptions } from './nz-cascader-definitions';
import { NzCascaderOptionComponent } from './nz-cascader-li.component';
import { NzCascaderService } from './nz-cascader.service';
import * as ɵngcc0 from '@angular/core';
export declare class NzCascaderComponent implements NzCascaderComponentAsSource, OnInit, OnDestroy, ControlValueAccessor {
    cascaderService: NzCascaderService;
    private i18nService;
    nzConfigService: NzConfigService;
    private cdr;
    noAnimation?: NzNoAnimationDirective | undefined;
    input: ElementRef;
    menu: ElementRef;
    overlay: CdkConnectedOverlay;
    cascaderItems: QueryList<NzCascaderOptionComponent>;
    nzOptionRender: TemplateRef<{
        $implicit: NzCascaderOption;
        index: number;
    }> | null;
    nzShowInput: boolean;
    nzShowArrow: boolean;
    nzAllowClear: boolean;
    nzAutoFocus: boolean;
    nzChangeOnSelect: boolean;
    nzDisabled: boolean;
    nzColumnClassName: string;
    nzExpandTrigger: NzCascaderExpandTrigger;
    nzValueProperty: string;
    nzLabelRender: TemplateRef<void>;
    nzLabelProperty: string;
    nzNotFoundContent: string | TemplateRef<void>;
    nzSize: NzCascaderSize;
    nzShowSearch: boolean | NzShowSearchOptions;
    nzPlaceHolder: string;
    nzMenuClassName: string;
    nzMenuStyle: NgStyleInterface;
    nzMouseEnterDelay: number;
    nzMouseLeaveDelay: number;
    nzTriggerAction: NzCascaderTriggerType | NzCascaderTriggerType[];
    nzChangeOn: (option: NzCascaderOption, level: number) => boolean;
    nzLoadData: (node: NzCascaderOption, index?: number) => PromiseLike<any>;
    nzOptions: NzCascaderOption[] | null;
    readonly nzVisibleChange: EventEmitter<boolean>;
    readonly nzSelectionChange: EventEmitter<import("./nz-cascader-definitions").CascaderOption[]>;
    /**
     * @deprecated 9.0.0. This api is a duplication of `ngModelChange`.
     */
    readonly nzSelect: EventEmitter<{
        option: import("./nz-cascader-definitions").CascaderOption;
        index: number;
    } | null>;
    readonly nzClear: EventEmitter<void>;
    el: HTMLElement;
    dropDownPosition: string;
    menuVisible: boolean;
    isLoading: boolean;
    labelRenderText: string;
    labelRenderContext: {};
    onChange: Function;
    onTouched: Function;
    positions: ConnectionPositionPair[];
    dropdownWidthStyle: string;
    isFocused: boolean;
    locale: NzCascaderI18nInterface;
    private $destroy;
    private inputString;
    private isOpening;
    private delayMenuTimer;
    private delaySelectTimer;
    readonly inSearchingMode: boolean;
    inputValue: string;
    readonly menuCls: NgClassType;
    readonly menuColumnCls: NgClassType;
    private readonly hasInput;
    private readonly hasValue;
    readonly showPlaceholder: boolean;
    readonly clearIconVisible: boolean;
    readonly isLabelRenderTemplate: boolean;
    constructor(cascaderService: NzCascaderService, i18nService: NzI18nService, nzConfigService: NzConfigService, cdr: ChangeDetectorRef, elementRef: ElementRef, renderer: Renderer2, noAnimation?: NzNoAnimationDirective | undefined);
    ngOnInit(): void;
    ngOnDestroy(): void;
    registerOnChange(fn: () => {}): void;
    registerOnTouched(fn: () => {}): void;
    writeValue(value: any): void;
    delaySetMenuVisible(visible: boolean, delay?: number, setOpening?: boolean): void;
    setMenuVisible(visible: boolean): void;
    private clearDelayMenuTimer;
    clearSelection(event?: Event): void;
    getSubmitValue(): any[];
    focus(): void;
    blur(): void;
    handleInputBlur(): void;
    handleInputFocus(): void;
    onKeyDown(event: KeyboardEvent): void;
    onTriggerClick(): void;
    onTriggerMouseEnter(): void;
    onTriggerMouseLeave(event: MouseEvent): void;
    onOptionMouseEnter(option: NzCascaderOption, columnIndex: number, event: Event): void;
    onOptionMouseLeave(option: NzCascaderOption, _columnIndex: number, event: Event): void;
    onOptionClick(option: NzCascaderOption, columnIndex: number, event: Event): void;
    private isActionTrigger;
    private onEnter;
    private moveUpOrDown;
    private moveLeft;
    private moveRight;
    private clearDelaySelectTimer;
    private delaySetOptionActivated;
    private toggleSearchingMode;
    isOptionActivated(option: NzCascaderOption, index: number): boolean;
    setDisabledState(isDisabled: boolean): void;
    closeMenu(): void;
    onPositionChange(position: ConnectedOverlayPositionChange): void;
    /**
     * Reposition the cascader panel. When a menu opens, the cascader expands
     * and may exceed the boundary of browser's window.
     */
    private reposition;
    /**
     * When a cascader options is changed, a child needs to know that it should re-render.
     */
    private checkChildren;
    private buildDisplayLabel;
    private setLocale;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzCascaderComponent, [null, null, null, null, null, null, { optional: true; host: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzCascaderComponent, "nz-cascader, [nz-cascader]", ["nzCascader"], { "nzOptionRender": "nzOptionRender"; "nzShowInput": "nzShowInput"; "nzShowArrow": "nzShowArrow"; "nzAllowClear": "nzAllowClear"; "nzAutoFocus": "nzAutoFocus"; "nzChangeOnSelect": "nzChangeOnSelect"; "nzDisabled": "nzDisabled"; "nzExpandTrigger": "nzExpandTrigger"; "nzValueProperty": "nzValueProperty"; "nzLabelProperty": "nzLabelProperty"; "nzMouseEnterDelay": "nzMouseEnterDelay"; "nzMouseLeaveDelay": "nzMouseLeaveDelay"; "nzTriggerAction": "nzTriggerAction"; "nzOptions": "nzOptions"; "nzColumnClassName": "nzColumnClassName"; "nzLabelRender": "nzLabelRender"; "nzNotFoundContent": "nzNotFoundContent"; "nzSize": "nzSize"; "nzShowSearch": "nzShowSearch"; "nzPlaceHolder": "nzPlaceHolder"; "nzMenuClassName": "nzMenuClassName"; "nzMenuStyle": "nzMenuStyle"; "nzChangeOn": "nzChangeOn"; "nzLoadData": "nzLoadData"; }, { "nzVisibleChange": "nzVisibleChange"; "nzSelectionChange": "nzSelectionChange"; "nzSelect": "nzSelect"; "nzClear": "nzClear"; }, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FzY2FkZXIuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbIm56LWNhc2NhZGVyLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNIQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5pbXBvcnQgeyBDZGtDb25uZWN0ZWRPdmVybGF5LCBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UsIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSwgT25Jbml0LCBRdWVyeUxpc3QsIFJlbmRlcmVyMiwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE5nQ2xhc3NUeXBlLCBOZ1N0eWxlSW50ZXJmYWNlLCBOekNvbmZpZ1NlcnZpY2UsIE56Tm9BbmltYXRpb25EaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOekNhc2NhZGVySTE4bkludGVyZmFjZSwgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcbmltcG9ydCB7IE56Q2FzY2FkZXJDb21wb25lbnRBc1NvdXJjZSwgTnpDYXNjYWRlckV4cGFuZFRyaWdnZXIsIE56Q2FzY2FkZXJPcHRpb24sIE56Q2FzY2FkZXJTaXplLCBOekNhc2NhZGVyVHJpZ2dlclR5cGUsIE56U2hvd1NlYXJjaE9wdGlvbnMgfSBmcm9tICcuL256LWNhc2NhZGVyLWRlZmluaXRpb25zJztcclxuaW1wb3J0IHsgTnpDYXNjYWRlck9wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbnotY2FzY2FkZXItbGkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpDYXNjYWRlclNlcnZpY2UgfSBmcm9tICcuL256LWNhc2NhZGVyLnNlcnZpY2UnO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOekNhc2NhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgTnpDYXNjYWRlckNvbXBvbmVudEFzU291cmNlLCBPbkluaXQsIE9uRGVzdHJveSwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG4gICAgY2FzY2FkZXJTZXJ2aWNlOiBOekNhc2NhZGVyU2VydmljZTtcclxuICAgIHByaXZhdGUgaTE4blNlcnZpY2U7XHJcbiAgICBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZTtcclxuICAgIHByaXZhdGUgY2RyO1xyXG4gICAgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIHwgdW5kZWZpbmVkO1xyXG4gICAgaW5wdXQ6IEVsZW1lbnRSZWY7XHJcbiAgICBtZW51OiBFbGVtZW50UmVmO1xyXG4gICAgb3ZlcmxheTogQ2RrQ29ubmVjdGVkT3ZlcmxheTtcclxuICAgIGNhc2NhZGVySXRlbXM6IFF1ZXJ5TGlzdDxOekNhc2NhZGVyT3B0aW9uQ29tcG9uZW50PjtcclxuICAgIG56T3B0aW9uUmVuZGVyOiBUZW1wbGF0ZVJlZjx7XHJcbiAgICAgICAgJGltcGxpY2l0OiBOekNhc2NhZGVyT3B0aW9uO1xyXG4gICAgICAgIGluZGV4OiBudW1iZXI7XHJcbiAgICB9PiB8IG51bGw7XHJcbiAgICBuelNob3dJbnB1dDogYm9vbGVhbjtcclxuICAgIG56U2hvd0Fycm93OiBib29sZWFuO1xyXG4gICAgbnpBbGxvd0NsZWFyOiBib29sZWFuO1xyXG4gICAgbnpBdXRvRm9jdXM6IGJvb2xlYW47XHJcbiAgICBuekNoYW5nZU9uU2VsZWN0OiBib29sZWFuO1xyXG4gICAgbnpEaXNhYmxlZDogYm9vbGVhbjtcclxuICAgIG56Q29sdW1uQ2xhc3NOYW1lOiBzdHJpbmc7XHJcbiAgICBuekV4cGFuZFRyaWdnZXI6IE56Q2FzY2FkZXJFeHBhbmRUcmlnZ2VyO1xyXG4gICAgbnpWYWx1ZVByb3BlcnR5OiBzdHJpbmc7XHJcbiAgICBuekxhYmVsUmVuZGVyOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICAgIG56TGFiZWxQcm9wZXJ0eTogc3RyaW5nO1xyXG4gICAgbnpOb3RGb3VuZENvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gICAgbnpTaXplOiBOekNhc2NhZGVyU2l6ZTtcclxuICAgIG56U2hvd1NlYXJjaDogYm9vbGVhbiB8IE56U2hvd1NlYXJjaE9wdGlvbnM7XHJcbiAgICBuelBsYWNlSG9sZGVyOiBzdHJpbmc7XHJcbiAgICBuek1lbnVDbGFzc05hbWU6IHN0cmluZztcclxuICAgIG56TWVudVN0eWxlOiBOZ1N0eWxlSW50ZXJmYWNlO1xyXG4gICAgbnpNb3VzZUVudGVyRGVsYXk6IG51bWJlcjtcclxuICAgIG56TW91c2VMZWF2ZURlbGF5OiBudW1iZXI7XHJcbiAgICBuelRyaWdnZXJBY3Rpb246IE56Q2FzY2FkZXJUcmlnZ2VyVHlwZSB8IE56Q2FzY2FkZXJUcmlnZ2VyVHlwZVtdO1xyXG4gICAgbnpDaGFuZ2VPbjogKG9wdGlvbjogTnpDYXNjYWRlck9wdGlvbiwgbGV2ZWw6IG51bWJlcikgPT4gYm9vbGVhbjtcclxuICAgIG56TG9hZERhdGE6IChub2RlOiBOekNhc2NhZGVyT3B0aW9uLCBpbmRleD86IG51bWJlcikgPT4gUHJvbWlzZUxpa2U8YW55PjtcclxuICAgIG56T3B0aW9uczogTnpDYXNjYWRlck9wdGlvbltdIHwgbnVsbDtcclxuICAgIHJlYWRvbmx5IG56VmlzaWJsZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG4gICAgcmVhZG9ubHkgbnpTZWxlY3Rpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxpbXBvcnQoXCIuL256LWNhc2NhZGVyLWRlZmluaXRpb25zXCIpLkNhc2NhZGVyT3B0aW9uW10+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVwcmVjYXRlZCA5LjAuMC4gVGhpcyBhcGkgaXMgYSBkdXBsaWNhdGlvbiBvZiBgbmdNb2RlbENoYW5nZWAuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IG56U2VsZWN0OiBFdmVudEVtaXR0ZXI8e1xyXG4gICAgICAgIG9wdGlvbjogaW1wb3J0KFwiLi9uei1jYXNjYWRlci1kZWZpbml0aW9uc1wiKS5DYXNjYWRlck9wdGlvbjtcclxuICAgICAgICBpbmRleDogbnVtYmVyO1xyXG4gICAgfSB8IG51bGw+O1xyXG4gICAgcmVhZG9ubHkgbnpDbGVhcjogRXZlbnRFbWl0dGVyPHZvaWQ+O1xyXG4gICAgZWw6IEhUTUxFbGVtZW50O1xyXG4gICAgZHJvcERvd25Qb3NpdGlvbjogc3RyaW5nO1xyXG4gICAgbWVudVZpc2libGU6IGJvb2xlYW47XHJcbiAgICBpc0xvYWRpbmc6IGJvb2xlYW47XHJcbiAgICBsYWJlbFJlbmRlclRleHQ6IHN0cmluZztcclxuICAgIGxhYmVsUmVuZGVyQ29udGV4dDoge307XHJcbiAgICBvbkNoYW5nZTogRnVuY3Rpb247XHJcbiAgICBvblRvdWNoZWQ6IEZ1bmN0aW9uO1xyXG4gICAgcG9zaXRpb25zOiBDb25uZWN0aW9uUG9zaXRpb25QYWlyW107XHJcbiAgICBkcm9wZG93bldpZHRoU3R5bGU6IHN0cmluZztcclxuICAgIGlzRm9jdXNlZDogYm9vbGVhbjtcclxuICAgIGxvY2FsZTogTnpDYXNjYWRlckkxOG5JbnRlcmZhY2U7XHJcbiAgICBwcml2YXRlICRkZXN0cm95O1xyXG4gICAgcHJpdmF0ZSBpbnB1dFN0cmluZztcclxuICAgIHByaXZhdGUgaXNPcGVuaW5nO1xyXG4gICAgcHJpdmF0ZSBkZWxheU1lbnVUaW1lcjtcclxuICAgIHByaXZhdGUgZGVsYXlTZWxlY3RUaW1lcjtcclxuICAgIHJlYWRvbmx5IGluU2VhcmNoaW5nTW9kZTogYm9vbGVhbjtcclxuICAgIGlucHV0VmFsdWU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IG1lbnVDbHM6IE5nQ2xhc3NUeXBlO1xyXG4gICAgcmVhZG9ubHkgbWVudUNvbHVtbkNsczogTmdDbGFzc1R5cGU7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGhhc0lucHV0O1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBoYXNWYWx1ZTtcclxuICAgIHJlYWRvbmx5IHNob3dQbGFjZWhvbGRlcjogYm9vbGVhbjtcclxuICAgIHJlYWRvbmx5IGNsZWFySWNvblZpc2libGU6IGJvb2xlYW47XHJcbiAgICByZWFkb25seSBpc0xhYmVsUmVuZGVyVGVtcGxhdGU6IGJvb2xlYW47XHJcbiAgICBjb25zdHJ1Y3RvcihjYXNjYWRlclNlcnZpY2U6IE56Q2FzY2FkZXJTZXJ2aWNlLCBpMThuU2VydmljZTogTnpJMThuU2VydmljZSwgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSB8IHVuZGVmaW5lZCk7XHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcclxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICgpID0+IHt9KTogdm9pZDtcclxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQ7XHJcbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkO1xyXG4gICAgZGVsYXlTZXRNZW51VmlzaWJsZSh2aXNpYmxlOiBib29sZWFuLCBkZWxheT86IG51bWJlciwgc2V0T3BlbmluZz86IGJvb2xlYW4pOiB2b2lkO1xyXG4gICAgc2V0TWVudVZpc2libGUodmlzaWJsZTogYm9vbGVhbik6IHZvaWQ7XHJcbiAgICBwcml2YXRlIGNsZWFyRGVsYXlNZW51VGltZXI7XHJcbiAgICBjbGVhclNlbGVjdGlvbihldmVudD86IEV2ZW50KTogdm9pZDtcclxuICAgIGdldFN1Ym1pdFZhbHVlKCk6IGFueVtdO1xyXG4gICAgZm9jdXMoKTogdm9pZDtcclxuICAgIGJsdXIoKTogdm9pZDtcclxuICAgIGhhbmRsZUlucHV0Qmx1cigpOiB2b2lkO1xyXG4gICAgaGFuZGxlSW5wdXRGb2N1cygpOiB2b2lkO1xyXG4gICAgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZDtcclxuICAgIG9uVHJpZ2dlckNsaWNrKCk6IHZvaWQ7XHJcbiAgICBvblRyaWdnZXJNb3VzZUVudGVyKCk6IHZvaWQ7XHJcbiAgICBvblRyaWdnZXJNb3VzZUxlYXZlKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZDtcclxuICAgIG9uT3B0aW9uTW91c2VFbnRlcihvcHRpb246IE56Q2FzY2FkZXJPcHRpb24sIGNvbHVtbkluZGV4OiBudW1iZXIsIGV2ZW50OiBFdmVudCk6IHZvaWQ7XHJcbiAgICBvbk9wdGlvbk1vdXNlTGVhdmUob3B0aW9uOiBOekNhc2NhZGVyT3B0aW9uLCBfY29sdW1uSW5kZXg6IG51bWJlciwgZXZlbnQ6IEV2ZW50KTogdm9pZDtcclxuICAgIG9uT3B0aW9uQ2xpY2sob3B0aW9uOiBOekNhc2NhZGVyT3B0aW9uLCBjb2x1bW5JbmRleDogbnVtYmVyLCBldmVudDogRXZlbnQpOiB2b2lkO1xyXG4gICAgcHJpdmF0ZSBpc0FjdGlvblRyaWdnZXI7XHJcbiAgICBwcml2YXRlIG9uRW50ZXI7XHJcbiAgICBwcml2YXRlIG1vdmVVcE9yRG93bjtcclxuICAgIHByaXZhdGUgbW92ZUxlZnQ7XHJcbiAgICBwcml2YXRlIG1vdmVSaWdodDtcclxuICAgIHByaXZhdGUgY2xlYXJEZWxheVNlbGVjdFRpbWVyO1xyXG4gICAgcHJpdmF0ZSBkZWxheVNldE9wdGlvbkFjdGl2YXRlZDtcclxuICAgIHByaXZhdGUgdG9nZ2xlU2VhcmNoaW5nTW9kZTtcclxuICAgIGlzT3B0aW9uQWN0aXZhdGVkKG9wdGlvbjogTnpDYXNjYWRlck9wdGlvbiwgaW5kZXg6IG51bWJlcik6IGJvb2xlYW47XHJcbiAgICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkO1xyXG4gICAgY2xvc2VNZW51KCk6IHZvaWQ7XHJcbiAgICBvblBvc2l0aW9uQ2hhbmdlKHBvc2l0aW9uOiBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UpOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXBvc2l0aW9uIHRoZSBjYXNjYWRlciBwYW5lbC4gV2hlbiBhIG1lbnUgb3BlbnMsIHRoZSBjYXNjYWRlciBleHBhbmRzXHJcbiAgICAgKiBhbmQgbWF5IGV4Y2VlZCB0aGUgYm91bmRhcnkgb2YgYnJvd3NlcidzIHdpbmRvdy5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZXBvc2l0aW9uO1xyXG4gICAgLyoqXHJcbiAgICAgKiBXaGVuIGEgY2FzY2FkZXIgb3B0aW9ucyBpcyBjaGFuZ2VkLCBhIGNoaWxkIG5lZWRzIHRvIGtub3cgdGhhdCBpdCBzaG91bGQgcmUtcmVuZGVyLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNoZWNrQ2hpbGRyZW47XHJcbiAgICBwcml2YXRlIGJ1aWxkRGlzcGxheUxhYmVsO1xyXG4gICAgcHJpdmF0ZSBzZXRMb2NhbGU7XHJcbn1cclxuIl19
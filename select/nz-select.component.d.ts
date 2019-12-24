/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CdkConnectedOverlay, CdkOverlayOrigin, ConnectedOverlayPositionChange } from '@angular/cdk/overlay';
import { Platform } from '@angular/cdk/platform';
import { AfterContentInit, AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, OnInit, QueryList, Renderer2, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NzNoAnimationDirective, NzSizeLDSType } from 'ng-zorro-antd/core';
import { NzOptionGroupComponent } from './nz-option-group.component';
import { NzOptionComponent } from './nz-option.component';
import { TFilterOption } from './nz-option.pipe';
import { NzSelectTopControlComponent } from './nz-select-top-control.component';
import { NzSelectService } from './nz-select.service';
import * as i0 from "@angular/core";
export declare class NzSelectComponent implements ControlValueAccessor, OnInit, AfterViewInit, OnDestroy, AfterContentInit {
    nzSelectService: NzSelectService;
    private cdr;
    private platform;
    noAnimation?: NzNoAnimationDirective | undefined;
    open: boolean;
    value: any | any[];
    onChange: (value: string | string[]) => void;
    onTouched: () => void;
    dropDownPosition: 'top' | 'center' | 'bottom';
    triggerWidth: number;
    private _disabled;
    private isInit;
    private destroy$;
    cdkOverlayOrigin: CdkOverlayOrigin;
    cdkConnectedOverlay: CdkConnectedOverlay;
    nzSelectTopControlComponent: NzSelectTopControlComponent;
    nzSelectTopControlElement: ElementRef;
    /** should move to nz-option-container when https://github.com/angular/angular/issues/20810 resolved **/
    listOfNzOptionComponent: QueryList<NzOptionComponent>;
    listOfNzOptionGroupComponent: QueryList<NzOptionGroupComponent>;
    readonly nzOnSearch: EventEmitter<string>;
    readonly nzScrollToBottom: EventEmitter<void>;
    readonly nzOpenChange: EventEmitter<boolean>;
    readonly nzBlur: EventEmitter<void>;
    readonly nzFocus: EventEmitter<void>;
    nzSize: NzSizeLDSType;
    nzDropdownClassName: string;
    nzDropdownMatchSelectWidth: boolean;
    nzDropdownStyle: {
        [key: string]: string;
    };
    nzNotFoundContent: string;
    nzAllowClear: boolean;
    nzShowSearch: boolean;
    nzLoading: boolean;
    nzAutoFocus: boolean;
    nzPlaceHolder: string;
    nzMaxTagCount: number;
    nzDropdownRender: TemplateRef<void>;
    nzCustomTemplate: TemplateRef<{
        $implicit: NzOptionComponent;
    }>;
    nzSuffixIcon: TemplateRef<void>;
    nzClearIcon: TemplateRef<void>;
    nzRemoveIcon: TemplateRef<void>;
    nzMenuItemSelectedIcon: TemplateRef<void>;
    nzShowArrow: boolean;
    nzTokenSeparators: string[];
    nzMaxTagPlaceholder: TemplateRef<{
        $implicit: any[];
    }>;
    nzAutoClearSearchValue: boolean;
    nzMaxMultipleCount: number;
    nzServerSearch: boolean;
    nzMode: 'default' | 'multiple' | 'tags';
    nzFilterOption: TFilterOption;
    compareWith: (o1: any, o2: any) => boolean;
    nzOpen: boolean;
    nzDisabled: boolean;
    readonly nzSelectTopControlDOM: HTMLElement;
    updateAutoFocus(): void;
    focus(): void;
    blur(): void;
    onFocus(): void;
    onBlur(): void;
    onKeyDown(event: KeyboardEvent): void;
    toggleDropDown(): void;
    closeDropDown(): void;
    onPositionChange(position: ConnectedOverlayPositionChange): void;
    updateCdkConnectedOverlayStatus(): void;
    updateCdkConnectedOverlayPositions(): void;
    constructor(renderer: Renderer2, nzSelectService: NzSelectService, cdr: ChangeDetectorRef, platform: Platform, elementRef: ElementRef, noAnimation?: NzNoAnimationDirective | undefined);
    /** update ngModel -> update listOfSelectedValue **/
    writeValue(value: any | any[]): void;
    registerOnChange(fn: (value: string | string[]) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<NzSelectComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NzSelectComponent, "nz-select", ["nzSelect"], { 'nzSize': "nzSize", 'nzDropdownClassName': "nzDropdownClassName", 'nzDropdownMatchSelectWidth': "nzDropdownMatchSelectWidth", 'nzDropdownStyle': "nzDropdownStyle", 'nzNotFoundContent': "nzNotFoundContent", 'nzAllowClear': "nzAllowClear", 'nzShowSearch': "nzShowSearch", 'nzLoading': "nzLoading", 'nzAutoFocus': "nzAutoFocus", 'nzPlaceHolder': "nzPlaceHolder", 'nzMaxTagCount': "nzMaxTagCount", 'nzDropdownRender': "nzDropdownRender", 'nzCustomTemplate': "nzCustomTemplate", 'nzSuffixIcon': "nzSuffixIcon", 'nzClearIcon': "nzClearIcon", 'nzRemoveIcon': "nzRemoveIcon", 'nzMenuItemSelectedIcon': "nzMenuItemSelectedIcon", 'nzShowArrow': "nzShowArrow", 'nzTokenSeparators': "nzTokenSeparators", 'nzMaxTagPlaceholder': "nzMaxTagPlaceholder", 'nzAutoClearSearchValue': "nzAutoClearSearchValue", 'nzMaxMultipleCount': "nzMaxMultipleCount", 'nzServerSearch': "nzServerSearch", 'nzMode': "nzMode", 'nzFilterOption': "nzFilterOption", 'compareWith': "compareWith", 'nzOpen': "nzOpen", 'nzDisabled': "nzDisabled" }, { 'nzOnSearch': "nzOnSearch", 'nzScrollToBottom': "nzScrollToBottom", 'nzOpenChange': "nzOpenChange", 'nzBlur': "nzBlur", 'nzFocus': "nzFocus" }, ["listOfNzOptionComponent", "listOfNzOptionGroupComponent"]>;
}

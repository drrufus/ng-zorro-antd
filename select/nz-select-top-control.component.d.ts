/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, ElementRef, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { NzOptionComponent } from './nz-option.component';
import { NzSelectService } from './nz-select.service';
import * as i0 from "@angular/core";
export declare class NzSelectTopControlComponent implements OnInit, OnDestroy {
    private renderer;
    nzSelectService: NzSelectService;
    private cdr;
    noAnimation?: NzNoAnimationDirective | undefined;
    inputValue: string;
    isComposing: boolean;
    private destroy$;
    inputElement: ElementRef;
    mirrorElement: ElementRef;
    nzShowSearch: boolean;
    nzPlaceHolder: string;
    nzOpen: boolean;
    nzMaxTagCount: number;
    nzAllowClear: boolean;
    nzShowArrow: boolean;
    nzLoading: boolean;
    nzCustomTemplate: TemplateRef<{
        $implicit: NzOptionComponent;
    }>;
    nzSuffixIcon: TemplateRef<void>;
    nzClearIcon: TemplateRef<void>;
    nzRemoveIcon: TemplateRef<void>;
    nzMaxTagPlaceholder: TemplateRef<{
        $implicit: any[];
    }>;
    nzTokenSeparators: string[];
    onClearSelection(e: MouseEvent): void;
    setInputValue(value: string): void;
    readonly mirrorDOM: HTMLElement;
    readonly inputDOM: HTMLInputElement;
    readonly placeHolderDisplay: string;
    readonly selectedValueStyle: {
        [key: string]: string;
    };
    trackValue(_index: number, option: NzOptionComponent): any;
    updateWidth(): void;
    removeSelectedValue(option: NzOptionComponent, e: MouseEvent): void;
    animationEnd(): void;
    constructor(renderer: Renderer2, nzSelectService: NzSelectService, cdr: ChangeDetectorRef, noAnimation?: NzNoAnimationDirective | undefined);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<NzSelectTopControlComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NzSelectTopControlComponent, "[nz-select-top-control]", ["nzSelectTopControl"], { 'nzShowSearch': "nzShowSearch", 'nzPlaceHolder': "nzPlaceHolder", 'nzOpen': "nzOpen", 'nzMaxTagCount': "nzMaxTagCount", 'nzAllowClear': "nzAllowClear", 'nzShowArrow': "nzShowArrow", 'nzLoading': "nzLoading", 'nzCustomTemplate': "nzCustomTemplate", 'nzSuffixIcon': "nzSuffixIcon", 'nzClearIcon': "nzClearIcon", 'nzRemoveIcon': "nzRemoveIcon", 'nzMaxTagPlaceholder': "nzMaxTagPlaceholder", 'nzTokenSeparators': "nzTokenSeparators" }, {}, never>;
}

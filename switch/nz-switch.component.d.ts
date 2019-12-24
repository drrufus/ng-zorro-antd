/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { FocusMonitor } from '@angular/cdk/a11y';
import { AfterViewInit, ChangeDetectorRef, OnDestroy, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NzConfigService, NzSizeDSType } from 'ng-zorro-antd/core';
import * as i0 from "@angular/core";
export declare class NzSwitchComponent implements ControlValueAccessor, AfterViewInit, OnDestroy {
    nzConfigService: NzConfigService;
    private cdr;
    private focusMonitor;
    checked: boolean;
    onChange: (value: boolean) => void;
    onTouched: () => void;
    private switchElement;
    nzLoading: boolean;
    nzDisabled: boolean;
    nzControl: boolean;
    nzCheckedChildren: string | TemplateRef<void>;
    nzUnCheckedChildren: string | TemplateRef<void>;
    nzSize: NzSizeDSType;
    hostClick(e: MouseEvent): void;
    updateValue(value: boolean): void;
    onKeyDown(e: KeyboardEvent): void;
    focus(): void;
    blur(): void;
    constructor(nzConfigService: NzConfigService, cdr: ChangeDetectorRef, focusMonitor: FocusMonitor);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    writeValue(value: boolean): void;
    registerOnChange(fn: (_: boolean) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDef<NzSwitchComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NzSwitchComponent, "nz-switch", ["nzSwitch"], { 'nzLoading': "nzLoading", 'nzDisabled': "nzDisabled", 'nzControl': "nzControl", 'nzCheckedChildren': "nzCheckedChildren", 'nzUnCheckedChildren': "nzUnCheckedChildren", 'nzSize': "nzSize" }, {}, never>;
}

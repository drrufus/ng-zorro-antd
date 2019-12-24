/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, ElementRef, Renderer2, TemplateRef } from '@angular/core';
import { NzCascaderOption } from './nz-cascader-definitions';
import * as i0 from "@angular/core";
export declare class NzCascaderOptionComponent {
    private cdr;
    optionTemplate: TemplateRef<NzCascaderOption> | null;
    option: NzCascaderOption;
    activated: boolean;
    highlightText: string;
    nzLabelProperty: string;
    columnIndex: number;
    constructor(cdr: ChangeDetectorRef, elementRef: ElementRef, renderer: Renderer2);
    readonly optionLabel: string;
    markForCheck(): void;
    static ɵfac: i0.ɵɵFactoryDef<NzCascaderOptionComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NzCascaderOptionComponent, "[nz-cascader-option]", ["nzCascaderOption"], { 'optionTemplate': "optionTemplate", 'option': "option", 'activated': "activated", 'highlightText': "highlightText", 'nzLabelProperty': "nzLabelProperty", 'columnIndex': "columnIndex" }, {}, never>;
}

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, EventEmitter, Renderer2 } from '@angular/core';
import { NzCheckboxComponent } from './nz-checkbox.component';
import * as i0 from "@angular/core";
export declare class NzCheckboxWrapperComponent {
    readonly nzOnChange: EventEmitter<string[]>;
    private checkboxList;
    addCheckbox(value: NzCheckboxComponent): void;
    removeCheckbox(value: NzCheckboxComponent): void;
    outputValue(): string[];
    onChange(): void;
    constructor(renderer: Renderer2, elementRef: ElementRef);
    static ɵfac: i0.ɵɵFactoryDef<NzCheckboxWrapperComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NzCheckboxWrapperComponent, "nz-checkbox-wrapper", ["nzCheckboxWrapper"], {}, { 'nzOnChange': "nzOnChange" }, never>;
}

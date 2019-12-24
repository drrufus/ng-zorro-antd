/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, ElementRef, Renderer2 } from '@angular/core';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { DateHelperService, NzI18nService } from 'ng-zorro-antd/i18n';
import { HeaderPickerComponent, SupportHeaderPanel } from './header-picker.component';
import * as i0 from "@angular/core";
export declare class NzMonthPickerComponent extends HeaderPickerComponent {
    noAnimation?: NzNoAnimationDirective | undefined;
    nzFormat: string;
    endPanelMode: SupportHeaderPanel;
    constructor(i18n: NzI18nService, cdr: ChangeDetectorRef, dateHelper: DateHelperService, renderer: Renderer2, elementRef: ElementRef, noAnimation?: NzNoAnimationDirective | undefined);
    static ɵfac: i0.ɵɵFactoryDef<NzMonthPickerComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NzMonthPickerComponent, "nz-month-picker", ["nzMonthPicker"], { 'nzFormat': "nzFormat" }, {}, never>;
}

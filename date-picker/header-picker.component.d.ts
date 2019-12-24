/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, OnChanges, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { CandyDate, FunctionProp, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { DateHelperService, NzI18nService } from 'ng-zorro-antd/i18n';
import { AbstractPickerComponent } from './abstract-picker.component';
import { PanelMode } from './standard-types';
import * as i0 from "@angular/core";
/**
 * The base picker for header panels, current support: Year/Month
 */
export declare class HeaderPickerComponent extends AbstractPickerComponent implements OnInit, OnChanges {
    nzPlaceHolder: string;
    nzRenderExtraFooter: FunctionProp<TemplateRef<void> | string>;
    nzDefaultValue: CandyDate;
    nzFormat: string;
    endPanelMode: SupportHeaderPanel;
    panelMode: PanelMode;
    extraFooter: TemplateRef<void> | string;
    private supportPanels;
    constructor(i18n: NzI18nService, cdr: ChangeDetectorRef, dateHelper: DateHelperService, noAnimation?: NzNoAnimationDirective);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onPanelModeChange(mode: PanelMode): void;
    onChooseValue(mode: SupportHeaderPanel, value: CandyDate): void;
    onOpenChange(open: boolean): void;
    private cleanUp;
    static ɵfac: i0.ɵɵFactoryDef<HeaderPickerComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<HeaderPickerComponent, "ng-component", never, { 'nzPlaceHolder': "nzPlaceHolder", 'nzRenderExtraFooter': "nzRenderExtraFooter", 'nzDefaultValue': "nzDefaultValue", 'nzFormat': "nzFormat" }, {}, never>;
}
export declare type SupportHeaderPanel = 'year' | 'month';

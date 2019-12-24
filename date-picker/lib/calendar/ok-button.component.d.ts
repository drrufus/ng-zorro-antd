/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { EventEmitter } from '@angular/core';
import { NzCalendarI18nInterface } from 'ng-zorro-antd/i18n';
import * as i0 from "@angular/core";
export declare class OkButtonComponent {
    locale: NzCalendarI18nInterface;
    okDisabled: boolean;
    readonly clickOk: EventEmitter<void>;
    prefixCls: string;
    static ɵfac: i0.ɵɵFactoryDef<OkButtonComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<OkButtonComponent, "ok-button", ["okButton"], { 'locale': "locale", 'okDisabled': "okDisabled" }, { 'clickOk': "clickOk" }, never>;
}

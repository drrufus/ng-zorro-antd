/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { PipeTransform, QueryList } from '@angular/core';
import { NzOptionGroupComponent } from './nz-option-group.component';
import { NzOptionComponent } from './nz-option.component';
import * as i0 from "@angular/core";
export declare type TFilterOption = (input: string, option: NzOptionComponent) => boolean;
export declare class NzFilterOptionPipe implements PipeTransform {
    transform(options: NzOptionComponent[] | QueryList<NzOptionComponent>, searchValue: string, filterOption: TFilterOption, serverSearch: boolean): NzOptionComponent[];
    static ɵfac: i0.ɵɵFactoryDef<NzFilterOptionPipe>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<NzFilterOptionPipe, "nzFilterOption">;
}
export declare class NzFilterGroupOptionPipe implements PipeTransform {
    transform(groups: NzOptionGroupComponent[], searchValue: string, filterOption: TFilterOption, serverSearch: boolean): NzOptionGroupComponent[];
    static ɵfac: i0.ɵɵFactoryDef<NzFilterGroupOptionPipe>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<NzFilterGroupOptionPipe, "nzFilterGroupOption">;
}
export declare function defaultFilterOption(searchValue: string, option: NzOptionComponent): boolean;

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { TemplateRef, Type } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NzConfigService } from 'ng-zorro-antd/core';
import { NzEmptyCustomContent } from './nz-empty-config';
import * as i0 from "@angular/core";
export declare class NzEmptyService<T = any> {
    private nzConfigService;
    private legacyDefaultEmptyContent;
    userDefaultContent$: BehaviorSubject<string | Type<any> | TemplateRef<any> | undefined>;
    constructor(nzConfigService: NzConfigService, legacyDefaultEmptyContent: Type<T>);
    setDefaultContent(content?: NzEmptyCustomContent): void;
    resetDefault(): void;
    private getUserDefaultEmptyContent;
    static ɵfac: i0.ɵɵFactoryDef<NzEmptyService<any>>;
    static ɵprov: i0.ɵɵInjectableDef<NzEmptyService<any>>;
}

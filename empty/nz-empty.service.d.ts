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
import * as ɵngcc0 from '@angular/core';
export declare class NzEmptyService<T = any> {
    private nzConfigService;
    private legacyDefaultEmptyContent;
    userDefaultContent$: BehaviorSubject<string | Type<any> | TemplateRef<any> | undefined>;
    constructor(nzConfigService: NzConfigService, legacyDefaultEmptyContent: Type<T>);
    setDefaultContent(content?: NzEmptyCustomContent): void;
    resetDefault(): void;
    private getUserDefaultEmptyContent;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzEmptyService<any>, [null, { optional: true; }]>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NzEmptyService<any>>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZW1wdHkuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJuei1lbXB0eS5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQVdBOzs7Ozs7Ozs7O0FBUUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgVGVtcGxhdGVSZWYsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE56Q29uZmlnU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56RW1wdHlDdXN0b21Db250ZW50IH0gZnJvbSAnLi9uei1lbXB0eS1jb25maWcnO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOekVtcHR5U2VydmljZTxUID0gYW55PiB7XHJcbiAgICBwcml2YXRlIG56Q29uZmlnU2VydmljZTtcclxuICAgIHByaXZhdGUgbGVnYWN5RGVmYXVsdEVtcHR5Q29udGVudDtcclxuICAgIHVzZXJEZWZhdWx0Q29udGVudCQ6IEJlaGF2aW9yU3ViamVjdDxzdHJpbmcgfCBUeXBlPGFueT4gfCBUZW1wbGF0ZVJlZjxhbnk+IHwgdW5kZWZpbmVkPjtcclxuICAgIGNvbnN0cnVjdG9yKG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLCBsZWdhY3lEZWZhdWx0RW1wdHlDb250ZW50OiBUeXBlPFQ+KTtcclxuICAgIHNldERlZmF1bHRDb250ZW50KGNvbnRlbnQ/OiBOekVtcHR5Q3VzdG9tQ29udGVudCk6IHZvaWQ7XHJcbiAgICByZXNldERlZmF1bHQoKTogdm9pZDtcclxuICAgIHByaXZhdGUgZ2V0VXNlckRlZmF1bHRFbXB0eUNvbnRlbnQ7XHJcbn1cclxuIl19
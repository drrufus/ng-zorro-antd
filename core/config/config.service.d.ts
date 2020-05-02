/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Observable } from 'rxjs';
import { NzConfig, NzConfigKey } from './config';
import * as ɵngcc0 from '@angular/core';
export declare class NzConfigService {
    private configUpdated$;
    /** Global config holding property. */
    private config;
    constructor(defaultConfig?: NzConfig);
    getConfigForComponent<T extends NzConfigKey>(componentName: T): NzConfig[T];
    getConfigChangeEventForComponent(componentName: NzConfigKey): Observable<void>;
    set<T extends NzConfigKey>(componentName: T, value: NzConfig[T]): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzConfigService, [{ optional: true; }]>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NzConfigService>;
}
/**
 * This decorator is used to decorate properties. If a property is decorated, it would try to load default value from
 * config.
 */
export declare function WithConfig<T>(componentName: NzConfigKey, innerDefaultValue?: T): (target: any, propName: any, originalDescriptor?: TypedPropertyDescriptor<T> | undefined) => any;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiY29uZmlnLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQVNBOzs7Ozs7Ozs7O0FBUUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBOekNvbmZpZywgTnpDb25maWdLZXkgfSBmcm9tICcuL2NvbmZpZyc7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE56Q29uZmlnU2VydmljZSB7XHJcbiAgICBwcml2YXRlIGNvbmZpZ1VwZGF0ZWQkO1xyXG4gICAgLyoqIEdsb2JhbCBjb25maWcgaG9sZGluZyBwcm9wZXJ0eS4gKi9cclxuICAgIHByaXZhdGUgY29uZmlnO1xyXG4gICAgY29uc3RydWN0b3IoZGVmYXVsdENvbmZpZz86IE56Q29uZmlnKTtcclxuICAgIGdldENvbmZpZ0ZvckNvbXBvbmVudDxUIGV4dGVuZHMgTnpDb25maWdLZXk+KGNvbXBvbmVudE5hbWU6IFQpOiBOekNvbmZpZ1tUXTtcclxuICAgIGdldENvbmZpZ0NoYW5nZUV2ZW50Rm9yQ29tcG9uZW50KGNvbXBvbmVudE5hbWU6IE56Q29uZmlnS2V5KTogT2JzZXJ2YWJsZTx2b2lkPjtcclxuICAgIHNldDxUIGV4dGVuZHMgTnpDb25maWdLZXk+KGNvbXBvbmVudE5hbWU6IFQsIHZhbHVlOiBOekNvbmZpZ1tUXSk6IHZvaWQ7XHJcbn1cclxuLyoqXHJcbiAqIFRoaXMgZGVjb3JhdG9yIGlzIHVzZWQgdG8gZGVjb3JhdGUgcHJvcGVydGllcy4gSWYgYSBwcm9wZXJ0eSBpcyBkZWNvcmF0ZWQsIGl0IHdvdWxkIHRyeSB0byBsb2FkIGRlZmF1bHQgdmFsdWUgZnJvbVxyXG4gKiBjb25maWcuXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBXaXRoQ29uZmlnPFQ+KGNvbXBvbmVudE5hbWU6IE56Q29uZmlnS2V5LCBpbm5lckRlZmF1bHRWYWx1ZT86IFQpOiAodGFyZ2V0OiBhbnksIHByb3BOYW1lOiBhbnksIG9yaWdpbmFsRGVzY3JpcHRvcj86IFR5cGVkUHJvcGVydHlEZXNjcmlwdG9yPFQ+IHwgdW5kZWZpbmVkKSA9PiBhbnk7XHJcbiJdfQ==
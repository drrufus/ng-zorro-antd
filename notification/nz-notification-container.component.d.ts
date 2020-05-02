/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef } from '@angular/core';
import { NzConfigService } from 'ng-zorro-antd/core';
import { NzMessageContainerComponent } from 'ng-zorro-antd/message';
import { NzNotificationConfigLegacy } from './nz-notification-config';
import { NzNotificationDataFilled } from './nz-notification.definitions';
import * as ɵngcc0 from '@angular/core';
export declare class NzNotificationContainerComponent extends NzMessageContainerComponent {
    config: Required<NzNotificationConfigLegacy>;
    bottom: string | null;
    /**
     * @override
     */
    messages: Array<Required<NzNotificationDataFilled>>;
    constructor(cdr: ChangeDetectorRef, nzConfigService: NzConfigService, defaultConfig: NzNotificationConfigLegacy, config: NzNotificationConfigLegacy);
    /**
     * @override
     */
    setConfig(config?: NzNotificationConfigLegacy): void;
    /**
     * Create a new notification.
     * If there's a notification whose `nzKey` is same with `nzKey` in `NzNotificationDataFilled`,
     * replace its content instead of create a new one.
     * @override
     * @param notification
     */
    createMessage(notification: NzNotificationDataFilled): void;
    /**
     * @override
     */
    protected subscribeConfigChange(): void;
    private replaceNotification;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzNotificationContainerComponent, [null, null, { optional: true; }, { optional: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzNotificationContainerComponent, "nz-notification-container", ["nzNotificationContainer"], {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbm90aWZpY2F0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsibnotbm90aWZpY2F0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OztBQVlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpDb25maWdTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9tZXNzYWdlJztcclxuaW1wb3J0IHsgTnpOb3RpZmljYXRpb25Db25maWdMZWdhY3kgfSBmcm9tICcuL256LW5vdGlmaWNhdGlvbi1jb25maWcnO1xyXG5pbXBvcnQgeyBOek5vdGlmaWNhdGlvbkRhdGFGaWxsZWQgfSBmcm9tICcuL256LW5vdGlmaWNhdGlvbi5kZWZpbml0aW9ucyc7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE56Tm90aWZpY2F0aW9uQ29udGFpbmVyQ29tcG9uZW50IGV4dGVuZHMgTnpNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50IHtcclxuICAgIGNvbmZpZzogUmVxdWlyZWQ8TnpOb3RpZmljYXRpb25Db25maWdMZWdhY3k+O1xyXG4gICAgYm90dG9tOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgbWVzc2FnZXM6IEFycmF5PFJlcXVpcmVkPE56Tm90aWZpY2F0aW9uRGF0YUZpbGxlZD4+O1xyXG4gICAgY29uc3RydWN0b3IoY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsIGRlZmF1bHRDb25maWc6IE56Tm90aWZpY2F0aW9uQ29uZmlnTGVnYWN5LCBjb25maWc6IE56Tm90aWZpY2F0aW9uQ29uZmlnTGVnYWN5KTtcclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIHNldENvbmZpZyhjb25maWc/OiBOek5vdGlmaWNhdGlvbkNvbmZpZ0xlZ2FjeSk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyBub3RpZmljYXRpb24uXHJcbiAgICAgKiBJZiB0aGVyZSdzIGEgbm90aWZpY2F0aW9uIHdob3NlIGBuektleWAgaXMgc2FtZSB3aXRoIGBuektleWAgaW4gYE56Tm90aWZpY2F0aW9uRGF0YUZpbGxlZGAsXHJcbiAgICAgKiByZXBsYWNlIGl0cyBjb250ZW50IGluc3RlYWQgb2YgY3JlYXRlIGEgbmV3IG9uZS5cclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICogQHBhcmFtIG5vdGlmaWNhdGlvblxyXG4gICAgICovXHJcbiAgICBjcmVhdGVNZXNzYWdlKG5vdGlmaWNhdGlvbjogTnpOb3RpZmljYXRpb25EYXRhRmlsbGVkKTogdm9pZDtcclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBzdWJzY3JpYmVDb25maWdDaGFuZ2UoKTogdm9pZDtcclxuICAgIHByaXZhdGUgcmVwbGFjZU5vdGlmaWNhdGlvbjtcclxufVxyXG4iXX0=
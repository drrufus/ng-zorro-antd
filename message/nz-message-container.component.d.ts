/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, OnInit } from '@angular/core';
import { NzConfigService } from 'ng-zorro-antd/core';
import { NzMessageConfigLegacy } from './nz-message-config';
import { NzMessageDataFilled, NzMessageDataOptions } from './nz-message.definitions';
import * as ɵngcc0 from '@angular/core';
export declare class NzMessageContainerComponent implements OnInit {
    protected cdr: ChangeDetectorRef;
    protected nzConfigService: NzConfigService;
    messages: NzMessageDataFilled[];
    config: Required<NzMessageConfigLegacy>;
    top: string | null;
    constructor(cdr: ChangeDetectorRef, nzConfigService: NzConfigService, defaultConfig: NzMessageConfigLegacy, config: NzMessageConfigLegacy);
    ngOnInit(): void;
    setConfig(config?: NzMessageConfigLegacy): void;
    /**
     * Create a new message.
     * @param message Parsed message configuration.
     */
    createMessage(message: NzMessageDataFilled): void;
    /**
     * Remove a message by `messageId`.
     * @param messageId Id of the message to be removed.
     * @param userAction Whether this is closed by user interaction.
     */
    removeMessage(messageId: string, userAction?: boolean): void;
    /**
     * Remove all messages.
     */
    removeMessageAll(): void;
    protected subscribeConfigChange(): void;
    protected mergeMessageConfig(config?: NzMessageConfigLegacy): Required<NzMessageConfigLegacy>;
    /**
     * Merge default options and custom message options
     * @param options
     */
    protected _mergeMessageOptions(options?: NzMessageDataOptions): NzMessageDataOptions;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzMessageContainerComponent, [null, null, { optional: true; }, { optional: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzMessageContainerComponent, "nz-message-container", ["nzMessageContainer"], {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVzc2FnZS1jb250YWluZXIuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbIm56LW1lc3NhZ2UtY29udGFpbmVyLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFXQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0JBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpDb25maWdTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpNZXNzYWdlQ29uZmlnTGVnYWN5IH0gZnJvbSAnLi9uei1tZXNzYWdlLWNvbmZpZyc7XHJcbmltcG9ydCB7IE56TWVzc2FnZURhdGFGaWxsZWQsIE56TWVzc2FnZURhdGFPcHRpb25zIH0gZnJvbSAnLi9uei1tZXNzYWdlLmRlZmluaXRpb25zJztcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTnpNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHByb3RlY3RlZCBjZHI6IENoYW5nZURldGVjdG9yUmVmO1xyXG4gICAgcHJvdGVjdGVkIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlO1xyXG4gICAgbWVzc2FnZXM6IE56TWVzc2FnZURhdGFGaWxsZWRbXTtcclxuICAgIGNvbmZpZzogUmVxdWlyZWQ8TnpNZXNzYWdlQ29uZmlnTGVnYWN5PjtcclxuICAgIHRvcDogc3RyaW5nIHwgbnVsbDtcclxuICAgIGNvbnN0cnVjdG9yKGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLCBkZWZhdWx0Q29uZmlnOiBOek1lc3NhZ2VDb25maWdMZWdhY3ksIGNvbmZpZzogTnpNZXNzYWdlQ29uZmlnTGVnYWN5KTtcclxuICAgIG5nT25Jbml0KCk6IHZvaWQ7XHJcbiAgICBzZXRDb25maWcoY29uZmlnPzogTnpNZXNzYWdlQ29uZmlnTGVnYWN5KTogdm9pZDtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IG1lc3NhZ2UuXHJcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSBQYXJzZWQgbWVzc2FnZSBjb25maWd1cmF0aW9uLlxyXG4gICAgICovXHJcbiAgICBjcmVhdGVNZXNzYWdlKG1lc3NhZ2U6IE56TWVzc2FnZURhdGFGaWxsZWQpOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmUgYSBtZXNzYWdlIGJ5IGBtZXNzYWdlSWRgLlxyXG4gICAgICogQHBhcmFtIG1lc3NhZ2VJZCBJZCBvZiB0aGUgbWVzc2FnZSB0byBiZSByZW1vdmVkLlxyXG4gICAgICogQHBhcmFtIHVzZXJBY3Rpb24gV2hldGhlciB0aGlzIGlzIGNsb3NlZCBieSB1c2VyIGludGVyYWN0aW9uLlxyXG4gICAgICovXHJcbiAgICByZW1vdmVNZXNzYWdlKG1lc3NhZ2VJZDogc3RyaW5nLCB1c2VyQWN0aW9uPzogYm9vbGVhbik6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZSBhbGwgbWVzc2FnZXMuXHJcbiAgICAgKi9cclxuICAgIHJlbW92ZU1lc3NhZ2VBbGwoKTogdm9pZDtcclxuICAgIHByb3RlY3RlZCBzdWJzY3JpYmVDb25maWdDaGFuZ2UoKTogdm9pZDtcclxuICAgIHByb3RlY3RlZCBtZXJnZU1lc3NhZ2VDb25maWcoY29uZmlnPzogTnpNZXNzYWdlQ29uZmlnTGVnYWN5KTogUmVxdWlyZWQ8TnpNZXNzYWdlQ29uZmlnTGVnYWN5PjtcclxuICAgIC8qKlxyXG4gICAgICogTWVyZ2UgZGVmYXVsdCBvcHRpb25zIGFuZCBjdXN0b20gbWVzc2FnZSBvcHRpb25zXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9uc1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX21lcmdlTWVzc2FnZU9wdGlvbnMob3B0aW9ucz86IE56TWVzc2FnZURhdGFPcHRpb25zKTogTnpNZXNzYWdlRGF0YU9wdGlvbnM7XHJcbn1cclxuIl19
/**
 * @fileoverview added by tsickle
 * Generated from: nz-message-container.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Optional, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { toCssPixel, warnDeprecation, NzConfigService } from 'ng-zorro-antd/core';
import { NZ_MESSAGE_CONFIG, NZ_MESSAGE_DEFAULT_CONFIG } from './nz-message-config';
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'message';
var NzMessageContainerComponent = /** @class */ (function () {
    function NzMessageContainerComponent(cdr, nzConfigService, defaultConfig, config) {
        this.cdr = cdr;
        this.nzConfigService = nzConfigService;
        this.messages = [];
        if (!!config) {
            warnDeprecation("Injection token 'NZ_MESSAGE_CONFIG' is deprecated and will be removed in 9.0.0. Please use 'NzConfigService' instead.");
        }
        this.setConfig(tslib_1.__assign({}, defaultConfig, config));
    }
    /**
     * @return {?}
     */
    NzMessageContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.subscribeConfigChange();
    };
    /**
     * @param {?=} config
     * @return {?}
     */
    NzMessageContainerComponent.prototype.setConfig = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        this.config = this.mergeMessageConfig(config);
        this.top = toCssPixel(this.config.nzTop);
        this.cdr.markForCheck();
    };
    /**
     * Create a new message.
     * @param message Parsed message configuration.
     */
    /**
     * Create a new message.
     * @param {?} message Parsed message configuration.
     * @return {?}
     */
    NzMessageContainerComponent.prototype.createMessage = /**
     * Create a new message.
     * @param {?} message Parsed message configuration.
     * @return {?}
     */
    function (message) {
        if (this.messages.length >= this.config.nzMaxStack) {
            this.messages.splice(0, 1);
        }
        message.options = this._mergeMessageOptions(message.options);
        message.onClose = new Subject();
        this.messages.push(message);
        this.cdr.detectChanges();
    };
    /**
     * Remove a message by `messageId`.
     * @param messageId Id of the message to be removed.
     * @param userAction Whether this is closed by user interaction.
     */
    /**
     * Remove a message by `messageId`.
     * @param {?} messageId Id of the message to be removed.
     * @param {?=} userAction Whether this is closed by user interaction.
     * @return {?}
     */
    NzMessageContainerComponent.prototype.removeMessage = /**
     * Remove a message by `messageId`.
     * @param {?} messageId Id of the message to be removed.
     * @param {?=} userAction Whether this is closed by user interaction.
     * @return {?}
     */
    function (messageId, userAction) {
        var _this = this;
        if (userAction === void 0) { userAction = false; }
        this.messages.some((/**
         * @param {?} message
         * @param {?} index
         * @return {?}
         */
        function (message, index) {
            if (message.messageId === messageId) {
                _this.messages.splice(index, 1);
                _this.cdr.detectChanges();
                (/** @type {?} */ (message.onClose)).next(userAction);
                (/** @type {?} */ (message.onClose)).complete();
                return true;
            }
            return false;
        }));
    };
    /**
     * Remove all messages.
     */
    /**
     * Remove all messages.
     * @return {?}
     */
    NzMessageContainerComponent.prototype.removeMessageAll = /**
     * Remove all messages.
     * @return {?}
     */
    function () {
        this.messages = [];
        this.cdr.detectChanges();
    };
    /**
     * @protected
     * @return {?}
     */
    NzMessageContainerComponent.prototype.subscribeConfigChange = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME).subscribe((/**
         * @return {?}
         */
        function () { return _this.setConfig(); }));
    };
    /**
     * @protected
     * @param {?=} config
     * @return {?}
     */
    NzMessageContainerComponent.prototype.mergeMessageConfig = /**
     * @protected
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return tslib_1.__assign({}, this.config, config, this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME));
    };
    /**
     * Merge default options and custom message options
     * @param options
     */
    /**
     * Merge default options and custom message options
     * @protected
     * @param {?=} options
     * @return {?}
     */
    NzMessageContainerComponent.prototype._mergeMessageOptions = /**
     * Merge default options and custom message options
     * @protected
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        /** @type {?} */
        var defaultOptions = {
            nzDuration: this.config.nzDuration,
            nzAnimate: this.config.nzAnimate,
            nzPauseOnHover: this.config.nzPauseOnHover
        };
        return tslib_1.__assign({}, defaultOptions, options);
    };
    NzMessageContainerComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-message-container',
                    exportAs: 'nzMessageContainer',
                    preserveWhitespaces: false,
                    template: "<div class=\"ant-message\" [style.top]=\"top\">\r\n  <nz-message *ngFor=\"let message of messages; let i = index\" [nzMessage]=\"message\" [nzIndex]=\"i\"></nz-message>\r\n</div>"
                }] }
    ];
    /** @nocollapse */
    NzMessageContainerComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NzConfigService },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_MESSAGE_DEFAULT_CONFIG,] }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_MESSAGE_CONFIG,] }] }
    ]; };
    return NzMessageContainerComponent;
}());
export { NzMessageContainerComponent };
if (false) {
    /** @type {?} */
    NzMessageContainerComponent.prototype.messages;
    /** @type {?} */
    NzMessageContainerComponent.prototype.config;
    /** @type {?} */
    NzMessageContainerComponent.prototype.top;
    /**
     * @type {?}
     * @protected
     */
    NzMessageContainerComponent.prototype.cdr;
    /**
     * @type {?}
     * @protected
     */
    NzMessageContainerComponent.prototype.nzConfigService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVzc2FnZS1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9tZXNzYWdlLyIsInNvdXJjZXMiOlsibnotbWVzc2FnZS1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsTUFBTSxFQUVOLFFBQVEsRUFDUixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQixPQUFPLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRixPQUFPLEVBQXlCLGlCQUFpQixFQUFFLHlCQUF5QixFQUFFLE1BQU0scUJBQXFCLENBQUM7O0lBR3BHLHdCQUF3QixHQUFHLFNBQVM7QUFFMUM7SUFhRSxxQ0FDWSxHQUFzQixFQUN0QixlQUFnQyxFQUNLLGFBQW9DLEVBQzVDLE1BQTZCO1FBSDFELFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQU41QyxhQUFRLEdBQTBCLEVBQUUsQ0FBQztRQVVuQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDWixlQUFlLENBQ2IsdUhBQXVILENBQ3hILENBQUM7U0FDSDtRQUNELElBQUksQ0FBQyxTQUFTLHNCQUFNLGFBQWEsRUFBSyxNQUFNLEVBQUcsQ0FBQztJQUNsRCxDQUFDOzs7O0lBRUQsOENBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFRCwrQ0FBUzs7OztJQUFULFVBQVUsTUFBOEI7UUFDdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7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QkFBc0I7b0JBQ2hDLFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLDhMQUFvRDtpQkFDckQ7Ozs7Z0JBdkJDLGlCQUFpQjtnQkFTbUIsZUFBZTtnREF1QmhELFFBQVEsWUFBSSxNQUFNLFNBQUMseUJBQXlCO2dEQUM1QyxRQUFRLFlBQUksTUFBTSxTQUFDLGlCQUFpQjs7SUFvRnpDLGtDQUFDO0NBQUEsQUFyR0QsSUFxR0M7U0E3RlksMkJBQTJCOzs7SUFDdEMsK0NBQXFDOztJQUNyQyw2Q0FBd0M7O0lBQ3hDLDBDQUFtQjs7Ozs7SUFHakIsMENBQWdDOzs7OztJQUNoQyxzREFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEluamVjdCxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgdG9Dc3NQaXhlbCwgd2FybkRlcHJlY2F0aW9uLCBOekNvbmZpZ1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpNZXNzYWdlQ29uZmlnTGVnYWN5LCBOWl9NRVNTQUdFX0NPTkZJRywgTlpfTUVTU0FHRV9ERUZBVUxUX0NPTkZJRyB9IGZyb20gJy4vbnotbWVzc2FnZS1jb25maWcnO1xyXG5pbXBvcnQgeyBOek1lc3NhZ2VEYXRhRmlsbGVkLCBOek1lc3NhZ2VEYXRhT3B0aW9ucyB9IGZyb20gJy4vbnotbWVzc2FnZS5kZWZpbml0aW9ucyc7XHJcblxyXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAnbWVzc2FnZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHNlbGVjdG9yOiAnbnotbWVzc2FnZS1jb250YWluZXInLFxyXG4gIGV4cG9ydEFzOiAnbnpNZXNzYWdlQ29udGFpbmVyJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotbWVzc2FnZS1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOek1lc3NhZ2VDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIG1lc3NhZ2VzOiBOek1lc3NhZ2VEYXRhRmlsbGVkW10gPSBbXTtcclxuICBjb25maWc6IFJlcXVpcmVkPE56TWVzc2FnZUNvbmZpZ0xlZ2FjeT47XHJcbiAgdG9wOiBzdHJpbmcgfCBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByb3RlY3RlZCBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJvdGVjdGVkIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxyXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChOWl9NRVNTQUdFX0RFRkFVTFRfQ09ORklHKSBkZWZhdWx0Q29uZmlnOiBOek1lc3NhZ2VDb25maWdMZWdhY3ksXHJcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE5aX01FU1NBR0VfQ09ORklHKSBjb25maWc6IE56TWVzc2FnZUNvbmZpZ0xlZ2FjeVxyXG4gICkge1xyXG4gICAgaWYgKCEhY29uZmlnKSB7XHJcbiAgICAgIHdhcm5EZXByZWNhdGlvbihcclxuICAgICAgICBgSW5qZWN0aW9uIHRva2VuICdOWl9NRVNTQUdFX0NPTkZJRycgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIDkuMC4wLiBQbGVhc2UgdXNlICdOekNvbmZpZ1NlcnZpY2UnIGluc3RlYWQuYFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRDb25maWcoeyAuLi5kZWZhdWx0Q29uZmlnLCAuLi5jb25maWcgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc3Vic2NyaWJlQ29uZmlnQ2hhbmdlKCk7XHJcbiAgfVxyXG5cclxuICBzZXRDb25maWcoY29uZmlnPzogTnpNZXNzYWdlQ29uZmlnTGVnYWN5KTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbmZpZyA9IHRoaXMubWVyZ2VNZXNzYWdlQ29uZmlnKGNvbmZpZyk7XHJcbiAgICB0aGlzLnRvcCA9IHRvQ3NzUGl4ZWwodGhpcy5jb25maWcubnpUb3ApO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgYSBuZXcgbWVzc2FnZS5cclxuICAgKiBAcGFyYW0gbWVzc2FnZSBQYXJzZWQgbWVzc2FnZSBjb25maWd1cmF0aW9uLlxyXG4gICAqL1xyXG4gIGNyZWF0ZU1lc3NhZ2UobWVzc2FnZTogTnpNZXNzYWdlRGF0YUZpbGxlZCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubWVzc2FnZXMubGVuZ3RoID49IHRoaXMuY29uZmlnLm56TWF4U3RhY2spIHtcclxuICAgICAgdGhpcy5tZXNzYWdlcy5zcGxpY2UoMCwgMSk7XHJcbiAgICB9XHJcbiAgICBtZXNzYWdlLm9wdGlvbnMgPSB0aGlzLl9tZXJnZU1lc3NhZ2VPcHRpb25zKG1lc3NhZ2Uub3B0aW9ucyk7XHJcbiAgICBtZXNzYWdlLm9uQ2xvc2UgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xyXG4gICAgdGhpcy5tZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlIGEgbWVzc2FnZSBieSBgbWVzc2FnZUlkYC5cclxuICAgKiBAcGFyYW0gbWVzc2FnZUlkIElkIG9mIHRoZSBtZXNzYWdlIHRvIGJlIHJlbW92ZWQuXHJcbiAgICogQHBhcmFtIHVzZXJBY3Rpb24gV2hldGhlciB0aGlzIGlzIGNsb3NlZCBieSB1c2VyIGludGVyYWN0aW9uLlxyXG4gICAqL1xyXG4gIHJlbW92ZU1lc3NhZ2UobWVzc2FnZUlkOiBzdHJpbmcsIHVzZXJBY3Rpb246IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgdGhpcy5tZXNzYWdlcy5zb21lKChtZXNzYWdlLCBpbmRleCkgPT4ge1xyXG4gICAgICBpZiAobWVzc2FnZS5tZXNzYWdlSWQgPT09IG1lc3NhZ2VJZCkge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgbWVzc2FnZS5vbkNsb3NlIS5uZXh0KHVzZXJBY3Rpb24pO1xyXG4gICAgICAgIG1lc3NhZ2Uub25DbG9zZSEuY29tcGxldGUoKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZSBhbGwgbWVzc2FnZXMuXHJcbiAgICovXHJcbiAgcmVtb3ZlTWVzc2FnZUFsbCgpOiB2b2lkIHtcclxuICAgIHRoaXMubWVzc2FnZXMgPSBbXTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBzdWJzY3JpYmVDb25maWdDaGFuZ2UoKTogdm9pZCB7XHJcbiAgICB0aGlzLm56Q29uZmlnU2VydmljZS5nZXRDb25maWdDaGFuZ2VFdmVudEZvckNvbXBvbmVudChOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpLnN1YnNjcmliZSgoKSA9PiB0aGlzLnNldENvbmZpZygpKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBtZXJnZU1lc3NhZ2VDb25maWcoY29uZmlnPzogTnpNZXNzYWdlQ29uZmlnTGVnYWN5KTogUmVxdWlyZWQ8TnpNZXNzYWdlQ29uZmlnTGVnYWN5PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi50aGlzLmNvbmZpZyxcclxuICAgICAgLi4uY29uZmlnLFxyXG4gICAgICAuLi50aGlzLm56Q29uZmlnU2VydmljZS5nZXRDb25maWdGb3JDb21wb25lbnQoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1lcmdlIGRlZmF1bHQgb3B0aW9ucyBhbmQgY3VzdG9tIG1lc3NhZ2Ugb3B0aW9uc1xyXG4gICAqIEBwYXJhbSBvcHRpb25zXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIF9tZXJnZU1lc3NhZ2VPcHRpb25zKG9wdGlvbnM/OiBOek1lc3NhZ2VEYXRhT3B0aW9ucyk6IE56TWVzc2FnZURhdGFPcHRpb25zIHtcclxuICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zOiBOek1lc3NhZ2VEYXRhT3B0aW9ucyA9IHtcclxuICAgICAgbnpEdXJhdGlvbjogdGhpcy5jb25maWcubnpEdXJhdGlvbixcclxuICAgICAgbnpBbmltYXRlOiB0aGlzLmNvbmZpZy5uekFuaW1hdGUsXHJcbiAgICAgIG56UGF1c2VPbkhvdmVyOiB0aGlzLmNvbmZpZy5uelBhdXNlT25Ib3ZlclxyXG4gICAgfTtcclxuICAgIHJldHVybiB7IC4uLmRlZmF1bHRPcHRpb25zLCAuLi5vcHRpb25zIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==
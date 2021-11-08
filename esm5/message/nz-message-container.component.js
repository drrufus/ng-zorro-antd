/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVzc2FnZS1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9tZXNzYWdlLyIsInNvdXJjZXMiOlsibnotbWVzc2FnZS1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxNQUFNLEVBRU4sUUFBUSxFQUNSLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLE9BQU8sRUFBRSxVQUFVLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxGLE9BQU8sRUFBeUIsaUJBQWlCLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7SUFHcEcsd0JBQXdCLEdBQUcsU0FBUztBQUUxQztJQWFFLHFDQUNZLEdBQXNCLEVBQ3RCLGVBQWdDLEVBQ0ssYUFBb0MsRUFDNUMsTUFBNkI7UUFIMUQsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBTjVDLGFBQVEsR0FBMEIsRUFBRSxDQUFDO1FBVW5DLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUNaLGVBQWUsQ0FDYix1SEFBdUgsQ0FDeEgsQ0FBQztTQUNIO1FBQ0QsSUFBSSxDQUFDLFNBQVMsc0JBQU0sYUFBYSxFQUFLLE1BQU0sRUFBRyxDQUFDO0lBQ2xELENBQUM7Ozs7SUFFRCw4Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUMvQixDQUFDOzs7OztJQUVELCtDQUFTOzs7O0lBQVQsVUFBVSxNQUE4QjtRQUN0QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztR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QUFzQjtvQkFDaEMsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsOExBQW9EO2lCQUNyRDs7OztnQkF2QkMsaUJBQWlCO2dCQVNtQixlQUFlO2dEQXVCaEQsUUFBUSxZQUFJLE1BQU0sU0FBQyx5QkFBeUI7Z0RBQzVDLFFBQVEsWUFBSSxNQUFNLFNBQUMsaUJBQWlCOztJQW9GekMsa0NBQUM7Q0FBQSxBQXJHRCxJQXFHQztTQTdGWSwyQkFBMkI7OztJQUN0QywrQ0FBcUM7O0lBQ3JDLDZDQUF3Qzs7SUFDeEMsMENBQW1COzs7OztJQUdqQiwwQ0FBZ0M7Ozs7O0lBQ2hDLHNEQUEwQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgSW5qZWN0LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyB0b0Nzc1BpeGVsLCB3YXJuRGVwcmVjYXRpb24sIE56Q29uZmlnU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOek1lc3NhZ2VDb25maWdMZWdhY3ksIE5aX01FU1NBR0VfQ09ORklHLCBOWl9NRVNTQUdFX0RFRkFVTFRfQ09ORklHIH0gZnJvbSAnLi9uei1tZXNzYWdlLWNvbmZpZyc7XHJcbmltcG9ydCB7IE56TWVzc2FnZURhdGFGaWxsZWQsIE56TWVzc2FnZURhdGFPcHRpb25zIH0gZnJvbSAnLi9uei1tZXNzYWdlLmRlZmluaXRpb25zJztcclxuXHJcbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICdtZXNzYWdlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc2VsZWN0b3I6ICduei1tZXNzYWdlLWNvbnRhaW5lcicsXHJcbiAgZXhwb3J0QXM6ICduek1lc3NhZ2VDb250YWluZXInLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1tZXNzYWdlLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE56TWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgbWVzc2FnZXM6IE56TWVzc2FnZURhdGFGaWxsZWRbXSA9IFtdO1xyXG4gIGNvbmZpZzogUmVxdWlyZWQ8TnpNZXNzYWdlQ29uZmlnTGVnYWN5PjtcclxuICB0b3A6IHN0cmluZyB8IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJvdGVjdGVkIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcm90ZWN0ZWQgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXHJcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE5aX01FU1NBR0VfREVGQVVMVF9DT05GSUcpIGRlZmF1bHRDb25maWc6IE56TWVzc2FnZUNvbmZpZ0xlZ2FjeSxcclxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTlpfTUVTU0FHRV9DT05GSUcpIGNvbmZpZzogTnpNZXNzYWdlQ29uZmlnTGVnYWN5XHJcbiAgKSB7XHJcbiAgICBpZiAoISFjb25maWcpIHtcclxuICAgICAgd2FybkRlcHJlY2F0aW9uKFxyXG4gICAgICAgIGBJbmplY3Rpb24gdG9rZW4gJ05aX01FU1NBR0VfQ09ORklHJyBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFBsZWFzZSB1c2UgJ056Q29uZmlnU2VydmljZScgaW5zdGVhZC5gXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldENvbmZpZyh7IC4uLmRlZmF1bHRDb25maWcsIC4uLmNvbmZpZyB9KTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zdWJzY3JpYmVDb25maWdDaGFuZ2UoKTtcclxuICB9XHJcblxyXG4gIHNldENvbmZpZyhjb25maWc/OiBOek1lc3NhZ2VDb25maWdMZWdhY3kpOiB2b2lkIHtcclxuICAgIHRoaXMuY29uZmlnID0gdGhpcy5tZXJnZU1lc3NhZ2VDb25maWcoY29uZmlnKTtcclxuICAgIHRoaXMudG9wID0gdG9Dc3NQaXhlbCh0aGlzLmNvbmZpZy5uelRvcCk7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIG5ldyBtZXNzYWdlLlxyXG4gICAqIEBwYXJhbSBtZXNzYWdlIFBhcnNlZCBtZXNzYWdlIGNvbmZpZ3VyYXRpb24uXHJcbiAgICovXHJcbiAgY3JlYXRlTWVzc2FnZShtZXNzYWdlOiBOek1lc3NhZ2VEYXRhRmlsbGVkKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5tZXNzYWdlcy5sZW5ndGggPj0gdGhpcy5jb25maWcubnpNYXhTdGFjaykge1xyXG4gICAgICB0aGlzLm1lc3NhZ2VzLnNwbGljZSgwLCAxKTtcclxuICAgIH1cclxuICAgIG1lc3NhZ2Uub3B0aW9ucyA9IHRoaXMuX21lcmdlTWVzc2FnZU9wdGlvbnMobWVzc2FnZS5vcHRpb25zKTtcclxuICAgIG1lc3NhZ2Uub25DbG9zZSA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcbiAgICB0aGlzLm1lc3NhZ2VzLnB1c2gobWVzc2FnZSk7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmUgYSBtZXNzYWdlIGJ5IGBtZXNzYWdlSWRgLlxyXG4gICAqIEBwYXJhbSBtZXNzYWdlSWQgSWQgb2YgdGhlIG1lc3NhZ2UgdG8gYmUgcmVtb3ZlZC5cclxuICAgKiBAcGFyYW0gdXNlckFjdGlvbiBXaGV0aGVyIHRoaXMgaXMgY2xvc2VkIGJ5IHVzZXIgaW50ZXJhY3Rpb24uXHJcbiAgICovXHJcbiAgcmVtb3ZlTWVzc2FnZShtZXNzYWdlSWQ6IHN0cmluZywgdXNlckFjdGlvbjogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICB0aGlzLm1lc3NhZ2VzLnNvbWUoKG1lc3NhZ2UsIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChtZXNzYWdlLm1lc3NhZ2VJZCA9PT0gbWVzc2FnZUlkKSB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICBtZXNzYWdlLm9uQ2xvc2UhLm5leHQodXNlckFjdGlvbik7XHJcbiAgICAgICAgbWVzc2FnZS5vbkNsb3NlIS5jb21wbGV0ZSgpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlIGFsbCBtZXNzYWdlcy5cclxuICAgKi9cclxuICByZW1vdmVNZXNzYWdlQWxsKCk6IHZvaWQge1xyXG4gICAgdGhpcy5tZXNzYWdlcyA9IFtdO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHN1YnNjcmliZUNvbmZpZ0NoYW5nZSgpOiB2b2lkIHtcclxuICAgIHRoaXMubnpDb25maWdTZXJ2aWNlLmdldENvbmZpZ0NoYW5nZUV2ZW50Rm9yQ29tcG9uZW50KE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2V0Q29uZmlnKCkpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIG1lcmdlTWVzc2FnZUNvbmZpZyhjb25maWc/OiBOek1lc3NhZ2VDb25maWdMZWdhY3kpOiBSZXF1aXJlZDxOek1lc3NhZ2VDb25maWdMZWdhY3k+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnRoaXMuY29uZmlnLFxyXG4gICAgICAuLi5jb25maWcsXHJcbiAgICAgIC4uLnRoaXMubnpDb25maWdTZXJ2aWNlLmdldENvbmZpZ0ZvckNvbXBvbmVudChOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTWVyZ2UgZGVmYXVsdCBvcHRpb25zIGFuZCBjdXN0b20gbWVzc2FnZSBvcHRpb25zXHJcbiAgICogQHBhcmFtIG9wdGlvbnNcclxuICAgKi9cclxuICBwcm90ZWN0ZWQgX21lcmdlTWVzc2FnZU9wdGlvbnMob3B0aW9ucz86IE56TWVzc2FnZURhdGFPcHRpb25zKTogTnpNZXNzYWdlRGF0YU9wdGlvbnMge1xyXG4gICAgY29uc3QgZGVmYXVsdE9wdGlvbnM6IE56TWVzc2FnZURhdGFPcHRpb25zID0ge1xyXG4gICAgICBuekR1cmF0aW9uOiB0aGlzLmNvbmZpZy5uekR1cmF0aW9uLFxyXG4gICAgICBuekFuaW1hdGU6IHRoaXMuY29uZmlnLm56QW5pbWF0ZSxcclxuICAgICAgbnpQYXVzZU9uSG92ZXI6IHRoaXMuY29uZmlnLm56UGF1c2VPbkhvdmVyXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHsgLi4uZGVmYXVsdE9wdGlvbnMsIC4uLm9wdGlvbnMgfTtcclxuICB9XHJcbn1cclxuIl19
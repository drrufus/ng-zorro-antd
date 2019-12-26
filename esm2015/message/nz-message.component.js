/**
 * @fileoverview added by tsickle
 * Generated from: nz-message.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewEncapsulation } from '@angular/core';
import { moveUpMotion } from 'ng-zorro-antd/core';
import { NzMessageContainerComponent } from './nz-message-container.component';
export class NzMessageComponent {
    // Time to live.
    /**
     * @param {?} _messageContainer
     * @param {?} cdr
     */
    constructor(_messageContainer, cdr) {
        this._messageContainer = _messageContainer;
        this.cdr = cdr;
        // Whether to set a timeout to destroy itself.
        this._eraseTimer = null;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // `NzMessageContainer` does its job so all properties cannot be undefined.
        this._options = (/** @type {?} */ (this.nzMessage.options));
        if (this._options.nzAnimate) {
            this.nzMessage.state = 'enter';
        }
        this._autoErase = this._options.nzDuration > 0;
        if (this._autoErase) {
            this._initErase();
            this._startEraseTimeout();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._autoErase) {
            this._clearEraseTimeout();
        }
    }
    /**
     * @return {?}
     */
    onEnter() {
        if (this._autoErase && this._options.nzPauseOnHover) {
            this._clearEraseTimeout();
            this._updateTTL();
        }
    }
    /**
     * @return {?}
     */
    onLeave() {
        if (this._autoErase && this._options.nzPauseOnHover) {
            this._startEraseTimeout();
        }
    }
    // Remove self
    /**
     * @protected
     * @param {?=} userAction
     * @return {?}
     */
    _destroy(userAction = false) {
        if (this._options.nzAnimate) {
            this.nzMessage.state = 'leave';
            this.cdr.detectChanges();
            setTimeout((/**
             * @return {?}
             */
            () => this._messageContainer.removeMessage(this.nzMessage.messageId, userAction)), 200);
        }
        else {
            this._messageContainer.removeMessage(this.nzMessage.messageId, userAction);
        }
    }
    /**
     * @private
     * @return {?}
     */
    _initErase() {
        this._eraseTTL = this._options.nzDuration;
        this._eraseTimingStart = Date.now();
    }
    /**
     * @private
     * @return {?}
     */
    _updateTTL() {
        if (this._autoErase) {
            this._eraseTTL -= Date.now() - this._eraseTimingStart;
        }
    }
    /**
     * @private
     * @return {?}
     */
    _startEraseTimeout() {
        if (this._eraseTTL > 0) {
            this._clearEraseTimeout();
            this._eraseTimer = setTimeout((/**
             * @return {?}
             */
            () => this._destroy()), this._eraseTTL);
            this._eraseTimingStart = Date.now();
        }
        else {
            this._destroy();
        }
    }
    /**
     * @private
     * @return {?}
     */
    _clearEraseTimeout() {
        if (this._eraseTimer !== null) {
            clearTimeout(this._eraseTimer);
            this._eraseTimer = null;
        }
    }
}
NzMessageComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-message',
                exportAs: 'nzMessage',
                preserveWhitespaces: false,
                animations: [moveUpMotion],
                template: "<div class=\"ant-message-notice\"\r\n  [@moveUpMotion]=\"nzMessage.state\"\r\n  (mouseenter)=\"onEnter()\"\r\n  (mouseleave)=\"onLeave()\">\r\n  <div class=\"ant-message-notice-content\">\r\n    <div class=\"ant-message-custom-content\" [ngClass]=\"'ant-message-' + nzMessage.type\">\r\n      <ng-container [ngSwitch]=\"nzMessage.type\">\r\n        <i *ngSwitchCase=\"'success'\" nz-icon nzType=\"check-circle\"></i>\r\n        <i *ngSwitchCase=\"'info'\"  nz-icon nzType=\"info-circle\"></i>\r\n        <i *ngSwitchCase=\"'warning'\" nz-icon nzType=\"exclamation-circle\"></i>\r\n        <i *ngSwitchCase=\"'error'\" nz-icon nzType=\"close-circle\"></i>\r\n        <i *ngSwitchCase=\"'loading'\" nz-icon nzType=\"loading\"></i>\r\n      </ng-container>\r\n      <ng-container *nzStringTemplateOutlet=\"nzMessage.content\">\r\n        <span [innerHTML]=\"nzMessage.content\"></span>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n</div>\r\n"
            }] }
];
/** @nocollapse */
NzMessageComponent.ctorParameters = () => [
    { type: NzMessageContainerComponent },
    { type: ChangeDetectorRef }
];
NzMessageComponent.propDecorators = {
    nzMessage: [{ type: Input }],
    nzIndex: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NzMessageComponent.prototype.nzMessage;
    /** @type {?} */
    NzMessageComponent.prototype.nzIndex;
    /**
     * @type {?}
     * @protected
     */
    NzMessageComponent.prototype._options;
    /**
     * @type {?}
     * @private
     */
    NzMessageComponent.prototype._autoErase;
    /**
     * @type {?}
     * @private
     */
    NzMessageComponent.prototype._eraseTimer;
    /**
     * @type {?}
     * @private
     */
    NzMessageComponent.prototype._eraseTimingStart;
    /**
     * @type {?}
     * @private
     */
    NzMessageComponent.prototype._eraseTTL;
    /**
     * @type {?}
     * @private
     */
    NzMessageComponent.prototype._messageContainer;
    /**
     * @type {?}
     * @protected
     */
    NzMessageComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL21lc3NhZ2UvIiwic291cmNlcyI6WyJuei1tZXNzYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsS0FBSyxFQUdMLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFZL0UsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7O0lBVzdCLFlBQW9CLGlCQUE4QyxFQUFZLEdBQXNCO1FBQWhGLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBNkI7UUFBWSxRQUFHLEdBQUgsR0FBRyxDQUFtQjs7UUFKNUYsZ0JBQVcsR0FBa0IsSUFBSSxDQUFDO0lBSTZELENBQUM7Ozs7SUFFeEcsUUFBUTtRQUNOLDJFQUEyRTtRQUMzRSxJQUFJLENBQUMsUUFBUSxHQUFHLG1CQUFBLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFrQyxDQUFDO1FBRXpFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1NBQ2hDO1FBRUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFFL0MsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUMzQjtJQUNILENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFF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O0lBQ2xDLHVDQUEwQjs7Ozs7SUFFZCwrQ0FBc0Q7Ozs7O0lBQUUsaUNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBtb3ZlVXBNb3Rpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9uei1tZXNzYWdlLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOek1lc3NhZ2VEYXRhRmlsbGVkLCBOek1lc3NhZ2VEYXRhT3B0aW9ucyB9IGZyb20gJy4vbnotbWVzc2FnZS5kZWZpbml0aW9ucyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHNlbGVjdG9yOiAnbnotbWVzc2FnZScsXHJcbiAgZXhwb3J0QXM6ICduek1lc3NhZ2UnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGFuaW1hdGlvbnM6IFttb3ZlVXBNb3Rpb25dLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1tZXNzYWdlLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpNZXNzYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIG56TWVzc2FnZTogTnpNZXNzYWdlRGF0YUZpbGxlZDtcclxuICBASW5wdXQoKSBuekluZGV4OiBudW1iZXI7XHJcblxyXG4gIHByb3RlY3RlZCBfb3B0aW9uczogUmVxdWlyZWQ8TnpNZXNzYWdlRGF0YU9wdGlvbnM+O1xyXG5cclxuICBwcml2YXRlIF9hdXRvRXJhc2U6IGJvb2xlYW47IC8vIFdoZXRoZXIgdG8gc2V0IGEgdGltZW91dCB0byBkZXN0cm95IGl0c2VsZi5cclxuICBwcml2YXRlIF9lcmFzZVRpbWVyOiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuICBwcml2YXRlIF9lcmFzZVRpbWluZ1N0YXJ0OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfZXJhc2VUVEw6IG51bWJlcjsgLy8gVGltZSB0byBsaXZlLlxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9tZXNzYWdlQ29udGFpbmVyOiBOek1lc3NhZ2VDb250YWluZXJDb21wb25lbnQsIHByb3RlY3RlZCBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIC8vIGBOek1lc3NhZ2VDb250YWluZXJgIGRvZXMgaXRzIGpvYiBzbyBhbGwgcHJvcGVydGllcyBjYW5ub3QgYmUgdW5kZWZpbmVkLlxyXG4gICAgdGhpcy5fb3B0aW9ucyA9IHRoaXMubnpNZXNzYWdlLm9wdGlvbnMgYXMgUmVxdWlyZWQ8TnpNZXNzYWdlRGF0YU9wdGlvbnM+O1xyXG5cclxuICAgIGlmICh0aGlzLl9vcHRpb25zLm56QW5pbWF0ZSkge1xyXG4gICAgICB0aGlzLm56TWVzc2FnZS5zdGF0ZSA9ICdlbnRlcic7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fYXV0b0VyYXNlID0gdGhpcy5fb3B0aW9ucy5uekR1cmF0aW9uID4gMDtcclxuXHJcbiAgICBpZiAodGhpcy5fYXV0b0VyYXNlKSB7XHJcbiAgICAgIHRoaXMuX2luaXRFcmFzZSgpO1xyXG4gICAgICB0aGlzLl9zdGFydEVyYXNlVGltZW91dCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fYXV0b0VyYXNlKSB7XHJcbiAgICAgIHRoaXMuX2NsZWFyRXJhc2VUaW1lb3V0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkVudGVyKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2F1dG9FcmFzZSAmJiB0aGlzLl9vcHRpb25zLm56UGF1c2VPbkhvdmVyKSB7XHJcbiAgICAgIHRoaXMuX2NsZWFyRXJhc2VUaW1lb3V0KCk7XHJcbiAgICAgIHRoaXMuX3VwZGF0ZVRUTCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25MZWF2ZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9hdXRvRXJhc2UgJiYgdGhpcy5fb3B0aW9ucy5uelBhdXNlT25Ib3Zlcikge1xyXG4gICAgICB0aGlzLl9zdGFydEVyYXNlVGltZW91dCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gUmVtb3ZlIHNlbGZcclxuICBwcm90ZWN0ZWQgX2Rlc3Ryb3kodXNlckFjdGlvbjogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fb3B0aW9ucy5uekFuaW1hdGUpIHtcclxuICAgICAgdGhpcy5uek1lc3NhZ2Uuc3RhdGUgPSAnbGVhdmUnO1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5fbWVzc2FnZUNvbnRhaW5lci5yZW1vdmVNZXNzYWdlKHRoaXMubnpNZXNzYWdlLm1lc3NhZ2VJZCwgdXNlckFjdGlvbiksIDIwMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9tZXNzYWdlQ29udGFpbmVyLnJlbW92ZU1lc3NhZ2UodGhpcy5uek1lc3NhZ2UubWVzc2FnZUlkLCB1c2VyQWN0aW9uKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2luaXRFcmFzZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2VyYXNlVFRMID0gdGhpcy5fb3B0aW9ucy5uekR1cmF0aW9uO1xyXG4gICAgdGhpcy5fZXJhc2VUaW1pbmdTdGFydCA9IERhdGUubm93KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF91cGRhdGVUVEwoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fYXV0b0VyYXNlKSB7XHJcbiAgICAgIHRoaXMuX2VyYXNlVFRMIC09IERhdGUubm93KCkgLSB0aGlzLl9lcmFzZVRpbWluZ1N0YXJ0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfc3RhcnRFcmFzZVRpbWVvdXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fZXJhc2VUVEwgPiAwKSB7XHJcbiAgICAgIHRoaXMuX2NsZWFyRXJhc2VUaW1lb3V0KCk7XHJcbiAgICAgIHRoaXMuX2VyYXNlVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuX2Rlc3Ryb3koKSwgdGhpcy5fZXJhc2VUVEwpO1xyXG4gICAgICB0aGlzLl9lcmFzZVRpbWluZ1N0YXJ0ID0gRGF0ZS5ub3coKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2Rlc3Ryb3koKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2NsZWFyRXJhc2VUaW1lb3V0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2VyYXNlVGltZXIgIT09IG51bGwpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2VyYXNlVGltZXIpO1xyXG4gICAgICB0aGlzLl9lcmFzZVRpbWVyID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19
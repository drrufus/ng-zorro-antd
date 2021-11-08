/**
 * @fileoverview added by tsickle
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
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'ng-zorro-antd/core';
import * as ɵngcc3 from 'ng-zorro-antd/icon';

function NzMessageComponent_i_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 10);
} }
function NzMessageComponent_i_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 11);
} }
function NzMessageComponent_i_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 12);
} }
function NzMessageComponent_i_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 13);
} }
function NzMessageComponent_i_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 14);
} }
function NzMessageComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelement(1, "span", 15);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r5.nzMessage.content, ɵngcc0.ɵɵsanitizeHtml);
} }
var NzMessageComponent = /** @class */ (function () {
    function NzMessageComponent(_messageContainer, cdr) {
        this._messageContainer = _messageContainer;
        this.cdr = cdr;
        // Whether to set a timeout to destroy itself.
        this._eraseTimer = null;
    }
    /**
     * @return {?}
     */
    NzMessageComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    NzMessageComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._autoErase) {
            this._clearEraseTimeout();
        }
    };
    /**
     * @return {?}
     */
    NzMessageComponent.prototype.onEnter = /**
     * @return {?}
     */
    function () {
        if (this._autoErase && this._options.nzPauseOnHover) {
            this._clearEraseTimeout();
            this._updateTTL();
        }
    };
    /**
     * @return {?}
     */
    NzMessageComponent.prototype.onLeave = /**
     * @return {?}
     */
    function () {
        if (this._autoErase && this._options.nzPauseOnHover) {
            this._startEraseTimeout();
        }
    };
    // Remove self
    // Remove self
    /**
     * @protected
     * @param {?=} userAction
     * @return {?}
     */
    NzMessageComponent.prototype._destroy = 
    // Remove self
    /**
     * @protected
     * @param {?=} userAction
     * @return {?}
     */
    function (userAction) {
        var _this = this;
        if (userAction === void 0) { userAction = false; }
        if (this._options.nzAnimate) {
            this.nzMessage.state = 'leave';
            this.cdr.detectChanges();
            setTimeout((/**
             * @return {?}
             */
            function () { return _this._messageContainer.removeMessage(_this.nzMessage.messageId, userAction); }), 200);
        }
        else {
            this._messageContainer.removeMessage(this.nzMessage.messageId, userAction);
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzMessageComponent.prototype._initErase = /**
     * @private
     * @return {?}
     */
    function () {
        this._eraseTTL = this._options.nzDuration;
        this._eraseTimingStart = Date.now();
    };
    /**
     * @private
     * @return {?}
     */
    NzMessageComponent.prototype._updateTTL = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._autoErase) {
            this._eraseTTL -= Date.now() - this._eraseTimingStart;
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzMessageComponent.prototype._startEraseTimeout = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._eraseTTL > 0) {
            this._clearEraseTimeout();
            this._eraseTimer = setTimeout((/**
             * @return {?}
             */
            function () { return _this._destroy(); }), this._eraseTTL);
            this._eraseTimingStart = Date.now();
        }
        else {
            this._destroy();
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzMessageComponent.prototype._clearEraseTimeout = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._eraseTimer !== null) {
            clearTimeout(this._eraseTimer);
            this._eraseTimer = null;
        }
    };
    /** @nocollapse */
    NzMessageComponent.ctorParameters = function () { return [
        { type: NzMessageContainerComponent },
        { type: ChangeDetectorRef }
    ]; };
    NzMessageComponent.propDecorators = {
        nzMessage: [{ type: Input }],
        nzIndex: [{ type: Input }]
    };
NzMessageComponent.ɵfac = function NzMessageComponent_Factory(t) { return new (t || NzMessageComponent)(ɵngcc0.ɵɵdirectiveInject(NzMessageContainerComponent), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
NzMessageComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzMessageComponent, selectors: [["nz-message"]], inputs: { nzMessage: "nzMessage", nzIndex: "nzIndex" }, exportAs: ["nzMessage"], decls: 10, vars: 9, consts: [[1, "ant-message-notice", 3, "mouseenter", "mouseleave"], [1, "ant-message-notice-content"], [1, "ant-message-custom-content", 3, "ngClass"], [3, "ngSwitch"], ["nz-icon", "", "nzType", "check-circle", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "info-circle", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "exclamation-circle", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "close-circle", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "loading", 4, "ngSwitchCase"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", "nzType", "check-circle"], ["nz-icon", "", "nzType", "info-circle"], ["nz-icon", "", "nzType", "exclamation-circle"], ["nz-icon", "", "nzType", "close-circle"], ["nz-icon", "", "nzType", "loading"], [3, "innerHTML"]], template: function NzMessageComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵlistener("mouseenter", function NzMessageComponent_Template_div_mouseenter_0_listener() { return ctx.onEnter(); })("mouseleave", function NzMessageComponent_Template_div_mouseleave_0_listener() { return ctx.onLeave(); });
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵelementContainerStart(3, 3);
        ɵngcc0.ɵɵtemplate(4, NzMessageComponent_i_4_Template, 1, 0, "i", 4);
        ɵngcc0.ɵɵtemplate(5, NzMessageComponent_i_5_Template, 1, 0, "i", 5);
        ɵngcc0.ɵɵtemplate(6, NzMessageComponent_i_6_Template, 1, 0, "i", 6);
        ɵngcc0.ɵɵtemplate(7, NzMessageComponent_i_7_Template, 1, 0, "i", 7);
        ɵngcc0.ɵɵtemplate(8, NzMessageComponent_i_8_Template, 1, 0, "i", 8);
        ɵngcc0.ɵɵelementContainerEnd();
        ɵngcc0.ɵɵtemplate(9, NzMessageComponent_ng_container_9_Template, 2, 1, "ng-container", 9);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("@moveUpMotion", ctx.nzMessage.state);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngClass", "ant-message-" + ctx.nzMessage.type);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitch", ctx.nzMessage.type);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitchCase", "success");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitchCase", "info");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitchCase", "warning");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitchCase", "error");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitchCase", "loading");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx.nzMessage.content);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgSwitch, ɵngcc1.NgSwitchCase, ɵngcc2.NzStringTemplateOutletDirective, ɵngcc3.NzIconDirective], encapsulation: 2, data: { animation: [moveUpMotion] }, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzMessageComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-message',
                exportAs: 'nzMessage',
                preserveWhitespaces: false,
                animations: [moveUpMotion],
                template: "<div class=\"ant-message-notice\"\r\n  [@moveUpMotion]=\"nzMessage.state\"\r\n  (mouseenter)=\"onEnter()\"\r\n  (mouseleave)=\"onLeave()\">\r\n  <div class=\"ant-message-notice-content\">\r\n    <div class=\"ant-message-custom-content\" [ngClass]=\"'ant-message-' + nzMessage.type\">\r\n      <ng-container [ngSwitch]=\"nzMessage.type\">\r\n        <i *ngSwitchCase=\"'success'\" nz-icon nzType=\"check-circle\"></i>\r\n        <i *ngSwitchCase=\"'info'\"  nz-icon nzType=\"info-circle\"></i>\r\n        <i *ngSwitchCase=\"'warning'\" nz-icon nzType=\"exclamation-circle\"></i>\r\n        <i *ngSwitchCase=\"'error'\" nz-icon nzType=\"close-circle\"></i>\r\n        <i *ngSwitchCase=\"'loading'\" nz-icon nzType=\"loading\"></i>\r\n      </ng-container>\r\n      <ng-container *nzStringTemplateOutlet=\"nzMessage.content\">\r\n        <span [innerHTML]=\"nzMessage.content\"></span>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n</div>\r\n"
            }]
    }], function () { return [{ type: NzMessageContainerComponent }, { type: ɵngcc0.ChangeDetectorRef }]; }, { nzMessage: [{
            type: Input
        }], nzIndex: [{
            type: Input
        }] }); })();
    return NzMessageComponent;
}());
export { NzMessageComponent };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIm5nOi9uZy16b3Jyby1hbnRkL21lc3NhZ2UvbnotbWVzc2FnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsS0FBSyxFQUdMLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUcvRTtJQW9CRSw0QkFBb0IsaUJBQThDLEVBQVksR0FBc0I7UUFBaEYsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUE2QjtRQUFZLFFBQUcsR0FBSCxHQUFHLENBQW1COztRQUo1RixnQkFBVyxHQUFrQixJQUFJLENBQUM7SUFJNkQsQ0FBQzs7OztJQUV4RyxxQ0FBUTs7O0lBQVI7UUFDRSwyRUFBMkU7UUFDM0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxtQkFBQSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBa0MsQ0FBQztRQUV6RSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztTQUNoQztRQUVELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBRS9DLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDM0I7SUFDSCxDQUFDOzs7O0lBRUQsd0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQzNCO0lBQ0gsQ0FBQzs7OztJQUVELG9DQUFPOzs7SUFBUDtRQUNFLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRTtZQUNuRCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkI7SUFDSCxDQUFDOzs7O0lBRUQsb0NBQU87OztJQUFQO1FBQ0UsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFO1lBQ25ELElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQzNCO0lBQ0gsQ0FBQztJQUVELGNBQWM7Ozs7Ozs7SUFDSixxQ0FBUTs7Ozs7OztJQUFsQixVQUFtQixVQUEyQjtRQUE5QyxpQkFRQztRQVJrQiwyQkFBQSxFQUFBLGtCQUEyQjtRQUM1QyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztZQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3pCLFVBQVU7OztZQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxFQUExRSxDQUEwRSxHQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ25HO2FBQU07WUFDTCxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQzVFO0lBQ0gsQ0FBQzs7Ozs7SUFFTyx1Q0FBVTs7OztJQUFsQjtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7UUFDMUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUN0QyxDQUFDOzs7OztJQUVPLHVDQUFVOzs7O0lBQWxCO1FBQ0UsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztTQUN2RDtJQUNILENBQUM7Ozs7O0lBRU8sK0NBQWtCOzs7O0lBQTFCO1FBQUEsaUJBUUM7UUFQQyxJQUFJLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVTs7O1lBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxRQUFRLEVBQUUsRUFBZixDQUFlLEdBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3JFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDckM7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNqQjtJQUNILENBQUM7Ozs7O0lBRU8sK0NBQWtCOzs7O0lBQTFCO1FBQ0UsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLElBQUksRUFBRTtZQUM3QixZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQyxDQUNILEFBdEZROzsrQkFUUCxTQUFTLFNBQUM7UUFDVCxlQUFlLEVBQUUsVEFKViwyQkFBMkI7Q0FJTSxDQUFDLE1BQU0sc0JBQy9DLGRBZkEsaUJBQWlCO09BZUosRUFBRTtnQkFBaUIsQ0FBQyxJQUFJO0NBQ3JDLFFBQVEsRUFBRSxZQUFZLEtBT3JCLEtBQUs7T0FOTixRQUFRLEVBQUUsV0FBVyxGQU9wQixLQUFLOztRQU5OLG1CQUFtQixFQUFFLEtBQUssc0JBQzFCLFVBQVUsRUFBRSxDQUFDLFlBQVksQ0FBQyxzQkFDMUI7ZzFCQUEwQyxrQkFDM0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUdpQjtJQW9GbEIseUJBQUM7Q0FBQSxBQS9GRCxJQStGQztTQXRGWSxrQkFBa0I7OztJQUM3Qix1Q0FBd0M7O0lBQ3hDLHFDQUF5Qjs7Ozs7SUFFekIsc0NBQW1EOzs7OztJQUVuRCx3Q0FBNEI7Ozs7O0lBQzVCLHlDQUEwQzs7Ozs7SUFDMUMsK0NBQWtDOzs7OztJQUNsQyx1Q0FBMEI7Ozs7O0lBRWQsK0NBQXNEOzs7OztJQUFFLGlDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgbW92ZVVwTW90aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56TWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vbnotbWVzc2FnZS1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpNZXNzYWdlRGF0YUZpbGxlZCwgTnpNZXNzYWdlRGF0YU9wdGlvbnMgfSBmcm9tICcuL256LW1lc3NhZ2UuZGVmaW5pdGlvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzZWxlY3RvcjogJ256LW1lc3NhZ2UnLFxyXG4gIGV4cG9ydEFzOiAnbnpNZXNzYWdlJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBhbmltYXRpb25zOiBbbW92ZVVwTW90aW9uXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotbWVzc2FnZS5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE56TWVzc2FnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBuek1lc3NhZ2U6IE56TWVzc2FnZURhdGFGaWxsZWQ7XHJcbiAgQElucHV0KCkgbnpJbmRleDogbnVtYmVyO1xyXG5cclxuICBwcm90ZWN0ZWQgX29wdGlvbnM6IFJlcXVpcmVkPE56TWVzc2FnZURhdGFPcHRpb25zPjtcclxuXHJcbiAgcHJpdmF0ZSBfYXV0b0VyYXNlOiBib29sZWFuOyAvLyBXaGV0aGVyIHRvIHNldCBhIHRpbWVvdXQgdG8gZGVzdHJveSBpdHNlbGYuXHJcbiAgcHJpdmF0ZSBfZXJhc2VUaW1lcjogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBfZXJhc2VUaW1pbmdTdGFydDogbnVtYmVyO1xyXG4gIHByaXZhdGUgX2VyYXNlVFRMOiBudW1iZXI7IC8vIFRpbWUgdG8gbGl2ZS5cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbWVzc2FnZUNvbnRhaW5lcjogTnpNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50LCBwcm90ZWN0ZWQgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAvLyBgTnpNZXNzYWdlQ29udGFpbmVyYCBkb2VzIGl0cyBqb2Igc28gYWxsIHByb3BlcnRpZXMgY2Fubm90IGJlIHVuZGVmaW5lZC5cclxuICAgIHRoaXMuX29wdGlvbnMgPSB0aGlzLm56TWVzc2FnZS5vcHRpb25zIGFzIFJlcXVpcmVkPE56TWVzc2FnZURhdGFPcHRpb25zPjtcclxuXHJcbiAgICBpZiAodGhpcy5fb3B0aW9ucy5uekFuaW1hdGUpIHtcclxuICAgICAgdGhpcy5uek1lc3NhZ2Uuc3RhdGUgPSAnZW50ZXInO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2F1dG9FcmFzZSA9IHRoaXMuX29wdGlvbnMubnpEdXJhdGlvbiA+IDA7XHJcblxyXG4gICAgaWYgKHRoaXMuX2F1dG9FcmFzZSkge1xyXG4gICAgICB0aGlzLl9pbml0RXJhc2UoKTtcclxuICAgICAgdGhpcy5fc3RhcnRFcmFzZVRpbWVvdXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2F1dG9FcmFzZSkge1xyXG4gICAgICB0aGlzLl9jbGVhckVyYXNlVGltZW91dCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25FbnRlcigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9hdXRvRXJhc2UgJiYgdGhpcy5fb3B0aW9ucy5uelBhdXNlT25Ib3Zlcikge1xyXG4gICAgICB0aGlzLl9jbGVhckVyYXNlVGltZW91dCgpO1xyXG4gICAgICB0aGlzLl91cGRhdGVUVEwoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uTGVhdmUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fYXV0b0VyYXNlICYmIHRoaXMuX29wdGlvbnMubnpQYXVzZU9uSG92ZXIpIHtcclxuICAgICAgdGhpcy5fc3RhcnRFcmFzZVRpbWVvdXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFJlbW92ZSBzZWxmXHJcbiAgcHJvdGVjdGVkIF9kZXN0cm95KHVzZXJBY3Rpb246IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX29wdGlvbnMubnpBbmltYXRlKSB7XHJcbiAgICAgIHRoaXMubnpNZXNzYWdlLnN0YXRlID0gJ2xlYXZlJztcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuX21lc3NhZ2VDb250YWluZXIucmVtb3ZlTWVzc2FnZSh0aGlzLm56TWVzc2FnZS5tZXNzYWdlSWQsIHVzZXJBY3Rpb24pLCAyMDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fbWVzc2FnZUNvbnRhaW5lci5yZW1vdmVNZXNzYWdlKHRoaXMubnpNZXNzYWdlLm1lc3NhZ2VJZCwgdXNlckFjdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9pbml0RXJhc2UoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9lcmFzZVRUTCA9IHRoaXMuX29wdGlvbnMubnpEdXJhdGlvbjtcclxuICAgIHRoaXMuX2VyYXNlVGltaW5nU3RhcnQgPSBEYXRlLm5vdygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfdXBkYXRlVFRMKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2F1dG9FcmFzZSkge1xyXG4gICAgICB0aGlzLl9lcmFzZVRUTCAtPSBEYXRlLm5vdygpIC0gdGhpcy5fZXJhc2VUaW1pbmdTdGFydDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3N0YXJ0RXJhc2VUaW1lb3V0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2VyYXNlVFRMID4gMCkge1xyXG4gICAgICB0aGlzLl9jbGVhckVyYXNlVGltZW91dCgpO1xyXG4gICAgICB0aGlzLl9lcmFzZVRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLl9kZXN0cm95KCksIHRoaXMuX2VyYXNlVFRMKTtcclxuICAgICAgdGhpcy5fZXJhc2VUaW1pbmdTdGFydCA9IERhdGUubm93KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9jbGVhckVyYXNlVGltZW91dCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9lcmFzZVRpbWVyICE9PSBudWxsKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9lcmFzZVRpbWVyKTtcclxuICAgICAgdGhpcy5fZXJhc2VUaW1lciA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==
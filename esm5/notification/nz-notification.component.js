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
import { ChangeDetectorRef, Component, Input, ViewEncapsulation } from '@angular/core';
import { notificationMotion } from 'ng-zorro-antd/core';
import { NzMessageComponent } from 'ng-zorro-antd/message';
import { NzNotificationContainerComponent } from './nz-notification-container.component';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'ng-zorro-antd/icon';

function NzNotificationComponent_div_1_i_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 15);
} }
function NzNotificationComponent_div_1_i_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 16);
} }
function NzNotificationComponent_div_1_i_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 17);
} }
function NzNotificationComponent_div_1_i_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 18);
} }
var _c0 = function (a0) { return { "ant-notification-notice-with-icon": a0 }; };
function NzNotificationComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 6);
    ɵngcc0.ɵɵelementStart(1, "div", 7);
    ɵngcc0.ɵɵelementStart(2, "div");
    ɵngcc0.ɵɵelementContainerStart(3, 8);
    ɵngcc0.ɵɵtemplate(4, NzNotificationComponent_div_1_i_4_Template, 1, 0, "i", 9);
    ɵngcc0.ɵɵtemplate(5, NzNotificationComponent_div_1_i_5_Template, 1, 0, "i", 10);
    ɵngcc0.ɵɵtemplate(6, NzNotificationComponent_div_1_i_6_Template, 1, 0, "i", 11);
    ɵngcc0.ɵɵtemplate(7, NzNotificationComponent_div_1_i_7_Template, 1, 0, "i", 12);
    ɵngcc0.ɵɵelementContainerEnd();
    ɵngcc0.ɵɵelement(8, "div", 13);
    ɵngcc0.ɵɵelement(9, "div", 14);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(11, _c0, ctx_r0.nzMessage.type !== "blank"));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("ant-notification-notice-with-icon", ctx_r0.nzMessage.type !== "blank");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitch", ctx_r0.nzMessage.type);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", "success");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", "info");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", "warning");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", "error");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r0.nzMessage.title, ɵngcc0.ɵɵsanitizeHtml);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r0.nzMessage.content, ɵngcc0.ɵɵsanitizeHtml);
    ɵngcc0.ɵɵattribute("role", ctx_r0.nzMessage.options == null ? null : ctx_r0.nzMessage.options.nzRole);
} }
function NzNotificationComponent_ng_template_2_Template(rf, ctx) { }
var _c1 = function (a0, a1) { return { $implicit: a0, data: a1 }; };
var NzNotificationComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NzNotificationComponent, _super);
    function NzNotificationComponent(container, cdr) {
        var _this = _super.call(this, container, cdr) || this;
        _this.container = container;
        _this.cdr = cdr;
        return _this;
    }
    /**
     * @return {?}
     */
    NzNotificationComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this._destroy(true);
    };
    Object.defineProperty(NzNotificationComponent.prototype, "state", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.nzMessage.state === 'enter') {
                if (this.container.config.nzPlacement === 'topLeft' || this.container.config.nzPlacement === 'bottomLeft') {
                    return 'enterLeft';
                }
                else {
                    return 'enterRight';
                }
            }
            else {
                return this.nzMessage.state;
            }
        },
        enumerable: true,
        configurable: true
    });
    /** @nocollapse */
    NzNotificationComponent.ctorParameters = function () { return [
        { type: NzNotificationContainerComponent },
        { type: ChangeDetectorRef }
    ]; };
    NzNotificationComponent.propDecorators = {
        nzMessage: [{ type: Input }]
    };
NzNotificationComponent.ɵfac = function NzNotificationComponent_Factory(t) { return new (t || NzNotificationComponent)(ɵngcc0.ɵɵdirectiveInject(NzNotificationContainerComponent), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
NzNotificationComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzNotificationComponent, selectors: [["nz-notification"]], inputs: { nzMessage: "nzMessage" }, exportAs: ["nzNotification"], features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 6, vars: 10, consts: [[1, "ant-notification-notice", "ant-notification-notice-closable", 3, "ngStyle", "ngClass", "mouseenter", "mouseleave"], ["class", "ant-notification-notice-content", 4, "ngIf"], [3, "ngIf", "ngTemplateOutlet", "ngTemplateOutletContext"], ["tabindex", "0", 1, "ant-notification-notice-close", 3, "click"], [1, "ant-notification-notice-close-x"], ["nz-icon", "", "nzType", "close", 1, "ant-notification-close-icon"], [1, "ant-notification-notice-content"], [1, "ant-notification-notice-content", 3, "ngClass"], [3, "ngSwitch"], ["nz-icon", "", "nzType", "check-circle", "class", "ant-notification-notice-icon ant-notification-notice-icon-success", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "info-circle", "class", "ant-notification-notice-icon ant-notification-notice-icon-info", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "exclamation-circle", "class", "ant-notification-notice-icon ant-notification-notice-icon-warning", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "close-circle", "class", "ant-notification-notice-icon ant-notification-notice-icon-error", 4, "ngSwitchCase"], [1, "ant-notification-notice-message", 3, "innerHTML"], [1, "ant-notification-notice-description", 3, "innerHTML"], ["nz-icon", "", "nzType", "check-circle", 1, "ant-notification-notice-icon", "ant-notification-notice-icon-success"], ["nz-icon", "", "nzType", "info-circle", 1, "ant-notification-notice-icon", "ant-notification-notice-icon-info"], ["nz-icon", "", "nzType", "exclamation-circle", 1, "ant-notification-notice-icon", "ant-notification-notice-icon-warning"], ["nz-icon", "", "nzType", "close-circle", 1, "ant-notification-notice-icon", "ant-notification-notice-icon-error"]], template: function NzNotificationComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵlistener("mouseenter", function NzNotificationComponent_Template_div_mouseenter_0_listener() { return ctx.onEnter(); })("mouseleave", function NzNotificationComponent_Template_div_mouseleave_0_listener() { return ctx.onLeave(); });
        ɵngcc0.ɵɵtemplate(1, NzNotificationComponent_div_1_Template, 10, 13, "div", 1);
        ɵngcc0.ɵɵtemplate(2, NzNotificationComponent_ng_template_2_Template, 0, 0, "ng-template", 2);
        ɵngcc0.ɵɵelementStart(3, "a", 3);
        ɵngcc0.ɵɵlistener("click", function NzNotificationComponent_Template_a_click_3_listener() { return ctx.close(); });
        ɵngcc0.ɵɵelementStart(4, "span", 4);
        ɵngcc0.ɵɵelement(5, "i", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngStyle", ctx.nzMessage.options == null ? null : ctx.nzMessage.options.nzStyle)("ngClass", ctx.nzMessage.options == null ? null : ctx.nzMessage.options.nzClass)("@notificationMotion", ctx.state);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.nzMessage.template);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzMessage.template)("ngTemplateOutlet", ctx.nzMessage.template)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(7, _c1, ctx, ctx.nzMessage.options == null ? null : ctx.nzMessage.options.nzData));
    } }, directives: [ɵngcc1.NgStyle, ɵngcc1.NgClass, ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet, ɵngcc2.NzIconDirective, ɵngcc1.NgSwitch, ɵngcc1.NgSwitchCase], encapsulation: 2, data: { animation: [notificationMotion] } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzNotificationComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-notification',
                exportAs: 'nzNotification',
                preserveWhitespaces: false,
                animations: [notificationMotion],
                template: "<div class=\"ant-notification-notice ant-notification-notice-closable\"\r\n  [ngStyle]=\"nzMessage.options?.nzStyle\"\r\n  [ngClass]=\"nzMessage.options?.nzClass\"\r\n  [@notificationMotion]=\"state\"\r\n  (mouseenter)=\"onEnter()\"\r\n  (mouseleave)=\"onLeave()\">\r\n  <div *ngIf=\"!nzMessage.template\" class=\"ant-notification-notice-content\">\r\n    <div class=\"ant-notification-notice-content\" [ngClass]=\"{ 'ant-notification-notice-with-icon': nzMessage.type !== 'blank' }\">\r\n      <div [class.ant-notification-notice-with-icon]=\"nzMessage.type !== 'blank'\">\r\n        <ng-container [ngSwitch]=\"nzMessage.type\">\r\n          <i *ngSwitchCase=\"'success'\" nz-icon nzType=\"check-circle\" class=\"ant-notification-notice-icon ant-notification-notice-icon-success\"></i>\r\n          <i *ngSwitchCase=\"'info'\" nz-icon nzType=\"info-circle\" class=\"ant-notification-notice-icon ant-notification-notice-icon-info\"></i>\r\n          <i *ngSwitchCase=\"'warning'\" nz-icon nzType=\"exclamation-circle\" class=\"ant-notification-notice-icon ant-notification-notice-icon-warning\"></i>\r\n          <i *ngSwitchCase=\"'error'\" nz-icon nzType=\"close-circle\" class=\"ant-notification-notice-icon ant-notification-notice-icon-error\"></i>\r\n        </ng-container>\r\n        <div class=\"ant-notification-notice-message\" [innerHTML]=\"nzMessage.title\"></div>\r\n        <div class=\"ant-notification-notice-description\" [attr.role]=\"nzMessage.options?.nzRole\" [innerHTML]=\"nzMessage.content\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ng-template\r\n    [ngIf]=\"nzMessage.template\"\r\n    [ngTemplateOutlet]=\"nzMessage.template\"\r\n    [ngTemplateOutletContext]=\"{ $implicit: this, data: nzMessage.options?.nzData }\">\r\n  </ng-template>\r\n  <a tabindex=\"0\" class=\"ant-notification-notice-close\" (click)=\"close()\">\r\n    <span class=\"ant-notification-notice-close-x\">\r\n      <i nz-icon nzType=\"close\" class=\"ant-notification-close-icon\"></i>\r\n    </span>\r\n  </a>\r\n</div>\r\n"
            }]
    }], function () { return [{ type: NzNotificationContainerComponent }, { type: ɵngcc0.ChangeDetectorRef }]; }, { nzMessage: [{
            type: Input
        }] }); })();
    return NzNotificationComponent;
}(NzMessageComponent));
export { NzNotificationComponent };
if (false) {
    /** @type {?} */
    NzNotificationComponent.prototype.nzMessage;
    /**
     * @type {?}
     * @private
     */
    NzNotificationComponent.prototype.container;
    /**
     * @type {?}
     * @protected
     */
    NzNotificationComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbm90aWZpY2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsibmc6L25nLXpvcnJvLWFudGQvbm90aWZpY2F0aW9uL256LW5vdGlmaWNhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDeEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFM0QsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sdUNBQXVDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUd6RjtJQVE2QyxtREFBa0I7SUFHN0QsaUNBQW9CLFNBQTJDLEVBQVksR0FBc0I7UUFBakcsWUFDRSxrQkFBTSxTQUFTLEVBQUUsR0FBRyxDQUFDLFNBQ3RCO1FBRm1CLGVBQVMsR0FBVCxTQUFTLENBQWtDO1FBQVksU0FBRyxHQUFILEdBQUcsQ0FBbUI7O0lBRWpHLENBQUM7Ozs7SUFFRCx1Q0FBSzs7O0lBQUw7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxzQkFBSSwwQ0FBSzs7OztRQUFUO1lBQ0UsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssS0FBSyxPQUFPLEVBQUU7Z0JBQ3BDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEtBQUssWUFBWSxFQUFFO29CQUN6RyxPQUFPLFdBQVcsQ0FBQztpQkFDcEI7cUJBQU07b0JBQ0wsT0FBTyxZQUFZLENBQUM7aUJBQ3JCO2FBQ0Y7aUJBQU07Z0JBQ0wsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQzthQUM3QjtRQUNILENBQUM7OztPQUFBLEFBckJLOztvQ0FSUCxTQUFTLFNBQUM7UUFDVCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSSw3QkFKOUIsZ0NBQWdDO2VBS3ZDLFFBQVEsRUFBRSxUQVZILGlCQUFpQjtNQVVHO2tCQUMzQixRQUFRLEVBQUUsZ0JBQWdCO21CQUMxQixTQUtDLEtBQUs7Q0FMYSxFQUFFO0NBQUssc0JBQzFCLFVBQVUsRUFBRSxDQUFDLGtCQUFrQixDQUFDLHNCQUNoQzttMkRBQStDLGtCQUNoRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFFaUI7SUFxQmxCLDhCQUFDO0NBQUEsQUE5QkQsQ0FRNkMsa0JBQWtCLEdBc0I5RDtTQXRCWSx1QkFBdUI7OztJQUNsQyw0Q0FBNkM7Ozs7O0lBRWpDLDRDQUFtRDs7Ozs7SUFBRSxzQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgbm90aWZpY2F0aW9uTW90aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpNZXNzYWdlQ29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9tZXNzYWdlJztcclxuXHJcbmltcG9ydCB7IE56Tm90aWZpY2F0aW9uQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9uei1ub3RpZmljYXRpb24tY29udGFpbmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56Tm90aWZpY2F0aW9uRGF0YUZpbGxlZCB9IGZyb20gJy4vbnotbm90aWZpY2F0aW9uLmRlZmluaXRpb25zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc2VsZWN0b3I6ICduei1ub3RpZmljYXRpb24nLFxyXG4gIGV4cG9ydEFzOiAnbnpOb3RpZmljYXRpb24nLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGFuaW1hdGlvbnM6IFtub3RpZmljYXRpb25Nb3Rpb25dLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1ub3RpZmljYXRpb24uY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOek5vdGlmaWNhdGlvbkNvbXBvbmVudCBleHRlbmRzIE56TWVzc2FnZUNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgbnpNZXNzYWdlOiBOek5vdGlmaWNhdGlvbkRhdGFGaWxsZWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udGFpbmVyOiBOek5vdGlmaWNhdGlvbkNvbnRhaW5lckNvbXBvbmVudCwgcHJvdGVjdGVkIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgIHN1cGVyKGNvbnRhaW5lciwgY2RyKTtcclxuICB9XHJcblxyXG4gIGNsb3NlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fZGVzdHJveSh0cnVlKTtcclxuICB9XHJcblxyXG4gIGdldCBzdGF0ZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xyXG4gICAgaWYgKHRoaXMubnpNZXNzYWdlLnN0YXRlID09PSAnZW50ZXInKSB7XHJcbiAgICAgIGlmICh0aGlzLmNvbnRhaW5lci5jb25maWcubnpQbGFjZW1lbnQgPT09ICd0b3BMZWZ0JyB8fCB0aGlzLmNvbnRhaW5lci5jb25maWcubnpQbGFjZW1lbnQgPT09ICdib3R0b21MZWZ0Jykge1xyXG4gICAgICAgIHJldHVybiAnZW50ZXJMZWZ0JztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gJ2VudGVyUmlnaHQnO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy5uek1lc3NhZ2Uuc3RhdGU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==
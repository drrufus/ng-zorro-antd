import { __extends } from "tslib";
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
import * as i0 from "@angular/core";
import * as i1 from "./nz-notification-container.component";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/icon";
import * as i4 from "ng-zorro-antd/core";
function NzNotificationComponent_div_1_i_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 16);
} }
function NzNotificationComponent_div_1_i_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 17);
} }
function NzNotificationComponent_div_1_i_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 18);
} }
function NzNotificationComponent_div_1_i_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 19);
} }
var _c0 = function (a0) { return { "ant-notification-notice-with-icon": a0 }; };
function NzNotificationComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "div");
    i0.ɵɵelementContainerStart(3, 9);
    i0.ɵɵtemplate(4, NzNotificationComponent_div_1_i_4_Template, 1, 0, "i", 10);
    i0.ɵɵtemplate(5, NzNotificationComponent_div_1_i_5_Template, 1, 0, "i", 11);
    i0.ɵɵtemplate(6, NzNotificationComponent_div_1_i_6_Template, 1, 0, "i", 12);
    i0.ɵɵtemplate(7, NzNotificationComponent_div_1_i_7_Template, 1, 0, "i", 13);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelement(8, "div", 14);
    i0.ɵɵelement(9, "div", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1374 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(9, _c0, ctx_r1374.nzMessage.type !== "blank"));
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("ant-notification-notice-with-icon", ctx_r1374.nzMessage.type !== "blank");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitch", ctx_r1374.nzMessage.type);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "success");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "info");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "warning");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "error");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", ctx_r1374.nzMessage.title, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", ctx_r1374.nzMessage.content, i0.ɵɵsanitizeHtml);
} }
function NzNotificationComponent_ng_template_2_Template(rf, ctx) { }
function NzNotificationComponent_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "i", 21);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1383 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzType", ctx_r1383.nzMessage.options == null ? null : ctx_r1383.nzMessage.options.nzCloseIcon);
} }
function NzNotificationComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzNotificationComponent_ng_container_5_ng_container_1_Template, 2, 1, "ng-container", 20);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1376 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r1376.nzMessage.options == null ? null : ctx_r1376.nzMessage.options.nzCloseIcon);
} }
function NzNotificationComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 22);
} }
var _c1 = function (a0, a1) { return { $implicit: a0, data: a1 }; };
var NzNotificationComponent = /** @class */ (function (_super) {
    __extends(NzNotificationComponent, _super);
    function NzNotificationComponent(container, cdr) {
        var _this = _super.call(this, container, cdr) || this;
        _this.container = container;
        _this.cdr = cdr;
        return _this;
    }
    NzNotificationComponent.prototype.close = function () {
        this._destroy(true);
    };
    Object.defineProperty(NzNotificationComponent.prototype, "state", {
        get: function () {
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
    /** @nocollapse */ NzNotificationComponent.ɵfac = function NzNotificationComponent_Factory(t) { return new (t || NzNotificationComponent)(i0.ɵɵdirectiveInject(i1.NzNotificationContainerComponent), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ NzNotificationComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzNotificationComponent, selectors: [["nz-notification"]], inputs: { nzMessage: "nzMessage" }, exportAs: ["nzNotification"], features: [i0.ɵɵInheritDefinitionFeature], decls: 8, vars: 12, consts: [[1, "ant-notification-notice", "ant-notification-notice-closable", 3, "ngStyle", "ngClass", "mouseenter", "mouseleave"], ["class", "ant-notification-notice-content", 4, "ngIf"], [3, "ngIf", "ngTemplateOutlet", "ngTemplateOutletContext"], ["tabindex", "0", 1, "ant-notification-notice-close", 3, "click"], [1, "ant-notification-notice-close-x"], [4, "ngIf", "ngIfElse"], ["iconTpl", ""], [1, "ant-notification-notice-content"], [1, "ant-notification-notice-content", 3, "ngClass"], [3, "ngSwitch"], ["nz-icon", "", "nzType", "check-circle", "class", "ant-notification-notice-icon ant-notification-notice-icon-success", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "info-circle", "class", "ant-notification-notice-icon ant-notification-notice-icon-info", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "exclamation-circle", "class", "ant-notification-notice-icon ant-notification-notice-icon-warning", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "close-circle", "class", "ant-notification-notice-icon ant-notification-notice-icon-error", 4, "ngSwitchCase"], [1, "ant-notification-notice-message", 3, "innerHTML"], [1, "ant-notification-notice-description", 3, "innerHTML"], ["nz-icon", "", "nzType", "check-circle", 1, "ant-notification-notice-icon", "ant-notification-notice-icon-success"], ["nz-icon", "", "nzType", "info-circle", 1, "ant-notification-notice-icon", "ant-notification-notice-icon-info"], ["nz-icon", "", "nzType", "exclamation-circle", 1, "ant-notification-notice-icon", "ant-notification-notice-icon-warning"], ["nz-icon", "", "nzType", "close-circle", 1, "ant-notification-notice-icon", "ant-notification-notice-icon-error"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", 3, "nzType"], ["nz-icon", "", "nzType", "close", 1, "ant-notification-close-icon"]], template: function NzNotificationComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵlistener("mouseenter", function NzNotificationComponent_Template_div_mouseenter_0_listener($event) { return ctx.onEnter(); })("mouseleave", function NzNotificationComponent_Template_div_mouseleave_0_listener($event) { return ctx.onLeave(); });
            i0.ɵɵtemplate(1, NzNotificationComponent_div_1_Template, 10, 11, "div", 1);
            i0.ɵɵtemplate(2, NzNotificationComponent_ng_template_2_Template, 0, 0, "ng-template", 2);
            i0.ɵɵelementStart(3, "a", 3);
            i0.ɵɵlistener("click", function NzNotificationComponent_Template_a_click_3_listener($event) { return ctx.close(); });
            i0.ɵɵelementStart(4, "span", 4);
            i0.ɵɵtemplate(5, NzNotificationComponent_ng_container_5_Template, 2, 1, "ng-container", 5);
            i0.ɵɵtemplate(6, NzNotificationComponent_ng_template_6_Template, 1, 0, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r1377 = i0.ɵɵreference(7);
            i0.ɵɵproperty("ngStyle", ctx.nzMessage.options == null ? null : ctx.nzMessage.options.nzStyle)("ngClass", ctx.nzMessage.options == null ? null : ctx.nzMessage.options.nzClass)("@notificationMotion", ctx.state);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.nzMessage.template);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.nzMessage.template)("ngTemplateOutlet", ctx.nzMessage.template)("ngTemplateOutletContext", i0.ɵɵpureFunction2(9, _c1, ctx, ctx.nzMessage.options == null ? null : ctx.nzMessage.options.nzData));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.nzMessage.options == null ? null : ctx.nzMessage.options.nzCloseIcon)("ngIfElse", _r1377);
        } }, directives: [i2.NgStyle, i2.NgClass, i2.NgIf, i2.NgTemplateOutlet, i2.NgSwitch, i2.NgSwitchCase, i3.NzIconDirective, i4.NzStringTemplateOutletDirective], encapsulation: 2, data: { animation: [notificationMotion] } });
    return NzNotificationComponent;
}(NzMessageComponent));
export { NzNotificationComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzNotificationComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-notification',
                exportAs: 'nzNotification',
                preserveWhitespaces: false,
                animations: [notificationMotion],
                templateUrl: './nz-notification.component.html'
            }]
    }], function () { return [{ type: i1.NzNotificationContainerComponent }, { type: i0.ChangeDetectorRef }]; }, { nzMessage: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbm90aWZpY2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvbm90aWZpY2F0aW9uLyIsInNvdXJjZXMiOlsibnotbm90aWZpY2F0aW9uLmNvbXBvbmVudC50cyIsIm56LW5vdGlmaWNhdGlvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDeEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFM0QsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sdUNBQXVDLENBQUM7Ozs7Ozs7SUNFL0Usd0JBS0s7OztJQUNMLHdCQUtLOzs7SUFDTCx3QkFLSzs7O0lBQ0wsd0JBS0s7Ozs7SUE5QmIsOEJBQ0U7SUFBQSw4QkFJRTtJQUFBLDJCQUNFO0lBQUEsZ0NBQ0U7SUFBQSwyRUFLQztJQUNELDJFQUtDO0lBQ0QsMkVBS0M7SUFDRCwyRUFLQztJQUNILDBCQUFlO0lBQ2YsMEJBQWlGO0lBQ2pGLDBCQUF1RjtJQUN6RixpQkFBTTtJQUNSLGlCQUFNO0lBQ1IsaUJBQU07OztJQWpDRixlQUErRTtJQUEvRSwwRkFBK0U7SUFFMUUsZUFBc0U7SUFBdEUseUZBQXNFO0lBQzNELGVBQTJCO0lBQTNCLG1EQUEyQjtJQUVyQyxlQUF5QjtJQUF6Qix3Q0FBeUI7SUFNekIsZUFBc0I7SUFBdEIscUNBQXNCO0lBTXRCLGVBQXlCO0lBQXpCLHdDQUF5QjtJQU16QixlQUF1QjtJQUF2QixzQ0FBdUI7SUFNa0IsZUFBNkI7SUFBN0Isd0VBQTZCO0lBQ3pCLGVBQStCO0lBQS9CLDBFQUErQjs7OztJQWFoRiw2QkFDRTtJQUFBLHdCQUF5RDtJQUMzRCwwQkFBZTs7O0lBREYsZUFBeUM7SUFBekMsNkdBQXlDOzs7SUFGeEQsNkJBQ0U7SUFBQSwwR0FDRTtJQUVKLDBCQUFlOzs7SUFIQyxlQUF3RDtJQUF4RCw2SEFBd0Q7OztJQUt0RSx3QkFBa0U7OztBRDNDMUU7SUFRNkMsMkNBQWtCO0lBRzdELGlDQUFvQixTQUEyQyxFQUFZLEdBQXNCO1FBQWpHLFlBQ0Usa0JBQU0sU0FBUyxFQUFFLEdBQUcsQ0FBQyxTQUN0QjtRQUZtQixlQUFTLEdBQVQsU0FBUyxDQUFrQztRQUFZLFNBQUcsR0FBSCxHQUFHLENBQW1COztJQUVqRyxDQUFDO0lBRUQsdUNBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELHNCQUFJLDBDQUFLO2FBQVQ7WUFDRSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxLQUFLLE9BQU8sRUFBRTtnQkFDcEMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsS0FBSyxZQUFZLEVBQUU7b0JBQ3pHLE9BQU8sV0FBVyxDQUFDO2lCQUNwQjtxQkFBTTtvQkFDTCxPQUFPLFlBQVksQ0FBQztpQkFDckI7YUFDRjtpQkFBTTtnQkFDTCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO2FBQzdCO1FBQ0gsQ0FBQzs7O09BQUE7a0dBckJVLHVCQUF1QjtnRUFBdkIsdUJBQXVCO1lDeEJwQyw4QkFRRTtZQUhBLGlIQUFjLGFBQVMsSUFBQyxvR0FDVixhQUFTLElBREM7WUFHeEIsMEVBQ0U7WUFvQ0Ysd0ZBS0E7WUFDQSw0QkFDRTtZQURvRCxxR0FBUyxXQUFPLElBQUM7WUFDckUsK0JBQ0U7WUFBQSwwRkFDRTtZQUlGLHlIQUNFO1lBRUosaUJBQU87WUFDVCxpQkFBSTtZQUNOLGlCQUFNOzs7WUE3REosOEZBQXNDLGlGQUFBLGtDQUFBO1lBTWpDLGVBQTJCO1lBQTNCLDhDQUEyQjtZQXNDOUIsZUFBMkI7WUFBM0IsNkNBQTJCLDRDQUFBLGlJQUFBO1lBT1gsZUFBbUQ7WUFBbkQsK0ZBQW1ELG9CQUFBOzRNRGhDekQsQ0FBQyxrQkFBa0IsQ0FBQztrQ0FyQmxDO0NBOENDLEFBOUJELENBUTZDLGtCQUFrQixHQXNCOUQ7U0F0QlksdUJBQXVCO2tEQUF2Qix1QkFBdUI7Y0FSbkMsU0FBUztlQUFDO2dCQUNULGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixVQUFVLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztnQkFDaEMsV0FBVyxFQUFFLGtDQUFrQzthQUNoRDs7a0JBRUUsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBub3RpZmljYXRpb25Nb3Rpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOek1lc3NhZ2VDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL21lc3NhZ2UnO1xyXG5cclxuaW1wb3J0IHsgTnpOb3RpZmljYXRpb25Db250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL256LW5vdGlmaWNhdGlvbi1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpOb3RpZmljYXRpb25EYXRhRmlsbGVkIH0gZnJvbSAnLi9uei1ub3RpZmljYXRpb24uZGVmaW5pdGlvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzZWxlY3RvcjogJ256LW5vdGlmaWNhdGlvbicsXHJcbiAgZXhwb3J0QXM6ICduek5vdGlmaWNhdGlvbicsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgYW5pbWF0aW9uczogW25vdGlmaWNhdGlvbk1vdGlvbl0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LW5vdGlmaWNhdGlvbi5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE56Tm90aWZpY2F0aW9uQ29tcG9uZW50IGV4dGVuZHMgTnpNZXNzYWdlQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBuek1lc3NhZ2U6IE56Tm90aWZpY2F0aW9uRGF0YUZpbGxlZDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb250YWluZXI6IE56Tm90aWZpY2F0aW9uQ29udGFpbmVyQ29tcG9uZW50LCBwcm90ZWN0ZWQgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgc3VwZXIoY29udGFpbmVyLCBjZHIpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9kZXN0cm95KHRydWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHN0YXRlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XHJcbiAgICBpZiAodGhpcy5uek1lc3NhZ2Uuc3RhdGUgPT09ICdlbnRlcicpIHtcclxuICAgICAgaWYgKHRoaXMuY29udGFpbmVyLmNvbmZpZy5uelBsYWNlbWVudCA9PT0gJ3RvcExlZnQnIHx8IHRoaXMuY29udGFpbmVyLmNvbmZpZy5uelBsYWNlbWVudCA9PT0gJ2JvdHRvbUxlZnQnKSB7XHJcbiAgICAgICAgcmV0dXJuICdlbnRlckxlZnQnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAnZW50ZXJSaWdodCc7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm56TWVzc2FnZS5zdGF0ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPGRpdlxyXG4gIGNsYXNzPVwiYW50LW5vdGlmaWNhdGlvbi1ub3RpY2UgYW50LW5vdGlmaWNhdGlvbi1ub3RpY2UtY2xvc2FibGVcIlxyXG4gIFtuZ1N0eWxlXT1cIm56TWVzc2FnZS5vcHRpb25zPy5uelN0eWxlXCJcclxuICBbbmdDbGFzc109XCJuek1lc3NhZ2Uub3B0aW9ucz8ubnpDbGFzc1wiXHJcbiAgW0Bub3RpZmljYXRpb25Nb3Rpb25dPVwic3RhdGVcIlxyXG4gIChtb3VzZWVudGVyKT1cIm9uRW50ZXIoKVwiXHJcbiAgKG1vdXNlbGVhdmUpPVwib25MZWF2ZSgpXCJcclxuPlxyXG4gIDxkaXYgKm5nSWY9XCIhbnpNZXNzYWdlLnRlbXBsYXRlXCIgY2xhc3M9XCJhbnQtbm90aWZpY2F0aW9uLW5vdGljZS1jb250ZW50XCI+XHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzPVwiYW50LW5vdGlmaWNhdGlvbi1ub3RpY2UtY29udGVudFwiXHJcbiAgICAgIFtuZ0NsYXNzXT1cInsgJ2FudC1ub3RpZmljYXRpb24tbm90aWNlLXdpdGgtaWNvbic6IG56TWVzc2FnZS50eXBlICE9PSAnYmxhbmsnIH1cIlxyXG4gICAgPlxyXG4gICAgICA8ZGl2IFtjbGFzcy5hbnQtbm90aWZpY2F0aW9uLW5vdGljZS13aXRoLWljb25dPVwibnpNZXNzYWdlLnR5cGUgIT09ICdibGFuaydcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJuek1lc3NhZ2UudHlwZVwiPlxyXG4gICAgICAgICAgPGlcclxuICAgICAgICAgICAgKm5nU3dpdGNoQ2FzZT1cIidzdWNjZXNzJ1wiXHJcbiAgICAgICAgICAgIG56LWljb25cclxuICAgICAgICAgICAgbnpUeXBlPVwiY2hlY2stY2lyY2xlXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJhbnQtbm90aWZpY2F0aW9uLW5vdGljZS1pY29uIGFudC1ub3RpZmljYXRpb24tbm90aWNlLWljb24tc3VjY2Vzc1wiXHJcbiAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgPGlcclxuICAgICAgICAgICAgKm5nU3dpdGNoQ2FzZT1cIidpbmZvJ1wiXHJcbiAgICAgICAgICAgIG56LWljb25cclxuICAgICAgICAgICAgbnpUeXBlPVwiaW5mby1jaXJjbGVcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImFudC1ub3RpZmljYXRpb24tbm90aWNlLWljb24gYW50LW5vdGlmaWNhdGlvbi1ub3RpY2UtaWNvbi1pbmZvXCJcclxuICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAqbmdTd2l0Y2hDYXNlPVwiJ3dhcm5pbmcnXCJcclxuICAgICAgICAgICAgbnotaWNvblxyXG4gICAgICAgICAgICBuelR5cGU9XCJleGNsYW1hdGlvbi1jaXJjbGVcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImFudC1ub3RpZmljYXRpb24tbm90aWNlLWljb24gYW50LW5vdGlmaWNhdGlvbi1ub3RpY2UtaWNvbi13YXJuaW5nXCJcclxuICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAqbmdTd2l0Y2hDYXNlPVwiJ2Vycm9yJ1wiXHJcbiAgICAgICAgICAgIG56LWljb25cclxuICAgICAgICAgICAgbnpUeXBlPVwiY2xvc2UtY2lyY2xlXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJhbnQtbm90aWZpY2F0aW9uLW5vdGljZS1pY29uIGFudC1ub3RpZmljYXRpb24tbm90aWNlLWljb24tZXJyb3JcIlxyXG4gICAgICAgICAgPjwvaT5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LW5vdGlmaWNhdGlvbi1ub3RpY2UtbWVzc2FnZVwiIFtpbm5lckhUTUxdPVwibnpNZXNzYWdlLnRpdGxlXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImFudC1ub3RpZmljYXRpb24tbm90aWNlLWRlc2NyaXB0aW9uXCIgW2lubmVySFRNTF09XCJuek1lc3NhZ2UuY29udGVudFwiPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxuZy10ZW1wbGF0ZVxyXG4gICAgW25nSWZdPVwibnpNZXNzYWdlLnRlbXBsYXRlXCJcclxuICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIm56TWVzc2FnZS50ZW1wbGF0ZVwiXHJcbiAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IHRoaXMsIGRhdGE6IG56TWVzc2FnZS5vcHRpb25zPy5uekRhdGEgfVwiXHJcbiAgPlxyXG4gIDwvbmctdGVtcGxhdGU+XHJcbiAgPGEgdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJhbnQtbm90aWZpY2F0aW9uLW5vdGljZS1jbG9zZVwiIChjbGljayk9XCJjbG9zZSgpXCI+XHJcbiAgICA8c3BhbiBjbGFzcz1cImFudC1ub3RpZmljYXRpb24tbm90aWNlLWNsb3NlLXhcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm56TWVzc2FnZS5vcHRpb25zPy5uekNsb3NlSWNvbiBlbHNlIGljb25UcGxcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpNZXNzYWdlLm9wdGlvbnM/Lm56Q2xvc2VJY29uXCI+XHJcbiAgICAgICAgICA8aSBuei1pY29uIFtuelR5cGVdPVwibnpNZXNzYWdlLm9wdGlvbnM/Lm56Q2xvc2VJY29uXCI+PC9pPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPG5nLXRlbXBsYXRlICNpY29uVHBsPlxyXG4gICAgICAgIDxpIG56LWljb24gbnpUeXBlPVwiY2xvc2VcIiBjbGFzcz1cImFudC1ub3RpZmljYXRpb24tY2xvc2UtaWNvblwiPjwvaT5cclxuICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgIDwvc3Bhbj5cclxuICA8L2E+XHJcbjwvZGl2PlxyXG4iXX0=
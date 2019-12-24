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
const _c0 = function (a0) { return { "ant-notification-notice-with-icon": a0 }; };
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
    const ctx_r1361 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(9, _c0, ctx_r1361.nzMessage.type !== "blank"));
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("ant-notification-notice-with-icon", ctx_r1361.nzMessage.type !== "blank");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitch", ctx_r1361.nzMessage.type);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "success");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "info");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "warning");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "error");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", ctx_r1361.nzMessage.title, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", ctx_r1361.nzMessage.content, i0.ɵɵsanitizeHtml);
} }
function NzNotificationComponent_ng_template_2_Template(rf, ctx) { }
function NzNotificationComponent_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "i", 21);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1370 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzType", ctx_r1370.nzMessage.options == null ? null : ctx_r1370.nzMessage.options.nzCloseIcon);
} }
function NzNotificationComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzNotificationComponent_ng_container_5_ng_container_1_Template, 2, 1, "ng-container", 20);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1363 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r1363.nzMessage.options == null ? null : ctx_r1363.nzMessage.options.nzCloseIcon);
} }
function NzNotificationComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 22);
} }
const _c1 = function (a0, a1) { return { $implicit: a0, data: a1 }; };
export class NzNotificationComponent extends NzMessageComponent {
    constructor(container, cdr) {
        super(container, cdr);
        this.container = container;
        this.cdr = cdr;
    }
    close() {
        this._destroy(true);
    }
    get state() {
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
    }
}
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
        const _r1364 = i0.ɵɵreference(7);
        i0.ɵɵproperty("ngStyle", ctx.nzMessage.options == null ? null : ctx.nzMessage.options.nzStyle)("ngClass", ctx.nzMessage.options == null ? null : ctx.nzMessage.options.nzClass)("@notificationMotion", ctx.state);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.nzMessage.template);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.nzMessage.template)("ngTemplateOutlet", ctx.nzMessage.template)("ngTemplateOutletContext", i0.ɵɵpureFunction2(9, _c1, ctx, ctx.nzMessage.options == null ? null : ctx.nzMessage.options.nzData));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.nzMessage.options == null ? null : ctx.nzMessage.options.nzCloseIcon)("ngIfElse", _r1364);
    } }, directives: [i2.NgStyle, i2.NgClass, i2.NgIf, i2.NgTemplateOutlet, i2.NgSwitch, i2.NgSwitchCase, i3.NzIconDirective, i4.NzStringTemplateOutletDirective], encapsulation: 2, data: { animation: [notificationMotion] } });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbm90aWZpY2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvbm90aWZpY2F0aW9uLyIsInNvdXJjZXMiOlsibnotbm90aWZpY2F0aW9uLmNvbXBvbmVudC50cyIsIm56LW5vdGlmaWNhdGlvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUUzRCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7Ozs7OztJQ0UvRSx3QkFLSzs7O0lBQ0wsd0JBS0s7OztJQUNMLHdCQUtLOzs7SUFDTCx3QkFLSzs7OztJQTlCYiw4QkFDRTtJQUFBLDhCQUlFO0lBQUEsMkJBQ0U7SUFBQSxnQ0FDRTtJQUFBLDJFQUtDO0lBQ0QsMkVBS0M7SUFDRCwyRUFLQztJQUNELDJFQUtDO0lBQ0gsMEJBQWU7SUFDZiwwQkFBaUY7SUFDakYsMEJBQXVGO0lBQ3pGLGlCQUFNO0lBQ1IsaUJBQU07SUFDUixpQkFBTTs7O0lBakNGLGVBQStFO0lBQS9FLDBGQUErRTtJQUUxRSxlQUFzRTtJQUF0RSx5RkFBc0U7SUFDM0QsZUFBMkI7SUFBM0IsbURBQTJCO0lBRXJDLGVBQXlCO0lBQXpCLHdDQUF5QjtJQU16QixlQUFzQjtJQUF0QixxQ0FBc0I7SUFNdEIsZUFBeUI7SUFBekIsd0NBQXlCO0lBTXpCLGVBQXVCO0lBQXZCLHNDQUF1QjtJQU1rQixlQUE2QjtJQUE3Qix3RUFBNkI7SUFDekIsZUFBK0I7SUFBL0IsMEVBQStCOzs7O0lBYWhGLDZCQUNFO0lBQUEsd0JBQXlEO0lBQzNELDBCQUFlOzs7SUFERixlQUF5QztJQUF6Qyw2R0FBeUM7OztJQUZ4RCw2QkFDRTtJQUFBLDBHQUNFO0lBRUosMEJBQWU7OztJQUhDLGVBQXdEO0lBQXhELDZIQUF3RDs7O0lBS3RFLHdCQUFrRTs7O0FEbkMxRSxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsa0JBQWtCO0lBRzdELFlBQW9CLFNBQTJDLEVBQVksR0FBc0I7UUFDL0YsS0FBSyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQURKLGNBQVMsR0FBVCxTQUFTLENBQWtDO1FBQVksUUFBRyxHQUFILEdBQUcsQ0FBbUI7SUFFakcsQ0FBQztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDUCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxLQUFLLE9BQU8sRUFBRTtZQUNwQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxLQUFLLFlBQVksRUFBRTtnQkFDekcsT0FBTyxXQUFXLENBQUM7YUFDcEI7aUJBQU07Z0JBQ0wsT0FBTyxZQUFZLENBQUM7YUFDckI7U0FDRjthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztTQUM3QjtJQUNILENBQUM7OzhGQXJCVSx1QkFBdUI7NERBQXZCLHVCQUF1QjtRQ3hCcEMsOEJBUUU7UUFIQSxpSEFBYyxhQUFTLElBQUMsb0dBQ1YsYUFBUyxJQURDO1FBR3hCLDBFQUNFO1FBb0NGLHdGQUtBO1FBQ0EsNEJBQ0U7UUFEb0QscUdBQVMsV0FBTyxJQUFDO1FBQ3JFLCtCQUNFO1FBQUEsMEZBQ0U7UUFJRix5SEFDRTtRQUVKLGlCQUFPO1FBQ1QsaUJBQUk7UUFDTixpQkFBTTs7O1FBN0RKLDhGQUFzQyxpRkFBQSxrQ0FBQTtRQU1qQyxlQUEyQjtRQUEzQiw4Q0FBMkI7UUFzQzlCLGVBQTJCO1FBQTNCLDZDQUEyQiw0Q0FBQSxpSUFBQTtRQU9YLGVBQW1EO1FBQW5ELCtGQUFtRCxvQkFBQTt3TURoQ3pELENBQUMsa0JBQWtCLENBQUM7a0RBR3JCLHVCQUF1QjtjQVJuQyxTQUFTO2VBQUM7Z0JBQ1QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLFVBQVUsRUFBRSxDQUFDLGtCQUFrQixDQUFDO2dCQUNoQyxXQUFXLEVBQUUsa0NBQWtDO2FBQ2hEOztrQkFFRSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IG5vdGlmaWNhdGlvbk1vdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56TWVzc2FnZUNvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvbWVzc2FnZSc7XHJcblxyXG5pbXBvcnQgeyBOek5vdGlmaWNhdGlvbkNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vbnotbm90aWZpY2F0aW9uLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOek5vdGlmaWNhdGlvbkRhdGFGaWxsZWQgfSBmcm9tICcuL256LW5vdGlmaWNhdGlvbi5kZWZpbml0aW9ucyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHNlbGVjdG9yOiAnbnotbm90aWZpY2F0aW9uJyxcclxuICBleHBvcnRBczogJ256Tm90aWZpY2F0aW9uJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBhbmltYXRpb25zOiBbbm90aWZpY2F0aW9uTW90aW9uXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotbm90aWZpY2F0aW9uLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpOb3RpZmljYXRpb25Db21wb25lbnQgZXh0ZW5kcyBOek1lc3NhZ2VDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIG56TWVzc2FnZTogTnpOb3RpZmljYXRpb25EYXRhRmlsbGVkO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnRhaW5lcjogTnpOb3RpZmljYXRpb25Db250YWluZXJDb21wb25lbnQsIHByb3RlY3RlZCBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICBzdXBlcihjb250YWluZXIsIGNkcik7XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2Rlc3Ryb3kodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgc3RhdGUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcclxuICAgIGlmICh0aGlzLm56TWVzc2FnZS5zdGF0ZSA9PT0gJ2VudGVyJykge1xyXG4gICAgICBpZiAodGhpcy5jb250YWluZXIuY29uZmlnLm56UGxhY2VtZW50ID09PSAndG9wTGVmdCcgfHwgdGhpcy5jb250YWluZXIuY29uZmlnLm56UGxhY2VtZW50ID09PSAnYm90dG9tTGVmdCcpIHtcclxuICAgICAgICByZXR1cm4gJ2VudGVyTGVmdCc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuICdlbnRlclJpZ2h0JztcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMubnpNZXNzYWdlLnN0YXRlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8ZGl2XHJcbiAgY2xhc3M9XCJhbnQtbm90aWZpY2F0aW9uLW5vdGljZSBhbnQtbm90aWZpY2F0aW9uLW5vdGljZS1jbG9zYWJsZVwiXHJcbiAgW25nU3R5bGVdPVwibnpNZXNzYWdlLm9wdGlvbnM/Lm56U3R5bGVcIlxyXG4gIFtuZ0NsYXNzXT1cIm56TWVzc2FnZS5vcHRpb25zPy5uekNsYXNzXCJcclxuICBbQG5vdGlmaWNhdGlvbk1vdGlvbl09XCJzdGF0ZVwiXHJcbiAgKG1vdXNlZW50ZXIpPVwib25FbnRlcigpXCJcclxuICAobW91c2VsZWF2ZSk9XCJvbkxlYXZlKClcIlxyXG4+XHJcbiAgPGRpdiAqbmdJZj1cIiFuek1lc3NhZ2UudGVtcGxhdGVcIiBjbGFzcz1cImFudC1ub3RpZmljYXRpb24tbm90aWNlLWNvbnRlbnRcIj5cclxuICAgIDxkaXZcclxuICAgICAgY2xhc3M9XCJhbnQtbm90aWZpY2F0aW9uLW5vdGljZS1jb250ZW50XCJcclxuICAgICAgW25nQ2xhc3NdPVwieyAnYW50LW5vdGlmaWNhdGlvbi1ub3RpY2Utd2l0aC1pY29uJzogbnpNZXNzYWdlLnR5cGUgIT09ICdibGFuaycgfVwiXHJcbiAgICA+XHJcbiAgICAgIDxkaXYgW2NsYXNzLmFudC1ub3RpZmljYXRpb24tbm90aWNlLXdpdGgtaWNvbl09XCJuek1lc3NhZ2UudHlwZSAhPT0gJ2JsYW5rJ1wiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cIm56TWVzc2FnZS50eXBlXCI+XHJcbiAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAqbmdTd2l0Y2hDYXNlPVwiJ3N1Y2Nlc3MnXCJcclxuICAgICAgICAgICAgbnotaWNvblxyXG4gICAgICAgICAgICBuelR5cGU9XCJjaGVjay1jaXJjbGVcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImFudC1ub3RpZmljYXRpb24tbm90aWNlLWljb24gYW50LW5vdGlmaWNhdGlvbi1ub3RpY2UtaWNvbi1zdWNjZXNzXCJcclxuICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAqbmdTd2l0Y2hDYXNlPVwiJ2luZm8nXCJcclxuICAgICAgICAgICAgbnotaWNvblxyXG4gICAgICAgICAgICBuelR5cGU9XCJpbmZvLWNpcmNsZVwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwiYW50LW5vdGlmaWNhdGlvbi1ub3RpY2UtaWNvbiBhbnQtbm90aWZpY2F0aW9uLW5vdGljZS1pY29uLWluZm9cIlxyXG4gICAgICAgICAgPjwvaT5cclxuICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICpuZ1N3aXRjaENhc2U9XCInd2FybmluZydcIlxyXG4gICAgICAgICAgICBuei1pY29uXHJcbiAgICAgICAgICAgIG56VHlwZT1cImV4Y2xhbWF0aW9uLWNpcmNsZVwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwiYW50LW5vdGlmaWNhdGlvbi1ub3RpY2UtaWNvbiBhbnQtbm90aWZpY2F0aW9uLW5vdGljZS1pY29uLXdhcm5pbmdcIlxyXG4gICAgICAgICAgPjwvaT5cclxuICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICpuZ1N3aXRjaENhc2U9XCInZXJyb3InXCJcclxuICAgICAgICAgICAgbnotaWNvblxyXG4gICAgICAgICAgICBuelR5cGU9XCJjbG9zZS1jaXJjbGVcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImFudC1ub3RpZmljYXRpb24tbm90aWNlLWljb24gYW50LW5vdGlmaWNhdGlvbi1ub3RpY2UtaWNvbi1lcnJvclwiXHJcbiAgICAgICAgICA+PC9pPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtbm90aWZpY2F0aW9uLW5vdGljZS1tZXNzYWdlXCIgW2lubmVySFRNTF09XCJuek1lc3NhZ2UudGl0bGVcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LW5vdGlmaWNhdGlvbi1ub3RpY2UtZGVzY3JpcHRpb25cIiBbaW5uZXJIVE1MXT1cIm56TWVzc2FnZS5jb250ZW50XCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPG5nLXRlbXBsYXRlXHJcbiAgICBbbmdJZl09XCJuek1lc3NhZ2UudGVtcGxhdGVcIlxyXG4gICAgW25nVGVtcGxhdGVPdXRsZXRdPVwibnpNZXNzYWdlLnRlbXBsYXRlXCJcclxuICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogdGhpcywgZGF0YTogbnpNZXNzYWdlLm9wdGlvbnM/Lm56RGF0YSB9XCJcclxuICA+XHJcbiAgPC9uZy10ZW1wbGF0ZT5cclxuICA8YSB0YWJpbmRleD1cIjBcIiBjbGFzcz1cImFudC1ub3RpZmljYXRpb24tbm90aWNlLWNsb3NlXCIgKGNsaWNrKT1cImNsb3NlKClcIj5cclxuICAgIDxzcGFuIGNsYXNzPVwiYW50LW5vdGlmaWNhdGlvbi1ub3RpY2UtY2xvc2UteFwiPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibnpNZXNzYWdlLm9wdGlvbnM/Lm56Q2xvc2VJY29uIGVsc2UgaWNvblRwbFwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJuek1lc3NhZ2Uub3B0aW9ucz8ubnpDbG9zZUljb25cIj5cclxuICAgICAgICAgIDxpIG56LWljb24gW256VHlwZV09XCJuek1lc3NhZ2Uub3B0aW9ucz8ubnpDbG9zZUljb25cIj48L2k+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctdGVtcGxhdGUgI2ljb25UcGw+XHJcbiAgICAgICAgPGkgbnotaWNvbiBuelR5cGU9XCJjbG9zZVwiIGNsYXNzPVwiYW50LW5vdGlmaWNhdGlvbi1jbG9zZS1pY29uXCI+PC9pPlxyXG4gICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgPC9zcGFuPlxyXG4gIDwvYT5cclxuPC9kaXY+XHJcbiJdfQ==
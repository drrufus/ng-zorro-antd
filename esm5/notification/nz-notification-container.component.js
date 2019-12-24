import { __assign, __extends } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Optional, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { NzConfigService, toCssPixel, warnDeprecation } from 'ng-zorro-antd/core';
import { NzMessageContainerComponent } from 'ng-zorro-antd/message';
import { NZ_NOTIFICATION_CONFIG, NZ_NOTIFICATION_DEFAULT_CONFIG } from './nz-notification-config';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
function NzNotificationContainerComponent_nz_notification_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nz-notification", 1);
} if (rf & 2) {
    var message_r1372 = ctx.$implicit;
    var i_r1373 = ctx.index;
    i0.ɵɵproperty("nzMessage", message_r1372)("nzIndex", i_r1373);
} }
var NZ_CONFIG_COMPONENT_NAME = 'notification';
var NzNotificationContainerComponent = /** @class */ (function (_super) {
    __extends(NzNotificationContainerComponent, _super);
    function NzNotificationContainerComponent(cdr, nzConfigService, defaultConfig, config) {
        var _this = _super.call(this, cdr, nzConfigService, defaultConfig, config) || this;
        /**
         * @override
         */
        _this.messages = [];
        if (!!config) {
            warnDeprecation("Injection token 'NZ_NOTIFICATION_CONFIG' is deprecated and will be removed in 9.0.0. Please use 'NzConfigService' instead.");
        }
        return _this;
    }
    /**
     * @override
     */
    NzNotificationContainerComponent.prototype.setConfig = function (config) {
        var newConfig = (this.config = __assign(__assign(__assign({}, this.config), config), this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME)));
        var placement = this.config.nzPlacement;
        this.top = placement === 'topLeft' || placement === 'topRight' ? toCssPixel(newConfig.nzTop) : null;
        this.bottom = placement === 'bottomLeft' || placement === 'bottomRight' ? toCssPixel(newConfig.nzBottom) : null;
        this.cdr.markForCheck();
    };
    /**
     * Create a new notification.
     * If there's a notification whose `nzKey` is same with `nzKey` in `NzNotificationDataFilled`,
     * replace its content instead of create a new one.
     * @override
     * @param notification
     */
    NzNotificationContainerComponent.prototype.createMessage = function (notification) {
        notification.options = this._mergeMessageOptions(notification.options);
        notification.onClose = new Subject();
        var key = notification.options.nzKey;
        var notificationWithSameKey = this.messages.find(function (msg) { return msg.options.nzKey === notification.options.nzKey; });
        if (key && notificationWithSameKey) {
            this.replaceNotification(notificationWithSameKey, notification);
        }
        else {
            if (this.messages.length >= this.config.nzMaxStack) {
                this.messages.splice(0, 1);
            }
            this.messages.push(notification);
        }
        this.cdr.detectChanges();
    };
    /**
     * @override
     */
    NzNotificationContainerComponent.prototype.subscribeConfigChange = function () {
        var _this = this;
        this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME).subscribe(function () { return _this.setConfig(); });
    };
    NzNotificationContainerComponent.prototype.replaceNotification = function (old, _new) {
        old.title = _new.title;
        old.content = _new.content;
        old.template = _new.template;
        old.type = _new.type;
    };
    /** @nocollapse */ NzNotificationContainerComponent.ɵfac = function NzNotificationContainerComponent_Factory(t) { return new (t || NzNotificationContainerComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.NzConfigService), i0.ɵɵdirectiveInject(NZ_NOTIFICATION_DEFAULT_CONFIG, 8), i0.ɵɵdirectiveInject(NZ_NOTIFICATION_CONFIG, 8)); };
    /** @nocollapse */ NzNotificationContainerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzNotificationContainerComponent, selectors: [["nz-notification-container"]], exportAs: ["nzNotificationContainer"], features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 8, consts: [[3, "nzMessage", "nzIndex", 4, "ngFor", "ngForOf"], [3, "nzMessage", "nzIndex"]], template: function NzNotificationContainerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵtemplate(1, NzNotificationContainerComponent_nz_notification_1_Template, 1, 2, "nz-notification", 0);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassMapInterpolate1("ant-notification ant-notification-", ctx.config.nzPlacement, "");
            i0.ɵɵstyleProp("top", ctx.config.nzPlacement === "topLeft" || ctx.config.nzPlacement === "topRight" ? ctx.top : null)("bottom", ctx.config.nzPlacement === "bottomLeft" || ctx.config.nzPlacement === "bottomRight" ? ctx.bottom : null)("right", ctx.config.nzPlacement === "bottomRight" || ctx.config.nzPlacement === "topRight" ? "0px" : null)("left", ctx.config.nzPlacement === "topLeft" || ctx.config.nzPlacement === "bottomLeft" ? "0px" : null);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.messages);
        } }, encapsulation: 2, changeDetection: 0 });
    return NzNotificationContainerComponent;
}(NzMessageContainerComponent));
export { NzNotificationContainerComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzNotificationContainerComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-notification-container',
                exportAs: 'nzNotificationContainer',
                preserveWhitespaces: false,
                templateUrl: './nz-notification-container.component.html'
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.NzConfigService }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [NZ_NOTIFICATION_DEFAULT_CONFIG]
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [NZ_NOTIFICATION_CONFIG]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbm90aWZpY2F0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL25vdGlmaWNhdGlvbi8iLCJzb3VyY2VzIjpbIm56LW5vdGlmaWNhdGlvbi1jb250YWluZXIuY29tcG9uZW50LnRzIiwibnotbm90aWZpY2F0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNILE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0IsT0FBTyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFcEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLDhCQUE4QixFQUE4QixNQUFNLDBCQUEwQixDQUFDOzs7O0lDRDVILHFDQUtrQjs7OztJQUhoQix5Q0FBcUIsb0JBQUE7O0FERXpCLElBQU0sd0JBQXdCLEdBQUcsY0FBYyxDQUFDO0FBRWhEO0lBUXNELG9EQUEyQjtJQVMvRSwwQ0FDRSxHQUFzQixFQUN0QixlQUFnQyxFQUNvQixhQUF5QyxFQUNqRCxNQUFrQztRQUpoRixZQU1FLGtCQUFNLEdBQUcsRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLE1BQU0sQ0FBQyxTQU1uRDtRQWpCRDs7V0FFRztRQUNILGNBQVEsR0FBOEMsRUFBRSxDQUFDO1FBU3ZELElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUNaLGVBQWUsQ0FDYiw0SEFBNEgsQ0FDN0gsQ0FBQztTQUNIOztJQUNILENBQUM7SUFFRDs7T0FFRztJQUNILG9EQUFTLEdBQVQs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QUF2RkQsQ0FRc0QsMkJBQTJCLEdBK0VoRjtTQS9FWSxnQ0FBZ0M7a0RBQWhDLGdDQUFnQztjQVI1QyxTQUFTO2VBQUM7Z0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixXQUFXLEVBQUUsNENBQTRDO2FBQzFEOztzQkFhSSxRQUFROztzQkFBSSxNQUFNO3VCQUFDLDhCQUE4Qjs7c0JBQ2pELFFBQVE7O3NCQUFJLE1BQU07dUJBQUMsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5qZWN0LCBPcHRpb25hbCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgTnpDb25maWdTZXJ2aWNlLCB0b0Nzc1BpeGVsLCB3YXJuRGVwcmVjYXRpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOek1lc3NhZ2VDb250YWluZXJDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL21lc3NhZ2UnO1xyXG5cclxuaW1wb3J0IHsgTlpfTk9USUZJQ0FUSU9OX0NPTkZJRywgTlpfTk9USUZJQ0FUSU9OX0RFRkFVTFRfQ09ORklHLCBOek5vdGlmaWNhdGlvbkNvbmZpZ0xlZ2FjeSB9IGZyb20gJy4vbnotbm90aWZpY2F0aW9uLWNvbmZpZyc7XHJcbmltcG9ydCB7IE56Tm90aWZpY2F0aW9uRGF0YUZpbGxlZCwgTnpOb3RpZmljYXRpb25EYXRhT3B0aW9ucyB9IGZyb20gJy4vbnotbm90aWZpY2F0aW9uLmRlZmluaXRpb25zJztcclxuXHJcbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICdub3RpZmljYXRpb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzZWxlY3RvcjogJ256LW5vdGlmaWNhdGlvbi1jb250YWluZXInLFxyXG4gIGV4cG9ydEFzOiAnbnpOb3RpZmljYXRpb25Db250YWluZXInLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1ub3RpZmljYXRpb24tY29udGFpbmVyLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpOb3RpZmljYXRpb25Db250YWluZXJDb21wb25lbnQgZXh0ZW5kcyBOek1lc3NhZ2VDb250YWluZXJDb21wb25lbnQge1xyXG4gIGNvbmZpZzogUmVxdWlyZWQ8TnpOb3RpZmljYXRpb25Db25maWdMZWdhY3k+O1xyXG4gIGJvdHRvbTogc3RyaW5nIHwgbnVsbDtcclxuXHJcbiAgLyoqXHJcbiAgICogQG92ZXJyaWRlXHJcbiAgICovXHJcbiAgbWVzc2FnZXM6IEFycmF5PFJlcXVpcmVkPE56Tm90aWZpY2F0aW9uRGF0YUZpbGxlZD4+ID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxyXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChOWl9OT1RJRklDQVRJT05fREVGQVVMVF9DT05GSUcpIGRlZmF1bHRDb25maWc6IE56Tm90aWZpY2F0aW9uQ29uZmlnTGVnYWN5LFxyXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChOWl9OT1RJRklDQVRJT05fQ09ORklHKSBjb25maWc6IE56Tm90aWZpY2F0aW9uQ29uZmlnTGVnYWN5XHJcbiAgKSB7XHJcbiAgICBzdXBlcihjZHIsIG56Q29uZmlnU2VydmljZSwgZGVmYXVsdENvbmZpZywgY29uZmlnKTtcclxuICAgIGlmICghIWNvbmZpZykge1xyXG4gICAgICB3YXJuRGVwcmVjYXRpb24oXHJcbiAgICAgICAgYEluamVjdGlvbiB0b2tlbiAnTlpfTk9USUZJQ0FUSU9OX0NPTkZJRycgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIDkuMC4wLiBQbGVhc2UgdXNlICdOekNvbmZpZ1NlcnZpY2UnIGluc3RlYWQuYFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG92ZXJyaWRlXHJcbiAgICovXHJcbiAgc2V0Q29uZmlnKGNvbmZpZz86IE56Tm90aWZpY2F0aW9uQ29uZmlnTGVnYWN5KTogdm9pZCB7XHJcbiAgICBjb25zdCBuZXdDb25maWcgPSAodGhpcy5jb25maWcgPSB7XHJcbiAgICAgIC4uLnRoaXMuY29uZmlnLFxyXG4gICAgICAuLi5jb25maWcsXHJcbiAgICAgIC4uLnRoaXMubnpDb25maWdTZXJ2aWNlLmdldENvbmZpZ0ZvckNvbXBvbmVudChOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHBsYWNlbWVudCA9IHRoaXMuY29uZmlnLm56UGxhY2VtZW50O1xyXG5cclxuICAgIHRoaXMudG9wID0gcGxhY2VtZW50ID09PSAndG9wTGVmdCcgfHwgcGxhY2VtZW50ID09PSAndG9wUmlnaHQnID8gdG9Dc3NQaXhlbChuZXdDb25maWcubnpUb3ApIDogbnVsbDtcclxuICAgIHRoaXMuYm90dG9tID0gcGxhY2VtZW50ID09PSAnYm90dG9tTGVmdCcgfHwgcGxhY2VtZW50ID09PSAnYm90dG9tUmlnaHQnID8gdG9Dc3NQaXhlbChuZXdDb25maWcubnpCb3R0b20pIDogbnVsbDtcclxuXHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIG5ldyBub3RpZmljYXRpb24uXHJcbiAgICogSWYgdGhlcmUncyBhIG5vdGlmaWNhdGlvbiB3aG9zZSBgbnpLZXlgIGlzIHNhbWUgd2l0aCBgbnpLZXlgIGluIGBOek5vdGlmaWNhdGlvbkRhdGFGaWxsZWRgLFxyXG4gICAqIHJlcGxhY2UgaXRzIGNvbnRlbnQgaW5zdGVhZCBvZiBjcmVhdGUgYSBuZXcgb25lLlxyXG4gICAqIEBvdmVycmlkZVxyXG4gICAqIEBwYXJhbSBub3RpZmljYXRpb25cclxuICAgKi9cclxuICBjcmVhdGVNZXNzYWdlKG5vdGlmaWNhdGlvbjogTnpOb3RpZmljYXRpb25EYXRhRmlsbGVkKTogdm9pZCB7XHJcbiAgICBub3RpZmljYXRpb24ub3B0aW9ucyA9IHRoaXMuX21lcmdlTWVzc2FnZU9wdGlvbnMobm90aWZpY2F0aW9uLm9wdGlvbnMpO1xyXG4gICAgbm90aWZpY2F0aW9uLm9uQ2xvc2UgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xyXG4gICAgY29uc3Qga2V5ID0gbm90aWZpY2F0aW9uLm9wdGlvbnMubnpLZXk7XHJcbiAgICBjb25zdCBub3RpZmljYXRpb25XaXRoU2FtZUtleSA9IHRoaXMubWVzc2FnZXMuZmluZChcclxuICAgICAgbXNnID0+IG1zZy5vcHRpb25zLm56S2V5ID09PSAobm90aWZpY2F0aW9uLm9wdGlvbnMgYXMgUmVxdWlyZWQ8TnpOb3RpZmljYXRpb25EYXRhT3B0aW9ucz4pLm56S2V5XHJcbiAgICApO1xyXG5cclxuICAgIGlmIChrZXkgJiYgbm90aWZpY2F0aW9uV2l0aFNhbWVLZXkpIHtcclxuICAgICAgdGhpcy5yZXBsYWNlTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbldpdGhTYW1lS2V5LCBub3RpZmljYXRpb24pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMubWVzc2FnZXMubGVuZ3RoID49IHRoaXMuY29uZmlnLm56TWF4U3RhY2spIHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VzLnNwbGljZSgwLCAxKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm1lc3NhZ2VzLnB1c2gobm90aWZpY2F0aW9uIGFzIFJlcXVpcmVkPE56Tm90aWZpY2F0aW9uRGF0YUZpbGxlZD4pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG92ZXJyaWRlXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIHN1YnNjcmliZUNvbmZpZ0NoYW5nZSgpOiB2b2lkIHtcclxuICAgIHRoaXMubnpDb25maWdTZXJ2aWNlLmdldENvbmZpZ0NoYW5nZUV2ZW50Rm9yQ29tcG9uZW50KE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2V0Q29uZmlnKCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZXBsYWNlTm90aWZpY2F0aW9uKG9sZDogTnpOb3RpZmljYXRpb25EYXRhRmlsbGVkLCBfbmV3OiBOek5vdGlmaWNhdGlvbkRhdGFGaWxsZWQpOiB2b2lkIHtcclxuICAgIG9sZC50aXRsZSA9IF9uZXcudGl0bGU7XHJcbiAgICBvbGQuY29udGVudCA9IF9uZXcuY29udGVudDtcclxuICAgIG9sZC50ZW1wbGF0ZSA9IF9uZXcudGVtcGxhdGU7XHJcbiAgICBvbGQudHlwZSA9IF9uZXcudHlwZTtcclxuICB9XHJcbn1cclxuIiwiPGRpdlxyXG4gIGNsYXNzPVwiYW50LW5vdGlmaWNhdGlvbiBhbnQtbm90aWZpY2F0aW9uLXt7IGNvbmZpZy5uelBsYWNlbWVudCB9fVwiXHJcbiAgW3N0eWxlLnRvcF09XCJjb25maWcubnpQbGFjZW1lbnQgPT09ICd0b3BMZWZ0JyB8fCBjb25maWcubnpQbGFjZW1lbnQgPT09ICd0b3BSaWdodCcgPyB0b3AgOiBudWxsXCJcclxuICBbc3R5bGUuYm90dG9tXT1cIlxyXG4gICAgY29uZmlnLm56UGxhY2VtZW50ID09PSAnYm90dG9tTGVmdCcgfHwgY29uZmlnLm56UGxhY2VtZW50ID09PSAnYm90dG9tUmlnaHQnID8gYm90dG9tIDogbnVsbFxyXG4gIFwiXHJcbiAgW3N0eWxlLnJpZ2h0XT1cIlxyXG4gICAgY29uZmlnLm56UGxhY2VtZW50ID09PSAnYm90dG9tUmlnaHQnIHx8IGNvbmZpZy5uelBsYWNlbWVudCA9PT0gJ3RvcFJpZ2h0JyA/ICcwcHgnIDogbnVsbFxyXG4gIFwiXHJcbiAgW3N0eWxlLmxlZnRdPVwiXHJcbiAgICBjb25maWcubnpQbGFjZW1lbnQgPT09ICd0b3BMZWZ0JyB8fCBjb25maWcubnpQbGFjZW1lbnQgPT09ICdib3R0b21MZWZ0JyA/ICcwcHgnIDogbnVsbFxyXG4gIFwiXHJcbj5cclxuICA8bnotbm90aWZpY2F0aW9uXHJcbiAgICAqbmdGb3I9XCJsZXQgbWVzc2FnZSBvZiBtZXNzYWdlczsgbGV0IGkgPSBpbmRleFwiXHJcbiAgICBbbnpNZXNzYWdlXT1cIm1lc3NhZ2VcIlxyXG4gICAgW256SW5kZXhdPVwiaVwiXHJcbiAgPlxyXG4gIDwvbnotbm90aWZpY2F0aW9uPlxyXG48L2Rpdj5cclxuIl19
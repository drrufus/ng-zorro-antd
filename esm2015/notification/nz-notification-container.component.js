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
    const message_r1359 = ctx.$implicit;
    const i_r1360 = ctx.index;
    i0.ɵɵproperty("nzMessage", message_r1359)("nzIndex", i_r1360);
} }
const NZ_CONFIG_COMPONENT_NAME = 'notification';
export class NzNotificationContainerComponent extends NzMessageContainerComponent {
    constructor(cdr, nzConfigService, defaultConfig, config) {
        super(cdr, nzConfigService, defaultConfig, config);
        /**
         * @override
         */
        this.messages = [];
        if (!!config) {
            warnDeprecation(`Injection token 'NZ_NOTIFICATION_CONFIG' is deprecated and will be removed in 9.0.0. Please use 'NzConfigService' instead.`);
        }
    }
    /**
     * @override
     */
    setConfig(config) {
        const newConfig = (this.config = Object.assign(Object.assign(Object.assign({}, this.config), config), this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME)));
        const placement = this.config.nzPlacement;
        this.top = placement === 'topLeft' || placement === 'topRight' ? toCssPixel(newConfig.nzTop) : null;
        this.bottom = placement === 'bottomLeft' || placement === 'bottomRight' ? toCssPixel(newConfig.nzBottom) : null;
        this.cdr.markForCheck();
    }
    /**
     * Create a new notification.
     * If there's a notification whose `nzKey` is same with `nzKey` in `NzNotificationDataFilled`,
     * replace its content instead of create a new one.
     * @override
     * @param notification
     */
    createMessage(notification) {
        notification.options = this._mergeMessageOptions(notification.options);
        notification.onClose = new Subject();
        const key = notification.options.nzKey;
        const notificationWithSameKey = this.messages.find(msg => msg.options.nzKey === notification.options.nzKey);
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
    }
    /**
     * @override
     */
    subscribeConfigChange() {
        this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME).subscribe(() => this.setConfig());
    }
    replaceNotification(old, _new) {
        old.title = _new.title;
        old.content = _new.content;
        old.template = _new.template;
        old.type = _new.type;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbm90aWZpY2F0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL25vdGlmaWNhdGlvbi8iLCJzb3VyY2VzIjpbIm56LW5vdGlmaWNhdGlvbi1jb250YWluZXIuY29tcG9uZW50LnRzIiwibnotbm90aWZpY2F0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0gsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQixPQUFPLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVwRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsOEJBQThCLEVBQThCLE1BQU0sMEJBQTBCLENBQUM7Ozs7SUNENUgscUNBS2tCOzs7O0lBSGhCLHlDQUFxQixvQkFBQTs7QURFekIsTUFBTSx3QkFBd0IsR0FBRyxjQUFjLENBQUM7QUFVaEQsTUFBTSxPQUFPLGdDQUFpQyxTQUFRLDJCQUEyQjtJQVMvRSxZQUNFLEdBQXNCLEVBQ3RCLGVBQWdDLEVBQ29CLGFBQXlDLEVBQ2pELE1BQWtDO1FBRTlFLEtBQUssQ0FBQyxHQUFHLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQVhyRDs7V0FFRztRQUNILGFBQVEsR0FBOEMsRUFBRSxDQUFDO1FBU3ZELElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUNaLGVBQWUsQ0FDYiw0SEFBNEgsQ0FDN0gsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gs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QUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLFdBQVcsRUFBRSw0Q0FBNEM7YUFDMUQ7O3NCQWFJLFFBQVE7O3NCQUFJLE1BQU07dUJBQUMsOEJBQThCOztzQkFDakQsUUFBUTs7c0JBQUksTUFBTTt1QkFBQyxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbmplY3QsIE9wdGlvbmFsLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBOekNvbmZpZ1NlcnZpY2UsIHRvQ3NzUGl4ZWwsIHdhcm5EZXByZWNhdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56TWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvbWVzc2FnZSc7XHJcblxyXG5pbXBvcnQgeyBOWl9OT1RJRklDQVRJT05fQ09ORklHLCBOWl9OT1RJRklDQVRJT05fREVGQVVMVF9DT05GSUcsIE56Tm90aWZpY2F0aW9uQ29uZmlnTGVnYWN5IH0gZnJvbSAnLi9uei1ub3RpZmljYXRpb24tY29uZmlnJztcclxuaW1wb3J0IHsgTnpOb3RpZmljYXRpb25EYXRhRmlsbGVkLCBOek5vdGlmaWNhdGlvbkRhdGFPcHRpb25zIH0gZnJvbSAnLi9uei1ub3RpZmljYXRpb24uZGVmaW5pdGlvbnMnO1xyXG5cclxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ25vdGlmaWNhdGlvbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHNlbGVjdG9yOiAnbnotbm90aWZpY2F0aW9uLWNvbnRhaW5lcicsXHJcbiAgZXhwb3J0QXM6ICduek5vdGlmaWNhdGlvbkNvbnRhaW5lcicsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LW5vdGlmaWNhdGlvbi1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOek5vdGlmaWNhdGlvbkNvbnRhaW5lckNvbXBvbmVudCBleHRlbmRzIE56TWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudCB7XHJcbiAgY29uZmlnOiBSZXF1aXJlZDxOek5vdGlmaWNhdGlvbkNvbmZpZ0xlZ2FjeT47XHJcbiAgYm90dG9tOiBzdHJpbmcgfCBudWxsO1xyXG5cclxuICAvKipcclxuICAgKiBAb3ZlcnJpZGVcclxuICAgKi9cclxuICBtZXNzYWdlczogQXJyYXk8UmVxdWlyZWQ8TnpOb3RpZmljYXRpb25EYXRhRmlsbGVkPj4gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXHJcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE5aX05PVElGSUNBVElPTl9ERUZBVUxUX0NPTkZJRykgZGVmYXVsdENvbmZpZzogTnpOb3RpZmljYXRpb25Db25maWdMZWdhY3ksXHJcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE5aX05PVElGSUNBVElPTl9DT05GSUcpIGNvbmZpZzogTnpOb3RpZmljYXRpb25Db25maWdMZWdhY3lcclxuICApIHtcclxuICAgIHN1cGVyKGNkciwgbnpDb25maWdTZXJ2aWNlLCBkZWZhdWx0Q29uZmlnLCBjb25maWcpO1xyXG4gICAgaWYgKCEhY29uZmlnKSB7XHJcbiAgICAgIHdhcm5EZXByZWNhdGlvbihcclxuICAgICAgICBgSW5qZWN0aW9uIHRva2VuICdOWl9OT1RJRklDQVRJT05fQ09ORklHJyBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFBsZWFzZSB1c2UgJ056Q29uZmlnU2VydmljZScgaW5zdGVhZC5gXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3ZlcnJpZGVcclxuICAgKi9cclxuICBzZXRDb25maWcoY29uZmlnPzogTnpOb3RpZmljYXRpb25Db25maWdMZWdhY3kpOiB2b2lkIHtcclxuICAgIGNvbnN0IG5ld0NvbmZpZyA9ICh0aGlzLmNvbmZpZyA9IHtcclxuICAgICAgLi4udGhpcy5jb25maWcsXHJcbiAgICAgIC4uLmNvbmZpZyxcclxuICAgICAgLi4udGhpcy5uekNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnRm9yQ29tcG9uZW50KE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSlcclxuICAgIH0pO1xyXG4gICAgY29uc3QgcGxhY2VtZW50ID0gdGhpcy5jb25maWcubnpQbGFjZW1lbnQ7XHJcblxyXG4gICAgdGhpcy50b3AgPSBwbGFjZW1lbnQgPT09ICd0b3BMZWZ0JyB8fCBwbGFjZW1lbnQgPT09ICd0b3BSaWdodCcgPyB0b0Nzc1BpeGVsKG5ld0NvbmZpZy5uelRvcCkgOiBudWxsO1xyXG4gICAgdGhpcy5ib3R0b20gPSBwbGFjZW1lbnQgPT09ICdib3R0b21MZWZ0JyB8fCBwbGFjZW1lbnQgPT09ICdib3R0b21SaWdodCcgPyB0b0Nzc1BpeGVsKG5ld0NvbmZpZy5uekJvdHRvbSkgOiBudWxsO1xyXG5cclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgbmV3IG5vdGlmaWNhdGlvbi5cclxuICAgKiBJZiB0aGVyZSdzIGEgbm90aWZpY2F0aW9uIHdob3NlIGBuektleWAgaXMgc2FtZSB3aXRoIGBuektleWAgaW4gYE56Tm90aWZpY2F0aW9uRGF0YUZpbGxlZGAsXHJcbiAgICogcmVwbGFjZSBpdHMgY29udGVudCBpbnN0ZWFkIG9mIGNyZWF0ZSBhIG5ldyBvbmUuXHJcbiAgICogQG92ZXJyaWRlXHJcbiAgICogQHBhcmFtIG5vdGlmaWNhdGlvblxyXG4gICAqL1xyXG4gIGNyZWF0ZU1lc3NhZ2Uobm90aWZpY2F0aW9uOiBOek5vdGlmaWNhdGlvbkRhdGFGaWxsZWQpOiB2b2lkIHtcclxuICAgIG5vdGlmaWNhdGlvbi5vcHRpb25zID0gdGhpcy5fbWVyZ2VNZXNzYWdlT3B0aW9ucyhub3RpZmljYXRpb24ub3B0aW9ucyk7XHJcbiAgICBub3RpZmljYXRpb24ub25DbG9zZSA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcbiAgICBjb25zdCBrZXkgPSBub3RpZmljYXRpb24ub3B0aW9ucy5uektleTtcclxuICAgIGNvbnN0IG5vdGlmaWNhdGlvbldpdGhTYW1lS2V5ID0gdGhpcy5tZXNzYWdlcy5maW5kKFxyXG4gICAgICBtc2cgPT4gbXNnLm9wdGlvbnMubnpLZXkgPT09IChub3RpZmljYXRpb24ub3B0aW9ucyBhcyBSZXF1aXJlZDxOek5vdGlmaWNhdGlvbkRhdGFPcHRpb25zPikubnpLZXlcclxuICAgICk7XHJcblxyXG4gICAgaWYgKGtleSAmJiBub3RpZmljYXRpb25XaXRoU2FtZUtleSkge1xyXG4gICAgICB0aGlzLnJlcGxhY2VOb3RpZmljYXRpb24obm90aWZpY2F0aW9uV2l0aFNhbWVLZXksIG5vdGlmaWNhdGlvbik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5tZXNzYWdlcy5sZW5ndGggPj0gdGhpcy5jb25maWcubnpNYXhTdGFjaykge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZXMuc3BsaWNlKDAsIDEpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubWVzc2FnZXMucHVzaChub3RpZmljYXRpb24gYXMgUmVxdWlyZWQ8TnpOb3RpZmljYXRpb25EYXRhRmlsbGVkPik7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3ZlcnJpZGVcclxuICAgKi9cclxuICBwcm90ZWN0ZWQgc3Vic2NyaWJlQ29uZmlnQ2hhbmdlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5uekNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnQ2hhbmdlRXZlbnRGb3JDb21wb25lbnQoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5zZXRDb25maWcoKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlcGxhY2VOb3RpZmljYXRpb24ob2xkOiBOek5vdGlmaWNhdGlvbkRhdGFGaWxsZWQsIF9uZXc6IE56Tm90aWZpY2F0aW9uRGF0YUZpbGxlZCk6IHZvaWQge1xyXG4gICAgb2xkLnRpdGxlID0gX25ldy50aXRsZTtcclxuICAgIG9sZC5jb250ZW50ID0gX25ldy5jb250ZW50O1xyXG4gICAgb2xkLnRlbXBsYXRlID0gX25ldy50ZW1wbGF0ZTtcclxuICAgIG9sZC50eXBlID0gX25ldy50eXBlO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2XHJcbiAgY2xhc3M9XCJhbnQtbm90aWZpY2F0aW9uIGFudC1ub3RpZmljYXRpb24te3sgY29uZmlnLm56UGxhY2VtZW50IH19XCJcclxuICBbc3R5bGUudG9wXT1cImNvbmZpZy5uelBsYWNlbWVudCA9PT0gJ3RvcExlZnQnIHx8IGNvbmZpZy5uelBsYWNlbWVudCA9PT0gJ3RvcFJpZ2h0JyA/IHRvcCA6IG51bGxcIlxyXG4gIFtzdHlsZS5ib3R0b21dPVwiXHJcbiAgICBjb25maWcubnpQbGFjZW1lbnQgPT09ICdib3R0b21MZWZ0JyB8fCBjb25maWcubnpQbGFjZW1lbnQgPT09ICdib3R0b21SaWdodCcgPyBib3R0b20gOiBudWxsXHJcbiAgXCJcclxuICBbc3R5bGUucmlnaHRdPVwiXHJcbiAgICBjb25maWcubnpQbGFjZW1lbnQgPT09ICdib3R0b21SaWdodCcgfHwgY29uZmlnLm56UGxhY2VtZW50ID09PSAndG9wUmlnaHQnID8gJzBweCcgOiBudWxsXHJcbiAgXCJcclxuICBbc3R5bGUubGVmdF09XCJcclxuICAgIGNvbmZpZy5uelBsYWNlbWVudCA9PT0gJ3RvcExlZnQnIHx8IGNvbmZpZy5uelBsYWNlbWVudCA9PT0gJ2JvdHRvbUxlZnQnID8gJzBweCcgOiBudWxsXHJcbiAgXCJcclxuPlxyXG4gIDxuei1ub3RpZmljYXRpb25cclxuICAgICpuZ0Zvcj1cImxldCBtZXNzYWdlIG9mIG1lc3NhZ2VzOyBsZXQgaSA9IGluZGV4XCJcclxuICAgIFtuek1lc3NhZ2VdPVwibWVzc2FnZVwiXHJcbiAgICBbbnpJbmRleF09XCJpXCJcclxuICA+XHJcbiAgPC9uei1ub3RpZmljYXRpb24+XHJcbjwvZGl2PlxyXG4iXX0=
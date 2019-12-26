/**
 * @fileoverview added by tsickle
 * Generated from: nz-notification.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Overlay } from '@angular/cdk/overlay';
import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { NzSingletonService } from 'ng-zorro-antd/core';
import { NzMessageBaseService } from 'ng-zorro-antd/message';
import { NzNotificationContainerComponent } from './nz-notification-container.component';
import { NzNotificationServiceModule } from './nz-notification.service.module';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
import * as i2 from "@angular/cdk/overlay";
import * as i3 from "./nz-notification.service.module";
export class NzNotificationService extends NzMessageBaseService {
    /**
     * @param {?} nzSingletonService
     * @param {?} overlay
     * @param {?} injector
     * @param {?} cfr
     * @param {?} appRef
     */
    constructor(nzSingletonService, overlay, injector, cfr, appRef) {
        super(nzSingletonService, overlay, NzNotificationContainerComponent, injector, cfr, appRef, 'notification-');
    }
    // Shortcut methods
    /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    success(title, content, options) {
        return (/** @type {?} */ (this.createMessage({ type: 'success', title, content }, options)));
    }
    /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    error(title, content, options) {
        return (/** @type {?} */ (this.createMessage({ type: 'error', title, content }, options)));
    }
    /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    info(title, content, options) {
        return (/** @type {?} */ (this.createMessage({ type: 'info', title, content }, options)));
    }
    /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    warning(title, content, options) {
        return (/** @type {?} */ (this.createMessage({ type: 'warning', title, content }, options)));
    }
    /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    blank(title, content, options) {
        return (/** @type {?} */ (this.createMessage({ type: 'blank', title, content }, options)));
    }
    /**
     * @param {?} type
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    create(type, title, content, options) {
        return (/** @type {?} */ (this.createMessage({ type, title, content }, options)));
    }
    // For content with template
    /**
     * @param {?} template
     * @param {?=} options
     * @return {?}
     */
    template(template, options) {
        return (/** @type {?} */ (this.createMessage({ template }, options)));
    }
}
NzNotificationService.decorators = [
    { type: Injectable, args: [{
                providedIn: NzNotificationServiceModule
            },] }
];
/** @nocollapse */
NzNotificationService.ctorParameters = () => [
    { type: NzSingletonService },
    { type: Overlay },
    { type: Injector },
    { type: ComponentFactoryResolver },
    { type: ApplicationRef }
];
/** @nocollapse */ NzNotificationService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NzNotificationService_Factory() { return new NzNotificationService(i0.ɵɵinject(i1.NzSingletonService), i0.ɵɵinject(i2.Overlay), i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i0.ApplicationRef)); }, token: NzNotificationService, providedIn: i3.NzNotificationServiceModule });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbm90aWZpY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL25vdGlmaWNhdGlvbi8iLCJzb3VyY2VzIjpbIm56LW5vdGlmaWNhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLHdCQUF3QixFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFFNUcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDeEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFHN0QsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFekYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7Ozs7O0FBSy9FLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxvQkFJMUM7Ozs7Ozs7O0lBQ0MsWUFDRSxrQkFBc0MsRUFDdEMsT0FBZ0IsRUFDaEIsUUFBa0IsRUFDbEIsR0FBNkIsRUFDN0IsTUFBc0I7UUFFdEIsS0FBSyxDQUFDLGtCQUFrQixFQUFFLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxlQUFlLENBQUMsQ0FBQztJQUMvRyxDQUFDOzs7Ozs7OztJQUdELE9BQU8sQ0FBQyxLQUFhLEVBQUUsT0FBZSxFQUFFLE9BQW1DO1FBQ3pFLE9BQU8sbUJBQUEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUE0QixDQUFDO0lBQ3RHLENBQUM7Ozs7Ozs7SUFFRCxLQUFLLENBQUMsS0FBYSxFQUFFLE9BQWUsRUFBRSxPQUFtQztRQUN2RSxPQUFPLG1CQUFBLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsRUFBRSxPQUFPLENBQUMsRUFBNEIsQ0FBQztJQUNwRyxDQUFDOzs7Ozs7O0lBRUQsSUFBSSxDQUFDLEtBQWEsRUFBRSxPQUFlLEVBQUUsT0FBbUM7UUFDdEUsT0FBTyxtQkFBQSxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQUUsT0FBTyxDQUFDLEVBQTRCLENBQUM7SUFDbkcsQ0FBQzs7Ozs7OztJQUVELE9BQU8sQ0FBQyxLQUFhLEVBQUUsT0FBZSxFQUFFLE9BQW1DO1FBQ3pFLE9BQU8sbUJBQUEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUE0QixDQUFDO0lBQ3RHLENBQUM7Ozs7Ozs7SUFFRCxLQUFLLENBQUMsS0FBYSxFQUFFLE9BQWUsRUFBRSxPQUFtQztRQUN2RSxPQUFPLG1CQUFBLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsRUFBRSxPQUFPLENBQUMsRUFBNEIsQ0FBQztJQUNwRyxDQUFDOzs7Ozs7OztJQUVELE1BQU0sQ0FDSixJQUFpRSxFQUNqRSxLQUFhLEVBQ2IsT0FBZSxFQUNmLE9BQW1DO1FBRW5DLE9BQU8sbUJBQUEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQUUsT0FBTyxDQUFDLEVBQTRCLENBQUM7SUFDM0YsQ0FBQzs7Ozs7OztJQUdELFFBQVEsQ0FBQyxRQUF5QixFQUFFLE9BQW1DO1FBQ3JFLE9BQU8sbUJBQUEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLFFBQVEsRUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUE0QixDQUFDO0lBQy9FLENBQUM7OztZQW5ERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLDJCQUEyQjthQUN4Qzs7OztZQVZRLGtCQUFrQjtZQUhsQixPQUFPO1lBQytDLFFBQVE7WUFBOUMsd0JBQXdCO1lBQXhDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IE92ZXJsYXkgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uUmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEluamVjdGFibGUsIEluamVjdG9yLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpTaW5nbGV0b25TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpNZXNzYWdlQmFzZVNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL21lc3NhZ2UnO1xyXG5cclxuaW1wb3J0IHsgTnpOb3RpZmljYXRpb25Db25maWdMZWdhY3kgfSBmcm9tICcuL256LW5vdGlmaWNhdGlvbi1jb25maWcnO1xyXG5pbXBvcnQgeyBOek5vdGlmaWNhdGlvbkNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vbnotbm90aWZpY2F0aW9uLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOek5vdGlmaWNhdGlvbkRhdGEsIE56Tm90aWZpY2F0aW9uRGF0YUZpbGxlZCwgTnpOb3RpZmljYXRpb25EYXRhT3B0aW9ucyB9IGZyb20gJy4vbnotbm90aWZpY2F0aW9uLmRlZmluaXRpb25zJztcclxuaW1wb3J0IHsgTnpOb3RpZmljYXRpb25TZXJ2aWNlTW9kdWxlIH0gZnJvbSAnLi9uei1ub3RpZmljYXRpb24uc2VydmljZS5tb2R1bGUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46IE56Tm90aWZpY2F0aW9uU2VydmljZU1vZHVsZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpOb3RpZmljYXRpb25TZXJ2aWNlIGV4dGVuZHMgTnpNZXNzYWdlQmFzZVNlcnZpY2U8XHJcbiAgTnpOb3RpZmljYXRpb25Db250YWluZXJDb21wb25lbnQsXHJcbiAgTnpOb3RpZmljYXRpb25EYXRhLFxyXG4gIE56Tm90aWZpY2F0aW9uQ29uZmlnTGVnYWN5XHJcbj4ge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgbnpTaW5nbGV0b25TZXJ2aWNlOiBOelNpbmdsZXRvblNlcnZpY2UsXHJcbiAgICBvdmVybGF5OiBPdmVybGF5LFxyXG4gICAgaW5qZWN0b3I6IEluamVjdG9yLFxyXG4gICAgY2ZyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmXHJcbiAgKSB7XHJcbiAgICBzdXBlcihuelNpbmdsZXRvblNlcnZpY2UsIG92ZXJsYXksIE56Tm90aWZpY2F0aW9uQ29udGFpbmVyQ29tcG9uZW50LCBpbmplY3RvciwgY2ZyLCBhcHBSZWYsICdub3RpZmljYXRpb24tJyk7XHJcbiAgfVxyXG5cclxuICAvLyBTaG9ydGN1dCBtZXRob2RzXHJcbiAgc3VjY2Vzcyh0aXRsZTogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcsIG9wdGlvbnM/OiBOek5vdGlmaWNhdGlvbkRhdGFPcHRpb25zKTogTnpOb3RpZmljYXRpb25EYXRhRmlsbGVkIHtcclxuICAgIHJldHVybiB0aGlzLmNyZWF0ZU1lc3NhZ2UoeyB0eXBlOiAnc3VjY2VzcycsIHRpdGxlLCBjb250ZW50IH0sIG9wdGlvbnMpIGFzIE56Tm90aWZpY2F0aW9uRGF0YUZpbGxlZDtcclxuICB9XHJcblxyXG4gIGVycm9yKHRpdGxlOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZywgb3B0aW9ucz86IE56Tm90aWZpY2F0aW9uRGF0YU9wdGlvbnMpOiBOek5vdGlmaWNhdGlvbkRhdGFGaWxsZWQge1xyXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlTWVzc2FnZSh7IHR5cGU6ICdlcnJvcicsIHRpdGxlLCBjb250ZW50IH0sIG9wdGlvbnMpIGFzIE56Tm90aWZpY2F0aW9uRGF0YUZpbGxlZDtcclxuICB9XHJcblxyXG4gIGluZm8odGl0bGU6IHN0cmluZywgY29udGVudDogc3RyaW5nLCBvcHRpb25zPzogTnpOb3RpZmljYXRpb25EYXRhT3B0aW9ucyk6IE56Tm90aWZpY2F0aW9uRGF0YUZpbGxlZCB7XHJcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVNZXNzYWdlKHsgdHlwZTogJ2luZm8nLCB0aXRsZSwgY29udGVudCB9LCBvcHRpb25zKSBhcyBOek5vdGlmaWNhdGlvbkRhdGFGaWxsZWQ7XHJcbiAgfVxyXG5cclxuICB3YXJuaW5nKHRpdGxlOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZywgb3B0aW9ucz86IE56Tm90aWZpY2F0aW9uRGF0YU9wdGlvbnMpOiBOek5vdGlmaWNhdGlvbkRhdGFGaWxsZWQge1xyXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlTWVzc2FnZSh7IHR5cGU6ICd3YXJuaW5nJywgdGl0bGUsIGNvbnRlbnQgfSwgb3B0aW9ucykgYXMgTnpOb3RpZmljYXRpb25EYXRhRmlsbGVkO1xyXG4gIH1cclxuXHJcbiAgYmxhbmsodGl0bGU6IHN0cmluZywgY29udGVudDogc3RyaW5nLCBvcHRpb25zPzogTnpOb3RpZmljYXRpb25EYXRhT3B0aW9ucyk6IE56Tm90aWZpY2F0aW9uRGF0YUZpbGxlZCB7XHJcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVNZXNzYWdlKHsgdHlwZTogJ2JsYW5rJywgdGl0bGUsIGNvbnRlbnQgfSwgb3B0aW9ucykgYXMgTnpOb3RpZmljYXRpb25EYXRhRmlsbGVkO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlKFxyXG4gICAgdHlwZTogJ3N1Y2Nlc3MnIHwgJ2luZm8nIHwgJ3dhcm5pbmcnIHwgJ2Vycm9yJyB8ICdibGFuaycgfCBzdHJpbmcsXHJcbiAgICB0aXRsZTogc3RyaW5nLFxyXG4gICAgY29udGVudDogc3RyaW5nLFxyXG4gICAgb3B0aW9ucz86IE56Tm90aWZpY2F0aW9uRGF0YU9wdGlvbnNcclxuICApOiBOek5vdGlmaWNhdGlvbkRhdGFGaWxsZWQge1xyXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlTWVzc2FnZSh7IHR5cGUsIHRpdGxlLCBjb250ZW50IH0sIG9wdGlvbnMpIGFzIE56Tm90aWZpY2F0aW9uRGF0YUZpbGxlZDtcclxuICB9XHJcblxyXG4gIC8vIEZvciBjb250ZW50IHdpdGggdGVtcGxhdGVcclxuICB0ZW1wbGF0ZSh0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8e30+LCBvcHRpb25zPzogTnpOb3RpZmljYXRpb25EYXRhT3B0aW9ucyk6IE56Tm90aWZpY2F0aW9uRGF0YUZpbGxlZCB7XHJcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVNZXNzYWdlKHsgdGVtcGxhdGUgfSwgb3B0aW9ucykgYXMgTnpOb3RpZmljYXRpb25EYXRhRmlsbGVkO1xyXG4gIH1cclxufVxyXG4iXX0=
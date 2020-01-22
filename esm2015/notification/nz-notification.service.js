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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbm90aWZpY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL25vdGlmaWNhdGlvbi8iLCJzb3VyY2VzIjpbIm56LW5vdGlmaWNhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxjQUFjLEVBQUUsd0JBQXdCLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBZSxNQUFNLGVBQWUsQ0FBQztBQUU1RyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUc3RCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUV6RixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7Ozs7QUFLL0UsTUFBTSxPQUFPLHFCQUFzQixTQUFRLG9CQUkxQzs7Ozs7Ozs7SUFDQyxZQUNFLGtCQUFzQyxFQUN0QyxPQUFnQixFQUNoQixRQUFrQixFQUNsQixHQUE2QixFQUM3QixNQUFzQjtRQUV0QixLQUFLLENBQUMsa0JBQWtCLEVBQUUsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQy9HLENBQUM7Ozs7Ozs7O0lBR0QsT0FBTyxDQUFDLEtBQWEsRUFBRSxPQUFlLEVBQUUsT0FBbUM7UUFDekUsT0FBTyxtQkFBQSxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQUUsT0FBTyxDQUFDLEVBQTRCLENBQUM7SUFDdEcsQ0FBQzs7Ozs7OztJQUVELEtBQUssQ0FBQyxLQUFhLEVBQUUsT0FBZSxFQUFFLE9BQW1DO1FBQ3ZFLE9BQU8sbUJBQUEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUE0QixDQUFDO0lBQ3BHLENBQUM7Ozs7Ozs7SUFFRCxJQUFJLENBQUMsS0FBYSxFQUFFLE9BQWUsRUFBRSxPQUFtQztRQUN0RSxPQUFPLG1CQUFBLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsRUFBRSxPQUFPLENBQUMsRUFBNEIsQ0FBQztJQUNuRyxDQUFDOzs7Ozs7O0lBRUQsT0FBTyxDQUFDLEtBQWEsRUFBRSxPQUFlLEVBQUUsT0FBbUM7UUFDekUsT0FBTyxtQkFBQSxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQUUsT0FBTyxDQUFDLEVBQTRCLENBQUM7SUFDdEcsQ0FBQzs7Ozs7OztJQUVELEtBQUssQ0FBQyxLQUFhLEVBQUUsT0FBZSxFQUFFLE9BQW1DO1FBQ3ZFLE9BQU8sbUJBQUEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUE0QixDQUFDO0lBQ3BHLENBQUM7Ozs7Ozs7O0lBRUQsTUFBTSxDQUNKLElBQWlFLEVBQ2pFLEtBQWEsRUFDYixPQUFlLEVBQ2YsT0FBbUM7UUFFbkMsT0FBTyxtQkFBQSxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsRUFBRSxPQUFPLENBQUMsRUFBNEIsQ0FBQztJQUMzRixDQUFDOzs7Ozs7O0lBR0QsUUFBUSxDQUFDLFFBQXlCLEVBQUUsT0FBbUM7UUFDckUsT0FBTyxtQkFBQSxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsT0FBTyxDQUFDLEVBQTRCLENBQUM7SUFDL0UsQ0FBQzs7O1lBbkRGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsMkJBQTJCO2FBQ3hDOzs7O1lBVlEsa0JBQWtCO1lBSGxCLE9BQU87WUFDK0MsUUFBUTtZQUE5Qyx3QkFBd0I7WUFBeEMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgT3ZlcmxheSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25SZWYsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOelNpbmdsZXRvblNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOek1lc3NhZ2VCYXNlU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvbWVzc2FnZSc7XHJcblxyXG5pbXBvcnQgeyBOek5vdGlmaWNhdGlvbkNvbmZpZ0xlZ2FjeSB9IGZyb20gJy4vbnotbm90aWZpY2F0aW9uLWNvbmZpZyc7XHJcbmltcG9ydCB7IE56Tm90aWZpY2F0aW9uQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9uei1ub3RpZmljYXRpb24tY29udGFpbmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56Tm90aWZpY2F0aW9uRGF0YSwgTnpOb3RpZmljYXRpb25EYXRhRmlsbGVkLCBOek5vdGlmaWNhdGlvbkRhdGFPcHRpb25zIH0gZnJvbSAnLi9uei1ub3RpZmljYXRpb24uZGVmaW5pdGlvbnMnO1xyXG5pbXBvcnQgeyBOek5vdGlmaWNhdGlvblNlcnZpY2VNb2R1bGUgfSBmcm9tICcuL256LW5vdGlmaWNhdGlvbi5zZXJ2aWNlLm1vZHVsZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogTnpOb3RpZmljYXRpb25TZXJ2aWNlTW9kdWxlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOek5vdGlmaWNhdGlvblNlcnZpY2UgZXh0ZW5kcyBOek1lc3NhZ2VCYXNlU2VydmljZTxcclxuICBOek5vdGlmaWNhdGlvbkNvbnRhaW5lckNvbXBvbmVudCxcclxuICBOek5vdGlmaWNhdGlvbkRhdGEsXHJcbiAgTnpOb3RpZmljYXRpb25Db25maWdMZWdhY3lcclxuPiB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBuelNpbmdsZXRvblNlcnZpY2U6IE56U2luZ2xldG9uU2VydmljZSxcclxuICAgIG92ZXJsYXk6IE92ZXJsYXksXHJcbiAgICBpbmplY3RvcjogSW5qZWN0b3IsXHJcbiAgICBjZnI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIGFwcFJlZjogQXBwbGljYXRpb25SZWZcclxuICApIHtcclxuICAgIHN1cGVyKG56U2luZ2xldG9uU2VydmljZSwgb3ZlcmxheSwgTnpOb3RpZmljYXRpb25Db250YWluZXJDb21wb25lbnQsIGluamVjdG9yLCBjZnIsIGFwcFJlZiwgJ25vdGlmaWNhdGlvbi0nKTtcclxuICB9XHJcblxyXG4gIC8vIFNob3J0Y3V0IG1ldGhvZHNcclxuICBzdWNjZXNzKHRpdGxlOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZywgb3B0aW9ucz86IE56Tm90aWZpY2F0aW9uRGF0YU9wdGlvbnMpOiBOek5vdGlmaWNhdGlvbkRhdGFGaWxsZWQge1xyXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlTWVzc2FnZSh7IHR5cGU6ICdzdWNjZXNzJywgdGl0bGUsIGNvbnRlbnQgfSwgb3B0aW9ucykgYXMgTnpOb3RpZmljYXRpb25EYXRhRmlsbGVkO1xyXG4gIH1cclxuXHJcbiAgZXJyb3IodGl0bGU6IHN0cmluZywgY29udGVudDogc3RyaW5nLCBvcHRpb25zPzogTnpOb3RpZmljYXRpb25EYXRhT3B0aW9ucyk6IE56Tm90aWZpY2F0aW9uRGF0YUZpbGxlZCB7XHJcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVNZXNzYWdlKHsgdHlwZTogJ2Vycm9yJywgdGl0bGUsIGNvbnRlbnQgfSwgb3B0aW9ucykgYXMgTnpOb3RpZmljYXRpb25EYXRhRmlsbGVkO1xyXG4gIH1cclxuXHJcbiAgaW5mbyh0aXRsZTogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcsIG9wdGlvbnM/OiBOek5vdGlmaWNhdGlvbkRhdGFPcHRpb25zKTogTnpOb3RpZmljYXRpb25EYXRhRmlsbGVkIHtcclxuICAgIHJldHVybiB0aGlzLmNyZWF0ZU1lc3NhZ2UoeyB0eXBlOiAnaW5mbycsIHRpdGxlLCBjb250ZW50IH0sIG9wdGlvbnMpIGFzIE56Tm90aWZpY2F0aW9uRGF0YUZpbGxlZDtcclxuICB9XHJcblxyXG4gIHdhcm5pbmcodGl0bGU6IHN0cmluZywgY29udGVudDogc3RyaW5nLCBvcHRpb25zPzogTnpOb3RpZmljYXRpb25EYXRhT3B0aW9ucyk6IE56Tm90aWZpY2F0aW9uRGF0YUZpbGxlZCB7XHJcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVNZXNzYWdlKHsgdHlwZTogJ3dhcm5pbmcnLCB0aXRsZSwgY29udGVudCB9LCBvcHRpb25zKSBhcyBOek5vdGlmaWNhdGlvbkRhdGFGaWxsZWQ7XHJcbiAgfVxyXG5cclxuICBibGFuayh0aXRsZTogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcsIG9wdGlvbnM/OiBOek5vdGlmaWNhdGlvbkRhdGFPcHRpb25zKTogTnpOb3RpZmljYXRpb25EYXRhRmlsbGVkIHtcclxuICAgIHJldHVybiB0aGlzLmNyZWF0ZU1lc3NhZ2UoeyB0eXBlOiAnYmxhbmsnLCB0aXRsZSwgY29udGVudCB9LCBvcHRpb25zKSBhcyBOek5vdGlmaWNhdGlvbkRhdGFGaWxsZWQ7XHJcbiAgfVxyXG5cclxuICBjcmVhdGUoXHJcbiAgICB0eXBlOiAnc3VjY2VzcycgfCAnaW5mbycgfCAnd2FybmluZycgfCAnZXJyb3InIHwgJ2JsYW5rJyB8IHN0cmluZyxcclxuICAgIHRpdGxlOiBzdHJpbmcsXHJcbiAgICBjb250ZW50OiBzdHJpbmcsXHJcbiAgICBvcHRpb25zPzogTnpOb3RpZmljYXRpb25EYXRhT3B0aW9uc1xyXG4gICk6IE56Tm90aWZpY2F0aW9uRGF0YUZpbGxlZCB7XHJcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVNZXNzYWdlKHsgdHlwZSwgdGl0bGUsIGNvbnRlbnQgfSwgb3B0aW9ucykgYXMgTnpOb3RpZmljYXRpb25EYXRhRmlsbGVkO1xyXG4gIH1cclxuXHJcbiAgLy8gRm9yIGNvbnRlbnQgd2l0aCB0ZW1wbGF0ZVxyXG4gIHRlbXBsYXRlKHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx7fT4sIG9wdGlvbnM/OiBOek5vdGlmaWNhdGlvbkRhdGFPcHRpb25zKTogTnpOb3RpZmljYXRpb25EYXRhRmlsbGVkIHtcclxuICAgIHJldHVybiB0aGlzLmNyZWF0ZU1lc3NhZ2UoeyB0ZW1wbGF0ZSB9LCBvcHRpb25zKSBhcyBOek5vdGlmaWNhdGlvbkRhdGFGaWxsZWQ7XHJcbiAgfVxyXG59XHJcbiJdfQ==
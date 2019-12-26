/**
 * @fileoverview added by tsickle
 * Generated from: nz-message.service.ts
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
import { NzMessageBaseService } from './nz-message-base.service';
import { NzMessageContainerComponent } from './nz-message-container.component';
import { NzMessageServiceModule } from './nz-message.service.module';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
import * as i2 from "@angular/cdk/overlay";
import * as i3 from "./nz-message.service.module";
export class NzMessageService extends NzMessageBaseService {
    /**
     * @param {?} nzSingletonService
     * @param {?} overlay
     * @param {?} injector
     * @param {?} cfr
     * @param {?} appRef
     */
    constructor(nzSingletonService, overlay, injector, cfr, appRef) {
        super(nzSingletonService, overlay, NzMessageContainerComponent, injector, cfr, appRef, 'message');
    }
    // Shortcut methods
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    success(content, options) {
        return this.createMessage({ type: 'success', content }, options);
    }
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    error(content, options) {
        return this.createMessage({ type: 'error', content }, options);
    }
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    info(content, options) {
        return this.createMessage({ type: 'info', content }, options);
    }
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    warning(content, options) {
        return this.createMessage({ type: 'warning', content }, options);
    }
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    loading(content, options) {
        return this.createMessage({ type: 'loading', content }, options);
    }
    /**
     * @param {?} type
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    create(type, content, options) {
        return this.createMessage({ type, content }, options);
    }
}
NzMessageService.decorators = [
    { type: Injectable, args: [{
                providedIn: NzMessageServiceModule
            },] }
];
/** @nocollapse */
NzMessageService.ctorParameters = () => [
    { type: NzSingletonService },
    { type: Overlay },
    { type: Injector },
    { type: ComponentFactoryResolver },
    { type: ApplicationRef }
];
/** @nocollapse */ NzMessageService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NzMessageService_Factory() { return new NzMessageService(i0.ɵɵinject(i1.NzSingletonService), i0.ɵɵinject(i2.Overlay), i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i0.ApplicationRef)); }, token: NzMessageService, providedIn: i3.NzMessageServiceModule });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVzc2FnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9tZXNzYWdlLyIsInNvdXJjZXMiOlsibnotbWVzc2FnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLHdCQUF3QixFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFDNUcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFeEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFakUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFL0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7O0FBS3JFLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxvQkFJckM7Ozs7Ozs7O0lBQ0MsWUFDRSxrQkFBc0MsRUFDdEMsT0FBZ0IsRUFDaEIsUUFBa0IsRUFDbEIsR0FBNkIsRUFDN0IsTUFBc0I7UUFFdEIsS0FBSyxDQUFDLGtCQUFrQixFQUFFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNwRyxDQUFDOzs7Ozs7O0lBR0QsT0FBTyxDQUFDLE9BQW1DLEVBQUUsT0FBOEI7UUFDekUsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7Ozs7SUFFRCxLQUFLLENBQUMsT0FBbUMsRUFBRSxPQUE4QjtRQUN2RSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Ozs7OztJQUVELElBQUksQ0FBQyxPQUFtQyxFQUFFLE9BQThCO1FBQ3RFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7Ozs7O0lBRUQsT0FBTyxDQUFDLE9BQW1DLEVBQUUsT0FBOEI7UUFDekUsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7Ozs7SUFFRCxPQUFPLENBQUMsT0FBbUMsRUFBRSxPQUE4QjtRQUN6RSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ25FLENBQUM7Ozs7Ozs7SUFFRCxNQUFNLENBQ0osSUFBbUUsRUFDbkUsT0FBbUMsRUFDbkMsT0FBOEI7UUFFOUIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3hELENBQUM7OztZQTdDRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLHNCQUFzQjthQUNuQzs7OztZQVZRLGtCQUFrQjtZQUZsQixPQUFPO1lBQytDLFFBQVE7WUFBOUMsd0JBQXdCO1lBQXhDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IE92ZXJsYXkgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uUmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEluamVjdGFibGUsIEluamVjdG9yLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOelNpbmdsZXRvblNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpNZXNzYWdlQmFzZVNlcnZpY2UgfSBmcm9tICcuL256LW1lc3NhZ2UtYmFzZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTnpNZXNzYWdlQ29uZmlnTGVnYWN5IH0gZnJvbSAnLi9uei1tZXNzYWdlLWNvbmZpZyc7XHJcbmltcG9ydCB7IE56TWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vbnotbWVzc2FnZS1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpNZXNzYWdlRGF0YSwgTnpNZXNzYWdlRGF0YUZpbGxlZCwgTnpNZXNzYWdlRGF0YU9wdGlvbnMgfSBmcm9tICcuL256LW1lc3NhZ2UuZGVmaW5pdGlvbnMnO1xyXG5pbXBvcnQgeyBOek1lc3NhZ2VTZXJ2aWNlTW9kdWxlIH0gZnJvbSAnLi9uei1tZXNzYWdlLnNlcnZpY2UubW9kdWxlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiBOek1lc3NhZ2VTZXJ2aWNlTW9kdWxlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOek1lc3NhZ2VTZXJ2aWNlIGV4dGVuZHMgTnpNZXNzYWdlQmFzZVNlcnZpY2U8XHJcbiAgTnpNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gIE56TWVzc2FnZURhdGEsXHJcbiAgTnpNZXNzYWdlQ29uZmlnTGVnYWN5XHJcbj4ge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgbnpTaW5nbGV0b25TZXJ2aWNlOiBOelNpbmdsZXRvblNlcnZpY2UsXHJcbiAgICBvdmVybGF5OiBPdmVybGF5LFxyXG4gICAgaW5qZWN0b3I6IEluamVjdG9yLFxyXG4gICAgY2ZyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmXHJcbiAgKSB7XHJcbiAgICBzdXBlcihuelNpbmdsZXRvblNlcnZpY2UsIG92ZXJsYXksIE56TWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudCwgaW5qZWN0b3IsIGNmciwgYXBwUmVmLCAnbWVzc2FnZScpO1xyXG4gIH1cclxuXHJcbiAgLy8gU2hvcnRjdXQgbWV0aG9kc1xyXG4gIHN1Y2Nlc3MoY29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4sIG9wdGlvbnM/OiBOek1lc3NhZ2VEYXRhT3B0aW9ucyk6IE56TWVzc2FnZURhdGFGaWxsZWQge1xyXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlTWVzc2FnZSh7IHR5cGU6ICdzdWNjZXNzJywgY29udGVudCB9LCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIGVycm9yKGNvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+LCBvcHRpb25zPzogTnpNZXNzYWdlRGF0YU9wdGlvbnMpOiBOek1lc3NhZ2VEYXRhRmlsbGVkIHtcclxuICAgIHJldHVybiB0aGlzLmNyZWF0ZU1lc3NhZ2UoeyB0eXBlOiAnZXJyb3InLCBjb250ZW50IH0sIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgaW5mbyhjb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiwgb3B0aW9ucz86IE56TWVzc2FnZURhdGFPcHRpb25zKTogTnpNZXNzYWdlRGF0YUZpbGxlZCB7XHJcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVNZXNzYWdlKHsgdHlwZTogJ2luZm8nLCBjb250ZW50IH0sIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgd2FybmluZyhjb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiwgb3B0aW9ucz86IE56TWVzc2FnZURhdGFPcHRpb25zKTogTnpNZXNzYWdlRGF0YUZpbGxlZCB7XHJcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVNZXNzYWdlKHsgdHlwZTogJ3dhcm5pbmcnLCBjb250ZW50IH0sIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgbG9hZGluZyhjb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiwgb3B0aW9ucz86IE56TWVzc2FnZURhdGFPcHRpb25zKTogTnpNZXNzYWdlRGF0YUZpbGxlZCB7XHJcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVNZXNzYWdlKHsgdHlwZTogJ2xvYWRpbmcnLCBjb250ZW50IH0sIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlKFxyXG4gICAgdHlwZTogJ3N1Y2Nlc3MnIHwgJ2luZm8nIHwgJ3dhcm5pbmcnIHwgJ2Vycm9yJyB8ICdsb2FkaW5nJyB8IHN0cmluZyxcclxuICAgIGNvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+LFxyXG4gICAgb3B0aW9ucz86IE56TWVzc2FnZURhdGFPcHRpb25zXHJcbiAgKTogTnpNZXNzYWdlRGF0YUZpbGxlZCB7XHJcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVNZXNzYWdlKHsgdHlwZSwgY29udGVudCB9LCBvcHRpb25zKTtcclxuICB9XHJcbn1cclxuIl19
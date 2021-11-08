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
import { NzMessageBaseService } from './nz-message-base.service';
import { NzMessageContainerComponent } from './nz-message-container.component';
import { NzMessageServiceModule } from './nz-message.service.module';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
import * as i2 from "@angular/cdk/overlay";
import * as i3 from "./nz-message.service.module";
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core';
import * as ɵngcc2 from '@angular/cdk/overlay';
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
NzMessageService.ɵfac = function NzMessageService_Factory(t) { return new (t || NzMessageService)(ɵngcc0.ɵɵinject(ɵngcc1.NzSingletonService), ɵngcc0.ɵɵinject(ɵngcc2.Overlay), ɵngcc0.ɵɵinject(ɵngcc0.Injector), ɵngcc0.ɵɵinject(ɵngcc0.ComponentFactoryResolver), ɵngcc0.ɵɵinject(ɵngcc0.ApplicationRef)); };
NzMessageService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: NzMessageService, factory: NzMessageService.ɵfac, providedIn: NzMessageServiceModule });
/** @nocollapse */
NzMessageService.ctorParameters = () => [
    { type: NzSingletonService },
    { type: Overlay },
    { type: Injector },
    { type: ComponentFactoryResolver },
    { type: ApplicationRef }
];
/** @nocollapse */ NzMessageService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NzMessageService_Factory() { return new NzMessageService(i0.ɵɵinject(i1.NzSingletonService), i0.ɵɵinject(i2.Overlay), i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i0.ApplicationRef)); }, token: NzMessageService, providedIn: i3.NzMessageServiceModule });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzMessageService, [{
        type: Injectable,
        args: [{
                providedIn: NzMessageServiceModule
            }]
    }], function () { return [{ type: ɵngcc1.NzSingletonService }, { type: ɵngcc2.Overlay }, { type: ɵngcc0.Injector }, { type: ɵngcc0.ComponentFactoryResolver }, { type: ɵngcc0.ApplicationRef }]; }, null); })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVzc2FnZS5zZXJ2aWNlLmpzIiwic291cmNlcyI6WyJuZzovbmctem9ycm8tYW50ZC9tZXNzYWdlL256LW1lc3NhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLHdCQUF3QixFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFDNUcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFeEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFakUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFL0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7Ozs7O0FBS3JFLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxvQkFJckM7Ozs7Ozs7O0lBQ0MsWUFDRSxrQkFBc0MsRUFDdEMsT0FBZ0IsRUFDaEIsUUFBa0IsRUFDbEIsR0FBNkIsRUFDN0IsTUFBc0I7UUFFdEIsS0FBSyxDQUFDLGtCQUFrQixFQUFFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNwRyxDQUFDOzs7Ozs7O0lBR0QsT0FBTyxDQUFDLE9BQW1DLEVBQUUsT0FBOEI7UUFDekUsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7Ozs7SUFFRCxLQUFLLENBQUMsT0FBbUMsRUFBRSxPQUE4QjtRQUN2RSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Ozs7OztJQUVELElBQUksQ0FBQyxPQUFtQyxFQUFFLE9BQThCO1FBQ3RFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7Ozs7O0lBRUQsT0FBTyxDQUFDLE9BQW1DLEVBQUUsT0FBOEI7UUFDekUsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7Ozs7SUFFRCxPQUFPLENBQUMsT0FBbUMsRUFBRSxPQUE4QjtRQUN6RSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ25FLENBQUM7Ozs7Ozs7SUFFRCxNQUFNLENBQ0osSUFBbUUsRUFDbkUsT0FBbUMsRUFDbkMsT0FBOEI7UUFFOUIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3hELENBQUM7OztDQUNGLDZDQTlDQSxVQUFVLFNBQUMsa0JBQ1YsVUFBVSxFQUFFLHNCQUFzQixjQUNuQyxpQkFDSTs7O1lBWEksa0JBQWtCO1lBRmxCLE9BQU87WUFDK0MsUUFBUTtZQUE5Qyx3QkFBd0I7WUFBeEMsY0FBYzs7Ozs7Ozs7b05BTWdCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBPdmVybGF5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBJbmplY3RhYmxlLCBJbmplY3RvciwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpTaW5nbGV0b25TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56TWVzc2FnZUJhc2VTZXJ2aWNlIH0gZnJvbSAnLi9uei1tZXNzYWdlLWJhc2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IE56TWVzc2FnZUNvbmZpZ0xlZ2FjeSB9IGZyb20gJy4vbnotbWVzc2FnZS1jb25maWcnO1xyXG5pbXBvcnQgeyBOek1lc3NhZ2VDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL256LW1lc3NhZ2UtY29udGFpbmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56TWVzc2FnZURhdGEsIE56TWVzc2FnZURhdGFGaWxsZWQsIE56TWVzc2FnZURhdGFPcHRpb25zIH0gZnJvbSAnLi9uei1tZXNzYWdlLmRlZmluaXRpb25zJztcclxuaW1wb3J0IHsgTnpNZXNzYWdlU2VydmljZU1vZHVsZSB9IGZyb20gJy4vbnotbWVzc2FnZS5zZXJ2aWNlLm1vZHVsZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogTnpNZXNzYWdlU2VydmljZU1vZHVsZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpNZXNzYWdlU2VydmljZSBleHRlbmRzIE56TWVzc2FnZUJhc2VTZXJ2aWNlPFxyXG4gIE56TWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudCxcclxuICBOek1lc3NhZ2VEYXRhLFxyXG4gIE56TWVzc2FnZUNvbmZpZ0xlZ2FjeVxyXG4+IHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIG56U2luZ2xldG9uU2VydmljZTogTnpTaW5nbGV0b25TZXJ2aWNlLFxyXG4gICAgb3ZlcmxheTogT3ZlcmxheSxcclxuICAgIGluamVjdG9yOiBJbmplY3RvcixcclxuICAgIGNmcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgYXBwUmVmOiBBcHBsaWNhdGlvblJlZlxyXG4gICkge1xyXG4gICAgc3VwZXIobnpTaW5nbGV0b25TZXJ2aWNlLCBvdmVybGF5LCBOek1lc3NhZ2VDb250YWluZXJDb21wb25lbnQsIGluamVjdG9yLCBjZnIsIGFwcFJlZiwgJ21lc3NhZ2UnKTtcclxuICB9XHJcblxyXG4gIC8vIFNob3J0Y3V0IG1ldGhvZHNcclxuICBzdWNjZXNzKGNvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+LCBvcHRpb25zPzogTnpNZXNzYWdlRGF0YU9wdGlvbnMpOiBOek1lc3NhZ2VEYXRhRmlsbGVkIHtcclxuICAgIHJldHVybiB0aGlzLmNyZWF0ZU1lc3NhZ2UoeyB0eXBlOiAnc3VjY2VzcycsIGNvbnRlbnQgfSwgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBlcnJvcihjb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiwgb3B0aW9ucz86IE56TWVzc2FnZURhdGFPcHRpb25zKTogTnpNZXNzYWdlRGF0YUZpbGxlZCB7XHJcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVNZXNzYWdlKHsgdHlwZTogJ2Vycm9yJywgY29udGVudCB9LCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIGluZm8oY29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4sIG9wdGlvbnM/OiBOek1lc3NhZ2VEYXRhT3B0aW9ucyk6IE56TWVzc2FnZURhdGFGaWxsZWQge1xyXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlTWVzc2FnZSh7IHR5cGU6ICdpbmZvJywgY29udGVudCB9LCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIHdhcm5pbmcoY29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4sIG9wdGlvbnM/OiBOek1lc3NhZ2VEYXRhT3B0aW9ucyk6IE56TWVzc2FnZURhdGFGaWxsZWQge1xyXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlTWVzc2FnZSh7IHR5cGU6ICd3YXJuaW5nJywgY29udGVudCB9LCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIGxvYWRpbmcoY29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4sIG9wdGlvbnM/OiBOek1lc3NhZ2VEYXRhT3B0aW9ucyk6IE56TWVzc2FnZURhdGFGaWxsZWQge1xyXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlTWVzc2FnZSh7IHR5cGU6ICdsb2FkaW5nJywgY29udGVudCB9LCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZShcclxuICAgIHR5cGU6ICdzdWNjZXNzJyB8ICdpbmZvJyB8ICd3YXJuaW5nJyB8ICdlcnJvcicgfCAnbG9hZGluZycgfCBzdHJpbmcsXHJcbiAgICBjb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPixcclxuICAgIG9wdGlvbnM/OiBOek1lc3NhZ2VEYXRhT3B0aW9uc1xyXG4gICk6IE56TWVzc2FnZURhdGFGaWxsZWQge1xyXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlTWVzc2FnZSh7IHR5cGUsIGNvbnRlbnQgfSwgb3B0aW9ucyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
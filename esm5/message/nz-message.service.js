import { __extends } from "tslib";
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
var NzMessageService = /** @class */ (function (_super) {
    __extends(NzMessageService, _super);
    function NzMessageService(nzSingletonService, overlay, injector, cfr, appRef) {
        return _super.call(this, nzSingletonService, overlay, NzMessageContainerComponent, injector, cfr, appRef, 'message') || this;
    }
    // Shortcut methods
    NzMessageService.prototype.success = function (content, options) {
        return this.createMessage({ type: 'success', content: content }, options);
    };
    NzMessageService.prototype.error = function (content, options) {
        return this.createMessage({ type: 'error', content: content }, options);
    };
    NzMessageService.prototype.info = function (content, options) {
        return this.createMessage({ type: 'info', content: content }, options);
    };
    NzMessageService.prototype.warning = function (content, options) {
        return this.createMessage({ type: 'warning', content: content }, options);
    };
    NzMessageService.prototype.loading = function (content, options) {
        return this.createMessage({ type: 'loading', content: content }, options);
    };
    NzMessageService.prototype.create = function (type, content, options) {
        return this.createMessage({ type: type, content: content }, options);
    };
    /** @nocollapse */ NzMessageService.ɵfac = function NzMessageService_Factory(t) { return new (t || NzMessageService)(i0.ɵɵinject(i1.NzSingletonService), i0.ɵɵinject(i2.Overlay), i0.ɵɵinject(i0.Injector), i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i0.ApplicationRef)); };
    /** @nocollapse */ NzMessageService.ɵprov = i0.ɵɵdefineInjectable({ token: NzMessageService, factory: NzMessageService.ɵfac, providedIn: NzMessageServiceModule });
    return NzMessageService;
}(NzMessageBaseService));
export { NzMessageService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzMessageService, [{
        type: Injectable,
        args: [{
                providedIn: NzMessageServiceModule
            }]
    }], function () { return [{ type: i1.NzSingletonService }, { type: i2.Overlay }, { type: i0.Injector }, { type: i0.ComponentFactoryResolver }, { type: i0.ApplicationRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVzc2FnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9tZXNzYWdlLyIsInNvdXJjZXMiOlsibnotbWVzc2FnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSx3QkFBd0IsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFlLE1BQU0sZUFBZSxDQUFDO0FBQzVHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXhELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRWpFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRS9FLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7O0FBRXJFO0lBR3NDLG9DQUF1RjtJQUMzSCwwQkFDRSxrQkFBc0MsRUFDdEMsT0FBZ0IsRUFDaEIsUUFBa0IsRUFDbEIsR0FBNkIsRUFDN0IsTUFBc0I7ZUFFdEIsa0JBQU0sa0JBQWtCLEVBQUUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQztJQUNuRyxDQUFDO0lBRUQsbUJBQW1CO0lBQ25CLGtDQUFPLEdBQVAsVUFBUSxPQUFtQyxFQUFFLE9BQThCO1FBQ3pFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxTQUFBLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQsZ0NBQUssR0FBTCxVQUFNLE9BQW1DLEVBQUUsT0FBOEI7UUFDdkUsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLFNBQUEsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRCwrQkFBSSxHQUFKLFVBQUssT0FBbUMsRUFBRSxPQUE4QjtRQUN0RSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sU0FBQSxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELGtDQUFPLEdBQVAsVUFBUSxPQUFtQyxFQUFFLE9BQThCO1FBQ3pFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxTQUFBLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQsa0NBQU8sR0FBUCxVQUFRLE9BQW1DLEVBQUUsT0FBOEI7UUFDekUsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLFNBQUEsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRCxpQ0FBTSxHQUFOLFVBQ0UsSUFBbUUsRUFDbkUsT0FBbUMsRUFDbkMsT0FBOEI7UUFFOUIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSSxNQUFBLEVBQUUsT0FBTyxTQUFBLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN4RCxDQUFDO29GQXRDVSxnQkFBZ0I7NERBQWhCLGdCQUFnQixXQUFoQixnQkFBZ0IsbUJBRmYsc0JBQXNCOzJCQW5CcEM7Q0E0REMsQUExQ0QsQ0FHc0Msb0JBQW9CLEdBdUN6RDtTQXZDWSxnQkFBZ0I7a0RBQWhCLGdCQUFnQjtjQUg1QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLHNCQUFzQjthQUNuQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgT3ZlcmxheSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25SZWYsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE56U2luZ2xldG9uU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOek1lc3NhZ2VCYXNlU2VydmljZSB9IGZyb20gJy4vbnotbWVzc2FnZS1iYXNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOek1lc3NhZ2VDb25maWdMZWdhY3kgfSBmcm9tICcuL256LW1lc3NhZ2UtY29uZmlnJztcclxuaW1wb3J0IHsgTnpNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9uei1tZXNzYWdlLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOek1lc3NhZ2VEYXRhLCBOek1lc3NhZ2VEYXRhRmlsbGVkLCBOek1lc3NhZ2VEYXRhT3B0aW9ucyB9IGZyb20gJy4vbnotbWVzc2FnZS5kZWZpbml0aW9ucyc7XHJcbmltcG9ydCB7IE56TWVzc2FnZVNlcnZpY2VNb2R1bGUgfSBmcm9tICcuL256LW1lc3NhZ2Uuc2VydmljZS5tb2R1bGUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46IE56TWVzc2FnZVNlcnZpY2VNb2R1bGVcclxufSlcclxuZXhwb3J0IGNsYXNzIE56TWVzc2FnZVNlcnZpY2UgZXh0ZW5kcyBOek1lc3NhZ2VCYXNlU2VydmljZTxOek1lc3NhZ2VDb250YWluZXJDb21wb25lbnQsIE56TWVzc2FnZURhdGEsIE56TWVzc2FnZUNvbmZpZ0xlZ2FjeT4ge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgbnpTaW5nbGV0b25TZXJ2aWNlOiBOelNpbmdsZXRvblNlcnZpY2UsXHJcbiAgICBvdmVybGF5OiBPdmVybGF5LFxyXG4gICAgaW5qZWN0b3I6IEluamVjdG9yLFxyXG4gICAgY2ZyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmXHJcbiAgKSB7XHJcbiAgICBzdXBlcihuelNpbmdsZXRvblNlcnZpY2UsIG92ZXJsYXksIE56TWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudCwgaW5qZWN0b3IsIGNmciwgYXBwUmVmLCAnbWVzc2FnZScpO1xyXG4gIH1cclxuXHJcbiAgLy8gU2hvcnRjdXQgbWV0aG9kc1xyXG4gIHN1Y2Nlc3MoY29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4sIG9wdGlvbnM/OiBOek1lc3NhZ2VEYXRhT3B0aW9ucyk6IE56TWVzc2FnZURhdGFGaWxsZWQge1xyXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlTWVzc2FnZSh7IHR5cGU6ICdzdWNjZXNzJywgY29udGVudCB9LCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIGVycm9yKGNvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+LCBvcHRpb25zPzogTnpNZXNzYWdlRGF0YU9wdGlvbnMpOiBOek1lc3NhZ2VEYXRhRmlsbGVkIHtcclxuICAgIHJldHVybiB0aGlzLmNyZWF0ZU1lc3NhZ2UoeyB0eXBlOiAnZXJyb3InLCBjb250ZW50IH0sIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgaW5mbyhjb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiwgb3B0aW9ucz86IE56TWVzc2FnZURhdGFPcHRpb25zKTogTnpNZXNzYWdlRGF0YUZpbGxlZCB7XHJcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVNZXNzYWdlKHsgdHlwZTogJ2luZm8nLCBjb250ZW50IH0sIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgd2FybmluZyhjb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiwgb3B0aW9ucz86IE56TWVzc2FnZURhdGFPcHRpb25zKTogTnpNZXNzYWdlRGF0YUZpbGxlZCB7XHJcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVNZXNzYWdlKHsgdHlwZTogJ3dhcm5pbmcnLCBjb250ZW50IH0sIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgbG9hZGluZyhjb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiwgb3B0aW9ucz86IE56TWVzc2FnZURhdGFPcHRpb25zKTogTnpNZXNzYWdlRGF0YUZpbGxlZCB7XHJcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVNZXNzYWdlKHsgdHlwZTogJ2xvYWRpbmcnLCBjb250ZW50IH0sIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlKFxyXG4gICAgdHlwZTogJ3N1Y2Nlc3MnIHwgJ2luZm8nIHwgJ3dhcm5pbmcnIHwgJ2Vycm9yJyB8ICdsb2FkaW5nJyB8IHN0cmluZyxcclxuICAgIGNvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+LFxyXG4gICAgb3B0aW9ucz86IE56TWVzc2FnZURhdGFPcHRpb25zXHJcbiAgKTogTnpNZXNzYWdlRGF0YUZpbGxlZCB7XHJcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVNZXNzYWdlKHsgdHlwZSwgY29udGVudCB9LCBvcHRpb25zKTtcclxuICB9XHJcbn1cclxuIl19
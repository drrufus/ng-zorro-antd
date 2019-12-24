import { __rest } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzDrawerComponent } from './nz-drawer.component';
import { NzDrawerServiceModule } from './nz-drawer.service.module';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
var DrawerBuilderForService = /** @class */ (function () {
    function DrawerBuilderForService(overlay, options) {
        var _this = this;
        this.overlay = overlay;
        this.options = options;
        this.unsubscribe$ = new Subject();
        /** pick {@link NzDrawerOptions.nzOnCancel} and omit this option */
        var _a = this.options, nzOnCancel = _a.nzOnCancel, componentOption = __rest(_a, ["nzOnCancel"]);
        this.createDrawer();
        this.updateOptions(componentOption);
        // Prevent repeatedly open drawer when tap focus element.
        this.drawerRef.instance.savePreviouslyFocusedElement();
        this.drawerRef.instance.nzOnViewInit.pipe(takeUntil(this.unsubscribe$)).subscribe(function () {
            _this.drawerRef.instance.open();
        });
        this.drawerRef.instance.nzOnClose.subscribe(function () {
            if (nzOnCancel) {
                nzOnCancel().then(function (canClose) {
                    if (canClose !== false) {
                        _this.drawerRef.instance.close();
                    }
                });
            }
            else {
                _this.drawerRef.instance.close();
            }
        });
        this.drawerRef.instance.afterClose.pipe(takeUntil(this.unsubscribe$)).subscribe(function () {
            _this.overlayRef.dispose();
            _this.drawerRef = null;
            _this.unsubscribe$.next();
            _this.unsubscribe$.complete();
        });
    }
    DrawerBuilderForService.prototype.getInstance = function () {
        return this.drawerRef && this.drawerRef.instance;
    };
    DrawerBuilderForService.prototype.createDrawer = function () {
        this.overlayRef = this.overlay.create();
        this.drawerRef = this.overlayRef.attach(new ComponentPortal(NzDrawerComponent));
    };
    DrawerBuilderForService.prototype.updateOptions = function (options) {
        Object.assign(this.drawerRef.instance, options);
    };
    return DrawerBuilderForService;
}());
export { DrawerBuilderForService };
var NzDrawerService = /** @class */ (function () {
    function NzDrawerService(overlay) {
        this.overlay = overlay;
    }
    // tslint:disable-next-line:no-any
    NzDrawerService.prototype.create = function (options) {
        return new DrawerBuilderForService(this.overlay, options).getInstance();
    };
    /** @nocollapse */ NzDrawerService.ɵfac = function NzDrawerService_Factory(t) { return new (t || NzDrawerService)(i0.ɵɵinject(i1.Overlay)); };
    /** @nocollapse */ NzDrawerService.ɵprov = i0.ɵɵdefineInjectable({ token: NzDrawerService, factory: NzDrawerService.ɵfac, providedIn: NzDrawerServiceModule });
    return NzDrawerService;
}());
export { NzDrawerService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzDrawerService, [{
        type: Injectable,
        args: [{ providedIn: NzDrawerServiceModule }]
    }], function () { return [{ type: i1.Overlay }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJhd2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2RyYXdlci8iLCJzb3VyY2VzIjpbIm56LWRyYXdlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsT0FBTyxFQUFjLE1BQU0sc0JBQXNCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBZ0IsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7QUFFbkU7SUFLRSxpQ0FBb0IsT0FBZ0IsRUFBVSxPQUF3QjtRQUF0RSxpQkE0QkM7UUE1Qm1CLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUY5RCxpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFHekMsbUVBQW1FO1FBQ25FLElBQU0saUJBQWlELEVBQS9DLDBCQUFVLEVBQUUsNENBQW1DLENBQUM7UUFDeEQsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDcEMseURBQXlEO1FBQ3pELElBQUksQ0FBQyxTQUFVLENBQUMsUUFBUSxDQUFDLDRCQUE0QixFQUFFLENBQUM7UUFDeEQsSUFBSSxDQUFDLFNBQVUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1lBQ2pGLEtBQUksQ0FBQyxTQUFVLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFNBQVUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQztZQUMzQyxJQUFJLFVBQVUsRUFBRTtnQkFDZCxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRO29CQUN4QixJQUFJLFFBQVEsS0FBSyxLQUFLLEVBQUU7d0JBQ3RCLEtBQUksQ0FBQyxTQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO3FCQUNsQztnQkFDSCxDQUFDLENBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLEtBQUksQ0FBQyxTQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ2xDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsU0FBVSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDL0UsS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUMxQixLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN0QixLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsNkNBQVcsR0FBWDtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVUsSUFBSSxJQUFJLENBQUMsU0FBVSxDQUFDLFFBQVEsQ0FBQztJQUNyRCxDQUFDO0lBRUQsOENBQVksR0FBWjtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksZUFBZSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBRUQsK0NBQWEsR0FBYixVQUFjLE9BQW1DO1FBQy9DLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVUsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUNILDhCQUFDO0FBQUQsQ0FBQyxBQS9DRCxJQStDQzs7QUFFRDtJQUVFLHlCQUFvQixPQUFnQjtRQUFoQixZQUFPLEdBQVAsT0FBTyxDQUFTO0lBQUcsQ0FBQztJQUV4QyxrQ0FBa0M7SUFDbEMsZ0NBQU0sR0FBTixVQUFrQyxPQUE4QjtRQUM5RCxPQUFPLElBQUksdUJBQXVCLENBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM3RSxDQUFDO2tGQU5VLGVBQWU7MkRBQWYsZUFBZSxXQUFmLGVBQWUsbUJBREYscUJBQXFCOzBCQW5FL0M7Q0EyRUMsQUFSRCxJQVFDO1NBUFksZUFBZTtrREFBZixlQUFlO2NBRDNCLFVBQVU7ZUFBQyxFQUFFLFVBQVUsRUFBRSxxQkFBcUIsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgT3ZlcmxheSwgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XHJcbmltcG9ydCB7IENvbXBvbmVudFJlZiwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgTnpEcmF3ZXJPcHRpb25zLCBOekRyYXdlck9wdGlvbnNPZkNvbXBvbmVudCB9IGZyb20gJy4vbnotZHJhd2VyLW9wdGlvbnMnO1xyXG5pbXBvcnQgeyBOekRyYXdlclJlZiB9IGZyb20gJy4vbnotZHJhd2VyLXJlZic7XHJcbmltcG9ydCB7IE56RHJhd2VyQ29tcG9uZW50IH0gZnJvbSAnLi9uei1kcmF3ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpEcmF3ZXJTZXJ2aWNlTW9kdWxlIH0gZnJvbSAnLi9uei1kcmF3ZXIuc2VydmljZS5tb2R1bGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIERyYXdlckJ1aWxkZXJGb3JTZXJ2aWNlPFI+IHtcclxuICBwcml2YXRlIGRyYXdlclJlZjogQ29tcG9uZW50UmVmPE56RHJhd2VyQ29tcG9uZW50PiB8IG51bGw7XHJcbiAgcHJpdmF0ZSBvdmVybGF5UmVmOiBPdmVybGF5UmVmO1xyXG4gIHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LCBwcml2YXRlIG9wdGlvbnM6IE56RHJhd2VyT3B0aW9ucykge1xyXG4gICAgLyoqIHBpY2sge0BsaW5rIE56RHJhd2VyT3B0aW9ucy5uek9uQ2FuY2VsfSBhbmQgb21pdCB0aGlzIG9wdGlvbiAqL1xyXG4gICAgY29uc3QgeyBuek9uQ2FuY2VsLCAuLi5jb21wb25lbnRPcHRpb24gfSA9IHRoaXMub3B0aW9ucztcclxuICAgIHRoaXMuY3JlYXRlRHJhd2VyKCk7XHJcbiAgICB0aGlzLnVwZGF0ZU9wdGlvbnMoY29tcG9uZW50T3B0aW9uKTtcclxuICAgIC8vIFByZXZlbnQgcmVwZWF0ZWRseSBvcGVuIGRyYXdlciB3aGVuIHRhcCBmb2N1cyBlbGVtZW50LlxyXG4gICAgdGhpcy5kcmF3ZXJSZWYhLmluc3RhbmNlLnNhdmVQcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQoKTtcclxuICAgIHRoaXMuZHJhd2VyUmVmIS5pbnN0YW5jZS5uek9uVmlld0luaXQucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmRyYXdlclJlZiEuaW5zdGFuY2Uub3BlbigpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmRyYXdlclJlZiEuaW5zdGFuY2UubnpPbkNsb3NlLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIGlmIChuek9uQ2FuY2VsKSB7XHJcbiAgICAgICAgbnpPbkNhbmNlbCgpLnRoZW4oY2FuQ2xvc2UgPT4ge1xyXG4gICAgICAgICAgaWYgKGNhbkNsb3NlICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdlclJlZiEuaW5zdGFuY2UuY2xvc2UoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmRyYXdlclJlZiEuaW5zdGFuY2UuY2xvc2UoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5kcmF3ZXJSZWYhLmluc3RhbmNlLmFmdGVyQ2xvc2UucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLm92ZXJsYXlSZWYuZGlzcG9zZSgpO1xyXG4gICAgICB0aGlzLmRyYXdlclJlZiA9IG51bGw7XHJcbiAgICAgIHRoaXMudW5zdWJzY3JpYmUkLm5leHQoKTtcclxuICAgICAgdGhpcy51bnN1YnNjcmliZSQuY29tcGxldGUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW5zdGFuY2UoKTogTnpEcmF3ZXJSZWY8Uj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZHJhd2VyUmVmISAmJiB0aGlzLmRyYXdlclJlZiEuaW5zdGFuY2U7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVEcmF3ZXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLm92ZXJsYXlSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKCk7XHJcbiAgICB0aGlzLmRyYXdlclJlZiA9IHRoaXMub3ZlcmxheVJlZi5hdHRhY2gobmV3IENvbXBvbmVudFBvcnRhbChOekRyYXdlckNvbXBvbmVudCkpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlT3B0aW9ucyhvcHRpb25zOiBOekRyYXdlck9wdGlvbnNPZkNvbXBvbmVudCk6IHZvaWQge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLmRyYXdlclJlZiEuaW5zdGFuY2UsIG9wdGlvbnMpO1xyXG4gIH1cclxufVxyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiBOekRyYXdlclNlcnZpY2VNb2R1bGUgfSlcclxuZXhwb3J0IGNsYXNzIE56RHJhd2VyU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5KSB7fVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgY3JlYXRlPFQgPSBhbnksIEQgPSBhbnksIFIgPSBhbnk+KG9wdGlvbnM6IE56RHJhd2VyT3B0aW9uczxULCBEPik6IE56RHJhd2VyUmVmPFI+IHtcclxuICAgIHJldHVybiBuZXcgRHJhd2VyQnVpbGRlckZvclNlcnZpY2U8Uj4odGhpcy5vdmVybGF5LCBvcHRpb25zKS5nZXRJbnN0YW5jZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=
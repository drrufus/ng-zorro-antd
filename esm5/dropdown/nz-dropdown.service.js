/**
 * @fileoverview added by tsickle
 * Generated from: nz-dropdown.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/** keep track https://github.com/angular/material2/issues/5007 **/
import { ConnectionPositionPair, Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { warnDeprecation } from 'ng-zorro-antd/core';
import { fromEvent } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { NzDropdownContextComponent } from './nz-dropdown-context.component';
import { NzDropdownServiceModule } from './nz-dropdown.service.module';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
import * as i2 from "./nz-dropdown.service.module";
var NzDropdownService = /** @class */ (function () {
    function NzDropdownService(overlay) {
        this.overlay = overlay;
        warnDeprecation("'NzDropdownService' is going to be removed in 9.0.0. Please use 'NzContextMenuService' instead. Read https://ng.ant.design/components/dropdown/en");
    }
    /**
     * @param {?} $event
     * @param {?} templateRef
     * @return {?}
     */
    NzDropdownService.prototype.create = /**
     * @param {?} $event
     * @param {?} templateRef
     * @return {?}
     */
    function ($event, templateRef) {
        var _this = this;
        $event.preventDefault();
        this.dispose();
        this.overlayRef = this.overlay.create(new OverlayConfig({
            scrollStrategy: this.overlay.scrollStrategies.close(),
            panelClass: 'nz-dropdown-panel',
            positionStrategy: this.overlay
                .position()
                .flexibleConnectedTo({
                x: $event.x,
                y: $event.y
            })
                .withPositions([
                new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'top' }),
                new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
                new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'bottom' }),
                new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'top' })
            ])
        }));
        /** @type {?} */
        var positionChanges = ((/** @type {?} */ (this.overlayRef.getConfig().positionStrategy)))
            .positionChanges;
        /** @type {?} */
        var instance = this.overlayRef.attach(new ComponentPortal(NzDropdownContextComponent)).instance;
        fromEvent(document, 'click')
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return !!_this.overlayRef && !_this.overlayRef.overlayElement.contains((/** @type {?} */ (event.target))); })), take(1))
            .subscribe((/**
         * @return {?}
         */
        function () { return instance.close(); }));
        instance.init(true, templateRef, positionChanges, this);
        return instance;
    };
    /**
     * @return {?}
     */
    NzDropdownService.prototype.dispose = /**
     * @return {?}
     */
    function () {
        if (this.overlayRef) {
            this.overlayRef.dispose();
            this.overlayRef = null;
        }
    };
    NzDropdownService.decorators = [
        { type: Injectable, args: [{
                    providedIn: NzDropdownServiceModule
                },] }
    ];
    /** @nocollapse */
    NzDropdownService.ctorParameters = function () { return [
        { type: Overlay }
    ]; };
    /** @nocollapse */ NzDropdownService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NzDropdownService_Factory() { return new NzDropdownService(i0.ɵɵinject(i1.Overlay)); }, token: NzDropdownService, providedIn: i2.NzDropdownServiceModule });
    return NzDropdownService;
}());
export { NzDropdownService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzDropdownService.prototype.overlayRef;
    /**
     * @type {?}
     * @private
     */
    NzDropdownService.prototype.overlay;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJvcGRvd24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZHJvcGRvd24vIiwic291cmNlcyI6WyJuei1kcm9wZG93bi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFTQSxPQUFPLEVBQ0wsc0JBQXNCLEVBRXRCLE9BQU8sRUFDUCxhQUFhLEVBRWQsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFVBQVUsRUFBZSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqQyxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7O0FBRXZFO0lBU0UsMkJBQW9CLE9BQWdCO1FBQWhCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDbEMsZUFBZSxDQUNiLG1KQUFtSixDQUNwSixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRUQsa0NBQU07Ozs7O0lBQU4sVUFBTyxNQUFrQixFQUFFLFdBQThCO1FBQXpELGlCQWdDQztRQS9CQyxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FDbkMsSUFBSSxhQUFhLENBQUM7WUFDaEIsY0FBYyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFO1lBQ3JELFVBQVUsRUFBRSxtQkFBbUI7WUFDL0IsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLE9BQU87aUJBQzNCLFFBQVEsRUFBRTtpQkFDVixtQkFBbUIsQ0FBQztnQkFDbkIsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUNYLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQzthQUNaLENBQUM7aUJBQ0QsYUFBYSxDQUFDO2dCQUNiLElBQUksc0JBQXNCLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDO2dCQUN4RyxJQUFJLHNCQUFzQixDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQztnQkFDM0csSUFBSSxzQkFBc0IsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUM7Z0JBQ3pHLElBQUksc0JBQXNCLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDO2FBQ3ZHLENBQUM7U0FDTCxDQUFDLENBQ0gsQ0FBQzs7WUFDSSxlQUFlLEdBQUcsQ0FBQyxtQkFBQSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixFQUFxQyxDQUFDO2FBQ3hHLGVBQWU7O1lBQ1osUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksZUFBZSxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxRQUFRO1FBQ2pHLFNBQVMsQ0FBYSxRQUFRLEVBQUUsT0FBTyxDQUFDO2FBQ3JDLElBQUksQ0FDSCxNQUFNOzs7O1FBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxDQUFDLENBQUMsS0FBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxtQkFBQSxLQUFLLENBQUMsTUFBTSxFQUFlLENBQUMsRUFBMUYsQ0FBMEYsRUFBQyxFQUMzRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1I7YUFDQSxTQUFTOzs7UUFBQyxjQUFNLE9BQUEsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFoQixDQUFnQixFQUFDLENBQUM7UUFDckMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4RCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQsbUNBQU87OztJQUFQO1FBQ0UsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7U0FDeEI7SUFDSCxDQUFDOztnQkF0REYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSx1QkFBdUI7aUJBQ3BDOzs7O2dCQWRDLE9BQU87Ozs0QkFaVDtDQStFQyxBQXZERCxJQXVEQztTQWpEWSxpQkFBaUI7Ozs7OztJQUM1Qix1Q0FBc0M7Ozs7O0lBRTFCLG9DQUF3QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuLyoqIGtlZXAgdHJhY2sgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvbWF0ZXJpYWwyL2lzc3Vlcy81MDA3ICoqL1xyXG5pbXBvcnQge1xyXG4gIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIsXHJcbiAgRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5LFxyXG4gIE92ZXJsYXksXHJcbiAgT3ZlcmxheUNvbmZpZyxcclxuICBPdmVybGF5UmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgd2FybkRlcHJlY2F0aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpbHRlciwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgTnpEcm9wZG93bkNvbnRleHRDb21wb25lbnQgfSBmcm9tICcuL256LWRyb3Bkb3duLWNvbnRleHQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpEcm9wZG93blNlcnZpY2VNb2R1bGUgfSBmcm9tICcuL256LWRyb3Bkb3duLnNlcnZpY2UubW9kdWxlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiBOekRyb3Bkb3duU2VydmljZU1vZHVsZVxyXG59KVxyXG4vKipcclxuICogQGRlcHJlY2F0ZWQgVXNlIGBOekNvbnRleHRNZW51U2VydmljZWAgaW5zdGVhZC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBOekRyb3Bkb3duU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBvdmVybGF5UmVmOiBPdmVybGF5UmVmIHwgbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5KSB7XHJcbiAgICB3YXJuRGVwcmVjYXRpb24oXHJcbiAgICAgIGAnTnpEcm9wZG93blNlcnZpY2UnIGlzIGdvaW5nIHRvIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFBsZWFzZSB1c2UgJ056Q29udGV4dE1lbnVTZXJ2aWNlJyBpbnN0ZWFkLiBSZWFkIGh0dHBzOi8vbmcuYW50LmRlc2lnbi9jb21wb25lbnRzL2Ryb3Bkb3duL2VuYFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZSgkZXZlbnQ6IE1vdXNlRXZlbnQsIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjx2b2lkPik6IE56RHJvcGRvd25Db250ZXh0Q29tcG9uZW50IHtcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5kaXNwb3NlKCk7XHJcbiAgICB0aGlzLm92ZXJsYXlSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKFxyXG4gICAgICBuZXcgT3ZlcmxheUNvbmZpZyh7XHJcbiAgICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmNsb3NlKCksXHJcbiAgICAgICAgcGFuZWxDbGFzczogJ256LWRyb3Bkb3duLXBhbmVsJyxcclxuICAgICAgICBwb3NpdGlvblN0cmF0ZWd5OiB0aGlzLm92ZXJsYXlcclxuICAgICAgICAgIC5wb3NpdGlvbigpXHJcbiAgICAgICAgICAuZmxleGlibGVDb25uZWN0ZWRUbyh7XHJcbiAgICAgICAgICAgIHg6ICRldmVudC54LFxyXG4gICAgICAgICAgICB5OiAkZXZlbnQueVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC53aXRoUG9zaXRpb25zKFtcclxuICAgICAgICAgICAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAndG9wJyB9LCB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ3RvcCcgfSksXHJcbiAgICAgICAgICAgIG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ3RvcCcgfSwgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICdib3R0b20nIH0pLFxyXG4gICAgICAgICAgICBuZXcgQ29ubmVjdGlvblBvc2l0aW9uUGFpcih7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICd0b3AnIH0sIHsgb3ZlcmxheVg6ICdlbmQnLCBvdmVybGF5WTogJ2JvdHRvbScgfSksXHJcbiAgICAgICAgICAgIG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ3RvcCcgfSwgeyBvdmVybGF5WDogJ2VuZCcsIG92ZXJsYXlZOiAndG9wJyB9KVxyXG4gICAgICAgICAgXSlcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgICBjb25zdCBwb3NpdGlvbkNoYW5nZXMgPSAodGhpcy5vdmVybGF5UmVmLmdldENvbmZpZygpLnBvc2l0aW9uU3RyYXRlZ3kgYXMgRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5KVxyXG4gICAgICAucG9zaXRpb25DaGFuZ2VzO1xyXG4gICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLm92ZXJsYXlSZWYuYXR0YWNoKG5ldyBDb21wb25lbnRQb3J0YWwoTnpEcm9wZG93bkNvbnRleHRDb21wb25lbnQpKS5pbnN0YW5jZTtcclxuICAgIGZyb21FdmVudDxNb3VzZUV2ZW50Pihkb2N1bWVudCwgJ2NsaWNrJylcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgZmlsdGVyKGV2ZW50ID0+ICEhdGhpcy5vdmVybGF5UmVmICYmICF0aGlzLm92ZXJsYXlSZWYub3ZlcmxheUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KSksXHJcbiAgICAgICAgdGFrZSgxKVxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gaW5zdGFuY2UuY2xvc2UoKSk7XHJcbiAgICBpbnN0YW5jZS5pbml0KHRydWUsIHRlbXBsYXRlUmVmLCBwb3NpdGlvbkNoYW5nZXMsIHRoaXMpO1xyXG4gICAgcmV0dXJuIGluc3RhbmNlO1xyXG4gIH1cclxuXHJcbiAgZGlzcG9zZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYpIHtcclxuICAgICAgdGhpcy5vdmVybGF5UmVmLmRpc3Bvc2UoKTtcclxuICAgICAgdGhpcy5vdmVybGF5UmVmID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19
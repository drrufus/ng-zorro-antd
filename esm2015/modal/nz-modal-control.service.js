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
import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Subject } from 'rxjs';
import { NzModalControlServiceModule } from './nz-modal-control.service.module';
import * as i0 from "@angular/core";
import * as i1 from "./nz-modal-control.service.module";
/**
 * @record
 */
function RegisteredMeta() { }
if (false) {
    /** @type {?} */
    RegisteredMeta.prototype.modalRef;
    /** @type {?} */
    RegisteredMeta.prototype.afterOpenSubscription;
    /** @type {?} */
    RegisteredMeta.prototype.afterCloseSubscription;
}
export class NzModalControlService {
    /**
     * @param {?} parentService
     */
    constructor(parentService) {
        this.parentService = parentService;
        this.rootOpenModals = this.parentService ? null : [];
        this.rootAfterAllClose = this.parentService ? null : new Subject();
        this.rootRegisteredMetaMap = this.parentService ? null : new Map();
    }
    // Track singleton afterAllClose through over the injection tree
    /**
     * @return {?}
     */
    get afterAllClose() {
        return this.parentService ? this.parentService.afterAllClose : (/** @type {?} */ (this.rootAfterAllClose));
    }
    // Track singleton openModals array through over the injection tree
    /**
     * @return {?}
     */
    get openModals() {
        return this.parentService ? this.parentService.openModals : (/** @type {?} */ (this.rootOpenModals));
    }
    /**
     * @private
     * @return {?}
     */
    get registeredMetaMap() {
        // Registered modal for later usage
        return this.parentService ? this.parentService.registeredMetaMap : (/** @type {?} */ (this.rootRegisteredMetaMap));
    }
    // Register a modal to listen its open/close
    /**
     * @param {?} modalRef
     * @return {?}
     */
    registerModal(modalRef) {
        if (!this.hasRegistered(modalRef)) {
            /** @type {?} */
            const afterOpenSubscription = modalRef.afterOpen.subscribe((/**
             * @return {?}
             */
            () => this.openModals.push(modalRef)));
            /** @type {?} */
            const afterCloseSubscription = modalRef.afterClose.subscribe((/**
             * @return {?}
             */
            () => this.removeOpenModal(modalRef)));
            this.registeredMetaMap.set(modalRef, { modalRef, afterOpenSubscription, afterCloseSubscription });
        }
    }
    // deregister modals
    /**
     * @param {?} modalRef
     * @return {?}
     */
    deregisterModal(modalRef) {
        /** @type {?} */
        const registeredMeta = this.registeredMetaMap.get(modalRef);
        if (registeredMeta) {
            // Remove this modal if it is still in the opened modal list (NOTE: it may trigger "afterAllClose")
            this.removeOpenModal(registeredMeta.modalRef);
            registeredMeta.afterOpenSubscription.unsubscribe();
            registeredMeta.afterCloseSubscription.unsubscribe();
            this.registeredMetaMap.delete(modalRef);
        }
    }
    /**
     * @param {?} modalRef
     * @return {?}
     */
    hasRegistered(modalRef) {
        return this.registeredMetaMap.has(modalRef);
    }
    // Close all registered opened modals
    /**
     * @return {?}
     */
    closeAll() {
        /** @type {?} */
        let i = this.openModals.length;
        while (i--) {
            this.openModals[i].close();
        }
    }
    /**
     * @private
     * @param {?} modalRef
     * @return {?}
     */
    removeOpenModal(modalRef) {
        /** @type {?} */
        const index = this.openModals.indexOf(modalRef);
        if (index > -1) {
            this.openModals.splice(index, 1);
            if (!this.openModals.length) {
                this.afterAllClose.next();
            }
        }
    }
}
NzModalControlService.decorators = [
    { type: Injectable, args: [{
                providedIn: NzModalControlServiceModule
            },] }
];
/** @nocollapse */
NzModalControlService.ctorParameters = () => [
    { type: NzModalControlService, decorators: [{ type: Optional }, { type: SkipSelf }] }
];
/** @nocollapse */ NzModalControlService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NzModalControlService_Factory() { return new NzModalControlService(i0.ɵɵinject(NzModalControlService, 12)); }, token: NzModalControlService, providedIn: i1.NzModalControlServiceModule });
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzModalControlService.prototype.rootOpenModals;
    /**
     * @type {?}
     * @private
     */
    NzModalControlService.prototype.rootAfterAllClose;
    /**
     * @type {?}
     * @private
     */
    NzModalControlService.prototype.rootRegisteredMetaMap;
    /**
     * @type {?}
     * @private
     */
    NzModalControlService.prototype.parentService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbW9kYWwtY29udHJvbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9tb2RhbC8iLCJzb3VyY2VzIjpbIm56LW1vZGFsLWNvbnRyb2wuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRCxPQUFPLEVBQUUsT0FBTyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUU3QyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7Ozs7O0FBR2hGLDZCQUlDOzs7SUFIQyxrQ0FBcUI7O0lBQ3JCLCtDQUFvQzs7SUFDcEMsZ0RBQXFDOztBQU12QyxNQUFNLE9BQU8scUJBQXFCOzs7O0lBb0JoQyxZQUE0QyxhQUFvQztRQUFwQyxrQkFBYSxHQUFiLGFBQWEsQ0FBdUI7UUFUeEUsbUJBQWMsR0FBd0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDckUsc0JBQWlCLEdBQXlCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUMxRiwwQkFBcUIsR0FBMkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBTzNCLENBQUM7Ozs7O0lBbEJwRixJQUFJLGFBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxtQkFBQSxJQUFJLENBQUMsaUJBQWlCLEVBQUMsQ0FBQztJQUN6RixDQUFDOzs7OztJQUdELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLG1CQUFBLElBQUksQ0FBQyxjQUFjLEVBQUMsQ0FBQztJQUNuRixDQUFDOzs7OztJQU1ELElBQVksaUJBQWlCO1FBQzNCLG1DQUFtQztRQUNuQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLG1CQUFBLElBQUksQ0FBQyxxQkFBcUIsRUFBQyxDQUFDO0lBQ2pHLENBQUM7Ozs7OztJQUtELGFBQWEsQ0FBQyxRQUFvQjtRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBRTs7a0JBQzNCLHFCQUFxQixHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsU0FBUzs7O1lBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUM7O2tCQUMxRixzQkFBc0IsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDLFNBQVM7OztZQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEVBQUM7WUFFbEcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxRQUFRLEVBQUUscUJBQXFCLEVBQUUsc0JBQXNCLEVBQUUsQ0FBQyxDQUFDO1NBQ25HO0lBQ0gsQ0FBQzs7Ozs7O0lBR0QsZUFBZSxDQUFDLFFBQW9COztjQUM1QixjQUFjLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7UUFDM0QsSUFBSSxjQUFjLEVBQUU7WUFDbEIsbUdBQW1HO1lBQ25HLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzlDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuRCxjQUFjLENBQUMsc0JBQXNCLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDcEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN6QztJQUNILENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLFFBQW9CO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7OztJQUdELFFBQVE7O1lBQ0YsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTTtRQUU5QixPQUFPLENBQUMsRUFBRSxFQUFFO1lBQ1YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUM1QjtJQUNILENBQUM7Ozs7OztJQUVPLGVBQWUsQ0FBQyxRQUFvQjs7Y0FDcEMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUUvQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNkLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUVqQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDM0I7U0FDRjtJQUNILENBQUM7OztZQXRFRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLDJCQUEyQjthQUN4Qzs7OztZQXFCNEQscUJBQXFCLHVCQUFuRSxRQUFRLFlBQUksUUFBUTs7Ozs7Ozs7SUFUakMsK0NBQTZFOzs7OztJQUM3RSxrREFBa0c7Ozs7O0lBQ2xHLHNEQUE4Rzs7Ozs7SUFPbEcsOENBQW9FIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBOek1vZGFsQ29udHJvbFNlcnZpY2VNb2R1bGUgfSBmcm9tICcuL256LW1vZGFsLWNvbnRyb2wuc2VydmljZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBOek1vZGFsUmVmIH0gZnJvbSAnLi9uei1tb2RhbC1yZWYuY2xhc3MnO1xyXG5cclxuaW50ZXJmYWNlIFJlZ2lzdGVyZWRNZXRhIHtcclxuICBtb2RhbFJlZjogTnpNb2RhbFJlZjtcclxuICBhZnRlck9wZW5TdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICBhZnRlckNsb3NlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiBOek1vZGFsQ29udHJvbFNlcnZpY2VNb2R1bGVcclxufSlcclxuZXhwb3J0IGNsYXNzIE56TW9kYWxDb250cm9sU2VydmljZSB7XHJcbiAgLy8gVHJhY2sgc2luZ2xldG9uIGFmdGVyQWxsQ2xvc2UgdGhyb3VnaCBvdmVyIHRoZSBpbmplY3Rpb24gdHJlZVxyXG4gIGdldCBhZnRlckFsbENsb3NlKCk6IFN1YmplY3Q8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMucGFyZW50U2VydmljZSA/IHRoaXMucGFyZW50U2VydmljZS5hZnRlckFsbENsb3NlIDogdGhpcy5yb290QWZ0ZXJBbGxDbG9zZSE7XHJcbiAgfVxyXG5cclxuICAvLyBUcmFjayBzaW5nbGV0b24gb3Blbk1vZGFscyBhcnJheSB0aHJvdWdoIG92ZXIgdGhlIGluamVjdGlvbiB0cmVlXHJcbiAgZ2V0IG9wZW5Nb2RhbHMoKTogTnpNb2RhbFJlZltdIHtcclxuICAgIHJldHVybiB0aGlzLnBhcmVudFNlcnZpY2UgPyB0aGlzLnBhcmVudFNlcnZpY2Uub3Blbk1vZGFscyA6IHRoaXMucm9vdE9wZW5Nb2RhbHMhO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByb290T3Blbk1vZGFsczogTnpNb2RhbFJlZltdIHwgbnVsbCA9IHRoaXMucGFyZW50U2VydmljZSA/IG51bGwgOiBbXTtcclxuICBwcml2YXRlIHJvb3RBZnRlckFsbENsb3NlOiBTdWJqZWN0PHZvaWQ+IHwgbnVsbCA9IHRoaXMucGFyZW50U2VydmljZSA/IG51bGwgOiBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIHByaXZhdGUgcm9vdFJlZ2lzdGVyZWRNZXRhTWFwOiBNYXA8TnpNb2RhbFJlZiwgUmVnaXN0ZXJlZE1ldGE+IHwgbnVsbCA9IHRoaXMucGFyZW50U2VydmljZSA/IG51bGwgOiBuZXcgTWFwKCk7XHJcblxyXG4gIHByaXZhdGUgZ2V0IHJlZ2lzdGVyZWRNZXRhTWFwKCk6IE1hcDxOek1vZGFsUmVmLCBSZWdpc3RlcmVkTWV0YT4ge1xyXG4gICAgLy8gUmVnaXN0ZXJlZCBtb2RhbCBmb3IgbGF0ZXIgdXNhZ2VcclxuICAgIHJldHVybiB0aGlzLnBhcmVudFNlcnZpY2UgPyB0aGlzLnBhcmVudFNlcnZpY2UucmVnaXN0ZXJlZE1ldGFNYXAgOiB0aGlzLnJvb3RSZWdpc3RlcmVkTWV0YU1hcCE7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwcml2YXRlIHBhcmVudFNlcnZpY2U6IE56TW9kYWxDb250cm9sU2VydmljZSkge31cclxuXHJcbiAgLy8gUmVnaXN0ZXIgYSBtb2RhbCB0byBsaXN0ZW4gaXRzIG9wZW4vY2xvc2VcclxuICByZWdpc3Rlck1vZGFsKG1vZGFsUmVmOiBOek1vZGFsUmVmKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuaGFzUmVnaXN0ZXJlZChtb2RhbFJlZikpIHtcclxuICAgICAgY29uc3QgYWZ0ZXJPcGVuU3Vic2NyaXB0aW9uID0gbW9kYWxSZWYuYWZ0ZXJPcGVuLnN1YnNjcmliZSgoKSA9PiB0aGlzLm9wZW5Nb2RhbHMucHVzaChtb2RhbFJlZikpO1xyXG4gICAgICBjb25zdCBhZnRlckNsb3NlU3Vic2NyaXB0aW9uID0gbW9kYWxSZWYuYWZ0ZXJDbG9zZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZW1vdmVPcGVuTW9kYWwobW9kYWxSZWYpKTtcclxuXHJcbiAgICAgIHRoaXMucmVnaXN0ZXJlZE1ldGFNYXAuc2V0KG1vZGFsUmVmLCB7IG1vZGFsUmVmLCBhZnRlck9wZW5TdWJzY3JpcHRpb24sIGFmdGVyQ2xvc2VTdWJzY3JpcHRpb24gfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBkZXJlZ2lzdGVyIG1vZGFsc1xyXG4gIGRlcmVnaXN0ZXJNb2RhbChtb2RhbFJlZjogTnpNb2RhbFJlZik6IHZvaWQge1xyXG4gICAgY29uc3QgcmVnaXN0ZXJlZE1ldGEgPSB0aGlzLnJlZ2lzdGVyZWRNZXRhTWFwLmdldChtb2RhbFJlZik7XHJcbiAgICBpZiAocmVnaXN0ZXJlZE1ldGEpIHtcclxuICAgICAgLy8gUmVtb3ZlIHRoaXMgbW9kYWwgaWYgaXQgaXMgc3RpbGwgaW4gdGhlIG9wZW5lZCBtb2RhbCBsaXN0IChOT1RFOiBpdCBtYXkgdHJpZ2dlciBcImFmdGVyQWxsQ2xvc2VcIilcclxuICAgICAgdGhpcy5yZW1vdmVPcGVuTW9kYWwocmVnaXN0ZXJlZE1ldGEubW9kYWxSZWYpO1xyXG4gICAgICByZWdpc3RlcmVkTWV0YS5hZnRlck9wZW5TdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgcmVnaXN0ZXJlZE1ldGEuYWZ0ZXJDbG9zZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICB0aGlzLnJlZ2lzdGVyZWRNZXRhTWFwLmRlbGV0ZShtb2RhbFJlZik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYXNSZWdpc3RlcmVkKG1vZGFsUmVmOiBOek1vZGFsUmVmKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5yZWdpc3RlcmVkTWV0YU1hcC5oYXMobW9kYWxSZWYpO1xyXG4gIH1cclxuXHJcbiAgLy8gQ2xvc2UgYWxsIHJlZ2lzdGVyZWQgb3BlbmVkIG1vZGFsc1xyXG4gIGNsb3NlQWxsKCk6IHZvaWQge1xyXG4gICAgbGV0IGkgPSB0aGlzLm9wZW5Nb2RhbHMubGVuZ3RoO1xyXG5cclxuICAgIHdoaWxlIChpLS0pIHtcclxuICAgICAgdGhpcy5vcGVuTW9kYWxzW2ldLmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbW92ZU9wZW5Nb2RhbChtb2RhbFJlZjogTnpNb2RhbFJlZik6IHZvaWQge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLm9wZW5Nb2RhbHMuaW5kZXhPZihtb2RhbFJlZik7XHJcblxyXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgdGhpcy5vcGVuTW9kYWxzLnNwbGljZShpbmRleCwgMSk7XHJcblxyXG4gICAgICBpZiAoIXRoaXMub3Blbk1vZGFscy5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLmFmdGVyQWxsQ2xvc2UubmV4dCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==
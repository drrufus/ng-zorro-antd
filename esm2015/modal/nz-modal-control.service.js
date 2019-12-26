/**
 * @fileoverview added by tsickle
 * Generated from: nz-modal-control.service.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbW9kYWwtY29udHJvbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9tb2RhbC8iLCJzb3VyY2VzIjpbIm56LW1vZGFsLWNvbnRyb2wuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0QsT0FBTyxFQUFFLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFFN0MsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7Ozs7OztBQUdoRiw2QkFJQzs7O0lBSEMsa0NBQXFCOztJQUNyQiwrQ0FBb0M7O0lBQ3BDLGdEQUFxQzs7QUFNdkMsTUFBTSxPQUFPLHFCQUFxQjs7OztJQW9CaEMsWUFBNEMsYUFBb0M7UUFBcEMsa0JBQWEsR0FBYixhQUFhLENBQXVCO1FBVHhFLG1CQUFjLEdBQXdCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3JFLHNCQUFpQixHQUF5QixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksT0FBTyxFQUFRLENBQUM7UUFDMUYsMEJBQXFCLEdBQTJDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQU8zQixDQUFDOzs7OztJQWxCcEYsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsbUJBQUEsSUFBSSxDQUFDLGlCQUFpQixFQUFDLENBQUM7SUFDekYsQ0FBQzs7Ozs7SUFHRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxtQkFBQSxJQUFJLENBQUMsY0FBYyxFQUFDLENBQUM7SUFDbkYsQ0FBQzs7Ozs7SUFNRCxJQUFZLGlCQUFpQjtRQUMzQixtQ0FBbUM7UUFDbkMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxtQkFBQSxJQUFJLENBQUMscUJBQXFCLEVBQUMsQ0FBQztJQUNqRyxDQUFDOzs7Ozs7SUFLRCxhQUFhLENBQUMsUUFBb0I7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQUU7O2tCQUMzQixxQkFBcUIsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLFNBQVM7OztZQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDOztrQkFDMUYsc0JBQXNCLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxTQUFTOzs7WUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxFQUFDO1lBRWxHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEVBQUUsUUFBUSxFQUFFLHFCQUFxQixFQUFFLHNCQUFzQixFQUFFLENBQUMsQ0FBQztTQUNuRztJQUNILENBQUM7Ozs7OztJQUdELGVBQWUsQ0FBQyxRQUFvQjs7Y0FDNUIsY0FBYyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDO1FBQzNELElBQUksY0FBYyxFQUFFO1lBQ2xCLG1HQUFtRztZQUNuRyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM5QyxjQUFjLENBQUMscUJBQXFCLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkQsY0FBYyxDQUFDLHNCQUFzQixDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3BELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDekM7SUFDSCxDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxRQUFvQjtRQUNoQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Ozs7SUFHRCxRQUFROztZQUNGLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU07UUFFOUIsT0FBTyxDQUFDLEVBQUUsRUFBRTtZQUNWLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDNUI7SUFDSCxDQUFDOzs7Ozs7SUFFTyxlQUFlLENBQUMsUUFBb0I7O2NBQ3BDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFFL0MsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDZCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFakMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFO2dCQUMzQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQzNCO1NBQ0Y7SUFDSCxDQUFDOzs7WUF0RUYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSwyQkFBMkI7YUFDeEM7Ozs7WUFxQjRELHFCQUFxQix1QkFBbkUsUUFBUSxZQUFJLFFBQVE7Ozs7Ozs7O0lBVGpDLCtDQUE2RTs7Ozs7SUFDN0Usa0RBQWtHOzs7OztJQUNsRyxzREFBOEc7Ozs7O0lBT2xHLDhDQUFvRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgTnpNb2RhbENvbnRyb2xTZXJ2aWNlTW9kdWxlIH0gZnJvbSAnLi9uei1tb2RhbC1jb250cm9sLnNlcnZpY2UubW9kdWxlJztcclxuaW1wb3J0IHsgTnpNb2RhbFJlZiB9IGZyb20gJy4vbnotbW9kYWwtcmVmLmNsYXNzJztcclxuXHJcbmludGVyZmFjZSBSZWdpc3RlcmVkTWV0YSB7XHJcbiAgbW9kYWxSZWY6IE56TW9kYWxSZWY7XHJcbiAgYWZ0ZXJPcGVuU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgYWZ0ZXJDbG9zZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogTnpNb2RhbENvbnRyb2xTZXJ2aWNlTW9kdWxlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOek1vZGFsQ29udHJvbFNlcnZpY2Uge1xyXG4gIC8vIFRyYWNrIHNpbmdsZXRvbiBhZnRlckFsbENsb3NlIHRocm91Z2ggb3ZlciB0aGUgaW5qZWN0aW9uIHRyZWVcclxuICBnZXQgYWZ0ZXJBbGxDbG9zZSgpOiBTdWJqZWN0PHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLnBhcmVudFNlcnZpY2UgPyB0aGlzLnBhcmVudFNlcnZpY2UuYWZ0ZXJBbGxDbG9zZSA6IHRoaXMucm9vdEFmdGVyQWxsQ2xvc2UhO1xyXG4gIH1cclxuXHJcbiAgLy8gVHJhY2sgc2luZ2xldG9uIG9wZW5Nb2RhbHMgYXJyYXkgdGhyb3VnaCBvdmVyIHRoZSBpbmplY3Rpb24gdHJlZVxyXG4gIGdldCBvcGVuTW9kYWxzKCk6IE56TW9kYWxSZWZbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5wYXJlbnRTZXJ2aWNlID8gdGhpcy5wYXJlbnRTZXJ2aWNlLm9wZW5Nb2RhbHMgOiB0aGlzLnJvb3RPcGVuTW9kYWxzITtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcm9vdE9wZW5Nb2RhbHM6IE56TW9kYWxSZWZbXSB8IG51bGwgPSB0aGlzLnBhcmVudFNlcnZpY2UgPyBudWxsIDogW107XHJcbiAgcHJpdmF0ZSByb290QWZ0ZXJBbGxDbG9zZTogU3ViamVjdDx2b2lkPiB8IG51bGwgPSB0aGlzLnBhcmVudFNlcnZpY2UgPyBudWxsIDogbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBwcml2YXRlIHJvb3RSZWdpc3RlcmVkTWV0YU1hcDogTWFwPE56TW9kYWxSZWYsIFJlZ2lzdGVyZWRNZXRhPiB8IG51bGwgPSB0aGlzLnBhcmVudFNlcnZpY2UgPyBudWxsIDogbmV3IE1hcCgpO1xyXG5cclxuICBwcml2YXRlIGdldCByZWdpc3RlcmVkTWV0YU1hcCgpOiBNYXA8TnpNb2RhbFJlZiwgUmVnaXN0ZXJlZE1ldGE+IHtcclxuICAgIC8vIFJlZ2lzdGVyZWQgbW9kYWwgZm9yIGxhdGVyIHVzYWdlXHJcbiAgICByZXR1cm4gdGhpcy5wYXJlbnRTZXJ2aWNlID8gdGhpcy5wYXJlbnRTZXJ2aWNlLnJlZ2lzdGVyZWRNZXRhTWFwIDogdGhpcy5yb290UmVnaXN0ZXJlZE1ldGFNYXAhO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcHJpdmF0ZSBwYXJlbnRTZXJ2aWNlOiBOek1vZGFsQ29udHJvbFNlcnZpY2UpIHt9XHJcblxyXG4gIC8vIFJlZ2lzdGVyIGEgbW9kYWwgdG8gbGlzdGVuIGl0cyBvcGVuL2Nsb3NlXHJcbiAgcmVnaXN0ZXJNb2RhbChtb2RhbFJlZjogTnpNb2RhbFJlZik6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmhhc1JlZ2lzdGVyZWQobW9kYWxSZWYpKSB7XHJcbiAgICAgIGNvbnN0IGFmdGVyT3BlblN1YnNjcmlwdGlvbiA9IG1vZGFsUmVmLmFmdGVyT3Blbi5zdWJzY3JpYmUoKCkgPT4gdGhpcy5vcGVuTW9kYWxzLnB1c2gobW9kYWxSZWYpKTtcclxuICAgICAgY29uc3QgYWZ0ZXJDbG9zZVN1YnNjcmlwdGlvbiA9IG1vZGFsUmVmLmFmdGVyQ2xvc2Uuc3Vic2NyaWJlKCgpID0+IHRoaXMucmVtb3ZlT3Blbk1vZGFsKG1vZGFsUmVmKSk7XHJcblxyXG4gICAgICB0aGlzLnJlZ2lzdGVyZWRNZXRhTWFwLnNldChtb2RhbFJlZiwgeyBtb2RhbFJlZiwgYWZ0ZXJPcGVuU3Vic2NyaXB0aW9uLCBhZnRlckNsb3NlU3Vic2NyaXB0aW9uIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gZGVyZWdpc3RlciBtb2RhbHNcclxuICBkZXJlZ2lzdGVyTW9kYWwobW9kYWxSZWY6IE56TW9kYWxSZWYpOiB2b2lkIHtcclxuICAgIGNvbnN0IHJlZ2lzdGVyZWRNZXRhID0gdGhpcy5yZWdpc3RlcmVkTWV0YU1hcC5nZXQobW9kYWxSZWYpO1xyXG4gICAgaWYgKHJlZ2lzdGVyZWRNZXRhKSB7XHJcbiAgICAgIC8vIFJlbW92ZSB0aGlzIG1vZGFsIGlmIGl0IGlzIHN0aWxsIGluIHRoZSBvcGVuZWQgbW9kYWwgbGlzdCAoTk9URTogaXQgbWF5IHRyaWdnZXIgXCJhZnRlckFsbENsb3NlXCIpXHJcbiAgICAgIHRoaXMucmVtb3ZlT3Blbk1vZGFsKHJlZ2lzdGVyZWRNZXRhLm1vZGFsUmVmKTtcclxuICAgICAgcmVnaXN0ZXJlZE1ldGEuYWZ0ZXJPcGVuU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIHJlZ2lzdGVyZWRNZXRhLmFmdGVyQ2xvc2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgdGhpcy5yZWdpc3RlcmVkTWV0YU1hcC5kZWxldGUobW9kYWxSZWYpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFzUmVnaXN0ZXJlZChtb2RhbFJlZjogTnpNb2RhbFJlZik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMucmVnaXN0ZXJlZE1ldGFNYXAuaGFzKG1vZGFsUmVmKTtcclxuICB9XHJcblxyXG4gIC8vIENsb3NlIGFsbCByZWdpc3RlcmVkIG9wZW5lZCBtb2RhbHNcclxuICBjbG9zZUFsbCgpOiB2b2lkIHtcclxuICAgIGxldCBpID0gdGhpcy5vcGVuTW9kYWxzLmxlbmd0aDtcclxuXHJcbiAgICB3aGlsZSAoaS0tKSB7XHJcbiAgICAgIHRoaXMub3Blbk1vZGFsc1tpXS5jbG9zZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVPcGVuTW9kYWwobW9kYWxSZWY6IE56TW9kYWxSZWYpOiB2b2lkIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5vcGVuTW9kYWxzLmluZGV4T2YobW9kYWxSZWYpO1xyXG5cclxuICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgIHRoaXMub3Blbk1vZGFscy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cclxuICAgICAgaWYgKCF0aGlzLm9wZW5Nb2RhbHMubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5hZnRlckFsbENsb3NlLm5leHQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=
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
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { warn } from 'ng-zorro-antd/core';
import { NzModalControlService } from './nz-modal-control.service';
import { NzModalComponent } from './nz-modal.component';
import { NzModalServiceModule } from './nz-modal.service.module';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
import * as i2 from "./nz-modal-control.service";
import * as i3 from "./nz-modal.service.module";
// A builder used for managing service creating modals
export class ModalBuilderForService {
    /**
     * @param {?} overlay
     * @param {?=} options
     */
    constructor(overlay, options = {}) {
        this.overlay = overlay;
        this.createModal();
        if (!('nzGetContainer' in options)) {
            // As we use CDK to create modal in service by force, there is no need to use nzGetContainer
            options.nzGetContainer = undefined; // Override nzGetContainer's default value to prevent creating another overlay
        }
        this.changeProps(options);
        (/** @type {?} */ (this.modalRef)).instance.setOverlayRef(this.overlayRef);
        (/** @type {?} */ (this.modalRef)).instance.open();
        (/** @type {?} */ (this.modalRef)).instance.nzAfterClose.subscribe((/**
         * @return {?}
         */
        () => this.destroyModal())); // [NOTE] By default, close equals destroy when using as Service
    }
    /**
     * @return {?}
     */
    getInstance() {
        return this.modalRef && this.modalRef.instance;
    }
    /**
     * @return {?}
     */
    destroyModal() {
        if (this.modalRef) {
            this.overlayRef.dispose();
            this.modalRef = null;
        }
    }
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    changeProps(options) {
        if (this.modalRef) {
            Object.assign(this.modalRef.instance, options); // DANGER: here not limit user's inputs at runtime
        }
    }
    // Create component to ApplicationRef
    /**
     * @private
     * @return {?}
     */
    createModal() {
        this.overlayRef = this.overlay.create();
        this.modalRef = this.overlayRef.attach(new ComponentPortal(NzModalComponent));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ModalBuilderForService.prototype.modalRef;
    /**
     * @type {?}
     * @private
     */
    ModalBuilderForService.prototype.overlayRef;
    /**
     * @type {?}
     * @private
     */
    ModalBuilderForService.prototype.overlay;
}
export class NzModalService {
    /**
     * @param {?} overlay
     * @param {?} modalControl
     */
    constructor(overlay, modalControl) {
        this.overlay = overlay;
        this.modalControl = modalControl;
    }
    // Track of the current close modals (we assume invisible is close this time)
    /**
     * @return {?}
     */
    get openModals() {
        return this.modalControl.openModals;
    }
    /**
     * @return {?}
     */
    get afterAllClose() {
        return this.modalControl.afterAllClose.asObservable();
    }
    // Closes all of the currently-open dialogs
    /**
     * @return {?}
     */
    closeAll() {
        this.modalControl.closeAll();
    }
    /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    create(options = {}) {
        if (typeof options.nzOnCancel !== 'function') {
            options.nzOnCancel = (/**
             * @return {?}
             */
            () => { }); // Leave a empty function to close this modal by default
        }
        // NOTE: use NzModalComponent as the NzModalRef by now, we may need archive the real NzModalRef object in the future
        /** @type {?} */
        const modalRef = (/** @type {?} */ (new ModalBuilderForService(this.overlay, options).getInstance()));
        return modalRef;
    }
    /**
     * @template T
     * @param {?=} options
     * @param {?=} confirmType
     * @return {?}
     */
    confirm(options = {}, confirmType = 'confirm') {
        if ('nzFooter' in options) {
            warn(`The Confirm-Modal doesn't support "nzFooter", this property will be ignored.`);
        }
        if (!('nzWidth' in options)) {
            options.nzWidth = 416;
        }
        if (!('nzMaskClosable' in options)) {
            options.nzMaskClosable = false;
        }
        if (typeof options.nzOnOk !== 'function') {
            // NOTE: only support function currently by calling confirm()
            options.nzOnOk = (/**
             * @return {?}
             */
            () => { }); // Leave a empty function to close this modal by default
        }
        options.nzModalType = 'confirm';
        options.nzClassName = `ant-modal-confirm ant-modal-confirm-${confirmType} ${options.nzClassName || ''}`;
        return this.create(options);
    }
    /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    info(options = {}) {
        return this.simpleConfirm(options, 'info');
    }
    /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    success(options = {}) {
        return this.simpleConfirm(options, 'success');
    }
    /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    error(options = {}) {
        return this.simpleConfirm(options, 'error');
    }
    /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    warning(options = {}) {
        return this.simpleConfirm(options, 'warning');
    }
    /**
     * @private
     * @template T
     * @param {?=} options
     * @param {?=} confirmType
     * @return {?}
     */
    simpleConfirm(options = {}, confirmType) {
        /** @type {?} */
        const iconMap = {
            info: 'info-circle',
            success: 'check-circle',
            error: 'close-circle',
            warning: 'exclamation-circle'
        };
        if (!('nzIconType' in options)) {
            options.nzIconType = iconMap[confirmType];
        }
        if (!('nzCancelText' in options)) {
            // Remove the Cancel button if the user not specify a Cancel button
            options.nzCancelText = null;
        }
        return this.confirm(options, confirmType);
    }
}
NzModalService.decorators = [
    { type: Injectable, args: [{
                providedIn: NzModalServiceModule
            },] }
];
/** @nocollapse */
NzModalService.ctorParameters = () => [
    { type: Overlay },
    { type: NzModalControlService }
];
/** @nocollapse */ NzModalService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NzModalService_Factory() { return new NzModalService(i0.ɵɵinject(i1.Overlay), i0.ɵɵinject(i2.NzModalControlService)); }, token: NzModalService, providedIn: i3.NzModalServiceModule });
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzModalService.prototype.overlay;
    /**
     * @type {?}
     * @private
     */
    NzModalService.prototype.modalControl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvbW9kYWwvIiwic291cmNlcyI6WyJuei1tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLE9BQU8sRUFBYyxNQUFNLHNCQUFzQixDQUFDO0FBQzNELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQWdCLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd6RCxPQUFPLEVBQUUsSUFBSSxFQUFtQixNQUFNLG9CQUFvQixDQUFDO0FBRTNELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRW5FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7Ozs7QUFJakUsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7SUFJakMsWUFBb0IsT0FBZ0IsRUFBRSxVQUFrQyxFQUFFO1FBQXRELFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDbEMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRW5CLElBQUksQ0FBQyxDQUFDLGdCQUFnQixJQUFJLE9BQU8sQ0FBQyxFQUFFO1lBQ2xDLDRGQUE0RjtZQUM1RixPQUFPLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQyxDQUFDLDhFQUE4RTtTQUNuSDtRQUVELElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUIsbUJBQUEsSUFBSSxDQUFDLFFBQVEsRUFBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZELG1CQUFBLElBQUksQ0FBQyxRQUFRLEVBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDL0IsbUJBQUEsSUFBSSxDQUFDLFFBQVEsRUFBQyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsU0FBUzs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFDLENBQUMsQ0FBQyxnRUFBZ0U7SUFDN0ksQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7SUFDakQsQ0FBQzs7OztJQUVELFlBQVk7UUFDVixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUN0QjtJQUNILENBQUM7Ozs7OztJQUVPLFdBQVcsQ0FBQyxPQUFxQjtRQUN2QyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLGtEQUFrRDtTQUNuRztJQUNILENBQUM7Ozs7OztJQUdPLFdBQVc7UUFDakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxlQUFlLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7Q0FDRjs7Ozs7O0lBdkNDLDBDQUF3RDs7Ozs7SUFDeEQsNENBQStCOzs7OztJQUVuQix5Q0FBd0I7O0FBeUN0QyxNQUFNLE9BQU8sY0FBYzs7Ozs7SUFVekIsWUFBb0IsT0FBZ0IsRUFBVSxZQUFtQztRQUE3RCxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQXVCO0lBQUcsQ0FBQzs7Ozs7SUFSckYsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQztJQUN0QyxDQUFDOzs7O0lBRUQsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4RCxDQUFDOzs7OztJQUtELFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQy9CLENBQUM7Ozs7OztJQUVELE1BQU0sQ0FBSSxVQUFxQyxFQUFFO1FBQy9DLElBQUksT0FBTyxPQUFPLENBQUMsVUFBVSxLQUFLLFVBQVUsRUFBRTtZQUM1QyxPQUFPLENBQUMsVUFBVTs7O1lBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQyx3REFBd0Q7U0FDeEY7OztjQUdLLFFBQVEsR0FBRyxtQkFBQSxJQUFJLHNCQUFzQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUM7UUFFakYsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7Ozs7OztJQUVELE9BQU8sQ0FBSSxVQUFxQyxFQUFFLEVBQUUsY0FBMkIsU0FBUztRQUN0RixJQUFJLFVBQVUsSUFBSSxPQUFPLEVBQUU7WUFDekIsSUFBSSxDQUFDLDhFQUE4RSxDQUFDLENBQUM7U0FDdEY7UUFDRCxJQUFJLENBQUMsQ0FBQyxTQUFTLElBQUksT0FBTyxDQUFDLEVBQUU7WUFDM0IsT0FBTyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7U0FDdkI7UUFDRCxJQUFJLENBQUMsQ0FBQyxnQkFBZ0IsSUFBSSxPQUFPLENBQUMsRUFBRTtZQUNsQyxPQUFPLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztTQUNoQztRQUNELElBQUksT0FBTyxPQUFPLENBQUMsTUFBTSxLQUFLLFVBQVUsRUFBRTtZQUN4Qyw2REFBNkQ7WUFDN0QsT0FBTyxDQUFDLE1BQU07OztZQUFHLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQSxDQUFDLENBQUMsd0RBQXdEO1NBQ3BGO1FBRUQsT0FBTyxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7UUFDaEMsT0FBTyxDQUFDLFdBQVcsR0FBRyx1Q0FBdUMsV0FBVyxJQUFJLE9BQU8sQ0FBQyxXQUFXLElBQUksRUFBRSxFQUFFLENBQUM7UUFDeEcsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7OztJQUVELElBQUksQ0FBSSxVQUFxQyxFQUFFO1FBQzdDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Ozs7O0lBRUQsT0FBTyxDQUFJLFVBQXFDLEVBQUU7UUFDaEQsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7Ozs7SUFFRCxLQUFLLENBQUksVUFBcUMsRUFBRTtRQUM5QyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7OztJQUVELE9BQU8sQ0FBSSxVQUFxQyxFQUFFO1FBQ2hELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7Ozs7Ozs7SUFFTyxhQUFhLENBQUksVUFBcUMsRUFBRSxFQUFFLFdBQXdCOztjQUNsRixPQUFPLEdBQW9CO1lBQy9CLElBQUksRUFBRSxhQUFhO1lBQ25CLE9BQU8sRUFBRSxjQUFjO1lBQ3ZCLEtBQUssRUFBRSxjQUFjO1lBQ3JCLE9BQU8sRUFBRSxvQkFBb0I7U0FDOUI7UUFDRCxJQUFJLENBQUMsQ0FBQyxZQUFZLElBQUksT0FBTyxDQUFDLEVBQUU7WUFDOUIsT0FBTyxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDM0M7UUFDRCxJQUFJLENBQUMsQ0FBQyxjQUFjLElBQUksT0FBTyxDQUFDLEVBQUU7WUFDaEMsbUVBQW1FO1lBQ25FLE9BQU8sQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1NBQzdCO1FBQ0QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7WUFsRkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxvQkFBb0I7YUFDakM7Ozs7WUExRFEsT0FBTztZQU9QLHFCQUFxQjs7Ozs7Ozs7SUE4RGhCLGlDQUF3Qjs7Ozs7SUFBRSxzQ0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IE92ZXJsYXksIE92ZXJsYXlSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRSZWYsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgd2FybiwgSW5kZXhhYmxlT2JqZWN0IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56TW9kYWxDb250cm9sU2VydmljZSB9IGZyb20gJy4vbnotbW9kYWwtY29udHJvbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTnpNb2RhbFJlZiB9IGZyb20gJy4vbnotbW9kYWwtcmVmLmNsYXNzJztcclxuaW1wb3J0IHsgTnpNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vbnotbW9kYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpNb2RhbFNlcnZpY2VNb2R1bGUgfSBmcm9tICcuL256LW1vZGFsLnNlcnZpY2UubW9kdWxlJztcclxuaW1wb3J0IHsgQ29uZmlybVR5cGUsIE1vZGFsT3B0aW9ucywgTW9kYWxPcHRpb25zRm9yU2VydmljZSB9IGZyb20gJy4vbnotbW9kYWwudHlwZSc7XHJcblxyXG4vLyBBIGJ1aWxkZXIgdXNlZCBmb3IgbWFuYWdpbmcgc2VydmljZSBjcmVhdGluZyBtb2RhbHNcclxuZXhwb3J0IGNsYXNzIE1vZGFsQnVpbGRlckZvclNlcnZpY2Uge1xyXG4gIHByaXZhdGUgbW9kYWxSZWY6IENvbXBvbmVudFJlZjxOek1vZGFsQ29tcG9uZW50PiB8IG51bGw7IC8vIE1vZGFsIENvbXBvbmVudFJlZiwgXCJudWxsXCIgbWVhbnMgaXQgaGFzIGJlZW4gZGVzdHJveWVkXHJcbiAgcHJpdmF0ZSBvdmVybGF5UmVmOiBPdmVybGF5UmVmO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksIG9wdGlvbnM6IE1vZGFsT3B0aW9uc0ZvclNlcnZpY2UgPSB7fSkge1xyXG4gICAgdGhpcy5jcmVhdGVNb2RhbCgpO1xyXG5cclxuICAgIGlmICghKCduekdldENvbnRhaW5lcicgaW4gb3B0aW9ucykpIHtcclxuICAgICAgLy8gQXMgd2UgdXNlIENESyB0byBjcmVhdGUgbW9kYWwgaW4gc2VydmljZSBieSBmb3JjZSwgdGhlcmUgaXMgbm8gbmVlZCB0byB1c2UgbnpHZXRDb250YWluZXJcclxuICAgICAgb3B0aW9ucy5uekdldENvbnRhaW5lciA9IHVuZGVmaW5lZDsgLy8gT3ZlcnJpZGUgbnpHZXRDb250YWluZXIncyBkZWZhdWx0IHZhbHVlIHRvIHByZXZlbnQgY3JlYXRpbmcgYW5vdGhlciBvdmVybGF5XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jaGFuZ2VQcm9wcyhvcHRpb25zKTtcclxuICAgIHRoaXMubW9kYWxSZWYhLmluc3RhbmNlLnNldE92ZXJsYXlSZWYodGhpcy5vdmVybGF5UmVmKTtcclxuICAgIHRoaXMubW9kYWxSZWYhLmluc3RhbmNlLm9wZW4oKTtcclxuICAgIHRoaXMubW9kYWxSZWYhLmluc3RhbmNlLm56QWZ0ZXJDbG9zZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5kZXN0cm95TW9kYWwoKSk7IC8vIFtOT1RFXSBCeSBkZWZhdWx0LCBjbG9zZSBlcXVhbHMgZGVzdHJveSB3aGVuIHVzaW5nIGFzIFNlcnZpY2VcclxuICB9XHJcblxyXG4gIGdldEluc3RhbmNlKCk6IE56TW9kYWxDb21wb25lbnQgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLm1vZGFsUmVmICYmIHRoaXMubW9kYWxSZWYuaW5zdGFuY2U7XHJcbiAgfVxyXG5cclxuICBkZXN0cm95TW9kYWwoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5tb2RhbFJlZikge1xyXG4gICAgICB0aGlzLm92ZXJsYXlSZWYuZGlzcG9zZSgpO1xyXG4gICAgICB0aGlzLm1vZGFsUmVmID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hhbmdlUHJvcHMob3B0aW9uczogTW9kYWxPcHRpb25zKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5tb2RhbFJlZikge1xyXG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMubW9kYWxSZWYuaW5zdGFuY2UsIG9wdGlvbnMpOyAvLyBEQU5HRVI6IGhlcmUgbm90IGxpbWl0IHVzZXIncyBpbnB1dHMgYXQgcnVudGltZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQ3JlYXRlIGNvbXBvbmVudCB0byBBcHBsaWNhdGlvblJlZlxyXG4gIHByaXZhdGUgY3JlYXRlTW9kYWwoKTogdm9pZCB7XHJcbiAgICB0aGlzLm92ZXJsYXlSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKCk7XHJcbiAgICB0aGlzLm1vZGFsUmVmID0gdGhpcy5vdmVybGF5UmVmLmF0dGFjaChuZXcgQ29tcG9uZW50UG9ydGFsKE56TW9kYWxDb21wb25lbnQpKTtcclxuICB9XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiBOek1vZGFsU2VydmljZU1vZHVsZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpNb2RhbFNlcnZpY2Uge1xyXG4gIC8vIFRyYWNrIG9mIHRoZSBjdXJyZW50IGNsb3NlIG1vZGFscyAod2UgYXNzdW1lIGludmlzaWJsZSBpcyBjbG9zZSB0aGlzIHRpbWUpXHJcbiAgZ2V0IG9wZW5Nb2RhbHMoKTogTnpNb2RhbFJlZltdIHtcclxuICAgIHJldHVybiB0aGlzLm1vZGFsQ29udHJvbC5vcGVuTW9kYWxzO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGFmdGVyQWxsQ2xvc2UoKTogT2JzZXJ2YWJsZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5tb2RhbENvbnRyb2wuYWZ0ZXJBbGxDbG9zZS5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSwgcHJpdmF0ZSBtb2RhbENvbnRyb2w6IE56TW9kYWxDb250cm9sU2VydmljZSkge31cclxuXHJcbiAgLy8gQ2xvc2VzIGFsbCBvZiB0aGUgY3VycmVudGx5LW9wZW4gZGlhbG9nc1xyXG4gIGNsb3NlQWxsKCk6IHZvaWQge1xyXG4gICAgdGhpcy5tb2RhbENvbnRyb2wuY2xvc2VBbGwoKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZTxUPihvcHRpb25zOiBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlPFQ+ID0ge30pOiBOek1vZGFsUmVmPFQ+IHtcclxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5uek9uQ2FuY2VsICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIG9wdGlvbnMubnpPbkNhbmNlbCA9ICgpID0+IHt9OyAvLyBMZWF2ZSBhIGVtcHR5IGZ1bmN0aW9uIHRvIGNsb3NlIHRoaXMgbW9kYWwgYnkgZGVmYXVsdFxyXG4gICAgfVxyXG5cclxuICAgIC8vIE5PVEU6IHVzZSBOek1vZGFsQ29tcG9uZW50IGFzIHRoZSBOek1vZGFsUmVmIGJ5IG5vdywgd2UgbWF5IG5lZWQgYXJjaGl2ZSB0aGUgcmVhbCBOek1vZGFsUmVmIG9iamVjdCBpbiB0aGUgZnV0dXJlXHJcbiAgICBjb25zdCBtb2RhbFJlZiA9IG5ldyBNb2RhbEJ1aWxkZXJGb3JTZXJ2aWNlKHRoaXMub3ZlcmxheSwgb3B0aW9ucykuZ2V0SW5zdGFuY2UoKSE7XHJcblxyXG4gICAgcmV0dXJuIG1vZGFsUmVmO1xyXG4gIH1cclxuXHJcbiAgY29uZmlybTxUPihvcHRpb25zOiBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlPFQ+ID0ge30sIGNvbmZpcm1UeXBlOiBDb25maXJtVHlwZSA9ICdjb25maXJtJyk6IE56TW9kYWxSZWY8VD4ge1xyXG4gICAgaWYgKCduekZvb3RlcicgaW4gb3B0aW9ucykge1xyXG4gICAgICB3YXJuKGBUaGUgQ29uZmlybS1Nb2RhbCBkb2Vzbid0IHN1cHBvcnQgXCJuekZvb3RlclwiLCB0aGlzIHByb3BlcnR5IHdpbGwgYmUgaWdub3JlZC5gKTtcclxuICAgIH1cclxuICAgIGlmICghKCdueldpZHRoJyBpbiBvcHRpb25zKSkge1xyXG4gICAgICBvcHRpb25zLm56V2lkdGggPSA0MTY7XHJcbiAgICB9XHJcbiAgICBpZiAoISgnbnpNYXNrQ2xvc2FibGUnIGluIG9wdGlvbnMpKSB7XHJcbiAgICAgIG9wdGlvbnMubnpNYXNrQ2xvc2FibGUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5uek9uT2sgIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgLy8gTk9URTogb25seSBzdXBwb3J0IGZ1bmN0aW9uIGN1cnJlbnRseSBieSBjYWxsaW5nIGNvbmZpcm0oKVxyXG4gICAgICBvcHRpb25zLm56T25PayA9ICgpID0+IHt9OyAvLyBMZWF2ZSBhIGVtcHR5IGZ1bmN0aW9uIHRvIGNsb3NlIHRoaXMgbW9kYWwgYnkgZGVmYXVsdFxyXG4gICAgfVxyXG5cclxuICAgIG9wdGlvbnMubnpNb2RhbFR5cGUgPSAnY29uZmlybSc7XHJcbiAgICBvcHRpb25zLm56Q2xhc3NOYW1lID0gYGFudC1tb2RhbC1jb25maXJtIGFudC1tb2RhbC1jb25maXJtLSR7Y29uZmlybVR5cGV9ICR7b3B0aW9ucy5uekNsYXNzTmFtZSB8fCAnJ31gO1xyXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlKG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgaW5mbzxUPihvcHRpb25zOiBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlPFQ+ID0ge30pOiBOek1vZGFsUmVmPFQ+IHtcclxuICAgIHJldHVybiB0aGlzLnNpbXBsZUNvbmZpcm0ob3B0aW9ucywgJ2luZm8nKTtcclxuICB9XHJcblxyXG4gIHN1Y2Nlc3M8VD4ob3B0aW9uczogTW9kYWxPcHRpb25zRm9yU2VydmljZTxUPiA9IHt9KTogTnpNb2RhbFJlZjxUPiB7XHJcbiAgICByZXR1cm4gdGhpcy5zaW1wbGVDb25maXJtKG9wdGlvbnMsICdzdWNjZXNzJyk7XHJcbiAgfVxyXG5cclxuICBlcnJvcjxUPihvcHRpb25zOiBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlPFQ+ID0ge30pOiBOek1vZGFsUmVmPFQ+IHtcclxuICAgIHJldHVybiB0aGlzLnNpbXBsZUNvbmZpcm0ob3B0aW9ucywgJ2Vycm9yJyk7XHJcbiAgfVxyXG5cclxuICB3YXJuaW5nPFQ+KG9wdGlvbnM6IE1vZGFsT3B0aW9uc0ZvclNlcnZpY2U8VD4gPSB7fSk6IE56TW9kYWxSZWY8VD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2ltcGxlQ29uZmlybShvcHRpb25zLCAnd2FybmluZycpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzaW1wbGVDb25maXJtPFQ+KG9wdGlvbnM6IE1vZGFsT3B0aW9uc0ZvclNlcnZpY2U8VD4gPSB7fSwgY29uZmlybVR5cGU6IENvbmZpcm1UeXBlKTogTnpNb2RhbFJlZjxUPiB7XHJcbiAgICBjb25zdCBpY29uTWFwOiBJbmRleGFibGVPYmplY3QgPSB7XHJcbiAgICAgIGluZm86ICdpbmZvLWNpcmNsZScsXHJcbiAgICAgIHN1Y2Nlc3M6ICdjaGVjay1jaXJjbGUnLFxyXG4gICAgICBlcnJvcjogJ2Nsb3NlLWNpcmNsZScsXHJcbiAgICAgIHdhcm5pbmc6ICdleGNsYW1hdGlvbi1jaXJjbGUnXHJcbiAgICB9O1xyXG4gICAgaWYgKCEoJ256SWNvblR5cGUnIGluIG9wdGlvbnMpKSB7XHJcbiAgICAgIG9wdGlvbnMubnpJY29uVHlwZSA9IGljb25NYXBbY29uZmlybVR5cGVdO1xyXG4gICAgfVxyXG4gICAgaWYgKCEoJ256Q2FuY2VsVGV4dCcgaW4gb3B0aW9ucykpIHtcclxuICAgICAgLy8gUmVtb3ZlIHRoZSBDYW5jZWwgYnV0dG9uIGlmIHRoZSB1c2VyIG5vdCBzcGVjaWZ5IGEgQ2FuY2VsIGJ1dHRvblxyXG4gICAgICBvcHRpb25zLm56Q2FuY2VsVGV4dCA9IG51bGw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5jb25maXJtKG9wdGlvbnMsIGNvbmZpcm1UeXBlKTtcclxuICB9XHJcbn1cclxuIl19
/**
 * @fileoverview added by tsickle
 * Generated from: nz-context-menu.service.ts
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
import { TemplatePortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { NzContextMenuServiceModule } from './nz-context-menu.service.module';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
import * as i2 from "./nz-context-menu.service.module";
export class NzContextMenuService {
    /**
     * @param {?} overlay
     */
    constructor(overlay) {
        this.overlay = overlay;
        this.clickOutsideSubscription = Subscription.EMPTY;
        this.clickMenuSubscription = Subscription.EMPTY;
        this.positionSubscription = Subscription.EMPTY;
    }
    /**
     * @param {?} $event
     * @param {?} nzDropdownMenuComponent
     * @return {?}
     */
    create($event, nzDropdownMenuComponent) {
        $event.preventDefault();
        /** @type {?} */
        const overlayRef = this.createOverlay($event);
        if (overlayRef.hasAttached()) {
            this.close();
        }
        this.attachTemplatePortal(overlayRef, nzDropdownMenuComponent);
        this.handleClickOutside();
    }
    /**
     * @return {?}
     */
    close() {
        if (this.overlayRef) {
            this.overlayRef.detach();
            this.setOpenState(false);
            this.clickOutsideSubscription.unsubscribe();
            this.clickMenuSubscription.unsubscribe();
            this.positionSubscription.unsubscribe();
        }
    }
    /**
     * @private
     * @return {?}
     */
    handleClickOutside() {
        this.clickOutsideSubscription.unsubscribe();
        this.clickOutsideSubscription = fromEvent(document, 'click')
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        event => !!this.overlayRef && !this.overlayRef.overlayElement.contains((/** @type {?} */ (event.target))))), 
        // handle firefox contextmenu event
        filter((/**
         * @param {?} event
         * @return {?}
         */
        event => event.button !== 2)), take(1))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.close();
        }));
    }
    /**
     * @private
     * @param {?} overlayRef
     * @param {?} nzDropdownMenuComponent
     * @return {?}
     */
    attachTemplatePortal(overlayRef, nzDropdownMenuComponent) {
        this.nzDropdownMenuComponent = nzDropdownMenuComponent;
        nzDropdownMenuComponent.setValue('nzTrigger', 'click');
        this.clickMenuSubscription.unsubscribe();
        this.clickMenuSubscription = nzDropdownMenuComponent.nzMenuDropdownService.menuItemClick$.subscribe((/**
         * @return {?}
         */
        () => {
            this.close();
        }));
        overlayRef.attach(new TemplatePortal(nzDropdownMenuComponent.templateRef, nzDropdownMenuComponent.viewContainerRef));
        this.setOpenState(true);
    }
    /**
     * @private
     * @param {?} state
     * @return {?}
     */
    setOpenState(state) {
        this.nzDropdownMenuComponent.setValue('open', state);
    }
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    getOverlayConfig($event) {
        return new OverlayConfig({
            panelClass: 'nz-dropdown-panel',
            positionStrategy: this.generatePositionStrategy($event),
            scrollStrategy: this.overlay.scrollStrategies.close()
        });
    }
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    generatePositionStrategy($event) {
        return this.overlay
            .position()
            .flexibleConnectedTo({ x: $event.x, y: $event.y })
            .withPositions([
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'top' }),
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'bottom' }),
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'top' })
        ]);
    }
    /**
     * @private
     * @param {?} position
     * @return {?}
     */
    subscribeToPositions(position) {
        this.positionSubscription.unsubscribe();
        this.positionSubscription = position.positionChanges.subscribe((/**
         * @param {?} change
         * @return {?}
         */
        change => {
            // TODO: positionChanges won't trigger if not dispose
            this.nzDropdownMenuComponent.setValue('dropDownPosition', change.connectionPair.overlayY === 'bottom' ? 'top' : 'bottom');
        }));
    }
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    createOverlay($event) {
        /** @type {?} */
        const config = this.getOverlayConfig($event);
        if (!this.overlayRef) {
            this.overlayRef = this.overlay.create(config);
        }
        else {
            this.updatePosition(this.overlayRef, $event);
        }
        this.subscribeToPositions((/** @type {?} */ (config.positionStrategy)));
        return this.overlayRef;
    }
    /**
     * @private
     * @param {?} overlayRef
     * @param {?} $event
     * @return {?}
     */
    updatePosition(overlayRef, $event) {
        overlayRef.updatePositionStrategy(this.generatePositionStrategy($event));
    }
}
NzContextMenuService.decorators = [
    { type: Injectable, args: [{
                providedIn: NzContextMenuServiceModule
            },] }
];
/** @nocollapse */
NzContextMenuService.ctorParameters = () => [
    { type: Overlay }
];
/** @nocollapse */ NzContextMenuService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NzContextMenuService_Factory() { return new NzContextMenuService(i0.ɵɵinject(i1.Overlay)); }, token: NzContextMenuService, providedIn: i2.NzContextMenuServiceModule });
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzContextMenuService.prototype.overlayRef;
    /**
     * @type {?}
     * @private
     */
    NzContextMenuService.prototype.nzDropdownMenuComponent;
    /**
     * @type {?}
     * @private
     */
    NzContextMenuService.prototype.clickOutsideSubscription;
    /**
     * @type {?}
     * @private
     */
    NzContextMenuService.prototype.clickMenuSubscription;
    /**
     * @type {?}
     * @private
     */
    NzContextMenuService.prototype.positionSubscription;
    /**
     * @type {?}
     * @private
     */
    NzContextMenuService.prototype.overlay;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29udGV4dC1tZW51LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2Ryb3Bkb3duLyIsInNvdXJjZXMiOlsibnotY29udGV4dC1tZW51LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVNBLE9BQU8sRUFDTCxzQkFBc0IsRUFFdEIsT0FBTyxFQUNQLGFBQWEsRUFFZCxNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7Ozs7QUFNOUUsTUFBTSxPQUFPLG9CQUFvQjs7OztJQU8vQixZQUFvQixPQUFnQjtRQUFoQixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBSjVCLDZCQUF3QixHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFDOUMsMEJBQXFCLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUMzQyx5QkFBb0IsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO0lBRVgsQ0FBQzs7Ozs7O0lBRXhDLE1BQU0sQ0FBQyxNQUFrQixFQUFFLHVCQUFnRDtRQUN6RSxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7O2NBQ2xCLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztRQUM3QyxJQUFJLFVBQVUsQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUM1QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDZDtRQUNELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLEVBQUUsdUJBQXVCLENB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Q3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDL0M7YUFBTTtZQUNMLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUM5QztRQUNELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxtQkFBQSxNQUFNLENBQUMsZ0JBQWdCLEVBQXFDLENBQUMsQ0FBQztRQUN4RixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQzs7Ozs7OztJQUVPLGNBQWMsQ0FBQyxVQUFzQixFQUFFLE1BQWtCO1FBQy9ELFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUMzRSxDQUFDOzs7WUEzR0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSwwQkFBMEI7YUFDdkM7Ozs7WUFiQyxPQUFPOzs7Ozs7OztJQWVQLDBDQUErQjs7Ozs7SUFDL0IsdURBQXlEOzs7OztJQUN6RCx3REFBc0Q7Ozs7O0lBQ3RELHFEQUFtRDs7Ozs7SUFDbkQsb0RBQWtEOzs7OztJQUV0Qyx1Q0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbi8qKiBrZWVwIHRyYWNrIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL21hdGVyaWFsMi9pc3N1ZXMvNTAwNyAqKi9cclxuaW1wb3J0IHtcclxuICBDb25uZWN0aW9uUG9zaXRpb25QYWlyLFxyXG4gIEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSxcclxuICBPdmVybGF5LFxyXG4gIE92ZXJsYXlDb25maWcsXHJcbiAgT3ZlcmxheVJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgVGVtcGxhdGVQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE56Q29udGV4dE1lbnVTZXJ2aWNlTW9kdWxlIH0gZnJvbSAnLi9uei1jb250ZXh0LW1lbnUuc2VydmljZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBOekRyb3Bkb3duTWVudUNvbXBvbmVudCB9IGZyb20gJy4vbnotZHJvcGRvd24tbWVudS5jb21wb25lbnQnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46IE56Q29udGV4dE1lbnVTZXJ2aWNlTW9kdWxlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekNvbnRleHRNZW51U2VydmljZSB7XHJcbiAgcHJpdmF0ZSBvdmVybGF5UmVmOiBPdmVybGF5UmVmO1xyXG4gIHByaXZhdGUgbnpEcm9wZG93bk1lbnVDb21wb25lbnQ6IE56RHJvcGRvd25NZW51Q29tcG9uZW50O1xyXG4gIHByaXZhdGUgY2xpY2tPdXRzaWRlU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xyXG4gIHByaXZhdGUgY2xpY2tNZW51U3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xyXG4gIHByaXZhdGUgcG9zaXRpb25TdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSkge31cclxuXHJcbiAgY3JlYXRlKCRldmVudDogTW91c2VFdmVudCwgbnpEcm9wZG93bk1lbnVDb21wb25lbnQ6IE56RHJvcGRvd25NZW51Q29tcG9uZW50KTogdm9pZCB7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IG92ZXJsYXlSZWYgPSB0aGlzLmNyZWF0ZU92ZXJsYXkoJGV2ZW50KTtcclxuICAgIGlmIChvdmVybGF5UmVmLmhhc0F0dGFjaGVkKCkpIHtcclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5hdHRhY2hUZW1wbGF0ZVBvcnRhbChvdmVybGF5UmVmLCBuekRyb3Bkb3duTWVudUNvbXBvbmVudCk7XHJcbiAgICB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZSgpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5vdmVybGF5UmVmKSB7XHJcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5kZXRhY2goKTtcclxuICAgICAgdGhpcy5zZXRPcGVuU3RhdGUoZmFsc2UpO1xyXG4gICAgICB0aGlzLmNsaWNrT3V0c2lkZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICB0aGlzLmNsaWNrTWVudVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICB0aGlzLnBvc2l0aW9uU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhbmRsZUNsaWNrT3V0c2lkZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xpY2tPdXRzaWRlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLmNsaWNrT3V0c2lkZVN1YnNjcmlwdGlvbiA9IGZyb21FdmVudDxNb3VzZUV2ZW50Pihkb2N1bWVudCwgJ2NsaWNrJylcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgZmlsdGVyKGV2ZW50ID0+ICEhdGhpcy5vdmVybGF5UmVmICYmICF0aGlzLm92ZXJsYXlSZWYub3ZlcmxheUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KSksXHJcbiAgICAgICAgLy8gaGFuZGxlIGZpcmVmb3ggY29udGV4dG1lbnUgZXZlbnRcclxuICAgICAgICBmaWx0ZXIoZXZlbnQgPT4gZXZlbnQuYnV0dG9uICE9PSAyKSxcclxuICAgICAgICB0YWtlKDEpXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXR0YWNoVGVtcGxhdGVQb3J0YWwob3ZlcmxheVJlZjogT3ZlcmxheVJlZiwgbnpEcm9wZG93bk1lbnVDb21wb25lbnQ6IE56RHJvcGRvd25NZW51Q29tcG9uZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLm56RHJvcGRvd25NZW51Q29tcG9uZW50ID0gbnpEcm9wZG93bk1lbnVDb21wb25lbnQ7XHJcbiAgICBuekRyb3Bkb3duTWVudUNvbXBvbmVudC5zZXRWYWx1ZSgnbnpUcmlnZ2VyJywgJ2NsaWNrJyk7XHJcbiAgICB0aGlzLmNsaWNrTWVudVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5jbGlja01lbnVTdWJzY3JpcHRpb24gPSBuekRyb3Bkb3duTWVudUNvbXBvbmVudC5uek1lbnVEcm9wZG93blNlcnZpY2UubWVudUl0ZW1DbGljayQuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfSk7XHJcbiAgICBvdmVybGF5UmVmLmF0dGFjaChcclxuICAgICAgbmV3IFRlbXBsYXRlUG9ydGFsKG56RHJvcGRvd25NZW51Q29tcG9uZW50LnRlbXBsYXRlUmVmLCBuekRyb3Bkb3duTWVudUNvbXBvbmVudC52aWV3Q29udGFpbmVyUmVmKVxyXG4gICAgKTtcclxuICAgIHRoaXMuc2V0T3BlblN0YXRlKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRPcGVuU3RhdGUoc3RhdGU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMubnpEcm9wZG93bk1lbnVDb21wb25lbnQuc2V0VmFsdWUoJ29wZW4nLCBzdGF0ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE92ZXJsYXlDb25maWcoJGV2ZW50OiBNb3VzZUV2ZW50KTogT3ZlcmxheUNvbmZpZyB7XHJcbiAgICByZXR1cm4gbmV3IE92ZXJsYXlDb25maWcoe1xyXG4gICAgICBwYW5lbENsYXNzOiAnbnotZHJvcGRvd24tcGFuZWwnLFxyXG4gICAgICBwb3NpdGlvblN0cmF0ZWd5OiB0aGlzLmdlbmVyYXRlUG9zaXRpb25TdHJhdGVneSgkZXZlbnQpLFxyXG4gICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMuY2xvc2UoKVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdlbmVyYXRlUG9zaXRpb25TdHJhdGVneSgkZXZlbnQ6IE1vdXNlRXZlbnQpOiBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3kge1xyXG4gICAgcmV0dXJuIHRoaXMub3ZlcmxheVxyXG4gICAgICAucG9zaXRpb24oKVxyXG4gICAgICAuZmxleGlibGVDb25uZWN0ZWRUbyh7IHg6ICRldmVudC54LCB5OiAkZXZlbnQueSB9KVxyXG4gICAgICAud2l0aFBvc2l0aW9ucyhbXHJcbiAgICAgICAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAndG9wJyB9LCB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ3RvcCcgfSksXHJcbiAgICAgICAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAndG9wJyB9LCB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ2JvdHRvbScgfSksXHJcbiAgICAgICAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAndG9wJyB9LCB7IG92ZXJsYXlYOiAnZW5kJywgb3ZlcmxheVk6ICdib3R0b20nIH0pLFxyXG4gICAgICAgIG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ3RvcCcgfSwgeyBvdmVybGF5WDogJ2VuZCcsIG92ZXJsYXlZOiAndG9wJyB9KVxyXG4gICAgICBdKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3Vic2NyaWJlVG9Qb3NpdGlvbnMocG9zaXRpb246IEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSk6IHZvaWQge1xyXG4gICAgdGhpcy5wb3NpdGlvblN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5wb3NpdGlvblN1YnNjcmlwdGlvbiA9IHBvc2l0aW9uLnBvc2l0aW9uQ2hhbmdlcy5zdWJzY3JpYmUoY2hhbmdlID0+IHtcclxuICAgICAgLy8gVE9ETzogcG9zaXRpb25DaGFuZ2VzIHdvbid0IHRyaWdnZXIgaWYgbm90IGRpc3Bvc2VcclxuICAgICAgdGhpcy5uekRyb3Bkb3duTWVudUNvbXBvbmVudC5zZXRWYWx1ZShcclxuICAgICAgICAnZHJvcERvd25Qb3NpdGlvbicsXHJcbiAgICAgICAgY2hhbmdlLmNvbm5lY3Rpb25QYWlyLm92ZXJsYXlZID09PSAnYm90dG9tJyA/ICd0b3AnIDogJ2JvdHRvbSdcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVPdmVybGF5KCRldmVudDogTW91c2VFdmVudCk6IE92ZXJsYXlSZWYge1xyXG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5nZXRPdmVybGF5Q29uZmlnKCRldmVudCk7XHJcbiAgICBpZiAoIXRoaXMub3ZlcmxheVJlZikge1xyXG4gICAgICB0aGlzLm92ZXJsYXlSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKGNvbmZpZyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKHRoaXMub3ZlcmxheVJlZiwgJGV2ZW50KTtcclxuICAgIH1cclxuICAgIHRoaXMuc3Vic2NyaWJlVG9Qb3NpdGlvbnMoY29uZmlnLnBvc2l0aW9uU3RyYXRlZ3kgYXMgRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5KTtcclxuICAgIHJldHVybiB0aGlzLm92ZXJsYXlSZWY7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZVBvc2l0aW9uKG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYsICRldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgb3ZlcmxheVJlZi51cGRhdGVQb3NpdGlvblN0cmF0ZWd5KHRoaXMuZ2VuZXJhdGVQb3NpdGlvblN0cmF0ZWd5KCRldmVudCkpO1xyXG4gIH1cclxufVxyXG4iXX0=
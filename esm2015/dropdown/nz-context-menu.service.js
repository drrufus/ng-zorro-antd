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
export class NzContextMenuService {
    constructor(overlay) {
        this.overlay = overlay;
        this.clickOutsideSubscription = Subscription.EMPTY;
        this.clickMenuSubscription = Subscription.EMPTY;
        this.positionSubscription = Subscription.EMPTY;
    }
    create($event, nzDropdownMenuComponent) {
        $event.preventDefault();
        const overlayRef = this.createOverlay($event);
        if (overlayRef.hasAttached()) {
            this.close();
        }
        this.attachTemplatePortal(overlayRef, nzDropdownMenuComponent);
        this.handleClickOutside();
    }
    close() {
        if (this.overlayRef) {
            this.overlayRef.detach();
            this.setOpenState(false);
            this.clickOutsideSubscription.unsubscribe();
            this.clickMenuSubscription.unsubscribe();
            this.positionSubscription.unsubscribe();
        }
    }
    handleClickOutside() {
        this.clickOutsideSubscription.unsubscribe();
        this.clickOutsideSubscription = fromEvent(document, 'click')
            .pipe(filter(event => !!this.overlayRef && !this.overlayRef.overlayElement.contains(event.target)), 
        // handle firefox contextmenu event
        filter(event => event.button !== 2), take(1))
            .subscribe(() => {
            this.close();
        });
    }
    attachTemplatePortal(overlayRef, nzDropdownMenuComponent) {
        this.nzDropdownMenuComponent = nzDropdownMenuComponent;
        nzDropdownMenuComponent.setValue('nzTrigger', 'click');
        this.clickMenuSubscription.unsubscribe();
        this.clickMenuSubscription = nzDropdownMenuComponent.nzMenuDropdownService.menuItemClick$.subscribe(() => {
            this.close();
        });
        overlayRef.attach(new TemplatePortal(nzDropdownMenuComponent.templateRef, nzDropdownMenuComponent.viewContainerRef));
        this.setOpenState(true);
    }
    setOpenState(state) {
        this.nzDropdownMenuComponent.setValue('open', state);
    }
    getOverlayConfig($event) {
        return new OverlayConfig({
            panelClass: 'nz-dropdown-panel',
            positionStrategy: this.generatePositionStrategy($event),
            scrollStrategy: this.overlay.scrollStrategies.close()
        });
    }
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
    subscribeToPositions(position) {
        this.positionSubscription.unsubscribe();
        this.positionSubscription = position.positionChanges.subscribe(change => {
            // TODO: positionChanges won't trigger if not dispose
            this.nzDropdownMenuComponent.setValue('dropDownPosition', change.connectionPair.overlayY === 'bottom' ? 'top' : 'bottom');
        });
    }
    createOverlay($event) {
        const config = this.getOverlayConfig($event);
        if (!this.overlayRef) {
            this.overlayRef = this.overlay.create(config);
        }
        else {
            this.updatePosition(this.overlayRef, $event);
        }
        this.subscribeToPositions(config.positionStrategy);
        return this.overlayRef;
    }
    updatePosition(overlayRef, $event) {
        overlayRef.updatePositionStrategy(this.generatePositionStrategy($event));
    }
}
/** @nocollapse */ NzContextMenuService.ɵfac = function NzContextMenuService_Factory(t) { return new (t || NzContextMenuService)(i0.ɵɵinject(i1.Overlay)); };
/** @nocollapse */ NzContextMenuService.ɵprov = i0.ɵɵdefineInjectable({ token: NzContextMenuService, factory: NzContextMenuService.ɵfac, providedIn: NzContextMenuServiceModule });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzContextMenuService, [{
        type: Injectable,
        args: [{
                providedIn: NzContextMenuServiceModule
            }]
    }], function () { return [{ type: i1.Overlay }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29udGV4dC1tZW51LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2Ryb3Bkb3duLyIsInNvdXJjZXMiOlsibnotY29udGV4dC1tZW51LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsbUVBQW1FO0FBQ25FLE9BQU8sRUFBRSxzQkFBc0IsRUFBcUMsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLHNCQUFzQixDQUFDO0FBQ3JJLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7OztBQU05RSxNQUFNLE9BQU8sb0JBQW9CO0lBTy9CLFlBQW9CLE9BQWdCO1FBQWhCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFKNUIsNkJBQXdCLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUM5QywwQkFBcUIsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO1FBQzNDLHlCQUFvQixHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7SUFFWCxDQUFDO0lBRXhDLE1BQU0sQ0FBQyxNQUFrQixFQUFFLHVCQUFnRDtRQUN6RSxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QyxJQUFJLFVBQVUsQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUM1QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDZDtRQUNELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsS0FBSztRQUNILElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzVDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN6QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDekM7SUFDSCxDQUFDO0lBRU8sa0JBQWtCO1FBQ3hCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM1QyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsU0FBUyxDQUFhLFFBQVEsRUFBRSxPQUFPLENBQUM7YUFDckUsSUFBSSxDQUNILE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFxQixDQUFDLENBQUM7UUFDM0csbUNBQW1DO1FBQ25DLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLEVBQ25DLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDUjthQUNBLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTyxvQkFBb0IsQ0FBQyxVQUFzQixFQUFFLHVCQUFnRDtRQUNuRyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsdUJBQXVCLENBQUM7UUFDdkQsdUJBQXVCLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLHVCQUF1QixDQUFDLHFCQUFxQixDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ3ZHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNmLENBQUMsQ0FBQyxDQUFDO1FBQ0gsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLGNBQWMsQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLEVBQUUsdUJBQXVCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1FBQ3JILElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVPLFlBQVksQ0FBQyxLQUFjO1FBQ2pDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFTyxnQkFBZ0IsQ0FBQyxNQUFrQjtRQUN6QyxPQUFPLElBQUksYUFBYSxDQUFDO1lBQ3ZCLFVBQVUsRUFBRSxtQkFBbUI7WUFDL0IsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQztZQUN2RCxjQUFjLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUU7U0FDdEQsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLHdCQUF3QixDQUFDLE1BQWtCO1FBQ2pELE9BQU8sSUFBSSxDQUFDLE9BQU87YUFDaEIsUUFBUSxFQUFFO2FBQ1YsbUJBQW1CLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDO2FBQ2pELGFBQWEsQ0FBQztZQUNiLElBQUksc0JBQXNCLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDO1lBQ3hHLElBQUksc0JBQXNCLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDO1lBQzNHLElBQUksc0JBQXNCLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDO1lBQ3pHLElBQUksc0JBQXNCLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDO1NBQ3ZHLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTyxvQkFBb0IsQ0FBQyxRQUEyQztRQUN0RSxJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3RFLHFEQUFxRDtZQUNyRCxJQUFJLENBQUMsdUJBQXVCLENBQUMsUUFBUSxDQUFDLGtCQUFrQixFQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1SCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxhQUFhLENBQUMsTUFBa0I7UUFDdEMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDL0M7YUFBTTtZQUNMLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUM5QztRQUNELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsZ0JBQXFELENBQUMsQ0FBQztRQUN4RixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUVPLGNBQWMsQ0FBQyxVQUFzQixFQUFFLE1BQWtCO1FBQy9ELFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUMzRSxDQUFDOzt3RkFuR1Usb0JBQW9COzREQUFwQixvQkFBb0IsV0FBcEIsb0JBQW9CLG1CQUZuQiwwQkFBMEI7a0RBRTNCLG9CQUFvQjtjQUhoQyxVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLDBCQUEwQjthQUN2QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuLyoqIGtlZXAgdHJhY2sgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvbWF0ZXJpYWwyL2lzc3Vlcy81MDA3ICoqL1xyXG5pbXBvcnQgeyBDb25uZWN0aW9uUG9zaXRpb25QYWlyLCBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3ksIE92ZXJsYXksIE92ZXJsYXlDb25maWcsIE92ZXJsYXlSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IFRlbXBsYXRlUG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlsdGVyLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBOekNvbnRleHRNZW51U2VydmljZU1vZHVsZSB9IGZyb20gJy4vbnotY29udGV4dC1tZW51LnNlcnZpY2UubW9kdWxlJztcclxuaW1wb3J0IHsgTnpEcm9wZG93bk1lbnVDb21wb25lbnQgfSBmcm9tICcuL256LWRyb3Bkb3duLW1lbnUuY29tcG9uZW50JztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiBOekNvbnRleHRNZW51U2VydmljZU1vZHVsZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpDb250ZXh0TWVudVNlcnZpY2Uge1xyXG4gIHByaXZhdGUgb3ZlcmxheVJlZjogT3ZlcmxheVJlZjtcclxuICBwcml2YXRlIG56RHJvcGRvd25NZW51Q29tcG9uZW50OiBOekRyb3Bkb3duTWVudUNvbXBvbmVudDtcclxuICBwcml2YXRlIGNsaWNrT3V0c2lkZVN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcclxuICBwcml2YXRlIGNsaWNrTWVudVN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcclxuICBwcml2YXRlIHBvc2l0aW9uU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXkpIHt9XHJcblxyXG4gIGNyZWF0ZSgkZXZlbnQ6IE1vdXNlRXZlbnQsIG56RHJvcGRvd25NZW51Q29tcG9uZW50OiBOekRyb3Bkb3duTWVudUNvbXBvbmVudCk6IHZvaWQge1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBvdmVybGF5UmVmID0gdGhpcy5jcmVhdGVPdmVybGF5KCRldmVudCk7XHJcbiAgICBpZiAob3ZlcmxheVJlZi5oYXNBdHRhY2hlZCgpKSB7XHJcbiAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH1cclxuICAgIHRoaXMuYXR0YWNoVGVtcGxhdGVQb3J0YWwob3ZlcmxheVJlZiwgbnpEcm9wZG93bk1lbnVDb21wb25lbnQpO1xyXG4gICAgdGhpcy5oYW5kbGVDbGlja091dHNpZGUoKTtcclxuICB9XHJcblxyXG4gIGNsb3NlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZikge1xyXG4gICAgICB0aGlzLm92ZXJsYXlSZWYuZGV0YWNoKCk7XHJcbiAgICAgIHRoaXMuc2V0T3BlblN0YXRlKGZhbHNlKTtcclxuICAgICAgdGhpcy5jbGlja091dHNpZGVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgdGhpcy5jbGlja01lbnVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgdGhpcy5wb3NpdGlvblN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVDbGlja091dHNpZGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsaWNrT3V0c2lkZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5jbGlja091dHNpZGVTdWJzY3JpcHRpb24gPSBmcm9tRXZlbnQ8TW91c2VFdmVudD4oZG9jdW1lbnQsICdjbGljaycpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIGZpbHRlcihldmVudCA9PiAhIXRoaXMub3ZlcmxheVJlZiAmJiAhdGhpcy5vdmVybGF5UmVmLm92ZXJsYXlFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCkpLFxyXG4gICAgICAgIC8vIGhhbmRsZSBmaXJlZm94IGNvbnRleHRtZW51IGV2ZW50XHJcbiAgICAgICAgZmlsdGVyKGV2ZW50ID0+IGV2ZW50LmJ1dHRvbiAhPT0gMiksXHJcbiAgICAgICAgdGFrZSgxKVxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGF0dGFjaFRlbXBsYXRlUG9ydGFsKG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYsIG56RHJvcGRvd25NZW51Q29tcG9uZW50OiBOekRyb3Bkb3duTWVudUNvbXBvbmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5uekRyb3Bkb3duTWVudUNvbXBvbmVudCA9IG56RHJvcGRvd25NZW51Q29tcG9uZW50O1xyXG4gICAgbnpEcm9wZG93bk1lbnVDb21wb25lbnQuc2V0VmFsdWUoJ256VHJpZ2dlcicsICdjbGljaycpO1xyXG4gICAgdGhpcy5jbGlja01lbnVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMuY2xpY2tNZW51U3Vic2NyaXB0aW9uID0gbnpEcm9wZG93bk1lbnVDb21wb25lbnQubnpNZW51RHJvcGRvd25TZXJ2aWNlLm1lbnVJdGVtQ2xpY2skLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH0pO1xyXG4gICAgb3ZlcmxheVJlZi5hdHRhY2gobmV3IFRlbXBsYXRlUG9ydGFsKG56RHJvcGRvd25NZW51Q29tcG9uZW50LnRlbXBsYXRlUmVmLCBuekRyb3Bkb3duTWVudUNvbXBvbmVudC52aWV3Q29udGFpbmVyUmVmKSk7XHJcbiAgICB0aGlzLnNldE9wZW5TdGF0ZSh0cnVlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0T3BlblN0YXRlKHN0YXRlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLm56RHJvcGRvd25NZW51Q29tcG9uZW50LnNldFZhbHVlKCdvcGVuJywgc3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRPdmVybGF5Q29uZmlnKCRldmVudDogTW91c2VFdmVudCk6IE92ZXJsYXlDb25maWcge1xyXG4gICAgcmV0dXJuIG5ldyBPdmVybGF5Q29uZmlnKHtcclxuICAgICAgcGFuZWxDbGFzczogJ256LWRyb3Bkb3duLXBhbmVsJyxcclxuICAgICAgcG9zaXRpb25TdHJhdGVneTogdGhpcy5nZW5lcmF0ZVBvc2l0aW9uU3RyYXRlZ3koJGV2ZW50KSxcclxuICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmNsb3NlKClcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZW5lcmF0ZVBvc2l0aW9uU3RyYXRlZ3koJGV2ZW50OiBNb3VzZUV2ZW50KTogRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5IHtcclxuICAgIHJldHVybiB0aGlzLm92ZXJsYXlcclxuICAgICAgLnBvc2l0aW9uKClcclxuICAgICAgLmZsZXhpYmxlQ29ubmVjdGVkVG8oeyB4OiAkZXZlbnQueCwgeTogJGV2ZW50LnkgfSlcclxuICAgICAgLndpdGhQb3NpdGlvbnMoW1xyXG4gICAgICAgIG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ3RvcCcgfSwgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICd0b3AnIH0pLFxyXG4gICAgICAgIG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ3RvcCcgfSwgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICdib3R0b20nIH0pLFxyXG4gICAgICAgIG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ3RvcCcgfSwgeyBvdmVybGF5WDogJ2VuZCcsIG92ZXJsYXlZOiAnYm90dG9tJyB9KSxcclxuICAgICAgICBuZXcgQ29ubmVjdGlvblBvc2l0aW9uUGFpcih7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICd0b3AnIH0sIHsgb3ZlcmxheVg6ICdlbmQnLCBvdmVybGF5WTogJ3RvcCcgfSlcclxuICAgICAgXSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN1YnNjcmliZVRvUG9zaXRpb25zKHBvc2l0aW9uOiBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3kpOiB2b2lkIHtcclxuICAgIHRoaXMucG9zaXRpb25TdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMucG9zaXRpb25TdWJzY3JpcHRpb24gPSBwb3NpdGlvbi5wb3NpdGlvbkNoYW5nZXMuc3Vic2NyaWJlKGNoYW5nZSA9PiB7XHJcbiAgICAgIC8vIFRPRE86IHBvc2l0aW9uQ2hhbmdlcyB3b24ndCB0cmlnZ2VyIGlmIG5vdCBkaXNwb3NlXHJcbiAgICAgIHRoaXMubnpEcm9wZG93bk1lbnVDb21wb25lbnQuc2V0VmFsdWUoJ2Ryb3BEb3duUG9zaXRpb24nLCBjaGFuZ2UuY29ubmVjdGlvblBhaXIub3ZlcmxheVkgPT09ICdib3R0b20nID8gJ3RvcCcgOiAnYm90dG9tJyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlT3ZlcmxheSgkZXZlbnQ6IE1vdXNlRXZlbnQpOiBPdmVybGF5UmVmIHtcclxuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuZ2V0T3ZlcmxheUNvbmZpZygkZXZlbnQpO1xyXG4gICAgaWYgKCF0aGlzLm92ZXJsYXlSZWYpIHtcclxuICAgICAgdGhpcy5vdmVybGF5UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZShjb25maWcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbih0aGlzLm92ZXJsYXlSZWYsICRldmVudCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnN1YnNjcmliZVRvUG9zaXRpb25zKGNvbmZpZy5wb3NpdGlvblN0cmF0ZWd5IGFzIEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSk7XHJcbiAgICByZXR1cm4gdGhpcy5vdmVybGF5UmVmO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVQb3NpdGlvbihvdmVybGF5UmVmOiBPdmVybGF5UmVmLCAkZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIG92ZXJsYXlSZWYudXBkYXRlUG9zaXRpb25TdHJhdGVneSh0aGlzLmdlbmVyYXRlUG9zaXRpb25TdHJhdGVneSgkZXZlbnQpKTtcclxuICB9XHJcbn1cclxuIl19
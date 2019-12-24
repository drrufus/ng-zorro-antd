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
var NzContextMenuService = /** @class */ (function () {
    function NzContextMenuService(overlay) {
        this.overlay = overlay;
        this.clickOutsideSubscription = Subscription.EMPTY;
        this.clickMenuSubscription = Subscription.EMPTY;
        this.positionSubscription = Subscription.EMPTY;
    }
    NzContextMenuService.prototype.create = function ($event, nzDropdownMenuComponent) {
        $event.preventDefault();
        var overlayRef = this.createOverlay($event);
        if (overlayRef.hasAttached()) {
            this.close();
        }
        this.attachTemplatePortal(overlayRef, nzDropdownMenuComponent);
        this.handleClickOutside();
    };
    NzContextMenuService.prototype.close = function () {
        if (this.overlayRef) {
            this.overlayRef.detach();
            this.setOpenState(false);
            this.clickOutsideSubscription.unsubscribe();
            this.clickMenuSubscription.unsubscribe();
            this.positionSubscription.unsubscribe();
        }
    };
    NzContextMenuService.prototype.handleClickOutside = function () {
        var _this = this;
        this.clickOutsideSubscription.unsubscribe();
        this.clickOutsideSubscription = fromEvent(document, 'click')
            .pipe(filter(function (event) { return !!_this.overlayRef && !_this.overlayRef.overlayElement.contains(event.target); }), 
        // handle firefox contextmenu event
        filter(function (event) { return event.button !== 2; }), take(1))
            .subscribe(function () {
            _this.close();
        });
    };
    NzContextMenuService.prototype.attachTemplatePortal = function (overlayRef, nzDropdownMenuComponent) {
        var _this = this;
        this.nzDropdownMenuComponent = nzDropdownMenuComponent;
        nzDropdownMenuComponent.setValue('nzTrigger', 'click');
        this.clickMenuSubscription.unsubscribe();
        this.clickMenuSubscription = nzDropdownMenuComponent.nzMenuDropdownService.menuItemClick$.subscribe(function () {
            _this.close();
        });
        overlayRef.attach(new TemplatePortal(nzDropdownMenuComponent.templateRef, nzDropdownMenuComponent.viewContainerRef));
        this.setOpenState(true);
    };
    NzContextMenuService.prototype.setOpenState = function (state) {
        this.nzDropdownMenuComponent.setValue('open', state);
    };
    NzContextMenuService.prototype.getOverlayConfig = function ($event) {
        return new OverlayConfig({
            panelClass: 'nz-dropdown-panel',
            positionStrategy: this.generatePositionStrategy($event),
            scrollStrategy: this.overlay.scrollStrategies.close()
        });
    };
    NzContextMenuService.prototype.generatePositionStrategy = function ($event) {
        return this.overlay
            .position()
            .flexibleConnectedTo({ x: $event.x, y: $event.y })
            .withPositions([
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'top' }),
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'bottom' }),
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'top' })
        ]);
    };
    NzContextMenuService.prototype.subscribeToPositions = function (position) {
        var _this = this;
        this.positionSubscription.unsubscribe();
        this.positionSubscription = position.positionChanges.subscribe(function (change) {
            // TODO: positionChanges won't trigger if not dispose
            _this.nzDropdownMenuComponent.setValue('dropDownPosition', change.connectionPair.overlayY === 'bottom' ? 'top' : 'bottom');
        });
    };
    NzContextMenuService.prototype.createOverlay = function ($event) {
        var config = this.getOverlayConfig($event);
        if (!this.overlayRef) {
            this.overlayRef = this.overlay.create(config);
        }
        else {
            this.updatePosition(this.overlayRef, $event);
        }
        this.subscribeToPositions(config.positionStrategy);
        return this.overlayRef;
    };
    NzContextMenuService.prototype.updatePosition = function (overlayRef, $event) {
        overlayRef.updatePositionStrategy(this.generatePositionStrategy($event));
    };
    /** @nocollapse */ NzContextMenuService.ɵfac = function NzContextMenuService_Factory(t) { return new (t || NzContextMenuService)(i0.ɵɵinject(i1.Overlay)); };
    /** @nocollapse */ NzContextMenuService.ɵprov = i0.ɵɵdefineInjectable({ token: NzContextMenuService, factory: NzContextMenuService.ɵfac, providedIn: NzContextMenuServiceModule });
    return NzContextMenuService;
}());
export { NzContextMenuService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzContextMenuService, [{
        type: Injectable,
        args: [{
                providedIn: NzContextMenuServiceModule
            }]
    }], function () { return [{ type: i1.Overlay }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29udGV4dC1tZW51LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2Ryb3Bkb3duLyIsInNvdXJjZXMiOlsibnotY29udGV4dC1tZW51LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsbUVBQW1FO0FBQ25FLE9BQU8sRUFBRSxzQkFBc0IsRUFBcUMsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLHNCQUFzQixDQUFDO0FBQ3JJLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7OztBQUc5RTtJQVVFLDhCQUFvQixPQUFnQjtRQUFoQixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBSjVCLDZCQUF3QixHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFDOUMsMEJBQXFCLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUMzQyx5QkFBb0IsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO0lBRVgsQ0FBQztJQUV4QyxxQ0FBTSxHQUFOLFVBQU8sTUFBa0IsRUFBRSx1QkFBZ0Q7UUFDekUsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUMsSUFBSSxVQUFVLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFDNUIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2Q7UUFDRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxFQUFFLHVCQUF1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QUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQy9DO2FBQU07WUFDTCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDOUM7UUFDRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLGdCQUFxRCxDQUFDLENBQUM7UUFDeEYsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFFTyw2Q0FBYyxHQUF0QixVQUF1QixVQUFzQixFQUFFLE1BQWtCO1FBQy9ELFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUMzRSxDQUFDOzRGQW5HVSxvQkFBb0I7Z0VBQXBCLG9CQUFvQixXQUFwQixvQkFBb0IsbUJBRm5CLDBCQUEwQjsrQkFsQnhDO0NBd0hDLEFBdkdELElBdUdDO1NBcEdZLG9CQUFvQjtrREFBcEIsb0JBQW9CO2NBSGhDLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsMEJBQTBCO2FBQ3ZDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG4vKioga2VlcCB0cmFjayBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9tYXRlcmlhbDIvaXNzdWVzLzUwMDcgKiovXHJcbmltcG9ydCB7IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIsIEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSwgT3ZlcmxheSwgT3ZlcmxheUNvbmZpZywgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgVGVtcGxhdGVQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE56Q29udGV4dE1lbnVTZXJ2aWNlTW9kdWxlIH0gZnJvbSAnLi9uei1jb250ZXh0LW1lbnUuc2VydmljZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBOekRyb3Bkb3duTWVudUNvbXBvbmVudCB9IGZyb20gJy4vbnotZHJvcGRvd24tbWVudS5jb21wb25lbnQnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46IE56Q29udGV4dE1lbnVTZXJ2aWNlTW9kdWxlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekNvbnRleHRNZW51U2VydmljZSB7XHJcbiAgcHJpdmF0ZSBvdmVybGF5UmVmOiBPdmVybGF5UmVmO1xyXG4gIHByaXZhdGUgbnpEcm9wZG93bk1lbnVDb21wb25lbnQ6IE56RHJvcGRvd25NZW51Q29tcG9uZW50O1xyXG4gIHByaXZhdGUgY2xpY2tPdXRzaWRlU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xyXG4gIHByaXZhdGUgY2xpY2tNZW51U3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xyXG4gIHByaXZhdGUgcG9zaXRpb25TdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSkge31cclxuXHJcbiAgY3JlYXRlKCRldmVudDogTW91c2VFdmVudCwgbnpEcm9wZG93bk1lbnVDb21wb25lbnQ6IE56RHJvcGRvd25NZW51Q29tcG9uZW50KTogdm9pZCB7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IG92ZXJsYXlSZWYgPSB0aGlzLmNyZWF0ZU92ZXJsYXkoJGV2ZW50KTtcclxuICAgIGlmIChvdmVybGF5UmVmLmhhc0F0dGFjaGVkKCkpIHtcclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5hdHRhY2hUZW1wbGF0ZVBvcnRhbChvdmVybGF5UmVmLCBuekRyb3Bkb3duTWVudUNvbXBvbmVudCk7XHJcbiAgICB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZSgpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5vdmVybGF5UmVmKSB7XHJcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5kZXRhY2goKTtcclxuICAgICAgdGhpcy5zZXRPcGVuU3RhdGUoZmFsc2UpO1xyXG4gICAgICB0aGlzLmNsaWNrT3V0c2lkZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICB0aGlzLmNsaWNrTWVudVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICB0aGlzLnBvc2l0aW9uU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhbmRsZUNsaWNrT3V0c2lkZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xpY2tPdXRzaWRlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLmNsaWNrT3V0c2lkZVN1YnNjcmlwdGlvbiA9IGZyb21FdmVudDxNb3VzZUV2ZW50Pihkb2N1bWVudCwgJ2NsaWNrJylcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgZmlsdGVyKGV2ZW50ID0+ICEhdGhpcy5vdmVybGF5UmVmICYmICF0aGlzLm92ZXJsYXlSZWYub3ZlcmxheUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KSksXHJcbiAgICAgICAgLy8gaGFuZGxlIGZpcmVmb3ggY29udGV4dG1lbnUgZXZlbnRcclxuICAgICAgICBmaWx0ZXIoZXZlbnQgPT4gZXZlbnQuYnV0dG9uICE9PSAyKSxcclxuICAgICAgICB0YWtlKDEpXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXR0YWNoVGVtcGxhdGVQb3J0YWwob3ZlcmxheVJlZjogT3ZlcmxheVJlZiwgbnpEcm9wZG93bk1lbnVDb21wb25lbnQ6IE56RHJvcGRvd25NZW51Q29tcG9uZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLm56RHJvcGRvd25NZW51Q29tcG9uZW50ID0gbnpEcm9wZG93bk1lbnVDb21wb25lbnQ7XHJcbiAgICBuekRyb3Bkb3duTWVudUNvbXBvbmVudC5zZXRWYWx1ZSgnbnpUcmlnZ2VyJywgJ2NsaWNrJyk7XHJcbiAgICB0aGlzLmNsaWNrTWVudVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5jbGlja01lbnVTdWJzY3JpcHRpb24gPSBuekRyb3Bkb3duTWVudUNvbXBvbmVudC5uek1lbnVEcm9wZG93blNlcnZpY2UubWVudUl0ZW1DbGljayQuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfSk7XHJcbiAgICBvdmVybGF5UmVmLmF0dGFjaChuZXcgVGVtcGxhdGVQb3J0YWwobnpEcm9wZG93bk1lbnVDb21wb25lbnQudGVtcGxhdGVSZWYsIG56RHJvcGRvd25NZW51Q29tcG9uZW50LnZpZXdDb250YWluZXJSZWYpKTtcclxuICAgIHRoaXMuc2V0T3BlblN0YXRlKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRPcGVuU3RhdGUoc3RhdGU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMubnpEcm9wZG93bk1lbnVDb21wb25lbnQuc2V0VmFsdWUoJ29wZW4nLCBzdGF0ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE92ZXJsYXlDb25maWcoJGV2ZW50OiBNb3VzZUV2ZW50KTogT3ZlcmxheUNvbmZpZyB7XHJcbiAgICByZXR1cm4gbmV3IE92ZXJsYXlDb25maWcoe1xyXG4gICAgICBwYW5lbENsYXNzOiAnbnotZHJvcGRvd24tcGFuZWwnLFxyXG4gICAgICBwb3NpdGlvblN0cmF0ZWd5OiB0aGlzLmdlbmVyYXRlUG9zaXRpb25TdHJhdGVneSgkZXZlbnQpLFxyXG4gICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMuY2xvc2UoKVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdlbmVyYXRlUG9zaXRpb25TdHJhdGVneSgkZXZlbnQ6IE1vdXNlRXZlbnQpOiBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3kge1xyXG4gICAgcmV0dXJuIHRoaXMub3ZlcmxheVxyXG4gICAgICAucG9zaXRpb24oKVxyXG4gICAgICAuZmxleGlibGVDb25uZWN0ZWRUbyh7IHg6ICRldmVudC54LCB5OiAkZXZlbnQueSB9KVxyXG4gICAgICAud2l0aFBvc2l0aW9ucyhbXHJcbiAgICAgICAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAndG9wJyB9LCB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ3RvcCcgfSksXHJcbiAgICAgICAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAndG9wJyB9LCB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ2JvdHRvbScgfSksXHJcbiAgICAgICAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAndG9wJyB9LCB7IG92ZXJsYXlYOiAnZW5kJywgb3ZlcmxheVk6ICdib3R0b20nIH0pLFxyXG4gICAgICAgIG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ3RvcCcgfSwgeyBvdmVybGF5WDogJ2VuZCcsIG92ZXJsYXlZOiAndG9wJyB9KVxyXG4gICAgICBdKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3Vic2NyaWJlVG9Qb3NpdGlvbnMocG9zaXRpb246IEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSk6IHZvaWQge1xyXG4gICAgdGhpcy5wb3NpdGlvblN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5wb3NpdGlvblN1YnNjcmlwdGlvbiA9IHBvc2l0aW9uLnBvc2l0aW9uQ2hhbmdlcy5zdWJzY3JpYmUoY2hhbmdlID0+IHtcclxuICAgICAgLy8gVE9ETzogcG9zaXRpb25DaGFuZ2VzIHdvbid0IHRyaWdnZXIgaWYgbm90IGRpc3Bvc2VcclxuICAgICAgdGhpcy5uekRyb3Bkb3duTWVudUNvbXBvbmVudC5zZXRWYWx1ZSgnZHJvcERvd25Qb3NpdGlvbicsIGNoYW5nZS5jb25uZWN0aW9uUGFpci5vdmVybGF5WSA9PT0gJ2JvdHRvbScgPyAndG9wJyA6ICdib3R0b20nKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVPdmVybGF5KCRldmVudDogTW91c2VFdmVudCk6IE92ZXJsYXlSZWYge1xyXG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5nZXRPdmVybGF5Q29uZmlnKCRldmVudCk7XHJcbiAgICBpZiAoIXRoaXMub3ZlcmxheVJlZikge1xyXG4gICAgICB0aGlzLm92ZXJsYXlSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKGNvbmZpZyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKHRoaXMub3ZlcmxheVJlZiwgJGV2ZW50KTtcclxuICAgIH1cclxuICAgIHRoaXMuc3Vic2NyaWJlVG9Qb3NpdGlvbnMoY29uZmlnLnBvc2l0aW9uU3RyYXRlZ3kgYXMgRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5KTtcclxuICAgIHJldHVybiB0aGlzLm92ZXJsYXlSZWY7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZVBvc2l0aW9uKG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYsICRldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgb3ZlcmxheVJlZi51cGRhdGVQb3NpdGlvblN0cmF0ZWd5KHRoaXMuZ2VuZXJhdGVQb3NpdGlvblN0cmF0ZWd5KCRldmVudCkpO1xyXG4gIH1cclxufVxyXG4iXX0=
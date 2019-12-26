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
var NzContextMenuService = /** @class */ (function () {
    function NzContextMenuService(overlay) {
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
    NzContextMenuService.prototype.create = /**
     * @param {?} $event
     * @param {?} nzDropdownMenuComponent
     * @return {?}
     */
    function ($event, nzDropdownMenuComponent) {
        $event.preventDefault();
        /** @type {?} */
        var overlayRef = this.createOverlay($event);
        if (overlayRef.hasAttached()) {
            this.close();
        }
        this.attachTemplatePortal(overlayRef, nzDropdownMenuComponent);
        this.handleClickOutside();
    };
    /**
     * @return {?}
     */
    NzContextMenuService.prototype.close = /**
     * @return {?}
     */
    function () {
        if (this.overlayRef) {
            this.overlayRef.detach();
            this.setOpenState(false);
            this.clickOutsideSubscription.unsubscribe();
            this.clickMenuSubscription.unsubscribe();
            this.positionSubscription.unsubscribe();
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzContextMenuService.prototype.handleClickOutside = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.clickOutsideSubscription.unsubscribe();
        this.clickOutsideSubscription = fromEvent(document, 'click')
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return !!_this.overlayRef && !_this.overlayRef.overlayElement.contains((/** @type {?} */ (event.target))); })), 
        // handle firefox contextmenu event
        filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.button !== 2; })), take(1))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.close();
        }));
    };
    /**
     * @private
     * @param {?} overlayRef
     * @param {?} nzDropdownMenuComponent
     * @return {?}
     */
    NzContextMenuService.prototype.attachTemplatePortal = /**
     * @private
     * @param {?} overlayRef
     * @param {?} nzDropdownMenuComponent
     * @return {?}
     */
    function (overlayRef, nzDropdownMenuComponent) {
        var _this = this;
        this.nzDropdownMenuComponent = nzDropdownMenuComponent;
        nzDropdownMenuComponent.setValue('nzTrigger', 'click');
        this.clickMenuSubscription.unsubscribe();
        this.clickMenuSubscription = nzDropdownMenuComponent.nzMenuDropdownService.menuItemClick$.subscribe((/**
         * @return {?}
         */
        function () {
            _this.close();
        }));
        overlayRef.attach(new TemplatePortal(nzDropdownMenuComponent.templateRef, nzDropdownMenuComponent.viewContainerRef));
        this.setOpenState(true);
    };
    /**
     * @private
     * @param {?} state
     * @return {?}
     */
    NzContextMenuService.prototype.setOpenState = /**
     * @private
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this.nzDropdownMenuComponent.setValue('open', state);
    };
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    NzContextMenuService.prototype.getOverlayConfig = /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        return new OverlayConfig({
            panelClass: 'nz-dropdown-panel',
            positionStrategy: this.generatePositionStrategy($event),
            scrollStrategy: this.overlay.scrollStrategies.close()
        });
    };
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    NzContextMenuService.prototype.generatePositionStrategy = /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
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
    /**
     * @private
     * @param {?} position
     * @return {?}
     */
    NzContextMenuService.prototype.subscribeToPositions = /**
     * @private
     * @param {?} position
     * @return {?}
     */
    function (position) {
        var _this = this;
        this.positionSubscription.unsubscribe();
        this.positionSubscription = position.positionChanges.subscribe((/**
         * @param {?} change
         * @return {?}
         */
        function (change) {
            // TODO: positionChanges won't trigger if not dispose
            _this.nzDropdownMenuComponent.setValue('dropDownPosition', change.connectionPair.overlayY === 'bottom' ? 'top' : 'bottom');
        }));
    };
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    NzContextMenuService.prototype.createOverlay = /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        /** @type {?} */
        var config = this.getOverlayConfig($event);
        if (!this.overlayRef) {
            this.overlayRef = this.overlay.create(config);
        }
        else {
            this.updatePosition(this.overlayRef, $event);
        }
        this.subscribeToPositions((/** @type {?} */ (config.positionStrategy)));
        return this.overlayRef;
    };
    /**
     * @private
     * @param {?} overlayRef
     * @param {?} $event
     * @return {?}
     */
    NzContextMenuService.prototype.updatePosition = /**
     * @private
     * @param {?} overlayRef
     * @param {?} $event
     * @return {?}
     */
    function (overlayRef, $event) {
        overlayRef.updatePositionStrategy(this.generatePositionStrategy($event));
    };
    NzContextMenuService.decorators = [
        { type: Injectable, args: [{
                    providedIn: NzContextMenuServiceModule
                },] }
    ];
    /** @nocollapse */
    NzContextMenuService.ctorParameters = function () { return [
        { type: Overlay }
    ]; };
    /** @nocollapse */ NzContextMenuService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NzContextMenuService_Factory() { return new NzContextMenuService(i0.ɵɵinject(i1.Overlay)); }, token: NzContextMenuService, providedIn: i2.NzContextMenuServiceModule });
    return NzContextMenuService;
}());
export { NzContextMenuService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29udGV4dC1tZW51LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2Ryb3Bkb3duLyIsInNvdXJjZXMiOlsibnotY29udGV4dC1tZW51LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVNBLE9BQU8sRUFDTCxzQkFBc0IsRUFFdEIsT0FBTyxFQUNQLGFBQWEsRUFFZCxNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7Ozs7QUFHOUU7SUFVRSw4QkFBb0IsT0FBZ0I7UUFBaEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUo1Qiw2QkFBd0IsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO1FBQzlDLDBCQUFxQixHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFDM0MseUJBQW9CLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztJQUVYLENBQUM7Ozs7OztJQUV4QyxxQ0FBTTs7Ozs7SUFBTixVQUFPLE1BQWtCLEVBQUUsdUJBQWdEO1FBQ3pFLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQzs7WUFDbEIsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO1FBQzdDLElBQUksVUFBVSxDQUFDLFdBQVcsRUFBRSxFQUFFO1lBQzVCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNkO1FBQ0QsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCxvQ0FBSzs7O0lBQUw7UUFDRSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUM1QyxJQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDekMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQzs7Ozs7SUFFTyxpREFBa0I7Ozs7SUFBMUI7UUFBQSxpQkFZQztRQVhDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM1QyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsU0FBUyxDQUFhLFFBQVEsRUFBRSxPQUFPLENBQUM7YUFDckUsSUFBSSxDQUNILE1BQU07Ozs7UUFBQyxVQUFBLEtBQUssSUFBSSxPQUFBLENBQUMsQ0FBQyxLQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLG1CQUFBLEtBQUssQ0FBQyxNQUFNLEVBQWUsQ0FBQyxFQUExRixDQUEwRixFQUFDO1FBQzNHLG1DQUFtQztRQUNuQyxNQUFNOzs7O1FBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsRUFBQyxFQUNuQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1I7YUFDQSxTQUFTOzs7UUFBQztZQUNULEtBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNmLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7Ozs7OztJQUVPLG1EQUFvQjs7Ozs7O0lBQTVCLFVBQTZCLFVBQXNCLEVBQUUsdUJBQWdEO1FBQXJHLGlCQVdDO1FBVkMsSUFBSSxDQUFDLHVCQUF1QixHQUFHLHVCQUF1QixDQUFDO1FBQ3ZELHVCQUF1QixDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyx1QkFBdUIsQ0FBQyxxQkFBcUIsQ0FBQyxjQUFjLENBQUMsU0FBUzs7O1FBQUM7WUFDbEcsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsQ0FBQyxFQUFDLENBQUM7UUFDSCxVQUFVLENBQUMsTUFBTSxDQUNmLElBQUksY0FBYyxDQUFDLHVCQUF1QixDQUFDLFdBQVcsRUFBRSx1QkFBdUIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUNsRyxDQUFDO1FBQ0YsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7Ozs7SUFFTywyQ0FBWTs7Ozs7SUFBcEIsVUFBcUIsS0FBYztRQUNqQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7Ozs7SUFFTywrQ0FBZ0I7Ozs7O0lBQXhCLFVBQXlCLE1BQWtCO1FBQ3pDLE9BQU8sSUFBSSxhQUFhLENBQUM7WUFDdkIsVUFBVSxFQUFFLG1CQUFtQjtZQUMvQixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDO1lBQ3ZELGNBQWMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRTtTQUN0RCxDQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFTyx1REFBd0I7Ozs7O0lBQWhDLFVBQWlDLE1BQWtCO1FBQ2pELE9BQU8sSUFBSSxDQUFDLE9BQU87YUFDaEIsUUFBUSxFQUFFO2FBQ1YsbUJBQW1CLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDO2FBQ2pELGFBQWEsQ0FBQztZQUNiLElBQUksc0JBQXNCLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDO1lBQ3hHLElBQUksc0JBQXNCLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDO1lBQzNHLElBQUksc0JBQXNCLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDO1lBQ3pHLElBQUksc0JBQXNCLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDO1NBQ3ZHLENBQUMsQ0FBQztJQUNQLENBQUM7Ozs7OztJQUVPLG1EQUFvQjs7Ozs7SUFBNUIsVUFBNkIsUUFBMkM7UUFBeEUsaUJBU0M7UUFSQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsTUFBTTtZQUNuRSxxREFBcUQ7WUFDckQsS0FBSSxDQUFDLHVCQUF1QixDQUFDLFFBQVEsQ0FDbkMsa0JBQWtCLEVBQ2xCLE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQy9ELENBQUM7UUFDSixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVPLDRDQUFhOzs7OztJQUFyQixVQUFzQixNQUFrQjs7WUFDaEMsTUFBTSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7UUFDNUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMvQzthQUFNO1lBQ0wsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzlDO1FBQ0QsSUFBSSxDQUFDLG9CQUFvQixDQUFDLG1CQUFBLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBcUMsQ0FBQyxDQUFDO1FBQ3hGLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDOzs7Ozs7O0lBRU8sNkNBQWM7Ozs7OztJQUF0QixVQUF1QixVQUFzQixFQUFFLE1BQWtCO1FBQy9ELFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUMzRSxDQUFDOztnQkEzR0YsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSwwQkFBMEI7aUJBQ3ZDOzs7O2dCQWJDLE9BQU87OzsrQkFaVDtDQW1JQyxBQTVHRCxJQTRHQztTQXpHWSxvQkFBb0I7Ozs7OztJQUMvQiwwQ0FBK0I7Ozs7O0lBQy9CLHVEQUF5RDs7Ozs7SUFDekQsd0RBQXNEOzs7OztJQUN0RCxxREFBbUQ7Ozs7O0lBQ25ELG9EQUFrRDs7Ozs7SUFFdEMsdUNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG4vKioga2VlcCB0cmFjayBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9tYXRlcmlhbDIvaXNzdWVzLzUwMDcgKiovXHJcbmltcG9ydCB7XHJcbiAgQ29ubmVjdGlvblBvc2l0aW9uUGFpcixcclxuICBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3ksXHJcbiAgT3ZlcmxheSxcclxuICBPdmVybGF5Q29uZmlnLFxyXG4gIE92ZXJsYXlSZWZcclxufSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IFRlbXBsYXRlUG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlsdGVyLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBOekNvbnRleHRNZW51U2VydmljZU1vZHVsZSB9IGZyb20gJy4vbnotY29udGV4dC1tZW51LnNlcnZpY2UubW9kdWxlJztcclxuaW1wb3J0IHsgTnpEcm9wZG93bk1lbnVDb21wb25lbnQgfSBmcm9tICcuL256LWRyb3Bkb3duLW1lbnUuY29tcG9uZW50JztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiBOekNvbnRleHRNZW51U2VydmljZU1vZHVsZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpDb250ZXh0TWVudVNlcnZpY2Uge1xyXG4gIHByaXZhdGUgb3ZlcmxheVJlZjogT3ZlcmxheVJlZjtcclxuICBwcml2YXRlIG56RHJvcGRvd25NZW51Q29tcG9uZW50OiBOekRyb3Bkb3duTWVudUNvbXBvbmVudDtcclxuICBwcml2YXRlIGNsaWNrT3V0c2lkZVN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcclxuICBwcml2YXRlIGNsaWNrTWVudVN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcclxuICBwcml2YXRlIHBvc2l0aW9uU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXkpIHt9XHJcblxyXG4gIGNyZWF0ZSgkZXZlbnQ6IE1vdXNlRXZlbnQsIG56RHJvcGRvd25NZW51Q29tcG9uZW50OiBOekRyb3Bkb3duTWVudUNvbXBvbmVudCk6IHZvaWQge1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBvdmVybGF5UmVmID0gdGhpcy5jcmVhdGVPdmVybGF5KCRldmVudCk7XHJcbiAgICBpZiAob3ZlcmxheVJlZi5oYXNBdHRhY2hlZCgpKSB7XHJcbiAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH1cclxuICAgIHRoaXMuYXR0YWNoVGVtcGxhdGVQb3J0YWwob3ZlcmxheVJlZiwgbnpEcm9wZG93bk1lbnVDb21wb25lbnQpO1xyXG4gICAgdGhpcy5oYW5kbGVDbGlja091dHNpZGUoKTtcclxuICB9XHJcblxyXG4gIGNsb3NlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZikge1xyXG4gICAgICB0aGlzLm92ZXJsYXlSZWYuZGV0YWNoKCk7XHJcbiAgICAgIHRoaXMuc2V0T3BlblN0YXRlKGZhbHNlKTtcclxuICAgICAgdGhpcy5jbGlja091dHNpZGVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgdGhpcy5jbGlja01lbnVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgdGhpcy5wb3NpdGlvblN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVDbGlja091dHNpZGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsaWNrT3V0c2lkZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5jbGlja091dHNpZGVTdWJzY3JpcHRpb24gPSBmcm9tRXZlbnQ8TW91c2VFdmVudD4oZG9jdW1lbnQsICdjbGljaycpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIGZpbHRlcihldmVudCA9PiAhIXRoaXMub3ZlcmxheVJlZiAmJiAhdGhpcy5vdmVybGF5UmVmLm92ZXJsYXlFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCkpLFxyXG4gICAgICAgIC8vIGhhbmRsZSBmaXJlZm94IGNvbnRleHRtZW51IGV2ZW50XHJcbiAgICAgICAgZmlsdGVyKGV2ZW50ID0+IGV2ZW50LmJ1dHRvbiAhPT0gMiksXHJcbiAgICAgICAgdGFrZSgxKVxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGF0dGFjaFRlbXBsYXRlUG9ydGFsKG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYsIG56RHJvcGRvd25NZW51Q29tcG9uZW50OiBOekRyb3Bkb3duTWVudUNvbXBvbmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5uekRyb3Bkb3duTWVudUNvbXBvbmVudCA9IG56RHJvcGRvd25NZW51Q29tcG9uZW50O1xyXG4gICAgbnpEcm9wZG93bk1lbnVDb21wb25lbnQuc2V0VmFsdWUoJ256VHJpZ2dlcicsICdjbGljaycpO1xyXG4gICAgdGhpcy5jbGlja01lbnVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMuY2xpY2tNZW51U3Vic2NyaXB0aW9uID0gbnpEcm9wZG93bk1lbnVDb21wb25lbnQubnpNZW51RHJvcGRvd25TZXJ2aWNlLm1lbnVJdGVtQ2xpY2skLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH0pO1xyXG4gICAgb3ZlcmxheVJlZi5hdHRhY2goXHJcbiAgICAgIG5ldyBUZW1wbGF0ZVBvcnRhbChuekRyb3Bkb3duTWVudUNvbXBvbmVudC50ZW1wbGF0ZVJlZiwgbnpEcm9wZG93bk1lbnVDb21wb25lbnQudmlld0NvbnRhaW5lclJlZilcclxuICAgICk7XHJcbiAgICB0aGlzLnNldE9wZW5TdGF0ZSh0cnVlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0T3BlblN0YXRlKHN0YXRlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLm56RHJvcGRvd25NZW51Q29tcG9uZW50LnNldFZhbHVlKCdvcGVuJywgc3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRPdmVybGF5Q29uZmlnKCRldmVudDogTW91c2VFdmVudCk6IE92ZXJsYXlDb25maWcge1xyXG4gICAgcmV0dXJuIG5ldyBPdmVybGF5Q29uZmlnKHtcclxuICAgICAgcGFuZWxDbGFzczogJ256LWRyb3Bkb3duLXBhbmVsJyxcclxuICAgICAgcG9zaXRpb25TdHJhdGVneTogdGhpcy5nZW5lcmF0ZVBvc2l0aW9uU3RyYXRlZ3koJGV2ZW50KSxcclxuICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmNsb3NlKClcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZW5lcmF0ZVBvc2l0aW9uU3RyYXRlZ3koJGV2ZW50OiBNb3VzZUV2ZW50KTogRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5IHtcclxuICAgIHJldHVybiB0aGlzLm92ZXJsYXlcclxuICAgICAgLnBvc2l0aW9uKClcclxuICAgICAgLmZsZXhpYmxlQ29ubmVjdGVkVG8oeyB4OiAkZXZlbnQueCwgeTogJGV2ZW50LnkgfSlcclxuICAgICAgLndpdGhQb3NpdGlvbnMoW1xyXG4gICAgICAgIG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ3RvcCcgfSwgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICd0b3AnIH0pLFxyXG4gICAgICAgIG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ3RvcCcgfSwgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICdib3R0b20nIH0pLFxyXG4gICAgICAgIG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ3RvcCcgfSwgeyBvdmVybGF5WDogJ2VuZCcsIG92ZXJsYXlZOiAnYm90dG9tJyB9KSxcclxuICAgICAgICBuZXcgQ29ubmVjdGlvblBvc2l0aW9uUGFpcih7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICd0b3AnIH0sIHsgb3ZlcmxheVg6ICdlbmQnLCBvdmVybGF5WTogJ3RvcCcgfSlcclxuICAgICAgXSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN1YnNjcmliZVRvUG9zaXRpb25zKHBvc2l0aW9uOiBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3kpOiB2b2lkIHtcclxuICAgIHRoaXMucG9zaXRpb25TdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMucG9zaXRpb25TdWJzY3JpcHRpb24gPSBwb3NpdGlvbi5wb3NpdGlvbkNoYW5nZXMuc3Vic2NyaWJlKGNoYW5nZSA9PiB7XHJcbiAgICAgIC8vIFRPRE86IHBvc2l0aW9uQ2hhbmdlcyB3b24ndCB0cmlnZ2VyIGlmIG5vdCBkaXNwb3NlXHJcbiAgICAgIHRoaXMubnpEcm9wZG93bk1lbnVDb21wb25lbnQuc2V0VmFsdWUoXHJcbiAgICAgICAgJ2Ryb3BEb3duUG9zaXRpb24nLFxyXG4gICAgICAgIGNoYW5nZS5jb25uZWN0aW9uUGFpci5vdmVybGF5WSA9PT0gJ2JvdHRvbScgPyAndG9wJyA6ICdib3R0b20nXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlT3ZlcmxheSgkZXZlbnQ6IE1vdXNlRXZlbnQpOiBPdmVybGF5UmVmIHtcclxuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuZ2V0T3ZlcmxheUNvbmZpZygkZXZlbnQpO1xyXG4gICAgaWYgKCF0aGlzLm92ZXJsYXlSZWYpIHtcclxuICAgICAgdGhpcy5vdmVybGF5UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZShjb25maWcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbih0aGlzLm92ZXJsYXlSZWYsICRldmVudCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnN1YnNjcmliZVRvUG9zaXRpb25zKGNvbmZpZy5wb3NpdGlvblN0cmF0ZWd5IGFzIEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSk7XHJcbiAgICByZXR1cm4gdGhpcy5vdmVybGF5UmVmO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVQb3NpdGlvbihvdmVybGF5UmVmOiBPdmVybGF5UmVmLCAkZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIG92ZXJsYXlSZWYudXBkYXRlUG9zaXRpb25TdHJhdGVneSh0aGlzLmdlbmVyYXRlUG9zaXRpb25TdHJhdGVneSgkZXZlbnQpKTtcclxuICB9XHJcbn1cclxuIl19
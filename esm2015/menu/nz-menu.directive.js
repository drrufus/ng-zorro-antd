/**
 * @fileoverview added by tsickle
 * Generated from: nz-menu.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ContentChildren, Directive, ElementRef, EventEmitter, Input, Optional, Output, QueryList, SkipSelf } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { InputBoolean, NzDropdownHigherOrderServiceToken, NzMenuBaseService, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { NzMenuItemDirective } from './nz-menu-item.directive';
import { NzMenuServiceFactory } from './nz-menu.resolver';
import { NzMenuService } from './nz-menu.service';
import { NzSubMenuComponent } from './nz-submenu.component';
const ɵ0 = NzMenuServiceFactory;
export class NzMenuDirective {
    /**
     * @param {?} elementRef
     * @param {?} nzMenuService
     * @param {?} nzUpdateHostClassService
     */
    constructor(elementRef, nzMenuService, nzUpdateHostClassService) {
        this.elementRef = elementRef;
        this.nzMenuService = nzMenuService;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.destroy$ = new Subject();
        this.listOfOpenedNzSubMenuComponent = [];
        this.nzInlineIndent = 24;
        this.nzTheme = 'light';
        this.nzMode = 'vertical';
        this.nzInDropDown = false;
        this.nzInlineCollapsed = false;
        this.nzSelectable = !this.nzMenuService.isInDropDown;
        this.nzClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    updateInlineCollapse() {
        if (this.listOfNzMenuItemDirective) {
            if (this.nzInlineCollapsed) {
                this.listOfOpenedNzSubMenuComponent = this.listOfNzSubMenuComponent.filter((/**
                 * @param {?} submenu
                 * @return {?}
                 */
                submenu => submenu.nzOpen));
                this.listOfNzSubMenuComponent.forEach((/**
                 * @param {?} submenu
                 * @return {?}
                 */
                submenu => submenu.setOpenState(false)));
                this.nzMode = 'vertical';
            }
            else {
                this.listOfOpenedNzSubMenuComponent.forEach((/**
                 * @param {?} submenu
                 * @return {?}
                 */
                submenu => submenu.setOpenState(true)));
                this.listOfOpenedNzSubMenuComponent = [];
                this.nzMode = this.cacheMode;
            }
            this.nzMenuService.setMode(this.nzMode);
        }
    }
    /**
     * @return {?}
     */
    setClassMap() {
        /** @type {?} */
        const prefixName = this.nzMenuService.isInDropDown ? 'ant-dropdown-menu' : 'ant-menu';
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, {
            [`${prefixName}`]: true,
            [`${prefixName}-root`]: true,
            [`${prefixName}-${this.nzTheme}`]: true,
            [`${prefixName}-${this.nzMode}`]: true,
            [`${prefixName}-inline-collapsed`]: this.nzInlineCollapsed
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setClassMap();
        this.nzMenuService.menuItemClick$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} menu
         * @return {?}
         */
        menu => {
            this.nzClick.emit(menu);
            if (this.nzSelectable) {
                this.listOfNzMenuItemDirective.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => item.setSelectedState(item === menu)));
            }
        }));
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.cacheMode = this.nzMode;
        this.updateInlineCollapse();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzInlineCollapsed) {
            this.updateInlineCollapse();
        }
        if (changes.nzInlineIndent) {
            this.nzMenuService.setInlineIndent(this.nzInlineIndent);
        }
        if (changes.nzInDropDown) {
            this.nzMenuService.isInDropDown = this.nzInDropDown;
        }
        if (changes.nzTheme) {
            this.nzMenuService.setTheme(this.nzTheme);
        }
        if (changes.nzMode) {
            this.nzMenuService.setMode(this.nzMode);
            if (!changes.nzMode.isFirstChange() && this.listOfNzSubMenuComponent) {
                this.listOfNzSubMenuComponent.forEach((/**
                 * @param {?} submenu
                 * @return {?}
                 */
                submenu => submenu.setOpenState(false)));
            }
        }
        if (changes.nzTheme || changes.nzMode || changes.nzInlineCollapsed) {
            this.setClassMap();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzMenuDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nz-menu]',
                exportAs: 'nzMenu',
                providers: [
                    NzUpdateHostClassService,
                    NzMenuService,
                    {
                        provide: NzMenuBaseService,
                        useFactory: ɵ0,
                        deps: [[new SkipSelf(), new Optional(), NzDropdownHigherOrderServiceToken], NzMenuService]
                    }
                ]
            },] }
];
/** @nocollapse */
NzMenuDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: NzMenuBaseService },
    { type: NzUpdateHostClassService }
];
NzMenuDirective.propDecorators = {
    listOfNzMenuItemDirective: [{ type: ContentChildren, args: [NzMenuItemDirective, { descendants: true },] }],
    listOfNzSubMenuComponent: [{ type: ContentChildren, args: [NzSubMenuComponent, { descendants: true },] }],
    nzInlineIndent: [{ type: Input }],
    nzTheme: [{ type: Input }],
    nzMode: [{ type: Input }],
    nzInDropDown: [{ type: Input }],
    nzInlineCollapsed: [{ type: Input }],
    nzSelectable: [{ type: Input }],
    nzClick: [{ type: Output }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzMenuDirective.prototype, "nzInDropDown", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzMenuDirective.prototype, "nzInlineCollapsed", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzMenuDirective.prototype, "nzSelectable", void 0);
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzMenuDirective.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzMenuDirective.prototype.cacheMode;
    /**
     * @type {?}
     * @private
     */
    NzMenuDirective.prototype.listOfOpenedNzSubMenuComponent;
    /** @type {?} */
    NzMenuDirective.prototype.listOfNzMenuItemDirective;
    /** @type {?} */
    NzMenuDirective.prototype.listOfNzSubMenuComponent;
    /** @type {?} */
    NzMenuDirective.prototype.nzInlineIndent;
    /** @type {?} */
    NzMenuDirective.prototype.nzTheme;
    /** @type {?} */
    NzMenuDirective.prototype.nzMode;
    /** @type {?} */
    NzMenuDirective.prototype.nzInDropDown;
    /** @type {?} */
    NzMenuDirective.prototype.nzInlineCollapsed;
    /** @type {?} */
    NzMenuDirective.prototype.nzSelectable;
    /** @type {?} */
    NzMenuDirective.prototype.nzClick;
    /** @type {?} */
    NzMenuDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzMenuDirective.prototype.nzMenuService;
    /**
     * @type {?}
     * @private
     */
    NzMenuDirective.prototype.nzUpdateHostClassService;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL21lbnUvIiwic291cmNlcyI6WyJuei1tZW51LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUVMLGVBQWUsRUFDZixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBRVQsUUFBUSxFQUNULE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFDTCxZQUFZLEVBRVosaUNBQWlDLEVBQ2pDLGlCQUFpQixFQUNqQix3QkFBd0IsRUFDekIsTUFBTSxvQkFBb0IsQ0FBQztBQUU1QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7V0FVMUMsb0JBQW9CO0FBS3RDLE1BQU0sT0FBTyxlQUFlOzs7Ozs7SUEwQzFCLFlBQ1MsVUFBc0IsRUFDckIsYUFBZ0MsRUFDaEMsd0JBQWtEO1FBRm5ELGVBQVUsR0FBVixVQUFVLENBQVk7UUFDckIsa0JBQWEsR0FBYixhQUFhLENBQW1CO1FBQ2hDLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUE1Q3BELGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBRXpCLG1DQUE4QixHQUF5QixFQUFFLENBQUM7UUFLekQsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFDcEIsWUFBTyxHQUFxQixPQUFPLENBQUM7UUFDcEMsV0FBTSxHQUF1QixVQUFVLENBQUM7UUFDeEIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzFCLGlCQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztRQUN0RCxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQXVCLENBQUM7SUFnQ2xFLENBQUM7Ozs7SUE5Qkosb0JBQW9CO1FBQ2xCLElBQUksSUFBSSxDQUFDLHlCQUF5QixFQUFFO1lBQ2xDLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO2dCQUMxQixJQUFJLENBQUMsOEJBQThCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU07Ozs7Z0JBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFDLENBQUM7Z0JBQ3RHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxPQUFPOzs7O2dCQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDO2dCQUM5RSxJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQzthQUMxQjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsOEJBQThCLENBQUMsT0FBTzs7OztnQkFBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQztnQkFDbkYsSUFBSSxDQUFDLDhCQUE4QixHQUFHLEVBQUUsQ0FBQztnQkFDekMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQzlCO1lBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQzs7OztJQUVELFdBQVc7O2NBQ0gsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsVUFBVTtRQUNyRixJQUFJLENBQUMsd0JBQXdCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFO1lBQzNFLENBQUMsR0FBRyxVQUFVLEVBQUUsQ0FBQyxFQUFFLElBQUk7WUFDdkIsQ0FBQyxHQUFHLFVBQVUsT0FBTyxDQUFDLEVBQUUsSUFBSTtZQUM1QixDQUFDLEdBQUcsVUFBVSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLElBQUk7WUFDdkMsQ0FBQyxHQUFHLFVBQVUsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxJQUFJO1lBQ3RDLENBQUMsR0FBRyxVQUFVLG1CQUFtQixDQUFDLEVBQUUsSUFBSSxDQUFDLGlCQUFpQjtTQUMzRCxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBUUQsUUFBUTtRQUNOLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxJQUFJLENBQUMsRUFBRTtZQUNoRixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4QixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPOzs7O2dCQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsRUFBQyxDQUFDO2FBQ3RGO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM3QixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRTtZQUM3QixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztTQUM3QjtRQUNELElBQUksT0FBTyxDQUFDLGNBQWMsRUFBRTtZQUMxQixJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDekQ7UUFDRCxJQUFJLE9BQU8sQ0FBQyxZQUFZLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztTQUNyRDtRQUNELElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUNuQixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDM0M7UUFDRCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDbEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxJQUFJLElBQUksQ0FBQyx3QkFBd0IsRUFBRTtnQkFDcEUsSUFBSSxDQUFDLHdCQUF3QixDQUFDLE9BQU87Ozs7Z0JBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUM7YUFDL0U7U0FDRjtRQUNELElBQUksT0FBTyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRTtZQUNsRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7SUFDSCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7WUF2R0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUUsUUFBUTtnQkFDbEIsU0FBUyxFQUFFO29CQUNULHdCQUF3QjtvQkFDeEIsYUFBYTtvQkFDYjt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixVQUFVLElBQXNCO3dCQUNoQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxpQ0FBaUMsQ0FBQyxFQUFFLGFBQWEsQ0FBQztxQkFDM0Y7aUJBQ0Y7YUFDRjs7OztZQXpDQyxVQUFVO1lBb0JWLGlCQUFpQjtZQUNqQix3QkFBd0I7Ozt3Q0F5QnZCLGVBQWUsU0FBQyxtQkFBbUIsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7dUNBRzFELGVBQWUsU0FBQyxrQkFBa0IsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7NkJBQ3pELEtBQUs7c0JBQ0wsS0FBSztxQkFDTCxLQUFLOzJCQUNMLEtBQUs7Z0NBQ0wsS0FBSzsyQkFDTCxLQUFLO3NCQUNMLE1BQU07O0FBSGtCO0lBQWYsWUFBWSxFQUFFOztxREFBc0I7QUFDckI7SUFBZixZQUFZLEVBQUU7OzBEQUEyQjtBQUMxQjtJQUFmLFlBQVksRUFBRTs7cURBQWlEOzs7Ozs7SUFaekUsbUNBQWlDOzs7OztJQUNqQyxvQ0FBc0M7Ozs7O0lBQ3RDLHlEQUFrRTs7SUFDbEUsb0RBRUU7O0lBQ0YsbURBQW9IOztJQUNwSCx5Q0FBNkI7O0lBQzdCLGtDQUE2Qzs7SUFDN0MsaUNBQWlEOztJQUNqRCx1Q0FBOEM7O0lBQzlDLDRDQUFtRDs7SUFDbkQsdUNBQXlFOztJQUN6RSxrQ0FBcUU7O0lBNkJuRSxxQ0FBNkI7Ozs7O0lBQzdCLHdDQUF3Qzs7Ozs7SUFDeEMsbURBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgU2tpcFNlbGZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBJbnB1dEJvb2xlYW4sXHJcbiAgTnpEaXJlY3Rpb25WSElUeXBlLFxyXG4gIE56RHJvcGRvd25IaWdoZXJPcmRlclNlcnZpY2VUb2tlbixcclxuICBOek1lbnVCYXNlU2VydmljZSxcclxuICBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VcclxufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpNZW51SXRlbURpcmVjdGl2ZSB9IGZyb20gJy4vbnotbWVudS1pdGVtLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE56TWVudVNlcnZpY2VGYWN0b3J5IH0gZnJvbSAnLi9uei1tZW51LnJlc29sdmVyJztcclxuaW1wb3J0IHsgTnpNZW51U2VydmljZSB9IGZyb20gJy4vbnotbWVudS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTnpTdWJNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9uei1zdWJtZW51LmNvbXBvbmVudCc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tuei1tZW51XScsXHJcbiAgZXhwb3J0QXM6ICduek1lbnUnLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLFxyXG4gICAgTnpNZW51U2VydmljZSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTnpNZW51QmFzZVNlcnZpY2UsXHJcbiAgICAgIHVzZUZhY3Rvcnk6IE56TWVudVNlcnZpY2VGYWN0b3J5LFxyXG4gICAgICBkZXBzOiBbW25ldyBTa2lwU2VsZigpLCBuZXcgT3B0aW9uYWwoKSwgTnpEcm9wZG93bkhpZ2hlck9yZGVyU2VydmljZVRva2VuXSwgTnpNZW51U2VydmljZV1cclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOek1lbnVEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcclxuICBwcml2YXRlIGNhY2hlTW9kZTogTnpEaXJlY3Rpb25WSElUeXBlO1xyXG4gIHByaXZhdGUgbGlzdE9mT3BlbmVkTnpTdWJNZW51Q29tcG9uZW50OiBOelN1Yk1lbnVDb21wb25lbnRbXSA9IFtdO1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oTnpNZW51SXRlbURpcmVjdGl2ZSwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBsaXN0T2ZOek1lbnVJdGVtRGlyZWN0aXZlOiBRdWVyeUxpc3Q8XHJcbiAgICBOek1lbnVJdGVtRGlyZWN0aXZlXHJcbiAgPjtcclxuICBAQ29udGVudENoaWxkcmVuKE56U3ViTWVudUNvbXBvbmVudCwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBsaXN0T2ZOelN1Yk1lbnVDb21wb25lbnQ6IFF1ZXJ5TGlzdDxOelN1Yk1lbnVDb21wb25lbnQ+O1xyXG4gIEBJbnB1dCgpIG56SW5saW5lSW5kZW50ID0gMjQ7XHJcbiAgQElucHV0KCkgbnpUaGVtZTogJ2xpZ2h0JyB8ICdkYXJrJyA9ICdsaWdodCc7XHJcbiAgQElucHV0KCkgbnpNb2RlOiBOekRpcmVjdGlvblZISVR5cGUgPSAndmVydGljYWwnO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekluRHJvcERvd24gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpJbmxpbmVDb2xsYXBzZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTZWxlY3RhYmxlID0gIXRoaXMubnpNZW51U2VydmljZS5pc0luRHJvcERvd247XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE56TWVudUl0ZW1EaXJlY3RpdmU+KCk7XHJcblxyXG4gIHVwZGF0ZUlubGluZUNvbGxhcHNlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubGlzdE9mTnpNZW51SXRlbURpcmVjdGl2ZSkge1xyXG4gICAgICBpZiAodGhpcy5ueklubGluZUNvbGxhcHNlZCkge1xyXG4gICAgICAgIHRoaXMubGlzdE9mT3BlbmVkTnpTdWJNZW51Q29tcG9uZW50ID0gdGhpcy5saXN0T2ZOelN1Yk1lbnVDb21wb25lbnQuZmlsdGVyKHN1Ym1lbnUgPT4gc3VibWVudS5uek9wZW4pO1xyXG4gICAgICAgIHRoaXMubGlzdE9mTnpTdWJNZW51Q29tcG9uZW50LmZvckVhY2goc3VibWVudSA9PiBzdWJtZW51LnNldE9wZW5TdGF0ZShmYWxzZSkpO1xyXG4gICAgICAgIHRoaXMubnpNb2RlID0gJ3ZlcnRpY2FsJztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmxpc3RPZk9wZW5lZE56U3ViTWVudUNvbXBvbmVudC5mb3JFYWNoKHN1Ym1lbnUgPT4gc3VibWVudS5zZXRPcGVuU3RhdGUodHJ1ZSkpO1xyXG4gICAgICAgIHRoaXMubGlzdE9mT3BlbmVkTnpTdWJNZW51Q29tcG9uZW50ID0gW107XHJcbiAgICAgICAgdGhpcy5uek1vZGUgPSB0aGlzLmNhY2hlTW9kZTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm56TWVudVNlcnZpY2Uuc2V0TW9kZSh0aGlzLm56TW9kZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHByZWZpeE5hbWUgPSB0aGlzLm56TWVudVNlcnZpY2UuaXNJbkRyb3BEb3duID8gJ2FudC1kcm9wZG93bi1tZW51JyA6ICdhbnQtbWVudSc7XHJcbiAgICB0aGlzLm56VXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHtcclxuICAgICAgW2Ake3ByZWZpeE5hbWV9YF06IHRydWUsXHJcbiAgICAgIFtgJHtwcmVmaXhOYW1lfS1yb290YF06IHRydWUsXHJcbiAgICAgIFtgJHtwcmVmaXhOYW1lfS0ke3RoaXMubnpUaGVtZX1gXTogdHJ1ZSxcclxuICAgICAgW2Ake3ByZWZpeE5hbWV9LSR7dGhpcy5uek1vZGV9YF06IHRydWUsXHJcbiAgICAgIFtgJHtwcmVmaXhOYW1lfS1pbmxpbmUtY29sbGFwc2VkYF06IHRoaXMubnpJbmxpbmVDb2xsYXBzZWRcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgbnpNZW51U2VydmljZTogTnpNZW51QmFzZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICAgIHRoaXMubnpNZW51U2VydmljZS5tZW51SXRlbUNsaWNrJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKG1lbnUgPT4ge1xyXG4gICAgICB0aGlzLm56Q2xpY2suZW1pdChtZW51KTtcclxuICAgICAgaWYgKHRoaXMubnpTZWxlY3RhYmxlKSB7XHJcbiAgICAgICAgdGhpcy5saXN0T2ZOek1lbnVJdGVtRGlyZWN0aXZlLmZvckVhY2goaXRlbSA9PiBpdGVtLnNldFNlbGVjdGVkU3RhdGUoaXRlbSA9PT0gbWVudSkpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2FjaGVNb2RlID0gdGhpcy5uek1vZGU7XHJcbiAgICB0aGlzLnVwZGF0ZUlubGluZUNvbGxhcHNlKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5ueklubGluZUNvbGxhcHNlZCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUlubGluZUNvbGxhcHNlKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy5ueklubGluZUluZGVudCkge1xyXG4gICAgICB0aGlzLm56TWVudVNlcnZpY2Uuc2V0SW5saW5lSW5kZW50KHRoaXMubnpJbmxpbmVJbmRlbnQpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMubnpJbkRyb3BEb3duKSB7XHJcbiAgICAgIHRoaXMubnpNZW51U2VydmljZS5pc0luRHJvcERvd24gPSB0aGlzLm56SW5Ecm9wRG93bjtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLm56VGhlbWUpIHtcclxuICAgICAgdGhpcy5uek1lbnVTZXJ2aWNlLnNldFRoZW1lKHRoaXMubnpUaGVtZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy5uek1vZGUpIHtcclxuICAgICAgdGhpcy5uek1lbnVTZXJ2aWNlLnNldE1vZGUodGhpcy5uek1vZGUpO1xyXG4gICAgICBpZiAoIWNoYW5nZXMubnpNb2RlLmlzRmlyc3RDaGFuZ2UoKSAmJiB0aGlzLmxpc3RPZk56U3ViTWVudUNvbXBvbmVudCkge1xyXG4gICAgICAgIHRoaXMubGlzdE9mTnpTdWJNZW51Q29tcG9uZW50LmZvckVhY2goc3VibWVudSA9PiBzdWJtZW51LnNldE9wZW5TdGF0ZShmYWxzZSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy5uelRoZW1lIHx8IGNoYW5nZXMubnpNb2RlIHx8IGNoYW5nZXMubnpJbmxpbmVDb2xsYXBzZWQpIHtcclxuICAgICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcbn1cclxuIl19
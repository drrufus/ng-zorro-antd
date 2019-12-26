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
var ɵ0 = NzMenuServiceFactory;
var NzMenuDirective = /** @class */ (function () {
    function NzMenuDirective(elementRef, nzMenuService, nzUpdateHostClassService) {
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
    NzMenuDirective.prototype.updateInlineCollapse = /**
     * @return {?}
     */
    function () {
        if (this.listOfNzMenuItemDirective) {
            if (this.nzInlineCollapsed) {
                this.listOfOpenedNzSubMenuComponent = this.listOfNzSubMenuComponent.filter((/**
                 * @param {?} submenu
                 * @return {?}
                 */
                function (submenu) { return submenu.nzOpen; }));
                this.listOfNzSubMenuComponent.forEach((/**
                 * @param {?} submenu
                 * @return {?}
                 */
                function (submenu) { return submenu.setOpenState(false); }));
                this.nzMode = 'vertical';
            }
            else {
                this.listOfOpenedNzSubMenuComponent.forEach((/**
                 * @param {?} submenu
                 * @return {?}
                 */
                function (submenu) { return submenu.setOpenState(true); }));
                this.listOfOpenedNzSubMenuComponent = [];
                this.nzMode = this.cacheMode;
            }
            this.nzMenuService.setMode(this.nzMode);
        }
    };
    /**
     * @return {?}
     */
    NzMenuDirective.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var prefixName = this.nzMenuService.isInDropDown ? 'ant-dropdown-menu' : 'ant-menu';
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, (_a = {},
            _a["" + prefixName] = true,
            _a[prefixName + "-root"] = true,
            _a[prefixName + "-" + this.nzTheme] = true,
            _a[prefixName + "-" + this.nzMode] = true,
            _a[prefixName + "-inline-collapsed"] = this.nzInlineCollapsed,
            _a));
    };
    /**
     * @return {?}
     */
    NzMenuDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.setClassMap();
        this.nzMenuService.menuItemClick$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} menu
         * @return {?}
         */
        function (menu) {
            _this.nzClick.emit(menu);
            if (_this.nzSelectable) {
                _this.listOfNzMenuItemDirective.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return item.setSelectedState(item === menu); }));
            }
        }));
    };
    /**
     * @return {?}
     */
    NzMenuDirective.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.cacheMode = this.nzMode;
        this.updateInlineCollapse();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzMenuDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
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
                function (submenu) { return submenu.setOpenState(false); }));
            }
        }
        if (changes.nzTheme || changes.nzMode || changes.nzInlineCollapsed) {
            this.setClassMap();
        }
    };
    /**
     * @return {?}
     */
    NzMenuDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
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
    NzMenuDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NzMenuBaseService },
        { type: NzUpdateHostClassService }
    ]; };
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
    return NzMenuDirective;
}());
export { NzMenuDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL21lbnUvIiwic291cmNlcyI6WyJuei1tZW51LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUVMLGVBQWUsRUFDZixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBRVQsUUFBUSxFQUNULE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFDTCxZQUFZLEVBRVosaUNBQWlDLEVBQ2pDLGlCQUFpQixFQUNqQix3QkFBd0IsRUFDekIsTUFBTSxvQkFBb0IsQ0FBQztBQUU1QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7U0FVMUMsb0JBQW9CO0FBUnRDO0lBdURFLHlCQUNTLFVBQXNCLEVBQ3JCLGFBQWdDLEVBQ2hDLHdCQUFrRDtRQUZuRCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3JCLGtCQUFhLEdBQWIsYUFBYSxDQUFtQjtRQUNoQyw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBNUNwRCxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUV6QixtQ0FBOEIsR0FBeUIsRUFBRSxDQUFDO1FBS3pELG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLFlBQU8sR0FBcUIsT0FBTyxDQUFDO1FBQ3BDLFdBQU0sR0FB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LFFBQVEsRUFBRSxRQUFRO29CQUNsQixTQUFTLEVBQUU7d0JBQ1Qsd0JBQXdCO3dCQUN4QixhQUFhO3dCQUNiOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFVBQVUsSUFBc0I7NEJBQ2hDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxJQUFJLFFBQVEsRUFBRSxFQUFFLGlDQUFpQyxDQUFDLEVBQUUsYUFBYSxDQUFDO3lCQUMzRjtxQkFDRjtpQkFDRjs7OztnQkF6Q0MsVUFBVTtnQkFvQlYsaUJBQWlCO2dCQUNqQix3QkFBd0I7Ozs0Q0F5QnZCLGVBQWUsU0FBQyxtQkFBbUIsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7MkNBRzFELGVBQWUsU0FBQyxrQkFBa0IsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7aUNBQ3pELEtBQUs7MEJBQ0wsS0FBSzt5QkFDTCxLQUFLOytCQUNMLEtBQUs7b0NBQ0wsS0FBSzsrQkFDTCxLQUFLOzBCQUNMLE1BQU07O0lBSGtCO1FBQWYsWUFBWSxFQUFFOzt5REFBc0I7SUFDckI7UUFBZixZQUFZLEVBQUU7OzhEQUEyQjtJQUMxQjtRQUFmLFlBQVksRUFBRTs7eURBQWlEO0lBOEUzRSxzQkFBQztDQUFBLEFBeEdELElBd0dDO1NBM0ZZLGVBQWU7Ozs7OztJQUMxQixtQ0FBaUM7Ozs7O0lBQ2pDLG9DQUFzQzs7Ozs7SUFDdEMseURBQWtFOztJQUNsRSxvREFFRTs7SUFDRixtREFBb0g7O0lBQ3BILHlDQUE2Qjs7SUFDN0Isa0NBQTZDOztJQUM3QyxpQ0FBaUQ7O0lBQ2pELHVDQUE4Qzs7SUFDOUMsNENBQW1EOztJQUNuRCx1Q0FBeUU7O0lBQ3pFLGtDQUFxRTs7SUE2Qm5FLHFDQUE2Qjs7Ozs7SUFDN0Isd0NBQXdDOzs7OztJQUN4QyxtREFBMEQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBRdWVyeUxpc3QsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBTa2lwU2VsZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIElucHV0Qm9vbGVhbixcclxuICBOekRpcmVjdGlvblZISVR5cGUsXHJcbiAgTnpEcm9wZG93bkhpZ2hlck9yZGVyU2VydmljZVRva2VuLFxyXG4gIE56TWVudUJhc2VTZXJ2aWNlLFxyXG4gIE56VXBkYXRlSG9zdENsYXNzU2VydmljZVxyXG59IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOek1lbnVJdGVtRGlyZWN0aXZlIH0gZnJvbSAnLi9uei1tZW51LWl0ZW0uZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTnpNZW51U2VydmljZUZhY3RvcnkgfSBmcm9tICcuL256LW1lbnUucmVzb2x2ZXInO1xyXG5pbXBvcnQgeyBOek1lbnVTZXJ2aWNlIH0gZnJvbSAnLi9uei1tZW51LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOelN1Yk1lbnVDb21wb25lbnQgfSBmcm9tICcuL256LXN1Ym1lbnUuY29tcG9uZW50JztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW256LW1lbnVdJyxcclxuICBleHBvcnRBczogJ256TWVudScsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsXHJcbiAgICBOek1lbnVTZXJ2aWNlLFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOek1lbnVCYXNlU2VydmljZSxcclxuICAgICAgdXNlRmFjdG9yeTogTnpNZW51U2VydmljZUZhY3RvcnksXHJcbiAgICAgIGRlcHM6IFtbbmV3IFNraXBTZWxmKCksIG5ldyBPcHRpb25hbCgpLCBOekRyb3Bkb3duSGlnaGVyT3JkZXJTZXJ2aWNlVG9rZW5dLCBOek1lbnVTZXJ2aWNlXVxyXG4gICAgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56TWVudURpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xyXG4gIHByaXZhdGUgY2FjaGVNb2RlOiBOekRpcmVjdGlvblZISVR5cGU7XHJcbiAgcHJpdmF0ZSBsaXN0T2ZPcGVuZWROelN1Yk1lbnVDb21wb25lbnQ6IE56U3ViTWVudUNvbXBvbmVudFtdID0gW107XHJcbiAgQENvbnRlbnRDaGlsZHJlbihOek1lbnVJdGVtRGlyZWN0aXZlLCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIGxpc3RPZk56TWVudUl0ZW1EaXJlY3RpdmU6IFF1ZXJ5TGlzdDxcclxuICAgIE56TWVudUl0ZW1EaXJlY3RpdmVcclxuICA+O1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oTnpTdWJNZW51Q29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIGxpc3RPZk56U3ViTWVudUNvbXBvbmVudDogUXVlcnlMaXN0PE56U3ViTWVudUNvbXBvbmVudD47XHJcbiAgQElucHV0KCkgbnpJbmxpbmVJbmRlbnQgPSAyNDtcclxuICBASW5wdXQoKSBuelRoZW1lOiAnbGlnaHQnIHwgJ2RhcmsnID0gJ2xpZ2h0JztcclxuICBASW5wdXQoKSBuek1vZGU6IE56RGlyZWN0aW9uVkhJVHlwZSA9ICd2ZXJ0aWNhbCc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56SW5Ecm9wRG93biA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBueklubGluZUNvbGxhcHNlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNlbGVjdGFibGUgPSAhdGhpcy5uek1lbnVTZXJ2aWNlLmlzSW5Ecm9wRG93bjtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TnpNZW51SXRlbURpcmVjdGl2ZT4oKTtcclxuXHJcbiAgdXBkYXRlSW5saW5lQ29sbGFwc2UoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5saXN0T2ZOek1lbnVJdGVtRGlyZWN0aXZlKSB7XHJcbiAgICAgIGlmICh0aGlzLm56SW5saW5lQ29sbGFwc2VkKSB7XHJcbiAgICAgICAgdGhpcy5saXN0T2ZPcGVuZWROelN1Yk1lbnVDb21wb25lbnQgPSB0aGlzLmxpc3RPZk56U3ViTWVudUNvbXBvbmVudC5maWx0ZXIoc3VibWVudSA9PiBzdWJtZW51Lm56T3Blbik7XHJcbiAgICAgICAgdGhpcy5saXN0T2ZOelN1Yk1lbnVDb21wb25lbnQuZm9yRWFjaChzdWJtZW51ID0+IHN1Ym1lbnUuc2V0T3BlblN0YXRlKGZhbHNlKSk7XHJcbiAgICAgICAgdGhpcy5uek1vZGUgPSAndmVydGljYWwnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMubGlzdE9mT3BlbmVkTnpTdWJNZW51Q29tcG9uZW50LmZvckVhY2goc3VibWVudSA9PiBzdWJtZW51LnNldE9wZW5TdGF0ZSh0cnVlKSk7XHJcbiAgICAgICAgdGhpcy5saXN0T2ZPcGVuZWROelN1Yk1lbnVDb21wb25lbnQgPSBbXTtcclxuICAgICAgICB0aGlzLm56TW9kZSA9IHRoaXMuY2FjaGVNb2RlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubnpNZW51U2VydmljZS5zZXRNb2RlKHRoaXMubnpNb2RlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgY29uc3QgcHJlZml4TmFtZSA9IHRoaXMubnpNZW51U2VydmljZS5pc0luRHJvcERvd24gPyAnYW50LWRyb3Bkb3duLW1lbnUnIDogJ2FudC1tZW51JztcclxuICAgIHRoaXMubnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwge1xyXG4gICAgICBbYCR7cHJlZml4TmFtZX1gXTogdHJ1ZSxcclxuICAgICAgW2Ake3ByZWZpeE5hbWV9LXJvb3RgXTogdHJ1ZSxcclxuICAgICAgW2Ake3ByZWZpeE5hbWV9LSR7dGhpcy5uelRoZW1lfWBdOiB0cnVlLFxyXG4gICAgICBbYCR7cHJlZml4TmFtZX0tJHt0aGlzLm56TW9kZX1gXTogdHJ1ZSxcclxuICAgICAgW2Ake3ByZWZpeE5hbWV9LWlubGluZS1jb2xsYXBzZWRgXTogdGhpcy5ueklubGluZUNvbGxhcHNlZFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBuek1lbnVTZXJ2aWNlOiBOek1lbnVCYXNlU2VydmljZSxcclxuICAgIHByaXZhdGUgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgdGhpcy5uek1lbnVTZXJ2aWNlLm1lbnVJdGVtQ2xpY2skLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUobWVudSA9PiB7XHJcbiAgICAgIHRoaXMubnpDbGljay5lbWl0KG1lbnUpO1xyXG4gICAgICBpZiAodGhpcy5uelNlbGVjdGFibGUpIHtcclxuICAgICAgICB0aGlzLmxpc3RPZk56TWVudUl0ZW1EaXJlY3RpdmUuZm9yRWFjaChpdGVtID0+IGl0ZW0uc2V0U2VsZWN0ZWRTdGF0ZShpdGVtID09PSBtZW51KSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jYWNoZU1vZGUgPSB0aGlzLm56TW9kZTtcclxuICAgIHRoaXMudXBkYXRlSW5saW5lQ29sbGFwc2UoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLm56SW5saW5lQ29sbGFwc2VkKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlSW5saW5lQ29sbGFwc2UoKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLm56SW5saW5lSW5kZW50KSB7XHJcbiAgICAgIHRoaXMubnpNZW51U2VydmljZS5zZXRJbmxpbmVJbmRlbnQodGhpcy5ueklubGluZUluZGVudCk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy5uekluRHJvcERvd24pIHtcclxuICAgICAgdGhpcy5uek1lbnVTZXJ2aWNlLmlzSW5Ecm9wRG93biA9IHRoaXMubnpJbkRyb3BEb3duO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMubnpUaGVtZSkge1xyXG4gICAgICB0aGlzLm56TWVudVNlcnZpY2Uuc2V0VGhlbWUodGhpcy5uelRoZW1lKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLm56TW9kZSkge1xyXG4gICAgICB0aGlzLm56TWVudVNlcnZpY2Uuc2V0TW9kZSh0aGlzLm56TW9kZSk7XHJcbiAgICAgIGlmICghY2hhbmdlcy5uek1vZGUuaXNGaXJzdENoYW5nZSgpICYmIHRoaXMubGlzdE9mTnpTdWJNZW51Q29tcG9uZW50KSB7XHJcbiAgICAgICAgdGhpcy5saXN0T2ZOelN1Yk1lbnVDb21wb25lbnQuZm9yRWFjaChzdWJtZW51ID0+IHN1Ym1lbnUuc2V0T3BlblN0YXRlKGZhbHNlKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLm56VGhlbWUgfHwgY2hhbmdlcy5uek1vZGUgfHwgY2hhbmdlcy5ueklubGluZUNvbGxhcHNlZCkge1xyXG4gICAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=
/**
 * @fileoverview added by tsickle
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
import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, Host, Input, Optional, Output, QueryList, ViewChild, ViewEncapsulation } from '@angular/core';
import { combineLatest, merge, Subject } from 'rxjs';
import { flatMap, map, startWith, takeUntil } from 'rxjs/operators';
import { collapseMotion, getPlacementName, slideMotion, zoomBigMotion, DEFAULT_SUBMENU_POSITIONS, InputBoolean, NzMenuBaseService, NzNoAnimationDirective, NzUpdateHostClassService, POSITION_MAP } from 'ng-zorro-antd/core';
import { NzMenuItemDirective } from './nz-menu-item.directive';
import { NzSubmenuService } from './nz-submenu.service';
var NzSubMenuComponent = /** @class */ (function () {
    function NzSubMenuComponent(elementRef, nzMenuService, cdr, nzSubmenuService, nzUpdateHostClassService, platform, noAnimation) {
        this.elementRef = elementRef;
        this.nzMenuService = nzMenuService;
        this.cdr = cdr;
        this.nzSubmenuService = nzSubmenuService;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.platform = platform;
        this.noAnimation = noAnimation;
        this.nzOpen = false;
        this.nzDisabled = false;
        this.nzOpenChange = new EventEmitter();
        this.placement = 'rightTop';
        this.expandState = 'collapsed';
        this.overlayPositions = tslib_1.__spread(DEFAULT_SUBMENU_POSITIONS);
        this.destroy$ = new Subject();
        this.isChildMenuSelected = false;
        this.isMouseHover = false;
    }
    /**
     * @param {?} open
     * @return {?}
     */
    NzSubMenuComponent.prototype.setOpenState = /**
     * @param {?} open
     * @return {?}
     */
    function (open) {
        this.nzSubmenuService.setOpenState(open);
    };
    /**
     * @return {?}
     */
    NzSubMenuComponent.prototype.clickSubMenuTitle = /**
     * @return {?}
     */
    function () {
        if (this.nzSubmenuService.mode === 'inline' && !this.nzMenuService.isInDropDown && !this.nzDisabled) {
            this.setOpenState(!this.nzOpen);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzSubMenuComponent.prototype.setMouseEnterState = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.isMouseHover = value;
        this.setClassMap();
        this.nzSubmenuService.setMouseEnterState(value);
    };
    /**
     * @return {?}
     */
    NzSubMenuComponent.prototype.setTriggerWidth = /**
     * @return {?}
     */
    function () {
        if (this.nzSubmenuService.mode === 'horizontal' && this.platform.isBrowser) {
            this.triggerWidth = this.cdkOverlayOrigin.nativeElement.getBoundingClientRect().width;
        }
    };
    /**
     * @param {?} position
     * @return {?}
     */
    NzSubMenuComponent.prototype.onPositionChange = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        this.placement = (/** @type {?} */ (getPlacementName(position)));
        this.cdr.markForCheck();
    };
    /**
     * @return {?}
     */
    NzSubMenuComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var prefixName = this.nzMenuService.isInDropDown ? 'ant-dropdown-menu-submenu' : 'ant-menu-submenu';
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, (_a = {},
            _a["" + prefixName] = true,
            _a[prefixName + "-disabled"] = this.nzDisabled,
            _a[prefixName + "-open"] = this.nzOpen,
            _a[prefixName + "-selected"] = this.isChildMenuSelected,
            _a[prefixName + "-" + this.nzSubmenuService.mode] = true,
            _a[prefixName + "-active"] = this.isMouseHover && !this.nzDisabled,
            _a));
    };
    /**
     * @return {?}
     */
    NzSubMenuComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        combineLatest([this.nzSubmenuService.mode$, this.nzSubmenuService.open$])
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), mode = _b[0], open = _b[1];
            if (open && mode === 'inline') {
                _this.expandState = 'expanded';
            }
            else if (open && mode === 'horizontal') {
                _this.expandState = 'bottom';
            }
            else if (open && mode === 'vertical') {
                _this.expandState = 'active';
            }
            else {
                _this.isMouseHover = false;
                _this.expandState = 'collapsed';
            }
            _this.overlayPositions =
                mode === 'horizontal' ? [POSITION_MAP.bottomLeft] : [POSITION_MAP.rightTop, POSITION_MAP.leftTop];
            if (open !== _this.nzOpen) {
                _this.setTriggerWidth();
                _this.nzOpen = open;
                _this.nzOpenChange.emit(_this.nzOpen);
            }
            _this.setClassMap();
        }));
        this.nzSubmenuService.menuOpen$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.nzMenuService.menuOpen$.next(data);
        }));
        merge(this.nzMenuService.mode$, this.nzMenuService.inlineIndent$, this.nzSubmenuService.level$, this.nzSubmenuService.open$, this.nzSubmenuService.mode$)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @return {?}
     */
    NzSubMenuComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.setTriggerWidth();
        this.listOfNzMenuItemDirective.changes
            .pipe(startWith(true), flatMap((/**
         * @return {?}
         */
        function () {
            return merge.apply(void 0, tslib_1.__spread([_this.listOfNzMenuItemDirective.changes], _this.listOfNzMenuItemDirective.map((/**
             * @param {?} menu
             * @return {?}
             */
            function (menu) { return menu.selected$; }))));
        })), startWith(true), map((/**
         * @return {?}
         */
        function () { return _this.listOfNzMenuItemDirective.some((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return e.nzSelected; })); })), takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} selected
         * @return {?}
         */
        function (selected) {
            _this.isChildMenuSelected = selected;
            _this.setClassMap();
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzSubMenuComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzOpen) {
            this.nzSubmenuService.setOpenState(this.nzOpen);
            this.setTriggerWidth();
        }
        if (changes.nzDisabled) {
            this.nzSubmenuService.disabled = this.nzDisabled;
            this.setClassMap();
        }
    };
    /**
     * @return {?}
     */
    NzSubMenuComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzSubMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: '[nz-submenu]',
                    exportAs: 'nzSubmenu',
                    providers: [NzSubmenuService, NzUpdateHostClassService],
                    animations: [collapseMotion, zoomBigMotion, slideMotion],
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    template: "<div cdkOverlayOrigin\r\n     #origin=\"cdkOverlayOrigin\"\r\n     [class.ant-dropdown-menu-submenu-title]=\"nzMenuService.isInDropDown\"\r\n     [class.ant-menu-submenu-title]=\"!nzMenuService.isInDropDown\"\r\n     [style.paddingLeft.px]=\"nzMenuService.mode === 'inline'? (nzPaddingLeft ? nzPaddingLeft : nzSubmenuService.level * nzMenuService.inlineIndent) : null\"\r\n     (mouseenter)=\"setMouseEnterState(true)\"\r\n     (mouseleave)=\"setMouseEnterState(false)\"\r\n     (click)=\"clickSubMenuTitle()\">\r\n  <i nz-icon [nzType]=\"nzIcon\" *ngIf=\"nzIcon\"></i>\r\n  <ng-container *nzStringTemplateOutlet=\"nzTitle\"><span>{{ nzTitle }}</span></ng-container>\r\n  <ng-content select=\"[title]\" *ngIf=\"!nzTitle\"></ng-content>\r\n  <span *ngIf=\"nzMenuService.isInDropDown; else notDropdownTpl\" class=\"ant-dropdown-menu-submenu-arrow\">\r\n    <i nz-icon nzType=\"right\" class=\"anticon-right ant-dropdown-menu-submenu-arrow-icon\"></i>\r\n  </span>\r\n  <ng-template #notDropdownTpl>\r\n    <i class=\"ant-menu-submenu-arrow\"></i>\r\n  </ng-template>\r\n</div>\r\n<ul *ngIf=\"nzMenuService.mode === 'inline'\"\r\n    [@collapseMotion]=\"expandState\"\r\n    [@.disabled]=\"noAnimation?.nzNoAnimation\"\r\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n    [ngClass]=\"nzMenuClassName\"\r\n    class=\"ant-menu ant-menu-inline ant-menu-sub\">\r\n  <ng-template [ngTemplateOutlet]=\"subMenuTemplate\"></ng-template>\r\n</ul>\r\n<ng-template cdkConnectedOverlay\r\n             (positionChange)=\"onPositionChange($event)\"\r\n             [cdkConnectedOverlayPositions]=\"overlayPositions\"\r\n             [cdkConnectedOverlayOrigin]=\"origin\"\r\n             [cdkConnectedOverlayWidth]=\"triggerWidth\"\r\n             [cdkConnectedOverlayOpen]=\"nzOpen && nzMenuService.mode !== 'inline'\">\r\n  <div class=\"ant-menu-submenu ant-menu-submenu-popup\"\r\n       [@slideMotion]=\"expandState\"\r\n       [@zoomBigMotion]=\"expandState\"\r\n       [@.disabled]=\"noAnimation?.nzNoAnimation\"\r\n       [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n       [class.ant-menu-light]=\"nzMenuService.theme === 'light'\"\r\n       [class.ant-menu-dark]=\"nzMenuService.theme === 'dark'\"\r\n       [class.ant-menu-submenu-placement-bottomLeft]=\"nzSubmenuService.mode === 'horizontal'\"\r\n       [class.ant-menu-submenu-placement-rightTop]=\"nzSubmenuService.mode === 'vertical' && placement === 'rightTop'\"\r\n       [class.ant-menu-submenu-placement-leftTop]=\"nzSubmenuService.mode === 'vertical' && placement === 'leftTop'\"\r\n       (mouseleave)=\"setMouseEnterState(false)\"\r\n       (mouseenter)=\"setMouseEnterState(true)\">\r\n    <ul [class.ant-dropdown-menu]=\"nzMenuService.isInDropDown\"\r\n        [class.ant-menu]=\"!nzMenuService.isInDropDown\"\r\n        [class.ant-dropdown-menu-vertical]=\"nzMenuService.isInDropDown\"\r\n        [class.ant-menu-vertical]=\"!nzMenuService.isInDropDown\"\r\n        [class.ant-dropdown-menu-sub]=\"nzMenuService.isInDropDown\"\r\n        [class.ant-menu-sub]=\"!nzMenuService.isInDropDown\"\r\n        [ngClass]=\"nzMenuClassName\">\r\n      <ng-template [ngTemplateOutlet]=\"subMenuTemplate\"></ng-template>\r\n    </ul>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #subMenuTemplate>\r\n  <ng-content></ng-content>\r\n</ng-template>\r\n",
                    styles: ["\n      :root .ant-menu-submenu.ant-menu-submenu-placement-bottomLeft {\n        top: 6px;\n        position: relative;\n      }\n\n      :root .ant-menu-submenu.ant-menu-submenu-placement-rightTop {\n        left: 4px;\n        position: relative;\n      }\n\n      :root .ant-menu-submenu.ant-menu-submenu-placement-leftTop {\n        right: 4px;\n        position: relative;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzSubMenuComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NzMenuBaseService },
        { type: ChangeDetectorRef },
        { type: NzSubmenuService },
        { type: NzUpdateHostClassService },
        { type: Platform },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    NzSubMenuComponent.propDecorators = {
        nzMenuClassName: [{ type: Input }],
        nzPaddingLeft: [{ type: Input }],
        nzTitle: [{ type: Input }],
        nzIcon: [{ type: Input }],
        nzOpen: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzOpenChange: [{ type: Output }],
        cdkConnectedOverlay: [{ type: ViewChild, args: [CdkConnectedOverlay, { static: true },] }],
        cdkOverlayOrigin: [{ type: ViewChild, args: [CdkOverlayOrigin, { static: true, read: ElementRef },] }],
        listOfNzSubMenuComponent: [{ type: ContentChildren, args: [NzSubMenuComponent, { descendants: true },] }],
        listOfNzMenuItemDirective: [{ type: ContentChildren, args: [NzMenuItemDirective, { descendants: true },] }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzSubMenuComponent.prototype, "nzOpen", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzSubMenuComponent.prototype, "nzDisabled", void 0);
    return NzSubMenuComponent;
}());
export { NzSubMenuComponent };
if (false) {
    /** @type {?} */
    NzSubMenuComponent.prototype.nzMenuClassName;
    /** @type {?} */
    NzSubMenuComponent.prototype.nzPaddingLeft;
    /** @type {?} */
    NzSubMenuComponent.prototype.nzTitle;
    /** @type {?} */
    NzSubMenuComponent.prototype.nzIcon;
    /** @type {?} */
    NzSubMenuComponent.prototype.nzOpen;
    /** @type {?} */
    NzSubMenuComponent.prototype.nzDisabled;
    /** @type {?} */
    NzSubMenuComponent.prototype.nzOpenChange;
    /** @type {?} */
    NzSubMenuComponent.prototype.cdkConnectedOverlay;
    /** @type {?} */
    NzSubMenuComponent.prototype.cdkOverlayOrigin;
    /** @type {?} */
    NzSubMenuComponent.prototype.listOfNzSubMenuComponent;
    /** @type {?} */
    NzSubMenuComponent.prototype.listOfNzMenuItemDirective;
    /** @type {?} */
    NzSubMenuComponent.prototype.placement;
    /** @type {?} */
    NzSubMenuComponent.prototype.triggerWidth;
    /** @type {?} */
    NzSubMenuComponent.prototype.expandState;
    /** @type {?} */
    NzSubMenuComponent.prototype.overlayPositions;
    /**
     * @type {?}
     * @private
     */
    NzSubMenuComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzSubMenuComponent.prototype.isChildMenuSelected;
    /**
     * @type {?}
     * @private
     */
    NzSubMenuComponent.prototype.isMouseHover;
    /**
     * @type {?}
     * @private
     */
    NzSubMenuComponent.prototype.elementRef;
    /** @type {?} */
    NzSubMenuComponent.prototype.nzMenuService;
    /**
     * @type {?}
     * @private
     */
    NzSubMenuComponent.prototype.cdr;
    /** @type {?} */
    NzSubMenuComponent.prototype.nzSubmenuService;
    /**
     * @type {?}
     * @private
     */
    NzSubMenuComponent.prototype.nzUpdateHostClassService;
    /**
     * @type {?}
     * @private
     */
    NzSubMenuComponent.prototype.platform;
    /** @type {?} */
    NzSubMenuComponent.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3VibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL21lbnUvIiwic291cmNlcyI6WyJuei1zdWJtZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQWtDLE1BQU0sc0JBQXNCLENBQUM7QUFDN0csT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsVUFBVSxFQUNWLFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxFQUlMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUdULFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVwRSxPQUFPLEVBQ0wsY0FBYyxFQUNkLGdCQUFnQixFQUNoQixXQUFXLEVBQ1gsYUFBYSxFQUNiLHlCQUF5QixFQUN6QixZQUFZLEVBQ1osaUJBQWlCLEVBQ2pCLHNCQUFzQixFQUN0Qix3QkFBd0IsRUFDeEIsWUFBWSxFQUNiLE1BQU0sb0JBQW9CLENBQUM7QUFFNUIsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFeEQ7SUE0RkUsNEJBQ1UsVUFBc0IsRUFDdkIsYUFBZ0MsRUFDL0IsR0FBc0IsRUFDdkIsZ0JBQWtDLEVBQ2pDLHdCQUFrRCxFQUNsRCxRQUFrQixFQUNDLFdBQW9DO1FB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QUN2QyxpQ0FBOEI7O0lBQzlCLDhDQUF5Qzs7Ozs7SUFDekMsc0RBQTBEOzs7OztJQUMxRCxzQ0FBMEI7O0lBQzFCLHlDQUErRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ2RrQ29ubmVjdGVkT3ZlcmxheSwgQ2RrT3ZlcmxheU9yaWdpbiwgQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEhvc3QsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgbWVyZ2UsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmxhdE1hcCwgbWFwLCBzdGFydFdpdGgsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgY29sbGFwc2VNb3Rpb24sXHJcbiAgZ2V0UGxhY2VtZW50TmFtZSxcclxuICBzbGlkZU1vdGlvbixcclxuICB6b29tQmlnTW90aW9uLFxyXG4gIERFRkFVTFRfU1VCTUVOVV9QT1NJVElPTlMsXHJcbiAgSW5wdXRCb29sZWFuLFxyXG4gIE56TWVudUJhc2VTZXJ2aWNlLFxyXG4gIE56Tm9BbmltYXRpb25EaXJlY3RpdmUsXHJcbiAgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLFxyXG4gIFBPU0lUSU9OX01BUFxyXG59IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOek1lbnVJdGVtRGlyZWN0aXZlIH0gZnJvbSAnLi9uei1tZW51LWl0ZW0uZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTnpTdWJtZW51U2VydmljZSB9IGZyb20gJy4vbnotc3VibWVudS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnW256LXN1Ym1lbnVdJyxcclxuICBleHBvcnRBczogJ256U3VibWVudScsXHJcbiAgcHJvdmlkZXJzOiBbTnpTdWJtZW51U2VydmljZSwgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXSxcclxuICBhbmltYXRpb25zOiBbY29sbGFwc2VNb3Rpb24sIHpvb21CaWdNb3Rpb24sIHNsaWRlTW90aW9uXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1zdWJtZW51LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgOnJvb3QgLmFudC1tZW51LXN1Ym1lbnUuYW50LW1lbnUtc3VibWVudS1wbGFjZW1lbnQtYm90dG9tTGVmdCB7XHJcbiAgICAgICAgdG9wOiA2cHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICA6cm9vdCAuYW50LW1lbnUtc3VibWVudS5hbnQtbWVudS1zdWJtZW51LXBsYWNlbWVudC1yaWdodFRvcCB7XHJcbiAgICAgICAgbGVmdDogNHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgOnJvb3QgLmFudC1tZW51LXN1Ym1lbnUuYW50LW1lbnUtc3VibWVudS1wbGFjZW1lbnQtbGVmdFRvcCB7XHJcbiAgICAgICAgcmlnaHQ6IDRweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelN1Yk1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBuek1lbnVDbGFzc05hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBuelBhZGRpbmdMZWZ0OiBudW1iZXI7XHJcbiAgQElucHV0KCkgbnpUaXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpJY29uOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56T3BlbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRpc2FibGVkID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T3BlbkNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBAVmlld0NoaWxkKENka0Nvbm5lY3RlZE92ZXJsYXksIHsgc3RhdGljOiB0cnVlIH0pIGNka0Nvbm5lY3RlZE92ZXJsYXk6IENka0Nvbm5lY3RlZE92ZXJsYXk7XHJcbiAgQFZpZXdDaGlsZChDZGtPdmVybGF5T3JpZ2luLCB7IHN0YXRpYzogdHJ1ZSwgcmVhZDogRWxlbWVudFJlZiB9KSBjZGtPdmVybGF5T3JpZ2luOiBFbGVtZW50UmVmO1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oTnpTdWJNZW51Q29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pXHJcbiAgbGlzdE9mTnpTdWJNZW51Q29tcG9uZW50OiBRdWVyeUxpc3Q8TnpTdWJNZW51Q29tcG9uZW50PjtcclxuICBAQ29udGVudENoaWxkcmVuKE56TWVudUl0ZW1EaXJlY3RpdmUsIHsgZGVzY2VuZGFudHM6IHRydWUgfSlcclxuICBsaXN0T2ZOek1lbnVJdGVtRGlyZWN0aXZlOiBRdWVyeUxpc3Q8TnpNZW51SXRlbURpcmVjdGl2ZT47XHJcblxyXG4gIHBsYWNlbWVudCA9ICdyaWdodFRvcCc7XHJcbiAgdHJpZ2dlcldpZHRoOiBudW1iZXI7XHJcbiAgZXhwYW5kU3RhdGUgPSAnY29sbGFwc2VkJztcclxuICBvdmVybGF5UG9zaXRpb25zID0gWy4uLkRFRkFVTFRfU1VCTUVOVV9QT1NJVElPTlNdO1xyXG5cclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBwcml2YXRlIGlzQ2hpbGRNZW51U2VsZWN0ZWQgPSBmYWxzZTtcclxuICBwcml2YXRlIGlzTW91c2VIb3ZlciA9IGZhbHNlO1xyXG5cclxuICBzZXRPcGVuU3RhdGUob3BlbjogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5uelN1Ym1lbnVTZXJ2aWNlLnNldE9wZW5TdGF0ZShvcGVuKTtcclxuICB9XHJcblxyXG4gIGNsaWNrU3ViTWVudVRpdGxlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpTdWJtZW51U2VydmljZS5tb2RlID09PSAnaW5saW5lJyAmJiAhdGhpcy5uek1lbnVTZXJ2aWNlLmlzSW5Ecm9wRG93biAmJiAhdGhpcy5uekRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuc2V0T3BlblN0YXRlKCF0aGlzLm56T3Blbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRNb3VzZUVudGVyU3RhdGUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuaXNNb3VzZUhvdmVyID0gdmFsdWU7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICB0aGlzLm56U3VibWVudVNlcnZpY2Uuc2V0TW91c2VFbnRlclN0YXRlKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHNldFRyaWdnZXJXaWR0aCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56U3VibWVudVNlcnZpY2UubW9kZSA9PT0gJ2hvcml6b250YWwnICYmIHRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XHJcbiAgICAgIHRoaXMudHJpZ2dlcldpZHRoID0gdGhpcy5jZGtPdmVybGF5T3JpZ2luLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblBvc2l0aW9uQ2hhbmdlKHBvc2l0aW9uOiBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UpOiB2b2lkIHtcclxuICAgIHRoaXMucGxhY2VtZW50ID0gZ2V0UGxhY2VtZW50TmFtZShwb3NpdGlvbikhO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHByZWZpeE5hbWUgPSB0aGlzLm56TWVudVNlcnZpY2UuaXNJbkRyb3BEb3duID8gJ2FudC1kcm9wZG93bi1tZW51LXN1Ym1lbnUnIDogJ2FudC1tZW51LXN1Ym1lbnUnO1xyXG4gICAgdGhpcy5uelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB7XHJcbiAgICAgIFtgJHtwcmVmaXhOYW1lfWBdOiB0cnVlLFxyXG4gICAgICBbYCR7cHJlZml4TmFtZX0tZGlzYWJsZWRgXTogdGhpcy5uekRpc2FibGVkLFxyXG4gICAgICBbYCR7cHJlZml4TmFtZX0tb3BlbmBdOiB0aGlzLm56T3BlbixcclxuICAgICAgW2Ake3ByZWZpeE5hbWV9LXNlbGVjdGVkYF06IHRoaXMuaXNDaGlsZE1lbnVTZWxlY3RlZCxcclxuICAgICAgW2Ake3ByZWZpeE5hbWV9LSR7dGhpcy5uelN1Ym1lbnVTZXJ2aWNlLm1vZGV9YF06IHRydWUsXHJcbiAgICAgIFtgJHtwcmVmaXhOYW1lfS1hY3RpdmVgXTogdGhpcy5pc01vdXNlSG92ZXIgJiYgIXRoaXMubnpEaXNhYmxlZFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHB1YmxpYyBuek1lbnVTZXJ2aWNlOiBOek1lbnVCYXNlU2VydmljZSxcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHB1YmxpYyBuelN1Ym1lbnVTZXJ2aWNlOiBOelN1Ym1lbnVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSxcclxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxyXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGNvbWJpbmVMYXRlc3QoW3RoaXMubnpTdWJtZW51U2VydmljZS5tb2RlJCwgdGhpcy5uelN1Ym1lbnVTZXJ2aWNlLm9wZW4kXSlcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAuc3Vic2NyaWJlKChbbW9kZSwgb3Blbl0pID0+IHtcclxuICAgICAgICBpZiAob3BlbiAmJiBtb2RlID09PSAnaW5saW5lJykge1xyXG4gICAgICAgICAgdGhpcy5leHBhbmRTdGF0ZSA9ICdleHBhbmRlZCc7XHJcbiAgICAgICAgfSBlbHNlIGlmIChvcGVuICYmIG1vZGUgPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgdGhpcy5leHBhbmRTdGF0ZSA9ICdib3R0b20nO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob3BlbiAmJiBtb2RlID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgICAgICB0aGlzLmV4cGFuZFN0YXRlID0gJ2FjdGl2ZSc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuaXNNb3VzZUhvdmVyID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLmV4cGFuZFN0YXRlID0gJ2NvbGxhcHNlZCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub3ZlcmxheVBvc2l0aW9ucyA9XHJcbiAgICAgICAgICBtb2RlID09PSAnaG9yaXpvbnRhbCcgPyBbUE9TSVRJT05fTUFQLmJvdHRvbUxlZnRdIDogW1BPU0lUSU9OX01BUC5yaWdodFRvcCwgUE9TSVRJT05fTUFQLmxlZnRUb3BdO1xyXG4gICAgICAgIGlmIChvcGVuICE9PSB0aGlzLm56T3Blbikge1xyXG4gICAgICAgICAgdGhpcy5zZXRUcmlnZ2VyV2lkdGgoKTtcclxuICAgICAgICAgIHRoaXMubnpPcGVuID0gb3BlbjtcclxuICAgICAgICAgIHRoaXMubnpPcGVuQ2hhbmdlLmVtaXQodGhpcy5uek9wZW4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgdGhpcy5uelN1Ym1lbnVTZXJ2aWNlLm1lbnVPcGVuJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChkYXRhOiBib29sZWFuKSA9PiB7XHJcbiAgICAgIHRoaXMubnpNZW51U2VydmljZS5tZW51T3BlbiQubmV4dChkYXRhKTtcclxuICAgIH0pO1xyXG4gICAgbWVyZ2UoXHJcbiAgICAgIHRoaXMubnpNZW51U2VydmljZS5tb2RlJCxcclxuICAgICAgdGhpcy5uek1lbnVTZXJ2aWNlLmlubGluZUluZGVudCQsXHJcbiAgICAgIHRoaXMubnpTdWJtZW51U2VydmljZS5sZXZlbCQsXHJcbiAgICAgIHRoaXMubnpTdWJtZW51U2VydmljZS5vcGVuJCxcclxuICAgICAgdGhpcy5uelN1Ym1lbnVTZXJ2aWNlLm1vZGUkXHJcbiAgICApXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRUcmlnZ2VyV2lkdGgoKTtcclxuICAgIHRoaXMubGlzdE9mTnpNZW51SXRlbURpcmVjdGl2ZS5jaGFuZ2VzXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHN0YXJ0V2l0aCh0cnVlKSxcclxuICAgICAgICBmbGF0TWFwKCgpID0+XHJcbiAgICAgICAgICBtZXJnZSh0aGlzLmxpc3RPZk56TWVudUl0ZW1EaXJlY3RpdmUuY2hhbmdlcywgLi4udGhpcy5saXN0T2ZOek1lbnVJdGVtRGlyZWN0aXZlLm1hcChtZW51ID0+IG1lbnUuc2VsZWN0ZWQkKSlcclxuICAgICAgICApLFxyXG4gICAgICAgIHN0YXJ0V2l0aCh0cnVlKSxcclxuICAgICAgICBtYXAoKCkgPT4gdGhpcy5saXN0T2ZOek1lbnVJdGVtRGlyZWN0aXZlLnNvbWUoZSA9PiBlLm56U2VsZWN0ZWQpKSxcclxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKHNlbGVjdGVkID0+IHtcclxuICAgICAgICB0aGlzLmlzQ2hpbGRNZW51U2VsZWN0ZWQgPSBzZWxlY3RlZDtcclxuICAgICAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMubnpPcGVuKSB7XHJcbiAgICAgIHRoaXMubnpTdWJtZW51U2VydmljZS5zZXRPcGVuU3RhdGUodGhpcy5uek9wZW4pO1xyXG4gICAgICB0aGlzLnNldFRyaWdnZXJXaWR0aCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMubnpEaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLm56U3VibWVudVNlcnZpY2UuZGlzYWJsZWQgPSB0aGlzLm56RGlzYWJsZWQ7XHJcbiAgICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
/**
 * @fileoverview added by tsickle
 * Generated from: nz-menu-item.directive.ts
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
import { ContentChildren, Directive, ElementRef, Input, Optional, QueryList, Renderer2 } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkWithHref } from '@angular/router';
import { isNotNil, InputBoolean, NzMenuBaseService, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { merge, EMPTY, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { NzSubmenuService } from './nz-submenu.service';
var NzMenuItemDirective = /** @class */ (function () {
    function NzMenuItemDirective(nzUpdateHostClassService, nzMenuService, nzSubmenuService, renderer, elementRef, routerLink, routerLinkWithHref, router) {
        var _this = this;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.nzMenuService = nzMenuService;
        this.nzSubmenuService = nzSubmenuService;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.routerLink = routerLink;
        this.routerLinkWithHref = routerLinkWithHref;
        this.router = router;
        this.el = this.elementRef.nativeElement;
        this.destroy$ = new Subject();
        this.originalPadding = null;
        this.selected$ = new Subject();
        this.nzDisabled = false;
        this.nzSelected = false;
        this.nzMatchRouterExact = false;
        this.nzMatchRouter = false;
        if (router) {
            (/** @type {?} */ (this.router)).events.pipe(takeUntil(this.destroy$), filter((/**
             * @param {?} e
             * @return {?}
             */
            function (e) { return e instanceof NavigationEnd; }))).subscribe((/**
             * @return {?}
             */
            function () {
                _this.updateRouterActive();
            }));
        }
    }
    /** clear all item selected status except this */
    /**
     * clear all item selected status except this
     * @param {?} e
     * @return {?}
     */
    NzMenuItemDirective.prototype.clickMenuItem = /**
     * clear all item selected status except this
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (this.nzDisabled) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }
        this.nzMenuService.onMenuItemClick(this);
        if (this.nzSubmenuService) {
            this.nzSubmenuService.onMenuItemClick();
        }
    };
    /**
     * @return {?}
     */
    NzMenuItemDirective.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var prefixName = this.nzMenuService.isInDropDown ? 'ant-dropdown-menu-item' : 'ant-menu-item';
        this.nzUpdateHostClassService.updateHostClass(this.el, (_a = {},
            _a["" + prefixName] = true,
            _a[prefixName + "-selected"] = this.nzSelected,
            _a[prefixName + "-disabled"] = this.nzDisabled,
            _a));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzMenuItemDirective.prototype.setSelectedState = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.nzSelected = value;
        this.selected$.next(value);
        this.setClassMap();
    };
    /**
     * @private
     * @return {?}
     */
    NzMenuItemDirective.prototype.updateRouterActive = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.listOfRouterLink ||
            !this.listOfRouterLinkWithHref ||
            !this.router ||
            !this.router.navigated ||
            !this.nzMatchRouter) {
            return;
        }
        Promise.resolve().then((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var hasActiveLinks = _this.hasActiveLinks();
            if (_this.nzSelected !== hasActiveLinks) {
                _this.nzSelected = hasActiveLinks;
                _this.setSelectedState(_this.nzSelected);
            }
        }));
    };
    /**
     * @private
     * @return {?}
     */
    NzMenuItemDirective.prototype.hasActiveLinks = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isActiveCheckFn = this.isLinkActive((/** @type {?} */ (this.router)));
        return ((this.routerLink && isActiveCheckFn(this.routerLink)) ||
            (this.routerLinkWithHref && isActiveCheckFn(this.routerLinkWithHref)) ||
            this.listOfRouterLink.some(isActiveCheckFn) ||
            this.listOfRouterLinkWithHref.some(isActiveCheckFn));
    };
    /**
     * @private
     * @param {?} router
     * @return {?}
     */
    NzMenuItemDirective.prototype.isLinkActive = /**
     * @private
     * @param {?} router
     * @return {?}
     */
    function (router) {
        var _this = this;
        return (/**
         * @param {?} link
         * @return {?}
         */
        function (link) { return router.isActive(link.urlTree, _this.nzMatchRouterExact); });
    };
    /**
     * @return {?}
     */
    NzMenuItemDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /**
         * store origin padding in padding
         * @type {?}
         */
        var paddingLeft = this.el.style.paddingLeft;
        if (paddingLeft) {
            this.originalPadding = parseInt(paddingLeft, 10);
        }
        merge(this.nzMenuService.mode$, this.nzMenuService.inlineIndent$, this.nzSubmenuService ? this.nzSubmenuService.level$ : EMPTY)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var padding = null;
            if (_this.nzMenuService.mode === 'inline') {
                if (isNotNil(_this.nzPaddingLeft)) {
                    padding = _this.nzPaddingLeft;
                }
                else {
                    /** @type {?} */
                    var level = _this.nzSubmenuService ? _this.nzSubmenuService.level + 1 : 1;
                    padding = level * _this.nzMenuService.inlineIndent;
                }
            }
            else {
                padding = _this.originalPadding;
            }
            if (padding) {
                _this.renderer.setStyle(_this.el, 'padding-left', padding + "px");
            }
            else {
                _this.renderer.removeStyle(_this.el, 'padding-left');
            }
        }));
        this.setClassMap();
    };
    /**
     * @return {?}
     */
    NzMenuItemDirective.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.listOfRouterLink.changes.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        function () { return _this.updateRouterActive(); }));
        this.listOfRouterLinkWithHref.changes.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        function () { return _this.updateRouterActive(); }));
        this.updateRouterActive();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzMenuItemDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzSelected) {
            this.setSelectedState(this.nzSelected);
        }
        if (changes.nzDisabled) {
            this.setClassMap();
        }
    };
    /**
     * @return {?}
     */
    NzMenuItemDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzMenuItemDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-menu-item]',
                    exportAs: 'nzMenuItem',
                    providers: [NzUpdateHostClassService],
                    host: {
                        '(click)': 'clickMenuItem($event)'
                    }
                },] }
    ];
    /** @nocollapse */
    NzMenuItemDirective.ctorParameters = function () { return [
        { type: NzUpdateHostClassService },
        { type: NzMenuBaseService },
        { type: NzSubmenuService, decorators: [{ type: Optional }] },
        { type: Renderer2 },
        { type: ElementRef },
        { type: RouterLink, decorators: [{ type: Optional }] },
        { type: RouterLinkWithHref, decorators: [{ type: Optional }] },
        { type: Router, decorators: [{ type: Optional }] }
    ]; };
    NzMenuItemDirective.propDecorators = {
        nzDisabled: [{ type: Input }],
        nzSelected: [{ type: Input }],
        nzPaddingLeft: [{ type: Input }],
        nzMatchRouterExact: [{ type: Input }],
        nzMatchRouter: [{ type: Input }],
        listOfRouterLink: [{ type: ContentChildren, args: [RouterLink, { descendants: true },] }],
        listOfRouterLinkWithHref: [{ type: ContentChildren, args: [RouterLinkWithHref, { descendants: true },] }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzMenuItemDirective.prototype, "nzDisabled", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzMenuItemDirective.prototype, "nzSelected", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzMenuItemDirective.prototype, "nzMatchRouterExact", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzMenuItemDirective.prototype, "nzMatchRouter", void 0);
    return NzMenuItemDirective;
}());
export { NzMenuItemDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzMenuItemDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NzMenuItemDirective.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzMenuItemDirective.prototype.originalPadding;
    /** @type {?} */
    NzMenuItemDirective.prototype.selected$;
    /** @type {?} */
    NzMenuItemDirective.prototype.nzDisabled;
    /** @type {?} */
    NzMenuItemDirective.prototype.nzSelected;
    /** @type {?} */
    NzMenuItemDirective.prototype.nzPaddingLeft;
    /** @type {?} */
    NzMenuItemDirective.prototype.nzMatchRouterExact;
    /** @type {?} */
    NzMenuItemDirective.prototype.nzMatchRouter;
    /** @type {?} */
    NzMenuItemDirective.prototype.listOfRouterLink;
    /** @type {?} */
    NzMenuItemDirective.prototype.listOfRouterLinkWithHref;
    /**
     * @type {?}
     * @private
     */
    NzMenuItemDirective.prototype.nzUpdateHostClassService;
    /**
     * @type {?}
     * @private
     */
    NzMenuItemDirective.prototype.nzMenuService;
    /**
     * @type {?}
     * @private
     */
    NzMenuItemDirective.prototype.nzSubmenuService;
    /**
     * @type {?}
     * @private
     */
    NzMenuItemDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzMenuItemDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzMenuItemDirective.prototype.routerLink;
    /**
     * @type {?}
     * @private
     */
    NzMenuItemDirective.prototype.routerLinkWithHref;
    /**
     * @type {?}
     * @private
     */
    NzMenuItemDirective.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudS1pdGVtLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvbWVudS8iLCJzb3VyY2VzIjpbIm56LW1lbnUtaXRlbS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFFTCxlQUFlLEVBQ2YsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBSUwsUUFBUSxFQUNSLFNBQVMsRUFDVCxTQUFTLEVBRVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEYsT0FBTyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6RyxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RDtJQWtGRSw2QkFDVSx3QkFBa0QsRUFDbEQsYUFBZ0MsRUFDcEIsZ0JBQWtDLEVBQzlDLFFBQW1CLEVBQ25CLFVBQXNCLEVBQ1YsVUFBdUIsRUFDdkIsa0JBQXVDLEVBQ3ZDLE1BQWU7UUFSckMsaUJBa0JDO1FBakJTLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsa0JBQWEsR0FBYixhQUFhLENBQW1CO1FBQ3BCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDOUMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ1YsZUFBVSxHQUFWLFVBQVUsQ0FBYTtRQUN2Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQXFCO1FB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RUFBRSxJQUFJLEVBQUU7O0lBTmpDO1FBQWYsWUFBWSxFQUFFOzsyREFBb0I7SUFDbkI7UUFBZixZQUFZLEVBQUU7OzJEQUFvQjtJQUVuQjtRQUFmLFlBQVksRUFBRTs7bUVBQTRCO0lBQzNCO1FBQWYsWUFBWSxFQUFFOzs4REFBdUI7SUF5SWpELDBCQUFDO0NBQUEsQUExSkQsSUEwSkM7U0FsSlksbUJBQW1COzs7Ozs7SUFDOUIsaUNBQXdEOzs7OztJQUN4RCx1Q0FBaUM7Ozs7O0lBQ2pDLDhDQUE4Qzs7SUFDOUMsd0NBQW1DOztJQUNuQyx5Q0FBNEM7O0lBQzVDLHlDQUE0Qzs7SUFDNUMsNENBQStCOztJQUMvQixpREFBb0Q7O0lBQ3BELDRDQUErQzs7SUFDL0MsK0NBQTRGOztJQUM1Rix1REFBb0g7Ozs7O0lBZ0VsSCx1REFBMEQ7Ozs7O0lBQzFELDRDQUF3Qzs7Ozs7SUFDeEMsK0NBQXNEOzs7OztJQUN0RCx1Q0FBMkI7Ozs7O0lBQzNCLHlDQUE4Qjs7Ozs7SUFDOUIseUNBQTJDOzs7OztJQUMzQyxpREFBMkQ7Ozs7O0lBQzNELHFDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBRdWVyeUxpc3QsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNpbXBsZUNoYW5nZXNcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmF2aWdhdGlvbkVuZCwgUm91dGVyLCBSb3V0ZXJMaW5rLCBSb3V0ZXJMaW5rV2l0aEhyZWYgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBpc05vdE5pbCwgSW5wdXRCb29sZWFuLCBOek1lbnVCYXNlU2VydmljZSwgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgbWVyZ2UsIEVNUFRZLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBOelN1Ym1lbnVTZXJ2aWNlIH0gZnJvbSAnLi9uei1zdWJtZW51LnNlcnZpY2UnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbnotbWVudS1pdGVtXScsXHJcbiAgZXhwb3J0QXM6ICduek1lbnVJdGVtJyxcclxuICBwcm92aWRlcnM6IFtOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VdLFxyXG4gIGhvc3Q6IHtcclxuICAgICcoY2xpY2spJzogJ2NsaWNrTWVudUl0ZW0oJGV2ZW50KSdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOek1lbnVJdGVtRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCB7XHJcbiAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcclxuICBwcml2YXRlIG9yaWdpbmFsUGFkZGluZzogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgc2VsZWN0ZWQkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNlbGVjdGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpQYWRkaW5nTGVmdDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuek1hdGNoUm91dGVyRXhhY3QgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpNYXRjaFJvdXRlciA9IGZhbHNlO1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oUm91dGVyTGluaywgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBsaXN0T2ZSb3V0ZXJMaW5rOiBRdWVyeUxpc3Q8Um91dGVyTGluaz47XHJcbiAgQENvbnRlbnRDaGlsZHJlbihSb3V0ZXJMaW5rV2l0aEhyZWYsIHsgZGVzY2VuZGFudHM6IHRydWUgfSkgbGlzdE9mUm91dGVyTGlua1dpdGhIcmVmOiBRdWVyeUxpc3Q8Um91dGVyTGlua1dpdGhIcmVmPjtcclxuXHJcbiAgLyoqIGNsZWFyIGFsbCBpdGVtIHNlbGVjdGVkIHN0YXR1cyBleGNlcHQgdGhpcyAqL1xyXG4gIGNsaWNrTWVudUl0ZW0oZTogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpEaXNhYmxlZCkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMubnpNZW51U2VydmljZS5vbk1lbnVJdGVtQ2xpY2sodGhpcyk7XHJcbiAgICBpZiAodGhpcy5uelN1Ym1lbnVTZXJ2aWNlKSB7XHJcbiAgICAgIHRoaXMubnpTdWJtZW51U2VydmljZS5vbk1lbnVJdGVtQ2xpY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgY29uc3QgcHJlZml4TmFtZSA9IHRoaXMubnpNZW51U2VydmljZS5pc0luRHJvcERvd24gPyAnYW50LWRyb3Bkb3duLW1lbnUtaXRlbScgOiAnYW50LW1lbnUtaXRlbSc7XHJcbiAgICB0aGlzLm56VXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbCwge1xyXG4gICAgICBbYCR7cHJlZml4TmFtZX1gXTogdHJ1ZSxcclxuICAgICAgW2Ake3ByZWZpeE5hbWV9LXNlbGVjdGVkYF06IHRoaXMubnpTZWxlY3RlZCxcclxuICAgICAgW2Ake3ByZWZpeE5hbWV9LWRpc2FibGVkYF06IHRoaXMubnpEaXNhYmxlZFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRTZWxlY3RlZFN0YXRlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLm56U2VsZWN0ZWQgPSB2YWx1ZTtcclxuICAgIHRoaXMuc2VsZWN0ZWQkLm5leHQodmFsdWUpO1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVSb3V0ZXJBY3RpdmUoKTogdm9pZCB7XHJcbiAgICBpZiAoXHJcbiAgICAgICF0aGlzLmxpc3RPZlJvdXRlckxpbmsgfHxcclxuICAgICAgIXRoaXMubGlzdE9mUm91dGVyTGlua1dpdGhIcmVmIHx8XHJcbiAgICAgICF0aGlzLnJvdXRlciB8fFxyXG4gICAgICAhdGhpcy5yb3V0ZXIubmF2aWdhdGVkIHx8XHJcbiAgICAgICF0aGlzLm56TWF0Y2hSb3V0ZXJcclxuICAgICkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcclxuICAgICAgY29uc3QgaGFzQWN0aXZlTGlua3MgPSB0aGlzLmhhc0FjdGl2ZUxpbmtzKCk7XHJcbiAgICAgIGlmICh0aGlzLm56U2VsZWN0ZWQgIT09IGhhc0FjdGl2ZUxpbmtzKSB7XHJcbiAgICAgICAgdGhpcy5uelNlbGVjdGVkID0gaGFzQWN0aXZlTGlua3M7XHJcbiAgICAgICAgdGhpcy5zZXRTZWxlY3RlZFN0YXRlKHRoaXMubnpTZWxlY3RlZCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYXNBY3RpdmVMaW5rcygpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGlzQWN0aXZlQ2hlY2tGbiA9IHRoaXMuaXNMaW5rQWN0aXZlKHRoaXMucm91dGVyISk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAodGhpcy5yb3V0ZXJMaW5rICYmIGlzQWN0aXZlQ2hlY2tGbih0aGlzLnJvdXRlckxpbmspKSB8fFxyXG4gICAgICAodGhpcy5yb3V0ZXJMaW5rV2l0aEhyZWYgJiYgaXNBY3RpdmVDaGVja0ZuKHRoaXMucm91dGVyTGlua1dpdGhIcmVmKSkgfHxcclxuICAgICAgdGhpcy5saXN0T2ZSb3V0ZXJMaW5rLnNvbWUoaXNBY3RpdmVDaGVja0ZuKSB8fFxyXG4gICAgICB0aGlzLmxpc3RPZlJvdXRlckxpbmtXaXRoSHJlZi5zb21lKGlzQWN0aXZlQ2hlY2tGbilcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzTGlua0FjdGl2ZShyb3V0ZXI6IFJvdXRlcik6IChsaW5rOiBSb3V0ZXJMaW5rIHwgUm91dGVyTGlua1dpdGhIcmVmKSA9PiBib29sZWFuIHtcclxuICAgIHJldHVybiAobGluazogUm91dGVyTGluayB8IFJvdXRlckxpbmtXaXRoSHJlZikgPT4gcm91dGVyLmlzQWN0aXZlKGxpbmsudXJsVHJlZSwgdGhpcy5uek1hdGNoUm91dGVyRXhhY3QpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBuek1lbnVTZXJ2aWNlOiBOek1lbnVCYXNlU2VydmljZSxcclxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgbnpTdWJtZW51U2VydmljZTogTnpTdWJtZW51U2VydmljZSxcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgcm91dGVyTGluaz86IFJvdXRlckxpbmssXHJcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIHJvdXRlckxpbmtXaXRoSHJlZj86IFJvdXRlckxpbmtXaXRoSHJlZixcclxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgcm91dGVyPzogUm91dGVyXHJcbiAgKSB7XHJcbiAgICBpZiAocm91dGVyKSB7XHJcbiAgICAgIHRoaXMucm91dGVyIS5ldmVudHMucGlwZShcclxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXHJcbiAgICAgICAgZmlsdGVyKGUgPT4gZSBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpXHJcbiAgICAgICkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVJvdXRlckFjdGl2ZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgLyoqIHN0b3JlIG9yaWdpbiBwYWRkaW5nIGluIHBhZGRpbmcgKi9cclxuICAgIGNvbnN0IHBhZGRpbmdMZWZ0ID0gdGhpcy5lbC5zdHlsZS5wYWRkaW5nTGVmdDtcclxuICAgIGlmIChwYWRkaW5nTGVmdCkge1xyXG4gICAgICB0aGlzLm9yaWdpbmFsUGFkZGluZyA9IHBhcnNlSW50KHBhZGRpbmdMZWZ0LCAxMCk7XHJcbiAgICB9XHJcbiAgICBtZXJnZShcclxuICAgICAgdGhpcy5uek1lbnVTZXJ2aWNlLm1vZGUkLFxyXG4gICAgICB0aGlzLm56TWVudVNlcnZpY2UuaW5saW5lSW5kZW50JCxcclxuICAgICAgdGhpcy5uelN1Ym1lbnVTZXJ2aWNlID8gdGhpcy5uelN1Ym1lbnVTZXJ2aWNlLmxldmVsJCA6IEVNUFRZXHJcbiAgICApXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgbGV0IHBhZGRpbmc6IG51bWJlciB8IG51bGwgPSBudWxsO1xyXG4gICAgICAgIGlmICh0aGlzLm56TWVudVNlcnZpY2UubW9kZSA9PT0gJ2lubGluZScpIHtcclxuICAgICAgICAgIGlmIChpc05vdE5pbCh0aGlzLm56UGFkZGluZ0xlZnQpKSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmcgPSB0aGlzLm56UGFkZGluZ0xlZnQ7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBsZXZlbCA9IHRoaXMubnpTdWJtZW51U2VydmljZSA/IHRoaXMubnpTdWJtZW51U2VydmljZS5sZXZlbCArIDEgOiAxO1xyXG4gICAgICAgICAgICBwYWRkaW5nID0gbGV2ZWwgKiB0aGlzLm56TWVudVNlcnZpY2UuaW5saW5lSW5kZW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBwYWRkaW5nID0gdGhpcy5vcmlnaW5hbFBhZGRpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwYWRkaW5nKSB7XHJcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICdwYWRkaW5nLWxlZnQnLCBgJHtwYWRkaW5nfXB4YCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5lbCwgJ3BhZGRpbmctbGVmdCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmxpc3RPZlJvdXRlckxpbmsuY2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMudXBkYXRlUm91dGVyQWN0aXZlKCkpO1xyXG4gICAgdGhpcy5saXN0T2ZSb3V0ZXJMaW5rV2l0aEhyZWYuY2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMudXBkYXRlUm91dGVyQWN0aXZlKCkpO1xyXG4gICAgdGhpcy51cGRhdGVSb3V0ZXJBY3RpdmUoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLm56U2VsZWN0ZWQpIHtcclxuICAgICAgdGhpcy5zZXRTZWxlY3RlZFN0YXRlKHRoaXMubnpTZWxlY3RlZCk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy5uekRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
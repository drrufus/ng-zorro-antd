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
import { ContentChildren, Directive, ElementRef, Input, Optional, QueryList, Renderer2 } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkWithHref } from '@angular/router';
import { isNotNil, InputBoolean, NzMenuBaseService, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { merge, EMPTY, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { NzSubmenuService } from './nz-submenu.service';
export class NzMenuItemDirective {
    /**
     * @param {?} nzUpdateHostClassService
     * @param {?} nzMenuService
     * @param {?} nzSubmenuService
     * @param {?} renderer
     * @param {?} elementRef
     * @param {?=} routerLink
     * @param {?=} routerLinkWithHref
     * @param {?=} router
     */
    constructor(nzUpdateHostClassService, nzMenuService, nzSubmenuService, renderer, elementRef, routerLink, routerLinkWithHref, router) {
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
            e => e instanceof NavigationEnd))).subscribe((/**
             * @return {?}
             */
            () => {
                this.updateRouterActive();
            }));
        }
    }
    /**
     * clear all item selected status except this
     * @param {?} e
     * @return {?}
     */
    clickMenuItem(e) {
        if (this.nzDisabled) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }
        this.nzMenuService.onMenuItemClick(this);
        if (this.nzSubmenuService) {
            this.nzSubmenuService.onMenuItemClick();
        }
    }
    /**
     * @return {?}
     */
    setClassMap() {
        /** @type {?} */
        const prefixName = this.nzMenuService.isInDropDown ? 'ant-dropdown-menu-item' : 'ant-menu-item';
        this.nzUpdateHostClassService.updateHostClass(this.el, {
            [`${prefixName}`]: true,
            [`${prefixName}-selected`]: this.nzSelected,
            [`${prefixName}-disabled`]: this.nzDisabled
        });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setSelectedState(value) {
        this.nzSelected = value;
        this.selected$.next(value);
        this.setClassMap();
    }
    /**
     * @private
     * @return {?}
     */
    updateRouterActive() {
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
        () => {
            /** @type {?} */
            const hasActiveLinks = this.hasActiveLinks();
            if (this.nzSelected !== hasActiveLinks) {
                this.nzSelected = hasActiveLinks;
                this.setSelectedState(this.nzSelected);
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    hasActiveLinks() {
        /** @type {?} */
        const isActiveCheckFn = this.isLinkActive((/** @type {?} */ (this.router)));
        return ((this.routerLink && isActiveCheckFn(this.routerLink)) ||
            (this.routerLinkWithHref && isActiveCheckFn(this.routerLinkWithHref)) ||
            this.listOfRouterLink.some(isActiveCheckFn) ||
            this.listOfRouterLinkWithHref.some(isActiveCheckFn));
    }
    /**
     * @private
     * @param {?} router
     * @return {?}
     */
    isLinkActive(router) {
        return (/**
         * @param {?} link
         * @return {?}
         */
        (link) => router.isActive(link.urlTree, this.nzMatchRouterExact));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /**
         * store origin padding in padding
         * @type {?}
         */
        const paddingLeft = this.el.style.paddingLeft;
        if (paddingLeft) {
            this.originalPadding = parseInt(paddingLeft, 10);
        }
        merge(this.nzMenuService.mode$, this.nzMenuService.inlineIndent$, this.nzSubmenuService ? this.nzSubmenuService.level$ : EMPTY)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            let padding = null;
            if (this.nzMenuService.mode === 'inline') {
                if (isNotNil(this.nzPaddingLeft)) {
                    padding = this.nzPaddingLeft;
                }
                else {
                    /** @type {?} */
                    const level = this.nzSubmenuService ? this.nzSubmenuService.level + 1 : 1;
                    padding = level * this.nzMenuService.inlineIndent;
                }
            }
            else {
                padding = this.originalPadding;
            }
            if (padding) {
                this.renderer.setStyle(this.el, 'padding-left', `${padding}px`);
            }
            else {
                this.renderer.removeStyle(this.el, 'padding-left');
            }
        }));
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.listOfRouterLink.changes.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => this.updateRouterActive()));
        this.listOfRouterLinkWithHref.changes.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => this.updateRouterActive()));
        this.updateRouterActive();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzSelected) {
            this.setSelectedState(this.nzSelected);
        }
        if (changes.nzDisabled) {
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
NzMenuItemDirective.ctorParameters = () => [
    { type: NzUpdateHostClassService },
    { type: NzMenuBaseService },
    { type: NzSubmenuService, decorators: [{ type: Optional }] },
    { type: Renderer2 },
    { type: ElementRef },
    { type: RouterLink, decorators: [{ type: Optional }] },
    { type: RouterLinkWithHref, decorators: [{ type: Optional }] },
    { type: Router, decorators: [{ type: Optional }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudS1pdGVtLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvbWVudS8iLCJzb3VyY2VzIjpbIm56LW1lbnUtaXRlbS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUVMLGVBQWUsRUFDZixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFJTCxRQUFRLEVBQ1IsU0FBUyxFQUNULFNBQVMsRUFFVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RixPQUFPLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3pHLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBVXhELE1BQU0sT0FBTyxtQkFBbUI7Ozs7Ozs7Ozs7O0lBMEU5QixZQUNVLHdCQUFrRCxFQUNsRCxhQUFnQyxFQUNwQixnQkFBa0MsRUFDOUMsUUFBbUIsRUFDbkIsVUFBc0IsRUFDVixVQUF1QixFQUN2QixrQkFBdUMsRUFDdkMsTUFBZTtRQVAzQiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELGtCQUFhLEdBQWIsYUFBYSxDQUFtQjtRQUNwQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQzlDLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNWLGVBQVUsR0FBVixVQUFVLENBQWE7UUFDdkIsdUJBQWtCLEdBQWxCLGtC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M0I7SUFBZixZQUFZLEVBQUU7OzBEQUF1Qjs7Ozs7O0lBUi9DLGlDQUF3RDs7Ozs7SUFDeEQsdUNBQWlDOzs7OztJQUNqQyw4Q0FBOEM7O0lBQzlDLHdDQUFtQzs7SUFDbkMseUNBQTRDOztJQUM1Qyx5Q0FBNEM7O0lBQzVDLDRDQUErQjs7SUFDL0IsaURBQW9EOztJQUNwRCw0Q0FBK0M7O0lBQy9DLCtDQUE0Rjs7SUFDNUYsdURBQW9IOzs7OztJQWdFbEgsdURBQTBEOzs7OztJQUMxRCw0Q0FBd0M7Ozs7O0lBQ3hDLCtDQUFzRDs7Ozs7SUFDdEQsdUNBQTJCOzs7OztJQUMzQix5Q0FBOEI7Ozs7O0lBQzlCLHlDQUEyQzs7Ozs7SUFDM0MsaURBQTJEOzs7OztJQUMzRCxxQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciwgUm91dGVyTGluaywgUm91dGVyTGlua1dpdGhIcmVmIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgaXNOb3ROaWwsIElucHV0Qm9vbGVhbiwgTnpNZW51QmFzZVNlcnZpY2UsIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IG1lcmdlLCBFTVBUWSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgTnpTdWJtZW51U2VydmljZSB9IGZyb20gJy4vbnotc3VibWVudS5zZXJ2aWNlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW256LW1lbnUtaXRlbV0nLFxyXG4gIGV4cG9ydEFzOiAnbnpNZW51SXRlbScsXHJcbiAgcHJvdmlkZXJzOiBbTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXSxcclxuICBob3N0OiB7XHJcbiAgICAnKGNsaWNrKSc6ICdjbGlja01lbnVJdGVtKCRldmVudCknXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpNZW51SXRlbURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQge1xyXG4gIHByaXZhdGUgZWw6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHJpdmF0ZSBvcmlnaW5hbFBhZGRpbmc6IG51bWJlciB8IG51bGwgPSBudWxsO1xyXG4gIHNlbGVjdGVkJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTZWxlY3RlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56UGFkZGluZ0xlZnQ6IG51bWJlcjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpNYXRjaFJvdXRlckV4YWN0ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56TWF0Y2hSb3V0ZXIgPSBmYWxzZTtcclxuICBAQ29udGVudENoaWxkcmVuKFJvdXRlckxpbmssIHsgZGVzY2VuZGFudHM6IHRydWUgfSkgbGlzdE9mUm91dGVyTGluazogUXVlcnlMaXN0PFJvdXRlckxpbms+O1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oUm91dGVyTGlua1dpdGhIcmVmLCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIGxpc3RPZlJvdXRlckxpbmtXaXRoSHJlZjogUXVlcnlMaXN0PFJvdXRlckxpbmtXaXRoSHJlZj47XHJcblxyXG4gIC8qKiBjbGVhciBhbGwgaXRlbSBzZWxlY3RlZCBzdGF0dXMgZXhjZXB0IHRoaXMgKi9cclxuICBjbGlja01lbnVJdGVtKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56RGlzYWJsZWQpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLm56TWVudVNlcnZpY2Uub25NZW51SXRlbUNsaWNrKHRoaXMpO1xyXG4gICAgaWYgKHRoaXMubnpTdWJtZW51U2VydmljZSkge1xyXG4gICAgICB0aGlzLm56U3VibWVudVNlcnZpY2Uub25NZW51SXRlbUNsaWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHByZWZpeE5hbWUgPSB0aGlzLm56TWVudVNlcnZpY2UuaXNJbkRyb3BEb3duID8gJ2FudC1kcm9wZG93bi1tZW51LWl0ZW0nIDogJ2FudC1tZW51LWl0ZW0nO1xyXG4gICAgdGhpcy5uelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWwsIHtcclxuICAgICAgW2Ake3ByZWZpeE5hbWV9YF06IHRydWUsXHJcbiAgICAgIFtgJHtwcmVmaXhOYW1lfS1zZWxlY3RlZGBdOiB0aGlzLm56U2VsZWN0ZWQsXHJcbiAgICAgIFtgJHtwcmVmaXhOYW1lfS1kaXNhYmxlZGBdOiB0aGlzLm56RGlzYWJsZWRcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0U2VsZWN0ZWRTdGF0ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5uelNlbGVjdGVkID0gdmFsdWU7XHJcbiAgICB0aGlzLnNlbGVjdGVkJC5uZXh0KHZhbHVlKTtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlUm91dGVyQWN0aXZlKCk6IHZvaWQge1xyXG4gICAgaWYgKFxyXG4gICAgICAhdGhpcy5saXN0T2ZSb3V0ZXJMaW5rIHx8XHJcbiAgICAgICF0aGlzLmxpc3RPZlJvdXRlckxpbmtXaXRoSHJlZiB8fFxyXG4gICAgICAhdGhpcy5yb3V0ZXIgfHxcclxuICAgICAgIXRoaXMucm91dGVyLm5hdmlnYXRlZCB8fFxyXG4gICAgICAhdGhpcy5uek1hdGNoUm91dGVyXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGhhc0FjdGl2ZUxpbmtzID0gdGhpcy5oYXNBY3RpdmVMaW5rcygpO1xyXG4gICAgICBpZiAodGhpcy5uelNlbGVjdGVkICE9PSBoYXNBY3RpdmVMaW5rcykge1xyXG4gICAgICAgIHRoaXMubnpTZWxlY3RlZCA9IGhhc0FjdGl2ZUxpbmtzO1xyXG4gICAgICAgIHRoaXMuc2V0U2VsZWN0ZWRTdGF0ZSh0aGlzLm56U2VsZWN0ZWQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFzQWN0aXZlTGlua3MoKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBpc0FjdGl2ZUNoZWNrRm4gPSB0aGlzLmlzTGlua0FjdGl2ZSh0aGlzLnJvdXRlciEpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgKHRoaXMucm91dGVyTGluayAmJiBpc0FjdGl2ZUNoZWNrRm4odGhpcy5yb3V0ZXJMaW5rKSkgfHxcclxuICAgICAgKHRoaXMucm91dGVyTGlua1dpdGhIcmVmICYmIGlzQWN0aXZlQ2hlY2tGbih0aGlzLnJvdXRlckxpbmtXaXRoSHJlZikpIHx8XHJcbiAgICAgIHRoaXMubGlzdE9mUm91dGVyTGluay5zb21lKGlzQWN0aXZlQ2hlY2tGbikgfHxcclxuICAgICAgdGhpcy5saXN0T2ZSb3V0ZXJMaW5rV2l0aEhyZWYuc29tZShpc0FjdGl2ZUNoZWNrRm4pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc0xpbmtBY3RpdmUocm91dGVyOiBSb3V0ZXIpOiAobGluazogUm91dGVyTGluayB8IFJvdXRlckxpbmtXaXRoSHJlZikgPT4gYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKGxpbms6IFJvdXRlckxpbmsgfCBSb3V0ZXJMaW5rV2l0aEhyZWYpID0+IHJvdXRlci5pc0FjdGl2ZShsaW5rLnVybFRyZWUsIHRoaXMubnpNYXRjaFJvdXRlckV4YWN0KTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSxcclxuICAgIHByaXZhdGUgbnpNZW51U2VydmljZTogTnpNZW51QmFzZVNlcnZpY2UsXHJcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIG56U3VibWVudVNlcnZpY2U6IE56U3VibWVudVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIHJvdXRlckxpbms/OiBSb3V0ZXJMaW5rLFxyXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSByb3V0ZXJMaW5rV2l0aEhyZWY/OiBSb3V0ZXJMaW5rV2l0aEhyZWYsXHJcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIHJvdXRlcj86IFJvdXRlclxyXG4gICkge1xyXG4gICAgaWYgKHJvdXRlcikge1xyXG4gICAgICB0aGlzLnJvdXRlciEuZXZlbnRzLnBpcGUoXHJcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxyXG4gICAgICAgIGZpbHRlcihlID0+IGUgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKVxyXG4gICAgICApLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVSb3V0ZXJBY3RpdmUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIC8qKiBzdG9yZSBvcmlnaW4gcGFkZGluZyBpbiBwYWRkaW5nICovXHJcbiAgICBjb25zdCBwYWRkaW5nTGVmdCA9IHRoaXMuZWwuc3R5bGUucGFkZGluZ0xlZnQ7XHJcbiAgICBpZiAocGFkZGluZ0xlZnQpIHtcclxuICAgICAgdGhpcy5vcmlnaW5hbFBhZGRpbmcgPSBwYXJzZUludChwYWRkaW5nTGVmdCwgMTApO1xyXG4gICAgfVxyXG4gICAgbWVyZ2UoXHJcbiAgICAgIHRoaXMubnpNZW51U2VydmljZS5tb2RlJCxcclxuICAgICAgdGhpcy5uek1lbnVTZXJ2aWNlLmlubGluZUluZGVudCQsXHJcbiAgICAgIHRoaXMubnpTdWJtZW51U2VydmljZSA/IHRoaXMubnpTdWJtZW51U2VydmljZS5sZXZlbCQgOiBFTVBUWVxyXG4gICAgKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIGxldCBwYWRkaW5nOiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuICAgICAgICBpZiAodGhpcy5uek1lbnVTZXJ2aWNlLm1vZGUgPT09ICdpbmxpbmUnKSB7XHJcbiAgICAgICAgICBpZiAoaXNOb3ROaWwodGhpcy5uelBhZGRpbmdMZWZ0KSkge1xyXG4gICAgICAgICAgICBwYWRkaW5nID0gdGhpcy5uelBhZGRpbmdMZWZ0O1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgbGV2ZWwgPSB0aGlzLm56U3VibWVudVNlcnZpY2UgPyB0aGlzLm56U3VibWVudVNlcnZpY2UubGV2ZWwgKyAxIDogMTtcclxuICAgICAgICAgICAgcGFkZGluZyA9IGxldmVsICogdGhpcy5uek1lbnVTZXJ2aWNlLmlubGluZUluZGVudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcGFkZGluZyA9IHRoaXMub3JpZ2luYWxQYWRkaW5nO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocGFkZGluZykge1xyXG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAncGFkZGluZy1sZWZ0JywgYCR7cGFkZGluZ31weGApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuZWwsICdwYWRkaW5nLWxlZnQnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5saXN0T2ZSb3V0ZXJMaW5rLmNoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB0aGlzLnVwZGF0ZVJvdXRlckFjdGl2ZSgpKTtcclxuICAgIHRoaXMubGlzdE9mUm91dGVyTGlua1dpdGhIcmVmLmNoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB0aGlzLnVwZGF0ZVJvdXRlckFjdGl2ZSgpKTtcclxuICAgIHRoaXMudXBkYXRlUm91dGVyQWN0aXZlKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5uelNlbGVjdGVkKSB7XHJcbiAgICAgIHRoaXMuc2V0U2VsZWN0ZWRTdGF0ZSh0aGlzLm56U2VsZWN0ZWQpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMubnpEaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=
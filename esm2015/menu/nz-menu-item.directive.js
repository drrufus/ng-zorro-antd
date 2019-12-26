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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudS1pdGVtLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvbWVudS8iLCJzb3VyY2VzIjpbIm56LW1lbnUtaXRlbS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFFTCxlQUFlLEVBQ2YsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBSUwsUUFBUSxFQUNSLFNBQVMsRUFDVCxTQUFTLEVBRVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEYsT0FBTyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6RyxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQVV4RCxNQUFNLE9BQU8sbUJBQW1COzs7Ozs7Ozs7OztJQTBFOUIsWUFDVSx3QkFBa0QsRUFDbEQsYUFBZ0MsRUFDcEIsZ0JBQWtDLEVBQzlDLFFBQW1CLEVBQ25CLFVBQXNCLEVBQ1YsVUFBdUIsRUFDdkIsa0JBQXVDLEVBQ3ZDLE1BQWU7UUFQM0IsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxrQkFBYSxHQUFiLGFBQWEsQ0FBbUI7UUFDcEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUM5QyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDVixlQUFVLEdBQVYsVUFBVSxDQUFhO1FBQ3ZCLHVCQUFrQixHQUFsQixr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QzNCO0lBQWYsWUFBWSxFQUFFOzswREFBdUI7Ozs7OztJQVIvQyxpQ0FBd0Q7Ozs7O0lBQ3hELHVDQUFpQzs7Ozs7SUFDakMsOENBQThDOztJQUM5Qyx3Q0FBbUM7O0lBQ25DLHlDQUE0Qzs7SUFDNUMseUNBQTRDOztJQUM1Qyw0Q0FBK0I7O0lBQy9CLGlEQUFvRDs7SUFDcEQsNENBQStDOztJQUMvQywrQ0FBNEY7O0lBQzVGLHVEQUFvSDs7Ozs7SUFnRWxILHVEQUEwRDs7Ozs7SUFDMUQsNENBQXdDOzs7OztJQUN4QywrQ0FBc0Q7Ozs7O0lBQ3RELHVDQUEyQjs7Ozs7SUFDM0IseUNBQThCOzs7OztJQUM5Qix5Q0FBMkM7Ozs7O0lBQzNDLGlEQUEyRDs7Ozs7SUFDM0QscUNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlc1xyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uRW5kLCBSb3V0ZXIsIFJvdXRlckxpbmssIFJvdXRlckxpbmtXaXRoSHJlZiB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IGlzTm90TmlsLCBJbnB1dEJvb2xlYW4sIE56TWVudUJhc2VTZXJ2aWNlLCBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBtZXJnZSwgRU1QVFksIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE56U3VibWVudVNlcnZpY2UgfSBmcm9tICcuL256LXN1Ym1lbnUuc2VydmljZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tuei1tZW51LWl0ZW1dJyxcclxuICBleHBvcnRBczogJ256TWVudUl0ZW0nLFxyXG4gIHByb3ZpZGVyczogW056VXBkYXRlSG9zdENsYXNzU2VydmljZV0sXHJcbiAgaG9zdDoge1xyXG4gICAgJyhjbGljayknOiAnY2xpY2tNZW51SXRlbSgkZXZlbnQpJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56TWVudUl0ZW1EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBBZnRlckNvbnRlbnRJbml0IHtcclxuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xyXG4gIHByaXZhdGUgb3JpZ2luYWxQYWRkaW5nOiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuICBzZWxlY3RlZCQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2VsZWN0ZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBuelBhZGRpbmdMZWZ0OiBudW1iZXI7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56TWF0Y2hSb3V0ZXJFeGFjdCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuek1hdGNoUm91dGVyID0gZmFsc2U7XHJcbiAgQENvbnRlbnRDaGlsZHJlbihSb3V0ZXJMaW5rLCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIGxpc3RPZlJvdXRlckxpbms6IFF1ZXJ5TGlzdDxSb3V0ZXJMaW5rPjtcclxuICBAQ29udGVudENoaWxkcmVuKFJvdXRlckxpbmtXaXRoSHJlZiwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBsaXN0T2ZSb3V0ZXJMaW5rV2l0aEhyZWY6IFF1ZXJ5TGlzdDxSb3V0ZXJMaW5rV2l0aEhyZWY+O1xyXG5cclxuICAvKiogY2xlYXIgYWxsIGl0ZW0gc2VsZWN0ZWQgc3RhdHVzIGV4Y2VwdCB0aGlzICovXHJcbiAgY2xpY2tNZW51SXRlbShlOiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uekRpc2FibGVkKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5uek1lbnVTZXJ2aWNlLm9uTWVudUl0ZW1DbGljayh0aGlzKTtcclxuICAgIGlmICh0aGlzLm56U3VibWVudVNlcnZpY2UpIHtcclxuICAgICAgdGhpcy5uelN1Ym1lbnVTZXJ2aWNlLm9uTWVudUl0ZW1DbGljaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICBjb25zdCBwcmVmaXhOYW1lID0gdGhpcy5uek1lbnVTZXJ2aWNlLmlzSW5Ecm9wRG93biA/ICdhbnQtZHJvcGRvd24tbWVudS1pdGVtJyA6ICdhbnQtbWVudS1pdGVtJztcclxuICAgIHRoaXMubnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsLCB7XHJcbiAgICAgIFtgJHtwcmVmaXhOYW1lfWBdOiB0cnVlLFxyXG4gICAgICBbYCR7cHJlZml4TmFtZX0tc2VsZWN0ZWRgXTogdGhpcy5uelNlbGVjdGVkLFxyXG4gICAgICBbYCR7cHJlZml4TmFtZX0tZGlzYWJsZWRgXTogdGhpcy5uekRpc2FibGVkXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldFNlbGVjdGVkU3RhdGUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMubnpTZWxlY3RlZCA9IHZhbHVlO1xyXG4gICAgdGhpcy5zZWxlY3RlZCQubmV4dCh2YWx1ZSk7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZVJvdXRlckFjdGl2ZSgpOiB2b2lkIHtcclxuICAgIGlmIChcclxuICAgICAgIXRoaXMubGlzdE9mUm91dGVyTGluayB8fFxyXG4gICAgICAhdGhpcy5saXN0T2ZSb3V0ZXJMaW5rV2l0aEhyZWYgfHxcclxuICAgICAgIXRoaXMucm91dGVyIHx8XHJcbiAgICAgICF0aGlzLnJvdXRlci5uYXZpZ2F0ZWQgfHxcclxuICAgICAgIXRoaXMubnpNYXRjaFJvdXRlclxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICBjb25zdCBoYXNBY3RpdmVMaW5rcyA9IHRoaXMuaGFzQWN0aXZlTGlua3MoKTtcclxuICAgICAgaWYgKHRoaXMubnpTZWxlY3RlZCAhPT0gaGFzQWN0aXZlTGlua3MpIHtcclxuICAgICAgICB0aGlzLm56U2VsZWN0ZWQgPSBoYXNBY3RpdmVMaW5rcztcclxuICAgICAgICB0aGlzLnNldFNlbGVjdGVkU3RhdGUodGhpcy5uelNlbGVjdGVkKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhc0FjdGl2ZUxpbmtzKCk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgaXNBY3RpdmVDaGVja0ZuID0gdGhpcy5pc0xpbmtBY3RpdmUodGhpcy5yb3V0ZXIhKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICh0aGlzLnJvdXRlckxpbmsgJiYgaXNBY3RpdmVDaGVja0ZuKHRoaXMucm91dGVyTGluaykpIHx8XHJcbiAgICAgICh0aGlzLnJvdXRlckxpbmtXaXRoSHJlZiAmJiBpc0FjdGl2ZUNoZWNrRm4odGhpcy5yb3V0ZXJMaW5rV2l0aEhyZWYpKSB8fFxyXG4gICAgICB0aGlzLmxpc3RPZlJvdXRlckxpbmsuc29tZShpc0FjdGl2ZUNoZWNrRm4pIHx8XHJcbiAgICAgIHRoaXMubGlzdE9mUm91dGVyTGlua1dpdGhIcmVmLnNvbWUoaXNBY3RpdmVDaGVja0ZuKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNMaW5rQWN0aXZlKHJvdXRlcjogUm91dGVyKTogKGxpbms6IFJvdXRlckxpbmsgfCBSb3V0ZXJMaW5rV2l0aEhyZWYpID0+IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIChsaW5rOiBSb3V0ZXJMaW5rIHwgUm91dGVyTGlua1dpdGhIcmVmKSA9PiByb3V0ZXIuaXNBY3RpdmUobGluay51cmxUcmVlLCB0aGlzLm56TWF0Y2hSb3V0ZXJFeGFjdCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIG56TWVudVNlcnZpY2U6IE56TWVudUJhc2VTZXJ2aWNlLFxyXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBuelN1Ym1lbnVTZXJ2aWNlOiBOelN1Ym1lbnVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSByb3V0ZXJMaW5rPzogUm91dGVyTGluayxcclxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgcm91dGVyTGlua1dpdGhIcmVmPzogUm91dGVyTGlua1dpdGhIcmVmLFxyXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSByb3V0ZXI/OiBSb3V0ZXJcclxuICApIHtcclxuICAgIGlmIChyb3V0ZXIpIHtcclxuICAgICAgdGhpcy5yb3V0ZXIhLmV2ZW50cy5waXBlKFxyXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcclxuICAgICAgICBmaWx0ZXIoZSA9PiBlIGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZClcclxuICAgICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMudXBkYXRlUm91dGVyQWN0aXZlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAvKiogc3RvcmUgb3JpZ2luIHBhZGRpbmcgaW4gcGFkZGluZyAqL1xyXG4gICAgY29uc3QgcGFkZGluZ0xlZnQgPSB0aGlzLmVsLnN0eWxlLnBhZGRpbmdMZWZ0O1xyXG4gICAgaWYgKHBhZGRpbmdMZWZ0KSB7XHJcbiAgICAgIHRoaXMub3JpZ2luYWxQYWRkaW5nID0gcGFyc2VJbnQocGFkZGluZ0xlZnQsIDEwKTtcclxuICAgIH1cclxuICAgIG1lcmdlKFxyXG4gICAgICB0aGlzLm56TWVudVNlcnZpY2UubW9kZSQsXHJcbiAgICAgIHRoaXMubnpNZW51U2VydmljZS5pbmxpbmVJbmRlbnQkLFxyXG4gICAgICB0aGlzLm56U3VibWVudVNlcnZpY2UgPyB0aGlzLm56U3VibWVudVNlcnZpY2UubGV2ZWwkIDogRU1QVFlcclxuICAgIClcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICBsZXQgcGFkZGluZzogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMubnpNZW51U2VydmljZS5tb2RlID09PSAnaW5saW5lJykge1xyXG4gICAgICAgICAgaWYgKGlzTm90TmlsKHRoaXMubnpQYWRkaW5nTGVmdCkpIHtcclxuICAgICAgICAgICAgcGFkZGluZyA9IHRoaXMubnpQYWRkaW5nTGVmdDtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxldmVsID0gdGhpcy5uelN1Ym1lbnVTZXJ2aWNlID8gdGhpcy5uelN1Ym1lbnVTZXJ2aWNlLmxldmVsICsgMSA6IDE7XHJcbiAgICAgICAgICAgIHBhZGRpbmcgPSBsZXZlbCAqIHRoaXMubnpNZW51U2VydmljZS5pbmxpbmVJbmRlbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHBhZGRpbmcgPSB0aGlzLm9yaWdpbmFsUGFkZGluZztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBhZGRpbmcpIHtcclxuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ3BhZGRpbmctbGVmdCcsIGAke3BhZGRpbmd9cHhgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmVsLCAncGFkZGluZy1sZWZ0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMubGlzdE9mUm91dGVyTGluay5jaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy51cGRhdGVSb3V0ZXJBY3RpdmUoKSk7XHJcbiAgICB0aGlzLmxpc3RPZlJvdXRlckxpbmtXaXRoSHJlZi5jaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy51cGRhdGVSb3V0ZXJBY3RpdmUoKSk7XHJcbiAgICB0aGlzLnVwZGF0ZVJvdXRlckFjdGl2ZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMubnpTZWxlY3RlZCkge1xyXG4gICAgICB0aGlzLnNldFNlbGVjdGVkU3RhdGUodGhpcy5uelNlbGVjdGVkKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLm56RGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcbn1cclxuIl19
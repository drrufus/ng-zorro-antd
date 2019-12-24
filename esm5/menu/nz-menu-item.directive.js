import { __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ContentChildren, Directive, ElementRef, Input, Optional, QueryList, Renderer2 } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkWithHref } from '@angular/router';
import { InputBoolean, isNotNil, NzMenuBaseService, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { EMPTY, merge, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { NzSubmenuService } from './nz-submenu.service';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
import * as i2 from "./nz-submenu.service";
import * as i3 from "@angular/router";
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
            this.router.events.pipe(takeUntil(this.destroy$), filter(function (e) { return e instanceof NavigationEnd; })).subscribe(function () {
                _this.updateRouterActive();
            });
        }
    }
    /** clear all item selected status except this */
    NzMenuItemDirective.prototype.clickMenuItem = function (e) {
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
    NzMenuItemDirective.prototype.setClassMap = function () {
        var _a;
        var prefixName = this.nzMenuService.isInDropDown ? 'ant-dropdown-menu-item' : 'ant-menu-item';
        this.nzUpdateHostClassService.updateHostClass(this.el, (_a = {},
            _a["" + prefixName] = true,
            _a[prefixName + "-selected"] = this.nzSelected,
            _a[prefixName + "-disabled"] = this.nzDisabled,
            _a));
    };
    NzMenuItemDirective.prototype.setSelectedState = function (value) {
        this.nzSelected = value;
        this.selected$.next(value);
        this.setClassMap();
    };
    NzMenuItemDirective.prototype.updateRouterActive = function () {
        var _this = this;
        if (!this.listOfRouterLink || !this.listOfRouterLinkWithHref || !this.router || !this.router.navigated || !this.nzMatchRouter) {
            return;
        }
        Promise.resolve().then(function () {
            var hasActiveLinks = _this.hasActiveLinks();
            if (_this.nzSelected !== hasActiveLinks) {
                _this.nzSelected = hasActiveLinks;
                _this.setSelectedState(_this.nzSelected);
            }
        });
    };
    NzMenuItemDirective.prototype.hasActiveLinks = function () {
        var isActiveCheckFn = this.isLinkActive(this.router);
        return ((this.routerLink && isActiveCheckFn(this.routerLink)) ||
            (this.routerLinkWithHref && isActiveCheckFn(this.routerLinkWithHref)) ||
            this.listOfRouterLink.some(isActiveCheckFn) ||
            this.listOfRouterLinkWithHref.some(isActiveCheckFn));
    };
    NzMenuItemDirective.prototype.isLinkActive = function (router) {
        var _this = this;
        return function (link) { return router.isActive(link.urlTree, _this.nzMatchRouterExact); };
    };
    NzMenuItemDirective.prototype.ngOnInit = function () {
        var _this = this;
        /** store origin padding in padding */
        var paddingLeft = this.el.style.paddingLeft;
        if (paddingLeft) {
            this.originalPadding = parseInt(paddingLeft, 10);
        }
        merge(this.nzMenuService.mode$, this.nzMenuService.inlineIndent$, this.nzSubmenuService ? this.nzSubmenuService.level$ : EMPTY)
            .pipe(takeUntil(this.destroy$))
            .subscribe(function () {
            var padding = null;
            if (_this.nzMenuService.mode === 'inline') {
                if (isNotNil(_this.nzPaddingLeft)) {
                    padding = _this.nzPaddingLeft;
                }
                else {
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
        });
        this.setClassMap();
    };
    NzMenuItemDirective.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.listOfRouterLink.changes.pipe(takeUntil(this.destroy$)).subscribe(function () { return _this.updateRouterActive(); });
        this.listOfRouterLinkWithHref.changes.pipe(takeUntil(this.destroy$)).subscribe(function () { return _this.updateRouterActive(); });
        this.updateRouterActive();
    };
    NzMenuItemDirective.prototype.ngOnChanges = function (changes) {
        if (changes.nzSelected) {
            this.setSelectedState(this.nzSelected);
        }
        if (changes.nzDisabled) {
            this.setClassMap();
        }
    };
    NzMenuItemDirective.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /** @nocollapse */ NzMenuItemDirective.ɵfac = function NzMenuItemDirective_Factory(t) { return new (t || NzMenuItemDirective)(i0.ɵɵdirectiveInject(i1.NzUpdateHostClassService), i0.ɵɵdirectiveInject(i1.NzMenuBaseService), i0.ɵɵdirectiveInject(i2.NzSubmenuService, 8), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i3.RouterLink, 8), i0.ɵɵdirectiveInject(i3.RouterLinkWithHref, 8), i0.ɵɵdirectiveInject(i3.Router, 8)); };
    /** @nocollapse */ NzMenuItemDirective.ɵdir = i0.ɵɵdefineDirective({ type: NzMenuItemDirective, selectors: [["", "nz-menu-item", ""]], contentQueries: function NzMenuItemDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, RouterLink, true);
            i0.ɵɵcontentQuery(dirIndex, RouterLinkWithHref, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.listOfRouterLink = _t);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.listOfRouterLinkWithHref = _t);
        } }, hostBindings: function NzMenuItemDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            i0.ɵɵlistener("click", function NzMenuItemDirective_click_HostBindingHandler($event) { return ctx.clickMenuItem($event); });
        } }, inputs: { nzDisabled: "nzDisabled", nzSelected: "nzSelected", nzPaddingLeft: "nzPaddingLeft", nzMatchRouterExact: "nzMatchRouterExact", nzMatchRouter: "nzMatchRouter" }, exportAs: ["nzMenuItem"], features: [i0.ɵɵProvidersFeature([NzUpdateHostClassService]), i0.ɵɵNgOnChangesFeature()] });
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzMenuItemDirective.prototype, "nzDisabled", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzMenuItemDirective.prototype, "nzSelected", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzMenuItemDirective.prototype, "nzMatchRouterExact", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzMenuItemDirective.prototype, "nzMatchRouter", void 0);
    return NzMenuItemDirective;
}());
export { NzMenuItemDirective };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzMenuItemDirective, [{
        type: Directive,
        args: [{
                selector: '[nz-menu-item]',
                exportAs: 'nzMenuItem',
                providers: [NzUpdateHostClassService],
                host: {
                    '(click)': 'clickMenuItem($event)'
                }
            }]
    }], function () { return [{ type: i1.NzUpdateHostClassService }, { type: i1.NzMenuBaseService }, { type: i2.NzSubmenuService, decorators: [{
                type: Optional
            }] }, { type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i3.RouterLink, decorators: [{
                type: Optional
            }] }, { type: i3.RouterLinkWithHref, decorators: [{
                type: Optional
            }] }, { type: i3.Router, decorators: [{
                type: Optional
            }] }]; }, { nzDisabled: [{
            type: Input
        }], nzSelected: [{
            type: Input
        }], nzPaddingLeft: [{
            type: Input
        }], nzMatchRouterExact: [{
            type: Input
        }], nzMatchRouter: [{
            type: Input
        }], listOfRouterLink: [{
            type: ContentChildren,
            args: [RouterLink, { descendants: true }]
        }], listOfRouterLinkWithHref: [{
            type: ContentChildren,
            args: [RouterLinkWithHref, { descendants: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudS1pdGVtLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvbWVudS8iLCJzb3VyY2VzIjpbIm56LW1lbnUtaXRlbS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFFTCxlQUFlLEVBQ2YsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBSUwsUUFBUSxFQUNSLFNBQVMsRUFDVCxTQUFTLEVBRVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEYsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6RyxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7QUFFeEQ7SUE0RUUsNkJBQ1Usd0JBQWtELEVBQ2xELGFBQWdDLEVBQ3BCLGdCQUFrQyxFQUM5QyxRQUFtQixFQUNuQixVQUFzQixFQUNWLFVBQXVCLEVBQ3ZCLGtCQUF1QyxFQUN2QyxNQUFlO1FBUnJDLGlCQWtCQztRQWpCUyw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELGtCQUFhLEdBQWIsYUFBYSxDQUFtQjtRQUNwQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQzlDLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNWLGVBQVUsR0FBVixVQUFVLENBQWE7UUFDdkIsdUJBQWtCLEdBQWxCLGtCQUFrQixD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QkFDTCxLQUFLOztrQkFDTCxlQUFlO21CQUFDLFVBQVUsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7O2tCQUNqRCxlQUFlO21CQUFDLGtCQUFrQixFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBRdWVyeUxpc3QsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNpbXBsZUNoYW5nZXNcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmF2aWdhdGlvbkVuZCwgUm91dGVyLCBSb3V0ZXJMaW5rLCBSb3V0ZXJMaW5rV2l0aEhyZWYgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIGlzTm90TmlsLCBOek1lbnVCYXNlU2VydmljZSwgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgRU1QVFksIG1lcmdlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBOelN1Ym1lbnVTZXJ2aWNlIH0gZnJvbSAnLi9uei1zdWJtZW51LnNlcnZpY2UnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbnotbWVudS1pdGVtXScsXHJcbiAgZXhwb3J0QXM6ICduek1lbnVJdGVtJyxcclxuICBwcm92aWRlcnM6IFtOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VdLFxyXG4gIGhvc3Q6IHtcclxuICAgICcoY2xpY2spJzogJ2NsaWNrTWVudUl0ZW0oJGV2ZW50KSdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOek1lbnVJdGVtRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCB7XHJcbiAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcclxuICBwcml2YXRlIG9yaWdpbmFsUGFkZGluZzogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgc2VsZWN0ZWQkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNlbGVjdGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpQYWRkaW5nTGVmdDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuek1hdGNoUm91dGVyRXhhY3QgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpNYXRjaFJvdXRlciA9IGZhbHNlO1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oUm91dGVyTGluaywgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBsaXN0T2ZSb3V0ZXJMaW5rOiBRdWVyeUxpc3Q8Um91dGVyTGluaz47XHJcbiAgQENvbnRlbnRDaGlsZHJlbihSb3V0ZXJMaW5rV2l0aEhyZWYsIHsgZGVzY2VuZGFudHM6IHRydWUgfSkgbGlzdE9mUm91dGVyTGlua1dpdGhIcmVmOiBRdWVyeUxpc3Q8Um91dGVyTGlua1dpdGhIcmVmPjtcclxuXHJcbiAgLyoqIGNsZWFyIGFsbCBpdGVtIHNlbGVjdGVkIHN0YXR1cyBleGNlcHQgdGhpcyAqL1xyXG4gIGNsaWNrTWVudUl0ZW0oZTogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpEaXNhYmxlZCkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMubnpNZW51U2VydmljZS5vbk1lbnVJdGVtQ2xpY2sodGhpcyk7XHJcbiAgICBpZiAodGhpcy5uelN1Ym1lbnVTZXJ2aWNlKSB7XHJcbiAgICAgIHRoaXMubnpTdWJtZW51U2VydmljZS5vbk1lbnVJdGVtQ2xpY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgY29uc3QgcHJlZml4TmFtZSA9IHRoaXMubnpNZW51U2VydmljZS5pc0luRHJvcERvd24gPyAnYW50LWRyb3Bkb3duLW1lbnUtaXRlbScgOiAnYW50LW1lbnUtaXRlbSc7XHJcbiAgICB0aGlzLm56VXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbCwge1xyXG4gICAgICBbYCR7cHJlZml4TmFtZX1gXTogdHJ1ZSxcclxuICAgICAgW2Ake3ByZWZpeE5hbWV9LXNlbGVjdGVkYF06IHRoaXMubnpTZWxlY3RlZCxcclxuICAgICAgW2Ake3ByZWZpeE5hbWV9LWRpc2FibGVkYF06IHRoaXMubnpEaXNhYmxlZFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRTZWxlY3RlZFN0YXRlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLm56U2VsZWN0ZWQgPSB2YWx1ZTtcclxuICAgIHRoaXMuc2VsZWN0ZWQkLm5leHQodmFsdWUpO1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVSb3V0ZXJBY3RpdmUoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMubGlzdE9mUm91dGVyTGluayB8fCAhdGhpcy5saXN0T2ZSb3V0ZXJMaW5rV2l0aEhyZWYgfHwgIXRoaXMucm91dGVyIHx8ICF0aGlzLnJvdXRlci5uYXZpZ2F0ZWQgfHwgIXRoaXMubnpNYXRjaFJvdXRlcikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcclxuICAgICAgY29uc3QgaGFzQWN0aXZlTGlua3MgPSB0aGlzLmhhc0FjdGl2ZUxpbmtzKCk7XHJcbiAgICAgIGlmICh0aGlzLm56U2VsZWN0ZWQgIT09IGhhc0FjdGl2ZUxpbmtzKSB7XHJcbiAgICAgICAgdGhpcy5uelNlbGVjdGVkID0gaGFzQWN0aXZlTGlua3M7XHJcbiAgICAgICAgdGhpcy5zZXRTZWxlY3RlZFN0YXRlKHRoaXMubnpTZWxlY3RlZCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYXNBY3RpdmVMaW5rcygpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGlzQWN0aXZlQ2hlY2tGbiA9IHRoaXMuaXNMaW5rQWN0aXZlKHRoaXMucm91dGVyISk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAodGhpcy5yb3V0ZXJMaW5rICYmIGlzQWN0aXZlQ2hlY2tGbih0aGlzLnJvdXRlckxpbmspKSB8fFxyXG4gICAgICAodGhpcy5yb3V0ZXJMaW5rV2l0aEhyZWYgJiYgaXNBY3RpdmVDaGVja0ZuKHRoaXMucm91dGVyTGlua1dpdGhIcmVmKSkgfHxcclxuICAgICAgdGhpcy5saXN0T2ZSb3V0ZXJMaW5rLnNvbWUoaXNBY3RpdmVDaGVja0ZuKSB8fFxyXG4gICAgICB0aGlzLmxpc3RPZlJvdXRlckxpbmtXaXRoSHJlZi5zb21lKGlzQWN0aXZlQ2hlY2tGbilcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzTGlua0FjdGl2ZShyb3V0ZXI6IFJvdXRlcik6IChsaW5rOiBSb3V0ZXJMaW5rIHwgUm91dGVyTGlua1dpdGhIcmVmKSA9PiBib29sZWFuIHtcclxuICAgIHJldHVybiAobGluazogUm91dGVyTGluayB8IFJvdXRlckxpbmtXaXRoSHJlZikgPT4gcm91dGVyLmlzQWN0aXZlKGxpbmsudXJsVHJlZSwgdGhpcy5uek1hdGNoUm91dGVyRXhhY3QpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBuek1lbnVTZXJ2aWNlOiBOek1lbnVCYXNlU2VydmljZSxcclxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgbnpTdWJtZW51U2VydmljZTogTnpTdWJtZW51U2VydmljZSxcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgcm91dGVyTGluaz86IFJvdXRlckxpbmssXHJcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIHJvdXRlckxpbmtXaXRoSHJlZj86IFJvdXRlckxpbmtXaXRoSHJlZixcclxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgcm91dGVyPzogUm91dGVyXHJcbiAgKSB7XHJcbiAgICBpZiAocm91dGVyKSB7XHJcbiAgICAgIHRoaXMucm91dGVyIS5ldmVudHMucGlwZShcclxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXHJcbiAgICAgICAgZmlsdGVyKGUgPT4gZSBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpXHJcbiAgICAgICkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVJvdXRlckFjdGl2ZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgLyoqIHN0b3JlIG9yaWdpbiBwYWRkaW5nIGluIHBhZGRpbmcgKi9cclxuICAgIGNvbnN0IHBhZGRpbmdMZWZ0ID0gdGhpcy5lbC5zdHlsZS5wYWRkaW5nTGVmdDtcclxuICAgIGlmIChwYWRkaW5nTGVmdCkge1xyXG4gICAgICB0aGlzLm9yaWdpbmFsUGFkZGluZyA9IHBhcnNlSW50KHBhZGRpbmdMZWZ0LCAxMCk7XHJcbiAgICB9XHJcbiAgICBtZXJnZSh0aGlzLm56TWVudVNlcnZpY2UubW9kZSQsIHRoaXMubnpNZW51U2VydmljZS5pbmxpbmVJbmRlbnQkLCB0aGlzLm56U3VibWVudVNlcnZpY2UgPyB0aGlzLm56U3VibWVudVNlcnZpY2UubGV2ZWwkIDogRU1QVFkpXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgbGV0IHBhZGRpbmc6IG51bWJlciB8IG51bGwgPSBudWxsO1xyXG4gICAgICAgIGlmICh0aGlzLm56TWVudVNlcnZpY2UubW9kZSA9PT0gJ2lubGluZScpIHtcclxuICAgICAgICAgIGlmIChpc05vdE5pbCh0aGlzLm56UGFkZGluZ0xlZnQpKSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmcgPSB0aGlzLm56UGFkZGluZ0xlZnQ7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBsZXZlbCA9IHRoaXMubnpTdWJtZW51U2VydmljZSA/IHRoaXMubnpTdWJtZW51U2VydmljZS5sZXZlbCArIDEgOiAxO1xyXG4gICAgICAgICAgICBwYWRkaW5nID0gbGV2ZWwgKiB0aGlzLm56TWVudVNlcnZpY2UuaW5saW5lSW5kZW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBwYWRkaW5nID0gdGhpcy5vcmlnaW5hbFBhZGRpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwYWRkaW5nKSB7XHJcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICdwYWRkaW5nLWxlZnQnLCBgJHtwYWRkaW5nfXB4YCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5lbCwgJ3BhZGRpbmctbGVmdCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmxpc3RPZlJvdXRlckxpbmsuY2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMudXBkYXRlUm91dGVyQWN0aXZlKCkpO1xyXG4gICAgdGhpcy5saXN0T2ZSb3V0ZXJMaW5rV2l0aEhyZWYuY2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMudXBkYXRlUm91dGVyQWN0aXZlKCkpO1xyXG4gICAgdGhpcy51cGRhdGVSb3V0ZXJBY3RpdmUoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLm56U2VsZWN0ZWQpIHtcclxuICAgICAgdGhpcy5zZXRTZWxlY3RlZFN0YXRlKHRoaXMubnpTZWxlY3RlZCk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy5uekRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
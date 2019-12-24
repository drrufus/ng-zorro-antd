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
export class NzMenuItemDirective {
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
            this.router.events.pipe(takeUntil(this.destroy$), filter(e => e instanceof NavigationEnd)).subscribe(() => {
                this.updateRouterActive();
            });
        }
    }
    /** clear all item selected status except this */
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
    setClassMap() {
        const prefixName = this.nzMenuService.isInDropDown ? 'ant-dropdown-menu-item' : 'ant-menu-item';
        this.nzUpdateHostClassService.updateHostClass(this.el, {
            [`${prefixName}`]: true,
            [`${prefixName}-selected`]: this.nzSelected,
            [`${prefixName}-disabled`]: this.nzDisabled
        });
    }
    setSelectedState(value) {
        this.nzSelected = value;
        this.selected$.next(value);
        this.setClassMap();
    }
    updateRouterActive() {
        if (!this.listOfRouterLink || !this.listOfRouterLinkWithHref || !this.router || !this.router.navigated || !this.nzMatchRouter) {
            return;
        }
        Promise.resolve().then(() => {
            const hasActiveLinks = this.hasActiveLinks();
            if (this.nzSelected !== hasActiveLinks) {
                this.nzSelected = hasActiveLinks;
                this.setSelectedState(this.nzSelected);
            }
        });
    }
    hasActiveLinks() {
        const isActiveCheckFn = this.isLinkActive(this.router);
        return ((this.routerLink && isActiveCheckFn(this.routerLink)) ||
            (this.routerLinkWithHref && isActiveCheckFn(this.routerLinkWithHref)) ||
            this.listOfRouterLink.some(isActiveCheckFn) ||
            this.listOfRouterLinkWithHref.some(isActiveCheckFn));
    }
    isLinkActive(router) {
        return (link) => router.isActive(link.urlTree, this.nzMatchRouterExact);
    }
    ngOnInit() {
        /** store origin padding in padding */
        const paddingLeft = this.el.style.paddingLeft;
        if (paddingLeft) {
            this.originalPadding = parseInt(paddingLeft, 10);
        }
        merge(this.nzMenuService.mode$, this.nzMenuService.inlineIndent$, this.nzSubmenuService ? this.nzSubmenuService.level$ : EMPTY)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            let padding = null;
            if (this.nzMenuService.mode === 'inline') {
                if (isNotNil(this.nzPaddingLeft)) {
                    padding = this.nzPaddingLeft;
                }
                else {
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
        });
        this.setClassMap();
    }
    ngAfterContentInit() {
        this.listOfRouterLink.changes.pipe(takeUntil(this.destroy$)).subscribe(() => this.updateRouterActive());
        this.listOfRouterLinkWithHref.changes.pipe(takeUntil(this.destroy$)).subscribe(() => this.updateRouterActive());
        this.updateRouterActive();
    }
    ngOnChanges(changes) {
        if (changes.nzSelected) {
            this.setSelectedState(this.nzSelected);
        }
        if (changes.nzDisabled) {
            this.setClassMap();
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudS1pdGVtLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvbWVudS8iLCJzb3VyY2VzIjpbIm56LW1lbnUtaXRlbS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFFTCxlQUFlLEVBQ2YsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBSUwsUUFBUSxFQUNSLFNBQVMsRUFDVCxTQUFTLEVBRVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEYsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6RyxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7QUFVeEQsTUFBTSxPQUFPLG1CQUFtQjtJQW9FOUIsWUFDVSx3QkFBa0QsRUFDbEQsYUFBZ0MsRUFDcEIsZ0JBQWtDLEVBQzlDLFFBQW1CLEVBQ25CLFVBQXNCLEVBQ1YsVUFBdUIsRUFDdkIsa0JBQXVDLEVBQ3ZDLE1BQWU7UUFQM0IsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxrQkFBYSxHQUFiLGFBQWEsQ0FBbUI7UUFDcEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUM5QyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDVixlQUFVLEdBQVYsVUFBVSxDQUFhO1FBQ3ZCLHVCQUFrQixHQUFsQixrQkFB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QVcsRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciwgUm91dGVyTGluaywgUm91dGVyTGlua1dpdGhIcmVmIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBpc05vdE5pbCwgTnpNZW51QmFzZVNlcnZpY2UsIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IEVNUFRZLCBtZXJnZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgTnpTdWJtZW51U2VydmljZSB9IGZyb20gJy4vbnotc3VibWVudS5zZXJ2aWNlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW256LW1lbnUtaXRlbV0nLFxyXG4gIGV4cG9ydEFzOiAnbnpNZW51SXRlbScsXHJcbiAgcHJvdmlkZXJzOiBbTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXSxcclxuICBob3N0OiB7XHJcbiAgICAnKGNsaWNrKSc6ICdjbGlja01lbnVJdGVtKCRldmVudCknXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpNZW51SXRlbURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQge1xyXG4gIHByaXZhdGUgZWw6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHJpdmF0ZSBvcmlnaW5hbFBhZGRpbmc6IG51bWJlciB8IG51bGwgPSBudWxsO1xyXG4gIHNlbGVjdGVkJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTZWxlY3RlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56UGFkZGluZ0xlZnQ6IG51bWJlcjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpNYXRjaFJvdXRlckV4YWN0ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56TWF0Y2hSb3V0ZXIgPSBmYWxzZTtcclxuICBAQ29udGVudENoaWxkcmVuKFJvdXRlckxpbmssIHsgZGVzY2VuZGFudHM6IHRydWUgfSkgbGlzdE9mUm91dGVyTGluazogUXVlcnlMaXN0PFJvdXRlckxpbms+O1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oUm91dGVyTGlua1dpdGhIcmVmLCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIGxpc3RPZlJvdXRlckxpbmtXaXRoSHJlZjogUXVlcnlMaXN0PFJvdXRlckxpbmtXaXRoSHJlZj47XHJcblxyXG4gIC8qKiBjbGVhciBhbGwgaXRlbSBzZWxlY3RlZCBzdGF0dXMgZXhjZXB0IHRoaXMgKi9cclxuICBjbGlja01lbnVJdGVtKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56RGlzYWJsZWQpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLm56TWVudVNlcnZpY2Uub25NZW51SXRlbUNsaWNrKHRoaXMpO1xyXG4gICAgaWYgKHRoaXMubnpTdWJtZW51U2VydmljZSkge1xyXG4gICAgICB0aGlzLm56U3VibWVudVNlcnZpY2Uub25NZW51SXRlbUNsaWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHByZWZpeE5hbWUgPSB0aGlzLm56TWVudVNlcnZpY2UuaXNJbkRyb3BEb3duID8gJ2FudC1kcm9wZG93bi1tZW51LWl0ZW0nIDogJ2FudC1tZW51LWl0ZW0nO1xyXG4gICAgdGhpcy5uelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWwsIHtcclxuICAgICAgW2Ake3ByZWZpeE5hbWV9YF06IHRydWUsXHJcbiAgICAgIFtgJHtwcmVmaXhOYW1lfS1zZWxlY3RlZGBdOiB0aGlzLm56U2VsZWN0ZWQsXHJcbiAgICAgIFtgJHtwcmVmaXhOYW1lfS1kaXNhYmxlZGBdOiB0aGlzLm56RGlzYWJsZWRcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0U2VsZWN0ZWRTdGF0ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5uelNlbGVjdGVkID0gdmFsdWU7XHJcbiAgICB0aGlzLnNlbGVjdGVkJC5uZXh0KHZhbHVlKTtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlUm91dGVyQWN0aXZlKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmxpc3RPZlJvdXRlckxpbmsgfHwgIXRoaXMubGlzdE9mUm91dGVyTGlua1dpdGhIcmVmIHx8ICF0aGlzLnJvdXRlciB8fCAhdGhpcy5yb3V0ZXIubmF2aWdhdGVkIHx8ICF0aGlzLm56TWF0Y2hSb3V0ZXIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGhhc0FjdGl2ZUxpbmtzID0gdGhpcy5oYXNBY3RpdmVMaW5rcygpO1xyXG4gICAgICBpZiAodGhpcy5uelNlbGVjdGVkICE9PSBoYXNBY3RpdmVMaW5rcykge1xyXG4gICAgICAgIHRoaXMubnpTZWxlY3RlZCA9IGhhc0FjdGl2ZUxpbmtzO1xyXG4gICAgICAgIHRoaXMuc2V0U2VsZWN0ZWRTdGF0ZSh0aGlzLm56U2VsZWN0ZWQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFzQWN0aXZlTGlua3MoKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBpc0FjdGl2ZUNoZWNrRm4gPSB0aGlzLmlzTGlua0FjdGl2ZSh0aGlzLnJvdXRlciEpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgKHRoaXMucm91dGVyTGluayAmJiBpc0FjdGl2ZUNoZWNrRm4odGhpcy5yb3V0ZXJMaW5rKSkgfHxcclxuICAgICAgKHRoaXMucm91dGVyTGlua1dpdGhIcmVmICYmIGlzQWN0aXZlQ2hlY2tGbih0aGlzLnJvdXRlckxpbmtXaXRoSHJlZikpIHx8XHJcbiAgICAgIHRoaXMubGlzdE9mUm91dGVyTGluay5zb21lKGlzQWN0aXZlQ2hlY2tGbikgfHxcclxuICAgICAgdGhpcy5saXN0T2ZSb3V0ZXJMaW5rV2l0aEhyZWYuc29tZShpc0FjdGl2ZUNoZWNrRm4pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc0xpbmtBY3RpdmUocm91dGVyOiBSb3V0ZXIpOiAobGluazogUm91dGVyTGluayB8IFJvdXRlckxpbmtXaXRoSHJlZikgPT4gYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKGxpbms6IFJvdXRlckxpbmsgfCBSb3V0ZXJMaW5rV2l0aEhyZWYpID0+IHJvdXRlci5pc0FjdGl2ZShsaW5rLnVybFRyZWUsIHRoaXMubnpNYXRjaFJvdXRlckV4YWN0KTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSxcclxuICAgIHByaXZhdGUgbnpNZW51U2VydmljZTogTnpNZW51QmFzZVNlcnZpY2UsXHJcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIG56U3VibWVudVNlcnZpY2U6IE56U3VibWVudVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIHJvdXRlckxpbms/OiBSb3V0ZXJMaW5rLFxyXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSByb3V0ZXJMaW5rV2l0aEhyZWY/OiBSb3V0ZXJMaW5rV2l0aEhyZWYsXHJcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIHJvdXRlcj86IFJvdXRlclxyXG4gICkge1xyXG4gICAgaWYgKHJvdXRlcikge1xyXG4gICAgICB0aGlzLnJvdXRlciEuZXZlbnRzLnBpcGUoXHJcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxyXG4gICAgICAgIGZpbHRlcihlID0+IGUgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKVxyXG4gICAgICApLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVSb3V0ZXJBY3RpdmUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIC8qKiBzdG9yZSBvcmlnaW4gcGFkZGluZyBpbiBwYWRkaW5nICovXHJcbiAgICBjb25zdCBwYWRkaW5nTGVmdCA9IHRoaXMuZWwuc3R5bGUucGFkZGluZ0xlZnQ7XHJcbiAgICBpZiAocGFkZGluZ0xlZnQpIHtcclxuICAgICAgdGhpcy5vcmlnaW5hbFBhZGRpbmcgPSBwYXJzZUludChwYWRkaW5nTGVmdCwgMTApO1xyXG4gICAgfVxyXG4gICAgbWVyZ2UodGhpcy5uek1lbnVTZXJ2aWNlLm1vZGUkLCB0aGlzLm56TWVudVNlcnZpY2UuaW5saW5lSW5kZW50JCwgdGhpcy5uelN1Ym1lbnVTZXJ2aWNlID8gdGhpcy5uelN1Ym1lbnVTZXJ2aWNlLmxldmVsJCA6IEVNUFRZKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIGxldCBwYWRkaW5nOiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuICAgICAgICBpZiAodGhpcy5uek1lbnVTZXJ2aWNlLm1vZGUgPT09ICdpbmxpbmUnKSB7XHJcbiAgICAgICAgICBpZiAoaXNOb3ROaWwodGhpcy5uelBhZGRpbmdMZWZ0KSkge1xyXG4gICAgICAgICAgICBwYWRkaW5nID0gdGhpcy5uelBhZGRpbmdMZWZ0O1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgbGV2ZWwgPSB0aGlzLm56U3VibWVudVNlcnZpY2UgPyB0aGlzLm56U3VibWVudVNlcnZpY2UubGV2ZWwgKyAxIDogMTtcclxuICAgICAgICAgICAgcGFkZGluZyA9IGxldmVsICogdGhpcy5uek1lbnVTZXJ2aWNlLmlubGluZUluZGVudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcGFkZGluZyA9IHRoaXMub3JpZ2luYWxQYWRkaW5nO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocGFkZGluZykge1xyXG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAncGFkZGluZy1sZWZ0JywgYCR7cGFkZGluZ31weGApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuZWwsICdwYWRkaW5nLWxlZnQnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5saXN0T2ZSb3V0ZXJMaW5rLmNoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB0aGlzLnVwZGF0ZVJvdXRlckFjdGl2ZSgpKTtcclxuICAgIHRoaXMubGlzdE9mUm91dGVyTGlua1dpdGhIcmVmLmNoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB0aGlzLnVwZGF0ZVJvdXRlckFjdGl2ZSgpKTtcclxuICAgIHRoaXMudXBkYXRlUm91dGVyQWN0aXZlKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5uelNlbGVjdGVkKSB7XHJcbiAgICAgIHRoaXMuc2V0U2VsZWN0ZWRTdGF0ZSh0aGlzLm56U2VsZWN0ZWQpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMubnpEaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=
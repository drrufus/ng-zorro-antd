import { __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Injector, Input, NgZone, Renderer2, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, PRIMARY_OUTLET, Router } from '@angular/router';
import { InputBoolean, PREFIX } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import { filter, startWith, takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
function NzBreadCrumbComponent_ng_container_1_nz_breadcrumb_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r2188 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nz-breadcrumb-item");
    i0.ɵɵelementStart(1, "a", 2);
    i0.ɵɵlistener("click", function NzBreadCrumbComponent_ng_container_1_nz_breadcrumb_item_1_Template_a_click_1_listener($event) { i0.ɵɵrestoreView(_r2188); const breadcrumb_r2186 = ctx.$implicit; const ctx_r2187 = i0.ɵɵnextContext(2); return ctx_r2187.navigate(breadcrumb_r2186.url, $event); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const breadcrumb_r2186 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("href", breadcrumb_r2186.url, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(breadcrumb_r2186.label);
} }
function NzBreadCrumbComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzBreadCrumbComponent_ng_container_1_nz_breadcrumb_item_1_Template, 3, 2, "nz-breadcrumb-item", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2184 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r2184.breadcrumbs);
} }
const _c0 = ["*"];
export class NzBreadCrumbComponent {
    constructor(injector, ngZone, cdr, elementRef, renderer) {
        this.injector = injector;
        this.ngZone = ngZone;
        this.cdr = cdr;
        this.nzAutoGenerate = false;
        this.nzSeparator = '/';
        this.nzRouteLabel = 'breadcrumb';
        this.breadcrumbs = [];
        this.destroy$ = new Subject();
        renderer.addClass(elementRef.nativeElement, 'ant-breadcrumb');
    }
    ngOnInit() {
        if (this.nzAutoGenerate) {
            this.registerRouterChange();
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    navigate(url, e) {
        e.preventDefault();
        this.ngZone
            .run(() => this.injector
            .get(Router)
            .navigateByUrl(url)
            .then())
            .then();
    }
    registerRouterChange() {
        try {
            const router = this.injector.get(Router);
            const activatedRoute = this.injector.get(ActivatedRoute);
            router.events
                .pipe(filter(e => e instanceof NavigationEnd), takeUntil(this.destroy$), startWith(true) // Trigger initial render.
            )
                .subscribe(() => {
                this.breadcrumbs = this.getBreadcrumbs(activatedRoute.root);
                this.cdr.markForCheck();
            });
        }
        catch (e) {
            throw new Error(`${PREFIX} You should import RouterModule if you want to use 'NzAutoGenerate'.`);
        }
    }
    getBreadcrumbs(route, url = '', breadcrumbs = []) {
        const children = route.children;
        // If there's no sub root, then stop the recurse and returns the generated breadcrumbs.
        if (children.length === 0) {
            return breadcrumbs;
        }
        for (const child of children) {
            if (child.outlet === PRIMARY_OUTLET) {
                // Only parse components in primary router-outlet (in another word, router-outlet without a specific name).
                // Parse this layer and generate a breadcrumb item.
                const routeURL = child.snapshot.url.map(segment => segment.path).join('/');
                const nextUrl = url + `/${routeURL}`;
                const breadcrumbLabel = child.snapshot.data[this.nzRouteLabel];
                // If have data, go to generate a breadcrumb for it.
                if (routeURL && breadcrumbLabel) {
                    const breadcrumb = {
                        label: breadcrumbLabel,
                        params: child.snapshot.params,
                        url: nextUrl
                    };
                    breadcrumbs.push(breadcrumb);
                }
                return this.getBreadcrumbs(child, nextUrl, breadcrumbs);
            }
        }
        return undefined;
    }
}
/** @nocollapse */ NzBreadCrumbComponent.ɵfac = function NzBreadCrumbComponent_Factory(t) { return new (t || NzBreadCrumbComponent)(i0.ɵɵdirectiveInject(i0.Injector), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
/** @nocollapse */ NzBreadCrumbComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzBreadCrumbComponent, selectors: [["nz-breadcrumb"]], inputs: { nzAutoGenerate: "nzAutoGenerate", nzSeparator: "nzSeparator", nzRouteLabel: "nzRouteLabel" }, exportAs: ["nzBreadcrumb"], ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "click"]], template: function NzBreadCrumbComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
        i0.ɵɵtemplate(1, NzBreadCrumbComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.nzAutoGenerate);
    } }, styles: ["\n      nz-breadcrumb {\n        display: block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzBreadCrumbComponent.prototype, "nzAutoGenerate", void 0);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzBreadCrumbComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-breadcrumb',
                exportAs: 'nzBreadcrumb',
                preserveWhitespaces: false,
                templateUrl: './nz-breadcrumb.component.html',
                styles: [
                    `
      nz-breadcrumb {
        display: block;
      }
    `
                ]
            }]
    }], function () { return [{ type: i0.Injector }, { type: i0.NgZone }, { type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { nzAutoGenerate: [{
            type: Input
        }], nzSeparator: [{
            type: Input
        }], nzRouteLabel: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2JyZWFkY3J1bWIvIiwic291cmNlcyI6WyJuei1icmVhZGNydW1iLmNvbXBvbmVudC50cyIsIm56LWJyZWFkY3J1bWIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsUUFBUSxFQUNSLEtBQUssRUFDTCxNQUFNLEVBR04sU0FBUyxFQUVULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBVSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFaEcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0lDeEI1RCwwQ0FDRTtJQUFBLDRCQUEyRTtJQUEzQyxvU0FBMEM7SUFBQyxZQUV6RTtJQUFBLGlCQUFJO0lBQ1IsaUJBQXFCOzs7SUFIaEIsZUFBNEI7SUFBNUIsOERBQTRCO0lBQTRDLGVBRXpFO0lBRnlFLDRDQUV6RTs7O0lBSk4sNkJBQ0U7SUFBQSxtSEFDRTtJQUlKLDBCQUFlOzs7SUFMTyxlQUFzQztJQUF0QywrQ0FBc0M7OztBRCtDNUQsTUFBTSxPQUFPLHFCQUFxQjtJQVNoQyxZQUNVLFFBQWtCLEVBQ2xCLE1BQWMsRUFDZCxHQUFzQixFQUM5QixVQUFzQixFQUN0QixRQUFtQjtRQUpYLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFFB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USxJQUFJLGVBQWUsRUFBRTtvQkFDL0IsTUFBTSxVQUFVLEdBQXFCO3dCQUNuQyxLQUFLLEVBQUUsZUFBZTt3QkFDdEIsTUFBTSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTTt3QkFDN0IsR0FBRyxFQUFFLE9BQU87cUJBQ2IsQ0FBQztvQkFDRixXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2lCQUM5QjtnQkFDRCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQzthQUN6RDtTQUNGO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7MEZBeEZVLHFCQUFxQjswREFBckIscUJBQXFCOztRQ2pEbEMsa0JBQVk7UUFDWix3RkFDRTs7UUFEWSxlQUFzQjtRQUF0Qix5Q0FBc0I7O0FEaURUO0lBQWYsWUFBWSxFQUFFOzs2REFBd0I7a0RBRHJDLHFCQUFxQjtjQWZqQyxTQUFTO2VBQUM7Z0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxRQUFRLEVBQUUsZUFBZTtnQkFDekIsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLFdBQVcsRUFBRSxnQ0FBZ0M7Z0JBQzdDLE1BQU0sRUFBRTtvQkFDTjs7OztLQUlDO2lCQUNGO2FBQ0Y7O2tCQUVFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5qZWN0b3IsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBOYXZpZ2F0aW9uRW5kLCBQYXJhbXMsIFBSSU1BUllfT1VUTEVULCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBQUkVGSVggfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpbHRlciwgc3RhcnRXaXRoLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJyZWFkY3J1bWJPcHRpb24ge1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgcGFyYW1zOiBQYXJhbXM7XHJcbiAgdXJsOiBzdHJpbmc7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc2VsZWN0b3I6ICduei1icmVhZGNydW1iJyxcclxuICBleHBvcnRBczogJ256QnJlYWRjcnVtYicsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LWJyZWFkY3J1bWIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICBuei1icmVhZGNydW1iIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56QnJlYWRDcnVtYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpBdXRvR2VuZXJhdGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBuelNlcGFyYXRvcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gPSAnLyc7XHJcbiAgQElucHV0KCkgbnpSb3V0ZUxhYmVsOiBzdHJpbmcgPSAnYnJlYWRjcnVtYic7XHJcblxyXG4gIGJyZWFkY3J1bWJzOiBCcmVhZGNydW1iT3B0aW9uW10gfCB1bmRlZmluZWQgPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXHJcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjJcclxuICApIHtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1icmVhZGNydW1iJyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56QXV0b0dlbmVyYXRlKSB7XHJcbiAgICAgIHRoaXMucmVnaXN0ZXJSb3V0ZXJDaGFuZ2UoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBuYXZpZ2F0ZSh1cmw6IHN0cmluZywgZTogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHRoaXMubmdab25lXHJcbiAgICAgIC5ydW4oKCkgPT5cclxuICAgICAgICB0aGlzLmluamVjdG9yXHJcbiAgICAgICAgICAuZ2V0KFJvdXRlcilcclxuICAgICAgICAgIC5uYXZpZ2F0ZUJ5VXJsKHVybClcclxuICAgICAgICAgIC50aGVuKClcclxuICAgICAgKVxyXG4gICAgICAudGhlbigpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZWdpc3RlclJvdXRlckNoYW5nZSgpOiB2b2lkIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJvdXRlciA9IHRoaXMuaW5qZWN0b3IuZ2V0KFJvdXRlcik7XHJcbiAgICAgIGNvbnN0IGFjdGl2YXRlZFJvdXRlID0gdGhpcy5pbmplY3Rvci5nZXQoQWN0aXZhdGVkUm91dGUpO1xyXG4gICAgICByb3V0ZXIuZXZlbnRzXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICBmaWx0ZXIoZSA9PiBlIGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCksXHJcbiAgICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXHJcbiAgICAgICAgICBzdGFydFdpdGgodHJ1ZSkgLy8gVHJpZ2dlciBpbml0aWFsIHJlbmRlci5cclxuICAgICAgICApXHJcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmJyZWFkY3J1bWJzID0gdGhpcy5nZXRCcmVhZGNydW1icyhhY3RpdmF0ZWRSb3V0ZS5yb290KTtcclxuICAgICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7UFJFRklYfSBZb3Ugc2hvdWxkIGltcG9ydCBSb3V0ZXJNb2R1bGUgaWYgeW91IHdhbnQgdG8gdXNlICdOekF1dG9HZW5lcmF0ZScuYCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEJyZWFkY3J1bWJzKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgdXJsOiBzdHJpbmcgPSAnJywgYnJlYWRjcnVtYnM6IEJyZWFkY3J1bWJPcHRpb25bXSA9IFtdKTogQnJlYWRjcnVtYk9wdGlvbltdIHwgdW5kZWZpbmVkIHtcclxuICAgIGNvbnN0IGNoaWxkcmVuOiBBY3RpdmF0ZWRSb3V0ZVtdID0gcm91dGUuY2hpbGRyZW47XHJcbiAgICAvLyBJZiB0aGVyZSdzIG5vIHN1YiByb290LCB0aGVuIHN0b3AgdGhlIHJlY3Vyc2UgYW5kIHJldHVybnMgdGhlIGdlbmVyYXRlZCBicmVhZGNydW1icy5cclxuICAgIGlmIChjaGlsZHJlbi5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIGJyZWFkY3J1bWJzO1xyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xyXG4gICAgICBpZiAoY2hpbGQub3V0bGV0ID09PSBQUklNQVJZX09VVExFVCkge1xyXG4gICAgICAgIC8vIE9ubHkgcGFyc2UgY29tcG9uZW50cyBpbiBwcmltYXJ5IHJvdXRlci1vdXRsZXQgKGluIGFub3RoZXIgd29yZCwgcm91dGVyLW91dGxldCB3aXRob3V0IGEgc3BlY2lmaWMgbmFtZSkuXHJcbiAgICAgICAgLy8gUGFyc2UgdGhpcyBsYXllciBhbmQgZ2VuZXJhdGUgYSBicmVhZGNydW1iIGl0ZW0uXHJcbiAgICAgICAgY29uc3Qgcm91dGVVUkw6IHN0cmluZyA9IGNoaWxkLnNuYXBzaG90LnVybC5tYXAoc2VnbWVudCA9PiBzZWdtZW50LnBhdGgpLmpvaW4oJy8nKTtcclxuICAgICAgICBjb25zdCBuZXh0VXJsID0gdXJsICsgYC8ke3JvdXRlVVJMfWA7XHJcbiAgICAgICAgY29uc3QgYnJlYWRjcnVtYkxhYmVsID0gY2hpbGQuc25hcHNob3QuZGF0YVt0aGlzLm56Um91dGVMYWJlbF07XHJcbiAgICAgICAgLy8gSWYgaGF2ZSBkYXRhLCBnbyB0byBnZW5lcmF0ZSBhIGJyZWFkY3J1bWIgZm9yIGl0LlxyXG4gICAgICAgIGlmIChyb3V0ZVVSTCAmJiBicmVhZGNydW1iTGFiZWwpIHtcclxuICAgICAgICAgIGNvbnN0IGJyZWFkY3J1bWI6IEJyZWFkY3J1bWJPcHRpb24gPSB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBicmVhZGNydW1iTGFiZWwsXHJcbiAgICAgICAgICAgIHBhcmFtczogY2hpbGQuc25hcHNob3QucGFyYW1zLFxyXG4gICAgICAgICAgICB1cmw6IG5leHRVcmxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBicmVhZGNydW1icy5wdXNoKGJyZWFkY3J1bWIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRCcmVhZGNydW1icyhjaGlsZCwgbmV4dFVybCwgYnJlYWRjcnVtYnMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gIH1cclxufVxyXG4iLCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjxuZy1jb250YWluZXIgKm5nSWY9XCJuekF1dG9HZW5lcmF0ZVwiPlxyXG4gIDxuei1icmVhZGNydW1iLWl0ZW0gKm5nRm9yPVwibGV0IGJyZWFkY3J1bWIgb2YgYnJlYWRjcnVtYnNcIj5cclxuICAgIDxhIFthdHRyLmhyZWZdPVwiYnJlYWRjcnVtYi51cmxcIiAoY2xpY2spPVwibmF2aWdhdGUoYnJlYWRjcnVtYi51cmwsICRldmVudClcIj57e1xyXG4gICAgICBicmVhZGNydW1iLmxhYmVsXHJcbiAgICB9fTwvYT5cclxuICA8L256LWJyZWFkY3J1bWItaXRlbT5cclxuPC9uZy1jb250YWluZXI+XHJcbiJdfQ==
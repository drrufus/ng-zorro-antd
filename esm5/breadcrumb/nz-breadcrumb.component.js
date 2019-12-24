import { __decorate, __metadata, __values } from "tslib";
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
    var _r2199 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nz-breadcrumb-item");
    i0.ɵɵelementStart(1, "a", 2);
    i0.ɵɵlistener("click", function NzBreadCrumbComponent_ng_container_1_nz_breadcrumb_item_1_Template_a_click_1_listener($event) { i0.ɵɵrestoreView(_r2199); var breadcrumb_r2197 = ctx.$implicit; var ctx_r2198 = i0.ɵɵnextContext(2); return ctx_r2198.navigate(breadcrumb_r2197.url, $event); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var breadcrumb_r2197 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("href", breadcrumb_r2197.url, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(breadcrumb_r2197.label);
} }
function NzBreadCrumbComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzBreadCrumbComponent_ng_container_1_nz_breadcrumb_item_1_Template, 3, 2, "nz-breadcrumb-item", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r2195 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r2195.breadcrumbs);
} }
var _c0 = ["*"];
var NzBreadCrumbComponent = /** @class */ (function () {
    function NzBreadCrumbComponent(injector, ngZone, cdr, elementRef, renderer) {
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
    NzBreadCrumbComponent.prototype.ngOnInit = function () {
        if (this.nzAutoGenerate) {
            this.registerRouterChange();
        }
    };
    NzBreadCrumbComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzBreadCrumbComponent.prototype.navigate = function (url, e) {
        var _this = this;
        e.preventDefault();
        this.ngZone
            .run(function () {
            return _this.injector
                .get(Router)
                .navigateByUrl(url)
                .then();
        })
            .then();
    };
    NzBreadCrumbComponent.prototype.registerRouterChange = function () {
        var _this = this;
        try {
            var router = this.injector.get(Router);
            var activatedRoute_1 = this.injector.get(ActivatedRoute);
            router.events
                .pipe(filter(function (e) { return e instanceof NavigationEnd; }), takeUntil(this.destroy$), startWith(true) // Trigger initial render.
            )
                .subscribe(function () {
                _this.breadcrumbs = _this.getBreadcrumbs(activatedRoute_1.root);
                _this.cdr.markForCheck();
            });
        }
        catch (e) {
            throw new Error(PREFIX + " You should import RouterModule if you want to use 'NzAutoGenerate'.");
        }
    };
    NzBreadCrumbComponent.prototype.getBreadcrumbs = function (route, url, breadcrumbs) {
        var e_1, _a;
        if (url === void 0) { url = ''; }
        if (breadcrumbs === void 0) { breadcrumbs = []; }
        var children = route.children;
        // If there's no sub root, then stop the recurse and returns the generated breadcrumbs.
        if (children.length === 0) {
            return breadcrumbs;
        }
        try {
            for (var children_1 = __values(children), children_1_1 = children_1.next(); !children_1_1.done; children_1_1 = children_1.next()) {
                var child = children_1_1.value;
                if (child.outlet === PRIMARY_OUTLET) {
                    // Only parse components in primary router-outlet (in another word, router-outlet without a specific name).
                    // Parse this layer and generate a breadcrumb item.
                    var routeURL = child.snapshot.url.map(function (segment) { return segment.path; }).join('/');
                    var nextUrl = url + ("/" + routeURL);
                    var breadcrumbLabel = child.snapshot.data[this.nzRouteLabel];
                    // If have data, go to generate a breadcrumb for it.
                    if (routeURL && breadcrumbLabel) {
                        var breadcrumb = {
                            label: breadcrumbLabel,
                            params: child.snapshot.params,
                            url: nextUrl
                        };
                        breadcrumbs.push(breadcrumb);
                    }
                    return this.getBreadcrumbs(child, nextUrl, breadcrumbs);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (children_1_1 && !children_1_1.done && (_a = children_1.return)) _a.call(children_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return undefined;
    };
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
    return NzBreadCrumbComponent;
}());
export { NzBreadCrumbComponent };
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
                    "\n      nz-breadcrumb {\n        display: block;\n      }\n    "
                ]
            }]
    }], function () { return [{ type: i0.Injector }, { type: i0.NgZone }, { type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { nzAutoGenerate: [{
            type: Input
        }], nzSeparator: [{
            type: Input
        }], nzRouteLabel: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2JyZWFkY3J1bWIvIiwic291cmNlcyI6WyJuei1icmVhZGNydW1iLmNvbXBvbmVudC50cyIsIm56LWJyZWFkY3J1bWIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsUUFBUSxFQUNSLEtBQUssRUFDTCxNQUFNLEVBR04sU0FBUyxFQUVULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBVSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFaEcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0lDeEI1RCwwQ0FDRTtJQUFBLDRCQUEyRTtJQUEzQyxnU0FBMEM7SUFBQyxZQUV6RTtJQUFBLGlCQUFJO0lBQ1IsaUJBQXFCOzs7SUFIaEIsZUFBNEI7SUFBNUIsOERBQTRCO0lBQTRDLGVBRXpFO0lBRnlFLDRDQUV6RTs7O0lBSk4sNkJBQ0U7SUFBQSxtSEFDRTtJQUlKLDBCQUFlOzs7SUFMTyxlQUFzQztJQUF0QywrQ0FBc0M7OztBRGdDNUQ7SUF3QkUsK0JBQ1UsUUFBa0IsRUFDbEIsTUFBYyxFQUNkLEdBQXNCLEVBQzlCLFVBQXNCLEVBQ3RCLFFBQW1CO1FBSlgsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsUUFBRyxHQUFILEdBQUcsQ0FB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QWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbmplY3RvcixcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIE5hdmlnYXRpb25FbmQsIFBhcmFtcywgUFJJTUFSWV9PVVRMRVQsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIFBSRUZJWCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlsdGVyLCBzdGFydFdpdGgsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQnJlYWRjcnVtYk9wdGlvbiB7XHJcbiAgbGFiZWw6IHN0cmluZztcclxuICBwYXJhbXM6IFBhcmFtcztcclxuICB1cmw6IHN0cmluZztcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzZWxlY3RvcjogJ256LWJyZWFkY3J1bWInLFxyXG4gIGV4cG9ydEFzOiAnbnpCcmVhZGNydW1iJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotYnJlYWRjcnVtYi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIG56LWJyZWFkY3J1bWIge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpCcmVhZENydW1iQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekF1dG9HZW5lcmF0ZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56U2VwYXJhdG9yOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiA9ICcvJztcclxuICBASW5wdXQoKSBuelJvdXRlTGFiZWw6IHN0cmluZyA9ICdicmVhZGNydW1iJztcclxuXHJcbiAgYnJlYWRjcnVtYnM6IEJyZWFkY3J1bWJPcHRpb25bXSB8IHVuZGVmaW5lZCA9IFtdO1xyXG5cclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcclxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMlxyXG4gICkge1xyXG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWJyZWFkY3J1bWInKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpBdXRvR2VuZXJhdGUpIHtcclxuICAgICAgdGhpcy5yZWdpc3RlclJvdXRlckNoYW5nZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIG5hdmlnYXRlKHVybDogc3RyaW5nLCBlOiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdGhpcy5uZ1pvbmVcclxuICAgICAgLnJ1bigoKSA9PlxyXG4gICAgICAgIHRoaXMuaW5qZWN0b3JcclxuICAgICAgICAgIC5nZXQoUm91dGVyKVxyXG4gICAgICAgICAgLm5hdmlnYXRlQnlVcmwodXJsKVxyXG4gICAgICAgICAgLnRoZW4oKVxyXG4gICAgICApXHJcbiAgICAgIC50aGVuKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlZ2lzdGVyUm91dGVyQ2hhbmdlKCk6IHZvaWQge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qgcm91dGVyID0gdGhpcy5pbmplY3Rvci5nZXQoUm91dGVyKTtcclxuICAgICAgY29uc3QgYWN0aXZhdGVkUm91dGUgPSB0aGlzLmluamVjdG9yLmdldChBY3RpdmF0ZWRSb3V0ZSk7XHJcbiAgICAgIHJvdXRlci5ldmVudHNcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgIGZpbHRlcihlID0+IGUgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSxcclxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcclxuICAgICAgICAgIHN0YXJ0V2l0aCh0cnVlKSAvLyBUcmlnZ2VyIGluaXRpYWwgcmVuZGVyLlxyXG4gICAgICAgIClcclxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuYnJlYWRjcnVtYnMgPSB0aGlzLmdldEJyZWFkY3J1bWJzKGFjdGl2YXRlZFJvdXRlLnJvb3QpO1xyXG4gICAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJHtQUkVGSVh9IFlvdSBzaG91bGQgaW1wb3J0IFJvdXRlck1vZHVsZSBpZiB5b3Ugd2FudCB0byB1c2UgJ056QXV0b0dlbmVyYXRlJy5gKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0QnJlYWRjcnVtYnMocm91dGU6IEFjdGl2YXRlZFJvdXRlLCB1cmw6IHN0cmluZyA9ICcnLCBicmVhZGNydW1iczogQnJlYWRjcnVtYk9wdGlvbltdID0gW10pOiBCcmVhZGNydW1iT3B0aW9uW10gfCB1bmRlZmluZWQge1xyXG4gICAgY29uc3QgY2hpbGRyZW46IEFjdGl2YXRlZFJvdXRlW10gPSByb3V0ZS5jaGlsZHJlbjtcclxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gc3ViIHJvb3QsIHRoZW4gc3RvcCB0aGUgcmVjdXJzZSBhbmQgcmV0dXJucyB0aGUgZ2VuZXJhdGVkIGJyZWFkY3J1bWJzLlxyXG4gICAgaWYgKGNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gYnJlYWRjcnVtYnM7XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XHJcbiAgICAgIGlmIChjaGlsZC5vdXRsZXQgPT09IFBSSU1BUllfT1VUTEVUKSB7XHJcbiAgICAgICAgLy8gT25seSBwYXJzZSBjb21wb25lbnRzIGluIHByaW1hcnkgcm91dGVyLW91dGxldCAoaW4gYW5vdGhlciB3b3JkLCByb3V0ZXItb3V0bGV0IHdpdGhvdXQgYSBzcGVjaWZpYyBuYW1lKS5cclxuICAgICAgICAvLyBQYXJzZSB0aGlzIGxheWVyIGFuZCBnZW5lcmF0ZSBhIGJyZWFkY3J1bWIgaXRlbS5cclxuICAgICAgICBjb25zdCByb3V0ZVVSTDogc3RyaW5nID0gY2hpbGQuc25hcHNob3QudXJsLm1hcChzZWdtZW50ID0+IHNlZ21lbnQucGF0aCkuam9pbignLycpO1xyXG4gICAgICAgIGNvbnN0IG5leHRVcmwgPSB1cmwgKyBgLyR7cm91dGVVUkx9YDtcclxuICAgICAgICBjb25zdCBicmVhZGNydW1iTGFiZWwgPSBjaGlsZC5zbmFwc2hvdC5kYXRhW3RoaXMubnpSb3V0ZUxhYmVsXTtcclxuICAgICAgICAvLyBJZiBoYXZlIGRhdGEsIGdvIHRvIGdlbmVyYXRlIGEgYnJlYWRjcnVtYiBmb3IgaXQuXHJcbiAgICAgICAgaWYgKHJvdXRlVVJMICYmIGJyZWFkY3J1bWJMYWJlbCkge1xyXG4gICAgICAgICAgY29uc3QgYnJlYWRjcnVtYjogQnJlYWRjcnVtYk9wdGlvbiA9IHtcclxuICAgICAgICAgICAgbGFiZWw6IGJyZWFkY3J1bWJMYWJlbCxcclxuICAgICAgICAgICAgcGFyYW1zOiBjaGlsZC5zbmFwc2hvdC5wYXJhbXMsXHJcbiAgICAgICAgICAgIHVybDogbmV4dFVybFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIGJyZWFkY3J1bWJzLnB1c2goYnJlYWRjcnVtYik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEJyZWFkY3J1bWJzKGNoaWxkLCBuZXh0VXJsLCBicmVhZGNydW1icyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfVxyXG59XHJcbiIsIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPG5nLWNvbnRhaW5lciAqbmdJZj1cIm56QXV0b0dlbmVyYXRlXCI+XHJcbiAgPG56LWJyZWFkY3J1bWItaXRlbSAqbmdGb3I9XCJsZXQgYnJlYWRjcnVtYiBvZiBicmVhZGNydW1ic1wiPlxyXG4gICAgPGEgW2F0dHIuaHJlZl09XCJicmVhZGNydW1iLnVybFwiIChjbGljayk9XCJuYXZpZ2F0ZShicmVhZGNydW1iLnVybCwgJGV2ZW50KVwiPnt7XHJcbiAgICAgIGJyZWFkY3J1bWIubGFiZWxcclxuICAgIH19PC9hPlxyXG4gIDwvbnotYnJlYWRjcnVtYi1pdGVtPlxyXG48L25nLWNvbnRhaW5lcj5cclxuIl19
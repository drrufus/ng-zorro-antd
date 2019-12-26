/**
 * @fileoverview added by tsickle
 * Generated from: nz-breadcrumb.component.ts
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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Injector, Input, NgZone, Renderer2, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, PRIMARY_OUTLET, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, startWith, takeUntil } from 'rxjs/operators';
import { InputBoolean, PREFIX } from 'ng-zorro-antd/core';
/**
 * @record
 */
export function BreadcrumbOption() { }
if (false) {
    /** @type {?} */
    BreadcrumbOption.prototype.label;
    /** @type {?} */
    BreadcrumbOption.prototype.params;
    /** @type {?} */
    BreadcrumbOption.prototype.url;
}
export class NzBreadCrumbComponent {
    /**
     * @param {?} injector
     * @param {?} ngZone
     * @param {?} cdr
     * @param {?} elementRef
     * @param {?} renderer
     */
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
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.nzAutoGenerate) {
            this.registerRouterChange();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @param {?} url
     * @param {?} e
     * @return {?}
     */
    navigate(url, e) {
        e.preventDefault();
        this.ngZone
            .run((/**
         * @return {?}
         */
        () => this.injector
            .get(Router)
            .navigateByUrl(url)
            .then()))
            .then();
    }
    /**
     * @private
     * @return {?}
     */
    registerRouterChange() {
        try {
            /** @type {?} */
            const router = this.injector.get(Router);
            /** @type {?} */
            const activatedRoute = this.injector.get(ActivatedRoute);
            router.events
                .pipe(filter((/**
             * @param {?} e
             * @return {?}
             */
            e => e instanceof NavigationEnd)), takeUntil(this.destroy$), startWith(true) // Trigger initial render.
            )
                .subscribe((/**
             * @return {?}
             */
            () => {
                this.breadcrumbs = this.getBreadcrumbs(activatedRoute.root);
                this.cdr.markForCheck();
            }));
        }
        catch (e) {
            throw new Error(`${PREFIX} You should import RouterModule if you want to use 'NzAutoGenerate'.`);
        }
    }
    /**
     * @private
     * @param {?} route
     * @param {?=} url
     * @param {?=} breadcrumbs
     * @return {?}
     */
    getBreadcrumbs(route, url = '', breadcrumbs = []) {
        /** @type {?} */
        const children = route.children;
        // If there's no sub root, then stop the recurse and returns the generated breadcrumbs.
        if (children.length === 0) {
            return breadcrumbs;
        }
        for (const child of children) {
            if (child.outlet === PRIMARY_OUTLET) {
                // Only parse components in primary router-outlet (in another word, router-outlet without a specific name).
                // Parse this layer and generate a breadcrumb item.
                /** @type {?} */
                const routeURL = child.snapshot.url.map((/**
                 * @param {?} segment
                 * @return {?}
                 */
                segment => segment.path)).join('/');
                /** @type {?} */
                const nextUrl = url + `/${routeURL}`;
                /** @type {?} */
                const breadcrumbLabel = child.snapshot.data[this.nzRouteLabel];
                // If have data, go to generate a breadcrumb for it.
                if (routeURL && breadcrumbLabel) {
                    /** @type {?} */
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
    }
}
NzBreadCrumbComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-breadcrumb',
                exportAs: 'nzBreadcrumb',
                preserveWhitespaces: false,
                template: "<ng-content></ng-content>\r\n<ng-container *ngIf=\"nzAutoGenerate\">\r\n  <nz-breadcrumb-item *ngFor=\"let breadcrumb of breadcrumbs\">\r\n    <a [attr.href]=\"breadcrumb.url\" (click)=\"navigate(breadcrumb.url, $event)\">{{ breadcrumb.label }}</a>\r\n  </nz-breadcrumb-item>\r\n</ng-container>",
                styles: [`
      nz-breadcrumb {
        display: block;
      }
    `]
            }] }
];
/** @nocollapse */
NzBreadCrumbComponent.ctorParameters = () => [
    { type: Injector },
    { type: NgZone },
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: Renderer2 }
];
NzBreadCrumbComponent.propDecorators = {
    nzAutoGenerate: [{ type: Input }],
    nzSeparator: [{ type: Input }],
    nzRouteLabel: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzBreadCrumbComponent.prototype, "nzAutoGenerate", void 0);
if (false) {
    /** @type {?} */
    NzBreadCrumbComponent.prototype.nzAutoGenerate;
    /** @type {?} */
    NzBreadCrumbComponent.prototype.nzSeparator;
    /** @type {?} */
    NzBreadCrumbComponent.prototype.nzRouteLabel;
    /** @type {?} */
    NzBreadCrumbComponent.prototype.breadcrumbs;
    /**
     * @type {?}
     * @private
     */
    NzBreadCrumbComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzBreadCrumbComponent.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    NzBreadCrumbComponent.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    NzBreadCrumbComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2JyZWFkY3J1bWIvIiwic291cmNlcyI6WyJuei1icmVhZGNydW1iLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixRQUFRLEVBQ1IsS0FBSyxFQUNMLE1BQU0sRUFHTixTQUFTLEVBRVQsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFVLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7QUFFMUQsc0NBSUM7OztJQUhDLGlDQUFjOztJQUNkLGtDQUFlOztJQUNmLCtCQUFZOztBQWtCZCxNQUFNLE9BQU8scUJBQXFCOzs7Ozs7OztJQVNoQyxZQUNVLFFBQWtCLEVBQ2xCLE1BQWMsRUFDZCxHQUFzQixFQUM5QixVQUFzQixFQUN0QixRQUFtQjtRQUpYLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBWFAsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkMsZ0JBQVcsR0FBK0IsR0FBRyxDQUFDO1FBQzlDLGlCQUFZLEdBQVcsWUFBWSxDQUFDO1FBRTdDLGdCQUFXLEdBQW1DLEVBQUUsQ0FBQztRQUV6QyxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztR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S0FBSyxFQUFFLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQzthQUN6RDtTQUNGO0lBQ0gsQ0FBQzs7O1lBMUdGLFNBQVMsU0FBQztnQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUUsY0FBYztnQkFDeEIsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsa1RBQTZDO3lCQUUzQzs7OztLQUlDO2FBRUo7Ozs7WUFuQ0MsUUFBUTtZQUVSLE1BQU07WUFMTixpQkFBaUI7WUFFakIsVUFBVTtZQU1WLFNBQVM7Ozs2QkFnQ1IsS0FBSzswQkFDTCxLQUFLOzJCQUNMLEtBQUs7O0FBRm1CO0lBQWYsWUFBWSxFQUFFOzs2REFBd0I7OztJQUFoRCwrQ0FBZ0Q7O0lBQ2hELDRDQUF1RDs7SUFDdkQsNkNBQTZDOztJQUU3Qyw0Q0FBaUQ7Ozs7O0lBRWpELHlDQUF1Qzs7Ozs7SUFHckMseUNBQTBCOzs7OztJQUMxQix1Q0FBc0I7Ozs7O0lBQ3RCLG9DQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbmplY3RvcixcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIE5hdmlnYXRpb25FbmQsIFBhcmFtcywgUFJJTUFSWV9PVVRMRVQsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlsdGVyLCBzdGFydFdpdGgsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgUFJFRklYIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQnJlYWRjcnVtYk9wdGlvbiB7XHJcbiAgbGFiZWw6IHN0cmluZztcclxuICBwYXJhbXM6IFBhcmFtcztcclxuICB1cmw6IHN0cmluZztcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzZWxlY3RvcjogJ256LWJyZWFkY3J1bWInLFxyXG4gIGV4cG9ydEFzOiAnbnpCcmVhZGNydW1iJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotYnJlYWRjcnVtYi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIG56LWJyZWFkY3J1bWIge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpCcmVhZENydW1iQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekF1dG9HZW5lcmF0ZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56U2VwYXJhdG9yOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiA9ICcvJztcclxuICBASW5wdXQoKSBuelJvdXRlTGFiZWw6IHN0cmluZyA9ICdicmVhZGNydW1iJztcclxuXHJcbiAgYnJlYWRjcnVtYnM6IEJyZWFkY3J1bWJPcHRpb25bXSB8IHVuZGVmaW5lZCA9IFtdO1xyXG5cclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcclxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMlxyXG4gICkge1xyXG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWJyZWFkY3J1bWInKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpBdXRvR2VuZXJhdGUpIHtcclxuICAgICAgdGhpcy5yZWdpc3RlclJvdXRlckNoYW5nZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIG5hdmlnYXRlKHVybDogc3RyaW5nLCBlOiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdGhpcy5uZ1pvbmVcclxuICAgICAgLnJ1bigoKSA9PlxyXG4gICAgICAgIHRoaXMuaW5qZWN0b3JcclxuICAgICAgICAgIC5nZXQoUm91dGVyKVxyXG4gICAgICAgICAgLm5hdmlnYXRlQnlVcmwodXJsKVxyXG4gICAgICAgICAgLnRoZW4oKVxyXG4gICAgICApXHJcbiAgICAgIC50aGVuKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlZ2lzdGVyUm91dGVyQ2hhbmdlKCk6IHZvaWQge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qgcm91dGVyID0gdGhpcy5pbmplY3Rvci5nZXQoUm91dGVyKTtcclxuICAgICAgY29uc3QgYWN0aXZhdGVkUm91dGUgPSB0aGlzLmluamVjdG9yLmdldChBY3RpdmF0ZWRSb3V0ZSk7XHJcbiAgICAgIHJvdXRlci5ldmVudHNcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgIGZpbHRlcihlID0+IGUgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSxcclxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcclxuICAgICAgICAgIHN0YXJ0V2l0aCh0cnVlKSAvLyBUcmlnZ2VyIGluaXRpYWwgcmVuZGVyLlxyXG4gICAgICAgIClcclxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuYnJlYWRjcnVtYnMgPSB0aGlzLmdldEJyZWFkY3J1bWJzKGFjdGl2YXRlZFJvdXRlLnJvb3QpO1xyXG4gICAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJHtQUkVGSVh9IFlvdSBzaG91bGQgaW1wb3J0IFJvdXRlck1vZHVsZSBpZiB5b3Ugd2FudCB0byB1c2UgJ056QXV0b0dlbmVyYXRlJy5gKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0QnJlYWRjcnVtYnMoXHJcbiAgICByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICB1cmw6IHN0cmluZyA9ICcnLFxyXG4gICAgYnJlYWRjcnVtYnM6IEJyZWFkY3J1bWJPcHRpb25bXSA9IFtdXHJcbiAgKTogQnJlYWRjcnVtYk9wdGlvbltdIHwgdW5kZWZpbmVkIHtcclxuICAgIGNvbnN0IGNoaWxkcmVuOiBBY3RpdmF0ZWRSb3V0ZVtdID0gcm91dGUuY2hpbGRyZW47XHJcbiAgICAvLyBJZiB0aGVyZSdzIG5vIHN1YiByb290LCB0aGVuIHN0b3AgdGhlIHJlY3Vyc2UgYW5kIHJldHVybnMgdGhlIGdlbmVyYXRlZCBicmVhZGNydW1icy5cclxuICAgIGlmIChjaGlsZHJlbi5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIGJyZWFkY3J1bWJzO1xyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xyXG4gICAgICBpZiAoY2hpbGQub3V0bGV0ID09PSBQUklNQVJZX09VVExFVCkge1xyXG4gICAgICAgIC8vIE9ubHkgcGFyc2UgY29tcG9uZW50cyBpbiBwcmltYXJ5IHJvdXRlci1vdXRsZXQgKGluIGFub3RoZXIgd29yZCwgcm91dGVyLW91dGxldCB3aXRob3V0IGEgc3BlY2lmaWMgbmFtZSkuXHJcbiAgICAgICAgLy8gUGFyc2UgdGhpcyBsYXllciBhbmQgZ2VuZXJhdGUgYSBicmVhZGNydW1iIGl0ZW0uXHJcbiAgICAgICAgY29uc3Qgcm91dGVVUkw6IHN0cmluZyA9IGNoaWxkLnNuYXBzaG90LnVybC5tYXAoc2VnbWVudCA9PiBzZWdtZW50LnBhdGgpLmpvaW4oJy8nKTtcclxuICAgICAgICBjb25zdCBuZXh0VXJsID0gdXJsICsgYC8ke3JvdXRlVVJMfWA7XHJcbiAgICAgICAgY29uc3QgYnJlYWRjcnVtYkxhYmVsID0gY2hpbGQuc25hcHNob3QuZGF0YVt0aGlzLm56Um91dGVMYWJlbF07XHJcbiAgICAgICAgLy8gSWYgaGF2ZSBkYXRhLCBnbyB0byBnZW5lcmF0ZSBhIGJyZWFkY3J1bWIgZm9yIGl0LlxyXG4gICAgICAgIGlmIChyb3V0ZVVSTCAmJiBicmVhZGNydW1iTGFiZWwpIHtcclxuICAgICAgICAgIGNvbnN0IGJyZWFkY3J1bWI6IEJyZWFkY3J1bWJPcHRpb24gPSB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBicmVhZGNydW1iTGFiZWwsXHJcbiAgICAgICAgICAgIHBhcmFtczogY2hpbGQuc25hcHNob3QucGFyYW1zLFxyXG4gICAgICAgICAgICB1cmw6IG5leHRVcmxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBicmVhZGNydW1icy5wdXNoKGJyZWFkY3J1bWIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRCcmVhZGNydW1icyhjaGlsZCwgbmV4dFVybCwgYnJlYWRjcnVtYnMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==
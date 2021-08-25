import { Component, ChangeDetectionStrategy, ViewEncapsulation, Injector, NgZone, ChangeDetectorRef, ElementRef, Renderer2, Input, NgModule } from '@angular/core';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { __values, __decorate, __metadata } from 'tslib';
import { Router, ActivatedRoute, NavigationEnd, PRIMARY_OUTLET } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil, startWith } from 'rxjs/operators';
import { PREFIX, InputBoolean, NzAddOnModule, NzOverlayModule } from 'ng-zorro-antd/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'ng-zorro-antd/core';
import * as ɵngcc3 from 'ng-zorro-antd/dropdown';
import * as ɵngcc4 from 'ng-zorro-antd/icon';

function NzBreadCrumbComponent_ng_container_1_nz_breadcrumb_item_1_Template(rf, ctx) { if (rf & 1) {
    var _r4 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "nz-breadcrumb-item");
    ɵngcc0.ɵɵelementStart(1, "a", 2);
    ɵngcc0.ɵɵlistener("click", function NzBreadCrumbComponent_ng_container_1_nz_breadcrumb_item_1_Template_a_click_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r4); var breadcrumb_r2 = ctx.$implicit; var ctx_r3 = ɵngcc0.ɵɵnextContext(2); return ctx_r3.navigate(breadcrumb_r2.url, $event); });
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var breadcrumb_r2 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵattribute("href", breadcrumb_r2.url, ɵngcc0.ɵɵsanitizeUrl);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(breadcrumb_r2.label);
} }
function NzBreadCrumbComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzBreadCrumbComponent_ng_container_1_nz_breadcrumb_item_1_Template, 3, 2, "nz-breadcrumb-item", 1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.breadcrumbs);
} }
var _c0 = ["*"];
function NzBreadCrumbItemComponent_ng_container_0_ng_template_2_Template(rf, ctx) { }
function NzBreadCrumbItemComponent_ng_container_0_i_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 7);
} }
function NzBreadCrumbItemComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "span", 4);
    ɵngcc0.ɵɵtemplate(2, NzBreadCrumbItemComponent_ng_container_0_ng_template_2_Template, 0, 0, "ng-template", 5);
    ɵngcc0.ɵɵtemplate(3, NzBreadCrumbItemComponent_ng_container_0_i_3_Template, 1, 0, "i", 6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    var _r1 = ɵngcc0.ɵɵreference(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzDropdownMenu", ctx_r0.nzOverlay);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r1);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !!ctx_r0.nzOverlay);
} }
function NzBreadCrumbItemComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 8);
    ɵngcc0.ɵɵprojection(1);
    ɵngcc0.ɵɵelementEnd();
} }
function NzBreadCrumbItemComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r3.nzBreadCrumbComponent.nzSeparator, " ");
} }
function BreadcrumbOption() { }
if (false) {
    /** @type {?} */
    BreadcrumbOption.prototype.label;
    /** @type {?} */
    BreadcrumbOption.prototype.params;
    /** @type {?} */
    BreadcrumbOption.prototype.url;
}
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
    /**
     * @return {?}
     */
    NzBreadCrumbComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.nzAutoGenerate) {
            this.registerRouterChange();
        }
    };
    /**
     * @return {?}
     */
    NzBreadCrumbComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * @param {?} url
     * @param {?} e
     * @return {?}
     */
    NzBreadCrumbComponent.prototype.navigate = /**
     * @param {?} url
     * @param {?} e
     * @return {?}
     */
    function (url, e) {
        var _this = this;
        e.preventDefault();
        this.ngZone
            .run((/**
         * @return {?}
         */
        function () {
            return _this.injector
                .get(Router)
                .navigateByUrl(url)
                .then();
        }))
            .then();
    };
    /**
     * @private
     * @return {?}
     */
    NzBreadCrumbComponent.prototype.registerRouterChange = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        try {
            /** @type {?} */
            var router = this.injector.get(Router);
            /** @type {?} */
            var activatedRoute_1 = this.injector.get(ActivatedRoute);
            router.events
                .pipe(filter((/**
             * @param {?} e
             * @return {?}
             */
            function (e) { return e instanceof NavigationEnd; })), takeUntil(this.destroy$), startWith(true) // Trigger initial render.
            )
                .subscribe((/**
             * @return {?}
             */
            function () {
                _this.breadcrumbs = _this.getBreadcrumbs(activatedRoute_1.root);
                _this.cdr.markForCheck();
            }));
        }
        catch (e) {
            throw new Error(PREFIX + " You should import RouterModule if you want to use 'NzAutoGenerate'.");
        }
    };
    /**
     * @private
     * @param {?} route
     * @param {?=} url
     * @param {?=} breadcrumbs
     * @return {?}
     */
    NzBreadCrumbComponent.prototype.getBreadcrumbs = /**
     * @private
     * @param {?} route
     * @param {?=} url
     * @param {?=} breadcrumbs
     * @return {?}
     */
    function (route, url, breadcrumbs) {
        var e_1, _a;
        if (url === void 0) { url = ''; }
        if (breadcrumbs === void 0) { breadcrumbs = []; }
        /** @type {?} */
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
                    /** @type {?} */
                    var routeURL = child.snapshot.url.map((/**
                     * @param {?} segment
                     * @return {?}
                     */
                    function (segment) { return segment.path; })).join('/');
                    /** @type {?} */
                    var nextUrl = url + ("/" + routeURL);
                    /** @type {?} */
                    var breadcrumbLabel = child.snapshot.data[this.nzRouteLabel];
                    // If have data, go to generate a breadcrumb for it.
                    if (routeURL && breadcrumbLabel) {
                        /** @type {?} */
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
    };
    /** @nocollapse */
    NzBreadCrumbComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: NgZone },
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    NzBreadCrumbComponent.propDecorators = {
        nzAutoGenerate: [{ type: Input }],
        nzSeparator: [{ type: Input }],
        nzRouteLabel: [{ type: Input }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzBreadCrumbComponent.prototype, "nzAutoGenerate", void 0);
NzBreadCrumbComponent.ɵfac = function NzBreadCrumbComponent_Factory(t) { return new (t || NzBreadCrumbComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Injector), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2)); };
NzBreadCrumbComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzBreadCrumbComponent, selectors: [["nz-breadcrumb"]], inputs: { nzAutoGenerate: "nzAutoGenerate", nzSeparator: "nzSeparator", nzRouteLabel: "nzRouteLabel" }, exportAs: ["nzBreadcrumb"], ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "click"]], template: function NzBreadCrumbComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
        ɵngcc0.ɵɵtemplate(1, NzBreadCrumbComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzAutoGenerate);
    } }, directives: function () { return [ɵngcc1.NgIf, ɵngcc1.NgForOf, NzBreadCrumbItemComponent]; }, styles: ["\n      nz-breadcrumb {\n        display: block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzBreadCrumbComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-breadcrumb',
                exportAs: 'nzBreadcrumb',
                preserveWhitespaces: false,
                template: "<ng-content></ng-content>\r\n<ng-container *ngIf=\"nzAutoGenerate\">\r\n  <nz-breadcrumb-item *ngFor=\"let breadcrumb of breadcrumbs\">\r\n    <a [attr.href]=\"breadcrumb.url\" (click)=\"navigate(breadcrumb.url, $event)\">{{ breadcrumb.label }}</a>\r\n  </nz-breadcrumb-item>\r\n</ng-container>",
                styles: ["\n      nz-breadcrumb {\n        display: block;\n      }\n    "]
            }]
    }], function () { return [{ type: ɵngcc0.Injector }, { type: ɵngcc0.NgZone }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }]; }, { nzAutoGenerate: [{
            type: Input
        }], nzSeparator: [{
            type: Input
        }], nzRouteLabel: [{
            type: Input
        }] }); })();
    return NzBreadCrumbComponent;
}());
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzBreadCrumbItemComponent = /** @class */ (function () {
    function NzBreadCrumbItemComponent(nzBreadCrumbComponent) {
        this.nzBreadCrumbComponent = nzBreadCrumbComponent;
    }
    /** @nocollapse */
    NzBreadCrumbItemComponent.ctorParameters = function () { return [
        { type: NzBreadCrumbComponent }
    ]; };
    NzBreadCrumbItemComponent.propDecorators = {
        nzOverlay: [{ type: Input }]
    };
NzBreadCrumbItemComponent.ɵfac = function NzBreadCrumbItemComponent_Factory(t) { return new (t || NzBreadCrumbItemComponent)(ɵngcc0.ɵɵdirectiveInject(NzBreadCrumbComponent)); };
NzBreadCrumbItemComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzBreadCrumbItemComponent, selectors: [["nz-breadcrumb-item"]], inputs: { nzOverlay: "nzOverlay" }, exportAs: ["nzBreadcrumbItem"], ngContentSelectors: _c0, decls: 5, vars: 3, consts: [[4, "ngIf", "ngIfElse"], ["noMenuTpl", ""], [1, "ant-breadcrumb-separator"], [4, "nzStringTemplateOutlet"], ["nz-dropdown", "", 1, "ant-breadcrumb-overlay-link", 3, "nzDropdownMenu"], [3, "ngTemplateOutlet"], ["nz-icon", "", "nzType", "down", 4, "ngIf"], ["nz-icon", "", "nzType", "down"], [1, "ant-breadcrumb-link"]], template: function NzBreadCrumbItemComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, NzBreadCrumbItemComponent_ng_container_0_Template, 4, 3, "ng-container", 0);
        ɵngcc0.ɵɵtemplate(1, NzBreadCrumbItemComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵelementStart(3, "span", 2);
        ɵngcc0.ɵɵtemplate(4, NzBreadCrumbItemComponent_ng_container_4_Template, 2, 1, "ng-container", 3);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        var _r1 = ɵngcc0.ɵɵreference(2);
        ɵngcc0.ɵɵproperty("ngIf", !!ctx.nzOverlay)("ngIfElse", _r1);
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx.nzBreadCrumbComponent.nzSeparator);
    } }, directives: [ɵngcc1.NgIf, ɵngcc2.NzStringTemplateOutletDirective, ɵngcc3.NzDropDownDirective, ɵngcc1.NgTemplateOutlet, ɵngcc4.NzIconDirective], styles: ["\n      nz-breadcrumb-item:last-child {\n        color: rgba(0, 0, 0, 0.65);\n      }\n\n      nz-breadcrumb-item:last-child .ant-breadcrumb-separator {\n        display: none;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzBreadCrumbItemComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-breadcrumb-item',
                exportAs: 'nzBreadcrumbItem',
                preserveWhitespaces: false,
                template: "<ng-container *ngIf=\"!!nzOverlay; else noMenuTpl\">\r\n  <span class=\"ant-breadcrumb-overlay-link\" nz-dropdown [nzDropdownMenu]=\"nzOverlay\">\r\n    <ng-template [ngTemplateOutlet]=\"noMenuTpl\"></ng-template>\r\n    <i *ngIf=\"!!nzOverlay\" nz-icon nzType=\"down\"></i>\r\n  </span>\r\n</ng-container>\r\n\r\n<ng-template #noMenuTpl>\r\n  <span class=\"ant-breadcrumb-link\">\r\n    <ng-content></ng-content>\r\n  </span>\r\n</ng-template>\r\n\r\n<span class=\"ant-breadcrumb-separator\">\r\n  <ng-container *nzStringTemplateOutlet=\"nzBreadCrumbComponent.nzSeparator\">\r\n    {{ nzBreadCrumbComponent.nzSeparator }}\r\n  </ng-container>\r\n</span>\r\n",
                styles: ["\n      nz-breadcrumb-item:last-child {\n        color: rgba(0, 0, 0, 0.65);\n      }\n\n      nz-breadcrumb-item:last-child .ant-breadcrumb-separator {\n        display: none;\n      }\n    "]
            }]
    }], function () { return [{ type: NzBreadCrumbComponent }]; }, { nzOverlay: [{
            type: Input
        }] }); })();
    return NzBreadCrumbItemComponent;
}());
if (false) {
    /**
     * Dropdown content of a breadcrumb item.
     * @type {?}
     */
    NzBreadCrumbItemComponent.prototype.nzOverlay;
    /** @type {?} */
    NzBreadCrumbItemComponent.prototype.nzBreadCrumbComponent;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzBreadCrumbModule = /** @class */ (function () {
    function NzBreadCrumbModule() {
    }
NzBreadCrumbModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzBreadCrumbModule });
NzBreadCrumbModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzBreadCrumbModule_Factory(t) { return new (t || NzBreadCrumbModule)(); }, imports: [[CommonModule, NzAddOnModule, OverlayModule, NzOverlayModule, NzDropDownModule, NzIconModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzBreadCrumbModule, { declarations: function () { return [NzBreadCrumbComponent,
        NzBreadCrumbItemComponent]; }, imports: function () { return [CommonModule, NzAddOnModule, OverlayModule, NzOverlayModule, NzDropDownModule, NzIconModule]; }, exports: function () { return [NzBreadCrumbComponent,
        NzBreadCrumbItemComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzBreadCrumbModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NzAddOnModule, OverlayModule, NzOverlayModule, NzDropDownModule, NzIconModule],
                declarations: [NzBreadCrumbComponent, NzBreadCrumbItemComponent],
                exports: [NzBreadCrumbComponent, NzBreadCrumbItemComponent]
            }]
    }], function () { return []; }, null); })();
    return NzBreadCrumbModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzBreadCrumbComponent, NzBreadCrumbItemComponent, NzBreadCrumbModule };

//# sourceMappingURL=ng-zorro-antd-breadcrumb.js.map
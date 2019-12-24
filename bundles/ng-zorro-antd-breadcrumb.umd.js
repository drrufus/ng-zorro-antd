(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ng-zorro-antd/dropdown'), require('@angular/router'), require('ng-zorro-antd/core'), require('rxjs'), require('rxjs/operators'), require('@angular/common'), require('ng-zorro-antd/icon'), require('@angular/cdk/overlay'), require('@angular/cdk/bidi'), require('@angular/cdk/scrolling'), require('ng-zorro-antd/menu')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/breadcrumb', ['exports', '@angular/core', 'ng-zorro-antd/dropdown', '@angular/router', 'ng-zorro-antd/core', 'rxjs', 'rxjs/operators', '@angular/common', 'ng-zorro-antd/icon', '@angular/cdk/overlay', '@angular/cdk/bidi', '@angular/cdk/scrolling', 'ng-zorro-antd/menu'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].breadcrumb = {}), global.ng.core, global['ng-zorro-antd'].dropdown, global.ng.router, global['ng-zorro-antd'].core, global.rxjs, global.rxjs.operators, global.ng.common, global['ng-zorro-antd'].icon, global.ng.cdk.overlay, global.ng.cdk.bidi, global.ng.cdk.scrolling, global.menu));
}(this, (function (exports, core, dropdown, router, core$1, rxjs, operators, common, icon, overlay, bidi, scrolling, menu) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function NzBreadCrumbComponent_ng_container_1_nz_breadcrumb_item_1_Template(rf, ctx) { if (rf & 1) {
        var _r2199 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "nz-breadcrumb-item");
        core.ɵɵelementStart(1, "a", 2);
        core.ɵɵlistener("click", function NzBreadCrumbComponent_ng_container_1_nz_breadcrumb_item_1_Template_a_click_1_listener($event) { core.ɵɵrestoreView(_r2199); var breadcrumb_r2197 = ctx.$implicit; var ctx_r2198 = core.ɵɵnextContext(2); return ctx_r2198.navigate(breadcrumb_r2197.url, $event); });
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var breadcrumb_r2197 = ctx.$implicit;
        core.ɵɵadvance(1);
        core.ɵɵattribute("href", breadcrumb_r2197.url, core.ɵɵsanitizeUrl);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(breadcrumb_r2197.label);
    } }
    function NzBreadCrumbComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, NzBreadCrumbComponent_ng_container_1_nz_breadcrumb_item_1_Template, 3, 2, "nz-breadcrumb-item", 1);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r2195 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", ctx_r2195.breadcrumbs);
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
            this.destroy$ = new rxjs.Subject();
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
                    .get(router.Router)
                    .navigateByUrl(url)
                    .then();
            })
                .then();
        };
        NzBreadCrumbComponent.prototype.registerRouterChange = function () {
            var _this = this;
            try {
                var router$1 = this.injector.get(router.Router);
                var activatedRoute_1 = this.injector.get(router.ActivatedRoute);
                router$1.events
                    .pipe(operators.filter(function (e) { return e instanceof router.NavigationEnd; }), operators.takeUntil(this.destroy$), operators.startWith(true) // Trigger initial render.
                )
                    .subscribe(function () {
                    _this.breadcrumbs = _this.getBreadcrumbs(activatedRoute_1.root);
                    _this.cdr.markForCheck();
                });
            }
            catch (e) {
                throw new Error(core$1.PREFIX + " You should import RouterModule if you want to use 'NzAutoGenerate'.");
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
                    if (child.outlet === router.PRIMARY_OUTLET) {
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
        /** @nocollapse */ NzBreadCrumbComponent.ɵfac = function NzBreadCrumbComponent_Factory(t) { return new (t || NzBreadCrumbComponent)(core.ɵɵdirectiveInject(core.Injector), core.ɵɵdirectiveInject(core.NgZone), core.ɵɵdirectiveInject(core.ChangeDetectorRef), core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(core.Renderer2)); };
        /** @nocollapse */ NzBreadCrumbComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzBreadCrumbComponent, selectors: [["nz-breadcrumb"]], inputs: { nzAutoGenerate: "nzAutoGenerate", nzSeparator: "nzSeparator", nzRouteLabel: "nzRouteLabel" }, exportAs: ["nzBreadcrumb"], ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "click"]], template: function NzBreadCrumbComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵprojection(0);
                core.ɵɵtemplate(1, NzBreadCrumbComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
            } if (rf & 2) {
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.nzAutoGenerate);
            } }, styles: ["\n      nz-breadcrumb {\n        display: block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzBreadCrumbComponent.prototype, "nzAutoGenerate", void 0);
        return NzBreadCrumbComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzBreadCrumbComponent, [{
            type: core.Component,
            args: [{
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    selector: 'nz-breadcrumb',
                    exportAs: 'nzBreadcrumb',
                    preserveWhitespaces: false,
                    templateUrl: './nz-breadcrumb.component.html',
                    styles: [
                        "\n      nz-breadcrumb {\n        display: block;\n      }\n    "
                    ]
                }]
        }], function () { return [{ type: core.Injector }, { type: core.NgZone }, { type: core.ChangeDetectorRef }, { type: core.ElementRef }, { type: core.Renderer2 }]; }, { nzAutoGenerate: [{
                type: core.Input
            }], nzSeparator: [{
                type: core.Input
            }], nzRouteLabel: [{
                type: core.Input
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    function NzBreadCrumbItemComponent_ng_container_0_ng_template_2_Template(rf, ctx) { }
    function NzBreadCrumbItemComponent_ng_container_0_i_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "i", 7);
    } }
    function NzBreadCrumbItemComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "span", 4);
        core.ɵɵtemplate(2, NzBreadCrumbItemComponent_ng_container_0_ng_template_2_Template, 0, 0, "ng-template", 5);
        core.ɵɵtemplate(3, NzBreadCrumbItemComponent_ng_container_0_i_3_Template, 1, 0, "i", 6);
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r2200 = core.ɵɵnextContext();
        var _r2201 = core.ɵɵreference(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("nzDropdownMenu", ctx_r2200.nzOverlay);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", _r2201);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !!ctx_r2200.nzOverlay);
    } }
    function NzBreadCrumbItemComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span", 8);
        core.ɵɵprojection(1);
        core.ɵɵelementEnd();
    } }
    function NzBreadCrumbItemComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtext(1);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r2203 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", ctx_r2203.nzBreadCrumbComponent.nzSeparator, " ");
    } }
    var _c0$1 = ["*"];
    var NzBreadCrumbItemComponent = /** @class */ (function () {
        function NzBreadCrumbItemComponent(nzBreadCrumbComponent) {
            this.nzBreadCrumbComponent = nzBreadCrumbComponent;
        }
        /** @nocollapse */ NzBreadCrumbItemComponent.ɵfac = function NzBreadCrumbItemComponent_Factory(t) { return new (t || NzBreadCrumbItemComponent)(core.ɵɵdirectiveInject(NzBreadCrumbComponent)); };
        /** @nocollapse */ NzBreadCrumbItemComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzBreadCrumbItemComponent, selectors: [["nz-breadcrumb-item"]], inputs: { nzOverlay: "nzOverlay" }, exportAs: ["nzBreadcrumbItem"], ngContentSelectors: _c0$1, decls: 5, vars: 3, consts: [[4, "ngIf", "ngIfElse"], ["noMenuTpl", ""], [1, "ant-breadcrumb-separator"], [4, "nzStringTemplateOutlet"], ["nz-dropdown", "", 1, "ant-breadcrumb-overlay-link", 3, "nzDropdownMenu"], [3, "ngTemplateOutlet"], ["nz-icon", "", "nzType", "down", 4, "ngIf"], ["nz-icon", "", "nzType", "down"], [1, "ant-breadcrumb-link"]], template: function NzBreadCrumbItemComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵtemplate(0, NzBreadCrumbItemComponent_ng_container_0_Template, 4, 3, "ng-container", 0);
                core.ɵɵtemplate(1, NzBreadCrumbItemComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, core.ɵɵtemplateRefExtractor);
                core.ɵɵelementStart(3, "span", 2);
                core.ɵɵtemplate(4, NzBreadCrumbItemComponent_ng_container_4_Template, 2, 1, "ng-container", 3);
                core.ɵɵelementEnd();
            } if (rf & 2) {
                var _r2201 = core.ɵɵreference(2);
                core.ɵɵproperty("ngIf", !!ctx.nzOverlay)("ngIfElse", _r2201);
                core.ɵɵadvance(4);
                core.ɵɵproperty("nzStringTemplateOutlet", ctx.nzBreadCrumbComponent.nzSeparator);
            } }, directives: [common.NgIf, core$1.NzStringTemplateOutletDirective, dropdown.NzDropDownDirective, common.NgTemplateOutlet, icon.NzIconDirective], styles: ["\n      nz-breadcrumb-item:last-child {\n        color: rgba(0, 0, 0, 0.65);\n      }\n\n      nz-breadcrumb-item:last-child .ant-breadcrumb-separator {\n        display: none;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
        return NzBreadCrumbItemComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzBreadCrumbItemComponent, [{
            type: core.Component,
            args: [{
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    selector: 'nz-breadcrumb-item',
                    exportAs: 'nzBreadcrumbItem',
                    preserveWhitespaces: false,
                    templateUrl: './nz-breadcrumb-item.component.html',
                    styles: [
                        "\n      nz-breadcrumb-item:last-child {\n        color: rgba(0, 0, 0, 0.65);\n      }\n\n      nz-breadcrumb-item:last-child .ant-breadcrumb-separator {\n        display: none;\n      }\n    "
                    ]
                }]
        }], function () { return [{ type: NzBreadCrumbComponent }]; }, { nzOverlay: [{
                type: core.Input
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzBreadCrumbModule = /** @class */ (function () {
        function NzBreadCrumbModule() {
        }
        /** @nocollapse */ NzBreadCrumbModule.ɵmod = core.ɵɵdefineNgModule({ type: NzBreadCrumbModule });
        /** @nocollapse */ NzBreadCrumbModule.ɵinj = core.ɵɵdefineInjector({ factory: function NzBreadCrumbModule_Factory(t) { return new (t || NzBreadCrumbModule)(); }, imports: [[common.CommonModule, core$1.NzAddOnModule, overlay.OverlayModule, core$1.NzOverlayModule, dropdown.NzDropDownModule, icon.NzIconModule]] });
        return NzBreadCrumbModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(NzBreadCrumbModule, { declarations: [NzBreadCrumbComponent, NzBreadCrumbItemComponent], imports: [common.CommonModule, core$1.NzAddOnModule, overlay.OverlayModule, core$1.NzOverlayModule, dropdown.NzDropDownModule, icon.NzIconModule], exports: [NzBreadCrumbComponent, NzBreadCrumbItemComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzBreadCrumbModule, [{
            type: core.NgModule,
            args: [{
                    imports: [common.CommonModule, core$1.NzAddOnModule, overlay.OverlayModule, core$1.NzOverlayModule, dropdown.NzDropDownModule, icon.NzIconModule],
                    declarations: [NzBreadCrumbComponent, NzBreadCrumbItemComponent],
                    exports: [NzBreadCrumbComponent, NzBreadCrumbItemComponent]
                }]
        }], null, null); })();
    core.ɵɵsetComponentScope(NzBreadCrumbComponent, [NzBreadCrumbComponent, NzBreadCrumbItemComponent, common.NgClass, common.NgComponentOutlet, common.NgForOf, common.NgIf, common.NgTemplateOutlet, common.NgStyle, common.NgSwitch, common.NgSwitchCase, common.NgSwitchDefault, common.NgPlural, common.NgPluralCase, core$1.NzStringTemplateOutletDirective, core$1.NzClassListAddDirective, overlay.CdkConnectedOverlay, overlay.CdkOverlayOrigin, bidi.Dir, scrolling.CdkFixedSizeVirtualScroll, scrolling.CdkScrollable, scrolling.CdkVirtualForOf, scrolling.CdkVirtualScrollViewport, core$1.NzConnectedOverlayDirective, menu.NzMenuDirective, menu.NzMenuItemDirective, menu.NzSubMenuComponent, menu.NzMenuDividerDirective, menu.NzMenuGroupComponent, dropdown.NzDropDownDirective, dropdown.NzDropDownADirective, dropdown.NzDropdownMenuComponent, icon.NzIconDirective], [common.AsyncPipe, common.UpperCasePipe, common.LowerCasePipe, common.JsonPipe, common.SlicePipe, common.DecimalPipe, common.PercentPipe, common.TitleCasePipe, common.CurrencyPipe, common.DatePipe, common.I18nPluralPipe, common.I18nSelectPipe, common.KeyValuePipe]);

    exports.NzBreadCrumbComponent = NzBreadCrumbComponent;
    exports.NzBreadCrumbItemComponent = NzBreadCrumbItemComponent;
    exports.NzBreadCrumbModule = NzBreadCrumbModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-breadcrumb.umd.js.map

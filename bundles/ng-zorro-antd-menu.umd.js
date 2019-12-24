(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('ng-zorro-antd/core'), require('@angular/router'), require('@angular/cdk/overlay'), require('@angular/cdk/platform'), require('@angular/common'), require('ng-zorro-antd/icon'), require('@angular/forms'), require('ng-zorro-antd/button')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/menu', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', 'ng-zorro-antd/core', '@angular/router', '@angular/cdk/overlay', '@angular/cdk/platform', '@angular/common', 'ng-zorro-antd/icon', '@angular/forms', 'ng-zorro-antd/button'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].menu = {}), global.ng.core, global.rxjs, global.rxjs.operators, global['ng-zorro-antd'].core, global.ng.router, global.ng.cdk.overlay, global.ng.cdk.platform, global.ng.common, global['ng-zorro-antd'].icon, global.ng.forms, global['ng-zorro-antd'].button));
}(this, (function (exports, core, rxjs, operators, core$1, router, overlay, platform, common, icon, forms, button) { 'use strict';

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

    var NzMenuService = /** @class */ (function (_super) {
        __extends(NzMenuService, _super);
        function NzMenuService() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.isInDropDown = false;
            return _this;
        }
        /** @nocollapse */ NzMenuService.ɵfac = function NzMenuService_Factory(t) { return ɵNzMenuService_BaseFactory(t || NzMenuService); };
        /** @nocollapse */ NzMenuService.ɵprov = core.ɵɵdefineInjectable({ token: NzMenuService, factory: NzMenuService.ɵfac });
        return NzMenuService;
    }(core$1.NzMenuBaseService));
    var ɵNzMenuService_BaseFactory = core.ɵɵgetInheritedFactory(NzMenuService);
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzMenuService, [{
            type: core.Injectable
        }], null, null); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzSubmenuService = /** @class */ (function () {
        function NzSubmenuService(nzHostSubmenuService, nzMenuService) {
            var _this = this;
            this.nzHostSubmenuService = nzHostSubmenuService;
            this.nzMenuService = nzMenuService;
            this.disabled = false;
            this.mode = 'vertical';
            this.mode$ = this.nzMenuService.mode$.pipe(operators.map(function (mode) {
                if (mode === 'inline') {
                    return 'inline';
                }
                else if (mode === 'vertical' || _this.nzHostSubmenuService) {
                    return 'vertical';
                }
                else {
                    return 'horizontal';
                }
            }), operators.tap(function (mode) { return (_this.mode = mode); }));
            this.level = 1;
            this.level$ = new rxjs.BehaviorSubject(1);
            this.subMenuOpen$ = new rxjs.BehaviorSubject(false);
            this.open$ = new rxjs.BehaviorSubject(false);
            this.mouseEnterLeave$ = new rxjs.Subject();
            this.menuOpen$ = rxjs.combineLatest(this.subMenuOpen$, this.mouseEnterLeave$).pipe(operators.map(function (value) { return value[0] || value[1]; }), operators.auditTime(150), operators.distinctUntilChanged(), operators.tap(function (data) {
                _this.setOpenState(data);
                if (_this.nzHostSubmenuService) {
                    _this.nzHostSubmenuService.subMenuOpen$.next(data);
                }
            }));
            if (this.nzHostSubmenuService) {
                this.setLevel(this.nzHostSubmenuService.level + 1);
            }
        }
        NzSubmenuService.prototype.setOpenState = function (value) {
            this.open$.next(value);
        };
        NzSubmenuService.prototype.onMenuItemClick = function () {
            this.setMouseEnterState(false);
        };
        NzSubmenuService.prototype.setLevel = function (value) {
            this.level$.next(value);
            this.level = value;
        };
        NzSubmenuService.prototype.setMouseEnterState = function (value) {
            if ((this.mode === 'horizontal' || this.mode === 'vertical' || this.nzMenuService.isInDropDown) && !this.disabled) {
                this.mouseEnterLeave$.next(value);
            }
        };
        /** @nocollapse */ NzSubmenuService.ɵfac = function NzSubmenuService_Factory(t) { return new (t || NzSubmenuService)(core.ɵɵinject(NzSubmenuService, 12), core.ɵɵinject(NzMenuService)); };
        /** @nocollapse */ NzSubmenuService.ɵprov = core.ɵɵdefineInjectable({ token: NzSubmenuService, factory: NzSubmenuService.ɵfac });
        return NzSubmenuService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzSubmenuService, [{
            type: core.Injectable
        }], function () { return [{ type: NzSubmenuService, decorators: [{
                    type: core.SkipSelf
                }, {
                    type: core.Optional
                }] }, { type: NzMenuService }]; }, null); })();

    var NzMenuItemDirective = /** @class */ (function () {
        function NzMenuItemDirective(nzUpdateHostClassService, nzMenuService, nzSubmenuService, renderer, elementRef, routerLink, routerLinkWithHref, router$1) {
            var _this = this;
            this.nzUpdateHostClassService = nzUpdateHostClassService;
            this.nzMenuService = nzMenuService;
            this.nzSubmenuService = nzSubmenuService;
            this.renderer = renderer;
            this.elementRef = elementRef;
            this.routerLink = routerLink;
            this.routerLinkWithHref = routerLinkWithHref;
            this.router = router$1;
            this.el = this.elementRef.nativeElement;
            this.destroy$ = new rxjs.Subject();
            this.originalPadding = null;
            this.selected$ = new rxjs.Subject();
            this.nzDisabled = false;
            this.nzSelected = false;
            this.nzMatchRouterExact = false;
            this.nzMatchRouter = false;
            if (router$1) {
                this.router.events.pipe(operators.takeUntil(this.destroy$), operators.filter(function (e) { return e instanceof router.NavigationEnd; })).subscribe(function () {
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
            rxjs.merge(this.nzMenuService.mode$, this.nzMenuService.inlineIndent$, this.nzSubmenuService ? this.nzSubmenuService.level$ : rxjs.EMPTY)
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function () {
                var padding = null;
                if (_this.nzMenuService.mode === 'inline') {
                    if (core$1.isNotNil(_this.nzPaddingLeft)) {
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
            this.listOfRouterLink.changes.pipe(operators.takeUntil(this.destroy$)).subscribe(function () { return _this.updateRouterActive(); });
            this.listOfRouterLinkWithHref.changes.pipe(operators.takeUntil(this.destroy$)).subscribe(function () { return _this.updateRouterActive(); });
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
        /** @nocollapse */ NzMenuItemDirective.ɵfac = function NzMenuItemDirective_Factory(t) { return new (t || NzMenuItemDirective)(core.ɵɵdirectiveInject(core$1.NzUpdateHostClassService), core.ɵɵdirectiveInject(core$1.NzMenuBaseService), core.ɵɵdirectiveInject(NzSubmenuService, 8), core.ɵɵdirectiveInject(core.Renderer2), core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(router.RouterLink, 8), core.ɵɵdirectiveInject(router.RouterLinkWithHref, 8), core.ɵɵdirectiveInject(router.Router, 8)); };
        /** @nocollapse */ NzMenuItemDirective.ɵdir = core.ɵɵdefineDirective({ type: NzMenuItemDirective, selectors: [["", "nz-menu-item", ""]], contentQueries: function NzMenuItemDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
                core.ɵɵcontentQuery(dirIndex, router.RouterLink, true);
                core.ɵɵcontentQuery(dirIndex, router.RouterLinkWithHref, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.listOfRouterLink = _t);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.listOfRouterLinkWithHref = _t);
            } }, hostBindings: function NzMenuItemDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
                core.ɵɵlistener("click", function NzMenuItemDirective_click_HostBindingHandler($event) { return ctx.clickMenuItem($event); });
            } }, inputs: { nzDisabled: "nzDisabled", nzSelected: "nzSelected", nzPaddingLeft: "nzPaddingLeft", nzMatchRouterExact: "nzMatchRouterExact", nzMatchRouter: "nzMatchRouter" }, exportAs: ["nzMenuItem"], features: [core.ɵɵProvidersFeature([core$1.NzUpdateHostClassService]), core.ɵɵNgOnChangesFeature()] });
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzMenuItemDirective.prototype, "nzDisabled", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzMenuItemDirective.prototype, "nzSelected", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzMenuItemDirective.prototype, "nzMatchRouterExact", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzMenuItemDirective.prototype, "nzMatchRouter", void 0);
        return NzMenuItemDirective;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzMenuItemDirective, [{
            type: core.Directive,
            args: [{
                    selector: '[nz-menu-item]',
                    exportAs: 'nzMenuItem',
                    providers: [core$1.NzUpdateHostClassService],
                    host: {
                        '(click)': 'clickMenuItem($event)'
                    }
                }]
        }], function () { return [{ type: core$1.NzUpdateHostClassService }, { type: core$1.NzMenuBaseService }, { type: NzSubmenuService, decorators: [{
                    type: core.Optional
                }] }, { type: core.Renderer2 }, { type: core.ElementRef }, { type: router.RouterLink, decorators: [{
                    type: core.Optional
                }] }, { type: router.RouterLinkWithHref, decorators: [{
                    type: core.Optional
                }] }, { type: router.Router, decorators: [{
                    type: core.Optional
                }] }]; }, { nzDisabled: [{
                type: core.Input
            }], nzSelected: [{
                type: core.Input
            }], nzPaddingLeft: [{
                type: core.Input
            }], nzMatchRouterExact: [{
                type: core.Input
            }], nzMatchRouter: [{
                type: core.Input
            }], listOfRouterLink: [{
                type: core.ContentChildren,
                args: [router.RouterLink, { descendants: true }]
            }], listOfRouterLinkWithHref: [{
                type: core.ContentChildren,
                args: [router.RouterLinkWithHref, { descendants: true }]
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    function NzMenuServiceFactory(higherOrderService, menuService) {
        return higherOrderService ? higherOrderService : menuService;
    }

    var _c0 = ["nz-submenu", ""];
    function NzSubMenuComponent_i_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "i", 10);
    } if (rf & 2) {
        var ctx_r1237 = core.ɵɵnextContext();
        core.ɵɵproperty("nzType", ctx_r1237.nzIcon);
    } }
    function NzSubMenuComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "span");
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r1238 = core.ɵɵnextContext();
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(ctx_r1238.nzTitle);
    } }
    function NzSubMenuComponent_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵprojection(0, 0, ["*ngIf", "!nzTitle"]);
    } }
    function NzSubMenuComponent_span_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span", 11);
        core.ɵɵelement(1, "i", 12);
        core.ɵɵelementEnd();
    } }
    function NzSubMenuComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "i", 13);
    } }
    function NzSubMenuComponent_ul_8_ng_template_1_Template(rf, ctx) { }
    function NzSubMenuComponent_ul_8_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "ul", 14);
        core.ɵɵtemplate(1, NzSubMenuComponent_ul_8_ng_template_1_Template, 0, 0, "ng-template", 15);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1243 = core.ɵɵnextContext();
        var _r1245 = core.ɵɵreference(11);
        core.ɵɵproperty("@collapseMotion", ctx_r1243.expandState)("@.disabled", ctx_r1243.noAnimation == null ? null : ctx_r1243.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r1243.noAnimation == null ? null : ctx_r1243.noAnimation.nzNoAnimation)("ngClass", ctx_r1243.nzMenuClassName);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", _r1245);
    } }
    function NzSubMenuComponent_ng_template_9_ng_template_2_Template(rf, ctx) { }
    function NzSubMenuComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
        var _r1250 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 16);
        core.ɵɵlistener("mouseleave", function NzSubMenuComponent_ng_template_9_Template_div_mouseleave_0_listener($event) { core.ɵɵrestoreView(_r1250); var ctx_r1249 = core.ɵɵnextContext(); return ctx_r1249.setMouseEnterState(false); })("mouseenter", function NzSubMenuComponent_ng_template_9_Template_div_mouseenter_0_listener($event) { core.ɵɵrestoreView(_r1250); var ctx_r1251 = core.ɵɵnextContext(); return ctx_r1251.setMouseEnterState(true); });
        core.ɵɵelementStart(1, "ul", 17);
        core.ɵɵtemplate(2, NzSubMenuComponent_ng_template_9_ng_template_2_Template, 0, 0, "ng-template", 15);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1244 = core.ɵɵnextContext();
        var _r1245 = core.ɵɵreference(11);
        core.ɵɵclassProp("ant-menu-light", ctx_r1244.nzMenuService.theme === "light")("ant-menu-dark", ctx_r1244.nzMenuService.theme === "dark")("ant-menu-submenu-placement-bottomLeft", ctx_r1244.nzSubmenuService.mode === "horizontal")("ant-menu-submenu-placement-rightTop", ctx_r1244.nzSubmenuService.mode === "vertical" && ctx_r1244.placement === "rightTop")("ant-menu-submenu-placement-leftTop", ctx_r1244.nzSubmenuService.mode === "vertical" && ctx_r1244.placement === "leftTop");
        core.ɵɵproperty("@slideMotion", ctx_r1244.expandState)("@zoomBigMotion", ctx_r1244.expandState)("@.disabled", ctx_r1244.noAnimation == null ? null : ctx_r1244.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r1244.noAnimation == null ? null : ctx_r1244.noAnimation.nzNoAnimation);
        core.ɵɵadvance(1);
        core.ɵɵclassProp("ant-dropdown-menu", ctx_r1244.nzMenuService.isInDropDown)("ant-menu", !ctx_r1244.nzMenuService.isInDropDown)("ant-dropdown-menu-vertical", ctx_r1244.nzMenuService.isInDropDown)("ant-menu-vertical", !ctx_r1244.nzMenuService.isInDropDown)("ant-dropdown-menu-sub", ctx_r1244.nzMenuService.isInDropDown)("ant-menu-sub", !ctx_r1244.nzMenuService.isInDropDown);
        core.ɵɵproperty("ngClass", ctx_r1244.nzMenuClassName);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", _r1245);
    } }
    function NzSubMenuComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵprojection(0, 1);
    } }
    var _c1 = [[["", "title", ""]], "*"];
    var _c2 = ["[title]", "*"];
    var NzSubMenuComponent = /** @class */ (function () {
        function NzSubMenuComponent(elementRef, nzMenuService, cdr, nzSubmenuService, nzUpdateHostClassService, platform, noAnimation) {
            this.elementRef = elementRef;
            this.nzMenuService = nzMenuService;
            this.cdr = cdr;
            this.nzSubmenuService = nzSubmenuService;
            this.nzUpdateHostClassService = nzUpdateHostClassService;
            this.platform = platform;
            this.noAnimation = noAnimation;
            this.nzOpen = false;
            this.nzDisabled = false;
            this.nzOpenChange = new core.EventEmitter();
            this.placement = 'rightTop';
            this.expandState = 'collapsed';
            this.overlayPositions = __spread(core$1.DEFAULT_SUBMENU_POSITIONS);
            this.destroy$ = new rxjs.Subject();
            this.isChildMenuSelected = false;
            this.isMouseHover = false;
        }
        NzSubMenuComponent.prototype.setOpenState = function (open) {
            this.nzSubmenuService.setOpenState(open);
        };
        NzSubMenuComponent.prototype.clickSubMenuTitle = function () {
            if (this.nzSubmenuService.mode === 'inline' && !this.nzMenuService.isInDropDown && !this.nzDisabled) {
                this.setOpenState(!this.nzOpen);
            }
        };
        NzSubMenuComponent.prototype.setMouseEnterState = function (value) {
            this.isMouseHover = value;
            this.setClassMap();
            this.nzSubmenuService.setMouseEnterState(value);
        };
        NzSubMenuComponent.prototype.setTriggerWidth = function () {
            if (this.nzSubmenuService.mode === 'horizontal' && this.platform.isBrowser) {
                this.triggerWidth = this.cdkOverlayOrigin.nativeElement.getBoundingClientRect().width;
            }
        };
        NzSubMenuComponent.prototype.onPositionChange = function (position) {
            this.placement = core$1.getPlacementName(position);
            this.cdr.markForCheck();
        };
        NzSubMenuComponent.prototype.setClassMap = function () {
            var _a;
            var prefixName = this.nzMenuService.isInDropDown ? 'ant-dropdown-menu-submenu' : 'ant-menu-submenu';
            this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, (_a = {},
                _a["" + prefixName] = true,
                _a[prefixName + "-disabled"] = this.nzDisabled,
                _a[prefixName + "-open"] = this.nzOpen,
                _a[prefixName + "-selected"] = this.isChildMenuSelected,
                _a[prefixName + "-" + this.nzSubmenuService.mode] = true,
                _a[prefixName + "-active"] = this.isMouseHover && !this.nzDisabled,
                _a));
        };
        NzSubMenuComponent.prototype.ngOnInit = function () {
            var _this = this;
            rxjs.combineLatest([this.nzSubmenuService.mode$, this.nzSubmenuService.open$])
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function (_a) {
                var _b = __read(_a, 2), mode = _b[0], open = _b[1];
                if (open && mode === 'inline') {
                    _this.expandState = 'expanded';
                }
                else if (open && mode === 'horizontal') {
                    _this.expandState = 'bottom';
                }
                else if (open && mode === 'vertical') {
                    _this.expandState = 'active';
                }
                else {
                    _this.isMouseHover = false;
                    _this.expandState = 'collapsed';
                }
                _this.overlayPositions = mode === 'horizontal' ? [core$1.POSITION_MAP.bottomLeft] : [core$1.POSITION_MAP.rightTop, core$1.POSITION_MAP.leftTop];
                if (open !== _this.nzOpen) {
                    _this.setTriggerWidth();
                    _this.nzOpen = open;
                    _this.nzOpenChange.emit(_this.nzOpen);
                }
                _this.setClassMap();
            });
            this.nzSubmenuService.menuOpen$.pipe(operators.takeUntil(this.destroy$)).subscribe(function (data) {
                _this.nzMenuService.menuOpen$.next(data);
            });
            rxjs.merge(this.nzMenuService.mode$, this.nzMenuService.inlineIndent$, this.nzSubmenuService.level$, this.nzSubmenuService.open$, this.nzSubmenuService.mode$)
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function () {
                _this.cdr.markForCheck();
            });
        };
        NzSubMenuComponent.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.setTriggerWidth();
            this.listOfNzMenuItemDirective.changes
                .pipe(operators.startWith(true), operators.flatMap(function () { return rxjs.merge.apply(void 0, __spread([_this.listOfNzMenuItemDirective.changes], _this.listOfNzMenuItemDirective.map(function (menu) { return menu.selected$; }))); }), operators.startWith(true), operators.map(function () { return _this.listOfNzMenuItemDirective.some(function (e) { return e.nzSelected; }); }), operators.takeUntil(this.destroy$))
                .subscribe(function (selected) {
                _this.isChildMenuSelected = selected;
                _this.setClassMap();
            });
        };
        NzSubMenuComponent.prototype.ngOnChanges = function (changes) {
            if (changes.nzOpen) {
                this.nzSubmenuService.setOpenState(this.nzOpen);
                this.setTriggerWidth();
            }
            if (changes.nzDisabled) {
                this.nzSubmenuService.disabled = this.nzDisabled;
                this.setClassMap();
            }
        };
        NzSubMenuComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        /** @nocollapse */ NzSubMenuComponent.ɵfac = function NzSubMenuComponent_Factory(t) { return new (t || NzSubMenuComponent)(core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(core$1.NzMenuBaseService), core.ɵɵdirectiveInject(core.ChangeDetectorRef), core.ɵɵdirectiveInject(NzSubmenuService), core.ɵɵdirectiveInject(core$1.NzUpdateHostClassService), core.ɵɵdirectiveInject(platform.Platform), core.ɵɵdirectiveInject(core$1.NzNoAnimationDirective, 9)); };
        /** @nocollapse */ NzSubMenuComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzSubMenuComponent, selectors: [["", "nz-submenu", ""]], contentQueries: function NzSubMenuComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
                core.ɵɵcontentQuery(dirIndex, NzSubMenuComponent, true);
                core.ɵɵcontentQuery(dirIndex, NzMenuItemDirective, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.listOfNzSubMenuComponent = _t);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.listOfNzMenuItemDirective = _t);
            } }, viewQuery: function NzSubMenuComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵstaticViewQuery(overlay.CdkConnectedOverlay, true);
                core.ɵɵstaticViewQuery(overlay.CdkOverlayOrigin, true, core.ElementRef);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.cdkConnectedOverlay = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.cdkOverlayOrigin = _t.first);
            } }, inputs: { nzMenuClassName: "nzMenuClassName", nzPaddingLeft: "nzPaddingLeft", nzTitle: "nzTitle", nzIcon: "nzIcon", nzOpen: "nzOpen", nzDisabled: "nzDisabled" }, outputs: { nzOpenChange: "nzOpenChange" }, exportAs: ["nzSubmenu"], features: [core.ɵɵProvidersFeature([NzSubmenuService, core$1.NzUpdateHostClassService]), core.ɵɵNgOnChangesFeature()], attrs: _c0, ngContentSelectors: _c2, decls: 12, vars: 13, consts: [["cdkOverlayOrigin", "", 3, "mouseenter", "mouseleave", "click"], ["origin", "cdkOverlayOrigin"], ["nz-icon", "", 3, "nzType", 4, "ngIf"], [4, "nzStringTemplateOutlet"], [4, "ngIf"], ["class", "ant-dropdown-menu-submenu-arrow", 4, "ngIf", "ngIfElse"], ["notDropdownTpl", ""], ["class", "ant-menu ant-menu-inline ant-menu-sub", 3, "nzNoAnimation", "ngClass", 4, "ngIf"], ["cdkConnectedOverlay", "", 3, "cdkConnectedOverlayPositions", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayWidth", "cdkConnectedOverlayOpen", "positionChange"], ["subMenuTemplate", ""], ["nz-icon", "", 3, "nzType"], [1, "ant-dropdown-menu-submenu-arrow"], ["nz-icon", "", "nzType", "right", 1, "anticon-right", "ant-dropdown-menu-submenu-arrow-icon"], [1, "ant-menu-submenu-arrow"], [1, "ant-menu", "ant-menu-inline", "ant-menu-sub", 3, "nzNoAnimation", "ngClass"], [3, "ngTemplateOutlet"], [1, "ant-menu-submenu", "ant-menu-submenu-popup", 3, "nzNoAnimation", "mouseleave", "mouseenter"], [3, "ngClass"]], template: function NzSubMenuComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef(_c1);
                core.ɵɵelementStart(0, "div", 0, 1);
                core.ɵɵlistener("mouseenter", function NzSubMenuComponent_Template_div_mouseenter_0_listener($event) { return ctx.setMouseEnterState(true); })("mouseleave", function NzSubMenuComponent_Template_div_mouseleave_0_listener($event) { return ctx.setMouseEnterState(false); })("click", function NzSubMenuComponent_Template_div_click_0_listener($event) { return ctx.clickSubMenuTitle(); });
                core.ɵɵtemplate(2, NzSubMenuComponent_i_2_Template, 1, 1, "i", 2);
                core.ɵɵtemplate(3, NzSubMenuComponent_ng_container_3_Template, 3, 1, "ng-container", 3);
                core.ɵɵtemplate(4, NzSubMenuComponent_4_Template, 1, 0, undefined, 4);
                core.ɵɵtemplate(5, NzSubMenuComponent_span_5_Template, 2, 0, "span", 5);
                core.ɵɵtemplate(6, NzSubMenuComponent_ng_template_6_Template, 1, 0, "ng-template", null, 6, core.ɵɵtemplateRefExtractor);
                core.ɵɵelementEnd();
                core.ɵɵtemplate(8, NzSubMenuComponent_ul_8_Template, 2, 5, "ul", 7);
                core.ɵɵtemplate(9, NzSubMenuComponent_ng_template_9_Template, 3, 17, "ng-template", 8);
                core.ɵɵlistener("positionChange", function NzSubMenuComponent_Template_ng_template_positionChange_9_listener($event) { return ctx.onPositionChange($event); });
                core.ɵɵtemplate(10, NzSubMenuComponent_ng_template_10_Template, 1, 0, "ng-template", null, 9, core.ɵɵtemplateRefExtractor);
            } if (rf & 2) {
                var _r1236 = core.ɵɵreference(1);
                var _r1241 = core.ɵɵreference(7);
                core.ɵɵstyleProp("padding-left", ctx.nzMenuService.mode === "inline" ? ctx.nzPaddingLeft ? ctx.nzPaddingLeft : ctx.nzSubmenuService.level * ctx.nzMenuService.inlineIndent : null, "px");
                core.ɵɵclassProp("ant-dropdown-menu-submenu-title", ctx.nzMenuService.isInDropDown)("ant-menu-submenu-title", !ctx.nzMenuService.isInDropDown);
                core.ɵɵadvance(2);
                core.ɵɵproperty("ngIf", ctx.nzIcon);
                core.ɵɵadvance(1);
                core.ɵɵproperty("nzStringTemplateOutlet", ctx.nzTitle);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", !ctx.nzTitle);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.nzMenuService.isInDropDown)("ngIfElse", _r1241);
                core.ɵɵadvance(3);
                core.ɵɵproperty("ngIf", ctx.nzMenuService.mode === "inline");
                core.ɵɵadvance(1);
                core.ɵɵproperty("cdkConnectedOverlayPositions", ctx.overlayPositions)("cdkConnectedOverlayOrigin", _r1236)("cdkConnectedOverlayWidth", ctx.triggerWidth)("cdkConnectedOverlayOpen", ctx.nzOpen && ctx.nzMenuService.mode !== "inline");
            } }, directives: [overlay.CdkOverlayOrigin, common.NgIf, core$1.NzStringTemplateOutletDirective, overlay.CdkConnectedOverlay, icon.NzIconDirective, core$1.NzNoAnimationDirective, common.NgClass, common.NgTemplateOutlet], styles: ["\n      :root .ant-menu-submenu.ant-menu-submenu-placement-bottomLeft {\n        top: 6px;\n        position: relative;\n      }\n\n      :root .ant-menu-submenu.ant-menu-submenu-placement-rightTop {\n        left: 4px;\n        position: relative;\n      }\n\n      :root .ant-menu-submenu.ant-menu-submenu-placement-leftTop {\n        right: 4px;\n        position: relative;\n      }\n    "], encapsulation: 2, data: { animation: [core$1.collapseMotion, core$1.zoomBigMotion, core$1.slideMotion] }, changeDetection: 0 });
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzSubMenuComponent.prototype, "nzOpen", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzSubMenuComponent.prototype, "nzDisabled", void 0);
        return NzSubMenuComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzSubMenuComponent, [{
            type: core.Component,
            args: [{
                    selector: '[nz-submenu]',
                    exportAs: 'nzSubmenu',
                    providers: [NzSubmenuService, core$1.NzUpdateHostClassService],
                    animations: [core$1.collapseMotion, core$1.zoomBigMotion, core$1.slideMotion],
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    templateUrl: './nz-submenu.component.html',
                    styles: [
                        "\n      :root .ant-menu-submenu.ant-menu-submenu-placement-bottomLeft {\n        top: 6px;\n        position: relative;\n      }\n\n      :root .ant-menu-submenu.ant-menu-submenu-placement-rightTop {\n        left: 4px;\n        position: relative;\n      }\n\n      :root .ant-menu-submenu.ant-menu-submenu-placement-leftTop {\n        right: 4px;\n        position: relative;\n      }\n    "
                    ]
                }]
        }], function () { return [{ type: core.ElementRef }, { type: core$1.NzMenuBaseService }, { type: core.ChangeDetectorRef }, { type: NzSubmenuService }, { type: core$1.NzUpdateHostClassService }, { type: platform.Platform }, { type: core$1.NzNoAnimationDirective, decorators: [{
                    type: core.Host
                }, {
                    type: core.Optional
                }] }]; }, { nzMenuClassName: [{
                type: core.Input
            }], nzPaddingLeft: [{
                type: core.Input
            }], nzTitle: [{
                type: core.Input
            }], nzIcon: [{
                type: core.Input
            }], nzOpen: [{
                type: core.Input
            }], nzDisabled: [{
                type: core.Input
            }], nzOpenChange: [{
                type: core.Output
            }], cdkConnectedOverlay: [{
                type: core.ViewChild,
                args: [overlay.CdkConnectedOverlay, { static: true }]
            }], cdkOverlayOrigin: [{
                type: core.ViewChild,
                args: [overlay.CdkOverlayOrigin, { static: true, read: core.ElementRef }]
            }], listOfNzSubMenuComponent: [{
                type: core.ContentChildren,
                args: [NzSubMenuComponent, { descendants: true }]
            }], listOfNzMenuItemDirective: [{
                type: core.ContentChildren,
                args: [NzMenuItemDirective, { descendants: true }]
            }] }); })();

    var NzMenuDirective = /** @class */ (function () {
        function NzMenuDirective(elementRef, nzMenuService, nzUpdateHostClassService) {
            this.elementRef = elementRef;
            this.nzMenuService = nzMenuService;
            this.nzUpdateHostClassService = nzUpdateHostClassService;
            this.destroy$ = new rxjs.Subject();
            this.listOfOpenedNzSubMenuComponent = [];
            this.nzInlineIndent = 24;
            this.nzTheme = 'light';
            this.nzMode = 'vertical';
            this.nzInDropDown = false;
            this.nzInlineCollapsed = false;
            this.nzSelectable = !this.nzMenuService.isInDropDown;
            this.nzClick = new core.EventEmitter();
        }
        NzMenuDirective.prototype.updateInlineCollapse = function () {
            if (this.listOfNzMenuItemDirective) {
                if (this.nzInlineCollapsed) {
                    this.listOfOpenedNzSubMenuComponent = this.listOfNzSubMenuComponent.filter(function (submenu) { return submenu.nzOpen; });
                    this.listOfNzSubMenuComponent.forEach(function (submenu) { return submenu.setOpenState(false); });
                    this.nzMode = 'vertical';
                }
                else {
                    this.listOfOpenedNzSubMenuComponent.forEach(function (submenu) { return submenu.setOpenState(true); });
                    this.listOfOpenedNzSubMenuComponent = [];
                    this.nzMode = this.cacheMode;
                }
                this.nzMenuService.setMode(this.nzMode);
            }
        };
        NzMenuDirective.prototype.setClassMap = function () {
            var _a;
            var prefixName = this.nzMenuService.isInDropDown ? 'ant-dropdown-menu' : 'ant-menu';
            this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, (_a = {},
                _a["" + prefixName] = true,
                _a[prefixName + "-root"] = true,
                _a[prefixName + "-" + this.nzTheme] = true,
                _a[prefixName + "-" + this.nzMode] = true,
                _a[prefixName + "-inline-collapsed"] = this.nzInlineCollapsed,
                _a));
        };
        NzMenuDirective.prototype.ngOnInit = function () {
            var _this = this;
            this.setClassMap();
            this.nzMenuService.menuItemClick$.pipe(operators.takeUntil(this.destroy$)).subscribe(function (menu) {
                _this.nzClick.emit(menu);
                if (_this.nzSelectable) {
                    _this.listOfNzMenuItemDirective.forEach(function (item) { return item.setSelectedState(item === menu); });
                }
            });
        };
        NzMenuDirective.prototype.ngAfterContentInit = function () {
            this.cacheMode = this.nzMode;
            this.updateInlineCollapse();
        };
        NzMenuDirective.prototype.ngOnChanges = function (changes) {
            if (changes.nzInlineCollapsed) {
                this.updateInlineCollapse();
            }
            if (changes.nzInlineIndent) {
                this.nzMenuService.setInlineIndent(this.nzInlineIndent);
            }
            if (changes.nzInDropDown) {
                this.nzMenuService.isInDropDown = this.nzInDropDown;
            }
            if (changes.nzTheme) {
                this.nzMenuService.setTheme(this.nzTheme);
            }
            if (changes.nzMode) {
                this.nzMenuService.setMode(this.nzMode);
                if (!changes.nzMode.isFirstChange() && this.listOfNzSubMenuComponent) {
                    this.listOfNzSubMenuComponent.forEach(function (submenu) { return submenu.setOpenState(false); });
                }
            }
            if (changes.nzTheme || changes.nzMode || changes.nzInlineCollapsed) {
                this.setClassMap();
            }
        };
        NzMenuDirective.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        /** @nocollapse */ NzMenuDirective.ɵfac = function NzMenuDirective_Factory(t) { return new (t || NzMenuDirective)(core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(core$1.NzMenuBaseService), core.ɵɵdirectiveInject(core$1.NzUpdateHostClassService)); };
        /** @nocollapse */ NzMenuDirective.ɵdir = core.ɵɵdefineDirective({ type: NzMenuDirective, selectors: [["", "nz-menu", ""]], contentQueries: function NzMenuDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
                core.ɵɵcontentQuery(dirIndex, NzMenuItemDirective, true);
                core.ɵɵcontentQuery(dirIndex, NzSubMenuComponent, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.listOfNzMenuItemDirective = _t);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.listOfNzSubMenuComponent = _t);
            } }, inputs: { nzInlineIndent: "nzInlineIndent", nzTheme: "nzTheme", nzMode: "nzMode", nzInDropDown: "nzInDropDown", nzInlineCollapsed: "nzInlineCollapsed", nzSelectable: "nzSelectable" }, outputs: { nzClick: "nzClick" }, exportAs: ["nzMenu"], features: [core.ɵɵProvidersFeature([
                    core$1.NzUpdateHostClassService,
                    NzMenuService,
                    {
                        provide: core$1.NzMenuBaseService,
                        useFactory: NzMenuServiceFactory,
                        deps: [[new core.SkipSelf(), new core.Optional(), core$1.NzDropdownHigherOrderServiceToken], NzMenuService]
                    }
                ]), core.ɵɵNgOnChangesFeature()] });
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzMenuDirective.prototype, "nzInDropDown", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzMenuDirective.prototype, "nzInlineCollapsed", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzMenuDirective.prototype, "nzSelectable", void 0);
        return NzMenuDirective;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzMenuDirective, [{
            type: core.Directive,
            args: [{
                    selector: '[nz-menu]',
                    exportAs: 'nzMenu',
                    providers: [
                        core$1.NzUpdateHostClassService,
                        NzMenuService,
                        {
                            provide: core$1.NzMenuBaseService,
                            useFactory: NzMenuServiceFactory,
                            deps: [[new core.SkipSelf(), new core.Optional(), core$1.NzDropdownHigherOrderServiceToken], NzMenuService]
                        }
                    ]
                }]
        }], function () { return [{ type: core.ElementRef }, { type: core$1.NzMenuBaseService }, { type: core$1.NzUpdateHostClassService }]; }, { listOfNzMenuItemDirective: [{
                type: core.ContentChildren,
                args: [NzMenuItemDirective, { descendants: true }]
            }], listOfNzSubMenuComponent: [{
                type: core.ContentChildren,
                args: [NzSubMenuComponent, { descendants: true }]
            }], nzInlineIndent: [{
                type: core.Input
            }], nzTheme: [{
                type: core.Input
            }], nzMode: [{
                type: core.Input
            }], nzInDropDown: [{
                type: core.Input
            }], nzInlineCollapsed: [{
                type: core.Input
            }], nzSelectable: [{
                type: core.Input
            }], nzClick: [{
                type: core.Output
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var _c0$1 = ["nz-menu-group", ""];
    function NzMenuGroupComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtext(1);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r1252 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(ctx_r1252.nzTitle);
    } }
    function NzMenuGroupComponent_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵprojection(0, 1, ["*ngIf", "!nzTitle"]);
    } }
    var _c1$1 = ["*", [["", "title", ""]]];
    var _c2$1 = ["*", "[title]"];
    var NzMenuGroupComponent = /** @class */ (function () {
        function NzMenuGroupComponent(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.renderer.addClass(elementRef.nativeElement, 'ant-menu-item-group');
        }
        /** @nocollapse */ NzMenuGroupComponent.ɵfac = function NzMenuGroupComponent_Factory(t) { return new (t || NzMenuGroupComponent)(core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(core.Renderer2)); };
        /** @nocollapse */ NzMenuGroupComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzMenuGroupComponent, selectors: [["", "nz-menu-group", ""]], inputs: { nzTitle: "nzTitle" }, exportAs: ["nzMenuGroup"], attrs: _c0$1, ngContentSelectors: _c2$1, decls: 5, vars: 2, consts: [[1, "ant-menu-item-group-title"], [4, "nzStringTemplateOutlet"], [4, "ngIf"], [1, "ant-menu-item-group-list"]], template: function NzMenuGroupComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef(_c1$1);
                core.ɵɵelementStart(0, "div", 0);
                core.ɵɵtemplate(1, NzMenuGroupComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
                core.ɵɵtemplate(2, NzMenuGroupComponent_2_Template, 1, 0, undefined, 2);
                core.ɵɵelementEnd();
                core.ɵɵelementStart(3, "ul", 3);
                core.ɵɵprojection(4);
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵadvance(1);
                core.ɵɵproperty("nzStringTemplateOutlet", ctx.nzTitle);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", !ctx.nzTitle);
            } }, directives: [core$1.NzStringTemplateOutletDirective, common.NgIf], encapsulation: 2, changeDetection: 0 });
        return NzMenuGroupComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzMenuGroupComponent, [{
            type: core.Component,
            args: [{
                    selector: '[nz-menu-group]',
                    exportAs: 'nzMenuGroup',
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    templateUrl: './nz-menu-group.component.html',
                    preserveWhitespaces: false
                }]
        }], function () { return [{ type: core.ElementRef }, { type: core.Renderer2 }]; }, { nzTitle: [{
                type: core.Input
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzMenuDividerDirective = /** @class */ (function () {
        function NzMenuDividerDirective(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.renderer.addClass(elementRef.nativeElement, 'ant-dropdown-menu-item-divider');
        }
        /** @nocollapse */ NzMenuDividerDirective.ɵfac = function NzMenuDividerDirective_Factory(t) { return new (t || NzMenuDividerDirective)(core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(core.Renderer2)); };
        /** @nocollapse */ NzMenuDividerDirective.ɵdir = core.ɵɵdefineDirective({ type: NzMenuDividerDirective, selectors: [["", "nz-menu-divider", ""]], exportAs: ["nzMenuDivider"] });
        return NzMenuDividerDirective;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzMenuDividerDirective, [{
            type: core.Directive,
            args: [{
                    selector: '[nz-menu-divider]',
                    exportAs: 'nzMenuDivider'
                }]
        }], function () { return [{ type: core.ElementRef }, { type: core.Renderer2 }]; }, null); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzMenuModule = /** @class */ (function () {
        function NzMenuModule() {
        }
        /** @nocollapse */ NzMenuModule.ɵmod = core.ɵɵdefineNgModule({ type: NzMenuModule });
        /** @nocollapse */ NzMenuModule.ɵinj = core.ɵɵdefineInjector({ factory: function NzMenuModule_Factory(t) { return new (t || NzMenuModule)(); }, imports: [[common.CommonModule, forms.FormsModule, platform.PlatformModule, button.NzButtonModule, overlay.OverlayModule, icon.NzIconModule, core$1.NzNoAnimationModule, core$1.NzAddOnModule]] });
        return NzMenuModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(NzMenuModule, { declarations: [NzMenuDirective, NzMenuItemDirective, NzSubMenuComponent, NzMenuDividerDirective, NzMenuGroupComponent], imports: [common.CommonModule, forms.FormsModule, platform.PlatformModule, button.NzButtonModule, overlay.OverlayModule, icon.NzIconModule, core$1.NzNoAnimationModule, core$1.NzAddOnModule], exports: [NzMenuDirective, NzMenuItemDirective, NzSubMenuComponent, NzMenuDividerDirective, NzMenuGroupComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzMenuModule, [{
            type: core.NgModule,
            args: [{
                    imports: [common.CommonModule, forms.FormsModule, platform.PlatformModule, button.NzButtonModule, overlay.OverlayModule, icon.NzIconModule, core$1.NzNoAnimationModule, core$1.NzAddOnModule],
                    declarations: [NzMenuDirective, NzMenuItemDirective, NzSubMenuComponent, NzMenuDividerDirective, NzMenuGroupComponent],
                    exports: [NzMenuDirective, NzMenuItemDirective, NzSubMenuComponent, NzMenuDividerDirective, NzMenuGroupComponent]
                }]
        }], null, null); })();

    exports.NzMenuDirective = NzMenuDirective;
    exports.NzMenuDividerDirective = NzMenuDividerDirective;
    exports.NzMenuGroupComponent = NzMenuGroupComponent;
    exports.NzMenuItemDirective = NzMenuItemDirective;
    exports.NzMenuModule = NzMenuModule;
    exports.NzMenuService = NzMenuService;
    exports.NzMenuServiceFactory = NzMenuServiceFactory;
    exports.NzSubMenuComponent = NzSubMenuComponent;
    exports.NzSubmenuService = NzSubmenuService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-menu.umd.js.map

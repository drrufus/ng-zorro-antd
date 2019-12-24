(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('ng-zorro-antd/core'), require('rxjs'), require('@angular/router'), require('@angular/cdk/observers'), require('@angular/cdk/platform'), require('ng-zorro-antd/icon'), require('@angular/cdk/bidi'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/tabs', ['exports', '@angular/core', '@angular/common', 'ng-zorro-antd/core', 'rxjs', '@angular/router', '@angular/cdk/observers', '@angular/cdk/platform', 'ng-zorro-antd/icon', '@angular/cdk/bidi', 'rxjs/operators'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].tabs = {}), global.ng.core, global.ng.common, global['ng-zorro-antd'].core, global.rxjs, global.ng.router, global.ng.cdk.observers, global.ng.cdk.platform, global['ng-zorro-antd'].icon, global.ng.cdk.bidi, global.rxjs.operators));
}(this, (function (exports, core, common, core$1, rxjs, router, observers, platform, icon, bidi, operators) { 'use strict';

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

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var _c0 = ["nz-tab-body", ""];
    function NzTabBodyComponent_ng_container_0_ng_template_1_Template(rf, ctx) { }
    function NzTabBodyComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, NzTabBodyComponent_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 1);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r836 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", ctx_r836.content);
    } }
    var NzTabBodyComponent = /** @class */ (function () {
        function NzTabBodyComponent() {
            this.active = false;
            this.forceRender = false;
        }
        /** @nocollapse */ NzTabBodyComponent.ɵfac = function NzTabBodyComponent_Factory(t) { return new (t || NzTabBodyComponent)(); };
        /** @nocollapse */ NzTabBodyComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzTabBodyComponent, selectors: [["", "nz-tab-body", ""]], hostBindings: function NzTabBodyComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
                core.ɵɵallocHostVars(2);
            } if (rf & 2) {
                core.ɵɵclassProp("ant-tabs-tabpane-active", ctx.active)("ant-tabs-tabpane-inactive", !ctx.active);
            } }, inputs: { content: "content", active: "active", forceRender: "forceRender" }, exportAs: ["nzTabBody"], attrs: _c0, decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "ngTemplateOutlet"]], template: function NzTabBodyComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵtemplate(0, NzTabBodyComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
            } if (rf & 2) {
                core.ɵɵproperty("ngIf", ctx.active || ctx.forceRender);
            } }, directives: [common.NgIf, common.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
        return NzTabBodyComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzTabBodyComponent, [{
            type: core.Component,
            args: [{
                    selector: '[nz-tab-body]',
                    exportAs: 'nzTabBody',
                    preserveWhitespaces: false,
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    templateUrl: './nz-tab-body.component.html',
                    host: {
                        '[class.ant-tabs-tabpane-active]': 'active',
                        '[class.ant-tabs-tabpane-inactive]': '!active'
                    }
                }]
        }], null, { content: [{
                type: core.Input
            }], active: [{
                type: core.Input
            }], forceRender: [{
                type: core.Input
            }] }); })();

    var NzTabLabelDirective = /** @class */ (function () {
        function NzTabLabelDirective(elementRef, renderer) {
            this.elementRef = elementRef;
            this.disabled = false;
            renderer.addClass(elementRef.nativeElement, 'ant-tabs-tab');
        }
        NzTabLabelDirective.prototype.getOffsetLeft = function () {
            return this.elementRef.nativeElement.offsetLeft;
        };
        NzTabLabelDirective.prototype.getOffsetWidth = function () {
            return this.elementRef.nativeElement.offsetWidth;
        };
        NzTabLabelDirective.prototype.getOffsetTop = function () {
            return this.elementRef.nativeElement.offsetTop;
        };
        NzTabLabelDirective.prototype.getOffsetHeight = function () {
            return this.elementRef.nativeElement.offsetHeight;
        };
        /** @nocollapse */ NzTabLabelDirective.ɵfac = function NzTabLabelDirective_Factory(t) { return new (t || NzTabLabelDirective)(core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(core.Renderer2)); };
        /** @nocollapse */ NzTabLabelDirective.ɵdir = core.ɵɵdefineDirective({ type: NzTabLabelDirective, selectors: [["", "nz-tab-label", ""]], hostBindings: function NzTabLabelDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
                core.ɵɵallocHostVars(1);
            } if (rf & 2) {
                core.ɵɵclassProp("ant-tabs-tab-disabled", ctx.disabled);
            } }, inputs: { disabled: "disabled" }, exportAs: ["nzTabLabel"] });
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTabLabelDirective.prototype, "disabled", void 0);
        return NzTabLabelDirective;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzTabLabelDirective, [{
            type: core.Directive,
            args: [{
                    selector: '[nz-tab-label]',
                    exportAs: 'nzTabLabel',
                    host: {
                        '[class.ant-tabs-tab-disabled]': 'disabled'
                    }
                }]
        }], function () { return [{ type: core.ElementRef }, { type: core.Renderer2 }]; }, { disabled: [{
                type: core.Input
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    /**
     * This component is for catching `routerLink` directive.
     */
    var NzTabLinkDirective = /** @class */ (function () {
        function NzTabLinkDirective(routerLink, routerLinkWithHref) {
            this.routerLink = routerLink;
            this.routerLinkWithHref = routerLinkWithHref;
        }
        /** @nocollapse */ NzTabLinkDirective.ɵfac = function NzTabLinkDirective_Factory(t) { return new (t || NzTabLinkDirective)(core.ɵɵdirectiveInject(router.RouterLink, 10), core.ɵɵdirectiveInject(router.RouterLinkWithHref, 10)); };
        /** @nocollapse */ NzTabLinkDirective.ɵdir = core.ɵɵdefineDirective({ type: NzTabLinkDirective, selectors: [["a", "nz-tab-link", ""]], exportAs: ["nzTabLink"] });
        return NzTabLinkDirective;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzTabLinkDirective, [{
            type: core.Directive,
            args: [{
                    selector: 'a[nz-tab-link]',
                    exportAs: 'nzTabLink'
                }]
        }], function () { return [{ type: router.RouterLink, decorators: [{
                    type: core.Optional
                }, {
                    type: core.Self
                }] }, { type: router.RouterLinkWithHref, decorators: [{
                    type: core.Optional
                }, {
                    type: core.Self
                }] }]; }, null); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    /** Decorates the `ng-template` tags and reads out the template from it. */
    var NzTabDirective = /** @class */ (function () {
        function NzTabDirective() {
        }
        /** @nocollapse */ NzTabDirective.ɵfac = function NzTabDirective_Factory(t) { return new (t || NzTabDirective)(); };
        /** @nocollapse */ NzTabDirective.ɵdir = core.ɵɵdefineDirective({ type: NzTabDirective, selectors: [["", "nz-tab", ""]], exportAs: ["nzTab"] });
        return NzTabDirective;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzTabDirective, [{
            type: core.Directive,
            args: [{
                    selector: '[nz-tab]',
                    exportAs: 'nzTab'
                }]
        }], null, null); })();

    var _c0$1 = ["bodyTpl"];
    var _c1 = ["titleTpl"];
    function NzTabComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵprojection(0);
    } }
    function NzTabComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵprojection(0, 1);
    } }
    var _c2 = [[["", "nz-tab-link", ""]], "*"];
    var _c3 = ["[nz-tab-link]", "*"];
    var NzTabComponent = /** @class */ (function () {
        function NzTabComponent(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.position = null;
            this.origin = null;
            this.isActive = false;
            this.stateChanges = new rxjs.Subject();
            this.nzForceRender = false;
            this.nzDisabled = false;
            this.nzClick = new core.EventEmitter();
            this.nzSelect = new core.EventEmitter();
            this.nzDeselect = new core.EventEmitter();
            this.renderer.addClass(elementRef.nativeElement, 'ant-tabs-tabpane');
        }
        NzTabComponent.prototype.ngOnChanges = function (changes) {
            if (changes.nzTitle || changes.nzForceRender || changes.nzDisabled) {
                this.stateChanges.next();
            }
        };
        NzTabComponent.prototype.ngOnDestroy = function () {
            this.stateChanges.complete();
        };
        /** @nocollapse */ NzTabComponent.ɵfac = function NzTabComponent_Factory(t) { return new (t || NzTabComponent)(core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(core.Renderer2)); };
        /** @nocollapse */ NzTabComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzTabComponent, selectors: [["nz-tab"]], contentQueries: function NzTabComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
                core.ɵɵcontentQuery(dirIndex, NzTabDirective, true, core.TemplateRef);
                core.ɵɵcontentQuery(dirIndex, NzTabLinkDirective, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.template = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.linkDirective = _t.first);
            } }, viewQuery: function NzTabComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵstaticViewQuery(_c0$1, true);
                core.ɵɵstaticViewQuery(_c1, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.content = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.title = _t.first);
            } }, inputs: { nzTitle: "nzTitle", nzRouterIdentifier: "nzRouterIdentifier", nzForceRender: "nzForceRender", nzDisabled: "nzDisabled" }, outputs: { nzClick: "nzClick", nzSelect: "nzSelect", nzDeselect: "nzDeselect" }, exportAs: ["nzTab"], features: [core.ɵɵNgOnChangesFeature()], ngContentSelectors: _c3, decls: 4, vars: 0, consts: [["titleTpl", ""], ["bodyTpl", ""]], template: function NzTabComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef(_c2);
                core.ɵɵtemplate(0, NzTabComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, core.ɵɵtemplateRefExtractor);
                core.ɵɵtemplate(2, NzTabComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, core.ɵɵtemplateRefExtractor);
            } }, encapsulation: 2, changeDetection: 0 });
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTabComponent.prototype, "nzForceRender", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTabComponent.prototype, "nzDisabled", void 0);
        return NzTabComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzTabComponent, [{
            type: core.Component,
            args: [{
                    selector: 'nz-tab',
                    exportAs: 'nzTab',
                    preserveWhitespaces: false,
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    templateUrl: './nz-tab.component.html'
                }]
        }], function () { return [{ type: core.ElementRef }, { type: core.Renderer2 }]; }, { content: [{
                type: core.ViewChild,
                args: ['bodyTpl', { static: true }]
            }], title: [{
                type: core.ViewChild,
                args: ['titleTpl', { static: true }]
            }], template: [{
                type: core.ContentChild,
                args: [NzTabDirective, { static: false, read: core.TemplateRef }]
            }], linkDirective: [{
                type: core.ContentChild,
                args: [NzTabLinkDirective, { static: false }]
            }], nzTitle: [{
                type: core.Input
            }], nzRouterIdentifier: [{
                type: core.Input
            }], nzForceRender: [{
                type: core.Input
            }], nzDisabled: [{
                type: core.Input
            }], nzClick: [{
                type: core.Output
            }], nzSelect: [{
                type: core.Output
            }], nzDeselect: [{
                type: core.Output
            }] }); })();

    var NzTabsInkBarDirective = /** @class */ (function () {
        function NzTabsInkBarDirective(renderer, elementRef, ngZone) {
            this.renderer = renderer;
            this.elementRef = elementRef;
            this.ngZone = ngZone;
            this.nzAnimated = false;
            this.nzPositionMode = 'horizontal';
            renderer.addClass(elementRef.nativeElement, 'ant-tabs-ink-bar');
        }
        NzTabsInkBarDirective.prototype.alignToElement = function (element) {
            var _this = this;
            if (typeof requestAnimationFrame !== 'undefined') {
                this.ngZone.runOutsideAngular(function () {
                    requestAnimationFrame(function () { return _this.setStyles(element); });
                });
            }
            else {
                this.setStyles(element);
            }
        };
        NzTabsInkBarDirective.prototype.setStyles = function (element) {
            /** when horizontal remove height style and add transform left **/
            if (this.nzPositionMode === 'horizontal') {
                this.renderer.removeStyle(this.elementRef.nativeElement, 'height');
                this.renderer.setStyle(this.elementRef.nativeElement, 'transform', "translate3d(" + this.getLeftPosition(element) + ", 0px, 0px)");
                this.renderer.setStyle(this.elementRef.nativeElement, 'width', this.getElementWidth(element));
            }
            else {
                /** when vertical remove width style and add transform top **/
                this.renderer.removeStyle(this.elementRef.nativeElement, 'width');
                this.renderer.setStyle(this.elementRef.nativeElement, 'transform', "translate3d(0px, " + this.getTopPosition(element) + ", 0px)");
                this.renderer.setStyle(this.elementRef.nativeElement, 'height', this.getElementHeight(element));
            }
        };
        NzTabsInkBarDirective.prototype.getLeftPosition = function (element) {
            return element ? element.offsetLeft + 'px' : '0';
        };
        NzTabsInkBarDirective.prototype.getElementWidth = function (element) {
            return element ? element.offsetWidth + 'px' : '0';
        };
        NzTabsInkBarDirective.prototype.getTopPosition = function (element) {
            return element ? element.offsetTop + 'px' : '0';
        };
        NzTabsInkBarDirective.prototype.getElementHeight = function (element) {
            return element ? element.offsetHeight + 'px' : '0';
        };
        /** @nocollapse */ NzTabsInkBarDirective.ɵfac = function NzTabsInkBarDirective_Factory(t) { return new (t || NzTabsInkBarDirective)(core.ɵɵdirectiveInject(core.Renderer2), core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(core.NgZone)); };
        /** @nocollapse */ NzTabsInkBarDirective.ɵdir = core.ɵɵdefineDirective({ type: NzTabsInkBarDirective, selectors: [["", "nz-tabs-ink-bar", ""]], hostBindings: function NzTabsInkBarDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
                core.ɵɵallocHostVars(2);
            } if (rf & 2) {
                core.ɵɵclassProp("ant-tabs-ink-bar-animated", ctx.nzAnimated)("ant-tabs-ink-bar-no-animated", !ctx.nzAnimated);
            } }, inputs: { nzAnimated: "nzAnimated", nzPositionMode: "nzPositionMode" }, exportAs: ["nzTabsInkBar"] });
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTabsInkBarDirective.prototype, "nzAnimated", void 0);
        return NzTabsInkBarDirective;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzTabsInkBarDirective, [{
            type: core.Directive,
            args: [{
                    selector: '[nz-tabs-ink-bar]',
                    exportAs: 'nzTabsInkBar',
                    host: {
                        '[class.ant-tabs-ink-bar-animated]': 'nzAnimated',
                        '[class.ant-tabs-ink-bar-no-animated]': '!nzAnimated'
                    }
                }]
        }], function () { return [{ type: core.Renderer2 }, { type: core.ElementRef }, { type: core.NgZone }]; }, { nzAnimated: [{
                type: core.Input
            }], nzPositionMode: [{
                type: core.Input
            }] }); })();

    var _c0$2 = ["navContainerElement"];
    var _c1$1 = ["navListElement"];
    var _c2$1 = ["scrollListElement"];
    var _c3$1 = ["nz-tabs-nav", ""];
    function NzTabsNavComponent_div_0_ng_template_1_Template(rf, ctx) { }
    function NzTabsNavComponent_div_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 15);
        core.ɵɵtemplate(1, NzTabsNavComponent_div_0_ng_template_1_Template, 0, 0, "ng-template", 16);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r842 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", ctx_r842.nzTabBarExtraContent);
    } }
    var _c4 = ["*"];
    var EXAGGERATED_OVERSCROLL = 64;
    var NzTabsNavComponent = /** @class */ (function () {
        function NzTabsNavComponent(elementRef, ngZone, renderer, cdr, platform, nzDomEventService, dir) {
            this.elementRef = elementRef;
            this.ngZone = ngZone;
            this.renderer = renderer;
            this.cdr = cdr;
            this.platform = platform;
            this.nzDomEventService = nzDomEventService;
            this.dir = dir;
            this._tabPositionMode = 'horizontal';
            this._scrollDistance = 0;
            this._selectedIndex = 0;
            this.destroy$ = new rxjs.Subject();
            this.showPaginationControls = false;
            this.disableScrollAfter = true;
            this.disableScrollBefore = true;
            this.selectedIndexChanged = false;
            this.realignInkBar = null;
            this.nzOnNextClick = new core.EventEmitter();
            this.nzOnPrevClick = new core.EventEmitter();
            this.nzAnimated = true;
            this.nzHideBar = false;
            this.nzShowPagination = true;
            this.nzType = 'line';
        }
        Object.defineProperty(NzTabsNavComponent.prototype, "nzPositionMode", {
            get: function () {
                return this._tabPositionMode;
            },
            set: function (value) {
                var _this = this;
                this._tabPositionMode = value;
                this.alignInkBarToSelectedTab();
                if (this.nzShowPagination) {
                    Promise.resolve().then(function () {
                        _this.updatePagination();
                    });
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTabsNavComponent.prototype, "selectedIndex", {
            get: function () {
                return this._selectedIndex;
            },
            set: function (value) {
                this.selectedIndexChanged = this._selectedIndex !== value;
                this._selectedIndex = value;
            },
            enumerable: true,
            configurable: true
        });
        NzTabsNavComponent.prototype.onContentChanges = function () {
            var _this = this;
            var textContent = this.elementRef.nativeElement.textContent;
            // We need to diff the text content of the header, because the MutationObserver callback
            // will fire even if the text content didn't change which is inefficient and is prone
            // to infinite loops if a poorly constructed expression is passed in (see #14249).
            if (textContent !== this.currentTextContent) {
                this.currentTextContent = textContent;
                this.ngZone.run(function () {
                    if (_this.nzShowPagination) {
                        _this.updatePagination();
                    }
                    _this.alignInkBarToSelectedTab();
                    _this.cdr.markForCheck();
                });
            }
        };
        NzTabsNavComponent.prototype.scrollHeader = function (scrollDir) {
            if (scrollDir === 'before' && !this.disableScrollBefore) {
                this.nzOnPrevClick.emit();
            }
            else if (scrollDir === 'after' && !this.disableScrollAfter) {
                this.nzOnNextClick.emit();
            }
            // Move the scroll distance one-third the length of the tab list's viewport.
            this.scrollDistance += ((scrollDir === 'before' ? -1 : 1) * this.viewWidthHeightPix) / 3;
        };
        NzTabsNavComponent.prototype.ngAfterContentChecked = function () {
            if (this.tabLabelCount !== this.listOfNzTabLabelDirective.length) {
                if (this.nzShowPagination) {
                    this.updatePagination();
                }
                this.tabLabelCount = this.listOfNzTabLabelDirective.length;
                this.cdr.markForCheck();
            }
            if (this.selectedIndexChanged) {
                this.scrollToLabel(this._selectedIndex);
                if (this.nzShowPagination) {
                    this.checkScrollingControls();
                }
                this.alignInkBarToSelectedTab();
                this.selectedIndexChanged = false;
                this.cdr.markForCheck();
            }
            if (this.scrollDistanceChanged) {
                if (this.nzShowPagination) {
                    this.updateTabScrollPosition();
                }
                this.scrollDistanceChanged = false;
                this.cdr.markForCheck();
            }
        };
        NzTabsNavComponent.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.realignInkBar = this.ngZone.runOutsideAngular(function () {
                var dirChange = _this.dir ? _this.dir.change : rxjs.of(null);
                var resize = typeof window !== 'undefined'
                    ? _this.nzDomEventService.registerResizeListener().pipe(operators.takeUntil(_this.destroy$), operators.finalize(function () { return _this.nzDomEventService.unregisterResizeListener(); }))
                    : rxjs.of(null);
                return rxjs.merge(dirChange, resize)
                    .pipe(operators.startWith(null))
                    .subscribe(function () {
                    if (_this.nzShowPagination) {
                        _this.updatePagination();
                    }
                    _this.alignInkBarToSelectedTab();
                });
            });
        };
        NzTabsNavComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
            if (this.realignInkBar) {
                this.realignInkBar.unsubscribe();
            }
        };
        NzTabsNavComponent.prototype.updateTabScrollPosition = function () {
            var scrollDistance = this.scrollDistance;
            if (this.nzPositionMode === 'horizontal') {
                var translateX = this.getLayoutDirection() === 'ltr' ? -scrollDistance : scrollDistance;
                this.renderer.setStyle(this.navListElement.nativeElement, 'transform', "translate3d(" + translateX + "px, 0, 0)");
            }
            else {
                this.renderer.setStyle(this.navListElement.nativeElement, 'transform', "translate3d(0," + -scrollDistance + "px, 0)");
            }
        };
        NzTabsNavComponent.prototype.updatePagination = function () {
            this.checkPaginationEnabled();
            this.checkScrollingControls();
            this.updateTabScrollPosition();
        };
        NzTabsNavComponent.prototype.checkPaginationEnabled = function () {
            var isEnabled = this.tabListScrollWidthHeightPix > this.tabListScrollOffSetWidthHeight;
            if (!isEnabled) {
                this.scrollDistance = 0;
            }
            if (isEnabled !== this.showPaginationControls) {
                this.cdr.markForCheck();
            }
            this.showPaginationControls = isEnabled;
        };
        NzTabsNavComponent.prototype.scrollToLabel = function (labelIndex) {
            var selectedLabel = this.listOfNzTabLabelDirective ? this.listOfNzTabLabelDirective.toArray()[labelIndex] : null;
            if (selectedLabel) {
                // The view length is the visible width of the tab labels.
                var labelBeforePos = void 0;
                var labelAfterPos = void 0;
                if (this.nzPositionMode === 'horizontal') {
                    if (this.getLayoutDirection() === 'ltr') {
                        labelBeforePos = selectedLabel.getOffsetLeft();
                        labelAfterPos = labelBeforePos + selectedLabel.getOffsetWidth();
                    }
                    else {
                        labelAfterPos = this.navListElement.nativeElement.offsetWidth - selectedLabel.getOffsetLeft();
                        labelBeforePos = labelAfterPos - selectedLabel.getOffsetWidth();
                    }
                }
                else {
                    labelBeforePos = selectedLabel.getOffsetTop();
                    labelAfterPos = labelBeforePos + selectedLabel.getOffsetHeight();
                }
                var beforeVisiblePos = this.scrollDistance;
                var afterVisiblePos = this.scrollDistance + this.viewWidthHeightPix;
                if (labelBeforePos < beforeVisiblePos) {
                    // Scroll header to move label to the before direction
                    this.scrollDistance -= beforeVisiblePos - labelBeforePos + EXAGGERATED_OVERSCROLL;
                }
                else if (labelAfterPos > afterVisiblePos) {
                    // Scroll header to move label to the after direction
                    this.scrollDistance += labelAfterPos - afterVisiblePos + EXAGGERATED_OVERSCROLL;
                }
            }
        };
        NzTabsNavComponent.prototype.checkScrollingControls = function () {
            // Check if the pagination arrows should be activated.
            this.disableScrollBefore = this.scrollDistance === 0;
            this.disableScrollAfter = this.scrollDistance === this.getMaxScrollDistance();
            this.cdr.markForCheck();
        };
        /**
         * Determines what is the maximum length in pixels that can be set for the scroll distance. This
         * is equal to the difference in width between the tab list container and tab header container.
         *
         * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
         * should be called sparingly.
         */
        NzTabsNavComponent.prototype.getMaxScrollDistance = function () {
            return this.tabListScrollWidthHeightPix - this.viewWidthHeightPix || 0;
        };
        Object.defineProperty(NzTabsNavComponent.prototype, "scrollDistance", {
            get: function () {
                return this._scrollDistance;
            },
            /** Sets the distance in pixels that the tab header should be transformed in the X-axis. */
            set: function (v) {
                this._scrollDistance = Math.max(0, Math.min(this.getMaxScrollDistance(), v));
                // Mark that the scroll distance has changed so that after the view is checked, the CSS
                // transformation can move the header.
                this.scrollDistanceChanged = true;
                this.checkScrollingControls();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTabsNavComponent.prototype, "viewWidthHeightPix", {
            get: function () {
                var PAGINATION_PIX = 0;
                if (this.showPaginationControls) {
                    PAGINATION_PIX = this.navContainerScrollPaddingPix;
                }
                if (this.nzPositionMode === 'horizontal') {
                    return this.navContainerElement.nativeElement.offsetWidth - PAGINATION_PIX;
                }
                else {
                    return this.navContainerElement.nativeElement.offsetHeight - PAGINATION_PIX;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTabsNavComponent.prototype, "navContainerScrollPaddingPix", {
            get: function () {
                if (this.platform.isBrowser) {
                    var navContainer = this.navContainerElement.nativeElement;
                    // tslint:disable: no-any
                    var originStyle = window.getComputedStyle
                        ? window.getComputedStyle(navContainer)
                        : navContainer.currentStyle; // currentStyle for IE < 9
                    if (this.nzPositionMode === 'horizontal') {
                        return core$1.pxToNumber(originStyle.paddingLeft) + core$1.pxToNumber(originStyle.paddingRight);
                    }
                    else {
                        return core$1.pxToNumber(originStyle.paddingTop) + core$1.pxToNumber(originStyle.paddingBottom);
                    }
                }
                else {
                    return 0;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTabsNavComponent.prototype, "tabListScrollWidthHeightPix", {
            get: function () {
                if (this.nzPositionMode === 'horizontal') {
                    return this.navListElement.nativeElement.scrollWidth;
                }
                else {
                    return this.navListElement.nativeElement.scrollHeight;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTabsNavComponent.prototype, "tabListScrollOffSetWidthHeight", {
            get: function () {
                if (this.nzPositionMode === 'horizontal') {
                    return this.scrollListElement.nativeElement.offsetWidth;
                }
                else {
                    return this.elementRef.nativeElement.offsetHeight;
                }
            },
            enumerable: true,
            configurable: true
        });
        NzTabsNavComponent.prototype.getLayoutDirection = function () {
            return this.dir && this.dir.value === 'rtl' ? 'rtl' : 'ltr';
        };
        NzTabsNavComponent.prototype.alignInkBarToSelectedTab = function () {
            if (this.nzType === 'line') {
                var selectedLabelWrapper = this.listOfNzTabLabelDirective && this.listOfNzTabLabelDirective.length
                    ? this.listOfNzTabLabelDirective.toArray()[this.selectedIndex].elementRef.nativeElement
                    : null;
                if (this.nzTabsInkBarDirective) {
                    this.nzTabsInkBarDirective.alignToElement(selectedLabelWrapper);
                }
            }
        };
        /** @nocollapse */ NzTabsNavComponent.ɵfac = function NzTabsNavComponent_Factory(t) { return new (t || NzTabsNavComponent)(core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(core.NgZone), core.ɵɵdirectiveInject(core.Renderer2), core.ɵɵdirectiveInject(core.ChangeDetectorRef), core.ɵɵdirectiveInject(platform.Platform), core.ɵɵdirectiveInject(core$1.NzDomEventService), core.ɵɵdirectiveInject(bidi.Directionality, 8)); };
        /** @nocollapse */ NzTabsNavComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzTabsNavComponent, selectors: [["", "nz-tabs-nav", ""]], contentQueries: function NzTabsNavComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
                core.ɵɵcontentQuery(dirIndex, NzTabLabelDirective, false);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.listOfNzTabLabelDirective = _t);
            } }, viewQuery: function NzTabsNavComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵstaticViewQuery(NzTabsInkBarDirective, true);
                core.ɵɵstaticViewQuery(_c0$2, true);
                core.ɵɵstaticViewQuery(_c1$1, true);
                core.ɵɵstaticViewQuery(_c2$1, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.nzTabsInkBarDirective = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.navContainerElement = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.navListElement = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.scrollListElement = _t.first);
            } }, inputs: { nzTabBarExtraContent: "nzTabBarExtraContent", nzAnimated: "nzAnimated", nzHideBar: "nzHideBar", nzShowPagination: "nzShowPagination", nzType: "nzType", nzPositionMode: "nzPositionMode", selectedIndex: "selectedIndex" }, outputs: { nzOnNextClick: "nzOnNextClick", nzOnPrevClick: "nzOnPrevClick" }, exportAs: ["nzTabsNav"], attrs: _c3$1, ngContentSelectors: _c4, decls: 17, vars: 12, consts: [["style", "float:right;", "class", "ant-tabs-extra-content", 4, "ngIf"], [1, "ant-tabs-nav-container"], ["navContainerElement", ""], [1, "ant-tabs-tab-prev", 3, "click"], [1, "ant-tabs-tab-prev-icon"], ["nz-icon", "", 1, "ant-tabs-tab-prev-icon-target", 3, "nzType"], [1, "ant-tabs-tab-next", 3, "click"], [1, "ant-tabs-tab-next-icon"], ["nz-icon", "", 1, "ant-tabs-tab-next-icon-target", 3, "nzType"], [1, "ant-tabs-nav-wrap"], [1, "ant-tabs-nav-scroll"], ["scrollListElement", ""], [1, "ant-tabs-nav", 3, "cdkObserveContent"], ["navListElement", ""], ["nz-tabs-ink-bar", "", 2, "display", "block", 3, "hidden", "nzAnimated", "nzPositionMode"], [1, "ant-tabs-extra-content", 2, "float", "right"], [3, "ngTemplateOutlet"]], template: function NzTabsNavComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵtemplate(0, NzTabsNavComponent_div_0_Template, 2, 1, "div", 0);
                core.ɵɵelementStart(1, "div", 1, 2);
                core.ɵɵelementStart(3, "span", 3);
                core.ɵɵlistener("click", function NzTabsNavComponent_Template_span_click_3_listener($event) { return ctx.scrollHeader("before"); });
                core.ɵɵelementStart(4, "span", 4);
                core.ɵɵelement(5, "i", 5);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(6, "span", 6);
                core.ɵɵlistener("click", function NzTabsNavComponent_Template_span_click_6_listener($event) { return ctx.scrollHeader("after"); });
                core.ɵɵelementStart(7, "span", 7);
                core.ɵɵelement(8, "i", 8);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(9, "div", 9);
                core.ɵɵelementStart(10, "div", 10, 11);
                core.ɵɵelementStart(12, "div", 12, 13);
                core.ɵɵlistener("cdkObserveContent", function NzTabsNavComponent_Template_div_cdkObserveContent_12_listener($event) { return ctx.onContentChanges(); });
                core.ɵɵelementStart(14, "div");
                core.ɵɵprojection(15);
                core.ɵɵelementEnd();
                core.ɵɵelement(16, "div", 14);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵproperty("ngIf", ctx.nzTabBarExtraContent);
                core.ɵɵadvance(1);
                core.ɵɵclassProp("ant-tabs-nav-container-scrolling", ctx.showPaginationControls);
                core.ɵɵadvance(2);
                core.ɵɵclassProp("ant-tabs-tab-btn-disabled", ctx.disableScrollBefore)("ant-tabs-tab-arrow-show", ctx.showPaginationControls);
                core.ɵɵadvance(2);
                core.ɵɵproperty("nzType", ctx.nzPositionMode === "horizontal" ? "left" : "up");
                core.ɵɵadvance(1);
                core.ɵɵclassProp("ant-tabs-tab-btn-disabled", ctx.disableScrollAfter)("ant-tabs-tab-arrow-show", ctx.showPaginationControls);
                core.ɵɵadvance(2);
                core.ɵɵproperty("nzType", ctx.nzPositionMode === "horizontal" ? "right" : "down");
                core.ɵɵadvance(4);
                core.ɵɵclassProp("ant-tabs-nav-animated", ctx.nzAnimated);
                core.ɵɵadvance(4);
                core.ɵɵproperty("hidden", ctx.nzHideBar)("nzAnimated", ctx.nzAnimated)("nzPositionMode", ctx.nzPositionMode);
            } }, encapsulation: 2, changeDetection: 0 });
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTabsNavComponent.prototype, "nzAnimated", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTabsNavComponent.prototype, "nzHideBar", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTabsNavComponent.prototype, "nzShowPagination", void 0);
        return NzTabsNavComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzTabsNavComponent, [{
            type: core.Component,
            args: [{
                    selector: '[nz-tabs-nav]',
                    exportAs: 'nzTabsNav',
                    preserveWhitespaces: false,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    templateUrl: './nz-tabs-nav.component.html'
                }]
        }], function () { return [{ type: core.ElementRef }, { type: core.NgZone }, { type: core.Renderer2 }, { type: core.ChangeDetectorRef }, { type: platform.Platform }, { type: core$1.NzDomEventService }, { type: bidi.Directionality, decorators: [{
                    type: core.Optional
                }] }]; }, { listOfNzTabLabelDirective: [{
                type: core.ContentChildren,
                args: [NzTabLabelDirective]
            }], nzTabsInkBarDirective: [{
                type: core.ViewChild,
                args: [NzTabsInkBarDirective, { static: true }]
            }], navContainerElement: [{
                type: core.ViewChild,
                args: ['navContainerElement', { static: true }]
            }], navListElement: [{
                type: core.ViewChild,
                args: ['navListElement', { static: true }]
            }], scrollListElement: [{
                type: core.ViewChild,
                args: ['scrollListElement', { static: true }]
            }], nzOnNextClick: [{
                type: core.Output
            }], nzOnPrevClick: [{
                type: core.Output
            }], nzTabBarExtraContent: [{
                type: core.Input
            }], nzAnimated: [{
                type: core.Input
            }], nzHideBar: [{
                type: core.Input
            }], nzShowPagination: [{
                type: core.Input
            }], nzType: [{
                type: core.Input
            }], nzPositionMode: [{
                type: core.Input
            }], selectedIndex: [{
                type: core.Input
            }] }); })();

    var _c0$3 = ["tabContent"];
    function NzTabSetComponent_ng_container_0_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtext(1);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var tab_r851 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(tab_r851.nzTitle);
    } }
    function NzTabSetComponent_ng_container_0_div_2_Template(rf, ctx) { if (rf & 1) {
        var _r856 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 6);
        core.ɵɵlistener("click", function NzTabSetComponent_ng_container_0_div_2_Template_div_click_0_listener($event) { core.ɵɵrestoreView(_r856); var i_r852 = ctx.index; var tab_r851 = ctx.$implicit; var ctx_r855 = core.ɵɵnextContext(2); return ctx_r855.clickLabel(i_r852, tab_r851.nzDisabled); });
        core.ɵɵtemplate(1, NzTabSetComponent_ng_container_0_div_2_ng_container_1_Template, 2, 1, "ng-container", 7);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var tab_r851 = ctx.$implicit;
        var i_r852 = ctx.index;
        var ctx_r848 = core.ɵɵnextContext(2);
        core.ɵɵstyleProp("margin-right", ctx_r848.nzTabBarGutter, "px");
        core.ɵɵclassProp("ant-tabs-tab-active", ctx_r848.nzSelectedIndex == i_r852 && !ctx_r848.nzHideAll);
        core.ɵɵproperty("disabled", tab_r851.nzDisabled);
        core.ɵɵadvance(1);
        core.ɵɵproperty("nzStringTemplateOutlet", tab_r851.nzTitle || tab_r851.title);
    } }
    function NzTabSetComponent_ng_container_0_div_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "div", 8);
    } if (rf & 2) {
        var tab_r857 = ctx.$implicit;
        var i_r858 = ctx.index;
        var ctx_r850 = core.ɵɵnextContext(2);
        core.ɵɵproperty("active", ctx_r850.nzSelectedIndex == i_r858 && !ctx_r850.nzHideAll)("forceRender", tab_r857.nzForceRender)("content", tab_r857.template || tab_r857.content);
    } }
    function NzTabSetComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
        var _r860 = core.ɵɵgetCurrentView();
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "div", 1);
        core.ɵɵlistener("nzOnNextClick", function NzTabSetComponent_ng_container_0_Template_div_nzOnNextClick_1_listener($event) { core.ɵɵrestoreView(_r860); var ctx_r859 = core.ɵɵnextContext(); return ctx_r859.nzOnNextClick.emit(); })("nzOnPrevClick", function NzTabSetComponent_ng_container_0_Template_div_nzOnPrevClick_1_listener($event) { core.ɵɵrestoreView(_r860); var ctx_r861 = core.ɵɵnextContext(); return ctx_r861.nzOnPrevClick.emit(); });
        core.ɵɵtemplate(2, NzTabSetComponent_ng_container_0_div_2_Template, 2, 4, "div", 2);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "div", 3, 4);
        core.ɵɵtemplate(5, NzTabSetComponent_ng_container_0_div_5_Template, 1, 3, "div", 5);
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r847 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵclassProp("ant-tabs-card-bar", ctx_r847.nzType === "card")("ant-tabs-top-bar", ctx_r847.nzTabPosition === "top")("ant-tabs-bottom-bar", ctx_r847.nzTabPosition === "bottom")("ant-tabs-left-bar", ctx_r847.nzTabPosition === "left")("ant-tabs-right-bar", ctx_r847.nzTabPosition === "right")("ant-tabs-small-bar", ctx_r847.nzSize === "small")("ant-tabs-default-bar", ctx_r847.nzSize === "default")("ant-tabs-large-bar", ctx_r847.nzSize === "large");
        core.ɵɵproperty("nzType", ctx_r847.nzType)("nzShowPagination", ctx_r847.nzShowPagination)("nzPositionMode", ctx_r847.tabPositionMode)("nzAnimated", ctx_r847.inkBarAnimated)("ngStyle", ctx_r847.nzTabBarStyle)("nzHideBar", ctx_r847.nzHideAll)("nzTabBarExtraContent", ctx_r847.nzTabBarExtraContent)("selectedIndex", ctx_r847.nzSelectedIndex);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", ctx_r847.listOfNzTabComponent);
        core.ɵɵadvance(1);
        core.ɵɵstyleProp("margin-left", ctx_r847.tabPositionMode === "horizontal" && ctx_r847.tabPaneAnimated && (0 - (ctx_r847.nzSelectedIndex || 0)) * 100, "%");
        core.ɵɵclassProp("ant-tabs-top-content", ctx_r847.nzTabPosition === "top")("ant-tabs-bottom-content", ctx_r847.nzTabPosition === "bottom")("ant-tabs-left-content", ctx_r847.nzTabPosition === "left")("ant-tabs-right-content", ctx_r847.nzTabPosition === "right")("ant-tabs-content-animated", ctx_r847.tabPaneAnimated)("ant-tabs-card-content", ctx_r847.nzType === "card")("ant-tabs-content-no-animated", !ctx_r847.tabPaneAnimated);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngForOf", ctx_r847.listOfNzTabComponent);
    } }
    var NzTabChangeEvent = /** @class */ (function () {
        function NzTabChangeEvent() {
        }
        return NzTabChangeEvent;
    }());
    var NZ_CONFIG_COMPONENT_NAME = 'tabs';
    var NzTabSetComponent = /** @class */ (function () {
        function NzTabSetComponent(nzConfigService, renderer, nzUpdateHostClassService, elementRef, cdr, router) {
            this.nzConfigService = nzConfigService;
            this.renderer = renderer;
            this.nzUpdateHostClassService = nzUpdateHostClassService;
            this.elementRef = elementRef;
            this.cdr = cdr;
            this.router = router;
            this.indexToSelect = 0;
            this.el = this.elementRef.nativeElement;
            this._selectedIndex = null;
            /** Subscription to tabs being added/removed. */
            this.tabsSubscription = rxjs.Subscription.EMPTY;
            /** Subscription to changes in the tab labels. */
            this.tabLabelSubscription = rxjs.Subscription.EMPTY;
            this.destroy$ = new rxjs.Subject();
            this.tabPositionMode = 'horizontal';
            this.nzHideAll = false;
            this.nzTabPosition = 'top';
            this.nzLinkRouter = false;
            this.nzLinkExact = true;
            this.nzOnNextClick = new core.EventEmitter();
            this.nzOnPrevClick = new core.EventEmitter();
            this.nzSelectChange = new core.EventEmitter(true);
            this.nzSelectedIndexChange = new core.EventEmitter();
        }
        Object.defineProperty(NzTabSetComponent.prototype, "nzSelectedIndex", {
            get: function () {
                return this._selectedIndex;
            },
            set: function (value) {
                this.indexToSelect = value ? core$1.toNumber(value, null) : null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTabSetComponent.prototype, "inkBarAnimated", {
            get: function () {
                return this.nzAnimated === true || this.nzAnimated.inkBar === true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTabSetComponent.prototype, "tabPaneAnimated", {
            get: function () {
                return this.nzAnimated === true || this.nzAnimated.tabPane === true;
            },
            enumerable: true,
            configurable: true
        });
        NzTabSetComponent.prototype.setPosition = function (value) {
            if (this.tabContent) {
                if (value === 'bottom') {
                    this.renderer.insertBefore(this.el, this.tabContent.nativeElement, this.nzTabsNavComponent.elementRef.nativeElement);
                }
                else {
                    this.renderer.insertBefore(this.el, this.nzTabsNavComponent.elementRef.nativeElement, this.tabContent.nativeElement);
                }
            }
        };
        NzTabSetComponent.prototype.setClassMap = function () {
            var _a;
            this.nzUpdateHostClassService.updateHostClass(this.el, (_a = {},
                _a["ant-tabs"] = true,
                _a["ant-tabs-vertical"] = this.nzTabPosition === 'left' || this.nzTabPosition === 'right',
                _a["ant-tabs-" + this.nzTabPosition] = this.nzTabPosition,
                _a["ant-tabs-no-animation"] = this.nzAnimated === false || this.nzAnimated.tabPane === false,
                _a["ant-tabs-" + this.nzType] = this.nzType,
                _a["ant-tabs-large"] = this.nzSize === 'large',
                _a["ant-tabs-small"] = this.nzSize === 'small',
                _a));
        };
        NzTabSetComponent.prototype.clickLabel = function (index, disabled) {
            if (!disabled) {
                var tabs = this.listOfNzTabComponent.toArray();
                this.nzSelectedIndex = index;
                tabs[index].nzClick.emit();
            }
        };
        NzTabSetComponent.prototype.createChangeEvent = function (index) {
            var event = new NzTabChangeEvent();
            event.index = index;
            if (this.listOfNzTabComponent && this.listOfNzTabComponent.length) {
                event.tab = this.listOfNzTabComponent.toArray()[index];
                this.listOfNzTabComponent.forEach(function (item, i) {
                    if (i !== index) {
                        item.nzDeselect.emit();
                    }
                });
                event.tab.nzSelect.emit();
            }
            return event;
        };
        /** Clamps the given index to the bounds of 0 and the tabs length. */
        NzTabSetComponent.prototype.clampTabIndex = function (index) {
            // Note the `|| 0`, which ensures that values like NaN can't get through
            // and which would otherwise throw the component into an infinite loop
            // (since Math.max(NaN, 0) === NaN).
            return Math.min(this.listOfNzTabComponent.length - 1, Math.max(index || 0, 0));
        };
        NzTabSetComponent.prototype.subscribeToTabLabels = function () {
            var _this = this;
            if (this.tabLabelSubscription) {
                this.tabLabelSubscription.unsubscribe();
            }
            this.tabLabelSubscription = rxjs.merge.apply(void 0, __spread(this.listOfNzTabComponent.map(function (tab) { return tab.stateChanges; }))).subscribe(function () { return _this.cdr.markForCheck(); });
        };
        NzTabSetComponent.prototype.ngOnChanges = function (changes) {
            if (changes.nzTabPosition) {
                if (this.nzTabPosition === 'top' || this.nzTabPosition === 'bottom') {
                    this.tabPositionMode = 'horizontal';
                }
                else {
                    this.tabPositionMode = 'vertical';
                }
                this.setPosition(this.nzTabPosition);
            }
            if (changes.nzType) {
                if (this.nzType === 'card') {
                    this.nzAnimated = false;
                }
            }
            if (changes.nzSize || changes.nzAnimated || changes.nzTabPosition || changes.nzType) {
                this.setClassMap();
            }
        };
        NzTabSetComponent.prototype.ngOnInit = function () {
            this.setClassMap();
        };
        NzTabSetComponent.prototype.ngAfterContentChecked = function () {
            var _this = this;
            if (this.listOfNzTabComponent && this.listOfNzTabComponent.length) {
                // Don't clamp the `indexToSelect` immediately in the setter because it can happen that
                // the amount of tabs changes before the actual change detection runs.
                var indexToSelect_1 = (this.indexToSelect = this.clampTabIndex(this.indexToSelect));
                // If there is a change in selected index, emit a change event. Should not trigger if
                // the selected index has not yet been initialized.
                if (this._selectedIndex !== indexToSelect_1) {
                    var isFirstRun_1 = this._selectedIndex == null;
                    if (!isFirstRun_1) {
                        this.nzSelectChange.emit(this.createChangeEvent(indexToSelect_1));
                    }
                    // Changing these values after change detection has run
                    // since the checked content may contain references to them.
                    Promise.resolve().then(function () {
                        _this.listOfNzTabComponent.forEach(function (tab, index) { return (tab.isActive = index === indexToSelect_1); });
                        if (!isFirstRun_1) {
                            _this.nzSelectedIndexChange.emit(indexToSelect_1);
                        }
                    });
                }
                // Setup the position for each tab and optionally setup an origin on the next selected tab.
                this.listOfNzTabComponent.forEach(function (tab, index) {
                    tab.position = index - indexToSelect_1;
                    // If there is already a selected tab, then set up an origin for the next selected tab
                    // if it doesn't have one already.
                    if (_this._selectedIndex != null && tab.position === 0 && !tab.origin) {
                        tab.origin = indexToSelect_1 - _this._selectedIndex;
                    }
                });
                if (this._selectedIndex !== indexToSelect_1) {
                    this._selectedIndex = indexToSelect_1;
                    this.cdr.markForCheck();
                }
            }
        };
        NzTabSetComponent.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.subscribeToTabLabels();
            // Subscribe to changes in the amount of tabs, in order to be
            // able to re-render the content as new tabs are added or removed.
            this.tabsSubscription = this.listOfNzTabComponent.changes.subscribe(function () {
                var indexToSelect = _this.clampTabIndex(_this.indexToSelect);
                // Maintain the previously-selected tab if a new tab is added or removed and there is no
                // explicit change that selects a different tab.
                if (indexToSelect === _this._selectedIndex) {
                    var tabs = _this.listOfNzTabComponent.toArray();
                    for (var i = 0; i < tabs.length; i++) {
                        if (tabs[i].isActive) {
                            // Assign both to the `_indexToSelect` and `_selectedIndex` so we don't fire a changed
                            // event, otherwise the consumer may end up in an infinite loop in some edge cases like
                            // adding a tab within the `selectedIndexChange` event.
                            _this.indexToSelect = _this._selectedIndex = i;
                            break;
                        }
                    }
                }
                _this.subscribeToTabLabels();
                _this.cdr.markForCheck();
            });
        };
        NzTabSetComponent.prototype.ngOnDestroy = function () {
            this.tabsSubscription.unsubscribe();
            this.tabLabelSubscription.unsubscribe();
            this.destroy$.next();
            this.destroy$.complete();
        };
        NzTabSetComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.setPosition(this.nzTabPosition);
            if (this.nzLinkRouter) {
                if (!this.router) {
                    throw new Error(core$1.PREFIX + " you should import 'RouterModule' if you want to use 'nzLinkRouter'!");
                }
                this.router.events
                    .pipe(operators.takeUntil(this.destroy$), operators.filter(function (e) { return e instanceof router.NavigationEnd; }), operators.startWith(true))
                    .subscribe(function () {
                    _this.updateRouterActive();
                    _this.cdr.markForCheck();
                });
            }
        };
        NzTabSetComponent.prototype.updateRouterActive = function () {
            if (this.router.navigated) {
                var index = this.findShouldActiveTabIndex();
                if (index !== this._selectedIndex) {
                    this.nzSelectedIndex = index;
                    this.nzSelectedIndexChange.emit(index);
                }
                this.nzHideAll = index === -1;
            }
        };
        NzTabSetComponent.prototype.findShouldActiveTabIndex = function () {
            var tabs = this.listOfNzTabComponent.toArray();
            var isActive = this.isLinkActive(this.router);
            return tabs.findIndex(function (tab) {
                var c = tab.linkDirective;
                return c ? isActive(c.routerLink) || isActive(c.routerLinkWithHref) : false;
            });
        };
        NzTabSetComponent.prototype.isLinkActive = function (router) {
            var _this = this;
            return function (link) { return (link ? router.isActive(link.urlTree, _this.nzLinkExact) : false); };
        };
        /** @nocollapse */ NzTabSetComponent.ɵfac = function NzTabSetComponent_Factory(t) { return new (t || NzTabSetComponent)(core.ɵɵdirectiveInject(core$1.NzConfigService), core.ɵɵdirectiveInject(core.Renderer2), core.ɵɵdirectiveInject(core$1.NzUpdateHostClassService), core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(core.ChangeDetectorRef), core.ɵɵdirectiveInject(router.Router, 8)); };
        /** @nocollapse */ NzTabSetComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzTabSetComponent, selectors: [["nz-tabset"]], contentQueries: function NzTabSetComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
                core.ɵɵcontentQuery(dirIndex, NzTabComponent, false);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.listOfNzTabComponent = _t);
            } }, viewQuery: function NzTabSetComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵviewQuery(NzTabsNavComponent, true);
                core.ɵɵviewQuery(_c0$3, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.nzTabsNavComponent = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.tabContent = _t.first);
            } }, inputs: { nzTabBarExtraContent: "nzTabBarExtraContent", nzShowPagination: "nzShowPagination", nzAnimated: "nzAnimated", nzHideAll: "nzHideAll", nzTabPosition: "nzTabPosition", nzSize: "nzSize", nzTabBarGutter: "nzTabBarGutter", nzTabBarStyle: "nzTabBarStyle", nzType: "nzType", nzLinkRouter: "nzLinkRouter", nzLinkExact: "nzLinkExact", nzSelectedIndex: "nzSelectedIndex" }, outputs: { nzOnNextClick: "nzOnNextClick", nzOnPrevClick: "nzOnPrevClick", nzSelectChange: "nzSelectChange", nzSelectedIndexChange: "nzSelectedIndexChange" }, exportAs: ["nzTabset"], features: [core.ɵɵProvidersFeature([core$1.NzUpdateHostClassService]), core.ɵɵNgOnChangesFeature()], decls: 1, vars: 1, consts: [[4, "ngIf"], ["nz-tabs-nav", "", "role", "tablist", "tabindex", "0", 1, "ant-tabs-bar", 3, "nzType", "nzShowPagination", "nzPositionMode", "nzAnimated", "ngStyle", "nzHideBar", "nzTabBarExtraContent", "selectedIndex", "nzOnNextClick", "nzOnPrevClick"], ["nz-tab-label", "", "role", "tab", 3, "margin-right", "ant-tabs-tab-active", "disabled", "click", 4, "ngFor", "ngForOf"], [1, "ant-tabs-content"], ["tabContent", ""], ["nz-tab-body", "", "class", "ant-tabs-tabpane", 3, "active", "forceRender", "content", 4, "ngFor", "ngForOf"], ["nz-tab-label", "", "role", "tab", 3, "disabled", "click"], [4, "nzStringTemplateOutlet"], ["nz-tab-body", "", 1, "ant-tabs-tabpane", 3, "active", "forceRender", "content"]], template: function NzTabSetComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵtemplate(0, NzTabSetComponent_ng_container_0_Template, 6, 26, "ng-container", 0);
            } if (rf & 2) {
                core.ɵɵproperty("ngIf", ctx.listOfNzTabComponent);
            } }, styles: ["\n      nz-tabset {\n        display: block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, true),
            __metadata("design:type", Boolean)
        ], NzTabSetComponent.prototype, "nzShowPagination", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, true),
            __metadata("design:type", Object)
        ], NzTabSetComponent.prototype, "nzAnimated", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, 'default'),
            __metadata("design:type", String)
        ], NzTabSetComponent.prototype, "nzSize", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME),
            __metadata("design:type", Number)
        ], NzTabSetComponent.prototype, "nzTabBarGutter", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, 'line'),
            __metadata("design:type", String)
        ], NzTabSetComponent.prototype, "nzType", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTabSetComponent.prototype, "nzLinkRouter", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTabSetComponent.prototype, "nzLinkExact", void 0);
        return NzTabSetComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzTabSetComponent, [{
            type: core.Component,
            args: [{
                    selector: 'nz-tabset',
                    exportAs: 'nzTabset',
                    preserveWhitespaces: false,
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    providers: [core$1.NzUpdateHostClassService],
                    templateUrl: './nz-tabset.component.html',
                    styles: [
                        "\n      nz-tabset {\n        display: block;\n      }\n    "
                    ]
                }]
        }], function () { return [{ type: core$1.NzConfigService }, { type: core.Renderer2 }, { type: core$1.NzUpdateHostClassService }, { type: core.ElementRef }, { type: core.ChangeDetectorRef }, { type: router.Router, decorators: [{
                    type: core.Optional
                }] }]; }, { listOfNzTabComponent: [{
                type: core.ContentChildren,
                args: [NzTabComponent]
            }], nzTabsNavComponent: [{
                type: core.ViewChild,
                args: [NzTabsNavComponent, { static: false }]
            }], tabContent: [{
                type: core.ViewChild,
                args: ['tabContent', { static: false }]
            }], nzTabBarExtraContent: [{
                type: core.Input
            }], nzShowPagination: [{
                type: core.Input
            }], nzAnimated: [{
                type: core.Input
            }], nzHideAll: [{
                type: core.Input
            }], nzTabPosition: [{
                type: core.Input
            }], nzSize: [{
                type: core.Input
            }], nzTabBarGutter: [{
                type: core.Input
            }], nzTabBarStyle: [{
                type: core.Input
            }], nzType: [{
                type: core.Input
            }], nzLinkRouter: [{
                type: core.Input
            }], nzLinkExact: [{
                type: core.Input
            }], nzOnNextClick: [{
                type: core.Output
            }], nzOnPrevClick: [{
                type: core.Output
            }], nzSelectChange: [{
                type: core.Output
            }], nzSelectedIndexChange: [{
                type: core.Output
            }], nzSelectedIndex: [{
                type: core.Input
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzTabsModule = /** @class */ (function () {
        function NzTabsModule() {
        }
        /** @nocollapse */ NzTabsModule.ɵmod = core.ɵɵdefineNgModule({ type: NzTabsModule });
        /** @nocollapse */ NzTabsModule.ɵinj = core.ɵɵdefineInjector({ factory: function NzTabsModule_Factory(t) { return new (t || NzTabsModule)(); }, imports: [[common.CommonModule, observers.ObserversModule, icon.NzIconModule, core$1.NzAddOnModule, platform.PlatformModule]] });
        return NzTabsModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(NzTabsModule, { declarations: [NzTabComponent,
            NzTabDirective,
            NzTabSetComponent,
            NzTabsNavComponent,
            NzTabLabelDirective,
            NzTabsInkBarDirective,
            NzTabBodyComponent,
            NzTabLinkDirective], imports: [common.CommonModule, observers.ObserversModule, icon.NzIconModule, core$1.NzAddOnModule, platform.PlatformModule], exports: [NzTabComponent,
            NzTabDirective,
            NzTabSetComponent,
            NzTabsNavComponent,
            NzTabLabelDirective,
            NzTabsInkBarDirective,
            NzTabBodyComponent,
            NzTabLinkDirective] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzTabsModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [
                        NzTabComponent,
                        NzTabDirective,
                        NzTabSetComponent,
                        NzTabsNavComponent,
                        NzTabLabelDirective,
                        NzTabsInkBarDirective,
                        NzTabBodyComponent,
                        NzTabLinkDirective
                    ],
                    exports: [
                        NzTabComponent,
                        NzTabDirective,
                        NzTabSetComponent,
                        NzTabsNavComponent,
                        NzTabLabelDirective,
                        NzTabsInkBarDirective,
                        NzTabBodyComponent,
                        NzTabLinkDirective
                    ],
                    imports: [common.CommonModule, observers.ObserversModule, icon.NzIconModule, core$1.NzAddOnModule, platform.PlatformModule]
                }]
        }], null, null); })();
    core.ɵɵsetComponentScope(NzTabSetComponent, [NzTabComponent,
        NzTabDirective,
        NzTabSetComponent,
        NzTabsNavComponent,
        NzTabLabelDirective,
        NzTabsInkBarDirective,
        NzTabBodyComponent,
        NzTabLinkDirective, common.NgClass, common.NgComponentOutlet, common.NgForOf, common.NgIf, common.NgTemplateOutlet, common.NgStyle, common.NgSwitch, common.NgSwitchCase, common.NgSwitchDefault, common.NgPlural, common.NgPluralCase, observers.CdkObserveContent, icon.NzIconDirective, core$1.NzStringTemplateOutletDirective, core$1.NzClassListAddDirective], [common.AsyncPipe, common.UpperCasePipe, common.LowerCasePipe, common.JsonPipe, common.SlicePipe, common.DecimalPipe, common.PercentPipe, common.TitleCasePipe, common.CurrencyPipe, common.DatePipe, common.I18nPluralPipe, common.I18nSelectPipe, common.KeyValuePipe]);
    core.ɵɵsetComponentScope(NzTabsNavComponent, [NzTabComponent,
        NzTabDirective,
        NzTabSetComponent,
        NzTabsNavComponent,
        NzTabLabelDirective,
        NzTabsInkBarDirective,
        NzTabBodyComponent,
        NzTabLinkDirective, common.NgClass, common.NgComponentOutlet, common.NgForOf, common.NgIf, common.NgTemplateOutlet, common.NgStyle, common.NgSwitch, common.NgSwitchCase, common.NgSwitchDefault, common.NgPlural, common.NgPluralCase, observers.CdkObserveContent, icon.NzIconDirective, core$1.NzStringTemplateOutletDirective, core$1.NzClassListAddDirective], [common.AsyncPipe, common.UpperCasePipe, common.LowerCasePipe, common.JsonPipe, common.SlicePipe, common.DecimalPipe, common.PercentPipe, common.TitleCasePipe, common.CurrencyPipe, common.DatePipe, common.I18nPluralPipe, common.I18nSelectPipe, common.KeyValuePipe]);

    exports.NzTabBodyComponent = NzTabBodyComponent;
    exports.NzTabChangeEvent = NzTabChangeEvent;
    exports.NzTabComponent = NzTabComponent;
    exports.NzTabDirective = NzTabDirective;
    exports.NzTabLabelDirective = NzTabLabelDirective;
    exports.NzTabLinkDirective = NzTabLinkDirective;
    exports.NzTabSetComponent = NzTabSetComponent;
    exports.NzTabsInkBarDirective = NzTabsInkBarDirective;
    exports.NzTabsModule = NzTabsModule;
    exports.NzTabsNavComponent = NzTabsNavComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-tabs.umd.js.map

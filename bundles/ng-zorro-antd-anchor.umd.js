(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('ng-zorro-antd/core'),require('@angular/cdk/platform'),require('@angular/common'),require('ng-zorro-antd/affix'),exports, require('@angular/cdk/platform'), require('@angular/core'), require('@angular/common'), require('rxjs'), require('rxjs/operators'), require('ng-zorro-antd/core'), require('ng-zorro-antd/affix')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/anchor', ['@angular/core','ng-zorro-antd/core','@angular/cdk/platform','@angular/common','ng-zorro-antd/affix','exports', '@angular/cdk/platform', '@angular/core', '@angular/common', 'rxjs', 'rxjs/operators', 'ng-zorro-antd/core', 'ng-zorro-antd/affix'], factory) :
    (global = global || self, factory(global.ng.core,global.ngZorroAntd.core,global.ng.cdk.platform,global.ng.common,global.ngZorroAntd.affix,(global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].anchor = {}), global.ng.cdk.platform, global.ng.core, global.ng.common, global.rxjs, global.rxjs.operators, global['ng-zorro-antd'].core, global['ng-zorro-antd'].affix));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,ɵngcc4,exports, platform, core, common, rxjs, operators, core$1, affix) { 
var _c0 = ["ink"];
function NzAnchorComponent_nz_affix_0_ng_template_1_Template(rf, ctx) { }
function NzAnchorComponent_nz_affix_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "nz-affix", 2);
    ɵngcc0.ɵɵtemplate(1, NzAnchorComponent_nz_affix_0_ng_template_1_Template, 0, 0, "ng-template", 3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    var _r1 = ɵngcc0.ɵɵreference(2);
    ɵngcc0.ɵɵproperty("nzOffsetTop", ctx_r0.nzOffsetTop);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r1);
} }
var _c1 = function (a0) { return { "fixed": a0 }; };
function NzAnchorComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 4);
    ɵngcc0.ɵɵelementStart(1, "div", 5);
    ɵngcc0.ɵɵelementStart(2, "div", 6);
    ɵngcc0.ɵɵelement(3, "div", 7, 8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵprojection(5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r2.wrapperStyle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(4, _c1, !ctx_r2.nzAffix && !ctx_r2.nzShowInkInFixed));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵclassProp("visible", ctx_r2.visible);
} }
var _c2 = ["*"];
var _c3 = ["nzTemplate"];
function NzAnchorLinkComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.titleStr);
} }
'use strict';

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
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function Section() { }
    if (false) {
        /** @type {?} */
        Section.prototype.comp;
        /** @type {?} */
        Section.prototype.top;
    }
    /** @type {?} */
    var NZ_CONFIG_COMPONENT_NAME = 'anchor';
    /** @type {?} */
    var sharpMatcherRegx = /#([^#]+)$/;
    var NzAnchorComponent = /** @class */ (function () {
        function NzAnchorComponent(nzConfigService, scrollSrv, doc, cdr, platform) {
            this.nzConfigService = nzConfigService;
            this.scrollSrv = scrollSrv;
            this.doc = doc;
            this.cdr = cdr;
            this.platform = platform;
            this.nzAffix = true;
            this.nzClick = new core.EventEmitter();
            this.nzScroll = new core.EventEmitter();
            this.visible = false;
            this.wrapperStyle = { 'max-height': '100vh' };
            this.links = [];
            this.animating = false;
            this.target = null;
            this.scroll$ = null;
            this.destroyed = false;
        }
        Object.defineProperty(NzAnchorComponent.prototype, "nzOffsetTop", {
            get: /**
             * @return {?}
             */
            function () {
                return this._offsetTop;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._offsetTop = core$1.toNumber(value, 0);
                this.wrapperStyle = {
                    'max-height': "calc(100vh - " + this._offsetTop + "px)"
                };
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzAnchorComponent.prototype, "nzTarget", {
            set: /**
             * @param {?} el
             * @return {?}
             */
            function (el) {
                this.target = typeof el === 'string' ? this.doc.querySelector(el) : el;
                this.registerScrollEvent();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} link
         * @return {?}
         */
        NzAnchorComponent.prototype.registerLink = /**
         * @param {?} link
         * @return {?}
         */
        function (link) {
            this.links.push(link);
        };
        /**
         * @param {?} link
         * @return {?}
         */
        NzAnchorComponent.prototype.unregisterLink = /**
         * @param {?} link
         * @return {?}
         */
        function (link) {
            this.links.splice(this.links.indexOf(link), 1);
        };
        /**
         * @private
         * @return {?}
         */
        NzAnchorComponent.prototype.getTarget = /**
         * @private
         * @return {?}
         */
        function () {
            return this.target || window;
        };
        /**
         * @return {?}
         */
        NzAnchorComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            this.registerScrollEvent();
        };
        /**
         * @return {?}
         */
        NzAnchorComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.destroyed = true;
            this.removeListen();
        };
        /**
         * @private
         * @return {?}
         */
        NzAnchorComponent.prototype.registerScrollEvent = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            if (!this.platform.isBrowser) {
                return;
            }
            this.removeListen();
            this.scroll$ = rxjs.fromEvent(this.getTarget(), 'scroll')
                .pipe(operators.throttleTime(50), operators.distinctUntilChanged())
                .subscribe((/**
             * @return {?}
             */
            function () { return _this.handleScroll(); }));
            // Browser would maintain the scrolling position when refreshing.
            // So we have to delay calculation in avoid of getting a incorrect result.
            setTimeout((/**
             * @return {?}
             */
            function () { return _this.handleScroll(); }));
        };
        /**
         * @private
         * @return {?}
         */
        NzAnchorComponent.prototype.removeListen = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.scroll$) {
                this.scroll$.unsubscribe();
            }
        };
        /**
         * @private
         * @param {?} element
         * @return {?}
         */
        NzAnchorComponent.prototype.getOffsetTop = /**
         * @private
         * @param {?} element
         * @return {?}
         */
        function (element) {
            if (!element || !element.getClientRects().length) {
                return 0;
            }
            /** @type {?} */
            var rect = element.getBoundingClientRect();
            if (rect.width || rect.height) {
                if (this.getTarget() === window) {
                    return rect.top - (/** @type {?} */ ((/** @type {?} */ (element.ownerDocument)).documentElement)).clientTop;
                }
                return rect.top - ((/** @type {?} */ (this.getTarget()))).getBoundingClientRect().top;
            }
            return rect.top;
        };
        /**
         * @return {?}
         */
        NzAnchorComponent.prototype.handleScroll = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (typeof document === 'undefined' || this.destroyed || this.animating) {
                return;
            }
            /** @type {?} */
            var sections = [];
            /** @type {?} */
            var scope = (this.nzOffsetTop || 0) + this.nzBounds;
            this.links.forEach((/**
             * @param {?} comp
             * @return {?}
             */
            function (comp) {
                /** @type {?} */
                var sharpLinkMatch = sharpMatcherRegx.exec(comp.nzHref.toString());
                if (!sharpLinkMatch) {
                    return;
                }
                /** @type {?} */
                var target = _this.doc.getElementById(sharpLinkMatch[1]);
                if (target) {
                    /** @type {?} */
                    var top_1 = _this.getOffsetTop(target);
                    if (top_1 < scope) {
                        sections.push({
                            top: top_1,
                            comp: comp
                        });
                    }
                }
            }));
            this.visible = !!sections.length;
            if (!this.visible) {
                this.clearActive();
                this.cdr.detectChanges();
            }
            else {
                /** @type {?} */
                var maxSection = sections.reduce((/**
                 * @param {?} prev
                 * @param {?} curr
                 * @return {?}
                 */
                function (prev, curr) { return (curr.top > prev.top ? curr : prev); }));
                this.handleActive(maxSection.comp);
            }
        };
        /**
         * @private
         * @return {?}
         */
        NzAnchorComponent.prototype.clearActive = /**
         * @private
         * @return {?}
         */
        function () {
            this.links.forEach((/**
             * @param {?} i
             * @return {?}
             */
            function (i) {
                i.active = false;
                i.markForCheck();
            }));
        };
        /**
         * @private
         * @param {?} comp
         * @return {?}
         */
        NzAnchorComponent.prototype.handleActive = /**
         * @private
         * @param {?} comp
         * @return {?}
         */
        function (comp) {
            this.clearActive();
            comp.active = true;
            comp.markForCheck();
            /** @type {?} */
            var linkNode = (/** @type {?} */ (((/** @type {?} */ (comp.elementRef.nativeElement))).querySelector('.ant-anchor-link-title')));
            this.ink.nativeElement.style.top = linkNode.offsetTop + linkNode.clientHeight / 2 - 4.5 + "px";
            this.visible = true;
            this.cdr.detectChanges();
            this.nzScroll.emit(comp);
        };
        /**
         * @param {?} linkComp
         * @return {?}
         */
        NzAnchorComponent.prototype.handleScrollTo = /**
         * @param {?} linkComp
         * @return {?}
         */
        function (linkComp) {
            var _this = this;
            /** @type {?} */
            var el = this.doc.querySelector(linkComp.nzHref);
            if (!el) {
                return;
            }
            this.animating = true;
            /** @type {?} */
            var containerScrollTop = this.scrollSrv.getScroll(this.getTarget());
            /** @type {?} */
            var elOffsetTop = this.getOffsetTop(el);
            /** @type {?} */
            var targetScrollTop = containerScrollTop + elOffsetTop - (this.nzOffsetTop || 0);
            this.scrollSrv.scrollTo(this.getTarget(), targetScrollTop, undefined, (/**
             * @return {?}
             */
            function () {
                _this.animating = false;
                _this.handleActive(linkComp);
            }));
            this.nzClick.emit(linkComp.nzHref);
        };
        /** @nocollapse */
        NzAnchorComponent.ctorParameters = function () { return [
            { type: core$1.NzConfigService },
            { type: core$1.NzScrollService },
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: core.ChangeDetectorRef },
            { type: platform.Platform }
        ]; };
        NzAnchorComponent.propDecorators = {
            ink: [{ type: core.ViewChild, args: ['ink', { static: false },] }],
            nzAffix: [{ type: core.Input }],
            nzShowInkInFixed: [{ type: core.Input }],
            nzBounds: [{ type: core.Input }],
            nzOffsetTop: [{ type: core.Input }],
            nzTarget: [{ type: core.Input }],
            nzClick: [{ type: core.Output }],
            nzScroll: [{ type: core.Output }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzAnchorComponent.prototype, "nzAffix", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, false),
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzAnchorComponent.prototype, "nzShowInkInFixed", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, 5),
            core$1.InputNumber(),
            __metadata("design:type", Number)
        ], NzAnchorComponent.prototype, "nzBounds", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME),
            __metadata("design:type", Number),
            __metadata("design:paramtypes", [Number])
        ], NzAnchorComponent.prototype, "nzOffsetTop", null);
NzAnchorComponent.ɵfac = function NzAnchorComponent_Factory(t) { return new (t || NzAnchorComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzConfigService), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzScrollService), ɵngcc0.ɵɵdirectiveInject(common.DOCUMENT), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Platform)); };
NzAnchorComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzAnchorComponent, selectors: [["nz-anchor"]], viewQuery: function NzAnchorComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.ink = _t.first);
    } }, inputs: { nzAffix: "nzAffix", nzOffsetTop: "nzOffsetTop", nzTarget: "nzTarget", nzShowInkInFixed: "nzShowInkInFixed", nzBounds: "nzBounds" }, outputs: { nzClick: "nzClick", nzScroll: "nzScroll" }, exportAs: ["nzAnchor"], ngContentSelectors: _c2, decls: 3, vars: 2, consts: [[3, "nzOffsetTop", 4, "ngIf", "ngIfElse"], ["content", ""], [3, "nzOffsetTop"], [3, "ngTemplateOutlet"], [1, "ant-anchor-wrapper", 3, "ngStyle"], [1, "ant-anchor", 3, "ngClass"], [1, "ant-anchor-ink"], [1, "ant-anchor-ink-ball"], ["ink", ""]], template: function NzAnchorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, NzAnchorComponent_nz_affix_0_Template, 2, 2, "nz-affix", 0);
        ɵngcc0.ɵɵtemplate(1, NzAnchorComponent_ng_template_1_Template, 6, 6, "ng-template", null, 1, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        var _r1 = ɵngcc0.ɵɵreference(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzAffix)("ngIfElse", _r1);
    } }, directives: [ɵngcc3.NgIf, ɵngcc4.NzAffixComponent, ɵngcc3.NgTemplateOutlet, ɵngcc3.NgStyle, ɵngcc3.NgClass], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzAnchorComponent, [{
        type: core.Component,
        args: [{
                selector: 'nz-anchor',
                exportAs: 'nzAnchor',
                preserveWhitespaces: false,
                template: "<nz-affix *ngIf=\"nzAffix;else content\" [nzOffsetTop]=\"nzOffsetTop\">\r\n  <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\r\n</nz-affix>\r\n<ng-template #content>\r\n  <div class=\"ant-anchor-wrapper\" [ngStyle]=\"wrapperStyle\">\r\n    <div class=\"ant-anchor\" [ngClass]=\"{'fixed': !nzAffix && !nzShowInkInFixed}\">\r\n      <div class=\"ant-anchor-ink\">\r\n        <div class=\"ant-anchor-ink-ball\" [class.visible]=\"visible\" #ink></div>\r\n      </div>\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n</ng-template>",
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ɵngcc1.NzConfigService }, { type: ɵngcc1.NzScrollService }, { type: undefined, decorators: [{
                type: core.Inject,
                args: [common.DOCUMENT]
            }] }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc2.Platform }]; }, { nzAffix: [{
            type: core.Input
        }], nzClick: [{
            type: core.Output
        }], nzScroll: [{
            type: core.Output
        }], nzOffsetTop: [{
            type: core.Input
        }], nzTarget: [{
            type: core.Input
        }], ink: [{
            type: core.ViewChild,
            args: ['ink', { static: false }]
        }], nzShowInkInFixed: [{
            type: core.Input
        }], nzBounds: [{
            type: core.Input
        }] }); })();
        return NzAnchorComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        NzAnchorComponent.prototype.ink;
        /** @type {?} */
        NzAnchorComponent.prototype.nzAffix;
        /** @type {?} */
        NzAnchorComponent.prototype.nzShowInkInFixed;
        /** @type {?} */
        NzAnchorComponent.prototype.nzBounds;
        /**
         * @type {?}
         * @private
         */
        NzAnchorComponent.prototype._offsetTop;
        /** @type {?} */
        NzAnchorComponent.prototype.nzClick;
        /** @type {?} */
        NzAnchorComponent.prototype.nzScroll;
        /** @type {?} */
        NzAnchorComponent.prototype.visible;
        /** @type {?} */
        NzAnchorComponent.prototype.wrapperStyle;
        /**
         * @type {?}
         * @private
         */
        NzAnchorComponent.prototype.links;
        /**
         * @type {?}
         * @private
         */
        NzAnchorComponent.prototype.animating;
        /**
         * @type {?}
         * @private
         */
        NzAnchorComponent.prototype.target;
        /**
         * @type {?}
         * @private
         */
        NzAnchorComponent.prototype.scroll$;
        /**
         * @type {?}
         * @private
         */
        NzAnchorComponent.prototype.destroyed;
        /** @type {?} */
        NzAnchorComponent.prototype.nzConfigService;
        /**
         * @type {?}
         * @private
         */
        NzAnchorComponent.prototype.scrollSrv;
        /**
         * @type {?}
         * @private
         */
        NzAnchorComponent.prototype.doc;
        /**
         * @type {?}
         * @private
         */
        NzAnchorComponent.prototype.cdr;
        /**
         * @type {?}
         * @private
         */
        NzAnchorComponent.prototype.platform;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzAnchorLinkComponent = /** @class */ (function () {
        function NzAnchorLinkComponent(elementRef, anchorComp, cdr, platform, renderer) {
            this.elementRef = elementRef;
            this.anchorComp = anchorComp;
            this.cdr = cdr;
            this.platform = platform;
            this.nzHref = '#';
            this.titleStr = '';
            this.active = false;
            renderer.addClass(elementRef.nativeElement, 'ant-anchor-link');
        }
        Object.defineProperty(NzAnchorLinkComponent.prototype, "nzTitle", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (value instanceof core.TemplateRef) {
                    this.titleStr = null;
                    this.titleTpl = value;
                }
                else {
                    this.titleStr = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NzAnchorLinkComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.anchorComp.registerLink(this);
        };
        /**
         * @param {?} e
         * @return {?}
         */
        NzAnchorLinkComponent.prototype.goToClick = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            e.preventDefault();
            e.stopPropagation();
            if (this.platform.isBrowser) {
                this.anchorComp.handleScrollTo(this);
            }
        };
        /**
         * @return {?}
         */
        NzAnchorLinkComponent.prototype.markForCheck = /**
         * @return {?}
         */
        function () {
            this.cdr.markForCheck();
        };
        /**
         * @return {?}
         */
        NzAnchorLinkComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.anchorComp.unregisterLink(this);
        };
        /** @nocollapse */
        NzAnchorLinkComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: NzAnchorComponent },
            { type: core.ChangeDetectorRef },
            { type: platform.Platform },
            { type: core.Renderer2 }
        ]; };
        NzAnchorLinkComponent.propDecorators = {
            nzHref: [{ type: core.Input }],
            nzTitle: [{ type: core.Input }],
            nzTemplate: [{ type: core.ContentChild, args: ['nzTemplate', { static: false },] }]
        };
NzAnchorLinkComponent.ɵfac = function NzAnchorLinkComponent_Factory(t) { return new (t || NzAnchorLinkComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(NzAnchorComponent), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Platform), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2)); };
NzAnchorLinkComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzAnchorLinkComponent, selectors: [["nz-link"]], contentQueries: function NzAnchorLinkComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, _c3, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nzTemplate = _t.first);
    } }, hostVars: 2, hostBindings: function NzAnchorLinkComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-anchor-link-active", ctx.active);
    } }, inputs: { nzHref: "nzHref", nzTitle: "nzTitle" }, exportAs: ["nzLink"], ngContentSelectors: _c2, decls: 3, vars: 4, consts: [[1, "ant-anchor-link-title", 3, "href", "title", "click"], [4, "ngIf", "ngIfElse"]], template: function NzAnchorLinkComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "a", 0);
        ɵngcc0.ɵɵlistener("click", function NzAnchorLinkComponent_Template_a_click_0_listener($event) { return ctx.goToClick($event); });
        ɵngcc0.ɵɵtemplate(1, NzAnchorLinkComponent_span_1_Template, 2, 1, "span", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵprojection(2);
    } if (rf & 2) {
        ɵngcc0.ɵɵpropertyInterpolate("href", ctx.nzHref, ɵngcc0.ɵɵsanitizeUrl);
        ɵngcc0.ɵɵpropertyInterpolate("title", ctx.titleStr);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.titleStr)("ngIfElse", ctx.titleTpl || ctx.nzTemplate);
    } }, directives: [ɵngcc3.NgIf], styles: ["\n      nz-link {\n        display: block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzAnchorLinkComponent, [{
        type: core.Component,
        args: [{
                selector: 'nz-link',
                exportAs: 'nzLink',
                preserveWhitespaces: false,
                template: "<a (click)=\"goToClick($event)\" href=\"{{nzHref}}\" class=\"ant-anchor-link-title\" title=\"{{titleStr}}\">\r\n  <span *ngIf=\"titleStr; else (titleTpl || nzTemplate)\">{{ titleStr }}</span>\r\n</a>\r\n<ng-content></ng-content>",
                host: {
                    '[class.ant-anchor-link-active]': 'active'
                },
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                styles: ["\n      nz-link {\n        display: block;\n      }\n    "]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: NzAnchorComponent }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc2.Platform }, { type: ɵngcc0.Renderer2 }]; }, { nzHref: [{
            type: core.Input
        }], nzTitle: [{
            type: core.Input
        }], nzTemplate: [{
            type: core.ContentChild,
            args: ['nzTemplate', { static: false }]
        }] }); })();
        return NzAnchorLinkComponent;
    }());
    if (false) {
        /** @type {?} */
        NzAnchorLinkComponent.prototype.nzHref;
        /** @type {?} */
        NzAnchorLinkComponent.prototype.titleStr;
        /** @type {?} */
        NzAnchorLinkComponent.prototype.titleTpl;
        /** @type {?} */
        NzAnchorLinkComponent.prototype.active;
        /** @type {?} */
        NzAnchorLinkComponent.prototype.nzTemplate;
        /** @type {?} */
        NzAnchorLinkComponent.prototype.elementRef;
        /**
         * @type {?}
         * @private
         */
        NzAnchorLinkComponent.prototype.anchorComp;
        /**
         * @type {?}
         * @private
         */
        NzAnchorLinkComponent.prototype.cdr;
        /**
         * @type {?}
         * @private
         */
        NzAnchorLinkComponent.prototype.platform;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzAnchorModule = /** @class */ (function () {
        function NzAnchorModule() {
        }
NzAnchorModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzAnchorModule });
NzAnchorModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzAnchorModule_Factory(t) { return new (t || NzAnchorModule)(); }, providers: [core$1.SCROLL_SERVICE_PROVIDER], imports: [[common.CommonModule, affix.NzAffixModule, platform.PlatformModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzAnchorModule, { declarations: [NzAnchorComponent,
        NzAnchorLinkComponent], imports: [ɵngcc3.CommonModule, ɵngcc4.NzAffixModule, ɵngcc2.PlatformModule], exports: [NzAnchorComponent,
        NzAnchorLinkComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzAnchorModule, [{
        type: core.NgModule,
        args: [{
                declarations: [NzAnchorComponent, NzAnchorLinkComponent],
                exports: [NzAnchorComponent, NzAnchorLinkComponent],
                imports: [common.CommonModule, affix.NzAffixModule, platform.PlatformModule],
                providers: [core$1.SCROLL_SERVICE_PROVIDER]
            }]
    }], function () { return []; }, null); })();
        return NzAnchorModule;
    }());

    exports.NzAnchorComponent = NzAnchorComponent;
    exports.NzAnchorLinkComponent = NzAnchorLinkComponent;
    exports.NzAnchorModule = NzAnchorModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));


//# sourceMappingURL=ng-zorro-antd-anchor.umd.js.map
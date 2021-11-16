(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('ng-zorro-antd/core'),require('@angular/cdk/platform'),require('@angular/common'),exports, require('@angular/cdk/platform'), require('@angular/common'), require('@angular/core'), require('@angular/cdk/keycodes'), require('rxjs'), require('rxjs/operators'), require('ng-zorro-antd/core')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/carousel', ['@angular/core','ng-zorro-antd/core','@angular/cdk/platform','@angular/common','exports', '@angular/cdk/platform', '@angular/common', '@angular/core', '@angular/cdk/keycodes', 'rxjs', 'rxjs/operators', 'ng-zorro-antd/core'], factory) :
    (global = global || self, factory(global.ng.core,global.ngZorroAntd.core,global.ng.cdk.platform,global.ng.common,(global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].carousel = {}), global.ng.cdk.platform, global.ng.common, global.ng.core, global.ng.cdk.keycodes, global.rxjs, global.rxjs.operators, global['ng-zorro-antd'].core));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,exports, platform, common, core, keycodes, rxjs, operators, core$1) { 
var _c0 = ["slickList"];
var _c1 = ["slickTrack"];
function NzCarouselComponent_ul_6_li_1_ng_template_1_Template(rf, ctx) { }
var _c2 = function (a0) { return { $implicit: a0 }; };
function NzCarouselComponent_ul_6_li_1_Template(rf, ctx) { if (rf & 1) {
    var _r10 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 9);
    ɵngcc0.ɵɵlistener("click", function NzCarouselComponent_ul_6_li_1_Template_li_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r10); var i_r7 = ctx.index; var ctx_r9 = ɵngcc0.ɵɵnextContext(2); return ctx_r9.goTo(i_r7); });
    ɵngcc0.ɵɵtemplate(1, NzCarouselComponent_ul_6_li_1_ng_template_1_Template, 0, 0, "ng-template", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var content_r6 = ctx.$implicit;
    var i_r7 = ctx.index;
    var ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    var _r3 = ɵngcc0.ɵɵreference(8);
    ɵngcc0.ɵɵclassProp("slick-active", content_r6.isActive);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r5.nzDotRender || _r3)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(4, _c2, i_r7));
} }
function NzCarouselComponent_ul_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "ul", 7);
    ɵngcc0.ɵɵtemplate(1, NzCarouselComponent_ul_6_li_1_Template, 2, 6, "li", 8);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("slick-dots-top", ctx_r2.nzDotPosition === "top")("slick-dots-bottom", ctx_r2.nzDotPosition === "bottom")("slick-dots-left", ctx_r2.nzDotPosition === "left")("slick-dots-right", ctx_r2.nzDotPosition === "right");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r2.carouselContents);
} }
function NzCarouselComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "button");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var index_r11 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(index_r11 + 1);
} }
var _c3 = ["*"];
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
    var NzCarouselContentDirective = /** @class */ (function () {
        function NzCarouselContentDirective(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.el = this.elementRef.nativeElement;
            this._active = false;
            renderer.addClass(elementRef.nativeElement, 'slick-slide');
        }
        Object.defineProperty(NzCarouselContentDirective.prototype, "isActive", {
            get: /**
             * @return {?}
             */
            function () {
                return this._active;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._active = value;
                if (this.isActive) {
                    this.renderer.addClass(this.el, 'slick-active');
                }
                else {
                    this.renderer.removeClass(this.el, 'slick-active');
                }
            },
            enumerable: true,
            configurable: true
        });
        /** @nocollapse */
        NzCarouselContentDirective.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
NzCarouselContentDirective.ɵfac = function NzCarouselContentDirective_Factory(t) { return new (t || NzCarouselContentDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2)); };
NzCarouselContentDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzCarouselContentDirective, selectors: [["", "nz-carousel-content", ""]], exportAs: ["nzCarouselContent"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCarouselContentDirective, [{
        type: core.Directive,
        args: [{
                selector: '[nz-carousel-content]',
                exportAs: 'nzCarouselContent'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }]; }, null); })();
        return NzCarouselContentDirective;
    }());
    if (false) {
        /** @type {?} */
        NzCarouselContentDirective.prototype.el;
        /**
         * @type {?}
         * @private
         */
        NzCarouselContentDirective.prototype._active;
        /**
         * @type {?}
         * @private
         */
        NzCarouselContentDirective.prototype.elementRef;
        /**
         * @type {?}
         * @private
         */
        NzCarouselContentDirective.prototype.renderer;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function NzCarouselComponentAsSource() { }
    if (false) {
        /** @type {?} */
        NzCarouselComponentAsSource.prototype.carouselContents;
        /** @type {?} */
        NzCarouselComponentAsSource.prototype.el;
        /** @type {?} */
        NzCarouselComponentAsSource.prototype.nzTransitionSpeed;
        /** @type {?} */
        NzCarouselComponentAsSource.prototype.vertical;
        /** @type {?} */
        NzCarouselComponentAsSource.prototype.slickListEl;
        /** @type {?} */
        NzCarouselComponentAsSource.prototype.slickTrackEl;
        /** @type {?} */
        NzCarouselComponentAsSource.prototype.activeIndex;
    }
    /**
     * @record
     */
    function NzCarouselStrategyRegistryItem() { }
    if (false) {
        /** @type {?} */
        NzCarouselStrategyRegistryItem.prototype.name;
        /** @type {?} */
        NzCarouselStrategyRegistryItem.prototype.strategy;
    }
    /** @type {?} */
    var NZ_CAROUSEL_CUSTOM_STRATEGIES = new core.InjectionToken('nz-carousel-custom-strategies');
    /**
     * @record
     */
    function PointerVector() { }
    if (false) {
        /** @type {?} */
        PointerVector.prototype.x;
        /** @type {?} */
        PointerVector.prototype.y;
    }
    /**
     * @record
     */
    function FromToInterface() { }
    if (false) {
        /** @type {?} */
        FromToInterface.prototype.from;
        /** @type {?} */
        FromToInterface.prototype.to;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    /**
     * @abstract
     */
    var   /**
     * @abstract
     */
    NzCarouselBaseStrategy = /** @class */ (function () {
        function NzCarouselBaseStrategy(carouselComponent, cdr, renderer) {
            this.cdr = cdr;
            this.renderer = renderer;
            this.carouselComponent = carouselComponent;
        }
        Object.defineProperty(NzCarouselBaseStrategy.prototype, "maxIndex", {
            get: /**
             * @protected
             * @return {?}
             */
            function () {
                return this.length - 1;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzCarouselBaseStrategy.prototype, "firstEl", {
            get: /**
             * @protected
             * @return {?}
             */
            function () {
                return this.contents[0].el;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzCarouselBaseStrategy.prototype, "lastEl", {
            get: /**
             * @protected
             * @return {?}
             */
            function () {
                return this.contents[this.maxIndex].el;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Initialize dragging sequences.
         * @param contents
         */
        /**
         * Initialize dragging sequences.
         * @param {?} contents
         * @return {?}
         */
        NzCarouselBaseStrategy.prototype.withCarouselContents = /**
         * Initialize dragging sequences.
         * @param {?} contents
         * @return {?}
         */
        function (contents) {
            // TODO: carousel and its contents should be separated.
            /** @type {?} */
            var carousel = (/** @type {?} */ (this.carouselComponent));
            /** @type {?} */
            var rect = carousel.el.getBoundingClientRect();
            this.slickListEl = carousel.slickListEl;
            this.slickTrackEl = carousel.slickTrackEl;
            this.unitWidth = rect.width;
            this.unitHeight = rect.height;
            this.contents = contents ? contents.toArray() : [];
            this.length = this.contents.length;
        };
        /**
         * When user drag the carousel component.
         * @optional
         */
        /**
         * When user drag the carousel component.
         * \@optional
         * @param {?} _vector
         * @return {?}
         */
        NzCarouselBaseStrategy.prototype.dragging = /**
         * When user drag the carousel component.
         * \@optional
         * @param {?} _vector
         * @return {?}
         */
        function (_vector) { };
        /**
         * Destroy a scroll strategy.
         */
        /**
         * Destroy a scroll strategy.
         * @return {?}
         */
        NzCarouselBaseStrategy.prototype.dispose = /**
         * Destroy a scroll strategy.
         * @return {?}
         */
        function () { };
        /**
         * @protected
         * @param {?} f
         * @param {?} t
         * @return {?}
         */
        NzCarouselBaseStrategy.prototype.getFromToInBoundary = /**
         * @protected
         * @param {?} f
         * @param {?} t
         * @return {?}
         */
        function (f, t) {
            /** @type {?} */
            var length = this.maxIndex + 1;
            return { from: (f + length) % length, to: (t + length) % length };
        };
        return NzCarouselBaseStrategy;
    }());
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        NzCarouselBaseStrategy.prototype.carouselComponent;
        /**
         * @type {?}
         * @protected
         */
        NzCarouselBaseStrategy.prototype.contents;
        /**
         * @type {?}
         * @protected
         */
        NzCarouselBaseStrategy.prototype.slickListEl;
        /**
         * @type {?}
         * @protected
         */
        NzCarouselBaseStrategy.prototype.slickTrackEl;
        /**
         * @type {?}
         * @protected
         */
        NzCarouselBaseStrategy.prototype.length;
        /**
         * @type {?}
         * @protected
         */
        NzCarouselBaseStrategy.prototype.unitWidth;
        /**
         * @type {?}
         * @protected
         */
        NzCarouselBaseStrategy.prototype.unitHeight;
        /**
         * @type {?}
         * @protected
         */
        NzCarouselBaseStrategy.prototype.cdr;
        /**
         * @type {?}
         * @protected
         */
        NzCarouselBaseStrategy.prototype.renderer;
        /**
         * Trigger transition.
         * @abstract
         * @param {?} _f
         * @param {?} _t
         * @return {?}
         */
        NzCarouselBaseStrategy.prototype.switch = function (_f, _t) { };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzCarouselOpacityStrategy = /** @class */ (function (_super) {
        __extends(NzCarouselOpacityStrategy, _super);
        function NzCarouselOpacityStrategy() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {?} contents
         * @return {?}
         */
        NzCarouselOpacityStrategy.prototype.withCarouselContents = /**
         * @param {?} contents
         * @return {?}
         */
        function (contents) {
            var _this = this;
            _super.prototype.withCarouselContents.call(this, contents);
            if (this.contents) {
                this.slickTrackEl.style.width = this.length * this.unitWidth + "px";
                this.contents.forEach((/**
                 * @param {?} content
                 * @param {?} i
                 * @return {?}
                 */
                function (content, i) {
                    _this.renderer.setStyle(content.el, 'opacity', (/** @type {?} */ (_this.carouselComponent)).activeIndex === i ? '1' : '0');
                    _this.renderer.setStyle(content.el, 'position', 'relative');
                    _this.renderer.setStyle(content.el, 'width', _this.unitWidth + "px");
                    _this.renderer.setStyle(content.el, 'left', -_this.unitWidth * i + "px");
                    _this.renderer.setStyle(content.el, 'transition', ['opacity 500ms ease 0s', 'visibility 500ms ease 0s']);
                }));
            }
        };
        /**
         * @param {?} _f
         * @param {?} _t
         * @return {?}
         */
        NzCarouselOpacityStrategy.prototype.switch = /**
         * @param {?} _f
         * @param {?} _t
         * @return {?}
         */
        function (_f, _t) {
            var _this = this;
            var t = this.getFromToInBoundary(_f, _t).to;
            /** @type {?} */
            var complete$ = new rxjs.Subject();
            this.contents.forEach((/**
             * @param {?} content
             * @param {?} i
             * @return {?}
             */
            function (content, i) {
                _this.renderer.setStyle(content.el, 'opacity', t === i ? '1' : '0');
            }));
            setTimeout((/**
             * @return {?}
             */
            function () {
                complete$.next();
                complete$.complete();
            }), (/** @type {?} */ (this.carouselComponent)).nzTransitionSpeed);
            return complete$;
        };
        /**
         * @return {?}
         */
        NzCarouselOpacityStrategy.prototype.dispose = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.contents.forEach((/**
             * @param {?} content
             * @return {?}
             */
            function (content) {
                _this.renderer.setStyle(content.el, 'transition', null);
            }));
            _super.prototype.dispose.call(this);
        };
        return NzCarouselOpacityStrategy;
    }(NzCarouselBaseStrategy));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzCarouselTransformStrategy = /** @class */ (function (_super) {
        __extends(NzCarouselTransformStrategy, _super);
        function NzCarouselTransformStrategy() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.isDragging = false;
            _this.isTransitioning = false;
            return _this;
        }
        Object.defineProperty(NzCarouselTransformStrategy.prototype, "vertical", {
            get: /**
             * @private
             * @return {?}
             */
            function () {
                return (/** @type {?} */ (this.carouselComponent)).vertical;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NzCarouselTransformStrategy.prototype.dispose = /**
         * @return {?}
         */
        function () {
            _super.prototype.dispose.call(this);
            this.renderer.setStyle(this.slickTrackEl, 'transform', null);
        };
        /**
         * @param {?} contents
         * @return {?}
         */
        NzCarouselTransformStrategy.prototype.withCarouselContents = /**
         * @param {?} contents
         * @return {?}
         */
        function (contents) {
            var _this = this;
            _super.prototype.withCarouselContents.call(this, contents);
            /** @type {?} */
            var carousel = (/** @type {?} */ (this.carouselComponent));
            /** @type {?} */
            var activeIndex = carousel.activeIndex;
            if (this.contents.length) {
                this.renderer.setStyle(this.slickListEl, 'height', this.unitHeight + "px");
                if (this.vertical) {
                    this.renderer.setStyle(this.slickTrackEl, 'width', this.unitWidth + "px");
                    this.renderer.setStyle(this.slickTrackEl, 'height', this.length * this.unitHeight + "px");
                    this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(0, " + -activeIndex * this.unitHeight + "px, 0)");
                }
                else {
                    this.renderer.setStyle(this.slickTrackEl, 'height', this.unitHeight + "px");
                    this.renderer.setStyle(this.slickTrackEl, 'width', this.length * this.unitWidth + "px");
                    this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(" + -activeIndex * this.unitWidth + "px, 0, 0)");
                }
                this.contents.forEach((/**
                 * @param {?} content
                 * @return {?}
                 */
                function (content) {
                    _this.renderer.setStyle(content.el, 'position', 'relative');
                    _this.renderer.setStyle(content.el, 'width', _this.unitWidth + "px");
                    _this.renderer.setStyle(content.el, 'height', _this.unitHeight + "px");
                }));
            }
        };
        /**
         * @param {?} _f
         * @param {?} _t
         * @return {?}
         */
        NzCarouselTransformStrategy.prototype.switch = /**
         * @param {?} _f
         * @param {?} _t
         * @return {?}
         */
        function (_f, _t) {
            var _this = this;
            var t = this.getFromToInBoundary(_f, _t).to;
            /** @type {?} */
            var complete$ = new rxjs.Subject();
            this.renderer.setStyle(this.slickTrackEl, 'transition', "transform " + (/** @type {?} */ (this.carouselComponent)).nzTransitionSpeed + "ms ease");
            if (this.vertical) {
                this.verticalTransform(_f, _t);
            }
            else {
                this.horizontalTransform(_f, _t);
            }
            this.isTransitioning = true;
            this.isDragging = false;
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.renderer.setStyle(_this.slickTrackEl, 'transition', null);
                _this.contents.forEach((/**
                 * @param {?} content
                 * @return {?}
                 */
                function (content) {
                    _this.renderer.setStyle(content.el, _this.vertical ? 'top' : 'left', null);
                }));
                if (_this.vertical) {
                    _this.renderer.setStyle(_this.slickTrackEl, 'transform', "translate3d(0, " + -t * _this.unitHeight + "px, 0)");
                }
                else {
                    _this.renderer.setStyle(_this.slickTrackEl, 'transform', "translate3d(" + -t * _this.unitWidth + "px, 0, 0)");
                }
                _this.isTransitioning = false;
                complete$.next();
                complete$.complete();
            }), (/** @type {?} */ (this.carouselComponent)).nzTransitionSpeed);
            return complete$.asObservable();
        };
        /**
         * @param {?} _vector
         * @return {?}
         */
        NzCarouselTransformStrategy.prototype.dragging = /**
         * @param {?} _vector
         * @return {?}
         */
        function (_vector) {
            if (this.isTransitioning) {
                return;
            }
            /** @type {?} */
            var activeIndex = (/** @type {?} */ (this.carouselComponent)).activeIndex;
            if ((/** @type {?} */ (this.carouselComponent)).vertical) {
                if (!this.isDragging && this.length > 2) {
                    if (activeIndex === this.maxIndex) {
                        this.prepareVerticalContext(true);
                    }
                    else if (activeIndex === 0) {
                        this.prepareVerticalContext(false);
                    }
                }
                this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(0, " + (-activeIndex * this.unitHeight + _vector.x) + "px, 0)");
            }
            else {
                if (!this.isDragging && this.length > 2) {
                    if (activeIndex === this.maxIndex) {
                        this.prepareHorizontalContext(true);
                    }
                    else if (activeIndex === 0) {
                        this.prepareHorizontalContext(false);
                    }
                }
                this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(" + (-activeIndex * this.unitWidth + _vector.x) + "px, 0, 0)");
            }
            this.isDragging = true;
        };
        /**
         * @private
         * @param {?} _f
         * @param {?} _t
         * @return {?}
         */
        NzCarouselTransformStrategy.prototype.verticalTransform = /**
         * @private
         * @param {?} _f
         * @param {?} _t
         * @return {?}
         */
        function (_f, _t) {
            var _a = this.getFromToInBoundary(_f, _t), f = _a.from, t = _a.to;
            /** @type {?} */
            var needToAdjust = this.length > 2 && _t !== t;
            if (needToAdjust) {
                this.prepareVerticalContext(t < f);
                this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(0, " + -_t * this.unitHeight + "px, 0)");
            }
            else {
                this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(0, " + -t * this.unitHeight + "px, 0");
            }
        };
        /**
         * @private
         * @param {?} _f
         * @param {?} _t
         * @return {?}
         */
        NzCarouselTransformStrategy.prototype.horizontalTransform = /**
         * @private
         * @param {?} _f
         * @param {?} _t
         * @return {?}
         */
        function (_f, _t) {
            var _a = this.getFromToInBoundary(_f, _t), f = _a.from, t = _a.to;
            /** @type {?} */
            var needToAdjust = this.length > 2 && _t !== t;
            if (needToAdjust) {
                this.prepareHorizontalContext(t < f);
                this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(" + -_t * this.unitWidth + "px, 0, 0)");
            }
            else {
                this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(" + -t * this.unitWidth + "px, 0, 0");
            }
        };
        /**
         * @private
         * @param {?} lastToFirst
         * @return {?}
         */
        NzCarouselTransformStrategy.prototype.prepareVerticalContext = /**
         * @private
         * @param {?} lastToFirst
         * @return {?}
         */
        function (lastToFirst) {
            if (lastToFirst) {
                this.renderer.setStyle(this.firstEl, 'top', this.length * this.unitHeight + "px");
                this.renderer.setStyle(this.lastEl, 'top', null);
            }
            else {
                this.renderer.setStyle(this.firstEl, 'top', null);
                this.renderer.setStyle(this.lastEl, 'top', -this.unitHeight * this.length + "px");
            }
        };
        /**
         * @private
         * @param {?} lastToFirst
         * @return {?}
         */
        NzCarouselTransformStrategy.prototype.prepareHorizontalContext = /**
         * @private
         * @param {?} lastToFirst
         * @return {?}
         */
        function (lastToFirst) {
            if (lastToFirst) {
                this.renderer.setStyle(this.firstEl, 'left', this.length * this.unitWidth + "px");
                this.renderer.setStyle(this.lastEl, 'left', null);
            }
            else {
                this.renderer.setStyle(this.firstEl, 'left', null);
                this.renderer.setStyle(this.lastEl, 'left', -this.unitWidth * this.length + "px");
            }
        };
        return NzCarouselTransformStrategy;
    }(NzCarouselBaseStrategy));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        NzCarouselTransformStrategy.prototype.isDragging;
        /**
         * @type {?}
         * @private
         */
        NzCarouselTransformStrategy.prototype.isTransitioning;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var NZ_CONFIG_COMPONENT_NAME = 'carousel';
    var NzCarouselComponent = /** @class */ (function () {
        function NzCarouselComponent(elementRef, nzConfigService, renderer, cdr, platform, nzDomEventService, nzDragService, customStrategies) {
            var _this = this;
            this.nzConfigService = nzConfigService;
            this.renderer = renderer;
            this.cdr = cdr;
            this.platform = platform;
            this.nzDomEventService = nzDomEventService;
            this.nzDragService = nzDragService;
            this.customStrategies = customStrategies;
            this.nzTransitionSpeed = 500;
            this.nzBeforeChange = new core.EventEmitter();
            this.nzAfterChange = new core.EventEmitter();
            this.activeIndex = 0;
            this.vertical = false;
            this.destroy$ = new rxjs.Subject();
            this.gestureRect = null;
            this.pointerDelta = null;
            this.isTransiting = false;
            this.isDragging = false;
            /**
             * Drag carousel.
             * @param event
             */
            this.pointerDown = (/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                if (!_this.isDragging && !_this.isTransiting && _this.nzEnableSwipe) {
                    _this.clearScheduledTransition();
                    _this.gestureRect = _this.slickListEl.getBoundingClientRect();
                    _this.nzDragService.requestDraggingSequence(event).subscribe((/**
                     * @param {?} delta
                     * @return {?}
                     */
                    function (delta) {
                        _this.pointerDelta = delta;
                        _this.isDragging = true;
                        _this.strategy.dragging(_this.pointerDelta);
                    }), (/**
                     * @return {?}
                     */
                    function () { }), (/**
                     * @return {?}
                     */
                    function () {
                        if (_this.nzEnableSwipe && _this.isDragging) {
                            /** @type {?} */
                            var xDelta = _this.pointerDelta ? _this.pointerDelta.x : 0;
                            // Switch to another slide if delta is bigger than third of the width.
                            if (Math.abs(xDelta) > (/** @type {?} */ (_this.gestureRect)).width / 3) {
                                _this.goTo(xDelta > 0 ? _this.activeIndex - 1 : _this.activeIndex + 1);
                            }
                            else {
                                _this.goTo(_this.activeIndex);
                            }
                            _this.gestureRect = null;
                            _this.pointerDelta = null;
                        }
                        _this.isDragging = false;
                    }));
                }
            });
            this.renderer.addClass(elementRef.nativeElement, 'ant-carousel');
            this.el = elementRef.nativeElement;
        }
        Object.defineProperty(NzCarouselComponent.prototype, "nzVertical", {
            get: /**
             * @return {?}
             */
            function () {
                return this.vertical;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                core$1.warnDeprecation("'nzVertical' is deprecated and will be removed in 9.0.0. Please use 'nzDotPosition' instead.");
                this.vertical = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzCarouselComponent.prototype, "nzDotPosition", {
            get: /**
             * @return {?}
             */
            function () {
                return this._dotPosition;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._dotPosition = value;
                if (value === 'left' || value === 'right') {
                    this.vertical = true;
                }
                else {
                    this.vertical = false;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NzCarouselComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
        function () {
            this.markContentActive(0);
        };
        /**
         * @return {?}
         */
        NzCarouselComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (!this.platform.isBrowser) {
                return;
            }
            this.slickListEl = this.slickList.nativeElement;
            this.slickTrackEl = this.slickTrack.nativeElement;
            this.carouselContents.changes.pipe(operators.takeUntil(this.destroy$)).subscribe((/**
             * @return {?}
             */
            function () {
                _this.markContentActive(0);
                _this.syncStrategy();
            }));
            this.nzDomEventService
                .registerResizeListener()
                .pipe(operators.takeUntil(this.destroy$), operators.finalize((/**
             * @return {?}
             */
            function () { return _this.nzDomEventService.unregisterResizeListener(); })))
                .subscribe((/**
             * @return {?}
             */
            function () {
                _this.syncStrategy();
            }));
            this.switchStrategy();
            this.markContentActive(0);
            this.syncStrategy();
            // If embedded in an entry component, it may do initial render at a inappropriate time.
            // ngZone.onStable won't do this trick
            Promise.resolve().then((/**
             * @return {?}
             */
            function () {
                _this.syncStrategy();
            }));
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        NzCarouselComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            var nzEffect = changes.nzEffect, nzDotPosition = changes.nzDotPosition;
            if (nzEffect && !nzEffect.isFirstChange()) {
                this.switchStrategy();
                this.markContentActive(0);
                this.syncStrategy();
            }
            if (nzDotPosition && !nzDotPosition.isFirstChange()) {
                this.switchStrategy();
                this.markContentActive(0);
                this.syncStrategy();
            }
            if (!this.nzAutoPlay || !this.nzAutoPlaySpeed) {
                this.clearScheduledTransition();
            }
            else {
                this.scheduleNextTransition();
            }
        };
        /**
         * @return {?}
         */
        NzCarouselComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.clearScheduledTransition();
            if (this.strategy) {
                this.strategy.dispose();
            }
            this.destroy$.next();
            this.destroy$.complete();
        };
        /**
         * @param {?} e
         * @return {?}
         */
        NzCarouselComponent.prototype.onKeyDown = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            if (e.keyCode === keycodes.LEFT_ARROW) {
                e.preventDefault();
                this.pre();
            }
            else if (e.keyCode === keycodes.RIGHT_ARROW) {
                this.next();
                e.preventDefault();
            }
        };
        /**
         * @return {?}
         */
        NzCarouselComponent.prototype.next = /**
         * @return {?}
         */
        function () {
            this.goTo(this.activeIndex + 1);
        };
        /**
         * @return {?}
         */
        NzCarouselComponent.prototype.pre = /**
         * @return {?}
         */
        function () {
            this.goTo(this.activeIndex - 1);
        };
        /**
         * @param {?} index
         * @return {?}
         */
        NzCarouselComponent.prototype.goTo = /**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            var _this = this;
            if (this.carouselContents && this.carouselContents.length && !this.isTransiting) {
                /** @type {?} */
                var length_1 = this.carouselContents.length;
                /** @type {?} */
                var from = this.activeIndex;
                /** @type {?} */
                var to = (index + length_1) % length_1;
                this.isTransiting = true;
                this.nzBeforeChange.emit({ from: from, to: to });
                this.strategy.switch(this.activeIndex, index).subscribe((/**
                 * @return {?}
                 */
                function () {
                    _this.scheduleNextTransition();
                    _this.nzAfterChange.emit(index);
                    _this.isTransiting = false;
                }));
                this.markContentActive(to);
                this.cdr.markForCheck();
            }
        };
        /**
         * @private
         * @return {?}
         */
        NzCarouselComponent.prototype.switchStrategy = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.strategy) {
                this.strategy.dispose();
            }
            // Load custom strategies first.
            /** @type {?} */
            var customStrategy = this.customStrategies ? this.customStrategies.find((/**
             * @param {?} s
             * @return {?}
             */
            function (s) { return s.name === _this.nzEffect; })) : null;
            if (customStrategy) {
                // tslint:disable-next-line:no-any
                this.strategy = new ((/** @type {?} */ (customStrategy.strategy)))(this, this.cdr, this.renderer);
                return;
            }
            this.strategy =
                this.nzEffect === 'scrollx'
                    ? new NzCarouselTransformStrategy(this, this.cdr, this.renderer)
                    : new NzCarouselOpacityStrategy(this, this.cdr, this.renderer);
        };
        /**
         * @private
         * @return {?}
         */
        NzCarouselComponent.prototype.scheduleNextTransition = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            this.clearScheduledTransition();
            if (this.nzAutoPlay && this.nzAutoPlaySpeed > 0 && this.platform.isBrowser) {
                this.transitionInProgress = setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.goTo(_this.activeIndex + 1);
                }), this.nzAutoPlaySpeed);
            }
        };
        /**
         * @private
         * @return {?}
         */
        NzCarouselComponent.prototype.clearScheduledTransition = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.transitionInProgress) {
                clearTimeout(this.transitionInProgress);
                this.transitionInProgress = null;
            }
        };
        /**
         * @private
         * @param {?} index
         * @return {?}
         */
        NzCarouselComponent.prototype.markContentActive = /**
         * @private
         * @param {?} index
         * @return {?}
         */
        function (index) {
            this.activeIndex = index;
            if (this.carouselContents) {
                this.carouselContents.forEach((/**
                 * @param {?} slide
                 * @param {?} i
                 * @return {?}
                 */
                function (slide, i) {
                    slide.isActive = index === i;
                }));
            }
            this.cdr.markForCheck();
        };
        /**
         * @private
         * @return {?}
         */
        NzCarouselComponent.prototype.syncStrategy = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.strategy) {
                this.strategy.withCarouselContents(this.carouselContents);
            }
        };
        /** @nocollapse */
        NzCarouselComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core$1.NzConfigService },
            { type: core.Renderer2 },
            { type: core.ChangeDetectorRef },
            { type: platform.Platform },
            { type: core$1.NzDomEventService },
            { type: core$1.NzDragService },
            { type: Array, decorators: [{ type: core.Optional }, { type: core.Inject, args: [NZ_CAROUSEL_CUSTOM_STRATEGIES,] }] }
        ]; };
        NzCarouselComponent.propDecorators = {
            carouselContents: [{ type: core.ContentChildren, args: [NzCarouselContentDirective,] }],
            slickList: [{ type: core.ViewChild, args: ['slickList', { static: false },] }],
            slickTrack: [{ type: core.ViewChild, args: ['slickTrack', { static: false },] }],
            nzDotRender: [{ type: core.Input }],
            nzEffect: [{ type: core.Input }],
            nzEnableSwipe: [{ type: core.Input }],
            nzDots: [{ type: core.Input }],
            nzAutoPlay: [{ type: core.Input }],
            nzAutoPlaySpeed: [{ type: core.Input }],
            nzTransitionSpeed: [{ type: core.Input }],
            nzVertical: [{ type: core.Input }],
            nzDotPosition: [{ type: core.Input }],
            nzBeforeChange: [{ type: core.Output }],
            nzAfterChange: [{ type: core.Output }]
        };
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, 'scrollx'),
            __metadata("design:type", String)
        ], NzCarouselComponent.prototype, "nzEffect", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, true), core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzCarouselComponent.prototype, "nzEnableSwipe", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, true), core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzCarouselComponent.prototype, "nzDots", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, false), core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzCarouselComponent.prototype, "nzAutoPlay", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, 3000), core$1.InputNumber(),
            __metadata("design:type", Number)
        ], NzCarouselComponent.prototype, "nzAutoPlaySpeed", void 0);
        __decorate([
            core$1.InputNumber(),
            __metadata("design:type", Object)
        ], NzCarouselComponent.prototype, "nzTransitionSpeed", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean),
            __metadata("design:paramtypes", [Boolean])
        ], NzCarouselComponent.prototype, "nzVertical", null);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, 'bottom'),
            __metadata("design:type", String),
            __metadata("design:paramtypes", [String])
        ], NzCarouselComponent.prototype, "nzDotPosition", null);
NzCarouselComponent.ɵfac = function NzCarouselComponent_Factory(t) { return new (t || NzCarouselComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzConfigService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Platform), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzDomEventService), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzDragService), ɵngcc0.ɵɵdirectiveInject(NZ_CAROUSEL_CUSTOM_STRATEGIES, 8)); };
NzCarouselComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzCarouselComponent, selectors: [["nz-carousel"]], contentQueries: function NzCarouselComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzCarouselContentDirective, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.carouselContents = _t);
    } }, viewQuery: function NzCarouselComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
        ɵngcc0.ɵɵviewQuery(_c1, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.slickList = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.slickTrack = _t.first);
    } }, hostVars: 2, hostBindings: function NzCarouselComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-carousel-vertical", ctx.vertical);
    } }, inputs: { nzTransitionSpeed: "nzTransitionSpeed", nzVertical: "nzVertical", nzDotPosition: "nzDotPosition", nzDotRender: "nzDotRender", nzEffect: "nzEffect", nzEnableSwipe: "nzEnableSwipe", nzDots: "nzDots", nzAutoPlay: "nzAutoPlay", nzAutoPlaySpeed: "nzAutoPlaySpeed" }, outputs: { nzBeforeChange: "nzBeforeChange", nzAfterChange: "nzAfterChange" }, exportAs: ["nzCarousel"], features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c3, decls: 9, vars: 3, consts: [[1, "slick-initialized", "slick-slider"], ["tabindex", "-1", 1, "slick-list", 3, "keydown", "mousedown", "touchstart"], ["slickList", ""], [1, "slick-track"], ["slickTrack", ""], ["class", "slick-dots", 3, "slick-dots-top", "slick-dots-bottom", "slick-dots-left", "slick-dots-right", 4, "ngIf"], ["renderDotTemplate", ""], [1, "slick-dots"], [3, "slick-active", "click", 4, "ngFor", "ngForOf"], [3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function NzCarouselComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1, 2);
        ɵngcc0.ɵɵlistener("keydown", function NzCarouselComponent_Template_div_keydown_1_listener($event) { return ctx.onKeyDown($event); })("mousedown", function NzCarouselComponent_Template_div_mousedown_1_listener($event) { return ctx.pointerDown($event); })("touchstart", function NzCarouselComponent_Template_div_touchstart_1_listener($event) { return ctx.pointerDown($event); });
        ɵngcc0.ɵɵelementStart(3, "div", 3, 4);
        ɵngcc0.ɵɵprojection(5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(6, NzCarouselComponent_ul_6_Template, 2, 9, "ul", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(7, NzCarouselComponent_ng_template_7_Template, 2, 1, "ng-template", null, 6, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("slick-vertical", ctx.nzVertical);
        ɵngcc0.ɵɵadvance(6);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzDots);
    } }, directives: [ɵngcc3.NgIf, ɵngcc3.NgForOf, ɵngcc3.NgTemplateOutlet], styles: ["\n      nz-carousel {\n        display: block;\n        position: relative;\n        overflow: hidden;\n        width: 100%;\n        height: 100%;\n      }\n\n      .slick-dots {\n        display: block;\n      }\n\n      .slick-track {\n        opacity: 1;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCarouselComponent, [{
        type: core.Component,
        args: [{
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                selector: 'nz-carousel',
                exportAs: 'nzCarousel',
                preserveWhitespaces: false,
                template: "<div class=\"slick-initialized slick-slider\" [class.slick-vertical]=\"nzVertical\">\r\n  <div\r\n    #slickList\r\n    class=\"slick-list\"\r\n    tabindex=\"-1\"\r\n    (keydown)=\"onKeyDown($event)\"\r\n    (mousedown)=\"pointerDown($event)\"\r\n    (touchstart)=\"pointerDown($event)\"\r\n  >\r\n    <!-- Render carousel items. -->\r\n    <div class=\"slick-track\" #slickTrack>\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n  <!-- Render dots. -->\r\n  <ul\r\n    class=\"slick-dots\"\r\n    *ngIf=\"nzDots\"\r\n    [class.slick-dots-top]=\"nzDotPosition === 'top'\"\r\n    [class.slick-dots-bottom]=\"nzDotPosition === 'bottom'\"\r\n    [class.slick-dots-left]=\"nzDotPosition === 'left'\"\r\n    [class.slick-dots-right]=\"nzDotPosition === 'right'\"\r\n  >\r\n    <li\r\n      *ngFor=\"let content of carouselContents; let i = index\"\r\n      [class.slick-active]=\"content.isActive\"\r\n      (click)=\"goTo(i)\"\r\n    >\r\n      <ng-template [ngTemplateOutlet]=\"nzDotRender || renderDotTemplate\" [ngTemplateOutletContext]=\"{ $implicit: i }\">\r\n      </ng-template>\r\n    </li>\r\n  </ul>\r\n</div>\r\n\r\n<ng-template #renderDotTemplate let-index>\r\n  <button>{{ index + 1 }}</button>\r\n</ng-template>\r\n",
                host: {
                    '[class.ant-carousel-vertical]': 'vertical'
                },
                styles: ["\n      nz-carousel {\n        display: block;\n        position: relative;\n        overflow: hidden;\n        width: 100%;\n        height: 100%;\n      }\n\n      .slick-dots {\n        display: block;\n      }\n\n      .slick-track {\n        opacity: 1;\n      }\n    "]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.NzConfigService }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc2.Platform }, { type: ɵngcc1.NzDomEventService }, { type: ɵngcc1.NzDragService }, { type: Array, decorators: [{
                type: core.Optional
            }, {
                type: core.Inject,
                args: [NZ_CAROUSEL_CUSTOM_STRATEGIES]
            }] }]; }, { nzTransitionSpeed: [{
            type: core.Input
        }], nzBeforeChange: [{
            type: core.Output
        }], nzAfterChange: [{
            type: core.Output
        }], nzVertical: [{
            type: core.Input
        }], nzDotPosition: [{
            type: core.Input
        }], carouselContents: [{
            type: core.ContentChildren,
            args: [NzCarouselContentDirective]
        }], slickList: [{
            type: core.ViewChild,
            args: ['slickList', { static: false }]
        }], slickTrack: [{
            type: core.ViewChild,
            args: ['slickTrack', { static: false }]
        }], nzDotRender: [{
            type: core.Input
        }], nzEffect: [{
            type: core.Input
        }], nzEnableSwipe: [{
            type: core.Input
        }], nzDots: [{
            type: core.Input
        }], nzAutoPlay: [{
            type: core.Input
        }], nzAutoPlaySpeed: [{
            type: core.Input
        }] }); })();
        return NzCarouselComponent;
    }());
    if (false) {
        /** @type {?} */
        NzCarouselComponent.prototype.carouselContents;
        /** @type {?} */
        NzCarouselComponent.prototype.slickList;
        /** @type {?} */
        NzCarouselComponent.prototype.slickTrack;
        /** @type {?} */
        NzCarouselComponent.prototype.nzDotRender;
        /** @type {?} */
        NzCarouselComponent.prototype.nzEffect;
        /** @type {?} */
        NzCarouselComponent.prototype.nzEnableSwipe;
        /** @type {?} */
        NzCarouselComponent.prototype.nzDots;
        /** @type {?} */
        NzCarouselComponent.prototype.nzAutoPlay;
        /** @type {?} */
        NzCarouselComponent.prototype.nzAutoPlaySpeed;
        /** @type {?} */
        NzCarouselComponent.prototype.nzTransitionSpeed;
        /**
         * @type {?}
         * @private
         */
        NzCarouselComponent.prototype._dotPosition;
        /** @type {?} */
        NzCarouselComponent.prototype.nzBeforeChange;
        /** @type {?} */
        NzCarouselComponent.prototype.nzAfterChange;
        /** @type {?} */
        NzCarouselComponent.prototype.activeIndex;
        /** @type {?} */
        NzCarouselComponent.prototype.el;
        /** @type {?} */
        NzCarouselComponent.prototype.slickListEl;
        /** @type {?} */
        NzCarouselComponent.prototype.slickTrackEl;
        /** @type {?} */
        NzCarouselComponent.prototype.strategy;
        /** @type {?} */
        NzCarouselComponent.prototype.vertical;
        /** @type {?} */
        NzCarouselComponent.prototype.transitionInProgress;
        /**
         * @type {?}
         * @private
         */
        NzCarouselComponent.prototype.destroy$;
        /**
         * @type {?}
         * @private
         */
        NzCarouselComponent.prototype.gestureRect;
        /**
         * @type {?}
         * @private
         */
        NzCarouselComponent.prototype.pointerDelta;
        /**
         * @type {?}
         * @private
         */
        NzCarouselComponent.prototype.isTransiting;
        /**
         * @type {?}
         * @private
         */
        NzCarouselComponent.prototype.isDragging;
        /**
         * Drag carousel.
         * \@param event
         * @type {?}
         */
        NzCarouselComponent.prototype.pointerDown;
        /** @type {?} */
        NzCarouselComponent.prototype.nzConfigService;
        /**
         * @type {?}
         * @private
         */
        NzCarouselComponent.prototype.renderer;
        /**
         * @type {?}
         * @private
         */
        NzCarouselComponent.prototype.cdr;
        /**
         * @type {?}
         * @private
         */
        NzCarouselComponent.prototype.platform;
        /**
         * @type {?}
         * @private
         */
        NzCarouselComponent.prototype.nzDomEventService;
        /**
         * @type {?}
         * @private
         */
        NzCarouselComponent.prototype.nzDragService;
        /**
         * @type {?}
         * @private
         */
        NzCarouselComponent.prototype.customStrategies;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzCarouselModule = /** @class */ (function () {
        function NzCarouselModule() {
        }
NzCarouselModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzCarouselModule });
NzCarouselModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzCarouselModule_Factory(t) { return new (t || NzCarouselModule)(); }, imports: [[common.CommonModule, platform.PlatformModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzCarouselModule, { declarations: [NzCarouselComponent,
        NzCarouselContentDirective], imports: [ɵngcc3.CommonModule, ɵngcc2.PlatformModule], exports: [NzCarouselComponent,
        NzCarouselContentDirective] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCarouselModule, [{
        type: core.NgModule,
        args: [{
                declarations: [NzCarouselComponent, NzCarouselContentDirective],
                exports: [NzCarouselComponent, NzCarouselContentDirective],
                imports: [common.CommonModule, platform.PlatformModule]
            }]
    }], function () { return []; }, null); })();
        return NzCarouselModule;
    }());

    exports.NZ_CAROUSEL_CUSTOM_STRATEGIES = NZ_CAROUSEL_CUSTOM_STRATEGIES;
    exports.NzCarouselBaseStrategy = NzCarouselBaseStrategy;
    exports.NzCarouselComponent = NzCarouselComponent;
    exports.NzCarouselContentDirective = NzCarouselContentDirective;
    exports.NzCarouselModule = NzCarouselModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-zorro-antd-carousel.umd.js.map
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/platform'), require('@angular/common'), require('@angular/core'), require('@angular/cdk/keycodes'), require('rxjs'), require('rxjs/operators'), require('ng-zorro-antd/core')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/carousel', ['exports', '@angular/cdk/platform', '@angular/common', '@angular/core', '@angular/cdk/keycodes', 'rxjs', 'rxjs/operators', 'ng-zorro-antd/core'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].carousel = {}), global.ng.cdk.platform, global.ng.common, global.ng.core, global.ng.cdk.keycodes, global.rxjs, global.rxjs.operators, global['ng-zorro-antd'].core));
}(this, (function (exports, platform, common, core, keycodes, rxjs, operators, core$1) { 'use strict';

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
    var NzCarouselContentDirective = /** @class */ (function () {
        function NzCarouselContentDirective(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.el = this.elementRef.nativeElement;
            this._active = false;
            renderer.addClass(elementRef.nativeElement, 'slick-slide');
        }
        Object.defineProperty(NzCarouselContentDirective.prototype, "isActive", {
            get: function () {
                return this._active;
            },
            set: function (value) {
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
        /** @nocollapse */ NzCarouselContentDirective.ɵfac = function NzCarouselContentDirective_Factory(t) { return new (t || NzCarouselContentDirective)(core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(core.Renderer2)); };
        /** @nocollapse */ NzCarouselContentDirective.ɵdir = core.ɵɵdefineDirective({ type: NzCarouselContentDirective, selectors: [["", "nz-carousel-content", ""]], exportAs: ["nzCarouselContent"] });
        return NzCarouselContentDirective;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzCarouselContentDirective, [{
            type: core.Directive,
            args: [{
                    selector: '[nz-carousel-content]',
                    exportAs: 'nzCarouselContent'
                }]
        }], function () { return [{ type: core.ElementRef }, { type: core.Renderer2 }]; }, null); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NZ_CAROUSEL_CUSTOM_STRATEGIES = new core.InjectionToken('nz-carousel-custom-strategies');

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzCarouselBaseStrategy = /** @class */ (function () {
        function NzCarouselBaseStrategy(carouselComponent, cdr, renderer) {
            this.cdr = cdr;
            this.renderer = renderer;
            this.carouselComponent = carouselComponent;
        }
        Object.defineProperty(NzCarouselBaseStrategy.prototype, "maxIndex", {
            get: function () {
                return this.length - 1;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzCarouselBaseStrategy.prototype, "firstEl", {
            get: function () {
                return this.contents[0].el;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzCarouselBaseStrategy.prototype, "lastEl", {
            get: function () {
                return this.contents[this.maxIndex].el;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Initialize dragging sequences.
         * @param contents
         */
        NzCarouselBaseStrategy.prototype.withCarouselContents = function (contents) {
            // TODO: carousel and its contents should be separated.
            var carousel = this.carouselComponent;
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
        NzCarouselBaseStrategy.prototype.dragging = function (_vector) { };
        /**
         * Destroy a scroll strategy.
         */
        NzCarouselBaseStrategy.prototype.dispose = function () { };
        NzCarouselBaseStrategy.prototype.getFromToInBoundary = function (f, t) {
            var length = this.maxIndex + 1;
            return { from: (f + length) % length, to: (t + length) % length };
        };
        return NzCarouselBaseStrategy;
    }());

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzCarouselOpacityStrategy = /** @class */ (function (_super) {
        __extends(NzCarouselOpacityStrategy, _super);
        function NzCarouselOpacityStrategy() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NzCarouselOpacityStrategy.prototype.withCarouselContents = function (contents) {
            var _this = this;
            _super.prototype.withCarouselContents.call(this, contents);
            if (this.contents) {
                this.slickTrackEl.style.width = this.length * this.unitWidth + "px";
                this.contents.forEach(function (content, i) {
                    _this.renderer.setStyle(content.el, 'opacity', _this.carouselComponent.activeIndex === i ? '1' : '0');
                    _this.renderer.setStyle(content.el, 'position', 'relative');
                    _this.renderer.setStyle(content.el, 'width', _this.unitWidth + "px");
                    _this.renderer.setStyle(content.el, 'left', -_this.unitWidth * i + "px");
                    _this.renderer.setStyle(content.el, 'transition', ['opacity 500ms ease 0s', 'visibility 500ms ease 0s']);
                });
            }
        };
        NzCarouselOpacityStrategy.prototype.switch = function (_f, _t) {
            var _this = this;
            var t = this.getFromToInBoundary(_f, _t).to;
            var complete$ = new rxjs.Subject();
            this.contents.forEach(function (content, i) {
                _this.renderer.setStyle(content.el, 'opacity', t === i ? '1' : '0');
            });
            setTimeout(function () {
                complete$.next();
                complete$.complete();
            }, this.carouselComponent.nzTransitionSpeed);
            return complete$;
        };
        NzCarouselOpacityStrategy.prototype.dispose = function () {
            var _this = this;
            this.contents.forEach(function (content) {
                _this.renderer.setStyle(content.el, 'transition', null);
            });
            _super.prototype.dispose.call(this);
        };
        return NzCarouselOpacityStrategy;
    }(NzCarouselBaseStrategy));

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
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
            get: function () {
                return this.carouselComponent.vertical;
            },
            enumerable: true,
            configurable: true
        });
        NzCarouselTransformStrategy.prototype.dispose = function () {
            _super.prototype.dispose.call(this);
            this.renderer.setStyle(this.slickTrackEl, 'transform', null);
        };
        NzCarouselTransformStrategy.prototype.withCarouselContents = function (contents) {
            var _this = this;
            _super.prototype.withCarouselContents.call(this, contents);
            var carousel = this.carouselComponent;
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
                this.contents.forEach(function (content) {
                    _this.renderer.setStyle(content.el, 'position', 'relative');
                    _this.renderer.setStyle(content.el, 'width', _this.unitWidth + "px");
                    _this.renderer.setStyle(content.el, 'height', _this.unitHeight + "px");
                });
            }
        };
        NzCarouselTransformStrategy.prototype.switch = function (_f, _t) {
            var _this = this;
            var t = this.getFromToInBoundary(_f, _t).to;
            var complete$ = new rxjs.Subject();
            this.renderer.setStyle(this.slickTrackEl, 'transition', "transform " + this.carouselComponent.nzTransitionSpeed + "ms ease");
            if (this.vertical) {
                this.verticalTransform(_f, _t);
            }
            else {
                this.horizontalTransform(_f, _t);
            }
            this.isTransitioning = true;
            this.isDragging = false;
            setTimeout(function () {
                _this.renderer.setStyle(_this.slickTrackEl, 'transition', null);
                _this.contents.forEach(function (content) {
                    _this.renderer.setStyle(content.el, _this.vertical ? 'top' : 'left', null);
                });
                if (_this.vertical) {
                    _this.renderer.setStyle(_this.slickTrackEl, 'transform', "translate3d(0, " + -t * _this.unitHeight + "px, 0)");
                }
                else {
                    _this.renderer.setStyle(_this.slickTrackEl, 'transform', "translate3d(" + -t * _this.unitWidth + "px, 0, 0)");
                }
                _this.isTransitioning = false;
                complete$.next();
                complete$.complete();
            }, this.carouselComponent.nzTransitionSpeed);
            return complete$.asObservable();
        };
        NzCarouselTransformStrategy.prototype.dragging = function (_vector) {
            if (this.isTransitioning) {
                return;
            }
            var activeIndex = this.carouselComponent.activeIndex;
            if (this.carouselComponent.vertical) {
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
        NzCarouselTransformStrategy.prototype.verticalTransform = function (_f, _t) {
            var _a = this.getFromToInBoundary(_f, _t), f = _a.from, t = _a.to;
            var needToAdjust = this.length > 2 && _t !== t;
            if (needToAdjust) {
                this.prepareVerticalContext(t < f);
                this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(0, " + -_t * this.unitHeight + "px, 0)");
            }
            else {
                this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(0, " + -t * this.unitHeight + "px, 0");
            }
        };
        NzCarouselTransformStrategy.prototype.horizontalTransform = function (_f, _t) {
            var _a = this.getFromToInBoundary(_f, _t), f = _a.from, t = _a.to;
            var needToAdjust = this.length > 2 && _t !== t;
            if (needToAdjust) {
                this.prepareHorizontalContext(t < f);
                this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(" + -_t * this.unitWidth + "px, 0, 0)");
            }
            else {
                this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(" + -t * this.unitWidth + "px, 0, 0");
            }
        };
        NzCarouselTransformStrategy.prototype.prepareVerticalContext = function (lastToFirst) {
            if (lastToFirst) {
                this.renderer.setStyle(this.firstEl, 'top', this.length * this.unitHeight + "px");
                this.renderer.setStyle(this.lastEl, 'top', null);
            }
            else {
                this.renderer.setStyle(this.firstEl, 'top', null);
                this.renderer.setStyle(this.lastEl, 'top', -this.unitHeight * this.length + "px");
            }
        };
        NzCarouselTransformStrategy.prototype.prepareHorizontalContext = function (lastToFirst) {
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

    var _c0 = ["slickList"];
    var _c1 = ["slickTrack"];
    function NzCarouselComponent_ul_6_li_1_ng_template_1_Template(rf, ctx) { }
    var _c2 = function (a0) { return { $implicit: a0 }; };
    function NzCarouselComponent_ul_6_li_1_Template(rf, ctx) { if (rf & 1) {
        var _r134 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "li", 9);
        core.ɵɵlistener("click", function NzCarouselComponent_ul_6_li_1_Template_li_click_0_listener($event) { core.ɵɵrestoreView(_r134); var i_r131 = ctx.index; var ctx_r133 = core.ɵɵnextContext(2); return ctx_r133.goTo(i_r131); });
        core.ɵɵtemplate(1, NzCarouselComponent_ul_6_li_1_ng_template_1_Template, 0, 0, "ng-template", 10);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var content_r130 = ctx.$implicit;
        var i_r131 = ctx.index;
        var ctx_r129 = core.ɵɵnextContext(2);
        var _r127 = core.ɵɵreference(8);
        core.ɵɵclassProp("slick-active", content_r130.isActive);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", ctx_r129.nzDotRender || _r127)("ngTemplateOutletContext", core.ɵɵpureFunction1(3, _c2, i_r131));
    } }
    function NzCarouselComponent_ul_6_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "ul", 7);
        core.ɵɵtemplate(1, NzCarouselComponent_ul_6_li_1_Template, 2, 5, "li", 8);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r126 = core.ɵɵnextContext();
        core.ɵɵclassProp("slick-dots-top", ctx_r126.nzDotPosition === "top")("slick-dots-bottom", ctx_r126.nzDotPosition === "bottom")("slick-dots-left", ctx_r126.nzDotPosition === "left")("slick-dots-right", ctx_r126.nzDotPosition === "right");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", ctx_r126.carouselContents);
    } }
    function NzCarouselComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "button");
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var index_r135 = ctx.$implicit;
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(index_r135 + 1);
    } }
    var _c3 = ["*"];
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
            this.pointerDown = function (event) {
                if (!_this.isDragging && !_this.isTransiting && _this.nzEnableSwipe) {
                    _this.clearScheduledTransition();
                    _this.gestureRect = _this.slickListEl.getBoundingClientRect();
                    _this.nzDragService.requestDraggingSequence(event).subscribe(function (delta) {
                        _this.pointerDelta = delta;
                        _this.isDragging = true;
                        _this.strategy.dragging(_this.pointerDelta);
                    }, function () { }, function () {
                        if (_this.nzEnableSwipe && _this.isDragging) {
                            var xDelta = _this.pointerDelta ? _this.pointerDelta.x : 0;
                            // Switch to another slide if delta is bigger than third of the width.
                            if (Math.abs(xDelta) > _this.gestureRect.width / 3) {
                                _this.goTo(xDelta > 0 ? _this.activeIndex - 1 : _this.activeIndex + 1);
                            }
                            else {
                                _this.goTo(_this.activeIndex);
                            }
                            _this.gestureRect = null;
                            _this.pointerDelta = null;
                        }
                        _this.isDragging = false;
                    });
                }
            };
            this.renderer.addClass(elementRef.nativeElement, 'ant-carousel');
            this.el = elementRef.nativeElement;
        }
        Object.defineProperty(NzCarouselComponent.prototype, "nzVertical", {
            get: function () {
                return this.vertical;
            },
            set: function (value) {
                core$1.warnDeprecation("'nzVertical' is deprecated and will be removed in 9.0.0. Please use 'nzDotPosition' instead.");
                this.vertical = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzCarouselComponent.prototype, "nzDotPosition", {
            get: function () {
                return this._dotPosition;
            },
            set: function (value) {
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
        NzCarouselComponent.prototype.ngAfterContentInit = function () {
            this.markContentActive(0);
        };
        NzCarouselComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            if (!this.platform.isBrowser) {
                return;
            }
            this.slickListEl = this.slickList.nativeElement;
            this.slickTrackEl = this.slickTrack.nativeElement;
            this.carouselContents.changes.pipe(operators.takeUntil(this.destroy$)).subscribe(function () {
                _this.markContentActive(0);
                _this.syncStrategy();
            });
            this.nzDomEventService
                .registerResizeListener()
                .pipe(operators.takeUntil(this.destroy$), operators.finalize(function () { return _this.nzDomEventService.unregisterResizeListener(); }))
                .subscribe(function () {
                _this.syncStrategy();
            });
            this.switchStrategy();
            this.markContentActive(0);
            this.syncStrategy();
            // If embedded in an entry component, it may do initial render at a inappropriate time.
            // ngZone.onStable won't do this trick
            Promise.resolve().then(function () {
                _this.syncStrategy();
            });
        };
        NzCarouselComponent.prototype.ngOnChanges = function (changes) {
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
        NzCarouselComponent.prototype.ngOnDestroy = function () {
            this.clearScheduledTransition();
            if (this.strategy) {
                this.strategy.dispose();
            }
            this.destroy$.next();
            this.destroy$.complete();
        };
        NzCarouselComponent.prototype.onKeyDown = function (e) {
            if (e.keyCode === keycodes.LEFT_ARROW) {
                e.preventDefault();
                this.pre();
            }
            else if (e.keyCode === keycodes.RIGHT_ARROW) {
                this.next();
                e.preventDefault();
            }
        };
        NzCarouselComponent.prototype.next = function () {
            this.goTo(this.activeIndex + 1);
        };
        NzCarouselComponent.prototype.pre = function () {
            this.goTo(this.activeIndex - 1);
        };
        NzCarouselComponent.prototype.goTo = function (index) {
            var _this = this;
            if (this.carouselContents && this.carouselContents.length && !this.isTransiting) {
                var length_1 = this.carouselContents.length;
                var from = this.activeIndex;
                var to = (index + length_1) % length_1;
                this.isTransiting = true;
                this.nzBeforeChange.emit({ from: from, to: to });
                this.strategy.switch(this.activeIndex, index).subscribe(function () {
                    _this.scheduleNextTransition();
                    _this.nzAfterChange.emit(index);
                    _this.isTransiting = false;
                });
                this.markContentActive(to);
                this.cdr.markForCheck();
            }
        };
        NzCarouselComponent.prototype.switchStrategy = function () {
            var _this = this;
            if (this.strategy) {
                this.strategy.dispose();
            }
            // Load custom strategies first.
            var customStrategy = this.customStrategies ? this.customStrategies.find(function (s) { return s.name === _this.nzEffect; }) : null;
            if (customStrategy) {
                // tslint:disable-next-line:no-any
                this.strategy = new customStrategy.strategy(this, this.cdr, this.renderer);
                return;
            }
            this.strategy =
                this.nzEffect === 'scrollx'
                    ? new NzCarouselTransformStrategy(this, this.cdr, this.renderer)
                    : new NzCarouselOpacityStrategy(this, this.cdr, this.renderer);
        };
        NzCarouselComponent.prototype.scheduleNextTransition = function () {
            var _this = this;
            this.clearScheduledTransition();
            if (this.nzAutoPlay && this.nzAutoPlaySpeed > 0 && this.platform.isBrowser) {
                this.transitionInProgress = setTimeout(function () {
                    _this.goTo(_this.activeIndex + 1);
                }, this.nzAutoPlaySpeed);
            }
        };
        NzCarouselComponent.prototype.clearScheduledTransition = function () {
            if (this.transitionInProgress) {
                clearTimeout(this.transitionInProgress);
                this.transitionInProgress = null;
            }
        };
        NzCarouselComponent.prototype.markContentActive = function (index) {
            this.activeIndex = index;
            if (this.carouselContents) {
                this.carouselContents.forEach(function (slide, i) {
                    slide.isActive = index === i;
                });
            }
            this.cdr.markForCheck();
        };
        NzCarouselComponent.prototype.syncStrategy = function () {
            if (this.strategy) {
                this.strategy.withCarouselContents(this.carouselContents);
            }
        };
        /** @nocollapse */ NzCarouselComponent.ɵfac = function NzCarouselComponent_Factory(t) { return new (t || NzCarouselComponent)(core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(core$1.NzConfigService), core.ɵɵdirectiveInject(core.Renderer2), core.ɵɵdirectiveInject(core.ChangeDetectorRef), core.ɵɵdirectiveInject(platform.Platform), core.ɵɵdirectiveInject(core$1.NzDomEventService), core.ɵɵdirectiveInject(core$1.NzDragService), core.ɵɵdirectiveInject(NZ_CAROUSEL_CUSTOM_STRATEGIES, 8)); };
        /** @nocollapse */ NzCarouselComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzCarouselComponent, selectors: [["nz-carousel"]], contentQueries: function NzCarouselComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
                core.ɵɵcontentQuery(dirIndex, NzCarouselContentDirective, false);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.carouselContents = _t);
            } }, viewQuery: function NzCarouselComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵviewQuery(_c0, true);
                core.ɵɵviewQuery(_c1, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.slickList = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.slickTrack = _t.first);
            } }, hostBindings: function NzCarouselComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
                core.ɵɵallocHostVars(1);
            } if (rf & 2) {
                core.ɵɵclassProp("ant-carousel-vertical", ctx.vertical);
            } }, inputs: { nzDotRender: "nzDotRender", nzEffect: "nzEffect", nzEnableSwipe: "nzEnableSwipe", nzDots: "nzDots", nzAutoPlay: "nzAutoPlay", nzAutoPlaySpeed: "nzAutoPlaySpeed", nzTransitionSpeed: "nzTransitionSpeed", nzVertical: "nzVertical", nzDotPosition: "nzDotPosition" }, outputs: { nzBeforeChange: "nzBeforeChange", nzAfterChange: "nzAfterChange" }, exportAs: ["nzCarousel"], features: [core.ɵɵNgOnChangesFeature()], ngContentSelectors: _c3, decls: 9, vars: 2, consts: [[1, "slick-initialized", "slick-slider"], ["tabindex", "-1", 1, "slick-list", 3, "keydown", "mousedown", "touchstart"], ["slickList", ""], [1, "slick-track"], ["slickTrack", ""], ["class", "slick-dots", 3, "slick-dots-top", "slick-dots-bottom", "slick-dots-left", "slick-dots-right", 4, "ngIf"], ["renderDotTemplate", ""], [1, "slick-dots"], [3, "slick-active", "click", 4, "ngFor", "ngForOf"], [3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function NzCarouselComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵelementStart(0, "div", 0);
                core.ɵɵelementStart(1, "div", 1, 2);
                core.ɵɵlistener("keydown", function NzCarouselComponent_Template_div_keydown_1_listener($event) { return ctx.onKeyDown($event); })("mousedown", function NzCarouselComponent_Template_div_mousedown_1_listener($event) { return ctx.pointerDown($event); })("touchstart", function NzCarouselComponent_Template_div_touchstart_1_listener($event) { return ctx.pointerDown($event); });
                core.ɵɵelementStart(3, "div", 3, 4);
                core.ɵɵprojection(5);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵtemplate(6, NzCarouselComponent_ul_6_Template, 2, 5, "ul", 5);
                core.ɵɵelementEnd();
                core.ɵɵtemplate(7, NzCarouselComponent_ng_template_7_Template, 2, 1, "ng-template", null, 6, core.ɵɵtemplateRefExtractor);
            } if (rf & 2) {
                core.ɵɵclassProp("slick-vertical", ctx.nzVertical);
                core.ɵɵadvance(6);
                core.ɵɵproperty("ngIf", ctx.nzDots);
            } }, directives: [common.NgIf, common.NgForOf, common.NgTemplateOutlet], styles: ["\n      nz-carousel {\n        display: block;\n        position: relative;\n        overflow: hidden;\n        width: 100%;\n        height: 100%;\n      }\n\n      .slick-dots {\n        display: block;\n      }\n\n      .slick-track {\n        opacity: 1;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
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
        return NzCarouselComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzCarouselComponent, [{
            type: core.Component,
            args: [{
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    selector: 'nz-carousel',
                    exportAs: 'nzCarousel',
                    preserveWhitespaces: false,
                    templateUrl: './nz-carousel.component.html',
                    host: {
                        '[class.ant-carousel-vertical]': 'vertical'
                    },
                    styles: [
                        "\n      nz-carousel {\n        display: block;\n        position: relative;\n        overflow: hidden;\n        width: 100%;\n        height: 100%;\n      }\n\n      .slick-dots {\n        display: block;\n      }\n\n      .slick-track {\n        opacity: 1;\n      }\n    "
                    ]
                }]
        }], function () { return [{ type: core.ElementRef }, { type: core$1.NzConfigService }, { type: core.Renderer2 }, { type: core.ChangeDetectorRef }, { type: platform.Platform }, { type: core$1.NzDomEventService }, { type: core$1.NzDragService }, { type: undefined, decorators: [{
                    type: core.Optional
                }, {
                    type: core.Inject,
                    args: [NZ_CAROUSEL_CUSTOM_STRATEGIES]
                }] }]; }, { carouselContents: [{
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
            }], nzTransitionSpeed: [{
                type: core.Input
            }], nzVertical: [{
                type: core.Input
            }], nzDotPosition: [{
                type: core.Input
            }], nzBeforeChange: [{
                type: core.Output
            }], nzAfterChange: [{
                type: core.Output
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzCarouselModule = /** @class */ (function () {
        function NzCarouselModule() {
        }
        /** @nocollapse */ NzCarouselModule.ɵmod = core.ɵɵdefineNgModule({ type: NzCarouselModule });
        /** @nocollapse */ NzCarouselModule.ɵinj = core.ɵɵdefineInjector({ factory: function NzCarouselModule_Factory(t) { return new (t || NzCarouselModule)(); }, imports: [[common.CommonModule, platform.PlatformModule]] });
        return NzCarouselModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(NzCarouselModule, { declarations: [NzCarouselComponent, NzCarouselContentDirective], imports: [common.CommonModule, platform.PlatformModule], exports: [NzCarouselComponent, NzCarouselContentDirective] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzCarouselModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [NzCarouselComponent, NzCarouselContentDirective],
                    exports: [NzCarouselComponent, NzCarouselContentDirective],
                    imports: [common.CommonModule, platform.PlatformModule]
                }]
        }], null, null); })();

    exports.NZ_CAROUSEL_CUSTOM_STRATEGIES = NZ_CAROUSEL_CUSTOM_STRATEGIES;
    exports.NzCarouselBaseStrategy = NzCarouselBaseStrategy;
    exports.NzCarouselComponent = NzCarouselComponent;
    exports.NzCarouselContentDirective = NzCarouselContentDirective;
    exports.NzCarouselModule = NzCarouselModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-carousel.umd.js.map

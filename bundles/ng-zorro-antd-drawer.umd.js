(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('ng-zorro-antd/core'),require('@angular/cdk/overlay'),require('@angular/cdk/a11y'),require('@angular/common'),require('@angular/cdk/portal'),require('ng-zorro-antd/icon'),exports, require('@angular/cdk/keycodes'), require('@angular/common'), require('@angular/core'), require('@angular/cdk/a11y'), require('@angular/cdk/overlay'), require('@angular/cdk/portal'), require('rxjs'), require('ng-zorro-antd/core'), require('rxjs/operators'), require('ng-zorro-antd/icon')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/drawer', ['@angular/core','ng-zorro-antd/core','@angular/cdk/overlay','@angular/cdk/a11y','@angular/common','@angular/cdk/portal','ng-zorro-antd/icon','exports', '@angular/cdk/keycodes', '@angular/common', '@angular/core', '@angular/cdk/a11y', '@angular/cdk/overlay', '@angular/cdk/portal', 'rxjs', 'ng-zorro-antd/core', 'rxjs/operators', 'ng-zorro-antd/icon'], factory) :
    (global = global || self, factory(global.ng.core,global.ngZorroAntd.core,global.ng.cdk.overlay,global.ng.cdk.a11y,global.ng.common,global.ng.cdk.portal,global.ngZorroAntd.icon,(global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].drawer = {}), global.ng.cdk.keycodes, global.ng.common, global.ng.core, global.ng.cdk.a11y, global.ng.cdk.overlay, global.ng.cdk.portal, global.rxjs, global['ng-zorro-antd'].core, global.rxjs.operators, global['ng-zorro-antd'].icon));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,ɵngcc4,ɵngcc5,ɵngcc6,exports, keycodes, common, core, a11y, overlay, portal, rxjs, core$1, operators, icon) { 
var _c0 = ["drawerTemplate"];
function NzDrawerComponent_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 9);
    ɵngcc0.ɵɵlistener("click", function NzDrawerComponent_ng_template_0_div_1_Template_div_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r8); var ctx_r7 = ɵngcc0.ɵɵnextContext(2); return ctx_r7.maskClick(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r2.nzMaskStyle);
} }
function NzDrawerComponent_ng_template_0_div_5_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelement(1, "div", 14);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r11 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r11.nzTitle, ɵngcc0.ɵɵsanitizeHtml);
} }
function NzDrawerComponent_ng_template_0_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 12);
    ɵngcc0.ɵɵtemplate(1, NzDrawerComponent_ng_template_0_div_5_div_1_ng_container_1_Template, 2, 1, "ng-container", 13);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r9 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r9.nzTitle);
} }
function NzDrawerComponent_ng_template_0_div_5_button_2_Template(rf, ctx) { if (rf & 1) {
    var _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 15);
    ɵngcc0.ɵɵlistener("click", function NzDrawerComponent_ng_template_0_div_5_button_2_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r13); var ctx_r12 = ɵngcc0.ɵɵnextContext(3); return ctx_r12.closeClick(); });
    ɵngcc0.ɵɵelement(1, "i", 16);
    ɵngcc0.ɵɵelementEnd();
} }
function NzDrawerComponent_ng_template_0_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtemplate(1, NzDrawerComponent_ng_template_0_div_5_div_1_Template, 2, 1, "div", 10);
    ɵngcc0.ɵɵtemplate(2, NzDrawerComponent_ng_template_0_div_5_button_2_Template, 2, 0, "button", 11);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassProp("ant-drawer-header", !!ctx_r3.nzTitle)("ant-drawer-header-no-title", !!ctx_r3.nzTitle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.nzTitle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.nzClosable);
} }
function NzDrawerComponent_ng_template_0_ng_template_7_Template(rf, ctx) { }
function NzDrawerComponent_ng_template_0_ng_container_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function NzDrawerComponent_ng_template_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzDrawerComponent_ng_template_0_ng_container_8_ng_container_1_Template, 1, 0, "ng-container", 17);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r5.nzContent)("ngTemplateOutletContext", ctx_r5.templateContext);
} }
function NzDrawerComponent_ng_template_0_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 0, ["*ngIf", "!nzContent"]);
} }
function NzDrawerComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵtemplate(1, NzDrawerComponent_ng_template_0_div_1_Template, 1, 1, "div", 2);
    ɵngcc0.ɵɵelementStart(2, "div");
    ɵngcc0.ɵɵelementStart(3, "div", 3);
    ɵngcc0.ɵɵelementStart(4, "div", 4);
    ɵngcc0.ɵɵtemplate(5, NzDrawerComponent_ng_template_0_div_5_Template, 3, 6, "div", 5);
    ɵngcc0.ɵɵelementStart(6, "div", 6);
    ɵngcc0.ɵɵtemplate(7, NzDrawerComponent_ng_template_0_ng_template_7_Template, 0, 0, "ng-template", 7);
    ɵngcc0.ɵɵtemplate(8, NzDrawerComponent_ng_template_0_ng_container_8_Template, 2, 2, "ng-container", 8);
    ɵngcc0.ɵɵtemplate(9, NzDrawerComponent_ng_template_0_9_Template, 1, 0, undefined, 8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("transform", ctx_r1.offsetTransform)("z-index", ctx_r1.nzZIndex);
    ɵngcc0.ɵɵclassProp("ant-drawer-open", ctx_r1.isOpen)("ant-drawer-top", ctx_r1.nzPlacement === "top")("ant-drawer-bottom", ctx_r1.nzPlacement === "bottom")("ant-drawer-right", ctx_r1.nzPlacement === "right")("ant-drawer-left", ctx_r1.nzPlacement === "left");
    ɵngcc0.ɵɵproperty("nzNoAnimation", ctx_r1.nzNoAnimation);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.nzMask);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("ant-drawer-content-wrapper ", ctx_r1.nzWrapClassName, "");
    ɵngcc0.ɵɵstyleProp("width", ctx_r1.width)("height", ctx_r1.height)("transform", ctx_r1.transform);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵstyleProp("height", ctx_r1.isLeftOrRight ? "100%" : null);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.nzTitle || ctx_r1.nzClosable);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r1.nzBodyStyle);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.isTemplateRef(ctx_r1.nzContent));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r1.nzContent);
} }
var _c1 = ["*"];
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
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    // tslint:disable-next-line:no-any
    /**
     * @abstract
     * @template R
     */
    var   
    // tslint:disable-next-line:no-any
    /**
     * @abstract
     * @template R
     */
    NzDrawerRef = /** @class */ (function () {
        function NzDrawerRef() {
        }
        return NzDrawerRef;
    }());
    if (false) {
        /** @type {?} */
        NzDrawerRef.prototype.afterClose;
        /** @type {?} */
        NzDrawerRef.prototype.afterOpen;
        /** @type {?} */
        NzDrawerRef.prototype.nzClosable;
        /** @type {?} */
        NzDrawerRef.prototype.nzNoAnimation;
        /** @type {?} */
        NzDrawerRef.prototype.nzMaskClosable;
        /** @type {?} */
        NzDrawerRef.prototype.nzKeyboard;
        /** @type {?} */
        NzDrawerRef.prototype.nzMask;
        /** @type {?} */
        NzDrawerRef.prototype.nzTitle;
        /** @type {?} */
        NzDrawerRef.prototype.nzPlacement;
        /** @type {?} */
        NzDrawerRef.prototype.nzMaskStyle;
        /** @type {?} */
        NzDrawerRef.prototype.nzBodyStyle;
        /** @type {?} */
        NzDrawerRef.prototype.nzWrapClassName;
        /** @type {?} */
        NzDrawerRef.prototype.nzWidth;
        /** @type {?} */
        NzDrawerRef.prototype.nzHeight;
        /** @type {?} */
        NzDrawerRef.prototype.nzZIndex;
        /** @type {?} */
        NzDrawerRef.prototype.nzOffsetX;
        /** @type {?} */
        NzDrawerRef.prototype.nzOffsetY;
        /**
         * @abstract
         * @param {?=} result
         * @return {?}
         */
        NzDrawerRef.prototype.close = function (result) { };
        /**
         * @abstract
         * @return {?}
         */
        NzDrawerRef.prototype.open = function () { };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DRAWER_ANIMATE_DURATION = 300;
    /** @type {?} */
    var NZ_CONFIG_COMPONENT_NAME = 'drawer';
    /**
     * @template T, R, D
     */
    var NzDrawerComponent = /** @class */ (function (_super) {
        __extends(NzDrawerComponent, _super);
        function NzDrawerComponent(document, nzConfigService, renderer, overlay, injector, changeDetectorRef, focusTrapFactory, viewContainerRef, overlayKeyboardDispatcher) {
            var _this = _super.call(this) || this;
            _this.document = document;
            _this.nzConfigService = nzConfigService;
            _this.renderer = renderer;
            _this.overlay = overlay;
            _this.injector = injector;
            _this.changeDetectorRef = changeDetectorRef;
            _this.focusTrapFactory = focusTrapFactory;
            _this.viewContainerRef = viewContainerRef;
            _this.overlayKeyboardDispatcher = overlayKeyboardDispatcher;
            _this.nzClosable = true;
            _this.nzNoAnimation = false;
            _this.nzKeyboard = true;
            _this.nzPlacement = 'right';
            _this.nzMaskStyle = {};
            _this.nzBodyStyle = {};
            _this.nzWidth = 256;
            _this.nzHeight = 256;
            _this.nzZIndex = 1000;
            _this.nzOffsetX = 0;
            _this.nzOffsetY = 0;
            _this.nzOnViewInit = new core.EventEmitter();
            _this.nzOnClose = new core.EventEmitter();
            _this.destroy$ = new rxjs.Subject();
            _this.isOpen = false;
            _this.templateContext = {
                $implicit: undefined,
                drawerRef: (/** @type {?} */ (_this))
            };
            _this.nzAfterOpen = new rxjs.Subject();
            _this.nzAfterClose = new rxjs.Subject();
            return _this;
        }
        Object.defineProperty(NzDrawerComponent.prototype, "nzVisible", {
            get: /**
             * @return {?}
             */
            function () {
                return this.isOpen;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.isOpen = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzDrawerComponent.prototype, "offsetTransform", {
            get: /**
             * @return {?}
             */
            function () {
                if (!this.isOpen || this.nzOffsetX + this.nzOffsetY === 0) {
                    return null;
                }
                switch (this.nzPlacement) {
                    case 'left':
                        return "translateX(" + this.nzOffsetX + "px)";
                    case 'right':
                        return "translateX(-" + this.nzOffsetX + "px)";
                    case 'top':
                        return "translateY(" + this.nzOffsetY + "px)";
                    case 'bottom':
                        return "translateY(-" + this.nzOffsetY + "px)";
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzDrawerComponent.prototype, "transform", {
            get: /**
             * @return {?}
             */
            function () {
                if (this.isOpen) {
                    return null;
                }
                switch (this.nzPlacement) {
                    case 'left':
                        return "translateX(-100%)";
                    case 'right':
                        return "translateX(100%)";
                    case 'top':
                        return "translateY(-100%)";
                    case 'bottom':
                        return "translateY(100%)";
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzDrawerComponent.prototype, "width", {
            get: /**
             * @return {?}
             */
            function () {
                return this.isLeftOrRight ? core$1.toCssPixel(this.nzWidth) : null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzDrawerComponent.prototype, "height", {
            get: /**
             * @return {?}
             */
            function () {
                return !this.isLeftOrRight ? core$1.toCssPixel(this.nzHeight) : null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzDrawerComponent.prototype, "isLeftOrRight", {
            get: /**
             * @return {?}
             */
            function () {
                return this.nzPlacement === 'left' || this.nzPlacement === 'right';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzDrawerComponent.prototype, "afterOpen", {
            get: /**
             * @return {?}
             */
            function () {
                return this.nzAfterOpen.asObservable();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzDrawerComponent.prototype, "afterClose", {
            get: /**
             * @return {?}
             */
            function () {
                return this.nzAfterClose.asObservable();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} value
         * @return {?}
         */
        NzDrawerComponent.prototype.isTemplateRef = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            return value instanceof core.TemplateRef;
        };
        /**
         * @return {?}
         */
        NzDrawerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.attachOverlay();
            this.updateOverlayStyle();
            this.updateBodyOverflow();
            this.templateContext = { $implicit: this.nzContentParams, drawerRef: (/** @type {?} */ (this)) };
            this.changeDetectorRef.detectChanges();
        };
        /**
         * @return {?}
         */
        NzDrawerComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.attachBodyContent();
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.nzOnViewInit.emit();
            }));
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        NzDrawerComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.hasOwnProperty('nzVisible')) {
                /** @type {?} */
                var value = changes.nzVisible.currentValue;
                if (value) {
                    this.open();
                }
                else {
                    this.close();
                }
            }
        };
        /**
         * @return {?}
         */
        NzDrawerComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.destroy$.next();
            this.destroy$.complete();
            this.disposeOverlay();
        };
        /**
         * @private
         * @return {?}
         */
        NzDrawerComponent.prototype.getAnimationDuration = /**
         * @private
         * @return {?}
         */
        function () {
            return this.nzNoAnimation ? 0 : DRAWER_ANIMATE_DURATION;
        };
        /**
         * @param {?=} result
         * @return {?}
         */
        NzDrawerComponent.prototype.close = /**
         * @param {?=} result
         * @return {?}
         */
        function (result) {
            var _this = this;
            this.isOpen = false;
            this.updateOverlayStyle();
            this.overlayKeyboardDispatcher.remove((/** @type {?} */ (this.overlayRef)));
            this.changeDetectorRef.detectChanges();
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.updateBodyOverflow();
                _this.restoreFocus();
                _this.nzAfterClose.next(result);
                _this.nzAfterClose.complete();
            }), this.getAnimationDuration());
        };
        /**
         * @return {?}
         */
        NzDrawerComponent.prototype.open = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.isOpen = true;
            this.overlayKeyboardDispatcher.add((/** @type {?} */ (this.overlayRef)));
            this.updateOverlayStyle();
            this.updateBodyOverflow();
            this.savePreviouslyFocusedElement();
            this.trapFocus();
            this.changeDetectorRef.detectChanges();
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.nzAfterOpen.next();
            }), this.getAnimationDuration());
        };
        /**
         * @return {?}
         */
        NzDrawerComponent.prototype.closeClick = /**
         * @return {?}
         */
        function () {
            this.nzOnClose.emit();
        };
        /**
         * @return {?}
         */
        NzDrawerComponent.prototype.maskClick = /**
         * @return {?}
         */
        function () {
            if (this.nzMaskClosable && this.nzMask) {
                this.nzOnClose.emit();
            }
        };
        /**
         * @private
         * @return {?}
         */
        NzDrawerComponent.prototype.attachBodyContent = /**
         * @private
         * @return {?}
         */
        function () {
            this.bodyPortalOutlet.dispose();
            if (this.nzContent instanceof core.Type) {
                /** @type {?} */
                var childInjector = new portal.PortalInjector(this.injector, new WeakMap([[NzDrawerRef, this]]));
                /** @type {?} */
                var componentPortal = new portal.ComponentPortal(this.nzContent, null, childInjector);
                /** @type {?} */
                var componentRef = this.bodyPortalOutlet.attachComponentPortal(componentPortal);
                Object.assign(componentRef.instance, this.nzContentParams);
                componentRef.changeDetectorRef.detectChanges();
            }
        };
        /**
         * @private
         * @return {?}
         */
        NzDrawerComponent.prototype.attachOverlay = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            if (!this.overlayRef) {
                this.portal = new portal.TemplatePortal(this.drawerTemplate, this.viewContainerRef);
                this.overlayRef = this.overlay.create(this.getOverlayConfig());
            }
            if (this.overlayRef && !this.overlayRef.hasAttached()) {
                this.overlayRef.attach(this.portal);
                (/** @type {?} */ (this.overlayRef)).keydownEvents()
                    .pipe(operators.takeUntil(this.destroy$))
                    .subscribe((/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    if (event.keyCode === keycodes.ESCAPE && _this.isOpen && _this.nzKeyboard) {
                        _this.nzOnClose.emit();
                    }
                }));
            }
        };
        /**
         * @private
         * @return {?}
         */
        NzDrawerComponent.prototype.disposeOverlay = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.overlayRef) {
                this.overlayRef.dispose();
            }
            this.overlayRef = null;
        };
        /**
         * @private
         * @return {?}
         */
        NzDrawerComponent.prototype.getOverlayConfig = /**
         * @private
         * @return {?}
         */
        function () {
            return new overlay.OverlayConfig({
                positionStrategy: this.overlay.position().global(),
                scrollStrategy: this.overlay.scrollStrategies.block()
            });
        };
        /**
         * @private
         * @return {?}
         */
        NzDrawerComponent.prototype.updateOverlayStyle = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.overlayRef && this.overlayRef.overlayElement) {
                this.renderer.setStyle(this.overlayRef.overlayElement, 'pointer-events', this.isOpen ? 'auto' : 'none');
            }
        };
        /**
         * @private
         * @return {?}
         */
        NzDrawerComponent.prototype.updateBodyOverflow = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.overlayRef) {
                if (this.isOpen) {
                    (/** @type {?} */ (this.overlayRef.getConfig().scrollStrategy)).enable();
                }
                else {
                    (/** @type {?} */ (this.overlayRef.getConfig().scrollStrategy)).disable();
                }
            }
        };
        /**
         * @return {?}
         */
        NzDrawerComponent.prototype.savePreviouslyFocusedElement = /**
         * @return {?}
         */
        function () {
            if (this.document && !this.previouslyFocusedElement) {
                this.previouslyFocusedElement = (/** @type {?} */ (this.document.activeElement));
                // We need the extra check, because IE's svg element has no blur method.
                if (this.previouslyFocusedElement && typeof this.previouslyFocusedElement.blur === 'function') {
                    this.previouslyFocusedElement.blur();
                }
            }
        };
        /**
         * @private
         * @return {?}
         */
        NzDrawerComponent.prototype.trapFocus = /**
         * @private
         * @return {?}
         */
        function () {
            if (!this.focusTrap && this.overlayRef && this.overlayRef.overlayElement) {
                this.focusTrap = this.focusTrapFactory.create((/** @type {?} */ (this.overlayRef)).overlayElement);
                this.focusTrap.focusInitialElement();
            }
        };
        /**
         * @private
         * @return {?}
         */
        NzDrawerComponent.prototype.restoreFocus = /**
         * @private
         * @return {?}
         */
        function () {
            // We need the extra check, because IE can set the `activeElement` to null in some cases.
            if (this.previouslyFocusedElement && typeof this.previouslyFocusedElement.focus === 'function') {
                this.previouslyFocusedElement.focus();
            }
            if (this.focusTrap) {
                this.focusTrap.destroy();
                this.focusTrap = null;
            }
        };
        /** @nocollapse */
        NzDrawerComponent.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: core$1.NzConfigService },
            { type: core.Renderer2 },
            { type: overlay.Overlay },
            { type: core.Injector },
            { type: core.ChangeDetectorRef },
            { type: a11y.FocusTrapFactory },
            { type: core.ViewContainerRef },
            { type: overlay.OverlayKeyboardDispatcher }
        ]; };
        NzDrawerComponent.propDecorators = {
            nzContent: [{ type: core.Input }],
            nzClosable: [{ type: core.Input }],
            nzMaskClosable: [{ type: core.Input }],
            nzMask: [{ type: core.Input }],
            nzNoAnimation: [{ type: core.Input }],
            nzKeyboard: [{ type: core.Input }],
            nzTitle: [{ type: core.Input }],
            nzPlacement: [{ type: core.Input }],
            nzMaskStyle: [{ type: core.Input }],
            nzBodyStyle: [{ type: core.Input }],
            nzWrapClassName: [{ type: core.Input }],
            nzWidth: [{ type: core.Input }],
            nzHeight: [{ type: core.Input }],
            nzZIndex: [{ type: core.Input }],
            nzOffsetX: [{ type: core.Input }],
            nzOffsetY: [{ type: core.Input }],
            nzVisible: [{ type: core.Input }],
            nzOnViewInit: [{ type: core.Output }],
            nzOnClose: [{ type: core.Output }],
            drawerTemplate: [{ type: core.ViewChild, args: ['drawerTemplate', { static: true },] }],
            bodyPortalOutlet: [{ type: core.ViewChild, args: [portal.CdkPortalOutlet, { static: false },] }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzDrawerComponent.prototype, "nzClosable", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, true), core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzDrawerComponent.prototype, "nzMaskClosable", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, true), core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzDrawerComponent.prototype, "nzMask", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzDrawerComponent.prototype, "nzNoAnimation", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzDrawerComponent.prototype, "nzKeyboard", void 0);
NzDrawerComponent.ɵfac = function NzDrawerComponent_Factory(t) { return new (t || NzDrawerComponent)(ɵngcc0.ɵɵdirectiveInject(common.DOCUMENT, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzConfigService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Overlay), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Injector), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.FocusTrapFactory), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.OverlayKeyboardDispatcher)); };
NzDrawerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzDrawerComponent, selectors: [["nz-drawer"]], viewQuery: function NzDrawerComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c0, true);
        ɵngcc0.ɵɵviewQuery(portal.CdkPortalOutlet, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.drawerTemplate = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.bodyPortalOutlet = _t.first);
    } }, inputs: { nzVisible: "nzVisible", nzContent: "nzContent", nzClosable: "nzClosable", nzMaskClosable: "nzMaskClosable", nzMask: "nzMask", nzNoAnimation: "nzNoAnimation", nzKeyboard: "nzKeyboard", nzTitle: "nzTitle", nzPlacement: "nzPlacement", nzMaskStyle: "nzMaskStyle", nzBodyStyle: "nzBodyStyle", nzWrapClassName: "nzWrapClassName", nzWidth: "nzWidth", nzHeight: "nzHeight", nzZIndex: "nzZIndex", nzOffsetX: "nzOffsetX", nzOffsetY: "nzOffsetY" }, outputs: { nzOnViewInit: "nzOnViewInit", nzOnClose: "nzOnClose" }, exportAs: ["nzDrawer"], features: [ɵngcc0.ɵɵInheritDefinitionFeature, ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c1, decls: 2, vars: 0, consts: [["drawerTemplate", ""], [1, "ant-drawer", 3, "nzNoAnimation"], ["class", "ant-drawer-mask", 3, "ngStyle", "click", 4, "ngIf"], [1, "ant-drawer-content"], [1, "ant-drawer-wrapper-body"], [3, "ant-drawer-header", "ant-drawer-header-no-title", 4, "ngIf"], [1, "ant-drawer-body", 3, "ngStyle"], ["cdkPortalOutlet", ""], [4, "ngIf"], [1, "ant-drawer-mask", 3, "ngStyle", "click"], ["class", "ant-drawer-title", 4, "ngIf"], ["aria-label", "Close", "class", "ant-drawer-close", 3, "click", 4, "ngIf"], [1, "ant-drawer-title"], [4, "nzStringTemplateOutlet"], [3, "innerHTML"], ["aria-label", "Close", 1, "ant-drawer-close", 3, "click"], ["nz-icon", "", "nzType", "close"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function NzDrawerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, NzDrawerComponent_ng_template_0_Template, 10, 31, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
    } }, directives: [ɵngcc1.NzNoAnimationDirective, ɵngcc4.NgIf, ɵngcc4.NgStyle, ɵngcc5.CdkPortalOutlet, ɵngcc1.NzStringTemplateOutletDirective, ɵngcc6.NzIconDirective, ɵngcc4.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzDrawerComponent, [{
        type: core.Component,
        args: [{
                selector: 'nz-drawer',
                exportAs: 'nzDrawer',
                template: "<ng-template #drawerTemplate>\r\n  <div\r\n    class=\"ant-drawer\"\r\n    [nzNoAnimation]=\"nzNoAnimation\"\r\n    [class.ant-drawer-open]=\"isOpen\"\r\n    [class.ant-drawer-top]=\"nzPlacement === 'top'\"\r\n    [class.ant-drawer-bottom]=\"nzPlacement === 'bottom'\"\r\n    [class.ant-drawer-right]=\"nzPlacement === 'right'\"\r\n    [class.ant-drawer-left]=\"nzPlacement === 'left'\"\r\n    [style.transform]=\"offsetTransform\"\r\n    [style.zIndex]=\"nzZIndex\">\r\n    <div  class=\"ant-drawer-mask\" (click)=\"maskClick()\" *ngIf=\"nzMask\" [ngStyle]=\"nzMaskStyle\"></div>\r\n    <div class=\"ant-drawer-content-wrapper {{ nzWrapClassName }}\"\r\n         [style.width]=\"width\"\r\n         [style.height]=\"height\"\r\n         [style.transform]=\"transform\">\r\n      <div class=\"ant-drawer-content\">\r\n        <div class=\"ant-drawer-wrapper-body\" [style.height]=\"isLeftOrRight ? '100%' : null\">\r\n          <div *ngIf=\"nzTitle || nzClosable\"\r\n            [class.ant-drawer-header]=\"!!nzTitle\"\r\n            [class.ant-drawer-header-no-title]=\"!!nzTitle\">\r\n            <div *ngIf=\"nzTitle\" class=\"ant-drawer-title\">\r\n              <ng-container *nzStringTemplateOutlet=\"nzTitle\"><div [innerHTML]=\"nzTitle\"></div></ng-container>\r\n            </div>\r\n            <button *ngIf=\"nzClosable\" (click)=\"closeClick()\" aria-label=\"Close\" class=\"ant-drawer-close\">\r\n              <i nz-icon nzType=\"close\"></i>\r\n            </button>\r\n          </div>\r\n          <div class=\"ant-drawer-body\" [ngStyle]=\"nzBodyStyle\">\r\n            <ng-template cdkPortalOutlet></ng-template>\r\n            <ng-container *ngIf=\"isTemplateRef(nzContent)\">\r\n              <ng-container *ngTemplateOutlet=\"nzContent; context: templateContext\"></ng-container>\r\n            </ng-container>\r\n            <ng-content *ngIf=\"!nzContent\"></ng-content>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n",
                preserveWhitespaces: false,
                changeDetection: core.ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: core.Optional
            }, {
                type: core.Inject,
                args: [common.DOCUMENT]
            }] }, { type: ɵngcc1.NzConfigService }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc2.Overlay }, { type: ɵngcc0.Injector }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc3.FocusTrapFactory }, { type: ɵngcc0.ViewContainerRef }, { type: ɵngcc2.OverlayKeyboardDispatcher }]; }, { nzVisible: [{
            type: core.Input
        }], nzContent: [{
            type: core.Input
        }], nzClosable: [{
            type: core.Input
        }], nzMaskClosable: [{
            type: core.Input
        }], nzMask: [{
            type: core.Input
        }], nzNoAnimation: [{
            type: core.Input
        }], nzKeyboard: [{
            type: core.Input
        }], nzTitle: [{
            type: core.Input
        }], nzPlacement: [{
            type: core.Input
        }], nzMaskStyle: [{
            type: core.Input
        }], nzBodyStyle: [{
            type: core.Input
        }], nzWrapClassName: [{
            type: core.Input
        }], nzWidth: [{
            type: core.Input
        }], nzHeight: [{
            type: core.Input
        }], nzZIndex: [{
            type: core.Input
        }], nzOffsetX: [{
            type: core.Input
        }], nzOffsetY: [{
            type: core.Input
        }], nzOnViewInit: [{
            type: core.Output
        }], nzOnClose: [{
            type: core.Output
        }], drawerTemplate: [{
            type: core.ViewChild,
            args: ['drawerTemplate', { static: true }]
        }], bodyPortalOutlet: [{
            type: core.ViewChild,
            args: [portal.CdkPortalOutlet, { static: false }]
        }] }); })();
        return NzDrawerComponent;
    }(NzDrawerRef));
    if (false) {
        /** @type {?} */
        NzDrawerComponent.prototype.nzContent;
        /** @type {?} */
        NzDrawerComponent.prototype.nzClosable;
        /** @type {?} */
        NzDrawerComponent.prototype.nzMaskClosable;
        /** @type {?} */
        NzDrawerComponent.prototype.nzMask;
        /** @type {?} */
        NzDrawerComponent.prototype.nzNoAnimation;
        /** @type {?} */
        NzDrawerComponent.prototype.nzKeyboard;
        /** @type {?} */
        NzDrawerComponent.prototype.nzTitle;
        /** @type {?} */
        NzDrawerComponent.prototype.nzPlacement;
        /** @type {?} */
        NzDrawerComponent.prototype.nzMaskStyle;
        /** @type {?} */
        NzDrawerComponent.prototype.nzBodyStyle;
        /** @type {?} */
        NzDrawerComponent.prototype.nzWrapClassName;
        /** @type {?} */
        NzDrawerComponent.prototype.nzWidth;
        /** @type {?} */
        NzDrawerComponent.prototype.nzHeight;
        /** @type {?} */
        NzDrawerComponent.prototype.nzZIndex;
        /** @type {?} */
        NzDrawerComponent.prototype.nzOffsetX;
        /** @type {?} */
        NzDrawerComponent.prototype.nzOffsetY;
        /** @type {?} */
        NzDrawerComponent.prototype.nzOnViewInit;
        /** @type {?} */
        NzDrawerComponent.prototype.nzOnClose;
        /** @type {?} */
        NzDrawerComponent.prototype.drawerTemplate;
        /** @type {?} */
        NzDrawerComponent.prototype.bodyPortalOutlet;
        /** @type {?} */
        NzDrawerComponent.prototype.destroy$;
        /** @type {?} */
        NzDrawerComponent.prototype.previouslyFocusedElement;
        /** @type {?} */
        NzDrawerComponent.prototype.nzContentParams;
        /** @type {?} */
        NzDrawerComponent.prototype.overlayRef;
        /** @type {?} */
        NzDrawerComponent.prototype.portal;
        /** @type {?} */
        NzDrawerComponent.prototype.focusTrap;
        /** @type {?} */
        NzDrawerComponent.prototype.isOpen;
        /** @type {?} */
        NzDrawerComponent.prototype.templateContext;
        /** @type {?} */
        NzDrawerComponent.prototype.nzAfterOpen;
        /** @type {?} */
        NzDrawerComponent.prototype.nzAfterClose;
        /**
         * @type {?}
         * @private
         */
        NzDrawerComponent.prototype.document;
        /** @type {?} */
        NzDrawerComponent.prototype.nzConfigService;
        /**
         * @type {?}
         * @private
         */
        NzDrawerComponent.prototype.renderer;
        /**
         * @type {?}
         * @private
         */
        NzDrawerComponent.prototype.overlay;
        /**
         * @type {?}
         * @private
         */
        NzDrawerComponent.prototype.injector;
        /**
         * @type {?}
         * @private
         */
        NzDrawerComponent.prototype.changeDetectorRef;
        /**
         * @type {?}
         * @private
         */
        NzDrawerComponent.prototype.focusTrapFactory;
        /**
         * @type {?}
         * @private
         */
        NzDrawerComponent.prototype.viewContainerRef;
        /**
         * @type {?}
         * @private
         */
        NzDrawerComponent.prototype.overlayKeyboardDispatcher;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzDrawerServiceModule = /** @class */ (function () {
        function NzDrawerServiceModule() {
        }
NzDrawerServiceModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzDrawerServiceModule });
NzDrawerServiceModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzDrawerServiceModule_Factory(t) { return new (t || NzDrawerServiceModule)(); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzDrawerServiceModule, [{
        type: core.NgModule
    }], function () { return []; }, null); })();
        return NzDrawerServiceModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzDrawerModule = /** @class */ (function () {
        function NzDrawerModule() {
        }
NzDrawerModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzDrawerModule });
NzDrawerModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzDrawerModule_Factory(t) { return new (t || NzDrawerModule)(); }, imports: [[
            common.CommonModule,
            overlay.OverlayModule,
            portal.PortalModule,
            icon.NzIconModule,
            core$1.NzAddOnModule,
            core$1.NzNoAnimationModule,
            NzDrawerServiceModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzDrawerModule, { declarations: [NzDrawerComponent], imports: [ɵngcc4.CommonModule, ɵngcc2.OverlayModule, ɵngcc5.PortalModule, ɵngcc6.NzIconModule, ɵngcc1.NzAddOnModule, ɵngcc1.NzNoAnimationModule, NzDrawerServiceModule], exports: [NzDrawerComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzDrawerModule, [{
        type: core.NgModule,
        args: [{
                imports: [
                    common.CommonModule,
                    overlay.OverlayModule,
                    portal.PortalModule,
                    icon.NzIconModule,
                    core$1.NzAddOnModule,
                    core$1.NzNoAnimationModule,
                    NzDrawerServiceModule
                ],
                exports: [NzDrawerComponent],
                declarations: [NzDrawerComponent],
                entryComponents: [NzDrawerComponent]
            }]
    }], function () { return []; }, null); })();
        return NzDrawerModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template R
     */
    var   /**
     * @template R
     */
    DrawerBuilderForService = /** @class */ (function () {
        function DrawerBuilderForService(overlay, options) {
            var _this = this;
            this.overlay = overlay;
            this.options = options;
            this.unsubscribe$ = new rxjs.Subject();
            /**
             * pick {\@link NzDrawerOptions.nzOnCancel} and omit this option
             */
            var _a = this.options, nzOnCancel = _a.nzOnCancel, componentOption = __rest(_a, ["nzOnCancel"]);
            this.createDrawer();
            this.updateOptions(componentOption);
            // Prevent repeatedly open drawer when tap focus element.
            (/** @type {?} */ (this.drawerRef)).instance.savePreviouslyFocusedElement();
            (/** @type {?} */ (this.drawerRef)).instance.nzOnViewInit.pipe(operators.takeUntil(this.unsubscribe$)).subscribe((/**
             * @return {?}
             */
            function () {
                (/** @type {?} */ (_this.drawerRef)).instance.open();
            }));
            (/** @type {?} */ (this.drawerRef)).instance.nzOnClose.subscribe((/**
             * @return {?}
             */
            function () {
                if (nzOnCancel) {
                    nzOnCancel().then((/**
                     * @param {?} canClose
                     * @return {?}
                     */
                    function (canClose) {
                        if (canClose !== false) {
                            (/** @type {?} */ (_this.drawerRef)).instance.close();
                        }
                    }));
                }
                else {
                    (/** @type {?} */ (_this.drawerRef)).instance.close();
                }
            }));
            (/** @type {?} */ (this.drawerRef)).instance.afterClose.pipe(operators.takeUntil(this.unsubscribe$)).subscribe((/**
             * @return {?}
             */
            function () {
                _this.overlayRef.dispose();
                _this.drawerRef = null;
                _this.unsubscribe$.next();
                _this.unsubscribe$.complete();
            }));
        }
        /**
         * @return {?}
         */
        DrawerBuilderForService.prototype.getInstance = /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this.drawerRef)) && (/** @type {?} */ (this.drawerRef)).instance;
        };
        /**
         * @return {?}
         */
        DrawerBuilderForService.prototype.createDrawer = /**
         * @return {?}
         */
        function () {
            this.overlayRef = this.overlay.create();
            this.drawerRef = this.overlayRef.attach(new portal.ComponentPortal(NzDrawerComponent));
        };
        /**
         * @param {?} options
         * @return {?}
         */
        DrawerBuilderForService.prototype.updateOptions = /**
         * @param {?} options
         * @return {?}
         */
        function (options) {
            Object.assign((/** @type {?} */ (this.drawerRef)).instance, options);
        };
        return DrawerBuilderForService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        DrawerBuilderForService.prototype.drawerRef;
        /**
         * @type {?}
         * @private
         */
        DrawerBuilderForService.prototype.overlayRef;
        /**
         * @type {?}
         * @private
         */
        DrawerBuilderForService.prototype.unsubscribe$;
        /**
         * @type {?}
         * @private
         */
        DrawerBuilderForService.prototype.overlay;
        /**
         * @type {?}
         * @private
         */
        DrawerBuilderForService.prototype.options;
    }
    var NzDrawerService = /** @class */ (function () {
        function NzDrawerService(overlay) {
            this.overlay = overlay;
        }
        // tslint:disable-next-line:no-any
        // tslint:disable-next-line:no-any
        /**
         * @template T, D, R
         * @param {?} options
         * @return {?}
         */
        NzDrawerService.prototype.create = 
        // tslint:disable-next-line:no-any
        /**
         * @template T, D, R
         * @param {?} options
         * @return {?}
         */
        function (options) {
            return new DrawerBuilderForService(this.overlay, options).getInstance();
        };
        /** @nocollapse */
        NzDrawerService.ctorParameters = function () { return [
            { type: overlay.Overlay }
        ]; };
        /** @nocollapse */ NzDrawerService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function NzDrawerService_Factory() { return new NzDrawerService(core.ɵɵinject(overlay.Overlay)); }, token: NzDrawerService, providedIn: NzDrawerServiceModule });
NzDrawerService.ɵfac = function NzDrawerService_Factory(t) { return new (t || NzDrawerService)(ɵngcc0.ɵɵinject(ɵngcc2.Overlay)); };
NzDrawerService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: NzDrawerService, factory: function (t) { return NzDrawerService.ɵfac(t); }, providedIn: NzDrawerServiceModule });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzDrawerService, [{
        type: core.Injectable,
        args: [{ providedIn: NzDrawerServiceModule }]
    }], function () { return [{ type: ɵngcc2.Overlay }]; }, null); })();
        return NzDrawerService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        NzDrawerService.prototype.overlay;
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
     * @record
     * @template T, D
     */
    function NzDrawerOptionsOfComponent() { }
    if (false) {
        /** @type {?|undefined} */
        NzDrawerOptionsOfComponent.prototype.nzClosable;
        /** @type {?|undefined} */
        NzDrawerOptionsOfComponent.prototype.nzMaskClosable;
        /** @type {?|undefined} */
        NzDrawerOptionsOfComponent.prototype.nzMask;
        /** @type {?|undefined} */
        NzDrawerOptionsOfComponent.prototype.nzKeyboard;
        /** @type {?|undefined} */
        NzDrawerOptionsOfComponent.prototype.nzNoAnimation;
        /** @type {?|undefined} */
        NzDrawerOptionsOfComponent.prototype.nzTitle;
        /** @type {?|undefined} */
        NzDrawerOptionsOfComponent.prototype.nzContent;
        /** @type {?|undefined} */
        NzDrawerOptionsOfComponent.prototype.nzContentParams;
        /** @type {?|undefined} */
        NzDrawerOptionsOfComponent.prototype.nzMaskStyle;
        /** @type {?|undefined} */
        NzDrawerOptionsOfComponent.prototype.nzBodyStyle;
        /** @type {?|undefined} */
        NzDrawerOptionsOfComponent.prototype.nzWrapClassName;
        /** @type {?|undefined} */
        NzDrawerOptionsOfComponent.prototype.nzWidth;
        /** @type {?|undefined} */
        NzDrawerOptionsOfComponent.prototype.nzHeight;
        /** @type {?|undefined} */
        NzDrawerOptionsOfComponent.prototype.nzPlacement;
        /** @type {?|undefined} */
        NzDrawerOptionsOfComponent.prototype.nzZIndex;
        /** @type {?|undefined} */
        NzDrawerOptionsOfComponent.prototype.nzOffsetX;
        /** @type {?|undefined} */
        NzDrawerOptionsOfComponent.prototype.nzOffsetY;
    }
    /**
     * @record
     * @template T, D
     */
    function NzDrawerOptions() { }
    if (false) {
        /**
         * @return {?}
         */
        NzDrawerOptions.prototype.nzOnCancel = function () { };
    }

    exports.DRAWER_ANIMATE_DURATION = DRAWER_ANIMATE_DURATION;
    exports.DrawerBuilderForService = DrawerBuilderForService;
    exports.NzDrawerComponent = NzDrawerComponent;
    exports.NzDrawerModule = NzDrawerModule;
    exports.NzDrawerRef = NzDrawerRef;
    exports.NzDrawerService = NzDrawerService;
    exports.NzDrawerServiceModule = NzDrawerServiceModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));


//# sourceMappingURL=ng-zorro-antd-drawer.umd.js.map
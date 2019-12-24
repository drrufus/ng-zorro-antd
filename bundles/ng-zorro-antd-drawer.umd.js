(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/keycodes'), require('@angular/common'), require('@angular/core'), require('@angular/cdk/a11y'), require('@angular/cdk/overlay'), require('@angular/cdk/portal'), require('rxjs'), require('ng-zorro-antd/core'), require('rxjs/operators'), require('ng-zorro-antd/icon')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/drawer', ['exports', '@angular/cdk/keycodes', '@angular/common', '@angular/core', '@angular/cdk/a11y', '@angular/cdk/overlay', '@angular/cdk/portal', 'rxjs', 'ng-zorro-antd/core', 'rxjs/operators', 'ng-zorro-antd/icon'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].drawer = {}), global.ng.cdk.keycodes, global.ng.common, global.ng.core, global.ng.cdk.a11y, global.ng.cdk.overlay, global.ng.cdk.portal, global.rxjs, global['ng-zorro-antd'].core, global.rxjs.operators, global['ng-zorro-antd'].icon));
}(this, (function (exports, keycodes, common, core, a11y, overlay, portal, rxjs, core$1, operators, icon) { 'use strict';

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
    // tslint:disable-next-line:no-any
    var NzDrawerRef = /** @class */ (function () {
        function NzDrawerRef() {
        }
        return NzDrawerRef;
    }());

    var _c0 = ["drawerTemplate"];
    function NzDrawerComponent_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
        var _r415 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 9);
        core.ɵɵlistener("click", function NzDrawerComponent_ng_template_0_div_1_Template_div_click_0_listener($event) { core.ɵɵrestoreView(_r415); var ctx_r414 = core.ɵɵnextContext(2); return ctx_r414.maskClick(); });
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r409 = core.ɵɵnextContext(2);
        core.ɵɵproperty("ngStyle", ctx_r409.nzMaskStyle);
    } }
    function NzDrawerComponent_ng_template_0_div_5_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelement(1, "div", 14);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r418 = core.ɵɵnextContext(4);
        core.ɵɵadvance(1);
        core.ɵɵproperty("innerHTML", ctx_r418.nzTitle, core.ɵɵsanitizeHtml);
    } }
    function NzDrawerComponent_ng_template_0_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 12);
        core.ɵɵtemplate(1, NzDrawerComponent_ng_template_0_div_5_div_1_ng_container_1_Template, 2, 1, "ng-container", 13);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r416 = core.ɵɵnextContext(3);
        core.ɵɵadvance(1);
        core.ɵɵproperty("nzStringTemplateOutlet", ctx_r416.nzTitle);
    } }
    function NzDrawerComponent_ng_template_0_div_5_button_2_Template(rf, ctx) { if (rf & 1) {
        var _r420 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "button", 15);
        core.ɵɵlistener("click", function NzDrawerComponent_ng_template_0_div_5_button_2_Template_button_click_0_listener($event) { core.ɵɵrestoreView(_r420); var ctx_r419 = core.ɵɵnextContext(3); return ctx_r419.closeClick(); });
        core.ɵɵelement(1, "i", 16);
        core.ɵɵelementEnd();
    } }
    function NzDrawerComponent_ng_template_0_div_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div");
        core.ɵɵtemplate(1, NzDrawerComponent_ng_template_0_div_5_div_1_Template, 2, 1, "div", 10);
        core.ɵɵtemplate(2, NzDrawerComponent_ng_template_0_div_5_button_2_Template, 2, 0, "button", 11);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r410 = core.ɵɵnextContext(2);
        core.ɵɵclassProp("ant-drawer-header", !!ctx_r410.nzTitle)("ant-drawer-header-no-title", !!ctx_r410.nzTitle);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r410.nzTitle);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r410.nzClosable);
    } }
    function NzDrawerComponent_ng_template_0_ng_template_7_Template(rf, ctx) { }
    function NzDrawerComponent_ng_template_0_ng_container_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainer(0);
    } }
    function NzDrawerComponent_ng_template_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, NzDrawerComponent_ng_template_0_ng_container_8_ng_container_1_Template, 1, 0, "ng-container", 17);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r412 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", ctx_r412.nzContent)("ngTemplateOutletContext", ctx_r412.templateContext);
    } }
    function NzDrawerComponent_ng_template_0_9_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵprojection(0, 0, ["*ngIf", "!nzContent"]);
    } }
    function NzDrawerComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 1);
        core.ɵɵtemplate(1, NzDrawerComponent_ng_template_0_div_1_Template, 1, 1, "div", 2);
        core.ɵɵelementStart(2, "div");
        core.ɵɵelementStart(3, "div", 3);
        core.ɵɵelementStart(4, "div", 4);
        core.ɵɵtemplate(5, NzDrawerComponent_ng_template_0_div_5_Template, 3, 4, "div", 5);
        core.ɵɵelementStart(6, "div", 6);
        core.ɵɵtemplate(7, NzDrawerComponent_ng_template_0_ng_template_7_Template, 0, 0, "ng-template", 7);
        core.ɵɵtemplate(8, NzDrawerComponent_ng_template_0_ng_container_8_Template, 2, 2, "ng-container", 8);
        core.ɵɵtemplate(9, NzDrawerComponent_ng_template_0_9_Template, 1, 0, undefined, 8);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r408 = core.ɵɵnextContext();
        core.ɵɵstyleProp("transform", ctx_r408.offsetTransform)("z-index", ctx_r408.nzZIndex);
        core.ɵɵclassProp("ant-drawer-open", ctx_r408.isOpen)("ant-drawer-top", ctx_r408.nzPlacement === "top")("ant-drawer-bottom", ctx_r408.nzPlacement === "bottom")("ant-drawer-right", ctx_r408.nzPlacement === "right")("ant-drawer-left", ctx_r408.nzPlacement === "left");
        core.ɵɵproperty("nzNoAnimation", ctx_r408.nzNoAnimation);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r408.nzMask);
        core.ɵɵadvance(1);
        core.ɵɵclassMapInterpolate1("ant-drawer-content-wrapper ", ctx_r408.nzWrapClassName, "");
        core.ɵɵstyleProp("width", ctx_r408.width)("height", ctx_r408.height)("transform", ctx_r408.transform);
        core.ɵɵadvance(2);
        core.ɵɵstyleProp("height", ctx_r408.isLeftOrRight ? "100%" : null);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r408.nzTitle || ctx_r408.nzClosable);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngStyle", ctx_r408.nzBodyStyle);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", ctx_r408.isTemplateRef(ctx_r408.nzContent));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !ctx_r408.nzContent);
    } }
    var _c1 = ["*"];
    var DRAWER_ANIMATE_DURATION = 300;
    var NZ_CONFIG_COMPONENT_NAME = 'drawer';
    var NzDrawerComponent = /** @class */ (function (_super) {
        __extends(NzDrawerComponent, _super);
        function NzDrawerComponent(
        // tslint:disable-next-line:no-any
        document, nzConfigService, renderer, overlay, injector, changeDetectorRef, focusTrapFactory, viewContainerRef, overlayKeyboardDispatcher) {
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
                drawerRef: _this
            };
            _this.nzAfterOpen = new rxjs.Subject();
            _this.nzAfterClose = new rxjs.Subject();
            return _this;
        }
        Object.defineProperty(NzDrawerComponent.prototype, "nzVisible", {
            get: function () {
                return this.isOpen;
            },
            set: function (value) {
                this.isOpen = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzDrawerComponent.prototype, "offsetTransform", {
            get: function () {
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
            get: function () {
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
            get: function () {
                return this.isLeftOrRight ? core$1.toCssPixel(this.nzWidth) : null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzDrawerComponent.prototype, "height", {
            get: function () {
                return !this.isLeftOrRight ? core$1.toCssPixel(this.nzHeight) : null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzDrawerComponent.prototype, "isLeftOrRight", {
            get: function () {
                return this.nzPlacement === 'left' || this.nzPlacement === 'right';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzDrawerComponent.prototype, "afterOpen", {
            get: function () {
                return this.nzAfterOpen.asObservable();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzDrawerComponent.prototype, "afterClose", {
            get: function () {
                return this.nzAfterClose.asObservable();
            },
            enumerable: true,
            configurable: true
        });
        NzDrawerComponent.prototype.isTemplateRef = function (value) {
            return value instanceof core.TemplateRef;
        };
        NzDrawerComponent.prototype.ngOnInit = function () {
            this.attachOverlay();
            this.updateOverlayStyle();
            this.updateBodyOverflow();
            this.templateContext = { $implicit: this.nzContentParams, drawerRef: this };
            this.changeDetectorRef.detectChanges();
        };
        NzDrawerComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.attachBodyContent();
            setTimeout(function () {
                _this.nzOnViewInit.emit();
            });
        };
        NzDrawerComponent.prototype.ngOnChanges = function (changes) {
            if (changes.hasOwnProperty('nzVisible')) {
                var value = changes.nzVisible.currentValue;
                if (value) {
                    this.open();
                }
                else {
                    this.close();
                }
            }
        };
        NzDrawerComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
            this.disposeOverlay();
        };
        NzDrawerComponent.prototype.getAnimationDuration = function () {
            return this.nzNoAnimation ? 0 : DRAWER_ANIMATE_DURATION;
        };
        NzDrawerComponent.prototype.close = function (result) {
            var _this = this;
            this.isOpen = false;
            this.updateOverlayStyle();
            this.overlayKeyboardDispatcher.remove(this.overlayRef);
            this.changeDetectorRef.detectChanges();
            setTimeout(function () {
                _this.updateBodyOverflow();
                _this.restoreFocus();
                _this.nzAfterClose.next(result);
                _this.nzAfterClose.complete();
            }, this.getAnimationDuration());
        };
        NzDrawerComponent.prototype.open = function () {
            var _this = this;
            this.isOpen = true;
            this.overlayKeyboardDispatcher.add(this.overlayRef);
            this.updateOverlayStyle();
            this.updateBodyOverflow();
            this.savePreviouslyFocusedElement();
            this.trapFocus();
            this.changeDetectorRef.detectChanges();
            setTimeout(function () {
                _this.nzAfterOpen.next();
            }, this.getAnimationDuration());
        };
        NzDrawerComponent.prototype.closeClick = function () {
            this.nzOnClose.emit();
        };
        NzDrawerComponent.prototype.maskClick = function () {
            if (this.nzMaskClosable && this.nzMask) {
                this.nzOnClose.emit();
            }
        };
        NzDrawerComponent.prototype.attachBodyContent = function () {
            this.bodyPortalOutlet.dispose();
            if (this.nzContent instanceof core.Type) {
                var childInjector = new portal.PortalInjector(this.injector, new WeakMap([[NzDrawerRef, this]]));
                var componentPortal = new portal.ComponentPortal(this.nzContent, null, childInjector);
                var componentRef = this.bodyPortalOutlet.attachComponentPortal(componentPortal);
                Object.assign(componentRef.instance, this.nzContentParams);
                componentRef.changeDetectorRef.detectChanges();
            }
        };
        NzDrawerComponent.prototype.attachOverlay = function () {
            var _this = this;
            if (!this.overlayRef) {
                this.portal = new portal.TemplatePortal(this.drawerTemplate, this.viewContainerRef);
                this.overlayRef = this.overlay.create(this.getOverlayConfig());
            }
            if (this.overlayRef && !this.overlayRef.hasAttached()) {
                this.overlayRef.attach(this.portal);
                this.overlayRef.keydownEvents()
                    .pipe(operators.takeUntil(this.destroy$))
                    .subscribe(function (event) {
                    if (event.keyCode === keycodes.ESCAPE && _this.isOpen && _this.nzKeyboard) {
                        _this.nzOnClose.emit();
                    }
                });
            }
        };
        NzDrawerComponent.prototype.disposeOverlay = function () {
            if (this.overlayRef) {
                this.overlayRef.dispose();
            }
            this.overlayRef = null;
        };
        NzDrawerComponent.prototype.getOverlayConfig = function () {
            return new overlay.OverlayConfig({
                positionStrategy: this.overlay.position().global(),
                scrollStrategy: this.overlay.scrollStrategies.block()
            });
        };
        NzDrawerComponent.prototype.updateOverlayStyle = function () {
            if (this.overlayRef && this.overlayRef.overlayElement) {
                this.renderer.setStyle(this.overlayRef.overlayElement, 'pointer-events', this.isOpen ? 'auto' : 'none');
            }
        };
        NzDrawerComponent.prototype.updateBodyOverflow = function () {
            if (this.overlayRef) {
                if (this.isOpen) {
                    this.overlayRef.getConfig().scrollStrategy.enable();
                }
                else {
                    this.overlayRef.getConfig().scrollStrategy.disable();
                }
            }
        };
        NzDrawerComponent.prototype.savePreviouslyFocusedElement = function () {
            if (this.document && !this.previouslyFocusedElement) {
                this.previouslyFocusedElement = this.document.activeElement;
                // We need the extra check, because IE's svg element has no blur method.
                if (this.previouslyFocusedElement && typeof this.previouslyFocusedElement.blur === 'function') {
                    this.previouslyFocusedElement.blur();
                }
            }
        };
        NzDrawerComponent.prototype.trapFocus = function () {
            if (!this.focusTrap && this.overlayRef && this.overlayRef.overlayElement) {
                this.focusTrap = this.focusTrapFactory.create(this.overlayRef.overlayElement);
                this.focusTrap.focusInitialElement();
            }
        };
        NzDrawerComponent.prototype.restoreFocus = function () {
            // We need the extra check, because IE can set the `activeElement` to null in some cases.
            if (this.previouslyFocusedElement && typeof this.previouslyFocusedElement.focus === 'function') {
                this.previouslyFocusedElement.focus();
            }
            if (this.focusTrap) {
                this.focusTrap.destroy();
            }
        };
        /** @nocollapse */ NzDrawerComponent.ɵfac = function NzDrawerComponent_Factory(t) { return new (t || NzDrawerComponent)(core.ɵɵdirectiveInject(common.DOCUMENT, 8), core.ɵɵdirectiveInject(core$1.NzConfigService), core.ɵɵdirectiveInject(core.Renderer2), core.ɵɵdirectiveInject(overlay.Overlay), core.ɵɵdirectiveInject(core.Injector), core.ɵɵdirectiveInject(core.ChangeDetectorRef), core.ɵɵdirectiveInject(a11y.FocusTrapFactory), core.ɵɵdirectiveInject(core.ViewContainerRef), core.ɵɵdirectiveInject(overlay.OverlayKeyboardDispatcher)); };
        /** @nocollapse */ NzDrawerComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzDrawerComponent, selectors: [["nz-drawer"]], viewQuery: function NzDrawerComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵstaticViewQuery(_c0, true);
                core.ɵɵviewQuery(portal.CdkPortalOutlet, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.drawerTemplate = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.bodyPortalOutlet = _t.first);
            } }, inputs: { nzContent: "nzContent", nzClosable: "nzClosable", nzMaskClosable: "nzMaskClosable", nzMask: "nzMask", nzNoAnimation: "nzNoAnimation", nzKeyboard: "nzKeyboard", nzTitle: "nzTitle", nzPlacement: "nzPlacement", nzMaskStyle: "nzMaskStyle", nzBodyStyle: "nzBodyStyle", nzWrapClassName: "nzWrapClassName", nzWidth: "nzWidth", nzHeight: "nzHeight", nzZIndex: "nzZIndex", nzOffsetX: "nzOffsetX", nzOffsetY: "nzOffsetY", nzVisible: "nzVisible" }, outputs: { nzOnViewInit: "nzOnViewInit", nzOnClose: "nzOnClose" }, exportAs: ["nzDrawer"], features: [core.ɵɵInheritDefinitionFeature, core.ɵɵNgOnChangesFeature()], ngContentSelectors: _c1, decls: 2, vars: 0, consts: [["drawerTemplate", ""], [1, "ant-drawer", 3, "nzNoAnimation"], ["class", "ant-drawer-mask", 3, "ngStyle", "click", 4, "ngIf"], [1, "ant-drawer-content"], [1, "ant-drawer-wrapper-body"], [3, "ant-drawer-header", "ant-drawer-header-no-title", 4, "ngIf"], [1, "ant-drawer-body", 3, "ngStyle"], ["cdkPortalOutlet", ""], [4, "ngIf"], [1, "ant-drawer-mask", 3, "ngStyle", "click"], ["class", "ant-drawer-title", 4, "ngIf"], ["aria-label", "Close", "class", "ant-drawer-close", 3, "click", 4, "ngIf"], [1, "ant-drawer-title"], [4, "nzStringTemplateOutlet"], [3, "innerHTML"], ["aria-label", "Close", 1, "ant-drawer-close", 3, "click"], ["nz-icon", "", "nzType", "close"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function NzDrawerComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵtemplate(0, NzDrawerComponent_ng_template_0_Template, 10, 20, "ng-template", null, 0, core.ɵɵtemplateRefExtractor);
            } }, directives: [core$1.NzNoAnimationDirective, common.NgIf, common.NgStyle, portal.CdkPortalOutlet, core$1.NzStringTemplateOutletDirective, icon.NzIconDirective, common.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
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
        return NzDrawerComponent;
    }(NzDrawerRef));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzDrawerComponent, [{
            type: core.Component,
            args: [{
                    selector: 'nz-drawer',
                    exportAs: 'nzDrawer',
                    templateUrl: './nz-drawer.component.html',
                    preserveWhitespaces: false,
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                }]
        }], function () { return [{ type: undefined, decorators: [{
                    type: core.Optional
                }, {
                    type: core.Inject,
                    args: [common.DOCUMENT]
                }] }, { type: core$1.NzConfigService }, { type: core.Renderer2 }, { type: overlay.Overlay }, { type: core.Injector }, { type: core.ChangeDetectorRef }, { type: a11y.FocusTrapFactory }, { type: core.ViewContainerRef }, { type: overlay.OverlayKeyboardDispatcher }]; }, { nzContent: [{
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
            }], nzVisible: [{
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

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzDrawerServiceModule = /** @class */ (function () {
        function NzDrawerServiceModule() {
        }
        /** @nocollapse */ NzDrawerServiceModule.ɵmod = core.ɵɵdefineNgModule({ type: NzDrawerServiceModule });
        /** @nocollapse */ NzDrawerServiceModule.ɵinj = core.ɵɵdefineInjector({ factory: function NzDrawerServiceModule_Factory(t) { return new (t || NzDrawerServiceModule)(); } });
        return NzDrawerServiceModule;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzDrawerServiceModule, [{
            type: core.NgModule
        }], null, null); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzDrawerModule = /** @class */ (function () {
        function NzDrawerModule() {
        }
        /** @nocollapse */ NzDrawerModule.ɵmod = core.ɵɵdefineNgModule({ type: NzDrawerModule });
        /** @nocollapse */ NzDrawerModule.ɵinj = core.ɵɵdefineInjector({ factory: function NzDrawerModule_Factory(t) { return new (t || NzDrawerModule)(); }, imports: [[common.CommonModule, overlay.OverlayModule, portal.PortalModule, icon.NzIconModule, core$1.NzAddOnModule, core$1.NzNoAnimationModule, NzDrawerServiceModule]] });
        return NzDrawerModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(NzDrawerModule, { declarations: [NzDrawerComponent], imports: [common.CommonModule, overlay.OverlayModule, portal.PortalModule, icon.NzIconModule, core$1.NzAddOnModule, core$1.NzNoAnimationModule, NzDrawerServiceModule], exports: [NzDrawerComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzDrawerModule, [{
            type: core.NgModule,
            args: [{
                    imports: [common.CommonModule, overlay.OverlayModule, portal.PortalModule, icon.NzIconModule, core$1.NzAddOnModule, core$1.NzNoAnimationModule, NzDrawerServiceModule],
                    exports: [NzDrawerComponent],
                    declarations: [NzDrawerComponent],
                    entryComponents: [NzDrawerComponent]
                }]
        }], null, null); })();

    var DrawerBuilderForService = /** @class */ (function () {
        function DrawerBuilderForService(overlay, options) {
            var _this = this;
            this.overlay = overlay;
            this.options = options;
            this.unsubscribe$ = new rxjs.Subject();
            /** pick {@link NzDrawerOptions.nzOnCancel} and omit this option */
            var _a = this.options, nzOnCancel = _a.nzOnCancel, componentOption = __rest(_a, ["nzOnCancel"]);
            this.createDrawer();
            this.updateOptions(componentOption);
            // Prevent repeatedly open drawer when tap focus element.
            this.drawerRef.instance.savePreviouslyFocusedElement();
            this.drawerRef.instance.nzOnViewInit.pipe(operators.takeUntil(this.unsubscribe$)).subscribe(function () {
                _this.drawerRef.instance.open();
            });
            this.drawerRef.instance.nzOnClose.subscribe(function () {
                if (nzOnCancel) {
                    nzOnCancel().then(function (canClose) {
                        if (canClose !== false) {
                            _this.drawerRef.instance.close();
                        }
                    });
                }
                else {
                    _this.drawerRef.instance.close();
                }
            });
            this.drawerRef.instance.afterClose.pipe(operators.takeUntil(this.unsubscribe$)).subscribe(function () {
                _this.overlayRef.dispose();
                _this.drawerRef = null;
                _this.unsubscribe$.next();
                _this.unsubscribe$.complete();
            });
        }
        DrawerBuilderForService.prototype.getInstance = function () {
            return this.drawerRef && this.drawerRef.instance;
        };
        DrawerBuilderForService.prototype.createDrawer = function () {
            this.overlayRef = this.overlay.create();
            this.drawerRef = this.overlayRef.attach(new portal.ComponentPortal(NzDrawerComponent));
        };
        DrawerBuilderForService.prototype.updateOptions = function (options) {
            Object.assign(this.drawerRef.instance, options);
        };
        return DrawerBuilderForService;
    }());
    var NzDrawerService = /** @class */ (function () {
        function NzDrawerService(overlay) {
            this.overlay = overlay;
        }
        // tslint:disable-next-line:no-any
        NzDrawerService.prototype.create = function (options) {
            return new DrawerBuilderForService(this.overlay, options).getInstance();
        };
        /** @nocollapse */ NzDrawerService.ɵfac = function NzDrawerService_Factory(t) { return new (t || NzDrawerService)(core.ɵɵinject(overlay.Overlay)); };
        /** @nocollapse */ NzDrawerService.ɵprov = core.ɵɵdefineInjectable({ token: NzDrawerService, factory: NzDrawerService.ɵfac, providedIn: NzDrawerServiceModule });
        return NzDrawerService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzDrawerService, [{
            type: core.Injectable,
            args: [{ providedIn: NzDrawerServiceModule }]
        }], function () { return [{ type: overlay.Overlay }]; }, null); })();

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

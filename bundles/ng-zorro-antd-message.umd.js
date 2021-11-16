(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('ng-zorro-antd/core'),require('@angular/common'),require('@angular/cdk/overlay'),require('ng-zorro-antd/icon'),exports, require('ng-zorro-antd/core'), require('@angular/cdk/overlay'), require('@angular/core'), require('rxjs'), require('@angular/common'), require('ng-zorro-antd/icon')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/message', ['@angular/core','ng-zorro-antd/core','@angular/common','@angular/cdk/overlay','ng-zorro-antd/icon','exports', 'ng-zorro-antd/core', '@angular/cdk/overlay', '@angular/core', 'rxjs', '@angular/common', 'ng-zorro-antd/icon'], factory) :
    (global = global || self, factory(global.ng.core,global.ngZorroAntd.core,global.ng.common,global.ng.cdk.overlay,global.ngZorroAntd.icon,(global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].message = {}), global['ng-zorro-antd'].core, global.ng.cdk.overlay, global.ng.core, global.rxjs, global.ng.common, global['ng-zorro-antd'].icon));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,ɵngcc4,exports, core, overlay, core$1, rxjs, common, icon) { 
function NzMessageContainerComponent_nz_message_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nz-message", 2);
} if (rf & 2) {
    var message_r1 = ctx.$implicit;
    var i_r2 = ctx.index;
    ɵngcc0.ɵɵproperty("nzMessage", message_r1)("nzIndex", i_r2);
} }
function NzMessageComponent_i_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 10);
} }
function NzMessageComponent_i_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 11);
} }
function NzMessageComponent_i_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 12);
} }
function NzMessageComponent_i_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 13);
} }
function NzMessageComponent_i_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 14);
} }
function NzMessageComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelement(1, "span", 15);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r5.nzMessage.content, ɵngcc0.ɵɵsanitizeHtml);
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
    /** @type {?} */
    var globalCounter = 0;
    /**
     * @template ContainerClass, MessageData, MessageConfig
     */
    var   /**
     * @template ContainerClass, MessageData, MessageConfig
     */
    NzMessageBaseService = /** @class */ (function () {
        function NzMessageBaseService(nzSingletonService, overlay, containerClass, injector, cfr, appRef, name) {
            if (name === void 0) { name = ''; }
            this.nzSingletonService = nzSingletonService;
            this.overlay = overlay;
            this.containerClass = containerClass;
            this.injector = injector;
            this.cfr = cfr;
            this.appRef = appRef;
            this.name = name;
            this._container = this.withContainer();
            this.nzSingletonService.registerSingletonWithKey(this.name, this._container);
        }
        /**
         * @param {?=} messageId
         * @return {?}
         */
        NzMessageBaseService.prototype.remove = /**
         * @param {?=} messageId
         * @return {?}
         */
        function (messageId) {
            if (messageId) {
                this._container.removeMessage(messageId);
            }
            else {
                this._container.removeMessageAll();
            }
        };
        /**
         * @param {?} message
         * @param {?=} options
         * @return {?}
         */
        NzMessageBaseService.prototype.createMessage = /**
         * @param {?} message
         * @param {?=} options
         * @return {?}
         */
        function (message, options) {
            /** @type {?} */
            var resultMessage = __assign({}, ((/** @type {?} */ (message))), {
                createdAt: new Date(),
                messageId: this._generateMessageId(),
                options: options
            });
            this._container.createMessage(resultMessage);
            return resultMessage;
        };
        /**
         * @param {?} config
         * @return {?}
         */
        NzMessageBaseService.prototype.config = /**
         * @param {?} config
         * @return {?}
         */
        function (config) {
            core.warnDeprecation("'config' of 'NzMessageService' and 'NzNotificationService' is deprecated and will be removed in 9.0.0. Please use 'set' of 'NzConfigService' instead.");
            this._container.setConfig(config);
        };
        /**
         * @protected
         * @return {?}
         */
        NzMessageBaseService.prototype._generateMessageId = /**
         * @protected
         * @return {?}
         */
        function () {
            return this.name + "-" + globalCounter++;
        };
        // Manually creating container for overlay to avoid multi-checking error, see: https://github.com/NG-ZORRO/ng-zorro-antd/issues/391
        // NOTE: we never clean up the container component and it's overlay resources, if we should, we need to do it by our own codes.
        // Manually creating container for overlay to avoid multi-checking error, see: https://github.com/NG-ZORRO/ng-zorro-antd/issues/391
        // NOTE: we never clean up the container component and it's overlay resources, if we should, we need to do it by our own codes.
        /**
         * @private
         * @return {?}
         */
        NzMessageBaseService.prototype.withContainer = 
        // Manually creating container for overlay to avoid multi-checking error, see: https://github.com/NG-ZORRO/ng-zorro-antd/issues/391
        // NOTE: we never clean up the container component and it's overlay resources, if we should, we need to do it by our own codes.
        /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var containerInstance = this.nzSingletonService.getSingletonWithKey(this.name);
            if (containerInstance) {
                return (/** @type {?} */ (containerInstance));
            }
            /** @type {?} */
            var factory = this.cfr.resolveComponentFactory(this.containerClass);
            /** @type {?} */
            var componentRef = factory.create(this.injector);
            componentRef.changeDetectorRef.detectChanges(); // Immediately change detection to avoid multi-checking error
            this.appRef.attachView(componentRef.hostView); // Load view into app root
            // Load view into app root
            /** @type {?} */
            var overlayPane = this.overlay.create().overlayElement;
            overlayPane.style.zIndex = '1010'; // Patching: assign the same zIndex of ant-message to it's parent overlay panel, to the ant-message's zindex work.
            overlayPane.appendChild((/** @type {?} */ (((/** @type {?} */ (componentRef.hostView))).rootNodes[0])));
            return componentRef.instance;
        };
        return NzMessageBaseService;
    }());
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        NzMessageBaseService.prototype._container;
        /**
         * @type {?}
         * @private
         */
        NzMessageBaseService.prototype.nzSingletonService;
        /**
         * @type {?}
         * @private
         */
        NzMessageBaseService.prototype.overlay;
        /**
         * @type {?}
         * @private
         */
        NzMessageBaseService.prototype.containerClass;
        /**
         * @type {?}
         * @private
         */
        NzMessageBaseService.prototype.injector;
        /**
         * @type {?}
         * @private
         */
        NzMessageBaseService.prototype.cfr;
        /**
         * @type {?}
         * @private
         */
        NzMessageBaseService.prototype.appRef;
        /**
         * @type {?}
         * @private
         */
        NzMessageBaseService.prototype.name;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @deprecated This interface has been removed to `ng-zorro-antd/core`. Please migrate to that.
     * @record
     */
    function NzMessageConfigLegacy() { }
    if (false) {
        /** @type {?|undefined} */
        NzMessageConfigLegacy.prototype.nzAnimate;
        /** @type {?|undefined} */
        NzMessageConfigLegacy.prototype.nzDuration;
        /** @type {?|undefined} */
        NzMessageConfigLegacy.prototype.nzMaxStack;
        /** @type {?|undefined} */
        NzMessageConfigLegacy.prototype.nzPauseOnHover;
        /** @type {?|undefined} */
        NzMessageConfigLegacy.prototype.nzTop;
    }
    /** @type {?} */
    var NZ_MESSAGE_DEFAULT_CONFIG = new core$1.InjectionToken('NZ_MESSAGE_DEFAULT_CONFIG');
    /**
     * @deprecated 9.0.0 - Injection token 'NZ_MESSAGE_CONFIG' is deprecated and will be removed in 9.0.0. Please use 'NzConfigService' instead.
     * @type {?}
     */
    var NZ_MESSAGE_CONFIG = new core$1.InjectionToken('NZ_MESSAGE_CONFIG');
    var ɵ0 = {
        nzAnimate: true,
        nzDuration: 3000,
        nzMaxStack: 7,
        nzPauseOnHover: true,
        nzTop: 24
    };
    /** @type {?} */
    var NZ_MESSAGE_DEFAULT_CONFIG_PROVIDER = {
        provide: NZ_MESSAGE_DEFAULT_CONFIG,
        useValue: ɵ0
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var NZ_CONFIG_COMPONENT_NAME = 'message';
    var NzMessageContainerComponent = /** @class */ (function () {
        function NzMessageContainerComponent(cdr, nzConfigService, defaultConfig, config) {
            this.cdr = cdr;
            this.nzConfigService = nzConfigService;
            this.messages = [];
            if (!!config) {
                core.warnDeprecation("Injection token 'NZ_MESSAGE_CONFIG' is deprecated and will be removed in 9.0.0. Please use 'NzConfigService' instead.");
            }
            this.setConfig(__assign({}, defaultConfig, config));
        }
        /**
         * @return {?}
         */
        NzMessageContainerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.subscribeConfigChange();
        };
        /**
         * @param {?=} config
         * @return {?}
         */
        NzMessageContainerComponent.prototype.setConfig = /**
         * @param {?=} config
         * @return {?}
         */
        function (config) {
            this.config = this.mergeMessageConfig(config);
            this.top = core.toCssPixel(this.config.nzTop);
            this.cdr.markForCheck();
        };
        /**
         * Create a new message.
         * @param message Parsed message configuration.
         */
        /**
         * Create a new message.
         * @param {?} message Parsed message configuration.
         * @return {?}
         */
        NzMessageContainerComponent.prototype.createMessage = /**
         * Create a new message.
         * @param {?} message Parsed message configuration.
         * @return {?}
         */
        function (message) {
            if (this.messages.length >= this.config.nzMaxStack) {
                this.messages.splice(0, 1);
            }
            message.options = this._mergeMessageOptions(message.options);
            message.onClose = new rxjs.Subject();
            this.messages.push(message);
            this.cdr.detectChanges();
        };
        /**
         * Remove a message by `messageId`.
         * @param messageId Id of the message to be removed.
         * @param userAction Whether this is closed by user interaction.
         */
        /**
         * Remove a message by `messageId`.
         * @param {?} messageId Id of the message to be removed.
         * @param {?=} userAction Whether this is closed by user interaction.
         * @return {?}
         */
        NzMessageContainerComponent.prototype.removeMessage = /**
         * Remove a message by `messageId`.
         * @param {?} messageId Id of the message to be removed.
         * @param {?=} userAction Whether this is closed by user interaction.
         * @return {?}
         */
        function (messageId, userAction) {
            var _this = this;
            if (userAction === void 0) { userAction = false; }
            this.messages.some((/**
             * @param {?} message
             * @param {?} index
             * @return {?}
             */
            function (message, index) {
                if (message.messageId === messageId) {
                    _this.messages.splice(index, 1);
                    _this.cdr.detectChanges();
                    (/** @type {?} */ (message.onClose)).next(userAction);
                    (/** @type {?} */ (message.onClose)).complete();
                    return true;
                }
                return false;
            }));
        };
        /**
         * Remove all messages.
         */
        /**
         * Remove all messages.
         * @return {?}
         */
        NzMessageContainerComponent.prototype.removeMessageAll = /**
         * Remove all messages.
         * @return {?}
         */
        function () {
            this.messages = [];
            this.cdr.detectChanges();
        };
        /**
         * @protected
         * @return {?}
         */
        NzMessageContainerComponent.prototype.subscribeConfigChange = /**
         * @protected
         * @return {?}
         */
        function () {
            var _this = this;
            this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME).subscribe((/**
             * @return {?}
             */
            function () { return _this.setConfig(); }));
        };
        /**
         * @protected
         * @param {?=} config
         * @return {?}
         */
        NzMessageContainerComponent.prototype.mergeMessageConfig = /**
         * @protected
         * @param {?=} config
         * @return {?}
         */
        function (config) {
            return __assign({}, this.config, config, this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME));
        };
        /**
         * Merge default options and custom message options
         * @param options
         */
        /**
         * Merge default options and custom message options
         * @protected
         * @param {?=} options
         * @return {?}
         */
        NzMessageContainerComponent.prototype._mergeMessageOptions = /**
         * Merge default options and custom message options
         * @protected
         * @param {?=} options
         * @return {?}
         */
        function (options) {
            /** @type {?} */
            var defaultOptions = {
                nzDuration: this.config.nzDuration,
                nzAnimate: this.config.nzAnimate,
                nzPauseOnHover: this.config.nzPauseOnHover
            };
            return __assign({}, defaultOptions, options);
        };
        /** @nocollapse */
        NzMessageContainerComponent.ctorParameters = function () { return [
            { type: core$1.ChangeDetectorRef },
            { type: core.NzConfigService },
            { type: undefined, decorators: [{ type: core$1.Optional }, { type: core$1.Inject, args: [NZ_MESSAGE_DEFAULT_CONFIG,] }] },
            { type: undefined, decorators: [{ type: core$1.Optional }, { type: core$1.Inject, args: [NZ_MESSAGE_CONFIG,] }] }
        ]; };
NzMessageContainerComponent.ɵfac = function NzMessageContainerComponent_Factory(t) { return new (t || NzMessageContainerComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzConfigService), ɵngcc0.ɵɵdirectiveInject(NZ_MESSAGE_DEFAULT_CONFIG, 8), ɵngcc0.ɵɵdirectiveInject(NZ_MESSAGE_CONFIG, 8)); };
NzMessageContainerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzMessageContainerComponent, selectors: [["nz-message-container"]], exportAs: ["nzMessageContainer"], decls: 2, vars: 3, consts: [[1, "ant-message"], [3, "nzMessage", "nzIndex", 4, "ngFor", "ngForOf"], [3, "nzMessage", "nzIndex"]], template: function NzMessageContainerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, NzMessageContainerComponent_nz_message_1_Template, 1, 2, "nz-message", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("top", ctx.top);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.messages);
    } }, directives: function () { return [ɵngcc2.NgForOf, NzMessageComponent]; }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzMessageContainerComponent, [{
        type: core$1.Component,
        args: [{
                changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                encapsulation: core$1.ViewEncapsulation.None,
                selector: 'nz-message-container',
                exportAs: 'nzMessageContainer',
                preserveWhitespaces: false,
                template: "<div class=\"ant-message\" [style.top]=\"top\">\r\n  <nz-message *ngFor=\"let message of messages; let i = index\" [nzMessage]=\"message\" [nzIndex]=\"i\"></nz-message>\r\n</div>"
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc1.NzConfigService }, { type: undefined, decorators: [{
                type: core$1.Optional
            }, {
                type: core$1.Inject,
                args: [NZ_MESSAGE_DEFAULT_CONFIG]
            }] }, { type: undefined, decorators: [{
                type: core$1.Optional
            }, {
                type: core$1.Inject,
                args: [NZ_MESSAGE_CONFIG]
            }] }]; }, null); })();
        return NzMessageContainerComponent;
    }());
    if (false) {
        /** @type {?} */
        NzMessageContainerComponent.prototype.messages;
        /** @type {?} */
        NzMessageContainerComponent.prototype.config;
        /** @type {?} */
        NzMessageContainerComponent.prototype.top;
        /**
         * @type {?}
         * @protected
         */
        NzMessageContainerComponent.prototype.cdr;
        /**
         * @type {?}
         * @protected
         */
        NzMessageContainerComponent.prototype.nzConfigService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzMessageServiceModule = /** @class */ (function () {
        function NzMessageServiceModule() {
        }
NzMessageServiceModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzMessageServiceModule });
NzMessageServiceModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzMessageServiceModule_Factory(t) { return new (t || NzMessageServiceModule)(); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzMessageServiceModule, [{
        type: core$1.NgModule
    }], function () { return []; }, null); })();
        return NzMessageServiceModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzMessageService = /** @class */ (function (_super) {
        __extends(NzMessageService, _super);
        function NzMessageService(nzSingletonService, overlay, injector, cfr, appRef) {
            return _super.call(this, nzSingletonService, overlay, NzMessageContainerComponent, injector, cfr, appRef, 'message') || this;
        }
        // Shortcut methods
        // Shortcut methods
        /**
         * @param {?} content
         * @param {?=} options
         * @return {?}
         */
        NzMessageService.prototype.success = 
        // Shortcut methods
        /**
         * @param {?} content
         * @param {?=} options
         * @return {?}
         */
        function (content, options) {
            return this.createMessage({ type: 'success', content: content }, options);
        };
        /**
         * @param {?} content
         * @param {?=} options
         * @return {?}
         */
        NzMessageService.prototype.error = /**
         * @param {?} content
         * @param {?=} options
         * @return {?}
         */
        function (content, options) {
            return this.createMessage({ type: 'error', content: content }, options);
        };
        /**
         * @param {?} content
         * @param {?=} options
         * @return {?}
         */
        NzMessageService.prototype.info = /**
         * @param {?} content
         * @param {?=} options
         * @return {?}
         */
        function (content, options) {
            return this.createMessage({ type: 'info', content: content }, options);
        };
        /**
         * @param {?} content
         * @param {?=} options
         * @return {?}
         */
        NzMessageService.prototype.warning = /**
         * @param {?} content
         * @param {?=} options
         * @return {?}
         */
        function (content, options) {
            return this.createMessage({ type: 'warning', content: content }, options);
        };
        /**
         * @param {?} content
         * @param {?=} options
         * @return {?}
         */
        NzMessageService.prototype.loading = /**
         * @param {?} content
         * @param {?=} options
         * @return {?}
         */
        function (content, options) {
            return this.createMessage({ type: 'loading', content: content }, options);
        };
        /**
         * @param {?} type
         * @param {?} content
         * @param {?=} options
         * @return {?}
         */
        NzMessageService.prototype.create = /**
         * @param {?} type
         * @param {?} content
         * @param {?=} options
         * @return {?}
         */
        function (type, content, options) {
            return this.createMessage({ type: type, content: content }, options);
        };
        /** @nocollapse */
        NzMessageService.ctorParameters = function () { return [
            { type: core.NzSingletonService },
            { type: overlay.Overlay },
            { type: core$1.Injector },
            { type: core$1.ComponentFactoryResolver },
            { type: core$1.ApplicationRef }
        ]; };
        /** @nocollapse */ NzMessageService.ngInjectableDef = core$1.ɵɵdefineInjectable({ factory: function NzMessageService_Factory() { return new NzMessageService(core$1.ɵɵinject(core.NzSingletonService), core$1.ɵɵinject(overlay.Overlay), core$1.ɵɵinject(core$1.INJECTOR), core$1.ɵɵinject(core$1.ComponentFactoryResolver), core$1.ɵɵinject(core$1.ApplicationRef)); }, token: NzMessageService, providedIn: NzMessageServiceModule });
NzMessageService.ɵfac = function NzMessageService_Factory(t) { return new (t || NzMessageService)(ɵngcc0.ɵɵinject(ɵngcc1.NzSingletonService), ɵngcc0.ɵɵinject(ɵngcc3.Overlay), ɵngcc0.ɵɵinject(ɵngcc0.Injector), ɵngcc0.ɵɵinject(ɵngcc0.ComponentFactoryResolver), ɵngcc0.ɵɵinject(ɵngcc0.ApplicationRef)); };
NzMessageService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: NzMessageService, factory: function (t) { return NzMessageService.ɵfac(t); }, providedIn: NzMessageServiceModule });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzMessageService, [{
        type: core$1.Injectable,
        args: [{
                providedIn: NzMessageServiceModule
            }]
    }], function () { return [{ type: ɵngcc1.NzSingletonService }, { type: ɵngcc3.Overlay }, { type: ɵngcc0.Injector }, { type: ɵngcc0.ComponentFactoryResolver }, { type: ɵngcc0.ApplicationRef }]; }, null); })();
        return NzMessageService;
    }(NzMessageBaseService));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzMessageComponent = /** @class */ (function () {
        function NzMessageComponent(_messageContainer, cdr) {
            this._messageContainer = _messageContainer;
            this.cdr = cdr;
            // Whether to set a timeout to destroy itself.
            this._eraseTimer = null;
        }
        /**
         * @return {?}
         */
        NzMessageComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            // `NzMessageContainer` does its job so all properties cannot be undefined.
            this._options = (/** @type {?} */ (this.nzMessage.options));
            if (this._options.nzAnimate) {
                this.nzMessage.state = 'enter';
            }
            this._autoErase = this._options.nzDuration > 0;
            if (this._autoErase) {
                this._initErase();
                this._startEraseTimeout();
            }
        };
        /**
         * @return {?}
         */
        NzMessageComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            if (this._autoErase) {
                this._clearEraseTimeout();
            }
        };
        /**
         * @return {?}
         */
        NzMessageComponent.prototype.onEnter = /**
         * @return {?}
         */
        function () {
            if (this._autoErase && this._options.nzPauseOnHover) {
                this._clearEraseTimeout();
                this._updateTTL();
            }
        };
        /**
         * @return {?}
         */
        NzMessageComponent.prototype.onLeave = /**
         * @return {?}
         */
        function () {
            if (this._autoErase && this._options.nzPauseOnHover) {
                this._startEraseTimeout();
            }
        };
        // Remove self
        // Remove self
        /**
         * @protected
         * @param {?=} userAction
         * @return {?}
         */
        NzMessageComponent.prototype._destroy = 
        // Remove self
        /**
         * @protected
         * @param {?=} userAction
         * @return {?}
         */
        function (userAction) {
            var _this = this;
            if (userAction === void 0) { userAction = false; }
            if (this._options.nzAnimate) {
                this.nzMessage.state = 'leave';
                this.cdr.detectChanges();
                setTimeout((/**
                 * @return {?}
                 */
                function () { return _this._messageContainer.removeMessage(_this.nzMessage.messageId, userAction); }), 200);
            }
            else {
                this._messageContainer.removeMessage(this.nzMessage.messageId, userAction);
            }
        };
        /**
         * @private
         * @return {?}
         */
        NzMessageComponent.prototype._initErase = /**
         * @private
         * @return {?}
         */
        function () {
            this._eraseTTL = this._options.nzDuration;
            this._eraseTimingStart = Date.now();
        };
        /**
         * @private
         * @return {?}
         */
        NzMessageComponent.prototype._updateTTL = /**
         * @private
         * @return {?}
         */
        function () {
            if (this._autoErase) {
                this._eraseTTL -= Date.now() - this._eraseTimingStart;
            }
        };
        /**
         * @private
         * @return {?}
         */
        NzMessageComponent.prototype._startEraseTimeout = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            if (this._eraseTTL > 0) {
                this._clearEraseTimeout();
                this._eraseTimer = setTimeout((/**
                 * @return {?}
                 */
                function () { return _this._destroy(); }), this._eraseTTL);
                this._eraseTimingStart = Date.now();
            }
            else {
                this._destroy();
            }
        };
        /**
         * @private
         * @return {?}
         */
        NzMessageComponent.prototype._clearEraseTimeout = /**
         * @private
         * @return {?}
         */
        function () {
            if (this._eraseTimer !== null) {
                clearTimeout(this._eraseTimer);
                this._eraseTimer = null;
            }
        };
        /** @nocollapse */
        NzMessageComponent.ctorParameters = function () { return [
            { type: NzMessageContainerComponent },
            { type: core$1.ChangeDetectorRef }
        ]; };
        NzMessageComponent.propDecorators = {
            nzMessage: [{ type: core$1.Input }],
            nzIndex: [{ type: core$1.Input }]
        };
NzMessageComponent.ɵfac = function NzMessageComponent_Factory(t) { return new (t || NzMessageComponent)(ɵngcc0.ɵɵdirectiveInject(NzMessageContainerComponent), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
NzMessageComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzMessageComponent, selectors: [["nz-message"]], inputs: { nzMessage: "nzMessage", nzIndex: "nzIndex" }, exportAs: ["nzMessage"], decls: 10, vars: 9, consts: [[1, "ant-message-notice", 3, "mouseenter", "mouseleave"], [1, "ant-message-notice-content"], [1, "ant-message-custom-content", 3, "ngClass"], [3, "ngSwitch"], ["nz-icon", "", "nzType", "check-circle", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "info-circle", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "exclamation-circle", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "close-circle", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "loading", 4, "ngSwitchCase"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", "nzType", "check-circle"], ["nz-icon", "", "nzType", "info-circle"], ["nz-icon", "", "nzType", "exclamation-circle"], ["nz-icon", "", "nzType", "close-circle"], ["nz-icon", "", "nzType", "loading"], [3, "innerHTML"]], template: function NzMessageComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵlistener("mouseenter", function NzMessageComponent_Template_div_mouseenter_0_listener() { return ctx.onEnter(); })("mouseleave", function NzMessageComponent_Template_div_mouseleave_0_listener() { return ctx.onLeave(); });
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵelementContainerStart(3, 3);
        ɵngcc0.ɵɵtemplate(4, NzMessageComponent_i_4_Template, 1, 0, "i", 4);
        ɵngcc0.ɵɵtemplate(5, NzMessageComponent_i_5_Template, 1, 0, "i", 5);
        ɵngcc0.ɵɵtemplate(6, NzMessageComponent_i_6_Template, 1, 0, "i", 6);
        ɵngcc0.ɵɵtemplate(7, NzMessageComponent_i_7_Template, 1, 0, "i", 7);
        ɵngcc0.ɵɵtemplate(8, NzMessageComponent_i_8_Template, 1, 0, "i", 8);
        ɵngcc0.ɵɵelementContainerEnd();
        ɵngcc0.ɵɵtemplate(9, NzMessageComponent_ng_container_9_Template, 2, 1, "ng-container", 9);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("@moveUpMotion", ctx.nzMessage.state);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngClass", "ant-message-" + ctx.nzMessage.type);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitch", ctx.nzMessage.type);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitchCase", "success");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitchCase", "info");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitchCase", "warning");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitchCase", "error");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitchCase", "loading");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx.nzMessage.content);
    } }, directives: [ɵngcc2.NgClass, ɵngcc2.NgSwitch, ɵngcc2.NgSwitchCase, ɵngcc1.NzStringTemplateOutletDirective, ɵngcc4.NzIconDirective], encapsulation: 2, data: { animation: [core.moveUpMotion] }, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzMessageComponent, [{
        type: core$1.Component,
        args: [{
                changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                encapsulation: core$1.ViewEncapsulation.None,
                selector: 'nz-message',
                exportAs: 'nzMessage',
                preserveWhitespaces: false,
                animations: [core.moveUpMotion],
                template: "<div class=\"ant-message-notice\"\r\n  [@moveUpMotion]=\"nzMessage.state\"\r\n  (mouseenter)=\"onEnter()\"\r\n  (mouseleave)=\"onLeave()\">\r\n  <div class=\"ant-message-notice-content\">\r\n    <div class=\"ant-message-custom-content\" [ngClass]=\"'ant-message-' + nzMessage.type\">\r\n      <ng-container [ngSwitch]=\"nzMessage.type\">\r\n        <i *ngSwitchCase=\"'success'\" nz-icon nzType=\"check-circle\"></i>\r\n        <i *ngSwitchCase=\"'info'\"  nz-icon nzType=\"info-circle\"></i>\r\n        <i *ngSwitchCase=\"'warning'\" nz-icon nzType=\"exclamation-circle\"></i>\r\n        <i *ngSwitchCase=\"'error'\" nz-icon nzType=\"close-circle\"></i>\r\n        <i *ngSwitchCase=\"'loading'\" nz-icon nzType=\"loading\"></i>\r\n      </ng-container>\r\n      <ng-container *nzStringTemplateOutlet=\"nzMessage.content\">\r\n        <span [innerHTML]=\"nzMessage.content\"></span>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n</div>\r\n"
            }]
    }], function () { return [{ type: NzMessageContainerComponent }, { type: ɵngcc0.ChangeDetectorRef }]; }, { nzMessage: [{
            type: core$1.Input
        }], nzIndex: [{
            type: core$1.Input
        }] }); })();
        return NzMessageComponent;
    }());
    if (false) {
        /** @type {?} */
        NzMessageComponent.prototype.nzMessage;
        /** @type {?} */
        NzMessageComponent.prototype.nzIndex;
        /**
         * @type {?}
         * @protected
         */
        NzMessageComponent.prototype._options;
        /**
         * @type {?}
         * @private
         */
        NzMessageComponent.prototype._autoErase;
        /**
         * @type {?}
         * @private
         */
        NzMessageComponent.prototype._eraseTimer;
        /**
         * @type {?}
         * @private
         */
        NzMessageComponent.prototype._eraseTimingStart;
        /**
         * @type {?}
         * @private
         */
        NzMessageComponent.prototype._eraseTTL;
        /**
         * @type {?}
         * @private
         */
        NzMessageComponent.prototype._messageContainer;
        /**
         * @type {?}
         * @protected
         */
        NzMessageComponent.prototype.cdr;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzMessageModule = /** @class */ (function () {
        function NzMessageModule() {
        }
NzMessageModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzMessageModule });
NzMessageModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzMessageModule_Factory(t) { return new (t || NzMessageModule)(); }, providers: [NZ_MESSAGE_DEFAULT_CONFIG_PROVIDER], imports: [[common.CommonModule, overlay.OverlayModule, icon.NzIconModule, core.NzAddOnModule, NzMessageServiceModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzMessageModule, { declarations: [NzMessageContainerComponent,
        NzMessageComponent], imports: [ɵngcc2.CommonModule, ɵngcc3.OverlayModule, ɵngcc4.NzIconModule, ɵngcc1.NzAddOnModule, NzMessageServiceModule] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzMessageModule, [{
        type: core$1.NgModule,
        args: [{
                imports: [common.CommonModule, overlay.OverlayModule, icon.NzIconModule, core.NzAddOnModule, NzMessageServiceModule],
                declarations: [NzMessageContainerComponent, NzMessageComponent],
                providers: [NZ_MESSAGE_DEFAULT_CONFIG_PROVIDER],
                entryComponents: [NzMessageContainerComponent]
            }]
    }], function () { return []; }, null); })();
        return NzMessageModule;
    }());

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
     */
    function NzMessageDataOptions() { }
    if (false) {
        /** @type {?|undefined} */
        NzMessageDataOptions.prototype.nzDuration;
        /** @type {?|undefined} */
        NzMessageDataOptions.prototype.nzAnimate;
        /** @type {?|undefined} */
        NzMessageDataOptions.prototype.nzPauseOnHover;
    }
    /**
     * Message data for terminal users.
     * @record
     */
    function NzMessageData() { }
    if (false) {
        /** @type {?|undefined} */
        NzMessageData.prototype.type;
        /** @type {?|undefined} */
        NzMessageData.prototype.content;
    }
    /**
     * Filled version of NzMessageData (includes more private properties).
     * @record
     */
    function NzMessageDataFilled() { }
    if (false) {
        /** @type {?} */
        NzMessageDataFilled.prototype.messageId;
        /** @type {?} */
        NzMessageDataFilled.prototype.createdAt;
        /** @type {?|undefined} */
        NzMessageDataFilled.prototype.options;
        /** @type {?|undefined} */
        NzMessageDataFilled.prototype.state;
        /** @type {?|undefined} */
        NzMessageDataFilled.prototype.onClose;
    }

    exports.NZ_MESSAGE_CONFIG = NZ_MESSAGE_CONFIG;
    exports.NZ_MESSAGE_DEFAULT_CONFIG = NZ_MESSAGE_DEFAULT_CONFIG;
    exports.NZ_MESSAGE_DEFAULT_CONFIG_PROVIDER = NZ_MESSAGE_DEFAULT_CONFIG_PROVIDER;
    exports.NzMessageBaseService = NzMessageBaseService;
    exports.NzMessageComponent = NzMessageComponent;
    exports.NzMessageContainerComponent = NzMessageContainerComponent;
    exports.NzMessageModule = NzMessageModule;
    exports.NzMessageService = NzMessageService;
    exports.NzMessageServiceModule = NzMessageServiceModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-zorro-antd-message.umd.js.map
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('ng-zorro-antd/core'), require('@angular/cdk/overlay'), require('@angular/core'), require('rxjs'), require('@angular/common'), require('ng-zorro-antd/icon'), require('@angular/cdk/bidi'), require('@angular/cdk/scrolling')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/message', ['exports', 'ng-zorro-antd/core', '@angular/cdk/overlay', '@angular/core', 'rxjs', '@angular/common', 'ng-zorro-antd/icon', '@angular/cdk/bidi', '@angular/cdk/scrolling'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].message = {}), global['ng-zorro-antd'].core, global.ng.cdk.overlay, global.ng.core, global.rxjs, global.ng.common, global['ng-zorro-antd'].icon, global.ng.cdk.bidi, global.ng.cdk.scrolling));
}(this, (function (exports, core, overlay, core$1, rxjs, common, icon, bidi, scrolling) { 'use strict';

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
    var globalCounter = 0;
    var NzMessageBaseService = /** @class */ (function () {
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
        NzMessageBaseService.prototype.remove = function (messageId) {
            if (messageId) {
                this._container.removeMessage(messageId);
            }
            else {
                this._container.removeMessageAll();
            }
        };
        NzMessageBaseService.prototype.createMessage = function (message, options) {
            var resultMessage = __assign(__assign({}, message), {
                createdAt: new Date(),
                messageId: this._generateMessageId(),
                options: options
            });
            this._container.createMessage(resultMessage);
            return resultMessage;
        };
        NzMessageBaseService.prototype.config = function (config) {
            core.warnDeprecation("'config' of 'NzMessageService' and 'NzNotificationService' is deprecated and will be removed in 9.0.0. Please use 'set' of 'NzConfigService' instead.");
            this._container.setConfig(config);
        };
        NzMessageBaseService.prototype._generateMessageId = function () {
            return this.name + "-" + globalCounter++;
        };
        // Manually creating container for overlay to avoid multi-checking error, see: https://github.com/NG-ZORRO/ng-zorro-antd/issues/391
        // NOTE: we never clean up the container component and it's overlay resources, if we should, we need to do it by our own codes.
        NzMessageBaseService.prototype.withContainer = function () {
            var containerInstance = this.nzSingletonService.getSingletonWithKey(this.name);
            if (containerInstance) {
                return containerInstance;
            }
            var factory = this.cfr.resolveComponentFactory(this.containerClass);
            var componentRef = factory.create(this.injector); // Use root injector
            componentRef.changeDetectorRef.detectChanges(); // Immediately change detection to avoid multi-checking error
            this.appRef.attachView(componentRef.hostView); // Load view into app root
            var overlayPane = this.overlay.create().overlayElement;
            overlayPane.style.zIndex = '1010'; // Patching: assign the same zIndex of ant-message to it's parent overlay panel, to the ant-message's zindex work.
            overlayPane.appendChild(componentRef.hostView.rootNodes[0]);
            return componentRef.instance;
        };
        return NzMessageBaseService;
    }());

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NZ_MESSAGE_DEFAULT_CONFIG = new core$1.InjectionToken('NZ_MESSAGE_DEFAULT_CONFIG');
    /**
     * @deprecated 9.0.0 - Injection token 'NZ_MESSAGE_CONFIG' is deprecated and will be removed in 9.0.0. Please use 'NzConfigService' instead.
     */
    var NZ_MESSAGE_CONFIG = new core$1.InjectionToken('NZ_MESSAGE_CONFIG');
    var NZ_MESSAGE_DEFAULT_CONFIG_PROVIDER = {
        provide: NZ_MESSAGE_DEFAULT_CONFIG,
        useValue: {
            nzAnimate: true,
            nzDuration: 3000,
            nzMaxStack: 7,
            nzPauseOnHover: true,
            nzTop: 24
        }
    };

    function NzMessageContainerComponent_nz_message_1_Template(rf, ctx) { if (rf & 1) {
        core$1.ɵɵelement(0, "nz-message", 2);
    } if (rf & 2) {
        var message_r610 = ctx.$implicit;
        var i_r611 = ctx.index;
        core$1.ɵɵproperty("nzMessage", message_r610)("nzIndex", i_r611);
    } }
    var NZ_CONFIG_COMPONENT_NAME = 'message';
    var NzMessageContainerComponent = /** @class */ (function () {
        function NzMessageContainerComponent(cdr, nzConfigService, defaultConfig, config) {
            this.cdr = cdr;
            this.nzConfigService = nzConfigService;
            this.messages = [];
            if (!!config) {
                core.warnDeprecation("Injection token 'NZ_MESSAGE_CONFIG' is deprecated and will be removed in 9.0.0. Please use 'NzConfigService' instead.");
            }
            this.setConfig(__assign(__assign({}, defaultConfig), config));
        }
        NzMessageContainerComponent.prototype.ngOnInit = function () {
            this.subscribeConfigChange();
        };
        NzMessageContainerComponent.prototype.setConfig = function (config) {
            this.config = this.mergeMessageConfig(config);
            this.top = core.toCssPixel(this.config.nzTop);
            this.cdr.markForCheck();
        };
        /**
         * Create a new message.
         * @param message Parsed message configuration.
         */
        NzMessageContainerComponent.prototype.createMessage = function (message) {
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
        NzMessageContainerComponent.prototype.removeMessage = function (messageId, userAction) {
            var _this = this;
            if (userAction === void 0) { userAction = false; }
            this.messages.some(function (message, index) {
                if (message.messageId === messageId) {
                    _this.messages.splice(index, 1);
                    _this.cdr.detectChanges();
                    message.onClose.next(userAction);
                    message.onClose.complete();
                    return true;
                }
                return false;
            });
        };
        /**
         * Remove all messages.
         */
        NzMessageContainerComponent.prototype.removeMessageAll = function () {
            this.messages = [];
            this.cdr.detectChanges();
        };
        NzMessageContainerComponent.prototype.subscribeConfigChange = function () {
            var _this = this;
            this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME).subscribe(function () { return _this.setConfig(); });
        };
        NzMessageContainerComponent.prototype.mergeMessageConfig = function (config) {
            return __assign(__assign(__assign({}, this.config), config), this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME));
        };
        /**
         * Merge default options and custom message options
         * @param options
         */
        NzMessageContainerComponent.prototype._mergeMessageOptions = function (options) {
            var defaultOptions = {
                nzDuration: this.config.nzDuration,
                nzAnimate: this.config.nzAnimate,
                nzPauseOnHover: this.config.nzPauseOnHover
            };
            return __assign(__assign({}, defaultOptions), options);
        };
        /** @nocollapse */ NzMessageContainerComponent.ɵfac = function NzMessageContainerComponent_Factory(t) { return new (t || NzMessageContainerComponent)(core$1.ɵɵdirectiveInject(core$1.ChangeDetectorRef), core$1.ɵɵdirectiveInject(core.NzConfigService), core$1.ɵɵdirectiveInject(NZ_MESSAGE_DEFAULT_CONFIG, 8), core$1.ɵɵdirectiveInject(NZ_MESSAGE_CONFIG, 8)); };
        /** @nocollapse */ NzMessageContainerComponent.ɵcmp = core$1.ɵɵdefineComponent({ type: NzMessageContainerComponent, selectors: [["nz-message-container"]], exportAs: ["nzMessageContainer"], decls: 2, vars: 2, consts: [[1, "ant-message"], [3, "nzMessage", "nzIndex", 4, "ngFor", "ngForOf"], [3, "nzMessage", "nzIndex"]], template: function NzMessageContainerComponent_Template(rf, ctx) { if (rf & 1) {
                core$1.ɵɵelementStart(0, "div", 0);
                core$1.ɵɵtemplate(1, NzMessageContainerComponent_nz_message_1_Template, 1, 2, "nz-message", 1);
                core$1.ɵɵelementEnd();
            } if (rf & 2) {
                core$1.ɵɵstyleProp("top", ctx.top);
                core$1.ɵɵadvance(1);
                core$1.ɵɵproperty("ngForOf", ctx.messages);
            } }, encapsulation: 2, changeDetection: 0 });
        return NzMessageContainerComponent;
    }());
    /*@__PURE__*/ (function () { core$1.ɵsetClassMetadata(NzMessageContainerComponent, [{
            type: core$1.Component,
            args: [{
                    changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                    encapsulation: core$1.ViewEncapsulation.None,
                    selector: 'nz-message-container',
                    exportAs: 'nzMessageContainer',
                    preserveWhitespaces: false,
                    templateUrl: './nz-message-container.component.html'
                }]
        }], function () { return [{ type: core$1.ChangeDetectorRef }, { type: core.NzConfigService }, { type: undefined, decorators: [{
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

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzMessageServiceModule = /** @class */ (function () {
        function NzMessageServiceModule() {
        }
        /** @nocollapse */ NzMessageServiceModule.ɵmod = core$1.ɵɵdefineNgModule({ type: NzMessageServiceModule });
        /** @nocollapse */ NzMessageServiceModule.ɵinj = core$1.ɵɵdefineInjector({ factory: function NzMessageServiceModule_Factory(t) { return new (t || NzMessageServiceModule)(); } });
        return NzMessageServiceModule;
    }());
    /*@__PURE__*/ (function () { core$1.ɵsetClassMetadata(NzMessageServiceModule, [{
            type: core$1.NgModule
        }], null, null); })();

    var NzMessageService = /** @class */ (function (_super) {
        __extends(NzMessageService, _super);
        function NzMessageService(nzSingletonService, overlay, injector, cfr, appRef) {
            return _super.call(this, nzSingletonService, overlay, NzMessageContainerComponent, injector, cfr, appRef, 'message') || this;
        }
        // Shortcut methods
        NzMessageService.prototype.success = function (content, options) {
            return this.createMessage({ type: 'success', content: content }, options);
        };
        NzMessageService.prototype.error = function (content, options) {
            return this.createMessage({ type: 'error', content: content }, options);
        };
        NzMessageService.prototype.info = function (content, options) {
            return this.createMessage({ type: 'info', content: content }, options);
        };
        NzMessageService.prototype.warning = function (content, options) {
            return this.createMessage({ type: 'warning', content: content }, options);
        };
        NzMessageService.prototype.loading = function (content, options) {
            return this.createMessage({ type: 'loading', content: content }, options);
        };
        NzMessageService.prototype.create = function (type, content, options) {
            return this.createMessage({ type: type, content: content }, options);
        };
        /** @nocollapse */ NzMessageService.ɵfac = function NzMessageService_Factory(t) { return new (t || NzMessageService)(core$1.ɵɵinject(core.NzSingletonService), core$1.ɵɵinject(overlay.Overlay), core$1.ɵɵinject(core$1.Injector), core$1.ɵɵinject(core$1.ComponentFactoryResolver), core$1.ɵɵinject(core$1.ApplicationRef)); };
        /** @nocollapse */ NzMessageService.ɵprov = core$1.ɵɵdefineInjectable({ token: NzMessageService, factory: NzMessageService.ɵfac, providedIn: NzMessageServiceModule });
        return NzMessageService;
    }(NzMessageBaseService));
    /*@__PURE__*/ (function () { core$1.ɵsetClassMetadata(NzMessageService, [{
            type: core$1.Injectable,
            args: [{
                    providedIn: NzMessageServiceModule
                }]
        }], function () { return [{ type: core.NzSingletonService }, { type: overlay.Overlay }, { type: core$1.Injector }, { type: core$1.ComponentFactoryResolver }, { type: core$1.ApplicationRef }]; }, null); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    function NzMessageComponent_i_4_Template(rf, ctx) { if (rf & 1) {
        core$1.ɵɵelement(0, "i", 10);
    } }
    function NzMessageComponent_i_5_Template(rf, ctx) { if (rf & 1) {
        core$1.ɵɵelement(0, "i", 11);
    } }
    function NzMessageComponent_i_6_Template(rf, ctx) { if (rf & 1) {
        core$1.ɵɵelement(0, "i", 12);
    } }
    function NzMessageComponent_i_7_Template(rf, ctx) { if (rf & 1) {
        core$1.ɵɵelement(0, "i", 13);
    } }
    function NzMessageComponent_i_8_Template(rf, ctx) { if (rf & 1) {
        core$1.ɵɵelement(0, "i", 14);
    } }
    function NzMessageComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
        core$1.ɵɵelementContainerStart(0);
        core$1.ɵɵelement(1, "span", 15);
        core$1.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r617 = core$1.ɵɵnextContext();
        core$1.ɵɵadvance(1);
        core$1.ɵɵproperty("innerHTML", ctx_r617.nzMessage.content, core$1.ɵɵsanitizeHtml);
    } }
    var NzMessageComponent = /** @class */ (function () {
        function NzMessageComponent(_messageContainer, cdr) {
            this._messageContainer = _messageContainer;
            this.cdr = cdr;
            this._eraseTimer = null;
        }
        NzMessageComponent.prototype.ngOnInit = function () {
            // `NzMessageContainer` does its job so all properties cannot be undefined.
            this._options = this.nzMessage.options;
            if (this._options.nzAnimate) {
                this.nzMessage.state = 'enter';
            }
            this._autoErase = this._options.nzDuration > 0;
            if (this._autoErase) {
                this._initErase();
                this._startEraseTimeout();
            }
        };
        NzMessageComponent.prototype.ngOnDestroy = function () {
            if (this._autoErase) {
                this._clearEraseTimeout();
            }
        };
        NzMessageComponent.prototype.onEnter = function () {
            if (this._autoErase && this._options.nzPauseOnHover) {
                this._clearEraseTimeout();
                this._updateTTL();
            }
        };
        NzMessageComponent.prototype.onLeave = function () {
            if (this._autoErase && this._options.nzPauseOnHover) {
                this._startEraseTimeout();
            }
        };
        // Remove self
        NzMessageComponent.prototype._destroy = function (userAction) {
            var _this = this;
            if (userAction === void 0) { userAction = false; }
            if (this._options.nzAnimate) {
                this.nzMessage.state = 'leave';
                this.cdr.detectChanges();
                setTimeout(function () { return _this._messageContainer.removeMessage(_this.nzMessage.messageId, userAction); }, 200);
            }
            else {
                this._messageContainer.removeMessage(this.nzMessage.messageId, userAction);
            }
        };
        NzMessageComponent.prototype._initErase = function () {
            this._eraseTTL = this._options.nzDuration;
            this._eraseTimingStart = Date.now();
        };
        NzMessageComponent.prototype._updateTTL = function () {
            if (this._autoErase) {
                this._eraseTTL -= Date.now() - this._eraseTimingStart;
            }
        };
        NzMessageComponent.prototype._startEraseTimeout = function () {
            var _this = this;
            if (this._eraseTTL > 0) {
                this._clearEraseTimeout();
                this._eraseTimer = setTimeout(function () { return _this._destroy(); }, this._eraseTTL);
                this._eraseTimingStart = Date.now();
            }
            else {
                this._destroy();
            }
        };
        NzMessageComponent.prototype._clearEraseTimeout = function () {
            if (this._eraseTimer !== null) {
                clearTimeout(this._eraseTimer);
                this._eraseTimer = null;
            }
        };
        /** @nocollapse */ NzMessageComponent.ɵfac = function NzMessageComponent_Factory(t) { return new (t || NzMessageComponent)(core$1.ɵɵdirectiveInject(NzMessageContainerComponent), core$1.ɵɵdirectiveInject(core$1.ChangeDetectorRef)); };
        /** @nocollapse */ NzMessageComponent.ɵcmp = core$1.ɵɵdefineComponent({ type: NzMessageComponent, selectors: [["nz-message"]], inputs: { nzMessage: "nzMessage", nzIndex: "nzIndex" }, exportAs: ["nzMessage"], decls: 10, vars: 9, consts: [[1, "ant-message-notice", 3, "mouseenter", "mouseleave"], [1, "ant-message-notice-content"], [1, "ant-message-custom-content", 3, "ngClass"], [3, "ngSwitch"], ["nz-icon", "", "nzType", "check-circle", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "info-circle", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "exclamation-circle", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "close-circle", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "loading", 4, "ngSwitchCase"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", "nzType", "check-circle"], ["nz-icon", "", "nzType", "info-circle"], ["nz-icon", "", "nzType", "exclamation-circle"], ["nz-icon", "", "nzType", "close-circle"], ["nz-icon", "", "nzType", "loading"], [3, "innerHTML"]], template: function NzMessageComponent_Template(rf, ctx) { if (rf & 1) {
                core$1.ɵɵelementStart(0, "div", 0);
                core$1.ɵɵlistener("mouseenter", function NzMessageComponent_Template_div_mouseenter_0_listener($event) { return ctx.onEnter(); })("mouseleave", function NzMessageComponent_Template_div_mouseleave_0_listener($event) { return ctx.onLeave(); });
                core$1.ɵɵelementStart(1, "div", 1);
                core$1.ɵɵelementStart(2, "div", 2);
                core$1.ɵɵelementContainerStart(3, 3);
                core$1.ɵɵtemplate(4, NzMessageComponent_i_4_Template, 1, 0, "i", 4);
                core$1.ɵɵtemplate(5, NzMessageComponent_i_5_Template, 1, 0, "i", 5);
                core$1.ɵɵtemplate(6, NzMessageComponent_i_6_Template, 1, 0, "i", 6);
                core$1.ɵɵtemplate(7, NzMessageComponent_i_7_Template, 1, 0, "i", 7);
                core$1.ɵɵtemplate(8, NzMessageComponent_i_8_Template, 1, 0, "i", 8);
                core$1.ɵɵelementContainerEnd();
                core$1.ɵɵtemplate(9, NzMessageComponent_ng_container_9_Template, 2, 1, "ng-container", 9);
                core$1.ɵɵelementEnd();
                core$1.ɵɵelementEnd();
                core$1.ɵɵelementEnd();
            } if (rf & 2) {
                core$1.ɵɵproperty("@moveUpMotion", ctx.nzMessage.state);
                core$1.ɵɵadvance(2);
                core$1.ɵɵproperty("ngClass", "ant-message-" + ctx.nzMessage.type);
                core$1.ɵɵadvance(1);
                core$1.ɵɵproperty("ngSwitch", ctx.nzMessage.type);
                core$1.ɵɵadvance(1);
                core$1.ɵɵproperty("ngSwitchCase", "success");
                core$1.ɵɵadvance(1);
                core$1.ɵɵproperty("ngSwitchCase", "info");
                core$1.ɵɵadvance(1);
                core$1.ɵɵproperty("ngSwitchCase", "warning");
                core$1.ɵɵadvance(1);
                core$1.ɵɵproperty("ngSwitchCase", "error");
                core$1.ɵɵadvance(1);
                core$1.ɵɵproperty("ngSwitchCase", "loading");
                core$1.ɵɵadvance(1);
                core$1.ɵɵproperty("nzStringTemplateOutlet", ctx.nzMessage.content);
            } }, directives: [common.NgClass, common.NgSwitch, common.NgSwitchCase, core.NzStringTemplateOutletDirective, icon.NzIconDirective], encapsulation: 2, data: { animation: [core.moveUpMotion] }, changeDetection: 0 });
        return NzMessageComponent;
    }());
    /*@__PURE__*/ (function () { core$1.ɵsetClassMetadata(NzMessageComponent, [{
            type: core$1.Component,
            args: [{
                    changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                    encapsulation: core$1.ViewEncapsulation.None,
                    selector: 'nz-message',
                    exportAs: 'nzMessage',
                    preserveWhitespaces: false,
                    animations: [core.moveUpMotion],
                    templateUrl: './nz-message.component.html'
                }]
        }], function () { return [{ type: NzMessageContainerComponent }, { type: core$1.ChangeDetectorRef }]; }, { nzMessage: [{
                type: core$1.Input
            }], nzIndex: [{
                type: core$1.Input
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzMessageModule = /** @class */ (function () {
        function NzMessageModule() {
        }
        /** @nocollapse */ NzMessageModule.ɵmod = core$1.ɵɵdefineNgModule({ type: NzMessageModule });
        /** @nocollapse */ NzMessageModule.ɵinj = core$1.ɵɵdefineInjector({ factory: function NzMessageModule_Factory(t) { return new (t || NzMessageModule)(); }, providers: [NZ_MESSAGE_DEFAULT_CONFIG_PROVIDER], imports: [[common.CommonModule, overlay.OverlayModule, icon.NzIconModule, core.NzAddOnModule, NzMessageServiceModule]] });
        return NzMessageModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core$1.ɵɵsetNgModuleScope(NzMessageModule, { declarations: [NzMessageContainerComponent, NzMessageComponent], imports: [common.CommonModule, overlay.OverlayModule, icon.NzIconModule, core.NzAddOnModule, NzMessageServiceModule] }); })();
    /*@__PURE__*/ (function () { core$1.ɵsetClassMetadata(NzMessageModule, [{
            type: core$1.NgModule,
            args: [{
                    imports: [common.CommonModule, overlay.OverlayModule, icon.NzIconModule, core.NzAddOnModule, NzMessageServiceModule],
                    declarations: [NzMessageContainerComponent, NzMessageComponent],
                    providers: [NZ_MESSAGE_DEFAULT_CONFIG_PROVIDER],
                    entryComponents: [NzMessageContainerComponent]
                }]
        }], null, null); })();
    core$1.ɵɵsetComponentScope(NzMessageContainerComponent, [NzMessageContainerComponent, NzMessageComponent, common.NgClass, common.NgComponentOutlet, common.NgForOf, common.NgIf, common.NgTemplateOutlet, common.NgStyle, common.NgSwitch, common.NgSwitchCase, common.NgSwitchDefault, common.NgPlural, common.NgPluralCase, overlay.CdkConnectedOverlay, overlay.CdkOverlayOrigin, bidi.Dir, scrolling.CdkFixedSizeVirtualScroll, scrolling.CdkScrollable, scrolling.CdkVirtualForOf, scrolling.CdkVirtualScrollViewport, icon.NzIconDirective, core.NzStringTemplateOutletDirective, core.NzClassListAddDirective], [common.AsyncPipe, common.UpperCasePipe, common.LowerCasePipe, common.JsonPipe, common.SlicePipe, common.DecimalPipe, common.PercentPipe, common.TitleCasePipe, common.CurrencyPipe, common.DatePipe, common.I18nPluralPipe, common.I18nSelectPipe, common.KeyValuePipe]);

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

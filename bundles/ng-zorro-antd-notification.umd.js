(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ng-zorro-antd/core'), require('ng-zorro-antd/message'), require('rxjs'), require('@angular/common'), require('ng-zorro-antd/icon'), require('@angular/cdk/overlay'), require('@angular/cdk/bidi'), require('@angular/cdk/scrolling')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/notification', ['exports', '@angular/core', 'ng-zorro-antd/core', 'ng-zorro-antd/message', 'rxjs', '@angular/common', 'ng-zorro-antd/icon', '@angular/cdk/overlay', '@angular/cdk/bidi', '@angular/cdk/scrolling'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].notification = {}), global.ng.core, global['ng-zorro-antd'].core, global['ng-zorro-antd'].message, global.rxjs, global.ng.common, global['ng-zorro-antd'].icon, global.ng.cdk.overlay, global.ng.cdk.bidi, global.ng.cdk.scrolling));
}(this, (function (exports, core, core$1, message, rxjs, common, icon, overlay, bidi, scrolling) { 'use strict';

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
    var NZ_NOTIFICATION_DEFAULT_CONFIG = new core.InjectionToken('NZ_NOTIFICATION_DEFAULT_CONFIG');
    var NZ_NOTIFICATION_CONFIG = new core.InjectionToken('NZ_NOTIFICATION_CONFIG');
    var NZ_NOTIFICATION_DEFAULT_CONFIG_PROVIDER = {
        provide: NZ_NOTIFICATION_DEFAULT_CONFIG,
        useValue: {
            nzTop: '24px',
            nzBottom: '24px',
            nzPlacement: 'topRight',
            nzDuration: 4500,
            nzMaxStack: 7,
            nzPauseOnHover: true,
            nzAnimate: true
        }
    };

    function NzNotificationContainerComponent_nz_notification_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "nz-notification", 1);
    } if (rf & 2) {
        var message_r1372 = ctx.$implicit;
        var i_r1373 = ctx.index;
        core.ɵɵproperty("nzMessage", message_r1372)("nzIndex", i_r1373);
    } }
    var NZ_CONFIG_COMPONENT_NAME = 'notification';
    var NzNotificationContainerComponent = /** @class */ (function (_super) {
        __extends(NzNotificationContainerComponent, _super);
        function NzNotificationContainerComponent(cdr, nzConfigService, defaultConfig, config) {
            var _this = _super.call(this, cdr, nzConfigService, defaultConfig, config) || this;
            /**
             * @override
             */
            _this.messages = [];
            if (!!config) {
                core$1.warnDeprecation("Injection token 'NZ_NOTIFICATION_CONFIG' is deprecated and will be removed in 9.0.0. Please use 'NzConfigService' instead.");
            }
            return _this;
        }
        /**
         * @override
         */
        NzNotificationContainerComponent.prototype.setConfig = function (config) {
            var newConfig = (this.config = __assign(__assign(__assign({}, this.config), config), this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME)));
            var placement = this.config.nzPlacement;
            this.top = placement === 'topLeft' || placement === 'topRight' ? core$1.toCssPixel(newConfig.nzTop) : null;
            this.bottom = placement === 'bottomLeft' || placement === 'bottomRight' ? core$1.toCssPixel(newConfig.nzBottom) : null;
            this.cdr.markForCheck();
        };
        /**
         * Create a new notification.
         * If there's a notification whose `nzKey` is same with `nzKey` in `NzNotificationDataFilled`,
         * replace its content instead of create a new one.
         * @override
         * @param notification
         */
        NzNotificationContainerComponent.prototype.createMessage = function (notification) {
            notification.options = this._mergeMessageOptions(notification.options);
            notification.onClose = new rxjs.Subject();
            var key = notification.options.nzKey;
            var notificationWithSameKey = this.messages.find(function (msg) { return msg.options.nzKey === notification.options.nzKey; });
            if (key && notificationWithSameKey) {
                this.replaceNotification(notificationWithSameKey, notification);
            }
            else {
                if (this.messages.length >= this.config.nzMaxStack) {
                    this.messages.splice(0, 1);
                }
                this.messages.push(notification);
            }
            this.cdr.detectChanges();
        };
        /**
         * @override
         */
        NzNotificationContainerComponent.prototype.subscribeConfigChange = function () {
            var _this = this;
            this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME).subscribe(function () { return _this.setConfig(); });
        };
        NzNotificationContainerComponent.prototype.replaceNotification = function (old, _new) {
            old.title = _new.title;
            old.content = _new.content;
            old.template = _new.template;
            old.type = _new.type;
        };
        /** @nocollapse */ NzNotificationContainerComponent.ɵfac = function NzNotificationContainerComponent_Factory(t) { return new (t || NzNotificationContainerComponent)(core.ɵɵdirectiveInject(core.ChangeDetectorRef), core.ɵɵdirectiveInject(core$1.NzConfigService), core.ɵɵdirectiveInject(NZ_NOTIFICATION_DEFAULT_CONFIG, 8), core.ɵɵdirectiveInject(NZ_NOTIFICATION_CONFIG, 8)); };
        /** @nocollapse */ NzNotificationContainerComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzNotificationContainerComponent, selectors: [["nz-notification-container"]], exportAs: ["nzNotificationContainer"], features: [core.ɵɵInheritDefinitionFeature], decls: 2, vars: 8, consts: [[3, "nzMessage", "nzIndex", 4, "ngFor", "ngForOf"], [3, "nzMessage", "nzIndex"]], template: function NzNotificationContainerComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "div");
                core.ɵɵtemplate(1, NzNotificationContainerComponent_nz_notification_1_Template, 1, 2, "nz-notification", 0);
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵclassMapInterpolate1("ant-notification ant-notification-", ctx.config.nzPlacement, "");
                core.ɵɵstyleProp("top", ctx.config.nzPlacement === "topLeft" || ctx.config.nzPlacement === "topRight" ? ctx.top : null)("bottom", ctx.config.nzPlacement === "bottomLeft" || ctx.config.nzPlacement === "bottomRight" ? ctx.bottom : null)("right", ctx.config.nzPlacement === "bottomRight" || ctx.config.nzPlacement === "topRight" ? "0px" : null)("left", ctx.config.nzPlacement === "topLeft" || ctx.config.nzPlacement === "bottomLeft" ? "0px" : null);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngForOf", ctx.messages);
            } }, encapsulation: 2, changeDetection: 0 });
        return NzNotificationContainerComponent;
    }(message.NzMessageContainerComponent));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzNotificationContainerComponent, [{
            type: core.Component,
            args: [{
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    selector: 'nz-notification-container',
                    exportAs: 'nzNotificationContainer',
                    preserveWhitespaces: false,
                    templateUrl: './nz-notification-container.component.html'
                }]
        }], function () { return [{ type: core.ChangeDetectorRef }, { type: core$1.NzConfigService }, { type: undefined, decorators: [{
                    type: core.Optional
                }, {
                    type: core.Inject,
                    args: [NZ_NOTIFICATION_DEFAULT_CONFIG]
                }] }, { type: undefined, decorators: [{
                    type: core.Optional
                }, {
                    type: core.Inject,
                    args: [NZ_NOTIFICATION_CONFIG]
                }] }]; }, null); })();

    function NzNotificationComponent_div_1_i_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "i", 16);
    } }
    function NzNotificationComponent_div_1_i_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "i", 17);
    } }
    function NzNotificationComponent_div_1_i_6_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "i", 18);
    } }
    function NzNotificationComponent_div_1_i_7_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "i", 19);
    } }
    var _c0 = function (a0) { return { "ant-notification-notice-with-icon": a0 }; };
    function NzNotificationComponent_div_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 7);
        core.ɵɵelementStart(1, "div", 8);
        core.ɵɵelementStart(2, "div");
        core.ɵɵelementContainerStart(3, 9);
        core.ɵɵtemplate(4, NzNotificationComponent_div_1_i_4_Template, 1, 0, "i", 10);
        core.ɵɵtemplate(5, NzNotificationComponent_div_1_i_5_Template, 1, 0, "i", 11);
        core.ɵɵtemplate(6, NzNotificationComponent_div_1_i_6_Template, 1, 0, "i", 12);
        core.ɵɵtemplate(7, NzNotificationComponent_div_1_i_7_Template, 1, 0, "i", 13);
        core.ɵɵelementContainerEnd();
        core.ɵɵelement(8, "div", 14);
        core.ɵɵelement(9, "div", 15);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1374 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngClass", core.ɵɵpureFunction1(9, _c0, ctx_r1374.nzMessage.type !== "blank"));
        core.ɵɵadvance(1);
        core.ɵɵclassProp("ant-notification-notice-with-icon", ctx_r1374.nzMessage.type !== "blank");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitch", ctx_r1374.nzMessage.type);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", "success");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", "info");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", "warning");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", "error");
        core.ɵɵadvance(1);
        core.ɵɵproperty("innerHTML", ctx_r1374.nzMessage.title, core.ɵɵsanitizeHtml);
        core.ɵɵadvance(1);
        core.ɵɵproperty("innerHTML", ctx_r1374.nzMessage.content, core.ɵɵsanitizeHtml);
    } }
    function NzNotificationComponent_ng_template_2_Template(rf, ctx) { }
    function NzNotificationComponent_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelement(1, "i", 21);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r1383 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("nzType", ctx_r1383.nzMessage.options == null ? null : ctx_r1383.nzMessage.options.nzCloseIcon);
    } }
    function NzNotificationComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, NzNotificationComponent_ng_container_5_ng_container_1_Template, 2, 1, "ng-container", 20);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r1376 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("nzStringTemplateOutlet", ctx_r1376.nzMessage.options == null ? null : ctx_r1376.nzMessage.options.nzCloseIcon);
    } }
    function NzNotificationComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "i", 22);
    } }
    var _c1 = function (a0, a1) { return { $implicit: a0, data: a1 }; };
    var NzNotificationComponent = /** @class */ (function (_super) {
        __extends(NzNotificationComponent, _super);
        function NzNotificationComponent(container, cdr) {
            var _this = _super.call(this, container, cdr) || this;
            _this.container = container;
            _this.cdr = cdr;
            return _this;
        }
        NzNotificationComponent.prototype.close = function () {
            this._destroy(true);
        };
        Object.defineProperty(NzNotificationComponent.prototype, "state", {
            get: function () {
                if (this.nzMessage.state === 'enter') {
                    if (this.container.config.nzPlacement === 'topLeft' || this.container.config.nzPlacement === 'bottomLeft') {
                        return 'enterLeft';
                    }
                    else {
                        return 'enterRight';
                    }
                }
                else {
                    return this.nzMessage.state;
                }
            },
            enumerable: true,
            configurable: true
        });
        /** @nocollapse */ NzNotificationComponent.ɵfac = function NzNotificationComponent_Factory(t) { return new (t || NzNotificationComponent)(core.ɵɵdirectiveInject(NzNotificationContainerComponent), core.ɵɵdirectiveInject(core.ChangeDetectorRef)); };
        /** @nocollapse */ NzNotificationComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzNotificationComponent, selectors: [["nz-notification"]], inputs: { nzMessage: "nzMessage" }, exportAs: ["nzNotification"], features: [core.ɵɵInheritDefinitionFeature], decls: 8, vars: 12, consts: [[1, "ant-notification-notice", "ant-notification-notice-closable", 3, "ngStyle", "ngClass", "mouseenter", "mouseleave"], ["class", "ant-notification-notice-content", 4, "ngIf"], [3, "ngIf", "ngTemplateOutlet", "ngTemplateOutletContext"], ["tabindex", "0", 1, "ant-notification-notice-close", 3, "click"], [1, "ant-notification-notice-close-x"], [4, "ngIf", "ngIfElse"], ["iconTpl", ""], [1, "ant-notification-notice-content"], [1, "ant-notification-notice-content", 3, "ngClass"], [3, "ngSwitch"], ["nz-icon", "", "nzType", "check-circle", "class", "ant-notification-notice-icon ant-notification-notice-icon-success", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "info-circle", "class", "ant-notification-notice-icon ant-notification-notice-icon-info", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "exclamation-circle", "class", "ant-notification-notice-icon ant-notification-notice-icon-warning", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "close-circle", "class", "ant-notification-notice-icon ant-notification-notice-icon-error", 4, "ngSwitchCase"], [1, "ant-notification-notice-message", 3, "innerHTML"], [1, "ant-notification-notice-description", 3, "innerHTML"], ["nz-icon", "", "nzType", "check-circle", 1, "ant-notification-notice-icon", "ant-notification-notice-icon-success"], ["nz-icon", "", "nzType", "info-circle", 1, "ant-notification-notice-icon", "ant-notification-notice-icon-info"], ["nz-icon", "", "nzType", "exclamation-circle", 1, "ant-notification-notice-icon", "ant-notification-notice-icon-warning"], ["nz-icon", "", "nzType", "close-circle", 1, "ant-notification-notice-icon", "ant-notification-notice-icon-error"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", 3, "nzType"], ["nz-icon", "", "nzType", "close", 1, "ant-notification-close-icon"]], template: function NzNotificationComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "div", 0);
                core.ɵɵlistener("mouseenter", function NzNotificationComponent_Template_div_mouseenter_0_listener($event) { return ctx.onEnter(); })("mouseleave", function NzNotificationComponent_Template_div_mouseleave_0_listener($event) { return ctx.onLeave(); });
                core.ɵɵtemplate(1, NzNotificationComponent_div_1_Template, 10, 11, "div", 1);
                core.ɵɵtemplate(2, NzNotificationComponent_ng_template_2_Template, 0, 0, "ng-template", 2);
                core.ɵɵelementStart(3, "a", 3);
                core.ɵɵlistener("click", function NzNotificationComponent_Template_a_click_3_listener($event) { return ctx.close(); });
                core.ɵɵelementStart(4, "span", 4);
                core.ɵɵtemplate(5, NzNotificationComponent_ng_container_5_Template, 2, 1, "ng-container", 5);
                core.ɵɵtemplate(6, NzNotificationComponent_ng_template_6_Template, 1, 0, "ng-template", null, 6, core.ɵɵtemplateRefExtractor);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
            } if (rf & 2) {
                var _r1377 = core.ɵɵreference(7);
                core.ɵɵproperty("ngStyle", ctx.nzMessage.options == null ? null : ctx.nzMessage.options.nzStyle)("ngClass", ctx.nzMessage.options == null ? null : ctx.nzMessage.options.nzClass)("@notificationMotion", ctx.state);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", !ctx.nzMessage.template);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.nzMessage.template)("ngTemplateOutlet", ctx.nzMessage.template)("ngTemplateOutletContext", core.ɵɵpureFunction2(9, _c1, ctx, ctx.nzMessage.options == null ? null : ctx.nzMessage.options.nzData));
                core.ɵɵadvance(3);
                core.ɵɵproperty("ngIf", ctx.nzMessage.options == null ? null : ctx.nzMessage.options.nzCloseIcon)("ngIfElse", _r1377);
            } }, directives: [common.NgStyle, common.NgClass, common.NgIf, common.NgTemplateOutlet, common.NgSwitch, common.NgSwitchCase, icon.NzIconDirective, core$1.NzStringTemplateOutletDirective], encapsulation: 2, data: { animation: [core$1.notificationMotion] } });
        return NzNotificationComponent;
    }(message.NzMessageComponent));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzNotificationComponent, [{
            type: core.Component,
            args: [{
                    encapsulation: core.ViewEncapsulation.None,
                    selector: 'nz-notification',
                    exportAs: 'nzNotification',
                    preserveWhitespaces: false,
                    animations: [core$1.notificationMotion],
                    templateUrl: './nz-notification.component.html'
                }]
        }], function () { return [{ type: NzNotificationContainerComponent }, { type: core.ChangeDetectorRef }]; }, { nzMessage: [{
                type: core.Input
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzNotificationServiceModule = /** @class */ (function () {
        function NzNotificationServiceModule() {
        }
        /** @nocollapse */ NzNotificationServiceModule.ɵmod = core.ɵɵdefineNgModule({ type: NzNotificationServiceModule });
        /** @nocollapse */ NzNotificationServiceModule.ɵinj = core.ɵɵdefineInjector({ factory: function NzNotificationServiceModule_Factory(t) { return new (t || NzNotificationServiceModule)(); } });
        return NzNotificationServiceModule;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzNotificationServiceModule, [{
            type: core.NgModule
        }], null, null); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzNotificationModule = /** @class */ (function () {
        function NzNotificationModule() {
        }
        /** @nocollapse */ NzNotificationModule.ɵmod = core.ɵɵdefineNgModule({ type: NzNotificationModule });
        /** @nocollapse */ NzNotificationModule.ɵinj = core.ɵɵdefineInjector({ factory: function NzNotificationModule_Factory(t) { return new (t || NzNotificationModule)(); }, providers: [NZ_NOTIFICATION_DEFAULT_CONFIG_PROVIDER], imports: [[common.CommonModule, overlay.OverlayModule, icon.NzIconModule, NzNotificationServiceModule, core$1.NzAddOnModule]] });
        return NzNotificationModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(NzNotificationModule, { declarations: [NzNotificationComponent, NzNotificationContainerComponent], imports: [common.CommonModule, overlay.OverlayModule, icon.NzIconModule, NzNotificationServiceModule, core$1.NzAddOnModule] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzNotificationModule, [{
            type: core.NgModule,
            args: [{
                    imports: [common.CommonModule, overlay.OverlayModule, icon.NzIconModule, NzNotificationServiceModule, core$1.NzAddOnModule],
                    declarations: [NzNotificationComponent, NzNotificationContainerComponent],
                    providers: [NZ_NOTIFICATION_DEFAULT_CONFIG_PROVIDER],
                    entryComponents: [NzNotificationContainerComponent]
                }]
        }], null, null); })();
    core.ɵɵsetComponentScope(NzNotificationContainerComponent, [NzNotificationComponent, NzNotificationContainerComponent, common.NgClass, common.NgComponentOutlet, common.NgForOf, common.NgIf, common.NgTemplateOutlet, common.NgStyle, common.NgSwitch, common.NgSwitchCase, common.NgSwitchDefault, common.NgPlural, common.NgPluralCase, overlay.CdkConnectedOverlay, overlay.CdkOverlayOrigin, bidi.Dir, scrolling.CdkFixedSizeVirtualScroll, scrolling.CdkScrollable, scrolling.CdkVirtualForOf, scrolling.CdkVirtualScrollViewport, icon.NzIconDirective, core$1.NzStringTemplateOutletDirective, core$1.NzClassListAddDirective], [common.AsyncPipe, common.UpperCasePipe, common.LowerCasePipe, common.JsonPipe, common.SlicePipe, common.DecimalPipe, common.PercentPipe, common.TitleCasePipe, common.CurrencyPipe, common.DatePipe, common.I18nPluralPipe, common.I18nSelectPipe, common.KeyValuePipe]);

    var NzNotificationService = /** @class */ (function (_super) {
        __extends(NzNotificationService, _super);
        function NzNotificationService(nzSingletonService, overlay, injector, cfr, appRef) {
            return _super.call(this, nzSingletonService, overlay, NzNotificationContainerComponent, injector, cfr, appRef, 'notification-') || this;
        }
        // Shortcut methods
        NzNotificationService.prototype.success = function (title, content, options) {
            return this.createMessage({ type: 'success', title: title, content: content }, options);
        };
        NzNotificationService.prototype.error = function (title, content, options) {
            return this.createMessage({ type: 'error', title: title, content: content }, options);
        };
        NzNotificationService.prototype.info = function (title, content, options) {
            return this.createMessage({ type: 'info', title: title, content: content }, options);
        };
        NzNotificationService.prototype.warning = function (title, content, options) {
            return this.createMessage({ type: 'warning', title: title, content: content }, options);
        };
        NzNotificationService.prototype.blank = function (title, content, options) {
            return this.createMessage({ type: 'blank', title: title, content: content }, options);
        };
        NzNotificationService.prototype.create = function (type, title, content, options) {
            return this.createMessage({ type: type, title: title, content: content }, options);
        };
        // For content with template
        NzNotificationService.prototype.template = function (template, options) {
            return this.createMessage({ template: template }, options);
        };
        /** @nocollapse */ NzNotificationService.ɵfac = function NzNotificationService_Factory(t) { return new (t || NzNotificationService)(core.ɵɵinject(core$1.NzSingletonService), core.ɵɵinject(overlay.Overlay), core.ɵɵinject(core.Injector), core.ɵɵinject(core.ComponentFactoryResolver), core.ɵɵinject(core.ApplicationRef)); };
        /** @nocollapse */ NzNotificationService.ɵprov = core.ɵɵdefineInjectable({ token: NzNotificationService, factory: NzNotificationService.ɵfac, providedIn: NzNotificationServiceModule });
        return NzNotificationService;
    }(message.NzMessageBaseService));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzNotificationService, [{
            type: core.Injectable,
            args: [{
                    providedIn: NzNotificationServiceModule
                }]
        }], function () { return [{ type: core$1.NzSingletonService }, { type: overlay.Overlay }, { type: core.Injector }, { type: core.ComponentFactoryResolver }, { type: core.ApplicationRef }]; }, null); })();

    exports.NZ_NOTIFICATION_CONFIG = NZ_NOTIFICATION_CONFIG;
    exports.NZ_NOTIFICATION_DEFAULT_CONFIG = NZ_NOTIFICATION_DEFAULT_CONFIG;
    exports.NZ_NOTIFICATION_DEFAULT_CONFIG_PROVIDER = NZ_NOTIFICATION_DEFAULT_CONFIG_PROVIDER;
    exports.NzNotificationComponent = NzNotificationComponent;
    exports.NzNotificationContainerComponent = NzNotificationContainerComponent;
    exports.NzNotificationModule = NzNotificationModule;
    exports.NzNotificationService = NzNotificationService;
    exports.NzNotificationServiceModule = NzNotificationServiceModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-notification.umd.js.map

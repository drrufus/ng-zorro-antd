(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/a11y'), require('@angular/cdk/keycodes'), require('@angular/cdk/overlay'), require('@angular/common'), require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('ng-zorro-antd/core'), require('ng-zorro-antd/i18n'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/button'), require('@angular/cdk/portal')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/modal', ['exports', '@angular/cdk/a11y', '@angular/cdk/keycodes', '@angular/cdk/overlay', '@angular/common', '@angular/core', 'rxjs', 'rxjs/operators', 'ng-zorro-antd/core', 'ng-zorro-antd/i18n', 'ng-zorro-antd/icon', 'ng-zorro-antd/button', '@angular/cdk/portal'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].modal = {}), global.ng.cdk.a11y, global.ng.cdk.keycodes, global.ng.cdk.overlay, global.ng.common, global.ng.core, global.rxjs, global.rxjs.operators, global['ng-zorro-antd'].core, global['ng-zorro-antd'].i18n, global['ng-zorro-antd'].icon, global['ng-zorro-antd'].button, global.ng.cdk.portal));
}(this, (function (exports, a11y, keycodes, overlay, common, core, rxjs, operators, core$1, i18n, icon, button, portal) { 'use strict';

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
    var NZ_MODAL_CONFIG = new core.InjectionToken('NZ_MODAL_CONFIG');

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzModalControlServiceModule = /** @class */ (function () {
        function NzModalControlServiceModule() {
        }
        /** @nocollapse */ NzModalControlServiceModule.ɵmod = core.ɵɵdefineNgModule({ type: NzModalControlServiceModule });
        /** @nocollapse */ NzModalControlServiceModule.ɵinj = core.ɵɵdefineInjector({ factory: function NzModalControlServiceModule_Factory(t) { return new (t || NzModalControlServiceModule)(); } });
        return NzModalControlServiceModule;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzModalControlServiceModule, [{
            type: core.NgModule
        }], null, null); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzModalControlService = /** @class */ (function () {
        function NzModalControlService(parentService) {
            this.parentService = parentService;
            this.rootOpenModals = this.parentService ? null : [];
            this.rootAfterAllClose = this.parentService ? null : new rxjs.Subject();
            this.rootRegisteredMetaMap = this.parentService ? null : new Map();
        }
        Object.defineProperty(NzModalControlService.prototype, "afterAllClose", {
            // Track singleton afterAllClose through over the injection tree
            get: function () {
                return this.parentService ? this.parentService.afterAllClose : this.rootAfterAllClose;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzModalControlService.prototype, "openModals", {
            // Track singleton openModals array through over the injection tree
            get: function () {
                return this.parentService ? this.parentService.openModals : this.rootOpenModals;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzModalControlService.prototype, "registeredMetaMap", {
            get: function () {
                // Registered modal for later usage
                return this.parentService ? this.parentService.registeredMetaMap : this.rootRegisteredMetaMap;
            },
            enumerable: true,
            configurable: true
        });
        // Register a modal to listen its open/close
        NzModalControlService.prototype.registerModal = function (modalRef) {
            var _this = this;
            if (!this.hasRegistered(modalRef)) {
                var afterOpenSubscription = modalRef.afterOpen.subscribe(function () { return _this.openModals.push(modalRef); });
                var afterCloseSubscription = modalRef.afterClose.subscribe(function () { return _this.removeOpenModal(modalRef); });
                this.registeredMetaMap.set(modalRef, { modalRef: modalRef, afterOpenSubscription: afterOpenSubscription, afterCloseSubscription: afterCloseSubscription });
            }
        };
        // deregister modals
        NzModalControlService.prototype.deregisterModal = function (modalRef) {
            var registeredMeta = this.registeredMetaMap.get(modalRef);
            if (registeredMeta) {
                // Remove this modal if it is still in the opened modal list (NOTE: it may trigger "afterAllClose")
                this.removeOpenModal(registeredMeta.modalRef);
                registeredMeta.afterOpenSubscription.unsubscribe();
                registeredMeta.afterCloseSubscription.unsubscribe();
                this.registeredMetaMap.delete(modalRef);
            }
        };
        NzModalControlService.prototype.hasRegistered = function (modalRef) {
            return this.registeredMetaMap.has(modalRef);
        };
        // Close all registered opened modals
        NzModalControlService.prototype.closeAll = function () {
            var i = this.openModals.length;
            while (i--) {
                this.openModals[i].close();
            }
        };
        NzModalControlService.prototype.removeOpenModal = function (modalRef) {
            var index = this.openModals.indexOf(modalRef);
            if (index > -1) {
                this.openModals.splice(index, 1);
                if (!this.openModals.length) {
                    this.afterAllClose.next();
                }
            }
        };
        /** @nocollapse */ NzModalControlService.ɵfac = function NzModalControlService_Factory(t) { return new (t || NzModalControlService)(core.ɵɵinject(NzModalControlService, 12)); };
        /** @nocollapse */ NzModalControlService.ɵprov = core.ɵɵdefineInjectable({ token: NzModalControlService, factory: NzModalControlService.ɵfac, providedIn: NzModalControlServiceModule });
        return NzModalControlService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzModalControlService, [{
            type: core.Injectable,
            args: [{
                    providedIn: NzModalControlServiceModule
                }]
        }], function () { return [{ type: NzModalControlService, decorators: [{
                    type: core.Optional
                }, {
                    type: core.SkipSelf
                }] }]; }, null); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    /**
     * API class that public to users to handle the modal instance.
     * NzModalRef is aim to avoid accessing to the modal instance directly by users.
     */
    // tslint:disable-next-line:no-any
    var NzModalRef = /** @class */ (function () {
        function NzModalRef() {
        }
        return NzModalRef;
    }());

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzModalFooterDirective = /** @class */ (function () {
        function NzModalFooterDirective(nzModalRef, templateRef) {
            this.nzModalRef = nzModalRef;
            this.templateRef = templateRef;
            if (this.nzModalRef) {
                this.nzModalRef.getInstance().setFooterWithTemplate(this.templateRef);
            }
        }
        /** @nocollapse */ NzModalFooterDirective.ɵfac = function NzModalFooterDirective_Factory(t) { return new (t || NzModalFooterDirective)(core.ɵɵdirectiveInject(NzModalRef, 8), core.ɵɵdirectiveInject(core.TemplateRef)); };
        /** @nocollapse */ NzModalFooterDirective.ɵdir = core.ɵɵdefineDirective({ type: NzModalFooterDirective, selectors: [["", "nzModalFooter", ""]], exportAs: ["nzModalFooter"] });
        return NzModalFooterDirective;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzModalFooterDirective, [{
            type: core.Directive,
            args: [{
                    selector: '[nzModalFooter]',
                    exportAs: 'nzModalFooter'
                }]
        }], function () { return [{ type: NzModalRef, decorators: [{
                    type: core.Optional
                }] }, { type: core.TemplateRef }]; }, null); })();

    var _c0 = ["modalContainer"];
    var _c1 = ["bodyContainer"];
    var _c2 = ["autoFocusButtonOk"];
    function NzModalComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵprojection(0);
    } }
    function NzModalComponent_div_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "div", 11);
    } if (rf & 2) {
        var ctx_r1308 = core.ɵɵnextContext();
        core.ɵɵstyleProp("z-index", ctx_r1308.nzZIndex);
        core.ɵɵclassProp("ant-modal-mask-hidden", ctx_r1308.hidden);
        core.ɵɵproperty("ngClass", ctx_r1308.maskAnimationClassMap)("ngStyle", ctx_r1308.nzMaskStyle);
    } }
    function NzModalComponent_button_9_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelement(1, "i", 15);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r1316 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("nzType", ctx_r1316.nzCloseIcon);
    } }
    function NzModalComponent_button_9_Template(rf, ctx) { if (rf & 1) {
        var _r1318 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "button", 12);
        core.ɵɵlistener("click", function NzModalComponent_button_9_Template_button_click_0_listener($event) { core.ɵɵrestoreView(_r1318); var ctx_r1317 = core.ɵɵnextContext(); return ctx_r1317.onClickCloseBtn(); });
        core.ɵɵelementStart(1, "span", 13);
        core.ɵɵtemplate(2, NzModalComponent_button_9_ng_container_2_Template, 2, 1, "ng-container", 14);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1310 = core.ɵɵnextContext();
        core.ɵɵattribute("aria-label", ctx_r1310.nzAriaLabel);
        core.ɵɵadvance(2);
        core.ɵɵproperty("nzStringTemplateOutlet", ctx_r1310.nzCloseIcon);
    } }
    function NzModalComponent_ng_container_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainer(0, 18);
    } if (rf & 2) {
        core.ɵɵnextContext(2);
        var _r1312 = core.ɵɵreference(12);
        core.ɵɵproperty("ngTemplateOutlet", _r1312);
    } }
    function NzModalComponent_ng_container_10_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainer(0, 18);
    } if (rf & 2) {
        core.ɵɵnextContext(2);
        var _r1314 = core.ɵɵreference(14);
        core.ɵɵproperty("ngTemplateOutlet", _r1314);
    } }
    function NzModalComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0, 16);
        core.ɵɵtemplate(1, NzModalComponent_ng_container_10_ng_container_1_Template, 1, 1, "ng-container", 17);
        core.ɵɵtemplate(2, NzModalComponent_ng_container_10_ng_container_2_Template, 1, 1, "ng-container", 17);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r1311 = core.ɵɵnextContext();
        core.ɵɵproperty("ngSwitch", true);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", ctx_r1311.isModalType("default"));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", ctx_r1311.isModalType("confirm"));
    } }
    function NzModalComponent_ng_template_11_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainer(0, 18);
    } if (rf & 2) {
        var ctx_r1325 = core.ɵɵnextContext(3);
        core.ɵɵproperty("ngTemplateOutlet", ctx_r1325.nzTitle);
    } }
    function NzModalComponent_ng_template_11_div_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelement(1, "div", 26);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r1326 = core.ɵɵnextContext(3);
        core.ɵɵadvance(1);
        core.ɵɵproperty("innerHTML", ctx_r1326.nzTitle, core.ɵɵsanitizeHtml);
    } }
    function NzModalComponent_ng_template_11_div_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 23);
        core.ɵɵelementStart(1, "div", 24);
        core.ɵɵelementContainerStart(2, 16);
        core.ɵɵtemplate(3, NzModalComponent_ng_template_11_div_0_ng_container_3_Template, 1, 1, "ng-container", 17);
        core.ɵɵtemplate(4, NzModalComponent_ng_template_11_div_0_ng_container_4_Template, 2, 1, "ng-container", 25);
        core.ɵɵelementContainerEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1321 = core.ɵɵnextContext(2);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngSwitch", true);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", ctx_r1321.isTemplateRef(ctx_r1321.nzTitle));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", ctx_r1321.isNonEmptyString(ctx_r1321.nzTitle));
    } }
    function NzModalComponent_ng_template_11_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainer(0, 18);
    } if (rf & 2) {
        var ctx_r1327 = core.ɵɵnextContext(3);
        core.ɵɵproperty("ngTemplateOutlet", ctx_r1327.nzContent);
    } }
    function NzModalComponent_ng_template_11_ng_container_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelement(1, "div", 26);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r1328 = core.ɵɵnextContext(3);
        core.ɵɵadvance(1);
        core.ɵɵproperty("innerHTML", ctx_r1328.nzContent, core.ɵɵsanitizeHtml);
    } }
    function NzModalComponent_ng_template_11_ng_container_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainer(0, 18);
    } if (rf & 2) {
        core.ɵɵnextContext(3);
        var _r1306 = core.ɵɵreference(1);
        core.ɵɵproperty("ngTemplateOutlet", _r1306);
    } }
    function NzModalComponent_ng_template_11_ng_container_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0, 16);
        core.ɵɵtemplate(1, NzModalComponent_ng_template_11_ng_container_4_ng_container_1_Template, 1, 1, "ng-container", 17);
        core.ɵɵtemplate(2, NzModalComponent_ng_template_11_ng_container_4_ng_container_2_Template, 2, 1, "ng-container", 25);
        core.ɵɵtemplate(3, NzModalComponent_ng_template_11_ng_container_4_ng_container_3_Template, 1, 1, "ng-container", 27);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r1323 = core.ɵɵnextContext(2);
        core.ɵɵproperty("ngSwitch", true);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", ctx_r1323.isTemplateRef(ctx_r1323.nzContent));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", ctx_r1323.isNonEmptyString(ctx_r1323.nzContent));
    } }
    function NzModalComponent_ng_template_11_div_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainer(0, 18);
    } if (rf & 2) {
        var ctx_r1330 = core.ɵɵnextContext(3);
        core.ɵɵproperty("ngTemplateOutlet", ctx_r1330.nzFooter);
    } }
    function NzModalComponent_ng_template_11_div_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelement(1, "div", 26);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r1331 = core.ɵɵnextContext(3);
        core.ɵɵadvance(1);
        core.ɵɵproperty("innerHTML", ctx_r1331.nzFooter, core.ɵɵsanitizeHtml);
    } }
    function NzModalComponent_ng_template_11_div_5_ng_container_4_button_1_Template(rf, ctx) { if (rf & 1) {
        var _r1337 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "button", 31);
        core.ɵɵlistener("click", function NzModalComponent_ng_template_11_div_5_ng_container_4_button_1_Template_button_click_0_listener($event) { core.ɵɵrestoreView(_r1337); var button_r1335 = ctx.$implicit; var ctx_r1336 = core.ɵɵnextContext(4); return ctx_r1336.onButtonClick(button_r1335); });
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var button_r1335 = ctx.$implicit;
        var ctx_r1334 = core.ɵɵnextContext(4);
        core.ɵɵproperty("hidden", !ctx_r1334.getButtonCallableProp(button_r1335, "show"))("nzLoading", ctx_r1334.getButtonCallableProp(button_r1335, "loading"))("disabled", ctx_r1334.getButtonCallableProp(button_r1335, "disabled"))("nzType", button_r1335.type)("nzShape", button_r1335.shape)("nzSize", button_r1335.size)("nzGhost", button_r1335.ghost);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", button_r1335.label, " ");
    } }
    function NzModalComponent_ng_template_11_div_5_ng_container_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, NzModalComponent_ng_template_11_div_5_ng_container_4_button_1_Template, 2, 8, "button", 30);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r1332 = core.ɵɵnextContext(3);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", ctx_r1332.nzFooter);
    } }
    function NzModalComponent_ng_template_11_div_5_ng_container_5_button_1_Template(rf, ctx) { if (rf & 1) {
        var _r1341 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "button", 34);
        core.ɵɵlistener("click", function NzModalComponent_ng_template_11_div_5_ng_container_5_button_1_Template_button_click_0_listener($event) { core.ɵɵrestoreView(_r1341); var ctx_r1340 = core.ɵɵnextContext(4); return ctx_r1340.onClickOkCancel("cancel"); });
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1338 = core.ɵɵnextContext(4);
        core.ɵɵproperty("nzLoading", ctx_r1338.nzCancelLoading)("disabled", ctx_r1338.nzCancelDisabled);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", ctx_r1338.cancelText, " ");
    } }
    function NzModalComponent_ng_template_11_div_5_ng_container_5_button_2_Template(rf, ctx) { if (rf & 1) {
        var _r1343 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "button", 35);
        core.ɵɵlistener("click", function NzModalComponent_ng_template_11_div_5_ng_container_5_button_2_Template_button_click_0_listener($event) { core.ɵɵrestoreView(_r1343); var ctx_r1342 = core.ɵɵnextContext(4); return ctx_r1342.onClickOkCancel("ok"); });
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1339 = core.ɵɵnextContext(4);
        core.ɵɵproperty("nzType", ctx_r1339.nzOkType)("nzLoading", ctx_r1339.nzOkLoading)("disabled", ctx_r1339.nzOkDisabled);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", ctx_r1339.okText, " ");
    } }
    function NzModalComponent_ng_template_11_div_5_ng_container_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, NzModalComponent_ng_template_11_div_5_ng_container_5_button_1_Template, 2, 3, "button", 32);
        core.ɵɵtemplate(2, NzModalComponent_ng_template_11_div_5_ng_container_5_button_2_Template, 2, 4, "button", 33);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r1333 = core.ɵɵnextContext(3);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r1333.nzCancelText !== null);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r1333.nzOkText !== null);
    } }
    function NzModalComponent_ng_template_11_div_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 28);
        core.ɵɵelementContainerStart(1, 16);
        core.ɵɵtemplate(2, NzModalComponent_ng_template_11_div_5_ng_container_2_Template, 1, 1, "ng-container", 17);
        core.ɵɵtemplate(3, NzModalComponent_ng_template_11_div_5_ng_container_3_Template, 2, 1, "ng-container", 25);
        core.ɵɵtemplate(4, NzModalComponent_ng_template_11_div_5_ng_container_4_Template, 2, 1, "ng-container", 25);
        core.ɵɵtemplate(5, NzModalComponent_ng_template_11_div_5_ng_container_5_Template, 3, 2, "ng-container", 29);
        core.ɵɵelementContainerEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1324 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitch", true);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", ctx_r1324.isTemplateRef(ctx_r1324.nzFooter));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", ctx_r1324.isNonEmptyString(ctx_r1324.nzFooter));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", ctx_r1324.isModalButtons(ctx_r1324.nzFooter));
    } }
    function NzModalComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtemplate(0, NzModalComponent_ng_template_11_div_0_Template, 5, 3, "div", 19);
        core.ɵɵelementStart(1, "div", 20);
        core.ɵɵelementContainerStart(2, null, 21);
        core.ɵɵtemplate(4, NzModalComponent_ng_template_11_ng_container_4_Template, 4, 3, "ng-container", 8);
        core.ɵɵelementContainerEnd();
        core.ɵɵelementEnd();
        core.ɵɵtemplate(5, NzModalComponent_ng_template_11_div_5_Template, 6, 4, "div", 22);
    } if (rf & 2) {
        var ctx_r1313 = core.ɵɵnextContext();
        core.ɵɵproperty("ngIf", ctx_r1313.nzTitle);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngStyle", ctx_r1313.nzBodyStyle);
        core.ɵɵadvance(3);
        core.ɵɵproperty("ngIf", !ctx_r1313.isComponent(ctx_r1313.nzContent));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r1313.nzFooter !== null);
    } }
    function NzModalComponent_ng_template_13_ng_container_6_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainer(0, 18);
    } if (rf & 2) {
        var ctx_r1344 = core.ɵɵnextContext(2);
        core.ɵɵproperty("ngTemplateOutlet", ctx_r1344.nzTitle);
    } }
    function NzModalComponent_ng_template_13_ng_container_7_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelement(1, "span", 26);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r1345 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("innerHTML", ctx_r1345.nzTitle, core.ɵɵsanitizeHtml);
    } }
    function NzModalComponent_ng_template_13_ng_container_11_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainer(0, 18);
    } if (rf & 2) {
        var ctx_r1350 = core.ɵɵnextContext(3);
        core.ɵɵproperty("ngTemplateOutlet", ctx_r1350.nzContent);
    } }
    function NzModalComponent_ng_template_13_ng_container_11_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelement(1, "div", 26);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r1351 = core.ɵɵnextContext(3);
        core.ɵɵadvance(1);
        core.ɵɵproperty("innerHTML", ctx_r1351.nzContent, core.ɵɵsanitizeHtml);
    } }
    function NzModalComponent_ng_template_13_ng_container_11_ng_container_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainer(0, 18);
    } if (rf & 2) {
        core.ɵɵnextContext(3);
        var _r1306 = core.ɵɵreference(1);
        core.ɵɵproperty("ngTemplateOutlet", _r1306);
    } }
    function NzModalComponent_ng_template_13_ng_container_11_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0, 16);
        core.ɵɵtemplate(1, NzModalComponent_ng_template_13_ng_container_11_ng_container_1_Template, 1, 1, "ng-container", 17);
        core.ɵɵtemplate(2, NzModalComponent_ng_template_13_ng_container_11_ng_container_2_Template, 2, 1, "ng-container", 25);
        core.ɵɵtemplate(3, NzModalComponent_ng_template_13_ng_container_11_ng_container_3_Template, 1, 1, "ng-container", 27);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r1347 = core.ɵɵnextContext(2);
        core.ɵɵproperty("ngSwitch", true);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", ctx_r1347.isTemplateRef(ctx_r1347.nzContent));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", ctx_r1347.isNonEmptyString(ctx_r1347.nzContent));
    } }
    function NzModalComponent_ng_template_13_button_13_Template(rf, ctx) { if (rf & 1) {
        var _r1354 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "button", 34);
        core.ɵɵlistener("click", function NzModalComponent_ng_template_13_button_13_Template_button_click_0_listener($event) { core.ɵɵrestoreView(_r1354); var ctx_r1353 = core.ɵɵnextContext(2); return ctx_r1353.onClickOkCancel("cancel"); });
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1348 = core.ɵɵnextContext(2);
        core.ɵɵproperty("nzLoading", ctx_r1348.nzCancelLoading)("disabled", ctx_r1348.nzCancelDisabled);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", ctx_r1348.cancelText, " ");
    } }
    function NzModalComponent_ng_template_13_button_14_Template(rf, ctx) { if (rf & 1) {
        var _r1357 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "button", 35, 42);
        core.ɵɵlistener("click", function NzModalComponent_ng_template_13_button_14_Template_button_click_0_listener($event) { core.ɵɵrestoreView(_r1357); var ctx_r1356 = core.ɵɵnextContext(2); return ctx_r1356.onClickOkCancel("ok"); });
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1349 = core.ɵɵnextContext(2);
        core.ɵɵproperty("nzType", ctx_r1349.nzOkType)("nzLoading", ctx_r1349.nzOkLoading)("disabled", ctx_r1349.nzOkDisabled);
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1(" ", ctx_r1349.okText, " ");
    } }
    function NzModalComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 20);
        core.ɵɵelementStart(1, "div", 36);
        core.ɵɵelementStart(2, "div", 37);
        core.ɵɵelement(3, "i", 38);
        core.ɵɵelementStart(4, "span", 39);
        core.ɵɵelementContainerStart(5, 16);
        core.ɵɵtemplate(6, NzModalComponent_ng_template_13_ng_container_6_Template, 1, 1, "ng-container", 17);
        core.ɵɵtemplate(7, NzModalComponent_ng_template_13_ng_container_7_Template, 2, 1, "ng-container", 25);
        core.ɵɵelementContainerEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(8, "div", 40);
        core.ɵɵelementContainerStart(9, null, 21);
        core.ɵɵtemplate(11, NzModalComponent_ng_template_13_ng_container_11_Template, 4, 3, "ng-container", 8);
        core.ɵɵelementContainerEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(12, "div", 41);
        core.ɵɵtemplate(13, NzModalComponent_ng_template_13_button_13_Template, 2, 3, "button", 32);
        core.ɵɵtemplate(14, NzModalComponent_ng_template_13_button_14_Template, 3, 4, "button", 33);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1315 = core.ɵɵnextContext();
        core.ɵɵproperty("ngStyle", ctx_r1315.nzBodyStyle);
        core.ɵɵadvance(3);
        core.ɵɵproperty("nzType", ctx_r1315.nzIconType);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngSwitch", true);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", ctx_r1315.isTemplateRef(ctx_r1315.nzTitle));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", ctx_r1315.isNonEmptyString(ctx_r1315.nzTitle));
        core.ɵɵadvance(4);
        core.ɵɵproperty("ngIf", !ctx_r1315.isComponent(ctx_r1315.nzContent));
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", ctx_r1315.nzCancelText !== null);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r1315.nzOkText !== null);
    } }
    var _c3 = ["*"];
    var MODAL_ANIMATE_DURATION = 200; // Duration when perform animations (ms)
    var WRAP_CLASS_NAME = 'ant-modal-wrap';
    var NZ_CONFIG_COMPONENT_NAME = 'modal';
    var NzModalComponent = /** @class */ (function (_super) {
        __extends(NzModalComponent, _super);
        function NzModalComponent(nzConfigService, overlay, overlayKeyboardDispatcher, i18n, cfr, elementRef, viewContainer, modalControl, focusTrapFactory, cdr, nzModalGlobalConfig, document // tslint:disable-line:no-any
        ) {
            var _this = _super.call(this) || this;
            _this.nzConfigService = nzConfigService;
            _this.overlay = overlay;
            _this.overlayKeyboardDispatcher = overlayKeyboardDispatcher;
            _this.i18n = i18n;
            _this.cfr = cfr;
            _this.elementRef = elementRef;
            _this.viewContainer = viewContainer;
            _this.modalControl = modalControl;
            _this.focusTrapFactory = focusTrapFactory;
            _this.cdr = cdr;
            _this.nzModalGlobalConfig = nzModalGlobalConfig;
            _this.document = document;
            _this.nzVisible = false;
            _this.nzClosable = true;
            _this.nzOkLoading = false;
            _this.nzOkDisabled = false;
            _this.nzCancelDisabled = false;
            _this.nzCancelLoading = false;
            _this.nzKeyboard = true;
            _this.nzNoAnimation = false;
            _this.nzGetContainer = function () { return _this.overlay.create(); }; // [STATIC]
            _this.nzZIndex = 1000;
            _this.nzWidth = 520;
            _this.nzCloseIcon = 'close';
            _this.nzOkType = 'primary';
            _this.nzIconType = 'question-circle'; // Confirm Modal ONLY
            _this.nzModalType = 'default';
            _this.nzAriaLabel = 'Close';
            _this.nzOnOk = new core.EventEmitter();
            _this.nzOnCancel = new core.EventEmitter();
            _this.nzAfterOpen = new core.EventEmitter(); // Trigger when modal open(visible) after animations
            _this.nzAfterClose = new core.EventEmitter(); // Trigger when modal leave-animation over
            _this.nzVisibleChange = new core.EventEmitter();
            _this.locale = {};
            _this.transformOrigin = '0px 0px 0px'; // The origin point that animation based on
            _this.unsubscribe$ = new rxjs.Subject();
            _this.dialogMouseDown = false;
            _this.scrollStrategy = _this.overlay.scrollStrategies.block();
            if (_this.nzModalGlobalConfig) {
                core$1.warnDeprecation('`NZ_MODAL_CONFIG` has been deprecated and will be removed in 9.0.0. Please use global config instead.');
            }
            return _this;
        }
        Object.defineProperty(NzModalComponent.prototype, "modalFooter", {
            set: function (value) {
                if (value && value.templateRef) {
                    this.setFooterWithTemplate(value.templateRef);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzModalComponent.prototype, "afterOpen", {
            get: function () {
                // Observable alias for nzAfterOpen
                return this.nzAfterOpen.asObservable();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzModalComponent.prototype, "afterClose", {
            get: function () {
                // Observable alias for nzAfterClose
                return this.nzAfterClose.asObservable();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzModalComponent.prototype, "cancelText", {
            get: function () {
                return this.nzCancelText || this.locale.cancelText;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzModalComponent.prototype, "okText", {
            get: function () {
                return this.nzOkText || this.locale.okText;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzModalComponent.prototype, "hidden", {
            get: function () {
                return !this.nzVisible && !this.animationState;
            } // Indicate whether this dialog should hidden
            ,
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzModalComponent.prototype, "mask", {
            /**
             * @description
             * The calculated highest weight of mask value
             *
             * Weight of different mask input:
             * component default value < global configuration < component input value
             */
            get: function () {
                if (this.nzMask != null) {
                    return this.nzMask;
                }
                else if (this.nzModalGlobalConfig && this.nzModalGlobalConfig.nzMask != null) {
                    return this.nzModalGlobalConfig.nzMask;
                }
                else {
                    return true;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzModalComponent.prototype, "maskClosable", {
            /**
             * @description
             * The calculated highest weight of maskClosable value
             *
             * Weight of different maskClosable input:
             * component default value < global configuration < component input value
             */
            get: function () {
                if (this.nzMaskClosable != null) {
                    return this.nzMaskClosable;
                }
                else if (this.nzModalGlobalConfig && this.nzModalGlobalConfig.nzMaskClosable != null) {
                    return this.nzModalGlobalConfig.nzMaskClosable;
                }
                else {
                    return true;
                }
            },
            enumerable: true,
            configurable: true
        });
        NzModalComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.i18n.localeChange.pipe(operators.takeUntil(this.unsubscribe$)).subscribe(function () {
                _this.locale = _this.i18n.getLocaleData('Modal');
            });
            if (this.isComponent(this.nzContent)) {
                this.createDynamicComponent(this.nzContent); // Create component along without View
            }
            if (this.isModalButtons(this.nzFooter)) {
                // Setup default button options
                this.nzFooter = this.formatModalButtons(this.nzFooter);
            }
            // Place the modal dom to elsewhere
            this.container = typeof this.nzGetContainer === 'function' ? this.nzGetContainer() : this.nzGetContainer;
            if (this.container instanceof HTMLElement) {
                this.container.appendChild(this.elementRef.nativeElement);
                rxjs.fromEvent(this.document.body, 'keydown')
                    .pipe(operators.takeUntil(this.unsubscribe$))
                    .subscribe(function (e) { return _this.keydownListener(e); });
            }
            else if (this.container instanceof overlay.OverlayRef) {
                // NOTE: only attach the dom to overlay, the view container is not changed actually
                this.setOverlayRef(this.container);
                this.container.overlayElement.appendChild(this.elementRef.nativeElement);
            }
            if (this.overlayRef) {
                this.overlayRef
                    .keydownEvents()
                    .pipe(operators.takeUntil(this.unsubscribe$))
                    .subscribe(function (e) { return _this.keydownListener(e); });
            }
            // Register modal when afterOpen/afterClose is stable
            this.modalControl.registerModal(this);
        };
        // [NOTE] NOT available when using by service!
        // Because ngOnChanges never be called when using by service,
        // here we can't support "nzContent"(Component) etc. as inputs that initialized dynamically.
        // BUT: User also can change "nzContent" dynamically to trigger UI changes (provided you don't use Component that needs initializations)
        NzModalComponent.prototype.ngOnChanges = function (changes) {
            if (changes.nzVisible) {
                this.handleVisibleStateChange(this.nzVisible, !changes.nzVisible.firstChange); // Do not trigger animation while initializing
            }
        };
        NzModalComponent.prototype.ngAfterViewInit = function () {
            // If using Component, it is the time to attach View while bodyContainer is ready
            if (this.contentComponentRef) {
                this.bodyContainer.insert(this.contentComponentRef.hostView);
            }
            if (this.autoFocusButtonOk) {
                this.autoFocusButtonOk.nativeElement.focus();
            }
        };
        NzModalComponent.prototype.ngOnDestroy = function () {
            var _this = this;
            // Close self before destructing
            this.changeVisibleFromInside(false).then(function () {
                _this.modalControl.deregisterModal(_this);
                if (_this.container instanceof overlay.OverlayRef) {
                    _this.container.dispose();
                }
                _this.unsubscribe$.next();
                _this.unsubscribe$.complete();
            });
            clearTimeout(this.timeoutId);
        };
        NzModalComponent.prototype.setFooterWithTemplate = function (templateRef) {
            this.nzFooter = templateRef;
            this.cdr.markForCheck();
        };
        NzModalComponent.prototype.setOverlayRef = function (overlayRef) {
            this.overlayRef = overlayRef;
        };
        NzModalComponent.prototype.keydownListener = function (event) {
            if (event.keyCode === keycodes.ESCAPE && this.nzKeyboard) {
                this.onClickOkCancel('cancel');
            }
        };
        NzModalComponent.prototype.open = function () {
            this.changeVisibleFromInside(true);
        };
        NzModalComponent.prototype.close = function (result) {
            this.changeVisibleFromInside(false, result);
        };
        NzModalComponent.prototype.destroy = function (result) {
            // Destroy equals Close
            this.close(result);
        };
        NzModalComponent.prototype.triggerOk = function () {
            this.onClickOkCancel('ok');
        };
        NzModalComponent.prototype.triggerCancel = function () {
            this.onClickOkCancel('cancel');
        };
        NzModalComponent.prototype.getInstance = function () {
            return this;
        };
        NzModalComponent.prototype.getContentComponentRef = function () {
            return this.contentComponentRef;
        };
        NzModalComponent.prototype.getContentComponent = function () {
            return this.contentComponentRef && this.contentComponentRef.instance;
        };
        NzModalComponent.prototype.getElement = function () {
            return this.elementRef && this.elementRef.nativeElement;
        };
        NzModalComponent.prototype.onMaskDialogDown = function () {
            this.dialogMouseDown = true;
        };
        NzModalComponent.prototype.onDialogUp = function () {
            var _this = this;
            if (this.dialogMouseDown) {
                this.timeoutId = setTimeout(function () {
                    _this.dialogMouseDown = false;
                }, 0);
            }
        };
        NzModalComponent.prototype.onClickMask = function ($event) {
            if (this.mask &&
                this.maskClosable &&
                $event.target.classList.contains(WRAP_CLASS_NAME) &&
                this.nzVisible &&
                !this.dialogMouseDown) {
                this.onClickOkCancel('cancel');
            }
        };
        NzModalComponent.prototype.isModalType = function (type) {
            return this.nzModalType === type;
        };
        NzModalComponent.prototype.onClickCloseBtn = function () {
            if (this.nzVisible) {
                this.onClickOkCancel('cancel');
            }
        };
        NzModalComponent.prototype.onClickOkCancel = function (type) {
            var _this = this;
            var trigger = { ok: this.nzOnOk, cancel: this.nzOnCancel }[type];
            var loadingKey = { ok: 'nzOkLoading', cancel: 'nzCancelLoading' }[type];
            if (trigger instanceof core.EventEmitter) {
                trigger.emit(this.getContentComponent());
            }
            else if (typeof trigger === 'function') {
                var result = trigger(this.getContentComponent());
                var caseClose_1 = function (doClose) { return doClose !== false && _this.close(doClose); }; // Users can return "false" to prevent closing by default
                if (core$1.isPromise(result)) {
                    this[loadingKey] = true;
                    var handleThen = function (doClose) {
                        _this[loadingKey] = false;
                        caseClose_1(doClose);
                    };
                    result.then(handleThen).catch(handleThen);
                }
                else {
                    caseClose_1(result);
                }
            }
        };
        NzModalComponent.prototype.isNonEmptyString = function (value) {
            return typeof value === 'string' && value !== '';
        };
        NzModalComponent.prototype.isTemplateRef = function (value) {
            return value instanceof core.TemplateRef;
        };
        NzModalComponent.prototype.isComponent = function (value) {
            return value instanceof core.Type;
        };
        NzModalComponent.prototype.isModalButtons = function (value) {
            return Array.isArray(value) && value.length > 0;
        };
        // Do rest things when visible state changed
        NzModalComponent.prototype.handleVisibleStateChange = function (visible, animation, closeResult) {
            var _this = this;
            if (animation === void 0) { animation = true; }
            if (visible) {
                // Hide scrollbar at the first time when shown up
                this.scrollStrategy.enable();
                this.savePreviouslyFocusedElement();
                this.trapFocus();
                if (this.container instanceof overlay.OverlayRef) {
                    this.overlayKeyboardDispatcher.add(this.overlayRef);
                }
            }
            else {
                if (this.container instanceof overlay.OverlayRef) {
                    this.overlayKeyboardDispatcher.remove(this.overlayRef);
                }
            }
            return Promise.resolve(animation ? this.animateTo(visible) : undefined).then(function () {
                // Emit open/close event after animations over
                if (visible) {
                    _this.nzAfterOpen.emit();
                }
                else {
                    _this.nzAfterClose.emit(closeResult);
                    _this.restoreFocus();
                    _this.scrollStrategy.disable();
                    // Mark the for check so it can react if the view container is using OnPush change detection.
                    _this.cdr.markForCheck();
                }
            });
        };
        // Lookup a button's property, if the prop is a function, call & then return the result, otherwise, return itself.
        NzModalComponent.prototype.getButtonCallableProp = function (options, prop) {
            var value = options[prop];
            var args = [];
            if (this.contentComponentRef) {
                args.push(this.contentComponentRef.instance);
            }
            return typeof value === 'function' ? value.apply(options, args) : value;
        };
        // On nzFooter's modal button click
        NzModalComponent.prototype.onButtonClick = function (button) {
            var result = this.getButtonCallableProp(button, 'onClick'); // Call onClick directly
            if (core$1.isPromise(result)) {
                button.loading = true;
                result.then(function () { return (button.loading = false); }).catch(function () { return (button.loading = false); });
            }
        };
        // Change nzVisible from inside
        NzModalComponent.prototype.changeVisibleFromInside = function (visible, closeResult) {
            if (this.nzVisible !== visible) {
                // Change nzVisible value immediately
                this.nzVisible = visible;
                this.nzVisibleChange.emit(visible);
                return this.handleVisibleStateChange(visible, true, closeResult);
            }
            return Promise.resolve();
        };
        NzModalComponent.prototype.changeAnimationState = function (state) {
            var _a, _b;
            this.animationState = state;
            if (state) {
                this.maskAnimationClassMap = (_a = {},
                    _a["fade-" + state] = true,
                    _a["fade-" + state + "-active"] = true,
                    _a);
                this.modalAnimationClassMap = (_b = {},
                    _b["zoom-" + state] = true,
                    _b["zoom-" + state + "-active"] = true,
                    _b);
            }
            else {
                this.maskAnimationClassMap = this.modalAnimationClassMap = null;
            }
        };
        NzModalComponent.prototype.animateTo = function (isVisible) {
            var _this = this;
            if (isVisible) {
                // Figure out the lastest click position when shows up
                setTimeout(function () { return _this.updateTransformOrigin(); }); // [NOTE] Using timeout due to the document.click event is fired later than visible change, so if not postponed to next event-loop, we can't get the lastest click position
            }
            this.changeAnimationState(isVisible ? 'enter' : 'leave');
            return new Promise(function (resolve) {
                return setTimeout(function () {
                    // Return when animation is over
                    _this.changeAnimationState(null);
                    resolve();
                }, _this.nzNoAnimation ? 0 : MODAL_ANIMATE_DURATION);
            });
        };
        NzModalComponent.prototype.formatModalButtons = function (buttons) {
            return buttons.map(function (button) {
                return __assign({
                    type: 'default',
                    size: 'default',
                    autoLoading: true,
                    show: true,
                    loading: false,
                    disabled: false
                }, button);
            });
        };
        /**
         * Create a component dynamically but not attach to any View (this action will be executed when bodyContainer is ready)
         * @param component Component class
         */
        NzModalComponent.prototype.createDynamicComponent = function (component) {
            var factory = this.cfr.resolveComponentFactory(component);
            var childInjector = core.Injector.create({
                providers: [{ provide: NzModalRef, useValue: this }],
                parent: this.viewContainer.parentInjector
            });
            this.contentComponentRef = factory.create(childInjector);
            if (this.nzComponentParams) {
                Object.assign(this.contentComponentRef.instance, this.nzComponentParams);
            }
            // Do the first change detection immediately (or we do detection at ngAfterViewInit, multi-changes error will be thrown)
            this.contentComponentRef.changeDetectorRef.detectChanges();
        };
        // Update transform-origin to the last click position on document
        NzModalComponent.prototype.updateTransformOrigin = function () {
            var modalElement = this.modalContainer.nativeElement;
            if (this.previouslyFocusedElement) {
                var previouslyDOMRect = this.previouslyFocusedElement.getBoundingClientRect();
                var lastPosition = core$1.getElementOffset(this.previouslyFocusedElement);
                var x = lastPosition.left + previouslyDOMRect.width / 2;
                var y = lastPosition.top + previouslyDOMRect.height / 2;
                this.transformOrigin = x - modalElement.offsetLeft + "px " + (y - modalElement.offsetTop) + "px 0px";
            }
        };
        NzModalComponent.prototype.savePreviouslyFocusedElement = function () {
            if (this.document) {
                this.previouslyFocusedElement = this.document.activeElement;
            }
        };
        NzModalComponent.prototype.trapFocus = function () {
            if (!this.focusTrap) {
                this.focusTrap = this.focusTrapFactory.create(this.elementRef.nativeElement);
            }
            this.focusTrap.focusInitialElementWhenReady();
        };
        NzModalComponent.prototype.restoreFocus = function () {
            // We need the extra check, because IE can set the `activeElement` to null in some cases.
            if (this.previouslyFocusedElement && typeof this.previouslyFocusedElement.focus === 'function') {
                this.previouslyFocusedElement.focus();
            }
            if (this.focusTrap) {
                this.focusTrap.destroy();
            }
        };
        /** @nocollapse */ NzModalComponent.ɵfac = function NzModalComponent_Factory(t) { return new (t || NzModalComponent)(core.ɵɵdirectiveInject(core$1.NzConfigService), core.ɵɵdirectiveInject(overlay.Overlay), core.ɵɵdirectiveInject(overlay.OverlayKeyboardDispatcher), core.ɵɵdirectiveInject(i18n.NzI18nService), core.ɵɵdirectiveInject(core.ComponentFactoryResolver), core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(core.ViewContainerRef), core.ɵɵdirectiveInject(NzModalControlService), core.ɵɵdirectiveInject(a11y.FocusTrapFactory), core.ɵɵdirectiveInject(core.ChangeDetectorRef), core.ɵɵdirectiveInject(NZ_MODAL_CONFIG, 8), core.ɵɵdirectiveInject(common.DOCUMENT)); };
        /** @nocollapse */ NzModalComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzModalComponent, selectors: [["nz-modal"]], contentQueries: function NzModalComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
                core.ɵɵcontentQuery(dirIndex, NzModalFooterDirective, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.modalFooter = _t.first);
            } }, viewQuery: function NzModalComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵstaticViewQuery(_c0, true);
                core.ɵɵviewQuery(_c1, true, core.ViewContainerRef);
                core.ɵɵviewQuery(_c2, true, core.ElementRef);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.modalContainer = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.bodyContainer = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.autoFocusButtonOk = _t.first);
            } }, inputs: { nzVisible: "nzVisible", nzClosable: "nzClosable", nzOkLoading: "nzOkLoading", nzOkDisabled: "nzOkDisabled", nzCancelDisabled: "nzCancelDisabled", nzCancelLoading: "nzCancelLoading", nzKeyboard: "nzKeyboard", nzNoAnimation: "nzNoAnimation", nzMask: "nzMask", nzMaskClosable: "nzMaskClosable", nzContent: "nzContent", nzComponentParams: "nzComponentParams", nzFooter: "nzFooter", nzGetContainer: "nzGetContainer", nzZIndex: "nzZIndex", nzWidth: "nzWidth", nzWrapClassName: "nzWrapClassName", nzClassName: "nzClassName", nzStyle: "nzStyle", nzTitle: "nzTitle", nzCloseIcon: "nzCloseIcon", nzMaskStyle: "nzMaskStyle", nzBodyStyle: "nzBodyStyle", nzOkText: "nzOkText", nzCancelText: "nzCancelText", nzOkType: "nzOkType", nzIconType: "nzIconType", nzModalType: "nzModalType", nzAriaLabel: "nzAriaLabel", nzOnOk: "nzOnOk", nzOnCancel: "nzOnCancel" }, outputs: { nzOnOk: "nzOnOk", nzOnCancel: "nzOnCancel", nzAfterOpen: "nzAfterOpen", nzAfterClose: "nzAfterClose", nzVisibleChange: "nzVisibleChange" }, exportAs: ["nzModal"], features: [core.ɵɵInheritDefinitionFeature, core.ɵɵNgOnChangesFeature()], ngContentSelectors: _c3, decls: 15, vars: 18, consts: [["tplOriginContent", ""], [3, "nzNoAnimation"], ["class", "ant-modal-mask", 3, "ngClass", "ant-modal-mask-hidden", "ngStyle", "zIndex", 4, "ngIf"], ["tabindex", "-1", "role", "dialog", 3, "click", "mouseup"], ["role", "document", 3, "ngClass", "ngStyle", "mousedown"], ["modalContainer", ""], [1, "ant-modal-content"], ["class", "ant-modal-close", 3, "click", 4, "ngIf"], [3, "ngSwitch", 4, "ngIf"], ["tplContentDefault", ""], ["tplContentConfirm", ""], [1, "ant-modal-mask", 3, "ngClass", "ngStyle"], [1, "ant-modal-close", 3, "click"], [1, "ant-modal-close-x"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", 1, "ant-modal-close-icon", 3, "nzType"], [3, "ngSwitch"], [3, "ngTemplateOutlet", 4, "ngSwitchCase"], [3, "ngTemplateOutlet"], ["class", "ant-modal-header", 4, "ngIf"], [1, "ant-modal-body", 3, "ngStyle"], ["bodyContainer", ""], ["class", "ant-modal-footer", 4, "ngIf"], [1, "ant-modal-header"], [1, "ant-modal-title"], [4, "ngSwitchCase"], [3, "innerHTML"], [3, "ngTemplateOutlet", 4, "ngSwitchDefault"], [1, "ant-modal-footer"], [4, "ngSwitchDefault"], ["nz-button", "", 3, "hidden", "nzLoading", "disabled", "nzType", "nzShape", "nzSize", "nzGhost", "click", 4, "ngFor", "ngForOf"], ["nz-button", "", 3, "hidden", "nzLoading", "disabled", "nzType", "nzShape", "nzSize", "nzGhost", "click"], ["nz-button", "", 3, "nzLoading", "disabled", "click", 4, "ngIf"], ["nz-button", "", 3, "nzType", "nzLoading", "disabled", "click", 4, "ngIf"], ["nz-button", "", 3, "nzLoading", "disabled", "click"], ["nz-button", "", 3, "nzType", "nzLoading", "disabled", "click"], [1, "ant-modal-confirm-body-wrapper"], [1, "ant-modal-confirm-body"], ["nz-icon", "", 3, "nzType"], [1, "ant-modal-confirm-title"], [1, "ant-modal-confirm-content"], [1, "ant-modal-confirm-btns"], ["autoFocusButtonOk", ""]], template: function NzModalComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵtemplate(0, NzModalComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, core.ɵɵtemplateRefExtractor);
                core.ɵɵelementStart(2, "div", 1);
                core.ɵɵtemplate(3, NzModalComponent_div_3_Template, 1, 4, "div", 2);
                core.ɵɵelementStart(4, "div", 3);
                core.ɵɵlistener("click", function NzModalComponent_Template_div_click_4_listener($event) { return ctx.onClickMask($event); })("mouseup", function NzModalComponent_Template_div_mouseup_4_listener($event) { return ctx.onDialogUp(); });
                core.ɵɵelementStart(5, "div", 4, 5);
                core.ɵɵlistener("mousedown", function NzModalComponent_Template_div_mousedown_5_listener($event) { return ctx.onMaskDialogDown(); });
                core.ɵɵpipe(7, "nzToCssUnit");
                core.ɵɵelementStart(8, "div", 6);
                core.ɵɵtemplate(9, NzModalComponent_button_9_Template, 3, 2, "button", 7);
                core.ɵɵtemplate(10, NzModalComponent_ng_container_10_Template, 3, 3, "ng-container", 8);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵtemplate(11, NzModalComponent_ng_template_11_Template, 6, 4, "ng-template", null, 9, core.ɵɵtemplateRefExtractor);
                core.ɵɵtemplate(13, NzModalComponent_ng_template_13_Template, 15, 8, "ng-template", null, 10, core.ɵɵtemplateRefExtractor);
            } if (rf & 2) {
                core.ɵɵadvance(2);
                core.ɵɵproperty("nzNoAnimation", ctx.nzNoAnimation);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.mask);
                core.ɵɵadvance(1);
                core.ɵɵclassMapInterpolate1("ant-modal-wrap ", ctx.nzWrapClassName, "");
                core.ɵɵstyleProp("z-index", ctx.nzZIndex)("visibility", ctx.hidden ? "hidden" : null);
                core.ɵɵadvance(1);
                core.ɵɵclassMapInterpolate1("ant-modal ", ctx.nzClassName, "");
                core.ɵɵstyleProp("width", core.ɵɵpipeBind1(7, 16, ctx.nzWidth))("transform-origin", ctx.transformOrigin);
                core.ɵɵproperty("ngClass", ctx.modalAnimationClassMap)("ngStyle", ctx.nzStyle);
                core.ɵɵadvance(4);
                core.ɵɵproperty("ngIf", ctx.nzClosable);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", !ctx.hidden);
            } }, directives: [core$1.NzNoAnimationDirective, common.NgIf, common.NgClass, common.NgStyle, core$1.NzStringTemplateOutletDirective, icon.NzIconDirective, common.NgSwitch, common.NgSwitchCase, common.NgTemplateOutlet, common.NgSwitchDefault, common.NgForOf, button.NzButtonComponent], pipes: [core$1.NzToCssUnitPipe], encapsulation: 2 });
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzModalComponent.prototype, "nzVisible", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzModalComponent.prototype, "nzClosable", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzModalComponent.prototype, "nzOkLoading", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzModalComponent.prototype, "nzOkDisabled", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzModalComponent.prototype, "nzCancelDisabled", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzModalComponent.prototype, "nzCancelLoading", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzModalComponent.prototype, "nzKeyboard", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzModalComponent.prototype, "nzNoAnimation", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME), core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzModalComponent.prototype, "nzMask", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME), core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzModalComponent.prototype, "nzMaskClosable", void 0);
        return NzModalComponent;
    }(NzModalRef));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzModalComponent, [{
            type: core.Component,
            args: [{
                    selector: 'nz-modal',
                    exportAs: 'nzModal',
                    templateUrl: './nz-modal.component.html',
                    // Using OnPush for modal caused footer can not to detect changes. we can fix it when 8.x.
                    changeDetection: core.ChangeDetectionStrategy.Default
                }]
        }], function () { return [{ type: core$1.NzConfigService }, { type: overlay.Overlay }, { type: overlay.OverlayKeyboardDispatcher }, { type: i18n.NzI18nService }, { type: core.ComponentFactoryResolver }, { type: core.ElementRef }, { type: core.ViewContainerRef }, { type: NzModalControlService }, { type: a11y.FocusTrapFactory }, { type: core.ChangeDetectorRef }, { type: undefined, decorators: [{
                    type: core.Optional
                }, {
                    type: core.Inject,
                    args: [NZ_MODAL_CONFIG]
                }] }, { type: undefined, decorators: [{
                    type: core.Inject,
                    args: [common.DOCUMENT]
                }] }]; }, { nzVisible: [{
                type: core.Input
            }], nzClosable: [{
                type: core.Input
            }], nzOkLoading: [{
                type: core.Input
            }], nzOkDisabled: [{
                type: core.Input
            }], nzCancelDisabled: [{
                type: core.Input
            }], nzCancelLoading: [{
                type: core.Input
            }], nzKeyboard: [{
                type: core.Input
            }], nzNoAnimation: [{
                type: core.Input
            }], nzMask: [{
                type: core.Input
            }], nzMaskClosable: [{
                type: core.Input
            }], nzContent: [{
                type: core.Input
            }], nzComponentParams: [{
                type: core.Input
            }], nzFooter: [{
                type: core.Input
            }], nzGetContainer: [{
                type: core.Input
            }], nzZIndex: [{
                type: core.Input
            }], nzWidth: [{
                type: core.Input
            }], nzWrapClassName: [{
                type: core.Input
            }], nzClassName: [{
                type: core.Input
            }], nzStyle: [{
                type: core.Input
            }], nzTitle: [{
                type: core.Input
            }], nzCloseIcon: [{
                type: core.Input
            }], nzMaskStyle: [{
                type: core.Input
            }], nzBodyStyle: [{
                type: core.Input
            }], nzOkText: [{
                type: core.Input
            }], nzCancelText: [{
                type: core.Input
            }], nzOkType: [{
                type: core.Input
            }], nzIconType: [{
                type: core.Input
            }], nzModalType: [{
                type: core.Input
            }], nzAriaLabel: [{
                type: core.Input
            }], nzOnOk: [{
                type: core.Input
            }, {
                type: core.Output
            }], nzOnCancel: [{
                type: core.Input
            }, {
                type: core.Output
            }], nzAfterOpen: [{
                type: core.Output
            }], nzAfterClose: [{
                type: core.Output
            }], nzVisibleChange: [{
                type: core.Output
            }], modalContainer: [{
                type: core.ViewChild,
                args: ['modalContainer', { static: true }]
            }], bodyContainer: [{
                type: core.ViewChild,
                args: ['bodyContainer', { static: false, read: core.ViewContainerRef }]
            }], autoFocusButtonOk: [{
                type: core.ViewChild,
                args: ['autoFocusButtonOk', { static: false, read: core.ElementRef }]
            }], modalFooter: [{
                type: core.ContentChild,
                args: [NzModalFooterDirective, { static: false }]
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzModalServiceModule = /** @class */ (function () {
        function NzModalServiceModule() {
        }
        /** @nocollapse */ NzModalServiceModule.ɵmod = core.ɵɵdefineNgModule({ type: NzModalServiceModule });
        /** @nocollapse */ NzModalServiceModule.ɵinj = core.ɵɵdefineInjector({ factory: function NzModalServiceModule_Factory(t) { return new (t || NzModalServiceModule)(); } });
        return NzModalServiceModule;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzModalServiceModule, [{
            type: core.NgModule
        }], null, null); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzModalModule = /** @class */ (function () {
        function NzModalModule() {
        }
        /** @nocollapse */ NzModalModule.ɵmod = core.ɵɵdefineNgModule({ type: NzModalModule });
        /** @nocollapse */ NzModalModule.ɵinj = core.ɵɵdefineInjector({ factory: function NzModalModule_Factory(t) { return new (t || NzModalModule)(); }, imports: [[
                    common.CommonModule,
                    overlay.OverlayModule,
                    core$1.NzAddOnModule,
                    i18n.NzI18nModule,
                    button.NzButtonModule,
                    icon.NzIconModule,
                    core$1.NzPipesModule,
                    core$1.NzNoAnimationModule,
                    NzModalServiceModule,
                    NzModalControlServiceModule
                ]] });
        return NzModalModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(NzModalModule, { declarations: [NzModalComponent, NzModalFooterDirective], imports: [common.CommonModule,
            overlay.OverlayModule,
            core$1.NzAddOnModule,
            i18n.NzI18nModule,
            button.NzButtonModule,
            icon.NzIconModule,
            core$1.NzPipesModule,
            core$1.NzNoAnimationModule,
            NzModalServiceModule,
            NzModalControlServiceModule], exports: [NzModalComponent, NzModalFooterDirective] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzModalModule, [{
            type: core.NgModule,
            args: [{
                    imports: [
                        common.CommonModule,
                        overlay.OverlayModule,
                        core$1.NzAddOnModule,
                        i18n.NzI18nModule,
                        button.NzButtonModule,
                        icon.NzIconModule,
                        core$1.NzPipesModule,
                        core$1.NzNoAnimationModule,
                        NzModalServiceModule,
                        NzModalControlServiceModule
                    ],
                    exports: [NzModalComponent, NzModalFooterDirective],
                    declarations: [NzModalComponent, NzModalFooterDirective],
                    entryComponents: [NzModalComponent]
                }]
        }], null, null); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    // A builder used for managing service creating modals
    var ModalBuilderForService = /** @class */ (function () {
        function ModalBuilderForService(overlay, options) {
            var _this = this;
            if (options === void 0) { options = {}; }
            this.overlay = overlay;
            this.createModal();
            if (!('nzGetContainer' in options)) {
                // As we use CDK to create modal in service by force, there is no need to use nzGetContainer
                options.nzGetContainer = undefined; // Override nzGetContainer's default value to prevent creating another overlay
            }
            this.changeProps(options);
            this.modalRef.instance.setOverlayRef(this.overlayRef);
            this.modalRef.instance.open();
            this.modalRef.instance.nzAfterClose.subscribe(function () { return _this.destroyModal(); }); // [NOTE] By default, close equals destroy when using as Service
        }
        ModalBuilderForService.prototype.getInstance = function () {
            return this.modalRef && this.modalRef.instance;
        };
        ModalBuilderForService.prototype.destroyModal = function () {
            if (this.modalRef) {
                this.overlayRef.dispose();
                this.modalRef = null;
            }
        };
        ModalBuilderForService.prototype.changeProps = function (options) {
            if (this.modalRef) {
                Object.assign(this.modalRef.instance, options); // DANGER: here not limit user's inputs at runtime
            }
        };
        // Create component to ApplicationRef
        ModalBuilderForService.prototype.createModal = function () {
            this.overlayRef = this.overlay.create();
            this.modalRef = this.overlayRef.attach(new portal.ComponentPortal(NzModalComponent));
        };
        return ModalBuilderForService;
    }());
    var NzModalService = /** @class */ (function () {
        function NzModalService(overlay, modalControl) {
            this.overlay = overlay;
            this.modalControl = modalControl;
        }
        Object.defineProperty(NzModalService.prototype, "openModals", {
            // Track of the current close modals (we assume invisible is close this time)
            get: function () {
                return this.modalControl.openModals;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzModalService.prototype, "afterAllClose", {
            get: function () {
                return this.modalControl.afterAllClose.asObservable();
            },
            enumerable: true,
            configurable: true
        });
        // Closes all of the currently-open dialogs
        NzModalService.prototype.closeAll = function () {
            this.modalControl.closeAll();
        };
        NzModalService.prototype.create = function (options) {
            if (options === void 0) { options = {}; }
            if (typeof options.nzOnCancel !== 'function') {
                options.nzOnCancel = function () { }; // Leave a empty function to close this modal by default
            }
            // NOTE: use NzModalComponent as the NzModalRef by now, we may need archive the real NzModalRef object in the future
            var modalRef = new ModalBuilderForService(this.overlay, options).getInstance();
            return modalRef;
        };
        NzModalService.prototype.confirm = function (options, confirmType) {
            if (options === void 0) { options = {}; }
            if (confirmType === void 0) { confirmType = 'confirm'; }
            if ('nzFooter' in options) {
                core$1.warn("The Confirm-Modal doesn't support \"nzFooter\", this property will be ignored.");
            }
            if (!('nzWidth' in options)) {
                options.nzWidth = 416;
            }
            if (!('nzMaskClosable' in options)) {
                options.nzMaskClosable = false;
            }
            if (typeof options.nzOnOk !== 'function') {
                // NOTE: only support function currently by calling confirm()
                options.nzOnOk = function () { }; // Leave a empty function to close this modal by default
            }
            options.nzModalType = 'confirm';
            options.nzClassName = "ant-modal-confirm ant-modal-confirm-" + confirmType + " " + (options.nzClassName || '');
            return this.create(options);
        };
        NzModalService.prototype.info = function (options) {
            if (options === void 0) { options = {}; }
            return this.simpleConfirm(options, 'info');
        };
        NzModalService.prototype.success = function (options) {
            if (options === void 0) { options = {}; }
            return this.simpleConfirm(options, 'success');
        };
        NzModalService.prototype.error = function (options) {
            if (options === void 0) { options = {}; }
            return this.simpleConfirm(options, 'error');
        };
        NzModalService.prototype.warning = function (options) {
            if (options === void 0) { options = {}; }
            return this.simpleConfirm(options, 'warning');
        };
        NzModalService.prototype.simpleConfirm = function (options, confirmType) {
            if (options === void 0) { options = {}; }
            var iconMap = {
                info: 'info-circle',
                success: 'check-circle',
                error: 'close-circle',
                warning: 'exclamation-circle'
            };
            if (!('nzIconType' in options)) {
                options.nzIconType = iconMap[confirmType];
            }
            if (!('nzCancelText' in options)) {
                // Remove the Cancel button if the user not specify a Cancel button
                options.nzCancelText = null;
            }
            return this.confirm(options, confirmType);
        };
        /** @nocollapse */ NzModalService.ɵfac = function NzModalService_Factory(t) { return new (t || NzModalService)(core.ɵɵinject(overlay.Overlay), core.ɵɵinject(NzModalControlService)); };
        /** @nocollapse */ NzModalService.ɵprov = core.ɵɵdefineInjectable({ token: NzModalService, factory: NzModalService.ɵfac, providedIn: NzModalServiceModule });
        return NzModalService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzModalService, [{
            type: core.Injectable,
            args: [{
                    providedIn: NzModalServiceModule
                }]
        }], function () { return [{ type: overlay.Overlay }, { type: NzModalControlService }]; }, null); })();

    exports.NZ_MODAL_CONFIG = NZ_MODAL_CONFIG;
    exports.NzModalComponent = NzModalComponent;
    exports.NzModalControlService = NzModalControlService;
    exports.NzModalControlServiceModule = NzModalControlServiceModule;
    exports.NzModalFooterDirective = NzModalFooterDirective;
    exports.NzModalModule = NzModalModule;
    exports.NzModalRef = NzModalRef;
    exports.NzModalService = NzModalService;
    exports.NzModalServiceModule = NzModalServiceModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-modal.umd.js.map

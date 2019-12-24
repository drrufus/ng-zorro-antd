(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ng-zorro-antd/core'), require('@angular/common'), require('ng-zorro-antd/icon')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/alert', ['exports', '@angular/core', 'ng-zorro-antd/core', '@angular/common', 'ng-zorro-antd/icon'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].alert = {}), global.ng.core, global['ng-zorro-antd'].core, global.ng.common, global['ng-zorro-antd'].icon));
}(this, (function (exports, core, core$1, common, icon) { 'use strict';

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

    function NzAlertComponent_div_0_ng_container_1_i_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "i", 8);
    } if (rf & 2) {
        var ctx_r341 = core.ɵɵnextContext(3);
        core.ɵɵproperty("ngClass", ctx_r341.nzIconType);
    } }
    function NzAlertComponent_div_0_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "i", 9);
    } if (rf & 2) {
        var ctx_r343 = core.ɵɵnextContext(3);
        core.ɵɵproperty("nzType", ctx_r343.iconType)("nzTheme", ctx_r343.iconTheme);
    } }
    function NzAlertComponent_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, NzAlertComponent_div_0_ng_container_1_i_1_Template, 1, 1, "i", 6);
        core.ɵɵtemplate(2, NzAlertComponent_div_0_ng_container_1_ng_template_2_Template, 1, 2, "ng-template", null, 7, core.ɵɵtemplateRefExtractor);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var _r342 = core.ɵɵreference(3);
        var ctx_r337 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r337.isIconTypeObject)("ngIfElse", _r342);
    } }
    function NzAlertComponent_div_0_span_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtext(1);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r344 = core.ɵɵnextContext(3);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(ctx_r344.nzMessage);
    } }
    function NzAlertComponent_div_0_span_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span", 10);
        core.ɵɵtemplate(1, NzAlertComponent_div_0_span_2_ng_container_1_Template, 2, 1, "ng-container", 11);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r338 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("nzStringTemplateOutlet", ctx_r338.nzMessage);
    } }
    function NzAlertComponent_div_0_span_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtext(1);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r345 = core.ɵɵnextContext(3);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(ctx_r345.nzDescription);
    } }
    function NzAlertComponent_div_0_span_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span", 12);
        core.ɵɵtemplate(1, NzAlertComponent_div_0_span_3_ng_container_1_Template, 2, 1, "ng-container", 11);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r339 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("nzStringTemplateOutlet", ctx_r339.nzDescription);
    } }
    function NzAlertComponent_div_0_a_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "i", 16);
    } }
    function NzAlertComponent_div_0_a_4_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtext(1);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r349 = core.ɵɵnextContext(4);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(ctx_r349.nzCloseText);
    } }
    function NzAlertComponent_div_0_a_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, NzAlertComponent_div_0_a_4_ng_container_3_ng_container_1_Template, 2, 1, "ng-container", 11);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r348 = core.ɵɵnextContext(3);
        core.ɵɵadvance(1);
        core.ɵɵproperty("nzStringTemplateOutlet", ctx_r348.nzCloseText);
    } }
    function NzAlertComponent_div_0_a_4_Template(rf, ctx) { if (rf & 1) {
        var _r351 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "a", 13);
        core.ɵɵlistener("click", function NzAlertComponent_div_0_a_4_Template_a_click_0_listener($event) { core.ɵɵrestoreView(_r351); var ctx_r350 = core.ɵɵnextContext(2); return ctx_r350.closeAlert(); });
        core.ɵɵtemplate(1, NzAlertComponent_div_0_a_4_ng_template_1_Template, 1, 0, "ng-template", null, 14, core.ɵɵtemplateRefExtractor);
        core.ɵɵtemplate(3, NzAlertComponent_div_0_a_4_ng_container_3_Template, 2, 1, "ng-container", 15);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var _r346 = core.ɵɵreference(2);
        var ctx_r340 = core.ɵɵnextContext(2);
        core.ɵɵadvance(3);
        core.ɵɵproperty("ngIf", ctx_r340.nzCloseText)("ngIfElse", _r346);
    } }
    function NzAlertComponent_div_0_Template(rf, ctx) { if (rf & 1) {
        var _r353 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 1);
        core.ɵɵlistener("@slideAlertMotion.done", function NzAlertComponent_div_0_Template_div_animation_slideAlertMotion_done_0_listener($event) { core.ɵɵrestoreView(_r353); var ctx_r352 = core.ɵɵnextContext(); return ctx_r352.onFadeAnimationDone(); });
        core.ɵɵtemplate(1, NzAlertComponent_div_0_ng_container_1_Template, 4, 2, "ng-container", 2);
        core.ɵɵtemplate(2, NzAlertComponent_div_0_span_2_Template, 2, 1, "span", 3);
        core.ɵɵtemplate(3, NzAlertComponent_div_0_span_3_Template, 2, 1, "span", 4);
        core.ɵɵtemplate(4, NzAlertComponent_div_0_a_4_Template, 4, 2, "a", 5);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r336 = core.ɵɵnextContext();
        core.ɵɵclassProp("ant-alert-success", ctx_r336.nzType === "success")("ant-alert-info", ctx_r336.nzType === "info")("ant-alert-warning", ctx_r336.nzType === "warning")("ant-alert-error", ctx_r336.nzType === "error")("ant-alert-no-icon", !ctx_r336.nzShowIcon)("ant-alert-banner", ctx_r336.nzBanner)("ant-alert-closable", ctx_r336.nzCloseable)("ant-alert-with-description", !!ctx_r336.nzDescription);
        core.ɵɵproperty("@slideAlertMotion", undefined);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r336.nzShowIcon);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r336.nzMessage);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r336.nzDescription);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r336.nzCloseable || ctx_r336.nzCloseText);
    } }
    var NZ_CONFIG_COMPONENT_NAME = 'alert';
    var NzAlertComponent = /** @class */ (function () {
        function NzAlertComponent(nzConfigService) {
            this.nzConfigService = nzConfigService;
            this.nzType = 'info';
            this.nzBanner = false;
            this.nzOnClose = new core.EventEmitter();
            this.destroy = false;
            this.iconTheme = 'fill';
            this.isIconTypeObject = false;
            this.isTypeSet = false;
            this.isShowIconSet = false;
            this.inferredIconType = 'info-circle';
        }
        Object.defineProperty(NzAlertComponent.prototype, "iconType", {
            get: function () {
                return this.nzIconType || this.inferredIconType;
            },
            enumerable: true,
            configurable: true
        });
        NzAlertComponent.prototype.closeAlert = function () {
            this.destroy = true;
        };
        NzAlertComponent.prototype.onFadeAnimationDone = function () {
            if (this.destroy) {
                this.nzOnClose.emit(true);
            }
        };
        NzAlertComponent.prototype.updateIconClassMap = function () {
            switch (this.nzType) {
                case 'error':
                    this.inferredIconType = 'close-circle';
                    break;
                case 'success':
                    this.inferredIconType = 'check-circle';
                    break;
                case 'info':
                    this.inferredIconType = 'info-circle';
                    break;
                case 'warning':
                    this.inferredIconType = 'exclamation-circle';
                    break;
            }
            this.iconTheme = this.nzDescription ? 'outline' : 'fill';
        };
        NzAlertComponent.prototype.ngOnChanges = function (changes) {
            var nzShowIcon = changes.nzShowIcon, nzDescription = changes.nzDescription, nzType = changes.nzType, nzBanner = changes.nzBanner, nzIconType = changes.nzIconType;
            if (nzShowIcon) {
                this.isShowIconSet = true;
            }
            if (nzDescription || nzType) {
                this.updateIconClassMap();
            }
            if (nzType) {
                this.isTypeSet = true;
            }
            if (nzBanner) {
                if (!this.isTypeSet) {
                    this.nzType = 'warning';
                }
                if (!this.isShowIconSet) {
                    this.nzShowIcon = true;
                }
            }
            if (nzIconType) {
                this.isIconTypeObject = typeof nzIconType.currentValue === 'object';
            }
        };
        /** @nocollapse */ NzAlertComponent.ɵfac = function NzAlertComponent_Factory(t) { return new (t || NzAlertComponent)(core.ɵɵdirectiveInject(core$1.NzConfigService)); };
        /** @nocollapse */ NzAlertComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzAlertComponent, selectors: [["nz-alert"]], inputs: { nzCloseText: "nzCloseText", nzIconType: "nzIconType", nzMessage: "nzMessage", nzDescription: "nzDescription", nzType: "nzType", nzCloseable: "nzCloseable", nzShowIcon: "nzShowIcon", nzBanner: "nzBanner" }, outputs: { nzOnClose: "nzOnClose" }, exportAs: ["nzAlert"], features: [core.ɵɵNgOnChangesFeature()], decls: 1, vars: 1, consts: [["class", "ant-alert", 3, "ant-alert-success", "ant-alert-info", "ant-alert-warning", "ant-alert-error", "ant-alert-no-icon", "ant-alert-banner", "ant-alert-closable", "ant-alert-with-description", 4, "ngIf"], [1, "ant-alert"], [4, "ngIf"], ["class", "ant-alert-message", 4, "ngIf"], ["class", "ant-alert-description", 4, "ngIf"], ["class", "ant-alert-close-icon", 3, "click", 4, "ngIf"], ["class", "ant-alert-icon", 3, "ngClass", 4, "ngIf", "ngIfElse"], ["iconTemplate", ""], [1, "ant-alert-icon", 3, "ngClass"], ["nz-icon", "", 1, "ant-alert-icon", 3, "nzType", "nzTheme"], [1, "ant-alert-message"], [4, "nzStringTemplateOutlet"], [1, "ant-alert-description"], [1, "ant-alert-close-icon", 3, "click"], ["closeDefaultTemplate", ""], [4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "close"]], template: function NzAlertComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵtemplate(0, NzAlertComponent_div_0_Template, 5, 13, "div", 0);
            } if (rf & 2) {
                core.ɵɵproperty("ngIf", !ctx.destroy);
            } }, directives: [common.NgIf, common.NgClass, icon.NzIconDirective, core$1.NzStringTemplateOutletDirective], styles: ["\n      nz-alert {\n        display: block;\n      }\n    "], encapsulation: 2, data: { animation: [core$1.slideAlertMotion] }, changeDetection: 0 });
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, false), core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzAlertComponent.prototype, "nzCloseable", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, false), core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzAlertComponent.prototype, "nzShowIcon", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzAlertComponent.prototype, "nzBanner", void 0);
        return NzAlertComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzAlertComponent, [{
            type: core.Component,
            args: [{
                    selector: 'nz-alert',
                    exportAs: 'nzAlert',
                    animations: [core$1.slideAlertMotion],
                    templateUrl: './nz-alert.component.html',
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    styles: [
                        "\n      nz-alert {\n        display: block;\n      }\n    "
                    ]
                }]
        }], function () { return [{ type: core$1.NzConfigService }]; }, { nzCloseText: [{
                type: core.Input
            }], nzIconType: [{
                type: core.Input
            }], nzMessage: [{
                type: core.Input
            }], nzDescription: [{
                type: core.Input
            }], nzType: [{
                type: core.Input
            }], nzCloseable: [{
                type: core.Input
            }], nzShowIcon: [{
                type: core.Input
            }], nzBanner: [{
                type: core.Input
            }], nzOnClose: [{
                type: core.Output
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzAlertModule = /** @class */ (function () {
        function NzAlertModule() {
        }
        /** @nocollapse */ NzAlertModule.ɵmod = core.ɵɵdefineNgModule({ type: NzAlertModule });
        /** @nocollapse */ NzAlertModule.ɵinj = core.ɵɵdefineInjector({ factory: function NzAlertModule_Factory(t) { return new (t || NzAlertModule)(); }, imports: [[common.CommonModule, icon.NzIconModule, core$1.NzAddOnModule]] });
        return NzAlertModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(NzAlertModule, { declarations: [NzAlertComponent], imports: [common.CommonModule, icon.NzIconModule, core$1.NzAddOnModule], exports: [NzAlertComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzAlertModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [NzAlertComponent],
                    exports: [NzAlertComponent],
                    imports: [common.CommonModule, icon.NzIconModule, core$1.NzAddOnModule]
                }]
        }], null, null); })();

    exports.NzAlertComponent = NzAlertComponent;
    exports.NzAlertModule = NzAlertModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-alert.umd.js.map

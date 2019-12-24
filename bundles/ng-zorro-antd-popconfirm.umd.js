(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ng-zorro-antd/core'), require('ng-zorro-antd/tooltip'), require('rxjs'), require('@angular/cdk/overlay'), require('@angular/common'), require('ng-zorro-antd/button'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/i18n'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/popconfirm', ['exports', '@angular/core', 'ng-zorro-antd/core', 'ng-zorro-antd/tooltip', 'rxjs', '@angular/cdk/overlay', '@angular/common', 'ng-zorro-antd/button', 'ng-zorro-antd/icon', 'ng-zorro-antd/i18n', 'rxjs/operators'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].popconfirm = {}), global.ng.core, global['ng-zorro-antd'].core, global['ng-zorro-antd'].tooltip, global.rxjs, global.ng.cdk.overlay, global.ng.common, global['ng-zorro-antd'].button, global['ng-zorro-antd'].icon, global['ng-zorro-antd'].i18n, global.rxjs.operators));
}(this, (function (exports, core, core$1, tooltip, rxjs, overlay, common, button, icon, i18n, operators) { 'use strict';

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

    function NzPopconfirmComponent_ng_template_1_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelement(1, "i", 14);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r1402 = core.ɵɵnextContext(3);
        core.ɵɵadvance(1);
        core.ɵɵproperty("nzType", ctx_r1402.nzIcon || "exclamation-circle");
    } }
    function NzPopconfirmComponent_ng_template_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, NzPopconfirmComponent_ng_template_1_ng_container_7_ng_container_1_Template, 2, 1, "ng-container", 8);
        core.ɵɵelementStart(2, "div", 13);
        core.ɵɵtext(3);
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r1397 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("nzStringTemplateOutlet", ctx_r1397.nzIcon);
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(ctx_r1397.title);
    } }
    function NzPopconfirmComponent_ng_template_1_ng_container_10_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtext(1);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r1398 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(ctx_r1398.nzCancelText);
    } }
    function NzPopconfirmComponent_ng_template_1_ng_container_11_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtext(1);
        core.ɵɵpipe(2, "nzI18n");
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(core.ɵɵpipeBind1(2, 1, "Modal.cancelText"));
    } }
    function NzPopconfirmComponent_ng_template_1_ng_container_13_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtext(1);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r1400 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(ctx_r1400.nzOkText);
    } }
    function NzPopconfirmComponent_ng_template_1_ng_container_14_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtext(1);
        core.ɵɵpipe(2, "nzI18n");
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(core.ɵɵpipeBind1(2, 1, "Modal.okText"));
    } }
    function NzPopconfirmComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
        var _r1404 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 2);
        core.ɵɵelementStart(1, "div", 3);
        core.ɵɵelement(2, "div", 4);
        core.ɵɵelementStart(3, "div", 5);
        core.ɵɵelementStart(4, "div");
        core.ɵɵelementStart(5, "div", 6);
        core.ɵɵelementStart(6, "div", 7);
        core.ɵɵtemplate(7, NzPopconfirmComponent_ng_template_1_ng_container_7_Template, 4, 2, "ng-container", 8);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(8, "div", 9);
        core.ɵɵelementStart(9, "button", 10);
        core.ɵɵlistener("click", function NzPopconfirmComponent_ng_template_1_Template_button_click_9_listener($event) { core.ɵɵrestoreView(_r1404); var ctx_r1403 = core.ɵɵnextContext(); return ctx_r1403.onCancel(); });
        core.ɵɵtemplate(10, NzPopconfirmComponent_ng_template_1_ng_container_10_Template, 2, 1, "ng-container", 11);
        core.ɵɵtemplate(11, NzPopconfirmComponent_ng_template_1_ng_container_11_Template, 3, 3, "ng-container", 11);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(12, "button", 12);
        core.ɵɵlistener("click", function NzPopconfirmComponent_ng_template_1_Template_button_click_12_listener($event) { core.ɵɵrestoreView(_r1404); var ctx_r1405 = core.ɵɵnextContext(); return ctx_r1405.onConfirm(); });
        core.ɵɵtemplate(13, NzPopconfirmComponent_ng_template_1_ng_container_13_Template, 2, 1, "ng-container", 11);
        core.ɵɵtemplate(14, NzPopconfirmComponent_ng_template_1_ng_container_14_Template, 3, 3, "ng-container", 11);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1396 = core.ɵɵnextContext();
        core.ɵɵproperty("ngClass", ctx_r1396._classMap)("ngStyle", ctx_r1396.nzOverlayStyle)("@.disabled", ctx_r1396.noAnimation == null ? null : ctx_r1396.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r1396.noAnimation == null ? null : ctx_r1396.noAnimation.nzNoAnimation)("@zoomBigMotion", "active");
        core.ɵɵadvance(7);
        core.ɵɵproperty("nzStringTemplateOutlet", ctx_r1396.title);
        core.ɵɵadvance(2);
        core.ɵɵproperty("nzSize", "small");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r1396.nzCancelText);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !ctx_r1396.nzCancelText);
        core.ɵɵadvance(1);
        core.ɵɵproperty("nzSize", "small")("nzType", ctx_r1396.nzOkType);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r1396.nzOkText);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !ctx_r1396.nzOkText);
    } }
    var _c0 = ["*"];
    var NzPopconfirmComponent = /** @class */ (function (_super) {
        __extends(NzPopconfirmComponent, _super);
        function NzPopconfirmComponent(cdr, noAnimation) {
            var _this = _super.call(this, cdr, noAnimation) || this;
            _this.noAnimation = noAnimation;
            _this.nzCondition = false;
            _this.nzOkType = 'primary';
            _this.nzOnCancel = new rxjs.Subject();
            _this.nzOnConfirm = new rxjs.Subject();
            _this._trigger = 'click';
            _this._prefix = 'ant-popover-placement';
            _this._hasBackdrop = true;
            return _this;
        }
        NzPopconfirmComponent.prototype.ngOnDestroy = function () {
            _super.prototype.ngOnDestroy.call(this);
            this.nzOnCancel.complete();
            this.nzOnConfirm.complete();
        };
        NzPopconfirmComponent.prototype.show = function () {
            if (!this.nzCondition) {
                _super.prototype.show.call(this);
            }
            else {
                this.onConfirm();
            }
        };
        NzPopconfirmComponent.prototype.onCancel = function () {
            this.nzOnCancel.next();
            _super.prototype.hide.call(this);
        };
        NzPopconfirmComponent.prototype.onConfirm = function () {
            this.nzOnConfirm.next();
            _super.prototype.hide.call(this);
        };
        /** @nocollapse */ NzPopconfirmComponent.ɵfac = function NzPopconfirmComponent_Factory(t) { return new (t || NzPopconfirmComponent)(core.ɵɵdirectiveInject(core.ChangeDetectorRef), core.ɵɵdirectiveInject(core$1.NzNoAnimationDirective, 9)); };
        /** @nocollapse */ NzPopconfirmComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzPopconfirmComponent, selectors: [["nz-popconfirm"]], exportAs: ["nzPopconfirmComponent"], features: [core.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 3, vars: 4, consts: [["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayPositions", "cdkConnectedOverlayOpen", "backdropClick", "detach", "positionChange"], ["overlay", "cdkConnectedOverlay"], [1, "ant-popover", 3, "ngClass", "ngStyle", "nzNoAnimation"], [1, "ant-popover-content"], [1, "ant-popover-arrow"], [1, "ant-popover-inner"], [1, "ant-popover-inner-content"], [1, "ant-popover-message"], [4, "nzStringTemplateOutlet"], [1, "ant-popover-buttons"], ["nz-button", "", 3, "nzSize", "click"], [4, "ngIf"], ["nz-button", "", 3, "nzSize", "nzType", "click"], [1, "ant-popover-message-title"], ["nz-icon", "", "nzTheme", "fill", 3, "nzType"]], template: function NzPopconfirmComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵprojection(0);
                core.ɵɵtemplate(1, NzPopconfirmComponent_ng_template_1_Template, 15, 13, "ng-template", 0, 1, core.ɵɵtemplateRefExtractor);
                core.ɵɵlistener("backdropClick", function NzPopconfirmComponent_Template_ng_template_backdropClick_1_listener($event) { return ctx.hide(); })("detach", function NzPopconfirmComponent_Template_ng_template_detach_1_listener($event) { return ctx.hide(); })("positionChange", function NzPopconfirmComponent_Template_ng_template_positionChange_1_listener($event) { return ctx.onPositionChange($event); });
            } if (rf & 2) {
                core.ɵɵadvance(1);
                core.ɵɵproperty("cdkConnectedOverlayOrigin", ctx.origin)("cdkConnectedOverlayHasBackdrop", ctx._hasBackdrop)("cdkConnectedOverlayPositions", ctx._positions)("cdkConnectedOverlayOpen", ctx._visible);
            } }, directives: [overlay.CdkConnectedOverlay, core$1.NzConnectedOverlayDirective, common.NgClass, common.NgStyle, core$1.NzNoAnimationDirective, core$1.NzStringTemplateOutletDirective, button.NzButtonComponent, common.NgIf, icon.NzIconDirective], pipes: [i18n.NzI18nPipe], styles: ["\n      .ant-popover {\n        position: relative;\n      }\n    "], encapsulation: 2, data: { animation: [core$1.zoomBigMotion] }, changeDetection: 0 });
        return NzPopconfirmComponent;
    }(tooltip.NzToolTipComponent));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzPopconfirmComponent, [{
            type: core.Component,
            args: [{
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    selector: 'nz-popconfirm',
                    exportAs: 'nzPopconfirmComponent',
                    preserveWhitespaces: false,
                    animations: [core$1.zoomBigMotion],
                    templateUrl: './nz-popconfirm.component.html',
                    styles: [
                        "\n      .ant-popover {\n        position: relative;\n      }\n    "
                    ]
                }]
        }], function () { return [{ type: core.ChangeDetectorRef }, { type: core$1.NzNoAnimationDirective, decorators: [{
                    type: core.Host
                }, {
                    type: core.Optional
                }] }]; }, null); })();

    var NzPopconfirmDirective = /** @class */ (function (_super) {
        __extends(NzPopconfirmDirective, _super);
        function NzPopconfirmDirective(elementRef, hostView, resolver, renderer, noAnimation) {
            var _this = _super.call(this, elementRef, hostView, resolver, renderer, noAnimation) || this;
            /**
             * @deprecated 10.0.0. This is deprecated and going to be removed in 10.0.0.
             * Please use a more specific API. Like `nzTooltipTrigger`.
             */
            _this.nzTrigger = 'click';
            _this.nzOnCancel = new core.EventEmitter();
            _this.nzOnConfirm = new core.EventEmitter();
            _this.componentFactory = _this.resolver.resolveComponentFactory(NzPopconfirmComponent);
            _this.needProxyProperties = [
                'nzOverlayClassName',
                'nzOverlayStyle',
                'nzMouseEnterDelay',
                'nzMouseLeaveDelay',
                'nzVisible',
                'nzOkText',
                'nzOkType',
                'nzCancelText',
                'nzCondition',
                'nzIcon'
            ];
            return _this;
        }
        /**
         * @override
         */
        NzPopconfirmDirective.prototype.createTooltipComponent = function () {
            var _this = this;
            _super.prototype.createTooltipComponent.call(this);
            this.tooltip.nzOnCancel.pipe(operators.takeUntil(this.$destroy)).subscribe(function () {
                _this.nzOnCancel.emit();
            });
            this.tooltip.nzOnConfirm.pipe(operators.takeUntil(this.$destroy)).subscribe(function () {
                _this.nzOnConfirm.emit();
            });
        };
        /** @nocollapse */ NzPopconfirmDirective.ɵfac = function NzPopconfirmDirective_Factory(t) { return new (t || NzPopconfirmDirective)(core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(core.ViewContainerRef), core.ɵɵdirectiveInject(core.ComponentFactoryResolver), core.ɵɵdirectiveInject(core.Renderer2), core.ɵɵdirectiveInject(core$1.NzNoAnimationDirective, 9)); };
        /** @nocollapse */ NzPopconfirmDirective.ɵdir = core.ɵɵdefineDirective({ type: NzPopconfirmDirective, selectors: [["", "nz-popconfirm", ""]], hostBindings: function NzPopconfirmDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
                core.ɵɵallocHostVars(1);
            } if (rf & 2) {
                core.ɵɵclassProp("ant-popover-open", ctx.isTooltipComponentVisible);
            } }, inputs: { specificTitle: ["nzPopconfirmTitle", "specificTitle"], directiveNameTitle: ["nz-popconfirm", "directiveNameTitle"], specificTrigger: ["nzPopconfirmTrigger", "specificTrigger"], specificPlacement: ["nzPopconfirmPlacement", "specificPlacement"], nzOkText: "nzOkText", nzOkType: "nzOkType", nzCancelText: "nzCancelText", nzIcon: "nzIcon", nzCondition: "nzCondition", nzTrigger: "nzTrigger" }, outputs: { nzOnCancel: "nzOnCancel", nzOnConfirm: "nzOnConfirm" }, exportAs: ["nzPopconfirm"], features: [core.ɵɵInheritDefinitionFeature] });
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzPopconfirmDirective.prototype, "nzCondition", void 0);
        return NzPopconfirmDirective;
    }(tooltip.NzTooltipBaseDirective));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzPopconfirmDirective, [{
            type: core.Directive,
            args: [{
                    selector: '[nz-popconfirm]',
                    exportAs: 'nzPopconfirm',
                    host: {
                        '[class.ant-popover-open]': 'isTooltipComponentVisible'
                    }
                }]
        }], function () { return [{ type: core.ElementRef }, { type: core.ViewContainerRef }, { type: core.ComponentFactoryResolver }, { type: core.Renderer2 }, { type: core$1.NzNoAnimationDirective, decorators: [{
                    type: core.Host
                }, {
                    type: core.Optional
                }] }]; }, { specificTitle: [{
                type: core.Input,
                args: ['nzPopconfirmTitle']
            }], directiveNameTitle: [{
                type: core.Input,
                args: ['nz-popconfirm']
            }], specificTrigger: [{
                type: core.Input,
                args: ['nzPopconfirmTrigger']
            }], specificPlacement: [{
                type: core.Input,
                args: ['nzPopconfirmPlacement']
            }], nzOkText: [{
                type: core.Input
            }], nzOkType: [{
                type: core.Input
            }], nzCancelText: [{
                type: core.Input
            }], nzIcon: [{
                type: core.Input
            }], nzCondition: [{
                type: core.Input
            }], nzTrigger: [{
                type: core.Input
            }], nzOnCancel: [{
                type: core.Output
            }], nzOnConfirm: [{
                type: core.Output
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzPopconfirmModule = /** @class */ (function () {
        function NzPopconfirmModule() {
        }
        /** @nocollapse */ NzPopconfirmModule.ɵmod = core.ɵɵdefineNgModule({ type: NzPopconfirmModule });
        /** @nocollapse */ NzPopconfirmModule.ɵinj = core.ɵɵdefineInjector({ factory: function NzPopconfirmModule_Factory(t) { return new (t || NzPopconfirmModule)(); }, imports: [[
                    common.CommonModule,
                    button.NzButtonModule,
                    overlay.OverlayModule,
                    i18n.NzI18nModule,
                    icon.NzIconModule,
                    core$1.NzAddOnModule,
                    core$1.NzOverlayModule,
                    core$1.NzNoAnimationModule,
                    tooltip.NzToolTipModule
                ]] });
        return NzPopconfirmModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(NzPopconfirmModule, { declarations: [NzPopconfirmComponent, NzPopconfirmDirective], imports: [common.CommonModule,
            button.NzButtonModule,
            overlay.OverlayModule,
            i18n.NzI18nModule,
            icon.NzIconModule,
            core$1.NzAddOnModule,
            core$1.NzOverlayModule,
            core$1.NzNoAnimationModule,
            tooltip.NzToolTipModule], exports: [NzPopconfirmComponent, NzPopconfirmDirective] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzPopconfirmModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [NzPopconfirmComponent, NzPopconfirmDirective],
                    exports: [NzPopconfirmComponent, NzPopconfirmDirective],
                    imports: [
                        common.CommonModule,
                        button.NzButtonModule,
                        overlay.OverlayModule,
                        i18n.NzI18nModule,
                        icon.NzIconModule,
                        core$1.NzAddOnModule,
                        core$1.NzOverlayModule,
                        core$1.NzNoAnimationModule,
                        tooltip.NzToolTipModule
                    ],
                    entryComponents: [NzPopconfirmComponent]
                }]
        }], null, null); })();

    exports.NzPopconfirmComponent = NzPopconfirmComponent;
    exports.NzPopconfirmDirective = NzPopconfirmDirective;
    exports.NzPopconfirmModule = NzPopconfirmModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-popconfirm.umd.js.map

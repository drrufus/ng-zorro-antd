(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('ng-zorro-antd/core'),require('@angular/cdk/overlay'),require('@angular/common'),require('ng-zorro-antd/icon'),require('ng-zorro-antd/tooltip'),exports, require('@angular/core'), require('ng-zorro-antd/core'), require('ng-zorro-antd/tooltip'), require('@angular/cdk/overlay'), require('@angular/common'), require('ng-zorro-antd/icon')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/popover', ['@angular/core','ng-zorro-antd/core','@angular/cdk/overlay','@angular/common','ng-zorro-antd/icon','ng-zorro-antd/tooltip','exports', '@angular/core', 'ng-zorro-antd/core', 'ng-zorro-antd/tooltip', '@angular/cdk/overlay', '@angular/common', 'ng-zorro-antd/icon'], factory) :
    (global = global || self, factory(global.ng.core,global.ngZorroAntd.core,global.ng.cdk.overlay,global.ng.common,global.ngZorroAntd.icon,global.ngZorroAntd.tooltip,(global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].popover = {}), global.ng.core, global['ng-zorro-antd'].core, global['ng-zorro-antd'].tooltip, global.ng.cdk.overlay, global.ng.common, global['ng-zorro-antd'].icon));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,ɵngcc4,ɵngcc5,exports, core, core$1, tooltip, overlay, common, icon) { 
var _c0 = ["neverUsedTemplate"];
var _c1 = ["nzTemplate"];
var _c2 = ["focusableHeader"];
function NzPopoverComponent_ng_template_1_div_5_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r7 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r7.title);
} }
function NzPopoverComponent_ng_template_1_div_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzPopoverComponent_ng_template_1_div_5_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 8);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r4.title);
} }
function NzPopoverComponent_ng_template_1_div_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "h4", 12, 13);
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r5 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵtextInterpolate(ctx_r5.title);
} }
function NzPopoverComponent_ng_template_1_div_5_button_3_Template(rf, ctx) { if (rf & 1) {
    var _r10 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 14);
    ɵngcc0.ɵɵlistener("click", function NzPopoverComponent_ng_template_1_div_5_button_3_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r10); var ctx_r9 = ɵngcc0.ɵɵnextContext(3); return ctx_r9.hide(); });
    ɵngcc0.ɵɵelementStart(1, "span", 15);
    ɵngcc0.ɵɵelement(2, "i", 16);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r6 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵattribute("aria-label", ctx_r6.nzPopoverCloseButtonLabel);
} }
function NzPopoverComponent_ng_template_1_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 9);
    ɵngcc0.ɵɵtemplate(1, NzPopoverComponent_ng_template_1_div_5_ng_container_1_Template, 2, 1, "ng-container", 10);
    ɵngcc0.ɵɵtemplate(2, NzPopoverComponent_ng_template_1_div_5_ng_container_2_Template, 4, 1, "ng-container", 10);
    ɵngcc0.ɵɵtemplate(3, NzPopoverComponent_ng_template_1_div_5_button_3_Template, 3, 1, "button", 11);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r2.simpleHeader);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.simpleHeader);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.nzShowPopoverCloseButton);
} }
function NzPopoverComponent_ng_template_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r3.content);
} }
function NzPopoverComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵelementStart(1, "div", 3);
    ɵngcc0.ɵɵelement(2, "div", 4);
    ɵngcc0.ɵɵelementStart(3, "div", 5);
    ɵngcc0.ɵɵelementStart(4, "div");
    ɵngcc0.ɵɵtemplate(5, NzPopoverComponent_ng_template_1_div_5_Template, 4, 3, "div", 6);
    ɵngcc0.ɵɵelementStart(6, "div", 7);
    ɵngcc0.ɵɵtemplate(7, NzPopoverComponent_ng_template_1_ng_container_7_Template, 2, 1, "ng-container", 8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ctx_r1._classMap)("ngStyle", ctx_r1.nzOverlayStyle)("@.disabled", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation)("@zoomBigMotion", "active");
    ɵngcc0.ɵɵadvance(5);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.title);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r1.content);
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
    var NzPopoverComponent = /** @class */ (function (_super) {
        __extends(NzPopoverComponent, _super);
        function NzPopoverComponent(cdr, noAnimation) {
            var _this = _super.call(this, cdr, noAnimation) || this;
            _this.noAnimation = noAnimation;
            _this._prefix = 'ant-popover-placement';
            _this.nzShowPopoverCloseButton = false;
            _this.nzPopoverCloseButtonLabel = 'close';
            _this.nzPopoverForceRestoreFocus = false;
            return _this;
        }
        Object.defineProperty(NzPopoverComponent.prototype, "simpleHeader", {
            get: /**
             * @return {?}
             */
            function () {
                return typeof (this.nzTitle) == 'string';
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NzPopoverComponent.prototype.focusOnHeader = /**
         * @return {?}
         */
        function () {
            if (this.simpleHeader && this.focusableHeader != null) {
                this.focusableHeader.nativeElement.focus();
            }
        };
        /**
         * @return {?}
         */
        NzPopoverComponent.prototype.afterAppearing = /**
         * @return {?}
         */
        function () {
            this.focusOnHeader();
        };
        /** @nocollapse */
        NzPopoverComponent.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef },
            { type: core$1.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] }
        ]; };
        NzPopoverComponent.propDecorators = {
            nzTitle: [{ type: core.Input }],
            nzTitleTemplate: [{ type: core.ContentChild, args: ['neverUsedTemplate', { static: true },] }],
            nzContent: [{ type: core.Input }],
            nzContentTemplate: [{ type: core.ContentChild, args: ['nzTemplate', { static: true },] }],
            nzShowPopoverCloseButton: [{ type: core.Input }],
            nzPopoverCloseButtonLabel: [{ type: core.Input }],
            nzPopoverForceRestoreFocus: [{ type: core.Input }],
            focusableHeader: [{ type: core.ViewChild, args: ['focusableHeader', { static: false },] }]
        };
NzPopoverComponent.ɵfac = function NzPopoverComponent_Factory(t) { return new (t || NzPopoverComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzNoAnimationDirective, 9)); };
NzPopoverComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzPopoverComponent, selectors: [["nz-popover"]], contentQueries: function NzPopoverComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵstaticContentQuery(dirIndex, _c0, true);
        ɵngcc0.ɵɵstaticContentQuery(dirIndex, _c1, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nzTitleTemplate = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nzContentTemplate = _t.first);
    } }, viewQuery: function NzPopoverComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c2, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.focusableHeader = _t.first);
    } }, inputs: { nzTitle: "nzTitle", nzContent: "nzContent", nzShowPopoverCloseButton: "nzShowPopoverCloseButton", nzPopoverCloseButtonLabel: "nzPopoverCloseButtonLabel", nzPopoverForceRestoreFocus: "nzPopoverForceRestoreFocus" }, exportAs: ["nzPopoverComponent"], features: [ɵngcc0.ɵɵProvidersFeature([
            {
                provide: tooltip.NzTooltipBaseComponentLegacy,
                useExisting: NzPopoverComponent
            }
        ]), ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c3, decls: 3, vars: 4, consts: [["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayPositions", "cdkConnectedOverlayOpen", "backdropClick", "detach", "positionChange"], ["overlay", "cdkConnectedOverlay"], [1, "ant-popover", 3, "ngClass", "ngStyle", "nzNoAnimation"], [1, "ant-popover-content"], [1, "ant-popover-arrow"], ["role", "tooltip", 1, "ant-popover-inner"], ["class", "ant-popover-title", 4, "ngIf"], [1, "ant-popover-inner-content"], [4, "nzStringTemplateOutlet"], [1, "ant-popover-title"], [4, "ngIf"], ["class", "ant-modal-close popover-close-button", 3, "click", 4, "ngIf"], ["tabindex", "0", 2, "margin", "0"], ["focusableHeader", ""], [1, "ant-modal-close", "popover-close-button", 3, "click"], [1, "ant-modal-close-x"], ["nz-icon", "", "nzType", "close", "nzTheme", "outline", 1, "ant-modal-close-icon"]], template: function NzPopoverComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
        ɵngcc0.ɵɵtemplate(1, NzPopoverComponent_ng_template_1_Template, 8, 7, "ng-template", 0, 1, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵlistener("backdropClick", function NzPopoverComponent_Template_ng_template_backdropClick_1_listener() { return ctx.hide(); })("detach", function NzPopoverComponent_Template_ng_template_detach_1_listener() { return ctx.hide(); })("positionChange", function NzPopoverComponent_Template_ng_template_positionChange_1_listener($event) { return ctx.onPositionChange($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("cdkConnectedOverlayOrigin", ctx.origin)("cdkConnectedOverlayHasBackdrop", ctx._hasBackdrop)("cdkConnectedOverlayPositions", ctx._positions)("cdkConnectedOverlayOpen", ctx._visible);
    } }, directives: [ɵngcc2.CdkConnectedOverlay, ɵngcc1.NzConnectedOverlayDirective, ɵngcc3.NgClass, ɵngcc3.NgStyle, ɵngcc1.NzNoAnimationDirective, ɵngcc3.NgIf, ɵngcc1.NzStringTemplateOutletDirective, ɵngcc4.NzIconDirective], styles: ["\n      .ant-popover {\n        position: relative;\n      }\n    "], encapsulation: 2, data: { animation: [core$1.zoomBigMotion] }, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzPopoverComponent, [{
        type: core.Component,
        args: [{
                selector: 'nz-popover',
                exportAs: 'nzPopoverComponent',
                animations: [core$1.zoomBigMotion],
                template: "<ng-content></ng-content>\r\n<ng-template\r\n  #overlay=\"cdkConnectedOverlay\"\r\n  cdkConnectedOverlay\r\n  nzConnectedOverlay\r\n  [cdkConnectedOverlayOrigin]=\"origin\"\r\n  [cdkConnectedOverlayHasBackdrop]=\"_hasBackdrop\"\r\n  (backdropClick)=\"hide()\"\r\n  (detach)=\"hide()\"\r\n  (positionChange)=\"onPositionChange($event)\"\r\n  [cdkConnectedOverlayPositions]=\"_positions\"\r\n  [cdkConnectedOverlayOpen]=\"_visible\">\r\n  <div class=\"ant-popover\"\r\n    [ngClass]=\"_classMap\"\r\n    [ngStyle]=\"nzOverlayStyle\"\r\n    [@.disabled]=\"noAnimation?.nzNoAnimation\"\r\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n    [@zoomBigMotion]=\"'active'\">\r\n    <div class=\"ant-popover-content\">\r\n      <div class=\"ant-popover-arrow\"></div>\r\n      <div class=\"ant-popover-inner\" role=\"tooltip\">\r\n        <div>\r\n          <div class=\"ant-popover-title\" *ngIf=\"title\">\r\n\r\n            <ng-container *ngIf=\"!simpleHeader\">\r\n              <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"simpleHeader\">\r\n              <h4 style=\"margin: 0;\" #focusableHeader tabindex=\"0\">{{ title }}</h4>\r\n            </ng-container>\r\n\r\n            <button *ngIf=\"nzShowPopoverCloseButton\" (click)=\"hide()\" class=\"ant-modal-close popover-close-button\" [attr.aria-label]=\"nzPopoverCloseButtonLabel\">\r\n              <span class=\"ant-modal-close-x\">\r\n                <i nz-icon nzType=\"close\" nzTheme=\"outline\" class=\"ant-modal-close-icon\"></i>\r\n              </span>\r\n            </button>\r\n\r\n          </div>\r\n          \r\n          <div class=\"ant-popover-inner-content\">\r\n            <ng-container *nzStringTemplateOutlet=\"content\">{{ content }}</ng-container>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                providers: [
                    {
                        provide: tooltip.NzTooltipBaseComponentLegacy,
                        useExisting: NzPopoverComponent
                    }
                ],
                preserveWhitespaces: false,
                styles: ["\n      .ant-popover {\n        position: relative;\n      }\n    "]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc1.NzNoAnimationDirective, decorators: [{
                type: core.Host
            }, {
                type: core.Optional
            }] }]; }, { nzTitle: [{
            type: core.Input
        }], nzTitleTemplate: [{
            type: core.ContentChild,
            args: ['neverUsedTemplate', { static: true }]
        }], nzContent: [{
            type: core.Input
        }], nzContentTemplate: [{
            type: core.ContentChild,
            args: ['nzTemplate', { static: true }]
        }], nzShowPopoverCloseButton: [{
            type: core.Input
        }], nzPopoverCloseButtonLabel: [{
            type: core.Input
        }], nzPopoverForceRestoreFocus: [{
            type: core.Input
        }], focusableHeader: [{
            type: core.ViewChild,
            args: ['focusableHeader', { static: false }]
        }] }); })();
        return NzPopoverComponent;
    }(tooltip.NzToolTipComponent));
    if (false) {
        /** @type {?} */
        NzPopoverComponent.prototype._prefix;
        /**
         * Use `neverUsedTemplate` to force `nzTemplate` to be catched by `nzPopoverContent`.
         * @type {?}
         */
        NzPopoverComponent.prototype.nzTitle;
        /** @type {?} */
        NzPopoverComponent.prototype.nzTitleTemplate;
        /** @type {?} */
        NzPopoverComponent.prototype.nzContent;
        /** @type {?} */
        NzPopoverComponent.prototype.nzContentTemplate;
        /** @type {?} */
        NzPopoverComponent.prototype.nzShowPopoverCloseButton;
        /** @type {?} */
        NzPopoverComponent.prototype.nzPopoverCloseButtonLabel;
        /** @type {?} */
        NzPopoverComponent.prototype.nzPopoverForceRestoreFocus;
        /** @type {?} */
        NzPopoverComponent.prototype.focusableHeader;
        /** @type {?} */
        NzPopoverComponent.prototype.noAnimation;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzPopoverDirective = /** @class */ (function (_super) {
        __extends(NzPopoverDirective, _super);
        function NzPopoverDirective(elementRef, hostView, resolver, renderer, tooltip, noAnimation) {
            var _this = _super.call(this, elementRef, hostView, resolver, renderer, tooltip, noAnimation) || this;
            _this.noAnimation = noAnimation;
            _this.showPopoverCloseButton = false;
            _this.popoverCloseButtonLabel = 'сlose';
            _this.popoverForceRestoreFocus = false;
            _this.componentFactory = _this.resolver.resolveComponentFactory(NzPopoverComponent);
            return _this;
        }
        /** @nocollapse */
        NzPopoverDirective.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.ViewContainerRef },
            { type: core.ComponentFactoryResolver },
            { type: core.Renderer2 },
            { type: NzPopoverComponent, decorators: [{ type: core.Optional }] },
            { type: core$1.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] }
        ]; };
        NzPopoverDirective.propDecorators = {
            specificTitle: [{ type: core.Input, args: ['nzPopoverTitle',] }],
            specificContent: [{ type: core.Input, args: ['nzPopoverContent',] }],
            directiveNameTitle: [{ type: core.Input, args: ['nz-popover',] }],
            specificTrigger: [{ type: core.Input, args: ['nzPopoverTrigger',] }],
            specificPlacement: [{ type: core.Input, args: ['nzPopoverPlacement',] }],
            showPopoverCloseButton: [{ type: core.Input, args: ['nzShowPopoverCloseButton',] }],
            popoverCloseButtonLabel: [{ type: core.Input, args: ['nzPopoverCloseButtonLabel',] }],
            popoverForceRestoreFocus: [{ type: core.Input, args: ['nzPopoverForceRestoreFocus',] }]
        };
NzPopoverDirective.ɵfac = function NzPopoverDirective_Factory(t) { return new (t || NzPopoverDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ComponentFactoryResolver), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(NzPopoverComponent, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzNoAnimationDirective, 9)); };
NzPopoverDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzPopoverDirective, selectors: [["", "nz-popover", ""]], hostVars: 2, hostBindings: function NzPopoverDirective_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-popover-open", ctx.isTooltipComponentVisible);
    } }, inputs: { specificTitle: ["nzPopoverTitle", "specificTitle"], specificContent: ["nzPopoverContent", "specificContent"], directiveNameTitle: ["nz-popover", "directiveNameTitle"], specificTrigger: ["nzPopoverTrigger", "specificTrigger"], specificPlacement: ["nzPopoverPlacement", "specificPlacement"], showPopoverCloseButton: ["nzShowPopoverCloseButton", "showPopoverCloseButton"], popoverCloseButtonLabel: ["nzPopoverCloseButtonLabel", "popoverCloseButtonLabel"], popoverForceRestoreFocus: ["nzPopoverForceRestoreFocus", "popoverForceRestoreFocus"] }, exportAs: ["nzPopover"], features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzPopoverDirective, [{
        type: core.Directive,
        args: [{
                selector: '[nz-popover]',
                exportAs: 'nzPopover',
                host: {
                    '[class.ant-popover-open]': 'isTooltipComponentVisible'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.ViewContainerRef }, { type: ɵngcc0.ComponentFactoryResolver }, { type: ɵngcc0.Renderer2 }, { type: NzPopoverComponent, decorators: [{
                type: core.Optional
            }] }, { type: ɵngcc1.NzNoAnimationDirective, decorators: [{
                type: core.Host
            }, {
                type: core.Optional
            }] }]; }, { specificTitle: [{
            type: core.Input,
            args: ['nzPopoverTitle']
        }], specificContent: [{
            type: core.Input,
            args: ['nzPopoverContent']
        }], directiveNameTitle: [{
            type: core.Input,
            args: ['nz-popover']
        }], specificTrigger: [{
            type: core.Input,
            args: ['nzPopoverTrigger']
        }], specificPlacement: [{
            type: core.Input,
            args: ['nzPopoverPlacement']
        }], showPopoverCloseButton: [{
            type: core.Input,
            args: ['nzShowPopoverCloseButton']
        }], popoverCloseButtonLabel: [{
            type: core.Input,
            args: ['nzPopoverCloseButtonLabel']
        }], popoverForceRestoreFocus: [{
            type: core.Input,
            args: ['nzPopoverForceRestoreFocus']
        }] }); })();
        return NzPopoverDirective;
    }(tooltip.NzTooltipBaseDirective));
    if (false) {
        /** @type {?} */
        NzPopoverDirective.prototype.specificTitle;
        /** @type {?} */
        NzPopoverDirective.prototype.specificContent;
        /** @type {?} */
        NzPopoverDirective.prototype.directiveNameTitle;
        /** @type {?} */
        NzPopoverDirective.prototype.specificTrigger;
        /** @type {?} */
        NzPopoverDirective.prototype.specificPlacement;
        /** @type {?} */
        NzPopoverDirective.prototype.showPopoverCloseButton;
        /** @type {?} */
        NzPopoverDirective.prototype.popoverCloseButtonLabel;
        /** @type {?} */
        NzPopoverDirective.prototype.popoverForceRestoreFocus;
        /** @type {?} */
        NzPopoverDirective.prototype.componentFactory;
        /** @type {?} */
        NzPopoverDirective.prototype.noAnimation;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzPopoverModule = /** @class */ (function () {
        function NzPopoverModule() {
        }
NzPopoverModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzPopoverModule });
NzPopoverModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzPopoverModule_Factory(t) { return new (t || NzPopoverModule)(); }, imports: [[common.CommonModule, overlay.OverlayModule, core$1.NzAddOnModule, core$1.NzOverlayModule, core$1.NzNoAnimationModule, tooltip.NzToolTipModule, icon.NzIconModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzPopoverModule, { declarations: [NzPopoverDirective,
        NzPopoverComponent], imports: [ɵngcc3.CommonModule, ɵngcc2.OverlayModule, ɵngcc1.NzAddOnModule, ɵngcc1.NzOverlayModule, ɵngcc1.NzNoAnimationModule, ɵngcc5.NzToolTipModule, ɵngcc4.NzIconModule], exports: [NzPopoverDirective,
        NzPopoverComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzPopoverModule, [{
        type: core.NgModule,
        args: [{
                entryComponents: [NzPopoverComponent],
                exports: [NzPopoverDirective, NzPopoverComponent],
                declarations: [NzPopoverDirective, NzPopoverComponent],
                imports: [common.CommonModule, overlay.OverlayModule, core$1.NzAddOnModule, core$1.NzOverlayModule, core$1.NzNoAnimationModule, tooltip.NzToolTipModule, icon.NzIconModule]
            }]
    }], function () { return []; }, null); })();
        return NzPopoverModule;
    }());

    exports.NzPopoverComponent = NzPopoverComponent;
    exports.NzPopoverDirective = NzPopoverDirective;
    exports.NzPopoverModule = NzPopoverModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-zorro-antd-popover.umd.js.map
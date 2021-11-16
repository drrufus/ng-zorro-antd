(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('ng-zorro-antd/core'),require('@angular/common'),require('ng-zorro-antd/icon'),exports, require('@angular/core'), require('ng-zorro-antd/core'), require('@angular/common'), require('ng-zorro-antd/icon')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/collapse', ['@angular/core','ng-zorro-antd/core','@angular/common','ng-zorro-antd/icon','exports', '@angular/core', 'ng-zorro-antd/core', '@angular/common', 'ng-zorro-antd/icon'], factory) :
    (global = global || self, factory(global.ng.core,global.ngZorroAntd.core,global.ng.common,global.ngZorroAntd.icon,(global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].collapse = {}), global.ng.core, global['ng-zorro-antd'].core, global.ng.common, global['ng-zorro-antd'].icon));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,exports, core, core$1, common, icon) { 
var _c0 = ["*"];
var _c1 = ["focusable"];
function NzCollapsePanelComponent_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "a", 10);
    ɵngcc0.ɵɵelement(2, "i", 11);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("nzType", ctx_r4.nzExpandedIcon || "right")("nzRotate", ctx_r4.nzActive ? 90 : 0);
} }
function NzCollapsePanelComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzCollapsePanelComponent_ng_container_6_ng_container_1_Template, 3, 2, "ng-container", 6);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r1.nzExpandedIcon);
} }
function NzCollapsePanelComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r2.nzHeader, " ");
} }
function NzCollapsePanelComponent_div_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r5.nzExtra);
} }
function NzCollapsePanelComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 12);
    ɵngcc0.ɵɵtemplate(1, NzCollapsePanelComponent_div_8_ng_container_1_Template, 2, 1, "ng-container", 6);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r3.nzExtra);
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
    var NZ_CONFIG_COMPONENT_NAME = 'collapse';
    var NzCollapseComponent = /** @class */ (function () {
        function NzCollapseComponent(nzConfigService) {
            this.nzConfigService = nzConfigService;
            this.listOfNzCollapsePanelComponent = [];
        }
        /**
         * @param {?} value
         * @return {?}
         */
        NzCollapseComponent.prototype.addPanel = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.listOfNzCollapsePanelComponent.push(value);
        };
        /**
         * @param {?} value
         * @return {?}
         */
        NzCollapseComponent.prototype.removePanel = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.listOfNzCollapsePanelComponent.splice(this.listOfNzCollapsePanelComponent.indexOf(value), 1);
        };
        /**
         * @param {?} collapse
         * @return {?}
         */
        NzCollapseComponent.prototype.click = /**
         * @param {?} collapse
         * @return {?}
         */
        function (collapse) {
            if (this.nzAccordion && !collapse.nzActive) {
                this.listOfNzCollapsePanelComponent
                    .filter((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return item !== collapse; }))
                    .forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) {
                    if (item.nzActive) {
                        item.nzActive = false;
                        item.nzActiveChange.emit(item.nzActive);
                        item.markForCheck();
                    }
                }));
            }
            collapse.nzActive = !collapse.nzActive;
            collapse.nzActiveChange.emit(collapse.nzActive);
        };
        /** @nocollapse */
        NzCollapseComponent.ctorParameters = function () { return [
            { type: core$1.NzConfigService }
        ]; };
        NzCollapseComponent.propDecorators = {
            nzAccordion: [{ type: core.Input }],
            nzBordered: [{ type: core.Input }]
        };
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, false), core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzCollapseComponent.prototype, "nzAccordion", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, true), core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzCollapseComponent.prototype, "nzBordered", void 0);
NzCollapseComponent.ɵfac = function NzCollapseComponent_Factory(t) { return new (t || NzCollapseComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzConfigService)); };
NzCollapseComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzCollapseComponent, selectors: [["nz-collapse"]], inputs: { nzAccordion: "nzAccordion", nzBordered: "nzBordered" }, exportAs: ["nzCollapse"], ngContentSelectors: _c0, decls: 2, vars: 2, consts: [[1, "ant-collapse"]], template: function NzCollapseComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-collapse-borderless", !ctx.nzBordered);
    } }, styles: ["\n      nz-collapse {\n        display: block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCollapseComponent, [{
        type: core.Component,
        args: [{
                selector: 'nz-collapse',
                exportAs: 'nzCollapse',
                template: "<div class=\"ant-collapse\" [class.ant-collapse-borderless]=\"!nzBordered\">\r\n  <ng-content></ng-content>\r\n</div>",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                styles: ["\n      nz-collapse {\n        display: block;\n      }\n    "]
            }]
    }], function () { return [{ type: ɵngcc1.NzConfigService }]; }, { nzAccordion: [{
            type: core.Input
        }], nzBordered: [{
            type: core.Input
        }] }); })();
        return NzCollapseComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        NzCollapseComponent.prototype.listOfNzCollapsePanelComponent;
        /** @type {?} */
        NzCollapseComponent.prototype.nzAccordion;
        /** @type {?} */
        NzCollapseComponent.prototype.nzBordered;
        /** @type {?} */
        NzCollapseComponent.prototype.nzConfigService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var NZ_CONFIG_COMPONENT_NAME$1 = 'collapsePanel';
    var NzCollapsePanelComponent = /** @class */ (function () {
        function NzCollapsePanelComponent(nzConfigService, cdr, nzCollapseComponent, elementRef, renderer) {
            this.nzConfigService = nzConfigService;
            this.cdr = cdr;
            this.nzCollapseComponent = nzCollapseComponent;
            this.nzActive = false;
            this.nzDisabled = false;
            this.nzHeadingAriaLabel = null;
            this.nzHeadingAriaLevel = 4;
            this.nzRole = 'tab';
            this.nzActiveChange = new core.EventEmitter();
            renderer.addClass(elementRef.nativeElement, 'ant-collapse-item');
        }
        /**
         * @return {?}
         */
        NzCollapsePanelComponent.prototype.clickHeader = /**
         * @return {?}
         */
        function () {
            if (!this.nzDisabled) {
                this.nzCollapseComponent.click(this);
            }
        };
        /**
         * @param {?=} scrollTo
         * @param {?=} scrollOptions
         * @return {?}
         */
        NzCollapsePanelComponent.prototype.focusOnHeader = /**
         * @param {?=} scrollTo
         * @param {?=} scrollOptions
         * @return {?}
         */
        function (scrollTo, scrollOptions) {
            if (scrollTo === void 0) { scrollTo = false; }
            if (scrollOptions === void 0) { scrollOptions = { behavior: 'smooth', block: 'center' }; }
            this._focusableHeader.nativeElement.focus();
            if (scrollTo) {
                this._focusableHeader.nativeElement.scrollIntoView(scrollOptions);
            }
        };
        /**
         * @return {?}
         */
        NzCollapsePanelComponent.prototype.markForCheck = /**
         * @return {?}
         */
        function () {
            this.cdr.markForCheck();
        };
        /**
         * @return {?}
         */
        NzCollapsePanelComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.nzCollapseComponent.addPanel(this);
        };
        /**
         * @return {?}
         */
        NzCollapsePanelComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.nzCollapseComponent.removePanel(this);
        };
        /** @nocollapse */
        NzCollapsePanelComponent.ctorParameters = function () { return [
            { type: core$1.NzConfigService },
            { type: core.ChangeDetectorRef },
            { type: NzCollapseComponent, decorators: [{ type: core.Host }] },
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        NzCollapsePanelComponent.propDecorators = {
            nzActive: [{ type: core.Input }],
            nzDisabled: [{ type: core.Input }],
            nzShowArrow: [{ type: core.Input }],
            nzExtra: [{ type: core.Input }],
            nzHeader: [{ type: core.Input }],
            nzHeadingAriaLabel: [{ type: core.Input }],
            nzHeadingAriaLevel: [{ type: core.Input }],
            nzExpandedIcon: [{ type: core.Input }],
            nzRole: [{ type: core.Input }],
            nzActiveChange: [{ type: core.Output }],
            _focusableHeader: [{ type: core.ViewChild, args: ["focusable", { static: false },] }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzCollapsePanelComponent.prototype, "nzActive", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzCollapsePanelComponent.prototype, "nzDisabled", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME$1, true), core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzCollapsePanelComponent.prototype, "nzShowArrow", void 0);
NzCollapsePanelComponent.ɵfac = function NzCollapsePanelComponent_Factory(t) { return new (t || NzCollapsePanelComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzConfigService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(NzCollapseComponent, 1), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2)); };
NzCollapsePanelComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzCollapsePanelComponent, selectors: [["nz-collapse-panel"]], viewQuery: function NzCollapsePanelComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c1, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._focusableHeader = _t.first);
    } }, hostVars: 6, hostBindings: function NzCollapsePanelComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-collapse-no-arrow", !ctx.nzShowArrow)("ant-collapse-item-active", ctx.nzActive)("ant-collapse-item-disabled", ctx.nzDisabled);
    } }, inputs: { nzActive: "nzActive", nzDisabled: "nzDisabled", nzHeadingAriaLabel: "nzHeadingAriaLabel", nzHeadingAriaLevel: "nzHeadingAriaLevel", nzRole: "nzRole", nzShowArrow: "nzShowArrow", nzExtra: "nzExtra", nzHeader: "nzHeader", nzExpandedIcon: "nzExpandedIcon" }, outputs: { nzActiveChange: "nzActiveChange" }, exportAs: ["nzCollapsePanel"], ngContentSelectors: _c0, decls: 12, vars: 15, consts: [[1, "ant-collapse-header", 2, "display", "flex", "justify-content", "space-between"], ["role", "heading", 2, "position", "absolute", "width", "1px", "height", "1px", "left", "-1000px", "top", "-1000px"], [1, "ant-collapse-title"], [2, "flex", "1", 3, "keyup.enter", "keyup.Space", "click"], ["focusable", ""], [4, "ngIf"], [4, "nzStringTemplateOutlet"], ["class", "ant-collapse-extra", 4, "ngIf"], [1, "ant-collapse-content"], [1, "ant-collapse-content-box", 3, "hidden"], ["aria-hidden", "true", 1, "ant-collapse-arrow-link"], ["nz-icon", "", 1, "ant-collapse-arrow", 3, "nzType", "nzRotate"], [1, "ant-collapse-extra"]], template: function NzCollapsePanelComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "span", 1);
        ɵngcc0.ɵɵtext(2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "div", 2);
        ɵngcc0.ɵɵelementStart(4, "div", 3, 4);
        ɵngcc0.ɵɵlistener("keyup.enter", function NzCollapsePanelComponent_Template_div_keyup_enter_4_listener() { return ctx.clickHeader(); })("keyup.Space", function NzCollapsePanelComponent_Template_div_keyup_Space_4_listener() { return ctx.clickHeader(); })("click", function NzCollapsePanelComponent_Template_div_click_4_listener() { return ctx.clickHeader(); });
        ɵngcc0.ɵɵtemplate(6, NzCollapsePanelComponent_ng_container_6_Template, 2, 1, "ng-container", 5);
        ɵngcc0.ɵɵtemplate(7, NzCollapsePanelComponent_ng_container_7_Template, 2, 1, "ng-container", 6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(8, NzCollapsePanelComponent_div_8_Template, 2, 1, "div", 7);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(9, "div", 8);
        ɵngcc0.ɵɵelementStart(10, "div", 9);
        ɵngcc0.ɵɵprojection(11);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("aria-label", ctx.nzHeadingAriaLabel)("aria-level", ctx.nzHeadingAriaLabel ? ctx.nzHeadingAriaLevel : null);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate(ctx.nzHeader);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("aria-label", ctx.nzHeadingAriaLabel);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("role", ctx.nzRole)("aria-expanded", ctx.nzActive)("tabindex", ctx.nzDisabled ? null : 0)("aria-disabled", ctx.nzDisabled);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzShowArrow);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx.nzHeader);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzExtra);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("ant-collapse-content-active", ctx.nzActive);
        ɵngcc0.ɵɵproperty("@collapseMotion", ctx.nzActive ? "expanded" : "hidden");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("hidden", !ctx.nzActive);
    } }, directives: [ɵngcc2.NgIf, ɵngcc1.NzStringTemplateOutletDirective, ɵngcc3.NzIconDirective], styles: ["\n      nz-collapse-panel {\n        display: block;\n      }\n    "], encapsulation: 2, data: { animation: [core$1.collapseMotion] }, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCollapsePanelComponent, [{
        type: core.Component,
        args: [{
                selector: 'nz-collapse-panel',
                exportAs: 'nzCollapsePanel',
                template: "<div class=\"ant-collapse-header\" style=\"display: flex; justify-content: space-between;\">\r\n  <!--  Invisible heading for the sake of \"pure\" heading for screen reader-->\r\n  <span role=\"heading\" [attr.aria-label]=\"nzHeadingAriaLabel\" [attr.aria-level]=\"nzHeadingAriaLabel ? nzHeadingAriaLevel : null\"\r\n        style=\"position: absolute; width: 1px; height: 1px; left: -1000px; top: -1000px\">{{nzHeader}}</span>\r\n  <div class=\"ant-collapse-title\" [attr.aria-label]=\"nzHeadingAriaLabel\">\r\n    <div [attr.role]=\"nzRole\" [attr.aria-expanded]=\"nzActive\" style=\"flex: 1;\" (keyup.enter)=\"clickHeader()\"\r\n         (keyup.Space)=\"clickHeader()\" (click)=\"clickHeader()\" [attr.tabindex]=\"nzDisabled ? null : 0\"\r\n         [attr.aria-disabled]=\"nzDisabled\" #focusable>\r\n      <ng-container *ngIf=\"nzShowArrow\">\r\n        <ng-container *nzStringTemplateOutlet=\"nzExpandedIcon\">\r\n          <a class=\"ant-collapse-arrow-link\" aria-hidden=\"true\">\r\n            <i nz-icon [nzType]=\"nzExpandedIcon || 'right'\" class=\"ant-collapse-arrow\" [nzRotate]=\"nzActive ? 90 : 0\"></i>\r\n          </a>\r\n        </ng-container>\r\n      </ng-container>\r\n      <ng-container *nzStringTemplateOutlet=\"nzHeader\">\r\n        {{ nzHeader }}\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <div class=\"ant-collapse-extra\" *ngIf=\"nzExtra\">\r\n    <ng-container *nzStringTemplateOutlet=\"nzExtra\">{{ nzExtra }}</ng-container>\r\n  </div>\r\n</div>\r\n<div class=\"ant-collapse-content\" [class.ant-collapse-content-active]=\"nzActive\"\r\n  [@collapseMotion]=\"nzActive ? 'expanded' : 'hidden' \">\r\n  <div class=\"ant-collapse-content-box\" [hidden]=\"!nzActive\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                animations: [core$1.collapseMotion],
                host: {
                    '[class.ant-collapse-no-arrow]': '!nzShowArrow',
                    '[class.ant-collapse-item-active]': 'nzActive',
                    '[class.ant-collapse-item-disabled]': 'nzDisabled'
                },
                styles: ["\n      nz-collapse-panel {\n        display: block;\n      }\n    "]
            }]
    }], function () { return [{ type: ɵngcc1.NzConfigService }, { type: ɵngcc0.ChangeDetectorRef }, { type: NzCollapseComponent, decorators: [{
                type: core.Host
            }] }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }]; }, { nzActive: [{
            type: core.Input
        }], nzDisabled: [{
            type: core.Input
        }], nzHeadingAriaLabel: [{
            type: core.Input
        }], nzHeadingAriaLevel: [{
            type: core.Input
        }], nzRole: [{
            type: core.Input
        }], nzActiveChange: [{
            type: core.Output
        }], nzShowArrow: [{
            type: core.Input
        }], nzExtra: [{
            type: core.Input
        }], nzHeader: [{
            type: core.Input
        }], nzExpandedIcon: [{
            type: core.Input
        }], _focusableHeader: [{
            type: core.ViewChild,
            args: ["focusable", { static: false }]
        }] }); })();
        return NzCollapsePanelComponent;
    }());
    if (false) {
        /** @type {?} */
        NzCollapsePanelComponent.prototype.nzActive;
        /** @type {?} */
        NzCollapsePanelComponent.prototype.nzDisabled;
        /** @type {?} */
        NzCollapsePanelComponent.prototype.nzShowArrow;
        /** @type {?} */
        NzCollapsePanelComponent.prototype.nzExtra;
        /** @type {?} */
        NzCollapsePanelComponent.prototype.nzHeader;
        /** @type {?} */
        NzCollapsePanelComponent.prototype.nzHeadingAriaLabel;
        /** @type {?} */
        NzCollapsePanelComponent.prototype.nzHeadingAriaLevel;
        /** @type {?} */
        NzCollapsePanelComponent.prototype.nzExpandedIcon;
        /** @type {?} */
        NzCollapsePanelComponent.prototype.nzRole;
        /** @type {?} */
        NzCollapsePanelComponent.prototype.nzActiveChange;
        /**
         * @type {?}
         * @private
         */
        NzCollapsePanelComponent.prototype._focusableHeader;
        /** @type {?} */
        NzCollapsePanelComponent.prototype.nzConfigService;
        /**
         * @type {?}
         * @private
         */
        NzCollapsePanelComponent.prototype.cdr;
        /**
         * @type {?}
         * @private
         */
        NzCollapsePanelComponent.prototype.nzCollapseComponent;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzCollapseModule = /** @class */ (function () {
        function NzCollapseModule() {
        }
NzCollapseModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzCollapseModule });
NzCollapseModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzCollapseModule_Factory(t) { return new (t || NzCollapseModule)(); }, imports: [[common.CommonModule, icon.NzIconModule, core$1.NzAddOnModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzCollapseModule, { declarations: [NzCollapsePanelComponent,
        NzCollapseComponent], imports: [ɵngcc2.CommonModule, ɵngcc3.NzIconModule, ɵngcc1.NzAddOnModule], exports: [NzCollapsePanelComponent,
        NzCollapseComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCollapseModule, [{
        type: core.NgModule,
        args: [{
                declarations: [NzCollapsePanelComponent, NzCollapseComponent],
                exports: [NzCollapsePanelComponent, NzCollapseComponent],
                imports: [common.CommonModule, icon.NzIconModule, core$1.NzAddOnModule]
            }]
    }], function () { return []; }, null); })();
        return NzCollapseModule;
    }());

    exports.NzCollapseComponent = NzCollapseComponent;
    exports.NzCollapseModule = NzCollapseModule;
    exports.NzCollapsePanelComponent = NzCollapsePanelComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-zorro-antd-collapse.umd.js.map
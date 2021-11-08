(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('ng-zorro-antd/core'),require('@angular/common'),require('@angular/cdk/overlay'),require('@angular/forms'),exports, require('@angular/cdk/overlay'), require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('ng-zorro-antd/core'), require('@angular/cdk/keycodes'), require('@angular/cdk/portal'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/auto-complete', ['@angular/core','ng-zorro-antd/core','@angular/common','@angular/cdk/overlay','@angular/forms','exports', '@angular/cdk/overlay', '@angular/common', '@angular/core', '@angular/forms', 'ng-zorro-antd/core', '@angular/cdk/keycodes', '@angular/cdk/portal', 'rxjs', 'rxjs/operators'], factory) :
    (global = global || self, factory(global.ng.core,global.ngZorroAntd.core,global.ng.common,global.ng.cdk.overlay,global.ng.forms,(global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd']['auto-complete'] = {}), global.ng.cdk.overlay, global.ng.common, global.ng.core, global.ng.forms, global['ng-zorro-antd'].core, global.ng.cdk.keycodes, global.ng.cdk.portal, global.rxjs, global.rxjs.operators));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,ɵngcc4,exports, overlay, common, core, forms, core$1, keycodes, portal, rxjs, operators) { 
function NzAutocompleteOptgroupComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.nzLabel);
} }
var _c0 = [[["nz-auto-option"]]];
var _c1 = ["nz-auto-option"];
var _c2 = ["*"];
var _c3 = ["panel"];
var _c4 = ["content"];
function NzAutocompleteComponent_ng_template_0_4_ng_template_0_Template(rf, ctx) { }
function NzAutocompleteComponent_ng_template_0_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NzAutocompleteComponent_ng_template_0_4_ng_template_0_Template, 0, 0, "ng-template");
} }
function NzAutocompleteComponent_ng_template_0_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0);
} }
function NzAutocompleteComponent_ng_template_0_ng_template_7_nz_auto_option_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "nz-auto-option", 8);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var option_r9 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("nzValue", option_r9);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(option_r9);
} }
function NzAutocompleteComponent_ng_template_0_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NzAutocompleteComponent_ng_template_0_ng_template_7_nz_auto_option_0_Template, 2, 2, "nz-auto-option", 7);
} if (rf & 2) {
    var ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r6.nzDataSource);
} }
function NzAutocompleteComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
    ɵngcc0.ɵɵelementStart(2, "div", 2);
    ɵngcc0.ɵɵelementStart(3, "ul", 3);
    ɵngcc0.ɵɵtemplate(4, NzAutocompleteComponent_ng_template_0_4_Template, 1, 0, undefined, 4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(5, NzAutocompleteComponent_ng_template_0_ng_template_5_Template, 1, 0, "ng-template", null, 5, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵtemplate(7, NzAutocompleteComponent_ng_template_0_ng_template_7_Template, 1, 1, "ng-template", null, 6, ɵngcc0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    var _r3 = ɵngcc0.ɵɵreference(6);
    var _r5 = ɵngcc0.ɵɵreference(8);
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("ant-select-dropdown-hidden", !ctx_r0.showPanel);
    ɵngcc0.ɵɵproperty("@.disabled", ctx_r0.noAnimation == null ? null : ctx_r0.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r0.noAnimation == null ? null : ctx_r0.noAnimation.nzNoAnimation)("@slideMotion", ctx_r0.dropDownPosition)("ngClass", ctx_r0.nzOverlayClassName)("ngStyle", ctx_r0.nzOverlayStyle);
    ɵngcc0.ɵɵadvance(4);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.nzDataSource ? _r5 : _r3);
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
    var NzAutocompleteOptgroupComponent = /** @class */ (function () {
        function NzAutocompleteOptgroupComponent() {
        }
        /** @nocollapse */
        NzAutocompleteOptgroupComponent.ctorParameters = function () { return []; };
        NzAutocompleteOptgroupComponent.propDecorators = {
            nzLabel: [{ type: core.Input }]
        };
NzAutocompleteOptgroupComponent.ɵfac = function NzAutocompleteOptgroupComponent_Factory(t) { return new (t || NzAutocompleteOptgroupComponent)(); };
NzAutocompleteOptgroupComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzAutocompleteOptgroupComponent, selectors: [["nz-auto-optgroup"]], hostAttrs: ["role", "group", 1, "ant-select-dropdown-menu-item-group"], inputs: { nzLabel: "nzLabel" }, exportAs: ["nzAutoOptgroup"], ngContentSelectors: _c1, decls: 4, vars: 1, consts: [[1, "ant-select-dropdown-menu-item-group-title"], [4, "nzStringTemplateOutlet"], [1, "ant-select-dropdown-menu-item-group-list"]], template: function NzAutocompleteOptgroupComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c0);
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, NzAutocompleteOptgroupComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(2, "ul", 2);
        ɵngcc0.ɵɵprojection(3);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx.nzLabel);
    } }, directives: [ɵngcc1.NzStringTemplateOutletDirective], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzAutocompleteOptgroupComponent, [{
        type: core.Component,
        args: [{
                selector: 'nz-auto-optgroup',
                exportAs: 'nzAutoOptgroup',
                preserveWhitespaces: false,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                template: "<div class=\"ant-select-dropdown-menu-item-group-title\">\r\n  <ng-container *nzStringTemplateOutlet=\"nzLabel\">{{nzLabel}}</ng-container>\r\n</div>\r\n<ul class=\"ant-select-dropdown-menu-item-group-list\">\r\n  <ng-content select=\"nz-auto-option\"></ng-content>\r\n</ul>\r\n",
                host: {
                    role: 'group',
                    class: 'ant-select-dropdown-menu-item-group'
                }
            }]
    }], function () { return []; }, { nzLabel: [{
            type: core.Input
        }] }); })();
        return NzAutocompleteOptgroupComponent;
    }());
    if (false) {
        /** @type {?} */
        NzAutocompleteOptgroupComponent.prototype.nzLabel;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzOptionSelectionChange = /** @class */ (function () {
        function NzOptionSelectionChange(source, isUserInput) {
            if (isUserInput === void 0) { isUserInput = false; }
            this.source = source;
            this.isUserInput = isUserInput;
        }
        return NzOptionSelectionChange;
    }());
    if (false) {
        /** @type {?} */
        NzOptionSelectionChange.prototype.source;
        /** @type {?} */
        NzOptionSelectionChange.prototype.isUserInput;
    }
    var NzAutocompleteOptionComponent = /** @class */ (function () {
        function NzAutocompleteOptionComponent(changeDetectorRef, element) {
            this.changeDetectorRef = changeDetectorRef;
            this.element = element;
            this.nzDisabled = false;
            this.selectionChange = new core.EventEmitter();
            this.active = false;
            this.selected = false;
        }
        /**
         * @param {?=} emit
         * @return {?}
         */
        NzAutocompleteOptionComponent.prototype.select = /**
         * @param {?=} emit
         * @return {?}
         */
        function (emit) {
            if (emit === void 0) { emit = true; }
            this.selected = true;
            this.changeDetectorRef.markForCheck();
            if (emit) {
                this.emitSelectionChangeEvent();
            }
        };
        /**
         * @return {?}
         */
        NzAutocompleteOptionComponent.prototype.deselect = /**
         * @return {?}
         */
        function () {
            this.selected = false;
            this.changeDetectorRef.markForCheck();
            this.emitSelectionChangeEvent();
        };
        /** Git display label */
        /**
         * Git display label
         * @return {?}
         */
        NzAutocompleteOptionComponent.prototype.getLabel = /**
         * Git display label
         * @return {?}
         */
        function () {
            return this.nzLabel || this.nzValue.toString();
        };
        /** Set active (only styles) */
        /**
         * Set active (only styles)
         * @return {?}
         */
        NzAutocompleteOptionComponent.prototype.setActiveStyles = /**
         * Set active (only styles)
         * @return {?}
         */
        function () {
            if (!this.active) {
                this.active = true;
                this.changeDetectorRef.markForCheck();
            }
        };
        /** Unset active (only styles) */
        /**
         * Unset active (only styles)
         * @return {?}
         */
        NzAutocompleteOptionComponent.prototype.setInactiveStyles = /**
         * Unset active (only styles)
         * @return {?}
         */
        function () {
            if (this.active) {
                this.active = false;
                this.changeDetectorRef.markForCheck();
            }
        };
        /**
         * @return {?}
         */
        NzAutocompleteOptionComponent.prototype.scrollIntoViewIfNeeded = /**
         * @return {?}
         */
        function () {
            core$1.scrollIntoView(this.element.nativeElement);
        };
        /**
         * @return {?}
         */
        NzAutocompleteOptionComponent.prototype.selectViaInteraction = /**
         * @return {?}
         */
        function () {
            if (!this.nzDisabled) {
                this.selected = !this.selected;
                if (this.selected) {
                    this.setActiveStyles();
                }
                else {
                    this.setInactiveStyles();
                }
                this.emitSelectionChangeEvent(true);
                this.changeDetectorRef.markForCheck();
            }
        };
        /**
         * @private
         * @param {?=} isUserInput
         * @return {?}
         */
        NzAutocompleteOptionComponent.prototype.emitSelectionChangeEvent = /**
         * @private
         * @param {?=} isUserInput
         * @return {?}
         */
        function (isUserInput) {
            if (isUserInput === void 0) { isUserInput = false; }
            this.selectionChange.emit(new NzOptionSelectionChange(this, isUserInput));
        };
        /** @nocollapse */
        NzAutocompleteOptionComponent.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef },
            { type: core.ElementRef }
        ]; };
        NzAutocompleteOptionComponent.propDecorators = {
            nzValue: [{ type: core.Input }],
            nzLabel: [{ type: core.Input }],
            nzDisabled: [{ type: core.Input }],
            selectionChange: [{ type: core.Output }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzAutocompleteOptionComponent.prototype, "nzDisabled", void 0);
NzAutocompleteOptionComponent.ɵfac = function NzAutocompleteOptionComponent_Factory(t) { return new (t || NzAutocompleteOptionComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NzAutocompleteOptionComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzAutocompleteOptionComponent, selectors: [["nz-auto-option"]], hostAttrs: ["role", "menuitem", 1, "ant-select-dropdown-menu-item"], hostVars: 8, hostBindings: function NzAutocompleteOptionComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function NzAutocompleteOptionComponent_click_HostBindingHandler() { return ctx.selectViaInteraction(); })("mousedown", function NzAutocompleteOptionComponent_mousedown_HostBindingHandler($event) { return $event.preventDefault(); });
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("aria-selected", ctx.selected.toString())("aria-disabled", ctx.nzDisabled.toString());
        ɵngcc0.ɵɵclassProp("ant-select-dropdown-menu-item-selected", ctx.selected)("ant-select-dropdown-menu-item-active", ctx.active)("ant-select-dropdown-menu-item-disabled", ctx.nzDisabled);
    } }, inputs: { nzDisabled: "nzDisabled", nzValue: "nzValue", nzLabel: "nzLabel" }, outputs: { selectionChange: "selectionChange" }, exportAs: ["nzAutoOption"], ngContentSelectors: _c2, decls: 1, vars: 0, template: function NzAutocompleteOptionComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzAutocompleteOptionComponent, [{
        type: core.Component,
        args: [{
                selector: 'nz-auto-option',
                exportAs: 'nzAutoOption',
                preserveWhitespaces: false,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                template: "<ng-content></ng-content>",
                host: {
                    role: 'menuitem',
                    class: 'ant-select-dropdown-menu-item',
                    '[class.ant-select-dropdown-menu-item-selected]': 'selected',
                    '[class.ant-select-dropdown-menu-item-active]': 'active',
                    '[class.ant-select-dropdown-menu-item-disabled]': 'nzDisabled',
                    '[attr.aria-selected]': 'selected.toString()',
                    '[attr.aria-disabled]': 'nzDisabled.toString()',
                    '(click)': 'selectViaInteraction()',
                    '(mousedown)': '$event.preventDefault()'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.ElementRef }]; }, { nzDisabled: [{
            type: core.Input
        }], selectionChange: [{
            type: core.Output
        }], nzValue: [{
            type: core.Input
        }], nzLabel: [{
            type: core.Input
        }] }); })();
        return NzAutocompleteOptionComponent;
    }());
    if (false) {
        /** @type {?} */
        NzAutocompleteOptionComponent.prototype.nzValue;
        /** @type {?} */
        NzAutocompleteOptionComponent.prototype.nzLabel;
        /** @type {?} */
        NzAutocompleteOptionComponent.prototype.nzDisabled;
        /** @type {?} */
        NzAutocompleteOptionComponent.prototype.selectionChange;
        /** @type {?} */
        NzAutocompleteOptionComponent.prototype.active;
        /** @type {?} */
        NzAutocompleteOptionComponent.prototype.selected;
        /**
         * @type {?}
         * @private
         */
        NzAutocompleteOptionComponent.prototype.changeDetectorRef;
        /**
         * @type {?}
         * @private
         */
        NzAutocompleteOptionComponent.prototype.element;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function AutocompleteDataSourceItem() { }
    if (false) {
        /** @type {?} */
        AutocompleteDataSourceItem.prototype.value;
        /** @type {?} */
        AutocompleteDataSourceItem.prototype.label;
    }
    var NzAutocompleteComponent = /** @class */ (function () {
        function NzAutocompleteComponent(changeDetectorRef, ngZone, noAnimation) {
            var _this = this;
            this.changeDetectorRef = changeDetectorRef;
            this.ngZone = ngZone;
            this.noAnimation = noAnimation;
            this.nzOverlayClassName = '';
            this.nzOverlayStyle = {};
            this.nzDefaultActiveFirstOption = true;
            this.nzBackfill = false;
            this.compareWith = (/**
             * @param {?} o1
             * @param {?} o2
             * @return {?}
             */
            function (o1, o2) { return o1 === o2; });
            this.selectionChange = new core.EventEmitter();
            this.showPanel = true;
            this.isOpen = false;
            this.dropDownPosition = 'bottom';
            this.activeItemIndex = -1;
            this.selectionChangeSubscription = rxjs.Subscription.EMPTY;
            this.dataSourceChangeSubscription = rxjs.Subscription.EMPTY;
            /**
             * Options changes listener
             */
            this.optionSelectionChanges = rxjs.defer((/**
             * @return {?}
             */
            function () {
                if (_this.options) {
                    return rxjs.merge.apply(void 0, __spread(_this.options.map((/**
                     * @param {?} option
                     * @return {?}
                     */
                    function (option) { return option.selectionChange; }))));
                }
                return _this.ngZone.onStable.asObservable().pipe(operators.take(1), operators.switchMap((/**
                 * @return {?}
                 */
                function () { return _this.optionSelectionChanges; })));
            }));
        }
        Object.defineProperty(NzAutocompleteComponent.prototype, "options", {
            /**
             * Options accessor, its source may be content or dataSource
             */
            get: /**
             * Options accessor, its source may be content or dataSource
             * @return {?}
             */
            function () {
                // first dataSource
                if (this.nzDataSource) {
                    return this.fromDataSourceOptions;
                }
                else {
                    return this.fromContentOptions;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NzAutocompleteComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
        function () {
            if (!this.nzDataSource) {
                this.optionsInit();
            }
        };
        /**
         * @return {?}
         */
        NzAutocompleteComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            if (this.nzDataSource) {
                this.optionsInit();
            }
        };
        /**
         * @return {?}
         */
        NzAutocompleteComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.dataSourceChangeSubscription.unsubscribe();
            this.selectionChangeSubscription.unsubscribe();
        };
        /**
         * @return {?}
         */
        NzAutocompleteComponent.prototype.setVisibility = /**
         * @return {?}
         */
        function () {
            this.showPanel = !!this.options.length;
            this.changeDetectorRef.markForCheck();
        };
        /**
         * @param {?} index
         * @return {?}
         */
        NzAutocompleteComponent.prototype.setActiveItem = /**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            /** @type {?} */
            var activeItem = this.options.toArray()[index];
            this.activeItemIndex = index;
            if (activeItem && !activeItem.active) {
                this.activeItem = activeItem;
                this.clearSelectedOptions(this.activeItem);
                this.activeItem.setActiveStyles();
                this.changeDetectorRef.markForCheck();
            }
        };
        /**
         * @return {?}
         */
        NzAutocompleteComponent.prototype.setNextItemActive = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var nextIndex = this.activeItemIndex + 1 <= this.options.length - 1 ? this.activeItemIndex + 1 : 0;
            this.setActiveItem(nextIndex);
        };
        /**
         * @return {?}
         */
        NzAutocompleteComponent.prototype.setPreviousItemActive = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var previousIndex = this.activeItemIndex - 1 < 0 ? this.options.length - 1 : this.activeItemIndex - 1;
            this.setActiveItem(previousIndex);
        };
        // tslint:disable-next-line:no-any
        // tslint:disable-next-line:no-any
        /**
         * @param {?} value
         * @return {?}
         */
        NzAutocompleteComponent.prototype.getOptionIndex = 
        // tslint:disable-next-line:no-any
        /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            return (/** @type {?} */ (this.options.reduce((/**
             * @param {?} result
             * @param {?} current
             * @param {?} index
             * @return {?}
             */
            function (result, current, index) {
                return result === -1 ? (_this.compareWith(value, current.nzValue) ? index : -1) : result;
            }), -1)));
        };
        /**
         * @param {?} position
         * @return {?}
         */
        NzAutocompleteComponent.prototype.updatePosition = /**
         * @param {?} position
         * @return {?}
         */
        function (position) {
            this.dropDownPosition = position;
            this.changeDetectorRef.markForCheck();
        };
        /**
         * @private
         * @return {?}
         */
        NzAutocompleteComponent.prototype.optionsInit = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            this.setVisibility();
            this.subscribeOptionChanges();
            /** @type {?} */
            var changes = this.nzDataSource ? this.fromDataSourceOptions.changes : this.fromContentOptions.changes;
            // async
            this.dataSourceChangeSubscription = changes.subscribe((/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                if (!e.dirty && _this.isOpen) {
                    setTimeout((/**
                     * @return {?}
                     */
                    function () { return _this.setVisibility(); }));
                }
                _this.subscribeOptionChanges();
            }));
        };
        /**
         * Clear the status of options
         */
        /**
         * Clear the status of options
         * @param {?=} skip
         * @param {?=} deselect
         * @return {?}
         */
        NzAutocompleteComponent.prototype.clearSelectedOptions = /**
         * Clear the status of options
         * @param {?=} skip
         * @param {?=} deselect
         * @return {?}
         */
        function (skip, deselect) {
            if (deselect === void 0) { deselect = false; }
            this.options.forEach((/**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                if (option !== skip) {
                    if (deselect) {
                        option.deselect();
                    }
                    option.setInactiveStyles();
                }
            }));
        };
        /**
         * @private
         * @return {?}
         */
        NzAutocompleteComponent.prototype.subscribeOptionChanges = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            this.selectionChangeSubscription.unsubscribe();
            this.selectionChangeSubscription = this.optionSelectionChanges
                .pipe(operators.filter((/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return event.isUserInput; })))
                .subscribe((/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                event.source.select();
                event.source.setActiveStyles();
                _this.activeItem = event.source;
                _this.activeItemIndex = _this.getOptionIndex(_this.activeItem.nzValue);
                _this.clearSelectedOptions(event.source, true);
                _this.selectionChange.emit(event.source);
            }));
        };
        /** @nocollapse */
        NzAutocompleteComponent.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef },
            { type: core.NgZone },
            { type: core$1.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] }
        ]; };
        NzAutocompleteComponent.propDecorators = {
            nzWidth: [{ type: core.Input }],
            nzOverlayClassName: [{ type: core.Input }],
            nzOverlayStyle: [{ type: core.Input }],
            nzDefaultActiveFirstOption: [{ type: core.Input }],
            nzBackfill: [{ type: core.Input }],
            compareWith: [{ type: core.Input }],
            nzDataSource: [{ type: core.Input }],
            selectionChange: [{ type: core.Output }],
            fromContentOptions: [{ type: core.ContentChildren, args: [NzAutocompleteOptionComponent, { descendants: true },] }],
            fromDataSourceOptions: [{ type: core.ViewChildren, args: [NzAutocompleteOptionComponent,] }],
            template: [{ type: core.ViewChild, args: [core.TemplateRef, { static: false },] }],
            panel: [{ type: core.ViewChild, args: ['panel', { static: false },] }],
            content: [{ type: core.ViewChild, args: ['content', { static: false },] }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzAutocompleteComponent.prototype, "nzDefaultActiveFirstOption", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzAutocompleteComponent.prototype, "nzBackfill", void 0);
NzAutocompleteComponent.ɵfac = function NzAutocompleteComponent_Factory(t) { return new (t || NzAutocompleteComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzNoAnimationDirective, 9)); };
NzAutocompleteComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzAutocompleteComponent, selectors: [["nz-autocomplete"]], contentQueries: function NzAutocompleteComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzAutocompleteOptionComponent, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.fromContentOptions = _t);
    } }, viewQuery: function NzAutocompleteComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(core.TemplateRef, true);
        ɵngcc0.ɵɵviewQuery(_c3, true);
        ɵngcc0.ɵɵviewQuery(_c4, true);
        ɵngcc0.ɵɵviewQuery(NzAutocompleteOptionComponent, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.template = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.panel = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.content = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.fromDataSourceOptions = _t);
    } }, inputs: { nzOverlayClassName: "nzOverlayClassName", nzOverlayStyle: "nzOverlayStyle", nzDefaultActiveFirstOption: "nzDefaultActiveFirstOption", nzBackfill: "nzBackfill", compareWith: "compareWith", nzWidth: "nzWidth", nzDataSource: "nzDataSource" }, outputs: { selectionChange: "selectionChange" }, exportAs: ["nzAutocomplete"], ngContentSelectors: _c2, decls: 1, vars: 0, consts: [[1, "ant-select-dropdown", "ant-select-dropdown--single", "ant-select-dropdown-placement-bottomLeft", 3, "nzNoAnimation", "ngClass", "ngStyle"], ["panel", ""], [2, "overflow", "auto"], ["role", "menu", "aria-activedescendant", "", 1, "ant-select-dropdown-menu", "ant-select-dropdown-menu-root", "ant-select-dropdown-menu-vertical"], [4, "ngTemplateOutlet"], ["contentTemplate", ""], ["optionsTemplate", ""], [3, "nzValue", 4, "ngFor", "ngForOf"], [3, "nzValue"]], template: function NzAutocompleteComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, NzAutocompleteComponent_ng_template_0_Template, 9, 8, "ng-template");
    } }, directives: [ɵngcc1.NzNoAnimationDirective, ɵngcc2.NgClass, ɵngcc2.NgStyle, ɵngcc2.NgTemplateOutlet, ɵngcc2.NgForOf, NzAutocompleteOptionComponent], styles: ["\n      .ant-select-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "], encapsulation: 2, data: { animation: [core$1.slideMotion] }, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzAutocompleteComponent, [{
        type: core.Component,
        args: [{
                selector: 'nz-autocomplete',
                exportAs: 'nzAutocomplete',
                preserveWhitespaces: false,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                template: "<ng-template>\r\n  <div class=\"ant-select-dropdown ant-select-dropdown--single ant-select-dropdown-placement-bottomLeft\"\r\n    #panel\r\n    [@.disabled]=\"noAnimation?.nzNoAnimation\"\r\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n    [@slideMotion]=\"dropDownPosition\"\r\n    [class.ant-select-dropdown-hidden]=\"!showPanel\"\r\n    [ngClass]=\"nzOverlayClassName\"\r\n    [ngStyle]=\"nzOverlayStyle\">\r\n    <div style=\"overflow: auto;\">\r\n      <ul class=\"ant-select-dropdown-menu  ant-select-dropdown-menu-root ant-select-dropdown-menu-vertical\"\r\n        role=\"menu\"\r\n        aria-activedescendant>\r\n        <ng-template *ngTemplateOutlet=\"nzDataSource ? optionsTemplate : contentTemplate\"></ng-template>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <ng-template #contentTemplate>\r\n    <ng-content></ng-content>\r\n  </ng-template>\r\n  <ng-template #optionsTemplate>\r\n    <nz-auto-option *ngFor=\"let option of nzDataSource\" [nzValue]=\"option\">{{option}}</nz-auto-option>\r\n  </ng-template>\r\n</ng-template>",
                animations: [core$1.slideMotion],
                styles: ["\n      .ant-select-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.NgZone }, { type: ɵngcc1.NzNoAnimationDirective, decorators: [{
                type: core.Host
            }, {
                type: core.Optional
            }] }]; }, { nzOverlayClassName: [{
            type: core.Input
        }], nzOverlayStyle: [{
            type: core.Input
        }], nzDefaultActiveFirstOption: [{
            type: core.Input
        }], nzBackfill: [{
            type: core.Input
        }], compareWith: [{
            type: core.Input
        }], selectionChange: [{
            type: core.Output
        }], nzWidth: [{
            type: core.Input
        }], nzDataSource: [{
            type: core.Input
        }], fromContentOptions: [{
            type: core.ContentChildren,
            args: [NzAutocompleteOptionComponent, { descendants: true }]
        }], fromDataSourceOptions: [{
            type: core.ViewChildren,
            args: [NzAutocompleteOptionComponent]
        }], template: [{
            type: core.ViewChild,
            args: [core.TemplateRef, { static: false }]
        }], panel: [{
            type: core.ViewChild,
            args: ['panel', { static: false }]
        }], content: [{
            type: core.ViewChild,
            args: ['content', { static: false }]
        }] }); })();
        return NzAutocompleteComponent;
    }());
    if (false) {
        /** @type {?} */
        NzAutocompleteComponent.prototype.nzWidth;
        /** @type {?} */
        NzAutocompleteComponent.prototype.nzOverlayClassName;
        /** @type {?} */
        NzAutocompleteComponent.prototype.nzOverlayStyle;
        /** @type {?} */
        NzAutocompleteComponent.prototype.nzDefaultActiveFirstOption;
        /** @type {?} */
        NzAutocompleteComponent.prototype.nzBackfill;
        /** @type {?} */
        NzAutocompleteComponent.prototype.compareWith;
        /** @type {?} */
        NzAutocompleteComponent.prototype.nzDataSource;
        /** @type {?} */
        NzAutocompleteComponent.prototype.selectionChange;
        /** @type {?} */
        NzAutocompleteComponent.prototype.showPanel;
        /** @type {?} */
        NzAutocompleteComponent.prototype.isOpen;
        /** @type {?} */
        NzAutocompleteComponent.prototype.activeItem;
        /** @type {?} */
        NzAutocompleteComponent.prototype.dropDownPosition;
        /**
         * Provided by content
         * @type {?}
         */
        NzAutocompleteComponent.prototype.fromContentOptions;
        /**
         * Provided by dataSource
         * @type {?}
         */
        NzAutocompleteComponent.prototype.fromDataSourceOptions;
        /**
         * cdk-overlay
         * @type {?}
         */
        NzAutocompleteComponent.prototype.template;
        /** @type {?} */
        NzAutocompleteComponent.prototype.panel;
        /** @type {?} */
        NzAutocompleteComponent.prototype.content;
        /**
         * @type {?}
         * @private
         */
        NzAutocompleteComponent.prototype.activeItemIndex;
        /**
         * @type {?}
         * @private
         */
        NzAutocompleteComponent.prototype.selectionChangeSubscription;
        /**
         * @type {?}
         * @private
         */
        NzAutocompleteComponent.prototype.dataSourceChangeSubscription;
        /**
         * Options changes listener
         * @type {?}
         */
        NzAutocompleteComponent.prototype.optionSelectionChanges;
        /**
         * @type {?}
         * @private
         */
        NzAutocompleteComponent.prototype.changeDetectorRef;
        /**
         * @type {?}
         * @private
         */
        NzAutocompleteComponent.prototype.ngZone;
        /** @type {?} */
        NzAutocompleteComponent.prototype.noAnimation;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var NZ_AUTOCOMPLETE_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef((/**
         * @return {?}
         */
        function () { return NzAutocompleteTriggerDirective; })),
        multi: true
    };
    /**
     * @return {?}
     */
    function getNzAutocompleteMissingPanelError() {
        return Error('Attempting to open an undefined instance of `nz-autocomplete`. ' +
            'Make sure that the id passed to the `nzAutocomplete` is correct and that ' +
            "you're attempting to open it after the ngAfterContentInit hook.");
    }
    var NzAutocompleteTriggerDirective = /** @class */ (function () {
        function NzAutocompleteTriggerDirective(elementRef, overlay, viewContainerRef, ngZone, document) {
            this.elementRef = elementRef;
            this.overlay = overlay;
            this.viewContainerRef = viewContainerRef;
            this.ngZone = ngZone;
            this.document = document;
            // tslint:disable-next-line:no-any
            this._onChange = (/**
             * @return {?}
             */
            function () { });
            this._onTouched = (/**
             * @return {?}
             */
            function () { });
            this.panelOpen = false;
        }
        Object.defineProperty(NzAutocompleteTriggerDirective.prototype, "activeOption", {
            /** Current active option */
            get: /**
             * Current active option
             * @return {?}
             */
            function () {
                if (this.nzAutocomplete && this.nzAutocomplete.options.length) {
                    return this.nzAutocomplete.activeItem;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NzAutocompleteTriggerDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.destroyPanel();
        };
        // tslint:disable-next-line:no-any
        // tslint:disable-next-line:no-any
        /**
         * @param {?} value
         * @return {?}
         */
        NzAutocompleteTriggerDirective.prototype.writeValue = 
        // tslint:disable-next-line:no-any
        /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.setTriggerValue(value);
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        NzAutocompleteTriggerDirective.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this._onChange = fn;
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        NzAutocompleteTriggerDirective.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this._onTouched = fn;
        };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        NzAutocompleteTriggerDirective.prototype.setDisabledState = /**
         * @param {?} isDisabled
         * @return {?}
         */
        function (isDisabled) {
            /** @type {?} */
            var element = this.elementRef.nativeElement;
            element.disabled = isDisabled;
            this.closePanel();
        };
        /**
         * @return {?}
         */
        NzAutocompleteTriggerDirective.prototype.openPanel = /**
         * @return {?}
         */
        function () {
            this.previousValue = this.elementRef.nativeElement.value;
            this.attachOverlay();
            this.updateStatus();
        };
        /**
         * @return {?}
         */
        NzAutocompleteTriggerDirective.prototype.closePanel = /**
         * @return {?}
         */
        function () {
            if (this.panelOpen) {
                this.nzAutocomplete.isOpen = this.panelOpen = false;
                if (this.overlayRef && this.overlayRef.hasAttached()) {
                    this.selectionChangeSubscription.unsubscribe();
                    this.overlayBackdropClickSubscription.unsubscribe();
                    this.overlayPositionChangeSubscription.unsubscribe();
                    this.optionsChangeSubscription.unsubscribe();
                    this.overlayRef.detach();
                    this.overlayRef = null;
                    this.portal = null;
                }
            }
        };
        /**
         * @param {?} event
         * @return {?}
         */
        NzAutocompleteTriggerDirective.prototype.handleKeydown = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var keyCode = event.keyCode;
            /** @type {?} */
            var isArrowKey = keyCode === keycodes.UP_ARROW || keyCode === keycodes.DOWN_ARROW;
            if (keyCode === keycodes.ESCAPE) {
                event.preventDefault();
            }
            if (this.panelOpen && (keyCode === keycodes.ESCAPE || keyCode === keycodes.TAB)) {
                // Reset value when tab / ESC close
                if (this.activeOption && this.activeOption.getLabel() !== this.previousValue) {
                    this.setTriggerValue(this.previousValue);
                }
                this.closePanel();
            }
            else if (this.panelOpen && keyCode === keycodes.ENTER) {
                if (this.nzAutocomplete.showPanel && this.activeOption) {
                    event.preventDefault();
                    this.activeOption.selectViaInteraction();
                }
            }
            else if (this.panelOpen && isArrowKey && this.nzAutocomplete.showPanel) {
                event.stopPropagation();
                event.preventDefault();
                if (keyCode === keycodes.UP_ARROW) {
                    this.nzAutocomplete.setPreviousItemActive();
                }
                else {
                    this.nzAutocomplete.setNextItemActive();
                }
                if (this.activeOption) {
                    this.activeOption.scrollIntoViewIfNeeded();
                }
                this.doBackfill();
            }
        };
        /**
         * @param {?} event
         * @return {?}
         */
        NzAutocompleteTriggerDirective.prototype.handleInput = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var target = (/** @type {?} */ (event.target));
            /** @type {?} */
            var document = (/** @type {?} */ (this.document));
            /** @type {?} */
            var value = target.value;
            if (target.type === 'number') {
                value = value === '' ? null : parseFloat(value);
            }
            if (this.previousValue !== value) {
                this.previousValue = value;
                this._onChange(value);
                if (this.canOpen() && document.activeElement === event.target) {
                    this.openPanel();
                }
            }
        };
        /**
         * @return {?}
         */
        NzAutocompleteTriggerDirective.prototype.handleFocus = /**
         * @return {?}
         */
        function () {
            if (this.canOpen()) {
                this.openPanel();
            }
        };
        /**
         * @return {?}
         */
        NzAutocompleteTriggerDirective.prototype.handleBlur = /**
         * @return {?}
         */
        function () {
            this.closePanel();
            this._onTouched();
        };
        /**
         * Subscription data source changes event
         */
        /**
         * Subscription data source changes event
         * @private
         * @return {?}
         */
        NzAutocompleteTriggerDirective.prototype.subscribeOptionsChange = /**
         * Subscription data source changes event
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var firstStable = this.ngZone.onStable.asObservable().pipe(operators.take(1));
            /** @type {?} */
            var optionChanges = this.nzAutocomplete.options.changes.pipe(operators.tap((/**
             * @return {?}
             */
            function () { return _this.positionStrategy.reapplyLastPosition(); })), operators.delay(0));
            return rxjs.merge(firstStable, optionChanges).subscribe((/**
             * @return {?}
             */
            function () {
                _this.resetActiveItem();
                if (_this.panelOpen) {
                    (/** @type {?} */ (_this.overlayRef)).updatePosition();
                }
            }));
        };
        /**
         * Subscription option changes event and set the value
         */
        /**
         * Subscription option changes event and set the value
         * @private
         * @return {?}
         */
        NzAutocompleteTriggerDirective.prototype.subscribeSelectionChange = /**
         * Subscription option changes event and set the value
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            return this.nzAutocomplete.selectionChange.subscribe((/**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                _this.setValueAndClose(option);
            }));
        };
        /**
         * Subscription external click and close panel
         */
        /**
         * Subscription external click and close panel
         * @private
         * @return {?}
         */
        NzAutocompleteTriggerDirective.prototype.subscribeOverlayBackdropClick = /**
         * Subscription external click and close panel
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            return rxjs.merge(rxjs.fromEvent(this.document, 'click'), rxjs.fromEvent(this.document, 'touchend')).subscribe((/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                /** @type {?} */
                var clickTarget = (/** @type {?} */ (event.target));
                // Make sure is not self
                if (clickTarget !== _this.elementRef.nativeElement &&
                    !(/** @type {?} */ (_this.overlayRef)).overlayElement.contains(clickTarget) &&
                    _this.panelOpen) {
                    _this.closePanel();
                }
            }));
        };
        /**
         * Subscription overlay position changes and reset dropdown position
         */
        /**
         * Subscription overlay position changes and reset dropdown position
         * @private
         * @return {?}
         */
        NzAutocompleteTriggerDirective.prototype.subscribeOverlayPositionChange = /**
         * Subscription overlay position changes and reset dropdown position
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            return this.positionStrategy.positionChanges
                .pipe(operators.map((/**
             * @param {?} position
             * @return {?}
             */
            function (position) { return position.connectionPair.originY; })), operators.distinct(), operators.delay(0))
                .subscribe((/**
             * @param {?} position
             * @return {?}
             */
            function (position) {
                _this.nzAutocomplete.updatePosition(position);
            }));
        };
        /**
         * @private
         * @return {?}
         */
        NzAutocompleteTriggerDirective.prototype.attachOverlay = /**
         * @private
         * @return {?}
         */
        function () {
            if (!this.nzAutocomplete) {
                throw getNzAutocompleteMissingPanelError();
            }
            if (!this.portal) {
                this.portal = new portal.TemplatePortal(this.nzAutocomplete.template, this.viewContainerRef);
            }
            if (!this.overlayRef) {
                this.overlayRef = this.overlay.create(this.getOverlayConfig());
            }
            if (this.overlayRef && !this.overlayRef.hasAttached()) {
                this.overlayRef.attach(this.portal);
                this.overlayPositionChangeSubscription = this.subscribeOverlayPositionChange();
                this.selectionChangeSubscription = this.subscribeSelectionChange();
                this.overlayBackdropClickSubscription = this.subscribeOverlayBackdropClick();
                this.optionsChangeSubscription = this.subscribeOptionsChange();
            }
            this.nzAutocomplete.isOpen = this.panelOpen = true;
        };
        /**
         * @private
         * @return {?}
         */
        NzAutocompleteTriggerDirective.prototype.updateStatus = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.overlayRef) {
                this.overlayRef.updateSize({ width: this.nzAutocomplete.nzWidth || this.getHostWidth() });
            }
            this.nzAutocomplete.setVisibility();
            this.resetActiveItem();
            if (this.activeOption) {
                this.activeOption.scrollIntoViewIfNeeded();
            }
        };
        /**
         * @private
         * @return {?}
         */
        NzAutocompleteTriggerDirective.prototype.destroyPanel = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.overlayRef) {
                this.closePanel();
            }
        };
        /**
         * @private
         * @return {?}
         */
        NzAutocompleteTriggerDirective.prototype.getOverlayConfig = /**
         * @private
         * @return {?}
         */
        function () {
            return new overlay.OverlayConfig({
                positionStrategy: this.getOverlayPosition(),
                scrollStrategy: this.overlay.scrollStrategies.reposition(),
                // default host element width
                width: this.nzAutocomplete.nzWidth || this.getHostWidth()
            });
        };
        /**
         * @private
         * @return {?}
         */
        NzAutocompleteTriggerDirective.prototype.getConnectedElement = /**
         * @private
         * @return {?}
         */
        function () {
            return this.elementRef;
        };
        /**
         * @private
         * @return {?}
         */
        NzAutocompleteTriggerDirective.prototype.getHostWidth = /**
         * @private
         * @return {?}
         */
        function () {
            return this.getConnectedElement().nativeElement.getBoundingClientRect().width;
        };
        /**
         * @private
         * @return {?}
         */
        NzAutocompleteTriggerDirective.prototype.getOverlayPosition = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var positions = [
                new overlay.ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
                new overlay.ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' })
            ];
            this.positionStrategy = this.overlay
                .position()
                .flexibleConnectedTo(this.getConnectedElement())
                .withFlexibleDimensions(false)
                .withPush(false)
                .withPositions(positions);
            return this.positionStrategy;
        };
        /**
         * @private
         * @return {?}
         */
        NzAutocompleteTriggerDirective.prototype.resetActiveItem = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var index = this.nzAutocomplete.getOptionIndex(this.previousValue);
            this.nzAutocomplete.clearSelectedOptions(null, true);
            if (index !== -1) {
                this.nzAutocomplete.setActiveItem(index);
                this.nzAutocomplete.activeItem.select(false);
            }
            else {
                this.nzAutocomplete.setActiveItem(this.nzAutocomplete.nzDefaultActiveFirstOption ? 0 : -1);
            }
        };
        /**
         * @private
         * @param {?} option
         * @return {?}
         */
        NzAutocompleteTriggerDirective.prototype.setValueAndClose = /**
         * @private
         * @param {?} option
         * @return {?}
         */
        function (option) {
            /** @type {?} */
            var value = option.nzValue;
            this.setTriggerValue(option.getLabel());
            this._onChange(value);
            this.elementRef.nativeElement.focus();
            this.closePanel();
        };
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        NzAutocompleteTriggerDirective.prototype.setTriggerValue = /**
         * @private
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.elementRef.nativeElement.value = value || '';
            if (!this.nzAutocomplete.nzBackfill) {
                this.previousValue = value;
            }
        };
        /**
         * @private
         * @return {?}
         */
        NzAutocompleteTriggerDirective.prototype.doBackfill = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.nzAutocomplete.nzBackfill && this.nzAutocomplete.activeItem) {
                this.setTriggerValue(this.nzAutocomplete.activeItem.getLabel());
            }
        };
        /**
         * @private
         * @return {?}
         */
        NzAutocompleteTriggerDirective.prototype.canOpen = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var element = this.elementRef.nativeElement;
            return !element.readOnly && !element.disabled;
        };
        /** @nocollapse */
        NzAutocompleteTriggerDirective.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: overlay.Overlay },
            { type: core.ViewContainerRef },
            { type: core.NgZone },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [common.DOCUMENT,] }] }
        ]; };
        NzAutocompleteTriggerDirective.propDecorators = {
            nzAutocomplete: [{ type: core.Input }]
        };
NzAutocompleteTriggerDirective.ɵfac = function NzAutocompleteTriggerDirective_Factory(t) { return new (t || NzAutocompleteTriggerDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.Overlay), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(common.DOCUMENT, 8)); };
NzAutocompleteTriggerDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzAutocompleteTriggerDirective, selectors: [["input", "nzAutocomplete", ""], ["textarea", "nzAutocomplete", ""]], hostAttrs: ["autocomplete", "off", "aria-autocomplete", "list"], hostBindings: function NzAutocompleteTriggerDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("focusin", function NzAutocompleteTriggerDirective_focusin_HostBindingHandler() { return ctx.handleFocus(); })("blur", function NzAutocompleteTriggerDirective_blur_HostBindingHandler() { return ctx.handleBlur(); })("input", function NzAutocompleteTriggerDirective_input_HostBindingHandler($event) { return ctx.handleInput($event); })("keydown", function NzAutocompleteTriggerDirective_keydown_HostBindingHandler($event) { return ctx.handleKeydown($event); });
    } }, inputs: { nzAutocomplete: "nzAutocomplete" }, exportAs: ["nzAutocompleteTrigger"], features: [ɵngcc0.ɵɵProvidersFeature([NZ_AUTOCOMPLETE_VALUE_ACCESSOR])] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzAutocompleteTriggerDirective, [{
        type: core.Directive,
        args: [{
                selector: "input[nzAutocomplete], textarea[nzAutocomplete]",
                exportAs: 'nzAutocompleteTrigger',
                providers: [NZ_AUTOCOMPLETE_VALUE_ACCESSOR],
                host: {
                    autocomplete: 'off',
                    'aria-autocomplete': 'list',
                    '(focusin)': 'handleFocus()',
                    '(blur)': 'handleBlur()',
                    '(input)': 'handleInput($event)',
                    '(keydown)': 'handleKeydown($event)'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc3.Overlay }, { type: ɵngcc0.ViewContainerRef }, { type: ɵngcc0.NgZone }, { type: undefined, decorators: [{
                type: core.Optional
            }, {
                type: core.Inject,
                args: [common.DOCUMENT]
            }] }]; }, { nzAutocomplete: [{
            type: core.Input
        }] }); })();
        return NzAutocompleteTriggerDirective;
    }());
    if (false) {
        /**
         * Bind nzAutocomplete component
         * @type {?}
         */
        NzAutocompleteTriggerDirective.prototype.nzAutocomplete;
        /** @type {?} */
        NzAutocompleteTriggerDirective.prototype._onChange;
        /** @type {?} */
        NzAutocompleteTriggerDirective.prototype._onTouched;
        /** @type {?} */
        NzAutocompleteTriggerDirective.prototype.panelOpen;
        /**
         * @type {?}
         * @private
         */
        NzAutocompleteTriggerDirective.prototype.overlayRef;
        /**
         * @type {?}
         * @private
         */
        NzAutocompleteTriggerDirective.prototype.portal;
        /**
         * @type {?}
         * @private
         */
        NzAutocompleteTriggerDirective.prototype.positionStrategy;
        /**
         * @type {?}
         * @private
         */
        NzAutocompleteTriggerDirective.prototype.previousValue;
        /**
         * @type {?}
         * @private
         */
        NzAutocompleteTriggerDirective.prototype.selectionChangeSubscription;
        /**
         * @type {?}
         * @private
         */
        NzAutocompleteTriggerDirective.prototype.optionsChangeSubscription;
        /**
         * @type {?}
         * @private
         */
        NzAutocompleteTriggerDirective.prototype.overlayBackdropClickSubscription;
        /**
         * @type {?}
         * @private
         */
        NzAutocompleteTriggerDirective.prototype.overlayPositionChangeSubscription;
        /**
         * @type {?}
         * @private
         */
        NzAutocompleteTriggerDirective.prototype.elementRef;
        /**
         * @type {?}
         * @private
         */
        NzAutocompleteTriggerDirective.prototype.overlay;
        /**
         * @type {?}
         * @private
         */
        NzAutocompleteTriggerDirective.prototype.viewContainerRef;
        /**
         * @type {?}
         * @private
         */
        NzAutocompleteTriggerDirective.prototype.ngZone;
        /**
         * @type {?}
         * @private
         */
        NzAutocompleteTriggerDirective.prototype.document;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzAutocompleteModule = /** @class */ (function () {
        function NzAutocompleteModule() {
        }
NzAutocompleteModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzAutocompleteModule });
NzAutocompleteModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzAutocompleteModule_Factory(t) { return new (t || NzAutocompleteModule)(); }, imports: [[common.CommonModule, overlay.OverlayModule, forms.FormsModule, core$1.NzAddOnModule, core$1.NzNoAnimationModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzAutocompleteModule, { declarations: [NzAutocompleteComponent,
        NzAutocompleteOptionComponent,
        NzAutocompleteTriggerDirective,
        NzAutocompleteOptgroupComponent], imports: [ɵngcc2.CommonModule, ɵngcc3.OverlayModule, ɵngcc4.FormsModule, ɵngcc1.NzAddOnModule, ɵngcc1.NzNoAnimationModule], exports: [NzAutocompleteComponent,
        NzAutocompleteOptionComponent,
        NzAutocompleteTriggerDirective,
        NzAutocompleteOptgroupComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzAutocompleteModule, [{
        type: core.NgModule,
        args: [{
                declarations: [
                    NzAutocompleteComponent,
                    NzAutocompleteOptionComponent,
                    NzAutocompleteTriggerDirective,
                    NzAutocompleteOptgroupComponent
                ],
                exports: [
                    NzAutocompleteComponent,
                    NzAutocompleteOptionComponent,
                    NzAutocompleteTriggerDirective,
                    NzAutocompleteOptgroupComponent
                ],
                imports: [common.CommonModule, overlay.OverlayModule, forms.FormsModule, core$1.NzAddOnModule, core$1.NzNoAnimationModule]
            }]
    }], function () { return []; }, null); })();
        return NzAutocompleteModule;
    }());

    exports.NZ_AUTOCOMPLETE_VALUE_ACCESSOR = NZ_AUTOCOMPLETE_VALUE_ACCESSOR;
    exports.NzAutocompleteComponent = NzAutocompleteComponent;
    exports.NzAutocompleteModule = NzAutocompleteModule;
    exports.NzAutocompleteOptgroupComponent = NzAutocompleteOptgroupComponent;
    exports.NzAutocompleteOptionComponent = NzAutocompleteOptionComponent;
    exports.NzAutocompleteTriggerDirective = NzAutocompleteTriggerDirective;
    exports.NzOptionSelectionChange = NzOptionSelectionChange;
    exports.getNzAutocompleteMissingPanelError = getNzAutocompleteMissingPanelError;

    Object.defineProperty(exports, '__esModule', { value: true });

})));


//# sourceMappingURL=ng-zorro-antd-auto-complete.umd.js.map
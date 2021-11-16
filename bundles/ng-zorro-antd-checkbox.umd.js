(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/cdk/a11y'),require('@angular/forms'),require('@angular/cdk/observers'),require('@angular/common'),exports, require('@angular/cdk/a11y'), require('@angular/core'), require('@angular/forms'), require('ng-zorro-antd/core'), require('@angular/cdk/observers'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/checkbox', ['@angular/core','@angular/cdk/a11y','@angular/forms','@angular/cdk/observers','@angular/common','exports', '@angular/cdk/a11y', '@angular/core', '@angular/forms', 'ng-zorro-antd/core', '@angular/cdk/observers', '@angular/common'], factory) :
    (global = global || self, factory(global.ng.core,global.ng.cdk.a11y,global.ng.forms,global.ng.cdk.observers,global.ng.common,(global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].checkbox = {}), global.ng.cdk.a11y, global.ng.core, global.ng.forms, global['ng-zorro-antd'].core, global.ng.cdk.observers, global.ng.common));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,ɵngcc4,exports, a11y, core, forms, core$1, observers, common) { 
var _c0 = ["*"];
var _c1 = ["inputElement"];
var _c2 = ["contentElement"];
var _c3 = ["nz-checkbox", ""];
function NzCheckboxGroupComponent_label_0_Template(rf, ctx) { if (rf & 1) {
    var _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "label", 1);
    ɵngcc0.ɵɵlistener("nzCheckedChange", function NzCheckboxGroupComponent_label_0_Template_label_nzCheckedChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); var option_r1 = ctx.$implicit; return option_r1.checked = $event; })("nzCheckedChange", function NzCheckboxGroupComponent_label_0_Template_label_nzCheckedChange_0_listener() { ɵngcc0.ɵɵrestoreView(_r3); var ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.onOptionChange(); });
    ɵngcc0.ɵɵelementStart(1, "span");
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var option_r1 = ctx.$implicit;
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("nzDisabled", option_r1.disabled || ctx_r0.nzDisabled)("nzChecked", option_r1.checked);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(option_r1.label);
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
    var NzCheckboxWrapperComponent = /** @class */ (function () {
        function NzCheckboxWrapperComponent(renderer, elementRef) {
            this.nzOnChange = new core.EventEmitter();
            this.checkboxList = [];
            renderer.addClass(elementRef.nativeElement, 'ant-checkbox-group');
        }
        /**
         * @param {?} value
         * @return {?}
         */
        NzCheckboxWrapperComponent.prototype.addCheckbox = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.checkboxList.push(value);
        };
        /**
         * @param {?} value
         * @return {?}
         */
        NzCheckboxWrapperComponent.prototype.removeCheckbox = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.checkboxList.splice(this.checkboxList.indexOf(value), 1);
        };
        /**
         * @return {?}
         */
        NzCheckboxWrapperComponent.prototype.outputValue = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var checkedList = this.checkboxList.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.nzChecked; }));
            return checkedList.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.nzValue; }));
        };
        /**
         * @return {?}
         */
        NzCheckboxWrapperComponent.prototype.onChange = /**
         * @return {?}
         */
        function () {
            this.nzOnChange.emit(this.outputValue());
        };
        /** @nocollapse */
        NzCheckboxWrapperComponent.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: core.ElementRef }
        ]; };
        NzCheckboxWrapperComponent.propDecorators = {
            nzOnChange: [{ type: core.Output }]
        };
NzCheckboxWrapperComponent.ɵfac = function NzCheckboxWrapperComponent_Factory(t) { return new (t || NzCheckboxWrapperComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NzCheckboxWrapperComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzCheckboxWrapperComponent, selectors: [["nz-checkbox-wrapper"]], outputs: { nzOnChange: "nzOnChange" }, exportAs: ["nzCheckboxWrapper"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzCheckboxWrapperComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCheckboxWrapperComponent, [{
        type: core.Component,
        args: [{
                selector: 'nz-checkbox-wrapper',
                exportAs: 'nzCheckboxWrapper',
                preserveWhitespaces: false,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                template: "<ng-content></ng-content>"
            }]
    }], function () { return [{ type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ElementRef }]; }, { nzOnChange: [{
            type: core.Output
        }] }); })();
        return NzCheckboxWrapperComponent;
    }());
    if (false) {
        /** @type {?} */
        NzCheckboxWrapperComponent.prototype.nzOnChange;
        /**
         * @type {?}
         * @private
         */
        NzCheckboxWrapperComponent.prototype.checkboxList;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzCheckboxComponent = /** @class */ (function () {
        function NzCheckboxComponent(elementRef, renderer, nzCheckboxWrapperComponent, cdr, focusMonitor) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.nzCheckboxWrapperComponent = nzCheckboxWrapperComponent;
            this.cdr = cdr;
            this.focusMonitor = focusMonitor;
            // tslint:disable-next-line:no-any
            this.onChange = (/**
             * @return {?}
             */
            function () { return null; });
            // tslint:disable-next-line:no-any
            this.onTouched = (/**
             * @return {?}
             */
            function () { return null; });
            this.nzCheckedChange = new core.EventEmitter();
            this.nzAutoFocus = false;
            this.nzDisabled = false;
            this.nzIndeterminate = false;
            this.nzChecked = false;
            this.nzAriaLabel = null;
            this.nzLabelledById = null;
            renderer.addClass(elementRef.nativeElement, 'ant-checkbox-wrapper');
        }
        /**
         * @param {?} e
         * @return {?}
         */
        NzCheckboxComponent.prototype.hostClick = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            e.preventDefault();
            this.focus();
            this.innerCheckedChange(!this.nzChecked);
        };
        /**
         * @param {?} checked
         * @return {?}
         */
        NzCheckboxComponent.prototype.innerCheckedChange = /**
         * @param {?} checked
         * @return {?}
         */
        function (checked) {
            if (!this.nzDisabled) {
                this.nzChecked = checked;
                this.onChange(this.nzChecked);
                this.nzCheckedChange.emit(this.nzChecked);
                if (this.nzCheckboxWrapperComponent) {
                    this.nzCheckboxWrapperComponent.onChange();
                }
            }
        };
        /**
         * @return {?}
         */
        NzCheckboxComponent.prototype.updateAutoFocus = /**
         * @return {?}
         */
        function () {
            if (this.inputElement && this.nzAutoFocus) {
                this.renderer.setAttribute(this.inputElement.nativeElement, 'autofocus', 'autofocus');
            }
            else {
                this.renderer.removeAttribute(this.inputElement.nativeElement, 'autofocus');
            }
        };
        /**
         * @param {?} value
         * @return {?}
         */
        NzCheckboxComponent.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.nzChecked = value;
            this.cdr.markForCheck();
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        NzCheckboxComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onChange = fn;
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        NzCheckboxComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onTouched = fn;
        };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        NzCheckboxComponent.prototype.setDisabledState = /**
         * @param {?} isDisabled
         * @return {?}
         */
        function (isDisabled) {
            this.nzDisabled = isDisabled;
            this.cdr.markForCheck();
        };
        /**
         * @return {?}
         */
        NzCheckboxComponent.prototype.focus = /**
         * @return {?}
         */
        function () {
            this.focusMonitor.focusVia(this.inputElement, 'keyboard');
        };
        /**
         * @return {?}
         */
        NzCheckboxComponent.prototype.blur = /**
         * @return {?}
         */
        function () {
            this.inputElement.nativeElement.blur();
        };
        /**
         * @return {?}
         */
        NzCheckboxComponent.prototype.checkContent = /**
         * @return {?}
         */
        function () {
            if (core$1.isEmpty(this.contentElement.nativeElement)) {
                this.renderer.setStyle(this.contentElement.nativeElement, 'display', 'none');
            }
            else {
                this.renderer.removeStyle(this.contentElement.nativeElement, 'display');
            }
        };
        /**
         * @return {?}
         */
        NzCheckboxComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.focusMonitor.monitor(this.elementRef, true).subscribe((/**
             * @param {?} focusOrigin
             * @return {?}
             */
            function (focusOrigin) {
                if (!focusOrigin) {
                    Promise.resolve().then((/**
                     * @return {?}
                     */
                    function () { return _this.onTouched(); }));
                }
            }));
            if (this.nzCheckboxWrapperComponent) {
                this.nzCheckboxWrapperComponent.addCheckbox(this);
            }
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        NzCheckboxComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.nzAutoFocus) {
                this.updateAutoFocus();
            }
        };
        /**
         * @return {?}
         */
        NzCheckboxComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            this.updateAutoFocus();
            this.checkContent();
        };
        /**
         * @return {?}
         */
        NzCheckboxComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.focusMonitor.stopMonitoring(this.elementRef);
            if (this.nzCheckboxWrapperComponent) {
                this.nzCheckboxWrapperComponent.removeCheckbox(this);
            }
        };
        /** @nocollapse */
        NzCheckboxComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: NzCheckboxWrapperComponent, decorators: [{ type: core.Optional }] },
            { type: core.ChangeDetectorRef },
            { type: a11y.FocusMonitor }
        ]; };
        NzCheckboxComponent.propDecorators = {
            inputElement: [{ type: core.ViewChild, args: ['inputElement', { static: true },] }],
            contentElement: [{ type: core.ViewChild, args: ['contentElement', { static: false },] }],
            nzCheckedChange: [{ type: core.Output }],
            nzValue: [{ type: core.Input }],
            nzAutoFocus: [{ type: core.Input }],
            nzDisabled: [{ type: core.Input }],
            nzIndeterminate: [{ type: core.Input }],
            nzChecked: [{ type: core.Input }],
            nzAriaLabel: [{ type: core.Input }],
            nzLabelledById: [{ type: core.Input }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzCheckboxComponent.prototype, "nzAutoFocus", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzCheckboxComponent.prototype, "nzDisabled", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzCheckboxComponent.prototype, "nzIndeterminate", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzCheckboxComponent.prototype, "nzChecked", void 0);
NzCheckboxComponent.ɵfac = function NzCheckboxComponent_Factory(t) { return new (t || NzCheckboxComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(NzCheckboxWrapperComponent, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.FocusMonitor)); };
NzCheckboxComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzCheckboxComponent, selectors: [["", "nz-checkbox", ""]], viewQuery: function NzCheckboxComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c1, true);
        ɵngcc0.ɵɵviewQuery(_c2, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.contentElement = _t.first);
    } }, hostBindings: function NzCheckboxComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function NzCheckboxComponent_click_HostBindingHandler($event) { return ctx.hostClick($event); });
    } }, inputs: { nzAutoFocus: "nzAutoFocus", nzDisabled: "nzDisabled", nzIndeterminate: "nzIndeterminate", nzChecked: "nzChecked", nzAriaLabel: "nzAriaLabel", nzLabelledById: "nzLabelledById", nzValue: "nzValue" }, outputs: { nzCheckedChange: "nzCheckedChange" }, exportAs: ["nzCheckbox"], features: [ɵngcc0.ɵɵProvidersFeature([
            {
                provide: forms.NG_VALUE_ACCESSOR,
                useExisting: core.forwardRef(( /**
                 * @return {?}
                 */function () { return NzCheckboxComponent; })),
                multi: true
            }
        ]), ɵngcc0.ɵɵNgOnChangesFeature], attrs: _c3, ngContentSelectors: _c0, decls: 7, vars: 12, consts: [[1, "ant-checkbox"], ["type", "checkbox", 1, "ant-checkbox-input", 3, "checked", "ngModel", "disabled", "ngModelChange", "click"], ["inputElement", ""], [1, "ant-checkbox-inner"], [3, "cdkObserveContent"], ["contentElement", ""]], template: function NzCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "span", 0);
        ɵngcc0.ɵɵelementStart(1, "input", 1, 2);
        ɵngcc0.ɵɵlistener("ngModelChange", function NzCheckboxComponent_Template_input_ngModelChange_1_listener($event) { return ctx.innerCheckedChange($event); })("click", function NzCheckboxComponent_Template_input_click_1_listener($event) { return $event.stopPropagation(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(3, "span", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "span", 4, 5);
        ɵngcc0.ɵɵlistener("cdkObserveContent", function NzCheckboxComponent_Template_span_cdkObserveContent_4_listener() { return ctx.checkContent(); });
        ɵngcc0.ɵɵprojection(6);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-checkbox-checked", ctx.nzChecked && !ctx.nzIndeterminate)("ant-checkbox-disabled", ctx.nzDisabled)("ant-checkbox-indeterminate", ctx.nzIndeterminate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("checked", ctx.nzChecked)("ngModel", ctx.nzChecked)("disabled", ctx.nzDisabled);
        ɵngcc0.ɵɵattribute("aria-label", ctx.nzAriaLabel)("aria-checked", ctx.nzIndeterminate ? "mixed" : ctx.nzChecked)("aria-labelledby", ctx.nzLabelledById);
    } }, directives: [ɵngcc2.CheckboxControlValueAccessor, ɵngcc2.NgControlStatus, ɵngcc2.NgModel, ɵngcc3.CdkObserveContent], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCheckboxComponent, [{
        type: core.Component,
        args: [{
                selector: '[nz-checkbox]',
                exportAs: 'nzCheckbox',
                preserveWhitespaces: false,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                template: "<span class=\"ant-checkbox\" [class.ant-checkbox-checked]=\"nzChecked && !nzIndeterminate\"\r\n  [class.ant-checkbox-disabled]=\"nzDisabled\" [class.ant-checkbox-indeterminate]=\"nzIndeterminate\">\r\n  <input #inputElement [checked]=\"nzChecked\" [ngModel]=\"nzChecked\" [disabled]=\"nzDisabled\"\r\n    (ngModelChange)=\"innerCheckedChange($event)\" (click)=\"$event.stopPropagation();\" [attr.aria-label]=\"nzAriaLabel\"\r\n    [attr.aria-checked]=\"nzIndeterminate ? 'mixed' : nzChecked\" [attr.aria-labelledby]=\"nzLabelledById\"\r\n    type=\"checkbox\" class=\"ant-checkbox-input\">\r\n  <span class=\"ant-checkbox-inner\"></span>\r\n</span>\r\n<span #contentElement (cdkObserveContent)=\"checkContent()\">\r\n  <ng-content></ng-content>\r\n</span>",
                providers: [
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(( /**
                         * @return {?}
                         */function () { return NzCheckboxComponent; })),
                        multi: true
                    }
                ],
                host: {
                    '(click)': 'hostClick($event)'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: NzCheckboxWrapperComponent, decorators: [{
                type: core.Optional
            }] }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc1.FocusMonitor }]; }, { nzCheckedChange: [{
            type: core.Output
        }], nzAutoFocus: [{
            type: core.Input
        }], nzDisabled: [{
            type: core.Input
        }], nzIndeterminate: [{
            type: core.Input
        }], nzChecked: [{
            type: core.Input
        }], nzAriaLabel: [{
            type: core.Input
        }], nzLabelledById: [{
            type: core.Input
        }], inputElement: [{
            type: core.ViewChild,
            args: ['inputElement', { static: true }]
        }], contentElement: [{
            type: core.ViewChild,
            args: ['contentElement', { static: false }]
        }], nzValue: [{
            type: core.Input
        }] }); })();
        return NzCheckboxComponent;
    }());
    if (false) {
        /** @type {?} */
        NzCheckboxComponent.prototype.onChange;
        /** @type {?} */
        NzCheckboxComponent.prototype.onTouched;
        /**
         * @type {?}
         * @private
         */
        NzCheckboxComponent.prototype.inputElement;
        /**
         * @type {?}
         * @private
         */
        NzCheckboxComponent.prototype.contentElement;
        /** @type {?} */
        NzCheckboxComponent.prototype.nzCheckedChange;
        /** @type {?} */
        NzCheckboxComponent.prototype.nzValue;
        /** @type {?} */
        NzCheckboxComponent.prototype.nzAutoFocus;
        /** @type {?} */
        NzCheckboxComponent.prototype.nzDisabled;
        /** @type {?} */
        NzCheckboxComponent.prototype.nzIndeterminate;
        /** @type {?} */
        NzCheckboxComponent.prototype.nzChecked;
        /** @type {?} */
        NzCheckboxComponent.prototype.nzAriaLabel;
        /** @type {?} */
        NzCheckboxComponent.prototype.nzLabelledById;
        /**
         * @type {?}
         * @private
         */
        NzCheckboxComponent.prototype.elementRef;
        /**
         * @type {?}
         * @private
         */
        NzCheckboxComponent.prototype.renderer;
        /**
         * @type {?}
         * @private
         */
        NzCheckboxComponent.prototype.nzCheckboxWrapperComponent;
        /**
         * @type {?}
         * @private
         */
        NzCheckboxComponent.prototype.cdr;
        /**
         * @type {?}
         * @private
         */
        NzCheckboxComponent.prototype.focusMonitor;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function NzCheckBoxOptionInterface() { }
    if (false) {
        /** @type {?} */
        NzCheckBoxOptionInterface.prototype.label;
        /** @type {?} */
        NzCheckBoxOptionInterface.prototype.value;
        /** @type {?|undefined} */
        NzCheckBoxOptionInterface.prototype.checked;
        /** @type {?|undefined} */
        NzCheckBoxOptionInterface.prototype.disabled;
    }
    var NzCheckboxGroupComponent = /** @class */ (function () {
        function NzCheckboxGroupComponent(elementRef, focusMonitor, cdr, renderer) {
            this.elementRef = elementRef;
            this.focusMonitor = focusMonitor;
            this.cdr = cdr;
            // tslint:disable-next-line:no-any
            this.onChange = (/**
             * @return {?}
             */
            function () { return null; });
            // tslint:disable-next-line:no-any
            this.onTouched = (/**
             * @return {?}
             */
            function () { return null; });
            this.options = [];
            this.nzDisabled = false;
            renderer.addClass(elementRef.nativeElement, 'ant-checkbox-group');
        }
        /**
         * @return {?}
         */
        NzCheckboxGroupComponent.prototype.onOptionChange = /**
         * @return {?}
         */
        function () {
            this.onChange(this.options);
        };
        /**
         * @param {?} _index
         * @param {?} option
         * @return {?}
         */
        NzCheckboxGroupComponent.prototype.trackByOption = /**
         * @param {?} _index
         * @param {?} option
         * @return {?}
         */
        function (_index, option) {
            return option.value;
        };
        /**
         * @return {?}
         */
        NzCheckboxGroupComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.focusMonitor.monitor(this.elementRef, true).subscribe((/**
             * @param {?} focusOrigin
             * @return {?}
             */
            function (focusOrigin) {
                if (!focusOrigin) {
                    Promise.resolve().then((/**
                     * @return {?}
                     */
                    function () { return _this.onTouched(); }));
                }
            }));
        };
        /**
         * @return {?}
         */
        NzCheckboxGroupComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.focusMonitor.stopMonitoring(this.elementRef);
        };
        /**
         * @param {?} value
         * @return {?}
         */
        NzCheckboxGroupComponent.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.options = value;
            this.cdr.markForCheck();
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        NzCheckboxGroupComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onChange = fn;
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        NzCheckboxGroupComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onTouched = fn;
        };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        NzCheckboxGroupComponent.prototype.setDisabledState = /**
         * @param {?} isDisabled
         * @return {?}
         */
        function (isDisabled) {
            this.nzDisabled = isDisabled;
            this.cdr.markForCheck();
        };
        /** @nocollapse */
        NzCheckboxGroupComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: a11y.FocusMonitor },
            { type: core.ChangeDetectorRef },
            { type: core.Renderer2 }
        ]; };
        NzCheckboxGroupComponent.propDecorators = {
            nzDisabled: [{ type: core.Input }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzCheckboxGroupComponent.prototype, "nzDisabled", void 0);
NzCheckboxGroupComponent.ɵfac = function NzCheckboxGroupComponent_Factory(t) { return new (t || NzCheckboxGroupComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.FocusMonitor), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2)); };
NzCheckboxGroupComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzCheckboxGroupComponent, selectors: [["nz-checkbox-group"]], inputs: { nzDisabled: "nzDisabled" }, exportAs: ["nzCheckboxGroup"], features: [ɵngcc0.ɵɵProvidersFeature([
            {
                provide: forms.NG_VALUE_ACCESSOR,
                useExisting: core.forwardRef(( /**
                 * @return {?}
                 */function () { return NzCheckboxGroupComponent; })),
                multi: true
            }
        ])], decls: 1, vars: 2, consts: [["nz-checkbox", "", "class", "ant-checkbox-group-item", 3, "nzDisabled", "nzChecked", "nzCheckedChange", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["nz-checkbox", "", 1, "ant-checkbox-group-item", 3, "nzDisabled", "nzChecked", "nzCheckedChange"]], template: function NzCheckboxGroupComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzCheckboxGroupComponent_label_0_Template, 3, 3, "label", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngForOf", ctx.options)("ngForTrackBy", ctx.trackByOption);
    } }, directives: [ɵngcc4.NgForOf, NzCheckboxComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCheckboxGroupComponent, [{
        type: core.Component,
        args: [{
                selector: 'nz-checkbox-group',
                exportAs: 'nzCheckboxGroup',
                preserveWhitespaces: false,
                encapsulation: core.ViewEncapsulation.None,
                template: "<label nz-checkbox\r\n       class=\"ant-checkbox-group-item\"\r\n       *ngFor=\"let option of options; trackBy:trackByOption\"\r\n       [nzDisabled]=\"option.disabled || nzDisabled\"\r\n       [(nzChecked)]=\"option.checked\"\r\n       (nzCheckedChange)=\"onOptionChange()\">\r\n  <span>{{ option.label }}</span>\r\n</label>",
                providers: [
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(( /**
                         * @return {?}
                         */function () { return NzCheckboxGroupComponent; })),
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.FocusMonitor }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.Renderer2 }]; }, { nzDisabled: [{
            type: core.Input
        }] }); })();
        return NzCheckboxGroupComponent;
    }());
    if (false) {
        /** @type {?} */
        NzCheckboxGroupComponent.prototype.onChange;
        /** @type {?} */
        NzCheckboxGroupComponent.prototype.onTouched;
        /** @type {?} */
        NzCheckboxGroupComponent.prototype.options;
        /** @type {?} */
        NzCheckboxGroupComponent.prototype.nzDisabled;
        /**
         * @type {?}
         * @private
         */
        NzCheckboxGroupComponent.prototype.elementRef;
        /**
         * @type {?}
         * @private
         */
        NzCheckboxGroupComponent.prototype.focusMonitor;
        /**
         * @type {?}
         * @private
         */
        NzCheckboxGroupComponent.prototype.cdr;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzCheckboxModule = /** @class */ (function () {
        function NzCheckboxModule() {
        }
NzCheckboxModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzCheckboxModule });
NzCheckboxModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzCheckboxModule_Factory(t) { return new (t || NzCheckboxModule)(); }, imports: [[common.CommonModule, forms.FormsModule, observers.ObserversModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzCheckboxModule, { declarations: [NzCheckboxComponent,
        NzCheckboxGroupComponent,
        NzCheckboxWrapperComponent], imports: [ɵngcc4.CommonModule, ɵngcc2.FormsModule, ɵngcc3.ObserversModule], exports: [NzCheckboxComponent,
        NzCheckboxGroupComponent,
        NzCheckboxWrapperComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCheckboxModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule, forms.FormsModule, observers.ObserversModule],
                declarations: [NzCheckboxComponent, NzCheckboxGroupComponent, NzCheckboxWrapperComponent],
                exports: [NzCheckboxComponent, NzCheckboxGroupComponent, NzCheckboxWrapperComponent]
            }]
    }], function () { return []; }, null); })();
        return NzCheckboxModule;
    }());

    exports.NzCheckboxComponent = NzCheckboxComponent;
    exports.NzCheckboxGroupComponent = NzCheckboxGroupComponent;
    exports.NzCheckboxModule = NzCheckboxModule;
    exports.NzCheckboxWrapperComponent = NzCheckboxWrapperComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-zorro-antd-checkbox.umd.js.map
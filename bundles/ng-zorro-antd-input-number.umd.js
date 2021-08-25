(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/a11y'), require('@angular/cdk/keycodes'), require('@angular/core'), require('@angular/forms'), require('ng-zorro-antd/core'), require('@angular/common'), require('ng-zorro-antd/icon')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/input-number', ['exports', '@angular/cdk/a11y', '@angular/cdk/keycodes', '@angular/core', '@angular/forms', 'ng-zorro-antd/core', '@angular/common', 'ng-zorro-antd/icon'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd']['input-number'] = {}), global.ng.cdk.a11y, global.ng.cdk.keycodes, global.ng.core, global.ng.forms, global['ng-zorro-antd'].core, global.ng.common, global['ng-zorro-antd'].icon));
}(this, (function (exports, a11y, keycodes, core, forms, core$1, common, icon) { 'use strict';

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
    var NzInputNumberComponent = /** @class */ (function () {
        function NzInputNumberComponent(elementRef, renderer, cdr, focusMonitor) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.cdr = cdr;
            this.focusMonitor = focusMonitor;
            this.isFocused = false;
            this.disabledUp = false;
            this.disabledDown = false;
            this.onChange = (/**
             * @return {?}
             */
            function () { return null; });
            this.onTouched = (/**
             * @return {?}
             */
            function () { return null; });
            this.nzBlur = new core.EventEmitter();
            this.nzFocus = new core.EventEmitter();
            this.nzSize = 'default';
            this.nzMin = -Infinity;
            this.nzMax = Infinity;
            this.nzParser = (/**
             * @param {?} value
             * @return {?}
             */
            function (value) { return value; }); // tslint:disable-line:no-any
            this.nzPlaceHolder = '';
            this.nzStep = 1;
            this.nzDisabled = false;
            this.nzAutoFocus = false;
            this.nzFormatter = (/**
             * @param {?} value
             * @return {?}
             */
            function (value) { return value; });
            renderer.addClass(elementRef.nativeElement, 'ant-input-number');
        }
        // tslint:disable-line:no-any
        /**
         * @return {?}
         */
        NzInputNumberComponent.prototype.updateAutoFocus = 
        // tslint:disable-line:no-any
        /**
         * @return {?}
         */
        function () {
            if (this.nzAutoFocus) {
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
        NzInputNumberComponent.prototype.onModelChange = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.actualValue = this.nzParser(value
                .trim()
                .replace(/。/g, '.')
                .replace(/[^\w\.-]+/g, ''));
            this.inputElement.nativeElement.value = "" + this.actualValue;
        };
        /**
         * @param {?} value
         * @return {?}
         */
        NzInputNumberComponent.prototype.getCurrentValidValue = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var val = value;
            if (val === '') {
                val = '';
            }
            else if (!this.isNotCompleteNumber(val)) {
                val = (/** @type {?} */ (this.getValidValue(val)));
            }
            else {
                val = this.value;
            }
            return this.toNumber(val);
        };
        // '1.' '1x' 'xx' '' => are not complete numbers
        // '1.' '1x' 'xx' '' => are not complete numbers
        /**
         * @param {?} num
         * @return {?}
         */
        NzInputNumberComponent.prototype.isNotCompleteNumber = 
        // '1.' '1x' 'xx' '' => are not complete numbers
        /**
         * @param {?} num
         * @return {?}
         */
        function (num) {
            return (isNaN((/** @type {?} */ (num))) ||
                num === '' ||
                num === null ||
                !!(num && num.toString().indexOf('.') === num.toString().length - 1));
        };
        /**
         * @param {?=} value
         * @return {?}
         */
        NzInputNumberComponent.prototype.getValidValue = /**
         * @param {?=} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var val = parseFloat((/** @type {?} */ (value)));
            // https://github.com/ant-design/ant-design/issues/7358
            if (isNaN(val)) {
                return value;
            }
            if (val < this.nzMin) {
                val = this.nzMin;
            }
            if (val > this.nzMax) {
                val = this.nzMax;
            }
            return val;
        };
        /**
         * @param {?} num
         * @return {?}
         */
        NzInputNumberComponent.prototype.toNumber = /**
         * @param {?} num
         * @return {?}
         */
        function (num) {
            if (this.isNotCompleteNumber(num)) {
                return (/** @type {?} */ (num));
            }
            if (core$1.isNotNil(this.nzPrecision)) {
                return Number(Number(num).toFixed(this.nzPrecision));
            }
            return Number(num);
        };
        /**
         * @return {?}
         */
        NzInputNumberComponent.prototype.setValidateValue = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var value = this.getCurrentValidValue(this.actualValue);
            this.setValue(value, "" + this.value !== "" + value);
        };
        /**
         * @return {?}
         */
        NzInputNumberComponent.prototype.onBlur = /**
         * @return {?}
         */
        function () {
            this.isFocused = false;
            this.setValidateValue();
        };
        /**
         * @return {?}
         */
        NzInputNumberComponent.prototype.onFocus = /**
         * @return {?}
         */
        function () {
            this.isFocused = true;
        };
        /**
         * @param {?} e
         * @return {?}
         */
        NzInputNumberComponent.prototype.getRatio = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            /** @type {?} */
            var ratio = 1;
            if (e.metaKey || e.ctrlKey) {
                ratio = 0.1;
            }
            else if (e.shiftKey) {
                ratio = 10;
            }
            return ratio;
        };
        /**
         * @param {?} e
         * @param {?=} ratio
         * @return {?}
         */
        NzInputNumberComponent.prototype.down = /**
         * @param {?} e
         * @param {?=} ratio
         * @return {?}
         */
        function (e, ratio) {
            if (!this.isFocused) {
                this.focus();
            }
            this.step('down', e, ratio);
        };
        /**
         * @param {?} e
         * @param {?=} ratio
         * @return {?}
         */
        NzInputNumberComponent.prototype.up = /**
         * @param {?} e
         * @param {?=} ratio
         * @return {?}
         */
        function (e, ratio) {
            if (!this.isFocused) {
                this.focus();
            }
            this.step('up', e, ratio);
        };
        /**
         * @param {?} value
         * @return {?}
         */
        NzInputNumberComponent.prototype.getPrecision = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var valueString = value.toString();
            if (valueString.indexOf('e-') >= 0) {
                return parseInt(valueString.slice(valueString.indexOf('e-') + 2), 10);
            }
            /** @type {?} */
            var precision = 0;
            if (valueString.indexOf('.') >= 0) {
                precision = valueString.length - valueString.indexOf('.') - 1;
            }
            return precision;
        };
        // step={1.0} value={1.51}
        // press +
        // then value should be 2.51, rather than 2.5
        // if this.props.precision is undefined
        // https://github.com/react-component/input-number/issues/39
        // step={1.0} value={1.51}
        // press +
        // then value should be 2.51, rather than 2.5
        // if this.props.precision is undefined
        // https://github.com/react-component/input-number/issues/39
        /**
         * @param {?} currentValue
         * @param {?} ratio
         * @return {?}
         */
        NzInputNumberComponent.prototype.getMaxPrecision = 
        // step={1.0} value={1.51}
        // press +
        // then value should be 2.51, rather than 2.5
        // if this.props.precision is undefined
        // https://github.com/react-component/input-number/issues/39
        /**
         * @param {?} currentValue
         * @param {?} ratio
         * @return {?}
         */
        function (currentValue, ratio) {
            if (core$1.isNotNil(this.nzPrecision)) {
                return this.nzPrecision;
            }
            /** @type {?} */
            var ratioPrecision = this.getPrecision(ratio);
            /** @type {?} */
            var stepPrecision = this.getPrecision(this.nzStep);
            /** @type {?} */
            var currentValuePrecision = this.getPrecision((/** @type {?} */ (currentValue)));
            if (!currentValue) {
                return ratioPrecision + stepPrecision;
            }
            return Math.max(currentValuePrecision, ratioPrecision + stepPrecision);
        };
        /**
         * @param {?} currentValue
         * @param {?} ratio
         * @return {?}
         */
        NzInputNumberComponent.prototype.getPrecisionFactor = /**
         * @param {?} currentValue
         * @param {?} ratio
         * @return {?}
         */
        function (currentValue, ratio) {
            /** @type {?} */
            var precision = this.getMaxPrecision(currentValue, ratio);
            return Math.pow(10, precision);
        };
        /**
         * @param {?} val
         * @param {?} rat
         * @return {?}
         */
        NzInputNumberComponent.prototype.upStep = /**
         * @param {?} val
         * @param {?} rat
         * @return {?}
         */
        function (val, rat) {
            /** @type {?} */
            var precisionFactor = this.getPrecisionFactor(val, rat);
            /** @type {?} */
            var precision = Math.abs(this.getMaxPrecision(val, rat));
            /** @type {?} */
            var result;
            if (typeof val === 'number') {
                result = ((precisionFactor * val + precisionFactor * this.nzStep * rat) / precisionFactor).toFixed(precision);
            }
            else {
                result = this.nzMin === -Infinity ? this.nzStep : this.nzMin;
            }
            return this.toNumber(result);
        };
        /**
         * @param {?} val
         * @param {?} rat
         * @return {?}
         */
        NzInputNumberComponent.prototype.downStep = /**
         * @param {?} val
         * @param {?} rat
         * @return {?}
         */
        function (val, rat) {
            /** @type {?} */
            var precisionFactor = this.getPrecisionFactor(val, rat);
            /** @type {?} */
            var precision = Math.abs(this.getMaxPrecision(val, rat));
            /** @type {?} */
            var result;
            if (typeof val === 'number') {
                result = ((precisionFactor * val - precisionFactor * this.nzStep * rat) / precisionFactor).toFixed(precision);
            }
            else {
                result = this.nzMin === -Infinity ? -this.nzStep : this.nzMin;
            }
            return this.toNumber(result);
        };
        /**
         * @param {?} type
         * @param {?} e
         * @param {?=} ratio
         * @return {?}
         */
        NzInputNumberComponent.prototype.step = /**
         * @param {?} type
         * @param {?} e
         * @param {?=} ratio
         * @return {?}
         */
        function (type, e, ratio) {
            var _this = this;
            if (ratio === void 0) { ratio = 1; }
            this.stop();
            e.preventDefault();
            if (this.nzDisabled) {
                return;
            }
            /** @type {?} */
            var value = this.getCurrentValidValue(this.actualValue) || 0;
            /** @type {?} */
            var val = 0;
            if (type === 'up') {
                val = this.upStep(value, ratio);
            }
            else if (type === 'down') {
                val = this.downStep(value, ratio);
            }
            /** @type {?} */
            var outOfRange = val > this.nzMax || val < this.nzMin;
            if (val > this.nzMax) {
                val = this.nzMax;
            }
            else if (val < this.nzMin) {
                val = this.nzMin;
            }
            this.setValue(val, true);
            this.isFocused = true;
            if (outOfRange) {
                return;
            }
            this.autoStepTimer = setTimeout((/**
             * @return {?}
             */
            function () {
                _this[type](e, ratio, true);
            }), 600);
        };
        /**
         * @return {?}
         */
        NzInputNumberComponent.prototype.stop = /**
         * @return {?}
         */
        function () {
            if (this.autoStepTimer) {
                clearTimeout(this.autoStepTimer);
            }
        };
        /**
         * @param {?} value
         * @param {?} emit
         * @return {?}
         */
        NzInputNumberComponent.prototype.setValue = /**
         * @param {?} value
         * @param {?} emit
         * @return {?}
         */
        function (value, emit) {
            if (emit && "" + this.value !== "" + value) {
                this.onChange(value);
            }
            this.value = value;
            this.actualValue = value;
            /** @type {?} */
            var displayValue = core$1.isNotNil(this.nzFormatter(this.value)) ? this.nzFormatter(this.value) : '';
            this.displayValue = displayValue;
            this.inputElement.nativeElement.value = "" + displayValue;
            this.disabledUp = this.disabledDown = false;
            if (value || value === 0) {
                /** @type {?} */
                var val = Number(value);
                if (val >= this.nzMax) {
                    this.disabledUp = true;
                }
                if (val <= this.nzMin) {
                    this.disabledDown = true;
                }
            }
        };
        /**
         * @param {?} e
         * @return {?}
         */
        NzInputNumberComponent.prototype.onKeyDown = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            if (e.code === 'ArrowUp' || e.keyCode === keycodes.UP_ARROW) {
                /** @type {?} */
                var ratio = this.getRatio(e);
                this.up(e, ratio);
                this.stop();
            }
            else if (e.code === 'ArrowDown' || e.keyCode === keycodes.DOWN_ARROW) {
                /** @type {?} */
                var ratio = this.getRatio(e);
                this.down(e, ratio);
                this.stop();
            }
            else if (e.keyCode === keycodes.ENTER) {
                this.setValidateValue();
            }
        };
        /**
         * @return {?}
         */
        NzInputNumberComponent.prototype.onKeyUp = /**
         * @return {?}
         */
        function () {
            this.stop();
        };
        /**
         * @param {?} value
         * @return {?}
         */
        NzInputNumberComponent.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.setValue(value, false);
            this.cdr.markForCheck();
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        NzInputNumberComponent.prototype.registerOnChange = /**
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
        NzInputNumberComponent.prototype.registerOnTouched = /**
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
        NzInputNumberComponent.prototype.setDisabledState = /**
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
        NzInputNumberComponent.prototype.focus = /**
         * @return {?}
         */
        function () {
            this.focusMonitor.focusVia(this.inputElement, 'keyboard');
        };
        /**
         * @return {?}
         */
        NzInputNumberComponent.prototype.blur = /**
         * @return {?}
         */
        function () {
            this.inputElement.nativeElement.blur();
        };
        /**
         * @return {?}
         */
        NzInputNumberComponent.prototype.ngOnInit = /**
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
                    _this.onBlur();
                    _this.nzBlur.emit();
                    Promise.resolve().then((/**
                     * @return {?}
                     */
                    function () { return _this.onTouched(); }));
                }
                else {
                    _this.onFocus();
                    _this.nzFocus.emit();
                }
            }));
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        NzInputNumberComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.nzAutoFocus) {
                this.updateAutoFocus();
            }
            if (changes.nzFormatter) {
                /** @type {?} */
                var value = this.getCurrentValidValue(this.actualValue);
                this.setValue(value, true);
            }
        };
        /**
         * @return {?}
         */
        NzInputNumberComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            if (this.nzAutoFocus) {
                this.focus();
            }
        };
        /**
         * @return {?}
         */
        NzInputNumberComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.focusMonitor.stopMonitoring(this.elementRef);
        };
        NzInputNumberComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'nz-input-number',
                        exportAs: 'nzInputNumber',
                        template: "<div class=\"ant-input-number-handler-wrap\">\r\n  <span unselectable=\"unselectable\"\r\n        class=\"ant-input-number-handler ant-input-number-handler-up\"\r\n        (mousedown)=\"up($event)\"\r\n        (mouseup)=\"stop()\"\r\n        (mouseleave)=\"stop()\"\r\n        [class.ant-input-number-handler-up-disabled]=\"disabledUp\">\r\n    <i nz-icon nzType=\"up\" class=\"ant-input-number-handler-up-inner\"></i>\r\n  </span>\r\n  <span unselectable=\"unselectable\"\r\n        class=\"ant-input-number-handler ant-input-number-handler-down\"\r\n        (mousedown)=\"down($event)\"\r\n        (mouseup)=\"stop()\"\r\n        (mouseleave)=\"stop()\"\r\n        [class.ant-input-number-handler-down-disabled]=\"disabledDown\">\r\n    <i nz-icon nzType=\"down\" class=\"ant-input-number-handler-down-inner\"></i>\r\n  </span>\r\n</div>\r\n<div class=\"ant-input-number-input-wrap\">\r\n  <input #inputElement\r\n         autocomplete=\"off\"\r\n         class=\"ant-input-number-input\"\r\n         [attr.id]=\"nzId\"\r\n         [disabled]=\"nzDisabled\"\r\n         [attr.min]=\"nzMin\"\r\n         [attr.max]=\"nzMax\"\r\n         [placeholder]=\"nzPlaceHolder\"\r\n         [attr.step]=\"nzStep\"\r\n         (keydown)=\"onKeyDown($event)\"\r\n         (keyup)=\"onKeyUp()\"\r\n         [ngModel]=\"displayValue\"\r\n         (ngModelChange)=\"onModelChange($event)\">\r\n</div>\r\n",
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef((/**
                                 * @return {?}
                                 */
                                function () { return NzInputNumberComponent; })),
                                multi: true
                            }
                        ],
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        host: {
                            '[class.ant-input-number-focused]': 'isFocused',
                            '[class.ant-input-number-lg]': "nzSize === 'large'",
                            '[class.ant-input-number-sm]': "nzSize === 'small'",
                            '[class.ant-input-number-disabled]': 'nzDisabled'
                        }
                    }] }
        ];
        /** @nocollapse */
        NzInputNumberComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: core.ChangeDetectorRef },
            { type: a11y.FocusMonitor }
        ]; };
        NzInputNumberComponent.propDecorators = {
            nzBlur: [{ type: core.Output }],
            nzFocus: [{ type: core.Output }],
            inputElement: [{ type: core.ViewChild, args: ['inputElement', { static: true },] }],
            nzSize: [{ type: core.Input }],
            nzMin: [{ type: core.Input }],
            nzMax: [{ type: core.Input }],
            nzParser: [{ type: core.Input }],
            nzPrecision: [{ type: core.Input }],
            nzPlaceHolder: [{ type: core.Input }],
            nzStep: [{ type: core.Input }],
            nzId: [{ type: core.Input }],
            nzDisabled: [{ type: core.Input }],
            nzAutoFocus: [{ type: core.Input }],
            nzFormatter: [{ type: core.Input }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzInputNumberComponent.prototype, "nzDisabled", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzInputNumberComponent.prototype, "nzAutoFocus", void 0);
        return NzInputNumberComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        NzInputNumberComponent.prototype.autoStepTimer;
        /**
         * @type {?}
         * @private
         */
        NzInputNumberComponent.prototype.actualValue;
        /**
         * @type {?}
         * @private
         */
        NzInputNumberComponent.prototype.value;
        /** @type {?} */
        NzInputNumberComponent.prototype.displayValue;
        /** @type {?} */
        NzInputNumberComponent.prototype.isFocused;
        /** @type {?} */
        NzInputNumberComponent.prototype.disabledUp;
        /** @type {?} */
        NzInputNumberComponent.prototype.disabledDown;
        /** @type {?} */
        NzInputNumberComponent.prototype.onChange;
        /** @type {?} */
        NzInputNumberComponent.prototype.onTouched;
        /** @type {?} */
        NzInputNumberComponent.prototype.nzBlur;
        /** @type {?} */
        NzInputNumberComponent.prototype.nzFocus;
        /** @type {?} */
        NzInputNumberComponent.prototype.inputElement;
        /** @type {?} */
        NzInputNumberComponent.prototype.nzSize;
        /** @type {?} */
        NzInputNumberComponent.prototype.nzMin;
        /** @type {?} */
        NzInputNumberComponent.prototype.nzMax;
        /** @type {?} */
        NzInputNumberComponent.prototype.nzParser;
        /** @type {?} */
        NzInputNumberComponent.prototype.nzPrecision;
        /** @type {?} */
        NzInputNumberComponent.prototype.nzPlaceHolder;
        /** @type {?} */
        NzInputNumberComponent.prototype.nzStep;
        /** @type {?} */
        NzInputNumberComponent.prototype.nzId;
        /** @type {?} */
        NzInputNumberComponent.prototype.nzDisabled;
        /** @type {?} */
        NzInputNumberComponent.prototype.nzAutoFocus;
        /** @type {?} */
        NzInputNumberComponent.prototype.nzFormatter;
        /**
         * @type {?}
         * @private
         */
        NzInputNumberComponent.prototype.elementRef;
        /**
         * @type {?}
         * @private
         */
        NzInputNumberComponent.prototype.renderer;
        /**
         * @type {?}
         * @private
         */
        NzInputNumberComponent.prototype.cdr;
        /**
         * @type {?}
         * @private
         */
        NzInputNumberComponent.prototype.focusMonitor;
        /* Skipping unhandled member: [property: string]: any;*/
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzInputNumberModule = /** @class */ (function () {
        function NzInputNumberModule() {
        }
        NzInputNumberModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, forms.FormsModule, icon.NzIconModule],
                        declarations: [NzInputNumberComponent],
                        exports: [NzInputNumberComponent]
                    },] }
        ];
        return NzInputNumberModule;
    }());

    exports.NzInputNumberComponent = NzInputNumberComponent;
    exports.NzInputNumberModule = NzInputNumberModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-input-number.umd.js.map

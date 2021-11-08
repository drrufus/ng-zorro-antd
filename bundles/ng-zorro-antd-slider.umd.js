(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/cdk/platform'),require('@angular/common'),require('ng-zorro-antd/tooltip'),exports, require('@angular/cdk/platform'), require('@angular/core'), require('@angular/forms'), require('rxjs'), require('rxjs/operators'), require('ng-zorro-antd/core'), require('@angular/common'), require('ng-zorro-antd/tooltip')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/slider', ['@angular/core','@angular/cdk/platform','@angular/common','ng-zorro-antd/tooltip','exports', '@angular/cdk/platform', '@angular/core', '@angular/forms', 'rxjs', 'rxjs/operators', 'ng-zorro-antd/core', '@angular/common', 'ng-zorro-antd/tooltip'], factory) :
    (global = global || self, factory(global.ng.core,global.ng.cdk.platform,global.ng.common,global.ngZorroAntd.tooltip,(global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].slider = {}), global.ng.cdk.platform, global.ng.core, global.ng.forms, global.rxjs, global.rxjs.operators, global['ng-zorro-antd'].core, global.ng.common, global['ng-zorro-antd'].tooltip));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,exports, platform, core, forms, rxjs, operators, core$1, common, tooltip) { 
var _c0 = ["slider"];
function NzSliderComponent_nz_slider_step_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nz-slider-step", 7);
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("nzVertical", ctx_r1.nzVertical)("nzLowerBound", ctx_r1.bounds.lower)("nzUpperBound", ctx_r1.bounds.upper)("nzMarksArray", ctx_r1.marksArray)("nzIncluded", ctx_r1.nzIncluded);
} }
function NzSliderComponent_nz_slider_handle_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nz-slider-handle", 8);
} if (rf & 2) {
    var handle_r4 = ctx.$implicit;
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("nzVertical", ctx_r2.nzVertical)("nzOffset", handle_r4.offset)("nzValue", handle_r4.value)("nzActive", handle_r4.active)("nzTipFormatter", ctx_r2.nzTipFormatter)("nzTooltipVisible", ctx_r2.nzTooltipVisible)("nzTooltipPlacement", ctx_r2.nzTooltipPlacement);
} }
function NzSliderComponent_nz_slider_marks_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nz-slider-marks", 9);
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("nzVertical", ctx_r3.nzVertical)("nzMin", ctx_r3.nzMin)("nzMax", ctx_r3.nzMax)("nzLowerBound", ctx_r3.bounds.lower)("nzUpperBound", ctx_r3.bounds.upper)("nzMarksArray", ctx_r3.marksArray)("nzIncluded", ctx_r3.nzIncluded);
} }
function NzSliderHandleComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 2);
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r0.style)("nzTitle", ctx_r0.tooltipTitle)("nzTrigger", null)("nzPlacement", ctx_r0.nzTooltipPlacement);
} }
function NzSliderHandleComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 3);
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r1.style);
} }
function NzSliderMarksComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 2);
} if (rf & 2) {
    var attr_r1 = ctx.$implicit;
    ɵngcc0.ɵɵclassProp("ant-slider-mark-active", attr_r1.active);
    ɵngcc0.ɵɵproperty("ngStyle", attr_r1.style)("innerHTML", attr_r1.label, ɵngcc0.ɵɵsanitizeHtml);
} }
function NzSliderStepComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 2);
} if (rf & 2) {
    var mark_r1 = ctx.$implicit;
    ɵngcc0.ɵɵclassProp("ant-slider-dot-active", mark_r1.active);
    ɵngcc0.ɵɵproperty("ngStyle", mark_r1.style);
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
    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    /**
     * @record
     */
    function MarkObj() { }
    if (false) {
        /** @type {?|undefined} */
        MarkObj.prototype.style;
        /** @type {?} */
        MarkObj.prototype.label;
    }
    var Marks = /** @class */ (function () {
        function Marks() {
        }
        return Marks;
    }());
    /**
     * Processed steps that would be passed to sub components.
     * @record
     */
    function ExtendedMark() { }
    if (false) {
        /** @type {?} */
        ExtendedMark.prototype.value;
        /** @type {?} */
        ExtendedMark.prototype.offset;
        /** @type {?} */
        ExtendedMark.prototype.config;
    }
    /**
     * Marks that would be rendered.
     * @record
     */
    function DisplayedMark() { }
    if (false) {
        /** @type {?} */
        DisplayedMark.prototype.active;
        /** @type {?} */
        DisplayedMark.prototype.label;
        /** @type {?|undefined} */
        DisplayedMark.prototype.style;
    }
    /**
     * Steps that would be rendered.
     * @record
     */
    function DisplayedStep() { }
    if (false) {
        /** @type {?} */
        DisplayedStep.prototype.active;
        /** @type {?|undefined} */
        DisplayedStep.prototype.style;
    }
    /**
     * @record
     */
    function SliderHandler() { }
    if (false) {
        /** @type {?} */
        SliderHandler.prototype.offset;
        /** @type {?} */
        SliderHandler.prototype.value;
        /** @type {?} */
        SliderHandler.prototype.active;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    function isValueARange(value) {
        if (value instanceof Array) {
            return value.length === 2;
        }
        else {
            return false;
        }
    }
    /**
     * @param {?} config
     * @return {?}
     */
    function isConfigAObject(config) {
        return config instanceof Object;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    /**
     * @return {?}
     */
    function getValueTypeNotMatchError() {
        return new Error("The \"nzRange\" can't match the \"ngModel\"'s type, please check these properties: \"nzRange\", \"ngModel\", \"nzDefaultValue\".");
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzSliderComponent = /** @class */ (function () {
        function NzSliderComponent(cdr, platform) {
            this.cdr = cdr;
            this.platform = platform;
            this.nzDisabled = false;
            this.nzDots = false;
            this.nzIncluded = true;
            this.nzRange = false;
            this.nzVertical = false;
            this.nzDefaultValue = null;
            this.nzMarks = null;
            this.nzMax = 100;
            this.nzMin = 0;
            this.nzStep = 1;
            this.nzTooltipVisible = 'default';
            this.nzTooltipPlacement = 'top';
            this.nzOnAfterChange = new core.EventEmitter();
            this.value = null;
            this.cacheSliderStart = null;
            this.cacheSliderLength = null;
            this.activeValueIndex = undefined; // Current activated handle's index ONLY for range=true
            // Current activated handle's index ONLY for range=true
            this.track = { offset: null, length: null }; // Track's offset and length
            // "steps" in array type with more data & FILTER out the invalid mark
            this.bounds = { lower: null, upper: null }; // now for nz-slider-step
            // now for nz-slider-step
            this.isDragging = false; // Current dragging state
        }
        /**
         * @return {?}
         */
        NzSliderComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.handles = this.generateHandles(this.nzRange ? 2 : 1);
            this.sliderDOM = this.slider.nativeElement;
            this.marksArray = this.nzMarks ? this.generateMarkItems(this.nzMarks) : null;
            if (this.platform.isBrowser) {
                this.createDraggingObservables();
            }
            this.toggleDragDisabled(this.nzDisabled);
            if (this.getValue() === null) {
                this.setValue(this.formatValue(null));
            }
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        NzSliderComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            var nzDisabled = changes.nzDisabled, nzMarks = changes.nzMarks, nzRange = changes.nzRange;
            if (nzDisabled && !nzDisabled.firstChange) {
                this.toggleDragDisabled(nzDisabled.currentValue);
            }
            else if (nzMarks && !nzMarks.firstChange) {
                this.marksArray = this.nzMarks ? this.generateMarkItems(this.nzMarks) : null;
            }
            else if (nzRange && !nzRange.firstChange) {
                this.setValue(this.formatValue(null));
            }
        };
        /**
         * @return {?}
         */
        NzSliderComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.unsubscribeDrag();
        };
        /**
         * @param {?} val
         * @return {?}
         */
        NzSliderComponent.prototype.writeValue = /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.setValue(val, true);
        };
        /**
         * @param {?} _value
         * @return {?}
         */
        NzSliderComponent.prototype.onValueChange = /**
         * @param {?} _value
         * @return {?}
         */
        function (_value) { };
        /**
         * @return {?}
         */
        NzSliderComponent.prototype.onTouched = /**
         * @return {?}
         */
        function () { };
        /**
         * @param {?} fn
         * @return {?}
         */
        NzSliderComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onValueChange = fn;
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        NzSliderComponent.prototype.registerOnTouched = /**
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
        NzSliderComponent.prototype.setDisabledState = /**
         * @param {?} isDisabled
         * @return {?}
         */
        function (isDisabled) {
            this.nzDisabled = isDisabled;
            this.toggleDragDisabled(isDisabled);
        };
        /**
         * @private
         * @param {?} value
         * @param {?=} isWriteValue
         * @return {?}
         */
        NzSliderComponent.prototype.setValue = /**
         * @private
         * @param {?} value
         * @param {?=} isWriteValue
         * @return {?}
         */
        function (value, isWriteValue) {
            if (isWriteValue === void 0) { isWriteValue = false; }
            if (isWriteValue) {
                this.value = this.formatValue(value);
                this.updateTrackAndHandles();
            }
            else if (!this.valuesEqual((/** @type {?} */ (this.value)), (/** @type {?} */ (value)))) {
                this.value = value;
                this.updateTrackAndHandles();
                this.onValueChange(this.getValue(true));
            }
        };
        /**
         * @private
         * @param {?=} cloneAndSort
         * @return {?}
         */
        NzSliderComponent.prototype.getValue = /**
         * @private
         * @param {?=} cloneAndSort
         * @return {?}
         */
        function (cloneAndSort) {
            if (cloneAndSort === void 0) { cloneAndSort = false; }
            if (cloneAndSort && this.value && isValueARange(this.value)) {
                return core$1.shallowCopyArray(this.value).sort((/**
                 * @param {?} a
                 * @param {?} b
                 * @return {?}
                 */
                function (a, b) { return a - b; }));
            }
            return (/** @type {?} */ (this.value));
        };
        /**
         * Clone & sort current value and convert them to offsets, then return the new one.
         */
        /**
         * Clone & sort current value and convert them to offsets, then return the new one.
         * @private
         * @param {?=} value
         * @return {?}
         */
        NzSliderComponent.prototype.getValueToOffset = /**
         * Clone & sort current value and convert them to offsets, then return the new one.
         * @private
         * @param {?=} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            /** @type {?} */
            var normalizedValue = value;
            if (typeof normalizedValue === 'undefined') {
                normalizedValue = this.getValue(true);
            }
            return isValueARange(normalizedValue)
                ? normalizedValue.map((/**
                 * @param {?} val
                 * @return {?}
                 */
                function (val) { return _this.valueToOffset(val); }))
                : this.valueToOffset(normalizedValue);
        };
        /**
         * Find the closest value to be activated (only for range = true).
         */
        /**
         * Find the closest value to be activated (only for range = true).
         * @private
         * @param {?} pointerValue
         * @return {?}
         */
        NzSliderComponent.prototype.setActiveValueIndex = /**
         * Find the closest value to be activated (only for range = true).
         * @private
         * @param {?} pointerValue
         * @return {?}
         */
        function (pointerValue) {
            /** @type {?} */
            var value = this.getValue();
            if (isValueARange(value)) {
                /** @type {?} */
                var minimal_1 = null;
                /** @type {?} */
                var gap_1;
                /** @type {?} */
                var activeIndex_1 = -1;
                value.forEach((/**
                 * @param {?} val
                 * @param {?} index
                 * @return {?}
                 */
                function (val, index) {
                    gap_1 = Math.abs(pointerValue - val);
                    if (minimal_1 === null || gap_1 < (/** @type {?} */ (minimal_1))) {
                        minimal_1 = gap_1;
                        activeIndex_1 = index;
                    }
                }));
                this.activeValueIndex = activeIndex_1;
            }
        };
        /**
         * @private
         * @param {?} pointerValue
         * @return {?}
         */
        NzSliderComponent.prototype.setActiveValue = /**
         * @private
         * @param {?} pointerValue
         * @return {?}
         */
        function (pointerValue) {
            if (isValueARange((/** @type {?} */ (this.value)))) {
                /** @type {?} */
                var newValue = core$1.shallowCopyArray((/** @type {?} */ (this.value)));
                newValue[(/** @type {?} */ (this.activeValueIndex))] = pointerValue;
                this.setValue(newValue);
            }
            else {
                this.setValue(pointerValue);
            }
        };
        /**
         * Update track and handles' position and length.
         */
        /**
         * Update track and handles' position and length.
         * @private
         * @return {?}
         */
        NzSliderComponent.prototype.updateTrackAndHandles = /**
         * Update track and handles' position and length.
         * @private
         * @return {?}
         */
        function () {
            var _a, _b;
            /** @type {?} */
            var value = this.getValue();
            /** @type {?} */
            var offset = this.getValueToOffset(value);
            /** @type {?} */
            var valueSorted = this.getValue(true);
            /** @type {?} */
            var offsetSorted = this.getValueToOffset(valueSorted);
            /** @type {?} */
            var boundParts = isValueARange(valueSorted) ? valueSorted : [0, valueSorted];
            /** @type {?} */
            var trackParts = isValueARange(offsetSorted)
                ? [offsetSorted[0], offsetSorted[1] - offsetSorted[0]]
                : [0, offsetSorted];
            this.handles.forEach((/**
             * @param {?} handle
             * @param {?} index
             * @return {?}
             */
            function (handle, index) {
                handle.offset = isValueARange(offset) ? offset[index] : offset;
                handle.value = isValueARange(value) ? value[index] : value || 0;
            }));
            _a = __read(boundParts, 2), this.bounds.lower = _a[0], this.bounds.upper = _a[1];
            _b = __read(trackParts, 2), this.track.offset = _b[0], this.track.length = _b[1];
            this.cdr.markForCheck();
        };
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        NzSliderComponent.prototype.onDragStart = /**
         * @private
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.toggleDragMoving(true);
            this.cacheSliderProperty();
            this.setActiveValueIndex(value);
            this.setActiveValue(value);
            this.showHandleTooltip(this.nzRange ? this.activeValueIndex : 0);
        };
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        NzSliderComponent.prototype.onDragMove = /**
         * @private
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.setActiveValue(value);
            this.cdr.markForCheck();
        };
        /**
         * @private
         * @return {?}
         */
        NzSliderComponent.prototype.onDragEnd = /**
         * @private
         * @return {?}
         */
        function () {
            this.nzOnAfterChange.emit(this.getValue(true));
            this.toggleDragMoving(false);
            this.cacheSliderProperty(true);
            this.hideAllHandleTooltip();
            this.cdr.markForCheck();
        };
        /**
         * Create user interactions handles.
         */
        /**
         * Create user interactions handles.
         * @private
         * @return {?}
         */
        NzSliderComponent.prototype.createDraggingObservables = /**
         * Create user interactions handles.
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var sliderDOM = this.sliderDOM;
            /** @type {?} */
            var orientField = this.nzVertical ? 'pageY' : 'pageX';
            /** @type {?} */
            var mouse = {
                start: 'mousedown',
                move: 'mousemove',
                end: 'mouseup',
                pluckKey: [orientField]
            };
            /** @type {?} */
            var touch = {
                start: 'touchstart',
                move: 'touchmove',
                end: 'touchend',
                pluckKey: ['touches', '0', orientField],
                filter: (/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) { return e instanceof TouchEvent; })
            };
            [mouse, touch].forEach((/**
             * @param {?} source
             * @return {?}
             */
            function (source) {
                var start = source.start, move = source.move, end = source.end, pluckKey = source.pluckKey, _a = source.filter, filterFunc = _a === void 0 ? (/**
                 * @return {?}
                 */
                function () { return true; }) : _a;
                source.startPlucked$ = rxjs.fromEvent(sliderDOM, start).pipe(operators.filter(filterFunc), operators.tap(core$1.silentEvent), operators.pluck.apply(void 0, __spread(pluckKey)), operators.map((/**
                 * @param {?} position
                 * @return {?}
                 */
                function (position) { return _this.findClosestValue(position); })));
                source.end$ = rxjs.fromEvent(document, end);
                source.moveResolved$ = rxjs.fromEvent(document, move).pipe(operators.filter(filterFunc), operators.tap(core$1.silentEvent), operators.pluck.apply(void 0, __spread(pluckKey)), operators.distinctUntilChanged(), operators.map((/**
                 * @param {?} position
                 * @return {?}
                 */
                function (position) { return _this.findClosestValue(position); })), operators.distinctUntilChanged(), operators.takeUntil(source.end$));
            }));
            this.dragStart$ = rxjs.merge((/** @type {?} */ (mouse.startPlucked$)), (/** @type {?} */ (touch.startPlucked$)));
            this.dragMove$ = rxjs.merge((/** @type {?} */ (mouse.moveResolved$)), (/** @type {?} */ (touch.moveResolved$)));
            this.dragEnd$ = rxjs.merge((/** @type {?} */ (mouse.end$)), (/** @type {?} */ (touch.end$)));
        };
        /**
         * @private
         * @param {?=} periods
         * @return {?}
         */
        NzSliderComponent.prototype.subscribeDrag = /**
         * @private
         * @param {?=} periods
         * @return {?}
         */
        function (periods) {
            if (periods === void 0) { periods = ['start', 'move', 'end']; }
            if (periods.indexOf('start') !== -1 && this.dragStart$ && !this.dragStart_) {
                this.dragStart_ = this.dragStart$.subscribe(this.onDragStart.bind(this));
            }
            if (periods.indexOf('move') !== -1 && this.dragMove$ && !this.dragMove_) {
                this.dragMove_ = this.dragMove$.subscribe(this.onDragMove.bind(this));
            }
            if (periods.indexOf('end') !== -1 && this.dragEnd$ && !this.dragEnd_) {
                this.dragEnd_ = this.dragEnd$.subscribe(this.onDragEnd.bind(this));
            }
        };
        /**
         * @private
         * @param {?=} periods
         * @return {?}
         */
        NzSliderComponent.prototype.unsubscribeDrag = /**
         * @private
         * @param {?=} periods
         * @return {?}
         */
        function (periods) {
            if (periods === void 0) { periods = ['start', 'move', 'end']; }
            if (periods.indexOf('start') !== -1 && this.dragStart_) {
                this.dragStart_.unsubscribe();
                this.dragStart_ = null;
            }
            if (periods.indexOf('move') !== -1 && this.dragMove_) {
                this.dragMove_.unsubscribe();
                this.dragMove_ = null;
            }
            if (periods.indexOf('end') !== -1 && this.dragEnd_) {
                this.dragEnd_.unsubscribe();
                this.dragEnd_ = null;
            }
        };
        /**
         * @private
         * @param {?} movable
         * @return {?}
         */
        NzSliderComponent.prototype.toggleDragMoving = /**
         * @private
         * @param {?} movable
         * @return {?}
         */
        function (movable) {
            /** @type {?} */
            var periods = ['move', 'end'];
            if (movable) {
                this.isDragging = true;
                this.subscribeDrag(periods);
            }
            else {
                this.isDragging = false;
                this.unsubscribeDrag(periods);
            }
        };
        /**
         * @private
         * @param {?} disabled
         * @return {?}
         */
        NzSliderComponent.prototype.toggleDragDisabled = /**
         * @private
         * @param {?} disabled
         * @return {?}
         */
        function (disabled) {
            if (disabled) {
                this.unsubscribeDrag();
            }
            else {
                this.subscribeDrag(['start']);
            }
        };
        /**
         * @private
         * @param {?} position
         * @return {?}
         */
        NzSliderComponent.prototype.findClosestValue = /**
         * @private
         * @param {?} position
         * @return {?}
         */
        function (position) {
            /** @type {?} */
            var sliderStart = this.getSliderStartPosition();
            /** @type {?} */
            var sliderLength = this.getSliderLength();
            /** @type {?} */
            var ratio = core$1.ensureNumberInRange((position - sliderStart) / sliderLength, 0, 1);
            /** @type {?} */
            var val = (this.nzMax - this.nzMin) * (this.nzVertical ? 1 - ratio : ratio) + this.nzMin;
            /** @type {?} */
            var points = this.nzMarks === null ? [] : Object.keys(this.nzMarks).map(parseFloat);
            if (this.nzStep !== null && !this.nzDots) {
                /** @type {?} */
                var closestOne = Math.round(val / this.nzStep) * this.nzStep;
                points.push(closestOne);
            }
            /** @type {?} */
            var gaps = points.map((/**
             * @param {?} point
             * @return {?}
             */
            function (point) { return Math.abs(val - point); }));
            /** @type {?} */
            var closest = points[gaps.indexOf(Math.min.apply(Math, __spread(gaps)))];
            return this.nzStep === null ? closest : parseFloat(closest.toFixed(core$1.getPrecision(this.nzStep)));
        };
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        NzSliderComponent.prototype.valueToOffset = /**
         * @private
         * @param {?} value
         * @return {?}
         */
        function (value) {
            return core$1.getPercent(this.nzMin, this.nzMax, value);
        };
        /**
         * @private
         * @return {?}
         */
        NzSliderComponent.prototype.getSliderStartPosition = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.cacheSliderStart !== null) {
                return this.cacheSliderStart;
            }
            /** @type {?} */
            var offset = core$1.getElementOffset(this.sliderDOM);
            return this.nzVertical ? offset.top : offset.left;
        };
        /**
         * @private
         * @return {?}
         */
        NzSliderComponent.prototype.getSliderLength = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.cacheSliderLength !== null) {
                return this.cacheSliderLength;
            }
            /** @type {?} */
            var sliderDOM = this.sliderDOM;
            return this.nzVertical ? sliderDOM.clientHeight : sliderDOM.clientWidth;
        };
        /**
         * Cache DOM layout/reflow operations for performance (may not necessary?)
         */
        /**
         * Cache DOM layout/reflow operations for performance (may not necessary?)
         * @private
         * @param {?=} remove
         * @return {?}
         */
        NzSliderComponent.prototype.cacheSliderProperty = /**
         * Cache DOM layout/reflow operations for performance (may not necessary?)
         * @private
         * @param {?=} remove
         * @return {?}
         */
        function (remove) {
            if (remove === void 0) { remove = false; }
            this.cacheSliderStart = remove ? null : this.getSliderStartPosition();
            this.cacheSliderLength = remove ? null : this.getSliderLength();
        };
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        NzSliderComponent.prototype.formatValue = /**
         * @private
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            /** @type {?} */
            var res = value;
            if (!this.assertValueValid((/** @type {?} */ (value)))) {
                res = this.nzDefaultValue === null ? (this.nzRange ? [this.nzMin, this.nzMax] : this.nzMin) : this.nzDefaultValue;
            }
            else {
                res = isValueARange((/** @type {?} */ (value)))
                    ? ((/** @type {?} */ (value))).map((/**
                     * @param {?} val
                     * @return {?}
                     */
                    function (val) { return core$1.ensureNumberInRange(val, _this.nzMin, _this.nzMax); }))
                    : core$1.ensureNumberInRange((/** @type {?} */ (value)), this.nzMin, this.nzMax);
            }
            return res;
        };
        /**
         * Check if value is valid and throw error if value-type/range not match.
         */
        /**
         * Check if value is valid and throw error if value-type/range not match.
         * @private
         * @param {?} value
         * @return {?}
         */
        NzSliderComponent.prototype.assertValueValid = /**
         * Check if value is valid and throw error if value-type/range not match.
         * @private
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!Array.isArray(value) && isNaN(typeof value !== 'number' ? parseFloat(value) : value)) {
                return false;
            }
            return this.assertValueTypeMatch(value);
        };
        /**
         * Assert that if `this.nzRange` is `true`, value is also a range, vice versa.
         */
        /**
         * Assert that if `this.nzRange` is `true`, value is also a range, vice versa.
         * @private
         * @param {?} value
         * @return {?}
         */
        NzSliderComponent.prototype.assertValueTypeMatch = /**
         * Assert that if `this.nzRange` is `true`, value is also a range, vice versa.
         * @private
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!value) {
                return true;
            }
            else if (isValueARange(value) !== this.nzRange) {
                throw getValueTypeNotMatchError();
            }
            else {
                return true;
            }
        };
        /**
         * @private
         * @param {?} valA
         * @param {?} valB
         * @return {?}
         */
        NzSliderComponent.prototype.valuesEqual = /**
         * @private
         * @param {?} valA
         * @param {?} valB
         * @return {?}
         */
        function (valA, valB) {
            if (typeof valA !== typeof valB) {
                return false;
            }
            return isValueARange(valA) && isValueARange(valB) ? core$1.arraysEqual(valA, valB) : valA === valB;
        };
        /**
         * Show one handle's tooltip and hide others'.
         */
        /**
         * Show one handle's tooltip and hide others'.
         * @private
         * @param {?=} handleIndex
         * @return {?}
         */
        NzSliderComponent.prototype.showHandleTooltip = /**
         * Show one handle's tooltip and hide others'.
         * @private
         * @param {?=} handleIndex
         * @return {?}
         */
        function (handleIndex) {
            if (handleIndex === void 0) { handleIndex = 0; }
            this.handles.forEach((/**
             * @param {?} handle
             * @param {?} index
             * @return {?}
             */
            function (handle, index) {
                handle.active = index === handleIndex;
            }));
        };
        /**
         * @private
         * @return {?}
         */
        NzSliderComponent.prototype.hideAllHandleTooltip = /**
         * @private
         * @return {?}
         */
        function () {
            this.handles.forEach((/**
             * @param {?} handle
             * @return {?}
             */
            function (handle) { return (handle.active = false); }));
        };
        /**
         * @private
         * @param {?} amount
         * @return {?}
         */
        NzSliderComponent.prototype.generateHandles = /**
         * @private
         * @param {?} amount
         * @return {?}
         */
        function (amount) {
            return Array(amount)
                .fill(0)
                .map((/**
             * @return {?}
             */
            function () { return ({ offset: null, value: null, active: false }); }));
        };
        /**
         * @private
         * @param {?} marks
         * @return {?}
         */
        NzSliderComponent.prototype.generateMarkItems = /**
         * @private
         * @param {?} marks
         * @return {?}
         */
        function (marks) {
            /** @type {?} */
            var marksArray = [];
            for (var key in marks) {
                /** @type {?} */
                var mark = marks[key];
                /** @type {?} */
                var val = typeof key === 'number' ? key : parseFloat(key);
                if (val >= this.nzMin && val <= this.nzMax) {
                    marksArray.push({ value: val, offset: this.valueToOffset(val), config: mark });
                }
            }
            return marksArray.length ? marksArray : null;
        };
        /** @nocollapse */
        NzSliderComponent.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef },
            { type: platform.Platform }
        ]; };
        NzSliderComponent.propDecorators = {
            slider: [{ type: core.ViewChild, args: ['slider', { static: true },] }],
            nzDisabled: [{ type: core.Input }],
            nzDots: [{ type: core.Input }],
            nzIncluded: [{ type: core.Input }],
            nzRange: [{ type: core.Input }],
            nzVertical: [{ type: core.Input }],
            nzDefaultValue: [{ type: core.Input }],
            nzMarks: [{ type: core.Input }],
            nzMax: [{ type: core.Input }],
            nzMin: [{ type: core.Input }],
            nzStep: [{ type: core.Input }],
            nzTooltipVisible: [{ type: core.Input }],
            nzTooltipPlacement: [{ type: core.Input }],
            nzTipFormatter: [{ type: core.Input }],
            nzOnAfterChange: [{ type: core.Output }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzSliderComponent.prototype, "nzDisabled", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzSliderComponent.prototype, "nzDots", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzSliderComponent.prototype, "nzIncluded", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzSliderComponent.prototype, "nzRange", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzSliderComponent.prototype, "nzVertical", void 0);
NzSliderComponent.ɵfac = function NzSliderComponent_Factory(t) { return new (t || NzSliderComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Platform)); };
NzSliderComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzSliderComponent, selectors: [["nz-slider"]], viewQuery: function NzSliderComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.slider = _t.first);
    } }, inputs: { nzDisabled: "nzDisabled", nzDots: "nzDots", nzIncluded: "nzIncluded", nzRange: "nzRange", nzVertical: "nzVertical", nzDefaultValue: "nzDefaultValue", nzMarks: "nzMarks", nzMax: "nzMax", nzMin: "nzMin", nzStep: "nzStep", nzTooltipVisible: "nzTooltipVisible", nzTooltipPlacement: "nzTooltipPlacement", nzTipFormatter: "nzTipFormatter" }, outputs: { nzOnAfterChange: "nzOnAfterChange" }, exportAs: ["nzSlider"], features: [ɵngcc0.ɵɵProvidersFeature([
            {
                provide: forms.NG_VALUE_ACCESSOR,
                useExisting: core.forwardRef(( /**
                 * @return {?}
                 */function () { return NzSliderComponent; })),
                multi: true
            }
        ]), ɵngcc0.ɵɵNgOnChangesFeature], decls: 7, vars: 13, consts: [[1, "ant-slider"], ["slider", ""], [1, "ant-slider-rail"], [3, "nzVertical", "nzIncluded", "nzOffset", "nzLength"], [3, "nzVertical", "nzLowerBound", "nzUpperBound", "nzMarksArray", "nzIncluded", 4, "ngIf"], [3, "nzVertical", "nzOffset", "nzValue", "nzActive", "nzTipFormatter", "nzTooltipVisible", "nzTooltipPlacement", 4, "ngFor", "ngForOf"], [3, "nzVertical", "nzMin", "nzMax", "nzLowerBound", "nzUpperBound", "nzMarksArray", "nzIncluded", 4, "ngIf"], [3, "nzVertical", "nzLowerBound", "nzUpperBound", "nzMarksArray", "nzIncluded"], [3, "nzVertical", "nzOffset", "nzValue", "nzActive", "nzTipFormatter", "nzTooltipVisible", "nzTooltipPlacement"], [3, "nzVertical", "nzMin", "nzMax", "nzLowerBound", "nzUpperBound", "nzMarksArray", "nzIncluded"]], template: function NzSliderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
        ɵngcc0.ɵɵelement(2, "div", 2);
        ɵngcc0.ɵɵelement(3, "nz-slider-track", 3);
        ɵngcc0.ɵɵtemplate(4, NzSliderComponent_nz_slider_step_4_Template, 1, 5, "nz-slider-step", 4);
        ɵngcc0.ɵɵtemplate(5, NzSliderComponent_nz_slider_handle_5_Template, 1, 7, "nz-slider-handle", 5);
        ɵngcc0.ɵɵtemplate(6, NzSliderComponent_nz_slider_marks_6_Template, 1, 7, "nz-slider-marks", 6);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-slider-disabled", ctx.nzDisabled)("ant-slider-vertical", ctx.nzVertical)("ant-slider-with-marks", ctx.marksArray);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("nzVertical", ctx.nzVertical)("nzIncluded", ctx.nzIncluded)("nzOffset", ctx.track.offset)("nzLength", ctx.track.length);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.marksArray);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.handles);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.marksArray);
    } }, directives: function () { return [NzSliderTrackComponent, ɵngcc2.NgIf, ɵngcc2.NgForOf, NzSliderStepComponent,
        NzSliderHandleComponent,
        NzSliderMarksComponent]; }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzSliderComponent, [{
        type: core.Component,
        args: [{
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                selector: 'nz-slider',
                exportAs: 'nzSlider',
                preserveWhitespaces: false,
                providers: [
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(( /**
                         * @return {?}
                         */function () { return NzSliderComponent; })),
                        multi: true
                    }
                ],
                template: "<div #slider\r\n  class=\"ant-slider\"\r\n  [class.ant-slider-disabled]=\"nzDisabled\"\r\n  [class.ant-slider-vertical]=\"nzVertical\"\r\n  [class.ant-slider-with-marks]=\"marksArray\">\r\n  <div class=\"ant-slider-rail\"></div>\r\n  <nz-slider-track\r\n    [nzVertical]=\"nzVertical\"\r\n    [nzIncluded]=\"nzIncluded\"\r\n    [nzOffset]=\"track.offset\"\r\n    [nzLength]=\"track.length\"></nz-slider-track>\r\n  <nz-slider-step\r\n    *ngIf=\"marksArray\"\r\n    [nzVertical]=\"nzVertical\"\r\n    [nzLowerBound]=\"bounds.lower\"\r\n    [nzUpperBound]=\"bounds.upper\"\r\n    [nzMarksArray]=\"marksArray\"\r\n    [nzIncluded]=\"nzIncluded\"></nz-slider-step>\r\n  <nz-slider-handle\r\n    *ngFor=\"let handle of handles\"\r\n    [nzVertical]=\"nzVertical\"\r\n    [nzOffset]=\"handle.offset\"\r\n    [nzValue]=\"handle.value\"\r\n    [nzActive]=\"handle.active\"\r\n    [nzTipFormatter]=\"nzTipFormatter\"\r\n    [nzTooltipVisible]=\"nzTooltipVisible\"\r\n    [nzTooltipPlacement]=\"nzTooltipPlacement\"\r\n    ></nz-slider-handle>\r\n  <nz-slider-marks\r\n    *ngIf=\"marksArray\"\r\n    [nzVertical]=\"nzVertical\"\r\n    [nzMin]=\"nzMin\"\r\n    [nzMax]=\"nzMax\"\r\n    [nzLowerBound]=\"bounds.lower\"\r\n    [nzUpperBound]=\"bounds.upper\"\r\n    [nzMarksArray]=\"marksArray\"\r\n    [nzIncluded]=\"nzIncluded\"></nz-slider-marks>\r\n</div>"
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc1.Platform }]; }, { nzDisabled: [{
            type: core.Input
        }], nzDots: [{
            type: core.Input
        }], nzIncluded: [{
            type: core.Input
        }], nzRange: [{
            type: core.Input
        }], nzVertical: [{
            type: core.Input
        }], nzDefaultValue: [{
            type: core.Input
        }], nzMarks: [{
            type: core.Input
        }], nzMax: [{
            type: core.Input
        }], nzMin: [{
            type: core.Input
        }], nzStep: [{
            type: core.Input
        }], nzTooltipVisible: [{
            type: core.Input
        }], nzTooltipPlacement: [{
            type: core.Input
        }], nzOnAfterChange: [{
            type: core.Output
        }], slider: [{
            type: core.ViewChild,
            args: ['slider', { static: true }]
        }], nzTipFormatter: [{
            type: core.Input
        }] }); })();
        return NzSliderComponent;
    }());
    if (false) {
        /** @type {?} */
        NzSliderComponent.prototype.slider;
        /** @type {?} */
        NzSliderComponent.prototype.nzDisabled;
        /** @type {?} */
        NzSliderComponent.prototype.nzDots;
        /** @type {?} */
        NzSliderComponent.prototype.nzIncluded;
        /** @type {?} */
        NzSliderComponent.prototype.nzRange;
        /** @type {?} */
        NzSliderComponent.prototype.nzVertical;
        /** @type {?} */
        NzSliderComponent.prototype.nzDefaultValue;
        /** @type {?} */
        NzSliderComponent.prototype.nzMarks;
        /** @type {?} */
        NzSliderComponent.prototype.nzMax;
        /** @type {?} */
        NzSliderComponent.prototype.nzMin;
        /** @type {?} */
        NzSliderComponent.prototype.nzStep;
        /** @type {?} */
        NzSliderComponent.prototype.nzTooltipVisible;
        /** @type {?} */
        NzSliderComponent.prototype.nzTooltipPlacement;
        /** @type {?} */
        NzSliderComponent.prototype.nzTipFormatter;
        /** @type {?} */
        NzSliderComponent.prototype.nzOnAfterChange;
        /** @type {?} */
        NzSliderComponent.prototype.value;
        /** @type {?} */
        NzSliderComponent.prototype.sliderDOM;
        /** @type {?} */
        NzSliderComponent.prototype.cacheSliderStart;
        /** @type {?} */
        NzSliderComponent.prototype.cacheSliderLength;
        /** @type {?} */
        NzSliderComponent.prototype.activeValueIndex;
        /** @type {?} */
        NzSliderComponent.prototype.track;
        /** @type {?} */
        NzSliderComponent.prototype.handles;
        /** @type {?} */
        NzSliderComponent.prototype.marksArray;
        /** @type {?} */
        NzSliderComponent.prototype.bounds;
        /** @type {?} */
        NzSliderComponent.prototype.isDragging;
        /**
         * @type {?}
         * @private
         */
        NzSliderComponent.prototype.dragStart$;
        /**
         * @type {?}
         * @private
         */
        NzSliderComponent.prototype.dragMove$;
        /**
         * @type {?}
         * @private
         */
        NzSliderComponent.prototype.dragEnd$;
        /**
         * @type {?}
         * @private
         */
        NzSliderComponent.prototype.dragStart_;
        /**
         * @type {?}
         * @private
         */
        NzSliderComponent.prototype.dragMove_;
        /**
         * @type {?}
         * @private
         */
        NzSliderComponent.prototype.dragEnd_;
        /**
         * @type {?}
         * @private
         */
        NzSliderComponent.prototype.cdr;
        /**
         * @type {?}
         * @private
         */
        NzSliderComponent.prototype.platform;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzSliderHandleComponent = /** @class */ (function () {
        function NzSliderHandleComponent(sliderComponent, cdr) {
            var _this = this;
            this.sliderComponent = sliderComponent;
            this.cdr = cdr;
            this.nzTooltipVisible = 'default';
            this.nzActive = false;
            this.style = {};
            this.hovers_ = new rxjs.Subscription();
            this.enterHandle = (/**
             * @return {?}
             */
            function () {
                if (!_this.sliderComponent.isDragging) {
                    _this.toggleTooltip(true);
                    _this.updateTooltipPosition();
                    _this.cdr.detectChanges();
                }
            });
            this.leaveHandle = (/**
             * @return {?}
             */
            function () {
                if (!_this.sliderComponent.isDragging) {
                    _this.toggleTooltip(false);
                    _this.cdr.detectChanges();
                }
            });
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        NzSliderHandleComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            var _this = this;
            var nzOffset = changes.nzOffset, nzValue = changes.nzValue, nzActive = changes.nzActive, nzTooltipVisible = changes.nzTooltipVisible;
            if (nzOffset) {
                this.updateStyle();
            }
            if (nzValue) {
                this.updateTooltipTitle();
                this.updateTooltipPosition();
            }
            if (nzActive) {
                if (nzActive.currentValue) {
                    this.toggleTooltip(true);
                }
                else {
                    this.toggleTooltip(false);
                }
            }
            if (nzTooltipVisible && nzTooltipVisible.currentValue === 'always') {
                Promise.resolve().then((/**
                 * @return {?}
                 */
                function () { return _this.toggleTooltip(true, true); }));
            }
        };
        /**
         * @return {?}
         */
        NzSliderHandleComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.hovers_.unsubscribe();
        };
        /**
         * @private
         * @param {?} show
         * @param {?=} force
         * @return {?}
         */
        NzSliderHandleComponent.prototype.toggleTooltip = /**
         * @private
         * @param {?} show
         * @param {?=} force
         * @return {?}
         */
        function (show, force) {
            if (force === void 0) { force = false; }
            if (!force && (this.nzTooltipVisible !== 'default' || !this.tooltip)) {
                return;
            }
            if (show) {
                this.tooltip.show();
            }
            else {
                this.tooltip.hide();
            }
        };
        /**
         * @private
         * @return {?}
         */
        NzSliderHandleComponent.prototype.updateTooltipTitle = /**
         * @private
         * @return {?}
         */
        function () {
            this.tooltipTitle = this.nzTipFormatter ? this.nzTipFormatter(this.nzValue) : "" + this.nzValue;
        };
        /**
         * @private
         * @return {?}
         */
        NzSliderHandleComponent.prototype.updateTooltipPosition = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.tooltip) {
                Promise.resolve().then((/**
                 * @return {?}
                 */
                function () { return _this.tooltip.updatePosition(); }));
            }
        };
        /**
         * @private
         * @return {?}
         */
        NzSliderHandleComponent.prototype.updateStyle = /**
         * @private
         * @return {?}
         */
        function () {
            this.style[this.nzVertical ? 'bottom' : 'left'] = this.nzOffset + "%";
            this.cdr.markForCheck();
        };
        /** @nocollapse */
        NzSliderHandleComponent.ctorParameters = function () { return [
            { type: NzSliderComponent },
            { type: core.ChangeDetectorRef }
        ]; };
        NzSliderHandleComponent.propDecorators = {
            tooltip: [{ type: core.ViewChild, args: [tooltip.NzTooltipDirective, { static: false },] }],
            nzVertical: [{ type: core.Input }],
            nzOffset: [{ type: core.Input }],
            nzValue: [{ type: core.Input }],
            nzTooltipVisible: [{ type: core.Input }],
            nzTooltipPlacement: [{ type: core.Input }],
            nzTipFormatter: [{ type: core.Input }],
            nzActive: [{ type: core.Input }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzSliderHandleComponent.prototype, "nzActive", void 0);
NzSliderHandleComponent.ɵfac = function NzSliderHandleComponent_Factory(t) { return new (t || NzSliderHandleComponent)(ɵngcc0.ɵɵdirectiveInject(NzSliderComponent), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
NzSliderHandleComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzSliderHandleComponent, selectors: [["nz-slider-handle"]], viewQuery: function NzSliderHandleComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(tooltip.NzTooltipDirective, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tooltip = _t.first);
    } }, hostBindings: function NzSliderHandleComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("mouseenter", function NzSliderHandleComponent_mouseenter_HostBindingHandler() { return ctx.enterHandle(); })("mouseleave", function NzSliderHandleComponent_mouseleave_HostBindingHandler() { return ctx.leaveHandle(); });
    } }, inputs: { nzTooltipVisible: "nzTooltipVisible", nzActive: "nzActive", nzVertical: "nzVertical", nzOffset: "nzOffset", nzValue: "nzValue", nzTooltipPlacement: "nzTooltipPlacement", nzTipFormatter: "nzTipFormatter" }, exportAs: ["nzSliderHandle"], features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 2, consts: [["nz-tooltip", "", "class", "ant-slider-handle", 3, "ngStyle", "nzTitle", "nzTrigger", "nzPlacement", 4, "ngIf"], ["class", "ant-slider-handle", 3, "ngStyle", 4, "ngIf"], ["nz-tooltip", "", 1, "ant-slider-handle", 3, "ngStyle", "nzTitle", "nzTrigger", "nzPlacement"], [1, "ant-slider-handle", 3, "ngStyle"]], template: function NzSliderHandleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzSliderHandleComponent_div_0_Template, 1, 4, "div", 0);
        ɵngcc0.ɵɵtemplate(1, NzSliderHandleComponent_div_1_Template, 1, 1, "div", 1);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzTipFormatter !== null && ctx.nzTooltipVisible !== "never");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzTipFormatter === null || ctx.nzTooltipVisible === "never");
    } }, directives: [ɵngcc2.NgIf, ɵngcc3.NzTooltipDirective, ɵngcc2.NgStyle], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzSliderHandleComponent, [{
        type: core.Component,
        args: [{
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                selector: 'nz-slider-handle',
                exportAs: 'nzSliderHandle',
                preserveWhitespaces: false,
                template: "<div nz-tooltip\r\n     *ngIf=\"nzTipFormatter !== null && nzTooltipVisible !== 'never'\"\r\n     class=\"ant-slider-handle\"\r\n     [ngStyle]=\"style\"\r\n     [nzTitle]=\"tooltipTitle\"\r\n     [nzTrigger]=\"null\"\r\n     [nzPlacement]=\"nzTooltipPlacement\"></div>\r\n<div *ngIf=\"nzTipFormatter === null || nzTooltipVisible === 'never'\"\r\n     class=\"ant-slider-handle\"\r\n     [ngStyle]=\"style\"></div>\r\n",
                host: {
                    '(mouseenter)': 'enterHandle()',
                    '(mouseleave)': 'leaveHandle()'
                }
            }]
    }], function () { return [{ type: NzSliderComponent }, { type: ɵngcc0.ChangeDetectorRef }]; }, { nzTooltipVisible: [{
            type: core.Input
        }], nzActive: [{
            type: core.Input
        }], tooltip: [{
            type: core.ViewChild,
            args: [tooltip.NzTooltipDirective, { static: false }]
        }], nzVertical: [{
            type: core.Input
        }], nzOffset: [{
            type: core.Input
        }], nzValue: [{
            type: core.Input
        }], nzTooltipPlacement: [{
            type: core.Input
        }], nzTipFormatter: [{
            type: core.Input
        }] }); })();
        return NzSliderHandleComponent;
    }());
    if (false) {
        /** @type {?} */
        NzSliderHandleComponent.prototype.tooltip;
        /** @type {?} */
        NzSliderHandleComponent.prototype.nzVertical;
        /** @type {?} */
        NzSliderHandleComponent.prototype.nzOffset;
        /** @type {?} */
        NzSliderHandleComponent.prototype.nzValue;
        /** @type {?} */
        NzSliderHandleComponent.prototype.nzTooltipVisible;
        /** @type {?} */
        NzSliderHandleComponent.prototype.nzTooltipPlacement;
        /** @type {?} */
        NzSliderHandleComponent.prototype.nzTipFormatter;
        /** @type {?} */
        NzSliderHandleComponent.prototype.nzActive;
        /** @type {?} */
        NzSliderHandleComponent.prototype.tooltipTitle;
        /** @type {?} */
        NzSliderHandleComponent.prototype.style;
        /**
         * @type {?}
         * @private
         */
        NzSliderHandleComponent.prototype.hovers_;
        /** @type {?} */
        NzSliderHandleComponent.prototype.enterHandle;
        /** @type {?} */
        NzSliderHandleComponent.prototype.leaveHandle;
        /**
         * @type {?}
         * @private
         */
        NzSliderHandleComponent.prototype.sliderComponent;
        /**
         * @type {?}
         * @private
         */
        NzSliderHandleComponent.prototype.cdr;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzSliderMarksComponent = /** @class */ (function () {
        function NzSliderMarksComponent() {
            this.nzLowerBound = null;
            this.nzUpperBound = null;
            this.nzVertical = false;
            this.nzIncluded = false;
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        NzSliderMarksComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.nzMarksArray) {
                this.buildMarks();
            }
            if (changes.nzMarksArray || changes.nzLowerBound || changes.nzUpperBound) {
                this.togglePointActive();
            }
        };
        /**
         * @param {?} _index
         * @param {?} mark
         * @return {?}
         */
        NzSliderMarksComponent.prototype.trackById = /**
         * @param {?} _index
         * @param {?} mark
         * @return {?}
         */
        function (_index, mark) {
            return mark.value;
        };
        /**
         * @private
         * @return {?}
         */
        NzSliderMarksComponent.prototype.buildMarks = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var range = this.nzMax - this.nzMin;
            this.marks = this.nzMarksArray.map((/**
             * @param {?} mark
             * @return {?}
             */
            function (mark) {
                var value = mark.value, offset = mark.offset, config = mark.config;
                /** @type {?} */
                var style = _this.getMarkStyles(value, range, config);
                /** @type {?} */
                var label = isConfigAObject(config) ? config.label : config;
                return {
                    label: label,
                    offset: offset,
                    style: style,
                    value: value,
                    config: config,
                    active: false
                };
            }));
        };
        /**
         * @private
         * @param {?} value
         * @param {?} range
         * @param {?} config
         * @return {?}
         */
        NzSliderMarksComponent.prototype.getMarkStyles = /**
         * @private
         * @param {?} value
         * @param {?} range
         * @param {?} config
         * @return {?}
         */
        function (value, range, config) {
            /** @type {?} */
            var style;
            if (this.nzVertical) {
                style = {
                    marginBottom: '-50%',
                    bottom: ((value - this.nzMin) / range) * 100 + "%"
                };
            }
            else {
                style = {
                    transform: "translate3d(-50%, 0, 0)",
                    left: ((value - this.nzMin) / range) * 100 + "%"
                };
            }
            if (isConfigAObject(config) && config.style) {
                style = __assign({}, style, config.style);
            }
            return style;
        };
        /**
         * @private
         * @return {?}
         */
        NzSliderMarksComponent.prototype.togglePointActive = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.marks && this.nzLowerBound !== null && this.nzUpperBound !== null) {
                this.marks.forEach((/**
                 * @param {?} mark
                 * @return {?}
                 */
                function (mark) {
                    /** @type {?} */
                    var value = mark.value;
                    /** @type {?} */
                    var isActive = (!_this.nzIncluded && value === _this.nzUpperBound) ||
                        (_this.nzIncluded && value <= (/** @type {?} */ (_this.nzUpperBound)) && value >= (/** @type {?} */ (_this.nzLowerBound)));
                    mark.active = isActive;
                }));
            }
        };
        NzSliderMarksComponent.propDecorators = {
            nzLowerBound: [{ type: core.Input }],
            nzUpperBound: [{ type: core.Input }],
            nzMarksArray: [{ type: core.Input }],
            nzMin: [{ type: core.Input }],
            nzMax: [{ type: core.Input }],
            nzVertical: [{ type: core.Input }],
            nzIncluded: [{ type: core.Input }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzSliderMarksComponent.prototype, "nzVertical", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzSliderMarksComponent.prototype, "nzIncluded", void 0);
NzSliderMarksComponent.ɵfac = function NzSliderMarksComponent_Factory(t) { return new (t || NzSliderMarksComponent)(); };
NzSliderMarksComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzSliderMarksComponent, selectors: [["nz-slider-marks"]], inputs: { nzLowerBound: "nzLowerBound", nzUpperBound: "nzUpperBound", nzVertical: "nzVertical", nzIncluded: "nzIncluded", nzMarksArray: "nzMarksArray", nzMin: "nzMin", nzMax: "nzMax" }, exportAs: ["nzSliderMarks"], features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 2, consts: [[1, "ant-slider-mark"], ["class", "ant-slider-mark-text", 3, "ant-slider-mark-active", "ngStyle", "innerHTML", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ant-slider-mark-text", 3, "ngStyle", "innerHTML"]], template: function NzSliderMarksComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, NzSliderMarksComponent_span_1_Template, 1, 4, "span", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.marks)("ngForTrackBy", ctx.trackById);
    } }, directives: [ɵngcc2.NgForOf, ɵngcc2.NgStyle], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzSliderMarksComponent, [{
        type: core.Component,
        args: [{
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                preserveWhitespaces: false,
                selector: 'nz-slider-marks',
                exportAs: 'nzSliderMarks',
                template: "<div class=\"ant-slider-mark\">\r\n  <span\r\n    class=\"ant-slider-mark-text\"\r\n    *ngFor=\"let attr of marks; trackBy: trackById\"\r\n    [class.ant-slider-mark-active]=\"attr.active\"\r\n    [ngStyle]=\"attr.style\"\r\n    [innerHTML]=\"attr.label\">\r\n  </span>\r\n</div>"
            }]
    }], function () { return []; }, { nzLowerBound: [{
            type: core.Input
        }], nzUpperBound: [{
            type: core.Input
        }], nzVertical: [{
            type: core.Input
        }], nzIncluded: [{
            type: core.Input
        }], nzMarksArray: [{
            type: core.Input
        }], nzMin: [{
            type: core.Input
        }], nzMax: [{
            type: core.Input
        }] }); })();
        return NzSliderMarksComponent;
    }());
    if (false) {
        /** @type {?} */
        NzSliderMarksComponent.prototype.nzLowerBound;
        /** @type {?} */
        NzSliderMarksComponent.prototype.nzUpperBound;
        /** @type {?} */
        NzSliderMarksComponent.prototype.nzMarksArray;
        /** @type {?} */
        NzSliderMarksComponent.prototype.nzMin;
        /** @type {?} */
        NzSliderMarksComponent.prototype.nzMax;
        /** @type {?} */
        NzSliderMarksComponent.prototype.nzVertical;
        /** @type {?} */
        NzSliderMarksComponent.prototype.nzIncluded;
        /** @type {?} */
        NzSliderMarksComponent.prototype.marks;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzSliderStepComponent = /** @class */ (function () {
        function NzSliderStepComponent() {
            this.nzLowerBound = null;
            this.nzUpperBound = null;
            this.nzVertical = false;
            this.nzIncluded = false;
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        NzSliderStepComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.nzMarksArray) {
                this.buildSteps();
            }
            if (changes.nzMarksArray || changes.nzLowerBound || changes.nzUpperBound) {
                this.togglePointActive();
            }
        };
        /**
         * @param {?} _index
         * @param {?} step
         * @return {?}
         */
        NzSliderStepComponent.prototype.trackById = /**
         * @param {?} _index
         * @param {?} step
         * @return {?}
         */
        function (_index, step) {
            return step.value;
        };
        /**
         * @private
         * @return {?}
         */
        NzSliderStepComponent.prototype.buildSteps = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var orient = this.nzVertical ? 'bottom' : 'left';
            this.steps = this.nzMarksArray.map((/**
             * @param {?} mark
             * @return {?}
             */
            function (mark) {
                var _a;
                var value = mark.value, offset = mark.offset, config = mark.config;
                return {
                    value: value,
                    offset: offset,
                    config: config,
                    active: false,
                    style: (_a = {},
                        _a[orient] = offset + "%",
                        _a)
                };
            }));
        };
        /**
         * @private
         * @return {?}
         */
        NzSliderStepComponent.prototype.togglePointActive = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.steps && this.nzLowerBound !== null && this.nzUpperBound !== null) {
                this.steps.forEach((/**
                 * @param {?} step
                 * @return {?}
                 */
                function (step) {
                    /** @type {?} */
                    var value = step.value;
                    /** @type {?} */
                    var isActive = (!_this.nzIncluded && value === _this.nzUpperBound) ||
                        (_this.nzIncluded && value <= (/** @type {?} */ (_this.nzUpperBound)) && value >= (/** @type {?} */ (_this.nzLowerBound)));
                    step.active = isActive;
                }));
            }
        };
        NzSliderStepComponent.propDecorators = {
            nzLowerBound: [{ type: core.Input }],
            nzUpperBound: [{ type: core.Input }],
            nzMarksArray: [{ type: core.Input }],
            nzVertical: [{ type: core.Input }],
            nzIncluded: [{ type: core.Input }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzSliderStepComponent.prototype, "nzVertical", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzSliderStepComponent.prototype, "nzIncluded", void 0);
NzSliderStepComponent.ɵfac = function NzSliderStepComponent_Factory(t) { return new (t || NzSliderStepComponent)(); };
NzSliderStepComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzSliderStepComponent, selectors: [["nz-slider-step"]], inputs: { nzLowerBound: "nzLowerBound", nzUpperBound: "nzUpperBound", nzVertical: "nzVertical", nzIncluded: "nzIncluded", nzMarksArray: "nzMarksArray" }, exportAs: ["nzSliderStep"], features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 2, consts: [[1, "ant-slider-step"], ["class", "ant-slider-dot", 3, "ant-slider-dot-active", "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ant-slider-dot", 3, "ngStyle"]], template: function NzSliderStepComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, NzSliderStepComponent_span_1_Template, 1, 3, "span", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.steps)("ngForTrackBy", ctx.trackById);
    } }, directives: [ɵngcc2.NgForOf, ɵngcc2.NgStyle], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzSliderStepComponent, [{
        type: core.Component,
        args: [{
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                selector: 'nz-slider-step',
                exportAs: 'nzSliderStep',
                preserveWhitespaces: false,
                template: "<div class=\"ant-slider-step\">\r\n  <span\r\n    class=\"ant-slider-dot\"\r\n    *ngFor=\"let mark of steps; trackBy: trackById\"\r\n    [class.ant-slider-dot-active]=\"mark.active\"\r\n    [ngStyle]=\"mark.style\">\r\n  </span>\r\n</div>"
            }]
    }], function () { return []; }, { nzLowerBound: [{
            type: core.Input
        }], nzUpperBound: [{
            type: core.Input
        }], nzVertical: [{
            type: core.Input
        }], nzIncluded: [{
            type: core.Input
        }], nzMarksArray: [{
            type: core.Input
        }] }); })();
        return NzSliderStepComponent;
    }());
    if (false) {
        /** @type {?} */
        NzSliderStepComponent.prototype.nzLowerBound;
        /** @type {?} */
        NzSliderStepComponent.prototype.nzUpperBound;
        /** @type {?} */
        NzSliderStepComponent.prototype.nzMarksArray;
        /** @type {?} */
        NzSliderStepComponent.prototype.nzVertical;
        /** @type {?} */
        NzSliderStepComponent.prototype.nzIncluded;
        /** @type {?} */
        NzSliderStepComponent.prototype.steps;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function NzSliderTrackStyle() { }
    if (false) {
        /** @type {?|undefined} */
        NzSliderTrackStyle.prototype.bottom;
        /** @type {?|undefined} */
        NzSliderTrackStyle.prototype.height;
        /** @type {?|undefined} */
        NzSliderTrackStyle.prototype.left;
        /** @type {?|undefined} */
        NzSliderTrackStyle.prototype.width;
        /** @type {?|undefined} */
        NzSliderTrackStyle.prototype.visibility;
    }
    var NzSliderTrackComponent = /** @class */ (function () {
        function NzSliderTrackComponent() {
            this.nzVertical = false;
            this.nzIncluded = false;
            this.style = {};
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        NzSliderTrackComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.nzIncluded) {
                this.style.visibility = this.nzIncluded ? 'visible' : 'hidden';
            }
            if (changes.nzVertical || changes.nzOffset || changes.nzLength) {
                if (this.nzVertical) {
                    this.style.bottom = this.nzOffset + "%";
                    this.style.height = this.nzLength + "%";
                    this.style.left = null;
                    this.style.width = null;
                }
                else {
                    this.style.left = this.nzOffset + "%";
                    this.style.width = this.nzLength + "%";
                    this.style.bottom = null;
                    this.style.height = null;
                }
            }
        };
        NzSliderTrackComponent.propDecorators = {
            nzOffset: [{ type: core.Input }],
            nzLength: [{ type: core.Input }],
            nzVertical: [{ type: core.Input }],
            nzIncluded: [{ type: core.Input }]
        };
        __decorate([
            core$1.InputNumber(),
            __metadata("design:type", Number)
        ], NzSliderTrackComponent.prototype, "nzOffset", void 0);
        __decorate([
            core$1.InputNumber(),
            __metadata("design:type", Number)
        ], NzSliderTrackComponent.prototype, "nzLength", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzSliderTrackComponent.prototype, "nzVertical", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzSliderTrackComponent.prototype, "nzIncluded", void 0);
NzSliderTrackComponent.ɵfac = function NzSliderTrackComponent_Factory(t) { return new (t || NzSliderTrackComponent)(); };
NzSliderTrackComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzSliderTrackComponent, selectors: [["nz-slider-track"]], inputs: { nzVertical: "nzVertical", nzIncluded: "nzIncluded", nzOffset: "nzOffset", nzLength: "nzLength" }, exportAs: ["nzSliderTrack"], features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [[1, "ant-slider-track", 3, "ngStyle"]], template: function NzSliderTrackComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngStyle", ctx.style);
    } }, directives: [ɵngcc2.NgStyle], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzSliderTrackComponent, [{
        type: core.Component,
        args: [{
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                selector: 'nz-slider-track',
                exportAs: 'nzSliderTrack',
                preserveWhitespaces: false,
                template: "<div class=\"ant-slider-track\" [ngStyle]=\"style\"></div>"
            }]
    }], function () { return []; }, { nzVertical: [{
            type: core.Input
        }], nzIncluded: [{
            type: core.Input
        }], nzOffset: [{
            type: core.Input
        }], nzLength: [{
            type: core.Input
        }] }); })();
        return NzSliderTrackComponent;
    }());
    if (false) {
        /** @type {?} */
        NzSliderTrackComponent.prototype.nzOffset;
        /** @type {?} */
        NzSliderTrackComponent.prototype.nzLength;
        /** @type {?} */
        NzSliderTrackComponent.prototype.nzVertical;
        /** @type {?} */
        NzSliderTrackComponent.prototype.nzIncluded;
        /** @type {?} */
        NzSliderTrackComponent.prototype.style;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzSliderModule = /** @class */ (function () {
        function NzSliderModule() {
        }
NzSliderModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzSliderModule });
NzSliderModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzSliderModule_Factory(t) { return new (t || NzSliderModule)(); }, imports: [[common.CommonModule, platform.PlatformModule, tooltip.NzToolTipModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzSliderModule, { declarations: [NzSliderComponent,
        NzSliderTrackComponent,
        NzSliderHandleComponent,
        NzSliderStepComponent,
        NzSliderMarksComponent], imports: [ɵngcc2.CommonModule, ɵngcc1.PlatformModule, ɵngcc3.NzToolTipModule], exports: [NzSliderComponent,
        NzSliderTrackComponent,
        NzSliderHandleComponent,
        NzSliderStepComponent,
        NzSliderMarksComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzSliderModule, [{
        type: core.NgModule,
        args: [{
                exports: [
                    NzSliderComponent,
                    NzSliderTrackComponent,
                    NzSliderHandleComponent,
                    NzSliderStepComponent,
                    NzSliderMarksComponent
                ],
                declarations: [
                    NzSliderComponent,
                    NzSliderTrackComponent,
                    NzSliderHandleComponent,
                    NzSliderStepComponent,
                    NzSliderMarksComponent
                ],
                imports: [common.CommonModule, platform.PlatformModule, tooltip.NzToolTipModule]
            }]
    }], function () { return []; }, null); })();
        return NzSliderModule;
    }());

    exports.Marks = Marks;
    exports.NzSliderComponent = NzSliderComponent;
    exports.NzSliderHandleComponent = NzSliderHandleComponent;
    exports.NzSliderMarksComponent = NzSliderMarksComponent;
    exports.NzSliderModule = NzSliderModule;
    exports.NzSliderStepComponent = NzSliderStepComponent;
    exports.NzSliderTrackComponent = NzSliderTrackComponent;
    exports.isConfigAObject = isConfigAObject;
    exports.isValueARange = isValueARange;

    Object.defineProperty(exports, '__esModule', { value: true });

})));


//# sourceMappingURL=ng-zorro-antd-slider.umd.js.map
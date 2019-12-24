(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/platform'), require('@angular/core'), require('@angular/forms'), require('rxjs'), require('rxjs/operators'), require('ng-zorro-antd/core'), require('@angular/common'), require('ng-zorro-antd/tooltip')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/slider', ['exports', '@angular/cdk/platform', '@angular/core', '@angular/forms', 'rxjs', 'rxjs/operators', 'ng-zorro-antd/core', '@angular/common', 'ng-zorro-antd/tooltip'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].slider = {}), global.ng.cdk.platform, global.ng.core, global.ng.forms, global.rxjs, global.rxjs.operators, global['ng-zorro-antd'].core, global.ng.common, global['ng-zorro-antd'].tooltip));
}(this, (function (exports, platform, core, forms, rxjs, operators, core$1, common, tooltip) { 'use strict';

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
    var Marks = /** @class */ (function () {
        function Marks() {
        }
        return Marks;
    }());
    function isValueARange(value) {
        if (value instanceof Array) {
            return value.length === 2;
        }
        else {
            return false;
        }
    }
    function isConfigAObject(config) {
        return config instanceof Object;
    }

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    function getValueTypeNotMatchError() {
        return new Error("The \"nzRange\" can't match the \"ngModel\"'s type, please check these properties: \"nzRange\", \"ngModel\", \"nzDefaultValue\".");
    }

    var _c0 = ["slider"];
    function NzSliderComponent_nz_slider_step_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "nz-slider-step", 7);
    } if (rf & 2) {
        var ctx_r752 = core.ɵɵnextContext();
        core.ɵɵproperty("nzVertical", ctx_r752.nzVertical)("nzLowerBound", ctx_r752.bounds.lower)("nzUpperBound", ctx_r752.bounds.upper)("nzMarksArray", ctx_r752.marksArray)("nzIncluded", ctx_r752.nzIncluded);
    } }
    function NzSliderComponent_nz_slider_handle_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "nz-slider-handle", 8);
    } if (rf & 2) {
        var handle_r755 = ctx.$implicit;
        var ctx_r753 = core.ɵɵnextContext();
        core.ɵɵproperty("nzVertical", ctx_r753.nzVertical)("nzOffset", handle_r755.offset)("nzValue", handle_r755.value)("nzActive", handle_r755.active)("nzTipFormatter", ctx_r753.nzTipFormatter)("nzTooltipVisible", ctx_r753.nzTooltipVisible)("nzTooltipPlacement", ctx_r753.nzTooltipPlacement);
    } }
    function NzSliderComponent_nz_slider_marks_6_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "nz-slider-marks", 9);
    } if (rf & 2) {
        var ctx_r754 = core.ɵɵnextContext();
        core.ɵɵproperty("nzVertical", ctx_r754.nzVertical)("nzMin", ctx_r754.nzMin)("nzMax", ctx_r754.nzMax)("nzLowerBound", ctx_r754.bounds.lower)("nzUpperBound", ctx_r754.bounds.upper)("nzMarksArray", ctx_r754.marksArray)("nzIncluded", ctx_r754.nzIncluded);
    } }
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
            this.track = { offset: null, length: null }; // Track's offset and length
            this.bounds = { lower: null, upper: null }; // now for nz-slider-step
            this.isDragging = false; // Current dragging state
        }
        NzSliderComponent.prototype.ngOnInit = function () {
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
        NzSliderComponent.prototype.ngOnChanges = function (changes) {
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
        NzSliderComponent.prototype.ngOnDestroy = function () {
            this.unsubscribeDrag();
        };
        NzSliderComponent.prototype.writeValue = function (val) {
            this.setValue(val, true);
        };
        NzSliderComponent.prototype.onValueChange = function (_value) { };
        NzSliderComponent.prototype.onTouched = function () { };
        NzSliderComponent.prototype.registerOnChange = function (fn) {
            this.onValueChange = fn;
        };
        NzSliderComponent.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        NzSliderComponent.prototype.setDisabledState = function (isDisabled) {
            this.nzDisabled = isDisabled;
            this.toggleDragDisabled(isDisabled);
        };
        NzSliderComponent.prototype.setValue = function (value, isWriteValue) {
            if (isWriteValue === void 0) { isWriteValue = false; }
            if (isWriteValue) {
                this.value = this.formatValue(value);
                this.updateTrackAndHandles();
            }
            else if (!this.valuesEqual(this.value, value)) {
                this.value = value;
                this.updateTrackAndHandles();
                this.onValueChange(this.getValue(true));
            }
        };
        NzSliderComponent.prototype.getValue = function (cloneAndSort) {
            if (cloneAndSort === void 0) { cloneAndSort = false; }
            if (cloneAndSort && this.value && isValueARange(this.value)) {
                return core$1.shallowCopyArray(this.value).sort(function (a, b) { return a - b; });
            }
            return this.value;
        };
        /**
         * Clone & sort current value and convert them to offsets, then return the new one.
         */
        NzSliderComponent.prototype.getValueToOffset = function (value) {
            var _this = this;
            var normalizedValue = value;
            if (typeof normalizedValue === 'undefined') {
                normalizedValue = this.getValue(true);
            }
            return isValueARange(normalizedValue) ? normalizedValue.map(function (val) { return _this.valueToOffset(val); }) : this.valueToOffset(normalizedValue);
        };
        /**
         * Find the closest value to be activated (only for range = true).
         */
        NzSliderComponent.prototype.setActiveValueIndex = function (pointerValue) {
            var value = this.getValue();
            if (isValueARange(value)) {
                var minimal_1 = null;
                var gap_1;
                var activeIndex_1 = -1;
                value.forEach(function (val, index) {
                    gap_1 = Math.abs(pointerValue - val);
                    if (minimal_1 === null || gap_1 < minimal_1) {
                        minimal_1 = gap_1;
                        activeIndex_1 = index;
                    }
                });
                this.activeValueIndex = activeIndex_1;
            }
        };
        NzSliderComponent.prototype.setActiveValue = function (pointerValue) {
            if (isValueARange(this.value)) {
                var newValue = core$1.shallowCopyArray(this.value);
                newValue[this.activeValueIndex] = pointerValue;
                this.setValue(newValue);
            }
            else {
                this.setValue(pointerValue);
            }
        };
        /**
         * Update track and handles' position and length.
         */
        NzSliderComponent.prototype.updateTrackAndHandles = function () {
            var _a, _b;
            var value = this.getValue();
            var offset = this.getValueToOffset(value);
            var valueSorted = this.getValue(true);
            var offsetSorted = this.getValueToOffset(valueSorted);
            var boundParts = isValueARange(valueSorted) ? valueSorted : [0, valueSorted];
            var trackParts = isValueARange(offsetSorted) ? [offsetSorted[0], offsetSorted[1] - offsetSorted[0]] : [0, offsetSorted];
            this.handles.forEach(function (handle, index) {
                handle.offset = isValueARange(offset) ? offset[index] : offset;
                handle.value = isValueARange(value) ? value[index] : value || 0;
            });
            _a = __read(boundParts, 2), this.bounds.lower = _a[0], this.bounds.upper = _a[1];
            _b = __read(trackParts, 2), this.track.offset = _b[0], this.track.length = _b[1];
            this.cdr.markForCheck();
        };
        NzSliderComponent.prototype.onDragStart = function (value) {
            this.toggleDragMoving(true);
            this.cacheSliderProperty();
            this.setActiveValueIndex(value);
            this.setActiveValue(value);
            this.showHandleTooltip(this.nzRange ? this.activeValueIndex : 0);
        };
        NzSliderComponent.prototype.onDragMove = function (value) {
            this.setActiveValue(value);
            this.cdr.markForCheck();
        };
        NzSliderComponent.prototype.onDragEnd = function () {
            this.nzOnAfterChange.emit(this.getValue(true));
            this.toggleDragMoving(false);
            this.cacheSliderProperty(true);
            this.hideAllHandleTooltip();
            this.cdr.markForCheck();
        };
        /**
         * Create user interactions handles.
         */
        NzSliderComponent.prototype.createDraggingObservables = function () {
            var _this = this;
            var sliderDOM = this.sliderDOM;
            var orientField = this.nzVertical ? 'pageY' : 'pageX';
            var mouse = {
                start: 'mousedown',
                move: 'mousemove',
                end: 'mouseup',
                pluckKey: [orientField]
            };
            var touch = {
                start: 'touchstart',
                move: 'touchmove',
                end: 'touchend',
                pluckKey: ['touches', '0', orientField],
                filter: function (e) { return e instanceof TouchEvent; }
            };
            [mouse, touch].forEach(function (source) {
                var start = source.start, move = source.move, end = source.end, pluckKey = source.pluckKey, _a = source.filter, filterFunc = _a === void 0 ? function () { return true; } : _a;
                source.startPlucked$ = rxjs.fromEvent(sliderDOM, start).pipe(operators.filter(filterFunc), operators.tap(core$1.silentEvent), operators.pluck.apply(void 0, __spread(pluckKey)), operators.map(function (position) { return _this.findClosestValue(position); }));
                source.end$ = rxjs.fromEvent(document, end);
                source.moveResolved$ = rxjs.fromEvent(document, move).pipe(operators.filter(filterFunc), operators.tap(core$1.silentEvent), operators.pluck.apply(void 0, __spread(pluckKey)), operators.distinctUntilChanged(), operators.map(function (position) { return _this.findClosestValue(position); }), operators.distinctUntilChanged(), operators.takeUntil(source.end$));
            });
            this.dragStart$ = rxjs.merge(mouse.startPlucked$, touch.startPlucked$);
            this.dragMove$ = rxjs.merge(mouse.moveResolved$, touch.moveResolved$);
            this.dragEnd$ = rxjs.merge(mouse.end$, touch.end$);
        };
        NzSliderComponent.prototype.subscribeDrag = function (periods) {
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
        NzSliderComponent.prototype.unsubscribeDrag = function (periods) {
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
        NzSliderComponent.prototype.toggleDragMoving = function (movable) {
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
        NzSliderComponent.prototype.toggleDragDisabled = function (disabled) {
            if (disabled) {
                this.unsubscribeDrag();
            }
            else {
                this.subscribeDrag(['start']);
            }
        };
        NzSliderComponent.prototype.findClosestValue = function (position) {
            var sliderStart = this.getSliderStartPosition();
            var sliderLength = this.getSliderLength();
            var ratio = core$1.ensureNumberInRange((position - sliderStart) / sliderLength, 0, 1);
            var val = (this.nzMax - this.nzMin) * (this.nzVertical ? 1 - ratio : ratio) + this.nzMin;
            var points = this.nzMarks === null ? [] : Object.keys(this.nzMarks).map(parseFloat);
            if (this.nzStep !== null && !this.nzDots) {
                var closestOne = Math.round(val / this.nzStep) * this.nzStep;
                points.push(closestOne);
            }
            var gaps = points.map(function (point) { return Math.abs(val - point); });
            var closest = points[gaps.indexOf(Math.min.apply(Math, __spread(gaps)))];
            return this.nzStep === null ? closest : parseFloat(closest.toFixed(core$1.getPrecision(this.nzStep)));
        };
        NzSliderComponent.prototype.valueToOffset = function (value) {
            return core$1.getPercent(this.nzMin, this.nzMax, value);
        };
        NzSliderComponent.prototype.getSliderStartPosition = function () {
            if (this.cacheSliderStart !== null) {
                return this.cacheSliderStart;
            }
            var offset = core$1.getElementOffset(this.sliderDOM);
            return this.nzVertical ? offset.top : offset.left;
        };
        NzSliderComponent.prototype.getSliderLength = function () {
            if (this.cacheSliderLength !== null) {
                return this.cacheSliderLength;
            }
            var sliderDOM = this.sliderDOM;
            return this.nzVertical ? sliderDOM.clientHeight : sliderDOM.clientWidth;
        };
        /**
         * Cache DOM layout/reflow operations for performance (may not necessary?)
         */
        NzSliderComponent.prototype.cacheSliderProperty = function (remove) {
            if (remove === void 0) { remove = false; }
            this.cacheSliderStart = remove ? null : this.getSliderStartPosition();
            this.cacheSliderLength = remove ? null : this.getSliderLength();
        };
        NzSliderComponent.prototype.formatValue = function (value) {
            var _this = this;
            var res = value;
            if (!this.assertValueValid(value)) {
                res = this.nzDefaultValue === null ? (this.nzRange ? [this.nzMin, this.nzMax] : this.nzMin) : this.nzDefaultValue;
            }
            else {
                res = isValueARange(value)
                    ? value.map(function (val) { return core$1.ensureNumberInRange(val, _this.nzMin, _this.nzMax); })
                    : core$1.ensureNumberInRange(value, this.nzMin, this.nzMax);
            }
            return res;
        };
        /**
         * Check if value is valid and throw error if value-type/range not match.
         */
        NzSliderComponent.prototype.assertValueValid = function (value) {
            if (!Array.isArray(value) && isNaN(typeof value !== 'number' ? parseFloat(value) : value)) {
                return false;
            }
            return this.assertValueTypeMatch(value);
        };
        /**
         * Assert that if `this.nzRange` is `true`, value is also a range, vice versa.
         */
        NzSliderComponent.prototype.assertValueTypeMatch = function (value) {
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
        NzSliderComponent.prototype.valuesEqual = function (valA, valB) {
            if (typeof valA !== typeof valB) {
                return false;
            }
            return isValueARange(valA) && isValueARange(valB) ? core$1.arraysEqual(valA, valB) : valA === valB;
        };
        /**
         * Show one handle's tooltip and hide others'.
         */
        NzSliderComponent.prototype.showHandleTooltip = function (handleIndex) {
            if (handleIndex === void 0) { handleIndex = 0; }
            this.handles.forEach(function (handle, index) {
                handle.active = index === handleIndex;
            });
        };
        NzSliderComponent.prototype.hideAllHandleTooltip = function () {
            this.handles.forEach(function (handle) { return (handle.active = false); });
        };
        NzSliderComponent.prototype.generateHandles = function (amount) {
            return Array(amount)
                .fill(0)
                .map(function () { return ({ offset: null, value: null, active: false }); });
        };
        NzSliderComponent.prototype.generateMarkItems = function (marks) {
            var marksArray = [];
            for (var key in marks) {
                var mark = marks[key];
                var val = typeof key === 'number' ? key : parseFloat(key);
                if (val >= this.nzMin && val <= this.nzMax) {
                    marksArray.push({ value: val, offset: this.valueToOffset(val), config: mark });
                }
            }
            return marksArray.length ? marksArray : null;
        };
        /** @nocollapse */ NzSliderComponent.ɵfac = function NzSliderComponent_Factory(t) { return new (t || NzSliderComponent)(core.ɵɵdirectiveInject(core.ChangeDetectorRef), core.ɵɵdirectiveInject(platform.Platform)); };
        /** @nocollapse */ NzSliderComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzSliderComponent, selectors: [["nz-slider"]], viewQuery: function NzSliderComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵstaticViewQuery(_c0, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.slider = _t.first);
            } }, inputs: { nzDisabled: "nzDisabled", nzDots: "nzDots", nzIncluded: "nzIncluded", nzRange: "nzRange", nzVertical: "nzVertical", nzDefaultValue: "nzDefaultValue", nzMarks: "nzMarks", nzMax: "nzMax", nzMin: "nzMin", nzStep: "nzStep", nzTooltipVisible: "nzTooltipVisible", nzTooltipPlacement: "nzTooltipPlacement", nzTipFormatter: "nzTipFormatter" }, outputs: { nzOnAfterChange: "nzOnAfterChange" }, exportAs: ["nzSlider"], features: [core.ɵɵProvidersFeature([
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef((function () { return NzSliderComponent; })),
                        multi: true
                    }
                ]), core.ɵɵNgOnChangesFeature()], decls: 7, vars: 10, consts: [[1, "ant-slider"], ["slider", ""], [1, "ant-slider-rail"], [3, "nzVertical", "nzIncluded", "nzOffset", "nzLength"], [3, "nzVertical", "nzLowerBound", "nzUpperBound", "nzMarksArray", "nzIncluded", 4, "ngIf"], [3, "nzVertical", "nzOffset", "nzValue", "nzActive", "nzTipFormatter", "nzTooltipVisible", "nzTooltipPlacement", 4, "ngFor", "ngForOf"], [3, "nzVertical", "nzMin", "nzMax", "nzLowerBound", "nzUpperBound", "nzMarksArray", "nzIncluded", 4, "ngIf"], [3, "nzVertical", "nzLowerBound", "nzUpperBound", "nzMarksArray", "nzIncluded"], [3, "nzVertical", "nzOffset", "nzValue", "nzActive", "nzTipFormatter", "nzTooltipVisible", "nzTooltipPlacement"], [3, "nzVertical", "nzMin", "nzMax", "nzLowerBound", "nzUpperBound", "nzMarksArray", "nzIncluded"]], template: function NzSliderComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "div", 0, 1);
                core.ɵɵelement(2, "div", 2);
                core.ɵɵelement(3, "nz-slider-track", 3);
                core.ɵɵtemplate(4, NzSliderComponent_nz_slider_step_4_Template, 1, 5, "nz-slider-step", 4);
                core.ɵɵtemplate(5, NzSliderComponent_nz_slider_handle_5_Template, 1, 7, "nz-slider-handle", 5);
                core.ɵɵtemplate(6, NzSliderComponent_nz_slider_marks_6_Template, 1, 7, "nz-slider-marks", 6);
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵclassProp("ant-slider-disabled", ctx.nzDisabled)("ant-slider-vertical", ctx.nzVertical)("ant-slider-with-marks", ctx.marksArray);
                core.ɵɵadvance(3);
                core.ɵɵproperty("nzVertical", ctx.nzVertical)("nzIncluded", ctx.nzIncluded)("nzOffset", ctx.track.offset)("nzLength", ctx.track.length);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.marksArray);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngForOf", ctx.handles);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.marksArray);
            } }, encapsulation: 2, changeDetection: 0 });
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
        return NzSliderComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzSliderComponent, [{
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
                            useExisting: core.forwardRef((function () { return NzSliderComponent; })),
                            multi: true
                        }
                    ],
                    templateUrl: './nz-slider.component.html'
                }]
        }], function () { return [{ type: core.ChangeDetectorRef }, { type: platform.Platform }]; }, { slider: [{
                type: core.ViewChild,
                args: ['slider', { static: true }]
            }], nzDisabled: [{
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
            }], nzTipFormatter: [{
                type: core.Input
            }], nzOnAfterChange: [{
                type: core.Output
            }] }); })();

    function NzSliderHandleComponent_div_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "div", 2);
    } if (rf & 2) {
        var ctx_r756 = core.ɵɵnextContext();
        core.ɵɵproperty("ngStyle", ctx_r756.style)("nzTitle", ctx_r756.tooltipTitle)("nzTrigger", null)("nzPlacement", ctx_r756.nzTooltipPlacement);
    } }
    function NzSliderHandleComponent_div_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "div", 3);
    } if (rf & 2) {
        var ctx_r757 = core.ɵɵnextContext();
        core.ɵɵproperty("ngStyle", ctx_r757.style);
    } }
    var NzSliderHandleComponent = /** @class */ (function () {
        function NzSliderHandleComponent(sliderComponent, cdr) {
            var _this = this;
            this.sliderComponent = sliderComponent;
            this.cdr = cdr;
            this.nzTooltipVisible = 'default';
            this.nzActive = false;
            this.style = {};
            this.hovers_ = new rxjs.Subscription();
            this.enterHandle = function () {
                if (!_this.sliderComponent.isDragging) {
                    _this.toggleTooltip(true);
                    _this.updateTooltipPosition();
                    _this.cdr.detectChanges();
                }
            };
            this.leaveHandle = function () {
                if (!_this.sliderComponent.isDragging) {
                    _this.toggleTooltip(false);
                    _this.cdr.detectChanges();
                }
            };
        }
        NzSliderHandleComponent.prototype.ngOnChanges = function (changes) {
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
                Promise.resolve().then(function () { return _this.toggleTooltip(true, true); });
            }
        };
        NzSliderHandleComponent.prototype.ngOnDestroy = function () {
            this.hovers_.unsubscribe();
        };
        NzSliderHandleComponent.prototype.toggleTooltip = function (show, force) {
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
        NzSliderHandleComponent.prototype.updateTooltipTitle = function () {
            this.tooltipTitle = this.nzTipFormatter ? this.nzTipFormatter(this.nzValue) : "" + this.nzValue;
        };
        NzSliderHandleComponent.prototype.updateTooltipPosition = function () {
            var _this = this;
            if (this.tooltip) {
                Promise.resolve().then(function () { return _this.tooltip.updatePosition(); });
            }
        };
        NzSliderHandleComponent.prototype.updateStyle = function () {
            this.style[this.nzVertical ? 'bottom' : 'left'] = this.nzOffset + "%";
            this.cdr.markForCheck();
        };
        /** @nocollapse */ NzSliderHandleComponent.ɵfac = function NzSliderHandleComponent_Factory(t) { return new (t || NzSliderHandleComponent)(core.ɵɵdirectiveInject(NzSliderComponent), core.ɵɵdirectiveInject(core.ChangeDetectorRef)); };
        /** @nocollapse */ NzSliderHandleComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzSliderHandleComponent, selectors: [["nz-slider-handle"]], viewQuery: function NzSliderHandleComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵviewQuery(tooltip.NzTooltipDirective, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.tooltip = _t.first);
            } }, hostBindings: function NzSliderHandleComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
                core.ɵɵlistener("mouseenter", function NzSliderHandleComponent_mouseenter_HostBindingHandler($event) { return ctx.enterHandle(); })("mouseleave", function NzSliderHandleComponent_mouseleave_HostBindingHandler($event) { return ctx.leaveHandle(); });
            } }, inputs: { nzVertical: "nzVertical", nzOffset: "nzOffset", nzValue: "nzValue", nzTooltipVisible: "nzTooltipVisible", nzTooltipPlacement: "nzTooltipPlacement", nzTipFormatter: "nzTipFormatter", nzActive: "nzActive" }, exportAs: ["nzSliderHandle"], features: [core.ɵɵNgOnChangesFeature()], decls: 2, vars: 2, consts: [["nz-tooltip", "", "class", "ant-slider-handle", 3, "ngStyle", "nzTitle", "nzTrigger", "nzPlacement", 4, "ngIf"], ["class", "ant-slider-handle", 3, "ngStyle", 4, "ngIf"], ["nz-tooltip", "", 1, "ant-slider-handle", 3, "ngStyle", "nzTitle", "nzTrigger", "nzPlacement"], [1, "ant-slider-handle", 3, "ngStyle"]], template: function NzSliderHandleComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵtemplate(0, NzSliderHandleComponent_div_0_Template, 1, 4, "div", 0);
                core.ɵɵtemplate(1, NzSliderHandleComponent_div_1_Template, 1, 1, "div", 1);
            } if (rf & 2) {
                core.ɵɵproperty("ngIf", ctx.nzTipFormatter !== null && ctx.nzTooltipVisible !== "never");
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.nzTipFormatter === null || ctx.nzTooltipVisible === "never");
            } }, directives: [common.NgIf, tooltip.NzTooltipDirective, common.NgStyle], encapsulation: 2, changeDetection: 0 });
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzSliderHandleComponent.prototype, "nzActive", void 0);
        return NzSliderHandleComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzSliderHandleComponent, [{
            type: core.Component,
            args: [{
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    selector: 'nz-slider-handle',
                    exportAs: 'nzSliderHandle',
                    preserveWhitespaces: false,
                    templateUrl: './nz-slider-handle.component.html',
                    host: {
                        '(mouseenter)': 'enterHandle()',
                        '(mouseleave)': 'leaveHandle()'
                    }
                }]
        }], function () { return [{ type: NzSliderComponent }, { type: core.ChangeDetectorRef }]; }, { tooltip: [{
                type: core.ViewChild,
                args: [tooltip.NzTooltipDirective, { static: false }]
            }], nzVertical: [{
                type: core.Input
            }], nzOffset: [{
                type: core.Input
            }], nzValue: [{
                type: core.Input
            }], nzTooltipVisible: [{
                type: core.Input
            }], nzTooltipPlacement: [{
                type: core.Input
            }], nzTipFormatter: [{
                type: core.Input
            }], nzActive: [{
                type: core.Input
            }] }); })();

    function NzSliderMarksComponent_span_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "span", 2);
    } if (rf & 2) {
        var attr_r759 = ctx.$implicit;
        core.ɵɵclassProp("ant-slider-mark-active", attr_r759.active);
        core.ɵɵproperty("ngStyle", attr_r759.style)("innerHTML", attr_r759.label, core.ɵɵsanitizeHtml);
    } }
    var NzSliderMarksComponent = /** @class */ (function () {
        function NzSliderMarksComponent() {
            this.nzLowerBound = null;
            this.nzUpperBound = null;
            this.nzVertical = false;
            this.nzIncluded = false;
        }
        NzSliderMarksComponent.prototype.ngOnChanges = function (changes) {
            if (changes.nzMarksArray) {
                this.buildMarks();
            }
            if (changes.nzMarksArray || changes.nzLowerBound || changes.nzUpperBound) {
                this.togglePointActive();
            }
        };
        NzSliderMarksComponent.prototype.trackById = function (_index, mark) {
            return mark.value;
        };
        NzSliderMarksComponent.prototype.buildMarks = function () {
            var _this = this;
            var range = this.nzMax - this.nzMin;
            this.marks = this.nzMarksArray.map(function (mark) {
                var value = mark.value, offset = mark.offset, config = mark.config;
                var style = _this.getMarkStyles(value, range, config);
                var label = isConfigAObject(config) ? config.label : config;
                return {
                    label: label,
                    offset: offset,
                    style: style,
                    value: value,
                    config: config,
                    active: false
                };
            });
        };
        NzSliderMarksComponent.prototype.getMarkStyles = function (value, range, config) {
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
                style = __assign(__assign({}, style), config.style);
            }
            return style;
        };
        NzSliderMarksComponent.prototype.togglePointActive = function () {
            var _this = this;
            if (this.marks && this.nzLowerBound !== null && this.nzUpperBound !== null) {
                this.marks.forEach(function (mark) {
                    var value = mark.value;
                    var isActive = (!_this.nzIncluded && value === _this.nzUpperBound) ||
                        (_this.nzIncluded && value <= _this.nzUpperBound && value >= _this.nzLowerBound);
                    mark.active = isActive;
                });
            }
        };
        /** @nocollapse */ NzSliderMarksComponent.ɵfac = function NzSliderMarksComponent_Factory(t) { return new (t || NzSliderMarksComponent)(); };
        /** @nocollapse */ NzSliderMarksComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzSliderMarksComponent, selectors: [["nz-slider-marks"]], inputs: { nzLowerBound: "nzLowerBound", nzUpperBound: "nzUpperBound", nzMarksArray: "nzMarksArray", nzMin: "nzMin", nzMax: "nzMax", nzVertical: "nzVertical", nzIncluded: "nzIncluded" }, exportAs: ["nzSliderMarks"], features: [core.ɵɵNgOnChangesFeature()], decls: 2, vars: 2, consts: [[1, "ant-slider-mark"], ["class", "ant-slider-mark-text", 3, "ant-slider-mark-active", "ngStyle", "innerHTML", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ant-slider-mark-text", 3, "ngStyle", "innerHTML"]], template: function NzSliderMarksComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "div", 0);
                core.ɵɵtemplate(1, NzSliderMarksComponent_span_1_Template, 1, 3, "span", 1);
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngForOf", ctx.marks)("ngForTrackBy", ctx.trackById);
            } }, directives: [common.NgForOf, common.NgStyle], encapsulation: 2, changeDetection: 0 });
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzSliderMarksComponent.prototype, "nzVertical", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzSliderMarksComponent.prototype, "nzIncluded", void 0);
        return NzSliderMarksComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzSliderMarksComponent, [{
            type: core.Component,
            args: [{
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    selector: 'nz-slider-marks',
                    exportAs: 'nzSliderMarks',
                    templateUrl: './nz-slider-marks.component.html'
                }]
        }], null, { nzLowerBound: [{
                type: core.Input
            }], nzUpperBound: [{
                type: core.Input
            }], nzMarksArray: [{
                type: core.Input
            }], nzMin: [{
                type: core.Input
            }], nzMax: [{
                type: core.Input
            }], nzVertical: [{
                type: core.Input
            }], nzIncluded: [{
                type: core.Input
            }] }); })();

    function NzSliderStepComponent_span_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "span", 2);
    } if (rf & 2) {
        var mark_r761 = ctx.$implicit;
        core.ɵɵclassProp("ant-slider-dot-active", mark_r761.active);
        core.ɵɵproperty("ngStyle", mark_r761.style);
    } }
    var NzSliderStepComponent = /** @class */ (function () {
        function NzSliderStepComponent() {
            this.nzLowerBound = null;
            this.nzUpperBound = null;
            this.nzVertical = false;
            this.nzIncluded = false;
        }
        NzSliderStepComponent.prototype.ngOnChanges = function (changes) {
            if (changes.nzMarksArray) {
                this.buildSteps();
            }
            if (changes.nzMarksArray || changes.nzLowerBound || changes.nzUpperBound) {
                this.togglePointActive();
            }
        };
        NzSliderStepComponent.prototype.trackById = function (_index, step) {
            return step.value;
        };
        NzSliderStepComponent.prototype.buildSteps = function () {
            var orient = this.nzVertical ? 'bottom' : 'left';
            this.steps = this.nzMarksArray.map(function (mark) {
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
            });
        };
        NzSliderStepComponent.prototype.togglePointActive = function () {
            var _this = this;
            if (this.steps && this.nzLowerBound !== null && this.nzUpperBound !== null) {
                this.steps.forEach(function (step) {
                    var value = step.value;
                    var isActive = (!_this.nzIncluded && value === _this.nzUpperBound) ||
                        (_this.nzIncluded && value <= _this.nzUpperBound && value >= _this.nzLowerBound);
                    step.active = isActive;
                });
            }
        };
        /** @nocollapse */ NzSliderStepComponent.ɵfac = function NzSliderStepComponent_Factory(t) { return new (t || NzSliderStepComponent)(); };
        /** @nocollapse */ NzSliderStepComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzSliderStepComponent, selectors: [["nz-slider-step"]], inputs: { nzLowerBound: "nzLowerBound", nzUpperBound: "nzUpperBound", nzMarksArray: "nzMarksArray", nzVertical: "nzVertical", nzIncluded: "nzIncluded" }, exportAs: ["nzSliderStep"], features: [core.ɵɵNgOnChangesFeature()], decls: 2, vars: 2, consts: [[1, "ant-slider-step"], ["class", "ant-slider-dot", 3, "ant-slider-dot-active", "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ant-slider-dot", 3, "ngStyle"]], template: function NzSliderStepComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "div", 0);
                core.ɵɵtemplate(1, NzSliderStepComponent_span_1_Template, 1, 2, "span", 1);
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngForOf", ctx.steps)("ngForTrackBy", ctx.trackById);
            } }, directives: [common.NgForOf, common.NgStyle], encapsulation: 2, changeDetection: 0 });
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzSliderStepComponent.prototype, "nzVertical", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzSliderStepComponent.prototype, "nzIncluded", void 0);
        return NzSliderStepComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzSliderStepComponent, [{
            type: core.Component,
            args: [{
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    selector: 'nz-slider-step',
                    exportAs: 'nzSliderStep',
                    preserveWhitespaces: false,
                    templateUrl: './nz-slider-step.component.html'
                }]
        }], null, { nzLowerBound: [{
                type: core.Input
            }], nzUpperBound: [{
                type: core.Input
            }], nzMarksArray: [{
                type: core.Input
            }], nzVertical: [{
                type: core.Input
            }], nzIncluded: [{
                type: core.Input
            }] }); })();

    var NzSliderTrackComponent = /** @class */ (function () {
        function NzSliderTrackComponent() {
            this.nzVertical = false;
            this.nzIncluded = false;
            this.style = {};
        }
        NzSliderTrackComponent.prototype.ngOnChanges = function (changes) {
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
        /** @nocollapse */ NzSliderTrackComponent.ɵfac = function NzSliderTrackComponent_Factory(t) { return new (t || NzSliderTrackComponent)(); };
        /** @nocollapse */ NzSliderTrackComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzSliderTrackComponent, selectors: [["nz-slider-track"]], inputs: { nzOffset: "nzOffset", nzLength: "nzLength", nzVertical: "nzVertical", nzIncluded: "nzIncluded" }, exportAs: ["nzSliderTrack"], features: [core.ɵɵNgOnChangesFeature()], decls: 1, vars: 1, consts: [[1, "ant-slider-track", 3, "ngStyle"]], template: function NzSliderTrackComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelement(0, "div", 0);
            } if (rf & 2) {
                core.ɵɵproperty("ngStyle", ctx.style);
            } }, directives: [common.NgStyle], encapsulation: 2, changeDetection: 0 });
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
        return NzSliderTrackComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzSliderTrackComponent, [{
            type: core.Component,
            args: [{
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    selector: 'nz-slider-track',
                    exportAs: 'nzSliderTrack',
                    preserveWhitespaces: false,
                    templateUrl: './nz-slider-track.component.html'
                }]
        }], null, { nzOffset: [{
                type: core.Input
            }], nzLength: [{
                type: core.Input
            }], nzVertical: [{
                type: core.Input
            }], nzIncluded: [{
                type: core.Input
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzSliderModule = /** @class */ (function () {
        function NzSliderModule() {
        }
        /** @nocollapse */ NzSliderModule.ɵmod = core.ɵɵdefineNgModule({ type: NzSliderModule });
        /** @nocollapse */ NzSliderModule.ɵinj = core.ɵɵdefineInjector({ factory: function NzSliderModule_Factory(t) { return new (t || NzSliderModule)(); }, imports: [[common.CommonModule, platform.PlatformModule, tooltip.NzToolTipModule]] });
        return NzSliderModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(NzSliderModule, { declarations: [NzSliderComponent, NzSliderTrackComponent, NzSliderHandleComponent, NzSliderStepComponent, NzSliderMarksComponent], imports: [common.CommonModule, platform.PlatformModule, tooltip.NzToolTipModule], exports: [NzSliderComponent, NzSliderTrackComponent, NzSliderHandleComponent, NzSliderStepComponent, NzSliderMarksComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzSliderModule, [{
            type: core.NgModule,
            args: [{
                    exports: [NzSliderComponent, NzSliderTrackComponent, NzSliderHandleComponent, NzSliderStepComponent, NzSliderMarksComponent],
                    declarations: [NzSliderComponent, NzSliderTrackComponent, NzSliderHandleComponent, NzSliderStepComponent, NzSliderMarksComponent],
                    imports: [common.CommonModule, platform.PlatformModule, tooltip.NzToolTipModule]
                }]
        }], null, null); })();
    core.ɵɵsetComponentScope(NzSliderComponent, [NzSliderComponent, NzSliderTrackComponent, NzSliderHandleComponent, NzSliderStepComponent, NzSliderMarksComponent, common.NgClass, common.NgComponentOutlet, common.NgForOf, common.NgIf, common.NgTemplateOutlet, common.NgStyle, common.NgSwitch, common.NgSwitchCase, common.NgSwitchDefault, common.NgPlural, common.NgPluralCase, tooltip.NzToolTipComponent, tooltip.NzTooltipDirective], [common.AsyncPipe, common.UpperCasePipe, common.LowerCasePipe, common.JsonPipe, common.SlicePipe, common.DecimalPipe, common.PercentPipe, common.TitleCasePipe, common.CurrencyPipe, common.DatePipe, common.I18nPluralPipe, common.I18nSelectPipe, common.KeyValuePipe]);

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

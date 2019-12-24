(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/overlay'), require('@angular/core'), require('@angular/forms'), require('ng-zorro-antd/core'), require('ng-zorro-antd/i18n'), require('ng-zorro-antd/icon'), require('@angular/common'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/time-picker', ['exports', '@angular/cdk/overlay', '@angular/core', '@angular/forms', 'ng-zorro-antd/core', 'ng-zorro-antd/i18n', 'ng-zorro-antd/icon', '@angular/common', 'rxjs', 'rxjs/operators'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd']['time-picker'] = {}), global.ng.cdk.overlay, global.ng.core, global.ng.forms, global['ng-zorro-antd'].core, global['ng-zorro-antd'].i18n, global['ng-zorro-antd'].icon, global.ng.common, global.rxjs, global.rxjs.operators));
}(this, (function (exports, overlay, core, forms, core$1, i18n, icon, common, rxjs, operators) { 'use strict';

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
    var NzTimeValueAccessorDirective = /** @class */ (function () {
        function NzTimeValueAccessorDirective(dateHelper, elementRef) {
            this.dateHelper = dateHelper;
            this.elementRef = elementRef;
        }
        NzTimeValueAccessorDirective.prototype.keyup = function () {
            this.changed();
        };
        NzTimeValueAccessorDirective.prototype.blur = function () {
            this.touched();
        };
        NzTimeValueAccessorDirective.prototype.changed = function () {
            if (this._onChange) {
                var value = this.dateHelper.parseTime(this.elementRef.nativeElement.value);
                this._onChange(value);
            }
        };
        NzTimeValueAccessorDirective.prototype.touched = function () {
            if (this._onTouch) {
                this._onTouch();
            }
        };
        NzTimeValueAccessorDirective.prototype.setRange = function () {
            this.elementRef.nativeElement.focus();
            this.elementRef.nativeElement.setSelectionRange(0, this.elementRef.nativeElement.value.length);
        };
        NzTimeValueAccessorDirective.prototype.writeValue = function (value) {
            this.elementRef.nativeElement.value = this.dateHelper.format(value, this.nzTime);
        };
        NzTimeValueAccessorDirective.prototype.registerOnChange = function (fn) {
            this._onChange = fn;
        };
        NzTimeValueAccessorDirective.prototype.registerOnTouched = function (fn) {
            this._onTouch = fn;
        };
        /** @nocollapse */ NzTimeValueAccessorDirective.ɵfac = function NzTimeValueAccessorDirective_Factory(t) { return new (t || NzTimeValueAccessorDirective)(core.ɵɵdirectiveInject(i18n.DateHelperService), core.ɵɵdirectiveInject(core.ElementRef)); };
        /** @nocollapse */ NzTimeValueAccessorDirective.ɵdir = core.ɵɵdefineDirective({ type: NzTimeValueAccessorDirective, selectors: [["input", "nzTime", ""]], hostBindings: function NzTimeValueAccessorDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
                core.ɵɵlistener("keyup", function NzTimeValueAccessorDirective_keyup_HostBindingHandler($event) { return ctx.keyup(); })("blur", function NzTimeValueAccessorDirective_blur_HostBindingHandler($event) { return ctx.blur(); });
            } }, inputs: { nzTime: "nzTime" }, exportAs: ["nzTime"], features: [core.ɵɵProvidersFeature([{ provide: forms.NG_VALUE_ACCESSOR, useExisting: NzTimeValueAccessorDirective, multi: true }])] });
        return NzTimeValueAccessorDirective;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzTimeValueAccessorDirective, [{
            type: core.Directive,
            args: [{
                    selector: 'input[nzTime]',
                    exportAs: 'nzTime',
                    providers: [{ provide: forms.NG_VALUE_ACCESSOR, useExisting: NzTimeValueAccessorDirective, multi: true }]
                }]
        }], function () { return [{ type: i18n.DateHelperService }, { type: core.ElementRef }]; }, { nzTime: [{
                type: core.Input
            }], keyup: [{
                type: core.HostListener,
                args: ['keyup']
            }], blur: [{
                type: core.HostListener,
                args: ['blur']
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var TimeHolder = /** @class */ (function () {
        function TimeHolder() {
            this._seconds = undefined;
            this._hours = undefined;
            this._minutes = undefined;
            this._selected12Hours = undefined;
            this._use12Hours = false;
            this._defaultOpenValue = new Date();
            this._changes = new rxjs.Subject();
        }
        TimeHolder.prototype.setDefaultValueIfNil = function () {
            if (!core$1.isNotNil(this._value)) {
                this._value = new Date(this.defaultOpenValue);
            }
        };
        TimeHolder.prototype.setMinutes = function (value, disabled) {
            if (disabled) {
                return this;
            }
            this.setDefaultValueIfNil();
            this.minutes = value;
            return this;
        };
        TimeHolder.prototype.setHours = function (value, disabled) {
            if (disabled) {
                return this;
            }
            this.setDefaultValueIfNil();
            this.hours = value;
            return this;
        };
        TimeHolder.prototype.setSeconds = function (value, disabled) {
            if (disabled) {
                return this;
            }
            this.setDefaultValueIfNil();
            this.seconds = value;
            return this;
        };
        TimeHolder.prototype.setUse12Hours = function (value) {
            this._use12Hours = value;
            return this;
        };
        Object.defineProperty(TimeHolder.prototype, "changes", {
            get: function () {
                return this._changes.asObservable();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeHolder.prototype, "value", {
            get: function () {
                return this._value;
            },
            set: function (value) {
                if (value !== this._value) {
                    this._value = value;
                    if (core$1.isNotNil(this._value)) {
                        this._hours = this._value.getHours();
                        this._minutes = this._value.getMinutes();
                        this._seconds = this._value.getSeconds();
                        if (this._use12Hours && core$1.isNotNil(this._hours)) {
                            this._selected12Hours = this._hours >= 12 ? 'PM' : 'AM';
                        }
                    }
                    else {
                        this._clear();
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        TimeHolder.prototype.setValue = function (value, use12Hours) {
            if (core$1.isNotNil(use12Hours)) {
                this._use12Hours = use12Hours;
            }
            this.value = value;
            return this;
        };
        TimeHolder.prototype.clear = function () {
            this._clear();
            this.update();
        };
        Object.defineProperty(TimeHolder.prototype, "isEmpty", {
            get: function () {
                return !(core$1.isNotNil(this._hours) || core$1.isNotNil(this._minutes) || core$1.isNotNil(this._seconds));
            },
            enumerable: true,
            configurable: true
        });
        TimeHolder.prototype._clear = function () {
            this._hours = undefined;
            this._minutes = undefined;
            this._seconds = undefined;
            this._selected12Hours = undefined;
        };
        TimeHolder.prototype.update = function () {
            if (this.isEmpty) {
                this._value = undefined;
            }
            else {
                if (!core$1.isNotNil(this._hours)) {
                    this._hours = this.defaultHours;
                }
                else {
                    this._value.setHours(this.hours);
                }
                if (!core$1.isNotNil(this._minutes)) {
                    this._minutes = this.defaultMinutes;
                }
                else {
                    this._value.setMinutes(this.minutes);
                }
                if (!core$1.isNotNil(this._seconds)) {
                    this._seconds = this.defaultSeconds;
                }
                else {
                    this._value.setSeconds(this.seconds);
                }
                if (this._use12Hours) {
                    if (!core$1.isNotNil(this._selected12Hours)) {
                        this._selected12Hours = this.default12Hours;
                    }
                    if (this.selected12Hours === 'PM' && this._hours < 12) {
                        this._hours += 12;
                        this._value.setHours(this._hours);
                    }
                    if (this.selected12Hours === 'AM' && this._hours >= 12) {
                        this._hours -= 12;
                        this._value.setHours(this._hours);
                    }
                }
                this._value = new Date(this._value);
            }
            this.changed();
        };
        TimeHolder.prototype.changed = function () {
            this._changes.next(this._value);
        };
        Object.defineProperty(TimeHolder.prototype, "viewHours", {
            /**
             * @description
             * UI view hours
             * Get viewHours which is selected in `time-picker-panel` and its range is [12, 1, 2, ..., 11]
             */
            get: function () {
                return this._use12Hours && core$1.isNotNil(this._hours) ? this.calculateViewHour(this._hours) : this._hours;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeHolder.prototype, "realHours", {
            /**
             * @description
             * Value hours
             * Get realHours and its range is [0, 1, 2, ..., 22, 23]
             */
            get: function () {
                return this._hours;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeHolder.prototype, "hours", {
            /**
             * @description
             * Same as realHours
             * @see realHours
             */
            get: function () {
                return this._hours;
            },
            /**
             * @description
             * Set viewHours to realHours
             */
            set: function (value) {
                if (value !== this._hours) {
                    if (this._use12Hours) {
                        if (this.selected12Hours === 'PM' && value !== 12) {
                            this._hours = value + 12;
                        }
                        else if (this.selected12Hours === 'AM' && value === 12) {
                            this._hours = 0;
                        }
                        else {
                            this._hours = value;
                        }
                    }
                    else {
                        this._hours = value;
                    }
                    this.update();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeHolder.prototype, "minutes", {
            get: function () {
                return this._minutes;
            },
            set: function (value) {
                if (value !== this._minutes) {
                    this._minutes = value;
                    this.update();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeHolder.prototype, "seconds", {
            get: function () {
                return this._seconds;
            },
            set: function (value) {
                if (value !== this._seconds) {
                    this._seconds = value;
                    this.update();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeHolder.prototype, "selected12Hours", {
            get: function () {
                return this._selected12Hours;
            },
            set: function (value) {
                if (value.toUpperCase() !== this._selected12Hours) {
                    this._selected12Hours = value.toUpperCase();
                    this.update();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeHolder.prototype, "defaultOpenValue", {
            get: function () {
                return this._defaultOpenValue;
            },
            set: function (value) {
                if (this._defaultOpenValue !== value) {
                    this._defaultOpenValue = value;
                    this.update();
                }
            },
            enumerable: true,
            configurable: true
        });
        TimeHolder.prototype.setDefaultOpenValue = function (value) {
            this.defaultOpenValue = value;
            return this;
        };
        Object.defineProperty(TimeHolder.prototype, "defaultViewHours", {
            /**
             * @description
             * Get deafultViewHours when defaultOpenValue is setted
             * @see viewHours
             */
            get: function () {
                var hours = this._defaultOpenValue.getHours();
                return this._use12Hours && core$1.isNotNil(hours) ? this.calculateViewHour(hours) : hours;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeHolder.prototype, "defaultRealHours", {
            /**
             * @description
             * Get defaultRealHours when defaultOpenValue is setted
             * @see realHours
             */
            get: function () {
                return this._defaultOpenValue.getHours();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeHolder.prototype, "defaultHours", {
            /**
             * @description
             * Same as defaultRealHours
             */
            get: function () {
                return this._defaultOpenValue.getHours();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeHolder.prototype, "defaultMinutes", {
            get: function () {
                return this._defaultOpenValue.getMinutes();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeHolder.prototype, "defaultSeconds", {
            get: function () {
                return this._defaultOpenValue.getSeconds();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeHolder.prototype, "default12Hours", {
            get: function () {
                return this._defaultOpenValue.getHours() >= 12 ? 'PM' : 'AM';
            },
            enumerable: true,
            configurable: true
        });
        TimeHolder.prototype.calculateViewHour = function (value) {
            var selected12Hours = this._selected12Hours || this.default12Hours;
            if (selected12Hours === 'PM' && value > 12) {
                return value - 12;
            }
            if (selected12Hours === 'AM' && value === 0) {
                return 12;
            }
            return value;
        };
        return TimeHolder;
    }());

    var _c0 = ["hourListElement"];
    var _c1 = ["minuteListElement"];
    var _c2 = ["secondListElement"];
    var _c3 = ["use12HoursListElement"];
    function NzTimePickerPanelComponent_div_5_ng_container_3_li_1_Template(rf, ctx) { if (rf & 1) {
        var _r931 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "li", 5);
        core.ɵɵlistener("click", function NzTimePickerPanelComponent_div_5_ng_container_3_li_1_Template_li_click_0_listener($event) { core.ɵɵrestoreView(_r931); var hour_r927 = core.ɵɵnextContext().$implicit; var ctx_r929 = core.ɵɵnextContext(2); return ctx_r929.selectHour(hour_r927); });
        core.ɵɵtext(1);
        core.ɵɵpipe(2, "number");
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var hour_r927 = core.ɵɵnextContext().$implicit;
        var ctx_r928 = core.ɵɵnextContext(2);
        core.ɵɵclassMapInterpolate2("\n                ", ctx_r928.isSelectedHour(hour_r927) ? ctx_r928.prefixCls + "-select-option-selected" : "", "\n                ", hour_r927.disabled ? ctx_r928.prefixCls + "-select-option-disabled" : "", "\n              ");
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind2(2, 5, hour_r927.index, "2.0-0"), " ");
    } }
    function NzTimePickerPanelComponent_div_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, NzTimePickerPanelComponent_div_5_ng_container_3_li_1_Template, 3, 8, "li", 4);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var hour_r927 = ctx.$implicit;
        var ctx_r926 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !(ctx_r926.nzHideDisabledOptions && hour_r927.disabled));
    } }
    function NzTimePickerPanelComponent_div_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", null, 2);
        core.ɵɵelementStart(2, "ul");
        core.ɵɵtemplate(3, NzTimePickerPanelComponent_div_5_ng_container_3_Template, 2, 1, "ng-container", 3);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r920 = core.ɵɵnextContext();
        core.ɵɵclassMapInterpolate1("", ctx_r920.prefixCls, "-select");
        core.ɵɵadvance(3);
        core.ɵɵproperty("ngForOf", ctx_r920.hourRange);
    } }
    function NzTimePickerPanelComponent_div_6_ng_container_3_li_1_Template(rf, ctx) { if (rf & 1) {
        var _r939 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "li", 5);
        core.ɵɵlistener("click", function NzTimePickerPanelComponent_div_6_ng_container_3_li_1_Template_li_click_0_listener($event) { core.ɵɵrestoreView(_r939); var minute_r935 = core.ɵɵnextContext().$implicit; var ctx_r937 = core.ɵɵnextContext(2); return ctx_r937.selectMinute(minute_r935); });
        core.ɵɵtext(1);
        core.ɵɵpipe(2, "number");
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var minute_r935 = core.ɵɵnextContext().$implicit;
        var ctx_r936 = core.ɵɵnextContext(2);
        core.ɵɵclassMapInterpolate2("\n                ", ctx_r936.isSelectedMinute(minute_r935) ? ctx_r936.prefixCls + "-select-option-selected" : "", "\n                ", minute_r935.disabled ? ctx_r936.prefixCls + "-select-option-disabled" : "", "\n              ");
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind2(2, 5, minute_r935.index, "2.0-0"), " ");
    } }
    function NzTimePickerPanelComponent_div_6_ng_container_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, NzTimePickerPanelComponent_div_6_ng_container_3_li_1_Template, 3, 8, "li", 4);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var minute_r935 = ctx.$implicit;
        var ctx_r934 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !(ctx_r934.nzHideDisabledOptions && minute_r935.disabled));
    } }
    function NzTimePickerPanelComponent_div_6_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", null, 6);
        core.ɵɵelementStart(2, "ul");
        core.ɵɵtemplate(3, NzTimePickerPanelComponent_div_6_ng_container_3_Template, 2, 1, "ng-container", 3);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r921 = core.ɵɵnextContext();
        core.ɵɵclassMapInterpolate1("", ctx_r921.prefixCls, "-select");
        core.ɵɵadvance(3);
        core.ɵɵproperty("ngForOf", ctx_r921.minuteRange);
    } }
    function NzTimePickerPanelComponent_div_7_ng_container_3_li_1_Template(rf, ctx) { if (rf & 1) {
        var _r947 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "li", 5);
        core.ɵɵlistener("click", function NzTimePickerPanelComponent_div_7_ng_container_3_li_1_Template_li_click_0_listener($event) { core.ɵɵrestoreView(_r947); var second_r943 = core.ɵɵnextContext().$implicit; var ctx_r945 = core.ɵɵnextContext(2); return ctx_r945.selectSecond(second_r943); });
        core.ɵɵtext(1);
        core.ɵɵpipe(2, "number");
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var second_r943 = core.ɵɵnextContext().$implicit;
        var ctx_r944 = core.ɵɵnextContext(2);
        core.ɵɵclassMapInterpolate2("\n                ", ctx_r944.isSelectedSecond(second_r943) ? ctx_r944.prefixCls + "-select-option-selected" : "", "\n                ", second_r943.disabled ? ctx_r944.prefixCls + "-select-option-disabled" : "", "\n              ");
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind2(2, 5, second_r943.index, "2.0-0"), " ");
    } }
    function NzTimePickerPanelComponent_div_7_ng_container_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, NzTimePickerPanelComponent_div_7_ng_container_3_li_1_Template, 3, 8, "li", 4);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var second_r943 = ctx.$implicit;
        var ctx_r942 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !(ctx_r942.nzHideDisabledOptions && second_r943.disabled));
    } }
    function NzTimePickerPanelComponent_div_7_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", null, 7);
        core.ɵɵelementStart(2, "ul");
        core.ɵɵtemplate(3, NzTimePickerPanelComponent_div_7_ng_container_3_Template, 2, 1, "ng-container", 3);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r922 = core.ɵɵnextContext();
        core.ɵɵclassMapInterpolate1("", ctx_r922.prefixCls, "-select");
        core.ɵɵadvance(3);
        core.ɵɵproperty("ngForOf", ctx_r922.secondRange);
    } }
    function NzTimePickerPanelComponent_div_8_ng_container_3_li_1_Template(rf, ctx) { if (rf & 1) {
        var _r955 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "li", 5);
        core.ɵɵlistener("click", function NzTimePickerPanelComponent_div_8_ng_container_3_li_1_Template_li_click_0_listener($event) { core.ɵɵrestoreView(_r955); var range_r951 = core.ɵɵnextContext().$implicit; var ctx_r953 = core.ɵɵnextContext(2); return ctx_r953.select12Hours(range_r951); });
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var range_r951 = core.ɵɵnextContext().$implicit;
        var ctx_r952 = core.ɵɵnextContext(2);
        core.ɵɵclassMapInterpolate1("\n                ", ctx_r952.isSelected12Hours(range_r951) ? ctx_r952.prefixCls + "-select-option-selected" : "", "\n              ");
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", range_r951.value, " ");
    } }
    function NzTimePickerPanelComponent_div_8_ng_container_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, NzTimePickerPanelComponent_div_8_ng_container_3_li_1_Template, 2, 4, "li", 4);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r950 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !ctx_r950.nzHideDisabledOptions);
    } }
    function NzTimePickerPanelComponent_div_8_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", null, 8);
        core.ɵɵelementStart(2, "ul");
        core.ɵɵtemplate(3, NzTimePickerPanelComponent_div_8_ng_container_3_Template, 2, 1, "ng-container", 3);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r923 = core.ɵɵnextContext();
        core.ɵɵclassMapInterpolate1("", ctx_r923.prefixCls, "-select");
        core.ɵɵadvance(3);
        core.ɵɵproperty("ngForOf", ctx_r923.use12HoursRange);
    } }
    function NzTimePickerPanelComponent_div_9_ng_template_1_Template(rf, ctx) { }
    function NzTimePickerPanelComponent_div_9_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div");
        core.ɵɵtemplate(1, NzTimePickerPanelComponent_div_9_ng_template_1_Template, 0, 0, "ng-template", 9);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r924 = core.ɵɵnextContext();
        core.ɵɵclassMapInterpolate1("", ctx_r924.prefixCls, "-addon");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", ctx_r924.nzAddOn);
    } }
    function makeRange(length, step, start) {
        if (step === void 0) { step = 1; }
        if (start === void 0) { start = 0; }
        return new Array(Math.ceil(length / step)).fill(0).map(function (_, i) { return (i + start) * step; });
    }
    var NzTimePickerPanelComponent = /** @class */ (function () {
        function NzTimePickerPanelComponent(element, updateCls, cdr) {
            this.element = element;
            this.updateCls = updateCls;
            this.cdr = cdr;
            this._nzHourStep = 1;
            this._nzMinuteStep = 1;
            this._nzSecondStep = 1;
            this.unsubscribe$ = new rxjs.Subject();
            this._format = 'HH:mm:ss';
            this._allowEmpty = true;
            this.prefixCls = 'ant-time-picker-panel';
            this.time = new TimeHolder();
            this.hourEnabled = true;
            this.minuteEnabled = true;
            this.secondEnabled = true;
            this.enabledColumns = 3;
            this.nzInDatePicker = false; // If inside a date-picker, more diff works need to be done
            this.nzHideDisabledOptions = false;
            this.nzUse12Hours = false;
            this.opened = false;
            this.nzDefaultOpenValue = new Date();
        }
        Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzAllowEmpty", {
            get: function () {
                return this._allowEmpty;
            },
            set: function (value) {
                if (core$1.isNotNil(value)) {
                    this._allowEmpty = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzDisabledHours", {
            get: function () {
                return this._disabledHours;
            },
            set: function (value) {
                this._disabledHours = value;
                if (this._disabledHours) {
                    this.buildHours();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzDisabledMinutes", {
            get: function () {
                return this._disabledMinutes;
            },
            set: function (value) {
                if (core$1.isNotNil(value)) {
                    this._disabledMinutes = value;
                    this.buildMinutes();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzDisabledSeconds", {
            get: function () {
                return this._disabledSeconds;
            },
            set: function (value) {
                if (core$1.isNotNil(value)) {
                    this._disabledSeconds = value;
                    this.buildSeconds();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTimePickerPanelComponent.prototype, "format", {
            get: function () {
                return this._format;
            },
            set: function (value) {
                if (core$1.isNotNil(value)) {
                    this._format = value;
                    this.enabledColumns = 0;
                    var charSet = new Set(value);
                    this.hourEnabled = charSet.has('H') || charSet.has('h');
                    this.minuteEnabled = charSet.has('m');
                    this.secondEnabled = charSet.has('s');
                    if (this.hourEnabled) {
                        this.enabledColumns++;
                    }
                    if (this.minuteEnabled) {
                        this.enabledColumns++;
                    }
                    if (this.secondEnabled) {
                        this.enabledColumns++;
                    }
                    if (this.nzUse12Hours) {
                        this.build12Hours();
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzHourStep", {
            get: function () {
                return this._nzHourStep;
            },
            set: function (value) {
                if (core$1.isNotNil(value)) {
                    this._nzHourStep = value;
                    this.buildHours();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzMinuteStep", {
            get: function () {
                return this._nzMinuteStep;
            },
            set: function (value) {
                if (core$1.isNotNil(value)) {
                    this._nzMinuteStep = value;
                    this.buildMinutes();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzSecondStep", {
            get: function () {
                return this._nzSecondStep;
            },
            set: function (value) {
                if (core$1.isNotNil(value)) {
                    this._nzSecondStep = value;
                    this.buildSeconds();
                }
            },
            enumerable: true,
            configurable: true
        });
        NzTimePickerPanelComponent.prototype.selectInputRange = function () {
            var _this = this;
            setTimeout(function () {
                if (_this.nzTimeValueAccessorDirective) {
                    _this.nzTimeValueAccessorDirective.setRange();
                }
            });
        };
        NzTimePickerPanelComponent.prototype.buildHours = function () {
            var _this = this;
            var hourRanges = 24;
            var disabledHours = this.nzDisabledHours && this.nzDisabledHours();
            var startIndex = 0;
            if (this.nzUse12Hours) {
                hourRanges = 12;
                if (disabledHours) {
                    if (this.time.selected12Hours === 'PM') {
                        /**
                         * Filter and transform hours which greater or equal to 12
                         * [0, 1, 2, ..., 12, 13, 14, 15, ..., 23] => [12, 1, 2, 3, ..., 11]
                         */
                        disabledHours = disabledHours.filter(function (i) { return i >= 12; }).map(function (i) { return (i > 12 ? i - 12 : i); });
                    }
                    else {
                        /**
                         * Filter and transform hours which less than 12
                         * [0, 1, 2,..., 12, 13, 14, 15, ...23] => [12, 1, 2, 3, ..., 11]
                         */
                        disabledHours = disabledHours.filter(function (i) { return i < 12 || i === 24; }).map(function (i) { return (i === 24 || i === 0 ? 12 : i); });
                    }
                }
                startIndex = 1;
            }
            this.hourRange = makeRange(hourRanges, this.nzHourStep, startIndex).map(function (r) {
                return {
                    index: r,
                    disabled: _this.nzDisabledHours && disabledHours.indexOf(r) !== -1
                };
            });
            if (this.nzUse12Hours && this.hourRange[this.hourRange.length - 1].index === 12) {
                var temp = __spread(this.hourRange);
                temp.unshift(temp[temp.length - 1]);
                temp.splice(temp.length - 1, 1);
                this.hourRange = temp;
            }
        };
        NzTimePickerPanelComponent.prototype.buildMinutes = function () {
            var _this = this;
            this.minuteRange = makeRange(60, this.nzMinuteStep).map(function (r) {
                return {
                    index: r,
                    disabled: _this.nzDisabledMinutes && _this.nzDisabledMinutes(_this.time.hours).indexOf(r) !== -1
                };
            });
        };
        NzTimePickerPanelComponent.prototype.buildSeconds = function () {
            var _this = this;
            this.secondRange = makeRange(60, this.nzSecondStep).map(function (r) {
                return {
                    index: r,
                    disabled: _this.nzDisabledSeconds && _this.nzDisabledSeconds(_this.time.hours, _this.time.minutes).indexOf(r) !== -1
                };
            });
        };
        NzTimePickerPanelComponent.prototype.build12Hours = function () {
            var isUpperForamt = this._format.includes('A');
            this.use12HoursRange = [
                {
                    index: 0,
                    value: isUpperForamt ? 'AM' : 'am'
                },
                {
                    index: 1,
                    value: isUpperForamt ? 'PM' : 'pm'
                }
            ];
        };
        NzTimePickerPanelComponent.prototype.buildTimes = function () {
            this.buildHours();
            this.buildMinutes();
            this.buildSeconds();
            this.build12Hours();
        };
        NzTimePickerPanelComponent.prototype.selectHour = function (hour) {
            this.time.setHours(hour.index, hour.disabled);
            this.scrollToSelected(this.hourListElement.nativeElement, hour.index, 120, 'hour');
            if (this._disabledMinutes) {
                this.buildMinutes();
            }
            if (this._disabledSeconds || this._disabledMinutes) {
                this.buildSeconds();
            }
        };
        NzTimePickerPanelComponent.prototype.selectMinute = function (minute) {
            this.time.setMinutes(minute.index, minute.disabled);
            this.scrollToSelected(this.minuteListElement.nativeElement, minute.index, 120, 'minute');
            if (this._disabledSeconds) {
                this.buildSeconds();
            }
        };
        NzTimePickerPanelComponent.prototype.selectSecond = function (second) {
            this.time.setSeconds(second.index, second.disabled);
            this.scrollToSelected(this.secondListElement.nativeElement, second.index, 120, 'second');
        };
        NzTimePickerPanelComponent.prototype.select12Hours = function (value) {
            this.time.selected12Hours = value.value;
            if (this._disabledHours) {
                this.buildHours();
            }
            if (this._disabledMinutes) {
                this.buildMinutes();
            }
            if (this._disabledSeconds) {
                this.buildSeconds();
            }
            this.scrollToSelected(this.use12HoursListElement.nativeElement, value.index, 120, '12-hour');
        };
        NzTimePickerPanelComponent.prototype.scrollToSelected = function (instance, index, duration, unit) {
            if (duration === void 0) { duration = 0; }
            var transIndex = this.translateIndex(index, unit);
            var currentOption = (instance.children[0].children[transIndex] || instance.children[0].children[0]);
            this.scrollTo(instance, currentOption.offsetTop, duration);
        };
        NzTimePickerPanelComponent.prototype.translateIndex = function (index, unit) {
            if (unit === 'hour') {
                var disabledHours = this.nzDisabledHours && this.nzDisabledHours();
                return this.calcIndex(disabledHours, this.hourRange.map(function (item) { return item.index; }).indexOf(index));
            }
            else if (unit === 'minute') {
                var disabledMinutes = this.nzDisabledMinutes && this.nzDisabledMinutes(this.time.hours);
                return this.calcIndex(disabledMinutes, this.minuteRange.map(function (item) { return item.index; }).indexOf(index));
            }
            else if (unit === 'second') {
                // second
                var disabledSeconds = this.nzDisabledSeconds && this.nzDisabledSeconds(this.time.hours, this.time.minutes);
                return this.calcIndex(disabledSeconds, this.secondRange.map(function (item) { return item.index; }).indexOf(index));
            }
            else {
                // 12-hour
                return this.calcIndex([], this.use12HoursRange.map(function (item) { return item.index; }).indexOf(index));
            }
        };
        NzTimePickerPanelComponent.prototype.scrollTo = function (element, to, duration) {
            var _this = this;
            if (duration <= 0) {
                element.scrollTop = to;
                return;
            }
            var difference = to - element.scrollTop;
            var perTick = (difference / duration) * 10;
            core$1.reqAnimFrame(function () {
                element.scrollTop = element.scrollTop + perTick;
                if (element.scrollTop === to) {
                    return;
                }
                _this.scrollTo(element, to, duration - 10);
            });
        };
        NzTimePickerPanelComponent.prototype.calcIndex = function (array, index) {
            if (array && array.length && this.nzHideDisabledOptions) {
                return (index -
                    array.reduce(function (pre, value) {
                        return pre + (value < index ? 1 : 0);
                    }, 0));
            }
            else {
                return index;
            }
        };
        NzTimePickerPanelComponent.prototype.changed = function () {
            if (this.onChange) {
                this.onChange(this.time.value);
            }
        };
        NzTimePickerPanelComponent.prototype.touched = function () {
            if (this.onTouch) {
                this.onTouch();
            }
        };
        NzTimePickerPanelComponent.prototype.setClassMap = function () {
            var _a;
            this.updateCls.updateHostClass(this.element.nativeElement, (_a = {},
                _a["" + this.prefixCls] = true,
                _a[this.prefixCls + "-column-" + this.enabledColumns] = this.nzInDatePicker ? false : true,
                _a[this.prefixCls + "-narrow"] = this.enabledColumns < 3,
                _a[this.prefixCls + "-placement-bottomLeft"] = this.nzInDatePicker ? false : true,
                _a));
        };
        NzTimePickerPanelComponent.prototype.isSelectedHour = function (hour) {
            return hour.index === this.time.viewHours || (!core$1.isNotNil(this.time.viewHours) && hour.index === this.time.defaultViewHours);
        };
        NzTimePickerPanelComponent.prototype.isSelectedMinute = function (minute) {
            return minute.index === this.time.minutes || (!core$1.isNotNil(this.time.minutes) && minute.index === this.time.defaultMinutes);
        };
        NzTimePickerPanelComponent.prototype.isSelectedSecond = function (second) {
            return second.index === this.time.seconds || (!core$1.isNotNil(this.time.seconds) && second.index === this.time.defaultSeconds);
        };
        NzTimePickerPanelComponent.prototype.isSelected12Hours = function (value) {
            return (value.value.toUpperCase() === this.time.selected12Hours ||
                (!core$1.isNotNil(this.time.selected12Hours) && value.value.toUpperCase() === this.time.default12Hours));
        };
        NzTimePickerPanelComponent.prototype.initPosition = function () {
            var _this = this;
            setTimeout(function () {
                if (_this.hourEnabled && _this.hourListElement) {
                    if (core$1.isNotNil(_this.time.viewHours)) {
                        _this.scrollToSelected(_this.hourListElement.nativeElement, _this.time.viewHours, 0, 'hour');
                    }
                    else {
                        _this.scrollToSelected(_this.hourListElement.nativeElement, _this.time.defaultViewHours, 0, 'hour');
                    }
                }
                if (_this.minuteEnabled && _this.minuteListElement) {
                    if (core$1.isNotNil(_this.time.minutes)) {
                        _this.scrollToSelected(_this.minuteListElement.nativeElement, _this.time.minutes, 0, 'minute');
                    }
                    else {
                        _this.scrollToSelected(_this.minuteListElement.nativeElement, _this.time.defaultMinutes, 0, 'minute');
                    }
                }
                if (_this.secondEnabled && _this.secondListElement) {
                    if (core$1.isNotNil(_this.time.seconds)) {
                        _this.scrollToSelected(_this.secondListElement.nativeElement, _this.time.seconds, 0, 'second');
                    }
                    else {
                        _this.scrollToSelected(_this.secondListElement.nativeElement, _this.time.defaultSeconds, 0, 'second');
                    }
                }
                if (_this.nzUse12Hours && _this.use12HoursListElement) {
                    var selectedHours = core$1.isNotNil(_this.time.selected12Hours) ? _this.time.selected12Hours : _this.time.default12Hours;
                    var index = selectedHours === 'AM' ? 0 : 1;
                    _this.scrollToSelected(_this.use12HoursListElement.nativeElement, index, 0, '12-hour');
                }
            });
        };
        NzTimePickerPanelComponent.prototype.ngOnInit = function () {
            var _this = this;
            if (this.nzInDatePicker) {
                this.prefixCls = 'ant-calendar-time-picker';
            }
            this.time.changes.pipe(operators.takeUntil(this.unsubscribe$)).subscribe(function () {
                _this.changed();
                _this.touched();
            });
            this.buildTimes();
            this.setClassMap();
        };
        NzTimePickerPanelComponent.prototype.ngOnDestroy = function () {
            this.unsubscribe$.next();
            this.unsubscribe$.complete();
        };
        NzTimePickerPanelComponent.prototype.ngOnChanges = function (changes) {
            var nzUse12Hours = changes.nzUse12Hours, opened = changes.opened, nzDefaultOpenValue = changes.nzDefaultOpenValue;
            if (nzUse12Hours && !nzUse12Hours.previousValue && nzUse12Hours.currentValue) {
                this.build12Hours();
                this.enabledColumns++;
            }
            if (opened && opened.currentValue) {
                this.initPosition();
                this.selectInputRange();
            }
            if (nzDefaultOpenValue) {
                var value = nzDefaultOpenValue.currentValue;
                if (core$1.isNotNil(value)) {
                    this.time.setDefaultOpenValue(this.nzDefaultOpenValue);
                }
            }
        };
        NzTimePickerPanelComponent.prototype.writeValue = function (value) {
            this.time.setValue(value, this.nzUse12Hours);
            this.buildTimes();
            // Mark this component to be checked manually with internal properties changing (see: https://github.com/angular/angular/issues/10816)
            this.cdr.markForCheck();
        };
        NzTimePickerPanelComponent.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        NzTimePickerPanelComponent.prototype.registerOnTouched = function (fn) {
            this.onTouch = fn;
        };
        /** @nocollapse */ NzTimePickerPanelComponent.ɵfac = function NzTimePickerPanelComponent_Factory(t) { return new (t || NzTimePickerPanelComponent)(core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(core$1.NzUpdateHostClassService), core.ɵɵdirectiveInject(core.ChangeDetectorRef)); };
        /** @nocollapse */ NzTimePickerPanelComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzTimePickerPanelComponent, selectors: [["nz-time-picker-panel"]], viewQuery: function NzTimePickerPanelComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵviewQuery(NzTimeValueAccessorDirective, true);
                core.ɵɵviewQuery(_c0, true);
                core.ɵɵviewQuery(_c1, true);
                core.ɵɵviewQuery(_c2, true);
                core.ɵɵviewQuery(_c3, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.nzTimeValueAccessorDirective = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.hourListElement = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.minuteListElement = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.secondListElement = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.use12HoursListElement = _t.first);
            } }, inputs: { nzInDatePicker: "nzInDatePicker", nzAddOn: "nzAddOn", nzHideDisabledOptions: "nzHideDisabledOptions", nzClearText: "nzClearText", nzPlaceHolder: "nzPlaceHolder", nzUse12Hours: "nzUse12Hours", opened: "opened", nzDefaultOpenValue: "nzDefaultOpenValue", nzAllowEmpty: "nzAllowEmpty", nzDisabledHours: "nzDisabledHours", nzDisabledMinutes: "nzDisabledMinutes", nzDisabledSeconds: "nzDisabledSeconds", format: "format", nzHourStep: "nzHourStep", nzMinuteStep: "nzMinuteStep", nzSecondStep: "nzSecondStep" }, exportAs: ["nzTimePickerPanel"], features: [core.ɵɵProvidersFeature([core$1.NzUpdateHostClassService, { provide: forms.NG_VALUE_ACCESSOR, useExisting: NzTimePickerPanelComponent, multi: true }]), core.ɵɵNgOnChangesFeature()], decls: 10, vars: 25, consts: [["type", "text", 3, "placeholder", "nzTime", "ngModel", "ngModelChange", "blur"], [3, "class", 4, "ngIf"], ["hourListElement", ""], [4, "ngFor", "ngForOf"], [3, "class", "click", 4, "ngIf"], [3, "click"], ["minuteListElement", ""], ["secondListElement", ""], ["use12HoursListElement", ""], [3, "ngTemplateOutlet"]], template: function NzTimePickerPanelComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "div");
                core.ɵɵelementStart(1, "div");
                core.ɵɵelementStart(2, "div");
                core.ɵɵelementStart(3, "input", 0);
                core.ɵɵlistener("ngModelChange", function NzTimePickerPanelComponent_Template_input_ngModelChange_3_listener($event) { return ctx.time.value = $event; })("blur", function NzTimePickerPanelComponent_Template_input_blur_3_listener($event) { return ctx.time.changed(); });
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(4, "div");
                core.ɵɵtemplate(5, NzTimePickerPanelComponent_div_5_Template, 4, 4, "div", 1);
                core.ɵɵtemplate(6, NzTimePickerPanelComponent_div_6_Template, 4, 4, "div", 1);
                core.ɵɵtemplate(7, NzTimePickerPanelComponent_div_7_Template, 4, 4, "div", 1);
                core.ɵɵtemplate(8, NzTimePickerPanelComponent_div_8_Template, 4, 4, "div", 1);
                core.ɵɵelementEnd();
                core.ɵɵtemplate(9, NzTimePickerPanelComponent_div_9_Template, 2, 4, "div", 1);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵclassMap(ctx.nzInDatePicker ? ctx.prefixCls + "-panel" : "");
                core.ɵɵadvance(1);
                core.ɵɵclassMapInterpolate2("", ctx.prefixCls, "-inner ", ctx.nzInDatePicker ? ctx.prefixCls + "-column-" + ctx.enabledColumns : "", "");
                core.ɵɵstyleProp("width", ctx.nzInDatePicker ? null : ctx.enabledColumns * 56, "px");
                core.ɵɵadvance(1);
                core.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-input-wrap");
                core.ɵɵadvance(1);
                core.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-input");
                core.ɵɵproperty("placeholder", ctx.nzPlaceHolder)("nzTime", ctx.format)("ngModel", ctx.time.value);
                core.ɵɵadvance(1);
                core.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-combobox");
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.hourEnabled);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.minuteEnabled);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.secondEnabled);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.nzUse12Hours);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.nzAddOn);
            } }, directives: [NzTimeValueAccessorDirective, forms.DefaultValueAccessor, forms.NgControlStatus, forms.NgModel, common.NgIf, common.NgForOf, common.NgTemplateOutlet], pipes: [common.DecimalPipe], encapsulation: 2, changeDetection: 0 });
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTimePickerPanelComponent.prototype, "nzUse12Hours", void 0);
        return NzTimePickerPanelComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzTimePickerPanelComponent, [{
            type: core.Component,
            args: [{
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    selector: 'nz-time-picker-panel',
                    exportAs: 'nzTimePickerPanel',
                    templateUrl: './nz-time-picker-panel.component.html',
                    providers: [core$1.NzUpdateHostClassService, { provide: forms.NG_VALUE_ACCESSOR, useExisting: NzTimePickerPanelComponent, multi: true }]
                }]
        }], function () { return [{ type: core.ElementRef }, { type: core$1.NzUpdateHostClassService }, { type: core.ChangeDetectorRef }]; }, { nzTimeValueAccessorDirective: [{
                type: core.ViewChild,
                args: [NzTimeValueAccessorDirective, { static: false }]
            }], hourListElement: [{
                type: core.ViewChild,
                args: ['hourListElement', { static: false }]
            }], minuteListElement: [{
                type: core.ViewChild,
                args: ['minuteListElement', { static: false }]
            }], secondListElement: [{
                type: core.ViewChild,
                args: ['secondListElement', { static: false }]
            }], use12HoursListElement: [{
                type: core.ViewChild,
                args: ['use12HoursListElement', { static: false }]
            }], nzInDatePicker: [{
                type: core.Input
            }], nzAddOn: [{
                type: core.Input
            }], nzHideDisabledOptions: [{
                type: core.Input
            }], nzClearText: [{
                type: core.Input
            }], nzPlaceHolder: [{
                type: core.Input
            }], nzUse12Hours: [{
                type: core.Input
            }], opened: [{
                type: core.Input
            }], nzDefaultOpenValue: [{
                type: core.Input
            }], nzAllowEmpty: [{
                type: core.Input
            }], nzDisabledHours: [{
                type: core.Input
            }], nzDisabledMinutes: [{
                type: core.Input
            }], nzDisabledSeconds: [{
                type: core.Input
            }], format: [{
                type: core.Input
            }], nzHourStep: [{
                type: core.Input
            }], nzMinuteStep: [{
                type: core.Input
            }], nzSecondStep: [{
                type: core.Input
            }] }); })();

    var _c0$1 = ["inputElement"];
    function NzTimePickerComponent_i_5_Template(rf, ctx) { if (rf & 1) {
        var _r917 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "i", 6);
        core.ɵɵlistener("click", function NzTimePickerComponent_i_5_Template_i_click_0_listener($event) { core.ɵɵrestoreView(_r917); var ctx_r916 = core.ɵɵnextContext(); return ctx_r916.onClickClearBtn(); });
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r914 = core.ɵɵnextContext();
        core.ɵɵattribute("aria-label", ctx_r914.nzClearText)("title", ctx_r914.nzClearText);
    } }
    function NzTimePickerComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
        var _r919 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "nz-time-picker-panel", 7);
        core.ɵɵlistener("ngModelChange", function NzTimePickerComponent_ng_template_6_Template_nz_time_picker_panel_ngModelChange_0_listener($event) { core.ɵɵrestoreView(_r919); var ctx_r918 = core.ɵɵnextContext(); return ctx_r918.value = $event; });
        core.ɵɵpipe(1, "nzI18n");
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r915 = core.ɵɵnextContext();
        core.ɵɵproperty("ngClass", ctx_r915.nzPopupClassName)("@slideMotion", "bottom")("format", ctx_r915.nzFormat)("nzHourStep", ctx_r915.nzHourStep)("nzMinuteStep", ctx_r915.nzMinuteStep)("nzSecondStep", ctx_r915.nzSecondStep)("nzDisabledHours", ctx_r915.nzDisabledHours)("nzDisabledMinutes", ctx_r915.nzDisabledMinutes)("nzDisabledSeconds", ctx_r915.nzDisabledSeconds)("nzPlaceHolder", ctx_r915.nzPlaceHolder || core.ɵɵpipeBind1(1, 18, "TimePicker.placeholder"))("nzHideDisabledOptions", ctx_r915.nzHideDisabledOptions)("nzUse12Hours", ctx_r915.nzUse12Hours)("nzDefaultOpenValue", ctx_r915.nzDefaultOpenValue)("nzAddOn", ctx_r915.nzAddOn)("opened", ctx_r915.nzOpen)("nzClearText", ctx_r915.nzClearText)("nzAllowEmpty", ctx_r915.nzAllowEmpty)("ngModel", ctx_r915.value);
    } }
    var NZ_CONFIG_COMPONENT_NAME = 'timePicker';
    var NzTimePickerComponent = /** @class */ (function () {
        function NzTimePickerComponent(nzConfigService, element, renderer, updateCls, cdr) {
            this.nzConfigService = nzConfigService;
            this.element = element;
            this.renderer = renderer;
            this.updateCls = updateCls;
            this.cdr = cdr;
            this._value = null;
            this.isInit = false;
            this.overlayPositions = [
                {
                    originX: 'start',
                    originY: 'top',
                    overlayX: 'end',
                    overlayY: 'top',
                    offsetX: 0,
                    offsetY: 0
                }
            ];
            this.nzSize = null;
            this.nzPlaceHolder = '';
            this.nzDefaultOpenValue = new Date();
            this.nzOpen = false;
            this.nzOpenChange = new core.EventEmitter();
            this.nzHideDisabledOptions = false;
            this.nzDisabled = false;
            this.nzAutoFocus = false;
        }
        Object.defineProperty(NzTimePickerComponent.prototype, "value", {
            get: function () {
                return this._value;
            },
            set: function (value) {
                this._value = value;
                if (this._onChange) {
                    this._onChange(this.value);
                }
                if (this._onTouched) {
                    this._onTouched();
                }
            },
            enumerable: true,
            configurable: true
        });
        NzTimePickerComponent.prototype.open = function () {
            if (this.nzDisabled) {
                return;
            }
            this.nzOpen = true;
            this.nzOpenChange.emit(this.nzOpen);
        };
        NzTimePickerComponent.prototype.close = function () {
            this.nzOpen = false;
            this.cdr.markForCheck();
            this.nzOpenChange.emit(this.nzOpen);
        };
        NzTimePickerComponent.prototype.updateAutoFocus = function () {
            if (this.isInit && !this.nzDisabled) {
                if (this.nzAutoFocus) {
                    this.renderer.setAttribute(this.inputRef.nativeElement, 'autofocus', 'autofocus');
                }
                else {
                    this.renderer.removeAttribute(this.inputRef.nativeElement, 'autofocus');
                }
            }
        };
        NzTimePickerComponent.prototype.onClickClearBtn = function () {
            this.value = null;
        };
        NzTimePickerComponent.prototype.setClassMap = function () {
            var _a;
            this.updateCls.updateHostClass(this.element.nativeElement, (_a = {},
                _a["ant-time-picker"] = true,
                _a["ant-time-picker-" + this.nzSize] = core$1.isNotNil(this.nzSize),
                _a));
        };
        NzTimePickerComponent.prototype.focus = function () {
            if (this.inputRef.nativeElement) {
                this.inputRef.nativeElement.focus();
            }
        };
        NzTimePickerComponent.prototype.blur = function () {
            if (this.inputRef.nativeElement) {
                this.inputRef.nativeElement.blur();
            }
        };
        NzTimePickerComponent.prototype.ngOnInit = function () {
            this.setClassMap();
            this.origin = new overlay.CdkOverlayOrigin(this.element);
        };
        NzTimePickerComponent.prototype.ngOnChanges = function (changes) {
            var nzUse12Hours = changes.nzUse12Hours, nzFormat = changes.nzFormat, nzDisabled = changes.nzDisabled, nzAutoFocus = changes.nzAutoFocus;
            if (nzUse12Hours && !nzUse12Hours.previousValue && nzUse12Hours.currentValue && !nzFormat) {
                this.nzFormat = 'h:mm:ss a';
            }
            if (nzDisabled) {
                var value = nzDisabled.currentValue;
                var input = this.inputRef.nativeElement;
                if (value) {
                    this.renderer.setAttribute(input, 'disabled', '');
                }
                else {
                    this.renderer.removeAttribute(input, 'disabled');
                }
            }
            if (nzAutoFocus) {
                this.updateAutoFocus();
            }
        };
        NzTimePickerComponent.prototype.ngAfterViewInit = function () {
            this.isInit = true;
            this.updateAutoFocus();
        };
        NzTimePickerComponent.prototype.writeValue = function (time) {
            this._value = time;
            this.cdr.markForCheck();
        };
        NzTimePickerComponent.prototype.registerOnChange = function (fn) {
            this._onChange = fn;
        };
        NzTimePickerComponent.prototype.registerOnTouched = function (fn) {
            this._onTouched = fn;
        };
        NzTimePickerComponent.prototype.setDisabledState = function (isDisabled) {
            this.nzDisabled = isDisabled;
            this.cdr.markForCheck();
        };
        /** @nocollapse */ NzTimePickerComponent.ɵfac = function NzTimePickerComponent_Factory(t) { return new (t || NzTimePickerComponent)(core.ɵɵdirectiveInject(core$1.NzConfigService), core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(core.Renderer2), core.ɵɵdirectiveInject(core$1.NzUpdateHostClassService), core.ɵɵdirectiveInject(core.ChangeDetectorRef)); };
        /** @nocollapse */ NzTimePickerComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzTimePickerComponent, selectors: [["nz-time-picker"]], viewQuery: function NzTimePickerComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵstaticViewQuery(_c0$1, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.inputRef = _t.first);
            } }, inputs: { nzSize: "nzSize", nzHourStep: "nzHourStep", nzMinuteStep: "nzMinuteStep", nzSecondStep: "nzSecondStep", nzClearText: "nzClearText", nzPopupClassName: "nzPopupClassName", nzPlaceHolder: "nzPlaceHolder", nzAddOn: "nzAddOn", nzDefaultOpenValue: "nzDefaultOpenValue", nzDisabledHours: "nzDisabledHours", nzDisabledMinutes: "nzDisabledMinutes", nzDisabledSeconds: "nzDisabledSeconds", nzFormat: "nzFormat", nzOpen: "nzOpen", nzUse12Hours: "nzUse12Hours", nzHideDisabledOptions: "nzHideDisabledOptions", nzAllowEmpty: "nzAllowEmpty", nzDisabled: "nzDisabled", nzAutoFocus: "nzAutoFocus" }, outputs: { nzOpenChange: "nzOpenChange" }, exportAs: ["nzTimePicker"], features: [core.ɵɵProvidersFeature([core$1.NzUpdateHostClassService, { provide: forms.NG_VALUE_ACCESSOR, useExisting: NzTimePickerComponent, multi: true }]), core.ɵɵNgOnChangesFeature()], decls: 7, vars: 10, consts: [["nzType", "text", "readonly", "readonly", 1, "ant-time-picker-input", 3, "nzTime", "placeholder", "ngModel", "ngModelChange", "click"], ["inputElement", ""], [1, "ant-time-picker-icon"], ["nz-icon", "", "nzType", "clock-circle"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", "class", "anticon anticon-close-circle ant-time-picker-clear", "tabindex", "-1", 3, "click", 4, "ngIf"], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", "cdkConnectedOverlayHasBackdrop", "", 3, "cdkConnectedOverlayPositions", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayOffsetY", "detach", "backdropClick"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", "tabindex", "-1", 1, "anticon", "anticon-close-circle", "ant-time-picker-clear", 3, "click"], [3, "ngClass", "format", "nzHourStep", "nzMinuteStep", "nzSecondStep", "nzDisabledHours", "nzDisabledMinutes", "nzDisabledSeconds", "nzPlaceHolder", "nzHideDisabledOptions", "nzUse12Hours", "nzDefaultOpenValue", "nzAddOn", "opened", "nzClearText", "nzAllowEmpty", "ngModel", "ngModelChange"]], template: function NzTimePickerComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "input", 0, 1);
                core.ɵɵlistener("ngModelChange", function NzTimePickerComponent_Template_input_ngModelChange_0_listener($event) { return ctx.value = $event; })("click", function NzTimePickerComponent_Template_input_click_0_listener($event) { return ctx.open(); });
                core.ɵɵpipe(2, "nzI18n");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(3, "span", 2);
                core.ɵɵelement(4, "i", 3);
                core.ɵɵelementEnd();
                core.ɵɵtemplate(5, NzTimePickerComponent_i_5_Template, 1, 2, "i", 4);
                core.ɵɵtemplate(6, NzTimePickerComponent_ng_template_6_Template, 2, 20, "ng-template", 5);
                core.ɵɵlistener("detach", function NzTimePickerComponent_Template_ng_template_detach_6_listener($event) { return ctx.close(); })("backdropClick", function NzTimePickerComponent_Template_ng_template_backdropClick_6_listener($event) { return ctx.close(); });
            } if (rf & 2) {
                core.ɵɵproperty("nzTime", ctx.nzFormat)("placeholder", ctx.nzPlaceHolder || core.ɵɵpipeBind1(2, 8, "TimePicker.placeholder"))("ngModel", ctx.value);
                core.ɵɵadvance(5);
                core.ɵɵproperty("ngIf", ctx.nzAllowEmpty && ctx.value);
                core.ɵɵadvance(1);
                core.ɵɵproperty("cdkConnectedOverlayPositions", ctx.overlayPositions)("cdkConnectedOverlayOrigin", ctx.origin)("cdkConnectedOverlayOpen", ctx.nzOpen)("cdkConnectedOverlayOffsetY", 0 - 2);
            } }, directives: [NzTimeValueAccessorDirective, forms.DefaultValueAccessor, forms.NgControlStatus, forms.NgModel, icon.NzIconDirective, common.NgIf, overlay.CdkConnectedOverlay, core$1.NzConnectedOverlayDirective, NzTimePickerPanelComponent, common.NgClass], pipes: [i18n.NzI18nPipe], encapsulation: 2, data: { animation: [core$1.slideMotion] }, changeDetection: 0 });
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, 1),
            __metadata("design:type", Number)
        ], NzTimePickerComponent.prototype, "nzHourStep", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, 1),
            __metadata("design:type", Number)
        ], NzTimePickerComponent.prototype, "nzMinuteStep", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, 1),
            __metadata("design:type", Number)
        ], NzTimePickerComponent.prototype, "nzSecondStep", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, 'clear'),
            __metadata("design:type", String)
        ], NzTimePickerComponent.prototype, "nzClearText", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME),
            __metadata("design:type", String)
        ], NzTimePickerComponent.prototype, "nzPopupClassName", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, 'HH:mm:ss'),
            __metadata("design:type", String)
        ], NzTimePickerComponent.prototype, "nzFormat", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, false), core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzTimePickerComponent.prototype, "nzUse12Hours", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTimePickerComponent.prototype, "nzHideDisabledOptions", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, true), core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzTimePickerComponent.prototype, "nzAllowEmpty", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTimePickerComponent.prototype, "nzDisabled", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTimePickerComponent.prototype, "nzAutoFocus", void 0);
        return NzTimePickerComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzTimePickerComponent, [{
            type: core.Component,
            args: [{
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    selector: 'nz-time-picker',
                    exportAs: 'nzTimePicker',
                    templateUrl: './nz-time-picker.component.html',
                    animations: [core$1.slideMotion],
                    providers: [core$1.NzUpdateHostClassService, { provide: forms.NG_VALUE_ACCESSOR, useExisting: NzTimePickerComponent, multi: true }]
                }]
        }], function () { return [{ type: core$1.NzConfigService }, { type: core.ElementRef }, { type: core.Renderer2 }, { type: core$1.NzUpdateHostClassService }, { type: core.ChangeDetectorRef }]; }, { inputRef: [{
                type: core.ViewChild,
                args: ['inputElement', { static: true }]
            }], nzSize: [{
                type: core.Input
            }], nzHourStep: [{
                type: core.Input
            }], nzMinuteStep: [{
                type: core.Input
            }], nzSecondStep: [{
                type: core.Input
            }], nzClearText: [{
                type: core.Input
            }], nzPopupClassName: [{
                type: core.Input
            }], nzPlaceHolder: [{
                type: core.Input
            }], nzAddOn: [{
                type: core.Input
            }], nzDefaultOpenValue: [{
                type: core.Input
            }], nzDisabledHours: [{
                type: core.Input
            }], nzDisabledMinutes: [{
                type: core.Input
            }], nzDisabledSeconds: [{
                type: core.Input
            }], nzFormat: [{
                type: core.Input
            }], nzOpen: [{
                type: core.Input
            }], nzUse12Hours: [{
                type: core.Input
            }], nzOpenChange: [{
                type: core.Output
            }], nzHideDisabledOptions: [{
                type: core.Input
            }], nzAllowEmpty: [{
                type: core.Input
            }], nzDisabled: [{
                type: core.Input
            }], nzAutoFocus: [{
                type: core.Input
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzTimePickerModule = /** @class */ (function () {
        function NzTimePickerModule() {
        }
        /** @nocollapse */ NzTimePickerModule.ɵmod = core.ɵɵdefineNgModule({ type: NzTimePickerModule });
        /** @nocollapse */ NzTimePickerModule.ɵinj = core.ɵɵdefineInjector({ factory: function NzTimePickerModule_Factory(t) { return new (t || NzTimePickerModule)(); }, imports: [[common.CommonModule, forms.FormsModule, i18n.NzI18nModule, overlay.OverlayModule, icon.NzIconModule, core$1.NzOverlayModule]] });
        return NzTimePickerModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(NzTimePickerModule, { declarations: [NzTimePickerComponent, NzTimePickerPanelComponent, NzTimeValueAccessorDirective], imports: [common.CommonModule, forms.FormsModule, i18n.NzI18nModule, overlay.OverlayModule, icon.NzIconModule, core$1.NzOverlayModule], exports: [NzTimePickerPanelComponent, NzTimePickerComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzTimePickerModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [NzTimePickerComponent, NzTimePickerPanelComponent, NzTimeValueAccessorDirective],
                    exports: [NzTimePickerPanelComponent, NzTimePickerComponent],
                    imports: [common.CommonModule, forms.FormsModule, i18n.NzI18nModule, overlay.OverlayModule, icon.NzIconModule, core$1.NzOverlayModule]
                }]
        }], null, null); })();

    exports.NzTimePickerComponent = NzTimePickerComponent;
    exports.NzTimePickerModule = NzTimePickerModule;
    exports.NzTimePickerPanelComponent = NzTimePickerPanelComponent;
    exports.NzTimeValueAccessorDirective = NzTimeValueAccessorDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-time-picker.umd.js.map

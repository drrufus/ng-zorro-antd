(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/overlay'), require('@angular/common'), require('@angular/core'), require('ng-zorro-antd/core'), require('ng-zorro-antd/icon'), require('@angular/forms'), require('ng-zorro-antd/i18n'), require('ng-zorro-antd/time-picker'), require('ng-zorro-antd/calendar'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/date-picker', ['exports', '@angular/cdk/overlay', '@angular/common', '@angular/core', 'ng-zorro-antd/core', 'ng-zorro-antd/icon', '@angular/forms', 'ng-zorro-antd/i18n', 'ng-zorro-antd/time-picker', 'ng-zorro-antd/calendar', 'rxjs', 'rxjs/operators'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd']['date-picker'] = {}), global.ng.cdk.overlay, global.ng.common, global.ng.core, global['ng-zorro-antd'].core, global['ng-zorro-antd'].icon, global.ng.forms, global['ng-zorro-antd'].i18n, global['ng-zorro-antd']['time-picker'], global['ng-zorro-antd'].calendar, global.rxjs, global.rxjs.operators));
}(this, (function (exports, overlay, common, core, core$1, icon, forms, i18n, timePicker, calendar, rxjs, operators) { 'use strict';

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
    var TodayButtonComponent = /** @class */ (function () {
        function TodayButtonComponent(dateHelper) {
            this.dateHelper = dateHelper;
            this.hasTimePicker = false;
            this.clickToday = new core.EventEmitter();
            this.prefixCls = 'ant-calendar';
            this.isDisabled = false;
            this.now = new core$1.CandyDate();
        }
        TodayButtonComponent.prototype.ngOnChanges = function (changes) {
            if (changes.disabledDate) {
                this.isDisabled = this.disabledDate && this.disabledDate(this.now.nativeDate);
            }
            if (changes.locale) {
                // NOTE: Compat for DatePipe formatting rules
                var dateFormat = this.locale.dateFormat;
                if (this.dateHelper.relyOnDatePipe) {
                    dateFormat = this.dateHelper.transCompatFormat(dateFormat);
                }
                this.title = this.dateHelper.format(this.now.nativeDate, dateFormat);
            }
        };
        TodayButtonComponent.prototype.onClickToday = function () {
            this.clickToday.emit(this.now.clone()); // To prevent the "now" being modified from outside, we use clone
        };
        /** @nocollapse */ TodayButtonComponent.ɵfac = function TodayButtonComponent_Factory(t) { return new (t || TodayButtonComponent)(core.ɵɵdirectiveInject(i18n.DateHelperService)); };
        /** @nocollapse */ TodayButtonComponent.ɵcmp = core.ɵɵdefineComponent({ type: TodayButtonComponent, selectors: [["today-button"]], inputs: { locale: "locale", hasTimePicker: "hasTimePicker", disabledDate: "disabledDate" }, outputs: { clickToday: "clickToday" }, exportAs: ["todayButton"], features: [core.ɵɵNgOnChangesFeature()], decls: 2, vars: 6, consts: [["role", "button", 3, "title", "click"]], template: function TodayButtonComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "a", 0);
                core.ɵɵlistener("click", function TodayButtonComponent_Template_a_click_0_listener($event) { return ctx.isDisabled ? null : ctx.onClickToday(); });
                core.ɵɵtext(1);
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵclassMapInterpolate2("", ctx.prefixCls, "-today-btn ", ctx.isDisabled ? ctx.prefixCls + "-today-btn-disabled" : "", "");
                core.ɵɵpropertyInterpolate("title", ctx.title);
                core.ɵɵadvance(1);
                core.ɵɵtextInterpolate1(" ", ctx.hasTimePicker ? ctx.locale.now : ctx.locale.today, "\n");
            } }, encapsulation: 2, changeDetection: 0 });
        return TodayButtonComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(TodayButtonComponent, [{
            type: core.Component,
            args: [{
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    // tslint:disable-next-line:component-selector
                    selector: 'today-button',
                    exportAs: 'todayButton',
                    templateUrl: 'today-button.component.html'
                }]
        }], function () { return [{ type: i18n.DateHelperService }]; }, { locale: [{
                type: core.Input
            }], hasTimePicker: [{
                type: core.Input
            }], disabledDate: [{
                type: core.Input
            }], clickToday: [{
                type: core.Output
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var TimePickerButtonComponent = /** @class */ (function () {
        function TimePickerButtonComponent() {
            this.timePickerDisabled = false;
            this.showTimePicker = false;
            this.showTimePickerChange = new core.EventEmitter();
            this.prefixCls = 'ant-calendar';
        }
        TimePickerButtonComponent.prototype.onClick = function () {
            this.showTimePicker = !this.showTimePicker;
            this.showTimePickerChange.emit(this.showTimePicker);
        };
        /** @nocollapse */ TimePickerButtonComponent.ɵfac = function TimePickerButtonComponent_Factory(t) { return new (t || TimePickerButtonComponent)(); };
        /** @nocollapse */ TimePickerButtonComponent.ɵcmp = core.ɵɵdefineComponent({ type: TimePickerButtonComponent, selectors: [["time-picker-button"]], inputs: { locale: "locale", timePickerDisabled: "timePickerDisabled", showTimePicker: "showTimePicker" }, outputs: { showTimePickerChange: "showTimePickerChange" }, exportAs: ["timePickerButton"], decls: 2, vars: 5, consts: [["role", "button", 3, "click"]], template: function TimePickerButtonComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "a", 0);
                core.ɵɵlistener("click", function TimePickerButtonComponent_Template_a_click_0_listener($event) { return ctx.timePickerDisabled ? null : ctx.onClick(); });
                core.ɵɵtext(1);
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵclassMapInterpolate2("", ctx.prefixCls, "-time-picker-btn ", ctx.timePickerDisabled ? ctx.prefixCls + "-time-picker-btn-disabled" : "", "");
                core.ɵɵadvance(1);
                core.ɵɵtextInterpolate1(" ", ctx.showTimePicker ? ctx.locale.dateSelect : ctx.locale.timeSelect, "\n");
            } }, encapsulation: 2, changeDetection: 0 });
        return TimePickerButtonComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(TimePickerButtonComponent, [{
            type: core.Component,
            args: [{
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    // tslint:disable-next-line:component-selector
                    selector: 'time-picker-button',
                    exportAs: 'timePickerButton',
                    templateUrl: 'time-picker-button.component.html'
                }]
        }], null, { locale: [{
                type: core.Input
            }], timePickerDisabled: [{
                type: core.Input
            }], showTimePicker: [{
                type: core.Input
            }], showTimePickerChange: [{
                type: core.Output
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var OkButtonComponent = /** @class */ (function () {
        function OkButtonComponent() {
            this.okDisabled = false;
            this.clickOk = new core.EventEmitter();
            this.prefixCls = 'ant-calendar';
        }
        /** @nocollapse */ OkButtonComponent.ɵfac = function OkButtonComponent_Factory(t) { return new (t || OkButtonComponent)(); };
        /** @nocollapse */ OkButtonComponent.ɵcmp = core.ɵɵdefineComponent({ type: OkButtonComponent, selectors: [["ok-button"]], inputs: { locale: "locale", okDisabled: "okDisabled" }, outputs: { clickOk: "clickOk" }, exportAs: ["okButton"], decls: 2, vars: 5, consts: [["role", "button", 3, "click"]], template: function OkButtonComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "a", 0);
                core.ɵɵlistener("click", function OkButtonComponent_Template_a_click_0_listener($event) { return ctx.okDisabled ? null : ctx.clickOk.emit(); });
                core.ɵɵtext(1);
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵclassMapInterpolate2("", ctx.prefixCls, "-ok-btn ", ctx.okDisabled ? ctx.prefixCls + "-ok-btn-disabled" : "", "");
                core.ɵɵadvance(1);
                core.ɵɵtextInterpolate1(" ", ctx.locale.ok, "\n");
            } }, encapsulation: 2, changeDetection: 0 });
        return OkButtonComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(OkButtonComponent, [{
            type: core.Component,
            args: [{
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    // tslint:disable-next-line:component-selector
                    selector: 'ok-button',
                    exportAs: 'okButton',
                    templateUrl: 'ok-button.component.html'
                }]
        }], null, { locale: [{
                type: core.Input
            }], okDisabled: [{
                type: core.Input
            }], clickOk: [{
                type: core.Output
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    function CalendarFooterComponent_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainer(0);
    } }
    function CalendarFooterComponent_div_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div");
        core.ɵɵtemplate(1, CalendarFooterComponent_div_1_ng_container_1_Template, 1, 0, "ng-container", 1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r2365 = core.ɵɵnextContext();
        core.ɵɵclassMapInterpolate2("", ctx_r2365.prefixCls, "-footer-extra ", ctx_r2365.prefixCls, "-range-quick-selector");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", ctx_r2365.rangeQuickSelector);
    } }
    function CalendarFooterComponent_div_2_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainer(0);
    } }
    function CalendarFooterComponent_div_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, CalendarFooterComponent_div_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 1);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r2369 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", ctx_r2369.extraFooter);
    } }
    function CalendarFooterComponent_div_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelement(1, "span", 4);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r2370 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("innerHTML", ctx_r2370.extraFooter, core.ɵɵsanitizeHtml);
    } }
    function CalendarFooterComponent_div_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div");
        core.ɵɵelementContainerStart(1, 2);
        core.ɵɵtemplate(2, CalendarFooterComponent_div_2_ng_container_2_Template, 2, 1, "ng-container", 3);
        core.ɵɵtemplate(3, CalendarFooterComponent_div_2_ng_container_3_Template, 2, 1, "ng-container", 3);
        core.ɵɵelementContainerEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r2366 = core.ɵɵnextContext();
        core.ɵɵclassMapInterpolate2("", ctx_r2366.prefixCls, "-footer-extra ", ctx_r2366.isRange ? ctx_r2366.prefixCls + "-range-quick-selector" : "", "");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitch", true);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", ctx_r2366.isTemplateRef(ctx_r2366.extraFooter));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", ctx_r2366.isNonEmptyString(ctx_r2366.extraFooter));
    } }
    function CalendarFooterComponent_span_3_today_button_1_Template(rf, ctx) { if (rf & 1) {
        var _r2376 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "today-button", 8);
        core.ɵɵlistener("clickToday", function CalendarFooterComponent_span_3_today_button_1_Template_today_button_clickToday_0_listener($event) { core.ɵɵrestoreView(_r2376); var ctx_r2375 = core.ɵɵnextContext(2); return ctx_r2375.clickToday.emit($event); });
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r2372 = core.ɵɵnextContext(2);
        core.ɵɵproperty("locale", ctx_r2372.locale)("disabledDate", ctx_r2372.disabledDate)("hasTimePicker", ctx_r2372.hasTimePicker);
    } }
    function CalendarFooterComponent_span_3_time_picker_button_2_Template(rf, ctx) { if (rf & 1) {
        var _r2378 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "time-picker-button", 9);
        core.ɵɵlistener("showTimePickerChange", function CalendarFooterComponent_span_3_time_picker_button_2_Template_time_picker_button_showTimePickerChange_0_listener($event) { core.ɵɵrestoreView(_r2378); var ctx_r2377 = core.ɵɵnextContext(2); return ctx_r2377.showTimePickerChange.emit($event); });
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r2373 = core.ɵɵnextContext(2);
        core.ɵɵproperty("locale", ctx_r2373.locale)("timePickerDisabled", ctx_r2373.timePickerDisabled)("showTimePicker", ctx_r2373.showTimePicker);
    } }
    function CalendarFooterComponent_span_3_ok_button_3_Template(rf, ctx) { if (rf & 1) {
        var _r2380 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "ok-button", 10);
        core.ɵɵlistener("clickOk", function CalendarFooterComponent_span_3_ok_button_3_Template_ok_button_clickOk_0_listener($event) { core.ɵɵrestoreView(_r2380); var ctx_r2379 = core.ɵɵnextContext(2); return ctx_r2379.clickOk.emit(); });
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r2374 = core.ɵɵnextContext(2);
        core.ɵɵproperty("okDisabled", ctx_r2374.okDisabled)("locale", ctx_r2374.locale);
    } }
    function CalendarFooterComponent_span_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span");
        core.ɵɵtemplate(1, CalendarFooterComponent_span_3_today_button_1_Template, 1, 3, "today-button", 5);
        core.ɵɵtemplate(2, CalendarFooterComponent_span_3_time_picker_button_2_Template, 1, 3, "time-picker-button", 6);
        core.ɵɵtemplate(3, CalendarFooterComponent_span_3_ok_button_3_Template, 1, 2, "ok-button", 7);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r2367 = core.ɵɵnextContext();
        core.ɵɵclassMapInterpolate1("", ctx_r2367.prefixCls, "-footer-btn");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r2367.showToday);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r2367.hasTimePicker);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r2367.hasTimePicker);
    } }
    var CalendarFooterComponent = /** @class */ (function () {
        function CalendarFooterComponent() {
            this.showToday = false;
            this.hasTimePicker = false;
            this.isRange = false;
            this.showTimePicker = false;
            this.showTimePickerChange = new core.EventEmitter();
            this.timePickerDisabled = false;
            this.okDisabled = false;
            this.clickOk = new core.EventEmitter();
            this.clickToday = new core.EventEmitter();
            this.prefixCls = 'ant-calendar';
            this.isTemplateRef = core$1.isTemplateRef;
            this.isNonEmptyString = core$1.isNonEmptyString;
        }
        /** @nocollapse */ CalendarFooterComponent.ɵfac = function CalendarFooterComponent_Factory(t) { return new (t || CalendarFooterComponent)(); };
        /** @nocollapse */ CalendarFooterComponent.ɵcmp = core.ɵɵdefineComponent({ type: CalendarFooterComponent, selectors: [["calendar-footer"]], inputs: { locale: "locale", showToday: "showToday", hasTimePicker: "hasTimePicker", isRange: "isRange", showTimePicker: "showTimePicker", timePickerDisabled: "timePickerDisabled", okDisabled: "okDisabled", disabledDate: "disabledDate", extraFooter: "extraFooter", rangeQuickSelector: "rangeQuickSelector" }, outputs: { showTimePickerChange: "showTimePickerChange", clickOk: "clickOk", clickToday: "clickToday" }, exportAs: ["calendarFooter"], decls: 4, vars: 8, consts: [[3, "class", 4, "ngIf"], [4, "ngTemplateOutlet"], [3, "ngSwitch"], [4, "ngSwitchCase"], [3, "innerHTML"], [3, "locale", "disabledDate", "hasTimePicker", "clickToday", 4, "ngIf"], [3, "locale", "timePickerDisabled", "showTimePicker", "showTimePickerChange", 4, "ngIf"], [3, "okDisabled", "locale", "clickOk", 4, "ngIf"], [3, "locale", "disabledDate", "hasTimePicker", "clickToday"], [3, "locale", "timePickerDisabled", "showTimePicker", "showTimePickerChange"], [3, "okDisabled", "locale", "clickOk"]], template: function CalendarFooterComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "div");
                core.ɵɵtemplate(1, CalendarFooterComponent_div_1_Template, 2, 5, "div", 0);
                core.ɵɵtemplate(2, CalendarFooterComponent_div_2_Template, 4, 7, "div", 0);
                core.ɵɵtemplate(3, CalendarFooterComponent_span_3_Template, 4, 6, "span", 0);
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵclassMapInterpolate3("", ctx.prefixCls, "-footer ", ctx.isRange ? ctx.prefixCls + "-range-bottom" : "", " ", ctx.hasTimePicker ? ctx.prefixCls + "-footer-show-ok" : "", "");
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.rangeQuickSelector);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.extraFooter);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.showToday || ctx.hasTimePicker);
            } }, directives: [common.NgIf, common.NgTemplateOutlet, common.NgSwitch, common.NgSwitchCase, TodayButtonComponent, TimePickerButtonComponent, OkButtonComponent], encapsulation: 2, changeDetection: 0 });
        return CalendarFooterComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(CalendarFooterComponent, [{
            type: core.Component,
            args: [{
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    // tslint:disable-next-line:component-selector
                    selector: 'calendar-footer',
                    exportAs: 'calendarFooter',
                    templateUrl: 'calendar-footer.component.html'
                }]
        }], null, { locale: [{
                type: core.Input
            }], showToday: [{
                type: core.Input
            }], hasTimePicker: [{
                type: core.Input
            }], isRange: [{
                type: core.Input
            }], showTimePicker: [{
                type: core.Input
            }], showTimePickerChange: [{
                type: core.Output
            }], timePickerDisabled: [{
                type: core.Input
            }], okDisabled: [{
                type: core.Input
            }], disabledDate: [{
                type: core.Input
            }], extraFooter: [{
                type: core.Input
            }], rangeQuickSelector: [{
                type: core.Input
            }], clickOk: [{
                type: core.Output
            }], clickToday: [{
                type: core.Output
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    function DecadePanelComponent_tr_9_td_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "td", 5);
        core.ɵɵlistener("click", function DecadePanelComponent_tr_9_td_1_Template_td_click_0_listener($event) { var cell_r2411 = ctx.$implicit; return cell_r2411.onClick(); });
        core.ɵɵelementStart(1, "a");
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var cell_r2411 = ctx.$implicit;
        var ctx_r2410 = core.ɵɵnextContext(2);
        core.ɵɵpropertyInterpolate("title", cell_r2411.title);
        core.ɵɵproperty("ngClass", cell_r2411.classMap);
        core.ɵɵadvance(1);
        core.ɵɵclassMapInterpolate1("", ctx_r2410.prefixCls, "-decade");
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(cell_r2411.content);
    } }
    function DecadePanelComponent_tr_9_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "tr", 3);
        core.ɵɵtemplate(1, DecadePanelComponent_tr_9_td_1_Template, 3, 6, "td", 4);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var row_r2409 = ctx.$implicit;
        var ctx_r2408 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", row_r2409)("ngForTrackBy", ctx_r2408.trackPanelDecade);
    } }
    var MAX_ROW = 4;
    var MAX_COL = 3;
    var DecadePanelComponent = /** @class */ (function () {
        function DecadePanelComponent() {
            this.valueChange = new core.EventEmitter();
            this.prefixCls = 'ant-calendar-decade-panel';
        }
        Object.defineProperty(DecadePanelComponent.prototype, "startYear", {
            get: function () {
                return parseInt("" + this.value.getYear() / 100, 10) * 100;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DecadePanelComponent.prototype, "endYear", {
            get: function () {
                return this.startYear + 99;
            },
            enumerable: true,
            configurable: true
        });
        DecadePanelComponent.prototype.ngOnChanges = function (changes) {
            if (changes.value) {
                this.render();
            }
        };
        DecadePanelComponent.prototype.previousCentury = function () {
            this.gotoYear(-100);
        };
        DecadePanelComponent.prototype.nextCentury = function () {
            this.gotoYear(100);
        };
        DecadePanelComponent.prototype.trackPanelDecade = function (_index, decadeData) {
            return decadeData.content;
        };
        DecadePanelComponent.prototype.render = function () {
            if (this.value) {
                this.panelDecades = this.makePanelDecades();
            }
        };
        // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
        DecadePanelComponent.prototype.gotoYear = function (amount) {
            this.value = this.value.addYears(amount);
            // this.valueChange.emit(this.value); // Do not try to trigger final value change
            this.render();
        };
        DecadePanelComponent.prototype.chooseDecade = function (startYear) {
            this.value = this.value.setYear(startYear);
            this.valueChange.emit(this.value);
        };
        DecadePanelComponent.prototype.makePanelDecades = function () {
            var _this = this;
            var decades = [];
            var currentYear = this.value.getYear();
            var startYear = this.startYear;
            var endYear = this.endYear;
            var previousYear = startYear - 10;
            var index = 0;
            for (var rowIndex = 0; rowIndex < MAX_ROW; rowIndex++) {
                decades[rowIndex] = [];
                var _loop_1 = function (colIndex) {
                    var _a;
                    var start = previousYear + index * 10;
                    var end = previousYear + index * 10 + 9;
                    var content = start + "-" + end;
                    var cell = (decades[rowIndex][colIndex] = {
                        content: content,
                        title: content,
                        isCurrent: currentYear >= start && currentYear <= end,
                        isLowerThanStart: end < startYear,
                        isBiggerThanEnd: start > endYear,
                        classMap: null,
                        onClick: null
                    });
                    cell.classMap = (_a = {},
                        _a[this_1.prefixCls + "-cell"] = true,
                        _a[this_1.prefixCls + "-selected-cell"] = cell.isCurrent,
                        _a[this_1.prefixCls + "-last-century-cell"] = cell.isLowerThanStart,
                        _a[this_1.prefixCls + "-next-century-cell"] = cell.isBiggerThanEnd,
                        _a);
                    if (cell.isLowerThanStart) {
                        cell.onClick = function () { return _this.previousCentury(); };
                    }
                    else if (cell.isBiggerThanEnd) {
                        cell.onClick = function () { return _this.nextCentury(); };
                    }
                    else {
                        cell.onClick = function () { return _this.chooseDecade(start); };
                    }
                    index++;
                };
                var this_1 = this;
                for (var colIndex = 0; colIndex < MAX_COL; colIndex++) {
                    _loop_1(colIndex);
                }
            }
            return decades;
        };
        /** @nocollapse */ DecadePanelComponent.ɵfac = function DecadePanelComponent_Factory(t) { return new (t || DecadePanelComponent)(); };
        /** @nocollapse */ DecadePanelComponent.ɵcmp = core.ɵɵdefineComponent({ type: DecadePanelComponent, selectors: [["decade-panel"]], inputs: { locale: "locale", value: "value" }, outputs: { valueChange: "valueChange" }, exportAs: ["decadePanel"], features: [core.ɵɵNgOnChangesFeature()], decls: 10, vars: 29, consts: [["role", "button", 3, "title", "click"], ["cellSpacing", "0", "role", "grid"], ["role", "row", 4, "ngFor", "ngForOf"], ["role", "row"], ["role", "gridcell", 3, "title", "ngClass", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "gridcell", 3, "title", "ngClass", "click"]], template: function DecadePanelComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "div");
                core.ɵɵelementStart(1, "div");
                core.ɵɵelementStart(2, "a", 0);
                core.ɵɵlistener("click", function DecadePanelComponent_Template_a_click_2_listener($event) { return ctx.previousCentury(); });
                core.ɵɵelementEnd();
                core.ɵɵelementStart(3, "div");
                core.ɵɵtext(4);
                core.ɵɵelementEnd();
                core.ɵɵelementStart(5, "a", 0);
                core.ɵɵlistener("click", function DecadePanelComponent_Template_a_click_5_listener($event) { return ctx.nextCentury(); });
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(6, "div");
                core.ɵɵelementStart(7, "table", 1);
                core.ɵɵelementStart(8, "tbody");
                core.ɵɵtemplate(9, DecadePanelComponent_tr_9_Template, 2, 2, "tr", 2);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵclassMap(ctx.prefixCls);
                core.ɵɵadvance(1);
                core.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-header");
                core.ɵɵadvance(1);
                core.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-prev-century-btn");
                core.ɵɵpropertyInterpolate("title", ctx.locale.previousCentury);
                core.ɵɵadvance(1);
                core.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-century");
                core.ɵɵadvance(1);
                core.ɵɵtextInterpolate2("", ctx.startYear, "-", ctx.endYear, "");
                core.ɵɵadvance(1);
                core.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-next-century-btn");
                core.ɵɵpropertyInterpolate("title", ctx.locale.nextCentury);
                core.ɵɵadvance(1);
                core.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-body");
                core.ɵɵadvance(1);
                core.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-table");
                core.ɵɵadvance(1);
                core.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-tbody");
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngForOf", ctx.panelDecades);
            } }, directives: [common.NgForOf, common.NgClass], encapsulation: 2, changeDetection: 0 });
        return DecadePanelComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(DecadePanelComponent, [{
            type: core.Component,
            args: [{
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    // tslint:disable-next-line:component-selector
                    selector: 'decade-panel',
                    exportAs: 'decadePanel',
                    templateUrl: 'decade-panel.component.html'
                }]
        }], function () { return []; }, { locale: [{
                type: core.Input
            }], value: [{
                type: core.Input
            }], valueChange: [{
                type: core.Output
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    function YearPanelComponent_tr_13_td_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "td", 5);
        core.ɵɵlistener("click", function YearPanelComponent_tr_13_td_1_Template_td_click_0_listener($event) { var yearCell_r2466 = ctx.$implicit; return yearCell_r2466.disabled ? null : yearCell_r2466.onClick(); });
        core.ɵɵelementStart(1, "a");
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var yearCell_r2466 = ctx.$implicit;
        var ctx_r2465 = core.ɵɵnextContext(2);
        core.ɵɵpropertyInterpolate("title", yearCell_r2466.title);
        core.ɵɵproperty("ngClass", yearCell_r2466.classMap);
        core.ɵɵadvance(1);
        core.ɵɵclassMapInterpolate1("", ctx_r2465.prefixCls, "-year");
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(yearCell_r2466.content);
    } }
    function YearPanelComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "tr", 3);
        core.ɵɵtemplate(1, YearPanelComponent_tr_13_td_1_Template, 3, 6, "td", 4);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var row_r2464 = ctx.$implicit;
        var ctx_r2463 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", row_r2464)("ngForTrackBy", ctx_r2463.trackPanelYear);
    } }
    var MAX_ROW$1 = 4;
    var MAX_COL$1 = 3;
    var YearPanelComponent = /** @class */ (function () {
        function YearPanelComponent() {
            this.valueChange = new core.EventEmitter();
            this.decadePanelShow = new core.EventEmitter();
            this.prefixCls = 'ant-calendar-year-panel';
        }
        Object.defineProperty(YearPanelComponent.prototype, "currentYear", {
            get: function () {
                return this.value.getYear();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(YearPanelComponent.prototype, "startYear", {
            get: function () {
                return parseInt("" + this.currentYear / 10, 10) * 10;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(YearPanelComponent.prototype, "endYear", {
            get: function () {
                return this.startYear + 9;
            },
            enumerable: true,
            configurable: true
        });
        YearPanelComponent.prototype.ngOnChanges = function (changes) {
            if (changes.value || changes.disabledDate) {
                this.render();
            }
        };
        YearPanelComponent.prototype.previousDecade = function () {
            this.gotoYear(-10);
        };
        YearPanelComponent.prototype.nextDecade = function () {
            this.gotoYear(10);
        };
        YearPanelComponent.prototype.trackPanelYear = function (_index, yearData) {
            return yearData.content;
        };
        YearPanelComponent.prototype.render = function () {
            if (this.value) {
                this.panelYears = this.makePanelYears();
            }
        };
        // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
        YearPanelComponent.prototype.gotoYear = function (amount) {
            this.value = this.value.addYears(amount);
            // this.valueChange.emit(this.value); // Do not trigger final value change
            this.render();
        };
        YearPanelComponent.prototype.chooseYear = function (year) {
            this.value = this.value.setYear(year);
            this.valueChange.emit(this.value);
            this.render();
        };
        YearPanelComponent.prototype.makePanelYears = function () {
            var _this = this;
            var years = [];
            var currentYear = this.currentYear;
            var startYear = this.startYear;
            var endYear = this.endYear;
            var previousYear = startYear - 1;
            var index = 0;
            for (var rowIndex = 0; rowIndex < MAX_ROW$1; rowIndex++) {
                years[rowIndex] = [];
                var _loop_1 = function (colIndex) {
                    var _a;
                    var year = previousYear + index;
                    var content = String(year);
                    var disabled = this_1.disabledDate ? this_1.disabledDate(this_1.value.setYear(year).nativeDate) : false;
                    var cell = (years[rowIndex][colIndex] = {
                        disabled: disabled,
                        content: content,
                        year: year,
                        title: content,
                        isCurrent: year === currentYear,
                        isLowerThanStart: year < startYear,
                        isBiggerThanEnd: year > endYear,
                        classMap: null,
                        onClick: null
                    });
                    cell.classMap = (_a = {},
                        _a[this_1.prefixCls + "-cell"] = true,
                        _a[this_1.prefixCls + "-selected-cell"] = cell.isCurrent,
                        _a[this_1.prefixCls + "-cell-disabled"] = disabled,
                        _a[this_1.prefixCls + "-last-decade-cell"] = cell.isLowerThanStart,
                        _a[this_1.prefixCls + "-next-decade-cell"] = cell.isBiggerThanEnd,
                        _a);
                    if (cell.isLowerThanStart) {
                        cell.onClick = function () { return _this.previousDecade(); };
                    }
                    else if (cell.isBiggerThanEnd) {
                        cell.onClick = function () { return _this.nextDecade(); };
                    }
                    else {
                        cell.onClick = function () { return _this.chooseYear(cell.year); };
                    }
                    index++;
                };
                var this_1 = this;
                for (var colIndex = 0; colIndex < MAX_COL$1; colIndex++) {
                    _loop_1(colIndex);
                }
            }
            return years;
        };
        /** @nocollapse */ YearPanelComponent.ɵfac = function YearPanelComponent_Factory(t) { return new (t || YearPanelComponent)(); };
        /** @nocollapse */ YearPanelComponent.ɵcmp = core.ɵɵdefineComponent({ type: YearPanelComponent, selectors: [["year-panel"]], inputs: { locale: "locale", value: "value", disabledDate: "disabledDate" }, outputs: { valueChange: "valueChange", decadePanelShow: "decadePanelShow" }, exportAs: ["yearPanel"], features: [core.ɵɵNgOnChangesFeature()], decls: 14, vars: 36, consts: [["role", "button", 3, "title", "click"], ["cellSpacing", "0", "role", "grid"], ["role", "row", 4, "ngFor", "ngForOf"], ["role", "row"], ["role", "gridcell", 3, "title", "ngClass", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "gridcell", 3, "title", "ngClass", "click"]], template: function YearPanelComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "div");
                core.ɵɵelementStart(1, "div");
                core.ɵɵelementStart(2, "div");
                core.ɵɵelementStart(3, "a", 0);
                core.ɵɵlistener("click", function YearPanelComponent_Template_a_click_3_listener($event) { return ctx.previousDecade(); });
                core.ɵɵelementEnd();
                core.ɵɵelementStart(4, "a", 0);
                core.ɵɵlistener("click", function YearPanelComponent_Template_a_click_4_listener($event) { return ctx.decadePanelShow.emit(); });
                core.ɵɵelementStart(5, "span");
                core.ɵɵtext(6);
                core.ɵɵelementEnd();
                core.ɵɵelementStart(7, "span");
                core.ɵɵtext(8, "x");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(9, "a", 0);
                core.ɵɵlistener("click", function YearPanelComponent_Template_a_click_9_listener($event) { return ctx.nextDecade(); });
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(10, "div");
                core.ɵɵelementStart(11, "table", 1);
                core.ɵɵelementStart(12, "tbody");
                core.ɵɵtemplate(13, YearPanelComponent_tr_13_Template, 2, 2, "tr", 2);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵclassMap(ctx.prefixCls);
                core.ɵɵadvance(2);
                core.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-header");
                core.ɵɵadvance(1);
                core.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-prev-decade-btn");
                core.ɵɵpropertyInterpolate("title", ctx.locale.previousDecade);
                core.ɵɵadvance(1);
                core.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-decade-select");
                core.ɵɵpropertyInterpolate("title", ctx.locale.decadeSelect);
                core.ɵɵadvance(1);
                core.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-decade-select-content");
                core.ɵɵadvance(1);
                core.ɵɵtextInterpolate2(" ", ctx.startYear, "-", ctx.endYear, " ");
                core.ɵɵadvance(1);
                core.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-decade-select-arrow");
                core.ɵɵadvance(2);
                core.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-next-decade-btn");
                core.ɵɵpropertyInterpolate("title", ctx.locale.nextDecade);
                core.ɵɵadvance(1);
                core.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-body");
                core.ɵɵadvance(1);
                core.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-table");
                core.ɵɵadvance(1);
                core.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-tbody");
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngForOf", ctx.panelYears);
            } }, directives: [common.NgForOf, common.NgClass], styles: ["\n      .ant-calendar-year-panel-cell-disabled .ant-calendar-year-panel-year,\n      .ant-calendar-year-panel-cell-disabled .ant-calendar-year-panel-year:hover {\n        color: rgba(0, 0, 0, 0.25);\n        background: #f5f5f5;\n        cursor: not-allowed;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
        return YearPanelComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(YearPanelComponent, [{
            type: core.Component,
            args: [{
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    // tslint:disable-next-line:component-selector
                    selector: 'year-panel',
                    exportAs: 'yearPanel',
                    templateUrl: 'year-panel.component.html',
                    styles: [
                        // Support disabledDate
                        "\n      .ant-calendar-year-panel-cell-disabled .ant-calendar-year-panel-year,\n      .ant-calendar-year-panel-cell-disabled .ant-calendar-year-panel-year:hover {\n        color: rgba(0, 0, 0, 0.25);\n        background: #f5f5f5;\n        cursor: not-allowed;\n      }\n    "
                    ]
                }]
        }], function () { return []; }, { locale: [{
                type: core.Input
            }], value: [{
                type: core.Input
            }], valueChange: [{
                type: core.Output
            }], disabledDate: [{
                type: core.Input
            }], decadePanelShow: [{
                type: core.Output
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var MonthPanelComponent = /** @class */ (function () {
        function MonthPanelComponent() {
            this.valueChange = new core.EventEmitter();
            this.yearPanelShow = new core.EventEmitter();
            this.prefixCls = 'ant-calendar-month-panel';
        }
        MonthPanelComponent.prototype.previousYear = function () {
            this.gotoYear(-1);
        };
        MonthPanelComponent.prototype.nextYear = function () {
            this.gotoYear(1);
        };
        // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
        MonthPanelComponent.prototype.gotoYear = function (amount) {
            this.value = this.value.addYears(amount);
            // this.valueChange.emit(this.value); // Do not try to trigger final value change
        };
        /** @nocollapse */ MonthPanelComponent.ɵfac = function MonthPanelComponent_Factory(t) { return new (t || MonthPanelComponent)(); };
        /** @nocollapse */ MonthPanelComponent.ɵcmp = core.ɵɵdefineComponent({ type: MonthPanelComponent, selectors: [["month-panel"]], inputs: { locale: "locale", value: "value", disabledDate: "disabledDate" }, outputs: { valueChange: "valueChange", yearPanelShow: "yearPanelShow" }, exportAs: ["monthPanel"], decls: 12, vars: 31, consts: [["role", "button", 3, "title", "click"], [3, "prefixCls", "disabledDate", "value", "valueChange"]], template: function MonthPanelComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "div");
                core.ɵɵelementStart(1, "div");
                core.ɵɵelementStart(2, "div");
                core.ɵɵelementStart(3, "a", 0);
                core.ɵɵlistener("click", function MonthPanelComponent_Template_a_click_3_listener($event) { return ctx.previousYear(); });
                core.ɵɵelementEnd();
                core.ɵɵelementStart(4, "a", 0);
                core.ɵɵlistener("click", function MonthPanelComponent_Template_a_click_4_listener($event) { return ctx.yearPanelShow.emit(); });
                core.ɵɵelementStart(5, "span");
                core.ɵɵtext(6);
                core.ɵɵelementEnd();
                core.ɵɵelementStart(7, "span");
                core.ɵɵtext(8, "x");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(9, "a", 0);
                core.ɵɵlistener("click", function MonthPanelComponent_Template_a_click_9_listener($event) { return ctx.nextYear(); });
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(10, "div");
                core.ɵɵelementStart(11, "month-table", 1);
                core.ɵɵlistener("valueChange", function MonthPanelComponent_Template_month_table_valueChange_11_listener($event) { return ctx.valueChange.emit($event); });
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵclassMap(ctx.prefixCls);
                core.ɵɵadvance(2);
                core.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-header");
                core.ɵɵadvance(1);
                core.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-prev-year-btn");
                core.ɵɵpropertyInterpolate("title", ctx.locale.previousYear);
                core.ɵɵadvance(1);
                core.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-year-select");
                core.ɵɵpropertyInterpolate("title", ctx.locale.yearSelect);
                core.ɵɵadvance(1);
                core.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-year-select-content");
                core.ɵɵadvance(1);
                core.ɵɵtextInterpolate(ctx.value.getYear());
                core.ɵɵadvance(1);
                core.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-year-select-arrow");
                core.ɵɵadvance(2);
                core.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-next-year-btn");
                core.ɵɵpropertyInterpolate("title", ctx.locale.nextYear);
                core.ɵɵadvance(1);
                core.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-body");
                core.ɵɵadvance(1);
                core.ɵɵproperty("prefixCls", "ant-calendar")("disabledDate", ctx.disabledDate)("value", ctx.value);
            } }, directives: [calendar.MonthTableComponent], encapsulation: 2, changeDetection: 0 });
        return MonthPanelComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(MonthPanelComponent, [{
            type: core.Component,
            args: [{
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    selector: 'month-panel',
                    exportAs: 'monthPanel',
                    templateUrl: 'month-panel.component.html'
                }]
        }], null, { locale: [{
                type: core.Input
            }], value: [{
                type: core.Input
            }], disabledDate: [{
                type: core.Input
            }], valueChange: [{
                type: core.Output
            }], yearPanelShow: [{
                type: core.Output
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    function CalendarHeaderComponent_a_2_Template(rf, ctx) { if (rf & 1) {
        var _r2390 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "a", 5);
        core.ɵɵlistener("click", function CalendarHeaderComponent_a_2_Template_a_click_0_listener($event) { core.ɵɵrestoreView(_r2390); var ctx_r2389 = core.ɵɵnextContext(); return ctx_r2389.previousYear(); });
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r2381 = core.ɵɵnextContext();
        core.ɵɵclassMapInterpolate1("", ctx_r2381.prefixCls, "-prev-year-btn");
        core.ɵɵpropertyInterpolate("title", ctx_r2381.locale.previousYear);
    } }
    function CalendarHeaderComponent_a_3_Template(rf, ctx) { if (rf & 1) {
        var _r2392 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "a", 5);
        core.ɵɵlistener("click", function CalendarHeaderComponent_a_3_Template_a_click_0_listener($event) { core.ɵɵrestoreView(_r2392); var ctx_r2391 = core.ɵɵnextContext(); return ctx_r2391.previousMonth(); });
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r2382 = core.ɵɵnextContext();
        core.ɵɵclassMapInterpolate1("", ctx_r2382.prefixCls, "-prev-month-btn");
        core.ɵɵpropertyInterpolate("title", ctx_r2382.locale.previousMonth);
    } }
    function CalendarHeaderComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "a", 5);
        core.ɵɵlistener("click", function CalendarHeaderComponent_ng_container_5_Template_a_click_1_listener($event) { var selector_r2393 = ctx.$implicit; return selector_r2393.onClick ? selector_r2393.onClick() : null; });
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var selector_r2393 = ctx.$implicit;
        core.ɵɵadvance(1);
        core.ɵɵclassMap(selector_r2393.className);
        core.ɵɵpropertyInterpolate("title", selector_r2393.title || null);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", selector_r2393.label, " ");
    } }
    function CalendarHeaderComponent_a_6_Template(rf, ctx) { if (rf & 1) {
        var _r2396 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "a", 5);
        core.ɵɵlistener("click", function CalendarHeaderComponent_a_6_Template_a_click_0_listener($event) { core.ɵɵrestoreView(_r2396); var ctx_r2395 = core.ɵɵnextContext(); return ctx_r2395.nextMonth(); });
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r2384 = core.ɵɵnextContext();
        core.ɵɵclassMapInterpolate1("", ctx_r2384.prefixCls, "-next-month-btn");
        core.ɵɵpropertyInterpolate("title", ctx_r2384.locale.nextMonth);
    } }
    function CalendarHeaderComponent_a_7_Template(rf, ctx) { if (rf & 1) {
        var _r2398 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "a", 5);
        core.ɵɵlistener("click", function CalendarHeaderComponent_a_7_Template_a_click_0_listener($event) { core.ɵɵrestoreView(_r2398); var ctx_r2397 = core.ɵɵnextContext(); return ctx_r2397.nextYear(); });
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r2385 = core.ɵɵnextContext();
        core.ɵɵclassMapInterpolate1("", ctx_r2385.prefixCls, "-next-year-btn");
        core.ɵɵpropertyInterpolate("title", ctx_r2385.locale.nextYear);
    } }
    function CalendarHeaderComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
        var _r2400 = core.ɵɵgetCurrentView();
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "decade-panel", 6);
        core.ɵɵlistener("valueChange", function CalendarHeaderComponent_ng_container_9_Template_decade_panel_valueChange_1_listener($event) { core.ɵɵrestoreView(_r2400); var ctx_r2399 = core.ɵɵnextContext(); return ctx_r2399.onChooseDecade($event); });
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r2386 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("locale", ctx_r2386.locale)("value", ctx_r2386.value);
    } }
    function CalendarHeaderComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
        var _r2402 = core.ɵɵgetCurrentView();
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "year-panel", 7);
        core.ɵɵlistener("valueChange", function CalendarHeaderComponent_ng_container_10_Template_year_panel_valueChange_1_listener($event) { core.ɵɵrestoreView(_r2402); var ctx_r2401 = core.ɵɵnextContext(); return ctx_r2401.onChooseYear($event); })("decadePanelShow", function CalendarHeaderComponent_ng_container_10_Template_year_panel_decadePanelShow_1_listener($event) { core.ɵɵrestoreView(_r2402); var ctx_r2403 = core.ɵɵnextContext(); return ctx_r2403.changePanel("decade"); });
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r2387 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("locale", ctx_r2387.locale)("value", ctx_r2387.value)("disabledDate", ctx_r2387.disabledYear);
    } }
    function CalendarHeaderComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
        var _r2405 = core.ɵɵgetCurrentView();
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "month-panel", 8);
        core.ɵɵlistener("valueChange", function CalendarHeaderComponent_ng_container_11_Template_month_panel_valueChange_1_listener($event) { core.ɵɵrestoreView(_r2405); var ctx_r2404 = core.ɵɵnextContext(); return ctx_r2404.onChooseMonth($event); })("yearPanelShow", function CalendarHeaderComponent_ng_container_11_Template_month_panel_yearPanelShow_1_listener($event) { core.ɵɵrestoreView(_r2405); var ctx_r2406 = core.ɵɵnextContext(); return ctx_r2406.changePanel("year"); });
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r2388 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("locale", ctx_r2388.locale)("value", ctx_r2388.value)("disabledDate", ctx_r2388.disabledMonth);
    } }
    var CalendarHeaderComponent = /** @class */ (function () {
        function CalendarHeaderComponent(dateHelper) {
            this.dateHelper = dateHelper;
            this.enablePrev = true;
            this.enableNext = true;
            this.showTimePicker = false;
            this.valueChange = new core.EventEmitter();
            this.panelModeChange = new core.EventEmitter();
            this.chooseDecade = new core.EventEmitter();
            this.chooseYear = new core.EventEmitter();
            this.chooseMonth = new core.EventEmitter();
            this.prefixCls = 'ant-calendar';
            this.yearToMonth = false; // Indicate whether should change to month panel when current is year panel (if referer=month, it should show month panel when choosed a year)
        }
        CalendarHeaderComponent.prototype.ngOnInit = function () {
            if (!this.value) {
                this.value = new core$1.CandyDate(); // Show today by default
            }
            this.render();
        };
        CalendarHeaderComponent.prototype.ngOnChanges = function (changes) {
            if (changes.value || changes.showTimePicker || changes.panelMode) {
                this.render();
            }
        };
        CalendarHeaderComponent.prototype.previousYear = function () {
            this.gotoYear(-1);
        };
        CalendarHeaderComponent.prototype.nextYear = function () {
            this.gotoYear(1);
        };
        CalendarHeaderComponent.prototype.previousMonth = function () {
            this.gotoMonth(-1);
        };
        CalendarHeaderComponent.prototype.nextMonth = function () {
            this.gotoMonth(1);
        };
        CalendarHeaderComponent.prototype.changePanel = function (mode, value) {
            this.panelModeChange.emit(mode);
            if (value) {
                this.changeValueFromInside(value);
            }
        };
        CalendarHeaderComponent.prototype.onChooseDecade = function (value) {
            this.changePanel('year', value);
            this.chooseDecade.emit(value);
        };
        CalendarHeaderComponent.prototype.onChooseYear = function (value) {
            this.changePanel(this.yearToMonth ? 'month' : 'date', value);
            this.yearToMonth = false; // Clear
            this.chooseYear.emit(value);
        };
        CalendarHeaderComponent.prototype.onChooseMonth = function (value) {
            this.changePanel('date', value);
            this.yearToMonth = false; // Clear
            this.chooseMonth.emit(value);
        };
        CalendarHeaderComponent.prototype.changeToMonthPanel = function () {
            this.changePanel('month');
            this.yearToMonth = true;
        };
        CalendarHeaderComponent.prototype.render = function () {
            if (this.value) {
                this.yearMonthDaySelectors = this.createYearMonthDaySelectors();
            }
        };
        CalendarHeaderComponent.prototype.gotoMonth = function (amount) {
            this.changeValueFromInside(this.value.addMonths(amount));
        };
        CalendarHeaderComponent.prototype.gotoYear = function (amount) {
            this.changeValueFromInside(this.value.addYears(amount));
        };
        CalendarHeaderComponent.prototype.changeValueFromInside = function (value) {
            if (this.value !== value) {
                this.value = value;
                this.valueChange.emit(this.value);
                this.render();
            }
        };
        CalendarHeaderComponent.prototype.formatDateTime = function (localeFormat) {
            return this.dateHelper.format(this.value.nativeDate, localeFormat);
        };
        CalendarHeaderComponent.prototype.createYearMonthDaySelectors = function () {
            var _this = this;
            var year;
            var month;
            var day;
            // NOTE: Compat for DatePipe formatting rules
            var yearFormat = this.locale.yearFormat;
            if (this.dateHelper.relyOnDatePipe) {
                yearFormat = this.dateHelper.transCompatFormat(yearFormat);
            }
            year = {
                className: this.prefixCls + "-year-select",
                title: this.locale.yearSelect,
                onClick: function () { return (_this.showTimePicker ? null : _this.changePanel('year')); },
                label: this.formatDateTime(yearFormat)
            };
            month = {
                className: this.prefixCls + "-month-select",
                title: this.locale.monthSelect,
                onClick: function () { return (_this.showTimePicker ? null : _this.changeToMonthPanel()); },
                label: this.formatDateTime(this.locale.monthFormat || 'MMM')
            };
            // NOTE: Compat for DatePipe formatting rules
            var dayFormat = this.locale.dayFormat;
            if (this.dateHelper.relyOnDatePipe) {
                dayFormat = this.dateHelper.transCompatFormat(dayFormat);
            }
            if (this.showTimePicker) {
                day = {
                    className: this.prefixCls + "-day-select",
                    label: this.formatDateTime(dayFormat)
                };
            }
            var result;
            if (this.locale.monthBeforeYear) {
                result = [month, day, year];
            }
            else {
                result = [year, month, day];
            }
            return result.filter(function (selector) { return !!selector; });
        };
        /** @nocollapse */ CalendarHeaderComponent.ɵfac = function CalendarHeaderComponent_Factory(t) { return new (t || CalendarHeaderComponent)(core.ɵɵdirectiveInject(i18n.DateHelperService)); };
        /** @nocollapse */ CalendarHeaderComponent.ɵcmp = core.ɵɵdefineComponent({ type: CalendarHeaderComponent, selectors: [["calendar-header"]], inputs: { locale: "locale", enablePrev: "enablePrev", enableNext: "enableNext", disabledMonth: "disabledMonth", disabledYear: "disabledYear", showTimePicker: "showTimePicker", value: "value", panelMode: "panelMode" }, outputs: { valueChange: "valueChange", panelModeChange: "panelModeChange", chooseDecade: "chooseDecade", chooseYear: "chooseYear", chooseMonth: "chooseMonth" }, exportAs: ["calendarHeader"], features: [core.ɵɵNgOnChangesFeature()], decls: 12, vars: 16, consts: [[2, "position", "relative"], ["role", "button", 3, "class", "title", "click", 4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["role", "button", 3, "title", "click"], [3, "locale", "value", "valueChange"], [3, "locale", "value", "disabledDate", "valueChange", "decadePanelShow"], [3, "locale", "value", "disabledDate", "valueChange", "yearPanelShow"]], template: function CalendarHeaderComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "div");
                core.ɵɵelementStart(1, "div", 0);
                core.ɵɵtemplate(2, CalendarHeaderComponent_a_2_Template, 1, 4, "a", 1);
                core.ɵɵtemplate(3, CalendarHeaderComponent_a_3_Template, 1, 4, "a", 1);
                core.ɵɵelementStart(4, "span");
                core.ɵɵtemplate(5, CalendarHeaderComponent_ng_container_5_Template, 3, 5, "ng-container", 2);
                core.ɵɵelementEnd();
                core.ɵɵtemplate(6, CalendarHeaderComponent_a_6_Template, 1, 4, "a", 1);
                core.ɵɵtemplate(7, CalendarHeaderComponent_a_7_Template, 1, 4, "a", 1);
                core.ɵɵelementEnd();
                core.ɵɵelementContainerStart(8, 3);
                core.ɵɵtemplate(9, CalendarHeaderComponent_ng_container_9_Template, 2, 2, "ng-container", 4);
                core.ɵɵtemplate(10, CalendarHeaderComponent_ng_container_10_Template, 2, 3, "ng-container", 4);
                core.ɵɵtemplate(11, CalendarHeaderComponent_ng_container_11_Template, 2, 3, "ng-container", 4);
                core.ɵɵelementContainerEnd();
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-header");
                core.ɵɵadvance(2);
                core.ɵɵproperty("ngIf", ctx.enablePrev && !ctx.showTimePicker);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.enablePrev && !ctx.showTimePicker);
                core.ɵɵadvance(1);
                core.ɵɵclassMapInterpolate2("", ctx.prefixCls, "-", ctx.locale.monthBeforeYear ? "my-select" : "ym-select", "");
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngForOf", ctx.yearMonthDaySelectors);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.enableNext && !ctx.showTimePicker);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.enableNext && !ctx.showTimePicker);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngSwitch", ctx.panelMode);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngSwitchCase", "decade");
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngSwitchCase", "year");
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngSwitchCase", "month");
            } }, directives: [common.NgIf, common.NgForOf, common.NgSwitch, common.NgSwitchCase, DecadePanelComponent, YearPanelComponent, MonthPanelComponent], encapsulation: 2, changeDetection: 0 });
        return CalendarHeaderComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(CalendarHeaderComponent, [{
            type: core.Component,
            args: [{
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    // tslint:disable-next-line:component-selector
                    selector: 'calendar-header',
                    exportAs: 'calendarHeader',
                    templateUrl: 'calendar-header.component.html'
                }]
        }], function () { return [{ type: i18n.DateHelperService }]; }, { locale: [{
                type: core.Input
            }], enablePrev: [{
                type: core.Input
            }], enableNext: [{
                type: core.Input
            }], disabledMonth: [{
                type: core.Input
            }], disabledYear: [{
                type: core.Input
            }], showTimePicker: [{
                type: core.Input
            }], value: [{
                type: core.Input
            }], valueChange: [{
                type: core.Output
            }], panelMode: [{
                type: core.Input
            }], panelModeChange: [{
                type: core.Output
            }], chooseDecade: [{
                type: core.Output
            }], chooseYear: [{
                type: core.Output
            }], chooseMonth: [{
                type: core.Output
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var _c0 = ["inputElement"];
    var CalendarInputComponent = /** @class */ (function () {
        function CalendarInputComponent(dateHelper) {
            this.dateHelper = dateHelper;
            this.valueChange = new core.EventEmitter();
            this.prefixCls = 'ant-calendar';
            this.invalidInputClass = '';
        }
        CalendarInputComponent.prototype.ngOnInit = function () {
            var _this = this;
            if (this.autoFocus) {
                setTimeout(function () { return _this.inputRef.nativeElement.focus(); });
            }
        };
        CalendarInputComponent.prototype.onInputKeyup = function (event, isEnter) {
            if (isEnter === void 0) { isEnter = false; }
            var date = this.checkValidInputDate(event);
            if (!date || (this.disabledDate && this.disabledDate(date.nativeDate))) {
                return;
            }
            this.value = date;
            this.valueChange.emit({ date: date, isEnter: isEnter });
        };
        CalendarInputComponent.prototype.toReadableInput = function (value) {
            return value ? this.dateHelper.format(value.nativeDate, this.format) : '';
        };
        CalendarInputComponent.prototype.checkValidInputDate = function (event) {
            var input = event.target.value;
            var date = new core$1.CandyDate(input);
            this.invalidInputClass = '';
            if (!date.isValid() || input !== this.toReadableInput(date)) {
                // Should also match the input format exactly
                this.invalidInputClass = this.prefixCls + "-input-invalid";
                return null;
            }
            return date;
        };
        /** @nocollapse */ CalendarInputComponent.ɵfac = function CalendarInputComponent_Factory(t) { return new (t || CalendarInputComponent)(core.ɵɵdirectiveInject(i18n.DateHelperService)); };
        /** @nocollapse */ CalendarInputComponent.ɵcmp = core.ɵɵdefineComponent({ type: CalendarInputComponent, selectors: [["calendar-input"]], viewQuery: function CalendarInputComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵstaticViewQuery(_c0, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.inputRef = _t.first);
            } }, inputs: { locale: "locale", format: "format", placeholder: "placeholder", disabledDate: "disabledDate", value: "value", autoFocus: "autoFocus" }, outputs: { valueChange: "valueChange" }, exportAs: ["calendarInput"], decls: 5, vars: 16, consts: [[3, "placeholder", "value", "input", "keyup.enter"], ["inputElement", ""], ["role", "button", 3, "title"]], template: function CalendarInputComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "div");
                core.ɵɵelementStart(1, "div");
                core.ɵɵelementStart(2, "input", 0, 1);
                core.ɵɵlistener("input", function CalendarInputComponent_Template_input_input_2_listener($event) { return ctx.onInputKeyup($event); })("keyup.enter", function CalendarInputComponent_Template_input_keyup_enter_2_listener($event) { return ctx.onInputKeyup($event, true); });
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelement(4, "a", 2);
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-input-wrap");
                core.ɵɵadvance(1);
                core.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-date-input-wrap");
                core.ɵɵadvance(1);
                core.ɵɵclassMapInterpolate2("", ctx.prefixCls, "-input ", ctx.invalidInputClass, "");
                core.ɵɵpropertyInterpolate("placeholder", ctx.placeholder || ctx.locale.dateSelect);
                core.ɵɵpropertyInterpolate("value", ctx.toReadableInput(ctx.value));
                core.ɵɵadvance(2);
                core.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-clear-btn");
                core.ɵɵpropertyInterpolate("title", ctx.locale.clear);
            } }, encapsulation: 2, changeDetection: 0 });
        return CalendarInputComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(CalendarInputComponent, [{
            type: core.Component,
            args: [{
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    // tslint:disable-next-line:component-selector
                    selector: 'calendar-input',
                    exportAs: 'calendarInput',
                    templateUrl: 'calendar-input.component.html'
                }]
        }], function () { return [{ type: i18n.DateHelperService }]; }, { locale: [{
                type: core.Input
            }], format: [{
                type: core.Input
            }], placeholder: [{
                type: core.Input
            }], disabledDate: [{
                type: core.Input
            }], value: [{
                type: core.Input
            }], autoFocus: [{
                type: core.Input
            }], inputRef: [{
                type: core.ViewChild,
                args: ['inputElement', { static: true }]
            }], valueChange: [{
                type: core.Output
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var defaultDisabledTime = {
        nzDisabledHours: function () {
            return [];
        },
        nzDisabledMinutes: function () {
            return [];
        },
        nzDisabledSeconds: function () {
            return [];
        }
    };
    function getTimeConfig(value, disabledTime) {
        var disabledTimeConfig = disabledTime ? disabledTime(value && value.nativeDate) : {};
        disabledTimeConfig = __assign(__assign({}, defaultDisabledTime), disabledTimeConfig);
        return disabledTimeConfig;
    }
    function isTimeValidByConfig(value, disabledTimeConfig) {
        var invalidTime = false;
        if (value) {
            var hour = value.getHours();
            var minutes = value.getMinutes();
            var seconds = value.getSeconds();
            var disabledHours = disabledTimeConfig.nzDisabledHours();
            if (disabledHours.indexOf(hour) === -1) {
                var disabledMinutes = disabledTimeConfig.nzDisabledMinutes(hour);
                if (disabledMinutes.indexOf(minutes) === -1) {
                    var disabledSeconds = disabledTimeConfig.nzDisabledSeconds(hour, minutes);
                    invalidTime = disabledSeconds.indexOf(seconds) !== -1;
                }
                else {
                    invalidTime = true;
                }
            }
            else {
                invalidTime = true;
            }
        }
        return !invalidTime;
    }
    function isTimeValid(value, disabledTime) {
        var disabledTimeConfig = getTimeConfig(value, disabledTime);
        return isTimeValidByConfig(value, disabledTimeConfig);
    }
    function isAllowedDate(value, disabledDate, disabledTime) {
        if (disabledDate) {
            if (disabledDate(value.nativeDate)) {
                return false;
            }
        }
        if (disabledTime) {
            if (!isTimeValid(value, disabledTime)) {
                return false;
            }
        }
        return true;
    }

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    function InnerPopupComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        var _r2462 = core.ɵɵgetCurrentView();
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "nz-time-picker-panel", 3);
        core.ɵɵlistener("ngModelChange", function InnerPopupComponent_ng_container_1_Template_nz_time_picker_panel_ngModelChange_1_listener($event) { core.ɵɵrestoreView(_r2462); var ctx_r2461 = core.ɵɵnextContext(); return ctx_r2461.onSelectTime($event); });
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r2460 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("nzInDatePicker", true)("ngModel", ctx_r2460.value == null ? null : ctx_r2460.value.nativeDate)("format", ctx_r2460.timeOptions.nzFormat)("nzHourStep", ctx_r2460.timeOptions.nzHourStep)("nzMinuteStep", ctx_r2460.timeOptions.nzMinuteStep)("nzSecondStep", ctx_r2460.timeOptions.nzSecondStep)("nzDisabledHours", ctx_r2460.timeOptions.nzDisabledHours)("nzDisabledMinutes", ctx_r2460.timeOptions.nzDisabledMinutes)("nzDisabledSeconds", ctx_r2460.timeOptions.nzDisabledSeconds)("nzHideDisabledOptions", ctx_r2460.timeOptions.nzHideDisabledOptions)("nzDefaultOpenValue", ctx_r2460.timeOptions.nzDefaultOpenValue)("nzUse12Hours", ctx_r2460.timeOptions.nzUse12Hours)("nzAddOn", ctx_r2460.timeOptions.nzAddOn)("opened", true);
    } }
    var InnerPopupComponent = /** @class */ (function () {
        function InnerPopupComponent() {
            this.panelModeChange = new core.EventEmitter();
            this.headerChange = new core.EventEmitter(); // Emitted when user changed the header's value
            this.selectDate = new core.EventEmitter(); // Emitted when the date is selected by click the date panel
            this.selectTime = new core.EventEmitter();
            this.dayHover = new core.EventEmitter(); // Emitted when hover on a day by mouse enter
            this.prefixCls = 'ant-calendar';
        }
        InnerPopupComponent.prototype.onSelectTime = function (date) {
            this.selectTime.emit(new core$1.CandyDate(date));
        };
        // The value real changed to outside
        InnerPopupComponent.prototype.onSelectDate = function (date) {
            var value = date instanceof core$1.CandyDate ? date : new core$1.CandyDate(date);
            var timeValue = this.timeOptions && this.timeOptions.nzDefaultOpenValue;
            // Display timeValue when value is null
            if (!this.value && timeValue) {
                value.setHms(timeValue.getHours(), timeValue.getMinutes(), timeValue.getSeconds());
            }
            this.selectDate.emit(value);
        };
        /** @nocollapse */ InnerPopupComponent.ɵfac = function InnerPopupComponent_Factory(t) { return new (t || InnerPopupComponent)(); };
        /** @nocollapse */ InnerPopupComponent.ɵcmp = core.ɵɵdefineComponent({ type: InnerPopupComponent, selectors: [["inner-popup"]], inputs: { showWeek: "showWeek", locale: "locale", showTimePicker: "showTimePicker", timeOptions: "timeOptions", enablePrev: "enablePrev", enableNext: "enableNext", disabledDate: "disabledDate", dateRender: "dateRender", selectedValue: "selectedValue", hoverValue: "hoverValue", panelMode: "panelMode", value: "value" }, outputs: { panelModeChange: "panelModeChange", headerChange: "headerChange", selectDate: "selectDate", selectTime: "selectTime", dayHover: "dayHover" }, exportAs: ["innerPopup"], decls: 4, vars: 17, consts: [[3, "panelMode", "value", "locale", "showTimePicker", "enablePrev", "enableNext", "panelModeChange", "valueChange"], [4, "ngIf"], [3, "locale", "showWeek", "value", "disabledDate", "dateCellRender", "selectedValue", "hoverValue", "valueChange", "dayHover"], [3, "nzInDatePicker", "ngModel", "format", "nzHourStep", "nzMinuteStep", "nzSecondStep", "nzDisabledHours", "nzDisabledMinutes", "nzDisabledSeconds", "nzHideDisabledOptions", "nzDefaultOpenValue", "nzUse12Hours", "nzAddOn", "opened", "ngModelChange"]], template: function InnerPopupComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "calendar-header", 0);
                core.ɵɵlistener("panelModeChange", function InnerPopupComponent_Template_calendar_header_panelModeChange_0_listener($event) { return ctx.panelMode = $event; })("panelModeChange", function InnerPopupComponent_Template_calendar_header_panelModeChange_0_listener($event) { return ctx.panelModeChange.emit($event); })("valueChange", function InnerPopupComponent_Template_calendar_header_valueChange_0_listener($event) { return ctx.value = $event; })("valueChange", function InnerPopupComponent_Template_calendar_header_valueChange_0_listener($event) { return ctx.headerChange.emit($event); });
                core.ɵɵelementEnd();
                core.ɵɵtemplate(1, InnerPopupComponent_ng_container_1_Template, 2, 14, "ng-container", 1);
                core.ɵɵelementStart(2, "div");
                core.ɵɵelementStart(3, "date-table", 2);
                core.ɵɵlistener("valueChange", function InnerPopupComponent_Template_date_table_valueChange_3_listener($event) { return ctx.onSelectDate($event); })("dayHover", function InnerPopupComponent_Template_date_table_dayHover_3_listener($event) { return ctx.dayHover.emit($event); });
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵproperty("panelMode", ctx.panelMode)("value", ctx.value)("locale", ctx.locale)("showTimePicker", ctx.showTimePicker)("enablePrev", ctx.enablePrev)("enableNext", ctx.enableNext);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.showTimePicker && ctx.timeOptions);
                core.ɵɵadvance(1);
                core.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-body");
                core.ɵɵadvance(1);
                core.ɵɵproperty("locale", ctx.locale)("showWeek", ctx.showWeek)("value", ctx.value)("disabledDate", ctx.disabledDate)("dateCellRender", ctx.dateRender)("selectedValue", ctx.selectedValue)("hoverValue", ctx.hoverValue);
            } }, directives: [CalendarHeaderComponent, common.NgIf, calendar.DateTableComponent, timePicker.NzTimePickerPanelComponent, forms.NgControlStatus, forms.NgModel], encapsulation: 2, changeDetection: 0 });
        return InnerPopupComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(InnerPopupComponent, [{
            type: core.Component,
            args: [{
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    // tslint:disable-next-line:component-selector
                    selector: 'inner-popup',
                    exportAs: 'innerPopup',
                    templateUrl: 'inner-popup.component.html'
                }]
        }], null, { showWeek: [{
                type: core.Input
            }], locale: [{
                type: core.Input
            }], showTimePicker: [{
                type: core.Input
            }], timeOptions: [{
                type: core.Input
            }], enablePrev: [{
                type: core.Input
            }], enableNext: [{
                type: core.Input
            }], disabledDate: [{
                type: core.Input
            }], dateRender: [{
                type: core.Input
            }], selectedValue: [{
                type: core.Input
            }], hoverValue: [{
                type: core.Input
            }], panelMode: [{
                type: core.Input
            }], panelModeChange: [{
                type: core.Output
            }], value: [{
                type: core.Input
            }], headerChange: [{
                type: core.Output
            }], selectDate: [{
                type: core.Output
            }], selectTime: [{
                type: core.Output
            }], dayHover: [{
                type: core.Output
            }] }); })();

    function DateRangePopupComponent_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainer(0);
    } }
    function DateRangePopupComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, DateRangePopupComponent_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 10);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        core.ɵɵnextContext();
        var _r2417 = core.ɵɵreference(9);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", _r2417);
    } }
    function DateRangePopupComponent_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainer(0);
    } }
    function DateRangePopupComponent_ng_container_5_ng_container_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainer(0);
    } }
    var _c0$1 = function () { return { partType: "left" }; };
    var _c1 = function () { return { partType: "right" }; };
    function DateRangePopupComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, DateRangePopupComponent_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 11);
        core.ɵɵelementStart(2, "div", 12);
        core.ɵɵtext(3, "~");
        core.ɵɵelementEnd();
        core.ɵɵtemplate(4, DateRangePopupComponent_ng_container_5_ng_container_4_Template, 1, 0, "ng-container", 11);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        core.ɵɵnextContext();
        var _r2425 = core.ɵɵreference(17);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", _r2425)("ngTemplateOutletContext", core.ɵɵpureFunction0(4, _c0$1));
        core.ɵɵadvance(3);
        core.ɵɵproperty("ngTemplateOutlet", _r2425)("ngTemplateOutletContext", core.ɵɵpureFunction0(5, _c1));
    } }
    function DateRangePopupComponent_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainer(0);
    } }
    function DateRangePopupComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, DateRangePopupComponent_ng_container_6_ng_container_1_Template, 1, 0, "ng-container", 10);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        core.ɵɵnextContext();
        var _r2421 = core.ɵɵreference(13);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", _r2421);
    } }
    function DateRangePopupComponent_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainer(0);
    } }
    function DateRangePopupComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, DateRangePopupComponent_ng_container_7_ng_container_1_Template, 1, 0, "ng-container", 10);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        core.ɵɵnextContext();
        var _r2421 = core.ɵɵreference(13);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", _r2421);
    } }
    function DateRangePopupComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
        var _r2436 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "calendar-input", 13);
        core.ɵɵlistener("valueChange", function DateRangePopupComponent_ng_template_8_Template_calendar_input_valueChange_0_listener($event) { core.ɵɵrestoreView(_r2436); var partType_r2434 = ctx.partType; var ctx_r2435 = core.ɵɵnextContext(); return ctx_r2435.changeValueFromInput($event, partType_r2434); });
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var partType_r2434 = ctx.partType;
        var ctx_r2418 = core.ɵɵnextContext();
        core.ɵɵproperty("value", ctx_r2418.getValue(partType_r2434))("locale", ctx_r2418.locale)("disabledDate", ctx_r2418.disabledDate)("format", ctx_r2418.format)("autoFocus", partType_r2434 !== "right")("placeholder", ctx_r2418.getPlaceholder(partType_r2434));
    } }
    function DateRangePopupComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
        var _r2439 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "inner-popup", 14);
        core.ɵɵlistener("panelModeChange", function DateRangePopupComponent_ng_template_10_Template_inner_popup_panelModeChange_0_listener($event) { core.ɵɵrestoreView(_r2439); var partType_r2437 = ctx.partType; var ctx_r2438 = core.ɵɵnextContext(); return ctx_r2438.onPanelModeChange($event, partType_r2437); })("dayHover", function DateRangePopupComponent_ng_template_10_Template_inner_popup_dayHover_0_listener($event) { core.ɵɵrestoreView(_r2439); var ctx_r2440 = core.ɵɵnextContext(); return ctx_r2440.onDayHover($event); })("selectDate", function DateRangePopupComponent_ng_template_10_Template_inner_popup_selectDate_0_listener($event) { core.ɵɵrestoreView(_r2439); var ctx_r2441 = core.ɵɵnextContext(); return ctx_r2441.changeValueFromSelect($event); })("selectTime", function DateRangePopupComponent_ng_template_10_Template_inner_popup_selectTime_0_listener($event) { core.ɵɵrestoreView(_r2439); var partType_r2437 = ctx.partType; var ctx_r2442 = core.ɵɵnextContext(); return ctx_r2442.onSelectTime($event, partType_r2437); })("headerChange", function DateRangePopupComponent_ng_template_10_Template_inner_popup_headerChange_0_listener($event) { core.ɵɵrestoreView(_r2439); var partType_r2437 = ctx.partType; var ctx_r2443 = core.ɵɵnextContext(); return ctx_r2443.onHeaderChange($event, partType_r2437); });
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var partType_r2437 = ctx.partType;
        var ctx_r2420 = core.ɵɵnextContext();
        core.ɵɵproperty("showWeek", ctx_r2420.showWeek)("locale", ctx_r2420.locale)("showTimePicker", ctx_r2420.hasTimePicker && ctx_r2420.showTimePicker)("timeOptions", ctx_r2420.getTimeOptions(partType_r2437))("panelMode", ctx_r2420.getPanelMode(partType_r2437))("value", ctx_r2420.getValueBySelector(partType_r2437))("disabledDate", ctx_r2420.disabledDate)("dateRender", ctx_r2420.dateRender)("selectedValue", ctx_r2420.selectedValue)("hoverValue", ctx_r2420.hoverValue)("enablePrev", ctx_r2420.enablePrevNext("prev", partType_r2437))("enableNext", ctx_r2420.enablePrevNext("next", partType_r2437));
    } }
    function DateRangePopupComponent_ng_template_12_calendar_footer_0_Template(rf, ctx) { if (rf & 1) {
        var _r2446 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "calendar-footer", 16);
        core.ɵɵlistener("showTimePickerChange", function DateRangePopupComponent_ng_template_12_calendar_footer_0_Template_calendar_footer_showTimePickerChange_0_listener($event) { core.ɵɵrestoreView(_r2446); var ctx_r2445 = core.ɵɵnextContext(2); return ctx_r2445.showTimePicker = $event; })("showTimePickerChange", function DateRangePopupComponent_ng_template_12_calendar_footer_0_Template_calendar_footer_showTimePickerChange_0_listener($event) { core.ɵɵrestoreView(_r2446); var ctx_r2447 = core.ɵɵnextContext(2); return ctx_r2447.onShowTimePickerChange($event); })("clickOk", function DateRangePopupComponent_ng_template_12_calendar_footer_0_Template_calendar_footer_clickOk_0_listener($event) { core.ɵɵrestoreView(_r2446); var ctx_r2448 = core.ɵɵnextContext(2); return ctx_r2448.onClickOk(); })("clickToday", function DateRangePopupComponent_ng_template_12_calendar_footer_0_Template_calendar_footer_clickToday_0_listener($event) { core.ɵɵrestoreView(_r2446); var ctx_r2449 = core.ɵɵnextContext(2); return ctx_r2449.onClickToday($event); });
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r2444 = core.ɵɵnextContext(2);
        var _r2427 = core.ɵɵreference(19);
        core.ɵɵproperty("locale", ctx_r2444.locale)("showToday", ctx_r2444.showToday)("hasTimePicker", ctx_r2444.hasTimePicker)("timePickerDisabled", ctx_r2444.timePickerDisabled())("okDisabled", ctx_r2444.okDisabled())("extraFooter", ctx_r2444.extraFooter)("rangeQuickSelector", ctx_r2444.ranges ? _r2427 : null)("showTimePicker", ctx_r2444.showTimePicker);
    } }
    function DateRangePopupComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtemplate(0, DateRangePopupComponent_ng_template_12_calendar_footer_0_Template, 1, 8, "calendar-footer", 15);
    } if (rf & 2) {
        var ctx_r2422 = core.ɵɵnextContext();
        core.ɵɵproperty("ngIf", ctx_r2422.hasFooter);
    } }
    function DateRangePopupComponent_ng_template_14_ng_container_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainer(0);
    } }
    function DateRangePopupComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtemplate(0, DateRangePopupComponent_ng_template_14_ng_container_0_Template, 1, 0, "ng-container", 10);
    } if (rf & 2) {
        core.ɵɵnextContext();
        var _r2419 = core.ɵɵreference(11);
        core.ɵɵproperty("ngTemplateOutlet", _r2419);
    } }
    function DateRangePopupComponent_ng_template_16_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainer(0);
    } }
    function DateRangePopupComponent_ng_template_16_ng_container_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainer(0);
    } }
    var _c2 = function (a0) { return { partType: a0 }; };
    function DateRangePopupComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div");
        core.ɵɵtemplate(1, DateRangePopupComponent_ng_template_16_ng_container_1_Template, 1, 0, "ng-container", 11);
        core.ɵɵelementStart(2, "div", 17);
        core.ɵɵtemplate(3, DateRangePopupComponent_ng_template_16_ng_container_3_Template, 1, 0, "ng-container", 11);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var partType_r2451 = ctx.partType;
        var ctx_r2426 = core.ɵɵnextContext();
        var _r2417 = core.ɵɵreference(9);
        var _r2419 = core.ɵɵreference(11);
        core.ɵɵclassMapInterpolate3("", ctx_r2426.prefixCls, "-range-part ", ctx_r2426.prefixCls, "-range-", partType_r2451, "");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", _r2417)("ngTemplateOutletContext", core.ɵɵpureFunction1(9, _c2, partType_r2451));
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngTemplateOutlet", _r2419)("ngTemplateOutletContext", core.ɵɵpureFunction1(11, _c2, partType_r2451));
    } }
    function DateRangePopupComponent_ng_template_18_a_0_Template(rf, ctx) { if (rf & 1) {
        var _r2457 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "a", 19);
        core.ɵɵlistener("click", function DateRangePopupComponent_ng_template_18_a_0_Template_a_click_0_listener($event) { core.ɵɵrestoreView(_r2457); var name_r2455 = ctx.$implicit; var ctx_r2456 = core.ɵɵnextContext(2); return ctx_r2456.onClickPresetRange(ctx_r2456.ranges[name_r2455]); })("mouseenter", function DateRangePopupComponent_ng_template_18_a_0_Template_a_mouseenter_0_listener($event) { core.ɵɵrestoreView(_r2457); var name_r2455 = ctx.$implicit; var ctx_r2458 = core.ɵɵnextContext(2); return ctx_r2458.onHoverPresetRange(ctx_r2458.ranges[name_r2455]); })("mouseleave", function DateRangePopupComponent_ng_template_18_a_0_Template_a_mouseleave_0_listener($event) { core.ɵɵrestoreView(_r2457); var ctx_r2459 = core.ɵɵnextContext(2); return ctx_r2459.onPresetRangeMouseLeave(); });
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var name_r2455 = ctx.$implicit;
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(name_r2455);
    } }
    function DateRangePopupComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtemplate(0, DateRangePopupComponent_ng_template_18_a_0_Template, 2, 1, "a", 18);
    } if (rf & 2) {
        var ctx_r2428 = core.ɵɵnextContext();
        core.ɵɵproperty("ngForOf", ctx_r2428.getObjectKeys(ctx_r2428.ranges));
    } }
    var DateRangePopupComponent = /** @class */ (function () {
        function DateRangePopupComponent() {
            var _this = this;
            this.panelModeChange = new core.EventEmitter();
            this.calendarChange = new core.EventEmitter();
            this.valueChange = new core.EventEmitter();
            this.inputChange = new core.EventEmitter();
            this.resultOk = new core.EventEmitter(); // Emitted when done with date selecting
            this.closePicker = new core.EventEmitter(); // Notify outside to close the picker panel
            this.prefixCls = 'ant-calendar';
            this.showTimePicker = false;
            this.partTypeMap = { left: 0, right: 1 };
            this.disabledStartTime = function (value) {
                return _this.disabledTime && _this.disabledTime(value, 'start');
            };
            this.disabledEndTime = function (value) {
                return _this.disabledTime && _this.disabledTime(value, 'end');
            };
        }
        Object.defineProperty(DateRangePopupComponent.prototype, "hasTimePicker", {
            get: function () {
                return !!this.showTime;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DateRangePopupComponent.prototype, "hasFooter", {
            get: function () {
                return this.showToday || this.hasTimePicker || !!this.extraFooter || !!this.ranges;
            },
            enumerable: true,
            configurable: true
        });
        DateRangePopupComponent.prototype.ngOnInit = function () {
            var _this = this;
            // Initialization for range properties to prevent errors while later assignment
            if (this.isRange) {
                ['placeholder', 'panelMode', 'selectedValue', 'hoverValue'].forEach(function (prop) { return _this.initialArray(prop); });
            }
        };
        DateRangePopupComponent.prototype.ngOnChanges = function (changes) {
            if (this.isRange) {
                if (changes.value) {
                    // Re-initialize all related values
                    this.clearHoverValue();
                    this.selectedValue = this.value;
                    this.valueForRangeShow = this.normalizeRangeValue(this.value);
                }
            }
            // Parse showTime options
            if (changes.showTime || changes.disabledTime) {
                if (this.showTime) {
                    this.buildTimeOptions();
                }
            }
            // Show time picker when assigned panel mode as "time"
            if (changes.panelMode && this.hasTimePicker) {
                this.showTimePicker = this.panelMode === 'time';
            }
        };
        DateRangePopupComponent.prototype.onShowTimePickerChange = function (show) {
            // this.panelMode = show ? 'time' : 'date';
            // this.panelModeChange.emit(this.panelMode);
            this.panelModeChange.emit(show ? 'time' : 'date');
        };
        DateRangePopupComponent.prototype.onClickOk = function () {
            this.setValue(this.value);
            this.resultOk.emit();
        };
        DateRangePopupComponent.prototype.onClickToday = function (value) {
            // if (this.isRange) { // Show today is not support by range
            //   throw new Error('"nzShowToday" is not support for "RangePicker"!');
            // } else {
            if (!this.isRange) {
                // tslint:disable-next-line: no-any
                this.value = null; // Clear current value to not sync time by next step
                this.changeValueFromSelect(value);
            }
            this.closePickerPanel();
        };
        DateRangePopupComponent.prototype.onDayHover = function (value) {
            if (this.isRange && this.selectedValue[0] && !this.selectedValue[1]) {
                // When right value is selected, don't do hover
                var base = this.selectedValue[0]; // Use the left of selected value as the base to decide later hoverValue
                if (base.isBeforeDay(value)) {
                    this.hoverValue = [base, value];
                }
                else {
                    this.hoverValue = [value, base];
                }
            }
        };
        DateRangePopupComponent.prototype.onPanelModeChange = function (mode, partType) {
            if (this.isRange) {
                this.panelMode[this.getPartTypeIndex(partType)] = mode;
            }
            else {
                this.panelMode = mode;
            }
            this.panelModeChange.emit(this.panelMode);
        };
        DateRangePopupComponent.prototype.onHeaderChange = function (value, partType) {
            if (this.isRange) {
                this.valueForRangeShow[this.getPartTypeIndex(partType)] = value;
                this.valueForRangeShow = this.normalizeRangeValue(this.valueForRangeShow); // Should always take care of start/end
            }
        };
        DateRangePopupComponent.prototype.onSelectTime = function (value, partType) {
            if (this.isRange) {
                var newValue = this.cloneRangeDate(this.value);
                var index = this.getPartTypeIndex(partType);
                newValue[index] = this.overrideHms(value, newValue[index]);
                this.setValue(newValue);
            }
            else {
                this.setValue(this.overrideHms(value, this.value || new core$1.CandyDate())); // If not select a date currently, use today
            }
        };
        DateRangePopupComponent.prototype.changeValueFromInput = function (value, partType) {
            var date = value.date, isEnter = value.isEnter;
            if (this.isRange) {
                var newRangeValue = partType === 'left' ? [date, this.selectedValue[1]] : [this.selectedValue[0], date];
                var isValidRange = this.isValidRange(newRangeValue);
                if (isValidRange) {
                    newRangeValue = core$1.sortRangeValue(newRangeValue);
                    this.valueForRangeShow = this.normalizeRangeValue(newRangeValue);
                }
                // ? Why Can not use follow code
                // this.selectedValue[index] = date;
                this.selectedValue = this.cloneRangeDate(newRangeValue);
                this.setValueFromInput(this.cloneRangeDate(newRangeValue), isEnter && isValidRange);
            }
            else {
                this.setValueFromInput(date, isEnter);
            }
        };
        DateRangePopupComponent.prototype.changeValueFromSelect = function (value) {
            if (this.isRange) {
                var _a = __read(this.selectedValue, 2), left = _a[0], right = _a[1]; // NOTE: the left/right maybe not the sequence it select at the date panels
                if ((!left && !right) || (left && right)) {
                    // If totally full or empty, clean up && re-assign left first
                    this.hoverValue = this.selectedValue = [value];
                    this.calendarChange.emit([value.clone()]);
                }
                else if (left && !right) {
                    // If one of them is empty, assign the other one and sort, then set the final values
                    this.clearHoverValue(); // Clean up
                    this.setRangeValue('right', value);
                    this.selectedValue = core$1.sortRangeValue(this.selectedValue); // Sort
                    this.valueForRangeShow = this.normalizeRangeValue(this.selectedValue);
                    this.setValue(this.cloneRangeDate(this.selectedValue));
                    this.calendarChange.emit(this.cloneRangeDate(this.selectedValue));
                }
            }
            else {
                this.setValue(value);
            }
            // this.selectDate.emit(value);
        };
        DateRangePopupComponent.prototype.enablePrevNext = function (direction, partType) {
            if (this.isRange) {
                var _a = __read(this.valueForRangeShow, 2), start = _a[0], end = _a[1];
                var showMiddle = !start.addMonths(1).isSame(end, 'month'); // One month diff then don't show middle prev/next
                if ((partType === 'left' && direction === 'next') || (partType === 'right' && direction === 'prev')) {
                    return showMiddle;
                }
                return true;
            }
            else {
                return true;
            }
        };
        DateRangePopupComponent.prototype.getPanelMode = function (partType) {
            if (this.isRange) {
                return this.panelMode[this.getPartTypeIndex(partType)];
            }
            else {
                return this.panelMode;
            }
        };
        // Get single value or part value of a range
        DateRangePopupComponent.prototype.getValue = function (partType) {
            if (this.isRange) {
                return this.value[this.getPartTypeIndex(partType)];
            }
            else {
                return this.value;
            }
        };
        DateRangePopupComponent.prototype.getValueBySelector = function (partType) {
            if (this.isRange) {
                var valueShow = this.showTimePicker ? this.value : this.valueForRangeShow; // Use the real time value that without decorations when timepicker is shown up
                return valueShow[this.getPartTypeIndex(partType)];
            }
            else {
                return this.value;
            }
        };
        DateRangePopupComponent.prototype.getPartTypeIndex = function (partType) {
            return this.partTypeMap[partType];
        };
        DateRangePopupComponent.prototype.getPlaceholder = function (partType) {
            return this.isRange ? this.placeholder[this.getPartTypeIndex(partType)] : this.placeholder;
        };
        DateRangePopupComponent.prototype.hasSelectedValue = function () {
            return this.selectedValue && !!this.selectedValue[1] && !!this.selectedValue[0];
        };
        DateRangePopupComponent.prototype.isAllowedSelectedValue = function () {
            var selectedValue = this.selectedValue;
            if (selectedValue && selectedValue[0] && selectedValue[1]) {
                return (isAllowedDate(selectedValue[0], this.disabledDate, this.disabledStartTime) &&
                    isAllowedDate(selectedValue[1], this.disabledDate, this.disabledEndTime));
            }
            return false;
        };
        DateRangePopupComponent.prototype.timePickerDisabled = function () {
            if (!this.hasTimePicker) {
                return true;
            }
            if (this.isRange) {
                return !this.hasSelectedValue() || !!this.hoverValue.length;
            }
            else {
                return false;
            }
        };
        DateRangePopupComponent.prototype.okDisabled = function () {
            if (!this.hasTimePicker) {
                return true;
            }
            if (this.isRange) {
                return !this.isAllowedSelectedValue() || !this.hasSelectedValue() || !!this.hoverValue.length;
            }
            else {
                return this.value ? !isAllowedDate(this.value, this.disabledDate, this.disabledTime) : false;
            }
        };
        DateRangePopupComponent.prototype.getTimeOptions = function (partType) {
            if (this.showTime && this.timeOptions) {
                return this.timeOptions instanceof Array ? this.timeOptions[this.getPartTypeIndex(partType)] : this.timeOptions;
            }
            return null;
        };
        DateRangePopupComponent.prototype.onClickPresetRange = function (val) {
            var value = typeof val === 'function' ? val() : val;
            if (value) {
                this.setValue([new core$1.CandyDate(value[0]), new core$1.CandyDate(value[1])]);
                this.resultOk.emit();
            }
        };
        DateRangePopupComponent.prototype.onPresetRangeMouseLeave = function () {
            this.clearHoverValue();
        };
        DateRangePopupComponent.prototype.onHoverPresetRange = function (val) {
            if (typeof val !== 'function') {
                this.hoverValue = [new core$1.CandyDate(val[0]), new core$1.CandyDate(val[1])];
            }
        };
        DateRangePopupComponent.prototype.getObjectKeys = function (obj) {
            return obj ? Object.keys(obj) : [];
        };
        DateRangePopupComponent.prototype.closePickerPanel = function () {
            this.closePicker.emit();
        };
        DateRangePopupComponent.prototype.clearHoverValue = function () {
            this.hoverValue = [];
        };
        DateRangePopupComponent.prototype.buildTimeOptions = function () {
            if (this.showTime) {
                var showTime = typeof this.showTime === 'object' ? this.showTime : {};
                if (this.isRange) {
                    var value = this.value;
                    this.timeOptions = [this.overrideTimeOptions(showTime, value[0], 'start'), this.overrideTimeOptions(showTime, value[1], 'end')];
                }
                else {
                    this.timeOptions = this.overrideTimeOptions(showTime, this.value);
                }
            }
            else {
                this.timeOptions = null;
            }
        };
        DateRangePopupComponent.prototype.overrideTimeOptions = function (origin, value, partial) {
            var disabledTimeFn;
            if (partial) {
                disabledTimeFn = partial === 'start' ? this.disabledStartTime : this.disabledEndTime;
            }
            else {
                disabledTimeFn = this.disabledTime;
            }
            return __assign(__assign({}, origin), getTimeConfig(value, disabledTimeFn));
        };
        DateRangePopupComponent.prototype.setValueFromInput = function (value, emitValue) {
            if (emitValue === void 0) { emitValue = true; }
            this.value = value;
            if (emitValue) {
                this.inputChange.emit(this.value);
            }
            this.buildTimeOptions();
        };
        // Set value and trigger change event
        DateRangePopupComponent.prototype.setValue = function (value) {
            // TODO: Sync original time (NOTE: this should take more care of because it may depend on many change sources)
            // if (this.isRange) {
            //   // TODO: Sync time
            // } else {
            //   if (this.value) { // Sync time from the original one if it's available
            //     newValue = this.overrideHms(this.value as CandyDate, newValue as CandyDate);
            //   }
            // }
            this.value = value;
            this.valueChange.emit(this.value);
            this.buildTimeOptions();
        };
        DateRangePopupComponent.prototype.overrideHms = function (from, to) {
            if (!from || !to) {
                return null;
            }
            return to.setHms(from.getHours(), from.getMinutes(), from.getSeconds());
        };
        // Check if it's a valid range value
        DateRangePopupComponent.prototype.isValidRange = function (value) {
            if (Array.isArray(value)) {
                var _a = __read(value, 2), start = _a[0], end = _a[1];
                return !!(start && end);
            }
            return false;
        };
        DateRangePopupComponent.prototype.normalizeRangeValue = function (value) {
            var _a = __read(value, 2), start = _a[0], end = _a[1];
            var newStart = start || new core$1.CandyDate();
            var newEnd = end && end.isSameMonth(newStart) ? end.addMonths(1) : end || newStart.addMonths(1);
            return [newStart, newEnd];
        };
        // private isEmptyRangeValue(value: CandyDate[]): boolean {
        //   return !value || !Array.isArray(value) || value.every((val) => !val);
        // }
        // Renew and set a range value to trigger sub-component's change detection
        DateRangePopupComponent.prototype.setRangeValue = function (partType, value) {
            var ref = (this.selectedValue = this.cloneRangeDate(this.selectedValue));
            ref[this.getPartTypeIndex(partType)] = value;
        };
        DateRangePopupComponent.prototype.cloneRangeDate = function (value) {
            return [value[0] && value[0].clone(), value[1] && value[1].clone()];
        };
        DateRangePopupComponent.prototype.initialArray = function (key) {
            if (!this[key] || !Array.isArray(this[key])) {
                this[key] = [];
            }
        };
        /** @nocollapse */ DateRangePopupComponent.ɵfac = function DateRangePopupComponent_Factory(t) { return new (t || DateRangePopupComponent)(); };
        /** @nocollapse */ DateRangePopupComponent.ɵcmp = core.ɵɵdefineComponent({ type: DateRangePopupComponent, selectors: [["date-range-popup"]], inputs: { isRange: "isRange", showWeek: "showWeek", locale: "locale", format: "format", placeholder: "placeholder", disabledDate: "disabledDate", disabledTime: "disabledTime", showToday: "showToday", showTime: "showTime", extraFooter: "extraFooter", ranges: "ranges", dateRender: "dateRender", popupStyle: "popupStyle", dropdownClassName: "dropdownClassName", panelMode: "panelMode", value: "value" }, outputs: { panelModeChange: "panelModeChange", calendarChange: "calendarChange", valueChange: "valueChange", inputChange: "inputChange", resultOk: "resultOk", closePicker: "closePicker" }, exportAs: ["dateRangePopup"], features: [core.ɵɵNgOnChangesFeature()], decls: 20, vars: 23, consts: [[3, "ngStyle"], ["tabindex", "0"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], ["tplCalendarInput", ""], ["tplInnerPopup", ""], ["tplFooter", ""], ["tplSinglePart", ""], ["tplRangePart", ""], ["tplRangeQuickSelector", ""], [4, "ngTemplateOutlet"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-calendar-range-middle"], [3, "value", "locale", "disabledDate", "format", "autoFocus", "placeholder", "valueChange"], [3, "showWeek", "locale", "showTimePicker", "timeOptions", "panelMode", "value", "disabledDate", "dateRender", "selectedValue", "hoverValue", "enablePrev", "enableNext", "panelModeChange", "dayHover", "selectDate", "selectTime", "headerChange"], [3, "locale", "showToday", "hasTimePicker", "timePickerDisabled", "okDisabled", "extraFooter", "rangeQuickSelector", "showTimePicker", "showTimePickerChange", "clickOk", "clickToday", 4, "ngIf"], [3, "locale", "showToday", "hasTimePicker", "timePickerDisabled", "okDisabled", "extraFooter", "rangeQuickSelector", "showTimePicker", "showTimePickerChange", "clickOk", "clickToday"], [2, "outline", "none"], [3, "click", "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], [3, "click", "mouseenter", "mouseleave"]], template: function DateRangePopupComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "div", 0);
                core.ɵɵelementStart(1, "div", 1);
                core.ɵɵelementStart(2, "div");
                core.ɵɵtemplate(3, DateRangePopupComponent_ng_container_3_Template, 2, 1, "ng-container", 2);
                core.ɵɵelementStart(4, "div");
                core.ɵɵtemplate(5, DateRangePopupComponent_ng_container_5_Template, 5, 6, "ng-container", 3);
                core.ɵɵtemplate(6, DateRangePopupComponent_ng_container_6_Template, 2, 1, "ng-container", 2);
                core.ɵɵelementEnd();
                core.ɵɵtemplate(7, DateRangePopupComponent_ng_container_7_Template, 2, 1, "ng-container", 2);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵtemplate(8, DateRangePopupComponent_ng_template_8_Template, 1, 6, "ng-template", null, 4, core.ɵɵtemplateRefExtractor);
                core.ɵɵtemplate(10, DateRangePopupComponent_ng_template_10_Template, 1, 12, "ng-template", null, 5, core.ɵɵtemplateRefExtractor);
                core.ɵɵtemplate(12, DateRangePopupComponent_ng_template_12_Template, 1, 1, "ng-template", null, 6, core.ɵɵtemplateRefExtractor);
                core.ɵɵtemplate(14, DateRangePopupComponent_ng_template_14_Template, 1, 1, "ng-template", null, 7, core.ɵɵtemplateRefExtractor);
                core.ɵɵtemplate(16, DateRangePopupComponent_ng_template_16_Template, 4, 13, "ng-template", null, 8, core.ɵɵtemplateRefExtractor);
                core.ɵɵtemplate(18, DateRangePopupComponent_ng_template_18_Template, 1, 1, "ng-template", null, 9, core.ɵɵtemplateRefExtractor);
            } if (rf & 2) {
                var _r2423 = core.ɵɵreference(15);
                core.ɵɵclassMapInterpolate3("", ctx.prefixCls, "-picker-container ", ctx.dropdownClassName, " ", ctx.prefixCls, "-picker-container-placement-bottomLeft");
                core.ɵɵproperty("ngStyle", ctx.popupStyle);
                core.ɵɵadvance(1);
                core.ɵɵclassMapInterpolate4("", ctx.prefixCls, " ", ctx.showWeek ? ctx.prefixCls + "-week-number" : "", " ", ctx.hasTimePicker ? ctx.prefixCls + "-time" : "", " ", ctx.isRange ? ctx.prefixCls + "-range" : "", "");
                core.ɵɵadvance(1);
                core.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-panel");
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", !ctx.isRange);
                core.ɵɵadvance(1);
                core.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-date-panel");
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.isRange)("ngIfElse", _r2423);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", !ctx.isRange);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.isRange);
            } }, directives: [common.NgStyle, common.NgIf, common.NgTemplateOutlet, CalendarInputComponent, InnerPopupComponent, CalendarFooterComponent, common.NgForOf], encapsulation: 2, changeDetection: 0 });
        return DateRangePopupComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(DateRangePopupComponent, [{
            type: core.Component,
            args: [{
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    // tslint:disable-next-line:component-selector
                    selector: 'date-range-popup',
                    exportAs: 'dateRangePopup',
                    templateUrl: 'date-range-popup.component.html'
                }]
        }], null, { isRange: [{
                type: core.Input
            }], showWeek: [{
                type: core.Input
            }], locale: [{
                type: core.Input
            }], format: [{
                type: core.Input
            }], placeholder: [{
                type: core.Input
            }], disabledDate: [{
                type: core.Input
            }], disabledTime: [{
                type: core.Input
            }], showToday: [{
                type: core.Input
            }], showTime: [{
                type: core.Input
            }], extraFooter: [{
                type: core.Input
            }], ranges: [{
                type: core.Input
            }], dateRender: [{
                type: core.Input
            }], popupStyle: [{
                type: core.Input
            }], dropdownClassName: [{
                type: core.Input
            }], panelMode: [{
                type: core.Input
            }], value: [{
                type: core.Input
            }], panelModeChange: [{
                type: core.Output
            }], calendarChange: [{
                type: core.Output
            }], valueChange: [{
                type: core.Output
            }], inputChange: [{
                type: core.Output
            }], resultOk: [{
                type: core.Output
            }], closePicker: [{
                type: core.Output
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var LibPackerModule = /** @class */ (function () {
        function LibPackerModule() {
        }
        /** @nocollapse */ LibPackerModule.ɵmod = core.ɵɵdefineNgModule({ type: LibPackerModule });
        /** @nocollapse */ LibPackerModule.ɵinj = core.ɵɵdefineInjector({ factory: function LibPackerModule_Factory(t) { return new (t || LibPackerModule)(); }, imports: [[common.CommonModule, forms.FormsModule, i18n.NzI18nModule, timePicker.NzTimePickerModule, calendar.NzCalendarModule]] });
        return LibPackerModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(LibPackerModule, { declarations: [CalendarHeaderComponent,
            CalendarInputComponent,
            CalendarFooterComponent,
            OkButtonComponent,
            TimePickerButtonComponent,
            TodayButtonComponent,
            YearPanelComponent,
            MonthPanelComponent,
            DecadePanelComponent,
            InnerPopupComponent,
            DateRangePopupComponent], imports: [common.CommonModule, forms.FormsModule, i18n.NzI18nModule, timePicker.NzTimePickerModule, calendar.NzCalendarModule], exports: [CalendarHeaderComponent,
            CalendarInputComponent,
            CalendarFooterComponent,
            OkButtonComponent,
            TimePickerButtonComponent,
            TodayButtonComponent,
            YearPanelComponent,
            MonthPanelComponent,
            DecadePanelComponent,
            InnerPopupComponent,
            DateRangePopupComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(LibPackerModule, [{
            type: core.NgModule,
            args: [{
                    imports: [common.CommonModule, forms.FormsModule, i18n.NzI18nModule, timePicker.NzTimePickerModule, calendar.NzCalendarModule],
                    exports: [
                        CalendarHeaderComponent,
                        CalendarInputComponent,
                        CalendarFooterComponent,
                        OkButtonComponent,
                        TimePickerButtonComponent,
                        TodayButtonComponent,
                        YearPanelComponent,
                        MonthPanelComponent,
                        DecadePanelComponent,
                        InnerPopupComponent,
                        DateRangePopupComponent
                    ],
                    declarations: [
                        CalendarHeaderComponent,
                        CalendarInputComponent,
                        CalendarFooterComponent,
                        OkButtonComponent,
                        TimePickerButtonComponent,
                        TodayButtonComponent,
                        YearPanelComponent,
                        MonthPanelComponent,
                        DecadePanelComponent,
                        InnerPopupComponent,
                        DateRangePopupComponent
                    ]
                }]
        }], null, null); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var _c0$2 = ["origin"];
    var _c1$1 = ["pickerInput"];
    function NzPickerComponent_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainer(0);
    } }
    function NzPickerComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelement(1, "input", 6, 7);
        core.ɵɵtemplate(3, NzPickerComponent_ng_container_2_ng_container_3_Template, 1, 0, "ng-container", 8);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r2469 = core.ɵɵnextContext();
        var _r2473 = core.ɵɵreference(7);
        core.ɵɵadvance(1);
        core.ɵɵclassMapInterpolate1("", ctx_r2469.prefixCls, "-picker-input ant-input");
        core.ɵɵclassProp("ant-input-lg", ctx_r2469.size === "large")("ant-input-sm", ctx_r2469.size === "small")("ant-input-disabled", ctx_r2469.disabled);
        core.ɵɵpropertyInterpolate("value", ctx_r2469.getReadableValue());
        core.ɵɵpropertyInterpolate("placeholder", ctx_r2469.getPlaceholder());
        core.ɵɵproperty("disabled", ctx_r2469.disabled);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngTemplateOutlet", _r2473);
    } }
    function NzPickerComponent_ng_container_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainer(0);
    } }
    function NzPickerComponent_ng_container_3_ng_container_6_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainer(0);
    } }
    function NzPickerComponent_ng_container_3_ng_container_7_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainer(0);
    } }
    var _c2$1 = function () { return { partType: "left" }; };
    var _c3 = function () { return { partType: "right" }; };
    function NzPickerComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "span", null, 7);
        core.ɵɵtemplate(3, NzPickerComponent_ng_container_3_ng_container_3_Template, 1, 0, "ng-container", 9);
        core.ɵɵelementStart(4, "span");
        core.ɵɵtext(5, " ~ ");
        core.ɵɵelementEnd();
        core.ɵɵtemplate(6, NzPickerComponent_ng_container_3_ng_container_6_Template, 1, 0, "ng-container", 9);
        core.ɵɵtemplate(7, NzPickerComponent_ng_container_3_ng_container_7_Template, 1, 0, "ng-container", 8);
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r2470 = core.ɵɵnextContext();
        var _r2471 = core.ɵɵreference(5);
        var _r2473 = core.ɵɵreference(7);
        core.ɵɵadvance(1);
        core.ɵɵclassMapInterpolate1("", ctx_r2470.prefixCls, "-picker-input ant-input");
        core.ɵɵclassProp("ant-input-lg", ctx_r2470.size === "large")("ant-input-sm", ctx_r2470.size === "small")("ant-input-disabled", ctx_r2470.disabled);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngTemplateOutlet", _r2471)("ngTemplateOutletContext", core.ɵɵpureFunction0(14, _c2$1));
        core.ɵɵadvance(1);
        core.ɵɵclassMapInterpolate1("", ctx_r2470.prefixCls, "-range-picker-separator");
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngTemplateOutlet", _r2471)("ngTemplateOutletContext", core.ɵɵpureFunction0(15, _c3));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", _r2473);
    } }
    function NzPickerComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "input", 6);
    } if (rf & 2) {
        var partType_r2482 = ctx.partType;
        var ctx_r2472 = core.ɵɵnextContext();
        core.ɵɵclassMapInterpolate1("", ctx_r2472.prefixCls, "-range-picker-input");
        core.ɵɵpropertyInterpolate("value", ctx_r2472.getReadableValue(partType_r2482));
        core.ɵɵpropertyInterpolate("placeholder", ctx_r2472.getPlaceholder(partType_r2482));
        core.ɵɵproperty("disabled", ctx_r2472.disabled);
    } }
    function NzPickerComponent_ng_template_6_i_0_Template(rf, ctx) { if (rf & 1) {
        var _r2485 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "i", 12);
        core.ɵɵlistener("click", function NzPickerComponent_ng_template_6_i_0_Template_i_click_0_listener($event) { core.ɵɵrestoreView(_r2485); var ctx_r2484 = core.ɵɵnextContext(2); return ctx_r2484.onClickClear($event); });
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r2483 = core.ɵɵnextContext(2);
        core.ɵɵclassMapInterpolate1("", ctx_r2483.prefixCls, "-picker-clear");
    } }
    function NzPickerComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtemplate(0, NzPickerComponent_ng_template_6_i_0_Template, 1, 3, "i", 10);
        core.ɵɵelementStart(1, "span");
        core.ɵɵelement(2, "i", 11);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r2474 = core.ɵɵnextContext();
        core.ɵɵproperty("ngIf", !ctx_r2474.disabled && !ctx_r2474.isEmptyValue(ctx_r2474.value) && ctx_r2474.allowClear);
        core.ɵɵadvance(1);
        core.ɵɵclassMapInterpolate1("", ctx_r2474.prefixCls, "-picker-icon");
    } }
    function NzPickerComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
        var _r2487 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 13);
        core.ɵɵlistener("@slideMotion.done", function NzPickerComponent_ng_template_8_Template_div_animation_slideMotion_done_0_listener($event) { core.ɵɵrestoreView(_r2487); var ctx_r2486 = core.ɵɵnextContext(); return ctx_r2486.animationDone(); });
        core.ɵɵprojection(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r2475 = core.ɵɵnextContext();
        core.ɵɵstyleProp("left", ctx_r2475.currentPositionX === "start" ? "-2px" : "2px")("top", ctx_r2475.currentPositionY === "top" ? "-2px" : "2px");
        core.ɵɵproperty("nzNoAnimation", ctx_r2475.noAnimation)("@slideMotion", ctx_r2475.dropdownAnimation);
    } }
    var _c4 = ["*"];
    var NzPickerComponent = /** @class */ (function () {
        function NzPickerComponent(dateHelper, changeDetector) {
            this.dateHelper = dateHelper;
            this.changeDetector = changeDetector;
            this.noAnimation = false;
            this.isRange = false;
            this.open = undefined;
            this.valueChange = new core.EventEmitter();
            this.openChange = new core.EventEmitter(); // Emitted when overlay's open state change
            this.prefixCls = 'ant-calendar';
            this.animationOpenState = false;
            this.overlayOpen = false; // Available when "open"=undefined
            this.overlayOffsetY = 0;
            this.overlayOffsetX = -2;
            this.overlayPositions = [
                {
                    // offsetX: -10, // TODO: What a pity, cdk/overlay current not support offset configs even though it already provide these properties
                    // offsetY: -10,
                    originX: 'start',
                    originY: 'top',
                    overlayX: 'start',
                    overlayY: 'top'
                },
                {
                    originX: 'start',
                    originY: 'bottom',
                    overlayX: 'start',
                    overlayY: 'bottom'
                },
                {
                    originX: 'end',
                    originY: 'top',
                    overlayX: 'end',
                    overlayY: 'top'
                },
                {
                    originX: 'end',
                    originY: 'bottom',
                    overlayX: 'end',
                    overlayY: 'bottom'
                }
            ];
            this.dropdownAnimation = 'bottom';
            this.currentPositionX = 'start';
            this.currentPositionY = 'top';
        }
        Object.defineProperty(NzPickerComponent.prototype, "realOpenState", {
            get: function () {
                // The value that really decide the open state of overlay
                return this.isOpenHandledByUser() ? !!this.open : this.overlayOpen;
            },
            enumerable: true,
            configurable: true
        });
        NzPickerComponent.prototype.ngAfterViewInit = function () {
            if (this.autoFocus) {
                this.focus();
            }
        };
        NzPickerComponent.prototype.ngOnChanges = function (changes) {
            if (changes.open) {
                this.animationStart();
            }
        };
        NzPickerComponent.prototype.focus = function () {
            if (this.isRange) {
                var firstInput = this.pickerInput.nativeElement.querySelector('input:first-child');
                firstInput.focus(); // Focus on the first input
            }
            else {
                this.pickerInput.nativeElement.focus();
            }
        };
        // Show overlay content
        NzPickerComponent.prototype.showOverlay = function () {
            var _this = this;
            if (!this.realOpenState) {
                this.overlayOpen = true;
                this.animationStart();
                this.openChange.emit(this.overlayOpen);
                setTimeout(function () {
                    if (_this.cdkConnectedOverlay && _this.cdkConnectedOverlay.overlayRef) {
                        _this.cdkConnectedOverlay.overlayRef.updatePosition();
                    }
                });
            }
        };
        NzPickerComponent.prototype.hideOverlay = function () {
            if (this.realOpenState) {
                this.overlayOpen = false;
                this.openChange.emit(this.overlayOpen);
                this.focus();
            }
        };
        NzPickerComponent.prototype.onClickInputBox = function () {
            if (!this.disabled && !this.isOpenHandledByUser()) {
                this.showOverlay();
            }
        };
        NzPickerComponent.prototype.onClickBackdrop = function () {
            this.hideOverlay();
        };
        NzPickerComponent.prototype.onOverlayDetach = function () {
            this.hideOverlay();
        };
        // NOTE: A issue here, the first time position change, the animation will not be triggered.
        // Because the overlay's "positionChange" event is emitted after the content's full shown up.
        // All other components like "nz-dropdown" which depends on overlay also has the same issue.
        // See: https://github.com/NG-ZORRO/ng-zorro-antd/issues/1429
        NzPickerComponent.prototype.onPositionChange = function (position) {
            this.dropdownAnimation = position.connectionPair.originY === 'top' ? 'bottom' : 'top';
            this.currentPositionX = position.connectionPair.originX;
            this.currentPositionY = position.connectionPair.originY;
            this.changeDetector.detectChanges(); // Take side-effects to position styles
        };
        NzPickerComponent.prototype.onClickClear = function (event) {
            event.preventDefault();
            event.stopPropagation();
            this.value = this.isRange ? [] : null;
            this.valueChange.emit(this.value);
        };
        NzPickerComponent.prototype.getReadableValue = function (partType) {
            var value;
            if (this.isRange) {
                value = this.value[this.getPartTypeIndex(partType)];
            }
            else {
                value = this.value;
            }
            return value ? this.dateHelper.format(value.nativeDate, this.format) : null;
        };
        NzPickerComponent.prototype.getPartTypeIndex = function (partType) {
            return { left: 0, right: 1 }[partType];
        };
        NzPickerComponent.prototype.getPlaceholder = function (partType) {
            return this.isRange ? this.placeholder[this.getPartTypeIndex(partType)] : this.placeholder;
        };
        NzPickerComponent.prototype.isEmptyValue = function (value) {
            if (value === null) {
                return true;
            }
            else if (this.isRange) {
                return !value || !Array.isArray(value) || value.every(function (val) { return !val; });
            }
            else {
                return !value;
            }
        };
        // Whether open state is permanently controlled by user himself
        NzPickerComponent.prototype.isOpenHandledByUser = function () {
            return this.open !== undefined;
        };
        NzPickerComponent.prototype.animationStart = function () {
            if (this.realOpenState) {
                this.animationOpenState = true;
            }
        };
        NzPickerComponent.prototype.animationDone = function () {
            if (!this.realOpenState) {
                this.animationOpenState = false;
                this.changeDetector.markForCheck();
            }
        };
        /** @nocollapse */ NzPickerComponent.ɵfac = function NzPickerComponent_Factory(t) { return new (t || NzPickerComponent)(core.ɵɵdirectiveInject(i18n.DateHelperService), core.ɵɵdirectiveInject(core.ChangeDetectorRef)); };
        /** @nocollapse */ NzPickerComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzPickerComponent, selectors: [["nz-picker"]], viewQuery: function NzPickerComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵviewQuery(_c0$2, true);
                core.ɵɵviewQuery(overlay.CdkConnectedOverlay, true);
                core.ɵɵviewQuery(_c1$1, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.origin = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.cdkConnectedOverlay = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.pickerInput = _t.first);
            } }, inputs: { noAnimation: "noAnimation", isRange: "isRange", open: "open", disabled: "disabled", placeholder: "placeholder", allowClear: "allowClear", autoFocus: "autoFocus", className: "className", format: "format", size: "size", style: "style", value: "value" }, outputs: { valueChange: "valueChange", openChange: "openChange" }, exportAs: ["nzPicker"], features: [core.ɵɵNgOnChangesFeature()], ngContentSelectors: _c4, decls: 9, vars: 12, consts: [["cdkOverlayOrigin", "", "tabindex", "0", 3, "ngStyle", "click", "keyup.enter"], ["origin", "cdkOverlayOrigin"], [4, "ngIf"], ["tplRangeInput", ""], ["tplRightRest", ""], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayPositions", "positionChange", "backdropClick", "detach"], ["readonly", "", 3, "disabled", "value", "placeholder"], ["pickerInput", ""], [4, "ngTemplateOutlet"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", 3, "class", "click", 4, "ngIf"], ["nz-icon", "", "nzType", "calendar"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", 3, "click"], [2, "position", "relative", 3, "nzNoAnimation"]], template: function NzPickerComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵelementStart(0, "span", 0, 1);
                core.ɵɵlistener("click", function NzPickerComponent_Template_span_click_0_listener($event) { return ctx.onClickInputBox(); })("keyup.enter", function NzPickerComponent_Template_span_keyup_enter_0_listener($event) { return ctx.onClickInputBox(); });
                core.ɵɵtemplate(2, NzPickerComponent_ng_container_2_Template, 4, 10, "ng-container", 2);
                core.ɵɵtemplate(3, NzPickerComponent_ng_container_3_Template, 8, 16, "ng-container", 2);
                core.ɵɵelementEnd();
                core.ɵɵtemplate(4, NzPickerComponent_ng_template_4_Template, 1, 6, "ng-template", null, 3, core.ɵɵtemplateRefExtractor);
                core.ɵɵtemplate(6, NzPickerComponent_ng_template_6_Template, 3, 4, "ng-template", null, 4, core.ɵɵtemplateRefExtractor);
                core.ɵɵtemplate(8, NzPickerComponent_ng_template_8_Template, 2, 4, "ng-template", 5);
                core.ɵɵlistener("positionChange", function NzPickerComponent_Template_ng_template_positionChange_8_listener($event) { return ctx.onPositionChange($event); })("backdropClick", function NzPickerComponent_Template_ng_template_backdropClick_8_listener($event) { return ctx.onClickBackdrop(); })("detach", function NzPickerComponent_Template_ng_template_detach_8_listener($event) { return ctx.onOverlayDetach(); });
            } if (rf & 2) {
                var _r2468 = core.ɵɵreference(1);
                core.ɵɵclassMapInterpolate3("", ctx.prefixCls, "-picker ", ctx.size ? ctx.prefixCls + "-picker-" + ctx.size : "", " ", ctx.className, "");
                core.ɵɵproperty("ngStyle", ctx.style);
                core.ɵɵadvance(2);
                core.ɵɵproperty("ngIf", !ctx.isRange);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.isRange);
                core.ɵɵadvance(5);
                core.ɵɵproperty("cdkConnectedOverlayOrigin", _r2468)("cdkConnectedOverlayOpen", ctx.realOpenState)("cdkConnectedOverlayHasBackdrop", !ctx.isOpenHandledByUser())("cdkConnectedOverlayPositions", ctx.overlayPositions);
            } }, directives: [overlay.CdkOverlayOrigin, common.NgStyle, common.NgIf, overlay.CdkConnectedOverlay, core$1.NzConnectedOverlayDirective, common.NgTemplateOutlet, icon.NzIconDirective, core$1.NzNoAnimationDirective], encapsulation: 2, data: { animation: [core$1.slideMotion] }, changeDetection: 0 });
        return NzPickerComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzPickerComponent, [{
            type: core.Component,
            args: [{
                    encapsulation: core.ViewEncapsulation.None,
                    selector: 'nz-picker',
                    exportAs: 'nzPicker',
                    templateUrl: './picker.component.html',
                    animations: [core$1.slideMotion],
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                }]
        }], function () { return [{ type: i18n.DateHelperService }, { type: core.ChangeDetectorRef }]; }, { noAnimation: [{
                type: core.Input
            }], isRange: [{
                type: core.Input
            }], open: [{
                type: core.Input
            }], disabled: [{
                type: core.Input
            }], placeholder: [{
                type: core.Input
            }], allowClear: [{
                type: core.Input
            }], autoFocus: [{
                type: core.Input
            }], className: [{
                type: core.Input
            }], format: [{
                type: core.Input
            }], size: [{
                type: core.Input
            }], style: [{
                type: core.Input
            }], value: [{
                type: core.Input
            }], valueChange: [{
                type: core.Output
            }], openChange: [{
                type: core.Output
            }], origin: [{
                type: core.ViewChild,
                args: ['origin', { static: false }]
            }], cdkConnectedOverlay: [{
                type: core.ViewChild,
                args: [overlay.CdkConnectedOverlay, { static: false }]
            }], pickerInput: [{
                type: core.ViewChild,
                args: ['pickerInput', { static: false }]
            }] }); })();

    var POPUP_STYLE_PATCH = { position: 'relative' }; // Aim to override antd's style to support overlay's position strategy (position:absolute will cause it not working beacuse the overlay can't get the height/width of it's content)
    /**
     * The base picker for all common APIs
     */
    var AbstractPickerComponent = /** @class */ (function () {
        function AbstractPickerComponent(i18n, cdr, dateHelper, noAnimation) {
            this.i18n = i18n;
            this.cdr = cdr;
            this.dateHelper = dateHelper;
            this.noAnimation = noAnimation;
            // --- Common API
            this.nzAllowClear = true;
            this.nzAutoFocus = false;
            this.nzDisabled = false;
            this.nzPopupStyle = POPUP_STYLE_PATCH;
            this.nzOnOpenChange = new core.EventEmitter();
            this.isRange = false; // Indicate whether the value is a range value
            this.destroyed$ = new rxjs.Subject();
            this.isCustomPlaceHolder = false;
            // ------------------------------------------------------------------------
            // | Control value accessor implements
            // ------------------------------------------------------------------------
            // NOTE: onChangeFn/onTouchedFn will not be assigned if user not use as ngModel
            this.onChangeFn = function () { return void 0; };
            this.onTouchedFn = function () { return void 0; };
        }
        Object.defineProperty(AbstractPickerComponent.prototype, "realOpenState", {
            get: function () {
                return this.picker.animationOpenState;
            } // Use picker's real open state to let re-render the picker's content when shown up
            ,
            enumerable: true,
            configurable: true
        });
        AbstractPickerComponent.prototype.initValue = function () {
            this.nzValue = this.isRange ? [] : null;
        };
        AbstractPickerComponent.prototype.ngOnInit = function () {
            var _this = this;
            // Subscribe the every locale change if the nzLocale is not handled by user
            if (!this.nzLocale) {
                this.i18n.localeChange.pipe(operators.takeUntil(this.destroyed$)).subscribe(function () { return _this.setLocale(); });
            }
            // Default value
            this.initValue();
        };
        AbstractPickerComponent.prototype.ngOnChanges = function (changes) {
            if (changes.nzPopupStyle) {
                // Always assign the popup style patch
                this.nzPopupStyle = this.nzPopupStyle ? __assign(__assign({}, this.nzPopupStyle), POPUP_STYLE_PATCH) : POPUP_STYLE_PATCH;
            }
            // Mark as customized placeholder by user once nzPlaceHolder assigned at the first time
            if (changes.nzPlaceHolder && changes.nzPlaceHolder.firstChange && typeof this.nzPlaceHolder !== 'undefined') {
                this.isCustomPlaceHolder = true;
            }
            if (changes.nzLocale) {
                // The nzLocale is currently handled by user
                this.setDefaultPlaceHolder();
            }
        };
        AbstractPickerComponent.prototype.ngOnDestroy = function () {
            this.destroyed$.next();
            this.destroyed$.complete();
        };
        AbstractPickerComponent.prototype.closeOverlay = function () {
            this.picker.hideOverlay();
        };
        /**
         * Common handle for value changes
         * @param value changed value
         */
        AbstractPickerComponent.prototype.onValueChange = function (value) {
            this.nzValue = value;
            if (this.isRange) {
                var vAsRange = this.nzValue;
                if (vAsRange.length) {
                    this.onChangeFn([vAsRange[0].nativeDate, vAsRange[1].nativeDate]);
                }
                else {
                    this.onChangeFn([]);
                }
            }
            else {
                if (this.nzValue) {
                    this.onChangeFn(this.nzValue.nativeDate);
                }
                else {
                    this.onChangeFn(null);
                }
            }
            this.onTouchedFn();
        };
        /**
         * Triggered when overlayOpen changes (different with realOpenState)
         * @param open The overlayOpen in picker component
         */
        AbstractPickerComponent.prototype.onOpenChange = function (open) {
            this.nzOnOpenChange.emit(open);
        };
        AbstractPickerComponent.prototype.writeValue = function (value) {
            this.setValue(value);
            this.cdr.markForCheck();
        };
        // tslint:disable-next-line:no-any
        AbstractPickerComponent.prototype.registerOnChange = function (fn) {
            this.onChangeFn = fn;
        };
        // tslint:disable-next-line:no-any
        AbstractPickerComponent.prototype.registerOnTouched = function (fn) {
            this.onTouchedFn = fn;
        };
        AbstractPickerComponent.prototype.setDisabledState = function (disabled) {
            this.nzDisabled = disabled;
            this.cdr.markForCheck();
        };
        // ------------------------------------------------------------------------
        // | Internal methods
        // ------------------------------------------------------------------------
        // Reload locale from i18n with side effects
        AbstractPickerComponent.prototype.setLocale = function () {
            this.nzLocale = this.i18n.getLocaleData('DatePicker', {});
            this.setDefaultPlaceHolder();
            this.cdr.markForCheck();
        };
        AbstractPickerComponent.prototype.setDefaultPlaceHolder = function () {
            if (!this.isCustomPlaceHolder && this.nzLocale) {
                this.nzPlaceHolder = this.isRange ? this.nzLocale.lang.rangePlaceholder : this.nzLocale.lang.placeholder;
            }
        };
        // Safe way of setting value with default
        AbstractPickerComponent.prototype.setValue = function (value) {
            if (this.isRange) {
                this.nzValue = value ? value.map(function (val) { return new core$1.CandyDate(val); }) : [];
            }
            else {
                this.nzValue = value ? new core$1.CandyDate(value) : null;
            }
        };
        /** @nocollapse */ AbstractPickerComponent.ɵfac = function AbstractPickerComponent_Factory(t) { return new (t || AbstractPickerComponent)(core.ɵɵdirectiveInject(i18n.NzI18nService), core.ɵɵdirectiveInject(core.ChangeDetectorRef), core.ɵɵdirectiveInject(i18n.DateHelperService), core.ɵɵdirectiveInject(core$1.NzNoAnimationDirective)); };
        /** @nocollapse */ AbstractPickerComponent.ɵdir = core.ɵɵdefineDirective({ type: AbstractPickerComponent, viewQuery: function AbstractPickerComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵstaticViewQuery(NzPickerComponent, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.picker = _t.first);
            } }, inputs: { nzAllowClear: "nzAllowClear", nzAutoFocus: "nzAutoFocus", nzDisabled: "nzDisabled", nzOpen: "nzOpen", nzClassName: "nzClassName", nzDisabledDate: "nzDisabledDate", nzLocale: "nzLocale", nzPlaceHolder: "nzPlaceHolder", nzPopupStyle: "nzPopupStyle", nzDropdownClassName: "nzDropdownClassName", nzSize: "nzSize", nzStyle: "nzStyle", nzFormat: "nzFormat", nzValue: "nzValue" }, outputs: { nzOnOpenChange: "nzOnOpenChange" }, features: [core.ɵɵNgOnChangesFeature()] });
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], AbstractPickerComponent.prototype, "nzAllowClear", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], AbstractPickerComponent.prototype, "nzAutoFocus", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], AbstractPickerComponent.prototype, "nzDisabled", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], AbstractPickerComponent.prototype, "nzOpen", void 0);
        return AbstractPickerComponent;
    }());

    var DateRangePickerComponent = /** @class */ (function (_super) {
        __extends(DateRangePickerComponent, _super);
        function DateRangePickerComponent(i18n, cdr, dateHelper, noAnimation) {
            var _this = _super.call(this, i18n, cdr, dateHelper, noAnimation) || this;
            _this.showWeek = false; // Should show as week picker
            _this.nzShowToday = true;
            _this.nzOnPanelChange = new core.EventEmitter();
            _this.nzOnCalendarChange = new core.EventEmitter();
            _this.nzOnOk = new core.EventEmitter();
            return _this;
        }
        Object.defineProperty(DateRangePickerComponent.prototype, "nzShowTime", {
            get: function () {
                return this._showTime;
            },
            set: function (value) {
                this._showTime = typeof value === 'object' ? value : core$1.toBoolean(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DateRangePickerComponent.prototype, "realShowToday", {
            get: function () {
                // Range not support nzShowToday currently
                return !this.isRange && this.nzShowToday;
            },
            enumerable: true,
            configurable: true
        });
        DateRangePickerComponent.prototype.ngOnInit = function () {
            _super.prototype.ngOnInit.call(this);
            // Default format when it's empty
            if (!this.nzFormat) {
                if (this.showWeek) {
                    this.nzFormat = this.dateHelper.relyOnDatePipe ? 'yyyy-ww' : 'YYYY-WW'; // Format for week
                }
                else {
                    if (this.dateHelper.relyOnDatePipe) {
                        this.nzFormat = this.nzShowTime ? 'yyyy-MM-dd HH:mm:ss' : 'yyyy-MM-dd';
                    }
                    else {
                        this.nzFormat = this.nzShowTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD';
                    }
                }
            }
        };
        DateRangePickerComponent.prototype.ngOnChanges = function (changes) {
            _super.prototype.ngOnChanges.call(this, changes);
            if (changes.nzRenderExtraFooter) {
                this.extraFooter = core$1.valueFunctionProp(this.nzRenderExtraFooter);
            }
            if (changes.nzShowTime || changes.nzStyle) {
                this.setFixedPickerStyle();
            }
        };
        /**
         * If user press 'Enter' in input box or `nzShowTime` is false, overlay will close.
         */
        DateRangePickerComponent.prototype.onValueChange = function (value, isEnter) {
            if (isEnter === void 0) { isEnter = false; }
            _super.prototype.onValueChange.call(this, value);
            if (!this.nzShowTime || isEnter) {
                this.closeOverlay();
            }
        };
        // Emit nzOnCalendarChange when select date by nz-range-picker
        DateRangePickerComponent.prototype.onCalendarChange = function (value) {
            if (this.isRange) {
                var rangeValue = value.map(function (x) { return x.nativeDate; });
                this.nzOnCalendarChange.emit(rangeValue);
            }
        };
        // Emitted when done with date selecting
        DateRangePickerComponent.prototype.onResultOk = function () {
            if (this.isRange) {
                var value = this.nzValue;
                if (value.length) {
                    this.nzOnOk.emit([value[0].nativeDate, value[1].nativeDate]);
                }
                else {
                    this.nzOnOk.emit([]);
                }
            }
            else {
                if (this.nzValue) {
                    this.nzOnOk.emit(this.nzValue.nativeDate);
                }
                else {
                    this.nzOnOk.emit(null);
                }
            }
            this.closeOverlay();
        };
        DateRangePickerComponent.prototype.onOpenChange = function (open) {
            this.nzOnOpenChange.emit(open);
        };
        // Setup fixed style for picker
        DateRangePickerComponent.prototype.setFixedPickerStyle = function () {
            var showTimeFixes = {};
            if (this.nzShowTime) {
                showTimeFixes.width = this.isRange ? '350px' : '195px';
            }
            this.pickerStyle = __assign(__assign({}, showTimeFixes), this.nzStyle);
        };
        /** @nocollapse */ DateRangePickerComponent.ɵfac = function DateRangePickerComponent_Factory(t) { return new (t || DateRangePickerComponent)(core.ɵɵdirectiveInject(i18n.NzI18nService), core.ɵɵdirectiveInject(core.ChangeDetectorRef), core.ɵɵdirectiveInject(i18n.DateHelperService), core.ɵɵdirectiveInject(core$1.NzNoAnimationDirective)); };
        /** @nocollapse */ DateRangePickerComponent.ɵcmp = core.ɵɵdefineComponent({ type: DateRangePickerComponent, selectors: [["ng-component"]], inputs: { nzDateRender: "nzDateRender", nzDisabledTime: "nzDisabledTime", nzRenderExtraFooter: "nzRenderExtraFooter", nzShowToday: "nzShowToday", nzMode: "nzMode", nzRanges: "nzRanges", nzShowTime: "nzShowTime" }, outputs: { nzOnPanelChange: "nzOnPanelChange", nzOnCalendarChange: "nzOnCalendarChange", nzOnOk: "nzOnOk" }, features: [core.ɵɵInheritDefinitionFeature, core.ɵɵNgOnChangesFeature()], decls: 0, vars: 0, template: function DateRangePickerComponent_Template(rf, ctx) { }, encapsulation: 2 });
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], DateRangePickerComponent.prototype, "nzShowToday", void 0);
        return DateRangePickerComponent;
    }(AbstractPickerComponent));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(DateRangePickerComponent, [{
            type: core.Component,
            args: [{
                    template: "" // Just for rollup
                }]
        }], function () { return [{ type: i18n.NzI18nService }, { type: core.ChangeDetectorRef }, { type: i18n.DateHelperService }, { type: core$1.NzNoAnimationDirective }]; }, { nzDateRender: [{
                type: core.Input
            }], nzDisabledTime: [{
                type: core.Input
            }], nzRenderExtraFooter: [{
                type: core.Input
            }], nzShowToday: [{
                type: core.Input
            }], nzMode: [{
                type: core.Input
            }], nzRanges: [{
                type: core.Input
            }], nzOnPanelChange: [{
                type: core.Output
            }], nzOnCalendarChange: [{
                type: core.Output
            }], nzShowTime: [{
                type: core.Input
            }], nzOnOk: [{
                type: core.Output
            }] }); })();

    /**
     * The base picker for header panels, current support: Year/Month
     */
    var HeaderPickerComponent = /** @class */ (function (_super) {
        __extends(HeaderPickerComponent, _super);
        function HeaderPickerComponent(i18n, cdr, dateHelper, noAnimation) {
            return _super.call(this, i18n, cdr, dateHelper, noAnimation) || this;
        }
        HeaderPickerComponent.prototype.ngOnInit = function () {
            _super.prototype.ngOnInit.call(this);
            this.panelMode = this.endPanelMode;
            var allHeaderPanels = ['decade', 'year', 'month'];
            this.supportPanels = allHeaderPanels.slice(0, allHeaderPanels.indexOf(this.endPanelMode) + 1);
        };
        HeaderPickerComponent.prototype.ngOnChanges = function (changes) {
            _super.prototype.ngOnChanges.call(this, changes);
            if (changes.nzRenderExtraFooter) {
                this.extraFooter = core$1.valueFunctionProp(this.nzRenderExtraFooter);
            }
        };
        HeaderPickerComponent.prototype.onPanelModeChange = function (mode) {
            if (this.supportPanels.indexOf(mode) > -1) {
                this.panelMode = mode;
            }
            else {
                // Since the default "click year" logic can be "year panel" -> "date panel", we need force to the end panel otherwise
                this.panelMode = this.endPanelMode;
            }
        };
        HeaderPickerComponent.prototype.onChooseValue = function (mode, value) {
            if (this.endPanelMode === mode) {
                _super.prototype.onValueChange.call(this, value);
                this.closeOverlay();
            }
        };
        HeaderPickerComponent.prototype.onOpenChange = function (open) {
            if (!open) {
                this.cleanUp();
            }
            this.nzOnOpenChange.emit(open);
        };
        // Restore some initial props to let open as new in next time
        HeaderPickerComponent.prototype.cleanUp = function () {
            this.panelMode = this.endPanelMode;
        };
        /** @nocollapse */ HeaderPickerComponent.ɵfac = function HeaderPickerComponent_Factory(t) { return new (t || HeaderPickerComponent)(core.ɵɵdirectiveInject(i18n.NzI18nService), core.ɵɵdirectiveInject(core.ChangeDetectorRef), core.ɵɵdirectiveInject(i18n.DateHelperService), core.ɵɵdirectiveInject(core$1.NzNoAnimationDirective)); };
        /** @nocollapse */ HeaderPickerComponent.ɵcmp = core.ɵɵdefineComponent({ type: HeaderPickerComponent, selectors: [["ng-component"]], inputs: { nzPlaceHolder: "nzPlaceHolder", nzRenderExtraFooter: "nzRenderExtraFooter", nzDefaultValue: "nzDefaultValue", nzFormat: "nzFormat" }, features: [core.ɵɵInheritDefinitionFeature, core.ɵɵNgOnChangesFeature()], decls: 0, vars: 0, template: function HeaderPickerComponent_Template(rf, ctx) { }, encapsulation: 2 });
        return HeaderPickerComponent;
    }(AbstractPickerComponent));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(HeaderPickerComponent, [{
            type: core.Component,
            args: [{
                    template: ""
                }]
        }], function () { return [{ type: i18n.NzI18nService }, { type: core.ChangeDetectorRef }, { type: i18n.DateHelperService }, { type: core$1.NzNoAnimationDirective }]; }, { nzPlaceHolder: [{
                type: core.Input
            }], nzRenderExtraFooter: [{
                type: core.Input
            }], nzDefaultValue: [{
                type: core.Input
            }], nzFormat: [{
                type: core.Input
            }] }); })();

    function NzDatePickerComponent_date_range_popup_1_Template(rf, ctx) { if (rf & 1) {
        var _r2490 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "date-range-popup", 2);
        core.ɵɵlistener("panelModeChange", function NzDatePickerComponent_date_range_popup_1_Template_date_range_popup_panelModeChange_0_listener($event) { core.ɵɵrestoreView(_r2490); var ctx_r2489 = core.ɵɵnextContext(); return ctx_r2489.nzOnPanelChange.emit($event); })("valueChange", function NzDatePickerComponent_date_range_popup_1_Template_date_range_popup_valueChange_0_listener($event) { core.ɵɵrestoreView(_r2490); var ctx_r2491 = core.ɵɵnextContext(); return ctx_r2491.onValueChange($event); })("inputChange", function NzDatePickerComponent_date_range_popup_1_Template_date_range_popup_inputChange_0_listener($event) { core.ɵɵrestoreView(_r2490); var ctx_r2492 = core.ɵɵnextContext(); return ctx_r2492.onValueChange($event, true); })("calendarChange", function NzDatePickerComponent_date_range_popup_1_Template_date_range_popup_calendarChange_0_listener($event) { core.ɵɵrestoreView(_r2490); var ctx_r2493 = core.ɵɵnextContext(); return ctx_r2493.onCalendarChange($event); })("resultOk", function NzDatePickerComponent_date_range_popup_1_Template_date_range_popup_resultOk_0_listener($event) { core.ɵɵrestoreView(_r2490); var ctx_r2494 = core.ɵɵnextContext(); return ctx_r2494.onResultOk(); })("closePicker", function NzDatePickerComponent_date_range_popup_1_Template_date_range_popup_closePicker_0_listener($event) { core.ɵɵrestoreView(_r2490); var ctx_r2495 = core.ɵɵnextContext(); return ctx_r2495.closeOverlay(); });
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r2488 = core.ɵɵnextContext();
        core.ɵɵproperty("isRange", ctx_r2488.isRange)("showWeek", ctx_r2488.showWeek)("panelMode", ctx_r2488.nzMode)("value", ctx_r2488.nzValue)("locale", ctx_r2488.nzLocale == null ? null : ctx_r2488.nzLocale.lang)("showToday", ctx_r2488.realShowToday)("showTime", ctx_r2488.nzShowTime)("format", ctx_r2488.nzFormat)("dateRender", ctx_r2488.nzDateRender)("disabledDate", ctx_r2488.nzDisabledDate)("disabledTime", ctx_r2488.nzDisabledTime)("placeholder", ctx_r2488.nzPlaceHolder)("dropdownClassName", ctx_r2488.nzDropdownClassName)("popupStyle", ctx_r2488.nzPopupStyle)("extraFooter", ctx_r2488.extraFooter)("ranges", ctx_r2488.nzRanges);
    } }
    var NzDatePickerComponent = /** @class */ (function (_super) {
        __extends(NzDatePickerComponent, _super);
        function NzDatePickerComponent(i18n, cdr, dateHelper, renderer, elementRef, noAnimation) {
            var _this = _super.call(this, i18n, cdr, dateHelper, noAnimation) || this;
            _this.noAnimation = noAnimation;
            _this.isRange = false;
            renderer.addClass(elementRef.nativeElement, 'ant-calendar-picker');
            return _this;
        }
        /** @nocollapse */ NzDatePickerComponent.ɵfac = function NzDatePickerComponent_Factory(t) { return new (t || NzDatePickerComponent)(core.ɵɵdirectiveInject(i18n.NzI18nService), core.ɵɵdirectiveInject(core.ChangeDetectorRef), core.ɵɵdirectiveInject(i18n.DateHelperService), core.ɵɵdirectiveInject(core.Renderer2), core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(core$1.NzNoAnimationDirective, 9)); };
        /** @nocollapse */ NzDatePickerComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzDatePickerComponent, selectors: [["nz-date-picker"]], exportAs: ["nzDatePicker"], features: [core.ɵɵProvidersFeature([
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        multi: true,
                        useExisting: core.forwardRef((function () { return NzDatePickerComponent; }))
                    }
                ]), core.ɵɵInheritDefinitionFeature], decls: 2, vars: 15, consts: [[3, "isRange", "value", "open", "disabled", "format", "allowClear", "autoFocus", "placeholder", "size", "noAnimation", "valueChange", "openChange"], [3, "isRange", "showWeek", "panelMode", "value", "locale", "showToday", "showTime", "format", "dateRender", "disabledDate", "disabledTime", "placeholder", "dropdownClassName", "popupStyle", "extraFooter", "ranges", "panelModeChange", "valueChange", "inputChange", "calendarChange", "resultOk", "closePicker", 4, "ngIf"], [3, "isRange", "showWeek", "panelMode", "value", "locale", "showToday", "showTime", "format", "dateRender", "disabledDate", "disabledTime", "placeholder", "dropdownClassName", "popupStyle", "extraFooter", "ranges", "panelModeChange", "valueChange", "inputChange", "calendarChange", "resultOk", "closePicker"]], template: function NzDatePickerComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "nz-picker", 0);
                core.ɵɵlistener("valueChange", function NzDatePickerComponent_Template_nz_picker_valueChange_0_listener($event) { return ctx.onValueChange($event); })("openChange", function NzDatePickerComponent_Template_nz_picker_openChange_0_listener($event) { return ctx.onOpenChange($event); });
                core.ɵɵtemplate(1, NzDatePickerComponent_date_range_popup_1_Template, 1, 16, "date-range-popup", 1);
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵstyleSanitizer(core.ɵɵdefaultStyleSanitizer);
                core.ɵɵstyleMap(ctx.pickerStyle);
                core.ɵɵclassMap(ctx.nzClassName);
                core.ɵɵproperty("isRange", ctx.isRange)("value", ctx.nzValue)("open", ctx.nzOpen)("disabled", ctx.nzDisabled)("format", ctx.nzFormat)("allowClear", ctx.nzAllowClear)("autoFocus", ctx.nzAutoFocus)("placeholder", ctx.nzPlaceHolder)("size", ctx.nzSize)("noAnimation", ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.realOpenState);
            } }, directives: [NzPickerComponent, common.NgIf, DateRangePopupComponent], encapsulation: 2, changeDetection: 0 });
        return NzDatePickerComponent;
    }(DateRangePickerComponent));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzDatePickerComponent, [{
            type: core.Component,
            args: [{
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    selector: 'nz-date-picker',
                    exportAs: 'nzDatePicker',
                    templateUrl: './date-range-picker.component.html',
                    providers: [
                        {
                            provide: forms.NG_VALUE_ACCESSOR,
                            multi: true,
                            useExisting: core.forwardRef((function () { return NzDatePickerComponent; }))
                        }
                    ]
                }]
        }], function () { return [{ type: i18n.NzI18nService }, { type: core.ChangeDetectorRef }, { type: i18n.DateHelperService }, { type: core.Renderer2 }, { type: core.ElementRef }, { type: core$1.NzNoAnimationDirective, decorators: [{
                    type: core.Host
                }, {
                    type: core.Optional
                }] }]; }, null); })();

    function NzMonthPickerComponent_div_1_calendar_footer_6_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "calendar-footer", 8);
    } if (rf & 2) {
        var ctx_r2497 = core.ɵɵnextContext(2);
        core.ɵɵproperty("extraFooter", ctx_r2497.extraFooter);
    } }
    function NzMonthPickerComponent_div_1_Template(rf, ctx) { if (rf & 1) {
        var _r2499 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div");
        core.ɵɵelementStart(1, "div", 2);
        core.ɵɵelementStart(2, "div", 3);
        core.ɵɵelementStart(3, "div", 4);
        core.ɵɵelementStart(4, "div", 5);
        core.ɵɵelementStart(5, "calendar-header", 6);
        core.ɵɵlistener("panelModeChange", function NzMonthPickerComponent_div_1_Template_calendar_header_panelModeChange_5_listener($event) { core.ɵɵrestoreView(_r2499); var ctx_r2498 = core.ɵɵnextContext(); return ctx_r2498.onPanelModeChange($event); })("chooseYear", function NzMonthPickerComponent_div_1_Template_calendar_header_chooseYear_5_listener($event) { core.ɵɵrestoreView(_r2499); var ctx_r2500 = core.ɵɵnextContext(); return ctx_r2500.onChooseValue("year", $event); })("chooseMonth", function NzMonthPickerComponent_div_1_Template_calendar_header_chooseMonth_5_listener($event) { core.ɵɵrestoreView(_r2499); var ctx_r2501 = core.ɵɵnextContext(); return ctx_r2501.onChooseValue("month", $event); });
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵtemplate(6, NzMonthPickerComponent_div_1_calendar_footer_6_Template, 1, 1, "calendar-footer", 7);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r2496 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵclassMapInterpolate1("ant-calendar-picker-container ", ctx_r2496.nzDropdownClassName, " ant-calendar-picker-container-placement-bottomLeft");
        core.ɵɵproperty("ngStyle", ctx_r2496.nzPopupStyle);
        core.ɵɵadvance(4);
        core.ɵɵproperty("disabledMonth", ctx_r2496.nzDisabledDate)("disabledYear", ctx_r2496.nzDisabledDate)("panelMode", ctx_r2496.panelMode)("value", ctx_r2496.nzValue)("locale", ctx_r2496.nzLocale.lang)("enablePrev", true)("enableNext", true);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r2496.extraFooter);
    } }
    var NzMonthPickerComponent = /** @class */ (function (_super) {
        __extends(NzMonthPickerComponent, _super);
        function NzMonthPickerComponent(i18n, cdr, dateHelper, renderer, elementRef, noAnimation) {
            var _this = _super.call(this, i18n, cdr, dateHelper, noAnimation) || this;
            _this.noAnimation = noAnimation;
            _this.nzFormat = 'yyyy-MM';
            _this.endPanelMode = 'month';
            renderer.addClass(elementRef.nativeElement, 'ant-calendar-picker');
            return _this;
        }
        /** @nocollapse */ NzMonthPickerComponent.ɵfac = function NzMonthPickerComponent_Factory(t) { return new (t || NzMonthPickerComponent)(core.ɵɵdirectiveInject(i18n.NzI18nService), core.ɵɵdirectiveInject(core.ChangeDetectorRef), core.ɵɵdirectiveInject(i18n.DateHelperService), core.ɵɵdirectiveInject(core.Renderer2), core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(core$1.NzNoAnimationDirective, 9)); };
        /** @nocollapse */ NzMonthPickerComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzMonthPickerComponent, selectors: [["nz-month-picker"]], inputs: { nzFormat: "nzFormat" }, exportAs: ["nzMonthPicker"], features: [core.ɵɵProvidersFeature([
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        multi: true,
                        useExisting: core.forwardRef((function () { return NzMonthPickerComponent; }))
                    }
                ]), core.ɵɵInheritDefinitionFeature], decls: 2, vars: 15, consts: [[3, "isRange", "value", "open", "disabled", "format", "allowClear", "autoFocus", "placeholder", "size", "noAnimation", "valueChange", "openChange"], [4, "ngIf"], [3, "ngStyle"], ["tabindex", "0", 1, "ant-calendar", "ant-calendar-month", "ant-calendar-month-calendar"], [1, "ant-calendar-month-calendar-content"], [1, "ant-calendar-month-header-wrap"], [3, "disabledMonth", "disabledYear", "panelMode", "value", "locale", "enablePrev", "enableNext", "panelModeChange", "chooseYear", "chooseMonth"], [3, "extraFooter", 4, "ngIf"], [3, "extraFooter"]], template: function NzMonthPickerComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "nz-picker", 0);
                core.ɵɵlistener("valueChange", function NzMonthPickerComponent_Template_nz_picker_valueChange_0_listener($event) { return ctx.onValueChange($event); })("openChange", function NzMonthPickerComponent_Template_nz_picker_openChange_0_listener($event) { return ctx.onOpenChange($event); });
                core.ɵɵtemplate(1, NzMonthPickerComponent_div_1_Template, 7, 12, "div", 1);
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵstyleSanitizer(core.ɵɵdefaultStyleSanitizer);
                core.ɵɵstyleMap(ctx.nzStyle);
                core.ɵɵclassMap(ctx.nzClassName);
                core.ɵɵproperty("isRange", false)("value", ctx.nzValue)("open", ctx.nzOpen)("disabled", ctx.nzDisabled)("format", ctx.nzFormat)("allowClear", ctx.nzAllowClear)("autoFocus", ctx.nzAutoFocus)("placeholder", ctx.nzPlaceHolder)("size", ctx.nzSize)("noAnimation", ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.realOpenState);
            } }, directives: [NzPickerComponent, common.NgIf, common.NgStyle, CalendarHeaderComponent, CalendarFooterComponent], encapsulation: 2, changeDetection: 0 });
        return NzMonthPickerComponent;
    }(HeaderPickerComponent));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzMonthPickerComponent, [{
            type: core.Component,
            args: [{
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    selector: 'nz-month-picker',
                    exportAs: 'nzMonthPicker',
                    templateUrl: './header-picker.component.html',
                    providers: [
                        {
                            provide: forms.NG_VALUE_ACCESSOR,
                            multi: true,
                            useExisting: core.forwardRef((function () { return NzMonthPickerComponent; }))
                        }
                    ]
                }]
        }], function () { return [{ type: i18n.NzI18nService }, { type: core.ChangeDetectorRef }, { type: i18n.DateHelperService }, { type: core.Renderer2 }, { type: core.ElementRef }, { type: core$1.NzNoAnimationDirective, decorators: [{
                    type: core.Host
                }, {
                    type: core.Optional
                }] }]; }, { nzFormat: [{
                type: core.Input
            }] }); })();

    function NzRangePickerComponent_date_range_popup_1_Template(rf, ctx) { if (rf & 1) {
        var _r2504 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "date-range-popup", 2);
        core.ɵɵlistener("panelModeChange", function NzRangePickerComponent_date_range_popup_1_Template_date_range_popup_panelModeChange_0_listener($event) { core.ɵɵrestoreView(_r2504); var ctx_r2503 = core.ɵɵnextContext(); return ctx_r2503.nzOnPanelChange.emit($event); })("valueChange", function NzRangePickerComponent_date_range_popup_1_Template_date_range_popup_valueChange_0_listener($event) { core.ɵɵrestoreView(_r2504); var ctx_r2505 = core.ɵɵnextContext(); return ctx_r2505.onValueChange($event); })("inputChange", function NzRangePickerComponent_date_range_popup_1_Template_date_range_popup_inputChange_0_listener($event) { core.ɵɵrestoreView(_r2504); var ctx_r2506 = core.ɵɵnextContext(); return ctx_r2506.onValueChange($event, true); })("calendarChange", function NzRangePickerComponent_date_range_popup_1_Template_date_range_popup_calendarChange_0_listener($event) { core.ɵɵrestoreView(_r2504); var ctx_r2507 = core.ɵɵnextContext(); return ctx_r2507.onCalendarChange($event); })("resultOk", function NzRangePickerComponent_date_range_popup_1_Template_date_range_popup_resultOk_0_listener($event) { core.ɵɵrestoreView(_r2504); var ctx_r2508 = core.ɵɵnextContext(); return ctx_r2508.onResultOk(); })("closePicker", function NzRangePickerComponent_date_range_popup_1_Template_date_range_popup_closePicker_0_listener($event) { core.ɵɵrestoreView(_r2504); var ctx_r2509 = core.ɵɵnextContext(); return ctx_r2509.closeOverlay(); });
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r2502 = core.ɵɵnextContext();
        core.ɵɵproperty("isRange", ctx_r2502.isRange)("showWeek", ctx_r2502.showWeek)("panelMode", ctx_r2502.nzMode)("value", ctx_r2502.nzValue)("locale", ctx_r2502.nzLocale == null ? null : ctx_r2502.nzLocale.lang)("showToday", ctx_r2502.realShowToday)("showTime", ctx_r2502.nzShowTime)("format", ctx_r2502.nzFormat)("dateRender", ctx_r2502.nzDateRender)("disabledDate", ctx_r2502.nzDisabledDate)("disabledTime", ctx_r2502.nzDisabledTime)("placeholder", ctx_r2502.nzPlaceHolder)("dropdownClassName", ctx_r2502.nzDropdownClassName)("popupStyle", ctx_r2502.nzPopupStyle)("extraFooter", ctx_r2502.extraFooter)("ranges", ctx_r2502.nzRanges);
    } }
    var NzRangePickerComponent = /** @class */ (function (_super) {
        __extends(NzRangePickerComponent, _super);
        function NzRangePickerComponent(i18n, cdr, dateHelper, renderer, elementRef, noAnimation) {
            var _this = _super.call(this, i18n, cdr, dateHelper, noAnimation) || this;
            _this.noAnimation = noAnimation;
            _this.isRange = true;
            renderer.addClass(elementRef.nativeElement, 'ant-calendar-picker');
            return _this;
        }
        /** @nocollapse */ NzRangePickerComponent.ɵfac = function NzRangePickerComponent_Factory(t) { return new (t || NzRangePickerComponent)(core.ɵɵdirectiveInject(i18n.NzI18nService), core.ɵɵdirectiveInject(core.ChangeDetectorRef), core.ɵɵdirectiveInject(i18n.DateHelperService), core.ɵɵdirectiveInject(core.Renderer2), core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(core$1.NzNoAnimationDirective, 9)); };
        /** @nocollapse */ NzRangePickerComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzRangePickerComponent, selectors: [["nz-range-picker"]], exportAs: ["nzRangePicker"], features: [core.ɵɵProvidersFeature([
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        multi: true,
                        useExisting: core.forwardRef((function () { return NzRangePickerComponent; }))
                    }
                ]), core.ɵɵInheritDefinitionFeature], decls: 2, vars: 15, consts: [[3, "isRange", "value", "open", "disabled", "format", "allowClear", "autoFocus", "placeholder", "size", "noAnimation", "valueChange", "openChange"], [3, "isRange", "showWeek", "panelMode", "value", "locale", "showToday", "showTime", "format", "dateRender", "disabledDate", "disabledTime", "placeholder", "dropdownClassName", "popupStyle", "extraFooter", "ranges", "panelModeChange", "valueChange", "inputChange", "calendarChange", "resultOk", "closePicker", 4, "ngIf"], [3, "isRange", "showWeek", "panelMode", "value", "locale", "showToday", "showTime", "format", "dateRender", "disabledDate", "disabledTime", "placeholder", "dropdownClassName", "popupStyle", "extraFooter", "ranges", "panelModeChange", "valueChange", "inputChange", "calendarChange", "resultOk", "closePicker"]], template: function NzRangePickerComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "nz-picker", 0);
                core.ɵɵlistener("valueChange", function NzRangePickerComponent_Template_nz_picker_valueChange_0_listener($event) { return ctx.onValueChange($event); })("openChange", function NzRangePickerComponent_Template_nz_picker_openChange_0_listener($event) { return ctx.onOpenChange($event); });
                core.ɵɵtemplate(1, NzRangePickerComponent_date_range_popup_1_Template, 1, 16, "date-range-popup", 1);
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵstyleSanitizer(core.ɵɵdefaultStyleSanitizer);
                core.ɵɵstyleMap(ctx.pickerStyle);
                core.ɵɵclassMap(ctx.nzClassName);
                core.ɵɵproperty("isRange", ctx.isRange)("value", ctx.nzValue)("open", ctx.nzOpen)("disabled", ctx.nzDisabled)("format", ctx.nzFormat)("allowClear", ctx.nzAllowClear)("autoFocus", ctx.nzAutoFocus)("placeholder", ctx.nzPlaceHolder)("size", ctx.nzSize)("noAnimation", ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.realOpenState);
            } }, directives: [NzPickerComponent, common.NgIf, DateRangePopupComponent], encapsulation: 2, changeDetection: 0 });
        return NzRangePickerComponent;
    }(DateRangePickerComponent));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzRangePickerComponent, [{
            type: core.Component,
            args: [{
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    selector: 'nz-range-picker',
                    exportAs: 'nzRangePicker',
                    templateUrl: './date-range-picker.component.html',
                    providers: [
                        {
                            provide: forms.NG_VALUE_ACCESSOR,
                            multi: true,
                            useExisting: core.forwardRef((function () { return NzRangePickerComponent; }))
                        }
                    ]
                }]
        }], function () { return [{ type: i18n.NzI18nService }, { type: core.ChangeDetectorRef }, { type: i18n.DateHelperService }, { type: core.Renderer2 }, { type: core.ElementRef }, { type: core$1.NzNoAnimationDirective, decorators: [{
                    type: core.Host
                }, {
                    type: core.Optional
                }] }]; }, null); })();

    function NzWeekPickerComponent_date_range_popup_1_Template(rf, ctx) { if (rf & 1) {
        var _r2512 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "date-range-popup", 2);
        core.ɵɵlistener("panelModeChange", function NzWeekPickerComponent_date_range_popup_1_Template_date_range_popup_panelModeChange_0_listener($event) { core.ɵɵrestoreView(_r2512); var ctx_r2511 = core.ɵɵnextContext(); return ctx_r2511.nzOnPanelChange.emit($event); })("valueChange", function NzWeekPickerComponent_date_range_popup_1_Template_date_range_popup_valueChange_0_listener($event) { core.ɵɵrestoreView(_r2512); var ctx_r2513 = core.ɵɵnextContext(); return ctx_r2513.onValueChange($event); })("inputChange", function NzWeekPickerComponent_date_range_popup_1_Template_date_range_popup_inputChange_0_listener($event) { core.ɵɵrestoreView(_r2512); var ctx_r2514 = core.ɵɵnextContext(); return ctx_r2514.onValueChange($event, true); })("calendarChange", function NzWeekPickerComponent_date_range_popup_1_Template_date_range_popup_calendarChange_0_listener($event) { core.ɵɵrestoreView(_r2512); var ctx_r2515 = core.ɵɵnextContext(); return ctx_r2515.onCalendarChange($event); })("resultOk", function NzWeekPickerComponent_date_range_popup_1_Template_date_range_popup_resultOk_0_listener($event) { core.ɵɵrestoreView(_r2512); var ctx_r2516 = core.ɵɵnextContext(); return ctx_r2516.onResultOk(); })("closePicker", function NzWeekPickerComponent_date_range_popup_1_Template_date_range_popup_closePicker_0_listener($event) { core.ɵɵrestoreView(_r2512); var ctx_r2517 = core.ɵɵnextContext(); return ctx_r2517.closeOverlay(); });
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r2510 = core.ɵɵnextContext();
        core.ɵɵproperty("isRange", ctx_r2510.isRange)("showWeek", ctx_r2510.showWeek)("panelMode", ctx_r2510.nzMode)("value", ctx_r2510.nzValue)("locale", ctx_r2510.nzLocale == null ? null : ctx_r2510.nzLocale.lang)("showToday", ctx_r2510.realShowToday)("showTime", ctx_r2510.nzShowTime)("format", ctx_r2510.nzFormat)("dateRender", ctx_r2510.nzDateRender)("disabledDate", ctx_r2510.nzDisabledDate)("disabledTime", ctx_r2510.nzDisabledTime)("placeholder", ctx_r2510.nzPlaceHolder)("dropdownClassName", ctx_r2510.nzDropdownClassName)("popupStyle", ctx_r2510.nzPopupStyle)("extraFooter", ctx_r2510.extraFooter)("ranges", ctx_r2510.nzRanges);
    } }
    var NzWeekPickerComponent = /** @class */ (function (_super) {
        __extends(NzWeekPickerComponent, _super);
        function NzWeekPickerComponent(i18n, cdr, dateHelper, renderer, elementRef, noAnimation) {
            var _this = _super.call(this, i18n, cdr, dateHelper, noAnimation) || this;
            _this.noAnimation = noAnimation;
            _this.showWeek = true;
            renderer.addClass(elementRef.nativeElement, 'ant-calendar-picker');
            return _this;
        }
        /** @nocollapse */ NzWeekPickerComponent.ɵfac = function NzWeekPickerComponent_Factory(t) { return new (t || NzWeekPickerComponent)(core.ɵɵdirectiveInject(i18n.NzI18nService), core.ɵɵdirectiveInject(core.ChangeDetectorRef), core.ɵɵdirectiveInject(i18n.DateHelperService), core.ɵɵdirectiveInject(core.Renderer2), core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(core$1.NzNoAnimationDirective, 9)); };
        /** @nocollapse */ NzWeekPickerComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzWeekPickerComponent, selectors: [["nz-week-picker"]], exportAs: ["nzWeekPicker"], features: [core.ɵɵProvidersFeature([
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        multi: true,
                        useExisting: core.forwardRef((function () { return NzWeekPickerComponent; }))
                    }
                ]), core.ɵɵInheritDefinitionFeature], decls: 2, vars: 15, consts: [[3, "isRange", "value", "open", "disabled", "format", "allowClear", "autoFocus", "placeholder", "size", "noAnimation", "valueChange", "openChange"], [3, "isRange", "showWeek", "panelMode", "value", "locale", "showToday", "showTime", "format", "dateRender", "disabledDate", "disabledTime", "placeholder", "dropdownClassName", "popupStyle", "extraFooter", "ranges", "panelModeChange", "valueChange", "inputChange", "calendarChange", "resultOk", "closePicker", 4, "ngIf"], [3, "isRange", "showWeek", "panelMode", "value", "locale", "showToday", "showTime", "format", "dateRender", "disabledDate", "disabledTime", "placeholder", "dropdownClassName", "popupStyle", "extraFooter", "ranges", "panelModeChange", "valueChange", "inputChange", "calendarChange", "resultOk", "closePicker"]], template: function NzWeekPickerComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "nz-picker", 0);
                core.ɵɵlistener("valueChange", function NzWeekPickerComponent_Template_nz_picker_valueChange_0_listener($event) { return ctx.onValueChange($event); })("openChange", function NzWeekPickerComponent_Template_nz_picker_openChange_0_listener($event) { return ctx.onOpenChange($event); });
                core.ɵɵtemplate(1, NzWeekPickerComponent_date_range_popup_1_Template, 1, 16, "date-range-popup", 1);
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵstyleSanitizer(core.ɵɵdefaultStyleSanitizer);
                core.ɵɵstyleMap(ctx.pickerStyle);
                core.ɵɵclassMap(ctx.nzClassName);
                core.ɵɵproperty("isRange", ctx.isRange)("value", ctx.nzValue)("open", ctx.nzOpen)("disabled", ctx.nzDisabled)("format", ctx.nzFormat)("allowClear", ctx.nzAllowClear)("autoFocus", ctx.nzAutoFocus)("placeholder", ctx.nzPlaceHolder)("size", ctx.nzSize)("noAnimation", ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.realOpenState);
            } }, directives: [NzPickerComponent, common.NgIf, DateRangePopupComponent], encapsulation: 2, changeDetection: 0 });
        return NzWeekPickerComponent;
    }(DateRangePickerComponent));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzWeekPickerComponent, [{
            type: core.Component,
            args: [{
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    selector: 'nz-week-picker',
                    exportAs: 'nzWeekPicker',
                    templateUrl: './date-range-picker.component.html',
                    providers: [
                        {
                            provide: forms.NG_VALUE_ACCESSOR,
                            multi: true,
                            useExisting: core.forwardRef((function () { return NzWeekPickerComponent; }))
                        }
                    ]
                }]
        }], function () { return [{ type: i18n.NzI18nService }, { type: core.ChangeDetectorRef }, { type: i18n.DateHelperService }, { type: core.Renderer2 }, { type: core.ElementRef }, { type: core$1.NzNoAnimationDirective, decorators: [{
                    type: core.Host
                }, {
                    type: core.Optional
                }] }]; }, null); })();

    function NzYearPickerComponent_div_1_calendar_footer_6_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "calendar-footer", 8);
    } if (rf & 2) {
        var ctx_r2519 = core.ɵɵnextContext(2);
        core.ɵɵproperty("extraFooter", ctx_r2519.extraFooter);
    } }
    function NzYearPickerComponent_div_1_Template(rf, ctx) { if (rf & 1) {
        var _r2521 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div");
        core.ɵɵelementStart(1, "div", 2);
        core.ɵɵelementStart(2, "div", 3);
        core.ɵɵelementStart(3, "div", 4);
        core.ɵɵelementStart(4, "div", 5);
        core.ɵɵelementStart(5, "calendar-header", 6);
        core.ɵɵlistener("panelModeChange", function NzYearPickerComponent_div_1_Template_calendar_header_panelModeChange_5_listener($event) { core.ɵɵrestoreView(_r2521); var ctx_r2520 = core.ɵɵnextContext(); return ctx_r2520.onPanelModeChange($event); })("chooseYear", function NzYearPickerComponent_div_1_Template_calendar_header_chooseYear_5_listener($event) { core.ɵɵrestoreView(_r2521); var ctx_r2522 = core.ɵɵnextContext(); return ctx_r2522.onChooseValue("year", $event); })("chooseMonth", function NzYearPickerComponent_div_1_Template_calendar_header_chooseMonth_5_listener($event) { core.ɵɵrestoreView(_r2521); var ctx_r2523 = core.ɵɵnextContext(); return ctx_r2523.onChooseValue("month", $event); });
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵtemplate(6, NzYearPickerComponent_div_1_calendar_footer_6_Template, 1, 1, "calendar-footer", 7);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r2518 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵclassMapInterpolate1("ant-calendar-picker-container ", ctx_r2518.nzDropdownClassName, " ant-calendar-picker-container-placement-bottomLeft");
        core.ɵɵproperty("ngStyle", ctx_r2518.nzPopupStyle);
        core.ɵɵadvance(4);
        core.ɵɵproperty("disabledMonth", ctx_r2518.nzDisabledDate)("disabledYear", ctx_r2518.nzDisabledDate)("panelMode", ctx_r2518.panelMode)("value", ctx_r2518.nzValue)("locale", ctx_r2518.nzLocale.lang)("enablePrev", true)("enableNext", true);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r2518.extraFooter);
    } }
    var NzYearPickerComponent = /** @class */ (function (_super) {
        __extends(NzYearPickerComponent, _super);
        function NzYearPickerComponent(i18n, cdr, dateHelper, renderer, elementRef, noAnimation) {
            var _this = _super.call(this, i18n, cdr, dateHelper, noAnimation) || this;
            _this.noAnimation = noAnimation;
            _this.nzFormat = 'yyyy';
            _this.endPanelMode = 'year';
            renderer.addClass(elementRef.nativeElement, 'ant-calendar-picker');
            return _this;
        }
        /** @nocollapse */ NzYearPickerComponent.ɵfac = function NzYearPickerComponent_Factory(t) { return new (t || NzYearPickerComponent)(core.ɵɵdirectiveInject(i18n.NzI18nService), core.ɵɵdirectiveInject(core.ChangeDetectorRef), core.ɵɵdirectiveInject(i18n.DateHelperService), core.ɵɵdirectiveInject(core.Renderer2), core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(core$1.NzNoAnimationDirective, 9)); };
        /** @nocollapse */ NzYearPickerComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzYearPickerComponent, selectors: [["nz-year-picker"]], inputs: { nzFormat: "nzFormat" }, exportAs: ["nzYearPicker"], features: [core.ɵɵProvidersFeature([
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        multi: true,
                        useExisting: core.forwardRef((function () { return NzYearPickerComponent; }))
                    }
                ]), core.ɵɵInheritDefinitionFeature], decls: 2, vars: 15, consts: [[3, "isRange", "value", "open", "disabled", "format", "allowClear", "autoFocus", "placeholder", "size", "noAnimation", "valueChange", "openChange"], [4, "ngIf"], [3, "ngStyle"], ["tabindex", "0", 1, "ant-calendar", "ant-calendar-month", "ant-calendar-month-calendar"], [1, "ant-calendar-month-calendar-content"], [1, "ant-calendar-month-header-wrap"], [3, "disabledMonth", "disabledYear", "panelMode", "value", "locale", "enablePrev", "enableNext", "panelModeChange", "chooseYear", "chooseMonth"], [3, "extraFooter", 4, "ngIf"], [3, "extraFooter"]], template: function NzYearPickerComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "nz-picker", 0);
                core.ɵɵlistener("valueChange", function NzYearPickerComponent_Template_nz_picker_valueChange_0_listener($event) { return ctx.onValueChange($event); })("openChange", function NzYearPickerComponent_Template_nz_picker_openChange_0_listener($event) { return ctx.onOpenChange($event); });
                core.ɵɵtemplate(1, NzYearPickerComponent_div_1_Template, 7, 12, "div", 1);
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵstyleSanitizer(core.ɵɵdefaultStyleSanitizer);
                core.ɵɵstyleMap(ctx.nzStyle);
                core.ɵɵclassMap(ctx.nzClassName);
                core.ɵɵproperty("isRange", false)("value", ctx.nzValue)("open", ctx.nzOpen)("disabled", ctx.nzDisabled)("format", ctx.nzFormat)("allowClear", ctx.nzAllowClear)("autoFocus", ctx.nzAutoFocus)("placeholder", ctx.nzPlaceHolder)("size", ctx.nzSize)("noAnimation", ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.realOpenState);
            } }, directives: [NzPickerComponent, common.NgIf, common.NgStyle, CalendarHeaderComponent, CalendarFooterComponent], encapsulation: 2, changeDetection: 0 });
        return NzYearPickerComponent;
    }(HeaderPickerComponent));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzYearPickerComponent, [{
            type: core.Component,
            args: [{
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    selector: 'nz-year-picker',
                    exportAs: 'nzYearPicker',
                    templateUrl: './header-picker.component.html',
                    providers: [
                        {
                            provide: forms.NG_VALUE_ACCESSOR,
                            multi: true,
                            useExisting: core.forwardRef((function () { return NzYearPickerComponent; }))
                        }
                    ]
                }]
        }], function () { return [{ type: i18n.NzI18nService }, { type: core.ChangeDetectorRef }, { type: i18n.DateHelperService }, { type: core.Renderer2 }, { type: core.ElementRef }, { type: core$1.NzNoAnimationDirective, decorators: [{
                    type: core.Host
                }, {
                    type: core.Optional
                }] }]; }, { nzFormat: [{
                type: core.Input
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzDatePickerModule = /** @class */ (function () {
        function NzDatePickerModule() {
        }
        /** @nocollapse */ NzDatePickerModule.ɵmod = core.ɵɵdefineNgModule({ type: NzDatePickerModule });
        /** @nocollapse */ NzDatePickerModule.ɵinj = core.ɵɵdefineInjector({ factory: function NzDatePickerModule_Factory(t) { return new (t || NzDatePickerModule)(); }, imports: [[common.CommonModule, overlay.OverlayModule, LibPackerModule, icon.NzIconModule, core$1.NzOverlayModule, core$1.NzNoAnimationModule]] });
        return NzDatePickerModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(NzDatePickerModule, { declarations: [HeaderPickerComponent,
            DateRangePickerComponent,
            NzPickerComponent,
            NzDatePickerComponent,
            NzMonthPickerComponent,
            NzYearPickerComponent,
            NzWeekPickerComponent,
            NzRangePickerComponent], imports: [common.CommonModule, overlay.OverlayModule, LibPackerModule, icon.NzIconModule, core$1.NzOverlayModule, core$1.NzNoAnimationModule], exports: [NzDatePickerComponent, NzRangePickerComponent, NzMonthPickerComponent, NzYearPickerComponent, NzWeekPickerComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzDatePickerModule, [{
            type: core.NgModule,
            args: [{
                    imports: [common.CommonModule, overlay.OverlayModule, LibPackerModule, icon.NzIconModule, core$1.NzOverlayModule, core$1.NzNoAnimationModule],
                    exports: [NzDatePickerComponent, NzRangePickerComponent, NzMonthPickerComponent, NzYearPickerComponent, NzWeekPickerComponent],
                    declarations: [
                        HeaderPickerComponent,
                        DateRangePickerComponent,
                        NzPickerComponent,
                        NzDatePickerComponent,
                        NzMonthPickerComponent,
                        NzYearPickerComponent,
                        NzWeekPickerComponent,
                        NzRangePickerComponent
                    ]
                }]
        }], null, null); })();

    exports.NzDatePickerComponent = NzDatePickerComponent;
    exports.NzDatePickerModule = NzDatePickerModule;
    exports.NzMonthPickerComponent = NzMonthPickerComponent;
    exports.NzRangePickerComponent = NzRangePickerComponent;
    exports.NzWeekPickerComponent = NzWeekPickerComponent;
    exports.NzYearPickerComponent = NzYearPickerComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-date-picker.umd.js.map

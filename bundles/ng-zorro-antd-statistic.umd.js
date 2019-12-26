(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/platform'), require('@angular/core'), require('rxjs'), require('@angular/common'), require('ng-zorro-antd/core')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/statistic', ['exports', '@angular/cdk/platform', '@angular/core', 'rxjs', '@angular/common', 'ng-zorro-antd/core'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].statistic = {}), global.ng.cdk.platform, global.ng.core, global.rxjs, global.ng.common, global['ng-zorro-antd'].core));
}(this, (function (exports, platform, core, rxjs, common, core$1) { 'use strict';

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
     * Generated from: nz-statistic-definitions.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    /** @type {?} */
    var REFRESH_INTERVAL = 1000 / 30;

    /**
     * @fileoverview added by tsickle
     * Generated from: nz-statistic.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzStatisticComponent = /** @class */ (function () {
        function NzStatisticComponent() {
            this.nzValueStyle = {};
        }
        NzStatisticComponent.decorators = [
            { type: core.Component, args: [{
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        selector: 'nz-statistic',
                        exportAs: 'nzStatistic',
                        template: "<div class=\"ant-statistic-title\">\r\n  <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\r\n</div>\r\n<div class=\"ant-statistic-content\" [ngStyle]=\"nzValueStyle\">\r\n  <span *ngIf=\"nzPrefix\" class=\"ant-statistic-content-prefix\">\r\n    <ng-container *nzStringTemplateOutlet=\"nzPrefix\">{{ nzPrefix }}</ng-container>\r\n  </span>\r\n  <nz-statistic-number\r\n    [nzValue]=\"nzValue\"\r\n    [nzValueTemplate]=\"nzValueTemplate\">\r\n  </nz-statistic-number>\r\n  <span *ngIf=\"nzSuffix\" class=\"ant-statistic-content-suffix\">\r\n    <ng-container *nzStringTemplateOutlet=\"nzSuffix\">{{ nzSuffix }}</ng-container>\r\n  </span>\r\n</div>\r\n",
                        host: {
                            class: 'ant-statistic'
                        },
                        styles: ['nz-statistic { display: block; }']
                    }] }
        ];
        NzStatisticComponent.propDecorators = {
            nzPrefix: [{ type: core.Input }],
            nzSuffix: [{ type: core.Input }],
            nzTitle: [{ type: core.Input }],
            nzValue: [{ type: core.Input }],
            nzValueStyle: [{ type: core.Input }],
            nzValueTemplate: [{ type: core.Input }]
        };
        return NzStatisticComponent;
    }());
    if (false) {
        /** @type {?} */
        NzStatisticComponent.prototype.nzPrefix;
        /** @type {?} */
        NzStatisticComponent.prototype.nzSuffix;
        /** @type {?} */
        NzStatisticComponent.prototype.nzTitle;
        /** @type {?} */
        NzStatisticComponent.prototype.nzValue;
        /** @type {?} */
        NzStatisticComponent.prototype.nzValueStyle;
        /** @type {?} */
        NzStatisticComponent.prototype.nzValueTemplate;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: nz-countdown.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzCountdownComponent = /** @class */ (function (_super) {
        __extends(NzCountdownComponent, _super);
        function NzCountdownComponent(cdr, ngZone, platform) {
            var _this = _super.call(this) || this;
            _this.cdr = cdr;
            _this.ngZone = ngZone;
            _this.platform = platform;
            /**
             * @override
             */
            _this.nzFormat = 'HH:mm:ss';
            _this.nzCountdownFinish = new core.EventEmitter();
            return _this;
        }
        /** @override */
        /**
         * @override
         * @param {?} changes
         * @return {?}
         */
        NzCountdownComponent.prototype.ngOnChanges = /**
         * @override
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.nzValue) {
                this.target = Number(changes.nzValue.currentValue);
                if (!changes.nzValue.isFirstChange()) {
                    this.syncTimer();
                }
            }
        };
        /**
         * @return {?}
         */
        NzCountdownComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.syncTimer();
        };
        /**
         * @return {?}
         */
        NzCountdownComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.stopTimer();
        };
        /**
         * @return {?}
         */
        NzCountdownComponent.prototype.syncTimer = /**
         * @return {?}
         */
        function () {
            if (this.target >= Date.now()) {
                this.startTimer();
            }
            else {
                this.stopTimer();
            }
        };
        /**
         * @return {?}
         */
        NzCountdownComponent.prototype.startTimer = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.platform.isBrowser) {
                this.ngZone.runOutsideAngular((/**
                 * @return {?}
                 */
                function () {
                    _this.stopTimer();
                    _this.updater_ = rxjs.interval(REFRESH_INTERVAL).subscribe((/**
                     * @return {?}
                     */
                    function () {
                        _this.updateValue();
                        _this.cdr.detectChanges();
                    }));
                }));
            }
        };
        /**
         * @return {?}
         */
        NzCountdownComponent.prototype.stopTimer = /**
         * @return {?}
         */
        function () {
            if (this.updater_) {
                this.updater_.unsubscribe();
                this.updater_ = null;
            }
        };
        /**
         * Update time that should be displayed on the screen.
         */
        /**
         * Update time that should be displayed on the screen.
         * @protected
         * @return {?}
         */
        NzCountdownComponent.prototype.updateValue = /**
         * Update time that should be displayed on the screen.
         * @protected
         * @return {?}
         */
        function () {
            this.diff = Math.max(this.target - Date.now(), 0);
            if (this.diff === 0) {
                this.stopTimer();
                this.nzCountdownFinish.emit();
            }
        };
        NzCountdownComponent.decorators = [
            { type: core.Component, args: [{
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        selector: 'nz-countdown',
                        exportAs: 'nzCountdown',
                        template: "<nz-statistic\r\n  [nzValue]=\"diff\"\r\n  [nzValueStyle]=\"nzValueStyle\"\r\n  [nzValueTemplate]=\"nzValueTemplate || countDownTpl\"\r\n  [nzTitle]=\"nzTitle\"\r\n  [nzPrefix]=\"nzPrefix\"\r\n  [nzSuffix]=\"nzSuffix\">\r\n</nz-statistic>\r\n\r\n<ng-template #countDownTpl>{{ diff | nzTimeRange: nzFormat }}</ng-template>"
                    }] }
        ];
        /** @nocollapse */
        NzCountdownComponent.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef },
            { type: core.NgZone },
            { type: platform.Platform }
        ]; };
        NzCountdownComponent.propDecorators = {
            nzFormat: [{ type: core.Input }],
            nzCountdownFinish: [{ type: core.Output }]
        };
        return NzCountdownComponent;
    }(NzStatisticComponent));
    if (false) {
        /**
         * @override
         * @type {?}
         */
        NzCountdownComponent.prototype.nzFormat;
        /** @type {?} */
        NzCountdownComponent.prototype.nzCountdownFinish;
        /** @type {?} */
        NzCountdownComponent.prototype.diff;
        /**
         * @type {?}
         * @private
         */
        NzCountdownComponent.prototype.target;
        /**
         * @type {?}
         * @private
         */
        NzCountdownComponent.prototype.updater_;
        /**
         * @type {?}
         * @private
         */
        NzCountdownComponent.prototype.cdr;
        /**
         * @type {?}
         * @private
         */
        NzCountdownComponent.prototype.ngZone;
        /**
         * @type {?}
         * @private
         */
        NzCountdownComponent.prototype.platform;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: nz-statistic-number.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzStatisticNumberComponent = /** @class */ (function () {
        function NzStatisticNumberComponent(locale_id) {
            this.locale_id = locale_id;
            this.displayInt = '';
            this.displayDecimal = '';
        }
        /**
         * @return {?}
         */
        NzStatisticNumberComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
        function () {
            this.formatNumber();
        };
        /**
         * @private
         * @return {?}
         */
        NzStatisticNumberComponent.prototype.formatNumber = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var decimalSeparator = typeof this.nzValue === 'number' ? '.' : common.getLocaleNumberSymbol(this.locale_id, common.NumberSymbol.Decimal);
            /** @type {?} */
            var value = String(this.nzValue);
            var _a = __read(value.split(decimalSeparator), 2), int = _a[0], decimal = _a[1];
            this.displayInt = int;
            this.displayDecimal = decimal ? "" + decimalSeparator + decimal : '';
        };
        NzStatisticNumberComponent.decorators = [
            { type: core.Component, args: [{
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        preserveWhitespaces: false,
                        selector: 'nz-statistic-number',
                        exportAs: 'nzStatisticNumber',
                        template: "<ng-container\r\n  *ngIf=\"nzValueTemplate\"\r\n  [ngTemplateOutlet]=\"nzValueTemplate\"\r\n  [ngTemplateOutletContext]=\"{ $implicit: nzValue }\">\r\n</ng-container>\r\n<ng-container *ngIf=\"!nzValueTemplate\">\r\n  <span *ngIf=\"displayInt\" class=\"ant-statistic-content-value-int\">{{ displayInt }}</span>\r\n  <span *ngIf=\"displayDecimal\" class=\"ant-statistic-content-value-decimal\">{{ displayDecimal }}</span>\r\n</ng-container>\r\n",
                        host: {
                            class: 'ant-statistic-content-value'
                        },
                        styles: ['nz-number { display: inline }']
                    }] }
        ];
        /** @nocollapse */
        NzStatisticNumberComponent.ctorParameters = function () { return [
            { type: String, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] }] }
        ]; };
        NzStatisticNumberComponent.propDecorators = {
            nzValue: [{ type: core.Input }],
            nzValueTemplate: [{ type: core.Input }]
        };
        return NzStatisticNumberComponent;
    }());
    if (false) {
        /** @type {?} */
        NzStatisticNumberComponent.prototype.nzValue;
        /** @type {?} */
        NzStatisticNumberComponent.prototype.nzValueTemplate;
        /** @type {?} */
        NzStatisticNumberComponent.prototype.displayInt;
        /** @type {?} */
        NzStatisticNumberComponent.prototype.displayDecimal;
        /**
         * @type {?}
         * @private
         */
        NzStatisticNumberComponent.prototype.locale_id;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: nz-statistic.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzStatisticModule = /** @class */ (function () {
        function NzStatisticModule() {
        }
        NzStatisticModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, platform.PlatformModule, core$1.NzAddOnModule, core$1.NzPipesModule],
                        declarations: [NzStatisticComponent, NzCountdownComponent, NzStatisticNumberComponent],
                        exports: [NzStatisticComponent, NzCountdownComponent, NzStatisticNumberComponent]
                    },] }
        ];
        return NzStatisticModule;
    }());

    exports.NzCountdownComponent = NzCountdownComponent;
    exports.NzStatisticComponent = NzStatisticComponent;
    exports.NzStatisticModule = NzStatisticModule;
    exports.NzStatisticNumberComponent = NzStatisticNumberComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-statistic.umd.js.map

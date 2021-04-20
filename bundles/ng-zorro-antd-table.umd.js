(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/platform'), require('@angular/cdk/scrolling'), require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('ng-zorro-antd/core'), require('ng-zorro-antd/i18n'), require('ng-zorro-antd/dropdown'), require('@angular/common'), require('@angular/forms'), require('ng-zorro-antd/checkbox'), require('ng-zorro-antd/empty'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/menu'), require('ng-zorro-antd/pagination'), require('ng-zorro-antd/radio'), require('ng-zorro-antd/spin')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/table', ['exports', '@angular/cdk/platform', '@angular/cdk/scrolling', '@angular/core', 'rxjs', 'rxjs/operators', 'ng-zorro-antd/core', 'ng-zorro-antd/i18n', 'ng-zorro-antd/dropdown', '@angular/common', '@angular/forms', 'ng-zorro-antd/checkbox', 'ng-zorro-antd/empty', 'ng-zorro-antd/icon', 'ng-zorro-antd/menu', 'ng-zorro-antd/pagination', 'ng-zorro-antd/radio', 'ng-zorro-antd/spin'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].table = {}), global.ng.cdk.platform, global.ng.cdk.scrolling, global.ng.core, global.rxjs, global.rxjs.operators, global['ng-zorro-antd'].core, global['ng-zorro-antd'].i18n, global['ng-zorro-antd'].dropdown, global.ng.common, global.ng.forms, global['ng-zorro-antd'].checkbox, global['ng-zorro-antd'].empty, global['ng-zorro-antd'].icon, global['ng-zorro-antd'].menu, global['ng-zorro-antd'].pagination, global['ng-zorro-antd'].radio, global['ng-zorro-antd'].spin));
}(this, (function (exports, platform, scrolling, core, rxjs, operators, core$1, i18n, dropdown, common, forms, checkbox, empty, icon, menu, pagination, radio, spin) { 'use strict';

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
     * @record
     */
    function NzThItemInterface() { }
    if (false) {
        /** @type {?} */
        NzThItemInterface.prototype.text;
        /** @type {?} */
        NzThItemInterface.prototype.value;
        /** @type {?} */
        NzThItemInterface.prototype.checked;
    }
    var NzThComponent = /** @class */ (function () {
        function NzThComponent(cdr, i18n) {
            this.cdr = cdr;
            this.i18n = i18n;
            this.hasFilterValue = false;
            this.filterVisible = false;
            this.multipleFilterList = [];
            this.singleFilterList = [];
            /* tslint:disable-next-line:no-any */
            this.locale = (/** @type {?} */ ({}));
            this.nzWidthChange$ = new rxjs.Subject();
            this.destroy$ = new rxjs.Subject();
            this.hasDefaultFilter = false;
            /* tslint:disable-next-line:no-any */
            this.nzSelections = [];
            this.nzChecked = false;
            this.nzDisabled = false;
            this.nzIndeterminate = false;
            this.nzFilterMultiple = true;
            this.nzSort = null;
            this.nzFilters = [];
            this.nzExpand = false;
            this.nzShowCheckbox = false;
            this.nzCustomFilter = false;
            this.nzShowSort = false;
            this.nzShowFilter = false;
            this.nzShowRowSelection = false;
            this.nzCheckedChange = new core.EventEmitter();
            this.nzSortChange = new core.EventEmitter();
            this.nzSortChangeWithKey = new core.EventEmitter();
            /* tslint:disable-next-line:no-any */
            this.nzFilterChange = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        NzThComponent.prototype.updateSortValue = /**
         * @return {?}
         */
        function () {
            if (this.nzShowSort) {
                if (this.nzSort === 'ascend') {
                    this.setSortValue('descend');
                }
                else if (this.nzSort === 'descend') {
                    this.setSortValue(null);
                }
                else {
                    this.setSortValue('ascend');
                }
            }
        };
        /**
         * @param {?} value
         * @return {?}
         */
        NzThComponent.prototype.setSortValue = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.nzSort = value;
            this.nzSortChangeWithKey.emit({ key: this.nzSortKey, value: this.nzSort });
            this.nzSortChange.emit(this.nzSort);
        };
        Object.defineProperty(NzThComponent.prototype, "filterList", {
            get: /**
             * @return {?}
             */
            function () {
                return this.multipleFilterList.filter((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return item.checked; })).map((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return item.value; }));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzThComponent.prototype, "filterValue", {
            /* tslint:disable-next-line:no-any */
            get: /* tslint:disable-next-line:no-any */
            /**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var checkedFilter = this.singleFilterList.find((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return item.checked; }));
                return checkedFilter ? checkedFilter.value : null;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NzThComponent.prototype.updateFilterStatus = /**
         * @return {?}
         */
        function () {
            if (this.nzFilterMultiple) {
                this.hasFilterValue = this.filterList.length > 0;
            }
            else {
                this.hasFilterValue = core$1.isNotNil(this.filterValue);
            }
        };
        /**
         * @return {?}
         */
        NzThComponent.prototype.search = /**
         * @return {?}
         */
        function () {
            this.updateFilterStatus();
            if (this.nzFilterMultiple) {
                this.nzFilterChange.emit(this.filterList);
            }
            else {
                this.nzFilterChange.emit(this.filterValue);
            }
        };
        /**
         * @return {?}
         */
        NzThComponent.prototype.reset = /**
         * @return {?}
         */
        function () {
            this.initMultipleFilterList(true);
            this.initSingleFilterList(true);
            this.hasFilterValue = false;
        };
        /**
         * @param {?} filter
         * @return {?}
         */
        NzThComponent.prototype.checkMultiple = /**
         * @param {?} filter
         * @return {?}
         */
        function (filter) {
            filter.checked = !filter.checked;
        };
        /**
         * @param {?} filter
         * @return {?}
         */
        NzThComponent.prototype.checkSingle = /**
         * @param {?} filter
         * @return {?}
         */
        function (filter) {
            this.singleFilterList.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return (item.checked = item === filter); }));
        };
        /**
         * @return {?}
         */
        NzThComponent.prototype.hideDropDown = /**
         * @return {?}
         */
        function () {
            this.nzDropdownMenuComponent.setVisibleStateWhen(false);
            this.filterVisible = false;
        };
        /**
         * @param {?} value
         * @return {?}
         */
        NzThComponent.prototype.dropDownVisibleChange = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.filterVisible = value;
            if (!value) {
                this.search();
            }
        };
        /**
         * @param {?=} force
         * @return {?}
         */
        NzThComponent.prototype.initMultipleFilterList = /**
         * @param {?=} force
         * @return {?}
         */
        function (force) {
            var _this = this;
            this.multipleFilterList = this.nzFilters.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                /** @type {?} */
                var checked = force ? false : !!item.byDefault;
                if (checked) {
                    _this.hasDefaultFilter = true;
                }
                return { text: item.text, value: item.value, checked: checked };
            }));
            this.checkDefaultFilters();
        };
        /**
         * @param {?=} force
         * @return {?}
         */
        NzThComponent.prototype.initSingleFilterList = /**
         * @param {?=} force
         * @return {?}
         */
        function (force) {
            var _this = this;
            this.singleFilterList = this.nzFilters.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                /** @type {?} */
                var checked = force ? false : !!item.byDefault;
                if (checked) {
                    _this.hasDefaultFilter = true;
                }
                return { text: item.text, value: item.value, checked: checked };
            }));
            this.checkDefaultFilters();
        };
        /**
         * @return {?}
         */
        NzThComponent.prototype.checkDefaultFilters = /**
         * @return {?}
         */
        function () {
            if (!this.nzFilters || this.nzFilters.length === 0 || !this.hasDefaultFilter) {
                return;
            }
            this.updateFilterStatus();
        };
        /**
         * @return {?}
         */
        NzThComponent.prototype.marForCheck = /**
         * @return {?}
         */
        function () {
            this.cdr.markForCheck();
        };
        /**
         * @return {?}
         */
        NzThComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.i18n.localeChange.pipe(operators.takeUntil(this.destroy$)).subscribe((/**
             * @return {?}
             */
            function () {
                _this.locale = _this.i18n.getLocaleData('Table');
                _this.cdr.markForCheck();
            }));
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        NzThComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.nzFilters) {
                this.initMultipleFilterList();
                this.initSingleFilterList();
                this.updateFilterStatus();
            }
            if (changes.nzWidth) {
                this.nzWidthChange$.next(this.nzWidth);
            }
        };
        /**
         * @return {?}
         */
        NzThComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        NzThComponent.decorators = [
            { type: core.Component, args: [{
                        // tslint:disable-next-line:component-selector
                        selector: 'th:not(.nz-disable-th):not([mat-sort-header]):not([mat-header-cell])',
                        preserveWhitespaces: false,
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        template: "<ng-template #checkboxTemplate>\r\n  <label nz-checkbox\r\n         [class.ant-table-selection-select-all-custom]=\"nzShowRowSelection\"\r\n         [(ngModel)]=\"nzChecked\"\r\n         [nzDisabled]=\"nzDisabled\"\r\n         [nzIndeterminate]=\"nzIndeterminate\"\r\n         (ngModelChange)=\"nzCheckedChange.emit($event)\">\r\n  </label>\r\n</ng-template>\r\n<span class=\"ant-table-header-column\">\r\n  <div [class.ant-table-column-sorters]=\"nzShowSort\" (click)=\"updateSortValue()\">\r\n    <span class=\"ant-table-column-title\">\r\n      <ng-container *ngIf=\"nzShowCheckbox && !nzShowRowSelection\">\r\n        <ng-template [ngTemplateOutlet]=\"checkboxTemplate\"></ng-template>\r\n      </ng-container>\r\n      <div class=\"ant-table-selection\" *ngIf=\"nzShowRowSelection\">\r\n        <ng-container *ngIf=\"nzShowCheckbox\">\r\n          <ng-template [ngTemplateOutlet]=\"checkboxTemplate\"></ng-template>\r\n        </ng-container>\r\n        <div nz-dropdown class=\"ant-table-selection-down\" nzPlacement=\"bottomLeft\" [nzDropdownMenu]=\"selectionMenu\">\r\n          <i nz-icon nzType=\"down\"></i>\r\n        </div>\r\n        <nz-dropdown-menu #selectionMenu=\"nzDropdownMenu\">\r\n          <ul nz-menu class=\"ant-table-selection-menu\">\r\n            <li nz-menu-item\r\n                *ngFor=\"let selection of nzSelections\"\r\n                (click)=\"selection.onSelect()\">{{selection.text}}</li>\r\n          </ul>\r\n        </nz-dropdown-menu>\r\n      </div>\r\n      <ng-content></ng-content>\r\n    </span>\r\n    <ng-content select=\"nz-dropdown\"></ng-content>\r\n    <div class=\"ant-table-column-sorter\" *ngIf=\"nzShowSort\">\r\n      <div class=\"ant-table-column-sorter-inner ant-table-column-sorter-inner-full\">\r\n        <i nz-icon\r\n           nzType=\"caret-up\"\r\n           class=\"ant-table-column-sorter-up\"\r\n           [class.on]=\"nzSort == 'ascend'\"\r\n           [class.off]=\"nzSort != 'ascend'\"></i>\r\n        <i nz-icon\r\n           nzType=\"caret-down\"\r\n           class=\"ant-table-column-sorter-down\"\r\n           [class.on]=\"nzSort == 'descend'\"\r\n           [class.off]=\"nzSort != 'descend'\"></i>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</span>\r\n<ng-content select=\"[nz-dropdown]\"></ng-content>\r\n<ng-content select=\"[nz-th-extra]\"></ng-content>\r\n\r\n<ng-container *ngIf=\"nzShowFilter\">\r\n  <i nz-icon\r\n     nz-dropdown\r\n     nzType=\"filter\"\r\n     nzTheme=\"fill\"\r\n     nzTrigger=\"click\"\r\n     nzTableFilter\r\n     [nzClickHide]=\"false\"\r\n     [nzDropdownMenu]=\"filterMenu\"\r\n     [class.ant-table-filter-selected]=\"hasFilterValue\"\r\n     [class.ant-table-filter-open]=\"filterVisible\"\r\n     (nzVisibleChange)=\"dropDownVisibleChange($event)\"></i>\r\n  <nz-dropdown-menu #filterMenu=\"nzDropdownMenu\">\r\n    <ul nz-menu>\r\n      <ng-container *ngIf=\"nzFilterMultiple\">\r\n        <li nz-menu-item *ngFor=\"let filter of multipleFilterList\" (click)=\"checkMultiple(filter)\">\r\n          <label nz-checkbox [ngModel]=\"filter.checked\" (ngModelChange)=\"checkMultiple(filter)\"></label>\r\n          <span>{{filter.text}}</span>\r\n        </li>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"!nzFilterMultiple\">\r\n        <li nz-menu-item *ngFor=\"let filter of singleFilterList\" (click)=\"checkSingle(filter)\">\r\n          <label nz-radio [ngModel]=\"filter.checked\" (ngModelChange)=\"checkSingle(filter)\">{{filter.text}}</label>\r\n        </li>\r\n      </ng-container>\r\n    </ul>\r\n    <div class=\"ant-table-filter-dropdown-btns\">\r\n      <a class=\"ant-table-filter-dropdown-link confirm\" (click)=\"hideDropDown()\">\r\n        <span>{{ locale.filterConfirm }}</span>\r\n      </a>\r\n      <a class=\"ant-table-filter-dropdown-link clear\" (click)=\"reset();hideDropDown()\">\r\n        <span>{{ locale.filterReset }}</span>\r\n      </a>\r\n    </div>\r\n  </nz-dropdown-menu>\r\n</ng-container>\r\n",
                        host: {
                            '[class.ant-table-column-has-actions]': 'nzShowFilter || nzShowSort || nzCustomFilter',
                            '[class.ant-table-column-has-filters]': 'nzShowFilter || nzCustomFilter',
                            '[class.ant-table-column-has-sorters]': 'nzShowSort',
                            '[class.ant-table-selection-column-custom]': 'nzShowRowSelection',
                            '[class.ant-table-selection-column]': 'nzShowCheckbox',
                            '[class.ant-table-expand-icon-th]': 'nzExpand',
                            '[class.ant-table-th-left-sticky]': 'nzLeft',
                            '[class.ant-table-th-right-sticky]': 'nzRight',
                            '[class.ant-table-column-sort]': "nzSort === 'descend' || nzSort === 'ascend'",
                            '[style.left]': 'nzLeft',
                            '[style.right]': 'nzRight',
                            '[style.text-align]': 'nzAlign'
                        }
                    }] }
        ];
        /** @nocollapse */
        NzThComponent.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef },
            { type: i18n.NzI18nService }
        ]; };
        NzThComponent.propDecorators = {
            nzDropdownMenuComponent: [{ type: core.ViewChild, args: [dropdown.NzDropdownMenuComponent, { static: false },] }],
            nzSelections: [{ type: core.Input }],
            nzChecked: [{ type: core.Input }],
            nzDisabled: [{ type: core.Input }],
            nzIndeterminate: [{ type: core.Input }],
            nzSortKey: [{ type: core.Input }],
            nzFilterMultiple: [{ type: core.Input }],
            nzWidth: [{ type: core.Input }],
            nzLeft: [{ type: core.Input }],
            nzRight: [{ type: core.Input }],
            nzAlign: [{ type: core.Input }],
            nzSort: [{ type: core.Input }],
            nzFilters: [{ type: core.Input }],
            nzExpand: [{ type: core.Input }],
            nzShowCheckbox: [{ type: core.Input }],
            nzCustomFilter: [{ type: core.Input }],
            nzShowSort: [{ type: core.Input }],
            nzShowFilter: [{ type: core.Input }],
            nzShowRowSelection: [{ type: core.Input }],
            nzCheckedChange: [{ type: core.Output }],
            nzSortChange: [{ type: core.Output }],
            nzSortChangeWithKey: [{ type: core.Output }],
            nzFilterChange: [{ type: core.Output }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzThComponent.prototype, "nzExpand", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzThComponent.prototype, "nzShowCheckbox", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzThComponent.prototype, "nzCustomFilter", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzThComponent.prototype, "nzShowSort", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzThComponent.prototype, "nzShowFilter", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzThComponent.prototype, "nzShowRowSelection", void 0);
        return NzThComponent;
    }());
    if (false) {
        /** @type {?} */
        NzThComponent.prototype.hasFilterValue;
        /** @type {?} */
        NzThComponent.prototype.filterVisible;
        /** @type {?} */
        NzThComponent.prototype.multipleFilterList;
        /** @type {?} */
        NzThComponent.prototype.singleFilterList;
        /** @type {?} */
        NzThComponent.prototype.locale;
        /** @type {?} */
        NzThComponent.prototype.nzWidthChange$;
        /**
         * @type {?}
         * @private
         */
        NzThComponent.prototype.destroy$;
        /**
         * @type {?}
         * @private
         */
        NzThComponent.prototype.hasDefaultFilter;
        /** @type {?} */
        NzThComponent.prototype.nzDropdownMenuComponent;
        /** @type {?} */
        NzThComponent.prototype.nzSelections;
        /** @type {?} */
        NzThComponent.prototype.nzChecked;
        /** @type {?} */
        NzThComponent.prototype.nzDisabled;
        /** @type {?} */
        NzThComponent.prototype.nzIndeterminate;
        /** @type {?} */
        NzThComponent.prototype.nzSortKey;
        /** @type {?} */
        NzThComponent.prototype.nzFilterMultiple;
        /** @type {?} */
        NzThComponent.prototype.nzWidth;
        /** @type {?} */
        NzThComponent.prototype.nzLeft;
        /** @type {?} */
        NzThComponent.prototype.nzRight;
        /** @type {?} */
        NzThComponent.prototype.nzAlign;
        /** @type {?} */
        NzThComponent.prototype.nzSort;
        /** @type {?} */
        NzThComponent.prototype.nzFilters;
        /** @type {?} */
        NzThComponent.prototype.nzExpand;
        /** @type {?} */
        NzThComponent.prototype.nzShowCheckbox;
        /** @type {?} */
        NzThComponent.prototype.nzCustomFilter;
        /** @type {?} */
        NzThComponent.prototype.nzShowSort;
        /** @type {?} */
        NzThComponent.prototype.nzShowFilter;
        /** @type {?} */
        NzThComponent.prototype.nzShowRowSelection;
        /** @type {?} */
        NzThComponent.prototype.nzCheckedChange;
        /** @type {?} */
        NzThComponent.prototype.nzSortChange;
        /** @type {?} */
        NzThComponent.prototype.nzSortChangeWithKey;
        /** @type {?} */
        NzThComponent.prototype.nzFilterChange;
        /**
         * @type {?}
         * @private
         */
        NzThComponent.prototype.cdr;
        /**
         * @type {?}
         * @private
         */
        NzThComponent.prototype.i18n;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzVirtualScrollDirective = /** @class */ (function () {
        /* tslint:disable-next-line:no-any */
        function NzVirtualScrollDirective(templateRef) {
            this.templateRef = templateRef;
        }
        NzVirtualScrollDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[nz-virtual-scroll]',
                        exportAs: 'nzVirtualScroll'
                    },] }
        ];
        /** @nocollapse */
        NzVirtualScrollDirective.ctorParameters = function () { return [
            { type: core.TemplateRef }
        ]; };
        return NzVirtualScrollDirective;
    }());
    if (false) {
        /** @type {?} */
        NzVirtualScrollDirective.prototype.templateRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var NZ_CONFIG_COMPONENT_NAME = 'table';
    /**
     * @template T
     */
    var NzTableComponent = /** @class */ (function () {
        function NzTableComponent(nzConfigService, renderer, ngZone, cdr, i18n, platform, elementRef) {
            this.nzConfigService = nzConfigService;
            this.renderer = renderer;
            this.ngZone = ngZone;
            this.cdr = cdr;
            this.i18n = i18n;
            this.platform = platform;
            /**
             * public data for ngFor tr
             */
            this.data = [];
            this.locale = {}; // tslint:disable-line:no-any
            this.lastScrollLeft = 0;
            this.headerBottomStyle = {};
            this.destroy$ = new rxjs.Subject();
            this.nzPageSizeOptions = [10, 20, 30, 40, 50];
            this.nzVirtualScroll = false;
            this.nzVirtualItemSize = 0;
            this.nzVirtualMaxBufferPx = 200;
            this.nzVirtualMinBufferPx = 100;
            this.nzLoadingDelay = 0;
            this.nzTotal = 0;
            this.nzWidthConfig = [];
            this.nzPageIndex = 1;
            this.nzPageSize = 10;
            this.nzData = [];
            this.nzPaginationPosition = 'bottom';
            this.nzScroll = { x: null, y: null };
            this.nzFrontPagination = true;
            this.nzTemplateMode = false;
            this.nzShowPagination = true;
            this.nzLoading = false;
            this.nzPageSizeChange = new core.EventEmitter();
            this.nzPageIndexChange = new core.EventEmitter();
            /* tslint:disable-next-line:no-any */
            this.nzCurrentPageDataChange = new core.EventEmitter();
            renderer.addClass(elementRef.nativeElement, 'ant-table-wrapper');
        }
        Object.defineProperty(NzTableComponent.prototype, "itemRender", {
            get: /**
             * @return {?}
             */
            function () {
                return this.nzItemRender || this.itemRenderChild;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTableComponent.prototype, "tableBodyNativeElement", {
            get: /**
             * @return {?}
             */
            function () {
                return this.tableBodyElement && this.tableBodyElement.nativeElement;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTableComponent.prototype, "tableHeaderNativeElement", {
            get: /**
             * @return {?}
             */
            function () {
                return this.tableHeaderElement && this.tableHeaderElement.nativeElement;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTableComponent.prototype, "cdkVirtualScrollNativeElement", {
            get: /**
             * @return {?}
             */
            function () {
                return this.cdkVirtualScrollElement && this.cdkVirtualScrollElement.nativeElement;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTableComponent.prototype, "mixTableBodyNativeElement", {
            get: /**
             * @return {?}
             */
            function () {
                return this.tableBodyNativeElement || this.cdkVirtualScrollNativeElement;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} size
         * @param {?} index
         * @return {?}
         */
        NzTableComponent.prototype.emitPageSizeOrIndex = /**
         * @param {?} size
         * @param {?} index
         * @return {?}
         */
        function (size, index) {
            if (this.nzPageSize !== size || this.nzPageIndex !== index) {
                if (this.nzPageSize !== size) {
                    this.nzPageSize = size;
                    this.nzPageSizeChange.emit(this.nzPageSize);
                }
                if (this.nzPageIndex !== index) {
                    this.nzPageIndex = index;
                    this.nzPageIndexChange.emit(this.nzPageIndex);
                }
                this.updateFrontPaginationDataIfNeeded(this.nzPageSize !== size);
            }
        };
        /**
         * @param {?} e
         * @return {?}
         */
        NzTableComponent.prototype.syncScrollTable = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            if (e.currentTarget === e.target) {
                /** @type {?} */
                var target = (/** @type {?} */ (e.target));
                if (target.scrollLeft !== this.lastScrollLeft && this.nzScroll && this.nzScroll.x) {
                    if (target === this.mixTableBodyNativeElement && this.tableHeaderNativeElement) {
                        this.tableHeaderNativeElement.scrollLeft = target.scrollLeft;
                    }
                    else if (target === this.tableHeaderNativeElement && this.mixTableBodyNativeElement) {
                        this.mixTableBodyNativeElement.scrollLeft = target.scrollLeft;
                    }
                    this.setScrollPositionClassName();
                }
                this.lastScrollLeft = target.scrollLeft;
            }
        };
        /**
         * @return {?}
         */
        NzTableComponent.prototype.setScrollPositionClassName = /**
         * @return {?}
         */
        function () {
            if (this.mixTableBodyNativeElement && this.nzScroll && this.nzScroll.x) {
                if (this.mixTableBodyNativeElement.scrollWidth === this.mixTableBodyNativeElement.clientWidth &&
                    this.mixTableBodyNativeElement.scrollWidth !== 0) {
                    this.setScrollName();
                }
                else if (this.mixTableBodyNativeElement.scrollLeft === 0) {
                    this.setScrollName('left');
                }
                else if (this.mixTableBodyNativeElement.scrollWidth ===
                    this.mixTableBodyNativeElement.scrollLeft + this.mixTableBodyNativeElement.clientWidth) {
                    this.setScrollName('right');
                }
                else {
                    this.setScrollName('middle');
                }
            }
        };
        /**
         * @param {?=} position
         * @return {?}
         */
        NzTableComponent.prototype.setScrollName = /**
         * @param {?=} position
         * @return {?}
         */
        function (position) {
            var _this = this;
            /** @type {?} */
            var prefix = 'ant-table-scroll-position';
            /** @type {?} */
            var classList = ['left', 'right', 'middle'];
            classList.forEach((/**
             * @param {?} name
             * @return {?}
             */
            function (name) {
                _this.renderer.removeClass(_this.tableMainElement.nativeElement, prefix + "-" + name);
            }));
            if (position) {
                this.renderer.addClass(this.tableMainElement.nativeElement, prefix + "-" + position);
            }
        };
        /**
         * @return {?}
         */
        NzTableComponent.prototype.fitScrollBar = /**
         * @return {?}
         */
        function () {
            if (this.nzScroll.y) {
                /** @type {?} */
                var scrollbarWidth = core$1.measureScrollbar('vertical');
                /** @type {?} */
                var scrollbarWidthOfHeader = core$1.measureScrollbar('horizontal', 'ant-table');
                // Add negative margin bottom for scroll bar overflow bug
                if (scrollbarWidthOfHeader > 0) {
                    this.headerBottomStyle = {
                        marginBottom: "-" + scrollbarWidthOfHeader + "px",
                        paddingBottom: '0px',
                        overflowX: 'scroll',
                        overflowY: "" + (scrollbarWidth === 0 ? 'hidden' : 'scroll')
                    };
                    this.cdr.markForCheck();
                }
            }
        };
        /**
         * @param {?=} isPageSizeOrDataChange
         * @return {?}
         */
        NzTableComponent.prototype.updateFrontPaginationDataIfNeeded = /**
         * @param {?=} isPageSizeOrDataChange
         * @return {?}
         */
        function (isPageSizeOrDataChange) {
            var _this = this;
            if (isPageSizeOrDataChange === void 0) { isPageSizeOrDataChange = false; }
            /** @type {?} */
            var data = this.nzData || [];
            if (this.nzFrontPagination) {
                this.nzTotal = data.length;
                if (isPageSizeOrDataChange) {
                    /** @type {?} */
                    var maxPageIndex = Math.ceil(data.length / this.nzPageSize) || 1;
                    /** @type {?} */
                    var pageIndex_1 = this.nzPageIndex > maxPageIndex ? maxPageIndex : this.nzPageIndex;
                    if (pageIndex_1 !== this.nzPageIndex) {
                        this.nzPageIndex = pageIndex_1;
                        Promise.resolve().then((/**
                         * @return {?}
                         */
                        function () { return _this.nzPageIndexChange.emit(pageIndex_1); }));
                    }
                }
                data = data.slice((this.nzPageIndex - 1) * this.nzPageSize, this.nzPageIndex * this.nzPageSize);
            }
            this.data = __spread(data);
            this.nzCurrentPageDataChange.emit(this.data);
        };
        /**
         * @return {?}
         */
        NzTableComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.i18n.localeChange.pipe(operators.takeUntil(this.destroy$)).subscribe((/**
             * @return {?}
             */
            function () {
                _this.locale = _this.i18n.getLocaleData('Table');
                _this.cdr.markForCheck();
            }));
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        NzTableComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            var _this = this;
            if (changes.nzScroll) {
                if (changes.nzScroll.currentValue) {
                    this.nzScroll = changes.nzScroll.currentValue;
                }
                else {
                    this.nzScroll = { x: null, y: null };
                }
                this.fitScrollBar();
                this.setScrollPositionClassName();
            }
            if (changes.nzData) {
                if (this.platform.isBrowser) {
                    setTimeout((/**
                     * @return {?}
                     */
                    function () { return _this.setScrollPositionClassName(); }));
                }
            }
            if (changes.nzPageIndex || changes.nzPageSize || changes.nzFrontPagination || changes.nzData) {
                this.updateFrontPaginationDataIfNeeded(!!(changes.nzPageSize || changes.nzData));
            }
        };
        /**
         * @return {?}
         */
        NzTableComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (!this.platform.isBrowser) {
                return;
            }
            setTimeout((/**
             * @return {?}
             */
            function () { return _this.setScrollPositionClassName(); }));
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                rxjs.merge(_this.tableHeaderNativeElement ? rxjs.fromEvent(_this.tableHeaderNativeElement, 'scroll') : rxjs.EMPTY, _this.mixTableBodyNativeElement ? rxjs.fromEvent(_this.mixTableBodyNativeElement, 'scroll') : rxjs.EMPTY)
                    .pipe(operators.takeUntil(_this.destroy$))
                    .subscribe((/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) {
                    _this.syncScrollTable(data);
                }));
                rxjs.fromEvent(window, 'resize')
                    .pipe(operators.startWith(true), operators.takeUntil(_this.destroy$))
                    .subscribe((/**
                 * @return {?}
                 */
                function () {
                    _this.fitScrollBar();
                    _this.setScrollPositionClassName();
                }));
            }));
        };
        /**
         * @return {?}
         */
        NzTableComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.listOfNzThComponent.changes
                .pipe(operators.startWith(true), operators.flatMap((/**
             * @return {?}
             */
            function () {
                return rxjs.merge.apply(void 0, __spread([_this.listOfNzThComponent.changes], _this.listOfNzThComponent.map((/**
                 * @param {?} th
                 * @return {?}
                 */
                function (th) { return th.nzWidthChange$; }))));
            })), operators.takeUntil(this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            function () {
                _this.cdr.markForCheck();
            }));
        };
        /**
         * @return {?}
         */
        NzTableComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        NzTableComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'nz-table',
                        exportAs: 'nzTable',
                        preserveWhitespaces: false,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        template: "<ng-template #renderItemTemplate let-type let-page=\"page\">\r\n  <a class=\"ant-pagination-item-link\" *ngIf=\"type==='pre'\"><i nz-icon nzType=\"left\"></i></a>\r\n  <a class=\"ant-pagination-item-link\" *ngIf=\"type==='next'\"><i nz-icon nzType=\"right\"></i></a>\r\n  <a *ngIf=\"type=='page'\">{{ page }}</a>\r\n</ng-template>\r\n<ng-template #colGroupTemplate>\r\n  <colgroup>\r\n    <col [style.width]=\"width\" [style.minWidth]=\"width\" *ngFor=\"let width of nzWidthConfig\">\r\n    <ng-container *ngIf=\"(nzWidthConfig && !nzWidthConfig.length) || !nzWidthConfig\">\r\n      <col [style.width]=\"th.nzWidth\" [style.minWidth]=\"th.nzWidth\" *ngFor=\"let th of listOfNzThComponent\">\r\n    </ng-container>\r\n  </colgroup>\r\n</ng-template>\r\n<ng-template #headerTemplate>\r\n  <ng-template [ngTemplateOutlet]=\"colGroupTemplate\"></ng-template>\r\n  <thead class=\"ant-table-thead\" *ngIf=\"!nzScroll.y\">\r\n    <ng-template [ngTemplateOutlet]=\"nzTheadComponent?.templateRef\"></ng-template>\r\n  </thead>\r\n</ng-template>\r\n<ng-template #tableInnerTemplate>\r\n  <div #tableHeaderElement\r\n    *ngIf=\"nzScroll.y\"\r\n    [ngStyle]=\"headerBottomStyle\"\r\n    class=\"ant-table-header ant-table-hide-scrollbar\">\r\n    <table [class.ant-table-fixed]=\"nzScroll.x\" [style.width]=\"nzScroll.x\">\r\n      <ng-template [ngTemplateOutlet]=\"colGroupTemplate\"></ng-template>\r\n      <thead class=\"ant-table-thead\" *ngIf=\"nzScroll.y\">\r\n        <ng-template [ngTemplateOutlet]=\"nzTheadComponent?.templateRef\"></ng-template>\r\n      </thead>\r\n    </table>\r\n  </div>\r\n  <div #tableBodyElement *ngIf=\"!nzVirtualScroll;else scrollViewTpl\"\r\n    class=\"ant-table-body\"\r\n    [style.maxHeight]=\"nzScroll.y\"\r\n    [style.overflow-y]=\"nzScroll.y ? 'scroll' : ''\"\r\n    [style.overflow-x]=\"nzScroll.x ? 'auto' : ''\">\r\n    <table [class.ant-table-fixed]=\"nzScroll.x\" [style.width]=\"nzScroll.x\">\r\n      <ng-template [ngIf]=\"!nzVirtualScroll\" [ngTemplateOutlet]=\"headerTemplate\"></ng-template>\r\n      <ng-content></ng-content>\r\n    </table>\r\n  </div>\r\n  <ng-template #scrollViewTpl>\r\n    <cdk-virtual-scroll-viewport\r\n      class=\"ant-table-body\"\r\n      [hidden]=\"!data.length\"\r\n      [itemSize]=\"nzVirtualItemSize\"\r\n      [maxBufferPx]=\"nzVirtualMaxBufferPx\"\r\n      [minBufferPx]=\"nzVirtualMinBufferPx\"\r\n      [style.height]=\"nzScroll.y\">\r\n      <table [class.ant-table-fixed]=\"nzScroll.x\" [style.width]=\"nzScroll.x\">\r\n        <ng-template [ngIf]=\"nzVirtualScroll\" [ngTemplateOutlet]=\"headerTemplate\"></ng-template>\r\n        <tbody>\r\n          <ng-container *cdkVirtualFor=\"let item of data; let i = index; trackBy:nzVirtualForTrackBy;\">\r\n            <ng-template [ngTemplateOutlet]=\"nzVirtualScrollDirective?.templateRef\" [ngTemplateOutletContext]=\"{$implicit:item, index:i}\"></ng-template>\r\n          </ng-container>\r\n        </tbody>\r\n      </table>\r\n    </cdk-virtual-scroll-viewport>\r\n  </ng-template>\r\n  <div class=\"ant-table-placeholder\" *ngIf=\"data.length === 0 && !nzLoading && !nzTemplateMode\">\r\n    <nz-embed-empty [nzComponentName]=\"'table'\" [specificContent]=\"nzNoResult\"></nz-embed-empty>\r\n  </div>\r\n  <div class=\"ant-table-footer\" *ngIf=\"nzFooter\">\r\n    <ng-container *nzStringTemplateOutlet=\"nzFooter\">{{ nzFooter }}</ng-container>\r\n  </div>\r\n</ng-template>\r\n<ng-template #paginationTemplate>\r\n  <nz-pagination *ngIf=\"nzShowPagination && data.length\"\r\n    [nzInTable]=\"true\"\r\n    [nzShowSizeChanger]=\"nzShowSizeChanger\"\r\n    [nzPageSizeOptions]=\"nzPageSizeOptions\"\r\n    [nzItemRender]=\"itemRender\"\r\n    [nzShowQuickJumper]=\"nzShowQuickJumper\"\r\n    [nzHideOnSinglePage]=\"nzHideOnSinglePage\"\r\n    [nzShowTotal]=\"nzShowTotal\"\r\n    [nzSize]=\"nzSize === 'default' ? 'default' : 'small'\"\r\n    [nzPageSize]=\"nzPageSize\"\r\n    [nzTotal]=\"nzTotal\"\r\n    [nzSimple]=\"nzSimple\"\r\n    [nzPageIndex]=\"nzPageIndex\"\r\n    (nzPageSizeChange)=\"emitPageSizeOrIndex($event,nzPageIndex)\"\r\n    (nzPageIndexChange)=\"emitPageSizeOrIndex(nzPageSize,$event)\">\r\n  </nz-pagination>\r\n</ng-template>\r\n<nz-spin [nzDelay]=\"nzLoadingDelay\" [nzSpinning]=\"nzLoading\" [nzIndicator]=\"nzLoadingIndicator\">\r\n  <ng-container *ngIf=\"nzPaginationPosition === 'both' || nzPaginationPosition === 'top'\">\r\n    <ng-template [ngTemplateOutlet]=\"paginationTemplate\"></ng-template>\r\n  </ng-container>\r\n  <div #tableMainElement\r\n    class=\"ant-table\"\r\n    [class.ant-table-fixed-header]=\"nzScroll.x || nzScroll.y\"\r\n    [class.ant-table-bordered]=\"nzBordered\"\r\n    [class.ant-table-default]=\"nzSize === 'default'\"\r\n    [class.ant-table-middle]=\"nzSize === 'middle'\"\r\n    [class.ant-table-small]=\"nzSize === 'small'\">\r\n    <div class=\"ant-table-title\" *ngIf=\"nzTitle\">\r\n      <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\r\n    </div>\r\n    <div class=\"ant-table-content\">\r\n      <ng-container *ngIf=\"nzScroll.x || nzScroll.y; else tableInnerTemplate\">\r\n        <div class=\"ant-table-scroll\">\r\n          <ng-template [ngTemplateOutlet]=\"tableInnerTemplate\"></ng-template>\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <ng-container *ngIf=\"nzPaginationPosition === 'both' || nzPaginationPosition === 'bottom'\">\r\n    <ng-template [ngTemplateOutlet]=\"paginationTemplate\"></ng-template>\r\n  </ng-container>\r\n</nz-spin>\r\n",
                        host: {
                            '[class.ant-table-empty]': 'data.length === 0 && !nzTemplateMode'
                        },
                        styles: ["\n      nz-table {\n        display: block;\n      }\n\n      cdk-virtual-scroll-viewport.ant-table-body {\n        overflow-y: scroll;\n      }\n    "]
                    }] }
        ];
        /** @nocollapse */
        NzTableComponent.ctorParameters = function () { return [
            { type: core$1.NzConfigService },
            { type: core.Renderer2 },
            { type: core.NgZone },
            { type: core.ChangeDetectorRef },
            { type: i18n.NzI18nService },
            { type: platform.Platform },
            { type: core.ElementRef }
        ]; };
        NzTableComponent.propDecorators = {
            listOfNzThComponent: [{ type: core.ContentChildren, args: [NzThComponent, { descendants: true },] }],
            tableHeaderElement: [{ type: core.ViewChild, args: ['tableHeaderElement', { static: false, read: core.ElementRef },] }],
            tableBodyElement: [{ type: core.ViewChild, args: ['tableBodyElement', { static: false, read: core.ElementRef },] }],
            tableMainElement: [{ type: core.ViewChild, args: ['tableMainElement', { static: false, read: core.ElementRef },] }],
            cdkVirtualScrollElement: [{ type: core.ViewChild, args: [scrolling.CdkVirtualScrollViewport, { static: false, read: core.ElementRef },] }],
            cdkVirtualScrollViewport: [{ type: core.ViewChild, args: [scrolling.CdkVirtualScrollViewport, { static: false, read: scrolling.CdkVirtualScrollViewport },] }],
            nzVirtualScrollDirective: [{ type: core.ContentChild, args: [NzVirtualScrollDirective, { static: false },] }],
            nzSize: [{ type: core.Input }],
            nzShowTotal: [{ type: core.Input }],
            nzPageSizeOptions: [{ type: core.Input }],
            nzVirtualScroll: [{ type: core.Input }],
            nzVirtualItemSize: [{ type: core.Input }],
            nzVirtualMaxBufferPx: [{ type: core.Input }],
            nzVirtualMinBufferPx: [{ type: core.Input }],
            nzVirtualForTrackBy: [{ type: core.Input }],
            nzLoadingDelay: [{ type: core.Input }],
            nzLoadingIndicator: [{ type: core.Input }],
            nzTotal: [{ type: core.Input }],
            nzTitle: [{ type: core.Input }],
            nzFooter: [{ type: core.Input }],
            nzNoResult: [{ type: core.Input }],
            nzWidthConfig: [{ type: core.Input }],
            nzPageIndex: [{ type: core.Input }],
            nzPageSize: [{ type: core.Input }],
            nzData: [{ type: core.Input }],
            nzPaginationPosition: [{ type: core.Input }],
            nzScroll: [{ type: core.Input }],
            nzItemRender: [{ type: core.Input }],
            itemRenderChild: [{ type: core.ViewChild, args: ['renderItemTemplate', { static: true },] }],
            nzFrontPagination: [{ type: core.Input }],
            nzTemplateMode: [{ type: core.Input }],
            nzBordered: [{ type: core.Input }],
            nzShowPagination: [{ type: core.Input }],
            nzLoading: [{ type: core.Input }],
            nzShowSizeChanger: [{ type: core.Input }],
            nzHideOnSinglePage: [{ type: core.Input }],
            nzShowQuickJumper: [{ type: core.Input }],
            nzSimple: [{ type: core.Input }],
            nzPageSizeChange: [{ type: core.Output }],
            nzPageIndexChange: [{ type: core.Output }],
            nzCurrentPageDataChange: [{ type: core.Output }]
        };
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, 'default'),
            __metadata("design:type", String)
        ], NzTableComponent.prototype, "nzSize", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTableComponent.prototype, "nzVirtualScroll", void 0);
        __decorate([
            core$1.InputNumber(),
            __metadata("design:type", Object)
        ], NzTableComponent.prototype, "nzVirtualItemSize", void 0);
        __decorate([
            core$1.InputNumber(),
            __metadata("design:type", Object)
        ], NzTableComponent.prototype, "nzVirtualMaxBufferPx", void 0);
        __decorate([
            core$1.InputNumber(),
            __metadata("design:type", Object)
        ], NzTableComponent.prototype, "nzVirtualMinBufferPx", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTableComponent.prototype, "nzFrontPagination", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTableComponent.prototype, "nzTemplateMode", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, false), core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzTableComponent.prototype, "nzBordered", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTableComponent.prototype, "nzShowPagination", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTableComponent.prototype, "nzLoading", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, false), core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzTableComponent.prototype, "nzShowSizeChanger", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, false), core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzTableComponent.prototype, "nzHideOnSinglePage", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, false), core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzTableComponent.prototype, "nzShowQuickJumper", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, false), core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzTableComponent.prototype, "nzSimple", void 0);
        return NzTableComponent;
    }());
    if (false) {
        /**
         * public data for ngFor tr
         * @type {?}
         */
        NzTableComponent.prototype.data;
        /** @type {?} */
        NzTableComponent.prototype.locale;
        /** @type {?} */
        NzTableComponent.prototype.nzTheadComponent;
        /** @type {?} */
        NzTableComponent.prototype.lastScrollLeft;
        /** @type {?} */
        NzTableComponent.prototype.headerBottomStyle;
        /**
         * @type {?}
         * @private
         */
        NzTableComponent.prototype.destroy$;
        /** @type {?} */
        NzTableComponent.prototype.listOfNzThComponent;
        /** @type {?} */
        NzTableComponent.prototype.tableHeaderElement;
        /** @type {?} */
        NzTableComponent.prototype.tableBodyElement;
        /** @type {?} */
        NzTableComponent.prototype.tableMainElement;
        /** @type {?} */
        NzTableComponent.prototype.cdkVirtualScrollElement;
        /** @type {?} */
        NzTableComponent.prototype.cdkVirtualScrollViewport;
        /** @type {?} */
        NzTableComponent.prototype.nzVirtualScrollDirective;
        /** @type {?} */
        NzTableComponent.prototype.nzSize;
        /** @type {?} */
        NzTableComponent.prototype.nzShowTotal;
        /** @type {?} */
        NzTableComponent.prototype.nzPageSizeOptions;
        /** @type {?} */
        NzTableComponent.prototype.nzVirtualScroll;
        /** @type {?} */
        NzTableComponent.prototype.nzVirtualItemSize;
        /** @type {?} */
        NzTableComponent.prototype.nzVirtualMaxBufferPx;
        /** @type {?} */
        NzTableComponent.prototype.nzVirtualMinBufferPx;
        /** @type {?} */
        NzTableComponent.prototype.nzVirtualForTrackBy;
        /** @type {?} */
        NzTableComponent.prototype.nzLoadingDelay;
        /** @type {?} */
        NzTableComponent.prototype.nzLoadingIndicator;
        /** @type {?} */
        NzTableComponent.prototype.nzTotal;
        /** @type {?} */
        NzTableComponent.prototype.nzTitle;
        /** @type {?} */
        NzTableComponent.prototype.nzFooter;
        /** @type {?} */
        NzTableComponent.prototype.nzNoResult;
        /** @type {?} */
        NzTableComponent.prototype.nzWidthConfig;
        /** @type {?} */
        NzTableComponent.prototype.nzPageIndex;
        /** @type {?} */
        NzTableComponent.prototype.nzPageSize;
        /** @type {?} */
        NzTableComponent.prototype.nzData;
        /** @type {?} */
        NzTableComponent.prototype.nzPaginationPosition;
        /** @type {?} */
        NzTableComponent.prototype.nzScroll;
        /** @type {?} */
        NzTableComponent.prototype.nzItemRender;
        /** @type {?} */
        NzTableComponent.prototype.itemRenderChild;
        /** @type {?} */
        NzTableComponent.prototype.nzFrontPagination;
        /** @type {?} */
        NzTableComponent.prototype.nzTemplateMode;
        /** @type {?} */
        NzTableComponent.prototype.nzBordered;
        /** @type {?} */
        NzTableComponent.prototype.nzShowPagination;
        /** @type {?} */
        NzTableComponent.prototype.nzLoading;
        /** @type {?} */
        NzTableComponent.prototype.nzShowSizeChanger;
        /** @type {?} */
        NzTableComponent.prototype.nzHideOnSinglePage;
        /** @type {?} */
        NzTableComponent.prototype.nzShowQuickJumper;
        /** @type {?} */
        NzTableComponent.prototype.nzSimple;
        /** @type {?} */
        NzTableComponent.prototype.nzPageSizeChange;
        /** @type {?} */
        NzTableComponent.prototype.nzPageIndexChange;
        /** @type {?} */
        NzTableComponent.prototype.nzCurrentPageDataChange;
        /** @type {?} */
        NzTableComponent.prototype.nzConfigService;
        /**
         * @type {?}
         * @private
         */
        NzTableComponent.prototype.renderer;
        /**
         * @type {?}
         * @private
         */
        NzTableComponent.prototype.ngZone;
        /**
         * @type {?}
         * @private
         */
        NzTableComponent.prototype.cdr;
        /**
         * @type {?}
         * @private
         */
        NzTableComponent.prototype.i18n;
        /**
         * @type {?}
         * @private
         */
        NzTableComponent.prototype.platform;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzTbodyDirective = /** @class */ (function () {
        function NzTbodyDirective(nzTableComponent) {
            this.nzTableComponent = nzTableComponent;
        }
        NzTbodyDirective.decorators = [
            { type: core.Directive, args: [{
                        // tslint:disable-next-line:directive-selector
                        selector: 'tbody',
                        host: {
                            '[class.ant-table-tbody]': 'nzTableComponent'
                        }
                    },] }
        ];
        /** @nocollapse */
        NzTbodyDirective.ctorParameters = function () { return [
            { type: NzTableComponent, decorators: [{ type: core.Host }, { type: core.Optional }] }
        ]; };
        return NzTbodyDirective;
    }());
    if (false) {
        /** @type {?} */
        NzTbodyDirective.prototype.nzTableComponent;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzTdComponent = /** @class */ (function () {
        function NzTdComponent(elementRef, nzUpdateHostClassService) {
            this.elementRef = elementRef;
            this.nzUpdateHostClassService = nzUpdateHostClassService;
            this.nzChecked = false;
            this.nzDisabled = false;
            this.nzIndeterminate = false;
            this.nzExpand = false;
            this.nzShowExpand = false;
            this.nzShowCheckbox = false;
            this.nzBreakWord = false;
            this.nzCheckedChange = new core.EventEmitter();
            this.nzExpandChange = new core.EventEmitter();
        }
        /**
         * @param {?} e
         * @return {?}
         */
        NzTdComponent.prototype.expandChange = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            e.stopPropagation();
            this.nzExpand = !this.nzExpand;
            this.nzExpandChange.emit(this.nzExpand);
        };
        /**
         * @return {?}
         */
        NzTdComponent.prototype.setClassMap = /**
         * @return {?}
         */
        function () {
            var _a;
            this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, (_a = {},
                _a["ant-table-row-expand-icon-cell"] = this.nzShowExpand && !core$1.isNotNil(this.nzIndentSize),
                _a["ant-table-selection-column"] = this.nzShowCheckbox,
                _a["ant-table-td-left-sticky"] = core$1.isNotNil(this.nzLeft),
                _a["ant-table-td-right-sticky"] = core$1.isNotNil(this.nzRight),
                _a));
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        NzTdComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.nzIndentSize || changes.nzShowExpand || changes.nzShowCheckbox || changes.nzRight || changes.nzLeft) {
                this.setClassMap();
            }
        };
        NzTdComponent.decorators = [
            { type: core.Component, args: [{
                        // tslint:disable-next-line:component-selector
                        selector: 'td:not(.nz-disable-td):not([mat-cell])',
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        providers: [core$1.NzUpdateHostClassService],
                        preserveWhitespaces: false,
                        encapsulation: core.ViewEncapsulation.None,
                        template: "<span class=\"ant-table-row-indent\" *ngIf=\"nzIndentSize >= 0\" [style.padding-left.px]=\"nzIndentSize\"></span>\r\n<label *ngIf=\"nzShowCheckbox\"\r\n  nz-checkbox\r\n  [nzDisabled]=\"nzDisabled\"\r\n  [(ngModel)]=\"nzChecked\"\r\n  [nzIndeterminate]=\"nzIndeterminate\"\r\n  (ngModelChange)=\"nzCheckedChange.emit($event)\">\r\n</label>\r\n<span *ngIf=\"!nzShowExpand && nzIndentSize >= 0\"\r\n  class=\"ant-table-row-expand-icon ant-table-row-spaced\">\r\n</span>\r\n<span *ngIf=\"nzShowExpand\"\r\n  class=\"ant-table-row-expand-icon\"\r\n  [class.ant-table-row-expanded]=\"nzExpand\"\r\n  [class.ant-table-row-collapsed]=\"!nzExpand\"\r\n  (click)=\"expandChange($event)\">\r\n</span>\r\n<ng-content></ng-content>",
                        host: {
                            '[style.left]': 'nzLeft',
                            '[style.right]': 'nzRight',
                            '[style.text-align]': 'nzAlign',
                            '[style.word-break]': "nzBreakWord ? 'break-all' : ''"
                        }
                    }] }
        ];
        /** @nocollapse */
        NzTdComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core$1.NzUpdateHostClassService }
        ]; };
        NzTdComponent.propDecorators = {
            nzChecked: [{ type: core.Input }],
            nzDisabled: [{ type: core.Input }],
            nzIndeterminate: [{ type: core.Input }],
            nzLeft: [{ type: core.Input }],
            nzRight: [{ type: core.Input }],
            nzAlign: [{ type: core.Input }],
            nzIndentSize: [{ type: core.Input }],
            nzExpand: [{ type: core.Input }],
            nzShowExpand: [{ type: core.Input }],
            nzShowCheckbox: [{ type: core.Input }],
            nzBreakWord: [{ type: core.Input }],
            nzCheckedChange: [{ type: core.Output }],
            nzExpandChange: [{ type: core.Output }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTdComponent.prototype, "nzExpand", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTdComponent.prototype, "nzShowExpand", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTdComponent.prototype, "nzShowCheckbox", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTdComponent.prototype, "nzBreakWord", void 0);
        return NzTdComponent;
    }());
    if (false) {
        /** @type {?} */
        NzTdComponent.prototype.nzChecked;
        /** @type {?} */
        NzTdComponent.prototype.nzDisabled;
        /** @type {?} */
        NzTdComponent.prototype.nzIndeterminate;
        /** @type {?} */
        NzTdComponent.prototype.nzLeft;
        /** @type {?} */
        NzTdComponent.prototype.nzRight;
        /** @type {?} */
        NzTdComponent.prototype.nzAlign;
        /** @type {?} */
        NzTdComponent.prototype.nzIndentSize;
        /** @type {?} */
        NzTdComponent.prototype.nzExpand;
        /** @type {?} */
        NzTdComponent.prototype.nzShowExpand;
        /** @type {?} */
        NzTdComponent.prototype.nzShowCheckbox;
        /** @type {?} */
        NzTdComponent.prototype.nzBreakWord;
        /** @type {?} */
        NzTdComponent.prototype.nzCheckedChange;
        /** @type {?} */
        NzTdComponent.prototype.nzExpandChange;
        /**
         * @type {?}
         * @private
         */
        NzTdComponent.prototype.elementRef;
        /**
         * @type {?}
         * @private
         */
        NzTdComponent.prototype.nzUpdateHostClassService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzTheadComponent = /** @class */ (function () {
        // tslint:disable-next-line:no-any
        function NzTheadComponent(nzTableComponent, elementRef, renderer) {
            this.nzTableComponent = nzTableComponent;
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.destroy$ = new rxjs.Subject();
            this.nzSingleSort = false;
            this.nzSortChange = new core.EventEmitter();
            if (this.nzTableComponent) {
                this.nzTableComponent.nzTheadComponent = this;
            }
        }
        /**
         * @return {?}
         */
        NzTheadComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.listOfNzThComponent.changes
                .pipe(operators.startWith(true), operators.switchMap((/**
             * @return {?}
             */
            function () {
                return rxjs.merge.apply(void 0, __spread(_this.listOfNzThComponent.map((/**
                 * @param {?} th
                 * @return {?}
                 */
                function (th) { return th.nzSortChangeWithKey; }))));
            })), operators.takeUntil(this.destroy$))
                .subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                _this.nzSortChange.emit(data);
                if (_this.nzSingleSort) {
                    _this.listOfNzThComponent.forEach((/**
                     * @param {?} th
                     * @return {?}
                     */
                    function (th) {
                        th.nzSort = th.nzSortKey === data.key ? th.nzSort : null;
                        th.marForCheck();
                    }));
                }
            }));
        };
        /**
         * @return {?}
         */
        NzTheadComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            if (this.nzTableComponent) {
                this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
            }
        };
        /**
         * @return {?}
         */
        NzTheadComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        NzTheadComponent.decorators = [
            { type: core.Component, args: [{
                        // tslint:disable-next-line:component-selector
                        selector: 'thead:not(.ant-table-thead)',
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        template: "<ng-template #contentTemplate>\r\n  <ng-content></ng-content>\r\n</ng-template>\r\n<ng-container *ngIf=\"!nzTableComponent\">\r\n  <ng-template [ngTemplateOutlet]=\"contentTemplate\"></ng-template>\r\n</ng-container>"
                    }] }
        ];
        /** @nocollapse */
        NzTheadComponent.ctorParameters = function () { return [
            { type: NzTableComponent, decorators: [{ type: core.Host }, { type: core.Optional }] },
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        NzTheadComponent.propDecorators = {
            templateRef: [{ type: core.ViewChild, args: ['contentTemplate', { static: true },] }],
            listOfNzThComponent: [{ type: core.ContentChildren, args: [NzThComponent, { descendants: true },] }],
            nzSingleSort: [{ type: core.Input }],
            nzSortChange: [{ type: core.Output }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTheadComponent.prototype, "nzSingleSort", void 0);
        return NzTheadComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        NzTheadComponent.prototype.destroy$;
        /** @type {?} */
        NzTheadComponent.prototype.templateRef;
        /** @type {?} */
        NzTheadComponent.prototype.listOfNzThComponent;
        /** @type {?} */
        NzTheadComponent.prototype.nzSingleSort;
        /** @type {?} */
        NzTheadComponent.prototype.nzSortChange;
        /** @type {?} */
        NzTheadComponent.prototype.nzTableComponent;
        /**
         * @type {?}
         * @private
         */
        NzTheadComponent.prototype.elementRef;
        /**
         * @type {?}
         * @private
         */
        NzTheadComponent.prototype.renderer;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzTrDirective = /** @class */ (function () {
        function NzTrDirective(elementRef, renderer, nzTableComponent) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.nzTableComponent = nzTableComponent;
        }
        Object.defineProperty(NzTrDirective.prototype, "nzExpand", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (core$1.toBoolean(value)) {
                    this.renderer.removeStyle(this.elementRef.nativeElement, 'display');
                    this.renderer.addClass(this.elementRef.nativeElement, 'ant-table-expanded-row');
                }
                else {
                    this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'none');
                    this.renderer.removeClass(this.elementRef.nativeElement, 'ant-table-expanded-row');
                }
            },
            enumerable: true,
            configurable: true
        });
        NzTrDirective.decorators = [
            { type: core.Directive, args: [{
                        // tslint:disable-next-line:directive-selector
                        selector: 'tr:not([mat-row]):not([mat-header-row])',
                        host: {
                            '[class.ant-table-row]': 'nzTableComponent'
                        }
                    },] }
        ];
        /** @nocollapse */
        NzTrDirective.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: NzTableComponent, decorators: [{ type: core.Host }, { type: core.Optional }] }
        ]; };
        NzTrDirective.propDecorators = {
            nzExpand: [{ type: core.Input }]
        };
        return NzTrDirective;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        NzTrDirective.prototype.elementRef;
        /**
         * @type {?}
         * @private
         */
        NzTrDirective.prototype.renderer;
        /** @type {?} */
        NzTrDirective.prototype.nzTableComponent;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzTableModule = /** @class */ (function () {
        function NzTableModule() {
        }
        NzTableModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            NzTableComponent,
                            NzThComponent,
                            NzTdComponent,
                            NzTheadComponent,
                            NzTbodyDirective,
                            NzTrDirective,
                            NzVirtualScrollDirective
                        ],
                        exports: [
                            NzTableComponent,
                            NzThComponent,
                            NzTdComponent,
                            NzTheadComponent,
                            NzTbodyDirective,
                            NzTrDirective,
                            NzVirtualScrollDirective
                        ],
                        imports: [
                            menu.NzMenuModule,
                            forms.FormsModule,
                            core$1.NzAddOnModule,
                            radio.NzRadioModule,
                            checkbox.NzCheckboxModule,
                            dropdown.NzDropDownModule,
                            common.CommonModule,
                            platform.PlatformModule,
                            pagination.NzPaginationModule,
                            spin.NzSpinModule,
                            i18n.NzI18nModule,
                            icon.NzIconModule,
                            empty.NzEmptyModule,
                            scrolling.ScrollingModule
                        ]
                    },] }
        ];
        return NzTableModule;
    }());

    exports.NzTableComponent = NzTableComponent;
    exports.NzTableModule = NzTableModule;
    exports.NzTbodyDirective = NzTbodyDirective;
    exports.NzTdComponent = NzTdComponent;
    exports.NzThComponent = NzThComponent;
    exports.NzTheadComponent = NzTheadComponent;
    exports.NzTrDirective = NzTrDirective;
    exports.NzVirtualScrollDirective = NzVirtualScrollDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-table.umd.js.map
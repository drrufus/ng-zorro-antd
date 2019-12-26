(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/observers'), require('@angular/core'), require('ng-zorro-antd/core'), require('rxjs'), require('rxjs/operators'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/badge', ['exports', '@angular/cdk/observers', '@angular/core', 'ng-zorro-antd/core', 'rxjs', 'rxjs/operators', '@angular/common'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].badge = {}), global.ng.cdk.observers, global.ng.core, global['ng-zorro-antd'].core, global.rxjs, global.rxjs.operators, global.ng.common));
}(this, (function (exports, observers, core, core$1, rxjs, operators, common) { 'use strict';

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
     * Generated from: nz-badge.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var NZ_CONFIG_COMPONENT_NAME = 'backTop';
    var NzBadgeComponent = /** @class */ (function () {
        function NzBadgeComponent(nzConfigService, renderer, elementRef, contentObserver, cdr, ngZone) {
            this.nzConfigService = nzConfigService;
            this.renderer = renderer;
            this.elementRef = elementRef;
            this.contentObserver = contentObserver;
            this.cdr = cdr;
            this.ngZone = ngZone;
            this.destroy$ = new rxjs.Subject();
            this.notWrapper = true;
            this.viewInit = false;
            this.maxNumberArray = [];
            this.countArray = [];
            this.countSingleArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            this.colorArray = [
                'pink',
                'red',
                'yellow',
                'orange',
                'cyan',
                'green',
                'blue',
                'purple',
                'geekblue',
                'magenta',
                'volcano',
                'gold',
                'lime'
            ];
            this.presetColor = null;
            this.nzShowZero = false;
            this.nzShowDot = true;
            this.nzDot = false;
            renderer.addClass(elementRef.nativeElement, 'ant-badge');
        }
        /**
         * @return {?}
         */
        NzBadgeComponent.prototype.checkContent = /**
         * @return {?}
         */
        function () {
            this.notWrapper = core$1.isEmpty(this.contentElement.nativeElement);
            if (this.notWrapper) {
                this.renderer.addClass(this.elementRef.nativeElement, 'ant-badge-not-a-wrapper');
            }
            else {
                this.renderer.removeClass(this.elementRef.nativeElement, 'ant-badge-not-a-wrapper');
            }
        };
        Object.defineProperty(NzBadgeComponent.prototype, "showSup", {
            get: /**
             * @return {?}
             */
            function () {
                return (this.nzShowDot && this.nzDot) || this.count > 0 || (this.count === 0 && this.nzShowZero);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NzBadgeComponent.prototype.generateMaxNumberArray = /**
         * @return {?}
         */
        function () {
            this.maxNumberArray = this.nzOverflowCount.toString().split('');
        };
        /**
         * @return {?}
         */
        NzBadgeComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.generateMaxNumberArray();
        };
        /**
         * @return {?}
         */
        NzBadgeComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.ngZone.onStable.pipe(operators.take(1)).subscribe((/**
             * @return {?}
             */
            function () {
                _this.viewInit = true;
                _this.cdr.markForCheck();
            }));
            this.contentObserver
                .observe(this.contentElement)
                .pipe(operators.startWith(true), operators.takeUntil(this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            function () {
                _this.checkContent();
            }));
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        NzBadgeComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            var nzOverflowCount = changes.nzOverflowCount, nzCount = changes.nzCount, nzColor = changes.nzColor;
            if (nzCount && !(nzCount.currentValue instanceof core.TemplateRef)) {
                this.count = Math.max(0, nzCount.currentValue);
                this.countArray = this.count
                    .toString()
                    .split('')
                    .map((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return +item; }));
            }
            if (nzOverflowCount) {
                this.generateMaxNumberArray();
            }
            if (nzColor) {
                this.presetColor = this.colorArray.indexOf(this.nzColor) !== -1 ? this.nzColor : null;
            }
        };
        /**
         * @return {?}
         */
        NzBadgeComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        NzBadgeComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'nz-badge',
                        exportAs: 'nzBadge',
                        preserveWhitespaces: false,
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        animations: [core$1.zoomBadgeMotion],
                        template: "<span #contentElement><ng-content></ng-content></span>\r\n<span class=\"ant-badge-status-dot ant-badge-status-{{nzStatus || presetColor}}\"\r\n      [style.background]=\"!presetColor && nzColor\"\r\n      *ngIf=\"nzStatus || nzColor\"\r\n      [ngStyle]=\"nzStyle\"></span>\r\n<span class=\"ant-badge-status-text\" *ngIf=\"nzStatus || nzColor\">{{ nzText }}</span>\r\n<ng-container *nzStringTemplateOutlet=\"nzCount\">\r\n  <sup class=\"ant-scroll-number\"\r\n       *ngIf=\"showSup && viewInit\"\r\n       [@.disabled]=\"notWrapper\"\r\n       [@zoomBadgeMotion]\r\n       [ngStyle]=\"nzStyle\"\r\n       [attr.title]=\"nzTitle || nzCount\"\r\n       [style.right.px]=\"nzOffset && nzOffset[0] ? -nzOffset[0] : null\"\r\n       [style.marginTop.px]=\"nzOffset && nzOffset[1] ? nzOffset[1] : null\"\r\n       [class.ant-badge-count]=\"!nzDot\"\r\n       [class.ant-badge-dot]=\"nzDot\"\r\n       [class.ant-badge-multiple-words]=\"countArray.length>=2\">\r\n    <ng-container *ngFor=\"let n of maxNumberArray;let i = index;\">\r\n      <span class=\"ant-scroll-number-only\"\r\n            *ngIf=\"count <= nzOverflowCount\"\r\n            [style.transform]=\"'translateY(' + (-countArray[i] * 100) + '%)'\">\r\n          <ng-container *ngIf=\"!nzDot && countArray[i] !== undefined\">\r\n            <p *ngFor=\"let p of countSingleArray\" [class.current]=\"p === countArray[i]\">{{ p }}</p>\r\n          </ng-container>\r\n      </span>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"count > nzOverflowCount\">{{ nzOverflowCount }}+</ng-container>\r\n  </sup>\r\n</ng-container>",
                        host: {
                            '[class.ant-badge-status]': 'nzStatus'
                        }
                    }] }
        ];
        /** @nocollapse */
        NzBadgeComponent.ctorParameters = function () { return [
            { type: core$1.NzConfigService },
            { type: core.Renderer2 },
            { type: core.ElementRef },
            { type: observers.ContentObserver },
            { type: core.ChangeDetectorRef },
            { type: core.NgZone }
        ]; };
        NzBadgeComponent.propDecorators = {
            contentElement: [{ type: core.ViewChild, args: ['contentElement', { static: false },] }],
            nzShowZero: [{ type: core.Input }],
            nzShowDot: [{ type: core.Input }],
            nzDot: [{ type: core.Input }],
            nzOverflowCount: [{ type: core.Input }],
            nzText: [{ type: core.Input }],
            nzColor: [{ type: core.Input }],
            nzTitle: [{ type: core.Input }],
            nzStyle: [{ type: core.Input }],
            nzStatus: [{ type: core.Input }],
            nzCount: [{ type: core.Input }],
            nzOffset: [{ type: core.Input }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzBadgeComponent.prototype, "nzShowZero", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzBadgeComponent.prototype, "nzShowDot", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzBadgeComponent.prototype, "nzDot", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, 99),
            __metadata("design:type", Number)
        ], NzBadgeComponent.prototype, "nzOverflowCount", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME),
            __metadata("design:type", String)
        ], NzBadgeComponent.prototype, "nzColor", void 0);
        return NzBadgeComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        NzBadgeComponent.prototype.destroy$;
        /** @type {?} */
        NzBadgeComponent.prototype.notWrapper;
        /** @type {?} */
        NzBadgeComponent.prototype.viewInit;
        /** @type {?} */
        NzBadgeComponent.prototype.maxNumberArray;
        /** @type {?} */
        NzBadgeComponent.prototype.countArray;
        /** @type {?} */
        NzBadgeComponent.prototype.countSingleArray;
        /** @type {?} */
        NzBadgeComponent.prototype.colorArray;
        /** @type {?} */
        NzBadgeComponent.prototype.presetColor;
        /** @type {?} */
        NzBadgeComponent.prototype.count;
        /** @type {?} */
        NzBadgeComponent.prototype.contentElement;
        /** @type {?} */
        NzBadgeComponent.prototype.nzShowZero;
        /** @type {?} */
        NzBadgeComponent.prototype.nzShowDot;
        /** @type {?} */
        NzBadgeComponent.prototype.nzDot;
        /** @type {?} */
        NzBadgeComponent.prototype.nzOverflowCount;
        /** @type {?} */
        NzBadgeComponent.prototype.nzText;
        /** @type {?} */
        NzBadgeComponent.prototype.nzColor;
        /** @type {?} */
        NzBadgeComponent.prototype.nzTitle;
        /** @type {?} */
        NzBadgeComponent.prototype.nzStyle;
        /** @type {?} */
        NzBadgeComponent.prototype.nzStatus;
        /** @type {?} */
        NzBadgeComponent.prototype.nzCount;
        /** @type {?} */
        NzBadgeComponent.prototype.nzOffset;
        /** @type {?} */
        NzBadgeComponent.prototype.nzConfigService;
        /**
         * @type {?}
         * @private
         */
        NzBadgeComponent.prototype.renderer;
        /**
         * @type {?}
         * @private
         */
        NzBadgeComponent.prototype.elementRef;
        /**
         * @type {?}
         * @private
         */
        NzBadgeComponent.prototype.contentObserver;
        /**
         * @type {?}
         * @private
         */
        NzBadgeComponent.prototype.cdr;
        /**
         * @type {?}
         * @private
         */
        NzBadgeComponent.prototype.ngZone;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: nz-badge.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzBadgeModule = /** @class */ (function () {
        function NzBadgeModule() {
        }
        NzBadgeModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [NzBadgeComponent],
                        exports: [NzBadgeComponent],
                        imports: [common.CommonModule, observers.ObserversModule, core$1.NzAddOnModule]
                    },] }
        ];
        return NzBadgeModule;
    }());

    exports.NzBadgeComponent = NzBadgeComponent;
    exports.NzBadgeModule = NzBadgeModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-badge.umd.js.map

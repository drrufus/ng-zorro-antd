(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/cdk/layout'), require('@angular/cdk/platform'), require('ng-zorro-antd/core'), require('rxjs'), require('rxjs/operators'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/grid', ['exports', '@angular/core', '@angular/cdk/layout', '@angular/cdk/platform', 'ng-zorro-antd/core', 'rxjs', 'rxjs/operators', '@angular/common'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].grid = {}), global.ng.core, global.ng.cdk.layout, global.ng.cdk.platform, global['ng-zorro-antd'].core, global.rxjs, global.rxjs.operators, global.ng.common));
}(this, (function (exports, core, layout, platform, core$1, rxjs, operators, common) { 'use strict';

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
    var NzRowDirective = /** @class */ (function () {
        function NzRowDirective(elementRef, renderer, nzUpdateHostClassService, mediaMatcher, ngZone, platform, nzDomEventService) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.nzUpdateHostClassService = nzUpdateHostClassService;
            this.mediaMatcher = mediaMatcher;
            this.ngZone = ngZone;
            this.platform = platform;
            this.nzDomEventService = nzDomEventService;
            this.nzAlign = 'top';
            this.nzJustify = 'start';
            this.el = this.elementRef.nativeElement;
            this.prefixCls = 'ant-row';
            this.actualGutter$ = new rxjs.Subject();
            this.destroy$ = new rxjs.Subject();
        }
        NzRowDirective.prototype.calculateGutter = function () {
            if (typeof this.nzGutter !== 'object') {
                return this.nzGutter;
            }
            else if (this.breakPoint && this.nzGutter[this.breakPoint]) {
                return this.nzGutter[this.breakPoint];
            }
            else {
                return 0;
            }
        };
        NzRowDirective.prototype.updateGutter = function () {
            var actualGutter = this.calculateGutter();
            if (this.actualGutter !== actualGutter) {
                this.actualGutter = actualGutter;
                this.actualGutter$.next(this.actualGutter);
                this.renderer.setStyle(this.el, 'margin-left', "-" + this.actualGutter / 2 + "px");
                this.renderer.setStyle(this.el, 'margin-right', "-" + this.actualGutter / 2 + "px");
            }
        };
        NzRowDirective.prototype.watchMedia = function () {
            var _this = this;
            Object.keys(core$1.responsiveMap).map(function (screen) {
                var castBP = screen;
                var matchBelow = _this.mediaMatcher.matchMedia(core$1.responsiveMap[castBP]).matches;
                if (matchBelow) {
                    _this.breakPoint = castBP;
                }
            });
            this.updateGutter();
        };
        /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289*/
        NzRowDirective.prototype.setClassMap = function () {
            var _a;
            var classMap = (_a = {},
                _a["" + this.prefixCls] = !this.nzType,
                _a[this.prefixCls + "-" + this.nzType] = this.nzType,
                _a[this.prefixCls + "-" + this.nzType + "-" + this.nzAlign] = this.nzType && this.nzAlign,
                _a[this.prefixCls + "-" + this.nzType + "-" + this.nzJustify] = this.nzType && this.nzJustify,
                _a);
            this.nzUpdateHostClassService.updateHostClass(this.el, classMap);
        };
        NzRowDirective.prototype.ngOnInit = function () {
            this.setClassMap();
            this.watchMedia();
        };
        NzRowDirective.prototype.ngOnChanges = function (changes) {
            if (changes.nzType || changes.nzAlign || changes.nzJustify) {
                this.setClassMap();
            }
            if (changes.nzGutter) {
                this.updateGutter();
            }
        };
        NzRowDirective.prototype.ngAfterViewInit = function () {
            var _this = this;
            if (this.platform.isBrowser) {
                this.nzDomEventService
                    .registerResizeListener()
                    .pipe(operators.takeUntil(this.destroy$), operators.finalize(function () { return _this.nzDomEventService.unregisterResizeListener(); }))
                    .subscribe(function () { return _this.watchMedia(); });
            }
        };
        NzRowDirective.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        /** @nocollapse */ NzRowDirective.ɵfac = function NzRowDirective_Factory(t) { return new (t || NzRowDirective)(core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(core.Renderer2), core.ɵɵdirectiveInject(core$1.NzUpdateHostClassService), core.ɵɵdirectiveInject(layout.MediaMatcher), core.ɵɵdirectiveInject(core.NgZone), core.ɵɵdirectiveInject(platform.Platform), core.ɵɵdirectiveInject(core$1.NzDomEventService)); };
        /** @nocollapse */ NzRowDirective.ɵdir = core.ɵɵdefineDirective({ type: NzRowDirective, selectors: [["", "nz-row", ""], ["nz-row"]], inputs: { nzType: "nzType", nzAlign: "nzAlign", nzJustify: "nzJustify", nzGutter: "nzGutter" }, exportAs: ["nzRow"], features: [core.ɵɵProvidersFeature([core$1.NzUpdateHostClassService]), core.ɵɵNgOnChangesFeature()] });
        return NzRowDirective;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzRowDirective, [{
            type: core.Directive,
            args: [{
                    selector: '[nz-row],nz-row',
                    exportAs: 'nzRow',
                    providers: [core$1.NzUpdateHostClassService]
                }]
        }], function () { return [{ type: core.ElementRef }, { type: core.Renderer2 }, { type: core$1.NzUpdateHostClassService }, { type: layout.MediaMatcher }, { type: core.NgZone }, { type: platform.Platform }, { type: core$1.NzDomEventService }]; }, { nzType: [{
                type: core.Input
            }], nzAlign: [{
                type: core.Input
            }], nzJustify: [{
                type: core.Input
            }], nzGutter: [{
                type: core.Input
            }] }); })();

    var NzColDirective = /** @class */ (function () {
        function NzColDirective(nzUpdateHostClassService, elementRef, nzRowDirective, renderer) {
            this.nzUpdateHostClassService = nzUpdateHostClassService;
            this.elementRef = elementRef;
            this.nzRowDirective = nzRowDirective;
            this.renderer = renderer;
            this.el = this.elementRef.nativeElement;
            this.prefixCls = 'ant-col';
            this.destroy$ = new rxjs.Subject();
        }
        /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289*/
        NzColDirective.prototype.setClassMap = function () {
            var _a;
            var classMap = __assign((_a = {}, _a["" + this.prefixCls] = true, _a[this.prefixCls + "-" + this.nzSpan] = core$1.isNotNil(this.nzSpan), _a[this.prefixCls + "-order-" + this.nzOrder] = core$1.isNotNil(this.nzOrder), _a[this.prefixCls + "-offset-" + this.nzOffset] = core$1.isNotNil(this.nzOffset), _a[this.prefixCls + "-pull-" + this.nzPull] = core$1.isNotNil(this.nzPull), _a[this.prefixCls + "-push-" + this.nzPush] = core$1.isNotNil(this.nzPush), _a), this.generateClass());
            this.nzUpdateHostClassService.updateHostClass(this.el, classMap);
        };
        NzColDirective.prototype.generateClass = function () {
            var _this = this;
            var listOfSizeInputName = ['nzXs', 'nzSm', 'nzMd', 'nzLg', 'nzXl', 'nzXXl'];
            var listClassMap = {};
            listOfSizeInputName.forEach(function (name) {
                var sizeName = name.replace('nz', '').toLowerCase();
                if (core$1.isNotNil(_this[name])) {
                    if (typeof _this[name] === 'number' || typeof _this[name] === 'string') {
                        listClassMap[_this.prefixCls + "-" + sizeName + "-" + _this[name]] = true;
                    }
                    else {
                        var embedded_1 = _this[name];
                        var prefixArray = ['span', 'pull', 'push', 'offset', 'order'];
                        prefixArray.forEach(function (prefix) {
                            var prefixClass = prefix === 'span' ? '-' : "-" + prefix + "-";
                            listClassMap[_this.prefixCls + "-" + sizeName + prefixClass + embedded_1[prefix]] = embedded_1 && core$1.isNotNil(embedded_1[prefix]);
                        });
                    }
                }
            });
            return listClassMap;
        };
        NzColDirective.prototype.ngOnChanges = function () {
            this.setClassMap();
        };
        NzColDirective.prototype.ngAfterViewInit = function () {
            var _this = this;
            if (this.nzRowDirective) {
                this.nzRowDirective.actualGutter$
                    .pipe(operators.startWith(this.nzRowDirective.actualGutter), operators.takeUntil(this.destroy$))
                    .subscribe(function (actualGutter) {
                    _this.renderer.setStyle(_this.el, 'padding-left', actualGutter / 2 + "px");
                    _this.renderer.setStyle(_this.el, 'padding-right', actualGutter / 2 + "px");
                });
            }
        };
        NzColDirective.prototype.ngOnInit = function () {
            this.setClassMap();
        };
        NzColDirective.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        /** @nocollapse */ NzColDirective.ɵfac = function NzColDirective_Factory(t) { return new (t || NzColDirective)(core.ɵɵdirectiveInject(core$1.NzUpdateHostClassService), core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(NzRowDirective, 9), core.ɵɵdirectiveInject(core.Renderer2)); };
        /** @nocollapse */ NzColDirective.ɵdir = core.ɵɵdefineDirective({ type: NzColDirective, selectors: [["", "nz-col", ""], ["nz-col"]], inputs: { nzSpan: "nzSpan", nzOrder: "nzOrder", nzOffset: "nzOffset", nzPush: "nzPush", nzPull: "nzPull", nzXs: "nzXs", nzSm: "nzSm", nzMd: "nzMd", nzLg: "nzLg", nzXl: "nzXl", nzXXl: "nzXXl" }, exportAs: ["nzCol"], features: [core.ɵɵProvidersFeature([core$1.NzUpdateHostClassService]), core.ɵɵNgOnChangesFeature()] });
        return NzColDirective;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzColDirective, [{
            type: core.Directive,
            args: [{
                    selector: '[nz-col],nz-col',
                    exportAs: 'nzCol',
                    providers: [core$1.NzUpdateHostClassService]
                }]
        }], function () { return [{ type: core$1.NzUpdateHostClassService }, { type: core.ElementRef }, { type: NzRowDirective, decorators: [{
                    type: core.Optional
                }, {
                    type: core.Host
                }] }, { type: core.Renderer2 }]; }, { nzSpan: [{
                type: core.Input
            }], nzOrder: [{
                type: core.Input
            }], nzOffset: [{
                type: core.Input
            }], nzPush: [{
                type: core.Input
            }], nzPull: [{
                type: core.Input
            }], nzXs: [{
                type: core.Input
            }], nzSm: [{
                type: core.Input
            }], nzMd: [{
                type: core.Input
            }], nzLg: [{
                type: core.Input
            }], nzXl: [{
                type: core.Input
            }], nzXXl: [{
                type: core.Input
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzGridModule = /** @class */ (function () {
        function NzGridModule() {
        }
        /** @nocollapse */ NzGridModule.ɵmod = core.ɵɵdefineNgModule({ type: NzGridModule });
        /** @nocollapse */ NzGridModule.ɵinj = core.ɵɵdefineInjector({ factory: function NzGridModule_Factory(t) { return new (t || NzGridModule)(); }, imports: [[common.CommonModule, layout.LayoutModule, platform.PlatformModule]] });
        return NzGridModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(NzGridModule, { declarations: [NzColDirective, NzRowDirective], imports: [common.CommonModule, layout.LayoutModule, platform.PlatformModule], exports: [NzColDirective, NzRowDirective] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzGridModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [NzColDirective, NzRowDirective],
                    exports: [NzColDirective, NzRowDirective],
                    imports: [common.CommonModule, layout.LayoutModule, platform.PlatformModule]
                }]
        }], null, null); })();

    exports.NzColDirective = NzColDirective;
    exports.NzGridModule = NzGridModule;
    exports.NzRowDirective = NzRowDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-grid.umd.js.map

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

    var _c0 = ["contentElement"];
    function NzBadgeComponent_span_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "span", 4);
    } if (rf & 2) {
        var ctx_r52 = core.ɵɵnextContext();
        core.ɵɵstyleSanitizer(core.ɵɵdefaultStyleSanitizer);
        core.ɵɵclassMapInterpolate1("ant-badge-status-dot ant-badge-status-", ctx_r52.nzStatus || ctx_r52.presetColor, "");
        core.ɵɵstyleProp("background", !ctx_r52.presetColor && ctx_r52.nzColor);
        core.ɵɵproperty("ngStyle", ctx_r52.nzStyle);
    } }
    function NzBadgeComponent_span_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span", 5);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r53 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(ctx_r53.nzText);
    } }
    function NzBadgeComponent_ng_container_5_sup_1_ng_container_1_span_1_ng_container_1_p_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "p");
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var p_r63 = ctx.$implicit;
        var i_r59 = core.ɵɵnextContext(3).index;
        var ctx_r62 = core.ɵɵnextContext(3);
        core.ɵɵclassProp("current", p_r63 === ctx_r62.countArray[i_r59]);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(p_r63);
    } }
    function NzBadgeComponent_ng_container_5_sup_1_ng_container_1_span_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, NzBadgeComponent_ng_container_5_sup_1_ng_container_1_span_1_ng_container_1_p_1_Template, 2, 2, "p", 12);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r61 = core.ɵɵnextContext(5);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", ctx_r61.countSingleArray);
    } }
    function NzBadgeComponent_ng_container_5_sup_1_ng_container_1_span_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span", 11);
        core.ɵɵtemplate(1, NzBadgeComponent_ng_container_5_sup_1_ng_container_1_span_1_ng_container_1_Template, 2, 1, "ng-container", 9);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var i_r59 = core.ɵɵnextContext().index;
        var ctx_r60 = core.ɵɵnextContext(3);
        core.ɵɵstyleProp("transform", "translateY(" + (0 - ctx_r60.countArray[i_r59]) * 100 + "%)");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !ctx_r60.nzDot && ctx_r60.countArray[i_r59] !== undefined);
    } }
    function NzBadgeComponent_ng_container_5_sup_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, NzBadgeComponent_ng_container_5_sup_1_ng_container_1_span_1_Template, 2, 2, "span", 10);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r56 = core.ɵɵnextContext(3);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r56.count <= ctx_r56.nzOverflowCount);
    } }
    function NzBadgeComponent_ng_container_5_sup_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtext(1);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r57 = core.ɵɵnextContext(3);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1("", ctx_r57.nzOverflowCount, "+");
    } }
    function NzBadgeComponent_ng_container_5_sup_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "sup", 7);
        core.ɵɵtemplate(1, NzBadgeComponent_ng_container_5_sup_1_ng_container_1_Template, 2, 1, "ng-container", 8);
        core.ɵɵtemplate(2, NzBadgeComponent_ng_container_5_sup_1_ng_container_2_Template, 2, 1, "ng-container", 9);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r55 = core.ɵɵnextContext(2);
        core.ɵɵstyleProp("right", ctx_r55.nzOffset && ctx_r55.nzOffset[0] ? 0 - ctx_r55.nzOffset[0] : null, "px")("margin-top", ctx_r55.nzOffset && ctx_r55.nzOffset[1] ? ctx_r55.nzOffset[1] : null, "px");
        core.ɵɵclassProp("ant-badge-count", !ctx_r55.nzDot)("ant-badge-dot", ctx_r55.nzDot)("ant-badge-multiple-words", ctx_r55.countArray.length >= 2);
        core.ɵɵproperty("@.disabled", ctx_r55.notWrapper)("@zoomBadgeMotion", undefined)("ngStyle", ctx_r55.nzStyle);
        core.ɵɵattribute("title", ctx_r55.nzTitle || ctx_r55.nzCount);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", ctx_r55.maxNumberArray);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r55.count > ctx_r55.nzOverflowCount);
    } }
    function NzBadgeComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, NzBadgeComponent_ng_container_5_sup_1_Template, 3, 11, "sup", 6);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r54 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r54.showSup && ctx_r54.viewInit);
    } }
    var _c1 = ["*"];
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
            this.colorArray = ['pink', 'red', 'yellow', 'orange', 'cyan', 'green', 'blue', 'purple', 'geekblue', 'magenta', 'volcano', 'gold', 'lime'];
            this.presetColor = null;
            this.nzShowZero = false;
            this.nzShowDot = true;
            this.nzDot = false;
            renderer.addClass(elementRef.nativeElement, 'ant-badge');
        }
        NzBadgeComponent.prototype.checkContent = function () {
            this.notWrapper = core$1.isEmpty(this.contentElement.nativeElement);
            if (this.notWrapper) {
                this.renderer.addClass(this.elementRef.nativeElement, 'ant-badge-not-a-wrapper');
            }
            else {
                this.renderer.removeClass(this.elementRef.nativeElement, 'ant-badge-not-a-wrapper');
            }
        };
        Object.defineProperty(NzBadgeComponent.prototype, "showSup", {
            get: function () {
                return (this.nzShowDot && this.nzDot) || this.count > 0 || (this.count === 0 && this.nzShowZero);
            },
            enumerable: true,
            configurable: true
        });
        NzBadgeComponent.prototype.generateMaxNumberArray = function () {
            this.maxNumberArray = this.nzOverflowCount.toString().split('');
        };
        NzBadgeComponent.prototype.ngOnInit = function () {
            this.generateMaxNumberArray();
        };
        NzBadgeComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.ngZone.onStable.pipe(operators.take(1)).subscribe(function () {
                _this.viewInit = true;
                _this.cdr.markForCheck();
            });
            this.contentObserver
                .observe(this.contentElement)
                .pipe(operators.startWith(true), operators.takeUntil(this.destroy$))
                .subscribe(function () {
                _this.checkContent();
            });
        };
        NzBadgeComponent.prototype.ngOnChanges = function (changes) {
            var nzOverflowCount = changes.nzOverflowCount, nzCount = changes.nzCount, nzColor = changes.nzColor;
            if (nzCount && !(nzCount.currentValue instanceof core.TemplateRef)) {
                this.count = Math.max(0, nzCount.currentValue);
                this.countArray = this.count
                    .toString()
                    .split('')
                    .map(function (item) { return +item; });
            }
            if (nzOverflowCount) {
                this.generateMaxNumberArray();
            }
            if (nzColor) {
                this.presetColor = this.colorArray.indexOf(this.nzColor) !== -1 ? this.nzColor : null;
            }
        };
        NzBadgeComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        /** @nocollapse */ NzBadgeComponent.ɵfac = function NzBadgeComponent_Factory(t) { return new (t || NzBadgeComponent)(core.ɵɵdirectiveInject(core$1.NzConfigService), core.ɵɵdirectiveInject(core.Renderer2), core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(observers.ContentObserver), core.ɵɵdirectiveInject(core.ChangeDetectorRef), core.ɵɵdirectiveInject(core.NgZone)); };
        /** @nocollapse */ NzBadgeComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzBadgeComponent, selectors: [["nz-badge"]], viewQuery: function NzBadgeComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵviewQuery(_c0, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.contentElement = _t.first);
            } }, hostBindings: function NzBadgeComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
                core.ɵɵallocHostVars(1);
            } if (rf & 2) {
                core.ɵɵclassProp("ant-badge-status", ctx.nzStatus);
            } }, inputs: { nzShowZero: "nzShowZero", nzShowDot: "nzShowDot", nzDot: "nzDot", nzOverflowCount: "nzOverflowCount", nzText: "nzText", nzColor: "nzColor", nzTitle: "nzTitle", nzStyle: "nzStyle", nzStatus: "nzStatus", nzCount: "nzCount", nzOffset: "nzOffset" }, exportAs: ["nzBadge"], features: [core.ɵɵNgOnChangesFeature()], ngContentSelectors: _c1, decls: 6, vars: 3, consts: [["contentElement", ""], [3, "class", "background", "ngStyle", 4, "ngIf"], ["class", "ant-badge-status-text", 4, "ngIf"], [4, "nzStringTemplateOutlet"], [3, "ngStyle"], [1, "ant-badge-status-text"], ["class", "ant-scroll-number", 3, "ngStyle", "right", "marginTop", "ant-badge-count", "ant-badge-dot", "ant-badge-multiple-words", 4, "ngIf"], [1, "ant-scroll-number", 3, "ngStyle"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "ant-scroll-number-only", 3, "transform", 4, "ngIf"], [1, "ant-scroll-number-only"], [3, "current", 4, "ngFor", "ngForOf"]], template: function NzBadgeComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵelementStart(0, "span", null, 0);
                core.ɵɵprojection(2);
                core.ɵɵelementEnd();
                core.ɵɵtemplate(3, NzBadgeComponent_span_3_Template, 1, 5, "span", 1);
                core.ɵɵtemplate(4, NzBadgeComponent_span_4_Template, 2, 1, "span", 2);
                core.ɵɵtemplate(5, NzBadgeComponent_ng_container_5_Template, 2, 1, "ng-container", 3);
            } if (rf & 2) {
                core.ɵɵadvance(3);
                core.ɵɵproperty("ngIf", ctx.nzStatus || ctx.nzColor);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.nzStatus || ctx.nzColor);
                core.ɵɵadvance(1);
                core.ɵɵproperty("nzStringTemplateOutlet", ctx.nzCount);
            } }, directives: [common.NgIf, core$1.NzStringTemplateOutletDirective, common.NgStyle, common.NgForOf], encapsulation: 2, data: { animation: [core$1.zoomBadgeMotion] }, changeDetection: 0 });
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
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzBadgeComponent, [{
            type: core.Component,
            args: [{
                    selector: 'nz-badge',
                    exportAs: 'nzBadge',
                    preserveWhitespaces: false,
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    animations: [core$1.zoomBadgeMotion],
                    templateUrl: './nz-badge.component.html',
                    host: {
                        '[class.ant-badge-status]': 'nzStatus'
                    }
                }]
        }], function () { return [{ type: core$1.NzConfigService }, { type: core.Renderer2 }, { type: core.ElementRef }, { type: observers.ContentObserver }, { type: core.ChangeDetectorRef }, { type: core.NgZone }]; }, { contentElement: [{
                type: core.ViewChild,
                args: ['contentElement', { static: false }]
            }], nzShowZero: [{
                type: core.Input
            }], nzShowDot: [{
                type: core.Input
            }], nzDot: [{
                type: core.Input
            }], nzOverflowCount: [{
                type: core.Input
            }], nzText: [{
                type: core.Input
            }], nzColor: [{
                type: core.Input
            }], nzTitle: [{
                type: core.Input
            }], nzStyle: [{
                type: core.Input
            }], nzStatus: [{
                type: core.Input
            }], nzCount: [{
                type: core.Input
            }], nzOffset: [{
                type: core.Input
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzBadgeModule = /** @class */ (function () {
        function NzBadgeModule() {
        }
        /** @nocollapse */ NzBadgeModule.ɵmod = core.ɵɵdefineNgModule({ type: NzBadgeModule });
        /** @nocollapse */ NzBadgeModule.ɵinj = core.ɵɵdefineInjector({ factory: function NzBadgeModule_Factory(t) { return new (t || NzBadgeModule)(); }, imports: [[common.CommonModule, observers.ObserversModule, core$1.NzAddOnModule]] });
        return NzBadgeModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(NzBadgeModule, { declarations: [NzBadgeComponent], imports: [common.CommonModule, observers.ObserversModule, core$1.NzAddOnModule], exports: [NzBadgeComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzBadgeModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [NzBadgeComponent],
                    exports: [NzBadgeComponent],
                    imports: [common.CommonModule, observers.ObserversModule, core$1.NzAddOnModule]
                }]
        }], null, null); })();

    exports.NzBadgeComponent = NzBadgeComponent;
    exports.NzBadgeModule = NzBadgeModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-badge.umd.js.map

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/layout'), require('@angular/cdk/platform'), require('@angular/common'), require('@angular/core'), require('ng-zorro-antd/grid'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/core'), require('@angular/forms'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/form', ['exports', '@angular/cdk/layout', '@angular/cdk/platform', '@angular/common', '@angular/core', 'ng-zorro-antd/grid', 'ng-zorro-antd/icon', 'ng-zorro-antd/core', '@angular/forms', 'rxjs', 'rxjs/operators'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].form = {}), global.ng.cdk.layout, global.ng.cdk.platform, global.ng.common, global.ng.core, global['ng-zorro-antd'].grid, global['ng-zorro-antd'].icon, global['ng-zorro-antd'].core, global.ng.forms, global.rxjs, global.rxjs.operators));
}(this, (function (exports, layout, platform, common, core, grid, icon, core$1, forms, rxjs, operators) { 'use strict';

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
    var _c0 = ["*"];
    var NzFormExplainComponent = /** @class */ (function () {
        function NzFormExplainComponent(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-form-explain');
            core$1.warnDeprecation("'nz-form-explain' is going to be removed in 9.0.0. Use [nzSuccessTip] | [nzWarningTip] | [nzErrorTip] | [nzValidatingTip] in nz-form-control instead. Read https://ng.ant.design/components/form/en");
        }
        /** @nocollapse */ NzFormExplainComponent.ɵfac = function NzFormExplainComponent_Factory(t) { return new (t || NzFormExplainComponent)(core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(core.Renderer2)); };
        /** @nocollapse */ NzFormExplainComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzFormExplainComponent, selectors: [["nz-form-explain"]], exportAs: ["nzFormExplain"], ngContentSelectors: _c0, decls: 2, vars: 1, template: function NzFormExplainComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵelementStart(0, "div");
                core.ɵɵprojection(1);
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵproperty("@helpMotion", undefined);
            } }, styles: ["\n      nz-form-explain {\n        display: block;\n      }\n    "], encapsulation: 2, data: { animation: [core$1.helpMotion] }, changeDetection: 0 });
        return NzFormExplainComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzFormExplainComponent, [{
            type: core.Component,
            args: [{
                    selector: 'nz-form-explain',
                    exportAs: 'nzFormExplain',
                    preserveWhitespaces: false,
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    animations: [core$1.helpMotion],
                    templateUrl: './nz-form-explain.component.html',
                    styles: [
                        "\n      nz-form-explain {\n        display: block;\n      }\n    "
                    ]
                }]
        }], function () { return [{ type: core.ElementRef }, { type: core.Renderer2 }]; }, null); })();

    var _c0$1 = ["*"];
    /** should add nz-row directive to host, track https://github.com/angular/angular/issues/8785 **/
    var NzFormItemComponent = /** @class */ (function (_super) {
        __extends(NzFormItemComponent, _super);
        function NzFormItemComponent(elementRef, renderer, nzUpdateHostClassService, mediaMatcher, ngZone, platform, nzDomEventService, cdr) {
            var _this = _super.call(this, elementRef, renderer, nzUpdateHostClassService, mediaMatcher, ngZone, platform, nzDomEventService) || this;
            _this.cdr = cdr;
            _this.nzFlex = false;
            _this.withHelpClass = false;
            _this.tipsMode = false;
            renderer.addClass(elementRef.nativeElement, 'ant-form-item');
            return _this;
        }
        NzFormItemComponent.prototype.updateFlexStyle = function () {
            if (this.nzFlex) {
                this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'flex');
            }
            else {
                this.renderer.removeStyle(this.elementRef.nativeElement, 'display');
            }
        };
        NzFormItemComponent.prototype.setWithHelpViaTips = function (value) {
            this.tipsMode = true;
            this.withHelpClass = value;
            this.cdr.markForCheck();
        };
        NzFormItemComponent.prototype.ngAfterContentInit = function () {
            var _this = this;
            if (!this.tipsMode) {
                this.listOfNzFormExplainComponent.changes.pipe(operators.startWith(true), operators.takeUntil(this.destroy$)).subscribe(function () {
                    _this.withHelpClass = _this.listOfNzFormExplainComponent && _this.listOfNzFormExplainComponent.length > 0;
                    _this.cdr.markForCheck();
                });
            }
        };
        NzFormItemComponent.prototype.ngOnInit = function () {
            _super.prototype.ngOnInit.call(this);
            this.updateFlexStyle();
        };
        NzFormItemComponent.prototype.ngOnDestroy = function () {
            _super.prototype.ngOnDestroy.call(this);
        };
        NzFormItemComponent.prototype.ngOnChanges = function (changes) {
            _super.prototype.ngOnChanges.call(this, changes);
            if (changes.hasOwnProperty('nzFlex')) {
                this.updateFlexStyle();
            }
        };
        /** @nocollapse */ NzFormItemComponent.ɵfac = function NzFormItemComponent_Factory(t) { return new (t || NzFormItemComponent)(core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(core.Renderer2), core.ɵɵdirectiveInject(core$1.NzUpdateHostClassService), core.ɵɵdirectiveInject(layout.MediaMatcher), core.ɵɵdirectiveInject(core.NgZone), core.ɵɵdirectiveInject(platform.Platform), core.ɵɵdirectiveInject(core$1.NzDomEventService), core.ɵɵdirectiveInject(core.ChangeDetectorRef)); };
        /** @nocollapse */ NzFormItemComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzFormItemComponent, selectors: [["nz-form-item"]], contentQueries: function NzFormItemComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
                core.ɵɵcontentQuery(dirIndex, NzFormExplainComponent, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.listOfNzFormExplainComponent = _t);
            } }, hostBindings: function NzFormItemComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
                core.ɵɵallocHostVars(1);
            } if (rf & 2) {
                core.ɵɵclassProp("ant-form-item-with-help", ctx.withHelpClass);
            } }, inputs: { nzFlex: "nzFlex" }, exportAs: ["nzFormItem"], features: [core.ɵɵProvidersFeature([core$1.NzUpdateHostClassService]), core.ɵɵInheritDefinitionFeature, core.ɵɵNgOnChangesFeature()], ngContentSelectors: _c0$1, decls: 1, vars: 0, template: function NzFormItemComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵprojection(0);
            } }, styles: ["\n      nz-form-item {\n        display: block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzFormItemComponent.prototype, "nzFlex", void 0);
        return NzFormItemComponent;
    }(grid.NzRowDirective));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzFormItemComponent, [{
            type: core.Component,
            args: [{
                    selector: 'nz-form-item',
                    exportAs: 'nzFormItem',
                    preserveWhitespaces: false,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    providers: [core$1.NzUpdateHostClassService],
                    templateUrl: './nz-form-item.component.html',
                    host: {
                        '[class.ant-form-item-with-help]': 'withHelpClass'
                    },
                    styles: [
                        "\n      nz-form-item {\n        display: block;\n      }\n    "
                    ]
                }]
        }], function () { return [{ type: core.ElementRef }, { type: core.Renderer2 }, { type: core$1.NzUpdateHostClassService }, { type: layout.MediaMatcher }, { type: core.NgZone }, { type: platform.Platform }, { type: core$1.NzDomEventService }, { type: core.ChangeDetectorRef }]; }, { nzFlex: [{
                type: core.Input
            }], listOfNzFormExplainComponent: [{
                type: core.ContentChildren,
                args: [NzFormExplainComponent, { descendants: true }]
            }] }); })();

    function NzFormControlComponent_i_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "i", 7);
    } if (rf & 2) {
        var ctx_r460 = core.ɵɵnextContext();
        core.ɵɵproperty("nzType", ctx_r460.iconType);
    } }
    function NzFormControlComponent_div_5_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtext(1);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r469 = core.ɵɵnextContext(3);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(ctx_r469.nzSuccessTip);
    } }
    var _c0$2 = function (a0) { return { $implicit: a0 }; };
    function NzFormControlComponent_div_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, NzFormControlComponent_div_5_ng_container_2_ng_container_1_Template, 2, 1, "ng-container", 9);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r465 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("nzStringTemplateOutlet", ctx_r465.nzSuccessTip)("nzStringTemplateOutletContext", core.ɵɵpureFunction1(2, _c0$2, ctx_r465.validateControl));
    } }
    function NzFormControlComponent_div_5_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtext(1);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r470 = core.ɵɵnextContext(3);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(ctx_r470.nzWarningTip);
    } }
    function NzFormControlComponent_div_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, NzFormControlComponent_div_5_ng_container_3_ng_container_1_Template, 2, 1, "ng-container", 9);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r466 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("nzStringTemplateOutlet", ctx_r466.nzWarningTip)("nzStringTemplateOutletContext", core.ɵɵpureFunction1(2, _c0$2, ctx_r466.validateControl));
    } }
    function NzFormControlComponent_div_5_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtext(1);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r471 = core.ɵɵnextContext(3);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(ctx_r471.nzErrorTip);
    } }
    function NzFormControlComponent_div_5_ng_container_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, NzFormControlComponent_div_5_ng_container_4_ng_container_1_Template, 2, 1, "ng-container", 9);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r467 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("nzStringTemplateOutlet", ctx_r467.nzErrorTip)("nzStringTemplateOutletContext", core.ɵɵpureFunction1(2, _c0$2, ctx_r467.validateControl));
    } }
    function NzFormControlComponent_div_5_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtext(1);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r472 = core.ɵɵnextContext(3);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(ctx_r472.nzValidatingTip);
    } }
    function NzFormControlComponent_div_5_ng_container_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, NzFormControlComponent_div_5_ng_container_5_ng_container_1_Template, 2, 1, "ng-container", 9);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r468 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("nzStringTemplateOutlet", ctx_r468.nzValidatingTip)("nzStringTemplateOutletContext", core.ɵɵpureFunction1(2, _c0$2, ctx_r468.validateControl));
    } }
    function NzFormControlComponent_div_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 8);
        core.ɵɵelementStart(1, "div");
        core.ɵɵtemplate(2, NzFormControlComponent_div_5_ng_container_2_Template, 2, 4, "ng-container", 5);
        core.ɵɵtemplate(3, NzFormControlComponent_div_5_ng_container_3_Template, 2, 4, "ng-container", 5);
        core.ɵɵtemplate(4, NzFormControlComponent_div_5_ng_container_4_Template, 2, 4, "ng-container", 5);
        core.ɵɵtemplate(5, NzFormControlComponent_div_5_ng_container_5_Template, 2, 4, "ng-container", 5);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r461 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("@helpMotion", undefined);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r461.showSuccessTip);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r461.showWarningTip);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r461.showErrorTip);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r461.showValidatingTip);
    } }
    function NzFormControlComponent_6_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵprojection(0, 1, ["*ngIf", "!hasTips"]);
    } }
    function NzFormControlComponent_7_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵprojection(0, 2, ["*ngIf", "!nzExtra"]);
    } }
    function NzFormControlComponent_div_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtext(1);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r473 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(ctx_r473.nzExtra);
    } }
    function NzFormControlComponent_div_8_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 10);
        core.ɵɵtemplate(1, NzFormControlComponent_div_8_ng_container_1_Template, 2, 1, "ng-container", 11);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r464 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("nzStringTemplateOutlet", ctx_r464.nzExtra);
    } }
    var _c1 = ["*", [["nz-form-explain"]], [["nz-form-extra"]]];
    var _c2 = ["*", "nz-form-explain", "nz-form-extra"];
    var NzFormControlComponent = /** @class */ (function (_super) {
        __extends(NzFormControlComponent, _super);
        function NzFormControlComponent(nzUpdateHostClassService, elementRef, nzFormItemComponent, nzRowDirective, cdr, renderer) {
            var _this = _super.call(this, nzUpdateHostClassService, elementRef, nzFormItemComponent || nzRowDirective, renderer) || this;
            _this.nzFormItemComponent = nzFormItemComponent;
            _this.cdr = cdr;
            _this._hasFeedback = false;
            _this.validateChanges = rxjs.Subscription.EMPTY;
            _this.status = null;
            _this.controlClassMap = {};
            renderer.addClass(elementRef.nativeElement, 'ant-form-item-control-wrapper');
            return _this;
        }
        Object.defineProperty(NzFormControlComponent.prototype, "nzHasFeedback", {
            get: function () {
                return this._hasFeedback;
            },
            set: function (value) {
                this._hasFeedback = core$1.toBoolean(value);
                this.setControlClassMap();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzFormControlComponent.prototype, "nzValidateStatus", {
            set: function (value) {
                if (value instanceof forms.FormControl || value instanceof forms.NgModel) {
                    this.validateControl = value;
                    this.validateString = null;
                    this.watchControl();
                }
                else if (value instanceof forms.FormControlName) {
                    this.validateControl = value.control;
                    this.validateString = null;
                    this.watchControl();
                }
                else {
                    this.validateString = value;
                    this.validateControl = null;
                    this.setControlClassMap();
                }
            },
            enumerable: true,
            configurable: true
        });
        NzFormControlComponent.prototype.removeSubscribe = function () {
            this.validateChanges.unsubscribe();
        };
        NzFormControlComponent.prototype.watchControl = function () {
            var _this = this;
            this.removeSubscribe();
            /** miss detect https://github.com/angular/angular/issues/10887 **/
            if (this.validateControl && this.validateControl.statusChanges) {
                this.validateChanges = this.validateControl.statusChanges.pipe(operators.startWith(null)).subscribe(function () {
                    _this.setControlClassMap();
                    _this.cdr.markForCheck();
                });
            }
        };
        NzFormControlComponent.prototype.validateControlStatus = function (status) {
            return (!!this.validateControl &&
                (this.validateControl.dirty || this.validateControl.touched) &&
                this.validateControl.status === status);
        };
        NzFormControlComponent.prototype.setControlClassMap = function () {
            var _a;
            if (this.validateString === 'warning') {
                this.status = 'warning';
                this.iconType = 'exclamation-circle-fill';
            }
            else if (this.validateString === 'validating' || this.validateString === 'pending' || this.validateControlStatus('PENDING')) {
                this.status = 'validating';
                this.iconType = 'loading';
            }
            else if (this.validateString === 'error' || this.validateControlStatus('INVALID')) {
                this.status = 'error';
                this.iconType = 'close-circle-fill';
            }
            else if (this.validateString === 'success' || this.validateControlStatus('VALID')) {
                this.status = 'success';
                this.iconType = 'check-circle-fill';
            }
            else {
                this.status = null;
                this.iconType = '';
            }
            if (this.hasTips) {
                this.nzFormItemComponent.setWithHelpViaTips(this.showErrorTip);
            }
            this.controlClassMap = (_a = {},
                _a["has-warning"] = this.status === 'warning',
                _a["is-validating"] = this.status === 'validating',
                _a["has-error"] = this.status === 'error',
                _a["has-success"] = this.status === 'success',
                _a["has-feedback"] = this.nzHasFeedback && this.status,
                _a);
        };
        Object.defineProperty(NzFormControlComponent.prototype, "hasTips", {
            get: function () {
                return !!(this.nzSuccessTip || this.nzWarningTip || this.nzErrorTip || this.nzValidatingTip);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzFormControlComponent.prototype, "showSuccessTip", {
            get: function () {
                return this.status === 'success' && !!this.nzSuccessTip;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzFormControlComponent.prototype, "showWarningTip", {
            get: function () {
                return this.status === 'warning' && !!this.nzWarningTip;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzFormControlComponent.prototype, "showErrorTip", {
            get: function () {
                return this.status === 'error' && !!this.nzErrorTip;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzFormControlComponent.prototype, "showValidatingTip", {
            get: function () {
                return this.status === 'validating' && !!this.nzValidatingTip;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzFormControlComponent.prototype, "showInnerTip", {
            get: function () {
                return this.showSuccessTip || this.showWarningTip || this.showErrorTip || this.showValidatingTip;
            },
            enumerable: true,
            configurable: true
        });
        NzFormControlComponent.prototype.ngOnInit = function () {
            _super.prototype.ngOnInit.call(this);
            this.setControlClassMap();
        };
        NzFormControlComponent.prototype.ngOnDestroy = function () {
            this.removeSubscribe();
            _super.prototype.ngOnDestroy.call(this);
        };
        NzFormControlComponent.prototype.ngAfterContentInit = function () {
            if (!this.validateControl && !this.validateString) {
                if (this.defaultValidateControl instanceof forms.FormControlDirective) {
                    this.nzValidateStatus = this.defaultValidateControl.control;
                }
                else {
                    this.nzValidateStatus = this.defaultValidateControl;
                }
            }
        };
        NzFormControlComponent.prototype.ngAfterViewInit = function () {
            _super.prototype.ngAfterViewInit.call(this);
        };
        /** @nocollapse */ NzFormControlComponent.ɵfac = function NzFormControlComponent_Factory(t) { return new (t || NzFormControlComponent)(core.ɵɵdirectiveInject(core$1.NzUpdateHostClassService), core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(NzFormItemComponent, 9), core.ɵɵdirectiveInject(grid.NzRowDirective, 9), core.ɵɵdirectiveInject(core.ChangeDetectorRef), core.ɵɵdirectiveInject(core.Renderer2)); };
        /** @nocollapse */ NzFormControlComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzFormControlComponent, selectors: [["nz-form-control"]], contentQueries: function NzFormControlComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
                core.ɵɵcontentQuery(dirIndex, forms.NgControl, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.defaultValidateControl = _t.first);
            } }, inputs: { nzSuccessTip: "nzSuccessTip", nzWarningTip: "nzWarningTip", nzErrorTip: "nzErrorTip", nzValidatingTip: "nzValidatingTip", nzExtra: "nzExtra", nzHasFeedback: "nzHasFeedback", nzValidateStatus: "nzValidateStatus" }, exportAs: ["nzFormControl"], features: [core.ɵɵProvidersFeature([core$1.NzUpdateHostClassService]), core.ɵɵInheritDefinitionFeature], ngContentSelectors: _c2, decls: 9, vars: 6, consts: [[1, "ant-form-item-control", 3, "ngClass"], [1, "ant-form-item-children"], [1, "ant-form-item-children-icon"], ["nz-icon", "", 3, "nzType", 4, "ngIf"], ["class", "ant-form-explain", 4, "ngIf"], [4, "ngIf"], ["class", "ant-form-extra", 4, "ngIf"], ["nz-icon", "", 3, "nzType"], [1, "ant-form-explain"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], [1, "ant-form-extra"], [4, "nzStringTemplateOutlet"]], template: function NzFormControlComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef(_c1);
                core.ɵɵelementStart(0, "div", 0);
                core.ɵɵelementStart(1, "span", 1);
                core.ɵɵprojection(2);
                core.ɵɵelementStart(3, "span", 2);
                core.ɵɵtemplate(4, NzFormControlComponent_i_4_Template, 1, 1, "i", 3);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵtemplate(5, NzFormControlComponent_div_5_Template, 6, 5, "div", 4);
                core.ɵɵtemplate(6, NzFormControlComponent_6_Template, 1, 0, undefined, 5);
                core.ɵɵtemplate(7, NzFormControlComponent_7_Template, 1, 0, undefined, 5);
                core.ɵɵtemplate(8, NzFormControlComponent_div_8_Template, 2, 1, "div", 6);
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵproperty("ngClass", ctx.controlClassMap);
                core.ɵɵadvance(4);
                core.ɵɵproperty("ngIf", ctx.nzHasFeedback && ctx.iconType);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.showSuccessTip || ctx.showWarningTip || ctx.showErrorTip || ctx.showValidatingTip);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", !ctx.hasTips);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", !ctx.nzExtra);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.nzExtra);
            } }, directives: [common.NgClass, common.NgIf, icon.NzIconDirective, core$1.NzStringTemplateOutletDirective], styles: ["\n      nz-form-control {\n        display: block;\n      }\n      form .has-feedback .ant-input-suffix i {\n        margin-right: 18px;\n      }\n    "], encapsulation: 2, data: { animation: [core$1.helpMotion] }, changeDetection: 0 });
        return NzFormControlComponent;
    }(grid.NzColDirective));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzFormControlComponent, [{
            type: core.Component,
            args: [{
                    selector: 'nz-form-control',
                    exportAs: 'nzFormControl',
                    preserveWhitespaces: false,
                    animations: [core$1.helpMotion],
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    providers: [core$1.NzUpdateHostClassService],
                    templateUrl: './nz-form-control.component.html',
                    styles: [
                        "\n      nz-form-control {\n        display: block;\n      }\n      form .has-feedback .ant-input-suffix i {\n        margin-right: 18px;\n      }\n    "
                    ]
                }]
        }], function () { return [{ type: core$1.NzUpdateHostClassService }, { type: core.ElementRef }, { type: NzFormItemComponent, decorators: [{
                    type: core.Optional
                }, {
                    type: core.Host
                }] }, { type: grid.NzRowDirective, decorators: [{
                    type: core.Optional
                }, {
                    type: core.Host
                }] }, { type: core.ChangeDetectorRef }, { type: core.Renderer2 }]; }, { defaultValidateControl: [{
                type: core.ContentChild,
                args: [forms.NgControl, { static: false }]
            }], nzSuccessTip: [{
                type: core.Input
            }], nzWarningTip: [{
                type: core.Input
            }], nzErrorTip: [{
                type: core.Input
            }], nzValidatingTip: [{
                type: core.Input
            }], nzExtra: [{
                type: core.Input
            }], nzHasFeedback: [{
                type: core.Input
            }], nzValidateStatus: [{
                type: core.Input
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var _c0$3 = ["*"];
    var NzFormExtraComponent = /** @class */ (function () {
        function NzFormExtraComponent(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-form-extra');
            core$1.warnDeprecation("'nz-form-extra' is going to be removed in 9.0.0. Use [nzExtra] in nz-form-control instead. Read https://ng.ant.design/components/form/en");
        }
        /** @nocollapse */ NzFormExtraComponent.ɵfac = function NzFormExtraComponent_Factory(t) { return new (t || NzFormExtraComponent)(core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(core.Renderer2)); };
        /** @nocollapse */ NzFormExtraComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzFormExtraComponent, selectors: [["nz-form-extra"]], exportAs: ["nzFormExtra"], ngContentSelectors: _c0$3, decls: 1, vars: 0, template: function NzFormExtraComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵprojection(0);
            } }, styles: ["\n      nz-form-extra {\n        display: block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
        return NzFormExtraComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzFormExtraComponent, [{
            type: core.Component,
            args: [{
                    selector: 'nz-form-extra',
                    exportAs: 'nzFormExtra',
                    templateUrl: './nz-form-extra.component.html',
                    preserveWhitespaces: false,
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [
                        "\n      nz-form-extra {\n        display: block;\n      }\n    "
                    ]
                }]
        }], function () { return [{ type: core.ElementRef }, { type: core.Renderer2 }]; }, null); })();

    var _c0$4 = ["*"];
    var NzFormLabelComponent = /** @class */ (function (_super) {
        __extends(NzFormLabelComponent, _super);
        function NzFormLabelComponent(nzUpdateHostClassService, elementRef, nzFormItemComponent, nzRowDirective, renderer, cdr) {
            var _this = _super.call(this, nzUpdateHostClassService, elementRef, nzFormItemComponent || nzRowDirective, renderer) || this;
            _this.cdr = cdr;
            _this.nzRequired = false;
            _this.defaultNoColon = false;
            _this.noColon = 'default';
            renderer.addClass(elementRef.nativeElement, 'ant-form-item-label');
            return _this;
        }
        Object.defineProperty(NzFormLabelComponent.prototype, "nzNoColon", {
            get: function () {
                return !!this.noColon;
            },
            set: function (value) {
                this.noColon = core$1.toBoolean(value);
            },
            enumerable: true,
            configurable: true
        });
        NzFormLabelComponent.prototype.setDefaultNoColon = function (value) {
            this.defaultNoColon = core$1.toBoolean(value);
            this.cdr.markForCheck();
        };
        NzFormLabelComponent.prototype.ngOnDestroy = function () {
            _super.prototype.ngOnDestroy.call(this);
        };
        NzFormLabelComponent.prototype.ngAfterViewInit = function () {
            _super.prototype.ngAfterViewInit.call(this);
        };
        /** @nocollapse */ NzFormLabelComponent.ɵfac = function NzFormLabelComponent_Factory(t) { return new (t || NzFormLabelComponent)(core.ɵɵdirectiveInject(core$1.NzUpdateHostClassService), core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(NzFormItemComponent, 9), core.ɵɵdirectiveInject(grid.NzRowDirective, 9), core.ɵɵdirectiveInject(core.Renderer2), core.ɵɵdirectiveInject(core.ChangeDetectorRef)); };
        /** @nocollapse */ NzFormLabelComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzFormLabelComponent, selectors: [["nz-form-label"]], inputs: { nzFor: "nzFor", nzRequired: "nzRequired", nzNoColon: "nzNoColon" }, exportAs: ["nzFormLabel"], features: [core.ɵɵProvidersFeature([core$1.NzUpdateHostClassService]), core.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$4, decls: 2, vars: 3, template: function NzFormLabelComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵelementStart(0, "label");
                core.ɵɵprojection(1);
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵclassProp("ant-form-item-no-colon", ctx.noColon === "default" ? ctx.defaultNoColon : ctx.nzNoColon)("ant-form-item-required", ctx.nzRequired);
                core.ɵɵattribute("for", ctx.nzFor);
            } }, encapsulation: 2, changeDetection: 0 });
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzFormLabelComponent.prototype, "nzRequired", void 0);
        return NzFormLabelComponent;
    }(grid.NzColDirective));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzFormLabelComponent, [{
            type: core.Component,
            args: [{
                    selector: 'nz-form-label',
                    exportAs: 'nzFormLabel',
                    providers: [core$1.NzUpdateHostClassService],
                    preserveWhitespaces: false,
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    templateUrl: './nz-form-label.component.html'
                }]
        }], function () { return [{ type: core$1.NzUpdateHostClassService }, { type: core.ElementRef }, { type: NzFormItemComponent, decorators: [{
                    type: core.Optional
                }, {
                    type: core.Host
                }] }, { type: grid.NzRowDirective, decorators: [{
                    type: core.Optional
                }, {
                    type: core.Host
                }] }, { type: core.Renderer2 }, { type: core.ChangeDetectorRef }]; }, { nzFor: [{
                type: core.Input
            }], nzRequired: [{
                type: core.Input
            }], nzNoColon: [{
                type: core.Input
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var _c0$5 = ["*"];
    var NzFormSplitComponent = /** @class */ (function () {
        function NzFormSplitComponent(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-form-split');
        }
        /** @nocollapse */ NzFormSplitComponent.ɵfac = function NzFormSplitComponent_Factory(t) { return new (t || NzFormSplitComponent)(core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(core.Renderer2)); };
        /** @nocollapse */ NzFormSplitComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzFormSplitComponent, selectors: [["nz-form-split"]], exportAs: ["nzFormSplit"], ngContentSelectors: _c0$5, decls: 1, vars: 0, template: function NzFormSplitComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵprojection(0);
            } }, encapsulation: 2, changeDetection: 0 });
        return NzFormSplitComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzFormSplitComponent, [{
            type: core.Component,
            args: [{
                    selector: 'nz-form-split',
                    exportAs: 'nzFormSplit',
                    preserveWhitespaces: false,
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    templateUrl: './nz-form-split.component.html'
                }]
        }], function () { return [{ type: core.ElementRef }, { type: core.Renderer2 }]; }, null); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var _c0$6 = ["*"];
    var NzFormTextComponent = /** @class */ (function () {
        function NzFormTextComponent(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-form-text');
        }
        /** @nocollapse */ NzFormTextComponent.ɵfac = function NzFormTextComponent_Factory(t) { return new (t || NzFormTextComponent)(core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(core.Renderer2)); };
        /** @nocollapse */ NzFormTextComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzFormTextComponent, selectors: [["nz-form-text"]], exportAs: ["nzFormText"], ngContentSelectors: _c0$6, decls: 1, vars: 0, template: function NzFormTextComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵprojection(0);
            } }, encapsulation: 2, changeDetection: 0 });
        return NzFormTextComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzFormTextComponent, [{
            type: core.Component,
            args: [{
                    selector: 'nz-form-text',
                    exportAs: 'nzFormText',
                    preserveWhitespaces: false,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    templateUrl: './nz-form-text.component.html'
                }]
        }], function () { return [{ type: core.ElementRef }, { type: core.Renderer2 }]; }, null); })();

    var NZ_CONFIG_COMPONENT_NAME = 'form';
    var NzFormDirective = /** @class */ (function () {
        function NzFormDirective(nzConfigService, elementRef, renderer, nzUpdateHostClassService) {
            this.nzConfigService = nzConfigService;
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.nzUpdateHostClassService = nzUpdateHostClassService;
            this.nzLayout = 'horizontal';
            this.destroy$ = new rxjs.Subject();
            this.renderer.addClass(elementRef.nativeElement, 'ant-form');
        }
        NzFormDirective.prototype.setClassMap = function () {
            var _a;
            this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, (_a = {},
                _a["ant-form-" + this.nzLayout] = this.nzLayout,
                _a));
        };
        NzFormDirective.prototype.updateItemsDefaultColon = function () {
            var _this = this;
            if (this.nzFormLabelComponent) {
                this.nzFormLabelComponent.forEach(function (item) { return item.setDefaultNoColon(_this.nzNoColon); });
            }
        };
        NzFormDirective.prototype.ngOnInit = function () {
            this.setClassMap();
        };
        NzFormDirective.prototype.ngOnChanges = function (changes) {
            this.setClassMap();
            if (changes.hasOwnProperty('nzNoColon')) {
                this.updateItemsDefaultColon();
            }
        };
        NzFormDirective.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.nzFormLabelComponent.changes.pipe(operators.startWith(null), operators.takeUntil(this.destroy$)).subscribe(function () {
                _this.updateItemsDefaultColon();
            });
        };
        NzFormDirective.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        /** @nocollapse */ NzFormDirective.ɵfac = function NzFormDirective_Factory(t) { return new (t || NzFormDirective)(core.ɵɵdirectiveInject(core$1.NzConfigService), core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(core.Renderer2), core.ɵɵdirectiveInject(core$1.NzUpdateHostClassService)); };
        /** @nocollapse */ NzFormDirective.ɵdir = core.ɵɵdefineDirective({ type: NzFormDirective, selectors: [["", "nz-form", ""]], contentQueries: function NzFormDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
                core.ɵɵcontentQuery(dirIndex, NzFormLabelComponent, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.nzFormLabelComponent = _t);
            } }, inputs: { nzLayout: "nzLayout", nzNoColon: "nzNoColon" }, exportAs: ["nzForm"], features: [core.ɵɵProvidersFeature([core$1.NzUpdateHostClassService]), core.ɵɵNgOnChangesFeature()] });
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, false), core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzFormDirective.prototype, "nzNoColon", void 0);
        return NzFormDirective;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzFormDirective, [{
            type: core.Directive,
            args: [{
                    selector: '[nz-form]',
                    exportAs: 'nzForm',
                    providers: [core$1.NzUpdateHostClassService]
                }]
        }], function () { return [{ type: core$1.NzConfigService }, { type: core.ElementRef }, { type: core.Renderer2 }, { type: core$1.NzUpdateHostClassService }]; }, { nzLayout: [{
                type: core.Input
            }], nzNoColon: [{
                type: core.Input
            }], nzFormLabelComponent: [{
                type: core.ContentChildren,
                args: [NzFormLabelComponent, { descendants: true }]
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzFormModule = /** @class */ (function () {
        function NzFormModule() {
        }
        /** @nocollapse */ NzFormModule.ɵmod = core.ɵɵdefineNgModule({ type: NzFormModule });
        /** @nocollapse */ NzFormModule.ɵinj = core.ɵɵdefineInjector({ factory: function NzFormModule_Factory(t) { return new (t || NzFormModule)(); }, imports: [[common.CommonModule, grid.NzGridModule, icon.NzIconModule, layout.LayoutModule, platform.PlatformModule, core$1.NzAddOnModule]] });
        return NzFormModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(NzFormModule, { declarations: [NzFormExtraComponent,
            NzFormLabelComponent,
            NzFormDirective,
            NzFormItemComponent,
            NzFormControlComponent,
            NzFormExplainComponent,
            NzFormTextComponent,
            NzFormSplitComponent], imports: [common.CommonModule, grid.NzGridModule, icon.NzIconModule, layout.LayoutModule, platform.PlatformModule, core$1.NzAddOnModule], exports: [NzFormExtraComponent,
            NzFormLabelComponent,
            NzFormDirective,
            NzFormItemComponent,
            NzFormControlComponent,
            NzFormExplainComponent,
            NzFormTextComponent,
            NzFormSplitComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzFormModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [
                        NzFormExtraComponent,
                        NzFormLabelComponent,
                        NzFormDirective,
                        NzFormItemComponent,
                        NzFormControlComponent,
                        NzFormExplainComponent,
                        NzFormTextComponent,
                        NzFormSplitComponent
                    ],
                    exports: [
                        NzFormExtraComponent,
                        NzFormLabelComponent,
                        NzFormDirective,
                        NzFormItemComponent,
                        NzFormControlComponent,
                        NzFormExplainComponent,
                        NzFormTextComponent,
                        NzFormSplitComponent
                    ],
                    imports: [common.CommonModule, grid.NzGridModule, icon.NzIconModule, layout.LayoutModule, platform.PlatformModule, core$1.NzAddOnModule]
                }]
        }], null, null); })();

    exports.NzFormControlComponent = NzFormControlComponent;
    exports.NzFormDirective = NzFormDirective;
    exports.NzFormExplainComponent = NzFormExplainComponent;
    exports.NzFormExtraComponent = NzFormExtraComponent;
    exports.NzFormItemComponent = NzFormItemComponent;
    exports.NzFormLabelComponent = NzFormLabelComponent;
    exports.NzFormModule = NzFormModule;
    exports.NzFormSplitComponent = NzFormSplitComponent;
    exports.NzFormTextComponent = NzFormTextComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-form.umd.js.map

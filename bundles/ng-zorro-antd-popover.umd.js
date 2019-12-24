(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ng-zorro-antd/core'), require('ng-zorro-antd/tooltip'), require('@angular/cdk/overlay'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/popover', ['exports', '@angular/core', 'ng-zorro-antd/core', 'ng-zorro-antd/tooltip', '@angular/cdk/overlay', '@angular/common'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].popover = {}), global.ng.core, global['ng-zorro-antd'].core, global['ng-zorro-antd'].tooltip, global.ng.cdk.overlay, global.ng.common));
}(this, (function (exports, core, core$1, tooltip, overlay, common) { 'use strict';

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

    function NzPopoverComponent_ng_template_1_div_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtext(1);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r649 = core.ɵɵnextContext(3);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(ctx_r649.title);
    } }
    function NzPopoverComponent_ng_template_1_div_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 9);
        core.ɵɵtemplate(1, NzPopoverComponent_ng_template_1_div_5_ng_container_1_Template, 2, 1, "ng-container", 8);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r647 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("nzStringTemplateOutlet", ctx_r647.title);
    } }
    function NzPopoverComponent_ng_template_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtext(1);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r648 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(ctx_r648.content);
    } }
    function NzPopoverComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 2);
        core.ɵɵelementStart(1, "div", 3);
        core.ɵɵelement(2, "div", 4);
        core.ɵɵelementStart(3, "div", 5);
        core.ɵɵelementStart(4, "div");
        core.ɵɵtemplate(5, NzPopoverComponent_ng_template_1_div_5_Template, 2, 1, "div", 6);
        core.ɵɵelementStart(6, "div", 7);
        core.ɵɵtemplate(7, NzPopoverComponent_ng_template_1_ng_container_7_Template, 2, 1, "ng-container", 8);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r646 = core.ɵɵnextContext();
        core.ɵɵproperty("ngClass", ctx_r646._classMap)("ngStyle", ctx_r646.nzOverlayStyle)("@.disabled", ctx_r646.noAnimation == null ? null : ctx_r646.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r646.noAnimation == null ? null : ctx_r646.noAnimation.nzNoAnimation)("@zoomBigMotion", "active");
        core.ɵɵadvance(5);
        core.ɵɵproperty("ngIf", ctx_r646.title);
        core.ɵɵadvance(2);
        core.ɵɵproperty("nzStringTemplateOutlet", ctx_r646.content);
    } }
    var _c0 = ["*"];
    var NzPopoverComponent = /** @class */ (function (_super) {
        __extends(NzPopoverComponent, _super);
        function NzPopoverComponent(cdr, noAnimation) {
            var _this = _super.call(this, cdr, noAnimation) || this;
            _this.noAnimation = noAnimation;
            _this._prefix = 'ant-popover-placement';
            return _this;
        }
        NzPopoverComponent.prototype.isEmpty = function () {
            return tooltip.isTooltipEmpty(this.title) && tooltip.isTooltipEmpty(this.content);
        };
        /** @nocollapse */ NzPopoverComponent.ɵfac = function NzPopoverComponent_Factory(t) { return new (t || NzPopoverComponent)(core.ɵɵdirectiveInject(core.ChangeDetectorRef), core.ɵɵdirectiveInject(core$1.NzNoAnimationDirective, 9)); };
        /** @nocollapse */ NzPopoverComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzPopoverComponent, selectors: [["nz-popover"]], exportAs: ["nzPopoverComponent"], features: [core.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 3, vars: 4, consts: [["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayPositions", "cdkConnectedOverlayOpen", "backdropClick", "detach", "positionChange"], ["overlay", "cdkConnectedOverlay"], [1, "ant-popover", 3, "ngClass", "ngStyle", "nzNoAnimation"], [1, "ant-popover-content"], [1, "ant-popover-arrow"], ["role", "tooltip", 1, "ant-popover-inner"], ["class", "ant-popover-title", 4, "ngIf"], [1, "ant-popover-inner-content"], [4, "nzStringTemplateOutlet"], [1, "ant-popover-title"]], template: function NzPopoverComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵprojection(0);
                core.ɵɵtemplate(1, NzPopoverComponent_ng_template_1_Template, 8, 7, "ng-template", 0, 1, core.ɵɵtemplateRefExtractor);
                core.ɵɵlistener("backdropClick", function NzPopoverComponent_Template_ng_template_backdropClick_1_listener($event) { return ctx.hide(); })("detach", function NzPopoverComponent_Template_ng_template_detach_1_listener($event) { return ctx.hide(); })("positionChange", function NzPopoverComponent_Template_ng_template_positionChange_1_listener($event) { return ctx.onPositionChange($event); });
            } if (rf & 2) {
                core.ɵɵadvance(1);
                core.ɵɵproperty("cdkConnectedOverlayOrigin", ctx.origin)("cdkConnectedOverlayHasBackdrop", ctx._hasBackdrop)("cdkConnectedOverlayPositions", ctx._positions)("cdkConnectedOverlayOpen", ctx._visible);
            } }, directives: [overlay.CdkConnectedOverlay, core$1.NzConnectedOverlayDirective, common.NgClass, common.NgStyle, core$1.NzNoAnimationDirective, common.NgIf, core$1.NzStringTemplateOutletDirective], styles: ["\n      .ant-popover {\n        position: relative;\n      }\n    "], encapsulation: 2, data: { animation: [core$1.zoomBigMotion] }, changeDetection: 0 });
        return NzPopoverComponent;
    }(tooltip.NzToolTipComponent));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzPopoverComponent, [{
            type: core.Component,
            args: [{
                    selector: 'nz-popover',
                    exportAs: 'nzPopoverComponent',
                    animations: [core$1.zoomBigMotion],
                    templateUrl: './nz-popover.component.html',
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    styles: [
                        "\n      .ant-popover {\n        position: relative;\n      }\n    "
                    ]
                }]
        }], function () { return [{ type: core.ChangeDetectorRef }, { type: core$1.NzNoAnimationDirective, decorators: [{
                    type: core.Host
                }, {
                    type: core.Optional
                }] }]; }, null); })();

    var NzPopoverDirective = /** @class */ (function (_super) {
        __extends(NzPopoverDirective, _super);
        function NzPopoverDirective(elementRef, hostView, resolver, renderer, noAnimation) {
            var _this = _super.call(this, elementRef, hostView, resolver, renderer, noAnimation) || this;
            _this.noAnimation = noAnimation;
            _this.componentFactory = _this.resolver.resolveComponentFactory(NzPopoverComponent);
            return _this;
        }
        /** @nocollapse */ NzPopoverDirective.ɵfac = function NzPopoverDirective_Factory(t) { return new (t || NzPopoverDirective)(core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(core.ViewContainerRef), core.ɵɵdirectiveInject(core.ComponentFactoryResolver), core.ɵɵdirectiveInject(core.Renderer2), core.ɵɵdirectiveInject(core$1.NzNoAnimationDirective, 9)); };
        /** @nocollapse */ NzPopoverDirective.ɵdir = core.ɵɵdefineDirective({ type: NzPopoverDirective, selectors: [["", "nz-popover", ""]], hostBindings: function NzPopoverDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
                core.ɵɵallocHostVars(1);
            } if (rf & 2) {
                core.ɵɵclassProp("ant-popover-open", ctx.isTooltipComponentVisible);
            } }, inputs: { specificTitle: ["nzPopoverTitle", "specificTitle"], specificContent: ["nzPopoverContent", "specificContent"], directiveNameTitle: ["nz-popover", "directiveNameTitle"], specificTrigger: ["nzPopoverTrigger", "specificTrigger"], specificPlacement: ["nzPopoverPlacement", "specificPlacement"] }, exportAs: ["nzPopover"], features: [core.ɵɵInheritDefinitionFeature] });
        return NzPopoverDirective;
    }(tooltip.NzTooltipBaseDirective));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzPopoverDirective, [{
            type: core.Directive,
            args: [{
                    selector: '[nz-popover]',
                    exportAs: 'nzPopover',
                    host: {
                        '[class.ant-popover-open]': 'isTooltipComponentVisible'
                    }
                }]
        }], function () { return [{ type: core.ElementRef }, { type: core.ViewContainerRef }, { type: core.ComponentFactoryResolver }, { type: core.Renderer2 }, { type: core$1.NzNoAnimationDirective, decorators: [{
                    type: core.Host
                }, {
                    type: core.Optional
                }] }]; }, { specificTitle: [{
                type: core.Input,
                args: ['nzPopoverTitle']
            }], specificContent: [{
                type: core.Input,
                args: ['nzPopoverContent']
            }], directiveNameTitle: [{
                type: core.Input,
                args: ['nz-popover']
            }], specificTrigger: [{
                type: core.Input,
                args: ['nzPopoverTrigger']
            }], specificPlacement: [{
                type: core.Input,
                args: ['nzPopoverPlacement']
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzPopoverModule = /** @class */ (function () {
        function NzPopoverModule() {
        }
        /** @nocollapse */ NzPopoverModule.ɵmod = core.ɵɵdefineNgModule({ type: NzPopoverModule });
        /** @nocollapse */ NzPopoverModule.ɵinj = core.ɵɵdefineInjector({ factory: function NzPopoverModule_Factory(t) { return new (t || NzPopoverModule)(); }, imports: [[common.CommonModule, overlay.OverlayModule, core$1.NzAddOnModule, core$1.NzOverlayModule, core$1.NzNoAnimationModule, tooltip.NzToolTipModule]] });
        return NzPopoverModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(NzPopoverModule, { declarations: [NzPopoverDirective, NzPopoverComponent], imports: [common.CommonModule, overlay.OverlayModule, core$1.NzAddOnModule, core$1.NzOverlayModule, core$1.NzNoAnimationModule, tooltip.NzToolTipModule], exports: [NzPopoverDirective, NzPopoverComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzPopoverModule, [{
            type: core.NgModule,
            args: [{
                    entryComponents: [NzPopoverComponent],
                    exports: [NzPopoverDirective, NzPopoverComponent],
                    declarations: [NzPopoverDirective, NzPopoverComponent],
                    imports: [common.CommonModule, overlay.OverlayModule, core$1.NzAddOnModule, core$1.NzOverlayModule, core$1.NzNoAnimationModule, tooltip.NzToolTipModule]
                }]
        }], null, null); })();

    exports.NzPopoverComponent = NzPopoverComponent;
    exports.NzPopoverDirective = NzPopoverDirective;
    exports.NzPopoverModule = NzPopoverModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-popover.umd.js.map

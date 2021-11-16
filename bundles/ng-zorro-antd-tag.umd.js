(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('ng-zorro-antd/core'),require('@angular/common'),require('ng-zorro-antd/icon'),require('@angular/forms'),exports, require('@angular/core'), require('ng-zorro-antd/core'), require('@angular/common'), require('@angular/forms'), require('ng-zorro-antd/icon')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/tag', ['@angular/core','ng-zorro-antd/core','@angular/common','ng-zorro-antd/icon','@angular/forms','exports', '@angular/core', 'ng-zorro-antd/core', '@angular/common', '@angular/forms', 'ng-zorro-antd/icon'], factory) :
    (global = global || self, factory(global.ng.core,global.ngZorroAntd.core,global.ng.common,global.ngZorroAntd.icon,global.ng.forms,(global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].tag = {}), global.ng.core, global['ng-zorro-antd'].core, global.ng.common, global.ng.forms, global['ng-zorro-antd'].icon));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,ɵngcc4,exports, core, core$1, common, forms, icon) { 
function NzTagComponent_i_1_Template(rf, ctx) { if (rf & 1) {
    var _r2 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "i", 1);
    ɵngcc0.ɵɵlistener("click", function NzTagComponent_i_1_Template_i_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r2); var ctx_r1 = ɵngcc0.ɵɵnextContext(); return ctx_r1.closeTag($event); });
    ɵngcc0.ɵɵelementEnd();
} }
var _c0 = ["*"];
'use strict';

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
    var NzTagComponent = /** @class */ (function () {
        function NzTagComponent(renderer, elementRef, nzUpdateHostClassService) {
            this.renderer = renderer;
            this.elementRef = elementRef;
            this.nzUpdateHostClassService = nzUpdateHostClassService;
            this.presetColor = false;
            this.nzMode = 'default';
            this.nzChecked = false;
            this.nzNoAnimation = false;
            this.nzAfterClose = new core.EventEmitter();
            this.nzOnClose = new core.EventEmitter();
            this.nzCheckedChange = new core.EventEmitter();
        }
        /**
         * @private
         * @param {?=} color
         * @return {?}
         */
        NzTagComponent.prototype.isPresetColor = /**
         * @private
         * @param {?=} color
         * @return {?}
         */
        function (color) {
            if (!color) {
                return false;
            }
            return /^(pink|red|yellow|orange|cyan|green|blue|purple|geekblue|magenta|volcano|gold|lime)(-inverse)?$/.test(color);
        };
        /**
         * @private
         * @return {?}
         */
        NzTagComponent.prototype.updateClassMap = /**
         * @private
         * @return {?}
         */
        function () {
            var _a;
            this.presetColor = this.isPresetColor(this.nzColor);
            /** @type {?} */
            var prefix = 'ant-tag';
            this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, (_a = {},
                _a["" + prefix] = true,
                _a[prefix + "-has-color"] = this.nzColor && !this.presetColor,
                _a[prefix + "-" + this.nzColor] = this.presetColor,
                _a[prefix + "-checkable"] = this.nzMode === 'checkable',
                _a[prefix + "-checkable-checked"] = this.nzChecked,
                _a));
        };
        /**
         * @return {?}
         */
        NzTagComponent.prototype.updateCheckedStatus = /**
         * @return {?}
         */
        function () {
            if (this.nzMode === 'checkable') {
                this.nzChecked = !this.nzChecked;
                this.nzCheckedChange.emit(this.nzChecked);
                this.updateClassMap();
            }
        };
        /**
         * @param {?} e
         * @return {?}
         */
        NzTagComponent.prototype.closeTag = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            this.nzOnClose.emit(e);
            if (!e.defaultPrevented) {
                this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
            }
        };
        /**
         * @param {?} e
         * @return {?}
         */
        NzTagComponent.prototype.afterAnimation = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            if (e.toState === 'void') {
                this.nzAfterClose.emit();
                if (this.nzAfterClose.observers.length) {
                    core$1.warnDeprecation("'(nzAfterClose)' Output is going to be removed in 9.0.0. Please use '(nzOnClose)' instead.");
                }
            }
        };
        /**
         * @return {?}
         */
        NzTagComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.updateClassMap();
        };
        /**
         * @return {?}
         */
        NzTagComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
        function () {
            this.updateClassMap();
        };
        /** @nocollapse */
        NzTagComponent.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: core.ElementRef },
            { type: core$1.NzUpdateHostClassService }
        ]; };
        NzTagComponent.propDecorators = {
            nzMode: [{ type: core.Input }],
            nzColor: [{ type: core.Input }],
            nzChecked: [{ type: core.Input }],
            nzNoAnimation: [{ type: core.Input }],
            nzAfterClose: [{ type: core.Output }],
            nzOnClose: [{ type: core.Output }],
            nzCheckedChange: [{ type: core.Output }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTagComponent.prototype, "nzChecked", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTagComponent.prototype, "nzNoAnimation", void 0);
NzTagComponent.ɵfac = function NzTagComponent_Factory(t) { return new (t || NzTagComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzUpdateHostClassService)); };
NzTagComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTagComponent, selectors: [["nz-tag"]], hostVars: 4, hostBindings: function NzTagComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵcomponentHostSyntheticListener("@fadeMotion.done", function NzTagComponent_animation_fadeMotion_done_HostBindingHandler($event) { return ctx.afterAnimation($event); });
        ɵngcc0.ɵɵlistener("click", function NzTagComponent_click_HostBindingHandler() { return ctx.updateCheckedStatus(); });
    } if (rf & 2) {
        ɵngcc0.ɵɵupdateSyntheticHostBinding("@fadeMotion", undefined)("@.disabled", ctx.nzNoAnimation);
        ɵngcc0.ɵɵstyleProp("background-color", ctx.presetColor ? null : ctx.nzColor);
    } }, inputs: { nzMode: "nzMode", nzChecked: "nzChecked", nzNoAnimation: "nzNoAnimation", nzColor: "nzColor" }, outputs: { nzAfterClose: "nzAfterClose", nzOnClose: "nzOnClose", nzCheckedChange: "nzCheckedChange" }, exportAs: ["nzTag"], features: [ɵngcc0.ɵɵProvidersFeature([core$1.NzUpdateHostClassService]), ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 2, vars: 1, consts: [["nz-icon", "", "nzType", "close", "tabindex", "-1", 3, "click", 4, "ngIf"], ["nz-icon", "", "nzType", "close", "tabindex", "-1", 3, "click"]], template: function NzTagComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
        ɵngcc0.ɵɵtemplate(1, NzTagComponent_i_1_Template, 1, 0, "i", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzMode === "closeable");
    } }, directives: [ɵngcc2.NgIf, ɵngcc3.NzIconDirective], encapsulation: 2, data: { animation: [core$1.fadeMotion] }, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTagComponent, [{
        type: core.Component,
        args: [{
                selector: 'nz-tag',
                exportAs: 'nzTag',
                preserveWhitespaces: false,
                providers: [core$1.NzUpdateHostClassService],
                animations: [core$1.fadeMotion],
                template: "<ng-content></ng-content>\r\n<i nz-icon nzType=\"close\" *ngIf=\"nzMode==='closeable'\" tabindex=\"-1\" (click)=\"closeTag($event)\"></i>\r\n",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                host: {
                    '[@fadeMotion]': '',
                    '[@.disabled]': 'nzNoAnimation',
                    '(@fadeMotion.done)': 'afterAnimation($event)',
                    '(click)': 'updateCheckedStatus()',
                    '[style.background-color]': 'presetColor? null : nzColor'
                }
            }]
    }], function () { return [{ type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ElementRef }, { type: ɵngcc1.NzUpdateHostClassService }]; }, { nzMode: [{
            type: core.Input
        }], nzChecked: [{
            type: core.Input
        }], nzNoAnimation: [{
            type: core.Input
        }], nzAfterClose: [{
            type: core.Output
        }], nzOnClose: [{
            type: core.Output
        }], nzCheckedChange: [{
            type: core.Output
        }], nzColor: [{
            type: core.Input
        }] }); })();
        return NzTagComponent;
    }());
    if (false) {
        /** @type {?} */
        NzTagComponent.prototype.presetColor;
        /** @type {?} */
        NzTagComponent.prototype.nzMode;
        /** @type {?} */
        NzTagComponent.prototype.nzColor;
        /** @type {?} */
        NzTagComponent.prototype.nzChecked;
        /** @type {?} */
        NzTagComponent.prototype.nzNoAnimation;
        /** @type {?} */
        NzTagComponent.prototype.nzAfterClose;
        /** @type {?} */
        NzTagComponent.prototype.nzOnClose;
        /** @type {?} */
        NzTagComponent.prototype.nzCheckedChange;
        /**
         * @type {?}
         * @private
         */
        NzTagComponent.prototype.renderer;
        /** @type {?} */
        NzTagComponent.prototype.elementRef;
        /**
         * @type {?}
         * @private
         */
        NzTagComponent.prototype.nzUpdateHostClassService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzTagModule = /** @class */ (function () {
        function NzTagModule() {
        }
NzTagModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzTagModule });
NzTagModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzTagModule_Factory(t) { return new (t || NzTagModule)(); }, imports: [[common.CommonModule, forms.FormsModule, icon.NzIconModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzTagModule, { declarations: [NzTagComponent], imports: [ɵngcc2.CommonModule, ɵngcc4.FormsModule, ɵngcc3.NzIconModule], exports: [NzTagComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTagModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule, forms.FormsModule, icon.NzIconModule],
                declarations: [NzTagComponent],
                exports: [NzTagComponent]
            }]
    }], function () { return []; }, null); })();
        return NzTagModule;
    }());

    exports.NzTagComponent = NzTagComponent;
    exports.NzTagModule = NzTagModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-zorro-antd-tag.umd.js.map
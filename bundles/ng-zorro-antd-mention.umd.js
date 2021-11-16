(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/cdk/overlay'),require('@angular/common'),require('ng-zorro-antd/icon'),require('@angular/forms'),exports, require('@angular/cdk/overlay'), require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('ng-zorro-antd/icon'), require('rxjs'), require('@angular/cdk/keycodes'), require('@angular/cdk/portal'), require('ng-zorro-antd/core')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/mention', ['@angular/core','@angular/cdk/overlay','@angular/common','ng-zorro-antd/icon','@angular/forms','exports', '@angular/cdk/overlay', '@angular/common', '@angular/core', '@angular/forms', 'ng-zorro-antd/icon', 'rxjs', '@angular/cdk/keycodes', '@angular/cdk/portal', 'ng-zorro-antd/core'], factory) :
    (global = global || self, factory(global.ng.core,global.ng.cdk.overlay,global.ng.common,global.ngZorroAntd.icon,global.ng.forms,(global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].mention = {}), global.ng.cdk.overlay, global.ng.common, global.ng.core, global.ng.forms, global['ng-zorro-antd'].icon, global.rxjs, global.ng.cdk.keycodes, global.ng.cdk.portal, global['ng-zorro-antd'].core));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,ɵngcc4,exports, overlay, common, core, forms, icon, rxjs, keycodes, portal, core$1) { 
function NzMentionComponent_ng_template_1_li_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
var _c0 = function (a0) { return { $implicit: a0 }; };
function NzMentionComponent_ng_template_1_li_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzMentionComponent_ng_template_1_li_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 7);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var suggestion_r4 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r6.suggestionTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c0, suggestion_r4));
} }
function NzMentionComponent_ng_template_1_li_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtext(0);
} if (rf & 2) {
    var suggestion_r4 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r8 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r8.nzValueWith(suggestion_r4));
} }
function NzMentionComponent_ng_template_1_li_1_Template(rf, ctx) { if (rf & 1) {
    var _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 4);
    ɵngcc0.ɵɵlistener("mousedown", function NzMentionComponent_ng_template_1_li_1_Template_li_mousedown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); return $event.preventDefault(); })("click", function NzMentionComponent_ng_template_1_li_1_Template_li_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r13); var suggestion_r4 = ctx.$implicit; var ctx_r14 = ɵngcc0.ɵɵnextContext(2); return ctx_r14.selectSuggestion(suggestion_r4); });
    ɵngcc0.ɵɵtemplate(1, NzMentionComponent_ng_template_1_li_1_ng_container_1_Template, 2, 4, "ng-container", 5);
    ɵngcc0.ɵɵtemplate(2, NzMentionComponent_ng_template_1_li_1_ng_template_2_Template, 1, 1, "ng-template", null, 6, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var i_r5 = ctx.index;
    var _r7 = ɵngcc0.ɵɵreference(3);
    var ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassProp("focus", i_r5 === ctx_r2.activeIndex);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.suggestionTemplate)("ngIfElse", _r7);
} }
function NzMentionComponent_ng_template_1_li_2_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵelement(1, "i", 10);
    ɵngcc0.ɵɵelementEnd();
} }
function NzMentionComponent_ng_template_1_li_2_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r16 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r16.nzNotFoundContent);
} }
function NzMentionComponent_ng_template_1_li_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 8);
    ɵngcc0.ɵɵtemplate(1, NzMentionComponent_ng_template_1_li_2_span_1_Template, 2, 0, "span", 9);
    ɵngcc0.ɵɵtemplate(2, NzMentionComponent_ng_template_1_li_2_span_2_Template, 2, 1, "span", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.nzLoading);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r3.nzLoading);
} }
function NzMentionComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "ul", 1);
    ɵngcc0.ɵɵtemplate(1, NzMentionComponent_ng_template_1_li_1_Template, 4, 4, "li", 2);
    ɵngcc0.ɵɵtemplate(2, NzMentionComponent_ng_template_1_li_2_Template, 3, 2, "li", 3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r1.filteredSuggestions);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.filteredSuggestions.length === 0);
} }
var _c1 = ["*"];
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
    var NzMentionSuggestionDirective = /** @class */ (function () {
        function NzMentionSuggestionDirective() {
        }
NzMentionSuggestionDirective.ɵfac = function NzMentionSuggestionDirective_Factory(t) { return new (t || NzMentionSuggestionDirective)(); };
NzMentionSuggestionDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzMentionSuggestionDirective, selectors: [["", "nzMentionSuggestion", ""]], exportAs: ["nzMentionSuggestion"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzMentionSuggestionDirective, [{
        type: core.Directive,
        args: [{
                selector: '[nzMentionSuggestion]',
                exportAs: 'nzMentionSuggestion'
            }]
    }], function () { return []; }, null); })();
        return NzMentionSuggestionDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzMentionService = /** @class */ (function () {
        function NzMentionService() {
            this.triggerChange$ = new rxjs.Subject();
        }
        /**
         * @return {?}
         */
        NzMentionService.prototype.triggerChanged = /**
         * @return {?}
         */
        function () {
            return this.triggerChange$.asObservable();
        };
        /**
         * @param {?} trigger
         * @return {?}
         */
        NzMentionService.prototype.registerTrigger = /**
         * @param {?} trigger
         * @return {?}
         */
        function (trigger) {
            if (this.trigger !== trigger) {
                this.trigger = trigger;
                this.triggerChange$.next(trigger);
            }
        };
        /**
         * @return {?}
         */
        NzMentionService.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.triggerChange$.complete();
        };
NzMentionService.ɵfac = function NzMentionService_Factory(t) { return new (t || NzMentionService)(); };
NzMentionService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: NzMentionService, factory: function (t) { return NzMentionService.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzMentionService, [{
        type: core.Injectable
    }], function () { return []; }, null); })();
        return NzMentionService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        NzMentionService.prototype.trigger;
        /**
         * @type {?}
         * @private
         */
        NzMentionService.prototype.triggerChange$;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var NZ_MENTION_TRIGGER_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef((/**
         * @return {?}
         */
        function () { return NzMentionTriggerDirective; })),
        multi: true
    };
    var NzMentionTriggerDirective = /** @class */ (function () {
        function NzMentionTriggerDirective(el, nzMentionService) {
            this.el = el;
            this.nzMentionService = nzMentionService;
            this.onFocusin = new core.EventEmitter();
            this.onBlur = new core.EventEmitter();
            this.onInput = new core.EventEmitter();
            this.onKeydown = new core.EventEmitter();
            this.onClick = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        NzMentionTriggerDirective.prototype.completeEvents = /**
         * @return {?}
         */
        function () {
            this.onFocusin.complete();
            this.onBlur.complete();
            this.onInput.complete();
            this.onKeydown.complete();
            this.onClick.complete();
        };
        /**
         * @param {?=} caretPos
         * @return {?}
         */
        NzMentionTriggerDirective.prototype.focus = /**
         * @param {?=} caretPos
         * @return {?}
         */
        function (caretPos) {
            this.el.nativeElement.focus();
            this.el.nativeElement.setSelectionRange(caretPos, caretPos);
        };
        /**
         * @param {?} mention
         * @return {?}
         */
        NzMentionTriggerDirective.prototype.insertMention = /**
         * @param {?} mention
         * @return {?}
         */
        function (mention) {
            /** @type {?} */
            var value = this.el.nativeElement.value;
            /** @type {?} */
            var insertValue = mention.mention.trim() + ' ';
            /** @type {?} */
            var newValue = [
                value.slice(0, mention.startPos + 1),
                insertValue,
                value.slice(mention.endPos, value.length)
            ].join('');
            this.el.nativeElement.value = newValue;
            this.focus(mention.startPos + insertValue.length + 1);
            this.onChange(newValue);
            this.value = newValue;
        };
        /**
         * @param {?} value
         * @return {?}
         */
        NzMentionTriggerDirective.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.value = value;
            if (typeof value === 'string') {
                this.el.nativeElement.value = value;
            }
            else {
                this.el.nativeElement.value = '';
            }
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        NzMentionTriggerDirective.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onChange = fn;
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        NzMentionTriggerDirective.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onTouched = fn;
        };
        /**
         * @return {?}
         */
        NzMentionTriggerDirective.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            this.nzMentionService.registerTrigger(this);
        };
        /**
         * @return {?}
         */
        NzMentionTriggerDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.completeEvents();
        };
        /** @nocollapse */
        NzMentionTriggerDirective.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: NzMentionService }
        ]; };
NzMentionTriggerDirective.ɵfac = function NzMentionTriggerDirective_Factory(t) { return new (t || NzMentionTriggerDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(NzMentionService)); };
NzMentionTriggerDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzMentionTriggerDirective, selectors: [["input", "nzMentionTrigger", ""], ["textarea", "nzMentionTrigger", ""]], hostAttrs: ["autocomplete", "off"], hostBindings: function NzMentionTriggerDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("focusin", function NzMentionTriggerDirective_focusin_HostBindingHandler() { return ctx.onFocusin.emit(); })("blur", function NzMentionTriggerDirective_blur_HostBindingHandler() { return ctx.onBlur.emit(); })("input", function NzMentionTriggerDirective_input_HostBindingHandler($event) { return ctx.onInput.emit($event); })("keydown", function NzMentionTriggerDirective_keydown_HostBindingHandler($event) { return ctx.onKeydown.emit($event); })("click", function NzMentionTriggerDirective_click_HostBindingHandler($event) { return ctx.onClick.emit($event); });
    } }, exportAs: ["nzMentionTrigger"], features: [ɵngcc0.ɵɵProvidersFeature([NZ_MENTION_TRIGGER_ACCESSOR])] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzMentionTriggerDirective, [{
        type: core.Directive,
        args: [{
                selector: 'input[nzMentionTrigger], textarea[nzMentionTrigger]',
                exportAs: 'nzMentionTrigger',
                providers: [NZ_MENTION_TRIGGER_ACCESSOR],
                host: {
                    autocomplete: 'off',
                    '(focusin)': 'onFocusin.emit()',
                    '(blur)': 'onBlur.emit()',
                    '(input)': 'onInput.emit($event)',
                    '(keydown)': 'onKeydown.emit($event)',
                    '(click)': 'onClick.emit($event)'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: NzMentionService }]; }, null); })();
        return NzMentionTriggerDirective;
    }());
    if (false) {
        /** @type {?} */
        NzMentionTriggerDirective.prototype.onChange;
        /** @type {?} */
        NzMentionTriggerDirective.prototype.onTouched;
        /** @type {?} */
        NzMentionTriggerDirective.prototype.onFocusin;
        /** @type {?} */
        NzMentionTriggerDirective.prototype.onBlur;
        /** @type {?} */
        NzMentionTriggerDirective.prototype.onInput;
        /** @type {?} */
        NzMentionTriggerDirective.prototype.onKeydown;
        /** @type {?} */
        NzMentionTriggerDirective.prototype.onClick;
        /** @type {?} */
        NzMentionTriggerDirective.prototype.value;
        /** @type {?} */
        NzMentionTriggerDirective.prototype.el;
        /**
         * @type {?}
         * @private
         */
        NzMentionTriggerDirective.prototype.nzMentionService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function MentionOnSearchTypes() { }
    if (false) {
        /** @type {?} */
        MentionOnSearchTypes.prototype.value;
        /** @type {?} */
        MentionOnSearchTypes.prototype.prefix;
    }
    /**
     * @record
     */
    function Mention() { }
    if (false) {
        /** @type {?} */
        Mention.prototype.startPos;
        /** @type {?} */
        Mention.prototype.endPos;
        /** @type {?} */
        Mention.prototype.mention;
    }
    var NzMentionComponent = /** @class */ (function () {
        function NzMentionComponent(ngDocument, // tslint:disable-line:no-any
        changeDetectorRef, overlay, viewContainerRef, nzMentionService) {
            this.ngDocument = ngDocument;
            this.changeDetectorRef = changeDetectorRef;
            this.overlay = overlay;
            this.viewContainerRef = viewContainerRef;
            this.nzMentionService = nzMentionService;
            this.nzValueWith = (/**
             * @param {?} value
             * @return {?}
             */
            function (value) { return value; }); // tslint:disable-line:no-any
            // tslint:disable-line:no-any
            this.nzPrefix = '@';
            this.nzLoading = false;
            this.nzNotFoundContent = '无匹配结果，轻敲空格完成输入';
            this.nzPlacement = 'bottom';
            this.nzSuggestions = [];
            this.nzOnSelect = new core.EventEmitter();
            this.nzOnSearchChange = new core.EventEmitter();
            this.isOpen = false;
            this.filteredSuggestions = [];
            this.suggestionTemplate = null; // tslint:disable-line:no-any
            // tslint:disable-line:no-any
            this.activeIndex = -1;
            this.previousValue = null;
        }
        Object.defineProperty(NzMentionComponent.prototype, "suggestionChild", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (value) {
                    this.suggestionTemplate = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzMentionComponent.prototype, "triggerNativeElement", {
            get: /**
             * @private
             * @return {?}
             */
            function () {
                return this.trigger.el.nativeElement;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NzMentionComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.nzMentionService.triggerChanged().subscribe((/**
             * @param {?} trigger
             * @return {?}
             */
            function (trigger) {
                _this.trigger = trigger;
                _this.bindTriggerEvents();
                _this.closeDropdown();
                _this.overlayRef = null;
            }));
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        NzMentionComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.hasOwnProperty('nzSuggestions')) {
                if (this.isOpen) {
                    this.previousValue = null;
                    this.activeIndex = -1;
                    this.resetDropdown(false);
                }
            }
        };
        /**
         * @return {?}
         */
        NzMentionComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.closeDropdown();
        };
        /**
         * @return {?}
         */
        NzMentionComponent.prototype.closeDropdown = /**
         * @return {?}
         */
        function () {
            if (this.overlayRef && this.overlayRef.hasAttached()) {
                this.overlayRef.detach();
                this.overlayBackdropClickSubscription.unsubscribe();
                this.isOpen = false;
                this.changeDetectorRef.markForCheck();
            }
        };
        /**
         * @return {?}
         */
        NzMentionComponent.prototype.openDropdown = /**
         * @return {?}
         */
        function () {
            this.attachOverlay();
            this.isOpen = true;
            this.changeDetectorRef.markForCheck();
        };
        /**
         * @return {?}
         */
        NzMentionComponent.prototype.getMentions = /**
         * @return {?}
         */
        function () {
            return this.trigger ? core$1.getMentions(this.trigger.value, this.nzPrefix) : [];
        };
        /**
         * @param {?} suggestion
         * @return {?}
         */
        NzMentionComponent.prototype.selectSuggestion = /**
         * @param {?} suggestion
         * @return {?}
         */
        function (suggestion) {
            /** @type {?} */
            var value = this.nzValueWith(suggestion);
            this.trigger.insertMention({
                mention: value,
                startPos: this.cursorMentionStart,
                endPos: this.cursorMentionEnd
            });
            this.nzOnSelect.emit(suggestion);
            this.closeDropdown();
            this.activeIndex = -1;
        };
        /**
         * @private
         * @param {?} event
         * @return {?}
         */
        NzMentionComponent.prototype.handleInput = /**
         * @private
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var target = (/** @type {?} */ (event.target));
            this.trigger.onChange(target.value);
            this.trigger.value = target.value;
            this.resetDropdown();
        };
        /**
         * @private
         * @param {?} event
         * @return {?}
         */
        NzMentionComponent.prototype.handleKeydown = /**
         * @private
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var keyCode = event.keyCode;
            if (this.isOpen && keyCode === keycodes.ENTER && this.activeIndex !== -1 && this.filteredSuggestions.length) {
                this.selectSuggestion(this.filteredSuggestions[this.activeIndex]);
                event.preventDefault();
            }
            else if (keyCode === keycodes.LEFT_ARROW || keyCode === keycodes.RIGHT_ARROW) {
                this.resetDropdown();
                event.stopPropagation();
            }
            else {
                if (this.isOpen && (keyCode === keycodes.TAB || keyCode === keycodes.ESCAPE)) {
                    this.closeDropdown();
                    return;
                }
                if (this.isOpen && keyCode === keycodes.UP_ARROW) {
                    this.setPreviousItemActive();
                    event.preventDefault();
                    event.stopPropagation();
                }
                if (this.isOpen && keyCode === keycodes.DOWN_ARROW) {
                    this.setNextItemActive();
                    event.preventDefault();
                    event.stopPropagation();
                }
            }
        };
        /**
         * @private
         * @return {?}
         */
        NzMentionComponent.prototype.handleClick = /**
         * @private
         * @return {?}
         */
        function () {
            this.resetDropdown();
        };
        /**
         * @private
         * @return {?}
         */
        NzMentionComponent.prototype.bindTriggerEvents = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            this.trigger.onInput.subscribe((/**
             * @param {?} e
             * @return {?}
             */
            function (e) { return _this.handleInput(e); }));
            this.trigger.onKeydown.subscribe((/**
             * @param {?} e
             * @return {?}
             */
            function (e) { return _this.handleKeydown(e); }));
            this.trigger.onClick.subscribe((/**
             * @return {?}
             */
            function () { return _this.handleClick(); }));
        };
        /**
         * @private
         * @param {?} value
         * @param {?} emit
         * @return {?}
         */
        NzMentionComponent.prototype.suggestionsFilter = /**
         * @private
         * @param {?} value
         * @param {?} emit
         * @return {?}
         */
        function (value, emit) {
            var _this = this;
            /** @type {?} */
            var suggestions = value.substring(1);
            if (this.previousValue === value) {
                return;
            }
            this.previousValue = value;
            if (emit) {
                this.nzOnSearchChange.emit({
                    value: (/** @type {?} */ (this.cursorMention)).substring(1),
                    prefix: (/** @type {?} */ (this.cursorMention))[0]
                });
            }
            /** @type {?} */
            var searchValue = suggestions.toLowerCase();
            this.filteredSuggestions = this.nzSuggestions.filter((/**
             * @param {?} suggestion
             * @return {?}
             */
            function (suggestion) {
                return _this.nzValueWith(suggestion)
                    .toLowerCase()
                    .includes(searchValue);
            }));
        };
        /**
         * @private
         * @param {?=} emit
         * @return {?}
         */
        NzMentionComponent.prototype.resetDropdown = /**
         * @private
         * @param {?=} emit
         * @return {?}
         */
        function (emit) {
            if (emit === void 0) { emit = true; }
            this.resetCursorMention();
            if (typeof this.cursorMention !== 'string' || !this.canOpen()) {
                this.closeDropdown();
                return;
            }
            this.suggestionsFilter(this.cursorMention, emit);
            /** @type {?} */
            var activeIndex = this.filteredSuggestions.indexOf(this.cursorMention.substring(1));
            this.activeIndex = activeIndex >= 0 ? activeIndex : 0;
            this.openDropdown();
        };
        /**
         * @private
         * @return {?}
         */
        NzMentionComponent.prototype.setNextItemActive = /**
         * @private
         * @return {?}
         */
        function () {
            this.activeIndex = this.activeIndex + 1 <= this.filteredSuggestions.length - 1 ? this.activeIndex + 1 : 0;
            this.changeDetectorRef.markForCheck();
        };
        /**
         * @private
         * @return {?}
         */
        NzMentionComponent.prototype.setPreviousItemActive = /**
         * @private
         * @return {?}
         */
        function () {
            this.activeIndex = this.activeIndex - 1 < 0 ? this.filteredSuggestions.length - 1 : this.activeIndex - 1;
            this.changeDetectorRef.markForCheck();
        };
        /**
         * @private
         * @return {?}
         */
        NzMentionComponent.prototype.canOpen = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var element = this.triggerNativeElement;
            return !element.readOnly && !element.disabled;
        };
        /**
         * @private
         * @return {?}
         */
        NzMentionComponent.prototype.resetCursorMention = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var value = this.triggerNativeElement.value.replace(/[\r\n]/g, ' ') || '';
            /** @type {?} */
            var selectionStart = (/** @type {?} */ (this.triggerNativeElement.selectionStart));
            /** @type {?} */
            var prefix = typeof this.nzPrefix === 'string' ? [this.nzPrefix] : this.nzPrefix;
            /** @type {?} */
            var i = prefix.length;
            while (i >= 0) {
                /** @type {?} */
                var startPos = value.lastIndexOf(prefix[i], selectionStart);
                /** @type {?} */
                var endPos = value.indexOf(' ', selectionStart) > -1 ? value.indexOf(' ', selectionStart) : value.length;
                /** @type {?} */
                var mention = value.substring(startPos, endPos);
                if ((startPos > 0 && value[startPos - 1] !== ' ') ||
                    startPos < 0 ||
                    mention.includes(prefix[i], 1) ||
                    mention.includes(' ')) {
                    this.cursorMention = null;
                    this.cursorMentionStart = -1;
                    this.cursorMentionEnd = -1;
                }
                else {
                    this.cursorMention = mention;
                    this.cursorMentionStart = startPos;
                    this.cursorMentionEnd = endPos;
                    return;
                }
                i--;
            }
        };
        /**
         * @private
         * @return {?}
         */
        NzMentionComponent.prototype.updatePositions = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var coordinates = core$1.getCaretCoordinates(this.triggerNativeElement, this.cursorMentionStart);
            /** @type {?} */
            var top = coordinates.top -
                this.triggerNativeElement.getBoundingClientRect().height -
                this.triggerNativeElement.scrollTop +
                (this.nzPlacement === 'bottom' ? coordinates.height - 6 : -6);
            /** @type {?} */
            var left = coordinates.left - this.triggerNativeElement.scrollLeft;
            this.positionStrategy.withDefaultOffsetX(left).withDefaultOffsetY(top);
            if (this.nzPlacement === 'bottom') {
                this.positionStrategy.withPositions(__spread(core$1.DEFAULT_MENTION_BOTTOM_POSITIONS));
            }
            if (this.nzPlacement === 'top') {
                this.positionStrategy.withPositions(__spread(core$1.DEFAULT_MENTION_TOP_POSITIONS));
            }
            this.positionStrategy.apply();
        };
        /**
         * @private
         * @return {?}
         */
        NzMentionComponent.prototype.subscribeOverlayBackdropClick = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            return rxjs.merge(rxjs.fromEvent(this.ngDocument, 'click'), rxjs.fromEvent(this.ngDocument, 'touchend')).subscribe((/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                /** @type {?} */
                var clickTarget = (/** @type {?} */ (event.target));
                if (_this.isOpen &&
                    clickTarget !== _this.trigger.el.nativeElement &&
                    (!!_this.overlayRef && !_this.overlayRef.overlayElement.contains(clickTarget))) {
                    _this.closeDropdown();
                }
            }));
        };
        /**
         * @private
         * @return {?}
         */
        NzMentionComponent.prototype.attachOverlay = /**
         * @private
         * @return {?}
         */
        function () {
            if (!this.overlayRef) {
                this.portal = new portal.TemplatePortal(this.suggestionsTemp, this.viewContainerRef);
                this.overlayRef = this.overlay.create(this.getOverlayConfig());
            }
            if (this.overlayRef && !this.overlayRef.hasAttached()) {
                this.overlayRef.attach(this.portal);
                this.overlayBackdropClickSubscription = this.subscribeOverlayBackdropClick();
            }
            this.updatePositions();
        };
        /**
         * @private
         * @return {?}
         */
        NzMentionComponent.prototype.getOverlayConfig = /**
         * @private
         * @return {?}
         */
        function () {
            return new overlay.OverlayConfig({
                positionStrategy: this.getOverlayPosition(),
                scrollStrategy: this.overlay.scrollStrategies.reposition()
            });
        };
        /**
         * @private
         * @return {?}
         */
        NzMentionComponent.prototype.getOverlayPosition = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var positions = [
                new overlay.ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
                new overlay.ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' })
            ];
            this.positionStrategy = this.overlay
                .position()
                .flexibleConnectedTo(this.trigger.el)
                .withPositions(positions)
                .withFlexibleDimensions(false)
                .withPush(false);
            return this.positionStrategy;
        };
        /** @nocollapse */
        NzMentionComponent.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: core.ChangeDetectorRef },
            { type: overlay.Overlay },
            { type: core.ViewContainerRef },
            { type: NzMentionService }
        ]; };
        NzMentionComponent.propDecorators = {
            nzValueWith: [{ type: core.Input }],
            nzPrefix: [{ type: core.Input }],
            nzLoading: [{ type: core.Input }],
            nzNotFoundContent: [{ type: core.Input }],
            nzPlacement: [{ type: core.Input }],
            nzSuggestions: [{ type: core.Input }],
            nzOnSelect: [{ type: core.Output }],
            nzOnSearchChange: [{ type: core.Output }],
            suggestionsTemp: [{ type: core.ViewChild, args: [core.TemplateRef, { static: false },] }],
            suggestionChild: [{ type: core.ContentChild, args: [NzMentionSuggestionDirective, { static: false, read: core.TemplateRef },] }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzMentionComponent.prototype, "nzLoading", void 0);
NzMentionComponent.ɵfac = function NzMentionComponent_Factory(t) { return new (t || NzMentionComponent)(ɵngcc0.ɵɵdirectiveInject(common.DOCUMENT, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Overlay), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(NzMentionService)); };
NzMentionComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzMentionComponent, selectors: [["nz-mention"]], contentQueries: function NzMentionComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzMentionSuggestionDirective, true, core.TemplateRef);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.suggestionChild = _t.first);
    } }, viewQuery: function NzMentionComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(core.TemplateRef, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.suggestionsTemp = _t.first);
    } }, inputs: { nzValueWith: "nzValueWith", nzPrefix: "nzPrefix", nzLoading: "nzLoading", nzNotFoundContent: "nzNotFoundContent", nzPlacement: "nzPlacement", nzSuggestions: "nzSuggestions" }, outputs: { nzOnSelect: "nzOnSelect", nzOnSearchChange: "nzOnSearchChange" }, exportAs: ["nzMention"], features: [ɵngcc0.ɵɵProvidersFeature([NzMentionService]), ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c1, decls: 3, vars: 0, consts: [["suggestions", ""], [1, "ant-mention-dropdown"], ["class", "ant-mention-dropdown-item", 3, "focus", "mousedown", "click", 4, "ngFor", "ngForOf"], ["class", "ant-mention-dropdown-notfound ant-mention-dropdown-item", 4, "ngIf"], [1, "ant-mention-dropdown-item", 3, "mousedown", "click"], [4, "ngIf", "ngIfElse"], ["defaultSuggestion", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-mention-dropdown-notfound", "ant-mention-dropdown-item"], [4, "ngIf"], ["nz-icon", "", "nzType", "loading"]], template: function NzMentionComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
        ɵngcc0.ɵɵtemplate(1, NzMentionComponent_ng_template_1_Template, 3, 2, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
    } }, directives: [ɵngcc2.NgForOf, ɵngcc2.NgIf, ɵngcc2.NgTemplateOutlet, ɵngcc3.NzIconDirective], styles: [".ant-mention-dropdown[_ngcontent-%COMP%] {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }"], changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzMentionComponent, [{
        type: core.Component,
        args: [{
                selector: 'nz-mention',
                exportAs: 'nzMention',
                template: "<ng-content></ng-content>\r\n<ng-template #suggestions>\r\n  <ul class=\"ant-mention-dropdown\">\r\n    <li class=\"ant-mention-dropdown-item\"\r\n        *ngFor=\"let suggestion of filteredSuggestions; let i = index\"\r\n        [class.focus]=\"i === activeIndex\"\r\n        (mousedown)=\"$event.preventDefault()\"\r\n        (click)=\"selectSuggestion(suggestion)\">\r\n      <ng-container *ngIf=\"suggestionTemplate else defaultSuggestion\">\r\n        <ng-container *ngTemplateOutlet=\"suggestionTemplate; context: {$implicit: suggestion}\"></ng-container>\r\n      </ng-container>\r\n      <ng-template #defaultSuggestion>{{ nzValueWith(suggestion) }}</ng-template>\r\n    </li>\r\n    <li class=\"ant-mention-dropdown-notfound ant-mention-dropdown-item\"\r\n        *ngIf=\"filteredSuggestions.length === 0\">\r\n      <span *ngIf=\"nzLoading\"><i nz-icon nzType=\"loading\"></i></span>\r\n      <span *ngIf=\"!nzLoading\">{{ nzNotFoundContent }}</span>\r\n    </li>\r\n  </ul>\r\n</ng-template>\r\n",
                preserveWhitespaces: false,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                providers: [NzMentionService],
                styles: ["\n      .ant-mention-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: core.Optional
            }, {
                type: core.Inject,
                args: [common.DOCUMENT]
            }] }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc1.Overlay }, { type: ɵngcc0.ViewContainerRef }, { type: NzMentionService }]; }, { nzValueWith: [{
            type: core.Input
        }], nzPrefix: [{
            type: core.Input
        }], nzLoading: [{
            type: core.Input
        }], nzNotFoundContent: [{
            type: core.Input
        }], nzPlacement: [{
            type: core.Input
        }], nzSuggestions: [{
            type: core.Input
        }], nzOnSelect: [{
            type: core.Output
        }], nzOnSearchChange: [{
            type: core.Output
        }], suggestionChild: [{
            type: core.ContentChild,
            args: [NzMentionSuggestionDirective, { static: false, read: core.TemplateRef }]
        }], suggestionsTemp: [{
            type: core.ViewChild,
            args: [core.TemplateRef, { static: false }]
        }] }); })();
        return NzMentionComponent;
    }());
    if (false) {
        /** @type {?} */
        NzMentionComponent.prototype.nzValueWith;
        /** @type {?} */
        NzMentionComponent.prototype.nzPrefix;
        /** @type {?} */
        NzMentionComponent.prototype.nzLoading;
        /** @type {?} */
        NzMentionComponent.prototype.nzNotFoundContent;
        /** @type {?} */
        NzMentionComponent.prototype.nzPlacement;
        /** @type {?} */
        NzMentionComponent.prototype.nzSuggestions;
        /** @type {?} */
        NzMentionComponent.prototype.nzOnSelect;
        /** @type {?} */
        NzMentionComponent.prototype.nzOnSearchChange;
        /** @type {?} */
        NzMentionComponent.prototype.trigger;
        /** @type {?} */
        NzMentionComponent.prototype.suggestionsTemp;
        /** @type {?} */
        NzMentionComponent.prototype.isOpen;
        /** @type {?} */
        NzMentionComponent.prototype.filteredSuggestions;
        /** @type {?} */
        NzMentionComponent.prototype.suggestionTemplate;
        /** @type {?} */
        NzMentionComponent.prototype.activeIndex;
        /**
         * @type {?}
         * @private
         */
        NzMentionComponent.prototype.previousValue;
        /**
         * @type {?}
         * @private
         */
        NzMentionComponent.prototype.cursorMention;
        /**
         * @type {?}
         * @private
         */
        NzMentionComponent.prototype.cursorMentionStart;
        /**
         * @type {?}
         * @private
         */
        NzMentionComponent.prototype.cursorMentionEnd;
        /**
         * @type {?}
         * @private
         */
        NzMentionComponent.prototype.overlayRef;
        /**
         * @type {?}
         * @private
         */
        NzMentionComponent.prototype.portal;
        /**
         * @type {?}
         * @private
         */
        NzMentionComponent.prototype.positionStrategy;
        /**
         * @type {?}
         * @private
         */
        NzMentionComponent.prototype.overlayBackdropClickSubscription;
        /**
         * @type {?}
         * @private
         */
        NzMentionComponent.prototype.ngDocument;
        /**
         * @type {?}
         * @private
         */
        NzMentionComponent.prototype.changeDetectorRef;
        /**
         * @type {?}
         * @private
         */
        NzMentionComponent.prototype.overlay;
        /**
         * @type {?}
         * @private
         */
        NzMentionComponent.prototype.viewContainerRef;
        /**
         * @type {?}
         * @private
         */
        NzMentionComponent.prototype.nzMentionService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [NzMentionComponent, NzMentionTriggerDirective, NzMentionSuggestionDirective];
    var NzMentionModule = /** @class */ (function () {
        function NzMentionModule() {
        }
NzMentionModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzMentionModule });
NzMentionModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzMentionModule_Factory(t) { return new (t || NzMentionModule)(); }, imports: [[common.CommonModule, forms.FormsModule, overlay.OverlayModule, icon.NzIconModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzMentionModule, { declarations: [NzMentionComponent,
        NzMentionTriggerDirective,
        NzMentionSuggestionDirective], imports: [ɵngcc2.CommonModule, ɵngcc4.FormsModule, ɵngcc1.OverlayModule, ɵngcc3.NzIconModule], exports: [NzMentionComponent,
        NzMentionTriggerDirective,
        NzMentionSuggestionDirective] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzMentionModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule, forms.FormsModule, overlay.OverlayModule, icon.NzIconModule],
                declarations: __spread(COMPONENTS),
                exports: __spread(COMPONENTS)
            }]
    }], function () { return []; }, null); })();
        return NzMentionModule;
    }());

    exports.NZ_MENTION_TRIGGER_ACCESSOR = NZ_MENTION_TRIGGER_ACCESSOR;
    exports.NzMentionComponent = NzMentionComponent;
    exports.NzMentionModule = NzMentionModule;
    exports.NzMentionService = NzMentionService;
    exports.NzMentionSuggestionDirective = NzMentionSuggestionDirective;
    exports.NzMentionTriggerDirective = NzMentionTriggerDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-zorro-antd-mention.umd.js.map
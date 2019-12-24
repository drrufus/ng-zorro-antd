(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/overlay'), require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('ng-zorro-antd/icon'), require('rxjs'), require('@angular/cdk/keycodes'), require('@angular/cdk/portal'), require('ng-zorro-antd/core')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/mention', ['exports', '@angular/cdk/overlay', '@angular/common', '@angular/core', '@angular/forms', 'ng-zorro-antd/icon', 'rxjs', '@angular/cdk/keycodes', '@angular/cdk/portal', 'ng-zorro-antd/core'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].mention = {}), global.ng.cdk.overlay, global.ng.common, global.ng.core, global.ng.forms, global['ng-zorro-antd'].icon, global.rxjs, global.ng.cdk.keycodes, global.ng.cdk.portal, global['ng-zorro-antd'].core));
}(this, (function (exports, overlay, common, core, forms, icon, rxjs, keycodes, portal, core$1) { 'use strict';

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
    var NzMentionSuggestionDirective = /** @class */ (function () {
        function NzMentionSuggestionDirective() {
        }
        /** @nocollapse */ NzMentionSuggestionDirective.ɵfac = function NzMentionSuggestionDirective_Factory(t) { return new (t || NzMentionSuggestionDirective)(); };
        /** @nocollapse */ NzMentionSuggestionDirective.ɵdir = core.ɵɵdefineDirective({ type: NzMentionSuggestionDirective, selectors: [["", "nzMentionSuggestion", ""]], exportAs: ["nzMentionSuggestion"] });
        return NzMentionSuggestionDirective;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzMentionSuggestionDirective, [{
            type: core.Directive,
            args: [{
                    selector: '[nzMentionSuggestion]',
                    exportAs: 'nzMentionSuggestion'
                }]
        }], null, null); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzMentionService = /** @class */ (function () {
        function NzMentionService() {
            this.triggerChange$ = new rxjs.Subject();
        }
        NzMentionService.prototype.triggerChanged = function () {
            return this.triggerChange$.asObservable();
        };
        NzMentionService.prototype.registerTrigger = function (trigger) {
            if (this.trigger !== trigger) {
                this.trigger = trigger;
                this.triggerChange$.next(trigger);
            }
        };
        NzMentionService.prototype.ngOnDestroy = function () {
            this.triggerChange$.complete();
        };
        /** @nocollapse */ NzMentionService.ɵfac = function NzMentionService_Factory(t) { return new (t || NzMentionService)(); };
        /** @nocollapse */ NzMentionService.ɵprov = core.ɵɵdefineInjectable({ token: NzMentionService, factory: NzMentionService.ɵfac });
        return NzMentionService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzMentionService, [{
            type: core.Injectable
        }], null, null); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var _c0 = ["autocomplete", "off"];
    var NZ_MENTION_TRIGGER_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return NzMentionTriggerDirective; }),
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
        NzMentionTriggerDirective.prototype.completeEvents = function () {
            this.onFocusin.complete();
            this.onBlur.complete();
            this.onInput.complete();
            this.onKeydown.complete();
            this.onClick.complete();
        };
        NzMentionTriggerDirective.prototype.focus = function (caretPos) {
            this.el.nativeElement.focus();
            this.el.nativeElement.setSelectionRange(caretPos, caretPos);
        };
        NzMentionTriggerDirective.prototype.insertMention = function (mention) {
            var value = this.el.nativeElement.value;
            var insertValue = mention.mention.trim() + ' ';
            var newValue = [value.slice(0, mention.startPos + 1), insertValue, value.slice(mention.endPos, value.length)].join('');
            this.el.nativeElement.value = newValue;
            this.focus(mention.startPos + insertValue.length + 1);
            this.onChange(newValue);
            this.value = newValue;
        };
        NzMentionTriggerDirective.prototype.writeValue = function (value) {
            this.value = value;
            if (typeof value === 'string') {
                this.el.nativeElement.value = value;
            }
            else {
                this.el.nativeElement.value = '';
            }
        };
        NzMentionTriggerDirective.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        NzMentionTriggerDirective.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        NzMentionTriggerDirective.prototype.ngAfterViewInit = function () {
            this.nzMentionService.registerTrigger(this);
        };
        NzMentionTriggerDirective.prototype.ngOnDestroy = function () {
            this.completeEvents();
        };
        /** @nocollapse */ NzMentionTriggerDirective.ɵfac = function NzMentionTriggerDirective_Factory(t) { return new (t || NzMentionTriggerDirective)(core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(NzMentionService)); };
        /** @nocollapse */ NzMentionTriggerDirective.ɵdir = core.ɵɵdefineDirective({ type: NzMentionTriggerDirective, selectors: [["input", "nzMentionTrigger", ""], ["textarea", "nzMentionTrigger", ""]], hostBindings: function NzMentionTriggerDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
                core.ɵɵlistener("focusin", function NzMentionTriggerDirective_focusin_HostBindingHandler($event) { return ctx.onFocusin.emit(); })("blur", function NzMentionTriggerDirective_blur_HostBindingHandler($event) { return ctx.onBlur.emit(); })("input", function NzMentionTriggerDirective_input_HostBindingHandler($event) { return ctx.onInput.emit($event); })("keydown", function NzMentionTriggerDirective_keydown_HostBindingHandler($event) { return ctx.onKeydown.emit($event); })("click", function NzMentionTriggerDirective_click_HostBindingHandler($event) { return ctx.onClick.emit($event); });
                core.ɵɵelementHostAttrs(_c0);
            } }, exportAs: ["nzMentionTrigger"], features: [core.ɵɵProvidersFeature([NZ_MENTION_TRIGGER_ACCESSOR])] });
        return NzMentionTriggerDirective;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzMentionTriggerDirective, [{
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
        }], function () { return [{ type: core.ElementRef }, { type: NzMentionService }]; }, null); })();

    function NzMentionComponent_ng_template_1_li_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainer(0);
    } }
    var _c0$1 = function (a0) { return { $implicit: a0 }; };
    function NzMentionComponent_ng_template_1_li_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, NzMentionComponent_ng_template_1_li_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 7);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var suggestion_r587 = core.ɵɵnextContext().$implicit;
        var ctx_r589 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", ctx_r589.suggestionTemplate)("ngTemplateOutletContext", core.ɵɵpureFunction1(2, _c0$1, suggestion_r587));
    } }
    function NzMentionComponent_ng_template_1_li_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtext(0);
    } if (rf & 2) {
        var suggestion_r587 = core.ɵɵnextContext().$implicit;
        var ctx_r591 = core.ɵɵnextContext(2);
        core.ɵɵtextInterpolate(ctx_r591.nzValueWith(suggestion_r587));
    } }
    function NzMentionComponent_ng_template_1_li_1_Template(rf, ctx) { if (rf & 1) {
        var _r596 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "li", 4);
        core.ɵɵlistener("mousedown", function NzMentionComponent_ng_template_1_li_1_Template_li_mousedown_0_listener($event) { core.ɵɵrestoreView(_r596); return $event.preventDefault(); })("click", function NzMentionComponent_ng_template_1_li_1_Template_li_click_0_listener($event) { core.ɵɵrestoreView(_r596); var suggestion_r587 = ctx.$implicit; var ctx_r597 = core.ɵɵnextContext(2); return ctx_r597.selectSuggestion(suggestion_r587); });
        core.ɵɵtemplate(1, NzMentionComponent_ng_template_1_li_1_ng_container_1_Template, 2, 4, "ng-container", 5);
        core.ɵɵtemplate(2, NzMentionComponent_ng_template_1_li_1_ng_template_2_Template, 1, 1, "ng-template", null, 6, core.ɵɵtemplateRefExtractor);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var i_r588 = ctx.index;
        var _r590 = core.ɵɵreference(3);
        var ctx_r585 = core.ɵɵnextContext(2);
        core.ɵɵclassProp("focus", i_r588 === ctx_r585.activeIndex);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r585.suggestionTemplate)("ngIfElse", _r590);
    } }
    function NzMentionComponent_ng_template_1_li_2_span_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span");
        core.ɵɵelement(1, "i", 10);
        core.ɵɵelementEnd();
    } }
    function NzMentionComponent_ng_template_1_li_2_span_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span");
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r599 = core.ɵɵnextContext(3);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(ctx_r599.nzNotFoundContent);
    } }
    function NzMentionComponent_ng_template_1_li_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "li", 8);
        core.ɵɵtemplate(1, NzMentionComponent_ng_template_1_li_2_span_1_Template, 2, 0, "span", 9);
        core.ɵɵtemplate(2, NzMentionComponent_ng_template_1_li_2_span_2_Template, 2, 1, "span", 9);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r586 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r586.nzLoading);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !ctx_r586.nzLoading);
    } }
    function NzMentionComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "ul", 1);
        core.ɵɵtemplate(1, NzMentionComponent_ng_template_1_li_1_Template, 4, 3, "li", 2);
        core.ɵɵtemplate(2, NzMentionComponent_ng_template_1_li_2_Template, 3, 2, "li", 3);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r584 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", ctx_r584.filteredSuggestions);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r584.filteredSuggestions.length === 0);
    } }
    var _c1 = ["*"];
    var NzMentionComponent = /** @class */ (function () {
        function NzMentionComponent(ngDocument, // tslint:disable-line:no-any
        changeDetectorRef, overlay, viewContainerRef, nzMentionService) {
            this.ngDocument = ngDocument;
            this.changeDetectorRef = changeDetectorRef;
            this.overlay = overlay;
            this.viewContainerRef = viewContainerRef;
            this.nzMentionService = nzMentionService;
            this.nzValueWith = function (value) { return value; }; // tslint:disable-line:no-any
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
            this.activeIndex = -1;
            this.previousValue = null;
        }
        Object.defineProperty(NzMentionComponent.prototype, "suggestionChild", {
            set: function (value) {
                if (value) {
                    this.suggestionTemplate = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzMentionComponent.prototype, "triggerNativeElement", {
            get: function () {
                return this.trigger.el.nativeElement;
            },
            enumerable: true,
            configurable: true
        });
        NzMentionComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.nzMentionService.triggerChanged().subscribe(function (trigger) {
                _this.trigger = trigger;
                _this.bindTriggerEvents();
                _this.closeDropdown();
                _this.overlayRef = null;
            });
        };
        NzMentionComponent.prototype.ngOnChanges = function (changes) {
            if (changes.hasOwnProperty('nzSuggestions')) {
                if (this.isOpen) {
                    this.previousValue = null;
                    this.activeIndex = -1;
                    this.resetDropdown(false);
                }
            }
        };
        NzMentionComponent.prototype.ngOnDestroy = function () {
            this.closeDropdown();
        };
        NzMentionComponent.prototype.closeDropdown = function () {
            if (this.overlayRef && this.overlayRef.hasAttached()) {
                this.overlayRef.detach();
                this.overlayBackdropClickSubscription.unsubscribe();
                this.isOpen = false;
                this.changeDetectorRef.markForCheck();
            }
        };
        NzMentionComponent.prototype.openDropdown = function () {
            this.attachOverlay();
            this.isOpen = true;
            this.changeDetectorRef.markForCheck();
        };
        NzMentionComponent.prototype.getMentions = function () {
            return this.trigger ? core$1.getMentions(this.trigger.value, this.nzPrefix) : [];
        };
        NzMentionComponent.prototype.selectSuggestion = function (suggestion) {
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
        NzMentionComponent.prototype.handleInput = function (event) {
            var target = event.target;
            this.trigger.onChange(target.value);
            this.trigger.value = target.value;
            this.resetDropdown();
        };
        NzMentionComponent.prototype.handleKeydown = function (event) {
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
        NzMentionComponent.prototype.handleClick = function () {
            this.resetDropdown();
        };
        NzMentionComponent.prototype.bindTriggerEvents = function () {
            var _this = this;
            this.trigger.onInput.subscribe(function (e) { return _this.handleInput(e); });
            this.trigger.onKeydown.subscribe(function (e) { return _this.handleKeydown(e); });
            this.trigger.onClick.subscribe(function () { return _this.handleClick(); });
        };
        NzMentionComponent.prototype.suggestionsFilter = function (value, emit) {
            var _this = this;
            var suggestions = value.substring(1);
            if (this.previousValue === value) {
                return;
            }
            this.previousValue = value;
            if (emit) {
                this.nzOnSearchChange.emit({
                    value: this.cursorMention.substring(1),
                    prefix: this.cursorMention[0]
                });
            }
            var searchValue = suggestions.toLowerCase();
            this.filteredSuggestions = this.nzSuggestions.filter(function (suggestion) {
                return _this.nzValueWith(suggestion)
                    .toLowerCase()
                    .includes(searchValue);
            });
        };
        NzMentionComponent.prototype.resetDropdown = function (emit) {
            if (emit === void 0) { emit = true; }
            this.resetCursorMention();
            if (typeof this.cursorMention !== 'string' || !this.canOpen()) {
                this.closeDropdown();
                return;
            }
            this.suggestionsFilter(this.cursorMention, emit);
            var activeIndex = this.filteredSuggestions.indexOf(this.cursorMention.substring(1));
            this.activeIndex = activeIndex >= 0 ? activeIndex : 0;
            this.openDropdown();
        };
        NzMentionComponent.prototype.setNextItemActive = function () {
            this.activeIndex = this.activeIndex + 1 <= this.filteredSuggestions.length - 1 ? this.activeIndex + 1 : 0;
            this.changeDetectorRef.markForCheck();
        };
        NzMentionComponent.prototype.setPreviousItemActive = function () {
            this.activeIndex = this.activeIndex - 1 < 0 ? this.filteredSuggestions.length - 1 : this.activeIndex - 1;
            this.changeDetectorRef.markForCheck();
        };
        NzMentionComponent.prototype.canOpen = function () {
            var element = this.triggerNativeElement;
            return !element.readOnly && !element.disabled;
        };
        NzMentionComponent.prototype.resetCursorMention = function () {
            var value = this.triggerNativeElement.value.replace(/[\r\n]/g, ' ') || '';
            var selectionStart = this.triggerNativeElement.selectionStart;
            var prefix = typeof this.nzPrefix === 'string' ? [this.nzPrefix] : this.nzPrefix;
            var i = prefix.length;
            while (i >= 0) {
                var startPos = value.lastIndexOf(prefix[i], selectionStart);
                var endPos = value.indexOf(' ', selectionStart) > -1 ? value.indexOf(' ', selectionStart) : value.length;
                var mention = value.substring(startPos, endPos);
                if ((startPos > 0 && value[startPos - 1] !== ' ') || startPos < 0 || mention.includes(prefix[i], 1) || mention.includes(' ')) {
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
        NzMentionComponent.prototype.updatePositions = function () {
            var coordinates = core$1.getCaretCoordinates(this.triggerNativeElement, this.cursorMentionStart);
            var top = coordinates.top -
                this.triggerNativeElement.getBoundingClientRect().height -
                this.triggerNativeElement.scrollTop +
                (this.nzPlacement === 'bottom' ? coordinates.height - 6 : -6);
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
        NzMentionComponent.prototype.subscribeOverlayBackdropClick = function () {
            var _this = this;
            return rxjs.merge(rxjs.fromEvent(this.ngDocument, 'click'), rxjs.fromEvent(this.ngDocument, 'touchend')).subscribe(function (event) {
                var clickTarget = event.target;
                if (_this.isOpen &&
                    clickTarget !== _this.trigger.el.nativeElement &&
                    !!_this.overlayRef &&
                    !_this.overlayRef.overlayElement.contains(clickTarget)) {
                    _this.closeDropdown();
                }
            });
        };
        NzMentionComponent.prototype.attachOverlay = function () {
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
        NzMentionComponent.prototype.getOverlayConfig = function () {
            return new overlay.OverlayConfig({
                positionStrategy: this.getOverlayPosition(),
                scrollStrategy: this.overlay.scrollStrategies.reposition()
            });
        };
        NzMentionComponent.prototype.getOverlayPosition = function () {
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
        /** @nocollapse */ NzMentionComponent.ɵfac = function NzMentionComponent_Factory(t) { return new (t || NzMentionComponent)(core.ɵɵdirectiveInject(common.DOCUMENT, 8), core.ɵɵdirectiveInject(core.ChangeDetectorRef), core.ɵɵdirectiveInject(overlay.Overlay), core.ɵɵdirectiveInject(core.ViewContainerRef), core.ɵɵdirectiveInject(NzMentionService)); };
        /** @nocollapse */ NzMentionComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzMentionComponent, selectors: [["nz-mention"]], contentQueries: function NzMentionComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
                core.ɵɵcontentQuery(dirIndex, NzMentionSuggestionDirective, true, core.TemplateRef);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.suggestionChild = _t.first);
            } }, viewQuery: function NzMentionComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵviewQuery(core.TemplateRef, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.suggestionsTemp = _t.first);
            } }, inputs: { nzValueWith: "nzValueWith", nzPrefix: "nzPrefix", nzLoading: "nzLoading", nzNotFoundContent: "nzNotFoundContent", nzPlacement: "nzPlacement", nzSuggestions: "nzSuggestions" }, outputs: { nzOnSelect: "nzOnSelect", nzOnSearchChange: "nzOnSearchChange" }, exportAs: ["nzMention"], features: [core.ɵɵProvidersFeature([NzMentionService]), core.ɵɵNgOnChangesFeature()], ngContentSelectors: _c1, decls: 3, vars: 0, consts: [["suggestions", ""], [1, "ant-mention-dropdown"], ["class", "ant-mention-dropdown-item", 3, "focus", "mousedown", "click", 4, "ngFor", "ngForOf"], ["class", "ant-mention-dropdown-notfound ant-mention-dropdown-item", 4, "ngIf"], [1, "ant-mention-dropdown-item", 3, "mousedown", "click"], [4, "ngIf", "ngIfElse"], ["defaultSuggestion", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-mention-dropdown-notfound", "ant-mention-dropdown-item"], [4, "ngIf"], ["nz-icon", "", "nzType", "loading"]], template: function NzMentionComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵprojection(0);
                core.ɵɵtemplate(1, NzMentionComponent_ng_template_1_Template, 3, 2, "ng-template", null, 0, core.ɵɵtemplateRefExtractor);
            } }, directives: [common.NgForOf, common.NgIf, common.NgTemplateOutlet, icon.NzIconDirective], styles: [".ant-mention-dropdown[_ngcontent-%COMP%] {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }"], changeDetection: 0 });
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzMentionComponent.prototype, "nzLoading", void 0);
        return NzMentionComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzMentionComponent, [{
            type: core.Component,
            args: [{
                    selector: 'nz-mention',
                    exportAs: 'nzMention',
                    templateUrl: './nz-mention.component.html',
                    preserveWhitespaces: false,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    providers: [NzMentionService],
                    styles: [
                        "\n      .ant-mention-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "
                    ]
                }]
        }], function () { return [{ type: undefined, decorators: [{
                    type: core.Optional
                }, {
                    type: core.Inject,
                    args: [common.DOCUMENT]
                }] }, { type: core.ChangeDetectorRef }, { type: overlay.Overlay }, { type: core.ViewContainerRef }, { type: NzMentionService }]; }, { nzValueWith: [{
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
            }], suggestionsTemp: [{
                type: core.ViewChild,
                args: [core.TemplateRef, { static: false }]
            }], suggestionChild: [{
                type: core.ContentChild,
                args: [NzMentionSuggestionDirective, { static: false, read: core.TemplateRef }]
            }] }); })();

    var COMPONENTS = [NzMentionComponent, NzMentionTriggerDirective, NzMentionSuggestionDirective];
    var NzMentionModule = /** @class */ (function () {
        function NzMentionModule() {
        }
        /** @nocollapse */ NzMentionModule.ɵmod = core.ɵɵdefineNgModule({ type: NzMentionModule });
        /** @nocollapse */ NzMentionModule.ɵinj = core.ɵɵdefineInjector({ factory: function NzMentionModule_Factory(t) { return new (t || NzMentionModule)(); }, imports: [[common.CommonModule, forms.FormsModule, overlay.OverlayModule, icon.NzIconModule]] });
        return NzMentionModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(NzMentionModule, { declarations: [NzMentionComponent, NzMentionTriggerDirective, NzMentionSuggestionDirective], imports: [common.CommonModule, forms.FormsModule, overlay.OverlayModule, icon.NzIconModule], exports: [NzMentionComponent, NzMentionTriggerDirective, NzMentionSuggestionDirective] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzMentionModule, [{
            type: core.NgModule,
            args: [{
                    imports: [common.CommonModule, forms.FormsModule, overlay.OverlayModule, icon.NzIconModule],
                    declarations: __spread(COMPONENTS),
                    exports: __spread(COMPONENTS)
                }]
        }], null, null); })();

    exports.NZ_MENTION_TRIGGER_ACCESSOR = NZ_MENTION_TRIGGER_ACCESSOR;
    exports.NzMentionComponent = NzMentionComponent;
    exports.NzMentionModule = NzMentionModule;
    exports.NzMentionService = NzMentionService;
    exports.NzMentionSuggestionDirective = NzMentionSuggestionDirective;
    exports.NzMentionTriggerDirective = NzMentionTriggerDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-mention.umd.js.map

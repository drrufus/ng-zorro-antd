(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/platform'), require('@angular/common'), require('@angular/core'), require('ng-zorro-antd/core'), require('ng-zorro-antd/i18n'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/input'), require('ng-zorro-antd/tooltip'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/typography', ['exports', '@angular/cdk/platform', '@angular/common', '@angular/core', 'ng-zorro-antd/core', 'ng-zorro-antd/i18n', 'ng-zorro-antd/icon', 'ng-zorro-antd/input', 'ng-zorro-antd/tooltip', 'rxjs', 'rxjs/operators'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].typography = {}), global.ng.cdk.platform, global.ng.common, global.ng.core, global['ng-zorro-antd'].core, global['ng-zorro-antd'].i18n, global['ng-zorro-antd'].icon, global['ng-zorro-antd'].input, global['ng-zorro-antd'].tooltip, global.rxjs, global.rxjs.operators));
}(this, (function (exports, platform, common, core, core$1, i18n, icon, input, tooltip, rxjs, operators) { 'use strict';

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
    var NzTextCopyComponent = /** @class */ (function () {
        function NzTextCopyComponent(host, cdr, copyToClipboard, i18n) {
            this.host = host;
            this.cdr = cdr;
            this.copyToClipboard = copyToClipboard;
            this.i18n = i18n;
            this.copied = false;
            // tslint:disable-next-line:no-any
            this.locale = {};
            this.nativeElement = this.host.nativeElement;
            this.destroy$ = new rxjs.Subject();
            this.textCopy = new core.EventEmitter();
        }
        NzTextCopyComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.i18n.localeChange.pipe(operators.takeUntil(this.destroy$)).subscribe(function () {
                _this.locale = _this.i18n.getLocaleData('Text');
                _this.cdr.markForCheck();
            });
        };
        NzTextCopyComponent.prototype.ngOnDestroy = function () {
            clearTimeout(this.copyId);
            this.destroy$.next();
            this.destroy$.complete();
        };
        NzTextCopyComponent.prototype.onClick = function () {
            var _this = this;
            if (this.copied) {
                return;
            }
            this.copied = true;
            this.cdr.detectChanges();
            var text = this.text;
            this.textCopy.emit(text);
            this.copyToClipboard
                .copy(text)
                .then(function () { return _this.onCopied(); })
                .catch(function () { return _this.onCopied(); });
        };
        NzTextCopyComponent.prototype.onCopied = function () {
            var _this = this;
            clearTimeout(this.copyId);
            this.copyId = setTimeout(function () {
                _this.copied = false;
                _this.cdr.detectChanges();
            }, 3000);
        };
        /** @nocollapse */ NzTextCopyComponent.ɵfac = function NzTextCopyComponent_Factory(t) { return new (t || NzTextCopyComponent)(core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(core.ChangeDetectorRef), core.ɵɵdirectiveInject(core$1.NzCopyToClipboardService), core.ɵɵdirectiveInject(i18n.NzI18nService)); };
        /** @nocollapse */ NzTextCopyComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzTextCopyComponent, selectors: [["nz-text-copy"]], inputs: { text: "text" }, outputs: { textCopy: "textCopy" }, exportAs: ["nzTextCopy"], decls: 2, vars: 3, consts: [["nz-tooltip", "", "nz-trans-button", "", 1, "ant-typography-copy", 3, "nzTitle", "click"], ["nz-icon", "", 3, "nzType"]], template: function NzTextCopyComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "button", 0);
                core.ɵɵlistener("click", function NzTextCopyComponent_Template_button_click_0_listener($event) { return ctx.onClick(); });
                core.ɵɵelement(1, "i", 1);
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵclassProp("ant-typography-copy-success", ctx.copied);
                core.ɵɵproperty("nzTitle", ctx.copied ? ctx.locale == null ? null : ctx.locale.copied : ctx.locale == null ? null : ctx.locale.copy);
                core.ɵɵadvance(1);
                core.ɵɵproperty("nzType", ctx.copied ? "check" : "copy");
            } }, directives: [core$1.NzTransButtonDirective, tooltip.NzTooltipDirective, icon.NzIconDirective], encapsulation: 2, changeDetection: 0 });
        return NzTextCopyComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzTextCopyComponent, [{
            type: core.Component,
            args: [{
                    selector: 'nz-text-copy',
                    exportAs: 'nzTextCopy',
                    templateUrl: './nz-text-copy.component.html',
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    preserveWhitespaces: false
                }]
        }], function () { return [{ type: core.ElementRef }, { type: core.ChangeDetectorRef }, { type: core$1.NzCopyToClipboardService }, { type: i18n.NzI18nService }]; }, { text: [{
                type: core.Input
            }], textCopy: [{
                type: core.Output
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var _c0 = ["textarea"];
    function NzTextEditComponent_button_0_Template(rf, ctx) { if (rf & 1) {
        var _r1743 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "button", 2);
        core.ɵɵlistener("click", function NzTextEditComponent_button_0_Template_button_click_0_listener($event) { core.ɵɵrestoreView(_r1743); var ctx_r1742 = core.ɵɵnextContext(); return ctx_r1742.onClick(); });
        core.ɵɵelement(1, "i", 3);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1740 = core.ɵɵnextContext();
        core.ɵɵproperty("nzTitle", ctx_r1740.locale == null ? null : ctx_r1740.locale.edit);
    } }
    function NzTextEditComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        var _r1746 = core.ɵɵgetCurrentView();
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "textarea", 4, 5);
        core.ɵɵlistener("input", function NzTextEditComponent_ng_container_1_Template_textarea_input_1_listener($event) { core.ɵɵrestoreView(_r1746); var ctx_r1745 = core.ɵɵnextContext(); return ctx_r1745.onInput($event); })("blur", function NzTextEditComponent_ng_container_1_Template_textarea_blur_1_listener($event) { core.ɵɵrestoreView(_r1746); var ctx_r1747 = core.ɵɵnextContext(); return ctx_r1747.confirm(); })("keydown.esc", function NzTextEditComponent_ng_container_1_Template_textarea_keydown_esc_1_listener($event) { core.ɵɵrestoreView(_r1746); var ctx_r1748 = core.ɵɵnextContext(); return ctx_r1748.onCancel(); })("keydown.enter", function NzTextEditComponent_ng_container_1_Template_textarea_keydown_enter_1_listener($event) { core.ɵɵrestoreView(_r1746); var ctx_r1749 = core.ɵɵnextContext(); return ctx_r1749.onEnter($event); });
        core.ɵɵtext(3, "  ");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(4, "button", 6);
        core.ɵɵlistener("click", function NzTextEditComponent_ng_container_1_Template_button_click_4_listener($event) { core.ɵɵrestoreView(_r1746); var ctx_r1750 = core.ɵɵnextContext(); return ctx_r1750.confirm(); });
        core.ɵɵelement(5, "i", 7);
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } }
    var NzTextEditComponent = /** @class */ (function () {
        function NzTextEditComponent(host, cdr, i18n) {
            this.host = host;
            this.cdr = cdr;
            this.i18n = i18n;
            this.editing = false;
            // tslint:disable-next-line:no-any
            this.locale = {};
            this.destroy$ = new rxjs.Subject();
            this.startEditing = new core.EventEmitter();
            this.endEditing = new core.EventEmitter();
            this.nativeElement = this.host.nativeElement;
        }
        NzTextEditComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.i18n.localeChange.pipe(operators.takeUntil(this.destroy$)).subscribe(function () {
                _this.locale = _this.i18n.getLocaleData('Text');
                _this.cdr.markForCheck();
            });
        };
        NzTextEditComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        NzTextEditComponent.prototype.onClick = function () {
            this.beforeText = this.text;
            this.currentText = this.beforeText;
            this.editing = true;
            this.startEditing.emit();
            this.focusAndSetValue();
        };
        NzTextEditComponent.prototype.confirm = function () {
            this.editing = false;
            this.endEditing.emit(this.currentText);
        };
        NzTextEditComponent.prototype.onInput = function (event) {
            var target = event.target;
            this.currentText = target.value;
        };
        NzTextEditComponent.prototype.onEnter = function (event) {
            event.stopPropagation();
            event.preventDefault();
            this.confirm();
        };
        NzTextEditComponent.prototype.onCancel = function () {
            this.currentText = this.beforeText;
            this.confirm();
        };
        NzTextEditComponent.prototype.focusAndSetValue = function () {
            var _this = this;
            setTimeout(function () {
                if (_this.textarea && _this.textarea.nativeElement) {
                    _this.textarea.nativeElement.focus();
                    _this.textarea.nativeElement.value = _this.currentText;
                    _this.autosizeDirective.resizeToFitContent();
                }
            });
        };
        /** @nocollapse */ NzTextEditComponent.ɵfac = function NzTextEditComponent_Factory(t) { return new (t || NzTextEditComponent)(core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(core.ChangeDetectorRef), core.ɵɵdirectiveInject(i18n.NzI18nService)); };
        /** @nocollapse */ NzTextEditComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzTextEditComponent, selectors: [["nz-text-edit"]], viewQuery: function NzTextEditComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵviewQuery(_c0, true);
                core.ɵɵviewQuery(input.NzAutosizeDirective, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.textarea = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.autosizeDirective = _t.first);
            } }, inputs: { text: "text" }, outputs: { startEditing: "startEditing", endEditing: "endEditing" }, exportAs: ["nzTextEdit"], decls: 2, vars: 2, consts: [["nz-tooltip", "", "nz-trans-button", "", "class", "ant-typography-edit", 3, "nzTitle", "click", 4, "ngIf"], [4, "ngIf"], ["nz-tooltip", "", "nz-trans-button", "", 1, "ant-typography-edit", 3, "nzTitle", "click"], ["nz-icon", "", "nzType", "edit"], ["nz-input", "", "nzAutosize", "", 3, "input", "blur", "keydown.esc", "keydown.enter"], ["textarea", ""], ["nz-trans-button", "", 1, "ant-typography-edit-content-confirm", 3, "click"], ["nz-icon", "", "nzType", "enter"]], template: function NzTextEditComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵtemplate(0, NzTextEditComponent_button_0_Template, 2, 1, "button", 0);
                core.ɵɵtemplate(1, NzTextEditComponent_ng_container_1_Template, 6, 0, "ng-container", 1);
            } if (rf & 2) {
                core.ɵɵproperty("ngIf", !ctx.editing);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.editing);
            } }, directives: [common.NgIf, core$1.NzTransButtonDirective, tooltip.NzTooltipDirective, icon.NzIconDirective, input.NzAutosizeDirective, input.NzInputDirective], encapsulation: 2, changeDetection: 0 });
        return NzTextEditComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzTextEditComponent, [{
            type: core.Component,
            args: [{
                    selector: 'nz-text-edit',
                    exportAs: 'nzTextEdit',
                    templateUrl: './nz-text-edit.component.html',
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    preserveWhitespaces: false
                }]
        }], function () { return [{ type: core.ElementRef }, { type: core.ChangeDetectorRef }, { type: i18n.NzI18nService }]; }, { text: [{
                type: core.Input
            }], startEditing: [{
                type: core.Output
            }], endEditing: [{
                type: core.Output
            }], textarea: [{
                type: core.ViewChild,
                args: ['textarea', { static: false }]
            }], autosizeDirective: [{
                type: core.ViewChild,
                args: [input.NzAutosizeDirective, { static: false }]
            }] }); })();

    var _c0$1 = ["ellipsisContainer"];
    var _c1 = ["expandable"];
    var _c2 = ["contentTemplate"];
    function NzTypographyComponent_ng_template_0_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵprojection(0, 0, ["*ngIf", "!content"]);
    } }
    function NzTypographyComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtemplate(0, NzTypographyComponent_ng_template_0_0_Template, 1, 0, undefined, 1);
        core.ɵɵtext(1);
    } if (rf & 2) {
        var content_r1756 = ctx.content;
        core.ɵɵproperty("ngIf", !content_r1756);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", content_r1756, "\n");
    } }
    function NzTypographyComponent_ng_container_2_ng_container_1_ng_template_1_Template(rf, ctx) { }
    var _c3 = function (a0) { return { content: a0 }; };
    function NzTypographyComponent_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, NzTypographyComponent_ng_container_2_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 4);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r1758 = core.ɵɵnextContext(2);
        var _r1751 = core.ɵɵreference(1);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", _r1751)("ngTemplateOutletContext", core.ɵɵpureFunction1(2, _c3, ctx_r1758.nzContent));
    } }
    function NzTypographyComponent_ng_container_2_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtext(1);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r1762 = core.ɵɵnextContext(3);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(ctx_r1762.ellipsisStr);
    } }
    function NzTypographyComponent_ng_container_2_ng_container_2_a_4_Template(rf, ctx) { if (rf & 1) {
        var _r1766 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "a", 7, 8);
        core.ɵɵlistener("click", function NzTypographyComponent_ng_container_2_ng_container_2_a_4_Template_a_click_0_listener($event) { core.ɵɵrestoreView(_r1766); var ctx_r1765 = core.ɵɵnextContext(3); return ctx_r1765.onExpand(); });
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1763 = core.ɵɵnextContext(3);
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(ctx_r1763.locale == null ? null : ctx_r1763.locale.expand);
    } }
    function NzTypographyComponent_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelement(1, "span", null, 5);
        core.ɵɵtemplate(3, NzTypographyComponent_ng_container_2_ng_container_2_ng_container_3_Template, 2, 1, "ng-container", 1);
        core.ɵɵtemplate(4, NzTypographyComponent_ng_container_2_ng_container_2_a_4_Template, 3, 1, "a", 6);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r1759 = core.ɵɵnextContext(2);
        core.ɵɵadvance(3);
        core.ɵɵproperty("ngIf", ctx_r1759.isEllipsis);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r1759.nzExpandable && ctx_r1759.isEllipsis);
    } }
    function NzTypographyComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, NzTypographyComponent_ng_container_2_ng_container_1_Template, 2, 4, "ng-container", 1);
        core.ɵɵtemplate(2, NzTypographyComponent_ng_container_2_ng_container_2_Template, 5, 2, "ng-container", 1);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r1753 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r1753.expanded || !ctx_r1753.nzExpandable && ctx_r1753.nzEllipsisRows === 1 || ctx_r1753.canCssEllipsis);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r1753.nzEllipsis && !ctx_r1753.expanded && (ctx_r1753.nzEllipsisRows > 1 || ctx_r1753.nzExpandable));
    } }
    function NzTypographyComponent_nz_text_edit_3_Template(rf, ctx) { if (rf & 1) {
        var _r1768 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "nz-text-edit", 9);
        core.ɵɵlistener("endEditing", function NzTypographyComponent_nz_text_edit_3_Template_nz_text_edit_endEditing_0_listener($event) { core.ɵɵrestoreView(_r1768); var ctx_r1767 = core.ɵɵnextContext(); return ctx_r1767.onEndEditing($event); })("startEditing", function NzTypographyComponent_nz_text_edit_3_Template_nz_text_edit_startEditing_0_listener($event) { core.ɵɵrestoreView(_r1768); var ctx_r1769 = core.ɵɵnextContext(); return ctx_r1769.onStartEditing(); });
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1754 = core.ɵɵnextContext();
        core.ɵɵproperty("text", ctx_r1754.nzContent);
    } }
    function NzTypographyComponent_nz_text_copy_4_Template(rf, ctx) { if (rf & 1) {
        var _r1771 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "nz-text-copy", 10);
        core.ɵɵlistener("textCopy", function NzTypographyComponent_nz_text_copy_4_Template_nz_text_copy_textCopy_0_listener($event) { core.ɵɵrestoreView(_r1771); var ctx_r1770 = core.ɵɵnextContext(); return ctx_r1770.onTextCopy($event); });
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1755 = core.ɵɵnextContext();
        core.ɵɵproperty("text", ctx_r1755.copyText);
    } }
    var _c4 = ["*"];
    var NZ_CONFIG_COMPONENT_NAME = 'typography';
    var NzTypographyComponent = /** @class */ (function () {
        function NzTypographyComponent(nzConfigService, host, cdr, viewContainerRef, renderer, platform, i18n, nzDomEventService) {
            this.nzConfigService = nzConfigService;
            this.host = host;
            this.cdr = cdr;
            this.viewContainerRef = viewContainerRef;
            this.renderer = renderer;
            this.platform = platform;
            this.i18n = i18n;
            this.nzDomEventService = nzDomEventService;
            this.nzCopyable = false;
            this.nzEditable = false;
            this.nzDisabled = false;
            this.nzExpandable = false;
            this.nzEllipsis = false;
            this.nzContentChange = new core.EventEmitter();
            this.nzCopy = new core.EventEmitter();
            this.nzExpandChange = new core.EventEmitter();
            // tslint:disable-next-line:no-any
            this.locale = {};
            this.editing = false;
            this.cssEllipsis = false;
            this.isEllipsis = false;
            this.expanded = false;
            this.ellipsisStr = '...';
            this.viewInit = false;
            this.rfaId = -1;
            this.destroy$ = new rxjs.Subject();
            this.windowResizeSubscription = rxjs.Subscription.EMPTY;
        }
        Object.defineProperty(NzTypographyComponent.prototype, "canCssEllipsis", {
            get: function () {
                return this.nzEllipsis && this.cssEllipsis && !this.expanded;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTypographyComponent.prototype, "copyText", {
            get: function () {
                return typeof this.nzCopyText === 'string' ? this.nzCopyText : this.nzContent;
            },
            enumerable: true,
            configurable: true
        });
        NzTypographyComponent.prototype.onTextCopy = function (text) {
            this.nzCopy.emit(text);
        };
        NzTypographyComponent.prototype.onStartEditing = function () {
            this.editing = true;
        };
        NzTypographyComponent.prototype.onEndEditing = function (text) {
            this.editing = false;
            this.nzContentChange.emit(text);
            if (this.nzContent === text) {
                this.renderOnNextFrame();
            }
        };
        NzTypographyComponent.prototype.onExpand = function () {
            this.expanded = true;
            this.nzExpandChange.emit();
        };
        NzTypographyComponent.prototype.canUseCSSEllipsis = function () {
            if (this.nzEditable || this.nzCopyable || this.nzExpandable) {
                return false;
            }
            if (this.nzEllipsisRows === 1) {
                return core$1.isStyleSupport('textOverflow');
            }
            else {
                return core$1.isStyleSupport('webkitLineClamp');
            }
        };
        NzTypographyComponent.prototype.renderOnNextFrame = function () {
            var _this = this;
            core$1.cancelRequestAnimationFrame(this.rfaId);
            if (!this.viewInit || !this.nzEllipsis || this.nzEllipsisRows < 0 || this.expanded || !this.platform.isBrowser) {
                return;
            }
            this.rfaId = core$1.reqAnimFrame(function () {
                _this.syncEllipsis();
            });
        };
        NzTypographyComponent.prototype.getOriginContentViewRef = function () {
            var _this = this;
            var viewRef = this.viewContainerRef.createEmbeddedView(this.contentTemplate, {
                content: this.nzContent
            });
            viewRef.detectChanges();
            return {
                viewRef: viewRef,
                removeView: function () {
                    _this.viewContainerRef.remove(_this.viewContainerRef.indexOf(viewRef));
                }
            };
        };
        NzTypographyComponent.prototype.syncEllipsis = function () {
            var _this = this;
            if (this.cssEllipsis) {
                return;
            }
            var _a = this.getOriginContentViewRef(), viewRef = _a.viewRef, removeView = _a.removeView;
            var fixedNodes = [this.textCopyRef, this.textEditRef, this.expandableBtn].filter(function (e) { return e && e.nativeElement; }).map(function (e) { return e.nativeElement; });
            var _b = core$1.measure(this.host.nativeElement, this.nzEllipsisRows, viewRef.rootNodes, fixedNodes, this.ellipsisStr), contentNodes = _b.contentNodes, text = _b.text, ellipsis = _b.ellipsis;
            removeView();
            this.ellipsisText = text;
            this.isEllipsis = ellipsis;
            var ellipsisContainerNativeElement = this.ellipsisContainer.nativeElement;
            while (ellipsisContainerNativeElement.firstChild) {
                this.renderer.removeChild(ellipsisContainerNativeElement, ellipsisContainerNativeElement.firstChild);
            }
            contentNodes.forEach(function (n) {
                _this.renderer.appendChild(ellipsisContainerNativeElement, n.cloneNode(true));
            });
            this.cdr.markForCheck();
        };
        NzTypographyComponent.prototype.renderAndSubscribeWindowResize = function () {
            var _this = this;
            if (this.platform.isBrowser) {
                this.windowResizeSubscription.unsubscribe();
                this.cssEllipsis = this.canUseCSSEllipsis();
                this.renderOnNextFrame();
                this.windowResizeSubscription = this.nzDomEventService
                    .registerResizeListener()
                    .pipe(operators.takeUntil(this.destroy$), operators.finalize(function () { return _this.nzDomEventService.unregisterResizeListener(); }))
                    .subscribe(function () { return _this.renderOnNextFrame(); });
            }
        };
        NzTypographyComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.i18n.localeChange.pipe(operators.takeUntil(this.destroy$)).subscribe(function () {
                _this.locale = _this.i18n.getLocaleData('Text');
                _this.cdr.markForCheck();
            });
        };
        NzTypographyComponent.prototype.ngAfterViewInit = function () {
            this.viewInit = true;
            this.renderAndSubscribeWindowResize();
        };
        NzTypographyComponent.prototype.ngOnChanges = function (changes) {
            var nzCopyable = changes.nzCopyable, nzEditable = changes.nzEditable, nzExpandable = changes.nzExpandable, nzEllipsis = changes.nzEllipsis, nzContent = changes.nzContent, nzEllipsisRows = changes.nzEllipsisRows;
            if (nzCopyable || nzEditable || nzExpandable || nzEllipsis || nzContent || nzEllipsisRows) {
                if (this.nzEllipsis) {
                    if (this.expanded) {
                        this.windowResizeSubscription.unsubscribe();
                    }
                    else {
                        this.renderAndSubscribeWindowResize();
                    }
                }
            }
        };
        NzTypographyComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
            this.windowResizeSubscription.unsubscribe();
        };
        /** @nocollapse */ NzTypographyComponent.ɵfac = function NzTypographyComponent_Factory(t) { return new (t || NzTypographyComponent)(core.ɵɵdirectiveInject(core$1.NzConfigService), core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(core.ChangeDetectorRef), core.ɵɵdirectiveInject(core.ViewContainerRef), core.ɵɵdirectiveInject(core.Renderer2), core.ɵɵdirectiveInject(platform.Platform), core.ɵɵdirectiveInject(i18n.NzI18nService), core.ɵɵdirectiveInject(core$1.NzDomEventService)); };
        /** @nocollapse */ NzTypographyComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzTypographyComponent, selectors: [["nz-typography"], ["", "nz-typography", ""], ["p", "nz-paragraph", ""], ["span", "nz-text", ""], ["h1", "nz-title", ""], ["h2", "nz-title", ""], ["h3", "nz-title", ""], ["h4", "nz-title", ""]], viewQuery: function NzTypographyComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵviewQuery(NzTextEditComponent, true);
                core.ɵɵviewQuery(NzTextCopyComponent, true);
                core.ɵɵviewQuery(_c0$1, true);
                core.ɵɵviewQuery(_c1, true);
                core.ɵɵviewQuery(_c2, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.textEditRef = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.textCopyRef = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.ellipsisContainer = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.expandableBtn = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.contentTemplate = _t.first);
            } }, hostBindings: function NzTypographyComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
                core.ɵɵallocHostVars(10);
            } if (rf & 2) {
                core.ɵɵstyleProp("-webkit-line-clamp", ctx.canCssEllipsis && ctx.nzEllipsisRows > 1 ? ctx.nzEllipsisRows : null);
                core.ɵɵclassProp("ant-typography", !ctx.editing)("ant-typography-edit-content", ctx.editing)("ant-typography-secondary", ctx.nzType === "secondary")("ant-typography-warning", ctx.nzType === "warning")("ant-typography-danger", ctx.nzType === "danger")("ant-typography-disabled", ctx.nzDisabled)("ant-typography-ellipsis", ctx.nzEllipsis && !ctx.expanded)("ant-typography-ellipsis-single-line", ctx.canCssEllipsis && ctx.nzEllipsisRows === 1)("ant-typography-ellipsis-multiple-line", ctx.canCssEllipsis && ctx.nzEllipsisRows > 1);
            } }, inputs: { nzCopyable: "nzCopyable", nzEditable: "nzEditable", nzDisabled: "nzDisabled", nzExpandable: "nzExpandable", nzEllipsis: "nzEllipsis", nzContent: "nzContent", nzEllipsisRows: "nzEllipsisRows", nzType: "nzType", nzCopyText: "nzCopyText" }, outputs: { nzContentChange: "nzContentChange", nzCopy: "nzCopy", nzExpandChange: "nzExpandChange" }, exportAs: ["nzTypography"], features: [core.ɵɵNgOnChangesFeature()], ngContentSelectors: _c4, decls: 5, vars: 3, consts: [["contentTemplate", ""], [4, "ngIf"], [3, "text", "endEditing", "startEditing", 4, "ngIf"], [3, "text", "textCopy", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["ellipsisContainer", ""], ["class", "ant-typography-expand", 3, "click", 4, "ngIf"], [1, "ant-typography-expand", 3, "click"], ["expandable", ""], [3, "text", "endEditing", "startEditing"], [3, "text", "textCopy"]], template: function NzTypographyComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵtemplate(0, NzTypographyComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, core.ɵɵtemplateRefExtractor);
                core.ɵɵtemplate(2, NzTypographyComponent_ng_container_2_Template, 3, 2, "ng-container", 1);
                core.ɵɵtemplate(3, NzTypographyComponent_nz_text_edit_3_Template, 1, 1, "nz-text-edit", 2);
                core.ɵɵtemplate(4, NzTypographyComponent_nz_text_copy_4_Template, 1, 1, "nz-text-copy", 3);
            } if (rf & 2) {
                core.ɵɵadvance(2);
                core.ɵɵproperty("ngIf", !ctx.editing);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.nzEditable);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.nzCopyable && !ctx.editing);
            } }, directives: [common.NgIf, common.NgTemplateOutlet, NzTextEditComponent, NzTextCopyComponent], encapsulation: 2, changeDetection: 0 });
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTypographyComponent.prototype, "nzCopyable", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTypographyComponent.prototype, "nzEditable", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTypographyComponent.prototype, "nzDisabled", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTypographyComponent.prototype, "nzExpandable", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTypographyComponent.prototype, "nzEllipsis", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, 1), core$1.InputNumber(),
            __metadata("design:type", Number)
        ], NzTypographyComponent.prototype, "nzEllipsisRows", void 0);
        return NzTypographyComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzTypographyComponent, [{
            type: core.Component,
            args: [{
                    selector: "\n  nz-typography,\n  [nz-typography],\n  p[nz-paragraph],\n  span[nz-text],\n  h1[nz-title], h2[nz-title], h3[nz-title], h4[nz-title]\n  ",
                    exportAs: 'nzTypography',
                    templateUrl: './nz-typography.component.html',
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    host: {
                        '[class.ant-typography]': '!editing',
                        '[class.ant-typography-edit-content]': 'editing',
                        '[class.ant-typography-secondary]': 'nzType === "secondary"',
                        '[class.ant-typography-warning]': 'nzType === "warning"',
                        '[class.ant-typography-danger]': 'nzType === "danger"',
                        '[class.ant-typography-disabled]': 'nzDisabled',
                        '[class.ant-typography-ellipsis]': 'nzEllipsis && !expanded',
                        '[class.ant-typography-ellipsis-single-line]': 'canCssEllipsis && nzEllipsisRows === 1',
                        '[class.ant-typography-ellipsis-multiple-line]': 'canCssEllipsis && nzEllipsisRows > 1',
                        '[style.-webkit-line-clamp]': '(canCssEllipsis && nzEllipsisRows > 1) ? nzEllipsisRows : null'
                    }
                }]
        }], function () { return [{ type: core$1.NzConfigService }, { type: core.ElementRef }, { type: core.ChangeDetectorRef }, { type: core.ViewContainerRef }, { type: core.Renderer2 }, { type: platform.Platform }, { type: i18n.NzI18nService }, { type: core$1.NzDomEventService }]; }, { nzCopyable: [{
                type: core.Input
            }], nzEditable: [{
                type: core.Input
            }], nzDisabled: [{
                type: core.Input
            }], nzExpandable: [{
                type: core.Input
            }], nzEllipsis: [{
                type: core.Input
            }], nzContent: [{
                type: core.Input
            }], nzEllipsisRows: [{
                type: core.Input
            }], nzType: [{
                type: core.Input
            }], nzCopyText: [{
                type: core.Input
            }], nzContentChange: [{
                type: core.Output
            }], nzCopy: [{
                type: core.Output
            }], nzExpandChange: [{
                type: core.Output
            }], textEditRef: [{
                type: core.ViewChild,
                args: [NzTextEditComponent, { static: false }]
            }], textCopyRef: [{
                type: core.ViewChild,
                args: [NzTextCopyComponent, { static: false }]
            }], ellipsisContainer: [{
                type: core.ViewChild,
                args: ['ellipsisContainer', { static: false }]
            }], expandableBtn: [{
                type: core.ViewChild,
                args: ['expandable', { static: false }]
            }], contentTemplate: [{
                type: core.ViewChild,
                args: ['contentTemplate', { static: false }]
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzTypographyModule = /** @class */ (function () {
        function NzTypographyModule() {
        }
        /** @nocollapse */ NzTypographyModule.ɵmod = core.ɵɵdefineNgModule({ type: NzTypographyModule });
        /** @nocollapse */ NzTypographyModule.ɵinj = core.ɵɵdefineInjector({ factory: function NzTypographyModule_Factory(t) { return new (t || NzTypographyModule)(); }, imports: [[common.CommonModule, icon.NzIconModule, tooltip.NzToolTipModule, input.NzInputModule, i18n.NzI18nModule, core$1.NzTransButtonModule, core$1.NzCopyToClipboardServiceModule],
                platform.PlatformModule] });
        return NzTypographyModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(NzTypographyModule, { declarations: [NzTypographyComponent, NzTextCopyComponent, NzTextEditComponent], imports: [common.CommonModule, icon.NzIconModule, tooltip.NzToolTipModule, input.NzInputModule, i18n.NzI18nModule, core$1.NzTransButtonModule, core$1.NzCopyToClipboardServiceModule], exports: [NzTypographyComponent, NzTextCopyComponent, NzTextEditComponent, platform.PlatformModule] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzTypographyModule, [{
            type: core.NgModule,
            args: [{
                    imports: [common.CommonModule, icon.NzIconModule, tooltip.NzToolTipModule, input.NzInputModule, i18n.NzI18nModule, core$1.NzTransButtonModule, core$1.NzCopyToClipboardServiceModule],
                    exports: [NzTypographyComponent, NzTextCopyComponent, NzTextEditComponent, platform.PlatformModule],
                    declarations: [NzTypographyComponent, NzTextCopyComponent, NzTextEditComponent]
                }]
        }], null, null); })();

    exports.NzTextCopyComponent = NzTextCopyComponent;
    exports.NzTextEditComponent = NzTextEditComponent;
    exports.NzTypographyComponent = NzTypographyComponent;
    exports.NzTypographyModule = NzTypographyModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-typography.umd.js.map

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/cdk/a11y'), require('@angular/forms'), require('rxjs'), require('ng-zorro-antd/core'), require('rxjs/operators'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/radio', ['exports', '@angular/core', '@angular/cdk/a11y', '@angular/forms', 'rxjs', 'ng-zorro-antd/core', 'rxjs/operators', '@angular/common'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].radio = {}), global.ng.core, global.ng.cdk.a11y, global.ng.forms, global.rxjs, global['ng-zorro-antd'].core, global.rxjs.operators, global.ng.common));
}(this, (function (exports, core, a11y, forms, rxjs, core$1, operators, common) { 'use strict';

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

    var _c0 = ["inputElement"];
    var _c1 = ["nz-radio", ""];
    var _c2 = ["*"];
    var NzRadioComponent = /** @class */ (function () {
        /* tslint:disable-next-line:no-any */
        function NzRadioComponent(elementRef, renderer, cdr, focusMonitor) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.cdr = cdr;
            this.focusMonitor = focusMonitor;
            this.select$ = new rxjs.Subject();
            this.touched$ = new rxjs.Subject();
            this.checked = false;
            this.isNgModel = false;
            this.onChange = function () { return null; };
            this.onTouched = function () { return null; };
            this.nzDisabled = false;
            this.nzAutoFocus = false;
            this.renderer.addClass(elementRef.nativeElement, 'ant-radio-wrapper');
        }
        NzRadioComponent.prototype.updateAutoFocus = function () {
            if (this.inputElement) {
                if (this.nzAutoFocus) {
                    this.renderer.setAttribute(this.inputElement.nativeElement, 'autofocus', 'autofocus');
                }
                else {
                    this.renderer.removeAttribute(this.inputElement.nativeElement, 'autofocus');
                }
            }
        };
        NzRadioComponent.prototype.onClick = function (event) {
            // Prevent label click triggered twice.
            event.stopPropagation();
            event.preventDefault();
            if (!this.nzDisabled && !this.checked) {
                this.select$.next(this);
                if (this.isNgModel) {
                    this.checked = true;
                    this.onChange(true);
                }
            }
        };
        NzRadioComponent.prototype.focus = function () {
            this.focusMonitor.focusVia(this.inputElement, 'keyboard');
        };
        NzRadioComponent.prototype.blur = function () {
            this.inputElement.nativeElement.blur();
        };
        NzRadioComponent.prototype.markForCheck = function () {
            this.cdr.markForCheck();
        };
        NzRadioComponent.prototype.setDisabledState = function (isDisabled) {
            this.nzDisabled = isDisabled;
            this.cdr.markForCheck();
        };
        NzRadioComponent.prototype.writeValue = function (value) {
            this.checked = value;
            this.cdr.markForCheck();
        };
        NzRadioComponent.prototype.registerOnChange = function (fn) {
            this.isNgModel = true;
            this.onChange = fn;
        };
        NzRadioComponent.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        NzRadioComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.focusMonitor.monitor(this.elementRef, true).subscribe(function (focusOrigin) {
                if (!focusOrigin) {
                    Promise.resolve().then(function () { return _this.onTouched(); });
                    _this.touched$.next();
                }
            });
            this.updateAutoFocus();
        };
        NzRadioComponent.prototype.ngOnChanges = function (changes) {
            if (changes.nzAutoFocus) {
                this.updateAutoFocus();
            }
        };
        NzRadioComponent.prototype.ngOnDestroy = function () {
            this.focusMonitor.stopMonitoring(this.elementRef);
        };
        /** @nocollapse */ NzRadioComponent.ɵfac = function NzRadioComponent_Factory(t) { return new (t || NzRadioComponent)(core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(core.Renderer2), core.ɵɵdirectiveInject(core.ChangeDetectorRef), core.ɵɵdirectiveInject(a11y.FocusMonitor)); };
        /** @nocollapse */ NzRadioComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzRadioComponent, selectors: [["", "nz-radio", ""]], viewQuery: function NzRadioComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵviewQuery(_c0, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
            } }, hostBindings: function NzRadioComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
                core.ɵɵallocHostVars(2);
                core.ɵɵlistener("click", function NzRadioComponent_click_HostBindingHandler($event) { return ctx.onClick($event); });
            } if (rf & 2) {
                core.ɵɵclassProp("ant-radio-wrapper-checked", ctx.checked)("ant-radio-wrapper-disabled", ctx.nzDisabled);
            } }, inputs: { nzValue: "nzValue", nzDisabled: "nzDisabled", nzAutoFocus: "nzAutoFocus" }, exportAs: ["nzRadio"], features: [core.ɵɵProvidersFeature([
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef((function () { return NzRadioComponent; })),
                        multi: true
                    }
                ]), core.ɵɵNgOnChangesFeature()], attrs: _c1, ngContentSelectors: _c2, decls: 6, vars: 5, consts: [[1, "ant-radio"], ["type", "radio", 1, "ant-radio-input", 3, "disabled", "checked"], ["inputElement", ""], [1, "ant-radio-inner"]], template: function NzRadioComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵelementStart(0, "span", 0);
                core.ɵɵelement(1, "input", 1, 2);
                core.ɵɵelement(3, "span", 3);
                core.ɵɵelementEnd();
                core.ɵɵelementStart(4, "span");
                core.ɵɵprojection(5);
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵclassProp("ant-radio-checked", ctx.checked)("ant-radio-disabled", ctx.nzDisabled);
                core.ɵɵadvance(1);
                core.ɵɵproperty("disabled", ctx.nzDisabled)("checked", ctx.checked);
                core.ɵɵattribute("name", ctx.name);
            } }, encapsulation: 2, changeDetection: 0 });
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzRadioComponent.prototype, "nzDisabled", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzRadioComponent.prototype, "nzAutoFocus", void 0);
        return NzRadioComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzRadioComponent, [{
            type: core.Component,
            args: [{
                    selector: '[nz-radio]',
                    exportAs: 'nzRadio',
                    preserveWhitespaces: false,
                    templateUrl: './nz-radio.component.html',
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: forms.NG_VALUE_ACCESSOR,
                            useExisting: core.forwardRef((function () { return NzRadioComponent; })),
                            multi: true
                        }
                    ],
                    host: {
                        '[class.ant-radio-wrapper-checked]': 'checked',
                        '[class.ant-radio-wrapper-disabled]': 'nzDisabled'
                    }
                }]
        }], function () { return [{ type: core.ElementRef }, { type: core.Renderer2 }, { type: core.ChangeDetectorRef }, { type: a11y.FocusMonitor }]; }, { inputElement: [{
                type: core.ViewChild,
                args: ['inputElement', { static: false }]
            }], nzValue: [{
                type: core.Input
            }], nzDisabled: [{
                type: core.Input
            }], nzAutoFocus: [{
                type: core.Input
            }], onClick: [{
                type: core.HostListener,
                args: ['click', ['$event']]
            }] }); })();

    var _c0$1 = ["nz-radio-button", ""];
    var _c1$1 = ["*"];
    var NzRadioButtonComponent = /** @class */ (function (_super) {
        __extends(NzRadioButtonComponent, _super);
        /* tslint:disable-next-line:no-any */
        function NzRadioButtonComponent(elementRef, renderer, cdr, focusMonitor) {
            var _this = _super.call(this, elementRef, renderer, cdr, focusMonitor) || this;
            renderer.removeClass(elementRef.nativeElement, 'ant-radio-wrapper');
            renderer.addClass(elementRef.nativeElement, 'ant-radio-button-wrapper');
            return _this;
        }
        /** @nocollapse */ NzRadioButtonComponent.ɵfac = function NzRadioButtonComponent_Factory(t) { return new (t || NzRadioButtonComponent)(core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(core.Renderer2), core.ɵɵdirectiveInject(core.ChangeDetectorRef), core.ɵɵdirectiveInject(a11y.FocusMonitor)); };
        /** @nocollapse */ NzRadioButtonComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzRadioButtonComponent, selectors: [["", "nz-radio-button", ""]], hostBindings: function NzRadioButtonComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
                core.ɵɵallocHostVars(2);
            } if (rf & 2) {
                core.ɵɵclassProp("ant-radio-button-wrapper-checked", ctx.checked)("ant-radio-button-wrapper-disabled", ctx.nzDisabled);
            } }, exportAs: ["nzRadioButton"], features: [core.ɵɵProvidersFeature([
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef((function () { return NzRadioComponent; })),
                        multi: true
                    },
                    {
                        provide: NzRadioComponent,
                        useExisting: core.forwardRef((function () { return NzRadioButtonComponent; }))
                    }
                ]), core.ɵɵInheritDefinitionFeature], attrs: _c0$1, ngContentSelectors: _c1$1, decls: 6, vars: 5, consts: [[1, "ant-radio-button"], ["type", "radio", 1, "ant-radio-button-input", 3, "disabled", "checked"], ["inputElement", ""], [1, "ant-radio-button-inner"]], template: function NzRadioButtonComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵelementStart(0, "span", 0);
                core.ɵɵelement(1, "input", 1, 2);
                core.ɵɵelement(3, "span", 3);
                core.ɵɵelementEnd();
                core.ɵɵelementStart(4, "span");
                core.ɵɵprojection(5);
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵclassProp("ant-radio-button-checked", ctx.checked)("ant-radio-button-disabled", ctx.nzDisabled);
                core.ɵɵadvance(1);
                core.ɵɵproperty("disabled", ctx.nzDisabled)("checked", ctx.checked);
                core.ɵɵattribute("name", ctx.name);
            } }, encapsulation: 2, changeDetection: 0 });
        return NzRadioButtonComponent;
    }(NzRadioComponent));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzRadioButtonComponent, [{
            type: core.Component,
            args: [{
                    selector: '[nz-radio-button]',
                    exportAs: 'nzRadioButton',
                    providers: [
                        {
                            provide: forms.NG_VALUE_ACCESSOR,
                            useExisting: core.forwardRef((function () { return NzRadioComponent; })),
                            multi: true
                        },
                        {
                            provide: NzRadioComponent,
                            useExisting: core.forwardRef((function () { return NzRadioButtonComponent; }))
                        }
                    ],
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    templateUrl: './nz-radio-button.component.html',
                    host: {
                        '[class.ant-radio-button-wrapper-checked]': 'checked',
                        '[class.ant-radio-button-wrapper-disabled]': 'nzDisabled'
                    }
                }]
        }], function () { return [{ type: core.ElementRef }, { type: core.Renderer2 }, { type: core.ChangeDetectorRef }, { type: a11y.FocusMonitor }]; }, null); })();

    var _c0$2 = ["*"];
    var NzRadioGroupComponent = /** @class */ (function () {
        function NzRadioGroupComponent(cdr, renderer, elementRef) {
            this.cdr = cdr;
            this.destroy$ = new rxjs.Subject();
            this.onChange = function () { return null; };
            this.onTouched = function () { return null; };
            this.nzButtonStyle = 'outline';
            this.nzSize = 'default';
            renderer.addClass(elementRef.nativeElement, 'ant-radio-group');
        }
        NzRadioGroupComponent.prototype.updateChildrenStatus = function () {
            var _this = this;
            if (this.radios) {
                Promise.resolve().then(function () {
                    _this.radios.forEach(function (radio) {
                        radio.checked = radio.nzValue === _this.value;
                        if (core$1.isNotNil(_this.nzDisabled)) {
                            radio.nzDisabled = _this.nzDisabled;
                        }
                        if (_this.nzName) {
                            radio.name = _this.nzName;
                        }
                        radio.markForCheck();
                    });
                });
            }
        };
        NzRadioGroupComponent.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.radios.changes.pipe(operators.startWith(null), operators.takeUntil(this.destroy$)).subscribe(function () {
                _this.updateChildrenStatus();
                if (_this.selectSubscription) {
                    _this.selectSubscription.unsubscribe();
                }
                _this.selectSubscription = rxjs.merge.apply(void 0, __spread(_this.radios.map(function (radio) { return radio.select$; }))).pipe(operators.takeUntil(_this.destroy$))
                    .subscribe(function (radio) {
                    if (_this.value !== radio.nzValue) {
                        _this.value = radio.nzValue;
                        _this.updateChildrenStatus();
                        _this.onChange(_this.value);
                    }
                });
                if (_this.touchedSubscription) {
                    _this.touchedSubscription.unsubscribe();
                }
                _this.touchedSubscription = rxjs.merge.apply(void 0, __spread(_this.radios.map(function (radio) { return radio.touched$; }))).pipe(operators.takeUntil(_this.destroy$))
                    .subscribe(function () {
                    Promise.resolve().then(function () { return _this.onTouched(); });
                });
            });
        };
        NzRadioGroupComponent.prototype.ngOnChanges = function (changes) {
            if (changes.nzDisabled || changes.nzName) {
                this.updateChildrenStatus();
            }
        };
        NzRadioGroupComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        /* tslint:disable-next-line:no-any */
        NzRadioGroupComponent.prototype.writeValue = function (value) {
            this.value = value;
            this.updateChildrenStatus();
            this.cdr.markForCheck();
        };
        NzRadioGroupComponent.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        NzRadioGroupComponent.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        NzRadioGroupComponent.prototype.setDisabledState = function (isDisabled) {
            this.nzDisabled = isDisabled;
            this.cdr.markForCheck();
        };
        /** @nocollapse */ NzRadioGroupComponent.ɵfac = function NzRadioGroupComponent_Factory(t) { return new (t || NzRadioGroupComponent)(core.ɵɵdirectiveInject(core.ChangeDetectorRef), core.ɵɵdirectiveInject(core.Renderer2), core.ɵɵdirectiveInject(core.ElementRef)); };
        /** @nocollapse */ NzRadioGroupComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzRadioGroupComponent, selectors: [["nz-radio-group"]], contentQueries: function NzRadioGroupComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
                core.ɵɵcontentQuery(dirIndex, NzRadioComponent, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.radios = _t);
            } }, hostBindings: function NzRadioGroupComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
                core.ɵɵallocHostVars(3);
            } if (rf & 2) {
                core.ɵɵclassProp("ant-radio-group-large", ctx.nzSize === "large")("ant-radio-group-small", ctx.nzSize === "small")("ant-radio-group-solid", ctx.nzButtonStyle === "solid");
            } }, inputs: { nzDisabled: "nzDisabled", nzButtonStyle: "nzButtonStyle", nzSize: "nzSize", nzName: "nzName" }, exportAs: ["nzRadioGroup"], features: [core.ɵɵProvidersFeature([
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef((function () { return NzRadioGroupComponent; })),
                        multi: true
                    }
                ]), core.ɵɵNgOnChangesFeature()], ngContentSelectors: _c0$2, decls: 1, vars: 0, template: function NzRadioGroupComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵprojection(0);
            } }, encapsulation: 2, changeDetection: 0 });
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzRadioGroupComponent.prototype, "nzDisabled", void 0);
        return NzRadioGroupComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzRadioGroupComponent, [{
            type: core.Component,
            args: [{
                    selector: 'nz-radio-group',
                    exportAs: 'nzRadioGroup',
                    preserveWhitespaces: false,
                    templateUrl: './nz-radio-group.component.html',
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: forms.NG_VALUE_ACCESSOR,
                            useExisting: core.forwardRef((function () { return NzRadioGroupComponent; })),
                            multi: true
                        }
                    ],
                    host: {
                        '[class.ant-radio-group-large]': "nzSize === 'large'",
                        '[class.ant-radio-group-small]': "nzSize === 'small'",
                        '[class.ant-radio-group-solid]': "nzButtonStyle === 'solid'"
                    }
                }]
        }], function () { return [{ type: core.ChangeDetectorRef }, { type: core.Renderer2 }, { type: core.ElementRef }]; }, { radios: [{
                type: core.ContentChildren,
                args: [core.forwardRef(function () { return NzRadioComponent; }),
                    { descendants: true }]
            }], nzDisabled: [{
                type: core.Input
            }], nzButtonStyle: [{
                type: core.Input
            }], nzSize: [{
                type: core.Input
            }], nzName: [{
                type: core.Input
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzRadioModule = /** @class */ (function () {
        function NzRadioModule() {
        }
        /** @nocollapse */ NzRadioModule.ɵmod = core.ɵɵdefineNgModule({ type: NzRadioModule });
        /** @nocollapse */ NzRadioModule.ɵinj = core.ɵɵdefineInjector({ factory: function NzRadioModule_Factory(t) { return new (t || NzRadioModule)(); }, imports: [[common.CommonModule, forms.FormsModule]] });
        return NzRadioModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(NzRadioModule, { declarations: [NzRadioComponent, NzRadioButtonComponent, NzRadioGroupComponent], imports: [common.CommonModule, forms.FormsModule], exports: [NzRadioComponent, NzRadioButtonComponent, NzRadioGroupComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzRadioModule, [{
            type: core.NgModule,
            args: [{
                    imports: [common.CommonModule, forms.FormsModule],
                    exports: [NzRadioComponent, NzRadioButtonComponent, NzRadioGroupComponent],
                    declarations: [NzRadioComponent, NzRadioButtonComponent, NzRadioGroupComponent]
                }]
        }], null, null); })();

    exports.NzRadioButtonComponent = NzRadioButtonComponent;
    exports.NzRadioComponent = NzRadioComponent;
    exports.NzRadioGroupComponent = NzRadioGroupComponent;
    exports.NzRadioModule = NzRadioModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-radio.umd.js.map

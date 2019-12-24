(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('rxjs'), require('rxjs/operators'), require('ng-zorro-antd/core'), require('@angular/common'), require('ng-zorro-antd/spin'), require('ng-zorro-antd/icon')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/code-editor', ['exports', '@angular/core', '@angular/forms', 'rxjs', 'rxjs/operators', 'ng-zorro-antd/core', '@angular/common', 'ng-zorro-antd/spin', 'ng-zorro-antd/icon'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd']['code-editor'] = {}), global.ng.core, global.ng.forms, global.rxjs, global.rxjs.operators, global['ng-zorro-antd'].core, global.ng.common, global['ng-zorro-antd'].spin, global['ng-zorro-antd'].icon));
}(this, (function (exports, core, forms, rxjs, operators, core$1, common, spin, icon) { 'use strict';

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

    (function (NzCodeEditorLoadingStatus) {
        NzCodeEditorLoadingStatus["UNLOAD"] = "unload";
        NzCodeEditorLoadingStatus["LOADING"] = "loading";
        NzCodeEditorLoadingStatus["LOADED"] = "LOADED";
    })(exports.NzCodeEditorLoadingStatus || (exports.NzCodeEditorLoadingStatus = {}));
    var NZ_CODE_EDITOR_CONFIG = new core.InjectionToken('nz-code-editor-config', {
        providedIn: 'root',
        factory: NZ_CODE_EDITOR_CONFIG_FACTORY
    });
    function NZ_CODE_EDITOR_CONFIG_FACTORY() {
        return {};
    }

    var NZ_CONFIG_COMPONENT_NAME = 'codeEditor';
    // tslint:disable no-any
    function tryTriggerFunc(fn) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (fn) {
                fn.apply(void 0, __spread(args));
            }
        };
    }
    // tslint:enable no-any
    var NzCodeEditorService = /** @class */ (function () {
        function NzCodeEditorService(nzConfigService, _document, // tslint:disable-line no-any
        config) {
            var _this = this;
            this.nzConfigService = nzConfigService;
            this.firstEditorInitialized = false;
            this.loaded$ = new rxjs.Subject();
            this.loadingStatus = exports.NzCodeEditorLoadingStatus.UNLOAD;
            this.option$ = new rxjs.BehaviorSubject(this.option);
            var globalConfig = this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME);
            if (config) {
                core$1.warnDeprecation("'NZ_CODE_EDITOR_CONFIG' is deprecated and will be removed in next minor version. Please use 'NzConfigService' instead.");
            }
            this.document = _document;
            this.config = __assign(__assign({}, config), globalConfig);
            this.option = this.config.defaultEditorOption || {};
            this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME).subscribe(function () {
                var newGlobalConfig = _this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME);
                if (newGlobalConfig) {
                    _this._updateDefaultOption(newGlobalConfig.defaultEditorOption);
                }
            });
        }
        NzCodeEditorService.prototype.updateDefaultOption = function (option) {
            core$1.warnDeprecation("'updateDefaultOption' is deprecated and will be removed in next minor version. Please use 'set' of 'NzConfigService' instead.");
            this._updateDefaultOption(option);
        };
        NzCodeEditorService.prototype._updateDefaultOption = function (option) {
            this.option = __assign(__assign({}, this.option), option);
            this.option$.next(this.option);
            if (option.theme) {
                monaco.editor.setTheme(option.theme);
            }
        };
        NzCodeEditorService.prototype.requestToInit = function () {
            var _this = this;
            if (this.loadingStatus === exports.NzCodeEditorLoadingStatus.LOADED) {
                this.onInit();
                return rxjs.of(this.getLatestOption());
            }
            if (this.loadingStatus === exports.NzCodeEditorLoadingStatus.UNLOAD) {
                if (this.config.useStaticLoading && typeof monaco === 'undefined') {
                    core$1.warn('You choose to use static loading but it seems that you forget ' +
                        'to config webpack plugin correctly. Please refer to our official website' +
                        'for more details about static loading.');
                }
                else {
                    this.loadMonacoScript();
                }
            }
            return this.loaded$.asObservable().pipe(operators.tap(function () { return _this.onInit(); }), operators.map(function () { return _this.getLatestOption(); }));
        };
        NzCodeEditorService.prototype.loadMonacoScript = function () {
            var _this = this;
            if (this.config.useStaticLoading) {
                this.onLoad();
                return;
            }
            if (this.loadingStatus === exports.NzCodeEditorLoadingStatus.LOADING) {
                return;
            }
            this.loadingStatus = exports.NzCodeEditorLoadingStatus.LOADING;
            var assetsRoot = this.config.assetsRoot;
            var vs = assetsRoot ? assetsRoot + "/vs" : 'assets/vs';
            var windowAsAny = window; // tslint:disable-line no-any
            var loadScript = this.document.createElement('script');
            loadScript.type = 'text/javascript';
            loadScript.src = vs + "/loader.js";
            loadScript.onload = function () {
                windowAsAny.require.config({
                    paths: { vs: vs }
                });
                windowAsAny.require(['vs/editor/editor.main'], function () {
                    _this.onLoad();
                });
            };
            loadScript.onerror = function () {
                throw new Error(core$1.PREFIX + " cannot load assets of monaco editor from source \"" + vs + "\".");
            };
            this.document.documentElement.appendChild(loadScript);
        };
        NzCodeEditorService.prototype.onLoad = function () {
            this.loadingStatus = exports.NzCodeEditorLoadingStatus.LOADED;
            this.loaded$.next(true);
            this.loaded$.complete();
            tryTriggerFunc(this.config.onLoad)();
        };
        NzCodeEditorService.prototype.onInit = function () {
            if (!this.firstEditorInitialized) {
                this.firstEditorInitialized = true;
                tryTriggerFunc(this.config.onFirstEditorInit)();
            }
            tryTriggerFunc(this.config.onInit)();
        };
        NzCodeEditorService.prototype.getLatestOption = function () {
            return __assign({}, this.option);
        };
        /** @nocollapse */ NzCodeEditorService.ɵfac = function NzCodeEditorService_Factory(t) { return new (t || NzCodeEditorService)(core.ɵɵinject(core$1.NzConfigService), core.ɵɵinject(common.DOCUMENT), core.ɵɵinject(NZ_CODE_EDITOR_CONFIG, 8)); };
        /** @nocollapse */ NzCodeEditorService.ɵprov = core.ɵɵdefineInjectable({ token: NzCodeEditorService, factory: NzCodeEditorService.ɵfac, providedIn: 'root' });
        return NzCodeEditorService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzCodeEditorService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: core$1.NzConfigService }, { type: undefined, decorators: [{
                    type: core.Inject,
                    args: [common.DOCUMENT]
                }] }, { type: undefined, decorators: [{
                    type: core.Inject,
                    args: [NZ_CODE_EDITOR_CONFIG]
                }, {
                    type: core.Optional
                }] }]; }, null); })();

    function NzCodeEditorComponent_div_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 2);
        core.ɵɵelement(1, "nz-spin");
        core.ɵɵelementEnd();
    } }
    function NzCodeEditorComponent_div_1_ng_template_1_Template(rf, ctx) { }
    function NzCodeEditorComponent_div_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 3);
        core.ɵɵtemplate(1, NzCodeEditorComponent_div_1_ng_template_1_Template, 0, 0, "ng-template", 4);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1032 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", ctx_r1032.nzToolkit);
    } }
    var NzCodeEditorComponent = /** @class */ (function () {
        function NzCodeEditorComponent(nzCodeEditorService, ngZone, elementRef) {
            this.nzCodeEditorService = nzCodeEditorService;
            this.ngZone = ngZone;
            this.nzEditorMode = 'normal';
            this.nzOriginalText = '';
            this.nzLoading = false;
            this.nzFullControl = false;
            this.nzEditorInitialized = new core.EventEmitter();
            this.editorOptionCached = {};
            this.destroy$ = new rxjs.Subject();
            this.resize$ = new rxjs.Subject();
            this.editorOption$ = new rxjs.BehaviorSubject({});
            this.value = '';
            this.modelSet = false;
            this.el = elementRef.nativeElement;
        }
        Object.defineProperty(NzCodeEditorComponent.prototype, "nzEditorOption", {
            set: function (value) {
                this.editorOption$.next(value);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Initialize a monaco editor instance.
         */
        NzCodeEditorComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.nzCodeEditorService.requestToInit().subscribe(function (option) { return _this.setup(option); });
        };
        NzCodeEditorComponent.prototype.ngOnDestroy = function () {
            if (this.editorInstance) {
                this.editorInstance.dispose();
            }
            this.destroy$.next();
            this.destroy$.complete();
        };
        NzCodeEditorComponent.prototype.writeValue = function (value) {
            this.value = value;
            this.setValue();
        };
        // tslint:disable-next-line no-any
        NzCodeEditorComponent.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        // tslint:disable-next-line no-any
        NzCodeEditorComponent.prototype.registerOnTouched = function (fn) {
            this.onTouch = fn;
        };
        NzCodeEditorComponent.prototype.onChange = function (_value) { };
        NzCodeEditorComponent.prototype.onTouch = function () { };
        NzCodeEditorComponent.prototype.layout = function () {
            this.resize$.next();
        };
        NzCodeEditorComponent.prototype.setup = function (option) {
            var _this = this;
            core$1.inNextTick().subscribe(function () {
                _this.editorOptionCached = option;
                _this.registerOptionChanges();
                _this.initMonacoEditorInstance();
                _this.registerResizeChange();
                _this.setValue();
                if (!_this.nzFullControl) {
                    _this.setValueEmitter();
                }
                _this.nzEditorInitialized.emit(_this.editorInstance);
            });
        };
        NzCodeEditorComponent.prototype.registerOptionChanges = function () {
            var _this = this;
            rxjs.combineLatest([this.editorOption$, this.nzCodeEditorService.option$])
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function (_a) {
                var _b = __read(_a, 2), selfOpt = _b[0], defaultOpt = _b[1];
                _this.editorOptionCached = __assign(__assign(__assign({}, _this.editorOptionCached), defaultOpt), selfOpt);
                _this.updateOptionToMonaco();
            });
        };
        NzCodeEditorComponent.prototype.initMonacoEditorInstance = function () {
            var _this = this;
            this.ngZone.runOutsideAngular(function () {
                _this.editorInstance =
                    _this.nzEditorMode === 'normal'
                        ? monaco.editor.create(_this.el, __assign({}, _this.editorOptionCached))
                        : monaco.editor.createDiffEditor(_this.el, __assign({}, _this.editorOptionCached));
            });
        };
        NzCodeEditorComponent.prototype.registerResizeChange = function () {
            var _this = this;
            this.ngZone.runOutsideAngular(function () {
                rxjs.fromEvent(window, 'resize')
                    .pipe(operators.debounceTime(300), operators.takeUntil(_this.destroy$))
                    .subscribe(function () {
                    _this.layout();
                });
                _this.resize$
                    .pipe(operators.takeUntil(_this.destroy$), operators.filter(function () { return !!_this.editorInstance; }), operators.map(function () { return ({
                    width: _this.el.clientWidth,
                    height: _this.el.clientHeight
                }); }), operators.distinctUntilChanged(function (a, b) { return a.width === b.width && a.height === b.height; }), operators.debounceTime(50))
                    .subscribe(function () {
                    _this.editorInstance.layout();
                });
            });
        };
        NzCodeEditorComponent.prototype.setValue = function () {
            if (!this.editorInstance) {
                return;
            }
            if (this.nzFullControl && this.value) {
                core$1.warn("should not set value when you are using full control mode! It would result in ambiguous data flow!");
                return;
            }
            if (this.nzEditorMode === 'normal') {
                if (this.modelSet) {
                    this.editorInstance.getModel().setValue(this.value);
                }
                else {
                    this.editorInstance.setModel(monaco.editor.createModel(this.value, this.editorOptionCached.language));
                    this.modelSet = true;
                }
            }
            else {
                if (this.modelSet) {
                    var model = this.editorInstance.getModel();
                    model.modified.setValue(this.value);
                    model.original.setValue(this.nzOriginalText);
                }
                else {
                    var language = this.editorOptionCached.language;
                    this.editorInstance.setModel({
                        original: monaco.editor.createModel(this.value, language),
                        modified: monaco.editor.createModel(this.nzOriginalText, language)
                    });
                }
            }
        };
        NzCodeEditorComponent.prototype.setValueEmitter = function () {
            var _this = this;
            var model = (this.nzEditorMode === 'normal'
                ? this.editorInstance.getModel()
                : this.editorInstance.getModel().modified);
            model.onDidChangeContent(function () {
                _this.emitValue(model.getValue());
            });
        };
        NzCodeEditorComponent.prototype.emitValue = function (value) {
            this.value = value;
            this.onChange(value);
        };
        NzCodeEditorComponent.prototype.updateOptionToMonaco = function () {
            if (this.editorInstance) {
                this.editorInstance.updateOptions(__assign({}, this.editorOptionCached));
            }
        };
        /** @nocollapse */ NzCodeEditorComponent.ɵfac = function NzCodeEditorComponent_Factory(t) { return new (t || NzCodeEditorComponent)(core.ɵɵdirectiveInject(NzCodeEditorService), core.ɵɵdirectiveInject(core.NgZone), core.ɵɵdirectiveInject(core.ElementRef)); };
        /** @nocollapse */ NzCodeEditorComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzCodeEditorComponent, selectors: [["nz-code-editor"]], hostBindings: function NzCodeEditorComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
                core.ɵɵallocHostVars(1);
            } if (rf & 2) {
                core.ɵɵclassProp("ant-code-editor", true);
            } }, inputs: { nzEditorMode: "nzEditorMode", nzOriginalText: "nzOriginalText", nzLoading: "nzLoading", nzFullControl: "nzFullControl", nzToolkit: "nzToolkit", nzEditorOption: "nzEditorOption" }, outputs: { nzEditorInitialized: "nzEditorInitialized" }, exportAs: ["nzCodeEditor"], features: [core.ɵɵProvidersFeature([
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef((function () { return NzCodeEditorComponent; })),
                        multi: true
                    }
                ])], decls: 2, vars: 2, consts: [["class", "ant-code-editor-loading", 4, "ngIf"], ["class", "ant-code-editor-toolkit", 4, "ngIf"], [1, "ant-code-editor-loading"], [1, "ant-code-editor-toolkit"], [3, "ngTemplateOutlet"]], template: function NzCodeEditorComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵtemplate(0, NzCodeEditorComponent_div_0_Template, 2, 0, "div", 0);
                core.ɵɵtemplate(1, NzCodeEditorComponent_div_1_Template, 2, 1, "div", 1);
            } if (rf & 2) {
                core.ɵɵproperty("ngIf", ctx.nzLoading);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.nzToolkit);
            } }, directives: [common.NgIf, spin.NzSpinComponent, common.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzCodeEditorComponent.prototype, "nzLoading", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzCodeEditorComponent.prototype, "nzFullControl", void 0);
        return NzCodeEditorComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzCodeEditorComponent, [{
            type: core.Component,
            args: [{
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    selector: 'nz-code-editor',
                    exportAs: 'nzCodeEditor',
                    templateUrl: './nz-code-editor.component.html',
                    host: {
                        '[class.ant-code-editor]': 'true'
                    },
                    providers: [
                        {
                            provide: forms.NG_VALUE_ACCESSOR,
                            useExisting: core.forwardRef((function () { return NzCodeEditorComponent; })),
                            multi: true
                        }
                    ]
                }]
        }], function () { return [{ type: NzCodeEditorService }, { type: core.NgZone }, { type: core.ElementRef }]; }, { nzEditorMode: [{
                type: core.Input
            }], nzOriginalText: [{
                type: core.Input
            }], nzLoading: [{
                type: core.Input
            }], nzFullControl: [{
                type: core.Input
            }], nzToolkit: [{
                type: core.Input
            }], nzEditorOption: [{
                type: core.Input
            }], nzEditorInitialized: [{
                type: core.Output
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzCodeEditorModule = /** @class */ (function () {
        function NzCodeEditorModule() {
        }
        /** @nocollapse */ NzCodeEditorModule.ɵmod = core.ɵɵdefineNgModule({ type: NzCodeEditorModule });
        /** @nocollapse */ NzCodeEditorModule.ɵinj = core.ɵɵdefineInjector({ factory: function NzCodeEditorModule_Factory(t) { return new (t || NzCodeEditorModule)(); }, imports: [[common.CommonModule, icon.NzIconModule, spin.NzSpinModule]] });
        return NzCodeEditorModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(NzCodeEditorModule, { declarations: [NzCodeEditorComponent], imports: [common.CommonModule, icon.NzIconModule, spin.NzSpinModule], exports: [NzCodeEditorComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzCodeEditorModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [NzCodeEditorComponent],
                    imports: [common.CommonModule, icon.NzIconModule, spin.NzSpinModule],
                    exports: [NzCodeEditorComponent]
                }]
        }], null, null); })();

    exports.NZ_CODE_EDITOR_CONFIG = NZ_CODE_EDITOR_CONFIG;
    exports.NZ_CODE_EDITOR_CONFIG_FACTORY = NZ_CODE_EDITOR_CONFIG_FACTORY;
    exports.NzCodeEditorComponent = NzCodeEditorComponent;
    exports.NzCodeEditorModule = NzCodeEditorModule;
    exports.NzCodeEditorService = NzCodeEditorService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-code-editor.umd.js.map

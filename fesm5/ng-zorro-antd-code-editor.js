import { InjectionToken, ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, Inject, Optional, ɵɵelementStart, ɵɵelement, ɵɵelementEnd, ɵɵtemplate, ɵɵnextContext, ɵɵadvance, ɵɵproperty, EventEmitter, ɵɵdirectiveInject, NgZone, ElementRef, ɵɵdefineComponent, ɵɵallocHostVars, ɵɵclassProp, ɵɵProvidersFeature, forwardRef, Component, ChangeDetectionStrategy, ViewEncapsulation, Input, Output, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { __spread, __assign, __read, __decorate, __metadata } from 'tslib';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject, BehaviorSubject, of, combineLatest, fromEvent } from 'rxjs';
import { tap, map, takeUntil, debounceTime, filter, distinctUntilChanged } from 'rxjs/operators';
import { warnDeprecation, warn, PREFIX, NzConfigService, inNextTick, InputBoolean } from 'ng-zorro-antd/core';
import { DOCUMENT, NgIf, NgTemplateOutlet, CommonModule } from '@angular/common';
import { NzSpinComponent, NzSpinModule } from 'ng-zorro-antd/spin';
import { NzIconModule } from 'ng-zorro-antd/icon';

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzCodeEditorLoadingStatus;
(function (NzCodeEditorLoadingStatus) {
    NzCodeEditorLoadingStatus["UNLOAD"] = "unload";
    NzCodeEditorLoadingStatus["LOADING"] = "loading";
    NzCodeEditorLoadingStatus["LOADED"] = "LOADED";
})(NzCodeEditorLoadingStatus || (NzCodeEditorLoadingStatus = {}));
var NZ_CODE_EDITOR_CONFIG = new InjectionToken('nz-code-editor-config', {
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
        this.loaded$ = new Subject();
        this.loadingStatus = NzCodeEditorLoadingStatus.UNLOAD;
        this.option$ = new BehaviorSubject(this.option);
        var globalConfig = this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME);
        if (config) {
            warnDeprecation("'NZ_CODE_EDITOR_CONFIG' is deprecated and will be removed in next minor version. Please use 'NzConfigService' instead.");
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
        warnDeprecation("'updateDefaultOption' is deprecated and will be removed in next minor version. Please use 'set' of 'NzConfigService' instead.");
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
        if (this.loadingStatus === NzCodeEditorLoadingStatus.LOADED) {
            this.onInit();
            return of(this.getLatestOption());
        }
        if (this.loadingStatus === NzCodeEditorLoadingStatus.UNLOAD) {
            if (this.config.useStaticLoading && typeof monaco === 'undefined') {
                warn('You choose to use static loading but it seems that you forget ' +
                    'to config webpack plugin correctly. Please refer to our official website' +
                    'for more details about static loading.');
            }
            else {
                this.loadMonacoScript();
            }
        }
        return this.loaded$.asObservable().pipe(tap(function () { return _this.onInit(); }), map(function () { return _this.getLatestOption(); }));
    };
    NzCodeEditorService.prototype.loadMonacoScript = function () {
        var _this = this;
        if (this.config.useStaticLoading) {
            this.onLoad();
            return;
        }
        if (this.loadingStatus === NzCodeEditorLoadingStatus.LOADING) {
            return;
        }
        this.loadingStatus = NzCodeEditorLoadingStatus.LOADING;
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
            throw new Error(PREFIX + " cannot load assets of monaco editor from source \"" + vs + "\".");
        };
        this.document.documentElement.appendChild(loadScript);
    };
    NzCodeEditorService.prototype.onLoad = function () {
        this.loadingStatus = NzCodeEditorLoadingStatus.LOADED;
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
    /** @nocollapse */ NzCodeEditorService.ɵfac = function NzCodeEditorService_Factory(t) { return new (t || NzCodeEditorService)(ɵɵinject(NzConfigService), ɵɵinject(DOCUMENT), ɵɵinject(NZ_CODE_EDITOR_CONFIG, 8)); };
    /** @nocollapse */ NzCodeEditorService.ɵprov = ɵɵdefineInjectable({ token: NzCodeEditorService, factory: NzCodeEditorService.ɵfac, providedIn: 'root' });
    return NzCodeEditorService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzCodeEditorService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: NzConfigService }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [NZ_CODE_EDITOR_CONFIG]
            }, {
                type: Optional
            }] }]; }, null); })();

function NzCodeEditorComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵelement(1, "nz-spin");
    ɵɵelementEnd();
} }
function NzCodeEditorComponent_div_1_ng_template_1_Template(rf, ctx) { }
function NzCodeEditorComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵtemplate(1, NzCodeEditorComponent_div_1_ng_template_1_Template, 0, 0, "ng-template", 4);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1032 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r1032.nzToolkit);
} }
var NzCodeEditorComponent = /** @class */ (function () {
    function NzCodeEditorComponent(nzCodeEditorService, ngZone, elementRef) {
        this.nzCodeEditorService = nzCodeEditorService;
        this.ngZone = ngZone;
        this.nzEditorMode = 'normal';
        this.nzOriginalText = '';
        this.nzLoading = false;
        this.nzFullControl = false;
        this.nzEditorInitialized = new EventEmitter();
        this.editorOptionCached = {};
        this.destroy$ = new Subject();
        this.resize$ = new Subject();
        this.editorOption$ = new BehaviorSubject({});
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
        inNextTick().subscribe(function () {
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
        combineLatest([this.editorOption$, this.nzCodeEditorService.option$])
            .pipe(takeUntil(this.destroy$))
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
            fromEvent(window, 'resize')
                .pipe(debounceTime(300), takeUntil(_this.destroy$))
                .subscribe(function () {
                _this.layout();
            });
            _this.resize$
                .pipe(takeUntil(_this.destroy$), filter(function () { return !!_this.editorInstance; }), map(function () { return ({
                width: _this.el.clientWidth,
                height: _this.el.clientHeight
            }); }), distinctUntilChanged(function (a, b) { return a.width === b.width && a.height === b.height; }), debounceTime(50))
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
            warn("should not set value when you are using full control mode! It would result in ambiguous data flow!");
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
    /** @nocollapse */ NzCodeEditorComponent.ɵfac = function NzCodeEditorComponent_Factory(t) { return new (t || NzCodeEditorComponent)(ɵɵdirectiveInject(NzCodeEditorService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef)); };
    /** @nocollapse */ NzCodeEditorComponent.ɵcmp = ɵɵdefineComponent({ type: NzCodeEditorComponent, selectors: [["nz-code-editor"]], hostBindings: function NzCodeEditorComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            ɵɵallocHostVars(1);
        } if (rf & 2) {
            ɵɵclassProp("ant-code-editor", true);
        } }, inputs: { nzEditorMode: "nzEditorMode", nzOriginalText: "nzOriginalText", nzLoading: "nzLoading", nzFullControl: "nzFullControl", nzToolkit: "nzToolkit", nzEditorOption: "nzEditorOption" }, outputs: { nzEditorInitialized: "nzEditorInitialized" }, exportAs: ["nzCodeEditor"], features: [ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef((function () { return NzCodeEditorComponent; })),
                    multi: true
                }
            ])], decls: 2, vars: 2, consts: [["class", "ant-code-editor-loading", 4, "ngIf"], ["class", "ant-code-editor-toolkit", 4, "ngIf"], [1, "ant-code-editor-loading"], [1, "ant-code-editor-toolkit"], [3, "ngTemplateOutlet"]], template: function NzCodeEditorComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵtemplate(0, NzCodeEditorComponent_div_0_Template, 2, 0, "div", 0);
            ɵɵtemplate(1, NzCodeEditorComponent_div_1_Template, 2, 1, "div", 1);
        } if (rf & 2) {
            ɵɵproperty("ngIf", ctx.nzLoading);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.nzToolkit);
        } }, directives: [NgIf, NzSpinComponent, NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzCodeEditorComponent.prototype, "nzLoading", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzCodeEditorComponent.prototype, "nzFullControl", void 0);
    return NzCodeEditorComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzCodeEditorComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-code-editor',
                exportAs: 'nzCodeEditor',
                templateUrl: './nz-code-editor.component.html',
                host: {
                    '[class.ant-code-editor]': 'true'
                },
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((function () { return NzCodeEditorComponent; })),
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: NzCodeEditorService }, { type: NgZone }, { type: ElementRef }]; }, { nzEditorMode: [{
            type: Input
        }], nzOriginalText: [{
            type: Input
        }], nzLoading: [{
            type: Input
        }], nzFullControl: [{
            type: Input
        }], nzToolkit: [{
            type: Input
        }], nzEditorOption: [{
            type: Input
        }], nzEditorInitialized: [{
            type: Output
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
    /** @nocollapse */ NzCodeEditorModule.ɵmod = ɵɵdefineNgModule({ type: NzCodeEditorModule });
    /** @nocollapse */ NzCodeEditorModule.ɵinj = ɵɵdefineInjector({ factory: function NzCodeEditorModule_Factory(t) { return new (t || NzCodeEditorModule)(); }, imports: [[CommonModule, NzIconModule, NzSpinModule]] });
    return NzCodeEditorModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzCodeEditorModule, { declarations: [NzCodeEditorComponent], imports: [CommonModule, NzIconModule, NzSpinModule], exports: [NzCodeEditorComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzCodeEditorModule, [{
        type: NgModule,
        args: [{
                declarations: [NzCodeEditorComponent],
                imports: [CommonModule, NzIconModule, NzSpinModule],
                exports: [NzCodeEditorComponent]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NZ_CODE_EDITOR_CONFIG, NZ_CODE_EDITOR_CONFIG_FACTORY, NzCodeEditorComponent, NzCodeEditorLoadingStatus, NzCodeEditorModule, NzCodeEditorService };
//# sourceMappingURL=ng-zorro-antd-code-editor.js.map

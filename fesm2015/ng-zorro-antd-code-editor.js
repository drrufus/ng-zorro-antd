import { InjectionToken, ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, Inject, Optional, ɵɵelementStart, ɵɵelement, ɵɵelementEnd, ɵɵtemplate, ɵɵnextContext, ɵɵadvance, ɵɵproperty, EventEmitter, ɵɵdirectiveInject, NgZone, ElementRef, ɵɵdefineComponent, ɵɵallocHostVars, ɵɵclassProp, ɵɵProvidersFeature, forwardRef, Component, ChangeDetectionStrategy, ViewEncapsulation, Input, Output, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { __decorate, __metadata } from 'tslib';
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
const NZ_CODE_EDITOR_CONFIG = new InjectionToken('nz-code-editor-config', {
    providedIn: 'root',
    factory: NZ_CODE_EDITOR_CONFIG_FACTORY
});
function NZ_CODE_EDITOR_CONFIG_FACTORY() {
    return {};
}

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const NZ_CONFIG_COMPONENT_NAME = 'codeEditor';
// tslint:disable no-any
function tryTriggerFunc(fn) {
    return (...args) => {
        if (fn) {
            fn(...args);
        }
    };
}
// tslint:enable no-any
class NzCodeEditorService {
    constructor(nzConfigService, _document, // tslint:disable-line no-any
    config) {
        this.nzConfigService = nzConfigService;
        this.firstEditorInitialized = false;
        this.loaded$ = new Subject();
        this.loadingStatus = NzCodeEditorLoadingStatus.UNLOAD;
        this.option$ = new BehaviorSubject(this.option);
        const globalConfig = this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME);
        if (config) {
            warnDeprecation(`'NZ_CODE_EDITOR_CONFIG' is deprecated and will be removed in next minor version. Please use 'NzConfigService' instead.`);
        }
        this.document = _document;
        this.config = Object.assign(Object.assign({}, config), globalConfig);
        this.option = this.config.defaultEditorOption || {};
        this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME).subscribe(() => {
            const newGlobalConfig = this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME);
            if (newGlobalConfig) {
                this._updateDefaultOption(newGlobalConfig.defaultEditorOption);
            }
        });
    }
    updateDefaultOption(option) {
        warnDeprecation(`'updateDefaultOption' is deprecated and will be removed in next minor version. Please use 'set' of 'NzConfigService' instead.`);
        this._updateDefaultOption(option);
    }
    _updateDefaultOption(option) {
        this.option = Object.assign(Object.assign({}, this.option), option);
        this.option$.next(this.option);
        if (option.theme) {
            monaco.editor.setTheme(option.theme);
        }
    }
    requestToInit() {
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
        return this.loaded$.asObservable().pipe(tap(() => this.onInit()), map(() => this.getLatestOption()));
    }
    loadMonacoScript() {
        if (this.config.useStaticLoading) {
            this.onLoad();
            return;
        }
        if (this.loadingStatus === NzCodeEditorLoadingStatus.LOADING) {
            return;
        }
        this.loadingStatus = NzCodeEditorLoadingStatus.LOADING;
        const assetsRoot = this.config.assetsRoot;
        const vs = assetsRoot ? `${assetsRoot}/vs` : 'assets/vs';
        const windowAsAny = window; // tslint:disable-line no-any
        const loadScript = this.document.createElement('script');
        loadScript.type = 'text/javascript';
        loadScript.src = `${vs}/loader.js`;
        loadScript.onload = () => {
            windowAsAny.require.config({
                paths: { vs }
            });
            windowAsAny.require(['vs/editor/editor.main'], () => {
                this.onLoad();
            });
        };
        loadScript.onerror = () => {
            throw new Error(`${PREFIX} cannot load assets of monaco editor from source "${vs}".`);
        };
        this.document.documentElement.appendChild(loadScript);
    }
    onLoad() {
        this.loadingStatus = NzCodeEditorLoadingStatus.LOADED;
        this.loaded$.next(true);
        this.loaded$.complete();
        tryTriggerFunc(this.config.onLoad)();
    }
    onInit() {
        if (!this.firstEditorInitialized) {
            this.firstEditorInitialized = true;
            tryTriggerFunc(this.config.onFirstEditorInit)();
        }
        tryTriggerFunc(this.config.onInit)();
    }
    getLatestOption() {
        return Object.assign({}, this.option);
    }
}
/** @nocollapse */ NzCodeEditorService.ɵfac = function NzCodeEditorService_Factory(t) { return new (t || NzCodeEditorService)(ɵɵinject(NzConfigService), ɵɵinject(DOCUMENT), ɵɵinject(NZ_CODE_EDITOR_CONFIG, 8)); };
/** @nocollapse */ NzCodeEditorService.ɵprov = ɵɵdefineInjectable({ token: NzCodeEditorService, factory: NzCodeEditorService.ɵfac, providedIn: 'root' });
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
    const ctx_r1029 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r1029.nzToolkit);
} }
class NzCodeEditorComponent {
    constructor(nzCodeEditorService, ngZone, elementRef) {
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
    set nzEditorOption(value) {
        this.editorOption$.next(value);
    }
    /**
     * Initialize a monaco editor instance.
     */
    ngAfterViewInit() {
        this.nzCodeEditorService.requestToInit().subscribe(option => this.setup(option));
    }
    ngOnDestroy() {
        if (this.editorInstance) {
            this.editorInstance.dispose();
        }
        this.destroy$.next();
        this.destroy$.complete();
    }
    writeValue(value) {
        this.value = value;
        this.setValue();
    }
    // tslint:disable-next-line no-any
    registerOnChange(fn) {
        this.onChange = fn;
    }
    // tslint:disable-next-line no-any
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    onChange(_value) { }
    onTouch() { }
    layout() {
        this.resize$.next();
    }
    setup(option) {
        inNextTick().subscribe(() => {
            this.editorOptionCached = option;
            this.registerOptionChanges();
            this.initMonacoEditorInstance();
            this.registerResizeChange();
            this.setValue();
            if (!this.nzFullControl) {
                this.setValueEmitter();
            }
            this.nzEditorInitialized.emit(this.editorInstance);
        });
    }
    registerOptionChanges() {
        combineLatest([this.editorOption$, this.nzCodeEditorService.option$])
            .pipe(takeUntil(this.destroy$))
            .subscribe(([selfOpt, defaultOpt]) => {
            this.editorOptionCached = Object.assign(Object.assign(Object.assign({}, this.editorOptionCached), defaultOpt), selfOpt);
            this.updateOptionToMonaco();
        });
    }
    initMonacoEditorInstance() {
        this.ngZone.runOutsideAngular(() => {
            this.editorInstance =
                this.nzEditorMode === 'normal'
                    ? monaco.editor.create(this.el, Object.assign({}, this.editorOptionCached))
                    : monaco.editor.createDiffEditor(this.el, Object.assign({}, this.editorOptionCached));
        });
    }
    registerResizeChange() {
        this.ngZone.runOutsideAngular(() => {
            fromEvent(window, 'resize')
                .pipe(debounceTime(300), takeUntil(this.destroy$))
                .subscribe(() => {
                this.layout();
            });
            this.resize$
                .pipe(takeUntil(this.destroy$), filter(() => !!this.editorInstance), map(() => ({
                width: this.el.clientWidth,
                height: this.el.clientHeight
            })), distinctUntilChanged((a, b) => a.width === b.width && a.height === b.height), debounceTime(50))
                .subscribe(() => {
                this.editorInstance.layout();
            });
        });
    }
    setValue() {
        if (!this.editorInstance) {
            return;
        }
        if (this.nzFullControl && this.value) {
            warn(`should not set value when you are using full control mode! It would result in ambiguous data flow!`);
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
                const model = this.editorInstance.getModel();
                model.modified.setValue(this.value);
                model.original.setValue(this.nzOriginalText);
            }
            else {
                const language = this.editorOptionCached.language;
                this.editorInstance.setModel({
                    original: monaco.editor.createModel(this.value, language),
                    modified: monaco.editor.createModel(this.nzOriginalText, language)
                });
            }
        }
    }
    setValueEmitter() {
        const model = (this.nzEditorMode === 'normal'
            ? this.editorInstance.getModel()
            : this.editorInstance.getModel().modified);
        model.onDidChangeContent(() => {
            this.emitValue(model.getValue());
        });
    }
    emitValue(value) {
        this.value = value;
        this.onChange(value);
    }
    updateOptionToMonaco() {
        if (this.editorInstance) {
            this.editorInstance.updateOptions(Object.assign({}, this.editorOptionCached));
        }
    }
}
/** @nocollapse */ NzCodeEditorComponent.ɵfac = function NzCodeEditorComponent_Factory(t) { return new (t || NzCodeEditorComponent)(ɵɵdirectiveInject(NzCodeEditorService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef)); };
/** @nocollapse */ NzCodeEditorComponent.ɵcmp = ɵɵdefineComponent({ type: NzCodeEditorComponent, selectors: [["nz-code-editor"]], hostBindings: function NzCodeEditorComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        ɵɵallocHostVars(1);
    } if (rf & 2) {
        ɵɵclassProp("ant-code-editor", true);
    } }, inputs: { nzEditorMode: "nzEditorMode", nzOriginalText: "nzOriginalText", nzLoading: "nzLoading", nzFullControl: "nzFullControl", nzToolkit: "nzToolkit", nzEditorOption: "nzEditorOption" }, outputs: { nzEditorInitialized: "nzEditorInitialized" }, exportAs: ["nzCodeEditor"], features: [ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef((() => NzCodeEditorComponent)),
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
                        useExisting: forwardRef((() => NzCodeEditorComponent)),
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
class NzCodeEditorModule {
}
/** @nocollapse */ NzCodeEditorModule.ɵmod = ɵɵdefineNgModule({ type: NzCodeEditorModule });
/** @nocollapse */ NzCodeEditorModule.ɵinj = ɵɵdefineInjector({ factory: function NzCodeEditorModule_Factory(t) { return new (t || NzCodeEditorModule)(); }, imports: [[CommonModule, NzIconModule, NzSpinModule]] });
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

/**
 * @fileoverview added by tsickle
 * Generated from: nz-code-editor.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { forwardRef, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, NgZone, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { combineLatest, fromEvent, BehaviorSubject, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, takeUntil } from 'rxjs/operators';
import { inNextTick, warn, InputBoolean } from 'ng-zorro-antd/core';
import { NzCodeEditorService } from './nz-code-editor.service';
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
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.editorOption$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Initialize a monaco editor instance.
     */
    /**
     * Initialize a monaco editor instance.
     * @return {?}
     */
    NzCodeEditorComponent.prototype.ngAfterViewInit = /**
     * Initialize a monaco editor instance.
     * @return {?}
     */
    function () {
        var _this = this;
        this.nzCodeEditorService.requestToInit().subscribe((/**
         * @param {?} option
         * @return {?}
         */
        function (option) { return _this.setup(option); }));
    };
    /**
     * @return {?}
     */
    NzCodeEditorComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.editorInstance) {
            this.editorInstance.dispose();
        }
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzCodeEditorComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
        this.setValue();
    };
    // tslint:disable-next-line no-any
    // tslint:disable-next-line no-any
    /**
     * @param {?} fn
     * @return {?}
     */
    NzCodeEditorComponent.prototype.registerOnChange = 
    // tslint:disable-next-line no-any
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    // tslint:disable-next-line no-any
    // tslint:disable-next-line no-any
    /**
     * @param {?} fn
     * @return {?}
     */
    NzCodeEditorComponent.prototype.registerOnTouched = 
    // tslint:disable-next-line no-any
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouch = fn;
    };
    /**
     * @param {?} _value
     * @return {?}
     */
    NzCodeEditorComponent.prototype.onChange = /**
     * @param {?} _value
     * @return {?}
     */
    function (_value) { };
    /**
     * @return {?}
     */
    NzCodeEditorComponent.prototype.onTouch = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    NzCodeEditorComponent.prototype.layout = /**
     * @return {?}
     */
    function () {
        this.resize$.next();
    };
    /**
     * @private
     * @param {?} option
     * @return {?}
     */
    NzCodeEditorComponent.prototype.setup = /**
     * @private
     * @param {?} option
     * @return {?}
     */
    function (option) {
        var _this = this;
        inNextTick().subscribe((/**
         * @return {?}
         */
        function () {
            _this.editorOptionCached = option;
            _this.registerOptionChanges();
            _this.initMonacoEditorInstance();
            _this.registerResizeChange();
            _this.setValue();
            if (!_this.nzFullControl) {
                _this.setValueEmitter();
            }
            _this.nzEditorInitialized.emit(_this.editorInstance);
        }));
    };
    /**
     * @private
     * @return {?}
     */
    NzCodeEditorComponent.prototype.registerOptionChanges = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        combineLatest([this.editorOption$, this.nzCodeEditorService.option$])
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), selfOpt = _b[0], defaultOpt = _b[1];
            _this.editorOptionCached = tslib_1.__assign({}, _this.editorOptionCached, defaultOpt, selfOpt);
            _this.updateOptionToMonaco();
        }));
    };
    /**
     * @private
     * @return {?}
     */
    NzCodeEditorComponent.prototype.initMonacoEditorInstance = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            _this.editorInstance =
                _this.nzEditorMode === 'normal'
                    ? monaco.editor.create(_this.el, tslib_1.__assign({}, _this.editorOptionCached))
                    : monaco.editor.createDiffEditor(_this.el, tslib_1.__assign({}, ((/** @type {?} */ (_this.editorOptionCached)))));
        }));
    };
    /**
     * @private
     * @return {?}
     */
    NzCodeEditorComponent.prototype.registerResizeChange = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            fromEvent(window, 'resize')
                .pipe(debounceTime(300), takeUntil(_this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            function () {
                _this.layout();
            }));
            _this.resize$
                .pipe(takeUntil(_this.destroy$), filter((/**
             * @return {?}
             */
            function () { return !!_this.editorInstance; })), map((/**
             * @return {?}
             */
            function () { return ({
                width: _this.el.clientWidth,
                height: _this.el.clientHeight
            }); })), distinctUntilChanged((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) { return a.width === b.width && a.height === b.height; })), debounceTime(50))
                .subscribe((/**
             * @return {?}
             */
            function () {
                _this.editorInstance.layout();
            }));
        }));
    };
    /**
     * @private
     * @return {?}
     */
    NzCodeEditorComponent.prototype.setValue = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.editorInstance) {
            return;
        }
        if (this.nzFullControl && this.value) {
            warn("should not set value when you are using full control mode! It would result in ambiguous data flow!");
            return;
        }
        if (this.nzEditorMode === 'normal') {
            if (this.modelSet) {
                ((/** @type {?} */ (this.editorInstance.getModel()))).setValue(this.value);
            }
            else {
                ((/** @type {?} */ (this.editorInstance))).setModel(monaco.editor.createModel(this.value, ((/** @type {?} */ (this.editorOptionCached))).language));
                this.modelSet = true;
            }
        }
        else {
            if (this.modelSet) {
                /** @type {?} */
                var model = (/** @type {?} */ (((/** @type {?} */ (this.editorInstance))).getModel()));
                model.modified.setValue(this.value);
                model.original.setValue(this.nzOriginalText);
            }
            else {
                /** @type {?} */
                var language = ((/** @type {?} */ (this.editorOptionCached))).language;
                ((/** @type {?} */ (this.editorInstance))).setModel({
                    original: monaco.editor.createModel(this.nzOriginalText, language),
                    modified: monaco.editor.createModel(this.value, language)
                });
                this.modelSet = true;
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzCodeEditorComponent.prototype.setValueEmitter = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var model = (/** @type {?} */ ((this.nzEditorMode === 'normal'
            ? ((/** @type {?} */ (this.editorInstance))).getModel()
            : (/** @type {?} */ (((/** @type {?} */ (this.editorInstance))).getModel())).modified)));
        model.onDidChangeContent((/**
         * @return {?}
         */
        function () {
            _this.emitValue(model.getValue());
        }));
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    NzCodeEditorComponent.prototype.emitValue = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
        this.onChange(value);
    };
    /**
     * @private
     * @return {?}
     */
    NzCodeEditorComponent.prototype.updateOptionToMonaco = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.editorInstance) {
            this.editorInstance.updateOptions(tslib_1.__assign({}, this.editorOptionCached));
        }
    };
    NzCodeEditorComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-code-editor',
                    exportAs: 'nzCodeEditor',
                    template: "<div class=\"ant-code-editor-loading\" *ngIf=\"nzLoading\">\r\n  <nz-spin></nz-spin>\r\n</div>\r\n\r\n<div class=\"ant-code-editor-toolkit\" *ngIf=\"nzToolkit\">\r\n  <ng-template [ngTemplateOutlet]=\"nzToolkit\"></ng-template>\r\n</div>\r\n",
                    host: {
                        '[class.ant-code-editor]': 'true'
                    },
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return NzCodeEditorComponent; })),
                            multi: true
                        }
                    ]
                }] }
    ];
    /** @nocollapse */
    NzCodeEditorComponent.ctorParameters = function () { return [
        { type: NzCodeEditorService },
        { type: NgZone },
        { type: ElementRef }
    ]; };
    NzCodeEditorComponent.propDecorators = {
        nzEditorMode: [{ type: Input }],
        nzOriginalText: [{ type: Input }],
        nzLoading: [{ type: Input }],
        nzFullControl: [{ type: Input }],
        nzToolkit: [{ type: Input }],
        nzEditorOption: [{ type: Input }],
        nzEditorInitialized: [{ type: Output }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzCodeEditorComponent.prototype, "nzLoading", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzCodeEditorComponent.prototype, "nzFullControl", void 0);
    return NzCodeEditorComponent;
}());
export { NzCodeEditorComponent };
if (false) {
    /** @type {?} */
    NzCodeEditorComponent.prototype.nzEditorMode;
    /** @type {?} */
    NzCodeEditorComponent.prototype.nzOriginalText;
    /** @type {?} */
    NzCodeEditorComponent.prototype.nzLoading;
    /** @type {?} */
    NzCodeEditorComponent.prototype.nzFullControl;
    /** @type {?} */
    NzCodeEditorComponent.prototype.nzToolkit;
    /** @type {?} */
    NzCodeEditorComponent.prototype.nzEditorInitialized;
    /** @type {?} */
    NzCodeEditorComponent.prototype.editorOptionCached;
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorComponent.prototype.resize$;
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorComponent.prototype.editorOption$;
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorComponent.prototype.editorInstance;
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorComponent.prototype.value;
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorComponent.prototype.modelSet;
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorComponent.prototype.nzCodeEditorService;
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorComponent.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29kZS1lZGl0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb2RlLWVkaXRvci8iLCJzb3VyY2VzIjpbIm56LWNvZGUtZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLFVBQVUsRUFFVix1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFFTixNQUFNLEVBQ04sV0FBVyxFQUNYLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1RixPQUFPLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUdwRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQVcvRDtJQXdDRSwrQkFBb0IsbUJBQXdDLEVBQVUsTUFBYyxFQUFFLFVBQXNCO1FBQXhGLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBdEIzRSxpQkFBWSxHQUFpQixRQUFRLENBQUM7UUFDdEMsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFDSixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBTzVCLHdCQUFtQixHQUFHLElBQUksWUFBWSxFQUF5QixDQUFDO1FBRW5GLHVCQUFrQixHQUF3QixFQUFFLENBQUM7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S0FBSztzQ0FJTCxNQUFNOztJQVJrQjtRQUFmLFlBQVksRUFBRTs7NERBQW1CO0lBQ2xCO1FBQWYsWUFBWSxFQUFFOztnRUFBdUI7SUFzTGpELDRCQUFDO0NBQUEsQUEzTUQsSUEyTUM7U0ExTFkscUJBQXFCOzs7SUFDaEMsNkNBQStDOztJQUMvQywrQ0FBNkI7O0lBQzdCLDBDQUEyQzs7SUFDM0MsOENBQStDOztJQUMvQywwQ0FBc0M7O0lBTXRDLG9EQUFtRjs7SUFFbkYsbURBQTZDOzs7OztJQUU3QyxtQ0FBaUM7Ozs7O0lBQ2pDLHlDQUF1Qzs7Ozs7SUFDdkMsd0NBQXNDOzs7OztJQUN0Qyw4Q0FBcUU7Ozs7O0lBQ3JFLCtDQUE4Qzs7Ozs7SUFDOUMsc0NBQW1COzs7OztJQUNuQix5Q0FBeUI7Ozs7O0lBRWIsb0RBQWdEOzs7OztJQUFFLHVDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBmb3J3YXJkUmVmLFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE5nWm9uZSxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT3V0cHV0LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBmcm9tRXZlbnQsIEJlaGF2aW9yU3ViamVjdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIG1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgaW5OZXh0VGljaywgd2FybiwgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IERpZmZFZGl0b3JPcHRpb25zLCBFZGl0b3JPcHRpb25zLCBKb2luZWRFZGl0b3JPcHRpb25zLCBOekVkaXRvck1vZGUgfSBmcm9tICcuL256LWNvZGUtZWRpdG9yLmRlZmluaXRpb25zJztcclxuaW1wb3J0IHsgTnpDb2RlRWRpdG9yU2VydmljZSB9IGZyb20gJy4vbnotY29kZS1lZGl0b3Iuc2VydmljZSc7XHJcblxyXG4vLyBJbXBvcnQgdHlwZXMgZnJvbSBtb25hY28gZWRpdG9yLlxyXG5pbXBvcnQgeyBlZGl0b3IgfSBmcm9tICdtb25hY28tZWRpdG9yJztcclxuaW1wb3J0IElFZGl0b3IgPSBlZGl0b3IuSUVkaXRvcjtcclxuaW1wb3J0IElEaWZmRWRpdG9yID0gZWRpdG9yLklEaWZmRWRpdG9yO1xyXG5pbXBvcnQgSVRleHRNb2RlbCA9IGVkaXRvci5JVGV4dE1vZGVsO1xyXG5cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWFueVxyXG5kZWNsYXJlIGNvbnN0IG1vbmFjbzogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzZWxlY3RvcjogJ256LWNvZGUtZWRpdG9yJyxcclxuICBleHBvcnRBczogJ256Q29kZUVkaXRvcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LWNvZGUtZWRpdG9yLmNvbXBvbmVudC5odG1sJyxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC1jb2RlLWVkaXRvcl0nOiAndHJ1ZSdcclxuICB9LFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnpDb2RlRWRpdG9yQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekNvZGVFZGl0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xyXG4gIEBJbnB1dCgpIG56RWRpdG9yTW9kZTogTnpFZGl0b3JNb2RlID0gJ25vcm1hbCc7XHJcbiAgQElucHV0KCkgbnpPcmlnaW5hbFRleHQgPSAnJztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpMb2FkaW5nID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RnVsbENvbnRyb2wgPSBmYWxzZTtcclxuICBASW5wdXQoKSBuelRvb2xraXQ6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBASW5wdXQoKSBzZXQgbnpFZGl0b3JPcHRpb24odmFsdWU6IEpvaW5lZEVkaXRvck9wdGlvbnMpIHtcclxuICAgIHRoaXMuZWRpdG9yT3B0aW9uJC5uZXh0KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekVkaXRvckluaXRpYWxpemVkID0gbmV3IEV2ZW50RW1pdHRlcjxJRWRpdG9yIHwgSURpZmZFZGl0b3I+KCk7XHJcblxyXG4gIGVkaXRvck9wdGlvbkNhY2hlZDogSm9pbmVkRWRpdG9yT3B0aW9ucyA9IHt9O1xyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IGVsOiBIVE1MRWxlbWVudDtcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBwcml2YXRlIHJlc2l6ZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIHByaXZhdGUgZWRpdG9yT3B0aW9uJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Sm9pbmVkRWRpdG9yT3B0aW9ucz4oe30pO1xyXG4gIHByaXZhdGUgZWRpdG9ySW5zdGFuY2U6IElFZGl0b3IgfCBJRGlmZkVkaXRvcjtcclxuICBwcml2YXRlIHZhbHVlID0gJyc7XHJcbiAgcHJpdmF0ZSBtb2RlbFNldCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG56Q29kZUVkaXRvclNlcnZpY2U6IE56Q29kZUVkaXRvclNlcnZpY2UsIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcclxuICAgIHRoaXMuZWwgPSBlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJbml0aWFsaXplIGEgbW9uYWNvIGVkaXRvciBpbnN0YW5jZS5cclxuICAgKi9cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm56Q29kZUVkaXRvclNlcnZpY2UucmVxdWVzdFRvSW5pdCgpLnN1YnNjcmliZShvcHRpb24gPT4gdGhpcy5zZXR1cChvcHRpb24pKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZWRpdG9ySW5zdGFuY2UpIHtcclxuICAgICAgdGhpcy5lZGl0b3JJbnN0YW5jZS5kaXNwb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMuc2V0VmFsdWUoKTtcclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1hbnlcclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZCk6IGFueSB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tYW55XHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoID0gZm47XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZShfdmFsdWU6IHN0cmluZyk6IHZvaWQge31cclxuXHJcbiAgb25Ub3VjaCgpOiB2b2lkIHt9XHJcblxyXG4gIGxheW91dCgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVzaXplJC5uZXh0KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldHVwKG9wdGlvbjogSm9pbmVkRWRpdG9yT3B0aW9ucyk6IHZvaWQge1xyXG4gICAgaW5OZXh0VGljaygpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuZWRpdG9yT3B0aW9uQ2FjaGVkID0gb3B0aW9uO1xyXG4gICAgICB0aGlzLnJlZ2lzdGVyT3B0aW9uQ2hhbmdlcygpO1xyXG4gICAgICB0aGlzLmluaXRNb25hY29FZGl0b3JJbnN0YW5jZSgpO1xyXG4gICAgICB0aGlzLnJlZ2lzdGVyUmVzaXplQ2hhbmdlKCk7XHJcbiAgICAgIHRoaXMuc2V0VmFsdWUoKTtcclxuXHJcbiAgICAgIGlmICghdGhpcy5uekZ1bGxDb250cm9sKSB7XHJcbiAgICAgICAgdGhpcy5zZXRWYWx1ZUVtaXR0ZXIoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5uekVkaXRvckluaXRpYWxpemVkLmVtaXQodGhpcy5lZGl0b3JJbnN0YW5jZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVnaXN0ZXJPcHRpb25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgY29tYmluZUxhdGVzdChbdGhpcy5lZGl0b3JPcHRpb24kLCB0aGlzLm56Q29kZUVkaXRvclNlcnZpY2Uub3B0aW9uJF0pXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgLnN1YnNjcmliZSgoW3NlbGZPcHQsIGRlZmF1bHRPcHRdKSA9PiB7XHJcbiAgICAgICAgdGhpcy5lZGl0b3JPcHRpb25DYWNoZWQgPSB7XHJcbiAgICAgICAgICAuLi50aGlzLmVkaXRvck9wdGlvbkNhY2hlZCxcclxuICAgICAgICAgIC4uLmRlZmF1bHRPcHQsXHJcbiAgICAgICAgICAuLi5zZWxmT3B0XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnVwZGF0ZU9wdGlvblRvTW9uYWNvKCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0TW9uYWNvRWRpdG9ySW5zdGFuY2UoKTogdm9pZCB7XHJcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgIHRoaXMuZWRpdG9ySW5zdGFuY2UgPVxyXG4gICAgICAgIHRoaXMubnpFZGl0b3JNb2RlID09PSAnbm9ybWFsJ1xyXG4gICAgICAgICAgPyBtb25hY28uZWRpdG9yLmNyZWF0ZSh0aGlzLmVsLCB7IC4uLnRoaXMuZWRpdG9yT3B0aW9uQ2FjaGVkIH0pXHJcbiAgICAgICAgICA6IG1vbmFjby5lZGl0b3IuY3JlYXRlRGlmZkVkaXRvcih0aGlzLmVsLCB7XHJcbiAgICAgICAgICAgICAgLi4uKHRoaXMuZWRpdG9yT3B0aW9uQ2FjaGVkIGFzIERpZmZFZGl0b3JPcHRpb25zKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZWdpc3RlclJlc2l6ZUNoYW5nZSgpOiB2b2lkIHtcclxuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpXHJcbiAgICAgICAgLnBpcGUoZGVib3VuY2VUaW1lKDMwMCksIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMubGF5b3V0KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLnJlc2l6ZSRcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcclxuICAgICAgICAgIGZpbHRlcigoKSA9PiAhIXRoaXMuZWRpdG9ySW5zdGFuY2UpLFxyXG4gICAgICAgICAgbWFwKCgpID0+ICh7XHJcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLmVsLmNsaWVudFdpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuZWwuY2xpZW50SGVpZ2h0XHJcbiAgICAgICAgICB9KSksXHJcbiAgICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgoYSwgYikgPT4gYS53aWR0aCA9PT0gYi53aWR0aCAmJiBhLmhlaWdodCA9PT0gYi5oZWlnaHQpLFxyXG4gICAgICAgICAgZGVib3VuY2VUaW1lKDUwKVxyXG4gICAgICAgIClcclxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZWRpdG9ySW5zdGFuY2UubGF5b3V0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0VmFsdWUoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuZWRpdG9ySW5zdGFuY2UpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLm56RnVsbENvbnRyb2wgJiYgdGhpcy52YWx1ZSkge1xyXG4gICAgICB3YXJuKGBzaG91bGQgbm90IHNldCB2YWx1ZSB3aGVuIHlvdSBhcmUgdXNpbmcgZnVsbCBjb250cm9sIG1vZGUhIEl0IHdvdWxkIHJlc3VsdCBpbiBhbWJpZ3VvdXMgZGF0YSBmbG93IWApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMubnpFZGl0b3JNb2RlID09PSAnbm9ybWFsJykge1xyXG4gICAgICBpZiAodGhpcy5tb2RlbFNldCkge1xyXG4gICAgICAgICh0aGlzLmVkaXRvckluc3RhbmNlLmdldE1vZGVsKCkgYXMgSVRleHRNb2RlbCkuc2V0VmFsdWUodGhpcy52YWx1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgKHRoaXMuZWRpdG9ySW5zdGFuY2UgYXMgSUVkaXRvcikuc2V0TW9kZWwoXHJcbiAgICAgICAgICBtb25hY28uZWRpdG9yLmNyZWF0ZU1vZGVsKHRoaXMudmFsdWUsICh0aGlzLmVkaXRvck9wdGlvbkNhY2hlZCBhcyBFZGl0b3JPcHRpb25zKS5sYW5ndWFnZSlcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMubW9kZWxTZXQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5tb2RlbFNldCkge1xyXG4gICAgICAgIGNvbnN0IG1vZGVsID0gKHRoaXMuZWRpdG9ySW5zdGFuY2UgYXMgSURpZmZFZGl0b3IpLmdldE1vZGVsKCkhO1xyXG4gICAgICAgIG1vZGVsLm1vZGlmaWVkLnNldFZhbHVlKHRoaXMudmFsdWUpO1xyXG4gICAgICAgIG1vZGVsLm9yaWdpbmFsLnNldFZhbHVlKHRoaXMubnpPcmlnaW5hbFRleHQpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IGxhbmd1YWdlID0gKHRoaXMuZWRpdG9yT3B0aW9uQ2FjaGVkIGFzIEVkaXRvck9wdGlvbnMpLmxhbmd1YWdlO1xyXG4gICAgICAgICh0aGlzLmVkaXRvckluc3RhbmNlIGFzIElEaWZmRWRpdG9yKS5zZXRNb2RlbCh7XHJcbiAgICAgICAgICBvcmlnaW5hbDogbW9uYWNvLmVkaXRvci5jcmVhdGVNb2RlbCh0aGlzLm56T3JpZ2luYWxUZXh0LCBsYW5ndWFnZSksXHJcbiAgICAgICAgICBtb2RpZmllZDogbW9uYWNvLmVkaXRvci5jcmVhdGVNb2RlbCh0aGlzLnZhbHVlLCBsYW5ndWFnZSlcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm1vZGVsU2V0ID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRWYWx1ZUVtaXR0ZXIoKTogdm9pZCB7XHJcbiAgICBjb25zdCBtb2RlbCA9ICh0aGlzLm56RWRpdG9yTW9kZSA9PT0gJ25vcm1hbCdcclxuICAgICAgPyAodGhpcy5lZGl0b3JJbnN0YW5jZSBhcyBJRWRpdG9yKS5nZXRNb2RlbCgpXHJcbiAgICAgIDogKHRoaXMuZWRpdG9ySW5zdGFuY2UgYXMgSURpZmZFZGl0b3IpLmdldE1vZGVsKCkhLm1vZGlmaWVkKSBhcyBJVGV4dE1vZGVsO1xyXG5cclxuICAgIG1vZGVsLm9uRGlkQ2hhbmdlQ29udGVudCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuZW1pdFZhbHVlKG1vZGVsLmdldFZhbHVlKCkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGVtaXRWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlT3B0aW9uVG9Nb25hY28oKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5lZGl0b3JJbnN0YW5jZSkge1xyXG4gICAgICB0aGlzLmVkaXRvckluc3RhbmNlLnVwZGF0ZU9wdGlvbnMoeyAuLi50aGlzLmVkaXRvck9wdGlvbkNhY2hlZCB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19
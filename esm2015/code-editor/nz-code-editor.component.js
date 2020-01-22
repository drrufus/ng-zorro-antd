/**
 * @fileoverview added by tsickle
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
export class NzCodeEditorComponent {
    /**
     * @param {?} nzCodeEditorService
     * @param {?} ngZone
     * @param {?} elementRef
     */
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
    /**
     * @param {?} value
     * @return {?}
     */
    set nzEditorOption(value) {
        this.editorOption$.next(value);
    }
    /**
     * Initialize a monaco editor instance.
     * @return {?}
     */
    ngAfterViewInit() {
        this.nzCodeEditorService.requestToInit().subscribe((/**
         * @param {?} option
         * @return {?}
         */
        option => this.setup(option)));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.editorInstance) {
            this.editorInstance.dispose();
        }
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
        this.setValue();
    }
    // tslint:disable-next-line no-any
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    // tslint:disable-next-line no-any
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    /**
     * @param {?} _value
     * @return {?}
     */
    onChange(_value) { }
    /**
     * @return {?}
     */
    onTouch() { }
    /**
     * @return {?}
     */
    layout() {
        this.resize$.next();
    }
    /**
     * @private
     * @param {?} option
     * @return {?}
     */
    setup(option) {
        inNextTick().subscribe((/**
         * @return {?}
         */
        () => {
            this.editorOptionCached = option;
            this.registerOptionChanges();
            this.initMonacoEditorInstance();
            this.registerResizeChange();
            this.setValue();
            if (!this.nzFullControl) {
                this.setValueEmitter();
            }
            this.nzEditorInitialized.emit(this.editorInstance);
        }));
    }
    /**
     * @private
     * @return {?}
     */
    registerOptionChanges() {
        combineLatest([this.editorOption$, this.nzCodeEditorService.option$])
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ([selfOpt, defaultOpt]) => {
            this.editorOptionCached = Object.assign({}, this.editorOptionCached, defaultOpt, selfOpt);
            this.updateOptionToMonaco();
        }));
    }
    /**
     * @private
     * @return {?}
     */
    initMonacoEditorInstance() {
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this.editorInstance =
                this.nzEditorMode === 'normal'
                    ? monaco.editor.create(this.el, Object.assign({}, this.editorOptionCached))
                    : monaco.editor.createDiffEditor(this.el, Object.assign({}, ((/** @type {?} */ (this.editorOptionCached)))));
        }));
    }
    /**
     * @private
     * @return {?}
     */
    registerResizeChange() {
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            fromEvent(window, 'resize')
                .pipe(debounceTime(300), takeUntil(this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            () => {
                this.layout();
            }));
            this.resize$
                .pipe(takeUntil(this.destroy$), filter((/**
             * @return {?}
             */
            () => !!this.editorInstance)), map((/**
             * @return {?}
             */
            () => ({
                width: this.el.clientWidth,
                height: this.el.clientHeight
            }))), distinctUntilChanged((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => a.width === b.width && a.height === b.height)), debounceTime(50))
                .subscribe((/**
             * @return {?}
             */
            () => {
                this.editorInstance.layout();
            }));
        }));
    }
    /**
     * @private
     * @return {?}
     */
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
                const model = (/** @type {?} */ (((/** @type {?} */ (this.editorInstance))).getModel()));
                model.modified.setValue(this.value);
                model.original.setValue(this.nzOriginalText);
            }
            else {
                /** @type {?} */
                const language = ((/** @type {?} */ (this.editorOptionCached))).language;
                ((/** @type {?} */ (this.editorInstance))).setModel({
                    original: monaco.editor.createModel(this.nzOriginalText, language),
                    modified: monaco.editor.createModel(this.value, language)
                });
                this.modelSet = true;
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    setValueEmitter() {
        /** @type {?} */
        const model = (/** @type {?} */ ((this.nzEditorMode === 'normal'
            ? ((/** @type {?} */ (this.editorInstance))).getModel()
            : (/** @type {?} */ (((/** @type {?} */ (this.editorInstance))).getModel())).modified)));
        model.onDidChangeContent((/**
         * @return {?}
         */
        () => {
            this.emitValue(model.getValue());
        }));
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    emitValue(value) {
        this.value = value;
        this.onChange(value);
    }
    /**
     * @private
     * @return {?}
     */
    updateOptionToMonaco() {
        if (this.editorInstance) {
            this.editorInstance.updateOptions(Object.assign({}, this.editorOptionCached));
        }
    }
}
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
                        () => NzCodeEditorComponent)),
                        multi: true
                    }
                ]
            }] }
];
/** @nocollapse */
NzCodeEditorComponent.ctorParameters = () => [
    { type: NzCodeEditorService },
    { type: NgZone },
    { type: ElementRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29kZS1lZGl0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb2RlLWVkaXRvci8iLCJzb3VyY2VzIjpbIm56LWNvZGUtZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsVUFBVSxFQUVWLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUVOLE1BQU0sRUFDTixXQUFXLEVBQ1gsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUUsT0FBTyxFQUFFLFlBQVksRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTVGLE9BQU8sRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3BFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBNEIvRCxNQUFNLE9BQU8scUJBQXFCOzs7Ozs7SUF1QmhDLFlBQW9CLG1CQUF3QyxFQUFVLE1BQWMsRUFBRSxVQUFzQjtRQUF4Rix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQXRCM0UsaUJBQVksR0FBaUIsUUFBUSxDQUFDO1FBQ3RDLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ0osY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQU81Qix3QkFBbUIsR0FBRyxJQUFJLFlBQVksRUFBeUIsQ0FBQztRQUVuRix1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QXFFOzs7OztJQUNyRSwrQ0FBOEM7Ozs7O0lBQzlDLHNDQUFtQjs7Ozs7SUFDbkIseUNBQXlCOzs7OztJQUViLG9EQUFnRDs7Ozs7SUFBRSx1Q0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgZm9yd2FyZFJlZixcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgT25EZXN0cm95LFxyXG4gIE91dHB1dCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgZnJvbUV2ZW50LCBCZWhhdmlvclN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBtYXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IGluTmV4dFRpY2ssIHdhcm4sIElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBEaWZmRWRpdG9yT3B0aW9ucywgRWRpdG9yT3B0aW9ucywgSm9pbmVkRWRpdG9yT3B0aW9ucywgTnpFZGl0b3JNb2RlIH0gZnJvbSAnLi9uei1jb2RlLWVkaXRvci5kZWZpbml0aW9ucyc7XHJcbmltcG9ydCB7IE56Q29kZUVkaXRvclNlcnZpY2UgfSBmcm9tICcuL256LWNvZGUtZWRpdG9yLnNlcnZpY2UnO1xyXG5cclxuLy8gSW1wb3J0IHR5cGVzIGZyb20gbW9uYWNvIGVkaXRvci5cclxuaW1wb3J0IHsgZWRpdG9yIH0gZnJvbSAnbW9uYWNvLWVkaXRvcic7XHJcbmltcG9ydCBJRWRpdG9yID0gZWRpdG9yLklFZGl0b3I7XHJcbmltcG9ydCBJRGlmZkVkaXRvciA9IGVkaXRvci5JRGlmZkVkaXRvcjtcclxuaW1wb3J0IElUZXh0TW9kZWwgPSBlZGl0b3IuSVRleHRNb2RlbDtcclxuXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1hbnlcclxuZGVjbGFyZSBjb25zdCBtb25hY286IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc2VsZWN0b3I6ICduei1jb2RlLWVkaXRvcicsXHJcbiAgZXhwb3J0QXM6ICduekNvZGVFZGl0b3InLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1jb2RlLWVkaXRvci5jb21wb25lbnQuaHRtbCcsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtY29kZS1lZGl0b3JdJzogJ3RydWUnXHJcbiAgfSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE56Q29kZUVkaXRvckNvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpDb2RlRWRpdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcclxuICBASW5wdXQoKSBuekVkaXRvck1vZGU6IE56RWRpdG9yTW9kZSA9ICdub3JtYWwnO1xyXG4gIEBJbnB1dCgpIG56T3JpZ2luYWxUZXh0ID0gJyc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56TG9hZGluZyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekZ1bGxDb250cm9sID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpUb29sa2l0OiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgQElucHV0KCkgc2V0IG56RWRpdG9yT3B0aW9uKHZhbHVlOiBKb2luZWRFZGl0b3JPcHRpb25zKSB7XHJcbiAgICB0aGlzLmVkaXRvck9wdGlvbiQubmV4dCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpFZGl0b3JJbml0aWFsaXplZCA9IG5ldyBFdmVudEVtaXR0ZXI8SUVkaXRvciB8IElEaWZmRWRpdG9yPigpO1xyXG5cclxuICBlZGl0b3JPcHRpb25DYWNoZWQ6IEpvaW5lZEVkaXRvck9wdGlvbnMgPSB7fTtcclxuXHJcbiAgcHJpdmF0ZSByZWFkb25seSBlbDogSFRNTEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgcHJpdmF0ZSByZXNpemUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBwcml2YXRlIGVkaXRvck9wdGlvbiQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEpvaW5lZEVkaXRvck9wdGlvbnM+KHt9KTtcclxuICBwcml2YXRlIGVkaXRvckluc3RhbmNlOiBJRWRpdG9yIHwgSURpZmZFZGl0b3I7XHJcbiAgcHJpdmF0ZSB2YWx1ZSA9ICcnO1xyXG4gIHByaXZhdGUgbW9kZWxTZXQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuekNvZGVFZGl0b3JTZXJ2aWNlOiBOekNvZGVFZGl0b3JTZXJ2aWNlLCBwcml2YXRlIG5nWm9uZTogTmdab25lLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XHJcbiAgICB0aGlzLmVsID0gZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW5pdGlhbGl6ZSBhIG1vbmFjbyBlZGl0b3IgaW5zdGFuY2UuXHJcbiAgICovXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5uekNvZGVFZGl0b3JTZXJ2aWNlLnJlcXVlc3RUb0luaXQoKS5zdWJzY3JpYmUob3B0aW9uID0+IHRoaXMuc2V0dXAob3B0aW9uKSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmVkaXRvckluc3RhbmNlKSB7XHJcbiAgICAgIHRoaXMuZWRpdG9ySW5zdGFuY2UuZGlzcG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLnNldFZhbHVlKCk7XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tYW55XHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQpOiBhbnkge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWFueVxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2UoX3ZhbHVlOiBzdHJpbmcpOiB2b2lkIHt9XHJcblxyXG4gIG9uVG91Y2goKTogdm9pZCB7fVxyXG5cclxuICBsYXlvdXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlc2l6ZSQubmV4dCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXR1cChvcHRpb246IEpvaW5lZEVkaXRvck9wdGlvbnMpOiB2b2lkIHtcclxuICAgIGluTmV4dFRpY2soKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmVkaXRvck9wdGlvbkNhY2hlZCA9IG9wdGlvbjtcclxuICAgICAgdGhpcy5yZWdpc3Rlck9wdGlvbkNoYW5nZXMoKTtcclxuICAgICAgdGhpcy5pbml0TW9uYWNvRWRpdG9ySW5zdGFuY2UoKTtcclxuICAgICAgdGhpcy5yZWdpc3RlclJlc2l6ZUNoYW5nZSgpO1xyXG4gICAgICB0aGlzLnNldFZhbHVlKCk7XHJcblxyXG4gICAgICBpZiAoIXRoaXMubnpGdWxsQ29udHJvbCkge1xyXG4gICAgICAgIHRoaXMuc2V0VmFsdWVFbWl0dGVyKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMubnpFZGl0b3JJbml0aWFsaXplZC5lbWl0KHRoaXMuZWRpdG9ySW5zdGFuY2UpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlZ2lzdGVyT3B0aW9uQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIGNvbWJpbmVMYXRlc3QoW3RoaXMuZWRpdG9yT3B0aW9uJCwgdGhpcy5uekNvZGVFZGl0b3JTZXJ2aWNlLm9wdGlvbiRdKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKFtzZWxmT3B0LCBkZWZhdWx0T3B0XSkgPT4ge1xyXG4gICAgICAgIHRoaXMuZWRpdG9yT3B0aW9uQ2FjaGVkID0ge1xyXG4gICAgICAgICAgLi4udGhpcy5lZGl0b3JPcHRpb25DYWNoZWQsXHJcbiAgICAgICAgICAuLi5kZWZhdWx0T3B0LFxyXG4gICAgICAgICAgLi4uc2VsZk9wdFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy51cGRhdGVPcHRpb25Ub01vbmFjbygpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdE1vbmFjb0VkaXRvckluc3RhbmNlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICB0aGlzLmVkaXRvckluc3RhbmNlID1cclxuICAgICAgICB0aGlzLm56RWRpdG9yTW9kZSA9PT0gJ25vcm1hbCdcclxuICAgICAgICAgID8gbW9uYWNvLmVkaXRvci5jcmVhdGUodGhpcy5lbCwgeyAuLi50aGlzLmVkaXRvck9wdGlvbkNhY2hlZCB9KVxyXG4gICAgICAgICAgOiBtb25hY28uZWRpdG9yLmNyZWF0ZURpZmZFZGl0b3IodGhpcy5lbCwge1xyXG4gICAgICAgICAgICAgIC4uLih0aGlzLmVkaXRvck9wdGlvbkNhY2hlZCBhcyBEaWZmRWRpdG9yT3B0aW9ucylcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVnaXN0ZXJSZXNpemVDaGFuZ2UoKTogdm9pZCB7XHJcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgIGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKVxyXG4gICAgICAgIC5waXBlKGRlYm91bmNlVGltZSgzMDApLCB0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmxheW91dCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5yZXNpemUkXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXHJcbiAgICAgICAgICBmaWx0ZXIoKCkgPT4gISF0aGlzLmVkaXRvckluc3RhbmNlKSxcclxuICAgICAgICAgIG1hcCgoKSA9PiAoe1xyXG4gICAgICAgICAgICB3aWR0aDogdGhpcy5lbC5jbGllbnRXaWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmVsLmNsaWVudEhlaWdodFxyXG4gICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKGEsIGIpID0+IGEud2lkdGggPT09IGIud2lkdGggJiYgYS5oZWlnaHQgPT09IGIuaGVpZ2h0KSxcclxuICAgICAgICAgIGRlYm91bmNlVGltZSg1MClcclxuICAgICAgICApXHJcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmVkaXRvckluc3RhbmNlLmxheW91dCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFZhbHVlKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmVkaXRvckluc3RhbmNlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5uekZ1bGxDb250cm9sICYmIHRoaXMudmFsdWUpIHtcclxuICAgICAgd2Fybihgc2hvdWxkIG5vdCBzZXQgdmFsdWUgd2hlbiB5b3UgYXJlIHVzaW5nIGZ1bGwgY29udHJvbCBtb2RlISBJdCB3b3VsZCByZXN1bHQgaW4gYW1iaWd1b3VzIGRhdGEgZmxvdyFgKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLm56RWRpdG9yTW9kZSA9PT0gJ25vcm1hbCcpIHtcclxuICAgICAgaWYgKHRoaXMubW9kZWxTZXQpIHtcclxuICAgICAgICAodGhpcy5lZGl0b3JJbnN0YW5jZS5nZXRNb2RlbCgpIGFzIElUZXh0TW9kZWwpLnNldFZhbHVlKHRoaXMudmFsdWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICh0aGlzLmVkaXRvckluc3RhbmNlIGFzIElFZGl0b3IpLnNldE1vZGVsKFxyXG4gICAgICAgICAgbW9uYWNvLmVkaXRvci5jcmVhdGVNb2RlbCh0aGlzLnZhbHVlLCAodGhpcy5lZGl0b3JPcHRpb25DYWNoZWQgYXMgRWRpdG9yT3B0aW9ucykubGFuZ3VhZ2UpXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLm1vZGVsU2V0ID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMubW9kZWxTZXQpIHtcclxuICAgICAgICBjb25zdCBtb2RlbCA9ICh0aGlzLmVkaXRvckluc3RhbmNlIGFzIElEaWZmRWRpdG9yKS5nZXRNb2RlbCgpITtcclxuICAgICAgICBtb2RlbC5tb2RpZmllZC5zZXRWYWx1ZSh0aGlzLnZhbHVlKTtcclxuICAgICAgICBtb2RlbC5vcmlnaW5hbC5zZXRWYWx1ZSh0aGlzLm56T3JpZ2luYWxUZXh0KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBsYW5ndWFnZSA9ICh0aGlzLmVkaXRvck9wdGlvbkNhY2hlZCBhcyBFZGl0b3JPcHRpb25zKS5sYW5ndWFnZTtcclxuICAgICAgICAodGhpcy5lZGl0b3JJbnN0YW5jZSBhcyBJRGlmZkVkaXRvcikuc2V0TW9kZWwoe1xyXG4gICAgICAgICAgb3JpZ2luYWw6IG1vbmFjby5lZGl0b3IuY3JlYXRlTW9kZWwodGhpcy5uek9yaWdpbmFsVGV4dCwgbGFuZ3VhZ2UpLFxyXG4gICAgICAgICAgbW9kaWZpZWQ6IG1vbmFjby5lZGl0b3IuY3JlYXRlTW9kZWwodGhpcy52YWx1ZSwgbGFuZ3VhZ2UpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5tb2RlbFNldCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0VmFsdWVFbWl0dGVyKCk6IHZvaWQge1xyXG4gICAgY29uc3QgbW9kZWwgPSAodGhpcy5uekVkaXRvck1vZGUgPT09ICdub3JtYWwnXHJcbiAgICAgID8gKHRoaXMuZWRpdG9ySW5zdGFuY2UgYXMgSUVkaXRvcikuZ2V0TW9kZWwoKVxyXG4gICAgICA6ICh0aGlzLmVkaXRvckluc3RhbmNlIGFzIElEaWZmRWRpdG9yKS5nZXRNb2RlbCgpIS5tb2RpZmllZCkgYXMgSVRleHRNb2RlbDtcclxuXHJcbiAgICBtb2RlbC5vbkRpZENoYW5nZUNvbnRlbnQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmVtaXRWYWx1ZShtb2RlbC5nZXRWYWx1ZSgpKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBlbWl0VmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZU9wdGlvblRvTW9uYWNvKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZWRpdG9ySW5zdGFuY2UpIHtcclxuICAgICAgdGhpcy5lZGl0b3JJbnN0YW5jZS51cGRhdGVPcHRpb25zKHsgLi4udGhpcy5lZGl0b3JPcHRpb25DYWNoZWQgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==
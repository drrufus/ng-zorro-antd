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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29kZS1lZGl0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb2RlLWVkaXRvci8iLCJzb3VyY2VzIjpbIm56LWNvZGUtZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLFVBQVUsRUFFVix1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFFTixNQUFNLEVBQ04sV0FBVyxFQUNYLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1RixPQUFPLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUdwRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQTRCL0QsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7O0lBdUJoQyxZQUFvQixtQkFBd0MsRUFBVSxNQUFjLEVBQUUsVUFBc0I7UUFBeEYsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUF0QjNFLGlCQUFZLEdBQWlCLFFBQVEsQ0FBQztRQUN0QyxtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUNKLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFPNUIsd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQXlCLENBQUM7UUFFbkYs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QUFxRTs7Ozs7SUFDckUsK0NBQThDOzs7OztJQUM5QyxzQ0FBbUI7Ozs7O0lBQ25CLHlDQUF5Qjs7Ozs7SUFFYixvREFBZ0Q7Ozs7O0lBQUUsdUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIGZvcndhcmRSZWYsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE9uRGVzdHJveSxcclxuICBPdXRwdXQsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIGZyb21FdmVudCwgQmVoYXZpb3JTdWJqZWN0LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgbWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBpbk5leHRUaWNrLCB3YXJuLCBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRGlmZkVkaXRvck9wdGlvbnMsIEVkaXRvck9wdGlvbnMsIEpvaW5lZEVkaXRvck9wdGlvbnMsIE56RWRpdG9yTW9kZSB9IGZyb20gJy4vbnotY29kZS1lZGl0b3IuZGVmaW5pdGlvbnMnO1xyXG5pbXBvcnQgeyBOekNvZGVFZGl0b3JTZXJ2aWNlIH0gZnJvbSAnLi9uei1jb2RlLWVkaXRvci5zZXJ2aWNlJztcclxuXHJcbi8vIEltcG9ydCB0eXBlcyBmcm9tIG1vbmFjbyBlZGl0b3IuXHJcbmltcG9ydCB7IGVkaXRvciB9IGZyb20gJ21vbmFjby1lZGl0b3InO1xyXG5pbXBvcnQgSUVkaXRvciA9IGVkaXRvci5JRWRpdG9yO1xyXG5pbXBvcnQgSURpZmZFZGl0b3IgPSBlZGl0b3IuSURpZmZFZGl0b3I7XHJcbmltcG9ydCBJVGV4dE1vZGVsID0gZWRpdG9yLklUZXh0TW9kZWw7XHJcblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tYW55XHJcbmRlY2xhcmUgY29uc3QgbW9uYWNvOiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHNlbGVjdG9yOiAnbnotY29kZS1lZGl0b3InLFxyXG4gIGV4cG9ydEFzOiAnbnpDb2RlRWRpdG9yJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotY29kZS1lZGl0b3IuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LWNvZGUtZWRpdG9yXSc6ICd0cnVlJ1xyXG4gIH0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOekNvZGVFZGl0b3JDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56Q29kZUVkaXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQElucHV0KCkgbnpFZGl0b3JNb2RlOiBOekVkaXRvck1vZGUgPSAnbm9ybWFsJztcclxuICBASW5wdXQoKSBuek9yaWdpbmFsVGV4dCA9ICcnO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekxvYWRpbmcgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpGdWxsQ29udHJvbCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56VG9vbGtpdDogVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIEBJbnB1dCgpIHNldCBuekVkaXRvck9wdGlvbih2YWx1ZTogSm9pbmVkRWRpdG9yT3B0aW9ucykge1xyXG4gICAgdGhpcy5lZGl0b3JPcHRpb24kLm5leHQodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56RWRpdG9ySW5pdGlhbGl6ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPElFZGl0b3IgfCBJRGlmZkVkaXRvcj4oKTtcclxuXHJcbiAgZWRpdG9yT3B0aW9uQ2FjaGVkOiBKb2luZWRFZGl0b3JPcHRpb25zID0ge307XHJcblxyXG4gIHByaXZhdGUgcmVhZG9ubHkgZWw6IEhUTUxFbGVtZW50O1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIHByaXZhdGUgcmVzaXplJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgcHJpdmF0ZSBlZGl0b3JPcHRpb24kID0gbmV3IEJlaGF2aW9yU3ViamVjdDxKb2luZWRFZGl0b3JPcHRpb25zPih7fSk7XHJcbiAgcHJpdmF0ZSBlZGl0b3JJbnN0YW5jZTogSUVkaXRvciB8IElEaWZmRWRpdG9yO1xyXG4gIHByaXZhdGUgdmFsdWUgPSAnJztcclxuICBwcml2YXRlIG1vZGVsU2V0ID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbnpDb2RlRWRpdG9yU2VydmljZTogTnpDb2RlRWRpdG9yU2VydmljZSwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSwgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xyXG4gICAgdGhpcy5lbCA9IGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemUgYSBtb25hY28gZWRpdG9yIGluc3RhbmNlLlxyXG4gICAqL1xyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMubnpDb2RlRWRpdG9yU2VydmljZS5yZXF1ZXN0VG9Jbml0KCkuc3Vic2NyaWJlKG9wdGlvbiA9PiB0aGlzLnNldHVwKG9wdGlvbikpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5lZGl0b3JJbnN0YW5jZSkge1xyXG4gICAgICB0aGlzLmVkaXRvckluc3RhbmNlLmRpc3Bvc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5zZXRWYWx1ZSgpO1xyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWFueVxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkKTogYW55IHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1hbnlcclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2ggPSBmbjtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlKF92YWx1ZTogc3RyaW5nKTogdm9pZCB7fVxyXG5cclxuICBvblRvdWNoKCk6IHZvaWQge31cclxuXHJcbiAgbGF5b3V0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZXNpemUkLm5leHQoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0dXAob3B0aW9uOiBKb2luZWRFZGl0b3JPcHRpb25zKTogdm9pZCB7XHJcbiAgICBpbk5leHRUaWNrKCkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5lZGl0b3JPcHRpb25DYWNoZWQgPSBvcHRpb247XHJcbiAgICAgIHRoaXMucmVnaXN0ZXJPcHRpb25DaGFuZ2VzKCk7XHJcbiAgICAgIHRoaXMuaW5pdE1vbmFjb0VkaXRvckluc3RhbmNlKCk7XHJcbiAgICAgIHRoaXMucmVnaXN0ZXJSZXNpemVDaGFuZ2UoKTtcclxuICAgICAgdGhpcy5zZXRWYWx1ZSgpO1xyXG5cclxuICAgICAgaWYgKCF0aGlzLm56RnVsbENvbnRyb2wpIHtcclxuICAgICAgICB0aGlzLnNldFZhbHVlRW1pdHRlcigpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLm56RWRpdG9ySW5pdGlhbGl6ZWQuZW1pdCh0aGlzLmVkaXRvckluc3RhbmNlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZWdpc3Rlck9wdGlvbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICBjb21iaW5lTGF0ZXN0KFt0aGlzLmVkaXRvck9wdGlvbiQsIHRoaXMubnpDb2RlRWRpdG9yU2VydmljZS5vcHRpb24kXSlcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAuc3Vic2NyaWJlKChbc2VsZk9wdCwgZGVmYXVsdE9wdF0pID0+IHtcclxuICAgICAgICB0aGlzLmVkaXRvck9wdGlvbkNhY2hlZCA9IHtcclxuICAgICAgICAgIC4uLnRoaXMuZWRpdG9yT3B0aW9uQ2FjaGVkLFxyXG4gICAgICAgICAgLi4uZGVmYXVsdE9wdCxcclxuICAgICAgICAgIC4uLnNlbGZPcHRcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMudXBkYXRlT3B0aW9uVG9Nb25hY28oKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRNb25hY29FZGl0b3JJbnN0YW5jZSgpOiB2b2lkIHtcclxuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgdGhpcy5lZGl0b3JJbnN0YW5jZSA9XHJcbiAgICAgICAgdGhpcy5uekVkaXRvck1vZGUgPT09ICdub3JtYWwnXHJcbiAgICAgICAgICA/IG1vbmFjby5lZGl0b3IuY3JlYXRlKHRoaXMuZWwsIHsgLi4udGhpcy5lZGl0b3JPcHRpb25DYWNoZWQgfSlcclxuICAgICAgICAgIDogbW9uYWNvLmVkaXRvci5jcmVhdGVEaWZmRWRpdG9yKHRoaXMuZWwsIHtcclxuICAgICAgICAgICAgICAuLi4odGhpcy5lZGl0b3JPcHRpb25DYWNoZWQgYXMgRGlmZkVkaXRvck9wdGlvbnMpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlZ2lzdGVyUmVzaXplQ2hhbmdlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJylcclxuICAgICAgICAucGlwZShkZWJvdW5jZVRpbWUoMzAwKSwgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5sYXlvdXQoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMucmVzaXplJFxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxyXG4gICAgICAgICAgZmlsdGVyKCgpID0+ICEhdGhpcy5lZGl0b3JJbnN0YW5jZSksXHJcbiAgICAgICAgICBtYXAoKCkgPT4gKHtcclxuICAgICAgICAgICAgd2lkdGg6IHRoaXMuZWwuY2xpZW50V2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5lbC5jbGllbnRIZWlnaHRcclxuICAgICAgICAgIH0pKSxcclxuICAgICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKChhLCBiKSA9PiBhLndpZHRoID09PSBiLndpZHRoICYmIGEuaGVpZ2h0ID09PSBiLmhlaWdodCksXHJcbiAgICAgICAgICBkZWJvdW5jZVRpbWUoNTApXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5lZGl0b3JJbnN0YW5jZS5sYXlvdXQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRWYWx1ZSgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5lZGl0b3JJbnN0YW5jZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMubnpGdWxsQ29udHJvbCAmJiB0aGlzLnZhbHVlKSB7XHJcbiAgICAgIHdhcm4oYHNob3VsZCBub3Qgc2V0IHZhbHVlIHdoZW4geW91IGFyZSB1c2luZyBmdWxsIGNvbnRyb2wgbW9kZSEgSXQgd291bGQgcmVzdWx0IGluIGFtYmlndW91cyBkYXRhIGZsb3chYCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5uekVkaXRvck1vZGUgPT09ICdub3JtYWwnKSB7XHJcbiAgICAgIGlmICh0aGlzLm1vZGVsU2V0KSB7XHJcbiAgICAgICAgKHRoaXMuZWRpdG9ySW5zdGFuY2UuZ2V0TW9kZWwoKSBhcyBJVGV4dE1vZGVsKS5zZXRWYWx1ZSh0aGlzLnZhbHVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAodGhpcy5lZGl0b3JJbnN0YW5jZSBhcyBJRWRpdG9yKS5zZXRNb2RlbChcclxuICAgICAgICAgIG1vbmFjby5lZGl0b3IuY3JlYXRlTW9kZWwodGhpcy52YWx1ZSwgKHRoaXMuZWRpdG9yT3B0aW9uQ2FjaGVkIGFzIEVkaXRvck9wdGlvbnMpLmxhbmd1YWdlKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5tb2RlbFNldCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLm1vZGVsU2V0KSB7XHJcbiAgICAgICAgY29uc3QgbW9kZWwgPSAodGhpcy5lZGl0b3JJbnN0YW5jZSBhcyBJRGlmZkVkaXRvcikuZ2V0TW9kZWwoKSE7XHJcbiAgICAgICAgbW9kZWwubW9kaWZpZWQuc2V0VmFsdWUodGhpcy52YWx1ZSk7XHJcbiAgICAgICAgbW9kZWwub3JpZ2luYWwuc2V0VmFsdWUodGhpcy5uek9yaWdpbmFsVGV4dCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgbGFuZ3VhZ2UgPSAodGhpcy5lZGl0b3JPcHRpb25DYWNoZWQgYXMgRWRpdG9yT3B0aW9ucykubGFuZ3VhZ2U7XHJcbiAgICAgICAgKHRoaXMuZWRpdG9ySW5zdGFuY2UgYXMgSURpZmZFZGl0b3IpLnNldE1vZGVsKHtcclxuICAgICAgICAgIG9yaWdpbmFsOiBtb25hY28uZWRpdG9yLmNyZWF0ZU1vZGVsKHRoaXMubnpPcmlnaW5hbFRleHQsIGxhbmd1YWdlKSxcclxuICAgICAgICAgIG1vZGlmaWVkOiBtb25hY28uZWRpdG9yLmNyZWF0ZU1vZGVsKHRoaXMudmFsdWUsIGxhbmd1YWdlKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubW9kZWxTZXQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFZhbHVlRW1pdHRlcigpOiB2b2lkIHtcclxuICAgIGNvbnN0IG1vZGVsID0gKHRoaXMubnpFZGl0b3JNb2RlID09PSAnbm9ybWFsJ1xyXG4gICAgICA/ICh0aGlzLmVkaXRvckluc3RhbmNlIGFzIElFZGl0b3IpLmdldE1vZGVsKClcclxuICAgICAgOiAodGhpcy5lZGl0b3JJbnN0YW5jZSBhcyBJRGlmZkVkaXRvcikuZ2V0TW9kZWwoKSEubW9kaWZpZWQpIGFzIElUZXh0TW9kZWw7XHJcblxyXG4gICAgbW9kZWwub25EaWRDaGFuZ2VDb250ZW50KCgpID0+IHtcclxuICAgICAgdGhpcy5lbWl0VmFsdWUobW9kZWwuZ2V0VmFsdWUoKSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZW1pdFZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVPcHRpb25Ub01vbmFjbygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmVkaXRvckluc3RhbmNlKSB7XHJcbiAgICAgIHRoaXMuZWRpdG9ySW5zdGFuY2UudXBkYXRlT3B0aW9ucyh7IC4uLnRoaXMuZWRpdG9yT3B0aW9uQ2FjaGVkIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=
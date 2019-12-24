import { __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, forwardRef, Input, NgZone, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject, combineLatest, fromEvent, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, takeUntil } from 'rxjs/operators';
import { inNextTick, InputBoolean, warn } from 'ng-zorro-antd/core';
import { NzCodeEditorService } from './nz-code-editor.service';
import * as i0 from "@angular/core";
import * as i1 from "./nz-code-editor.service";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/spin";
function NzCodeEditorComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelement(1, "nz-spin");
    i0.ɵɵelementEnd();
} }
function NzCodeEditorComponent_div_1_ng_template_1_Template(rf, ctx) { }
function NzCodeEditorComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtemplate(1, NzCodeEditorComponent_div_1_ng_template_1_Template, 0, 0, "ng-template", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1029 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1029.nzToolkit);
} }
export class NzCodeEditorComponent {
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
/** @nocollapse */ NzCodeEditorComponent.ɵfac = function NzCodeEditorComponent_Factory(t) { return new (t || NzCodeEditorComponent)(i0.ɵɵdirectiveInject(i1.NzCodeEditorService), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ElementRef)); };
/** @nocollapse */ NzCodeEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzCodeEditorComponent, selectors: [["nz-code-editor"]], hostBindings: function NzCodeEditorComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        i0.ɵɵallocHostVars(1);
    } if (rf & 2) {
        i0.ɵɵclassProp("ant-code-editor", true);
    } }, inputs: { nzEditorMode: "nzEditorMode", nzOriginalText: "nzOriginalText", nzLoading: "nzLoading", nzFullControl: "nzFullControl", nzToolkit: "nzToolkit", nzEditorOption: "nzEditorOption" }, outputs: { nzEditorInitialized: "nzEditorInitialized" }, exportAs: ["nzCodeEditor"], features: [i0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef((() => NzCodeEditorComponent)),
                multi: true
            }
        ])], decls: 2, vars: 2, consts: [["class", "ant-code-editor-loading", 4, "ngIf"], ["class", "ant-code-editor-toolkit", 4, "ngIf"], [1, "ant-code-editor-loading"], [1, "ant-code-editor-toolkit"], [3, "ngTemplateOutlet"]], template: function NzCodeEditorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, NzCodeEditorComponent_div_0_Template, 2, 0, "div", 0);
        i0.ɵɵtemplate(1, NzCodeEditorComponent_div_1_Template, 2, 1, "div", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.nzLoading);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.nzToolkit);
    } }, directives: [i2.NgIf, i3.NzSpinComponent, i2.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzCodeEditorComponent.prototype, "nzLoading", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzCodeEditorComponent.prototype, "nzFullControl", void 0);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzCodeEditorComponent, [{
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
    }], function () { return [{ type: i1.NzCodeEditorService }, { type: i0.NgZone }, { type: i0.ElementRef }]; }, { nzEditorMode: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29kZS1lZGl0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb2RlLWVkaXRvci8iLCJzb3VyY2VzIjpbIm56LWNvZGUtZWRpdG9yLmNvbXBvbmVudC50cyIsIm56LWNvZGUtZWRpdG9yLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUVOLE1BQU0sRUFDTixXQUFXLEVBQ1gsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUUsT0FBTyxFQUFFLFlBQVksRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTVGLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3BFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7SUM3Qi9ELDhCQUNFO0lBQUEsMEJBQW1CO0lBQ3JCLGlCQUFNOzs7O0lBRU4sOEJBQ0U7SUFBQSw0RkFBNEM7SUFDOUMsaUJBQU07OztJQURTLGVBQThCO0lBQTlCLHNEQUE4Qjs7QURvRDdDLE1BQU0sT0FBTyxxQkFBcUI7SUF1QmhDLFlBQW9CLG1CQUF3QyxFQUFVLE1BQWMsRUFBRSxVQUFzQjtRQUF4Rix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQXRCM0UsaUJBQVksR0FB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O1lBQ3ZCLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxtQkFBTSxJQUFJLENBQUMsa0JBQWtCLEVBQUcsQ0FBQztTQUNuRTtJQUNILENBQUM7OzBGQXhMVSxxQkFBcUI7MERBQXJCLHFCQUFxQjs7Ozs2VEFSckI7WUFDVDtnQkFDRSxPQUFPLEVBQUUsaUJBQWlCO2dCQUMxQixXQUFXLEVBQUUsVUFBVSxFQUFDLEdBQUcsRUFBRSxDQUFDLHFCQUFxQixFQUFDO2dCQUNwRCxLQUFLLEVBQUUsSUFBSTthQUNaO1NBQ0Y7UUN2REgsc0VBQ0U7UUFHRixzRUFDRTs7UUFMbUMsb0NBQWlCO1FBSWpCLGVBQWlCO1FBQWpCLG9DQUFpQjs7QUR3RDNCO0lBQWYsWUFBWSxFQUFFOzt3REFBbUI7QUFDbEI7SUFBZixZQUFZLEVBQUU7OzREQUF1QjtrREFKcEMscUJBQXFCO2NBakJqQyxTQUFTO2VBQUM7Z0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUUsY0FBYztnQkFDeEIsV0FBVyxFQUFFLGlDQUFpQztnQkFDOUMsSUFBSSxFQUFFO29CQUNKLHlCQUF5QixFQUFFLE1BQU07aUJBQ2xDO2dCQUNELFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVSxFQUFDLEdBQUcsRUFBRSxDQUFDLHFCQUFxQixFQUFDO3dCQUNwRCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjthQUNGOztrQkFFRSxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFFTCxLQUFLOztrQkFJTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE9uRGVzdHJveSxcclxuICBPdXRwdXQsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgY29tYmluZUxhdGVzdCwgZnJvbUV2ZW50LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgbWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBpbk5leHRUaWNrLCBJbnB1dEJvb2xlYW4sIHdhcm4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRGlmZkVkaXRvck9wdGlvbnMsIEVkaXRvck9wdGlvbnMsIEpvaW5lZEVkaXRvck9wdGlvbnMsIE56RWRpdG9yTW9kZSB9IGZyb20gJy4vbnotY29kZS1lZGl0b3IuZGVmaW5pdGlvbnMnO1xyXG5pbXBvcnQgeyBOekNvZGVFZGl0b3JTZXJ2aWNlIH0gZnJvbSAnLi9uei1jb2RlLWVkaXRvci5zZXJ2aWNlJztcclxuXHJcbi8vIEltcG9ydCB0eXBlcyBmcm9tIG1vbmFjbyBlZGl0b3IuXHJcbmltcG9ydCB7IGVkaXRvciB9IGZyb20gJ21vbmFjby1lZGl0b3InO1xyXG5pbXBvcnQgSUVkaXRvciA9IGVkaXRvci5JRWRpdG9yO1xyXG5pbXBvcnQgSURpZmZFZGl0b3IgPSBlZGl0b3IuSURpZmZFZGl0b3I7XHJcbmltcG9ydCBJVGV4dE1vZGVsID0gZWRpdG9yLklUZXh0TW9kZWw7XHJcblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tYW55XHJcbmRlY2xhcmUgY29uc3QgbW9uYWNvOiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHNlbGVjdG9yOiAnbnotY29kZS1lZGl0b3InLFxyXG4gIGV4cG9ydEFzOiAnbnpDb2RlRWRpdG9yJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotY29kZS1lZGl0b3IuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LWNvZGUtZWRpdG9yXSc6ICd0cnVlJ1xyXG4gIH0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOekNvZGVFZGl0b3JDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56Q29kZUVkaXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQElucHV0KCkgbnpFZGl0b3JNb2RlOiBOekVkaXRvck1vZGUgPSAnbm9ybWFsJztcclxuICBASW5wdXQoKSBuek9yaWdpbmFsVGV4dCA9ICcnO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekxvYWRpbmcgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpGdWxsQ29udHJvbCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56VG9vbGtpdDogVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIEBJbnB1dCgpIHNldCBuekVkaXRvck9wdGlvbih2YWx1ZTogSm9pbmVkRWRpdG9yT3B0aW9ucykge1xyXG4gICAgdGhpcy5lZGl0b3JPcHRpb24kLm5leHQodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56RWRpdG9ySW5pdGlhbGl6ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPElFZGl0b3IgfCBJRGlmZkVkaXRvcj4oKTtcclxuXHJcbiAgZWRpdG9yT3B0aW9uQ2FjaGVkOiBKb2luZWRFZGl0b3JPcHRpb25zID0ge307XHJcblxyXG4gIHByaXZhdGUgcmVhZG9ubHkgZWw6IEhUTUxFbGVtZW50O1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIHByaXZhdGUgcmVzaXplJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgcHJpdmF0ZSBlZGl0b3JPcHRpb24kID0gbmV3IEJlaGF2aW9yU3ViamVjdDxKb2luZWRFZGl0b3JPcHRpb25zPih7fSk7XHJcbiAgcHJpdmF0ZSBlZGl0b3JJbnN0YW5jZTogSUVkaXRvciB8IElEaWZmRWRpdG9yO1xyXG4gIHByaXZhdGUgdmFsdWUgPSAnJztcclxuICBwcml2YXRlIG1vZGVsU2V0ID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbnpDb2RlRWRpdG9yU2VydmljZTogTnpDb2RlRWRpdG9yU2VydmljZSwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSwgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xyXG4gICAgdGhpcy5lbCA9IGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemUgYSBtb25hY28gZWRpdG9yIGluc3RhbmNlLlxyXG4gICAqL1xyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMubnpDb2RlRWRpdG9yU2VydmljZS5yZXF1ZXN0VG9Jbml0KCkuc3Vic2NyaWJlKG9wdGlvbiA9PiB0aGlzLnNldHVwKG9wdGlvbikpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5lZGl0b3JJbnN0YW5jZSkge1xyXG4gICAgICB0aGlzLmVkaXRvckluc3RhbmNlLmRpc3Bvc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5zZXRWYWx1ZSgpO1xyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWFueVxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkKTogYW55IHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1hbnlcclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2ggPSBmbjtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlKF92YWx1ZTogc3RyaW5nKTogdm9pZCB7fVxyXG5cclxuICBvblRvdWNoKCk6IHZvaWQge31cclxuXHJcbiAgbGF5b3V0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZXNpemUkLm5leHQoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0dXAob3B0aW9uOiBKb2luZWRFZGl0b3JPcHRpb25zKTogdm9pZCB7XHJcbiAgICBpbk5leHRUaWNrKCkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5lZGl0b3JPcHRpb25DYWNoZWQgPSBvcHRpb247XHJcbiAgICAgIHRoaXMucmVnaXN0ZXJPcHRpb25DaGFuZ2VzKCk7XHJcbiAgICAgIHRoaXMuaW5pdE1vbmFjb0VkaXRvckluc3RhbmNlKCk7XHJcbiAgICAgIHRoaXMucmVnaXN0ZXJSZXNpemVDaGFuZ2UoKTtcclxuICAgICAgdGhpcy5zZXRWYWx1ZSgpO1xyXG5cclxuICAgICAgaWYgKCF0aGlzLm56RnVsbENvbnRyb2wpIHtcclxuICAgICAgICB0aGlzLnNldFZhbHVlRW1pdHRlcigpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLm56RWRpdG9ySW5pdGlhbGl6ZWQuZW1pdCh0aGlzLmVkaXRvckluc3RhbmNlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZWdpc3Rlck9wdGlvbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICBjb21iaW5lTGF0ZXN0KFt0aGlzLmVkaXRvck9wdGlvbiQsIHRoaXMubnpDb2RlRWRpdG9yU2VydmljZS5vcHRpb24kXSlcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAuc3Vic2NyaWJlKChbc2VsZk9wdCwgZGVmYXVsdE9wdF0pID0+IHtcclxuICAgICAgICB0aGlzLmVkaXRvck9wdGlvbkNhY2hlZCA9IHtcclxuICAgICAgICAgIC4uLnRoaXMuZWRpdG9yT3B0aW9uQ2FjaGVkLFxyXG4gICAgICAgICAgLi4uZGVmYXVsdE9wdCxcclxuICAgICAgICAgIC4uLnNlbGZPcHRcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMudXBkYXRlT3B0aW9uVG9Nb25hY28oKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRNb25hY29FZGl0b3JJbnN0YW5jZSgpOiB2b2lkIHtcclxuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgdGhpcy5lZGl0b3JJbnN0YW5jZSA9XHJcbiAgICAgICAgdGhpcy5uekVkaXRvck1vZGUgPT09ICdub3JtYWwnXHJcbiAgICAgICAgICA/IG1vbmFjby5lZGl0b3IuY3JlYXRlKHRoaXMuZWwsIHsgLi4udGhpcy5lZGl0b3JPcHRpb25DYWNoZWQgfSlcclxuICAgICAgICAgIDogbW9uYWNvLmVkaXRvci5jcmVhdGVEaWZmRWRpdG9yKHRoaXMuZWwsIHtcclxuICAgICAgICAgICAgICAuLi4odGhpcy5lZGl0b3JPcHRpb25DYWNoZWQgYXMgRGlmZkVkaXRvck9wdGlvbnMpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlZ2lzdGVyUmVzaXplQ2hhbmdlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJylcclxuICAgICAgICAucGlwZShkZWJvdW5jZVRpbWUoMzAwKSwgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5sYXlvdXQoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMucmVzaXplJFxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxyXG4gICAgICAgICAgZmlsdGVyKCgpID0+ICEhdGhpcy5lZGl0b3JJbnN0YW5jZSksXHJcbiAgICAgICAgICBtYXAoKCkgPT4gKHtcclxuICAgICAgICAgICAgd2lkdGg6IHRoaXMuZWwuY2xpZW50V2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5lbC5jbGllbnRIZWlnaHRcclxuICAgICAgICAgIH0pKSxcclxuICAgICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKChhLCBiKSA9PiBhLndpZHRoID09PSBiLndpZHRoICYmIGEuaGVpZ2h0ID09PSBiLmhlaWdodCksXHJcbiAgICAgICAgICBkZWJvdW5jZVRpbWUoNTApXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5lZGl0b3JJbnN0YW5jZS5sYXlvdXQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRWYWx1ZSgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5lZGl0b3JJbnN0YW5jZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMubnpGdWxsQ29udHJvbCAmJiB0aGlzLnZhbHVlKSB7XHJcbiAgICAgIHdhcm4oYHNob3VsZCBub3Qgc2V0IHZhbHVlIHdoZW4geW91IGFyZSB1c2luZyBmdWxsIGNvbnRyb2wgbW9kZSEgSXQgd291bGQgcmVzdWx0IGluIGFtYmlndW91cyBkYXRhIGZsb3chYCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5uekVkaXRvck1vZGUgPT09ICdub3JtYWwnKSB7XHJcbiAgICAgIGlmICh0aGlzLm1vZGVsU2V0KSB7XHJcbiAgICAgICAgKHRoaXMuZWRpdG9ySW5zdGFuY2UuZ2V0TW9kZWwoKSBhcyBJVGV4dE1vZGVsKS5zZXRWYWx1ZSh0aGlzLnZhbHVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAodGhpcy5lZGl0b3JJbnN0YW5jZSBhcyBJRWRpdG9yKS5zZXRNb2RlbChcclxuICAgICAgICAgIG1vbmFjby5lZGl0b3IuY3JlYXRlTW9kZWwodGhpcy52YWx1ZSwgKHRoaXMuZWRpdG9yT3B0aW9uQ2FjaGVkIGFzIEVkaXRvck9wdGlvbnMpLmxhbmd1YWdlKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5tb2RlbFNldCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLm1vZGVsU2V0KSB7XHJcbiAgICAgICAgY29uc3QgbW9kZWwgPSAodGhpcy5lZGl0b3JJbnN0YW5jZSBhcyBJRGlmZkVkaXRvcikuZ2V0TW9kZWwoKSE7XHJcbiAgICAgICAgbW9kZWwubW9kaWZpZWQuc2V0VmFsdWUodGhpcy52YWx1ZSk7XHJcbiAgICAgICAgbW9kZWwub3JpZ2luYWwuc2V0VmFsdWUodGhpcy5uek9yaWdpbmFsVGV4dCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgbGFuZ3VhZ2UgPSAodGhpcy5lZGl0b3JPcHRpb25DYWNoZWQgYXMgRWRpdG9yT3B0aW9ucykubGFuZ3VhZ2U7XHJcbiAgICAgICAgKHRoaXMuZWRpdG9ySW5zdGFuY2UgYXMgSURpZmZFZGl0b3IpLnNldE1vZGVsKHtcclxuICAgICAgICAgIG9yaWdpbmFsOiBtb25hY28uZWRpdG9yLmNyZWF0ZU1vZGVsKHRoaXMudmFsdWUsIGxhbmd1YWdlKSxcclxuICAgICAgICAgIG1vZGlmaWVkOiBtb25hY28uZWRpdG9yLmNyZWF0ZU1vZGVsKHRoaXMubnpPcmlnaW5hbFRleHQsIGxhbmd1YWdlKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFZhbHVlRW1pdHRlcigpOiB2b2lkIHtcclxuICAgIGNvbnN0IG1vZGVsID0gKHRoaXMubnpFZGl0b3JNb2RlID09PSAnbm9ybWFsJ1xyXG4gICAgICA/ICh0aGlzLmVkaXRvckluc3RhbmNlIGFzIElFZGl0b3IpLmdldE1vZGVsKClcclxuICAgICAgOiAodGhpcy5lZGl0b3JJbnN0YW5jZSBhcyBJRGlmZkVkaXRvcikuZ2V0TW9kZWwoKSEubW9kaWZpZWQpIGFzIElUZXh0TW9kZWw7XHJcblxyXG4gICAgbW9kZWwub25EaWRDaGFuZ2VDb250ZW50KCgpID0+IHtcclxuICAgICAgdGhpcy5lbWl0VmFsdWUobW9kZWwuZ2V0VmFsdWUoKSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZW1pdFZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVPcHRpb25Ub01vbmFjbygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmVkaXRvckluc3RhbmNlKSB7XHJcbiAgICAgIHRoaXMuZWRpdG9ySW5zdGFuY2UudXBkYXRlT3B0aW9ucyh7IC4uLnRoaXMuZWRpdG9yT3B0aW9uQ2FjaGVkIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiYW50LWNvZGUtZWRpdG9yLWxvYWRpbmdcIiAqbmdJZj1cIm56TG9hZGluZ1wiPlxyXG4gIDxuei1zcGluPjwvbnotc3Bpbj5cclxuPC9kaXY+XHJcblxyXG48ZGl2IGNsYXNzPVwiYW50LWNvZGUtZWRpdG9yLXRvb2xraXRcIiAqbmdJZj1cIm56VG9vbGtpdFwiPlxyXG4gIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJuelRvb2xraXRcIj48L25nLXRlbXBsYXRlPlxyXG48L2Rpdj5cclxuIl19
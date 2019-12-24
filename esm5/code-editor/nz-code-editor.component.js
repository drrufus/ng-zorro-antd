import { __assign, __decorate, __metadata, __read } from "tslib";
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
    var ctx_r1032 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1032.nzToolkit);
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
    /** @nocollapse */ NzCodeEditorComponent.ɵfac = function NzCodeEditorComponent_Factory(t) { return new (t || NzCodeEditorComponent)(i0.ɵɵdirectiveInject(i1.NzCodeEditorService), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    /** @nocollapse */ NzCodeEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzCodeEditorComponent, selectors: [["nz-code-editor"]], hostBindings: function NzCodeEditorComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            i0.ɵɵallocHostVars(1);
        } if (rf & 2) {
            i0.ɵɵclassProp("ant-code-editor", true);
        } }, inputs: { nzEditorMode: "nzEditorMode", nzOriginalText: "nzOriginalText", nzLoading: "nzLoading", nzFullControl: "nzFullControl", nzToolkit: "nzToolkit", nzEditorOption: "nzEditorOption" }, outputs: { nzEditorInitialized: "nzEditorInitialized" }, exportAs: ["nzCodeEditor"], features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef((function () { return NzCodeEditorComponent; })),
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
    return NzCodeEditorComponent;
}());
export { NzCodeEditorComponent };
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
                        useExisting: forwardRef((function () { return NzCodeEditorComponent; })),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29kZS1lZGl0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb2RlLWVkaXRvci8iLCJzb3VyY2VzIjpbIm56LWNvZGUtZWRpdG9yLmNvbXBvbmVudC50cyIsIm56LWNvZGUtZWRpdG9yLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUVOLE1BQU0sRUFDTixXQUFXLEVBQ1gsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUUsT0FBTyxFQUFFLFlBQVksRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTVGLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3BFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7SUM3Qi9ELDhCQUNFO0lBQUEsMEJBQW1CO0lBQ3JCLGlCQUFNOzs7O0lBRU4sOEJBQ0U7SUFBQSw0RkFBNEM7SUFDOUMsaUJBQU07OztJQURTLGVBQThCO0lBQTlCLHNEQUE4Qjs7QURtQzdDO0lBd0NFLCtCQUFvQixtQkFBd0MsRUFBVSxNQUFjLEVBQUUsVUFBc0I7UUFBeEYsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUF0QjNFLGlCQUFZLEdBQWlCLFFBQVEsQ0FBQztRQUN0QyxtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUNKLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFPNUIsd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQXlCLENBQUM7UUFFbkYsdUJBQWtCLEdBQXdCLEVBQUUsQ0FBQztRQUdyQyxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUMvQixZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUM5QixrQkFBYSxHQUFHLElBQUksZUFBZSxDQUFzQixFQUFFLENBQUMsQ0FBQztRQUU3RCxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUd2QixJQUFJLENBQUMsRUFBRSxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUM7SUFDckMsQ0FBQztJQWxCRCxzQkFBYSxpREFBYzthQUEzQixVQUE0QixLQUEwQjtZQUNwRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxDQUFDOzs7T0FBQTtJQWtCRDs7T0FFRztJQUNILCtDQUFlLEdBQWY7UUFBQSxpQkFFQztRQURDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFsQixDQUFrQixDQUFDLENBQUM7SUFDbkYsQ0FBQztJQUVELDJDQUFXLEdBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUMvQjtRQUVELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsMENBQVUsR0FBVixVQUFXLEtBQWE7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxrQ0FBa0M7SUFDbEMsZ0RBQWdCLEdBQWhCLFVBQWlCLEVBQTJCO1FBQzFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxrQ0FBa0M7SUFDbEMsaURBQWlCLEdBQWpCLFVBQWtCLEVBQU87UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELHdDQUFRLEdBQVIsVUFBUyxNQUFjLElBQVMsQ0FBQztJQUVqQyx1Q0FBTyxHQUFQLGNBQWlCLENBQUM7SUFFbEIsc0NBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVPLHFDQUFLLEdBQWIsVUFBYyxNQUEyQjtRQUF6QyxpQkFjQztRQWJDLFVBQVUsRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUNyQixLQUFJLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDO1lBQ2pDLEtBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1lBQzdCLEtBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1lBQ2hDLEtBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1lBQzVCLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUVoQixJQUFJLENBQUMsS0FBSSxDQUFDLGFBQWEsRUFBRTtnQkFDdkIsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQ3hCO1lBRUQsS0FBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8scURBQXFCLEdBQTdCO1FBQUEsaUJBV0M7UUFWQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNsRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM5QixTQUFTLENBQUMsVUFBQyxFQUFxQjtnQkFBckIsa0JBQXFCLEVBQXBCLGVBQU8sRUFBRSxrQkFBVTtZQUM5QixLQUFJLENBQUMsa0JBQWtCLGtDQUNsQixLQUFJLENBQUMsa0JBQWtCLEdBQ3ZCLFVBQVUsR0FDVixPQUFPLENBQ1gsQ0FBQztZQUNGLEtBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVPLHdEQUF3QixHQUFoQztRQUFBLGlCQVNDO1FBUkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztZQUM1QixLQUFJLENBQUMsY0FBYztnQkFDakIsS0FBSSxDQUFDLFlBQVksS0FBSyxRQUFRO29CQUM1QixDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLEVBQUUsZUFBTyxLQUFJLENBQUMsa0JBQWtCLEVBQUc7b0JBQy9ELENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxFQUFFLGVBQ2hDLEtBQUksQ0FBQyxrQkFBd0MsRUFDakQsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLG9EQUFvQixHQUE1QjtRQUFBLGlCQXVCQztRQXRCQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDO1lBQzVCLFNBQVMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDO2lCQUN4QixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ2pELFNBQVMsQ0FBQztnQkFDVCxLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDaEIsQ0FBQyxDQUFDLENBQUM7WUFFTCxLQUFJLENBQUMsT0FBTztpQkFDVCxJQUFJLENBQ0gsU0FBUyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsRUFDeEIsTUFBTSxDQUFDLGNBQU0sT0FBQSxDQUFDLENBQUMsS0FBSSxDQUFDLGNBQWMsRUFBckIsQ0FBcUIsQ0FBQyxFQUNuQyxHQUFHLENBQUMsY0FBTSxPQUFBLENBQUM7Z0JBQ1QsS0FBSyxFQUFFLEtBQUksQ0FBQyxFQUFFLENBQUMsV0FBVztnQkFDMUIsTUFBTSxFQUFFLEtBQUksQ0FBQyxFQUFFLENBQUMsWUFBWTthQUM3QixDQUFDLEVBSFEsQ0FHUixDQUFDLEVBQ0gsb0JBQW9CLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBNUMsQ0FBNEMsQ0FBQyxFQUM1RSxZQUFZLENBQUMsRUFBRSxDQUFDLENBQ2pCO2lCQUNBLFNBQVMsQ0FBQztnQkFDVCxLQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQy9CLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sd0NBQVEsR0FBaEI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN4QixPQUFPO1NBQ1I7UUFFRCxJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNwQyxJQUFJLENBQUMsb0dBQW9HLENBQUMsQ0FBQztZQUMzRyxPQUFPO1NBQ1I7UUFFRCxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssUUFBUSxFQUFFO1lBQ2xDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDaEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNyRTtpQkFBTTtnQkFDSixJQUFJLENBQUMsY0FBMEIsQ0FBQyxRQUFRLENBQ3ZDLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUcsSUFBSSxDQUFDLGtCQUFvQyxDQUFDLFFBQVEsQ0FBQyxDQUMzRixDQUFDO2dCQUNGLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2FBQ3RCO1NBQ0Y7YUFBTTtZQUNMLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDakIsSUFBTSxLQUFLLEdBQUksSUFBSSxDQUFDLGNBQThCLENBQUMsUUFBUSxFQUFHLENBQUM7Z0JBQy9ELEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDcEMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQzlDO2lCQUFNO2dCQUNMLElBQU0sUUFBUSxHQUFJLElBQUksQ0FBQyxrQkFBb0MsQ0FBQyxRQUFRLENBQUM7Z0JBQ3BFLElBQUksQ0FBQyxjQUE4QixDQUFDLFFBQVEsQ0FBQztvQkFDNUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDO29CQUN6RCxRQUFRLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxRQUFRLENBQUM7aUJBQ25FLENBQUMsQ0FBQzthQUNKO1NBQ0Y7SUFDSCxDQUFDO0lBRU8sK0NBQWUsR0FBdkI7UUFBQSxpQkFRQztRQVBDLElBQU0sS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksS0FBSyxRQUFRO1lBQzNDLENBQUMsQ0FBRSxJQUFJLENBQUMsY0FBMEIsQ0FBQyxRQUFRLEVBQUU7WUFDN0MsQ0FBQyxDQUFFLElBQUksQ0FBQyxjQUE4QixDQUFDLFFBQVEsRUFBRyxDQUFDLFFBQVEsQ0FBZSxDQUFDO1FBRTdFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQztZQUN2QixLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLHlDQUFTLEdBQWpCLFVBQWtCLEtBQWE7UUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRU8sb0RBQW9CLEdBQTVCO1FBQ0UsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxjQUFNLElBQUksQ0FBQyxrQkFBa0IsRUFBRyxDQUFDO1NBQ25FO0lBQ0gsQ0FBQzs4RkF4TFUscUJBQXFCOzhEQUFyQixxQkFBcUI7Ozs7aVVBUnJCO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxpQkFBaUI7b0JBQzFCLFdBQVcsRUFBRSxVQUFVLEVBQUMsY0FBTSxPQUFBLHFCQUFxQixFQUFyQixDQUFxQixFQUFDO29CQUNwRCxLQUFLLEVBQUUsSUFBSTtpQkFDWjthQUNGO1lDdkRILHNFQUNFO1lBR0Ysc0VBQ0U7O1lBTG1DLG9DQUFpQjtZQUlqQixlQUFpQjtZQUFqQixvQ0FBaUI7O0lEd0QzQjtRQUFmLFlBQVksRUFBRTs7NERBQW1CO0lBQ2xCO1FBQWYsWUFBWSxFQUFFOztnRUFBdUI7Z0NBN0RqRDtDQWtQQyxBQTFNRCxJQTBNQztTQXpMWSxxQkFBcUI7a0RBQXJCLHFCQUFxQjtjQWpCakMsU0FBUztlQUFDO2dCQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFdBQVcsRUFBRSxpQ0FBaUM7Z0JBQzlDLElBQUksRUFBRTtvQkFDSix5QkFBeUIsRUFBRSxNQUFNO2lCQUNsQztnQkFDRCxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVUsRUFBQyxjQUFNLE9BQUEscUJBQXFCLEVBQXJCLENBQXFCLEVBQUM7d0JBQ3BELEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGO2FBQ0Y7O2tCQUVFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUlMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgZm9yd2FyZFJlZixcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgT25EZXN0cm95LFxyXG4gIE91dHB1dCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBjb21iaW5lTGF0ZXN0LCBmcm9tRXZlbnQsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBtYXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IGluTmV4dFRpY2ssIElucHV0Qm9vbGVhbiwgd2FybiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBEaWZmRWRpdG9yT3B0aW9ucywgRWRpdG9yT3B0aW9ucywgSm9pbmVkRWRpdG9yT3B0aW9ucywgTnpFZGl0b3JNb2RlIH0gZnJvbSAnLi9uei1jb2RlLWVkaXRvci5kZWZpbml0aW9ucyc7XHJcbmltcG9ydCB7IE56Q29kZUVkaXRvclNlcnZpY2UgfSBmcm9tICcuL256LWNvZGUtZWRpdG9yLnNlcnZpY2UnO1xyXG5cclxuLy8gSW1wb3J0IHR5cGVzIGZyb20gbW9uYWNvIGVkaXRvci5cclxuaW1wb3J0IHsgZWRpdG9yIH0gZnJvbSAnbW9uYWNvLWVkaXRvcic7XHJcbmltcG9ydCBJRWRpdG9yID0gZWRpdG9yLklFZGl0b3I7XHJcbmltcG9ydCBJRGlmZkVkaXRvciA9IGVkaXRvci5JRGlmZkVkaXRvcjtcclxuaW1wb3J0IElUZXh0TW9kZWwgPSBlZGl0b3IuSVRleHRNb2RlbDtcclxuXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1hbnlcclxuZGVjbGFyZSBjb25zdCBtb25hY286IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc2VsZWN0b3I6ICduei1jb2RlLWVkaXRvcicsXHJcbiAgZXhwb3J0QXM6ICduekNvZGVFZGl0b3InLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1jb2RlLWVkaXRvci5jb21wb25lbnQuaHRtbCcsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtY29kZS1lZGl0b3JdJzogJ3RydWUnXHJcbiAgfSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE56Q29kZUVkaXRvckNvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpDb2RlRWRpdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcclxuICBASW5wdXQoKSBuekVkaXRvck1vZGU6IE56RWRpdG9yTW9kZSA9ICdub3JtYWwnO1xyXG4gIEBJbnB1dCgpIG56T3JpZ2luYWxUZXh0ID0gJyc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56TG9hZGluZyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekZ1bGxDb250cm9sID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpUb29sa2l0OiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgQElucHV0KCkgc2V0IG56RWRpdG9yT3B0aW9uKHZhbHVlOiBKb2luZWRFZGl0b3JPcHRpb25zKSB7XHJcbiAgICB0aGlzLmVkaXRvck9wdGlvbiQubmV4dCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpFZGl0b3JJbml0aWFsaXplZCA9IG5ldyBFdmVudEVtaXR0ZXI8SUVkaXRvciB8IElEaWZmRWRpdG9yPigpO1xyXG5cclxuICBlZGl0b3JPcHRpb25DYWNoZWQ6IEpvaW5lZEVkaXRvck9wdGlvbnMgPSB7fTtcclxuXHJcbiAgcHJpdmF0ZSByZWFkb25seSBlbDogSFRNTEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgcHJpdmF0ZSByZXNpemUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBwcml2YXRlIGVkaXRvck9wdGlvbiQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEpvaW5lZEVkaXRvck9wdGlvbnM+KHt9KTtcclxuICBwcml2YXRlIGVkaXRvckluc3RhbmNlOiBJRWRpdG9yIHwgSURpZmZFZGl0b3I7XHJcbiAgcHJpdmF0ZSB2YWx1ZSA9ICcnO1xyXG4gIHByaXZhdGUgbW9kZWxTZXQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuekNvZGVFZGl0b3JTZXJ2aWNlOiBOekNvZGVFZGl0b3JTZXJ2aWNlLCBwcml2YXRlIG5nWm9uZTogTmdab25lLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XHJcbiAgICB0aGlzLmVsID0gZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW5pdGlhbGl6ZSBhIG1vbmFjbyBlZGl0b3IgaW5zdGFuY2UuXHJcbiAgICovXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5uekNvZGVFZGl0b3JTZXJ2aWNlLnJlcXVlc3RUb0luaXQoKS5zdWJzY3JpYmUob3B0aW9uID0+IHRoaXMuc2V0dXAob3B0aW9uKSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmVkaXRvckluc3RhbmNlKSB7XHJcbiAgICAgIHRoaXMuZWRpdG9ySW5zdGFuY2UuZGlzcG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLnNldFZhbHVlKCk7XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tYW55XHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQpOiBhbnkge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWFueVxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2UoX3ZhbHVlOiBzdHJpbmcpOiB2b2lkIHt9XHJcblxyXG4gIG9uVG91Y2goKTogdm9pZCB7fVxyXG5cclxuICBsYXlvdXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlc2l6ZSQubmV4dCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXR1cChvcHRpb246IEpvaW5lZEVkaXRvck9wdGlvbnMpOiB2b2lkIHtcclxuICAgIGluTmV4dFRpY2soKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmVkaXRvck9wdGlvbkNhY2hlZCA9IG9wdGlvbjtcclxuICAgICAgdGhpcy5yZWdpc3Rlck9wdGlvbkNoYW5nZXMoKTtcclxuICAgICAgdGhpcy5pbml0TW9uYWNvRWRpdG9ySW5zdGFuY2UoKTtcclxuICAgICAgdGhpcy5yZWdpc3RlclJlc2l6ZUNoYW5nZSgpO1xyXG4gICAgICB0aGlzLnNldFZhbHVlKCk7XHJcblxyXG4gICAgICBpZiAoIXRoaXMubnpGdWxsQ29udHJvbCkge1xyXG4gICAgICAgIHRoaXMuc2V0VmFsdWVFbWl0dGVyKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMubnpFZGl0b3JJbml0aWFsaXplZC5lbWl0KHRoaXMuZWRpdG9ySW5zdGFuY2UpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlZ2lzdGVyT3B0aW9uQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIGNvbWJpbmVMYXRlc3QoW3RoaXMuZWRpdG9yT3B0aW9uJCwgdGhpcy5uekNvZGVFZGl0b3JTZXJ2aWNlLm9wdGlvbiRdKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKFtzZWxmT3B0LCBkZWZhdWx0T3B0XSkgPT4ge1xyXG4gICAgICAgIHRoaXMuZWRpdG9yT3B0aW9uQ2FjaGVkID0ge1xyXG4gICAgICAgICAgLi4udGhpcy5lZGl0b3JPcHRpb25DYWNoZWQsXHJcbiAgICAgICAgICAuLi5kZWZhdWx0T3B0LFxyXG4gICAgICAgICAgLi4uc2VsZk9wdFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy51cGRhdGVPcHRpb25Ub01vbmFjbygpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdE1vbmFjb0VkaXRvckluc3RhbmNlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICB0aGlzLmVkaXRvckluc3RhbmNlID1cclxuICAgICAgICB0aGlzLm56RWRpdG9yTW9kZSA9PT0gJ25vcm1hbCdcclxuICAgICAgICAgID8gbW9uYWNvLmVkaXRvci5jcmVhdGUodGhpcy5lbCwgeyAuLi50aGlzLmVkaXRvck9wdGlvbkNhY2hlZCB9KVxyXG4gICAgICAgICAgOiBtb25hY28uZWRpdG9yLmNyZWF0ZURpZmZFZGl0b3IodGhpcy5lbCwge1xyXG4gICAgICAgICAgICAgIC4uLih0aGlzLmVkaXRvck9wdGlvbkNhY2hlZCBhcyBEaWZmRWRpdG9yT3B0aW9ucylcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVnaXN0ZXJSZXNpemVDaGFuZ2UoKTogdm9pZCB7XHJcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgIGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKVxyXG4gICAgICAgIC5waXBlKGRlYm91bmNlVGltZSgzMDApLCB0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmxheW91dCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5yZXNpemUkXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXHJcbiAgICAgICAgICBmaWx0ZXIoKCkgPT4gISF0aGlzLmVkaXRvckluc3RhbmNlKSxcclxuICAgICAgICAgIG1hcCgoKSA9PiAoe1xyXG4gICAgICAgICAgICB3aWR0aDogdGhpcy5lbC5jbGllbnRXaWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmVsLmNsaWVudEhlaWdodFxyXG4gICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKGEsIGIpID0+IGEud2lkdGggPT09IGIud2lkdGggJiYgYS5oZWlnaHQgPT09IGIuaGVpZ2h0KSxcclxuICAgICAgICAgIGRlYm91bmNlVGltZSg1MClcclxuICAgICAgICApXHJcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmVkaXRvckluc3RhbmNlLmxheW91dCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFZhbHVlKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmVkaXRvckluc3RhbmNlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5uekZ1bGxDb250cm9sICYmIHRoaXMudmFsdWUpIHtcclxuICAgICAgd2Fybihgc2hvdWxkIG5vdCBzZXQgdmFsdWUgd2hlbiB5b3UgYXJlIHVzaW5nIGZ1bGwgY29udHJvbCBtb2RlISBJdCB3b3VsZCByZXN1bHQgaW4gYW1iaWd1b3VzIGRhdGEgZmxvdyFgKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLm56RWRpdG9yTW9kZSA9PT0gJ25vcm1hbCcpIHtcclxuICAgICAgaWYgKHRoaXMubW9kZWxTZXQpIHtcclxuICAgICAgICAodGhpcy5lZGl0b3JJbnN0YW5jZS5nZXRNb2RlbCgpIGFzIElUZXh0TW9kZWwpLnNldFZhbHVlKHRoaXMudmFsdWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICh0aGlzLmVkaXRvckluc3RhbmNlIGFzIElFZGl0b3IpLnNldE1vZGVsKFxyXG4gICAgICAgICAgbW9uYWNvLmVkaXRvci5jcmVhdGVNb2RlbCh0aGlzLnZhbHVlLCAodGhpcy5lZGl0b3JPcHRpb25DYWNoZWQgYXMgRWRpdG9yT3B0aW9ucykubGFuZ3VhZ2UpXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLm1vZGVsU2V0ID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMubW9kZWxTZXQpIHtcclxuICAgICAgICBjb25zdCBtb2RlbCA9ICh0aGlzLmVkaXRvckluc3RhbmNlIGFzIElEaWZmRWRpdG9yKS5nZXRNb2RlbCgpITtcclxuICAgICAgICBtb2RlbC5tb2RpZmllZC5zZXRWYWx1ZSh0aGlzLnZhbHVlKTtcclxuICAgICAgICBtb2RlbC5vcmlnaW5hbC5zZXRWYWx1ZSh0aGlzLm56T3JpZ2luYWxUZXh0KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBsYW5ndWFnZSA9ICh0aGlzLmVkaXRvck9wdGlvbkNhY2hlZCBhcyBFZGl0b3JPcHRpb25zKS5sYW5ndWFnZTtcclxuICAgICAgICAodGhpcy5lZGl0b3JJbnN0YW5jZSBhcyBJRGlmZkVkaXRvcikuc2V0TW9kZWwoe1xyXG4gICAgICAgICAgb3JpZ2luYWw6IG1vbmFjby5lZGl0b3IuY3JlYXRlTW9kZWwodGhpcy52YWx1ZSwgbGFuZ3VhZ2UpLFxyXG4gICAgICAgICAgbW9kaWZpZWQ6IG1vbmFjby5lZGl0b3IuY3JlYXRlTW9kZWwodGhpcy5uek9yaWdpbmFsVGV4dCwgbGFuZ3VhZ2UpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0VmFsdWVFbWl0dGVyKCk6IHZvaWQge1xyXG4gICAgY29uc3QgbW9kZWwgPSAodGhpcy5uekVkaXRvck1vZGUgPT09ICdub3JtYWwnXHJcbiAgICAgID8gKHRoaXMuZWRpdG9ySW5zdGFuY2UgYXMgSUVkaXRvcikuZ2V0TW9kZWwoKVxyXG4gICAgICA6ICh0aGlzLmVkaXRvckluc3RhbmNlIGFzIElEaWZmRWRpdG9yKS5nZXRNb2RlbCgpIS5tb2RpZmllZCkgYXMgSVRleHRNb2RlbDtcclxuXHJcbiAgICBtb2RlbC5vbkRpZENoYW5nZUNvbnRlbnQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmVtaXRWYWx1ZShtb2RlbC5nZXRWYWx1ZSgpKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBlbWl0VmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZU9wdGlvblRvTW9uYWNvKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZWRpdG9ySW5zdGFuY2UpIHtcclxuICAgICAgdGhpcy5lZGl0b3JJbnN0YW5jZS51cGRhdGVPcHRpb25zKHsgLi4udGhpcy5lZGl0b3JPcHRpb25DYWNoZWQgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJhbnQtY29kZS1lZGl0b3ItbG9hZGluZ1wiICpuZ0lmPVwibnpMb2FkaW5nXCI+XHJcbiAgPG56LXNwaW4+PC9uei1zcGluPlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgY2xhc3M9XCJhbnQtY29kZS1lZGl0b3ItdG9vbGtpdFwiICpuZ0lmPVwibnpUb29sa2l0XCI+XHJcbiAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIm56VG9vbGtpdFwiPjwvbmctdGVtcGxhdGU+XHJcbjwvZGl2PlxyXG4iXX0=
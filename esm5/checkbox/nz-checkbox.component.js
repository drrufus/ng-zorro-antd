import { __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { FocusMonitor } from '@angular/cdk/a11y';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, Input, Optional, Output, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputBoolean, isEmpty } from 'ng-zorro-antd/core';
import { NzCheckboxWrapperComponent } from './nz-checkbox-wrapper.component';
import * as i0 from "@angular/core";
import * as i1 from "./nz-checkbox-wrapper.component";
import * as i2 from "@angular/cdk/a11y";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/cdk/observers";
var _c0 = ["inputElement"];
var _c1 = ["contentElement"];
var _c2 = ["nz-checkbox", ""];
var _c3 = ["*"];
var NzCheckboxComponent = /** @class */ (function () {
    function NzCheckboxComponent(elementRef, renderer, nzCheckboxWrapperComponent, cdr, focusMonitor) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.nzCheckboxWrapperComponent = nzCheckboxWrapperComponent;
        this.cdr = cdr;
        this.focusMonitor = focusMonitor;
        // tslint:disable-next-line:no-any
        this.onChange = function () { return null; };
        // tslint:disable-next-line:no-any
        this.onTouched = function () { return null; };
        this.nzCheckedChange = new EventEmitter();
        this.nzAutoFocus = false;
        this.nzDisabled = false;
        this.nzIndeterminate = false;
        this.nzChecked = false;
        renderer.addClass(elementRef.nativeElement, 'ant-checkbox-wrapper');
    }
    NzCheckboxComponent.prototype.hostClick = function (e) {
        e.preventDefault();
        this.focus();
        this.innerCheckedChange(!this.nzChecked);
    };
    NzCheckboxComponent.prototype.innerCheckedChange = function (checked) {
        if (!this.nzDisabled) {
            this.nzChecked = checked;
            this.onChange(this.nzChecked);
            this.nzCheckedChange.emit(this.nzChecked);
            if (this.nzCheckboxWrapperComponent) {
                this.nzCheckboxWrapperComponent.onChange();
            }
        }
    };
    NzCheckboxComponent.prototype.updateAutoFocus = function () {
        if (this.inputElement && this.nzAutoFocus) {
            this.renderer.setAttribute(this.inputElement.nativeElement, 'autofocus', 'autofocus');
        }
        else {
            this.renderer.removeAttribute(this.inputElement.nativeElement, 'autofocus');
        }
    };
    NzCheckboxComponent.prototype.writeValue = function (value) {
        this.nzChecked = value;
        this.cdr.markForCheck();
    };
    NzCheckboxComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    NzCheckboxComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    NzCheckboxComponent.prototype.setDisabledState = function (isDisabled) {
        this.nzDisabled = isDisabled;
        this.cdr.markForCheck();
    };
    NzCheckboxComponent.prototype.focus = function () {
        this.focusMonitor.focusVia(this.inputElement, 'keyboard');
    };
    NzCheckboxComponent.prototype.blur = function () {
        this.inputElement.nativeElement.blur();
    };
    NzCheckboxComponent.prototype.checkContent = function () {
        if (isEmpty(this.contentElement.nativeElement)) {
            this.renderer.setStyle(this.contentElement.nativeElement, 'display', 'none');
        }
        else {
            this.renderer.removeStyle(this.contentElement.nativeElement, 'display');
        }
    };
    NzCheckboxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.focusMonitor.monitor(this.elementRef, true).subscribe(function (focusOrigin) {
            if (!focusOrigin) {
                Promise.resolve().then(function () { return _this.onTouched(); });
            }
        });
        if (this.nzCheckboxWrapperComponent) {
            this.nzCheckboxWrapperComponent.addCheckbox(this);
        }
    };
    NzCheckboxComponent.prototype.ngOnChanges = function (changes) {
        if (changes.nzAutoFocus) {
            this.updateAutoFocus();
        }
    };
    NzCheckboxComponent.prototype.ngAfterViewInit = function () {
        this.updateAutoFocus();
        this.checkContent();
    };
    NzCheckboxComponent.prototype.ngOnDestroy = function () {
        this.focusMonitor.stopMonitoring(this.elementRef);
        if (this.nzCheckboxWrapperComponent) {
            this.nzCheckboxWrapperComponent.removeCheckbox(this);
        }
    };
    /** @nocollapse */ NzCheckboxComponent.ɵfac = function NzCheckboxComponent_Factory(t) { return new (t || NzCheckboxComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.NzCheckboxWrapperComponent, 8), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.FocusMonitor)); };
    /** @nocollapse */ NzCheckboxComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzCheckboxComponent, selectors: [["", "nz-checkbox", ""]], viewQuery: function NzCheckboxComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵstaticViewQuery(_c0, true);
            i0.ɵɵviewQuery(_c1, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.contentElement = _t.first);
        } }, hostBindings: function NzCheckboxComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            i0.ɵɵlistener("click", function NzCheckboxComponent_click_HostBindingHandler($event) { return ctx.hostClick($event); });
        } }, inputs: { nzValue: "nzValue", nzAutoFocus: "nzAutoFocus", nzDisabled: "nzDisabled", nzIndeterminate: "nzIndeterminate", nzChecked: "nzChecked" }, outputs: { nzCheckedChange: "nzCheckedChange" }, exportAs: ["nzCheckbox"], features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef((function () { return NzCheckboxComponent; })),
                    multi: true
                }
            ]), i0.ɵɵNgOnChangesFeature()], attrs: _c2, ngContentSelectors: _c3, decls: 7, vars: 6, consts: [[1, "ant-checkbox"], ["type", "checkbox", 1, "ant-checkbox-input", 3, "checked", "ngModel", "disabled", "ngModelChange", "click"], ["inputElement", ""], [1, "ant-checkbox-inner"], [3, "cdkObserveContent"], ["contentElement", ""]], template: function NzCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "span", 0);
            i0.ɵɵelementStart(1, "input", 1, 2);
            i0.ɵɵlistener("ngModelChange", function NzCheckboxComponent_Template_input_ngModelChange_1_listener($event) { return ctx.innerCheckedChange($event); })("click", function NzCheckboxComponent_Template_input_click_1_listener($event) { return $event.stopPropagation(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelement(3, "span", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "span", 4, 5);
            i0.ɵɵlistener("cdkObserveContent", function NzCheckboxComponent_Template_span_cdkObserveContent_4_listener($event) { return ctx.checkContent(); });
            i0.ɵɵprojection(6);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassProp("ant-checkbox-checked", ctx.nzChecked && !ctx.nzIndeterminate)("ant-checkbox-disabled", ctx.nzDisabled)("ant-checkbox-indeterminate", ctx.nzIndeterminate);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("checked", ctx.nzChecked)("ngModel", ctx.nzChecked)("disabled", ctx.nzDisabled);
        } }, directives: [i3.CheckboxControlValueAccessor, i3.NgControlStatus, i3.NgModel, i4.CdkObserveContent], encapsulation: 2, changeDetection: 0 });
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzCheckboxComponent.prototype, "nzAutoFocus", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzCheckboxComponent.prototype, "nzDisabled", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzCheckboxComponent.prototype, "nzIndeterminate", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzCheckboxComponent.prototype, "nzChecked", void 0);
    return NzCheckboxComponent;
}());
export { NzCheckboxComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzCheckboxComponent, [{
        type: Component,
        args: [{
                selector: '[nz-checkbox]',
                exportAs: 'nzCheckbox',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                templateUrl: './nz-checkbox.component.html',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((function () { return NzCheckboxComponent; })),
                        multi: true
                    }
                ],
                host: {
                    '(click)': 'hostClick($event)'
                }
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.NzCheckboxWrapperComponent, decorators: [{
                type: Optional
            }] }, { type: i0.ChangeDetectorRef }, { type: i2.FocusMonitor }]; }, { inputElement: [{
            type: ViewChild,
            args: ['inputElement', { static: true }]
        }], contentElement: [{
            type: ViewChild,
            args: ['contentElement', { static: false }]
        }], nzCheckedChange: [{
            type: Output
        }], nzValue: [{
            type: Input
        }], nzAutoFocus: [{
            type: Input
        }], nzDisabled: [{
            type: Input
        }], nzIndeterminate: [{
            type: Input
        }], nzChecked: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jaGVja2JveC8iLCJzb3VyY2VzIjpbIm56LWNoZWNrYm94LmNvbXBvbmVudC50cyIsIm56LWNoZWNrYm94LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osVUFBVSxFQUNWLEtBQUssRUFJTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFFVCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTNELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7Ozs7Ozs7O0FBRTdFO0lBMkZFLDZCQUNVLFVBQW1DLEVBQ25DLFFBQW1CLEVBQ1AsMEJBQXNELEVBQ2xFLEdBQXNCLEVBQ3RCLFlBQTBCO1FBSjFCLGVBQVUsR0FBVixVQUFVLENBQXlCO1FBQ25DLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDUCwrQkFBMEIsR0FBMUIsMEJBQTBCLENBQTRCO1FBQ2xFLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBN0VwQyxrQ0FBa0M7UUFDbEMsYUFBUSxHQUF5QixjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUksQ0FBQztRQUM1QyxrQ0FBa0M7UUFDbEMsY0FBUyxHQUFjLGNBQU0sT0FBQSxJQUFJLEVBQUosQ0FBSSxDQUFDO1FBR2Ysb0JBQWUsR0FBRyxJ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QUNMLEtBQUs7O2tCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEZvY3VzTW9uaXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcclxuaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBmb3J3YXJkUmVmLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBpc0VtcHR5IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56Q2hlY2tib3hXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSAnLi9uei1jaGVja2JveC13cmFwcGVyLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1tuei1jaGVja2JveF0nLFxyXG4gIGV4cG9ydEFzOiAnbnpDaGVja2JveCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotY2hlY2tib3guY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnpDaGVja2JveENvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXSxcclxuICBob3N0OiB7XHJcbiAgICAnKGNsaWNrKSc6ICdob3N0Q2xpY2soJGV2ZW50KSdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekNoZWNrYm94Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBvbkNoYW5nZTogKHZhbHVlOiBhbnkpID0+IHZvaWQgPSAoKSA9PiBudWxsO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBvblRvdWNoZWQ6ICgpID0+IGFueSA9ICgpID0+IG51bGw7XHJcbiAgQFZpZXdDaGlsZCgnaW5wdXRFbGVtZW50JywgeyBzdGF0aWM6IHRydWUgfSkgcHJpdmF0ZSBpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnY29udGVudEVsZW1lbnQnLCB7IHN0YXRpYzogZmFsc2UgfSkgcHJpdmF0ZSBjb250ZW50RWxlbWVudDogRWxlbWVudFJlZjtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDaGVja2VkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIEBJbnB1dCgpIG56VmFsdWU6IHN0cmluZztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpBdXRvRm9jdXMgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDaGVja2VkID0gZmFsc2U7XHJcblxyXG4gIGhvc3RDbGljayhlOiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLmZvY3VzKCk7XHJcbiAgICB0aGlzLmlubmVyQ2hlY2tlZENoYW5nZSghdGhpcy5uekNoZWNrZWQpO1xyXG4gIH1cclxuXHJcbiAgaW5uZXJDaGVja2VkQ2hhbmdlKGNoZWNrZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5uekRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMubnpDaGVja2VkID0gY2hlY2tlZDtcclxuICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLm56Q2hlY2tlZCk7XHJcbiAgICAgIHRoaXMubnpDaGVja2VkQ2hhbmdlLmVtaXQodGhpcy5uekNoZWNrZWQpO1xyXG4gICAgICBpZiAodGhpcy5uekNoZWNrYm94V3JhcHBlckNvbXBvbmVudCkge1xyXG4gICAgICAgIHRoaXMubnpDaGVja2JveFdyYXBwZXJDb21wb25lbnQub25DaGFuZ2UoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlQXV0b0ZvY3VzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50ICYmIHRoaXMubnpBdXRvRm9jdXMpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2F1dG9mb2N1cycsICdhdXRvZm9jdXMnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdhdXRvZm9jdXMnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMubnpDaGVja2VkID0gdmFsdWU7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBib29sZWFuKSA9PiB7fSk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLm56RGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBmb2N1cygpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9jdXNNb25pdG9yLmZvY3VzVmlhKHRoaXMuaW5wdXRFbGVtZW50LCAna2V5Ym9hcmQnKTtcclxuICB9XHJcblxyXG4gIGJsdXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmJsdXIoKTtcclxuICB9XHJcblxyXG4gIGNoZWNrQ29udGVudCgpOiB2b2lkIHtcclxuICAgIGlmIChpc0VtcHR5KHRoaXMuY29udGVudEVsZW1lbnQubmF0aXZlRWxlbWVudCkpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmNvbnRlbnRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5jb250ZW50RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBuekNoZWNrYm94V3JhcHBlckNvbXBvbmVudDogTnpDaGVja2JveFdyYXBwZXJDb21wb25lbnQsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIGZvY3VzTW9uaXRvcjogRm9jdXNNb25pdG9yXHJcbiAgKSB7XHJcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtY2hlY2tib3gtd3JhcHBlcicpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmZvY3VzTW9uaXRvci5tb25pdG9yKHRoaXMuZWxlbWVudFJlZiwgdHJ1ZSkuc3Vic2NyaWJlKGZvY3VzT3JpZ2luID0+IHtcclxuICAgICAgaWYgKCFmb2N1c09yaWdpbikge1xyXG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy5vblRvdWNoZWQoKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaWYgKHRoaXMubnpDaGVja2JveFdyYXBwZXJDb21wb25lbnQpIHtcclxuICAgICAgdGhpcy5uekNoZWNrYm94V3JhcHBlckNvbXBvbmVudC5hZGRDaGVja2JveCh0aGlzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLm56QXV0b0ZvY3VzKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlQXV0b0ZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZUF1dG9Gb2N1cygpO1xyXG4gICAgdGhpcy5jaGVja0NvbnRlbnQoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5mb2N1c01vbml0b3Iuc3RvcE1vbml0b3JpbmcodGhpcy5lbGVtZW50UmVmKTtcclxuICAgIGlmICh0aGlzLm56Q2hlY2tib3hXcmFwcGVyQ29tcG9uZW50KSB7XHJcbiAgICAgIHRoaXMubnpDaGVja2JveFdyYXBwZXJDb21wb25lbnQucmVtb3ZlQ2hlY2tib3godGhpcyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxzcGFuXHJcbiAgY2xhc3M9XCJhbnQtY2hlY2tib3hcIlxyXG4gIFtjbGFzcy5hbnQtY2hlY2tib3gtY2hlY2tlZF09XCJuekNoZWNrZWQgJiYgIW56SW5kZXRlcm1pbmF0ZVwiXHJcbiAgW2NsYXNzLmFudC1jaGVja2JveC1kaXNhYmxlZF09XCJuekRpc2FibGVkXCJcclxuICBbY2xhc3MuYW50LWNoZWNrYm94LWluZGV0ZXJtaW5hdGVdPVwibnpJbmRldGVybWluYXRlXCJcclxuPlxyXG4gIDxpbnB1dFxyXG4gICAgI2lucHV0RWxlbWVudFxyXG4gICAgW2NoZWNrZWRdPVwibnpDaGVja2VkXCJcclxuICAgIFtuZ01vZGVsXT1cIm56Q2hlY2tlZFwiXHJcbiAgICBbZGlzYWJsZWRdPVwibnpEaXNhYmxlZFwiXHJcbiAgICAobmdNb2RlbENoYW5nZSk9XCJpbm5lckNoZWNrZWRDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCJcclxuICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICBjbGFzcz1cImFudC1jaGVja2JveC1pbnB1dFwiXHJcbiAgLz5cclxuICA8c3BhbiBjbGFzcz1cImFudC1jaGVja2JveC1pbm5lclwiPjwvc3Bhbj5cclxuPC9zcGFuPlxyXG48c3BhbiAjY29udGVudEVsZW1lbnQgKGNka09ic2VydmVDb250ZW50KT1cImNoZWNrQ29udGVudCgpXCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50Pjwvc3Bhbj5cclxuIl19
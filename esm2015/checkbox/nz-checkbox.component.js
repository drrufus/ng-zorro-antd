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
import { FocusMonitor } from '@angular/cdk/a11y';
import { forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Optional, Output, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { isEmpty, InputBoolean } from 'ng-zorro-antd/core';
import { NzCheckboxWrapperComponent } from './nz-checkbox-wrapper.component';
export class NzCheckboxComponent {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} nzCheckboxWrapperComponent
     * @param {?} cdr
     * @param {?} focusMonitor
     */
    constructor(elementRef, renderer, nzCheckboxWrapperComponent, cdr, focusMonitor) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.nzCheckboxWrapperComponent = nzCheckboxWrapperComponent;
        this.cdr = cdr;
        this.focusMonitor = focusMonitor;
        // tslint:disable-next-line:no-any
        this.onChange = (/**
         * @return {?}
         */
        () => null);
        // tslint:disable-next-line:no-any
        this.onTouched = (/**
         * @return {?}
         */
        () => null);
        this.nzCheckedChange = new EventEmitter();
        this.nzAutoFocus = false;
        this.nzDisabled = false;
        this.nzIndeterminate = false;
        this.nzChecked = false;
        renderer.addClass(elementRef.nativeElement, 'ant-checkbox-wrapper');
    }
    /**
     * @param {?} e
     * @return {?}
     */
    hostClick(e) {
        e.preventDefault();
        this.focus();
        this.innerCheckedChange(!this.nzChecked);
    }
    /**
     * @param {?} checked
     * @return {?}
     */
    innerCheckedChange(checked) {
        if (!this.nzDisabled) {
            this.nzChecked = checked;
            this.onChange(this.nzChecked);
            this.nzCheckedChange.emit(this.nzChecked);
            if (this.nzCheckboxWrapperComponent) {
                this.nzCheckboxWrapperComponent.onChange();
            }
        }
    }
    /**
     * @return {?}
     */
    updateAutoFocus() {
        if (this.inputElement && this.nzAutoFocus) {
            this.renderer.setAttribute(this.inputElement.nativeElement, 'autofocus', 'autofocus');
        }
        else {
            this.renderer.removeAttribute(this.inputElement.nativeElement, 'autofocus');
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.nzChecked = value;
        this.cdr.markForCheck();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.nzDisabled = isDisabled;
        this.cdr.markForCheck();
    }
    /**
     * @return {?}
     */
    focus() {
        this.focusMonitor.focusVia(this.inputElement, 'keyboard');
    }
    /**
     * @return {?}
     */
    blur() {
        this.inputElement.nativeElement.blur();
    }
    /**
     * @return {?}
     */
    checkContent() {
        if (isEmpty(this.contentElement.nativeElement)) {
            this.renderer.setStyle(this.contentElement.nativeElement, 'display', 'none');
        }
        else {
            this.renderer.removeStyle(this.contentElement.nativeElement, 'display');
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.focusMonitor.monitor(this.elementRef, true).subscribe((/**
         * @param {?} focusOrigin
         * @return {?}
         */
        focusOrigin => {
            if (!focusOrigin) {
                Promise.resolve().then((/**
                 * @return {?}
                 */
                () => this.onTouched()));
            }
        }));
        if (this.nzCheckboxWrapperComponent) {
            this.nzCheckboxWrapperComponent.addCheckbox(this);
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzAutoFocus) {
            this.updateAutoFocus();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.updateAutoFocus();
        this.checkContent();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.focusMonitor.stopMonitoring(this.elementRef);
        if (this.nzCheckboxWrapperComponent) {
            this.nzCheckboxWrapperComponent.removeCheckbox(this);
        }
    }
}
NzCheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: '[nz-checkbox]',
                exportAs: 'nzCheckbox',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: "<span class=\"ant-checkbox\"\r\n  [class.ant-checkbox-checked]=\"nzChecked && !nzIndeterminate\"\r\n  [class.ant-checkbox-disabled]=\"nzDisabled\"\r\n  [class.ant-checkbox-indeterminate]=\"nzIndeterminate\">\r\n  <input #inputElement [checked]=\"nzChecked\" [ngModel]=\"nzChecked\" [disabled]=\"nzDisabled\" (ngModelChange)=\"innerCheckedChange($event)\" (click)=\"$event.stopPropagation();\" type=\"checkbox\" class=\"ant-checkbox-input\">\r\n  <span class=\"ant-checkbox-inner\"></span>\r\n</span>\r\n<span #contentElement (cdkObserveContent)=\"checkContent()\"><ng-content></ng-content></span>",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => NzCheckboxComponent)),
                        multi: true
                    }
                ],
                host: {
                    '(click)': 'hostClick($event)'
                }
            }] }
];
/** @nocollapse */
NzCheckboxComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: NzCheckboxWrapperComponent, decorators: [{ type: Optional }] },
    { type: ChangeDetectorRef },
    { type: FocusMonitor }
];
NzCheckboxComponent.propDecorators = {
    inputElement: [{ type: ViewChild, args: ['inputElement', { static: true },] }],
    contentElement: [{ type: ViewChild, args: ['contentElement', { static: false },] }],
    nzCheckedChange: [{ type: Output }],
    nzValue: [{ type: Input }],
    nzAutoFocus: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzIndeterminate: [{ type: Input }],
    nzChecked: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzCheckboxComponent.prototype, "nzAutoFocus", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzCheckboxComponent.prototype, "nzDisabled", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzCheckboxComponent.prototype, "nzIndeterminate", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzCheckboxComponent.prototype, "nzChecked", void 0);
if (false) {
    /** @type {?} */
    NzCheckboxComponent.prototype.onChange;
    /** @type {?} */
    NzCheckboxComponent.prototype.onTouched;
    /**
     * @type {?}
     * @private
     */
    NzCheckboxComponent.prototype.inputElement;
    /**
     * @type {?}
     * @private
     */
    NzCheckboxComponent.prototype.contentElement;
    /** @type {?} */
    NzCheckboxComponent.prototype.nzCheckedChange;
    /** @type {?} */
    NzCheckboxComponent.prototype.nzValue;
    /** @type {?} */
    NzCheckboxComponent.prototype.nzAutoFocus;
    /** @type {?} */
    NzCheckboxComponent.prototype.nzDisabled;
    /** @type {?} */
    NzCheckboxComponent.prototype.nzIndeterminate;
    /** @type {?} */
    NzCheckboxComponent.prototype.nzChecked;
    /**
     * @type {?}
     * @private
     */
    NzCheckboxComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzCheckboxComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzCheckboxComponent.prototype.nzCheckboxWrapperComponent;
    /**
     * @type {?}
     * @private
     */
    NzCheckboxComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzCheckboxComponent.prototype.focusMonitor;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jaGVja2JveC8iLCJzb3VyY2VzIjpbIm56LWNoZWNrYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUNMLFVBQVUsRUFFVix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFJTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFFVCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTNELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBb0I3RSxNQUFNLE9BQU8sbUJBQW1COzs7Ozs7OztJQXlFOUIsWUFDVSxVQUFtQyxFQUNuQyxRQUFtQixFQUNQLDBCQUFzRCxFQUNsRSxHQUFzQixFQUN0QixZQUEwQjtRQUoxQixlQUFVLEdBQVYsVUFBVSxDQUF5QjtRQUNuQyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ1AsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUE0QjtRQUNsRSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixpQkFBWSxHQUFaLFlBQVksQ0FBYzs7UUE1RXBDLGFBQVE7OztRQUF5QixHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUM7O1FBRTVDLGNBQVM7OztRQUFjLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBQztRQUdmLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUV4QyxnQkFBVyxHQUFHLEtBQUssQ0FBQztR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WjtpQkFDRjtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osU0FBUyxFQUFFLG1CQUFtQjtpQkFDL0I7YUFDRjs7OztZQXBDQyxVQUFVO1lBUVYsU0FBUztZQVNGLDBCQUEwQix1QkFnRzlCLFFBQVE7WUFuSFgsaUJBQWlCO1lBTFYsWUFBWTs7OzJCQWlEbEIsU0FBUyxTQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7NkJBQzFDLFNBQVMsU0FBQyxnQkFBZ0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7OEJBQzdDLE1BQU07c0JBQ04sS0FBSzswQkFDTCxLQUFLO3lCQUNMLEtBQUs7OEJBQ0wsS0FBSzt3QkFDTCxLQUFLOztBQUhtQjtJQUFmLFlBQVksRUFBRTs7d0RBQXFCO0FBQ3BCO0lBQWYsWUFBWSxFQUFFOzt1REFBb0I7QUFDbkI7SUFBZixZQUFZLEVBQUU7OzREQUF5QjtBQUN4QjtJQUFmLFlBQVksRUFBRTs7c0RBQW1COzs7SUFWM0MsdUNBQTRDOztJQUU1Qyx3Q0FBa0M7Ozs7O0lBQ2xDLDJDQUE4RTs7Ozs7SUFDOUUsNkNBQW1GOztJQUNuRiw4Q0FBaUU7O0lBQ2pFLHNDQUF5Qjs7SUFDekIsMENBQTZDOztJQUM3Qyx5Q0FBNEM7O0lBQzVDLDhDQUFpRDs7SUFDakQsd0NBQTJDOzs7OztJQThEekMseUNBQTJDOzs7OztJQUMzQyx1Q0FBMkI7Ozs7O0lBQzNCLHlEQUEwRTs7Ozs7SUFDMUUsa0NBQThCOzs7OztJQUM5QiwyQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEZvY3VzTW9uaXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcclxuaW1wb3J0IHtcclxuICBmb3J3YXJkUmVmLFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgaXNFbXB0eSwgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56Q2hlY2tib3hXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSAnLi9uei1jaGVja2JveC13cmFwcGVyLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1tuei1jaGVja2JveF0nLFxyXG4gIGV4cG9ydEFzOiAnbnpDaGVja2JveCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotY2hlY2tib3guY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnpDaGVja2JveENvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXSxcclxuICBob3N0OiB7XHJcbiAgICAnKGNsaWNrKSc6ICdob3N0Q2xpY2soJGV2ZW50KSdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekNoZWNrYm94Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBvbkNoYW5nZTogKHZhbHVlOiBhbnkpID0+IHZvaWQgPSAoKSA9PiBudWxsO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBvblRvdWNoZWQ6ICgpID0+IGFueSA9ICgpID0+IG51bGw7XHJcbiAgQFZpZXdDaGlsZCgnaW5wdXRFbGVtZW50JywgeyBzdGF0aWM6IHRydWUgfSkgcHJpdmF0ZSBpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnY29udGVudEVsZW1lbnQnLCB7IHN0YXRpYzogZmFsc2UgfSkgcHJpdmF0ZSBjb250ZW50RWxlbWVudDogRWxlbWVudFJlZjtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDaGVja2VkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIEBJbnB1dCgpIG56VmFsdWU6IHN0cmluZztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpBdXRvRm9jdXMgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDaGVja2VkID0gZmFsc2U7XHJcblxyXG4gIGhvc3RDbGljayhlOiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLmZvY3VzKCk7XHJcbiAgICB0aGlzLmlubmVyQ2hlY2tlZENoYW5nZSghdGhpcy5uekNoZWNrZWQpO1xyXG4gIH1cclxuXHJcbiAgaW5uZXJDaGVja2VkQ2hhbmdlKGNoZWNrZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5uekRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMubnpDaGVja2VkID0gY2hlY2tlZDtcclxuICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLm56Q2hlY2tlZCk7XHJcbiAgICAgIHRoaXMubnpDaGVja2VkQ2hhbmdlLmVtaXQodGhpcy5uekNoZWNrZWQpO1xyXG4gICAgICBpZiAodGhpcy5uekNoZWNrYm94V3JhcHBlckNvbXBvbmVudCkge1xyXG4gICAgICAgIHRoaXMubnpDaGVja2JveFdyYXBwZXJDb21wb25lbnQub25DaGFuZ2UoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlQXV0b0ZvY3VzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50ICYmIHRoaXMubnpBdXRvRm9jdXMpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2F1dG9mb2N1cycsICdhdXRvZm9jdXMnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdhdXRvZm9jdXMnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMubnpDaGVja2VkID0gdmFsdWU7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBib29sZWFuKSA9PiB7fSk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLm56RGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBmb2N1cygpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9jdXNNb25pdG9yLmZvY3VzVmlhKHRoaXMuaW5wdXRFbGVtZW50LCAna2V5Ym9hcmQnKTtcclxuICB9XHJcblxyXG4gIGJsdXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmJsdXIoKTtcclxuICB9XHJcblxyXG4gIGNoZWNrQ29udGVudCgpOiB2b2lkIHtcclxuICAgIGlmIChpc0VtcHR5KHRoaXMuY29udGVudEVsZW1lbnQubmF0aXZlRWxlbWVudCkpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmNvbnRlbnRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5jb250ZW50RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBuekNoZWNrYm94V3JhcHBlckNvbXBvbmVudDogTnpDaGVja2JveFdyYXBwZXJDb21wb25lbnQsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIGZvY3VzTW9uaXRvcjogRm9jdXNNb25pdG9yXHJcbiAgKSB7XHJcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtY2hlY2tib3gtd3JhcHBlcicpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmZvY3VzTW9uaXRvci5tb25pdG9yKHRoaXMuZWxlbWVudFJlZiwgdHJ1ZSkuc3Vic2NyaWJlKGZvY3VzT3JpZ2luID0+IHtcclxuICAgICAgaWYgKCFmb2N1c09yaWdpbikge1xyXG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy5vblRvdWNoZWQoKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaWYgKHRoaXMubnpDaGVja2JveFdyYXBwZXJDb21wb25lbnQpIHtcclxuICAgICAgdGhpcy5uekNoZWNrYm94V3JhcHBlckNvbXBvbmVudC5hZGRDaGVja2JveCh0aGlzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLm56QXV0b0ZvY3VzKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlQXV0b0ZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZUF1dG9Gb2N1cygpO1xyXG4gICAgdGhpcy5jaGVja0NvbnRlbnQoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5mb2N1c01vbml0b3Iuc3RvcE1vbml0b3JpbmcodGhpcy5lbGVtZW50UmVmKTtcclxuICAgIGlmICh0aGlzLm56Q2hlY2tib3hXcmFwcGVyQ29tcG9uZW50KSB7XHJcbiAgICAgIHRoaXMubnpDaGVja2JveFdyYXBwZXJDb21wb25lbnQucmVtb3ZlQ2hlY2tib3godGhpcyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==
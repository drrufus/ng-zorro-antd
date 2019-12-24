import { __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { FocusMonitor } from '@angular/cdk/a11y';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, forwardRef, HostListener, Input, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { InputBoolean } from 'ng-zorro-antd/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/a11y";
var _c0 = ["inputElement"];
var _c1 = ["nz-radio", ""];
var _c2 = ["*"];
var NzRadioComponent = /** @class */ (function () {
    /* tslint:disable-next-line:no-any */
    function NzRadioComponent(elementRef, renderer, cdr, focusMonitor) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.cdr = cdr;
        this.focusMonitor = focusMonitor;
        this.select$ = new Subject();
        this.touched$ = new Subject();
        this.checked = false;
        this.isNgModel = false;
        this.onChange = function () { return null; };
        this.onTouched = function () { return null; };
        this.nzDisabled = false;
        this.nzAutoFocus = false;
        this.renderer.addClass(elementRef.nativeElement, 'ant-radio-wrapper');
    }
    NzRadioComponent.prototype.updateAutoFocus = function () {
        if (this.inputElement) {
            if (this.nzAutoFocus) {
                this.renderer.setAttribute(this.inputElement.nativeElement, 'autofocus', 'autofocus');
            }
            else {
                this.renderer.removeAttribute(this.inputElement.nativeElement, 'autofocus');
            }
        }
    };
    NzRadioComponent.prototype.onClick = function (event) {
        // Prevent label click triggered twice.
        event.stopPropagation();
        event.preventDefault();
        if (!this.nzDisabled && !this.checked) {
            this.select$.next(this);
            if (this.isNgModel) {
                this.checked = true;
                this.onChange(true);
            }
        }
    };
    NzRadioComponent.prototype.focus = function () {
        this.focusMonitor.focusVia(this.inputElement, 'keyboard');
    };
    NzRadioComponent.prototype.blur = function () {
        this.inputElement.nativeElement.blur();
    };
    NzRadioComponent.prototype.markForCheck = function () {
        this.cdr.markForCheck();
    };
    NzRadioComponent.prototype.setDisabledState = function (isDisabled) {
        this.nzDisabled = isDisabled;
        this.cdr.markForCheck();
    };
    NzRadioComponent.prototype.writeValue = function (value) {
        this.checked = value;
        this.cdr.markForCheck();
    };
    NzRadioComponent.prototype.registerOnChange = function (fn) {
        this.isNgModel = true;
        this.onChange = fn;
    };
    NzRadioComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    NzRadioComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.focusMonitor.monitor(this.elementRef, true).subscribe(function (focusOrigin) {
            if (!focusOrigin) {
                Promise.resolve().then(function () { return _this.onTouched(); });
                _this.touched$.next();
            }
        });
        this.updateAutoFocus();
    };
    NzRadioComponent.prototype.ngOnChanges = function (changes) {
        if (changes.nzAutoFocus) {
            this.updateAutoFocus();
        }
    };
    NzRadioComponent.prototype.ngOnDestroy = function () {
        this.focusMonitor.stopMonitoring(this.elementRef);
    };
    /** @nocollapse */ NzRadioComponent.ɵfac = function NzRadioComponent_Factory(t) { return new (t || NzRadioComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.FocusMonitor)); };
    /** @nocollapse */ NzRadioComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzRadioComponent, selectors: [["", "nz-radio", ""]], viewQuery: function NzRadioComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
        } }, hostBindings: function NzRadioComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            i0.ɵɵallocHostVars(2);
            i0.ɵɵlistener("click", function NzRadioComponent_click_HostBindingHandler($event) { return ctx.onClick($event); });
        } if (rf & 2) {
            i0.ɵɵclassProp("ant-radio-wrapper-checked", ctx.checked)("ant-radio-wrapper-disabled", ctx.nzDisabled);
        } }, inputs: { nzValue: "nzValue", nzDisabled: "nzDisabled", nzAutoFocus: "nzAutoFocus" }, exportAs: ["nzRadio"], features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef((function () { return NzRadioComponent; })),
                    multi: true
                }
            ]), i0.ɵɵNgOnChangesFeature()], attrs: _c1, ngContentSelectors: _c2, decls: 6, vars: 5, consts: [[1, "ant-radio"], ["type", "radio", 1, "ant-radio-input", 3, "disabled", "checked"], ["inputElement", ""], [1, "ant-radio-inner"]], template: function NzRadioComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "span", 0);
            i0.ɵɵelement(1, "input", 1, 2);
            i0.ɵɵelement(3, "span", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "span");
            i0.ɵɵprojection(5);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassProp("ant-radio-checked", ctx.checked)("ant-radio-disabled", ctx.nzDisabled);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("disabled", ctx.nzDisabled)("checked", ctx.checked);
            i0.ɵɵattribute("name", ctx.name);
        } }, encapsulation: 2, changeDetection: 0 });
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzRadioComponent.prototype, "nzDisabled", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzRadioComponent.prototype, "nzAutoFocus", void 0);
    return NzRadioComponent;
}());
export { NzRadioComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzRadioComponent, [{
        type: Component,
        args: [{
                selector: '[nz-radio]',
                exportAs: 'nzRadio',
                preserveWhitespaces: false,
                templateUrl: './nz-radio.component.html',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((function () { return NzRadioComponent; })),
                        multi: true
                    }
                ],
                host: {
                    '[class.ant-radio-wrapper-checked]': 'checked',
                    '[class.ant-radio-wrapper-disabled]': 'nzDisabled'
                }
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }, { type: i1.FocusMonitor }]; }, { inputElement: [{
            type: ViewChild,
            args: ['inputElement', { static: false }]
        }], nzValue: [{
            type: Input
        }], nzDisabled: [{
            type: Input
        }], nzAutoFocus: [{
            type: Input
        }], onClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9yYWRpby8iLCJzb3VyY2VzIjpbIm56LXJhZGlvLmNvbXBvbmVudC50cyIsIm56LXJhZGlvLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFHTCxTQUFTLEVBRVQsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7OztBQUVsRDtJQXFFRSxxQ0FBcUM7SUFDckMsMEJBQ1UsVUFBc0IsRUFDdEIsUUFBbUIsRUFDbkIsR0FBc0IsRUFDdEIsWUFBMEI7UUFIMUIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBdERwQyxZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQW9CLENBQUM7UUFDMUMsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFDL0IsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUVoQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGFBQVEsR0FBeUIsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLENBQUM7UUFDNUMsY0FBUyxHQUFlLGNBQU0sT0FBQSxJQUFJLEVBQUosQ0FBSSxDQUFD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O2lCQUNGO2dCQUNELElBQUksRUFBRTtvQkFDSixtQ0FBbUMsRUFBRSxTQUFTO29CQUM5QyxvQ0FBb0MsRUFBRSxZQUFZO2lCQUNuRDthQUNGOztrQkFTRSxTQUFTO21CQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7O2tCQUUzQyxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFZTCxZQUFZO21CQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgRm9jdXNNb25pdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgZm9yd2FyZFJlZixcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdbbnotcmFkaW9dJyxcclxuICBleHBvcnRBczogJ256UmFkaW8nLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1yYWRpby5jb21wb25lbnQuaHRtbCcsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE56UmFkaW9Db21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF0sXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtcmFkaW8td3JhcHBlci1jaGVja2VkXSc6ICdjaGVja2VkJyxcclxuICAgICdbY2xhc3MuYW50LXJhZGlvLXdyYXBwZXItZGlzYWJsZWRdJzogJ256RGlzYWJsZWQnXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpSYWRpb0NvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgc2VsZWN0JCA9IG5ldyBTdWJqZWN0PE56UmFkaW9Db21wb25lbnQ+KCk7XHJcbiAgdG91Y2hlZCQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIGNoZWNrZWQgPSBmYWxzZTtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgaXNOZ01vZGVsID0gZmFsc2U7XHJcbiAgb25DaGFuZ2U6IChfOiBib29sZWFuKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcclxuICBvblRvdWNoZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiBudWxsO1xyXG4gIEBWaWV3Q2hpbGQoJ2lucHV0RWxlbWVudCcsIHsgc3RhdGljOiBmYWxzZSB9KSBpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xyXG4gIEBJbnB1dCgpIG56VmFsdWU6IGFueTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekF1dG9Gb2N1cyA9IGZhbHNlO1xyXG5cclxuICB1cGRhdGVBdXRvRm9jdXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnQpIHtcclxuICAgICAgaWYgKHRoaXMubnpBdXRvRm9jdXMpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnYXV0b2ZvY3VzJywgJ2F1dG9mb2N1cycpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdhdXRvZm9jdXMnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxyXG4gIG9uQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIC8vIFByZXZlbnQgbGFiZWwgY2xpY2sgdHJpZ2dlcmVkIHR3aWNlLlxyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKCF0aGlzLm56RGlzYWJsZWQgJiYgIXRoaXMuY2hlY2tlZCkge1xyXG4gICAgICB0aGlzLnNlbGVjdCQubmV4dCh0aGlzKTtcclxuICAgICAgaWYgKHRoaXMuaXNOZ01vZGVsKSB7XHJcbiAgICAgICAgdGhpcy5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlKHRydWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb2N1cygpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9jdXNNb25pdG9yLmZvY3VzVmlhKHRoaXMuaW5wdXRFbGVtZW50LCAna2V5Ym9hcmQnKTtcclxuICB9XHJcblxyXG4gIGJsdXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmJsdXIoKTtcclxuICB9XHJcblxyXG4gIG1hcmtGb3JDaGVjaygpOiB2b2lkIHtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBmb2N1c01vbml0b3I6IEZvY3VzTW9uaXRvclxyXG4gICkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtcmFkaW8td3JhcHBlcicpO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLm56RGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoZWNrZWQgPSB2YWx1ZTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IGJvb2xlYW4pID0+IHt9KTogdm9pZCB7XHJcbiAgICB0aGlzLmlzTmdNb2RlbCA9IHRydWU7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4ge30pOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmZvY3VzTW9uaXRvci5tb25pdG9yKHRoaXMuZWxlbWVudFJlZiwgdHJ1ZSkuc3Vic2NyaWJlKGZvY3VzT3JpZ2luID0+IHtcclxuICAgICAgaWYgKCFmb2N1c09yaWdpbikge1xyXG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy5vblRvdWNoZWQoKSk7XHJcbiAgICAgICAgdGhpcy50b3VjaGVkJC5uZXh0KCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy51cGRhdGVBdXRvRm9jdXMoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLm56QXV0b0ZvY3VzKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlQXV0b0ZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9jdXNNb25pdG9yLnN0b3BNb25pdG9yaW5nKHRoaXMuZWxlbWVudFJlZik7XHJcbiAgfVxyXG59XHJcbiIsIjxzcGFuIGNsYXNzPVwiYW50LXJhZGlvXCIgW2NsYXNzLmFudC1yYWRpby1jaGVja2VkXT1cImNoZWNrZWRcIiBbY2xhc3MuYW50LXJhZGlvLWRpc2FibGVkXT1cIm56RGlzYWJsZWRcIj5cclxuICA8aW5wdXRcclxuICAgICNpbnB1dEVsZW1lbnRcclxuICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICBjbGFzcz1cImFudC1yYWRpby1pbnB1dFwiXHJcbiAgICBbZGlzYWJsZWRdPVwibnpEaXNhYmxlZFwiXHJcbiAgICBbY2hlY2tlZF09XCJjaGVja2VkXCJcclxuICAgIFthdHRyLm5hbWVdPVwibmFtZVwiXHJcbiAgLz5cclxuICA8c3BhbiBjbGFzcz1cImFudC1yYWRpby1pbm5lclwiPjwvc3Bhbj5cclxuPC9zcGFuPlxyXG48c3Bhbj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9zcGFuPlxyXG4iXX0=
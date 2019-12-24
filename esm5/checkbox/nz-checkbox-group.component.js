import { __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { FocusMonitor } from '@angular/cdk/a11y';
import { ChangeDetectorRef, Component, ElementRef, forwardRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputBoolean } from 'ng-zorro-antd/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/a11y";
import * as i2 from "@angular/common";
import * as i3 from "./nz-checkbox.component";
function NzCheckboxGroupComponent_label_0_Template(rf, ctx) { if (rf & 1) {
    var _r148 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 1);
    i0.ɵɵlistener("nzCheckedChange", function NzCheckboxGroupComponent_label_0_Template_label_nzCheckedChange_0_listener($event) { i0.ɵɵrestoreView(_r148); var option_r146 = ctx.$implicit; return option_r146.checked = $event; })("nzCheckedChange", function NzCheckboxGroupComponent_label_0_Template_label_nzCheckedChange_0_listener($event) { i0.ɵɵrestoreView(_r148); var ctx_r149 = i0.ɵɵnextContext(); return ctx_r149.onOptionChange(); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var option_r146 = ctx.$implicit;
    var ctx_r145 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nzDisabled", option_r146.disabled || ctx_r145.nzDisabled)("nzChecked", option_r146.checked);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(option_r146.label);
} }
var NzCheckboxGroupComponent = /** @class */ (function () {
    function NzCheckboxGroupComponent(elementRef, focusMonitor, cdr, renderer) {
        this.elementRef = elementRef;
        this.focusMonitor = focusMonitor;
        this.cdr = cdr;
        // tslint:disable-next-line:no-any
        this.onChange = function () { return null; };
        // tslint:disable-next-line:no-any
        this.onTouched = function () { return null; };
        this.options = [];
        this.nzDisabled = false;
        renderer.addClass(elementRef.nativeElement, 'ant-checkbox-group');
    }
    NzCheckboxGroupComponent.prototype.onOptionChange = function () {
        this.onChange(this.options);
    };
    NzCheckboxGroupComponent.prototype.trackByOption = function (_index, option) {
        return option.value;
    };
    NzCheckboxGroupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.focusMonitor.monitor(this.elementRef, true).subscribe(function (focusOrigin) {
            if (!focusOrigin) {
                Promise.resolve().then(function () { return _this.onTouched(); });
            }
        });
    };
    NzCheckboxGroupComponent.prototype.ngOnDestroy = function () {
        this.focusMonitor.stopMonitoring(this.elementRef);
    };
    NzCheckboxGroupComponent.prototype.writeValue = function (value) {
        this.options = value;
        this.cdr.markForCheck();
    };
    NzCheckboxGroupComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    NzCheckboxGroupComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    NzCheckboxGroupComponent.prototype.setDisabledState = function (isDisabled) {
        this.nzDisabled = isDisabled;
        this.cdr.markForCheck();
    };
    /** @nocollapse */ NzCheckboxGroupComponent.ɵfac = function NzCheckboxGroupComponent_Factory(t) { return new (t || NzCheckboxGroupComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.FocusMonitor), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    /** @nocollapse */ NzCheckboxGroupComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzCheckboxGroupComponent, selectors: [["nz-checkbox-group"]], inputs: { nzDisabled: "nzDisabled" }, exportAs: ["nzCheckboxGroup"], features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef((function () { return NzCheckboxGroupComponent; })),
                    multi: true
                }
            ])], decls: 1, vars: 2, consts: [["nz-checkbox", "", "class", "ant-checkbox-group-item", 3, "nzDisabled", "nzChecked", "nzCheckedChange", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["nz-checkbox", "", 1, "ant-checkbox-group-item", 3, "nzDisabled", "nzChecked", "nzCheckedChange"]], template: function NzCheckboxGroupComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, NzCheckboxGroupComponent_label_0_Template, 3, 3, "label", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngForOf", ctx.options)("ngForTrackBy", ctx.trackByOption);
        } }, directives: [i2.NgForOf, i3.NzCheckboxComponent], encapsulation: 2 });
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzCheckboxGroupComponent.prototype, "nzDisabled", void 0);
    return NzCheckboxGroupComponent;
}());
export { NzCheckboxGroupComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzCheckboxGroupComponent, [{
        type: Component,
        args: [{
                selector: 'nz-checkbox-group',
                exportAs: 'nzCheckboxGroup',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                templateUrl: './nz-checkbox-group.component.html',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((function () { return NzCheckboxGroupComponent; })),
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.FocusMonitor }, { type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }]; }, { nzDisabled: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2hlY2tib3gtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jaGVja2JveC8iLCJzb3VyY2VzIjpbIm56LWNoZWNrYm94LWdyb3VwLmNvbXBvbmVudC50cyIsIm56LWNoZWNrYm94LWdyb3VwLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixLQUFLLEVBR0wsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7Ozs7O0lDdEJsRCxnQ0FRRTtJQUhBLGdPQUE4QixrTkFBQTtJQUc5Qiw0QkFBTTtJQUFBLFlBQWtCO0lBQUEsaUJBQU87SUFDakMsaUJBQVE7Ozs7SUFMTix3RUFBNEMsa0NBQUE7SUFJdEMsZUFBa0I7SUFBbEIsdUNBQWtCOztBRHVCMUI7SUE4QkUsa0NBQW9CLFVBQXNCLEVBQVUsWUFBMEIsRUFBVSxHQUFzQixFQUFFLFFBQW1CO1FBQS9HLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBZjlHLGtDQUFrQztRQUNsQyxhQUFRLEdBQXlCLGNBQU0sT0FBQSxJQUFJLEVBQUosQ0FBSSxDQUFDO1FBQzVDLGtDQUFrQztRQUNsQyxjQUFTLEdBQWMsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLENBQUM7UUFDbEMsWUFBTyxHQUFnQyxFQUFFLENBQUM7UUFDakIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQVcxQyxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBVkQsaURBQWMsR0FBZDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxnREFBYSxHQUFiLFVBQWMsTUFBYyxFQUFFLE1BQWlDO1FBQzdELE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBTUQsMkNBQVEsR0FBUjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxXQUFXO1lBQ3BFLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ2hCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxTQUFTLEVBQUUsRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO2FBQ2hEO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsOENBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsNkNBQVUsR0FBVixVQUFXLEtBQWtDO1FBQzNDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELG1EQUFnQixHQUFoQixVQUFpQixFQUEwQztRQUN6RCxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsb0RBQWlCLEdBQWpCLFVBQWtCLEVBQVk7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELG1EQUFnQixHQUFoQixVQUFpQixVQUFtQjtRQUNsQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7b0dBaERVLHdCQUF3QjtpRUFBeEIsd0JBQXdCLDRJQVJ4QjtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsaUJBQWlCO29CQUMxQixXQUFXLEVBQUUsVUFBVSxFQUFDLGNBQU0sT0FBQSx3QkFBd0IsRUFBeEIsQ0FBd0IsRUFBQztvQkFDdkQsS0FBSyxFQUFFLElBQUk7aUJBQ1o7YUFDRjtZQzNDSCw2RUFRRTs7WUFMQSxxQ0FBc0QsbUNBQUE7O0lEZ0Q3QjtRQUFmLFlBQVksRUFBRTs7Z0VBQW9CO21DQW5EOUM7Q0E4RkMsQUEvREQsSUErREM7U0FqRFksd0JBQXdCO2tEQUF4Qix3QkFBd0I7Y0FkcEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxXQUFXLEVBQUUsb0NBQW9DO2dCQUNqRCxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVUsRUFBQyxjQUFNLE9BQUEsd0JBQXdCLEVBQXhCLENBQXdCLEVBQUM7d0JBQ3ZELEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGO2FBQ0Y7O2tCQU9FLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEZvY3VzTW9uaXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBmb3J3YXJkUmVmLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE56Q2hlY2tCb3hPcHRpb25JbnRlcmZhY2Uge1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgdmFsdWU6IHN0cmluZztcclxuICBjaGVja2VkPzogYm9vbGVhbjtcclxuICBkaXNhYmxlZD86IGJvb2xlYW47XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotY2hlY2tib3gtZ3JvdXAnLFxyXG4gIGV4cG9ydEFzOiAnbnpDaGVja2JveEdyb3VwJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1jaGVja2JveC1ncm91cC5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOekNoZWNrYm94R3JvdXBDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56Q2hlY2tib3hHcm91cENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIG9uQ2hhbmdlOiAodmFsdWU6IGFueSkgPT4gdm9pZCA9ICgpID0+IG51bGw7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIG9uVG91Y2hlZDogKCkgPT4gYW55ID0gKCkgPT4gbnVsbDtcclxuICBvcHRpb25zOiBOekNoZWNrQm94T3B0aW9uSW50ZXJmYWNlW10gPSBbXTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICBvbk9wdGlvbkNoYW5nZSgpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UodGhpcy5vcHRpb25zKTtcclxuICB9XHJcblxyXG4gIHRyYWNrQnlPcHRpb24oX2luZGV4OiBudW1iZXIsIG9wdGlvbjogTnpDaGVja0JveE9wdGlvbkludGVyZmFjZSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gb3B0aW9uLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIGZvY3VzTW9uaXRvcjogRm9jdXNNb25pdG9yLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1jaGVja2JveC1ncm91cCcpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmZvY3VzTW9uaXRvci5tb25pdG9yKHRoaXMuZWxlbWVudFJlZiwgdHJ1ZSkuc3Vic2NyaWJlKGZvY3VzT3JpZ2luID0+IHtcclxuICAgICAgaWYgKCFmb2N1c09yaWdpbikge1xyXG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy5vblRvdWNoZWQoKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmZvY3VzTW9uaXRvci5zdG9wTW9uaXRvcmluZyh0aGlzLmVsZW1lbnRSZWYpO1xyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogTnpDaGVja0JveE9wdGlvbkludGVyZmFjZVtdKTogdm9pZCB7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSB2YWx1ZTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IE56Q2hlY2tCb3hPcHRpb25JbnRlcmZhY2VbXSkgPT4ge30pOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5uekRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxufVxyXG4iLCI8bGFiZWxcclxuICBuei1jaGVja2JveFxyXG4gIGNsYXNzPVwiYW50LWNoZWNrYm94LWdyb3VwLWl0ZW1cIlxyXG4gICpuZ0Zvcj1cImxldCBvcHRpb24gb2Ygb3B0aW9uczsgdHJhY2tCeTogdHJhY2tCeU9wdGlvblwiXHJcbiAgW256RGlzYWJsZWRdPVwib3B0aW9uLmRpc2FibGVkIHx8IG56RGlzYWJsZWRcIlxyXG4gIFsobnpDaGVja2VkKV09XCJvcHRpb24uY2hlY2tlZFwiXHJcbiAgKG56Q2hlY2tlZENoYW5nZSk9XCJvbk9wdGlvbkNoYW5nZSgpXCJcclxuPlxyXG4gIDxzcGFuPnt7IG9wdGlvbi5sYWJlbCB9fTwvc3Bhbj5cclxuPC9sYWJlbD5cclxuIl19
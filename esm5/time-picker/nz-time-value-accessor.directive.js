/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DateHelperService } from 'ng-zorro-antd/i18n';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/i18n";
var NzTimeValueAccessorDirective = /** @class */ (function () {
    function NzTimeValueAccessorDirective(dateHelper, elementRef) {
        this.dateHelper = dateHelper;
        this.elementRef = elementRef;
    }
    NzTimeValueAccessorDirective.prototype.keyup = function () {
        this.changed();
    };
    NzTimeValueAccessorDirective.prototype.blur = function () {
        this.touched();
    };
    NzTimeValueAccessorDirective.prototype.changed = function () {
        if (this._onChange) {
            var value = this.dateHelper.parseTime(this.elementRef.nativeElement.value);
            this._onChange(value);
        }
    };
    NzTimeValueAccessorDirective.prototype.touched = function () {
        if (this._onTouch) {
            this._onTouch();
        }
    };
    NzTimeValueAccessorDirective.prototype.setRange = function () {
        this.elementRef.nativeElement.focus();
        this.elementRef.nativeElement.setSelectionRange(0, this.elementRef.nativeElement.value.length);
    };
    NzTimeValueAccessorDirective.prototype.writeValue = function (value) {
        this.elementRef.nativeElement.value = this.dateHelper.format(value, this.nzTime);
    };
    NzTimeValueAccessorDirective.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    NzTimeValueAccessorDirective.prototype.registerOnTouched = function (fn) {
        this._onTouch = fn;
    };
    /** @nocollapse */ NzTimeValueAccessorDirective.ɵfac = function NzTimeValueAccessorDirective_Factory(t) { return new (t || NzTimeValueAccessorDirective)(i0.ɵɵdirectiveInject(i1.DateHelperService), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    /** @nocollapse */ NzTimeValueAccessorDirective.ɵdir = i0.ɵɵdefineDirective({ type: NzTimeValueAccessorDirective, selectors: [["input", "nzTime", ""]], hostBindings: function NzTimeValueAccessorDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            i0.ɵɵlistener("keyup", function NzTimeValueAccessorDirective_keyup_HostBindingHandler($event) { return ctx.keyup(); })("blur", function NzTimeValueAccessorDirective_blur_HostBindingHandler($event) { return ctx.blur(); });
        } }, inputs: { nzTime: "nzTime" }, exportAs: ["nzTime"], features: [i0.ɵɵProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: NzTimeValueAccessorDirective, multi: true }])] });
    return NzTimeValueAccessorDirective;
}());
export { NzTimeValueAccessorDirective };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzTimeValueAccessorDirective, [{
        type: Directive,
        args: [{
                selector: 'input[nzTime]',
                exportAs: 'nzTime',
                providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: NzTimeValueAccessorDirective, multi: true }]
            }]
    }], function () { return [{ type: i1.DateHelperService }, { type: i0.ElementRef }]; }, { nzTime: [{
            type: Input
        }], keyup: [{
            type: HostListener,
            args: ['keyup']
        }], blur: [{
            type: HostListener,
            args: ['blur']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGltZS12YWx1ZS1hY2Nlc3Nvci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3RpbWUtcGlja2VyLyIsInNvdXJjZXMiOlsibnotdGltZS12YWx1ZS1hY2Nlc3Nvci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7OztBQUV2RDtJQXNDRSxzQ0FBb0IsVUFBNkIsRUFBVSxVQUFzQjtRQUE3RCxlQUFVLEdBQVYsVUFBVSxDQUFtQjtRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7SUFBRyxDQUFDO0lBM0JyRiw0Q0FBSyxHQURMO1FBRUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFHRCwyQ0FBSSxHQURKO1FBRUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCw4Q0FBTyxHQUFQO1FBQ0UsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBTSxDQUFDLENBQUM7U0FDeEI7SUFDSCxDQUFDO0lBRUQsOENBQU8sR0FBUDtRQUNFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDakI7SUFDSCxDQUFDO0lBRUQsK0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakcsQ0FBQztJQUlELGlEQUFVLEdBQVYsVUFBVyxLQUFXO1FBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFFRCx1REFBZ0IsR0FBaEIsVUFBaUIsRUFBeUI7UUFDeEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELHdEQUFpQixHQUFqQixVQUFrQixFQUFjO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7NEdBN0NVLDRCQUE0QjtxRUFBNUIsNEJBQTRCOztrR0FGNUIsQ0FBQyxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsNEJBQTRCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDO3VDQWhCckc7Q0FnRUMsQUFuREQsSUFtREM7U0E5Q1ksNEJBQTRCO2tEQUE1Qiw0QkFBNEI7Y0FMeEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUUsUUFBUTtnQkFDbEIsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLDRCQUE0QixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQzthQUNwRzs7a0JBSUUsS0FBSzs7a0JBRUwsWUFBWTttQkFBQyxPQUFPOztrQkFLcEIsWUFBWTttQkFBQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgRGF0ZUhlbHBlclNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdpbnB1dFtuelRpbWVdJyxcclxuICBleHBvcnRBczogJ256VGltZScsXHJcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUiwgdXNlRXhpc3Rpbmc6IE56VGltZVZhbHVlQWNjZXNzb3JEaXJlY3RpdmUsIG11bHRpOiB0cnVlIH1dXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelRpbWVWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG4gIHByaXZhdGUgX29uQ2hhbmdlOiAodmFsdWU6IERhdGUpID0+IHZvaWQ7XHJcbiAgcHJpdmF0ZSBfb25Ub3VjaDogKCkgPT4gdm9pZDtcclxuICBASW5wdXQoKSBuelRpbWU6IHN0cmluZztcclxuXHJcbiAgQEhvc3RMaXN0ZW5lcigna2V5dXAnKVxyXG4gIGtleXVwKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jaGFuZ2VkKCk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdibHVyJylcclxuICBibHVyKCk6IHZvaWQge1xyXG4gICAgdGhpcy50b3VjaGVkKCk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VkKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX29uQ2hhbmdlKSB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5kYXRlSGVscGVyLnBhcnNlVGltZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC52YWx1ZSk7XHJcbiAgICAgIHRoaXMuX29uQ2hhbmdlKHZhbHVlISk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b3VjaGVkKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX29uVG91Y2gpIHtcclxuICAgICAgdGhpcy5fb25Ub3VjaCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0UmFuZ2UoKTogdm9pZCB7XHJcbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2UoMCwgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQudmFsdWUubGVuZ3RoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0ZUhlbHBlcjogRGF0ZUhlbHBlclNlcnZpY2UsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogRGF0ZSk6IHZvaWQge1xyXG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB0aGlzLmRhdGVIZWxwZXIuZm9ybWF0KHZhbHVlLCB0aGlzLm56VGltZSk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IERhdGUpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMuX29uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5fb25Ub3VjaCA9IGZuO1xyXG4gIH1cclxufVxyXG4iXX0=
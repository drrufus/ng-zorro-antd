/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, ElementRef, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NzMentionService } from './nz-mention.service';
import * as i0 from "@angular/core";
import * as i1 from "./nz-mention.service";
var _c0 = ["autocomplete", "off"];
export var NZ_MENTION_TRIGGER_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return NzMentionTriggerDirective; }),
    multi: true
};
var NzMentionTriggerDirective = /** @class */ (function () {
    function NzMentionTriggerDirective(el, nzMentionService) {
        this.el = el;
        this.nzMentionService = nzMentionService;
        this.onFocusin = new EventEmitter();
        this.onBlur = new EventEmitter();
        this.onInput = new EventEmitter();
        this.onKeydown = new EventEmitter();
        this.onClick = new EventEmitter();
    }
    NzMentionTriggerDirective.prototype.completeEvents = function () {
        this.onFocusin.complete();
        this.onBlur.complete();
        this.onInput.complete();
        this.onKeydown.complete();
        this.onClick.complete();
    };
    NzMentionTriggerDirective.prototype.focus = function (caretPos) {
        this.el.nativeElement.focus();
        this.el.nativeElement.setSelectionRange(caretPos, caretPos);
    };
    NzMentionTriggerDirective.prototype.insertMention = function (mention) {
        var value = this.el.nativeElement.value;
        var insertValue = mention.mention.trim() + ' ';
        var newValue = [value.slice(0, mention.startPos + 1), insertValue, value.slice(mention.endPos, value.length)].join('');
        this.el.nativeElement.value = newValue;
        this.focus(mention.startPos + insertValue.length + 1);
        this.onChange(newValue);
        this.value = newValue;
    };
    NzMentionTriggerDirective.prototype.writeValue = function (value) {
        this.value = value;
        if (typeof value === 'string') {
            this.el.nativeElement.value = value;
        }
        else {
            this.el.nativeElement.value = '';
        }
    };
    NzMentionTriggerDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    NzMentionTriggerDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    NzMentionTriggerDirective.prototype.ngAfterViewInit = function () {
        this.nzMentionService.registerTrigger(this);
    };
    NzMentionTriggerDirective.prototype.ngOnDestroy = function () {
        this.completeEvents();
    };
    /** @nocollapse */ NzMentionTriggerDirective.ɵfac = function NzMentionTriggerDirective_Factory(t) { return new (t || NzMentionTriggerDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.NzMentionService)); };
    /** @nocollapse */ NzMentionTriggerDirective.ɵdir = i0.ɵɵdefineDirective({ type: NzMentionTriggerDirective, selectors: [["input", "nzMentionTrigger", ""], ["textarea", "nzMentionTrigger", ""]], hostBindings: function NzMentionTriggerDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            i0.ɵɵlistener("focusin", function NzMentionTriggerDirective_focusin_HostBindingHandler($event) { return ctx.onFocusin.emit(); })("blur", function NzMentionTriggerDirective_blur_HostBindingHandler($event) { return ctx.onBlur.emit(); })("input", function NzMentionTriggerDirective_input_HostBindingHandler($event) { return ctx.onInput.emit($event); })("keydown", function NzMentionTriggerDirective_keydown_HostBindingHandler($event) { return ctx.onKeydown.emit($event); })("click", function NzMentionTriggerDirective_click_HostBindingHandler($event) { return ctx.onClick.emit($event); });
            i0.ɵɵelementHostAttrs(_c0);
        } }, exportAs: ["nzMentionTrigger"], features: [i0.ɵɵProvidersFeature([NZ_MENTION_TRIGGER_ACCESSOR])] });
    return NzMentionTriggerDirective;
}());
export { NzMentionTriggerDirective };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzMentionTriggerDirective, [{
        type: Directive,
        args: [{
                selector: 'input[nzMentionTrigger], textarea[nzMentionTrigger]',
                exportAs: 'nzMentionTrigger',
                providers: [NZ_MENTION_TRIGGER_ACCESSOR],
                host: {
                    autocomplete: 'off',
                    '(focusin)': 'onFocusin.emit()',
                    '(blur)': 'onBlur.emit()',
                    '(input)': 'onInput.emit($event)',
                    '(keydown)': 'onKeydown.emit($event)',
                    '(click)': 'onClick.emit($event)'
                }
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.NzMentionService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudGlvbi10cmlnZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9tZW50aW9uLyIsInNvdXJjZXMiOlsibnotbWVudGlvbi10cmlnZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBaUIsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQW9CLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUM1SCxPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHekUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7QUFFeEQsTUFBTSxDQUFDLElBQU0sMkJBQTJCLEdBQXFCO0lBQzNELE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEseUJBQXlCLEVBQXpCLENBQXlCLENBQUM7SUFDeEQsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDO0FBRUY7SUF3QkUsbUNBQW1CLEVBQWMsRUFBVSxnQkFBa0M7UUFBMUQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFQcEUsY0FBUyxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25ELFdBQU0sR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNoRCxZQUFPLEdBQWdDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDMUQsY0FBUyxHQUFnQyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzVELFlBQU8sR0FBNkIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUdnQixDQUFDO0lBRWpGLGtEQUFjLEdBQWQ7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELHlDQUFLLEdBQUwsVUFBTSxRQUFpQjtRQUNyQixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELGlEQUFhLEdBQWIsVUFBYyxPQUFnQjtRQUM1QixJQUFNLEtBQUssR0FBVyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFDbEQsSUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFDakQsSUFBTSxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxFQUFFLFdBQVcsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3pILElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7UUFDdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztJQUN4QixDQUFDO0lBRUQsOENBQVUsR0FBVixVQUFXLEtBQWE7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDN0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztTQUNyQzthQUFNO1lBQ0wsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztTQUNsQztJQUNILENBQUM7SUFFRCxvREFBZ0IsR0FBaEIsVUFBaUIsRUFBMkI7UUFDMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELHFEQUFpQixHQUFqQixVQUFrQixFQUFjO1FBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxtREFBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsK0NBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDO3NHQTNEVSx5QkFBeUI7a0VBQXpCLHlCQUF5Qjs7OzhFQVZ6QixDQUFDLDJCQUEyQixDQUFDO29DQXZCMUM7Q0E2RkMsQUF6RUQsSUF5RUM7U0E1RFkseUJBQXlCO2tEQUF6Qix5QkFBeUI7Y0FickMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxxREFBcUQ7Z0JBQy9ELFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO2dCQUN4QyxJQUFJLEVBQUU7b0JBQ0osWUFBWSxFQUFFLEtBQUs7b0JBQ25CLFdBQVcsRUFBRSxrQkFBa0I7b0JBQy9CLFFBQVEsRUFBRSxlQUFlO29CQUN6QixTQUFTLEVBQUUsc0JBQXNCO29CQUNqQyxXQUFXLEVBQUUsd0JBQXdCO29CQUNyQyxTQUFTLEVBQUUsc0JBQXNCO2lCQUNsQzthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgRXhpc3RpbmdQcm92aWRlciwgZm9yd2FyZFJlZiwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IE1lbnRpb24gfSBmcm9tICcuL256LW1lbnRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpNZW50aW9uU2VydmljZSB9IGZyb20gJy4vbnotbWVudGlvbi5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBjb25zdCBOWl9NRU5USU9OX1RSSUdHRVJfQUNDRVNTT1I6IEV4aXN0aW5nUHJvdmlkZXIgPSB7XHJcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnpNZW50aW9uVHJpZ2dlckRpcmVjdGl2ZSksXHJcbiAgbXVsdGk6IHRydWVcclxufTtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnaW5wdXRbbnpNZW50aW9uVHJpZ2dlcl0sIHRleHRhcmVhW256TWVudGlvblRyaWdnZXJdJyxcclxuICBleHBvcnRBczogJ256TWVudGlvblRyaWdnZXInLFxyXG4gIHByb3ZpZGVyczogW05aX01FTlRJT05fVFJJR0dFUl9BQ0NFU1NPUl0sXHJcbiAgaG9zdDoge1xyXG4gICAgYXV0b2NvbXBsZXRlOiAnb2ZmJyxcclxuICAgICcoZm9jdXNpbiknOiAnb25Gb2N1c2luLmVtaXQoKScsXHJcbiAgICAnKGJsdXIpJzogJ29uQmx1ci5lbWl0KCknLFxyXG4gICAgJyhpbnB1dCknOiAnb25JbnB1dC5lbWl0KCRldmVudCknLFxyXG4gICAgJyhrZXlkb3duKSc6ICdvbktleWRvd24uZW1pdCgkZXZlbnQpJyxcclxuICAgICcoY2xpY2spJzogJ29uQ2xpY2suZW1pdCgkZXZlbnQpJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56TWVudGlvblRyaWdnZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcclxuICBvbkNoYW5nZTogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgb25Ub3VjaGVkOiAoKSA9PiB2b2lkO1xyXG5cclxuICByZWFkb25seSBvbkZvY3VzaW46IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICByZWFkb25seSBvbkJsdXI6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICByZWFkb25seSBvbklucHV0OiBFdmVudEVtaXR0ZXI8S2V5Ym9hcmRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgcmVhZG9ubHkgb25LZXlkb3duOiBFdmVudEVtaXR0ZXI8S2V5Ym9hcmRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgcmVhZG9ubHkgb25DbGljazogRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIHZhbHVlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBuek1lbnRpb25TZXJ2aWNlOiBOek1lbnRpb25TZXJ2aWNlKSB7fVxyXG5cclxuICBjb21wbGV0ZUV2ZW50cygpOiB2b2lkIHtcclxuICAgIHRoaXMub25Gb2N1c2luLmNvbXBsZXRlKCk7XHJcbiAgICB0aGlzLm9uQmx1ci5jb21wbGV0ZSgpO1xyXG4gICAgdGhpcy5vbklucHV0LmNvbXBsZXRlKCk7XHJcbiAgICB0aGlzLm9uS2V5ZG93bi5jb21wbGV0ZSgpO1xyXG4gICAgdGhpcy5vbkNsaWNrLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBmb2N1cyhjYXJldFBvcz86IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2UoY2FyZXRQb3MsIGNhcmV0UG9zKTtcclxuICB9XHJcblxyXG4gIGluc2VydE1lbnRpb24obWVudGlvbjogTWVudGlvbik6IHZvaWQge1xyXG4gICAgY29uc3QgdmFsdWU6IHN0cmluZyA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZTtcclxuICAgIGNvbnN0IGluc2VydFZhbHVlID0gbWVudGlvbi5tZW50aW9uLnRyaW0oKSArICcgJztcclxuICAgIGNvbnN0IG5ld1ZhbHVlID0gW3ZhbHVlLnNsaWNlKDAsIG1lbnRpb24uc3RhcnRQb3MgKyAxKSwgaW5zZXJ0VmFsdWUsIHZhbHVlLnNsaWNlKG1lbnRpb24uZW5kUG9zLCB2YWx1ZS5sZW5ndGgpXS5qb2luKCcnKTtcclxuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZSA9IG5ld1ZhbHVlO1xyXG4gICAgdGhpcy5mb2N1cyhtZW50aW9uLnN0YXJ0UG9zICsgaW5zZXJ0VmFsdWUubGVuZ3RoICsgMSk7XHJcbiAgICB0aGlzLm9uQ2hhbmdlKG5ld1ZhbHVlKTtcclxuICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZTtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnZhbHVlID0gdmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMubnpNZW50aW9uU2VydmljZS5yZWdpc3RlclRyaWdnZXIodGhpcyk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuY29tcGxldGVFdmVudHMoKTtcclxuICB9XHJcbn1cclxuIl19
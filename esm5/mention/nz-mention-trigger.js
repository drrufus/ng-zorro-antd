/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { forwardRef, Directive, ElementRef, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NzMentionService } from './nz-mention.service';
/** @type {?} */
import * as ɵngcc0 from '@angular/core';
export var NZ_MENTION_TRIGGER_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return NzMentionTriggerDirective; })),
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
    /**
     * @return {?}
     */
    NzMentionTriggerDirective.prototype.completeEvents = /**
     * @return {?}
     */
    function () {
        this.onFocusin.complete();
        this.onBlur.complete();
        this.onInput.complete();
        this.onKeydown.complete();
        this.onClick.complete();
    };
    /**
     * @param {?=} caretPos
     * @return {?}
     */
    NzMentionTriggerDirective.prototype.focus = /**
     * @param {?=} caretPos
     * @return {?}
     */
    function (caretPos) {
        this.el.nativeElement.focus();
        this.el.nativeElement.setSelectionRange(caretPos, caretPos);
    };
    /**
     * @param {?} mention
     * @return {?}
     */
    NzMentionTriggerDirective.prototype.insertMention = /**
     * @param {?} mention
     * @return {?}
     */
    function (mention) {
        /** @type {?} */
        var value = this.el.nativeElement.value;
        /** @type {?} */
        var insertValue = mention.mention.trim() + ' ';
        /** @type {?} */
        var newValue = [
            value.slice(0, mention.startPos + 1),
            insertValue,
            value.slice(mention.endPos, value.length)
        ].join('');
        this.el.nativeElement.value = newValue;
        this.focus(mention.startPos + insertValue.length + 1);
        this.onChange(newValue);
        this.value = newValue;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzMentionTriggerDirective.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
        if (typeof value === 'string') {
            this.el.nativeElement.value = value;
        }
        else {
            this.el.nativeElement.value = '';
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzMentionTriggerDirective.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzMentionTriggerDirective.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @return {?}
     */
    NzMentionTriggerDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.nzMentionService.registerTrigger(this);
    };
    /**
     * @return {?}
     */
    NzMentionTriggerDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.completeEvents();
    };
    /** @nocollapse */
    NzMentionTriggerDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NzMentionService }
    ]; };
NzMentionTriggerDirective.ɵfac = function NzMentionTriggerDirective_Factory(t) { return new (t || NzMentionTriggerDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(NzMentionService)); };
NzMentionTriggerDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzMentionTriggerDirective, selectors: [["input", "nzMentionTrigger", ""], ["textarea", "nzMentionTrigger", ""]], hostAttrs: ["autocomplete", "off"], hostBindings: function NzMentionTriggerDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("focusin", function NzMentionTriggerDirective_focusin_HostBindingHandler() { return ctx.onFocusin.emit(); })("blur", function NzMentionTriggerDirective_blur_HostBindingHandler() { return ctx.onBlur.emit(); })("input", function NzMentionTriggerDirective_input_HostBindingHandler($event) { return ctx.onInput.emit($event); })("keydown", function NzMentionTriggerDirective_keydown_HostBindingHandler($event) { return ctx.onKeydown.emit($event); })("click", function NzMentionTriggerDirective_click_HostBindingHandler($event) { return ctx.onClick.emit($event); });
    } }, exportAs: ["nzMentionTrigger"], features: [ɵngcc0.ɵɵProvidersFeature([NZ_MENTION_TRIGGER_ACCESSOR])] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzMentionTriggerDirective, [{
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
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: NzMentionService }]; }, null); })();
    return NzMentionTriggerDirective;
}());
export { NzMentionTriggerDirective };
if (false) {
    /** @type {?} */
    NzMentionTriggerDirective.prototype.onChange;
    /** @type {?} */
    NzMentionTriggerDirective.prototype.onTouched;
    /** @type {?} */
    NzMentionTriggerDirective.prototype.onFocusin;
    /** @type {?} */
    NzMentionTriggerDirective.prototype.onBlur;
    /** @type {?} */
    NzMentionTriggerDirective.prototype.onInput;
    /** @type {?} */
    NzMentionTriggerDirective.prototype.onKeydown;
    /** @type {?} */
    NzMentionTriggerDirective.prototype.onClick;
    /** @type {?} */
    NzMentionTriggerDirective.prototype.value;
    /** @type {?} */
    NzMentionTriggerDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NzMentionTriggerDirective.prototype.nzMentionService;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudGlvbi10cmlnZ2VyLmpzIiwic291cmNlcyI6WyJuZzovbmctem9ycm8tYW50ZC9tZW50aW9uL256LW1lbnRpb24tdHJpZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCxVQUFVLEVBRVYsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBR2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFFeEQsTUFBTSxLQUFPLDJCQUEyQixHQUFxQjtJQUMzRCxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxjQUFNLE9BQUEseUJBQXlCLEVBQXpCLENBQXlCLEVBQUM7SUFDeEQsS0FBSyxFQUFFLElBQUk7Q0FDWjtBQUVEO0lBd0JFLG1DQUFtQixFQUFjLEVBQVUsZ0JBQWtDO1FBQTFELE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBUHBFLGNBQVMsR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuRCxXQUFNLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDaEQsWUFBTyxHQUFnQyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzFELGNBQVMsR0FBZ0MsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM1RCxZQUFPLEdBQTZCLElBQUksWUFBWSxFQUFFLENBQUM7SUFHZ0IsQ0FBQzs7OztJQUVqRixrREFBYzs7O0lBQWQ7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxDQUFD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RTs7SUFDckUsNENBQWdFOztJQUNoRSwwQ0FBYzs7SUFFRix1Q0FBcUI7Ozs7O0lBQUUscURBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIGZvcndhcmRSZWYsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgRXhpc3RpbmdQcm92aWRlcixcclxuICBPbkRlc3Ryb3lcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgTWVudGlvbiB9IGZyb20gJy4vbnotbWVudGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOek1lbnRpb25TZXJ2aWNlIH0gZnJvbSAnLi9uei1tZW50aW9uLnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5aX01FTlRJT05fVFJJR0dFUl9BQ0NFU1NPUjogRXhpc3RpbmdQcm92aWRlciA9IHtcclxuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOek1lbnRpb25UcmlnZ2VyRGlyZWN0aXZlKSxcclxuICBtdWx0aTogdHJ1ZVxyXG59O1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdpbnB1dFtuek1lbnRpb25UcmlnZ2VyXSwgdGV4dGFyZWFbbnpNZW50aW9uVHJpZ2dlcl0nLFxyXG4gIGV4cG9ydEFzOiAnbnpNZW50aW9uVHJpZ2dlcicsXHJcbiAgcHJvdmlkZXJzOiBbTlpfTUVOVElPTl9UUklHR0VSX0FDQ0VTU09SXSxcclxuICBob3N0OiB7XHJcbiAgICBhdXRvY29tcGxldGU6ICdvZmYnLFxyXG4gICAgJyhmb2N1c2luKSc6ICdvbkZvY3VzaW4uZW1pdCgpJyxcclxuICAgICcoYmx1ciknOiAnb25CbHVyLmVtaXQoKScsXHJcbiAgICAnKGlucHV0KSc6ICdvbklucHV0LmVtaXQoJGV2ZW50KScsXHJcbiAgICAnKGtleWRvd24pJzogJ29uS2V5ZG93bi5lbWl0KCRldmVudCknLFxyXG4gICAgJyhjbGljayknOiAnb25DbGljay5lbWl0KCRldmVudCknXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpNZW50aW9uVHJpZ2dlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xyXG4gIG9uQ2hhbmdlOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZDtcclxuICBvblRvdWNoZWQ6ICgpID0+IHZvaWQ7XHJcblxyXG4gIHJlYWRvbmx5IG9uRm9jdXNpbjogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIHJlYWRvbmx5IG9uQmx1cjogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIHJlYWRvbmx5IG9uSW5wdXQ6IEV2ZW50RW1pdHRlcjxLZXlib2FyZEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICByZWFkb25seSBvbktleWRvd246IEV2ZW50RW1pdHRlcjxLZXlib2FyZEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICByZWFkb25seSBvbkNsaWNrOiBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgdmFsdWU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIG56TWVudGlvblNlcnZpY2U6IE56TWVudGlvblNlcnZpY2UpIHt9XHJcblxyXG4gIGNvbXBsZXRlRXZlbnRzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkZvY3VzaW4uY29tcGxldGUoKTtcclxuICAgIHRoaXMub25CbHVyLmNvbXBsZXRlKCk7XHJcbiAgICB0aGlzLm9uSW5wdXQuY29tcGxldGUoKTtcclxuICAgIHRoaXMub25LZXlkb3duLmNvbXBsZXRlKCk7XHJcbiAgICB0aGlzLm9uQ2xpY2suY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIGZvY3VzKGNhcmV0UG9zPzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZShjYXJldFBvcywgY2FyZXRQb3MpO1xyXG4gIH1cclxuXHJcbiAgaW5zZXJ0TWVudGlvbihtZW50aW9uOiBNZW50aW9uKTogdm9pZCB7XHJcbiAgICBjb25zdCB2YWx1ZTogc3RyaW5nID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnZhbHVlO1xyXG4gICAgY29uc3QgaW5zZXJ0VmFsdWUgPSBtZW50aW9uLm1lbnRpb24udHJpbSgpICsgJyAnO1xyXG4gICAgY29uc3QgbmV3VmFsdWUgPSBbXHJcbiAgICAgIHZhbHVlLnNsaWNlKDAsIG1lbnRpb24uc3RhcnRQb3MgKyAxKSxcclxuICAgICAgaW5zZXJ0VmFsdWUsXHJcbiAgICAgIHZhbHVlLnNsaWNlKG1lbnRpb24uZW5kUG9zLCB2YWx1ZS5sZW5ndGgpXHJcbiAgICBdLmpvaW4oJycpO1xyXG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnZhbHVlID0gbmV3VmFsdWU7XHJcbiAgICB0aGlzLmZvY3VzKG1lbnRpb24uc3RhcnRQb3MgKyBpbnNlcnRWYWx1ZS5sZW5ndGggKyAxKTtcclxuICAgIHRoaXMub25DaGFuZ2UobmV3VmFsdWUpO1xyXG4gICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlO1xyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xyXG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5uek1lbnRpb25TZXJ2aWNlLnJlZ2lzdGVyVHJpZ2dlcih0aGlzKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jb21wbGV0ZUV2ZW50cygpO1xyXG4gIH1cclxufVxyXG4iXX0=
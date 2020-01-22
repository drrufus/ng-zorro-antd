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
    NzMentionTriggerDirective.decorators = [
        { type: Directive, args: [{
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
                },] }
    ];
    /** @nocollapse */
    NzMentionTriggerDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NzMentionService }
    ]; };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudGlvbi10cmlnZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9tZW50aW9uLyIsInNvdXJjZXMiOlsibnotbWVudGlvbi10cmlnZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLFVBQVUsRUFFVixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFHYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHekUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBRXhELE1BQU0sS0FBTywyQkFBMkIsR0FBcUI7SUFDM0QsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVTs7O0lBQUMsY0FBTSxPQUFBLHlCQUF5QixFQUF6QixDQUF5QixFQUFDO0lBQ3hELEtBQUssRUFBRSxJQUFJO0NBQ1o7QUFFRDtJQXdCRSxtQ0FBbUIsRUFBYyxFQUFVLGdCQUFrQztRQUExRCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQVBwRSxjQUFTLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkQsV0FBTSxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2hELFlBQU8sR0FBZ0MsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMxRCxjQUFTLEdBQWdDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUQsWUFBTyxHQUE2QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBR2dCLENBQUM7Ozs7SUFFakYsa0RBQWM7OztJQUFkO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDeEIsSUFB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QWdFOztJQUNoRSwwQ0FBYzs7SUFFRix1Q0FBcUI7Ozs7O0lBQUUscURBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIGZvcndhcmRSZWYsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgRXhpc3RpbmdQcm92aWRlcixcclxuICBPbkRlc3Ryb3lcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgTWVudGlvbiB9IGZyb20gJy4vbnotbWVudGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOek1lbnRpb25TZXJ2aWNlIH0gZnJvbSAnLi9uei1tZW50aW9uLnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5aX01FTlRJT05fVFJJR0dFUl9BQ0NFU1NPUjogRXhpc3RpbmdQcm92aWRlciA9IHtcclxuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOek1lbnRpb25UcmlnZ2VyRGlyZWN0aXZlKSxcclxuICBtdWx0aTogdHJ1ZVxyXG59O1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdpbnB1dFtuek1lbnRpb25UcmlnZ2VyXSwgdGV4dGFyZWFbbnpNZW50aW9uVHJpZ2dlcl0nLFxyXG4gIGV4cG9ydEFzOiAnbnpNZW50aW9uVHJpZ2dlcicsXHJcbiAgcHJvdmlkZXJzOiBbTlpfTUVOVElPTl9UUklHR0VSX0FDQ0VTU09SXSxcclxuICBob3N0OiB7XHJcbiAgICBhdXRvY29tcGxldGU6ICdvZmYnLFxyXG4gICAgJyhmb2N1c2luKSc6ICdvbkZvY3VzaW4uZW1pdCgpJyxcclxuICAgICcoYmx1ciknOiAnb25CbHVyLmVtaXQoKScsXHJcbiAgICAnKGlucHV0KSc6ICdvbklucHV0LmVtaXQoJGV2ZW50KScsXHJcbiAgICAnKGtleWRvd24pJzogJ29uS2V5ZG93bi5lbWl0KCRldmVudCknLFxyXG4gICAgJyhjbGljayknOiAnb25DbGljay5lbWl0KCRldmVudCknXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpNZW50aW9uVHJpZ2dlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xyXG4gIG9uQ2hhbmdlOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZDtcclxuICBvblRvdWNoZWQ6ICgpID0+IHZvaWQ7XHJcblxyXG4gIHJlYWRvbmx5IG9uRm9jdXNpbjogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIHJlYWRvbmx5IG9uQmx1cjogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIHJlYWRvbmx5IG9uSW5wdXQ6IEV2ZW50RW1pdHRlcjxLZXlib2FyZEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICByZWFkb25seSBvbktleWRvd246IEV2ZW50RW1pdHRlcjxLZXlib2FyZEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICByZWFkb25seSBvbkNsaWNrOiBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgdmFsdWU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIG56TWVudGlvblNlcnZpY2U6IE56TWVudGlvblNlcnZpY2UpIHt9XHJcblxyXG4gIGNvbXBsZXRlRXZlbnRzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkZvY3VzaW4uY29tcGxldGUoKTtcclxuICAgIHRoaXMub25CbHVyLmNvbXBsZXRlKCk7XHJcbiAgICB0aGlzLm9uSW5wdXQuY29tcGxldGUoKTtcclxuICAgIHRoaXMub25LZXlkb3duLmNvbXBsZXRlKCk7XHJcbiAgICB0aGlzLm9uQ2xpY2suY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIGZvY3VzKGNhcmV0UG9zPzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZShjYXJldFBvcywgY2FyZXRQb3MpO1xyXG4gIH1cclxuXHJcbiAgaW5zZXJ0TWVudGlvbihtZW50aW9uOiBNZW50aW9uKTogdm9pZCB7XHJcbiAgICBjb25zdCB2YWx1ZTogc3RyaW5nID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnZhbHVlO1xyXG4gICAgY29uc3QgaW5zZXJ0VmFsdWUgPSBtZW50aW9uLm1lbnRpb24udHJpbSgpICsgJyAnO1xyXG4gICAgY29uc3QgbmV3VmFsdWUgPSBbXHJcbiAgICAgIHZhbHVlLnNsaWNlKDAsIG1lbnRpb24uc3RhcnRQb3MgKyAxKSxcclxuICAgICAgaW5zZXJ0VmFsdWUsXHJcbiAgICAgIHZhbHVlLnNsaWNlKG1lbnRpb24uZW5kUG9zLCB2YWx1ZS5sZW5ndGgpXHJcbiAgICBdLmpvaW4oJycpO1xyXG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnZhbHVlID0gbmV3VmFsdWU7XHJcbiAgICB0aGlzLmZvY3VzKG1lbnRpb24uc3RhcnRQb3MgKyBpbnNlcnRWYWx1ZS5sZW5ndGggKyAxKTtcclxuICAgIHRoaXMub25DaGFuZ2UobmV3VmFsdWUpO1xyXG4gICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlO1xyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xyXG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5uek1lbnRpb25TZXJ2aWNlLnJlZ2lzdGVyVHJpZ2dlcih0aGlzKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jb21wbGV0ZUV2ZW50cygpO1xyXG4gIH1cclxufVxyXG4iXX0=
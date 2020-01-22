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
import { Platform } from '@angular/cdk/platform';
import { Directive, ElementRef, Input, NgZone } from '@angular/core';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { NzDomEventService } from 'ng-zorro-antd/core';
/**
 * @record
 */
export function AutoSizeType() { }
if (false) {
    /** @type {?|undefined} */
    AutoSizeType.prototype.minRows;
    /** @type {?|undefined} */
    AutoSizeType.prototype.maxRows;
}
/**
 * @param {?} value
 * @return {?}
 */
export function isAutoSizeType(value) {
    return typeof value !== 'string' && typeof value !== 'boolean' && (!!value.maxRows || !!value.minRows);
}
var NzAutosizeDirective = /** @class */ (function () {
    function NzAutosizeDirective(elementRef, ngZone, platform, nzDomEventService) {
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.platform = platform;
        this.nzDomEventService = nzDomEventService;
        this.autosize = false;
        this.el = this.elementRef.nativeElement;
        this.destroy$ = new Subject();
        this.inputGap = 10;
    }
    Object.defineProperty(NzAutosizeDirective.prototype, "nzAutosize", {
        get: /**
         * @return {?}
         */
        function () {
            return this.autosize;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (typeof value === 'string') {
                this.autosize = true;
            }
            else if (isAutoSizeType(value)) {
                this.autosize = value;
                this.minRows = value.minRows;
                this.maxRows = value.maxRows;
                this.setMaxHeight();
                this.setMinHeight();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} force
     * @return {?}
     */
    NzAutosizeDirective.prototype.resizeToFitContent = /**
     * @param {?=} force
     * @return {?}
     */
    function (force) {
        var _this = this;
        if (force === void 0) { force = false; }
        this.cacheTextareaLineHeight();
        // If we haven't determined the line-height yet, we know we're still hidden and there's no point
        // in checking the height of the textarea.
        if (!this.cachedLineHeight) {
            return;
        }
        /** @type {?} */
        var textarea = (/** @type {?} */ (this.el));
        /** @type {?} */
        var value = textarea.value;
        // Only resize if the value or minRows have changed since these calculations can be expensive.
        if (!force && this.minRows === this.previousMinRows && value === this.previousValue) {
            return;
        }
        /** @type {?} */
        var placeholderText = textarea.placeholder;
        // Reset the textarea height to auto in order to shrink back to its default size.
        // Also temporarily force overflow:hidden, so scroll bars do not interfere with calculations.
        // Long placeholders that are wider than the textarea width may lead to a bigger scrollHeight
        // value. To ensure that the scrollHeight is not bigger than the content, the placeholders
        // need to be removed temporarily.
        textarea.classList.add('cdk-textarea-autosize-measuring');
        textarea.placeholder = '';
        /** @type {?} */
        var height = Math.round((textarea.scrollHeight - this.inputGap) / this.cachedLineHeight) * this.cachedLineHeight +
            this.inputGap;
        // Use the scrollHeight to know how large the textarea *would* be if fit its entire value.
        textarea.style.height = height + "px";
        textarea.classList.remove('cdk-textarea-autosize-measuring');
        textarea.placeholder = placeholderText;
        // On Firefox resizing the textarea will prevent it from scrolling to the caret position.
        // We need to re-set the selection in order for it to scroll to the proper position.
        if (typeof requestAnimationFrame !== 'undefined') {
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                return requestAnimationFrame((/**
                 * @return {?}
                 */
                function () {
                    var selectionStart = textarea.selectionStart, selectionEnd = textarea.selectionEnd;
                    // IE will throw an "Unspecified error" if we try to set the selection range after the
                    // element has been removed from the DOM. Assert that the directive hasn't been destroyed
                    // between the time we requested the animation frame and when it was executed.
                    // Also note that we have to assert that the textarea is focused before we set the
                    // selection range. Setting the selection range on a non-focused textarea will cause
                    // it to receive focus on IE and Edge.
                    if (!_this.destroy$.isStopped && document.activeElement === textarea) {
                        textarea.setSelectionRange(selectionStart, selectionEnd);
                    }
                }));
            }));
        }
        this.previousValue = value;
        this.previousMinRows = this.minRows;
    };
    /**
     * @private
     * @return {?}
     */
    NzAutosizeDirective.prototype.cacheTextareaLineHeight = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.cachedLineHeight >= 0 || !this.el.parentNode) {
            return;
        }
        // Use a clone element because we have to override some styles.
        /** @type {?} */
        var textareaClone = (/** @type {?} */ (this.el.cloneNode(false)));
        textareaClone.rows = 1;
        // Use `position: absolute` so that this doesn't cause a browser layout and use
        // `visibility: hidden` so that nothing is rendered. Clear any other styles that
        // would affect the height.
        textareaClone.style.position = 'absolute';
        textareaClone.style.visibility = 'hidden';
        textareaClone.style.border = 'none';
        textareaClone.style.padding = '0';
        textareaClone.style.height = '';
        textareaClone.style.minHeight = '';
        textareaClone.style.maxHeight = '';
        // In Firefox it happens that textarea elements are always bigger than the specified amount
        // of rows. This is because Firefox tries to add extra space for the horizontal scrollbar.
        // As a workaround that removes the extra space for the scrollbar, we can just set overflow
        // to hidden. This ensures that there is no invalid calculation of the line height.
        // See Firefox bug report: https://bugzilla.mozilla.org/show_bug.cgi?id=33654
        textareaClone.style.overflow = 'hidden';
        (/** @type {?} */ (this.el.parentNode)).appendChild(textareaClone);
        this.cachedLineHeight = textareaClone.clientHeight - this.inputGap - 1;
        (/** @type {?} */ (this.el.parentNode)).removeChild(textareaClone);
        // Min and max heights have to be re-calculated if the cached line height changes
        this.setMinHeight();
        this.setMaxHeight();
    };
    /**
     * @return {?}
     */
    NzAutosizeDirective.prototype.setMinHeight = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var minHeight = this.minRows && this.cachedLineHeight ? this.minRows * this.cachedLineHeight + this.inputGap + "px" : null;
        if (minHeight) {
            this.el.style.minHeight = minHeight;
        }
    };
    /**
     * @return {?}
     */
    NzAutosizeDirective.prototype.setMaxHeight = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var maxHeight = this.maxRows && this.cachedLineHeight ? this.maxRows * this.cachedLineHeight + this.inputGap + "px" : null;
        if (maxHeight) {
            this.el.style.maxHeight = maxHeight;
        }
    };
    /**
     * @return {?}
     */
    NzAutosizeDirective.prototype.noopInputHandler = /**
     * @return {?}
     */
    function () {
        // no-op handler that ensures we're running change detection on input events.
    };
    /**
     * @return {?}
     */
    NzAutosizeDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.nzAutosize && this.platform.isBrowser) {
            this.resizeToFitContent();
            this.nzDomEventService
                .registerResizeListener()
                .pipe(takeUntil(this.destroy$), finalize((/**
             * @return {?}
             */
            function () { return _this.nzDomEventService.unregisterResizeListener(); })))
                .subscribe((/**
             * @return {?}
             */
            function () { return _this.resizeToFitContent(true); }));
        }
    };
    /**
     * @return {?}
     */
    NzAutosizeDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * @return {?}
     */
    NzAutosizeDirective.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (this.nzAutosize && this.platform.isBrowser) {
            this.resizeToFitContent();
        }
    };
    NzAutosizeDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'textarea[nzAutosize]',
                    exportAs: 'nzAutosize',
                    host: {
                        // Textarea elements that have the directive applied should have a single row by default.
                        // Browsers normally show two rows by default and therefore this limits the minRows binding.
                        rows: '1',
                        '(input)': 'noopInputHandler()'
                    }
                },] }
    ];
    /** @nocollapse */
    NzAutosizeDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone },
        { type: Platform },
        { type: NzDomEventService }
    ]; };
    NzAutosizeDirective.propDecorators = {
        nzAutosize: [{ type: Input }]
    };
    return NzAutosizeDirective;
}());
export { NzAutosizeDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzAutosizeDirective.prototype.autosize;
    /**
     * @type {?}
     * @private
     */
    NzAutosizeDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NzAutosizeDirective.prototype.cachedLineHeight;
    /**
     * @type {?}
     * @private
     */
    NzAutosizeDirective.prototype.previousValue;
    /**
     * @type {?}
     * @private
     */
    NzAutosizeDirective.prototype.previousMinRows;
    /**
     * @type {?}
     * @private
     */
    NzAutosizeDirective.prototype.minRows;
    /**
     * @type {?}
     * @private
     */
    NzAutosizeDirective.prototype.maxRows;
    /**
     * @type {?}
     * @private
     */
    NzAutosizeDirective.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzAutosizeDirective.prototype.inputGap;
    /**
     * @type {?}
     * @private
     */
    NzAutosizeDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzAutosizeDirective.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    NzAutosizeDirective.prototype.platform;
    /**
     * @type {?}
     * @private
     */
    NzAutosizeDirective.prototype.nzDomEventService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYXV0b3NpemUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9pbnB1dC8iLCJzb3VyY2VzIjpbIm56LWF1dG9zaXplLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQWlCLFNBQVMsRUFBVyxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN4RyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7QUFFdkQsa0NBR0M7OztJQUZDLCtCQUFpQjs7SUFDakIsK0JBQWlCOzs7Ozs7QUFHbkIsTUFBTSxVQUFVLGNBQWMsQ0FBQyxLQUFzQztJQUNuRSxPQUFPLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxPQUFPLEtBQUssS0FBSyxTQUFTLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3pHLENBQUM7QUFFRDtJQTBKRSw2QkFDVSxVQUFzQixFQUN0QixNQUFjLEVBQ2QsUUFBa0IsRUFDbEIsaUJBQW9DO1FBSHBDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQW5KdEMsYUFBUSxHQUEyQixLQUFLLENBQUM7UUFDekMsT0FBRSxHQUEyQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQU0zRSxhQUFRLEdBQUcsSUFBSSxP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OztJQUM5QixxQ0FBc0I7Ozs7O0lBQ3RCLHVDQUEwQjs7Ozs7SUFDMUIsZ0RBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRG9DaGVjaywgRWxlbWVudFJlZiwgSW5wdXQsIE5nWm9uZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmluYWxpemUsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IE56RG9tRXZlbnRTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXV0b1NpemVUeXBlIHtcclxuICBtaW5Sb3dzPzogbnVtYmVyO1xyXG4gIG1heFJvd3M/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0F1dG9TaXplVHlwZSh2YWx1ZTogc3RyaW5nIHwgYm9vbGVhbiB8IEF1dG9TaXplVHlwZSk6IHZhbHVlIGlzIEF1dG9TaXplVHlwZSB7XHJcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHZhbHVlICE9PSAnYm9vbGVhbicgJiYgKCEhdmFsdWUubWF4Um93cyB8fCAhIXZhbHVlLm1pblJvd3MpO1xyXG59XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ3RleHRhcmVhW256QXV0b3NpemVdJyxcclxuICBleHBvcnRBczogJ256QXV0b3NpemUnLFxyXG4gIGhvc3Q6IHtcclxuICAgIC8vIFRleHRhcmVhIGVsZW1lbnRzIHRoYXQgaGF2ZSB0aGUgZGlyZWN0aXZlIGFwcGxpZWQgc2hvdWxkIGhhdmUgYSBzaW5nbGUgcm93IGJ5IGRlZmF1bHQuXHJcbiAgICAvLyBCcm93c2VycyBub3JtYWxseSBzaG93IHR3byByb3dzIGJ5IGRlZmF1bHQgYW5kIHRoZXJlZm9yZSB0aGlzIGxpbWl0cyB0aGUgbWluUm93cyBiaW5kaW5nLlxyXG4gICAgcm93czogJzEnLFxyXG4gICAgJyhpbnB1dCknOiAnbm9vcElucHV0SGFuZGxlcigpJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56QXV0b3NpemVEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIERvQ2hlY2sge1xyXG4gIHByaXZhdGUgYXV0b3NpemU6IGJvb2xlYW4gfCBBdXRvU2l6ZVR5cGUgPSBmYWxzZTtcclxuICBwcml2YXRlIGVsOiBIVE1MVGV4dEFyZWFFbGVtZW50IHwgSFRNTElucHV0RWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gIHByaXZhdGUgY2FjaGVkTGluZUhlaWdodDogbnVtYmVyO1xyXG4gIHByaXZhdGUgcHJldmlvdXNWYWx1ZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgcHJldmlvdXNNaW5Sb3dzOiBudW1iZXIgfCB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBtaW5Sb3dzOiBudW1iZXIgfCB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBtYXhSb3dzOiBudW1iZXIgfCB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHJpdmF0ZSBpbnB1dEdhcCA9IDEwO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekF1dG9zaXplKHZhbHVlOiBzdHJpbmcgfCBib29sZWFuIHwgQXV0b1NpemVUeXBlKSB7XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xyXG4gICAgICB0aGlzLmF1dG9zaXplID0gdHJ1ZTtcclxuICAgIH0gZWxzZSBpZiAoaXNBdXRvU2l6ZVR5cGUodmFsdWUpKSB7XHJcbiAgICAgIHRoaXMuYXV0b3NpemUgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5taW5Sb3dzID0gdmFsdWUubWluUm93cztcclxuICAgICAgdGhpcy5tYXhSb3dzID0gdmFsdWUubWF4Um93cztcclxuICAgICAgdGhpcy5zZXRNYXhIZWlnaHQoKTtcclxuICAgICAgdGhpcy5zZXRNaW5IZWlnaHQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBuekF1dG9zaXplKCk6IHN0cmluZyB8IGJvb2xlYW4gfCBBdXRvU2l6ZVR5cGUge1xyXG4gICAgcmV0dXJuIHRoaXMuYXV0b3NpemU7XHJcbiAgfVxyXG5cclxuICByZXNpemVUb0ZpdENvbnRlbnQoZm9yY2U6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgdGhpcy5jYWNoZVRleHRhcmVhTGluZUhlaWdodCgpO1xyXG5cclxuICAgIC8vIElmIHdlIGhhdmVuJ3QgZGV0ZXJtaW5lZCB0aGUgbGluZS1oZWlnaHQgeWV0LCB3ZSBrbm93IHdlJ3JlIHN0aWxsIGhpZGRlbiBhbmQgdGhlcmUncyBubyBwb2ludFxyXG4gICAgLy8gaW4gY2hlY2tpbmcgdGhlIGhlaWdodCBvZiB0aGUgdGV4dGFyZWEuXHJcbiAgICBpZiAoIXRoaXMuY2FjaGVkTGluZUhlaWdodCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdGV4dGFyZWEgPSB0aGlzLmVsIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQ7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHRleHRhcmVhLnZhbHVlO1xyXG5cclxuICAgIC8vIE9ubHkgcmVzaXplIGlmIHRoZSB2YWx1ZSBvciBtaW5Sb3dzIGhhdmUgY2hhbmdlZCBzaW5jZSB0aGVzZSBjYWxjdWxhdGlvbnMgY2FuIGJlIGV4cGVuc2l2ZS5cclxuICAgIGlmICghZm9yY2UgJiYgdGhpcy5taW5Sb3dzID09PSB0aGlzLnByZXZpb3VzTWluUm93cyAmJiB2YWx1ZSA9PT0gdGhpcy5wcmV2aW91c1ZhbHVlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IHBsYWNlaG9sZGVyVGV4dCA9IHRleHRhcmVhLnBsYWNlaG9sZGVyO1xyXG5cclxuICAgIC8vIFJlc2V0IHRoZSB0ZXh0YXJlYSBoZWlnaHQgdG8gYXV0byBpbiBvcmRlciB0byBzaHJpbmsgYmFjayB0byBpdHMgZGVmYXVsdCBzaXplLlxyXG4gICAgLy8gQWxzbyB0ZW1wb3JhcmlseSBmb3JjZSBvdmVyZmxvdzpoaWRkZW4sIHNvIHNjcm9sbCBiYXJzIGRvIG5vdCBpbnRlcmZlcmUgd2l0aCBjYWxjdWxhdGlvbnMuXHJcbiAgICAvLyBMb25nIHBsYWNlaG9sZGVycyB0aGF0IGFyZSB3aWRlciB0aGFuIHRoZSB0ZXh0YXJlYSB3aWR0aCBtYXkgbGVhZCB0byBhIGJpZ2dlciBzY3JvbGxIZWlnaHRcclxuICAgIC8vIHZhbHVlLiBUbyBlbnN1cmUgdGhhdCB0aGUgc2Nyb2xsSGVpZ2h0IGlzIG5vdCBiaWdnZXIgdGhhbiB0aGUgY29udGVudCwgdGhlIHBsYWNlaG9sZGVyc1xyXG4gICAgLy8gbmVlZCB0byBiZSByZW1vdmVkIHRlbXBvcmFyaWx5LlxyXG4gICAgdGV4dGFyZWEuY2xhc3NMaXN0LmFkZCgnY2RrLXRleHRhcmVhLWF1dG9zaXplLW1lYXN1cmluZycpO1xyXG4gICAgdGV4dGFyZWEucGxhY2Vob2xkZXIgPSAnJztcclxuICAgIGNvbnN0IGhlaWdodCA9XHJcbiAgICAgIE1hdGgucm91bmQoKHRleHRhcmVhLnNjcm9sbEhlaWdodCAtIHRoaXMuaW5wdXRHYXApIC8gdGhpcy5jYWNoZWRMaW5lSGVpZ2h0KSAqIHRoaXMuY2FjaGVkTGluZUhlaWdodCArXHJcbiAgICAgIHRoaXMuaW5wdXRHYXA7XHJcblxyXG4gICAgLy8gVXNlIHRoZSBzY3JvbGxIZWlnaHQgdG8ga25vdyBob3cgbGFyZ2UgdGhlIHRleHRhcmVhICp3b3VsZCogYmUgaWYgZml0IGl0cyBlbnRpcmUgdmFsdWUuXHJcbiAgICB0ZXh0YXJlYS5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgO1xyXG4gICAgdGV4dGFyZWEuY2xhc3NMaXN0LnJlbW92ZSgnY2RrLXRleHRhcmVhLWF1dG9zaXplLW1lYXN1cmluZycpO1xyXG4gICAgdGV4dGFyZWEucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlclRleHQ7XHJcblxyXG4gICAgLy8gT24gRmlyZWZveCByZXNpemluZyB0aGUgdGV4dGFyZWEgd2lsbCBwcmV2ZW50IGl0IGZyb20gc2Nyb2xsaW5nIHRvIHRoZSBjYXJldCBwb3NpdGlvbi5cclxuICAgIC8vIFdlIG5lZWQgdG8gcmUtc2V0IHRoZSBzZWxlY3Rpb24gaW4gb3JkZXIgZm9yIGl0IHRvIHNjcm9sbCB0byB0aGUgcHJvcGVyIHBvc2l0aW9uLlxyXG4gICAgaWYgKHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHsgc2VsZWN0aW9uU3RhcnQsIHNlbGVjdGlvbkVuZCB9ID0gdGV4dGFyZWE7XHJcblxyXG4gICAgICAgICAgLy8gSUUgd2lsbCB0aHJvdyBhbiBcIlVuc3BlY2lmaWVkIGVycm9yXCIgaWYgd2UgdHJ5IHRvIHNldCB0aGUgc2VsZWN0aW9uIHJhbmdlIGFmdGVyIHRoZVxyXG4gICAgICAgICAgLy8gZWxlbWVudCBoYXMgYmVlbiByZW1vdmVkIGZyb20gdGhlIERPTS4gQXNzZXJ0IHRoYXQgdGhlIGRpcmVjdGl2ZSBoYXNuJ3QgYmVlbiBkZXN0cm95ZWRcclxuICAgICAgICAgIC8vIGJldHdlZW4gdGhlIHRpbWUgd2UgcmVxdWVzdGVkIHRoZSBhbmltYXRpb24gZnJhbWUgYW5kIHdoZW4gaXQgd2FzIGV4ZWN1dGVkLlxyXG4gICAgICAgICAgLy8gQWxzbyBub3RlIHRoYXQgd2UgaGF2ZSB0byBhc3NlcnQgdGhhdCB0aGUgdGV4dGFyZWEgaXMgZm9jdXNlZCBiZWZvcmUgd2Ugc2V0IHRoZVxyXG4gICAgICAgICAgLy8gc2VsZWN0aW9uIHJhbmdlLiBTZXR0aW5nIHRoZSBzZWxlY3Rpb24gcmFuZ2Ugb24gYSBub24tZm9jdXNlZCB0ZXh0YXJlYSB3aWxsIGNhdXNlXHJcbiAgICAgICAgICAvLyBpdCB0byByZWNlaXZlIGZvY3VzIG9uIElFIGFuZCBFZGdlLlxyXG4gICAgICAgICAgaWYgKCF0aGlzLmRlc3Ryb3kkLmlzU3RvcHBlZCAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSB0ZXh0YXJlYSkge1xyXG4gICAgICAgICAgICB0ZXh0YXJlYS5zZXRTZWxlY3Rpb25SYW5nZShzZWxlY3Rpb25TdGFydCwgc2VsZWN0aW9uRW5kKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucHJldmlvdXNWYWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5wcmV2aW91c01pblJvd3MgPSB0aGlzLm1pblJvd3M7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhY2hlVGV4dGFyZWFMaW5lSGVpZ2h0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuY2FjaGVkTGluZUhlaWdodCA+PSAwIHx8ICF0aGlzLmVsLnBhcmVudE5vZGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFVzZSBhIGNsb25lIGVsZW1lbnQgYmVjYXVzZSB3ZSBoYXZlIHRvIG92ZXJyaWRlIHNvbWUgc3R5bGVzLlxyXG4gICAgY29uc3QgdGV4dGFyZWFDbG9uZSA9IHRoaXMuZWwuY2xvbmVOb2RlKGZhbHNlKSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50O1xyXG4gICAgdGV4dGFyZWFDbG9uZS5yb3dzID0gMTtcclxuXHJcbiAgICAvLyBVc2UgYHBvc2l0aW9uOiBhYnNvbHV0ZWAgc28gdGhhdCB0aGlzIGRvZXNuJ3QgY2F1c2UgYSBicm93c2VyIGxheW91dCBhbmQgdXNlXHJcbiAgICAvLyBgdmlzaWJpbGl0eTogaGlkZGVuYCBzbyB0aGF0IG5vdGhpbmcgaXMgcmVuZGVyZWQuIENsZWFyIGFueSBvdGhlciBzdHlsZXMgdGhhdFxyXG4gICAgLy8gd291bGQgYWZmZWN0IHRoZSBoZWlnaHQuXHJcbiAgICB0ZXh0YXJlYUNsb25lLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgIHRleHRhcmVhQ2xvbmUuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG4gICAgdGV4dGFyZWFDbG9uZS5zdHlsZS5ib3JkZXIgPSAnbm9uZSc7XHJcbiAgICB0ZXh0YXJlYUNsb25lLnN0eWxlLnBhZGRpbmcgPSAnMCc7XHJcbiAgICB0ZXh0YXJlYUNsb25lLnN0eWxlLmhlaWdodCA9ICcnO1xyXG4gICAgdGV4dGFyZWFDbG9uZS5zdHlsZS5taW5IZWlnaHQgPSAnJztcclxuICAgIHRleHRhcmVhQ2xvbmUuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XHJcblxyXG4gICAgLy8gSW4gRmlyZWZveCBpdCBoYXBwZW5zIHRoYXQgdGV4dGFyZWEgZWxlbWVudHMgYXJlIGFsd2F5cyBiaWdnZXIgdGhhbiB0aGUgc3BlY2lmaWVkIGFtb3VudFxyXG4gICAgLy8gb2Ygcm93cy4gVGhpcyBpcyBiZWNhdXNlIEZpcmVmb3ggdHJpZXMgdG8gYWRkIGV4dHJhIHNwYWNlIGZvciB0aGUgaG9yaXpvbnRhbCBzY3JvbGxiYXIuXHJcbiAgICAvLyBBcyBhIHdvcmthcm91bmQgdGhhdCByZW1vdmVzIHRoZSBleHRyYSBzcGFjZSBmb3IgdGhlIHNjcm9sbGJhciwgd2UgY2FuIGp1c3Qgc2V0IG92ZXJmbG93XHJcbiAgICAvLyB0byBoaWRkZW4uIFRoaXMgZW5zdXJlcyB0aGF0IHRoZXJlIGlzIG5vIGludmFsaWQgY2FsY3VsYXRpb24gb2YgdGhlIGxpbmUgaGVpZ2h0LlxyXG4gICAgLy8gU2VlIEZpcmVmb3ggYnVnIHJlcG9ydDogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MzM2NTRcclxuICAgIHRleHRhcmVhQ2xvbmUuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuXHJcbiAgICB0aGlzLmVsLnBhcmVudE5vZGUhLmFwcGVuZENoaWxkKHRleHRhcmVhQ2xvbmUpO1xyXG4gICAgdGhpcy5jYWNoZWRMaW5lSGVpZ2h0ID0gdGV4dGFyZWFDbG9uZS5jbGllbnRIZWlnaHQgLSB0aGlzLmlucHV0R2FwIC0gMTtcclxuICAgIHRoaXMuZWwucGFyZW50Tm9kZSEucmVtb3ZlQ2hpbGQodGV4dGFyZWFDbG9uZSk7XHJcblxyXG4gICAgLy8gTWluIGFuZCBtYXggaGVpZ2h0cyBoYXZlIHRvIGJlIHJlLWNhbGN1bGF0ZWQgaWYgdGhlIGNhY2hlZCBsaW5lIGhlaWdodCBjaGFuZ2VzXHJcbiAgICB0aGlzLnNldE1pbkhlaWdodCgpO1xyXG4gICAgdGhpcy5zZXRNYXhIZWlnaHQoKTtcclxuICB9XHJcblxyXG4gIHNldE1pbkhlaWdodCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IG1pbkhlaWdodCA9XHJcbiAgICAgIHRoaXMubWluUm93cyAmJiB0aGlzLmNhY2hlZExpbmVIZWlnaHQgPyBgJHt0aGlzLm1pblJvd3MgKiB0aGlzLmNhY2hlZExpbmVIZWlnaHQgKyB0aGlzLmlucHV0R2FwfXB4YCA6IG51bGw7XHJcblxyXG4gICAgaWYgKG1pbkhlaWdodCkge1xyXG4gICAgICB0aGlzLmVsLnN0eWxlLm1pbkhlaWdodCA9IG1pbkhlaWdodDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldE1heEhlaWdodCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IG1heEhlaWdodCA9XHJcbiAgICAgIHRoaXMubWF4Um93cyAmJiB0aGlzLmNhY2hlZExpbmVIZWlnaHQgPyBgJHt0aGlzLm1heFJvd3MgKiB0aGlzLmNhY2hlZExpbmVIZWlnaHQgKyB0aGlzLmlucHV0R2FwfXB4YCA6IG51bGw7XHJcblxyXG4gICAgaWYgKG1heEhlaWdodCkge1xyXG4gICAgICB0aGlzLmVsLnN0eWxlLm1heEhlaWdodCA9IG1heEhlaWdodDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5vb3BJbnB1dEhhbmRsZXIoKTogdm9pZCB7XHJcbiAgICAvLyBuby1vcCBoYW5kbGVyIHRoYXQgZW5zdXJlcyB3ZSdyZSBydW5uaW5nIGNoYW5nZSBkZXRlY3Rpb24gb24gaW5wdXQgZXZlbnRzLlxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxyXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sXHJcbiAgICBwcml2YXRlIG56RG9tRXZlbnRTZXJ2aWNlOiBOekRvbUV2ZW50U2VydmljZVxyXG4gICkge31cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpBdXRvc2l6ZSAmJiB0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xyXG4gICAgICB0aGlzLnJlc2l6ZVRvRml0Q29udGVudCgpO1xyXG4gICAgICB0aGlzLm56RG9tRXZlbnRTZXJ2aWNlXHJcbiAgICAgICAgLnJlZ2lzdGVyUmVzaXplTGlzdGVuZXIoKVxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxyXG4gICAgICAgICAgZmluYWxpemUoKCkgPT4gdGhpcy5uekRvbUV2ZW50U2VydmljZS51bnJlZ2lzdGVyUmVzaXplTGlzdGVuZXIoKSlcclxuICAgICAgICApXHJcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlc2l6ZVRvRml0Q29udGVudCh0cnVlKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdEb0NoZWNrKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpBdXRvc2l6ZSAmJiB0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xyXG4gICAgICB0aGlzLnJlc2l6ZVRvRml0Q29udGVudCgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=
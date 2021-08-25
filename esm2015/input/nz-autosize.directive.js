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
export class NzAutosizeDirective {
    /**
     * @param {?} elementRef
     * @param {?} ngZone
     * @param {?} platform
     * @param {?} nzDomEventService
     */
    constructor(elementRef, ngZone, platform, nzDomEventService) {
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.platform = platform;
        this.nzDomEventService = nzDomEventService;
        this.autosize = false;
        this.el = this.elementRef.nativeElement;
        this.destroy$ = new Subject();
        this.inputGap = 10;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzAutosize(value) {
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
    }
    /**
     * @return {?}
     */
    get nzAutosize() {
        return this.autosize;
    }
    /**
     * @param {?=} force
     * @return {?}
     */
    resizeToFitContent(force = false) {
        this.cacheTextareaLineHeight();
        // If we haven't determined the line-height yet, we know we're still hidden and there's no point
        // in checking the height of the textarea.
        if (!this.cachedLineHeight) {
            return;
        }
        /** @type {?} */
        const textarea = (/** @type {?} */ (this.el));
        /** @type {?} */
        const value = textarea.value;
        // Only resize if the value or minRows have changed since these calculations can be expensive.
        if (!force && this.minRows === this.previousMinRows && value === this.previousValue) {
            return;
        }
        /** @type {?} */
        const placeholderText = textarea.placeholder;
        // Reset the textarea height to auto in order to shrink back to its default size.
        // Also temporarily force overflow:hidden, so scroll bars do not interfere with calculations.
        // Long placeholders that are wider than the textarea width may lead to a bigger scrollHeight
        // value. To ensure that the scrollHeight is not bigger than the content, the placeholders
        // need to be removed temporarily.
        textarea.classList.add('cdk-textarea-autosize-measuring');
        textarea.placeholder = '';
        /** @type {?} */
        const height = Math.round((textarea.scrollHeight - this.inputGap) / this.cachedLineHeight) * this.cachedLineHeight +
            this.inputGap;
        // Use the scrollHeight to know how large the textarea *would* be if fit its entire value.
        textarea.style.height = `${height}px`;
        textarea.classList.remove('cdk-textarea-autosize-measuring');
        textarea.placeholder = placeholderText;
        // On Firefox resizing the textarea will prevent it from scrolling to the caret position.
        // We need to re-set the selection in order for it to scroll to the proper position.
        if (typeof requestAnimationFrame !== 'undefined') {
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => requestAnimationFrame((/**
             * @return {?}
             */
            () => {
                const { selectionStart, selectionEnd } = textarea;
                // IE will throw an "Unspecified error" if we try to set the selection range after the
                // element has been removed from the DOM. Assert that the directive hasn't been destroyed
                // between the time we requested the animation frame and when it was executed.
                // Also note that we have to assert that the textarea is focused before we set the
                // selection range. Setting the selection range on a non-focused textarea will cause
                // it to receive focus on IE and Edge.
                if (!this.destroy$.isStopped && document.activeElement === textarea) {
                    textarea.setSelectionRange(selectionStart, selectionEnd);
                }
            }))));
        }
        this.previousValue = value;
        this.previousMinRows = this.minRows;
    }
    /**
     * @private
     * @return {?}
     */
    cacheTextareaLineHeight() {
        if (this.cachedLineHeight >= 0 || !this.el.parentNode) {
            return;
        }
        // Use a clone element because we have to override some styles.
        /** @type {?} */
        const textareaClone = (/** @type {?} */ (this.el.cloneNode(false)));
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
    }
    /**
     * @return {?}
     */
    setMinHeight() {
        /** @type {?} */
        const minHeight = this.minRows && this.cachedLineHeight ? `${this.minRows * this.cachedLineHeight + this.inputGap}px` : null;
        if (minHeight) {
            this.el.style.minHeight = minHeight;
        }
    }
    /**
     * @return {?}
     */
    setMaxHeight() {
        /** @type {?} */
        const maxHeight = this.maxRows && this.cachedLineHeight ? `${this.maxRows * this.cachedLineHeight + this.inputGap}px` : null;
        if (maxHeight) {
            this.el.style.maxHeight = maxHeight;
        }
    }
    /**
     * @return {?}
     */
    noopInputHandler() {
        // no-op handler that ensures we're running change detection on input events.
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.nzAutosize && this.platform.isBrowser) {
            this.resizeToFitContent();
            this.nzDomEventService
                .registerResizeListener()
                .pipe(takeUntil(this.destroy$), finalize((/**
             * @return {?}
             */
            () => this.nzDomEventService.unregisterResizeListener())))
                .subscribe((/**
             * @return {?}
             */
            () => this.resizeToFitContent(true)));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (this.nzAutosize && this.platform.isBrowser) {
            this.resizeToFitContent();
        }
    }
}
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
NzAutosizeDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone },
    { type: Platform },
    { type: NzDomEventService }
];
NzAutosizeDirective.propDecorators = {
    nzAutosize: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYXV0b3NpemUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9pbnB1dC8iLCJzb3VyY2VzIjpbIm56LWF1dG9zaXplLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQWlCLFNBQVMsRUFBVyxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN4RyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7QUFFdkQsa0NBR0M7OztJQUZDLCtCQUFpQjs7SUFDakIsK0JBQWlCOzs7Ozs7QUFHbkIsTUFBTSxVQUFVLGNBQWMsQ0FBQyxLQUFzQztJQUNuRSxPQUFPLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxPQUFPLEtBQUssS0FBSyxTQUFTLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3pHLENBQUM7QUFZRCxNQUFNLE9BQU8sbUJBQW1COzs7Ozs7O0lBZ0o5QixZQUNVLFVBQXNCLEVBQ3RCLE1BQWMsRUFDZCxRQUFrQixFQUNsQixpQkFBb0M7UUFIcEMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBbkp0QyxhQUFRLEdBQTJCLEtBQUssQ0FBQztRQUN6QyxPQUFFLEdBQTJDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBTTNFLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3pCLGFBQVEsR0FBRyxFQUFFLENBQUM7SUE0SW5CLENBQUM7Ozs7O0lBMUlKLElBQ0ksVUFBVSxDQUFDLEtBQXNDO1FBQ25ELElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQ3RCO2FBQU0sSUFBSSxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUM3QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQzs7OztJQUVELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELGtCQUFrQixDQUFDLFFBQWlCLEtBQUs7UUFDdkMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFFL0IsZ0dBQWdHO1FBQ2hHLDBDQUEwQztRQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQzFCLE9BQU87U0FDUjs7Y0FFSyxRQUFRLEdBQUcsbUJBQUEsSUFBSSxDQUFDLEVBQUUsRUFBdUI7O2NBQ3pDLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSztRQUU1Qiw4RkFBOEY7UUFDOUYsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxlQUFlLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDbkYsT0FBTztTQUNSOztjQUNLLGVBQWUsR0FBRyxRQUFRLENBQUMsV0FBVztRQUU1QyxpRkFBaUY7UUFDakYsNkZBQTZGO1FBQzdGLDZGQUE2RjtRQUM3RiwwRkFBMEY7UUFDMUYsa0NBQWtDO1FBQ2xDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7UUFDMUQsUUFBUSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7O2NBQ3BCLE1BQU0sR0FDVixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsSUFBSSxDQUFDLGdCQUFnQjtZQUNuRyxJQUFJLENBQUMsUUFBUTtRQUVmLDBGQUEwRjtRQUMxRixRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDO1FBQ3RDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGlDQUFpQyxDQUFDLENBQUM7UUFDN0QsUUFBUSxDQUFDLFdBQVcsR0FBRyxlQUFlLENBQUM7UUFFdkMseUZBQXlGO1FBQ3pGLG9GQUFvRjtRQUNwRixJQUFJLE9BQU8scUJBQXFCLEtBQUssV0FBVyxFQUFFO1lBQ2hELElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCOzs7WUFBQyxHQUFHLEVBQUUsQ0FDakMscUJBQXFCOzs7WUFBQyxHQUFHLEVBQUU7c0JBQ25CLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRSxHQUFHLFFBQVE7Z0JBRWpELHNGQUFzRjtnQkFDdEYseUZBQXlGO2dCQUN6Riw4RUFBOEU7Z0JBQzlFLGtGQUFrRjtnQkFDbEYsb0ZBQW9GO2dCQUNwRixzQ0FBc0M7Z0JBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsSUFBSSxRQUFRLENBQUMsYUFBYSxLQUFLLFFBQVEsRUFBRTtvQkFDbkUsUUFBUSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxZQUFZLENBQUMsQ0FBQztpQkFDMUQ7WUFDSCxDQUFDLEVBQUMsRUFDSCxDQUFDO1NBQ0g7UUFFRCxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUMzQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEMsQ0FBQzs7Ozs7SUFFTyx1QkFBdUI7UUFDN0IsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUU7WUFDckQsT0FBTztTQUNSOzs7Y0FHSyxhQUFhLEdBQUcsbUJBQUEsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQXVCO1FBQ3JFLGFBQWEsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBRXZCLCtFQUErRTtRQUMvRSxnRkFBZ0Y7UUFDaEYsMkJBQTJCO1FBQzNCLGFBQWEsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztRQUMxQyxhQUFhLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7UUFDMUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3BDLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUNsQyxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDaEMsYUFBYSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ25DLGFBQWEsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUVuQywyRkFBMkY7UUFDM0YsMEZBQTBGO1FBQzFGLDJGQUEyRjtRQUMzRixtRkFBbUY7UUFDbkYsNkVBQTZFO1FBQzdFLGFBQWEsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUV4QyxtQkFBQSxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBQyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsYUFBYSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUN2RSxtQkFBQSxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBQyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUUvQyxpRkFBaUY7UUFDakYsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsWUFBWTs7Y0FDSixTQUFTLEdBQ2IsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJO1FBRTVHLElBQUksU0FBUyxFQUFFO1lBQ2IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztTQUNyQztJQUNILENBQUM7Ozs7SUFFRCxZQUFZOztjQUNKLFNBQVMsR0FDYixJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUk7UUFFNUcsSUFBSSxTQUFTLEVBQUU7WUFDYixJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQzs7OztJQUVELGdCQUFnQjtRQUNkLDZFQUE2RTtJQUMvRSxDQUFDOzs7O0lBU0QsZUFBZTtRQUNiLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUM5QyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsaUJBQWlCO2lCQUNuQixzQkFBc0IsRUFBRTtpQkFDeEIsSUFBSSxDQUNILFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQ3hCLFFBQVE7OztZQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyx3QkFBd0IsRUFBRSxFQUFDLENBQ2xFO2lCQUNBLFNBQVM7OztZQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDO1NBQ25EO0lBQ0gsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELFNBQVM7UUFDUCxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDOUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDM0I7SUFDSCxDQUFDOzs7WUF2TEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFFBQVEsRUFBRSxZQUFZO2dCQUN0QixJQUFJLEVBQUU7OztvQkFHSixJQUFJLEVBQUUsR0FBRztvQkFDVCxTQUFTLEVBQUUsb0JBQW9CO2lCQUNoQzthQUNGOzs7O1lBeEIyQyxVQUFVO1lBQVMsTUFBTTtZQUQ1RCxRQUFRO1lBS1IsaUJBQWlCOzs7eUJBZ0N2QixLQUFLOzs7Ozs7O0lBVk4sdUNBQWlEOzs7OztJQUNqRCxpQ0FBbUY7Ozs7O0lBQ25GLCtDQUFpQzs7Ozs7SUFDakMsNENBQThCOzs7OztJQUM5Qiw4Q0FBNEM7Ozs7O0lBQzVDLHNDQUFvQzs7Ozs7SUFDcEMsc0NBQW9DOzs7OztJQUNwQyx1Q0FBaUM7Ozs7O0lBQ2pDLHVDQUFzQjs7Ozs7SUF3SXBCLHlDQUE4Qjs7Ozs7SUFDOUIscUNBQXNCOzs7OztJQUN0Qix1Q0FBMEI7Ozs7O0lBQzFCLGdEQUE0QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIERvQ2hlY2ssIEVsZW1lbnRSZWYsIElucHV0LCBOZ1pvbmUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpbmFsaXplLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBOekRvbUV2ZW50U2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEF1dG9TaXplVHlwZSB7XHJcbiAgbWluUm93cz86IG51bWJlcjtcclxuICBtYXhSb3dzPzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNBdXRvU2l6ZVR5cGUodmFsdWU6IHN0cmluZyB8IGJvb2xlYW4gfCBBdXRvU2l6ZVR5cGUpOiB2YWx1ZSBpcyBBdXRvU2l6ZVR5cGUge1xyXG4gIHJldHVybiB0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ2Jvb2xlYW4nICYmICghIXZhbHVlLm1heFJvd3MgfHwgISF2YWx1ZS5taW5Sb3dzKTtcclxufVxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICd0ZXh0YXJlYVtuekF1dG9zaXplXScsXHJcbiAgZXhwb3J0QXM6ICduekF1dG9zaXplJyxcclxuICBob3N0OiB7XHJcbiAgICAvLyBUZXh0YXJlYSBlbGVtZW50cyB0aGF0IGhhdmUgdGhlIGRpcmVjdGl2ZSBhcHBsaWVkIHNob3VsZCBoYXZlIGEgc2luZ2xlIHJvdyBieSBkZWZhdWx0LlxyXG4gICAgLy8gQnJvd3NlcnMgbm9ybWFsbHkgc2hvdyB0d28gcm93cyBieSBkZWZhdWx0IGFuZCB0aGVyZWZvcmUgdGhpcyBsaW1pdHMgdGhlIG1pblJvd3MgYmluZGluZy5cclxuICAgIHJvd3M6ICcxJyxcclxuICAgICcoaW5wdXQpJzogJ25vb3BJbnB1dEhhbmRsZXIoKSdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekF1dG9zaXplRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBEb0NoZWNrIHtcclxuICBwcml2YXRlIGF1dG9zaXplOiBib29sZWFuIHwgQXV0b1NpemVUeXBlID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBlbDogSFRNTFRleHRBcmVhRWxlbWVudCB8IEhUTUxJbnB1dEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICBwcml2YXRlIGNhY2hlZExpbmVIZWlnaHQ6IG51bWJlcjtcclxuICBwcml2YXRlIHByZXZpb3VzVmFsdWU6IHN0cmluZztcclxuICBwcml2YXRlIHByZXZpb3VzTWluUm93czogbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgbWluUm93czogbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgbWF4Um93czogbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xyXG4gIHByaXZhdGUgaW5wdXRHYXAgPSAxMDtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpBdXRvc2l6ZSh2YWx1ZTogc3RyaW5nIHwgYm9vbGVhbiB8IEF1dG9TaXplVHlwZSkge1xyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgdGhpcy5hdXRvc2l6ZSA9IHRydWU7XHJcbiAgICB9IGVsc2UgaWYgKGlzQXV0b1NpemVUeXBlKHZhbHVlKSkge1xyXG4gICAgICB0aGlzLmF1dG9zaXplID0gdmFsdWU7XHJcbiAgICAgIHRoaXMubWluUm93cyA9IHZhbHVlLm1pblJvd3M7XHJcbiAgICAgIHRoaXMubWF4Um93cyA9IHZhbHVlLm1heFJvd3M7XHJcbiAgICAgIHRoaXMuc2V0TWF4SGVpZ2h0KCk7XHJcbiAgICAgIHRoaXMuc2V0TWluSGVpZ2h0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbnpBdXRvc2l6ZSgpOiBzdHJpbmcgfCBib29sZWFuIHwgQXV0b1NpemVUeXBlIHtcclxuICAgIHJldHVybiB0aGlzLmF1dG9zaXplO1xyXG4gIH1cclxuXHJcbiAgcmVzaXplVG9GaXRDb250ZW50KGZvcmNlOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuICAgIHRoaXMuY2FjaGVUZXh0YXJlYUxpbmVIZWlnaHQoKTtcclxuXHJcbiAgICAvLyBJZiB3ZSBoYXZlbid0IGRldGVybWluZWQgdGhlIGxpbmUtaGVpZ2h0IHlldCwgd2Uga25vdyB3ZSdyZSBzdGlsbCBoaWRkZW4gYW5kIHRoZXJlJ3Mgbm8gcG9pbnRcclxuICAgIC8vIGluIGNoZWNraW5nIHRoZSBoZWlnaHQgb2YgdGhlIHRleHRhcmVhLlxyXG4gICAgaWYgKCF0aGlzLmNhY2hlZExpbmVIZWlnaHQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRleHRhcmVhID0gdGhpcy5lbCBhcyBIVE1MVGV4dEFyZWFFbGVtZW50O1xyXG4gICAgY29uc3QgdmFsdWUgPSB0ZXh0YXJlYS52YWx1ZTtcclxuXHJcbiAgICAvLyBPbmx5IHJlc2l6ZSBpZiB0aGUgdmFsdWUgb3IgbWluUm93cyBoYXZlIGNoYW5nZWQgc2luY2UgdGhlc2UgY2FsY3VsYXRpb25zIGNhbiBiZSBleHBlbnNpdmUuXHJcbiAgICBpZiAoIWZvcmNlICYmIHRoaXMubWluUm93cyA9PT0gdGhpcy5wcmV2aW91c01pblJvd3MgJiYgdmFsdWUgPT09IHRoaXMucHJldmlvdXNWYWx1ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBwbGFjZWhvbGRlclRleHQgPSB0ZXh0YXJlYS5wbGFjZWhvbGRlcjtcclxuXHJcbiAgICAvLyBSZXNldCB0aGUgdGV4dGFyZWEgaGVpZ2h0IHRvIGF1dG8gaW4gb3JkZXIgdG8gc2hyaW5rIGJhY2sgdG8gaXRzIGRlZmF1bHQgc2l6ZS5cclxuICAgIC8vIEFsc28gdGVtcG9yYXJpbHkgZm9yY2Ugb3ZlcmZsb3c6aGlkZGVuLCBzbyBzY3JvbGwgYmFycyBkbyBub3QgaW50ZXJmZXJlIHdpdGggY2FsY3VsYXRpb25zLlxyXG4gICAgLy8gTG9uZyBwbGFjZWhvbGRlcnMgdGhhdCBhcmUgd2lkZXIgdGhhbiB0aGUgdGV4dGFyZWEgd2lkdGggbWF5IGxlYWQgdG8gYSBiaWdnZXIgc2Nyb2xsSGVpZ2h0XHJcbiAgICAvLyB2YWx1ZS4gVG8gZW5zdXJlIHRoYXQgdGhlIHNjcm9sbEhlaWdodCBpcyBub3QgYmlnZ2VyIHRoYW4gdGhlIGNvbnRlbnQsIHRoZSBwbGFjZWhvbGRlcnNcclxuICAgIC8vIG5lZWQgdG8gYmUgcmVtb3ZlZCB0ZW1wb3JhcmlseS5cclxuICAgIHRleHRhcmVhLmNsYXNzTGlzdC5hZGQoJ2Nkay10ZXh0YXJlYS1hdXRvc2l6ZS1tZWFzdXJpbmcnKTtcclxuICAgIHRleHRhcmVhLnBsYWNlaG9sZGVyID0gJyc7XHJcbiAgICBjb25zdCBoZWlnaHQgPVxyXG4gICAgICBNYXRoLnJvdW5kKCh0ZXh0YXJlYS5zY3JvbGxIZWlnaHQgLSB0aGlzLmlucHV0R2FwKSAvIHRoaXMuY2FjaGVkTGluZUhlaWdodCkgKiB0aGlzLmNhY2hlZExpbmVIZWlnaHQgK1xyXG4gICAgICB0aGlzLmlucHV0R2FwO1xyXG5cclxuICAgIC8vIFVzZSB0aGUgc2Nyb2xsSGVpZ2h0IHRvIGtub3cgaG93IGxhcmdlIHRoZSB0ZXh0YXJlYSAqd291bGQqIGJlIGlmIGZpdCBpdHMgZW50aXJlIHZhbHVlLlxyXG4gICAgdGV4dGFyZWEuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcclxuICAgIHRleHRhcmVhLmNsYXNzTGlzdC5yZW1vdmUoJ2Nkay10ZXh0YXJlYS1hdXRvc2l6ZS1tZWFzdXJpbmcnKTtcclxuICAgIHRleHRhcmVhLnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXJUZXh0O1xyXG5cclxuICAgIC8vIE9uIEZpcmVmb3ggcmVzaXppbmcgdGhlIHRleHRhcmVhIHdpbGwgcHJldmVudCBpdCBmcm9tIHNjcm9sbGluZyB0byB0aGUgY2FyZXQgcG9zaXRpb24uXHJcbiAgICAvLyBXZSBuZWVkIHRvIHJlLXNldCB0aGUgc2VsZWN0aW9uIGluIG9yZGVyIGZvciBpdCB0byBzY3JvbGwgdG8gdGhlIHByb3BlciBwb3NpdGlvbi5cclxuICAgIGlmICh0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PlxyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB7IHNlbGVjdGlvblN0YXJ0LCBzZWxlY3Rpb25FbmQgfSA9IHRleHRhcmVhO1xyXG5cclxuICAgICAgICAgIC8vIElFIHdpbGwgdGhyb3cgYW4gXCJVbnNwZWNpZmllZCBlcnJvclwiIGlmIHdlIHRyeSB0byBzZXQgdGhlIHNlbGVjdGlvbiByYW5nZSBhZnRlciB0aGVcclxuICAgICAgICAgIC8vIGVsZW1lbnQgaGFzIGJlZW4gcmVtb3ZlZCBmcm9tIHRoZSBET00uIEFzc2VydCB0aGF0IHRoZSBkaXJlY3RpdmUgaGFzbid0IGJlZW4gZGVzdHJveWVkXHJcbiAgICAgICAgICAvLyBiZXR3ZWVuIHRoZSB0aW1lIHdlIHJlcXVlc3RlZCB0aGUgYW5pbWF0aW9uIGZyYW1lIGFuZCB3aGVuIGl0IHdhcyBleGVjdXRlZC5cclxuICAgICAgICAgIC8vIEFsc28gbm90ZSB0aGF0IHdlIGhhdmUgdG8gYXNzZXJ0IHRoYXQgdGhlIHRleHRhcmVhIGlzIGZvY3VzZWQgYmVmb3JlIHdlIHNldCB0aGVcclxuICAgICAgICAgIC8vIHNlbGVjdGlvbiByYW5nZS4gU2V0dGluZyB0aGUgc2VsZWN0aW9uIHJhbmdlIG9uIGEgbm9uLWZvY3VzZWQgdGV4dGFyZWEgd2lsbCBjYXVzZVxyXG4gICAgICAgICAgLy8gaXQgdG8gcmVjZWl2ZSBmb2N1cyBvbiBJRSBhbmQgRWRnZS5cclxuICAgICAgICAgIGlmICghdGhpcy5kZXN0cm95JC5pc1N0b3BwZWQgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gdGV4dGFyZWEpIHtcclxuICAgICAgICAgICAgdGV4dGFyZWEuc2V0U2VsZWN0aW9uUmFuZ2Uoc2VsZWN0aW9uU3RhcnQsIHNlbGVjdGlvbkVuZCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnByZXZpb3VzVmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMucHJldmlvdXNNaW5Sb3dzID0gdGhpcy5taW5Sb3dzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYWNoZVRleHRhcmVhTGluZUhlaWdodCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmNhY2hlZExpbmVIZWlnaHQgPj0gMCB8fCAhdGhpcy5lbC5wYXJlbnROb2RlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVc2UgYSBjbG9uZSBlbGVtZW50IGJlY2F1c2Ugd2UgaGF2ZSB0byBvdmVycmlkZSBzb21lIHN0eWxlcy5cclxuICAgIGNvbnN0IHRleHRhcmVhQ2xvbmUgPSB0aGlzLmVsLmNsb25lTm9kZShmYWxzZSkgYXMgSFRNTFRleHRBcmVhRWxlbWVudDtcclxuICAgIHRleHRhcmVhQ2xvbmUucm93cyA9IDE7XHJcblxyXG4gICAgLy8gVXNlIGBwb3NpdGlvbjogYWJzb2x1dGVgIHNvIHRoYXQgdGhpcyBkb2Vzbid0IGNhdXNlIGEgYnJvd3NlciBsYXlvdXQgYW5kIHVzZVxyXG4gICAgLy8gYHZpc2liaWxpdHk6IGhpZGRlbmAgc28gdGhhdCBub3RoaW5nIGlzIHJlbmRlcmVkLiBDbGVhciBhbnkgb3RoZXIgc3R5bGVzIHRoYXRcclxuICAgIC8vIHdvdWxkIGFmZmVjdCB0aGUgaGVpZ2h0LlxyXG4gICAgdGV4dGFyZWFDbG9uZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICB0ZXh0YXJlYUNsb25lLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICAgIHRleHRhcmVhQ2xvbmUuc3R5bGUuYm9yZGVyID0gJ25vbmUnO1xyXG4gICAgdGV4dGFyZWFDbG9uZS5zdHlsZS5wYWRkaW5nID0gJzAnO1xyXG4gICAgdGV4dGFyZWFDbG9uZS5zdHlsZS5oZWlnaHQgPSAnJztcclxuICAgIHRleHRhcmVhQ2xvbmUuc3R5bGUubWluSGVpZ2h0ID0gJyc7XHJcbiAgICB0ZXh0YXJlYUNsb25lLnN0eWxlLm1heEhlaWdodCA9ICcnO1xyXG5cclxuICAgIC8vIEluIEZpcmVmb3ggaXQgaGFwcGVucyB0aGF0IHRleHRhcmVhIGVsZW1lbnRzIGFyZSBhbHdheXMgYmlnZ2VyIHRoYW4gdGhlIHNwZWNpZmllZCBhbW91bnRcclxuICAgIC8vIG9mIHJvd3MuIFRoaXMgaXMgYmVjYXVzZSBGaXJlZm94IHRyaWVzIHRvIGFkZCBleHRyYSBzcGFjZSBmb3IgdGhlIGhvcml6b250YWwgc2Nyb2xsYmFyLlxyXG4gICAgLy8gQXMgYSB3b3JrYXJvdW5kIHRoYXQgcmVtb3ZlcyB0aGUgZXh0cmEgc3BhY2UgZm9yIHRoZSBzY3JvbGxiYXIsIHdlIGNhbiBqdXN0IHNldCBvdmVyZmxvd1xyXG4gICAgLy8gdG8gaGlkZGVuLiBUaGlzIGVuc3VyZXMgdGhhdCB0aGVyZSBpcyBubyBpbnZhbGlkIGNhbGN1bGF0aW9uIG9mIHRoZSBsaW5lIGhlaWdodC5cclxuICAgIC8vIFNlZSBGaXJlZm94IGJ1ZyByZXBvcnQ6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTMzNjU0XHJcbiAgICB0ZXh0YXJlYUNsb25lLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcblxyXG4gICAgdGhpcy5lbC5wYXJlbnROb2RlIS5hcHBlbmRDaGlsZCh0ZXh0YXJlYUNsb25lKTtcclxuICAgIHRoaXMuY2FjaGVkTGluZUhlaWdodCA9IHRleHRhcmVhQ2xvbmUuY2xpZW50SGVpZ2h0IC0gdGhpcy5pbnB1dEdhcCAtIDE7XHJcbiAgICB0aGlzLmVsLnBhcmVudE5vZGUhLnJlbW92ZUNoaWxkKHRleHRhcmVhQ2xvbmUpO1xyXG5cclxuICAgIC8vIE1pbiBhbmQgbWF4IGhlaWdodHMgaGF2ZSB0byBiZSByZS1jYWxjdWxhdGVkIGlmIHRoZSBjYWNoZWQgbGluZSBoZWlnaHQgY2hhbmdlc1xyXG4gICAgdGhpcy5zZXRNaW5IZWlnaHQoKTtcclxuICAgIHRoaXMuc2V0TWF4SGVpZ2h0KCk7XHJcbiAgfVxyXG5cclxuICBzZXRNaW5IZWlnaHQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBtaW5IZWlnaHQgPVxyXG4gICAgICB0aGlzLm1pblJvd3MgJiYgdGhpcy5jYWNoZWRMaW5lSGVpZ2h0ID8gYCR7dGhpcy5taW5Sb3dzICogdGhpcy5jYWNoZWRMaW5lSGVpZ2h0ICsgdGhpcy5pbnB1dEdhcH1weGAgOiBudWxsO1xyXG5cclxuICAgIGlmIChtaW5IZWlnaHQpIHtcclxuICAgICAgdGhpcy5lbC5zdHlsZS5taW5IZWlnaHQgPSBtaW5IZWlnaHQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRNYXhIZWlnaHQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBtYXhIZWlnaHQgPVxyXG4gICAgICB0aGlzLm1heFJvd3MgJiYgdGhpcy5jYWNoZWRMaW5lSGVpZ2h0ID8gYCR7dGhpcy5tYXhSb3dzICogdGhpcy5jYWNoZWRMaW5lSGVpZ2h0ICsgdGhpcy5pbnB1dEdhcH1weGAgOiBudWxsO1xyXG5cclxuICAgIGlmIChtYXhIZWlnaHQpIHtcclxuICAgICAgdGhpcy5lbC5zdHlsZS5tYXhIZWlnaHQgPSBtYXhIZWlnaHQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBub29wSW5wdXRIYW5kbGVyKCk6IHZvaWQge1xyXG4gICAgLy8gbm8tb3AgaGFuZGxlciB0aGF0IGVuc3VyZXMgd2UncmUgcnVubmluZyBjaGFuZ2UgZGV0ZWN0aW9uIG9uIGlucHV0IGV2ZW50cy5cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcclxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxyXG4gICAgcHJpdmF0ZSBuekRvbUV2ZW50U2VydmljZTogTnpEb21FdmVudFNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56QXV0b3NpemUgJiYgdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgdGhpcy5yZXNpemVUb0ZpdENvbnRlbnQoKTtcclxuICAgICAgdGhpcy5uekRvbUV2ZW50U2VydmljZVxyXG4gICAgICAgIC5yZWdpc3RlclJlc2l6ZUxpc3RlbmVyKClcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcclxuICAgICAgICAgIGZpbmFsaXplKCgpID0+IHRoaXMubnpEb21FdmVudFNlcnZpY2UudW5yZWdpc3RlclJlc2l6ZUxpc3RlbmVyKCkpXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZXNpemVUb0ZpdENvbnRlbnQodHJ1ZSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIG5nRG9DaGVjaygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56QXV0b3NpemUgJiYgdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgdGhpcy5yZXNpemVUb0ZpdENvbnRlbnQoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19
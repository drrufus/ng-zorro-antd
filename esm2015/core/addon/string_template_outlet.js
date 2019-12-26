/**
 * @fileoverview added by tsickle
 * Generated from: string_template_outlet.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
export class NzStringTemplateOutletDirective {
    /**
     * @param {?} viewContainer
     * @param {?} defaultTemplate
     */
    constructor(viewContainer, defaultTemplate) {
        this.viewContainer = viewContainer;
        this.defaultTemplate = defaultTemplate;
        // tslint:disable-next-line:no-any
        this.inputTemplate = null;
        this.inputViewRef = null;
        this.defaultViewRef = null;
        // tslint:disable-next-line:no-any
        this.nzStringTemplateOutletContext = null;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzStringTemplateOutlet(value) {
        if (value instanceof TemplateRef) {
            this.isTemplate = true;
            this.inputTemplate = value;
        }
        else {
            this.isTemplate = false;
        }
    }
    /**
     * @return {?}
     */
    recreateView() {
        if (!this.isTemplate) {
            /** use default template when input is string **/
            if (!this.defaultViewRef) {
                if (this.defaultTemplate) {
                    this.defaultViewRef = this.viewContainer.createEmbeddedView(this.defaultTemplate, this.nzStringTemplateOutletContext);
                }
            }
        }
        else {
            /** use input template when input is templateRef **/
            if (!this.inputViewRef) {
                if (this.inputTemplate) {
                    this.inputViewRef = this.viewContainer.createEmbeddedView(this.inputTemplate, this.nzStringTemplateOutletContext);
                }
            }
        }
    }
    // tslint:disable-next-line:no-any
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    getType(value) {
        if (value instanceof TemplateRef) {
            return 'template';
        }
        else {
            return 'string';
        }
    }
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    shouldRecreateView(changes) {
        const { nzStringTemplateOutletContext, nzStringTemplateOutlet } = changes;
        /** @type {?} */
        let shouldOutletRecreate = false;
        if (nzStringTemplateOutlet) {
            if (nzStringTemplateOutlet.firstChange) {
                shouldOutletRecreate = true;
            }
            else {
                /** @type {?} */
                const previousOutletType = this.getType(nzStringTemplateOutlet.previousValue);
                /** @type {?} */
                const currentOutletType = this.getType(nzStringTemplateOutlet.currentValue);
                shouldOutletRecreate = !(previousOutletType === 'string' && currentOutletType === 'string');
            }
        }
        /** @type {?} */
        const shouldContextRecreate = nzStringTemplateOutletContext && this.hasContextShapeChanged(nzStringTemplateOutletContext);
        return shouldContextRecreate || shouldOutletRecreate;
    }
    /**
     * @private
     * @param {?} ctxChange
     * @return {?}
     */
    hasContextShapeChanged(ctxChange) {
        /** @type {?} */
        const prevCtxKeys = Object.keys(ctxChange.previousValue || {});
        /** @type {?} */
        const currCtxKeys = Object.keys(ctxChange.currentValue || {});
        if (prevCtxKeys.length === currCtxKeys.length) {
            for (const propName of currCtxKeys) {
                if (prevCtxKeys.indexOf(propName) === -1) {
                    return true;
                }
            }
            return false;
        }
        else {
            return true;
        }
    }
    // tslint:disable-next-line:no-any
    /**
     * @private
     * @param {?} ctx
     * @return {?}
     */
    updateExistingContext(ctx) {
        for (const propName of Object.keys(ctx)) {
            // tslint:disable-next-line:no-any
            ((/** @type {?} */ ((/** @type {?} */ (this.inputViewRef)).context)))[propName] = this.nzStringTemplateOutletContext[propName];
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const recreateView = this.shouldRecreateView(changes);
        if (recreateView) {
            if (this.viewContainer) {
                this.viewContainer.clear();
                this.defaultViewRef = null;
                this.inputViewRef = null;
            }
            this.recreateView();
        }
        else {
            if (this.inputViewRef && this.nzStringTemplateOutletContext) {
                this.updateExistingContext(this.nzStringTemplateOutletContext);
            }
        }
    }
}
NzStringTemplateOutletDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nzStringTemplateOutlet]',
                exportAs: 'nzStringTemplateOutlet'
            },] }
];
/** @nocollapse */
NzStringTemplateOutletDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: TemplateRef }
];
NzStringTemplateOutletDirective.propDecorators = {
    nzStringTemplateOutletContext: [{ type: Input }],
    nzStringTemplateOutlet: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzStringTemplateOutletDirective.prototype.isTemplate;
    /**
     * @type {?}
     * @private
     */
    NzStringTemplateOutletDirective.prototype.inputTemplate;
    /**
     * @type {?}
     * @private
     */
    NzStringTemplateOutletDirective.prototype.inputViewRef;
    /**
     * @type {?}
     * @private
     */
    NzStringTemplateOutletDirective.prototype.defaultViewRef;
    /** @type {?} */
    NzStringTemplateOutletDirective.prototype.nzStringTemplateOutletContext;
    /**
     * @type {?}
     * @private
     */
    NzStringTemplateOutletDirective.prototype.viewContainer;
    /**
     * @type {?}
     * @private
     */
    NzStringTemplateOutletDirective.prototype.defaultTemplate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nX3RlbXBsYXRlX291dGxldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS9hZGRvbi8iLCJzb3VyY2VzIjpbInN0cmluZ190ZW1wbGF0ZV9vdXRsZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBSUwsV0FBVyxFQUNYLGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQU12QixNQUFNLE9BQU8sK0JBQStCOzs7OztJQStGMUMsWUFBb0IsYUFBK0IsRUFBVSxlQUFrQztRQUEzRSxrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBbUI7O1FBNUZ2RixrQkFBYSxHQUE0QixJQUFJLENBQUM7UUFDOUMsaUJBQVksR0FBaUMsSUFBSSxDQUFDO1FBQ2xELG1CQUFjLEdBQWlDLElBQUksQ0FBQzs7UUFHbkQsa0NBQTZCLEdBQWUsSUFBSSxDQUFDO0lBdUZ3QyxDQUFDOzs7OztJQXJGbkcsSUFFSSxzQkFBc0IsQ0FBQyxLQUFnQztRQUN6RCxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7U0FDNUI7YUFBTTtZQUNMLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQzs7OztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixpREFBaUQ7WUFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQ3hCLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtvQkFDeEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUN6RCxJQUFJLENBQUMsZUFBZSxFQUNwQixJQUFJLENBQUMs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SSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO2FBQU07WUFDTCxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLDZCQUE2QixFQUFFO2dCQUMzRCxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLENBQUM7YUFDaEU7U0FDRjtJQUNILENBQUM7OztZQW5IRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsUUFBUSxFQUFFLHdCQUF3QjthQUNuQzs7OztZQU5DLGdCQUFnQjtZQURoQixXQUFXOzs7NENBZ0JWLEtBQUs7cUNBRUwsS0FBSzs7Ozs7OztJQVROLHFEQUE0Qjs7Ozs7SUFFNUIsd0RBQXNEOzs7OztJQUN0RCx1REFBMEQ7Ozs7O0lBQzFELHlEQUE0RDs7SUFHNUQsd0VBQTBEOzs7OztJQXVGOUMsd0RBQXVDOzs7OztJQUFFLDBEQUEwQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsXHJcbiAgRW1iZWRkZWRWaWV3UmVmLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBTaW1wbGVDaGFuZ2UsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tuelN0cmluZ1RlbXBsYXRlT3V0bGV0XScsXHJcbiAgZXhwb3J0QXM6ICduelN0cmluZ1RlbXBsYXRlT3V0bGV0J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpTdHJpbmdUZW1wbGF0ZU91dGxldERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgcHJpdmF0ZSBpc1RlbXBsYXRlOiBib29sZWFuO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBwcml2YXRlIGlucHV0VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gfCBudWxsID0gbnVsbDtcclxuICBwcml2YXRlIGlucHV0Vmlld1JlZjogRW1iZWRkZWRWaWV3UmVmPHZvaWQ+IHwgbnVsbCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBkZWZhdWx0Vmlld1JlZjogRW1iZWRkZWRWaWV3UmVmPHZvaWQ+IHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBASW5wdXQoKSBuelN0cmluZ1RlbXBsYXRlT3V0bGV0Q29udGV4dDogYW55IHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHNldCBuelN0cmluZ1RlbXBsYXRlT3V0bGV0KHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XHJcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xyXG4gICAgICB0aGlzLmlzVGVtcGxhdGUgPSB0cnVlO1xyXG4gICAgICB0aGlzLmlucHV0VGVtcGxhdGUgPSB2YWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaXNUZW1wbGF0ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVjcmVhdGVWaWV3KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmlzVGVtcGxhdGUpIHtcclxuICAgICAgLyoqIHVzZSBkZWZhdWx0IHRlbXBsYXRlIHdoZW4gaW5wdXQgaXMgc3RyaW5nICoqL1xyXG4gICAgICBpZiAoIXRoaXMuZGVmYXVsdFZpZXdSZWYpIHtcclxuICAgICAgICBpZiAodGhpcy5kZWZhdWx0VGVtcGxhdGUpIHtcclxuICAgICAgICAgIHRoaXMuZGVmYXVsdFZpZXdSZWYgPSB0aGlzLnZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KFxyXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRUZW1wbGF0ZSxcclxuICAgICAgICAgICAgdGhpcy5uelN0cmluZ1RlbXBsYXRlT3V0bGV0Q29udGV4dFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8qKiB1c2UgaW5wdXQgdGVtcGxhdGUgd2hlbiBpbnB1dCBpcyB0ZW1wbGF0ZVJlZiAqKi9cclxuICAgICAgaWYgKCF0aGlzLmlucHV0Vmlld1JlZikge1xyXG4gICAgICAgIGlmICh0aGlzLmlucHV0VGVtcGxhdGUpIHtcclxuICAgICAgICAgIHRoaXMuaW5wdXRWaWV3UmVmID0gdGhpcy52aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyhcclxuICAgICAgICAgICAgdGhpcy5pbnB1dFRlbXBsYXRlLFxyXG4gICAgICAgICAgICB0aGlzLm56U3RyaW5nVGVtcGxhdGVPdXRsZXRDb250ZXh0XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHByaXZhdGUgZ2V0VHlwZSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pik6ICd0ZW1wbGF0ZScgfCAnc3RyaW5nJyB7XHJcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xyXG4gICAgICByZXR1cm4gJ3RlbXBsYXRlJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAnc3RyaW5nJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2hvdWxkUmVjcmVhdGVWaWV3KGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHsgbnpTdHJpbmdUZW1wbGF0ZU91dGxldENvbnRleHQsIG56U3RyaW5nVGVtcGxhdGVPdXRsZXQgfSA9IGNoYW5nZXM7XHJcbiAgICBsZXQgc2hvdWxkT3V0bGV0UmVjcmVhdGUgPSBmYWxzZTtcclxuICAgIGlmIChuelN0cmluZ1RlbXBsYXRlT3V0bGV0KSB7XHJcbiAgICAgIGlmIChuelN0cmluZ1RlbXBsYXRlT3V0bGV0LmZpcnN0Q2hhbmdlKSB7XHJcbiAgICAgICAgc2hvdWxkT3V0bGV0UmVjcmVhdGUgPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHByZXZpb3VzT3V0bGV0VHlwZSA9IHRoaXMuZ2V0VHlwZShuelN0cmluZ1RlbXBsYXRlT3V0bGV0LnByZXZpb3VzVmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRPdXRsZXRUeXBlID0gdGhpcy5nZXRUeXBlKG56U3RyaW5nVGVtcGxhdGVPdXRsZXQuY3VycmVudFZhbHVlKTtcclxuICAgICAgICBzaG91bGRPdXRsZXRSZWNyZWF0ZSA9ICEocHJldmlvdXNPdXRsZXRUeXBlID09PSAnc3RyaW5nJyAmJiBjdXJyZW50T3V0bGV0VHlwZSA9PT0gJ3N0cmluZycpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBzaG91bGRDb250ZXh0UmVjcmVhdGUgPVxyXG4gICAgICBuelN0cmluZ1RlbXBsYXRlT3V0bGV0Q29udGV4dCAmJiB0aGlzLmhhc0NvbnRleHRTaGFwZUNoYW5nZWQobnpTdHJpbmdUZW1wbGF0ZU91dGxldENvbnRleHQpO1xyXG4gICAgcmV0dXJuIHNob3VsZENvbnRleHRSZWNyZWF0ZSB8fCBzaG91bGRPdXRsZXRSZWNyZWF0ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFzQ29udGV4dFNoYXBlQ2hhbmdlZChjdHhDaGFuZ2U6IFNpbXBsZUNoYW5nZSk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgcHJldkN0eEtleXMgPSBPYmplY3Qua2V5cyhjdHhDaGFuZ2UucHJldmlvdXNWYWx1ZSB8fCB7fSk7XHJcbiAgICBjb25zdCBjdXJyQ3R4S2V5cyA9IE9iamVjdC5rZXlzKGN0eENoYW5nZS5jdXJyZW50VmFsdWUgfHwge30pO1xyXG5cclxuICAgIGlmIChwcmV2Q3R4S2V5cy5sZW5ndGggPT09IGN1cnJDdHhLZXlzLmxlbmd0aCkge1xyXG4gICAgICBmb3IgKGNvbnN0IHByb3BOYW1lIG9mIGN1cnJDdHhLZXlzKSB7XHJcbiAgICAgICAgaWYgKHByZXZDdHhLZXlzLmluZGV4T2YocHJvcE5hbWUpID09PSAtMSkge1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHByaXZhdGUgdXBkYXRlRXhpc3RpbmdDb250ZXh0KGN0eDogYW55KTogdm9pZCB7XHJcbiAgICBmb3IgKGNvbnN0IHByb3BOYW1lIG9mIE9iamVjdC5rZXlzKGN0eCkpIHtcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gICAgICAodGhpcy5pbnB1dFZpZXdSZWYhLmNvbnRleHQgYXMgYW55KVtwcm9wTmFtZV0gPSB0aGlzLm56U3RyaW5nVGVtcGxhdGVPdXRsZXRDb250ZXh0W3Byb3BOYW1lXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSBkZWZhdWx0VGVtcGxhdGU6IFRlbXBsYXRlUmVmPHZvaWQ+KSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBjb25zdCByZWNyZWF0ZVZpZXcgPSB0aGlzLnNob3VsZFJlY3JlYXRlVmlldyhjaGFuZ2VzKTtcclxuICAgIGlmIChyZWNyZWF0ZVZpZXcpIHtcclxuICAgICAgaWYgKHRoaXMudmlld0NvbnRhaW5lcikge1xyXG4gICAgICAgIHRoaXMudmlld0NvbnRhaW5lci5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMuZGVmYXVsdFZpZXdSZWYgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaW5wdXRWaWV3UmVmID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnJlY3JlYXRlVmlldygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMuaW5wdXRWaWV3UmVmICYmIHRoaXMubnpTdHJpbmdUZW1wbGF0ZU91dGxldENvbnRleHQpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUV4aXN0aW5nQ29udGV4dCh0aGlzLm56U3RyaW5nVGVtcGxhdGVPdXRsZXRDb250ZXh0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=
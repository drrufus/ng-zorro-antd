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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nX3RlbXBsYXRlX291dGxldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS9hZGRvbi8iLCJzb3VyY2VzIjpbInN0cmluZ190ZW1wbGF0ZV9vdXRsZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFJTCxXQUFXLEVBQ1gsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBTXZCLE1BQU0sT0FBTywrQkFBK0I7Ozs7O0lBK0YxQyxZQUFvQixhQUErQixFQUFVLGVBQWtDO1FBQTNFLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFtQjs7UUE1RnZGLGtCQUFhLEdBQTRCLElBQUksQ0FBQztRQUM5QyxpQkFBWSxHQUFpQyxJQUFJLENBQUM7UUFDbEQsbUJBQWMsR0FBaUMsSUFBSSxDQUFDOztRQUduRCxrQ0FBNkIsR0FBZSxJQUFJLENBQUM7SUF1RndDLENBQUM7Ozs7O0lBckZuRyxJQUVJLHNCQUFzQixDQUFDLEtBQWdDO1FBQ3pELElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtZQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztTQUM1QjthQUFNO1lBQ0wsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7U0FDekI7SUFDSCxDQUFDOzs7O0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLGlEQUFpRDtZQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtnQkFDeEIsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO29CQUN4QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQ3pELElBQUksQ0FBQyxlQUFlLEVBQ3BCLElBQUksQ0FBQyw2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LENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckI7YUFBTTtZQUNMLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsNkJBQTZCLEVBQUU7Z0JBQzNELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBQzthQUNoRTtTQUNGO0lBQ0gsQ0FBQzs7O1lBbkhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxRQUFRLEVBQUUsd0JBQXdCO2FBQ25DOzs7O1lBTkMsZ0JBQWdCO1lBRGhCLFdBQVc7Ozs0Q0FnQlYsS0FBSztxQ0FFTCxLQUFLOzs7Ozs7O0lBVE4scURBQTRCOzs7OztJQUU1Qix3REFBc0Q7Ozs7O0lBQ3RELHVEQUEwRDs7Ozs7SUFDMUQseURBQTREOztJQUc1RCx3RUFBMEQ7Ozs7O0lBdUY5Qyx3REFBdUM7Ozs7O0lBQUUsMERBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIERpcmVjdGl2ZSxcclxuICBFbWJlZGRlZFZpZXdSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIFNpbXBsZUNoYW5nZSxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW256U3RyaW5nVGVtcGxhdGVPdXRsZXRdJyxcclxuICBleHBvcnRBczogJ256U3RyaW5nVGVtcGxhdGVPdXRsZXQnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelN0cmluZ1RlbXBsYXRlT3V0bGV0RGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBwcml2YXRlIGlzVGVtcGxhdGU6IGJvb2xlYW47XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHByaXZhdGUgaW5wdXRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiB8IG51bGwgPSBudWxsO1xyXG4gIHByaXZhdGUgaW5wdXRWaWV3UmVmOiBFbWJlZGRlZFZpZXdSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcclxuICBwcml2YXRlIGRlZmF1bHRWaWV3UmVmOiBFbWJlZGRlZFZpZXdSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIEBJbnB1dCgpIG56U3RyaW5nVGVtcGxhdGVPdXRsZXRDb250ZXh0OiBhbnkgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgQElucHV0KClcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgc2V0IG56U3RyaW5nVGVtcGxhdGVPdXRsZXQodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcclxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XHJcbiAgICAgIHRoaXMuaXNUZW1wbGF0ZSA9IHRydWU7XHJcbiAgICAgIHRoaXMuaW5wdXRUZW1wbGF0ZSA9IHZhbHVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pc1RlbXBsYXRlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZWNyZWF0ZVZpZXcoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuaXNUZW1wbGF0ZSkge1xyXG4gICAgICAvKiogdXNlIGRlZmF1bHQgdGVtcGxhdGUgd2hlbiBpbnB1dCBpcyBzdHJpbmcgKiovXHJcbiAgICAgIGlmICghdGhpcy5kZWZhdWx0Vmlld1JlZikge1xyXG4gICAgICAgIGlmICh0aGlzLmRlZmF1bHRUZW1wbGF0ZSkge1xyXG4gICAgICAgICAgdGhpcy5kZWZhdWx0Vmlld1JlZiA9IHRoaXMudmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcoXHJcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdFRlbXBsYXRlLFxyXG4gICAgICAgICAgICB0aGlzLm56U3RyaW5nVGVtcGxhdGVPdXRsZXRDb250ZXh0XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLyoqIHVzZSBpbnB1dCB0ZW1wbGF0ZSB3aGVuIGlucHV0IGlzIHRlbXBsYXRlUmVmICoqL1xyXG4gICAgICBpZiAoIXRoaXMuaW5wdXRWaWV3UmVmKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5wdXRUZW1wbGF0ZSkge1xyXG4gICAgICAgICAgdGhpcy5pbnB1dFZpZXdSZWYgPSB0aGlzLnZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KFxyXG4gICAgICAgICAgICB0aGlzLmlucHV0VGVtcGxhdGUsXHJcbiAgICAgICAgICAgIHRoaXMubnpTdHJpbmdUZW1wbGF0ZU91dGxldENvbnRleHRcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgcHJpdmF0ZSBnZXRUeXBlKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KTogJ3RlbXBsYXRlJyB8ICdzdHJpbmcnIHtcclxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XHJcbiAgICAgIHJldHVybiAndGVtcGxhdGUnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuICdzdHJpbmcnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzaG91bGRSZWNyZWF0ZVZpZXcoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgeyBuelN0cmluZ1RlbXBsYXRlT3V0bGV0Q29udGV4dCwgbnpTdHJpbmdUZW1wbGF0ZU91dGxldCB9ID0gY2hhbmdlcztcclxuICAgIGxldCBzaG91bGRPdXRsZXRSZWNyZWF0ZSA9IGZhbHNlO1xyXG4gICAgaWYgKG56U3RyaW5nVGVtcGxhdGVPdXRsZXQpIHtcclxuICAgICAgaWYgKG56U3RyaW5nVGVtcGxhdGVPdXRsZXQuZmlyc3RDaGFuZ2UpIHtcclxuICAgICAgICBzaG91bGRPdXRsZXRSZWNyZWF0ZSA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgcHJldmlvdXNPdXRsZXRUeXBlID0gdGhpcy5nZXRUeXBlKG56U3RyaW5nVGVtcGxhdGVPdXRsZXQucHJldmlvdXNWYWx1ZSk7XHJcbiAgICAgICAgY29uc3QgY3VycmVudE91dGxldFR5cGUgPSB0aGlzLmdldFR5cGUobnpTdHJpbmdUZW1wbGF0ZU91dGxldC5jdXJyZW50VmFsdWUpO1xyXG4gICAgICAgIHNob3VsZE91dGxldFJlY3JlYXRlID0gIShwcmV2aW91c091dGxldFR5cGUgPT09ICdzdHJpbmcnICYmIGN1cnJlbnRPdXRsZXRUeXBlID09PSAnc3RyaW5nJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHNob3VsZENvbnRleHRSZWNyZWF0ZSA9XHJcbiAgICAgIG56U3RyaW5nVGVtcGxhdGVPdXRsZXRDb250ZXh0ICYmIHRoaXMuaGFzQ29udGV4dFNoYXBlQ2hhbmdlZChuelN0cmluZ1RlbXBsYXRlT3V0bGV0Q29udGV4dCk7XHJcbiAgICByZXR1cm4gc2hvdWxkQ29udGV4dFJlY3JlYXRlIHx8IHNob3VsZE91dGxldFJlY3JlYXRlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYXNDb250ZXh0U2hhcGVDaGFuZ2VkKGN0eENoYW5nZTogU2ltcGxlQ2hhbmdlKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBwcmV2Q3R4S2V5cyA9IE9iamVjdC5rZXlzKGN0eENoYW5nZS5wcmV2aW91c1ZhbHVlIHx8IHt9KTtcclxuICAgIGNvbnN0IGN1cnJDdHhLZXlzID0gT2JqZWN0LmtleXMoY3R4Q2hhbmdlLmN1cnJlbnRWYWx1ZSB8fCB7fSk7XHJcblxyXG4gICAgaWYgKHByZXZDdHhLZXlzLmxlbmd0aCA9PT0gY3VyckN0eEtleXMubGVuZ3RoKSB7XHJcbiAgICAgIGZvciAoY29uc3QgcHJvcE5hbWUgb2YgY3VyckN0eEtleXMpIHtcclxuICAgICAgICBpZiAocHJldkN0eEtleXMuaW5kZXhPZihwcm9wTmFtZSkgPT09IC0xKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgcHJpdmF0ZSB1cGRhdGVFeGlzdGluZ0NvbnRleHQoY3R4OiBhbnkpOiB2b2lkIHtcclxuICAgIGZvciAoY29uc3QgcHJvcE5hbWUgb2YgT2JqZWN0LmtleXMoY3R4KSkge1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgICAgICh0aGlzLmlucHV0Vmlld1JlZiEuY29udGV4dCBhcyBhbnkpW3Byb3BOYW1lXSA9IHRoaXMubnpTdHJpbmdUZW1wbGF0ZU91dGxldENvbnRleHRbcHJvcE5hbWVdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIGRlZmF1bHRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD4pIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGNvbnN0IHJlY3JlYXRlVmlldyA9IHRoaXMuc2hvdWxkUmVjcmVhdGVWaWV3KGNoYW5nZXMpO1xyXG4gICAgaWYgKHJlY3JlYXRlVmlldykge1xyXG4gICAgICBpZiAodGhpcy52aWV3Q29udGFpbmVyKSB7XHJcbiAgICAgICAgdGhpcy52aWV3Q29udGFpbmVyLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0Vmlld1JlZiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5pbnB1dFZpZXdSZWYgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucmVjcmVhdGVWaWV3KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5pbnB1dFZpZXdSZWYgJiYgdGhpcy5uelN0cmluZ1RlbXBsYXRlT3V0bGV0Q29udGV4dCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlRXhpc3RpbmdDb250ZXh0KHRoaXMubnpTdHJpbmdUZW1wbGF0ZU91dGxldENvbnRleHQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==
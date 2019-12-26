/**
 * @fileoverview added by tsickle
 * Generated from: string_template_outlet.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
var NzStringTemplateOutletDirective = /** @class */ (function () {
    function NzStringTemplateOutletDirective(viewContainer, defaultTemplate) {
        this.viewContainer = viewContainer;
        this.defaultTemplate = defaultTemplate;
        // tslint:disable-next-line:no-any
        this.inputTemplate = null;
        this.inputViewRef = null;
        this.defaultViewRef = null;
        // tslint:disable-next-line:no-any
        this.nzStringTemplateOutletContext = null;
    }
    Object.defineProperty(NzStringTemplateOutletDirective.prototype, "nzStringTemplateOutlet", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this.isTemplate = true;
                this.inputTemplate = value;
            }
            else {
                this.isTemplate = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzStringTemplateOutletDirective.prototype.recreateView = /**
     * @return {?}
     */
    function () {
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
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    NzStringTemplateOutletDirective.prototype.getType = 
    // tslint:disable-next-line:no-any
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value instanceof TemplateRef) {
            return 'template';
        }
        else {
            return 'string';
        }
    };
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    NzStringTemplateOutletDirective.prototype.shouldRecreateView = /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzStringTemplateOutletContext = changes.nzStringTemplateOutletContext, nzStringTemplateOutlet = changes.nzStringTemplateOutlet;
        /** @type {?} */
        var shouldOutletRecreate = false;
        if (nzStringTemplateOutlet) {
            if (nzStringTemplateOutlet.firstChange) {
                shouldOutletRecreate = true;
            }
            else {
                /** @type {?} */
                var previousOutletType = this.getType(nzStringTemplateOutlet.previousValue);
                /** @type {?} */
                var currentOutletType = this.getType(nzStringTemplateOutlet.currentValue);
                shouldOutletRecreate = !(previousOutletType === 'string' && currentOutletType === 'string');
            }
        }
        /** @type {?} */
        var shouldContextRecreate = nzStringTemplateOutletContext && this.hasContextShapeChanged(nzStringTemplateOutletContext);
        return shouldContextRecreate || shouldOutletRecreate;
    };
    /**
     * @private
     * @param {?} ctxChange
     * @return {?}
     */
    NzStringTemplateOutletDirective.prototype.hasContextShapeChanged = /**
     * @private
     * @param {?} ctxChange
     * @return {?}
     */
    function (ctxChange) {
        var e_1, _a;
        /** @type {?} */
        var prevCtxKeys = Object.keys(ctxChange.previousValue || {});
        /** @type {?} */
        var currCtxKeys = Object.keys(ctxChange.currentValue || {});
        if (prevCtxKeys.length === currCtxKeys.length) {
            try {
                for (var currCtxKeys_1 = tslib_1.__values(currCtxKeys), currCtxKeys_1_1 = currCtxKeys_1.next(); !currCtxKeys_1_1.done; currCtxKeys_1_1 = currCtxKeys_1.next()) {
                    var propName = currCtxKeys_1_1.value;
                    if (prevCtxKeys.indexOf(propName) === -1) {
                        return true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (currCtxKeys_1_1 && !currCtxKeys_1_1.done && (_a = currCtxKeys_1.return)) _a.call(currCtxKeys_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return false;
        }
        else {
            return true;
        }
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @private
     * @param {?} ctx
     * @return {?}
     */
    NzStringTemplateOutletDirective.prototype.updateExistingContext = 
    // tslint:disable-next-line:no-any
    /**
     * @private
     * @param {?} ctx
     * @return {?}
     */
    function (ctx) {
        var e_2, _a;
        try {
            for (var _b = tslib_1.__values(Object.keys(ctx)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var propName = _c.value;
                // tslint:disable-next-line:no-any
                ((/** @type {?} */ ((/** @type {?} */ (this.inputViewRef)).context)))[propName] = this.nzStringTemplateOutletContext[propName];
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzStringTemplateOutletDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var recreateView = this.shouldRecreateView(changes);
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
    };
    NzStringTemplateOutletDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nzStringTemplateOutlet]',
                    exportAs: 'nzStringTemplateOutlet'
                },] }
    ];
    /** @nocollapse */
    NzStringTemplateOutletDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: TemplateRef }
    ]; };
    NzStringTemplateOutletDirective.propDecorators = {
        nzStringTemplateOutletContext: [{ type: Input }],
        nzStringTemplateOutlet: [{ type: Input }]
    };
    return NzStringTemplateOutletDirective;
}());
export { NzStringTemplateOutletDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nX3RlbXBsYXRlX291dGxldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS9hZGRvbi8iLCJzb3VyY2VzIjpbInN0cmluZ190ZW1wbGF0ZV9vdXRsZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUlMLFdBQVcsRUFDWCxnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFFdkI7SUFtR0UseUNBQW9CLGFBQStCLEVBQVUsZUFBa0M7UUFBM0Usa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQW1COztRQTVGdkYsa0JBQWEsR0FBNEIsSUFBSSxDQUFDO1FBQzlDLGlCQUFZLEdBQWlDLElBQUksQ0FBQztRQUNsRCxtQkFBYyxHQUFpQyxJQUFJLENBQUM7O1FBR25ELGtDQUE2QixHQUFlLElBQUksQ0FBQztJQXVGd0MsQ0FBQztJQXJGbkcsc0JBRUksbUVBQXNCOzs7OztRQUYxQixVQUUyQixLQUFnQztZQUN6RCxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2dCQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQzthQUM1QjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQzthQUN6QjtRQUNILENBQUM7OztPQUFBOzs7O0lBRUQsc0RBQVk7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsaURBQWlEO1lBQ2pELElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO2dCQUN4QixJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7b0JBQ3hCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FDekQsSUFBSSxDQUFDLGVBQWUsRUFDcEIsSUFB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SSxZQUFZLEVBQUU7WUFDaEIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUMzQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztnQkFDM0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7YUFDMUI7WUFDRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckI7YUFBTTtZQUNMLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsNkJBQTZCLEVBQUU7Z0JBQzNELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBQzthQUNoRTtTQUNGO0lBQ0gsQ0FBQzs7Z0JBbkhGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyxRQUFRLEVBQUUsd0JBQXdCO2lCQUNuQzs7OztnQkFOQyxnQkFBZ0I7Z0JBRGhCLFdBQVc7OztnREFnQlYsS0FBSzt5Q0FFTCxLQUFLOztJQXNHUixzQ0FBQztDQUFBLEFBcEhELElBb0hDO1NBaEhZLCtCQUErQjs7Ozs7O0lBQzFDLHFEQUE0Qjs7Ozs7SUFFNUIsd0RBQXNEOzs7OztJQUN0RCx1REFBMEQ7Ozs7O0lBQzFELHlEQUE0RDs7SUFHNUQsd0VBQTBEOzs7OztJQXVGOUMsd0RBQXVDOzs7OztJQUFFLDBEQUEwQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsXHJcbiAgRW1iZWRkZWRWaWV3UmVmLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBTaW1wbGVDaGFuZ2UsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tuelN0cmluZ1RlbXBsYXRlT3V0bGV0XScsXHJcbiAgZXhwb3J0QXM6ICduelN0cmluZ1RlbXBsYXRlT3V0bGV0J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpTdHJpbmdUZW1wbGF0ZU91dGxldERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgcHJpdmF0ZSBpc1RlbXBsYXRlOiBib29sZWFuO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBwcml2YXRlIGlucHV0VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gfCBudWxsID0gbnVsbDtcclxuICBwcml2YXRlIGlucHV0Vmlld1JlZjogRW1iZWRkZWRWaWV3UmVmPHZvaWQ+IHwgbnVsbCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBkZWZhdWx0Vmlld1JlZjogRW1iZWRkZWRWaWV3UmVmPHZvaWQ+IHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBASW5wdXQoKSBuelN0cmluZ1RlbXBsYXRlT3V0bGV0Q29udGV4dDogYW55IHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHNldCBuelN0cmluZ1RlbXBsYXRlT3V0bGV0KHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XHJcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xyXG4gICAgICB0aGlzLmlzVGVtcGxhdGUgPSB0cnVlO1xyXG4gICAgICB0aGlzLmlucHV0VGVtcGxhdGUgPSB2YWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaXNUZW1wbGF0ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVjcmVhdGVWaWV3KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmlzVGVtcGxhdGUpIHtcclxuICAgICAgLyoqIHVzZSBkZWZhdWx0IHRlbXBsYXRlIHdoZW4gaW5wdXQgaXMgc3RyaW5nICoqL1xyXG4gICAgICBpZiAoIXRoaXMuZGVmYXVsdFZpZXdSZWYpIHtcclxuICAgICAgICBpZiAodGhpcy5kZWZhdWx0VGVtcGxhdGUpIHtcclxuICAgICAgICAgIHRoaXMuZGVmYXVsdFZpZXdSZWYgPSB0aGlzLnZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KFxyXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRUZW1wbGF0ZSxcclxuICAgICAgICAgICAgdGhpcy5uelN0cmluZ1RlbXBsYXRlT3V0bGV0Q29udGV4dFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8qKiB1c2UgaW5wdXQgdGVtcGxhdGUgd2hlbiBpbnB1dCBpcyB0ZW1wbGF0ZVJlZiAqKi9cclxuICAgICAgaWYgKCF0aGlzLmlucHV0Vmlld1JlZikge1xyXG4gICAgICAgIGlmICh0aGlzLmlucHV0VGVtcGxhdGUpIHtcclxuICAgICAgICAgIHRoaXMuaW5wdXRWaWV3UmVmID0gdGhpcy52aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyhcclxuICAgICAgICAgICAgdGhpcy5pbnB1dFRlbXBsYXRlLFxyXG4gICAgICAgICAgICB0aGlzLm56U3RyaW5nVGVtcGxhdGVPdXRsZXRDb250ZXh0XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHByaXZhdGUgZ2V0VHlwZSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pik6ICd0ZW1wbGF0ZScgfCAnc3RyaW5nJyB7XHJcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xyXG4gICAgICByZXR1cm4gJ3RlbXBsYXRlJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAnc3RyaW5nJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2hvdWxkUmVjcmVhdGVWaWV3KGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHsgbnpTdHJpbmdUZW1wbGF0ZU91dGxldENvbnRleHQsIG56U3RyaW5nVGVtcGxhdGVPdXRsZXQgfSA9IGNoYW5nZXM7XHJcbiAgICBsZXQgc2hvdWxkT3V0bGV0UmVjcmVhdGUgPSBmYWxzZTtcclxuICAgIGlmIChuelN0cmluZ1RlbXBsYXRlT3V0bGV0KSB7XHJcbiAgICAgIGlmIChuelN0cmluZ1RlbXBsYXRlT3V0bGV0LmZpcnN0Q2hhbmdlKSB7XHJcbiAgICAgICAgc2hvdWxkT3V0bGV0UmVjcmVhdGUgPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHByZXZpb3VzT3V0bGV0VHlwZSA9IHRoaXMuZ2V0VHlwZShuelN0cmluZ1RlbXBsYXRlT3V0bGV0LnByZXZpb3VzVmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRPdXRsZXRUeXBlID0gdGhpcy5nZXRUeXBlKG56U3RyaW5nVGVtcGxhdGVPdXRsZXQuY3VycmVudFZhbHVlKTtcclxuICAgICAgICBzaG91bGRPdXRsZXRSZWNyZWF0ZSA9ICEocHJldmlvdXNPdXRsZXRUeXBlID09PSAnc3RyaW5nJyAmJiBjdXJyZW50T3V0bGV0VHlwZSA9PT0gJ3N0cmluZycpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBzaG91bGRDb250ZXh0UmVjcmVhdGUgPVxyXG4gICAgICBuelN0cmluZ1RlbXBsYXRlT3V0bGV0Q29udGV4dCAmJiB0aGlzLmhhc0NvbnRleHRTaGFwZUNoYW5nZWQobnpTdHJpbmdUZW1wbGF0ZU91dGxldENvbnRleHQpO1xyXG4gICAgcmV0dXJuIHNob3VsZENvbnRleHRSZWNyZWF0ZSB8fCBzaG91bGRPdXRsZXRSZWNyZWF0ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFzQ29udGV4dFNoYXBlQ2hhbmdlZChjdHhDaGFuZ2U6IFNpbXBsZUNoYW5nZSk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgcHJldkN0eEtleXMgPSBPYmplY3Qua2V5cyhjdHhDaGFuZ2UucHJldmlvdXNWYWx1ZSB8fCB7fSk7XHJcbiAgICBjb25zdCBjdXJyQ3R4S2V5cyA9IE9iamVjdC5rZXlzKGN0eENoYW5nZS5jdXJyZW50VmFsdWUgfHwge30pO1xyXG5cclxuICAgIGlmIChwcmV2Q3R4S2V5cy5sZW5ndGggPT09IGN1cnJDdHhLZXlzLmxlbmd0aCkge1xyXG4gICAgICBmb3IgKGNvbnN0IHByb3BOYW1lIG9mIGN1cnJDdHhLZXlzKSB7XHJcbiAgICAgICAgaWYgKHByZXZDdHhLZXlzLmluZGV4T2YocHJvcE5hbWUpID09PSAtMSkge1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHByaXZhdGUgdXBkYXRlRXhpc3RpbmdDb250ZXh0KGN0eDogYW55KTogdm9pZCB7XHJcbiAgICBmb3IgKGNvbnN0IHByb3BOYW1lIG9mIE9iamVjdC5rZXlzKGN0eCkpIHtcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gICAgICAodGhpcy5pbnB1dFZpZXdSZWYhLmNvbnRleHQgYXMgYW55KVtwcm9wTmFtZV0gPSB0aGlzLm56U3RyaW5nVGVtcGxhdGVPdXRsZXRDb250ZXh0W3Byb3BOYW1lXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSBkZWZhdWx0VGVtcGxhdGU6IFRlbXBsYXRlUmVmPHZvaWQ+KSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBjb25zdCByZWNyZWF0ZVZpZXcgPSB0aGlzLnNob3VsZFJlY3JlYXRlVmlldyhjaGFuZ2VzKTtcclxuICAgIGlmIChyZWNyZWF0ZVZpZXcpIHtcclxuICAgICAgaWYgKHRoaXMudmlld0NvbnRhaW5lcikge1xyXG4gICAgICAgIHRoaXMudmlld0NvbnRhaW5lci5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMuZGVmYXVsdFZpZXdSZWYgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaW5wdXRWaWV3UmVmID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnJlY3JlYXRlVmlldygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMuaW5wdXRWaWV3UmVmICYmIHRoaXMubnpTdHJpbmdUZW1wbGF0ZU91dGxldENvbnRleHQpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUV4aXN0aW5nQ29udGV4dCh0aGlzLm56U3RyaW5nVGVtcGxhdGVPdXRsZXRDb250ZXh0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=
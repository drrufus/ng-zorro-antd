/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import * as i0 from "@angular/core";
export class NzStringTemplateOutletDirective {
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
    set nzStringTemplateOutlet(value) {
        if (value instanceof TemplateRef) {
            this.isTemplate = true;
            this.inputTemplate = value;
        }
        else {
            this.isTemplate = false;
        }
    }
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
    getType(value) {
        if (value instanceof TemplateRef) {
            return 'template';
        }
        else {
            return 'string';
        }
    }
    shouldRecreateView(changes) {
        const { nzStringTemplateOutletContext, nzStringTemplateOutlet } = changes;
        let shouldOutletRecreate = false;
        if (nzStringTemplateOutlet) {
            if (nzStringTemplateOutlet.firstChange) {
                shouldOutletRecreate = true;
            }
            else {
                const previousOutletType = this.getType(nzStringTemplateOutlet.previousValue);
                const currentOutletType = this.getType(nzStringTemplateOutlet.currentValue);
                shouldOutletRecreate = !(previousOutletType === 'string' && currentOutletType === 'string');
            }
        }
        const shouldContextRecreate = nzStringTemplateOutletContext && this.hasContextShapeChanged(nzStringTemplateOutletContext);
        return shouldContextRecreate || shouldOutletRecreate;
    }
    hasContextShapeChanged(ctxChange) {
        const prevCtxKeys = Object.keys(ctxChange.previousValue || {});
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
    updateExistingContext(ctx) {
        for (const propName of Object.keys(ctx)) {
            // tslint:disable-next-line:no-any
            this.inputViewRef.context[propName] = this.nzStringTemplateOutletContext[propName];
        }
    }
    ngOnChanges(changes) {
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
/** @nocollapse */ NzStringTemplateOutletDirective.ɵfac = function NzStringTemplateOutletDirective_Factory(t) { return new (t || NzStringTemplateOutletDirective)(i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.TemplateRef)); };
/** @nocollapse */ NzStringTemplateOutletDirective.ɵdir = i0.ɵɵdefineDirective({ type: NzStringTemplateOutletDirective, selectors: [["", "nzStringTemplateOutlet", ""]], inputs: { nzStringTemplateOutletContext: "nzStringTemplateOutletContext", nzStringTemplateOutlet: "nzStringTemplateOutlet" }, exportAs: ["nzStringTemplateOutlet"], features: [i0.ɵɵNgOnChangesFeature()] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzStringTemplateOutletDirective, [{
        type: Directive,
        args: [{
                selector: '[nzStringTemplateOutlet]',
                exportAs: 'nzStringTemplateOutlet'
            }]
    }], function () { return [{ type: i0.ViewContainerRef }, { type: i0.TemplateRef }]; }, { nzStringTemplateOutletContext: [{
            type: Input
        }], nzStringTemplateOutlet: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nX3RlbXBsYXRlX291dGxldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS9hZGRvbi8iLCJzb3VyY2VzIjpbInN0cmluZ190ZW1wbGF0ZV9vdXRsZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLFNBQVMsRUFBbUIsS0FBSyxFQUEwQyxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTXpJLE1BQU0sT0FBTywrQkFBK0I7SUF3RjFDLFlBQW9CLGFBQStCLEVBQVUsZUFBa0M7UUFBM0Usa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQW1CO1FBdEYvRixrQ0FBa0M7UUFDMUIsa0JBQWEsR0FBNEIsSUFBSSxDQUFDO1FBQzlDLGlCQUFZLEdBQWlDLElBQUksQ0FBQztRQUNsRCxtQkFBYyxHQUFpQyxJQUFJLENBQUM7UUFFNUQsa0NBQWtDO1FBQ3pCLGtDQUE2QixHQUFlLElBQUksQ0FBQztJQWdGd0MsQ0FBQztJQTlFbkcsSUFFSSxzQkFBc0IsQ0FBQyxLQUFnQztRQUN6RCxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7U0FDNUI7YUFBTTtZQUNMLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixpREFBaUQ7WUFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQ3hCLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtvQkFDeEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxlQUFl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QUM7Z0JBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2FBQzFCO1lBQ0QsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO2FBQU07WUFDTCxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLDZCQUE2QixFQUFFO2dCQUMzRCxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLENBQUM7YUFDaEU7U0FDRjtJQUNILENBQUM7OzhHQXhHVSwrQkFBK0I7b0VBQS9CLCtCQUErQjtrREFBL0IsK0JBQStCO2NBSjNDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxRQUFRLEVBQUUsd0JBQXdCO2FBQ25DOztrQkFTRSxLQUFLOztrQkFFTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVtYmVkZGVkVmlld1JlZiwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlLCBTaW1wbGVDaGFuZ2VzLCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbnpTdHJpbmdUZW1wbGF0ZU91dGxldF0nLFxyXG4gIGV4cG9ydEFzOiAnbnpTdHJpbmdUZW1wbGF0ZU91dGxldCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE56U3RyaW5nVGVtcGxhdGVPdXRsZXREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIHByaXZhdGUgaXNUZW1wbGF0ZTogYm9vbGVhbjtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgcHJpdmF0ZSBpbnB1dFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+IHwgbnVsbCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBpbnB1dFZpZXdSZWY6IEVtYmVkZGVkVmlld1JlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xyXG4gIHByaXZhdGUgZGVmYXVsdFZpZXdSZWY6IEVtYmVkZGVkVmlld1JlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgQElucHV0KCkgbnpTdHJpbmdUZW1wbGF0ZU91dGxldENvbnRleHQ6IGFueSB8IG51bGwgPSBudWxsO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBzZXQgbnpTdHJpbmdUZW1wbGF0ZU91dGxldCh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xyXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcclxuICAgICAgdGhpcy5pc1RlbXBsYXRlID0gdHJ1ZTtcclxuICAgICAgdGhpcy5pbnB1dFRlbXBsYXRlID0gdmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmlzVGVtcGxhdGUgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlY3JlYXRlVmlldygpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5pc1RlbXBsYXRlKSB7XHJcbiAgICAgIC8qKiB1c2UgZGVmYXVsdCB0ZW1wbGF0ZSB3aGVuIGlucHV0IGlzIHN0cmluZyAqKi9cclxuICAgICAgaWYgKCF0aGlzLmRlZmF1bHRWaWV3UmVmKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdFRlbXBsYXRlKSB7XHJcbiAgICAgICAgICB0aGlzLmRlZmF1bHRWaWV3UmVmID0gdGhpcy52aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLmRlZmF1bHRUZW1wbGF0ZSwgdGhpcy5uelN0cmluZ1RlbXBsYXRlT3V0bGV0Q29udGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvKiogdXNlIGlucHV0IHRlbXBsYXRlIHdoZW4gaW5wdXQgaXMgdGVtcGxhdGVSZWYgKiovXHJcbiAgICAgIGlmICghdGhpcy5pbnB1dFZpZXdSZWYpIHtcclxuICAgICAgICBpZiAodGhpcy5pbnB1dFRlbXBsYXRlKSB7XHJcbiAgICAgICAgICB0aGlzLmlucHV0Vmlld1JlZiA9IHRoaXMudmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy5pbnB1dFRlbXBsYXRlLCB0aGlzLm56U3RyaW5nVGVtcGxhdGVPdXRsZXRDb250ZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBwcml2YXRlIGdldFR5cGUodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pOiAndGVtcGxhdGUnIHwgJ3N0cmluZycge1xyXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcclxuICAgICAgcmV0dXJuICd0ZW1wbGF0ZSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gJ3N0cmluZyc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNob3VsZFJlY3JlYXRlVmlldyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCB7IG56U3RyaW5nVGVtcGxhdGVPdXRsZXRDb250ZXh0LCBuelN0cmluZ1RlbXBsYXRlT3V0bGV0IH0gPSBjaGFuZ2VzO1xyXG4gICAgbGV0IHNob3VsZE91dGxldFJlY3JlYXRlID0gZmFsc2U7XHJcbiAgICBpZiAobnpTdHJpbmdUZW1wbGF0ZU91dGxldCkge1xyXG4gICAgICBpZiAobnpTdHJpbmdUZW1wbGF0ZU91dGxldC5maXJzdENoYW5nZSkge1xyXG4gICAgICAgIHNob3VsZE91dGxldFJlY3JlYXRlID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBwcmV2aW91c091dGxldFR5cGUgPSB0aGlzLmdldFR5cGUobnpTdHJpbmdUZW1wbGF0ZU91dGxldC5wcmV2aW91c1ZhbHVlKTtcclxuICAgICAgICBjb25zdCBjdXJyZW50T3V0bGV0VHlwZSA9IHRoaXMuZ2V0VHlwZShuelN0cmluZ1RlbXBsYXRlT3V0bGV0LmN1cnJlbnRWYWx1ZSk7XHJcbiAgICAgICAgc2hvdWxkT3V0bGV0UmVjcmVhdGUgPSAhKHByZXZpb3VzT3V0bGV0VHlwZSA9PT0gJ3N0cmluZycgJiYgY3VycmVudE91dGxldFR5cGUgPT09ICdzdHJpbmcnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc2hvdWxkQ29udGV4dFJlY3JlYXRlID0gbnpTdHJpbmdUZW1wbGF0ZU91dGxldENvbnRleHQgJiYgdGhpcy5oYXNDb250ZXh0U2hhcGVDaGFuZ2VkKG56U3RyaW5nVGVtcGxhdGVPdXRsZXRDb250ZXh0KTtcclxuICAgIHJldHVybiBzaG91bGRDb250ZXh0UmVjcmVhdGUgfHwgc2hvdWxkT3V0bGV0UmVjcmVhdGU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhc0NvbnRleHRTaGFwZUNoYW5nZWQoY3R4Q2hhbmdlOiBTaW1wbGVDaGFuZ2UpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHByZXZDdHhLZXlzID0gT2JqZWN0LmtleXMoY3R4Q2hhbmdlLnByZXZpb3VzVmFsdWUgfHwge30pO1xyXG4gICAgY29uc3QgY3VyckN0eEtleXMgPSBPYmplY3Qua2V5cyhjdHhDaGFuZ2UuY3VycmVudFZhbHVlIHx8IHt9KTtcclxuXHJcbiAgICBpZiAocHJldkN0eEtleXMubGVuZ3RoID09PSBjdXJyQ3R4S2V5cy5sZW5ndGgpIHtcclxuICAgICAgZm9yIChjb25zdCBwcm9wTmFtZSBvZiBjdXJyQ3R4S2V5cykge1xyXG4gICAgICAgIGlmIChwcmV2Q3R4S2V5cy5pbmRleE9mKHByb3BOYW1lKSA9PT0gLTEpIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBwcml2YXRlIHVwZGF0ZUV4aXN0aW5nQ29udGV4dChjdHg6IGFueSk6IHZvaWQge1xyXG4gICAgZm9yIChjb25zdCBwcm9wTmFtZSBvZiBPYmplY3Qua2V5cyhjdHgpKSB7XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICAgICAgKHRoaXMuaW5wdXRWaWV3UmVmIS5jb250ZXh0IGFzIGFueSlbcHJvcE5hbWVdID0gdGhpcy5uelN0cmluZ1RlbXBsYXRlT3V0bGV0Q29udGV4dFtwcm9wTmFtZV07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgZGVmYXVsdFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx2b2lkPikge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc3QgcmVjcmVhdGVWaWV3ID0gdGhpcy5zaG91bGRSZWNyZWF0ZVZpZXcoY2hhbmdlcyk7XHJcbiAgICBpZiAocmVjcmVhdGVWaWV3KSB7XHJcbiAgICAgIGlmICh0aGlzLnZpZXdDb250YWluZXIpIHtcclxuICAgICAgICB0aGlzLnZpZXdDb250YWluZXIuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLmRlZmF1bHRWaWV3UmVmID0gbnVsbDtcclxuICAgICAgICB0aGlzLmlucHV0Vmlld1JlZiA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5yZWNyZWF0ZVZpZXcoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLmlucHV0Vmlld1JlZiAmJiB0aGlzLm56U3RyaW5nVGVtcGxhdGVPdXRsZXRDb250ZXh0KSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVFeGlzdGluZ0NvbnRleHQodGhpcy5uelN0cmluZ1RlbXBsYXRlT3V0bGV0Q29udGV4dCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19
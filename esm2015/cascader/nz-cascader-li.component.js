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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'ng-zorro-antd/icon';
import * as ɵngcc3 from 'ng-zorro-antd/core';

const _c0 = ["nz-cascader-option", ""];
function NzCascaderOptionComponent_ng_container_0_ng_template_1_Template(rf, ctx) { }
const _c1 = function (a0, a1) { return { $implicit: a0, index: a1 }; };
function NzCascaderOptionComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzCascaderOptionComponent_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 3);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.optionTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(2, _c1, ctx_r0.option, ctx_r0.columnIndex));
} }
function NzCascaderOptionComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 4);
    ɵngcc0.ɵɵpipe(1, "nzHighlight");
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("innerHTML", ɵngcc0.ɵɵpipeBind4(1, 1, ctx_r2.optionLabel, ctx_r2.highlightText, "g", "ant-cascader-menu-item-keyword"), ɵngcc0.ɵɵsanitizeHtml);
} }
function NzCascaderOptionComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 5);
    ɵngcc0.ɵɵelement(1, "i", 6);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzType", ctx_r3.option.loading ? "loading" : "right");
} }
export class NzCascaderOptionComponent {
    /**
     * @param {?} cdr
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(cdr, elementRef, renderer) {
        this.cdr = cdr;
        this.optionTemplate = null;
        this.activated = false;
        this.nzLabelProperty = 'label';
        renderer.addClass(elementRef.nativeElement, 'ant-cascader-menu-item');
    }
    /**
     * @return {?}
     */
    get optionLabel() {
        return this.option[this.nzLabelProperty];
    }
    /**
     * @return {?}
     */
    markForCheck() {
        this.cdr.markForCheck();
    }
}
NzCascaderOptionComponent.ɵfac = function NzCascaderOptionComponent_Factory(t) { return new (t || NzCascaderOptionComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2)); };
NzCascaderOptionComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzCascaderOptionComponent, selectors: [["", "nz-cascader-option", ""]], hostVars: 7, hostBindings: function NzCascaderOptionComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵattribute("title", ctx.option.title || ctx.optionLabel);
        ɵngcc0.ɵɵclassProp("ant-cascader-menu-item-active", ctx.activated)("ant-cascader-menu-item-expand", !ctx.option.isLeaf)("ant-cascader-menu-item-disabled", ctx.option.disabled);
    } }, inputs: { optionTemplate: "optionTemplate", activated: "activated", nzLabelProperty: "nzLabelProperty", option: "option", highlightText: "highlightText", columnIndex: "columnIndex" }, exportAs: ["nzCascaderOption"], attrs: _c0, decls: 4, vars: 3, consts: [[4, "ngIf", "ngIfElse"], ["defaultOptionTemplate", ""], ["class", "ant-cascader-menu-item-expand-icon", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "innerHTML"], [1, "ant-cascader-menu-item-expand-icon"], ["nz-icon", "", 3, "nzType"]], template: function NzCascaderOptionComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzCascaderOptionComponent_ng_container_0_Template, 2, 5, "ng-container", 0);
        ɵngcc0.ɵɵtemplate(1, NzCascaderOptionComponent_ng_template_1_Template, 2, 6, "ng-template", null, 1, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(3, NzCascaderOptionComponent_span_3_Template, 2, 1, "span", 2);
    } if (rf & 2) {
        const _r1 = ɵngcc0.ɵɵreference(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.optionTemplate)("ngIfElse", _r1);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.option.isLeaf || (ctx.option.children == null ? null : ctx.option.children.length) || ctx.option.loading);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet, ɵngcc2.NzIconDirective], pipes: [ɵngcc3.NzHighlightPipe], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NzCascaderOptionComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: Renderer2 }
];
NzCascaderOptionComponent.propDecorators = {
    optionTemplate: [{ type: Input }],
    option: [{ type: Input }],
    activated: [{ type: Input }],
    highlightText: [{ type: Input }],
    nzLabelProperty: [{ type: Input }],
    columnIndex: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCascaderOptionComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: '[nz-cascader-option]',
                exportAs: 'nzCascaderOption',
                template: "<ng-container *ngIf=\"optionTemplate; else defaultOptionTemplate\">\r\n  <ng-template [ngTemplateOutlet]=\"optionTemplate\"\r\n               [ngTemplateOutletContext]=\"{ $implicit: option, index: columnIndex }\"></ng-template>\r\n</ng-container>\r\n<ng-template #defaultOptionTemplate>\r\n  <span [innerHTML]=\"optionLabel | nzHighlight: highlightText: 'g': 'ant-cascader-menu-item-keyword'\"></span>\r\n</ng-template>\r\n<span *ngIf=\"!option.isLeaf || option.children?.length || option.loading\"\r\n      class=\"ant-cascader-menu-item-expand-icon\">\r\n  <i nz-icon\r\n     [nzType]=\"option.loading ? 'loading' : 'right'\"></i>\r\n</span>\r\n",
                host: {
                    '[attr.title]': 'option.title || optionLabel',
                    '[class.ant-cascader-menu-item-active]': 'activated',
                    '[class.ant-cascader-menu-item-expand]': '!option.isLeaf',
                    '[class.ant-cascader-menu-item-disabled]': 'option.disabled'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }]; }, { optionTemplate: [{
            type: Input
        }], activated: [{
            type: Input
        }], nzLabelProperty: [{
            type: Input
        }], option: [{
            type: Input
        }], highlightText: [{
            type: Input
        }], columnIndex: [{
            type: Input
        }] }); })();
if (false) {
    /** @type {?} */
    NzCascaderOptionComponent.prototype.optionTemplate;
    /** @type {?} */
    NzCascaderOptionComponent.prototype.option;
    /** @type {?} */
    NzCascaderOptionComponent.prototype.activated;
    /** @type {?} */
    NzCascaderOptionComponent.prototype.highlightText;
    /** @type {?} */
    NzCascaderOptionComponent.prototype.nzLabelProperty;
    /** @type {?} */
    NzCascaderOptionComponent.prototype.columnIndex;
    /**
     * @type {?}
     * @private
     */
    NzCascaderOptionComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FzY2FkZXItbGkuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJuZzovbmctem9ycm8tYW50ZC9jYXNjYWRlci9uei1jYXNjYWRlci1saS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxTQUFTLEVBRVQsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJ2QixNQUFNLE9BQU8seUJBQXlCOzs7Ozs7SUFRcEMsWUFBb0IsR0FBc0IsRUFBRSxVQUFzQixFQUFFLFFBQW1CO1FBQW5FLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBUGpDLG1CQUFjLEdBQXlDLElBQUksQ0FBQztRQUU1RCxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBRWxCLG9CQUFlLEdBQUcsT0FBTyxDQUFDO1FBSWpDLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7Ozs7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Q0FDRixzREFoQ0EsU0FBUyxTQUFDLGtCQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNLGtCQUMvQyxFQVdFO1VBWFcsRUFBRTtVQUFpQixDQUFDLElBQUksa0JBQ3JDLFFBQVEsRUFBRTtjQUFzQixrQkFDaEMscEJBZkEsaUJBQWlCO09BZVQsRUFBRSxHQWJWLFVBQVU7Q0Fha0Isa0JBQzVCLFBBWkEsU0FBUzs7OzZCQXFCUixLQUFLO3FCQUNMLEtBQUs7d0JBQ0wsS0FBSzs0QkFDTCxLQUFLOzhCQUNMLEtBQUs7MEJBQ0wsS0FBSzs7Ozs7Ozs7OzZDQWR3QyxrQkFDOUMsSUFBSSxFQUFFLHNCQUNKLGNBQWMsRUFBRSw2QkFBNkIsc0JBQzdDLHVDQUF1QyxFQUFFLFdBQVcsc0JBQ3BELHVDQUF1QyxFQUFFLGdCQUFnQixzQkFDekQseUNBQXlDLEVBQUUsaUJBQWlCLGtCQUM3RCxjQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFPYTs7O0lBTFosbURBQXFFOztJQUNyRSwyQ0FBa0M7O0lBQ2xDLDhDQUEyQjs7SUFDM0Isa0RBQStCOztJQUMvQixvREFBbUM7O0lBQ25DLGdEQUE2Qjs7Ozs7SUFFakIsd0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpDYXNjYWRlck9wdGlvbiB9IGZyb20gJy4vbnotY2FzY2FkZXItZGVmaW5pdGlvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzZWxlY3RvcjogJ1tuei1jYXNjYWRlci1vcHRpb25dJyxcclxuICBleHBvcnRBczogJ256Q2FzY2FkZXJPcHRpb24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1jYXNjYWRlci1saS5jb21wb25lbnQuaHRtbCcsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1thdHRyLnRpdGxlXSc6ICdvcHRpb24udGl0bGUgfHwgb3B0aW9uTGFiZWwnLFxyXG4gICAgJ1tjbGFzcy5hbnQtY2FzY2FkZXItbWVudS1pdGVtLWFjdGl2ZV0nOiAnYWN0aXZhdGVkJyxcclxuICAgICdbY2xhc3MuYW50LWNhc2NhZGVyLW1lbnUtaXRlbS1leHBhbmRdJzogJyFvcHRpb24uaXNMZWFmJyxcclxuICAgICdbY2xhc3MuYW50LWNhc2NhZGVyLW1lbnUtaXRlbS1kaXNhYmxlZF0nOiAnb3B0aW9uLmRpc2FibGVkJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56Q2FzY2FkZXJPcHRpb25Db21wb25lbnQge1xyXG4gIEBJbnB1dCgpIG9wdGlvblRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxOekNhc2NhZGVyT3B0aW9uPiB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIG9wdGlvbjogTnpDYXNjYWRlck9wdGlvbjtcclxuICBASW5wdXQoKSBhY3RpdmF0ZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBoaWdobGlnaHRUZXh0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpMYWJlbFByb3BlcnR5ID0gJ2xhYmVsJztcclxuICBASW5wdXQoKSBjb2x1bW5JbmRleDogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1jYXNjYWRlci1tZW51LWl0ZW0nKTtcclxuICB9XHJcblxyXG4gIGdldCBvcHRpb25MYWJlbCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMub3B0aW9uW3RoaXMubnpMYWJlbFByb3BlcnR5XTtcclxuICB9XHJcblxyXG4gIG1hcmtGb3JDaGVjaygpOiB2b2lkIHtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxufVxyXG4iXX0=
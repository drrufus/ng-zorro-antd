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

var _c0 = ["nz-cascader-option", ""];
function NzCascaderOptionComponent_ng_container_0_ng_template_1_Template(rf, ctx) { }
var _c1 = function (a0, a1) { return { $implicit: a0, index: a1 }; };
function NzCascaderOptionComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzCascaderOptionComponent_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 3);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.optionTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(2, _c1, ctx_r0.option, ctx_r0.columnIndex));
} }
function NzCascaderOptionComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 4);
    ɵngcc0.ɵɵpipe(1, "nzHighlight");
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("innerHTML", ɵngcc0.ɵɵpipeBind4(1, 1, ctx_r2.optionLabel, ctx_r2.highlightText, "g", "ant-cascader-menu-item-keyword"), ɵngcc0.ɵɵsanitizeHtml);
} }
function NzCascaderOptionComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 5);
    ɵngcc0.ɵɵelement(1, "i", 6);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzType", ctx_r3.option.loading ? "loading" : "right");
} }
var NzCascaderOptionComponent = /** @class */ (function () {
    function NzCascaderOptionComponent(cdr, elementRef, renderer) {
        this.cdr = cdr;
        this.optionTemplate = null;
        this.activated = false;
        this.nzLabelProperty = 'label';
        renderer.addClass(elementRef.nativeElement, 'ant-cascader-menu-item');
    }
    Object.defineProperty(NzCascaderOptionComponent.prototype, "optionLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return this.option[this.nzLabelProperty];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzCascaderOptionComponent.prototype.markForCheck = /**
     * @return {?}
     */
    function () {
        this.cdr.markForCheck();
    };
    /** @nocollapse */
    NzCascaderOptionComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    NzCascaderOptionComponent.propDecorators = {
        optionTemplate: [{ type: Input }],
        option: [{ type: Input }],
        activated: [{ type: Input }],
        highlightText: [{ type: Input }],
        nzLabelProperty: [{ type: Input }],
        columnIndex: [{ type: Input }]
    };
NzCascaderOptionComponent.ɵfac = function NzCascaderOptionComponent_Factory(t) { return new (t || NzCascaderOptionComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2)); };
NzCascaderOptionComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzCascaderOptionComponent, selectors: [["", "nz-cascader-option", ""]], hostVars: 7, hostBindings: function NzCascaderOptionComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵattribute("title", ctx.option.title || ctx.optionLabel);
        ɵngcc0.ɵɵclassProp("ant-cascader-menu-item-active", ctx.activated)("ant-cascader-menu-item-expand", !ctx.option.isLeaf)("ant-cascader-menu-item-disabled", ctx.option.disabled);
    } }, inputs: { optionTemplate: "optionTemplate", activated: "activated", nzLabelProperty: "nzLabelProperty", option: "option", highlightText: "highlightText", columnIndex: "columnIndex" }, exportAs: ["nzCascaderOption"], attrs: _c0, decls: 4, vars: 3, consts: [[4, "ngIf", "ngIfElse"], ["defaultOptionTemplate", ""], ["class", "ant-cascader-menu-item-expand-icon", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "innerHTML"], [1, "ant-cascader-menu-item-expand-icon"], ["nz-icon", "", 3, "nzType"]], template: function NzCascaderOptionComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzCascaderOptionComponent_ng_container_0_Template, 2, 5, "ng-container", 0);
        ɵngcc0.ɵɵtemplate(1, NzCascaderOptionComponent_ng_template_1_Template, 2, 6, "ng-template", null, 1, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(3, NzCascaderOptionComponent_span_3_Template, 2, 1, "span", 2);
    } if (rf & 2) {
        var _r1 = ɵngcc0.ɵɵreference(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.optionTemplate)("ngIfElse", _r1);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.option.isLeaf || (ctx.option.children == null ? null : ctx.option.children.length) || ctx.option.loading);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet, ɵngcc2.NzIconDirective], pipes: [ɵngcc3.NzHighlightPipe], encapsulation: 2, changeDetection: 0 });
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
    return NzCascaderOptionComponent;
}());
export { NzCascaderOptionComponent };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FzY2FkZXItbGkuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJuZzovbmctem9ycm8tYW50ZC9jYXNjYWRlci9uei1jYXNjYWRlci1saS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxTQUFTLEVBRVQsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXZCO0lBcUJFLG1DQUFvQixHQUFzQixFQUFFLFVBQXNCLEVBQUUsUUFBbUI7UUFBbkUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFQakMsbUJBQWMsR0FBeUMsSUFBSSxDQUFDO1FBRTVELGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFbEIsb0JBQWUsR0FBRyxPQUFPLENBQUM7UUFJakMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLHdCQUF3QixDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVELHNCQUFJLGtEQUFXOzs7O1FBQWY7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzNDLENBQUM7OztPQUFBOzs7O0lBRUQsZ0RBQVk7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDLENBQ0gsQUFuQlE7O3NDQWJQLFNBQVMsU0FBQztRQUNULGVBQWUsRUFBRSxUQVpqQixpQkFBaUI7V0FZdUIsQ0FBQyxNQUFNLEZBVi9DLFVBQVU7VUFXVixhQUFhLEVBQUUsVEFUZixTQUFTOztJQVN1QixDQUFDLElBQUksc0JBQ3JDLFFBQVEsRUFBRTtjQUFzQixzQkFDaEMsSEFVQyxLQUFLO0NBVkUsRUFBRSxrQkFBa0IsSUFXM0IsS0FBSztRQVZOLG9CQVdDLEtBQUs7Z0NBQ0wsS0FBSztrQ0FDTCxLQUFLOzhCQUNMLEtBQUs7OztvT0Fkd0M7WUFDOUMsSUFBSSxFQUFFLDBCQUNKLGNBQWMsRUFBRTtlQUE2QiwwQkFDN0MsdUNBQXVDLEVBQUUsV0FBVywwQkFDcEQsdUNBQXVDLEVBQUUsZ0JBQWdCO2lCQUN6RCx5Q0FBeUMsRUFBRSxpQkFBaUIsc0JBQzdELGtCQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQU9pQjtJQWFsQixnQ0FBQztDQUFBLEFBaENELElBZ0NDO1NBbkJZLHlCQUF5Qjs7O0lBQ3BDLG1EQUFxRTs7SUFDckUsMkNBQWtDOztJQUNsQyw4Q0FBMkI7O0lBQzNCLGtEQUErQjs7SUFDL0Isb0RBQW1DOztJQUNuQyxnREFBNkI7Ozs7O0lBRWpCLHdDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56Q2FzY2FkZXJPcHRpb24gfSBmcm9tICcuL256LWNhc2NhZGVyLWRlZmluaXRpb25zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc2VsZWN0b3I6ICdbbnotY2FzY2FkZXItb3B0aW9uXScsXHJcbiAgZXhwb3J0QXM6ICduekNhc2NhZGVyT3B0aW9uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotY2FzY2FkZXItbGkuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbYXR0ci50aXRsZV0nOiAnb3B0aW9uLnRpdGxlIHx8IG9wdGlvbkxhYmVsJyxcclxuICAgICdbY2xhc3MuYW50LWNhc2NhZGVyLW1lbnUtaXRlbS1hY3RpdmVdJzogJ2FjdGl2YXRlZCcsXHJcbiAgICAnW2NsYXNzLmFudC1jYXNjYWRlci1tZW51LWl0ZW0tZXhwYW5kXSc6ICchb3B0aW9uLmlzTGVhZicsXHJcbiAgICAnW2NsYXNzLmFudC1jYXNjYWRlci1tZW51LWl0ZW0tZGlzYWJsZWRdJzogJ29wdGlvbi5kaXNhYmxlZCdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekNhc2NhZGVyT3B0aW9uQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBvcHRpb25UZW1wbGF0ZTogVGVtcGxhdGVSZWY8TnpDYXNjYWRlck9wdGlvbj4gfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBvcHRpb246IE56Q2FzY2FkZXJPcHRpb247XHJcbiAgQElucHV0KCkgYWN0aXZhdGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaGlnaGxpZ2h0VGV4dDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG56TGFiZWxQcm9wZXJ0eSA9ICdsYWJlbCc7XHJcbiAgQElucHV0KCkgY29sdW1uSW5kZXg6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCByZW5kZXJlcjogUmVuZGVyZXIyKSB7XHJcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtY2FzY2FkZXItbWVudS1pdGVtJyk7XHJcbiAgfVxyXG5cclxuICBnZXQgb3B0aW9uTGFiZWwoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLm9wdGlvblt0aGlzLm56TGFiZWxQcm9wZXJ0eV07XHJcbiAgfVxyXG5cclxuICBtYXJrRm9yQ2hlY2soKTogdm9pZCB7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcbn1cclxuIl19
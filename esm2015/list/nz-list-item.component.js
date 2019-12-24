import { __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, HostBinding, Input, QueryList, Renderer2, TemplateRef, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core';
import { NzListItemMetaComponent } from './nz-list-item-meta.component';
import { NzListComponent } from './nz-list.component';
import * as i0 from "@angular/core";
import * as i1 from "./nz-list.component";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/core";
function NzListItemComponent_ng_template_0_ul_0_li_1_ng_template_1_Template(rf, ctx) { }
function NzListItemComponent_ng_template_0_ul_0_li_1_em_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "em", 9);
} }
function NzListItemComponent_ng_template_0_ul_0_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtemplate(1, NzListItemComponent_ng_template_0_ul_0_li_1_ng_template_1_Template, 0, 0, "ng-template", 7);
    i0.ɵɵtemplate(2, NzListItemComponent_ng_template_0_ul_0_li_1_em_2_Template, 1, 0, "em", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r1156 = ctx.$implicit;
    const last_r1157 = ctx.last;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", i_r1156);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !last_r1157);
} }
function NzListItemComponent_ng_template_0_ul_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 5);
    i0.ɵɵtemplate(1, NzListItemComponent_ng_template_0_ul_0_li_1_Template, 3, 2, "li", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1154 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1154.nzActions);
} }
function NzListItemComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NzListItemComponent_ng_template_0_ul_0_Template, 2, 1, "ul", 4);
} if (rf & 2) {
    const ctx_r1148 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", (ctx_r1148.nzActions == null ? null : ctx_r1148.nzActions.length) > 0);
} }
function NzListItemComponent_ng_template_2_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1161 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1161.nzContent);
} }
function NzListItemComponent_ng_template_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzListItemComponent_ng_template_2_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 11);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1160 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r1160.nzContent);
} }
function NzListItemComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
    i0.ɵɵtemplate(1, NzListItemComponent_ng_template_2_ng_container_1_Template, 2, 1, "ng-container", 10);
} if (rf & 2) {
    const ctx_r1150 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1150.nzContent);
} }
function NzListItemComponent_ng_template_4_ng_template_0_Template(rf, ctx) { }
function NzListItemComponent_ng_template_4_ng_template_1_Template(rf, ctx) { }
function NzListItemComponent_ng_template_4_ng_template_2_Template(rf, ctx) { }
function NzListItemComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NzListItemComponent_ng_template_4_ng_template_0_Template, 0, 0, "ng-template", 7);
    i0.ɵɵtemplate(1, NzListItemComponent_ng_template_4_ng_template_1_Template, 0, 0, "ng-template", 7);
    i0.ɵɵtemplate(2, NzListItemComponent_ng_template_4_ng_template_2_Template, 0, 0, "ng-template", 7);
} if (rf & 2) {
    const ctx_r1152 = i0.ɵɵnextContext();
    const _r1149 = i0.ɵɵreference(3);
    const _r1147 = i0.ɵɵreference(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r1149);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1152.nzExtra);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r1147);
} }
function NzListItemComponent_ng_container_6_ng_template_2_Template(rf, ctx) { }
function NzListItemComponent_ng_container_6_ng_template_3_Template(rf, ctx) { }
function NzListItemComponent_ng_container_6_ng_template_5_Template(rf, ctx) { }
function NzListItemComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 12);
    i0.ɵɵtemplate(2, NzListItemComponent_ng_container_6_ng_template_2_Template, 0, 0, "ng-template", 7);
    i0.ɵɵtemplate(3, NzListItemComponent_ng_container_6_ng_template_3_Template, 0, 0, "ng-template", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 13);
    i0.ɵɵtemplate(5, NzListItemComponent_ng_container_6_ng_template_5_Template, 0, 0, "ng-template", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1153 = i0.ɵɵnextContext();
    const _r1149 = i0.ɵɵreference(3);
    const _r1147 = i0.ɵɵreference(1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", _r1149);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r1147);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1153.nzExtra);
} }
const _c0 = ["*"];
export class NzListItemComponent {
    constructor(elementRef, renderer, parentComp, cdr) {
        this.parentComp = parentComp;
        this.cdr = cdr;
        this.nzActions = [];
        this.nzNoFlex = false;
        renderer.addClass(elementRef.nativeElement, 'ant-list-item');
    }
    get isVerticalAndExtra() {
        return this.itemLayout === 'vertical' && !!this.nzExtra;
    }
    ngAfterViewInit() {
        this.itemLayout$ = this.parentComp.itemLayoutNotify$.subscribe(val => {
            this.itemLayout = val;
            this.cdr.detectChanges();
        });
    }
    ngOnDestroy() {
        if (this.itemLayout$) {
            this.itemLayout$.unsubscribe();
        }
    }
}
/** @nocollapse */ NzListItemComponent.ɵfac = function NzListItemComponent_Factory(t) { return new (t || NzListItemComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.NzListComponent), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
/** @nocollapse */ NzListItemComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzListItemComponent, selectors: [["nz-list-item"], ["", "nz-list-item", ""]], contentQueries: function NzListItemComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, NzListItemMetaComponent, false);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.metas = _t);
    } }, hostBindings: function NzListItemComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        i0.ɵɵallocHostVars(1);
    } if (rf & 2) {
        i0.ɵɵclassProp("ant-list-item-no-flex", ctx.nzNoFlex);
    } }, inputs: { nzActions: "nzActions", nzContent: "nzContent", nzExtra: "nzExtra", nzNoFlex: "nzNoFlex" }, exportAs: ["nzListItem"], ngContentSelectors: _c0, decls: 7, vars: 2, consts: [["actionsTpl", ""], ["contentTpl", ""], ["simpleTpl", ""], [4, "ngIf", "ngIfElse"], ["class", "ant-list-item-action", 4, "ngIf"], [1, "ant-list-item-action"], [4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet"], ["class", "ant-list-item-action-split", 4, "ngIf"], [1, "ant-list-item-action-split"], [4, "ngIf"], [4, "nzStringTemplateOutlet"], [1, "ant-list-item-main"], [1, "ant-list-item-extra"]], template: function NzListItemComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, NzListItemComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(2, NzListItemComponent_ng_template_2_Template, 2, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(4, NzListItemComponent_ng_template_4_Template, 3, 3, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(6, NzListItemComponent_ng_container_6_Template, 6, 3, "ng-container", 3);
    } if (rf & 2) {
        const _r1151 = i0.ɵɵreference(5);
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngIf", ctx.isVerticalAndExtra)("ngIfElse", _r1151);
    } }, directives: [i2.NgIf, i2.NgForOf, i2.NgTemplateOutlet, i3.NzStringTemplateOutletDirective], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzListItemComponent.prototype, "nzNoFlex", void 0);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzListItemComponent, [{
        type: Component,
        args: [{
                selector: 'nz-list-item, [nz-list-item]',
                exportAs: 'nzListItem',
                templateUrl: './nz-list-item.component.html',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.NzListComponent }, { type: i0.ChangeDetectorRef }]; }, { metas: [{
            type: ContentChildren,
            args: [NzListItemMetaComponent]
        }], nzActions: [{
            type: Input
        }], nzContent: [{
            type: Input
        }], nzExtra: [{
            type: Input
        }], nzNoFlex: [{
            type: Input
        }, {
            type: HostBinding,
            args: ['class.ant-list-item-no-flex']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbGlzdC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvbGlzdC8iLCJzb3VyY2VzIjpbIm56LWxpc3QtaXRlbS5jb21wb25lbnQudHMiLCJuei1saXN0LWl0ZW0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsVUFBVSxFQUNWLFdBQVcsRUFDWCxLQUFLLEVBRUwsU0FBUyxFQUNULFNBQVMsRUFDVCxXQUFXLEVBQ1gsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxZQUFZLEVBQXFCLE1BQU0sb0JBQW9CLENBQUM7QUFFckUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDeEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7O0lDdkJoRCx3QkFBMEQ7OztJQUY1RCwwQkFDRTtJQUFBLDRHQUFvQztJQUNwQywwRkFBcUQ7SUFDdkQsaUJBQUs7Ozs7SUFGVSxlQUFzQjtJQUF0QiwwQ0FBc0I7SUFDL0IsZUFBYTtJQUFiLGtDQUFhOzs7SUFIckIsNkJBQ0U7SUFBQSxxRkFDRTtJQUdKLGlCQUFLOzs7SUFKQyxlQUE0QztJQUE1Qyw2Q0FBNEM7OztJQURsRCxnRkFDRTs7O0lBREUsNEZBQTZCOzs7SUFVL0IsNkJBQWtEO0lBQUEsWUFBZTtJQUFBLDBCQUFlOzs7SUFBOUIsZUFBZTtJQUFmLHlDQUFlOzs7SUFEbkUsNkJBQ0U7SUFBQSxvSEFBa0Q7SUFDcEQsMEJBQWU7OztJQURDLGVBQW1DO0lBQW5DLDREQUFtQzs7O0lBRm5ELGtCQUFZO0lBQ1oscUdBQ0U7OztJQURZLGVBQWlCO0lBQWpCLDBDQUFpQjs7Ozs7O0lBSy9CLGtHQUE2QztJQUM3QyxrR0FBMEM7SUFDMUMsa0dBQTZDOzs7OztJQUZoQyx5Q0FBK0I7SUFDL0IsZUFBNEI7SUFBNUIsb0RBQTRCO0lBQzVCLGVBQStCO0lBQS9CLHlDQUErQjs7Ozs7O0lBRTlDLDZCQUNFO0lBQUEsK0JBQ0U7SUFBQSxtR0FBNkM7SUFDN0MsbUdBQTZDO0lBQy9DLGlCQUFNO0lBQ04sK0JBQ0U7SUFBQSxtR0FBMEM7SUFDNUMsaUJBQU07SUFDUiwwQkFBZTs7Ozs7SUFORSxlQUErQjtJQUEvQix5Q0FBK0I7SUFDL0IsZUFBK0I7SUFBL0IseUNBQStCO0lBRy9CLGVBQTRCO0lBQTVCLG9EQUE0Qjs7O0FEWTdDLE1BQU0sT0FBTyxtQkFBbUI7SUFjOUIsWUFBWSxVQUFzQixFQUFFLFFBQW1CLEVBQVUsVUFBMkIsRUFBVSxHQUFzQjtRQUEzRCxlQUFVLEdBQVYsVUFBVSxDQUFpQjtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBWm5ILGNBQVMsR0FBNkIsRUFBRSxDQUFDO1FBR21CLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFVN0YsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFORCxJQUFJLGtCQUFrQjtRQUNwQixPQUFPLElBQUksQ0FBQyxVQUFVLEtBQUssVUFBVSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQzFELENBQUM7SUFNRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNuRSxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztZQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNoQztJQUNILENBQUM7O3NGQTdCVSxtQkFBbUI7d0RBQW5CLG1CQUFtQjtvQ0FDYix1QkFBdUI7Ozs7Ozs7Ozs7UUN0QzFDLHFIQUNFO1FBT0YscUhBQ0U7UUFLRixxSEFDRTtRQUlGLHNGQUNFOzs7UUFEWSxlQUEwQztRQUExQyw2Q0FBMEMsb0JBQUE7O0FEdUJlO0lBQTNELFlBQVksRUFBRTs7cURBQXVFO2tEQUxwRixtQkFBbUI7Y0FSL0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLFFBQVEsRUFBRSxZQUFZO2dCQUN0QixXQUFXLEVBQUUsK0JBQStCO2dCQUM1QyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7O2tCQUVFLGVBQWU7bUJBQUMsdUJBQXVCOztrQkFDdkMsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQW9CLFdBQVc7bUJBQUMsNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBFbGVtZW50UmVmLFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBRdWVyeUxpc3QsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIE56RGlyZWN0aW9uVkhUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE56TGlzdEl0ZW1NZXRhQ29tcG9uZW50IH0gZnJvbSAnLi9uei1saXN0LWl0ZW0tbWV0YS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOekxpc3RDb21wb25lbnQgfSBmcm9tICcuL256LWxpc3QuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotbGlzdC1pdGVtLCBbbnotbGlzdC1pdGVtXScsXHJcbiAgZXhwb3J0QXM6ICduekxpc3RJdGVtJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotbGlzdC1pdGVtLmNvbXBvbmVudC5odG1sJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekxpc3RJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcclxuICBAQ29udGVudENoaWxkcmVuKE56TGlzdEl0ZW1NZXRhQ29tcG9uZW50KSBtZXRhcyE6IFF1ZXJ5TGlzdDxOekxpc3RJdGVtTWV0YUNvbXBvbmVudD47XHJcbiAgQElucHV0KCkgbnpBY3Rpb25zOiBBcnJheTxUZW1wbGF0ZVJlZjx2b2lkPj4gPSBbXTtcclxuICBASW5wdXQoKSBuekNvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56RXh0cmE6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1saXN0LWl0ZW0tbm8tZmxleCcpIG56Tm9GbGV4OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHByaXZhdGUgaXRlbUxheW91dDogTnpEaXJlY3Rpb25WSFR5cGU7XHJcbiAgcHJpdmF0ZSBpdGVtTGF5b3V0JDogU3Vic2NyaXB0aW9uO1xyXG5cclxuICBnZXQgaXNWZXJ0aWNhbEFuZEV4dHJhKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXRlbUxheW91dCA9PT0gJ3ZlcnRpY2FsJyAmJiAhIXRoaXMubnpFeHRyYTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgcGFyZW50Q29tcDogTnpMaXN0Q29tcG9uZW50LCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1saXN0LWl0ZW0nKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaXRlbUxheW91dCQgPSB0aGlzLnBhcmVudENvbXAuaXRlbUxheW91dE5vdGlmeSQuc3Vic2NyaWJlKHZhbCA9PiB7XHJcbiAgICAgIHRoaXMuaXRlbUxheW91dCA9IHZhbDtcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLml0ZW1MYXlvdXQkKSB7XHJcbiAgICAgIHRoaXMuaXRlbUxheW91dCQudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPG5nLXRlbXBsYXRlICNhY3Rpb25zVHBsPlxyXG4gIDx1bCAqbmdJZj1cIm56QWN0aW9ucz8ubGVuZ3RoID4gMFwiIGNsYXNzPVwiYW50LWxpc3QtaXRlbS1hY3Rpb25cIj5cclxuICAgIDxsaSAqbmdGb3I9XCJsZXQgaSBvZiBuekFjdGlvbnM7IGxldCBsYXN0ID0gbGFzdFwiPlxyXG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiaVwiPjwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDxlbSAqbmdJZj1cIiFsYXN0XCIgY2xhc3M9XCJhbnQtbGlzdC1pdGVtLWFjdGlvbi1zcGxpdFwiPjwvZW0+XHJcbiAgICA8L2xpPlxyXG4gIDwvdWw+XHJcbjwvbmctdGVtcGxhdGU+XHJcbjxuZy10ZW1wbGF0ZSAjY29udGVudFRwbD5cclxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm56Q29udGVudFwiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm56Q29udGVudFwiPnt7IG56Q29udGVudCB9fTwvbmctY29udGFpbmVyPlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG48L25nLXRlbXBsYXRlPlxyXG48bmctdGVtcGxhdGUgI3NpbXBsZVRwbD5cclxuICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29udGVudFRwbFwiPjwvbmctdGVtcGxhdGU+XHJcbiAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIm56RXh0cmFcIj48L25nLXRlbXBsYXRlPlxyXG4gIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJhY3Rpb25zVHBsXCI+PC9uZy10ZW1wbGF0ZT5cclxuPC9uZy10ZW1wbGF0ZT5cclxuPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzVmVydGljYWxBbmRFeHRyYTsgZWxzZSBzaW1wbGVUcGxcIj5cclxuICA8ZGl2IGNsYXNzPVwiYW50LWxpc3QtaXRlbS1tYWluXCI+XHJcbiAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29udGVudFRwbFwiPjwvbmctdGVtcGxhdGU+XHJcbiAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYWN0aW9uc1RwbFwiPjwvbmctdGVtcGxhdGU+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImFudC1saXN0LWl0ZW0tZXh0cmFcIj5cclxuICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJuekV4dHJhXCI+PC9uZy10ZW1wbGF0ZT5cclxuICA8L2Rpdj5cclxuPC9uZy1jb250YWluZXI+XHJcbiJdfQ==
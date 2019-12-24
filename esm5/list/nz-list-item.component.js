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
    var i_r1206 = ctx.$implicit;
    var last_r1207 = ctx.last;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", i_r1206);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !last_r1207);
} }
function NzListItemComponent_ng_template_0_ul_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 5);
    i0.ɵɵtemplate(1, NzListItemComponent_ng_template_0_ul_0_li_1_Template, 3, 2, "li", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1204 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1204.nzActions);
} }
function NzListItemComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NzListItemComponent_ng_template_0_ul_0_Template, 2, 1, "ul", 4);
} if (rf & 2) {
    var ctx_r1198 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", (ctx_r1198.nzActions == null ? null : ctx_r1198.nzActions.length) > 0);
} }
function NzListItemComponent_ng_template_2_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1211 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1211.nzContent);
} }
function NzListItemComponent_ng_template_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzListItemComponent_ng_template_2_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 11);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1210 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r1210.nzContent);
} }
function NzListItemComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
    i0.ɵɵtemplate(1, NzListItemComponent_ng_template_2_ng_container_1_Template, 2, 1, "ng-container", 10);
} if (rf & 2) {
    var ctx_r1200 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1200.nzContent);
} }
function NzListItemComponent_ng_template_4_ng_template_0_Template(rf, ctx) { }
function NzListItemComponent_ng_template_4_ng_template_1_Template(rf, ctx) { }
function NzListItemComponent_ng_template_4_ng_template_2_Template(rf, ctx) { }
function NzListItemComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NzListItemComponent_ng_template_4_ng_template_0_Template, 0, 0, "ng-template", 7);
    i0.ɵɵtemplate(1, NzListItemComponent_ng_template_4_ng_template_1_Template, 0, 0, "ng-template", 7);
    i0.ɵɵtemplate(2, NzListItemComponent_ng_template_4_ng_template_2_Template, 0, 0, "ng-template", 7);
} if (rf & 2) {
    var ctx_r1202 = i0.ɵɵnextContext();
    var _r1199 = i0.ɵɵreference(3);
    var _r1197 = i0.ɵɵreference(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r1199);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1202.nzExtra);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r1197);
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
    var ctx_r1203 = i0.ɵɵnextContext();
    var _r1199 = i0.ɵɵreference(3);
    var _r1197 = i0.ɵɵreference(1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", _r1199);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r1197);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1203.nzExtra);
} }
var _c0 = ["*"];
var NzListItemComponent = /** @class */ (function () {
    function NzListItemComponent(elementRef, renderer, parentComp, cdr) {
        this.parentComp = parentComp;
        this.cdr = cdr;
        this.nzActions = [];
        this.nzNoFlex = false;
        renderer.addClass(elementRef.nativeElement, 'ant-list-item');
    }
    Object.defineProperty(NzListItemComponent.prototype, "isVerticalAndExtra", {
        get: function () {
            return this.itemLayout === 'vertical' && !!this.nzExtra;
        },
        enumerable: true,
        configurable: true
    });
    NzListItemComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.itemLayout$ = this.parentComp.itemLayoutNotify$.subscribe(function (val) {
            _this.itemLayout = val;
            _this.cdr.detectChanges();
        });
    };
    NzListItemComponent.prototype.ngOnDestroy = function () {
        if (this.itemLayout$) {
            this.itemLayout$.unsubscribe();
        }
    };
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
            var _r1201 = i0.ɵɵreference(5);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngIf", ctx.isVerticalAndExtra)("ngIfElse", _r1201);
        } }, directives: [i2.NgIf, i2.NgForOf, i2.NgTemplateOutlet, i3.NzStringTemplateOutletDirective], encapsulation: 2, changeDetection: 0 });
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzListItemComponent.prototype, "nzNoFlex", void 0);
    return NzListItemComponent;
}());
export { NzListItemComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbGlzdC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvbGlzdC8iLCJzb3VyY2VzIjpbIm56LWxpc3QtaXRlbS5jb21wb25lbnQudHMiLCJuei1saXN0LWl0ZW0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsVUFBVSxFQUNWLFdBQVcsRUFDWCxLQUFLLEVBRUwsU0FBUyxFQUNULFNBQVMsRUFDVCxXQUFXLEVBQ1gsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxZQUFZLEVBQXFCLE1BQU0sb0JBQW9CLENBQUM7QUFFckUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDeEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7O0lDdkJoRCx3QkFBMEQ7OztJQUY1RCwwQkFDRTtJQUFBLDRHQUFvQztJQUNwQywwRkFBcUQ7SUFDdkQsaUJBQUs7Ozs7SUFGVSxlQUFzQjtJQUF0QiwwQ0FBc0I7SUFDL0IsZUFBYTtJQUFiLGtDQUFhOzs7SUFIckIsNkJBQ0U7SUFBQSxxRkFDRTtJQUdKLGlCQUFLOzs7SUFKQyxlQUE0QztJQUE1Qyw2Q0FBNEM7OztJQURsRCxnRkFDRTs7O0lBREUsNEZBQTZCOzs7SUFVL0IsNkJBQWtEO0lBQUEsWUFBZTtJQUFBLDBCQUFlOzs7SUFBOUIsZUFBZTtJQUFmLHlDQUFlOzs7SUFEbkUsNkJBQ0U7SUFBQSxvSEFBa0Q7SUFDcEQsMEJBQWU7OztJQURDLGVBQW1DO0lBQW5DLDREQUFtQzs7O0lBRm5ELGtCQUFZO0lBQ1oscUdBQ0U7OztJQURZLGVBQWlCO0lBQWpCLDBDQUFpQjs7Ozs7O0lBSy9CLGtHQUE2QztJQUM3QyxrR0FBMEM7SUFDMUMsa0dBQTZDOzs7OztJQUZoQyx5Q0FBK0I7SUFDL0IsZUFBNEI7SUFBNUIsb0RBQTRCO0lBQzVCLGVBQStCO0lBQS9CLHlDQUErQjs7Ozs7O0lBRTlDLDZCQUNFO0lBQUEsK0JBQ0U7SUFBQSxtR0FBNkM7SUFDN0MsbUdBQTZDO0lBQy9DLGlCQUFNO0lBQ04sK0JBQ0U7SUFBQSxtR0FBMEM7SUFDNUMsaUJBQU07SUFDUiwwQkFBZTs7Ozs7SUFORSxlQUErQjtJQUEvQix5Q0FBK0I7SUFDL0IsZUFBK0I7SUFBL0IseUNBQStCO0lBRy9CLGVBQTRCO0lBQTVCLG9EQUE0Qjs7O0FESTdDO0lBc0JFLDZCQUFZLFVBQXNCLEVBQUUsUUFBbUIsRUFBVSxVQUEyQixFQUFVLEdBQXNCO1FBQTNELGVBQVUsR0FBVixVQUFVLENBQWlCO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFabkgsY0FBUyxHQUE2QixFQUFFLENBQUM7UUFHbUIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQVU3RixRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQU5ELHNCQUFJLG1EQUFrQjthQUF0QjtZQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsS0FBSyxVQUFVLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDMUQsQ0FBQzs7O09BQUE7SUFNRCw2Q0FBZSxHQUFmO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUNoRSxLQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztZQUN0QixLQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHlDQUFXLEdBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNoQztJQUNILENBQUM7MEZBN0JVLG1CQUFtQjs0REFBbkIsbUJBQW1CO3dDQUNiLHVCQUF1Qjs7Ozs7Ozs7OztZQ3RDMUMscUhBQ0U7WUFPRixxSEFDRTtZQUtGLHFIQUNFO1lBSUYsc0ZBQ0U7OztZQURZLGVBQTBDO1lBQTFDLDZDQUEwQyxvQkFBQTs7SUR1QmU7UUFBM0QsWUFBWSxFQUFFOzt5REFBdUU7OEJBMUNqRztDQW1FQyxBQXRDRCxJQXNDQztTQTlCWSxtQkFBbUI7a0RBQW5CLG1CQUFtQjtjQVIvQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFdBQVcsRUFBRSwrQkFBK0I7Z0JBQzVDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7a0JBRUUsZUFBZTttQkFBQyx1QkFBdUI7O2tCQUN2QyxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFBb0IsV0FBVzttQkFBQyw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgTnpEaXJlY3Rpb25WSFR5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTnpMaXN0SXRlbU1ldGFDb21wb25lbnQgfSBmcm9tICcuL256LWxpc3QtaXRlbS1tZXRhLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56TGlzdENvbXBvbmVudCB9IGZyb20gJy4vbnotbGlzdC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei1saXN0LWl0ZW0sIFtuei1saXN0LWl0ZW1dJyxcclxuICBleHBvcnRBczogJ256TGlzdEl0ZW0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1saXN0LWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE56TGlzdEl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oTnpMaXN0SXRlbU1ldGFDb21wb25lbnQpIG1ldGFzITogUXVlcnlMaXN0PE56TGlzdEl0ZW1NZXRhQ29tcG9uZW50PjtcclxuICBASW5wdXQoKSBuekFjdGlvbnM6IEFycmF5PFRlbXBsYXRlUmVmPHZvaWQ+PiA9IFtdO1xyXG4gIEBJbnB1dCgpIG56Q29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpFeHRyYTogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIEBIb3N0QmluZGluZygnY2xhc3MuYW50LWxpc3QtaXRlbS1uby1mbGV4JykgbnpOb0ZsZXg6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHJpdmF0ZSBpdGVtTGF5b3V0OiBOekRpcmVjdGlvblZIVHlwZTtcclxuICBwcml2YXRlIGl0ZW1MYXlvdXQkOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIGdldCBpc1ZlcnRpY2FsQW5kRXh0cmEoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pdGVtTGF5b3V0ID09PSAndmVydGljYWwnICYmICEhdGhpcy5uekV4dHJhO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBwYXJlbnRDb21wOiBOekxpc3RDb21wb25lbnQsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWxpc3QtaXRlbScpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pdGVtTGF5b3V0JCA9IHRoaXMucGFyZW50Q29tcC5pdGVtTGF5b3V0Tm90aWZ5JC5zdWJzY3JpYmUodmFsID0+IHtcclxuICAgICAgdGhpcy5pdGVtTGF5b3V0ID0gdmFsO1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXRlbUxheW91dCQpIHtcclxuICAgICAgdGhpcy5pdGVtTGF5b3V0JC51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8bmctdGVtcGxhdGUgI2FjdGlvbnNUcGw+XHJcbiAgPHVsICpuZ0lmPVwibnpBY3Rpb25zPy5sZW5ndGggPiAwXCIgY2xhc3M9XCJhbnQtbGlzdC1pdGVtLWFjdGlvblwiPlxyXG4gICAgPGxpICpuZ0Zvcj1cImxldCBpIG9mIG56QWN0aW9uczsgbGV0IGxhc3QgPSBsYXN0XCI+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJpXCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgICAgPGVtICpuZ0lmPVwiIWxhc3RcIiBjbGFzcz1cImFudC1saXN0LWl0ZW0tYWN0aW9uLXNwbGl0XCI+PC9lbT5cclxuICAgIDwvbGk+XHJcbiAgPC91bD5cclxuPC9uZy10ZW1wbGF0ZT5cclxuPG5nLXRlbXBsYXRlICNjb250ZW50VHBsPlxyXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwibnpDb250ZW50XCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpDb250ZW50XCI+e3sgbnpDb250ZW50IH19PC9uZy1jb250YWluZXI+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbjwvbmctdGVtcGxhdGU+XHJcbjxuZy10ZW1wbGF0ZSAjc2ltcGxlVHBsPlxyXG4gIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJjb250ZW50VHBsXCI+PC9uZy10ZW1wbGF0ZT5cclxuICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwibnpFeHRyYVwiPjwvbmctdGVtcGxhdGU+XHJcbiAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImFjdGlvbnNUcGxcIj48L25nLXRlbXBsYXRlPlxyXG48L25nLXRlbXBsYXRlPlxyXG48bmctY29udGFpbmVyICpuZ0lmPVwiaXNWZXJ0aWNhbEFuZEV4dHJhOyBlbHNlIHNpbXBsZVRwbFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJhbnQtbGlzdC1pdGVtLW1haW5cIj5cclxuICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJjb250ZW50VHBsXCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJhY3Rpb25zVHBsXCI+PC9uZy10ZW1wbGF0ZT5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiYW50LWxpc3QtaXRlbS1leHRyYVwiPlxyXG4gICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIm56RXh0cmFcIj48L25nLXRlbXBsYXRlPlxyXG4gIDwvZGl2PlxyXG48L25nLWNvbnRhaW5lcj5cclxuIl19
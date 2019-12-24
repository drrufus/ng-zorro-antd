import { __extends } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Host, Optional, ViewEncapsulation } from '@angular/core';
import { NzNoAnimationDirective, zoomBigMotion } from 'ng-zorro-antd/core';
import { isTooltipEmpty, NzToolTipComponent } from 'ng-zorro-antd/tooltip';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
import * as i2 from "@angular/cdk/overlay";
import * as i3 from "@angular/common";
function NzPopoverComponent_ng_template_1_div_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r649 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r649.title);
} }
function NzPopoverComponent_ng_template_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtemplate(1, NzPopoverComponent_ng_template_1_div_5_ng_container_1_Template, 2, 1, "ng-container", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r647 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r647.title);
} }
function NzPopoverComponent_ng_template_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r648 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r648.content);
} }
function NzPopoverComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵelement(2, "div", 4);
    i0.ɵɵelementStart(3, "div", 5);
    i0.ɵɵelementStart(4, "div");
    i0.ɵɵtemplate(5, NzPopoverComponent_ng_template_1_div_5_Template, 2, 1, "div", 6);
    i0.ɵɵelementStart(6, "div", 7);
    i0.ɵɵtemplate(7, NzPopoverComponent_ng_template_1_ng_container_7_Template, 2, 1, "ng-container", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r646 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r646._classMap)("ngStyle", ctx_r646.nzOverlayStyle)("@.disabled", ctx_r646.noAnimation == null ? null : ctx_r646.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r646.noAnimation == null ? null : ctx_r646.noAnimation.nzNoAnimation)("@zoomBigMotion", "active");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r646.title);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r646.content);
} }
var _c0 = ["*"];
var NzPopoverComponent = /** @class */ (function (_super) {
    __extends(NzPopoverComponent, _super);
    function NzPopoverComponent(cdr, noAnimation) {
        var _this = _super.call(this, cdr, noAnimation) || this;
        _this.noAnimation = noAnimation;
        _this._prefix = 'ant-popover-placement';
        return _this;
    }
    NzPopoverComponent.prototype.isEmpty = function () {
        return isTooltipEmpty(this.title) && isTooltipEmpty(this.content);
    };
    /** @nocollapse */ NzPopoverComponent.ɵfac = function NzPopoverComponent_Factory(t) { return new (t || NzPopoverComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.NzNoAnimationDirective, 9)); };
    /** @nocollapse */ NzPopoverComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzPopoverComponent, selectors: [["nz-popover"]], exportAs: ["nzPopoverComponent"], features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 3, vars: 4, consts: [["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayPositions", "cdkConnectedOverlayOpen", "backdropClick", "detach", "positionChange"], ["overlay", "cdkConnectedOverlay"], [1, "ant-popover", 3, "ngClass", "ngStyle", "nzNoAnimation"], [1, "ant-popover-content"], [1, "ant-popover-arrow"], ["role", "tooltip", 1, "ant-popover-inner"], ["class", "ant-popover-title", 4, "ngIf"], [1, "ant-popover-inner-content"], [4, "nzStringTemplateOutlet"], [1, "ant-popover-title"]], template: function NzPopoverComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
            i0.ɵɵtemplate(1, NzPopoverComponent_ng_template_1_Template, 8, 7, "ng-template", 0, 1, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵlistener("backdropClick", function NzPopoverComponent_Template_ng_template_backdropClick_1_listener($event) { return ctx.hide(); })("detach", function NzPopoverComponent_Template_ng_template_detach_1_listener($event) { return ctx.hide(); })("positionChange", function NzPopoverComponent_Template_ng_template_positionChange_1_listener($event) { return ctx.onPositionChange($event); });
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("cdkConnectedOverlayOrigin", ctx.origin)("cdkConnectedOverlayHasBackdrop", ctx._hasBackdrop)("cdkConnectedOverlayPositions", ctx._positions)("cdkConnectedOverlayOpen", ctx._visible);
        } }, directives: [i2.CdkConnectedOverlay, i1.NzConnectedOverlayDirective, i3.NgClass, i3.NgStyle, i1.NzNoAnimationDirective, i3.NgIf, i1.NzStringTemplateOutletDirective], styles: ["\n      .ant-popover {\n        position: relative;\n      }\n    "], encapsulation: 2, data: { animation: [zoomBigMotion] }, changeDetection: 0 });
    return NzPopoverComponent;
}(NzToolTipComponent));
export { NzPopoverComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzPopoverComponent, [{
        type: Component,
        args: [{
                selector: 'nz-popover',
                exportAs: 'nzPopoverComponent',
                animations: [zoomBigMotion],
                templateUrl: './nz-popover.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                styles: [
                    "\n      .ant-popover {\n        position: relative;\n      }\n    "
                ]
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcG9wb3Zlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3BvcG92ZXIvIiwic291cmNlcyI6WyJuei1wb3BvdmVyLmNvbXBvbmVudC50cyIsIm56LXBvcG92ZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6SCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDM0UsT0FBTyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7SUNlL0QsNkJBQThDO0lBQUEsWUFBVztJQUFBLDBCQUFlOzs7SUFBMUIsZUFBVztJQUFYLG9DQUFXOzs7SUFEM0QsOEJBQ0U7SUFBQSx5R0FBOEM7SUFDaEQsaUJBQU07OztJQURVLGVBQStCO0lBQS9CLHVEQUErQjs7O0lBRzdDLDZCQUFnRDtJQUFBLFlBQWE7SUFBQSwwQkFBZTs7O0lBQTVCLGVBQWE7SUFBYixzQ0FBYTs7O0lBaEJ2RSw4QkFRRTtJQUFBLDhCQUNFO0lBQUEseUJBQXFDO0lBQ3JDLDhCQUNFO0lBQUEsMkJBQ0U7SUFBQSxpRkFDRTtJQUVGLDhCQUNFO0lBQUEsbUdBQWdEO0lBQ2xELGlCQUFNO0lBQ1IsaUJBQU07SUFDUixpQkFBTTtJQUNSLGlCQUFNO0lBQ1IsaUJBQU07OztJQW5CSiw0Q0FBcUIsb0NBQUEsd0ZBQUEsMkZBQUEsNEJBQUE7SUFVZ0IsZUFBYTtJQUFiLHFDQUFhO0lBSTVCLGVBQWlDO0lBQWpDLHlEQUFpQzs7O0FEaEIzRDtJQWdCd0Msc0NBQWtCO0lBR3hELDRCQUFZLEdBQXNCLEVBQTZCLFdBQW9DO1FBQW5HLFlBQ0Usa0JBQU0sR0FBRyxFQUFFLFdBQVcsQ0FBQyxTQUN4QjtRQUY4RCxpQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUFGbkcsYUFBTyxHQUFHLHVCQUF1QixDQUFDOztJQUlsQyxDQUFDO0lBRVMsb0NBQU8sR0FBakI7UUFDRSxPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNwRSxDQUFDO3dGQVRVLGtCQUFrQjsyREFBbEIsa0JBQWtCOztZQzdCL0Isa0JBQVk7WUFDWixpSEFZRTtZQU5BLDBIQUFpQixVQUFNLElBQUMsK0ZBQ2QsVUFBTSxJQURRLCtHQUVOLDRCQUF3QixJQUZsQjs7WUFGeEIsZUFBb0M7WUFBcEMsc0RBQW9DLG9EQUFBLGdEQUFBLHlDQUFBO3dTRFd4QixDQUFDLGFBQWEsQ0FBQzs2QkFoQjdCO0NBdUNDLEFBMUJELENBZ0J3QyxrQkFBa0IsR0FVekQ7U0FWWSxrQkFBa0I7a0RBQWxCLGtCQUFrQjtjQWhCOUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixVQUFVLEVBQUUsQ0FBQyxhQUFhLENBQUM7Z0JBQzNCLFdBQVcsRUFBRSw2QkFBNkI7Z0JBQzFDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsTUFBTSxFQUFFO29CQUNOLG9FQUlDO2lCQUNGO2FBQ0Y7O3NCQUlzQyxJQUFJOztzQkFBSSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSG9zdCwgT3B0aW9uYWwsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOek5vQW5pbWF0aW9uRGlyZWN0aXZlLCB6b29tQmlnTW90aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgaXNUb29sdGlwRW1wdHksIE56VG9vbFRpcENvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvdG9vbHRpcCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LXBvcG92ZXInLFxyXG4gIGV4cG9ydEFzOiAnbnpQb3BvdmVyQ29tcG9uZW50JyxcclxuICBhbmltYXRpb25zOiBbem9vbUJpZ01vdGlvbl0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXBvcG92ZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIC5hbnQtcG9wb3ZlciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpQb3BvdmVyQ29tcG9uZW50IGV4dGVuZHMgTnpUb29sVGlwQ29tcG9uZW50IHtcclxuICBfcHJlZml4ID0gJ2FudC1wb3BvdmVyLXBsYWNlbWVudCc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSkge1xyXG4gICAgc3VwZXIoY2RyLCBub0FuaW1hdGlvbik7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgaXNFbXB0eSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBpc1Rvb2x0aXBFbXB0eSh0aGlzLnRpdGxlKSAmJiBpc1Rvb2x0aXBFbXB0eSh0aGlzLmNvbnRlbnQpO1xyXG4gIH1cclxufVxyXG4iLCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjxuZy10ZW1wbGF0ZVxyXG4gICNvdmVybGF5PVwiY2RrQ29ubmVjdGVkT3ZlcmxheVwiXHJcbiAgY2RrQ29ubmVjdGVkT3ZlcmxheVxyXG4gIG56Q29ubmVjdGVkT3ZlcmxheVxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5T3JpZ2luXT1cIm9yaWdpblwiXHJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlIYXNCYWNrZHJvcF09XCJfaGFzQmFja2Ryb3BcIlxyXG4gIChiYWNrZHJvcENsaWNrKT1cImhpZGUoKVwiXHJcbiAgKGRldGFjaCk9XCJoaWRlKClcIlxyXG4gIChwb3NpdGlvbkNoYW5nZSk9XCJvblBvc2l0aW9uQ2hhbmdlKCRldmVudClcIlxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25zXT1cIl9wb3NpdGlvbnNcIlxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5T3Blbl09XCJfdmlzaWJsZVwiXHJcbj5cclxuICA8ZGl2XHJcbiAgICBjbGFzcz1cImFudC1wb3BvdmVyXCJcclxuICAgIFtuZ0NsYXNzXT1cIl9jbGFzc01hcFwiXHJcbiAgICBbbmdTdHlsZV09XCJuek92ZXJsYXlTdHlsZVwiXHJcbiAgICBbQC5kaXNhYmxlZF09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXHJcbiAgICBbbnpOb0FuaW1hdGlvbl09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXHJcbiAgICBbQHpvb21CaWdNb3Rpb25dPVwiJ2FjdGl2ZSdcIlxyXG4gID5cclxuICAgIDxkaXYgY2xhc3M9XCJhbnQtcG9wb3Zlci1jb250ZW50XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtcG9wb3Zlci1hcnJvd1wiPjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LXBvcG92ZXItaW5uZXJcIiByb2xlPVwidG9vbHRpcFwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXBvcG92ZXItdGl0bGVcIiAqbmdJZj1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJ0aXRsZVwiPnt7IHRpdGxlIH19PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtcG9wb3Zlci1pbm5lci1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJjb250ZW50XCI+e3sgY29udGVudCB9fTwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==
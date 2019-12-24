import { __extends } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, Host, Input, Optional, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NzNoAnimationDirective, zoomBigMotion } from 'ng-zorro-antd/core';
import { isTooltipEmpty, NzTooltipBaseComponent } from './nz-tooltip-base.component';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
import * as i2 from "@angular/cdk/overlay";
import * as i3 from "@angular/common";
var _c0 = ["nzTemplate"];
function NzToolTipComponent_ng_template_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r313 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r313.title);
} }
function NzToolTipComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵelement(2, "div", 4);
    i0.ɵɵelementStart(3, "div", 5);
    i0.ɵɵtemplate(4, NzToolTipComponent_ng_template_1_ng_container_4_Template, 2, 1, "ng-container", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r312 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r312._classMap)("ngStyle", ctx_r312.nzOverlayStyle)("@.disabled", ctx_r312.noAnimation == null ? null : ctx_r312.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r312.noAnimation == null ? null : ctx_r312.noAnimation.nzNoAnimation)("@zoomBigMotion", "active");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r312.title);
} }
var _c1 = ["*"];
var NzToolTipComponent = /** @class */ (function (_super) {
    __extends(NzToolTipComponent, _super);
    function NzToolTipComponent(cdr, noAnimation) {
        var _this = _super.call(this, cdr) || this;
        _this.noAnimation = noAnimation;
        return _this;
    }
    NzToolTipComponent.prototype.isEmpty = function () {
        return isTooltipEmpty(this.title);
    };
    /** @nocollapse */ NzToolTipComponent.ɵfac = function NzToolTipComponent_Factory(t) { return new (t || NzToolTipComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.NzNoAnimationDirective, 9)); };
    /** @nocollapse */ NzToolTipComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzToolTipComponent, selectors: [["nz-tooltip"]], contentQueries: function NzToolTipComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵstaticContentQuery(dirIndex, _c0, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.nzTitleTemplate = _t.first);
        } }, inputs: { nzTitle: "nzTitle" }, exportAs: ["nzTooltipComponent"], features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c1, decls: 3, vars: 4, consts: [["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayPositions", "backdropClick", "detach", "positionChange"], ["overlay", "cdkConnectedOverlay"], [1, "ant-tooltip", 3, "ngClass", "ngStyle", "nzNoAnimation"], [1, "ant-tooltip-content"], [1, "ant-tooltip-arrow"], [1, "ant-tooltip-inner"], [4, "nzStringTemplateOutlet"]], template: function NzToolTipComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
            i0.ɵɵtemplate(1, NzToolTipComponent_ng_template_1_Template, 5, 6, "ng-template", 0, 1, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵlistener("backdropClick", function NzToolTipComponent_Template_ng_template_backdropClick_1_listener($event) { return ctx.hide(); })("detach", function NzToolTipComponent_Template_ng_template_detach_1_listener($event) { return ctx.hide(); })("positionChange", function NzToolTipComponent_Template_ng_template_positionChange_1_listener($event) { return ctx.onPositionChange($event); });
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("cdkConnectedOverlayOrigin", ctx.origin)("cdkConnectedOverlayOpen", ctx._visible)("cdkConnectedOverlayHasBackdrop", ctx._hasBackdrop)("cdkConnectedOverlayPositions", ctx._positions);
        } }, directives: [i2.CdkConnectedOverlay, i1.NzConnectedOverlayDirective, i3.NgClass, i3.NgStyle, i1.NzNoAnimationDirective, i1.NzStringTemplateOutletDirective], styles: ["\n      .ant-tooltip {\n        position: relative;\n      }\n    "], encapsulation: 2, data: { animation: [zoomBigMotion] }, changeDetection: 0 });
    return NzToolTipComponent;
}(NzTooltipBaseComponent));
export { NzToolTipComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzToolTipComponent, [{
        type: Component,
        args: [{
                selector: 'nz-tooltip',
                exportAs: 'nzTooltipComponent',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                animations: [zoomBigMotion],
                templateUrl: './nz-tooltip.component.html',
                preserveWhitespaces: false,
                styles: [
                    "\n      .ant-tooltip {\n        position: relative;\n      }\n    "
                ]
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, { nzTitle: [{
            type: Input
        }], nzTitleTemplate: [{
            type: ContentChild,
            args: ['nzTemplate', { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3Rvb2x0aXAvIiwic291cmNlcyI6WyJuei10b29sdGlwLmNvbXBvbmVudC50cyIsIm56LXRvb2x0aXAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osSUFBSSxFQUNKLEtBQUssRUFDTCxRQUFRLEVBQ1IsV0FBVyxFQUNYLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsc0JBQXNCLEVBQVksYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFckYsT0FBTyxFQUFFLGNBQWMsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7Ozs7O0lDRTdFLDZCQUE4QztJQUFBLFlBQVc7SUFBQSwwQkFBZTs7O0lBQTFCLGVBQVc7SUFBWCxvQ0FBVzs7O0lBWC9ELDhCQVFFO0lBQUEsOEJBQ0U7SUFBQSx5QkFBcUM7SUFDckMsOEJBQ0U7SUFBQSxtR0FBOEM7SUFDaEQsaUJBQU07SUFDUixpQkFBTTtJQUNSLGlCQUFNOzs7SUFaSiw0Q0FBcUIsb0NBQUEsd0ZBQUEsMkZBQUEsNEJBQUE7SUFTSCxlQUErQjtJQUEvQix1REFBK0I7OztBREFyRDtJQWdCd0Msc0NBQXNCO0lBSTVELDRCQUFZLEdBQXNCLEVBQTZCLFdBQW9DO1FBQW5HLFlBQ0Usa0JBQU0sR0FBRyxDQUFDLFNBQ1g7UUFGOEQsaUJBQVcsR0FBWCxXQUFXLENBQXlCOztJQUVuRyxDQUFDO0lBRVMsb0NBQU8sR0FBakI7UUFDRSxPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQzt3RkFWVSxrQkFBa0I7MkRBQWxCLGtCQUFrQjs7Ozs7OztZQ3hDL0Isa0JBQVk7WUFDWixpSEFZRTtZQUpBLDBIQUFpQixVQUFNLElBQUMsK0ZBQ2QsVUFBTSxJQURRLCtHQUVOLDRCQUF3QixJQUZsQjs7WUFKeEIsZUFBb0M7WUFBcEMsc0RBQW9DLHlDQUFBLG9EQUFBLGdEQUFBOytSRHdCeEIsQ0FBQyxhQUFhLENBQUM7NkJBN0I3QjtDQW1EQyxBQTNCRCxDQWdCd0Msc0JBQXNCLEdBVzdEO1NBWFksa0JBQWtCO2tEQUFsQixrQkFBa0I7Y0FoQjlCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxVQUFVLEVBQUUsQ0FBQyxhQUFhLENBQUM7Z0JBQzNCLFdBQVcsRUFBRSw2QkFBNkI7Z0JBQzFDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLE1BQU0sRUFBRTtvQkFDTixvRUFJQztpQkFDRjthQUNGOztzQkFLc0MsSUFBSTs7c0JBQUksUUFBUTs7a0JBSHBELEtBQUs7O2tCQUNMLFlBQVk7bUJBQUMsWUFBWSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIEhvc3QsXHJcbiAgSW5wdXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56Tm9BbmltYXRpb25EaXJlY3RpdmUsIE56VFNUeXBlLCB6b29tQmlnTW90aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IGlzVG9vbHRpcEVtcHR5LCBOelRvb2x0aXBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9uei10b29sdGlwLWJhc2UuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotdG9vbHRpcCcsXHJcbiAgZXhwb3J0QXM6ICduelRvb2x0aXBDb21wb25lbnQnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgYW5pbWF0aW9uczogW3pvb21CaWdNb3Rpb25dLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei10b29sdGlwLmNvbXBvbmVudC5odG1sJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgLmFudC10b29sdGlwIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelRvb2xUaXBDb21wb25lbnQgZXh0ZW5kcyBOelRvb2x0aXBCYXNlQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBuelRpdGxlOiBOelRTVHlwZSB8IG51bGw7XHJcbiAgQENvbnRlbnRDaGlsZCgnbnpUZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pIG56VGl0bGVUZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSkge1xyXG4gICAgc3VwZXIoY2RyKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBpc0VtcHR5KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGlzVG9vbHRpcEVtcHR5KHRoaXMudGl0bGUpO1xyXG4gIH1cclxufVxyXG4iLCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjxuZy10ZW1wbGF0ZVxyXG4gICNvdmVybGF5PVwiY2RrQ29ubmVjdGVkT3ZlcmxheVwiXHJcbiAgY2RrQ29ubmVjdGVkT3ZlcmxheVxyXG4gIG56Q29ubmVjdGVkT3ZlcmxheVxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5T3JpZ2luXT1cIm9yaWdpblwiXHJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcGVuXT1cIl92aXNpYmxlXCJcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheUhhc0JhY2tkcm9wXT1cIl9oYXNCYWNrZHJvcFwiXHJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbnNdPVwiX3Bvc2l0aW9uc1wiXHJcbiAgKGJhY2tkcm9wQ2xpY2spPVwiaGlkZSgpXCJcclxuICAoZGV0YWNoKT1cImhpZGUoKVwiXHJcbiAgKHBvc2l0aW9uQ2hhbmdlKT1cIm9uUG9zaXRpb25DaGFuZ2UoJGV2ZW50KVwiXHJcbj5cclxuICA8ZGl2XHJcbiAgICBjbGFzcz1cImFudC10b29sdGlwXCJcclxuICAgIFtuZ0NsYXNzXT1cIl9jbGFzc01hcFwiXHJcbiAgICBbbmdTdHlsZV09XCJuek92ZXJsYXlTdHlsZVwiXHJcbiAgICBbQC5kaXNhYmxlZF09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXHJcbiAgICBbbnpOb0FuaW1hdGlvbl09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXHJcbiAgICBbQHpvb21CaWdNb3Rpb25dPVwiJ2FjdGl2ZSdcIlxyXG4gID5cclxuICAgIDxkaXYgY2xhc3M9XCJhbnQtdG9vbHRpcC1jb250ZW50XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtdG9vbHRpcC1hcnJvd1wiPjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LXRvb2x0aXAtaW5uZXJcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwidGl0bGVcIj57eyB0aXRsZSB9fTwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=
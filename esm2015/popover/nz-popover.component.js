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
    const ctx_r644 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r644.title);
} }
function NzPopoverComponent_ng_template_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtemplate(1, NzPopoverComponent_ng_template_1_div_5_ng_container_1_Template, 2, 1, "ng-container", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r642 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r642.title);
} }
function NzPopoverComponent_ng_template_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r643 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r643.content);
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
    const ctx_r641 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r641._classMap)("ngStyle", ctx_r641.nzOverlayStyle)("@.disabled", ctx_r641.noAnimation == null ? null : ctx_r641.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r641.noAnimation == null ? null : ctx_r641.noAnimation.nzNoAnimation)("@zoomBigMotion", "active");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r641.title);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r641.content);
} }
const _c0 = ["*"];
export class NzPopoverComponent extends NzToolTipComponent {
    constructor(cdr, noAnimation) {
        super(cdr, noAnimation);
        this.noAnimation = noAnimation;
        this._prefix = 'ant-popover-placement';
    }
    isEmpty() {
        return isTooltipEmpty(this.title) && isTooltipEmpty(this.content);
    }
}
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
                    `
      .ant-popover {
        position: relative;
      }
    `
                ]
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcG9wb3Zlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3BvcG92ZXIvIiwic291cmNlcyI6WyJuei1wb3BvdmVyLmNvbXBvbmVudC50cyIsIm56LXBvcG92ZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpILE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7OztJQ2UvRCw2QkFBOEM7SUFBQSxZQUFXO0lBQUEsMEJBQWU7OztJQUExQixlQUFXO0lBQVgsb0NBQVc7OztJQUQzRCw4QkFDRTtJQUFBLHlHQUE4QztJQUNoRCxpQkFBTTs7O0lBRFUsZUFBK0I7SUFBL0IsdURBQStCOzs7SUFHN0MsNkJBQWdEO0lBQUEsWUFBYTtJQUFBLDBCQUFlOzs7SUFBNUIsZUFBYTtJQUFiLHNDQUFhOzs7SUFoQnZFLDhCQVFFO0lBQUEsOEJBQ0U7SUFBQSx5QkFBcUM7SUFDckMsOEJBQ0U7SUFBQSwyQkFDRTtJQUFBLGlGQUNFO0lBRUYsOEJBQ0U7SUFBQSxtR0FBZ0Q7SUFDbEQsaUJBQU07SUFDUixpQkFBTTtJQUNSLGlCQUFNO0lBQ1IsaUJBQU07SUFDUixpQkFBTTs7O0lBbkJKLDRDQUFxQixvQ0FBQSx3RkFBQSwyRkFBQSw0QkFBQTtJQVVnQixlQUFhO0lBQWIscUNBQWE7SUFJNUIsZUFBaUM7SUFBakMseURBQWlDOzs7QURBM0QsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGtCQUFrQjtJQUd4RCxZQUFZLEdBQXNCLEVBQTZCLFdBQW9DO1FBQ2pHLEtBQUssQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFEcUMsZ0JBQVcsR0FBWCxXQUFXLENBQXlCO1FBRm5HLFlBQU8sR0FBRyx1QkFBdUIsQ0FBQztJQUlsQyxDQUFDO0lBRVMsT0FBTztRQUNmLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BFLENBQUM7O29GQVRVLGtCQUFrQjt1REFBbEIsa0JBQWtCOztRQzdCL0Isa0JBQVk7UUFDWixpSEFZRTtRQU5BLDBIQUFpQixVQUFNLElBQUMsK0ZBQ2QsVUFBTSxJQURRLCtHQUVOLDRCQUF3QixJQUZsQjs7UUFGeEIsZUFBb0M7UUFBcEMsc0RBQW9DLG9EQUFBLGdEQUFBLHlDQUFBO29TRFd4QixDQUFDLGFBQWEsQ0FBQztrREFhaEIsa0JBQWtCO2NBaEI5QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFVBQVUsRUFBRSxDQUFDLGFBQWEsQ0FBQztnQkFDM0IsV0FBVyxFQUFFLDZCQUE2QjtnQkFDMUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixNQUFNLEVBQUU7b0JBQ047Ozs7S0FJQztpQkFDRjthQUNGOztzQkFJc0MsSUFBSTs7c0JBQUksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEhvc3QsIE9wdGlvbmFsLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSwgem9vbUJpZ01vdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IGlzVG9vbHRpcEVtcHR5LCBOelRvb2xUaXBDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL3Rvb2x0aXAnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei1wb3BvdmVyJyxcclxuICBleHBvcnRBczogJ256UG9wb3ZlckNvbXBvbmVudCcsXHJcbiAgYW5pbWF0aW9uczogW3pvb21CaWdNb3Rpb25dLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1wb3BvdmVyLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICAuYW50LXBvcG92ZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56UG9wb3ZlckNvbXBvbmVudCBleHRlbmRzIE56VG9vbFRpcENvbXBvbmVudCB7XHJcbiAgX3ByZWZpeCA9ICdhbnQtcG9wb3Zlci1wbGFjZW1lbnQnO1xyXG5cclxuICBjb25zdHJ1Y3RvcihjZHI6IENoYW5nZURldGVjdG9yUmVmLCBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmUpIHtcclxuICAgIHN1cGVyKGNkciwgbm9BbmltYXRpb24pO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGlzRW1wdHkoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gaXNUb29sdGlwRW1wdHkodGhpcy50aXRsZSkgJiYgaXNUb29sdGlwRW1wdHkodGhpcy5jb250ZW50KTtcclxuICB9XHJcbn1cclxuIiwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48bmctdGVtcGxhdGVcclxuICAjb3ZlcmxheT1cImNka0Nvbm5lY3RlZE92ZXJsYXlcIlxyXG4gIGNka0Nvbm5lY3RlZE92ZXJsYXlcclxuICBuekNvbm5lY3RlZE92ZXJsYXlcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9yaWdpbl09XCJvcmlnaW5cIlxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5SGFzQmFja2Ryb3BdPVwiX2hhc0JhY2tkcm9wXCJcclxuICAoYmFja2Ryb3BDbGljayk9XCJoaWRlKClcIlxyXG4gIChkZXRhY2gpPVwiaGlkZSgpXCJcclxuICAocG9zaXRpb25DaGFuZ2UpPVwib25Qb3NpdGlvbkNoYW5nZSgkZXZlbnQpXCJcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uc109XCJfcG9zaXRpb25zXCJcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9wZW5dPVwiX3Zpc2libGVcIlxyXG4+XHJcbiAgPGRpdlxyXG4gICAgY2xhc3M9XCJhbnQtcG9wb3ZlclwiXHJcbiAgICBbbmdDbGFzc109XCJfY2xhc3NNYXBcIlxyXG4gICAgW25nU3R5bGVdPVwibnpPdmVybGF5U3R5bGVcIlxyXG4gICAgW0AuZGlzYWJsZWRdPVwibm9BbmltYXRpb24/Lm56Tm9BbmltYXRpb25cIlxyXG4gICAgW256Tm9BbmltYXRpb25dPVwibm9BbmltYXRpb24/Lm56Tm9BbmltYXRpb25cIlxyXG4gICAgW0B6b29tQmlnTW90aW9uXT1cIidhY3RpdmUnXCJcclxuICA+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYW50LXBvcG92ZXItY29udGVudFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LXBvcG92ZXItYXJyb3dcIj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImFudC1wb3BvdmVyLWlubmVyXCIgcm9sZT1cInRvb2x0aXBcIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFudC1wb3BvdmVyLXRpdGxlXCIgKm5nSWY9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwidGl0bGVcIj57eyB0aXRsZSB9fTwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXBvcG92ZXItaW5uZXItY29udGVudFwiPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiY29udGVudFwiPnt7IGNvbnRlbnQgfX08L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=
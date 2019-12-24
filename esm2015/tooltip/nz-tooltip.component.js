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
const _c0 = ["nzTemplate"];
function NzToolTipComponent_ng_template_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r310 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r310.title);
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
    const ctx_r309 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r309._classMap)("ngStyle", ctx_r309.nzOverlayStyle)("@.disabled", ctx_r309.noAnimation == null ? null : ctx_r309.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r309.noAnimation == null ? null : ctx_r309.noAnimation.nzNoAnimation)("@zoomBigMotion", "active");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r309.title);
} }
const _c1 = ["*"];
export class NzToolTipComponent extends NzTooltipBaseComponent {
    constructor(cdr, noAnimation) {
        super(cdr);
        this.noAnimation = noAnimation;
    }
    isEmpty() {
        return isTooltipEmpty(this.title);
    }
}
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
                    `
      .ant-tooltip {
        position: relative;
      }
    `
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3Rvb2x0aXAvIiwic291cmNlcyI6WyJuei10b29sdGlwLmNvbXBvbmVudC50cyIsIm56LXRvb2x0aXAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxFQUNMLFFBQVEsRUFDUixXQUFXLEVBQ1gsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxzQkFBc0IsRUFBWSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVyRixPQUFPLEVBQUUsY0FBYyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7Ozs7SUNFN0UsNkJBQThDO0lBQUEsWUFBVztJQUFBLDBCQUFlOzs7SUFBMUIsZUFBVztJQUFYLG9DQUFXOzs7SUFYL0QsOEJBUUU7SUFBQSw4QkFDRTtJQUFBLHlCQUFxQztJQUNyQyw4QkFDRTtJQUFBLG1HQUE4QztJQUNoRCxpQkFBTTtJQUNSLGlCQUFNO0lBQ1IsaUJBQU07OztJQVpKLDRDQUFxQixvQ0FBQSx3RkFBQSwyRkFBQSw0QkFBQTtJQVNILGVBQStCO0lBQS9CLHVEQUErQjs7O0FEZ0JyRCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsc0JBQXNCO0lBSTVELFlBQVksR0FBc0IsRUFBNkIsV0FBb0M7UUFDakcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRGtELGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtJQUVuRyxDQUFDO0lBRVMsT0FBTztRQUNmLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDOztvRkFWVSxrQkFBa0I7dURBQWxCLGtCQUFrQjs7Ozs7OztRQ3hDL0Isa0JBQVk7UUFDWixpSEFZRTtRQUpBLDBIQUFpQixVQUFNLElBQUMsK0ZBQ2QsVUFBTSxJQURRLCtHQUVOLDRCQUF3QixJQUZsQjs7UUFKeEIsZUFBb0M7UUFBcEMsc0RBQW9DLHlDQUFBLG9EQUFBLGdEQUFBOzJSRHdCeEIsQ0FBQyxhQUFhLENBQUM7a0RBV2hCLGtCQUFrQjtjQWhCOUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFVBQVUsRUFBRSxDQUFDLGFBQWEsQ0FBQztnQkFDM0IsV0FBVyxFQUFFLDZCQUE2QjtnQkFDMUMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsTUFBTSxFQUFFO29CQUNOOzs7O0tBSUM7aUJBQ0Y7YUFDRjs7c0JBS3NDLElBQUk7O3NCQUFJLFFBQVE7O2tCQUhwRCxLQUFLOztrQkFDTCxZQUFZO21CQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBIb3N0LFxyXG4gIElucHV0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOek5vQW5pbWF0aW9uRGlyZWN0aXZlLCBOelRTVHlwZSwgem9vbUJpZ01vdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBpc1Rvb2x0aXBFbXB0eSwgTnpUb29sdGlwQmFzZUNvbXBvbmVudCB9IGZyb20gJy4vbnotdG9vbHRpcC1iYXNlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LXRvb2x0aXAnLFxyXG4gIGV4cG9ydEFzOiAnbnpUb29sdGlwQ29tcG9uZW50JyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGFuaW1hdGlvbnM6IFt6b29tQmlnTW90aW9uXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotdG9vbHRpcC5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIC5hbnQtdG9vbHRpcCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpUb29sVGlwQ29tcG9uZW50IGV4dGVuZHMgTnpUb29sdGlwQmFzZUNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgbnpUaXRsZTogTnpUU1R5cGUgfCBudWxsO1xyXG4gIEBDb250ZW50Q2hpbGQoJ256VGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBuelRpdGxlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBjb25zdHJ1Y3RvcihjZHI6IENoYW5nZURldGVjdG9yUmVmLCBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmUpIHtcclxuICAgIHN1cGVyKGNkcik7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgaXNFbXB0eSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBpc1Rvb2x0aXBFbXB0eSh0aGlzLnRpdGxlKTtcclxuICB9XHJcbn1cclxuIiwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48bmctdGVtcGxhdGVcclxuICAjb3ZlcmxheT1cImNka0Nvbm5lY3RlZE92ZXJsYXlcIlxyXG4gIGNka0Nvbm5lY3RlZE92ZXJsYXlcclxuICBuekNvbm5lY3RlZE92ZXJsYXlcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9yaWdpbl09XCJvcmlnaW5cIlxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5T3Blbl09XCJfdmlzaWJsZVwiXHJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlIYXNCYWNrZHJvcF09XCJfaGFzQmFja2Ryb3BcIlxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25zXT1cIl9wb3NpdGlvbnNcIlxyXG4gIChiYWNrZHJvcENsaWNrKT1cImhpZGUoKVwiXHJcbiAgKGRldGFjaCk9XCJoaWRlKClcIlxyXG4gIChwb3NpdGlvbkNoYW5nZSk9XCJvblBvc2l0aW9uQ2hhbmdlKCRldmVudClcIlxyXG4+XHJcbiAgPGRpdlxyXG4gICAgY2xhc3M9XCJhbnQtdG9vbHRpcFwiXHJcbiAgICBbbmdDbGFzc109XCJfY2xhc3NNYXBcIlxyXG4gICAgW25nU3R5bGVdPVwibnpPdmVybGF5U3R5bGVcIlxyXG4gICAgW0AuZGlzYWJsZWRdPVwibm9BbmltYXRpb24/Lm56Tm9BbmltYXRpb25cIlxyXG4gICAgW256Tm9BbmltYXRpb25dPVwibm9BbmltYXRpb24/Lm56Tm9BbmltYXRpb25cIlxyXG4gICAgW0B6b29tQmlnTW90aW9uXT1cIidhY3RpdmUnXCJcclxuICA+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYW50LXRvb2x0aXAtY29udGVudFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LXRvb2x0aXAtYXJyb3dcIj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImFudC10b29sdGlwLWlubmVyXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cInRpdGxlXCI+e3sgdGl0bGUgfX08L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuIl19
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Host, Optional, ViewEncapsulation } from '@angular/core';
import { NzNoAnimationDirective, zoomBigMotion } from 'ng-zorro-antd/core';
import { NzToolTipComponent } from 'ng-zorro-antd/tooltip';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
import * as i2 from "@angular/cdk/overlay";
import * as i3 from "@angular/common";
import * as i4 from "ng-zorro-antd/button";
import * as i5 from "ng-zorro-antd/icon";
import * as i6 from "ng-zorro-antd/i18n";
function NzPopconfirmComponent_ng_template_1_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "i", 14);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1391 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzType", ctx_r1391.nzIcon || "exclamation-circle");
} }
function NzPopconfirmComponent_ng_template_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzPopconfirmComponent_ng_template_1_ng_container_7_ng_container_1_Template, 2, 1, "ng-container", 8);
    i0.ɵɵelementStart(2, "div", 13);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1386 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r1386.nzIcon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1386.title);
} }
function NzPopconfirmComponent_ng_template_1_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1387 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1387.nzCancelText);
} }
function NzPopconfirmComponent_ng_template_1_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "nzI18n");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "Modal.cancelText"));
} }
function NzPopconfirmComponent_ng_template_1_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1389 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1389.nzOkText);
} }
function NzPopconfirmComponent_ng_template_1_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "nzI18n");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "Modal.okText"));
} }
function NzPopconfirmComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r1393 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵelement(2, "div", 4);
    i0.ɵɵelementStart(3, "div", 5);
    i0.ɵɵelementStart(4, "div");
    i0.ɵɵelementStart(5, "div", 6);
    i0.ɵɵelementStart(6, "div", 7);
    i0.ɵɵtemplate(7, NzPopconfirmComponent_ng_template_1_ng_container_7_Template, 4, 2, "ng-container", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 9);
    i0.ɵɵelementStart(9, "button", 10);
    i0.ɵɵlistener("click", function NzPopconfirmComponent_ng_template_1_Template_button_click_9_listener($event) { i0.ɵɵrestoreView(_r1393); const ctx_r1392 = i0.ɵɵnextContext(); return ctx_r1392.onCancel(); });
    i0.ɵɵtemplate(10, NzPopconfirmComponent_ng_template_1_ng_container_10_Template, 2, 1, "ng-container", 11);
    i0.ɵɵtemplate(11, NzPopconfirmComponent_ng_template_1_ng_container_11_Template, 3, 3, "ng-container", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 12);
    i0.ɵɵlistener("click", function NzPopconfirmComponent_ng_template_1_Template_button_click_12_listener($event) { i0.ɵɵrestoreView(_r1393); const ctx_r1394 = i0.ɵɵnextContext(); return ctx_r1394.onConfirm(); });
    i0.ɵɵtemplate(13, NzPopconfirmComponent_ng_template_1_ng_container_13_Template, 2, 1, "ng-container", 11);
    i0.ɵɵtemplate(14, NzPopconfirmComponent_ng_template_1_ng_container_14_Template, 3, 3, "ng-container", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1385 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r1385._classMap)("ngStyle", ctx_r1385.nzOverlayStyle)("@.disabled", ctx_r1385.noAnimation == null ? null : ctx_r1385.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r1385.noAnimation == null ? null : ctx_r1385.noAnimation.nzNoAnimation)("@zoomBigMotion", "active");
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r1385.title);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("nzSize", "small");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1385.nzCancelText);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1385.nzCancelText);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzSize", "small")("nzType", ctx_r1385.nzOkType);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1385.nzOkText);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1385.nzOkText);
} }
const _c0 = ["*"];
export class NzPopconfirmComponent extends NzToolTipComponent {
    constructor(cdr, noAnimation) {
        super(cdr, noAnimation);
        this.noAnimation = noAnimation;
        this.nzCondition = false;
        this.nzOkType = 'primary';
        this.nzOnCancel = new Subject();
        this.nzOnConfirm = new Subject();
        this._trigger = 'click';
        this._prefix = 'ant-popover-placement';
        this._hasBackdrop = true;
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this.nzOnCancel.complete();
        this.nzOnConfirm.complete();
    }
    show() {
        if (!this.nzCondition) {
            super.show();
        }
        else {
            this.onConfirm();
        }
    }
    onCancel() {
        this.nzOnCancel.next();
        super.hide();
    }
    onConfirm() {
        this.nzOnConfirm.next();
        super.hide();
    }
}
/** @nocollapse */ NzPopconfirmComponent.ɵfac = function NzPopconfirmComponent_Factory(t) { return new (t || NzPopconfirmComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.NzNoAnimationDirective, 9)); };
/** @nocollapse */ NzPopconfirmComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzPopconfirmComponent, selectors: [["nz-popconfirm"]], exportAs: ["nzPopconfirmComponent"], features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 3, vars: 4, consts: [["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayPositions", "cdkConnectedOverlayOpen", "backdropClick", "detach", "positionChange"], ["overlay", "cdkConnectedOverlay"], [1, "ant-popover", 3, "ngClass", "ngStyle", "nzNoAnimation"], [1, "ant-popover-content"], [1, "ant-popover-arrow"], [1, "ant-popover-inner"], [1, "ant-popover-inner-content"], [1, "ant-popover-message"], [4, "nzStringTemplateOutlet"], [1, "ant-popover-buttons"], ["nz-button", "", 3, "nzSize", "click"], [4, "ngIf"], ["nz-button", "", 3, "nzSize", "nzType", "click"], [1, "ant-popover-message-title"], ["nz-icon", "", "nzTheme", "fill", 3, "nzType"]], template: function NzPopconfirmComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
        i0.ɵɵtemplate(1, NzPopconfirmComponent_ng_template_1_Template, 15, 13, "ng-template", 0, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵlistener("backdropClick", function NzPopconfirmComponent_Template_ng_template_backdropClick_1_listener($event) { return ctx.hide(); })("detach", function NzPopconfirmComponent_Template_ng_template_detach_1_listener($event) { return ctx.hide(); })("positionChange", function NzPopconfirmComponent_Template_ng_template_positionChange_1_listener($event) { return ctx.onPositionChange($event); });
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("cdkConnectedOverlayOrigin", ctx.origin)("cdkConnectedOverlayHasBackdrop", ctx._hasBackdrop)("cdkConnectedOverlayPositions", ctx._positions)("cdkConnectedOverlayOpen", ctx._visible);
    } }, directives: [i2.CdkConnectedOverlay, i1.NzConnectedOverlayDirective, i3.NgClass, i3.NgStyle, i1.NzNoAnimationDirective, i1.NzStringTemplateOutletDirective, i4.NzButtonComponent, i3.NgIf, i5.NzIconDirective], pipes: [i6.NzI18nPipe], styles: ["\n      .ant-popover {\n        position: relative;\n      }\n    "], encapsulation: 2, data: { animation: [zoomBigMotion] }, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzPopconfirmComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-popconfirm',
                exportAs: 'nzPopconfirmComponent',
                preserveWhitespaces: false,
                animations: [zoomBigMotion],
                templateUrl: './nz-popconfirm.component.html',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcG9wY29uZmlybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3BvcGNvbmZpcm0vIiwic291cmNlcyI6WyJuei1wb3Bjb25maXJtLmNvbXBvbmVudC50cyIsIm56LXBvcGNvbmZpcm0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULElBQUksRUFFSixRQUFRLEVBRVIsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsa0JBQWtCLEVBQW9CLE1BQU0sdUJBQXVCLENBQUM7QUFDN0UsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7Ozs7O0lDT2YsNkJBQ0U7SUFBQSx3QkFBd0U7SUFDMUUsMEJBQWU7OztJQURGLGVBQXlDO0lBQXpDLGlFQUF5Qzs7O0lBRnhELDZCQUNFO0lBQUEscUhBQ0U7SUFFRiwrQkFBdUM7SUFBQSxZQUFXO0lBQUEsaUJBQU07SUFDMUQsMEJBQWU7OztJQUpDLGVBQWdDO0lBQWhDLHlEQUFnQztJQUdQLGVBQVc7SUFBWCxxQ0FBVzs7O0lBS2xELDZCQUFtQztJQUFBLFlBQWtCO0lBQUEsMEJBQWU7OztJQUFqQyxlQUFrQjtJQUFsQiw0Q0FBa0I7OztJQUNyRCw2QkFBb0M7SUFBQSxZQUFpQzs7SUFBQSwwQkFBZTs7SUFBaEQsZUFBaUM7SUFBakMsOERBQWlDOzs7SUFHckUsNkJBQStCO0lBQUEsWUFBYztJQUFBLDBCQUFlOzs7SUFBN0IsZUFBYztJQUFkLHdDQUFjOzs7SUFDN0MsNkJBQWdDO0lBQUEsWUFBNkI7O0lBQUEsMEJBQWU7O0lBQTVDLGVBQTZCO0lBQTdCLDBEQUE2Qjs7OztJQTVCM0UsOEJBUUU7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Ii8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgSG9zdCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT3B0aW9uYWwsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56Tm9BbmltYXRpb25EaXJlY3RpdmUsIHpvb21CaWdNb3Rpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOelRvb2xUaXBDb21wb25lbnQsIE56VG9vbHRpcFRyaWdnZXIgfSBmcm9tICduZy16b3Jyby1hbnRkL3Rvb2x0aXAnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHNlbGVjdG9yOiAnbnotcG9wY29uZmlybScsXHJcbiAgZXhwb3J0QXM6ICduelBvcGNvbmZpcm1Db21wb25lbnQnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGFuaW1hdGlvbnM6IFt6b29tQmlnTW90aW9uXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotcG9wY29uZmlybS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIC5hbnQtcG9wb3ZlciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpQb3Bjb25maXJtQ29tcG9uZW50IGV4dGVuZHMgTnpUb29sVGlwQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICBuekNhbmNlbFRleHQ6IHN0cmluZztcclxuICBuekNvbmRpdGlvbiA9IGZhbHNlO1xyXG4gIG56SWNvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgbnpPa1RleHQ6IHN0cmluZztcclxuICBuek9rVHlwZTogc3RyaW5nID0gJ3ByaW1hcnknO1xyXG5cclxuICByZWFkb25seSBuek9uQ2FuY2VsID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICByZWFkb25seSBuek9uQ29uZmlybSA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gIHByb3RlY3RlZCBfdHJpZ2dlcjogTnpUb29sdGlwVHJpZ2dlciA9ICdjbGljayc7XHJcblxyXG4gIF9wcmVmaXggPSAnYW50LXBvcG92ZXItcGxhY2VtZW50JztcclxuICBfaGFzQmFja2Ryb3AgPSB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihjZHI6IENoYW5nZURldGVjdG9yUmVmLCBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmUpIHtcclxuICAgIHN1cGVyKGNkciwgbm9BbmltYXRpb24pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xyXG5cclxuICAgIHRoaXMubnpPbkNhbmNlbC5jb21wbGV0ZSgpO1xyXG4gICAgdGhpcy5uek9uQ29uZmlybS5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgc2hvdygpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5uekNvbmRpdGlvbikge1xyXG4gICAgICBzdXBlci5zaG93KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm9uQ29uZmlybSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DYW5jZWwoKTogdm9pZCB7XHJcbiAgICB0aGlzLm56T25DYW5jZWwubmV4dCgpO1xyXG4gICAgc3VwZXIuaGlkZSgpO1xyXG4gIH1cclxuXHJcbiAgb25Db25maXJtKCk6IHZvaWQge1xyXG4gICAgdGhpcy5uek9uQ29uZmlybS5uZXh0KCk7XHJcbiAgICBzdXBlci5oaWRlKCk7XHJcbiAgfVxyXG59XHJcbiIsIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPG5nLXRlbXBsYXRlXHJcbiAgI292ZXJsYXk9XCJjZGtDb25uZWN0ZWRPdmVybGF5XCJcclxuICBjZGtDb25uZWN0ZWRPdmVybGF5XHJcbiAgbnpDb25uZWN0ZWRPdmVybGF5XHJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcmlnaW5dPVwib3JpZ2luXCJcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheUhhc0JhY2tkcm9wXT1cIl9oYXNCYWNrZHJvcFwiXHJcbiAgKGJhY2tkcm9wQ2xpY2spPVwiaGlkZSgpXCJcclxuICAoZGV0YWNoKT1cImhpZGUoKVwiXHJcbiAgKHBvc2l0aW9uQ2hhbmdlKT1cIm9uUG9zaXRpb25DaGFuZ2UoJGV2ZW50KVwiXHJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbnNdPVwiX3Bvc2l0aW9uc1wiXHJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcGVuXT1cIl92aXNpYmxlXCJcclxuPlxyXG4gIDxkaXZcclxuICAgIGNsYXNzPVwiYW50LXBvcG92ZXJcIlxyXG4gICAgW25nQ2xhc3NdPVwiX2NsYXNzTWFwXCJcclxuICAgIFtuZ1N0eWxlXT1cIm56T3ZlcmxheVN0eWxlXCJcclxuICAgIFtALmRpc2FibGVkXT1cIm5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCJcclxuICAgIFtuek5vQW5pbWF0aW9uXT1cIm5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCJcclxuICAgIFtAem9vbUJpZ01vdGlvbl09XCInYWN0aXZlJ1wiXHJcbiAgPlxyXG4gICAgPGRpdiBjbGFzcz1cImFudC1wb3BvdmVyLWNvbnRlbnRcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImFudC1wb3BvdmVyLWFycm93XCI+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtcG9wb3Zlci1pbm5lclwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXBvcG92ZXItaW5uZXItY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXBvcG92ZXItbWVzc2FnZVwiPlxyXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm56SWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8aSBuei1pY29uIFtuelR5cGVdPVwibnpJY29uIHx8ICdleGNsYW1hdGlvbi1jaXJjbGUnXCIgbnpUaGVtZT1cImZpbGxcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtcG9wb3Zlci1tZXNzYWdlLXRpdGxlXCI+e3sgdGl0bGUgfX08L2Rpdj5cclxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtcG9wb3Zlci1idXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBuei1idXR0b24gW256U2l6ZV09XCInc21hbGwnXCIgKGNsaWNrKT1cIm9uQ2FuY2VsKClcIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJuekNhbmNlbFRleHRcIj57eyBuekNhbmNlbFRleHQgfX08L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhbnpDYW5jZWxUZXh0XCI+e3sgJ01vZGFsLmNhbmNlbFRleHQnIHwgbnpJMThuIH19PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBuei1idXR0b24gW256U2l6ZV09XCInc21hbGwnXCIgW256VHlwZV09XCJuek9rVHlwZVwiIChjbGljayk9XCJvbkNvbmZpcm0oKVwiPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm56T2tUZXh0XCI+e3sgbnpPa1RleHQgfX08L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhbnpPa1RleHRcIj57eyAnTW9kYWwub2tUZXh0JyB8IG56STE4biB9fTwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=
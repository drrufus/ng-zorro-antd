/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ContentChildren, ElementRef, Input, QueryList, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { reverseChildNodes } from 'ng-zorro-antd/core';
import { NzTimelineItemComponent } from './nz-timeline-item.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/platform";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/core";
import * as i4 from "ng-zorro-antd/icon";
var _c0 = ["pending"];
var _c1 = ["timeline"];
function NzTimelineComponent_li_3_ng_container_3_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 9);
} }
function NzTimelineComponent_li_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, NzTimelineComponent_li_3_ng_container_3_i_2_Template, 1, 0, "i", 8);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r967 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r967.nzPendingDot, "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r967.nzPendingDot);
} }
function NzTimelineComponent_li_3_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r968 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r968.isPendingBoolean ? "" : ctx_r968.nzPending, " ");
} }
function NzTimelineComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 3);
    i0.ɵɵelement(1, "div", 4);
    i0.ɵɵelementStart(2, "div", 5);
    i0.ɵɵtemplate(3, NzTimelineComponent_li_3_ng_container_3_Template, 3, 2, "ng-container", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 7);
    i0.ɵɵtemplate(5, NzTimelineComponent_li_3_ng_container_5_Template, 2, 1, "ng-container", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r966 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r966.nzPendingDot);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r966.nzPending);
} }
var _c2 = ["*"];
var NzTimelineComponent = /** @class */ (function () {
    function NzTimelineComponent(cdr, platform) {
        this.cdr = cdr;
        this.platform = platform;
        this.nzReverse = false;
        this.isPendingBoolean = false;
        this.destroy$ = new Subject();
    }
    NzTimelineComponent.prototype.ngOnChanges = function (changes) {
        var modeChanges = changes.nzMode;
        var reverseChanges = changes.nzReverse;
        var pendingChanges = changes.nzPending;
        if (modeChanges && (modeChanges.previousValue !== modeChanges.currentValue || modeChanges.isFirstChange())) {
            this.updateChildren();
        }
        if (reverseChanges && reverseChanges.previousValue !== reverseChanges.currentValue && !reverseChanges.isFirstChange()) {
            this.reverseChildTimelineDots();
        }
        if (pendingChanges) {
            this.isPendingBoolean = pendingChanges.currentValue === true;
        }
    };
    NzTimelineComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.updateChildren();
        if (this.listOfTimeLine) {
            this.listOfTimeLine.changes.pipe(takeUntil(this.destroy$)).subscribe(function () {
                _this.updateChildren();
            });
        }
    };
    NzTimelineComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzTimelineComponent.prototype.updateChildren = function () {
        var _this = this;
        if (this.listOfTimeLine && this.listOfTimeLine.length) {
            var length_1 = this.listOfTimeLine.length;
            this.listOfTimeLine.toArray().forEach(function (item, index) {
                item.isLast = !_this.nzReverse ? index === length_1 - 1 : index === 0;
                item.position =
                    _this.nzMode === 'left' || !_this.nzMode
                        ? undefined
                        : _this.nzMode === 'right'
                            ? 'right'
                            : _this.nzMode === 'alternate' && index % 2 === 0
                                ? 'left'
                                : 'right';
                item.detectChanges();
            });
            this.cdr.markForCheck();
        }
    };
    NzTimelineComponent.prototype.reverseChildTimelineDots = function () {
        if (this.platform.isBrowser) {
            reverseChildNodes(this.timeline.nativeElement);
            this.updateChildren();
        }
    };
    /** @nocollapse */ NzTimelineComponent.ɵfac = function NzTimelineComponent_Factory(t) { return new (t || NzTimelineComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.Platform)); };
    /** @nocollapse */ NzTimelineComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzTimelineComponent, selectors: [["nz-timeline"]], contentQueries: function NzTimelineComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, _c0, true);
            i0.ɵɵcontentQuery(dirIndex, NzTimelineItemComponent, false);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._pendingContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.listOfTimeLine = _t);
        } }, viewQuery: function NzTimelineComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c1, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.timeline = _t.first);
        } }, inputs: { nzMode: "nzMode", nzPending: "nzPending", nzPendingDot: "nzPendingDot", nzReverse: "nzReverse" }, exportAs: ["nzTimeline"], features: [i0.ɵɵNgOnChangesFeature()], ngContentSelectors: _c2, decls: 4, vars: 5, consts: [[1, "ant-timeline"], ["timeline", ""], ["class", "ant-timeline-item ant-timeline-item-pending", 4, "ngIf"], [1, "ant-timeline-item", "ant-timeline-item-pending"], [1, "ant-timeline-item-tail"], [1, "ant-timeline-item-head", "ant-timeline-item-head-custom", "ant-timeline-item-head-blue"], [4, "nzStringTemplateOutlet"], [1, "ant-timeline-item-content"], ["nz-icon", "", "nzType", "loading", 4, "ngIf"], ["nz-icon", "", "nzType", "loading"]], template: function NzTimelineComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "ul", 0, 1);
            i0.ɵɵprojection(2);
            i0.ɵɵtemplate(3, NzTimelineComponent_li_3_Template, 6, 2, "li", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassProp("ant-timeline-right", ctx.nzMode === "right")("ant-timeline-alternate", ctx.nzMode === "alternate")("ant-timeline-pending", !!ctx.nzPending)("ant-timeline-reverse", ctx.nzReverse);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.nzPending);
        } }, directives: [i2.NgIf, i3.NzStringTemplateOutletDirective, i4.NzIconDirective], encapsulation: 2, changeDetection: 0 });
    return NzTimelineComponent;
}());
export { NzTimelineComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzTimelineComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                selector: 'nz-timeline',
                exportAs: 'nzTimeline',
                templateUrl: './nz-timeline.component.html'
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.Platform }]; }, { timeline: [{
            type: ViewChild,
            args: ['timeline', { static: false }]
        }], listOfTimeLine: [{
            type: ContentChildren,
            args: [NzTimelineItemComponent]
        }], _pendingContent: [{
            type: ContentChild,
            args: ['pending', { static: false }]
        }], nzMode: [{
            type: Input
        }], nzPending: [{
            type: Input
        }], nzPendingDot: [{
            type: Input
        }], nzReverse: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGltZWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90aW1lbGluZS8iLCJzb3VyY2VzIjpbIm56LXRpbWVsaW5lLmNvbXBvbmVudC50cyIsIm56LXRpbWVsaW5lLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLGVBQWUsRUFDZixVQUFVLEVBQ1YsS0FBSyxFQUdMLFNBQVMsRUFFVCxXQUFXLEVBQ1gsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV2RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7Ozs7O0lDaEI3Qyx1QkFBc0Q7OztJQUQxRSw2QkFDRTtJQUFBLFlBQWtCO0lBQUEsb0ZBQWtEO0lBQ3RFLDBCQUFlOzs7SUFEYixlQUFrQjtJQUFsQixxREFBa0I7SUFBRyxlQUFxQjtJQUFyQiw2Q0FBcUI7OztJQUk1Qyw2QkFDRTtJQUFBLFlBQ0Y7SUFBQSwwQkFBZTs7O0lBRGIsZUFDRjtJQURFLG9GQUNGOzs7SUFWSiw2QkFDRTtJQUFBLHlCQUEwQztJQUMxQyw4QkFDRTtJQUFBLDJGQUNFO0lBRUosaUJBQU07SUFDTiw4QkFDRTtJQUFBLDJGQUNFO0lBRUosaUJBQU07SUFDUixpQkFBSzs7O0lBVGEsZUFBc0M7SUFBdEMsOERBQXNDO0lBS3RDLGVBQW1DO0lBQW5DLDJEQUFtQzs7O0FE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QUNFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDM0IsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUE0QixDQUFDLENBQUM7WUFDOUQsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQzswRkF0RVUsbUJBQW1COzREQUFuQixtQkFBbUI7O3dDQUViLHVCQUF1Qjs7Ozs7Ozs7Ozs7O1lDN0MxQyxnQ0FRRTtZQUNBLGtCQUFZO1lBRVosa0VBQ0U7WUFZSixpQkFBSzs7WUF0QkgsNERBQStDLHNEQUFBLHlDQUFBLHVDQUFBO1lBUzNDLGVBQWlCO1lBQWpCLG9DQUFpQjs7OEJEWHZCO0NBa0hDLEFBL0VELElBK0VDO1NBdkVZLG1CQUFtQjtrREFBbkIsbUJBQW1CO2NBUi9CLFNBQVM7ZUFBQztnQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUUsWUFBWTtnQkFDdEIsV0FBVyxFQUFFLDhCQUE4QjthQUM1Qzs7a0JBRUUsU0FBUzttQkFBQyxVQUFVLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOztrQkFDdkMsZUFBZTttQkFBQyx1QkFBdUI7O2tCQUN2QyxZQUFZO21CQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7O2tCQUV6QyxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgcmV2ZXJzZUNoaWxkTm9kZXMgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpUaW1lbGluZUl0ZW1Db21wb25lbnQgfSBmcm9tICcuL256LXRpbWVsaW5lLWl0ZW0uY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCB0eXBlIE56VGltZWxpbmVNb2RlID0gJ2xlZnQnIHwgJ2FsdGVybmF0ZScgfCAncmlnaHQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBzZWxlY3RvcjogJ256LXRpbWVsaW5lJyxcclxuICBleHBvcnRBczogJ256VGltZWxpbmUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei10aW1lbGluZS5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE56VGltZWxpbmVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgQFZpZXdDaGlsZCgndGltZWxpbmUnLCB7IHN0YXRpYzogZmFsc2UgfSkgdGltZWxpbmU6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oTnpUaW1lbGluZUl0ZW1Db21wb25lbnQpIGxpc3RPZlRpbWVMaW5lOiBRdWVyeUxpc3Q8TnpUaW1lbGluZUl0ZW1Db21wb25lbnQ+O1xyXG4gIEBDb250ZW50Q2hpbGQoJ3BlbmRpbmcnLCB7IHN0YXRpYzogZmFsc2UgfSkgX3BlbmRpbmdDb250ZW50OiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgQElucHV0KCkgbnpNb2RlOiBOelRpbWVsaW5lTW9kZTtcclxuICBASW5wdXQoKSBuelBlbmRpbmc6IHN0cmluZyB8IGJvb2xlYW4gfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuelBlbmRpbmdEb3Q6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56UmV2ZXJzZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBpc1BlbmRpbmdCb29sZWFuOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtKSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBjb25zdCBtb2RlQ2hhbmdlcyA9IGNoYW5nZXMubnpNb2RlO1xyXG4gICAgY29uc3QgcmV2ZXJzZUNoYW5nZXMgPSBjaGFuZ2VzLm56UmV2ZXJzZTtcclxuICAgIGNvbnN0IHBlbmRpbmdDaGFuZ2VzID0gY2hhbmdlcy5uelBlbmRpbmc7XHJcblxyXG4gICAgaWYgKG1vZGVDaGFuZ2VzICYmIChtb2RlQ2hhbmdlcy5wcmV2aW91c1ZhbHVlICE9PSBtb2RlQ2hhbmdlcy5jdXJyZW50VmFsdWUgfHwgbW9kZUNoYW5nZXMuaXNGaXJzdENoYW5nZSgpKSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuKCk7XHJcbiAgICB9XHJcbiAgICBpZiAocmV2ZXJzZUNoYW5nZXMgJiYgcmV2ZXJzZUNoYW5nZXMucHJldmlvdXNWYWx1ZSAhPT0gcmV2ZXJzZUNoYW5nZXMuY3VycmVudFZhbHVlICYmICFyZXZlcnNlQ2hhbmdlcy5pc0ZpcnN0Q2hhbmdlKCkpIHtcclxuICAgICAgdGhpcy5yZXZlcnNlQ2hpbGRUaW1lbGluZURvdHMoKTtcclxuICAgIH1cclxuICAgIGlmIChwZW5kaW5nQ2hhbmdlcykge1xyXG4gICAgICB0aGlzLmlzUGVuZGluZ0Jvb2xlYW4gPSBwZW5kaW5nQ2hhbmdlcy5jdXJyZW50VmFsdWUgPT09IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuKCk7XHJcbiAgICBpZiAodGhpcy5saXN0T2ZUaW1lTGluZSkge1xyXG4gICAgICB0aGlzLmxpc3RPZlRpbWVMaW5lLmNoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDaGlsZHJlbigpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZUNoaWxkcmVuKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubGlzdE9mVGltZUxpbmUgJiYgdGhpcy5saXN0T2ZUaW1lTGluZS5sZW5ndGgpIHtcclxuICAgICAgY29uc3QgbGVuZ3RoID0gdGhpcy5saXN0T2ZUaW1lTGluZS5sZW5ndGg7XHJcbiAgICAgIHRoaXMubGlzdE9mVGltZUxpbmUudG9BcnJheSgpLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaXRlbS5pc0xhc3QgPSAhdGhpcy5uelJldmVyc2UgPyBpbmRleCA9PT0gbGVuZ3RoIC0gMSA6IGluZGV4ID09PSAwO1xyXG4gICAgICAgIGl0ZW0ucG9zaXRpb24gPVxyXG4gICAgICAgICAgdGhpcy5uek1vZGUgPT09ICdsZWZ0JyB8fCAhdGhpcy5uek1vZGVcclxuICAgICAgICAgICAgPyB1bmRlZmluZWRcclxuICAgICAgICAgICAgOiB0aGlzLm56TW9kZSA9PT0gJ3JpZ2h0J1xyXG4gICAgICAgICAgICA/ICdyaWdodCdcclxuICAgICAgICAgICAgOiB0aGlzLm56TW9kZSA9PT0gJ2FsdGVybmF0ZScgJiYgaW5kZXggJSAyID09PSAwXHJcbiAgICAgICAgICAgID8gJ2xlZnQnXHJcbiAgICAgICAgICAgIDogJ3JpZ2h0JztcclxuICAgICAgICBpdGVtLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZXZlcnNlQ2hpbGRUaW1lbGluZURvdHMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgcmV2ZXJzZUNoaWxkTm9kZXModGhpcy50aW1lbGluZS5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KTtcclxuICAgICAgdGhpcy51cGRhdGVDaGlsZHJlbigpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8dWxcclxuICBjbGFzcz1cImFudC10aW1lbGluZVwiXHJcbiAgW2NsYXNzLmFudC10aW1lbGluZS1yaWdodF09XCJuek1vZGUgPT09ICdyaWdodCdcIlxyXG4gIFtjbGFzcy5hbnQtdGltZWxpbmUtYWx0ZXJuYXRlXT1cIm56TW9kZSA9PT0gJ2FsdGVybmF0ZSdcIlxyXG4gIFtjbGFzcy5hbnQtdGltZWxpbmUtcGVuZGluZ109XCIhIW56UGVuZGluZ1wiXHJcbiAgW2NsYXNzLmFudC10aW1lbGluZS1yZXZlcnNlXT1cIm56UmV2ZXJzZVwiXHJcbiAgI3RpbWVsaW5lXHJcbj5cclxuICA8IS0tIFVzZXIgaW5zZXJ0ZWQgdGltZWxpbmUgZG90cy4gLS0+XHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIDwhLS0gUGVuZGluZyBkb3QuIC0tPlxyXG4gIDxsaSAqbmdJZj1cIm56UGVuZGluZ1wiIGNsYXNzPVwiYW50LXRpbWVsaW5lLWl0ZW0gYW50LXRpbWVsaW5lLWl0ZW0tcGVuZGluZ1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImFudC10aW1lbGluZS1pdGVtLXRhaWxcIj48L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJhbnQtdGltZWxpbmUtaXRlbS1oZWFkIGFudC10aW1lbGluZS1pdGVtLWhlYWQtY3VzdG9tIGFudC10aW1lbGluZS1pdGVtLWhlYWQtYmx1ZVwiPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpQZW5kaW5nRG90XCI+XHJcbiAgICAgICAge3sgbnpQZW5kaW5nRG90IH19PGkgKm5nSWY9XCIhbnpQZW5kaW5nRG90XCIgbnotaWNvbiBuelR5cGU9XCJsb2FkaW5nXCI+PC9pPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImFudC10aW1lbGluZS1pdGVtLWNvbnRlbnRcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm56UGVuZGluZ1wiPlxyXG4gICAgICAgIHt7IGlzUGVuZGluZ0Jvb2xlYW4gPyAnJyA6IG56UGVuZGluZyB9fVxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gIDwvbGk+XHJcbjwvdWw+XHJcbiJdfQ==
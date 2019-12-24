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
const _c0 = ["pending"];
const _c1 = ["timeline"];
function NzTimelineComponent_li_3_ng_container_3_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 9);
} }
function NzTimelineComponent_li_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, NzTimelineComponent_li_3_ng_container_3_i_2_Template, 1, 0, "i", 8);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r960 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r960.nzPendingDot, "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r960.nzPendingDot);
} }
function NzTimelineComponent_li_3_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r961 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r961.isPendingBoolean ? "" : ctx_r961.nzPending, " ");
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
    const ctx_r959 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r959.nzPendingDot);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r959.nzPending);
} }
const _c2 = ["*"];
export class NzTimelineComponent {
    constructor(cdr, platform) {
        this.cdr = cdr;
        this.platform = platform;
        this.nzReverse = false;
        this.isPendingBoolean = false;
        this.destroy$ = new Subject();
    }
    ngOnChanges(changes) {
        const modeChanges = changes.nzMode;
        const reverseChanges = changes.nzReverse;
        const pendingChanges = changes.nzPending;
        if (modeChanges && (modeChanges.previousValue !== modeChanges.currentValue || modeChanges.isFirstChange())) {
            this.updateChildren();
        }
        if (reverseChanges && reverseChanges.previousValue !== reverseChanges.currentValue && !reverseChanges.isFirstChange()) {
            this.reverseChildTimelineDots();
        }
        if (pendingChanges) {
            this.isPendingBoolean = pendingChanges.currentValue === true;
        }
    }
    ngAfterContentInit() {
        this.updateChildren();
        if (this.listOfTimeLine) {
            this.listOfTimeLine.changes.pipe(takeUntil(this.destroy$)).subscribe(() => {
                this.updateChildren();
            });
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    updateChildren() {
        if (this.listOfTimeLine && this.listOfTimeLine.length) {
            const length = this.listOfTimeLine.length;
            this.listOfTimeLine.toArray().forEach((item, index) => {
                item.isLast = !this.nzReverse ? index === length - 1 : index === 0;
                item.position =
                    this.nzMode === 'left' || !this.nzMode
                        ? undefined
                        : this.nzMode === 'right'
                            ? 'right'
                            : this.nzMode === 'alternate' && index % 2 === 0
                                ? 'left'
                                : 'right';
                item.detectChanges();
            });
            this.cdr.markForCheck();
        }
    }
    reverseChildTimelineDots() {
        if (this.platform.isBrowser) {
            reverseChildNodes(this.timeline.nativeElement);
            this.updateChildren();
        }
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGltZWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90aW1lbGluZS8iLCJzb3VyY2VzIjpbIm56LXRpbWVsaW5lLmNvbXBvbmVudC50cyIsIm56LXRpbWVsaW5lLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLGVBQWUsRUFDZixVQUFVLEVBQ1YsS0FBSyxFQUdMLFNBQVMsRUFFVCxXQUFXLEVBQ1gsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV2RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7Ozs7O0lDaEI3Qyx1QkFBc0Q7OztJQUQxRSw2QkFDRTtJQUFBLFlBQWtCO0lBQUEsb0ZBQWtEO0lBQ3RFLDBCQUFlOzs7SUFEYixlQUFrQjtJQUFsQixxREFBa0I7SUFBRyxlQUFxQjtJQUFyQiw2Q0FBcUI7OztJQUk1Qyw2QkFDRTtJQUFBLFlBQ0Y7SUFBQSwwQkFBZTs7O0lBRGIsZUFDRjtJQURFLG9GQUNGOzs7SUFWSiw2QkFDRTtJQUFBLHlCQUEwQztJQUMxQyw4QkFDRTtJQUFBLDJGQUNFO0lBRUosaUJBQU07SUFDTiw4QkFDRTtJQUFBLDJGQUNFO0lBRUosaUJBQU07SUFDUixpQkFBSzs7O0lBVGEsZUFBc0M7SUFBdEMsOERBQXNDO0lBS3RDLGVBQW1DO0lBQW5DLDJEQUFtQzs7O0FE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QUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUMzQixpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQTRCLENBQUMsQ0FBQztZQUM5RCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDdkI7SUFDSCxDQUFDOztzRkF0RVUsbUJBQW1CO3dEQUFuQixtQkFBbUI7O29DQUViLHVCQUF1Qjs7Ozs7Ozs7Ozs7O1FDN0MxQyxnQ0FRRTtRQUNBLGtCQUFZO1FBRVosa0VBQ0U7UUFZSixpQkFBSzs7UUF0QkgsNERBQStDLHNEQUFBLHlDQUFBLHVDQUFBO1FBUzNDLGVBQWlCO1FBQWpCLG9DQUFpQjs7a0REZ0NWLG1CQUFtQjtjQVIvQixTQUFTO2VBQUM7Z0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFdBQVcsRUFBRSw4QkFBOEI7YUFDNUM7O2tCQUVFLFNBQVM7bUJBQUMsVUFBVSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7a0JBQ3ZDLGVBQWU7bUJBQUMsdUJBQXVCOztrQkFDdkMsWUFBWTttQkFBQyxTQUFTLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOztrQkFFekMsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IHJldmVyc2VDaGlsZE5vZGVzIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56VGltZWxpbmVJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9uei10aW1lbGluZS1pdGVtLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgdHlwZSBOelRpbWVsaW5lTW9kZSA9ICdsZWZ0JyB8ICdhbHRlcm5hdGUnIHwgJ3JpZ2h0JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgc2VsZWN0b3I6ICduei10aW1lbGluZScsXHJcbiAgZXhwb3J0QXM6ICduelRpbWVsaW5lJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotdGltZWxpbmUuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelRpbWVsaW5lQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIEBWaWV3Q2hpbGQoJ3RpbWVsaW5lJywgeyBzdGF0aWM6IGZhbHNlIH0pIHRpbWVsaW5lOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcclxuICBAQ29udGVudENoaWxkcmVuKE56VGltZWxpbmVJdGVtQ29tcG9uZW50KSBsaXN0T2ZUaW1lTGluZTogUXVlcnlMaXN0PE56VGltZWxpbmVJdGVtQ29tcG9uZW50PjtcclxuICBAQ29udGVudENoaWxkKCdwZW5kaW5nJywgeyBzdGF0aWM6IGZhbHNlIH0pIF9wZW5kaW5nQ29udGVudDogVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIEBJbnB1dCgpIG56TW9kZTogTnpUaW1lbGluZU1vZGU7XHJcbiAgQElucHV0KCkgbnpQZW5kaW5nOiBzdHJpbmcgfCBib29sZWFuIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpQZW5kaW5nRG90OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuelJldmVyc2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgaXNQZW5kaW5nQm9vbGVhbjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSkge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc3QgbW9kZUNoYW5nZXMgPSBjaGFuZ2VzLm56TW9kZTtcclxuICAgIGNvbnN0IHJldmVyc2VDaGFuZ2VzID0gY2hhbmdlcy5uelJldmVyc2U7XHJcbiAgICBjb25zdCBwZW5kaW5nQ2hhbmdlcyA9IGNoYW5nZXMubnpQZW5kaW5nO1xyXG5cclxuICAgIGlmIChtb2RlQ2hhbmdlcyAmJiAobW9kZUNoYW5nZXMucHJldmlvdXNWYWx1ZSAhPT0gbW9kZUNoYW5nZXMuY3VycmVudFZhbHVlIHx8IG1vZGVDaGFuZ2VzLmlzRmlyc3RDaGFuZ2UoKSkpIHtcclxuICAgICAgdGhpcy51cGRhdGVDaGlsZHJlbigpO1xyXG4gICAgfVxyXG4gICAgaWYgKHJldmVyc2VDaGFuZ2VzICYmIHJldmVyc2VDaGFuZ2VzLnByZXZpb3VzVmFsdWUgIT09IHJldmVyc2VDaGFuZ2VzLmN1cnJlbnRWYWx1ZSAmJiAhcmV2ZXJzZUNoYW5nZXMuaXNGaXJzdENoYW5nZSgpKSB7XHJcbiAgICAgIHRoaXMucmV2ZXJzZUNoaWxkVGltZWxpbmVEb3RzKCk7XHJcbiAgICB9XHJcbiAgICBpZiAocGVuZGluZ0NoYW5nZXMpIHtcclxuICAgICAgdGhpcy5pc1BlbmRpbmdCb29sZWFuID0gcGVuZGluZ0NoYW5nZXMuY3VycmVudFZhbHVlID09PSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy51cGRhdGVDaGlsZHJlbigpO1xyXG4gICAgaWYgKHRoaXMubGlzdE9mVGltZUxpbmUpIHtcclxuICAgICAgdGhpcy5saXN0T2ZUaW1lTGluZS5jaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ2hpbGRyZW4oKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVDaGlsZHJlbigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmxpc3RPZlRpbWVMaW5lICYmIHRoaXMubGlzdE9mVGltZUxpbmUubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMubGlzdE9mVGltZUxpbmUubGVuZ3RoO1xyXG4gICAgICB0aGlzLmxpc3RPZlRpbWVMaW5lLnRvQXJyYXkoKS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGl0ZW0uaXNMYXN0ID0gIXRoaXMubnpSZXZlcnNlID8gaW5kZXggPT09IGxlbmd0aCAtIDEgOiBpbmRleCA9PT0gMDtcclxuICAgICAgICBpdGVtLnBvc2l0aW9uID1cclxuICAgICAgICAgIHRoaXMubnpNb2RlID09PSAnbGVmdCcgfHwgIXRoaXMubnpNb2RlXHJcbiAgICAgICAgICAgID8gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgIDogdGhpcy5uek1vZGUgPT09ICdyaWdodCdcclxuICAgICAgICAgICAgPyAncmlnaHQnXHJcbiAgICAgICAgICAgIDogdGhpcy5uek1vZGUgPT09ICdhbHRlcm5hdGUnICYmIGluZGV4ICUgMiA9PT0gMFxyXG4gICAgICAgICAgICA/ICdsZWZ0J1xyXG4gICAgICAgICAgICA6ICdyaWdodCc7XHJcbiAgICAgICAgaXRlbS5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmV2ZXJzZUNoaWxkVGltZWxpbmVEb3RzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XHJcbiAgICAgIHJldmVyc2VDaGlsZE5vZGVzKHRoaXMudGltZWxpbmUubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCk7XHJcbiAgICAgIHRoaXMudXBkYXRlQ2hpbGRyZW4oKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPHVsXHJcbiAgY2xhc3M9XCJhbnQtdGltZWxpbmVcIlxyXG4gIFtjbGFzcy5hbnQtdGltZWxpbmUtcmlnaHRdPVwibnpNb2RlID09PSAncmlnaHQnXCJcclxuICBbY2xhc3MuYW50LXRpbWVsaW5lLWFsdGVybmF0ZV09XCJuek1vZGUgPT09ICdhbHRlcm5hdGUnXCJcclxuICBbY2xhc3MuYW50LXRpbWVsaW5lLXBlbmRpbmddPVwiISFuelBlbmRpbmdcIlxyXG4gIFtjbGFzcy5hbnQtdGltZWxpbmUtcmV2ZXJzZV09XCJuelJldmVyc2VcIlxyXG4gICN0aW1lbGluZVxyXG4+XHJcbiAgPCEtLSBVc2VyIGluc2VydGVkIHRpbWVsaW5lIGRvdHMuIC0tPlxyXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICA8IS0tIFBlbmRpbmcgZG90LiAtLT5cclxuICA8bGkgKm5nSWY9XCJuelBlbmRpbmdcIiBjbGFzcz1cImFudC10aW1lbGluZS1pdGVtIGFudC10aW1lbGluZS1pdGVtLXBlbmRpbmdcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJhbnQtdGltZWxpbmUtaXRlbS10YWlsXCI+PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYW50LXRpbWVsaW5lLWl0ZW0taGVhZCBhbnQtdGltZWxpbmUtaXRlbS1oZWFkLWN1c3RvbSBhbnQtdGltZWxpbmUtaXRlbS1oZWFkLWJsdWVcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm56UGVuZGluZ0RvdFwiPlxyXG4gICAgICAgIHt7IG56UGVuZGluZ0RvdCB9fTxpICpuZ0lmPVwiIW56UGVuZGluZ0RvdFwiIG56LWljb24gbnpUeXBlPVwibG9hZGluZ1wiPjwvaT5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJhbnQtdGltZWxpbmUtaXRlbS1jb250ZW50XCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJuelBlbmRpbmdcIj5cclxuICAgICAgICB7eyBpc1BlbmRpbmdCb29sZWFuID8gJycgOiBuelBlbmRpbmcgfX1cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICA8L2xpPlxyXG48L3VsPlxyXG4iXX0=
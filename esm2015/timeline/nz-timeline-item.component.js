/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
const _c0 = ["liTemplate"];
function NzTimelineItemComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r964 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r964.nzDot);
} }
const _c1 = ["*"];
export class NzTimelineItemComponent {
    constructor(renderer, cdr) {
        this.renderer = renderer;
        this.cdr = cdr;
        this.nzColor = 'blue';
        this.isLast = false;
    }
    ngOnInit() {
        this.tryUpdateCustomColor();
    }
    ngOnChanges(changes) {
        if (changes.nzColor) {
            this.tryUpdateCustomColor();
        }
    }
    detectChanges() {
        this.cdr.detectChanges();
    }
    tryUpdateCustomColor() {
        const defaultColors = ['blue', 'red', 'green', 'gray'];
        const circle = this.liTemplate.nativeElement.querySelector('.ant-timeline-item-head');
        if (defaultColors.indexOf(this.nzColor) === -1) {
            this.renderer.setStyle(circle, 'border-color', this.nzColor);
        }
        else {
            this.renderer.removeStyle(circle, 'border-color');
        }
    }
}
/** @nocollapse */ NzTimelineItemComponent.ɵfac = function NzTimelineItemComponent_Factory(t) { return new (t || NzTimelineItemComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
/** @nocollapse */ NzTimelineItemComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzTimelineItemComponent, selectors: [["nz-timeline-item"], ["", "nz-timeline-item", ""]], viewQuery: function NzTimelineItemComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.liTemplate = _t.first);
    } }, inputs: { nzColor: "nzColor", nzDot: "nzDot" }, exportAs: ["nzTimelineItem"], features: [i0.ɵɵNgOnChangesFeature()], ngContentSelectors: _c1, decls: 7, vars: 9, consts: [[1, "ant-timeline-item"], ["liTemplate", ""], [1, "ant-timeline-item-tail"], [1, "ant-timeline-item-head"], [4, "nzStringTemplateOutlet"], [1, "ant-timeline-item-content"]], template: function NzTimelineItemComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "li", 0, 1);
        i0.ɵɵelement(2, "div", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵtemplate(4, NzTimelineItemComponent_ng_container_4_Template, 2, 1, "ng-container", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 5);
        i0.ɵɵprojection(6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassProp("ant-timeline-item-right", ctx.position === "right")("ant-timeline-item-left", ctx.position === "left")("ant-timeline-item-last", ctx.isLast);
        i0.ɵɵadvance(3);
        i0.ɵɵclassProp("ant-timeline-item-head-red", ctx.nzColor === "red")("ant-timeline-item-head-blue", ctx.nzColor === "blue")("ant-timeline-item-head-green", ctx.nzColor === "green")("ant-timeline-item-head-gray", ctx.nzColor === "gray")("ant-timeline-item-head-custom", !!ctx.nzDot);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("nzStringTemplateOutlet", ctx.nzDot);
    } }, directives: [i1.NzStringTemplateOutletDirective], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzTimelineItemComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                selector: 'nz-timeline-item, [nz-timeline-item]',
                exportAs: 'nzTimelineItem',
                templateUrl: './nz-timeline-item.component.html'
            }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }]; }, { liTemplate: [{
            type: ViewChild,
            args: ['liTemplate', { static: true }]
        }], nzColor: [{
            type: Input
        }], nzDot: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGltZWxpbmUtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3RpbWVsaW5lLyIsInNvdXJjZXMiOlsibnotdGltZWxpbmUtaXRlbS5jb21wb25lbnQudHMiLCJuei10aW1lbGluZS1pdGVtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUdMLFNBQVMsRUFHVCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDOzs7OztJQ0xuQiw2QkFBOEM7SUFBQSxZQUFXO0lBQUEsMEJBQWU7OztJQUExQixlQUFXO0lBQVgsb0NBQVc7OztBRG1CN0QsTUFBTSxPQUFPLHVCQUF1QjtJQVFsQyxZQUFvQixRQUFtQixFQUFVLEdBQXNCO1FBQW5ELGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQU45RCxZQUFPLEdBQXdCLE1BQU0sQ0FBQztRQUcvQyxXQUFNLEdBQUcsS0FBSyxDQUFDO0lBRzJELENBQUM7SUFFM0UsUUFBUTtRQUNOLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO1lBQ25CLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1NBQzdCO0lBQ0gsQ0FBQztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFTyxvQkFBb0I7UUFDMUIsTUFBTSxhQUFhLEdBQUcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN2RCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUN0RixJQUFJLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxjQUFjLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzlEO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUM7U0FDbkQ7SUFDSCxDQUFDOzs4RkFoQ1UsdUJBQXVCOzREQUF2Qix1QkFBdUI7Ozs7Ozs7UUNuQ3BDLGdDQU9FO1FBQUEseUJBQTBDO1FBQzFDLDhCQVFFO1FBQUEsMEZBQThDO1FBQ2hELGlCQUFNO1FBQ04sOEJBQ0U7UUFBQSxrQkFBWTtRQUNkLGlCQUFNO1FBQ1IsaUJBQUs7O1FBbkJILG1FQUFzRCxtREFBQSxzQ0FBQTtRQVFwRCxlQUFzRDtRQUF0RCxtRUFBc0QsdURBQUEseURBQUEsdURBQUEsOENBQUE7UUFNeEMsZUFBK0I7UUFBL0Isa0RBQStCOztrRERtQnBDLHVCQUF1QjtjQVJuQyxTQUFTO2VBQUM7Z0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixRQUFRLEVBQUUsc0NBQXNDO2dCQUNoRCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixXQUFXLEVBQUUsbUNBQW1DO2FBQ2pEOztrQkFFRSxTQUFTO21CQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O2tCQUN4QyxLQUFLOztrQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkluaXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOelRpbWVsaW5lTW9kZSB9IGZyb20gJy4vbnotdGltZWxpbmUuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCB0eXBlIE56VGltZWxpbmVJdGVtQ29sb3IgPSAncmVkJyB8ICdibHVlJyB8ICdncmVlbicgfCAnZ3JheScgfCBzdHJpbmc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHNlbGVjdG9yOiAnbnotdGltZWxpbmUtaXRlbSwgW256LXRpbWVsaW5lLWl0ZW1dJyxcclxuICBleHBvcnRBczogJ256VGltZWxpbmVJdGVtJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotdGltZWxpbmUtaXRlbS5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE56VGltZWxpbmVJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIEBWaWV3Q2hpbGQoJ2xpVGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBsaVRlbXBsYXRlOiBFbGVtZW50UmVmO1xyXG4gIEBJbnB1dCgpIG56Q29sb3I6IE56VGltZWxpbmVJdGVtQ29sb3IgPSAnYmx1ZSc7XHJcbiAgQElucHV0KCkgbnpEb3Q6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBpc0xhc3QgPSBmYWxzZTtcclxuICBwb3NpdGlvbjogTnpUaW1lbGluZU1vZGUgfCB1bmRlZmluZWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudHJ5VXBkYXRlQ3VzdG9tQ29sb3IoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLm56Q29sb3IpIHtcclxuICAgICAgdGhpcy50cnlVcGRhdGVDdXN0b21Db2xvcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGV0ZWN0Q2hhbmdlcygpOiB2b2lkIHtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdHJ5VXBkYXRlQ3VzdG9tQ29sb3IoKTogdm9pZCB7XHJcbiAgICBjb25zdCBkZWZhdWx0Q29sb3JzID0gWydibHVlJywgJ3JlZCcsICdncmVlbicsICdncmF5J107XHJcbiAgICBjb25zdCBjaXJjbGUgPSB0aGlzLmxpVGVtcGxhdGUubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYW50LXRpbWVsaW5lLWl0ZW0taGVhZCcpO1xyXG4gICAgaWYgKGRlZmF1bHRDb2xvcnMuaW5kZXhPZih0aGlzLm56Q29sb3IpID09PSAtMSkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGNpcmNsZSwgJ2JvcmRlci1jb2xvcicsIHRoaXMubnpDb2xvcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKGNpcmNsZSwgJ2JvcmRlci1jb2xvcicpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8bGlcclxuICBjbGFzcz1cImFudC10aW1lbGluZS1pdGVtXCJcclxuICBbY2xhc3MuYW50LXRpbWVsaW5lLWl0ZW0tcmlnaHRdPVwicG9zaXRpb24gPT09ICdyaWdodCdcIlxyXG4gIFtjbGFzcy5hbnQtdGltZWxpbmUtaXRlbS1sZWZ0XT1cInBvc2l0aW9uID09PSAnbGVmdCdcIlxyXG4gIFtjbGFzcy5hbnQtdGltZWxpbmUtaXRlbS1sYXN0XT1cImlzTGFzdFwiXHJcbiAgI2xpVGVtcGxhdGVcclxuPlxyXG4gIDxkaXYgY2xhc3M9XCJhbnQtdGltZWxpbmUtaXRlbS10YWlsXCI+PC9kaXY+XHJcbiAgPGRpdlxyXG4gICAgY2xhc3M9XCJhbnQtdGltZWxpbmUtaXRlbS1oZWFkXCJcclxuICAgIFtjbGFzcy5hbnQtdGltZWxpbmUtaXRlbS1oZWFkLXJlZF09XCJuekNvbG9yID09PSAncmVkJ1wiXHJcbiAgICBbY2xhc3MuYW50LXRpbWVsaW5lLWl0ZW0taGVhZC1ibHVlXT1cIm56Q29sb3IgPT09ICdibHVlJ1wiXHJcbiAgICBbY2xhc3MuYW50LXRpbWVsaW5lLWl0ZW0taGVhZC1ncmVlbl09XCJuekNvbG9yID09PSAnZ3JlZW4nXCJcclxuICAgIFtjbGFzcy5hbnQtdGltZWxpbmUtaXRlbS1oZWFkLWdyYXldPVwibnpDb2xvciA9PT0gJ2dyYXknXCJcclxuICAgIFtjbGFzcy5hbnQtdGltZWxpbmUtaXRlbS1oZWFkLWN1c3RvbV09XCIhIW56RG90XCJcclxuICA+XHJcbiAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpEb3RcIj57eyBuekRvdCB9fTwvbmctY29udGFpbmVyPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJhbnQtdGltZWxpbmUtaXRlbS1jb250ZW50XCI+XHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgPC9kaXY+XHJcbjwvbGk+XHJcbiJdfQ==
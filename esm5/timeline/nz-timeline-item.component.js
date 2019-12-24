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
var _c0 = ["liTemplate"];
function NzTimelineItemComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r971 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r971.nzDot);
} }
var _c1 = ["*"];
var NzTimelineItemComponent = /** @class */ (function () {
    function NzTimelineItemComponent(renderer, cdr) {
        this.renderer = renderer;
        this.cdr = cdr;
        this.nzColor = 'blue';
        this.isLast = false;
    }
    NzTimelineItemComponent.prototype.ngOnInit = function () {
        this.tryUpdateCustomColor();
    };
    NzTimelineItemComponent.prototype.ngOnChanges = function (changes) {
        if (changes.nzColor) {
            this.tryUpdateCustomColor();
        }
    };
    NzTimelineItemComponent.prototype.detectChanges = function () {
        this.cdr.detectChanges();
    };
    NzTimelineItemComponent.prototype.tryUpdateCustomColor = function () {
        var defaultColors = ['blue', 'red', 'green', 'gray'];
        var circle = this.liTemplate.nativeElement.querySelector('.ant-timeline-item-head');
        if (defaultColors.indexOf(this.nzColor) === -1) {
            this.renderer.setStyle(circle, 'border-color', this.nzColor);
        }
        else {
            this.renderer.removeStyle(circle, 'border-color');
        }
    };
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
    return NzTimelineItemComponent;
}());
export { NzTimelineItemComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGltZWxpbmUtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3RpbWVsaW5lLyIsInNvdXJjZXMiOlsibnotdGltZWxpbmUtaXRlbS5jb21wb25lbnQudHMiLCJuei10aW1lbGluZS1pdGVtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUdMLFNBQVMsRUFHVCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDOzs7OztJQ0xuQiw2QkFBOEM7SUFBQSxZQUFXO0lBQUEsMEJBQWU7OztJQUExQixlQUFXO0lBQVgsb0NBQVc7OztBRFc3RDtJQWdCRSxpQ0FBb0IsUUFBbUIsRUFBVSxHQUFzQjtRQUFuRCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFOOUQsWUFBTyxHQUF3QixNQUFNLENBQUM7UUFHL0MsV0FBTSxHQUFHLEtBQUssQ0FBQztJQUcyRCxDQUFDO0lBRTNFLDBDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsNkNBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUNuQixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztTQUM3QjtJQUNILENBQUM7SUFFRCwrQ0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRU8sc0RBQW9CLEdBQTVCO1FBQ0UsSUFBTSxhQUFhLEdBQUcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN2RCxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUN0RixJQUFJLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxjQUFjLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzlEO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUM7U0FDbkQ7SUFDSCxDQUFDO2tHQWhDVSx1QkFBdUI7Z0VBQXZCLHVCQUF1Qjs7Ozs7OztZQ25DcEMsZ0NBT0U7WUFBQSx5QkFBMEM7WUFDMUMsOEJBUUU7WUFBQSwwRkFBOEM7WUFDaEQsaUJBQU07WUFDTiw4QkFDRTtZQUFBLGtCQUFZO1lBQ2QsaUJBQU07WUFDUixpQkFBSzs7WUFuQkgsbUVBQXNELG1EQUFBLHNDQUFBO1lBUXBELGVBQXNEO1lBQXRELG1FQUFzRCx1REFBQSx5REFBQSx1REFBQSw4Q0FBQTtZQU14QyxlQUErQjtZQUEvQixrREFBK0I7O2tDRGhCakQ7Q0FvRUMsQUF6Q0QsSUF5Q0M7U0FqQ1ksdUJBQXVCO2tEQUF2Qix1QkFBdUI7Y0FSbkMsU0FBUztlQUFDO2dCQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsUUFBUSxFQUFFLHNDQUFzQztnQkFDaEQsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsV0FBVyxFQUFFLG1DQUFtQzthQUNqRDs7a0JBRUUsU0FBUzttQkFBQyxZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztrQkFDeEMsS0FBSzs7a0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25Jbml0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpUaW1lbGluZU1vZGUgfSBmcm9tICcuL256LXRpbWVsaW5lLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgdHlwZSBOelRpbWVsaW5lSXRlbUNvbG9yID0gJ3JlZCcgfCAnYmx1ZScgfCAnZ3JlZW4nIHwgJ2dyYXknIHwgc3RyaW5nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBzZWxlY3RvcjogJ256LXRpbWVsaW5lLWl0ZW0sIFtuei10aW1lbGluZS1pdGVtXScsXHJcbiAgZXhwb3J0QXM6ICduelRpbWVsaW5lSXRlbScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXRpbWVsaW5lLWl0ZW0uY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelRpbWVsaW5lSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBAVmlld0NoaWxkKCdsaVRlbXBsYXRlJywgeyBzdGF0aWM6IHRydWUgfSkgbGlUZW1wbGF0ZTogRWxlbWVudFJlZjtcclxuICBASW5wdXQoKSBuekNvbG9yOiBOelRpbWVsaW5lSXRlbUNvbG9yID0gJ2JsdWUnO1xyXG4gIEBJbnB1dCgpIG56RG90OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgaXNMYXN0ID0gZmFsc2U7XHJcbiAgcG9zaXRpb246IE56VGltZWxpbmVNb2RlIHwgdW5kZWZpbmVkO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRyeVVwZGF0ZUN1c3RvbUNvbG9yKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5uekNvbG9yKSB7XHJcbiAgICAgIHRoaXMudHJ5VXBkYXRlQ3VzdG9tQ29sb3IoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRldGVjdENoYW5nZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRyeVVwZGF0ZUN1c3RvbUNvbG9yKCk6IHZvaWQge1xyXG4gICAgY29uc3QgZGVmYXVsdENvbG9ycyA9IFsnYmx1ZScsICdyZWQnLCAnZ3JlZW4nLCAnZ3JheSddO1xyXG4gICAgY29uc3QgY2lyY2xlID0gdGhpcy5saVRlbXBsYXRlLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmFudC10aW1lbGluZS1pdGVtLWhlYWQnKTtcclxuICAgIGlmIChkZWZhdWx0Q29sb3JzLmluZGV4T2YodGhpcy5uekNvbG9yKSA9PT0gLTEpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShjaXJjbGUsICdib3JkZXItY29sb3InLCB0aGlzLm56Q29sb3IpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZShjaXJjbGUsICdib3JkZXItY29sb3InKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPGxpXHJcbiAgY2xhc3M9XCJhbnQtdGltZWxpbmUtaXRlbVwiXHJcbiAgW2NsYXNzLmFudC10aW1lbGluZS1pdGVtLXJpZ2h0XT1cInBvc2l0aW9uID09PSAncmlnaHQnXCJcclxuICBbY2xhc3MuYW50LXRpbWVsaW5lLWl0ZW0tbGVmdF09XCJwb3NpdGlvbiA9PT0gJ2xlZnQnXCJcclxuICBbY2xhc3MuYW50LXRpbWVsaW5lLWl0ZW0tbGFzdF09XCJpc0xhc3RcIlxyXG4gICNsaVRlbXBsYXRlXHJcbj5cclxuICA8ZGl2IGNsYXNzPVwiYW50LXRpbWVsaW5lLWl0ZW0tdGFpbFwiPjwvZGl2PlxyXG4gIDxkaXZcclxuICAgIGNsYXNzPVwiYW50LXRpbWVsaW5lLWl0ZW0taGVhZFwiXHJcbiAgICBbY2xhc3MuYW50LXRpbWVsaW5lLWl0ZW0taGVhZC1yZWRdPVwibnpDb2xvciA9PT0gJ3JlZCdcIlxyXG4gICAgW2NsYXNzLmFudC10aW1lbGluZS1pdGVtLWhlYWQtYmx1ZV09XCJuekNvbG9yID09PSAnYmx1ZSdcIlxyXG4gICAgW2NsYXNzLmFudC10aW1lbGluZS1pdGVtLWhlYWQtZ3JlZW5dPVwibnpDb2xvciA9PT0gJ2dyZWVuJ1wiXHJcbiAgICBbY2xhc3MuYW50LXRpbWVsaW5lLWl0ZW0taGVhZC1ncmF5XT1cIm56Q29sb3IgPT09ICdncmF5J1wiXHJcbiAgICBbY2xhc3MuYW50LXRpbWVsaW5lLWl0ZW0taGVhZC1jdXN0b21dPVwiISFuekRvdFwiXHJcbiAgPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm56RG90XCI+e3sgbnpEb3QgfX08L25nLWNvbnRhaW5lcj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiYW50LXRpbWVsaW5lLWl0ZW0tY29udGVudFwiPlxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIDwvZGl2PlxyXG48L2xpPlxyXG4iXX0=
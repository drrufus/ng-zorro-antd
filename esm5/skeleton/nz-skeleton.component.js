import { __assign, __read, __spread } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';
import { toCssPixel } from 'ng-zorro-antd/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function NzSkeletonComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵelement(1, "span", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r268 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("ant-skeleton-avatar-lg", ctx_r268.avatar.size === "large")("ant-skeleton-avatar-sm", ctx_r268.avatar.size === "small")("ant-skeleton-avatar-circle", ctx_r268.avatar.shape === "circle")("ant-skeleton-avatar-square", ctx_r268.avatar.shape === "square");
} }
function NzSkeletonComponent_ng_container_0_h3_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "h3", 7);
} if (rf & 2) {
    var ctx_r269 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("width", ctx_r269.toCSSUnit(ctx_r269.title.width));
} }
function NzSkeletonComponent_ng_container_0_ul_4_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "li");
} if (rf & 2) {
    var i_r273 = ctx.index;
    var ctx_r271 = i0.ɵɵnextContext(3);
    i0.ɵɵstyleProp("width", ctx_r271.toCSSUnit(ctx_r271.widthList[i_r273]));
} }
function NzSkeletonComponent_ng_container_0_ul_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 8);
    i0.ɵɵtemplate(1, NzSkeletonComponent_ng_container_0_ul_4_li_1_Template, 1, 1, "li", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r270 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r270.rowsList);
} }
function NzSkeletonComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzSkeletonComponent_ng_container_0_div_1_Template, 2, 4, "div", 1);
    i0.ɵɵelementStart(2, "div", 2);
    i0.ɵɵtemplate(3, NzSkeletonComponent_ng_container_0_h3_3_Template, 1, 1, "h3", 3);
    i0.ɵɵtemplate(4, NzSkeletonComponent_ng_container_0_ul_4_Template, 2, 1, "ul", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r266 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !!ctx_r266.nzAvatar);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !!ctx_r266.nzTitle);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !!ctx_r266.nzParagraph);
} }
function NzSkeletonComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵprojection(1);
    i0.ɵɵelementContainerEnd();
} }
var _c0 = ["*"];
var NzSkeletonComponent = /** @class */ (function () {
    function NzSkeletonComponent(cdr, renderer, elementRef) {
        this.cdr = cdr;
        this.nzActive = false;
        this.nzLoading = true;
        this.nzTitle = true;
        this.nzAvatar = false;
        this.nzParagraph = true;
        this.rowsList = [];
        this.widthList = [];
        renderer.addClass(elementRef.nativeElement, 'ant-skeleton');
    }
    NzSkeletonComponent.prototype.toCSSUnit = function (value) {
        if (value === void 0) { value = ''; }
        return toCssPixel(value);
    };
    NzSkeletonComponent.prototype.getTitleProps = function () {
        var hasAvatar = !!this.nzAvatar;
        var hasParagraph = !!this.nzParagraph;
        var width = '';
        if (!hasAvatar && hasParagraph) {
            width = '38%';
        }
        else if (hasAvatar && hasParagraph) {
            width = '50%';
        }
        return __assign({ width: width }, this.getProps(this.nzTitle));
    };
    NzSkeletonComponent.prototype.getAvatarProps = function () {
        var shape = !!this.nzTitle && !this.nzParagraph ? 'square' : 'circle';
        var size = 'large';
        return __assign({ shape: shape, size: size }, this.getProps(this.nzAvatar));
    };
    NzSkeletonComponent.prototype.getParagraphProps = function () {
        var hasAvatar = !!this.nzAvatar;
        var hasTitle = !!this.nzTitle;
        var basicProps = {};
        // Width
        if (!hasAvatar || !hasTitle) {
            basicProps.width = '61%';
        }
        // Rows
        if (!hasAvatar && hasTitle) {
            basicProps.rows = 3;
        }
        else {
            basicProps.rows = 2;
        }
        return __assign(__assign({}, basicProps), this.getProps(this.nzParagraph));
    };
    NzSkeletonComponent.prototype.getProps = function (prop) {
        return prop && typeof prop === 'object' ? prop : {};
    };
    NzSkeletonComponent.prototype.getWidthList = function () {
        var _a = this.paragraph, width = _a.width, rows = _a.rows;
        var widthList = [];
        if (width && Array.isArray(width)) {
            widthList = width;
        }
        else if (width && !Array.isArray(width)) {
            widthList = [];
            widthList[rows - 1] = width;
        }
        return widthList;
    };
    NzSkeletonComponent.prototype.updateProps = function () {
        this.title = this.getTitleProps();
        this.avatar = this.getAvatarProps();
        this.paragraph = this.getParagraphProps();
        this.rowsList = __spread(Array(this.paragraph.rows));
        this.widthList = this.getWidthList();
        this.cdr.markForCheck();
    };
    NzSkeletonComponent.prototype.ngOnInit = function () {
        this.updateProps();
    };
    NzSkeletonComponent.prototype.ngOnChanges = function (changes) {
        if (changes.nzTitle || changes.nzAvatar || changes.nzParagraph) {
            this.updateProps();
        }
    };
    /** @nocollapse */ NzSkeletonComponent.ɵfac = function NzSkeletonComponent_Factory(t) { return new (t || NzSkeletonComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    /** @nocollapse */ NzSkeletonComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzSkeletonComponent, selectors: [["nz-skeleton"]], hostBindings: function NzSkeletonComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            i0.ɵɵallocHostVars(2);
        } if (rf & 2) {
            i0.ɵɵclassProp("ant-skeleton-with-avatar", !!ctx.nzAvatar)("ant-skeleton-active", ctx.nzActive);
        } }, inputs: { nzActive: "nzActive", nzLoading: "nzLoading", nzTitle: "nzTitle", nzAvatar: "nzAvatar", nzParagraph: "nzParagraph" }, exportAs: ["nzSkeleton"], features: [i0.ɵɵNgOnChangesFeature()], ngContentSelectors: _c0, decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "ant-skeleton-header", 4, "ngIf"], [1, "ant-skeleton-content"], ["class", "ant-skeleton-title", 3, "width", 4, "ngIf"], ["class", "ant-skeleton-paragraph", 4, "ngIf"], [1, "ant-skeleton-header"], [1, "ant-skeleton-avatar"], [1, "ant-skeleton-title"], [1, "ant-skeleton-paragraph"], [3, "width", 4, "ngFor", "ngForOf"]], template: function NzSkeletonComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, NzSkeletonComponent_ng_container_0_Template, 5, 3, "ng-container", 0);
            i0.ɵɵtemplate(1, NzSkeletonComponent_ng_container_1_Template, 2, 0, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.nzLoading);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.nzLoading);
        } }, directives: [i1.NgIf, i1.NgForOf], encapsulation: 2, changeDetection: 0 });
    return NzSkeletonComponent;
}());
export { NzSkeletonComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzSkeletonComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-skeleton',
                exportAs: 'nzSkeleton',
                templateUrl: './nz-skeleton.component.html',
                host: {
                    '[class.ant-skeleton-with-avatar]': '!!nzAvatar',
                    '[class.ant-skeleton-active]': 'nzActive'
                }
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { nzActive: [{
            type: Input
        }], nzLoading: [{
            type: Input
        }], nzTitle: [{
            type: Input
        }], nzAvatar: [{
            type: Input
        }], nzParagraph: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2tlbGV0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9za2VsZXRvbi8iLCJzb3VyY2VzIjpbIm56LXNrZWxldG9uLmNvbXBvbmVudC50cyIsIm56LXNrZWxldG9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFHTCxTQUFTLEVBRVQsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7OztJQ3BCOUMsOEJBQ0U7SUFBQSwwQkFPTztJQUNULGlCQUFNOzs7SUFORixlQUF3RDtJQUF4RCwwRUFBd0QsNERBQUEsa0VBQUEsa0VBQUE7OztJQVExRCx3QkFBNkY7OztJQUE1QyxpRUFBc0M7OztJQUVyRixxQkFBNkY7Ozs7SUFBN0MsdUVBQXVDOzs7SUFEekYsNkJBQ0U7SUFBQSxzRkFBd0Y7SUFDMUYsaUJBQUs7OztJQURDLGVBQTJDO0lBQTNDLDJDQUEyQzs7O0lBZHJELDZCQUNFO0lBQUEsbUZBQ0U7SUFTRiw4QkFDRTtJQUFBLGlGQUF3RjtJQUN4RixpRkFDRTtJQUVKLGlCQUFNO0lBQ1IsMEJBQWU7OztJQWhCb0IsZUFBa0I7SUFBbEIsMENBQWtCO0lBVzdDLGVBQWlCO0lBQWpCLHlDQUFpQjtJQUNqQixlQUFxQjtJQUFyQiw2Q0FBcUI7OztJQUs3Qiw2QkFDRTtJQUFBLGtCQUFZO0lBQ2QsMEJBQWU7OztBRElmO0lBd0JFLDZCQUFvQixHQUFzQixFQUFFLFFBQW1CLEVBQUUsVUFBc0I7UUFBbkUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFaakMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLFlBQU8sR0FBOEIsSUFB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LElBQUksRUFBRTtvQkFDSixrQ0FBa0MsRUFBRSxZQUFZO29CQUNoRCw2QkFBNkIsRUFBRSxVQUFVO2lCQUMxQzthQUNGOztrQkFFRSxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkluaXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IHRvQ3NzUGl4ZWwgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBBdmF0YXJTaGFwZSwgQXZhdGFyU2l6ZSwgTnpTa2VsZXRvbkF2YXRhciwgTnpTa2VsZXRvblBhcmFncmFwaCwgTnpTa2VsZXRvblRpdGxlIH0gZnJvbSAnLi9uei1za2VsZXRvbi50eXBlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc2VsZWN0b3I6ICduei1za2VsZXRvbicsXHJcbiAgZXhwb3J0QXM6ICduelNrZWxldG9uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotc2tlbGV0b24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LXNrZWxldG9uLXdpdGgtYXZhdGFyXSc6ICchIW56QXZhdGFyJyxcclxuICAgICdbY2xhc3MuYW50LXNrZWxldG9uLWFjdGl2ZV0nOiAnbnpBY3RpdmUnXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpTa2VsZXRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBuekFjdGl2ZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56TG9hZGluZyA9IHRydWU7XHJcbiAgQElucHV0KCkgbnpUaXRsZTogTnpTa2VsZXRvblRpdGxlIHwgYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgbnpBdmF0YXI6IE56U2tlbGV0b25BdmF0YXIgfCBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpQYXJhZ3JhcGg6IE56U2tlbGV0b25QYXJhZ3JhcGggfCBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgdGl0bGU6IE56U2tlbGV0b25UaXRsZTtcclxuICBhdmF0YXI6IE56U2tlbGV0b25BdmF0YXI7XHJcbiAgcGFyYWdyYXBoOiBOelNrZWxldG9uUGFyYWdyYXBoO1xyXG4gIHJvd3NMaXN0OiBudW1iZXJbXSA9IFtdO1xyXG4gIHdpZHRoTGlzdDogQXJyYXk8bnVtYmVyIHwgc3RyaW5nPiA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1za2VsZXRvbicpO1xyXG4gIH1cclxuXHJcbiAgdG9DU1NVbml0KHZhbHVlOiBudW1iZXIgfCBzdHJpbmcgPSAnJyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdG9Dc3NQaXhlbCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFRpdGxlUHJvcHMoKTogTnpTa2VsZXRvblRpdGxlIHtcclxuICAgIGNvbnN0IGhhc0F2YXRhcjogYm9vbGVhbiA9ICEhdGhpcy5uekF2YXRhcjtcclxuICAgIGNvbnN0IGhhc1BhcmFncmFwaDogYm9vbGVhbiA9ICEhdGhpcy5uelBhcmFncmFwaDtcclxuICAgIGxldCB3aWR0aCA9ICcnO1xyXG4gICAgaWYgKCFoYXNBdmF0YXIgJiYgaGFzUGFyYWdyYXBoKSB7XHJcbiAgICAgIHdpZHRoID0gJzM4JSc7XHJcbiAgICB9IGVsc2UgaWYgKGhhc0F2YXRhciAmJiBoYXNQYXJhZ3JhcGgpIHtcclxuICAgICAgd2lkdGggPSAnNTAlJztcclxuICAgIH1cclxuICAgIHJldHVybiB7IHdpZHRoLCAuLi50aGlzLmdldFByb3BzKHRoaXMubnpUaXRsZSkgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0QXZhdGFyUHJvcHMoKTogTnpTa2VsZXRvbkF2YXRhciB7XHJcbiAgICBjb25zdCBzaGFwZTogQXZhdGFyU2hhcGUgPSAhIXRoaXMubnpUaXRsZSAmJiAhdGhpcy5uelBhcmFncmFwaCA/ICdzcXVhcmUnIDogJ2NpcmNsZSc7XHJcbiAgICBjb25zdCBzaXplOiBBdmF0YXJTaXplID0gJ2xhcmdlJztcclxuICAgIHJldHVybiB7IHNoYXBlLCBzaXplLCAuLi50aGlzLmdldFByb3BzKHRoaXMubnpBdmF0YXIpIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFBhcmFncmFwaFByb3BzKCk6IE56U2tlbGV0b25QYXJhZ3JhcGgge1xyXG4gICAgY29uc3QgaGFzQXZhdGFyOiBib29sZWFuID0gISF0aGlzLm56QXZhdGFyO1xyXG4gICAgY29uc3QgaGFzVGl0bGU6IGJvb2xlYW4gPSAhIXRoaXMubnpUaXRsZTtcclxuICAgIGNvbnN0IGJhc2ljUHJvcHM6IE56U2tlbGV0b25QYXJhZ3JhcGggPSB7fTtcclxuICAgIC8vIFdpZHRoXHJcbiAgICBpZiAoIWhhc0F2YXRhciB8fCAhaGFzVGl0bGUpIHtcclxuICAgICAgYmFzaWNQcm9wcy53aWR0aCA9ICc2MSUnO1xyXG4gICAgfVxyXG4gICAgLy8gUm93c1xyXG4gICAgaWYgKCFoYXNBdmF0YXIgJiYgaGFzVGl0bGUpIHtcclxuICAgICAgYmFzaWNQcm9wcy5yb3dzID0gMztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJhc2ljUHJvcHMucm93cyA9IDI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyAuLi5iYXNpY1Byb3BzLCAuLi50aGlzLmdldFByb3BzKHRoaXMubnpQYXJhZ3JhcGgpIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFByb3BzPFQ+KHByb3A6IFQgfCBib29sZWFuIHwgdW5kZWZpbmVkKTogVCB8IHt9IHtcclxuICAgIHJldHVybiBwcm9wICYmIHR5cGVvZiBwcm9wID09PSAnb2JqZWN0JyA/IHByb3AgOiB7fTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0V2lkdGhMaXN0KCk6IEFycmF5PG51bWJlciB8IHN0cmluZz4ge1xyXG4gICAgY29uc3QgeyB3aWR0aCwgcm93cyB9ID0gdGhpcy5wYXJhZ3JhcGg7XHJcbiAgICBsZXQgd2lkdGhMaXN0OiBBcnJheTxzdHJpbmcgfCBudW1iZXI+ID0gW107XHJcbiAgICBpZiAod2lkdGggJiYgQXJyYXkuaXNBcnJheSh3aWR0aCkpIHtcclxuICAgICAgd2lkdGhMaXN0ID0gd2lkdGg7XHJcbiAgICB9IGVsc2UgaWYgKHdpZHRoICYmICFBcnJheS5pc0FycmF5KHdpZHRoKSkge1xyXG4gICAgICB3aWR0aExpc3QgPSBbXTtcclxuICAgICAgd2lkdGhMaXN0W3Jvd3MhIC0gMV0gPSB3aWR0aDtcclxuICAgIH1cclxuICAgIHJldHVybiB3aWR0aExpc3Q7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZVByb3BzKCk6IHZvaWQge1xyXG4gICAgdGhpcy50aXRsZSA9IHRoaXMuZ2V0VGl0bGVQcm9wcygpO1xyXG4gICAgdGhpcy5hdmF0YXIgPSB0aGlzLmdldEF2YXRhclByb3BzKCk7XHJcbiAgICB0aGlzLnBhcmFncmFwaCA9IHRoaXMuZ2V0UGFyYWdyYXBoUHJvcHMoKTtcclxuICAgIHRoaXMucm93c0xpc3QgPSBbLi4uQXJyYXkodGhpcy5wYXJhZ3JhcGgucm93cyldO1xyXG4gICAgdGhpcy53aWR0aExpc3QgPSB0aGlzLmdldFdpZHRoTGlzdCgpO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudXBkYXRlUHJvcHMoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLm56VGl0bGUgfHwgY2hhbmdlcy5uekF2YXRhciB8fCBjaGFuZ2VzLm56UGFyYWdyYXBoKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlUHJvcHMoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPG5nLWNvbnRhaW5lciAqbmdJZj1cIm56TG9hZGluZ1wiPlxyXG4gIDxkaXYgY2xhc3M9XCJhbnQtc2tlbGV0b24taGVhZGVyXCIgKm5nSWY9XCIhIW56QXZhdGFyXCI+XHJcbiAgICA8c3BhblxyXG4gICAgICBjbGFzcz1cImFudC1za2VsZXRvbi1hdmF0YXJcIlxyXG4gICAgICBbY2xhc3MuYW50LXNrZWxldG9uLWF2YXRhci1sZ109XCJhdmF0YXIuc2l6ZSA9PT0gJ2xhcmdlJ1wiXHJcbiAgICAgIFtjbGFzcy5hbnQtc2tlbGV0b24tYXZhdGFyLXNtXT1cImF2YXRhci5zaXplID09PSAnc21hbGwnXCJcclxuICAgICAgW2NsYXNzLmFudC1za2VsZXRvbi1hdmF0YXItY2lyY2xlXT1cImF2YXRhci5zaGFwZSA9PT0gJ2NpcmNsZSdcIlxyXG4gICAgICBbY2xhc3MuYW50LXNrZWxldG9uLWF2YXRhci1zcXVhcmVdPVwiYXZhdGFyLnNoYXBlID09PSAnc3F1YXJlJ1wiXHJcbiAgICA+XHJcbiAgICA8L3NwYW4+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImFudC1za2VsZXRvbi1jb250ZW50XCI+XHJcbiAgICA8aDMgKm5nSWY9XCIhIW56VGl0bGVcIiBjbGFzcz1cImFudC1za2VsZXRvbi10aXRsZVwiIFtzdHlsZS53aWR0aF09XCJ0b0NTU1VuaXQodGl0bGUud2lkdGgpXCI+PC9oMz5cclxuICAgIDx1bCAqbmdJZj1cIiEhbnpQYXJhZ3JhcGhcIiBjbGFzcz1cImFudC1za2VsZXRvbi1wYXJhZ3JhcGhcIj5cclxuICAgICAgPGxpICpuZ0Zvcj1cImxldCByb3cgb2Ygcm93c0xpc3Q7IGxldCBpID0gaW5kZXhcIiBbc3R5bGUud2lkdGhdPVwidG9DU1NVbml0KHdpZHRoTGlzdFtpXSlcIj48L2xpPlxyXG4gICAgPC91bD5cclxuICA8L2Rpdj5cclxuPC9uZy1jb250YWluZXI+XHJcbjxuZy1jb250YWluZXIgKm5nSWY9XCIhbnpMb2FkaW5nXCI+XHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L25nLWNvbnRhaW5lcj5cclxuIl19
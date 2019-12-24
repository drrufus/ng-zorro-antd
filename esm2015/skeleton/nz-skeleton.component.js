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
    const ctx_r260 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("ant-skeleton-avatar-lg", ctx_r260.avatar.size === "large")("ant-skeleton-avatar-sm", ctx_r260.avatar.size === "small")("ant-skeleton-avatar-circle", ctx_r260.avatar.shape === "circle")("ant-skeleton-avatar-square", ctx_r260.avatar.shape === "square");
} }
function NzSkeletonComponent_ng_container_0_h3_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "h3", 7);
} if (rf & 2) {
    const ctx_r261 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("width", ctx_r261.toCSSUnit(ctx_r261.title.width));
} }
function NzSkeletonComponent_ng_container_0_ul_4_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "li");
} if (rf & 2) {
    const i_r265 = ctx.index;
    const ctx_r263 = i0.ɵɵnextContext(3);
    i0.ɵɵstyleProp("width", ctx_r263.toCSSUnit(ctx_r263.widthList[i_r265]));
} }
function NzSkeletonComponent_ng_container_0_ul_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 8);
    i0.ɵɵtemplate(1, NzSkeletonComponent_ng_container_0_ul_4_li_1_Template, 1, 1, "li", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r262 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r262.rowsList);
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
    const ctx_r258 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !!ctx_r258.nzAvatar);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !!ctx_r258.nzTitle);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !!ctx_r258.nzParagraph);
} }
function NzSkeletonComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵprojection(1);
    i0.ɵɵelementContainerEnd();
} }
const _c0 = ["*"];
export class NzSkeletonComponent {
    constructor(cdr, renderer, elementRef) {
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
    toCSSUnit(value = '') {
        return toCssPixel(value);
    }
    getTitleProps() {
        const hasAvatar = !!this.nzAvatar;
        const hasParagraph = !!this.nzParagraph;
        let width = '';
        if (!hasAvatar && hasParagraph) {
            width = '38%';
        }
        else if (hasAvatar && hasParagraph) {
            width = '50%';
        }
        return Object.assign({ width }, this.getProps(this.nzTitle));
    }
    getAvatarProps() {
        const shape = !!this.nzTitle && !this.nzParagraph ? 'square' : 'circle';
        const size = 'large';
        return Object.assign({ shape, size }, this.getProps(this.nzAvatar));
    }
    getParagraphProps() {
        const hasAvatar = !!this.nzAvatar;
        const hasTitle = !!this.nzTitle;
        const basicProps = {};
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
        return Object.assign(Object.assign({}, basicProps), this.getProps(this.nzParagraph));
    }
    getProps(prop) {
        return prop && typeof prop === 'object' ? prop : {};
    }
    getWidthList() {
        const { width, rows } = this.paragraph;
        let widthList = [];
        if (width && Array.isArray(width)) {
            widthList = width;
        }
        else if (width && !Array.isArray(width)) {
            widthList = [];
            widthList[rows - 1] = width;
        }
        return widthList;
    }
    updateProps() {
        this.title = this.getTitleProps();
        this.avatar = this.getAvatarProps();
        this.paragraph = this.getParagraphProps();
        this.rowsList = [...Array(this.paragraph.rows)];
        this.widthList = this.getWidthList();
        this.cdr.markForCheck();
    }
    ngOnInit() {
        this.updateProps();
    }
    ngOnChanges(changes) {
        if (changes.nzTitle || changes.nzAvatar || changes.nzParagraph) {
            this.updateProps();
        }
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2tlbGV0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9za2VsZXRvbi8iLCJzb3VyY2VzIjpbIm56LXNrZWxldG9uLmNvbXBvbmVudC50cyIsIm56LXNrZWxldG9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUdMLFNBQVMsRUFFVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7O0lDcEI5Qyw4QkFDRTtJQUFBLDBCQU9PO0lBQ1QsaUJBQU07OztJQU5GLGVBQXdEO0lBQXhELDBFQUF3RCw0REFBQSxrRUFBQSxrRUFBQTs7O0lBUTFELHdCQUE2Rjs7O0lBQTVDLGlFQUFzQzs7O0lBRXJGLHFCQUE2Rjs7OztJQUE3Qyx1RUFBdUM7OztJQUR6Riw2QkFDRTtJQUFBLHNGQUF3RjtJQUMxRixpQkFBSzs7O0lBREMsZUFBMkM7SUFBM0MsMkNBQTJDOzs7SUFkckQsNkJBQ0U7SUFBQSxtRkFDRTtJQVNGLDhCQUNFO0lBQUEsaUZBQXdGO0lBQ3hGLGlGQUNFO0lBRUosaUJBQU07SUFDUiwwQkFBZTs7O0lBaEJvQixlQUFrQjtJQUFsQiwwQ0FBa0I7SUFXN0MsZUFBaUI7SUFBakIseUNBQWlCO0lBQ2pCLGVBQXFCO0lBQXJCLDZDQUFxQjs7O0lBSzdCLDZCQUNFO0lBQUEsa0JBQVk7SUFDZCwwQkFBZTs7O0FEZWYsTUFBTSxPQUFPLG1CQUFtQjtJQWE5QixZQUFvQixHQUFzQixFQUFFLFFBQW1CLEVBQUUsVUFBc0I7UUFBbkUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFaakMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pC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QUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uSW5pdCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgdG9Dc3NQaXhlbCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IEF2YXRhclNoYXBlLCBBdmF0YXJTaXplLCBOelNrZWxldG9uQXZhdGFyLCBOelNrZWxldG9uUGFyYWdyYXBoLCBOelNrZWxldG9uVGl0bGUgfSBmcm9tICcuL256LXNrZWxldG9uLnR5cGUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzZWxlY3RvcjogJ256LXNrZWxldG9uJyxcclxuICBleHBvcnRBczogJ256U2tlbGV0b24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1za2VsZXRvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtc2tlbGV0b24td2l0aC1hdmF0YXJdJzogJyEhbnpBdmF0YXInLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2tlbGV0b24tYWN0aXZlXSc6ICduekFjdGl2ZSdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelNrZWxldG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIG56QWN0aXZlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpMb2FkaW5nID0gdHJ1ZTtcclxuICBASW5wdXQoKSBuelRpdGxlOiBOelNrZWxldG9uVGl0bGUgfCBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoKSBuekF2YXRhcjogTnpTa2VsZXRvbkF2YXRhciB8IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBuelBhcmFncmFwaDogTnpTa2VsZXRvblBhcmFncmFwaCB8IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICB0aXRsZTogTnpTa2VsZXRvblRpdGxlO1xyXG4gIGF2YXRhcjogTnpTa2VsZXRvbkF2YXRhcjtcclxuICBwYXJhZ3JhcGg6IE56U2tlbGV0b25QYXJhZ3JhcGg7XHJcbiAgcm93c0xpc3Q6IG51bWJlcltdID0gW107XHJcbiAgd2lkdGhMaXN0OiBBcnJheTxudW1iZXIgfCBzdHJpbmc+ID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xyXG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LXNrZWxldG9uJyk7XHJcbiAgfVxyXG5cclxuICB0b0NTU1VuaXQodmFsdWU6IG51bWJlciB8IHN0cmluZyA9ICcnKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0b0Nzc1BpeGVsKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0VGl0bGVQcm9wcygpOiBOelNrZWxldG9uVGl0bGUge1xyXG4gICAgY29uc3QgaGFzQXZhdGFyOiBib29sZWFuID0gISF0aGlzLm56QXZhdGFyO1xyXG4gICAgY29uc3QgaGFzUGFyYWdyYXBoOiBib29sZWFuID0gISF0aGlzLm56UGFyYWdyYXBoO1xyXG4gICAgbGV0IHdpZHRoID0gJyc7XHJcbiAgICBpZiAoIWhhc0F2YXRhciAmJiBoYXNQYXJhZ3JhcGgpIHtcclxuICAgICAgd2lkdGggPSAnMzglJztcclxuICAgIH0gZWxzZSBpZiAoaGFzQXZhdGFyICYmIGhhc1BhcmFncmFwaCkge1xyXG4gICAgICB3aWR0aCA9ICc1MCUnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgd2lkdGgsIC4uLnRoaXMuZ2V0UHJvcHModGhpcy5uelRpdGxlKSB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRBdmF0YXJQcm9wcygpOiBOelNrZWxldG9uQXZhdGFyIHtcclxuICAgIGNvbnN0IHNoYXBlOiBBdmF0YXJTaGFwZSA9ICEhdGhpcy5uelRpdGxlICYmICF0aGlzLm56UGFyYWdyYXBoID8gJ3NxdWFyZScgOiAnY2lyY2xlJztcclxuICAgIGNvbnN0IHNpemU6IEF2YXRhclNpemUgPSAnbGFyZ2UnO1xyXG4gICAgcmV0dXJuIHsgc2hhcGUsIHNpemUsIC4uLnRoaXMuZ2V0UHJvcHModGhpcy5uekF2YXRhcikgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0UGFyYWdyYXBoUHJvcHMoKTogTnpTa2VsZXRvblBhcmFncmFwaCB7XHJcbiAgICBjb25zdCBoYXNBdmF0YXI6IGJvb2xlYW4gPSAhIXRoaXMubnpBdmF0YXI7XHJcbiAgICBjb25zdCBoYXNUaXRsZTogYm9vbGVhbiA9ICEhdGhpcy5uelRpdGxlO1xyXG4gICAgY29uc3QgYmFzaWNQcm9wczogTnpTa2VsZXRvblBhcmFncmFwaCA9IHt9O1xyXG4gICAgLy8gV2lkdGhcclxuICAgIGlmICghaGFzQXZhdGFyIHx8ICFoYXNUaXRsZSkge1xyXG4gICAgICBiYXNpY1Byb3BzLndpZHRoID0gJzYxJSc7XHJcbiAgICB9XHJcbiAgICAvLyBSb3dzXHJcbiAgICBpZiAoIWhhc0F2YXRhciAmJiBoYXNUaXRsZSkge1xyXG4gICAgICBiYXNpY1Byb3BzLnJvd3MgPSAzO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYmFzaWNQcm9wcy5yb3dzID0gMjtcclxuICAgIH1cclxuICAgIHJldHVybiB7IC4uLmJhc2ljUHJvcHMsIC4uLnRoaXMuZ2V0UHJvcHModGhpcy5uelBhcmFncmFwaCkgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0UHJvcHM8VD4ocHJvcDogVCB8IGJvb2xlYW4gfCB1bmRlZmluZWQpOiBUIHwge30ge1xyXG4gICAgcmV0dXJuIHByb3AgJiYgdHlwZW9mIHByb3AgPT09ICdvYmplY3QnID8gcHJvcCA6IHt9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRXaWR0aExpc3QoKTogQXJyYXk8bnVtYmVyIHwgc3RyaW5nPiB7XHJcbiAgICBjb25zdCB7IHdpZHRoLCByb3dzIH0gPSB0aGlzLnBhcmFncmFwaDtcclxuICAgIGxldCB3aWR0aExpc3Q6IEFycmF5PHN0cmluZyB8IG51bWJlcj4gPSBbXTtcclxuICAgIGlmICh3aWR0aCAmJiBBcnJheS5pc0FycmF5KHdpZHRoKSkge1xyXG4gICAgICB3aWR0aExpc3QgPSB3aWR0aDtcclxuICAgIH0gZWxzZSBpZiAod2lkdGggJiYgIUFycmF5LmlzQXJyYXkod2lkdGgpKSB7XHJcbiAgICAgIHdpZHRoTGlzdCA9IFtdO1xyXG4gICAgICB3aWR0aExpc3Rbcm93cyEgLSAxXSA9IHdpZHRoO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHdpZHRoTGlzdDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlUHJvcHMoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGhpcy5nZXRUaXRsZVByb3BzKCk7XHJcbiAgICB0aGlzLmF2YXRhciA9IHRoaXMuZ2V0QXZhdGFyUHJvcHMoKTtcclxuICAgIHRoaXMucGFyYWdyYXBoID0gdGhpcy5nZXRQYXJhZ3JhcGhQcm9wcygpO1xyXG4gICAgdGhpcy5yb3dzTGlzdCA9IFsuLi5BcnJheSh0aGlzLnBhcmFncmFwaC5yb3dzKV07XHJcbiAgICB0aGlzLndpZHRoTGlzdCA9IHRoaXMuZ2V0V2lkdGhMaXN0KCk7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy51cGRhdGVQcm9wcygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMubnpUaXRsZSB8fCBjaGFuZ2VzLm56QXZhdGFyIHx8IGNoYW5nZXMubnpQYXJhZ3JhcGgpIHtcclxuICAgICAgdGhpcy51cGRhdGVQcm9wcygpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8bmctY29udGFpbmVyICpuZ0lmPVwibnpMb2FkaW5nXCI+XHJcbiAgPGRpdiBjbGFzcz1cImFudC1za2VsZXRvbi1oZWFkZXJcIiAqbmdJZj1cIiEhbnpBdmF0YXJcIj5cclxuICAgIDxzcGFuXHJcbiAgICAgIGNsYXNzPVwiYW50LXNrZWxldG9uLWF2YXRhclwiXHJcbiAgICAgIFtjbGFzcy5hbnQtc2tlbGV0b24tYXZhdGFyLWxnXT1cImF2YXRhci5zaXplID09PSAnbGFyZ2UnXCJcclxuICAgICAgW2NsYXNzLmFudC1za2VsZXRvbi1hdmF0YXItc21dPVwiYXZhdGFyLnNpemUgPT09ICdzbWFsbCdcIlxyXG4gICAgICBbY2xhc3MuYW50LXNrZWxldG9uLWF2YXRhci1jaXJjbGVdPVwiYXZhdGFyLnNoYXBlID09PSAnY2lyY2xlJ1wiXHJcbiAgICAgIFtjbGFzcy5hbnQtc2tlbGV0b24tYXZhdGFyLXNxdWFyZV09XCJhdmF0YXIuc2hhcGUgPT09ICdzcXVhcmUnXCJcclxuICAgID5cclxuICAgIDwvc3Bhbj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiYW50LXNrZWxldG9uLWNvbnRlbnRcIj5cclxuICAgIDxoMyAqbmdJZj1cIiEhbnpUaXRsZVwiIGNsYXNzPVwiYW50LXNrZWxldG9uLXRpdGxlXCIgW3N0eWxlLndpZHRoXT1cInRvQ1NTVW5pdCh0aXRsZS53aWR0aClcIj48L2gzPlxyXG4gICAgPHVsICpuZ0lmPVwiISFuelBhcmFncmFwaFwiIGNsYXNzPVwiYW50LXNrZWxldG9uLXBhcmFncmFwaFwiPlxyXG4gICAgICA8bGkgKm5nRm9yPVwibGV0IHJvdyBvZiByb3dzTGlzdDsgbGV0IGkgPSBpbmRleFwiIFtzdHlsZS53aWR0aF09XCJ0b0NTU1VuaXQod2lkdGhMaXN0W2ldKVwiPjwvbGk+XHJcbiAgICA8L3VsPlxyXG4gIDwvZGl2PlxyXG48L25nLWNvbnRhaW5lcj5cclxuPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFuekxvYWRpbmdcIj5cclxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvbmctY29udGFpbmVyPlxyXG4iXX0=
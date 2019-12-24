import { __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { NzConfigService, NzUpdateHostClassService, WithConfig } from 'ng-zorro-antd/core';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
import * as i2 from "@angular/cdk/platform";
import * as i3 from "@angular/common";
import * as i4 from "ng-zorro-antd/icon";
const _c0 = ["textEl"];
function NzAvatarComponent_i_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 3);
} if (rf & 2) {
    const ctx_r366 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nzType", !ctx_r366.oldAPIIcon && ctx_r366.nzIcon)("ngClass", ctx_r366.oldAPIIcon && ctx_r366.nzIcon);
} }
function NzAvatarComponent_img_1_Template(rf, ctx) { if (rf & 1) {
    const _r370 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 4);
    i0.ɵɵlistener("error", function NzAvatarComponent_img_1_Template_img_error_0_listener($event) { i0.ɵɵrestoreView(_r370); const ctx_r369 = i0.ɵɵnextContext(); return ctx_r369.imgError($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r367 = i0.ɵɵnextContext();
    i0.ɵɵproperty("src", ctx_r367.nzSrc, i0.ɵɵsanitizeUrl);
    i0.ɵɵattribute("srcset", ctx_r367.nzSrcSet, i0.ɵɵsanitizeUrl)("alt", ctx_r367.nzAlt);
} }
function NzAvatarComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 5, 6);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r368 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngStyle", ctx_r368.textStyles);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r368.nzText);
} }
const NZ_CONFIG_COMPONENT_NAME = 'avatar';
export class NzAvatarComponent {
    constructor(nzConfigService, elementRef, cd, updateHostClassService, renderer, platform) {
        this.nzConfigService = nzConfigService;
        this.elementRef = elementRef;
        this.cd = cd;
        this.updateHostClassService = updateHostClassService;
        this.renderer = renderer;
        this.platform = platform;
        this.nzError = new EventEmitter();
        this.oldAPIIcon = true; // Make the user defined icon compatible to old API. Should be removed in 2.0.
        this.hasText = false;
        this.hasSrc = true;
        this.hasIcon = false;
        this.el = this.elementRef.nativeElement;
        this.prefixCls = 'ant-avatar';
        this.sizeMap = { large: 'lg', small: 'sm' };
    }
    setClass() {
        const classMap = {
            [this.prefixCls]: true,
            [`${this.prefixCls}-${this.sizeMap[this.nzSize]}`]: this.sizeMap[this.nzSize],
            [`${this.prefixCls}-${this.nzShape}`]: this.nzShape,
            [`${this.prefixCls}-icon`]: this.nzIcon,
            [`${this.prefixCls}-image`]: this.hasSrc // downgrade after image error
        };
        this.updateHostClassService.updateHostClass(this.el, classMap);
        this.cd.detectChanges();
        return this;
    }
    imgError($event) {
        this.nzError.emit($event);
        if (!$event.defaultPrevented) {
            this.hasSrc = false;
            this.hasIcon = false;
            this.hasText = false;
            if (this.nzIcon) {
                this.hasIcon = true;
            }
            else if (this.nzText) {
                this.hasText = true;
            }
            this.setClass().notifyCalc();
            this.setSizeStyle();
        }
    }
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('nzIcon') && changes.nzIcon.currentValue) {
            this.oldAPIIcon = changes.nzIcon.currentValue.indexOf('anticon') > -1;
        }
        this.hasText = !this.nzSrc && !!this.nzText;
        this.hasIcon = !this.nzSrc && !!this.nzIcon;
        this.hasSrc = !!this.nzSrc;
        this.setClass().notifyCalc();
        this.setSizeStyle();
    }
    calcStringSize() {
        if (!this.hasText) {
            return;
        }
        const childrenWidth = this.textEl.nativeElement.offsetWidth;
        const avatarWidth = this.el.getBoundingClientRect().width;
        const scale = avatarWidth - 8 < childrenWidth ? (avatarWidth - 8) / childrenWidth : 1;
        this.textStyles = {
            transform: `scale(${scale}) translateX(-50%)`
        };
        if (typeof this.nzSize === 'number') {
            Object.assign(this.textStyles, {
                lineHeight: `${this.nzSize}px`
            });
        }
        this.cd.detectChanges();
    }
    notifyCalc() {
        // If use ngAfterViewChecked, always demands more computations, so......
        if (this.platform.isBrowser) {
            setTimeout(() => {
                this.calcStringSize();
            });
        }
        return this;
    }
    setSizeStyle() {
        const size = typeof this.nzSize === 'string' ? this.nzSize : `${this.nzSize}px`;
        this.renderer.setStyle(this.el, 'width', size);
        this.renderer.setStyle(this.el, 'height', size);
        this.renderer.setStyle(this.el, 'line-height', size);
        if (this.hasIcon) {
            this.renderer.setStyle(this.el, 'font-size', `calc(${size} / 2)`);
        }
    }
}
/** @nocollapse */ NzAvatarComponent.ɵfac = function NzAvatarComponent_Factory(t) { return new (t || NzAvatarComponent)(i0.ɵɵdirectiveInject(i1.NzConfigService), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.NzUpdateHostClassService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i2.Platform)); };
/** @nocollapse */ NzAvatarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzAvatarComponent, selectors: [["nz-avatar"]], viewQuery: function NzAvatarComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.textEl = _t.first);
    } }, inputs: { nzShape: "nzShape", nzSize: "nzSize", nzText: "nzText", nzSrc: "nzSrc", nzSrcSet: "nzSrcSet", nzAlt: "nzAlt", nzIcon: "nzIcon" }, outputs: { nzError: "nzError" }, exportAs: ["nzAvatar"], features: [i0.ɵɵProvidersFeature([NzUpdateHostClassService]), i0.ɵɵNgOnChangesFeature()], decls: 3, vars: 3, consts: [["nz-icon", "", 3, "nzType", "ngClass", 4, "ngIf"], [3, "src", "error", 4, "ngIf"], ["class", "ant-avatar-string", 3, "ngStyle", 4, "ngIf"], ["nz-icon", "", 3, "nzType", "ngClass"], [3, "src", "error"], [1, "ant-avatar-string", 3, "ngStyle"], ["textEl", ""]], template: function NzAvatarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, NzAvatarComponent_i_0_Template, 1, 2, "i", 0);
        i0.ɵɵtemplate(1, NzAvatarComponent_img_1_Template, 1, 3, "img", 1);
        i0.ɵɵtemplate(2, NzAvatarComponent_span_2_Template, 3, 2, "span", 2);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.nzIcon && ctx.hasIcon);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.nzSrc && ctx.hasSrc);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.nzText && ctx.hasText);
    } }, directives: [i3.NgIf, i4.NzIconDirective, i3.NgClass, i3.NgStyle], encapsulation: 2, changeDetection: 0 });
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, 'circle'),
    __metadata("design:type", String)
], NzAvatarComponent.prototype, "nzShape", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, 'default'),
    __metadata("design:type", Object)
], NzAvatarComponent.prototype, "nzSize", void 0);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzAvatarComponent, [{
        type: Component,
        args: [{
                selector: 'nz-avatar',
                exportAs: 'nzAvatar',
                templateUrl: './nz-avatar.component.html',
                providers: [NzUpdateHostClassService],
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i1.NzConfigService }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i1.NzUpdateHostClassService }, { type: i0.Renderer2 }, { type: i2.Platform }]; }, { nzShape: [{
            type: Input
        }], nzSize: [{
            type: Input
        }], nzText: [{
            type: Input
        }], nzSrc: [{
            type: Input
        }], nzSrcSet: [{
            type: Input
        }], nzAlt: [{
            type: Input
        }], nzIcon: [{
            type: Input
        }], nzError: [{
            type: Output
        }], textEl: [{
            type: ViewChild,
            args: ['textEl', { static: false }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYXZhdGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvYXZhdGFyLyIsInNvdXJjZXMiOlsibnotYXZhdGFyLmNvbXBvbmVudC50cyIsIm56LWF2YXRhci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04sU0FBUyxFQUVULFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGVBQWUsRUFBMkMsd0JBQXdCLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7O0lDeEJwSSx1QkFLSzs7O0lBRkgsZ0VBQWdDLG1EQUFBOzs7O0lBR2xDLDhCQU9BO0lBRkUsa01BQTBCO0lBTDVCLGlCQU9BOzs7SUFMRSxzREFBYTtJQUNiLDZEQUF3Qix1QkFBQTs7O0lBSTFCLGtDQUF5RjtJQUFBLFlBRXZGO0lBQUEsaUJBQU87OztJQUYrQiw2Q0FBc0I7SUFBMkIsZUFFdkY7SUFGdUYscUNBRXZGOztBRFdGLE1BQU0sd0JBQXdCLEdBQUcsUUFBUSxDQUFDO0FBVzFDLE1BQU0sT0FBTyxpQkFBaUI7SUFzQjVCLFlBQ1MsZUFBZ0MsRUFDL0IsVUFBc0IsRUFDdEIsRUFBcUIsRUFDckIsc0JBQWdELEVBQ2hELFFBQW1CLEVBQ25CLFFBQWtCO1FBTG5CLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUMvQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQ3JCLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBMEI7UUFDaEQsYUFBUSxHQUFSLFFBQVEsQ0FBVztR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YSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7O2tCQUVFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLE1BQU07O2tCQVFOLFNBQVM7bUJBQUMsUUFBUSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpDb25maWdTZXJ2aWNlLCBOelNoYXBlU0NUeXBlLCBOelNpemVMRFNUeXBlLCBOelNpemVNYXAsIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAnYXZhdGFyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotYXZhdGFyJyxcclxuICBleHBvcnRBczogJ256QXZhdGFyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotYXZhdGFyLmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnM6IFtOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VdLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIE56QXZhdGFyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsICdjaXJjbGUnKSBuelNoYXBlOiBOelNoYXBlU0NUeXBlO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgJ2RlZmF1bHQnKSBuelNpemU6IE56U2l6ZUxEU1R5cGUgfCBudW1iZXI7XHJcbiAgQElucHV0KCkgbnpUZXh0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpTcmM6IHN0cmluZztcclxuICBASW5wdXQoKSBuelNyY1NldDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG56QWx0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpJY29uOiBzdHJpbmc7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56RXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50PigpO1xyXG5cclxuICBvbGRBUElJY29uID0gdHJ1ZTsgLy8gTWFrZSB0aGUgdXNlciBkZWZpbmVkIGljb24gY29tcGF0aWJsZSB0byBvbGQgQVBJLiBTaG91bGQgYmUgcmVtb3ZlZCBpbiAyLjAuXHJcbiAgaGFzVGV4dDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGhhc1NyYzogYm9vbGVhbiA9IHRydWU7XHJcbiAgaGFzSWNvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHRleHRTdHlsZXM6IHt9O1xyXG5cclxuICBAVmlld0NoaWxkKCd0ZXh0RWwnLCB7IHN0YXRpYzogZmFsc2UgfSkgdGV4dEVsOiBFbGVtZW50UmVmO1xyXG5cclxuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gIHByaXZhdGUgcHJlZml4Q2xzID0gJ2FudC1hdmF0YXInO1xyXG4gIHByaXZhdGUgc2l6ZU1hcDogTnpTaXplTWFwID0geyBsYXJnZTogJ2xnJywgc21hbGw6ICdzbScgfTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgdXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm1cclxuICApIHt9XHJcblxyXG4gIHNldENsYXNzKCk6IHRoaXMge1xyXG4gICAgY29uc3QgY2xhc3NNYXAgPSB7XHJcbiAgICAgIFt0aGlzLnByZWZpeENsc106IHRydWUsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tJHt0aGlzLnNpemVNYXBbdGhpcy5uelNpemVdfWBdOiB0aGlzLnNpemVNYXBbdGhpcy5uelNpemVdLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LSR7dGhpcy5uelNoYXBlfWBdOiB0aGlzLm56U2hhcGUsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30taWNvbmBdOiB0aGlzLm56SWNvbixcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1pbWFnZWBdOiB0aGlzLmhhc1NyYyAvLyBkb3duZ3JhZGUgYWZ0ZXIgaW1hZ2UgZXJyb3JcclxuICAgIH07XHJcbiAgICB0aGlzLnVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWwsIGNsYXNzTWFwKTtcclxuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBpbWdFcnJvcigkZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLm56RXJyb3IuZW1pdCgkZXZlbnQpO1xyXG4gICAgaWYgKCEkZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xyXG4gICAgICB0aGlzLmhhc1NyYyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmhhc0ljb24gPSBmYWxzZTtcclxuICAgICAgdGhpcy5oYXNUZXh0ID0gZmFsc2U7XHJcbiAgICAgIGlmICh0aGlzLm56SWNvbikge1xyXG4gICAgICAgIHRoaXMuaGFzSWNvbiA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5uelRleHQpIHtcclxuICAgICAgICB0aGlzLmhhc1RleHQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2V0Q2xhc3MoKS5ub3RpZnlDYWxjKCk7XHJcbiAgICAgIHRoaXMuc2V0U2l6ZVN0eWxlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnbnpJY29uJykgJiYgY2hhbmdlcy5uekljb24uY3VycmVudFZhbHVlKSB7XHJcbiAgICAgIHRoaXMub2xkQVBJSWNvbiA9IGNoYW5nZXMubnpJY29uLmN1cnJlbnRWYWx1ZS5pbmRleE9mKCdhbnRpY29uJykgPiAtMTtcclxuICAgIH1cclxuICAgIHRoaXMuaGFzVGV4dCA9ICF0aGlzLm56U3JjICYmICEhdGhpcy5uelRleHQ7XHJcbiAgICB0aGlzLmhhc0ljb24gPSAhdGhpcy5uelNyYyAmJiAhIXRoaXMubnpJY29uO1xyXG4gICAgdGhpcy5oYXNTcmMgPSAhIXRoaXMubnpTcmM7XHJcblxyXG4gICAgdGhpcy5zZXRDbGFzcygpLm5vdGlmeUNhbGMoKTtcclxuICAgIHRoaXMuc2V0U2l6ZVN0eWxlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhbGNTdHJpbmdTaXplKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmhhc1RleHQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoaWxkcmVuV2lkdGggPSB0aGlzLnRleHRFbC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgY29uc3QgYXZhdGFyV2lkdGggPSB0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xyXG4gICAgY29uc3Qgc2NhbGUgPSBhdmF0YXJXaWR0aCAtIDggPCBjaGlsZHJlbldpZHRoID8gKGF2YXRhcldpZHRoIC0gOCkgLyBjaGlsZHJlbldpZHRoIDogMTtcclxuICAgIHRoaXMudGV4dFN0eWxlcyA9IHtcclxuICAgICAgdHJhbnNmb3JtOiBgc2NhbGUoJHtzY2FsZX0pIHRyYW5zbGF0ZVgoLTUwJSlgXHJcbiAgICB9O1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLm56U2l6ZSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLnRleHRTdHlsZXMsIHtcclxuICAgICAgICBsaW5lSGVpZ2h0OiBgJHt0aGlzLm56U2l6ZX1weGBcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbm90aWZ5Q2FsYygpOiB0aGlzIHtcclxuICAgIC8vIElmIHVzZSBuZ0FmdGVyVmlld0NoZWNrZWQsIGFsd2F5cyBkZW1hbmRzIG1vcmUgY29tcHV0YXRpb25zLCBzby4uLi4uLlxyXG4gICAgaWYgKHRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2FsY1N0cmluZ1NpemUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0U2l6ZVN0eWxlKCk6IHZvaWQge1xyXG4gICAgY29uc3Qgc2l6ZSA9IHR5cGVvZiB0aGlzLm56U2l6ZSA9PT0gJ3N0cmluZycgPyB0aGlzLm56U2l6ZSA6IGAke3RoaXMubnpTaXplfXB4YDtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ3dpZHRoJywgc2l6ZSk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICdoZWlnaHQnLCBzaXplKTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ2xpbmUtaGVpZ2h0Jywgc2l6ZSk7XHJcbiAgICBpZiAodGhpcy5oYXNJY29uKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ2ZvbnQtc2l6ZScsIGBjYWxjKCR7c2l6ZX0gLyAyKWApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8aVxyXG4gIG56LWljb25cclxuICAqbmdJZj1cIm56SWNvbiAmJiBoYXNJY29uXCJcclxuICBbbnpUeXBlXT1cIiFvbGRBUElJY29uICYmIG56SWNvblwiXHJcbiAgW25nQ2xhc3NdPVwib2xkQVBJSWNvbiAmJiBuekljb25cIlxyXG4+PC9pPlxyXG48aW1nXHJcbiAgKm5nSWY9XCJuelNyYyAmJiBoYXNTcmNcIlxyXG4gIFtzcmNdPVwibnpTcmNcIlxyXG4gIFthdHRyLnNyY3NldF09XCJuelNyY1NldFwiXHJcbiAgW2F0dHIuYWx0XT1cIm56QWx0XCJcclxuICAoZXJyb3IpPVwiaW1nRXJyb3IoJGV2ZW50KVwiXHJcbi8+XHJcbjxzcGFuIGNsYXNzPVwiYW50LWF2YXRhci1zdHJpbmdcIiAjdGV4dEVsIFtuZ1N0eWxlXT1cInRleHRTdHlsZXNcIiAqbmdJZj1cIm56VGV4dCAmJiBoYXNUZXh0XCI+e3tcclxuICBuelRleHRcclxufX08L3NwYW4+XHJcbiJdfQ==
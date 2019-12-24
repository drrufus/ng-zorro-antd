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
var _c0 = ["textEl"];
function NzAvatarComponent_i_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 3);
} if (rf & 2) {
    var ctx_r372 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nzType", !ctx_r372.oldAPIIcon && ctx_r372.nzIcon)("ngClass", ctx_r372.oldAPIIcon && ctx_r372.nzIcon);
} }
function NzAvatarComponent_img_1_Template(rf, ctx) { if (rf & 1) {
    var _r376 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 4);
    i0.ɵɵlistener("error", function NzAvatarComponent_img_1_Template_img_error_0_listener($event) { i0.ɵɵrestoreView(_r376); var ctx_r375 = i0.ɵɵnextContext(); return ctx_r375.imgError($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r373 = i0.ɵɵnextContext();
    i0.ɵɵproperty("src", ctx_r373.nzSrc, i0.ɵɵsanitizeUrl);
    i0.ɵɵattribute("srcset", ctx_r373.nzSrcSet, i0.ɵɵsanitizeUrl)("alt", ctx_r373.nzAlt);
} }
function NzAvatarComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 5, 6);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r374 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngStyle", ctx_r374.textStyles);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r374.nzText);
} }
var NZ_CONFIG_COMPONENT_NAME = 'avatar';
var NzAvatarComponent = /** @class */ (function () {
    function NzAvatarComponent(nzConfigService, elementRef, cd, updateHostClassService, renderer, platform) {
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
    NzAvatarComponent.prototype.setClass = function () {
        var _a;
        var classMap = (_a = {},
            _a[this.prefixCls] = true,
            _a[this.prefixCls + "-" + this.sizeMap[this.nzSize]] = this.sizeMap[this.nzSize],
            _a[this.prefixCls + "-" + this.nzShape] = this.nzShape,
            _a[this.prefixCls + "-icon"] = this.nzIcon,
            _a[this.prefixCls + "-image"] = this.hasSrc // downgrade after image error
        ,
            _a);
        this.updateHostClassService.updateHostClass(this.el, classMap);
        this.cd.detectChanges();
        return this;
    };
    NzAvatarComponent.prototype.imgError = function ($event) {
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
    };
    NzAvatarComponent.prototype.ngOnChanges = function (changes) {
        if (changes.hasOwnProperty('nzIcon') && changes.nzIcon.currentValue) {
            this.oldAPIIcon = changes.nzIcon.currentValue.indexOf('anticon') > -1;
        }
        this.hasText = !this.nzSrc && !!this.nzText;
        this.hasIcon = !this.nzSrc && !!this.nzIcon;
        this.hasSrc = !!this.nzSrc;
        this.setClass().notifyCalc();
        this.setSizeStyle();
    };
    NzAvatarComponent.prototype.calcStringSize = function () {
        if (!this.hasText) {
            return;
        }
        var childrenWidth = this.textEl.nativeElement.offsetWidth;
        var avatarWidth = this.el.getBoundingClientRect().width;
        var scale = avatarWidth - 8 < childrenWidth ? (avatarWidth - 8) / childrenWidth : 1;
        this.textStyles = {
            transform: "scale(" + scale + ") translateX(-50%)"
        };
        if (typeof this.nzSize === 'number') {
            Object.assign(this.textStyles, {
                lineHeight: this.nzSize + "px"
            });
        }
        this.cd.detectChanges();
    };
    NzAvatarComponent.prototype.notifyCalc = function () {
        var _this = this;
        // If use ngAfterViewChecked, always demands more computations, so......
        if (this.platform.isBrowser) {
            setTimeout(function () {
                _this.calcStringSize();
            });
        }
        return this;
    };
    NzAvatarComponent.prototype.setSizeStyle = function () {
        var size = typeof this.nzSize === 'string' ? this.nzSize : this.nzSize + "px";
        this.renderer.setStyle(this.el, 'width', size);
        this.renderer.setStyle(this.el, 'height', size);
        this.renderer.setStyle(this.el, 'line-height', size);
        if (this.hasIcon) {
            this.renderer.setStyle(this.el, 'font-size', "calc(" + size + " / 2)");
        }
    };
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
    return NzAvatarComponent;
}());
export { NzAvatarComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYXZhdGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvYXZhdGFyLyIsInNvdXJjZXMiOlsibnotYXZhdGFyLmNvbXBvbmVudC50cyIsIm56LWF2YXRhci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04sU0FBUyxFQUVULFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGVBQWUsRUFBMkMsd0JBQXdCLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7O0lDeEJwSSx1QkFLSzs7O0lBRkgsZ0VBQWdDLG1EQUFBOzs7O0lBR2xDLDhCQU9BO0lBRkUsZ01BQTBCO0lBTDVCLGlCQU9BOzs7SUFMRSxzREFBYTtJQUNiLDZEQUF3Qix1QkFBQTs7O0lBSTFCLGtDQUF5RjtJQUFBLFlBRXZGO0lBQUEsaUJBQU87OztJQUYrQiw2Q0FBc0I7SUFBMkIsZUFFdkY7SUFGdUYscUNBRXZGOztBRFdGLElBQU0sd0JBQXdCLEdBQUcsUUFBUSxDQUFDO0FBRTFDO0lBK0JFLDJCQUNTLGVBQWdDLEVBQy9CLFVBQXNCLEVBQ3RCLEVBQXFCLEVBQ3JCLHNCQUFnRCxFQUNoRCxRQUFtQixFQUNuQixRQUFrQjtRQUxuQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDL0IsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUNyQiwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQTBCO1FBQ2hELGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsYUFBUSxHQUFSLFFB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QWlCLENBQUMsSUFBSTthQUN0Qzs7a0JBRUUsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsTUFBTTs7a0JBUU4sU0FBUzttQkFBQyxRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOekNvbmZpZ1NlcnZpY2UsIE56U2hhcGVTQ1R5cGUsIE56U2l6ZUxEU1R5cGUsIE56U2l6ZU1hcCwgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLCBXaXRoQ29uZmlnIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICdhdmF0YXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei1hdmF0YXInLFxyXG4gIGV4cG9ydEFzOiAnbnpBdmF0YXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1hdmF0YXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW056VXBkYXRlSG9zdENsYXNzU2VydmljZV0sXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpBdmF0YXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgJ2NpcmNsZScpIG56U2hhcGU6IE56U2hhcGVTQ1R5cGU7XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCAnZGVmYXVsdCcpIG56U2l6ZTogTnpTaXplTERTVHlwZSB8IG51bWJlcjtcclxuICBASW5wdXQoKSBuelRleHQ6IHN0cmluZztcclxuICBASW5wdXQoKSBuelNyYzogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG56U3JjU2V0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpBbHQ6IHN0cmluZztcclxuICBASW5wdXQoKSBuekljb246IHN0cmluZztcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpFcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnQ+KCk7XHJcblxyXG4gIG9sZEFQSUljb24gPSB0cnVlOyAvLyBNYWtlIHRoZSB1c2VyIGRlZmluZWQgaWNvbiBjb21wYXRpYmxlIHRvIG9sZCBBUEkuIFNob3VsZCBiZSByZW1vdmVkIGluIDIuMC5cclxuICBoYXNUZXh0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgaGFzU3JjOiBib29sZWFuID0gdHJ1ZTtcclxuICBoYXNJY29uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgdGV4dFN0eWxlczoge307XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3RleHRFbCcsIHsgc3RhdGljOiBmYWxzZSB9KSB0ZXh0RWw6IEVsZW1lbnRSZWY7XHJcblxyXG4gIHByaXZhdGUgZWw6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBwcmVmaXhDbHMgPSAnYW50LWF2YXRhcic7XHJcbiAgcHJpdmF0ZSBzaXplTWFwOiBOelNpemVNYXAgPSB7IGxhcmdlOiAnbGcnLCBzbWFsbDogJ3NtJyB9O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSB1cGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybVxyXG4gICkge31cclxuXHJcbiAgc2V0Q2xhc3MoKTogdGhpcyB7XHJcbiAgICBjb25zdCBjbGFzc01hcCA9IHtcclxuICAgICAgW3RoaXMucHJlZml4Q2xzXTogdHJ1ZSxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS0ke3RoaXMuc2l6ZU1hcFt0aGlzLm56U2l6ZV19YF06IHRoaXMuc2l6ZU1hcFt0aGlzLm56U2l6ZV0sXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tJHt0aGlzLm56U2hhcGV9YF06IHRoaXMubnpTaGFwZSxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1pY29uYF06IHRoaXMubnpJY29uLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWltYWdlYF06IHRoaXMuaGFzU3JjIC8vIGRvd25ncmFkZSBhZnRlciBpbWFnZSBlcnJvclxyXG4gICAgfTtcclxuICAgIHRoaXMudXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbCwgY2xhc3NNYXApO1xyXG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGltZ0Vycm9yKCRldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMubnpFcnJvci5lbWl0KCRldmVudCk7XHJcbiAgICBpZiAoISRldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XHJcbiAgICAgIHRoaXMuaGFzU3JjID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuaGFzSWNvbiA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmhhc1RleHQgPSBmYWxzZTtcclxuICAgICAgaWYgKHRoaXMubnpJY29uKSB7XHJcbiAgICAgICAgdGhpcy5oYXNJY29uID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLm56VGV4dCkge1xyXG4gICAgICAgIHRoaXMuaGFzVGV4dCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXRDbGFzcygpLm5vdGlmeUNhbGMoKTtcclxuICAgICAgdGhpcy5zZXRTaXplU3R5bGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCduekljb24nKSAmJiBjaGFuZ2VzLm56SWNvbi5jdXJyZW50VmFsdWUpIHtcclxuICAgICAgdGhpcy5vbGRBUElJY29uID0gY2hhbmdlcy5uekljb24uY3VycmVudFZhbHVlLmluZGV4T2YoJ2FudGljb24nKSA+IC0xO1xyXG4gICAgfVxyXG4gICAgdGhpcy5oYXNUZXh0ID0gIXRoaXMubnpTcmMgJiYgISF0aGlzLm56VGV4dDtcclxuICAgIHRoaXMuaGFzSWNvbiA9ICF0aGlzLm56U3JjICYmICEhdGhpcy5uekljb247XHJcbiAgICB0aGlzLmhhc1NyYyA9ICEhdGhpcy5uelNyYztcclxuXHJcbiAgICB0aGlzLnNldENsYXNzKCkubm90aWZ5Q2FsYygpO1xyXG4gICAgdGhpcy5zZXRTaXplU3R5bGUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FsY1N0cmluZ1NpemUoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuaGFzVGV4dCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2hpbGRyZW5XaWR0aCA9IHRoaXMudGV4dEVsLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XHJcbiAgICBjb25zdCBhdmF0YXJXaWR0aCA9IHRoaXMuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XHJcbiAgICBjb25zdCBzY2FsZSA9IGF2YXRhcldpZHRoIC0gOCA8IGNoaWxkcmVuV2lkdGggPyAoYXZhdGFyV2lkdGggLSA4KSAvIGNoaWxkcmVuV2lkdGggOiAxO1xyXG4gICAgdGhpcy50ZXh0U3R5bGVzID0ge1xyXG4gICAgICB0cmFuc2Zvcm06IGBzY2FsZSgke3NjYWxlfSkgdHJhbnNsYXRlWCgtNTAlKWBcclxuICAgIH07XHJcbiAgICBpZiAodHlwZW9mIHRoaXMubnpTaXplID09PSAnbnVtYmVyJykge1xyXG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMudGV4dFN0eWxlcywge1xyXG4gICAgICAgIGxpbmVIZWlnaHQ6IGAke3RoaXMubnpTaXplfXB4YFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBub3RpZnlDYWxjKCk6IHRoaXMge1xyXG4gICAgLy8gSWYgdXNlIG5nQWZ0ZXJWaWV3Q2hlY2tlZCwgYWx3YXlzIGRlbWFuZHMgbW9yZSBjb21wdXRhdGlvbnMsIHNvLi4uLi4uXHJcbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jYWxjU3RyaW5nU2l6ZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRTaXplU3R5bGUoKTogdm9pZCB7XHJcbiAgICBjb25zdCBzaXplID0gdHlwZW9mIHRoaXMubnpTaXplID09PSAnc3RyaW5nJyA/IHRoaXMubnpTaXplIDogYCR7dGhpcy5uelNpemV9cHhgO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAnd2lkdGgnLCBzaXplKTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ2hlaWdodCcsIHNpemUpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAnbGluZS1oZWlnaHQnLCBzaXplKTtcclxuICAgIGlmICh0aGlzLmhhc0ljb24pIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAnZm9udC1zaXplJywgYGNhbGMoJHtzaXplfSAvIDIpYCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxpXHJcbiAgbnotaWNvblxyXG4gICpuZ0lmPVwibnpJY29uICYmIGhhc0ljb25cIlxyXG4gIFtuelR5cGVdPVwiIW9sZEFQSUljb24gJiYgbnpJY29uXCJcclxuICBbbmdDbGFzc109XCJvbGRBUElJY29uICYmIG56SWNvblwiXHJcbj48L2k+XHJcbjxpbWdcclxuICAqbmdJZj1cIm56U3JjICYmIGhhc1NyY1wiXHJcbiAgW3NyY109XCJuelNyY1wiXHJcbiAgW2F0dHIuc3Jjc2V0XT1cIm56U3JjU2V0XCJcclxuICBbYXR0ci5hbHRdPVwibnpBbHRcIlxyXG4gIChlcnJvcik9XCJpbWdFcnJvcigkZXZlbnQpXCJcclxuLz5cclxuPHNwYW4gY2xhc3M9XCJhbnQtYXZhdGFyLXN0cmluZ1wiICN0ZXh0RWwgW25nU3R5bGVdPVwidGV4dFN0eWxlc1wiICpuZ0lmPVwibnpUZXh0ICYmIGhhc1RleHRcIj57e1xyXG4gIG56VGV4dFxyXG59fTwvc3Bhbj5cclxuIl19
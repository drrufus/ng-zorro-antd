/**
 * @fileoverview added by tsickle
 * Generated from: nz-avatar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'avatar';
export class NzAvatarComponent {
    /**
     * @param {?} nzConfigService
     * @param {?} elementRef
     * @param {?} cd
     * @param {?} updateHostClassService
     * @param {?} renderer
     * @param {?} platform
     */
    constructor(nzConfigService, elementRef, cd, updateHostClassService, renderer, platform) {
        this.nzConfigService = nzConfigService;
        this.elementRef = elementRef;
        this.cd = cd;
        this.updateHostClassService = updateHostClassService;
        this.renderer = renderer;
        this.platform = platform;
        this.nzError = new EventEmitter();
        this.oldAPIIcon = true; // Make the user defined icon compatible to old API. Should be removed in 2.0.
        // Make the user defined icon compatible to old API. Should be removed in 2.0.
        this.hasText = false;
        this.hasSrc = true;
        this.hasIcon = false;
        this.el = this.elementRef.nativeElement;
        this.prefixCls = 'ant-avatar';
        this.sizeMap = { large: 'lg', small: 'sm' };
    }
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    setClass() {
        /** @type {?} */
        const classMap = {
            [(/** @type {?} */ (this)).prefixCls]: true,
            [`${(/** @type {?} */ (this)).prefixCls}-${(/** @type {?} */ (this)).sizeMap[(/** @type {?} */ (this)).nzSize]}`]: (/** @type {?} */ (this)).sizeMap[(/** @type {?} */ (this)).nzSize],
            [`${(/** @type {?} */ (this)).prefixCls}-${(/** @type {?} */ (this)).nzShape}`]: (/** @type {?} */ (this)).nzShape,
            [`${(/** @type {?} */ (this)).prefixCls}-icon`]: (/** @type {?} */ (this)).nzIcon,
            [`${(/** @type {?} */ (this)).prefixCls}-image`]: (/** @type {?} */ (this)).hasSrc // downgrade after image error
        };
        (/** @type {?} */ (this)).updateHostClassService.updateHostClass((/** @type {?} */ (this)).el, classMap);
        (/** @type {?} */ (this)).cd.detectChanges();
        return (/** @type {?} */ (this));
    }
    /**
     * @param {?} $event
     * @return {?}
     */
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
    /**
     * @param {?} changes
     * @return {?}
     */
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
    /**
     * @private
     * @return {?}
     */
    calcStringSize() {
        if (!this.hasText) {
            return;
        }
        /** @type {?} */
        const childrenWidth = this.textEl.nativeElement.offsetWidth;
        /** @type {?} */
        const avatarWidth = this.el.getBoundingClientRect().width;
        /** @type {?} */
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
    /**
     * @private
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    notifyCalc() {
        // If use ngAfterViewChecked, always demands more computations, so......
        if ((/** @type {?} */ (this)).platform.isBrowser) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                (/** @type {?} */ (this)).calcStringSize();
            }));
        }
        return (/** @type {?} */ (this));
    }
    /**
     * @private
     * @return {?}
     */
    setSizeStyle() {
        /** @type {?} */
        const size = typeof this.nzSize === 'string' ? this.nzSize : `${this.nzSize}px`;
        this.renderer.setStyle(this.el, 'width', size);
        this.renderer.setStyle(this.el, 'height', size);
        this.renderer.setStyle(this.el, 'line-height', size);
        if (this.hasIcon) {
            this.renderer.setStyle(this.el, 'font-size', `calc(${size} / 2)`);
        }
    }
}
NzAvatarComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-avatar',
                exportAs: 'nzAvatar',
                template: "<i nz-icon *ngIf=\"nzIcon && hasIcon\" [nzType]=\"!oldAPIIcon && nzIcon\" [ngClass]=\"oldAPIIcon && nzIcon\"></i>\r\n<img *ngIf=\"nzSrc && hasSrc\" [src]=\"nzSrc\" [attr.srcset]=\"nzSrcSet\" [attr.alt]=\"nzAlt\" (error)=\"imgError($event)\"/>\r\n<span class=\"ant-avatar-string\" #textEl [ngStyle]=\"textStyles\" *ngIf=\"nzText && hasText\">{{ nzText }}</span>\r\n",
                providers: [NzUpdateHostClassService],
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
NzAvatarComponent.ctorParameters = () => [
    { type: NzConfigService },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: NzUpdateHostClassService },
    { type: Renderer2 },
    { type: Platform }
];
NzAvatarComponent.propDecorators = {
    nzShape: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzText: [{ type: Input }],
    nzSrc: [{ type: Input }],
    nzSrcSet: [{ type: Input }],
    nzAlt: [{ type: Input }],
    nzIcon: [{ type: Input }],
    nzError: [{ type: Output }],
    textEl: [{ type: ViewChild, args: ['textEl', { static: false },] }]
};
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, 'circle'),
    tslib_1.__metadata("design:type", String)
], NzAvatarComponent.prototype, "nzShape", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, 'default'),
    tslib_1.__metadata("design:type", Object)
], NzAvatarComponent.prototype, "nzSize", void 0);
if (false) {
    /** @type {?} */
    NzAvatarComponent.prototype.nzShape;
    /** @type {?} */
    NzAvatarComponent.prototype.nzSize;
    /** @type {?} */
    NzAvatarComponent.prototype.nzText;
    /** @type {?} */
    NzAvatarComponent.prototype.nzSrc;
    /** @type {?} */
    NzAvatarComponent.prototype.nzSrcSet;
    /** @type {?} */
    NzAvatarComponent.prototype.nzAlt;
    /** @type {?} */
    NzAvatarComponent.prototype.nzIcon;
    /** @type {?} */
    NzAvatarComponent.prototype.nzError;
    /** @type {?} */
    NzAvatarComponent.prototype.oldAPIIcon;
    /** @type {?} */
    NzAvatarComponent.prototype.hasText;
    /** @type {?} */
    NzAvatarComponent.prototype.hasSrc;
    /** @type {?} */
    NzAvatarComponent.prototype.hasIcon;
    /** @type {?} */
    NzAvatarComponent.prototype.textStyles;
    /** @type {?} */
    NzAvatarComponent.prototype.textEl;
    /**
     * @type {?}
     * @private
     */
    NzAvatarComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NzAvatarComponent.prototype.prefixCls;
    /**
     * @type {?}
     * @private
     */
    NzAvatarComponent.prototype.sizeMap;
    /** @type {?} */
    NzAvatarComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzAvatarComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzAvatarComponent.prototype.cd;
    /**
     * @type {?}
     * @private
     */
    NzAvatarComponent.prototype.updateHostClassService;
    /**
     * @type {?}
     * @private
     */
    NzAvatarComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzAvatarComponent.prototype.platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYXZhdGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvYXZhdGFyLyIsInNvdXJjZXMiOlsibnotYXZhdGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04sU0FBUyxFQUVULFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUNMLGVBQWUsRUFJZix3QkFBd0IsRUFDeEIsVUFBVSxFQUNYLE1BQU0sb0JBQW9CLENBQUM7O01BRXRCLHdCQUF3QixHQUFHLFFBQVE7QUFXekMsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7Ozs7O0lBc0I1QixZQUNTLGVBQWdDLEVBQy9CLFVBQXNCLEVBQ3RCLEVBQXFCLEVBQ3JCLHNCQUFnRCxFQUNoRCxRQUFtQixFQUNuQixRQUFrQjtRQUxuQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDL0IsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUNyQiwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQTBCO1FBQ2hELGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQXBCVCxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVMsQ0FBQztRQUV2RCxlQUFVLEdBQUcsSUFBSSxDQUFDLENBQUMsOEVBQThFOztRQUNqRyxZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLFdBQU0sR0FBWSxJQUFJLENBQUM7UUFDdkIsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUtqQixPQUFFLEdBQWdCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFB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dEI7SUFBaEQsVUFBVSxDQUFDLHdCQUF3QixFQUFFLFNBQVMsQ0FBQzs7aURBQWdDOzs7SUFEekYsb0NBQWdGOztJQUNoRixtQ0FBeUY7O0lBQ3pGLG1DQUF3Qjs7SUFDeEIsa0NBQXVCOztJQUN2QixxQ0FBMEI7O0lBQzFCLGtDQUF1Qjs7SUFDdkIsbUNBQXdCOztJQUN4QixvQ0FBdUQ7O0lBRXZELHVDQUFrQjs7SUFDbEIsb0NBQXlCOztJQUN6QixtQ0FBdUI7O0lBQ3ZCLG9DQUF5Qjs7SUFDekIsdUNBQWU7O0lBRWYsbUNBQTJEOzs7OztJQUUzRCwrQkFBd0Q7Ozs7O0lBQ3hELHNDQUFpQzs7Ozs7SUFDakMsb0NBQTBEOztJQUd4RCw0Q0FBdUM7Ozs7O0lBQ3ZDLHVDQUE4Qjs7Ozs7SUFDOUIsK0JBQTZCOzs7OztJQUM3QixtREFBd0Q7Ozs7O0lBQ3hELHFDQUEyQjs7Ozs7SUFDM0IscUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge1xyXG4gIE56Q29uZmlnU2VydmljZSxcclxuICBOelNoYXBlU0NUeXBlLFxyXG4gIE56U2l6ZUxEU1R5cGUsXHJcbiAgTnpTaXplTWFwLFxyXG4gIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSxcclxuICBXaXRoQ29uZmlnXHJcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICdhdmF0YXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei1hdmF0YXInLFxyXG4gIGV4cG9ydEFzOiAnbnpBdmF0YXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1hdmF0YXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW056VXBkYXRlSG9zdENsYXNzU2VydmljZV0sXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpBdmF0YXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgJ2NpcmNsZScpIG56U2hhcGU6IE56U2hhcGVTQ1R5cGU7XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCAnZGVmYXVsdCcpIG56U2l6ZTogTnpTaXplTERTVHlwZSB8IG51bWJlcjtcclxuICBASW5wdXQoKSBuelRleHQ6IHN0cmluZztcclxuICBASW5wdXQoKSBuelNyYzogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG56U3JjU2V0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpBbHQ6IHN0cmluZztcclxuICBASW5wdXQoKSBuekljb246IHN0cmluZztcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpFcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnQ+KCk7XHJcblxyXG4gIG9sZEFQSUljb24gPSB0cnVlOyAvLyBNYWtlIHRoZSB1c2VyIGRlZmluZWQgaWNvbiBjb21wYXRpYmxlIHRvIG9sZCBBUEkuIFNob3VsZCBiZSByZW1vdmVkIGluIDIuMC5cclxuICBoYXNUZXh0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgaGFzU3JjOiBib29sZWFuID0gdHJ1ZTtcclxuICBoYXNJY29uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgdGV4dFN0eWxlczoge307XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3RleHRFbCcsIHsgc3RhdGljOiBmYWxzZSB9KSB0ZXh0RWw6IEVsZW1lbnRSZWY7XHJcblxyXG4gIHByaXZhdGUgZWw6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBwcmVmaXhDbHMgPSAnYW50LWF2YXRhcic7XHJcbiAgcHJpdmF0ZSBzaXplTWFwOiBOelNpemVNYXAgPSB7IGxhcmdlOiAnbGcnLCBzbWFsbDogJ3NtJyB9O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSB1cGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybVxyXG4gICkge31cclxuXHJcbiAgc2V0Q2xhc3MoKTogdGhpcyB7XHJcbiAgICBjb25zdCBjbGFzc01hcCA9IHtcclxuICAgICAgW3RoaXMucHJlZml4Q2xzXTogdHJ1ZSxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS0ke3RoaXMuc2l6ZU1hcFt0aGlzLm56U2l6ZV19YF06IHRoaXMuc2l6ZU1hcFt0aGlzLm56U2l6ZV0sXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tJHt0aGlzLm56U2hhcGV9YF06IHRoaXMubnpTaGFwZSxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1pY29uYF06IHRoaXMubnpJY29uLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWltYWdlYF06IHRoaXMuaGFzU3JjIC8vIGRvd25ncmFkZSBhZnRlciBpbWFnZSBlcnJvclxyXG4gICAgfTtcclxuICAgIHRoaXMudXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbCwgY2xhc3NNYXApO1xyXG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGltZ0Vycm9yKCRldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMubnpFcnJvci5lbWl0KCRldmVudCk7XHJcbiAgICBpZiAoISRldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XHJcbiAgICAgIHRoaXMuaGFzU3JjID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuaGFzSWNvbiA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmhhc1RleHQgPSBmYWxzZTtcclxuICAgICAgaWYgKHRoaXMubnpJY29uKSB7XHJcbiAgICAgICAgdGhpcy5oYXNJY29uID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLm56VGV4dCkge1xyXG4gICAgICAgIHRoaXMuaGFzVGV4dCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXRDbGFzcygpLm5vdGlmeUNhbGMoKTtcclxuICAgICAgdGhpcy5zZXRTaXplU3R5bGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCduekljb24nKSAmJiBjaGFuZ2VzLm56SWNvbi5jdXJyZW50VmFsdWUpIHtcclxuICAgICAgdGhpcy5vbGRBUElJY29uID0gY2hhbmdlcy5uekljb24uY3VycmVudFZhbHVlLmluZGV4T2YoJ2FudGljb24nKSA+IC0xO1xyXG4gICAgfVxyXG4gICAgdGhpcy5oYXNUZXh0ID0gIXRoaXMubnpTcmMgJiYgISF0aGlzLm56VGV4dDtcclxuICAgIHRoaXMuaGFzSWNvbiA9ICF0aGlzLm56U3JjICYmICEhdGhpcy5uekljb247XHJcbiAgICB0aGlzLmhhc1NyYyA9ICEhdGhpcy5uelNyYztcclxuXHJcbiAgICB0aGlzLnNldENsYXNzKCkubm90aWZ5Q2FsYygpO1xyXG4gICAgdGhpcy5zZXRTaXplU3R5bGUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FsY1N0cmluZ1NpemUoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuaGFzVGV4dCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2hpbGRyZW5XaWR0aCA9IHRoaXMudGV4dEVsLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XHJcbiAgICBjb25zdCBhdmF0YXJXaWR0aCA9IHRoaXMuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XHJcbiAgICBjb25zdCBzY2FsZSA9IGF2YXRhcldpZHRoIC0gOCA8IGNoaWxkcmVuV2lkdGggPyAoYXZhdGFyV2lkdGggLSA4KSAvIGNoaWxkcmVuV2lkdGggOiAxO1xyXG4gICAgdGhpcy50ZXh0U3R5bGVzID0ge1xyXG4gICAgICB0cmFuc2Zvcm06IGBzY2FsZSgke3NjYWxlfSkgdHJhbnNsYXRlWCgtNTAlKWBcclxuICAgIH07XHJcbiAgICBpZiAodHlwZW9mIHRoaXMubnpTaXplID09PSAnbnVtYmVyJykge1xyXG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMudGV4dFN0eWxlcywge1xyXG4gICAgICAgIGxpbmVIZWlnaHQ6IGAke3RoaXMubnpTaXplfXB4YFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBub3RpZnlDYWxjKCk6IHRoaXMge1xyXG4gICAgLy8gSWYgdXNlIG5nQWZ0ZXJWaWV3Q2hlY2tlZCwgYWx3YXlzIGRlbWFuZHMgbW9yZSBjb21wdXRhdGlvbnMsIHNvLi4uLi4uXHJcbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jYWxjU3RyaW5nU2l6ZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRTaXplU3R5bGUoKTogdm9pZCB7XHJcbiAgICBjb25zdCBzaXplID0gdHlwZW9mIHRoaXMubnpTaXplID09PSAnc3RyaW5nJyA/IHRoaXMubnpTaXplIDogYCR7dGhpcy5uelNpemV9cHhgO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAnd2lkdGgnLCBzaXplKTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ2hlaWdodCcsIHNpemUpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAnbGluZS1oZWlnaHQnLCBzaXplKTtcclxuICAgIGlmICh0aGlzLmhhc0ljb24pIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAnZm9udC1zaXplJywgYGNhbGMoJHtzaXplfSAvIDIpYCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==
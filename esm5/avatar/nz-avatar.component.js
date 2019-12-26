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
    NzAvatarComponent.prototype.setClass = /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    function () {
        var _a;
        /** @type {?} */
        var classMap = (_a = {},
            _a[(/** @type {?} */ (this)).prefixCls] = true,
            _a[(/** @type {?} */ (this)).prefixCls + "-" + (/** @type {?} */ (this)).sizeMap[(/** @type {?} */ (this)).nzSize]] = (/** @type {?} */ (this)).sizeMap[(/** @type {?} */ (this)).nzSize],
            _a[(/** @type {?} */ (this)).prefixCls + "-" + (/** @type {?} */ (this)).nzShape] = (/** @type {?} */ (this)).nzShape,
            _a[(/** @type {?} */ (this)).prefixCls + "-icon"] = (/** @type {?} */ (this)).nzIcon,
            _a[(/** @type {?} */ (this)).prefixCls + "-image"] = (/** @type {?} */ (this)).hasSrc // downgrade after image error
        ,
            _a);
        (/** @type {?} */ (this)).updateHostClassService.updateHostClass((/** @type {?} */ (this)).el, classMap);
        (/** @type {?} */ (this)).cd.detectChanges();
        return (/** @type {?} */ (this));
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NzAvatarComponent.prototype.imgError = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
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
    /**
     * @param {?} changes
     * @return {?}
     */
    NzAvatarComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.hasOwnProperty('nzIcon') && changes.nzIcon.currentValue) {
            this.oldAPIIcon = changes.nzIcon.currentValue.indexOf('anticon') > -1;
        }
        this.hasText = !this.nzSrc && !!this.nzText;
        this.hasIcon = !this.nzSrc && !!this.nzIcon;
        this.hasSrc = !!this.nzSrc;
        this.setClass().notifyCalc();
        this.setSizeStyle();
    };
    /**
     * @private
     * @return {?}
     */
    NzAvatarComponent.prototype.calcStringSize = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.hasText) {
            return;
        }
        /** @type {?} */
        var childrenWidth = this.textEl.nativeElement.offsetWidth;
        /** @type {?} */
        var avatarWidth = this.el.getBoundingClientRect().width;
        /** @type {?} */
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
    /**
     * @private
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    NzAvatarComponent.prototype.notifyCalc = /**
     * @private
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    function () {
        var _this = this;
        // If use ngAfterViewChecked, always demands more computations, so......
        if ((/** @type {?} */ (this)).platform.isBrowser) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                (/** @type {?} */ (_this)).calcStringSize();
            }));
        }
        return (/** @type {?} */ (this));
    };
    /**
     * @private
     * @return {?}
     */
    NzAvatarComponent.prototype.setSizeStyle = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var size = typeof this.nzSize === 'string' ? this.nzSize : this.nzSize + "px";
        this.renderer.setStyle(this.el, 'width', size);
        this.renderer.setStyle(this.el, 'height', size);
        this.renderer.setStyle(this.el, 'line-height', size);
        if (this.hasIcon) {
            this.renderer.setStyle(this.el, 'font-size', "calc(" + size + " / 2)");
        }
    };
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
    NzAvatarComponent.ctorParameters = function () { return [
        { type: NzConfigService },
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: NzUpdateHostClassService },
        { type: Renderer2 },
        { type: Platform }
    ]; };
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
    return NzAvatarComponent;
}());
export { NzAvatarComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYXZhdGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvYXZhdGFyLyIsInNvdXJjZXMiOlsibnotYXZhdGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04sU0FBUyxFQUVULFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUNMLGVBQWUsRUFJZix3QkFBd0IsRUFDeEIsVUFBVSxFQUNYLE1BQU0sb0JBQW9CLENBQUM7O0lBRXRCLHdCQUF3QixHQUFHLFFBQVE7QUFFekM7SUErQkUsMkJBQ1MsZUFBZ0MsRUFDL0IsVUFBc0IsRUFDdEIsRUFBcUIsRUFDckIsc0JBQWdELEVBQ2hELFFBQW1CLEVBQ25CLFFBQWtCO1FBTG5CLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUMvQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQ3JCLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBMEI7UUFDaEQsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBcEJULFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBUyxDQUFDO1FBRXZELGVBQVUsR0FBRyxJQUFJLENBQUMsQ0FBQyw4RUFBOEU7O1FBQ2pHLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsV0FBTSxHQUFZLElBQUksQ0FBQztRQUN2QixZQUFPLEdBQVksS0FBSyxDQUFDO1FBS2pCLE9BQUUsR0FBZ0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDaEQsY0FBUyxHQUFHLFlBQVksQ0FBQztRQUN6QixZQUFPLEdBQWMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQztJQVN2RCxDQUFDOzs7Ozs7SUFFSixvQ0FBUTs7Ozs7SUFBUjs7O1lBQ1EsUUFBUTtZQUNaLEdBQUMsbUJBQUEsSUFBSSxFQUFBLENBQUMsU0FBUyxJQUFHLElBQUk7WUFDdEIsR0FBSSxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxTQUFTLFNBQUksbUJBQUEsSUFBSSxFQUFBLENBQUMsT0FBTyxDQUFDLG1CQUFBLElBQUksRUFBQSxDQUFDLE1BQU0sQ0FBRyxJQUFHLG1CQUFBLElBQUksRUFBQSxDQUFDLE9BQU8sQ0FBQyxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxNQUFNLENBQUM7WUFDN0UsR0FBSSxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxTQUFTLFNBQUksbUJBQUEsSUFBSSxFQUFBLENBQUMsT0FBUyxJQUFHLG1CQUFBLElBQUksRUFBQSxDQUFDLE9BQU87WUFDbkQsR0FBSSxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxTQUFTLFVBQU8sSUFBRyxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxNQUFNO1lBQ3ZDLEdBQUksbUJBQUEsSUFBSSxFQUFBLENBQUMsU0FBUyxXQUFRLElBQUcsbUJBQUEsSUFBSSxFQUFBLENBQUMsTUFBTSxDQUFDLDhCQUE4Qjs7ZUFDeEU7UUFDRCxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLENBQUMsbUJBQUEsSUFBSSxFQUFBLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQy9ELG1CQUFBLElBQUksRUFBQSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QixPQUFPLG1CQUFBLElBQUksRUFBQSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFFRCxvQ0FBUTs7OztJQUFSLFVBQVMsTUFBYTtRQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUFFO1lBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDZixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzthQUNyQjtpQkFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2FBQ3JCO1lBQ0QsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQzdCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjtJQUNILENBQUM7Ozs7O0lBRUQsdUNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRTtZQUNuRSxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN2RTtRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzVDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzVDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFM0IsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7OztJQUVPLDBDQUFjOzs7O0lBQXRCO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDakIsT0FBTztTQUNSOztZQUVLLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxXQUFXOztZQUNyRCxXQUFXLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEtBQUs7O1lBQ25ELEtBQUssR0FBRyxXQUFXLEdBQUcsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JGLElBQUksQ0FBQyxVQUFVLEdBQUc7WUFDaEIsU0FBUyxFQUFFLFdBQVMsS0FBSyx1QkFBb0I7U0FDOUMsQ0FBQztRQUNGLElBQUksT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLFFBQVEsRUFBRTtZQUNuQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQzdCLFVBQVUsRUFBSyxJQUFJLENBQUMsTUFBTSxPQUFJO2FBQy9CLENBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7Ozs7O0lBRU8sc0NBQVU7Ozs7OztJQUFsQjtRQUFBLGlCQVFDO1FBUEMsd0VBQXdFO1FBQ3hFLElBQUksbUJBQUEsSUFBSSxFQUFBLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUMzQixVQUFVOzs7WUFBQztnQkFDVCxtQkFBQSxLQUFJLEVBQUEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN4QixDQUFDLEVBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyxtQkFBQSxJQUFJLEVBQUEsQ0FBQztJQUNkLENBQUM7Ozs7O0lBRU8sd0NBQVk7Ozs7SUFBcEI7O1lBQ1EsSUFBSSxHQUFHLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFJLElBQUksQ0FBQyxNQUFNLE9BQUk7UUFDL0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckQsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsV0FBVyxFQUFFLFVBQVEsSUFBSSxVQUFPLENBQUMsQ0FBQztTQUNuRTtJQUNILENBQUM7O2dCQXRIRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFFBQVEsRUFBRSxVQUFVO29CQUNwQix3WEFBeUM7b0JBQ3pDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO29CQUNyQyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDOzs7O2dCQWxCQyxlQUFlO2dCQVpmLFVBQVU7Z0JBRlYsaUJBQWlCO2dCQWtCakIsd0JBQXdCO2dCQVh4QixTQUFTO2dCQVZGLFFBQVE7OzswQkFxQ2QsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7d0JBQ0wsS0FBSzsyQkFDTCxLQUFLO3dCQUNMLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxNQUFNO3lCQVFOLFNBQVMsU0FBQyxRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOztJQWZtQjtRQUEvQyxVQUFVLENBQUMsd0JBQXdCLEVBQUUsUUFBUSxDQUFDOztzREFBd0I7SUFDdEI7UUFBaEQsVUFBVSxDQUFDLHdCQUF3QixFQUFFLFNBQVMsQ0FBQzs7cURBQWdDO0lBNEczRix3QkFBQztDQUFBLEFBdkhELElBdUhDO1NBOUdZLGlCQUFpQjs7O0lBQzVCLG9DQUFnRjs7SUFDaEYsbUNBQXlGOztJQUN6RixtQ0FBd0I7O0lBQ3hCLGtDQUF1Qjs7SUFDdkIscUNBQTBCOztJQUMxQixrQ0FBdUI7O0lBQ3ZCLG1DQUF3Qjs7SUFDeEIsb0NBQXVEOztJQUV2RCx1Q0FBa0I7O0lBQ2xCLG9DQUF5Qjs7SUFDekIsbUNBQXVCOztJQUN2QixvQ0FBeUI7O0lBQ3pCLHVDQUFlOztJQUVmLG1DQUEyRDs7Ozs7SUFFM0QsK0JBQXdEOzs7OztJQUN4RCxzQ0FBaUM7Ozs7O0lBQ2pDLG9DQUEwRDs7SUFHeEQsNENBQXVDOzs7OztJQUN2Qyx1Q0FBOEI7Ozs7O0lBQzlCLCtCQUE2Qjs7Ozs7SUFDN0IsbURBQXdEOzs7OztJQUN4RCxxQ0FBMkI7Ozs7O0lBQzNCLHFDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtcclxuICBOekNvbmZpZ1NlcnZpY2UsXHJcbiAgTnpTaGFwZVNDVHlwZSxcclxuICBOelNpemVMRFNUeXBlLFxyXG4gIE56U2l6ZU1hcCxcclxuICBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsXHJcbiAgV2l0aENvbmZpZ1xyXG59IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAnYXZhdGFyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotYXZhdGFyJyxcclxuICBleHBvcnRBczogJ256QXZhdGFyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotYXZhdGFyLmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnM6IFtOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VdLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIE56QXZhdGFyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsICdjaXJjbGUnKSBuelNoYXBlOiBOelNoYXBlU0NUeXBlO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgJ2RlZmF1bHQnKSBuelNpemU6IE56U2l6ZUxEU1R5cGUgfCBudW1iZXI7XHJcbiAgQElucHV0KCkgbnpUZXh0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpTcmM6IHN0cmluZztcclxuICBASW5wdXQoKSBuelNyY1NldDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG56QWx0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpJY29uOiBzdHJpbmc7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56RXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50PigpO1xyXG5cclxuICBvbGRBUElJY29uID0gdHJ1ZTsgLy8gTWFrZSB0aGUgdXNlciBkZWZpbmVkIGljb24gY29tcGF0aWJsZSB0byBvbGQgQVBJLiBTaG91bGQgYmUgcmVtb3ZlZCBpbiAyLjAuXHJcbiAgaGFzVGV4dDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGhhc1NyYzogYm9vbGVhbiA9IHRydWU7XHJcbiAgaGFzSWNvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHRleHRTdHlsZXM6IHt9O1xyXG5cclxuICBAVmlld0NoaWxkKCd0ZXh0RWwnLCB7IHN0YXRpYzogZmFsc2UgfSkgdGV4dEVsOiBFbGVtZW50UmVmO1xyXG5cclxuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gIHByaXZhdGUgcHJlZml4Q2xzID0gJ2FudC1hdmF0YXInO1xyXG4gIHByaXZhdGUgc2l6ZU1hcDogTnpTaXplTWFwID0geyBsYXJnZTogJ2xnJywgc21hbGw6ICdzbScgfTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgdXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm1cclxuICApIHt9XHJcblxyXG4gIHNldENsYXNzKCk6IHRoaXMge1xyXG4gICAgY29uc3QgY2xhc3NNYXAgPSB7XHJcbiAgICAgIFt0aGlzLnByZWZpeENsc106IHRydWUsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tJHt0aGlzLnNpemVNYXBbdGhpcy5uelNpemVdfWBdOiB0aGlzLnNpemVNYXBbdGhpcy5uelNpemVdLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LSR7dGhpcy5uelNoYXBlfWBdOiB0aGlzLm56U2hhcGUsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30taWNvbmBdOiB0aGlzLm56SWNvbixcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1pbWFnZWBdOiB0aGlzLmhhc1NyYyAvLyBkb3duZ3JhZGUgYWZ0ZXIgaW1hZ2UgZXJyb3JcclxuICAgIH07XHJcbiAgICB0aGlzLnVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWwsIGNsYXNzTWFwKTtcclxuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBpbWdFcnJvcigkZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLm56RXJyb3IuZW1pdCgkZXZlbnQpO1xyXG4gICAgaWYgKCEkZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xyXG4gICAgICB0aGlzLmhhc1NyYyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmhhc0ljb24gPSBmYWxzZTtcclxuICAgICAgdGhpcy5oYXNUZXh0ID0gZmFsc2U7XHJcbiAgICAgIGlmICh0aGlzLm56SWNvbikge1xyXG4gICAgICAgIHRoaXMuaGFzSWNvbiA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5uelRleHQpIHtcclxuICAgICAgICB0aGlzLmhhc1RleHQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2V0Q2xhc3MoKS5ub3RpZnlDYWxjKCk7XHJcbiAgICAgIHRoaXMuc2V0U2l6ZVN0eWxlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnbnpJY29uJykgJiYgY2hhbmdlcy5uekljb24uY3VycmVudFZhbHVlKSB7XHJcbiAgICAgIHRoaXMub2xkQVBJSWNvbiA9IGNoYW5nZXMubnpJY29uLmN1cnJlbnRWYWx1ZS5pbmRleE9mKCdhbnRpY29uJykgPiAtMTtcclxuICAgIH1cclxuICAgIHRoaXMuaGFzVGV4dCA9ICF0aGlzLm56U3JjICYmICEhdGhpcy5uelRleHQ7XHJcbiAgICB0aGlzLmhhc0ljb24gPSAhdGhpcy5uelNyYyAmJiAhIXRoaXMubnpJY29uO1xyXG4gICAgdGhpcy5oYXNTcmMgPSAhIXRoaXMubnpTcmM7XHJcblxyXG4gICAgdGhpcy5zZXRDbGFzcygpLm5vdGlmeUNhbGMoKTtcclxuICAgIHRoaXMuc2V0U2l6ZVN0eWxlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhbGNTdHJpbmdTaXplKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmhhc1RleHQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoaWxkcmVuV2lkdGggPSB0aGlzLnRleHRFbC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgY29uc3QgYXZhdGFyV2lkdGggPSB0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xyXG4gICAgY29uc3Qgc2NhbGUgPSBhdmF0YXJXaWR0aCAtIDggPCBjaGlsZHJlbldpZHRoID8gKGF2YXRhcldpZHRoIC0gOCkgLyBjaGlsZHJlbldpZHRoIDogMTtcclxuICAgIHRoaXMudGV4dFN0eWxlcyA9IHtcclxuICAgICAgdHJhbnNmb3JtOiBgc2NhbGUoJHtzY2FsZX0pIHRyYW5zbGF0ZVgoLTUwJSlgXHJcbiAgICB9O1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLm56U2l6ZSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLnRleHRTdHlsZXMsIHtcclxuICAgICAgICBsaW5lSGVpZ2h0OiBgJHt0aGlzLm56U2l6ZX1weGBcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbm90aWZ5Q2FsYygpOiB0aGlzIHtcclxuICAgIC8vIElmIHVzZSBuZ0FmdGVyVmlld0NoZWNrZWQsIGFsd2F5cyBkZW1hbmRzIG1vcmUgY29tcHV0YXRpb25zLCBzby4uLi4uLlxyXG4gICAgaWYgKHRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2FsY1N0cmluZ1NpemUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0U2l6ZVN0eWxlKCk6IHZvaWQge1xyXG4gICAgY29uc3Qgc2l6ZSA9IHR5cGVvZiB0aGlzLm56U2l6ZSA9PT0gJ3N0cmluZycgPyB0aGlzLm56U2l6ZSA6IGAke3RoaXMubnpTaXplfXB4YDtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ3dpZHRoJywgc2l6ZSk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICdoZWlnaHQnLCBzaXplKTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ2xpbmUtaGVpZ2h0Jywgc2l6ZSk7XHJcbiAgICBpZiAodGhpcy5oYXNJY29uKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ2ZvbnQtc2l6ZScsIGBjYWxjKCR7c2l6ZX0gLyAyKWApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=
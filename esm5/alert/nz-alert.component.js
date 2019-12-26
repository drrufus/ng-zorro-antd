/**
 * @fileoverview added by tsickle
 * Generated from: nz-alert.component.ts
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
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { slideAlertMotion, InputBoolean, NzConfigService, WithConfig } from 'ng-zorro-antd/core';
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'alert';
var NzAlertComponent = /** @class */ (function () {
    function NzAlertComponent(nzConfigService) {
        this.nzConfigService = nzConfigService;
        this.nzType = 'info';
        this.nzBanner = false;
        this.nzOnClose = new EventEmitter();
        this.destroy = false;
        this.iconTheme = 'fill';
        this.isIconTypeObject = false;
        this.isTypeSet = false;
        this.isShowIconSet = false;
        this.inferredIconType = 'info-circle';
    }
    Object.defineProperty(NzAlertComponent.prototype, "iconType", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzIconType || this.inferredIconType;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzAlertComponent.prototype.closeAlert = /**
     * @return {?}
     */
    function () {
        this.destroy = true;
    };
    /**
     * @return {?}
     */
    NzAlertComponent.prototype.onFadeAnimationDone = /**
     * @return {?}
     */
    function () {
        if (this.destroy) {
            this.nzOnClose.emit(true);
        }
    };
    /**
     * @return {?}
     */
    NzAlertComponent.prototype.updateIconClassMap = /**
     * @return {?}
     */
    function () {
        switch (this.nzType) {
            case 'error':
                this.inferredIconType = 'close-circle';
                break;
            case 'success':
                this.inferredIconType = 'check-circle';
                break;
            case 'info':
                this.inferredIconType = 'info-circle';
                break;
            case 'warning':
                this.inferredIconType = 'exclamation-circle';
                break;
        }
        this.iconTheme = this.nzDescription ? 'outline' : 'fill';
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzAlertComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzShowIcon = changes.nzShowIcon, nzDescription = changes.nzDescription, nzType = changes.nzType, nzBanner = changes.nzBanner, nzIconType = changes.nzIconType;
        if (nzShowIcon) {
            this.isShowIconSet = true;
        }
        if (nzDescription || nzType) {
            this.updateIconClassMap();
        }
        if (nzType) {
            this.isTypeSet = true;
        }
        if (nzBanner) {
            if (!this.isTypeSet) {
                this.nzType = 'warning';
            }
            if (!this.isShowIconSet) {
                this.nzShowIcon = true;
            }
        }
        if (nzIconType) {
            this.isIconTypeObject = typeof nzIconType.currentValue === 'object';
        }
    };
    NzAlertComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-alert',
                    exportAs: 'nzAlert',
                    animations: [slideAlertMotion],
                    template: "<div *ngIf=\"!destroy\"\r\n  class=\"ant-alert\"\r\n  [class.ant-alert-success]=\"nzType === 'success'\"\r\n  [class.ant-alert-info]=\"nzType === 'info'\"\r\n  [class.ant-alert-warning]=\"nzType === 'warning'\"\r\n  [class.ant-alert-error]=\"nzType === 'error'\"\r\n  [class.ant-alert-no-icon]=\"!nzShowIcon\"\r\n  [class.ant-alert-banner]=\"nzBanner\"\r\n  [class.ant-alert-closable]=\"nzCloseable\"\r\n  [class.ant-alert-with-description]=\"!!nzDescription\"\r\n  [@slideAlertMotion]\r\n  (@slideAlertMotion.done)=\"onFadeAnimationDone()\">\r\n  <ng-container *ngIf=\"nzShowIcon\">\r\n    <i class=\"ant-alert-icon\" [ngClass]=\"nzIconType\" *ngIf=\"isIconTypeObject; else iconTemplate\"></i>\r\n    <ng-template #iconTemplate>\r\n      <i nz-icon class=\"ant-alert-icon\" [nzType]=\"iconType\" [nzTheme]=\"iconTheme\"></i>\r\n    </ng-template>\r\n  </ng-container>\r\n  <span class=\"ant-alert-message\" *ngIf=\"nzMessage\">\r\n    <ng-container *nzStringTemplateOutlet=\"nzMessage\">{{ nzMessage }}</ng-container>\r\n  </span>\r\n  <span class=\"ant-alert-description\" *ngIf=\"nzDescription\">\r\n    <ng-container *nzStringTemplateOutlet=\"nzDescription\">{{ nzDescription }}</ng-container>\r\n  </span>\r\n  <a *ngIf=\"nzCloseable || nzCloseText\"\r\n    class=\"ant-alert-close-icon\"\r\n    (click)=\"closeAlert()\">\r\n    <ng-template #closeDefaultTemplate>\r\n      <i nz-icon nzType=\"close\"></i>\r\n    </ng-template>\r\n    <ng-container *ngIf=\"nzCloseText; else closeDefaultTemplate\">\r\n      <ng-container *nzStringTemplateOutlet=\"nzCloseText\">{{ nzCloseText }}</ng-container>\r\n    </ng-container>\r\n  </a>\r\n</div>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    styles: ["\n      nz-alert {\n        display: block;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzAlertComponent.ctorParameters = function () { return [
        { type: NzConfigService }
    ]; };
    NzAlertComponent.propDecorators = {
        nzCloseText: [{ type: Input }],
        nzIconType: [{ type: Input }],
        nzMessage: [{ type: Input }],
        nzDescription: [{ type: Input }],
        nzType: [{ type: Input }],
        nzCloseable: [{ type: Input }],
        nzShowIcon: [{ type: Input }],
        nzBanner: [{ type: Input }],
        nzOnClose: [{ type: Output }]
    };
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzAlertComponent.prototype, "nzCloseable", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzAlertComponent.prototype, "nzShowIcon", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzAlertComponent.prototype, "nzBanner", void 0);
    return NzAlertComponent;
}());
export { NzAlertComponent };
if (false) {
    /** @type {?} */
    NzAlertComponent.prototype.nzCloseText;
    /** @type {?} */
    NzAlertComponent.prototype.nzIconType;
    /** @type {?} */
    NzAlertComponent.prototype.nzMessage;
    /** @type {?} */
    NzAlertComponent.prototype.nzDescription;
    /** @type {?} */
    NzAlertComponent.prototype.nzType;
    /** @type {?} */
    NzAlertComponent.prototype.nzCloseable;
    /** @type {?} */
    NzAlertComponent.prototype.nzShowIcon;
    /** @type {?} */
    NzAlertComponent.prototype.nzBanner;
    /** @type {?} */
    NzAlertComponent.prototype.nzOnClose;
    /** @type {?} */
    NzAlertComponent.prototype.destroy;
    /** @type {?} */
    NzAlertComponent.prototype.iconTheme;
    /** @type {?} */
    NzAlertComponent.prototype.isIconTypeObject;
    /**
     * @type {?}
     * @private
     */
    NzAlertComponent.prototype.isTypeSet;
    /**
     * @type {?}
     * @private
     */
    NzAlertComponent.prototype.isShowIconSet;
    /**
     * @type {?}
     * @private
     */
    NzAlertComponent.prototype.inferredIconType;
    /** @type {?} */
    NzAlertComponent.prototype.nzConfigService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9hbGVydC8iLCJzb3VyY2VzIjpbIm56LWFsZXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBR04saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQWUsZUFBZSxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztJQUV4Ryx3QkFBd0IsR0FBRyxPQUFPO0FBRXhDO0lBdUNFLDBCQUFtQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFsQjFDLFdBQU0sR0FBNkMsTUFBTSxDQUFDO1FBRzFDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdkIsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFNM0QsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixjQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ25CLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUVqQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLHFCQUFnQixHQUFXLGFBQWEsQ0FBQztJQUVLLENBQUM7SUFadkQsc0JBQUksc0NBQVE7Ozs7UUFBWjtZQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDbEQsQ0FBQzs7O09BQUE7Ozs7SUFZRCxxQ0FBVTs7O0lBQVY7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsOENBQW1COzs7SUFBbkI7UUFDRSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFNB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SUFFckMsMkNBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHNsaWRlQWxlcnRNb3Rpb24sIElucHV0Qm9vbGVhbiwgTmdDbGFzc1R5cGUsIE56Q29uZmlnU2VydmljZSwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAnYWxlcnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei1hbGVydCcsXHJcbiAgZXhwb3J0QXM6ICduekFsZXJ0JyxcclxuICBhbmltYXRpb25zOiBbc2xpZGVBbGVydE1vdGlvbl0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LWFsZXJ0LmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICBuei1hbGVydCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekFsZXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBuekNsb3NlVGV4dDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpJY29uVHlwZTogTmdDbGFzc1R5cGU7XHJcbiAgQElucHV0KCkgbnpNZXNzYWdlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuekRlc2NyaXB0aW9uOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuelR5cGU6ICdzdWNjZXNzJyB8ICdpbmZvJyB8ICd3YXJuaW5nJyB8ICdlcnJvcicgPSAnaW5mbyc7XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCBmYWxzZSkgQElucHV0Qm9vbGVhbigpIG56Q2xvc2VhYmxlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgZmFsc2UpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dJY29uOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekJhbm5lciA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIGdldCBpY29uVHlwZSgpOiBOZ0NsYXNzVHlwZSB7XHJcbiAgICByZXR1cm4gdGhpcy5uekljb25UeXBlIHx8IHRoaXMuaW5mZXJyZWRJY29uVHlwZTtcclxuICB9XHJcblxyXG4gIGRlc3Ryb3kgPSBmYWxzZTtcclxuICBpY29uVGhlbWUgPSAnZmlsbCc7XHJcbiAgaXNJY29uVHlwZU9iamVjdCA9IGZhbHNlO1xyXG5cclxuICBwcml2YXRlIGlzVHlwZVNldCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgaXNTaG93SWNvblNldCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgaW5mZXJyZWRJY29uVHlwZTogc3RyaW5nID0gJ2luZm8tY2lyY2xlJztcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlKSB7fVxyXG5cclxuICBjbG9zZUFsZXJ0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95ID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIG9uRmFkZUFuaW1hdGlvbkRvbmUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kZXN0cm95KSB7XHJcbiAgICAgIHRoaXMubnpPbkNsb3NlLmVtaXQodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVJY29uQ2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICBzd2l0Y2ggKHRoaXMubnpUeXBlKSB7XHJcbiAgICAgIGNhc2UgJ2Vycm9yJzpcclxuICAgICAgICB0aGlzLmluZmVycmVkSWNvblR5cGUgPSAnY2xvc2UtY2lyY2xlJztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnc3VjY2Vzcyc6XHJcbiAgICAgICAgdGhpcy5pbmZlcnJlZEljb25UeXBlID0gJ2NoZWNrLWNpcmNsZSc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2luZm8nOlxyXG4gICAgICAgIHRoaXMuaW5mZXJyZWRJY29uVHlwZSA9ICdpbmZvLWNpcmNsZSc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3dhcm5pbmcnOlxyXG4gICAgICAgIHRoaXMuaW5mZXJyZWRJY29uVHlwZSA9ICdleGNsYW1hdGlvbi1jaXJjbGUnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pY29uVGhlbWUgPSB0aGlzLm56RGVzY3JpcHRpb24gPyAnb3V0bGluZScgOiAnZmlsbCc7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBjb25zdCB7IG56U2hvd0ljb24sIG56RGVzY3JpcHRpb24sIG56VHlwZSwgbnpCYW5uZXIsIG56SWNvblR5cGUgfSA9IGNoYW5nZXM7XHJcblxyXG4gICAgaWYgKG56U2hvd0ljb24pIHtcclxuICAgICAgdGhpcy5pc1Nob3dJY29uU2V0ID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobnpEZXNjcmlwdGlvbiB8fCBuelR5cGUpIHtcclxuICAgICAgdGhpcy51cGRhdGVJY29uQ2xhc3NNYXAoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobnpUeXBlKSB7XHJcbiAgICAgIHRoaXMuaXNUeXBlU2V0ID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobnpCYW5uZXIpIHtcclxuICAgICAgaWYgKCF0aGlzLmlzVHlwZVNldCkge1xyXG4gICAgICAgIHRoaXMubnpUeXBlID0gJ3dhcm5pbmcnO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghdGhpcy5pc1Nob3dJY29uU2V0KSB7XHJcbiAgICAgICAgdGhpcy5uelNob3dJY29uID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChuekljb25UeXBlKSB7XHJcbiAgICAgIHRoaXMuaXNJY29uVHlwZU9iamVjdCA9IHR5cGVvZiBuekljb25UeXBlLmN1cnJlbnRWYWx1ZSA9PT0gJ29iamVjdCc7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==
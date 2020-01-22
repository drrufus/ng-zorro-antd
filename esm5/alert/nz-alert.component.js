/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9hbGVydC8iLCJzb3VyY2VzIjpbIm56LWFsZXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFHTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBZSxlQUFlLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0lBRXhHLHdCQUF3QixHQUFHLE9BQU87QUFFeEM7SUF1Q0UsMEJBQW1CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQWxCMUMsV0FBTSxHQUE2QyxNQUFNLENBQUM7UUFHMUMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUN2QixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQU0zRCxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGNBQVMsR0FBRyxNQUFNLENBQUM7UUFDbkIscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBRWpCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIscUJBQWdCLEdBQVcsYUFBYSxDQUFDO0lBRUssQ0FBQztJQVp2RCxzQkFBSSxzQ0FBUTs7OztRQUFaO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUNsRCxDQUFDOzs7T0FBQTs7OztJQVlELHFDQUFVOzs7SUFBVjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCw4Q0FBbUI7OztJQUFuQjtRQUNFLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsU0FB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QUVyQywyQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgc2xpZGVBbGVydE1vdGlvbiwgSW5wdXRCb29sZWFuLCBOZ0NsYXNzVHlwZSwgTnpDb25maWdTZXJ2aWNlLCBXaXRoQ29uZmlnIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICdhbGVydCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LWFsZXJ0JyxcclxuICBleHBvcnRBczogJ256QWxlcnQnLFxyXG4gIGFuaW1hdGlvbnM6IFtzbGlkZUFsZXJ0TW90aW9uXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotYWxlcnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIG56LWFsZXJ0IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56QWxlcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIG56Q2xvc2VUZXh0OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuekljb25UeXBlOiBOZ0NsYXNzVHlwZTtcclxuICBASW5wdXQoKSBuek1lc3NhZ2U6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56RGVzY3JpcHRpb246IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56VHlwZTogJ3N1Y2Nlc3MnIHwgJ2luZm8nIHwgJ3dhcm5pbmcnIHwgJ2Vycm9yJyA9ICdpbmZvJztcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIGZhbHNlKSBASW5wdXRCb29sZWFuKCkgbnpDbG9zZWFibGU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCBmYWxzZSkgQElucHV0Qm9vbGVhbigpIG56U2hvd0ljb246IGJvb2xlYW47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QmFubmVyID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25DbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgZ2V0IGljb25UeXBlKCk6IE5nQ2xhc3NUeXBlIHtcclxuICAgIHJldHVybiB0aGlzLm56SWNvblR5cGUgfHwgdGhpcy5pbmZlcnJlZEljb25UeXBlO1xyXG4gIH1cclxuXHJcbiAgZGVzdHJveSA9IGZhbHNlO1xyXG4gIGljb25UaGVtZSA9ICdmaWxsJztcclxuICBpc0ljb25UeXBlT2JqZWN0ID0gZmFsc2U7XHJcblxyXG4gIHByaXZhdGUgaXNUeXBlU2V0ID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBpc1Nob3dJY29uU2V0ID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBpbmZlcnJlZEljb25UeXBlOiBzdHJpbmcgPSAnaW5mby1jaXJjbGUnO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UpIHt9XHJcblxyXG4gIGNsb3NlQWxlcnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgb25GYWRlQW5pbWF0aW9uRG9uZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRlc3Ryb3kpIHtcclxuICAgICAgdGhpcy5uek9uQ2xvc2UuZW1pdCh0cnVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZUljb25DbGFzc01hcCgpOiB2b2lkIHtcclxuICAgIHN3aXRjaCAodGhpcy5uelR5cGUpIHtcclxuICAgICAgY2FzZSAnZXJyb3InOlxyXG4gICAgICAgIHRoaXMuaW5mZXJyZWRJY29uVHlwZSA9ICdjbG9zZS1jaXJjbGUnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdzdWNjZXNzJzpcclxuICAgICAgICB0aGlzLmluZmVycmVkSWNvblR5cGUgPSAnY2hlY2stY2lyY2xlJztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnaW5mbyc6XHJcbiAgICAgICAgdGhpcy5pbmZlcnJlZEljb25UeXBlID0gJ2luZm8tY2lyY2xlJztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnd2FybmluZyc6XHJcbiAgICAgICAgdGhpcy5pbmZlcnJlZEljb25UeXBlID0gJ2V4Y2xhbWF0aW9uLWNpcmNsZSc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICB0aGlzLmljb25UaGVtZSA9IHRoaXMubnpEZXNjcmlwdGlvbiA/ICdvdXRsaW5lJyA6ICdmaWxsJztcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgbnpTaG93SWNvbiwgbnpEZXNjcmlwdGlvbiwgbnpUeXBlLCBuekJhbm5lciwgbnpJY29uVHlwZSB9ID0gY2hhbmdlcztcclxuXHJcbiAgICBpZiAobnpTaG93SWNvbikge1xyXG4gICAgICB0aGlzLmlzU2hvd0ljb25TZXQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChuekRlc2NyaXB0aW9uIHx8IG56VHlwZSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUljb25DbGFzc01hcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChuelR5cGUpIHtcclxuICAgICAgdGhpcy5pc1R5cGVTZXQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChuekJhbm5lcikge1xyXG4gICAgICBpZiAoIXRoaXMuaXNUeXBlU2V0KSB7XHJcbiAgICAgICAgdGhpcy5uelR5cGUgPSAnd2FybmluZyc7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCF0aGlzLmlzU2hvd0ljb25TZXQpIHtcclxuICAgICAgICB0aGlzLm56U2hvd0ljb24gPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG56SWNvblR5cGUpIHtcclxuICAgICAgdGhpcy5pc0ljb25UeXBlT2JqZWN0ID0gdHlwZW9mIG56SWNvblR5cGUuY3VycmVudFZhbHVlID09PSAnb2JqZWN0JztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19
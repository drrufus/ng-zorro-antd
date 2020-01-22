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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Host, Input, Optional, Output, ViewEncapsulation } from '@angular/core';
import { zoomBigMotion, InputBoolean, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { NzTooltipBaseComponentLegacy, NzToolTipComponent } from 'ng-zorro-antd/tooltip';
var NzPopconfirmComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NzPopconfirmComponent, _super);
    function NzPopconfirmComponent(cdr, noAnimation) {
        var _this = _super.call(this, cdr, noAnimation) || this;
        _this.noAnimation = noAnimation;
        _this.nzOkType = 'primary';
        _this.nzCondition = false;
        _this.nzOnCancel = new EventEmitter();
        _this.nzOnConfirm = new EventEmitter();
        _this._prefix = 'ant-popover-placement';
        _this._trigger = 'click';
        _this._hasBackdrop = true;
        return _this;
    }
    /**
     * @return {?}
     */
    NzPopconfirmComponent.prototype.show = /**
     * @return {?}
     */
    function () {
        if (!this.nzCondition) {
            _super.prototype.show.call(this);
        }
        else {
            this.onConfirm();
        }
    };
    /**
     * @return {?}
     */
    NzPopconfirmComponent.prototype.onCancel = /**
     * @return {?}
     */
    function () {
        this.nzOnCancel.emit();
        _super.prototype.hide.call(this);
    };
    /**
     * @return {?}
     */
    NzPopconfirmComponent.prototype.onConfirm = /**
     * @return {?}
     */
    function () {
        this.nzOnConfirm.emit();
        _super.prototype.hide.call(this);
    };
    NzPopconfirmComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-popconfirm',
                    exportAs: 'nzPopconfirmComponent',
                    preserveWhitespaces: false,
                    animations: [zoomBigMotion],
                    template: "<ng-content></ng-content>\r\n<ng-template\r\n  #overlay=\"cdkConnectedOverlay\"\r\n  cdkConnectedOverlay\r\n  nzConnectedOverlay\r\n  [cdkConnectedOverlayOrigin]=\"origin\"\r\n  [cdkConnectedOverlayHasBackdrop]=\"_hasBackdrop\"\r\n  (backdropClick)=\"hide()\"\r\n  (detach)=\"hide()\"\r\n  (positionChange)=\"onPositionChange($event)\"\r\n  [cdkConnectedOverlayPositions]=\"_positions\"\r\n  [cdkConnectedOverlayOpen]=\"_visible\">\r\n  <div class=\"ant-popover\"\r\n    [ngClass]=\"_classMap\"\r\n    [ngStyle]=\"nzOverlayStyle\"\r\n    [@.disabled]=\"noAnimation?.nzNoAnimation\"\r\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n    [@zoomBigMotion]=\"'active'\">\r\n    <div class=\"ant-popover-content\">\r\n      <div class=\"ant-popover-arrow\"></div>\r\n      <div class=\"ant-popover-inner\">\r\n        <div>\r\n          <div class=\"ant-popover-inner-content\">\r\n            <div class=\"ant-popover-message\">\r\n              <ng-container *nzStringTemplateOutlet=\"title\">\r\n                <ng-container *nzStringTemplateOutlet=\"nzIcon\">\r\n                  <i nz-icon [nzType]=\"nzIcon || 'exclamation-circle'\" nzTheme=\"fill\"></i>\r\n                </ng-container>\r\n                <div class=\"ant-popover-message-title\">{{ title }}</div>\r\n              </ng-container>\r\n            </div>\r\n            <div class=\"ant-popover-buttons\">\r\n              <button nz-button [nzSize]=\"'small'\" (click)=\"onCancel()\">\r\n                <ng-container *ngIf=\"nzCancelText\">{{ nzCancelText }}</ng-container>\r\n                <ng-container *ngIf=\"!nzCancelText\">{{ 'Modal.cancelText' | nzI18n }}</ng-container>\r\n              </button>\r\n              <button nz-button [nzSize]=\"'small'\" [nzType]=\"nzOkType\" (click)=\"onConfirm()\">\r\n                <ng-container *ngIf=\"nzOkText\">{{ nzOkText }}</ng-container>\r\n                <ng-container *ngIf=\"!nzOkText\">{{ 'Modal.okText' | nzI18n }}</ng-container>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>",
                    providers: [
                        {
                            provide: NzTooltipBaseComponentLegacy,
                            useExisting: NzPopconfirmComponent
                        }
                    ],
                    styles: ["\n      .ant-popover {\n        position: relative;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzPopconfirmComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    NzPopconfirmComponent.propDecorators = {
        nzOkText: [{ type: Input }],
        nzOkType: [{ type: Input }],
        nzCancelText: [{ type: Input }],
        nzCondition: [{ type: Input }],
        nzIcon: [{ type: Input }],
        nzOnCancel: [{ type: Output }],
        nzOnConfirm: [{ type: Output }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzPopconfirmComponent.prototype, "nzCondition", void 0);
    return NzPopconfirmComponent;
}(NzToolTipComponent));
export { NzPopconfirmComponent };
if (false) {
    /** @type {?} */
    NzPopconfirmComponent.prototype.nzOkText;
    /** @type {?} */
    NzPopconfirmComponent.prototype.nzOkType;
    /** @type {?} */
    NzPopconfirmComponent.prototype.nzCancelText;
    /** @type {?} */
    NzPopconfirmComponent.prototype.nzCondition;
    /** @type {?} */
    NzPopconfirmComponent.prototype.nzIcon;
    /** @type {?} */
    NzPopconfirmComponent.prototype.nzOnCancel;
    /** @type {?} */
    NzPopconfirmComponent.prototype.nzOnConfirm;
    /** @type {?} */
    NzPopconfirmComponent.prototype._prefix;
    /** @type {?} */
    NzPopconfirmComponent.prototype._trigger;
    /** @type {?} */
    NzPopconfirmComponent.prototype._hasBackdrop;
    /** @type {?} */
    NzPopconfirmComponent.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcG9wY29uZmlybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3BvcGNvbmZpcm0vIiwic291cmNlcyI6WyJuei1wb3Bjb25maXJtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLElBQUksRUFDSixLQUFLLEVBQ0wsUUFBUSxFQUNSLE1BQU0sRUFFTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6RixPQUFPLEVBQUUsNEJBQTRCLEVBQW9CLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFM0c7SUFzQjJDLGlEQUFrQjtJQWMzRCwrQkFBWSxHQUFzQixFQUE2QixXQUFvQztRQUFuRyxZQUNFLGtCQUFNLEdBQUcsRUFBRSxXQUFXLENBQUMsU0FDeEI7UUFGOEQsaUJBQVcsR0FBWCxXQUFXLENBQXlCO1FBWjFGLGNBQVEsR0FBVyxTQUFTLENBQUM7UUFFYixpQkFBVyxHQUFHLEtBQUssQ0FBQztRQUcxQixnQkFBVSxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3BELGlCQUFXLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFeEUsYUFBTyxHQUFHLHVCQUF1QixDQUFDO1FBQ2xDLGNBQVEsR0FBcUIsT0FBTyxDQUFDO1FBQ3JDLGtCQUFZLEdBQUcsSUFBSSxDQUFDOztJQUlwQixDQUFDOzs7O0lBRUQsb0NBQUk7OztJQUFKO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDckIsaUJBQU0sSUFBSSxXQUFFLENBQUM7U0FDZDthQUFNO1lBQ0wsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQzs7OztJQUVELHdDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkIsaUJBQU0sSUFBSSxXQUFFLENBQUM7SUFDZixDQUFDOzs7O0lBRUQseUNBQVM7OztJQUFUO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN4QixpQkFBTSxJQUFJLFdBQUUsQ0FBQztJQUNmLENBQUM7O2dCQXhERixTQUFTLFNBQUM7b0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxRQUFRLEVBQUUsZUFBZTtvQkFDekIsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsVUFBVSxFQUFFLENBQUMsYUFBYSxDQUFDO29CQUMzQixnbEVBQTZDO29CQUM3QyxTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLDRCQUE0Qjs0QkFDckMsV0FBVyxFQUFFLHFCQUFxQjt5QkFDbkM7cUJBQ0Y7NkJBRUMsb0VBSUM7aUJBRUo7Ozs7Z0JBbkNDLGlCQUFpQjtnQkFXbUIsc0JBQXNCLHVCQXVDckIsSUFBSSxZQUFJLFFBQVE7OzsyQkFicEQsS0FBSzsyQkFDTCxLQUFLOytCQUNMLEtBQUs7OEJBQ0wsS0FBSzt5QkFDTCxLQUFLOzZCQUVMLE1BQU07OEJBQ04sTUFBTTs7SUFKa0I7UUFBZixZQUFZLEVBQUU7OzhEQUFxQjtJQStCL0MsNEJBQUM7Q0FBQSxBQXpERCxDQXNCMkMsa0JBQWtCLEdBbUM1RDtTQW5DWSxxQkFBcUI7OztJQUNoQyx5Q0FBMEI7O0lBQzFCLHlDQUFzQzs7SUFDdEMsNkNBQThCOztJQUM5Qiw0Q0FBNkM7O0lBQzdDLHVDQUE0Qzs7SUFFNUMsMkNBQXVFOztJQUN2RSw0Q0FBd0U7O0lBRXhFLHdDQUFrQzs7SUFDbEMseUNBQXFDOztJQUNyQyw2Q0FBb0I7O0lBRWdCLDRDQUErRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEhvc3QsXHJcbiAgSW5wdXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyB6b29tQmlnTW90aW9uLCBJbnB1dEJvb2xlYW4sIE56Tm9BbmltYXRpb25EaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOelRvb2x0aXBCYXNlQ29tcG9uZW50TGVnYWN5LCBOelRvb2x0aXBUcmlnZ2VyLCBOelRvb2xUaXBDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL3Rvb2x0aXAnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzZWxlY3RvcjogJ256LXBvcGNvbmZpcm0nLFxyXG4gIGV4cG9ydEFzOiAnbnpQb3Bjb25maXJtQ29tcG9uZW50JyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBhbmltYXRpb25zOiBbem9vbUJpZ01vdGlvbl0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXBvcGNvbmZpcm0uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOelRvb2x0aXBCYXNlQ29tcG9uZW50TGVnYWN5LFxyXG4gICAgICB1c2VFeGlzdGluZzogTnpQb3Bjb25maXJtQ29tcG9uZW50XHJcbiAgICB9XHJcbiAgXSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgLmFudC1wb3BvdmVyIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelBvcGNvbmZpcm1Db21wb25lbnQgZXh0ZW5kcyBOelRvb2xUaXBDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIG56T2tUZXh0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpPa1R5cGU6IHN0cmluZyA9ICdwcmltYXJ5JztcclxuICBASW5wdXQoKSBuekNhbmNlbFRleHQ6IHN0cmluZztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDb25kaXRpb24gPSBmYWxzZTtcclxuICBASW5wdXQoKSBuekljb246IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkNhbmNlbDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uQ29uZmlybTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBfcHJlZml4ID0gJ2FudC1wb3BvdmVyLXBsYWNlbWVudCc7XHJcbiAgX3RyaWdnZXI6IE56VG9vbHRpcFRyaWdnZXIgPSAnY2xpY2snO1xyXG4gIF9oYXNCYWNrZHJvcCA9IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSkge1xyXG4gICAgc3VwZXIoY2RyLCBub0FuaW1hdGlvbik7XHJcbiAgfVxyXG5cclxuICBzaG93KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLm56Q29uZGl0aW9uKSB7XHJcbiAgICAgIHN1cGVyLnNob3coKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMub25Db25maXJtKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNhbmNlbCgpOiB2b2lkIHtcclxuICAgIHRoaXMubnpPbkNhbmNlbC5lbWl0KCk7XHJcbiAgICBzdXBlci5oaWRlKCk7XHJcbiAgfVxyXG5cclxuICBvbkNvbmZpcm0oKTogdm9pZCB7XHJcbiAgICB0aGlzLm56T25Db25maXJtLmVtaXQoKTtcclxuICAgIHN1cGVyLmhpZGUoKTtcclxuICB9XHJcbn1cclxuIl19
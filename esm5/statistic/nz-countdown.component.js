/**
 * @fileoverview added by tsickle
 * Generated from: nz-countdown.component.ts
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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, NgZone, Output, ViewEncapsulation } from '@angular/core';
import { interval } from 'rxjs';
import { REFRESH_INTERVAL } from './nz-statistic-definitions';
import { NzStatisticComponent } from './nz-statistic.component';
var NzCountdownComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NzCountdownComponent, _super);
    function NzCountdownComponent(cdr, ngZone, platform) {
        var _this = _super.call(this) || this;
        _this.cdr = cdr;
        _this.ngZone = ngZone;
        _this.platform = platform;
        /**
         * @override
         */
        _this.nzFormat = 'HH:mm:ss';
        _this.nzCountdownFinish = new EventEmitter();
        return _this;
    }
    /** @override */
    /**
     * @override
     * @param {?} changes
     * @return {?}
     */
    NzCountdownComponent.prototype.ngOnChanges = /**
     * @override
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzValue) {
            this.target = Number(changes.nzValue.currentValue);
            if (!changes.nzValue.isFirstChange()) {
                this.syncTimer();
            }
        }
    };
    /**
     * @return {?}
     */
    NzCountdownComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.syncTimer();
    };
    /**
     * @return {?}
     */
    NzCountdownComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.stopTimer();
    };
    /**
     * @return {?}
     */
    NzCountdownComponent.prototype.syncTimer = /**
     * @return {?}
     */
    function () {
        if (this.target >= Date.now()) {
            this.startTimer();
        }
        else {
            this.stopTimer();
        }
    };
    /**
     * @return {?}
     */
    NzCountdownComponent.prototype.startTimer = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.platform.isBrowser) {
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                _this.stopTimer();
                _this.updater_ = interval(REFRESH_INTERVAL).subscribe((/**
                 * @return {?}
                 */
                function () {
                    _this.updateValue();
                    _this.cdr.detectChanges();
                }));
            }));
        }
    };
    /**
     * @return {?}
     */
    NzCountdownComponent.prototype.stopTimer = /**
     * @return {?}
     */
    function () {
        if (this.updater_) {
            this.updater_.unsubscribe();
            this.updater_ = null;
        }
    };
    /**
     * Update time that should be displayed on the screen.
     */
    /**
     * Update time that should be displayed on the screen.
     * @protected
     * @return {?}
     */
    NzCountdownComponent.prototype.updateValue = /**
     * Update time that should be displayed on the screen.
     * @protected
     * @return {?}
     */
    function () {
        this.diff = Math.max(this.target - Date.now(), 0);
        if (this.diff === 0) {
            this.stopTimer();
            this.nzCountdownFinish.emit();
        }
    };
    NzCountdownComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-countdown',
                    exportAs: 'nzCountdown',
                    template: "<nz-statistic\r\n  [nzValue]=\"diff\"\r\n  [nzValueStyle]=\"nzValueStyle\"\r\n  [nzValueTemplate]=\"nzValueTemplate || countDownTpl\"\r\n  [nzTitle]=\"nzTitle\"\r\n  [nzPrefix]=\"nzPrefix\"\r\n  [nzSuffix]=\"nzSuffix\">\r\n</nz-statistic>\r\n\r\n<ng-template #countDownTpl>{{ diff | nzTimeRange: nzFormat }}</ng-template>"
                }] }
    ];
    /** @nocollapse */
    NzCountdownComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NgZone },
        { type: Platform }
    ]; };
    NzCountdownComponent.propDecorators = {
        nzFormat: [{ type: Input }],
        nzCountdownFinish: [{ type: Output }]
    };
    return NzCountdownComponent;
}(NzStatisticComponent));
export { NzCountdownComponent };
if (false) {
    /**
     * @override
     * @type {?}
     */
    NzCountdownComponent.prototype.nzFormat;
    /** @type {?} */
    NzCountdownComponent.prototype.nzCountdownFinish;
    /** @type {?} */
    NzCountdownComponent.prototype.diff;
    /**
     * @type {?}
     * @private
     */
    NzCountdownComponent.prototype.target;
    /**
     * @type {?}
     * @private
     */
    NzCountdownComponent.prototype.updater_;
    /**
     * @type {?}
     * @private
     */
    NzCountdownComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzCountdownComponent.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    NzCountdownComponent.prototype.platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY291bnRkb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvc3RhdGlzdGljLyIsInNvdXJjZXMiOlsibnotY291bnRkb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFJTixNQUFNLEVBRU4saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBRTlDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzlELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRWhFO0lBTzBDLGdEQUFvQjtJQVU1RCw4QkFBb0IsR0FBc0IsRUFBVSxNQUFjLEVBQVUsUUFBa0I7UUFBOUYsWUFDRSxpQkFBTyxTQUNSO1FBRm1CLFNBQUcsR0FBSCxHQUFHLENBQW1CO1FBQVUsWUFBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGNBQVEsR0FBUixRQUFRLENBQVU7Ozs7UUFSckYsY0FBUSxHQUFXLFVBQVUsQ0FBQztRQUNwQix1QkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDOztJQVNoRSxDQUFDO0lBRUQsZ0JBQWdCOzs7Ozs7SUFDaEIsMENBQVc7Ozs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7WUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsRUFBRTtnQkFDcEMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ2xCO1NBQ0Y7SUFDSCxDQUFDOzs7O0lBRUQsdUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFRCwwQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELHdDQUFTOzs7SUFBVDtRQUNFLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ25CO2FBQU07WUFDTCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDbEI7SUFDSCxDQUFDOzs7O0lBRUQseUNBQVU7OztJQUFWO1FBQUEsaUJBVUM7UUFUQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCOzs7WUFBQztnQkFDNUIsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNqQixLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFNBQVM7OztnQkFBQztvQkFDbkQsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUNuQixLQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUMzQixDQUFDLEVBQUMsQ0FBQztZQUNMLENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7O0lBRUQsd0NBQVM7OztJQUFUO1FBQ0UsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDdEI7SUFDSCxDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUNPLDBDQUFXOzs7OztJQUFyQjtRQUNFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVsRCxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxFQUFFO1lBQ25CLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDL0I7SUFDSCxDQUFDOztnQkE1RUYsU0FBUyxTQUFDO29CQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRSxhQUFhO29CQUN2Qiw2VUFBNEM7aUJBQzdDOzs7O2dCQXZCQyxpQkFBaUI7Z0JBSWpCLE1BQU07Z0JBUEMsUUFBUTs7OzJCQTZCZCxLQUFLO29DQUNMLE1BQU07O0lBbUVULDJCQUFDO0NBQUEsQUE3RUQsQ0FPMEMsb0JBQW9CLEdBc0U3RDtTQXRFWSxvQkFBb0I7Ozs7OztJQUUvQix3Q0FBdUM7O0lBQ3ZDLGlEQUFnRTs7SUFFaEUsb0NBQWE7Ozs7O0lBRWIsc0NBQXVCOzs7OztJQUN2Qix3Q0FBc0M7Ozs7O0lBRTFCLG1DQUE4Qjs7Ozs7SUFBRSxzQ0FBc0I7Ozs7O0lBQUUsd0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaW50ZXJ2YWwsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgUkVGUkVTSF9JTlRFUlZBTCB9IGZyb20gJy4vbnotc3RhdGlzdGljLWRlZmluaXRpb25zJztcclxuaW1wb3J0IHsgTnpTdGF0aXN0aWNDb21wb25lbnQgfSBmcm9tICcuL256LXN0YXRpc3RpYy5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzZWxlY3RvcjogJ256LWNvdW50ZG93bicsXHJcbiAgZXhwb3J0QXM6ICduekNvdW50ZG93bicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LWNvdW50ZG93bi5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE56Q291bnRkb3duQ29tcG9uZW50IGV4dGVuZHMgTnpTdGF0aXN0aWNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICAvKiogQG92ZXJyaWRlICovXHJcbiAgQElucHV0KCkgbnpGb3JtYXQ6IHN0cmluZyA9ICdISDptbTpzcyc7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q291bnRkb3duRmluaXNoID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBkaWZmOiBudW1iZXI7XHJcblxyXG4gIHByaXZhdGUgdGFyZ2V0OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSB1cGRhdGVyXzogU3Vic2NyaXB0aW9uIHwgbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIG5nWm9uZTogTmdab25lLCBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIC8qKiBAb3ZlcnJpZGUgKi9cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5uelZhbHVlKSB7XHJcbiAgICAgIHRoaXMudGFyZ2V0ID0gTnVtYmVyKGNoYW5nZXMubnpWYWx1ZS5jdXJyZW50VmFsdWUpO1xyXG4gICAgICBpZiAoIWNoYW5nZXMubnpWYWx1ZS5pc0ZpcnN0Q2hhbmdlKCkpIHtcclxuICAgICAgICB0aGlzLnN5bmNUaW1lcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc3luY1RpbWVyKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuc3RvcFRpbWVyKCk7XHJcbiAgfVxyXG5cclxuICBzeW5jVGltZXIoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy50YXJnZXQgPj0gRGF0ZS5ub3coKSkge1xyXG4gICAgICB0aGlzLnN0YXJ0VGltZXIoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc3RvcFRpbWVyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGFydFRpbWVyKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XHJcbiAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgICB0aGlzLnN0b3BUaW1lcigpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlcl8gPSBpbnRlcnZhbChSRUZSRVNIX0lOVEVSVkFMKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSgpO1xyXG4gICAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0b3BUaW1lcigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnVwZGF0ZXJfKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlcl8udW5zdWJzY3JpYmUoKTtcclxuICAgICAgdGhpcy51cGRhdGVyXyA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGUgdGltZSB0aGF0IHNob3VsZCBiZSBkaXNwbGF5ZWQgb24gdGhlIHNjcmVlbi5cclxuICAgKi9cclxuICBwcm90ZWN0ZWQgdXBkYXRlVmFsdWUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpZmYgPSBNYXRoLm1heCh0aGlzLnRhcmdldCAtIERhdGUubm93KCksIDApO1xyXG5cclxuICAgIGlmICh0aGlzLmRpZmYgPT09IDApIHtcclxuICAgICAgdGhpcy5zdG9wVGltZXIoKTtcclxuICAgICAgdGhpcy5uekNvdW50ZG93bkZpbmlzaC5lbWl0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==
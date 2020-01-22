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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY291bnRkb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvc3RhdGlzdGljLyIsInNvdXJjZXMiOlsibnotY291bnRkb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUlOLE1BQU0sRUFFTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFFOUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDOUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFaEU7SUFPMEMsZ0RBQW9CO0lBVTVELDhCQUFvQixHQUFzQixFQUFVLE1BQWMsRUFBVSxRQUFrQjtRQUE5RixZQUNFLGlCQUFPLFNBQ1I7UUFGbUIsU0FBRyxHQUFILEdBQUcsQ0FBbUI7UUFBVSxZQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsY0FBUSxHQUFSLFFBQVEsQ0FBVTs7OztRQVJyRixjQUFRLEdBQVcsVUFBVSxDQUFDO1FBQ3BCLHVCQUFpQixHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7O0lBU2hFLENBQUM7SUFFRCxnQkFBZ0I7Ozs7OztJQUNoQiwwQ0FBVzs7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxFQUFFO2dCQUNwQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDbEI7U0FDRjtJQUNILENBQUM7Ozs7SUFFRCx1Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELDBDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsd0NBQVM7OztJQUFUO1FBQ0UsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUM3QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkI7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNsQjtJQUNILENBQUM7Ozs7SUFFRCx5Q0FBVTs7O0lBQVY7UUFBQSxpQkFVQztRQVRDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUI7OztZQUFDO2dCQUM1QixLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ2pCLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUMsU0FBUzs7O2dCQUFDO29CQUNuRCxLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQ25CLEtBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQzNCLENBQUMsRUFBQyxDQUFDO1lBQ0wsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7SUFFRCx3Q0FBUzs7O0lBQVQ7UUFDRSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUN0QjtJQUNILENBQUM7SUFFRDs7T0FFRzs7Ozs7O0lBQ08sMENBQVc7Ozs7O0lBQXJCO1FBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRWxELElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUMvQjtJQUNILENBQUM7O2dCQTVFRixTQUFTLFNBQUM7b0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLDZVQUE0QztpQkFDN0M7Ozs7Z0JBdkJDLGlCQUFpQjtnQkFJakIsTUFBTTtnQkFQQyxRQUFROzs7MkJBNkJkLEtBQUs7b0NBQ0wsTUFBTTs7SUFtRVQsMkJBQUM7Q0FBQSxBQTdFRCxDQU8wQyxvQkFBb0IsR0FzRTdEO1NBdEVZLG9CQUFvQjs7Ozs7O0lBRS9CLHdDQUF1Qzs7SUFDdkMsaURBQWdFOztJQUVoRSxvQ0FBYTs7Ozs7SUFFYixzQ0FBdUI7Ozs7O0lBQ3ZCLHdDQUFzQzs7Ozs7SUFFMUIsbUNBQThCOzs7OztJQUFFLHNDQUFzQjs7Ozs7SUFBRSx3Q0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE5nWm9uZSxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpbnRlcnZhbCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBSRUZSRVNIX0lOVEVSVkFMIH0gZnJvbSAnLi9uei1zdGF0aXN0aWMtZGVmaW5pdGlvbnMnO1xyXG5pbXBvcnQgeyBOelN0YXRpc3RpY0NvbXBvbmVudCB9IGZyb20gJy4vbnotc3RhdGlzdGljLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHNlbGVjdG9yOiAnbnotY291bnRkb3duJyxcclxuICBleHBvcnRBczogJ256Q291bnRkb3duJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotY291bnRkb3duLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpDb3VudGRvd25Db21wb25lbnQgZXh0ZW5kcyBOelN0YXRpc3RpY0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIC8qKiBAb3ZlcnJpZGUgKi9cclxuICBASW5wdXQoKSBuekZvcm1hdDogc3RyaW5nID0gJ0hIOm1tOnNzJztcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDb3VudGRvd25GaW5pc2ggPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIGRpZmY6IG51bWJlcjtcclxuXHJcbiAgcHJpdmF0ZSB0YXJnZXQ6IG51bWJlcjtcclxuICBwcml2YXRlIHVwZGF0ZXJfOiBTdWJzY3JpcHRpb24gfCBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBvdmVycmlkZSAqL1xyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLm56VmFsdWUpIHtcclxuICAgICAgdGhpcy50YXJnZXQgPSBOdW1iZXIoY2hhbmdlcy5uelZhbHVlLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICAgIGlmICghY2hhbmdlcy5uelZhbHVlLmlzRmlyc3RDaGFuZ2UoKSkge1xyXG4gICAgICAgIHRoaXMuc3luY1RpbWVyKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zeW5jVGltZXIoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zdG9wVGltZXIoKTtcclxuICB9XHJcblxyXG4gIHN5bmNUaW1lcigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnRhcmdldCA+PSBEYXRlLm5vdygpKSB7XHJcbiAgICAgIHRoaXMuc3RhcnRUaW1lcigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zdG9wVGltZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXJ0VGltZXIoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc3RvcFRpbWVyKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVyXyA9IGludGVydmFsKFJFRlJFU0hfSU5URVJWQUwpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKCk7XHJcbiAgICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RvcFRpbWVyKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudXBkYXRlcl8pIHtcclxuICAgICAgdGhpcy51cGRhdGVyXy51bnN1YnNjcmliZSgpO1xyXG4gICAgICB0aGlzLnVwZGF0ZXJfID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZSB0aW1lIHRoYXQgc2hvdWxkIGJlIGRpc3BsYXllZCBvbiB0aGUgc2NyZWVuLlxyXG4gICAqL1xyXG4gIHByb3RlY3RlZCB1cGRhdGVWYWx1ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGlmZiA9IE1hdGgubWF4KHRoaXMudGFyZ2V0IC0gRGF0ZS5ub3coKSwgMCk7XHJcblxyXG4gICAgaWYgKHRoaXMuZGlmZiA9PT0gMCkge1xyXG4gICAgICB0aGlzLnN0b3BUaW1lcigpO1xyXG4gICAgICB0aGlzLm56Q291bnRkb3duRmluaXNoLmVtaXQoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19
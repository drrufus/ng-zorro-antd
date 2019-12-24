import { __extends } from "tslib";
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
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/platform";
import * as i2 from "./nz-statistic.component";
import * as i3 from "ng-zorro-antd/core";
function NzCountdownComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
    i0.ɵɵpipe(1, "nzTimeRange");
} if (rf & 2) {
    var ctx_r303 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(1, 1, ctx_r303.diff, ctx_r303.nzFormat));
} }
var NzCountdownComponent = /** @class */ (function (_super) {
    __extends(NzCountdownComponent, _super);
    function NzCountdownComponent(cdr, ngZone, platform) {
        var _this = _super.call(this) || this;
        _this.cdr = cdr;
        _this.ngZone = ngZone;
        _this.platform = platform;
        /** @override */
        _this.nzFormat = 'HH:mm:ss';
        _this.nzCountdownFinish = new EventEmitter();
        return _this;
    }
    /** @override */
    NzCountdownComponent.prototype.ngOnChanges = function (changes) {
        if (changes.nzValue) {
            this.target = Number(changes.nzValue.currentValue);
            if (!changes.nzValue.isFirstChange()) {
                this.syncTimer();
            }
        }
    };
    NzCountdownComponent.prototype.ngOnInit = function () {
        this.syncTimer();
    };
    NzCountdownComponent.prototype.ngOnDestroy = function () {
        this.stopTimer();
    };
    NzCountdownComponent.prototype.syncTimer = function () {
        if (this.target >= Date.now()) {
            this.startTimer();
        }
        else {
            this.stopTimer();
        }
    };
    NzCountdownComponent.prototype.startTimer = function () {
        var _this = this;
        if (this.platform.isBrowser) {
            this.ngZone.runOutsideAngular(function () {
                _this.stopTimer();
                _this.updater_ = interval(REFRESH_INTERVAL).subscribe(function () {
                    _this.updateValue();
                    _this.cdr.detectChanges();
                });
            });
        }
    };
    NzCountdownComponent.prototype.stopTimer = function () {
        if (this.updater_) {
            this.updater_.unsubscribe();
            this.updater_ = null;
        }
    };
    /**
     * Update time that should be displayed on the screen.
     */
    NzCountdownComponent.prototype.updateValue = function () {
        this.diff = Math.max(this.target - Date.now(), 0);
        if (this.diff === 0) {
            this.stopTimer();
            this.nzCountdownFinish.emit();
        }
    };
    /** @nocollapse */ NzCountdownComponent.ɵfac = function NzCountdownComponent_Factory(t) { return new (t || NzCountdownComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i1.Platform)); };
    /** @nocollapse */ NzCountdownComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzCountdownComponent, selectors: [["nz-countdown"]], inputs: { nzFormat: "nzFormat" }, outputs: { nzCountdownFinish: "nzCountdownFinish" }, exportAs: ["nzCountdown"], features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature()], decls: 3, vars: 6, consts: [[3, "nzValue", "nzValueStyle", "nzValueTemplate", "nzTitle", "nzPrefix", "nzSuffix"], ["countDownTpl", ""]], template: function NzCountdownComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "nz-statistic", 0);
            i0.ɵɵtemplate(1, NzCountdownComponent_ng_template_1_Template, 2, 4, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            var _r302 = i0.ɵɵreference(2);
            i0.ɵɵproperty("nzValue", ctx.diff)("nzValueStyle", ctx.nzValueStyle)("nzValueTemplate", ctx.nzValueTemplate || _r302)("nzTitle", ctx.nzTitle)("nzPrefix", ctx.nzPrefix)("nzSuffix", ctx.nzSuffix);
        } }, directives: [i2.NzStatisticComponent], pipes: [i3.NzTimeRangePipe], encapsulation: 2, changeDetection: 0 });
    return NzCountdownComponent;
}(NzStatisticComponent));
export { NzCountdownComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzCountdownComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-countdown',
                exportAs: 'nzCountdown',
                templateUrl: './nz-countdown.component.html'
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.NgZone }, { type: i1.Platform }]; }, { nzFormat: [{
            type: Input
        }], nzCountdownFinish: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY291bnRkb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvc3RhdGlzdGljLyIsInNvdXJjZXMiOlsibnotY291bnRkb3duLmNvbXBvbmVudC50cyIsIm56LWNvdW50ZG93bi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFJTixNQUFNLEVBRU4saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBRTlDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzlELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7SUNoQnJDLFlBQWtDOzs7O0lBQWxDLDRFQUFrQzs7QURrQjdEO0lBTzBDLHdDQUFvQjtJQVU1RCw4QkFBb0IsR0FBc0IsRUFBVSxNQUFjLEVBQVUsUUFBa0I7UUFBOUYsWUFDRSxpQkFBTyxTQUNSO1FBRm1CLFNBQUcsR0FBSCxHQUFHLENBQW1CO1FBQVUsWUFBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGNBQVEsR0FBUixRQUFRLENBQVU7UUFUOUYsZ0JBQWdCO1FBQ1AsY0FBUSxHQUFXLFVBQVUsQ0FBQztRQUNwQix1QkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDOztJQVNoRSxDQUFDO0lBRUQsZ0JBQWdCO0lBQ2hCLDBDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7WUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsRUFBRTtnQkFDcEMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ2xCO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsdUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsMENBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsd0NBQVMsR0FBVDtRQUNFLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ25CO2FBQU07WUFDTCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDbEI7SUFDSCxDQUFDO0lBRUQseUNBQVUsR0FBVjtRQUFBLGlCQVVDO1FBVEMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDO2dCQUM1QixLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ2pCLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUMsU0FBUyxDQUFDO29CQUNuRCxLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQ25CLEtBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQzNCLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCx3Q0FBUyxHQUFUO1FBQ0UsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDdEI7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDTywwQ0FBVyxHQUFyQjtRQUNFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVsRCxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxFQUFFO1lBQ25CLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDL0I7SUFDSCxDQUFDOzRGQXJFVSxvQkFBb0I7NkRBQXBCLG9CQUFvQjtZQ25DakMsa0NBUWU7WUFFZixzSEFBMkI7OztZQVR6QixrQ0FBZ0Isa0NBQUEsaURBQUEsd0JBQUEsMEJBQUEsMEJBQUE7OytCRERsQjtDQXlHQyxBQTdFRCxDQU8wQyxvQkFBb0IsR0FzRTdEO1NBdEVZLG9CQUFvQjtrREFBcEIsb0JBQW9CO2NBUGhDLFNBQVM7ZUFBQztnQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUUsYUFBYTtnQkFDdkIsV0FBVyxFQUFFLCtCQUErQjthQUM3Qzs7a0JBR0UsS0FBSzs7a0JBQ0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGludGVydmFsLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IFJFRlJFU0hfSU5URVJWQUwgfSBmcm9tICcuL256LXN0YXRpc3RpYy1kZWZpbml0aW9ucyc7XHJcbmltcG9ydCB7IE56U3RhdGlzdGljQ29tcG9uZW50IH0gZnJvbSAnLi9uei1zdGF0aXN0aWMuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc2VsZWN0b3I6ICduei1jb3VudGRvd24nLFxyXG4gIGV4cG9ydEFzOiAnbnpDb3VudGRvd24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1jb3VudGRvd24uY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekNvdW50ZG93bkNvbXBvbmVudCBleHRlbmRzIE56U3RhdGlzdGljQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgLyoqIEBvdmVycmlkZSAqL1xyXG4gIEBJbnB1dCgpIG56Rm9ybWF0OiBzdHJpbmcgPSAnSEg6bW06c3MnO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNvdW50ZG93bkZpbmlzaCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgZGlmZjogbnVtYmVyO1xyXG5cclxuICBwcml2YXRlIHRhcmdldDogbnVtYmVyO1xyXG4gIHByaXZhdGUgdXBkYXRlcl86IFN1YnNjcmlwdGlvbiB8IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSwgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0pIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICAvKiogQG92ZXJyaWRlICovXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMubnpWYWx1ZSkge1xyXG4gICAgICB0aGlzLnRhcmdldCA9IE51bWJlcihjaGFuZ2VzLm56VmFsdWUuY3VycmVudFZhbHVlKTtcclxuICAgICAgaWYgKCFjaGFuZ2VzLm56VmFsdWUuaXNGaXJzdENoYW5nZSgpKSB7XHJcbiAgICAgICAgdGhpcy5zeW5jVGltZXIoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnN5bmNUaW1lcigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLnN0b3BUaW1lcigpO1xyXG4gIH1cclxuXHJcbiAgc3luY1RpbWVyKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudGFyZ2V0ID49IERhdGUubm93KCkpIHtcclxuICAgICAgdGhpcy5zdGFydFRpbWVyKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnN0b3BUaW1lcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhcnRUaW1lcigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xyXG4gICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zdG9wVGltZXIoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZXJfID0gaW50ZXJ2YWwoUkVGUkVTSF9JTlRFUlZBTCkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUoKTtcclxuICAgICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdG9wVGltZXIoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy51cGRhdGVyXykge1xyXG4gICAgICB0aGlzLnVwZGF0ZXJfLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIHRoaXMudXBkYXRlcl8gPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlIHRpbWUgdGhhdCBzaG91bGQgYmUgZGlzcGxheWVkIG9uIHRoZSBzY3JlZW4uXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIHVwZGF0ZVZhbHVlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5kaWZmID0gTWF0aC5tYXgodGhpcy50YXJnZXQgLSBEYXRlLm5vdygpLCAwKTtcclxuXHJcbiAgICBpZiAodGhpcy5kaWZmID09PSAwKSB7XHJcbiAgICAgIHRoaXMuc3RvcFRpbWVyKCk7XHJcbiAgICAgIHRoaXMubnpDb3VudGRvd25GaW5pc2guZW1pdCgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8bnotc3RhdGlzdGljXHJcbiAgW256VmFsdWVdPVwiZGlmZlwiXHJcbiAgW256VmFsdWVTdHlsZV09XCJuelZhbHVlU3R5bGVcIlxyXG4gIFtuelZhbHVlVGVtcGxhdGVdPVwibnpWYWx1ZVRlbXBsYXRlIHx8IGNvdW50RG93blRwbFwiXHJcbiAgW256VGl0bGVdPVwibnpUaXRsZVwiXHJcbiAgW256UHJlZml4XT1cIm56UHJlZml4XCJcclxuICBbbnpTdWZmaXhdPVwibnpTdWZmaXhcIlxyXG4+XHJcbjwvbnotc3RhdGlzdGljPlxyXG5cclxuPG5nLXRlbXBsYXRlICNjb3VudERvd25UcGw+e3sgZGlmZiB8IG56VGltZVJhbmdlOiBuekZvcm1hdCB9fTwvbmctdGVtcGxhdGU+XHJcbiJdfQ==
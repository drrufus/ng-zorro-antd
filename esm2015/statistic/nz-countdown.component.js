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
    const ctx_r292 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(1, 1, ctx_r292.diff, ctx_r292.nzFormat));
} }
export class NzCountdownComponent extends NzStatisticComponent {
    constructor(cdr, ngZone, platform) {
        super();
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.platform = platform;
        /** @override */
        this.nzFormat = 'HH:mm:ss';
        this.nzCountdownFinish = new EventEmitter();
    }
    /** @override */
    ngOnChanges(changes) {
        if (changes.nzValue) {
            this.target = Number(changes.nzValue.currentValue);
            if (!changes.nzValue.isFirstChange()) {
                this.syncTimer();
            }
        }
    }
    ngOnInit() {
        this.syncTimer();
    }
    ngOnDestroy() {
        this.stopTimer();
    }
    syncTimer() {
        if (this.target >= Date.now()) {
            this.startTimer();
        }
        else {
            this.stopTimer();
        }
    }
    startTimer() {
        if (this.platform.isBrowser) {
            this.ngZone.runOutsideAngular(() => {
                this.stopTimer();
                this.updater_ = interval(REFRESH_INTERVAL).subscribe(() => {
                    this.updateValue();
                    this.cdr.detectChanges();
                });
            });
        }
    }
    stopTimer() {
        if (this.updater_) {
            this.updater_.unsubscribe();
            this.updater_ = null;
        }
    }
    /**
     * Update time that should be displayed on the screen.
     */
    updateValue() {
        this.diff = Math.max(this.target - Date.now(), 0);
        if (this.diff === 0) {
            this.stopTimer();
            this.nzCountdownFinish.emit();
        }
    }
}
/** @nocollapse */ NzCountdownComponent.ɵfac = function NzCountdownComponent_Factory(t) { return new (t || NzCountdownComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i1.Platform)); };
/** @nocollapse */ NzCountdownComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzCountdownComponent, selectors: [["nz-countdown"]], inputs: { nzFormat: "nzFormat" }, outputs: { nzCountdownFinish: "nzCountdownFinish" }, exportAs: ["nzCountdown"], features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature()], decls: 3, vars: 6, consts: [[3, "nzValue", "nzValueStyle", "nzValueTemplate", "nzTitle", "nzPrefix", "nzSuffix"], ["countDownTpl", ""]], template: function NzCountdownComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "nz-statistic", 0);
        i0.ɵɵtemplate(1, NzCountdownComponent_ng_template_1_Template, 2, 4, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r291 = i0.ɵɵreference(2);
        i0.ɵɵproperty("nzValue", ctx.diff)("nzValueStyle", ctx.nzValueStyle)("nzValueTemplate", ctx.nzValueTemplate || _r291)("nzTitle", ctx.nzTitle)("nzPrefix", ctx.nzPrefix)("nzSuffix", ctx.nzSuffix);
    } }, directives: [i2.NzStatisticComponent], pipes: [i3.NzTimeRangePipe], encapsulation: 2, changeDetection: 0 });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY291bnRkb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvc3RhdGlzdGljLyIsInNvdXJjZXMiOlsibnotY291bnRkb3duLmNvbXBvbmVudC50cyIsIm56LWNvdW50ZG93bi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUlOLE1BQU0sRUFFTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFFOUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDOUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7OztJQ2hCckMsWUFBa0M7Ozs7SUFBbEMsNEVBQWtDOztBRHlCN0QsTUFBTSxPQUFPLG9CQUFxQixTQUFRLG9CQUFvQjtJQVU1RCxZQUFvQixHQUFzQixFQUFVLE1BQWMsRUFBVSxRQUFrQjtRQUM1RixLQUFLLEVBQUUsQ0FBQztRQURVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7UUFUOUYsZ0JBQWdCO1FBQ1AsYUFBUSxHQUFXLFVBQVUsQ0FBQztRQUNwQixzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO0lBU2hFLENBQUM7SUFFRCxnQkFBZ0I7SUFDaEIsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxFQUFFO2dCQUNwQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDbEI7U0FDRjtJQUNILENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxTQUFTO1FBQ1AsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUM3QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkI7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNsQjtJQUNILENBQUM7SUFFRCxVQUFVO1FBQ1IsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRTtnQkFDakMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7b0JBQ3hELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDM0IsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUN0QjtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNPLFdBQVc7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRWxELElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUMvQjtJQUNILENBQUM7O3dGQXJFVSxvQkFBb0I7eURBQXBCLG9CQUFvQjtRQ25DakMsa0NBUWU7UUFFZixzSEFBMkI7OztRQVR6QixrQ0FBZ0Isa0NBQUEsaURBQUEsd0JBQUEsMEJBQUEsMEJBQUE7O2tERGtDTCxvQkFBb0I7Y0FQaEMsU0FBUztlQUFDO2dCQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixXQUFXLEVBQUUsK0JBQStCO2FBQzdDOztrQkFHRSxLQUFLOztrQkFDTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaW50ZXJ2YWwsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgUkVGUkVTSF9JTlRFUlZBTCB9IGZyb20gJy4vbnotc3RhdGlzdGljLWRlZmluaXRpb25zJztcclxuaW1wb3J0IHsgTnpTdGF0aXN0aWNDb21wb25lbnQgfSBmcm9tICcuL256LXN0YXRpc3RpYy5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzZWxlY3RvcjogJ256LWNvdW50ZG93bicsXHJcbiAgZXhwb3J0QXM6ICduekNvdW50ZG93bicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LWNvdW50ZG93bi5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE56Q291bnRkb3duQ29tcG9uZW50IGV4dGVuZHMgTnpTdGF0aXN0aWNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICAvKiogQG92ZXJyaWRlICovXHJcbiAgQElucHV0KCkgbnpGb3JtYXQ6IHN0cmluZyA9ICdISDptbTpzcyc7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q291bnRkb3duRmluaXNoID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBkaWZmOiBudW1iZXI7XHJcblxyXG4gIHByaXZhdGUgdGFyZ2V0OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSB1cGRhdGVyXzogU3Vic2NyaXB0aW9uIHwgbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIG5nWm9uZTogTmdab25lLCBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIC8qKiBAb3ZlcnJpZGUgKi9cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5uelZhbHVlKSB7XHJcbiAgICAgIHRoaXMudGFyZ2V0ID0gTnVtYmVyKGNoYW5nZXMubnpWYWx1ZS5jdXJyZW50VmFsdWUpO1xyXG4gICAgICBpZiAoIWNoYW5nZXMubnpWYWx1ZS5pc0ZpcnN0Q2hhbmdlKCkpIHtcclxuICAgICAgICB0aGlzLnN5bmNUaW1lcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc3luY1RpbWVyKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuc3RvcFRpbWVyKCk7XHJcbiAgfVxyXG5cclxuICBzeW5jVGltZXIoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy50YXJnZXQgPj0gRGF0ZS5ub3coKSkge1xyXG4gICAgICB0aGlzLnN0YXJ0VGltZXIoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc3RvcFRpbWVyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGFydFRpbWVyKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XHJcbiAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgICB0aGlzLnN0b3BUaW1lcigpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlcl8gPSBpbnRlcnZhbChSRUZSRVNIX0lOVEVSVkFMKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSgpO1xyXG4gICAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0b3BUaW1lcigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnVwZGF0ZXJfKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlcl8udW5zdWJzY3JpYmUoKTtcclxuICAgICAgdGhpcy51cGRhdGVyXyA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGUgdGltZSB0aGF0IHNob3VsZCBiZSBkaXNwbGF5ZWQgb24gdGhlIHNjcmVlbi5cclxuICAgKi9cclxuICBwcm90ZWN0ZWQgdXBkYXRlVmFsdWUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpZmYgPSBNYXRoLm1heCh0aGlzLnRhcmdldCAtIERhdGUubm93KCksIDApO1xyXG5cclxuICAgIGlmICh0aGlzLmRpZmYgPT09IDApIHtcclxuICAgICAgdGhpcy5zdG9wVGltZXIoKTtcclxuICAgICAgdGhpcy5uekNvdW50ZG93bkZpbmlzaC5lbWl0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxuei1zdGF0aXN0aWNcclxuICBbbnpWYWx1ZV09XCJkaWZmXCJcclxuICBbbnpWYWx1ZVN0eWxlXT1cIm56VmFsdWVTdHlsZVwiXHJcbiAgW256VmFsdWVUZW1wbGF0ZV09XCJuelZhbHVlVGVtcGxhdGUgfHwgY291bnREb3duVHBsXCJcclxuICBbbnpUaXRsZV09XCJuelRpdGxlXCJcclxuICBbbnpQcmVmaXhdPVwibnpQcmVmaXhcIlxyXG4gIFtuelN1ZmZpeF09XCJuelN1ZmZpeFwiXHJcbj5cclxuPC9uei1zdGF0aXN0aWM+XHJcblxyXG48bmctdGVtcGxhdGUgI2NvdW50RG93blRwbD57eyBkaWZmIHwgbnpUaW1lUmFuZ2U6IG56Rm9ybWF0IH19PC9uZy10ZW1wbGF0ZT5cclxuIl19
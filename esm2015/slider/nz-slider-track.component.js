import { __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { InputBoolean, InputNumber } from 'ng-zorro-antd/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class NzSliderTrackComponent {
    constructor() {
        this.nzVertical = false;
        this.nzIncluded = false;
        this.style = {};
    }
    ngOnChanges(changes) {
        if (changes.nzIncluded) {
            this.style.visibility = this.nzIncluded ? 'visible' : 'hidden';
        }
        if (changes.nzVertical || changes.nzOffset || changes.nzLength) {
            if (this.nzVertical) {
                this.style.bottom = `${this.nzOffset}%`;
                this.style.height = `${this.nzLength}%`;
                this.style.left = null;
                this.style.width = null;
            }
            else {
                this.style.left = `${this.nzOffset}%`;
                this.style.width = `${this.nzLength}%`;
                this.style.bottom = null;
                this.style.height = null;
            }
        }
    }
}
/** @nocollapse */ NzSliderTrackComponent.ɵfac = function NzSliderTrackComponent_Factory(t) { return new (t || NzSliderTrackComponent)(); };
/** @nocollapse */ NzSliderTrackComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzSliderTrackComponent, selectors: [["nz-slider-track"]], inputs: { nzOffset: "nzOffset", nzLength: "nzLength", nzVertical: "nzVertical", nzIncluded: "nzIncluded" }, exportAs: ["nzSliderTrack"], features: [i0.ɵɵNgOnChangesFeature()], decls: 1, vars: 1, consts: [[1, "ant-slider-track", 3, "ngStyle"]], template: function NzSliderTrackComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngStyle", ctx.style);
    } }, directives: [i1.NgStyle], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], NzSliderTrackComponent.prototype, "nzOffset", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], NzSliderTrackComponent.prototype, "nzLength", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzSliderTrackComponent.prototype, "nzVertical", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzSliderTrackComponent.prototype, "nzIncluded", void 0);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzSliderTrackComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-slider-track',
                exportAs: 'nzSliderTrack',
                preserveWhitespaces: false,
                templateUrl: './nz-slider-track.component.html'
            }]
    }], null, { nzOffset: [{
            type: Input
        }], nzLength: [{
            type: Input
        }], nzVertical: [{
            type: Input
        }], nzIncluded: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLXRyYWNrLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvc2xpZGVyLyIsInNvdXJjZXMiOlsibnotc2xpZGVyLXRyYWNrLmNvbXBvbmVudC50cyIsIm56LXNsaWRlci10cmFjay5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZILE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7OztBQWtCL0QsTUFBTSxPQUFPLHNCQUFzQjtJQVJuQztRQVcyQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFFNUMsVUFBSyxHQUF1QixFQUFFLENBQUM7S0FvQmhDO0lBbEJDLFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7WUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7U0FDaEU7UUFDRCxJQUFJLE9BQU8sQ0FBQyxVQUFVLElBQUksT0FBTyxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsUUFBUSxFQUFFO1lBQzlELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDO2dCQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQzthQUN6QjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQztnQkFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2FBQzFCO1NBQ0Y7SUFDSCxDQUFDOzs0RkF6QlUsc0JBQXNCOzJEQUF0QixzQkFBc0I7UUM1Qm5DLHlCQUFzRDs7UUFBeEIsbUNBQWlCOztBRDZCckI7SUFBZCxXQUFXLEVBQUU7O3dEQUFrQjtBQUNqQjtJQUFkLFdBQVcsRUFBRTs7d0RBQWtCO0FBQ2hCO0lBQWYsWUFBWSxFQUFFOzswREFBb0I7QUFDbkI7SUFBZixZQUFZLEVBQUU7OzBEQUFvQjtrREFKakMsc0JBQXNCO2NBUmxDLFNBQVM7ZUFBQztnQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRSxlQUFlO2dCQUN6QixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixXQUFXLEVBQUUsa0NBQWtDO2FBQ2hEOztrQkFFRSxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE56U2xpZGVyVHJhY2tTdHlsZSB7XHJcbiAgYm90dG9tPzogc3RyaW5nIHwgbnVsbDtcclxuICBoZWlnaHQ/OiBzdHJpbmcgfCBudWxsO1xyXG4gIGxlZnQ/OiBzdHJpbmcgfCBudWxsO1xyXG4gIHdpZHRoPzogc3RyaW5nIHwgbnVsbDtcclxuICB2aXNpYmlsaXR5Pzogc3RyaW5nO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHNlbGVjdG9yOiAnbnotc2xpZGVyLXRyYWNrJyxcclxuICBleHBvcnRBczogJ256U2xpZGVyVHJhY2snLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1zbGlkZXItdHJhY2suY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelNsaWRlclRyYWNrQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBuek9mZnNldDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG56TGVuZ3RoOiBudW1iZXI7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56VmVydGljYWwgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpJbmNsdWRlZCA9IGZhbHNlO1xyXG5cclxuICBzdHlsZTogTnpTbGlkZXJUcmFja1N0eWxlID0ge307XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLm56SW5jbHVkZWQpIHtcclxuICAgICAgdGhpcy5zdHlsZS52aXNpYmlsaXR5ID0gdGhpcy5uekluY2x1ZGVkID8gJ3Zpc2libGUnIDogJ2hpZGRlbic7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy5uelZlcnRpY2FsIHx8IGNoYW5nZXMubnpPZmZzZXQgfHwgY2hhbmdlcy5uekxlbmd0aCkge1xyXG4gICAgICBpZiAodGhpcy5uelZlcnRpY2FsKSB7XHJcbiAgICAgICAgdGhpcy5zdHlsZS5ib3R0b20gPSBgJHt0aGlzLm56T2Zmc2V0fSVgO1xyXG4gICAgICAgIHRoaXMuc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5uekxlbmd0aH0lYDtcclxuICAgICAgICB0aGlzLnN0eWxlLmxlZnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc3R5bGUud2lkdGggPSBudWxsO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc3R5bGUubGVmdCA9IGAke3RoaXMubnpPZmZzZXR9JWA7XHJcbiAgICAgICAgdGhpcy5zdHlsZS53aWR0aCA9IGAke3RoaXMubnpMZW5ndGh9JWA7XHJcbiAgICAgICAgdGhpcy5zdHlsZS5ib3R0b20gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc3R5bGUuaGVpZ2h0ID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiYW50LXNsaWRlci10cmFja1wiIFtuZ1N0eWxlXT1cInN0eWxlXCI+PC9kaXY+XHJcbiJdfQ==
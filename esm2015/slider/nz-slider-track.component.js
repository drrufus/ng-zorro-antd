/**
 * @fileoverview added by tsickle
 * Generated from: nz-slider-track.component.ts
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
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { InputBoolean, InputNumber } from 'ng-zorro-antd/core';
/**
 * @record
 */
export function NzSliderTrackStyle() { }
if (false) {
    /** @type {?|undefined} */
    NzSliderTrackStyle.prototype.bottom;
    /** @type {?|undefined} */
    NzSliderTrackStyle.prototype.height;
    /** @type {?|undefined} */
    NzSliderTrackStyle.prototype.left;
    /** @type {?|undefined} */
    NzSliderTrackStyle.prototype.width;
    /** @type {?|undefined} */
    NzSliderTrackStyle.prototype.visibility;
}
export class NzSliderTrackComponent {
    constructor() {
        this.nzVertical = false;
        this.nzIncluded = false;
        this.style = {};
    }
    /**
     * @param {?} changes
     * @return {?}
     */
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
NzSliderTrackComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-slider-track',
                exportAs: 'nzSliderTrack',
                preserveWhitespaces: false,
                template: "<div class=\"ant-slider-track\" [ngStyle]=\"style\"></div>"
            }] }
];
NzSliderTrackComponent.propDecorators = {
    nzOffset: [{ type: Input }],
    nzLength: [{ type: Input }],
    nzVertical: [{ type: Input }],
    nzIncluded: [{ type: Input }]
};
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Number)
], NzSliderTrackComponent.prototype, "nzOffset", void 0);
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Number)
], NzSliderTrackComponent.prototype, "nzLength", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzSliderTrackComponent.prototype, "nzVertical", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzSliderTrackComponent.prototype, "nzIncluded", void 0);
if (false) {
    /** @type {?} */
    NzSliderTrackComponent.prototype.nzOffset;
    /** @type {?} */
    NzSliderTrackComponent.prototype.nzLength;
    /** @type {?} */
    NzSliderTrackComponent.prototype.nzVertical;
    /** @type {?} */
    NzSliderTrackComponent.prototype.nzIncluded;
    /** @type {?} */
    NzSliderTrackComponent.prototype.style;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLXRyYWNrLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvc2xpZGVyLyIsInNvdXJjZXMiOlsibnotc2xpZGVyLXRyYWNrLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZILE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7QUFFL0Qsd0NBTUM7OztJQUxDLG9DQUF1Qjs7SUFDdkIsb0NBQXVCOztJQUN2QixrQ0FBcUI7O0lBQ3JCLG1DQUFzQjs7SUFDdEIsd0NBQW9COztBQVd0QixNQUFNLE9BQU8sc0JBQXNCO0lBUm5DO1FBVzJCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUU1QyxVQUFLLEdBQXVCLEVBQUUsQ0FBQztJQW9CakMsQ0FBQzs7Ozs7SUFsQkMsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtZQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztTQUNoRTtRQUNELElBQUksT0FBTyxDQUFDLFVBQVUsSUFBSSxPQUFPLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUU7WUFDOUQsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQztnQkFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2FBQ3pCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQztnQkFDdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7YUFDMUI7U0FDRjtJQUNILENBQUM7OztZQWpDRixTQUFTLFNBQUM7Z0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUUsZUFBZTtnQkFDekIsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsc0VBQStDO2FBQ2hEOzs7dUJBRUUsS0FBSzt1QkFDTCxLQUFLO3lCQUNMLEtBQUs7eUJBQ0wsS0FBSzs7QUFIa0I7SUFBZCxXQUFXLEVBQUU7O3dEQUFrQjtBQUNqQjtJQUFkLFdBQVcsRUFBRTs7d0RBQWtCO0FBQ2hCO0lBQWYsWUFBWSxFQUFFOzswREFBb0I7QUFDbkI7SUFBZixZQUFZLEVBQUU7OzBEQUFvQjs7O0lBSDVDLDBDQUF5Qzs7SUFDekMsMENBQXlDOztJQUN6Qyw0Q0FBNEM7O0lBQzVDLDRDQUE0Qzs7SUFFNUMsdUNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE56U2xpZGVyVHJhY2tTdHlsZSB7XHJcbiAgYm90dG9tPzogc3RyaW5nIHwgbnVsbDtcclxuICBoZWlnaHQ/OiBzdHJpbmcgfCBudWxsO1xyXG4gIGxlZnQ/OiBzdHJpbmcgfCBudWxsO1xyXG4gIHdpZHRoPzogc3RyaW5nIHwgbnVsbDtcclxuICB2aXNpYmlsaXR5Pzogc3RyaW5nO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHNlbGVjdG9yOiAnbnotc2xpZGVyLXRyYWNrJyxcclxuICBleHBvcnRBczogJ256U2xpZGVyVHJhY2snLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1zbGlkZXItdHJhY2suY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelNsaWRlclRyYWNrQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBuek9mZnNldDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG56TGVuZ3RoOiBudW1iZXI7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56VmVydGljYWwgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpJbmNsdWRlZCA9IGZhbHNlO1xyXG5cclxuICBzdHlsZTogTnpTbGlkZXJUcmFja1N0eWxlID0ge307XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLm56SW5jbHVkZWQpIHtcclxuICAgICAgdGhpcy5zdHlsZS52aXNpYmlsaXR5ID0gdGhpcy5uekluY2x1ZGVkID8gJ3Zpc2libGUnIDogJ2hpZGRlbic7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy5uelZlcnRpY2FsIHx8IGNoYW5nZXMubnpPZmZzZXQgfHwgY2hhbmdlcy5uekxlbmd0aCkge1xyXG4gICAgICBpZiAodGhpcy5uelZlcnRpY2FsKSB7XHJcbiAgICAgICAgdGhpcy5zdHlsZS5ib3R0b20gPSBgJHt0aGlzLm56T2Zmc2V0fSVgO1xyXG4gICAgICAgIHRoaXMuc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5uekxlbmd0aH0lYDtcclxuICAgICAgICB0aGlzLnN0eWxlLmxlZnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc3R5bGUud2lkdGggPSBudWxsO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc3R5bGUubGVmdCA9IGAke3RoaXMubnpPZmZzZXR9JWA7XHJcbiAgICAgICAgdGhpcy5zdHlsZS53aWR0aCA9IGAke3RoaXMubnpMZW5ndGh9JWA7XHJcbiAgICAgICAgdGhpcy5zdHlsZS5ib3R0b20gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc3R5bGUuaGVpZ2h0ID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=
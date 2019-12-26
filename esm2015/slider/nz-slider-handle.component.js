/**
 * @fileoverview added by tsickle
 * Generated from: nz-slider-handle.component.ts
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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { InputBoolean } from 'ng-zorro-antd/core';
import { NzTooltipDirective } from 'ng-zorro-antd/tooltip';
import { NzSliderComponent } from './nz-slider.component';
export class NzSliderHandleComponent {
    /**
     * @param {?} sliderComponent
     * @param {?} cdr
     */
    constructor(sliderComponent, cdr) {
        this.sliderComponent = sliderComponent;
        this.cdr = cdr;
        this.nzTooltipVisible = 'default';
        this.nzActive = false;
        this.style = {};
        this.hovers_ = new Subscription();
        this.enterHandle = (/**
         * @return {?}
         */
        () => {
            if (!this.sliderComponent.isDragging) {
                this.toggleTooltip(true);
                this.updateTooltipPosition();
                this.cdr.detectChanges();
            }
        });
        this.leaveHandle = (/**
         * @return {?}
         */
        () => {
            if (!this.sliderComponent.isDragging) {
                this.toggleTooltip(false);
                this.cdr.detectChanges();
            }
        });
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzOffset, nzValue, nzActive, nzTooltipVisible } = changes;
        if (nzOffset) {
            this.updateStyle();
        }
        if (nzValue) {
            this.updateTooltipTitle();
            this.updateTooltipPosition();
        }
        if (nzActive) {
            if (nzActive.currentValue) {
                this.toggleTooltip(true);
            }
            else {
                this.toggleTooltip(false);
            }
        }
        if (nzTooltipVisible && nzTooltipVisible.currentValue === 'always') {
            Promise.resolve().then((/**
             * @return {?}
             */
            () => this.toggleTooltip(true, true)));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.hovers_.unsubscribe();
    }
    /**
     * @private
     * @param {?} show
     * @param {?=} force
     * @return {?}
     */
    toggleTooltip(show, force = false) {
        if (!force && (this.nzTooltipVisible !== 'default' || !this.tooltip)) {
            return;
        }
        if (show) {
            this.tooltip.show();
        }
        else {
            this.tooltip.hide();
        }
    }
    /**
     * @private
     * @return {?}
     */
    updateTooltipTitle() {
        this.tooltipTitle = this.nzTipFormatter ? this.nzTipFormatter(this.nzValue) : `${this.nzValue}`;
    }
    /**
     * @private
     * @return {?}
     */
    updateTooltipPosition() {
        if (this.tooltip) {
            Promise.resolve().then((/**
             * @return {?}
             */
            () => this.tooltip.updatePosition()));
        }
    }
    /**
     * @private
     * @return {?}
     */
    updateStyle() {
        this.style[this.nzVertical ? 'bottom' : 'left'] = `${this.nzOffset}%`;
        this.cdr.markForCheck();
    }
}
NzSliderHandleComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-slider-handle',
                exportAs: 'nzSliderHandle',
                preserveWhitespaces: false,
                template: "<div nz-tooltip\r\n     *ngIf=\"nzTipFormatter !== null && nzTooltipVisible !== 'never'\"\r\n     class=\"ant-slider-handle\"\r\n     [ngStyle]=\"style\"\r\n     [nzTitle]=\"tooltipTitle\"\r\n     [nzTrigger]=\"null\"\r\n     [nzPlacement]=\"nzTooltipPlacement\"></div>\r\n<div *ngIf=\"nzTipFormatter === null || nzTooltipVisible === 'never'\"\r\n     class=\"ant-slider-handle\"\r\n     [ngStyle]=\"style\"></div>\r\n",
                host: {
                    '(mouseenter)': 'enterHandle()',
                    '(mouseleave)': 'leaveHandle()'
                }
            }] }
];
/** @nocollapse */
NzSliderHandleComponent.ctorParameters = () => [
    { type: NzSliderComponent },
    { type: ChangeDetectorRef }
];
NzSliderHandleComponent.propDecorators = {
    tooltip: [{ type: ViewChild, args: [NzTooltipDirective, { static: false },] }],
    nzVertical: [{ type: Input }],
    nzOffset: [{ type: Input }],
    nzValue: [{ type: Input }],
    nzTooltipVisible: [{ type: Input }],
    nzTooltipPlacement: [{ type: Input }],
    nzTipFormatter: [{ type: Input }],
    nzActive: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzSliderHandleComponent.prototype, "nzActive", void 0);
if (false) {
    /** @type {?} */
    NzSliderHandleComponent.prototype.tooltip;
    /** @type {?} */
    NzSliderHandleComponent.prototype.nzVertical;
    /** @type {?} */
    NzSliderHandleComponent.prototype.nzOffset;
    /** @type {?} */
    NzSliderHandleComponent.prototype.nzValue;
    /** @type {?} */
    NzSliderHandleComponent.prototype.nzTooltipVisible;
    /** @type {?} */
    NzSliderHandleComponent.prototype.nzTooltipPlacement;
    /** @type {?} */
    NzSliderHandleComponent.prototype.nzTipFormatter;
    /** @type {?} */
    NzSliderHandleComponent.prototype.nzActive;
    /** @type {?} */
    NzSliderHandleComponent.prototype.tooltipTitle;
    /** @type {?} */
    NzSliderHandleComponent.prototype.style;
    /**
     * @type {?}
     * @private
     */
    NzSliderHandleComponent.prototype.hovers_;
    /** @type {?} */
    NzSliderHandleComponent.prototype.enterHandle;
    /** @type {?} */
    NzSliderHandleComponent.prototype.leaveHandle;
    /**
     * @type {?}
     * @private
     */
    NzSliderHandleComponent.prototype.sliderComponent;
    /**
     * @type {?}
     * @private
     */
    NzSliderHandleComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLWhhbmRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3NsaWRlci8iLCJzb3VyY2VzIjpbIm56LXNsaWRlci1oYW5kbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsS0FBSyxFQUlMLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVwQyxPQUFPLEVBQUUsWUFBWSxFQUFvQixNQUFNLG9CQUFvQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBYzFELE1BQU0sT0FBTyx1QkFBdUI7Ozs7O0lBZ0JsQyxZQUFvQixlQUFrQyxFQUFVLEdBQXNCO1FBQWxFLG9CQUFlLEdBQWYsZUFBZSxDQUFtQjtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBVjdFLHFCQUFnQixHQUFzQixTQUFTLENBQUM7UUFHaEMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUcxQyxVQUFLLEdBQXFCLEVBQUUsQ0FBQztRQUVyQixZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQThCckMsZ0JBQVc7OztRQUFHLEdBQUcsRUFBRTtZQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO2dCQUM3QixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQzFCO1FBQ0gsQ0FBQyxFQUFDO1FBRUYsZ0JB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O29CQUNKLGNBQWMsRUFBRSxlQUFlO29CQUMvQixjQUFjLEVBQUUsZUFBZTtpQkFDaEM7YUFDRjs7OztZQWJRLGlCQUFpQjtZQWZ4QixpQkFBaUI7OztzQkE4QmhCLFNBQVMsU0FBQyxrQkFBa0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7eUJBRS9DLEtBQUs7dUJBQ0wsS0FBSztzQkFDTCxLQUFLOytCQUNMLEtBQUs7aUNBQ0wsS0FBSzs2QkFDTCxLQUFLO3VCQUNMLEtBQUs7O0FBQW1CO0lBQWYsWUFBWSxFQUFFOzt5REFBa0I7OztJQVIxQywwQ0FBOEU7O0lBRTlFLDZDQUE0Qjs7SUFDNUIsMkNBQTBCOztJQUMxQiwwQ0FBeUI7O0lBQ3pCLG1EQUF5RDs7SUFDekQscURBQW9DOztJQUNwQyxpREFBbUQ7O0lBQ25ELDJDQUEwQzs7SUFFMUMsK0NBQXFCOztJQUNyQix3Q0FBNkI7Ozs7O0lBRTdCLDBDQUFxQzs7SUE4QnJDLDhDQU1FOztJQUVGLDhDQUtFOzs7OztJQXpDVSxrREFBMEM7Ozs7O0lBQUUsc0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBOZ1N0eWxlSW50ZXJmYWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpUb29sdGlwRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90b29sdGlwJztcclxuXHJcbmltcG9ydCB7IFNsaWRlclNob3dUb29sdGlwIH0gZnJvbSAnLi9uei1zbGlkZXItZGVmaW5pdGlvbnMnO1xyXG5pbXBvcnQgeyBOelNsaWRlckNvbXBvbmVudCB9IGZyb20gJy4vbnotc2xpZGVyLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHNlbGVjdG9yOiAnbnotc2xpZGVyLWhhbmRsZScsXHJcbiAgZXhwb3J0QXM6ICduelNsaWRlckhhbmRsZScsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXNsaWRlci1oYW5kbGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGhvc3Q6IHtcclxuICAgICcobW91c2VlbnRlciknOiAnZW50ZXJIYW5kbGUoKScsXHJcbiAgICAnKG1vdXNlbGVhdmUpJzogJ2xlYXZlSGFuZGxlKCknXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpTbGlkZXJIYW5kbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgQFZpZXdDaGlsZChOelRvb2x0aXBEaXJlY3RpdmUsIHsgc3RhdGljOiBmYWxzZSB9KSB0b29sdGlwOiBOelRvb2x0aXBEaXJlY3RpdmU7XHJcblxyXG4gIEBJbnB1dCgpIG56VmVydGljYWw6IHN0cmluZztcclxuICBASW5wdXQoKSBuek9mZnNldDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIG56VmFsdWU6IG51bWJlcjtcclxuICBASW5wdXQoKSBuelRvb2x0aXBWaXNpYmxlOiBTbGlkZXJTaG93VG9vbHRpcCA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBuelRvb2x0aXBQbGFjZW1lbnQ6IHN0cmluZztcclxuICBASW5wdXQoKSBuelRpcEZvcm1hdHRlcjogKHZhbHVlOiBudW1iZXIpID0+IHN0cmluZztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpBY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgdG9vbHRpcFRpdGxlOiBzdHJpbmc7XHJcbiAgc3R5bGU6IE5nU3R5bGVJbnRlcmZhY2UgPSB7fTtcclxuXHJcbiAgcHJpdmF0ZSBob3ZlcnNfID0gbmV3IFN1YnNjcmlwdGlvbigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNsaWRlckNvbXBvbmVudDogTnpTbGlkZXJDb21wb25lbnQsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc3QgeyBuek9mZnNldCwgbnpWYWx1ZSwgbnpBY3RpdmUsIG56VG9vbHRpcFZpc2libGUgfSA9IGNoYW5nZXM7XHJcblxyXG4gICAgaWYgKG56T2Zmc2V0KSB7XHJcbiAgICAgIHRoaXMudXBkYXRlU3R5bGUoKTtcclxuICAgIH1cclxuICAgIGlmIChuelZhbHVlKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlVG9vbHRpcFRpdGxlKCk7XHJcbiAgICAgIHRoaXMudXBkYXRlVG9vbHRpcFBvc2l0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBpZiAobnpBY3RpdmUpIHtcclxuICAgICAgaWYgKG56QWN0aXZlLmN1cnJlbnRWYWx1ZSkge1xyXG4gICAgICAgIHRoaXMudG9nZ2xlVG9vbHRpcCh0cnVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnRvZ2dsZVRvb2x0aXAoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAobnpUb29sdGlwVmlzaWJsZSAmJiBuelRvb2x0aXBWaXNpYmxlLmN1cnJlbnRWYWx1ZSA9PT0gJ2Fsd2F5cycpIHtcclxuICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLnRvZ2dsZVRvb2x0aXAodHJ1ZSwgdHJ1ZSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmhvdmVyc18udW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIGVudGVySGFuZGxlID0gKCkgPT4ge1xyXG4gICAgaWYgKCF0aGlzLnNsaWRlckNvbXBvbmVudC5pc0RyYWdnaW5nKSB7XHJcbiAgICAgIHRoaXMudG9nZ2xlVG9vbHRpcCh0cnVlKTtcclxuICAgICAgdGhpcy51cGRhdGVUb29sdGlwUG9zaXRpb24oKTtcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGxlYXZlSGFuZGxlID0gKCkgPT4ge1xyXG4gICAgaWYgKCF0aGlzLnNsaWRlckNvbXBvbmVudC5pc0RyYWdnaW5nKSB7XHJcbiAgICAgIHRoaXMudG9nZ2xlVG9vbHRpcChmYWxzZSk7XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBwcml2YXRlIHRvZ2dsZVRvb2x0aXAoc2hvdzogYm9vbGVhbiwgZm9yY2U6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgaWYgKCFmb3JjZSAmJiAodGhpcy5uelRvb2x0aXBWaXNpYmxlICE9PSAnZGVmYXVsdCcgfHwgIXRoaXMudG9vbHRpcCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzaG93KSB7XHJcbiAgICAgIHRoaXMudG9vbHRpcC5zaG93KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnRvb2x0aXAuaGlkZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVUb29sdGlwVGl0bGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRvb2x0aXBUaXRsZSA9IHRoaXMubnpUaXBGb3JtYXR0ZXIgPyB0aGlzLm56VGlwRm9ybWF0dGVyKHRoaXMubnpWYWx1ZSkgOiBgJHt0aGlzLm56VmFsdWV9YDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlVG9vbHRpcFBvc2l0aW9uKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudG9vbHRpcCkge1xyXG4gICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMudG9vbHRpcC51cGRhdGVQb3NpdGlvbigpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlU3R5bGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLnN0eWxlW3RoaXMubnpWZXJ0aWNhbCA/ICdib3R0b20nIDogJ2xlZnQnXSA9IGAke3RoaXMubnpPZmZzZXR9JWA7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcbn1cclxuIl19
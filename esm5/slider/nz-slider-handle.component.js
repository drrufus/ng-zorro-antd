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
var NzSliderHandleComponent = /** @class */ (function () {
    function NzSliderHandleComponent(sliderComponent, cdr) {
        var _this = this;
        this.sliderComponent = sliderComponent;
        this.cdr = cdr;
        this.nzTooltipVisible = 'default';
        this.nzActive = false;
        this.style = {};
        this.hovers_ = new Subscription();
        this.enterHandle = (/**
         * @return {?}
         */
        function () {
            if (!_this.sliderComponent.isDragging) {
                _this.toggleTooltip(true);
                _this.updateTooltipPosition();
                _this.cdr.detectChanges();
            }
        });
        this.leaveHandle = (/**
         * @return {?}
         */
        function () {
            if (!_this.sliderComponent.isDragging) {
                _this.toggleTooltip(false);
                _this.cdr.detectChanges();
            }
        });
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    NzSliderHandleComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        var nzOffset = changes.nzOffset, nzValue = changes.nzValue, nzActive = changes.nzActive, nzTooltipVisible = changes.nzTooltipVisible;
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
            function () { return _this.toggleTooltip(true, true); }));
        }
    };
    /**
     * @return {?}
     */
    NzSliderHandleComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.hovers_.unsubscribe();
    };
    /**
     * @private
     * @param {?} show
     * @param {?=} force
     * @return {?}
     */
    NzSliderHandleComponent.prototype.toggleTooltip = /**
     * @private
     * @param {?} show
     * @param {?=} force
     * @return {?}
     */
    function (show, force) {
        if (force === void 0) { force = false; }
        if (!force && (this.nzTooltipVisible !== 'default' || !this.tooltip)) {
            return;
        }
        if (show) {
            this.tooltip.show();
        }
        else {
            this.tooltip.hide();
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzSliderHandleComponent.prototype.updateTooltipTitle = /**
     * @private
     * @return {?}
     */
    function () {
        this.tooltipTitle = this.nzTipFormatter ? this.nzTipFormatter(this.nzValue) : "" + this.nzValue;
    };
    /**
     * @private
     * @return {?}
     */
    NzSliderHandleComponent.prototype.updateTooltipPosition = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.tooltip) {
            Promise.resolve().then((/**
             * @return {?}
             */
            function () { return _this.tooltip.updatePosition(); }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzSliderHandleComponent.prototype.updateStyle = /**
     * @private
     * @return {?}
     */
    function () {
        this.style[this.nzVertical ? 'bottom' : 'left'] = this.nzOffset + "%";
        this.cdr.markForCheck();
    };
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
    NzSliderHandleComponent.ctorParameters = function () { return [
        { type: NzSliderComponent },
        { type: ChangeDetectorRef }
    ]; };
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
    return NzSliderHandleComponent;
}());
export { NzSliderHandleComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLWhhbmRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3NsaWRlci8iLCJzb3VyY2VzIjpbIm56LXNsaWRlci1oYW5kbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsS0FBSyxFQUlMLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVwQyxPQUFPLEVBQUUsWUFBWSxFQUFvQixNQUFNLG9CQUFvQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTFEO0lBNEJFLGlDQUFvQixlQUFrQyxFQUFVLEdBQXNCO1FBQXRGLGlCQUEwRjtRQUF0RSxvQkFBZSxHQUFmLGVBQWUsQ0FBbUI7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQVY3RSxxQkFBZ0IsR0FBc0IsU0FBUyxDQUFDO1FBR2hDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFHMUMsVUFBSyxHQUFxQixFQUFFLENBQUM7UUFFckIsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUE4QnJDLGdCQUFXOzs7UUFBRztZQUNaLElBQUksQ0FBQyxLQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRTtnQkFDcEMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekIsS0FBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7Z0JBQzdCLEtBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDMUI7UUFDSCxDQUFDLEVBQUM7UUFFRixnQkFBVzs7O1FBQUc7WUFDWixJQUFJ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QUFnQjtvQkFDMUIsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsOGFBQWdEO29CQUNoRCxJQUFJLEVBQUU7d0JBQ0osY0FBYyxFQUFFLGVBQWU7d0JBQy9CLGNBQWMsRUFBRSxlQUFlO3FCQUNoQztpQkFDRjs7OztnQkFiUSxpQkFBaUI7Z0JBZnhCLGlCQUFpQjs7OzBCQThCaEIsU0FBUyxTQUFDLGtCQUFrQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs2QkFFL0MsS0FBSzsyQkFDTCxLQUFLOzBCQUNMLEtBQUs7bUNBQ0wsS0FBSztxQ0FDTCxLQUFLO2lDQUNMLEtBQUs7MkJBQ0wsS0FBSzs7SUFBbUI7UUFBZixZQUFZLEVBQUU7OzZEQUFrQjtJQTRFNUMsOEJBQUM7Q0FBQSxBQWpHRCxJQWlHQztTQXJGWSx1QkFBdUI7OztJQUNsQywwQ0FBOEU7O0lBRTlFLDZDQUE0Qjs7SUFDNUIsMkNBQTBCOztJQUMxQiwwQ0FBeUI7O0lBQ3pCLG1EQUF5RDs7SUFDekQscURBQW9DOztJQUNwQyxpREFBbUQ7O0lBQ25ELDJDQUEwQzs7SUFFMUMsK0NBQXFCOztJQUNyQix3Q0FBNkI7Ozs7O0lBRTdCLDBDQUFxQzs7SUE4QnJDLDhDQU1FOztJQUVGLDhDQUtFOzs7OztJQXpDVSxrREFBMEM7Ozs7O0lBQUUsc0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBOZ1N0eWxlSW50ZXJmYWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpUb29sdGlwRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90b29sdGlwJztcclxuXHJcbmltcG9ydCB7IFNsaWRlclNob3dUb29sdGlwIH0gZnJvbSAnLi9uei1zbGlkZXItZGVmaW5pdGlvbnMnO1xyXG5pbXBvcnQgeyBOelNsaWRlckNvbXBvbmVudCB9IGZyb20gJy4vbnotc2xpZGVyLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHNlbGVjdG9yOiAnbnotc2xpZGVyLWhhbmRsZScsXHJcbiAgZXhwb3J0QXM6ICduelNsaWRlckhhbmRsZScsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXNsaWRlci1oYW5kbGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGhvc3Q6IHtcclxuICAgICcobW91c2VlbnRlciknOiAnZW50ZXJIYW5kbGUoKScsXHJcbiAgICAnKG1vdXNlbGVhdmUpJzogJ2xlYXZlSGFuZGxlKCknXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpTbGlkZXJIYW5kbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgQFZpZXdDaGlsZChOelRvb2x0aXBEaXJlY3RpdmUsIHsgc3RhdGljOiBmYWxzZSB9KSB0b29sdGlwOiBOelRvb2x0aXBEaXJlY3RpdmU7XHJcblxyXG4gIEBJbnB1dCgpIG56VmVydGljYWw6IHN0cmluZztcclxuICBASW5wdXQoKSBuek9mZnNldDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIG56VmFsdWU6IG51bWJlcjtcclxuICBASW5wdXQoKSBuelRvb2x0aXBWaXNpYmxlOiBTbGlkZXJTaG93VG9vbHRpcCA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBuelRvb2x0aXBQbGFjZW1lbnQ6IHN0cmluZztcclxuICBASW5wdXQoKSBuelRpcEZvcm1hdHRlcjogKHZhbHVlOiBudW1iZXIpID0+IHN0cmluZztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpBY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgdG9vbHRpcFRpdGxlOiBzdHJpbmc7XHJcbiAgc3R5bGU6IE5nU3R5bGVJbnRlcmZhY2UgPSB7fTtcclxuXHJcbiAgcHJpdmF0ZSBob3ZlcnNfID0gbmV3IFN1YnNjcmlwdGlvbigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNsaWRlckNvbXBvbmVudDogTnpTbGlkZXJDb21wb25lbnQsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc3QgeyBuek9mZnNldCwgbnpWYWx1ZSwgbnpBY3RpdmUsIG56VG9vbHRpcFZpc2libGUgfSA9IGNoYW5nZXM7XHJcblxyXG4gICAgaWYgKG56T2Zmc2V0KSB7XHJcbiAgICAgIHRoaXMudXBkYXRlU3R5bGUoKTtcclxuICAgIH1cclxuICAgIGlmIChuelZhbHVlKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlVG9vbHRpcFRpdGxlKCk7XHJcbiAgICAgIHRoaXMudXBkYXRlVG9vbHRpcFBvc2l0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBpZiAobnpBY3RpdmUpIHtcclxuICAgICAgaWYgKG56QWN0aXZlLmN1cnJlbnRWYWx1ZSkge1xyXG4gICAgICAgIHRoaXMudG9nZ2xlVG9vbHRpcCh0cnVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnRvZ2dsZVRvb2x0aXAoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAobnpUb29sdGlwVmlzaWJsZSAmJiBuelRvb2x0aXBWaXNpYmxlLmN1cnJlbnRWYWx1ZSA9PT0gJ2Fsd2F5cycpIHtcclxuICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLnRvZ2dsZVRvb2x0aXAodHJ1ZSwgdHJ1ZSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmhvdmVyc18udW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIGVudGVySGFuZGxlID0gKCkgPT4ge1xyXG4gICAgaWYgKCF0aGlzLnNsaWRlckNvbXBvbmVudC5pc0RyYWdnaW5nKSB7XHJcbiAgICAgIHRoaXMudG9nZ2xlVG9vbHRpcCh0cnVlKTtcclxuICAgICAgdGhpcy51cGRhdGVUb29sdGlwUG9zaXRpb24oKTtcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGxlYXZlSGFuZGxlID0gKCkgPT4ge1xyXG4gICAgaWYgKCF0aGlzLnNsaWRlckNvbXBvbmVudC5pc0RyYWdnaW5nKSB7XHJcbiAgICAgIHRoaXMudG9nZ2xlVG9vbHRpcChmYWxzZSk7XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBwcml2YXRlIHRvZ2dsZVRvb2x0aXAoc2hvdzogYm9vbGVhbiwgZm9yY2U6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgaWYgKCFmb3JjZSAmJiAodGhpcy5uelRvb2x0aXBWaXNpYmxlICE9PSAnZGVmYXVsdCcgfHwgIXRoaXMudG9vbHRpcCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzaG93KSB7XHJcbiAgICAgIHRoaXMudG9vbHRpcC5zaG93KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnRvb2x0aXAuaGlkZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVUb29sdGlwVGl0bGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRvb2x0aXBUaXRsZSA9IHRoaXMubnpUaXBGb3JtYXR0ZXIgPyB0aGlzLm56VGlwRm9ybWF0dGVyKHRoaXMubnpWYWx1ZSkgOiBgJHt0aGlzLm56VmFsdWV9YDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlVG9vbHRpcFBvc2l0aW9uKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudG9vbHRpcCkge1xyXG4gICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMudG9vbHRpcC51cGRhdGVQb3NpdGlvbigpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlU3R5bGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLnN0eWxlW3RoaXMubnpWZXJ0aWNhbCA/ICdib3R0b20nIDogJ2xlZnQnXSA9IGAke3RoaXMubnpPZmZzZXR9JWA7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcbn1cclxuIl19
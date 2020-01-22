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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLWhhbmRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3NsaWRlci8iLCJzb3VyY2VzIjpbIm56LXNsaWRlci1oYW5kbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxLQUFLLEVBSUwsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXBDLE9BQU8sRUFBRSxZQUFZLEVBQW9CLE1BQU0sb0JBQW9CLENBQUM7QUFDcEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFHM0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFjMUQsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7SUFnQmxDLFlBQW9CLGVBQWtDLEVBQVUsR0FBc0I7UUFBbEUsb0JBQWUsR0FBZixlQUFlLENBQW1CO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFWN0UscUJBQWdCLEdBQXNCLFNBQVMsQ0FBQztRQUdoQyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRzFDLFVBQUssR0FBcUIsRUFBRSxDQUFDO1FBRXJCLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBOEJyQyxnQkFBVzs7O1FBQUcsR0FBRyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRTtnQkFDcEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekIsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDMUI7UUFDSCxDQUFDLEVBQUM7UUFFRixnQkFB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b0JBQ0osY0FBYyxFQUFFLGVBQWU7b0JBQy9CLGNBQWMsRUFBRSxlQUFlO2lCQUNoQzthQUNGOzs7O1lBYlEsaUJBQWlCO1lBZnhCLGlCQUFpQjs7O3NCQThCaEIsU0FBUyxTQUFDLGtCQUFrQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTt5QkFFL0MsS0FBSzt1QkFDTCxLQUFLO3NCQUNMLEtBQUs7K0JBQ0wsS0FBSztpQ0FDTCxLQUFLOzZCQUNMLEtBQUs7dUJBQ0wsS0FBSzs7QUFBbUI7SUFBZixZQUFZLEVBQUU7O3lEQUFrQjs7O0lBUjFDLDBDQUE4RTs7SUFFOUUsNkNBQTRCOztJQUM1QiwyQ0FBMEI7O0lBQzFCLDBDQUF5Qjs7SUFDekIsbURBQXlEOztJQUN6RCxxREFBb0M7O0lBQ3BDLGlEQUFtRDs7SUFDbkQsMkNBQTBDOztJQUUxQywrQ0FBcUI7O0lBQ3JCLHdDQUE2Qjs7Ozs7SUFFN0IsMENBQXFDOztJQThCckMsOENBTUU7O0lBRUYsOENBS0U7Ozs7O0lBekNVLGtEQUEwQzs7Ozs7SUFBRSxzQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIE5nU3R5bGVJbnRlcmZhY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOelRvb2x0aXBEaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL3Rvb2x0aXAnO1xyXG5cclxuaW1wb3J0IHsgU2xpZGVyU2hvd1Rvb2x0aXAgfSBmcm9tICcuL256LXNsaWRlci1kZWZpbml0aW9ucyc7XHJcbmltcG9ydCB7IE56U2xpZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9uei1zbGlkZXIuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc2VsZWN0b3I6ICduei1zbGlkZXItaGFuZGxlJyxcclxuICBleHBvcnRBczogJ256U2xpZGVySGFuZGxlJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotc2xpZGVyLWhhbmRsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgaG9zdDoge1xyXG4gICAgJyhtb3VzZWVudGVyKSc6ICdlbnRlckhhbmRsZSgpJyxcclxuICAgICcobW91c2VsZWF2ZSknOiAnbGVhdmVIYW5kbGUoKSdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelNsaWRlckhhbmRsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICBAVmlld0NoaWxkKE56VG9vbHRpcERpcmVjdGl2ZSwgeyBzdGF0aWM6IGZhbHNlIH0pIHRvb2x0aXA6IE56VG9vbHRpcERpcmVjdGl2ZTtcclxuXHJcbiAgQElucHV0KCkgbnpWZXJ0aWNhbDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG56T2Zmc2V0OiBudW1iZXI7XHJcbiAgQElucHV0KCkgbnpWYWx1ZTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIG56VG9vbHRpcFZpc2libGU6IFNsaWRlclNob3dUb29sdGlwID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIG56VG9vbHRpcFBsYWNlbWVudDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG56VGlwRm9ybWF0dGVyOiAodmFsdWU6IG51bWJlcikgPT4gc3RyaW5nO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICB0b29sdGlwVGl0bGU6IHN0cmluZztcclxuICBzdHlsZTogTmdTdHlsZUludGVyZmFjZSA9IHt9O1xyXG5cclxuICBwcml2YXRlIGhvdmVyc18gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2xpZGVyQ29tcG9uZW50OiBOelNsaWRlckNvbXBvbmVudCwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBjb25zdCB7IG56T2Zmc2V0LCBuelZhbHVlLCBuekFjdGl2ZSwgbnpUb29sdGlwVmlzaWJsZSB9ID0gY2hhbmdlcztcclxuXHJcbiAgICBpZiAobnpPZmZzZXQpIHtcclxuICAgICAgdGhpcy51cGRhdGVTdHlsZSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKG56VmFsdWUpIHtcclxuICAgICAgdGhpcy51cGRhdGVUb29sdGlwVGl0bGUoKTtcclxuICAgICAgdGhpcy51cGRhdGVUb29sdGlwUG9zaXRpb24oKTtcclxuICAgIH1cclxuICAgIGlmIChuekFjdGl2ZSkge1xyXG4gICAgICBpZiAobnpBY3RpdmUuY3VycmVudFZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy50b2dnbGVUb29sdGlwKHRydWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudG9nZ2xlVG9vbHRpcChmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChuelRvb2x0aXBWaXNpYmxlICYmIG56VG9vbHRpcFZpc2libGUuY3VycmVudFZhbHVlID09PSAnYWx3YXlzJykge1xyXG4gICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMudG9nZ2xlVG9vbHRpcCh0cnVlLCB0cnVlKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuaG92ZXJzXy51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgZW50ZXJIYW5kbGUgPSAoKSA9PiB7XHJcbiAgICBpZiAoIXRoaXMuc2xpZGVyQ29tcG9uZW50LmlzRHJhZ2dpbmcpIHtcclxuICAgICAgdGhpcy50b2dnbGVUb29sdGlwKHRydWUpO1xyXG4gICAgICB0aGlzLnVwZGF0ZVRvb2x0aXBQb3NpdGlvbigpO1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgbGVhdmVIYW5kbGUgPSAoKSA9PiB7XHJcbiAgICBpZiAoIXRoaXMuc2xpZGVyQ29tcG9uZW50LmlzRHJhZ2dpbmcpIHtcclxuICAgICAgdGhpcy50b2dnbGVUb29sdGlwKGZhbHNlKTtcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgdG9nZ2xlVG9vbHRpcChzaG93OiBib29sZWFuLCBmb3JjZTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICBpZiAoIWZvcmNlICYmICh0aGlzLm56VG9vbHRpcFZpc2libGUgIT09ICdkZWZhdWx0JyB8fCAhdGhpcy50b29sdGlwKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNob3cpIHtcclxuICAgICAgdGhpcy50b29sdGlwLnNob3coKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudG9vbHRpcC5oaWRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZVRvb2x0aXBUaXRsZSgpOiB2b2lkIHtcclxuICAgIHRoaXMudG9vbHRpcFRpdGxlID0gdGhpcy5uelRpcEZvcm1hdHRlciA/IHRoaXMubnpUaXBGb3JtYXR0ZXIodGhpcy5uelZhbHVlKSA6IGAke3RoaXMubnpWYWx1ZX1gO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVUb29sdGlwUG9zaXRpb24oKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy50b29sdGlwKSB7XHJcbiAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy50b29sdGlwLnVwZGF0ZVBvc2l0aW9uKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVTdHlsZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuc3R5bGVbdGhpcy5uelZlcnRpY2FsID8gJ2JvdHRvbScgOiAnbGVmdCddID0gYCR7dGhpcy5uek9mZnNldH0lYDtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxufVxyXG4iXX0=
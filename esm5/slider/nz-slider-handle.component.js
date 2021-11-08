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
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'ng-zorro-antd/tooltip';

function NzSliderHandleComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 2);
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r0.style)("nzTitle", ctx_r0.tooltipTitle)("nzTrigger", null)("nzPlacement", ctx_r0.nzTooltipPlacement);
} }
function NzSliderHandleComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 3);
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r1.style);
} }
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
NzSliderHandleComponent.ɵfac = function NzSliderHandleComponent_Factory(t) { return new (t || NzSliderHandleComponent)(ɵngcc0.ɵɵdirectiveInject(NzSliderComponent), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
NzSliderHandleComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzSliderHandleComponent, selectors: [["nz-slider-handle"]], viewQuery: function NzSliderHandleComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(NzTooltipDirective, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tooltip = _t.first);
    } }, hostBindings: function NzSliderHandleComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("mouseenter", function NzSliderHandleComponent_mouseenter_HostBindingHandler() { return ctx.enterHandle(); })("mouseleave", function NzSliderHandleComponent_mouseleave_HostBindingHandler() { return ctx.leaveHandle(); });
    } }, inputs: { nzTooltipVisible: "nzTooltipVisible", nzActive: "nzActive", nzVertical: "nzVertical", nzOffset: "nzOffset", nzValue: "nzValue", nzTooltipPlacement: "nzTooltipPlacement", nzTipFormatter: "nzTipFormatter" }, exportAs: ["nzSliderHandle"], features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 2, consts: [["nz-tooltip", "", "class", "ant-slider-handle", 3, "ngStyle", "nzTitle", "nzTrigger", "nzPlacement", 4, "ngIf"], ["class", "ant-slider-handle", 3, "ngStyle", 4, "ngIf"], ["nz-tooltip", "", 1, "ant-slider-handle", 3, "ngStyle", "nzTitle", "nzTrigger", "nzPlacement"], [1, "ant-slider-handle", 3, "ngStyle"]], template: function NzSliderHandleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzSliderHandleComponent_div_0_Template, 1, 4, "div", 0);
        ɵngcc0.ɵɵtemplate(1, NzSliderHandleComponent_div_1_Template, 1, 1, "div", 1);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzTipFormatter !== null && ctx.nzTooltipVisible !== "never");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzTipFormatter === null || ctx.nzTooltipVisible === "never");
    } }, directives: [ɵngcc1.NgIf, ɵngcc2.NzTooltipDirective, ɵngcc1.NgStyle], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzSliderHandleComponent, [{
        type: Component,
        args: [{
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
            }]
    }], function () { return [{ type: NzSliderComponent }, { type: ɵngcc0.ChangeDetectorRef }]; }, { nzTooltipVisible: [{
            type: Input
        }], nzActive: [{
            type: Input
        }], tooltip: [{
            type: ViewChild,
            args: [NzTooltipDirective, { static: false }]
        }], nzVertical: [{
            type: Input
        }], nzOffset: [{
            type: Input
        }], nzValue: [{
            type: Input
        }], nzTooltipPlacement: [{
            type: Input
        }], nzTipFormatter: [{
            type: Input
        }] }); })();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLWhhbmRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIm5nOi9uZy16b3Jyby1hbnRkL3NsaWRlci9uei1zbGlkZXItaGFuZGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsS0FBSyxFQUlMLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVwQyxPQUFPLEVBQUUsWUFBWSxFQUFvQixNQUFNLG9CQUFvQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQUUxRDtJQTRCRSxpQ0FBb0IsZUFBa0MsRUFBVSxHQUFzQjtRQUF0RixpQkFBMEY7UUFBdEUsb0JBQWUsR0FBZixlQUFlLENBQW1CO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFWN0UscUJBQWdCLEdBQXNCLFNBQVMsQ0FBQztRQUdoQyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRzFDLFVBQUssR0FBcUIsRUFBRSxDQUFDO1FBRXJCLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBOEJyQyxnQkFBVzs7O1FBQUc7WUFDWixJQUFJLENBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLEVBQUU7Z0JBQ3BDLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3pCLEtBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO2dCQUM3QixLQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQzFCO1FBQ0gsQ0FBQyxFQUFDO1FBRUYsZ0JBQVc7OztRQUFHO1lBQ1osSUFBSSxD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RUFBRSxrQkFBa0Isc0JBQzVCLFFBQVEsRUFBRSxnQkFBZ0IseERBU3pCLFNBQVMsU0FBQyxrQkFBa0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7Z0JBUmhELG1CQUFtQixFQUFFLFJBVXBCLEtBQUs7R0FWb0Isc0JBQzFCLEVBVUMsS0FBSzswQkFDTCxLQUFLO21DQUNMLEtBQUs7cUNBQ0wsS0FBSztpQ0FDTCxLQUFLOzJCQUNMLEtBQUs7O0lBQW1CO1FBQWYsWUFBWSxFQUFFOzs2REFBa0I7MENBZk0sc0JBQ2hELElBQUksRUFBRSwwQkFDSixjQUFjLEVBQUUsZUFBZSwwQkFDL0IsY0FBYyxFQUFFLGVBQWUsc0JBQ2hDO0lBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBV0Q7SUEyRUEsOEJBQUM7Q0FBQSxBQWpHRCxJQWlHQztTQXJGWSx1QkFBdUI7OztJQUNsQywwQ0FBOEU7O0lBRTlFLDZDQUE0Qjs7SUFDNUIsMkNBQTBCOztJQUMxQiwwQ0FBeUI7O0lBQ3pCLG1EQUF5RDs7SUFDekQscURBQW9DOztJQUNwQyxpREFBbUQ7O0lBQ25ELDJDQUEwQzs7SUFFMUMsK0NBQXFCOztJQUNyQix3Q0FBNkI7Ozs7O0lBRTdCLDBDQUFxQzs7SUE4QnJDLDhDQU1FOztJQUVGLDhDQUtFOzs7OztJQXpDVSxrREFBMEM7Ozs7O0lBQUUsc0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBOZ1N0eWxlSW50ZXJmYWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpUb29sdGlwRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90b29sdGlwJztcclxuXHJcbmltcG9ydCB7IFNsaWRlclNob3dUb29sdGlwIH0gZnJvbSAnLi9uei1zbGlkZXItZGVmaW5pdGlvbnMnO1xyXG5pbXBvcnQgeyBOelNsaWRlckNvbXBvbmVudCB9IGZyb20gJy4vbnotc2xpZGVyLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHNlbGVjdG9yOiAnbnotc2xpZGVyLWhhbmRsZScsXHJcbiAgZXhwb3J0QXM6ICduelNsaWRlckhhbmRsZScsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXNsaWRlci1oYW5kbGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGhvc3Q6IHtcclxuICAgICcobW91c2VlbnRlciknOiAnZW50ZXJIYW5kbGUoKScsXHJcbiAgICAnKG1vdXNlbGVhdmUpJzogJ2xlYXZlSGFuZGxlKCknXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpTbGlkZXJIYW5kbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgQFZpZXdDaGlsZChOelRvb2x0aXBEaXJlY3RpdmUsIHsgc3RhdGljOiBmYWxzZSB9KSB0b29sdGlwOiBOelRvb2x0aXBEaXJlY3RpdmU7XHJcblxyXG4gIEBJbnB1dCgpIG56VmVydGljYWw6IHN0cmluZztcclxuICBASW5wdXQoKSBuek9mZnNldDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIG56VmFsdWU6IG51bWJlcjtcclxuICBASW5wdXQoKSBuelRvb2x0aXBWaXNpYmxlOiBTbGlkZXJTaG93VG9vbHRpcCA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBuelRvb2x0aXBQbGFjZW1lbnQ6IHN0cmluZztcclxuICBASW5wdXQoKSBuelRpcEZvcm1hdHRlcjogKHZhbHVlOiBudW1iZXIpID0+IHN0cmluZztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpBY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgdG9vbHRpcFRpdGxlOiBzdHJpbmc7XHJcbiAgc3R5bGU6IE5nU3R5bGVJbnRlcmZhY2UgPSB7fTtcclxuXHJcbiAgcHJpdmF0ZSBob3ZlcnNfID0gbmV3IFN1YnNjcmlwdGlvbigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNsaWRlckNvbXBvbmVudDogTnpTbGlkZXJDb21wb25lbnQsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc3QgeyBuek9mZnNldCwgbnpWYWx1ZSwgbnpBY3RpdmUsIG56VG9vbHRpcFZpc2libGUgfSA9IGNoYW5nZXM7XHJcblxyXG4gICAgaWYgKG56T2Zmc2V0KSB7XHJcbiAgICAgIHRoaXMudXBkYXRlU3R5bGUoKTtcclxuICAgIH1cclxuICAgIGlmIChuelZhbHVlKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlVG9vbHRpcFRpdGxlKCk7XHJcbiAgICAgIHRoaXMudXBkYXRlVG9vbHRpcFBvc2l0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBpZiAobnpBY3RpdmUpIHtcclxuICAgICAgaWYgKG56QWN0aXZlLmN1cnJlbnRWYWx1ZSkge1xyXG4gICAgICAgIHRoaXMudG9nZ2xlVG9vbHRpcCh0cnVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnRvZ2dsZVRvb2x0aXAoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAobnpUb29sdGlwVmlzaWJsZSAmJiBuelRvb2x0aXBWaXNpYmxlLmN1cnJlbnRWYWx1ZSA9PT0gJ2Fsd2F5cycpIHtcclxuICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLnRvZ2dsZVRvb2x0aXAodHJ1ZSwgdHJ1ZSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmhvdmVyc18udW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIGVudGVySGFuZGxlID0gKCkgPT4ge1xyXG4gICAgaWYgKCF0aGlzLnNsaWRlckNvbXBvbmVudC5pc0RyYWdnaW5nKSB7XHJcbiAgICAgIHRoaXMudG9nZ2xlVG9vbHRpcCh0cnVlKTtcclxuICAgICAgdGhpcy51cGRhdGVUb29sdGlwUG9zaXRpb24oKTtcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGxlYXZlSGFuZGxlID0gKCkgPT4ge1xyXG4gICAgaWYgKCF0aGlzLnNsaWRlckNvbXBvbmVudC5pc0RyYWdnaW5nKSB7XHJcbiAgICAgIHRoaXMudG9nZ2xlVG9vbHRpcChmYWxzZSk7XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBwcml2YXRlIHRvZ2dsZVRvb2x0aXAoc2hvdzogYm9vbGVhbiwgZm9yY2U6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgaWYgKCFmb3JjZSAmJiAodGhpcy5uelRvb2x0aXBWaXNpYmxlICE9PSAnZGVmYXVsdCcgfHwgIXRoaXMudG9vbHRpcCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzaG93KSB7XHJcbiAgICAgIHRoaXMudG9vbHRpcC5zaG93KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnRvb2x0aXAuaGlkZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVUb29sdGlwVGl0bGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRvb2x0aXBUaXRsZSA9IHRoaXMubnpUaXBGb3JtYXR0ZXIgPyB0aGlzLm56VGlwRm9ybWF0dGVyKHRoaXMubnpWYWx1ZSkgOiBgJHt0aGlzLm56VmFsdWV9YDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlVG9vbHRpcFBvc2l0aW9uKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudG9vbHRpcCkge1xyXG4gICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMudG9vbHRpcC51cGRhdGVQb3NpdGlvbigpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlU3R5bGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLnN0eWxlW3RoaXMubnpWZXJ0aWNhbCA/ICdib3R0b20nIDogJ2xlZnQnXSA9IGAke3RoaXMubnpPZmZzZXR9JWA7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcbn1cclxuIl19
/**
 * @fileoverview added by tsickle
 * Generated from: nz-tag.component.ts
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
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewEncapsulation } from '@angular/core';
import { fadeMotion, warnDeprecation, InputBoolean, NzUpdateHostClassService } from 'ng-zorro-antd/core';
var NzTagComponent = /** @class */ (function () {
    function NzTagComponent(renderer, elementRef, nzUpdateHostClassService) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.presetColor = false;
        this.nzMode = 'default';
        this.nzChecked = false;
        this.nzNoAnimation = false;
        this.nzAfterClose = new EventEmitter();
        this.nzOnClose = new EventEmitter();
        this.nzCheckedChange = new EventEmitter();
    }
    /**
     * @private
     * @param {?=} color
     * @return {?}
     */
    NzTagComponent.prototype.isPresetColor = /**
     * @private
     * @param {?=} color
     * @return {?}
     */
    function (color) {
        if (!color) {
            return false;
        }
        return /^(pink|red|yellow|orange|cyan|green|blue|purple|geekblue|magenta|volcano|gold|lime)(-inverse)?$/.test(color);
    };
    /**
     * @private
     * @return {?}
     */
    NzTagComponent.prototype.updateClassMap = /**
     * @private
     * @return {?}
     */
    function () {
        var _a;
        this.presetColor = this.isPresetColor(this.nzColor);
        /** @type {?} */
        var prefix = 'ant-tag';
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, (_a = {},
            _a["" + prefix] = true,
            _a[prefix + "-has-color"] = this.nzColor && !this.presetColor,
            _a[prefix + "-" + this.nzColor] = this.presetColor,
            _a[prefix + "-checkable"] = this.nzMode === 'checkable',
            _a[prefix + "-checkable-checked"] = this.nzChecked,
            _a));
    };
    /**
     * @return {?}
     */
    NzTagComponent.prototype.updateCheckedStatus = /**
     * @return {?}
     */
    function () {
        if (this.nzMode === 'checkable') {
            this.nzChecked = !this.nzChecked;
            this.nzCheckedChange.emit(this.nzChecked);
            this.updateClassMap();
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzTagComponent.prototype.closeTag = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.nzOnClose.emit(e);
        if (!e.defaultPrevented) {
            this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzTagComponent.prototype.afterAnimation = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.toState === 'void') {
            this.nzAfterClose.emit();
            if (this.nzAfterClose.observers.length) {
                warnDeprecation("'(nzAfterClose)' Output is going to be removed in 9.0.0. Please use '(nzOnClose)' instead.");
            }
        }
    };
    /**
     * @return {?}
     */
    NzTagComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.updateClassMap();
    };
    /**
     * @return {?}
     */
    NzTagComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.updateClassMap();
    };
    NzTagComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-tag',
                    exportAs: 'nzTag',
                    preserveWhitespaces: false,
                    providers: [NzUpdateHostClassService],
                    animations: [fadeMotion],
                    template: "<ng-content></ng-content>\r\n<i nz-icon nzType=\"close\" *ngIf=\"nzMode==='closeable'\" tabindex=\"-1\" (click)=\"closeTag($event)\"></i>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[@fadeMotion]': '',
                        '[@.disabled]': 'nzNoAnimation',
                        '(@fadeMotion.done)': 'afterAnimation($event)',
                        '(click)': 'updateCheckedStatus()',
                        '[style.background-color]': 'presetColor? null : nzColor'
                    }
                }] }
    ];
    /** @nocollapse */
    NzTagComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: NzUpdateHostClassService }
    ]; };
    NzTagComponent.propDecorators = {
        nzMode: [{ type: Input }],
        nzColor: [{ type: Input }],
        nzChecked: [{ type: Input }],
        nzNoAnimation: [{ type: Input }],
        nzAfterClose: [{ type: Output }],
        nzOnClose: [{ type: Output }],
        nzCheckedChange: [{ type: Output }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTagComponent.prototype, "nzChecked", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTagComponent.prototype, "nzNoAnimation", void 0);
    return NzTagComponent;
}());
export { NzTagComponent };
if (false) {
    /** @type {?} */
    NzTagComponent.prototype.presetColor;
    /** @type {?} */
    NzTagComponent.prototype.nzMode;
    /** @type {?} */
    NzTagComponent.prototype.nzColor;
    /** @type {?} */
    NzTagComponent.prototype.nzChecked;
    /** @type {?} */
    NzTagComponent.prototype.nzNoAnimation;
    /** @type {?} */
    NzTagComponent.prototype.nzAfterClose;
    /** @type {?} */
    NzTagComponent.prototype.nzOnClose;
    /** @type {?} */
    NzTagComponent.prototype.nzCheckedChange;
    /**
     * @type {?}
     * @private
     */
    NzTagComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzTagComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzTagComponent.prototype.nzUpdateHostClassService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdGFnLyIsInNvdXJjZXMiOlsibnotdGFnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBU0EsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFekc7SUF3RUUsd0JBQ1UsUUFBbUIsRUFDbkIsVUFBc0IsRUFDdEIsd0JBQWtEO1FBRmxELGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0Qiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBekQ1RCxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNYLFdBQU0sR0FBMEMsU0FBUyxDQUFDO1FBRTFDLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDNUIsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQ3hDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBQzNDLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQW1EOUQsQ0FBQzs7Ozs7O0lBakRJLHNDQUFhOzs7OztJQUFyQixVQUFzQixLQUFjO1FBQ2xDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsT0FBTyxpR0FBaUcsQ0FBQyxJQUFJLENBQzNHLEtBQUssQ0FDTixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFTyx1Q0FBYzs7OztJQUF0Qjs7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFH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QXVCO0lBK0RqRCxxQkFBQztDQUFBLEFBckZELElBcUZDO1NBcEVZLGNBQWM7OztJQUN6QixxQ0FBb0I7O0lBQ3BCLGdDQUFtRTs7SUFDbkUsaUNBQXlCOztJQUN6QixtQ0FBMkM7O0lBQzNDLHVDQUErQzs7SUFDL0Msc0NBQTJEOztJQUMzRCxtQ0FBOEQ7O0lBQzlELHlDQUFpRTs7Ozs7SUFnRC9ELGtDQUEyQjs7Ozs7SUFDM0Isb0NBQThCOzs7OztJQUM5QixrREFBMEQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEFuaW1hdGlvbkV2ZW50IH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgZmFkZU1vdGlvbiwgd2FybkRlcHJlY2F0aW9uLCBJbnB1dEJvb2xlYW4sIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LXRhZycsXHJcbiAgZXhwb3J0QXM6ICduelRhZycsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgcHJvdmlkZXJzOiBbTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXSxcclxuICBhbmltYXRpb25zOiBbZmFkZU1vdGlvbl0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXRhZy5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBob3N0OiB7XHJcbiAgICAnW0BmYWRlTW90aW9uXSc6ICcnLFxyXG4gICAgJ1tALmRpc2FibGVkXSc6ICduek5vQW5pbWF0aW9uJyxcclxuICAgICcoQGZhZGVNb3Rpb24uZG9uZSknOiAnYWZ0ZXJBbmltYXRpb24oJGV2ZW50KScsXHJcbiAgICAnKGNsaWNrKSc6ICd1cGRhdGVDaGVja2VkU3RhdHVzKCknLFxyXG4gICAgJ1tzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXSc6ICdwcmVzZXRDb2xvcj8gbnVsbCA6IG56Q29sb3InXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpUYWdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgcHJlc2V0Q29sb3IgPSBmYWxzZTtcclxuICBASW5wdXQoKSBuek1vZGU6ICdkZWZhdWx0JyB8ICdjbG9zZWFibGUnIHwgJ2NoZWNrYWJsZScgPSAnZGVmYXVsdCc7XHJcbiAgQElucHV0KCkgbnpDb2xvcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekNoZWNrZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpOb0FuaW1hdGlvbiA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekFmdGVyQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25DbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDaGVja2VkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBwcml2YXRlIGlzUHJlc2V0Q29sb3IoY29sb3I/OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGlmICghY29sb3IpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIC9eKHBpbmt8cmVkfHllbGxvd3xvcmFuZ2V8Y3lhbnxncmVlbnxibHVlfHB1cnBsZXxnZWVrYmx1ZXxtYWdlbnRhfHZvbGNhbm98Z29sZHxsaW1lKSgtaW52ZXJzZSk/JC8udGVzdChcclxuICAgICAgY29sb3JcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZUNsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgdGhpcy5wcmVzZXRDb2xvciA9IHRoaXMuaXNQcmVzZXRDb2xvcih0aGlzLm56Q29sb3IpO1xyXG4gICAgY29uc3QgcHJlZml4ID0gJ2FudC10YWcnO1xyXG4gICAgdGhpcy5uelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB7XHJcbiAgICAgIFtgJHtwcmVmaXh9YF06IHRydWUsXHJcbiAgICAgIFtgJHtwcmVmaXh9LWhhcy1jb2xvcmBdOiB0aGlzLm56Q29sb3IgJiYgIXRoaXMucHJlc2V0Q29sb3IsXHJcbiAgICAgIFtgJHtwcmVmaXh9LSR7dGhpcy5uekNvbG9yfWBdOiB0aGlzLnByZXNldENvbG9yLFxyXG4gICAgICBbYCR7cHJlZml4fS1jaGVja2FibGVgXTogdGhpcy5uek1vZGUgPT09ICdjaGVja2FibGUnLFxyXG4gICAgICBbYCR7cHJlZml4fS1jaGVja2FibGUtY2hlY2tlZGBdOiB0aGlzLm56Q2hlY2tlZFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDaGVja2VkU3RhdHVzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpNb2RlID09PSAnY2hlY2thYmxlJykge1xyXG4gICAgICB0aGlzLm56Q2hlY2tlZCA9ICF0aGlzLm56Q2hlY2tlZDtcclxuICAgICAgdGhpcy5uekNoZWNrZWRDaGFuZ2UuZW1pdCh0aGlzLm56Q2hlY2tlZCk7XHJcbiAgICAgIHRoaXMudXBkYXRlQ2xhc3NNYXAoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsb3NlVGFnKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMubnpPbkNsb3NlLmVtaXQoZSk7XHJcbiAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKHRoaXMucmVuZGVyZXIucGFyZW50Tm9kZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCksIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFmdGVyQW5pbWF0aW9uKGU6IEFuaW1hdGlvbkV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoZS50b1N0YXRlID09PSAndm9pZCcpIHtcclxuICAgICAgdGhpcy5uekFmdGVyQ2xvc2UuZW1pdCgpO1xyXG4gICAgICBpZiAodGhpcy5uekFmdGVyQ2xvc2Uub2JzZXJ2ZXJzLmxlbmd0aCkge1xyXG4gICAgICAgIHdhcm5EZXByZWNhdGlvbihgJyhuekFmdGVyQ2xvc2UpJyBPdXRwdXQgaXMgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiA5LjAuMC4gUGxlYXNlIHVzZSAnKG56T25DbG9zZSknIGluc3RlYWQuYCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZVxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZUNsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIHRoaXMudXBkYXRlQ2xhc3NNYXAoKTtcclxuICB9XHJcbn1cclxuIl19
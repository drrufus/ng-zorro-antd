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
    /** @type {?} */
    NzTagComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzTagComponent.prototype.nzUpdateHostClassService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdGFnLyIsInNvdXJjZXMiOlsibnotdGFnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFTQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ04sU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV6RztJQXdFRSx3QkFDVSxRQUFtQixFQUNwQixVQUFzQixFQUNyQix3QkFBa0Q7UUFGbEQsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNwQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3JCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUF6RDVELGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ1gsV0FBTSxHQUEwQyxTQUFTLENBQUM7UUFFMUMsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUM1QixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDeEMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDM0Msb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0lBbUQ5RCxDQUFDOzs7Ozs7SUFqREksc0NBQWE7Ozs7O0lBQXJCLFVBQXNCLEtBQWM7UUFDbEMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLGlHQUFpRyxDQUFDLElBQUksQ0FDM0csS0FBSyxDQUNOLENBQUM7SUFDSixDQUFDOzs7OztJQUVPLHVDQUFjOzs7O0lBQXRCOztRQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcs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dUI7SUErRGpELHFCQUFDO0NBQUEsQUFyRkQsSUFxRkM7U0FwRVksY0FBYzs7O0lBQ3pCLHFDQUFvQjs7SUFDcEIsZ0NBQW1FOztJQUNuRSxpQ0FBeUI7O0lBQ3pCLG1DQUEyQzs7SUFDM0MsdUNBQStDOztJQUMvQyxzQ0FBMkQ7O0lBQzNELG1DQUE4RDs7SUFDOUQseUNBQWlFOzs7OztJQWdEL0Qsa0NBQTJCOztJQUMzQixvQ0FBNkI7Ozs7O0lBQzdCLGtEQUEwRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQW5pbWF0aW9uRXZlbnQgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBmYWRlTW90aW9uLCB3YXJuRGVwcmVjYXRpb24sIElucHV0Qm9vbGVhbiwgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotdGFnJyxcclxuICBleHBvcnRBczogJ256VGFnJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBwcm92aWRlcnM6IFtOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VdLFxyXG4gIGFuaW1hdGlvbnM6IFtmYWRlTW90aW9uXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotdGFnLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbQGZhZGVNb3Rpb25dJzogJycsXHJcbiAgICAnW0AuZGlzYWJsZWRdJzogJ256Tm9BbmltYXRpb24nLFxyXG4gICAgJyhAZmFkZU1vdGlvbi5kb25lKSc6ICdhZnRlckFuaW1hdGlvbigkZXZlbnQpJyxcclxuICAgICcoY2xpY2spJzogJ3VwZGF0ZUNoZWNrZWRTdGF0dXMoKScsXHJcbiAgICAnW3N0eWxlLmJhY2tncm91bmQtY29sb3JdJzogJ3ByZXNldENvbG9yPyBudWxsIDogbnpDb2xvcidcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelRhZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBwcmVzZXRDb2xvciA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56TW9kZTogJ2RlZmF1bHQnIHwgJ2Nsb3NlYWJsZScgfCAnY2hlY2thYmxlJyA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBuekNvbG9yOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q2hlY2tlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuek5vQW5pbWF0aW9uID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56QWZ0ZXJDbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNoZWNrZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIHByaXZhdGUgaXNQcmVzZXRDb2xvcihjb2xvcj86IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCFjb2xvcikge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gL14ocGlua3xyZWR8eWVsbG93fG9yYW5nZXxjeWFufGdyZWVufGJsdWV8cHVycGxlfGdlZWtibHVlfG1hZ2VudGF8dm9sY2Fub3xnb2xkfGxpbWUpKC1pbnZlcnNlKT8kLy50ZXN0KFxyXG4gICAgICBjb2xvclxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlQ2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICB0aGlzLnByZXNldENvbG9yID0gdGhpcy5pc1ByZXNldENvbG9yKHRoaXMubnpDb2xvcik7XHJcbiAgICBjb25zdCBwcmVmaXggPSAnYW50LXRhZyc7XHJcbiAgICB0aGlzLm56VXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHtcclxuICAgICAgW2Ake3ByZWZpeH1gXTogdHJ1ZSxcclxuICAgICAgW2Ake3ByZWZpeH0taGFzLWNvbG9yYF06IHRoaXMubnpDb2xvciAmJiAhdGhpcy5wcmVzZXRDb2xvcixcclxuICAgICAgW2Ake3ByZWZpeH0tJHt0aGlzLm56Q29sb3J9YF06IHRoaXMucHJlc2V0Q29sb3IsXHJcbiAgICAgIFtgJHtwcmVmaXh9LWNoZWNrYWJsZWBdOiB0aGlzLm56TW9kZSA9PT0gJ2NoZWNrYWJsZScsXHJcbiAgICAgIFtgJHtwcmVmaXh9LWNoZWNrYWJsZS1jaGVja2VkYF06IHRoaXMubnpDaGVja2VkXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUNoZWNrZWRTdGF0dXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uek1vZGUgPT09ICdjaGVja2FibGUnKSB7XHJcbiAgICAgIHRoaXMubnpDaGVja2VkID0gIXRoaXMubnpDaGVja2VkO1xyXG4gICAgICB0aGlzLm56Q2hlY2tlZENoYW5nZS5lbWl0KHRoaXMubnpDaGVja2VkKTtcclxuICAgICAgdGhpcy51cGRhdGVDbGFzc01hcCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xvc2VUYWcoZTogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5uek9uQ2xvc2UuZW1pdChlKTtcclxuICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy5yZW5kZXJlci5wYXJlbnROb2RlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSwgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWZ0ZXJBbmltYXRpb24oZTogQW5pbWF0aW9uRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChlLnRvU3RhdGUgPT09ICd2b2lkJykge1xyXG4gICAgICB0aGlzLm56QWZ0ZXJDbG9zZS5lbWl0KCk7XHJcbiAgICAgIGlmICh0aGlzLm56QWZ0ZXJDbG9zZS5vYnNlcnZlcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgd2FybkRlcHJlY2F0aW9uKGAnKG56QWZ0ZXJDbG9zZSknIE91dHB1dCBpcyBnb2luZyB0byBiZSByZW1vdmVkIGluIDkuMC4wLiBQbGVhc2UgdXNlICcobnpPbkNsb3NlKScgaW5zdGVhZC5gKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy51cGRhdGVDbGFzc01hcCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZUNsYXNzTWFwKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
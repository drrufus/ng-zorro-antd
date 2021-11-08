/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, ElementRef, Inject, InjectionToken, Input, NgZone, Optional } from '@angular/core';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import { NzWaveRenderer } from './nz-wave-renderer';
/**
 * @record
 */
export function NzWaveConfig() { }
if (false) {
    /** @type {?|undefined} */
    NzWaveConfig.prototype.disabled;
}
/** @type {?} */
export var NZ_WAVE_GLOBAL_DEFAULT_CONFIG = {
    disabled: false
};
/** @type {?} */
export var NZ_WAVE_GLOBAL_CONFIG = new InjectionToken('nz-wave-global-options', {
    providedIn: 'root',
    factory: NZ_WAVE_GLOBAL_CONFIG_FACTORY
});
/**
 * @return {?}
 */
export function NZ_WAVE_GLOBAL_CONFIG_FACTORY() {
    return NZ_WAVE_GLOBAL_DEFAULT_CONFIG;
}
var NzWaveDirective = /** @class */ (function () {
    function NzWaveDirective(ngZone, elementRef, config, animationType) {
        this.ngZone = ngZone;
        this.elementRef = elementRef;
        this.config = config;
        this.animationType = animationType;
        this.nzWaveExtraNode = false;
        this.waveDisabled = false;
        this.waveDisabled = this.isConfigDisabled();
    }
    Object.defineProperty(NzWaveDirective.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this.waveDisabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzWaveDirective.prototype, "rendererRef", {
        get: /**
         * @return {?}
         */
        function () {
            return this.waveRenderer;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzWaveDirective.prototype.isConfigDisabled = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var disabled = false;
        if (this.config && typeof this.config.disabled === 'boolean') {
            disabled = this.config.disabled;
        }
        if (this.animationType === 'NoopAnimations') {
            disabled = true;
        }
        return disabled;
    };
    /**
     * @return {?}
     */
    NzWaveDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.waveRenderer) {
            this.waveRenderer.destroy();
        }
    };
    /**
     * @return {?}
     */
    NzWaveDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.renderWaveIfEnabled();
    };
    /**
     * @return {?}
     */
    NzWaveDirective.prototype.renderWaveIfEnabled = /**
     * @return {?}
     */
    function () {
        if (!this.waveDisabled && this.elementRef.nativeElement) {
            this.waveRenderer = new NzWaveRenderer(this.elementRef.nativeElement, this.ngZone, this.nzWaveExtraNode);
        }
    };
    /**
     * @return {?}
     */
    NzWaveDirective.prototype.disable = /**
     * @return {?}
     */
    function () {
        this.waveDisabled = true;
        if (this.waveRenderer) {
            this.waveRenderer.removeTriggerEvent();
            this.waveRenderer.removeStyleAndExtraNode();
        }
    };
    /**
     * @return {?}
     */
    NzWaveDirective.prototype.enable = /**
     * @return {?}
     */
    function () {
        // config priority
        this.waveDisabled = this.isConfigDisabled() || false;
        if (this.waveRenderer) {
            this.waveRenderer.bindTriggerEvent();
        }
    };
    NzWaveDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-wave]',
                    exportAs: 'nzWave'
                },] }
    ];
    /** @nocollapse */
    NzWaveDirective.ctorParameters = function () { return [
        { type: NgZone },
        { type: ElementRef },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_WAVE_GLOBAL_CONFIG,] }] },
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [ANIMATION_MODULE_TYPE,] }] }
    ]; };
    NzWaveDirective.propDecorators = {
        nzWaveExtraNode: [{ type: Input }]
    };
    return NzWaveDirective;
}());
export { NzWaveDirective };
if (false) {
    /** @type {?} */
    NzWaveDirective.prototype.nzWaveExtraNode;
    /**
     * @type {?}
     * @private
     */
    NzWaveDirective.prototype.waveRenderer;
    /**
     * @type {?}
     * @private
     */
    NzWaveDirective.prototype.waveDisabled;
    /**
     * @type {?}
     * @private
     */
    NzWaveDirective.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    NzWaveDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzWaveDirective.prototype.config;
    /**
     * @type {?}
     * @private
     */
    NzWaveDirective.prototype.animationType;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotd2F2ZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJ3YXZlL256LXdhdmUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLGNBQWMsRUFDZCxLQUFLLEVBQ0wsTUFBTSxFQUdOLFFBQVEsRUFDVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7QUFFcEQsa0NBRUM7OztJQURDLGdDQUFtQjs7O0FBR3JCLE1BQU0sS0FBTyw2QkFBNkIsR0FBaUI7SUFDekQsUUFBUSxFQUFFLEtBQUs7Q0FDaEI7O0FBRUQsTUFBTSxLQUFPLHFCQUFxQixHQUFHLElBQUksY0FBYyxDQUFlLHdCQUF3QixFQUFFO0lBQzlGLFVBQVUsRUFBRSxNQUFNO0lBQ2xCLE9BQU8sRUFBRSw2QkFBNkI7Q0FDdkMsQ0FBQzs7OztBQUVGLE1BQU0sVUFBVSw2QkFBNkI7SUFDM0MsT0FBTyw2QkFBNkIsQ0FBQztBQUN2QyxDQUFDO0FBRUQ7SUFrQkUseUJBQ1UsTUFBYyxFQUNkLFVBQXNCLEVBQ3FCLE1BQW9CLEVBQ3BCLGFBQXFCO1FBSGhFLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3FCLFdBQU0sR0FBTixNQUFNLENBQWM7UUFDcEIsa0JBQWEsR0FBYixhQUFhLENBQVE7UUFqQmpFLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBR3pCLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBZ0JwQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzlDLENBQUM7SUFmRCxzQkFBSSxxQ0FBUTs7OztRQUFaO1lBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksd0NBQVc7Ozs7UUFBZjtZQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUMzQixDQUFDOzs7T0FBQTs7OztJQVdELDBDQUFnQjs7O0lBQWhCOztZQUNNLFFBQVEsR0FBRyxLQUFLO1FBQ3BCLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxLQUFLLFNBQVMsRUFBRTtZQUM1RCxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7U0FDakM7UUFDRCxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssZ0JBQWdCLEVBQUU7WUFDM0MsUUFBUSxHQUFHLElBQUksQ0FBQztTQUNqQjtRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFFRCxxQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUM3QjtJQUNILENBQUM7Ozs7SUFFRCxrQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsNkNBQW1COzs7SUFBbkI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRTtZQUN2RCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQzFHO0lBQ0gsQ0FBQzs7OztJQUVELGlDQUFPOzs7SUFBUDtRQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1NBQzdDO0lBQ0gsQ0FBQzs7OztJQUVELGdDQUFNOzs7SUFBTjtRQUNFLGtCQUFrQjtRQUNsQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLEtBQUssQ0FBQztRQUNyRCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQzs7Z0JBcEVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsUUFBUSxFQUFFLFFBQVE7aUJBQ25COzs7O2dCQTVCQyxNQUFNO2dCQUpOLFVBQVU7Z0RBa0RQLFFBQVEsWUFBSSxNQUFNLFNBQUMscUJBQXFCOzZDQUN4QyxRQUFRLFlBQUksTUFBTSxTQUFDLHFCQUFxQjs7O2tDQWpCMUMsS0FBSzs7SUFnRVIsc0JBQUM7Q0FBQSxBQXJFRCxJQXFFQztTQWpFWSxlQUFlOzs7SUFDMUIsMENBQWlDOzs7OztJQUVqQyx1Q0FBcUM7Ozs7O0lBQ3JDLHVDQUFzQzs7Ozs7SUFXcEMsaUNBQXNCOzs7OztJQUN0QixxQ0FBOEI7Ozs7O0lBQzlCLGlDQUF1RTs7Ozs7SUFDdkUsd0NBQXdFIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIEluamVjdCxcclxuICBJbmplY3Rpb25Ub2tlbixcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBTklNQVRJT05fTU9EVUxFX1RZUEUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBOeldhdmVSZW5kZXJlciB9IGZyb20gJy4vbnotd2F2ZS1yZW5kZXJlcic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE56V2F2ZUNvbmZpZyB7XHJcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTlpfV0FWRV9HTE9CQUxfREVGQVVMVF9DT05GSUc6IE56V2F2ZUNvbmZpZyA9IHtcclxuICBkaXNhYmxlZDogZmFsc2VcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBOWl9XQVZFX0dMT0JBTF9DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW48TnpXYXZlQ29uZmlnPignbnotd2F2ZS1nbG9iYWwtb3B0aW9ucycsIHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbiAgZmFjdG9yeTogTlpfV0FWRV9HTE9CQUxfQ09ORklHX0ZBQ1RPUllcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTlpfV0FWRV9HTE9CQUxfQ09ORklHX0ZBQ1RPUlkoKTogTnpXYXZlQ29uZmlnIHtcclxuICByZXR1cm4gTlpfV0FWRV9HTE9CQUxfREVGQVVMVF9DT05GSUc7XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW256LXdhdmVdJyxcclxuICBleHBvcnRBczogJ256V2F2ZSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE56V2F2ZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBueldhdmVFeHRyYU5vZGUgPSBmYWxzZTtcclxuXHJcbiAgcHJpdmF0ZSB3YXZlUmVuZGVyZXI6IE56V2F2ZVJlbmRlcmVyO1xyXG4gIHByaXZhdGUgd2F2ZURpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLndhdmVEaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIGdldCByZW5kZXJlclJlZigpOiBOeldhdmVSZW5kZXJlciB7XHJcbiAgICByZXR1cm4gdGhpcy53YXZlUmVuZGVyZXI7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE5aX1dBVkVfR0xPQkFMX0NPTkZJRykgcHJpdmF0ZSBjb25maWc6IE56V2F2ZUNvbmZpZyxcclxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoQU5JTUFUSU9OX01PRFVMRV9UWVBFKSBwcml2YXRlIGFuaW1hdGlvblR5cGU6IHN0cmluZ1xyXG4gICkge1xyXG4gICAgdGhpcy53YXZlRGlzYWJsZWQgPSB0aGlzLmlzQ29uZmlnRGlzYWJsZWQoKTtcclxuICB9XHJcblxyXG4gIGlzQ29uZmlnRGlzYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICBsZXQgZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIGlmICh0aGlzLmNvbmZpZyAmJiB0eXBlb2YgdGhpcy5jb25maWcuZGlzYWJsZWQgPT09ICdib29sZWFuJykge1xyXG4gICAgICBkaXNhYmxlZCA9IHRoaXMuY29uZmlnLmRpc2FibGVkO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuYW5pbWF0aW9uVHlwZSA9PT0gJ05vb3BBbmltYXRpb25zJykge1xyXG4gICAgICBkaXNhYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLndhdmVSZW5kZXJlcikge1xyXG4gICAgICB0aGlzLndhdmVSZW5kZXJlci5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVuZGVyV2F2ZUlmRW5hYmxlZCgpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyV2F2ZUlmRW5hYmxlZCgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy53YXZlRGlzYWJsZWQgJiYgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgdGhpcy53YXZlUmVuZGVyZXIgPSBuZXcgTnpXYXZlUmVuZGVyZXIodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMubmdab25lLCB0aGlzLm56V2F2ZUV4dHJhTm9kZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkaXNhYmxlKCk6IHZvaWQge1xyXG4gICAgdGhpcy53YXZlRGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgaWYgKHRoaXMud2F2ZVJlbmRlcmVyKSB7XHJcbiAgICAgIHRoaXMud2F2ZVJlbmRlcmVyLnJlbW92ZVRyaWdnZXJFdmVudCgpO1xyXG4gICAgICB0aGlzLndhdmVSZW5kZXJlci5yZW1vdmVTdHlsZUFuZEV4dHJhTm9kZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZW5hYmxlKCk6IHZvaWQge1xyXG4gICAgLy8gY29uZmlnIHByaW9yaXR5XHJcbiAgICB0aGlzLndhdmVEaXNhYmxlZCA9IHRoaXMuaXNDb25maWdEaXNhYmxlZCgpIHx8IGZhbHNlO1xyXG4gICAgaWYgKHRoaXMud2F2ZVJlbmRlcmVyKSB7XHJcbiAgICAgIHRoaXMud2F2ZVJlbmRlcmVyLmJpbmRUcmlnZ2VyRXZlbnQoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19
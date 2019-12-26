/**
 * @fileoverview added by tsickle
 * Generated from: wave/nz-wave.directive.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotd2F2ZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJ3YXZlL256LXdhdmUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sRUFDTixjQUFjLEVBQ2QsS0FBSyxFQUNMLE1BQU0sRUFHTixRQUFRLEVBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7O0FBRXBELGtDQUVDOzs7SUFEQyxnQ0FBbUI7OztBQUdyQixNQUFNLEtBQU8sNkJBQTZCLEdBQWlCO0lBQ3pELFFBQVEsRUFBRSxLQUFLO0NBQ2hCOztBQUVELE1BQU0sS0FBTyxxQkFBcUIsR0FBRyxJQUFJLGNBQWMsQ0FBZSx3QkFBd0IsRUFBRTtJQUM5RixVQUFVLEVBQUUsTUFBTTtJQUNsQixPQUFPLEVBQUUsNkJBQTZCO0NBQ3ZDLENBQUM7Ozs7QUFFRixNQUFNLFVBQVUsNkJBQTZCO0lBQzNDLE9BQU8sNkJBQTZCLENBQUM7QUFDdkMsQ0FBQztBQUVEO0lBa0JFLHlCQUNVLE1BQWMsRUFDZCxVQUFzQixFQUNxQixNQUFvQixFQUNwQixhQUFxQjtRQUhoRSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNxQixXQUFNLEdBQU4sTUFBTSxDQUFjO1FBQ3BCLGtCQUFhLEdBQWIsYUFBYSxDQUFRO1FBakJqRSxvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUd6QixpQkFBWSxHQUFZLEtBQUssQ0FBQztRQWdCcEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM5QyxDQUFDO0lBZkQsc0JBQUkscUNBQVE7Ozs7UUFBWjtZQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHdDQUFXOzs7O1FBQWY7WUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7Ozs7SUFXRCwwQ0FBZ0I7OztJQUFoQjs7WUFDTSxRQUFRLEdBQUcsS0FBSztRQUNwQixJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsS0FBSyxTQUFTLEVBQUU7WUFDNUQsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLGdCQUFnQixFQUFFO1lBQzNDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDakI7UUFDRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQscUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDN0I7SUFDSCxDQUFDOzs7O0lBRUQsa0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELDZDQUFtQjs7O0lBQW5CO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7WUFDdkQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUMxRztJQUNILENBQUM7Ozs7SUFFRCxpQ0FBTzs7O0lBQVA7UUFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztTQUM3QztJQUNILENBQUM7Ozs7SUFFRCxnQ0FBTTs7O0lBQU47UUFDRSxrQkFBa0I7UUFDbEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxLQUFLLENBQUM7UUFDckQsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUN0QztJQUNILENBQUM7O2dCQXBFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFFBQVEsRUFBRSxRQUFRO2lCQUNuQjs7OztnQkE1QkMsTUFBTTtnQkFKTixVQUFVO2dEQWtEUCxRQUFRLFlBQUksTUFBTSxTQUFDLHFCQUFxQjs2Q0FDeEMsUUFBUSxZQUFJLE1BQU0sU0FBQyxxQkFBcUI7OztrQ0FqQjFDLEtBQUs7O0lBZ0VSLHNCQUFDO0NBQUEsQUFyRUQsSUFxRUM7U0FqRVksZUFBZTs7O0lBQzFCLDBDQUFpQzs7Ozs7SUFFakMsdUNBQXFDOzs7OztJQUNyQyx1Q0FBc0M7Ozs7O0lBV3BDLGlDQUFzQjs7Ozs7SUFDdEIscUNBQThCOzs7OztJQUM5QixpQ0FBdUU7Ozs7O0lBQ3ZFLHdDQUF3RSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbmplY3QsXHJcbiAgSW5qZWN0aW9uVG9rZW4sXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQU5JTUFUSU9OX01PRFVMRV9UWVBFIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgTnpXYXZlUmVuZGVyZXIgfSBmcm9tICcuL256LXdhdmUtcmVuZGVyZXInO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBOeldhdmVDb25maWcge1xyXG4gIGRpc2FibGVkPzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE5aX1dBVkVfR0xPQkFMX0RFRkFVTFRfQ09ORklHOiBOeldhdmVDb25maWcgPSB7XHJcbiAgZGlzYWJsZWQ6IGZhbHNlXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTlpfV0FWRV9HTE9CQUxfQ09ORklHID0gbmV3IEluamVjdGlvblRva2VuPE56V2F2ZUNvbmZpZz4oJ256LXdhdmUtZ2xvYmFsLW9wdGlvbnMnLCB7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG4gIGZhY3Rvcnk6IE5aX1dBVkVfR0xPQkFMX0NPTkZJR19GQUNUT1JZXHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE5aX1dBVkVfR0xPQkFMX0NPTkZJR19GQUNUT1JZKCk6IE56V2F2ZUNvbmZpZyB7XHJcbiAgcmV0dXJuIE5aX1dBVkVfR0xPQkFMX0RFRkFVTFRfQ09ORklHO1xyXG59XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tuei13YXZlXScsXHJcbiAgZXhwb3J0QXM6ICdueldhdmUnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOeldhdmVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgbnpXYXZlRXh0cmFOb2RlID0gZmFsc2U7XHJcblxyXG4gIHByaXZhdGUgd2F2ZVJlbmRlcmVyOiBOeldhdmVSZW5kZXJlcjtcclxuICBwcml2YXRlIHdhdmVEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy53YXZlRGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICBnZXQgcmVuZGVyZXJSZWYoKTogTnpXYXZlUmVuZGVyZXIge1xyXG4gICAgcmV0dXJuIHRoaXMud2F2ZVJlbmRlcmVyO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChOWl9XQVZFX0dMT0JBTF9DT05GSUcpIHByaXZhdGUgY29uZmlnOiBOeldhdmVDb25maWcsXHJcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KEFOSU1BVElPTl9NT0RVTEVfVFlQRSkgcHJpdmF0ZSBhbmltYXRpb25UeXBlOiBzdHJpbmdcclxuICApIHtcclxuICAgIHRoaXMud2F2ZURpc2FibGVkID0gdGhpcy5pc0NvbmZpZ0Rpc2FibGVkKCk7XHJcbiAgfVxyXG5cclxuICBpc0NvbmZpZ0Rpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgbGV0IGRpc2FibGVkID0gZmFsc2U7XHJcbiAgICBpZiAodGhpcy5jb25maWcgJiYgdHlwZW9mIHRoaXMuY29uZmlnLmRpc2FibGVkID09PSAnYm9vbGVhbicpIHtcclxuICAgICAgZGlzYWJsZWQgPSB0aGlzLmNvbmZpZy5kaXNhYmxlZDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmFuaW1hdGlvblR5cGUgPT09ICdOb29wQW5pbWF0aW9ucycpIHtcclxuICAgICAgZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy53YXZlUmVuZGVyZXIpIHtcclxuICAgICAgdGhpcy53YXZlUmVuZGVyZXIuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlbmRlcldhdmVJZkVuYWJsZWQoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcldhdmVJZkVuYWJsZWQoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMud2F2ZURpc2FibGVkICYmIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMud2F2ZVJlbmRlcmVyID0gbmV3IE56V2F2ZVJlbmRlcmVyKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLm5nWm9uZSwgdGhpcy5ueldhdmVFeHRyYU5vZGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGlzYWJsZSgpOiB2b2lkIHtcclxuICAgIHRoaXMud2F2ZURpc2FibGVkID0gdHJ1ZTtcclxuICAgIGlmICh0aGlzLndhdmVSZW5kZXJlcikge1xyXG4gICAgICB0aGlzLndhdmVSZW5kZXJlci5yZW1vdmVUcmlnZ2VyRXZlbnQoKTtcclxuICAgICAgdGhpcy53YXZlUmVuZGVyZXIucmVtb3ZlU3R5bGVBbmRFeHRyYU5vZGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGVuYWJsZSgpOiB2b2lkIHtcclxuICAgIC8vIGNvbmZpZyBwcmlvcml0eVxyXG4gICAgdGhpcy53YXZlRGlzYWJsZWQgPSB0aGlzLmlzQ29uZmlnRGlzYWJsZWQoKSB8fCBmYWxzZTtcclxuICAgIGlmICh0aGlzLndhdmVSZW5kZXJlcikge1xyXG4gICAgICB0aGlzLndhdmVSZW5kZXJlci5iaW5kVHJpZ2dlckV2ZW50KCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==
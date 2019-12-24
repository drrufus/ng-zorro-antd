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
import * as i0 from "@angular/core";
export var NZ_WAVE_GLOBAL_DEFAULT_CONFIG = {
    disabled: false
};
export var NZ_WAVE_GLOBAL_CONFIG = new InjectionToken('nz-wave-global-options', {
    providedIn: 'root',
    factory: NZ_WAVE_GLOBAL_CONFIG_FACTORY
});
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
        get: function () {
            return this.waveDisabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzWaveDirective.prototype, "rendererRef", {
        get: function () {
            return this.waveRenderer;
        },
        enumerable: true,
        configurable: true
    });
    NzWaveDirective.prototype.isConfigDisabled = function () {
        var disabled = false;
        if (this.config && typeof this.config.disabled === 'boolean') {
            disabled = this.config.disabled;
        }
        if (this.animationType === 'NoopAnimations') {
            disabled = true;
        }
        return disabled;
    };
    NzWaveDirective.prototype.ngOnDestroy = function () {
        if (this.waveRenderer) {
            this.waveRenderer.destroy();
        }
    };
    NzWaveDirective.prototype.ngOnInit = function () {
        this.renderWaveIfEnabled();
    };
    NzWaveDirective.prototype.renderWaveIfEnabled = function () {
        if (!this.waveDisabled && this.elementRef.nativeElement) {
            this.waveRenderer = new NzWaveRenderer(this.elementRef.nativeElement, this.ngZone, this.nzWaveExtraNode);
        }
    };
    NzWaveDirective.prototype.disable = function () {
        this.waveDisabled = true;
        if (this.waveRenderer) {
            this.waveRenderer.removeTriggerEvent();
            this.waveRenderer.removeStyleAndExtraNode();
        }
    };
    NzWaveDirective.prototype.enable = function () {
        // config priority
        this.waveDisabled = this.isConfigDisabled() || false;
        if (this.waveRenderer) {
            this.waveRenderer.bindTriggerEvent();
        }
    };
    /** @nocollapse */ NzWaveDirective.ɵfac = function NzWaveDirective_Factory(t) { return new (t || NzWaveDirective)(i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(NZ_WAVE_GLOBAL_CONFIG, 8), i0.ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8)); };
    /** @nocollapse */ NzWaveDirective.ɵdir = i0.ɵɵdefineDirective({ type: NzWaveDirective, selectors: [["", "nz-wave", ""]], inputs: { nzWaveExtraNode: "nzWaveExtraNode" }, exportAs: ["nzWave"] });
    return NzWaveDirective;
}());
export { NzWaveDirective };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzWaveDirective, [{
        type: Directive,
        args: [{
                selector: '[nz-wave]',
                exportAs: 'nzWave'
            }]
    }], function () { return [{ type: i0.NgZone }, { type: i0.ElementRef }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [NZ_WAVE_GLOBAL_CONFIG]
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [ANIMATION_MODULE_TYPE]
            }] }]; }, { nzWaveExtraNode: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotd2F2ZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJ3YXZlL256LXdhdmUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBcUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFILE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFNcEQsTUFBTSxDQUFDLElBQU0sNkJBQTZCLEdBQWlCO0lBQ3pELFFBQVEsRUFBRSxLQUFLO0NBQ2hCLENBQUM7QUFFRixNQUFNLENBQUMsSUFBTSxxQkFBcUIsR0FBRyxJQUFJLGNBQWMsQ0FBZSx3QkFBd0IsRUFBRTtJQUM5RixVQUFVLEVBQUUsTUFBTTtJQUNsQixPQUFPLEVBQUUsNkJBQTZCO0NBQ3ZDLENBQUMsQ0FBQztBQUVILE1BQU0sVUFBVSw2QkFBNkI7SUFDM0MsT0FBTyw2QkFBNkIsQ0FBQztBQUN2QyxDQUFDO0FBRUQ7SUFrQkUseUJBQ1UsTUFBYyxFQUNkLFVBQXNCLEVBQ3FCLE1BQW9CLEVBQ3BCLGFBQXFCO1FBSGhFLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3FCLFdBQU0sR0FBTixNQUFNLENBQWM7UUFDcEIsa0JBQWEsR0FBYixhQUFhLENBQVE7UUFqQmpFLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBR3pCLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBZ0JwQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzlDLENBQUM7SUFmRCxzQkFBSSxxQ0FBUTthQUFaO1lBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksd0NBQVc7YUFBZjtZQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQVdELDBDQUFnQixHQUFoQjtRQUNFLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsS0FBSyxTQUFTLEVBQUU7WUFDNUQsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLGdCQUFnQixFQUFFO1lBQzNDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDakI7UUFDRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQscUNBQVcsR0FBWDtRQUNFLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQzdCO0lBQ0gsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsNkNBQW1CLEdBQW5CO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7WUFDdkQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUMxRztJQUNILENBQUM7SUFFRCxpQ0FBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUN2QyxJQUFJLENBQUMsWUFBWSxDQUFDLHVCQUF1QixFQUFFLENBQUM7U0FDN0M7SUFDSCxDQUFDO0lBRUQsZ0NBQU0sR0FBTjtRQUNFLGtCQUFrQjtRQUNsQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLEtBQUssQ0FBQztRQUNyRCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQztrRkFoRVUsZUFBZSw2RkFpQkoscUJBQXFCLDJCQUNyQixxQkFBcUI7d0RBbEJoQyxlQUFlOzBCQWpDNUI7Q0FrR0MsQUFyRUQsSUFxRUM7U0FqRVksZUFBZTtrREFBZixlQUFlO2NBSjNCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFLFFBQVE7YUFDbkI7O3NCQWtCSSxRQUFROztzQkFBSSxNQUFNO3VCQUFDLHFCQUFxQjs7c0JBQ3hDLFFBQVE7O3NCQUFJLE1BQU07dUJBQUMscUJBQXFCOztrQkFqQjFDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5qZWN0LCBJbmplY3Rpb25Ub2tlbiwgSW5wdXQsIE5nWm9uZSwgT25EZXN0cm95LCBPbkluaXQsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFOSU1BVElPTl9NT0RVTEVfVFlQRSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IE56V2F2ZVJlbmRlcmVyIH0gZnJvbSAnLi9uei13YXZlLXJlbmRlcmVyJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTnpXYXZlQ29uZmlnIHtcclxuICBkaXNhYmxlZD86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBOWl9XQVZFX0dMT0JBTF9ERUZBVUxUX0NPTkZJRzogTnpXYXZlQ29uZmlnID0ge1xyXG4gIGRpc2FibGVkOiBmYWxzZVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IE5aX1dBVkVfR0xPQkFMX0NPTkZJRyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxOeldhdmVDb25maWc+KCduei13YXZlLWdsb2JhbC1vcHRpb25zJywge1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxuICBmYWN0b3J5OiBOWl9XQVZFX0dMT0JBTF9DT05GSUdfRkFDVE9SWVxyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBOWl9XQVZFX0dMT0JBTF9DT05GSUdfRkFDVE9SWSgpOiBOeldhdmVDb25maWcge1xyXG4gIHJldHVybiBOWl9XQVZFX0dMT0JBTF9ERUZBVUxUX0NPTkZJRztcclxufVxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbnotd2F2ZV0nLFxyXG4gIGV4cG9ydEFzOiAnbnpXYXZlJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpXYXZlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIG56V2F2ZUV4dHJhTm9kZSA9IGZhbHNlO1xyXG5cclxuICBwcml2YXRlIHdhdmVSZW5kZXJlcjogTnpXYXZlUmVuZGVyZXI7XHJcbiAgcHJpdmF0ZSB3YXZlRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMud2F2ZURpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHJlbmRlcmVyUmVmKCk6IE56V2F2ZVJlbmRlcmVyIHtcclxuICAgIHJldHVybiB0aGlzLndhdmVSZW5kZXJlcjtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTlpfV0FWRV9HTE9CQUxfQ09ORklHKSBwcml2YXRlIGNvbmZpZzogTnpXYXZlQ29uZmlnLFxyXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChBTklNQVRJT05fTU9EVUxFX1RZUEUpIHByaXZhdGUgYW5pbWF0aW9uVHlwZTogc3RyaW5nXHJcbiAgKSB7XHJcbiAgICB0aGlzLndhdmVEaXNhYmxlZCA9IHRoaXMuaXNDb25maWdEaXNhYmxlZCgpO1xyXG4gIH1cclxuXHJcbiAgaXNDb25maWdEaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgIGxldCBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgaWYgKHRoaXMuY29uZmlnICYmIHR5cGVvZiB0aGlzLmNvbmZpZy5kaXNhYmxlZCA9PT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgIGRpc2FibGVkID0gdGhpcy5jb25maWcuZGlzYWJsZWQ7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5hbmltYXRpb25UeXBlID09PSAnTm9vcEFuaW1hdGlvbnMnKSB7XHJcbiAgICAgIGRpc2FibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBkaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMud2F2ZVJlbmRlcmVyKSB7XHJcbiAgICAgIHRoaXMud2F2ZVJlbmRlcmVyLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZW5kZXJXYXZlSWZFbmFibGVkKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJXYXZlSWZFbmFibGVkKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLndhdmVEaXNhYmxlZCAmJiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkge1xyXG4gICAgICB0aGlzLndhdmVSZW5kZXJlciA9IG5ldyBOeldhdmVSZW5kZXJlcih0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5uZ1pvbmUsIHRoaXMubnpXYXZlRXh0cmFOb2RlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRpc2FibGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLndhdmVEaXNhYmxlZCA9IHRydWU7XHJcbiAgICBpZiAodGhpcy53YXZlUmVuZGVyZXIpIHtcclxuICAgICAgdGhpcy53YXZlUmVuZGVyZXIucmVtb3ZlVHJpZ2dlckV2ZW50KCk7XHJcbiAgICAgIHRoaXMud2F2ZVJlbmRlcmVyLnJlbW92ZVN0eWxlQW5kRXh0cmFOb2RlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBlbmFibGUoKTogdm9pZCB7XHJcbiAgICAvLyBjb25maWcgcHJpb3JpdHlcclxuICAgIHRoaXMud2F2ZURpc2FibGVkID0gdGhpcy5pc0NvbmZpZ0Rpc2FibGVkKCkgfHwgZmFsc2U7XHJcbiAgICBpZiAodGhpcy53YXZlUmVuZGVyZXIpIHtcclxuICAgICAgdGhpcy53YXZlUmVuZGVyZXIuYmluZFRyaWdnZXJFdmVudCgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=
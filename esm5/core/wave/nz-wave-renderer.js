/**
 * @fileoverview added by tsickle
 * Generated from: wave/nz-wave-renderer.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Platform } from '@angular/cdk/platform';
var NzWaveRenderer = /** @class */ (function () {
    function NzWaveRenderer(triggerElement, ngZone, insertExtraNode) {
        var _this = this;
        this.triggerElement = triggerElement;
        this.ngZone = ngZone;
        this.insertExtraNode = insertExtraNode;
        this.waveTransitionDuration = 400;
        this.lastTime = 0;
        this.platform = new Platform();
        this.onClick = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (!_this.triggerElement ||
                !_this.triggerElement.getAttribute ||
                _this.triggerElement.getAttribute('disabled') ||
                ((/** @type {?} */ (event.target))).tagName === 'INPUT' ||
                _this.triggerElement.className.indexOf('disabled') >= 0) {
                return;
            }
            _this.fadeOutWave();
        });
        this.clickHandler = this.onClick.bind(this);
        this.bindTriggerEvent();
    }
    Object.defineProperty(NzWaveRenderer.prototype, "waveAttributeName", {
        get: /**
         * @return {?}
         */
        function () {
            return this.insertExtraNode ? 'ant-click-animating' : 'ant-click-animating-without-extra-node';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzWaveRenderer.prototype.bindTriggerEvent = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.platform.isBrowser) {
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                _this.removeTriggerEvent();
                if (_this.triggerElement) {
                    _this.triggerElement.addEventListener('click', _this.clickHandler, true);
                }
            }));
        }
    };
    /**
     * @return {?}
     */
    NzWaveRenderer.prototype.removeTriggerEvent = /**
     * @return {?}
     */
    function () {
        if (this.triggerElement) {
            this.triggerElement.removeEventListener('click', this.clickHandler, true);
        }
    };
    /**
     * @return {?}
     */
    NzWaveRenderer.prototype.removeStyleAndExtraNode = /**
     * @return {?}
     */
    function () {
        if (this.styleForPseudo && document.body.contains(this.styleForPseudo)) {
            document.body.removeChild(this.styleForPseudo);
            this.styleForPseudo = null;
        }
        if (this.insertExtraNode && this.triggerElement.contains(this.extraNode)) {
            this.triggerElement.removeChild((/** @type {?} */ (this.extraNode)));
        }
    };
    /**
     * @return {?}
     */
    NzWaveRenderer.prototype.destroy = /**
     * @return {?}
     */
    function () {
        this.removeTriggerEvent();
        this.removeStyleAndExtraNode();
    };
    /**
     * @private
     * @return {?}
     */
    NzWaveRenderer.prototype.fadeOutWave = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var node = this.triggerElement;
        /** @type {?} */
        var waveColor = this.getWaveColor(node);
        node.setAttribute(this.waveAttributeName, 'true');
        if (Date.now() < this.lastTime + this.waveTransitionDuration) {
            return;
        }
        if (this.isValidColor(waveColor)) {
            if (!this.styleForPseudo) {
                this.styleForPseudo = document.createElement('style');
            }
            this.styleForPseudo.innerHTML = "\n      [ant-click-animating-without-extra-node='true']::after, .ant-click-animating-node {\n        --antd-wave-shadow-color: " + waveColor + ";\n      }";
            document.body.appendChild(this.styleForPseudo);
        }
        if (this.insertExtraNode) {
            if (!this.extraNode) {
                this.extraNode = document.createElement('div');
            }
            this.extraNode.className = 'ant-click-animating-node';
            node.appendChild(this.extraNode);
        }
        this.lastTime = Date.now();
        this.runTimeoutOutsideZone((/**
         * @return {?}
         */
        function () {
            node.removeAttribute(_this.waveAttributeName);
            _this.removeStyleAndExtraNode();
        }), this.waveTransitionDuration);
    };
    /**
     * @private
     * @param {?} color
     * @return {?}
     */
    NzWaveRenderer.prototype.isValidColor = /**
     * @private
     * @param {?} color
     * @return {?}
     */
    function (color) {
        return (!!color &&
            color !== '#ffffff' &&
            color !== 'rgb(255, 255, 255)' &&
            this.isNotGrey(color) &&
            !/rgba\(\d*, \d*, \d*, 0\)/.test(color) &&
            color !== 'transparent');
    };
    /**
     * @private
     * @param {?} color
     * @return {?}
     */
    NzWaveRenderer.prototype.isNotGrey = /**
     * @private
     * @param {?} color
     * @return {?}
     */
    function (color) {
        /** @type {?} */
        var match = color.match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);
        if (match && match[1] && match[2] && match[3]) {
            return !(match[1] === match[2] && match[2] === match[3]);
        }
        return true;
    };
    /**
     * @private
     * @param {?} node
     * @return {?}
     */
    NzWaveRenderer.prototype.getWaveColor = /**
     * @private
     * @param {?} node
     * @return {?}
     */
    function (node) {
        /** @type {?} */
        var nodeStyle = getComputedStyle(node);
        return (nodeStyle.getPropertyValue('border-top-color') || // Firefox Compatible
            nodeStyle.getPropertyValue('border-color') ||
            nodeStyle.getPropertyValue('background-color'));
    };
    /**
     * @private
     * @param {?} fn
     * @param {?} delay
     * @return {?}
     */
    NzWaveRenderer.prototype.runTimeoutOutsideZone = /**
     * @private
     * @param {?} fn
     * @param {?} delay
     * @return {?}
     */
    function (fn, delay) {
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () { return setTimeout(fn, delay); }));
    };
    return NzWaveRenderer;
}());
export { NzWaveRenderer };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzWaveRenderer.prototype.waveTransitionDuration;
    /**
     * @type {?}
     * @private
     */
    NzWaveRenderer.prototype.styleForPseudo;
    /**
     * @type {?}
     * @private
     */
    NzWaveRenderer.prototype.extraNode;
    /**
     * @type {?}
     * @private
     */
    NzWaveRenderer.prototype.lastTime;
    /**
     * @type {?}
     * @private
     */
    NzWaveRenderer.prototype.platform;
    /** @type {?} */
    NzWaveRenderer.prototype.clickHandler;
    /** @type {?} */
    NzWaveRenderer.prototype.onClick;
    /**
     * @type {?}
     * @private
     */
    NzWaveRenderer.prototype.triggerElement;
    /**
     * @type {?}
     * @private
     */
    NzWaveRenderer.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    NzWaveRenderer.prototype.insertExtraNode;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotd2F2ZS1yZW5kZXJlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbIndhdmUvbnotd2F2ZS1yZW5kZXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFHakQ7SUFXRSx3QkFBb0IsY0FBMkIsRUFBVSxNQUFjLEVBQVUsZUFBd0I7UUFBekcsaUJBR0M7UUFIbUIsbUJBQWMsR0FBZCxjQUFjLENBQWE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQVM7UUFWakcsMkJBQXNCLEdBQUcsR0FBRyxDQUFDO1FBRzdCLGFBQVEsR0FBRyxDQUFDLENBQUM7UUFDYixhQUFRLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztRQVdsQyxZQUFPOzs7O1FBQUcsVUFBQyxLQUFpQjtZQUMxQixJQUNFLENBQUMsS0FBSSxDQUFDLGNBQWM7Z0JBQ3BCLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZO2dCQUNqQyxLQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUM7Z0JBQzVDLENBQUMsbUJBQUEsS0FBSyxDQUFDLE1BQU0sRUFBZSxDQUFDLENBQUMsT0FBTyxLQUFLLE9BQU87Z0JBQ2pELEtBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQ3REO2dCQUNBLE9BQU87YUFDUjtZQUNELEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyQixDQUFDLEVBQUM7UUFmQSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFQRCxzQkFBSSw2Q0FBaUI7Ozs7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QUFPLENBQ0wsU0FBUyxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLElBQUkscUJBQXFCO1lBQ3ZFLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUM7WUFDMUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLENBQy9DLENBQUM7SUFDSixDQUFDOzs7Ozs7O0lBRU8sOENBQXFCOzs7Ozs7SUFBN0IsVUFBOEIsRUFBYyxFQUFFLEtBQWE7UUFDekQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUI7OztRQUFDLGNBQU0sT0FBQSxVQUFVLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFyQixDQUFxQixFQUFDLENBQUM7SUFDN0QsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQWhJRCxJQWdJQzs7Ozs7OztJQS9IQyxnREFBcUM7Ozs7O0lBQ3JDLHdDQUFnRDs7Ozs7SUFDaEQsbUNBQXlDOzs7OztJQUN6QyxrQ0FBcUI7Ozs7O0lBQ3JCLGtDQUFrQzs7SUFDbEMsc0NBQXlCOztJQVV6QixpQ0FXRTs7Ozs7SUFoQlUsd0NBQW1DOzs7OztJQUFFLGdDQUFzQjs7Ozs7SUFBRSx5Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHsgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTnpXYXZlUmVuZGVyZXIge1xyXG4gIHByaXZhdGUgd2F2ZVRyYW5zaXRpb25EdXJhdGlvbiA9IDQwMDtcclxuICBwcml2YXRlIHN0eWxlRm9yUHNldWRvOiBIVE1MU3R5bGVFbGVtZW50IHwgbnVsbDtcclxuICBwcml2YXRlIGV4dHJhTm9kZTogSFRNTERpdkVsZW1lbnQgfCBudWxsO1xyXG4gIHByaXZhdGUgbGFzdFRpbWUgPSAwO1xyXG4gIHByaXZhdGUgcGxhdGZvcm0gPSBuZXcgUGxhdGZvcm0oKTtcclxuICBjbGlja0hhbmRsZXI6ICgpID0+IHZvaWQ7XHJcbiAgZ2V0IHdhdmVBdHRyaWJ1dGVOYW1lKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5pbnNlcnRFeHRyYU5vZGUgPyAnYW50LWNsaWNrLWFuaW1hdGluZycgOiAnYW50LWNsaWNrLWFuaW1hdGluZy13aXRob3V0LWV4dHJhLW5vZGUnO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmlnZ2VyRWxlbWVudDogSFRNTEVsZW1lbnQsIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsIHByaXZhdGUgaW5zZXJ0RXh0cmFOb2RlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmNsaWNrSGFuZGxlciA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5iaW5kVHJpZ2dlckV2ZW50KCk7XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICBpZiAoXHJcbiAgICAgICF0aGlzLnRyaWdnZXJFbGVtZW50IHx8XHJcbiAgICAgICF0aGlzLnRyaWdnZXJFbGVtZW50LmdldEF0dHJpYnV0ZSB8fFxyXG4gICAgICB0aGlzLnRyaWdnZXJFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGlzYWJsZWQnKSB8fFxyXG4gICAgICAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS50YWdOYW1lID09PSAnSU5QVVQnIHx8XHJcbiAgICAgIHRoaXMudHJpZ2dlckVsZW1lbnQuY2xhc3NOYW1lLmluZGV4T2YoJ2Rpc2FibGVkJykgPj0gMFxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuZmFkZU91dFdhdmUoKTtcclxuICB9O1xyXG5cclxuICBiaW5kVHJpZ2dlckV2ZW50KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XHJcbiAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgICB0aGlzLnJlbW92ZVRyaWdnZXJFdmVudCgpO1xyXG4gICAgICAgIGlmICh0aGlzLnRyaWdnZXJFbGVtZW50KSB7XHJcbiAgICAgICAgICB0aGlzLnRyaWdnZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGlja0hhbmRsZXIsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW1vdmVUcmlnZ2VyRXZlbnQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy50cmlnZ2VyRWxlbWVudCkge1xyXG4gICAgICB0aGlzLnRyaWdnZXJFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGlja0hhbmRsZXIsIHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlU3R5bGVBbmRFeHRyYU5vZGUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zdHlsZUZvclBzZXVkbyAmJiBkb2N1bWVudC5ib2R5LmNvbnRhaW5zKHRoaXMuc3R5bGVGb3JQc2V1ZG8pKSB7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5zdHlsZUZvclBzZXVkbyk7XHJcbiAgICAgIHRoaXMuc3R5bGVGb3JQc2V1ZG8gPSBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaW5zZXJ0RXh0cmFOb2RlICYmIHRoaXMudHJpZ2dlckVsZW1lbnQuY29udGFpbnModGhpcy5leHRyYU5vZGUpKSB7XHJcbiAgICAgIHRoaXMudHJpZ2dlckVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5leHRyYU5vZGUgYXMgTm9kZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZW1vdmVUcmlnZ2VyRXZlbnQoKTtcclxuICAgIHRoaXMucmVtb3ZlU3R5bGVBbmRFeHRyYU5vZGUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZmFkZU91dFdhdmUoKTogdm9pZCB7XHJcbiAgICBjb25zdCBub2RlID0gdGhpcy50cmlnZ2VyRWxlbWVudDtcclxuICAgIGNvbnN0IHdhdmVDb2xvciA9IHRoaXMuZ2V0V2F2ZUNvbG9yKG5vZGUpO1xyXG4gICAgbm9kZS5zZXRBdHRyaWJ1dGUodGhpcy53YXZlQXR0cmlidXRlTmFtZSwgJ3RydWUnKTtcclxuICAgIGlmIChEYXRlLm5vdygpIDwgdGhpcy5sYXN0VGltZSArIHRoaXMud2F2ZVRyYW5zaXRpb25EdXJhdGlvbikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaXNWYWxpZENvbG9yKHdhdmVDb2xvcikpIHtcclxuICAgICAgaWYgKCF0aGlzLnN0eWxlRm9yUHNldWRvKSB7XHJcbiAgICAgICAgdGhpcy5zdHlsZUZvclBzZXVkbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuc3R5bGVGb3JQc2V1ZG8uaW5uZXJIVE1MID0gYFxyXG4gICAgICBbYW50LWNsaWNrLWFuaW1hdGluZy13aXRob3V0LWV4dHJhLW5vZGU9J3RydWUnXTo6YWZ0ZXIsIC5hbnQtY2xpY2stYW5pbWF0aW5nLW5vZGUge1xyXG4gICAgICAgIC0tYW50ZC13YXZlLXNoYWRvdy1jb2xvcjogJHt3YXZlQ29sb3J9O1xyXG4gICAgICB9YDtcclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnN0eWxlRm9yUHNldWRvKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5pbnNlcnRFeHRyYU5vZGUpIHtcclxuICAgICAgaWYgKCF0aGlzLmV4dHJhTm9kZSkge1xyXG4gICAgICAgIHRoaXMuZXh0cmFOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5leHRyYU5vZGUuY2xhc3NOYW1lID0gJ2FudC1jbGljay1hbmltYXRpbmctbm9kZSc7XHJcbiAgICAgIG5vZGUuYXBwZW5kQ2hpbGQodGhpcy5leHRyYU5vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubGFzdFRpbWUgPSBEYXRlLm5vdygpO1xyXG5cclxuICAgIHRoaXMucnVuVGltZW91dE91dHNpZGVab25lKCgpID0+IHtcclxuICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUodGhpcy53YXZlQXR0cmlidXRlTmFtZSk7XHJcbiAgICAgIHRoaXMucmVtb3ZlU3R5bGVBbmRFeHRyYU5vZGUoKTtcclxuICAgIH0sIHRoaXMud2F2ZVRyYW5zaXRpb25EdXJhdGlvbik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzVmFsaWRDb2xvcihjb2xvcjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAhIWNvbG9yICYmXHJcbiAgICAgIGNvbG9yICE9PSAnI2ZmZmZmZicgJiZcclxuICAgICAgY29sb3IgIT09ICdyZ2IoMjU1LCAyNTUsIDI1NSknICYmXHJcbiAgICAgIHRoaXMuaXNOb3RHcmV5KGNvbG9yKSAmJlxyXG4gICAgICAhL3JnYmFcXChcXGQqLCBcXGQqLCBcXGQqLCAwXFwpLy50ZXN0KGNvbG9yKSAmJlxyXG4gICAgICBjb2xvciAhPT0gJ3RyYW5zcGFyZW50J1xyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNOb3RHcmV5KGNvbG9yOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IG1hdGNoID0gY29sb3IubWF0Y2goL3JnYmE/XFwoKFxcZCopLCAoXFxkKiksIChcXGQqKSgsIFtcXC5cXGRdKik/XFwpLyk7XHJcbiAgICBpZiAobWF0Y2ggJiYgbWF0Y2hbMV0gJiYgbWF0Y2hbMl0gJiYgbWF0Y2hbM10pIHtcclxuICAgICAgcmV0dXJuICEobWF0Y2hbMV0gPT09IG1hdGNoWzJdICYmIG1hdGNoWzJdID09PSBtYXRjaFszXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0V2F2ZUNvbG9yKG5vZGU6IEhUTUxFbGVtZW50KTogc3RyaW5nIHtcclxuICAgIGNvbnN0IG5vZGVTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBub2RlU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnYm9yZGVyLXRvcC1jb2xvcicpIHx8IC8vIEZpcmVmb3ggQ29tcGF0aWJsZVxyXG4gICAgICBub2RlU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnYm9yZGVyLWNvbG9yJykgfHxcclxuICAgICAgbm9kZVN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2JhY2tncm91bmQtY29sb3InKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcnVuVGltZW91dE91dHNpZGVab25lKGZuOiAoKSA9PiB2b2lkLCBkZWxheTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBzZXRUaW1lb3V0KGZuLCBkZWxheSkpO1xyXG4gIH1cclxufVxyXG4iXX0=
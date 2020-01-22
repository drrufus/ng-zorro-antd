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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotd2F2ZS1yZW5kZXJlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbIndhdmUvbnotd2F2ZS1yZW5kZXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUdqRDtJQVdFLHdCQUFvQixjQUEyQixFQUFVLE1BQWMsRUFBVSxlQUF3QjtRQUF6RyxpQkFHQztRQUhtQixtQkFBYyxHQUFkLGNBQWMsQ0FBYTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBUztRQVZqRywyQkFBc0IsR0FBRyxHQUFHLENBQUM7UUFHN0IsYUFBUSxHQUFHLENBQUMsQ0FBQztRQUNiLGFBQVEsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBV2xDLFlBQU87Ozs7UUFBRyxVQUFDLEtBQWlCO1lBQzFCLElBQ0UsQ0FBQyxLQUFJLENBQUMsY0FBYztnQkFDcEIsQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLFlBQVk7Z0JBQ2pDLEtBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQztnQkFDNUMsQ0FBQyxtQkFBQSxLQUFLLENBQUMsTUFBTSxFQUFlLENBQUMsQ0FBQyxPQUFPLEtBQUssT0FBTztnQkFDakQsS0FBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFDdEQ7Z0JBQ0EsT0FBTzthQUNSO1lBQ0QsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JCLENBQUMsRUFBQztRQWZBLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQVBELHNCQUFJLDZDQUFpQjs7OztR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QU8sQ0FDTCxTQUFTLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsSUFBSSxxQkFBcUI7WUFDdkUsU0FBUyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQztZQUMxQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsQ0FDL0MsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7SUFFTyw4Q0FBcUI7Ozs7OztJQUE3QixVQUE4QixFQUFjLEVBQUUsS0FBYTtRQUN6RCxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQjs7O1FBQUMsY0FBTSxPQUFBLFVBQVUsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQXJCLENBQXFCLEVBQUMsQ0FBQztJQUM3RCxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBaElELElBZ0lDOzs7Ozs7O0lBL0hDLGdEQUFxQzs7Ozs7SUFDckMsd0NBQWdEOzs7OztJQUNoRCxtQ0FBeUM7Ozs7O0lBQ3pDLGtDQUFxQjs7Ozs7SUFDckIsa0NBQWtDOztJQUNsQyxzQ0FBeUI7O0lBVXpCLGlDQVdFOzs7OztJQWhCVSx3Q0FBbUM7Ozs7O0lBQUUsZ0NBQXNCOzs7OztJQUFFLHlDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBOeldhdmVSZW5kZXJlciB7XHJcbiAgcHJpdmF0ZSB3YXZlVHJhbnNpdGlvbkR1cmF0aW9uID0gNDAwO1xyXG4gIHByaXZhdGUgc3R5bGVGb3JQc2V1ZG86IEhUTUxTdHlsZUVsZW1lbnQgfCBudWxsO1xyXG4gIHByaXZhdGUgZXh0cmFOb2RlOiBIVE1MRGl2RWxlbWVudCB8IG51bGw7XHJcbiAgcHJpdmF0ZSBsYXN0VGltZSA9IDA7XHJcbiAgcHJpdmF0ZSBwbGF0Zm9ybSA9IG5ldyBQbGF0Zm9ybSgpO1xyXG4gIGNsaWNrSGFuZGxlcjogKCkgPT4gdm9pZDtcclxuICBnZXQgd2F2ZUF0dHJpYnV0ZU5hbWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmluc2VydEV4dHJhTm9kZSA/ICdhbnQtY2xpY2stYW5pbWF0aW5nJyA6ICdhbnQtY2xpY2stYW5pbWF0aW5nLXdpdGhvdXQtZXh0cmEtbm9kZSc7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyaWdnZXJFbGVtZW50OiBIVE1MRWxlbWVudCwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSwgcHJpdmF0ZSBpbnNlcnRFeHRyYU5vZGU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuY2xpY2tIYW5kbGVyID0gdGhpcy5vbkNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmJpbmRUcmlnZ2VyRXZlbnQoKTtcclxuICB9XHJcblxyXG4gIG9uQ2xpY2sgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgIGlmIChcclxuICAgICAgIXRoaXMudHJpZ2dlckVsZW1lbnQgfHxcclxuICAgICAgIXRoaXMudHJpZ2dlckVsZW1lbnQuZ2V0QXR0cmlidXRlIHx8XHJcbiAgICAgIHRoaXMudHJpZ2dlckVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkaXNhYmxlZCcpIHx8XHJcbiAgICAgIChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLnRhZ05hbWUgPT09ICdJTlBVVCcgfHxcclxuICAgICAgdGhpcy50cmlnZ2VyRWxlbWVudC5jbGFzc05hbWUuaW5kZXhPZignZGlzYWJsZWQnKSA+PSAwXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5mYWRlT3V0V2F2ZSgpO1xyXG4gIH07XHJcblxyXG4gIGJpbmRUcmlnZ2VyRXZlbnQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlVHJpZ2dlckV2ZW50KCk7XHJcbiAgICAgICAgaWYgKHRoaXMudHJpZ2dlckVsZW1lbnQpIHtcclxuICAgICAgICAgIHRoaXMudHJpZ2dlckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsaWNrSGFuZGxlciwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZVRyaWdnZXJFdmVudCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnRyaWdnZXJFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMudHJpZ2dlckVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsaWNrSGFuZGxlciwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW1vdmVTdHlsZUFuZEV4dHJhTm9kZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnN0eWxlRm9yUHNldWRvICYmIGRvY3VtZW50LmJvZHkuY29udGFpbnModGhpcy5zdHlsZUZvclBzZXVkbykpIHtcclxuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLnN0eWxlRm9yUHNldWRvKTtcclxuICAgICAgdGhpcy5zdHlsZUZvclBzZXVkbyA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5pbnNlcnRFeHRyYU5vZGUgJiYgdGhpcy50cmlnZ2VyRWxlbWVudC5jb250YWlucyh0aGlzLmV4dHJhTm9kZSkpIHtcclxuICAgICAgdGhpcy50cmlnZ2VyRWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmV4dHJhTm9kZSBhcyBOb2RlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlbW92ZVRyaWdnZXJFdmVudCgpO1xyXG4gICAgdGhpcy5yZW1vdmVTdHlsZUFuZEV4dHJhTm9kZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmYWRlT3V0V2F2ZSgpOiB2b2lkIHtcclxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLnRyaWdnZXJFbGVtZW50O1xyXG4gICAgY29uc3Qgd2F2ZUNvbG9yID0gdGhpcy5nZXRXYXZlQ29sb3Iobm9kZSk7XHJcbiAgICBub2RlLnNldEF0dHJpYnV0ZSh0aGlzLndhdmVBdHRyaWJ1dGVOYW1lLCAndHJ1ZScpO1xyXG4gICAgaWYgKERhdGUubm93KCkgPCB0aGlzLmxhc3RUaW1lICsgdGhpcy53YXZlVHJhbnNpdGlvbkR1cmF0aW9uKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5pc1ZhbGlkQ29sb3Iod2F2ZUNvbG9yKSkge1xyXG4gICAgICBpZiAoIXRoaXMuc3R5bGVGb3JQc2V1ZG8pIHtcclxuICAgICAgICB0aGlzLnN0eWxlRm9yUHNldWRvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5zdHlsZUZvclBzZXVkby5pbm5lckhUTUwgPSBgXHJcbiAgICAgIFthbnQtY2xpY2stYW5pbWF0aW5nLXdpdGhvdXQtZXh0cmEtbm9kZT0ndHJ1ZSddOjphZnRlciwgLmFudC1jbGljay1hbmltYXRpbmctbm9kZSB7XHJcbiAgICAgICAgLS1hbnRkLXdhdmUtc2hhZG93LWNvbG9yOiAke3dhdmVDb2xvcn07XHJcbiAgICAgIH1gO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuc3R5bGVGb3JQc2V1ZG8pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmluc2VydEV4dHJhTm9kZSkge1xyXG4gICAgICBpZiAoIXRoaXMuZXh0cmFOb2RlKSB7XHJcbiAgICAgICAgdGhpcy5leHRyYU5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmV4dHJhTm9kZS5jbGFzc05hbWUgPSAnYW50LWNsaWNrLWFuaW1hdGluZy1ub2RlJztcclxuICAgICAgbm9kZS5hcHBlbmRDaGlsZCh0aGlzLmV4dHJhTm9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5sYXN0VGltZSA9IERhdGUubm93KCk7XHJcblxyXG4gICAgdGhpcy5ydW5UaW1lb3V0T3V0c2lkZVpvbmUoKCkgPT4ge1xyXG4gICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLndhdmVBdHRyaWJ1dGVOYW1lKTtcclxuICAgICAgdGhpcy5yZW1vdmVTdHlsZUFuZEV4dHJhTm9kZSgpO1xyXG4gICAgfSwgdGhpcy53YXZlVHJhbnNpdGlvbkR1cmF0aW9uKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNWYWxpZENvbG9yKGNvbG9yOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICEhY29sb3IgJiZcclxuICAgICAgY29sb3IgIT09ICcjZmZmZmZmJyAmJlxyXG4gICAgICBjb2xvciAhPT0gJ3JnYigyNTUsIDI1NSwgMjU1KScgJiZcclxuICAgICAgdGhpcy5pc05vdEdyZXkoY29sb3IpICYmXHJcbiAgICAgICEvcmdiYVxcKFxcZCosIFxcZCosIFxcZCosIDBcXCkvLnRlc3QoY29sb3IpICYmXHJcbiAgICAgIGNvbG9yICE9PSAndHJhbnNwYXJlbnQnXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc05vdEdyZXkoY29sb3I6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgbWF0Y2ggPSBjb2xvci5tYXRjaCgvcmdiYT9cXCgoXFxkKiksIChcXGQqKSwgKFxcZCopKCwgW1xcLlxcZF0qKT9cXCkvKTtcclxuICAgIGlmIChtYXRjaCAmJiBtYXRjaFsxXSAmJiBtYXRjaFsyXSAmJiBtYXRjaFszXSkge1xyXG4gICAgICByZXR1cm4gIShtYXRjaFsxXSA9PT0gbWF0Y2hbMl0gJiYgbWF0Y2hbMl0gPT09IG1hdGNoWzNdKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRXYXZlQ29sb3Iobm9kZTogSFRNTEVsZW1lbnQpOiBzdHJpbmcge1xyXG4gICAgY29uc3Qgbm9kZVN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIG5vZGVTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdib3JkZXItdG9wLWNvbG9yJykgfHwgLy8gRmlyZWZveCBDb21wYXRpYmxlXHJcbiAgICAgIG5vZGVTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdib3JkZXItY29sb3InKSB8fFxyXG4gICAgICBub2RlU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnYmFja2dyb3VuZC1jb2xvcicpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBydW5UaW1lb3V0T3V0c2lkZVpvbmUoZm46ICgpID0+IHZvaWQsIGRlbGF5OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHNldFRpbWVvdXQoZm4sIGRlbGF5KSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
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
export class NzWaveRenderer {
    /**
     * @param {?} triggerElement
     * @param {?} ngZone
     * @param {?} insertExtraNode
     */
    constructor(triggerElement, ngZone, insertExtraNode) {
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
        (event) => {
            if (!this.triggerElement ||
                !this.triggerElement.getAttribute ||
                this.triggerElement.getAttribute('disabled') ||
                ((/** @type {?} */ (event.target))).tagName === 'INPUT' ||
                this.triggerElement.className.indexOf('disabled') >= 0) {
                return;
            }
            this.fadeOutWave();
        });
        this.clickHandler = this.onClick.bind(this);
        this.bindTriggerEvent();
    }
    /**
     * @return {?}
     */
    get waveAttributeName() {
        return this.insertExtraNode ? 'ant-click-animating' : 'ant-click-animating-without-extra-node';
    }
    /**
     * @return {?}
     */
    bindTriggerEvent() {
        if (this.platform.isBrowser) {
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                this.removeTriggerEvent();
                if (this.triggerElement) {
                    this.triggerElement.addEventListener('click', this.clickHandler, true);
                }
            }));
        }
    }
    /**
     * @return {?}
     */
    removeTriggerEvent() {
        if (this.triggerElement) {
            this.triggerElement.removeEventListener('click', this.clickHandler, true);
        }
    }
    /**
     * @return {?}
     */
    removeStyleAndExtraNode() {
        if (this.styleForPseudo && document.body.contains(this.styleForPseudo)) {
            document.body.removeChild(this.styleForPseudo);
            this.styleForPseudo = null;
        }
        if (this.insertExtraNode && this.triggerElement.contains(this.extraNode)) {
            this.triggerElement.removeChild((/** @type {?} */ (this.extraNode)));
        }
    }
    /**
     * @return {?}
     */
    destroy() {
        this.removeTriggerEvent();
        this.removeStyleAndExtraNode();
    }
    /**
     * @private
     * @return {?}
     */
    fadeOutWave() {
        /** @type {?} */
        const node = this.triggerElement;
        /** @type {?} */
        const waveColor = this.getWaveColor(node);
        node.setAttribute(this.waveAttributeName, 'true');
        if (Date.now() < this.lastTime + this.waveTransitionDuration) {
            return;
        }
        if (this.isValidColor(waveColor)) {
            if (!this.styleForPseudo) {
                this.styleForPseudo = document.createElement('style');
            }
            this.styleForPseudo.innerHTML = `
      [ant-click-animating-without-extra-node='true']::after, .ant-click-animating-node {
        --antd-wave-shadow-color: ${waveColor};
      }`;
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
        () => {
            node.removeAttribute(this.waveAttributeName);
            this.removeStyleAndExtraNode();
        }), this.waveTransitionDuration);
    }
    /**
     * @private
     * @param {?} color
     * @return {?}
     */
    isValidColor(color) {
        return (!!color &&
            color !== '#ffffff' &&
            color !== 'rgb(255, 255, 255)' &&
            this.isNotGrey(color) &&
            !/rgba\(\d*, \d*, \d*, 0\)/.test(color) &&
            color !== 'transparent');
    }
    /**
     * @private
     * @param {?} color
     * @return {?}
     */
    isNotGrey(color) {
        /** @type {?} */
        const match = color.match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);
        if (match && match[1] && match[2] && match[3]) {
            return !(match[1] === match[2] && match[2] === match[3]);
        }
        return true;
    }
    /**
     * @private
     * @param {?} node
     * @return {?}
     */
    getWaveColor(node) {
        /** @type {?} */
        const nodeStyle = getComputedStyle(node);
        return (nodeStyle.getPropertyValue('border-top-color') || // Firefox Compatible
            nodeStyle.getPropertyValue('border-color') ||
            nodeStyle.getPropertyValue('background-color'));
    }
    /**
     * @private
     * @param {?} fn
     * @param {?} delay
     * @return {?}
     */
    runTimeoutOutsideZone(fn, delay) {
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => setTimeout(fn, delay)));
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotd2F2ZS1yZW5kZXJlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbIndhdmUvbnotd2F2ZS1yZW5kZXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFHakQsTUFBTSxPQUFPLGNBQWM7Ozs7OztJQVd6QixZQUFvQixjQUEyQixFQUFVLE1BQWMsRUFBVSxlQUF3QjtRQUFyRixtQkFBYyxHQUFkLGNBQWMsQ0FBYTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBUztRQVZqRywyQkFBc0IsR0FBRyxHQUFHLENBQUM7UUFHN0IsYUFBUSxHQUFHLENBQUMsQ0FBQztRQUNiLGFBQVEsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBV2xDLFlBQU87Ozs7UUFBRyxDQUFDLEtBQWlCLEVBQUUsRUFBRTtZQUM5QixJQUNFLENBQUMsSUFBSSxDQUFDLGNBQWM7Z0JBQ3BCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZO2dCQUNqQyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUM7Z0JBQzVDLENBQUMsbUJBQUEsS0FBSyxDQUFDLE1BQU0sRUFBZSxDQUFDLENBQUMsT0FBTyxLQUFLLE9BQU87Z0JBQ2pELElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQ3REO2dCQUNBLE9BQU87YUFDUjtZQUNELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyQixDQUFDLEVBQUM7UUFmQSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7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QWdCLENBQUMsY0FBYyxDQUFDO1lBQzFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUMvQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7OztJQUVPLHFCQUFxQixDQUFDLEVBQWMsRUFBRSxLQUFhO1FBQ3pELElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFDLENBQUM7SUFDN0QsQ0FBQztDQUNGOzs7Ozs7SUEvSEMsZ0RBQXFDOzs7OztJQUNyQyx3Q0FBZ0Q7Ozs7O0lBQ2hELG1DQUF5Qzs7Ozs7SUFDekMsa0NBQXFCOzs7OztJQUNyQixrQ0FBa0M7O0lBQ2xDLHNDQUF5Qjs7SUFVekIsaUNBV0U7Ozs7O0lBaEJVLHdDQUFtQzs7Ozs7SUFBRSxnQ0FBc0I7Ozs7O0lBQUUseUNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7IE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE56V2F2ZVJlbmRlcmVyIHtcclxuICBwcml2YXRlIHdhdmVUcmFuc2l0aW9uRHVyYXRpb24gPSA0MDA7XHJcbiAgcHJpdmF0ZSBzdHlsZUZvclBzZXVkbzogSFRNTFN0eWxlRWxlbWVudCB8IG51bGw7XHJcbiAgcHJpdmF0ZSBleHRyYU5vZGU6IEhUTUxEaXZFbGVtZW50IHwgbnVsbDtcclxuICBwcml2YXRlIGxhc3RUaW1lID0gMDtcclxuICBwcml2YXRlIHBsYXRmb3JtID0gbmV3IFBsYXRmb3JtKCk7XHJcbiAgY2xpY2tIYW5kbGVyOiAoKSA9PiB2b2lkO1xyXG4gIGdldCB3YXZlQXR0cmlidXRlTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5zZXJ0RXh0cmFOb2RlID8gJ2FudC1jbGljay1hbmltYXRpbmcnIDogJ2FudC1jbGljay1hbmltYXRpbmctd2l0aG91dC1leHRyYS1ub2RlJztcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJpZ2dlckVsZW1lbnQ6IEhUTUxFbGVtZW50LCBwcml2YXRlIG5nWm9uZTogTmdab25lLCBwcml2YXRlIGluc2VydEV4dHJhTm9kZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5jbGlja0hhbmRsZXIgPSB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKTtcclxuICAgIHRoaXMuYmluZFRyaWdnZXJFdmVudCgpO1xyXG4gIH1cclxuXHJcbiAgb25DbGljayA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICAhdGhpcy50cmlnZ2VyRWxlbWVudCB8fFxyXG4gICAgICAhdGhpcy50cmlnZ2VyRWxlbWVudC5nZXRBdHRyaWJ1dGUgfHxcclxuICAgICAgdGhpcy50cmlnZ2VyRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgfHxcclxuICAgICAgKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCkudGFnTmFtZSA9PT0gJ0lOUFVUJyB8fFxyXG4gICAgICB0aGlzLnRyaWdnZXJFbGVtZW50LmNsYXNzTmFtZS5pbmRleE9mKCdkaXNhYmxlZCcpID49IDBcclxuICAgICkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmZhZGVPdXRXYXZlKCk7XHJcbiAgfTtcclxuXHJcbiAgYmluZFRyaWdnZXJFdmVudCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xyXG4gICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVUcmlnZ2VyRXZlbnQoKTtcclxuICAgICAgICBpZiAodGhpcy50cmlnZ2VyRWxlbWVudCkge1xyXG4gICAgICAgICAgdGhpcy50cmlnZ2VyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xpY2tIYW5kbGVyLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlVHJpZ2dlckV2ZW50KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudHJpZ2dlckVsZW1lbnQpIHtcclxuICAgICAgdGhpcy50cmlnZ2VyRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xpY2tIYW5kbGVyLCB0cnVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZVN0eWxlQW5kRXh0cmFOb2RlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuc3R5bGVGb3JQc2V1ZG8gJiYgZG9jdW1lbnQuYm9keS5jb250YWlucyh0aGlzLnN0eWxlRm9yUHNldWRvKSkge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuc3R5bGVGb3JQc2V1ZG8pO1xyXG4gICAgICB0aGlzLnN0eWxlRm9yUHNldWRvID0gbnVsbDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmluc2VydEV4dHJhTm9kZSAmJiB0aGlzLnRyaWdnZXJFbGVtZW50LmNvbnRhaW5zKHRoaXMuZXh0cmFOb2RlKSkge1xyXG4gICAgICB0aGlzLnRyaWdnZXJFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuZXh0cmFOb2RlIGFzIE5vZGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVtb3ZlVHJpZ2dlckV2ZW50KCk7XHJcbiAgICB0aGlzLnJlbW92ZVN0eWxlQW5kRXh0cmFOb2RlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZhZGVPdXRXYXZlKCk6IHZvaWQge1xyXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMudHJpZ2dlckVsZW1lbnQ7XHJcbiAgICBjb25zdCB3YXZlQ29sb3IgPSB0aGlzLmdldFdhdmVDb2xvcihub2RlKTtcclxuICAgIG5vZGUuc2V0QXR0cmlidXRlKHRoaXMud2F2ZUF0dHJpYnV0ZU5hbWUsICd0cnVlJyk7XHJcbiAgICBpZiAoRGF0ZS5ub3coKSA8IHRoaXMubGFzdFRpbWUgKyB0aGlzLndhdmVUcmFuc2l0aW9uRHVyYXRpb24pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmlzVmFsaWRDb2xvcih3YXZlQ29sb3IpKSB7XHJcbiAgICAgIGlmICghdGhpcy5zdHlsZUZvclBzZXVkbykge1xyXG4gICAgICAgIHRoaXMuc3R5bGVGb3JQc2V1ZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnN0eWxlRm9yUHNldWRvLmlubmVySFRNTCA9IGBcclxuICAgICAgW2FudC1jbGljay1hbmltYXRpbmctd2l0aG91dC1leHRyYS1ub2RlPSd0cnVlJ106OmFmdGVyLCAuYW50LWNsaWNrLWFuaW1hdGluZy1ub2RlIHtcclxuICAgICAgICAtLWFudGQtd2F2ZS1zaGFkb3ctY29sb3I6ICR7d2F2ZUNvbG9yfTtcclxuICAgICAgfWA7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5zdHlsZUZvclBzZXVkbyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaW5zZXJ0RXh0cmFOb2RlKSB7XHJcbiAgICAgIGlmICghdGhpcy5leHRyYU5vZGUpIHtcclxuICAgICAgICB0aGlzLmV4dHJhTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZXh0cmFOb2RlLmNsYXNzTmFtZSA9ICdhbnQtY2xpY2stYW5pbWF0aW5nLW5vZGUnO1xyXG4gICAgICBub2RlLmFwcGVuZENoaWxkKHRoaXMuZXh0cmFOb2RlKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmxhc3RUaW1lID0gRGF0ZS5ub3coKTtcclxuXHJcbiAgICB0aGlzLnJ1blRpbWVvdXRPdXRzaWRlWm9uZSgoKSA9PiB7XHJcbiAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKHRoaXMud2F2ZUF0dHJpYnV0ZU5hbWUpO1xyXG4gICAgICB0aGlzLnJlbW92ZVN0eWxlQW5kRXh0cmFOb2RlKCk7XHJcbiAgICB9LCB0aGlzLndhdmVUcmFuc2l0aW9uRHVyYXRpb24pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1ZhbGlkQ29sb3IoY29sb3I6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgISFjb2xvciAmJlxyXG4gICAgICBjb2xvciAhPT0gJyNmZmZmZmYnICYmXHJcbiAgICAgIGNvbG9yICE9PSAncmdiKDI1NSwgMjU1LCAyNTUpJyAmJlxyXG4gICAgICB0aGlzLmlzTm90R3JleShjb2xvcikgJiZcclxuICAgICAgIS9yZ2JhXFwoXFxkKiwgXFxkKiwgXFxkKiwgMFxcKS8udGVzdChjb2xvcikgJiZcclxuICAgICAgY29sb3IgIT09ICd0cmFuc3BhcmVudCdcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzTm90R3JleShjb2xvcjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBtYXRjaCA9IGNvbG9yLm1hdGNoKC9yZ2JhP1xcKChcXGQqKSwgKFxcZCopLCAoXFxkKikoLCBbXFwuXFxkXSopP1xcKS8pO1xyXG4gICAgaWYgKG1hdGNoICYmIG1hdGNoWzFdICYmIG1hdGNoWzJdICYmIG1hdGNoWzNdKSB7XHJcbiAgICAgIHJldHVybiAhKG1hdGNoWzFdID09PSBtYXRjaFsyXSAmJiBtYXRjaFsyXSA9PT0gbWF0Y2hbM10pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFdhdmVDb2xvcihub2RlOiBIVE1MRWxlbWVudCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBub2RlU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgbm9kZVN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2JvcmRlci10b3AtY29sb3InKSB8fCAvLyBGaXJlZm94IENvbXBhdGlibGVcclxuICAgICAgbm9kZVN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2JvcmRlci1jb2xvcicpIHx8XHJcbiAgICAgIG5vZGVTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdiYWNrZ3JvdW5kLWNvbG9yJylcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJ1blRpbWVvdXRPdXRzaWRlWm9uZShmbjogKCkgPT4gdm9pZCwgZGVsYXk6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gc2V0VGltZW91dChmbiwgZGVsYXkpKTtcclxuICB9XHJcbn1cclxuIl19
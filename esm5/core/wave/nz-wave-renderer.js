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
        this.onClick = function (event) {
            if (!_this.triggerElement ||
                !_this.triggerElement.getAttribute ||
                _this.triggerElement.getAttribute('disabled') ||
                event.target.tagName === 'INPUT' ||
                _this.triggerElement.className.indexOf('disabled') >= 0) {
                return;
            }
            _this.fadeOutWave();
        };
        this.clickHandler = this.onClick.bind(this);
        this.bindTriggerEvent();
    }
    Object.defineProperty(NzWaveRenderer.prototype, "waveAttributeName", {
        get: function () {
            return this.insertExtraNode ? 'ant-click-animating' : 'ant-click-animating-without-extra-node';
        },
        enumerable: true,
        configurable: true
    });
    NzWaveRenderer.prototype.bindTriggerEvent = function () {
        var _this = this;
        if (this.platform.isBrowser) {
            this.ngZone.runOutsideAngular(function () {
                _this.removeTriggerEvent();
                if (_this.triggerElement) {
                    _this.triggerElement.addEventListener('click', _this.clickHandler, true);
                }
            });
        }
    };
    NzWaveRenderer.prototype.removeTriggerEvent = function () {
        if (this.triggerElement) {
            this.triggerElement.removeEventListener('click', this.clickHandler, true);
        }
    };
    NzWaveRenderer.prototype.removeStyleAndExtraNode = function () {
        if (this.styleForPseudo && document.body.contains(this.styleForPseudo)) {
            document.body.removeChild(this.styleForPseudo);
            this.styleForPseudo = null;
        }
        if (this.insertExtraNode && this.triggerElement.contains(this.extraNode)) {
            this.triggerElement.removeChild(this.extraNode);
        }
    };
    NzWaveRenderer.prototype.destroy = function () {
        this.removeTriggerEvent();
        this.removeStyleAndExtraNode();
    };
    NzWaveRenderer.prototype.fadeOutWave = function () {
        var _this = this;
        var node = this.triggerElement;
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
        this.runTimeoutOutsideZone(function () {
            node.removeAttribute(_this.waveAttributeName);
            _this.removeStyleAndExtraNode();
        }, this.waveTransitionDuration);
    };
    NzWaveRenderer.prototype.isValidColor = function (color) {
        return (!!color &&
            color !== '#ffffff' &&
            color !== 'rgb(255, 255, 255)' &&
            this.isNotGrey(color) &&
            !/rgba\(\d*, \d*, \d*, 0\)/.test(color) &&
            color !== 'transparent');
    };
    NzWaveRenderer.prototype.isNotGrey = function (color) {
        var match = color.match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);
        if (match && match[1] && match[2] && match[3]) {
            return !(match[1] === match[2] && match[2] === match[3]);
        }
        return true;
    };
    NzWaveRenderer.prototype.getWaveColor = function (node) {
        var nodeStyle = getComputedStyle(node);
        return (nodeStyle.getPropertyValue('border-top-color') || // Firefox Compatible
            nodeStyle.getPropertyValue('border-color') ||
            nodeStyle.getPropertyValue('background-color'));
    };
    NzWaveRenderer.prototype.runTimeoutOutsideZone = function (fn, delay) {
        this.ngZone.runOutsideAngular(function () { return setTimeout(fn, delay); });
    };
    return NzWaveRenderer;
}());
export { NzWaveRenderer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotd2F2ZS1yZW5kZXJlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbIndhdmUvbnotd2F2ZS1yZW5kZXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFHakQ7SUFXRSx3QkFBb0IsY0FBMkIsRUFBVSxNQUFjLEVBQVUsZUFBd0I7UUFBekcsaUJBR0M7UUFIbUIsbUJBQWMsR0FBZCxjQUFjLENBQWE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQVM7UUFWakcsMkJBQXNCLEdBQUcsR0FBRyxDQUFDO1FBRzdCLGFBQVEsR0FBRyxDQUFDLENBQUM7UUFDYixhQUFRLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztRQVdsQyxZQUFPLEdBQUcsVUFBQyxLQUFpQjtZQUMxQixJQUNFLENBQUMsS0FBSSxDQUFDLGNBQWM7Z0JBQ3BCLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZO2dCQUNqQyxLQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUM7Z0JBQzNDLEtBQUssQ0FBQyxNQUFzQixDQUFDLE9BQU8sS0FBSyxPQUFPO2dCQUNqRCxLQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUN0RDtnQkFDQSxPQUFPO2FBQ1I7WUFDRCxLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDckIsQ0FBQyxDQUFDO1FBZkEsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBUEQsc0JBQUksNkNBQWlCO2FBQXJCO1lBQ0UsT0FBTyxJQUFJLENB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WUFDdkUsU0FBUyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQztZQUMxQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsQ0FDL0MsQ0FBQztJQUNKLENBQUM7SUFFTyw4Q0FBcUIsR0FBN0IsVUFBOEIsRUFBYyxFQUFFLEtBQWE7UUFDekQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxjQUFNLE9BQUEsVUFBVSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBckIsQ0FBcUIsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFoSUQsSUFnSUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHsgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTnpXYXZlUmVuZGVyZXIge1xyXG4gIHByaXZhdGUgd2F2ZVRyYW5zaXRpb25EdXJhdGlvbiA9IDQwMDtcclxuICBwcml2YXRlIHN0eWxlRm9yUHNldWRvOiBIVE1MU3R5bGVFbGVtZW50IHwgbnVsbDtcclxuICBwcml2YXRlIGV4dHJhTm9kZTogSFRNTERpdkVsZW1lbnQgfCBudWxsO1xyXG4gIHByaXZhdGUgbGFzdFRpbWUgPSAwO1xyXG4gIHByaXZhdGUgcGxhdGZvcm0gPSBuZXcgUGxhdGZvcm0oKTtcclxuICBjbGlja0hhbmRsZXI6ICgpID0+IHZvaWQ7XHJcbiAgZ2V0IHdhdmVBdHRyaWJ1dGVOYW1lKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5pbnNlcnRFeHRyYU5vZGUgPyAnYW50LWNsaWNrLWFuaW1hdGluZycgOiAnYW50LWNsaWNrLWFuaW1hdGluZy13aXRob3V0LWV4dHJhLW5vZGUnO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmlnZ2VyRWxlbWVudDogSFRNTEVsZW1lbnQsIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsIHByaXZhdGUgaW5zZXJ0RXh0cmFOb2RlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmNsaWNrSGFuZGxlciA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5iaW5kVHJpZ2dlckV2ZW50KCk7XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICBpZiAoXHJcbiAgICAgICF0aGlzLnRyaWdnZXJFbGVtZW50IHx8XHJcbiAgICAgICF0aGlzLnRyaWdnZXJFbGVtZW50LmdldEF0dHJpYnV0ZSB8fFxyXG4gICAgICB0aGlzLnRyaWdnZXJFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGlzYWJsZWQnKSB8fFxyXG4gICAgICAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS50YWdOYW1lID09PSAnSU5QVVQnIHx8XHJcbiAgICAgIHRoaXMudHJpZ2dlckVsZW1lbnQuY2xhc3NOYW1lLmluZGV4T2YoJ2Rpc2FibGVkJykgPj0gMFxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuZmFkZU91dFdhdmUoKTtcclxuICB9O1xyXG5cclxuICBiaW5kVHJpZ2dlckV2ZW50KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XHJcbiAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgICB0aGlzLnJlbW92ZVRyaWdnZXJFdmVudCgpO1xyXG4gICAgICAgIGlmICh0aGlzLnRyaWdnZXJFbGVtZW50KSB7XHJcbiAgICAgICAgICB0aGlzLnRyaWdnZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGlja0hhbmRsZXIsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW1vdmVUcmlnZ2VyRXZlbnQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy50cmlnZ2VyRWxlbWVudCkge1xyXG4gICAgICB0aGlzLnRyaWdnZXJFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGlja0hhbmRsZXIsIHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlU3R5bGVBbmRFeHRyYU5vZGUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zdHlsZUZvclBzZXVkbyAmJiBkb2N1bWVudC5ib2R5LmNvbnRhaW5zKHRoaXMuc3R5bGVGb3JQc2V1ZG8pKSB7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5zdHlsZUZvclBzZXVkbyk7XHJcbiAgICAgIHRoaXMuc3R5bGVGb3JQc2V1ZG8gPSBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaW5zZXJ0RXh0cmFOb2RlICYmIHRoaXMudHJpZ2dlckVsZW1lbnQuY29udGFpbnModGhpcy5leHRyYU5vZGUpKSB7XHJcbiAgICAgIHRoaXMudHJpZ2dlckVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5leHRyYU5vZGUgYXMgTm9kZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZW1vdmVUcmlnZ2VyRXZlbnQoKTtcclxuICAgIHRoaXMucmVtb3ZlU3R5bGVBbmRFeHRyYU5vZGUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZmFkZU91dFdhdmUoKTogdm9pZCB7XHJcbiAgICBjb25zdCBub2RlID0gdGhpcy50cmlnZ2VyRWxlbWVudDtcclxuICAgIGNvbnN0IHdhdmVDb2xvciA9IHRoaXMuZ2V0V2F2ZUNvbG9yKG5vZGUpO1xyXG4gICAgbm9kZS5zZXRBdHRyaWJ1dGUodGhpcy53YXZlQXR0cmlidXRlTmFtZSwgJ3RydWUnKTtcclxuICAgIGlmIChEYXRlLm5vdygpIDwgdGhpcy5sYXN0VGltZSArIHRoaXMud2F2ZVRyYW5zaXRpb25EdXJhdGlvbikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaXNWYWxpZENvbG9yKHdhdmVDb2xvcikpIHtcclxuICAgICAgaWYgKCF0aGlzLnN0eWxlRm9yUHNldWRvKSB7XHJcbiAgICAgICAgdGhpcy5zdHlsZUZvclBzZXVkbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuc3R5bGVGb3JQc2V1ZG8uaW5uZXJIVE1MID0gYFxyXG4gICAgICBbYW50LWNsaWNrLWFuaW1hdGluZy13aXRob3V0LWV4dHJhLW5vZGU9J3RydWUnXTo6YWZ0ZXIsIC5hbnQtY2xpY2stYW5pbWF0aW5nLW5vZGUge1xyXG4gICAgICAgIC0tYW50ZC13YXZlLXNoYWRvdy1jb2xvcjogJHt3YXZlQ29sb3J9O1xyXG4gICAgICB9YDtcclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnN0eWxlRm9yUHNldWRvKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5pbnNlcnRFeHRyYU5vZGUpIHtcclxuICAgICAgaWYgKCF0aGlzLmV4dHJhTm9kZSkge1xyXG4gICAgICAgIHRoaXMuZXh0cmFOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5leHRyYU5vZGUuY2xhc3NOYW1lID0gJ2FudC1jbGljay1hbmltYXRpbmctbm9kZSc7XHJcbiAgICAgIG5vZGUuYXBwZW5kQ2hpbGQodGhpcy5leHRyYU5vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubGFzdFRpbWUgPSBEYXRlLm5vdygpO1xyXG5cclxuICAgIHRoaXMucnVuVGltZW91dE91dHNpZGVab25lKCgpID0+IHtcclxuICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUodGhpcy53YXZlQXR0cmlidXRlTmFtZSk7XHJcbiAgICAgIHRoaXMucmVtb3ZlU3R5bGVBbmRFeHRyYU5vZGUoKTtcclxuICAgIH0sIHRoaXMud2F2ZVRyYW5zaXRpb25EdXJhdGlvbik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzVmFsaWRDb2xvcihjb2xvcjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAhIWNvbG9yICYmXHJcbiAgICAgIGNvbG9yICE9PSAnI2ZmZmZmZicgJiZcclxuICAgICAgY29sb3IgIT09ICdyZ2IoMjU1LCAyNTUsIDI1NSknICYmXHJcbiAgICAgIHRoaXMuaXNOb3RHcmV5KGNvbG9yKSAmJlxyXG4gICAgICAhL3JnYmFcXChcXGQqLCBcXGQqLCBcXGQqLCAwXFwpLy50ZXN0KGNvbG9yKSAmJlxyXG4gICAgICBjb2xvciAhPT0gJ3RyYW5zcGFyZW50J1xyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNOb3RHcmV5KGNvbG9yOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IG1hdGNoID0gY29sb3IubWF0Y2goL3JnYmE/XFwoKFxcZCopLCAoXFxkKiksIChcXGQqKSgsIFtcXC5cXGRdKik/XFwpLyk7XHJcbiAgICBpZiAobWF0Y2ggJiYgbWF0Y2hbMV0gJiYgbWF0Y2hbMl0gJiYgbWF0Y2hbM10pIHtcclxuICAgICAgcmV0dXJuICEobWF0Y2hbMV0gPT09IG1hdGNoWzJdICYmIG1hdGNoWzJdID09PSBtYXRjaFszXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0V2F2ZUNvbG9yKG5vZGU6IEhUTUxFbGVtZW50KTogc3RyaW5nIHtcclxuICAgIGNvbnN0IG5vZGVTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBub2RlU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnYm9yZGVyLXRvcC1jb2xvcicpIHx8IC8vIEZpcmVmb3ggQ29tcGF0aWJsZVxyXG4gICAgICBub2RlU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnYm9yZGVyLWNvbG9yJykgfHxcclxuICAgICAgbm9kZVN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2JhY2tncm91bmQtY29sb3InKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcnVuVGltZW91dE91dHNpZGVab25lKGZuOiAoKSA9PiB2b2lkLCBkZWxheTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBzZXRUaW1lb3V0KGZuLCBkZWxheSkpO1xyXG4gIH1cclxufVxyXG4iXX0=
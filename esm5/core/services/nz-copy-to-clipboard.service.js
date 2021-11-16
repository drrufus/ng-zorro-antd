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
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { NzCopyToClipboardServiceModule } from './nz-copy-to-clipboard.service.module';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./nz-copy-to-clipboard.service.module";
import * as ɵngcc0 from '@angular/core';
var NzCopyToClipboardService = /** @class */ (function () {
    // tslint:disable-next-line:no-any
    function NzCopyToClipboardService(document) {
        this.document = document;
    }
    /**
     * @param {?} text
     * @return {?}
     */
    NzCopyToClipboardService.prototype.copy = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            /** @type {?} */
            var copyTextArea = null;
            try {
                // tslint:disable-next-line no-any
                copyTextArea = (/** @type {?} */ (_this.document.createElement('textarea')));
                (/** @type {?} */ (copyTextArea.style)).all = 'unset';
                copyTextArea.style.position = 'fixed';
                copyTextArea.style.top = '0';
                copyTextArea.style.clip = 'rect(0, 0, 0, 0)';
                copyTextArea.style.whiteSpace = 'pre';
                copyTextArea.style.webkitUserSelect = 'text';
                (/** @type {?} */ (copyTextArea.style)).MozUserSelect = 'text';
                copyTextArea.style.msUserSelect = 'text';
                copyTextArea.style.userSelect = 'text';
                _this.document.body.appendChild(copyTextArea);
                copyTextArea.value = text;
                copyTextArea.select();
                /** @type {?} */
                var successful = _this.document.execCommand('copy');
                if (!successful) {
                    reject(text);
                }
                resolve(text);
            }
            finally {
                if (copyTextArea) {
                    _this.document.body.removeChild(copyTextArea);
                }
            }
        }));
    };
    /** @nocollapse */
    NzCopyToClipboardService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ NzCopyToClipboardService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NzCopyToClipboardService_Factory() { return new NzCopyToClipboardService(i0.ɵɵinject(i1.DOCUMENT)); }, token: NzCopyToClipboardService, providedIn: i2.NzCopyToClipboardServiceModule });
NzCopyToClipboardService.ɵfac = function NzCopyToClipboardService_Factory(t) { return new (t || NzCopyToClipboardService)(ɵngcc0.ɵɵinject(DOCUMENT)); };
NzCopyToClipboardService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: NzCopyToClipboardService, factory: function (t) { return NzCopyToClipboardService.ɵfac(t); }, providedIn: NzCopyToClipboardServiceModule });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCopyToClipboardService, [{
        type: Injectable,
        args: [{
                providedIn: NzCopyToClipboardServiceModule
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();
    return NzCopyToClipboardService;
}());
export { NzCopyToClipboardService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzCopyToClipboardService.prototype.document;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29weS10by1jbGlwYm9hcmQuc2VydmljZS5qcyIsInNvdXJjZXMiOlsibmc6L25nLXpvcnJvLWFudGQvY29yZS9zZXJ2aWNlcy9uei1jb3B5LXRvLWNsaXBib2FyZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDOzs7OztBQUV2RjtJQUlFLGtDQUFrQztJQUNsQyxrQ0FBc0MsUUFBYTtRQUFiLGFBQVEsR0FBUixRQUFRLENBQUs7SUFBRyxDQUFDOzs7OztJQUV2RCx1Q0FBSTs7OztJQUFKLFVBQUssSUFBWTtRQUFqQixpQkFnQ0M7UUEvQkMsT0FBTyxJQUFJLE9BQU87Ozs7O1FBQ2hCLFVBQUMsT0FBTyxFQUFFLE1BQU07O2dCQUNWLFlBQVksR0FBRyxJQUFJO1lBQ3ZCLElBQUk7Z0JBQ0Ysa0NBQWtDO2dCQUNsQyxZQUFZLEdBQUcsbUJBQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLEVBQU8sQ0FBQztnQkFDOUQsbUJBQUEsWUFBWSxDQUFDLEtBQUssRUFBQyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUM7Z0JBQ2xDLFlBQVksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztnQkFDdEMsWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO2dCQUM3QixZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxrQkFBa0IsQ0FBQztnQkFDN0MsWUFBWSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2dCQUN0QyxZQUFZLENBQUMsS0FBSyxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQztnQkFDN0MsbUJBQUEsWUFBWSxDQUFDLEtBQUssRUFBQyxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUM7Z0JBQzNDLFlBQVksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztnQkFDekMsWUFBWSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO2dCQUN2QyxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzdDLFlBQVksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2dCQUMxQixZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7O29CQUVoQixVQUFVLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO2dCQUNwRCxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDZDtnQkFDRCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDZjtvQkFBUztnQkFDUixJQUFJLFlBQVksRUFBRTtvQkFDaEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO2lCQUM5QzthQUNGO1FBQ0gsQ0FBQyxFQUNGLENBQUM7SUFDSixDQUFDLENBQ0gsQUFyQ1M7O3FDQUhSLFVBQVUsU0FBQztTQUNWLFVBQVUsRUFBRSw4QkFBOEIsa0JBQzNDLHJCQUdjLE1BQU0sU0FBQyxRQUFROzs7Ozs7Ozs7Ozs7O2tDQVNwQjttQ0ExQlY7Q0FvREMsQUF4Q0QsSUF3Q0M7U0FyQ1ksd0JBQXdCOzs7Ozs7SUFFdkIsNENBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOekNvcHlUb0NsaXBib2FyZFNlcnZpY2VNb2R1bGUgfSBmcm9tICcuL256LWNvcHktdG8tY2xpcGJvYXJkLnNlcnZpY2UubW9kdWxlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiBOekNvcHlUb0NsaXBib2FyZFNlcnZpY2VNb2R1bGVcclxufSlcclxuZXhwb3J0IGNsYXNzIE56Q29weVRvQ2xpcGJvYXJkU2VydmljZSB7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSkge31cclxuXHJcbiAgY29weSh0ZXh0OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oXHJcbiAgICAgIChyZXNvbHZlLCByZWplY3QpOiB2b2lkID0+IHtcclxuICAgICAgICBsZXQgY29weVRleHRBcmVhID0gbnVsbDtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWFueVxyXG4gICAgICAgICAgY29weVRleHRBcmVhID0gdGhpcy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpIGFzIGFueTtcclxuICAgICAgICAgIGNvcHlUZXh0QXJlYS5zdHlsZSEuYWxsID0gJ3Vuc2V0JztcclxuICAgICAgICAgIGNvcHlUZXh0QXJlYS5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XHJcbiAgICAgICAgICBjb3B5VGV4dEFyZWEuc3R5bGUudG9wID0gJzAnO1xyXG4gICAgICAgICAgY29weVRleHRBcmVhLnN0eWxlLmNsaXAgPSAncmVjdCgwLCAwLCAwLCAwKSc7XHJcbiAgICAgICAgICBjb3B5VGV4dEFyZWEuc3R5bGUud2hpdGVTcGFjZSA9ICdwcmUnO1xyXG4gICAgICAgICAgY29weVRleHRBcmVhLnN0eWxlLndlYmtpdFVzZXJTZWxlY3QgPSAndGV4dCc7XHJcbiAgICAgICAgICBjb3B5VGV4dEFyZWEuc3R5bGUhLk1velVzZXJTZWxlY3QgPSAndGV4dCc7XHJcbiAgICAgICAgICBjb3B5VGV4dEFyZWEuc3R5bGUubXNVc2VyU2VsZWN0ID0gJ3RleHQnO1xyXG4gICAgICAgICAgY29weVRleHRBcmVhLnN0eWxlLnVzZXJTZWxlY3QgPSAndGV4dCc7XHJcbiAgICAgICAgICB0aGlzLmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29weVRleHRBcmVhKTtcclxuICAgICAgICAgIGNvcHlUZXh0QXJlYS52YWx1ZSA9IHRleHQ7XHJcbiAgICAgICAgICBjb3B5VGV4dEFyZWEuc2VsZWN0KCk7XHJcblxyXG4gICAgICAgICAgY29uc3Qgc3VjY2Vzc2Z1bCA9IHRoaXMuZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcclxuICAgICAgICAgIGlmICghc3VjY2Vzc2Z1bCkge1xyXG4gICAgICAgICAgICByZWplY3QodGV4dCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXNvbHZlKHRleHQpO1xyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICBpZiAoY29weVRleHRBcmVhKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChjb3B5VGV4dEFyZWEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19
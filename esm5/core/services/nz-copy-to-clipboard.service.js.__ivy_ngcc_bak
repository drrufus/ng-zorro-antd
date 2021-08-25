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
    NzCopyToClipboardService.decorators = [
        { type: Injectable, args: [{
                    providedIn: NzCopyToClipboardServiceModule
                },] }
    ];
    /** @nocollapse */
    NzCopyToClipboardService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ NzCopyToClipboardService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NzCopyToClipboardService_Factory() { return new NzCopyToClipboardService(i0.ɵɵinject(i1.DOCUMENT)); }, token: NzCopyToClipboardService, providedIn: i2.NzCopyToClipboardServiceModule });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29weS10by1jbGlwYm9hcmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL256LWNvcHktdG8tY2xpcGJvYXJkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7Ozs7QUFFdkY7SUFJRSxrQ0FBa0M7SUFDbEMsa0NBQXNDLFFBQWE7UUFBYixhQUFRLEdBQVIsUUFBUSxDQUFLO0lBQUcsQ0FBQzs7Ozs7SUFFdkQsdUNBQUk7Ozs7SUFBSixVQUFLLElBQVk7UUFBakIsaUJBZ0NDO1FBL0JDLE9BQU8sSUFBSSxPQUFPOzs7OztRQUNoQixVQUFDLE9BQU8sRUFBRSxNQUFNOztnQkFDVixZQUFZLEdBQUcsSUFBSTtZQUN2QixJQUFJO2dCQUNGLGtDQUFrQztnQkFDbEMsWUFBWSxHQUFHLG1CQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxFQUFPLENBQUM7Z0JBQzlELG1CQUFBLFlBQVksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDO2dCQUNsQyxZQUFZLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7Z0JBQ3RDLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztnQkFDN0IsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsa0JBQWtCLENBQUM7Z0JBQzdDLFlBQVksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztnQkFDdEMsWUFBWSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUM7Z0JBQzdDLG1CQUFBLFlBQVksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDO2dCQUMzQyxZQUFZLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7Z0JBQ3pDLFlBQVksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztnQkFDdkMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUM3QyxZQUFZLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztnQkFDMUIsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDOztvQkFFaEIsVUFBVSxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztnQkFDcEQsSUFBSSxDQUFDLFVBQVUsRUFBRTtvQkFDZixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ2Q7Z0JBQ0QsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2Y7b0JBQVM7Z0JBQ1IsSUFBSSxZQUFZLEVBQUU7b0JBQ2hCLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztpQkFDOUM7YUFDRjtRQUNILENBQUMsRUFDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBdkNGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsOEJBQThCO2lCQUMzQzs7OztnREFHYyxNQUFNLFNBQUMsUUFBUTs7O21DQWpCOUI7Q0FvREMsQUF4Q0QsSUF3Q0M7U0FyQ1ksd0JBQXdCOzs7Ozs7SUFFdkIsNENBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOekNvcHlUb0NsaXBib2FyZFNlcnZpY2VNb2R1bGUgfSBmcm9tICcuL256LWNvcHktdG8tY2xpcGJvYXJkLnNlcnZpY2UubW9kdWxlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiBOekNvcHlUb0NsaXBib2FyZFNlcnZpY2VNb2R1bGVcclxufSlcclxuZXhwb3J0IGNsYXNzIE56Q29weVRvQ2xpcGJvYXJkU2VydmljZSB7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSkge31cclxuXHJcbiAgY29weSh0ZXh0OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oXHJcbiAgICAgIChyZXNvbHZlLCByZWplY3QpOiB2b2lkID0+IHtcclxuICAgICAgICBsZXQgY29weVRleHRBcmVhID0gbnVsbDtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWFueVxyXG4gICAgICAgICAgY29weVRleHRBcmVhID0gdGhpcy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpIGFzIGFueTtcclxuICAgICAgICAgIGNvcHlUZXh0QXJlYS5zdHlsZSEuYWxsID0gJ3Vuc2V0JztcclxuICAgICAgICAgIGNvcHlUZXh0QXJlYS5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XHJcbiAgICAgICAgICBjb3B5VGV4dEFyZWEuc3R5bGUudG9wID0gJzAnO1xyXG4gICAgICAgICAgY29weVRleHRBcmVhLnN0eWxlLmNsaXAgPSAncmVjdCgwLCAwLCAwLCAwKSc7XHJcbiAgICAgICAgICBjb3B5VGV4dEFyZWEuc3R5bGUud2hpdGVTcGFjZSA9ICdwcmUnO1xyXG4gICAgICAgICAgY29weVRleHRBcmVhLnN0eWxlLndlYmtpdFVzZXJTZWxlY3QgPSAndGV4dCc7XHJcbiAgICAgICAgICBjb3B5VGV4dEFyZWEuc3R5bGUhLk1velVzZXJTZWxlY3QgPSAndGV4dCc7XHJcbiAgICAgICAgICBjb3B5VGV4dEFyZWEuc3R5bGUubXNVc2VyU2VsZWN0ID0gJ3RleHQnO1xyXG4gICAgICAgICAgY29weVRleHRBcmVhLnN0eWxlLnVzZXJTZWxlY3QgPSAndGV4dCc7XHJcbiAgICAgICAgICB0aGlzLmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29weVRleHRBcmVhKTtcclxuICAgICAgICAgIGNvcHlUZXh0QXJlYS52YWx1ZSA9IHRleHQ7XHJcbiAgICAgICAgICBjb3B5VGV4dEFyZWEuc2VsZWN0KCk7XHJcblxyXG4gICAgICAgICAgY29uc3Qgc3VjY2Vzc2Z1bCA9IHRoaXMuZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcclxuICAgICAgICAgIGlmICghc3VjY2Vzc2Z1bCkge1xyXG4gICAgICAgICAgICByZWplY3QodGV4dCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXNvbHZlKHRleHQpO1xyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICBpZiAoY29weVRleHRBcmVhKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChjb3B5VGV4dEFyZWEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19
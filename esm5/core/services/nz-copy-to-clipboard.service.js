/**
 * @fileoverview added by tsickle
 * Generated from: services/nz-copy-to-clipboard.service.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29weS10by1jbGlwYm9hcmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL256LWNvcHktdG8tY2xpcGJvYXJkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDOzs7O0FBRXZGO0lBSUUsa0NBQWtDO0lBQ2xDLGtDQUFzQyxRQUFhO1FBQWIsYUFBUSxHQUFSLFFBQVEsQ0FBSztJQUFHLENBQUM7Ozs7O0lBRXZELHVDQUFJOzs7O0lBQUosVUFBSyxJQUFZO1FBQWpCLGlCQWdDQztRQS9CQyxPQUFPLElBQUksT0FBTzs7Ozs7UUFDaEIsVUFBQyxPQUFPLEVBQUUsTUFBTTs7Z0JBQ1YsWUFBWSxHQUFHLElBQUk7WUFDdkIsSUFBSTtnQkFDRixrQ0FBa0M7Z0JBQ2xDLFlBQVksR0FBRyxtQkFBQSxLQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsRUFBTyxDQUFDO2dCQUM5RCxtQkFBQSxZQUFZLENBQUMsS0FBSyxFQUFDLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQztnQkFDbEMsWUFBWSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO2dCQUN0QyxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7Z0JBQzdCLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLGtCQUFrQixDQUFDO2dCQUM3QyxZQUFZLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7Z0JBQ3RDLFlBQVksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDO2dCQUM3QyxtQkFBQSxZQUFZLENBQUMsS0FBSyxFQUFDLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQztnQkFDM0MsWUFBWSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO2dCQUN6QyxZQUFZLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7Z0JBQ3ZDLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDN0MsWUFBWSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBQzFCLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7b0JBRWhCLFVBQVUsR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7Z0JBQ3BELElBQUksQ0FBQyxVQUFVLEVBQUU7b0JBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNkO2dCQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNmO29CQUFTO2dCQUNSLElBQUksWUFBWSxFQUFFO29CQUNoQixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBQzlDO2FBQ0Y7UUFDSCxDQUFDLEVBQ0YsQ0FBQztJQUNKLENBQUM7O2dCQXZDRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLDhCQUE4QjtpQkFDM0M7Ozs7Z0RBR2MsTUFBTSxTQUFDLFFBQVE7OzttQ0FqQjlCO0NBb0RDLEFBeENELElBd0NDO1NBckNZLHdCQUF3Qjs7Ozs7O0lBRXZCLDRDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpDb3B5VG9DbGlwYm9hcmRTZXJ2aWNlTW9kdWxlIH0gZnJvbSAnLi9uei1jb3B5LXRvLWNsaXBib2FyZC5zZXJ2aWNlLm1vZHVsZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogTnpDb3B5VG9DbGlwYm9hcmRTZXJ2aWNlTW9kdWxlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekNvcHlUb0NsaXBib2FyZFNlcnZpY2Uge1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnkpIHt9XHJcblxyXG4gIGNvcHkodGV4dDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmc+KFxyXG4gICAgICAocmVzb2x2ZSwgcmVqZWN0KTogdm9pZCA9PiB7XHJcbiAgICAgICAgbGV0IGNvcHlUZXh0QXJlYSA9IG51bGw7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1hbnlcclxuICAgICAgICAgIGNvcHlUZXh0QXJlYSA9IHRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKSBhcyBhbnk7XHJcbiAgICAgICAgICBjb3B5VGV4dEFyZWEuc3R5bGUhLmFsbCA9ICd1bnNldCc7XHJcbiAgICAgICAgICBjb3B5VGV4dEFyZWEuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xyXG4gICAgICAgICAgY29weVRleHRBcmVhLnN0eWxlLnRvcCA9ICcwJztcclxuICAgICAgICAgIGNvcHlUZXh0QXJlYS5zdHlsZS5jbGlwID0gJ3JlY3QoMCwgMCwgMCwgMCknO1xyXG4gICAgICAgICAgY29weVRleHRBcmVhLnN0eWxlLndoaXRlU3BhY2UgPSAncHJlJztcclxuICAgICAgICAgIGNvcHlUZXh0QXJlYS5zdHlsZS53ZWJraXRVc2VyU2VsZWN0ID0gJ3RleHQnO1xyXG4gICAgICAgICAgY29weVRleHRBcmVhLnN0eWxlIS5Nb3pVc2VyU2VsZWN0ID0gJ3RleHQnO1xyXG4gICAgICAgICAgY29weVRleHRBcmVhLnN0eWxlLm1zVXNlclNlbGVjdCA9ICd0ZXh0JztcclxuICAgICAgICAgIGNvcHlUZXh0QXJlYS5zdHlsZS51c2VyU2VsZWN0ID0gJ3RleHQnO1xyXG4gICAgICAgICAgdGhpcy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvcHlUZXh0QXJlYSk7XHJcbiAgICAgICAgICBjb3B5VGV4dEFyZWEudmFsdWUgPSB0ZXh0O1xyXG4gICAgICAgICAgY29weVRleHRBcmVhLnNlbGVjdCgpO1xyXG5cclxuICAgICAgICAgIGNvbnN0IHN1Y2Nlc3NmdWwgPSB0aGlzLmRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XHJcbiAgICAgICAgICBpZiAoIXN1Y2Nlc3NmdWwpIHtcclxuICAgICAgICAgICAgcmVqZWN0KHRleHQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmVzb2x2ZSh0ZXh0KTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgaWYgKGNvcHlUZXh0QXJlYSkge1xyXG4gICAgICAgICAgICB0aGlzLmRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY29weVRleHRBcmVhKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
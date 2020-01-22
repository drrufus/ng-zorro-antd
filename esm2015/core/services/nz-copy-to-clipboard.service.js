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
export class NzCopyToClipboardService {
    // tslint:disable-next-line:no-any
    /**
     * @param {?} document
     */
    constructor(document) {
        this.document = document;
    }
    /**
     * @param {?} text
     * @return {?}
     */
    copy(text) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            /** @type {?} */
            let copyTextArea = null;
            try {
                // tslint:disable-next-line no-any
                copyTextArea = (/** @type {?} */ (this.document.createElement('textarea')));
                (/** @type {?} */ (copyTextArea.style)).all = 'unset';
                copyTextArea.style.position = 'fixed';
                copyTextArea.style.top = '0';
                copyTextArea.style.clip = 'rect(0, 0, 0, 0)';
                copyTextArea.style.whiteSpace = 'pre';
                copyTextArea.style.webkitUserSelect = 'text';
                (/** @type {?} */ (copyTextArea.style)).MozUserSelect = 'text';
                copyTextArea.style.msUserSelect = 'text';
                copyTextArea.style.userSelect = 'text';
                this.document.body.appendChild(copyTextArea);
                copyTextArea.value = text;
                copyTextArea.select();
                /** @type {?} */
                const successful = this.document.execCommand('copy');
                if (!successful) {
                    reject(text);
                }
                resolve(text);
            }
            finally {
                if (copyTextArea) {
                    this.document.body.removeChild(copyTextArea);
                }
            }
        }));
    }
}
NzCopyToClipboardService.decorators = [
    { type: Injectable, args: [{
                providedIn: NzCopyToClipboardServiceModule
            },] }
];
/** @nocollapse */
NzCopyToClipboardService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
/** @nocollapse */ NzCopyToClipboardService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NzCopyToClipboardService_Factory() { return new NzCopyToClipboardService(i0.ɵɵinject(i1.DOCUMENT)); }, token: NzCopyToClipboardService, providedIn: i2.NzCopyToClipboardServiceModule });
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzCopyToClipboardService.prototype.document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29weS10by1jbGlwYm9hcmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL256LWNvcHktdG8tY2xpcGJvYXJkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7Ozs7QUFLdkYsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7SUFFbkMsWUFBc0MsUUFBYTtRQUFiLGFBQVEsR0FBUixRQUFRLENBQUs7SUFBRyxDQUFDOzs7OztJQUV2RCxJQUFJLENBQUMsSUFBWTtRQUNmLE9BQU8sSUFBSSxPQUFPOzs7OztRQUNoQixDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQVEsRUFBRTs7Z0JBQ3BCLFlBQVksR0FBRyxJQUFJO1lBQ3ZCLElBQUk7Z0JBQ0Ysa0NBQWtDO2dCQUNsQyxZQUFZLEdBQUcsbUJBQUEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLEVBQU8sQ0FBQztnQkFDOUQsbUJBQUEsWUFBWSxDQUFDLEtBQUssRUFBQyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUM7Z0JBQ2xDLFlBQVksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztnQkFDdEMsWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO2dCQUM3QixZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxrQkFBa0IsQ0FBQztnQkFDN0MsWUFBWSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2dCQUN0QyxZQUFZLENBQUMsS0FBSyxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQztnQkFDN0MsbUJBQUEsWUFBWSxDQUFDLEtBQUssRUFBQyxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUM7Z0JBQzNDLFlBQVksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztnQkFDekMsWUFBWSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO2dCQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzdDLFlBQVksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2dCQUMxQixZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7O3NCQUVoQixVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO2dCQUNwRCxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDZDtnQkFDRCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDZjtvQkFBUztnQkFDUixJQUFJLFlBQVksRUFBRTtvQkFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO2lCQUM5QzthQUNGO1FBQ0gsQ0FBQyxFQUNGLENBQUM7SUFDSixDQUFDOzs7WUF2Q0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSw4QkFBOEI7YUFDM0M7Ozs7NENBR2MsTUFBTSxTQUFDLFFBQVE7Ozs7Ozs7O0lBQWhCLDRDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpDb3B5VG9DbGlwYm9hcmRTZXJ2aWNlTW9kdWxlIH0gZnJvbSAnLi9uei1jb3B5LXRvLWNsaXBib2FyZC5zZXJ2aWNlLm1vZHVsZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogTnpDb3B5VG9DbGlwYm9hcmRTZXJ2aWNlTW9kdWxlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekNvcHlUb0NsaXBib2FyZFNlcnZpY2Uge1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnkpIHt9XHJcblxyXG4gIGNvcHkodGV4dDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmc+KFxyXG4gICAgICAocmVzb2x2ZSwgcmVqZWN0KTogdm9pZCA9PiB7XHJcbiAgICAgICAgbGV0IGNvcHlUZXh0QXJlYSA9IG51bGw7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1hbnlcclxuICAgICAgICAgIGNvcHlUZXh0QXJlYSA9IHRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKSBhcyBhbnk7XHJcbiAgICAgICAgICBjb3B5VGV4dEFyZWEuc3R5bGUhLmFsbCA9ICd1bnNldCc7XHJcbiAgICAgICAgICBjb3B5VGV4dEFyZWEuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xyXG4gICAgICAgICAgY29weVRleHRBcmVhLnN0eWxlLnRvcCA9ICcwJztcclxuICAgICAgICAgIGNvcHlUZXh0QXJlYS5zdHlsZS5jbGlwID0gJ3JlY3QoMCwgMCwgMCwgMCknO1xyXG4gICAgICAgICAgY29weVRleHRBcmVhLnN0eWxlLndoaXRlU3BhY2UgPSAncHJlJztcclxuICAgICAgICAgIGNvcHlUZXh0QXJlYS5zdHlsZS53ZWJraXRVc2VyU2VsZWN0ID0gJ3RleHQnO1xyXG4gICAgICAgICAgY29weVRleHRBcmVhLnN0eWxlIS5Nb3pVc2VyU2VsZWN0ID0gJ3RleHQnO1xyXG4gICAgICAgICAgY29weVRleHRBcmVhLnN0eWxlLm1zVXNlclNlbGVjdCA9ICd0ZXh0JztcclxuICAgICAgICAgIGNvcHlUZXh0QXJlYS5zdHlsZS51c2VyU2VsZWN0ID0gJ3RleHQnO1xyXG4gICAgICAgICAgdGhpcy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvcHlUZXh0QXJlYSk7XHJcbiAgICAgICAgICBjb3B5VGV4dEFyZWEudmFsdWUgPSB0ZXh0O1xyXG4gICAgICAgICAgY29weVRleHRBcmVhLnNlbGVjdCgpO1xyXG5cclxuICAgICAgICAgIGNvbnN0IHN1Y2Nlc3NmdWwgPSB0aGlzLmRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XHJcbiAgICAgICAgICBpZiAoIXN1Y2Nlc3NmdWwpIHtcclxuICAgICAgICAgICAgcmVqZWN0KHRleHQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmVzb2x2ZSh0ZXh0KTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgaWYgKGNvcHlUZXh0QXJlYSkge1xyXG4gICAgICAgICAgICB0aGlzLmRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY29weVRleHRBcmVhKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29weS10by1jbGlwYm9hcmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL256LWNvcHktdG8tY2xpcGJvYXJkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDOzs7O0FBS3ZGLE1BQU0sT0FBTyx3QkFBd0I7Ozs7O0lBRW5DLFlBQXNDLFFBQWE7UUFBYixhQUFRLEdBQVIsUUFBUSxDQUFLO0lBQUcsQ0FBQzs7Ozs7SUFFdkQsSUFBSSxDQUFDLElBQVk7UUFDZixPQUFPLElBQUksT0FBTzs7Ozs7UUFDaEIsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFRLEVBQUU7O2dCQUNwQixZQUFZLEdBQUcsSUFBSTtZQUN2QixJQUFJO2dCQUNGLGtDQUFrQztnQkFDbEMsWUFBWSxHQUFHLG1CQUFBLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxFQUFPLENBQUM7Z0JBQzlELG1CQUFBLFlBQVksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDO2dCQUNsQyxZQUFZLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7Z0JBQ3RDLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztnQkFDN0IsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsa0JBQWtCLENBQUM7Z0JBQzdDLFlBQVksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztnQkFDdEMsWUFBWSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUM7Z0JBQzdDLG1CQUFBLFlBQVksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDO2dCQUMzQyxZQUFZLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7Z0JBQ3pDLFlBQVksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztnQkFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUM3QyxZQUFZLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztnQkFDMUIsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDOztzQkFFaEIsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztnQkFDcEQsSUFBSSxDQUFDLFVBQVUsRUFBRTtvQkFDZixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ2Q7Z0JBQ0QsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2Y7b0JBQVM7Z0JBQ1IsSUFBSSxZQUFZLEVBQUU7b0JBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztpQkFDOUM7YUFDRjtRQUNILENBQUMsRUFDRixDQUFDO0lBQ0osQ0FBQzs7O1lBdkNGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsOEJBQThCO2FBQzNDOzs7OzRDQUdjLE1BQU0sU0FBQyxRQUFROzs7Ozs7OztJQUFoQiw0Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE56Q29weVRvQ2xpcGJvYXJkU2VydmljZU1vZHVsZSB9IGZyb20gJy4vbnotY29weS10by1jbGlwYm9hcmQuc2VydmljZS5tb2R1bGUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46IE56Q29weVRvQ2xpcGJvYXJkU2VydmljZU1vZHVsZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpDb3B5VG9DbGlwYm9hcmRTZXJ2aWNlIHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55KSB7fVxyXG5cclxuICBjb3B5KHRleHQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPihcclxuICAgICAgKHJlc29sdmUsIHJlamVjdCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGxldCBjb3B5VGV4dEFyZWEgPSBudWxsO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tYW55XHJcbiAgICAgICAgICBjb3B5VGV4dEFyZWEgPSB0aGlzLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJykgYXMgYW55O1xyXG4gICAgICAgICAgY29weVRleHRBcmVhLnN0eWxlIS5hbGwgPSAndW5zZXQnO1xyXG4gICAgICAgICAgY29weVRleHRBcmVhLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcclxuICAgICAgICAgIGNvcHlUZXh0QXJlYS5zdHlsZS50b3AgPSAnMCc7XHJcbiAgICAgICAgICBjb3B5VGV4dEFyZWEuc3R5bGUuY2xpcCA9ICdyZWN0KDAsIDAsIDAsIDApJztcclxuICAgICAgICAgIGNvcHlUZXh0QXJlYS5zdHlsZS53aGl0ZVNwYWNlID0gJ3ByZSc7XHJcbiAgICAgICAgICBjb3B5VGV4dEFyZWEuc3R5bGUud2Via2l0VXNlclNlbGVjdCA9ICd0ZXh0JztcclxuICAgICAgICAgIGNvcHlUZXh0QXJlYS5zdHlsZSEuTW96VXNlclNlbGVjdCA9ICd0ZXh0JztcclxuICAgICAgICAgIGNvcHlUZXh0QXJlYS5zdHlsZS5tc1VzZXJTZWxlY3QgPSAndGV4dCc7XHJcbiAgICAgICAgICBjb3B5VGV4dEFyZWEuc3R5bGUudXNlclNlbGVjdCA9ICd0ZXh0JztcclxuICAgICAgICAgIHRoaXMuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb3B5VGV4dEFyZWEpO1xyXG4gICAgICAgICAgY29weVRleHRBcmVhLnZhbHVlID0gdGV4dDtcclxuICAgICAgICAgIGNvcHlUZXh0QXJlYS5zZWxlY3QoKTtcclxuXHJcbiAgICAgICAgICBjb25zdCBzdWNjZXNzZnVsID0gdGhpcy5kb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xyXG4gICAgICAgICAgaWYgKCFzdWNjZXNzZnVsKSB7XHJcbiAgICAgICAgICAgIHJlamVjdCh0ZXh0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJlc29sdmUodGV4dCk7XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgIGlmIChjb3B5VGV4dEFyZWEpIHtcclxuICAgICAgICAgICAgdGhpcy5kb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGNvcHlUZXh0QXJlYSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=
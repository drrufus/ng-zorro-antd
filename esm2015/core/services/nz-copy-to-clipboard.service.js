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
NzCopyToClipboardService.ɵfac = function NzCopyToClipboardService_Factory(t) { return new (t || NzCopyToClipboardService)(ɵngcc0.ɵɵinject(DOCUMENT)); };
NzCopyToClipboardService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: NzCopyToClipboardService, factory: NzCopyToClipboardService.ɵfac, providedIn: NzCopyToClipboardServiceModule });
/** @nocollapse */
NzCopyToClipboardService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
/** @nocollapse */ NzCopyToClipboardService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NzCopyToClipboardService_Factory() { return new NzCopyToClipboardService(i0.ɵɵinject(i1.DOCUMENT)); }, token: NzCopyToClipboardService, providedIn: i2.NzCopyToClipboardServiceModule });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCopyToClipboardService, [{
        type: Injectable,
        args: [{
                providedIn: NzCopyToClipboardServiceModule
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzCopyToClipboardService.prototype.document;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29weS10by1jbGlwYm9hcmQuc2VydmljZS5qcyIsInNvdXJjZXMiOlsibmc6L25nLXpvcnJvLWFudGQvY29yZS9zZXJ2aWNlcy9uei1jb3B5LXRvLWNsaXBib2FyZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDOzs7OztBQUt2RixNQUFNLE9BQU8sd0JBQXdCOzs7OztJQUVuQyxZQUFzQyxRQUFhO1FBQWIsYUFBUSxHQUFSLFFBQVEsQ0FBSztJQUFHLENBQUM7Ozs7O0lBRXZELElBQUksQ0FBQyxJQUFZO1FBQ2YsT0FBTyxJQUFJLE9BQU87Ozs7O1FBQ2hCLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBUSxFQUFFOztnQkFDcEIsWUFBWSxHQUFHLElBQUk7WUFDdkIsSUFBSTtnQkFDRixrQ0FBa0M7Z0JBQ2xDLFlBQVksR0FBRyxtQkFBQSxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsRUFBTyxDQUFDO2dCQUM5RCxtQkFBQSxZQUFZLENBQUMsS0FBSyxFQUFDLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQztnQkFDbEMsWUFBWSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO2dCQUN0QyxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7Z0JBQzdCLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLGtCQUFrQixDQUFDO2dCQUM3QyxZQUFZLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7Z0JBQ3RDLFlBQVksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDO2dCQUM3QyxtQkFBQSxZQUFZLENBQUMsS0FBSyxFQUFDLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQztnQkFDM0MsWUFBWSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO2dCQUN6QyxZQUFZLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDN0MsWUFBWSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBQzFCLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7c0JBRWhCLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7Z0JBQ3BELElBQUksQ0FBQyxVQUFVLEVBQUU7b0JBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNkO2dCQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNmO29CQUFTO2dCQUNSLElBQUksWUFBWSxFQUFFO29CQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBQzlDO2FBQ0Y7UUFDSCxDQUFDLEVBQ0YsQ0FBQztJQUNKLENBQUM7OztDQUNGLHFEQXhDQSxVQUFVLFNBQUMsa0JBQ1YsVUFBVSxFQUFFLDhCQUE4QixjQUMzQyxpQ0FDSTs7OzRDQUVVLE1BQU0sU0FBQyxRQUFROzs7Ozs7Ozs7OztrQ0FRMEM7Ozs7OztJQVIxRCw0Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE56Q29weVRvQ2xpcGJvYXJkU2VydmljZU1vZHVsZSB9IGZyb20gJy4vbnotY29weS10by1jbGlwYm9hcmQuc2VydmljZS5tb2R1bGUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46IE56Q29weVRvQ2xpcGJvYXJkU2VydmljZU1vZHVsZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpDb3B5VG9DbGlwYm9hcmRTZXJ2aWNlIHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55KSB7fVxyXG5cclxuICBjb3B5KHRleHQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPihcclxuICAgICAgKHJlc29sdmUsIHJlamVjdCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGxldCBjb3B5VGV4dEFyZWEgPSBudWxsO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tYW55XHJcbiAgICAgICAgICBjb3B5VGV4dEFyZWEgPSB0aGlzLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJykgYXMgYW55O1xyXG4gICAgICAgICAgY29weVRleHRBcmVhLnN0eWxlIS5hbGwgPSAndW5zZXQnO1xyXG4gICAgICAgICAgY29weVRleHRBcmVhLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcclxuICAgICAgICAgIGNvcHlUZXh0QXJlYS5zdHlsZS50b3AgPSAnMCc7XHJcbiAgICAgICAgICBjb3B5VGV4dEFyZWEuc3R5bGUuY2xpcCA9ICdyZWN0KDAsIDAsIDAsIDApJztcclxuICAgICAgICAgIGNvcHlUZXh0QXJlYS5zdHlsZS53aGl0ZVNwYWNlID0gJ3ByZSc7XHJcbiAgICAgICAgICBjb3B5VGV4dEFyZWEuc3R5bGUud2Via2l0VXNlclNlbGVjdCA9ICd0ZXh0JztcclxuICAgICAgICAgIGNvcHlUZXh0QXJlYS5zdHlsZSEuTW96VXNlclNlbGVjdCA9ICd0ZXh0JztcclxuICAgICAgICAgIGNvcHlUZXh0QXJlYS5zdHlsZS5tc1VzZXJTZWxlY3QgPSAndGV4dCc7XHJcbiAgICAgICAgICBjb3B5VGV4dEFyZWEuc3R5bGUudXNlclNlbGVjdCA9ICd0ZXh0JztcclxuICAgICAgICAgIHRoaXMuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb3B5VGV4dEFyZWEpO1xyXG4gICAgICAgICAgY29weVRleHRBcmVhLnZhbHVlID0gdGV4dDtcclxuICAgICAgICAgIGNvcHlUZXh0QXJlYS5zZWxlY3QoKTtcclxuXHJcbiAgICAgICAgICBjb25zdCBzdWNjZXNzZnVsID0gdGhpcy5kb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xyXG4gICAgICAgICAgaWYgKCFzdWNjZXNzZnVsKSB7XHJcbiAgICAgICAgICAgIHJlamVjdCh0ZXh0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJlc29sdmUodGV4dCk7XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgIGlmIChjb3B5VGV4dEFyZWEpIHtcclxuICAgICAgICAgICAgdGhpcy5kb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGNvcHlUZXh0QXJlYSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=
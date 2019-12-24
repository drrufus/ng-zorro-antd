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
export class NzCopyToClipboardService {
    // tslint:disable-next-line:no-any
    constructor(document) {
        this.document = document;
    }
    copy(text) {
        return new Promise((resolve, reject) => {
            let copyTextArea = null;
            try {
                // tslint:disable-next-line no-any
                copyTextArea = this.document.createElement('textarea');
                copyTextArea.style.all = 'unset';
                copyTextArea.style.position = 'fixed';
                copyTextArea.style.top = '0';
                copyTextArea.style.clip = 'rect(0, 0, 0, 0)';
                copyTextArea.style.whiteSpace = 'pre';
                copyTextArea.style.webkitUserSelect = 'text';
                copyTextArea.style.MozUserSelect = 'text';
                copyTextArea.style.msUserSelect = 'text';
                copyTextArea.style.userSelect = 'text';
                this.document.body.appendChild(copyTextArea);
                copyTextArea.value = text;
                copyTextArea.select();
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
        });
    }
}
/** @nocollapse */ NzCopyToClipboardService.ɵfac = function NzCopyToClipboardService_Factory(t) { return new (t || NzCopyToClipboardService)(i0.ɵɵinject(DOCUMENT)); };
/** @nocollapse */ NzCopyToClipboardService.ɵprov = i0.ɵɵdefineInjectable({ token: NzCopyToClipboardService, factory: NzCopyToClipboardService.ɵfac, providedIn: NzCopyToClipboardServiceModule });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzCopyToClipboardService, [{
        type: Injectable,
        args: [{
                providedIn: NzCopyToClipboardServiceModule
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29weS10by1jbGlwYm9hcmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL256LWNvcHktdG8tY2xpcGJvYXJkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDOztBQUt2RixNQUFNLE9BQU8sd0JBQXdCO0lBQ25DLGtDQUFrQztJQUNsQyxZQUFzQyxRQUFhO1FBQWIsYUFBUSxHQUFSLFFBQVEsQ0FBSztJQUFHLENBQUM7SUFFdkQsSUFBSSxDQUFDLElBQVk7UUFDZixPQUFPLElBQUksT0FBTyxDQUFTLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBUSxFQUFFO1lBQ25ELElBQUksWUFBWSxHQUFHLElBQUksQ0FBQztZQUN4QixJQUFJO2dCQUNGLGtDQUFrQztnQkFDbEMsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBUSxDQUFDO2dCQUM5RCxZQUFZLENBQUMsS0FBTSxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUM7Z0JBQ2xDLFlBQVksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztnQkFDdEMsWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO2dCQUM3QixZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxrQkFBa0IsQ0FBQztnQkFDN0MsWUFBWSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2dCQUN0QyxZQUFZLENBQUMsS0FBSyxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQztnQkFDN0MsWUFBWSxDQUFDLEtBQU0sQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDO2dCQUMzQyxZQUFZLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7Z0JBQ3pDLFlBQVksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztnQkFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUM3QyxZQUFZLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztnQkFDMUIsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUV0QixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDckQsSUFBSSxDQUFDLFVBQVUsRUFBRTtvQkFDZixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ2Q7Z0JBQ0QsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2Y7b0JBQVM7Z0JBQ1IsSUFBSSxZQUFZLEVBQUU7b0JBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztpQkFDOUM7YUFDRjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0dBbENVLHdCQUF3QixjQUVmLFFBQVE7Z0VBRmpCLHdCQUF3QixXQUF4Qix3QkFBd0IsbUJBRnZCLDhCQUE4QjtrREFFL0Isd0JBQXdCO2NBSHBDLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsOEJBQThCO2FBQzNDOztzQkFHYyxNQUFNO3VCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE56Q29weVRvQ2xpcGJvYXJkU2VydmljZU1vZHVsZSB9IGZyb20gJy4vbnotY29weS10by1jbGlwYm9hcmQuc2VydmljZS5tb2R1bGUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46IE56Q29weVRvQ2xpcGJvYXJkU2VydmljZU1vZHVsZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpDb3B5VG9DbGlwYm9hcmRTZXJ2aWNlIHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55KSB7fVxyXG5cclxuICBjb3B5KHRleHQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSwgcmVqZWN0KTogdm9pZCA9PiB7XHJcbiAgICAgIGxldCBjb3B5VGV4dEFyZWEgPSBudWxsO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1hbnlcclxuICAgICAgICBjb3B5VGV4dEFyZWEgPSB0aGlzLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJykgYXMgYW55O1xyXG4gICAgICAgIGNvcHlUZXh0QXJlYS5zdHlsZSEuYWxsID0gJ3Vuc2V0JztcclxuICAgICAgICBjb3B5VGV4dEFyZWEuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xyXG4gICAgICAgIGNvcHlUZXh0QXJlYS5zdHlsZS50b3AgPSAnMCc7XHJcbiAgICAgICAgY29weVRleHRBcmVhLnN0eWxlLmNsaXAgPSAncmVjdCgwLCAwLCAwLCAwKSc7XHJcbiAgICAgICAgY29weVRleHRBcmVhLnN0eWxlLndoaXRlU3BhY2UgPSAncHJlJztcclxuICAgICAgICBjb3B5VGV4dEFyZWEuc3R5bGUud2Via2l0VXNlclNlbGVjdCA9ICd0ZXh0JztcclxuICAgICAgICBjb3B5VGV4dEFyZWEuc3R5bGUhLk1velVzZXJTZWxlY3QgPSAndGV4dCc7XHJcbiAgICAgICAgY29weVRleHRBcmVhLnN0eWxlLm1zVXNlclNlbGVjdCA9ICd0ZXh0JztcclxuICAgICAgICBjb3B5VGV4dEFyZWEuc3R5bGUudXNlclNlbGVjdCA9ICd0ZXh0JztcclxuICAgICAgICB0aGlzLmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29weVRleHRBcmVhKTtcclxuICAgICAgICBjb3B5VGV4dEFyZWEudmFsdWUgPSB0ZXh0O1xyXG4gICAgICAgIGNvcHlUZXh0QXJlYS5zZWxlY3QoKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3VjY2Vzc2Z1bCA9IHRoaXMuZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcclxuICAgICAgICBpZiAoIXN1Y2Nlc3NmdWwpIHtcclxuICAgICAgICAgIHJlamVjdCh0ZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzb2x2ZSh0ZXh0KTtcclxuICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICBpZiAoY29weVRleHRBcmVhKSB7XHJcbiAgICAgICAgICB0aGlzLmRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY29weVRleHRBcmVhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=
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
var NzCopyToClipboardService = /** @class */ (function () {
    // tslint:disable-next-line:no-any
    function NzCopyToClipboardService(document) {
        this.document = document;
    }
    NzCopyToClipboardService.prototype.copy = function (text) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var copyTextArea = null;
            try {
                // tslint:disable-next-line no-any
                copyTextArea = _this.document.createElement('textarea');
                copyTextArea.style.all = 'unset';
                copyTextArea.style.position = 'fixed';
                copyTextArea.style.top = '0';
                copyTextArea.style.clip = 'rect(0, 0, 0, 0)';
                copyTextArea.style.whiteSpace = 'pre';
                copyTextArea.style.webkitUserSelect = 'text';
                copyTextArea.style.MozUserSelect = 'text';
                copyTextArea.style.msUserSelect = 'text';
                copyTextArea.style.userSelect = 'text';
                _this.document.body.appendChild(copyTextArea);
                copyTextArea.value = text;
                copyTextArea.select();
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
        });
    };
    /** @nocollapse */ NzCopyToClipboardService.ɵfac = function NzCopyToClipboardService_Factory(t) { return new (t || NzCopyToClipboardService)(i0.ɵɵinject(DOCUMENT)); };
    /** @nocollapse */ NzCopyToClipboardService.ɵprov = i0.ɵɵdefineInjectable({ token: NzCopyToClipboardService, factory: NzCopyToClipboardService.ɵfac, providedIn: NzCopyToClipboardServiceModule });
    return NzCopyToClipboardService;
}());
export { NzCopyToClipboardService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzCopyToClipboardService, [{
        type: Injectable,
        args: [{
                providedIn: NzCopyToClipboardServiceModule
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29weS10by1jbGlwYm9hcmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL256LWNvcHktdG8tY2xpcGJvYXJkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDOztBQUV2RjtJQUlFLGtDQUFrQztJQUNsQyxrQ0FBc0MsUUFBYTtRQUFiLGFBQVEsR0FBUixRQUFRLENBQUs7SUFBRyxDQUFDO0lBRXZELHVDQUFJLEdBQUosVUFBSyxJQUFZO1FBQWpCLGlCQThCQztRQTdCQyxPQUFPLElBQUksT0FBTyxDQUFTLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDekMsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3hCLElBQUk7Z0JBQ0Ysa0NBQWtDO2dCQUNsQyxZQUFZLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFRLENBQUM7Z0JBQzlELFlBQVksQ0FBQyxLQUFNLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQztnQkFDbEMsWUFBWSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO2dCQUN0QyxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7Z0JBQzdCLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLGtCQUFrQixDQUFDO2dCQUM3QyxZQUFZLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7Z0JBQ3RDLFlBQVksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDO2dCQUM3QyxZQUFZLENBQUMsS0FBTSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUM7Z0JBQzNDLFlBQVksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztnQkFDekMsWUFBWSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO2dCQUN2QyxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzdDLFlBQVksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2dCQUMxQixZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBRXRCLElBQU0sVUFBVSxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNyRCxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDZDtnQkFDRCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDZjtvQkFBUztnQkFDUixJQUFJLFlBQVksRUFBRTtvQkFDaEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO2lCQUM5QzthQUNGO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO29HQWxDVSx3QkFBd0IsY0FFZixRQUFRO29FQUZqQix3QkFBd0IsV0FBeEIsd0JBQXdCLG1CQUZ2Qiw4QkFBOEI7bUNBYjVDO0NBa0RDLEFBdENELElBc0NDO1NBbkNZLHdCQUF3QjtrREFBeEIsd0JBQXdCO2NBSHBDLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsOEJBQThCO2FBQzNDOztzQkFHYyxNQUFNO3VCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE56Q29weVRvQ2xpcGJvYXJkU2VydmljZU1vZHVsZSB9IGZyb20gJy4vbnotY29weS10by1jbGlwYm9hcmQuc2VydmljZS5tb2R1bGUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46IE56Q29weVRvQ2xpcGJvYXJkU2VydmljZU1vZHVsZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpDb3B5VG9DbGlwYm9hcmRTZXJ2aWNlIHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55KSB7fVxyXG5cclxuICBjb3B5KHRleHQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSwgcmVqZWN0KTogdm9pZCA9PiB7XHJcbiAgICAgIGxldCBjb3B5VGV4dEFyZWEgPSBudWxsO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1hbnlcclxuICAgICAgICBjb3B5VGV4dEFyZWEgPSB0aGlzLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJykgYXMgYW55O1xyXG4gICAgICAgIGNvcHlUZXh0QXJlYS5zdHlsZSEuYWxsID0gJ3Vuc2V0JztcclxuICAgICAgICBjb3B5VGV4dEFyZWEuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xyXG4gICAgICAgIGNvcHlUZXh0QXJlYS5zdHlsZS50b3AgPSAnMCc7XHJcbiAgICAgICAgY29weVRleHRBcmVhLnN0eWxlLmNsaXAgPSAncmVjdCgwLCAwLCAwLCAwKSc7XHJcbiAgICAgICAgY29weVRleHRBcmVhLnN0eWxlLndoaXRlU3BhY2UgPSAncHJlJztcclxuICAgICAgICBjb3B5VGV4dEFyZWEuc3R5bGUud2Via2l0VXNlclNlbGVjdCA9ICd0ZXh0JztcclxuICAgICAgICBjb3B5VGV4dEFyZWEuc3R5bGUhLk1velVzZXJTZWxlY3QgPSAndGV4dCc7XHJcbiAgICAgICAgY29weVRleHRBcmVhLnN0eWxlLm1zVXNlclNlbGVjdCA9ICd0ZXh0JztcclxuICAgICAgICBjb3B5VGV4dEFyZWEuc3R5bGUudXNlclNlbGVjdCA9ICd0ZXh0JztcclxuICAgICAgICB0aGlzLmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29weVRleHRBcmVhKTtcclxuICAgICAgICBjb3B5VGV4dEFyZWEudmFsdWUgPSB0ZXh0O1xyXG4gICAgICAgIGNvcHlUZXh0QXJlYS5zZWxlY3QoKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3VjY2Vzc2Z1bCA9IHRoaXMuZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcclxuICAgICAgICBpZiAoIXN1Y2Nlc3NmdWwpIHtcclxuICAgICAgICAgIHJlamVjdCh0ZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzb2x2ZSh0ZXh0KTtcclxuICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICBpZiAoY29weVRleHRBcmVhKSB7XHJcbiAgICAgICAgICB0aGlzLmRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY29weVRleHRBcmVhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export class NzVirtualScrollDirective {
    /* tslint:disable-next-line:no-any */
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
/** @nocollapse */ NzVirtualScrollDirective.ɵfac = function NzVirtualScrollDirective_Factory(t) { return new (t || NzVirtualScrollDirective)(i0.ɵɵdirectiveInject(i0.TemplateRef)); };
/** @nocollapse */ NzVirtualScrollDirective.ɵdir = i0.ɵɵdefineDirective({ type: NzVirtualScrollDirective, selectors: [["", "nz-virtual-scroll", ""]], exportAs: ["nzVirtualScroll"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzVirtualScrollDirective, [{
        type: Directive,
        args: [{
                selector: '[nz-virtual-scroll]',
                exportAs: 'nzVirtualScroll'
            }]
    }], function () { return [{ type: i0.TemplateRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdmlydHVhbC1zY3JvbGwuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90YWJsZS8iLCJzb3VyY2VzIjpbIm56LXZpcnR1YWwtc2Nyb2xsLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFNdkQsTUFBTSxPQUFPLHdCQUF3QjtJQUNuQyxxQ0FBcUM7SUFDckMsWUFBbUIsV0FBMkQ7UUFBM0QsZ0JBQVcsR0FBWCxXQUFXLENBQWdEO0lBQUcsQ0FBQzs7Z0dBRnZFLHdCQUF3Qjs2REFBeEIsd0JBQXdCO2tEQUF4Qix3QkFBd0I7Y0FKcEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFFBQVEsRUFBRSxpQkFBaUI7YUFDNUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IERpcmVjdGl2ZSwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW256LXZpcnR1YWwtc2Nyb2xsXScsXHJcbiAgZXhwb3J0QXM6ICduelZpcnR1YWxTY3JvbGwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelZpcnR1YWxTY3JvbGxEaXJlY3RpdmUge1xyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBhbnk7IGluZGV4OiBudW1iZXIgfT4pIHt9XHJcbn1cclxuIl19
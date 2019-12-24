/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzResizableDirective } from './nz-resizable.directive';
import { NzResizeHandleComponent } from './nz-resize-handle.component';
import { NzResizeHandlesComponent } from './nz-resize-handles.component';
import * as i0 from "@angular/core";
var NzResizableModule = /** @class */ (function () {
    function NzResizableModule() {
    }
    /** @nocollapse */ NzResizableModule.ɵmod = i0.ɵɵdefineNgModule({ type: NzResizableModule });
    /** @nocollapse */ NzResizableModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NzResizableModule_Factory(t) { return new (t || NzResizableModule)(); }, imports: [[CommonModule]] });
    return NzResizableModule;
}());
export { NzResizableModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NzResizableModule, { declarations: [NzResizableDirective, NzResizeHandleComponent, NzResizeHandlesComponent], imports: [CommonModule], exports: [NzResizableDirective, NzResizeHandleComponent, NzResizeHandlesComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzResizableModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [NzResizableDirective, NzResizeHandleComponent, NzResizeHandlesComponent],
                exports: [NzResizableDirective, NzResizeHandleComponent, NzResizeHandlesComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmVzaXphYmxlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvcmVzaXphYmxlLyIsInNvdXJjZXMiOlsibnotcmVzaXphYmxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7QUFFekU7SUFBQTtLQUtpQzt5REFBcEIsaUJBQWlCO3FIQUFqQixpQkFBaUIsa0JBSm5CLENBQUMsWUFBWSxDQUFDOzRCQWhCekI7Q0FvQmlDLEFBTGpDLElBS2lDO1NBQXBCLGlCQUFpQjt3RkFBakIsaUJBQWlCLG1CQUhiLG9CQUFvQixFQUFFLHVCQUF1QixFQUFFLHdCQUF3QixhQUQ1RSxZQUFZLGFBRVosb0JBQW9CLEVBQUUsdUJBQXVCLEVBQUUsd0JBQXdCO2tEQUV0RSxpQkFBaUI7Y0FMN0IsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsWUFBWSxFQUFFLENBQUMsb0JBQW9CLEVBQUUsdUJBQXVCLEVBQUUsd0JBQXdCLENBQUM7Z0JBQ3ZGLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixFQUFFLHVCQUF1QixFQUFFLHdCQUF3QixDQUFDO2FBQ25GIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpSZXNpemFibGVEaXJlY3RpdmUgfSBmcm9tICcuL256LXJlc2l6YWJsZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBOelJlc2l6ZUhhbmRsZUNvbXBvbmVudCB9IGZyb20gJy4vbnotcmVzaXplLWhhbmRsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOelJlc2l6ZUhhbmRsZXNDb21wb25lbnQgfSBmcm9tICcuL256LXJlc2l6ZS1oYW5kbGVzLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW056UmVzaXphYmxlRGlyZWN0aXZlLCBOelJlc2l6ZUhhbmRsZUNvbXBvbmVudCwgTnpSZXNpemVIYW5kbGVzQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbTnpSZXNpemFibGVEaXJlY3RpdmUsIE56UmVzaXplSGFuZGxlQ29tcG9uZW50LCBOelJlc2l6ZUhhbmRsZXNDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelJlc2l6YWJsZU1vZHVsZSB7fVxyXG4iXX0=
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
export class NzResizableModule {
}
/** @nocollapse */ NzResizableModule.ɵmod = i0.ɵɵdefineNgModule({ type: NzResizableModule });
/** @nocollapse */ NzResizableModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NzResizableModule_Factory(t) { return new (t || NzResizableModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NzResizableModule, { declarations: [NzResizableDirective, NzResizeHandleComponent, NzResizeHandlesComponent], imports: [CommonModule], exports: [NzResizableDirective, NzResizeHandleComponent, NzResizeHandlesComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzResizableModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [NzResizableDirective, NzResizeHandleComponent, NzResizeHandlesComponent],
                exports: [NzResizableDirective, NzResizeHandleComponent, NzResizeHandlesComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmVzaXphYmxlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvcmVzaXphYmxlLyIsInNvdXJjZXMiOlsibnotcmVzaXphYmxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7QUFPekUsTUFBTSxPQUFPLGlCQUFpQjs7cURBQWpCLGlCQUFpQjtpSEFBakIsaUJBQWlCLGtCQUpuQixDQUFDLFlBQVksQ0FBQzt3RkFJWixpQkFBaUIsbUJBSGIsb0JBQW9CLEVBQUUsdUJBQXVCLEVBQUUsd0JBQXdCLGFBRDVFLFlBQVksYUFFWixvQkFBb0IsRUFBRSx1QkFBdUIsRUFBRSx3QkFBd0I7a0RBRXRFLGlCQUFpQjtjQUw3QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUN2QixZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSx1QkFBdUIsRUFBRSx3QkFBd0IsQ0FBQztnQkFDdkYsT0FBTyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsdUJBQXVCLEVBQUUsd0JBQXdCLENBQUM7YUFDbkYiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOelJlc2l6YWJsZURpcmVjdGl2ZSB9IGZyb20gJy4vbnotcmVzaXphYmxlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE56UmVzaXplSGFuZGxlQ29tcG9uZW50IH0gZnJvbSAnLi9uei1yZXNpemUtaGFuZGxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56UmVzaXplSGFuZGxlc0NvbXBvbmVudCB9IGZyb20gJy4vbnotcmVzaXplLWhhbmRsZXMuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbTnpSZXNpemFibGVEaXJlY3RpdmUsIE56UmVzaXplSGFuZGxlQ29tcG9uZW50LCBOelJlc2l6ZUhhbmRsZXNDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtOelJlc2l6YWJsZURpcmVjdGl2ZSwgTnpSZXNpemVIYW5kbGVDb21wb25lbnQsIE56UmVzaXplSGFuZGxlc0NvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56UmVzaXphYmxlTW9kdWxlIHt9XHJcbiJdfQ==
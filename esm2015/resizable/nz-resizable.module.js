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
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzResizableDirective } from './nz-resizable.directive';
import { NzResizeHandleComponent } from './nz-resize-handle.component';
import { NzResizeHandlesComponent } from './nz-resize-handles.component';
import * as ɵngcc0 from '@angular/core';
export class NzResizableModule {
}
NzResizableModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzResizableModule });
NzResizableModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzResizableModule_Factory(t) { return new (t || NzResizableModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzResizableModule, { declarations: function () { return [NzResizableDirective, NzResizeHandleComponent, NzResizeHandlesComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [NzResizableDirective, NzResizeHandleComponent, NzResizeHandlesComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzResizableModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [NzResizableDirective, NzResizeHandleComponent, NzResizeHandlesComponent],
                exports: [NzResizableDirective, NzResizeHandleComponent, NzResizeHandlesComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmVzaXphYmxlLm1vZHVsZS5qcyIsInNvdXJjZXMiOlsibmc6L25nLXpvcnJvLWFudGQvcmVzaXphYmxlL256LXJlc2l6YWJsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7QUFPekUsTUFBTSxPQUFPLGlCQUFpQjs7O0NBQzlCLDhDQU5DLFFBQVEsU0FBQyxrQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsa0JBQ3ZCLFlBQVksRUFBRSxDQUFDLG9CQUFvQixFQUFFO1dBQXVCLEVBQUUsd0JBQXdCLENBQUMsa0JBQ3ZGLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixFQUFFLHVCQUF1QixFQUFFLHdCQUF3QixDQUFDLGNBQ25GOzs7Ozs7OzswQkFDSSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56UmVzaXphYmxlRGlyZWN0aXZlIH0gZnJvbSAnLi9uei1yZXNpemFibGUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTnpSZXNpemVIYW5kbGVDb21wb25lbnQgfSBmcm9tICcuL256LXJlc2l6ZS1oYW5kbGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpSZXNpemVIYW5kbGVzQ29tcG9uZW50IH0gZnJvbSAnLi9uei1yZXNpemUtaGFuZGxlcy5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtOelJlc2l6YWJsZURpcmVjdGl2ZSwgTnpSZXNpemVIYW5kbGVDb21wb25lbnQsIE56UmVzaXplSGFuZGxlc0NvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW056UmVzaXphYmxlRGlyZWN0aXZlLCBOelJlc2l6ZUhhbmRsZUNvbXBvbmVudCwgTnpSZXNpemVIYW5kbGVzQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpSZXNpemFibGVNb2R1bGUge31cclxuIl19
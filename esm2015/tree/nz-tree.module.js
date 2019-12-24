/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzAddOnModule, NzHighlightModule, NzNoAnimationModule } from 'ng-zorro-antd/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTreeNodeComponent } from './nz-tree-node.component';
import { NzTreeComponent } from './nz-tree.component';
import * as i0 from "@angular/core";
export class NzTreeModule {
}
/** @nocollapse */ NzTreeModule.ɵmod = i0.ɵɵdefineNgModule({ type: NzTreeModule });
/** @nocollapse */ NzTreeModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NzTreeModule_Factory(t) { return new (t || NzTreeModule)(); }, imports: [[CommonModule, NzAddOnModule, NzIconModule, NzNoAnimationModule, NzHighlightModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NzTreeModule, { declarations: [NzTreeComponent, NzTreeNodeComponent], imports: [CommonModule, NzAddOnModule, NzIconModule, NzNoAnimationModule, NzHighlightModule], exports: [NzTreeComponent, NzTreeNodeComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzTreeModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NzAddOnModule, NzIconModule, NzNoAnimationModule, NzHighlightModule],
                declarations: [NzTreeComponent, NzTreeNodeComponent],
                exports: [NzTreeComponent, NzTreeNodeComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3RyZWUvIiwic291cmNlcyI6WyJuei10cmVlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLGlCQUFpQixFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDM0YsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFPdEQsTUFBTSxPQUFPLFlBQVk7O2dEQUFaLFlBQVk7dUdBQVosWUFBWSxrQkFKZCxDQUFDLFlBQVksRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixFQUFFLGlCQUFpQixDQUFDO3dGQUlqRixZQUFZLG1CQUhSLGVBQWUsRUFBRSxtQkFBbUIsYUFEekMsWUFBWSxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsbUJBQW1CLEVBQUUsaUJBQWlCLGFBRWpGLGVBQWUsRUFBRSxtQkFBbUI7a0RBRW5DLFlBQVk7Y0FMeEIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixFQUFFLGlCQUFpQixDQUFDO2dCQUM1RixZQUFZLEVBQUUsQ0FBQyxlQUFlLEVBQUUsbUJBQW1CLENBQUM7Z0JBQ3BELE9BQU8sRUFBRSxDQUFDLGVBQWUsRUFBRSxtQkFBbUIsQ0FBQzthQUNoRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56QWRkT25Nb2R1bGUsIE56SGlnaGxpZ2h0TW9kdWxlLCBOek5vQW5pbWF0aW9uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcclxuXHJcbmltcG9ydCB7IE56VHJlZU5vZGVDb21wb25lbnQgfSBmcm9tICcuL256LXRyZWUtbm9kZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOelRyZWVDb21wb25lbnQgfSBmcm9tICcuL256LXRyZWUuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTnpBZGRPbk1vZHVsZSwgTnpJY29uTW9kdWxlLCBOek5vQW5pbWF0aW9uTW9kdWxlLCBOekhpZ2hsaWdodE1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbTnpUcmVlQ29tcG9uZW50LCBOelRyZWVOb2RlQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbTnpUcmVlQ29tcG9uZW50LCBOelRyZWVOb2RlQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpUcmVlTW9kdWxlIHt9XHJcbiJdfQ==
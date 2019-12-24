/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzAddOnModule } from 'ng-zorro-antd/core';
import { NzCommentActionComponent, NzCommentActionHostDirective, NzCommentAvatarDirective, NzCommentContentDirective } from './nz-comment-cells';
import { NzCommentComponent } from './nz-comment.component';
import * as i0 from "@angular/core";
const NZ_COMMENT_CELLS = [NzCommentAvatarDirective, NzCommentContentDirective, NzCommentActionComponent, NzCommentActionHostDirective];
export class NzCommentModule {
}
/** @nocollapse */ NzCommentModule.ɵmod = i0.ɵɵdefineNgModule({ type: NzCommentModule });
/** @nocollapse */ NzCommentModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NzCommentModule_Factory(t) { return new (t || NzCommentModule)(); }, imports: [[CommonModule, NzAddOnModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NzCommentModule, { declarations: [NzCommentComponent,
        NzCommentAvatarDirective, NzCommentContentDirective, NzCommentActionComponent, NzCommentActionHostDirective], imports: [CommonModule, NzAddOnModule], exports: [NzCommentComponent,
        NzCommentAvatarDirective, NzCommentContentDirective, NzCommentActionComponent, NzCommentActionHostDirective] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzCommentModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NzAddOnModule],
                exports: [NzCommentComponent, ...NZ_COMMENT_CELLS],
                declarations: [NzCommentComponent, ...NZ_COMMENT_CELLS]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29tbWVudC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvbW1lbnQvIiwic291cmNlcyI6WyJuei1jb21tZW50Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbkQsT0FBTyxFQUNMLHdCQUF3QixFQUN4Qiw0QkFBNEIsRUFDNUIsd0JBQXdCLEVBQ3hCLHlCQUF5QixFQUMxQixNQUFNLG9CQUFvQixDQUFDO0FBQzVCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUU1RCxNQUFNLGdCQUFnQixHQUFHLENBQUMsd0JBQXdCLEVBQUUseUJBQXlCLEVBQUUsd0JBQXdCLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztBQU92SSxNQUFNLE9BQU8sZUFBZTs7bURBQWYsZUFBZTs2R0FBZixlQUFlLGtCQUpqQixDQUFDLFlBQVksRUFBRSxhQUFhLENBQUM7d0ZBSTNCLGVBQWUsbUJBRlgsa0JBQWtCO1FBTFQsd0JBQXdCLEVBQUUseUJBQXlCLEVBQUUsd0JBQXdCLEVBQUUsNEJBQTRCLGFBR3pILFlBQVksRUFBRSxhQUFhLGFBQzNCLGtCQUFrQjtRQUpKLHdCQUF3QixFQUFFLHlCQUF5QixFQUFFLHdCQUF3QixFQUFFLDRCQUE0QjtrREFPeEgsZUFBZTtjQUwzQixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQztnQkFDdEMsT0FBTyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxnQkFBZ0IsQ0FBQztnQkFDbEQsWUFBWSxFQUFFLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxnQkFBZ0IsQ0FBQzthQUN4RCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56QWRkT25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtcclxuICBOekNvbW1lbnRBY3Rpb25Db21wb25lbnQsXHJcbiAgTnpDb21tZW50QWN0aW9uSG9zdERpcmVjdGl2ZSxcclxuICBOekNvbW1lbnRBdmF0YXJEaXJlY3RpdmUsXHJcbiAgTnpDb21tZW50Q29udGVudERpcmVjdGl2ZVxyXG59IGZyb20gJy4vbnotY29tbWVudC1jZWxscyc7XHJcbmltcG9ydCB7IE56Q29tbWVudENvbXBvbmVudCB9IGZyb20gJy4vbnotY29tbWVudC5jb21wb25lbnQnO1xyXG5cclxuY29uc3QgTlpfQ09NTUVOVF9DRUxMUyA9IFtOekNvbW1lbnRBdmF0YXJEaXJlY3RpdmUsIE56Q29tbWVudENvbnRlbnREaXJlY3RpdmUsIE56Q29tbWVudEFjdGlvbkNvbXBvbmVudCwgTnpDb21tZW50QWN0aW9uSG9zdERpcmVjdGl2ZV07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE56QWRkT25Nb2R1bGVdLFxyXG4gIGV4cG9ydHM6IFtOekNvbW1lbnRDb21wb25lbnQsIC4uLk5aX0NPTU1FTlRfQ0VMTFNdLFxyXG4gIGRlY2xhcmF0aW9uczogW056Q29tbWVudENvbXBvbmVudCwgLi4uTlpfQ09NTUVOVF9DRUxMU11cclxufSlcclxuZXhwb3J0IGNsYXNzIE56Q29tbWVudE1vZHVsZSB7fVxyXG4iXX0=
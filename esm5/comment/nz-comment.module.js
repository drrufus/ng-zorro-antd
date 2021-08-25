/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
/** @type {?} */
import * as ɵngcc0 from '@angular/core';
var NZ_COMMENT_CELLS = [
    NzCommentAvatarDirective,
    NzCommentContentDirective,
    NzCommentActionComponent,
    NzCommentActionHostDirective
];
var NzCommentModule = /** @class */ (function () {
    function NzCommentModule() {
    }
NzCommentModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzCommentModule });
NzCommentModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzCommentModule_Factory(t) { return new (t || NzCommentModule)(); }, imports: [[CommonModule, NzAddOnModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzCommentModule, { declarations: function () { return [NzCommentComponent,
        NzCommentAvatarDirective,
        NzCommentContentDirective,
        NzCommentActionComponent,
        NzCommentActionHostDirective]; }, imports: function () { return [CommonModule, NzAddOnModule]; }, exports: function () { return [NzCommentComponent,
        NzCommentAvatarDirective,
        NzCommentContentDirective,
        NzCommentActionComponent,
        NzCommentActionHostDirective]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCommentModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NzAddOnModule],
                exports: tslib_1.__spread([NzCommentComponent], NZ_COMMENT_CELLS),
                declarations: tslib_1.__spread([NzCommentComponent], NZ_COMMENT_CELLS)
            }]
    }], function () { return []; }, null); })();
    return NzCommentModule;
}());
export { NzCommentModule };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29tbWVudC5tb2R1bGUuanMiLCJzb3VyY2VzIjpbIm5nOi9uZy16b3Jyby1hbnRkL2NvbW1lbnQvbnotY29tbWVudC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRW5ELE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsNEJBQTRCLEVBQzVCLHdCQUF3QixFQUN4Qix5QkFBeUIsRUFDMUIsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7O0FBRTVDLElBQVYsZ0JBQWdCLEdBQUc7SUFDdkIsd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsNEJBQTRCO0NBQzdCO0FBRUQ7SUFBQTtJQUs4QixDQUFDO21EQUw5QixRQUFRLFNBQUM7ZUFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDLHNCQUN0QyxPQUFPLG9CQUFHLGtCQUFrQixHQUFLLGdCQUFnQixDQUFDLHNCQUNsRCxZQUFZO2FBQUcsa0JBQWtCLEdBQUssZ0JBQWdCLENBQUMsa0JBQ3hEOzs7Ozs7Ozs7Ozs7Ozs7O2dEQUNRO0lBQXFCLHNCQUFDO0NBQUEsQUFML0IsSUFLK0I7U0FBbEIsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56QWRkT25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtcclxuICBOekNvbW1lbnRBY3Rpb25Db21wb25lbnQsXHJcbiAgTnpDb21tZW50QWN0aW9uSG9zdERpcmVjdGl2ZSxcclxuICBOekNvbW1lbnRBdmF0YXJEaXJlY3RpdmUsXHJcbiAgTnpDb21tZW50Q29udGVudERpcmVjdGl2ZVxyXG59IGZyb20gJy4vbnotY29tbWVudC1jZWxscyc7XHJcbmltcG9ydCB7IE56Q29tbWVudENvbXBvbmVudCB9IGZyb20gJy4vbnotY29tbWVudC5jb21wb25lbnQnO1xyXG5cclxuY29uc3QgTlpfQ09NTUVOVF9DRUxMUyA9IFtcclxuICBOekNvbW1lbnRBdmF0YXJEaXJlY3RpdmUsXHJcbiAgTnpDb21tZW50Q29udGVudERpcmVjdGl2ZSxcclxuICBOekNvbW1lbnRBY3Rpb25Db21wb25lbnQsXHJcbiAgTnpDb21tZW50QWN0aW9uSG9zdERpcmVjdGl2ZVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBOekFkZE9uTW9kdWxlXSxcclxuICBleHBvcnRzOiBbTnpDb21tZW50Q29tcG9uZW50LCAuLi5OWl9DT01NRU5UX0NFTExTXSxcclxuICBkZWNsYXJhdGlvbnM6IFtOekNvbW1lbnRDb21wb25lbnQsIC4uLk5aX0NPTU1FTlRfQ0VMTFNdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekNvbW1lbnRNb2R1bGUge31cclxuIl19
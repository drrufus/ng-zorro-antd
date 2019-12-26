/**
 * @fileoverview added by tsickle
 * Generated from: nz-comment.module.ts
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
var NZ_COMMENT_CELLS = [
    NzCommentAvatarDirective,
    NzCommentContentDirective,
    NzCommentActionComponent,
    NzCommentActionHostDirective
];
var NzCommentModule = /** @class */ (function () {
    function NzCommentModule() {
    }
    NzCommentModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, NzAddOnModule],
                    exports: tslib_1.__spread([NzCommentComponent], NZ_COMMENT_CELLS),
                    declarations: tslib_1.__spread([NzCommentComponent], NZ_COMMENT_CELLS)
                },] }
    ];
    return NzCommentModule;
}());
export { NzCommentModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29tbWVudC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvbW1lbnQvIiwic291cmNlcyI6WyJuei1jb21tZW50Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRW5ELE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsNEJBQTRCLEVBQzVCLHdCQUF3QixFQUN4Qix5QkFBeUIsRUFDMUIsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7SUFFdEQsZ0JBQWdCLEdBQUc7SUFDdkIsd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsNEJBQTRCO0NBQzdCO0FBRUQ7SUFBQTtJQUs4QixDQUFDOztnQkFMOUIsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxhQUFhLENBQUM7b0JBQ3RDLE9BQU8sb0JBQUcsa0JBQWtCLEdBQUssZ0JBQWdCLENBQUM7b0JBQ2xELFlBQVksb0JBQUcsa0JBQWtCLEdBQUssZ0JBQWdCLENBQUM7aUJBQ3hEOztJQUM2QixzQkFBQztDQUFBLEFBTC9CLElBSytCO1NBQWxCLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOekFkZE9uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7XHJcbiAgTnpDb21tZW50QWN0aW9uQ29tcG9uZW50LFxyXG4gIE56Q29tbWVudEFjdGlvbkhvc3REaXJlY3RpdmUsXHJcbiAgTnpDb21tZW50QXZhdGFyRGlyZWN0aXZlLFxyXG4gIE56Q29tbWVudENvbnRlbnREaXJlY3RpdmVcclxufSBmcm9tICcuL256LWNvbW1lbnQtY2VsbHMnO1xyXG5pbXBvcnQgeyBOekNvbW1lbnRDb21wb25lbnQgfSBmcm9tICcuL256LWNvbW1lbnQuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IE5aX0NPTU1FTlRfQ0VMTFMgPSBbXHJcbiAgTnpDb21tZW50QXZhdGFyRGlyZWN0aXZlLFxyXG4gIE56Q29tbWVudENvbnRlbnREaXJlY3RpdmUsXHJcbiAgTnpDb21tZW50QWN0aW9uQ29tcG9uZW50LFxyXG4gIE56Q29tbWVudEFjdGlvbkhvc3REaXJlY3RpdmVcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTnpBZGRPbk1vZHVsZV0sXHJcbiAgZXhwb3J0czogW056Q29tbWVudENvbXBvbmVudCwgLi4uTlpfQ09NTUVOVF9DRUxMU10sXHJcbiAgZGVjbGFyYXRpb25zOiBbTnpDb21tZW50Q29tcG9uZW50LCAuLi5OWl9DT01NRU5UX0NFTExTXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpDb21tZW50TW9kdWxlIHt9XHJcbiJdfQ==
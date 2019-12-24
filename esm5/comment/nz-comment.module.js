import { __read, __spread } from "tslib";
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
var NZ_COMMENT_CELLS = [NzCommentAvatarDirective, NzCommentContentDirective, NzCommentActionComponent, NzCommentActionHostDirective];
var NzCommentModule = /** @class */ (function () {
    function NzCommentModule() {
    }
    /** @nocollapse */ NzCommentModule.ɵmod = i0.ɵɵdefineNgModule({ type: NzCommentModule });
    /** @nocollapse */ NzCommentModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NzCommentModule_Factory(t) { return new (t || NzCommentModule)(); }, imports: [[CommonModule, NzAddOnModule]] });
    return NzCommentModule;
}());
export { NzCommentModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NzCommentModule, { declarations: [NzCommentComponent,
        NzCommentAvatarDirective, NzCommentContentDirective, NzCommentActionComponent, NzCommentActionHostDirective], imports: [CommonModule, NzAddOnModule], exports: [NzCommentComponent,
        NzCommentAvatarDirective, NzCommentContentDirective, NzCommentActionComponent, NzCommentActionHostDirective] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzCommentModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NzAddOnModule],
                exports: __spread([NzCommentComponent], NZ_COMMENT_CELLS),
                declarations: __spread([NzCommentComponent], NZ_COMMENT_CELLS)
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29tbWVudC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvbW1lbnQvIiwic291cmNlcyI6WyJuei1jb21tZW50Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRW5ELE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsNEJBQTRCLEVBQzVCLHdCQUF3QixFQUN4Qix5QkFBeUIsRUFDMUIsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFFNUQsSUFBTSxnQkFBZ0IsR0FBRyxDQUFDLHdCQUF3QixFQUFFLHlCQUF5QixFQUFFLHdCQUF3QixFQUFFLDRCQUE0QixDQUFDLENBQUM7QUFFdkk7SUFBQTtLQUsrQjt1REFBbEIsZUFBZTtpSEFBZixlQUFlLGtCQUpqQixDQUFDLFlBQVksRUFBRSxhQUFhLENBQUM7MEJBeEJ4QztDQTRCK0IsQUFML0IsSUFLK0I7U0FBbEIsZUFBZTt3RkFBZixlQUFlLG1CQUZYLGtCQUFrQjtRQUxULHdCQUF3QixFQUFFLHlCQUF5QixFQUFFLHdCQUF3QixFQUFFLDRCQUE0QixhQUd6SCxZQUFZLEVBQUUsYUFBYSxhQUMzQixrQkFBa0I7UUFKSix3QkFBd0IsRUFBRSx5QkFBeUIsRUFBRSx3QkFBd0IsRUFBRSw0QkFBNEI7a0RBT3hILGVBQWU7Y0FMM0IsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxhQUFhLENBQUM7Z0JBQ3RDLE9BQU8sWUFBRyxrQkFBa0IsR0FBSyxnQkFBZ0IsQ0FBQztnQkFDbEQsWUFBWSxZQUFHLGtCQUFrQixHQUFLLGdCQUFnQixDQUFDO2FBQ3hEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpBZGRPbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQge1xyXG4gIE56Q29tbWVudEFjdGlvbkNvbXBvbmVudCxcclxuICBOekNvbW1lbnRBY3Rpb25Ib3N0RGlyZWN0aXZlLFxyXG4gIE56Q29tbWVudEF2YXRhckRpcmVjdGl2ZSxcclxuICBOekNvbW1lbnRDb250ZW50RGlyZWN0aXZlXHJcbn0gZnJvbSAnLi9uei1jb21tZW50LWNlbGxzJztcclxuaW1wb3J0IHsgTnpDb21tZW50Q29tcG9uZW50IH0gZnJvbSAnLi9uei1jb21tZW50LmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBOWl9DT01NRU5UX0NFTExTID0gW056Q29tbWVudEF2YXRhckRpcmVjdGl2ZSwgTnpDb21tZW50Q29udGVudERpcmVjdGl2ZSwgTnpDb21tZW50QWN0aW9uQ29tcG9uZW50LCBOekNvbW1lbnRBY3Rpb25Ib3N0RGlyZWN0aXZlXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTnpBZGRPbk1vZHVsZV0sXHJcbiAgZXhwb3J0czogW056Q29tbWVudENvbXBvbmVudCwgLi4uTlpfQ09NTUVOVF9DRUxMU10sXHJcbiAgZGVjbGFyYXRpb25zOiBbTnpDb21tZW50Q29tcG9uZW50LCAuLi5OWl9DT01NRU5UX0NFTExTXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpDb21tZW50TW9kdWxlIHt9XHJcbiJdfQ==
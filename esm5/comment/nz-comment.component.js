/**
 * @fileoverview added by tsickle
 * Generated from: nz-comment.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ContentChildren, Input, QueryList, ViewEncapsulation } from '@angular/core';
import { NzCommentActionComponent as CommentAction } from './nz-comment-cells';
var NzCommentComponent = /** @class */ (function () {
    function NzCommentComponent() {
    }
    NzCommentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-comment',
                    exportAs: 'nzComment',
                    template: "<div class=\"ant-comment-inner\">\n  <div class=\"ant-comment-avatar\">\n    <ng-content select=\"nz-avatar[nz-comment-avatar]\"></ng-content>\n  </div>\n  <div class=\"ant-comment-content\">\n    <div class=\"ant-comment-content-author\">\n      <span *ngIf=\"nzAuthor\" class=\"ant-comment-content-author-name\">\n        <ng-container *nzStringTemplateOutlet=\"nzAuthor\">{{ nzAuthor }}</ng-container>\n      </span>\n      <span *ngIf=\"nzDatetime\" class=\"ant-comment-content-author-time\">\n        <ng-container *nzStringTemplateOutlet=\"nzDatetime\">{{ nzDatetime }}</ng-container>\n      </span>\n    </div>\n    <ng-content select=\"nz-comment-content\"></ng-content>\n    <ul class=\"ant-comment-actions\" *ngIf=\"actions?.length\">\n      <li *ngFor=\"let action of actions\">\n        <span><ng-template [nzCommentActionHost]=\"action.content\"></ng-template></span>\n      </li>\n    </ul>\n  </div>\n</div>\n<div class=\"ant-comment-nested\">\n  <ng-content></ng-content>\n</div>",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        class: 'ant-comment'
                    },
                    styles: ["\n      nz-comment {\n        display: block;\n      }\n\n      nz-comment-content {\n        display: block;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzCommentComponent.ctorParameters = function () { return []; };
    NzCommentComponent.propDecorators = {
        nzAuthor: [{ type: Input }],
        nzDatetime: [{ type: Input }],
        actions: [{ type: ContentChildren, args: [CommentAction,] }]
    };
    return NzCommentComponent;
}());
export { NzCommentComponent };
if (false) {
    /** @type {?} */
    NzCommentComponent.prototype.nzAuthor;
    /** @type {?} */
    NzCommentComponent.prototype.nzDatetime;
    /** @type {?} */
    NzCommentComponent.prototype.actions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29tbWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvbW1lbnQvIiwic291cmNlcyI6WyJuei1jb21tZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsS0FBSyxFQUNMLFNBQVMsRUFFVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHdCQUF3QixJQUFJLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRS9FO0lBMEJFO0lBQWUsQ0FBQzs7Z0JBMUJqQixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSxXQUFXO29CQUNyQiwrK0JBQTBDO29CQUMxQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLElBQUksRUFBRTt3QkFDSixLQUFLLEVBQUUsYUFBYTtxQkFDckI7NkJBRUMsOEhBUUM7aUJBRUo7Ozs7OzJCQUVFLEtBQUs7NkJBQ0wsS0FBSzswQkFFTCxlQUFlLFNBQUMsYUFBYTs7SUFFaEMseUJBQUM7Q0FBQSxBQTNCRCxJQTJCQztTQU5ZLGtCQUFrQjs7O0lBQzdCLHNDQUE4Qzs7SUFDOUMsd0NBQWdEOztJQUVoRCxxQ0FBa0UiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBJbnB1dCxcbiAgUXVlcnlMaXN0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56Q29tbWVudEFjdGlvbkNvbXBvbmVudCBhcyBDb21tZW50QWN0aW9uIH0gZnJvbSAnLi9uei1jb21tZW50LWNlbGxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotY29tbWVudCcsXG4gIGV4cG9ydEFzOiAnbnpDb21tZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL256LWNvbW1lbnQuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnYW50LWNvbW1lbnQnXG4gIH0sXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIG56LWNvbW1lbnQge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgbnotY29tbWVudC1jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgYFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE56Q29tbWVudENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIG56QXV0aG9yOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgbnpEYXRldGltZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgQENvbnRlbnRDaGlsZHJlbihDb21tZW50QWN0aW9uKSBhY3Rpb25zOiBRdWVyeUxpc3Q8Q29tbWVudEFjdGlvbj47XG4gIGNvbnN0cnVjdG9yKCkge31cbn1cbiJdfQ==
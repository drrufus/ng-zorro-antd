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
                    template: "<div class=\"ant-comment-inner\">\r\n  <div class=\"ant-comment-avatar\">\r\n    <ng-content select=\"nz-avatar[nz-comment-avatar]\"></ng-content>\r\n  </div>\r\n  <div class=\"ant-comment-content\">\r\n    <div class=\"ant-comment-content-author\">\r\n      <span *ngIf=\"nzAuthor\" class=\"ant-comment-content-author-name\">\r\n        <ng-container *nzStringTemplateOutlet=\"nzAuthor\">{{ nzAuthor }}</ng-container>\r\n      </span>\r\n      <span *ngIf=\"nzDatetime\" class=\"ant-comment-content-author-time\">\r\n        <ng-container *nzStringTemplateOutlet=\"nzDatetime\">{{ nzDatetime }}</ng-container>\r\n      </span>\r\n    </div>\r\n    <ng-content select=\"nz-comment-content\"></ng-content>\r\n    <ul class=\"ant-comment-actions\" *ngIf=\"actions?.length\">\r\n      <li *ngFor=\"let action of actions\">\r\n        <span><ng-template [nzCommentActionHost]=\"action.content\"></ng-template></span>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n<div class=\"ant-comment-nested\">\r\n  <ng-content></ng-content>\r\n</div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29tbWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvbW1lbnQvIiwic291cmNlcyI6WyJuei1jb21tZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsS0FBSyxFQUNMLFNBQVMsRUFFVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHdCQUF3QixJQUFJLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRS9FO0lBMEJFO0lBQWUsQ0FBQzs7Z0JBMUJqQixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSxXQUFXO29CQUNyQiw2aENBQTBDO29CQUMxQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLElBQUksRUFBRTt3QkFDSixLQUFLLEVBQUUsYUFBYTtxQkFDckI7NkJBRUMsOEhBUUM7aUJBRUo7Ozs7OzJCQUVFLEtBQUs7NkJBQ0wsS0FBSzswQkFFTCxlQUFlLFNBQUMsYUFBYTs7SUFFaEMseUJBQUM7Q0FBQSxBQTNCRCxJQTJCQztTQU5ZLGtCQUFrQjs7O0lBQzdCLHNDQUE4Qzs7SUFDOUMsd0NBQWdEOztJQUVoRCxxQ0FBa0UiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBJbnB1dCxcclxuICBRdWVyeUxpc3QsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56Q29tbWVudEFjdGlvbkNvbXBvbmVudCBhcyBDb21tZW50QWN0aW9uIH0gZnJvbSAnLi9uei1jb21tZW50LWNlbGxzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotY29tbWVudCcsXHJcbiAgZXhwb3J0QXM6ICduekNvbW1lbnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1jb21tZW50LmNvbXBvbmVudC5odG1sJyxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAnYW50LWNvbW1lbnQnXHJcbiAgfSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgbnotY29tbWVudCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG56LWNvbW1lbnQtY29udGVudCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekNvbW1lbnRDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIG56QXV0aG9yOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuekRhdGV0aW1lOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgQENvbnRlbnRDaGlsZHJlbihDb21tZW50QWN0aW9uKSBhY3Rpb25zOiBRdWVyeUxpc3Q8Q29tbWVudEFjdGlvbj47XHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG59XHJcbiJdfQ==
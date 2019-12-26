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
export class NzCommentComponent {
    constructor() { }
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
                styles: [`
      nz-comment {
        display: block;
      }

      nz-comment-content {
        display: block;
      }
    `]
            }] }
];
/** @nocollapse */
NzCommentComponent.ctorParameters = () => [];
NzCommentComponent.propDecorators = {
    nzAuthor: [{ type: Input }],
    nzDatetime: [{ type: Input }],
    actions: [{ type: ContentChildren, args: [CommentAction,] }]
};
if (false) {
    /** @type {?} */
    NzCommentComponent.prototype.nzAuthor;
    /** @type {?} */
    NzCommentComponent.prototype.nzDatetime;
    /** @type {?} */
    NzCommentComponent.prototype.actions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29tbWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvbW1lbnQvIiwic291cmNlcyI6WyJuei1jb21tZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsS0FBSyxFQUNMLFNBQVMsRUFFVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHdCQUF3QixJQUFJLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBdUIvRSxNQUFNLE9BQU8sa0JBQWtCO0lBSzdCLGdCQUFlLENBQUM7OztZQTFCakIsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUUsV0FBVztnQkFDckIsNmhDQUEwQztnQkFDMUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLGFBQWE7aUJBQ3JCO3lCQUVDOzs7Ozs7OztLQVFDO2FBRUo7Ozs7O3VCQUVFLEtBQUs7eUJBQ0wsS0FBSztzQkFFTCxlQUFlLFNBQUMsYUFBYTs7OztJQUg5QixzQ0FBOEM7O0lBQzlDLHdDQUFnRDs7SUFFaEQscUNBQWtFIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgSW5wdXQsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOekNvbW1lbnRBY3Rpb25Db21wb25lbnQgYXMgQ29tbWVudEFjdGlvbiB9IGZyb20gJy4vbnotY29tbWVudC1jZWxscyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LWNvbW1lbnQnLFxyXG4gIGV4cG9ydEFzOiAnbnpDb21tZW50JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotY29tbWVudC5jb21wb25lbnQuaHRtbCcsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBob3N0OiB7XHJcbiAgICBjbGFzczogJ2FudC1jb21tZW50J1xyXG4gIH0sXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIG56LWNvbW1lbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBuei1jb21tZW50LWNvbnRlbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpDb21tZW50Q29tcG9uZW50IHtcclxuICBASW5wdXQoKSBuekF1dGhvcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpEYXRldGltZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIEBDb250ZW50Q2hpbGRyZW4oQ29tbWVudEFjdGlvbikgYWN0aW9uczogUXVlcnlMaXN0PENvbW1lbnRBY3Rpb24+O1xyXG4gIGNvbnN0cnVjdG9yKCkge31cclxufVxyXG4iXX0=
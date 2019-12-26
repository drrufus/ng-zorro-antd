/**
 * @fileoverview added by tsickle
 * Generated from: nz-list.component.ts
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
import { ChangeDetectionStrategy, Component, ElementRef, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { InputBoolean, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { BehaviorSubject } from 'rxjs';
var NzListComponent = /** @class */ (function () {
    function NzListComponent(el, updateHostClassService) {
        this.el = el;
        this.updateHostClassService = updateHostClassService;
        this.nzBordered = false;
        this.nzItemLayout = 'horizontal';
        this.nzLoading = false;
        this.nzSize = 'default';
        this.nzSplit = true;
        // #endregion
        // #region styles
        this.prefixCls = 'ant-list';
        // #endregion
        this.itemLayoutNotifySource = new BehaviorSubject(this.nzItemLayout);
    }
    /**
     * @private
     * @return {?}
     */
    NzListComponent.prototype._setClassMap = /**
     * @private
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var classMap = (_a = {},
            _a[this.prefixCls] = true,
            _a[this.prefixCls + "-vertical"] = this.nzItemLayout === 'vertical',
            _a[this.prefixCls + "-lg"] = this.nzSize === 'large',
            _a[this.prefixCls + "-sm"] = this.nzSize === 'small',
            _a[this.prefixCls + "-split"] = this.nzSplit,
            _a[this.prefixCls + "-bordered"] = this.nzBordered,
            _a[this.prefixCls + "-loading"] = this.nzLoading,
            _a[this.prefixCls + "-grid"] = this.nzGrid,
            _a[this.prefixCls + "-something-after-last-item"] = !!(this.nzLoadMore || this.nzPagination || this.nzFooter),
            _a);
        this.updateHostClassService.updateHostClass(this.el.nativeElement, classMap);
    };
    Object.defineProperty(NzListComponent.prototype, "itemLayoutNotify$", {
        get: /**
         * @return {?}
         */
        function () {
            return this.itemLayoutNotifySource.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._setClassMap();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzListComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this._setClassMap();
        if (changes.nzItemLayout) {
            this.itemLayoutNotifySource.next(this.nzItemLayout);
        }
    };
    /**
     * @return {?}
     */
    NzListComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.itemLayoutNotifySource.unsubscribe();
    };
    NzListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-list, [nz-list]',
                    exportAs: 'nzList',
                    template: "<ng-template #itemsTpl>\r\n  <div class=\"ant-list-items\" *ngIf=\"nzDataSource.length > 0\">\r\n    <ng-container *ngFor=\"let item of nzDataSource; let index = index\">\r\n      <ng-template [ngTemplateOutlet]=\"nzRenderItem\" [ngTemplateOutletContext]=\"{ $implicit: item, index: index }\"></ng-template>\r\n    </ng-container>\r\n  </div>\r\n</ng-template>\r\n<div *ngIf=\"nzHeader\" class=\"ant-list-header\">\r\n  <ng-container *nzStringTemplateOutlet=\"nzHeader\">{{ nzHeader }}</ng-container>\r\n</div>\r\n<nz-spin [nzSpinning]=\"nzLoading\">\r\n  <ng-container *ngIf=\"nzDataSource\">\r\n    <div *ngIf=\"nzLoading && nzDataSource.length === 0\" [style.min-height.px]=\"53\"></div>\r\n    <div *ngIf=\"nzGrid; else itemsTpl\" nz-row [nzGutter]=\"nzGrid.gutter\">\r\n      <div nz-col [nzSpan]=\"nzGrid.span\" [nzXs]=\"nzGrid.xs\" [nzSm]=\"nzGrid.sm\" [nzMd]=\"nzGrid.md\" [nzLg]=\"nzGrid.lg\" [nzXl]=\"nzGrid.xl\"\r\n           [nzXXl]=\"nzGrid.xxl\" *ngFor=\"let item of nzDataSource; let index = index\">\r\n        <ng-template [ngTemplateOutlet]=\"nzRenderItem\" [ngTemplateOutletContext]=\"{ $implicit: item, index: index }\"></ng-template>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"!nzLoading && nzDataSource.length === 0\" class=\"ant-list-empty-text\">\r\n      <nz-embed-empty [nzComponentName]=\"'list'\" [specificContent]=\"nzNoResult\"></nz-embed-empty>\r\n    </div>\r\n  </ng-container>\r\n  <ng-content></ng-content>\r\n</nz-spin>\r\n<div *ngIf=\"nzFooter\" class=\"ant-list-footer\">\r\n  <ng-container *nzStringTemplateOutlet=\"nzFooter\">{{ nzFooter }}</ng-container>\r\n</div>\r\n<ng-template [ngTemplateOutlet]=\"nzLoadMore\"></ng-template>\r\n<div *ngIf=\"nzPagination\" class=\"ant-list-pagination\">\r\n  <ng-template [ngTemplateOutlet]=\"nzPagination\"></ng-template>\r\n</div>",
                    providers: [NzUpdateHostClassService],
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["\n      nz-list,\n      nz-list nz-spin {\n        display: block;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzListComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NzUpdateHostClassService }
    ]; };
    NzListComponent.propDecorators = {
        nzDataSource: [{ type: Input }],
        nzBordered: [{ type: Input }],
        nzGrid: [{ type: Input }],
        nzHeader: [{ type: Input }],
        nzFooter: [{ type: Input }],
        nzItemLayout: [{ type: Input }],
        nzRenderItem: [{ type: Input }],
        nzLoading: [{ type: Input }],
        nzLoadMore: [{ type: Input }],
        nzPagination: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzSplit: [{ type: Input }],
        nzNoResult: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzListComponent.prototype, "nzBordered", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzListComponent.prototype, "nzLoading", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzListComponent.prototype, "nzSplit", void 0);
    return NzListComponent;
}());
export { NzListComponent };
if (false) {
    /** @type {?} */
    NzListComponent.prototype.nzDataSource;
    /** @type {?} */
    NzListComponent.prototype.nzBordered;
    /** @type {?} */
    NzListComponent.prototype.nzGrid;
    /** @type {?} */
    NzListComponent.prototype.nzHeader;
    /** @type {?} */
    NzListComponent.prototype.nzFooter;
    /** @type {?} */
    NzListComponent.prototype.nzItemLayout;
    /** @type {?} */
    NzListComponent.prototype.nzRenderItem;
    /** @type {?} */
    NzListComponent.prototype.nzLoading;
    /** @type {?} */
    NzListComponent.prototype.nzLoadMore;
    /** @type {?} */
    NzListComponent.prototype.nzPagination;
    /** @type {?} */
    NzListComponent.prototype.nzSize;
    /** @type {?} */
    NzListComponent.prototype.nzSplit;
    /** @type {?} */
    NzListComponent.prototype.nzNoResult;
    /**
     * @type {?}
     * @private
     */
    NzListComponent.prototype.prefixCls;
    /**
     * @type {?}
     * @private
     */
    NzListComponent.prototype.itemLayoutNotifySource;
    /**
     * @type {?}
     * @private
     */
    NzListComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NzListComponent.prototype.updateHostClassService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2xpc3QvIiwic291cmNlcyI6WyJuei1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFLTCxXQUFXLEVBQ1gsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxZQUFZLEVBQW9DLHdCQUF3QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFOUcsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUduRDtJQTJFRSx5QkFBb0IsRUFBYyxFQUFVLHNCQUFnRDtRQUF4RSxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUEwQjtRQXJEbkUsZUFBVSxHQUFHLEtBQUssQ0FBQztRQVFuQyxpQkFBWSxHQUFzQixZQUFZLENBQUM7UUFJL0IsY0FBUyxHQUFHLEtBQUssQ0FBQztRQU1sQyxXQUFNLEdBQWtCLFNBQVMsQ0FBQztRQUVsQixZQUFPLEdBQUcsSUFBSSxDQUFDOzs7UUFRaEMsY0FBUyxHQUFHLFVBQVUsQ0FBQzs7UUFtQnZCLDJCQUFzQixHQUFHLElBQUksZUFBZSxDQUFvQixJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFNSSxDQUFDOzs7OztJQXZCeEYsc0NBQVk7Ozs7SUFBcEI7OztZQUNRLFFBQVE7WUFDWixHQUFDLElBQUksQ0FBQyxTQUFTLElBQUcsSUFBSTtZQUN0QixHQUFJLElBQUksQ0FBQyxTQUFTLGNBQVcsSUFBRyxJQUFJLENBQUMsWUFBWSxLQUFLLFVBQVU7WUFDaEUsR0FBSSxJQUFJLENBQUMsU0FBUyxRQUFLLElBQUcsSUFBSSxDQUFDLE1BQU0sS0FBSyxPQUFPO1lBQ2pELEdBQUksSUFBSSxDQUFDLFNBQVMsUUFBSyxJQUFHLElBQUksQ0FBQyxNQUFNLEtBQUssT0FBTztZQUNqRCxHQUFJLElBQUksQ0FBQyxTQUFTLFdBQVEsSUFBRyxJQUFJLENBQUMsT0FBTztZQUN6QyxHQUFJLElBQUksQ0FBQyxTQUFTLGNBQVcsSUFBRyxJQUFJLENBQUMsVUFBVTtZQUMvQyxHQUFJLElBQUksQ0FBQyxTQUFTLGFBQVUsSUFBRyxJQUFJLENBQUMsU0FBUztZQUM3QyxHQUFJLElBQUksQ0FBQyxTQUFTLFVBQU8sSUFBRyxJQUFJLENBQUMsTUFBTTtZQUN2QyxHQUFJLElBQUksQ0FBQyxTQUFTLCtCQUE0QixJQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDO2VBQzNHO1FBQ0QsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBTUQsc0JBQUksOENBQWlCOzs7O1FBQXJCO1lBQ0UsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEQsQ0FBQzs7O09BQUE7Ozs7SUFJRCxrQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxxQ0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksT0FBTyxDQUFDLFlBQVksRUFBRTtZQUN4QixJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNyRDtJQUNILENBQUM7Ozs7SUFFRCxxQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDNUMsQ0FBQzs7Z0JBMUZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixRQUFRLEVBQUUsUUFBUTtvQkFDbEIsc3lEQUF1QztvQkFDdkMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7b0JBQ3JDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs2QkFFN0MsbUZBS0M7aUJBRUo7Ozs7Z0JBL0JDLFVBQVU7Z0JBVTZDLHdCQUF3Qjs7OytCQXlCOUUsS0FBSzs2QkFFTCxLQUFLO3lCQUVMLEtBQUs7MkJBRUwsS0FBSzsyQkFFTCxLQUFLOytCQUVMLEtBQUs7K0JBRUwsS0FBSzs0QkFFTCxLQUFLOzZCQUVMLEtBQUs7K0JBRUwsS0FBSzt5QkFFTCxLQUFLOzBCQUVMLEtBQUs7NkJBRUwsS0FBSzs7SUF0Qm1CO1FBQWYsWUFBWSxFQUFFOzt1REFBb0I7SUFZbkI7UUFBZixZQUFZLEVBQUU7O3NEQUFtQjtJQVFsQjtRQUFmLFlBQVksRUFBRTs7b0RBQWdCO0lBaUQxQyxzQkFBQztDQUFBLEFBM0ZELElBMkZDO1NBMUVZLGVBQWU7OztJQUcxQix1Q0FBNkI7O0lBRTdCLHFDQUE0Qzs7SUFFNUMsaUNBQTRCOztJQUU1QixtQ0FBOEM7O0lBRTlDLG1DQUE4Qzs7SUFFOUMsdUNBQXdEOztJQUV4RCx1Q0FBeUM7O0lBRXpDLG9DQUEyQzs7SUFFM0MscUNBQXVDOztJQUV2Qyx1Q0FBeUM7O0lBRXpDLGlDQUEyQzs7SUFFM0Msa0NBQXdDOztJQUV4QyxxQ0FBZ0Q7Ozs7O0lBTWhELG9DQUErQjs7Ozs7SUFtQi9CLGlEQUEyRjs7Ozs7SUFNL0UsNkJBQXNCOzs7OztJQUFFLGlEQUF3RCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIE56RGlyZWN0aW9uVkhUeXBlLCBOelNpemVMRFNUeXBlLCBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE56TGlzdEdyaWQgfSBmcm9tICcuL2ludGVyZmFjZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LWxpc3QsIFtuei1saXN0XScsXHJcbiAgZXhwb3J0QXM6ICduekxpc3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1saXN0LmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnM6IFtOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VdLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIG56LWxpc3QsXHJcbiAgICAgIG56LWxpc3Qgbnotc3BpbiB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICAvLyAjcmVnaW9uIGZpZWxkc1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBASW5wdXQoKSBuekRhdGFTb3VyY2U6IGFueVtdO1xyXG5cclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpCb3JkZXJlZCA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKSBuekdyaWQ6IE56TGlzdEdyaWQ7XHJcblxyXG4gIEBJbnB1dCgpIG56SGVhZGVyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgQElucHV0KCkgbnpGb290ZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBASW5wdXQoKSBuekl0ZW1MYXlvdXQ6IE56RGlyZWN0aW9uVkhUeXBlID0gJ2hvcml6b250YWwnO1xyXG5cclxuICBASW5wdXQoKSBuelJlbmRlckl0ZW06IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpMb2FkaW5nID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIG56TG9hZE1vcmU6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBASW5wdXQoKSBuelBhZ2luYXRpb246IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBASW5wdXQoKSBuelNpemU6IE56U2l6ZUxEU1R5cGUgPSAnZGVmYXVsdCc7XHJcblxyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNwbGl0ID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KCkgbnpOb1Jlc3VsdDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgLy8gI3JlZ2lvbiBzdHlsZXNcclxuXHJcbiAgcHJpdmF0ZSBwcmVmaXhDbHMgPSAnYW50LWxpc3QnO1xyXG5cclxuICBwcml2YXRlIF9zZXRDbGFzc01hcCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGNsYXNzTWFwID0ge1xyXG4gICAgICBbdGhpcy5wcmVmaXhDbHNdOiB0cnVlLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXZlcnRpY2FsYF06IHRoaXMubnpJdGVtTGF5b3V0ID09PSAndmVydGljYWwnLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWxnYF06IHRoaXMubnpTaXplID09PSAnbGFyZ2UnLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXNtYF06IHRoaXMubnpTaXplID09PSAnc21hbGwnLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXNwbGl0YF06IHRoaXMubnpTcGxpdCxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1ib3JkZXJlZGBdOiB0aGlzLm56Qm9yZGVyZWQsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbG9hZGluZ2BdOiB0aGlzLm56TG9hZGluZyxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1ncmlkYF06IHRoaXMubnpHcmlkLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXNvbWV0aGluZy1hZnRlci1sYXN0LWl0ZW1gXTogISEodGhpcy5uekxvYWRNb3JlIHx8IHRoaXMubnpQYWdpbmF0aW9uIHx8IHRoaXMubnpGb290ZXIpXHJcbiAgICB9O1xyXG4gICAgdGhpcy51cGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIGNsYXNzTWFwKTtcclxuICB9XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgcHJpdmF0ZSBpdGVtTGF5b3V0Tm90aWZ5U291cmNlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxOekRpcmVjdGlvblZIVHlwZT4odGhpcy5uekl0ZW1MYXlvdXQpO1xyXG5cclxuICBnZXQgaXRlbUxheW91dE5vdGlmeSQoKTogT2JzZXJ2YWJsZTxOekRpcmVjdGlvblZIVHlwZT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXRlbUxheW91dE5vdGlmeVNvdXJjZS5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgdXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX3NldENsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICB0aGlzLl9zZXRDbGFzc01hcCgpO1xyXG4gICAgaWYgKGNoYW5nZXMubnpJdGVtTGF5b3V0KSB7XHJcbiAgICAgIHRoaXMuaXRlbUxheW91dE5vdGlmeVNvdXJjZS5uZXh0KHRoaXMubnpJdGVtTGF5b3V0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pdGVtTGF5b3V0Tm90aWZ5U291cmNlLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
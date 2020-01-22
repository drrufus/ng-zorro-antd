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
import { animate, style, transition, trigger } from '@angular/animations';
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { NzUpdateHostClassService } from 'ng-zorro-antd/core';
var NzUploadListComponent = /** @class */ (function () {
    // #endregion
    function NzUploadListComponent(el, cdr, updateHostClassService, platform) {
        this.el = el;
        this.cdr = cdr;
        this.updateHostClassService = updateHostClassService;
        this.platform = platform;
        this.imageTypes = ['image', 'webp', 'png', 'svg', 'gif', 'jpg', 'jpeg', 'bmp'];
        // #region fields
        // tslint:disable-next-line:no-any
        this.locale = {};
        // #endregion
        // #region styles
        this.prefixCls = 'ant-upload-list';
    }
    Object.defineProperty(NzUploadListComponent.prototype, "showPic", {
        get: /**
         * @return {?}
         */
        function () {
            return this.listType === 'picture' || this.listType === 'picture-card';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzUploadListComponent.prototype, "items", {
        get: /**
         * @return {?}
         */
        function () {
            return this._items;
        },
        set: /**
         * @param {?} list
         * @return {?}
         */
        function (list) {
            list.forEach((/**
             * @param {?} file
             * @return {?}
             */
            function (file) {
                file.linkProps = typeof file.linkProps === 'string' ? JSON.parse(file.linkProps) : file.linkProps;
            }));
            this._items = list;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    NzUploadListComponent.prototype.setClassMap = /**
     * @private
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var classMap = (_a = {},
            _a[this.prefixCls] = true,
            _a[this.prefixCls + "-" + this.listType] = true,
            _a);
        this.updateHostClassService.updateHostClass(this.el.nativeElement, classMap);
    };
    // #endregion
    // #region render
    // #endregion
    // #region render
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    NzUploadListComponent.prototype.extname = 
    // #endregion
    // #region render
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    function (url) {
        /** @type {?} */
        var temp = url.split('/');
        /** @type {?} */
        var filename = temp[temp.length - 1];
        /** @type {?} */
        var filenameWithoutSuffix = filename.split(/#|\?/)[0];
        return (/\.[^./\\]*$/.exec(filenameWithoutSuffix) || [''])[0];
    };
    /**
     * @param {?} file
     * @return {?}
     */
    NzUploadListComponent.prototype.isImageUrl = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        if (~this.imageTypes.indexOf(file.type)) {
            return true;
        }
        /** @type {?} */
        var url = (/** @type {?} */ ((file.thumbUrl || file.url || '')));
        if (!url) {
            return false;
        }
        /** @type {?} */
        var extension = this.extname(url);
        if (/^data:image\//.test(url) || /(webp|svg|png|gif|jpg|jpeg|bmp)$/i.test(extension)) {
            return true;
        }
        else if (/^data:/.test(url)) {
            // other file types of base64
            return false;
        }
        else if (extension) {
            // other file types which have extension
            return false;
        }
        return true;
    };
    /**
     * @private
     * @param {?} file
     * @param {?} callback
     * @return {?}
     */
    NzUploadListComponent.prototype.previewFile = /**
     * @private
     * @param {?} file
     * @param {?} callback
     * @return {?}
     */
    function (file, callback) {
        if (file.type && this.imageTypes.indexOf(file.type) === -1) {
            callback('');
        }
        /** @type {?} */
        var reader = new FileReader();
        // https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
        reader.onloadend = (/**
         * @return {?}
         */
        function () { return callback((/** @type {?} */ (reader.result))); });
        reader.readAsDataURL(file);
    };
    /**
     * @private
     * @return {?}
     */
    NzUploadListComponent.prototype.genThumb = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.platform.isBrowser) {
            return;
        }
        // tslint:disable-next-line:no-any
        /** @type {?} */
        var win = (/** @type {?} */ (window));
        if (!this.showPic ||
            typeof document === 'undefined' ||
            typeof win === 'undefined' ||
            !win.FileReader ||
            !win.File) {
            return;
        }
        this.items
            .filter((/**
         * @param {?} file
         * @return {?}
         */
        function (file) { return file.originFileObj instanceof File && file.thumbUrl === undefined; }))
            .forEach((/**
         * @param {?} file
         * @return {?}
         */
        function (file) {
            file.thumbUrl = '';
            _this.previewFile((/** @type {?} */ (file.originFileObj)), (/**
             * @param {?} previewDataUrl
             * @return {?}
             */
            function (previewDataUrl) {
                file.thumbUrl = previewDataUrl;
                _this.detectChanges();
            }));
        }));
    };
    /**
     * @param {?} file
     * @return {?}
     */
    NzUploadListComponent.prototype.showPreview = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        var _a = this.icons, showPreviewIcon = _a.showPreviewIcon, hidePreviewIconInNonImage = _a.hidePreviewIconInNonImage;
        if (!showPreviewIcon) {
            return false;
        }
        return this.isImageUrl(file) ? true : !hidePreviewIconInNonImage;
    };
    /**
     * @param {?} file
     * @param {?} e
     * @return {?}
     */
    NzUploadListComponent.prototype.handlePreview = /**
     * @param {?} file
     * @param {?} e
     * @return {?}
     */
    function (file, e) {
        if (!this.onPreview) {
            return;
        }
        e.preventDefault();
        return this.onPreview(file);
    };
    /**
     * @param {?} file
     * @param {?} e
     * @return {?}
     */
    NzUploadListComponent.prototype.handleRemove = /**
     * @param {?} file
     * @param {?} e
     * @return {?}
     */
    function (file, e) {
        e.preventDefault();
        if (this.onRemove) {
            this.onRemove(file);
        }
        return;
    };
    /**
     * @return {?}
     */
    NzUploadListComponent.prototype.detectChanges = /**
     * @return {?}
     */
    function () {
        this.cdr.detectChanges();
    };
    /**
     * @return {?}
     */
    NzUploadListComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
        this.genThumb();
    };
    NzUploadListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-upload-list',
                    exportAs: 'nzUploadList',
                    template: "<div *ngFor=\"let file of items\" class=\"ant-upload-list-item ant-upload-list-item-{{file.status}}\" @itemState>\r\n  <ng-template #icon>\r\n    <ng-container *ngIf=\"showPic; else noPicTpl\">\r\n      <div *ngIf=\"listType === 'picture-card' && file.status === 'uploading'; else thumbUrlCheck\" class=\"ant-upload-list-item-uploading-text\">{{ locale.uploading }}</div>\r\n    </ng-container>\r\n    <ng-template #thumbUrlCheck>\r\n      <i *ngIf=\"!file.thumbUrl && !file.url; else thumbTpl\"\r\n        class=\"ant-upload-list-item-thumbnail\" nz-icon nzType=\"picture\" nzTheme=\"twotone\"></i>\r\n    </ng-template>\r\n    <ng-template #thumbTpl>\r\n      <a class=\"ant-upload-list-item-thumbnail\" target=\"_blank\" rel=\"noopener noreferrer\"\r\n        [href]=\"file.thumbUrl || file.url\"\r\n        (click)=\"handlePreview(file, $event)\">\r\n        <img *ngIf=\"isImageUrl(file); else noThumbTpl\" [src]=\"file.thumbUrl || file.url\" [attr.alt]=\"file.name\" />\r\n      </a>\r\n    </ng-template>\r\n    <ng-template #noThumbTpl><i class=\"ant-upload-list-item-icon\" nz-icon nzType=\"file\" nzTheme=\"twotone\"></i></ng-template>\r\n    <ng-template #noPicTpl><i nz-icon [nzType]=\"file.status === 'uploading' ? 'loading' : 'paper-clip'\"></i></ng-template>\r\n  </ng-template>\r\n  <ng-template #preview>\r\n    <ng-container *ngIf=\"file.url; else prevText\">\r\n      <a [href]=\"file.thumbUrl || file.url\" target=\"_blank\" rel=\"noopener noreferrer\" [attr.download]=\"file.linkProps && file.linkProps.download\"\r\n        (click)=\"handlePreview(file, $event)\" class=\"ant-upload-list-item-name\" title=\"{{ file.name }}\">{{ file.name }}</a>\r\n    </ng-container>\r\n    <ng-template #prevText>\r\n      <span (click)=\"handlePreview(file, $event)\" class=\"ant-upload-list-item-name\" title=\"{{ file.name }}\">{{ file.name }}</span>\r\n    </ng-template>\r\n  </ng-template>\r\n  <div class=\"ant-upload-list-item-info\">\r\n    <span *ngIf=\"file.status === 'error'\" nz-tooltip [nzTitle]=\"file.message\">\r\n      <ng-template [ngTemplateOutlet]=\"icon\"></ng-template>\r\n      <ng-template [ngTemplateOutlet]=\"preview\"></ng-template>\r\n    </span>\r\n    <span *ngIf=\"file.status !== 'error'\">\r\n      <ng-template [ngTemplateOutlet]=\"icon\"></ng-template>\r\n      <ng-template [ngTemplateOutlet]=\"preview\"></ng-template>\r\n    </span>\r\n  </div>\r\n  <ng-container *ngIf=\"listType === 'picture-card' && file.status !== 'uploading'; else close\">\r\n    <span class=\"ant-upload-list-item-actions\">\r\n      <a *ngIf=\"showPreview(file)\" [href]=\"file.thumbUrl || file.url\"\r\n        target=\"_blank\" rel=\"noopener noreferrer\"\r\n        title=\"{{ locale.previewFile }}\"\r\n        [ngStyle]=\"!(file.url || file.thumbUrl) && {'opacity': .5, 'pointer-events': 'none'}\"\r\n        (click)=\"handlePreview(file, $event)\">\r\n          <i nz-icon nzType=\"eye-o\"></i>\r\n      </a>\r\n      <i *ngIf=\"icons.showRemoveIcon\" (click)=\"handleRemove(file, $event)\" nz-icon nzType=\"delete\" title=\"{{ locale.removeFile }}\"></i>\r\n    </span>\r\n  </ng-container>\r\n  <ng-template #close>\r\n    <i *ngIf=\"icons.showRemoveIcon\" (click)=\"handleRemove(file, $event)\" nz-icon nzType=\"close\" title=\"{{ locale.removeFile }}\"></i>\r\n  </ng-template>\r\n  <div *ngIf=\"file.status === 'uploading'\" class=\"ant-upload-list-item-progress\">\r\n    <nz-progress [nzPercent]=\"file.percent\" [nzShowInfo]=\"false\" [nzStrokeWidth]=\"2\"></nz-progress>\r\n  </div>\r\n</div>",
                    providers: [NzUpdateHostClassService],
                    animations: [
                        trigger('itemState', [
                            transition(':enter', [
                                style({ height: '0', width: '0', opacity: 0 }),
                                animate(150, style({ height: '*', width: '*', opacity: 1 }))
                            ]),
                            transition(':leave', [animate(150, style({ height: '0', width: '0', opacity: 0 }))])
                        ])
                    ],
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NzUploadListComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: NzUpdateHostClassService },
        { type: Platform }
    ]; };
    NzUploadListComponent.propDecorators = {
        locale: [{ type: Input }],
        listType: [{ type: Input }],
        items: [{ type: Input }],
        icons: [{ type: Input }],
        onPreview: [{ type: Input }],
        onRemove: [{ type: Input }]
    };
    return NzUploadListComponent;
}());
export { NzUploadListComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzUploadListComponent.prototype.imageTypes;
    /**
     * @type {?}
     * @private
     */
    NzUploadListComponent.prototype._items;
    /** @type {?} */
    NzUploadListComponent.prototype.locale;
    /** @type {?} */
    NzUploadListComponent.prototype.listType;
    /** @type {?} */
    NzUploadListComponent.prototype.icons;
    /** @type {?} */
    NzUploadListComponent.prototype.onPreview;
    /** @type {?} */
    NzUploadListComponent.prototype.onRemove;
    /**
     * @type {?}
     * @private
     */
    NzUploadListComponent.prototype.prefixCls;
    /**
     * @type {?}
     * @private
     */
    NzUploadListComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NzUploadListComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzUploadListComponent.prototype.updateHostClassService;
    /**
     * @type {?}
     * @private
     */
    NzUploadListComponent.prototype.platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdXBsb2FkLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC91cGxvYWQvIiwic291cmNlcyI6WyJuei11cGxvYWQtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDMUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUVMLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUk5RDtJQXdKRSxhQUFhO0lBRWIsK0JBQ1UsRUFBYyxFQUNkLEdBQXNCLEVBQ3RCLHNCQUFnRCxFQUNoRCxRQUFrQjtRQUhsQixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUEwQjtRQUNoRCxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBM0lwQixlQUFVLEdBQUcsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7OztRQVV6RSxXQUFNLEdBQVEsRUFBRSxDQUFDOzs7UUFvQmxCLGNBQVMsR0FBRyxpQkFBaUIsQ0FBQztJQThHbkMsQ0FBQztJQXpJSixzQkFBSSwwQ0FBTzs7OztRQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLGNBQWMsQ0FBQztRQUN6RSxDQUFDOzs7T0FBQTtJ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RSxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7NkJBQzdELENBQUM7NEJBQ0YsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzt5QkFDckYsQ0FBQztxQkFDSDtvQkFDRCxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQTNCQyxVQUFVO2dCQUZWLGlCQUFpQjtnQkFRVix3QkFBd0I7Z0JBWHhCLFFBQVE7Ozt5QkE0Q2QsS0FBSzsyQkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBVUwsS0FBSzs0QkFDTCxLQUFLOzJCQUNMLEtBQUs7O0lBOEhSLDRCQUFDO0NBQUEsQUF6S0QsSUF5S0M7U0F2SlkscUJBQXFCOzs7Ozs7SUFDaEMsMkNBQWtGOzs7OztJQUNsRix1Q0FBNkI7O0lBUzdCLHVDQUEwQjs7SUFDMUIseUNBQWtDOztJQVdsQyxzQ0FBd0M7O0lBQ3hDLDBDQUErQzs7SUFDL0MseUNBQThDOzs7OztJQU05QywwQ0FBc0M7Ozs7O0lBMEdwQyxtQ0FBc0I7Ozs7O0lBQ3RCLG9DQUE4Qjs7Ozs7SUFDOUIsdURBQXdEOzs7OztJQUN4RCx5Q0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IGFuaW1hdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBTaG93VXBsb2FkTGlzdEludGVyZmFjZSwgVXBsb2FkRmlsZSwgVXBsb2FkTGlzdFR5cGUgfSBmcm9tICcuL2ludGVyZmFjZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LXVwbG9hZC1saXN0JyxcclxuICBleHBvcnRBczogJ256VXBsb2FkTGlzdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXVwbG9hZC1saXN0LmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnM6IFtOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VdLFxyXG4gIGFuaW1hdGlvbnM6IFtcclxuICAgIHRyaWdnZXIoJ2l0ZW1TdGF0ZScsIFtcclxuICAgICAgdHJhbnNpdGlvbignOmVudGVyJywgW1xyXG4gICAgICAgIHN0eWxlKHsgaGVpZ2h0OiAnMCcsIHdpZHRoOiAnMCcsIG9wYWNpdHk6IDAgfSksXHJcbiAgICAgICAgYW5pbWF0ZSgxNTAsIHN0eWxlKHsgaGVpZ2h0OiAnKicsIHdpZHRoOiAnKicsIG9wYWNpdHk6IDEgfSkpXHJcbiAgICAgIF0pLFxyXG4gICAgICB0cmFuc2l0aW9uKCc6bGVhdmUnLCBbYW5pbWF0ZSgxNTAsIHN0eWxlKHsgaGVpZ2h0OiAnMCcsIHdpZHRoOiAnMCcsIG9wYWNpdHk6IDAgfSkpXSlcclxuICAgIF0pXHJcbiAgXSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelVwbG9hZExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIHByaXZhdGUgaW1hZ2VUeXBlcyA9IFsnaW1hZ2UnLCAnd2VicCcsICdwbmcnLCAnc3ZnJywgJ2dpZicsICdqcGcnLCAnanBlZycsICdibXAnXTtcclxuICBwcml2YXRlIF9pdGVtczogVXBsb2FkRmlsZVtdO1xyXG5cclxuICBnZXQgc2hvd1BpYygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmxpc3RUeXBlID09PSAncGljdHVyZScgfHwgdGhpcy5saXN0VHlwZSA9PT0gJ3BpY3R1cmUtY2FyZCc7XHJcbiAgfVxyXG5cclxuICAvLyAjcmVnaW9uIGZpZWxkc1xyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgQElucHV0KCkgbG9jYWxlOiBhbnkgPSB7fTtcclxuICBASW5wdXQoKSBsaXN0VHlwZTogVXBsb2FkTGlzdFR5cGU7XHJcbiAgQElucHV0KClcclxuICBzZXQgaXRlbXMobGlzdDogVXBsb2FkRmlsZVtdKSB7XHJcbiAgICBsaXN0LmZvckVhY2goZmlsZSA9PiB7XHJcbiAgICAgIGZpbGUubGlua1Byb3BzID0gdHlwZW9mIGZpbGUubGlua1Byb3BzID09PSAnc3RyaW5nJyA/IEpTT04ucGFyc2UoZmlsZS5saW5rUHJvcHMpIDogZmlsZS5saW5rUHJvcHM7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX2l0ZW1zID0gbGlzdDtcclxuICB9XHJcbiAgZ2V0IGl0ZW1zKCk6IFVwbG9hZEZpbGVbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5faXRlbXM7XHJcbiAgfVxyXG4gIEBJbnB1dCgpIGljb25zOiBTaG93VXBsb2FkTGlzdEludGVyZmFjZTtcclxuICBASW5wdXQoKSBvblByZXZpZXc6IChmaWxlOiBVcGxvYWRGaWxlKSA9PiB2b2lkO1xyXG4gIEBJbnB1dCgpIG9uUmVtb3ZlOiAoZmlsZTogVXBsb2FkRmlsZSkgPT4gdm9pZDtcclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAvLyAjcmVnaW9uIHN0eWxlc1xyXG5cclxuICBwcml2YXRlIHByZWZpeENscyA9ICdhbnQtdXBsb2FkLWxpc3QnO1xyXG5cclxuICBwcml2YXRlIHNldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgY29uc3QgY2xhc3NNYXAgPSB7XHJcbiAgICAgIFt0aGlzLnByZWZpeENsc106IHRydWUsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tJHt0aGlzLmxpc3RUeXBlfWBdOiB0cnVlXHJcbiAgICB9O1xyXG4gICAgdGhpcy51cGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIGNsYXNzTWFwKTtcclxuICB9XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgLy8gI3JlZ2lvbiByZW5kZXJcclxuXHJcbiAgcHJpdmF0ZSBleHRuYW1lKHVybDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHRlbXAgPSB1cmwuc3BsaXQoJy8nKTtcclxuICAgIGNvbnN0IGZpbGVuYW1lID0gdGVtcFt0ZW1wLmxlbmd0aCAtIDFdO1xyXG4gICAgY29uc3QgZmlsZW5hbWVXaXRob3V0U3VmZml4ID0gZmlsZW5hbWUuc3BsaXQoLyN8XFw/LylbMF07XHJcbiAgICByZXR1cm4gKC9cXC5bXi4vXFxcXF0qJC8uZXhlYyhmaWxlbmFtZVdpdGhvdXRTdWZmaXgpIHx8IFsnJ10pWzBdO1xyXG4gIH1cclxuXHJcbiAgaXNJbWFnZVVybChmaWxlOiBVcGxvYWRGaWxlKTogYm9vbGVhbiB7XHJcbiAgICBpZiAofnRoaXMuaW1hZ2VUeXBlcy5pbmRleE9mKGZpbGUudHlwZSkpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBjb25zdCB1cmw6IHN0cmluZyA9IChmaWxlLnRodW1iVXJsIHx8IGZpbGUudXJsIHx8ICcnKSBhcyBzdHJpbmc7XHJcbiAgICBpZiAoIXVybCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBjb25zdCBleHRlbnNpb24gPSB0aGlzLmV4dG5hbWUodXJsKTtcclxuICAgIGlmICgvXmRhdGE6aW1hZ2VcXC8vLnRlc3QodXJsKSB8fCAvKHdlYnB8c3ZnfHBuZ3xnaWZ8anBnfGpwZWd8Ym1wKSQvaS50ZXN0KGV4dGVuc2lvbikpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2UgaWYgKC9eZGF0YTovLnRlc3QodXJsKSkge1xyXG4gICAgICAvLyBvdGhlciBmaWxlIHR5cGVzIG9mIGJhc2U2NFxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2UgaWYgKGV4dGVuc2lvbikge1xyXG4gICAgICAvLyBvdGhlciBmaWxlIHR5cGVzIHdoaWNoIGhhdmUgZXh0ZW5zaW9uXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwcmV2aWV3RmlsZShmaWxlOiBGaWxlIHwgQmxvYiwgY2FsbGJhY2s6IChkYXRhVXJsOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIGlmIChmaWxlLnR5cGUgJiYgdGhpcy5pbWFnZVR5cGVzLmluZGV4T2YoZmlsZS50eXBlKSA9PT0gLTEpIHtcclxuICAgICAgY2FsbGJhY2soJycpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GaWxlUmVhZGVyL3JlYWRBc0RhdGFVUkxcclxuICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiBjYWxsYmFjayhyZWFkZXIucmVzdWx0IGFzIHN0cmluZyk7XHJcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2VuVGh1bWIoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICAgIGNvbnN0IHdpbiA9IHdpbmRvdyBhcyBhbnk7XHJcbiAgICBpZiAoXHJcbiAgICAgICF0aGlzLnNob3dQaWMgfHxcclxuICAgICAgdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJyB8fFxyXG4gICAgICB0eXBlb2Ygd2luID09PSAndW5kZWZpbmVkJyB8fFxyXG4gICAgICAhd2luLkZpbGVSZWFkZXIgfHxcclxuICAgICAgIXdpbi5GaWxlXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pdGVtc1xyXG4gICAgICAuZmlsdGVyKGZpbGUgPT4gZmlsZS5vcmlnaW5GaWxlT2JqIGluc3RhbmNlb2YgRmlsZSAmJiBmaWxlLnRodW1iVXJsID09PSB1bmRlZmluZWQpXHJcbiAgICAgIC5mb3JFYWNoKGZpbGUgPT4ge1xyXG4gICAgICAgIGZpbGUudGh1bWJVcmwgPSAnJztcclxuICAgICAgICB0aGlzLnByZXZpZXdGaWxlKGZpbGUub3JpZ2luRmlsZU9iaiEsIChwcmV2aWV3RGF0YVVybDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICBmaWxlLnRodW1iVXJsID0gcHJldmlld0RhdGFVcmw7XHJcbiAgICAgICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBzaG93UHJldmlldyhmaWxlOiBVcGxvYWRGaWxlKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCB7IHNob3dQcmV2aWV3SWNvbiwgaGlkZVByZXZpZXdJY29uSW5Ob25JbWFnZSB9ID0gdGhpcy5pY29ucztcclxuICAgIGlmICghc2hvd1ByZXZpZXdJY29uKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmlzSW1hZ2VVcmwoZmlsZSkgPyB0cnVlIDogIWhpZGVQcmV2aWV3SWNvbkluTm9uSW1hZ2U7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVQcmV2aWV3KGZpbGU6IFVwbG9hZEZpbGUsIGU6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMub25QcmV2aWV3KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICByZXR1cm4gdGhpcy5vblByZXZpZXcoZmlsZSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVSZW1vdmUoZmlsZTogVXBsb2FkRmlsZSwgZTogRXZlbnQpOiB2b2lkIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICh0aGlzLm9uUmVtb3ZlKSB7XHJcbiAgICAgIHRoaXMub25SZW1vdmUoZmlsZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgdXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm1cclxuICApIHt9XHJcblxyXG4gIGRldGVjdENoYW5nZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICAgIHRoaXMuZ2VuVGh1bWIoKTtcclxuICB9XHJcbn1cclxuIl19
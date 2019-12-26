/**
 * @fileoverview added by tsickle
 * Generated from: nz-upload-list.component.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdXBsb2FkLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC91cGxvYWQvIiwic291cmNlcyI6WyJuei11cGxvYWQtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFFTCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFJOUQ7SUF3SkUsYUFBYTtJQUViLCtCQUNVLEVBQWMsRUFDZCxHQUFzQixFQUN0QixzQkFBZ0QsRUFDaEQsUUFBa0I7UUFIbEIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBMEI7UUFDaEQsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQTNJcEIsZUFBVSxHQUFHLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDOzs7UUFVekUsV0FBTSxHQUFRLEVBQUUsQ0FBQzs7O1FBb0JsQixjQUFTLEdBQUcsaUJBQWlCLENBQUM7SUE4R25DLENBQUM7SUF6SUosc0JBQUksMENBQU87Ozs7UUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxjQUFjLENBQUM7UUFDekUsQ0FBQzs7O09BQUE7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QUUsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDOzZCQUM3RCxDQUFDOzRCQUNGLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7eUJBQ3JGLENBQUM7cUJBQ0g7b0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkEzQkMsVUFBVTtnQkFGVixpQkFBaUI7Z0JBUVYsd0JBQXdCO2dCQVh4QixRQUFROzs7eUJBNENkLEtBQUs7MkJBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQVVMLEtBQUs7NEJBQ0wsS0FBSzsyQkFDTCxLQUFLOztJQThIUiw0QkFBQztDQUFBLEFBektELElBeUtDO1NBdkpZLHFCQUFxQjs7Ozs7O0lBQ2hDLDJDQUFrRjs7Ozs7SUFDbEYsdUNBQTZCOztJQVM3Qix1Q0FBMEI7O0lBQzFCLHlDQUFrQzs7SUFXbEMsc0NBQXdDOztJQUN4QywwQ0FBK0M7O0lBQy9DLHlDQUE4Qzs7Ozs7SUFNOUMsMENBQXNDOzs7OztJQTBHcEMsbUNBQXNCOzs7OztJQUN0QixvQ0FBOEI7Ozs7O0lBQzlCLHVEQUF3RDs7Ozs7SUFDeEQseUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBhbmltYXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgU2hvd1VwbG9hZExpc3RJbnRlcmZhY2UsIFVwbG9hZEZpbGUsIFVwbG9hZExpc3RUeXBlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei11cGxvYWQtbGlzdCcsXHJcbiAgZXhwb3J0QXM6ICduelVwbG9hZExpc3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei11cGxvYWQtbGlzdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXSxcclxuICBhbmltYXRpb25zOiBbXHJcbiAgICB0cmlnZ2VyKCdpdGVtU3RhdGUnLCBbXHJcbiAgICAgIHRyYW5zaXRpb24oJzplbnRlcicsIFtcclxuICAgICAgICBzdHlsZSh7IGhlaWdodDogJzAnLCB3aWR0aDogJzAnLCBvcGFjaXR5OiAwIH0pLFxyXG4gICAgICAgIGFuaW1hdGUoMTUwLCBzdHlsZSh7IGhlaWdodDogJyonLCB3aWR0aDogJyonLCBvcGFjaXR5OiAxIH0pKVxyXG4gICAgICBdKSxcclxuICAgICAgdHJhbnNpdGlvbignOmxlYXZlJywgW2FuaW1hdGUoMTUwLCBzdHlsZSh7IGhlaWdodDogJzAnLCB3aWR0aDogJzAnLCBvcGFjaXR5OiAwIH0pKV0pXHJcbiAgICBdKVxyXG4gIF0sXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpVcGxvYWRMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBwcml2YXRlIGltYWdlVHlwZXMgPSBbJ2ltYWdlJywgJ3dlYnAnLCAncG5nJywgJ3N2ZycsICdnaWYnLCAnanBnJywgJ2pwZWcnLCAnYm1wJ107XHJcbiAgcHJpdmF0ZSBfaXRlbXM6IFVwbG9hZEZpbGVbXTtcclxuXHJcbiAgZ2V0IHNob3dQaWMoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5saXN0VHlwZSA9PT0gJ3BpY3R1cmUnIHx8IHRoaXMubGlzdFR5cGUgPT09ICdwaWN0dXJlLWNhcmQnO1xyXG4gIH1cclxuXHJcbiAgLy8gI3JlZ2lvbiBmaWVsZHNcclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIEBJbnB1dCgpIGxvY2FsZTogYW55ID0ge307XHJcbiAgQElucHV0KCkgbGlzdFR5cGU6IFVwbG9hZExpc3RUeXBlO1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGl0ZW1zKGxpc3Q6IFVwbG9hZEZpbGVbXSkge1xyXG4gICAgbGlzdC5mb3JFYWNoKGZpbGUgPT4ge1xyXG4gICAgICBmaWxlLmxpbmtQcm9wcyA9IHR5cGVvZiBmaWxlLmxpbmtQcm9wcyA9PT0gJ3N0cmluZycgPyBKU09OLnBhcnNlKGZpbGUubGlua1Byb3BzKSA6IGZpbGUubGlua1Byb3BzO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLl9pdGVtcyA9IGxpc3Q7XHJcbiAgfVxyXG4gIGdldCBpdGVtcygpOiBVcGxvYWRGaWxlW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zO1xyXG4gIH1cclxuICBASW5wdXQoKSBpY29uczogU2hvd1VwbG9hZExpc3RJbnRlcmZhY2U7XHJcbiAgQElucHV0KCkgb25QcmV2aWV3OiAoZmlsZTogVXBsb2FkRmlsZSkgPT4gdm9pZDtcclxuICBASW5wdXQoKSBvblJlbW92ZTogKGZpbGU6IFVwbG9hZEZpbGUpID0+IHZvaWQ7XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgLy8gI3JlZ2lvbiBzdHlsZXNcclxuXHJcbiAgcHJpdmF0ZSBwcmVmaXhDbHMgPSAnYW50LXVwbG9hZC1saXN0JztcclxuXHJcbiAgcHJpdmF0ZSBzZXRDbGFzc01hcCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGNsYXNzTWFwID0ge1xyXG4gICAgICBbdGhpcy5wcmVmaXhDbHNdOiB0cnVlLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LSR7dGhpcy5saXN0VHlwZX1gXTogdHJ1ZVxyXG4gICAgfTtcclxuICAgIHRoaXMudXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCBjbGFzc01hcCk7XHJcbiAgfVxyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIC8vICNyZWdpb24gcmVuZGVyXHJcblxyXG4gIHByaXZhdGUgZXh0bmFtZSh1cmw6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBjb25zdCB0ZW1wID0gdXJsLnNwbGl0KCcvJyk7XHJcbiAgICBjb25zdCBmaWxlbmFtZSA9IHRlbXBbdGVtcC5sZW5ndGggLSAxXTtcclxuICAgIGNvbnN0IGZpbGVuYW1lV2l0aG91dFN1ZmZpeCA9IGZpbGVuYW1lLnNwbGl0KC8jfFxcPy8pWzBdO1xyXG4gICAgcmV0dXJuICgvXFwuW14uL1xcXFxdKiQvLmV4ZWMoZmlsZW5hbWVXaXRob3V0U3VmZml4KSB8fCBbJyddKVswXTtcclxuICB9XHJcblxyXG4gIGlzSW1hZ2VVcmwoZmlsZTogVXBsb2FkRmlsZSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKH50aGlzLmltYWdlVHlwZXMuaW5kZXhPZihmaWxlLnR5cGUpKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdXJsOiBzdHJpbmcgPSAoZmlsZS50aHVtYlVybCB8fCBmaWxlLnVybCB8fCAnJykgYXMgc3RyaW5nO1xyXG4gICAgaWYgKCF1cmwpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZXh0ZW5zaW9uID0gdGhpcy5leHRuYW1lKHVybCk7XHJcbiAgICBpZiAoL15kYXRhOmltYWdlXFwvLy50ZXN0KHVybCkgfHwgLyh3ZWJwfHN2Z3xwbmd8Z2lmfGpwZ3xqcGVnfGJtcCkkL2kudGVzdChleHRlbnNpb24pKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIGlmICgvXmRhdGE6Ly50ZXN0KHVybCkpIHtcclxuICAgICAgLy8gb3RoZXIgZmlsZSB0eXBlcyBvZiBiYXNlNjRcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIGlmIChleHRlbnNpb24pIHtcclxuICAgICAgLy8gb3RoZXIgZmlsZSB0eXBlcyB3aGljaCBoYXZlIGV4dGVuc2lvblxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcHJldmlld0ZpbGUoZmlsZTogRmlsZSB8IEJsb2IsIGNhbGxiYWNrOiAoZGF0YVVybDogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICBpZiAoZmlsZS50eXBlICYmIHRoaXMuaW1hZ2VUeXBlcy5pbmRleE9mKGZpbGUudHlwZSkgPT09IC0xKSB7XHJcbiAgICAgIGNhbGxiYWNrKCcnKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmlsZVJlYWRlci9yZWFkQXNEYXRhVVJMXHJcbiAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4gY2FsbGJhY2socmVhZGVyLnJlc3VsdCBhcyBzdHJpbmcpO1xyXG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdlblRodW1iKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgICBjb25zdCB3aW4gPSB3aW5kb3cgYXMgYW55O1xyXG4gICAgaWYgKFxyXG4gICAgICAhdGhpcy5zaG93UGljIHx8XHJcbiAgICAgIHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcgfHxcclxuICAgICAgdHlwZW9mIHdpbiA9PT0gJ3VuZGVmaW5lZCcgfHxcclxuICAgICAgIXdpbi5GaWxlUmVhZGVyIHx8XHJcbiAgICAgICF3aW4uRmlsZVxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuaXRlbXNcclxuICAgICAgLmZpbHRlcihmaWxlID0+IGZpbGUub3JpZ2luRmlsZU9iaiBpbnN0YW5jZW9mIEZpbGUgJiYgZmlsZS50aHVtYlVybCA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAuZm9yRWFjaChmaWxlID0+IHtcclxuICAgICAgICBmaWxlLnRodW1iVXJsID0gJyc7XHJcbiAgICAgICAgdGhpcy5wcmV2aWV3RmlsZShmaWxlLm9yaWdpbkZpbGVPYmohLCAocHJldmlld0RhdGFVcmw6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgZmlsZS50aHVtYlVybCA9IHByZXZpZXdEYXRhVXJsO1xyXG4gICAgICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2hvd1ByZXZpZXcoZmlsZTogVXBsb2FkRmlsZSk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgeyBzaG93UHJldmlld0ljb24sIGhpZGVQcmV2aWV3SWNvbkluTm9uSW1hZ2UgfSA9IHRoaXMuaWNvbnM7XHJcbiAgICBpZiAoIXNob3dQcmV2aWV3SWNvbikge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5pc0ltYWdlVXJsKGZpbGUpID8gdHJ1ZSA6ICFoaWRlUHJldmlld0ljb25Jbk5vbkltYWdlO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlUHJldmlldyhmaWxlOiBVcGxvYWRGaWxlLCBlOiBFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLm9uUHJldmlldykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgcmV0dXJuIHRoaXMub25QcmV2aWV3KGZpbGUpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlUmVtb3ZlKGZpbGU6IFVwbG9hZEZpbGUsIGU6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAodGhpcy5vblJlbW92ZSkge1xyXG4gICAgICB0aGlzLm9uUmVtb3ZlKGZpbGUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIHVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSxcclxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtXHJcbiAgKSB7fVxyXG5cclxuICBkZXRlY3RDaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICB0aGlzLmdlblRodW1iKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
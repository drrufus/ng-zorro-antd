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
export class NzUploadListComponent {
    // #endregion
    /**
     * @param {?} el
     * @param {?} cdr
     * @param {?} updateHostClassService
     * @param {?} platform
     */
    constructor(el, cdr, updateHostClassService, platform) {
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
    /**
     * @return {?}
     */
    get showPic() {
        return this.listType === 'picture' || this.listType === 'picture-card';
    }
    /**
     * @param {?} list
     * @return {?}
     */
    set items(list) {
        list.forEach((/**
         * @param {?} file
         * @return {?}
         */
        file => {
            file.linkProps = typeof file.linkProps === 'string' ? JSON.parse(file.linkProps) : file.linkProps;
        }));
        this._items = list;
    }
    /**
     * @return {?}
     */
    get items() {
        return this._items;
    }
    /**
     * @private
     * @return {?}
     */
    setClassMap() {
        /** @type {?} */
        const classMap = {
            [this.prefixCls]: true,
            [`${this.prefixCls}-${this.listType}`]: true
        };
        this.updateHostClassService.updateHostClass(this.el.nativeElement, classMap);
    }
    // #endregion
    // #region render
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    extname(url) {
        /** @type {?} */
        const temp = url.split('/');
        /** @type {?} */
        const filename = temp[temp.length - 1];
        /** @type {?} */
        const filenameWithoutSuffix = filename.split(/#|\?/)[0];
        return (/\.[^./\\]*$/.exec(filenameWithoutSuffix) || [''])[0];
    }
    /**
     * @param {?} file
     * @return {?}
     */
    isImageUrl(file) {
        if (~this.imageTypes.indexOf(file.type)) {
            return true;
        }
        /** @type {?} */
        const url = (/** @type {?} */ ((file.thumbUrl || file.url || '')));
        if (!url) {
            return false;
        }
        /** @type {?} */
        const extension = this.extname(url);
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
    }
    /**
     * @private
     * @param {?} file
     * @param {?} callback
     * @return {?}
     */
    previewFile(file, callback) {
        if (file.type && this.imageTypes.indexOf(file.type) === -1) {
            callback('');
        }
        /** @type {?} */
        const reader = new FileReader();
        // https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
        reader.onloadend = (/**
         * @return {?}
         */
        () => callback((/** @type {?} */ (reader.result))));
        reader.readAsDataURL(file);
    }
    /**
     * @private
     * @return {?}
     */
    genThumb() {
        if (!this.platform.isBrowser) {
            return;
        }
        // tslint:disable-next-line:no-any
        /** @type {?} */
        const win = (/** @type {?} */ (window));
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
        file => file.originFileObj instanceof File && file.thumbUrl === undefined))
            .forEach((/**
         * @param {?} file
         * @return {?}
         */
        file => {
            file.thumbUrl = '';
            this.previewFile((/** @type {?} */ (file.originFileObj)), (/**
             * @param {?} previewDataUrl
             * @return {?}
             */
            (previewDataUrl) => {
                file.thumbUrl = previewDataUrl;
                this.detectChanges();
            }));
        }));
    }
    /**
     * @param {?} file
     * @return {?}
     */
    showPreview(file) {
        const { showPreviewIcon, hidePreviewIconInNonImage } = this.icons;
        if (!showPreviewIcon) {
            return false;
        }
        return this.isImageUrl(file) ? true : !hidePreviewIconInNonImage;
    }
    /**
     * @param {?} file
     * @param {?} e
     * @return {?}
     */
    handlePreview(file, e) {
        if (!this.onPreview) {
            return;
        }
        e.preventDefault();
        return this.onPreview(file);
    }
    /**
     * @param {?} file
     * @param {?} e
     * @return {?}
     */
    handleRemove(file, e) {
        e.preventDefault();
        if (this.onRemove) {
            this.onRemove(file);
        }
        return;
    }
    /**
     * @return {?}
     */
    detectChanges() {
        this.cdr.detectChanges();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.setClassMap();
        this.genThumb();
    }
}
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
NzUploadListComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: NzUpdateHostClassService },
    { type: Platform }
];
NzUploadListComponent.propDecorators = {
    locale: [{ type: Input }],
    listType: [{ type: Input }],
    items: [{ type: Input }],
    icons: [{ type: Input }],
    onPreview: [{ type: Input }],
    onRemove: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdXBsb2FkLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC91cGxvYWQvIiwic291cmNlcyI6WyJuei11cGxvYWQtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFFTCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFzQjlELE1BQU0sT0FBTyxxQkFBcUI7Ozs7Ozs7O0lBd0loQyxZQUNVLEVBQWMsRUFDZCxHQUFzQixFQUN0QixzQkFBZ0QsRUFDaEQsUUFBa0I7UUFIbEIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBMEI7UUFDaEQsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQTNJcEIsZUFBVSxHQUFHLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDOzs7UUFVekUsV0FBTSxHQUFRLEVBQUUsQ0FBQzs7O1FBb0JsQixjQUFTLEdBQUcsaUJBQWlCLENBQUM7SUE4R25DLENBQUM7Ozs7SUF6SUosSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLGNBQWMsQ0FBQztJQUN6RSxDQUFD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QUNGLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ3JGLENBQUM7aUJBQ0g7Z0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBM0JDLFVBQVU7WUFGVixpQkFBaUI7WUFRVix3QkFBd0I7WUFYeEIsUUFBUTs7O3FCQTRDZCxLQUFLO3VCQUNMLEtBQUs7b0JBQ0wsS0FBSztvQkFVTCxLQUFLO3dCQUNMLEtBQUs7dUJBQ0wsS0FBSzs7Ozs7OztJQXhCTiwyQ0FBa0Y7Ozs7O0lBQ2xGLHVDQUE2Qjs7SUFTN0IsdUNBQTBCOztJQUMxQix5Q0FBa0M7O0lBV2xDLHNDQUF3Qzs7SUFDeEMsMENBQStDOztJQUMvQyx5Q0FBOEM7Ozs7O0lBTTlDLDBDQUFzQzs7Ozs7SUEwR3BDLG1DQUFzQjs7Ozs7SUFDdEIsb0NBQThCOzs7OztJQUM5Qix1REFBd0Q7Ozs7O0lBQ3hELHlDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgYW5pbWF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IFNob3dVcGxvYWRMaXN0SW50ZXJmYWNlLCBVcGxvYWRGaWxlLCBVcGxvYWRMaXN0VHlwZSB9IGZyb20gJy4vaW50ZXJmYWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotdXBsb2FkLWxpc3QnLFxyXG4gIGV4cG9ydEFzOiAnbnpVcGxvYWRMaXN0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotdXBsb2FkLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW056VXBkYXRlSG9zdENsYXNzU2VydmljZV0sXHJcbiAgYW5pbWF0aW9uczogW1xyXG4gICAgdHJpZ2dlcignaXRlbVN0YXRlJywgW1xyXG4gICAgICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBbXHJcbiAgICAgICAgc3R5bGUoeyBoZWlnaHQ6ICcwJywgd2lkdGg6ICcwJywgb3BhY2l0eTogMCB9KSxcclxuICAgICAgICBhbmltYXRlKDE1MCwgc3R5bGUoeyBoZWlnaHQ6ICcqJywgd2lkdGg6ICcqJywgb3BhY2l0eTogMSB9KSlcclxuICAgICAgXSksXHJcbiAgICAgIHRyYW5zaXRpb24oJzpsZWF2ZScsIFthbmltYXRlKDE1MCwgc3R5bGUoeyBoZWlnaHQ6ICcwJywgd2lkdGg6ICcwJywgb3BhY2l0eTogMCB9KSldKVxyXG4gICAgXSlcclxuICBdLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE56VXBsb2FkTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgcHJpdmF0ZSBpbWFnZVR5cGVzID0gWydpbWFnZScsICd3ZWJwJywgJ3BuZycsICdzdmcnLCAnZ2lmJywgJ2pwZycsICdqcGVnJywgJ2JtcCddO1xyXG4gIHByaXZhdGUgX2l0ZW1zOiBVcGxvYWRGaWxlW107XHJcblxyXG4gIGdldCBzaG93UGljKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubGlzdFR5cGUgPT09ICdwaWN0dXJlJyB8fCB0aGlzLmxpc3RUeXBlID09PSAncGljdHVyZS1jYXJkJztcclxuICB9XHJcblxyXG4gIC8vICNyZWdpb24gZmllbGRzXHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBASW5wdXQoKSBsb2NhbGU6IGFueSA9IHt9O1xyXG4gIEBJbnB1dCgpIGxpc3RUeXBlOiBVcGxvYWRMaXN0VHlwZTtcclxuICBASW5wdXQoKVxyXG4gIHNldCBpdGVtcyhsaXN0OiBVcGxvYWRGaWxlW10pIHtcclxuICAgIGxpc3QuZm9yRWFjaChmaWxlID0+IHtcclxuICAgICAgZmlsZS5saW5rUHJvcHMgPSB0eXBlb2YgZmlsZS5saW5rUHJvcHMgPT09ICdzdHJpbmcnID8gSlNPTi5wYXJzZShmaWxlLmxpbmtQcm9wcykgOiBmaWxlLmxpbmtQcm9wcztcclxuICAgIH0pO1xyXG4gICAgdGhpcy5faXRlbXMgPSBsaXN0O1xyXG4gIH1cclxuICBnZXQgaXRlbXMoKTogVXBsb2FkRmlsZVtdIHtcclxuICAgIHJldHVybiB0aGlzLl9pdGVtcztcclxuICB9XHJcbiAgQElucHV0KCkgaWNvbnM6IFNob3dVcGxvYWRMaXN0SW50ZXJmYWNlO1xyXG4gIEBJbnB1dCgpIG9uUHJldmlldzogKGZpbGU6IFVwbG9hZEZpbGUpID0+IHZvaWQ7XHJcbiAgQElucHV0KCkgb25SZW1vdmU6IChmaWxlOiBVcGxvYWRGaWxlKSA9PiB2b2lkO1xyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIC8vICNyZWdpb24gc3R5bGVzXHJcblxyXG4gIHByaXZhdGUgcHJlZml4Q2xzID0gJ2FudC11cGxvYWQtbGlzdCc7XHJcblxyXG4gIHByaXZhdGUgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICBjb25zdCBjbGFzc01hcCA9IHtcclxuICAgICAgW3RoaXMucHJlZml4Q2xzXTogdHJ1ZSxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS0ke3RoaXMubGlzdFR5cGV9YF06IHRydWVcclxuICAgIH07XHJcbiAgICB0aGlzLnVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgY2xhc3NNYXApO1xyXG4gIH1cclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAvLyAjcmVnaW9uIHJlbmRlclxyXG5cclxuICBwcml2YXRlIGV4dG5hbWUodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgdGVtcCA9IHVybC5zcGxpdCgnLycpO1xyXG4gICAgY29uc3QgZmlsZW5hbWUgPSB0ZW1wW3RlbXAubGVuZ3RoIC0gMV07XHJcbiAgICBjb25zdCBmaWxlbmFtZVdpdGhvdXRTdWZmaXggPSBmaWxlbmFtZS5zcGxpdCgvI3xcXD8vKVswXTtcclxuICAgIHJldHVybiAoL1xcLlteLi9cXFxcXSokLy5leGVjKGZpbGVuYW1lV2l0aG91dFN1ZmZpeCkgfHwgWycnXSlbMF07XHJcbiAgfVxyXG5cclxuICBpc0ltYWdlVXJsKGZpbGU6IFVwbG9hZEZpbGUpOiBib29sZWFuIHtcclxuICAgIGlmICh+dGhpcy5pbWFnZVR5cGVzLmluZGV4T2YoZmlsZS50eXBlKSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGNvbnN0IHVybDogc3RyaW5nID0gKGZpbGUudGh1bWJVcmwgfHwgZmlsZS51cmwgfHwgJycpIGFzIHN0cmluZztcclxuICAgIGlmICghdXJsKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGNvbnN0IGV4dGVuc2lvbiA9IHRoaXMuZXh0bmFtZSh1cmwpO1xyXG4gICAgaWYgKC9eZGF0YTppbWFnZVxcLy8udGVzdCh1cmwpIHx8IC8od2VicHxzdmd8cG5nfGdpZnxqcGd8anBlZ3xibXApJC9pLnRlc3QoZXh0ZW5zaW9uKSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSBpZiAoL15kYXRhOi8udGVzdCh1cmwpKSB7XHJcbiAgICAgIC8vIG90aGVyIGZpbGUgdHlwZXMgb2YgYmFzZTY0XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSBpZiAoZXh0ZW5zaW9uKSB7XHJcbiAgICAgIC8vIG90aGVyIGZpbGUgdHlwZXMgd2hpY2ggaGF2ZSBleHRlbnNpb25cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHByZXZpZXdGaWxlKGZpbGU6IEZpbGUgfCBCbG9iLCBjYWxsYmFjazogKGRhdGFVcmw6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgaWYgKGZpbGUudHlwZSAmJiB0aGlzLmltYWdlVHlwZXMuaW5kZXhPZihmaWxlLnR5cGUpID09PSAtMSkge1xyXG4gICAgICBjYWxsYmFjaygnJyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZpbGVSZWFkZXIvcmVhZEFzRGF0YVVSTFxyXG4gICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IGNhbGxiYWNrKHJlYWRlci5yZXN1bHQgYXMgc3RyaW5nKTtcclxuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZW5UaHVtYigpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gICAgY29uc3Qgd2luID0gd2luZG93IGFzIGFueTtcclxuICAgIGlmIChcclxuICAgICAgIXRoaXMuc2hvd1BpYyB8fFxyXG4gICAgICB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnIHx8XHJcbiAgICAgIHR5cGVvZiB3aW4gPT09ICd1bmRlZmluZWQnIHx8XHJcbiAgICAgICF3aW4uRmlsZVJlYWRlciB8fFxyXG4gICAgICAhd2luLkZpbGVcclxuICAgICkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLml0ZW1zXHJcbiAgICAgIC5maWx0ZXIoZmlsZSA9PiBmaWxlLm9yaWdpbkZpbGVPYmogaW5zdGFuY2VvZiBGaWxlICYmIGZpbGUudGh1bWJVcmwgPT09IHVuZGVmaW5lZClcclxuICAgICAgLmZvckVhY2goZmlsZSA9PiB7XHJcbiAgICAgICAgZmlsZS50aHVtYlVybCA9ICcnO1xyXG4gICAgICAgIHRoaXMucHJldmlld0ZpbGUoZmlsZS5vcmlnaW5GaWxlT2JqISwgKHByZXZpZXdEYXRhVXJsOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgIGZpbGUudGh1bWJVcmwgPSBwcmV2aWV3RGF0YVVybDtcclxuICAgICAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHNob3dQcmV2aWV3KGZpbGU6IFVwbG9hZEZpbGUpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHsgc2hvd1ByZXZpZXdJY29uLCBoaWRlUHJldmlld0ljb25Jbk5vbkltYWdlIH0gPSB0aGlzLmljb25zO1xyXG4gICAgaWYgKCFzaG93UHJldmlld0ljb24pIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuaXNJbWFnZVVybChmaWxlKSA/IHRydWUgOiAhaGlkZVByZXZpZXdJY29uSW5Ob25JbWFnZTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVByZXZpZXcoZmlsZTogVXBsb2FkRmlsZSwgZTogRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5vblByZXZpZXcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHJldHVybiB0aGlzLm9uUHJldmlldyhmaWxlKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVJlbW92ZShmaWxlOiBVcGxvYWRGaWxlLCBlOiBFdmVudCk6IHZvaWQge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKHRoaXMub25SZW1vdmUpIHtcclxuICAgICAgdGhpcy5vblJlbW92ZShmaWxlKTtcclxuICAgIH1cclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSB1cGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybVxyXG4gICkge31cclxuXHJcbiAgZGV0ZWN0Q2hhbmdlcygpOiB2b2lkIHtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgdGhpcy5nZW5UaHVtYigpO1xyXG4gIH1cclxufVxyXG4iXX0=
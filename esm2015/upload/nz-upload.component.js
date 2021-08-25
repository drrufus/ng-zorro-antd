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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { of, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { toBoolean, InputBoolean, InputNumber } from 'ng-zorro-antd/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { NzUploadBtnComponent } from './nz-upload-btn.component';
import { NzUploadListComponent } from './nz-upload-list.component';
export class NzUploadComponent {
    // #endregion
    /**
     * @param {?} cdr
     * @param {?} i18n
     */
    constructor(cdr, i18n) {
        this.cdr = cdr;
        this.i18n = i18n;
        // tslint:disable-next-line:no-any
        this.locale = {};
        // #region fields
        this.nzType = 'select';
        this.nzLimit = 0;
        this.nzSize = 0;
        this.nzDirectory = false;
        this.nzOpenFileDialogOnClick = true;
        this.nzFilter = [];
        this.nzFileList = [];
        this.nzDisabled = false;
        this.nzListType = 'text';
        this.nzMultiple = false;
        this.nzName = 'file';
        this._showUploadList = true;
        this.nzShowButton = true;
        this.nzWithCredentials = false;
        this.nzChange = new EventEmitter();
        this.nzFileListChange = new EventEmitter();
        this.onStart = (/**
         * @param {?} file
         * @return {?}
         */
        (file) => {
            if (!this.nzFileList) {
                this.nzFileList = [];
            }
            /** @type {?} */
            const targetItem = this.fileToObject(file);
            targetItem.status = 'uploading';
            this.nzFileList = this.nzFileList.concat(targetItem);
            this.nzFileListChange.emit(this.nzFileList);
            this.nzChange.emit({ file: targetItem, fileList: this.nzFileList, type: 'start' });
            this.detectChangesList();
        });
        this.onProgress = (/**
         * @param {?} e
         * @param {?} file
         * @return {?}
         */
        (e, file) => {
            /** @type {?} */
            const fileList = this.nzFileList;
            /** @type {?} */
            const targetItem = this.getFileItem(file, fileList);
            targetItem.percent = e.percent;
            this.nzChange.emit({
                event: e,
                file: Object.assign({}, targetItem),
                fileList: this.nzFileList,
                type: 'progress'
            });
            this.detectChangesList();
        });
        this.onSuccess = (/**
         * @param {?} res
         * @param {?} file
         * @return {?}
         */
        (res, file) => {
            /** @type {?} */
            const fileList = this.nzFileList;
            /** @type {?} */
            const targetItem = this.getFileItem(file, fileList);
            targetItem.status = 'done';
            targetItem.response = res;
            this.nzChange.emit({
                file: Object.assign({}, targetItem),
                fileList,
                type: 'success'
            });
            this.detectChangesList();
        });
        this.onError = (/**
         * @param {?} err
         * @param {?} file
         * @return {?}
         */
        (err, file) => {
            /** @type {?} */
            const fileList = this.nzFileList;
            /** @type {?} */
            const targetItem = this.getFileItem(file, fileList);
            targetItem.error = err;
            targetItem.status = 'error';
            targetItem.message = this.genErr(targetItem);
            this.nzChange.emit({
                file: Object.assign({}, targetItem),
                fileList,
                type: 'error'
            });
            this.detectChangesList();
        });
        this.onRemove = (/**
         * @param {?} file
         * @return {?}
         */
        (file) => {
            this.uploadComp.abort(file);
            file.status = 'removed';
            /** @type {?} */
            const fnRes = typeof this.nzRemove === 'function' ? this.nzRemove(file) : this.nzRemove == null ? true : this.nzRemove;
            (fnRes instanceof Observable ? fnRes : of(fnRes)).pipe(filter((/**
             * @param {?} res
             * @return {?}
             */
            (res) => res))).subscribe((/**
             * @return {?}
             */
            () => {
                this.nzFileList = this.removeFileItem(file, this.nzFileList);
                this.nzChange.emit({
                    file,
                    fileList: this.nzFileList,
                    type: 'removed'
                });
                this.nzFileListChange.emit(this.nzFileList);
                this.cdr.detectChanges();
            }));
        });
        // #endregion
        // #region styles
        this.prefixCls = 'ant-upload';
        this.classList = [];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzShowUploadList(value) {
        this._showUploadList = typeof value === 'boolean' ? toBoolean(value) : value;
    }
    /**
     * @return {?}
     */
    get nzShowUploadList() {
        return this._showUploadList;
    }
    /**
     * @private
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    zipOptions() {
        if (typeof (/** @type {?} */ (this)).nzShowUploadList === 'boolean' && (/** @type {?} */ (this)).nzShowUploadList) {
            (/** @type {?} */ (this)).nzShowUploadList = {
                showPreviewIcon: true,
                showRemoveIcon: true,
                hidePreviewIconInNonImage: false
            };
        }
        // filters
        /** @type {?} */
        const filters = (/** @type {?} */ (this)).nzFilter.slice();
        if ((/** @type {?} */ (this)).nzMultiple && (/** @type {?} */ (this)).nzLimit > 0 && filters.findIndex((/**
         * @param {?} w
         * @return {?}
         */
        w => w.name === 'limit')) === -1) {
            filters.push({
                name: 'limit',
                fn: (/**
                 * @param {?} fileList
                 * @return {?}
                 */
                (fileList) => fileList.slice(-(/** @type {?} */ (this)).nzLimit))
            });
        }
        if ((/** @type {?} */ (this)).nzSize > 0 && filters.findIndex((/**
         * @param {?} w
         * @return {?}
         */
        w => w.name === 'size')) === -1) {
            filters.push({
                name: 'size',
                fn: (/**
                 * @param {?} fileList
                 * @return {?}
                 */
                (fileList) => fileList.filter((/**
                 * @param {?} w
                 * @return {?}
                 */
                w => w.size / 1024 <= (/** @type {?} */ (this)).nzSize)))
            });
        }
        if ((/** @type {?} */ (this)).nzFileType && (/** @type {?} */ (this)).nzFileType.length > 0 && filters.findIndex((/**
         * @param {?} w
         * @return {?}
         */
        w => w.name === 'type')) === -1) {
            /** @type {?} */
            const types = (/** @type {?} */ (this)).nzFileType.split(',');
            filters.push({
                name: 'type',
                fn: (/**
                 * @param {?} fileList
                 * @return {?}
                 */
                (fileList) => fileList.filter((/**
                 * @param {?} w
                 * @return {?}
                 */
                w => ~types.indexOf(w.type))))
            });
        }
        (/** @type {?} */ (this))._btnOptions = {
            disabled: (/** @type {?} */ (this)).nzDisabled,
            accept: (/** @type {?} */ (this)).nzAccept,
            action: (/** @type {?} */ (this)).nzAction,
            directory: (/** @type {?} */ (this)).nzDirectory,
            openFileDialogOnClick: (/** @type {?} */ (this)).nzOpenFileDialogOnClick,
            beforeUpload: (/** @type {?} */ (this)).nzBeforeUpload,
            customRequest: (/** @type {?} */ (this)).nzCustomRequest,
            data: (/** @type {?} */ (this)).nzData,
            headers: (/** @type {?} */ (this)).nzHeaders,
            name: (/** @type {?} */ (this)).nzName,
            multiple: (/** @type {?} */ (this)).nzMultiple,
            withCredentials: (/** @type {?} */ (this)).nzWithCredentials,
            filters,
            onStart: (/** @type {?} */ (this)).onStart,
            onProgress: (/** @type {?} */ (this)).onProgress,
            onSuccess: (/** @type {?} */ (this)).onSuccess,
            onError: (/** @type {?} */ (this)).onError
        };
        return (/** @type {?} */ (this));
    }
    // #region upload
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    fileToObject(file) {
        return {
            lastModified: file.lastModified,
            lastModifiedDate: file.lastModifiedDate,
            name: file.filename || file.name,
            size: file.size,
            type: file.type,
            uid: file.uid,
            response: file.response,
            error: file.error,
            percent: 0,
            // tslint:disable-next-line:no-any
            originFileObj: (/** @type {?} */ (file))
        };
    }
    /**
     * @private
     * @param {?} file
     * @param {?} fileList
     * @return {?}
     */
    getFileItem(file, fileList) {
        return fileList.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => item.uid === file.uid))[0];
    }
    /**
     * @private
     * @param {?} file
     * @param {?} fileList
     * @return {?}
     */
    removeFileItem(file, fileList) {
        return fileList.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => item.uid !== file.uid));
    }
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    genErr(file) {
        return file.response && typeof file.response === 'string'
            ? file.response
            : (file.error && file.error.statusText) || this.locale.uploadError;
    }
    // skip safari bug
    // tslint:disable-next-line:no-any
    /**
     * @param {?} e
     * @return {?}
     */
    fileDrop(e) {
        if (e.type === this.dragState) {
            return;
        }
        this.dragState = e.type;
        this.setClassMap();
    }
    // #endregion
    // #region list
    /**
     * @private
     * @return {?}
     */
    detectChangesList() {
        this.cdr.detectChanges();
        this.listComp.detectChanges();
    }
    /**
     * @private
     * @return {?}
     */
    setClassMap() {
        /** @type {?} */
        let subCls = [];
        if (this.nzType === 'drag') {
            if (this.nzFileList.some((/**
             * @param {?} file
             * @return {?}
             */
            file => file.status === 'uploading'))) {
                subCls.push(`${this.prefixCls}-drag-uploading`);
            }
            if (this.dragState === 'dragover') {
                subCls.push(`${this.prefixCls}-drag-hover`);
            }
        }
        else {
            subCls = [`${this.prefixCls}-select-${this.nzListType}`];
        }
        this.classList = [
            this.prefixCls,
            `${this.prefixCls}-${this.nzType}`,
            ...subCls,
            (this.nzDisabled && `${this.prefixCls}-disabled`) || ''
        ].filter((/**
         * @param {?} item
         * @return {?}
         */
        item => !!item));
        this.cdr.detectChanges();
    }
    // #endregion
    /**
     * @return {?}
     */
    ngOnInit() {
        this.i18n$ = this.i18n.localeChange.subscribe((/**
         * @return {?}
         */
        () => {
            this.locale = this.i18n.getLocaleData('Upload');
            this.detectChangesList();
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzFileList) {
            (this.nzFileList || []).forEach((/**
             * @param {?} file
             * @return {?}
             */
            file => (file.message = this.genErr(file))));
        }
        this.zipOptions().setClassMap();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.i18n$.unsubscribe();
    }
}
NzUploadComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-upload',
                exportAs: 'nzUpload',
                template: "<ng-template #list>\r\n  <nz-upload-list #listComp [style.display]=\"nzShowUploadList ? '' : 'none'\"\r\n    [locale]=\"locale\"\r\n    [listType]=\"nzListType\"\r\n    [items]=\"nzFileList || []\"\r\n    [icons]=\"nzShowUploadList\"\r\n    [onPreview]=\"nzPreview\"\r\n    [onRemove]=\"onRemove\"></nz-upload-list>\r\n</ng-template>\r\n<ng-template #con><ng-content></ng-content></ng-template>\r\n<ng-template #btn>\r\n  <div [ngClass]=\"classList\" [style.display]=\"nzShowButton ? '' : 'none'\">\r\n    <div nz-upload-btn #uploadComp [options]=\"_btnOptions\">\r\n      <ng-template [ngTemplateOutlet]=\"con\"></ng-template>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n<ng-container *ngIf=\"nzType === 'drag'; else select\">\r\n  <div [ngClass]=\"classList\"\r\n    (drop)=\"fileDrop($event)\"\r\n    (dragover)=\"fileDrop($event)\"\r\n    (dragleave)=\"fileDrop($event)\">\r\n    <div nz-upload-btn #uploadComp [options]=\"_btnOptions\" [classes]=\"{'ant-upload-btn': true}\">\r\n      <div class=\"ant-upload-drag-container\">\r\n        <ng-template [ngTemplateOutlet]=\"con\"></ng-template>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ng-template [ngTemplateOutlet]=\"list\"></ng-template>\r\n</ng-container>\r\n<ng-template #select>\r\n  <ng-container *ngIf=\"nzListType === 'picture-card'; else pic\">\r\n    <ng-template [ngTemplateOutlet]=\"list\"></ng-template>\r\n    <ng-template [ngTemplateOutlet]=\"btn\"></ng-template>\r\n  </ng-container>\r\n</ng-template>\r\n<ng-template #pic>\r\n  <ng-template [ngTemplateOutlet]=\"btn\"></ng-template>\r\n  <ng-template [ngTemplateOutlet]=\"list\"></ng-template>\r\n</ng-template>",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.ant-upload-picture-card-wrapper]': 'nzListType === "picture-card"'
                }
            }] }
];
/** @nocollapse */
NzUploadComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzI18nService }
];
NzUploadComponent.propDecorators = {
    uploadComp: [{ type: ViewChild, args: ['uploadComp', { static: false },] }],
    listComp: [{ type: ViewChild, args: ['listComp', { static: false },] }],
    nzType: [{ type: Input }],
    nzLimit: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzFileType: [{ type: Input }],
    nzAccept: [{ type: Input }],
    nzAction: [{ type: Input }],
    nzDirectory: [{ type: Input }],
    nzOpenFileDialogOnClick: [{ type: Input }],
    nzBeforeUpload: [{ type: Input }],
    nzCustomRequest: [{ type: Input }],
    nzData: [{ type: Input }],
    nzFilter: [{ type: Input }],
    nzFileList: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzHeaders: [{ type: Input }],
    nzListType: [{ type: Input }],
    nzMultiple: [{ type: Input }],
    nzName: [{ type: Input }],
    nzShowUploadList: [{ type: Input }],
    nzShowButton: [{ type: Input }],
    nzWithCredentials: [{ type: Input }],
    nzRemove: [{ type: Input }],
    nzPreview: [{ type: Input }],
    nzChange: [{ type: Output }],
    nzFileListChange: [{ type: Output }]
};
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Object)
], NzUploadComponent.prototype, "nzLimit", void 0);
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Object)
], NzUploadComponent.prototype, "nzSize", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzUploadComponent.prototype, "nzDirectory", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzUploadComponent.prototype, "nzOpenFileDialogOnClick", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzUploadComponent.prototype, "nzDisabled", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzUploadComponent.prototype, "nzMultiple", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzUploadComponent.prototype, "nzShowButton", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzUploadComponent.prototype, "nzWithCredentials", void 0);
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzUploadComponent.prototype.i18n$;
    /** @type {?} */
    NzUploadComponent.prototype.uploadComp;
    /** @type {?} */
    NzUploadComponent.prototype.listComp;
    /** @type {?} */
    NzUploadComponent.prototype.locale;
    /** @type {?} */
    NzUploadComponent.prototype.nzType;
    /** @type {?} */
    NzUploadComponent.prototype.nzLimit;
    /** @type {?} */
    NzUploadComponent.prototype.nzSize;
    /** @type {?} */
    NzUploadComponent.prototype.nzFileType;
    /** @type {?} */
    NzUploadComponent.prototype.nzAccept;
    /** @type {?} */
    NzUploadComponent.prototype.nzAction;
    /** @type {?} */
    NzUploadComponent.prototype.nzDirectory;
    /** @type {?} */
    NzUploadComponent.prototype.nzOpenFileDialogOnClick;
    /** @type {?} */
    NzUploadComponent.prototype.nzBeforeUpload;
    /** @type {?} */
    NzUploadComponent.prototype.nzCustomRequest;
    /** @type {?} */
    NzUploadComponent.prototype.nzData;
    /** @type {?} */
    NzUploadComponent.prototype.nzFilter;
    /** @type {?} */
    NzUploadComponent.prototype.nzFileList;
    /** @type {?} */
    NzUploadComponent.prototype.nzDisabled;
    /** @type {?} */
    NzUploadComponent.prototype.nzHeaders;
    /** @type {?} */
    NzUploadComponent.prototype.nzListType;
    /** @type {?} */
    NzUploadComponent.prototype.nzMultiple;
    /** @type {?} */
    NzUploadComponent.prototype.nzName;
    /**
     * @type {?}
     * @private
     */
    NzUploadComponent.prototype._showUploadList;
    /** @type {?} */
    NzUploadComponent.prototype.nzShowButton;
    /** @type {?} */
    NzUploadComponent.prototype.nzWithCredentials;
    /** @type {?} */
    NzUploadComponent.prototype.nzRemove;
    /** @type {?} */
    NzUploadComponent.prototype.nzPreview;
    /** @type {?} */
    NzUploadComponent.prototype.nzChange;
    /** @type {?} */
    NzUploadComponent.prototype.nzFileListChange;
    /** @type {?} */
    NzUploadComponent.prototype._btnOptions;
    /**
     * @type {?}
     * @private
     */
    NzUploadComponent.prototype.onStart;
    /**
     * @type {?}
     * @private
     */
    NzUploadComponent.prototype.onProgress;
    /**
     * @type {?}
     * @private
     */
    NzUploadComponent.prototype.onSuccess;
    /**
     * @type {?}
     * @private
     */
    NzUploadComponent.prototype.onError;
    /**
     * @type {?}
     * @private
     */
    NzUploadComponent.prototype.dragState;
    /** @type {?} */
    NzUploadComponent.prototype.onRemove;
    /**
     * @type {?}
     * @private
     */
    NzUploadComponent.prototype.prefixCls;
    /** @type {?} */
    NzUploadComponent.prototype.classList;
    /**
     * @type {?}
     * @private
     */
    NzUploadComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzUploadComponent.prototype.i18n;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdXBsb2FkLyIsInNvdXJjZXMiOlsibnotdXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBR04sU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDcEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXhDLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQVluRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNqRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQWFuRSxNQUFNLE9BQU8saUJBQWlCOzs7Ozs7SUF3RzVCLFlBQW9CLEdBQXNCLEVBQVUsSUFBbUI7UUFBbkQsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFlOztRQW5HdkUsV0FBTSxHQUFRLEVBQUUsQ0FBQzs7UUFJUixXQUFNLEdBQWUsUUFBUSxDQUFDO1FBQ2YsWUFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFLVixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQiw0QkFBdUIsR0FBRyxJQUFJLENBQUM7UUFJL0MsYUFBUSxHQUFtQixFQUFFLENBQUM7UUFDOUIsZUFBVSxHQUFpQixFQUFFLENBQUM7UUFDZCxlQUFV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Q0FBNEM7O0lBQzVDLG1DQUF5Qjs7Ozs7SUFFekIsNENBQWtFOztJQVdsRSx5Q0FBNkM7O0lBQzdDLDhDQUFtRDs7SUFFbkQscUNBQXVFOztJQUN2RSxzQ0FBK0M7O0lBRS9DLHFDQUFxRzs7SUFDckcsNkNBQW1HOztJQUVuRyx3Q0FBOEI7Ozs7O0lBeUY5QixvQ0FVRTs7Ozs7SUFFRix1Q0FXRTs7Ozs7SUFFRixzQ0FXRTs7Ozs7SUFFRixvQ0FZRTs7Ozs7SUFNRixzQ0FBMEI7O0lBcUIxQixxQ0FlRTs7Ozs7SUFNRixzQ0FBaUM7O0lBQ2pDLHNDQUF5Qjs7Ozs7SUFySWIsZ0NBQThCOzs7OztJQUFFLGlDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2UsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgb2YsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyB0b0Jvb2xlYW4sIElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuXHJcbmltcG9ydCB7XHJcbiAgU2hvd1VwbG9hZExpc3RJbnRlcmZhY2UsXHJcbiAgVXBsb2FkQ2hhbmdlUGFyYW0sXHJcbiAgVXBsb2FkRmlsZSxcclxuICBVcGxvYWRGaWx0ZXIsXHJcbiAgVXBsb2FkTGlzdFR5cGUsXHJcbiAgVXBsb2FkVHlwZSxcclxuICBVcGxvYWRYSFJBcmdzLFxyXG4gIFppcEJ1dHRvbk9wdGlvbnNcclxufSBmcm9tICcuL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IE56VXBsb2FkQnRuQ29tcG9uZW50IH0gZnJvbSAnLi9uei11cGxvYWQtYnRuLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56VXBsb2FkTGlzdENvbXBvbmVudCB9IGZyb20gJy4vbnotdXBsb2FkLWxpc3QuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotdXBsb2FkJyxcclxuICBleHBvcnRBczogJ256VXBsb2FkJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotdXBsb2FkLmNvbXBvbmVudC5odG1sJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LXVwbG9hZC1waWN0dXJlLWNhcmQtd3JhcHBlcl0nOiAnbnpMaXN0VHlwZSA9PT0gXCJwaWN0dXJlLWNhcmRcIidcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelVwbG9hZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgaTE4biQ6IFN1YnNjcmlwdGlvbjtcclxuICBAVmlld0NoaWxkKCd1cGxvYWRDb21wJywgeyBzdGF0aWM6IGZhbHNlIH0pIHVwbG9hZENvbXA6IE56VXBsb2FkQnRuQ29tcG9uZW50O1xyXG4gIEBWaWV3Q2hpbGQoJ2xpc3RDb21wJywgeyBzdGF0aWM6IGZhbHNlIH0pIGxpc3RDb21wOiBOelVwbG9hZExpc3RDb21wb25lbnQ7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIGxvY2FsZTogYW55ID0ge307XHJcblxyXG4gIC8vICNyZWdpb24gZmllbGRzXHJcblxyXG4gIEBJbnB1dCgpIG56VHlwZTogVXBsb2FkVHlwZSA9ICdzZWxlY3QnO1xyXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG56TGltaXQgPSAwO1xyXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG56U2l6ZSA9IDA7XHJcblxyXG4gIEBJbnB1dCgpIG56RmlsZVR5cGU6IHN0cmluZztcclxuICBASW5wdXQoKSBuekFjY2VwdDogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgQElucHV0KCkgbnpBY3Rpb246IHN0cmluZztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXJlY3RvcnkgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpPcGVuRmlsZURpYWxvZ09uQ2xpY2sgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIG56QmVmb3JlVXBsb2FkOiAoZmlsZTogVXBsb2FkRmlsZSwgZmlsZUxpc3Q6IFVwbG9hZEZpbGVbXSkgPT4gYm9vbGVhbiB8IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcbiAgQElucHV0KCkgbnpDdXN0b21SZXF1ZXN0OiAoaXRlbTogVXBsb2FkWEhSQXJncykgPT4gU3Vic2NyaXB0aW9uO1xyXG4gIEBJbnB1dCgpIG56RGF0YToge30gfCAoKGZpbGU6IFVwbG9hZEZpbGUpID0+IHt9KTtcclxuICBASW5wdXQoKSBuekZpbHRlcjogVXBsb2FkRmlsdGVyW10gPSBbXTtcclxuICBASW5wdXQoKSBuekZpbGVMaXN0OiBVcGxvYWRGaWxlW10gPSBbXTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56SGVhZGVyczoge30gfCAoKGZpbGU6IFVwbG9hZEZpbGUpID0+IHt9KTtcclxuICBASW5wdXQoKSBuekxpc3RUeXBlOiBVcGxvYWRMaXN0VHlwZSA9ICd0ZXh0JztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpNdWx0aXBsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56TmFtZSA9ICdmaWxlJztcclxuXHJcbiAgcHJpdmF0ZSBfc2hvd1VwbG9hZExpc3Q6IGJvb2xlYW4gfCBTaG93VXBsb2FkTGlzdEludGVyZmFjZSA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56U2hvd1VwbG9hZExpc3QodmFsdWU6IGJvb2xlYW4gfCBTaG93VXBsb2FkTGlzdEludGVyZmFjZSkge1xyXG4gICAgdGhpcy5fc2hvd1VwbG9hZExpc3QgPSB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJyA/IHRvQm9vbGVhbih2YWx1ZSkgOiB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGdldCBuelNob3dVcGxvYWRMaXN0KCk6IGJvb2xlYW4gfCBTaG93VXBsb2FkTGlzdEludGVyZmFjZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2hvd1VwbG9hZExpc3Q7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93QnV0dG9uID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpXaXRoQ3JlZGVudGlhbHMgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KCkgbnpSZW1vdmU6IChmaWxlOiBVcGxvYWRGaWxlKSA9PiBib29sZWFuIHwgT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuICBASW5wdXQoKSBuelByZXZpZXc6IChmaWxlOiBVcGxvYWRGaWxlKSA9PiB2b2lkO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDaGFuZ2U6IEV2ZW50RW1pdHRlcjxVcGxvYWRDaGFuZ2VQYXJhbT4gPSBuZXcgRXZlbnRFbWl0dGVyPFVwbG9hZENoYW5nZVBhcmFtPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekZpbGVMaXN0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8VXBsb2FkRmlsZVtdPiA9IG5ldyBFdmVudEVtaXR0ZXI8VXBsb2FkRmlsZVtdPigpO1xyXG5cclxuICBfYnRuT3B0aW9uczogWmlwQnV0dG9uT3B0aW9ucztcclxuXHJcbiAgcHJpdmF0ZSB6aXBPcHRpb25zKCk6IHRoaXMge1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLm56U2hvd1VwbG9hZExpc3QgPT09ICdib29sZWFuJyAmJiB0aGlzLm56U2hvd1VwbG9hZExpc3QpIHtcclxuICAgICAgdGhpcy5uelNob3dVcGxvYWRMaXN0ID0ge1xyXG4gICAgICAgIHNob3dQcmV2aWV3SWNvbjogdHJ1ZSxcclxuICAgICAgICBzaG93UmVtb3ZlSWNvbjogdHJ1ZSxcclxuICAgICAgICBoaWRlUHJldmlld0ljb25Jbk5vbkltYWdlOiBmYWxzZVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgLy8gZmlsdGVyc1xyXG4gICAgY29uc3QgZmlsdGVyczogVXBsb2FkRmlsdGVyW10gPSB0aGlzLm56RmlsdGVyLnNsaWNlKCk7XHJcbiAgICBpZiAodGhpcy5uek11bHRpcGxlICYmIHRoaXMubnpMaW1pdCA+IDAgJiYgZmlsdGVycy5maW5kSW5kZXgodyA9PiB3Lm5hbWUgPT09ICdsaW1pdCcpID09PSAtMSkge1xyXG4gICAgICBmaWx0ZXJzLnB1c2goe1xyXG4gICAgICAgIG5hbWU6ICdsaW1pdCcsXHJcbiAgICAgICAgZm46IChmaWxlTGlzdDogVXBsb2FkRmlsZVtdKSA9PiBmaWxlTGlzdC5zbGljZSgtdGhpcy5uekxpbWl0KVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm56U2l6ZSA+IDAgJiYgZmlsdGVycy5maW5kSW5kZXgodyA9PiB3Lm5hbWUgPT09ICdzaXplJykgPT09IC0xKSB7XHJcbiAgICAgIGZpbHRlcnMucHVzaCh7XHJcbiAgICAgICAgbmFtZTogJ3NpemUnLFxyXG4gICAgICAgIGZuOiAoZmlsZUxpc3Q6IFVwbG9hZEZpbGVbXSkgPT4gZmlsZUxpc3QuZmlsdGVyKHcgPT4gdy5zaXplIC8gMTAyNCA8PSB0aGlzLm56U2l6ZSlcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5uekZpbGVUeXBlICYmIHRoaXMubnpGaWxlVHlwZS5sZW5ndGggPiAwICYmIGZpbHRlcnMuZmluZEluZGV4KHcgPT4gdy5uYW1lID09PSAndHlwZScpID09PSAtMSkge1xyXG4gICAgICBjb25zdCB0eXBlcyA9IHRoaXMubnpGaWxlVHlwZS5zcGxpdCgnLCcpO1xyXG4gICAgICBmaWx0ZXJzLnB1c2goe1xyXG4gICAgICAgIG5hbWU6ICd0eXBlJyxcclxuICAgICAgICBmbjogKGZpbGVMaXN0OiBVcGxvYWRGaWxlW10pID0+IGZpbGVMaXN0LmZpbHRlcih3ID0+IH50eXBlcy5pbmRleE9mKHcudHlwZSkpXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fYnRuT3B0aW9ucyA9IHtcclxuICAgICAgZGlzYWJsZWQ6IHRoaXMubnpEaXNhYmxlZCxcclxuICAgICAgYWNjZXB0OiB0aGlzLm56QWNjZXB0LFxyXG4gICAgICBhY3Rpb246IHRoaXMubnpBY3Rpb24sXHJcbiAgICAgIGRpcmVjdG9yeTogdGhpcy5uekRpcmVjdG9yeSxcclxuICAgICAgb3BlbkZpbGVEaWFsb2dPbkNsaWNrOiB0aGlzLm56T3BlbkZpbGVEaWFsb2dPbkNsaWNrLFxyXG4gICAgICBiZWZvcmVVcGxvYWQ6IHRoaXMubnpCZWZvcmVVcGxvYWQsXHJcbiAgICAgIGN1c3RvbVJlcXVlc3Q6IHRoaXMubnpDdXN0b21SZXF1ZXN0LFxyXG4gICAgICBkYXRhOiB0aGlzLm56RGF0YSxcclxuICAgICAgaGVhZGVyczogdGhpcy5uekhlYWRlcnMsXHJcbiAgICAgIG5hbWU6IHRoaXMubnpOYW1lLFxyXG4gICAgICBtdWx0aXBsZTogdGhpcy5uek11bHRpcGxlLFxyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IHRoaXMubnpXaXRoQ3JlZGVudGlhbHMsXHJcbiAgICAgIGZpbHRlcnMsXHJcbiAgICAgIG9uU3RhcnQ6IHRoaXMub25TdGFydCxcclxuICAgICAgb25Qcm9ncmVzczogdGhpcy5vblByb2dyZXNzLFxyXG4gICAgICBvblN1Y2Nlc3M6IHRoaXMub25TdWNjZXNzLFxyXG4gICAgICBvbkVycm9yOiB0aGlzLm9uRXJyb3JcclxuICAgIH07XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UpIHt9XHJcblxyXG4gIC8vICNyZWdpb24gdXBsb2FkXHJcblxyXG4gIHByaXZhdGUgZmlsZVRvT2JqZWN0KGZpbGU6IFVwbG9hZEZpbGUpOiBVcGxvYWRGaWxlIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGxhc3RNb2RpZmllZDogZmlsZS5sYXN0TW9kaWZpZWQsXHJcbiAgICAgIGxhc3RNb2RpZmllZERhdGU6IGZpbGUubGFzdE1vZGlmaWVkRGF0ZSxcclxuICAgICAgbmFtZTogZmlsZS5maWxlbmFtZSB8fCBmaWxlLm5hbWUsXHJcbiAgICAgIHNpemU6IGZpbGUuc2l6ZSxcclxuICAgICAgdHlwZTogZmlsZS50eXBlLFxyXG4gICAgICB1aWQ6IGZpbGUudWlkLFxyXG4gICAgICByZXNwb25zZTogZmlsZS5yZXNwb25zZSxcclxuICAgICAgZXJyb3I6IGZpbGUuZXJyb3IsXHJcbiAgICAgIHBlcmNlbnQ6IDAsXHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICAgICAgb3JpZ2luRmlsZU9iajogZmlsZSBhcyBhbnlcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEZpbGVJdGVtKGZpbGU6IFVwbG9hZEZpbGUsIGZpbGVMaXN0OiBVcGxvYWRGaWxlW10pOiBVcGxvYWRGaWxlIHtcclxuICAgIHJldHVybiBmaWxlTGlzdC5maWx0ZXIoaXRlbSA9PiBpdGVtLnVpZCA9PT0gZmlsZS51aWQpWzBdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVGaWxlSXRlbShmaWxlOiBVcGxvYWRGaWxlLCBmaWxlTGlzdDogVXBsb2FkRmlsZVtdKTogVXBsb2FkRmlsZVtdIHtcclxuICAgIHJldHVybiBmaWxlTGlzdC5maWx0ZXIoaXRlbSA9PiBpdGVtLnVpZCAhPT0gZmlsZS51aWQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZW5FcnIoZmlsZTogVXBsb2FkRmlsZSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gZmlsZS5yZXNwb25zZSAmJiB0eXBlb2YgZmlsZS5yZXNwb25zZSA9PT0gJ3N0cmluZydcclxuICAgICAgPyBmaWxlLnJlc3BvbnNlXHJcbiAgICAgIDogKGZpbGUuZXJyb3IgJiYgZmlsZS5lcnJvci5zdGF0dXNUZXh0KSB8fCB0aGlzLmxvY2FsZS51cGxvYWRFcnJvcjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25TdGFydCA9IChmaWxlOiBVcGxvYWRGaWxlKTogdm9pZCA9PiB7XHJcbiAgICBpZiAoIXRoaXMubnpGaWxlTGlzdCkge1xyXG4gICAgICB0aGlzLm56RmlsZUxpc3QgPSBbXTtcclxuICAgIH1cclxuICAgIGNvbnN0IHRhcmdldEl0ZW0gPSB0aGlzLmZpbGVUb09iamVjdChmaWxlKTtcclxuICAgIHRhcmdldEl0ZW0uc3RhdHVzID0gJ3VwbG9hZGluZyc7XHJcbiAgICB0aGlzLm56RmlsZUxpc3QgPSB0aGlzLm56RmlsZUxpc3QuY29uY2F0KHRhcmdldEl0ZW0pO1xyXG4gICAgdGhpcy5uekZpbGVMaXN0Q2hhbmdlLmVtaXQodGhpcy5uekZpbGVMaXN0KTtcclxuICAgIHRoaXMubnpDaGFuZ2UuZW1pdCh7IGZpbGU6IHRhcmdldEl0ZW0sIGZpbGVMaXN0OiB0aGlzLm56RmlsZUxpc3QsIHR5cGU6ICdzdGFydCcgfSk7XHJcbiAgICB0aGlzLmRldGVjdENoYW5nZXNMaXN0KCk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBvblByb2dyZXNzID0gKGU6IHsgcGVyY2VudDogbnVtYmVyIH0sIGZpbGU6IFVwbG9hZEZpbGUpOiB2b2lkID0+IHtcclxuICAgIGNvbnN0IGZpbGVMaXN0ID0gdGhpcy5uekZpbGVMaXN0O1xyXG4gICAgY29uc3QgdGFyZ2V0SXRlbSA9IHRoaXMuZ2V0RmlsZUl0ZW0oZmlsZSwgZmlsZUxpc3QpO1xyXG4gICAgdGFyZ2V0SXRlbS5wZXJjZW50ID0gZS5wZXJjZW50O1xyXG4gICAgdGhpcy5uekNoYW5nZS5lbWl0KHtcclxuICAgICAgZXZlbnQ6IGUsXHJcbiAgICAgIGZpbGU6IHsgLi4udGFyZ2V0SXRlbSB9LFxyXG4gICAgICBmaWxlTGlzdDogdGhpcy5uekZpbGVMaXN0LFxyXG4gICAgICB0eXBlOiAncHJvZ3Jlc3MnXHJcbiAgICB9KTtcclxuICAgIHRoaXMuZGV0ZWN0Q2hhbmdlc0xpc3QoKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIG9uU3VjY2VzcyA9IChyZXM6IHt9LCBmaWxlOiBVcGxvYWRGaWxlKTogdm9pZCA9PiB7XHJcbiAgICBjb25zdCBmaWxlTGlzdCA9IHRoaXMubnpGaWxlTGlzdDtcclxuICAgIGNvbnN0IHRhcmdldEl0ZW0gPSB0aGlzLmdldEZpbGVJdGVtKGZpbGUsIGZpbGVMaXN0KTtcclxuICAgIHRhcmdldEl0ZW0uc3RhdHVzID0gJ2RvbmUnO1xyXG4gICAgdGFyZ2V0SXRlbS5yZXNwb25zZSA9IHJlcztcclxuICAgIHRoaXMubnpDaGFuZ2UuZW1pdCh7XHJcbiAgICAgIGZpbGU6IHsgLi4udGFyZ2V0SXRlbSB9LFxyXG4gICAgICBmaWxlTGlzdCxcclxuICAgICAgdHlwZTogJ3N1Y2Nlc3MnXHJcbiAgICB9KTtcclxuICAgIHRoaXMuZGV0ZWN0Q2hhbmdlc0xpc3QoKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIG9uRXJyb3IgPSAoZXJyOiB7fSwgZmlsZTogVXBsb2FkRmlsZSk6IHZvaWQgPT4ge1xyXG4gICAgY29uc3QgZmlsZUxpc3QgPSB0aGlzLm56RmlsZUxpc3Q7XHJcbiAgICBjb25zdCB0YXJnZXRJdGVtID0gdGhpcy5nZXRGaWxlSXRlbShmaWxlLCBmaWxlTGlzdCk7XHJcbiAgICB0YXJnZXRJdGVtLmVycm9yID0gZXJyO1xyXG4gICAgdGFyZ2V0SXRlbS5zdGF0dXMgPSAnZXJyb3InO1xyXG4gICAgdGFyZ2V0SXRlbS5tZXNzYWdlID0gdGhpcy5nZW5FcnIodGFyZ2V0SXRlbSk7XHJcbiAgICB0aGlzLm56Q2hhbmdlLmVtaXQoe1xyXG4gICAgICBmaWxlOiB7IC4uLnRhcmdldEl0ZW0gfSxcclxuICAgICAgZmlsZUxpc3QsXHJcbiAgICAgIHR5cGU6ICdlcnJvcidcclxuICAgIH0pO1xyXG4gICAgdGhpcy5kZXRlY3RDaGFuZ2VzTGlzdCgpO1xyXG4gIH07XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgLy8gI3JlZ2lvbiBkcmFnXHJcblxyXG4gIHByaXZhdGUgZHJhZ1N0YXRlOiBzdHJpbmc7XHJcblxyXG4gIC8vIHNraXAgc2FmYXJpIGJ1Z1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBmaWxlRHJvcChlOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmIChlLnR5cGUgPT09IHRoaXMuZHJhZ1N0YXRlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuZHJhZ1N0YXRlID0gZS50eXBlO1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gIH1cclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAvLyAjcmVnaW9uIGxpc3RcclxuXHJcbiAgcHJpdmF0ZSBkZXRlY3RDaGFuZ2VzTGlzdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIHRoaXMubGlzdENvbXAuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgb25SZW1vdmUgPSAoZmlsZTogVXBsb2FkRmlsZSk6IHZvaWQgPT4ge1xyXG4gICAgdGhpcy51cGxvYWRDb21wLmFib3J0KGZpbGUpO1xyXG4gICAgZmlsZS5zdGF0dXMgPSAncmVtb3ZlZCc7XHJcbiAgICBjb25zdCBmblJlcyA9XHJcbiAgICAgIHR5cGVvZiB0aGlzLm56UmVtb3ZlID09PSAnZnVuY3Rpb24nID8gdGhpcy5uelJlbW92ZShmaWxlKSA6IHRoaXMubnpSZW1vdmUgPT0gbnVsbCA/IHRydWUgOiB0aGlzLm56UmVtb3ZlO1xyXG4gICAgKGZuUmVzIGluc3RhbmNlb2YgT2JzZXJ2YWJsZSA/IGZuUmVzIDogb2YoZm5SZXMpKS5waXBlKGZpbHRlcigocmVzOiBib29sZWFuKSA9PiByZXMpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLm56RmlsZUxpc3QgPSB0aGlzLnJlbW92ZUZpbGVJdGVtKGZpbGUsIHRoaXMubnpGaWxlTGlzdCk7XHJcbiAgICAgIHRoaXMubnpDaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgZmlsZSxcclxuICAgICAgICBmaWxlTGlzdDogdGhpcy5uekZpbGVMaXN0LFxyXG4gICAgICAgIHR5cGU6ICdyZW1vdmVkJ1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5uekZpbGVMaXN0Q2hhbmdlLmVtaXQodGhpcy5uekZpbGVMaXN0KTtcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAvLyAjcmVnaW9uIHN0eWxlc1xyXG5cclxuICBwcml2YXRlIHByZWZpeENscyA9ICdhbnQtdXBsb2FkJztcclxuICBjbGFzc0xpc3Q6IHN0cmluZ1tdID0gW107XHJcblxyXG4gIHByaXZhdGUgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICBsZXQgc3ViQ2xzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgaWYgKHRoaXMubnpUeXBlID09PSAnZHJhZycpIHtcclxuICAgICAgaWYgKHRoaXMubnpGaWxlTGlzdC5zb21lKGZpbGUgPT4gZmlsZS5zdGF0dXMgPT09ICd1cGxvYWRpbmcnKSkge1xyXG4gICAgICAgIHN1YkNscy5wdXNoKGAke3RoaXMucHJlZml4Q2xzfS1kcmFnLXVwbG9hZGluZ2ApO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmRyYWdTdGF0ZSA9PT0gJ2RyYWdvdmVyJykge1xyXG4gICAgICAgIHN1YkNscy5wdXNoKGAke3RoaXMucHJlZml4Q2xzfS1kcmFnLWhvdmVyYCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN1YkNscyA9IFtgJHt0aGlzLnByZWZpeENsc30tc2VsZWN0LSR7dGhpcy5uekxpc3RUeXBlfWBdO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2xhc3NMaXN0ID0gW1xyXG4gICAgICB0aGlzLnByZWZpeENscyxcclxuICAgICAgYCR7dGhpcy5wcmVmaXhDbHN9LSR7dGhpcy5uelR5cGV9YCxcclxuICAgICAgLi4uc3ViQ2xzLFxyXG4gICAgICAodGhpcy5uekRpc2FibGVkICYmIGAke3RoaXMucHJlZml4Q2xzfS1kaXNhYmxlZGApIHx8ICcnXHJcbiAgICBdLmZpbHRlcihpdGVtID0+ICEhaXRlbSk7XHJcblxyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaTE4biQgPSB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMubG9jYWxlID0gdGhpcy5pMThuLmdldExvY2FsZURhdGEoJ1VwbG9hZCcpO1xyXG4gICAgICB0aGlzLmRldGVjdENoYW5nZXNMaXN0KCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW1AgaW4ga2V5b2YgdGhpc10/OiBTaW1wbGVDaGFuZ2UgfSAmIFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLm56RmlsZUxpc3QpIHtcclxuICAgICAgKHRoaXMubnpGaWxlTGlzdCB8fCBbXSkuZm9yRWFjaChmaWxlID0+IChmaWxlLm1lc3NhZ2UgPSB0aGlzLmdlbkVycihmaWxlKSkpO1xyXG4gICAgfVxyXG4gICAgdGhpcy56aXBPcHRpb25zKCkuc2V0Q2xhc3NNYXAoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pMThuJC51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=
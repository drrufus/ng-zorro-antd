/**
 * @fileoverview added by tsickle
 * Generated from: nz-upload.component.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdXBsb2FkLyIsInNvdXJjZXMiOlsibnotdXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUdOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QyxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFZbkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDakUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFhbkUsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7O0lBd0c1QixZQUFvQixHQUFzQixFQUFVLElBQW1CO1FBQW5ELFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBZTs7UUFuR3ZFLFdBQU0sR0FBUSxFQUFFLENBQUM7O1FBSVIsV0FBTSxHQUFlLFFBQVEsQ0FBQztRQUNmLFlBQU8sR0FBRyxDQUFDLENBQUM7UUFDWixXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBS1YsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsNEJBQXVCLEdBQUcsSUFBSSxDQUFDO1FBSS9DLGFBQVEsR0FBbUIsRUFBRSxDQUFDO1FBQzlCLGVBQVUsR0FBaUIsRUFBRSxDQUFDO1FBQ2QsZUFB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dUNBQTRDOztJQUM1QyxtQ0FBeUI7Ozs7O0lBRXpCLDRDQUFrRTs7SUFXbEUseUNBQTZDOztJQUM3Qyw4Q0FBbUQ7O0lBRW5ELHFDQUF1RTs7SUFDdkUsc0NBQStDOztJQUUvQyxxQ0FBcUc7O0lBQ3JHLDZDQUFtRzs7SUFFbkcsd0NBQThCOzs7OztJQXlGOUIsb0NBVUU7Ozs7O0lBRUYsdUNBV0U7Ozs7O0lBRUYsc0NBV0U7Ozs7O0lBRUYsb0NBWUU7Ozs7O0lBTUYsc0NBQTBCOztJQXFCMUIscUNBZUU7Ozs7O0lBTUYsc0NBQWlDOztJQUNqQyxzQ0FBeUI7Ozs7O0lBckliLGdDQUE4Qjs7Ozs7SUFBRSxpQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IG9mLCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgdG9Cb29sZWFuLCBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcblxyXG5pbXBvcnQge1xyXG4gIFNob3dVcGxvYWRMaXN0SW50ZXJmYWNlLFxyXG4gIFVwbG9hZENoYW5nZVBhcmFtLFxyXG4gIFVwbG9hZEZpbGUsXHJcbiAgVXBsb2FkRmlsdGVyLFxyXG4gIFVwbG9hZExpc3RUeXBlLFxyXG4gIFVwbG9hZFR5cGUsXHJcbiAgVXBsb2FkWEhSQXJncyxcclxuICBaaXBCdXR0b25PcHRpb25zXHJcbn0gZnJvbSAnLi9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBOelVwbG9hZEJ0bkNvbXBvbmVudCB9IGZyb20gJy4vbnotdXBsb2FkLWJ0bi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOelVwbG9hZExpc3RDb21wb25lbnQgfSBmcm9tICcuL256LXVwbG9hZC1saXN0LmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LXVwbG9hZCcsXHJcbiAgZXhwb3J0QXM6ICduelVwbG9hZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXVwbG9hZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC11cGxvYWQtcGljdHVyZS1jYXJkLXdyYXBwZXJdJzogJ256TGlzdFR5cGUgPT09IFwicGljdHVyZS1jYXJkXCInXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpVcGxvYWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICBwcml2YXRlIGkxOG4kOiBTdWJzY3JpcHRpb247XHJcbiAgQFZpZXdDaGlsZCgndXBsb2FkQ29tcCcsIHsgc3RhdGljOiBmYWxzZSB9KSB1cGxvYWRDb21wOiBOelVwbG9hZEJ0bkNvbXBvbmVudDtcclxuICBAVmlld0NoaWxkKCdsaXN0Q29tcCcsIHsgc3RhdGljOiBmYWxzZSB9KSBsaXN0Q29tcDogTnpVcGxvYWRMaXN0Q29tcG9uZW50O1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBsb2NhbGU6IGFueSA9IHt9O1xyXG5cclxuICAvLyAjcmVnaW9uIGZpZWxkc1xyXG5cclxuICBASW5wdXQoKSBuelR5cGU6IFVwbG9hZFR5cGUgPSAnc2VsZWN0JztcclxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBuekxpbWl0ID0gMDtcclxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBuelNpemUgPSAwO1xyXG5cclxuICBASW5wdXQoKSBuekZpbGVUeXBlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpBY2NlcHQ6IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gIEBJbnB1dCgpIG56QWN0aW9uOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGlyZWN0b3J5ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56T3BlbkZpbGVEaWFsb2dPbkNsaWNrID0gdHJ1ZTtcclxuICBASW5wdXQoKSBuekJlZm9yZVVwbG9hZDogKGZpbGU6IFVwbG9hZEZpbGUsIGZpbGVMaXN0OiBVcGxvYWRGaWxlW10pID0+IGJvb2xlYW4gfCBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG4gIEBJbnB1dCgpIG56Q3VzdG9tUmVxdWVzdDogKGl0ZW06IFVwbG9hZFhIUkFyZ3MpID0+IFN1YnNjcmlwdGlvbjtcclxuICBASW5wdXQoKSBuekRhdGE6IHt9IHwgKChmaWxlOiBVcGxvYWRGaWxlKSA9PiB7fSk7XHJcbiAgQElucHV0KCkgbnpGaWx0ZXI6IFVwbG9hZEZpbHRlcltdID0gW107XHJcbiAgQElucHV0KCkgbnpGaWxlTGlzdDogVXBsb2FkRmlsZVtdID0gW107XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBuekhlYWRlcnM6IHt9IHwgKChmaWxlOiBVcGxvYWRGaWxlKSA9PiB7fSk7XHJcbiAgQElucHV0KCkgbnpMaXN0VHlwZTogVXBsb2FkTGlzdFR5cGUgPSAndGV4dCc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56TXVsdGlwbGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBuek5hbWUgPSAnZmlsZSc7XHJcblxyXG4gIHByaXZhdGUgX3Nob3dVcGxvYWRMaXN0OiBib29sZWFuIHwgU2hvd1VwbG9hZExpc3RJbnRlcmZhY2UgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelNob3dVcGxvYWRMaXN0KHZhbHVlOiBib29sZWFuIHwgU2hvd1VwbG9hZExpc3RJbnRlcmZhY2UpIHtcclxuICAgIHRoaXMuX3Nob3dVcGxvYWRMaXN0ID0gdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicgPyB0b0Jvb2xlYW4odmFsdWUpIDogdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpTaG93VXBsb2FkTGlzdCgpOiBib29sZWFuIHwgU2hvd1VwbG9hZExpc3RJbnRlcmZhY2Uge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Nob3dVcGxvYWRMaXN0O1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd0J1dHRvbiA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56V2l0aENyZWRlbnRpYWxzID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIG56UmVtb3ZlOiAoZmlsZTogVXBsb2FkRmlsZSkgPT4gYm9vbGVhbiB8IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcbiAgQElucHV0KCkgbnpQcmV2aWV3OiAoZmlsZTogVXBsb2FkRmlsZSkgPT4gdm9pZDtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2hhbmdlOiBFdmVudEVtaXR0ZXI8VXBsb2FkQ2hhbmdlUGFyYW0+ID0gbmV3IEV2ZW50RW1pdHRlcjxVcGxvYWRDaGFuZ2VQYXJhbT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpGaWxlTGlzdENoYW5nZTogRXZlbnRFbWl0dGVyPFVwbG9hZEZpbGVbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPFVwbG9hZEZpbGVbXT4oKTtcclxuXHJcbiAgX2J0bk9wdGlvbnM6IFppcEJ1dHRvbk9wdGlvbnM7XHJcblxyXG4gIHByaXZhdGUgemlwT3B0aW9ucygpOiB0aGlzIHtcclxuICAgIGlmICh0eXBlb2YgdGhpcy5uelNob3dVcGxvYWRMaXN0ID09PSAnYm9vbGVhbicgJiYgdGhpcy5uelNob3dVcGxvYWRMaXN0KSB7XHJcbiAgICAgIHRoaXMubnpTaG93VXBsb2FkTGlzdCA9IHtcclxuICAgICAgICBzaG93UHJldmlld0ljb246IHRydWUsXHJcbiAgICAgICAgc2hvd1JlbW92ZUljb246IHRydWUsXHJcbiAgICAgICAgaGlkZVByZXZpZXdJY29uSW5Ob25JbWFnZTogZmFsc2VcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIC8vIGZpbHRlcnNcclxuICAgIGNvbnN0IGZpbHRlcnM6IFVwbG9hZEZpbHRlcltdID0gdGhpcy5uekZpbHRlci5zbGljZSgpO1xyXG4gICAgaWYgKHRoaXMubnpNdWx0aXBsZSAmJiB0aGlzLm56TGltaXQgPiAwICYmIGZpbHRlcnMuZmluZEluZGV4KHcgPT4gdy5uYW1lID09PSAnbGltaXQnKSA9PT0gLTEpIHtcclxuICAgICAgZmlsdGVycy5wdXNoKHtcclxuICAgICAgICBuYW1lOiAnbGltaXQnLFxyXG4gICAgICAgIGZuOiAoZmlsZUxpc3Q6IFVwbG9hZEZpbGVbXSkgPT4gZmlsZUxpc3Quc2xpY2UoLXRoaXMubnpMaW1pdClcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5uelNpemUgPiAwICYmIGZpbHRlcnMuZmluZEluZGV4KHcgPT4gdy5uYW1lID09PSAnc2l6ZScpID09PSAtMSkge1xyXG4gICAgICBmaWx0ZXJzLnB1c2goe1xyXG4gICAgICAgIG5hbWU6ICdzaXplJyxcclxuICAgICAgICBmbjogKGZpbGVMaXN0OiBVcGxvYWRGaWxlW10pID0+IGZpbGVMaXN0LmZpbHRlcih3ID0+IHcuc2l6ZSAvIDEwMjQgPD0gdGhpcy5uelNpemUpXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubnpGaWxlVHlwZSAmJiB0aGlzLm56RmlsZVR5cGUubGVuZ3RoID4gMCAmJiBmaWx0ZXJzLmZpbmRJbmRleCh3ID0+IHcubmFtZSA9PT0gJ3R5cGUnKSA9PT0gLTEpIHtcclxuICAgICAgY29uc3QgdHlwZXMgPSB0aGlzLm56RmlsZVR5cGUuc3BsaXQoJywnKTtcclxuICAgICAgZmlsdGVycy5wdXNoKHtcclxuICAgICAgICBuYW1lOiAndHlwZScsXHJcbiAgICAgICAgZm46IChmaWxlTGlzdDogVXBsb2FkRmlsZVtdKSA9PiBmaWxlTGlzdC5maWx0ZXIodyA9PiB+dHlwZXMuaW5kZXhPZih3LnR5cGUpKVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHRoaXMuX2J0bk9wdGlvbnMgPSB7XHJcbiAgICAgIGRpc2FibGVkOiB0aGlzLm56RGlzYWJsZWQsXHJcbiAgICAgIGFjY2VwdDogdGhpcy5uekFjY2VwdCxcclxuICAgICAgYWN0aW9uOiB0aGlzLm56QWN0aW9uLFxyXG4gICAgICBkaXJlY3Rvcnk6IHRoaXMubnpEaXJlY3RvcnksXHJcbiAgICAgIG9wZW5GaWxlRGlhbG9nT25DbGljazogdGhpcy5uek9wZW5GaWxlRGlhbG9nT25DbGljayxcclxuICAgICAgYmVmb3JlVXBsb2FkOiB0aGlzLm56QmVmb3JlVXBsb2FkLFxyXG4gICAgICBjdXN0b21SZXF1ZXN0OiB0aGlzLm56Q3VzdG9tUmVxdWVzdCxcclxuICAgICAgZGF0YTogdGhpcy5uekRhdGEsXHJcbiAgICAgIGhlYWRlcnM6IHRoaXMubnpIZWFkZXJzLFxyXG4gICAgICBuYW1lOiB0aGlzLm56TmFtZSxcclxuICAgICAgbXVsdGlwbGU6IHRoaXMubnpNdWx0aXBsZSxcclxuICAgICAgd2l0aENyZWRlbnRpYWxzOiB0aGlzLm56V2l0aENyZWRlbnRpYWxzLFxyXG4gICAgICBmaWx0ZXJzLFxyXG4gICAgICBvblN0YXJ0OiB0aGlzLm9uU3RhcnQsXHJcbiAgICAgIG9uUHJvZ3Jlc3M6IHRoaXMub25Qcm9ncmVzcyxcclxuICAgICAgb25TdWNjZXNzOiB0aGlzLm9uU3VjY2VzcyxcclxuICAgICAgb25FcnJvcjogdGhpcy5vbkVycm9yXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlKSB7fVxyXG5cclxuICAvLyAjcmVnaW9uIHVwbG9hZFxyXG5cclxuICBwcml2YXRlIGZpbGVUb09iamVjdChmaWxlOiBVcGxvYWRGaWxlKTogVXBsb2FkRmlsZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBsYXN0TW9kaWZpZWQ6IGZpbGUubGFzdE1vZGlmaWVkLFxyXG4gICAgICBsYXN0TW9kaWZpZWREYXRlOiBmaWxlLmxhc3RNb2RpZmllZERhdGUsXHJcbiAgICAgIG5hbWU6IGZpbGUuZmlsZW5hbWUgfHwgZmlsZS5uYW1lLFxyXG4gICAgICBzaXplOiBmaWxlLnNpemUsXHJcbiAgICAgIHR5cGU6IGZpbGUudHlwZSxcclxuICAgICAgdWlkOiBmaWxlLnVpZCxcclxuICAgICAgcmVzcG9uc2U6IGZpbGUucmVzcG9uc2UsXHJcbiAgICAgIGVycm9yOiBmaWxlLmVycm9yLFxyXG4gICAgICBwZXJjZW50OiAwLFxyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgICAgIG9yaWdpbkZpbGVPYmo6IGZpbGUgYXMgYW55XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRGaWxlSXRlbShmaWxlOiBVcGxvYWRGaWxlLCBmaWxlTGlzdDogVXBsb2FkRmlsZVtdKTogVXBsb2FkRmlsZSB7XHJcbiAgICByZXR1cm4gZmlsZUxpc3QuZmlsdGVyKGl0ZW0gPT4gaXRlbS51aWQgPT09IGZpbGUudWlkKVswXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVtb3ZlRmlsZUl0ZW0oZmlsZTogVXBsb2FkRmlsZSwgZmlsZUxpc3Q6IFVwbG9hZEZpbGVbXSk6IFVwbG9hZEZpbGVbXSB7XHJcbiAgICByZXR1cm4gZmlsZUxpc3QuZmlsdGVyKGl0ZW0gPT4gaXRlbS51aWQgIT09IGZpbGUudWlkKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2VuRXJyKGZpbGU6IFVwbG9hZEZpbGUpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGZpbGUucmVzcG9uc2UgJiYgdHlwZW9mIGZpbGUucmVzcG9uc2UgPT09ICdzdHJpbmcnXHJcbiAgICAgID8gZmlsZS5yZXNwb25zZVxyXG4gICAgICA6IChmaWxlLmVycm9yICYmIGZpbGUuZXJyb3Iuc3RhdHVzVGV4dCkgfHwgdGhpcy5sb2NhbGUudXBsb2FkRXJyb3I7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uU3RhcnQgPSAoZmlsZTogVXBsb2FkRmlsZSk6IHZvaWQgPT4ge1xyXG4gICAgaWYgKCF0aGlzLm56RmlsZUxpc3QpIHtcclxuICAgICAgdGhpcy5uekZpbGVMaXN0ID0gW107XHJcbiAgICB9XHJcbiAgICBjb25zdCB0YXJnZXRJdGVtID0gdGhpcy5maWxlVG9PYmplY3QoZmlsZSk7XHJcbiAgICB0YXJnZXRJdGVtLnN0YXR1cyA9ICd1cGxvYWRpbmcnO1xyXG4gICAgdGhpcy5uekZpbGVMaXN0ID0gdGhpcy5uekZpbGVMaXN0LmNvbmNhdCh0YXJnZXRJdGVtKTtcclxuICAgIHRoaXMubnpGaWxlTGlzdENoYW5nZS5lbWl0KHRoaXMubnpGaWxlTGlzdCk7XHJcbiAgICB0aGlzLm56Q2hhbmdlLmVtaXQoeyBmaWxlOiB0YXJnZXRJdGVtLCBmaWxlTGlzdDogdGhpcy5uekZpbGVMaXN0LCB0eXBlOiAnc3RhcnQnIH0pO1xyXG4gICAgdGhpcy5kZXRlY3RDaGFuZ2VzTGlzdCgpO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgb25Qcm9ncmVzcyA9IChlOiB7IHBlcmNlbnQ6IG51bWJlciB9LCBmaWxlOiBVcGxvYWRGaWxlKTogdm9pZCA9PiB7XHJcbiAgICBjb25zdCBmaWxlTGlzdCA9IHRoaXMubnpGaWxlTGlzdDtcclxuICAgIGNvbnN0IHRhcmdldEl0ZW0gPSB0aGlzLmdldEZpbGVJdGVtKGZpbGUsIGZpbGVMaXN0KTtcclxuICAgIHRhcmdldEl0ZW0ucGVyY2VudCA9IGUucGVyY2VudDtcclxuICAgIHRoaXMubnpDaGFuZ2UuZW1pdCh7XHJcbiAgICAgIGV2ZW50OiBlLFxyXG4gICAgICBmaWxlOiB7IC4uLnRhcmdldEl0ZW0gfSxcclxuICAgICAgZmlsZUxpc3Q6IHRoaXMubnpGaWxlTGlzdCxcclxuICAgICAgdHlwZTogJ3Byb2dyZXNzJ1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmRldGVjdENoYW5nZXNMaXN0KCk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBvblN1Y2Nlc3MgPSAocmVzOiB7fSwgZmlsZTogVXBsb2FkRmlsZSk6IHZvaWQgPT4ge1xyXG4gICAgY29uc3QgZmlsZUxpc3QgPSB0aGlzLm56RmlsZUxpc3Q7XHJcbiAgICBjb25zdCB0YXJnZXRJdGVtID0gdGhpcy5nZXRGaWxlSXRlbShmaWxlLCBmaWxlTGlzdCk7XHJcbiAgICB0YXJnZXRJdGVtLnN0YXR1cyA9ICdkb25lJztcclxuICAgIHRhcmdldEl0ZW0ucmVzcG9uc2UgPSByZXM7XHJcbiAgICB0aGlzLm56Q2hhbmdlLmVtaXQoe1xyXG4gICAgICBmaWxlOiB7IC4uLnRhcmdldEl0ZW0gfSxcclxuICAgICAgZmlsZUxpc3QsXHJcbiAgICAgIHR5cGU6ICdzdWNjZXNzJ1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmRldGVjdENoYW5nZXNMaXN0KCk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBvbkVycm9yID0gKGVycjoge30sIGZpbGU6IFVwbG9hZEZpbGUpOiB2b2lkID0+IHtcclxuICAgIGNvbnN0IGZpbGVMaXN0ID0gdGhpcy5uekZpbGVMaXN0O1xyXG4gICAgY29uc3QgdGFyZ2V0SXRlbSA9IHRoaXMuZ2V0RmlsZUl0ZW0oZmlsZSwgZmlsZUxpc3QpO1xyXG4gICAgdGFyZ2V0SXRlbS5lcnJvciA9IGVycjtcclxuICAgIHRhcmdldEl0ZW0uc3RhdHVzID0gJ2Vycm9yJztcclxuICAgIHRhcmdldEl0ZW0ubWVzc2FnZSA9IHRoaXMuZ2VuRXJyKHRhcmdldEl0ZW0pO1xyXG4gICAgdGhpcy5uekNoYW5nZS5lbWl0KHtcclxuICAgICAgZmlsZTogeyAuLi50YXJnZXRJdGVtIH0sXHJcbiAgICAgIGZpbGVMaXN0LFxyXG4gICAgICB0eXBlOiAnZXJyb3InXHJcbiAgICB9KTtcclxuICAgIHRoaXMuZGV0ZWN0Q2hhbmdlc0xpc3QoKTtcclxuICB9O1xyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIC8vICNyZWdpb24gZHJhZ1xyXG5cclxuICBwcml2YXRlIGRyYWdTdGF0ZTogc3RyaW5nO1xyXG5cclxuICAvLyBza2lwIHNhZmFyaSBidWdcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgZmlsZURyb3AoZTogYW55KTogdm9pZCB7XHJcbiAgICBpZiAoZS50eXBlID09PSB0aGlzLmRyYWdTdGF0ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmRyYWdTdGF0ZSA9IGUudHlwZTtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICB9XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgLy8gI3JlZ2lvbiBsaXN0XHJcblxyXG4gIHByaXZhdGUgZGV0ZWN0Q2hhbmdlc0xpc3QoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB0aGlzLmxpc3RDb21wLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIG9uUmVtb3ZlID0gKGZpbGU6IFVwbG9hZEZpbGUpOiB2b2lkID0+IHtcclxuICAgIHRoaXMudXBsb2FkQ29tcC5hYm9ydChmaWxlKTtcclxuICAgIGZpbGUuc3RhdHVzID0gJ3JlbW92ZWQnO1xyXG4gICAgY29uc3QgZm5SZXMgPVxyXG4gICAgICB0eXBlb2YgdGhpcy5uelJlbW92ZSA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMubnpSZW1vdmUoZmlsZSkgOiB0aGlzLm56UmVtb3ZlID09IG51bGwgPyB0cnVlIDogdGhpcy5uelJlbW92ZTtcclxuICAgIChmblJlcyBpbnN0YW5jZW9mIE9ic2VydmFibGUgPyBmblJlcyA6IG9mKGZuUmVzKSkucGlwZShmaWx0ZXIoKHJlczogYm9vbGVhbikgPT4gcmVzKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5uekZpbGVMaXN0ID0gdGhpcy5yZW1vdmVGaWxlSXRlbShmaWxlLCB0aGlzLm56RmlsZUxpc3QpO1xyXG4gICAgICB0aGlzLm56Q2hhbmdlLmVtaXQoe1xyXG4gICAgICAgIGZpbGUsXHJcbiAgICAgICAgZmlsZUxpc3Q6IHRoaXMubnpGaWxlTGlzdCxcclxuICAgICAgICB0eXBlOiAncmVtb3ZlZCdcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMubnpGaWxlTGlzdENoYW5nZS5lbWl0KHRoaXMubnpGaWxlTGlzdCk7XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgLy8gI3JlZ2lvbiBzdHlsZXNcclxuXHJcbiAgcHJpdmF0ZSBwcmVmaXhDbHMgPSAnYW50LXVwbG9hZCc7XHJcbiAgY2xhc3NMaXN0OiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICBwcml2YXRlIHNldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgbGV0IHN1YkNsczogc3RyaW5nW10gPSBbXTtcclxuICAgIGlmICh0aGlzLm56VHlwZSA9PT0gJ2RyYWcnKSB7XHJcbiAgICAgIGlmICh0aGlzLm56RmlsZUxpc3Quc29tZShmaWxlID0+IGZpbGUuc3RhdHVzID09PSAndXBsb2FkaW5nJykpIHtcclxuICAgICAgICBzdWJDbHMucHVzaChgJHt0aGlzLnByZWZpeENsc30tZHJhZy11cGxvYWRpbmdgKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5kcmFnU3RhdGUgPT09ICdkcmFnb3ZlcicpIHtcclxuICAgICAgICBzdWJDbHMucHVzaChgJHt0aGlzLnByZWZpeENsc30tZHJhZy1ob3ZlcmApO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdWJDbHMgPSBbYCR7dGhpcy5wcmVmaXhDbHN9LXNlbGVjdC0ke3RoaXMubnpMaXN0VHlwZX1gXTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNsYXNzTGlzdCA9IFtcclxuICAgICAgdGhpcy5wcmVmaXhDbHMsXHJcbiAgICAgIGAke3RoaXMucHJlZml4Q2xzfS0ke3RoaXMubnpUeXBlfWAsXHJcbiAgICAgIC4uLnN1YkNscyxcclxuICAgICAgKHRoaXMubnpEaXNhYmxlZCAmJiBgJHt0aGlzLnByZWZpeENsc30tZGlzYWJsZWRgKSB8fCAnJ1xyXG4gICAgXS5maWx0ZXIoaXRlbSA9PiAhIWl0ZW0pO1xyXG5cclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmkxOG4kID0gdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXRMb2NhbGVEYXRhKCdVcGxvYWQnKTtcclxuICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzTGlzdCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtQIGluIGtleW9mIHRoaXNdPzogU2ltcGxlQ2hhbmdlIH0gJiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5uekZpbGVMaXN0KSB7XHJcbiAgICAgICh0aGlzLm56RmlsZUxpc3QgfHwgW10pLmZvckVhY2goZmlsZSA9PiAoZmlsZS5tZXNzYWdlID0gdGhpcy5nZW5FcnIoZmlsZSkpKTtcclxuICAgIH1cclxuICAgIHRoaXMuemlwT3B0aW9ucygpLnNldENsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuaTE4biQudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcbn1cclxuIl19
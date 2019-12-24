import { __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter } from 'rxjs/operators';
import { InputBoolean, InputNumber, toBoolean } from 'ng-zorro-antd/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { NzUploadBtnComponent } from './nz-upload-btn.component';
import { NzUploadListComponent } from './nz-upload-list.component';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/i18n";
import * as i2 from "@angular/common";
import * as i3 from "./nz-upload-list.component";
import * as i4 from "./nz-upload-btn.component";
const _c0 = ["uploadComp"];
const _c1 = ["listComp"];
const _c2 = function () { return []; };
function NzUploadComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nz-upload-list", 6, 7);
} if (rf & 2) {
    const ctx_r1838 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("display", ctx_r1838.nzShowUploadList ? "" : "none");
    i0.ɵɵproperty("locale", ctx_r1838.locale)("listType", ctx_r1838.nzListType)("items", ctx_r1838.nzFileList || i0.ɵɵpureFunction0(7, _c2))("icons", ctx_r1838.nzShowUploadList)("onPreview", ctx_r1838.nzPreview)("onRemove", ctx_r1838.onRemove);
} }
function NzUploadComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
function NzUploadComponent_ng_template_4_ng_template_3_Template(rf, ctx) { }
function NzUploadComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵelementStart(1, "div", 9, 10);
    i0.ɵɵtemplate(3, NzUploadComponent_ng_template_4_ng_template_3_Template, 0, 0, "ng-template", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1842 = i0.ɵɵnextContext();
    const _r1839 = i0.ɵɵreference(3);
    i0.ɵɵstyleProp("display", ctx_r1842.nzShowButton ? "" : "none");
    i0.ɵɵproperty("ngClass", ctx_r1842.classList);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("options", ctx_r1842._btnOptions);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", _r1839);
} }
function NzUploadComponent_ng_container_6_ng_template_5_Template(rf, ctx) { }
function NzUploadComponent_ng_container_6_ng_template_6_Template(rf, ctx) { }
const _c3 = function () { return { "ant-upload-btn": true }; };
function NzUploadComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r1855 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 12);
    i0.ɵɵlistener("drop", function NzUploadComponent_ng_container_6_Template_div_drop_1_listener($event) { i0.ɵɵrestoreView(_r1855); const ctx_r1854 = i0.ɵɵnextContext(); return ctx_r1854.fileDrop($event); })("dragover", function NzUploadComponent_ng_container_6_Template_div_dragover_1_listener($event) { i0.ɵɵrestoreView(_r1855); const ctx_r1856 = i0.ɵɵnextContext(); return ctx_r1856.fileDrop($event); })("dragleave", function NzUploadComponent_ng_container_6_Template_div_dragleave_1_listener($event) { i0.ɵɵrestoreView(_r1855); const ctx_r1857 = i0.ɵɵnextContext(); return ctx_r1857.fileDrop($event); });
    i0.ɵɵelementStart(2, "div", 13, 10);
    i0.ɵɵelementStart(4, "div", 14);
    i0.ɵɵtemplate(5, NzUploadComponent_ng_container_6_ng_template_5_Template, 0, 0, "ng-template", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, NzUploadComponent_ng_container_6_ng_template_6_Template, 0, 0, "ng-template", 11);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1843 = i0.ɵɵnextContext();
    const _r1839 = i0.ɵɵreference(3);
    const _r1837 = i0.ɵɵreference(1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r1843.classList);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("options", ctx_r1843._btnOptions)("classes", i0.ɵɵpureFunction0(5, _c3));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngTemplateOutlet", _r1839);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r1837);
} }
function NzUploadComponent_ng_template_7_ng_container_0_ng_template_1_Template(rf, ctx) { }
function NzUploadComponent_ng_template_7_ng_container_0_ng_template_2_Template(rf, ctx) { }
function NzUploadComponent_ng_template_7_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzUploadComponent_ng_template_7_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 11);
    i0.ɵɵtemplate(2, NzUploadComponent_ng_template_7_ng_container_0_ng_template_2_Template, 0, 0, "ng-template", 11);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const _r1837 = i0.ɵɵreference(1);
    const _r1841 = i0.ɵɵreference(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r1837);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r1841);
} }
function NzUploadComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NzUploadComponent_ng_template_7_ng_container_0_Template, 3, 2, "ng-container", 3);
} if (rf & 2) {
    const ctx_r1845 = i0.ɵɵnextContext();
    const _r1846 = i0.ɵɵreference(10);
    i0.ɵɵproperty("ngIf", ctx_r1845.nzListType === "picture-card")("ngIfElse", _r1846);
} }
function NzUploadComponent_ng_template_9_ng_template_0_Template(rf, ctx) { }
function NzUploadComponent_ng_template_9_ng_template_1_Template(rf, ctx) { }
function NzUploadComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NzUploadComponent_ng_template_9_ng_template_0_Template, 0, 0, "ng-template", 11);
    i0.ɵɵtemplate(1, NzUploadComponent_ng_template_9_ng_template_1_Template, 0, 0, "ng-template", 11);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r1841 = i0.ɵɵreference(5);
    const _r1837 = i0.ɵɵreference(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r1841);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r1837);
} }
const _c4 = ["*"];
export class NzUploadComponent {
    // #endregion
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
        this.onStart = (file) => {
            if (!this.nzFileList) {
                this.nzFileList = [];
            }
            const targetItem = this.fileToObject(file);
            targetItem.status = 'uploading';
            this.nzFileList = this.nzFileList.concat(targetItem);
            this.nzFileListChange.emit(this.nzFileList);
            this.nzChange.emit({ file: targetItem, fileList: this.nzFileList, type: 'start' });
            this.detectChangesList();
        };
        this.onProgress = (e, file) => {
            const fileList = this.nzFileList;
            const targetItem = this.getFileItem(file, fileList);
            targetItem.percent = e.percent;
            this.nzChange.emit({
                event: e,
                file: Object.assign({}, targetItem),
                fileList: this.nzFileList,
                type: 'progress'
            });
            this.detectChangesList();
        };
        this.onSuccess = (res, file) => {
            const fileList = this.nzFileList;
            const targetItem = this.getFileItem(file, fileList);
            targetItem.status = 'done';
            targetItem.response = res;
            this.nzChange.emit({
                file: Object.assign({}, targetItem),
                fileList,
                type: 'success'
            });
            this.detectChangesList();
        };
        this.onError = (err, file) => {
            const fileList = this.nzFileList;
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
        };
        this.onRemove = (file) => {
            this.uploadComp.abort(file);
            file.status = 'removed';
            const fnRes = typeof this.nzRemove === 'function' ? this.nzRemove(file) : this.nzRemove == null ? true : this.nzRemove;
            (fnRes instanceof Observable ? fnRes : of(fnRes)).pipe(filter((res) => res)).subscribe(() => {
                this.nzFileList = this.removeFileItem(file, this.nzFileList);
                this.nzChange.emit({
                    file,
                    fileList: this.nzFileList,
                    type: 'removed'
                });
                this.nzFileListChange.emit(this.nzFileList);
                this.cdr.detectChanges();
            });
        };
        // #endregion
        // #region styles
        this.prefixCls = 'ant-upload';
        this.classList = [];
    }
    set nzShowUploadList(value) {
        this._showUploadList = typeof value === 'boolean' ? toBoolean(value) : value;
    }
    get nzShowUploadList() {
        return this._showUploadList;
    }
    zipOptions() {
        if (typeof this.nzShowUploadList === 'boolean' && this.nzShowUploadList) {
            this.nzShowUploadList = {
                showPreviewIcon: true,
                showRemoveIcon: true,
                hidePreviewIconInNonImage: false
            };
        }
        // filters
        const filters = this.nzFilter.slice();
        if (this.nzMultiple && this.nzLimit > 0 && filters.findIndex(w => w.name === 'limit') === -1) {
            filters.push({
                name: 'limit',
                fn: (fileList) => fileList.slice(-this.nzLimit)
            });
        }
        if (this.nzSize > 0 && filters.findIndex(w => w.name === 'size') === -1) {
            filters.push({
                name: 'size',
                fn: (fileList) => fileList.filter(w => w.size / 1024 <= this.nzSize)
            });
        }
        if (this.nzFileType && this.nzFileType.length > 0 && filters.findIndex(w => w.name === 'type') === -1) {
            const types = this.nzFileType.split(',');
            filters.push({
                name: 'type',
                fn: (fileList) => fileList.filter(w => ~types.indexOf(w.type))
            });
        }
        this._btnOptions = {
            disabled: this.nzDisabled,
            accept: this.nzAccept,
            action: this.nzAction,
            directory: this.nzDirectory,
            openFileDialogOnClick: this.nzOpenFileDialogOnClick,
            beforeUpload: this.nzBeforeUpload,
            customRequest: this.nzCustomRequest,
            data: this.nzData,
            headers: this.nzHeaders,
            name: this.nzName,
            multiple: this.nzMultiple,
            withCredentials: this.nzWithCredentials,
            filters,
            onStart: this.onStart,
            onProgress: this.onProgress,
            onSuccess: this.onSuccess,
            onError: this.onError
        };
        return this;
    }
    // #region upload
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
            originFileObj: file
        };
    }
    getFileItem(file, fileList) {
        return fileList.filter(item => item.uid === file.uid)[0];
    }
    removeFileItem(file, fileList) {
        return fileList.filter(item => item.uid !== file.uid);
    }
    genErr(file) {
        return file.response && typeof file.response === 'string'
            ? file.response
            : (file.error && file.error.statusText) || this.locale.uploadError;
    }
    // skip safari bug
    // tslint:disable-next-line:no-any
    fileDrop(e) {
        if (e.type === this.dragState) {
            return;
        }
        this.dragState = e.type;
        this.setClassMap();
    }
    // #endregion
    // #region list
    detectChangesList() {
        this.cdr.detectChanges();
        this.listComp.detectChanges();
    }
    setClassMap() {
        let subCls = [];
        if (this.nzType === 'drag') {
            if (this.nzFileList.some(file => file.status === 'uploading')) {
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
        ].filter(item => !!item);
        this.cdr.detectChanges();
    }
    // #endregion
    ngOnInit() {
        this.i18n$ = this.i18n.localeChange.subscribe(() => {
            this.locale = this.i18n.getLocaleData('Upload');
            this.detectChangesList();
        });
    }
    ngOnChanges(changes) {
        if (changes.nzFileList) {
            (this.nzFileList || []).forEach(file => (file.message = this.genErr(file)));
        }
        this.zipOptions().setClassMap();
    }
    ngOnDestroy() {
        this.i18n$.unsubscribe();
    }
}
/** @nocollapse */ NzUploadComponent.ɵfac = function NzUploadComponent_Factory(t) { return new (t || NzUploadComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.NzI18nService)); };
/** @nocollapse */ NzUploadComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzUploadComponent, selectors: [["nz-upload"]], viewQuery: function NzUploadComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
        i0.ɵɵviewQuery(_c1, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.uploadComp = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.listComp = _t.first);
    } }, hostBindings: function NzUploadComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        i0.ɵɵallocHostVars(1);
    } if (rf & 2) {
        i0.ɵɵclassProp("ant-upload-picture-card-wrapper", ctx.nzListType === "picture-card");
    } }, inputs: { nzType: "nzType", nzLimit: "nzLimit", nzSize: "nzSize", nzFileType: "nzFileType", nzAccept: "nzAccept", nzAction: "nzAction", nzDirectory: "nzDirectory", nzOpenFileDialogOnClick: "nzOpenFileDialogOnClick", nzBeforeUpload: "nzBeforeUpload", nzCustomRequest: "nzCustomRequest", nzData: "nzData", nzFilter: "nzFilter", nzFileList: "nzFileList", nzDisabled: "nzDisabled", nzHeaders: "nzHeaders", nzListType: "nzListType", nzMultiple: "nzMultiple", nzName: "nzName", nzShowUploadList: "nzShowUploadList", nzShowButton: "nzShowButton", nzWithCredentials: "nzWithCredentials", nzRemove: "nzRemove", nzPreview: "nzPreview" }, outputs: { nzChange: "nzChange", nzFileListChange: "nzFileListChange" }, exportAs: ["nzUpload"], features: [i0.ɵɵNgOnChangesFeature()], ngContentSelectors: _c4, decls: 11, vars: 2, consts: [["list", ""], ["con", ""], ["btn", ""], [4, "ngIf", "ngIfElse"], ["select", ""], ["pic", ""], [3, "locale", "listType", "items", "icons", "onPreview", "onRemove"], ["listComp", ""], [3, "ngClass"], ["nz-upload-btn", "", 3, "options"], ["uploadComp", ""], [3, "ngTemplateOutlet"], [3, "ngClass", "drop", "dragover", "dragleave"], ["nz-upload-btn", "", 3, "options", "classes"], [1, "ant-upload-drag-container"]], template: function NzUploadComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, NzUploadComponent_ng_template_0_Template, 2, 8, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(2, NzUploadComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(4, NzUploadComponent_ng_template_4_Template, 4, 4, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(6, NzUploadComponent_ng_container_6_Template, 7, 6, "ng-container", 3);
        i0.ɵɵtemplate(7, NzUploadComponent_ng_template_7_Template, 1, 2, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(9, NzUploadComponent_ng_template_9_Template, 2, 2, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1844 = i0.ɵɵreference(8);
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngIf", ctx.nzType === "drag")("ngIfElse", _r1844);
    } }, directives: [i2.NgIf, i3.NzUploadListComponent, i2.NgClass, i4.NzUploadBtnComponent, i2.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], NzUploadComponent.prototype, "nzLimit", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], NzUploadComponent.prototype, "nzSize", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzUploadComponent.prototype, "nzDirectory", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzUploadComponent.prototype, "nzOpenFileDialogOnClick", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzUploadComponent.prototype, "nzDisabled", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzUploadComponent.prototype, "nzMultiple", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzUploadComponent.prototype, "nzShowButton", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzUploadComponent.prototype, "nzWithCredentials", void 0);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzUploadComponent, [{
        type: Component,
        args: [{
                selector: 'nz-upload',
                exportAs: 'nzUpload',
                templateUrl: './nz-upload.component.html',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.ant-upload-picture-card-wrapper]': 'nzListType === "picture-card"'
                }
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.NzI18nService }]; }, { uploadComp: [{
            type: ViewChild,
            args: ['uploadComp', { static: false }]
        }], listComp: [{
            type: ViewChild,
            args: ['listComp', { static: false }]
        }], nzType: [{
            type: Input
        }], nzLimit: [{
            type: Input
        }], nzSize: [{
            type: Input
        }], nzFileType: [{
            type: Input
        }], nzAccept: [{
            type: Input
        }], nzAction: [{
            type: Input
        }], nzDirectory: [{
            type: Input
        }], nzOpenFileDialogOnClick: [{
            type: Input
        }], nzBeforeUpload: [{
            type: Input
        }], nzCustomRequest: [{
            type: Input
        }], nzData: [{
            type: Input
        }], nzFilter: [{
            type: Input
        }], nzFileList: [{
            type: Input
        }], nzDisabled: [{
            type: Input
        }], nzHeaders: [{
            type: Input
        }], nzListType: [{
            type: Input
        }], nzMultiple: [{
            type: Input
        }], nzName: [{
            type: Input
        }], nzShowUploadList: [{
            type: Input
        }], nzShowButton: [{
            type: Input
        }], nzWithCredentials: [{
            type: Input
        }], nzRemove: [{
            type: Input
        }], nzPreview: [{
            type: Input
        }], nzChange: [{
            type: Output
        }], nzFileListChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdXBsb2FkLyIsInNvdXJjZXMiOlsibnotdXBsb2FkLmNvbXBvbmVudC50cyIsIm56LXVwbG9hZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUdOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QyxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFZbkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDakUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7Ozs7Ozs7SUN2Q2pFLHVDQVNrQjs7O0lBUGhCLG1FQUFnRDtJQUNoRCx5Q0FBaUIsa0NBQUEsNkRBQUEscUNBQUEsa0NBQUEsZ0NBQUE7OztJQVFILGtCQUFZOzs7O0lBRTVCLDhCQUNFO0lBQUEsa0NBQ0U7SUFBQSxpR0FBc0M7SUFDeEMsaUJBQU07SUFDUixpQkFBTTs7OztJQUpxQiwrREFBNEM7SUFBbEUsNkNBQXFCO0lBQ08sZUFBdUI7SUFBdkIsK0NBQXVCO0lBQ3ZDLGVBQXdCO0lBQXhCLHlDQUF3Qjs7Ozs7OztJQUkzQyw2QkFDRTtJQUFBLCtCQU1FO0lBSkEsNE1BQXlCLHVNQUFBLHlNQUFBO0lBSXpCLG1DQUNFO0lB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QVM7bUJBQUMsVUFBVSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7a0JBTXZDLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUlMLEtBQUs7O2tCQVNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUVMLE1BQU07O2tCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciwgdG9Cb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcblxyXG5pbXBvcnQge1xyXG4gIFNob3dVcGxvYWRMaXN0SW50ZXJmYWNlLFxyXG4gIFVwbG9hZENoYW5nZVBhcmFtLFxyXG4gIFVwbG9hZEZpbGUsXHJcbiAgVXBsb2FkRmlsdGVyLFxyXG4gIFVwbG9hZExpc3RUeXBlLFxyXG4gIFVwbG9hZFR5cGUsXHJcbiAgVXBsb2FkWEhSQXJncyxcclxuICBaaXBCdXR0b25PcHRpb25zXHJcbn0gZnJvbSAnLi9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBOelVwbG9hZEJ0bkNvbXBvbmVudCB9IGZyb20gJy4vbnotdXBsb2FkLWJ0bi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOelVwbG9hZExpc3RDb21wb25lbnQgfSBmcm9tICcuL256LXVwbG9hZC1saXN0LmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LXVwbG9hZCcsXHJcbiAgZXhwb3J0QXM6ICduelVwbG9hZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXVwbG9hZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC11cGxvYWQtcGljdHVyZS1jYXJkLXdyYXBwZXJdJzogJ256TGlzdFR5cGUgPT09IFwicGljdHVyZS1jYXJkXCInXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpVcGxvYWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICBwcml2YXRlIGkxOG4kOiBTdWJzY3JpcHRpb247XHJcbiAgQFZpZXdDaGlsZCgndXBsb2FkQ29tcCcsIHsgc3RhdGljOiBmYWxzZSB9KSB1cGxvYWRDb21wOiBOelVwbG9hZEJ0bkNvbXBvbmVudDtcclxuICBAVmlld0NoaWxkKCdsaXN0Q29tcCcsIHsgc3RhdGljOiBmYWxzZSB9KSBsaXN0Q29tcDogTnpVcGxvYWRMaXN0Q29tcG9uZW50O1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBsb2NhbGU6IGFueSA9IHt9O1xyXG5cclxuICAvLyAjcmVnaW9uIGZpZWxkc1xyXG5cclxuICBASW5wdXQoKSBuelR5cGU6IFVwbG9hZFR5cGUgPSAnc2VsZWN0JztcclxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBuekxpbWl0ID0gMDtcclxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBuelNpemUgPSAwO1xyXG5cclxuICBASW5wdXQoKSBuekZpbGVUeXBlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpBY2NlcHQ6IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gIEBJbnB1dCgpIG56QWN0aW9uOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGlyZWN0b3J5ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56T3BlbkZpbGVEaWFsb2dPbkNsaWNrID0gdHJ1ZTtcclxuICBASW5wdXQoKSBuekJlZm9yZVVwbG9hZDogKGZpbGU6IFVwbG9hZEZpbGUsIGZpbGVMaXN0OiBVcGxvYWRGaWxlW10pID0+IGJvb2xlYW4gfCBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG4gIEBJbnB1dCgpIG56Q3VzdG9tUmVxdWVzdDogKGl0ZW06IFVwbG9hZFhIUkFyZ3MpID0+IFN1YnNjcmlwdGlvbjtcclxuICBASW5wdXQoKSBuekRhdGE6IHt9IHwgKChmaWxlOiBVcGxvYWRGaWxlKSA9PiB7fSk7XHJcbiAgQElucHV0KCkgbnpGaWx0ZXI6IFVwbG9hZEZpbHRlcltdID0gW107XHJcbiAgQElucHV0KCkgbnpGaWxlTGlzdDogVXBsb2FkRmlsZVtdID0gW107XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBuekhlYWRlcnM6IHt9IHwgKChmaWxlOiBVcGxvYWRGaWxlKSA9PiB7fSk7XHJcbiAgQElucHV0KCkgbnpMaXN0VHlwZTogVXBsb2FkTGlzdFR5cGUgPSAndGV4dCc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56TXVsdGlwbGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBuek5hbWUgPSAnZmlsZSc7XHJcblxyXG4gIHByaXZhdGUgX3Nob3dVcGxvYWRMaXN0OiBib29sZWFuIHwgU2hvd1VwbG9hZExpc3RJbnRlcmZhY2UgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelNob3dVcGxvYWRMaXN0KHZhbHVlOiBib29sZWFuIHwgU2hvd1VwbG9hZExpc3RJbnRlcmZhY2UpIHtcclxuICAgIHRoaXMuX3Nob3dVcGxvYWRMaXN0ID0gdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicgPyB0b0Jvb2xlYW4odmFsdWUpIDogdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpTaG93VXBsb2FkTGlzdCgpOiBib29sZWFuIHwgU2hvd1VwbG9hZExpc3RJbnRlcmZhY2Uge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Nob3dVcGxvYWRMaXN0O1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd0J1dHRvbiA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56V2l0aENyZWRlbnRpYWxzID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIG56UmVtb3ZlOiAoZmlsZTogVXBsb2FkRmlsZSkgPT4gYm9vbGVhbiB8IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcbiAgQElucHV0KCkgbnpQcmV2aWV3OiAoZmlsZTogVXBsb2FkRmlsZSkgPT4gdm9pZDtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2hhbmdlOiBFdmVudEVtaXR0ZXI8VXBsb2FkQ2hhbmdlUGFyYW0+ID0gbmV3IEV2ZW50RW1pdHRlcjxVcGxvYWRDaGFuZ2VQYXJhbT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpGaWxlTGlzdENoYW5nZTogRXZlbnRFbWl0dGVyPFVwbG9hZEZpbGVbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPFVwbG9hZEZpbGVbXT4oKTtcclxuXHJcbiAgX2J0bk9wdGlvbnM6IFppcEJ1dHRvbk9wdGlvbnM7XHJcblxyXG4gIHByaXZhdGUgemlwT3B0aW9ucygpOiB0aGlzIHtcclxuICAgIGlmICh0eXBlb2YgdGhpcy5uelNob3dVcGxvYWRMaXN0ID09PSAnYm9vbGVhbicgJiYgdGhpcy5uelNob3dVcGxvYWRMaXN0KSB7XHJcbiAgICAgIHRoaXMubnpTaG93VXBsb2FkTGlzdCA9IHtcclxuICAgICAgICBzaG93UHJldmlld0ljb246IHRydWUsXHJcbiAgICAgICAgc2hvd1JlbW92ZUljb246IHRydWUsXHJcbiAgICAgICAgaGlkZVByZXZpZXdJY29uSW5Ob25JbWFnZTogZmFsc2VcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIC8vIGZpbHRlcnNcclxuICAgIGNvbnN0IGZpbHRlcnM6IFVwbG9hZEZpbHRlcltdID0gdGhpcy5uekZpbHRlci5zbGljZSgpO1xyXG4gICAgaWYgKHRoaXMubnpNdWx0aXBsZSAmJiB0aGlzLm56TGltaXQgPiAwICYmIGZpbHRlcnMuZmluZEluZGV4KHcgPT4gdy5uYW1lID09PSAnbGltaXQnKSA9PT0gLTEpIHtcclxuICAgICAgZmlsdGVycy5wdXNoKHtcclxuICAgICAgICBuYW1lOiAnbGltaXQnLFxyXG4gICAgICAgIGZuOiAoZmlsZUxpc3Q6IFVwbG9hZEZpbGVbXSkgPT4gZmlsZUxpc3Quc2xpY2UoLXRoaXMubnpMaW1pdClcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5uelNpemUgPiAwICYmIGZpbHRlcnMuZmluZEluZGV4KHcgPT4gdy5uYW1lID09PSAnc2l6ZScpID09PSAtMSkge1xyXG4gICAgICBmaWx0ZXJzLnB1c2goe1xyXG4gICAgICAgIG5hbWU6ICdzaXplJyxcclxuICAgICAgICBmbjogKGZpbGVMaXN0OiBVcGxvYWRGaWxlW10pID0+IGZpbGVMaXN0LmZpbHRlcih3ID0+IHcuc2l6ZSAvIDEwMjQgPD0gdGhpcy5uelNpemUpXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubnpGaWxlVHlwZSAmJiB0aGlzLm56RmlsZVR5cGUubGVuZ3RoID4gMCAmJiBmaWx0ZXJzLmZpbmRJbmRleCh3ID0+IHcubmFtZSA9PT0gJ3R5cGUnKSA9PT0gLTEpIHtcclxuICAgICAgY29uc3QgdHlwZXMgPSB0aGlzLm56RmlsZVR5cGUuc3BsaXQoJywnKTtcclxuICAgICAgZmlsdGVycy5wdXNoKHtcclxuICAgICAgICBuYW1lOiAndHlwZScsXHJcbiAgICAgICAgZm46IChmaWxlTGlzdDogVXBsb2FkRmlsZVtdKSA9PiBmaWxlTGlzdC5maWx0ZXIodyA9PiB+dHlwZXMuaW5kZXhPZih3LnR5cGUpKVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHRoaXMuX2J0bk9wdGlvbnMgPSB7XHJcbiAgICAgIGRpc2FibGVkOiB0aGlzLm56RGlzYWJsZWQsXHJcbiAgICAgIGFjY2VwdDogdGhpcy5uekFjY2VwdCxcclxuICAgICAgYWN0aW9uOiB0aGlzLm56QWN0aW9uLFxyXG4gICAgICBkaXJlY3Rvcnk6IHRoaXMubnpEaXJlY3RvcnksXHJcbiAgICAgIG9wZW5GaWxlRGlhbG9nT25DbGljazogdGhpcy5uek9wZW5GaWxlRGlhbG9nT25DbGljayxcclxuICAgICAgYmVmb3JlVXBsb2FkOiB0aGlzLm56QmVmb3JlVXBsb2FkLFxyXG4gICAgICBjdXN0b21SZXF1ZXN0OiB0aGlzLm56Q3VzdG9tUmVxdWVzdCxcclxuICAgICAgZGF0YTogdGhpcy5uekRhdGEsXHJcbiAgICAgIGhlYWRlcnM6IHRoaXMubnpIZWFkZXJzLFxyXG4gICAgICBuYW1lOiB0aGlzLm56TmFtZSxcclxuICAgICAgbXVsdGlwbGU6IHRoaXMubnpNdWx0aXBsZSxcclxuICAgICAgd2l0aENyZWRlbnRpYWxzOiB0aGlzLm56V2l0aENyZWRlbnRpYWxzLFxyXG4gICAgICBmaWx0ZXJzLFxyXG4gICAgICBvblN0YXJ0OiB0aGlzLm9uU3RhcnQsXHJcbiAgICAgIG9uUHJvZ3Jlc3M6IHRoaXMub25Qcm9ncmVzcyxcclxuICAgICAgb25TdWNjZXNzOiB0aGlzLm9uU3VjY2VzcyxcclxuICAgICAgb25FcnJvcjogdGhpcy5vbkVycm9yXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlKSB7fVxyXG5cclxuICAvLyAjcmVnaW9uIHVwbG9hZFxyXG5cclxuICBwcml2YXRlIGZpbGVUb09iamVjdChmaWxlOiBVcGxvYWRGaWxlKTogVXBsb2FkRmlsZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBsYXN0TW9kaWZpZWQ6IGZpbGUubGFzdE1vZGlmaWVkLFxyXG4gICAgICBsYXN0TW9kaWZpZWREYXRlOiBmaWxlLmxhc3RNb2RpZmllZERhdGUsXHJcbiAgICAgIG5hbWU6IGZpbGUuZmlsZW5hbWUgfHwgZmlsZS5uYW1lLFxyXG4gICAgICBzaXplOiBmaWxlLnNpemUsXHJcbiAgICAgIHR5cGU6IGZpbGUudHlwZSxcclxuICAgICAgdWlkOiBmaWxlLnVpZCxcclxuICAgICAgcmVzcG9uc2U6IGZpbGUucmVzcG9uc2UsXHJcbiAgICAgIGVycm9yOiBmaWxlLmVycm9yLFxyXG4gICAgICBwZXJjZW50OiAwLFxyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgICAgIG9yaWdpbkZpbGVPYmo6IGZpbGUgYXMgYW55XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRGaWxlSXRlbShmaWxlOiBVcGxvYWRGaWxlLCBmaWxlTGlzdDogVXBsb2FkRmlsZVtdKTogVXBsb2FkRmlsZSB7XHJcbiAgICByZXR1cm4gZmlsZUxpc3QuZmlsdGVyKGl0ZW0gPT4gaXRlbS51aWQgPT09IGZpbGUudWlkKVswXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVtb3ZlRmlsZUl0ZW0oZmlsZTogVXBsb2FkRmlsZSwgZmlsZUxpc3Q6IFVwbG9hZEZpbGVbXSk6IFVwbG9hZEZpbGVbXSB7XHJcbiAgICByZXR1cm4gZmlsZUxpc3QuZmlsdGVyKGl0ZW0gPT4gaXRlbS51aWQgIT09IGZpbGUudWlkKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2VuRXJyKGZpbGU6IFVwbG9hZEZpbGUpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGZpbGUucmVzcG9uc2UgJiYgdHlwZW9mIGZpbGUucmVzcG9uc2UgPT09ICdzdHJpbmcnXHJcbiAgICAgID8gZmlsZS5yZXNwb25zZVxyXG4gICAgICA6IChmaWxlLmVycm9yICYmIGZpbGUuZXJyb3Iuc3RhdHVzVGV4dCkgfHwgdGhpcy5sb2NhbGUudXBsb2FkRXJyb3I7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uU3RhcnQgPSAoZmlsZTogVXBsb2FkRmlsZSk6IHZvaWQgPT4ge1xyXG4gICAgaWYgKCF0aGlzLm56RmlsZUxpc3QpIHtcclxuICAgICAgdGhpcy5uekZpbGVMaXN0ID0gW107XHJcbiAgICB9XHJcbiAgICBjb25zdCB0YXJnZXRJdGVtID0gdGhpcy5maWxlVG9PYmplY3QoZmlsZSk7XHJcbiAgICB0YXJnZXRJdGVtLnN0YXR1cyA9ICd1cGxvYWRpbmcnO1xyXG4gICAgdGhpcy5uekZpbGVMaXN0ID0gdGhpcy5uekZpbGVMaXN0LmNvbmNhdCh0YXJnZXRJdGVtKTtcclxuICAgIHRoaXMubnpGaWxlTGlzdENoYW5nZS5lbWl0KHRoaXMubnpGaWxlTGlzdCk7XHJcbiAgICB0aGlzLm56Q2hhbmdlLmVtaXQoeyBmaWxlOiB0YXJnZXRJdGVtLCBmaWxlTGlzdDogdGhpcy5uekZpbGVMaXN0LCB0eXBlOiAnc3RhcnQnIH0pO1xyXG4gICAgdGhpcy5kZXRlY3RDaGFuZ2VzTGlzdCgpO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgb25Qcm9ncmVzcyA9IChlOiB7IHBlcmNlbnQ6IG51bWJlciB9LCBmaWxlOiBVcGxvYWRGaWxlKTogdm9pZCA9PiB7XHJcbiAgICBjb25zdCBmaWxlTGlzdCA9IHRoaXMubnpGaWxlTGlzdDtcclxuICAgIGNvbnN0IHRhcmdldEl0ZW0gPSB0aGlzLmdldEZpbGVJdGVtKGZpbGUsIGZpbGVMaXN0KTtcclxuICAgIHRhcmdldEl0ZW0ucGVyY2VudCA9IGUucGVyY2VudDtcclxuICAgIHRoaXMubnpDaGFuZ2UuZW1pdCh7XHJcbiAgICAgIGV2ZW50OiBlLFxyXG4gICAgICBmaWxlOiB7IC4uLnRhcmdldEl0ZW0gfSxcclxuICAgICAgZmlsZUxpc3Q6IHRoaXMubnpGaWxlTGlzdCxcclxuICAgICAgdHlwZTogJ3Byb2dyZXNzJ1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmRldGVjdENoYW5nZXNMaXN0KCk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBvblN1Y2Nlc3MgPSAocmVzOiB7fSwgZmlsZTogVXBsb2FkRmlsZSk6IHZvaWQgPT4ge1xyXG4gICAgY29uc3QgZmlsZUxpc3QgPSB0aGlzLm56RmlsZUxpc3Q7XHJcbiAgICBjb25zdCB0YXJnZXRJdGVtID0gdGhpcy5nZXRGaWxlSXRlbShmaWxlLCBmaWxlTGlzdCk7XHJcbiAgICB0YXJnZXRJdGVtLnN0YXR1cyA9ICdkb25lJztcclxuICAgIHRhcmdldEl0ZW0ucmVzcG9uc2UgPSByZXM7XHJcbiAgICB0aGlzLm56Q2hhbmdlLmVtaXQoe1xyXG4gICAgICBmaWxlOiB7IC4uLnRhcmdldEl0ZW0gfSxcclxuICAgICAgZmlsZUxpc3QsXHJcbiAgICAgIHR5cGU6ICdzdWNjZXNzJ1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmRldGVjdENoYW5nZXNMaXN0KCk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBvbkVycm9yID0gKGVycjoge30sIGZpbGU6IFVwbG9hZEZpbGUpOiB2b2lkID0+IHtcclxuICAgIGNvbnN0IGZpbGVMaXN0ID0gdGhpcy5uekZpbGVMaXN0O1xyXG4gICAgY29uc3QgdGFyZ2V0SXRlbSA9IHRoaXMuZ2V0RmlsZUl0ZW0oZmlsZSwgZmlsZUxpc3QpO1xyXG4gICAgdGFyZ2V0SXRlbS5lcnJvciA9IGVycjtcclxuICAgIHRhcmdldEl0ZW0uc3RhdHVzID0gJ2Vycm9yJztcclxuICAgIHRhcmdldEl0ZW0ubWVzc2FnZSA9IHRoaXMuZ2VuRXJyKHRhcmdldEl0ZW0pO1xyXG4gICAgdGhpcy5uekNoYW5nZS5lbWl0KHtcclxuICAgICAgZmlsZTogeyAuLi50YXJnZXRJdGVtIH0sXHJcbiAgICAgIGZpbGVMaXN0LFxyXG4gICAgICB0eXBlOiAnZXJyb3InXHJcbiAgICB9KTtcclxuICAgIHRoaXMuZGV0ZWN0Q2hhbmdlc0xpc3QoKTtcclxuICB9O1xyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIC8vICNyZWdpb24gZHJhZ1xyXG5cclxuICBwcml2YXRlIGRyYWdTdGF0ZTogc3RyaW5nO1xyXG5cclxuICAvLyBza2lwIHNhZmFyaSBidWdcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgZmlsZURyb3AoZTogYW55KTogdm9pZCB7XHJcbiAgICBpZiAoZS50eXBlID09PSB0aGlzLmRyYWdTdGF0ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmRyYWdTdGF0ZSA9IGUudHlwZTtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICB9XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgLy8gI3JlZ2lvbiBsaXN0XHJcblxyXG4gIHByaXZhdGUgZGV0ZWN0Q2hhbmdlc0xpc3QoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB0aGlzLmxpc3RDb21wLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIG9uUmVtb3ZlID0gKGZpbGU6IFVwbG9hZEZpbGUpOiB2b2lkID0+IHtcclxuICAgIHRoaXMudXBsb2FkQ29tcC5hYm9ydChmaWxlKTtcclxuICAgIGZpbGUuc3RhdHVzID0gJ3JlbW92ZWQnO1xyXG4gICAgY29uc3QgZm5SZXMgPSB0eXBlb2YgdGhpcy5uelJlbW92ZSA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMubnpSZW1vdmUoZmlsZSkgOiB0aGlzLm56UmVtb3ZlID09IG51bGwgPyB0cnVlIDogdGhpcy5uelJlbW92ZTtcclxuICAgIChmblJlcyBpbnN0YW5jZW9mIE9ic2VydmFibGUgPyBmblJlcyA6IG9mKGZuUmVzKSkucGlwZShmaWx0ZXIoKHJlczogYm9vbGVhbikgPT4gcmVzKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5uekZpbGVMaXN0ID0gdGhpcy5yZW1vdmVGaWxlSXRlbShmaWxlLCB0aGlzLm56RmlsZUxpc3QpO1xyXG4gICAgICB0aGlzLm56Q2hhbmdlLmVtaXQoe1xyXG4gICAgICAgIGZpbGUsXHJcbiAgICAgICAgZmlsZUxpc3Q6IHRoaXMubnpGaWxlTGlzdCxcclxuICAgICAgICB0eXBlOiAncmVtb3ZlZCdcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMubnpGaWxlTGlzdENoYW5nZS5lbWl0KHRoaXMubnpGaWxlTGlzdCk7XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgLy8gI3JlZ2lvbiBzdHlsZXNcclxuXHJcbiAgcHJpdmF0ZSBwcmVmaXhDbHMgPSAnYW50LXVwbG9hZCc7XHJcbiAgY2xhc3NMaXN0OiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICBwcml2YXRlIHNldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgbGV0IHN1YkNsczogc3RyaW5nW10gPSBbXTtcclxuICAgIGlmICh0aGlzLm56VHlwZSA9PT0gJ2RyYWcnKSB7XHJcbiAgICAgIGlmICh0aGlzLm56RmlsZUxpc3Quc29tZShmaWxlID0+IGZpbGUuc3RhdHVzID09PSAndXBsb2FkaW5nJykpIHtcclxuICAgICAgICBzdWJDbHMucHVzaChgJHt0aGlzLnByZWZpeENsc30tZHJhZy11cGxvYWRpbmdgKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5kcmFnU3RhdGUgPT09ICdkcmFnb3ZlcicpIHtcclxuICAgICAgICBzdWJDbHMucHVzaChgJHt0aGlzLnByZWZpeENsc30tZHJhZy1ob3ZlcmApO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdWJDbHMgPSBbYCR7dGhpcy5wcmVmaXhDbHN9LXNlbGVjdC0ke3RoaXMubnpMaXN0VHlwZX1gXTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNsYXNzTGlzdCA9IFtcclxuICAgICAgdGhpcy5wcmVmaXhDbHMsXHJcbiAgICAgIGAke3RoaXMucHJlZml4Q2xzfS0ke3RoaXMubnpUeXBlfWAsXHJcbiAgICAgIC4uLnN1YkNscyxcclxuICAgICAgKHRoaXMubnpEaXNhYmxlZCAmJiBgJHt0aGlzLnByZWZpeENsc30tZGlzYWJsZWRgKSB8fCAnJ1xyXG4gICAgXS5maWx0ZXIoaXRlbSA9PiAhIWl0ZW0pO1xyXG5cclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmkxOG4kID0gdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXRMb2NhbGVEYXRhKCdVcGxvYWQnKTtcclxuICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzTGlzdCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtQIGluIGtleW9mIHRoaXNdPzogU2ltcGxlQ2hhbmdlIH0gJiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5uekZpbGVMaXN0KSB7XHJcbiAgICAgICh0aGlzLm56RmlsZUxpc3QgfHwgW10pLmZvckVhY2goZmlsZSA9PiAoZmlsZS5tZXNzYWdlID0gdGhpcy5nZW5FcnIoZmlsZSkpKTtcclxuICAgIH1cclxuICAgIHRoaXMuemlwT3B0aW9ucygpLnNldENsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuaTE4biQudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcbn1cclxuIiwiPG5nLXRlbXBsYXRlICNsaXN0PlxyXG4gIDxuei11cGxvYWQtbGlzdFxyXG4gICAgI2xpc3RDb21wXHJcbiAgICBbc3R5bGUuZGlzcGxheV09XCJuelNob3dVcGxvYWRMaXN0ID8gJycgOiAnbm9uZSdcIlxyXG4gICAgW2xvY2FsZV09XCJsb2NhbGVcIlxyXG4gICAgW2xpc3RUeXBlXT1cIm56TGlzdFR5cGVcIlxyXG4gICAgW2l0ZW1zXT1cIm56RmlsZUxpc3QgfHwgW11cIlxyXG4gICAgW2ljb25zXT1cIm56U2hvd1VwbG9hZExpc3RcIlxyXG4gICAgW29uUHJldmlld109XCJuelByZXZpZXdcIlxyXG4gICAgW29uUmVtb3ZlXT1cIm9uUmVtb3ZlXCJcclxuICA+PC9uei11cGxvYWQtbGlzdD5cclxuPC9uZy10ZW1wbGF0ZT5cclxuPG5nLXRlbXBsYXRlICNjb24+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvbmctdGVtcGxhdGU+XHJcbjxuZy10ZW1wbGF0ZSAjYnRuPlxyXG4gIDxkaXYgW25nQ2xhc3NdPVwiY2xhc3NMaXN0XCIgW3N0eWxlLmRpc3BsYXldPVwibnpTaG93QnV0dG9uID8gJycgOiAnbm9uZSdcIj5cclxuICAgIDxkaXYgbnotdXBsb2FkLWJ0biAjdXBsb2FkQ29tcCBbb3B0aW9uc109XCJfYnRuT3B0aW9uc1wiPlxyXG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29uXCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L25nLXRlbXBsYXRlPlxyXG48bmctY29udGFpbmVyICpuZ0lmPVwibnpUeXBlID09PSAnZHJhZyc7IGVsc2Ugc2VsZWN0XCI+XHJcbiAgPGRpdlxyXG4gICAgW25nQ2xhc3NdPVwiY2xhc3NMaXN0XCJcclxuICAgIChkcm9wKT1cImZpbGVEcm9wKCRldmVudClcIlxyXG4gICAgKGRyYWdvdmVyKT1cImZpbGVEcm9wKCRldmVudClcIlxyXG4gICAgKGRyYWdsZWF2ZSk9XCJmaWxlRHJvcCgkZXZlbnQpXCJcclxuICA+XHJcbiAgICA8ZGl2IG56LXVwbG9hZC1idG4gI3VwbG9hZENvbXAgW29wdGlvbnNdPVwiX2J0bk9wdGlvbnNcIiBbY2xhc3Nlc109XCJ7ICdhbnQtdXBsb2FkLWJ0bic6IHRydWUgfVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LXVwbG9hZC1kcmFnLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJjb25cIj48L25nLXRlbXBsYXRlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJsaXN0XCI+PC9uZy10ZW1wbGF0ZT5cclxuPC9uZy1jb250YWluZXI+XHJcbjxuZy10ZW1wbGF0ZSAjc2VsZWN0PlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJuekxpc3RUeXBlID09PSAncGljdHVyZS1jYXJkJzsgZWxzZSBwaWNcIj5cclxuICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJsaXN0XCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJidG5cIj48L25nLXRlbXBsYXRlPlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG48L25nLXRlbXBsYXRlPlxyXG48bmctdGVtcGxhdGUgI3BpYz5cclxuICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYnRuXCI+PC9uZy10ZW1wbGF0ZT5cclxuICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwibGlzdFwiPjwvbmctdGVtcGxhdGU+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==
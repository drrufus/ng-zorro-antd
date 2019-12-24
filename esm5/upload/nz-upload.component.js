import { __assign, __decorate, __metadata, __read, __spread } from "tslib";
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
var _c0 = ["uploadComp"];
var _c1 = ["listComp"];
var _c2 = function () { return []; };
function NzUploadComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nz-upload-list", 6, 7);
} if (rf & 2) {
    var ctx_r1929 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("display", ctx_r1929.nzShowUploadList ? "" : "none");
    i0.ɵɵproperty("locale", ctx_r1929.locale)("listType", ctx_r1929.nzListType)("items", ctx_r1929.nzFileList || i0.ɵɵpureFunction0(7, _c2))("icons", ctx_r1929.nzShowUploadList)("onPreview", ctx_r1929.nzPreview)("onRemove", ctx_r1929.onRemove);
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
    var ctx_r1933 = i0.ɵɵnextContext();
    var _r1930 = i0.ɵɵreference(3);
    i0.ɵɵstyleProp("display", ctx_r1933.nzShowButton ? "" : "none");
    i0.ɵɵproperty("ngClass", ctx_r1933.classList);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("options", ctx_r1933._btnOptions);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", _r1930);
} }
function NzUploadComponent_ng_container_6_ng_template_5_Template(rf, ctx) { }
function NzUploadComponent_ng_container_6_ng_template_6_Template(rf, ctx) { }
var _c3 = function () { return { "ant-upload-btn": true }; };
function NzUploadComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    var _r1946 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 12);
    i0.ɵɵlistener("drop", function NzUploadComponent_ng_container_6_Template_div_drop_1_listener($event) { i0.ɵɵrestoreView(_r1946); var ctx_r1945 = i0.ɵɵnextContext(); return ctx_r1945.fileDrop($event); })("dragover", function NzUploadComponent_ng_container_6_Template_div_dragover_1_listener($event) { i0.ɵɵrestoreView(_r1946); var ctx_r1947 = i0.ɵɵnextContext(); return ctx_r1947.fileDrop($event); })("dragleave", function NzUploadComponent_ng_container_6_Template_div_dragleave_1_listener($event) { i0.ɵɵrestoreView(_r1946); var ctx_r1948 = i0.ɵɵnextContext(); return ctx_r1948.fileDrop($event); });
    i0.ɵɵelementStart(2, "div", 13, 10);
    i0.ɵɵelementStart(4, "div", 14);
    i0.ɵɵtemplate(5, NzUploadComponent_ng_container_6_ng_template_5_Template, 0, 0, "ng-template", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, NzUploadComponent_ng_container_6_ng_template_6_Template, 0, 0, "ng-template", 11);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1934 = i0.ɵɵnextContext();
    var _r1930 = i0.ɵɵreference(3);
    var _r1928 = i0.ɵɵreference(1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r1934.classList);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("options", ctx_r1934._btnOptions)("classes", i0.ɵɵpureFunction0(5, _c3));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngTemplateOutlet", _r1930);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r1928);
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
    var _r1928 = i0.ɵɵreference(1);
    var _r1932 = i0.ɵɵreference(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r1928);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r1932);
} }
function NzUploadComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NzUploadComponent_ng_template_7_ng_container_0_Template, 3, 2, "ng-container", 3);
} if (rf & 2) {
    var ctx_r1936 = i0.ɵɵnextContext();
    var _r1937 = i0.ɵɵreference(10);
    i0.ɵɵproperty("ngIf", ctx_r1936.nzListType === "picture-card")("ngIfElse", _r1937);
} }
function NzUploadComponent_ng_template_9_ng_template_0_Template(rf, ctx) { }
function NzUploadComponent_ng_template_9_ng_template_1_Template(rf, ctx) { }
function NzUploadComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NzUploadComponent_ng_template_9_ng_template_0_Template, 0, 0, "ng-template", 11);
    i0.ɵɵtemplate(1, NzUploadComponent_ng_template_9_ng_template_1_Template, 0, 0, "ng-template", 11);
} if (rf & 2) {
    i0.ɵɵnextContext();
    var _r1932 = i0.ɵɵreference(5);
    var _r1928 = i0.ɵɵreference(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r1932);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r1928);
} }
var _c4 = ["*"];
var NzUploadComponent = /** @class */ (function () {
    // #endregion
    function NzUploadComponent(cdr, i18n) {
        var _this = this;
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
        this.onStart = function (file) {
            if (!_this.nzFileList) {
                _this.nzFileList = [];
            }
            var targetItem = _this.fileToObject(file);
            targetItem.status = 'uploading';
            _this.nzFileList = _this.nzFileList.concat(targetItem);
            _this.nzFileListChange.emit(_this.nzFileList);
            _this.nzChange.emit({ file: targetItem, fileList: _this.nzFileList, type: 'start' });
            _this.detectChangesList();
        };
        this.onProgress = function (e, file) {
            var fileList = _this.nzFileList;
            var targetItem = _this.getFileItem(file, fileList);
            targetItem.percent = e.percent;
            _this.nzChange.emit({
                event: e,
                file: __assign({}, targetItem),
                fileList: _this.nzFileList,
                type: 'progress'
            });
            _this.detectChangesList();
        };
        this.onSuccess = function (res, file) {
            var fileList = _this.nzFileList;
            var targetItem = _this.getFileItem(file, fileList);
            targetItem.status = 'done';
            targetItem.response = res;
            _this.nzChange.emit({
                file: __assign({}, targetItem),
                fileList: fileList,
                type: 'success'
            });
            _this.detectChangesList();
        };
        this.onError = function (err, file) {
            var fileList = _this.nzFileList;
            var targetItem = _this.getFileItem(file, fileList);
            targetItem.error = err;
            targetItem.status = 'error';
            targetItem.message = _this.genErr(targetItem);
            _this.nzChange.emit({
                file: __assign({}, targetItem),
                fileList: fileList,
                type: 'error'
            });
            _this.detectChangesList();
        };
        this.onRemove = function (file) {
            _this.uploadComp.abort(file);
            file.status = 'removed';
            var fnRes = typeof _this.nzRemove === 'function' ? _this.nzRemove(file) : _this.nzRemove == null ? true : _this.nzRemove;
            (fnRes instanceof Observable ? fnRes : of(fnRes)).pipe(filter(function (res) { return res; })).subscribe(function () {
                _this.nzFileList = _this.removeFileItem(file, _this.nzFileList);
                _this.nzChange.emit({
                    file: file,
                    fileList: _this.nzFileList,
                    type: 'removed'
                });
                _this.nzFileListChange.emit(_this.nzFileList);
                _this.cdr.detectChanges();
            });
        };
        // #endregion
        // #region styles
        this.prefixCls = 'ant-upload';
        this.classList = [];
    }
    Object.defineProperty(NzUploadComponent.prototype, "nzShowUploadList", {
        get: function () {
            return this._showUploadList;
        },
        set: function (value) {
            this._showUploadList = typeof value === 'boolean' ? toBoolean(value) : value;
        },
        enumerable: true,
        configurable: true
    });
    NzUploadComponent.prototype.zipOptions = function () {
        var _this = this;
        if (typeof this.nzShowUploadList === 'boolean' && this.nzShowUploadList) {
            this.nzShowUploadList = {
                showPreviewIcon: true,
                showRemoveIcon: true,
                hidePreviewIconInNonImage: false
            };
        }
        // filters
        var filters = this.nzFilter.slice();
        if (this.nzMultiple && this.nzLimit > 0 && filters.findIndex(function (w) { return w.name === 'limit'; }) === -1) {
            filters.push({
                name: 'limit',
                fn: function (fileList) { return fileList.slice(-_this.nzLimit); }
            });
        }
        if (this.nzSize > 0 && filters.findIndex(function (w) { return w.name === 'size'; }) === -1) {
            filters.push({
                name: 'size',
                fn: function (fileList) { return fileList.filter(function (w) { return w.size / 1024 <= _this.nzSize; }); }
            });
        }
        if (this.nzFileType && this.nzFileType.length > 0 && filters.findIndex(function (w) { return w.name === 'type'; }) === -1) {
            var types_1 = this.nzFileType.split(',');
            filters.push({
                name: 'type',
                fn: function (fileList) { return fileList.filter(function (w) { return ~types_1.indexOf(w.type); }); }
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
            filters: filters,
            onStart: this.onStart,
            onProgress: this.onProgress,
            onSuccess: this.onSuccess,
            onError: this.onError
        };
        return this;
    };
    // #region upload
    NzUploadComponent.prototype.fileToObject = function (file) {
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
    };
    NzUploadComponent.prototype.getFileItem = function (file, fileList) {
        return fileList.filter(function (item) { return item.uid === file.uid; })[0];
    };
    NzUploadComponent.prototype.removeFileItem = function (file, fileList) {
        return fileList.filter(function (item) { return item.uid !== file.uid; });
    };
    NzUploadComponent.prototype.genErr = function (file) {
        return file.response && typeof file.response === 'string'
            ? file.response
            : (file.error && file.error.statusText) || this.locale.uploadError;
    };
    // skip safari bug
    // tslint:disable-next-line:no-any
    NzUploadComponent.prototype.fileDrop = function (e) {
        if (e.type === this.dragState) {
            return;
        }
        this.dragState = e.type;
        this.setClassMap();
    };
    // #endregion
    // #region list
    NzUploadComponent.prototype.detectChangesList = function () {
        this.cdr.detectChanges();
        this.listComp.detectChanges();
    };
    NzUploadComponent.prototype.setClassMap = function () {
        var subCls = [];
        if (this.nzType === 'drag') {
            if (this.nzFileList.some(function (file) { return file.status === 'uploading'; })) {
                subCls.push(this.prefixCls + "-drag-uploading");
            }
            if (this.dragState === 'dragover') {
                subCls.push(this.prefixCls + "-drag-hover");
            }
        }
        else {
            subCls = [this.prefixCls + "-select-" + this.nzListType];
        }
        this.classList = __spread([
            this.prefixCls,
            this.prefixCls + "-" + this.nzType
        ], subCls, [
            (this.nzDisabled && this.prefixCls + "-disabled") || ''
        ]).filter(function (item) { return !!item; });
        this.cdr.detectChanges();
    };
    // #endregion
    NzUploadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.i18n$ = this.i18n.localeChange.subscribe(function () {
            _this.locale = _this.i18n.getLocaleData('Upload');
            _this.detectChangesList();
        });
    };
    NzUploadComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.nzFileList) {
            (this.nzFileList || []).forEach(function (file) { return (file.message = _this.genErr(file)); });
        }
        this.zipOptions().setClassMap();
    };
    NzUploadComponent.prototype.ngOnDestroy = function () {
        this.i18n$.unsubscribe();
    };
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
            var _r1935 = i0.ɵɵreference(8);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngIf", ctx.nzType === "drag")("ngIfElse", _r1935);
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
    return NzUploadComponent;
}());
export { NzUploadComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdXBsb2FkLyIsInNvdXJjZXMiOlsibnotdXBsb2FkLmNvbXBvbmVudC50cyIsIm56LXVwbG9hZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUdOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QyxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFZbkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDakUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7Ozs7Ozs7SUN2Q2pFLHVDQVNrQjs7O0lBUGhCLG1FQUFnRDtJQUNoRCx5Q0FBaUIsa0NBQUEsNkRBQUEscUNBQUEsa0NBQUEsZ0NBQUE7OztJQVFILGtCQUFZOzs7O0lBRTVCLDhCQUNFO0lBQUEsa0NBQ0U7SUFBQSxpR0FBc0M7SUFDeEMsaUJBQU07SUFDUixpQkFBTTs7OztJQUpxQiwrREFBNEM7SUFBbEUsNkNBQXFCO0lBQ08sZUFBdUI7SUFBdkIsK0NBQXVCO0lBQ3ZDLGVBQXdCO0lBQXhCLHlDQUF3Qjs7Ozs7OztJQUkzQyw2QkFDRTtJQUFBLCtCQU1FO0lBSkEsME1BQXlCLHFNQUFBLHVNQUFBO0lBSXpCLG1DQUNFO0lB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S0FBSztnQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxJQUFJLEVBQUU7b0JBQ0oseUNBQXlDLEVBQUUsK0JBQStCO2lCQUMzRTthQUNGOztrQkFHRSxTQUFTO21CQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7O2tCQUN6QyxTQUFTO21CQUFDLFVBQVUsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7O2tCQU12QyxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFFTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFJTCxLQUFLOztrQkFTTCxLQUFLOztrQkFDTCxLQUFLOztrQkFFTCxLQUFLOztrQkFDTCxLQUFLOztrQkFFTCxNQUFNOztrQkFDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZSxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIsIHRvQm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5cclxuaW1wb3J0IHtcclxuICBTaG93VXBsb2FkTGlzdEludGVyZmFjZSxcclxuICBVcGxvYWRDaGFuZ2VQYXJhbSxcclxuICBVcGxvYWRGaWxlLFxyXG4gIFVwbG9hZEZpbHRlcixcclxuICBVcGxvYWRMaXN0VHlwZSxcclxuICBVcGxvYWRUeXBlLFxyXG4gIFVwbG9hZFhIUkFyZ3MsXHJcbiAgWmlwQnV0dG9uT3B0aW9uc1xyXG59IGZyb20gJy4vaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgTnpVcGxvYWRCdG5Db21wb25lbnQgfSBmcm9tICcuL256LXVwbG9hZC1idG4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpVcGxvYWRMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9uei11cGxvYWQtbGlzdC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei11cGxvYWQnLFxyXG4gIGV4cG9ydEFzOiAnbnpVcGxvYWQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei11cGxvYWQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtdXBsb2FkLXBpY3R1cmUtY2FyZC13cmFwcGVyXSc6ICduekxpc3RUeXBlID09PSBcInBpY3R1cmUtY2FyZFwiJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56VXBsb2FkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBpMThuJDogU3Vic2NyaXB0aW9uO1xyXG4gIEBWaWV3Q2hpbGQoJ3VwbG9hZENvbXAnLCB7IHN0YXRpYzogZmFsc2UgfSkgdXBsb2FkQ29tcDogTnpVcGxvYWRCdG5Db21wb25lbnQ7XHJcbiAgQFZpZXdDaGlsZCgnbGlzdENvbXAnLCB7IHN0YXRpYzogZmFsc2UgfSkgbGlzdENvbXA6IE56VXBsb2FkTGlzdENvbXBvbmVudDtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgbG9jYWxlOiBhbnkgPSB7fTtcclxuXHJcbiAgLy8gI3JlZ2lvbiBmaWVsZHNcclxuXHJcbiAgQElucHV0KCkgbnpUeXBlOiBVcGxvYWRUeXBlID0gJ3NlbGVjdCc7XHJcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbnpMaW1pdCA9IDA7XHJcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbnpTaXplID0gMDtcclxuXHJcbiAgQElucHV0KCkgbnpGaWxlVHlwZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG56QWNjZXB0OiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICBASW5wdXQoKSBuekFjdGlvbjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRpcmVjdG9yeSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuek9wZW5GaWxlRGlhbG9nT25DbGljayA9IHRydWU7XHJcbiAgQElucHV0KCkgbnpCZWZvcmVVcGxvYWQ6IChmaWxlOiBVcGxvYWRGaWxlLCBmaWxlTGlzdDogVXBsb2FkRmlsZVtdKSA9PiBib29sZWFuIHwgT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuICBASW5wdXQoKSBuekN1c3RvbVJlcXVlc3Q6IChpdGVtOiBVcGxvYWRYSFJBcmdzKSA9PiBTdWJzY3JpcHRpb247XHJcbiAgQElucHV0KCkgbnpEYXRhOiB7fSB8ICgoZmlsZTogVXBsb2FkRmlsZSkgPT4ge30pO1xyXG4gIEBJbnB1dCgpIG56RmlsdGVyOiBVcGxvYWRGaWx0ZXJbXSA9IFtdO1xyXG4gIEBJbnB1dCgpIG56RmlsZUxpc3Q6IFVwbG9hZEZpbGVbXSA9IFtdO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpIZWFkZXJzOiB7fSB8ICgoZmlsZTogVXBsb2FkRmlsZSkgPT4ge30pO1xyXG4gIEBJbnB1dCgpIG56TGlzdFR5cGU6IFVwbG9hZExpc3RUeXBlID0gJ3RleHQnO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuek11bHRpcGxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpOYW1lID0gJ2ZpbGUnO1xyXG5cclxuICBwcml2YXRlIF9zaG93VXBsb2FkTGlzdDogYm9vbGVhbiB8IFNob3dVcGxvYWRMaXN0SW50ZXJmYWNlID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpTaG93VXBsb2FkTGlzdCh2YWx1ZTogYm9vbGVhbiB8IFNob3dVcGxvYWRMaXN0SW50ZXJmYWNlKSB7XHJcbiAgICB0aGlzLl9zaG93VXBsb2FkTGlzdCA9IHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nID8gdG9Cb29sZWFuKHZhbHVlKSA6IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56U2hvd1VwbG9hZExpc3QoKTogYm9vbGVhbiB8IFNob3dVcGxvYWRMaXN0SW50ZXJmYWNlIHtcclxuICAgIHJldHVybiB0aGlzLl9zaG93VXBsb2FkTGlzdDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dCdXR0b24gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBueldpdGhDcmVkZW50aWFscyA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKSBuelJlbW92ZTogKGZpbGU6IFVwbG9hZEZpbGUpID0+IGJvb2xlYW4gfCBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG4gIEBJbnB1dCgpIG56UHJldmlldzogKGZpbGU6IFVwbG9hZEZpbGUpID0+IHZvaWQ7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNoYW5nZTogRXZlbnRFbWl0dGVyPFVwbG9hZENoYW5nZVBhcmFtPiA9IG5ldyBFdmVudEVtaXR0ZXI8VXBsb2FkQ2hhbmdlUGFyYW0+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56RmlsZUxpc3RDaGFuZ2U6IEV2ZW50RW1pdHRlcjxVcGxvYWRGaWxlW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxVcGxvYWRGaWxlW10+KCk7XHJcblxyXG4gIF9idG5PcHRpb25zOiBaaXBCdXR0b25PcHRpb25zO1xyXG5cclxuICBwcml2YXRlIHppcE9wdGlvbnMoKTogdGhpcyB7XHJcbiAgICBpZiAodHlwZW9mIHRoaXMubnpTaG93VXBsb2FkTGlzdCA9PT0gJ2Jvb2xlYW4nICYmIHRoaXMubnpTaG93VXBsb2FkTGlzdCkge1xyXG4gICAgICB0aGlzLm56U2hvd1VwbG9hZExpc3QgPSB7XHJcbiAgICAgICAgc2hvd1ByZXZpZXdJY29uOiB0cnVlLFxyXG4gICAgICAgIHNob3dSZW1vdmVJY29uOiB0cnVlLFxyXG4gICAgICAgIGhpZGVQcmV2aWV3SWNvbkluTm9uSW1hZ2U6IGZhbHNlXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICAvLyBmaWx0ZXJzXHJcbiAgICBjb25zdCBmaWx0ZXJzOiBVcGxvYWRGaWx0ZXJbXSA9IHRoaXMubnpGaWx0ZXIuc2xpY2UoKTtcclxuICAgIGlmICh0aGlzLm56TXVsdGlwbGUgJiYgdGhpcy5uekxpbWl0ID4gMCAmJiBmaWx0ZXJzLmZpbmRJbmRleCh3ID0+IHcubmFtZSA9PT0gJ2xpbWl0JykgPT09IC0xKSB7XHJcbiAgICAgIGZpbHRlcnMucHVzaCh7XHJcbiAgICAgICAgbmFtZTogJ2xpbWl0JyxcclxuICAgICAgICBmbjogKGZpbGVMaXN0OiBVcGxvYWRGaWxlW10pID0+IGZpbGVMaXN0LnNsaWNlKC10aGlzLm56TGltaXQpXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubnpTaXplID4gMCAmJiBmaWx0ZXJzLmZpbmRJbmRleCh3ID0+IHcubmFtZSA9PT0gJ3NpemUnKSA9PT0gLTEpIHtcclxuICAgICAgZmlsdGVycy5wdXNoKHtcclxuICAgICAgICBuYW1lOiAnc2l6ZScsXHJcbiAgICAgICAgZm46IChmaWxlTGlzdDogVXBsb2FkRmlsZVtdKSA9PiBmaWxlTGlzdC5maWx0ZXIodyA9PiB3LnNpemUgLyAxMDI0IDw9IHRoaXMubnpTaXplKVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm56RmlsZVR5cGUgJiYgdGhpcy5uekZpbGVUeXBlLmxlbmd0aCA+IDAgJiYgZmlsdGVycy5maW5kSW5kZXgodyA9PiB3Lm5hbWUgPT09ICd0eXBlJykgPT09IC0xKSB7XHJcbiAgICAgIGNvbnN0IHR5cGVzID0gdGhpcy5uekZpbGVUeXBlLnNwbGl0KCcsJyk7XHJcbiAgICAgIGZpbHRlcnMucHVzaCh7XHJcbiAgICAgICAgbmFtZTogJ3R5cGUnLFxyXG4gICAgICAgIGZuOiAoZmlsZUxpc3Q6IFVwbG9hZEZpbGVbXSkgPT4gZmlsZUxpc3QuZmlsdGVyKHcgPT4gfnR5cGVzLmluZGV4T2Yody50eXBlKSlcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9idG5PcHRpb25zID0ge1xyXG4gICAgICBkaXNhYmxlZDogdGhpcy5uekRpc2FibGVkLFxyXG4gICAgICBhY2NlcHQ6IHRoaXMubnpBY2NlcHQsXHJcbiAgICAgIGFjdGlvbjogdGhpcy5uekFjdGlvbixcclxuICAgICAgZGlyZWN0b3J5OiB0aGlzLm56RGlyZWN0b3J5LFxyXG4gICAgICBvcGVuRmlsZURpYWxvZ09uQ2xpY2s6IHRoaXMubnpPcGVuRmlsZURpYWxvZ09uQ2xpY2ssXHJcbiAgICAgIGJlZm9yZVVwbG9hZDogdGhpcy5uekJlZm9yZVVwbG9hZCxcclxuICAgICAgY3VzdG9tUmVxdWVzdDogdGhpcy5uekN1c3RvbVJlcXVlc3QsXHJcbiAgICAgIGRhdGE6IHRoaXMubnpEYXRhLFxyXG4gICAgICBoZWFkZXJzOiB0aGlzLm56SGVhZGVycyxcclxuICAgICAgbmFtZTogdGhpcy5uek5hbWUsXHJcbiAgICAgIG11bHRpcGxlOiB0aGlzLm56TXVsdGlwbGUsXHJcbiAgICAgIHdpdGhDcmVkZW50aWFsczogdGhpcy5ueldpdGhDcmVkZW50aWFscyxcclxuICAgICAgZmlsdGVycyxcclxuICAgICAgb25TdGFydDogdGhpcy5vblN0YXJ0LFxyXG4gICAgICBvblByb2dyZXNzOiB0aGlzLm9uUHJvZ3Jlc3MsXHJcbiAgICAgIG9uU3VjY2VzczogdGhpcy5vblN1Y2Nlc3MsXHJcbiAgICAgIG9uRXJyb3I6IHRoaXMub25FcnJvclxyXG4gICAgfTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZSkge31cclxuXHJcbiAgLy8gI3JlZ2lvbiB1cGxvYWRcclxuXHJcbiAgcHJpdmF0ZSBmaWxlVG9PYmplY3QoZmlsZTogVXBsb2FkRmlsZSk6IFVwbG9hZEZpbGUge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbGFzdE1vZGlmaWVkOiBmaWxlLmxhc3RNb2RpZmllZCxcclxuICAgICAgbGFzdE1vZGlmaWVkRGF0ZTogZmlsZS5sYXN0TW9kaWZpZWREYXRlLFxyXG4gICAgICBuYW1lOiBmaWxlLmZpbGVuYW1lIHx8IGZpbGUubmFtZSxcclxuICAgICAgc2l6ZTogZmlsZS5zaXplLFxyXG4gICAgICB0eXBlOiBmaWxlLnR5cGUsXHJcbiAgICAgIHVpZDogZmlsZS51aWQsXHJcbiAgICAgIHJlc3BvbnNlOiBmaWxlLnJlc3BvbnNlLFxyXG4gICAgICBlcnJvcjogZmlsZS5lcnJvcixcclxuICAgICAgcGVyY2VudDogMCxcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gICAgICBvcmlnaW5GaWxlT2JqOiBmaWxlIGFzIGFueVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RmlsZUl0ZW0oZmlsZTogVXBsb2FkRmlsZSwgZmlsZUxpc3Q6IFVwbG9hZEZpbGVbXSk6IFVwbG9hZEZpbGUge1xyXG4gICAgcmV0dXJuIGZpbGVMaXN0LmZpbHRlcihpdGVtID0+IGl0ZW0udWlkID09PSBmaWxlLnVpZClbMF07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbW92ZUZpbGVJdGVtKGZpbGU6IFVwbG9hZEZpbGUsIGZpbGVMaXN0OiBVcGxvYWRGaWxlW10pOiBVcGxvYWRGaWxlW10ge1xyXG4gICAgcmV0dXJuIGZpbGVMaXN0LmZpbHRlcihpdGVtID0+IGl0ZW0udWlkICE9PSBmaWxlLnVpZCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdlbkVycihmaWxlOiBVcGxvYWRGaWxlKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBmaWxlLnJlc3BvbnNlICYmIHR5cGVvZiBmaWxlLnJlc3BvbnNlID09PSAnc3RyaW5nJ1xyXG4gICAgICA/IGZpbGUucmVzcG9uc2VcclxuICAgICAgOiAoZmlsZS5lcnJvciAmJiBmaWxlLmVycm9yLnN0YXR1c1RleHQpIHx8IHRoaXMubG9jYWxlLnVwbG9hZEVycm9yO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvblN0YXJ0ID0gKGZpbGU6IFVwbG9hZEZpbGUpOiB2b2lkID0+IHtcclxuICAgIGlmICghdGhpcy5uekZpbGVMaXN0KSB7XHJcbiAgICAgIHRoaXMubnpGaWxlTGlzdCA9IFtdO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdGFyZ2V0SXRlbSA9IHRoaXMuZmlsZVRvT2JqZWN0KGZpbGUpO1xyXG4gICAgdGFyZ2V0SXRlbS5zdGF0dXMgPSAndXBsb2FkaW5nJztcclxuICAgIHRoaXMubnpGaWxlTGlzdCA9IHRoaXMubnpGaWxlTGlzdC5jb25jYXQodGFyZ2V0SXRlbSk7XHJcbiAgICB0aGlzLm56RmlsZUxpc3RDaGFuZ2UuZW1pdCh0aGlzLm56RmlsZUxpc3QpO1xyXG4gICAgdGhpcy5uekNoYW5nZS5lbWl0KHsgZmlsZTogdGFyZ2V0SXRlbSwgZmlsZUxpc3Q6IHRoaXMubnpGaWxlTGlzdCwgdHlwZTogJ3N0YXJ0JyB9KTtcclxuICAgIHRoaXMuZGV0ZWN0Q2hhbmdlc0xpc3QoKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIG9uUHJvZ3Jlc3MgPSAoZTogeyBwZXJjZW50OiBudW1iZXIgfSwgZmlsZTogVXBsb2FkRmlsZSk6IHZvaWQgPT4ge1xyXG4gICAgY29uc3QgZmlsZUxpc3QgPSB0aGlzLm56RmlsZUxpc3Q7XHJcbiAgICBjb25zdCB0YXJnZXRJdGVtID0gdGhpcy5nZXRGaWxlSXRlbShmaWxlLCBmaWxlTGlzdCk7XHJcbiAgICB0YXJnZXRJdGVtLnBlcmNlbnQgPSBlLnBlcmNlbnQ7XHJcbiAgICB0aGlzLm56Q2hhbmdlLmVtaXQoe1xyXG4gICAgICBldmVudDogZSxcclxuICAgICAgZmlsZTogeyAuLi50YXJnZXRJdGVtIH0sXHJcbiAgICAgIGZpbGVMaXN0OiB0aGlzLm56RmlsZUxpc3QsXHJcbiAgICAgIHR5cGU6ICdwcm9ncmVzcydcclxuICAgIH0pO1xyXG4gICAgdGhpcy5kZXRlY3RDaGFuZ2VzTGlzdCgpO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgb25TdWNjZXNzID0gKHJlczoge30sIGZpbGU6IFVwbG9hZEZpbGUpOiB2b2lkID0+IHtcclxuICAgIGNvbnN0IGZpbGVMaXN0ID0gdGhpcy5uekZpbGVMaXN0O1xyXG4gICAgY29uc3QgdGFyZ2V0SXRlbSA9IHRoaXMuZ2V0RmlsZUl0ZW0oZmlsZSwgZmlsZUxpc3QpO1xyXG4gICAgdGFyZ2V0SXRlbS5zdGF0dXMgPSAnZG9uZSc7XHJcbiAgICB0YXJnZXRJdGVtLnJlc3BvbnNlID0gcmVzO1xyXG4gICAgdGhpcy5uekNoYW5nZS5lbWl0KHtcclxuICAgICAgZmlsZTogeyAuLi50YXJnZXRJdGVtIH0sXHJcbiAgICAgIGZpbGVMaXN0LFxyXG4gICAgICB0eXBlOiAnc3VjY2VzcydcclxuICAgIH0pO1xyXG4gICAgdGhpcy5kZXRlY3RDaGFuZ2VzTGlzdCgpO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgb25FcnJvciA9IChlcnI6IHt9LCBmaWxlOiBVcGxvYWRGaWxlKTogdm9pZCA9PiB7XHJcbiAgICBjb25zdCBmaWxlTGlzdCA9IHRoaXMubnpGaWxlTGlzdDtcclxuICAgIGNvbnN0IHRhcmdldEl0ZW0gPSB0aGlzLmdldEZpbGVJdGVtKGZpbGUsIGZpbGVMaXN0KTtcclxuICAgIHRhcmdldEl0ZW0uZXJyb3IgPSBlcnI7XHJcbiAgICB0YXJnZXRJdGVtLnN0YXR1cyA9ICdlcnJvcic7XHJcbiAgICB0YXJnZXRJdGVtLm1lc3NhZ2UgPSB0aGlzLmdlbkVycih0YXJnZXRJdGVtKTtcclxuICAgIHRoaXMubnpDaGFuZ2UuZW1pdCh7XHJcbiAgICAgIGZpbGU6IHsgLi4udGFyZ2V0SXRlbSB9LFxyXG4gICAgICBmaWxlTGlzdCxcclxuICAgICAgdHlwZTogJ2Vycm9yJ1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmRldGVjdENoYW5nZXNMaXN0KCk7XHJcbiAgfTtcclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAvLyAjcmVnaW9uIGRyYWdcclxuXHJcbiAgcHJpdmF0ZSBkcmFnU3RhdGU6IHN0cmluZztcclxuXHJcbiAgLy8gc2tpcCBzYWZhcmkgYnVnXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIGZpbGVEcm9wKGU6IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKGUudHlwZSA9PT0gdGhpcy5kcmFnU3RhdGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5kcmFnU3RhdGUgPSBlLnR5cGU7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIC8vICNyZWdpb24gbGlzdFxyXG5cclxuICBwcml2YXRlIGRldGVjdENoYW5nZXNMaXN0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgdGhpcy5saXN0Q29tcC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBvblJlbW92ZSA9IChmaWxlOiBVcGxvYWRGaWxlKTogdm9pZCA9PiB7XHJcbiAgICB0aGlzLnVwbG9hZENvbXAuYWJvcnQoZmlsZSk7XHJcbiAgICBmaWxlLnN0YXR1cyA9ICdyZW1vdmVkJztcclxuICAgIGNvbnN0IGZuUmVzID0gdHlwZW9mIHRoaXMubnpSZW1vdmUgPT09ICdmdW5jdGlvbicgPyB0aGlzLm56UmVtb3ZlKGZpbGUpIDogdGhpcy5uelJlbW92ZSA9PSBudWxsID8gdHJ1ZSA6IHRoaXMubnpSZW1vdmU7XHJcbiAgICAoZm5SZXMgaW5zdGFuY2VvZiBPYnNlcnZhYmxlID8gZm5SZXMgOiBvZihmblJlcykpLnBpcGUoZmlsdGVyKChyZXM6IGJvb2xlYW4pID0+IHJlcykpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMubnpGaWxlTGlzdCA9IHRoaXMucmVtb3ZlRmlsZUl0ZW0oZmlsZSwgdGhpcy5uekZpbGVMaXN0KTtcclxuICAgICAgdGhpcy5uekNoYW5nZS5lbWl0KHtcclxuICAgICAgICBmaWxlLFxyXG4gICAgICAgIGZpbGVMaXN0OiB0aGlzLm56RmlsZUxpc3QsXHJcbiAgICAgICAgdHlwZTogJ3JlbW92ZWQnXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLm56RmlsZUxpc3RDaGFuZ2UuZW1pdCh0aGlzLm56RmlsZUxpc3QpO1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIC8vICNyZWdpb24gc3R5bGVzXHJcblxyXG4gIHByaXZhdGUgcHJlZml4Q2xzID0gJ2FudC11cGxvYWQnO1xyXG4gIGNsYXNzTGlzdDogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSBzZXRDbGFzc01hcCgpOiB2b2lkIHtcclxuICAgIGxldCBzdWJDbHM6IHN0cmluZ1tdID0gW107XHJcbiAgICBpZiAodGhpcy5uelR5cGUgPT09ICdkcmFnJykge1xyXG4gICAgICBpZiAodGhpcy5uekZpbGVMaXN0LnNvbWUoZmlsZSA9PiBmaWxlLnN0YXR1cyA9PT0gJ3VwbG9hZGluZycpKSB7XHJcbiAgICAgICAgc3ViQ2xzLnB1c2goYCR7dGhpcy5wcmVmaXhDbHN9LWRyYWctdXBsb2FkaW5nYCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuZHJhZ1N0YXRlID09PSAnZHJhZ292ZXInKSB7XHJcbiAgICAgICAgc3ViQ2xzLnB1c2goYCR7dGhpcy5wcmVmaXhDbHN9LWRyYWctaG92ZXJgKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3ViQ2xzID0gW2Ake3RoaXMucHJlZml4Q2xzfS1zZWxlY3QtJHt0aGlzLm56TGlzdFR5cGV9YF07XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jbGFzc0xpc3QgPSBbXHJcbiAgICAgIHRoaXMucHJlZml4Q2xzLFxyXG4gICAgICBgJHt0aGlzLnByZWZpeENsc30tJHt0aGlzLm56VHlwZX1gLFxyXG4gICAgICAuLi5zdWJDbHMsXHJcbiAgICAgICh0aGlzLm56RGlzYWJsZWQgJiYgYCR7dGhpcy5wcmVmaXhDbHN9LWRpc2FibGVkYCkgfHwgJydcclxuICAgIF0uZmlsdGVyKGl0ZW0gPT4gISFpdGVtKTtcclxuXHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pMThuJCA9IHRoaXMuaTE4bi5sb2NhbGVDaGFuZ2Uuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YSgnVXBsb2FkJyk7XHJcbiAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlc0xpc3QoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbUCBpbiBrZXlvZiB0aGlzXT86IFNpbXBsZUNoYW5nZSB9ICYgU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMubnpGaWxlTGlzdCkge1xyXG4gICAgICAodGhpcy5uekZpbGVMaXN0IHx8IFtdKS5mb3JFYWNoKGZpbGUgPT4gKGZpbGUubWVzc2FnZSA9IHRoaXMuZ2VuRXJyKGZpbGUpKSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnppcE9wdGlvbnMoKS5zZXRDbGFzc01hcCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmkxOG4kLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG59XHJcbiIsIjxuZy10ZW1wbGF0ZSAjbGlzdD5cclxuICA8bnotdXBsb2FkLWxpc3RcclxuICAgICNsaXN0Q29tcFxyXG4gICAgW3N0eWxlLmRpc3BsYXldPVwibnpTaG93VXBsb2FkTGlzdCA/ICcnIDogJ25vbmUnXCJcclxuICAgIFtsb2NhbGVdPVwibG9jYWxlXCJcclxuICAgIFtsaXN0VHlwZV09XCJuekxpc3RUeXBlXCJcclxuICAgIFtpdGVtc109XCJuekZpbGVMaXN0IHx8IFtdXCJcclxuICAgIFtpY29uc109XCJuelNob3dVcGxvYWRMaXN0XCJcclxuICAgIFtvblByZXZpZXddPVwibnpQcmV2aWV3XCJcclxuICAgIFtvblJlbW92ZV09XCJvblJlbW92ZVwiXHJcbiAgPjwvbnotdXBsb2FkLWxpc3Q+XHJcbjwvbmctdGVtcGxhdGU+XHJcbjxuZy10ZW1wbGF0ZSAjY29uPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L25nLXRlbXBsYXRlPlxyXG48bmctdGVtcGxhdGUgI2J0bj5cclxuICA8ZGl2IFtuZ0NsYXNzXT1cImNsYXNzTGlzdFwiIFtzdHlsZS5kaXNwbGF5XT1cIm56U2hvd0J1dHRvbiA/ICcnIDogJ25vbmUnXCI+XHJcbiAgICA8ZGl2IG56LXVwbG9hZC1idG4gI3VwbG9hZENvbXAgW29wdGlvbnNdPVwiX2J0bk9wdGlvbnNcIj5cclxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNvblwiPjwvbmctdGVtcGxhdGU+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuPG5nLWNvbnRhaW5lciAqbmdJZj1cIm56VHlwZSA9PT0gJ2RyYWcnOyBlbHNlIHNlbGVjdFwiPlxyXG4gIDxkaXZcclxuICAgIFtuZ0NsYXNzXT1cImNsYXNzTGlzdFwiXHJcbiAgICAoZHJvcCk9XCJmaWxlRHJvcCgkZXZlbnQpXCJcclxuICAgIChkcmFnb3Zlcik9XCJmaWxlRHJvcCgkZXZlbnQpXCJcclxuICAgIChkcmFnbGVhdmUpPVwiZmlsZURyb3AoJGV2ZW50KVwiXHJcbiAgPlxyXG4gICAgPGRpdiBuei11cGxvYWQtYnRuICN1cGxvYWRDb21wIFtvcHRpb25zXT1cIl9idG5PcHRpb25zXCIgW2NsYXNzZXNdPVwieyAnYW50LXVwbG9hZC1idG4nOiB0cnVlIH1cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImFudC11cGxvYWQtZHJhZy1jb250YWluZXJcIj5cclxuICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29uXCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwibGlzdFwiPjwvbmctdGVtcGxhdGU+XHJcbjwvbmctY29udGFpbmVyPlxyXG48bmctdGVtcGxhdGUgI3NlbGVjdD5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwibnpMaXN0VHlwZSA9PT0gJ3BpY3R1cmUtY2FyZCc7IGVsc2UgcGljXCI+XHJcbiAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwibGlzdFwiPjwvbmctdGVtcGxhdGU+XHJcbiAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYnRuXCI+PC9uZy10ZW1wbGF0ZT5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuPG5nLXRlbXBsYXRlICNwaWM+XHJcbiAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImJ0blwiPjwvbmctdGVtcGxhdGU+XHJcbiAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImxpc3RcIj48L25nLXRlbXBsYXRlPlxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=
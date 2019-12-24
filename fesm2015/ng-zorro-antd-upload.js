import { ENTER } from '@angular/cdk/keycodes';
import { HttpRequest, HttpHeaders, HttpEventType, HttpResponse, HttpClient } from '@angular/common/http';
import { ɵɵdirectiveInject, ElementRef, ɵɵdefineComponent, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵallocHostVars, ɵɵlistener, ɵɵattribute, ɵɵProvidersFeature, ɵɵNgOnChangesFeature, ɵɵprojectionDef, ɵɵelementStart, ɵɵelementEnd, ɵɵprojection, ɵɵproperty, ɵsetClassMetadata, Component, ViewEncapsulation, Optional, ViewChild, Input, HostListener, ɵɵtext, ɵɵnextContext, ɵɵadvance, ɵɵtextInterpolate1, ɵɵelementContainerStart, ɵɵtemplate, ɵɵelementContainerEnd, ɵɵreference, ɵɵelement, ɵɵsanitizeUrl, ɵɵgetCurrentView, ɵɵrestoreView, ɵɵtemplateRefExtractor, ɵɵpropertyInterpolate, ɵɵtextInterpolate, ɵɵpureFunction0, ɵɵclassMapInterpolate1, ChangeDetectorRef, ChangeDetectionStrategy, ɵɵstyleProp, EventEmitter, ɵɵclassProp, Output, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { of, Observable, Subscription } from 'rxjs';
import { switchMap, filter } from 'rxjs/operators';
import { warn, NzUpdateHostClassService, toBoolean, InputNumber, InputBoolean } from 'ng-zorro-antd/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Platform, PlatformModule } from '@angular/cdk/platform';
import { NgForOf, NgIf, NgTemplateOutlet, NgStyle, NgClass, CommonModule } from '@angular/common';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import { NzTooltipDirective, NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzProgressComponent, NzProgressModule } from 'ng-zorro-antd/progress';
import { __decorate, __metadata } from 'tslib';
import { NzI18nService, NzI18nModule } from 'ng-zorro-antd/i18n';
import { FormsModule } from '@angular/forms';

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const _c0 = ["file"];
const _c1 = ["nz-upload-btn", ""];
const _c2 = ["*"];
class NzUploadBtnComponent {
    // #endregion
    constructor(http, el, updateHostClassService) {
        this.http = http;
        this.el = el;
        this.updateHostClassService = updateHostClassService;
        this.reqs = {};
        this.inited = false;
        this.destroy = false;
        // #region fields
        this.classes = {};
        // #region styles
        this.prefixCls = 'ant-upload';
        if (!http) {
            throw new Error(`Not found 'HttpClient', You can import 'HttpClientModule' in your root module.`);
        }
    }
    // #endregion
    onClick() {
        if (this.options.disabled || !this.options.openFileDialogOnClick) {
            return;
        }
        this.file.nativeElement.click();
    }
    onKeyDown(e) {
        if (this.options.disabled) {
            return;
        }
        if (e.key === 'Enter' || e.keyCode === ENTER) {
            this.onClick();
        }
    }
    // skip safari bug
    // tslint:disable-next-line:no-any
    onFileDrop(e) {
        if (this.options.disabled || e.type === 'dragover') {
            e.preventDefault();
            return;
        }
        if (this.options.directory) {
            this.traverseFileTree(e.dataTransfer.items);
        }
        else {
            const files = Array.prototype.slice
                .call(e.dataTransfer.files)
                .filter((file) => this.attrAccept(file, this.options.accept));
            if (files.length) {
                this.uploadFiles(files);
            }
        }
        e.preventDefault();
    }
    onChange(e) {
        if (this.options.disabled) {
            return;
        }
        const hie = e.target;
        this.uploadFiles(hie.files);
        hie.value = '';
    }
    traverseFileTree(files) {
        // tslint:disable-next-line:no-any
        const _traverseFileTree = (item, path) => {
            if (item.isFile) {
                item.file((file) => {
                    if (this.attrAccept(file, this.options.accept)) {
                        this.uploadFiles([file]);
                    }
                });
            }
            else if (item.isDirectory) {
                const dirReader = item.createReader();
                // tslint:disable-next-line:no-any
                dirReader.readEntries((entries) => {
                    for (const entrieItem of entries) {
                        _traverseFileTree(entrieItem, `${path}${item.name}/`);
                    }
                });
            }
        };
        // tslint:disable-next-line:no-any
        for (const file of files) {
            _traverseFileTree(file.webkitGetAsEntry(), '');
        }
    }
    attrAccept(file, acceptedFiles) {
        if (file && acceptedFiles) {
            const acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(',');
            const fileName = '' + file.name;
            const mimeType = '' + file.type;
            const baseMimeType = mimeType.replace(/\/.*$/, '');
            return acceptedFilesArray.some(type => {
                const validType = type.trim();
                if (validType.charAt(0) === '.') {
                    return (fileName.toLowerCase().indexOf(validType.toLowerCase(), fileName.toLowerCase().length - validType.toLowerCase().length) !== -1);
                }
                else if (/\/\*$/.test(validType)) {
                    // This is something like a image/* mime type
                    return baseMimeType === validType.replace(/\/.*$/, '');
                }
                return mimeType === validType;
            });
        }
        return true;
    }
    attachUid(file) {
        if (!file.uid) {
            file.uid = Math.random()
                .toString(36)
                .substring(2);
        }
        return file;
    }
    uploadFiles(fileList) {
        let filters$ = of(Array.prototype.slice.call(fileList));
        if (this.options.filters) {
            this.options.filters.forEach(f => {
                filters$ = filters$.pipe(switchMap(list => {
                    const fnRes = f.fn(list);
                    return fnRes instanceof Observable ? fnRes : of(fnRes);
                }));
            });
        }
        filters$.subscribe(list => {
            list.forEach((file) => {
                this.attachUid(file);
                this.upload(file, list);
            });
        }, e => {
            warn(`Unhandled upload filter error`, e);
        });
    }
    upload(file, fileList) {
        if (!this.options.beforeUpload) {
            return this.post(file);
        }
        const before = this.options.beforeUpload(file, fileList);
        if (before instanceof Observable) {
            before.subscribe((processedFile) => {
                const processedFileType = Object.prototype.toString.call(processedFile);
                if (processedFileType === '[object File]' || processedFileType === '[object Blob]') {
                    this.attachUid(processedFile);
                    this.post(processedFile);
                }
                else if (typeof processedFile === 'boolean' && processedFile !== false) {
                    this.post(file);
                }
            }, e => {
                warn(`Unhandled upload beforeUpload error`, e);
            });
        }
        else if (before !== false) {
            return this.post(file);
        }
    }
    post(file) {
        if (this.destroy) {
            return;
        }
        const opt = this.options;
        const { uid } = file;
        let { data, headers } = opt;
        if (typeof data === 'function') {
            data = data(file);
        }
        if (typeof headers === 'function') {
            headers = headers(file);
        }
        const args = {
            action: opt.action,
            name: opt.name,
            headers,
            file,
            data,
            withCredentials: opt.withCredentials,
            onProgress: opt.onProgress
                ? e => {
                    opt.onProgress(e, file);
                }
                : undefined,
            onSuccess: (ret, xhr) => {
                this.clean(uid);
                opt.onSuccess(ret, file, xhr);
            },
            onError: xhr => {
                this.clean(uid);
                opt.onError(xhr, file);
            }
        };
        const req$ = (opt.customRequest || this.xhr).call(this, args);
        if (!(req$ instanceof Subscription)) {
            warn(`Must return Subscription type in '[nzCustomRequest]' property`);
        }
        this.reqs[uid] = req$;
        opt.onStart(file);
    }
    xhr(args) {
        const formData = new FormData();
        // tslint:disable-next-line:no-any
        formData.append(args.name, args.file);
        if (args.data) {
            Object.keys(args.data).map(key => {
                formData.append(key, args.data[key]);
            });
        }
        if (!args.headers) {
            args.headers = {};
        }
        if (args.headers['X-Requested-With'] !== null) {
            args.headers['X-Requested-With'] = `XMLHttpRequest`;
        }
        else {
            delete args.headers['X-Requested-With'];
        }
        const req = new HttpRequest('POST', args.action, formData, {
            reportProgress: true,
            withCredentials: args.withCredentials,
            headers: new HttpHeaders(args.headers)
        });
        return this.http.request(req).subscribe(
        // tslint:disable-next-line no-any
        (event) => {
            if (event.type === HttpEventType.UploadProgress) {
                if (event.total > 0) {
                    // tslint:disable-next-line:no-any
                    event.percent = (event.loaded / event.total) * 100;
                }
                args.onProgress(event, args.file);
            }
            else if (event instanceof HttpResponse) {
                args.onSuccess(event.body, args.file, event);
            }
        }, err => {
            this.abort(args.file);
            args.onError(err, args.file);
        });
    }
    clean(uid) {
        const req$ = this.reqs[uid];
        if (req$ instanceof Subscription) {
            req$.unsubscribe();
        }
        delete this.reqs[uid];
    }
    abort(file) {
        if (file) {
            this.clean(file && file.uid);
        }
        else {
            Object.keys(this.reqs).forEach(uid => this.clean(uid));
        }
    }
    setClassMap() {
        const classMap = Object.assign({ [this.prefixCls]: true, [`${this.prefixCls}-disabled`]: this.options.disabled }, this.classes);
        this.updateHostClassService.updateHostClass(this.el.nativeElement, classMap);
    }
    ngOnInit() {
        this.inited = true;
        this.setClassMap();
    }
    ngOnChanges() {
        if (this.inited) {
            this.setClassMap();
        }
    }
    ngOnDestroy() {
        this.destroy = true;
        this.abort();
    }
}
/** @nocollapse */ NzUploadBtnComponent.ɵfac = function NzUploadBtnComponent_Factory(t) { return new (t || NzUploadBtnComponent)(ɵɵdirectiveInject(HttpClient, 8), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NzUpdateHostClassService)); };
/** @nocollapse */ NzUploadBtnComponent.ɵcmp = ɵɵdefineComponent({ type: NzUploadBtnComponent, selectors: [["", "nz-upload-btn", ""]], viewQuery: function NzUploadBtnComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.file = _t.first);
    } }, hostBindings: function NzUploadBtnComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        ɵɵallocHostVars(2);
        ɵɵlistener("click", function NzUploadBtnComponent_click_HostBindingHandler($event) { return ctx.onClick(); })("keydown", function NzUploadBtnComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); })("drop", function NzUploadBtnComponent_drop_HostBindingHandler($event) { return ctx.onFileDrop($event); })("dragover", function NzUploadBtnComponent_dragover_HostBindingHandler($event) { return ctx.onFileDrop($event); });
    } if (rf & 2) {
        ɵɵattribute("tabindex", "0")("role", "button");
    } }, inputs: { classes: "classes", options: "options" }, exportAs: ["nzUploadBtn"], features: [ɵɵProvidersFeature([NzUpdateHostClassService]), ɵɵNgOnChangesFeature()], attrs: _c1, ngContentSelectors: _c2, decls: 3, vars: 4, consts: [["type", "file", 2, "display", "none", 3, "multiple", "change"], ["file", ""]], template: function NzUploadBtnComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "input", 0, 1);
        ɵɵlistener("change", function NzUploadBtnComponent_Template_input_change_0_listener($event) { return ctx.onChange($event); });
        ɵɵelementEnd();
        ɵɵprojection(2);
    } if (rf & 2) {
        ɵɵproperty("multiple", ctx.options.multiple);
        ɵɵattribute("accept", ctx.options.accept)("directory", ctx.options.directory ? "directory" : null)("webkitdirectory", ctx.options.directory ? "webkitdirectory" : null);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzUploadBtnComponent, [{
        type: Component,
        args: [{
                selector: '[nz-upload-btn]',
                exportAs: 'nzUploadBtn',
                templateUrl: './nz-upload-btn.component.html',
                host: {
                    '[attr.tabindex]': '"0"',
                    '[attr.role]': '"button"'
                },
                providers: [NzUpdateHostClassService],
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: HttpClient, decorators: [{
                type: Optional
            }] }, { type: ElementRef }, { type: NzUpdateHostClassService }]; }, { file: [{
            type: ViewChild,
            args: ['file', { static: false }]
        }], classes: [{
            type: Input
        }], options: [{
            type: Input
        }], onClick: [{
            type: HostListener,
            args: ['click']
        }], onKeyDown: [{
            type: HostListener,
            args: ['keydown', ['$event']]
        }], onFileDrop: [{
            type: HostListener,
            args: ['drop', ['$event']]
        }, {
            type: HostListener,
            args: ['dragover', ['$event']]
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function NzUploadListComponent_div_0_ng_template_1_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 14);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1794 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r1794.locale.uploading, " ");
} }
function NzUploadListComponent_div_0_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzUploadListComponent_div_0_ng_template_1_ng_container_0_div_1_Template, 2, 1, "div", 13);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵɵnextContext();
    const _r1786 = ɵɵreference(2);
    const file_r1774 = ɵɵnextContext().$implicit;
    const ctx_r1785 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1785.listType === "picture-card" && file_r1774.status === "uploading")("ngIfElse", _r1786);
} }
function NzUploadListComponent_div_0_ng_template_1_ng_template_1_i_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 16);
} }
function NzUploadListComponent_div_0_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, NzUploadListComponent_div_0_ng_template_1_ng_template_1_i_0_Template, 1, 0, "i", 15);
} if (rf & 2) {
    ɵɵnextContext();
    const _r1788 = ɵɵreference(4);
    const file_r1774 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngIf", !file_r1774.thumbUrl && !file_r1774.url)("ngIfElse", _r1788);
} }
function NzUploadListComponent_div_0_ng_template_1_ng_template_3_img_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "img", 19);
} if (rf & 2) {
    const file_r1774 = ɵɵnextContext(3).$implicit;
    ɵɵproperty("src", file_r1774.thumbUrl || file_r1774.url, ɵɵsanitizeUrl);
    ɵɵattribute("alt", file_r1774.name);
} }
function NzUploadListComponent_div_0_ng_template_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r1802 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 17);
    ɵɵlistener("click", function NzUploadListComponent_div_0_ng_template_1_ng_template_3_Template_a_click_0_listener($event) { ɵɵrestoreView(_r1802); const file_r1774 = ɵɵnextContext(2).$implicit; const ctx_r1800 = ɵɵnextContext(); return ctx_r1800.handlePreview(file_r1774, $event); });
    ɵɵtemplate(1, NzUploadListComponent_div_0_ng_template_1_ng_template_3_img_1_Template, 1, 2, "img", 18);
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵnextContext();
    const _r1790 = ɵɵreference(6);
    const file_r1774 = ɵɵnextContext().$implicit;
    const ctx_r1789 = ɵɵnextContext();
    ɵɵproperty("href", file_r1774.thumbUrl || file_r1774.url, ɵɵsanitizeUrl);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1789.isImageUrl(file_r1774))("ngIfElse", _r1790);
} }
function NzUploadListComponent_div_0_ng_template_1_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 20);
} }
function NzUploadListComponent_div_0_ng_template_1_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 21);
} if (rf & 2) {
    const file_r1774 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("nzType", file_r1774.status === "uploading" ? "loading" : "paper-clip");
} }
function NzUploadListComponent_div_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, NzUploadListComponent_div_0_ng_template_1_ng_container_0_Template, 2, 2, "ng-container", 6);
    ɵɵtemplate(1, NzUploadListComponent_div_0_ng_template_1_ng_template_1_Template, 1, 2, "ng-template", null, 9, ɵɵtemplateRefExtractor);
    ɵɵtemplate(3, NzUploadListComponent_div_0_ng_template_1_ng_template_3_Template, 2, 3, "ng-template", null, 10, ɵɵtemplateRefExtractor);
    ɵɵtemplate(5, NzUploadListComponent_div_0_ng_template_1_ng_template_5_Template, 1, 0, "ng-template", null, 11, ɵɵtemplateRefExtractor);
    ɵɵtemplate(7, NzUploadListComponent_div_0_ng_template_1_ng_template_7_Template, 1, 1, "ng-template", null, 12, ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const _r1792 = ɵɵreference(8);
    const ctx_r1776 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", ctx_r1776.showPic)("ngIfElse", _r1792);
} }
function NzUploadListComponent_div_0_ng_template_3_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r1810 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "a", 23);
    ɵɵlistener("click", function NzUploadListComponent_div_0_ng_template_3_ng_container_0_Template_a_click_1_listener($event) { ɵɵrestoreView(_r1810); const file_r1774 = ɵɵnextContext(2).$implicit; const ctx_r1808 = ɵɵnextContext(); return ctx_r1808.handlePreview(file_r1774, $event); });
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const file_r1774 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("title", file_r1774.name);
    ɵɵproperty("href", file_r1774.thumbUrl || file_r1774.url, ɵɵsanitizeUrl);
    ɵɵattribute("download", file_r1774.linkProps && file_r1774.linkProps.download);
    ɵɵadvance(1);
    ɵɵtextInterpolate(file_r1774.name);
} }
function NzUploadListComponent_div_0_ng_template_3_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r1814 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 24);
    ɵɵlistener("click", function NzUploadListComponent_div_0_ng_template_3_ng_template_1_Template_span_click_0_listener($event) { ɵɵrestoreView(_r1814); const file_r1774 = ɵɵnextContext(2).$implicit; const ctx_r1812 = ɵɵnextContext(); return ctx_r1812.handlePreview(file_r1774, $event); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const file_r1774 = ɵɵnextContext(2).$implicit;
    ɵɵpropertyInterpolate("title", file_r1774.name);
    ɵɵadvance(1);
    ɵɵtextInterpolate(file_r1774.name);
} }
function NzUploadListComponent_div_0_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, NzUploadListComponent_div_0_ng_template_3_ng_container_0_Template, 3, 4, "ng-container", 6);
    ɵɵtemplate(1, NzUploadListComponent_div_0_ng_template_3_ng_template_1_Template, 2, 2, "ng-template", null, 22, ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const _r1806 = ɵɵreference(2);
    const file_r1774 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngIf", file_r1774.url)("ngIfElse", _r1806);
} }
function NzUploadListComponent_div_0_span_6_ng_template_1_Template(rf, ctx) { }
function NzUploadListComponent_div_0_span_6_ng_template_2_Template(rf, ctx) { }
function NzUploadListComponent_div_0_span_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 25);
    ɵɵtemplate(1, NzUploadListComponent_div_0_span_6_ng_template_1_Template, 0, 0, "ng-template", 26);
    ɵɵtemplate(2, NzUploadListComponent_div_0_span_6_ng_template_2_Template, 0, 0, "ng-template", 26);
    ɵɵelementEnd();
} if (rf & 2) {
    const file_r1774 = ɵɵnextContext().$implicit;
    const _r1775 = ɵɵreference(2);
    const _r1777 = ɵɵreference(4);
    ɵɵproperty("nzTitle", file_r1774.message);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r1775);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r1777);
} }
function NzUploadListComponent_div_0_span_7_ng_template_1_Template(rf, ctx) { }
function NzUploadListComponent_div_0_span_7_ng_template_2_Template(rf, ctx) { }
function NzUploadListComponent_div_0_span_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtemplate(1, NzUploadListComponent_div_0_span_7_ng_template_1_Template, 0, 0, "ng-template", 26);
    ɵɵtemplate(2, NzUploadListComponent_div_0_span_7_ng_template_2_Template, 0, 0, "ng-template", 26);
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵnextContext();
    const _r1775 = ɵɵreference(2);
    const _r1777 = ɵɵreference(4);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r1775);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r1777);
} }
const _c0$1 = function () { return { opacity: 0.5, "pointer-events": "none" }; };
function NzUploadListComponent_div_0_ng_container_8_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r1826 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 30);
    ɵɵlistener("click", function NzUploadListComponent_div_0_ng_container_8_a_2_Template_a_click_0_listener($event) { ɵɵrestoreView(_r1826); const file_r1774 = ɵɵnextContext(2).$implicit; const ctx_r1824 = ɵɵnextContext(); return ctx_r1824.handlePreview(file_r1774, $event); });
    ɵɵelement(1, "i", 31);
    ɵɵelementEnd();
} if (rf & 2) {
    const file_r1774 = ɵɵnextContext(2).$implicit;
    const ctx_r1822 = ɵɵnextContext();
    ɵɵpropertyInterpolate("title", ctx_r1822.locale.previewFile);
    ɵɵproperty("href", file_r1774.thumbUrl || file_r1774.url, ɵɵsanitizeUrl)("ngStyle", !(file_r1774.url || file_r1774.thumbUrl) && ɵɵpureFunction0(3, _c0$1));
} }
function NzUploadListComponent_div_0_ng_container_8_i_3_Template(rf, ctx) { if (rf & 1) {
    const _r1830 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "i", 32);
    ɵɵlistener("click", function NzUploadListComponent_div_0_ng_container_8_i_3_Template_i_click_0_listener($event) { ɵɵrestoreView(_r1830); const file_r1774 = ɵɵnextContext(2).$implicit; const ctx_r1828 = ɵɵnextContext(); return ctx_r1828.handleRemove(file_r1774, $event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1823 = ɵɵnextContext(3);
    ɵɵpropertyInterpolate("title", ctx_r1823.locale.removeFile);
} }
function NzUploadListComponent_div_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 27);
    ɵɵtemplate(2, NzUploadListComponent_div_0_ng_container_8_a_2_Template, 2, 4, "a", 28);
    ɵɵtemplate(3, NzUploadListComponent_div_0_ng_container_8_i_3_Template, 1, 1, "i", 29);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const file_r1774 = ɵɵnextContext().$implicit;
    const ctx_r1781 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1781.showPreview(file_r1774));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1781.icons.showRemoveIcon);
} }
function NzUploadListComponent_div_0_ng_template_9_i_0_Template(rf, ctx) { if (rf & 1) {
    const _r1835 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "i", 34);
    ɵɵlistener("click", function NzUploadListComponent_div_0_ng_template_9_i_0_Template_i_click_0_listener($event) { ɵɵrestoreView(_r1835); const file_r1774 = ɵɵnextContext(2).$implicit; const ctx_r1833 = ɵɵnextContext(); return ctx_r1833.handleRemove(file_r1774, $event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1832 = ɵɵnextContext(3);
    ɵɵpropertyInterpolate("title", ctx_r1832.locale.removeFile);
} }
function NzUploadListComponent_div_0_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, NzUploadListComponent_div_0_ng_template_9_i_0_Template, 1, 1, "i", 33);
} if (rf & 2) {
    const ctx_r1783 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", ctx_r1783.icons.showRemoveIcon);
} }
function NzUploadListComponent_div_0_div_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 35);
    ɵɵelement(1, "nz-progress", 36);
    ɵɵelementEnd();
} if (rf & 2) {
    const file_r1774 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("nzPercent", file_r1774.percent)("nzShowInfo", false)("nzStrokeWidth", 2);
} }
function NzUploadListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, NzUploadListComponent_div_0_ng_template_1_Template, 9, 2, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵtemplate(3, NzUploadListComponent_div_0_ng_template_3_Template, 3, 2, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    ɵɵelementStart(5, "div", 3);
    ɵɵtemplate(6, NzUploadListComponent_div_0_span_6_Template, 3, 3, "span", 4);
    ɵɵtemplate(7, NzUploadListComponent_div_0_span_7_Template, 3, 2, "span", 5);
    ɵɵelementEnd();
    ɵɵtemplate(8, NzUploadListComponent_div_0_ng_container_8_Template, 4, 2, "ng-container", 6);
    ɵɵtemplate(9, NzUploadListComponent_div_0_ng_template_9_Template, 1, 1, "ng-template", null, 7, ɵɵtemplateRefExtractor);
    ɵɵtemplate(11, NzUploadListComponent_div_0_div_11_Template, 2, 3, "div", 8);
    ɵɵelementEnd();
} if (rf & 2) {
    const file_r1774 = ctx.$implicit;
    const _r1782 = ɵɵreference(10);
    const ctx_r1773 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("ant-upload-list-item ant-upload-list-item-", file_r1774.status, "");
    ɵɵproperty("@itemState", undefined);
    ɵɵadvance(6);
    ɵɵproperty("ngIf", file_r1774.status === "error");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", file_r1774.status !== "error");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1773.listType === "picture-card" && file_r1774.status !== "uploading")("ngIfElse", _r1782);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", file_r1774.status === "uploading");
} }
class NzUploadListComponent {
    // #endregion
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
    get showPic() {
        return this.listType === 'picture' || this.listType === 'picture-card';
    }
    set items(list) {
        list.forEach(file => {
            file.linkProps = typeof file.linkProps === 'string' ? JSON.parse(file.linkProps) : file.linkProps;
        });
        this._items = list;
    }
    get items() {
        return this._items;
    }
    setClassMap() {
        const classMap = {
            [this.prefixCls]: true,
            [`${this.prefixCls}-${this.listType}`]: true
        };
        this.updateHostClassService.updateHostClass(this.el.nativeElement, classMap);
    }
    // #endregion
    // #region render
    extname(url) {
        const temp = url.split('/');
        const filename = temp[temp.length - 1];
        const filenameWithoutSuffix = filename.split(/#|\?/)[0];
        return (/\.[^./\\]*$/.exec(filenameWithoutSuffix) || [''])[0];
    }
    isImageUrl(file) {
        if (~this.imageTypes.indexOf(file.type)) {
            return true;
        }
        const url = (file.thumbUrl || file.url || '');
        if (!url) {
            return false;
        }
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
    previewFile(file, callback) {
        if (file.type && this.imageTypes.indexOf(file.type) === -1) {
            callback('');
        }
        const reader = new FileReader();
        // https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
        reader.onloadend = () => callback(reader.result);
        reader.readAsDataURL(file);
    }
    genThumb() {
        if (!this.platform.isBrowser) {
            return;
        }
        // tslint:disable-next-line:no-any
        const win = window;
        if (!this.showPic || typeof document === 'undefined' || typeof win === 'undefined' || !win.FileReader || !win.File) {
            return;
        }
        this.items
            .filter(file => file.originFileObj instanceof File && file.thumbUrl === undefined)
            .forEach(file => {
            file.thumbUrl = '';
            this.previewFile(file.originFileObj, (previewDataUrl) => {
                file.thumbUrl = previewDataUrl;
                this.detectChanges();
            });
        });
    }
    showPreview(file) {
        const { showPreviewIcon, hidePreviewIconInNonImage } = this.icons;
        if (!showPreviewIcon) {
            return false;
        }
        return this.isImageUrl(file) ? true : !hidePreviewIconInNonImage;
    }
    handlePreview(file, e) {
        if (!this.onPreview) {
            return;
        }
        e.preventDefault();
        return this.onPreview(file);
    }
    handleRemove(file, e) {
        e.preventDefault();
        if (this.onRemove) {
            this.onRemove(file);
        }
        return;
    }
    detectChanges() {
        this.cdr.detectChanges();
    }
    ngOnChanges() {
        this.setClassMap();
        this.genThumb();
    }
}
/** @nocollapse */ NzUploadListComponent.ɵfac = function NzUploadListComponent_Factory(t) { return new (t || NzUploadListComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzUpdateHostClassService), ɵɵdirectiveInject(Platform)); };
/** @nocollapse */ NzUploadListComponent.ɵcmp = ɵɵdefineComponent({ type: NzUploadListComponent, selectors: [["nz-upload-list"]], inputs: { locale: "locale", listType: "listType", items: "items", icons: "icons", onPreview: "onPreview", onRemove: "onRemove" }, exportAs: ["nzUploadList"], features: [ɵɵProvidersFeature([NzUpdateHostClassService]), ɵɵNgOnChangesFeature()], decls: 1, vars: 1, consts: [[3, "class", 4, "ngFor", "ngForOf"], ["icon", ""], ["preview", ""], [1, "ant-upload-list-item-info"], ["nz-tooltip", "", 3, "nzTitle", 4, "ngIf"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], ["close", ""], ["class", "ant-upload-list-item-progress", 4, "ngIf"], ["thumbUrlCheck", ""], ["thumbTpl", ""], ["noThumbTpl", ""], ["noPicTpl", ""], ["class", "ant-upload-list-item-uploading-text", 4, "ngIf", "ngIfElse"], [1, "ant-upload-list-item-uploading-text"], ["class", "ant-upload-list-item-thumbnail", "nz-icon", "", "nzType", "picture", "nzTheme", "twotone", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "picture", "nzTheme", "twotone", 1, "ant-upload-list-item-thumbnail"], ["target", "_blank", "rel", "noopener noreferrer", 1, "ant-upload-list-item-thumbnail", 3, "href", "click"], [3, "src", 4, "ngIf", "ngIfElse"], [3, "src"], ["nz-icon", "", "nzType", "file", "nzTheme", "twotone", 1, "ant-upload-list-item-icon"], ["nz-icon", "", 3, "nzType"], ["prevText", ""], ["target", "_blank", "rel", "noopener noreferrer", 1, "ant-upload-list-item-name", 3, "href", "title", "click"], [1, "ant-upload-list-item-name", 3, "title", "click"], ["nz-tooltip", "", 3, "nzTitle"], [3, "ngTemplateOutlet"], [1, "ant-upload-list-item-actions"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href", "title", "ngStyle", "click", 4, "ngIf"], ["nz-icon", "", "nzType", "delete", 3, "title", "click", 4, "ngIf"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href", "title", "ngStyle", "click"], ["nz-icon", "", "nzType", "eye-o"], ["nz-icon", "", "nzType", "delete", 3, "title", "click"], ["nz-icon", "", "nzType", "close", 3, "title", "click", 4, "ngIf"], ["nz-icon", "", "nzType", "close", 3, "title", "click"], [1, "ant-upload-list-item-progress"], [3, "nzPercent", "nzShowInfo", "nzStrokeWidth"]], template: function NzUploadListComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, NzUploadListComponent_div_0_Template, 12, 9, "div", 0);
    } if (rf & 2) {
        ɵɵproperty("ngForOf", ctx.items);
    } }, directives: [NgForOf, NgIf, NzIconDirective, NzTooltipDirective, NgTemplateOutlet, NgStyle, NzProgressComponent], encapsulation: 2, data: { animation: [
            trigger('itemState', [
                transition(':enter', [style({ height: '0', width: '0', opacity: 0 }), animate(150, style({ height: '*', width: '*', opacity: 1 }))]),
                transition(':leave', [animate(150, style({ height: '0', width: '0', opacity: 0 }))])
            ])
        ] }, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzUploadListComponent, [{
        type: Component,
        args: [{
                selector: 'nz-upload-list',
                exportAs: 'nzUploadList',
                templateUrl: './nz-upload-list.component.html',
                providers: [NzUpdateHostClassService],
                animations: [
                    trigger('itemState', [
                        transition(':enter', [style({ height: '0', width: '0', opacity: 0 }), animate(150, style({ height: '*', width: '*', opacity: 1 }))]),
                        transition(':leave', [animate(150, style({ height: '0', width: '0', opacity: 0 }))])
                    ])
                ],
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ElementRef }, { type: ChangeDetectorRef }, { type: NzUpdateHostClassService }, { type: Platform }]; }, { locale: [{
            type: Input
        }], listType: [{
            type: Input
        }], items: [{
            type: Input
        }], icons: [{
            type: Input
        }], onPreview: [{
            type: Input
        }], onRemove: [{
            type: Input
        }] }); })();

const _c0$2 = ["uploadComp"];
const _c1$1 = ["listComp"];
const _c2$1 = function () { return []; };
function NzUploadComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "nz-upload-list", 6, 7);
} if (rf & 2) {
    const ctx_r1838 = ɵɵnextContext();
    ɵɵstyleProp("display", ctx_r1838.nzShowUploadList ? "" : "none");
    ɵɵproperty("locale", ctx_r1838.locale)("listType", ctx_r1838.nzListType)("items", ctx_r1838.nzFileList || ɵɵpureFunction0(7, _c2$1))("icons", ctx_r1838.nzShowUploadList)("onPreview", ctx_r1838.nzPreview)("onRemove", ctx_r1838.onRemove);
} }
function NzUploadComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵprojection(0);
} }
function NzUploadComponent_ng_template_4_ng_template_3_Template(rf, ctx) { }
function NzUploadComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵelementStart(1, "div", 9, 10);
    ɵɵtemplate(3, NzUploadComponent_ng_template_4_ng_template_3_Template, 0, 0, "ng-template", 11);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1842 = ɵɵnextContext();
    const _r1839 = ɵɵreference(3);
    ɵɵstyleProp("display", ctx_r1842.nzShowButton ? "" : "none");
    ɵɵproperty("ngClass", ctx_r1842.classList);
    ɵɵadvance(1);
    ɵɵproperty("options", ctx_r1842._btnOptions);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", _r1839);
} }
function NzUploadComponent_ng_container_6_ng_template_5_Template(rf, ctx) { }
function NzUploadComponent_ng_container_6_ng_template_6_Template(rf, ctx) { }
const _c3 = function () { return { "ant-upload-btn": true }; };
function NzUploadComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r1855 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 12);
    ɵɵlistener("drop", function NzUploadComponent_ng_container_6_Template_div_drop_1_listener($event) { ɵɵrestoreView(_r1855); const ctx_r1854 = ɵɵnextContext(); return ctx_r1854.fileDrop($event); })("dragover", function NzUploadComponent_ng_container_6_Template_div_dragover_1_listener($event) { ɵɵrestoreView(_r1855); const ctx_r1856 = ɵɵnextContext(); return ctx_r1856.fileDrop($event); })("dragleave", function NzUploadComponent_ng_container_6_Template_div_dragleave_1_listener($event) { ɵɵrestoreView(_r1855); const ctx_r1857 = ɵɵnextContext(); return ctx_r1857.fileDrop($event); });
    ɵɵelementStart(2, "div", 13, 10);
    ɵɵelementStart(4, "div", 14);
    ɵɵtemplate(5, NzUploadComponent_ng_container_6_ng_template_5_Template, 0, 0, "ng-template", 11);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(6, NzUploadComponent_ng_container_6_ng_template_6_Template, 0, 0, "ng-template", 11);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1843 = ɵɵnextContext();
    const _r1839 = ɵɵreference(3);
    const _r1837 = ɵɵreference(1);
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ctx_r1843.classList);
    ɵɵadvance(1);
    ɵɵproperty("options", ctx_r1843._btnOptions)("classes", ɵɵpureFunction0(5, _c3));
    ɵɵadvance(3);
    ɵɵproperty("ngTemplateOutlet", _r1839);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r1837);
} }
function NzUploadComponent_ng_template_7_ng_container_0_ng_template_1_Template(rf, ctx) { }
function NzUploadComponent_ng_template_7_ng_container_0_ng_template_2_Template(rf, ctx) { }
function NzUploadComponent_ng_template_7_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzUploadComponent_ng_template_7_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 11);
    ɵɵtemplate(2, NzUploadComponent_ng_template_7_ng_container_0_ng_template_2_Template, 0, 0, "ng-template", 11);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵɵnextContext(2);
    const _r1837 = ɵɵreference(1);
    const _r1841 = ɵɵreference(5);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r1837);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r1841);
} }
function NzUploadComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, NzUploadComponent_ng_template_7_ng_container_0_Template, 3, 2, "ng-container", 3);
} if (rf & 2) {
    const ctx_r1845 = ɵɵnextContext();
    const _r1846 = ɵɵreference(10);
    ɵɵproperty("ngIf", ctx_r1845.nzListType === "picture-card")("ngIfElse", _r1846);
} }
function NzUploadComponent_ng_template_9_ng_template_0_Template(rf, ctx) { }
function NzUploadComponent_ng_template_9_ng_template_1_Template(rf, ctx) { }
function NzUploadComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, NzUploadComponent_ng_template_9_ng_template_0_Template, 0, 0, "ng-template", 11);
    ɵɵtemplate(1, NzUploadComponent_ng_template_9_ng_template_1_Template, 0, 0, "ng-template", 11);
} if (rf & 2) {
    ɵɵnextContext();
    const _r1841 = ɵɵreference(5);
    const _r1837 = ɵɵreference(1);
    ɵɵproperty("ngTemplateOutlet", _r1841);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r1837);
} }
const _c4 = ["*"];
class NzUploadComponent {
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
/** @nocollapse */ NzUploadComponent.ɵfac = function NzUploadComponent_Factory(t) { return new (t || NzUploadComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzI18nService)); };
/** @nocollapse */ NzUploadComponent.ɵcmp = ɵɵdefineComponent({ type: NzUploadComponent, selectors: [["nz-upload"]], viewQuery: function NzUploadComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$2, true);
        ɵɵviewQuery(_c1$1, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.uploadComp = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listComp = _t.first);
    } }, hostBindings: function NzUploadComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        ɵɵallocHostVars(1);
    } if (rf & 2) {
        ɵɵclassProp("ant-upload-picture-card-wrapper", ctx.nzListType === "picture-card");
    } }, inputs: { nzType: "nzType", nzLimit: "nzLimit", nzSize: "nzSize", nzFileType: "nzFileType", nzAccept: "nzAccept", nzAction: "nzAction", nzDirectory: "nzDirectory", nzOpenFileDialogOnClick: "nzOpenFileDialogOnClick", nzBeforeUpload: "nzBeforeUpload", nzCustomRequest: "nzCustomRequest", nzData: "nzData", nzFilter: "nzFilter", nzFileList: "nzFileList", nzDisabled: "nzDisabled", nzHeaders: "nzHeaders", nzListType: "nzListType", nzMultiple: "nzMultiple", nzName: "nzName", nzShowUploadList: "nzShowUploadList", nzShowButton: "nzShowButton", nzWithCredentials: "nzWithCredentials", nzRemove: "nzRemove", nzPreview: "nzPreview" }, outputs: { nzChange: "nzChange", nzFileListChange: "nzFileListChange" }, exportAs: ["nzUpload"], features: [ɵɵNgOnChangesFeature()], ngContentSelectors: _c4, decls: 11, vars: 2, consts: [["list", ""], ["con", ""], ["btn", ""], [4, "ngIf", "ngIfElse"], ["select", ""], ["pic", ""], [3, "locale", "listType", "items", "icons", "onPreview", "onRemove"], ["listComp", ""], [3, "ngClass"], ["nz-upload-btn", "", 3, "options"], ["uploadComp", ""], [3, "ngTemplateOutlet"], [3, "ngClass", "drop", "dragover", "dragleave"], ["nz-upload-btn", "", 3, "options", "classes"], [1, "ant-upload-drag-container"]], template: function NzUploadComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵtemplate(0, NzUploadComponent_ng_template_0_Template, 2, 8, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        ɵɵtemplate(2, NzUploadComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        ɵɵtemplate(4, NzUploadComponent_ng_template_4_Template, 4, 4, "ng-template", null, 2, ɵɵtemplateRefExtractor);
        ɵɵtemplate(6, NzUploadComponent_ng_container_6_Template, 7, 6, "ng-container", 3);
        ɵɵtemplate(7, NzUploadComponent_ng_template_7_Template, 1, 2, "ng-template", null, 4, ɵɵtemplateRefExtractor);
        ɵɵtemplate(9, NzUploadComponent_ng_template_9_Template, 2, 2, "ng-template", null, 5, ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1844 = ɵɵreference(8);
        ɵɵadvance(6);
        ɵɵproperty("ngIf", ctx.nzType === "drag")("ngIfElse", _r1844);
    } }, directives: [NgIf, NzUploadListComponent, NgClass, NzUploadBtnComponent, NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
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
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzUploadComponent, [{
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
    }], function () { return [{ type: ChangeDetectorRef }, { type: NzI18nService }]; }, { uploadComp: [{
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

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzUploadModule {
}
/** @nocollapse */ NzUploadModule.ɵmod = ɵɵdefineNgModule({ type: NzUploadModule });
/** @nocollapse */ NzUploadModule.ɵinj = ɵɵdefineInjector({ factory: function NzUploadModule_Factory(t) { return new (t || NzUploadModule)(); }, imports: [[CommonModule, FormsModule, PlatformModule, NzToolTipModule, NzProgressModule, NzI18nModule, NzIconModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzUploadModule, { declarations: [NzUploadComponent, NzUploadBtnComponent, NzUploadListComponent], imports: [CommonModule, FormsModule, PlatformModule, NzToolTipModule, NzProgressModule, NzI18nModule, NzIconModule], exports: [NzUploadComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzUploadModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule, PlatformModule, NzToolTipModule, NzProgressModule, NzI18nModule, NzIconModule],
                declarations: [NzUploadComponent, NzUploadBtnComponent, NzUploadListComponent],
                exports: [NzUploadComponent]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NzUploadBtnComponent, NzUploadComponent, NzUploadListComponent, NzUploadModule };
//# sourceMappingURL=ng-zorro-antd-upload.js.map

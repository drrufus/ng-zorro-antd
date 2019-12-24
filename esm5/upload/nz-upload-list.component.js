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
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
import * as i2 from "@angular/cdk/platform";
import * as i3 from "@angular/common";
import * as i4 from "ng-zorro-antd/icon";
import * as i5 from "ng-zorro-antd/tooltip";
import * as i6 from "ng-zorro-antd/progress";
function NzUploadListComponent_div_0_ng_template_1_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1885 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1885.locale.uploading, " ");
} }
function NzUploadListComponent_div_0_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzUploadListComponent_div_0_ng_template_1_ng_container_0_div_1_Template, 2, 1, "div", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    var _r1877 = i0.ɵɵreference(2);
    var file_r1865 = i0.ɵɵnextContext().$implicit;
    var ctx_r1876 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1876.listType === "picture-card" && file_r1865.status === "uploading")("ngIfElse", _r1877);
} }
function NzUploadListComponent_div_0_ng_template_1_ng_template_1_i_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 16);
} }
function NzUploadListComponent_div_0_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NzUploadListComponent_div_0_ng_template_1_ng_template_1_i_0_Template, 1, 0, "i", 15);
} if (rf & 2) {
    i0.ɵɵnextContext();
    var _r1879 = i0.ɵɵreference(4);
    var file_r1865 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngIf", !file_r1865.thumbUrl && !file_r1865.url)("ngIfElse", _r1879);
} }
function NzUploadListComponent_div_0_ng_template_1_ng_template_3_img_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 19);
} if (rf & 2) {
    var file_r1865 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("src", file_r1865.thumbUrl || file_r1865.url, i0.ɵɵsanitizeUrl);
    i0.ɵɵattribute("alt", file_r1865.name);
} }
function NzUploadListComponent_div_0_ng_template_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    var _r1893 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 17);
    i0.ɵɵlistener("click", function NzUploadListComponent_div_0_ng_template_1_ng_template_3_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r1893); var file_r1865 = i0.ɵɵnextContext(2).$implicit; var ctx_r1891 = i0.ɵɵnextContext(); return ctx_r1891.handlePreview(file_r1865, $event); });
    i0.ɵɵtemplate(1, NzUploadListComponent_div_0_ng_template_1_ng_template_3_img_1_Template, 1, 2, "img", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    var _r1881 = i0.ɵɵreference(6);
    var file_r1865 = i0.ɵɵnextContext().$implicit;
    var ctx_r1880 = i0.ɵɵnextContext();
    i0.ɵɵproperty("href", file_r1865.thumbUrl || file_r1865.url, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1880.isImageUrl(file_r1865))("ngIfElse", _r1881);
} }
function NzUploadListComponent_div_0_ng_template_1_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 20);
} }
function NzUploadListComponent_div_0_ng_template_1_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 21);
} if (rf & 2) {
    var file_r1865 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("nzType", file_r1865.status === "uploading" ? "loading" : "paper-clip");
} }
function NzUploadListComponent_div_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NzUploadListComponent_div_0_ng_template_1_ng_container_0_Template, 2, 2, "ng-container", 6);
    i0.ɵɵtemplate(1, NzUploadListComponent_div_0_ng_template_1_ng_template_1_Template, 1, 2, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(3, NzUploadListComponent_div_0_ng_template_1_ng_template_3_Template, 2, 3, "ng-template", null, 10, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(5, NzUploadListComponent_div_0_ng_template_1_ng_template_5_Template, 1, 0, "ng-template", null, 11, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(7, NzUploadListComponent_div_0_ng_template_1_ng_template_7_Template, 1, 1, "ng-template", null, 12, i0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    var _r1883 = i0.ɵɵreference(8);
    var ctx_r1867 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r1867.showPic)("ngIfElse", _r1883);
} }
function NzUploadListComponent_div_0_ng_template_3_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    var _r1901 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 23);
    i0.ɵɵlistener("click", function NzUploadListComponent_div_0_ng_template_3_ng_container_0_Template_a_click_1_listener($event) { i0.ɵɵrestoreView(_r1901); var file_r1865 = i0.ɵɵnextContext(2).$implicit; var ctx_r1899 = i0.ɵɵnextContext(); return ctx_r1899.handlePreview(file_r1865, $event); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var file_r1865 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("title", file_r1865.name);
    i0.ɵɵproperty("href", file_r1865.thumbUrl || file_r1865.url, i0.ɵɵsanitizeUrl);
    i0.ɵɵattribute("download", file_r1865.linkProps && file_r1865.linkProps.download);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(file_r1865.name);
} }
function NzUploadListComponent_div_0_ng_template_3_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    var _r1905 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 24);
    i0.ɵɵlistener("click", function NzUploadListComponent_div_0_ng_template_3_ng_template_1_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r1905); var file_r1865 = i0.ɵɵnextContext(2).$implicit; var ctx_r1903 = i0.ɵɵnextContext(); return ctx_r1903.handlePreview(file_r1865, $event); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var file_r1865 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵpropertyInterpolate("title", file_r1865.name);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(file_r1865.name);
} }
function NzUploadListComponent_div_0_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NzUploadListComponent_div_0_ng_template_3_ng_container_0_Template, 3, 4, "ng-container", 6);
    i0.ɵɵtemplate(1, NzUploadListComponent_div_0_ng_template_3_ng_template_1_Template, 2, 2, "ng-template", null, 22, i0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    var _r1897 = i0.ɵɵreference(2);
    var file_r1865 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngIf", file_r1865.url)("ngIfElse", _r1897);
} }
function NzUploadListComponent_div_0_span_6_ng_template_1_Template(rf, ctx) { }
function NzUploadListComponent_div_0_span_6_ng_template_2_Template(rf, ctx) { }
function NzUploadListComponent_div_0_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 25);
    i0.ɵɵtemplate(1, NzUploadListComponent_div_0_span_6_ng_template_1_Template, 0, 0, "ng-template", 26);
    i0.ɵɵtemplate(2, NzUploadListComponent_div_0_span_6_ng_template_2_Template, 0, 0, "ng-template", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var file_r1865 = i0.ɵɵnextContext().$implicit;
    var _r1866 = i0.ɵɵreference(2);
    var _r1868 = i0.ɵɵreference(4);
    i0.ɵɵproperty("nzTitle", file_r1865.message);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r1866);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r1868);
} }
function NzUploadListComponent_div_0_span_7_ng_template_1_Template(rf, ctx) { }
function NzUploadListComponent_div_0_span_7_ng_template_2_Template(rf, ctx) { }
function NzUploadListComponent_div_0_span_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtemplate(1, NzUploadListComponent_div_0_span_7_ng_template_1_Template, 0, 0, "ng-template", 26);
    i0.ɵɵtemplate(2, NzUploadListComponent_div_0_span_7_ng_template_2_Template, 0, 0, "ng-template", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    var _r1866 = i0.ɵɵreference(2);
    var _r1868 = i0.ɵɵreference(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r1866);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r1868);
} }
var _c0 = function () { return { opacity: 0.5, "pointer-events": "none" }; };
function NzUploadListComponent_div_0_ng_container_8_a_2_Template(rf, ctx) { if (rf & 1) {
    var _r1917 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 30);
    i0.ɵɵlistener("click", function NzUploadListComponent_div_0_ng_container_8_a_2_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r1917); var file_r1865 = i0.ɵɵnextContext(2).$implicit; var ctx_r1915 = i0.ɵɵnextContext(); return ctx_r1915.handlePreview(file_r1865, $event); });
    i0.ɵɵelement(1, "i", 31);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var file_r1865 = i0.ɵɵnextContext(2).$implicit;
    var ctx_r1913 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("title", ctx_r1913.locale.previewFile);
    i0.ɵɵproperty("href", file_r1865.thumbUrl || file_r1865.url, i0.ɵɵsanitizeUrl)("ngStyle", !(file_r1865.url || file_r1865.thumbUrl) && i0.ɵɵpureFunction0(3, _c0));
} }
function NzUploadListComponent_div_0_ng_container_8_i_3_Template(rf, ctx) { if (rf & 1) {
    var _r1921 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 32);
    i0.ɵɵlistener("click", function NzUploadListComponent_div_0_ng_container_8_i_3_Template_i_click_0_listener($event) { i0.ɵɵrestoreView(_r1921); var file_r1865 = i0.ɵɵnextContext(2).$implicit; var ctx_r1919 = i0.ɵɵnextContext(); return ctx_r1919.handleRemove(file_r1865, $event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1914 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate("title", ctx_r1914.locale.removeFile);
} }
function NzUploadListComponent_div_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 27);
    i0.ɵɵtemplate(2, NzUploadListComponent_div_0_ng_container_8_a_2_Template, 2, 4, "a", 28);
    i0.ɵɵtemplate(3, NzUploadListComponent_div_0_ng_container_8_i_3_Template, 1, 1, "i", 29);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var file_r1865 = i0.ɵɵnextContext().$implicit;
    var ctx_r1872 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1872.showPreview(file_r1865));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1872.icons.showRemoveIcon);
} }
function NzUploadListComponent_div_0_ng_template_9_i_0_Template(rf, ctx) { if (rf & 1) {
    var _r1926 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 34);
    i0.ɵɵlistener("click", function NzUploadListComponent_div_0_ng_template_9_i_0_Template_i_click_0_listener($event) { i0.ɵɵrestoreView(_r1926); var file_r1865 = i0.ɵɵnextContext(2).$implicit; var ctx_r1924 = i0.ɵɵnextContext(); return ctx_r1924.handleRemove(file_r1865, $event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1923 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate("title", ctx_r1923.locale.removeFile);
} }
function NzUploadListComponent_div_0_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NzUploadListComponent_div_0_ng_template_9_i_0_Template, 1, 1, "i", 33);
} if (rf & 2) {
    var ctx_r1874 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r1874.icons.showRemoveIcon);
} }
function NzUploadListComponent_div_0_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 35);
    i0.ɵɵelement(1, "nz-progress", 36);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var file_r1865 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzPercent", file_r1865.percent)("nzShowInfo", false)("nzStrokeWidth", 2);
} }
function NzUploadListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, NzUploadListComponent_div_0_ng_template_1_Template, 9, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(3, NzUploadListComponent_div_0_ng_template_3_Template, 3, 2, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementStart(5, "div", 3);
    i0.ɵɵtemplate(6, NzUploadListComponent_div_0_span_6_Template, 3, 3, "span", 4);
    i0.ɵɵtemplate(7, NzUploadListComponent_div_0_span_7_Template, 3, 2, "span", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, NzUploadListComponent_div_0_ng_container_8_Template, 4, 2, "ng-container", 6);
    i0.ɵɵtemplate(9, NzUploadListComponent_div_0_ng_template_9_Template, 1, 1, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(11, NzUploadListComponent_div_0_div_11_Template, 2, 3, "div", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var file_r1865 = ctx.$implicit;
    var _r1873 = i0.ɵɵreference(10);
    var ctx_r1864 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("ant-upload-list-item ant-upload-list-item-", file_r1865.status, "");
    i0.ɵɵproperty("@itemState", undefined);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", file_r1865.status === "error");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", file_r1865.status !== "error");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1864.listType === "picture-card" && file_r1865.status !== "uploading")("ngIfElse", _r1873);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", file_r1865.status === "uploading");
} }
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
        get: function () {
            return this.listType === 'picture' || this.listType === 'picture-card';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzUploadListComponent.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (list) {
            list.forEach(function (file) {
                file.linkProps = typeof file.linkProps === 'string' ? JSON.parse(file.linkProps) : file.linkProps;
            });
            this._items = list;
        },
        enumerable: true,
        configurable: true
    });
    NzUploadListComponent.prototype.setClassMap = function () {
        var _a;
        var classMap = (_a = {},
            _a[this.prefixCls] = true,
            _a[this.prefixCls + "-" + this.listType] = true,
            _a);
        this.updateHostClassService.updateHostClass(this.el.nativeElement, classMap);
    };
    // #endregion
    // #region render
    NzUploadListComponent.prototype.extname = function (url) {
        var temp = url.split('/');
        var filename = temp[temp.length - 1];
        var filenameWithoutSuffix = filename.split(/#|\?/)[0];
        return (/\.[^./\\]*$/.exec(filenameWithoutSuffix) || [''])[0];
    };
    NzUploadListComponent.prototype.isImageUrl = function (file) {
        if (~this.imageTypes.indexOf(file.type)) {
            return true;
        }
        var url = (file.thumbUrl || file.url || '');
        if (!url) {
            return false;
        }
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
    NzUploadListComponent.prototype.previewFile = function (file, callback) {
        if (file.type && this.imageTypes.indexOf(file.type) === -1) {
            callback('');
        }
        var reader = new FileReader();
        // https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
        reader.onloadend = function () { return callback(reader.result); };
        reader.readAsDataURL(file);
    };
    NzUploadListComponent.prototype.genThumb = function () {
        var _this = this;
        if (!this.platform.isBrowser) {
            return;
        }
        // tslint:disable-next-line:no-any
        var win = window;
        if (!this.showPic || typeof document === 'undefined' || typeof win === 'undefined' || !win.FileReader || !win.File) {
            return;
        }
        this.items
            .filter(function (file) { return file.originFileObj instanceof File && file.thumbUrl === undefined; })
            .forEach(function (file) {
            file.thumbUrl = '';
            _this.previewFile(file.originFileObj, function (previewDataUrl) {
                file.thumbUrl = previewDataUrl;
                _this.detectChanges();
            });
        });
    };
    NzUploadListComponent.prototype.showPreview = function (file) {
        var _a = this.icons, showPreviewIcon = _a.showPreviewIcon, hidePreviewIconInNonImage = _a.hidePreviewIconInNonImage;
        if (!showPreviewIcon) {
            return false;
        }
        return this.isImageUrl(file) ? true : !hidePreviewIconInNonImage;
    };
    NzUploadListComponent.prototype.handlePreview = function (file, e) {
        if (!this.onPreview) {
            return;
        }
        e.preventDefault();
        return this.onPreview(file);
    };
    NzUploadListComponent.prototype.handleRemove = function (file, e) {
        e.preventDefault();
        if (this.onRemove) {
            this.onRemove(file);
        }
        return;
    };
    NzUploadListComponent.prototype.detectChanges = function () {
        this.cdr.detectChanges();
    };
    NzUploadListComponent.prototype.ngOnChanges = function () {
        this.setClassMap();
        this.genThumb();
    };
    /** @nocollapse */ NzUploadListComponent.ɵfac = function NzUploadListComponent_Factory(t) { return new (t || NzUploadListComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.NzUpdateHostClassService), i0.ɵɵdirectiveInject(i2.Platform)); };
    /** @nocollapse */ NzUploadListComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzUploadListComponent, selectors: [["nz-upload-list"]], inputs: { locale: "locale", listType: "listType", items: "items", icons: "icons", onPreview: "onPreview", onRemove: "onRemove" }, exportAs: ["nzUploadList"], features: [i0.ɵɵProvidersFeature([NzUpdateHostClassService]), i0.ɵɵNgOnChangesFeature()], decls: 1, vars: 1, consts: [[3, "class", 4, "ngFor", "ngForOf"], ["icon", ""], ["preview", ""], [1, "ant-upload-list-item-info"], ["nz-tooltip", "", 3, "nzTitle", 4, "ngIf"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], ["close", ""], ["class", "ant-upload-list-item-progress", 4, "ngIf"], ["thumbUrlCheck", ""], ["thumbTpl", ""], ["noThumbTpl", ""], ["noPicTpl", ""], ["class", "ant-upload-list-item-uploading-text", 4, "ngIf", "ngIfElse"], [1, "ant-upload-list-item-uploading-text"], ["class", "ant-upload-list-item-thumbnail", "nz-icon", "", "nzType", "picture", "nzTheme", "twotone", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "picture", "nzTheme", "twotone", 1, "ant-upload-list-item-thumbnail"], ["target", "_blank", "rel", "noopener noreferrer", 1, "ant-upload-list-item-thumbnail", 3, "href", "click"], [3, "src", 4, "ngIf", "ngIfElse"], [3, "src"], ["nz-icon", "", "nzType", "file", "nzTheme", "twotone", 1, "ant-upload-list-item-icon"], ["nz-icon", "", 3, "nzType"], ["prevText", ""], ["target", "_blank", "rel", "noopener noreferrer", 1, "ant-upload-list-item-name", 3, "href", "title", "click"], [1, "ant-upload-list-item-name", 3, "title", "click"], ["nz-tooltip", "", 3, "nzTitle"], [3, "ngTemplateOutlet"], [1, "ant-upload-list-item-actions"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href", "title", "ngStyle", "click", 4, "ngIf"], ["nz-icon", "", "nzType", "delete", 3, "title", "click", 4, "ngIf"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href", "title", "ngStyle", "click"], ["nz-icon", "", "nzType", "eye-o"], ["nz-icon", "", "nzType", "delete", 3, "title", "click"], ["nz-icon", "", "nzType", "close", 3, "title", "click", 4, "ngIf"], ["nz-icon", "", "nzType", "close", 3, "title", "click"], [1, "ant-upload-list-item-progress"], [3, "nzPercent", "nzShowInfo", "nzStrokeWidth"]], template: function NzUploadListComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, NzUploadListComponent_div_0_Template, 12, 9, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngForOf", ctx.items);
        } }, directives: [i3.NgForOf, i3.NgIf, i4.NzIconDirective, i5.NzTooltipDirective, i3.NgTemplateOutlet, i3.NgStyle, i6.NzProgressComponent], encapsulation: 2, data: { animation: [
                trigger('itemState', [
                    transition(':enter', [style({ height: '0', width: '0', opacity: 0 }), animate(150, style({ height: '*', width: '*', opacity: 1 }))]),
                    transition(':leave', [animate(150, style({ height: '0', width: '0', opacity: 0 }))])
                ])
            ] }, changeDetection: 0 });
    return NzUploadListComponent;
}());
export { NzUploadListComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzUploadListComponent, [{
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
    }], function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i1.NzUpdateHostClassService }, { type: i2.Platform }]; }, { locale: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdXBsb2FkLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC91cGxvYWQvIiwic291cmNlcyI6WyJuei11cGxvYWQtbGlzdC5jb21wb25lbnQudHMiLCJuei11cGxvYWQtbGlzdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDMUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBYSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2SSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7O0lDTHhELCtCQUlFO0lBQUEsWUFDRjtJQUFBLGlCQUFNOzs7SUFESixlQUNGO0lBREUsMkRBQ0Y7OztJQU5GLDZCQUNFO0lBQUEsMEdBSUU7SUFFSiwwQkFBZTs7Ozs7O0lBTFgsZUFBc0Y7SUFBdEYsaUdBQXNGLG9CQUFBOzs7SUFPeEYsd0JBTUs7OztJQU5MLHFHQU1DOzs7OztJQUxDLDhEQUFrRCxvQkFBQTs7O0lBZWxELDBCQUtGOzs7SUFISSw2RUFBaUM7SUFDakMsc0NBQXNCOzs7O0lBVjFCLDZCQU9FO0lBRkEsa1NBQXFDO0lBRXJDLHlHQUtGO0lBQUEsaUJBQUk7Ozs7OztJQVJGLDhFQUFrQztJQUloQyxlQUF5QztJQUF6Qyx1REFBeUMsb0JBQUE7OztJQU81Qyx3QkFDRjs7O0lBRUUsd0JBQ0Y7OztJQURhLHFGQUFpRTs7O0lBcEMvRSw0R0FDRTtJQU9GLDJJQUNFO0lBUUYsNElBQ0U7SUFjRiw0SUFDRztJQUVILDRJQUNHOzs7O0lBcENXLHdDQUE4Qixv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YmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgYW5pbWF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBTaG93VXBsb2FkTGlzdEludGVyZmFjZSwgVXBsb2FkRmlsZSwgVXBsb2FkTGlzdFR5cGUgfSBmcm9tICcuL2ludGVyZmFjZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LXVwbG9hZC1saXN0JyxcclxuICBleHBvcnRBczogJ256VXBsb2FkTGlzdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXVwbG9hZC1saXN0LmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnM6IFtOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VdLFxyXG4gIGFuaW1hdGlvbnM6IFtcclxuICAgIHRyaWdnZXIoJ2l0ZW1TdGF0ZScsIFtcclxuICAgICAgdHJhbnNpdGlvbignOmVudGVyJywgW3N0eWxlKHsgaGVpZ2h0OiAnMCcsIHdpZHRoOiAnMCcsIG9wYWNpdHk6IDAgfSksIGFuaW1hdGUoMTUwLCBzdHlsZSh7IGhlaWdodDogJyonLCB3aWR0aDogJyonLCBvcGFjaXR5OiAxIH0pKV0pLFxyXG4gICAgICB0cmFuc2l0aW9uKCc6bGVhdmUnLCBbYW5pbWF0ZSgxNTAsIHN0eWxlKHsgaGVpZ2h0OiAnMCcsIHdpZHRoOiAnMCcsIG9wYWNpdHk6IDAgfSkpXSlcclxuICAgIF0pXHJcbiAgXSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelVwbG9hZExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIHByaXZhdGUgaW1hZ2VUeXBlcyA9IFsnaW1hZ2UnLCAnd2VicCcsICdwbmcnLCAnc3ZnJywgJ2dpZicsICdqcGcnLCAnanBlZycsICdibXAnXTtcclxuICBwcml2YXRlIF9pdGVtczogVXBsb2FkRmlsZVtdO1xyXG5cclxuICBnZXQgc2hvd1BpYygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmxpc3RUeXBlID09PSAncGljdHVyZScgfHwgdGhpcy5saXN0VHlwZSA9PT0gJ3BpY3R1cmUtY2FyZCc7XHJcbiAgfVxyXG5cclxuICAvLyAjcmVnaW9uIGZpZWxkc1xyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgQElucHV0KCkgbG9jYWxlOiBhbnkgPSB7fTtcclxuICBASW5wdXQoKSBsaXN0VHlwZTogVXBsb2FkTGlzdFR5cGU7XHJcbiAgQElucHV0KClcclxuICBzZXQgaXRlbXMobGlzdDogVXBsb2FkRmlsZVtdKSB7XHJcbiAgICBsaXN0LmZvckVhY2goZmlsZSA9PiB7XHJcbiAgICAgIGZpbGUubGlua1Byb3BzID0gdHlwZW9mIGZpbGUubGlua1Byb3BzID09PSAnc3RyaW5nJyA/IEpTT04ucGFyc2UoZmlsZS5saW5rUHJvcHMpIDogZmlsZS5saW5rUHJvcHM7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX2l0ZW1zID0gbGlzdDtcclxuICB9XHJcbiAgZ2V0IGl0ZW1zKCk6IFVwbG9hZEZpbGVbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5faXRlbXM7XHJcbiAgfVxyXG4gIEBJbnB1dCgpIGljb25zOiBTaG93VXBsb2FkTGlzdEludGVyZmFjZTtcclxuICBASW5wdXQoKSBvblByZXZpZXc6IChmaWxlOiBVcGxvYWRGaWxlKSA9PiB2b2lkO1xyXG4gIEBJbnB1dCgpIG9uUmVtb3ZlOiAoZmlsZTogVXBsb2FkRmlsZSkgPT4gdm9pZDtcclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAvLyAjcmVnaW9uIHN0eWxlc1xyXG5cclxuICBwcml2YXRlIHByZWZpeENscyA9ICdhbnQtdXBsb2FkLWxpc3QnO1xyXG5cclxuICBwcml2YXRlIHNldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgY29uc3QgY2xhc3NNYXAgPSB7XHJcbiAgICAgIFt0aGlzLnByZWZpeENsc106IHRydWUsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tJHt0aGlzLmxpc3RUeXBlfWBdOiB0cnVlXHJcbiAgICB9O1xyXG4gICAgdGhpcy51cGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIGNsYXNzTWFwKTtcclxuICB9XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgLy8gI3JlZ2lvbiByZW5kZXJcclxuXHJcbiAgcHJpdmF0ZSBleHRuYW1lKHVybDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHRlbXAgPSB1cmwuc3BsaXQoJy8nKTtcclxuICAgIGNvbnN0IGZpbGVuYW1lID0gdGVtcFt0ZW1wLmxlbmd0aCAtIDFdO1xyXG4gICAgY29uc3QgZmlsZW5hbWVXaXRob3V0U3VmZml4ID0gZmlsZW5hbWUuc3BsaXQoLyN8XFw/LylbMF07XHJcbiAgICByZXR1cm4gKC9cXC5bXi4vXFxcXF0qJC8uZXhlYyhmaWxlbmFtZVdpdGhvdXRTdWZmaXgpIHx8IFsnJ10pWzBdO1xyXG4gIH1cclxuXHJcbiAgaXNJbWFnZVVybChmaWxlOiBVcGxvYWRGaWxlKTogYm9vbGVhbiB7XHJcbiAgICBpZiAofnRoaXMuaW1hZ2VUeXBlcy5pbmRleE9mKGZpbGUudHlwZSkpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBjb25zdCB1cmw6IHN0cmluZyA9IChmaWxlLnRodW1iVXJsIHx8IGZpbGUudXJsIHx8ICcnKSBhcyBzdHJpbmc7XHJcbiAgICBpZiAoIXVybCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBjb25zdCBleHRlbnNpb24gPSB0aGlzLmV4dG5hbWUodXJsKTtcclxuICAgIGlmICgvXmRhdGE6aW1hZ2VcXC8vLnRlc3QodXJsKSB8fCAvKHdlYnB8c3ZnfHBuZ3xnaWZ8anBnfGpwZWd8Ym1wKSQvaS50ZXN0KGV4dGVuc2lvbikpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2UgaWYgKC9eZGF0YTovLnRlc3QodXJsKSkge1xyXG4gICAgICAvLyBvdGhlciBmaWxlIHR5cGVzIG9mIGJhc2U2NFxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2UgaWYgKGV4dGVuc2lvbikge1xyXG4gICAgICAvLyBvdGhlciBmaWxlIHR5cGVzIHdoaWNoIGhhdmUgZXh0ZW5zaW9uXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwcmV2aWV3RmlsZShmaWxlOiBGaWxlIHwgQmxvYiwgY2FsbGJhY2s6IChkYXRhVXJsOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIGlmIChmaWxlLnR5cGUgJiYgdGhpcy5pbWFnZVR5cGVzLmluZGV4T2YoZmlsZS50eXBlKSA9PT0gLTEpIHtcclxuICAgICAgY2FsbGJhY2soJycpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GaWxlUmVhZGVyL3JlYWRBc0RhdGFVUkxcclxuICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiBjYWxsYmFjayhyZWFkZXIucmVzdWx0IGFzIHN0cmluZyk7XHJcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2VuVGh1bWIoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICAgIGNvbnN0IHdpbiA9IHdpbmRvdyBhcyBhbnk7XHJcbiAgICBpZiAoIXRoaXMuc2hvd1BpYyB8fCB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiB3aW4gPT09ICd1bmRlZmluZWQnIHx8ICF3aW4uRmlsZVJlYWRlciB8fCAhd2luLkZpbGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pdGVtc1xyXG4gICAgICAuZmlsdGVyKGZpbGUgPT4gZmlsZS5vcmlnaW5GaWxlT2JqIGluc3RhbmNlb2YgRmlsZSAmJiBmaWxlLnRodW1iVXJsID09PSB1bmRlZmluZWQpXHJcbiAgICAgIC5mb3JFYWNoKGZpbGUgPT4ge1xyXG4gICAgICAgIGZpbGUudGh1bWJVcmwgPSAnJztcclxuICAgICAgICB0aGlzLnByZXZpZXdGaWxlKGZpbGUub3JpZ2luRmlsZU9iaiEsIChwcmV2aWV3RGF0YVVybDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICBmaWxlLnRodW1iVXJsID0gcHJldmlld0RhdGFVcmw7XHJcbiAgICAgICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBzaG93UHJldmlldyhmaWxlOiBVcGxvYWRGaWxlKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCB7IHNob3dQcmV2aWV3SWNvbiwgaGlkZVByZXZpZXdJY29uSW5Ob25JbWFnZSB9ID0gdGhpcy5pY29ucztcclxuICAgIGlmICghc2hvd1ByZXZpZXdJY29uKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmlzSW1hZ2VVcmwoZmlsZSkgPyB0cnVlIDogIWhpZGVQcmV2aWV3SWNvbkluTm9uSW1hZ2U7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVQcmV2aWV3KGZpbGU6IFVwbG9hZEZpbGUsIGU6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMub25QcmV2aWV3KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICByZXR1cm4gdGhpcy5vblByZXZpZXcoZmlsZSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVSZW1vdmUoZmlsZTogVXBsb2FkRmlsZSwgZTogRXZlbnQpOiB2b2lkIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICh0aGlzLm9uUmVtb3ZlKSB7XHJcbiAgICAgIHRoaXMub25SZW1vdmUoZmlsZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgdXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm1cclxuICApIHt9XHJcblxyXG4gIGRldGVjdENoYW5nZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICAgIHRoaXMuZ2VuVGh1bWIoKTtcclxuICB9XHJcbn1cclxuIiwiPGRpdlxyXG4gICpuZ0Zvcj1cImxldCBmaWxlIG9mIGl0ZW1zXCJcclxuICBjbGFzcz1cImFudC11cGxvYWQtbGlzdC1pdGVtIGFudC11cGxvYWQtbGlzdC1pdGVtLXt7IGZpbGUuc3RhdHVzIH19XCJcclxuICBAaXRlbVN0YXRlXHJcbj5cclxuICA8bmctdGVtcGxhdGUgI2ljb24+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic2hvd1BpYzsgZWxzZSBub1BpY1RwbFwiPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgKm5nSWY9XCJsaXN0VHlwZSA9PT0gJ3BpY3R1cmUtY2FyZCcgJiYgZmlsZS5zdGF0dXMgPT09ICd1cGxvYWRpbmcnOyBlbHNlIHRodW1iVXJsQ2hlY2tcIlxyXG4gICAgICAgIGNsYXNzPVwiYW50LXVwbG9hZC1saXN0LWl0ZW0tdXBsb2FkaW5nLXRleHRcIlxyXG4gICAgICA+XHJcbiAgICAgICAge3sgbG9jYWxlLnVwbG9hZGluZyB9fVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPG5nLXRlbXBsYXRlICN0aHVtYlVybENoZWNrPlxyXG4gICAgICA8aVxyXG4gICAgICAgICpuZ0lmPVwiIWZpbGUudGh1bWJVcmwgJiYgIWZpbGUudXJsOyBlbHNlIHRodW1iVHBsXCJcclxuICAgICAgICBjbGFzcz1cImFudC11cGxvYWQtbGlzdC1pdGVtLXRodW1ibmFpbFwiXHJcbiAgICAgICAgbnotaWNvblxyXG4gICAgICAgIG56VHlwZT1cInBpY3R1cmVcIlxyXG4gICAgICAgIG56VGhlbWU9XCJ0d290b25lXCJcclxuICAgICAgPjwvaT5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICA8bmctdGVtcGxhdGUgI3RodW1iVHBsPlxyXG4gICAgICA8YVxyXG4gICAgICAgIGNsYXNzPVwiYW50LXVwbG9hZC1saXN0LWl0ZW0tdGh1bWJuYWlsXCJcclxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgIFtocmVmXT1cImZpbGUudGh1bWJVcmwgfHwgZmlsZS51cmxcIlxyXG4gICAgICAgIChjbGljayk9XCJoYW5kbGVQcmV2aWV3KGZpbGUsICRldmVudClcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgKm5nSWY9XCJpc0ltYWdlVXJsKGZpbGUpOyBlbHNlIG5vVGh1bWJUcGxcIlxyXG4gICAgICAgICAgW3NyY109XCJmaWxlLnRodW1iVXJsIHx8IGZpbGUudXJsXCJcclxuICAgICAgICAgIFthdHRyLmFsdF09XCJmaWxlLm5hbWVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvYT5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICA8bmctdGVtcGxhdGUgI25vVGh1bWJUcGxcclxuICAgICAgPjxpIGNsYXNzPVwiYW50LXVwbG9hZC1saXN0LWl0ZW0taWNvblwiIG56LWljb24gbnpUeXBlPVwiZmlsZVwiIG56VGhlbWU9XCJ0d290b25lXCI+PC9pXHJcbiAgICA+PC9uZy10ZW1wbGF0ZT5cclxuICAgIDxuZy10ZW1wbGF0ZSAjbm9QaWNUcGxcclxuICAgICAgPjxpIG56LWljb24gW256VHlwZV09XCJmaWxlLnN0YXR1cyA9PT0gJ3VwbG9hZGluZycgPyAnbG9hZGluZycgOiAncGFwZXItY2xpcCdcIj48L2lcclxuICAgID48L25nLXRlbXBsYXRlPlxyXG4gIDwvbmctdGVtcGxhdGU+XHJcbiAgPG5nLXRlbXBsYXRlICNwcmV2aWV3PlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZpbGUudXJsOyBlbHNlIHByZXZUZXh0XCI+XHJcbiAgICAgIDxhXHJcbiAgICAgICAgW2hyZWZdPVwiZmlsZS50aHVtYlVybCB8fCBmaWxlLnVybFwiXHJcbiAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICBbYXR0ci5kb3dubG9hZF09XCJmaWxlLmxpbmtQcm9wcyAmJiBmaWxlLmxpbmtQcm9wcy5kb3dubG9hZFwiXHJcbiAgICAgICAgKGNsaWNrKT1cImhhbmRsZVByZXZpZXcoZmlsZSwgJGV2ZW50KVwiXHJcbiAgICAgICAgY2xhc3M9XCJhbnQtdXBsb2FkLWxpc3QtaXRlbS1uYW1lXCJcclxuICAgICAgICB0aXRsZT1cInt7IGZpbGUubmFtZSB9fVwiXHJcbiAgICAgICAgPnt7IGZpbGUubmFtZSB9fTwvYVxyXG4gICAgICA+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDxuZy10ZW1wbGF0ZSAjcHJldlRleHQ+XHJcbiAgICAgIDxzcGFuXHJcbiAgICAgICAgKGNsaWNrKT1cImhhbmRsZVByZXZpZXcoZmlsZSwgJGV2ZW50KVwiXHJcbiAgICAgICAgY2xhc3M9XCJhbnQtdXBsb2FkLWxpc3QtaXRlbS1uYW1lXCJcclxuICAgICAgICB0aXRsZT1cInt7IGZpbGUubmFtZSB9fVwiXHJcbiAgICAgICAgPnt7IGZpbGUubmFtZSB9fTwvc3BhblxyXG4gICAgICA+XHJcbiAgICA8L25nLXRlbXBsYXRlPlxyXG4gIDwvbmctdGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImFudC11cGxvYWQtbGlzdC1pdGVtLWluZm9cIj5cclxuICAgIDxzcGFuICpuZ0lmPVwiZmlsZS5zdGF0dXMgPT09ICdlcnJvcidcIiBuei10b29sdGlwIFtuelRpdGxlXT1cImZpbGUubWVzc2FnZVwiPlxyXG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiaWNvblwiPjwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJwcmV2aWV3XCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgIDwvc3Bhbj5cclxuICAgIDxzcGFuICpuZ0lmPVwiZmlsZS5zdGF0dXMgIT09ICdlcnJvcidcIj5cclxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImljb25cIj48L25nLXRlbXBsYXRlPlxyXG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwicHJldmlld1wiPjwvbmctdGVtcGxhdGU+XHJcbiAgICA8L3NwYW4+XHJcbiAgPC9kaXY+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImxpc3RUeXBlID09PSAncGljdHVyZS1jYXJkJyAmJiBmaWxlLnN0YXR1cyAhPT0gJ3VwbG9hZGluZyc7IGVsc2UgY2xvc2VcIj5cclxuICAgIDxzcGFuIGNsYXNzPVwiYW50LXVwbG9hZC1saXN0LWl0ZW0tYWN0aW9uc1wiPlxyXG4gICAgICA8YVxyXG4gICAgICAgICpuZ0lmPVwic2hvd1ByZXZpZXcoZmlsZSlcIlxyXG4gICAgICAgIFtocmVmXT1cImZpbGUudGh1bWJVcmwgfHwgZmlsZS51cmxcIlxyXG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgdGl0bGU9XCJ7eyBsb2NhbGUucHJldmlld0ZpbGUgfX1cIlxyXG4gICAgICAgIFtuZ1N0eWxlXT1cIiEoZmlsZS51cmwgfHwgZmlsZS50aHVtYlVybCkgJiYgeyBvcGFjaXR5OiAwLjUsICdwb2ludGVyLWV2ZW50cyc6ICdub25lJyB9XCJcclxuICAgICAgICAoY2xpY2spPVwiaGFuZGxlUHJldmlldyhmaWxlLCAkZXZlbnQpXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxpIG56LWljb24gbnpUeXBlPVwiZXllLW9cIj48L2k+XHJcbiAgICAgIDwvYT5cclxuICAgICAgPGlcclxuICAgICAgICAqbmdJZj1cImljb25zLnNob3dSZW1vdmVJY29uXCJcclxuICAgICAgICAoY2xpY2spPVwiaGFuZGxlUmVtb3ZlKGZpbGUsICRldmVudClcIlxyXG4gICAgICAgIG56LWljb25cclxuICAgICAgICBuelR5cGU9XCJkZWxldGVcIlxyXG4gICAgICAgIHRpdGxlPVwie3sgbG9jYWxlLnJlbW92ZUZpbGUgfX1cIlxyXG4gICAgICA+PC9pPlxyXG4gICAgPC9zcGFuPlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG4gIDxuZy10ZW1wbGF0ZSAjY2xvc2U+XHJcbiAgICA8aVxyXG4gICAgICAqbmdJZj1cImljb25zLnNob3dSZW1vdmVJY29uXCJcclxuICAgICAgKGNsaWNrKT1cImhhbmRsZVJlbW92ZShmaWxlLCAkZXZlbnQpXCJcclxuICAgICAgbnotaWNvblxyXG4gICAgICBuelR5cGU9XCJjbG9zZVwiXHJcbiAgICAgIHRpdGxlPVwie3sgbG9jYWxlLnJlbW92ZUZpbGUgfX1cIlxyXG4gICAgPjwvaT5cclxuICA8L25nLXRlbXBsYXRlPlxyXG4gIDxkaXYgKm5nSWY9XCJmaWxlLnN0YXR1cyA9PT0gJ3VwbG9hZGluZydcIiBjbGFzcz1cImFudC11cGxvYWQtbGlzdC1pdGVtLXByb2dyZXNzXCI+XHJcbiAgICA8bnotcHJvZ3Jlc3MgW256UGVyY2VudF09XCJmaWxlLnBlcmNlbnRcIiBbbnpTaG93SW5mb109XCJmYWxzZVwiIFtuelN0cm9rZVdpZHRoXT1cIjJcIj48L256LXByb2dyZXNzPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19
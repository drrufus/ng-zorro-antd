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
    const ctx_r1794 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1794.locale.uploading, " ");
} }
function NzUploadListComponent_div_0_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzUploadListComponent_div_0_ng_template_1_ng_container_0_div_1_Template, 2, 1, "div", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r1786 = i0.ɵɵreference(2);
    const file_r1774 = i0.ɵɵnextContext().$implicit;
    const ctx_r1785 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1785.listType === "picture-card" && file_r1774.status === "uploading")("ngIfElse", _r1786);
} }
function NzUploadListComponent_div_0_ng_template_1_ng_template_1_i_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 16);
} }
function NzUploadListComponent_div_0_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NzUploadListComponent_div_0_ng_template_1_ng_template_1_i_0_Template, 1, 0, "i", 15);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r1788 = i0.ɵɵreference(4);
    const file_r1774 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngIf", !file_r1774.thumbUrl && !file_r1774.url)("ngIfElse", _r1788);
} }
function NzUploadListComponent_div_0_ng_template_1_ng_template_3_img_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 19);
} if (rf & 2) {
    const file_r1774 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("src", file_r1774.thumbUrl || file_r1774.url, i0.ɵɵsanitizeUrl);
    i0.ɵɵattribute("alt", file_r1774.name);
} }
function NzUploadListComponent_div_0_ng_template_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r1802 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 17);
    i0.ɵɵlistener("click", function NzUploadListComponent_div_0_ng_template_1_ng_template_3_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r1802); const file_r1774 = i0.ɵɵnextContext(2).$implicit; const ctx_r1800 = i0.ɵɵnextContext(); return ctx_r1800.handlePreview(file_r1774, $event); });
    i0.ɵɵtemplate(1, NzUploadListComponent_div_0_ng_template_1_ng_template_3_img_1_Template, 1, 2, "img", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r1790 = i0.ɵɵreference(6);
    const file_r1774 = i0.ɵɵnextContext().$implicit;
    const ctx_r1789 = i0.ɵɵnextContext();
    i0.ɵɵproperty("href", file_r1774.thumbUrl || file_r1774.url, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1789.isImageUrl(file_r1774))("ngIfElse", _r1790);
} }
function NzUploadListComponent_div_0_ng_template_1_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 20);
} }
function NzUploadListComponent_div_0_ng_template_1_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 21);
} if (rf & 2) {
    const file_r1774 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("nzType", file_r1774.status === "uploading" ? "loading" : "paper-clip");
} }
function NzUploadListComponent_div_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NzUploadListComponent_div_0_ng_template_1_ng_container_0_Template, 2, 2, "ng-container", 6);
    i0.ɵɵtemplate(1, NzUploadListComponent_div_0_ng_template_1_ng_template_1_Template, 1, 2, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(3, NzUploadListComponent_div_0_ng_template_1_ng_template_3_Template, 2, 3, "ng-template", null, 10, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(5, NzUploadListComponent_div_0_ng_template_1_ng_template_5_Template, 1, 0, "ng-template", null, 11, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(7, NzUploadListComponent_div_0_ng_template_1_ng_template_7_Template, 1, 1, "ng-template", null, 12, i0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const _r1792 = i0.ɵɵreference(8);
    const ctx_r1776 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r1776.showPic)("ngIfElse", _r1792);
} }
function NzUploadListComponent_div_0_ng_template_3_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r1810 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 23);
    i0.ɵɵlistener("click", function NzUploadListComponent_div_0_ng_template_3_ng_container_0_Template_a_click_1_listener($event) { i0.ɵɵrestoreView(_r1810); const file_r1774 = i0.ɵɵnextContext(2).$implicit; const ctx_r1808 = i0.ɵɵnextContext(); return ctx_r1808.handlePreview(file_r1774, $event); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const file_r1774 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("title", file_r1774.name);
    i0.ɵɵproperty("href", file_r1774.thumbUrl || file_r1774.url, i0.ɵɵsanitizeUrl);
    i0.ɵɵattribute("download", file_r1774.linkProps && file_r1774.linkProps.download);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(file_r1774.name);
} }
function NzUploadListComponent_div_0_ng_template_3_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r1814 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 24);
    i0.ɵɵlistener("click", function NzUploadListComponent_div_0_ng_template_3_ng_template_1_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r1814); const file_r1774 = i0.ɵɵnextContext(2).$implicit; const ctx_r1812 = i0.ɵɵnextContext(); return ctx_r1812.handlePreview(file_r1774, $event); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const file_r1774 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵpropertyInterpolate("title", file_r1774.name);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(file_r1774.name);
} }
function NzUploadListComponent_div_0_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NzUploadListComponent_div_0_ng_template_3_ng_container_0_Template, 3, 4, "ng-container", 6);
    i0.ɵɵtemplate(1, NzUploadListComponent_div_0_ng_template_3_ng_template_1_Template, 2, 2, "ng-template", null, 22, i0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const _r1806 = i0.ɵɵreference(2);
    const file_r1774 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngIf", file_r1774.url)("ngIfElse", _r1806);
} }
function NzUploadListComponent_div_0_span_6_ng_template_1_Template(rf, ctx) { }
function NzUploadListComponent_div_0_span_6_ng_template_2_Template(rf, ctx) { }
function NzUploadListComponent_div_0_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 25);
    i0.ɵɵtemplate(1, NzUploadListComponent_div_0_span_6_ng_template_1_Template, 0, 0, "ng-template", 26);
    i0.ɵɵtemplate(2, NzUploadListComponent_div_0_span_6_ng_template_2_Template, 0, 0, "ng-template", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const file_r1774 = i0.ɵɵnextContext().$implicit;
    const _r1775 = i0.ɵɵreference(2);
    const _r1777 = i0.ɵɵreference(4);
    i0.ɵɵproperty("nzTitle", file_r1774.message);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r1775);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r1777);
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
    const _r1775 = i0.ɵɵreference(2);
    const _r1777 = i0.ɵɵreference(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r1775);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r1777);
} }
const _c0 = function () { return { opacity: 0.5, "pointer-events": "none" }; };
function NzUploadListComponent_div_0_ng_container_8_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r1826 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 30);
    i0.ɵɵlistener("click", function NzUploadListComponent_div_0_ng_container_8_a_2_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r1826); const file_r1774 = i0.ɵɵnextContext(2).$implicit; const ctx_r1824 = i0.ɵɵnextContext(); return ctx_r1824.handlePreview(file_r1774, $event); });
    i0.ɵɵelement(1, "i", 31);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const file_r1774 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1822 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("title", ctx_r1822.locale.previewFile);
    i0.ɵɵproperty("href", file_r1774.thumbUrl || file_r1774.url, i0.ɵɵsanitizeUrl)("ngStyle", !(file_r1774.url || file_r1774.thumbUrl) && i0.ɵɵpureFunction0(3, _c0));
} }
function NzUploadListComponent_div_0_ng_container_8_i_3_Template(rf, ctx) { if (rf & 1) {
    const _r1830 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 32);
    i0.ɵɵlistener("click", function NzUploadListComponent_div_0_ng_container_8_i_3_Template_i_click_0_listener($event) { i0.ɵɵrestoreView(_r1830); const file_r1774 = i0.ɵɵnextContext(2).$implicit; const ctx_r1828 = i0.ɵɵnextContext(); return ctx_r1828.handleRemove(file_r1774, $event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1823 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate("title", ctx_r1823.locale.removeFile);
} }
function NzUploadListComponent_div_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 27);
    i0.ɵɵtemplate(2, NzUploadListComponent_div_0_ng_container_8_a_2_Template, 2, 4, "a", 28);
    i0.ɵɵtemplate(3, NzUploadListComponent_div_0_ng_container_8_i_3_Template, 1, 1, "i", 29);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const file_r1774 = i0.ɵɵnextContext().$implicit;
    const ctx_r1781 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1781.showPreview(file_r1774));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1781.icons.showRemoveIcon);
} }
function NzUploadListComponent_div_0_ng_template_9_i_0_Template(rf, ctx) { if (rf & 1) {
    const _r1835 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 34);
    i0.ɵɵlistener("click", function NzUploadListComponent_div_0_ng_template_9_i_0_Template_i_click_0_listener($event) { i0.ɵɵrestoreView(_r1835); const file_r1774 = i0.ɵɵnextContext(2).$implicit; const ctx_r1833 = i0.ɵɵnextContext(); return ctx_r1833.handleRemove(file_r1774, $event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1832 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate("title", ctx_r1832.locale.removeFile);
} }
function NzUploadListComponent_div_0_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NzUploadListComponent_div_0_ng_template_9_i_0_Template, 1, 1, "i", 33);
} if (rf & 2) {
    const ctx_r1783 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r1783.icons.showRemoveIcon);
} }
function NzUploadListComponent_div_0_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 35);
    i0.ɵɵelement(1, "nz-progress", 36);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const file_r1774 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzPercent", file_r1774.percent)("nzShowInfo", false)("nzStrokeWidth", 2);
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
    const file_r1774 = ctx.$implicit;
    const _r1782 = i0.ɵɵreference(10);
    const ctx_r1773 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("ant-upload-list-item ant-upload-list-item-", file_r1774.status, "");
    i0.ɵɵproperty("@itemState", undefined);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", file_r1774.status === "error");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", file_r1774.status !== "error");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1773.listType === "picture-card" && file_r1774.status !== "uploading")("ngIfElse", _r1782);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", file_r1774.status === "uploading");
} }
export class NzUploadListComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdXBsb2FkLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC91cGxvYWQvIiwic291cmNlcyI6WyJuei11cGxvYWQtbGlzdC5jb21wb25lbnQudHMiLCJuei11cGxvYWQtbGlzdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDMUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBYSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2SSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7O0lDTHhELCtCQUlFO0lBQUEsWUFDRjtJQUFBLGlCQUFNOzs7SUFESixlQUNGO0lBREUsMkRBQ0Y7OztJQU5GLDZCQUNFO0lBQUEsMEdBSUU7SUFFSiwwQkFBZTs7Ozs7O0lBTFgsZUFBc0Y7SUFBdEYsaUdBQXNGLG9CQUFBOzs7SUFPeEYsd0JBTUs7OztJQU5MLHFHQU1DOzs7OztJQUxDLDhEQUFrRCxvQkFBQTs7O0lBZWxELDBCQUtGOzs7SUFISSw2RUFBaUM7SUFDakMsc0NBQXNCOzs7O0lBVjFCLDZCQU9FO0lBRkEsc1NBQXFDO0lBRXJDLHlHQUtGO0lBQUEsaUJBQUk7Ozs7OztJQVJGLDhFQUFrQztJQUloQyxlQUF5QztJQUF6Qyx1REFBeUMsb0JBQUE7OztJQU81Qyx3QkFDRjs7O0lBRUUsd0JBQ0Y7OztJQURhLHFGQUFpRTs7O0lBcEMvRSw0R0FDRTtJQU9GLDJJQUNFO0lBUUYsNElBQ0U7SUFjRiw0SUFDRztJQUVILDRJQUNHOzs7O0lBcENXLHdDQUE4Qixv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QUFDLENBQUM7YUFDckYsQ0FBQztTQUNIO2tEQUtVLHFCQUFxQjtjQWZqQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFdBQVcsRUFBRSxpQ0FBaUM7Z0JBQzlDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO2dCQUNyQyxVQUFVLEVBQUU7b0JBQ1YsT0FBTyxDQUFDLFdBQVcsRUFBRTt3QkFDbkIsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3BJLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ3JGLENBQUM7aUJBQ0g7Z0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOztrQkFZRSxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFVTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBhbmltYXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IFNob3dVcGxvYWRMaXN0SW50ZXJmYWNlLCBVcGxvYWRGaWxlLCBVcGxvYWRMaXN0VHlwZSB9IGZyb20gJy4vaW50ZXJmYWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotdXBsb2FkLWxpc3QnLFxyXG4gIGV4cG9ydEFzOiAnbnpVcGxvYWRMaXN0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotdXBsb2FkLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW056VXBkYXRlSG9zdENsYXNzU2VydmljZV0sXHJcbiAgYW5pbWF0aW9uczogW1xyXG4gICAgdHJpZ2dlcignaXRlbVN0YXRlJywgW1xyXG4gICAgICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBbc3R5bGUoeyBoZWlnaHQ6ICcwJywgd2lkdGg6ICcwJywgb3BhY2l0eTogMCB9KSwgYW5pbWF0ZSgxNTAsIHN0eWxlKHsgaGVpZ2h0OiAnKicsIHdpZHRoOiAnKicsIG9wYWNpdHk6IDEgfSkpXSksXHJcbiAgICAgIHRyYW5zaXRpb24oJzpsZWF2ZScsIFthbmltYXRlKDE1MCwgc3R5bGUoeyBoZWlnaHQ6ICcwJywgd2lkdGg6ICcwJywgb3BhY2l0eTogMCB9KSldKVxyXG4gICAgXSlcclxuICBdLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE56VXBsb2FkTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgcHJpdmF0ZSBpbWFnZVR5cGVzID0gWydpbWFnZScsICd3ZWJwJywgJ3BuZycsICdzdmcnLCAnZ2lmJywgJ2pwZycsICdqcGVnJywgJ2JtcCddO1xyXG4gIHByaXZhdGUgX2l0ZW1zOiBVcGxvYWRGaWxlW107XHJcblxyXG4gIGdldCBzaG93UGljKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubGlzdFR5cGUgPT09ICdwaWN0dXJlJyB8fCB0aGlzLmxpc3RUeXBlID09PSAncGljdHVyZS1jYXJkJztcclxuICB9XHJcblxyXG4gIC8vICNyZWdpb24gZmllbGRzXHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBASW5wdXQoKSBsb2NhbGU6IGFueSA9IHt9O1xyXG4gIEBJbnB1dCgpIGxpc3RUeXBlOiBVcGxvYWRMaXN0VHlwZTtcclxuICBASW5wdXQoKVxyXG4gIHNldCBpdGVtcyhsaXN0OiBVcGxvYWRGaWxlW10pIHtcclxuICAgIGxpc3QuZm9yRWFjaChmaWxlID0+IHtcclxuICAgICAgZmlsZS5saW5rUHJvcHMgPSB0eXBlb2YgZmlsZS5saW5rUHJvcHMgPT09ICdzdHJpbmcnID8gSlNPTi5wYXJzZShmaWxlLmxpbmtQcm9wcykgOiBmaWxlLmxpbmtQcm9wcztcclxuICAgIH0pO1xyXG4gICAgdGhpcy5faXRlbXMgPSBsaXN0O1xyXG4gIH1cclxuICBnZXQgaXRlbXMoKTogVXBsb2FkRmlsZVtdIHtcclxuICAgIHJldHVybiB0aGlzLl9pdGVtcztcclxuICB9XHJcbiAgQElucHV0KCkgaWNvbnM6IFNob3dVcGxvYWRMaXN0SW50ZXJmYWNlO1xyXG4gIEBJbnB1dCgpIG9uUHJldmlldzogKGZpbGU6IFVwbG9hZEZpbGUpID0+IHZvaWQ7XHJcbiAgQElucHV0KCkgb25SZW1vdmU6IChmaWxlOiBVcGxvYWRGaWxlKSA9PiB2b2lkO1xyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIC8vICNyZWdpb24gc3R5bGVzXHJcblxyXG4gIHByaXZhdGUgcHJlZml4Q2xzID0gJ2FudC11cGxvYWQtbGlzdCc7XHJcblxyXG4gIHByaXZhdGUgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICBjb25zdCBjbGFzc01hcCA9IHtcclxuICAgICAgW3RoaXMucHJlZml4Q2xzXTogdHJ1ZSxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS0ke3RoaXMubGlzdFR5cGV9YF06IHRydWVcclxuICAgIH07XHJcbiAgICB0aGlzLnVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgY2xhc3NNYXApO1xyXG4gIH1cclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAvLyAjcmVnaW9uIHJlbmRlclxyXG5cclxuICBwcml2YXRlIGV4dG5hbWUodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgdGVtcCA9IHVybC5zcGxpdCgnLycpO1xyXG4gICAgY29uc3QgZmlsZW5hbWUgPSB0ZW1wW3RlbXAubGVuZ3RoIC0gMV07XHJcbiAgICBjb25zdCBmaWxlbmFtZVdpdGhvdXRTdWZmaXggPSBmaWxlbmFtZS5zcGxpdCgvI3xcXD8vKVswXTtcclxuICAgIHJldHVybiAoL1xcLlteLi9cXFxcXSokLy5leGVjKGZpbGVuYW1lV2l0aG91dFN1ZmZpeCkgfHwgWycnXSlbMF07XHJcbiAgfVxyXG5cclxuICBpc0ltYWdlVXJsKGZpbGU6IFVwbG9hZEZpbGUpOiBib29sZWFuIHtcclxuICAgIGlmICh+dGhpcy5pbWFnZVR5cGVzLmluZGV4T2YoZmlsZS50eXBlKSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGNvbnN0IHVybDogc3RyaW5nID0gKGZpbGUudGh1bWJVcmwgfHwgZmlsZS51cmwgfHwgJycpIGFzIHN0cmluZztcclxuICAgIGlmICghdXJsKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGNvbnN0IGV4dGVuc2lvbiA9IHRoaXMuZXh0bmFtZSh1cmwpO1xyXG4gICAgaWYgKC9eZGF0YTppbWFnZVxcLy8udGVzdCh1cmwpIHx8IC8od2VicHxzdmd8cG5nfGdpZnxqcGd8anBlZ3xibXApJC9pLnRlc3QoZXh0ZW5zaW9uKSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSBpZiAoL15kYXRhOi8udGVzdCh1cmwpKSB7XHJcbiAgICAgIC8vIG90aGVyIGZpbGUgdHlwZXMgb2YgYmFzZTY0XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSBpZiAoZXh0ZW5zaW9uKSB7XHJcbiAgICAgIC8vIG90aGVyIGZpbGUgdHlwZXMgd2hpY2ggaGF2ZSBleHRlbnNpb25cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHByZXZpZXdGaWxlKGZpbGU6IEZpbGUgfCBCbG9iLCBjYWxsYmFjazogKGRhdGFVcmw6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgaWYgKGZpbGUudHlwZSAmJiB0aGlzLmltYWdlVHlwZXMuaW5kZXhPZihmaWxlLnR5cGUpID09PSAtMSkge1xyXG4gICAgICBjYWxsYmFjaygnJyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZpbGVSZWFkZXIvcmVhZEFzRGF0YVVSTFxyXG4gICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IGNhbGxiYWNrKHJlYWRlci5yZXN1bHQgYXMgc3RyaW5nKTtcclxuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZW5UaHVtYigpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gICAgY29uc3Qgd2luID0gd2luZG93IGFzIGFueTtcclxuICAgIGlmICghdGhpcy5zaG93UGljIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHdpbiA9PT0gJ3VuZGVmaW5lZCcgfHwgIXdpbi5GaWxlUmVhZGVyIHx8ICF3aW4uRmlsZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLml0ZW1zXHJcbiAgICAgIC5maWx0ZXIoZmlsZSA9PiBmaWxlLm9yaWdpbkZpbGVPYmogaW5zdGFuY2VvZiBGaWxlICYmIGZpbGUudGh1bWJVcmwgPT09IHVuZGVmaW5lZClcclxuICAgICAgLmZvckVhY2goZmlsZSA9PiB7XHJcbiAgICAgICAgZmlsZS50aHVtYlVybCA9ICcnO1xyXG4gICAgICAgIHRoaXMucHJldmlld0ZpbGUoZmlsZS5vcmlnaW5GaWxlT2JqISwgKHByZXZpZXdEYXRhVXJsOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgIGZpbGUudGh1bWJVcmwgPSBwcmV2aWV3RGF0YVVybDtcclxuICAgICAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHNob3dQcmV2aWV3KGZpbGU6IFVwbG9hZEZpbGUpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHsgc2hvd1ByZXZpZXdJY29uLCBoaWRlUHJldmlld0ljb25Jbk5vbkltYWdlIH0gPSB0aGlzLmljb25zO1xyXG4gICAgaWYgKCFzaG93UHJldmlld0ljb24pIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuaXNJbWFnZVVybChmaWxlKSA/IHRydWUgOiAhaGlkZVByZXZpZXdJY29uSW5Ob25JbWFnZTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVByZXZpZXcoZmlsZTogVXBsb2FkRmlsZSwgZTogRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5vblByZXZpZXcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHJldHVybiB0aGlzLm9uUHJldmlldyhmaWxlKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVJlbW92ZShmaWxlOiBVcGxvYWRGaWxlLCBlOiBFdmVudCk6IHZvaWQge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKHRoaXMub25SZW1vdmUpIHtcclxuICAgICAgdGhpcy5vblJlbW92ZShmaWxlKTtcclxuICAgIH1cclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSB1cGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybVxyXG4gICkge31cclxuXHJcbiAgZGV0ZWN0Q2hhbmdlcygpOiB2b2lkIHtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgdGhpcy5nZW5UaHVtYigpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2XHJcbiAgKm5nRm9yPVwibGV0IGZpbGUgb2YgaXRlbXNcIlxyXG4gIGNsYXNzPVwiYW50LXVwbG9hZC1saXN0LWl0ZW0gYW50LXVwbG9hZC1saXN0LWl0ZW0te3sgZmlsZS5zdGF0dXMgfX1cIlxyXG4gIEBpdGVtU3RhdGVcclxuPlxyXG4gIDxuZy10ZW1wbGF0ZSAjaWNvbj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzaG93UGljOyBlbHNlIG5vUGljVHBsXCI+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICAqbmdJZj1cImxpc3RUeXBlID09PSAncGljdHVyZS1jYXJkJyAmJiBmaWxlLnN0YXR1cyA9PT0gJ3VwbG9hZGluZyc7IGVsc2UgdGh1bWJVcmxDaGVja1wiXHJcbiAgICAgICAgY2xhc3M9XCJhbnQtdXBsb2FkLWxpc3QtaXRlbS11cGxvYWRpbmctdGV4dFwiXHJcbiAgICAgID5cclxuICAgICAgICB7eyBsb2NhbGUudXBsb2FkaW5nIH19XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8bmctdGVtcGxhdGUgI3RodW1iVXJsQ2hlY2s+XHJcbiAgICAgIDxpXHJcbiAgICAgICAgKm5nSWY9XCIhZmlsZS50aHVtYlVybCAmJiAhZmlsZS51cmw7IGVsc2UgdGh1bWJUcGxcIlxyXG4gICAgICAgIGNsYXNzPVwiYW50LXVwbG9hZC1saXN0LWl0ZW0tdGh1bWJuYWlsXCJcclxuICAgICAgICBuei1pY29uXHJcbiAgICAgICAgbnpUeXBlPVwicGljdHVyZVwiXHJcbiAgICAgICAgbnpUaGVtZT1cInR3b3RvbmVcIlxyXG4gICAgICA+PC9pPlxyXG4gICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgIDxuZy10ZW1wbGF0ZSAjdGh1bWJUcGw+XHJcbiAgICAgIDxhXHJcbiAgICAgICAgY2xhc3M9XCJhbnQtdXBsb2FkLWxpc3QtaXRlbS10aHVtYm5haWxcIlxyXG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgW2hyZWZdPVwiZmlsZS50aHVtYlVybCB8fCBmaWxlLnVybFwiXHJcbiAgICAgICAgKGNsaWNrKT1cImhhbmRsZVByZXZpZXcoZmlsZSwgJGV2ZW50KVwiXHJcbiAgICAgID5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICAqbmdJZj1cImlzSW1hZ2VVcmwoZmlsZSk7IGVsc2Ugbm9UaHVtYlRwbFwiXHJcbiAgICAgICAgICBbc3JjXT1cImZpbGUudGh1bWJVcmwgfHwgZmlsZS51cmxcIlxyXG4gICAgICAgICAgW2F0dHIuYWx0XT1cImZpbGUubmFtZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9hPlxyXG4gICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgIDxuZy10ZW1wbGF0ZSAjbm9UaHVtYlRwbFxyXG4gICAgICA+PGkgY2xhc3M9XCJhbnQtdXBsb2FkLWxpc3QtaXRlbS1pY29uXCIgbnotaWNvbiBuelR5cGU9XCJmaWxlXCIgbnpUaGVtZT1cInR3b3RvbmVcIj48L2lcclxuICAgID48L25nLXRlbXBsYXRlPlxyXG4gICAgPG5nLXRlbXBsYXRlICNub1BpY1RwbFxyXG4gICAgICA+PGkgbnotaWNvbiBbbnpUeXBlXT1cImZpbGUuc3RhdHVzID09PSAndXBsb2FkaW5nJyA/ICdsb2FkaW5nJyA6ICdwYXBlci1jbGlwJ1wiPjwvaVxyXG4gICAgPjwvbmctdGVtcGxhdGU+XHJcbiAgPC9uZy10ZW1wbGF0ZT5cclxuICA8bmctdGVtcGxhdGUgI3ByZXZpZXc+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZmlsZS51cmw7IGVsc2UgcHJldlRleHRcIj5cclxuICAgICAgPGFcclxuICAgICAgICBbaHJlZl09XCJmaWxlLnRodW1iVXJsIHx8IGZpbGUudXJsXCJcclxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgIFthdHRyLmRvd25sb2FkXT1cImZpbGUubGlua1Byb3BzICYmIGZpbGUubGlua1Byb3BzLmRvd25sb2FkXCJcclxuICAgICAgICAoY2xpY2spPVwiaGFuZGxlUHJldmlldyhmaWxlLCAkZXZlbnQpXCJcclxuICAgICAgICBjbGFzcz1cImFudC11cGxvYWQtbGlzdC1pdGVtLW5hbWVcIlxyXG4gICAgICAgIHRpdGxlPVwie3sgZmlsZS5uYW1lIH19XCJcclxuICAgICAgICA+e3sgZmlsZS5uYW1lIH19PC9hXHJcbiAgICAgID5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPG5nLXRlbXBsYXRlICNwcmV2VGV4dD5cclxuICAgICAgPHNwYW5cclxuICAgICAgICAoY2xpY2spPVwiaGFuZGxlUHJldmlldyhmaWxlLCAkZXZlbnQpXCJcclxuICAgICAgICBjbGFzcz1cImFudC11cGxvYWQtbGlzdC1pdGVtLW5hbWVcIlxyXG4gICAgICAgIHRpdGxlPVwie3sgZmlsZS5uYW1lIH19XCJcclxuICAgICAgICA+e3sgZmlsZS5uYW1lIH19PC9zcGFuXHJcbiAgICAgID5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgPC9uZy10ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiYW50LXVwbG9hZC1saXN0LWl0ZW0taW5mb1wiPlxyXG4gICAgPHNwYW4gKm5nSWY9XCJmaWxlLnN0YXR1cyA9PT0gJ2Vycm9yJ1wiIG56LXRvb2x0aXAgW256VGl0bGVdPVwiZmlsZS5tZXNzYWdlXCI+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJpY29uXCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInByZXZpZXdcIj48L25nLXRlbXBsYXRlPlxyXG4gICAgPC9zcGFuPlxyXG4gICAgPHNwYW4gKm5nSWY9XCJmaWxlLnN0YXR1cyAhPT0gJ2Vycm9yJ1wiPlxyXG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiaWNvblwiPjwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJwcmV2aWV3XCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgIDwvc3Bhbj5cclxuICA8L2Rpdj5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwibGlzdFR5cGUgPT09ICdwaWN0dXJlLWNhcmQnICYmIGZpbGUuc3RhdHVzICE9PSAndXBsb2FkaW5nJzsgZWxzZSBjbG9zZVwiPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJhbnQtdXBsb2FkLWxpc3QtaXRlbS1hY3Rpb25zXCI+XHJcbiAgICAgIDxhXHJcbiAgICAgICAgKm5nSWY9XCJzaG93UHJldmlldyhmaWxlKVwiXHJcbiAgICAgICAgW2hyZWZdPVwiZmlsZS50aHVtYlVybCB8fCBmaWxlLnVybFwiXHJcbiAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICB0aXRsZT1cInt7IGxvY2FsZS5wcmV2aWV3RmlsZSB9fVwiXHJcbiAgICAgICAgW25nU3R5bGVdPVwiIShmaWxlLnVybCB8fCBmaWxlLnRodW1iVXJsKSAmJiB7IG9wYWNpdHk6IDAuNSwgJ3BvaW50ZXItZXZlbnRzJzogJ25vbmUnIH1cIlxyXG4gICAgICAgIChjbGljayk9XCJoYW5kbGVQcmV2aWV3KGZpbGUsICRldmVudClcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGkgbnotaWNvbiBuelR5cGU9XCJleWUtb1wiPjwvaT5cclxuICAgICAgPC9hPlxyXG4gICAgICA8aVxyXG4gICAgICAgICpuZ0lmPVwiaWNvbnMuc2hvd1JlbW92ZUljb25cIlxyXG4gICAgICAgIChjbGljayk9XCJoYW5kbGVSZW1vdmUoZmlsZSwgJGV2ZW50KVwiXHJcbiAgICAgICAgbnotaWNvblxyXG4gICAgICAgIG56VHlwZT1cImRlbGV0ZVwiXHJcbiAgICAgICAgdGl0bGU9XCJ7eyBsb2NhbGUucmVtb3ZlRmlsZSB9fVwiXHJcbiAgICAgID48L2k+XHJcbiAgICA8L3NwYW4+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbiAgPG5nLXRlbXBsYXRlICNjbG9zZT5cclxuICAgIDxpXHJcbiAgICAgICpuZ0lmPVwiaWNvbnMuc2hvd1JlbW92ZUljb25cIlxyXG4gICAgICAoY2xpY2spPVwiaGFuZGxlUmVtb3ZlKGZpbGUsICRldmVudClcIlxyXG4gICAgICBuei1pY29uXHJcbiAgICAgIG56VHlwZT1cImNsb3NlXCJcclxuICAgICAgdGl0bGU9XCJ7eyBsb2NhbGUucmVtb3ZlRmlsZSB9fVwiXHJcbiAgICA+PC9pPlxyXG4gIDwvbmctdGVtcGxhdGU+XHJcbiAgPGRpdiAqbmdJZj1cImZpbGUuc3RhdHVzID09PSAndXBsb2FkaW5nJ1wiIGNsYXNzPVwiYW50LXVwbG9hZC1saXN0LWl0ZW0tcHJvZ3Jlc3NcIj5cclxuICAgIDxuei1wcm9ncmVzcyBbbnpQZXJjZW50XT1cImZpbGUucGVyY2VudFwiIFtuelNob3dJbmZvXT1cImZhbHNlXCIgW256U3Ryb2tlV2lkdGhdPVwiMlwiPjwvbnotcHJvZ3Jlc3M+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=
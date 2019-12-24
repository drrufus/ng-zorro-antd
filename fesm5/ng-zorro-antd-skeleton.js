import { __assign, __spread } from 'tslib';
import { ɵɵelementStart, ɵɵelement, ɵɵelementEnd, ɵɵnextContext, ɵɵadvance, ɵɵclassProp, ɵɵstyleProp, ɵɵtemplate, ɵɵproperty, ɵɵelementContainerStart, ɵɵelementContainerEnd, ɵɵprojection, ɵɵdirectiveInject, ChangeDetectorRef, Renderer2, ElementRef, ɵɵdefineComponent, ɵɵallocHostVars, ɵɵNgOnChangesFeature, ɵɵprojectionDef, ɵsetClassMetadata, Component, ChangeDetectionStrategy, ViewEncapsulation, Input, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { toCssPixel } from 'ng-zorro-antd/core';
import { NgIf, NgForOf, CommonModule } from '@angular/common';

function NzSkeletonComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵelement(1, "span", 6);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r268 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵclassProp("ant-skeleton-avatar-lg", ctx_r268.avatar.size === "large")("ant-skeleton-avatar-sm", ctx_r268.avatar.size === "small")("ant-skeleton-avatar-circle", ctx_r268.avatar.shape === "circle")("ant-skeleton-avatar-square", ctx_r268.avatar.shape === "square");
} }
function NzSkeletonComponent_ng_container_0_h3_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "h3", 7);
} if (rf & 2) {
    var ctx_r269 = ɵɵnextContext(2);
    ɵɵstyleProp("width", ctx_r269.toCSSUnit(ctx_r269.title.width));
} }
function NzSkeletonComponent_ng_container_0_ul_4_li_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "li");
} if (rf & 2) {
    var i_r273 = ctx.index;
    var ctx_r271 = ɵɵnextContext(3);
    ɵɵstyleProp("width", ctx_r271.toCSSUnit(ctx_r271.widthList[i_r273]));
} }
function NzSkeletonComponent_ng_container_0_ul_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "ul", 8);
    ɵɵtemplate(1, NzSkeletonComponent_ng_container_0_ul_4_li_1_Template, 1, 1, "li", 9);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r270 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r270.rowsList);
} }
function NzSkeletonComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzSkeletonComponent_ng_container_0_div_1_Template, 2, 4, "div", 1);
    ɵɵelementStart(2, "div", 2);
    ɵɵtemplate(3, NzSkeletonComponent_ng_container_0_h3_3_Template, 1, 1, "h3", 3);
    ɵɵtemplate(4, NzSkeletonComponent_ng_container_0_ul_4_Template, 2, 1, "ul", 4);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r266 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !!ctx_r266.nzAvatar);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !!ctx_r266.nzTitle);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !!ctx_r266.nzParagraph);
} }
function NzSkeletonComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵprojection(1);
    ɵɵelementContainerEnd();
} }
var _c0 = ["*"];
var NzSkeletonComponent = /** @class */ (function () {
    function NzSkeletonComponent(cdr, renderer, elementRef) {
        this.cdr = cdr;
        this.nzActive = false;
        this.nzLoading = true;
        this.nzTitle = true;
        this.nzAvatar = false;
        this.nzParagraph = true;
        this.rowsList = [];
        this.widthList = [];
        renderer.addClass(elementRef.nativeElement, 'ant-skeleton');
    }
    NzSkeletonComponent.prototype.toCSSUnit = function (value) {
        if (value === void 0) { value = ''; }
        return toCssPixel(value);
    };
    NzSkeletonComponent.prototype.getTitleProps = function () {
        var hasAvatar = !!this.nzAvatar;
        var hasParagraph = !!this.nzParagraph;
        var width = '';
        if (!hasAvatar && hasParagraph) {
            width = '38%';
        }
        else if (hasAvatar && hasParagraph) {
            width = '50%';
        }
        return __assign({ width: width }, this.getProps(this.nzTitle));
    };
    NzSkeletonComponent.prototype.getAvatarProps = function () {
        var shape = !!this.nzTitle && !this.nzParagraph ? 'square' : 'circle';
        var size = 'large';
        return __assign({ shape: shape, size: size }, this.getProps(this.nzAvatar));
    };
    NzSkeletonComponent.prototype.getParagraphProps = function () {
        var hasAvatar = !!this.nzAvatar;
        var hasTitle = !!this.nzTitle;
        var basicProps = {};
        // Width
        if (!hasAvatar || !hasTitle) {
            basicProps.width = '61%';
        }
        // Rows
        if (!hasAvatar && hasTitle) {
            basicProps.rows = 3;
        }
        else {
            basicProps.rows = 2;
        }
        return __assign(__assign({}, basicProps), this.getProps(this.nzParagraph));
    };
    NzSkeletonComponent.prototype.getProps = function (prop) {
        return prop && typeof prop === 'object' ? prop : {};
    };
    NzSkeletonComponent.prototype.getWidthList = function () {
        var _a = this.paragraph, width = _a.width, rows = _a.rows;
        var widthList = [];
        if (width && Array.isArray(width)) {
            widthList = width;
        }
        else if (width && !Array.isArray(width)) {
            widthList = [];
            widthList[rows - 1] = width;
        }
        return widthList;
    };
    NzSkeletonComponent.prototype.updateProps = function () {
        this.title = this.getTitleProps();
        this.avatar = this.getAvatarProps();
        this.paragraph = this.getParagraphProps();
        this.rowsList = __spread(Array(this.paragraph.rows));
        this.widthList = this.getWidthList();
        this.cdr.markForCheck();
    };
    NzSkeletonComponent.prototype.ngOnInit = function () {
        this.updateProps();
    };
    NzSkeletonComponent.prototype.ngOnChanges = function (changes) {
        if (changes.nzTitle || changes.nzAvatar || changes.nzParagraph) {
            this.updateProps();
        }
    };
    /** @nocollapse */ NzSkeletonComponent.ɵfac = function NzSkeletonComponent_Factory(t) { return new (t || NzSkeletonComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef)); };
    /** @nocollapse */ NzSkeletonComponent.ɵcmp = ɵɵdefineComponent({ type: NzSkeletonComponent, selectors: [["nz-skeleton"]], hostBindings: function NzSkeletonComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            ɵɵallocHostVars(2);
        } if (rf & 2) {
            ɵɵclassProp("ant-skeleton-with-avatar", !!ctx.nzAvatar)("ant-skeleton-active", ctx.nzActive);
        } }, inputs: { nzActive: "nzActive", nzLoading: "nzLoading", nzTitle: "nzTitle", nzAvatar: "nzAvatar", nzParagraph: "nzParagraph" }, exportAs: ["nzSkeleton"], features: [ɵɵNgOnChangesFeature()], ngContentSelectors: _c0, decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "ant-skeleton-header", 4, "ngIf"], [1, "ant-skeleton-content"], ["class", "ant-skeleton-title", 3, "width", 4, "ngIf"], ["class", "ant-skeleton-paragraph", 4, "ngIf"], [1, "ant-skeleton-header"], [1, "ant-skeleton-avatar"], [1, "ant-skeleton-title"], [1, "ant-skeleton-paragraph"], [3, "width", 4, "ngFor", "ngForOf"]], template: function NzSkeletonComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵtemplate(0, NzSkeletonComponent_ng_container_0_Template, 5, 3, "ng-container", 0);
            ɵɵtemplate(1, NzSkeletonComponent_ng_container_1_Template, 2, 0, "ng-container", 0);
        } if (rf & 2) {
            ɵɵproperty("ngIf", ctx.nzLoading);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", !ctx.nzLoading);
        } }, directives: [NgIf, NgForOf], encapsulation: 2, changeDetection: 0 });
    return NzSkeletonComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzSkeletonComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-skeleton',
                exportAs: 'nzSkeleton',
                templateUrl: './nz-skeleton.component.html',
                host: {
                    '[class.ant-skeleton-with-avatar]': '!!nzAvatar',
                    '[class.ant-skeleton-active]': 'nzActive'
                }
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: Renderer2 }, { type: ElementRef }]; }, { nzActive: [{
            type: Input
        }], nzLoading: [{
            type: Input
        }], nzTitle: [{
            type: Input
        }], nzAvatar: [{
            type: Input
        }], nzParagraph: [{
            type: Input
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzSkeletonModule = /** @class */ (function () {
    function NzSkeletonModule() {
    }
    /** @nocollapse */ NzSkeletonModule.ɵmod = ɵɵdefineNgModule({ type: NzSkeletonModule });
    /** @nocollapse */ NzSkeletonModule.ɵinj = ɵɵdefineInjector({ factory: function NzSkeletonModule_Factory(t) { return new (t || NzSkeletonModule)(); }, imports: [[CommonModule]] });
    return NzSkeletonModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzSkeletonModule, { declarations: [NzSkeletonComponent], imports: [CommonModule], exports: [NzSkeletonComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzSkeletonModule, [{
        type: NgModule,
        args: [{
                declarations: [NzSkeletonComponent],
                imports: [CommonModule],
                exports: [NzSkeletonComponent]
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

export { NzSkeletonComponent, NzSkeletonModule };
//# sourceMappingURL=ng-zorro-antd-skeleton.js.map

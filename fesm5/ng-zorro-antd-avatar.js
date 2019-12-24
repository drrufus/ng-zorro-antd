import { __decorate, __metadata } from 'tslib';
import { Platform, PlatformModule } from '@angular/cdk/platform';
import { ɵɵelement, ɵɵnextContext, ɵɵproperty, ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵelementEnd, ɵɵsanitizeUrl, ɵɵattribute, ɵɵtext, ɵɵadvance, ɵɵtextInterpolate, EventEmitter, ɵɵdirectiveInject, ElementRef, ChangeDetectorRef, Renderer2, ɵɵdefineComponent, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵProvidersFeature, ɵɵNgOnChangesFeature, ɵɵtemplate, ɵsetClassMetadata, Component, ChangeDetectionStrategy, ViewEncapsulation, Input, Output, ViewChild, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NzConfigService, NzUpdateHostClassService, WithConfig } from 'ng-zorro-antd/core';
import { NgIf, NgClass, NgStyle, CommonModule } from '@angular/common';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';

var _c0 = ["textEl"];
function NzAvatarComponent_i_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 3);
} if (rf & 2) {
    var ctx_r372 = ɵɵnextContext();
    ɵɵproperty("nzType", !ctx_r372.oldAPIIcon && ctx_r372.nzIcon)("ngClass", ctx_r372.oldAPIIcon && ctx_r372.nzIcon);
} }
function NzAvatarComponent_img_1_Template(rf, ctx) { if (rf & 1) {
    var _r376 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "img", 4);
    ɵɵlistener("error", function NzAvatarComponent_img_1_Template_img_error_0_listener($event) { ɵɵrestoreView(_r376); var ctx_r375 = ɵɵnextContext(); return ctx_r375.imgError($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r373 = ɵɵnextContext();
    ɵɵproperty("src", ctx_r373.nzSrc, ɵɵsanitizeUrl);
    ɵɵattribute("srcset", ctx_r373.nzSrcSet, ɵɵsanitizeUrl)("alt", ctx_r373.nzAlt);
} }
function NzAvatarComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 5, 6);
    ɵɵtext(2);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r374 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ctx_r374.textStyles);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r374.nzText);
} }
var NZ_CONFIG_COMPONENT_NAME = 'avatar';
var NzAvatarComponent = /** @class */ (function () {
    function NzAvatarComponent(nzConfigService, elementRef, cd, updateHostClassService, renderer, platform) {
        this.nzConfigService = nzConfigService;
        this.elementRef = elementRef;
        this.cd = cd;
        this.updateHostClassService = updateHostClassService;
        this.renderer = renderer;
        this.platform = platform;
        this.nzError = new EventEmitter();
        this.oldAPIIcon = true; // Make the user defined icon compatible to old API. Should be removed in 2.0.
        this.hasText = false;
        this.hasSrc = true;
        this.hasIcon = false;
        this.el = this.elementRef.nativeElement;
        this.prefixCls = 'ant-avatar';
        this.sizeMap = { large: 'lg', small: 'sm' };
    }
    NzAvatarComponent.prototype.setClass = function () {
        var _a;
        var classMap = (_a = {},
            _a[this.prefixCls] = true,
            _a[this.prefixCls + "-" + this.sizeMap[this.nzSize]] = this.sizeMap[this.nzSize],
            _a[this.prefixCls + "-" + this.nzShape] = this.nzShape,
            _a[this.prefixCls + "-icon"] = this.nzIcon,
            _a[this.prefixCls + "-image"] = this.hasSrc // downgrade after image error
        ,
            _a);
        this.updateHostClassService.updateHostClass(this.el, classMap);
        this.cd.detectChanges();
        return this;
    };
    NzAvatarComponent.prototype.imgError = function ($event) {
        this.nzError.emit($event);
        if (!$event.defaultPrevented) {
            this.hasSrc = false;
            this.hasIcon = false;
            this.hasText = false;
            if (this.nzIcon) {
                this.hasIcon = true;
            }
            else if (this.nzText) {
                this.hasText = true;
            }
            this.setClass().notifyCalc();
            this.setSizeStyle();
        }
    };
    NzAvatarComponent.prototype.ngOnChanges = function (changes) {
        if (changes.hasOwnProperty('nzIcon') && changes.nzIcon.currentValue) {
            this.oldAPIIcon = changes.nzIcon.currentValue.indexOf('anticon') > -1;
        }
        this.hasText = !this.nzSrc && !!this.nzText;
        this.hasIcon = !this.nzSrc && !!this.nzIcon;
        this.hasSrc = !!this.nzSrc;
        this.setClass().notifyCalc();
        this.setSizeStyle();
    };
    NzAvatarComponent.prototype.calcStringSize = function () {
        if (!this.hasText) {
            return;
        }
        var childrenWidth = this.textEl.nativeElement.offsetWidth;
        var avatarWidth = this.el.getBoundingClientRect().width;
        var scale = avatarWidth - 8 < childrenWidth ? (avatarWidth - 8) / childrenWidth : 1;
        this.textStyles = {
            transform: "scale(" + scale + ") translateX(-50%)"
        };
        if (typeof this.nzSize === 'number') {
            Object.assign(this.textStyles, {
                lineHeight: this.nzSize + "px"
            });
        }
        this.cd.detectChanges();
    };
    NzAvatarComponent.prototype.notifyCalc = function () {
        var _this = this;
        // If use ngAfterViewChecked, always demands more computations, so......
        if (this.platform.isBrowser) {
            setTimeout(function () {
                _this.calcStringSize();
            });
        }
        return this;
    };
    NzAvatarComponent.prototype.setSizeStyle = function () {
        var size = typeof this.nzSize === 'string' ? this.nzSize : this.nzSize + "px";
        this.renderer.setStyle(this.el, 'width', size);
        this.renderer.setStyle(this.el, 'height', size);
        this.renderer.setStyle(this.el, 'line-height', size);
        if (this.hasIcon) {
            this.renderer.setStyle(this.el, 'font-size', "calc(" + size + " / 2)");
        }
    };
    /** @nocollapse */ NzAvatarComponent.ɵfac = function NzAvatarComponent_Factory(t) { return new (t || NzAvatarComponent)(ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzUpdateHostClassService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(Platform)); };
    /** @nocollapse */ NzAvatarComponent.ɵcmp = ɵɵdefineComponent({ type: NzAvatarComponent, selectors: [["nz-avatar"]], viewQuery: function NzAvatarComponent_Query(rf, ctx) { if (rf & 1) {
            ɵɵviewQuery(_c0, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.textEl = _t.first);
        } }, inputs: { nzShape: "nzShape", nzSize: "nzSize", nzText: "nzText", nzSrc: "nzSrc", nzSrcSet: "nzSrcSet", nzAlt: "nzAlt", nzIcon: "nzIcon" }, outputs: { nzError: "nzError" }, exportAs: ["nzAvatar"], features: [ɵɵProvidersFeature([NzUpdateHostClassService]), ɵɵNgOnChangesFeature()], decls: 3, vars: 3, consts: [["nz-icon", "", 3, "nzType", "ngClass", 4, "ngIf"], [3, "src", "error", 4, "ngIf"], ["class", "ant-avatar-string", 3, "ngStyle", 4, "ngIf"], ["nz-icon", "", 3, "nzType", "ngClass"], [3, "src", "error"], [1, "ant-avatar-string", 3, "ngStyle"], ["textEl", ""]], template: function NzAvatarComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵtemplate(0, NzAvatarComponent_i_0_Template, 1, 2, "i", 0);
            ɵɵtemplate(1, NzAvatarComponent_img_1_Template, 1, 3, "img", 1);
            ɵɵtemplate(2, NzAvatarComponent_span_2_Template, 3, 2, "span", 2);
        } if (rf & 2) {
            ɵɵproperty("ngIf", ctx.nzIcon && ctx.hasIcon);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.nzSrc && ctx.hasSrc);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.nzText && ctx.hasText);
        } }, directives: [NgIf, NzIconDirective, NgClass, NgStyle], encapsulation: 2, changeDetection: 0 });
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, 'circle'),
        __metadata("design:type", String)
    ], NzAvatarComponent.prototype, "nzShape", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, 'default'),
        __metadata("design:type", Object)
    ], NzAvatarComponent.prototype, "nzSize", void 0);
    return NzAvatarComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzAvatarComponent, [{
        type: Component,
        args: [{
                selector: 'nz-avatar',
                exportAs: 'nzAvatar',
                templateUrl: './nz-avatar.component.html',
                providers: [NzUpdateHostClassService],
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: NzConfigService }, { type: ElementRef }, { type: ChangeDetectorRef }, { type: NzUpdateHostClassService }, { type: Renderer2 }, { type: Platform }]; }, { nzShape: [{
            type: Input
        }], nzSize: [{
            type: Input
        }], nzText: [{
            type: Input
        }], nzSrc: [{
            type: Input
        }], nzSrcSet: [{
            type: Input
        }], nzAlt: [{
            type: Input
        }], nzIcon: [{
            type: Input
        }], nzError: [{
            type: Output
        }], textEl: [{
            type: ViewChild,
            args: ['textEl', { static: false }]
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzAvatarModule = /** @class */ (function () {
    function NzAvatarModule() {
    }
    /** @nocollapse */ NzAvatarModule.ɵmod = ɵɵdefineNgModule({ type: NzAvatarModule });
    /** @nocollapse */ NzAvatarModule.ɵinj = ɵɵdefineInjector({ factory: function NzAvatarModule_Factory(t) { return new (t || NzAvatarModule)(); }, imports: [[CommonModule, NzIconModule, PlatformModule]] });
    return NzAvatarModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzAvatarModule, { declarations: [NzAvatarComponent], imports: [CommonModule, NzIconModule, PlatformModule], exports: [NzAvatarComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzAvatarModule, [{
        type: NgModule,
        args: [{
                declarations: [NzAvatarComponent],
                exports: [NzAvatarComponent],
                imports: [CommonModule, NzIconModule, PlatformModule]
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

export { NzAvatarComponent, NzAvatarModule };
//# sourceMappingURL=ng-zorro-antd-avatar.js.map

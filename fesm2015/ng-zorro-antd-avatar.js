import { __decorate, __metadata } from 'tslib';
import { Platform, PlatformModule } from '@angular/cdk/platform';
import { ɵɵelement, ɵɵnextContext, ɵɵproperty, ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵelementEnd, ɵɵsanitizeUrl, ɵɵattribute, ɵɵtext, ɵɵadvance, ɵɵtextInterpolate, EventEmitter, ɵɵdirectiveInject, ElementRef, ChangeDetectorRef, Renderer2, ɵɵdefineComponent, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵProvidersFeature, ɵɵNgOnChangesFeature, ɵɵtemplate, ɵsetClassMetadata, Component, ChangeDetectionStrategy, ViewEncapsulation, Input, Output, ViewChild, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NzConfigService, NzUpdateHostClassService, WithConfig } from 'ng-zorro-antd/core';
import { NgIf, NgClass, NgStyle, CommonModule } from '@angular/common';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';

const _c0 = ["textEl"];
function NzAvatarComponent_i_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 3);
} if (rf & 2) {
    const ctx_r366 = ɵɵnextContext();
    ɵɵproperty("nzType", !ctx_r366.oldAPIIcon && ctx_r366.nzIcon)("ngClass", ctx_r366.oldAPIIcon && ctx_r366.nzIcon);
} }
function NzAvatarComponent_img_1_Template(rf, ctx) { if (rf & 1) {
    const _r370 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "img", 4);
    ɵɵlistener("error", function NzAvatarComponent_img_1_Template_img_error_0_listener($event) { ɵɵrestoreView(_r370); const ctx_r369 = ɵɵnextContext(); return ctx_r369.imgError($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r367 = ɵɵnextContext();
    ɵɵproperty("src", ctx_r367.nzSrc, ɵɵsanitizeUrl);
    ɵɵattribute("srcset", ctx_r367.nzSrcSet, ɵɵsanitizeUrl)("alt", ctx_r367.nzAlt);
} }
function NzAvatarComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 5, 6);
    ɵɵtext(2);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r368 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ctx_r368.textStyles);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r368.nzText);
} }
const NZ_CONFIG_COMPONENT_NAME = 'avatar';
class NzAvatarComponent {
    constructor(nzConfigService, elementRef, cd, updateHostClassService, renderer, platform) {
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
    setClass() {
        const classMap = {
            [this.prefixCls]: true,
            [`${this.prefixCls}-${this.sizeMap[this.nzSize]}`]: this.sizeMap[this.nzSize],
            [`${this.prefixCls}-${this.nzShape}`]: this.nzShape,
            [`${this.prefixCls}-icon`]: this.nzIcon,
            [`${this.prefixCls}-image`]: this.hasSrc // downgrade after image error
        };
        this.updateHostClassService.updateHostClass(this.el, classMap);
        this.cd.detectChanges();
        return this;
    }
    imgError($event) {
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
    }
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('nzIcon') && changes.nzIcon.currentValue) {
            this.oldAPIIcon = changes.nzIcon.currentValue.indexOf('anticon') > -1;
        }
        this.hasText = !this.nzSrc && !!this.nzText;
        this.hasIcon = !this.nzSrc && !!this.nzIcon;
        this.hasSrc = !!this.nzSrc;
        this.setClass().notifyCalc();
        this.setSizeStyle();
    }
    calcStringSize() {
        if (!this.hasText) {
            return;
        }
        const childrenWidth = this.textEl.nativeElement.offsetWidth;
        const avatarWidth = this.el.getBoundingClientRect().width;
        const scale = avatarWidth - 8 < childrenWidth ? (avatarWidth - 8) / childrenWidth : 1;
        this.textStyles = {
            transform: `scale(${scale}) translateX(-50%)`
        };
        if (typeof this.nzSize === 'number') {
            Object.assign(this.textStyles, {
                lineHeight: `${this.nzSize}px`
            });
        }
        this.cd.detectChanges();
    }
    notifyCalc() {
        // If use ngAfterViewChecked, always demands more computations, so......
        if (this.platform.isBrowser) {
            setTimeout(() => {
                this.calcStringSize();
            });
        }
        return this;
    }
    setSizeStyle() {
        const size = typeof this.nzSize === 'string' ? this.nzSize : `${this.nzSize}px`;
        this.renderer.setStyle(this.el, 'width', size);
        this.renderer.setStyle(this.el, 'height', size);
        this.renderer.setStyle(this.el, 'line-height', size);
        if (this.hasIcon) {
            this.renderer.setStyle(this.el, 'font-size', `calc(${size} / 2)`);
        }
    }
}
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
class NzAvatarModule {
}
/** @nocollapse */ NzAvatarModule.ɵmod = ɵɵdefineNgModule({ type: NzAvatarModule });
/** @nocollapse */ NzAvatarModule.ɵinj = ɵɵdefineInjector({ factory: function NzAvatarModule_Factory(t) { return new (t || NzAvatarModule)(); }, imports: [[CommonModule, NzIconModule, PlatformModule]] });
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

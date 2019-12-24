import { PlatformModule } from '@angular/cdk/platform';
import { InjectionToken, ɵɵinject, RendererFactory2, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, Optional, Inject, ɵɵdirectiveInject, ElementRef, Renderer2, ɵɵdefineDirective, ɵɵallocHostVars, ɵɵclassProp, ɵɵProvidersFeature, ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature, Directive, Input, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { __extends, __spread, __decorate, __metadata } from 'tslib';
import { IconService, IconDirective } from '@ant-design/icons-angular';
import { warnDeprecation, warn, NzConfigService, NzUpdateHostClassService, InputBoolean } from 'ng-zorro-antd/core';
import { DOCUMENT } from '@angular/common';
import { HttpBackend } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { BarsOutline, CalendarOutline, CaretUpFill, CaretUpOutline, CaretDownFill, CaretDownOutline, CheckCircleFill, CheckCircleOutline, CheckOutline, ClockCircleOutline, CloseCircleOutline, CloseCircleFill, CloseOutline, CopyOutline, DoubleLeftOutline, DoubleRightOutline, DownOutline, EditOutline, EllipsisOutline, ExclamationCircleFill, ExclamationCircleOutline, EyeOutline, FileFill, FileOutline, FilterFill, InfoCircleFill, InfoCircleOutline, LeftOutline, LoadingOutline, PaperClipOutline, QuestionCircleOutline, RightOutline, StarFill, SearchOutline, UploadOutline, UpOutline } from '@ant-design/icons-angular/icons';
import { Subject } from 'rxjs';

var NZ_ICONS = new InjectionToken('nz_icons');
var NZ_ICON_DEFAULT_TWOTONE_COLOR = new InjectionToken('nz_icon_default_twotone_color');
var DEFAULT_TWOTONE_COLOR = '#1890ff';
var NZ_ICONS_USED_BY_ZORRO = [
    BarsOutline,
    CalendarOutline,
    CaretUpFill,
    CaretUpOutline,
    CaretDownFill,
    CaretDownOutline,
    CheckCircleFill,
    CheckCircleOutline,
    CheckOutline,
    ClockCircleOutline,
    CloseCircleOutline,
    CloseCircleFill,
    CloseOutline,
    CopyOutline,
    DoubleLeftOutline,
    DoubleRightOutline,
    DownOutline,
    EditOutline,
    EllipsisOutline,
    ExclamationCircleFill,
    ExclamationCircleOutline,
    EyeOutline,
    FileFill,
    FileOutline,
    FilterFill,
    InfoCircleFill,
    InfoCircleOutline,
    LeftOutline,
    LoadingOutline,
    PaperClipOutline,
    QuestionCircleOutline,
    RightOutline,
    StarFill,
    SearchOutline,
    StarFill,
    UploadOutline,
    UpOutline
];
/**
 * It should be a global singleton, otherwise registered icons could not be found.
 */
var NzIconService = /** @class */ (function (_super) {
    __extends(NzIconService, _super);
    function NzIconService(rendererFactory, sanitizer, nzConfigService, handler, 
    // tslint:disable-next-line:no-any
    _document, icons, 
    /**
     * @deprecated
     * @inner
     */
    legacyDefaultTwotoneColor) {
        var _this = _super.call(this, rendererFactory, handler, _document, sanitizer) || this;
        _this.nzConfigService = nzConfigService;
        _this.legacyDefaultTwotoneColor = legacyDefaultTwotoneColor;
        _this.configUpdated$ = new Subject();
        _this.iconfontCache = new Set();
        _this.onConfigChange();
        _this.addIcon.apply(_this, __spread(NZ_ICONS_USED_BY_ZORRO, (icons || [])));
        if (legacyDefaultTwotoneColor) {
            warnDeprecation("'NZ_ICON_DEFAULT_TWOTONE_COLOR' is deprecated and will be removed in 9.0.0. Please use 'NZ_CONFIG' instead!");
        }
        _this.configDefaultTwotoneColor();
        _this.configDefaultTheme();
        return _this;
    }
    NzIconService.prototype.normalizeSvgElement = function (svg) {
        if (!svg.getAttribute('viewBox')) {
            this._renderer.setAttribute(svg, 'viewBox', '0 0 1024 1024');
        }
        if (!svg.getAttribute('width') || !svg.getAttribute('height')) {
            this._renderer.setAttribute(svg, 'width', '1em');
            this._renderer.setAttribute(svg, 'height', '1em');
        }
        if (!svg.getAttribute('fill')) {
            this._renderer.setAttribute(svg, 'fill', 'currentColor');
        }
    };
    NzIconService.prototype.fetchFromIconfont = function (opt) {
        var scriptUrl = opt.scriptUrl;
        if (this._document && !this.iconfontCache.has(scriptUrl)) {
            var script = this._renderer.createElement('script');
            this._renderer.setAttribute(script, 'src', scriptUrl);
            this._renderer.setAttribute(script, 'data-namespace', scriptUrl.replace(/^(https?|http):/g, ''));
            this._renderer.appendChild(this._document.body, script);
            this.iconfontCache.add(scriptUrl);
        }
    };
    NzIconService.prototype.createIconfontIcon = function (type) {
        return this._createSVGElementFromString("<svg><use xlink:href=\"" + type + "\"></svg>");
    };
    NzIconService.prototype.onConfigChange = function () {
        var _this = this;
        this.nzConfigService.getConfigChangeEventForComponent('icon').subscribe(function () {
            _this.configDefaultTwotoneColor();
            _this.configDefaultTheme();
            _this.configUpdated$.next();
        });
    };
    NzIconService.prototype.configDefaultTheme = function () {
        var iconConfig = this.getConfig();
        this.defaultTheme = iconConfig.nzTheme || 'outline';
    };
    NzIconService.prototype.configDefaultTwotoneColor = function () {
        var iconConfig = this.getConfig();
        var defaultTwotoneColor = iconConfig.nzTwotoneColor || this.legacyDefaultTwotoneColor;
        var primaryColor = DEFAULT_TWOTONE_COLOR;
        if (defaultTwotoneColor) {
            if (defaultTwotoneColor.startsWith('#')) {
                primaryColor = defaultTwotoneColor;
            }
            else {
                warn('Twotone color must be a hex color!');
            }
        }
        this.twoToneColor = { primaryColor: primaryColor };
    };
    NzIconService.prototype.getConfig = function () {
        return this.nzConfigService.getConfigForComponent('icon') || {};
    };
    /** @nocollapse */ NzIconService.ɵfac = function NzIconService_Factory(t) { return new (t || NzIconService)(ɵɵinject(RendererFactory2), ɵɵinject(DomSanitizer), ɵɵinject(NzConfigService), ɵɵinject(HttpBackend, 8), ɵɵinject(DOCUMENT, 8), ɵɵinject(NZ_ICONS, 8), ɵɵinject(NZ_ICON_DEFAULT_TWOTONE_COLOR, 8)); };
    /** @nocollapse */ NzIconService.ɵprov = ɵɵdefineInjectable({ token: NzIconService, factory: NzIconService.ɵfac, providedIn: 'root' });
    return NzIconService;
}(IconService));
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzIconService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: RendererFactory2 }, { type: DomSanitizer }, { type: NzConfigService }, { type: HttpBackend, decorators: [{
                type: Optional
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [NZ_ICONS]
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [NZ_ICON_DEFAULT_TWOTONE_COLOR]
            }] }]; }, null); })();

/**
 * This directive extends IconDirective to provide:
 *
 * - IconFont support
 * - spinning
 * - old API compatibility
 *
 * @break-changes
 *
 * - old API compatibility, icon class names would not be supported.
 * - properties that not started with `nz`.
 */
var NzIconDirective = /** @class */ (function (_super) {
    __extends(NzIconDirective, _super);
    function NzIconDirective(elementRef, iconService, renderer, nzUpdateHostClassService) {
        var _this = _super.call(this, iconService, elementRef, renderer) || this;
        _this.iconService = iconService;
        _this.renderer = renderer;
        _this.nzUpdateHostClassService = nzUpdateHostClassService;
        _this.nzRotate = 0;
        _this.spin = false;
        _this.el = elementRef.nativeElement;
        return _this;
    }
    Object.defineProperty(NzIconDirective.prototype, "nzSpin", {
        set: function (value) {
            this.spin = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzIconDirective.prototype, "nzType", {
        set: function (value) {
            this.type = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzIconDirective.prototype, "nzTheme", {
        set: function (value) {
            this.theme = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzIconDirective.prototype, "nzTwotoneColor", {
        set: function (value) {
            this.twoToneColor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzIconDirective.prototype, "nzIconfont", {
        set: function (value) {
            this.iconfont = value;
        },
        enumerable: true,
        configurable: true
    });
    NzIconDirective.prototype.ngOnChanges = function (changes) {
        var nzType = changes.nzType, nzTwotoneColor = changes.nzTwotoneColor, nzSpin = changes.nzSpin, nzTheme = changes.nzTheme, nzRotate = changes.nzRotate;
        if (nzType || nzTwotoneColor || nzSpin || nzTheme) {
            this.changeIcon2();
        }
        else if (nzRotate) {
            this.handleRotate(this.el.firstChild);
        }
        else {
            this._setSVGElement(this.iconService.createIconfontIcon("#" + this.iconfont));
        }
    };
    NzIconDirective.prototype.ngOnInit = function () {
        this.renderer.setAttribute(this.el, 'class', ("anticon " + this.el.className).trim());
    };
    /**
     * If custom content is provided, try to normalize SVG elements.
     */
    NzIconDirective.prototype.ngAfterContentChecked = function () {
        if (!this.type) {
            var children = this.el.children;
            var length_1 = children.length;
            if (!this.type && children.length) {
                while (length_1--) {
                    var child = children[length_1];
                    if (child.tagName.toLowerCase() === 'svg') {
                        this.iconService.normalizeSvgElement(child);
                    }
                }
            }
        }
    };
    /**
     * Replacement of `changeIcon` for more modifications.
     */
    NzIconDirective.prototype.changeIcon2 = function () {
        var _this = this;
        this.setClassName();
        this._changeIcon().then(function (svgOrRemove) {
            if (svgOrRemove) {
                _this.setSVGData(svgOrRemove);
                _this.handleSpin(svgOrRemove);
                _this.handleRotate(svgOrRemove);
            }
        });
    };
    NzIconDirective.prototype.handleSpin = function (svg) {
        if (this.spin || this.type === 'loading') {
            this.renderer.addClass(svg, 'anticon-spin');
        }
        else {
            this.renderer.removeClass(svg, 'anticon-spin');
        }
    };
    NzIconDirective.prototype.handleRotate = function (svg) {
        if (this.nzRotate) {
            this.renderer.setAttribute(svg, 'style', "transform: rotate(" + this.nzRotate + "deg)");
        }
        else {
            this.renderer.removeAttribute(svg, 'style');
        }
    };
    NzIconDirective.prototype.setClassName = function () {
        var _a;
        this.nzUpdateHostClassService.updateHostClass(this.el, (_a = {},
            _a["anticon-" + this.type] = true,
            _a));
    };
    NzIconDirective.prototype.setSVGData = function (svg) {
        this.renderer.setAttribute(svg, 'data-icon', this.type);
        this.renderer.setAttribute(svg, 'aria-hidden', 'true');
    };
    /** @nocollapse */ NzIconDirective.ɵfac = function NzIconDirective_Factory(t) { return new (t || NzIconDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NzIconService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NzUpdateHostClassService)); };
    /** @nocollapse */ NzIconDirective.ɵdir = ɵɵdefineDirective({ type: NzIconDirective, selectors: [["", "nz-icon", ""]], hostBindings: function NzIconDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            ɵɵallocHostVars(1);
        } if (rf & 2) {
            ɵɵclassProp("anticon", true);
        } }, inputs: { nzSpin: "nzSpin", nzRotate: "nzRotate", nzType: "nzType", nzTheme: "nzTheme", nzTwotoneColor: "nzTwotoneColor", nzIconfont: "nzIconfont" }, exportAs: ["nzIcon"], features: [ɵɵProvidersFeature([NzUpdateHostClassService]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature()] });
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], NzIconDirective.prototype, "nzSpin", null);
    return NzIconDirective;
}(IconDirective));
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzIconDirective, [{
        type: Directive,
        args: [{
                selector: '[nz-icon]',
                exportAs: 'nzIcon',
                providers: [NzUpdateHostClassService],
                host: {
                    '[class.anticon]': 'true'
                }
            }]
    }], function () { return [{ type: ElementRef }, { type: NzIconService }, { type: Renderer2 }, { type: NzUpdateHostClassService }]; }, { nzSpin: [{
            type: Input
        }], nzRotate: [{
            type: Input
        }], nzType: [{
            type: Input
        }], nzTheme: [{
            type: Input
        }], nzTwotoneColor: [{
            type: Input
        }], nzIconfont: [{
            type: Input
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzIconModule = /** @class */ (function () {
    function NzIconModule() {
    }
    /** @nocollapse */ NzIconModule.ɵmod = ɵɵdefineNgModule({ type: NzIconModule });
    /** @nocollapse */ NzIconModule.ɵinj = ɵɵdefineInjector({ factory: function NzIconModule_Factory(t) { return new (t || NzIconModule)(); }, imports: [[PlatformModule]] });
    return NzIconModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzIconModule, { declarations: [NzIconDirective], imports: [PlatformModule], exports: [NzIconDirective] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzIconModule, [{
        type: NgModule,
        args: [{
                exports: [NzIconDirective],
                declarations: [NzIconDirective],
                imports: [PlatformModule]
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

export { DEFAULT_TWOTONE_COLOR, NZ_ICONS, NZ_ICONS_USED_BY_ZORRO, NZ_ICON_DEFAULT_TWOTONE_COLOR, NzIconDirective, NzIconModule, NzIconService };
//# sourceMappingURL=ng-zorro-antd-icon.js.map

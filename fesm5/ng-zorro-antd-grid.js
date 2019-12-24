import { ɵɵdirectiveInject, ElementRef, Renderer2, NgZone, ɵɵdefineDirective, ɵɵProvidersFeature, ɵɵNgOnChangesFeature, ɵsetClassMetadata, Directive, Input, Optional, Host, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { MediaMatcher, LayoutModule } from '@angular/cdk/layout';
import { Platform, PlatformModule } from '@angular/cdk/platform';
import { responsiveMap, NzUpdateHostClassService, NzDomEventService, isNotNil } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import { takeUntil, finalize, startWith } from 'rxjs/operators';
import { __assign } from 'tslib';
import { CommonModule } from '@angular/common';

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzRowDirective = /** @class */ (function () {
    function NzRowDirective(elementRef, renderer, nzUpdateHostClassService, mediaMatcher, ngZone, platform, nzDomEventService) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.mediaMatcher = mediaMatcher;
        this.ngZone = ngZone;
        this.platform = platform;
        this.nzDomEventService = nzDomEventService;
        this.nzAlign = 'top';
        this.nzJustify = 'start';
        this.el = this.elementRef.nativeElement;
        this.prefixCls = 'ant-row';
        this.actualGutter$ = new Subject();
        this.destroy$ = new Subject();
    }
    NzRowDirective.prototype.calculateGutter = function () {
        if (typeof this.nzGutter !== 'object') {
            return this.nzGutter;
        }
        else if (this.breakPoint && this.nzGutter[this.breakPoint]) {
            return this.nzGutter[this.breakPoint];
        }
        else {
            return 0;
        }
    };
    NzRowDirective.prototype.updateGutter = function () {
        var actualGutter = this.calculateGutter();
        if (this.actualGutter !== actualGutter) {
            this.actualGutter = actualGutter;
            this.actualGutter$.next(this.actualGutter);
            this.renderer.setStyle(this.el, 'margin-left', "-" + this.actualGutter / 2 + "px");
            this.renderer.setStyle(this.el, 'margin-right', "-" + this.actualGutter / 2 + "px");
        }
    };
    NzRowDirective.prototype.watchMedia = function () {
        var _this = this;
        Object.keys(responsiveMap).map(function (screen) {
            var castBP = screen;
            var matchBelow = _this.mediaMatcher.matchMedia(responsiveMap[castBP]).matches;
            if (matchBelow) {
                _this.breakPoint = castBP;
            }
        });
        this.updateGutter();
    };
    /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289*/
    NzRowDirective.prototype.setClassMap = function () {
        var _a;
        var classMap = (_a = {},
            _a["" + this.prefixCls] = !this.nzType,
            _a[this.prefixCls + "-" + this.nzType] = this.nzType,
            _a[this.prefixCls + "-" + this.nzType + "-" + this.nzAlign] = this.nzType && this.nzAlign,
            _a[this.prefixCls + "-" + this.nzType + "-" + this.nzJustify] = this.nzType && this.nzJustify,
            _a);
        this.nzUpdateHostClassService.updateHostClass(this.el, classMap);
    };
    NzRowDirective.prototype.ngOnInit = function () {
        this.setClassMap();
        this.watchMedia();
    };
    NzRowDirective.prototype.ngOnChanges = function (changes) {
        if (changes.nzType || changes.nzAlign || changes.nzJustify) {
            this.setClassMap();
        }
        if (changes.nzGutter) {
            this.updateGutter();
        }
    };
    NzRowDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.platform.isBrowser) {
            this.nzDomEventService
                .registerResizeListener()
                .pipe(takeUntil(this.destroy$), finalize(function () { return _this.nzDomEventService.unregisterResizeListener(); }))
                .subscribe(function () { return _this.watchMedia(); });
        }
    };
    NzRowDirective.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /** @nocollapse */ NzRowDirective.ɵfac = function NzRowDirective_Factory(t) { return new (t || NzRowDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NzUpdateHostClassService), ɵɵdirectiveInject(MediaMatcher), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(NzDomEventService)); };
    /** @nocollapse */ NzRowDirective.ɵdir = ɵɵdefineDirective({ type: NzRowDirective, selectors: [["", "nz-row", ""], ["nz-row"]], inputs: { nzType: "nzType", nzAlign: "nzAlign", nzJustify: "nzJustify", nzGutter: "nzGutter" }, exportAs: ["nzRow"], features: [ɵɵProvidersFeature([NzUpdateHostClassService]), ɵɵNgOnChangesFeature()] });
    return NzRowDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzRowDirective, [{
        type: Directive,
        args: [{
                selector: '[nz-row],nz-row',
                exportAs: 'nzRow',
                providers: [NzUpdateHostClassService]
            }]
    }], function () { return [{ type: ElementRef }, { type: Renderer2 }, { type: NzUpdateHostClassService }, { type: MediaMatcher }, { type: NgZone }, { type: Platform }, { type: NzDomEventService }]; }, { nzType: [{
            type: Input
        }], nzAlign: [{
            type: Input
        }], nzJustify: [{
            type: Input
        }], nzGutter: [{
            type: Input
        }] }); })();

var NzColDirective = /** @class */ (function () {
    function NzColDirective(nzUpdateHostClassService, elementRef, nzRowDirective, renderer) {
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.elementRef = elementRef;
        this.nzRowDirective = nzRowDirective;
        this.renderer = renderer;
        this.el = this.elementRef.nativeElement;
        this.prefixCls = 'ant-col';
        this.destroy$ = new Subject();
    }
    /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289*/
    NzColDirective.prototype.setClassMap = function () {
        var _a;
        var classMap = __assign((_a = {}, _a["" + this.prefixCls] = true, _a[this.prefixCls + "-" + this.nzSpan] = isNotNil(this.nzSpan), _a[this.prefixCls + "-order-" + this.nzOrder] = isNotNil(this.nzOrder), _a[this.prefixCls + "-offset-" + this.nzOffset] = isNotNil(this.nzOffset), _a[this.prefixCls + "-pull-" + this.nzPull] = isNotNil(this.nzPull), _a[this.prefixCls + "-push-" + this.nzPush] = isNotNil(this.nzPush), _a), this.generateClass());
        this.nzUpdateHostClassService.updateHostClass(this.el, classMap);
    };
    NzColDirective.prototype.generateClass = function () {
        var _this = this;
        var listOfSizeInputName = ['nzXs', 'nzSm', 'nzMd', 'nzLg', 'nzXl', 'nzXXl'];
        var listClassMap = {};
        listOfSizeInputName.forEach(function (name) {
            var sizeName = name.replace('nz', '').toLowerCase();
            if (isNotNil(_this[name])) {
                if (typeof _this[name] === 'number' || typeof _this[name] === 'string') {
                    listClassMap[_this.prefixCls + "-" + sizeName + "-" + _this[name]] = true;
                }
                else {
                    var embedded_1 = _this[name];
                    var prefixArray = ['span', 'pull', 'push', 'offset', 'order'];
                    prefixArray.forEach(function (prefix) {
                        var prefixClass = prefix === 'span' ? '-' : "-" + prefix + "-";
                        listClassMap[_this.prefixCls + "-" + sizeName + prefixClass + embedded_1[prefix]] = embedded_1 && isNotNil(embedded_1[prefix]);
                    });
                }
            }
        });
        return listClassMap;
    };
    NzColDirective.prototype.ngOnChanges = function () {
        this.setClassMap();
    };
    NzColDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.nzRowDirective) {
            this.nzRowDirective.actualGutter$
                .pipe(startWith(this.nzRowDirective.actualGutter), takeUntil(this.destroy$))
                .subscribe(function (actualGutter) {
                _this.renderer.setStyle(_this.el, 'padding-left', actualGutter / 2 + "px");
                _this.renderer.setStyle(_this.el, 'padding-right', actualGutter / 2 + "px");
            });
        }
    };
    NzColDirective.prototype.ngOnInit = function () {
        this.setClassMap();
    };
    NzColDirective.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /** @nocollapse */ NzColDirective.ɵfac = function NzColDirective_Factory(t) { return new (t || NzColDirective)(ɵɵdirectiveInject(NzUpdateHostClassService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NzRowDirective, 9), ɵɵdirectiveInject(Renderer2)); };
    /** @nocollapse */ NzColDirective.ɵdir = ɵɵdefineDirective({ type: NzColDirective, selectors: [["", "nz-col", ""], ["nz-col"]], inputs: { nzSpan: "nzSpan", nzOrder: "nzOrder", nzOffset: "nzOffset", nzPush: "nzPush", nzPull: "nzPull", nzXs: "nzXs", nzSm: "nzSm", nzMd: "nzMd", nzLg: "nzLg", nzXl: "nzXl", nzXXl: "nzXXl" }, exportAs: ["nzCol"], features: [ɵɵProvidersFeature([NzUpdateHostClassService]), ɵɵNgOnChangesFeature()] });
    return NzColDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzColDirective, [{
        type: Directive,
        args: [{
                selector: '[nz-col],nz-col',
                exportAs: 'nzCol',
                providers: [NzUpdateHostClassService]
            }]
    }], function () { return [{ type: NzUpdateHostClassService }, { type: ElementRef }, { type: NzRowDirective, decorators: [{
                type: Optional
            }, {
                type: Host
            }] }, { type: Renderer2 }]; }, { nzSpan: [{
            type: Input
        }], nzOrder: [{
            type: Input
        }], nzOffset: [{
            type: Input
        }], nzPush: [{
            type: Input
        }], nzPull: [{
            type: Input
        }], nzXs: [{
            type: Input
        }], nzSm: [{
            type: Input
        }], nzMd: [{
            type: Input
        }], nzLg: [{
            type: Input
        }], nzXl: [{
            type: Input
        }], nzXXl: [{
            type: Input
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzGridModule = /** @class */ (function () {
    function NzGridModule() {
    }
    /** @nocollapse */ NzGridModule.ɵmod = ɵɵdefineNgModule({ type: NzGridModule });
    /** @nocollapse */ NzGridModule.ɵinj = ɵɵdefineInjector({ factory: function NzGridModule_Factory(t) { return new (t || NzGridModule)(); }, imports: [[CommonModule, LayoutModule, PlatformModule]] });
    return NzGridModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzGridModule, { declarations: [NzColDirective, NzRowDirective], imports: [CommonModule, LayoutModule, PlatformModule], exports: [NzColDirective, NzRowDirective] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzGridModule, [{
        type: NgModule,
        args: [{
                declarations: [NzColDirective, NzRowDirective],
                exports: [NzColDirective, NzRowDirective],
                imports: [CommonModule, LayoutModule, PlatformModule]
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

export { NzColDirective, NzGridModule, NzRowDirective };
//# sourceMappingURL=ng-zorro-antd-grid.js.map

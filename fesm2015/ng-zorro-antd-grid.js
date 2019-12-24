import { ɵɵdirectiveInject, ElementRef, Renderer2, NgZone, ɵɵdefineDirective, ɵɵProvidersFeature, ɵɵNgOnChangesFeature, ɵsetClassMetadata, Directive, Input, Optional, Host, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { MediaMatcher, LayoutModule } from '@angular/cdk/layout';
import { Platform, PlatformModule } from '@angular/cdk/platform';
import { responsiveMap, NzUpdateHostClassService, NzDomEventService, isNotNil } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import { takeUntil, finalize, startWith } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzRowDirective {
    constructor(elementRef, renderer, nzUpdateHostClassService, mediaMatcher, ngZone, platform, nzDomEventService) {
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
    calculateGutter() {
        if (typeof this.nzGutter !== 'object') {
            return this.nzGutter;
        }
        else if (this.breakPoint && this.nzGutter[this.breakPoint]) {
            return this.nzGutter[this.breakPoint];
        }
        else {
            return 0;
        }
    }
    updateGutter() {
        const actualGutter = this.calculateGutter();
        if (this.actualGutter !== actualGutter) {
            this.actualGutter = actualGutter;
            this.actualGutter$.next(this.actualGutter);
            this.renderer.setStyle(this.el, 'margin-left', `-${this.actualGutter / 2}px`);
            this.renderer.setStyle(this.el, 'margin-right', `-${this.actualGutter / 2}px`);
        }
    }
    watchMedia() {
        Object.keys(responsiveMap).map((screen) => {
            const castBP = screen;
            const matchBelow = this.mediaMatcher.matchMedia(responsiveMap[castBP]).matches;
            if (matchBelow) {
                this.breakPoint = castBP;
            }
        });
        this.updateGutter();
    }
    /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289*/
    setClassMap() {
        const classMap = {
            [`${this.prefixCls}`]: !this.nzType,
            [`${this.prefixCls}-${this.nzType}`]: this.nzType,
            [`${this.prefixCls}-${this.nzType}-${this.nzAlign}`]: this.nzType && this.nzAlign,
            [`${this.prefixCls}-${this.nzType}-${this.nzJustify}`]: this.nzType && this.nzJustify
        };
        this.nzUpdateHostClassService.updateHostClass(this.el, classMap);
    }
    ngOnInit() {
        this.setClassMap();
        this.watchMedia();
    }
    ngOnChanges(changes) {
        if (changes.nzType || changes.nzAlign || changes.nzJustify) {
            this.setClassMap();
        }
        if (changes.nzGutter) {
            this.updateGutter();
        }
    }
    ngAfterViewInit() {
        if (this.platform.isBrowser) {
            this.nzDomEventService
                .registerResizeListener()
                .pipe(takeUntil(this.destroy$), finalize(() => this.nzDomEventService.unregisterResizeListener()))
                .subscribe(() => this.watchMedia());
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
/** @nocollapse */ NzRowDirective.ɵfac = function NzRowDirective_Factory(t) { return new (t || NzRowDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NzUpdateHostClassService), ɵɵdirectiveInject(MediaMatcher), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(NzDomEventService)); };
/** @nocollapse */ NzRowDirective.ɵdir = ɵɵdefineDirective({ type: NzRowDirective, selectors: [["", "nz-row", ""], ["nz-row"]], inputs: { nzType: "nzType", nzAlign: "nzAlign", nzJustify: "nzJustify", nzGutter: "nzGutter" }, exportAs: ["nzRow"], features: [ɵɵProvidersFeature([NzUpdateHostClassService]), ɵɵNgOnChangesFeature()] });
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

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzColDirective {
    constructor(nzUpdateHostClassService, elementRef, nzRowDirective, renderer) {
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.elementRef = elementRef;
        this.nzRowDirective = nzRowDirective;
        this.renderer = renderer;
        this.el = this.elementRef.nativeElement;
        this.prefixCls = 'ant-col';
        this.destroy$ = new Subject();
    }
    /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289*/
    setClassMap() {
        const classMap = Object.assign({ [`${this.prefixCls}`]: true, [`${this.prefixCls}-${this.nzSpan}`]: isNotNil(this.nzSpan), [`${this.prefixCls}-order-${this.nzOrder}`]: isNotNil(this.nzOrder), [`${this.prefixCls}-offset-${this.nzOffset}`]: isNotNil(this.nzOffset), [`${this.prefixCls}-pull-${this.nzPull}`]: isNotNil(this.nzPull), [`${this.prefixCls}-push-${this.nzPush}`]: isNotNil(this.nzPush) }, this.generateClass());
        this.nzUpdateHostClassService.updateHostClass(this.el, classMap);
    }
    generateClass() {
        const listOfSizeInputName = ['nzXs', 'nzSm', 'nzMd', 'nzLg', 'nzXl', 'nzXXl'];
        const listClassMap = {};
        listOfSizeInputName.forEach(name => {
            const sizeName = name.replace('nz', '').toLowerCase();
            if (isNotNil(this[name])) {
                if (typeof this[name] === 'number' || typeof this[name] === 'string') {
                    listClassMap[`${this.prefixCls}-${sizeName}-${this[name]}`] = true;
                }
                else {
                    const embedded = this[name];
                    const prefixArray = ['span', 'pull', 'push', 'offset', 'order'];
                    prefixArray.forEach(prefix => {
                        const prefixClass = prefix === 'span' ? '-' : `-${prefix}-`;
                        listClassMap[`${this.prefixCls}-${sizeName}${prefixClass}${embedded[prefix]}`] = embedded && isNotNil(embedded[prefix]);
                    });
                }
            }
        });
        return listClassMap;
    }
    ngOnChanges() {
        this.setClassMap();
    }
    ngAfterViewInit() {
        if (this.nzRowDirective) {
            this.nzRowDirective.actualGutter$
                .pipe(startWith(this.nzRowDirective.actualGutter), takeUntil(this.destroy$))
                .subscribe(actualGutter => {
                this.renderer.setStyle(this.el, 'padding-left', `${actualGutter / 2}px`);
                this.renderer.setStyle(this.el, 'padding-right', `${actualGutter / 2}px`);
            });
        }
    }
    ngOnInit() {
        this.setClassMap();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
/** @nocollapse */ NzColDirective.ɵfac = function NzColDirective_Factory(t) { return new (t || NzColDirective)(ɵɵdirectiveInject(NzUpdateHostClassService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NzRowDirective, 9), ɵɵdirectiveInject(Renderer2)); };
/** @nocollapse */ NzColDirective.ɵdir = ɵɵdefineDirective({ type: NzColDirective, selectors: [["", "nz-col", ""], ["nz-col"]], inputs: { nzSpan: "nzSpan", nzOrder: "nzOrder", nzOffset: "nzOffset", nzPush: "nzPush", nzPull: "nzPull", nzXs: "nzXs", nzSm: "nzSm", nzMd: "nzMd", nzLg: "nzLg", nzXl: "nzXl", nzXXl: "nzXXl" }, exportAs: ["nzCol"], features: [ɵɵProvidersFeature([NzUpdateHostClassService]), ɵɵNgOnChangesFeature()] });
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
class NzGridModule {
}
/** @nocollapse */ NzGridModule.ɵmod = ɵɵdefineNgModule({ type: NzGridModule });
/** @nocollapse */ NzGridModule.ɵinj = ɵɵdefineInjector({ factory: function NzGridModule_Factory(t) { return new (t || NzGridModule)(); }, imports: [[CommonModule, LayoutModule, PlatformModule]] });
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

import { __decorate, __metadata } from 'tslib';
import { ContentObserver, ObserversModule } from '@angular/cdk/observers';
import { ɵɵelement, ɵɵdirectiveInject, ElementRef, ChangeDetectorRef, Renderer2, NgZone, ɵɵdefineComponent, ɵɵcontentQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵstaticViewQuery, ɵɵallocHostVars, ɵɵattribute, ɵɵProvidersFeature, ɵɵNgOnChangesFeature, ɵɵprojectionDef, ɵɵtemplate, ɵɵelementStart, ɵɵprojection, ɵɵelementEnd, ɵɵproperty, ɵsetClassMetadata, Component, ChangeDetectionStrategy, ViewEncapsulation, Optional, Inject, ViewChild, ContentChildren, HostBinding, Input, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import { NzWaveDirective, isEmpty, findFirstNotEmptyNode, findLastNotEmptyNode, NzUpdateHostClassService, NzConfigService, NZ_WAVE_GLOBAL_CONFIG, InputBoolean, WithConfig, NzWaveModule } from 'ng-zorro-antd/core';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import { Subject } from 'rxjs';
import { takeUntil, startWith } from 'rxjs/operators';
import { NgIf, CommonModule } from '@angular/common';

const _c0 = ["contentElement"];
const _c1 = ["nz-button", ""];
function NzButtonComponent_i_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 2);
} }
const _c2 = ["*"];
const NZ_CONFIG_COMPONENT_NAME = 'button';
class NzButtonComponent {
    constructor(elementRef, cdr, renderer, contentObserver, nzUpdateHostClassService, ngZone, nzConfigService, waveConfig, animationType) {
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.renderer = renderer;
        this.contentObserver = contentObserver;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.ngZone = ngZone;
        this.nzConfigService = nzConfigService;
        this.waveConfig = waveConfig;
        this.animationType = animationType;
        this.nzWave = new NzWaveDirective(this.ngZone, this.elementRef, this.waveConfig, this.animationType);
        this.nzBlock = false;
        this.nzGhost = false;
        this.nzSearch = false;
        this.nzLoading = false;
        this.nzType = 'default';
        this.nzShape = null;
        this.el = this.elementRef.nativeElement;
        this.isInDropdown = false;
        this.iconOnly = false;
        this.destroy$ = new Subject();
        this.renderer.addClass(elementRef.nativeElement, 'ant-btn');
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            this.setClassMap();
            this.cdr.markForCheck();
        });
    }
    /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289 */
    setClassMap() {
        const prefixCls = 'ant-btn';
        const sizeMap = { large: 'lg', small: 'sm' };
        this.nzUpdateHostClassService.updateHostClass(this.el, {
            [`${prefixCls}-${this.nzType}`]: this.nzType,
            [`${prefixCls}-${this.nzShape}`]: this.nzShape,
            [`${prefixCls}-${sizeMap[this.nzSize]}`]: sizeMap[this.nzSize],
            [`${prefixCls}-loading`]: this.nzLoading,
            [`${prefixCls}-icon-only`]: this.iconOnly && !this.nzSearch && !this.isInDropdown,
            [`${prefixCls}-background-ghost`]: this.nzGhost,
            [`${prefixCls}-block`]: this.nzBlock,
            [`ant-input-search-button`]: this.nzSearch
        });
    }
    updateIconDisplay(value) {
        if (this.iconElement) {
            this.renderer.setStyle(this.iconElement, 'display', value ? 'none' : 'inline-block');
        }
    }
    checkContent() {
        const hasIcon = this.listOfIconElement && this.listOfIconElement.length;
        if (hasIcon) {
            this.moveIcon();
        }
        this.renderer.removeStyle(this.contentElement.nativeElement, 'display');
        /** https://github.com/angular/angular/issues/12530 **/
        if (isEmpty(this.contentElement.nativeElement)) {
            this.renderer.setStyle(this.contentElement.nativeElement, 'display', 'none');
            this.iconOnly = !!hasIcon;
        }
        else {
            this.renderer.removeStyle(this.contentElement.nativeElement, 'display');
            this.iconOnly = false;
        }
        this.setClassMap();
        this.updateIconDisplay(this.nzLoading);
        if (!this.cdr.destroyed) {
            this.cdr.detectChanges();
        }
    }
    moveIcon() {
        if (this.listOfIconElement && this.listOfIconElement.length) {
            const firstChildElement = findFirstNotEmptyNode(this.contentElement.nativeElement);
            const lastChildElement = findLastNotEmptyNode(this.contentElement.nativeElement);
            if (firstChildElement && firstChildElement === this.listOfIconElement.first.nativeElement) {
                this.renderer.insertBefore(this.el, firstChildElement, this.contentElement.nativeElement);
                this.iconElement = firstChildElement;
            }
            else if (lastChildElement && lastChildElement === this.listOfIconElement.last.nativeElement) {
                this.renderer.appendChild(this.el, lastChildElement);
            }
        }
    }
    ngAfterContentInit() {
        this.contentObserver
            .observe(this.contentElement)
            .pipe(startWith(true), takeUntil(this.destroy$))
            .subscribe(() => {
            // https://github.com/NG-ZORRO/ng-zorro-antd/issues/3079
            Promise.resolve().then(() => this.checkContent());
        });
    }
    ngOnInit() {
        this.setClassMap();
        this.nzWave.ngOnInit();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.nzWave.ngOnDestroy();
    }
    ngOnChanges(changes) {
        if (changes.nzBlock ||
            changes.nzGhost ||
            changes.nzSearch ||
            changes.nzType ||
            changes.nzShape ||
            changes.nzSize ||
            changes.nzLoading) {
            this.setClassMap();
        }
        if (changes.nzLoading) {
            this.updateIconDisplay(this.nzLoading);
        }
        if (changes.nzType && changes.nzType.currentValue === 'link') {
            this.nzWave.disable();
        }
        else {
            this.nzWave.enable();
        }
    }
}
/** @nocollapse */ NzButtonComponent.ɵfac = function NzButtonComponent_Factory(t) { return new (t || NzButtonComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ContentObserver), ɵɵdirectiveInject(NzUpdateHostClassService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(NZ_WAVE_GLOBAL_CONFIG, 8), ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8)); };
/** @nocollapse */ NzButtonComponent.ɵcmp = ɵɵdefineComponent({ type: NzButtonComponent, selectors: [["", "nz-button", ""]], contentQueries: function NzButtonComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵɵcontentQuery(dirIndex, NzIconDirective, false, ElementRef);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfIconElement = _t);
    } }, viewQuery: function NzButtonComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentElement = _t.first);
    } }, hostBindings: function NzButtonComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        ɵɵallocHostVars(1);
    } if (rf & 2) {
        ɵɵattribute("nz-wave", ctx.nzWave);
    } }, inputs: { nzBlock: "nzBlock", nzGhost: "nzGhost", nzSearch: "nzSearch", nzLoading: "nzLoading", nzType: "nzType", nzShape: "nzShape", nzSize: "nzSize" }, exportAs: ["nzButton"], features: [ɵɵProvidersFeature([NzUpdateHostClassService]), ɵɵNgOnChangesFeature()], attrs: _c1, ngContentSelectors: _c2, decls: 4, vars: 1, consts: [["nz-icon", "", "nzType", "loading", 4, "ngIf"], ["contentElement", ""], ["nz-icon", "", "nzType", "loading"]], template: function NzButtonComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵtemplate(0, NzButtonComponent_i_0_Template, 1, 0, "i", 0);
        ɵɵelementStart(1, "span", null, 1);
        ɵɵprojection(3);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.nzLoading);
    } }, directives: [NgIf, NzIconDirective], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzButtonComponent.prototype, "nzBlock", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzButtonComponent.prototype, "nzGhost", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzButtonComponent.prototype, "nzSearch", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzButtonComponent.prototype, "nzLoading", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, 'default'),
    __metadata("design:type", String)
], NzButtonComponent.prototype, "nzSize", void 0);
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzButtonComponent, [{
        type: Component,
        args: [{
                selector: '[nz-button]',
                exportAs: 'nzButton',
                providers: [NzUpdateHostClassService],
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                templateUrl: './nz-button.component.html'
            }]
    }], function () { return [{ type: ElementRef }, { type: ChangeDetectorRef }, { type: Renderer2 }, { type: ContentObserver }, { type: NzUpdateHostClassService }, { type: NgZone }, { type: NzConfigService }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [NZ_WAVE_GLOBAL_CONFIG]
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [ANIMATION_MODULE_TYPE]
            }] }]; }, { contentElement: [{
            type: ViewChild,
            args: ['contentElement', { static: true }]
        }], listOfIconElement: [{
            type: ContentChildren,
            args: [NzIconDirective, { read: ElementRef }]
        }], nzWave: [{
            type: HostBinding,
            args: ['attr.nz-wave']
        }], nzBlock: [{
            type: Input
        }], nzGhost: [{
            type: Input
        }], nzSearch: [{
            type: Input
        }], nzLoading: [{
            type: Input
        }], nzType: [{
            type: Input
        }], nzShape: [{
            type: Input
        }], nzSize: [{
            type: Input
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const _c0$1 = ["*"];
class NzButtonGroupComponent {
    constructor(nzUpdateHostClassService, elementRef) {
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.elementRef = elementRef;
        this.isInDropdown = false;
    }
    get nzSize() {
        return this._size;
    }
    set nzSize(value) {
        this._size = value;
        this.setClassMap();
    }
    setClassMap() {
        const prefixCls = 'ant-btn-group';
        const classMap = {
            [prefixCls]: true,
            [`ant-dropdown-button`]: this.isInDropdown,
            [`${prefixCls}-lg`]: this.nzSize === 'large',
            [`${prefixCls}-sm`]: this.nzSize === 'small'
        };
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, classMap);
    }
    ngOnInit() {
        this.setClassMap();
    }
}
/** @nocollapse */ NzButtonGroupComponent.ɵfac = function NzButtonGroupComponent_Factory(t) { return new (t || NzButtonGroupComponent)(ɵɵdirectiveInject(NzUpdateHostClassService), ɵɵdirectiveInject(ElementRef)); };
/** @nocollapse */ NzButtonGroupComponent.ɵcmp = ɵɵdefineComponent({ type: NzButtonGroupComponent, selectors: [["nz-button-group"]], inputs: { nzSize: "nzSize" }, exportAs: ["nzButtonGroup"], features: [ɵɵProvidersFeature([NzUpdateHostClassService])], ngContentSelectors: _c0$1, decls: 1, vars: 0, template: function NzButtonGroupComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzButtonGroupComponent, [{
        type: Component,
        args: [{
                selector: 'nz-button-group',
                exportAs: 'nzButtonGroup',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                providers: [NzUpdateHostClassService],
                templateUrl: './nz-button-group.component.html'
            }]
    }], function () { return [{ type: NzUpdateHostClassService }, { type: ElementRef }]; }, { nzSize: [{
            type: Input
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzButtonModule {
}
/** @nocollapse */ NzButtonModule.ɵmod = ɵɵdefineNgModule({ type: NzButtonModule });
/** @nocollapse */ NzButtonModule.ɵinj = ɵɵdefineInjector({ factory: function NzButtonModule_Factory(t) { return new (t || NzButtonModule)(); }, imports: [[CommonModule, ObserversModule, NzWaveModule, NzIconModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzButtonModule, { declarations: [NzButtonComponent, NzButtonGroupComponent], imports: [CommonModule, ObserversModule, NzWaveModule, NzIconModule], exports: [NzButtonComponent, NzButtonGroupComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzButtonModule, [{
        type: NgModule,
        args: [{
                declarations: [NzButtonComponent, NzButtonGroupComponent],
                exports: [NzButtonComponent, NzButtonGroupComponent],
                imports: [CommonModule, ObserversModule, NzWaveModule, NzIconModule]
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

export { NzButtonComponent, NzButtonGroupComponent, NzButtonModule };
//# sourceMappingURL=ng-zorro-antd-button.js.map

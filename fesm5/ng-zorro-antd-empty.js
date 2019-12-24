import { TemplatePortal, PortalInjector, ComponentPortal, CdkPortalOutlet, PortalModule } from '@angular/cdk/portal';
import { InjectionToken, TemplateRef, Type, ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, Inject, Optional, ɵɵelementContainerStart, ɵɵelement, ɵɵelementContainerEnd, ɵɵnextContext, ɵɵadvance, ɵɵproperty, ɵɵsanitizeUrl, ɵɵtext, ɵɵtextInterpolate1, ɵɵelementStart, ɵɵtemplate, ɵɵelementEnd, ɵɵdirectiveInject, ChangeDetectorRef, ɵɵdefineComponent, ɵɵelementHostAttrs, ɵɵNgOnChangesFeature, Component, ChangeDetectionStrategy, ViewEncapsulation, Input, ViewContainerRef, Injector, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { warnDeprecation, PREFIX, NzConfigService, NzStringTemplateOutletDirective, NzAddOnModule } from 'ng-zorro-antd/core';
import { NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, CommonModule } from '@angular/common';
import { takeUntil } from 'rxjs/operators';
import { NzI18nService, NzI18nModule } from 'ng-zorro-antd/i18n';

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
// tslint:disable-next-line:no-any
var NZ_DEFAULT_EMPTY_CONTENT = new InjectionToken('nz-empty-content');
var NZ_EMPTY_COMPONENT_NAME = new InjectionToken('nz-empty-component-name');
var emptyImage = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTg0IiBoZWlnaHQ9IjE1MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI0IDMxLjY3KSI+PGVsbGlwc2UgZmlsbC1vcGFjaXR5PSIuOCIgZmlsbD0iI0Y1RjVGNyIgY3g9IjY3Ljc5NyIgY3k9IjEwNi44OSIgcng9IjY3Ljc5NyIgcnk9IjEyLjY2OCIvPjxwYXRoIGQ9Ik0xMjIuMDM0IDY5LjY3NEw5OC4xMDkgNDAuMjI5Yy0xLjE0OC0xLjM4Ni0yLjgyNi0yLjIyNS00LjU5My0yLjIyNWgtNTEuNDRjLTEuNzY2IDAtMy40NDQuODM5LTQuNTkyIDIuMjI1TDEzLjU2IDY5LjY3NHYxNS4zODNoMTA4LjQ3NVY2OS42NzR6IiBmaWxsPSIjQUVCOEMyIi8+PHBhdGggZD0iTTEwMS41MzcgODYuMjE0TDgwLjYzIDYxLjEwMmMtMS4wMDEtMS4yMDctMi41MDctMS44NjctNC4wNDgtMS44NjdIMzEuNzI0Yy0xLjU0IDAtMy4wNDcuNjYtNC4wNDggMS44NjdMNi43NjkgODYuMjE0djEzLjc5Mmg5NC43NjhWODYuMjE0eiIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTMuNTYpIi8+PHBhdGggZD0iTTMzLjgzIDBoNjcuOTMzYTQgNCAwIDAgMSA0IDR2OTMuMzQ0YTQgNCAwIDAgMS00IDRIMzMuODNhNCA0IDAgMCAxLTQtNFY0YTQgNCAwIDAgMSA0LTR6IiBmaWxsPSIjRjVGNUY3Ii8+PHBhdGggZD0iTTQyLjY3OCA5Ljk1M2g1MC4yMzdhMiAyIDAgMCAxIDIgMlYzNi45MWEyIDIgMCAwIDEtMiAySDQyLjY3OGEyIDIgMCAwIDEtMi0yVjExLjk1M2EyIDIgMCAwIDEgMi0yek00Mi45NCA0OS43NjdoNDkuNzEzYTIuMjYyIDIuMjYyIDAgMSAxIDAgNC41MjRINDIuOTRhMi4yNjIgMi4yNjIgMCAwIDEgMC00LjUyNHpNNDIuOTQgNjEuNTNoNDkuNzEzYTIuMjYyIDIuMjYyIDAgMSAxIDAgNC41MjVINDIuOTRhMi4yNjIgMi4yNjIgMCAwIDEgMC00LjUyNXpNMTIxLjgxMyAxMDUuMDMyYy0uNzc1IDMuMDcxLTMuNDk3IDUuMzYtNi43MzUgNS4zNkgyMC41MTVjLTMuMjM4IDAtNS45Ni0yLjI5LTYuNzM0LTUuMzZhNy4zMDkgNy4zMDkgMCAwIDEtLjIyMi0xLjc5VjY5LjY3NWgyNi4zMThjMi45MDcgMCA1LjI1IDIuNDQ4IDUuMjUgNS40MnYuMDRjMCAyLjk3MSAyLjM3IDUuMzcgNS4yNzcgNS4zN2gzNC43ODVjMi45MDcgMCA1LjI3Ny0yLjQyMSA1LjI3Ny01LjM5M1Y3NS4xYzAtMi45NzIgMi4zNDMtNS40MjYgNS4yNS01LjQyNmgyNi4zMTh2MzMuNTY5YzAgLjYxNy0uMDc3IDEuMjE2LS4yMjEgMS43ODl6IiBmaWxsPSIjRENFMEU2Ii8+PC9nPjxwYXRoIGQ9Ik0xNDkuMTIxIDMzLjI5MmwtNi44MyAyLjY1YTEgMSAwIDAgMS0xLjMxNy0xLjIzbDEuOTM3LTYuMjA3Yy0yLjU4OS0yLjk0NC00LjEwOS02LjUzNC00LjEwOS0xMC40MDhDMTM4LjgwMiA4LjEwMiAxNDguOTIgMCAxNjEuNDAyIDAgMTczLjg4MSAwIDE4NCA4LjEwMiAxODQgMTguMDk3YzAgOS45OTUtMTAuMTE4IDE4LjA5Ny0yMi41OTkgMTguMDk3LTQuNTI4IDAtOC43NDQtMS4wNjYtMTIuMjgtMi45MDJ6IiBmaWxsPSIjRENFMEU2Ii8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTQ5LjY1IDE1LjM4MykiIGZpbGw9IiNGRkYiPjxlbGxpcHNlIGN4PSIyMC42NTQiIGN5PSIzLjE2NyIgcng9IjIuODQ5IiByeT0iMi44MTUiLz48cGF0aCBkPSJNNS42OTggNS42M0gwTDIuODk4LjcwNHpNOS4yNTkuNzA0aDQuOTg1VjUuNjNIOS4yNTl6Ii8+PC9nPjwvZz48L3N2Zz4=';
var simpleEmptyImage = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNjRweCIgaGVpZ2h0PSI0MXB4IiB2aWV3Qm94PSIwIDAgNjQgNDEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjUgKDY3NDY5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00NzIuMDAwMDAwLCAtMTMzNS4wMDAwMDApIj4KICAgICAgICAgICAgPGcgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDY0LjAwMDAwMCwgMTExNC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnICB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MC4wMDAwMDAsIDc4LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNjguMDAwMDAwLCAxNDQuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnID4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxlbGxpcHNlICBmaWxsPSIjRjVGNUY1IiBjeD0iMzIiIGN5PSIzMyIgcng9IjMyIiByeT0iNyI+PC9lbGxpcHNlPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5LjAwMDAwMCwgMC4wMDAwMDApIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0iI0Q5RDlEOSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTQ2LDEyLjc2MDU2MDQgTDM1Ljg1NDMwNDcsMS4yNTczOTYzMyBDMzUuMzY3NDQxNCwwLjQ3MzgyNjYwNSAzNC42NTU4Nzg5LDAgMzMuOTA2NzYxNywwIEwxMi4wOTMyMzgzLDAgQzExLjM0NDEyMTEsMCAxMC42MzI1NTg2LDAuNDczOTUwMjU1IDEwLjE0NTY5NTMsMS4yNTczOTYzMyBMMi42MTQ3OTcyN2UtMTIsMTIuNzYwNTYwNCBMMCwyMiBMNDYsMjIgTDQ2LDEyLjc2MDU2MDQgWiIgID48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTMyLjYxMzI4MTMsMTUuOTMxNSBDMzIuNjEzMjgxMywxNC4zMjU4NTExIDMzLjYwNjk1MzEsMTMuMDAwMjM0IDM0LjgzOTY5OTIsMTMgTDQ2LDEzIEw0NiwzMS4xMzcxMjc3IEM0NiwzMy4yNTg5NTc0IDQ0LjY3OTM4NjcsMzUgNDMuMDUwNDI5NywzNSBMMi45NDk1NzAzMSwzNSBDMS4zMjA1MjM0NCwzNSAwLDMzLjI1ODg0MDQgMCwzMS4xMzcxMjc3IEwwLDEzIEwxMS4xNjAzMDA4LDEzIEMxMi4zOTMwNDY5LDEzIDEzLjM4NjcxODgsMTQuMzIyODA4NSAxMy4zODY3MTg4LDE1LjkyODQ1NzQgTDEzLjM4NjcxODgsMTUuOTQ5NjM4MyBDMTMuMzg2NzE4OCwxNy41NTUyODcyIDE0LjM5MTcxMDksMTguODUxMTgwOSAxNS42MjQ0NTcsMTguODUxMTgwOSBMMzAuMzc1NTQzLDE4Ljg1MTE4MDkgQzMxLjYwODI4OTEsMTguODUxMTgwOSAzMi42MTMyODEzLDE3LjU0MzM1MTEgMzIuNjEzMjgxMywxNS45Mzc3MDIxIEwzMi42MTMyODEzLDE1LjkzMTUgWiIgIGZpbGw9IiNGQUZBRkEiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+';

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzEmptyService = /** @class */ (function () {
    function NzEmptyService(nzConfigService, legacyDefaultEmptyContent) {
        var _this = this;
        this.nzConfigService = nzConfigService;
        this.legacyDefaultEmptyContent = legacyDefaultEmptyContent;
        this.userDefaultContent$ = new BehaviorSubject(undefined);
        if (legacyDefaultEmptyContent) {
            warnDeprecation("'NZ_DEFAULT_EMPTY_CONTENT' is deprecated and would be removed in 9.0.0. Please migrate to 'NZ_CONFIG'.");
        }
        var userDefaultEmptyContent = this.getUserDefaultEmptyContent();
        if (userDefaultEmptyContent) {
            this.userDefaultContent$.next(userDefaultEmptyContent);
        }
        this.nzConfigService.getConfigChangeEventForComponent('empty').subscribe(function () {
            _this.userDefaultContent$.next(_this.getUserDefaultEmptyContent());
        });
    }
    NzEmptyService.prototype.setDefaultContent = function (content) {
        warnDeprecation("'setDefaultContent' is deprecated and would be removed in 9.0.0. Please migrate to 'NzConfigService'.");
        if (typeof content === 'string' ||
            content === undefined ||
            content === null ||
            content instanceof TemplateRef ||
            content instanceof Type) {
            this.userDefaultContent$.next(content);
        }
        else {
            throw new Error(PREFIX + " 'useDefaultContent' expect 'string', 'templateRef' or 'component' but get " + content + ".");
        }
    };
    NzEmptyService.prototype.resetDefault = function () {
        warnDeprecation("'resetDefault' is deprecated and would be removed in 9.0.0. Please migrate to 'NzConfigService' and provide an 'undefined'.");
        this.userDefaultContent$.next(undefined);
    };
    NzEmptyService.prototype.getUserDefaultEmptyContent = function () {
        return (this.nzConfigService.getConfigForComponent('empty') || {}).nzDefaultEmptyContent || this.legacyDefaultEmptyContent;
    };
    /** @nocollapse */ NzEmptyService.ɵfac = function NzEmptyService_Factory(t) { return new (t || NzEmptyService)(ɵɵinject(NzConfigService), ɵɵinject(NZ_DEFAULT_EMPTY_CONTENT, 8)); };
    /** @nocollapse */ NzEmptyService.ɵprov = ɵɵdefineInjectable({ token: NzEmptyService, factory: NzEmptyService.ɵfac, providedIn: 'root' });
    return NzEmptyService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzEmptyService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: NzConfigService }, { type: Type, decorators: [{
                type: Inject,
                args: [NZ_DEFAULT_EMPTY_CONTENT]
            }, {
                type: Optional
            }] }]; }, null); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var _c0 = [1, "ant-empty"];
function NzEmptyComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "img", 4);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r442 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("src", ctx_r442.nzNotFoundImage || ctx_r442.defaultSvg, ɵɵsanitizeUrl)("alt", ctx_r442.isContentString ? ctx_r442.nzNotFoundContent : "empty");
} }
function NzEmptyComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r443 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r443.shouldRenderContent ? ctx_r443.nzNotFoundContent : ctx_r443.locale["description"], " ");
} }
function NzEmptyComponent_div_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r445 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r445.nzNotFoundFooter, " ");
} }
function NzEmptyComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵtemplate(1, NzEmptyComponent_div_4_ng_container_1_Template, 2, 1, "ng-container", 1);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r444 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r444.nzNotFoundFooter);
} }
var NzEmptyComponent = /** @class */ (function () {
    function NzEmptyComponent(sanitizer, i18n, cdr) {
        this.sanitizer = sanitizer;
        this.i18n = i18n;
        this.cdr = cdr;
        // NOTE: It would be very hack to use `ContentChild`, because Angular could
        // tell if user actually pass something to <ng-content>.
        // See: https://github.com/angular/angular/issues/12530.
        // I can use a directive but this would expose the name `footer`.
        // @ContentChild(TemplateRef, {static: false}) nzNotFoundFooter: TemplateRef<void>;
        this.defaultSvg = this.sanitizer.bypassSecurityTrustResourceUrl(emptyImage);
        this.isContentString = false;
        this.locale = {};
        this.destroy$ = new Subject();
    }
    Object.defineProperty(NzEmptyComponent.prototype, "shouldRenderContent", {
        get: function () {
            var content = this.nzNotFoundContent;
            return !!(content || typeof content === 'string');
        },
        enumerable: true,
        configurable: true
    });
    NzEmptyComponent.prototype.ngOnChanges = function (changes) {
        var nzNotFoundContent = changes.nzNotFoundContent;
        if (nzNotFoundContent) {
            this.isContentString = typeof nzNotFoundContent.currentValue === 'string';
        }
    };
    NzEmptyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(function () {
            _this.locale = _this.i18n.getLocaleData('Empty');
            _this.cdr.markForCheck();
        });
    };
    NzEmptyComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /** @nocollapse */ NzEmptyComponent.ɵfac = function NzEmptyComponent_Factory(t) { return new (t || NzEmptyComponent)(ɵɵdirectiveInject(DomSanitizer), ɵɵdirectiveInject(NzI18nService), ɵɵdirectiveInject(ChangeDetectorRef)); };
    /** @nocollapse */ NzEmptyComponent.ɵcmp = ɵɵdefineComponent({ type: NzEmptyComponent, selectors: [["nz-empty"]], hostBindings: function NzEmptyComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            ɵɵelementHostAttrs(_c0);
        } }, inputs: { nzNotFoundImage: "nzNotFoundImage", nzNotFoundContent: "nzNotFoundContent", nzNotFoundFooter: "nzNotFoundFooter" }, exportAs: ["nzEmpty"], features: [ɵɵNgOnChangesFeature()], decls: 5, vars: 3, consts: [[1, "ant-empty-image"], [4, "nzStringTemplateOutlet"], [1, "ant-empty-description"], ["class", "ant-empty-footer", 4, "ngIf"], [3, "src", "alt"], [1, "ant-empty-footer"]], template: function NzEmptyComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "div", 0);
            ɵɵtemplate(1, NzEmptyComponent_ng_container_1_Template, 2, 2, "ng-container", 1);
            ɵɵelementEnd();
            ɵɵelementStart(2, "p", 2);
            ɵɵtemplate(3, NzEmptyComponent_ng_container_3_Template, 2, 1, "ng-container", 1);
            ɵɵelementEnd();
            ɵɵtemplate(4, NzEmptyComponent_div_4_Template, 2, 1, "div", 3);
        } if (rf & 2) {
            ɵɵadvance(1);
            ɵɵproperty("nzStringTemplateOutlet", ctx.nzNotFoundImage);
            ɵɵadvance(2);
            ɵɵproperty("nzStringTemplateOutlet", ctx.nzNotFoundContent);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.nzNotFoundFooter);
        } }, directives: [NzStringTemplateOutletDirective, NgIf], styles: ["nz-empty { display: block; }"], encapsulation: 2, changeDetection: 0 });
    return NzEmptyComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzEmptyComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-empty',
                exportAs: 'nzEmpty',
                templateUrl: './nz-empty.component.html',
                styles: ['nz-empty { display: block; }'],
                host: {
                    class: 'ant-empty'
                }
            }]
    }], function () { return [{ type: DomSanitizer }, { type: NzI18nService }, { type: ChangeDetectorRef }]; }, { nzNotFoundImage: [{
            type: Input
        }], nzNotFoundContent: [{
            type: Input
        }], nzNotFoundFooter: [{
            type: Input
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function NzEmbedEmptyComponent_ng_container_0_nz_empty_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "nz-empty", 6);
} if (rf & 2) {
    var ctx_r436 = ɵɵnextContext(2);
    ɵɵproperty("nzNotFoundImage", ctx_r436.defaultSvg);
} }
function NzEmbedEmptyComponent_ng_container_0_nz_empty_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "nz-empty", 7);
} if (rf & 2) {
    var ctx_r437 = ɵɵnextContext(2);
    ɵɵproperty("nzNotFoundImage", ctx_r437.defaultSvg);
} }
function NzEmbedEmptyComponent_ng_container_0_nz_empty_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "nz-empty");
} }
function NzEmbedEmptyComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0, 2);
    ɵɵtemplate(1, NzEmbedEmptyComponent_ng_container_0_nz_empty_1_Template, 1, 1, "nz-empty", 3);
    ɵɵtemplate(2, NzEmbedEmptyComponent_ng_container_0_nz_empty_2_Template, 1, 1, "nz-empty", 4);
    ɵɵtemplate(3, NzEmbedEmptyComponent_ng_container_0_nz_empty_3_Template, 1, 0, "nz-empty", 5);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r434 = ɵɵnextContext();
    ɵɵproperty("ngSwitch", ctx_r434.size);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "normal");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "small");
} }
function NzEmbedEmptyComponent_ng_container_1_1_ng_template_0_Template(rf, ctx) { }
function NzEmbedEmptyComponent_ng_container_1_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, NzEmbedEmptyComponent_ng_container_1_1_ng_template_0_Template, 0, 0, "ng-template", 8);
} if (rf & 2) {
    var ctx_r439 = ɵɵnextContext(2);
    ɵɵproperty("cdkPortalOutlet", ctx_r439.contentPortal);
} }
function NzEmbedEmptyComponent_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r440 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r440.content, " ");
} }
function NzEmbedEmptyComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzEmbedEmptyComponent_ng_container_1_1_Template, 1, 1, undefined, 1);
    ɵɵtemplate(2, NzEmbedEmptyComponent_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r435 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r435.contentType !== "string");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r435.contentType === "string");
} }
var NzEmbedEmptyComponent = /** @class */ (function () {
    function NzEmbedEmptyComponent(emptyService, sanitizer, viewContainerRef, cdr, injector) {
        this.emptyService = emptyService;
        this.sanitizer = sanitizer;
        this.viewContainerRef = viewContainerRef;
        this.cdr = cdr;
        this.injector = injector;
        this.contentType = 'string';
        this.defaultSvg = this.sanitizer.bypassSecurityTrustResourceUrl(simpleEmptyImage);
        this.size = '';
        this.subs_ = new Subscription();
    }
    NzEmbedEmptyComponent.prototype.ngOnChanges = function (changes) {
        if (changes.nzComponentName) {
            this.size = this.getEmptySize(changes.nzComponentName.currentValue);
        }
        if (changes.specificContent && !changes.specificContent.isFirstChange()) {
            this.content = changes.specificContent.currentValue;
            this.renderEmpty();
        }
    };
    NzEmbedEmptyComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userContent_ = this.emptyService.userDefaultContent$.subscribe(function (content) {
            _this.content = _this.specificContent || content;
            _this.renderEmpty();
        });
        this.subs_.add(userContent_);
    };
    NzEmbedEmptyComponent.prototype.ngOnDestroy = function () {
        this.subs_.unsubscribe();
    };
    NzEmbedEmptyComponent.prototype.getEmptySize = function (componentName) {
        switch (componentName) {
            case 'table':
            case 'list':
                return 'normal';
            case 'select':
            case 'tree-select':
            case 'cascader':
            case 'transfer':
                return 'small';
            default:
                return '';
        }
    };
    NzEmbedEmptyComponent.prototype.renderEmpty = function () {
        var content = this.content;
        if (typeof content === 'string') {
            this.contentType = 'string';
        }
        else if (content instanceof TemplateRef) {
            var context = { $implicit: this.nzComponentName }; // tslint:disable-line:no-any
            this.contentType = 'template';
            this.contentPortal = new TemplatePortal(content, this.viewContainerRef, context);
        }
        else if (content instanceof Type) {
            var context = new WeakMap([[NZ_EMPTY_COMPONENT_NAME, this.nzComponentName]]);
            var injector = new PortalInjector(this.injector, context);
            this.contentType = 'component';
            this.contentPortal = new ComponentPortal(content, this.viewContainerRef, injector);
        }
        else {
            this.contentType = 'string';
            this.contentPortal = undefined;
        }
        this.cdr.markForCheck();
    };
    /** @nocollapse */ NzEmbedEmptyComponent.ɵfac = function NzEmbedEmptyComponent_Factory(t) { return new (t || NzEmbedEmptyComponent)(ɵɵdirectiveInject(NzEmptyService), ɵɵdirectiveInject(DomSanitizer), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Injector)); };
    /** @nocollapse */ NzEmbedEmptyComponent.ɵcmp = ɵɵdefineComponent({ type: NzEmbedEmptyComponent, selectors: [["nz-embed-empty"]], inputs: { nzComponentName: "nzComponentName", specificContent: "specificContent" }, exportAs: ["nzEmbedEmpty"], features: [ɵɵNgOnChangesFeature()], decls: 2, vars: 2, consts: [[3, "ngSwitch", 4, "ngIf"], [4, "ngIf"], [3, "ngSwitch"], ["class", "ant-empty-normal", 3, "nzNotFoundImage", 4, "ngSwitchCase"], ["class", "ant-empty-small", 3, "nzNotFoundImage", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "ant-empty-normal", 3, "nzNotFoundImage"], [1, "ant-empty-small", 3, "nzNotFoundImage"], [3, "cdkPortalOutlet"]], template: function NzEmbedEmptyComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵtemplate(0, NzEmbedEmptyComponent_ng_container_0_Template, 4, 3, "ng-container", 0);
            ɵɵtemplate(1, NzEmbedEmptyComponent_ng_container_1_Template, 3, 2, "ng-container", 1);
        } if (rf & 2) {
            ɵɵproperty("ngIf", !ctx.content && ctx.specificContent !== null);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.content);
        } }, directives: [NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, NzEmptyComponent, CdkPortalOutlet], encapsulation: 2, changeDetection: 0 });
    return NzEmbedEmptyComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzEmbedEmptyComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-embed-empty',
                exportAs: 'nzEmbedEmpty',
                templateUrl: './nz-embed-empty.component.html'
            }]
    }], function () { return [{ type: NzEmptyService }, { type: DomSanitizer }, { type: ViewContainerRef }, { type: ChangeDetectorRef }, { type: Injector }]; }, { nzComponentName: [{
            type: Input
        }], specificContent: [{
            type: Input
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzEmptyModule = /** @class */ (function () {
    function NzEmptyModule() {
    }
    /** @nocollapse */ NzEmptyModule.ɵmod = ɵɵdefineNgModule({ type: NzEmptyModule });
    /** @nocollapse */ NzEmptyModule.ɵinj = ɵɵdefineInjector({ factory: function NzEmptyModule_Factory(t) { return new (t || NzEmptyModule)(); }, imports: [[CommonModule, PortalModule, NzAddOnModule, NzI18nModule]] });
    return NzEmptyModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzEmptyModule, { declarations: [NzEmptyComponent, NzEmbedEmptyComponent], imports: [CommonModule, PortalModule, NzAddOnModule, NzI18nModule], exports: [NzEmptyComponent, NzEmbedEmptyComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzEmptyModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, PortalModule, NzAddOnModule, NzI18nModule],
                declarations: [NzEmptyComponent, NzEmbedEmptyComponent],
                exports: [NzEmptyComponent, NzEmbedEmptyComponent]
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

export { NZ_DEFAULT_EMPTY_CONTENT, NZ_EMPTY_COMPONENT_NAME, NzEmbedEmptyComponent, NzEmptyComponent, NzEmptyModule, NzEmptyService, emptyImage, simpleEmptyImage };
//# sourceMappingURL=ng-zorro-antd-empty.js.map

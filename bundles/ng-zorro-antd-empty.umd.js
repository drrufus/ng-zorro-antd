(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('ng-zorro-antd/core'),require('@angular/platform-browser'),require('@angular/common'),require('@angular/cdk/portal'),require('ng-zorro-antd/i18n'),exports, require('@angular/cdk/portal'), require('@angular/core'), require('@angular/platform-browser'), require('rxjs'), require('ng-zorro-antd/core'), require('rxjs/operators'), require('ng-zorro-antd/i18n'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/empty', ['@angular/core','ng-zorro-antd/core','@angular/platform-browser','@angular/common','@angular/cdk/portal','ng-zorro-antd/i18n','exports', '@angular/cdk/portal', '@angular/core', '@angular/platform-browser', 'rxjs', 'ng-zorro-antd/core', 'rxjs/operators', 'ng-zorro-antd/i18n', '@angular/common'], factory) :
    (global = global || self, factory(global.ng.core,global.ngZorroAntd.core,global.ng.platformBrowser,global.ng.common,global.ng.cdk.portal,global.ngZorroAntd.i18n,(global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].empty = {}), global.ng.cdk.portal, global.ng.core, global.ng.platformBrowser, global.rxjs, global['ng-zorro-antd'].core, global.rxjs.operators, global['ng-zorro-antd'].i18n, global.ng.common));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,ɵngcc4,ɵngcc5,exports, portal, core, platformBrowser, rxjs, core$1, operators, i18n, common) { 
function NzEmbedEmptyComponent_ng_container_0_nz_empty_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nz-empty", 6);
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("nzNotFoundImage", ctx_r2.defaultSvg);
} }
function NzEmbedEmptyComponent_ng_container_0_nz_empty_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nz-empty", 7);
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("nzNotFoundImage", ctx_r3.defaultSvg);
} }
function NzEmbedEmptyComponent_ng_container_0_nz_empty_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nz-empty");
} }
function NzEmbedEmptyComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0, 2);
    ɵngcc0.ɵɵtemplate(1, NzEmbedEmptyComponent_ng_container_0_nz_empty_1_Template, 1, 1, "nz-empty", 3);
    ɵngcc0.ɵɵtemplate(2, NzEmbedEmptyComponent_ng_container_0_nz_empty_2_Template, 1, 1, "nz-empty", 4);
    ɵngcc0.ɵɵtemplate(3, NzEmbedEmptyComponent_ng_container_0_nz_empty_3_Template, 1, 0, "nz-empty", 5);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngSwitch", ctx_r0.size);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", "normal");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", "small");
} }
function NzEmbedEmptyComponent_ng_container_1_1_ng_template_0_Template(rf, ctx) { }
function NzEmbedEmptyComponent_ng_container_1_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NzEmbedEmptyComponent_ng_container_1_1_ng_template_0_Template, 0, 0, "ng-template", 8);
} if (rf & 2) {
    var ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("cdkPortalOutlet", ctx_r5.contentPortal);
} }
function NzEmbedEmptyComponent_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r6.content, " ");
} }
function NzEmbedEmptyComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzEmbedEmptyComponent_ng_container_1_1_Template, 1, 1, undefined, 1);
    ɵngcc0.ɵɵtemplate(2, NzEmbedEmptyComponent_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.contentType !== "string");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.contentType === "string");
} }
function NzEmptyComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelement(1, "img", 4);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("src", ctx_r0.nzNotFoundImage || ctx_r0.defaultSvg, ɵngcc0.ɵɵsanitizeUrl)("alt", ctx_r0.isContentString ? ctx_r0.nzNotFoundContent : "empty");
} }
function NzEmptyComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r1.shouldRenderContent ? ctx_r1.nzNotFoundContent : ctx_r1.locale["description"], " ");
} }
function NzEmptyComponent_div_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r3.nzNotFoundFooter, " ");
} }
function NzEmptyComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 5);
    ɵngcc0.ɵɵtemplate(1, NzEmptyComponent_div_4_ng_container_1_Template, 2, 1, "ng-container", 1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r2.nzNotFoundFooter);
} }
'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // tslint:disable-next-line:no-any
    /** @type {?} */
    var NZ_DEFAULT_EMPTY_CONTENT = new core.InjectionToken('nz-empty-content');
    /** @type {?} */
    var NZ_EMPTY_COMPONENT_NAME = new core.InjectionToken('nz-empty-component-name');
    /** @type {?} */
    var emptyImage = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTg0IiBoZWlnaHQ9IjE1MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI0IDMxLjY3KSI+PGVsbGlwc2UgZmlsbC1vcGFjaXR5PSIuOCIgZmlsbD0iI0Y1RjVGNyIgY3g9IjY3Ljc5NyIgY3k9IjEwNi44OSIgcng9IjY3Ljc5NyIgcnk9IjEyLjY2OCIvPjxwYXRoIGQ9Ik0xMjIuMDM0IDY5LjY3NEw5OC4xMDkgNDAuMjI5Yy0xLjE0OC0xLjM4Ni0yLjgyNi0yLjIyNS00LjU5My0yLjIyNWgtNTEuNDRjLTEuNzY2IDAtMy40NDQuODM5LTQuNTkyIDIuMjI1TDEzLjU2IDY5LjY3NHYxNS4zODNoMTA4LjQ3NVY2OS42NzR6IiBmaWxsPSIjQUVCOEMyIi8+PHBhdGggZD0iTTEwMS41MzcgODYuMjE0TDgwLjYzIDYxLjEwMmMtMS4wMDEtMS4yMDctMi41MDctMS44NjctNC4wNDgtMS44NjdIMzEuNzI0Yy0xLjU0IDAtMy4wNDcuNjYtNC4wNDggMS44NjdMNi43NjkgODYuMjE0djEzLjc5Mmg5NC43NjhWODYuMjE0eiIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTMuNTYpIi8+PHBhdGggZD0iTTMzLjgzIDBoNjcuOTMzYTQgNCAwIDAgMSA0IDR2OTMuMzQ0YTQgNCAwIDAgMS00IDRIMzMuODNhNCA0IDAgMCAxLTQtNFY0YTQgNCAwIDAgMSA0LTR6IiBmaWxsPSIjRjVGNUY3Ii8+PHBhdGggZD0iTTQyLjY3OCA5Ljk1M2g1MC4yMzdhMiAyIDAgMCAxIDIgMlYzNi45MWEyIDIgMCAwIDEtMiAySDQyLjY3OGEyIDIgMCAwIDEtMi0yVjExLjk1M2EyIDIgMCAwIDEgMi0yek00Mi45NCA0OS43NjdoNDkuNzEzYTIuMjYyIDIuMjYyIDAgMSAxIDAgNC41MjRINDIuOTRhMi4yNjIgMi4yNjIgMCAwIDEgMC00LjUyNHpNNDIuOTQgNjEuNTNoNDkuNzEzYTIuMjYyIDIuMjYyIDAgMSAxIDAgNC41MjVINDIuOTRhMi4yNjIgMi4yNjIgMCAwIDEgMC00LjUyNXpNMTIxLjgxMyAxMDUuMDMyYy0uNzc1IDMuMDcxLTMuNDk3IDUuMzYtNi43MzUgNS4zNkgyMC41MTVjLTMuMjM4IDAtNS45Ni0yLjI5LTYuNzM0LTUuMzZhNy4zMDkgNy4zMDkgMCAwIDEtLjIyMi0xLjc5VjY5LjY3NWgyNi4zMThjMi45MDcgMCA1LjI1IDIuNDQ4IDUuMjUgNS40MnYuMDRjMCAyLjk3MSAyLjM3IDUuMzcgNS4yNzcgNS4zN2gzNC43ODVjMi45MDcgMCA1LjI3Ny0yLjQyMSA1LjI3Ny01LjM5M1Y3NS4xYzAtMi45NzIgMi4zNDMtNS40MjYgNS4yNS01LjQyNmgyNi4zMTh2MzMuNTY5YzAgLjYxNy0uMDc3IDEuMjE2LS4yMjEgMS43ODl6IiBmaWxsPSIjRENFMEU2Ii8+PC9nPjxwYXRoIGQ9Ik0xNDkuMTIxIDMzLjI5MmwtNi44MyAyLjY1YTEgMSAwIDAgMS0xLjMxNy0xLjIzbDEuOTM3LTYuMjA3Yy0yLjU4OS0yLjk0NC00LjEwOS02LjUzNC00LjEwOS0xMC40MDhDMTM4LjgwMiA4LjEwMiAxNDguOTIgMCAxNjEuNDAyIDAgMTczLjg4MSAwIDE4NCA4LjEwMiAxODQgMTguMDk3YzAgOS45OTUtMTAuMTE4IDE4LjA5Ny0yMi41OTkgMTguMDk3LTQuNTI4IDAtOC43NDQtMS4wNjYtMTIuMjgtMi45MDJ6IiBmaWxsPSIjRENFMEU2Ii8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTQ5LjY1IDE1LjM4MykiIGZpbGw9IiNGRkYiPjxlbGxpcHNlIGN4PSIyMC42NTQiIGN5PSIzLjE2NyIgcng9IjIuODQ5IiByeT0iMi44MTUiLz48cGF0aCBkPSJNNS42OTggNS42M0gwTDIuODk4LjcwNHpNOS4yNTkuNzA0aDQuOTg1VjUuNjNIOS4yNTl6Ii8+PC9nPjwvZz48L3N2Zz4=';
    /** @type {?} */
    var simpleEmptyImage = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNjRweCIgaGVpZ2h0PSI0MXB4IiB2aWV3Qm94PSIwIDAgNjQgNDEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjUgKDY3NDY5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00NzIuMDAwMDAwLCAtMTMzNS4wMDAwMDApIj4KICAgICAgICAgICAgPGcgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDY0LjAwMDAwMCwgMTExNC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnICB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MC4wMDAwMDAsIDc4LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNjguMDAwMDAwLCAxNDQuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnID4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxlbGxpcHNlICBmaWxsPSIjRjVGNUY1IiBjeD0iMzIiIGN5PSIzMyIgcng9IjMyIiByeT0iNyI+PC9lbGxpcHNlPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5LjAwMDAwMCwgMC4wMDAwMDApIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0iI0Q5RDlEOSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTQ2LDEyLjc2MDU2MDQgTDM1Ljg1NDMwNDcsMS4yNTczOTYzMyBDMzUuMzY3NDQxNCwwLjQ3MzgyNjYwNSAzNC42NTU4Nzg5LDAgMzMuOTA2NzYxNywwIEwxMi4wOTMyMzgzLDAgQzExLjM0NDEyMTEsMCAxMC42MzI1NTg2LDAuNDczOTUwMjU1IDEwLjE0NTY5NTMsMS4yNTczOTYzMyBMMi42MTQ3OTcyN2UtMTIsMTIuNzYwNTYwNCBMMCwyMiBMNDYsMjIgTDQ2LDEyLjc2MDU2MDQgWiIgID48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTMyLjYxMzI4MTMsMTUuOTMxNSBDMzIuNjEzMjgxMywxNC4zMjU4NTExIDMzLjYwNjk1MzEsMTMuMDAwMjM0IDM0LjgzOTY5OTIsMTMgTDQ2LDEzIEw0NiwzMS4xMzcxMjc3IEM0NiwzMy4yNTg5NTc0IDQ0LjY3OTM4NjcsMzUgNDMuMDUwNDI5NywzNSBMMi45NDk1NzAzMSwzNSBDMS4zMjA1MjM0NCwzNSAwLDMzLjI1ODg0MDQgMCwzMS4xMzcxMjc3IEwwLDEzIEwxMS4xNjAzMDA4LDEzIEMxMi4zOTMwNDY5LDEzIDEzLjM4NjcxODgsMTQuMzIyODA4NSAxMy4zODY3MTg4LDE1LjkyODQ1NzQgTDEzLjM4NjcxODgsMTUuOTQ5NjM4MyBDMTMuMzg2NzE4OCwxNy41NTUyODcyIDE0LjM5MTcxMDksMTguODUxMTgwOSAxNS42MjQ0NTcsMTguODUxMTgwOSBMMzAuMzc1NTQzLDE4Ljg1MTE4MDkgQzMxLjYwODI4OTEsMTguODUxMTgwOSAzMi42MTMyODEzLDE3LjU0MzM1MTEgMzIuNjEzMjgxMywxNS45Mzc3MDIxIEwzMi42MTMyODEzLDE1LjkzMTUgWiIgIGZpbGw9IiNGQUZBRkEiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T
     */
    var NzEmptyService = /** @class */ (function () {
        function NzEmptyService(nzConfigService, legacyDefaultEmptyContent) {
            var _this = this;
            this.nzConfigService = nzConfigService;
            this.legacyDefaultEmptyContent = legacyDefaultEmptyContent;
            this.userDefaultContent$ = new rxjs.BehaviorSubject(undefined);
            if (legacyDefaultEmptyContent) {
                core$1.warnDeprecation("'NZ_DEFAULT_EMPTY_CONTENT' is deprecated and would be removed in 9.0.0. Please migrate to 'NZ_CONFIG'.");
            }
            /** @type {?} */
            var userDefaultEmptyContent = this.getUserDefaultEmptyContent();
            if (userDefaultEmptyContent) {
                this.userDefaultContent$.next(userDefaultEmptyContent);
            }
            this.nzConfigService.getConfigChangeEventForComponent('empty').subscribe((/**
             * @return {?}
             */
            function () {
                _this.userDefaultContent$.next(_this.getUserDefaultEmptyContent());
            }));
        }
        /**
         * @param {?=} content
         * @return {?}
         */
        NzEmptyService.prototype.setDefaultContent = /**
         * @param {?=} content
         * @return {?}
         */
        function (content) {
            core$1.warnDeprecation("'setDefaultContent' is deprecated and would be removed in 9.0.0. Please migrate to 'NzConfigService'.");
            if (typeof content === 'string' ||
                content === undefined ||
                content === null ||
                content instanceof core.TemplateRef ||
                content instanceof core.Type) {
                this.userDefaultContent$.next(content);
            }
            else {
                throw new Error(core$1.PREFIX + " 'useDefaultContent' expect 'string', 'templateRef' or 'component' but get " + content + ".");
            }
        };
        /**
         * @return {?}
         */
        NzEmptyService.prototype.resetDefault = /**
         * @return {?}
         */
        function () {
            core$1.warnDeprecation("'resetDefault' is deprecated and would be removed in 9.0.0. Please migrate to 'NzConfigService' and provide an 'undefined'.");
            this.userDefaultContent$.next(undefined);
        };
        /**
         * @private
         * @return {?}
         */
        NzEmptyService.prototype.getUserDefaultEmptyContent = /**
         * @private
         * @return {?}
         */
        function () {
            return ((this.nzConfigService.getConfigForComponent('empty') || {}).nzDefaultEmptyContent ||
                this.legacyDefaultEmptyContent);
        };
        /** @nocollapse */
        NzEmptyService.ctorParameters = function () { return [
            { type: core$1.NzConfigService },
            { type: core.Type, decorators: [{ type: core.Inject, args: [NZ_DEFAULT_EMPTY_CONTENT,] }, { type: core.Optional }] }
        ]; };
        /** @nocollapse */ NzEmptyService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function NzEmptyService_Factory() { return new NzEmptyService(core.ɵɵinject(core$1.NzConfigService), core.ɵɵinject(NZ_DEFAULT_EMPTY_CONTENT, 8)); }, token: NzEmptyService, providedIn: "root" });
NzEmptyService.ɵfac = function NzEmptyService_Factory(t) { return new (t || NzEmptyService)(ɵngcc0.ɵɵinject(ɵngcc1.NzConfigService), ɵngcc0.ɵɵinject(NZ_DEFAULT_EMPTY_CONTENT, 8)); };
NzEmptyService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: NzEmptyService, factory: function (t) { return NzEmptyService.ɵfac(t); }, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzEmptyService, [{
        type: core.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ɵngcc1.NzConfigService }, { type: ɵngcc0.Type, decorators: [{
                type: core.Inject,
                args: [NZ_DEFAULT_EMPTY_CONTENT]
            }, {
                type: core.Optional
            }] }]; }, null); })();
        return NzEmptyService;
    }());
    if (false) {
        /** @type {?} */
        NzEmptyService.prototype.userDefaultContent$;
        /**
         * @type {?}
         * @private
         */
        NzEmptyService.prototype.nzConfigService;
        /**
         * @type {?}
         * @private
         */
        NzEmptyService.prototype.legacyDefaultEmptyContent;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzEmbedEmptyComponent = /** @class */ (function () {
        function NzEmbedEmptyComponent(emptyService, sanitizer, viewContainerRef, cdr, injector) {
            this.emptyService = emptyService;
            this.sanitizer = sanitizer;
            this.viewContainerRef = viewContainerRef;
            this.cdr = cdr;
            this.injector = injector;
            this.contentType = 'string';
            // tslint:disable-line:no-any
            this.defaultSvg = this.sanitizer.bypassSecurityTrustResourceUrl(simpleEmptyImage);
            this.size = '';
            this.subs_ = new rxjs.Subscription();
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        NzEmbedEmptyComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.nzComponentName) {
                this.size = this.getEmptySize(changes.nzComponentName.currentValue);
            }
            if (changes.specificContent && !changes.specificContent.isFirstChange()) {
                this.content = changes.specificContent.currentValue;
                this.renderEmpty();
            }
        };
        /**
         * @return {?}
         */
        NzEmbedEmptyComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var userContent_ = this.emptyService.userDefaultContent$.subscribe((/**
             * @param {?} content
             * @return {?}
             */
            function (content) {
                _this.content = _this.specificContent || content;
                _this.renderEmpty();
            }));
            this.subs_.add(userContent_);
        };
        /**
         * @return {?}
         */
        NzEmbedEmptyComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.subs_.unsubscribe();
        };
        /**
         * @private
         * @param {?} componentName
         * @return {?}
         */
        NzEmbedEmptyComponent.prototype.getEmptySize = /**
         * @private
         * @param {?} componentName
         * @return {?}
         */
        function (componentName) {
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
        /**
         * @private
         * @return {?}
         */
        NzEmbedEmptyComponent.prototype.renderEmpty = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var content = this.content;
            if (typeof content === 'string') {
                this.contentType = 'string';
            }
            else if (content instanceof core.TemplateRef) {
                /** @type {?} */
                var context = (/** @type {?} */ ({ $implicit: this.nzComponentName }));
                this.contentType = 'template';
                this.contentPortal = new portal.TemplatePortal(content, this.viewContainerRef, context);
            }
            else if (content instanceof core.Type) {
                /** @type {?} */
                var context = new WeakMap([[NZ_EMPTY_COMPONENT_NAME, this.nzComponentName]]);
                /** @type {?} */
                var injector = new portal.PortalInjector(this.injector, context);
                this.contentType = 'component';
                this.contentPortal = new portal.ComponentPortal(content, this.viewContainerRef, injector);
            }
            else {
                this.contentType = 'string';
                this.contentPortal = undefined;
            }
            this.cdr.markForCheck();
        };
        /** @nocollapse */
        NzEmbedEmptyComponent.ctorParameters = function () { return [
            { type: NzEmptyService },
            { type: platformBrowser.DomSanitizer },
            { type: core.ViewContainerRef },
            { type: core.ChangeDetectorRef },
            { type: core.Injector }
        ]; };
        NzEmbedEmptyComponent.propDecorators = {
            nzComponentName: [{ type: core.Input }],
            specificContent: [{ type: core.Input }]
        };
NzEmbedEmptyComponent.ɵfac = function NzEmbedEmptyComponent_Factory(t) { return new (t || NzEmbedEmptyComponent)(ɵngcc0.ɵɵdirectiveInject(NzEmptyService), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.DomSanitizer), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Injector)); };
NzEmbedEmptyComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzEmbedEmptyComponent, selectors: [["nz-embed-empty"]], inputs: { nzComponentName: "nzComponentName", specificContent: "specificContent" }, exportAs: ["nzEmbedEmpty"], features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 2, consts: [[3, "ngSwitch", 4, "ngIf"], [4, "ngIf"], [3, "ngSwitch"], ["class", "ant-empty-normal", 3, "nzNotFoundImage", 4, "ngSwitchCase"], ["class", "ant-empty-small", 3, "nzNotFoundImage", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "ant-empty-normal", 3, "nzNotFoundImage"], [1, "ant-empty-small", 3, "nzNotFoundImage"], [3, "cdkPortalOutlet"]], template: function NzEmbedEmptyComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzEmbedEmptyComponent_ng_container_0_Template, 4, 3, "ng-container", 0);
        ɵngcc0.ɵɵtemplate(1, NzEmbedEmptyComponent_ng_container_1_Template, 3, 2, "ng-container", 1);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", !ctx.content && ctx.specificContent !== null);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.content);
    } }, directives: function () { return [ɵngcc3.NgIf, ɵngcc3.NgSwitch, ɵngcc3.NgSwitchCase, ɵngcc3.NgSwitchDefault, NzEmptyComponent, ɵngcc4.CdkPortalOutlet]; }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzEmbedEmptyComponent, [{
        type: core.Component,
        args: [{
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                selector: 'nz-embed-empty',
                exportAs: 'nzEmbedEmpty',
                template: "<ng-container *ngIf=\"!content && specificContent !== null\" [ngSwitch]=\"size\">\r\n  <nz-empty *ngSwitchCase=\"'normal'\" class=\"ant-empty-normal\" [nzNotFoundImage]=\"defaultSvg\"></nz-empty>\r\n  <nz-empty *ngSwitchCase=\"'small'\" class=\"ant-empty-small\" [nzNotFoundImage]=\"defaultSvg\"></nz-empty>\r\n  <nz-empty *ngSwitchDefault></nz-empty>\r\n</ng-container>\r\n<ng-container *ngIf=\"content\">\r\n  <ng-template *ngIf=\"contentType !== 'string'\" [cdkPortalOutlet]=\"contentPortal\"></ng-template>\r\n  <ng-container *ngIf=\"contentType === 'string'\">\r\n    {{ content }}\r\n  </ng-container>\r\n</ng-container>\r\n"
            }]
    }], function () { return [{ type: NzEmptyService }, { type: ɵngcc2.DomSanitizer }, { type: ɵngcc0.ViewContainerRef }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.Injector }]; }, { nzComponentName: [{
            type: core.Input
        }], specificContent: [{
            type: core.Input
        }] }); })();
        return NzEmbedEmptyComponent;
    }());
    if (false) {
        /** @type {?} */
        NzEmbedEmptyComponent.prototype.nzComponentName;
        /** @type {?} */
        NzEmbedEmptyComponent.prototype.specificContent;
        /** @type {?} */
        NzEmbedEmptyComponent.prototype.content;
        /** @type {?} */
        NzEmbedEmptyComponent.prototype.contentType;
        /** @type {?} */
        NzEmbedEmptyComponent.prototype.contentPortal;
        /** @type {?} */
        NzEmbedEmptyComponent.prototype.defaultSvg;
        /** @type {?} */
        NzEmbedEmptyComponent.prototype.size;
        /** @type {?} */
        NzEmbedEmptyComponent.prototype.subs_;
        /** @type {?} */
        NzEmbedEmptyComponent.prototype.emptyService;
        /**
         * @type {?}
         * @private
         */
        NzEmbedEmptyComponent.prototype.sanitizer;
        /**
         * @type {?}
         * @private
         */
        NzEmbedEmptyComponent.prototype.viewContainerRef;
        /**
         * @type {?}
         * @private
         */
        NzEmbedEmptyComponent.prototype.cdr;
        /**
         * @type {?}
         * @private
         */
        NzEmbedEmptyComponent.prototype.injector;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            this.destroy$ = new rxjs.Subject();
        }
        Object.defineProperty(NzEmptyComponent.prototype, "shouldRenderContent", {
            get: /**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var content = this.nzNotFoundContent;
                return !!(content || typeof content === 'string');
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} changes
         * @return {?}
         */
        NzEmptyComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            var nzNotFoundContent = changes.nzNotFoundContent;
            if (nzNotFoundContent) {
                this.isContentString = typeof nzNotFoundContent.currentValue === 'string';
            }
        };
        /**
         * @return {?}
         */
        NzEmptyComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.i18n.localeChange.pipe(operators.takeUntil(this.destroy$)).subscribe((/**
             * @return {?}
             */
            function () {
                _this.locale = _this.i18n.getLocaleData('Empty');
                _this.cdr.markForCheck();
            }));
        };
        /**
         * @return {?}
         */
        NzEmptyComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        /** @nocollapse */
        NzEmptyComponent.ctorParameters = function () { return [
            { type: platformBrowser.DomSanitizer },
            { type: i18n.NzI18nService },
            { type: core.ChangeDetectorRef }
        ]; };
        NzEmptyComponent.propDecorators = {
            nzNotFoundImage: [{ type: core.Input }],
            nzNotFoundContent: [{ type: core.Input }],
            nzNotFoundFooter: [{ type: core.Input }]
        };
NzEmptyComponent.ɵfac = function NzEmptyComponent_Factory(t) { return new (t || NzEmptyComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc2.DomSanitizer), ɵngcc0.ɵɵdirectiveInject(ɵngcc5.NzI18nService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
NzEmptyComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzEmptyComponent, selectors: [["nz-empty"]], hostAttrs: [1, "ant-empty"], inputs: { nzNotFoundImage: "nzNotFoundImage", nzNotFoundContent: "nzNotFoundContent", nzNotFoundFooter: "nzNotFoundFooter" }, exportAs: ["nzEmpty"], features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 5, vars: 3, consts: [[1, "ant-empty-image"], [4, "nzStringTemplateOutlet"], [1, "ant-empty-description"], ["class", "ant-empty-footer", 4, "ngIf"], [3, "src", "alt"], [1, "ant-empty-footer"]], template: function NzEmptyComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, NzEmptyComponent_ng_container_1_Template, 2, 2, "ng-container", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(2, "p", 2);
        ɵngcc0.ɵɵtemplate(3, NzEmptyComponent_ng_container_3_Template, 2, 1, "ng-container", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(4, NzEmptyComponent_div_4_Template, 2, 1, "div", 3);
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx.nzNotFoundImage);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx.nzNotFoundContent);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzNotFoundFooter);
    } }, directives: [ɵngcc1.NzStringTemplateOutletDirective, ɵngcc3.NgIf], styles: ["nz-empty { display: block; }"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzEmptyComponent, [{
        type: core.Component,
        args: [{
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                selector: 'nz-empty',
                exportAs: 'nzEmpty',
                template: "<div class=\"ant-empty-image\">\r\n  <ng-container *nzStringTemplateOutlet=\"nzNotFoundImage\">\r\n    <img [src]=\"nzNotFoundImage || defaultSvg\" [alt]=\"isContentString ? nzNotFoundContent : 'empty'\">\r\n  </ng-container>\r\n</div>\r\n<p class=\"ant-empty-description\">\r\n  <ng-container *nzStringTemplateOutlet=\"nzNotFoundContent\">\r\n    {{ shouldRenderContent ? nzNotFoundContent : locale['description'] }}\r\n  </ng-container>\r\n</p>\r\n<div class=\"ant-empty-footer\" *ngIf=\"nzNotFoundFooter\">\r\n  <ng-container *nzStringTemplateOutlet=\"nzNotFoundFooter\">\r\n    {{ nzNotFoundFooter }}\r\n  </ng-container>\r\n</div>\r\n",
                host: {
                    class: 'ant-empty'
                },
                styles: ['nz-empty { display: block; }']
            }]
    }], function () { return [{ type: ɵngcc2.DomSanitizer }, { type: ɵngcc5.NzI18nService }, { type: ɵngcc0.ChangeDetectorRef }]; }, { nzNotFoundImage: [{
            type: core.Input
        }], nzNotFoundContent: [{
            type: core.Input
        }], nzNotFoundFooter: [{
            type: core.Input
        }] }); })();
        return NzEmptyComponent;
    }());
    if (false) {
        /** @type {?} */
        NzEmptyComponent.prototype.nzNotFoundImage;
        /** @type {?} */
        NzEmptyComponent.prototype.nzNotFoundContent;
        /** @type {?} */
        NzEmptyComponent.prototype.nzNotFoundFooter;
        /** @type {?} */
        NzEmptyComponent.prototype.defaultSvg;
        /** @type {?} */
        NzEmptyComponent.prototype.isContentString;
        /** @type {?} */
        NzEmptyComponent.prototype.locale;
        /**
         * @type {?}
         * @private
         */
        NzEmptyComponent.prototype.destroy$;
        /**
         * @type {?}
         * @private
         */
        NzEmptyComponent.prototype.sanitizer;
        /**
         * @type {?}
         * @private
         */
        NzEmptyComponent.prototype.i18n;
        /**
         * @type {?}
         * @private
         */
        NzEmptyComponent.prototype.cdr;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzEmptyModule = /** @class */ (function () {
        function NzEmptyModule() {
        }
NzEmptyModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzEmptyModule });
NzEmptyModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzEmptyModule_Factory(t) { return new (t || NzEmptyModule)(); }, imports: [[common.CommonModule, portal.PortalModule, core$1.NzAddOnModule, i18n.NzI18nModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzEmptyModule, { declarations: [NzEmptyComponent,
        NzEmbedEmptyComponent], imports: [ɵngcc3.CommonModule, ɵngcc4.PortalModule, ɵngcc1.NzAddOnModule, ɵngcc5.NzI18nModule], exports: [NzEmptyComponent,
        NzEmbedEmptyComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzEmptyModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule, portal.PortalModule, core$1.NzAddOnModule, i18n.NzI18nModule],
                declarations: [NzEmptyComponent, NzEmbedEmptyComponent],
                exports: [NzEmptyComponent, NzEmbedEmptyComponent]
            }]
    }], function () { return []; }, null); })();
        return NzEmptyModule;
    }());

    exports.NZ_DEFAULT_EMPTY_CONTENT = NZ_DEFAULT_EMPTY_CONTENT;
    exports.NZ_EMPTY_COMPONENT_NAME = NZ_EMPTY_COMPONENT_NAME;
    exports.NzEmbedEmptyComponent = NzEmbedEmptyComponent;
    exports.NzEmptyComponent = NzEmptyComponent;
    exports.NzEmptyModule = NzEmptyModule;
    exports.NzEmptyService = NzEmptyService;
    exports.emptyImage = emptyImage;
    exports.simpleEmptyImage = simpleEmptyImage;

    Object.defineProperty(exports, '__esModule', { value: true });

})));


//# sourceMappingURL=ng-zorro-antd-empty.umd.js.map
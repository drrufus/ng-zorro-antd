(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('ng-zorro-antd/core'), require('ng-zorro-antd/icon')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/page-header', ['exports', '@angular/common', '@angular/core', 'ng-zorro-antd/core', 'ng-zorro-antd/icon'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd']['page-header'] = {}), global.ng.common, global.ng.core, global['ng-zorro-antd'].core, global['ng-zorro-antd'].icon));
}(this, (function (exports, common, core, core$1, icon) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: nz-page-header-cells.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzPageHeaderTitleDirective = /** @class */ (function () {
        function NzPageHeaderTitleDirective() {
        }
        NzPageHeaderTitleDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: 'nz-page-header-title, [nz-page-header-title]',
                        exportAs: 'nzPageHeaderTitle',
                        host: {
                            class: 'ant-page-header-heading-title'
                        }
                    },] }
        ];
        return NzPageHeaderTitleDirective;
    }());
    var NzPageHeaderSubtitleDirective = /** @class */ (function () {
        function NzPageHeaderSubtitleDirective() {
        }
        NzPageHeaderSubtitleDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: 'nz-page-header-subtitle, [nz-page-header-subtitle]',
                        exportAs: 'nzPageHeaderSubtitle',
                        host: {
                            class: 'ant-page-header-heading-sub-title'
                        }
                    },] }
        ];
        return NzPageHeaderSubtitleDirective;
    }());
    var NzPageHeaderContentDirective = /** @class */ (function () {
        function NzPageHeaderContentDirective() {
        }
        NzPageHeaderContentDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: 'nz-page-header-content, [nz-page-header-content]',
                        exportAs: 'nzPageHeaderContent',
                        host: {
                            class: 'ant-page-header-content'
                        }
                    },] }
        ];
        return NzPageHeaderContentDirective;
    }());
    var NzPageHeaderTagDirective = /** @class */ (function () {
        function NzPageHeaderTagDirective() {
        }
        NzPageHeaderTagDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: 'nz-page-header-tags, [nz-page-header-tags]',
                        exportAs: 'nzPageHeaderTags',
                        host: {
                            class: 'ant-page-header-heading-tags'
                        }
                    },] }
        ];
        return NzPageHeaderTagDirective;
    }());
    var NzPageHeaderExtraDirective = /** @class */ (function () {
        function NzPageHeaderExtraDirective() {
        }
        NzPageHeaderExtraDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: 'nz-page-header-extra, [nz-page-header-extra]',
                        exportAs: 'nzPageHeaderExtra',
                        host: {
                            class: 'ant-page-header-heading-extra'
                        }
                    },] }
        ];
        return NzPageHeaderExtraDirective;
    }());
    var NzPageHeaderFooterDirective = /** @class */ (function () {
        function NzPageHeaderFooterDirective() {
        }
        NzPageHeaderFooterDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: 'nz-page-header-footer, [nz-page-header-footer]',
                        exportAs: 'nzPageHeaderFooter',
                        host: {
                            class: 'ant-page-header-footer'
                        }
                    },] }
        ];
        return NzPageHeaderFooterDirective;
    }());
    var NzPageHeaderBreadcrumbDirective = /** @class */ (function () {
        function NzPageHeaderBreadcrumbDirective() {
        }
        NzPageHeaderBreadcrumbDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: 'nz-breadcrumb[nz-page-header-breadcrumb]',
                        exportAs: 'nzPageHeaderBreadcrumb'
                    },] }
        ];
        return NzPageHeaderBreadcrumbDirective;
    }());
    var NzPageHeaderAvatarDirective = /** @class */ (function () {
        function NzPageHeaderAvatarDirective() {
        }
        NzPageHeaderAvatarDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: 'nz-avatar[nz-page-header-avatar]',
                        exportAs: 'nzPageHeaderAvatar'
                    },] }
        ];
        return NzPageHeaderAvatarDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: nz-page-header.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var NZ_CONFIG_COMPONENT_NAME = 'pageHeader';
    var NzPageHeaderComponent = /** @class */ (function () {
        function NzPageHeaderComponent(location, nzConfigService) {
            this.location = location;
            this.nzConfigService = nzConfigService;
            this.isTemplateRefBackIcon = false;
            this.isStringBackIcon = false;
            this.nzBackIcon = null;
            this.nzBack = new core.EventEmitter();
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        NzPageHeaderComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.hasOwnProperty('nzBackIcon')) {
                this.isTemplateRefBackIcon = changes.nzBackIcon.currentValue instanceof core.TemplateRef;
                this.isStringBackIcon = typeof changes.nzBackIcon.currentValue === 'string';
            }
        };
        /**
         * @return {?}
         */
        NzPageHeaderComponent.prototype.onBack = /**
         * @return {?}
         */
        function () {
            if (this.nzBack.observers.length) {
                this.nzBack.emit();
            }
            else {
                this.location.back();
            }
        };
        NzPageHeaderComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'nz-page-header',
                        exportAs: 'nzPageHeader',
                        template: "<ng-content select=\"nz-breadcrumb[nz-page-header-breadcrumb]\"></ng-content>\r\n\r\n<div class=\"ant-page-header-heading\">\r\n  <!--back-->\r\n  <div *ngIf=\"nzBackIcon !== null\" (click)=\"onBack()\" class=\"ant-page-header-back\">\r\n    <div role=\"button\" tabindex=\"0\" class=\"ant-page-header-back-button\">\r\n      <i *ngIf=\"isStringBackIcon\" nz-icon [nzType]=\"nzBackIcon ? nzBackIcon : 'arrow-left'\" nzTheme=\"outline\"></i>\r\n      <ng-container *ngIf=\"isTemplateRefBackIcon\" [ngTemplateOutlet]=\"nzBackIcon\"></ng-container>\r\n    </div>\r\n  </div>\r\n  <!--avatar-->\r\n  <ng-content select=\"nz-avatar[nz-page-header-avatar]\"></ng-content>\r\n  <!--title-->\r\n  <span class=\"ant-page-header-heading-title\" *ngIf=\"nzTitle\">\r\n    <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\r\n  </span>\r\n  <ng-content *ngIf=\"!nzTitle\" select=\"nz-page-header-title, [nz-page-header-title]\"></ng-content>\r\n  <!--subtitle-->\r\n  <span class=\"ant-page-header-heading-sub-title\" *ngIf=\"nzSubtitle\">\r\n    <ng-container *nzStringTemplateOutlet=\"nzSubtitle\">{{ nzSubtitle }}</ng-container>\r\n  </span>\r\n  <ng-content *ngIf=\"!nzSubtitle\" select=\"nz-page-header-subtitle, [nz-page-header-subtitle]\"></ng-content>\r\n  <ng-content select=\"nz-page-header-tags, [nz-page-header-tags]\"></ng-content>\r\n  <ng-content select=\"nz-page-header-extra, [nz-page-header-extra]\"></ng-content>\r\n</div>\r\n\r\n<ng-content select=\"nz-page-header-content, [nz-page-header-content]\"></ng-content>\r\n<ng-content select=\"nz-page-header-footer, [nz-page-header-footer]\"></ng-content>\r\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        host: {
                            class: 'ant-page-header',
                            '[class.has-footer]': 'nzPageHeaderFooter',
                            '[class.ant-page-header-ghost]': 'nzGhost',
                            '[class.has-breadcrumb]': 'nzPageHeaderBreadcrumb'
                        },
                        styles: ["nz-page-header,nz-page-header-content,nz-page-header-footer{display:block}", "\n      .ant-page-header-back-button {\n        border: 0px;\n        background: transparent;\n        padding: 0px;\n        line-height: inherit;\n        display: inline-block;\n      }\n    "]
                    }] }
        ];
        /** @nocollapse */
        NzPageHeaderComponent.ctorParameters = function () { return [
            { type: common.Location },
            { type: core$1.NzConfigService }
        ]; };
        NzPageHeaderComponent.propDecorators = {
            nzBackIcon: [{ type: core.Input }],
            nzTitle: [{ type: core.Input }],
            nzSubtitle: [{ type: core.Input }],
            nzGhost: [{ type: core.Input }],
            nzBack: [{ type: core.Output }],
            nzPageHeaderFooter: [{ type: core.ContentChild, args: [NzPageHeaderFooterDirective, { static: false },] }],
            nzPageHeaderBreadcrumb: [{ type: core.ContentChild, args: [NzPageHeaderBreadcrumbDirective, { static: false },] }]
        };
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, true),
            __metadata("design:type", Boolean)
        ], NzPageHeaderComponent.prototype, "nzGhost", void 0);
        return NzPageHeaderComponent;
    }());
    if (false) {
        /** @type {?} */
        NzPageHeaderComponent.prototype.isTemplateRefBackIcon;
        /** @type {?} */
        NzPageHeaderComponent.prototype.isStringBackIcon;
        /** @type {?} */
        NzPageHeaderComponent.prototype.nzBackIcon;
        /** @type {?} */
        NzPageHeaderComponent.prototype.nzTitle;
        /** @type {?} */
        NzPageHeaderComponent.prototype.nzSubtitle;
        /** @type {?} */
        NzPageHeaderComponent.prototype.nzGhost;
        /** @type {?} */
        NzPageHeaderComponent.prototype.nzBack;
        /** @type {?} */
        NzPageHeaderComponent.prototype.nzPageHeaderFooter;
        /** @type {?} */
        NzPageHeaderComponent.prototype.nzPageHeaderBreadcrumb;
        /**
         * @type {?}
         * @private
         */
        NzPageHeaderComponent.prototype.location;
        /** @type {?} */
        NzPageHeaderComponent.prototype.nzConfigService;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: nz-page-header.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var NzPageHeaderCells = [
        NzPageHeaderTitleDirective,
        NzPageHeaderSubtitleDirective,
        NzPageHeaderContentDirective,
        NzPageHeaderTagDirective,
        NzPageHeaderExtraDirective,
        NzPageHeaderFooterDirective,
        NzPageHeaderBreadcrumbDirective,
        NzPageHeaderAvatarDirective
    ];
    var NzPageHeaderModule = /** @class */ (function () {
        function NzPageHeaderModule() {
        }
        NzPageHeaderModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, core$1.NzAddOnModule, icon.NzIconModule],
                        exports: [NzPageHeaderComponent, NzPageHeaderCells],
                        declarations: [NzPageHeaderComponent, NzPageHeaderCells]
                    },] }
        ];
        return NzPageHeaderModule;
    }());

    exports.NzPageHeaderAvatarDirective = NzPageHeaderAvatarDirective;
    exports.NzPageHeaderBreadcrumbDirective = NzPageHeaderBreadcrumbDirective;
    exports.NzPageHeaderComponent = NzPageHeaderComponent;
    exports.NzPageHeaderContentDirective = NzPageHeaderContentDirective;
    exports.NzPageHeaderExtraDirective = NzPageHeaderExtraDirective;
    exports.NzPageHeaderFooterDirective = NzPageHeaderFooterDirective;
    exports.NzPageHeaderModule = NzPageHeaderModule;
    exports.NzPageHeaderSubtitleDirective = NzPageHeaderSubtitleDirective;
    exports.NzPageHeaderTagDirective = NzPageHeaderTagDirective;
    exports.NzPageHeaderTitleDirective = NzPageHeaderTitleDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-page-header.umd.js.map

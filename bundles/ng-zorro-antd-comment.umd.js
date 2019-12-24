(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('ng-zorro-antd/core'), require('@angular/cdk/portal')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/comment', ['exports', '@angular/common', '@angular/core', 'ng-zorro-antd/core', '@angular/cdk/portal'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].comment = {}), global.ng.common, global.ng.core, global['ng-zorro-antd'].core, global.ng.cdk.portal));
}(this, (function (exports, common, core, core$1, portal) { 'use strict';

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
     * Generated from: nz-comment-cells.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzCommentAvatarDirective = /** @class */ (function () {
        function NzCommentAvatarDirective() {
        }
        NzCommentAvatarDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: 'nz-avatar[nz-comment-avatar]',
                        exportAs: 'nzCommentAvatar'
                    },] }
        ];
        return NzCommentAvatarDirective;
    }());
    var NzCommentContentDirective = /** @class */ (function () {
        function NzCommentContentDirective() {
        }
        NzCommentContentDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: 'nz-comment-content, [nz-comment-content]',
                        exportAs: 'nzCommentContent',
                        host: { class: 'ant-comment-content-detail' }
                    },] }
        ];
        return NzCommentContentDirective;
    }());
    var NzCommentActionHostDirective = /** @class */ (function (_super) {
        __extends(NzCommentActionHostDirective, _super);
        function NzCommentActionHostDirective(componentFactoryResolver, viewContainerRef) {
            return _super.call(this, componentFactoryResolver, viewContainerRef) || this;
        }
        /**
         * @return {?}
         */
        NzCommentActionHostDirective.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            _super.prototype.ngOnInit.call(this);
        };
        /**
         * @return {?}
         */
        NzCommentActionHostDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            _super.prototype.ngOnDestroy.call(this);
        };
        /**
         * @return {?}
         */
        NzCommentActionHostDirective.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            this.attach(this.nzCommentActionHost);
        };
        NzCommentActionHostDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[nzCommentActionHost]',
                        exportAs: 'nzCommentActionHost'
                    },] }
        ];
        /** @nocollapse */
        NzCommentActionHostDirective.ctorParameters = function () { return [
            { type: core.ComponentFactoryResolver },
            { type: core.ViewContainerRef }
        ]; };
        NzCommentActionHostDirective.propDecorators = {
            nzCommentActionHost: [{ type: core.Input }]
        };
        return NzCommentActionHostDirective;
    }(portal.CdkPortalOutlet));
    if (false) {
        /** @type {?} */
        NzCommentActionHostDirective.prototype.nzCommentActionHost;
    }
    var NzCommentActionComponent = /** @class */ (function () {
        function NzCommentActionComponent(viewContainerRef) {
            this.viewContainerRef = viewContainerRef;
            this.contentPortal = null;
        }
        Object.defineProperty(NzCommentActionComponent.prototype, "content", {
            get: /**
             * @return {?}
             */
            function () {
                return this.contentPortal;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NzCommentActionComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.contentPortal = new portal.TemplatePortal(this.implicitContent, this.viewContainerRef);
        };
        NzCommentActionComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'nz-comment-action',
                        exportAs: 'nzCommentAction',
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        template: '<ng-template><ng-content></ng-content></ng-template>'
                    }] }
        ];
        /** @nocollapse */
        NzCommentActionComponent.ctorParameters = function () { return [
            { type: core.ViewContainerRef }
        ]; };
        NzCommentActionComponent.propDecorators = {
            implicitContent: [{ type: core.ViewChild, args: [core.TemplateRef, { static: true },] }]
        };
        return NzCommentActionComponent;
    }());
    if (false) {
        /** @type {?} */
        NzCommentActionComponent.prototype.implicitContent;
        /**
         * @type {?}
         * @private
         */
        NzCommentActionComponent.prototype.contentPortal;
        /**
         * @type {?}
         * @private
         */
        NzCommentActionComponent.prototype.viewContainerRef;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: nz-comment.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzCommentComponent = /** @class */ (function () {
        function NzCommentComponent() {
        }
        NzCommentComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'nz-comment',
                        exportAs: 'nzComment',
                        template: "<div class=\"ant-comment-inner\">\n  <div class=\"ant-comment-avatar\">\n    <ng-content select=\"nz-avatar[nz-comment-avatar]\"></ng-content>\n  </div>\n  <div class=\"ant-comment-content\">\n    <div class=\"ant-comment-content-author\">\n      <span *ngIf=\"nzAuthor\" class=\"ant-comment-content-author-name\">\n        <ng-container *nzStringTemplateOutlet=\"nzAuthor\">{{ nzAuthor }}</ng-container>\n      </span>\n      <span *ngIf=\"nzDatetime\" class=\"ant-comment-content-author-time\">\n        <ng-container *nzStringTemplateOutlet=\"nzDatetime\">{{ nzDatetime }}</ng-container>\n      </span>\n    </div>\n    <ng-content select=\"nz-comment-content\"></ng-content>\n    <ul class=\"ant-comment-actions\" *ngIf=\"actions?.length\">\n      <li *ngFor=\"let action of actions\">\n        <span><ng-template [nzCommentActionHost]=\"action.content\"></ng-template></span>\n      </li>\n    </ul>\n  </div>\n</div>\n<div class=\"ant-comment-nested\">\n  <ng-content></ng-content>\n</div>",
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        host: {
                            class: 'ant-comment'
                        },
                        styles: ["\n      nz-comment {\n        display: block;\n      }\n\n      nz-comment-content {\n        display: block;\n      }\n    "]
                    }] }
        ];
        /** @nocollapse */
        NzCommentComponent.ctorParameters = function () { return []; };
        NzCommentComponent.propDecorators = {
            nzAuthor: [{ type: core.Input }],
            nzDatetime: [{ type: core.Input }],
            actions: [{ type: core.ContentChildren, args: [NzCommentActionComponent,] }]
        };
        return NzCommentComponent;
    }());
    if (false) {
        /** @type {?} */
        NzCommentComponent.prototype.nzAuthor;
        /** @type {?} */
        NzCommentComponent.prototype.nzDatetime;
        /** @type {?} */
        NzCommentComponent.prototype.actions;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: nz-comment.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var NZ_COMMENT_CELLS = [
        NzCommentAvatarDirective,
        NzCommentContentDirective,
        NzCommentActionComponent,
        NzCommentActionHostDirective
    ];
    var NzCommentModule = /** @class */ (function () {
        function NzCommentModule() {
        }
        NzCommentModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, core$1.NzAddOnModule],
                        exports: __spread([NzCommentComponent], NZ_COMMENT_CELLS),
                        declarations: __spread([NzCommentComponent], NZ_COMMENT_CELLS)
                    },] }
        ];
        return NzCommentModule;
    }());

    exports.NzCommentActionComponent = NzCommentActionComponent;
    exports.NzCommentActionHostDirective = NzCommentActionHostDirective;
    exports.NzCommentAvatarDirective = NzCommentAvatarDirective;
    exports.NzCommentComponent = NzCommentComponent;
    exports.NzCommentContentDirective = NzCommentContentDirective;
    exports.NzCommentModule = NzCommentModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-comment.umd.js.map

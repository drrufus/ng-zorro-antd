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

    var _c0 = [1, "ant-comment-content-detail"];
    function NzCommentActionComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵprojection(0);
    } }
    var _c1 = ["*"];
    var NzCommentAvatarDirective = /** @class */ (function () {
        function NzCommentAvatarDirective() {
        }
        /** @nocollapse */ NzCommentAvatarDirective.ɵfac = function NzCommentAvatarDirective_Factory(t) { return new (t || NzCommentAvatarDirective)(); };
        /** @nocollapse */ NzCommentAvatarDirective.ɵdir = core.ɵɵdefineDirective({ type: NzCommentAvatarDirective, selectors: [["nz-avatar", "nz-comment-avatar", ""]], exportAs: ["nzCommentAvatar"] });
        return NzCommentAvatarDirective;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzCommentAvatarDirective, [{
            type: core.Directive,
            args: [{
                    selector: 'nz-avatar[nz-comment-avatar]',
                    exportAs: 'nzCommentAvatar'
                }]
        }], null, null); })();
    var NzCommentContentDirective = /** @class */ (function () {
        function NzCommentContentDirective() {
        }
        /** @nocollapse */ NzCommentContentDirective.ɵfac = function NzCommentContentDirective_Factory(t) { return new (t || NzCommentContentDirective)(); };
        /** @nocollapse */ NzCommentContentDirective.ɵdir = core.ɵɵdefineDirective({ type: NzCommentContentDirective, selectors: [["nz-comment-content"], ["", "nz-comment-content", ""]], hostBindings: function NzCommentContentDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
                core.ɵɵelementHostAttrs(_c0);
            } }, exportAs: ["nzCommentContent"] });
        return NzCommentContentDirective;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzCommentContentDirective, [{
            type: core.Directive,
            args: [{
                    selector: 'nz-comment-content, [nz-comment-content]',
                    exportAs: 'nzCommentContent',
                    host: { class: 'ant-comment-content-detail' }
                }]
        }], null, null); })();
    var NzCommentActionHostDirective = /** @class */ (function (_super) {
        __extends(NzCommentActionHostDirective, _super);
        function NzCommentActionHostDirective(componentFactoryResolver, viewContainerRef) {
            return _super.call(this, componentFactoryResolver, viewContainerRef) || this;
        }
        NzCommentActionHostDirective.prototype.ngOnInit = function () {
            _super.prototype.ngOnInit.call(this);
        };
        NzCommentActionHostDirective.prototype.ngOnDestroy = function () {
            _super.prototype.ngOnDestroy.call(this);
        };
        NzCommentActionHostDirective.prototype.ngAfterViewInit = function () {
            this.attach(this.nzCommentActionHost);
        };
        /** @nocollapse */ NzCommentActionHostDirective.ɵfac = function NzCommentActionHostDirective_Factory(t) { return new (t || NzCommentActionHostDirective)(core.ɵɵdirectiveInject(core.ComponentFactoryResolver), core.ɵɵdirectiveInject(core.ViewContainerRef)); };
        /** @nocollapse */ NzCommentActionHostDirective.ɵdir = core.ɵɵdefineDirective({ type: NzCommentActionHostDirective, selectors: [["", "nzCommentActionHost", ""]], inputs: { nzCommentActionHost: "nzCommentActionHost" }, exportAs: ["nzCommentActionHost"], features: [core.ɵɵInheritDefinitionFeature] });
        return NzCommentActionHostDirective;
    }(portal.CdkPortalOutlet));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzCommentActionHostDirective, [{
            type: core.Directive,
            args: [{
                    selector: '[nzCommentActionHost]',
                    exportAs: 'nzCommentActionHost'
                }]
        }], function () { return [{ type: core.ComponentFactoryResolver }, { type: core.ViewContainerRef }]; }, { nzCommentActionHost: [{
                type: core.Input
            }] }); })();
    var NzCommentActionComponent = /** @class */ (function () {
        function NzCommentActionComponent(viewContainerRef) {
            this.viewContainerRef = viewContainerRef;
            this.contentPortal = null;
        }
        Object.defineProperty(NzCommentActionComponent.prototype, "content", {
            get: function () {
                return this.contentPortal;
            },
            enumerable: true,
            configurable: true
        });
        NzCommentActionComponent.prototype.ngOnInit = function () {
            this.contentPortal = new portal.TemplatePortal(this.implicitContent, this.viewContainerRef);
        };
        /** @nocollapse */ NzCommentActionComponent.ɵfac = function NzCommentActionComponent_Factory(t) { return new (t || NzCommentActionComponent)(core.ɵɵdirectiveInject(core.ViewContainerRef)); };
        /** @nocollapse */ NzCommentActionComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzCommentActionComponent, selectors: [["nz-comment-action"]], viewQuery: function NzCommentActionComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵstaticViewQuery(core.TemplateRef, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.implicitContent = _t.first);
            } }, exportAs: ["nzCommentAction"], ngContentSelectors: _c1, decls: 1, vars: 0, template: function NzCommentActionComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵtemplate(0, NzCommentActionComponent_ng_template_0_Template, 1, 0, "ng-template");
            } }, encapsulation: 2, changeDetection: 0 });
        return NzCommentActionComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzCommentActionComponent, [{
            type: core.Component,
            args: [{
                    selector: 'nz-comment-action',
                    exportAs: 'nzCommentAction',
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    template: '<ng-template><ng-content></ng-content></ng-template>'
                }]
        }], function () { return [{ type: core.ViewContainerRef }]; }, { implicitContent: [{
                type: core.ViewChild,
                args: [core.TemplateRef, { static: true }]
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var _c0$1 = [1, "ant-comment"];
    function NzCommentComponent_span_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtext(1);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r163 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(ctx_r163.nzAuthor);
    } }
    function NzCommentComponent_span_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span", 8);
        core.ɵɵtemplate(1, NzCommentComponent_span_5_ng_container_1_Template, 2, 1, "ng-container", 9);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r160 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("nzStringTemplateOutlet", ctx_r160.nzAuthor);
    } }
    function NzCommentComponent_span_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtext(1);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r164 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(ctx_r164.nzDatetime);
    } }
    function NzCommentComponent_span_6_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span", 10);
        core.ɵɵtemplate(1, NzCommentComponent_span_6_ng_container_1_Template, 2, 1, "ng-container", 9);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r161 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("nzStringTemplateOutlet", ctx_r161.nzDatetime);
    } }
    function NzCommentComponent_ul_8_li_1_ng_template_2_Template(rf, ctx) { }
    function NzCommentComponent_ul_8_li_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "li");
        core.ɵɵelementStart(1, "span");
        core.ɵɵtemplate(2, NzCommentComponent_ul_8_li_1_ng_template_2_Template, 0, 0, "ng-template", 13);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var action_r166 = ctx.$implicit;
        core.ɵɵadvance(2);
        core.ɵɵproperty("nzCommentActionHost", action_r166.content);
    } }
    function NzCommentComponent_ul_8_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "ul", 11);
        core.ɵɵtemplate(1, NzCommentComponent_ul_8_li_1_Template, 3, 1, "li", 12);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r162 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", ctx_r162.actions);
    } }
    var _c1$1 = [[["nz-avatar", "nz-comment-avatar", ""]], [["nz-comment-content"]], "*"];
    var _c2 = ["nz-avatar[nz-comment-avatar]", "nz-comment-content", "*"];
    var NzCommentComponent = /** @class */ (function () {
        function NzCommentComponent() {
        }
        /** @nocollapse */ NzCommentComponent.ɵfac = function NzCommentComponent_Factory(t) { return new (t || NzCommentComponent)(); };
        /** @nocollapse */ NzCommentComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzCommentComponent, selectors: [["nz-comment"]], contentQueries: function NzCommentComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
                core.ɵɵcontentQuery(dirIndex, NzCommentActionComponent, false);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.actions = _t);
            } }, hostBindings: function NzCommentComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
                core.ɵɵelementHostAttrs(_c0$1);
            } }, inputs: { nzAuthor: "nzAuthor", nzDatetime: "nzDatetime" }, exportAs: ["nzComment"], ngContentSelectors: _c2, decls: 11, vars: 3, consts: [[1, "ant-comment-inner"], [1, "ant-comment-avatar"], [1, "ant-comment-content"], [1, "ant-comment-content-author"], ["class", "ant-comment-content-author-name", 4, "ngIf"], ["class", "ant-comment-content-author-time", 4, "ngIf"], ["class", "ant-comment-actions", 4, "ngIf"], [1, "ant-comment-nested"], [1, "ant-comment-content-author-name"], [4, "nzStringTemplateOutlet"], [1, "ant-comment-content-author-time"], [1, "ant-comment-actions"], [4, "ngFor", "ngForOf"], [3, "nzCommentActionHost"]], template: function NzCommentComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef(_c1$1);
                core.ɵɵelementStart(0, "div", 0);
                core.ɵɵelementStart(1, "div", 1);
                core.ɵɵprojection(2);
                core.ɵɵelementEnd();
                core.ɵɵelementStart(3, "div", 2);
                core.ɵɵelementStart(4, "div", 3);
                core.ɵɵtemplate(5, NzCommentComponent_span_5_Template, 2, 1, "span", 4);
                core.ɵɵtemplate(6, NzCommentComponent_span_6_Template, 2, 1, "span", 5);
                core.ɵɵelementEnd();
                core.ɵɵprojection(7, 1);
                core.ɵɵtemplate(8, NzCommentComponent_ul_8_Template, 2, 1, "ul", 6);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(9, "div", 7);
                core.ɵɵprojection(10, 2);
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵadvance(5);
                core.ɵɵproperty("ngIf", ctx.nzAuthor);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.nzDatetime);
                core.ɵɵadvance(2);
                core.ɵɵproperty("ngIf", ctx.actions == null ? null : ctx.actions.length);
            } }, directives: [common.NgIf, core$1.NzStringTemplateOutletDirective, common.NgForOf, NzCommentActionHostDirective], styles: ["\n      nz-comment {\n        display: block;\n      }\n\n      nz-comment-content {\n        display: block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
        return NzCommentComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzCommentComponent, [{
            type: core.Component,
            args: [{
                    selector: 'nz-comment',
                    exportAs: 'nzComment',
                    templateUrl: './nz-comment.component.html',
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    host: {
                        class: 'ant-comment'
                    },
                    styles: [
                        "\n      nz-comment {\n        display: block;\n      }\n\n      nz-comment-content {\n        display: block;\n      }\n    "
                    ]
                }]
        }], function () { return []; }, { nzAuthor: [{
                type: core.Input
            }], nzDatetime: [{
                type: core.Input
            }], actions: [{
                type: core.ContentChildren,
                args: [NzCommentActionComponent]
            }] }); })();

    var NZ_COMMENT_CELLS = [NzCommentAvatarDirective, NzCommentContentDirective, NzCommentActionComponent, NzCommentActionHostDirective];
    var NzCommentModule = /** @class */ (function () {
        function NzCommentModule() {
        }
        /** @nocollapse */ NzCommentModule.ɵmod = core.ɵɵdefineNgModule({ type: NzCommentModule });
        /** @nocollapse */ NzCommentModule.ɵinj = core.ɵɵdefineInjector({ factory: function NzCommentModule_Factory(t) { return new (t || NzCommentModule)(); }, imports: [[common.CommonModule, core$1.NzAddOnModule]] });
        return NzCommentModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(NzCommentModule, { declarations: [NzCommentComponent,
            NzCommentAvatarDirective, NzCommentContentDirective, NzCommentActionComponent, NzCommentActionHostDirective], imports: [common.CommonModule, core$1.NzAddOnModule], exports: [NzCommentComponent,
            NzCommentAvatarDirective, NzCommentContentDirective, NzCommentActionComponent, NzCommentActionHostDirective] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzCommentModule, [{
            type: core.NgModule,
            args: [{
                    imports: [common.CommonModule, core$1.NzAddOnModule],
                    exports: __spread([NzCommentComponent], NZ_COMMENT_CELLS),
                    declarations: __spread([NzCommentComponent], NZ_COMMENT_CELLS)
                }]
        }], null, null); })();

    exports.NzCommentActionComponent = NzCommentActionComponent;
    exports.NzCommentActionHostDirective = NzCommentActionHostDirective;
    exports.NzCommentAvatarDirective = NzCommentAvatarDirective;
    exports.NzCommentComponent = NzCommentComponent;
    exports.NzCommentContentDirective = NzCommentContentDirective;
    exports.NzCommentModule = NzCommentModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-comment.umd.js.map

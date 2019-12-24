(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('ng-zorro-antd/avatar'), require('ng-zorro-antd/core'), require('rxjs'), require('ng-zorro-antd/spin'), require('ng-zorro-antd/grid'), require('ng-zorro-antd/empty')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/list', ['exports', '@angular/core', '@angular/common', 'ng-zorro-antd/avatar', 'ng-zorro-antd/core', 'rxjs', 'ng-zorro-antd/spin', 'ng-zorro-antd/grid', 'ng-zorro-antd/empty'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].list = {}), global.ng.core, global.ng.common, global['ng-zorro-antd'].avatar, global['ng-zorro-antd'].core, global.rxjs, global['ng-zorro-antd'].spin, global['ng-zorro-antd'].grid, global['ng-zorro-antd'].empty));
}(this, (function (exports, core, common, avatar, core$1, rxjs, spin, grid, empty) { 'use strict';

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
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    function NzListItemMetaComponent_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelement(1, "nz-avatar", 4);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r1170 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("nzSrc", ctx_r1170.avatarStr);
    } }
    function NzListItemMetaComponent_div_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 2);
        core.ɵɵtemplate(1, NzListItemMetaComponent_div_0_ng_container_1_Template, 2, 1, "ng-container", 3);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1168 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r1168.avatarStr)("ngIfElse", ctx_r1168.avatarTpl);
    } }
    function NzListItemMetaComponent_div_1_h4_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtext(1);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r1173 = core.ɵɵnextContext(3);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(ctx_r1173.nzTitle);
    } }
    function NzListItemMetaComponent_div_1_h4_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "h4", 8);
        core.ɵɵtemplate(1, NzListItemMetaComponent_div_1_h4_1_ng_container_1_Template, 2, 1, "ng-container", 9);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1171 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("nzStringTemplateOutlet", ctx_r1171.nzTitle);
    } }
    function NzListItemMetaComponent_div_1_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtext(1);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r1174 = core.ɵɵnextContext(3);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(ctx_r1174.nzDescription);
    } }
    function NzListItemMetaComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 10);
        core.ɵɵtemplate(1, NzListItemMetaComponent_div_1_div_2_ng_container_1_Template, 2, 1, "ng-container", 9);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1172 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("nzStringTemplateOutlet", ctx_r1172.nzDescription);
    } }
    function NzListItemMetaComponent_div_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 5);
        core.ɵɵtemplate(1, NzListItemMetaComponent_div_1_h4_1_Template, 2, 1, "h4", 6);
        core.ɵɵtemplate(2, NzListItemMetaComponent_div_1_div_2_Template, 2, 1, "div", 7);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1169 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r1169.nzTitle);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r1169.nzDescription);
    } }
    var NzListItemMetaComponent = /** @class */ (function () {
        function NzListItemMetaComponent(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.avatarStr = '';
            this.renderer.addClass(elementRef.nativeElement, 'ant-list-item-meta');
        }
        Object.defineProperty(NzListItemMetaComponent.prototype, "nzAvatar", {
            set: function (value) {
                if (value instanceof core.TemplateRef) {
                    this.avatarStr = '';
                    this.avatarTpl = value;
                }
                else {
                    this.avatarStr = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        /** @nocollapse */ NzListItemMetaComponent.ɵfac = function NzListItemMetaComponent_Factory(t) { return new (t || NzListItemMetaComponent)(core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(core.Renderer2)); };
        /** @nocollapse */ NzListItemMetaComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzListItemMetaComponent, selectors: [["nz-list-item-meta"], ["", "nz-list-item-meta", ""]], inputs: { nzAvatar: "nzAvatar", nzTitle: "nzTitle", nzDescription: "nzDescription" }, exportAs: ["nzListItemMeta"], decls: 2, vars: 2, consts: [["class", "ant-list-item-meta-avatar", 4, "ngIf"], ["class", "ant-list-item-meta-content", 4, "ngIf"], [1, "ant-list-item-meta-avatar"], [4, "ngIf", "ngIfElse"], [3, "nzSrc"], [1, "ant-list-item-meta-content"], ["class", "ant-list-item-meta-title", 4, "ngIf"], ["class", "ant-list-item-meta-description", 4, "ngIf"], [1, "ant-list-item-meta-title"], [4, "nzStringTemplateOutlet"], [1, "ant-list-item-meta-description"]], template: function NzListItemMetaComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵtemplate(0, NzListItemMetaComponent_div_0_Template, 2, 2, "div", 0);
                core.ɵɵtemplate(1, NzListItemMetaComponent_div_1_Template, 3, 2, "div", 1);
            } if (rf & 2) {
                core.ɵɵproperty("ngIf", ctx.avatarStr || ctx.avatarTpl);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.nzTitle || ctx.nzDescription);
            } }, directives: [common.NgIf, avatar.NzAvatarComponent, core$1.NzStringTemplateOutletDirective], encapsulation: 2, changeDetection: 0 });
        return NzListItemMetaComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzListItemMetaComponent, [{
            type: core.Component,
            args: [{
                    selector: 'nz-list-item-meta, [nz-list-item-meta]',
                    exportAs: 'nzListItemMeta',
                    templateUrl: './nz-list-item-meta.component.html',
                    preserveWhitespaces: false,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None
                }]
        }], function () { return [{ type: core.ElementRef }, { type: core.Renderer2 }]; }, { nzAvatar: [{
                type: core.Input
            }], nzTitle: [{
                type: core.Input
            }], nzDescription: [{
                type: core.Input
            }] }); })();

    function NzListComponent_ng_template_0_div_0_ng_container_1_ng_template_1_Template(rf, ctx) { }
    var _c0 = function (a0, a1) { return { $implicit: a0, index: a1 }; };
    function NzListComponent_ng_template_0_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, NzListComponent_ng_template_0_div_0_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 10);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var item_r1184 = ctx.$implicit;
        var index_r1185 = ctx.index;
        var ctx_r1183 = core.ɵɵnextContext(3);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", ctx_r1183.nzRenderItem)("ngTemplateOutletContext", core.ɵɵpureFunction2(2, _c0, item_r1184, index_r1185));
    } }
    function NzListComponent_ng_template_0_div_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 8);
        core.ɵɵtemplate(1, NzListComponent_ng_template_0_div_0_ng_container_1_Template, 2, 5, "ng-container", 9);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1182 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", ctx_r1182.nzDataSource);
    } }
    function NzListComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtemplate(0, NzListComponent_ng_template_0_div_0_Template, 2, 1, "div", 7);
    } if (rf & 2) {
        var ctx_r1176 = core.ɵɵnextContext();
        core.ɵɵproperty("ngIf", ctx_r1176.nzDataSource.length > 0);
    } }
    function NzListComponent_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtext(1);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r1187 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(ctx_r1187.nzHeader);
    } }
    function NzListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 11);
        core.ɵɵtemplate(1, NzListComponent_div_2_ng_container_1_Template, 2, 1, "ng-container", 12);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1177 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("nzStringTemplateOutlet", ctx_r1177.nzHeader);
    } }
    function NzListComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "div");
    } if (rf & 2) {
        core.ɵɵstyleProp("min-height", 53, "px");
    } }
    function NzListComponent_ng_container_4_div_2_div_1_ng_template_1_Template(rf, ctx) { }
    function NzListComponent_ng_container_4_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 18);
        core.ɵɵtemplate(1, NzListComponent_ng_container_4_div_2_div_1_ng_template_1_Template, 0, 0, "ng-template", 10);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var item_r1192 = ctx.$implicit;
        var index_r1193 = ctx.index;
        var ctx_r1191 = core.ɵɵnextContext(3);
        core.ɵɵproperty("nzSpan", ctx_r1191.nzGrid.span)("nzXs", ctx_r1191.nzGrid.xs)("nzSm", ctx_r1191.nzGrid.sm)("nzMd", ctx_r1191.nzGrid.md)("nzLg", ctx_r1191.nzGrid.lg)("nzXl", ctx_r1191.nzGrid.xl)("nzXXl", ctx_r1191.nzGrid.xxl);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", ctx_r1191.nzRenderItem)("ngTemplateOutletContext", core.ɵɵpureFunction2(9, _c0, item_r1192, index_r1193));
    } }
    function NzListComponent_ng_container_4_div_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 16);
        core.ɵɵtemplate(1, NzListComponent_ng_container_4_div_2_div_1_Template, 2, 12, "div", 17);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1189 = core.ɵɵnextContext(2);
        core.ɵɵproperty("nzGutter", ctx_r1189.nzGrid.gutter);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", ctx_r1189.nzDataSource);
    } }
    function NzListComponent_ng_container_4_div_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 19);
        core.ɵɵelement(1, "nz-embed-empty", 20);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1190 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("nzComponentName", "list")("specificContent", ctx_r1190.nzNoResult);
    } }
    function NzListComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, NzListComponent_ng_container_4_div_1_Template, 1, 1, "div", 13);
        core.ɵɵtemplate(2, NzListComponent_ng_container_4_div_2_Template, 2, 2, "div", 14);
        core.ɵɵtemplate(3, NzListComponent_ng_container_4_div_3_Template, 2, 2, "div", 15);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r1178 = core.ɵɵnextContext();
        var _r1175 = core.ɵɵreference(1);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r1178.nzLoading && ctx_r1178.nzDataSource.length === 0);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r1178.nzGrid)("ngIfElse", _r1175);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !ctx_r1178.nzLoading && ctx_r1178.nzDataSource.length === 0);
    } }
    function NzListComponent_div_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtext(1);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r1195 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(ctx_r1195.nzFooter);
    } }
    function NzListComponent_div_6_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 21);
        core.ɵɵtemplate(1, NzListComponent_div_6_ng_container_1_Template, 2, 1, "ng-container", 12);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1179 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("nzStringTemplateOutlet", ctx_r1179.nzFooter);
    } }
    function NzListComponent_ng_template_7_Template(rf, ctx) { }
    function NzListComponent_div_8_ng_template_1_Template(rf, ctx) { }
    function NzListComponent_div_8_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 22);
        core.ɵɵtemplate(1, NzListComponent_div_8_ng_template_1_Template, 0, 0, "ng-template", 5);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1181 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", ctx_r1181.nzPagination);
    } }
    var _c1 = ["*"];
    var NzListComponent = /** @class */ (function () {
        function NzListComponent(el, updateHostClassService) {
            this.el = el;
            this.updateHostClassService = updateHostClassService;
            this.nzBordered = false;
            this.nzItemLayout = 'horizontal';
            this.nzLoading = false;
            this.nzSize = 'default';
            this.nzSplit = true;
            // #endregion
            // #region styles
            this.prefixCls = 'ant-list';
            // #endregion
            this.itemLayoutNotifySource = new rxjs.BehaviorSubject(this.nzItemLayout);
        }
        NzListComponent.prototype._setClassMap = function () {
            var _a;
            var classMap = (_a = {},
                _a[this.prefixCls] = true,
                _a[this.prefixCls + "-vertical"] = this.nzItemLayout === 'vertical',
                _a[this.prefixCls + "-lg"] = this.nzSize === 'large',
                _a[this.prefixCls + "-sm"] = this.nzSize === 'small',
                _a[this.prefixCls + "-split"] = this.nzSplit,
                _a[this.prefixCls + "-bordered"] = this.nzBordered,
                _a[this.prefixCls + "-loading"] = this.nzLoading,
                _a[this.prefixCls + "-grid"] = this.nzGrid,
                _a[this.prefixCls + "-something-after-last-item"] = !!(this.nzLoadMore || this.nzPagination || this.nzFooter),
                _a);
            this.updateHostClassService.updateHostClass(this.el.nativeElement, classMap);
        };
        Object.defineProperty(NzListComponent.prototype, "itemLayoutNotify$", {
            get: function () {
                return this.itemLayoutNotifySource.asObservable();
            },
            enumerable: true,
            configurable: true
        });
        NzListComponent.prototype.ngOnInit = function () {
            this._setClassMap();
        };
        NzListComponent.prototype.ngOnChanges = function (changes) {
            this._setClassMap();
            if (changes.nzItemLayout) {
                this.itemLayoutNotifySource.next(this.nzItemLayout);
            }
        };
        NzListComponent.prototype.ngOnDestroy = function () {
            this.itemLayoutNotifySource.unsubscribe();
        };
        /** @nocollapse */ NzListComponent.ɵfac = function NzListComponent_Factory(t) { return new (t || NzListComponent)(core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(core$1.NzUpdateHostClassService)); };
        /** @nocollapse */ NzListComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzListComponent, selectors: [["nz-list"], ["", "nz-list", ""]], inputs: { nzDataSource: "nzDataSource", nzBordered: "nzBordered", nzGrid: "nzGrid", nzHeader: "nzHeader", nzFooter: "nzFooter", nzItemLayout: "nzItemLayout", nzRenderItem: "nzRenderItem", nzLoading: "nzLoading", nzLoadMore: "nzLoadMore", nzPagination: "nzPagination", nzSize: "nzSize", nzSplit: "nzSplit", nzNoResult: "nzNoResult" }, exportAs: ["nzList"], features: [core.ɵɵProvidersFeature([core$1.NzUpdateHostClassService]), core.ɵɵNgOnChangesFeature()], ngContentSelectors: _c1, decls: 9, vars: 6, consts: [["itemsTpl", ""], ["class", "ant-list-header", 4, "ngIf"], [3, "nzSpinning"], [4, "ngIf"], ["class", "ant-list-footer", 4, "ngIf"], [3, "ngTemplateOutlet"], ["class", "ant-list-pagination", 4, "ngIf"], ["class", "ant-list-items", 4, "ngIf"], [1, "ant-list-items"], [4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-list-header"], [4, "nzStringTemplateOutlet"], [3, "min-height", 4, "ngIf"], ["nz-row", "", 3, "nzGutter", 4, "ngIf", "ngIfElse"], ["class", "ant-list-empty-text", 4, "ngIf"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl", 4, "ngFor", "ngForOf"], ["nz-col", "", 3, "nzSpan", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl"], [1, "ant-list-empty-text"], [3, "nzComponentName", "specificContent"], [1, "ant-list-footer"], [1, "ant-list-pagination"]], template: function NzListComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵtemplate(0, NzListComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, core.ɵɵtemplateRefExtractor);
                core.ɵɵtemplate(2, NzListComponent_div_2_Template, 2, 1, "div", 1);
                core.ɵɵelementStart(3, "nz-spin", 2);
                core.ɵɵtemplate(4, NzListComponent_ng_container_4_Template, 4, 4, "ng-container", 3);
                core.ɵɵprojection(5);
                core.ɵɵelementEnd();
                core.ɵɵtemplate(6, NzListComponent_div_6_Template, 2, 1, "div", 4);
                core.ɵɵtemplate(7, NzListComponent_ng_template_7_Template, 0, 0, "ng-template", 5);
                core.ɵɵtemplate(8, NzListComponent_div_8_Template, 2, 1, "div", 6);
            } if (rf & 2) {
                core.ɵɵadvance(2);
                core.ɵɵproperty("ngIf", ctx.nzHeader);
                core.ɵɵadvance(1);
                core.ɵɵproperty("nzSpinning", ctx.nzLoading);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.nzDataSource);
                core.ɵɵadvance(2);
                core.ɵɵproperty("ngIf", ctx.nzFooter);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngTemplateOutlet", ctx.nzLoadMore);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.nzPagination);
            } }, directives: [common.NgIf, spin.NzSpinComponent, common.NgTemplateOutlet, common.NgForOf, core$1.NzStringTemplateOutletDirective, grid.NzRowDirective, grid.NzColDirective, empty.NzEmbedEmptyComponent], styles: ["\n      nz-list,\n      nz-list nz-spin {\n        display: block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzListComponent.prototype, "nzBordered", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzListComponent.prototype, "nzLoading", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzListComponent.prototype, "nzSplit", void 0);
        return NzListComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzListComponent, [{
            type: core.Component,
            args: [{
                    selector: 'nz-list, [nz-list]',
                    exportAs: 'nzList',
                    templateUrl: './nz-list.component.html',
                    providers: [core$1.NzUpdateHostClassService],
                    preserveWhitespaces: false,
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [
                        "\n      nz-list,\n      nz-list nz-spin {\n        display: block;\n      }\n    "
                    ]
                }]
        }], function () { return [{ type: core.ElementRef }, { type: core$1.NzUpdateHostClassService }]; }, { nzDataSource: [{
                type: core.Input
            }], nzBordered: [{
                type: core.Input
            }], nzGrid: [{
                type: core.Input
            }], nzHeader: [{
                type: core.Input
            }], nzFooter: [{
                type: core.Input
            }], nzItemLayout: [{
                type: core.Input
            }], nzRenderItem: [{
                type: core.Input
            }], nzLoading: [{
                type: core.Input
            }], nzLoadMore: [{
                type: core.Input
            }], nzPagination: [{
                type: core.Input
            }], nzSize: [{
                type: core.Input
            }], nzSplit: [{
                type: core.Input
            }], nzNoResult: [{
                type: core.Input
            }] }); })();

    function NzListItemComponent_ng_template_0_ul_0_li_1_ng_template_1_Template(rf, ctx) { }
    function NzListItemComponent_ng_template_0_ul_0_li_1_em_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "em", 9);
    } }
    function NzListItemComponent_ng_template_0_ul_0_li_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "li");
        core.ɵɵtemplate(1, NzListItemComponent_ng_template_0_ul_0_li_1_ng_template_1_Template, 0, 0, "ng-template", 7);
        core.ɵɵtemplate(2, NzListItemComponent_ng_template_0_ul_0_li_1_em_2_Template, 1, 0, "em", 8);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var i_r1206 = ctx.$implicit;
        var last_r1207 = ctx.last;
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", i_r1206);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !last_r1207);
    } }
    function NzListItemComponent_ng_template_0_ul_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "ul", 5);
        core.ɵɵtemplate(1, NzListItemComponent_ng_template_0_ul_0_li_1_Template, 3, 2, "li", 6);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1204 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", ctx_r1204.nzActions);
    } }
    function NzListItemComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtemplate(0, NzListItemComponent_ng_template_0_ul_0_Template, 2, 1, "ul", 4);
    } if (rf & 2) {
        var ctx_r1198 = core.ɵɵnextContext();
        core.ɵɵproperty("ngIf", (ctx_r1198.nzActions == null ? null : ctx_r1198.nzActions.length) > 0);
    } }
    function NzListItemComponent_ng_template_2_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtext(1);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r1211 = core.ɵɵnextContext(3);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(ctx_r1211.nzContent);
    } }
    function NzListItemComponent_ng_template_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, NzListItemComponent_ng_template_2_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 11);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r1210 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("nzStringTemplateOutlet", ctx_r1210.nzContent);
    } }
    function NzListItemComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵprojection(0);
        core.ɵɵtemplate(1, NzListItemComponent_ng_template_2_ng_container_1_Template, 2, 1, "ng-container", 10);
    } if (rf & 2) {
        var ctx_r1200 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r1200.nzContent);
    } }
    function NzListItemComponent_ng_template_4_ng_template_0_Template(rf, ctx) { }
    function NzListItemComponent_ng_template_4_ng_template_1_Template(rf, ctx) { }
    function NzListItemComponent_ng_template_4_ng_template_2_Template(rf, ctx) { }
    function NzListItemComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtemplate(0, NzListItemComponent_ng_template_4_ng_template_0_Template, 0, 0, "ng-template", 7);
        core.ɵɵtemplate(1, NzListItemComponent_ng_template_4_ng_template_1_Template, 0, 0, "ng-template", 7);
        core.ɵɵtemplate(2, NzListItemComponent_ng_template_4_ng_template_2_Template, 0, 0, "ng-template", 7);
    } if (rf & 2) {
        var ctx_r1202 = core.ɵɵnextContext();
        var _r1199 = core.ɵɵreference(3);
        var _r1197 = core.ɵɵreference(1);
        core.ɵɵproperty("ngTemplateOutlet", _r1199);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", ctx_r1202.nzExtra);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", _r1197);
    } }
    function NzListItemComponent_ng_container_6_ng_template_2_Template(rf, ctx) { }
    function NzListItemComponent_ng_container_6_ng_template_3_Template(rf, ctx) { }
    function NzListItemComponent_ng_container_6_ng_template_5_Template(rf, ctx) { }
    function NzListItemComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "div", 12);
        core.ɵɵtemplate(2, NzListItemComponent_ng_container_6_ng_template_2_Template, 0, 0, "ng-template", 7);
        core.ɵɵtemplate(3, NzListItemComponent_ng_container_6_ng_template_3_Template, 0, 0, "ng-template", 7);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(4, "div", 13);
        core.ɵɵtemplate(5, NzListItemComponent_ng_container_6_ng_template_5_Template, 0, 0, "ng-template", 7);
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r1203 = core.ɵɵnextContext();
        var _r1199 = core.ɵɵreference(3);
        var _r1197 = core.ɵɵreference(1);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngTemplateOutlet", _r1199);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", _r1197);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngTemplateOutlet", ctx_r1203.nzExtra);
    } }
    var _c0$1 = ["*"];
    var NzListItemComponent = /** @class */ (function () {
        function NzListItemComponent(elementRef, renderer, parentComp, cdr) {
            this.parentComp = parentComp;
            this.cdr = cdr;
            this.nzActions = [];
            this.nzNoFlex = false;
            renderer.addClass(elementRef.nativeElement, 'ant-list-item');
        }
        Object.defineProperty(NzListItemComponent.prototype, "isVerticalAndExtra", {
            get: function () {
                return this.itemLayout === 'vertical' && !!this.nzExtra;
            },
            enumerable: true,
            configurable: true
        });
        NzListItemComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.itemLayout$ = this.parentComp.itemLayoutNotify$.subscribe(function (val) {
                _this.itemLayout = val;
                _this.cdr.detectChanges();
            });
        };
        NzListItemComponent.prototype.ngOnDestroy = function () {
            if (this.itemLayout$) {
                this.itemLayout$.unsubscribe();
            }
        };
        /** @nocollapse */ NzListItemComponent.ɵfac = function NzListItemComponent_Factory(t) { return new (t || NzListItemComponent)(core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(core.Renderer2), core.ɵɵdirectiveInject(NzListComponent), core.ɵɵdirectiveInject(core.ChangeDetectorRef)); };
        /** @nocollapse */ NzListItemComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzListItemComponent, selectors: [["nz-list-item"], ["", "nz-list-item", ""]], contentQueries: function NzListItemComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
                core.ɵɵcontentQuery(dirIndex, NzListItemMetaComponent, false);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.metas = _t);
            } }, hostBindings: function NzListItemComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
                core.ɵɵallocHostVars(1);
            } if (rf & 2) {
                core.ɵɵclassProp("ant-list-item-no-flex", ctx.nzNoFlex);
            } }, inputs: { nzActions: "nzActions", nzContent: "nzContent", nzExtra: "nzExtra", nzNoFlex: "nzNoFlex" }, exportAs: ["nzListItem"], ngContentSelectors: _c0$1, decls: 7, vars: 2, consts: [["actionsTpl", ""], ["contentTpl", ""], ["simpleTpl", ""], [4, "ngIf", "ngIfElse"], ["class", "ant-list-item-action", 4, "ngIf"], [1, "ant-list-item-action"], [4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet"], ["class", "ant-list-item-action-split", 4, "ngIf"], [1, "ant-list-item-action-split"], [4, "ngIf"], [4, "nzStringTemplateOutlet"], [1, "ant-list-item-main"], [1, "ant-list-item-extra"]], template: function NzListItemComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵtemplate(0, NzListItemComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, core.ɵɵtemplateRefExtractor);
                core.ɵɵtemplate(2, NzListItemComponent_ng_template_2_Template, 2, 1, "ng-template", null, 1, core.ɵɵtemplateRefExtractor);
                core.ɵɵtemplate(4, NzListItemComponent_ng_template_4_Template, 3, 3, "ng-template", null, 2, core.ɵɵtemplateRefExtractor);
                core.ɵɵtemplate(6, NzListItemComponent_ng_container_6_Template, 6, 3, "ng-container", 3);
            } if (rf & 2) {
                var _r1201 = core.ɵɵreference(5);
                core.ɵɵadvance(6);
                core.ɵɵproperty("ngIf", ctx.isVerticalAndExtra)("ngIfElse", _r1201);
            } }, directives: [common.NgIf, common.NgForOf, common.NgTemplateOutlet, core$1.NzStringTemplateOutletDirective], encapsulation: 2, changeDetection: 0 });
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzListItemComponent.prototype, "nzNoFlex", void 0);
        return NzListItemComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzListItemComponent, [{
            type: core.Component,
            args: [{
                    selector: 'nz-list-item, [nz-list-item]',
                    exportAs: 'nzListItem',
                    templateUrl: './nz-list-item.component.html',
                    preserveWhitespaces: false,
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                }]
        }], function () { return [{ type: core.ElementRef }, { type: core.Renderer2 }, { type: NzListComponent }, { type: core.ChangeDetectorRef }]; }, { metas: [{
                type: core.ContentChildren,
                args: [NzListItemMetaComponent]
            }], nzActions: [{
                type: core.Input
            }], nzContent: [{
                type: core.Input
            }], nzExtra: [{
                type: core.Input
            }], nzNoFlex: [{
                type: core.Input
            }, {
                type: core.HostBinding,
                args: ['class.ant-list-item-no-flex']
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzListModule = /** @class */ (function () {
        function NzListModule() {
        }
        /** @nocollapse */ NzListModule.ɵmod = core.ɵɵdefineNgModule({ type: NzListModule });
        /** @nocollapse */ NzListModule.ɵinj = core.ɵɵdefineInjector({ factory: function NzListModule_Factory(t) { return new (t || NzListModule)(); }, imports: [[common.CommonModule, spin.NzSpinModule, grid.NzGridModule, avatar.NzAvatarModule, core$1.NzAddOnModule, empty.NzEmptyModule]] });
        return NzListModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(NzListModule, { declarations: [NzListComponent, NzListItemComponent, NzListItemMetaComponent], imports: [common.CommonModule, spin.NzSpinModule, grid.NzGridModule, avatar.NzAvatarModule, core$1.NzAddOnModule, empty.NzEmptyModule], exports: [NzListComponent, NzListItemComponent, NzListItemMetaComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzListModule, [{
            type: core.NgModule,
            args: [{
                    imports: [common.CommonModule, spin.NzSpinModule, grid.NzGridModule, avatar.NzAvatarModule, core$1.NzAddOnModule, empty.NzEmptyModule],
                    declarations: [NzListComponent, NzListItemComponent, NzListItemMetaComponent],
                    exports: [NzListComponent, NzListItemComponent, NzListItemMetaComponent]
                }]
        }], null, null); })();

    exports.NzListComponent = NzListComponent;
    exports.NzListItemComponent = NzListItemComponent;
    exports.NzListItemMetaComponent = NzListItemMetaComponent;
    exports.NzListModule = NzListModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-list.umd.js.map

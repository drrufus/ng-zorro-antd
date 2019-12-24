(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ng-zorro-antd/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/skeleton', ['exports', '@angular/core', 'ng-zorro-antd/core', '@angular/common'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].skeleton = {}), global.ng.core, global['ng-zorro-antd'].core, global.ng.common));
}(this, (function (exports, core, core$1, common) { 'use strict';

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

    function NzSkeletonComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 5);
        core.ɵɵelement(1, "span", 6);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r268 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵclassProp("ant-skeleton-avatar-lg", ctx_r268.avatar.size === "large")("ant-skeleton-avatar-sm", ctx_r268.avatar.size === "small")("ant-skeleton-avatar-circle", ctx_r268.avatar.shape === "circle")("ant-skeleton-avatar-square", ctx_r268.avatar.shape === "square");
    } }
    function NzSkeletonComponent_ng_container_0_h3_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "h3", 7);
    } if (rf & 2) {
        var ctx_r269 = core.ɵɵnextContext(2);
        core.ɵɵstyleProp("width", ctx_r269.toCSSUnit(ctx_r269.title.width));
    } }
    function NzSkeletonComponent_ng_container_0_ul_4_li_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "li");
    } if (rf & 2) {
        var i_r273 = ctx.index;
        var ctx_r271 = core.ɵɵnextContext(3);
        core.ɵɵstyleProp("width", ctx_r271.toCSSUnit(ctx_r271.widthList[i_r273]));
    } }
    function NzSkeletonComponent_ng_container_0_ul_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "ul", 8);
        core.ɵɵtemplate(1, NzSkeletonComponent_ng_container_0_ul_4_li_1_Template, 1, 1, "li", 9);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r270 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", ctx_r270.rowsList);
    } }
    function NzSkeletonComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, NzSkeletonComponent_ng_container_0_div_1_Template, 2, 4, "div", 1);
        core.ɵɵelementStart(2, "div", 2);
        core.ɵɵtemplate(3, NzSkeletonComponent_ng_container_0_h3_3_Template, 1, 1, "h3", 3);
        core.ɵɵtemplate(4, NzSkeletonComponent_ng_container_0_ul_4_Template, 2, 1, "ul", 4);
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r266 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !!ctx_r266.nzAvatar);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", !!ctx_r266.nzTitle);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !!ctx_r266.nzParagraph);
    } }
    function NzSkeletonComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵprojection(1);
        core.ɵɵelementContainerEnd();
    } }
    var _c0 = ["*"];
    var NzSkeletonComponent = /** @class */ (function () {
        function NzSkeletonComponent(cdr, renderer, elementRef) {
            this.cdr = cdr;
            this.nzActive = false;
            this.nzLoading = true;
            this.nzTitle = true;
            this.nzAvatar = false;
            this.nzParagraph = true;
            this.rowsList = [];
            this.widthList = [];
            renderer.addClass(elementRef.nativeElement, 'ant-skeleton');
        }
        NzSkeletonComponent.prototype.toCSSUnit = function (value) {
            if (value === void 0) { value = ''; }
            return core$1.toCssPixel(value);
        };
        NzSkeletonComponent.prototype.getTitleProps = function () {
            var hasAvatar = !!this.nzAvatar;
            var hasParagraph = !!this.nzParagraph;
            var width = '';
            if (!hasAvatar && hasParagraph) {
                width = '38%';
            }
            else if (hasAvatar && hasParagraph) {
                width = '50%';
            }
            return __assign({ width: width }, this.getProps(this.nzTitle));
        };
        NzSkeletonComponent.prototype.getAvatarProps = function () {
            var shape = !!this.nzTitle && !this.nzParagraph ? 'square' : 'circle';
            var size = 'large';
            return __assign({ shape: shape, size: size }, this.getProps(this.nzAvatar));
        };
        NzSkeletonComponent.prototype.getParagraphProps = function () {
            var hasAvatar = !!this.nzAvatar;
            var hasTitle = !!this.nzTitle;
            var basicProps = {};
            // Width
            if (!hasAvatar || !hasTitle) {
                basicProps.width = '61%';
            }
            // Rows
            if (!hasAvatar && hasTitle) {
                basicProps.rows = 3;
            }
            else {
                basicProps.rows = 2;
            }
            return __assign(__assign({}, basicProps), this.getProps(this.nzParagraph));
        };
        NzSkeletonComponent.prototype.getProps = function (prop) {
            return prop && typeof prop === 'object' ? prop : {};
        };
        NzSkeletonComponent.prototype.getWidthList = function () {
            var _a = this.paragraph, width = _a.width, rows = _a.rows;
            var widthList = [];
            if (width && Array.isArray(width)) {
                widthList = width;
            }
            else if (width && !Array.isArray(width)) {
                widthList = [];
                widthList[rows - 1] = width;
            }
            return widthList;
        };
        NzSkeletonComponent.prototype.updateProps = function () {
            this.title = this.getTitleProps();
            this.avatar = this.getAvatarProps();
            this.paragraph = this.getParagraphProps();
            this.rowsList = __spread(Array(this.paragraph.rows));
            this.widthList = this.getWidthList();
            this.cdr.markForCheck();
        };
        NzSkeletonComponent.prototype.ngOnInit = function () {
            this.updateProps();
        };
        NzSkeletonComponent.prototype.ngOnChanges = function (changes) {
            if (changes.nzTitle || changes.nzAvatar || changes.nzParagraph) {
                this.updateProps();
            }
        };
        /** @nocollapse */ NzSkeletonComponent.ɵfac = function NzSkeletonComponent_Factory(t) { return new (t || NzSkeletonComponent)(core.ɵɵdirectiveInject(core.ChangeDetectorRef), core.ɵɵdirectiveInject(core.Renderer2), core.ɵɵdirectiveInject(core.ElementRef)); };
        /** @nocollapse */ NzSkeletonComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzSkeletonComponent, selectors: [["nz-skeleton"]], hostBindings: function NzSkeletonComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
                core.ɵɵallocHostVars(2);
            } if (rf & 2) {
                core.ɵɵclassProp("ant-skeleton-with-avatar", !!ctx.nzAvatar)("ant-skeleton-active", ctx.nzActive);
            } }, inputs: { nzActive: "nzActive", nzLoading: "nzLoading", nzTitle: "nzTitle", nzAvatar: "nzAvatar", nzParagraph: "nzParagraph" }, exportAs: ["nzSkeleton"], features: [core.ɵɵNgOnChangesFeature()], ngContentSelectors: _c0, decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "ant-skeleton-header", 4, "ngIf"], [1, "ant-skeleton-content"], ["class", "ant-skeleton-title", 3, "width", 4, "ngIf"], ["class", "ant-skeleton-paragraph", 4, "ngIf"], [1, "ant-skeleton-header"], [1, "ant-skeleton-avatar"], [1, "ant-skeleton-title"], [1, "ant-skeleton-paragraph"], [3, "width", 4, "ngFor", "ngForOf"]], template: function NzSkeletonComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵtemplate(0, NzSkeletonComponent_ng_container_0_Template, 5, 3, "ng-container", 0);
                core.ɵɵtemplate(1, NzSkeletonComponent_ng_container_1_Template, 2, 0, "ng-container", 0);
            } if (rf & 2) {
                core.ɵɵproperty("ngIf", ctx.nzLoading);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", !ctx.nzLoading);
            } }, directives: [common.NgIf, common.NgForOf], encapsulation: 2, changeDetection: 0 });
        return NzSkeletonComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzSkeletonComponent, [{
            type: core.Component,
            args: [{
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    selector: 'nz-skeleton',
                    exportAs: 'nzSkeleton',
                    templateUrl: './nz-skeleton.component.html',
                    host: {
                        '[class.ant-skeleton-with-avatar]': '!!nzAvatar',
                        '[class.ant-skeleton-active]': 'nzActive'
                    }
                }]
        }], function () { return [{ type: core.ChangeDetectorRef }, { type: core.Renderer2 }, { type: core.ElementRef }]; }, { nzActive: [{
                type: core.Input
            }], nzLoading: [{
                type: core.Input
            }], nzTitle: [{
                type: core.Input
            }], nzAvatar: [{
                type: core.Input
            }], nzParagraph: [{
                type: core.Input
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzSkeletonModule = /** @class */ (function () {
        function NzSkeletonModule() {
        }
        /** @nocollapse */ NzSkeletonModule.ɵmod = core.ɵɵdefineNgModule({ type: NzSkeletonModule });
        /** @nocollapse */ NzSkeletonModule.ɵinj = core.ɵɵdefineInjector({ factory: function NzSkeletonModule_Factory(t) { return new (t || NzSkeletonModule)(); }, imports: [[common.CommonModule]] });
        return NzSkeletonModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(NzSkeletonModule, { declarations: [NzSkeletonComponent], imports: [common.CommonModule], exports: [NzSkeletonComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzSkeletonModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [NzSkeletonComponent],
                    imports: [common.CommonModule],
                    exports: [NzSkeletonComponent]
                }]
        }], null, null); })();

    exports.NzSkeletonComponent = NzSkeletonComponent;
    exports.NzSkeletonModule = NzSkeletonModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-skeleton.umd.js.map

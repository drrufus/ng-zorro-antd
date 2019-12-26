(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/platform'), require('@angular/core'), require('ng-zorro-antd/core'), require('@angular/common'), require('ng-zorro-antd/icon')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/avatar', ['exports', '@angular/cdk/platform', '@angular/core', 'ng-zorro-antd/core', '@angular/common', 'ng-zorro-antd/icon'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].avatar = {}), global.ng.cdk.platform, global.ng.core, global['ng-zorro-antd'].core, global.ng.common, global['ng-zorro-antd'].icon));
}(this, (function (exports, platform, core, core$1, common, icon) { 'use strict';

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
     * Generated from: nz-avatar.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var NZ_CONFIG_COMPONENT_NAME = 'avatar';
    var NzAvatarComponent = /** @class */ (function () {
        function NzAvatarComponent(nzConfigService, elementRef, cd, updateHostClassService, renderer, platform) {
            this.nzConfigService = nzConfigService;
            this.elementRef = elementRef;
            this.cd = cd;
            this.updateHostClassService = updateHostClassService;
            this.renderer = renderer;
            this.platform = platform;
            this.nzError = new core.EventEmitter();
            this.oldAPIIcon = true; // Make the user defined icon compatible to old API. Should be removed in 2.0.
            // Make the user defined icon compatible to old API. Should be removed in 2.0.
            this.hasText = false;
            this.hasSrc = true;
            this.hasIcon = false;
            this.el = this.elementRef.nativeElement;
            this.prefixCls = 'ant-avatar';
            this.sizeMap = { large: 'lg', small: 'sm' };
        }
        /**
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        NzAvatarComponent.prototype.setClass = /**
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        function () {
            var _a;
            /** @type {?} */
            var classMap = (_a = {},
                _a[(/** @type {?} */ (this)).prefixCls] = true,
                _a[(/** @type {?} */ (this)).prefixCls + "-" + (/** @type {?} */ (this)).sizeMap[(/** @type {?} */ (this)).nzSize]] = (/** @type {?} */ (this)).sizeMap[(/** @type {?} */ (this)).nzSize],
                _a[(/** @type {?} */ (this)).prefixCls + "-" + (/** @type {?} */ (this)).nzShape] = (/** @type {?} */ (this)).nzShape,
                _a[(/** @type {?} */ (this)).prefixCls + "-icon"] = (/** @type {?} */ (this)).nzIcon,
                _a[(/** @type {?} */ (this)).prefixCls + "-image"] = (/** @type {?} */ (this)).hasSrc // downgrade after image error
            ,
                _a);
            (/** @type {?} */ (this)).updateHostClassService.updateHostClass((/** @type {?} */ (this)).el, classMap);
            (/** @type {?} */ (this)).cd.detectChanges();
            return (/** @type {?} */ (this));
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        NzAvatarComponent.prototype.imgError = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this.nzError.emit($event);
            if (!$event.defaultPrevented) {
                this.hasSrc = false;
                this.hasIcon = false;
                this.hasText = false;
                if (this.nzIcon) {
                    this.hasIcon = true;
                }
                else if (this.nzText) {
                    this.hasText = true;
                }
                this.setClass().notifyCalc();
                this.setSizeStyle();
            }
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        NzAvatarComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.hasOwnProperty('nzIcon') && changes.nzIcon.currentValue) {
                this.oldAPIIcon = changes.nzIcon.currentValue.indexOf('anticon') > -1;
            }
            this.hasText = !this.nzSrc && !!this.nzText;
            this.hasIcon = !this.nzSrc && !!this.nzIcon;
            this.hasSrc = !!this.nzSrc;
            this.setClass().notifyCalc();
            this.setSizeStyle();
        };
        /**
         * @private
         * @return {?}
         */
        NzAvatarComponent.prototype.calcStringSize = /**
         * @private
         * @return {?}
         */
        function () {
            if (!this.hasText) {
                return;
            }
            /** @type {?} */
            var childrenWidth = this.textEl.nativeElement.offsetWidth;
            /** @type {?} */
            var avatarWidth = this.el.getBoundingClientRect().width;
            /** @type {?} */
            var scale = avatarWidth - 8 < childrenWidth ? (avatarWidth - 8) / childrenWidth : 1;
            this.textStyles = {
                transform: "scale(" + scale + ") translateX(-50%)"
            };
            if (typeof this.nzSize === 'number') {
                Object.assign(this.textStyles, {
                    lineHeight: this.nzSize + "px"
                });
            }
            this.cd.detectChanges();
        };
        /**
         * @private
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        NzAvatarComponent.prototype.notifyCalc = /**
         * @private
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        function () {
            var _this = this;
            // If use ngAfterViewChecked, always demands more computations, so......
            if ((/** @type {?} */ (this)).platform.isBrowser) {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    (/** @type {?} */ (_this)).calcStringSize();
                }));
            }
            return (/** @type {?} */ (this));
        };
        /**
         * @private
         * @return {?}
         */
        NzAvatarComponent.prototype.setSizeStyle = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var size = typeof this.nzSize === 'string' ? this.nzSize : this.nzSize + "px";
            this.renderer.setStyle(this.el, 'width', size);
            this.renderer.setStyle(this.el, 'height', size);
            this.renderer.setStyle(this.el, 'line-height', size);
            if (this.hasIcon) {
                this.renderer.setStyle(this.el, 'font-size', "calc(" + size + " / 2)");
            }
        };
        NzAvatarComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'nz-avatar',
                        exportAs: 'nzAvatar',
                        template: "<i nz-icon *ngIf=\"nzIcon && hasIcon\" [nzType]=\"!oldAPIIcon && nzIcon\" [ngClass]=\"oldAPIIcon && nzIcon\"></i>\r\n<img *ngIf=\"nzSrc && hasSrc\" [src]=\"nzSrc\" [attr.srcset]=\"nzSrcSet\" [attr.alt]=\"nzAlt\" (error)=\"imgError($event)\"/>\r\n<span class=\"ant-avatar-string\" #textEl [ngStyle]=\"textStyles\" *ngIf=\"nzText && hasText\">{{ nzText }}</span>\r\n",
                        providers: [core$1.NzUpdateHostClassService],
                        preserveWhitespaces: false,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        /** @nocollapse */
        NzAvatarComponent.ctorParameters = function () { return [
            { type: core$1.NzConfigService },
            { type: core.ElementRef },
            { type: core.ChangeDetectorRef },
            { type: core$1.NzUpdateHostClassService },
            { type: core.Renderer2 },
            { type: platform.Platform }
        ]; };
        NzAvatarComponent.propDecorators = {
            nzShape: [{ type: core.Input }],
            nzSize: [{ type: core.Input }],
            nzText: [{ type: core.Input }],
            nzSrc: [{ type: core.Input }],
            nzSrcSet: [{ type: core.Input }],
            nzAlt: [{ type: core.Input }],
            nzIcon: [{ type: core.Input }],
            nzError: [{ type: core.Output }],
            textEl: [{ type: core.ViewChild, args: ['textEl', { static: false },] }]
        };
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, 'circle'),
            __metadata("design:type", String)
        ], NzAvatarComponent.prototype, "nzShape", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, 'default'),
            __metadata("design:type", Object)
        ], NzAvatarComponent.prototype, "nzSize", void 0);
        return NzAvatarComponent;
    }());
    if (false) {
        /** @type {?} */
        NzAvatarComponent.prototype.nzShape;
        /** @type {?} */
        NzAvatarComponent.prototype.nzSize;
        /** @type {?} */
        NzAvatarComponent.prototype.nzText;
        /** @type {?} */
        NzAvatarComponent.prototype.nzSrc;
        /** @type {?} */
        NzAvatarComponent.prototype.nzSrcSet;
        /** @type {?} */
        NzAvatarComponent.prototype.nzAlt;
        /** @type {?} */
        NzAvatarComponent.prototype.nzIcon;
        /** @type {?} */
        NzAvatarComponent.prototype.nzError;
        /** @type {?} */
        NzAvatarComponent.prototype.oldAPIIcon;
        /** @type {?} */
        NzAvatarComponent.prototype.hasText;
        /** @type {?} */
        NzAvatarComponent.prototype.hasSrc;
        /** @type {?} */
        NzAvatarComponent.prototype.hasIcon;
        /** @type {?} */
        NzAvatarComponent.prototype.textStyles;
        /** @type {?} */
        NzAvatarComponent.prototype.textEl;
        /**
         * @type {?}
         * @private
         */
        NzAvatarComponent.prototype.el;
        /**
         * @type {?}
         * @private
         */
        NzAvatarComponent.prototype.prefixCls;
        /**
         * @type {?}
         * @private
         */
        NzAvatarComponent.prototype.sizeMap;
        /** @type {?} */
        NzAvatarComponent.prototype.nzConfigService;
        /**
         * @type {?}
         * @private
         */
        NzAvatarComponent.prototype.elementRef;
        /**
         * @type {?}
         * @private
         */
        NzAvatarComponent.prototype.cd;
        /**
         * @type {?}
         * @private
         */
        NzAvatarComponent.prototype.updateHostClassService;
        /**
         * @type {?}
         * @private
         */
        NzAvatarComponent.prototype.renderer;
        /**
         * @type {?}
         * @private
         */
        NzAvatarComponent.prototype.platform;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: nz-avatar.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzAvatarModule = /** @class */ (function () {
        function NzAvatarModule() {
        }
        NzAvatarModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [NzAvatarComponent],
                        exports: [NzAvatarComponent],
                        imports: [common.CommonModule, icon.NzIconModule, platform.PlatformModule]
                    },] }
        ];
        return NzAvatarModule;
    }());

    exports.NzAvatarComponent = NzAvatarComponent;
    exports.NzAvatarModule = NzAvatarModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-avatar.umd.js.map

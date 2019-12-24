(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ng-zorro-antd/core'), require('@angular/cdk/overlay'), require('rxjs'), require('@angular/common'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/tooltip', ['exports', '@angular/core', 'ng-zorro-antd/core', '@angular/cdk/overlay', 'rxjs', '@angular/common', 'rxjs/operators'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].tooltip = {}), global.ng.core, global['ng-zorro-antd'].core, global.ng.cdk.overlay, global.rxjs, global.ng.common, global.rxjs.operators));
}(this, (function (exports, core, core$1, overlay, rxjs, common, operators) { 'use strict';

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

    var _c0 = ["overlay"];
    var NzTooltipBaseComponent = /** @class */ (function () {
        function NzTooltipBaseComponent(cdr, noAnimation) {
            this.cdr = cdr;
            this.noAnimation = noAnimation;
            this.nzVisibleChange = new rxjs.Subject();
            this.nzOverlayStyle = {};
            this.nzMouseEnterDelay = 0.15;
            this.nzMouseLeaveDelay = 0.1;
            this._visible = false;
            this._trigger = 'hover';
            this.preferredPlacement = 'top';
            this._classMap = {};
            this._hasBackdrop = false;
            this._prefix = 'ant-tooltip-placement';
            this._positions = __spread(core$1.DEFAULT_TOOLTIP_POSITIONS);
        }
        Object.defineProperty(NzTooltipBaseComponent.prototype, "nzVisible", {
            get: function () {
                return this._visible;
            },
            set: function (value) {
                var visible = core$1.toBoolean(value);
                if (this._visible !== visible) {
                    this._visible = visible;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTooltipBaseComponent.prototype, "nzTrigger", {
            get: function () {
                return this._trigger;
            },
            set: function (value) {
                this._trigger = value;
                this._hasBackdrop = this._trigger === 'click';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTooltipBaseComponent.prototype, "nzPlacement", {
            get: function () {
                return this.preferredPlacement;
            },
            set: function (value) {
                if (value !== this.preferredPlacement) {
                    this.preferredPlacement = value;
                    this._positions = __spread([core$1.POSITION_MAP[this.nzPlacement]], this._positions);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTooltipBaseComponent.prototype, "content", {
            get: function () {
                return this.nzContent !== undefined ? this.nzContent : this.nzContentTemplate;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTooltipBaseComponent.prototype, "title", {
            get: function () {
                return this.nzTitle !== undefined ? this.nzTitle : this.nzTitleTemplate;
            },
            enumerable: true,
            configurable: true
        });
        NzTooltipBaseComponent.prototype.ngOnDestroy = function () {
            this.nzVisibleChange.complete();
        };
        NzTooltipBaseComponent.prototype.show = function () {
            if (this.nzVisible) {
                return;
            }
            if (!this.isEmpty()) {
                this.nzVisible = true;
                this.nzVisibleChange.next(true);
                this.cdr.detectChanges();
            }
        };
        NzTooltipBaseComponent.prototype.hide = function () {
            if (!this.nzVisible) {
                return;
            }
            this.nzVisible = false;
            this.nzVisibleChange.next(false);
            this.cdr.detectChanges();
        };
        NzTooltipBaseComponent.prototype.updateByDirective = function () {
            var _this = this;
            this.setClassMap();
            this.cdr.detectChanges();
            Promise.resolve().then(function () {
                _this.updatePosition();
            });
        };
        /**
         * Force the component to update its position.
         */
        NzTooltipBaseComponent.prototype.updatePosition = function () {
            if (this.origin && this.overlay && this.overlay.overlayRef) {
                this.overlay.overlayRef.updatePosition();
            }
        };
        NzTooltipBaseComponent.prototype.onPositionChange = function (position) {
            this.preferredPlacement = core$1.getPlacementName(position);
            this.setClassMap();
            this.cdr.detectChanges();
        };
        NzTooltipBaseComponent.prototype.setClassMap = function () {
            var _a;
            this._classMap = (_a = {},
                _a[this.nzOverlayClassName] = true,
                _a[this._prefix + "-" + this.preferredPlacement] = true,
                _a);
        };
        NzTooltipBaseComponent.prototype.setOverlayOrigin = function (origin) {
            this.origin = origin;
            this.cdr.markForCheck();
        };
        /** @nocollapse */ NzTooltipBaseComponent.ɵfac = function NzTooltipBaseComponent_Factory(t) { return new (t || NzTooltipBaseComponent)(core.ɵɵdirectiveInject(core.ChangeDetectorRef), core.ɵɵdirectiveInject(core$1.NzNoAnimationDirective)); };
        /** @nocollapse */ NzTooltipBaseComponent.ɵdir = core.ɵɵdefineDirective({ type: NzTooltipBaseComponent, viewQuery: function NzTooltipBaseComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵviewQuery(_c0, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.overlay = _t.first);
            } } });
        return NzTooltipBaseComponent;
    }());
    function isTooltipEmpty(value) {
        return value instanceof core.TemplateRef ? false : value === '' || !core$1.isNotNil(value);
    }

    var _c0$1 = ["nzTemplate"];
    function NzToolTipComponent_ng_template_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtext(1);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r313 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(ctx_r313.title);
    } }
    function NzToolTipComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 2);
        core.ɵɵelementStart(1, "div", 3);
        core.ɵɵelement(2, "div", 4);
        core.ɵɵelementStart(3, "div", 5);
        core.ɵɵtemplate(4, NzToolTipComponent_ng_template_1_ng_container_4_Template, 2, 1, "ng-container", 6);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r312 = core.ɵɵnextContext();
        core.ɵɵproperty("ngClass", ctx_r312._classMap)("ngStyle", ctx_r312.nzOverlayStyle)("@.disabled", ctx_r312.noAnimation == null ? null : ctx_r312.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r312.noAnimation == null ? null : ctx_r312.noAnimation.nzNoAnimation)("@zoomBigMotion", "active");
        core.ɵɵadvance(4);
        core.ɵɵproperty("nzStringTemplateOutlet", ctx_r312.title);
    } }
    var _c1 = ["*"];
    var NzToolTipComponent = /** @class */ (function (_super) {
        __extends(NzToolTipComponent, _super);
        function NzToolTipComponent(cdr, noAnimation) {
            var _this = _super.call(this, cdr) || this;
            _this.noAnimation = noAnimation;
            return _this;
        }
        NzToolTipComponent.prototype.isEmpty = function () {
            return isTooltipEmpty(this.title);
        };
        /** @nocollapse */ NzToolTipComponent.ɵfac = function NzToolTipComponent_Factory(t) { return new (t || NzToolTipComponent)(core.ɵɵdirectiveInject(core.ChangeDetectorRef), core.ɵɵdirectiveInject(core$1.NzNoAnimationDirective, 9)); };
        /** @nocollapse */ NzToolTipComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzToolTipComponent, selectors: [["nz-tooltip"]], contentQueries: function NzToolTipComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
                core.ɵɵstaticContentQuery(dirIndex, _c0$1, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.nzTitleTemplate = _t.first);
            } }, inputs: { nzTitle: "nzTitle" }, exportAs: ["nzTooltipComponent"], features: [core.ɵɵInheritDefinitionFeature], ngContentSelectors: _c1, decls: 3, vars: 4, consts: [["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayPositions", "backdropClick", "detach", "positionChange"], ["overlay", "cdkConnectedOverlay"], [1, "ant-tooltip", 3, "ngClass", "ngStyle", "nzNoAnimation"], [1, "ant-tooltip-content"], [1, "ant-tooltip-arrow"], [1, "ant-tooltip-inner"], [4, "nzStringTemplateOutlet"]], template: function NzToolTipComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵprojection(0);
                core.ɵɵtemplate(1, NzToolTipComponent_ng_template_1_Template, 5, 6, "ng-template", 0, 1, core.ɵɵtemplateRefExtractor);
                core.ɵɵlistener("backdropClick", function NzToolTipComponent_Template_ng_template_backdropClick_1_listener($event) { return ctx.hide(); })("detach", function NzToolTipComponent_Template_ng_template_detach_1_listener($event) { return ctx.hide(); })("positionChange", function NzToolTipComponent_Template_ng_template_positionChange_1_listener($event) { return ctx.onPositionChange($event); });
            } if (rf & 2) {
                core.ɵɵadvance(1);
                core.ɵɵproperty("cdkConnectedOverlayOrigin", ctx.origin)("cdkConnectedOverlayOpen", ctx._visible)("cdkConnectedOverlayHasBackdrop", ctx._hasBackdrop)("cdkConnectedOverlayPositions", ctx._positions);
            } }, directives: [overlay.CdkConnectedOverlay, core$1.NzConnectedOverlayDirective, common.NgClass, common.NgStyle, core$1.NzNoAnimationDirective, core$1.NzStringTemplateOutletDirective], styles: ["\n      .ant-tooltip {\n        position: relative;\n      }\n    "], encapsulation: 2, data: { animation: [core$1.zoomBigMotion] }, changeDetection: 0 });
        return NzToolTipComponent;
    }(NzTooltipBaseComponent));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzToolTipComponent, [{
            type: core.Component,
            args: [{
                    selector: 'nz-tooltip',
                    exportAs: 'nzTooltipComponent',
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    animations: [core$1.zoomBigMotion],
                    templateUrl: './nz-tooltip.component.html',
                    preserveWhitespaces: false,
                    styles: [
                        "\n      .ant-tooltip {\n        position: relative;\n      }\n    "
                    ]
                }]
        }], function () { return [{ type: core.ChangeDetectorRef }, { type: core$1.NzNoAnimationDirective, decorators: [{
                    type: core.Host
                }, {
                    type: core.Optional
                }] }]; }, { nzTitle: [{
                type: core.Input
            }], nzTitleTemplate: [{
                type: core.ContentChild,
                args: ['nzTemplate', { static: true }]
            }] }); })();

    var NzTooltipBaseDirective = /** @class */ (function () {
        function NzTooltipBaseDirective(elementRef, hostView, resolver, renderer, noAnimation) {
            this.elementRef = elementRef;
            this.hostView = hostView;
            this.resolver = resolver;
            this.renderer = renderer;
            this.noAnimation = noAnimation;
            /**
             * @deprecated 10.0.0. This is deprecated and going to be removed in 10.0.0.
             * Please use a more specific API. Like `nzTooltipTrigger`.
             */
            this.nzTrigger = 'hover';
            /**
             * @deprecated 10.0.0. This is deprecated and going to be removed in 10.0.0.
             * Please use a more specific API. Like `nzTooltipPlacement`.
             */
            this.nzPlacement = 'top';
            this.needProxyProperties = [
                'nzOverlayClassName',
                'nzOverlayStyle',
                'nzMouseEnterDelay',
                'nzMouseLeaveDelay',
                'nzVisible',
                'noAnimation'
            ];
            this.nzVisibleChange = new core.EventEmitter();
            this.isTooltipComponentVisible = false;
            this.$destroy = new rxjs.Subject();
            this.triggerDisposables = [];
        }
        Object.defineProperty(NzTooltipBaseDirective.prototype, "title", {
            /**
             * This true title that would be used in other parts on this component.
             */
            get: function () {
                return this.specificTitle || this.directiveNameTitle || this.nzTitle;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTooltipBaseDirective.prototype, "content", {
            get: function () {
                return this.specificContent || this.directiveNameContent || this.nzContent;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTooltipBaseDirective.prototype, "placement", {
            get: function () {
                return this.specificPlacement || this.nzPlacement;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTooltipBaseDirective.prototype, "trigger", {
            get: function () {
                // NzTooltipTrigger can be null.
                return typeof this.specificTrigger !== 'undefined' ? this.specificTrigger : this.nzTrigger;
            },
            enumerable: true,
            configurable: true
        });
        NzTooltipBaseDirective.prototype.ngOnChanges = function (changes) {
            var nzTrigger = changes.nzTrigger, specificTrigger = changes.specificTrigger;
            var trigger = specificTrigger || nzTrigger;
            if (trigger && !trigger.isFirstChange()) {
                this.registerTriggers();
            }
            if (this.tooltip) {
                this.updateChangedProperties(changes);
            }
            if (changes.nzTitle) {
                core$1.warnDeprecation("'nzTitle' of 'nz-tooltip' is deprecated and will be removed in 10.0.0.\nPlease use 'nzTooltipTitle' instead. The same with 'nz-popover' and 'nz-popconfirm'.");
            }
            if (changes.nzContent) {
                core$1.warnDeprecation("'nzContent' of 'nz-popover' is deprecated and will be removed in 10.0.0.\nPlease use 'nzPopoverContent' instead.");
            }
            if (changes.nzPlacement) {
                core$1.warnDeprecation("'nzPlacement' of 'nz-tooltip' is deprecated and will be removed in 10.0.0.\nPlease use 'nzTooltipContent' instead. The same with 'nz-popover' and 'nz-popconfirm'.");
            }
            if (changes.nzTrigger) {
                core$1.warnDeprecation("'nzTrigger' of 'nz-tooltip' is deprecated and will be removed in 10.0.0.\nPlease use 'nzTooltipTrigger' instead. The same with 'nz-popover' and 'nz-popconfirm'.");
            }
        };
        NzTooltipBaseDirective.prototype.ngOnInit = function () {
            var _this = this;
            this.createTooltipComponent();
            this.tooltip.nzVisibleChange.pipe(operators.distinctUntilChanged(), operators.takeUntil(this.$destroy)).subscribe(function (visible) {
                _this.isTooltipComponentVisible = visible;
                _this.nzVisibleChange.emit(visible);
            });
        };
        NzTooltipBaseDirective.prototype.ngAfterViewInit = function () {
            this.registerTriggers();
        };
        NzTooltipBaseDirective.prototype.ngOnDestroy = function () {
            this.$destroy.next();
            this.$destroy.complete();
            // Clear toggling timer. Issue #3875 #4317 #4386
            this.clearTogglingTimer();
            this.removeTriggerListeners();
        };
        NzTooltipBaseDirective.prototype.show = function () {
            this.tooltip.show();
        };
        NzTooltipBaseDirective.prototype.hide = function () {
            this.tooltip.hide();
        };
        /**
         * Force the component to update its position.
         */
        NzTooltipBaseDirective.prototype.updatePosition = function () {
            if (this.tooltip) {
                this.tooltip.updatePosition();
            }
        };
        /**
         * Create a dynamic tooltip component. This method can be override.
         */
        NzTooltipBaseDirective.prototype.createTooltipComponent = function () {
            var tooltipRef = this.hostView.createComponent(this.componentFactory);
            this.tooltip = tooltipRef.instance;
            // Remove the component's DOM because it should be in the overlay container.
            this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), tooltipRef.location.nativeElement);
            this.tooltip.setOverlayOrigin(this);
            this.updateChangedProperties(this.needProxyProperties);
        };
        NzTooltipBaseDirective.prototype.registerTriggers = function () {
            var _this = this;
            // When the method gets invoked, all properties has been synced to the dynamic component.
            // After removing the old API, we can just check the directive's own `nzTrigger`.
            var el = this.elementRef.nativeElement;
            var trigger = this.trigger;
            this.removeTriggerListeners();
            if (trigger === 'hover') {
                var overlayElement_1;
                this.triggerDisposables.push(this.renderer.listen(el, 'mouseenter', function () {
                    _this.delayEnterLeave(true, true, _this.tooltip.nzMouseEnterDelay);
                }));
                this.triggerDisposables.push(this.renderer.listen(el, 'mouseleave', function () {
                    _this.delayEnterLeave(true, false, _this.tooltip.nzMouseLeaveDelay);
                    if (_this.tooltip.overlay.overlayRef && !overlayElement_1) {
                        overlayElement_1 = _this.tooltip.overlay.overlayRef.overlayElement;
                        _this.triggerDisposables.push(_this.renderer.listen(overlayElement_1, 'mouseenter', function () {
                            _this.delayEnterLeave(false, true);
                        }));
                        _this.triggerDisposables.push(_this.renderer.listen(overlayElement_1, 'mouseleave', function () {
                            _this.delayEnterLeave(false, false);
                        }));
                    }
                }));
            }
            else if (trigger === 'focus') {
                this.triggerDisposables.push(this.renderer.listen(el, 'focus', function () { return _this.show(); }));
                this.triggerDisposables.push(this.renderer.listen(el, 'blur', function () { return _this.hide(); }));
            }
            else if (trigger === 'click') {
                this.triggerDisposables.push(this.renderer.listen(el, 'click', function (e) {
                    e.preventDefault();
                    _this.show();
                }));
            } // Else do nothing because user wants to control the visibility programmatically.
        };
        /**
         * Sync changed properties to the component and trigger change detection in that component.
         */
        NzTooltipBaseDirective.prototype.updateChangedProperties = function (propertiesOrChanges) {
            var _this = this;
            var isArray = Array.isArray(propertiesOrChanges);
            var keys = isArray ? propertiesOrChanges : Object.keys(propertiesOrChanges);
            // tslint:disable-next-line no-any
            keys.forEach(function (property) {
                if (_this.needProxyProperties.indexOf(property) !== -1) {
                    // @ts-ignore
                    _this.updateComponentValue(property, _this[property]);
                }
            });
            if (isArray) {
                this.updateComponentValue('nzTitle', this.title);
                this.updateComponentValue('nzContent', this.content);
                this.updateComponentValue('nzPlacement', this.placement);
                this.updateComponentValue('nzTrigger', this.trigger);
            }
            else {
                var c = propertiesOrChanges;
                if (c.specificTitle || c.directiveNameTitle || c.nzTitle) {
                    this.updateComponentValue('nzTitle', this.title);
                }
                if (c.specificContent || c.directiveNameContent || c.nzContent) {
                    this.updateComponentValue('nzContent', this.content);
                }
                if (c.specificTrigger || c.nzTrigger) {
                    this.updateComponentValue('nzTrigger', this.trigger);
                }
                if (c.specificPlacement || c.nzPlacement) {
                    this.updateComponentValue('nzPlacement', this.placement);
                }
            }
            this.tooltip.updateByDirective();
        };
        // tslint:disable-next-line no-any
        NzTooltipBaseDirective.prototype.updateComponentValue = function (key, value) {
            if (typeof value !== 'undefined') {
                // @ts-ignore
                this.tooltip[key] = value;
            }
        };
        NzTooltipBaseDirective.prototype.delayEnterLeave = function (isOrigin, isEnter, delay) {
            var _this = this;
            if (delay === void 0) { delay = -1; }
            if (this.delayTimer) {
                this.clearTogglingTimer();
            }
            else if (delay > 0) {
                this.delayTimer = setTimeout(function () {
                    _this.delayTimer = undefined;
                    isEnter ? _this.show() : _this.hide();
                }, delay * 1000);
            }
            else {
                // `isOrigin` is used due to the tooltip will not hide immediately
                // (may caused by the fade-out animation).
                isEnter && isOrigin ? this.show() : this.hide();
            }
        };
        NzTooltipBaseDirective.prototype.removeTriggerListeners = function () {
            this.triggerDisposables.forEach(function (dispose) { return dispose(); });
            this.triggerDisposables.length = 0;
        };
        NzTooltipBaseDirective.prototype.clearTogglingTimer = function () {
            if (this.delayTimer) {
                clearTimeout(this.delayTimer);
                this.delayTimer = undefined;
            }
        };
        /** @nocollapse */ NzTooltipBaseDirective.ɵfac = function NzTooltipBaseDirective_Factory(t) { return new (t || NzTooltipBaseDirective)(core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(core.ViewContainerRef), core.ɵɵdirectiveInject(core.ComponentFactoryResolver), core.ɵɵdirectiveInject(core.Renderer2), core.ɵɵdirectiveInject(core$1.NzNoAnimationDirective)); };
        /** @nocollapse */ NzTooltipBaseDirective.ɵdir = core.ɵɵdefineDirective({ type: NzTooltipBaseDirective, inputs: { nzTitle: "nzTitle", nzContent: "nzContent", nzTrigger: "nzTrigger", nzPlacement: "nzPlacement", nzMouseEnterDelay: "nzMouseEnterDelay", nzMouseLeaveDelay: "nzMouseLeaveDelay", nzOverlayClassName: "nzOverlayClassName", nzOverlayStyle: "nzOverlayStyle", nzVisible: "nzVisible" }, outputs: { nzVisibleChange: "nzVisibleChange" }, features: [core.ɵɵNgOnChangesFeature()] });
        return NzTooltipBaseDirective;
    }());

    var NzTooltipDirective = /** @class */ (function (_super) {
        __extends(NzTooltipDirective, _super);
        function NzTooltipDirective(elementRef, hostView, resolver, renderer, noAnimation) {
            var _this = _super.call(this, elementRef, hostView, resolver, renderer, noAnimation) || this;
            _this.componentFactory = _this.resolver.resolveComponentFactory(NzToolTipComponent);
            return _this;
        }
        /** @nocollapse */ NzTooltipDirective.ɵfac = function NzTooltipDirective_Factory(t) { return new (t || NzTooltipDirective)(core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(core.ViewContainerRef), core.ɵɵdirectiveInject(core.ComponentFactoryResolver), core.ɵɵdirectiveInject(core.Renderer2), core.ɵɵdirectiveInject(core$1.NzNoAnimationDirective, 9)); };
        /** @nocollapse */ NzTooltipDirective.ɵdir = core.ɵɵdefineDirective({ type: NzTooltipDirective, selectors: [["", "nz-tooltip", ""]], hostBindings: function NzTooltipDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
                core.ɵɵallocHostVars(1);
            } if (rf & 2) {
                core.ɵɵclassProp("ant-tooltip-open", ctx.isTooltipComponentVisible);
            } }, inputs: { specificTitle: ["nzTooltipTitle", "specificTitle"], directiveNameTitle: ["nz-tooltip", "directiveNameTitle"], specificTrigger: ["nzTooltipTrigger", "specificTrigger"], specificPlacement: ["nzTooltipPlacement", "specificPlacement"] }, exportAs: ["nzTooltip"], features: [core.ɵɵInheritDefinitionFeature] });
        return NzTooltipDirective;
    }(NzTooltipBaseDirective));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzTooltipDirective, [{
            type: core.Directive,
            args: [{
                    selector: '[nz-tooltip]',
                    exportAs: 'nzTooltip',
                    host: {
                        '[class.ant-tooltip-open]': 'isTooltipComponentVisible'
                    }
                }]
        }], function () { return [{ type: core.ElementRef }, { type: core.ViewContainerRef }, { type: core.ComponentFactoryResolver }, { type: core.Renderer2 }, { type: core$1.NzNoAnimationDirective, decorators: [{
                    type: core.Host
                }, {
                    type: core.Optional
                }] }]; }, { specificTitle: [{
                type: core.Input,
                args: ['nzTooltipTitle']
            }], directiveNameTitle: [{
                type: core.Input,
                args: ['nz-tooltip']
            }], specificTrigger: [{
                type: core.Input,
                args: ['nzTooltipTrigger']
            }], specificPlacement: [{
                type: core.Input,
                args: ['nzTooltipPlacement']
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzToolTipModule = /** @class */ (function () {
        function NzToolTipModule() {
        }
        /** @nocollapse */ NzToolTipModule.ɵmod = core.ɵɵdefineNgModule({ type: NzToolTipModule });
        /** @nocollapse */ NzToolTipModule.ɵinj = core.ɵɵdefineInjector({ factory: function NzToolTipModule_Factory(t) { return new (t || NzToolTipModule)(); }, imports: [[common.CommonModule, overlay.OverlayModule, core$1.NzAddOnModule, core$1.NzOverlayModule, core$1.NzNoAnimationModule]] });
        return NzToolTipModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(NzToolTipModule, { declarations: [NzToolTipComponent, NzTooltipDirective], imports: [common.CommonModule, overlay.OverlayModule, core$1.NzAddOnModule, core$1.NzOverlayModule, core$1.NzNoAnimationModule], exports: [NzToolTipComponent, NzTooltipDirective] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzToolTipModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [NzToolTipComponent, NzTooltipDirective],
                    exports: [NzToolTipComponent, NzTooltipDirective],
                    imports: [common.CommonModule, overlay.OverlayModule, core$1.NzAddOnModule, core$1.NzOverlayModule, core$1.NzNoAnimationModule],
                    entryComponents: [NzToolTipComponent]
                }]
        }], null, null); })();

    exports.NzToolTipComponent = NzToolTipComponent;
    exports.NzToolTipModule = NzToolTipModule;
    exports.NzTooltipBaseComponent = NzTooltipBaseComponent;
    exports.NzTooltipBaseDirective = NzTooltipBaseDirective;
    exports.NzTooltipDirective = NzTooltipDirective;
    exports.isTooltipEmpty = isTooltipEmpty;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-tooltip.umd.js.map

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/keycodes'), require('@angular/cdk/overlay'), require('@angular/cdk/platform'), require('@angular/cdk/portal'), require('@angular/core'), require('ng-zorro-antd/button'), require('ng-zorro-antd/core'), require('rxjs'), require('rxjs/operators'), require('@angular/common'), require('@angular/forms'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/menu')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/dropdown', ['exports', '@angular/cdk/keycodes', '@angular/cdk/overlay', '@angular/cdk/platform', '@angular/cdk/portal', '@angular/core', 'ng-zorro-antd/button', 'ng-zorro-antd/core', 'rxjs', 'rxjs/operators', '@angular/common', '@angular/forms', 'ng-zorro-antd/icon', 'ng-zorro-antd/menu'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].dropdown = {}), global.ng.cdk.keycodes, global.ng.cdk.overlay, global.ng.cdk.platform, global.ng.cdk.portal, global.ng.core, global['ng-zorro-antd'].button, global['ng-zorro-antd'].core, global.rxjs, global.rxjs.operators, global.ng.common, global.ng.forms, global['ng-zorro-antd'].icon, global['ng-zorro-antd'].menu));
}(this, (function (exports, keycodes, overlay, platform, portal, core, button, core$1, rxjs, operators, common, forms, icon, menu) { 'use strict';

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

    var NzMenuDropdownService = /** @class */ (function (_super) {
        __extends(NzMenuDropdownService, _super);
        function NzMenuDropdownService() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.isInDropDown = true;
            return _this;
        }
        /** @nocollapse */ NzMenuDropdownService.ɵfac = function NzMenuDropdownService_Factory(t) { return ɵNzMenuDropdownService_BaseFactory(t || NzMenuDropdownService); };
        /** @nocollapse */ NzMenuDropdownService.ɵprov = core.ɵɵdefineInjectable({ token: NzMenuDropdownService, factory: NzMenuDropdownService.ɵfac });
        return NzMenuDropdownService;
    }(core$1.NzMenuBaseService));
    var ɵNzMenuDropdownService_BaseFactory = core.ɵɵgetInheritedFactory(NzMenuDropdownService);
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzMenuDropdownService, [{
            type: core.Injectable
        }], null, null); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    function NzDropdownMenuComponent_ng_template_0_div_0_Template(rf, ctx) { if (rf & 1) {
        var _r2074 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 1);
        core.ɵɵlistener("mouseenter", function NzDropdownMenuComponent_ng_template_0_div_0_Template_div_mouseenter_0_listener($event) { core.ɵɵrestoreView(_r2074); var ctx_r2073 = core.ɵɵnextContext(2); return ctx_r2073.setVisibleStateWhen(true, "hover"); })("mouseleave", function NzDropdownMenuComponent_ng_template_0_div_0_Template_div_mouseleave_0_listener($event) { core.ɵɵrestoreView(_r2074); var ctx_r2075 = core.ɵɵnextContext(2); return ctx_r2075.setVisibleStateWhen(false, "hover"); });
        core.ɵɵelementStart(1, "div");
        core.ɵɵprojection(2);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r2072 = core.ɵɵnextContext(2);
        core.ɵɵclassMap("ant-dropdown nz-dropdown ant-dropdown-placement-" + ctx_r2072.nzPlacement);
        core.ɵɵproperty("ngClass", ctx_r2072.nzOverlayClassName)("ngStyle", ctx_r2072.nzOverlayStyle)("@slideMotion", ctx_r2072.dropDownPosition)("@.disabled", ctx_r2072.noAnimation == null ? null : ctx_r2072.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r2072.noAnimation == null ? null : ctx_r2072.noAnimation.nzNoAnimation);
        core.ɵɵadvance(1);
        core.ɵɵclassProp("ant-table-filter-dropdown", ctx_r2072.nzTableFilter);
    } }
    function NzDropdownMenuComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtemplate(0, NzDropdownMenuComponent_ng_template_0_div_0_Template, 3, 9, "div", 0);
    } if (rf & 2) {
        var ctx_r2071 = core.ɵɵnextContext();
        core.ɵɵproperty("ngIf", ctx_r2071.open);
    } }
    var _c0 = ["*"];
    function dropdownMenuServiceFactory(injector) {
        return injector.get(NzMenuDropdownService);
    }
    var NzDropdownMenuComponent = /** @class */ (function () {
        function NzDropdownMenuComponent(cdr, elementRef, renderer, viewContainerRef, nzMenuDropdownService, noAnimation) {
            this.cdr = cdr;
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.viewContainerRef = viewContainerRef;
            this.nzMenuDropdownService = nzMenuDropdownService;
            this.noAnimation = noAnimation;
            this.open = false;
            this.triggerWidth = 0;
            this.dropDownPosition = 'bottom';
            this.visible$ = new rxjs.Subject();
            this.nzTrigger = 'hover';
            this.nzPlacement = 'bottomLeft';
            this.nzOverlayClassName = '';
            this.nzOverlayStyle = {};
            this.nzTableFilter = false;
        }
        NzDropdownMenuComponent.prototype.setVisibleStateWhen = function (visible, trigger) {
            if (trigger === void 0) { trigger = 'all'; }
            if (this.nzTrigger === trigger || trigger === 'all') {
                this.visible$.next(visible);
            }
        };
        NzDropdownMenuComponent.prototype.setValue = function (key, value) {
            this[key] = value;
            this.cdr.markForCheck();
        };
        NzDropdownMenuComponent.prototype.ngAfterContentInit = function () {
            this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
        };
        /** @nocollapse */ NzDropdownMenuComponent.ɵfac = function NzDropdownMenuComponent_Factory(t) { return new (t || NzDropdownMenuComponent)(core.ɵɵdirectiveInject(core.ChangeDetectorRef), core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(core.Renderer2), core.ɵɵdirectiveInject(core.ViewContainerRef), core.ɵɵdirectiveInject(NzMenuDropdownService), core.ɵɵdirectiveInject(core$1.NzNoAnimationDirective, 9)); };
        /** @nocollapse */ NzDropdownMenuComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzDropdownMenuComponent, selectors: [["nz-dropdown-menu"]], viewQuery: function NzDropdownMenuComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵstaticViewQuery(core.TemplateRef, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.templateRef = _t.first);
            } }, exportAs: ["nzDropdownMenu"], features: [core.ɵɵProvidersFeature([
                    NzMenuDropdownService,
                    {
                        provide: core$1.NzDropdownHigherOrderServiceToken,
                        useFactory: dropdownMenuServiceFactory,
                        deps: [[new core.Self(), core.Injector]]
                    }
                ])], ngContentSelectors: _c0, decls: 1, vars: 0, consts: [[3, "class", "ngClass", "ngStyle", "nzNoAnimation", "mouseenter", "mouseleave", 4, "ngIf"], [3, "ngClass", "ngStyle", "nzNoAnimation", "mouseenter", "mouseleave"]], template: function NzDropdownMenuComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵtemplate(0, NzDropdownMenuComponent_ng_template_0_Template, 1, 1, "ng-template");
            } }, directives: [common.NgIf, common.NgClass, common.NgStyle, core$1.NzNoAnimationDirective], styles: ["\n      :root .ant-dropdown.nz-dropdown {\n        top: 0;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "], encapsulation: 2, data: { animation: [core$1.slideMotion] }, changeDetection: 0 });
        return NzDropdownMenuComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzDropdownMenuComponent, [{
            type: core.Component,
            args: [{
                    selector: "nz-dropdown-menu",
                    templateUrl: './nz-dropdown-menu.component.html',
                    exportAs: "nzDropdownMenu",
                    animations: [core$1.slideMotion],
                    providers: [
                        NzMenuDropdownService,
                        {
                            provide: core$1.NzDropdownHigherOrderServiceToken,
                            useFactory: dropdownMenuServiceFactory,
                            deps: [[new core.Self(), core.Injector]]
                        }
                    ],
                    styles: [
                        "\n      :root .ant-dropdown.nz-dropdown {\n        top: 0;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "
                    ],
                    preserveWhitespaces: false,
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                }]
        }], function () { return [{ type: core.ChangeDetectorRef }, { type: core.ElementRef }, { type: core.Renderer2 }, { type: core.ViewContainerRef }, { type: NzMenuDropdownService }, { type: core$1.NzNoAnimationDirective, decorators: [{
                    type: core.Host
                }, {
                    type: core.Optional
                }] }]; }, { templateRef: [{
                type: core.ViewChild,
                args: [core.TemplateRef, { static: true }]
            }] }); })();

    var NzDropDownDirective = /** @class */ (function () {
        function NzDropDownDirective(elementRef, renderer, overlay, platform, nzButtonComponent, nzButtonGroupComponent, viewContainerRef) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.overlay = overlay;
            this.platform = platform;
            this.nzButtonComponent = nzButtonComponent;
            this.nzButtonGroupComponent = nzButtonGroupComponent;
            this.viewContainerRef = viewContainerRef;
            this.overlayRef = null;
            this.destroy$ = new rxjs.Subject();
            this.triggerWidth = 0;
            this.el = this.elementRef.nativeElement;
            this.dropdownOpen = false;
            this.positions = __spread(core$1.DEFAULT_DROPDOWN_POSITIONS);
            this.positionSubscription = rxjs.Subscription.EMPTY;
            this.overlaySubscription = rxjs.Subscription.EMPTY;
            this.hover$ = rxjs.merge(rxjs.fromEvent(this.el, 'mouseenter').pipe(operators.mapTo(true)), rxjs.fromEvent(this.el, 'mouseleave').pipe(operators.mapTo(false)));
            this.$click = rxjs.fromEvent(this.el, 'click').pipe(operators.tap(function (e) { return e.stopPropagation(); }), operators.mapTo(true));
            this.nzTrigger = 'hover';
            this.nzBackdrop = true;
            this.nzClickHide = true;
            this.nzDisabled = false;
            this.nzVisible = false;
            this.nzTableFilter = false;
            this.nzOverlayClassName = '';
            this.nzOverlayStyle = {};
            this.nzPlacement = 'bottomLeft';
            this.nzVisibleChange = new core.EventEmitter();
            renderer.addClass(elementRef.nativeElement, 'ant-dropdown-trigger');
            if (this.nzButtonComponent) {
                this.nzButtonComponent.isInDropdown = true;
            }
            if (this.nzButtonGroupComponent) {
                this.nzButtonGroupComponent.isInDropdown = true;
            }
        }
        NzDropDownDirective.prototype.setDisabled = function (disabled) {
            if (disabled) {
                this.renderer.setAttribute(this.el, 'disabled', '');
                if (this.nzVisible) {
                    this.nzVisible = false;
                    this.nzVisibleChange.emit(this.nzVisible);
                    this.updateOverlayByVisible();
                }
            }
            else {
                this.renderer.removeAttribute(this.el, 'disabled');
            }
        };
        NzDropDownDirective.prototype.getOverlayConfig = function () {
            return new overlay.OverlayConfig({
                positionStrategy: this.overlay
                    .position()
                    .flexibleConnectedTo(this.el)
                    .withLockedPosition(),
                minWidth: this.triggerWidth,
                hasBackdrop: this.nzTrigger === 'click',
                backdropClass: this.nzBackdrop ? undefined : 'nz-overlay-transparent-backdrop',
                scrollStrategy: this.overlay.scrollStrategies.reposition()
            });
        };
        NzDropDownDirective.prototype.createOverlay = function () {
            if (!this.overlayRef) {
                var config = this.getOverlayConfig();
                this.overlayRef = this.overlay.create(config);
                this.subscribeOverlayEvent(this.overlayRef);
                this.subscribeToPositions(config.positionStrategy);
                return this.overlayRef;
            }
            else {
                var overlayConfig = this.overlayRef.getConfig();
                this.updateOverlayConfig(overlayConfig);
                return this.overlayRef;
            }
        };
        NzDropDownDirective.prototype.updateOverlayConfig = function (overlayConfig) {
            overlayConfig.minWidth = this.triggerWidth;
            overlayConfig.hasBackdrop = this.nzTrigger === 'click';
            return overlayConfig;
        };
        NzDropDownDirective.prototype.dispose = function () {
            if (this.overlayRef) {
                this.overlayRef.dispose();
                this.overlayRef = null;
                this.positionSubscription.unsubscribe();
                this.overlaySubscription.unsubscribe();
            }
        };
        NzDropDownDirective.prototype.subscribeToPositions = function (position) {
            var _this = this;
            this.positionSubscription.unsubscribe();
            this.positionSubscription = position.positionChanges.pipe(operators.takeUntil(this.destroy$)).subscribe(function (change) {
                _this.nzDropdownMenu.setValue('dropDownPosition', change.connectionPair.originY);
            });
        };
        NzDropDownDirective.prototype.subscribeOverlayEvent = function (overlayRef) {
            var _this = this;
            this.overlaySubscription.unsubscribe();
            this.overlaySubscription = rxjs.merge(overlayRef.backdropClick(), overlayRef.detachments(), overlayRef.keydownEvents().pipe(operators.filter(function (e) { return e.keyCode === keycodes.ESCAPE && !keycodes.hasModifierKey(e); })))
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function () {
                _this.nzDropdownMenu.setVisibleStateWhen(false);
            });
        };
        NzDropDownDirective.prototype.getPortal = function () {
            if (!this.portal || this.portal.templateRef !== this.nzDropdownMenu.templateRef) {
                this.portal = new portal.TemplatePortal(this.nzDropdownMenu.templateRef, this.viewContainerRef);
            }
            return this.portal;
        };
        NzDropDownDirective.prototype.openMenu = function () {
            if (!this.dropdownOpen) {
                var overlayRef = this.createOverlay();
                var overlayConfig = overlayRef.getConfig();
                this.nzDropdownMenu.setValue('open', true);
                this.setPosition(overlayConfig.positionStrategy);
                overlayRef.attach(this.getPortal());
                this.dropdownOpen = true;
            }
        };
        NzDropDownDirective.prototype.closeMenu = function () {
            if (this.overlayRef) {
                this.overlayRef.detach();
                this.dropdownOpen = false;
                this.nzDropdownMenu.setValue('open', false);
            }
        };
        NzDropDownDirective.prototype.setPosition = function (positionStrategy) {
            this.positionStrategy = positionStrategy;
            positionStrategy.withPositions(__spread(this.positions));
        };
        NzDropDownDirective.prototype.updatePositionStrategy = function (positions) {
            if (this.positionStrategy) {
                this.positionStrategy.withPositions(positions);
            }
        };
        NzDropDownDirective.prototype.setTriggerWidth = function () {
            if (this.platform.isBrowser) {
                var element = this.nzMatchWidthElement ? this.nzMatchWidthElement.nativeElement : this.el;
                this.triggerWidth = element.getBoundingClientRect().width;
            }
        };
        NzDropDownDirective.prototype.initActionSubscribe = function () {
            var _this = this;
            var hostVisible$ = this.nzTrigger === 'hover' ? this.hover$ : this.$click;
            var dropdownMenuVisible$ = this.nzDropdownMenu.visible$;
            var menuClickVisible$ = this.nzClickHide ? this.nzDropdownMenu.nzMenuDropdownService.menuItemClick$.pipe(operators.mapTo(false)) : rxjs.EMPTY;
            var supVisible$ = rxjs.merge(dropdownMenuVisible$, hostVisible$, menuClickVisible$);
            var subVisible$ = this.nzDropdownMenu.nzMenuDropdownService.menuOpen$;
            rxjs.combineLatest([supVisible$, subVisible$])
                .pipe(operators.map(function (_a) {
                var _b = __read(_a, 2), supVisible = _b[0], subVisible = _b[1];
                return supVisible || subVisible;
            }), operators.debounceTime(50), operators.distinctUntilChanged(), operators.takeUntil(this.destroy$))
                .subscribe(function (visible) {
                if (!_this.nzDisabled && _this.nzVisible !== visible) {
                    _this.nzVisible = visible;
                    _this.updateOverlayByVisible();
                    _this.nzVisibleChange.emit(_this.nzVisible);
                    _this.setTriggerWidth();
                    _this.nzDropdownMenu.setValue('triggerWidth', _this.triggerWidth);
                }
            });
        };
        NzDropDownDirective.prototype.updateOverlayByVisible = function () {
            if (this.nzVisible) {
                this.openMenu();
            }
            else {
                this.closeMenu();
            }
        };
        NzDropDownDirective.prototype.updateDisabledState = function () {
            this.setDisabled(this.nzDisabled);
        };
        NzDropDownDirective.prototype.regeneratePosition = function (placement, positions) {
            return __spread([core$1.POSITION_MAP[placement]], positions);
        };
        NzDropDownDirective.prototype.ngAfterViewInit = function () {
            if (this.nzDropdownMenu) {
                this.setTriggerWidth();
                this.initActionSubscribe();
                this.updateDisabledState();
            }
        };
        NzDropDownDirective.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
            this.dispose();
        };
        NzDropDownDirective.prototype.ngOnChanges = function (changes) {
            var nzVisible = changes.nzVisible, nzTrigger = changes.nzTrigger, nzPlacement = changes.nzPlacement, nzDisabled = changes.nzDisabled, nzOverlayClassName = changes.nzOverlayClassName, nzOverlayStyle = changes.nzOverlayStyle, nzTableFilter = changes.nzTableFilter;
            if (this.nzDropdownMenu) {
                if (nzVisible) {
                    this.updateOverlayByVisible();
                    this.nzDropdownMenu.visible$.next(this.nzVisible);
                }
                if (nzTrigger) {
                    this.nzDropdownMenu.setValue('nzTrigger', this.nzTrigger);
                }
                if (nzTableFilter) {
                    this.nzDropdownMenu.setValue('nzTableFilter', this.nzTableFilter);
                }
                if (nzOverlayClassName) {
                    this.nzDropdownMenu.setValue('nzOverlayClassName', this.nzOverlayClassName);
                }
                if (nzOverlayStyle) {
                    this.nzDropdownMenu.setValue('nzOverlayStyle', this.nzOverlayStyle);
                }
                if (nzPlacement) {
                    this.nzDropdownMenu.setValue('nzPlacement', this.nzPlacement);
                    this.nzDropdownMenu.setValue('dropDownPosition', this.nzDropdownMenu.nzPlacement.indexOf('top') !== -1 ? 'top' : 'bottom');
                    this.positions = this.regeneratePosition(this.nzPlacement, this.positions);
                    this.updatePositionStrategy(this.positions);
                }
            }
            if (nzDisabled) {
                this.updateDisabledState();
            }
        };
        /** @nocollapse */ NzDropDownDirective.ɵfac = function NzDropDownDirective_Factory(t) { return new (t || NzDropDownDirective)(core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(core.Renderer2), core.ɵɵdirectiveInject(overlay.Overlay), core.ɵɵdirectiveInject(platform.Platform), core.ɵɵdirectiveInject(button.NzButtonComponent, 9), core.ɵɵdirectiveInject(button.NzButtonGroupComponent, 8), core.ɵɵdirectiveInject(core.ViewContainerRef)); };
        /** @nocollapse */ NzDropDownDirective.ɵdir = core.ɵɵdefineDirective({ type: NzDropDownDirective, selectors: [["", "nz-dropdown", ""]], inputs: { nzDropdownMenu: "nzDropdownMenu", nzTrigger: "nzTrigger", nzMatchWidthElement: "nzMatchWidthElement", nzBackdrop: "nzBackdrop", nzClickHide: "nzClickHide", nzDisabled: "nzDisabled", nzVisible: "nzVisible", nzTableFilter: "nzTableFilter", nzOverlayClassName: "nzOverlayClassName", nzOverlayStyle: "nzOverlayStyle", nzPlacement: "nzPlacement" }, outputs: { nzVisibleChange: "nzVisibleChange" }, exportAs: ["nzDropdown"], features: [core.ɵɵNgOnChangesFeature()] });
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzDropDownDirective.prototype, "nzBackdrop", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzDropDownDirective.prototype, "nzClickHide", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzDropDownDirective.prototype, "nzDisabled", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzDropDownDirective.prototype, "nzVisible", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzDropDownDirective.prototype, "nzTableFilter", void 0);
        return NzDropDownDirective;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzDropDownDirective, [{
            type: core.Directive,
            args: [{
                    selector: '[nz-dropdown]',
                    exportAs: 'nzDropdown'
                }]
        }], function () { return [{ type: core.ElementRef }, { type: core.Renderer2 }, { type: overlay.Overlay }, { type: platform.Platform }, { type: button.NzButtonComponent, decorators: [{
                    type: core.Optional
                }, {
                    type: core.Host
                }] }, { type: button.NzButtonGroupComponent, decorators: [{
                    type: core.Optional
                }] }, { type: core.ViewContainerRef }]; }, { nzDropdownMenu: [{
                type: core.Input
            }], nzTrigger: [{
                type: core.Input
            }], nzMatchWidthElement: [{
                type: core.Input
            }], nzBackdrop: [{
                type: core.Input
            }], nzClickHide: [{
                type: core.Input
            }], nzDisabled: [{
                type: core.Input
            }], nzVisible: [{
                type: core.Input
            }], nzTableFilter: [{
                type: core.Input
            }], nzOverlayClassName: [{
                type: core.Input
            }], nzOverlayStyle: [{
                type: core.Input
            }], nzPlacement: [{
                type: core.Input
            }], nzVisibleChange: [{
                type: core.Output
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzDropdownServiceModule = /** @class */ (function () {
        function NzDropdownServiceModule() {
        }
        /** @nocollapse */ NzDropdownServiceModule.ɵmod = core.ɵɵdefineNgModule({ type: NzDropdownServiceModule });
        /** @nocollapse */ NzDropdownServiceModule.ɵinj = core.ɵɵdefineInjector({ factory: function NzDropdownServiceModule_Factory(t) { return new (t || NzDropdownServiceModule)(); } });
        return NzDropdownServiceModule;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzDropdownServiceModule, [{
            type: core.NgModule
        }], null, null); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzContextMenuServiceModule = /** @class */ (function () {
        function NzContextMenuServiceModule() {
        }
        /** @nocollapse */ NzContextMenuServiceModule.ɵmod = core.ɵɵdefineNgModule({ type: NzContextMenuServiceModule });
        /** @nocollapse */ NzContextMenuServiceModule.ɵinj = core.ɵɵdefineInjector({ factory: function NzContextMenuServiceModule_Factory(t) { return new (t || NzContextMenuServiceModule)(); } });
        return NzContextMenuServiceModule;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzContextMenuServiceModule, [{
            type: core.NgModule
        }], null, null); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzDropDownADirective = /** @class */ (function () {
        function NzDropDownADirective(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-dropdown-link');
        }
        /** @nocollapse */ NzDropDownADirective.ɵfac = function NzDropDownADirective_Factory(t) { return new (t || NzDropDownADirective)(core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(core.Renderer2)); };
        /** @nocollapse */ NzDropDownADirective.ɵdir = core.ɵɵdefineDirective({ type: NzDropDownADirective, selectors: [["a", "nz-dropdown", ""]], exportAs: ["nzDropdown"] });
        return NzDropDownADirective;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzDropDownADirective, [{
            type: core.Directive,
            args: [{
                    selector: 'a[nz-dropdown]',
                    exportAs: 'nzDropdown'
                }]
        }], function () { return [{ type: core.ElementRef }, { type: core.Renderer2 }]; }, null); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzDropDownModule = /** @class */ (function () {
        function NzDropDownModule() {
        }
        /** @nocollapse */ NzDropDownModule.ɵmod = core.ɵɵdefineNgModule({ type: NzDropDownModule });
        /** @nocollapse */ NzDropDownModule.ɵinj = core.ɵɵdefineInjector({ factory: function NzDropDownModule_Factory(t) { return new (t || NzDropDownModule)(); }, imports: [[
                    common.CommonModule,
                    overlay.OverlayModule,
                    forms.FormsModule,
                    button.NzButtonModule,
                    menu.NzMenuModule,
                    icon.NzIconModule,
                    platform.PlatformModule,
                    core$1.NzNoAnimationModule,
                    core$1.NzOverlayModule,
                    NzDropdownServiceModule,
                    NzContextMenuServiceModule,
                    core$1.NzAddOnModule
                ],
                menu.NzMenuModule] });
        return NzDropDownModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(NzDropDownModule, { declarations: [NzDropDownDirective, NzDropDownADirective, NzDropdownMenuComponent], imports: [common.CommonModule,
            overlay.OverlayModule,
            forms.FormsModule,
            button.NzButtonModule,
            menu.NzMenuModule,
            icon.NzIconModule,
            platform.PlatformModule,
            core$1.NzNoAnimationModule,
            core$1.NzOverlayModule,
            NzDropdownServiceModule,
            NzContextMenuServiceModule,
            core$1.NzAddOnModule], exports: [menu.NzMenuModule, NzDropDownDirective, NzDropDownADirective, NzDropdownMenuComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzDropDownModule, [{
            type: core.NgModule,
            args: [{
                    imports: [
                        common.CommonModule,
                        overlay.OverlayModule,
                        forms.FormsModule,
                        button.NzButtonModule,
                        menu.NzMenuModule,
                        icon.NzIconModule,
                        platform.PlatformModule,
                        core$1.NzNoAnimationModule,
                        core$1.NzOverlayModule,
                        NzDropdownServiceModule,
                        NzContextMenuServiceModule,
                        core$1.NzAddOnModule
                    ],
                    entryComponents: [NzDropdownMenuComponent],
                    declarations: [NzDropDownDirective, NzDropDownADirective, NzDropdownMenuComponent],
                    exports: [menu.NzMenuModule, NzDropDownDirective, NzDropDownADirective, NzDropdownMenuComponent]
                }]
        }], null, null); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzContextMenuService = /** @class */ (function () {
        function NzContextMenuService(overlay) {
            this.overlay = overlay;
            this.clickOutsideSubscription = rxjs.Subscription.EMPTY;
            this.clickMenuSubscription = rxjs.Subscription.EMPTY;
            this.positionSubscription = rxjs.Subscription.EMPTY;
        }
        NzContextMenuService.prototype.create = function ($event, nzDropdownMenuComponent) {
            $event.preventDefault();
            var overlayRef = this.createOverlay($event);
            if (overlayRef.hasAttached()) {
                this.close();
            }
            this.attachTemplatePortal(overlayRef, nzDropdownMenuComponent);
            this.handleClickOutside();
        };
        NzContextMenuService.prototype.close = function () {
            if (this.overlayRef) {
                this.overlayRef.detach();
                this.setOpenState(false);
                this.clickOutsideSubscription.unsubscribe();
                this.clickMenuSubscription.unsubscribe();
                this.positionSubscription.unsubscribe();
            }
        };
        NzContextMenuService.prototype.handleClickOutside = function () {
            var _this = this;
            this.clickOutsideSubscription.unsubscribe();
            this.clickOutsideSubscription = rxjs.fromEvent(document, 'click')
                .pipe(operators.filter(function (event) { return !!_this.overlayRef && !_this.overlayRef.overlayElement.contains(event.target); }), 
            // handle firefox contextmenu event
            operators.filter(function (event) { return event.button !== 2; }), operators.take(1))
                .subscribe(function () {
                _this.close();
            });
        };
        NzContextMenuService.prototype.attachTemplatePortal = function (overlayRef, nzDropdownMenuComponent) {
            var _this = this;
            this.nzDropdownMenuComponent = nzDropdownMenuComponent;
            nzDropdownMenuComponent.setValue('nzTrigger', 'click');
            this.clickMenuSubscription.unsubscribe();
            this.clickMenuSubscription = nzDropdownMenuComponent.nzMenuDropdownService.menuItemClick$.subscribe(function () {
                _this.close();
            });
            overlayRef.attach(new portal.TemplatePortal(nzDropdownMenuComponent.templateRef, nzDropdownMenuComponent.viewContainerRef));
            this.setOpenState(true);
        };
        NzContextMenuService.prototype.setOpenState = function (state) {
            this.nzDropdownMenuComponent.setValue('open', state);
        };
        NzContextMenuService.prototype.getOverlayConfig = function ($event) {
            return new overlay.OverlayConfig({
                panelClass: 'nz-dropdown-panel',
                positionStrategy: this.generatePositionStrategy($event),
                scrollStrategy: this.overlay.scrollStrategies.close()
            });
        };
        NzContextMenuService.prototype.generatePositionStrategy = function ($event) {
            return this.overlay
                .position()
                .flexibleConnectedTo({ x: $event.x, y: $event.y })
                .withPositions([
                new overlay.ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'top' }),
                new overlay.ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
                new overlay.ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'bottom' }),
                new overlay.ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'top' })
            ]);
        };
        NzContextMenuService.prototype.subscribeToPositions = function (position) {
            var _this = this;
            this.positionSubscription.unsubscribe();
            this.positionSubscription = position.positionChanges.subscribe(function (change) {
                // TODO: positionChanges won't trigger if not dispose
                _this.nzDropdownMenuComponent.setValue('dropDownPosition', change.connectionPair.overlayY === 'bottom' ? 'top' : 'bottom');
            });
        };
        NzContextMenuService.prototype.createOverlay = function ($event) {
            var config = this.getOverlayConfig($event);
            if (!this.overlayRef) {
                this.overlayRef = this.overlay.create(config);
            }
            else {
                this.updatePosition(this.overlayRef, $event);
            }
            this.subscribeToPositions(config.positionStrategy);
            return this.overlayRef;
        };
        NzContextMenuService.prototype.updatePosition = function (overlayRef, $event) {
            overlayRef.updatePositionStrategy(this.generatePositionStrategy($event));
        };
        /** @nocollapse */ NzContextMenuService.ɵfac = function NzContextMenuService_Factory(t) { return new (t || NzContextMenuService)(core.ɵɵinject(overlay.Overlay)); };
        /** @nocollapse */ NzContextMenuService.ɵprov = core.ɵɵdefineInjectable({ token: NzContextMenuService, factory: NzContextMenuService.ɵfac, providedIn: NzContextMenuServiceModule });
        return NzContextMenuService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzContextMenuService, [{
            type: core.Injectable,
            args: [{
                    providedIn: NzContextMenuServiceModule
                }]
        }], function () { return [{ type: overlay.Overlay }]; }, null); })();

    exports.NzContextMenuService = NzContextMenuService;
    exports.NzContextMenuServiceModule = NzContextMenuServiceModule;
    exports.NzDropDownADirective = NzDropDownADirective;
    exports.NzDropDownDirective = NzDropDownDirective;
    exports.NzDropDownModule = NzDropDownModule;
    exports.NzDropdownMenuComponent = NzDropdownMenuComponent;
    exports.NzDropdownServiceModule = NzDropdownServiceModule;
    exports.NzMenuDropdownService = NzMenuDropdownService;
    exports.dropdownMenuServiceFactory = dropdownMenuServiceFactory;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-dropdown.umd.js.map

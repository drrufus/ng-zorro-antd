import { __spread, __extends } from 'tslib';
import { ɵɵdirectiveInject, ChangeDetectorRef, ɵɵdefineDirective, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, TemplateRef, ɵɵelementContainerStart, ɵɵtext, ɵɵelementContainerEnd, ɵɵnextContext, ɵɵadvance, ɵɵtextInterpolate, ɵɵelementStart, ɵɵelement, ɵɵtemplate, ɵɵelementEnd, ɵɵproperty, ɵɵdefineComponent, ɵɵstaticContentQuery, ɵɵInheritDefinitionFeature, ɵɵprojectionDef, ɵɵprojection, ɵɵtemplateRefExtractor, ɵɵlistener, ɵsetClassMetadata, Component, ChangeDetectionStrategy, ViewEncapsulation, Host, Optional, Input, ContentChild, EventEmitter, ElementRef, ViewContainerRef, ComponentFactoryResolver, Renderer2, ɵɵNgOnChangesFeature, ɵɵallocHostVars, ɵɵclassProp, Directive, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { DEFAULT_TOOLTIP_POSITIONS, toBoolean, POSITION_MAP, getPlacementName, NzNoAnimationDirective, isNotNil, NzConnectedOverlayDirective, NzStringTemplateOutletDirective, zoomBigMotion, warnDeprecation, NzAddOnModule, NzOverlayModule, NzNoAnimationModule } from 'ng-zorro-antd/core';
import { CdkConnectedOverlay, OverlayModule } from '@angular/cdk/overlay';
import { Subject } from 'rxjs';
import { NgClass, NgStyle, CommonModule } from '@angular/common';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';

var _c0 = ["overlay"];
var NzTooltipBaseComponent = /** @class */ (function () {
    function NzTooltipBaseComponent(cdr, noAnimation) {
        this.cdr = cdr;
        this.noAnimation = noAnimation;
        this.nzVisibleChange = new Subject();
        this.nzOverlayStyle = {};
        this.nzMouseEnterDelay = 0.15;
        this.nzMouseLeaveDelay = 0.1;
        this._visible = false;
        this._trigger = 'hover';
        this.preferredPlacement = 'top';
        this._classMap = {};
        this._hasBackdrop = false;
        this._prefix = 'ant-tooltip-placement';
        this._positions = __spread(DEFAULT_TOOLTIP_POSITIONS);
    }
    Object.defineProperty(NzTooltipBaseComponent.prototype, "nzVisible", {
        get: function () {
            return this._visible;
        },
        set: function (value) {
            var visible = toBoolean(value);
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
                this._positions = __spread([POSITION_MAP[this.nzPlacement]], this._positions);
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
        this.preferredPlacement = getPlacementName(position);
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
    /** @nocollapse */ NzTooltipBaseComponent.ɵfac = function NzTooltipBaseComponent_Factory(t) { return new (t || NzTooltipBaseComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzNoAnimationDirective)); };
    /** @nocollapse */ NzTooltipBaseComponent.ɵdir = ɵɵdefineDirective({ type: NzTooltipBaseComponent, viewQuery: function NzTooltipBaseComponent_Query(rf, ctx) { if (rf & 1) {
            ɵɵviewQuery(_c0, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.overlay = _t.first);
        } } });
    return NzTooltipBaseComponent;
}());
function isTooltipEmpty(value) {
    return value instanceof TemplateRef ? false : value === '' || !isNotNil(value);
}

var _c0$1 = ["nzTemplate"];
function NzToolTipComponent_ng_template_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r313 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r313.title);
} }
function NzToolTipComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵelementStart(1, "div", 3);
    ɵɵelement(2, "div", 4);
    ɵɵelementStart(3, "div", 5);
    ɵɵtemplate(4, NzToolTipComponent_ng_template_1_ng_container_4_Template, 2, 1, "ng-container", 6);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r312 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r312._classMap)("ngStyle", ctx_r312.nzOverlayStyle)("@.disabled", ctx_r312.noAnimation == null ? null : ctx_r312.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r312.noAnimation == null ? null : ctx_r312.noAnimation.nzNoAnimation)("@zoomBigMotion", "active");
    ɵɵadvance(4);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r312.title);
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
    /** @nocollapse */ NzToolTipComponent.ɵfac = function NzToolTipComponent_Factory(t) { return new (t || NzToolTipComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzNoAnimationDirective, 9)); };
    /** @nocollapse */ NzToolTipComponent.ɵcmp = ɵɵdefineComponent({ type: NzToolTipComponent, selectors: [["nz-tooltip"]], contentQueries: function NzToolTipComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            ɵɵstaticContentQuery(dirIndex, _c0$1, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzTitleTemplate = _t.first);
        } }, inputs: { nzTitle: "nzTitle" }, exportAs: ["nzTooltipComponent"], features: [ɵɵInheritDefinitionFeature], ngContentSelectors: _c1, decls: 3, vars: 4, consts: [["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayPositions", "backdropClick", "detach", "positionChange"], ["overlay", "cdkConnectedOverlay"], [1, "ant-tooltip", 3, "ngClass", "ngStyle", "nzNoAnimation"], [1, "ant-tooltip-content"], [1, "ant-tooltip-arrow"], [1, "ant-tooltip-inner"], [4, "nzStringTemplateOutlet"]], template: function NzToolTipComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
            ɵɵtemplate(1, NzToolTipComponent_ng_template_1_Template, 5, 6, "ng-template", 0, 1, ɵɵtemplateRefExtractor);
            ɵɵlistener("backdropClick", function NzToolTipComponent_Template_ng_template_backdropClick_1_listener($event) { return ctx.hide(); })("detach", function NzToolTipComponent_Template_ng_template_detach_1_listener($event) { return ctx.hide(); })("positionChange", function NzToolTipComponent_Template_ng_template_positionChange_1_listener($event) { return ctx.onPositionChange($event); });
        } if (rf & 2) {
            ɵɵadvance(1);
            ɵɵproperty("cdkConnectedOverlayOrigin", ctx.origin)("cdkConnectedOverlayOpen", ctx._visible)("cdkConnectedOverlayHasBackdrop", ctx._hasBackdrop)("cdkConnectedOverlayPositions", ctx._positions);
        } }, directives: [CdkConnectedOverlay, NzConnectedOverlayDirective, NgClass, NgStyle, NzNoAnimationDirective, NzStringTemplateOutletDirective], styles: ["\n      .ant-tooltip {\n        position: relative;\n      }\n    "], encapsulation: 2, data: { animation: [zoomBigMotion] }, changeDetection: 0 });
    return NzToolTipComponent;
}(NzTooltipBaseComponent));
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzToolTipComponent, [{
        type: Component,
        args: [{
                selector: 'nz-tooltip',
                exportAs: 'nzTooltipComponent',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                animations: [zoomBigMotion],
                templateUrl: './nz-tooltip.component.html',
                preserveWhitespaces: false,
                styles: [
                    "\n      .ant-tooltip {\n        position: relative;\n      }\n    "
                ]
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, { nzTitle: [{
            type: Input
        }], nzTitleTemplate: [{
            type: ContentChild,
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
        this.nzVisibleChange = new EventEmitter();
        this.isTooltipComponentVisible = false;
        this.$destroy = new Subject();
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
            warnDeprecation("'nzTitle' of 'nz-tooltip' is deprecated and will be removed in 10.0.0.\nPlease use 'nzTooltipTitle' instead. The same with 'nz-popover' and 'nz-popconfirm'.");
        }
        if (changes.nzContent) {
            warnDeprecation("'nzContent' of 'nz-popover' is deprecated and will be removed in 10.0.0.\nPlease use 'nzPopoverContent' instead.");
        }
        if (changes.nzPlacement) {
            warnDeprecation("'nzPlacement' of 'nz-tooltip' is deprecated and will be removed in 10.0.0.\nPlease use 'nzTooltipContent' instead. The same with 'nz-popover' and 'nz-popconfirm'.");
        }
        if (changes.nzTrigger) {
            warnDeprecation("'nzTrigger' of 'nz-tooltip' is deprecated and will be removed in 10.0.0.\nPlease use 'nzTooltipTrigger' instead. The same with 'nz-popover' and 'nz-popconfirm'.");
        }
    };
    NzTooltipBaseDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.createTooltipComponent();
        this.tooltip.nzVisibleChange.pipe(distinctUntilChanged(), takeUntil(this.$destroy)).subscribe(function (visible) {
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
    /** @nocollapse */ NzTooltipBaseDirective.ɵfac = function NzTooltipBaseDirective_Factory(t) { return new (t || NzTooltipBaseDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(ComponentFactoryResolver), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NzNoAnimationDirective)); };
    /** @nocollapse */ NzTooltipBaseDirective.ɵdir = ɵɵdefineDirective({ type: NzTooltipBaseDirective, inputs: { nzTitle: "nzTitle", nzContent: "nzContent", nzTrigger: "nzTrigger", nzPlacement: "nzPlacement", nzMouseEnterDelay: "nzMouseEnterDelay", nzMouseLeaveDelay: "nzMouseLeaveDelay", nzOverlayClassName: "nzOverlayClassName", nzOverlayStyle: "nzOverlayStyle", nzVisible: "nzVisible" }, outputs: { nzVisibleChange: "nzVisibleChange" }, features: [ɵɵNgOnChangesFeature()] });
    return NzTooltipBaseDirective;
}());

var NzTooltipDirective = /** @class */ (function (_super) {
    __extends(NzTooltipDirective, _super);
    function NzTooltipDirective(elementRef, hostView, resolver, renderer, noAnimation) {
        var _this = _super.call(this, elementRef, hostView, resolver, renderer, noAnimation) || this;
        _this.componentFactory = _this.resolver.resolveComponentFactory(NzToolTipComponent);
        return _this;
    }
    /** @nocollapse */ NzTooltipDirective.ɵfac = function NzTooltipDirective_Factory(t) { return new (t || NzTooltipDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(ComponentFactoryResolver), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NzNoAnimationDirective, 9)); };
    /** @nocollapse */ NzTooltipDirective.ɵdir = ɵɵdefineDirective({ type: NzTooltipDirective, selectors: [["", "nz-tooltip", ""]], hostBindings: function NzTooltipDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            ɵɵallocHostVars(1);
        } if (rf & 2) {
            ɵɵclassProp("ant-tooltip-open", ctx.isTooltipComponentVisible);
        } }, inputs: { specificTitle: ["nzTooltipTitle", "specificTitle"], directiveNameTitle: ["nz-tooltip", "directiveNameTitle"], specificTrigger: ["nzTooltipTrigger", "specificTrigger"], specificPlacement: ["nzTooltipPlacement", "specificPlacement"] }, exportAs: ["nzTooltip"], features: [ɵɵInheritDefinitionFeature] });
    return NzTooltipDirective;
}(NzTooltipBaseDirective));
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzTooltipDirective, [{
        type: Directive,
        args: [{
                selector: '[nz-tooltip]',
                exportAs: 'nzTooltip',
                host: {
                    '[class.ant-tooltip-open]': 'isTooltipComponentVisible'
                }
            }]
    }], function () { return [{ type: ElementRef }, { type: ViewContainerRef }, { type: ComponentFactoryResolver }, { type: Renderer2 }, { type: NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, { specificTitle: [{
            type: Input,
            args: ['nzTooltipTitle']
        }], directiveNameTitle: [{
            type: Input,
            args: ['nz-tooltip']
        }], specificTrigger: [{
            type: Input,
            args: ['nzTooltipTrigger']
        }], specificPlacement: [{
            type: Input,
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
    /** @nocollapse */ NzToolTipModule.ɵmod = ɵɵdefineNgModule({ type: NzToolTipModule });
    /** @nocollapse */ NzToolTipModule.ɵinj = ɵɵdefineInjector({ factory: function NzToolTipModule_Factory(t) { return new (t || NzToolTipModule)(); }, imports: [[CommonModule, OverlayModule, NzAddOnModule, NzOverlayModule, NzNoAnimationModule]] });
    return NzToolTipModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzToolTipModule, { declarations: [NzToolTipComponent, NzTooltipDirective], imports: [CommonModule, OverlayModule, NzAddOnModule, NzOverlayModule, NzNoAnimationModule], exports: [NzToolTipComponent, NzTooltipDirective] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzToolTipModule, [{
        type: NgModule,
        args: [{
                declarations: [NzToolTipComponent, NzTooltipDirective],
                exports: [NzToolTipComponent, NzTooltipDirective],
                imports: [CommonModule, OverlayModule, NzAddOnModule, NzOverlayModule, NzNoAnimationModule],
                entryComponents: [NzToolTipComponent]
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

export { NzToolTipComponent, NzToolTipModule, NzTooltipBaseComponent, NzTooltipBaseDirective, NzTooltipDirective, isTooltipEmpty };
//# sourceMappingURL=ng-zorro-antd-tooltip.js.map

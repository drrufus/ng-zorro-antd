import { OverlayConfig, ConnectionPositionPair, Overlay, OverlayModule } from '@angular/cdk/overlay';
import { NgClass, NgStyle, NgTemplateOutlet, NgForOf, DOCUMENT, CommonModule } from '@angular/common';
import { ɵɵelementContainerStart, ɵɵtext, ɵɵelementContainerEnd, ɵɵnextContext, ɵɵadvance, ɵɵtextInterpolate, ɵɵdefineComponent, ɵɵelementHostAttrs, ɵɵprojectionDef, ɵɵelementStart, ɵɵtemplate, ɵɵelementEnd, ɵɵprojection, ɵɵproperty, ɵsetClassMetadata, Component, ChangeDetectionStrategy, ViewEncapsulation, Input, EventEmitter, ɵɵdirectiveInject, ChangeDetectorRef, ElementRef, ɵɵallocHostVars, ɵɵlistener, ɵɵattribute, ɵɵclassProp, Output, ɵɵtemplateRefExtractor, ɵɵreference, NgZone, ɵɵcontentQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵviewQuery, TemplateRef, Host, Optional, ContentChildren, ViewChildren, ViewChild, forwardRef, ViewContainerRef, ɵɵdefineDirective, ɵɵProvidersFeature, Directive, Inject, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { NzStringTemplateOutletDirective, scrollIntoView, InputBoolean, NzNoAnimationDirective, slideMotion, NzAddOnModule, NzNoAnimationModule } from 'ng-zorro-antd/core';
import { __decorate, __metadata, __spread } from 'tslib';
import { UP_ARROW, DOWN_ARROW, ESCAPE, TAB, ENTER } from '@angular/cdk/keycodes';
import { TemplatePortal } from '@angular/cdk/portal';
import { Subscription, defer, merge, fromEvent } from 'rxjs';
import { take, switchMap, filter, tap, delay, map, distinct } from 'rxjs/operators';

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var _c0 = ["role", "group", 1, "ant-select-dropdown-menu-item-group"];
function NzAutocompleteOptgroupComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r13 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r13.nzLabel);
} }
var _c1 = [[["nz-auto-option"]]];
var _c2 = ["nz-auto-option"];
var NzAutocompleteOptgroupComponent = /** @class */ (function () {
    function NzAutocompleteOptgroupComponent() {
    }
    /** @nocollapse */ NzAutocompleteOptgroupComponent.ɵfac = function NzAutocompleteOptgroupComponent_Factory(t) { return new (t || NzAutocompleteOptgroupComponent)(); };
    /** @nocollapse */ NzAutocompleteOptgroupComponent.ɵcmp = ɵɵdefineComponent({ type: NzAutocompleteOptgroupComponent, selectors: [["nz-auto-optgroup"]], hostBindings: function NzAutocompleteOptgroupComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            ɵɵelementHostAttrs(_c0);
        } }, inputs: { nzLabel: "nzLabel" }, exportAs: ["nzAutoOptgroup"], ngContentSelectors: _c2, decls: 4, vars: 1, consts: [[1, "ant-select-dropdown-menu-item-group-title"], [4, "nzStringTemplateOutlet"], [1, "ant-select-dropdown-menu-item-group-list"]], template: function NzAutocompleteOptgroupComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef(_c1);
            ɵɵelementStart(0, "div", 0);
            ɵɵtemplate(1, NzAutocompleteOptgroupComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
            ɵɵelementEnd();
            ɵɵelementStart(2, "ul", 2);
            ɵɵprojection(3);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(1);
            ɵɵproperty("nzStringTemplateOutlet", ctx.nzLabel);
        } }, directives: [NzStringTemplateOutletDirective], encapsulation: 2, changeDetection: 0 });
    return NzAutocompleteOptgroupComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzAutocompleteOptgroupComponent, [{
        type: Component,
        args: [{
                selector: 'nz-auto-optgroup',
                exportAs: 'nzAutoOptgroup',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                templateUrl: './nz-autocomplete-optgroup.component.html',
                host: {
                    role: 'group',
                    class: 'ant-select-dropdown-menu-item-group'
                }
            }]
    }], function () { return []; }, { nzLabel: [{
            type: Input
        }] }); })();

var _c0$1 = ["role", "menuitem", 1, "ant-select-dropdown-menu-item"];
var _c1$1 = ["*"];
var NzOptionSelectionChange = /** @class */ (function () {
    function NzOptionSelectionChange(source, isUserInput) {
        if (isUserInput === void 0) { isUserInput = false; }
        this.source = source;
        this.isUserInput = isUserInput;
    }
    return NzOptionSelectionChange;
}());
var NzAutocompleteOptionComponent = /** @class */ (function () {
    function NzAutocompleteOptionComponent(changeDetectorRef, element) {
        this.changeDetectorRef = changeDetectorRef;
        this.element = element;
        this.nzDisabled = false;
        this.selectionChange = new EventEmitter();
        this.active = false;
        this.selected = false;
    }
    NzAutocompleteOptionComponent.prototype.select = function (emit) {
        if (emit === void 0) { emit = true; }
        this.selected = true;
        this.changeDetectorRef.markForCheck();
        if (emit) {
            this.emitSelectionChangeEvent();
        }
    };
    NzAutocompleteOptionComponent.prototype.deselect = function () {
        this.selected = false;
        this.changeDetectorRef.markForCheck();
        this.emitSelectionChangeEvent();
    };
    /** Git display label */
    NzAutocompleteOptionComponent.prototype.getLabel = function () {
        return this.nzLabel || this.nzValue.toString();
    };
    /** Set active (only styles) */
    NzAutocompleteOptionComponent.prototype.setActiveStyles = function () {
        if (!this.active) {
            this.active = true;
            this.changeDetectorRef.markForCheck();
        }
    };
    /** Unset active (only styles) */
    NzAutocompleteOptionComponent.prototype.setInactiveStyles = function () {
        if (this.active) {
            this.active = false;
            this.changeDetectorRef.markForCheck();
        }
    };
    NzAutocompleteOptionComponent.prototype.scrollIntoViewIfNeeded = function () {
        scrollIntoView(this.element.nativeElement);
    };
    NzAutocompleteOptionComponent.prototype.selectViaInteraction = function () {
        if (!this.nzDisabled) {
            this.selected = !this.selected;
            if (this.selected) {
                this.setActiveStyles();
            }
            else {
                this.setInactiveStyles();
            }
            this.emitSelectionChangeEvent(true);
            this.changeDetectorRef.markForCheck();
        }
    };
    NzAutocompleteOptionComponent.prototype.emitSelectionChangeEvent = function (isUserInput) {
        if (isUserInput === void 0) { isUserInput = false; }
        this.selectionChange.emit(new NzOptionSelectionChange(this, isUserInput));
    };
    /** @nocollapse */ NzAutocompleteOptionComponent.ɵfac = function NzAutocompleteOptionComponent_Factory(t) { return new (t || NzAutocompleteOptionComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef)); };
    /** @nocollapse */ NzAutocompleteOptionComponent.ɵcmp = ɵɵdefineComponent({ type: NzAutocompleteOptionComponent, selectors: [["nz-auto-option"]], hostBindings: function NzAutocompleteOptionComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            ɵɵallocHostVars(5);
            ɵɵlistener("click", function NzAutocompleteOptionComponent_click_HostBindingHandler($event) { return ctx.selectViaInteraction(); })("mousedown", function NzAutocompleteOptionComponent_mousedown_HostBindingHandler($event) { return $event.preventDefault(); });
            ɵɵelementHostAttrs(_c0$1);
        } if (rf & 2) {
            ɵɵattribute("aria-selected", ctx.selected.toString())("aria-disabled", ctx.nzDisabled.toString());
            ɵɵclassProp("ant-select-dropdown-menu-item-selected", ctx.selected)("ant-select-dropdown-menu-item-active", ctx.active)("ant-select-dropdown-menu-item-disabled", ctx.nzDisabled);
        } }, inputs: { nzValue: "nzValue", nzLabel: "nzLabel", nzDisabled: "nzDisabled" }, outputs: { selectionChange: "selectionChange" }, exportAs: ["nzAutoOption"], ngContentSelectors: _c1$1, decls: 1, vars: 0, template: function NzAutocompleteOptionComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzAutocompleteOptionComponent.prototype, "nzDisabled", void 0);
    return NzAutocompleteOptionComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzAutocompleteOptionComponent, [{
        type: Component,
        args: [{
                selector: 'nz-auto-option',
                exportAs: 'nzAutoOption',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                templateUrl: './nz-autocomplete-option.component.html',
                host: {
                    role: 'menuitem',
                    class: 'ant-select-dropdown-menu-item',
                    '[class.ant-select-dropdown-menu-item-selected]': 'selected',
                    '[class.ant-select-dropdown-menu-item-active]': 'active',
                    '[class.ant-select-dropdown-menu-item-disabled]': 'nzDisabled',
                    '[attr.aria-selected]': 'selected.toString()',
                    '[attr.aria-disabled]': 'nzDisabled.toString()',
                    '(click)': 'selectViaInteraction()',
                    '(mousedown)': '$event.preventDefault()'
                }
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }]; }, { nzValue: [{
            type: Input
        }], nzLabel: [{
            type: Input
        }], nzDisabled: [{
            type: Input
        }], selectionChange: [{
            type: Output
        }] }); })();

var _c0$2 = ["panel"];
var _c1$2 = ["content"];
function NzAutocompleteComponent_ng_template_0_4_ng_template_0_Template(rf, ctx) { }
function NzAutocompleteComponent_ng_template_0_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, NzAutocompleteComponent_ng_template_0_4_ng_template_0_Template, 0, 0, "ng-template");
} }
function NzAutocompleteComponent_ng_template_0_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵprojection(0);
} }
function NzAutocompleteComponent_ng_template_0_ng_template_7_nz_auto_option_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "nz-auto-option", 8);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var option_r23 = ctx.$implicit;
    ɵɵproperty("nzValue", option_r23);
    ɵɵadvance(1);
    ɵɵtextInterpolate(option_r23);
} }
function NzAutocompleteComponent_ng_template_0_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, NzAutocompleteComponent_ng_template_0_ng_template_7_nz_auto_option_0_Template, 2, 2, "nz-auto-option", 7);
} if (rf & 2) {
    var ctx_r20 = ɵɵnextContext(2);
    ɵɵproperty("ngForOf", ctx_r20.nzDataSource);
} }
function NzAutocompleteComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 0, 1);
    ɵɵelementStart(2, "div", 2);
    ɵɵelementStart(3, "ul", 3);
    ɵɵtemplate(4, NzAutocompleteComponent_ng_template_0_4_Template, 1, 0, undefined, 4);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(5, NzAutocompleteComponent_ng_template_0_ng_template_5_Template, 1, 0, "ng-template", null, 5, ɵɵtemplateRefExtractor);
    ɵɵtemplate(7, NzAutocompleteComponent_ng_template_0_ng_template_7_Template, 1, 1, "ng-template", null, 6, ɵɵtemplateRefExtractor);
} if (rf & 2) {
    var _r17 = ɵɵreference(6);
    var _r19 = ɵɵreference(8);
    var ctx_r14 = ɵɵnextContext();
    ɵɵclassProp("ant-select-dropdown-hidden", !ctx_r14.showPanel);
    ɵɵproperty("@.disabled", ctx_r14.noAnimation == null ? null : ctx_r14.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r14.noAnimation == null ? null : ctx_r14.noAnimation.nzNoAnimation)("@slideMotion", ctx_r14.dropDownPosition)("ngClass", ctx_r14.nzOverlayClassName)("ngStyle", ctx_r14.nzOverlayStyle);
    ɵɵadvance(4);
    ɵɵproperty("ngTemplateOutlet", ctx_r14.nzDataSource ? _r19 : _r17);
} }
var _c2$1 = ["*"];
var NzAutocompleteComponent = /** @class */ (function () {
    function NzAutocompleteComponent(changeDetectorRef, ngZone, noAnimation) {
        var _this = this;
        this.changeDetectorRef = changeDetectorRef;
        this.ngZone = ngZone;
        this.noAnimation = noAnimation;
        this.nzOverlayClassName = '';
        this.nzOverlayStyle = {};
        this.nzDefaultActiveFirstOption = true;
        this.nzBackfill = false;
        this.compareWith = function (o1, o2) { return o1 === o2; };
        this.selectionChange = new EventEmitter();
        this.showPanel = true;
        this.isOpen = false;
        this.dropDownPosition = 'bottom';
        this.activeItemIndex = -1;
        this.selectionChangeSubscription = Subscription.EMPTY;
        this.dataSourceChangeSubscription = Subscription.EMPTY;
        /** Options changes listener */
        this.optionSelectionChanges = defer(function () {
            if (_this.options) {
                return merge.apply(void 0, __spread(_this.options.map(function (option) { return option.selectionChange; })));
            }
            return _this.ngZone.onStable.asObservable().pipe(take(1), switchMap(function () { return _this.optionSelectionChanges; }));
        });
    }
    Object.defineProperty(NzAutocompleteComponent.prototype, "options", {
        /**
         * Options accessor, its source may be content or dataSource
         */
        get: function () {
            // first dataSource
            if (this.nzDataSource) {
                return this.fromDataSourceOptions;
            }
            else {
                return this.fromContentOptions;
            }
        },
        enumerable: true,
        configurable: true
    });
    NzAutocompleteComponent.prototype.ngAfterContentInit = function () {
        if (!this.nzDataSource) {
            this.optionsInit();
        }
    };
    NzAutocompleteComponent.prototype.ngAfterViewInit = function () {
        if (this.nzDataSource) {
            this.optionsInit();
        }
    };
    NzAutocompleteComponent.prototype.ngOnDestroy = function () {
        this.dataSourceChangeSubscription.unsubscribe();
        this.selectionChangeSubscription.unsubscribe();
    };
    NzAutocompleteComponent.prototype.setVisibility = function () {
        this.showPanel = !!this.options.length;
        this.changeDetectorRef.markForCheck();
    };
    NzAutocompleteComponent.prototype.setActiveItem = function (index) {
        var activeItem = this.options.toArray()[index];
        if (activeItem && !activeItem.active) {
            this.activeItem = activeItem;
            this.activeItemIndex = index;
            this.clearSelectedOptions(this.activeItem);
            this.activeItem.setActiveStyles();
            this.changeDetectorRef.markForCheck();
        }
    };
    NzAutocompleteComponent.prototype.setNextItemActive = function () {
        var nextIndex = this.activeItemIndex + 1 <= this.options.length - 1 ? this.activeItemIndex + 1 : 0;
        this.setActiveItem(nextIndex);
    };
    NzAutocompleteComponent.prototype.setPreviousItemActive = function () {
        var previousIndex = this.activeItemIndex - 1 < 0 ? this.options.length - 1 : this.activeItemIndex - 1;
        this.setActiveItem(previousIndex);
    };
    // tslint:disable-next-line:no-any
    NzAutocompleteComponent.prototype.getOptionIndex = function (value) {
        var _this = this;
        return this.options.reduce(function (result, current, index) {
            return result === -1 ? (_this.compareWith(value, current.nzValue) ? index : -1) : result;
        }, -1);
    };
    NzAutocompleteComponent.prototype.updatePosition = function (position) {
        this.dropDownPosition = position;
        this.changeDetectorRef.markForCheck();
    };
    NzAutocompleteComponent.prototype.optionsInit = function () {
        var _this = this;
        this.setVisibility();
        this.subscribeOptionChanges();
        var changes = this.nzDataSource ? this.fromDataSourceOptions.changes : this.fromContentOptions.changes;
        // async
        this.dataSourceChangeSubscription = changes.subscribe(function (e) {
            if (!e.dirty && _this.isOpen) {
                setTimeout(function () { return _this.setVisibility(); });
            }
            _this.subscribeOptionChanges();
        });
    };
    /**
     * Clear the status of options
     */
    NzAutocompleteComponent.prototype.clearSelectedOptions = function (skip, deselect) {
        if (deselect === void 0) { deselect = false; }
        this.options.forEach(function (option) {
            if (option !== skip) {
                if (deselect) {
                    option.deselect();
                }
                option.setInactiveStyles();
            }
        });
    };
    NzAutocompleteComponent.prototype.subscribeOptionChanges = function () {
        var _this = this;
        this.selectionChangeSubscription.unsubscribe();
        this.selectionChangeSubscription = this.optionSelectionChanges
            .pipe(filter(function (event) { return event.isUserInput; }))
            .subscribe(function (event) {
            event.source.select();
            event.source.setActiveStyles();
            _this.activeItem = event.source;
            _this.activeItemIndex = _this.getOptionIndex(_this.activeItem.nzValue);
            _this.clearSelectedOptions(event.source, true);
            _this.selectionChange.emit(event.source);
        });
    };
    /** @nocollapse */ NzAutocompleteComponent.ɵfac = function NzAutocompleteComponent_Factory(t) { return new (t || NzAutocompleteComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(NzNoAnimationDirective, 9)); };
    /** @nocollapse */ NzAutocompleteComponent.ɵcmp = ɵɵdefineComponent({ type: NzAutocompleteComponent, selectors: [["nz-autocomplete"]], contentQueries: function NzAutocompleteComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            ɵɵcontentQuery(dirIndex, NzAutocompleteOptionComponent, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.fromContentOptions = _t);
        } }, viewQuery: function NzAutocompleteComponent_Query(rf, ctx) { if (rf & 1) {
            ɵɵviewQuery(TemplateRef, true);
            ɵɵviewQuery(_c0$2, true);
            ɵɵviewQuery(_c1$2, true);
            ɵɵviewQuery(NzAutocompleteOptionComponent, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.template = _t.first);
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.panel = _t.first);
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.content = _t.first);
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.fromDataSourceOptions = _t);
        } }, inputs: { nzWidth: "nzWidth", nzOverlayClassName: "nzOverlayClassName", nzOverlayStyle: "nzOverlayStyle", nzDefaultActiveFirstOption: "nzDefaultActiveFirstOption", nzBackfill: "nzBackfill", compareWith: "compareWith", nzDataSource: "nzDataSource" }, outputs: { selectionChange: "selectionChange" }, exportAs: ["nzAutocomplete"], ngContentSelectors: _c2$1, decls: 1, vars: 0, consts: [[1, "ant-select-dropdown", "ant-select-dropdown--single", "ant-select-dropdown-placement-bottomLeft", 3, "nzNoAnimation", "ngClass", "ngStyle"], ["panel", ""], [2, "overflow", "auto"], ["role", "menu", "aria-activedescendant", "", 1, "ant-select-dropdown-menu", "ant-select-dropdown-menu-root", "ant-select-dropdown-menu-vertical"], [4, "ngTemplateOutlet"], ["contentTemplate", ""], ["optionsTemplate", ""], [3, "nzValue", 4, "ngFor", "ngForOf"], [3, "nzValue"]], template: function NzAutocompleteComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵtemplate(0, NzAutocompleteComponent_ng_template_0_Template, 9, 7, "ng-template");
        } }, directives: [NzNoAnimationDirective, NgClass, NgStyle, NgTemplateOutlet, NgForOf, NzAutocompleteOptionComponent], styles: ["\n      .ant-select-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "], encapsulation: 2, data: { animation: [slideMotion] }, changeDetection: 0 });
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzAutocompleteComponent.prototype, "nzDefaultActiveFirstOption", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzAutocompleteComponent.prototype, "nzBackfill", void 0);
    return NzAutocompleteComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzAutocompleteComponent, [{
        type: Component,
        args: [{
                selector: 'nz-autocomplete',
                exportAs: 'nzAutocomplete',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                templateUrl: './nz-autocomplete.component.html',
                animations: [slideMotion],
                styles: [
                    "\n      .ant-select-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "
                ]
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: NgZone }, { type: NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, { nzWidth: [{
            type: Input
        }], nzOverlayClassName: [{
            type: Input
        }], nzOverlayStyle: [{
            type: Input
        }], nzDefaultActiveFirstOption: [{
            type: Input
        }], nzBackfill: [{
            type: Input
        }], compareWith: [{
            type: Input
        }], nzDataSource: [{
            type: Input
        }], selectionChange: [{
            type: Output
        }], fromContentOptions: [{
            type: ContentChildren,
            args: [NzAutocompleteOptionComponent, { descendants: true }]
        }], fromDataSourceOptions: [{
            type: ViewChildren,
            args: [NzAutocompleteOptionComponent]
        }], template: [{
            type: ViewChild,
            args: [TemplateRef, { static: false }]
        }], panel: [{
            type: ViewChild,
            args: ['panel', { static: false }]
        }], content: [{
            type: ViewChild,
            args: ['content', { static: false }]
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var _c0$3 = ["autocomplete", "off", "aria-autocomplete", "list"];
var NZ_AUTOCOMPLETE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return NzAutocompleteTriggerDirective; }),
    multi: true
};
function getNzAutocompleteMissingPanelError() {
    return Error('Attempting to open an undefined instance of `nz-autocomplete`. ' +
        'Make sure that the id passed to the `nzAutocomplete` is correct and that ' +
        "you're attempting to open it after the ngAfterContentInit hook.");
}
var NzAutocompleteTriggerDirective = /** @class */ (function () {
    function NzAutocompleteTriggerDirective(elementRef, overlay, viewContainerRef, ngZone, 
    // tslint:disable-next-line:no-any
    document) {
        this.elementRef = elementRef;
        this.overlay = overlay;
        this.viewContainerRef = viewContainerRef;
        this.ngZone = ngZone;
        this.document = document;
        // tslint:disable-next-line:no-any
        this._onChange = function () { };
        this._onTouched = function () { };
        this.panelOpen = false;
    }
    Object.defineProperty(NzAutocompleteTriggerDirective.prototype, "activeOption", {
        /** Current active option */
        get: function () {
            if (this.nzAutocomplete && this.nzAutocomplete.options.length) {
                return this.nzAutocomplete.activeItem;
            }
        },
        enumerable: true,
        configurable: true
    });
    NzAutocompleteTriggerDirective.prototype.ngOnDestroy = function () {
        this.destroyPanel();
    };
    // tslint:disable-next-line:no-any
    NzAutocompleteTriggerDirective.prototype.writeValue = function (value) {
        this.setTriggerValue(value);
    };
    NzAutocompleteTriggerDirective.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    NzAutocompleteTriggerDirective.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    NzAutocompleteTriggerDirective.prototype.setDisabledState = function (isDisabled) {
        var element = this.elementRef.nativeElement;
        element.disabled = isDisabled;
        this.closePanel();
    };
    NzAutocompleteTriggerDirective.prototype.openPanel = function () {
        this.previousValue = this.elementRef.nativeElement.value;
        this.attachOverlay();
        this.updateStatus();
    };
    NzAutocompleteTriggerDirective.prototype.closePanel = function () {
        if (this.panelOpen) {
            this.nzAutocomplete.isOpen = this.panelOpen = false;
            if (this.overlayRef && this.overlayRef.hasAttached()) {
                this.selectionChangeSubscription.unsubscribe();
                this.overlayBackdropClickSubscription.unsubscribe();
                this.overlayPositionChangeSubscription.unsubscribe();
                this.optionsChangeSubscription.unsubscribe();
                this.overlayRef.detach();
                this.overlayRef = null;
                this.portal = null;
            }
        }
    };
    NzAutocompleteTriggerDirective.prototype.handleKeydown = function (event) {
        var keyCode = event.keyCode;
        var isArrowKey = keyCode === UP_ARROW || keyCode === DOWN_ARROW;
        if (keyCode === ESCAPE) {
            event.preventDefault();
        }
        if (this.panelOpen && (keyCode === ESCAPE || keyCode === TAB)) {
            // Reset value when tab / ESC close
            if (this.activeOption && this.activeOption.getLabel() !== this.previousValue) {
                this.setTriggerValue(this.previousValue);
            }
            this.closePanel();
        }
        else if (this.panelOpen && keyCode === ENTER) {
            if (this.nzAutocomplete.showPanel && this.activeOption) {
                event.preventDefault();
                this.activeOption.selectViaInteraction();
            }
        }
        else if (this.panelOpen && isArrowKey && this.nzAutocomplete.showPanel) {
            event.stopPropagation();
            event.preventDefault();
            if (keyCode === UP_ARROW) {
                this.nzAutocomplete.setPreviousItemActive();
            }
            else {
                this.nzAutocomplete.setNextItemActive();
            }
            if (this.activeOption) {
                this.activeOption.scrollIntoViewIfNeeded();
            }
            this.doBackfill();
        }
    };
    NzAutocompleteTriggerDirective.prototype.handleInput = function (event) {
        var target = event.target;
        var document = this.document;
        var value = target.value;
        if (target.type === 'number') {
            value = value === '' ? null : parseFloat(value);
        }
        if (this.previousValue !== value) {
            this.previousValue = value;
            this._onChange(value);
            if (this.canOpen() && document.activeElement === event.target) {
                this.openPanel();
            }
        }
    };
    NzAutocompleteTriggerDirective.prototype.handleFocus = function () {
        if (this.canOpen()) {
            this.openPanel();
        }
    };
    NzAutocompleteTriggerDirective.prototype.handleBlur = function () {
        this.closePanel();
        this._onTouched();
    };
    /**
     * Subscription data source changes event
     */
    NzAutocompleteTriggerDirective.prototype.subscribeOptionsChange = function () {
        var _this = this;
        var firstStable = this.ngZone.onStable.asObservable().pipe(take(1));
        var optionChanges = this.nzAutocomplete.options.changes.pipe(tap(function () { return _this.positionStrategy.reapplyLastPosition(); }), delay(0));
        return merge(firstStable, optionChanges).subscribe(function () {
            _this.resetActiveItem();
            if (_this.panelOpen) {
                _this.overlayRef.updatePosition();
            }
        });
    };
    /**
     * Subscription option changes event and set the value
     */
    NzAutocompleteTriggerDirective.prototype.subscribeSelectionChange = function () {
        var _this = this;
        return this.nzAutocomplete.selectionChange.subscribe(function (option) {
            _this.setValueAndClose(option);
        });
    };
    /**
     * Subscription external click and close panel
     */
    NzAutocompleteTriggerDirective.prototype.subscribeOverlayBackdropClick = function () {
        var _this = this;
        return merge(fromEvent(this.document, 'click'), fromEvent(this.document, 'touchend')).subscribe(function (event) {
            var clickTarget = event.target;
            // Make sure is not self
            if (clickTarget !== _this.elementRef.nativeElement && !_this.overlayRef.overlayElement.contains(clickTarget) && _this.panelOpen) {
                _this.closePanel();
            }
        });
    };
    /**
     * Subscription overlay position changes and reset dropdown position
     */
    NzAutocompleteTriggerDirective.prototype.subscribeOverlayPositionChange = function () {
        var _this = this;
        return this.positionStrategy.positionChanges
            .pipe(map(function (position) { return position.connectionPair.originY; }), distinct(), delay(0))
            .subscribe(function (position) {
            _this.nzAutocomplete.updatePosition(position);
        });
    };
    NzAutocompleteTriggerDirective.prototype.attachOverlay = function () {
        if (!this.nzAutocomplete) {
            throw getNzAutocompleteMissingPanelError();
        }
        if (!this.portal) {
            this.portal = new TemplatePortal(this.nzAutocomplete.template, this.viewContainerRef);
        }
        if (!this.overlayRef) {
            this.overlayRef = this.overlay.create(this.getOverlayConfig());
        }
        if (this.overlayRef && !this.overlayRef.hasAttached()) {
            this.overlayRef.attach(this.portal);
            this.overlayPositionChangeSubscription = this.subscribeOverlayPositionChange();
            this.selectionChangeSubscription = this.subscribeSelectionChange();
            this.overlayBackdropClickSubscription = this.subscribeOverlayBackdropClick();
            this.optionsChangeSubscription = this.subscribeOptionsChange();
        }
        this.nzAutocomplete.isOpen = this.panelOpen = true;
    };
    NzAutocompleteTriggerDirective.prototype.updateStatus = function () {
        if (this.overlayRef) {
            this.overlayRef.updateSize({ width: this.nzAutocomplete.nzWidth || this.getHostWidth() });
        }
        this.nzAutocomplete.setVisibility();
        this.resetActiveItem();
        if (this.activeOption) {
            this.activeOption.scrollIntoViewIfNeeded();
        }
    };
    NzAutocompleteTriggerDirective.prototype.destroyPanel = function () {
        if (this.overlayRef) {
            this.closePanel();
        }
    };
    NzAutocompleteTriggerDirective.prototype.getOverlayConfig = function () {
        return new OverlayConfig({
            positionStrategy: this.getOverlayPosition(),
            scrollStrategy: this.overlay.scrollStrategies.reposition(),
            // default host element width
            width: this.nzAutocomplete.nzWidth || this.getHostWidth()
        });
    };
    NzAutocompleteTriggerDirective.prototype.getConnectedElement = function () {
        return this.elementRef;
    };
    NzAutocompleteTriggerDirective.prototype.getHostWidth = function () {
        return this.getConnectedElement().nativeElement.getBoundingClientRect().width;
    };
    NzAutocompleteTriggerDirective.prototype.getOverlayPosition = function () {
        var positions = [
            new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' })
        ];
        this.positionStrategy = this.overlay
            .position()
            .flexibleConnectedTo(this.getConnectedElement())
            .withFlexibleDimensions(false)
            .withPush(false)
            .withPositions(positions);
        return this.positionStrategy;
    };
    NzAutocompleteTriggerDirective.prototype.resetActiveItem = function () {
        var index = this.nzAutocomplete.getOptionIndex(this.previousValue);
        this.nzAutocomplete.clearSelectedOptions(null, true);
        if (index !== -1) {
            this.nzAutocomplete.setActiveItem(index);
            this.nzAutocomplete.activeItem.select(false);
        }
        else {
            this.nzAutocomplete.setActiveItem(this.nzAutocomplete.nzDefaultActiveFirstOption ? 0 : -1);
        }
    };
    NzAutocompleteTriggerDirective.prototype.setValueAndClose = function (option) {
        var value = option.nzValue;
        this.setTriggerValue(option.getLabel());
        this._onChange(value);
        this.elementRef.nativeElement.focus();
        this.closePanel();
    };
    NzAutocompleteTriggerDirective.prototype.setTriggerValue = function (value) {
        this.elementRef.nativeElement.value = value || '';
        if (!this.nzAutocomplete.nzBackfill) {
            this.previousValue = value;
        }
    };
    NzAutocompleteTriggerDirective.prototype.doBackfill = function () {
        if (this.nzAutocomplete.nzBackfill && this.nzAutocomplete.activeItem) {
            this.setTriggerValue(this.nzAutocomplete.activeItem.getLabel());
        }
    };
    NzAutocompleteTriggerDirective.prototype.canOpen = function () {
        var element = this.elementRef.nativeElement;
        return !element.readOnly && !element.disabled;
    };
    /** @nocollapse */ NzAutocompleteTriggerDirective.ɵfac = function NzAutocompleteTriggerDirective_Factory(t) { return new (t || NzAutocompleteTriggerDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Overlay), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(DOCUMENT, 8)); };
    /** @nocollapse */ NzAutocompleteTriggerDirective.ɵdir = ɵɵdefineDirective({ type: NzAutocompleteTriggerDirective, selectors: [["input", "nzAutocomplete", ""], ["textarea", "nzAutocomplete", ""]], hostBindings: function NzAutocompleteTriggerDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            ɵɵlistener("focusin", function NzAutocompleteTriggerDirective_focusin_HostBindingHandler($event) { return ctx.handleFocus(); })("blur", function NzAutocompleteTriggerDirective_blur_HostBindingHandler($event) { return ctx.handleBlur(); })("input", function NzAutocompleteTriggerDirective_input_HostBindingHandler($event) { return ctx.handleInput($event); })("keydown", function NzAutocompleteTriggerDirective_keydown_HostBindingHandler($event) { return ctx.handleKeydown($event); });
            ɵɵelementHostAttrs(_c0$3);
        } }, inputs: { nzAutocomplete: "nzAutocomplete" }, exportAs: ["nzAutocompleteTrigger"], features: [ɵɵProvidersFeature([NZ_AUTOCOMPLETE_VALUE_ACCESSOR])] });
    return NzAutocompleteTriggerDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzAutocompleteTriggerDirective, [{
        type: Directive,
        args: [{
                selector: "input[nzAutocomplete], textarea[nzAutocomplete]",
                exportAs: 'nzAutocompleteTrigger',
                providers: [NZ_AUTOCOMPLETE_VALUE_ACCESSOR],
                host: {
                    autocomplete: 'off',
                    'aria-autocomplete': 'list',
                    '(focusin)': 'handleFocus()',
                    '(blur)': 'handleBlur()',
                    '(input)': 'handleInput($event)',
                    '(keydown)': 'handleKeydown($event)'
                }
            }]
    }], function () { return [{ type: ElementRef }, { type: Overlay }, { type: ViewContainerRef }, { type: NgZone }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, { nzAutocomplete: [{
            type: Input
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzAutocompleteModule = /** @class */ (function () {
    function NzAutocompleteModule() {
    }
    /** @nocollapse */ NzAutocompleteModule.ɵmod = ɵɵdefineNgModule({ type: NzAutocompleteModule });
    /** @nocollapse */ NzAutocompleteModule.ɵinj = ɵɵdefineInjector({ factory: function NzAutocompleteModule_Factory(t) { return new (t || NzAutocompleteModule)(); }, imports: [[CommonModule, OverlayModule, FormsModule, NzAddOnModule, NzNoAnimationModule]] });
    return NzAutocompleteModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzAutocompleteModule, { declarations: [NzAutocompleteComponent, NzAutocompleteOptionComponent, NzAutocompleteTriggerDirective, NzAutocompleteOptgroupComponent], imports: [CommonModule, OverlayModule, FormsModule, NzAddOnModule, NzNoAnimationModule], exports: [NzAutocompleteComponent, NzAutocompleteOptionComponent, NzAutocompleteTriggerDirective, NzAutocompleteOptgroupComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzAutocompleteModule, [{
        type: NgModule,
        args: [{
                declarations: [NzAutocompleteComponent, NzAutocompleteOptionComponent, NzAutocompleteTriggerDirective, NzAutocompleteOptgroupComponent],
                exports: [NzAutocompleteComponent, NzAutocompleteOptionComponent, NzAutocompleteTriggerDirective, NzAutocompleteOptgroupComponent],
                imports: [CommonModule, OverlayModule, FormsModule, NzAddOnModule, NzNoAnimationModule]
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

export { NZ_AUTOCOMPLETE_VALUE_ACCESSOR, NzAutocompleteComponent, NzAutocompleteModule, NzAutocompleteOptgroupComponent, NzAutocompleteOptionComponent, NzAutocompleteTriggerDirective, NzOptionSelectionChange, getNzAutocompleteMissingPanelError };
//# sourceMappingURL=ng-zorro-antd-auto-complete.js.map

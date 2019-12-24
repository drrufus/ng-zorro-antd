import { OverlayConfig, ConnectionPositionPair, Overlay, OverlayModule } from '@angular/cdk/overlay';
import { NgClass, NgStyle, NgTemplateOutlet, NgForOf, DOCUMENT, CommonModule } from '@angular/common';
import { ɵɵelementContainerStart, ɵɵtext, ɵɵelementContainerEnd, ɵɵnextContext, ɵɵadvance, ɵɵtextInterpolate, ɵɵdefineComponent, ɵɵelementHostAttrs, ɵɵprojectionDef, ɵɵelementStart, ɵɵtemplate, ɵɵelementEnd, ɵɵprojection, ɵɵproperty, ɵsetClassMetadata, Component, ChangeDetectionStrategy, ViewEncapsulation, Input, EventEmitter, ɵɵdirectiveInject, ChangeDetectorRef, ElementRef, ɵɵallocHostVars, ɵɵlistener, ɵɵattribute, ɵɵclassProp, Output, ɵɵtemplateRefExtractor, ɵɵreference, NgZone, ɵɵcontentQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵviewQuery, TemplateRef, Host, Optional, ContentChildren, ViewChildren, ViewChild, forwardRef, ViewContainerRef, ɵɵdefineDirective, ɵɵProvidersFeature, Directive, Inject, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { NzStringTemplateOutletDirective, scrollIntoView, InputBoolean, NzNoAnimationDirective, slideMotion, NzAddOnModule, NzNoAnimationModule } from 'ng-zorro-antd/core';
import { __decorate, __metadata } from 'tslib';
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
const _c0 = ["role", "group", 1, "ant-select-dropdown-menu-item-group"];
function NzAutocompleteOptgroupComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r2.nzLabel);
} }
const _c1 = [[["nz-auto-option"]]];
const _c2 = ["nz-auto-option"];
class NzAutocompleteOptgroupComponent {
    constructor() {
    }
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

const _c0$1 = ["role", "menuitem", 1, "ant-select-dropdown-menu-item"];
const _c1$1 = ["*"];
class NzOptionSelectionChange {
    constructor(source, isUserInput = false) {
        this.source = source;
        this.isUserInput = isUserInput;
    }
}
class NzAutocompleteOptionComponent {
    constructor(changeDetectorRef, element) {
        this.changeDetectorRef = changeDetectorRef;
        this.element = element;
        this.nzDisabled = false;
        this.selectionChange = new EventEmitter();
        this.active = false;
        this.selected = false;
    }
    select(emit = true) {
        this.selected = true;
        this.changeDetectorRef.markForCheck();
        if (emit) {
            this.emitSelectionChangeEvent();
        }
    }
    deselect() {
        this.selected = false;
        this.changeDetectorRef.markForCheck();
        this.emitSelectionChangeEvent();
    }
    /** Git display label */
    getLabel() {
        return this.nzLabel || this.nzValue.toString();
    }
    /** Set active (only styles) */
    setActiveStyles() {
        if (!this.active) {
            this.active = true;
            this.changeDetectorRef.markForCheck();
        }
    }
    /** Unset active (only styles) */
    setInactiveStyles() {
        if (this.active) {
            this.active = false;
            this.changeDetectorRef.markForCheck();
        }
    }
    scrollIntoViewIfNeeded() {
        scrollIntoView(this.element.nativeElement);
    }
    selectViaInteraction() {
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
    }
    emitSelectionChangeEvent(isUserInput = false) {
        this.selectionChange.emit(new NzOptionSelectionChange(this, isUserInput));
    }
}
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

const _c0$2 = ["panel"];
const _c1$2 = ["content"];
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
    const option_r12 = ctx.$implicit;
    ɵɵproperty("nzValue", option_r12);
    ɵɵadvance(1);
    ɵɵtextInterpolate(option_r12);
} }
function NzAutocompleteComponent_ng_template_0_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, NzAutocompleteComponent_ng_template_0_ng_template_7_nz_auto_option_0_Template, 2, 2, "nz-auto-option", 7);
} if (rf & 2) {
    const ctx_r9 = ɵɵnextContext(2);
    ɵɵproperty("ngForOf", ctx_r9.nzDataSource);
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
    const _r6 = ɵɵreference(6);
    const _r8 = ɵɵreference(8);
    const ctx_r3 = ɵɵnextContext();
    ɵɵclassProp("ant-select-dropdown-hidden", !ctx_r3.showPanel);
    ɵɵproperty("@.disabled", ctx_r3.noAnimation == null ? null : ctx_r3.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r3.noAnimation == null ? null : ctx_r3.noAnimation.nzNoAnimation)("@slideMotion", ctx_r3.dropDownPosition)("ngClass", ctx_r3.nzOverlayClassName)("ngStyle", ctx_r3.nzOverlayStyle);
    ɵɵadvance(4);
    ɵɵproperty("ngTemplateOutlet", ctx_r3.nzDataSource ? _r8 : _r6);
} }
const _c2$1 = ["*"];
class NzAutocompleteComponent {
    constructor(changeDetectorRef, ngZone, noAnimation) {
        this.changeDetectorRef = changeDetectorRef;
        this.ngZone = ngZone;
        this.noAnimation = noAnimation;
        this.nzOverlayClassName = '';
        this.nzOverlayStyle = {};
        this.nzDefaultActiveFirstOption = true;
        this.nzBackfill = false;
        this.compareWith = (o1, o2) => o1 === o2;
        this.selectionChange = new EventEmitter();
        this.showPanel = true;
        this.isOpen = false;
        this.dropDownPosition = 'bottom';
        this.activeItemIndex = -1;
        this.selectionChangeSubscription = Subscription.EMPTY;
        this.dataSourceChangeSubscription = Subscription.EMPTY;
        /** Options changes listener */
        this.optionSelectionChanges = defer(() => {
            if (this.options) {
                return merge(...this.options.map(option => option.selectionChange));
            }
            return this.ngZone.onStable.asObservable().pipe(take(1), switchMap(() => this.optionSelectionChanges));
        });
    }
    /**
     * Options accessor, its source may be content or dataSource
     */
    get options() {
        // first dataSource
        if (this.nzDataSource) {
            return this.fromDataSourceOptions;
        }
        else {
            return this.fromContentOptions;
        }
    }
    ngAfterContentInit() {
        if (!this.nzDataSource) {
            this.optionsInit();
        }
    }
    ngAfterViewInit() {
        if (this.nzDataSource) {
            this.optionsInit();
        }
    }
    ngOnDestroy() {
        this.dataSourceChangeSubscription.unsubscribe();
        this.selectionChangeSubscription.unsubscribe();
    }
    setVisibility() {
        this.showPanel = !!this.options.length;
        this.changeDetectorRef.markForCheck();
    }
    setActiveItem(index) {
        const activeItem = this.options.toArray()[index];
        if (activeItem && !activeItem.active) {
            this.activeItem = activeItem;
            this.activeItemIndex = index;
            this.clearSelectedOptions(this.activeItem);
            this.activeItem.setActiveStyles();
            this.changeDetectorRef.markForCheck();
        }
    }
    setNextItemActive() {
        const nextIndex = this.activeItemIndex + 1 <= this.options.length - 1 ? this.activeItemIndex + 1 : 0;
        this.setActiveItem(nextIndex);
    }
    setPreviousItemActive() {
        const previousIndex = this.activeItemIndex - 1 < 0 ? this.options.length - 1 : this.activeItemIndex - 1;
        this.setActiveItem(previousIndex);
    }
    // tslint:disable-next-line:no-any
    getOptionIndex(value) {
        return this.options.reduce((result, current, index) => {
            return result === -1 ? (this.compareWith(value, current.nzValue) ? index : -1) : result;
        }, -1);
    }
    updatePosition(position) {
        this.dropDownPosition = position;
        this.changeDetectorRef.markForCheck();
    }
    optionsInit() {
        this.setVisibility();
        this.subscribeOptionChanges();
        const changes = this.nzDataSource ? this.fromDataSourceOptions.changes : this.fromContentOptions.changes;
        // async
        this.dataSourceChangeSubscription = changes.subscribe(e => {
            if (!e.dirty && this.isOpen) {
                setTimeout(() => this.setVisibility());
            }
            this.subscribeOptionChanges();
        });
    }
    /**
     * Clear the status of options
     */
    clearSelectedOptions(skip, deselect = false) {
        this.options.forEach(option => {
            if (option !== skip) {
                if (deselect) {
                    option.deselect();
                }
                option.setInactiveStyles();
            }
        });
    }
    subscribeOptionChanges() {
        this.selectionChangeSubscription.unsubscribe();
        this.selectionChangeSubscription = this.optionSelectionChanges
            .pipe(filter((event) => event.isUserInput))
            .subscribe((event) => {
            event.source.select();
            event.source.setActiveStyles();
            this.activeItem = event.source;
            this.activeItemIndex = this.getOptionIndex(this.activeItem.nzValue);
            this.clearSelectedOptions(event.source, true);
            this.selectionChange.emit(event.source);
        });
    }
}
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
                    `
      .ant-select-dropdown {
        top: 100%;
        left: 0;
        position: relative;
        width: 100%;
        margin-top: 4px;
        margin-bottom: 4px;
      }
    `
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
const _c0$3 = ["autocomplete", "off", "aria-autocomplete", "list"];
const NZ_AUTOCOMPLETE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NzAutocompleteTriggerDirective),
    multi: true
};
function getNzAutocompleteMissingPanelError() {
    return Error('Attempting to open an undefined instance of `nz-autocomplete`. ' +
        'Make sure that the id passed to the `nzAutocomplete` is correct and that ' +
        "you're attempting to open it after the ngAfterContentInit hook.");
}
class NzAutocompleteTriggerDirective {
    constructor(elementRef, overlay, viewContainerRef, ngZone, 
    // tslint:disable-next-line:no-any
    document) {
        this.elementRef = elementRef;
        this.overlay = overlay;
        this.viewContainerRef = viewContainerRef;
        this.ngZone = ngZone;
        this.document = document;
        // tslint:disable-next-line:no-any
        this._onChange = () => { };
        this._onTouched = () => { };
        this.panelOpen = false;
    }
    /** Current active option */
    get activeOption() {
        if (this.nzAutocomplete && this.nzAutocomplete.options.length) {
            return this.nzAutocomplete.activeItem;
        }
    }
    ngOnDestroy() {
        this.destroyPanel();
    }
    // tslint:disable-next-line:no-any
    writeValue(value) {
        this.setTriggerValue(value);
    }
    registerOnChange(fn) {
        this._onChange = fn;
    }
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    setDisabledState(isDisabled) {
        const element = this.elementRef.nativeElement;
        element.disabled = isDisabled;
        this.closePanel();
    }
    openPanel() {
        this.previousValue = this.elementRef.nativeElement.value;
        this.attachOverlay();
        this.updateStatus();
    }
    closePanel() {
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
    }
    handleKeydown(event) {
        const keyCode = event.keyCode;
        const isArrowKey = keyCode === UP_ARROW || keyCode === DOWN_ARROW;
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
    }
    handleInput(event) {
        const target = event.target;
        const document = this.document;
        let value = target.value;
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
    }
    handleFocus() {
        if (this.canOpen()) {
            this.openPanel();
        }
    }
    handleBlur() {
        this.closePanel();
        this._onTouched();
    }
    /**
     * Subscription data source changes event
     */
    subscribeOptionsChange() {
        const firstStable = this.ngZone.onStable.asObservable().pipe(take(1));
        const optionChanges = this.nzAutocomplete.options.changes.pipe(tap(() => this.positionStrategy.reapplyLastPosition()), delay(0));
        return merge(firstStable, optionChanges).subscribe(() => {
            this.resetActiveItem();
            if (this.panelOpen) {
                this.overlayRef.updatePosition();
            }
        });
    }
    /**
     * Subscription option changes event and set the value
     */
    subscribeSelectionChange() {
        return this.nzAutocomplete.selectionChange.subscribe((option) => {
            this.setValueAndClose(option);
        });
    }
    /**
     * Subscription external click and close panel
     */
    subscribeOverlayBackdropClick() {
        return merge(fromEvent(this.document, 'click'), fromEvent(this.document, 'touchend')).subscribe((event) => {
            const clickTarget = event.target;
            // Make sure is not self
            if (clickTarget !== this.elementRef.nativeElement && !this.overlayRef.overlayElement.contains(clickTarget) && this.panelOpen) {
                this.closePanel();
            }
        });
    }
    /**
     * Subscription overlay position changes and reset dropdown position
     */
    subscribeOverlayPositionChange() {
        return this.positionStrategy.positionChanges
            .pipe(map((position) => position.connectionPair.originY), distinct(), delay(0))
            .subscribe((position) => {
            this.nzAutocomplete.updatePosition(position);
        });
    }
    attachOverlay() {
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
    }
    updateStatus() {
        if (this.overlayRef) {
            this.overlayRef.updateSize({ width: this.nzAutocomplete.nzWidth || this.getHostWidth() });
        }
        this.nzAutocomplete.setVisibility();
        this.resetActiveItem();
        if (this.activeOption) {
            this.activeOption.scrollIntoViewIfNeeded();
        }
    }
    destroyPanel() {
        if (this.overlayRef) {
            this.closePanel();
        }
    }
    getOverlayConfig() {
        return new OverlayConfig({
            positionStrategy: this.getOverlayPosition(),
            scrollStrategy: this.overlay.scrollStrategies.reposition(),
            // default host element width
            width: this.nzAutocomplete.nzWidth || this.getHostWidth()
        });
    }
    getConnectedElement() {
        return this.elementRef;
    }
    getHostWidth() {
        return this.getConnectedElement().nativeElement.getBoundingClientRect().width;
    }
    getOverlayPosition() {
        const positions = [
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
    }
    resetActiveItem() {
        const index = this.nzAutocomplete.getOptionIndex(this.previousValue);
        this.nzAutocomplete.clearSelectedOptions(null, true);
        if (index !== -1) {
            this.nzAutocomplete.setActiveItem(index);
            this.nzAutocomplete.activeItem.select(false);
        }
        else {
            this.nzAutocomplete.setActiveItem(this.nzAutocomplete.nzDefaultActiveFirstOption ? 0 : -1);
        }
    }
    setValueAndClose(option) {
        const value = option.nzValue;
        this.setTriggerValue(option.getLabel());
        this._onChange(value);
        this.elementRef.nativeElement.focus();
        this.closePanel();
    }
    setTriggerValue(value) {
        this.elementRef.nativeElement.value = value || '';
        if (!this.nzAutocomplete.nzBackfill) {
            this.previousValue = value;
        }
    }
    doBackfill() {
        if (this.nzAutocomplete.nzBackfill && this.nzAutocomplete.activeItem) {
            this.setTriggerValue(this.nzAutocomplete.activeItem.getLabel());
        }
    }
    canOpen() {
        const element = this.elementRef.nativeElement;
        return !element.readOnly && !element.disabled;
    }
}
/** @nocollapse */ NzAutocompleteTriggerDirective.ɵfac = function NzAutocompleteTriggerDirective_Factory(t) { return new (t || NzAutocompleteTriggerDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Overlay), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(DOCUMENT, 8)); };
/** @nocollapse */ NzAutocompleteTriggerDirective.ɵdir = ɵɵdefineDirective({ type: NzAutocompleteTriggerDirective, selectors: [["input", "nzAutocomplete", ""], ["textarea", "nzAutocomplete", ""]], hostBindings: function NzAutocompleteTriggerDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        ɵɵlistener("focusin", function NzAutocompleteTriggerDirective_focusin_HostBindingHandler($event) { return ctx.handleFocus(); })("blur", function NzAutocompleteTriggerDirective_blur_HostBindingHandler($event) { return ctx.handleBlur(); })("input", function NzAutocompleteTriggerDirective_input_HostBindingHandler($event) { return ctx.handleInput($event); })("keydown", function NzAutocompleteTriggerDirective_keydown_HostBindingHandler($event) { return ctx.handleKeydown($event); });
        ɵɵelementHostAttrs(_c0$3);
    } }, inputs: { nzAutocomplete: "nzAutocomplete" }, exportAs: ["nzAutocompleteTrigger"], features: [ɵɵProvidersFeature([NZ_AUTOCOMPLETE_VALUE_ACCESSOR])] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzAutocompleteTriggerDirective, [{
        type: Directive,
        args: [{
                selector: `input[nzAutocomplete], textarea[nzAutocomplete]`,
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
class NzAutocompleteModule {
}
/** @nocollapse */ NzAutocompleteModule.ɵmod = ɵɵdefineNgModule({ type: NzAutocompleteModule });
/** @nocollapse */ NzAutocompleteModule.ɵinj = ɵɵdefineInjector({ factory: function NzAutocompleteModule_Factory(t) { return new (t || NzAutocompleteModule)(); }, imports: [[CommonModule, OverlayModule, FormsModule, NzAddOnModule, NzNoAnimationModule]] });
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

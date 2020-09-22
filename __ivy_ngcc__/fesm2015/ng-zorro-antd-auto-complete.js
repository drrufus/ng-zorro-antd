import { OverlayConfig, ConnectionPositionPair, Overlay, OverlayModule } from '@angular/cdk/overlay';
import { DOCUMENT, CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, EventEmitter, ChangeDetectorRef, ElementRef, Output, NgZone, Host, Optional, ContentChildren, ViewChildren, ViewChild, TemplateRef, forwardRef, Directive, ViewContainerRef, Inject, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { scrollIntoView, InputBoolean, slideMotion, NzNoAnimationDirective, NzAddOnModule, NzNoAnimationModule } from 'ng-zorro-antd/core';
import { __decorate, __metadata } from 'tslib';
import { UP_ARROW, DOWN_ARROW, ESCAPE, TAB, ENTER } from '@angular/cdk/keycodes';
import { TemplatePortal } from '@angular/cdk/portal';
import { Subscription, defer, merge, fromEvent } from 'rxjs';
import { take, switchMap, filter, tap, delay, map, distinct } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from '@angular/cdk/overlay';

function NzAutocompleteOptgroupComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.nzLabel);
} }
const _c0 = [[["nz-auto-option"]]];
const _c1 = ["nz-auto-option"];
const _c2 = ["*"];
const _c3 = ["panel"];
const _c4 = ["content"];
function NzAutocompleteComponent_ng_template_0_4_ng_template_0_Template(rf, ctx) { }
function NzAutocompleteComponent_ng_template_0_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NzAutocompleteComponent_ng_template_0_4_ng_template_0_Template, 0, 0, "ng-template");
} }
function NzAutocompleteComponent_ng_template_0_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0);
} }
function NzAutocompleteComponent_ng_template_0_ng_template_7_nz_auto_option_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "nz-auto-option", 8);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r9 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("nzValue", option_r9);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(option_r9);
} }
function NzAutocompleteComponent_ng_template_0_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NzAutocompleteComponent_ng_template_0_ng_template_7_nz_auto_option_0_Template, 2, 2, "nz-auto-option", 7);
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r6.nzDataSource);
} }
function NzAutocompleteComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
    ɵngcc0.ɵɵelementStart(2, "div", 2);
    ɵngcc0.ɵɵelementStart(3, "ul", 3);
    ɵngcc0.ɵɵtemplate(4, NzAutocompleteComponent_ng_template_0_4_Template, 1, 0, undefined, 4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(5, NzAutocompleteComponent_ng_template_0_ng_template_5_Template, 1, 0, "ng-template", null, 5, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵtemplate(7, NzAutocompleteComponent_ng_template_0_ng_template_7_Template, 1, 1, "ng-template", null, 6, ɵngcc0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const _r3 = ɵngcc0.ɵɵreference(6);
    const _r5 = ɵngcc0.ɵɵreference(8);
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("ant-select-dropdown-hidden", !ctx_r0.showPanel);
    ɵngcc0.ɵɵproperty("@.disabled", ctx_r0.noAnimation == null ? null : ctx_r0.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r0.noAnimation == null ? null : ctx_r0.noAnimation.nzNoAnimation)("@slideMotion", ctx_r0.dropDownPosition)("ngClass", ctx_r0.nzOverlayClassName)("ngStyle", ctx_r0.nzOverlayStyle);
    ɵngcc0.ɵɵadvance(4);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.nzDataSource ? _r5 : _r3);
} }
class NzAutocompleteOptgroupComponent {
    constructor() { }
}
NzAutocompleteOptgroupComponent.ɵfac = function NzAutocompleteOptgroupComponent_Factory(t) { return new (t || NzAutocompleteOptgroupComponent)(); };
NzAutocompleteOptgroupComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzAutocompleteOptgroupComponent, selectors: [["nz-auto-optgroup"]], hostAttrs: ["role", "group", 1, "ant-select-dropdown-menu-item-group"], inputs: { nzLabel: "nzLabel" }, exportAs: ["nzAutoOptgroup"], ngContentSelectors: _c1, decls: 4, vars: 1, consts: [[1, "ant-select-dropdown-menu-item-group-title"], [4, "nzStringTemplateOutlet"], [1, "ant-select-dropdown-menu-item-group-list"]], template: function NzAutocompleteOptgroupComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c0);
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, NzAutocompleteOptgroupComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(2, "ul", 2);
        ɵngcc0.ɵɵprojection(3);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx.nzLabel);
    } }, directives: [ɵngcc1.NzStringTemplateOutletDirective], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NzAutocompleteOptgroupComponent.ctorParameters = () => [];
NzAutocompleteOptgroupComponent.propDecorators = {
    nzLabel: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NzAutocompleteOptgroupComponent.prototype.nzLabel;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzOptionSelectionChange {
    /**
     * @param {?} source
     * @param {?=} isUserInput
     */
    constructor(source, isUserInput = false) {
        this.source = source;
        this.isUserInput = isUserInput;
    }
}
if (false) {
    /** @type {?} */
    NzOptionSelectionChange.prototype.source;
    /** @type {?} */
    NzOptionSelectionChange.prototype.isUserInput;
}
class NzAutocompleteOptionComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} element
     */
    constructor(changeDetectorRef, element) {
        this.changeDetectorRef = changeDetectorRef;
        this.element = element;
        this.nzDisabled = false;
        this.selectionChange = new EventEmitter();
        this.active = false;
        this.selected = false;
    }
    /**
     * @param {?=} emit
     * @return {?}
     */
    select(emit = true) {
        this.selected = true;
        this.changeDetectorRef.markForCheck();
        if (emit) {
            this.emitSelectionChangeEvent();
        }
    }
    /**
     * @return {?}
     */
    deselect() {
        this.selected = false;
        this.changeDetectorRef.markForCheck();
        this.emitSelectionChangeEvent();
    }
    /**
     * Git display label
     * @return {?}
     */
    getLabel() {
        return this.nzLabel || this.nzValue.toString();
    }
    /**
     * Set active (only styles)
     * @return {?}
     */
    setActiveStyles() {
        if (!this.active) {
            this.active = true;
            this.changeDetectorRef.markForCheck();
        }
    }
    /**
     * Unset active (only styles)
     * @return {?}
     */
    setInactiveStyles() {
        if (this.active) {
            this.active = false;
            this.changeDetectorRef.markForCheck();
        }
    }
    /**
     * @return {?}
     */
    scrollIntoViewIfNeeded() {
        scrollIntoView(this.element.nativeElement);
    }
    /**
     * @return {?}
     */
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
    /**
     * @private
     * @param {?=} isUserInput
     * @return {?}
     */
    emitSelectionChangeEvent(isUserInput = false) {
        this.selectionChange.emit(new NzOptionSelectionChange(this, isUserInput));
    }
}
NzAutocompleteOptionComponent.ɵfac = function NzAutocompleteOptionComponent_Factory(t) { return new (t || NzAutocompleteOptionComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NzAutocompleteOptionComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzAutocompleteOptionComponent, selectors: [["nz-auto-option"]], hostAttrs: ["role", "menuitem", 1, "ant-select-dropdown-menu-item"], hostVars: 8, hostBindings: function NzAutocompleteOptionComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function NzAutocompleteOptionComponent_click_HostBindingHandler() { return ctx.selectViaInteraction(); })("mousedown", function NzAutocompleteOptionComponent_mousedown_HostBindingHandler($event) { return $event.preventDefault(); });
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("aria-selected", ctx.selected.toString())("aria-disabled", ctx.nzDisabled.toString());
        ɵngcc0.ɵɵclassProp("ant-select-dropdown-menu-item-selected", ctx.selected)("ant-select-dropdown-menu-item-active", ctx.active)("ant-select-dropdown-menu-item-disabled", ctx.nzDisabled);
    } }, inputs: { nzDisabled: "nzDisabled", nzValue: "nzValue", nzLabel: "nzLabel" }, outputs: { selectionChange: "selectionChange" }, exportAs: ["nzAutoOption"], ngContentSelectors: _c2, decls: 1, vars: 0, template: function NzAutocompleteOptionComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NzAutocompleteOptionComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
NzAutocompleteOptionComponent.propDecorators = {
    nzValue: [{ type: Input }],
    nzLabel: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    selectionChange: [{ type: Output }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzAutocompleteOptionComponent.prototype, "nzDisabled", void 0);
if (false) {
    /** @type {?} */
    NzAutocompleteOptionComponent.prototype.nzValue;
    /** @type {?} */
    NzAutocompleteOptionComponent.prototype.nzLabel;
    /** @type {?} */
    NzAutocompleteOptionComponent.prototype.nzDisabled;
    /** @type {?} */
    NzAutocompleteOptionComponent.prototype.selectionChange;
    /** @type {?} */
    NzAutocompleteOptionComponent.prototype.active;
    /** @type {?} */
    NzAutocompleteOptionComponent.prototype.selected;
    /**
     * @type {?}
     * @private
     */
    NzAutocompleteOptionComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    NzAutocompleteOptionComponent.prototype.element;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function AutocompleteDataSourceItem() { }
if (false) {
    /** @type {?} */
    AutocompleteDataSourceItem.prototype.value;
    /** @type {?} */
    AutocompleteDataSourceItem.prototype.label;
}
class NzAutocompleteComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} ngZone
     * @param {?=} noAnimation
     */
    constructor(changeDetectorRef, ngZone, noAnimation) {
        this.changeDetectorRef = changeDetectorRef;
        this.ngZone = ngZone;
        this.noAnimation = noAnimation;
        this.nzOverlayClassName = '';
        this.nzOverlayStyle = {};
        this.nzDefaultActiveFirstOption = true;
        this.nzBackfill = false;
        this.compareWith = (/**
         * @param {?} o1
         * @param {?} o2
         * @return {?}
         */
        (o1, o2) => o1 === o2);
        this.selectionChange = new EventEmitter();
        this.showPanel = true;
        this.isOpen = false;
        this.dropDownPosition = 'bottom';
        this.activeItemIndex = -1;
        this.selectionChangeSubscription = Subscription.EMPTY;
        this.dataSourceChangeSubscription = Subscription.EMPTY;
        /**
         * Options changes listener
         */
        this.optionSelectionChanges = defer((/**
         * @return {?}
         */
        () => {
            if (this.options) {
                return merge(...this.options.map((/**
                 * @param {?} option
                 * @return {?}
                 */
                option => option.selectionChange)));
            }
            return this.ngZone.onStable.asObservable().pipe(take(1), switchMap((/**
             * @return {?}
             */
            () => this.optionSelectionChanges)));
        }));
    }
    /**
     * Options accessor, its source may be content or dataSource
     * @return {?}
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
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (!this.nzDataSource) {
            this.optionsInit();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.nzDataSource) {
            this.optionsInit();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.dataSourceChangeSubscription.unsubscribe();
        this.selectionChangeSubscription.unsubscribe();
    }
    /**
     * @return {?}
     */
    setVisibility() {
        this.showPanel = !!this.options.length;
        this.changeDetectorRef.markForCheck();
    }
    /**
     * @param {?} index
     * @return {?}
     */
    setActiveItem(index) {
        /** @type {?} */
        const activeItem = this.options.toArray()[index];
        this.activeItemIndex = index;
        if (activeItem && !activeItem.active) {
            this.activeItem = activeItem;
            this.clearSelectedOptions(this.activeItem);
            this.activeItem.setActiveStyles();
            this.changeDetectorRef.markForCheck();
        }
    }
    /**
     * @return {?}
     */
    setNextItemActive() {
        /** @type {?} */
        const nextIndex = this.activeItemIndex + 1 <= this.options.length - 1 ? this.activeItemIndex + 1 : 0;
        this.setActiveItem(nextIndex);
    }
    /**
     * @return {?}
     */
    setPreviousItemActive() {
        /** @type {?} */
        const previousIndex = this.activeItemIndex - 1 < 0 ? this.options.length - 1 : this.activeItemIndex - 1;
        this.setActiveItem(previousIndex);
    }
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @return {?}
     */
    getOptionIndex(value) {
        return (/** @type {?} */ (this.options.reduce((/**
         * @param {?} result
         * @param {?} current
         * @param {?} index
         * @return {?}
         */
        (result, current, index) => {
            return result === -1 ? (this.compareWith(value, current.nzValue) ? index : -1) : result;
        }), -1)));
    }
    /**
     * @param {?} position
     * @return {?}
     */
    updatePosition(position) {
        this.dropDownPosition = position;
        this.changeDetectorRef.markForCheck();
    }
    /**
     * @private
     * @return {?}
     */
    optionsInit() {
        this.setVisibility();
        this.subscribeOptionChanges();
        /** @type {?} */
        const changes = this.nzDataSource ? this.fromDataSourceOptions.changes : this.fromContentOptions.changes;
        // async
        this.dataSourceChangeSubscription = changes.subscribe((/**
         * @param {?} e
         * @return {?}
         */
        e => {
            if (!e.dirty && this.isOpen) {
                setTimeout((/**
                 * @return {?}
                 */
                () => this.setVisibility()));
            }
            this.subscribeOptionChanges();
        }));
    }
    /**
     * Clear the status of options
     * @param {?=} skip
     * @param {?=} deselect
     * @return {?}
     */
    clearSelectedOptions(skip, deselect = false) {
        this.options.forEach((/**
         * @param {?} option
         * @return {?}
         */
        option => {
            if (option !== skip) {
                if (deselect) {
                    option.deselect();
                }
                option.setInactiveStyles();
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    subscribeOptionChanges() {
        this.selectionChangeSubscription.unsubscribe();
        this.selectionChangeSubscription = this.optionSelectionChanges
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.isUserInput)))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            event.source.select();
            event.source.setActiveStyles();
            this.activeItem = event.source;
            this.activeItemIndex = this.getOptionIndex(this.activeItem.nzValue);
            this.clearSelectedOptions(event.source, true);
            this.selectionChange.emit(event.source);
        }));
    }
}
NzAutocompleteComponent.ɵfac = function NzAutocompleteComponent_Factory(t) { return new (t || NzAutocompleteComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzNoAnimationDirective, 9)); };
NzAutocompleteComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzAutocompleteComponent, selectors: [["nz-autocomplete"]], contentQueries: function NzAutocompleteComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzAutocompleteOptionComponent, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.fromContentOptions = _t);
    } }, viewQuery: function NzAutocompleteComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(TemplateRef, true);
        ɵngcc0.ɵɵviewQuery(_c3, true);
        ɵngcc0.ɵɵviewQuery(_c4, true);
        ɵngcc0.ɵɵviewQuery(NzAutocompleteOptionComponent, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.template = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.panel = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.content = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.fromDataSourceOptions = _t);
    } }, inputs: { nzOverlayClassName: "nzOverlayClassName", nzOverlayStyle: "nzOverlayStyle", nzDefaultActiveFirstOption: "nzDefaultActiveFirstOption", nzBackfill: "nzBackfill", compareWith: "compareWith", nzWidth: "nzWidth", nzDataSource: "nzDataSource" }, outputs: { selectionChange: "selectionChange" }, exportAs: ["nzAutocomplete"], ngContentSelectors: _c2, decls: 1, vars: 0, consts: [[1, "ant-select-dropdown", "ant-select-dropdown--single", "ant-select-dropdown-placement-bottomLeft", 3, "nzNoAnimation", "ngClass", "ngStyle"], ["panel", ""], [2, "overflow", "auto"], ["role", "menu", "aria-activedescendant", "", 1, "ant-select-dropdown-menu", "ant-select-dropdown-menu-root", "ant-select-dropdown-menu-vertical"], [4, "ngTemplateOutlet"], ["contentTemplate", ""], ["optionsTemplate", ""], [3, "nzValue", 4, "ngFor", "ngForOf"], [3, "nzValue"]], template: function NzAutocompleteComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, NzAutocompleteComponent_ng_template_0_Template, 9, 8, "ng-template");
    } }, directives: [ɵngcc1.NzNoAnimationDirective, ɵngcc2.NgClass, ɵngcc2.NgStyle, ɵngcc2.NgTemplateOutlet, ɵngcc2.NgForOf, NzAutocompleteOptionComponent], styles: ["\n      .ant-select-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "], encapsulation: 2, data: { animation: [slideMotion] }, changeDetection: 0 });
/** @nocollapse */
NzAutocompleteComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
NzAutocompleteComponent.propDecorators = {
    nzWidth: [{ type: Input }],
    nzOverlayClassName: [{ type: Input }],
    nzOverlayStyle: [{ type: Input }],
    nzDefaultActiveFirstOption: [{ type: Input }],
    nzBackfill: [{ type: Input }],
    compareWith: [{ type: Input }],
    nzDataSource: [{ type: Input }],
    selectionChange: [{ type: Output }],
    fromContentOptions: [{ type: ContentChildren, args: [NzAutocompleteOptionComponent, { descendants: true },] }],
    fromDataSourceOptions: [{ type: ViewChildren, args: [NzAutocompleteOptionComponent,] }],
    template: [{ type: ViewChild, args: [TemplateRef, { static: false },] }],
    panel: [{ type: ViewChild, args: ['panel', { static: false },] }],
    content: [{ type: ViewChild, args: ['content', { static: false },] }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzAutocompleteComponent.prototype, "nzDefaultActiveFirstOption", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzAutocompleteComponent.prototype, "nzBackfill", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzAutocompleteOptgroupComponent, [{
        type: Component,
        args: [{
                selector: 'nz-auto-optgroup',
                exportAs: 'nzAutoOptgroup',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: "<div class=\"ant-select-dropdown-menu-item-group-title\">\r\n  <ng-container *nzStringTemplateOutlet=\"nzLabel\">{{nzLabel}}</ng-container>\r\n</div>\r\n<ul class=\"ant-select-dropdown-menu-item-group-list\">\r\n  <ng-content select=\"nz-auto-option\"></ng-content>\r\n</ul>\r\n",
                host: {
                    role: 'group',
                    class: 'ant-select-dropdown-menu-item-group'
                }
            }]
    }], function () { return []; }, { nzLabel: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzAutocompleteOptionComponent, [{
        type: Component,
        args: [{
                selector: 'nz-auto-option',
                exportAs: 'nzAutoOption',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: "<ng-content></ng-content>",
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
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.ElementRef }]; }, { nzDisabled: [{
            type: Input
        }], selectionChange: [{
            type: Output
        }], nzValue: [{
            type: Input
        }], nzLabel: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzAutocompleteComponent, [{
        type: Component,
        args: [{
                selector: 'nz-autocomplete',
                exportAs: 'nzAutocomplete',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: "<ng-template>\r\n  <div class=\"ant-select-dropdown ant-select-dropdown--single ant-select-dropdown-placement-bottomLeft\"\r\n    #panel\r\n    [@.disabled]=\"noAnimation?.nzNoAnimation\"\r\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n    [@slideMotion]=\"dropDownPosition\"\r\n    [class.ant-select-dropdown-hidden]=\"!showPanel\"\r\n    [ngClass]=\"nzOverlayClassName\"\r\n    [ngStyle]=\"nzOverlayStyle\">\r\n    <div style=\"overflow: auto;\">\r\n      <ul class=\"ant-select-dropdown-menu  ant-select-dropdown-menu-root ant-select-dropdown-menu-vertical\"\r\n        role=\"menu\"\r\n        aria-activedescendant>\r\n        <ng-template *ngTemplateOutlet=\"nzDataSource ? optionsTemplate : contentTemplate\"></ng-template>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <ng-template #contentTemplate>\r\n    <ng-content></ng-content>\r\n  </ng-template>\r\n  <ng-template #optionsTemplate>\r\n    <nz-auto-option *ngFor=\"let option of nzDataSource\" [nzValue]=\"option\">{{option}}</nz-auto-option>\r\n  </ng-template>\r\n</ng-template>",
                animations: [slideMotion],
                styles: [`
      .ant-select-dropdown {
        top: 100%;
        left: 0;
        position: relative;
        width: 100%;
        margin-top: 4px;
        margin-bottom: 4px;
      }
    `]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.NgZone }, { type: ɵngcc1.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, { nzOverlayClassName: [{
            type: Input
        }], nzOverlayStyle: [{
            type: Input
        }], nzDefaultActiveFirstOption: [{
            type: Input
        }], nzBackfill: [{
            type: Input
        }], compareWith: [{
            type: Input
        }], selectionChange: [{
            type: Output
        }], nzWidth: [{
            type: Input
        }], nzDataSource: [{
            type: Input
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
if (false) {
    /** @type {?} */
    NzAutocompleteComponent.prototype.nzWidth;
    /** @type {?} */
    NzAutocompleteComponent.prototype.nzOverlayClassName;
    /** @type {?} */
    NzAutocompleteComponent.prototype.nzOverlayStyle;
    /** @type {?} */
    NzAutocompleteComponent.prototype.nzDefaultActiveFirstOption;
    /** @type {?} */
    NzAutocompleteComponent.prototype.nzBackfill;
    /** @type {?} */
    NzAutocompleteComponent.prototype.compareWith;
    /** @type {?} */
    NzAutocompleteComponent.prototype.nzDataSource;
    /** @type {?} */
    NzAutocompleteComponent.prototype.selectionChange;
    /** @type {?} */
    NzAutocompleteComponent.prototype.showPanel;
    /** @type {?} */
    NzAutocompleteComponent.prototype.isOpen;
    /** @type {?} */
    NzAutocompleteComponent.prototype.activeItem;
    /** @type {?} */
    NzAutocompleteComponent.prototype.dropDownPosition;
    /**
     * Provided by content
     * @type {?}
     */
    NzAutocompleteComponent.prototype.fromContentOptions;
    /**
     * Provided by dataSource
     * @type {?}
     */
    NzAutocompleteComponent.prototype.fromDataSourceOptions;
    /**
     * cdk-overlay
     * @type {?}
     */
    NzAutocompleteComponent.prototype.template;
    /** @type {?} */
    NzAutocompleteComponent.prototype.panel;
    /** @type {?} */
    NzAutocompleteComponent.prototype.content;
    /**
     * @type {?}
     * @private
     */
    NzAutocompleteComponent.prototype.activeItemIndex;
    /**
     * @type {?}
     * @private
     */
    NzAutocompleteComponent.prototype.selectionChangeSubscription;
    /**
     * @type {?}
     * @private
     */
    NzAutocompleteComponent.prototype.dataSourceChangeSubscription;
    /**
     * Options changes listener
     * @type {?}
     */
    NzAutocompleteComponent.prototype.optionSelectionChanges;
    /**
     * @type {?}
     * @private
     */
    NzAutocompleteComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    NzAutocompleteComponent.prototype.ngZone;
    /** @type {?} */
    NzAutocompleteComponent.prototype.noAnimation;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const NZ_AUTOCOMPLETE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => NzAutocompleteTriggerDirective)),
    multi: true
};
/**
 * @return {?}
 */
function getNzAutocompleteMissingPanelError() {
    return Error('Attempting to open an undefined instance of `nz-autocomplete`. ' +
        'Make sure that the id passed to the `nzAutocomplete` is correct and that ' +
        "you're attempting to open it after the ngAfterContentInit hook.");
}
class NzAutocompleteTriggerDirective {
    /**
     * @param {?} elementRef
     * @param {?} overlay
     * @param {?} viewContainerRef
     * @param {?} ngZone
     * @param {?} document
     */
    constructor(elementRef, overlay, viewContainerRef, ngZone, document) {
        this.elementRef = elementRef;
        this.overlay = overlay;
        this.viewContainerRef = viewContainerRef;
        this.ngZone = ngZone;
        this.document = document;
        // tslint:disable-next-line:no-any
        this._onChange = (/**
         * @return {?}
         */
        () => { });
        this._onTouched = (/**
         * @return {?}
         */
        () => { });
        this.panelOpen = false;
    }
    /**
     * Current active option
     * @return {?}
     */
    get activeOption() {
        if (this.nzAutocomplete && this.nzAutocomplete.options.length) {
            return this.nzAutocomplete.activeItem;
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroyPanel();
    }
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.setTriggerValue(value);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        /** @type {?} */
        const element = this.elementRef.nativeElement;
        element.disabled = isDisabled;
        this.closePanel();
    }
    /**
     * @return {?}
     */
    openPanel() {
        this.previousValue = this.elementRef.nativeElement.value;
        this.attachOverlay();
        this.updateStatus();
    }
    /**
     * @return {?}
     */
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
    /**
     * @param {?} event
     * @return {?}
     */
    handleKeydown(event) {
        /** @type {?} */
        const keyCode = event.keyCode;
        /** @type {?} */
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
    /**
     * @param {?} event
     * @return {?}
     */
    handleInput(event) {
        /** @type {?} */
        const target = (/** @type {?} */ (event.target));
        /** @type {?} */
        const document = (/** @type {?} */ (this.document));
        /** @type {?} */
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
    /**
     * @return {?}
     */
    handleFocus() {
        if (this.canOpen()) {
            this.openPanel();
        }
    }
    /**
     * @return {?}
     */
    handleBlur() {
        this.closePanel();
        this._onTouched();
    }
    /**
     * Subscription data source changes event
     * @private
     * @return {?}
     */
    subscribeOptionsChange() {
        /** @type {?} */
        const firstStable = this.ngZone.onStable.asObservable().pipe(take(1));
        /** @type {?} */
        const optionChanges = this.nzAutocomplete.options.changes.pipe(tap((/**
         * @return {?}
         */
        () => this.positionStrategy.reapplyLastPosition())), delay(0));
        return merge(firstStable, optionChanges).subscribe((/**
         * @return {?}
         */
        () => {
            this.resetActiveItem();
            if (this.panelOpen) {
                (/** @type {?} */ (this.overlayRef)).updatePosition();
            }
        }));
    }
    /**
     * Subscription option changes event and set the value
     * @private
     * @return {?}
     */
    subscribeSelectionChange() {
        return this.nzAutocomplete.selectionChange.subscribe((/**
         * @param {?} option
         * @return {?}
         */
        (option) => {
            this.setValueAndClose(option);
        }));
    }
    /**
     * Subscription external click and close panel
     * @private
     * @return {?}
     */
    subscribeOverlayBackdropClick() {
        return merge(fromEvent(this.document, 'click'), fromEvent(this.document, 'touchend')).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            /** @type {?} */
            const clickTarget = (/** @type {?} */ (event.target));
            // Make sure is not self
            if (clickTarget !== this.elementRef.nativeElement &&
                !(/** @type {?} */ (this.overlayRef)).overlayElement.contains(clickTarget) &&
                this.panelOpen) {
                this.closePanel();
            }
        }));
    }
    /**
     * Subscription overlay position changes and reset dropdown position
     * @private
     * @return {?}
     */
    subscribeOverlayPositionChange() {
        return this.positionStrategy.positionChanges
            .pipe(map((/**
         * @param {?} position
         * @return {?}
         */
        (position) => position.connectionPair.originY)), distinct(), delay(0))
            .subscribe((/**
         * @param {?} position
         * @return {?}
         */
        (position) => {
            this.nzAutocomplete.updatePosition(position);
        }));
    }
    /**
     * @private
     * @return {?}
     */
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
    /**
     * @private
     * @return {?}
     */
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
    /**
     * @private
     * @return {?}
     */
    destroyPanel() {
        if (this.overlayRef) {
            this.closePanel();
        }
    }
    /**
     * @private
     * @return {?}
     */
    getOverlayConfig() {
        return new OverlayConfig({
            positionStrategy: this.getOverlayPosition(),
            scrollStrategy: this.overlay.scrollStrategies.reposition(),
            // default host element width
            width: this.nzAutocomplete.nzWidth || this.getHostWidth()
        });
    }
    /**
     * @private
     * @return {?}
     */
    getConnectedElement() {
        return this.elementRef;
    }
    /**
     * @private
     * @return {?}
     */
    getHostWidth() {
        return this.getConnectedElement().nativeElement.getBoundingClientRect().width;
    }
    /**
     * @private
     * @return {?}
     */
    getOverlayPosition() {
        /** @type {?} */
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
    /**
     * @private
     * @return {?}
     */
    resetActiveItem() {
        /** @type {?} */
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
    /**
     * @private
     * @param {?} option
     * @return {?}
     */
    setValueAndClose(option) {
        /** @type {?} */
        const value = option.nzValue;
        this.setTriggerValue(option.getLabel());
        this._onChange(value);
        this.elementRef.nativeElement.focus();
        this.closePanel();
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    setTriggerValue(value) {
        this.elementRef.nativeElement.value = value || '';
        if (!this.nzAutocomplete.nzBackfill) {
            this.previousValue = value;
        }
    }
    /**
     * @private
     * @return {?}
     */
    doBackfill() {
        if (this.nzAutocomplete.nzBackfill && this.nzAutocomplete.activeItem) {
            this.setTriggerValue(this.nzAutocomplete.activeItem.getLabel());
        }
    }
    /**
     * @private
     * @return {?}
     */
    canOpen() {
        /** @type {?} */
        const element = this.elementRef.nativeElement;
        return !element.readOnly && !element.disabled;
    }
}
NzAutocompleteTriggerDirective.ɵfac = function NzAutocompleteTriggerDirective_Factory(t) { return new (t || NzAutocompleteTriggerDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.Overlay), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(DOCUMENT, 8)); };
NzAutocompleteTriggerDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzAutocompleteTriggerDirective, selectors: [["input", "nzAutocomplete", ""], ["textarea", "nzAutocomplete", ""]], hostAttrs: ["autocomplete", "off", "aria-autocomplete", "list"], hostBindings: function NzAutocompleteTriggerDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("focusin", function NzAutocompleteTriggerDirective_focusin_HostBindingHandler() { return ctx.handleFocus(); })("blur", function NzAutocompleteTriggerDirective_blur_HostBindingHandler() { return ctx.handleBlur(); })("input", function NzAutocompleteTriggerDirective_input_HostBindingHandler($event) { return ctx.handleInput($event); })("keydown", function NzAutocompleteTriggerDirective_keydown_HostBindingHandler($event) { return ctx.handleKeydown($event); });
    } }, inputs: { nzAutocomplete: "nzAutocomplete" }, exportAs: ["nzAutocompleteTrigger"], features: [ɵngcc0.ɵɵProvidersFeature([NZ_AUTOCOMPLETE_VALUE_ACCESSOR])] });
/** @nocollapse */
NzAutocompleteTriggerDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Overlay },
    { type: ViewContainerRef },
    { type: NgZone },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] }
];
NzAutocompleteTriggerDirective.propDecorators = {
    nzAutocomplete: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzAutocompleteTriggerDirective, [{
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
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc3.Overlay }, { type: ɵngcc0.ViewContainerRef }, { type: ɵngcc0.NgZone }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, { nzAutocomplete: [{
            type: Input
        }] }); })();
if (false) {
    /**
     * Bind nzAutocomplete component
     * @type {?}
     */
    NzAutocompleteTriggerDirective.prototype.nzAutocomplete;
    /** @type {?} */
    NzAutocompleteTriggerDirective.prototype._onChange;
    /** @type {?} */
    NzAutocompleteTriggerDirective.prototype._onTouched;
    /** @type {?} */
    NzAutocompleteTriggerDirective.prototype.panelOpen;
    /**
     * @type {?}
     * @private
     */
    NzAutocompleteTriggerDirective.prototype.overlayRef;
    /**
     * @type {?}
     * @private
     */
    NzAutocompleteTriggerDirective.prototype.portal;
    /**
     * @type {?}
     * @private
     */
    NzAutocompleteTriggerDirective.prototype.positionStrategy;
    /**
     * @type {?}
     * @private
     */
    NzAutocompleteTriggerDirective.prototype.previousValue;
    /**
     * @type {?}
     * @private
     */
    NzAutocompleteTriggerDirective.prototype.selectionChangeSubscription;
    /**
     * @type {?}
     * @private
     */
    NzAutocompleteTriggerDirective.prototype.optionsChangeSubscription;
    /**
     * @type {?}
     * @private
     */
    NzAutocompleteTriggerDirective.prototype.overlayBackdropClickSubscription;
    /**
     * @type {?}
     * @private
     */
    NzAutocompleteTriggerDirective.prototype.overlayPositionChangeSubscription;
    /**
     * @type {?}
     * @private
     */
    NzAutocompleteTriggerDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzAutocompleteTriggerDirective.prototype.overlay;
    /**
     * @type {?}
     * @private
     */
    NzAutocompleteTriggerDirective.prototype.viewContainerRef;
    /**
     * @type {?}
     * @private
     */
    NzAutocompleteTriggerDirective.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    NzAutocompleteTriggerDirective.prototype.document;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzAutocompleteModule {
}
NzAutocompleteModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzAutocompleteModule });
NzAutocompleteModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzAutocompleteModule_Factory(t) { return new (t || NzAutocompleteModule)(); }, imports: [[CommonModule, OverlayModule, FormsModule, NzAddOnModule, NzNoAnimationModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzAutocompleteModule, { declarations: function () { return [NzAutocompleteComponent,
        NzAutocompleteOptionComponent,
        NzAutocompleteTriggerDirective,
        NzAutocompleteOptgroupComponent]; }, imports: function () { return [CommonModule, OverlayModule, FormsModule, NzAddOnModule, NzNoAnimationModule]; }, exports: function () { return [NzAutocompleteComponent,
        NzAutocompleteOptionComponent,
        NzAutocompleteTriggerDirective,
        NzAutocompleteOptgroupComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzAutocompleteModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    NzAutocompleteComponent,
                    NzAutocompleteOptionComponent,
                    NzAutocompleteTriggerDirective,
                    NzAutocompleteOptgroupComponent
                ],
                exports: [
                    NzAutocompleteComponent,
                    NzAutocompleteOptionComponent,
                    NzAutocompleteTriggerDirective,
                    NzAutocompleteOptgroupComponent
                ],
                imports: [CommonModule, OverlayModule, FormsModule, NzAddOnModule, NzNoAnimationModule]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NZ_AUTOCOMPLETE_VALUE_ACCESSOR, NzAutocompleteComponent, NzAutocompleteModule, NzAutocompleteOptgroupComponent, NzAutocompleteOptionComponent, NzAutocompleteTriggerDirective, NzOptionSelectionChange, getNzAutocompleteMissingPanelError };

//# sourceMappingURL=ng-zorro-antd-auto-complete.js.map
import { OverlayConfig, ConnectionPositionPair, Overlay, OverlayModule } from '@angular/cdk/overlay';
import { DOCUMENT, NgForOf, NgIf, NgTemplateOutlet, CommonModule } from '@angular/common';
import { ɵɵdefineDirective, ɵsetClassMetadata, Directive, ɵɵdefineInjectable, Injectable, forwardRef, EventEmitter, ɵɵdirectiveInject, ElementRef, ɵɵlistener, ɵɵelementHostAttrs, ɵɵProvidersFeature, ɵɵelementContainer, ɵɵelementContainerStart, ɵɵtemplate, ɵɵelementContainerEnd, ɵɵnextContext, ɵɵadvance, ɵɵproperty, ɵɵpureFunction1, ɵɵtext, ɵɵtextInterpolate, ɵɵgetCurrentView, ɵɵelementStart, ɵɵrestoreView, ɵɵtemplateRefExtractor, ɵɵelementEnd, ɵɵreference, ɵɵclassProp, ɵɵelement, ChangeDetectorRef, ViewContainerRef, ɵɵdefineComponent, ɵɵcontentQuery, TemplateRef, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵviewQuery, ɵɵNgOnChangesFeature, ɵɵprojectionDef, ɵɵprojection, Component, ChangeDetectionStrategy, Optional, Inject, Input, Output, ViewChild, ContentChild, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import { Subject, merge, fromEvent } from 'rxjs';
import { __decorate, __metadata } from 'tslib';
import { ENTER, LEFT_ARROW, RIGHT_ARROW, TAB, ESCAPE, UP_ARROW, DOWN_ARROW } from '@angular/cdk/keycodes';
import { TemplatePortal } from '@angular/cdk/portal';
import { getMentions, getCaretCoordinates, DEFAULT_MENTION_BOTTOM_POSITIONS, DEFAULT_MENTION_TOP_POSITIONS, InputBoolean } from 'ng-zorro-antd/core';

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzMentionSuggestionDirective {
}
/** @nocollapse */ NzMentionSuggestionDirective.ɵfac = function NzMentionSuggestionDirective_Factory(t) { return new (t || NzMentionSuggestionDirective)(); };
/** @nocollapse */ NzMentionSuggestionDirective.ɵdir = ɵɵdefineDirective({ type: NzMentionSuggestionDirective, selectors: [["", "nzMentionSuggestion", ""]], exportAs: ["nzMentionSuggestion"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzMentionSuggestionDirective, [{
        type: Directive,
        args: [{
                selector: '[nzMentionSuggestion]',
                exportAs: 'nzMentionSuggestion'
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzMentionService {
    constructor() {
        this.triggerChange$ = new Subject();
    }
    triggerChanged() {
        return this.triggerChange$.asObservable();
    }
    registerTrigger(trigger) {
        if (this.trigger !== trigger) {
            this.trigger = trigger;
            this.triggerChange$.next(trigger);
        }
    }
    ngOnDestroy() {
        this.triggerChange$.complete();
    }
}
/** @nocollapse */ NzMentionService.ɵfac = function NzMentionService_Factory(t) { return new (t || NzMentionService)(); };
/** @nocollapse */ NzMentionService.ɵprov = ɵɵdefineInjectable({ token: NzMentionService, factory: NzMentionService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzMentionService, [{
        type: Injectable
    }], null, null); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const _c0 = ["autocomplete", "off"];
const NZ_MENTION_TRIGGER_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NzMentionTriggerDirective),
    multi: true
};
class NzMentionTriggerDirective {
    constructor(el, nzMentionService) {
        this.el = el;
        this.nzMentionService = nzMentionService;
        this.onFocusin = new EventEmitter();
        this.onBlur = new EventEmitter();
        this.onInput = new EventEmitter();
        this.onKeydown = new EventEmitter();
        this.onClick = new EventEmitter();
    }
    completeEvents() {
        this.onFocusin.complete();
        this.onBlur.complete();
        this.onInput.complete();
        this.onKeydown.complete();
        this.onClick.complete();
    }
    focus(caretPos) {
        this.el.nativeElement.focus();
        this.el.nativeElement.setSelectionRange(caretPos, caretPos);
    }
    insertMention(mention) {
        const value = this.el.nativeElement.value;
        const insertValue = mention.mention.trim() + ' ';
        const newValue = [value.slice(0, mention.startPos + 1), insertValue, value.slice(mention.endPos, value.length)].join('');
        this.el.nativeElement.value = newValue;
        this.focus(mention.startPos + insertValue.length + 1);
        this.onChange(newValue);
        this.value = newValue;
    }
    writeValue(value) {
        this.value = value;
        if (typeof value === 'string') {
            this.el.nativeElement.value = value;
        }
        else {
            this.el.nativeElement.value = '';
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    ngAfterViewInit() {
        this.nzMentionService.registerTrigger(this);
    }
    ngOnDestroy() {
        this.completeEvents();
    }
}
/** @nocollapse */ NzMentionTriggerDirective.ɵfac = function NzMentionTriggerDirective_Factory(t) { return new (t || NzMentionTriggerDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NzMentionService)); };
/** @nocollapse */ NzMentionTriggerDirective.ɵdir = ɵɵdefineDirective({ type: NzMentionTriggerDirective, selectors: [["input", "nzMentionTrigger", ""], ["textarea", "nzMentionTrigger", ""]], hostBindings: function NzMentionTriggerDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        ɵɵlistener("focusin", function NzMentionTriggerDirective_focusin_HostBindingHandler($event) { return ctx.onFocusin.emit(); })("blur", function NzMentionTriggerDirective_blur_HostBindingHandler($event) { return ctx.onBlur.emit(); })("input", function NzMentionTriggerDirective_input_HostBindingHandler($event) { return ctx.onInput.emit($event); })("keydown", function NzMentionTriggerDirective_keydown_HostBindingHandler($event) { return ctx.onKeydown.emit($event); })("click", function NzMentionTriggerDirective_click_HostBindingHandler($event) { return ctx.onClick.emit($event); });
        ɵɵelementHostAttrs(_c0);
    } }, exportAs: ["nzMentionTrigger"], features: [ɵɵProvidersFeature([NZ_MENTION_TRIGGER_ACCESSOR])] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzMentionTriggerDirective, [{
        type: Directive,
        args: [{
                selector: 'input[nzMentionTrigger], textarea[nzMentionTrigger]',
                exportAs: 'nzMentionTrigger',
                providers: [NZ_MENTION_TRIGGER_ACCESSOR],
                host: {
                    autocomplete: 'off',
                    '(focusin)': 'onFocusin.emit()',
                    '(blur)': 'onBlur.emit()',
                    '(input)': 'onInput.emit($event)',
                    '(keydown)': 'onKeydown.emit($event)',
                    '(click)': 'onClick.emit($event)'
                }
            }]
    }], function () { return [{ type: ElementRef }, { type: NzMentionService }]; }, null); })();

function NzMentionComponent_ng_template_1_li_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
const _c0$1 = function (a0) { return { $implicit: a0 }; };
function NzMentionComponent_ng_template_1_li_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzMentionComponent_ng_template_1_li_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 7);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const suggestion_r570 = ɵɵnextContext().$implicit;
    const ctx_r572 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r572.suggestionTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c0$1, suggestion_r570));
} }
function NzMentionComponent_ng_template_1_li_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0);
} if (rf & 2) {
    const suggestion_r570 = ɵɵnextContext().$implicit;
    const ctx_r574 = ɵɵnextContext(2);
    ɵɵtextInterpolate(ctx_r574.nzValueWith(suggestion_r570));
} }
function NzMentionComponent_ng_template_1_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r579 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 4);
    ɵɵlistener("mousedown", function NzMentionComponent_ng_template_1_li_1_Template_li_mousedown_0_listener($event) { ɵɵrestoreView(_r579); return $event.preventDefault(); })("click", function NzMentionComponent_ng_template_1_li_1_Template_li_click_0_listener($event) { ɵɵrestoreView(_r579); const suggestion_r570 = ctx.$implicit; const ctx_r580 = ɵɵnextContext(2); return ctx_r580.selectSuggestion(suggestion_r570); });
    ɵɵtemplate(1, NzMentionComponent_ng_template_1_li_1_ng_container_1_Template, 2, 4, "ng-container", 5);
    ɵɵtemplate(2, NzMentionComponent_ng_template_1_li_1_ng_template_2_Template, 1, 1, "ng-template", null, 6, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
} if (rf & 2) {
    const i_r571 = ctx.index;
    const _r573 = ɵɵreference(3);
    const ctx_r568 = ɵɵnextContext(2);
    ɵɵclassProp("focus", i_r571 === ctx_r568.activeIndex);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r568.suggestionTemplate)("ngIfElse", _r573);
} }
function NzMentionComponent_ng_template_1_li_2_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵelement(1, "i", 10);
    ɵɵelementEnd();
} }
function NzMentionComponent_ng_template_1_li_2_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r582 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r582.nzNotFoundContent);
} }
function NzMentionComponent_ng_template_1_li_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li", 8);
    ɵɵtemplate(1, NzMentionComponent_ng_template_1_li_2_span_1_Template, 2, 0, "span", 9);
    ɵɵtemplate(2, NzMentionComponent_ng_template_1_li_2_span_2_Template, 2, 1, "span", 9);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r569 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r569.nzLoading);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r569.nzLoading);
} }
function NzMentionComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "ul", 1);
    ɵɵtemplate(1, NzMentionComponent_ng_template_1_li_1_Template, 4, 3, "li", 2);
    ɵɵtemplate(2, NzMentionComponent_ng_template_1_li_2_Template, 3, 2, "li", 3);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r567 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r567.filteredSuggestions);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r567.filteredSuggestions.length === 0);
} }
const _c1 = ["*"];
class NzMentionComponent {
    constructor(ngDocument, // tslint:disable-line:no-any
    changeDetectorRef, overlay, viewContainerRef, nzMentionService) {
        this.ngDocument = ngDocument;
        this.changeDetectorRef = changeDetectorRef;
        this.overlay = overlay;
        this.viewContainerRef = viewContainerRef;
        this.nzMentionService = nzMentionService;
        this.nzValueWith = value => value; // tslint:disable-line:no-any
        this.nzPrefix = '@';
        this.nzLoading = false;
        this.nzNotFoundContent = '无匹配结果，轻敲空格完成输入';
        this.nzPlacement = 'bottom';
        this.nzSuggestions = [];
        this.nzOnSelect = new EventEmitter();
        this.nzOnSearchChange = new EventEmitter();
        this.isOpen = false;
        this.filteredSuggestions = [];
        this.suggestionTemplate = null; // tslint:disable-line:no-any
        this.activeIndex = -1;
        this.previousValue = null;
    }
    set suggestionChild(value) {
        if (value) {
            this.suggestionTemplate = value;
        }
    }
    get triggerNativeElement() {
        return this.trigger.el.nativeElement;
    }
    ngOnInit() {
        this.nzMentionService.triggerChanged().subscribe(trigger => {
            this.trigger = trigger;
            this.bindTriggerEvents();
            this.closeDropdown();
            this.overlayRef = null;
        });
    }
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('nzSuggestions')) {
            if (this.isOpen) {
                this.previousValue = null;
                this.activeIndex = -1;
                this.resetDropdown(false);
            }
        }
    }
    ngOnDestroy() {
        this.closeDropdown();
    }
    closeDropdown() {
        if (this.overlayRef && this.overlayRef.hasAttached()) {
            this.overlayRef.detach();
            this.overlayBackdropClickSubscription.unsubscribe();
            this.isOpen = false;
            this.changeDetectorRef.markForCheck();
        }
    }
    openDropdown() {
        this.attachOverlay();
        this.isOpen = true;
        this.changeDetectorRef.markForCheck();
    }
    getMentions() {
        return this.trigger ? getMentions(this.trigger.value, this.nzPrefix) : [];
    }
    selectSuggestion(suggestion) {
        const value = this.nzValueWith(suggestion);
        this.trigger.insertMention({
            mention: value,
            startPos: this.cursorMentionStart,
            endPos: this.cursorMentionEnd
        });
        this.nzOnSelect.emit(suggestion);
        this.closeDropdown();
        this.activeIndex = -1;
    }
    handleInput(event) {
        const target = event.target;
        this.trigger.onChange(target.value);
        this.trigger.value = target.value;
        this.resetDropdown();
    }
    handleKeydown(event) {
        const keyCode = event.keyCode;
        if (this.isOpen && keyCode === ENTER && this.activeIndex !== -1 && this.filteredSuggestions.length) {
            this.selectSuggestion(this.filteredSuggestions[this.activeIndex]);
            event.preventDefault();
        }
        else if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
            this.resetDropdown();
            event.stopPropagation();
        }
        else {
            if (this.isOpen && (keyCode === TAB || keyCode === ESCAPE)) {
                this.closeDropdown();
                return;
            }
            if (this.isOpen && keyCode === UP_ARROW) {
                this.setPreviousItemActive();
                event.preventDefault();
                event.stopPropagation();
            }
            if (this.isOpen && keyCode === DOWN_ARROW) {
                this.setNextItemActive();
                event.preventDefault();
                event.stopPropagation();
            }
        }
    }
    handleClick() {
        this.resetDropdown();
    }
    bindTriggerEvents() {
        this.trigger.onInput.subscribe((e) => this.handleInput(e));
        this.trigger.onKeydown.subscribe((e) => this.handleKeydown(e));
        this.trigger.onClick.subscribe(() => this.handleClick());
    }
    suggestionsFilter(value, emit) {
        const suggestions = value.substring(1);
        if (this.previousValue === value) {
            return;
        }
        this.previousValue = value;
        if (emit) {
            this.nzOnSearchChange.emit({
                value: this.cursorMention.substring(1),
                prefix: this.cursorMention[0]
            });
        }
        const searchValue = suggestions.toLowerCase();
        this.filteredSuggestions = this.nzSuggestions.filter(suggestion => this.nzValueWith(suggestion)
            .toLowerCase()
            .includes(searchValue));
    }
    resetDropdown(emit = true) {
        this.resetCursorMention();
        if (typeof this.cursorMention !== 'string' || !this.canOpen()) {
            this.closeDropdown();
            return;
        }
        this.suggestionsFilter(this.cursorMention, emit);
        const activeIndex = this.filteredSuggestions.indexOf(this.cursorMention.substring(1));
        this.activeIndex = activeIndex >= 0 ? activeIndex : 0;
        this.openDropdown();
    }
    setNextItemActive() {
        this.activeIndex = this.activeIndex + 1 <= this.filteredSuggestions.length - 1 ? this.activeIndex + 1 : 0;
        this.changeDetectorRef.markForCheck();
    }
    setPreviousItemActive() {
        this.activeIndex = this.activeIndex - 1 < 0 ? this.filteredSuggestions.length - 1 : this.activeIndex - 1;
        this.changeDetectorRef.markForCheck();
    }
    canOpen() {
        const element = this.triggerNativeElement;
        return !element.readOnly && !element.disabled;
    }
    resetCursorMention() {
        const value = this.triggerNativeElement.value.replace(/[\r\n]/g, ' ') || '';
        const selectionStart = this.triggerNativeElement.selectionStart;
        const prefix = typeof this.nzPrefix === 'string' ? [this.nzPrefix] : this.nzPrefix;
        let i = prefix.length;
        while (i >= 0) {
            const startPos = value.lastIndexOf(prefix[i], selectionStart);
            const endPos = value.indexOf(' ', selectionStart) > -1 ? value.indexOf(' ', selectionStart) : value.length;
            const mention = value.substring(startPos, endPos);
            if ((startPos > 0 && value[startPos - 1] !== ' ') || startPos < 0 || mention.includes(prefix[i], 1) || mention.includes(' ')) {
                this.cursorMention = null;
                this.cursorMentionStart = -1;
                this.cursorMentionEnd = -1;
            }
            else {
                this.cursorMention = mention;
                this.cursorMentionStart = startPos;
                this.cursorMentionEnd = endPos;
                return;
            }
            i--;
        }
    }
    updatePositions() {
        const coordinates = getCaretCoordinates(this.triggerNativeElement, this.cursorMentionStart);
        const top = coordinates.top -
            this.triggerNativeElement.getBoundingClientRect().height -
            this.triggerNativeElement.scrollTop +
            (this.nzPlacement === 'bottom' ? coordinates.height - 6 : -6);
        const left = coordinates.left - this.triggerNativeElement.scrollLeft;
        this.positionStrategy.withDefaultOffsetX(left).withDefaultOffsetY(top);
        if (this.nzPlacement === 'bottom') {
            this.positionStrategy.withPositions([...DEFAULT_MENTION_BOTTOM_POSITIONS]);
        }
        if (this.nzPlacement === 'top') {
            this.positionStrategy.withPositions([...DEFAULT_MENTION_TOP_POSITIONS]);
        }
        this.positionStrategy.apply();
    }
    subscribeOverlayBackdropClick() {
        return merge(fromEvent(this.ngDocument, 'click'), fromEvent(this.ngDocument, 'touchend')).subscribe((event) => {
            const clickTarget = event.target;
            if (this.isOpen &&
                clickTarget !== this.trigger.el.nativeElement &&
                !!this.overlayRef &&
                !this.overlayRef.overlayElement.contains(clickTarget)) {
                this.closeDropdown();
            }
        });
    }
    attachOverlay() {
        if (!this.overlayRef) {
            this.portal = new TemplatePortal(this.suggestionsTemp, this.viewContainerRef);
            this.overlayRef = this.overlay.create(this.getOverlayConfig());
        }
        if (this.overlayRef && !this.overlayRef.hasAttached()) {
            this.overlayRef.attach(this.portal);
            this.overlayBackdropClickSubscription = this.subscribeOverlayBackdropClick();
        }
        this.updatePositions();
    }
    getOverlayConfig() {
        return new OverlayConfig({
            positionStrategy: this.getOverlayPosition(),
            scrollStrategy: this.overlay.scrollStrategies.reposition()
        });
    }
    getOverlayPosition() {
        const positions = [
            new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' })
        ];
        this.positionStrategy = this.overlay
            .position()
            .flexibleConnectedTo(this.trigger.el)
            .withPositions(positions)
            .withFlexibleDimensions(false)
            .withPush(false);
        return this.positionStrategy;
    }
}
/** @nocollapse */ NzMentionComponent.ɵfac = function NzMentionComponent_Factory(t) { return new (t || NzMentionComponent)(ɵɵdirectiveInject(DOCUMENT, 8), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Overlay), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(NzMentionService)); };
/** @nocollapse */ NzMentionComponent.ɵcmp = ɵɵdefineComponent({ type: NzMentionComponent, selectors: [["nz-mention"]], contentQueries: function NzMentionComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵɵcontentQuery(dirIndex, NzMentionSuggestionDirective, true, TemplateRef);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.suggestionChild = _t.first);
    } }, viewQuery: function NzMentionComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(TemplateRef, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.suggestionsTemp = _t.first);
    } }, inputs: { nzValueWith: "nzValueWith", nzPrefix: "nzPrefix", nzLoading: "nzLoading", nzNotFoundContent: "nzNotFoundContent", nzPlacement: "nzPlacement", nzSuggestions: "nzSuggestions" }, outputs: { nzOnSelect: "nzOnSelect", nzOnSearchChange: "nzOnSearchChange" }, exportAs: ["nzMention"], features: [ɵɵProvidersFeature([NzMentionService]), ɵɵNgOnChangesFeature()], ngContentSelectors: _c1, decls: 3, vars: 0, consts: [["suggestions", ""], [1, "ant-mention-dropdown"], ["class", "ant-mention-dropdown-item", 3, "focus", "mousedown", "click", 4, "ngFor", "ngForOf"], ["class", "ant-mention-dropdown-notfound ant-mention-dropdown-item", 4, "ngIf"], [1, "ant-mention-dropdown-item", 3, "mousedown", "click"], [4, "ngIf", "ngIfElse"], ["defaultSuggestion", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-mention-dropdown-notfound", "ant-mention-dropdown-item"], [4, "ngIf"], ["nz-icon", "", "nzType", "loading"]], template: function NzMentionComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
        ɵɵtemplate(1, NzMentionComponent_ng_template_1_Template, 3, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    } }, directives: [NgForOf, NgIf, NgTemplateOutlet, NzIconDirective], styles: [".ant-mention-dropdown[_ngcontent-%COMP%] {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }"], changeDetection: 0 });
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzMentionComponent.prototype, "nzLoading", void 0);
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzMentionComponent, [{
        type: Component,
        args: [{
                selector: 'nz-mention',
                exportAs: 'nzMention',
                templateUrl: './nz-mention.component.html',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [NzMentionService],
                styles: [
                    `
      .ant-mention-dropdown {
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
    }], function () { return [{ type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: ChangeDetectorRef }, { type: Overlay }, { type: ViewContainerRef }, { type: NzMentionService }]; }, { nzValueWith: [{
            type: Input
        }], nzPrefix: [{
            type: Input
        }], nzLoading: [{
            type: Input
        }], nzNotFoundContent: [{
            type: Input
        }], nzPlacement: [{
            type: Input
        }], nzSuggestions: [{
            type: Input
        }], nzOnSelect: [{
            type: Output
        }], nzOnSearchChange: [{
            type: Output
        }], suggestionsTemp: [{
            type: ViewChild,
            args: [TemplateRef, { static: false }]
        }], suggestionChild: [{
            type: ContentChild,
            args: [NzMentionSuggestionDirective, { static: false, read: TemplateRef }]
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const COMPONENTS = [NzMentionComponent, NzMentionTriggerDirective, NzMentionSuggestionDirective];
class NzMentionModule {
}
/** @nocollapse */ NzMentionModule.ɵmod = ɵɵdefineNgModule({ type: NzMentionModule });
/** @nocollapse */ NzMentionModule.ɵinj = ɵɵdefineInjector({ factory: function NzMentionModule_Factory(t) { return new (t || NzMentionModule)(); }, imports: [[CommonModule, FormsModule, OverlayModule, NzIconModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzMentionModule, { declarations: [NzMentionComponent, NzMentionTriggerDirective, NzMentionSuggestionDirective], imports: [CommonModule, FormsModule, OverlayModule, NzIconModule], exports: [NzMentionComponent, NzMentionTriggerDirective, NzMentionSuggestionDirective] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzMentionModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule, OverlayModule, NzIconModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS]
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

export { NZ_MENTION_TRIGGER_ACCESSOR, NzMentionComponent, NzMentionModule, NzMentionService, NzMentionSuggestionDirective, NzMentionTriggerDirective };
//# sourceMappingURL=ng-zorro-antd-mention.js.map

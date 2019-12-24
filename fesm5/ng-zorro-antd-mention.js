import { __spread, __decorate, __metadata } from 'tslib';
import { OverlayConfig, ConnectionPositionPair, Overlay, OverlayModule } from '@angular/cdk/overlay';
import { DOCUMENT, NgForOf, NgIf, NgTemplateOutlet, CommonModule } from '@angular/common';
import { ɵɵdefineDirective, ɵsetClassMetadata, Directive, ɵɵdefineInjectable, Injectable, forwardRef, EventEmitter, ɵɵdirectiveInject, ElementRef, ɵɵlistener, ɵɵelementHostAttrs, ɵɵProvidersFeature, ɵɵelementContainer, ɵɵelementContainerStart, ɵɵtemplate, ɵɵelementContainerEnd, ɵɵnextContext, ɵɵadvance, ɵɵproperty, ɵɵpureFunction1, ɵɵtext, ɵɵtextInterpolate, ɵɵgetCurrentView, ɵɵelementStart, ɵɵrestoreView, ɵɵtemplateRefExtractor, ɵɵelementEnd, ɵɵreference, ɵɵclassProp, ɵɵelement, ChangeDetectorRef, ViewContainerRef, ɵɵdefineComponent, ɵɵcontentQuery, TemplateRef, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵviewQuery, ɵɵNgOnChangesFeature, ɵɵprojectionDef, ɵɵprojection, Component, ChangeDetectionStrategy, Optional, Inject, Input, Output, ViewChild, ContentChild, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import { Subject, merge, fromEvent } from 'rxjs';
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
var NzMentionSuggestionDirective = /** @class */ (function () {
    function NzMentionSuggestionDirective() {
    }
    /** @nocollapse */ NzMentionSuggestionDirective.ɵfac = function NzMentionSuggestionDirective_Factory(t) { return new (t || NzMentionSuggestionDirective)(); };
    /** @nocollapse */ NzMentionSuggestionDirective.ɵdir = ɵɵdefineDirective({ type: NzMentionSuggestionDirective, selectors: [["", "nzMentionSuggestion", ""]], exportAs: ["nzMentionSuggestion"] });
    return NzMentionSuggestionDirective;
}());
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
var NzMentionService = /** @class */ (function () {
    function NzMentionService() {
        this.triggerChange$ = new Subject();
    }
    NzMentionService.prototype.triggerChanged = function () {
        return this.triggerChange$.asObservable();
    };
    NzMentionService.prototype.registerTrigger = function (trigger) {
        if (this.trigger !== trigger) {
            this.trigger = trigger;
            this.triggerChange$.next(trigger);
        }
    };
    NzMentionService.prototype.ngOnDestroy = function () {
        this.triggerChange$.complete();
    };
    /** @nocollapse */ NzMentionService.ɵfac = function NzMentionService_Factory(t) { return new (t || NzMentionService)(); };
    /** @nocollapse */ NzMentionService.ɵprov = ɵɵdefineInjectable({ token: NzMentionService, factory: NzMentionService.ɵfac });
    return NzMentionService;
}());
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
var _c0 = ["autocomplete", "off"];
var NZ_MENTION_TRIGGER_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return NzMentionTriggerDirective; }),
    multi: true
};
var NzMentionTriggerDirective = /** @class */ (function () {
    function NzMentionTriggerDirective(el, nzMentionService) {
        this.el = el;
        this.nzMentionService = nzMentionService;
        this.onFocusin = new EventEmitter();
        this.onBlur = new EventEmitter();
        this.onInput = new EventEmitter();
        this.onKeydown = new EventEmitter();
        this.onClick = new EventEmitter();
    }
    NzMentionTriggerDirective.prototype.completeEvents = function () {
        this.onFocusin.complete();
        this.onBlur.complete();
        this.onInput.complete();
        this.onKeydown.complete();
        this.onClick.complete();
    };
    NzMentionTriggerDirective.prototype.focus = function (caretPos) {
        this.el.nativeElement.focus();
        this.el.nativeElement.setSelectionRange(caretPos, caretPos);
    };
    NzMentionTriggerDirective.prototype.insertMention = function (mention) {
        var value = this.el.nativeElement.value;
        var insertValue = mention.mention.trim() + ' ';
        var newValue = [value.slice(0, mention.startPos + 1), insertValue, value.slice(mention.endPos, value.length)].join('');
        this.el.nativeElement.value = newValue;
        this.focus(mention.startPos + insertValue.length + 1);
        this.onChange(newValue);
        this.value = newValue;
    };
    NzMentionTriggerDirective.prototype.writeValue = function (value) {
        this.value = value;
        if (typeof value === 'string') {
            this.el.nativeElement.value = value;
        }
        else {
            this.el.nativeElement.value = '';
        }
    };
    NzMentionTriggerDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    NzMentionTriggerDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    NzMentionTriggerDirective.prototype.ngAfterViewInit = function () {
        this.nzMentionService.registerTrigger(this);
    };
    NzMentionTriggerDirective.prototype.ngOnDestroy = function () {
        this.completeEvents();
    };
    /** @nocollapse */ NzMentionTriggerDirective.ɵfac = function NzMentionTriggerDirective_Factory(t) { return new (t || NzMentionTriggerDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NzMentionService)); };
    /** @nocollapse */ NzMentionTriggerDirective.ɵdir = ɵɵdefineDirective({ type: NzMentionTriggerDirective, selectors: [["input", "nzMentionTrigger", ""], ["textarea", "nzMentionTrigger", ""]], hostBindings: function NzMentionTriggerDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            ɵɵlistener("focusin", function NzMentionTriggerDirective_focusin_HostBindingHandler($event) { return ctx.onFocusin.emit(); })("blur", function NzMentionTriggerDirective_blur_HostBindingHandler($event) { return ctx.onBlur.emit(); })("input", function NzMentionTriggerDirective_input_HostBindingHandler($event) { return ctx.onInput.emit($event); })("keydown", function NzMentionTriggerDirective_keydown_HostBindingHandler($event) { return ctx.onKeydown.emit($event); })("click", function NzMentionTriggerDirective_click_HostBindingHandler($event) { return ctx.onClick.emit($event); });
            ɵɵelementHostAttrs(_c0);
        } }, exportAs: ["nzMentionTrigger"], features: [ɵɵProvidersFeature([NZ_MENTION_TRIGGER_ACCESSOR])] });
    return NzMentionTriggerDirective;
}());
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
var _c0$1 = function (a0) { return { $implicit: a0 }; };
function NzMentionComponent_ng_template_1_li_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzMentionComponent_ng_template_1_li_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 7);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var suggestion_r587 = ɵɵnextContext().$implicit;
    var ctx_r589 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r589.suggestionTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c0$1, suggestion_r587));
} }
function NzMentionComponent_ng_template_1_li_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0);
} if (rf & 2) {
    var suggestion_r587 = ɵɵnextContext().$implicit;
    var ctx_r591 = ɵɵnextContext(2);
    ɵɵtextInterpolate(ctx_r591.nzValueWith(suggestion_r587));
} }
function NzMentionComponent_ng_template_1_li_1_Template(rf, ctx) { if (rf & 1) {
    var _r596 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 4);
    ɵɵlistener("mousedown", function NzMentionComponent_ng_template_1_li_1_Template_li_mousedown_0_listener($event) { ɵɵrestoreView(_r596); return $event.preventDefault(); })("click", function NzMentionComponent_ng_template_1_li_1_Template_li_click_0_listener($event) { ɵɵrestoreView(_r596); var suggestion_r587 = ctx.$implicit; var ctx_r597 = ɵɵnextContext(2); return ctx_r597.selectSuggestion(suggestion_r587); });
    ɵɵtemplate(1, NzMentionComponent_ng_template_1_li_1_ng_container_1_Template, 2, 4, "ng-container", 5);
    ɵɵtemplate(2, NzMentionComponent_ng_template_1_li_1_ng_template_2_Template, 1, 1, "ng-template", null, 6, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
} if (rf & 2) {
    var i_r588 = ctx.index;
    var _r590 = ɵɵreference(3);
    var ctx_r585 = ɵɵnextContext(2);
    ɵɵclassProp("focus", i_r588 === ctx_r585.activeIndex);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r585.suggestionTemplate)("ngIfElse", _r590);
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
    var ctx_r599 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r599.nzNotFoundContent);
} }
function NzMentionComponent_ng_template_1_li_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li", 8);
    ɵɵtemplate(1, NzMentionComponent_ng_template_1_li_2_span_1_Template, 2, 0, "span", 9);
    ɵɵtemplate(2, NzMentionComponent_ng_template_1_li_2_span_2_Template, 2, 1, "span", 9);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r586 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r586.nzLoading);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r586.nzLoading);
} }
function NzMentionComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "ul", 1);
    ɵɵtemplate(1, NzMentionComponent_ng_template_1_li_1_Template, 4, 3, "li", 2);
    ɵɵtemplate(2, NzMentionComponent_ng_template_1_li_2_Template, 3, 2, "li", 3);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r584 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r584.filteredSuggestions);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r584.filteredSuggestions.length === 0);
} }
var _c1 = ["*"];
var NzMentionComponent = /** @class */ (function () {
    function NzMentionComponent(ngDocument, // tslint:disable-line:no-any
    changeDetectorRef, overlay, viewContainerRef, nzMentionService) {
        this.ngDocument = ngDocument;
        this.changeDetectorRef = changeDetectorRef;
        this.overlay = overlay;
        this.viewContainerRef = viewContainerRef;
        this.nzMentionService = nzMentionService;
        this.nzValueWith = function (value) { return value; }; // tslint:disable-line:no-any
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
    Object.defineProperty(NzMentionComponent.prototype, "suggestionChild", {
        set: function (value) {
            if (value) {
                this.suggestionTemplate = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzMentionComponent.prototype, "triggerNativeElement", {
        get: function () {
            return this.trigger.el.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    NzMentionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nzMentionService.triggerChanged().subscribe(function (trigger) {
            _this.trigger = trigger;
            _this.bindTriggerEvents();
            _this.closeDropdown();
            _this.overlayRef = null;
        });
    };
    NzMentionComponent.prototype.ngOnChanges = function (changes) {
        if (changes.hasOwnProperty('nzSuggestions')) {
            if (this.isOpen) {
                this.previousValue = null;
                this.activeIndex = -1;
                this.resetDropdown(false);
            }
        }
    };
    NzMentionComponent.prototype.ngOnDestroy = function () {
        this.closeDropdown();
    };
    NzMentionComponent.prototype.closeDropdown = function () {
        if (this.overlayRef && this.overlayRef.hasAttached()) {
            this.overlayRef.detach();
            this.overlayBackdropClickSubscription.unsubscribe();
            this.isOpen = false;
            this.changeDetectorRef.markForCheck();
        }
    };
    NzMentionComponent.prototype.openDropdown = function () {
        this.attachOverlay();
        this.isOpen = true;
        this.changeDetectorRef.markForCheck();
    };
    NzMentionComponent.prototype.getMentions = function () {
        return this.trigger ? getMentions(this.trigger.value, this.nzPrefix) : [];
    };
    NzMentionComponent.prototype.selectSuggestion = function (suggestion) {
        var value = this.nzValueWith(suggestion);
        this.trigger.insertMention({
            mention: value,
            startPos: this.cursorMentionStart,
            endPos: this.cursorMentionEnd
        });
        this.nzOnSelect.emit(suggestion);
        this.closeDropdown();
        this.activeIndex = -1;
    };
    NzMentionComponent.prototype.handleInput = function (event) {
        var target = event.target;
        this.trigger.onChange(target.value);
        this.trigger.value = target.value;
        this.resetDropdown();
    };
    NzMentionComponent.prototype.handleKeydown = function (event) {
        var keyCode = event.keyCode;
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
    };
    NzMentionComponent.prototype.handleClick = function () {
        this.resetDropdown();
    };
    NzMentionComponent.prototype.bindTriggerEvents = function () {
        var _this = this;
        this.trigger.onInput.subscribe(function (e) { return _this.handleInput(e); });
        this.trigger.onKeydown.subscribe(function (e) { return _this.handleKeydown(e); });
        this.trigger.onClick.subscribe(function () { return _this.handleClick(); });
    };
    NzMentionComponent.prototype.suggestionsFilter = function (value, emit) {
        var _this = this;
        var suggestions = value.substring(1);
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
        var searchValue = suggestions.toLowerCase();
        this.filteredSuggestions = this.nzSuggestions.filter(function (suggestion) {
            return _this.nzValueWith(suggestion)
                .toLowerCase()
                .includes(searchValue);
        });
    };
    NzMentionComponent.prototype.resetDropdown = function (emit) {
        if (emit === void 0) { emit = true; }
        this.resetCursorMention();
        if (typeof this.cursorMention !== 'string' || !this.canOpen()) {
            this.closeDropdown();
            return;
        }
        this.suggestionsFilter(this.cursorMention, emit);
        var activeIndex = this.filteredSuggestions.indexOf(this.cursorMention.substring(1));
        this.activeIndex = activeIndex >= 0 ? activeIndex : 0;
        this.openDropdown();
    };
    NzMentionComponent.prototype.setNextItemActive = function () {
        this.activeIndex = this.activeIndex + 1 <= this.filteredSuggestions.length - 1 ? this.activeIndex + 1 : 0;
        this.changeDetectorRef.markForCheck();
    };
    NzMentionComponent.prototype.setPreviousItemActive = function () {
        this.activeIndex = this.activeIndex - 1 < 0 ? this.filteredSuggestions.length - 1 : this.activeIndex - 1;
        this.changeDetectorRef.markForCheck();
    };
    NzMentionComponent.prototype.canOpen = function () {
        var element = this.triggerNativeElement;
        return !element.readOnly && !element.disabled;
    };
    NzMentionComponent.prototype.resetCursorMention = function () {
        var value = this.triggerNativeElement.value.replace(/[\r\n]/g, ' ') || '';
        var selectionStart = this.triggerNativeElement.selectionStart;
        var prefix = typeof this.nzPrefix === 'string' ? [this.nzPrefix] : this.nzPrefix;
        var i = prefix.length;
        while (i >= 0) {
            var startPos = value.lastIndexOf(prefix[i], selectionStart);
            var endPos = value.indexOf(' ', selectionStart) > -1 ? value.indexOf(' ', selectionStart) : value.length;
            var mention = value.substring(startPos, endPos);
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
    };
    NzMentionComponent.prototype.updatePositions = function () {
        var coordinates = getCaretCoordinates(this.triggerNativeElement, this.cursorMentionStart);
        var top = coordinates.top -
            this.triggerNativeElement.getBoundingClientRect().height -
            this.triggerNativeElement.scrollTop +
            (this.nzPlacement === 'bottom' ? coordinates.height - 6 : -6);
        var left = coordinates.left - this.triggerNativeElement.scrollLeft;
        this.positionStrategy.withDefaultOffsetX(left).withDefaultOffsetY(top);
        if (this.nzPlacement === 'bottom') {
            this.positionStrategy.withPositions(__spread(DEFAULT_MENTION_BOTTOM_POSITIONS));
        }
        if (this.nzPlacement === 'top') {
            this.positionStrategy.withPositions(__spread(DEFAULT_MENTION_TOP_POSITIONS));
        }
        this.positionStrategy.apply();
    };
    NzMentionComponent.prototype.subscribeOverlayBackdropClick = function () {
        var _this = this;
        return merge(fromEvent(this.ngDocument, 'click'), fromEvent(this.ngDocument, 'touchend')).subscribe(function (event) {
            var clickTarget = event.target;
            if (_this.isOpen &&
                clickTarget !== _this.trigger.el.nativeElement &&
                !!_this.overlayRef &&
                !_this.overlayRef.overlayElement.contains(clickTarget)) {
                _this.closeDropdown();
            }
        });
    };
    NzMentionComponent.prototype.attachOverlay = function () {
        if (!this.overlayRef) {
            this.portal = new TemplatePortal(this.suggestionsTemp, this.viewContainerRef);
            this.overlayRef = this.overlay.create(this.getOverlayConfig());
        }
        if (this.overlayRef && !this.overlayRef.hasAttached()) {
            this.overlayRef.attach(this.portal);
            this.overlayBackdropClickSubscription = this.subscribeOverlayBackdropClick();
        }
        this.updatePositions();
    };
    NzMentionComponent.prototype.getOverlayConfig = function () {
        return new OverlayConfig({
            positionStrategy: this.getOverlayPosition(),
            scrollStrategy: this.overlay.scrollStrategies.reposition()
        });
    };
    NzMentionComponent.prototype.getOverlayPosition = function () {
        var positions = [
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
    };
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
    return NzMentionComponent;
}());
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
                    "\n      .ant-mention-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "
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

var COMPONENTS = [NzMentionComponent, NzMentionTriggerDirective, NzMentionSuggestionDirective];
var NzMentionModule = /** @class */ (function () {
    function NzMentionModule() {
    }
    /** @nocollapse */ NzMentionModule.ɵmod = ɵɵdefineNgModule({ type: NzMentionModule });
    /** @nocollapse */ NzMentionModule.ɵinj = ɵɵdefineInjector({ factory: function NzMentionModule_Factory(t) { return new (t || NzMentionModule)(); }, imports: [[CommonModule, FormsModule, OverlayModule, NzIconModule]] });
    return NzMentionModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzMentionModule, { declarations: [NzMentionComponent, NzMentionTriggerDirective, NzMentionSuggestionDirective], imports: [CommonModule, FormsModule, OverlayModule, NzIconModule], exports: [NzMentionComponent, NzMentionTriggerDirective, NzMentionSuggestionDirective] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzMentionModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule, OverlayModule, NzIconModule],
                declarations: __spread(COMPONENTS),
                exports: __spread(COMPONENTS)
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

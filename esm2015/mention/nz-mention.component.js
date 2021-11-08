/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { DOWN_ARROW, ENTER, ESCAPE, LEFT_ARROW, RIGHT_ARROW, TAB, UP_ARROW } from '@angular/cdk/keycodes';
import { ConnectionPositionPair, Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, EventEmitter, Inject, Input, Optional, Output, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { fromEvent, merge } from 'rxjs';
import { getCaretCoordinates, getMentions, DEFAULT_MENTION_BOTTOM_POSITIONS, DEFAULT_MENTION_TOP_POSITIONS, InputBoolean } from 'ng-zorro-antd/core';
import { NzMentionSuggestionDirective } from './nz-mention-suggestions';
import { NzMentionService } from './nz-mention.service';
/**
 * @record
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/overlay';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from 'ng-zorro-antd/icon';

function NzMentionComponent_ng_template_1_li_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c0 = function (a0) { return { $implicit: a0 }; };
function NzMentionComponent_ng_template_1_li_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzMentionComponent_ng_template_1_li_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 7);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const suggestion_r4 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r6.suggestionTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c0, suggestion_r4));
} }
function NzMentionComponent_ng_template_1_li_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtext(0);
} if (rf & 2) {
    const suggestion_r4 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r8 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r8.nzValueWith(suggestion_r4));
} }
function NzMentionComponent_ng_template_1_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 4);
    ɵngcc0.ɵɵlistener("mousedown", function NzMentionComponent_ng_template_1_li_1_Template_li_mousedown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); return $event.preventDefault(); })("click", function NzMentionComponent_ng_template_1_li_1_Template_li_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r13); const suggestion_r4 = ctx.$implicit; const ctx_r14 = ɵngcc0.ɵɵnextContext(2); return ctx_r14.selectSuggestion(suggestion_r4); });
    ɵngcc0.ɵɵtemplate(1, NzMentionComponent_ng_template_1_li_1_ng_container_1_Template, 2, 4, "ng-container", 5);
    ɵngcc0.ɵɵtemplate(2, NzMentionComponent_ng_template_1_li_1_ng_template_2_Template, 1, 1, "ng-template", null, 6, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r5 = ctx.index;
    const _r7 = ɵngcc0.ɵɵreference(3);
    const ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassProp("focus", i_r5 === ctx_r2.activeIndex);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.suggestionTemplate)("ngIfElse", _r7);
} }
function NzMentionComponent_ng_template_1_li_2_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵelement(1, "i", 10);
    ɵngcc0.ɵɵelementEnd();
} }
function NzMentionComponent_ng_template_1_li_2_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r16 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r16.nzNotFoundContent);
} }
function NzMentionComponent_ng_template_1_li_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 8);
    ɵngcc0.ɵɵtemplate(1, NzMentionComponent_ng_template_1_li_2_span_1_Template, 2, 0, "span", 9);
    ɵngcc0.ɵɵtemplate(2, NzMentionComponent_ng_template_1_li_2_span_2_Template, 2, 1, "span", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.nzLoading);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r3.nzLoading);
} }
function NzMentionComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "ul", 1);
    ɵngcc0.ɵɵtemplate(1, NzMentionComponent_ng_template_1_li_1_Template, 4, 4, "li", 2);
    ɵngcc0.ɵɵtemplate(2, NzMentionComponent_ng_template_1_li_2_Template, 3, 2, "li", 3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r1.filteredSuggestions);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.filteredSuggestions.length === 0);
} }
const _c1 = ["*"];
export function MentionOnSearchTypes() { }
if (false) {
    /** @type {?} */
    MentionOnSearchTypes.prototype.value;
    /** @type {?} */
    MentionOnSearchTypes.prototype.prefix;
}
/**
 * @record
 */
export function Mention() { }
if (false) {
    /** @type {?} */
    Mention.prototype.startPos;
    /** @type {?} */
    Mention.prototype.endPos;
    /** @type {?} */
    Mention.prototype.mention;
}
export class NzMentionComponent {
    /**
     * @param {?} ngDocument
     * @param {?} changeDetectorRef
     * @param {?} overlay
     * @param {?} viewContainerRef
     * @param {?} nzMentionService
     */
    constructor(ngDocument, // tslint:disable-line:no-any
    changeDetectorRef, overlay, viewContainerRef, nzMentionService) {
        this.ngDocument = ngDocument;
        this.changeDetectorRef = changeDetectorRef;
        this.overlay = overlay;
        this.viewContainerRef = viewContainerRef;
        this.nzMentionService = nzMentionService;
        this.nzValueWith = (/**
         * @param {?} value
         * @return {?}
         */
        value => value); // tslint:disable-line:no-any
        // tslint:disable-line:no-any
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
        // tslint:disable-line:no-any
        this.activeIndex = -1;
        this.previousValue = null;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set suggestionChild(value) {
        if (value) {
            this.suggestionTemplate = value;
        }
    }
    /**
     * @private
     * @return {?}
     */
    get triggerNativeElement() {
        return this.trigger.el.nativeElement;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.nzMentionService.triggerChanged().subscribe((/**
         * @param {?} trigger
         * @return {?}
         */
        trigger => {
            this.trigger = trigger;
            this.bindTriggerEvents();
            this.closeDropdown();
            this.overlayRef = null;
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('nzSuggestions')) {
            if (this.isOpen) {
                this.previousValue = null;
                this.activeIndex = -1;
                this.resetDropdown(false);
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.closeDropdown();
    }
    /**
     * @return {?}
     */
    closeDropdown() {
        if (this.overlayRef && this.overlayRef.hasAttached()) {
            this.overlayRef.detach();
            this.overlayBackdropClickSubscription.unsubscribe();
            this.isOpen = false;
            this.changeDetectorRef.markForCheck();
        }
    }
    /**
     * @return {?}
     */
    openDropdown() {
        this.attachOverlay();
        this.isOpen = true;
        this.changeDetectorRef.markForCheck();
    }
    /**
     * @return {?}
     */
    getMentions() {
        return this.trigger ? getMentions(this.trigger.value, this.nzPrefix) : [];
    }
    /**
     * @param {?} suggestion
     * @return {?}
     */
    selectSuggestion(suggestion) {
        /** @type {?} */
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
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    handleInput(event) {
        /** @type {?} */
        const target = (/** @type {?} */ (event.target));
        this.trigger.onChange(target.value);
        this.trigger.value = target.value;
        this.resetDropdown();
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    handleKeydown(event) {
        /** @type {?} */
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
    /**
     * @private
     * @return {?}
     */
    handleClick() {
        this.resetDropdown();
    }
    /**
     * @private
     * @return {?}
     */
    bindTriggerEvents() {
        this.trigger.onInput.subscribe((/**
         * @param {?} e
         * @return {?}
         */
        (e) => this.handleInput(e)));
        this.trigger.onKeydown.subscribe((/**
         * @param {?} e
         * @return {?}
         */
        (e) => this.handleKeydown(e)));
        this.trigger.onClick.subscribe((/**
         * @return {?}
         */
        () => this.handleClick()));
    }
    /**
     * @private
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    suggestionsFilter(value, emit) {
        /** @type {?} */
        const suggestions = value.substring(1);
        if (this.previousValue === value) {
            return;
        }
        this.previousValue = value;
        if (emit) {
            this.nzOnSearchChange.emit({
                value: (/** @type {?} */ (this.cursorMention)).substring(1),
                prefix: (/** @type {?} */ (this.cursorMention))[0]
            });
        }
        /** @type {?} */
        const searchValue = suggestions.toLowerCase();
        this.filteredSuggestions = this.nzSuggestions.filter((/**
         * @param {?} suggestion
         * @return {?}
         */
        suggestion => this.nzValueWith(suggestion)
            .toLowerCase()
            .includes(searchValue)));
    }
    /**
     * @private
     * @param {?=} emit
     * @return {?}
     */
    resetDropdown(emit = true) {
        this.resetCursorMention();
        if (typeof this.cursorMention !== 'string' || !this.canOpen()) {
            this.closeDropdown();
            return;
        }
        this.suggestionsFilter(this.cursorMention, emit);
        /** @type {?} */
        const activeIndex = this.filteredSuggestions.indexOf(this.cursorMention.substring(1));
        this.activeIndex = activeIndex >= 0 ? activeIndex : 0;
        this.openDropdown();
    }
    /**
     * @private
     * @return {?}
     */
    setNextItemActive() {
        this.activeIndex = this.activeIndex + 1 <= this.filteredSuggestions.length - 1 ? this.activeIndex + 1 : 0;
        this.changeDetectorRef.markForCheck();
    }
    /**
     * @private
     * @return {?}
     */
    setPreviousItemActive() {
        this.activeIndex = this.activeIndex - 1 < 0 ? this.filteredSuggestions.length - 1 : this.activeIndex - 1;
        this.changeDetectorRef.markForCheck();
    }
    /**
     * @private
     * @return {?}
     */
    canOpen() {
        /** @type {?} */
        const element = this.triggerNativeElement;
        return !element.readOnly && !element.disabled;
    }
    /**
     * @private
     * @return {?}
     */
    resetCursorMention() {
        /** @type {?} */
        const value = this.triggerNativeElement.value.replace(/[\r\n]/g, ' ') || '';
        /** @type {?} */
        const selectionStart = (/** @type {?} */ (this.triggerNativeElement.selectionStart));
        /** @type {?} */
        const prefix = typeof this.nzPrefix === 'string' ? [this.nzPrefix] : this.nzPrefix;
        /** @type {?} */
        let i = prefix.length;
        while (i >= 0) {
            /** @type {?} */
            const startPos = value.lastIndexOf(prefix[i], selectionStart);
            /** @type {?} */
            const endPos = value.indexOf(' ', selectionStart) > -1 ? value.indexOf(' ', selectionStart) : value.length;
            /** @type {?} */
            const mention = value.substring(startPos, endPos);
            if ((startPos > 0 && value[startPos - 1] !== ' ') ||
                startPos < 0 ||
                mention.includes(prefix[i], 1) ||
                mention.includes(' ')) {
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
    /**
     * @private
     * @return {?}
     */
    updatePositions() {
        /** @type {?} */
        const coordinates = getCaretCoordinates(this.triggerNativeElement, this.cursorMentionStart);
        /** @type {?} */
        const top = coordinates.top -
            this.triggerNativeElement.getBoundingClientRect().height -
            this.triggerNativeElement.scrollTop +
            (this.nzPlacement === 'bottom' ? coordinates.height - 6 : -6);
        /** @type {?} */
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
    /**
     * @private
     * @return {?}
     */
    subscribeOverlayBackdropClick() {
        return merge(fromEvent(this.ngDocument, 'click'), fromEvent(this.ngDocument, 'touchend')).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            /** @type {?} */
            const clickTarget = (/** @type {?} */ (event.target));
            if (this.isOpen &&
                clickTarget !== this.trigger.el.nativeElement &&
                (!!this.overlayRef && !this.overlayRef.overlayElement.contains(clickTarget))) {
                this.closeDropdown();
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
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
    /**
     * @private
     * @return {?}
     */
    getOverlayConfig() {
        return new OverlayConfig({
            positionStrategy: this.getOverlayPosition(),
            scrollStrategy: this.overlay.scrollStrategies.reposition()
        });
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
            .flexibleConnectedTo(this.trigger.el)
            .withPositions(positions)
            .withFlexibleDimensions(false)
            .withPush(false);
        return this.positionStrategy;
    }
}
NzMentionComponent.ɵfac = function NzMentionComponent_Factory(t) { return new (t || NzMentionComponent)(ɵngcc0.ɵɵdirectiveInject(DOCUMENT, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Overlay), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(NzMentionService)); };
NzMentionComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzMentionComponent, selectors: [["nz-mention"]], contentQueries: function NzMentionComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzMentionSuggestionDirective, true, TemplateRef);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.suggestionChild = _t.first);
    } }, viewQuery: function NzMentionComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(TemplateRef, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.suggestionsTemp = _t.first);
    } }, inputs: { nzValueWith: "nzValueWith", nzPrefix: "nzPrefix", nzLoading: "nzLoading", nzNotFoundContent: "nzNotFoundContent", nzPlacement: "nzPlacement", nzSuggestions: "nzSuggestions" }, outputs: { nzOnSelect: "nzOnSelect", nzOnSearchChange: "nzOnSearchChange" }, exportAs: ["nzMention"], features: [ɵngcc0.ɵɵProvidersFeature([NzMentionService]), ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c1, decls: 3, vars: 0, consts: [["suggestions", ""], [1, "ant-mention-dropdown"], ["class", "ant-mention-dropdown-item", 3, "focus", "mousedown", "click", 4, "ngFor", "ngForOf"], ["class", "ant-mention-dropdown-notfound ant-mention-dropdown-item", 4, "ngIf"], [1, "ant-mention-dropdown-item", 3, "mousedown", "click"], [4, "ngIf", "ngIfElse"], ["defaultSuggestion", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-mention-dropdown-notfound", "ant-mention-dropdown-item"], [4, "ngIf"], ["nz-icon", "", "nzType", "loading"]], template: function NzMentionComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
        ɵngcc0.ɵɵtemplate(1, NzMentionComponent_ng_template_1_Template, 3, 2, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
    } }, directives: [ɵngcc2.NgForOf, ɵngcc2.NgIf, ɵngcc2.NgTemplateOutlet, ɵngcc3.NzIconDirective], styles: [".ant-mention-dropdown[_ngcontent-%COMP%] {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }"], changeDetection: 0 });
/** @nocollapse */
NzMentionComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
    { type: ChangeDetectorRef },
    { type: Overlay },
    { type: ViewContainerRef },
    { type: NzMentionService }
];
NzMentionComponent.propDecorators = {
    nzValueWith: [{ type: Input }],
    nzPrefix: [{ type: Input }],
    nzLoading: [{ type: Input }],
    nzNotFoundContent: [{ type: Input }],
    nzPlacement: [{ type: Input }],
    nzSuggestions: [{ type: Input }],
    nzOnSelect: [{ type: Output }],
    nzOnSearchChange: [{ type: Output }],
    suggestionsTemp: [{ type: ViewChild, args: [TemplateRef, { static: false },] }],
    suggestionChild: [{ type: ContentChild, args: [NzMentionSuggestionDirective, { static: false, read: TemplateRef },] }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzMentionComponent.prototype, "nzLoading", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzMentionComponent, [{
        type: Component,
        args: [{
                selector: 'nz-mention',
                exportAs: 'nzMention',
                template: "<ng-content></ng-content>\r\n<ng-template #suggestions>\r\n  <ul class=\"ant-mention-dropdown\">\r\n    <li class=\"ant-mention-dropdown-item\"\r\n        *ngFor=\"let suggestion of filteredSuggestions; let i = index\"\r\n        [class.focus]=\"i === activeIndex\"\r\n        (mousedown)=\"$event.preventDefault()\"\r\n        (click)=\"selectSuggestion(suggestion)\">\r\n      <ng-container *ngIf=\"suggestionTemplate else defaultSuggestion\">\r\n        <ng-container *ngTemplateOutlet=\"suggestionTemplate; context: {$implicit: suggestion}\"></ng-container>\r\n      </ng-container>\r\n      <ng-template #defaultSuggestion>{{ nzValueWith(suggestion) }}</ng-template>\r\n    </li>\r\n    <li class=\"ant-mention-dropdown-notfound ant-mention-dropdown-item\"\r\n        *ngIf=\"filteredSuggestions.length === 0\">\r\n      <span *ngIf=\"nzLoading\"><i nz-icon nzType=\"loading\"></i></span>\r\n      <span *ngIf=\"!nzLoading\">{{ nzNotFoundContent }}</span>\r\n    </li>\r\n  </ul>\r\n</ng-template>\r\n",
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [NzMentionService],
                styles: [`
      .ant-mention-dropdown {
        top: 100%;
        left: 0;
        position: relative;
        width: 100%;
        margin-top: 4px;
        margin-bottom: 4px;
      }
    `]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc1.Overlay }, { type: ɵngcc0.ViewContainerRef }, { type: NzMentionService }]; }, { nzValueWith: [{
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
        }], suggestionChild: [{
            type: ContentChild,
            args: [NzMentionSuggestionDirective, { static: false, read: TemplateRef }]
        }], suggestionsTemp: [{
            type: ViewChild,
            args: [TemplateRef, { static: false }]
        }] }); })();
if (false) {
    /** @type {?} */
    NzMentionComponent.prototype.nzValueWith;
    /** @type {?} */
    NzMentionComponent.prototype.nzPrefix;
    /** @type {?} */
    NzMentionComponent.prototype.nzLoading;
    /** @type {?} */
    NzMentionComponent.prototype.nzNotFoundContent;
    /** @type {?} */
    NzMentionComponent.prototype.nzPlacement;
    /** @type {?} */
    NzMentionComponent.prototype.nzSuggestions;
    /** @type {?} */
    NzMentionComponent.prototype.nzOnSelect;
    /** @type {?} */
    NzMentionComponent.prototype.nzOnSearchChange;
    /** @type {?} */
    NzMentionComponent.prototype.trigger;
    /** @type {?} */
    NzMentionComponent.prototype.suggestionsTemp;
    /** @type {?} */
    NzMentionComponent.prototype.isOpen;
    /** @type {?} */
    NzMentionComponent.prototype.filteredSuggestions;
    /** @type {?} */
    NzMentionComponent.prototype.suggestionTemplate;
    /** @type {?} */
    NzMentionComponent.prototype.activeIndex;
    /**
     * @type {?}
     * @private
     */
    NzMentionComponent.prototype.previousValue;
    /**
     * @type {?}
     * @private
     */
    NzMentionComponent.prototype.cursorMention;
    /**
     * @type {?}
     * @private
     */
    NzMentionComponent.prototype.cursorMentionStart;
    /**
     * @type {?}
     * @private
     */
    NzMentionComponent.prototype.cursorMentionEnd;
    /**
     * @type {?}
     * @private
     */
    NzMentionComponent.prototype.overlayRef;
    /**
     * @type {?}
     * @private
     */
    NzMentionComponent.prototype.portal;
    /**
     * @type {?}
     * @private
     */
    NzMentionComponent.prototype.positionStrategy;
    /**
     * @type {?}
     * @private
     */
    NzMentionComponent.prototype.overlayBackdropClickSubscription;
    /**
     * @type {?}
     * @private
     */
    NzMentionComponent.prototype.ngDocument;
    /**
     * @type {?}
     * @private
     */
    NzMentionComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    NzMentionComponent.prototype.overlay;
    /**
     * @type {?}
     * @private
     */
    NzMentionComponent.prototype.viewContainerRef;
    /**
     * @type {?}
     * @private
     */
    NzMentionComponent.prototype.nzMentionService;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIm5nOi9uZy16b3Jyby1hbnRkL21lbnRpb24vbnotbWVudGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFHLE9BQU8sRUFDTCxzQkFBc0IsRUFFdEIsT0FBTyxFQUNQLGFBQWEsRUFHZCxNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFJTCxRQUFRLEVBQ1IsTUFBTSxFQUVOLFdBQVcsRUFDWCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUV0RCxPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLFdBQVcsRUFDWCxnQ0FBZ0MsRUFDaEMsNkJBQTZCLEVBQzdCLFlBQVksRUFDYixNQUFNLG9CQUFvQixDQUFDO0FBRTVCLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXhFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEQsMENBR0M7OztJQUZDLHFDQUFj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O0lBQ3RDLG9DQUFxQzs7Ozs7SUFDckMsOENBQTREOzs7OztJQUM1RCw4REFBdUQ7Ozs7O0lBT3JELHdDQUFxRDs7Ozs7SUFDckQsK0NBQTRDOzs7OztJQUM1QyxxQ0FBd0I7Ozs7O0lBQ3hCLDhDQUEwQzs7Ozs7SUFDMUMsOENBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBET1dOX0FSUk9XLCBFTlRFUiwgRVNDQVBFLCBMRUZUX0FSUk9XLCBSSUdIVF9BUlJPVywgVEFCLCBVUF9BUlJPVyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XHJcbmltcG9ydCB7XHJcbiAgQ29ubmVjdGlvblBvc2l0aW9uUGFpcixcclxuICBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3ksXHJcbiAgT3ZlcmxheSxcclxuICBPdmVybGF5Q29uZmlnLFxyXG4gIE92ZXJsYXlSZWYsXHJcbiAgUG9zaXRpb25TdHJhdGVneVxyXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgVGVtcGxhdGVQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcclxuXHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbmplY3QsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGZyb21FdmVudCwgbWVyZ2UsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBnZXRDYXJldENvb3JkaW5hdGVzLFxyXG4gIGdldE1lbnRpb25zLFxyXG4gIERFRkFVTFRfTUVOVElPTl9CT1RUT01fUE9TSVRJT05TLFxyXG4gIERFRkFVTFRfTUVOVElPTl9UT1BfUE9TSVRJT05TLFxyXG4gIElucHV0Qm9vbGVhblxyXG59IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOek1lbnRpb25TdWdnZXN0aW9uRGlyZWN0aXZlIH0gZnJvbSAnLi9uei1tZW50aW9uLXN1Z2dlc3Rpb25zJztcclxuaW1wb3J0IHsgTnpNZW50aW9uVHJpZ2dlckRpcmVjdGl2ZSB9IGZyb20gJy4vbnotbWVudGlvbi10cmlnZ2VyJztcclxuaW1wb3J0IHsgTnpNZW50aW9uU2VydmljZSB9IGZyb20gJy4vbnotbWVudGlvbi5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWVudGlvbk9uU2VhcmNoVHlwZXMge1xyXG4gIHZhbHVlOiBzdHJpbmc7XHJcbiAgcHJlZml4OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWVudGlvbiB7XHJcbiAgc3RhcnRQb3M6IG51bWJlcjtcclxuICBlbmRQb3M6IG51bWJlcjtcclxuICBtZW50aW9uOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIE1lbnRpb25QbGFjZW1lbnQgPSAndG9wJyB8ICdib3R0b20nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei1tZW50aW9uJyxcclxuICBleHBvcnRBczogJ256TWVudGlvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LW1lbnRpb24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByb3ZpZGVyczogW056TWVudGlvblNlcnZpY2VdLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICAuYW50LW1lbnRpb24tZHJvcGRvd24ge1xyXG4gICAgICAgIHRvcDogMTAwJTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpNZW50aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgbnpWYWx1ZVdpdGg6ICh2YWx1ZTogYW55KSA9PiBzdHJpbmcgPSB2YWx1ZSA9PiB2YWx1ZTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcclxuICBASW5wdXQoKSBuelByZWZpeDogc3RyaW5nIHwgc3RyaW5nW10gPSAnQCc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56TG9hZGluZyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56Tm90Rm91bmRDb250ZW50OiBzdHJpbmcgPSAn5peg5Yy56YWN57uT5p6c77yM6L275pWy56m65qC85a6M5oiQ6L6T5YWlJztcclxuICBASW5wdXQoKSBuelBsYWNlbWVudDogTWVudGlvblBsYWNlbWVudCA9ICdib3R0b20nO1xyXG4gIEBJbnB1dCgpIG56U3VnZ2VzdGlvbnM6IHN0cmluZ1tdID0gW107XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25TZWxlY3Q6IEV2ZW50RW1pdHRlcjxzdHJpbmcgfCB7fT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25TZWFyY2hDaGFuZ2U6IEV2ZW50RW1pdHRlcjxNZW50aW9uT25TZWFyY2hUeXBlcz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIHRyaWdnZXI6IE56TWVudGlvblRyaWdnZXJEaXJlY3RpdmU7XHJcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZiwgeyBzdGF0aWM6IGZhbHNlIH0pIHN1Z2dlc3Rpb25zVGVtcDogVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoTnpNZW50aW9uU3VnZ2VzdGlvbkRpcmVjdGl2ZSwgeyBzdGF0aWM6IGZhbHNlLCByZWFkOiBUZW1wbGF0ZVJlZiB9KVxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBzZXQgc3VnZ2VzdGlvbkNoaWxkKHZhbHVlOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogYW55IH0+KSB7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgdGhpcy5zdWdnZXN0aW9uVGVtcGxhdGUgPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzT3BlbiA9IGZhbHNlO1xyXG4gIGZpbHRlcmVkU3VnZ2VzdGlvbnM6IHN0cmluZ1tdID0gW107XHJcbiAgc3VnZ2VzdGlvblRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogYW55IH0+IHwgbnVsbCA9IG51bGw7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcbiAgYWN0aXZlSW5kZXggPSAtMTtcclxuXHJcbiAgcHJpdmF0ZSBwcmV2aW91c1ZhbHVlOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICBwcml2YXRlIGN1cnNvck1lbnRpb246IHN0cmluZyB8IG51bGw7XHJcbiAgcHJpdmF0ZSBjdXJzb3JNZW50aW9uU3RhcnQ6IG51bWJlcjtcclxuICBwcml2YXRlIGN1cnNvck1lbnRpb25FbmQ6IG51bWJlcjtcclxuICBwcml2YXRlIG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYgfCBudWxsO1xyXG4gIHByaXZhdGUgcG9ydGFsOiBUZW1wbGF0ZVBvcnRhbDx2b2lkPjtcclxuICBwcml2YXRlIHBvc2l0aW9uU3RyYXRlZ3k6IEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneTtcclxuICBwcml2YXRlIG92ZXJsYXlCYWNrZHJvcENsaWNrU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIHByaXZhdGUgZ2V0IHRyaWdnZXJOYXRpdmVFbGVtZW50KCk6IEhUTUxUZXh0QXJlYUVsZW1lbnQgfCBIVE1MSW5wdXRFbGVtZW50IHtcclxuICAgIHJldHVybiB0aGlzLnRyaWdnZXIuZWwubmF0aXZlRWxlbWVudDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBuZ0RvY3VtZW50OiBhbnksIC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSxcclxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgIHByaXZhdGUgbnpNZW50aW9uU2VydmljZTogTnpNZW50aW9uU2VydmljZVxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm56TWVudGlvblNlcnZpY2UudHJpZ2dlckNoYW5nZWQoKS5zdWJzY3JpYmUodHJpZ2dlciA9PiB7XHJcbiAgICAgIHRoaXMudHJpZ2dlciA9IHRyaWdnZXI7XHJcbiAgICAgIHRoaXMuYmluZFRyaWdnZXJFdmVudHMoKTtcclxuICAgICAgdGhpcy5jbG9zZURyb3Bkb3duKCk7XHJcbiAgICAgIHRoaXMub3ZlcmxheVJlZiA9IG51bGw7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCduelN1Z2dlc3Rpb25zJykpIHtcclxuICAgICAgaWYgKHRoaXMuaXNPcGVuKSB7XHJcbiAgICAgICAgdGhpcy5wcmV2aW91c1ZhbHVlID0gbnVsbDtcclxuICAgICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gLTE7XHJcbiAgICAgICAgdGhpcy5yZXNldERyb3Bkb3duKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsb3NlRHJvcGRvd24oKTtcclxuICB9XHJcblxyXG4gIGNsb3NlRHJvcGRvd24oKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5vdmVybGF5UmVmICYmIHRoaXMub3ZlcmxheVJlZi5oYXNBdHRhY2hlZCgpKSB7XHJcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5kZXRhY2goKTtcclxuICAgICAgdGhpcy5vdmVybGF5QmFja2Ryb3BDbGlja1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb3BlbkRyb3Bkb3duKCk6IHZvaWQge1xyXG4gICAgdGhpcy5hdHRhY2hPdmVybGF5KCk7XHJcbiAgICB0aGlzLmlzT3BlbiA9IHRydWU7XHJcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TWVudGlvbnMoKTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIHRoaXMudHJpZ2dlciA/IGdldE1lbnRpb25zKHRoaXMudHJpZ2dlci52YWx1ZSwgdGhpcy5uelByZWZpeCkgOiBbXTtcclxuICB9XHJcblxyXG4gIHNlbGVjdFN1Z2dlc3Rpb24oc3VnZ2VzdGlvbjogc3RyaW5nIHwge30pOiB2b2lkIHtcclxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5uelZhbHVlV2l0aChzdWdnZXN0aW9uKTtcclxuICAgIHRoaXMudHJpZ2dlci5pbnNlcnRNZW50aW9uKHtcclxuICAgICAgbWVudGlvbjogdmFsdWUsXHJcbiAgICAgIHN0YXJ0UG9zOiB0aGlzLmN1cnNvck1lbnRpb25TdGFydCxcclxuICAgICAgZW5kUG9zOiB0aGlzLmN1cnNvck1lbnRpb25FbmRcclxuICAgIH0pO1xyXG4gICAgdGhpcy5uek9uU2VsZWN0LmVtaXQoc3VnZ2VzdGlvbik7XHJcbiAgICB0aGlzLmNsb3NlRHJvcGRvd24oKTtcclxuICAgIHRoaXMuYWN0aXZlSW5kZXggPSAtMTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlSW5wdXQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFRleHRBcmVhRWxlbWVudDtcclxuICAgIHRoaXMudHJpZ2dlci5vbkNoYW5nZSh0YXJnZXQudmFsdWUpO1xyXG4gICAgdGhpcy50cmlnZ2VyLnZhbHVlID0gdGFyZ2V0LnZhbHVlO1xyXG4gICAgdGhpcy5yZXNldERyb3Bkb3duKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhbmRsZUtleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IGtleUNvZGUgPSBldmVudC5rZXlDb2RlO1xyXG4gICAgaWYgKHRoaXMuaXNPcGVuICYmIGtleUNvZGUgPT09IEVOVEVSICYmIHRoaXMuYWN0aXZlSW5kZXggIT09IC0xICYmIHRoaXMuZmlsdGVyZWRTdWdnZXN0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5zZWxlY3RTdWdnZXN0aW9uKHRoaXMuZmlsdGVyZWRTdWdnZXN0aW9uc1t0aGlzLmFjdGl2ZUluZGV4XSk7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9IGVsc2UgaWYgKGtleUNvZGUgPT09IExFRlRfQVJST1cgfHwga2V5Q29kZSA9PT0gUklHSFRfQVJST1cpIHtcclxuICAgICAgdGhpcy5yZXNldERyb3Bkb3duKCk7XHJcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMuaXNPcGVuICYmIChrZXlDb2RlID09PSBUQUIgfHwga2V5Q29kZSA9PT0gRVNDQVBFKSkge1xyXG4gICAgICAgIHRoaXMuY2xvc2VEcm9wZG93bigpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuaXNPcGVuICYmIGtleUNvZGUgPT09IFVQX0FSUk9XKSB7XHJcbiAgICAgICAgdGhpcy5zZXRQcmV2aW91c0l0ZW1BY3RpdmUoKTtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5pc09wZW4gJiYga2V5Q29kZSA9PT0gRE9XTl9BUlJPVykge1xyXG4gICAgICAgIHRoaXMuc2V0TmV4dEl0ZW1BY3RpdmUoKTtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhbmRsZUNsaWNrKCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZXNldERyb3Bkb3duKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGJpbmRUcmlnZ2VyRXZlbnRzKCk6IHZvaWQge1xyXG4gICAgdGhpcy50cmlnZ2VyLm9uSW5wdXQuc3Vic2NyaWJlKChlOiBLZXlib2FyZEV2ZW50KSA9PiB0aGlzLmhhbmRsZUlucHV0KGUpKTtcclxuICAgIHRoaXMudHJpZ2dlci5vbktleWRvd24uc3Vic2NyaWJlKChlOiBLZXlib2FyZEV2ZW50KSA9PiB0aGlzLmhhbmRsZUtleWRvd24oZSkpO1xyXG4gICAgdGhpcy50cmlnZ2VyLm9uQ2xpY2suc3Vic2NyaWJlKCgpID0+IHRoaXMuaGFuZGxlQ2xpY2soKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN1Z2dlc3Rpb25zRmlsdGVyKHZhbHVlOiBzdHJpbmcsIGVtaXQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGNvbnN0IHN1Z2dlc3Rpb25zID0gdmFsdWUuc3Vic3RyaW5nKDEpO1xyXG4gICAgaWYgKHRoaXMucHJldmlvdXNWYWx1ZSA9PT0gdmFsdWUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wcmV2aW91c1ZhbHVlID0gdmFsdWU7XHJcbiAgICBpZiAoZW1pdCkge1xyXG4gICAgICB0aGlzLm56T25TZWFyY2hDaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgdmFsdWU6IHRoaXMuY3Vyc29yTWVudGlvbiEuc3Vic3RyaW5nKDEpLFxyXG4gICAgICAgIHByZWZpeDogdGhpcy5jdXJzb3JNZW50aW9uIVswXVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGNvbnN0IHNlYXJjaFZhbHVlID0gc3VnZ2VzdGlvbnMudG9Mb3dlckNhc2UoKTtcclxuICAgIHRoaXMuZmlsdGVyZWRTdWdnZXN0aW9ucyA9IHRoaXMubnpTdWdnZXN0aW9ucy5maWx0ZXIoc3VnZ2VzdGlvbiA9PlxyXG4gICAgICB0aGlzLm56VmFsdWVXaXRoKHN1Z2dlc3Rpb24pXHJcbiAgICAgICAgLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAuaW5jbHVkZXMoc2VhcmNoVmFsdWUpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZXNldERyb3Bkb3duKGVtaXQ6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlc2V0Q3Vyc29yTWVudGlvbigpO1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLmN1cnNvck1lbnRpb24gIT09ICdzdHJpbmcnIHx8ICF0aGlzLmNhbk9wZW4oKSkge1xyXG4gICAgICB0aGlzLmNsb3NlRHJvcGRvd24oKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zdWdnZXN0aW9uc0ZpbHRlcih0aGlzLmN1cnNvck1lbnRpb24sIGVtaXQpO1xyXG4gICAgY29uc3QgYWN0aXZlSW5kZXggPSB0aGlzLmZpbHRlcmVkU3VnZ2VzdGlvbnMuaW5kZXhPZih0aGlzLmN1cnNvck1lbnRpb24uc3Vic3RyaW5nKDEpKTtcclxuICAgIHRoaXMuYWN0aXZlSW5kZXggPSBhY3RpdmVJbmRleCA+PSAwID8gYWN0aXZlSW5kZXggOiAwO1xyXG4gICAgdGhpcy5vcGVuRHJvcGRvd24oKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0TmV4dEl0ZW1BY3RpdmUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmFjdGl2ZUluZGV4ID0gdGhpcy5hY3RpdmVJbmRleCArIDEgPD0gdGhpcy5maWx0ZXJlZFN1Z2dlc3Rpb25zLmxlbmd0aCAtIDEgPyB0aGlzLmFjdGl2ZUluZGV4ICsgMSA6IDA7XHJcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRQcmV2aW91c0l0ZW1BY3RpdmUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmFjdGl2ZUluZGV4ID0gdGhpcy5hY3RpdmVJbmRleCAtIDEgPCAwID8gdGhpcy5maWx0ZXJlZFN1Z2dlc3Rpb25zLmxlbmd0aCAtIDEgOiB0aGlzLmFjdGl2ZUluZGV4IC0gMTtcclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhbk9wZW4oKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBlbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFRleHRBcmVhRWxlbWVudCA9IHRoaXMudHJpZ2dlck5hdGl2ZUVsZW1lbnQ7XHJcbiAgICByZXR1cm4gIWVsZW1lbnQucmVhZE9ubHkgJiYgIWVsZW1lbnQuZGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlc2V0Q3Vyc29yTWVudGlvbigpOiB2b2lkIHtcclxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy50cmlnZ2VyTmF0aXZlRWxlbWVudC52YWx1ZS5yZXBsYWNlKC9bXFxyXFxuXS9nLCAnICcpIHx8ICcnO1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uU3RhcnQgPSB0aGlzLnRyaWdnZXJOYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0ITtcclxuICAgIGNvbnN0IHByZWZpeCA9IHR5cGVvZiB0aGlzLm56UHJlZml4ID09PSAnc3RyaW5nJyA/IFt0aGlzLm56UHJlZml4XSA6IHRoaXMubnpQcmVmaXg7XHJcbiAgICBsZXQgaSA9IHByZWZpeC5sZW5ndGg7XHJcbiAgICB3aGlsZSAoaSA+PSAwKSB7XHJcbiAgICAgIGNvbnN0IHN0YXJ0UG9zID0gdmFsdWUubGFzdEluZGV4T2YocHJlZml4W2ldLCBzZWxlY3Rpb25TdGFydCk7XHJcbiAgICAgIGNvbnN0IGVuZFBvcyA9IHZhbHVlLmluZGV4T2YoJyAnLCBzZWxlY3Rpb25TdGFydCkgPiAtMSA/IHZhbHVlLmluZGV4T2YoJyAnLCBzZWxlY3Rpb25TdGFydCkgOiB2YWx1ZS5sZW5ndGg7XHJcbiAgICAgIGNvbnN0IG1lbnRpb24gPSB2YWx1ZS5zdWJzdHJpbmcoc3RhcnRQb3MsIGVuZFBvcyk7XHJcbiAgICAgIGlmIChcclxuICAgICAgICAoc3RhcnRQb3MgPiAwICYmIHZhbHVlW3N0YXJ0UG9zIC0gMV0gIT09ICcgJykgfHxcclxuICAgICAgICBzdGFydFBvcyA8IDAgfHxcclxuICAgICAgICBtZW50aW9uLmluY2x1ZGVzKHByZWZpeFtpXSwgMSkgfHxcclxuICAgICAgICBtZW50aW9uLmluY2x1ZGVzKCcgJylcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5jdXJzb3JNZW50aW9uID0gbnVsbDtcclxuICAgICAgICB0aGlzLmN1cnNvck1lbnRpb25TdGFydCA9IC0xO1xyXG4gICAgICAgIHRoaXMuY3Vyc29yTWVudGlvbkVuZCA9IC0xO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY3Vyc29yTWVudGlvbiA9IG1lbnRpb247XHJcbiAgICAgICAgdGhpcy5jdXJzb3JNZW50aW9uU3RhcnQgPSBzdGFydFBvcztcclxuICAgICAgICB0aGlzLmN1cnNvck1lbnRpb25FbmQgPSBlbmRQb3M7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGktLTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlUG9zaXRpb25zKCk6IHZvaWQge1xyXG4gICAgY29uc3QgY29vcmRpbmF0ZXMgPSBnZXRDYXJldENvb3JkaW5hdGVzKHRoaXMudHJpZ2dlck5hdGl2ZUVsZW1lbnQsIHRoaXMuY3Vyc29yTWVudGlvblN0YXJ0KTtcclxuICAgIGNvbnN0IHRvcCA9XHJcbiAgICAgIGNvb3JkaW5hdGVzLnRvcCAtXHJcbiAgICAgIHRoaXMudHJpZ2dlck5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0IC1cclxuICAgICAgdGhpcy50cmlnZ2VyTmF0aXZlRWxlbWVudC5zY3JvbGxUb3AgK1xyXG4gICAgICAodGhpcy5uelBsYWNlbWVudCA9PT0gJ2JvdHRvbScgPyBjb29yZGluYXRlcy5oZWlnaHQgLSA2IDogLTYpO1xyXG4gICAgY29uc3QgbGVmdCA9IGNvb3JkaW5hdGVzLmxlZnQgLSB0aGlzLnRyaWdnZXJOYXRpdmVFbGVtZW50LnNjcm9sbExlZnQ7XHJcbiAgICB0aGlzLnBvc2l0aW9uU3RyYXRlZ3kud2l0aERlZmF1bHRPZmZzZXRYKGxlZnQpLndpdGhEZWZhdWx0T2Zmc2V0WSh0b3ApO1xyXG4gICAgaWYgKHRoaXMubnpQbGFjZW1lbnQgPT09ICdib3R0b20nKSB7XHJcbiAgICAgIHRoaXMucG9zaXRpb25TdHJhdGVneS53aXRoUG9zaXRpb25zKFsuLi5ERUZBVUxUX01FTlRJT05fQk9UVE9NX1BPU0lUSU9OU10pO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubnpQbGFjZW1lbnQgPT09ICd0b3AnKSB7XHJcbiAgICAgIHRoaXMucG9zaXRpb25TdHJhdGVneS53aXRoUG9zaXRpb25zKFsuLi5ERUZBVUxUX01FTlRJT05fVE9QX1BPU0lUSU9OU10pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wb3NpdGlvblN0cmF0ZWd5LmFwcGx5KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN1YnNjcmliZU92ZXJsYXlCYWNrZHJvcENsaWNrKCk6IFN1YnNjcmlwdGlvbiB7XHJcbiAgICByZXR1cm4gbWVyZ2U8TW91c2VFdmVudCB8IFRvdWNoRXZlbnQ+KFxyXG4gICAgICBmcm9tRXZlbnQ8TW91c2VFdmVudD4odGhpcy5uZ0RvY3VtZW50LCAnY2xpY2snKSxcclxuICAgICAgZnJvbUV2ZW50PFRvdWNoRXZlbnQ+KHRoaXMubmdEb2N1bWVudCwgJ3RvdWNoZW5kJylcclxuICAgICkuc3Vic2NyaWJlKChldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpID0+IHtcclxuICAgICAgY29uc3QgY2xpY2tUYXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aGlzLmlzT3BlbiAmJlxyXG4gICAgICAgIGNsaWNrVGFyZ2V0ICE9PSB0aGlzLnRyaWdnZXIuZWwubmF0aXZlRWxlbWVudCAmJlxyXG4gICAgICAgICghIXRoaXMub3ZlcmxheVJlZiAmJiAhdGhpcy5vdmVybGF5UmVmLm92ZXJsYXlFbGVtZW50LmNvbnRhaW5zKGNsaWNrVGFyZ2V0KSlcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZURyb3Bkb3duKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhdHRhY2hPdmVybGF5KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLm92ZXJsYXlSZWYpIHtcclxuICAgICAgdGhpcy5wb3J0YWwgPSBuZXcgVGVtcGxhdGVQb3J0YWwodGhpcy5zdWdnZXN0aW9uc1RlbXAsIHRoaXMudmlld0NvbnRhaW5lclJlZik7XHJcbiAgICAgIHRoaXMub3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUodGhpcy5nZXRPdmVybGF5Q29uZmlnKCkpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZiAmJiAhdGhpcy5vdmVybGF5UmVmLmhhc0F0dGFjaGVkKCkpIHtcclxuICAgICAgdGhpcy5vdmVybGF5UmVmLmF0dGFjaCh0aGlzLnBvcnRhbCk7XHJcbiAgICAgIHRoaXMub3ZlcmxheUJhY2tkcm9wQ2xpY2tTdWJzY3JpcHRpb24gPSB0aGlzLnN1YnNjcmliZU92ZXJsYXlCYWNrZHJvcENsaWNrKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnVwZGF0ZVBvc2l0aW9ucygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRPdmVybGF5Q29uZmlnKCk6IE92ZXJsYXlDb25maWcge1xyXG4gICAgcmV0dXJuIG5ldyBPdmVybGF5Q29uZmlnKHtcclxuICAgICAgcG9zaXRpb25TdHJhdGVneTogdGhpcy5nZXRPdmVybGF5UG9zaXRpb24oKSxcclxuICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLnJlcG9zaXRpb24oKVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE92ZXJsYXlQb3NpdGlvbigpOiBQb3NpdGlvblN0cmF0ZWd5IHtcclxuICAgIGNvbnN0IHBvc2l0aW9ucyA9IFtcclxuICAgICAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAnYm90dG9tJyB9LCB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ3RvcCcgfSksXHJcbiAgICAgIG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ3RvcCcgfSwgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICdib3R0b20nIH0pXHJcbiAgICBdO1xyXG4gICAgdGhpcy5wb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5XHJcbiAgICAgIC5wb3NpdGlvbigpXHJcbiAgICAgIC5mbGV4aWJsZUNvbm5lY3RlZFRvKHRoaXMudHJpZ2dlci5lbClcclxuICAgICAgLndpdGhQb3NpdGlvbnMocG9zaXRpb25zKVxyXG4gICAgICAud2l0aEZsZXhpYmxlRGltZW5zaW9ucyhmYWxzZSlcclxuICAgICAgLndpdGhQdXNoKGZhbHNlKTtcclxuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uU3RyYXRlZ3k7XHJcbiAgfVxyXG59XHJcbiJdfQ==
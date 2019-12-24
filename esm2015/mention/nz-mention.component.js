import { __decorate, __metadata } from "tslib";
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
import { DEFAULT_MENTION_BOTTOM_POSITIONS, DEFAULT_MENTION_TOP_POSITIONS, getCaretCoordinates, getMentions, InputBoolean } from 'ng-zorro-antd/core';
import { NzMentionSuggestionDirective } from './nz-mention-suggestions';
import { NzMentionService } from './nz-mention.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
import * as i2 from "./nz-mention.service";
import * as i3 from "@angular/common";
import * as i4 from "ng-zorro-antd/icon";
function NzMentionComponent_ng_template_1_li_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c0 = function (a0) { return { $implicit: a0 }; };
function NzMentionComponent_ng_template_1_li_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzMentionComponent_ng_template_1_li_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 7);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const suggestion_r570 = i0.ɵɵnextContext().$implicit;
    const ctx_r572 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r572.suggestionTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c0, suggestion_r570));
} }
function NzMentionComponent_ng_template_1_li_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const suggestion_r570 = i0.ɵɵnextContext().$implicit;
    const ctx_r574 = i0.ɵɵnextContext(2);
    i0.ɵɵtextInterpolate(ctx_r574.nzValueWith(suggestion_r570));
} }
function NzMentionComponent_ng_template_1_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r579 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 4);
    i0.ɵɵlistener("mousedown", function NzMentionComponent_ng_template_1_li_1_Template_li_mousedown_0_listener($event) { i0.ɵɵrestoreView(_r579); return $event.preventDefault(); })("click", function NzMentionComponent_ng_template_1_li_1_Template_li_click_0_listener($event) { i0.ɵɵrestoreView(_r579); const suggestion_r570 = ctx.$implicit; const ctx_r580 = i0.ɵɵnextContext(2); return ctx_r580.selectSuggestion(suggestion_r570); });
    i0.ɵɵtemplate(1, NzMentionComponent_ng_template_1_li_1_ng_container_1_Template, 2, 4, "ng-container", 5);
    i0.ɵɵtemplate(2, NzMentionComponent_ng_template_1_li_1_ng_template_2_Template, 1, 1, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r571 = ctx.index;
    const _r573 = i0.ɵɵreference(3);
    const ctx_r568 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("focus", i_r571 === ctx_r568.activeIndex);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r568.suggestionTemplate)("ngIfElse", _r573);
} }
function NzMentionComponent_ng_template_1_li_2_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "i", 10);
    i0.ɵɵelementEnd();
} }
function NzMentionComponent_ng_template_1_li_2_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r582 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r582.nzNotFoundContent);
} }
function NzMentionComponent_ng_template_1_li_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 8);
    i0.ɵɵtemplate(1, NzMentionComponent_ng_template_1_li_2_span_1_Template, 2, 0, "span", 9);
    i0.ɵɵtemplate(2, NzMentionComponent_ng_template_1_li_2_span_2_Template, 2, 1, "span", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r569 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r569.nzLoading);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r569.nzLoading);
} }
function NzMentionComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 1);
    i0.ɵɵtemplate(1, NzMentionComponent_ng_template_1_li_1_Template, 4, 3, "li", 2);
    i0.ɵɵtemplate(2, NzMentionComponent_ng_template_1_li_2_Template, 3, 2, "li", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r567 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r567.filteredSuggestions);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r567.filteredSuggestions.length === 0);
} }
const _c1 = ["*"];
export class NzMentionComponent {
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
/** @nocollapse */ NzMentionComponent.ɵfac = function NzMentionComponent_Factory(t) { return new (t || NzMentionComponent)(i0.ɵɵdirectiveInject(DOCUMENT, 8), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.Overlay), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i2.NzMentionService)); };
/** @nocollapse */ NzMentionComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzMentionComponent, selectors: [["nz-mention"]], contentQueries: function NzMentionComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, NzMentionSuggestionDirective, true, TemplateRef);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.suggestionChild = _t.first);
    } }, viewQuery: function NzMentionComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(TemplateRef, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.suggestionsTemp = _t.first);
    } }, inputs: { nzValueWith: "nzValueWith", nzPrefix: "nzPrefix", nzLoading: "nzLoading", nzNotFoundContent: "nzNotFoundContent", nzPlacement: "nzPlacement", nzSuggestions: "nzSuggestions" }, outputs: { nzOnSelect: "nzOnSelect", nzOnSearchChange: "nzOnSearchChange" }, exportAs: ["nzMention"], features: [i0.ɵɵProvidersFeature([NzMentionService]), i0.ɵɵNgOnChangesFeature()], ngContentSelectors: _c1, decls: 3, vars: 0, consts: [["suggestions", ""], [1, "ant-mention-dropdown"], ["class", "ant-mention-dropdown-item", 3, "focus", "mousedown", "click", 4, "ngFor", "ngForOf"], ["class", "ant-mention-dropdown-notfound ant-mention-dropdown-item", 4, "ngIf"], [1, "ant-mention-dropdown-item", 3, "mousedown", "click"], [4, "ngIf", "ngIfElse"], ["defaultSuggestion", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-mention-dropdown-notfound", "ant-mention-dropdown-item"], [4, "ngIf"], ["nz-icon", "", "nzType", "loading"]], template: function NzMentionComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
        i0.ɵɵtemplate(1, NzMentionComponent_ng_template_1_Template, 3, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
    } }, directives: [i3.NgForOf, i3.NgIf, i3.NgTemplateOutlet, i4.NzIconDirective], styles: [".ant-mention-dropdown[_ngcontent-%COMP%] {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }"], changeDetection: 0 });
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzMentionComponent.prototype, "nzLoading", void 0);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzMentionComponent, [{
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
            }] }, { type: i0.ChangeDetectorRef }, { type: i1.Overlay }, { type: i0.ViewContainerRef }, { type: i2.NzMentionService }]; }, { nzValueWith: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL21lbnRpb24vIiwic291cmNlcyI6WyJuei1tZW50aW9uLmNvbXBvbmVudC50cyIsIm56LW1lbnRpb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRyxPQUFPLEVBQ0wsc0JBQXNCLEVBRXRCLE9BQU8sRUFDUCxhQUFhLEVBR2QsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFckQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFFTixXQUFXLEVBQ1gsU0FBUyxFQUNULGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFFdEQsT0FBTyxFQUNMLGdDQUFnQyxFQUNoQyw2QkFBNkIsRUFDN0IsbUJBQW1CLEVBQ25CLFdBQVcsRUFDWCxZQUFZLEVBQ2IsTUFBTSxvQkFBb0IsQ0FBQztBQUU1QixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUV4RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7OztJQ3hDaEQsd0JBRWdCOzs7O0lBSGxCLDZCQUNFO0lBQUEsdUhBRUM7SUFDSCwwQkFBZTs7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Szs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsTUFBTTs7a0JBQ04sTUFBTTs7a0JBR04sU0FBUzttQkFBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOztrQkFFeEMsWUFBWTttQkFBQyw0QkFBNEIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgRE9XTl9BUlJPVywgRU5URVIsIEVTQ0FQRSwgTEVGVF9BUlJPVywgUklHSFRfQVJST1csIFRBQiwgVVBfQVJST1cgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xyXG5pbXBvcnQge1xyXG4gIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIsXHJcbiAgRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5LFxyXG4gIE92ZXJsYXksXHJcbiAgT3ZlcmxheUNvbmZpZyxcclxuICBPdmVybGF5UmVmLFxyXG4gIFBvc2l0aW9uU3RyYXRlZ3lcclxufSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IFRlbXBsYXRlUG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XHJcblxyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5qZWN0LFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBmcm9tRXZlbnQsIG1lcmdlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgREVGQVVMVF9NRU5USU9OX0JPVFRPTV9QT1NJVElPTlMsXHJcbiAgREVGQVVMVF9NRU5USU9OX1RPUF9QT1NJVElPTlMsXHJcbiAgZ2V0Q2FyZXRDb29yZGluYXRlcyxcclxuICBnZXRNZW50aW9ucyxcclxuICBJbnB1dEJvb2xlYW5cclxufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpNZW50aW9uU3VnZ2VzdGlvbkRpcmVjdGl2ZSB9IGZyb20gJy4vbnotbWVudGlvbi1zdWdnZXN0aW9ucyc7XHJcbmltcG9ydCB7IE56TWVudGlvblRyaWdnZXJEaXJlY3RpdmUgfSBmcm9tICcuL256LW1lbnRpb24tdHJpZ2dlcic7XHJcbmltcG9ydCB7IE56TWVudGlvblNlcnZpY2UgfSBmcm9tICcuL256LW1lbnRpb24uc2VydmljZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1lbnRpb25PblNlYXJjaFR5cGVzIHtcclxuICB2YWx1ZTogc3RyaW5nO1xyXG4gIHByZWZpeDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1lbnRpb24ge1xyXG4gIHN0YXJ0UG9zOiBudW1iZXI7XHJcbiAgZW5kUG9zOiBudW1iZXI7XHJcbiAgbWVudGlvbjogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBNZW50aW9uUGxhY2VtZW50ID0gJ3RvcCcgfCAnYm90dG9tJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotbWVudGlvbicsXHJcbiAgZXhwb3J0QXM6ICduek1lbnRpb24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1tZW50aW9uLmNvbXBvbmVudC5odG1sJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcm92aWRlcnM6IFtOek1lbnRpb25TZXJ2aWNlXSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgLmFudC1tZW50aW9uLWRyb3Bkb3duIHtcclxuICAgICAgICB0b3A6IDEwMCU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56TWVudGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIG56VmFsdWVXaXRoOiAodmFsdWU6IGFueSkgPT4gc3RyaW5nID0gdmFsdWUgPT4gdmFsdWU7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcbiAgQElucHV0KCkgbnpQcmVmaXg6IHN0cmluZyB8IHN0cmluZ1tdID0gJ0AnO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekxvYWRpbmcgPSBmYWxzZTtcclxuICBASW5wdXQoKSBuek5vdEZvdW5kQ29udGVudDogc3RyaW5nID0gJ+aXoOWMuemFjee7k+aenO+8jOi9u+aVsuepuuagvOWujOaIkOi+k+WFpSc7XHJcbiAgQElucHV0KCkgbnpQbGFjZW1lbnQ6IE1lbnRpb25QbGFjZW1lbnQgPSAnYm90dG9tJztcclxuICBASW5wdXQoKSBuelN1Z2dlc3Rpb25zOiBzdHJpbmdbXSA9IFtdO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uU2VsZWN0OiBFdmVudEVtaXR0ZXI8c3RyaW5nIHwge30+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uU2VhcmNoQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TWVudGlvbk9uU2VhcmNoVHlwZXM+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICB0cmlnZ2VyOiBOek1lbnRpb25UcmlnZ2VyRGlyZWN0aXZlO1xyXG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYsIHsgc3RhdGljOiBmYWxzZSB9KSBzdWdnZXN0aW9uc1RlbXA6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBAQ29udGVudENoaWxkKE56TWVudGlvblN1Z2dlc3Rpb25EaXJlY3RpdmUsIHsgc3RhdGljOiBmYWxzZSwgcmVhZDogVGVtcGxhdGVSZWYgfSlcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgc2V0IHN1Z2dlc3Rpb25DaGlsZCh2YWx1ZTogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IGFueSB9Pikge1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuc3VnZ2VzdGlvblRlbXBsYXRlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc09wZW4gPSBmYWxzZTtcclxuICBmaWx0ZXJlZFN1Z2dlc3Rpb25zOiBzdHJpbmdbXSA9IFtdO1xyXG4gIHN1Z2dlc3Rpb25UZW1wbGF0ZTogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IGFueSB9PiB8IG51bGwgPSBudWxsOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxyXG4gIGFjdGl2ZUluZGV4ID0gLTE7XHJcblxyXG4gIHByaXZhdGUgcHJldmlvdXNWYWx1ZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBjdXJzb3JNZW50aW9uOiBzdHJpbmcgfCBudWxsO1xyXG4gIHByaXZhdGUgY3Vyc29yTWVudGlvblN0YXJ0OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBjdXJzb3JNZW50aW9uRW5kOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBvdmVybGF5UmVmOiBPdmVybGF5UmVmIHwgbnVsbDtcclxuICBwcml2YXRlIHBvcnRhbDogVGVtcGxhdGVQb3J0YWw8dm9pZD47XHJcbiAgcHJpdmF0ZSBwb3NpdGlvblN0cmF0ZWd5OiBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3k7XHJcbiAgcHJpdmF0ZSBvdmVybGF5QmFja2Ryb3BDbGlja1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICBwcml2YXRlIGdldCB0cmlnZ2VyTmF0aXZlRWxlbWVudCgpOiBIVE1MVGV4dEFyZWFFbGVtZW50IHwgSFRNTElucHV0RWxlbWVudCB7XHJcbiAgICByZXR1cm4gdGhpcy50cmlnZ2VyLmVsLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgbmdEb2N1bWVudDogYW55LCAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxyXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksXHJcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBwcml2YXRlIG56TWVudGlvblNlcnZpY2U6IE56TWVudGlvblNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5uek1lbnRpb25TZXJ2aWNlLnRyaWdnZXJDaGFuZ2VkKCkuc3Vic2NyaWJlKHRyaWdnZXIgPT4ge1xyXG4gICAgICB0aGlzLnRyaWdnZXIgPSB0cmlnZ2VyO1xyXG4gICAgICB0aGlzLmJpbmRUcmlnZ2VyRXZlbnRzKCk7XHJcbiAgICAgIHRoaXMuY2xvc2VEcm9wZG93bigpO1xyXG4gICAgICB0aGlzLm92ZXJsYXlSZWYgPSBudWxsO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnbnpTdWdnZXN0aW9ucycpKSB7XHJcbiAgICAgIGlmICh0aGlzLmlzT3Blbikge1xyXG4gICAgICAgIHRoaXMucHJldmlvdXNWYWx1ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IC0xO1xyXG4gICAgICAgIHRoaXMucmVzZXREcm9wZG93bihmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jbG9zZURyb3Bkb3duKCk7XHJcbiAgfVxyXG5cclxuICBjbG9zZURyb3Bkb3duKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZiAmJiB0aGlzLm92ZXJsYXlSZWYuaGFzQXR0YWNoZWQoKSkge1xyXG4gICAgICB0aGlzLm92ZXJsYXlSZWYuZGV0YWNoKCk7XHJcbiAgICAgIHRoaXMub3ZlcmxheUJhY2tkcm9wQ2xpY2tTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcclxuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9wZW5Ecm9wZG93bigpOiB2b2lkIHtcclxuICAgIHRoaXMuYXR0YWNoT3ZlcmxheSgpO1xyXG4gICAgdGhpcy5pc09wZW4gPSB0cnVlO1xyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIGdldE1lbnRpb25zKCk6IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiB0aGlzLnRyaWdnZXIgPyBnZXRNZW50aW9ucyh0aGlzLnRyaWdnZXIudmFsdWUsIHRoaXMubnpQcmVmaXgpIDogW107XHJcbiAgfVxyXG5cclxuICBzZWxlY3RTdWdnZXN0aW9uKHN1Z2dlc3Rpb246IHN0cmluZyB8IHt9KTogdm9pZCB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMubnpWYWx1ZVdpdGgoc3VnZ2VzdGlvbik7XHJcbiAgICB0aGlzLnRyaWdnZXIuaW5zZXJ0TWVudGlvbih7XHJcbiAgICAgIG1lbnRpb246IHZhbHVlLFxyXG4gICAgICBzdGFydFBvczogdGhpcy5jdXJzb3JNZW50aW9uU3RhcnQsXHJcbiAgICAgIGVuZFBvczogdGhpcy5jdXJzb3JNZW50aW9uRW5kXHJcbiAgICB9KTtcclxuICAgIHRoaXMubnpPblNlbGVjdC5lbWl0KHN1Z2dlc3Rpb24pO1xyXG4gICAgdGhpcy5jbG9zZURyb3Bkb3duKCk7XHJcbiAgICB0aGlzLmFjdGl2ZUluZGV4ID0gLTE7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhbmRsZUlucHV0KGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnQ7XHJcbiAgICB0aGlzLnRyaWdnZXIub25DaGFuZ2UodGFyZ2V0LnZhbHVlKTtcclxuICAgIHRoaXMudHJpZ2dlci52YWx1ZSA9IHRhcmdldC52YWx1ZTtcclxuICAgIHRoaXMucmVzZXREcm9wZG93bigpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVLZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCBrZXlDb2RlID0gZXZlbnQua2V5Q29kZTtcclxuICAgIGlmICh0aGlzLmlzT3BlbiAmJiBrZXlDb2RlID09PSBFTlRFUiAmJiB0aGlzLmFjdGl2ZUluZGV4ICE9PSAtMSAmJiB0aGlzLmZpbHRlcmVkU3VnZ2VzdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0U3VnZ2VzdGlvbih0aGlzLmZpbHRlcmVkU3VnZ2VzdGlvbnNbdGhpcy5hY3RpdmVJbmRleF0pO1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSBlbHNlIGlmIChrZXlDb2RlID09PSBMRUZUX0FSUk9XIHx8IGtleUNvZGUgPT09IFJJR0hUX0FSUk9XKSB7XHJcbiAgICAgIHRoaXMucmVzZXREcm9wZG93bigpO1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLmlzT3BlbiAmJiAoa2V5Q29kZSA9PT0gVEFCIHx8IGtleUNvZGUgPT09IEVTQ0FQRSkpIHtcclxuICAgICAgICB0aGlzLmNsb3NlRHJvcGRvd24oKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLmlzT3BlbiAmJiBrZXlDb2RlID09PSBVUF9BUlJPVykge1xyXG4gICAgICAgIHRoaXMuc2V0UHJldmlvdXNJdGVtQWN0aXZlKCk7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuaXNPcGVuICYmIGtleUNvZGUgPT09IERPV05fQVJST1cpIHtcclxuICAgICAgICB0aGlzLnNldE5leHRJdGVtQWN0aXZlKCk7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVDbGljaygpOiB2b2lkIHtcclxuICAgIHRoaXMucmVzZXREcm9wZG93bigpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBiaW5kVHJpZ2dlckV2ZW50cygpOiB2b2lkIHtcclxuICAgIHRoaXMudHJpZ2dlci5vbklucHV0LnN1YnNjcmliZSgoZTogS2V5Ym9hcmRFdmVudCkgPT4gdGhpcy5oYW5kbGVJbnB1dChlKSk7XHJcbiAgICB0aGlzLnRyaWdnZXIub25LZXlkb3duLnN1YnNjcmliZSgoZTogS2V5Ym9hcmRFdmVudCkgPT4gdGhpcy5oYW5kbGVLZXlkb3duKGUpKTtcclxuICAgIHRoaXMudHJpZ2dlci5vbkNsaWNrLnN1YnNjcmliZSgoKSA9PiB0aGlzLmhhbmRsZUNsaWNrKCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdWdnZXN0aW9uc0ZpbHRlcih2YWx1ZTogc3RyaW5nLCBlbWl0OiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBjb25zdCBzdWdnZXN0aW9ucyA9IHZhbHVlLnN1YnN0cmluZygxKTtcclxuICAgIGlmICh0aGlzLnByZXZpb3VzVmFsdWUgPT09IHZhbHVlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMucHJldmlvdXNWYWx1ZSA9IHZhbHVlO1xyXG4gICAgaWYgKGVtaXQpIHtcclxuICAgICAgdGhpcy5uek9uU2VhcmNoQ2hhbmdlLmVtaXQoe1xyXG4gICAgICAgIHZhbHVlOiB0aGlzLmN1cnNvck1lbnRpb24hLnN1YnN0cmluZygxKSxcclxuICAgICAgICBwcmVmaXg6IHRoaXMuY3Vyc29yTWVudGlvbiFbMF1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzZWFyY2hWYWx1ZSA9IHN1Z2dlc3Rpb25zLnRvTG93ZXJDYXNlKCk7XHJcbiAgICB0aGlzLmZpbHRlcmVkU3VnZ2VzdGlvbnMgPSB0aGlzLm56U3VnZ2VzdGlvbnMuZmlsdGVyKHN1Z2dlc3Rpb24gPT5cclxuICAgICAgdGhpcy5uelZhbHVlV2l0aChzdWdnZXN0aW9uKVxyXG4gICAgICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgLmluY2x1ZGVzKHNlYXJjaFZhbHVlKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVzZXREcm9wZG93bihlbWl0OiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xyXG4gICAgdGhpcy5yZXNldEN1cnNvck1lbnRpb24oKTtcclxuICAgIGlmICh0eXBlb2YgdGhpcy5jdXJzb3JNZW50aW9uICE9PSAnc3RyaW5nJyB8fCAhdGhpcy5jYW5PcGVuKCkpIHtcclxuICAgICAgdGhpcy5jbG9zZURyb3Bkb3duKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuc3VnZ2VzdGlvbnNGaWx0ZXIodGhpcy5jdXJzb3JNZW50aW9uLCBlbWl0KTtcclxuICAgIGNvbnN0IGFjdGl2ZUluZGV4ID0gdGhpcy5maWx0ZXJlZFN1Z2dlc3Rpb25zLmluZGV4T2YodGhpcy5jdXJzb3JNZW50aW9uLnN1YnN0cmluZygxKSk7XHJcbiAgICB0aGlzLmFjdGl2ZUluZGV4ID0gYWN0aXZlSW5kZXggPj0gMCA/IGFjdGl2ZUluZGV4IDogMDtcclxuICAgIHRoaXMub3BlbkRyb3Bkb3duKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldE5leHRJdGVtQWN0aXZlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5hY3RpdmVJbmRleCA9IHRoaXMuYWN0aXZlSW5kZXggKyAxIDw9IHRoaXMuZmlsdGVyZWRTdWdnZXN0aW9ucy5sZW5ndGggLSAxID8gdGhpcy5hY3RpdmVJbmRleCArIDEgOiAwO1xyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0UHJldmlvdXNJdGVtQWN0aXZlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5hY3RpdmVJbmRleCA9IHRoaXMuYWN0aXZlSW5kZXggLSAxIDwgMCA/IHRoaXMuZmlsdGVyZWRTdWdnZXN0aW9ucy5sZW5ndGggLSAxIDogdGhpcy5hY3RpdmVJbmRleCAtIDE7XHJcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYW5PcGVuKCk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgZWxlbWVudDogSFRNTElucHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnQgPSB0aGlzLnRyaWdnZXJOYXRpdmVFbGVtZW50O1xyXG4gICAgcmV0dXJuICFlbGVtZW50LnJlYWRPbmx5ICYmICFlbGVtZW50LmRpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZXNldEN1cnNvck1lbnRpb24oKTogdm9pZCB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMudHJpZ2dlck5hdGl2ZUVsZW1lbnQudmFsdWUucmVwbGFjZSgvW1xcclxcbl0vZywgJyAnKSB8fCAnJztcclxuICAgIGNvbnN0IHNlbGVjdGlvblN0YXJ0ID0gdGhpcy50cmlnZ2VyTmF0aXZlRWxlbWVudC5zZWxlY3Rpb25TdGFydCE7XHJcbiAgICBjb25zdCBwcmVmaXggPSB0eXBlb2YgdGhpcy5uelByZWZpeCA9PT0gJ3N0cmluZycgPyBbdGhpcy5uelByZWZpeF0gOiB0aGlzLm56UHJlZml4O1xyXG4gICAgbGV0IGkgPSBwcmVmaXgubGVuZ3RoO1xyXG4gICAgd2hpbGUgKGkgPj0gMCkge1xyXG4gICAgICBjb25zdCBzdGFydFBvcyA9IHZhbHVlLmxhc3RJbmRleE9mKHByZWZpeFtpXSwgc2VsZWN0aW9uU3RhcnQpO1xyXG4gICAgICBjb25zdCBlbmRQb3MgPSB2YWx1ZS5pbmRleE9mKCcgJywgc2VsZWN0aW9uU3RhcnQpID4gLTEgPyB2YWx1ZS5pbmRleE9mKCcgJywgc2VsZWN0aW9uU3RhcnQpIDogdmFsdWUubGVuZ3RoO1xyXG4gICAgICBjb25zdCBtZW50aW9uID0gdmFsdWUuc3Vic3RyaW5nKHN0YXJ0UG9zLCBlbmRQb3MpO1xyXG4gICAgICBpZiAoKHN0YXJ0UG9zID4gMCAmJiB2YWx1ZVtzdGFydFBvcyAtIDFdICE9PSAnICcpIHx8IHN0YXJ0UG9zIDwgMCB8fCBtZW50aW9uLmluY2x1ZGVzKHByZWZpeFtpXSwgMSkgfHwgbWVudGlvbi5pbmNsdWRlcygnICcpKSB7XHJcbiAgICAgICAgdGhpcy5jdXJzb3JNZW50aW9uID0gbnVsbDtcclxuICAgICAgICB0aGlzLmN1cnNvck1lbnRpb25TdGFydCA9IC0xO1xyXG4gICAgICAgIHRoaXMuY3Vyc29yTWVudGlvbkVuZCA9IC0xO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY3Vyc29yTWVudGlvbiA9IG1lbnRpb247XHJcbiAgICAgICAgdGhpcy5jdXJzb3JNZW50aW9uU3RhcnQgPSBzdGFydFBvcztcclxuICAgICAgICB0aGlzLmN1cnNvck1lbnRpb25FbmQgPSBlbmRQb3M7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGktLTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlUG9zaXRpb25zKCk6IHZvaWQge1xyXG4gICAgY29uc3QgY29vcmRpbmF0ZXMgPSBnZXRDYXJldENvb3JkaW5hdGVzKHRoaXMudHJpZ2dlck5hdGl2ZUVsZW1lbnQsIHRoaXMuY3Vyc29yTWVudGlvblN0YXJ0KTtcclxuICAgIGNvbnN0IHRvcCA9XHJcbiAgICAgIGNvb3JkaW5hdGVzLnRvcCAtXHJcbiAgICAgIHRoaXMudHJpZ2dlck5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0IC1cclxuICAgICAgdGhpcy50cmlnZ2VyTmF0aXZlRWxlbWVudC5zY3JvbGxUb3AgK1xyXG4gICAgICAodGhpcy5uelBsYWNlbWVudCA9PT0gJ2JvdHRvbScgPyBjb29yZGluYXRlcy5oZWlnaHQgLSA2IDogLTYpO1xyXG4gICAgY29uc3QgbGVmdCA9IGNvb3JkaW5hdGVzLmxlZnQgLSB0aGlzLnRyaWdnZXJOYXRpdmVFbGVtZW50LnNjcm9sbExlZnQ7XHJcbiAgICB0aGlzLnBvc2l0aW9uU3RyYXRlZ3kud2l0aERlZmF1bHRPZmZzZXRYKGxlZnQpLndpdGhEZWZhdWx0T2Zmc2V0WSh0b3ApO1xyXG4gICAgaWYgKHRoaXMubnpQbGFjZW1lbnQgPT09ICdib3R0b20nKSB7XHJcbiAgICAgIHRoaXMucG9zaXRpb25TdHJhdGVneS53aXRoUG9zaXRpb25zKFsuLi5ERUZBVUxUX01FTlRJT05fQk9UVE9NX1BPU0lUSU9OU10pO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubnpQbGFjZW1lbnQgPT09ICd0b3AnKSB7XHJcbiAgICAgIHRoaXMucG9zaXRpb25TdHJhdGVneS53aXRoUG9zaXRpb25zKFsuLi5ERUZBVUxUX01FTlRJT05fVE9QX1BPU0lUSU9OU10pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wb3NpdGlvblN0cmF0ZWd5LmFwcGx5KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN1YnNjcmliZU92ZXJsYXlCYWNrZHJvcENsaWNrKCk6IFN1YnNjcmlwdGlvbiB7XHJcbiAgICByZXR1cm4gbWVyZ2U8TW91c2VFdmVudCB8IFRvdWNoRXZlbnQ+KFxyXG4gICAgICBmcm9tRXZlbnQ8TW91c2VFdmVudD4odGhpcy5uZ0RvY3VtZW50LCAnY2xpY2snKSxcclxuICAgICAgZnJvbUV2ZW50PFRvdWNoRXZlbnQ+KHRoaXMubmdEb2N1bWVudCwgJ3RvdWNoZW5kJylcclxuICAgICkuc3Vic2NyaWJlKChldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpID0+IHtcclxuICAgICAgY29uc3QgY2xpY2tUYXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aGlzLmlzT3BlbiAmJlxyXG4gICAgICAgIGNsaWNrVGFyZ2V0ICE9PSB0aGlzLnRyaWdnZXIuZWwubmF0aXZlRWxlbWVudCAmJlxyXG4gICAgICAgICEhdGhpcy5vdmVybGF5UmVmICYmXHJcbiAgICAgICAgIXRoaXMub3ZlcmxheVJlZi5vdmVybGF5RWxlbWVudC5jb250YWlucyhjbGlja1RhcmdldClcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZURyb3Bkb3duKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhdHRhY2hPdmVybGF5KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLm92ZXJsYXlSZWYpIHtcclxuICAgICAgdGhpcy5wb3J0YWwgPSBuZXcgVGVtcGxhdGVQb3J0YWwodGhpcy5zdWdnZXN0aW9uc1RlbXAsIHRoaXMudmlld0NvbnRhaW5lclJlZik7XHJcbiAgICAgIHRoaXMub3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUodGhpcy5nZXRPdmVybGF5Q29uZmlnKCkpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZiAmJiAhdGhpcy5vdmVybGF5UmVmLmhhc0F0dGFjaGVkKCkpIHtcclxuICAgICAgdGhpcy5vdmVybGF5UmVmLmF0dGFjaCh0aGlzLnBvcnRhbCk7XHJcbiAgICAgIHRoaXMub3ZlcmxheUJhY2tkcm9wQ2xpY2tTdWJzY3JpcHRpb24gPSB0aGlzLnN1YnNjcmliZU92ZXJsYXlCYWNrZHJvcENsaWNrKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnVwZGF0ZVBvc2l0aW9ucygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRPdmVybGF5Q29uZmlnKCk6IE92ZXJsYXlDb25maWcge1xyXG4gICAgcmV0dXJuIG5ldyBPdmVybGF5Q29uZmlnKHtcclxuICAgICAgcG9zaXRpb25TdHJhdGVneTogdGhpcy5nZXRPdmVybGF5UG9zaXRpb24oKSxcclxuICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLnJlcG9zaXRpb24oKVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE92ZXJsYXlQb3NpdGlvbigpOiBQb3NpdGlvblN0cmF0ZWd5IHtcclxuICAgIGNvbnN0IHBvc2l0aW9ucyA9IFtcclxuICAgICAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAnYm90dG9tJyB9LCB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ3RvcCcgfSksXHJcbiAgICAgIG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ3RvcCcgfSwgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICdib3R0b20nIH0pXHJcbiAgICBdO1xyXG4gICAgdGhpcy5wb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5XHJcbiAgICAgIC5wb3NpdGlvbigpXHJcbiAgICAgIC5mbGV4aWJsZUNvbm5lY3RlZFRvKHRoaXMudHJpZ2dlci5lbClcclxuICAgICAgLndpdGhQb3NpdGlvbnMocG9zaXRpb25zKVxyXG4gICAgICAud2l0aEZsZXhpYmxlRGltZW5zaW9ucyhmYWxzZSlcclxuICAgICAgLndpdGhQdXNoKGZhbHNlKTtcclxuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uU3RyYXRlZ3k7XHJcbiAgfVxyXG59XHJcbiIsIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPG5nLXRlbXBsYXRlICNzdWdnZXN0aW9ucz5cclxuICA8dWwgY2xhc3M9XCJhbnQtbWVudGlvbi1kcm9wZG93blwiPlxyXG4gICAgPGxpXHJcbiAgICAgIGNsYXNzPVwiYW50LW1lbnRpb24tZHJvcGRvd24taXRlbVwiXHJcbiAgICAgICpuZ0Zvcj1cImxldCBzdWdnZXN0aW9uIG9mIGZpbHRlcmVkU3VnZ2VzdGlvbnM7IGxldCBpID0gaW5kZXhcIlxyXG4gICAgICBbY2xhc3MuZm9jdXNdPVwiaSA9PT0gYWN0aXZlSW5kZXhcIlxyXG4gICAgICAobW91c2Vkb3duKT1cIiRldmVudC5wcmV2ZW50RGVmYXVsdCgpXCJcclxuICAgICAgKGNsaWNrKT1cInNlbGVjdFN1Z2dlc3Rpb24oc3VnZ2VzdGlvbilcIlxyXG4gICAgPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic3VnZ2VzdGlvblRlbXBsYXRlOyBlbHNlIGRlZmF1bHRTdWdnZXN0aW9uXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lclxyXG4gICAgICAgICAgKm5nVGVtcGxhdGVPdXRsZXQ9XCJzdWdnZXN0aW9uVGVtcGxhdGU7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBzdWdnZXN0aW9uIH1cIlxyXG4gICAgICAgID48L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdFN1Z2dlc3Rpb24+e3sgbnpWYWx1ZVdpdGgoc3VnZ2VzdGlvbikgfX08L25nLXRlbXBsYXRlPlxyXG4gICAgPC9saT5cclxuICAgIDxsaVxyXG4gICAgICBjbGFzcz1cImFudC1tZW50aW9uLWRyb3Bkb3duLW5vdGZvdW5kIGFudC1tZW50aW9uLWRyb3Bkb3duLWl0ZW1cIlxyXG4gICAgICAqbmdJZj1cImZpbHRlcmVkU3VnZ2VzdGlvbnMubGVuZ3RoID09PSAwXCJcclxuICAgID5cclxuICAgICAgPHNwYW4gKm5nSWY9XCJuekxvYWRpbmdcIj48aSBuei1pY29uIG56VHlwZT1cImxvYWRpbmdcIj48L2k+PC9zcGFuPlxyXG4gICAgICA8c3BhbiAqbmdJZj1cIiFuekxvYWRpbmdcIj57eyBuek5vdEZvdW5kQ29udGVudCB9fTwvc3Bhbj5cclxuICAgIDwvbGk+XHJcbiAgPC91bD5cclxuPC9uZy10ZW1wbGF0ZT5cclxuIl19
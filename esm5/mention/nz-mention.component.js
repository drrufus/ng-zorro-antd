import { __decorate, __metadata, __read, __spread } from "tslib";
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
var _c0 = function (a0) { return { $implicit: a0 }; };
function NzMentionComponent_ng_template_1_li_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzMentionComponent_ng_template_1_li_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 7);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var suggestion_r587 = i0.ɵɵnextContext().$implicit;
    var ctx_r589 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r589.suggestionTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c0, suggestion_r587));
} }
function NzMentionComponent_ng_template_1_li_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    var suggestion_r587 = i0.ɵɵnextContext().$implicit;
    var ctx_r591 = i0.ɵɵnextContext(2);
    i0.ɵɵtextInterpolate(ctx_r591.nzValueWith(suggestion_r587));
} }
function NzMentionComponent_ng_template_1_li_1_Template(rf, ctx) { if (rf & 1) {
    var _r596 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 4);
    i0.ɵɵlistener("mousedown", function NzMentionComponent_ng_template_1_li_1_Template_li_mousedown_0_listener($event) { i0.ɵɵrestoreView(_r596); return $event.preventDefault(); })("click", function NzMentionComponent_ng_template_1_li_1_Template_li_click_0_listener($event) { i0.ɵɵrestoreView(_r596); var suggestion_r587 = ctx.$implicit; var ctx_r597 = i0.ɵɵnextContext(2); return ctx_r597.selectSuggestion(suggestion_r587); });
    i0.ɵɵtemplate(1, NzMentionComponent_ng_template_1_li_1_ng_container_1_Template, 2, 4, "ng-container", 5);
    i0.ɵɵtemplate(2, NzMentionComponent_ng_template_1_li_1_ng_template_2_Template, 1, 1, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var i_r588 = ctx.index;
    var _r590 = i0.ɵɵreference(3);
    var ctx_r585 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("focus", i_r588 === ctx_r585.activeIndex);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r585.suggestionTemplate)("ngIfElse", _r590);
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
    var ctx_r599 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r599.nzNotFoundContent);
} }
function NzMentionComponent_ng_template_1_li_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 8);
    i0.ɵɵtemplate(1, NzMentionComponent_ng_template_1_li_2_span_1_Template, 2, 0, "span", 9);
    i0.ɵɵtemplate(2, NzMentionComponent_ng_template_1_li_2_span_2_Template, 2, 1, "span", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r586 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r586.nzLoading);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r586.nzLoading);
} }
function NzMentionComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 1);
    i0.ɵɵtemplate(1, NzMentionComponent_ng_template_1_li_1_Template, 4, 3, "li", 2);
    i0.ɵɵtemplate(2, NzMentionComponent_ng_template_1_li_2_Template, 3, 2, "li", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r584 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r584.filteredSuggestions);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r584.filteredSuggestions.length === 0);
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
    return NzMentionComponent;
}());
export { NzMentionComponent };
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
                    "\n      .ant-mention-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL21lbnRpb24vIiwic291cmNlcyI6WyJuei1tZW50aW9uLmNvbXBvbmVudC50cyIsIm56LW1lbnRpb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRyxPQUFPLEVBQ0wsc0JBQXNCLEVBRXRCLE9BQU8sRUFDUCxhQUFhLEVBR2QsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFckQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFFTixXQUFXLEVBQ1gsU0FBUyxFQUNULGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFFdEQsT0FBTyxFQUNMLGdDQUFnQyxFQUNoQyw2QkFBNkIsRUFDN0IsbUJBQW1CLEVBQ25CLFdBQVcsRUFDWCxZQUFZLEVBQ2IsTUFBTSxvQkFBb0IsQ0FBQztBQUU1QixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUV4RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7OztJQ3hDaEQsd0JBRWdCOzs7O0lBSGxCLDZCQUNFO0lBQUEsdUhBRUM7SUFDSCwwQkFBZTs7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QVEsRUFBRSxXQUFXO2dCQUNyQixXQUFXLEVBQUUsNkJBQTZCO2dCQUMxQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7Z0JBQzdCLE1BQU0sRUFBRTtvQkFDTixnTUFTQztpQkFDRjthQUNGOztzQkF5Q0ksUUFBUTs7c0JBQUksTUFBTTt1QkFBQyxRQUFROztrQkF2QzdCLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLE1BQU07O2tCQUNOLE1BQU07O2tCQUdOLFNBQVM7bUJBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7a0JBRXhDLFlBQVk7bUJBQUMsNEJBQTRCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IERPV05fQVJST1csIEVOVEVSLCBFU0NBUEUsIExFRlRfQVJST1csIFJJR0hUX0FSUk9XLCBUQUIsIFVQX0FSUk9XIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcclxuaW1wb3J0IHtcclxuICBDb25uZWN0aW9uUG9zaXRpb25QYWlyLFxyXG4gIEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSxcclxuICBPdmVybGF5LFxyXG4gIE92ZXJsYXlDb25maWcsXHJcbiAgT3ZlcmxheVJlZixcclxuICBQb3NpdGlvblN0cmF0ZWd5XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBUZW1wbGF0ZVBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xyXG5cclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEluamVjdCxcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0NvbnRhaW5lclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgZnJvbUV2ZW50LCBtZXJnZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIERFRkFVTFRfTUVOVElPTl9CT1RUT01fUE9TSVRJT05TLFxyXG4gIERFRkFVTFRfTUVOVElPTl9UT1BfUE9TSVRJT05TLFxyXG4gIGdldENhcmV0Q29vcmRpbmF0ZXMsXHJcbiAgZ2V0TWVudGlvbnMsXHJcbiAgSW5wdXRCb29sZWFuXHJcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56TWVudGlvblN1Z2dlc3Rpb25EaXJlY3RpdmUgfSBmcm9tICcuL256LW1lbnRpb24tc3VnZ2VzdGlvbnMnO1xyXG5pbXBvcnQgeyBOek1lbnRpb25UcmlnZ2VyRGlyZWN0aXZlIH0gZnJvbSAnLi9uei1tZW50aW9uLXRyaWdnZXInO1xyXG5pbXBvcnQgeyBOek1lbnRpb25TZXJ2aWNlIH0gZnJvbSAnLi9uei1tZW50aW9uLnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNZW50aW9uT25TZWFyY2hUeXBlcyB7XHJcbiAgdmFsdWU6IHN0cmluZztcclxuICBwcmVmaXg6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNZW50aW9uIHtcclxuICBzdGFydFBvczogbnVtYmVyO1xyXG4gIGVuZFBvczogbnVtYmVyO1xyXG4gIG1lbnRpb246IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgTWVudGlvblBsYWNlbWVudCA9ICd0b3AnIHwgJ2JvdHRvbSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LW1lbnRpb24nLFxyXG4gIGV4cG9ydEFzOiAnbnpNZW50aW9uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotbWVudGlvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJvdmlkZXJzOiBbTnpNZW50aW9uU2VydmljZV0sXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIC5hbnQtbWVudGlvbi1kcm9wZG93biB7XHJcbiAgICAgICAgdG9wOiAxMDAlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOek1lbnRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBuelZhbHVlV2l0aDogKHZhbHVlOiBhbnkpID0+IHN0cmluZyA9IHZhbHVlID0+IHZhbHVlOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxyXG4gIEBJbnB1dCgpIG56UHJlZml4OiBzdHJpbmcgfCBzdHJpbmdbXSA9ICdAJztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpMb2FkaW5nID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpOb3RGb3VuZENvbnRlbnQ6IHN0cmluZyA9ICfml6DljLnphY3nu5PmnpzvvIzovbvmlbLnqbrmoLzlrozmiJDovpPlhaUnO1xyXG4gIEBJbnB1dCgpIG56UGxhY2VtZW50OiBNZW50aW9uUGxhY2VtZW50ID0gJ2JvdHRvbSc7XHJcbiAgQElucHV0KCkgbnpTdWdnZXN0aW9uczogc3RyaW5nW10gPSBbXTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPblNlbGVjdDogRXZlbnRFbWl0dGVyPHN0cmluZyB8IHt9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPblNlYXJjaENoYW5nZTogRXZlbnRFbWl0dGVyPE1lbnRpb25PblNlYXJjaFR5cGVzPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgdHJpZ2dlcjogTnpNZW50aW9uVHJpZ2dlckRpcmVjdGl2ZTtcclxuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmLCB7IHN0YXRpYzogZmFsc2UgfSkgc3VnZ2VzdGlvbnNUZW1wOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgQENvbnRlbnRDaGlsZChOek1lbnRpb25TdWdnZXN0aW9uRGlyZWN0aXZlLCB7IHN0YXRpYzogZmFsc2UsIHJlYWQ6IFRlbXBsYXRlUmVmIH0pXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHNldCBzdWdnZXN0aW9uQ2hpbGQodmFsdWU6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBhbnkgfT4pIHtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICB0aGlzLnN1Z2dlc3Rpb25UZW1wbGF0ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaXNPcGVuID0gZmFsc2U7XHJcbiAgZmlsdGVyZWRTdWdnZXN0aW9uczogc3RyaW5nW10gPSBbXTtcclxuICBzdWdnZXN0aW9uVGVtcGxhdGU6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBhbnkgfT4gfCBudWxsID0gbnVsbDsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcclxuICBhY3RpdmVJbmRleCA9IC0xO1xyXG5cclxuICBwcml2YXRlIHByZXZpb3VzVmFsdWU6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gIHByaXZhdGUgY3Vyc29yTWVudGlvbjogc3RyaW5nIHwgbnVsbDtcclxuICBwcml2YXRlIGN1cnNvck1lbnRpb25TdGFydDogbnVtYmVyO1xyXG4gIHByaXZhdGUgY3Vyc29yTWVudGlvbkVuZDogbnVtYmVyO1xyXG4gIHByaXZhdGUgb3ZlcmxheVJlZjogT3ZlcmxheVJlZiB8IG51bGw7XHJcbiAgcHJpdmF0ZSBwb3J0YWw6IFRlbXBsYXRlUG9ydGFsPHZvaWQ+O1xyXG4gIHByaXZhdGUgcG9zaXRpb25TdHJhdGVneTogRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5O1xyXG4gIHByaXZhdGUgb3ZlcmxheUJhY2tkcm9wQ2xpY2tTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgcHJpdmF0ZSBnZXQgdHJpZ2dlck5hdGl2ZUVsZW1lbnQoKTogSFRNTFRleHRBcmVhRWxlbWVudCB8IEhUTUxJbnB1dEVsZW1lbnQge1xyXG4gICAgcmV0dXJuIHRoaXMudHJpZ2dlci5lbC5uYXRpdmVFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIG5nRG9jdW1lbnQ6IGFueSwgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcclxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LFxyXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgcHJpdmF0ZSBuek1lbnRpb25TZXJ2aWNlOiBOek1lbnRpb25TZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMubnpNZW50aW9uU2VydmljZS50cmlnZ2VyQ2hhbmdlZCgpLnN1YnNjcmliZSh0cmlnZ2VyID0+IHtcclxuICAgICAgdGhpcy50cmlnZ2VyID0gdHJpZ2dlcjtcclxuICAgICAgdGhpcy5iaW5kVHJpZ2dlckV2ZW50cygpO1xyXG4gICAgICB0aGlzLmNsb3NlRHJvcGRvd24oKTtcclxuICAgICAgdGhpcy5vdmVybGF5UmVmID0gbnVsbDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ256U3VnZ2VzdGlvbnMnKSkge1xyXG4gICAgICBpZiAodGhpcy5pc09wZW4pIHtcclxuICAgICAgICB0aGlzLnByZXZpb3VzVmFsdWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSAtMTtcclxuICAgICAgICB0aGlzLnJlc2V0RHJvcGRvd24oZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xvc2VEcm9wZG93bigpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2VEcm9wZG93bigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYgJiYgdGhpcy5vdmVybGF5UmVmLmhhc0F0dGFjaGVkKCkpIHtcclxuICAgICAgdGhpcy5vdmVybGF5UmVmLmRldGFjaCgpO1xyXG4gICAgICB0aGlzLm92ZXJsYXlCYWNrZHJvcENsaWNrU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvcGVuRHJvcGRvd24oKTogdm9pZCB7XHJcbiAgICB0aGlzLmF0dGFjaE92ZXJsYXkoKTtcclxuICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBnZXRNZW50aW9ucygpOiBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gdGhpcy50cmlnZ2VyID8gZ2V0TWVudGlvbnModGhpcy50cmlnZ2VyLnZhbHVlLCB0aGlzLm56UHJlZml4KSA6IFtdO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0U3VnZ2VzdGlvbihzdWdnZXN0aW9uOiBzdHJpbmcgfCB7fSk6IHZvaWQge1xyXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLm56VmFsdWVXaXRoKHN1Z2dlc3Rpb24pO1xyXG4gICAgdGhpcy50cmlnZ2VyLmluc2VydE1lbnRpb24oe1xyXG4gICAgICBtZW50aW9uOiB2YWx1ZSxcclxuICAgICAgc3RhcnRQb3M6IHRoaXMuY3Vyc29yTWVudGlvblN0YXJ0LFxyXG4gICAgICBlbmRQb3M6IHRoaXMuY3Vyc29yTWVudGlvbkVuZFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLm56T25TZWxlY3QuZW1pdChzdWdnZXN0aW9uKTtcclxuICAgIHRoaXMuY2xvc2VEcm9wZG93bigpO1xyXG4gICAgdGhpcy5hY3RpdmVJbmRleCA9IC0xO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVJbnB1dChldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50O1xyXG4gICAgdGhpcy50cmlnZ2VyLm9uQ2hhbmdlKHRhcmdldC52YWx1ZSk7XHJcbiAgICB0aGlzLnRyaWdnZXIudmFsdWUgPSB0YXJnZXQudmFsdWU7XHJcbiAgICB0aGlzLnJlc2V0RHJvcGRvd24oKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlS2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgY29uc3Qga2V5Q29kZSA9IGV2ZW50LmtleUNvZGU7XHJcbiAgICBpZiAodGhpcy5pc09wZW4gJiYga2V5Q29kZSA9PT0gRU5URVIgJiYgdGhpcy5hY3RpdmVJbmRleCAhPT0gLTEgJiYgdGhpcy5maWx0ZXJlZFN1Z2dlc3Rpb25zLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLnNlbGVjdFN1Z2dlc3Rpb24odGhpcy5maWx0ZXJlZFN1Z2dlc3Rpb25zW3RoaXMuYWN0aXZlSW5kZXhdKTtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gTEVGVF9BUlJPVyB8fCBrZXlDb2RlID09PSBSSUdIVF9BUlJPVykge1xyXG4gICAgICB0aGlzLnJlc2V0RHJvcGRvd24oKTtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5pc09wZW4gJiYgKGtleUNvZGUgPT09IFRBQiB8fCBrZXlDb2RlID09PSBFU0NBUEUpKSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZURyb3Bkb3duKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5pc09wZW4gJiYga2V5Q29kZSA9PT0gVVBfQVJST1cpIHtcclxuICAgICAgICB0aGlzLnNldFByZXZpb3VzSXRlbUFjdGl2ZSgpO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLmlzT3BlbiAmJiBrZXlDb2RlID09PSBET1dOX0FSUk9XKSB7XHJcbiAgICAgICAgdGhpcy5zZXROZXh0SXRlbUFjdGl2ZSgpO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlQ2xpY2soKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlc2V0RHJvcGRvd24oKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYmluZFRyaWdnZXJFdmVudHMoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRyaWdnZXIub25JbnB1dC5zdWJzY3JpYmUoKGU6IEtleWJvYXJkRXZlbnQpID0+IHRoaXMuaGFuZGxlSW5wdXQoZSkpO1xyXG4gICAgdGhpcy50cmlnZ2VyLm9uS2V5ZG93bi5zdWJzY3JpYmUoKGU6IEtleWJvYXJkRXZlbnQpID0+IHRoaXMuaGFuZGxlS2V5ZG93bihlKSk7XHJcbiAgICB0aGlzLnRyaWdnZXIub25DbGljay5zdWJzY3JpYmUoKCkgPT4gdGhpcy5oYW5kbGVDbGljaygpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3VnZ2VzdGlvbnNGaWx0ZXIodmFsdWU6IHN0cmluZywgZW1pdDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgY29uc3Qgc3VnZ2VzdGlvbnMgPSB2YWx1ZS5zdWJzdHJpbmcoMSk7XHJcbiAgICBpZiAodGhpcy5wcmV2aW91c1ZhbHVlID09PSB2YWx1ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnByZXZpb3VzVmFsdWUgPSB2YWx1ZTtcclxuICAgIGlmIChlbWl0KSB7XHJcbiAgICAgIHRoaXMubnpPblNlYXJjaENoYW5nZS5lbWl0KHtcclxuICAgICAgICB2YWx1ZTogdGhpcy5jdXJzb3JNZW50aW9uIS5zdWJzdHJpbmcoMSksXHJcbiAgICAgICAgcHJlZml4OiB0aGlzLmN1cnNvck1lbnRpb24hWzBdXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2VhcmNoVmFsdWUgPSBzdWdnZXN0aW9ucy50b0xvd2VyQ2FzZSgpO1xyXG4gICAgdGhpcy5maWx0ZXJlZFN1Z2dlc3Rpb25zID0gdGhpcy5uelN1Z2dlc3Rpb25zLmZpbHRlcihzdWdnZXN0aW9uID0+XHJcbiAgICAgIHRoaXMubnpWYWx1ZVdpdGgoc3VnZ2VzdGlvbilcclxuICAgICAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgIC5pbmNsdWRlcyhzZWFyY2hWYWx1ZSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlc2V0RHJvcGRvd24oZW1pdDogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcclxuICAgIHRoaXMucmVzZXRDdXJzb3JNZW50aW9uKCk7XHJcbiAgICBpZiAodHlwZW9mIHRoaXMuY3Vyc29yTWVudGlvbiAhPT0gJ3N0cmluZycgfHwgIXRoaXMuY2FuT3BlbigpKSB7XHJcbiAgICAgIHRoaXMuY2xvc2VEcm9wZG93bigpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnN1Z2dlc3Rpb25zRmlsdGVyKHRoaXMuY3Vyc29yTWVudGlvbiwgZW1pdCk7XHJcbiAgICBjb25zdCBhY3RpdmVJbmRleCA9IHRoaXMuZmlsdGVyZWRTdWdnZXN0aW9ucy5pbmRleE9mKHRoaXMuY3Vyc29yTWVudGlvbi5zdWJzdHJpbmcoMSkpO1xyXG4gICAgdGhpcy5hY3RpdmVJbmRleCA9IGFjdGl2ZUluZGV4ID49IDAgPyBhY3RpdmVJbmRleCA6IDA7XHJcbiAgICB0aGlzLm9wZW5Ecm9wZG93bigpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXROZXh0SXRlbUFjdGl2ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuYWN0aXZlSW5kZXggPSB0aGlzLmFjdGl2ZUluZGV4ICsgMSA8PSB0aGlzLmZpbHRlcmVkU3VnZ2VzdGlvbnMubGVuZ3RoIC0gMSA/IHRoaXMuYWN0aXZlSW5kZXggKyAxIDogMDtcclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFByZXZpb3VzSXRlbUFjdGl2ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuYWN0aXZlSW5kZXggPSB0aGlzLmFjdGl2ZUluZGV4IC0gMSA8IDAgPyB0aGlzLmZpbHRlcmVkU3VnZ2VzdGlvbnMubGVuZ3RoIC0gMSA6IHRoaXMuYWN0aXZlSW5kZXggLSAxO1xyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FuT3BlbigpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50ID0gdGhpcy50cmlnZ2VyTmF0aXZlRWxlbWVudDtcclxuICAgIHJldHVybiAhZWxlbWVudC5yZWFkT25seSAmJiAhZWxlbWVudC5kaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVzZXRDdXJzb3JNZW50aW9uKCk6IHZvaWQge1xyXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnRyaWdnZXJOYXRpdmVFbGVtZW50LnZhbHVlLnJlcGxhY2UoL1tcXHJcXG5dL2csICcgJykgfHwgJyc7XHJcbiAgICBjb25zdCBzZWxlY3Rpb25TdGFydCA9IHRoaXMudHJpZ2dlck5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQhO1xyXG4gICAgY29uc3QgcHJlZml4ID0gdHlwZW9mIHRoaXMubnpQcmVmaXggPT09ICdzdHJpbmcnID8gW3RoaXMubnpQcmVmaXhdIDogdGhpcy5uelByZWZpeDtcclxuICAgIGxldCBpID0gcHJlZml4Lmxlbmd0aDtcclxuICAgIHdoaWxlIChpID49IDApIHtcclxuICAgICAgY29uc3Qgc3RhcnRQb3MgPSB2YWx1ZS5sYXN0SW5kZXhPZihwcmVmaXhbaV0sIHNlbGVjdGlvblN0YXJ0KTtcclxuICAgICAgY29uc3QgZW5kUG9zID0gdmFsdWUuaW5kZXhPZignICcsIHNlbGVjdGlvblN0YXJ0KSA+IC0xID8gdmFsdWUuaW5kZXhPZignICcsIHNlbGVjdGlvblN0YXJ0KSA6IHZhbHVlLmxlbmd0aDtcclxuICAgICAgY29uc3QgbWVudGlvbiA9IHZhbHVlLnN1YnN0cmluZyhzdGFydFBvcywgZW5kUG9zKTtcclxuICAgICAgaWYgKChzdGFydFBvcyA+IDAgJiYgdmFsdWVbc3RhcnRQb3MgLSAxXSAhPT0gJyAnKSB8fCBzdGFydFBvcyA8IDAgfHwgbWVudGlvbi5pbmNsdWRlcyhwcmVmaXhbaV0sIDEpIHx8IG1lbnRpb24uaW5jbHVkZXMoJyAnKSkge1xyXG4gICAgICAgIHRoaXMuY3Vyc29yTWVudGlvbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jdXJzb3JNZW50aW9uU3RhcnQgPSAtMTtcclxuICAgICAgICB0aGlzLmN1cnNvck1lbnRpb25FbmQgPSAtMTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmN1cnNvck1lbnRpb24gPSBtZW50aW9uO1xyXG4gICAgICAgIHRoaXMuY3Vyc29yTWVudGlvblN0YXJ0ID0gc3RhcnRQb3M7XHJcbiAgICAgICAgdGhpcy5jdXJzb3JNZW50aW9uRW5kID0gZW5kUG9zO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpLS07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZVBvc2l0aW9ucygpOiB2b2lkIHtcclxuICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gZ2V0Q2FyZXRDb29yZGluYXRlcyh0aGlzLnRyaWdnZXJOYXRpdmVFbGVtZW50LCB0aGlzLmN1cnNvck1lbnRpb25TdGFydCk7XHJcbiAgICBjb25zdCB0b3AgPVxyXG4gICAgICBjb29yZGluYXRlcy50b3AgLVxyXG4gICAgICB0aGlzLnRyaWdnZXJOYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCAtXHJcbiAgICAgIHRoaXMudHJpZ2dlck5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wICtcclxuICAgICAgKHRoaXMubnpQbGFjZW1lbnQgPT09ICdib3R0b20nID8gY29vcmRpbmF0ZXMuaGVpZ2h0IC0gNiA6IC02KTtcclxuICAgIGNvbnN0IGxlZnQgPSBjb29yZGluYXRlcy5sZWZ0IC0gdGhpcy50cmlnZ2VyTmF0aXZlRWxlbWVudC5zY3JvbGxMZWZ0O1xyXG4gICAgdGhpcy5wb3NpdGlvblN0cmF0ZWd5LndpdGhEZWZhdWx0T2Zmc2V0WChsZWZ0KS53aXRoRGVmYXVsdE9mZnNldFkodG9wKTtcclxuICAgIGlmICh0aGlzLm56UGxhY2VtZW50ID09PSAnYm90dG9tJykge1xyXG4gICAgICB0aGlzLnBvc2l0aW9uU3RyYXRlZ3kud2l0aFBvc2l0aW9ucyhbLi4uREVGQVVMVF9NRU5USU9OX0JPVFRPTV9QT1NJVElPTlNdKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm56UGxhY2VtZW50ID09PSAndG9wJykge1xyXG4gICAgICB0aGlzLnBvc2l0aW9uU3RyYXRlZ3kud2l0aFBvc2l0aW9ucyhbLi4uREVGQVVMVF9NRU5USU9OX1RPUF9QT1NJVElPTlNdKTtcclxuICAgIH1cclxuICAgIHRoaXMucG9zaXRpb25TdHJhdGVneS5hcHBseSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdWJzY3JpYmVPdmVybGF5QmFja2Ryb3BDbGljaygpOiBTdWJzY3JpcHRpb24ge1xyXG4gICAgcmV0dXJuIG1lcmdlPE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50PihcclxuICAgICAgZnJvbUV2ZW50PE1vdXNlRXZlbnQ+KHRoaXMubmdEb2N1bWVudCwgJ2NsaWNrJyksXHJcbiAgICAgIGZyb21FdmVudDxUb3VjaEV2ZW50Pih0aGlzLm5nRG9jdW1lbnQsICd0b3VjaGVuZCcpXHJcbiAgICApLnN1YnNjcmliZSgoZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IGNsaWNrVGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdGhpcy5pc09wZW4gJiZcclxuICAgICAgICBjbGlja1RhcmdldCAhPT0gdGhpcy50cmlnZ2VyLmVsLm5hdGl2ZUVsZW1lbnQgJiZcclxuICAgICAgICAhIXRoaXMub3ZlcmxheVJlZiAmJlxyXG4gICAgICAgICF0aGlzLm92ZXJsYXlSZWYub3ZlcmxheUVsZW1lbnQuY29udGFpbnMoY2xpY2tUYXJnZXQpXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMuY2xvc2VEcm9wZG93bigpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXR0YWNoT3ZlcmxheSgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5vdmVybGF5UmVmKSB7XHJcbiAgICAgIHRoaXMucG9ydGFsID0gbmV3IFRlbXBsYXRlUG9ydGFsKHRoaXMuc3VnZ2VzdGlvbnNUZW1wLCB0aGlzLnZpZXdDb250YWluZXJSZWYpO1xyXG4gICAgICB0aGlzLm92ZXJsYXlSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKHRoaXMuZ2V0T3ZlcmxheUNvbmZpZygpKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYgJiYgIXRoaXMub3ZlcmxheVJlZi5oYXNBdHRhY2hlZCgpKSB7XHJcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5hdHRhY2godGhpcy5wb3J0YWwpO1xyXG4gICAgICB0aGlzLm92ZXJsYXlCYWNrZHJvcENsaWNrU3Vic2NyaXB0aW9uID0gdGhpcy5zdWJzY3JpYmVPdmVybGF5QmFja2Ryb3BDbGljaygpO1xyXG4gICAgfVxyXG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbnMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0T3ZlcmxheUNvbmZpZygpOiBPdmVybGF5Q29uZmlnIHtcclxuICAgIHJldHVybiBuZXcgT3ZlcmxheUNvbmZpZyh7XHJcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3k6IHRoaXMuZ2V0T3ZlcmxheVBvc2l0aW9uKCksXHJcbiAgICAgIHNjcm9sbFN0cmF0ZWd5OiB0aGlzLm92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5yZXBvc2l0aW9uKClcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRPdmVybGF5UG9zaXRpb24oKTogUG9zaXRpb25TdHJhdGVneSB7XHJcbiAgICBjb25zdCBwb3NpdGlvbnMgPSBbXHJcbiAgICAgIG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ2JvdHRvbScgfSwgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICd0b3AnIH0pLFxyXG4gICAgICBuZXcgQ29ubmVjdGlvblBvc2l0aW9uUGFpcih7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICd0b3AnIH0sIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAnYm90dG9tJyB9KVxyXG4gICAgXTtcclxuICAgIHRoaXMucG9zaXRpb25TdHJhdGVneSA9IHRoaXMub3ZlcmxheVxyXG4gICAgICAucG9zaXRpb24oKVxyXG4gICAgICAuZmxleGlibGVDb25uZWN0ZWRUbyh0aGlzLnRyaWdnZXIuZWwpXHJcbiAgICAgIC53aXRoUG9zaXRpb25zKHBvc2l0aW9ucylcclxuICAgICAgLndpdGhGbGV4aWJsZURpbWVuc2lvbnMoZmFsc2UpXHJcbiAgICAgIC53aXRoUHVzaChmYWxzZSk7XHJcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvblN0cmF0ZWd5O1xyXG4gIH1cclxufVxyXG4iLCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjxuZy10ZW1wbGF0ZSAjc3VnZ2VzdGlvbnM+XHJcbiAgPHVsIGNsYXNzPVwiYW50LW1lbnRpb24tZHJvcGRvd25cIj5cclxuICAgIDxsaVxyXG4gICAgICBjbGFzcz1cImFudC1tZW50aW9uLWRyb3Bkb3duLWl0ZW1cIlxyXG4gICAgICAqbmdGb3I9XCJsZXQgc3VnZ2VzdGlvbiBvZiBmaWx0ZXJlZFN1Z2dlc3Rpb25zOyBsZXQgaSA9IGluZGV4XCJcclxuICAgICAgW2NsYXNzLmZvY3VzXT1cImkgPT09IGFjdGl2ZUluZGV4XCJcclxuICAgICAgKG1vdXNlZG93bik9XCIkZXZlbnQucHJldmVudERlZmF1bHQoKVwiXHJcbiAgICAgIChjbGljayk9XCJzZWxlY3RTdWdnZXN0aW9uKHN1Z2dlc3Rpb24pXCJcclxuICAgID5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInN1Z2dlc3Rpb25UZW1wbGF0ZTsgZWxzZSBkZWZhdWx0U3VnZ2VzdGlvblwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXJcclxuICAgICAgICAgICpuZ1RlbXBsYXRlT3V0bGV0PVwic3VnZ2VzdGlvblRlbXBsYXRlOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogc3VnZ2VzdGlvbiB9XCJcclxuICAgICAgICA+PC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctdGVtcGxhdGUgI2RlZmF1bHRTdWdnZXN0aW9uPnt7IG56VmFsdWVXaXRoKHN1Z2dlc3Rpb24pIH19PC9uZy10ZW1wbGF0ZT5cclxuICAgIDwvbGk+XHJcbiAgICA8bGlcclxuICAgICAgY2xhc3M9XCJhbnQtbWVudGlvbi1kcm9wZG93bi1ub3Rmb3VuZCBhbnQtbWVudGlvbi1kcm9wZG93bi1pdGVtXCJcclxuICAgICAgKm5nSWY9XCJmaWx0ZXJlZFN1Z2dlc3Rpb25zLmxlbmd0aCA9PT0gMFwiXHJcbiAgICA+XHJcbiAgICAgIDxzcGFuICpuZ0lmPVwibnpMb2FkaW5nXCI+PGkgbnotaWNvbiBuelR5cGU9XCJsb2FkaW5nXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gKm5nSWY9XCIhbnpMb2FkaW5nXCI+e3sgbnpOb3RGb3VuZENvbnRlbnQgfX08L3NwYW4+XHJcbiAgICA8L2xpPlxyXG4gIDwvdWw+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==
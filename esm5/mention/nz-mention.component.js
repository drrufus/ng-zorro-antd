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
var NzMentionComponent = /** @class */ (function () {
    function NzMentionComponent(ngDocument, // tslint:disable-line:no-any
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
        function (value) { return value; }); // tslint:disable-line:no-any
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
    Object.defineProperty(NzMentionComponent.prototype, "suggestionChild", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.suggestionTemplate = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzMentionComponent.prototype, "triggerNativeElement", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.trigger.el.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzMentionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.nzMentionService.triggerChanged().subscribe((/**
         * @param {?} trigger
         * @return {?}
         */
        function (trigger) {
            _this.trigger = trigger;
            _this.bindTriggerEvents();
            _this.closeDropdown();
            _this.overlayRef = null;
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzMentionComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.hasOwnProperty('nzSuggestions')) {
            if (this.isOpen) {
                this.previousValue = null;
                this.activeIndex = -1;
                this.resetDropdown(false);
            }
        }
    };
    /**
     * @return {?}
     */
    NzMentionComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.closeDropdown();
    };
    /**
     * @return {?}
     */
    NzMentionComponent.prototype.closeDropdown = /**
     * @return {?}
     */
    function () {
        if (this.overlayRef && this.overlayRef.hasAttached()) {
            this.overlayRef.detach();
            this.overlayBackdropClickSubscription.unsubscribe();
            this.isOpen = false;
            this.changeDetectorRef.markForCheck();
        }
    };
    /**
     * @return {?}
     */
    NzMentionComponent.prototype.openDropdown = /**
     * @return {?}
     */
    function () {
        this.attachOverlay();
        this.isOpen = true;
        this.changeDetectorRef.markForCheck();
    };
    /**
     * @return {?}
     */
    NzMentionComponent.prototype.getMentions = /**
     * @return {?}
     */
    function () {
        return this.trigger ? getMentions(this.trigger.value, this.nzPrefix) : [];
    };
    /**
     * @param {?} suggestion
     * @return {?}
     */
    NzMentionComponent.prototype.selectSuggestion = /**
     * @param {?} suggestion
     * @return {?}
     */
    function (suggestion) {
        /** @type {?} */
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
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    NzMentionComponent.prototype.handleInput = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var target = (/** @type {?} */ (event.target));
        this.trigger.onChange(target.value);
        this.trigger.value = target.value;
        this.resetDropdown();
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    NzMentionComponent.prototype.handleKeydown = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
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
    /**
     * @private
     * @return {?}
     */
    NzMentionComponent.prototype.handleClick = /**
     * @private
     * @return {?}
     */
    function () {
        this.resetDropdown();
    };
    /**
     * @private
     * @return {?}
     */
    NzMentionComponent.prototype.bindTriggerEvents = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.trigger.onInput.subscribe((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return _this.handleInput(e); }));
        this.trigger.onKeydown.subscribe((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return _this.handleKeydown(e); }));
        this.trigger.onClick.subscribe((/**
         * @return {?}
         */
        function () { return _this.handleClick(); }));
    };
    /**
     * @private
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    NzMentionComponent.prototype.suggestionsFilter = /**
     * @private
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    function (value, emit) {
        var _this = this;
        /** @type {?} */
        var suggestions = value.substring(1);
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
        var searchValue = suggestions.toLowerCase();
        this.filteredSuggestions = this.nzSuggestions.filter((/**
         * @param {?} suggestion
         * @return {?}
         */
        function (suggestion) {
            return _this.nzValueWith(suggestion)
                .toLowerCase()
                .includes(searchValue);
        }));
    };
    /**
     * @private
     * @param {?=} emit
     * @return {?}
     */
    NzMentionComponent.prototype.resetDropdown = /**
     * @private
     * @param {?=} emit
     * @return {?}
     */
    function (emit) {
        if (emit === void 0) { emit = true; }
        this.resetCursorMention();
        if (typeof this.cursorMention !== 'string' || !this.canOpen()) {
            this.closeDropdown();
            return;
        }
        this.suggestionsFilter(this.cursorMention, emit);
        /** @type {?} */
        var activeIndex = this.filteredSuggestions.indexOf(this.cursorMention.substring(1));
        this.activeIndex = activeIndex >= 0 ? activeIndex : 0;
        this.openDropdown();
    };
    /**
     * @private
     * @return {?}
     */
    NzMentionComponent.prototype.setNextItemActive = /**
     * @private
     * @return {?}
     */
    function () {
        this.activeIndex = this.activeIndex + 1 <= this.filteredSuggestions.length - 1 ? this.activeIndex + 1 : 0;
        this.changeDetectorRef.markForCheck();
    };
    /**
     * @private
     * @return {?}
     */
    NzMentionComponent.prototype.setPreviousItemActive = /**
     * @private
     * @return {?}
     */
    function () {
        this.activeIndex = this.activeIndex - 1 < 0 ? this.filteredSuggestions.length - 1 : this.activeIndex - 1;
        this.changeDetectorRef.markForCheck();
    };
    /**
     * @private
     * @return {?}
     */
    NzMentionComponent.prototype.canOpen = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = this.triggerNativeElement;
        return !element.readOnly && !element.disabled;
    };
    /**
     * @private
     * @return {?}
     */
    NzMentionComponent.prototype.resetCursorMention = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var value = this.triggerNativeElement.value.replace(/[\r\n]/g, ' ') || '';
        /** @type {?} */
        var selectionStart = (/** @type {?} */ (this.triggerNativeElement.selectionStart));
        /** @type {?} */
        var prefix = typeof this.nzPrefix === 'string' ? [this.nzPrefix] : this.nzPrefix;
        /** @type {?} */
        var i = prefix.length;
        while (i >= 0) {
            /** @type {?} */
            var startPos = value.lastIndexOf(prefix[i], selectionStart);
            /** @type {?} */
            var endPos = value.indexOf(' ', selectionStart) > -1 ? value.indexOf(' ', selectionStart) : value.length;
            /** @type {?} */
            var mention = value.substring(startPos, endPos);
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
    };
    /**
     * @private
     * @return {?}
     */
    NzMentionComponent.prototype.updatePositions = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var coordinates = getCaretCoordinates(this.triggerNativeElement, this.cursorMentionStart);
        /** @type {?} */
        var top = coordinates.top -
            this.triggerNativeElement.getBoundingClientRect().height -
            this.triggerNativeElement.scrollTop +
            (this.nzPlacement === 'bottom' ? coordinates.height - 6 : -6);
        /** @type {?} */
        var left = coordinates.left - this.triggerNativeElement.scrollLeft;
        this.positionStrategy.withDefaultOffsetX(left).withDefaultOffsetY(top);
        if (this.nzPlacement === 'bottom') {
            this.positionStrategy.withPositions(tslib_1.__spread(DEFAULT_MENTION_BOTTOM_POSITIONS));
        }
        if (this.nzPlacement === 'top') {
            this.positionStrategy.withPositions(tslib_1.__spread(DEFAULT_MENTION_TOP_POSITIONS));
        }
        this.positionStrategy.apply();
    };
    /**
     * @private
     * @return {?}
     */
    NzMentionComponent.prototype.subscribeOverlayBackdropClick = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        return merge(fromEvent(this.ngDocument, 'click'), fromEvent(this.ngDocument, 'touchend')).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var clickTarget = (/** @type {?} */ (event.target));
            if (_this.isOpen &&
                clickTarget !== _this.trigger.el.nativeElement &&
                (!!_this.overlayRef && !_this.overlayRef.overlayElement.contains(clickTarget))) {
                _this.closeDropdown();
            }
        }));
    };
    /**
     * @private
     * @return {?}
     */
    NzMentionComponent.prototype.attachOverlay = /**
     * @private
     * @return {?}
     */
    function () {
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
    /**
     * @private
     * @return {?}
     */
    NzMentionComponent.prototype.getOverlayConfig = /**
     * @private
     * @return {?}
     */
    function () {
        return new OverlayConfig({
            positionStrategy: this.getOverlayPosition(),
            scrollStrategy: this.overlay.scrollStrategies.reposition()
        });
    };
    /**
     * @private
     * @return {?}
     */
    NzMentionComponent.prototype.getOverlayPosition = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
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
    NzMentionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-mention',
                    exportAs: 'nzMention',
                    template: "<ng-content></ng-content>\r\n<ng-template #suggestions>\r\n  <ul class=\"ant-mention-dropdown\">\r\n    <li class=\"ant-mention-dropdown-item\"\r\n        *ngFor=\"let suggestion of filteredSuggestions; let i = index\"\r\n        [class.focus]=\"i === activeIndex\"\r\n        (mousedown)=\"$event.preventDefault()\"\r\n        (click)=\"selectSuggestion(suggestion)\">\r\n      <ng-container *ngIf=\"suggestionTemplate else defaultSuggestion\">\r\n        <ng-container *ngTemplateOutlet=\"suggestionTemplate; context: {$implicit: suggestion}\"></ng-container>\r\n      </ng-container>\r\n      <ng-template #defaultSuggestion>{{ nzValueWith(suggestion) }}</ng-template>\r\n    </li>\r\n    <li class=\"ant-mention-dropdown-notfound ant-mention-dropdown-item\"\r\n        *ngIf=\"filteredSuggestions.length === 0\">\r\n      <span *ngIf=\"nzLoading\"><i nz-icon nzType=\"loading\"></i></span>\r\n      <span *ngIf=\"!nzLoading\">{{ nzNotFoundContent }}</span>\r\n    </li>\r\n  </ul>\r\n</ng-template>\r\n",
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [NzMentionService],
                    styles: ["\n      .ant-mention-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzMentionComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
        { type: ChangeDetectorRef },
        { type: Overlay },
        { type: ViewContainerRef },
        { type: NzMentionService }
    ]; };
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
    return NzMentionComponent;
}());
export { NzMentionComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL21lbnRpb24vIiwic291cmNlcyI6WyJuei1tZW50aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUcsT0FBTyxFQUNMLHNCQUFzQixFQUV0QixPQUFPLEVBQ1AsYUFBYSxFQUdkLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXJELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUlMLFFBQVEsRUFDUixNQUFNLEVBRU4sV0FBVyxFQUNYLFNBQVMsRUFDVCxnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBRXRELE9BQU8sRUFDTCxtQkFBbUIsRUFDbkIsV0FBVyxFQUNYLGdDQUFnQyxFQUNoQyw2QkFBNkIsRUFDN0IsWUFBWSxFQUNiLE1BQU0sb0JBQW9CLENBQUM7QUFFNUIsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFeEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7QUFFeEQsMENBR0M7OztJQUZDLHFDQUFjOztJQUNkLHNDQUFlOzs7OztBQUdqQiw2QkFJQzs7O0lBSEMsMkJBQWlCOztJQUNqQix5QkFBZTs7SUFDZiww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QUM5RSw4Q0FBNkY7O0lBRTdGLHFDQUFtQzs7SUFDbkMsNkNBQThFOztJQVU5RSxvQ0FBZTs7SUFDZixpREFBbUM7O0lBQ25DLGdEQUFrRTs7SUFDbEUseUNBQWlCOzs7OztJQUVqQiwyQ0FBNEM7Ozs7O0lBQzVDLDJDQUFxQzs7Ozs7SUFDckMsZ0RBQW1DOzs7OztJQUNuQyw4Q0FBaUM7Ozs7O0lBQ2pDLHdDQUFzQzs7Ozs7SUFDdEMsb0NBQXFDOzs7OztJQUNyQyw4Q0FBNEQ7Ozs7O0lBQzVELDhEQUF1RDs7Ozs7SUFPckQsd0NBQXFEOzs7OztJQUNyRCwrQ0FBNEM7Ozs7O0lBQzVDLHFDQUF3Qjs7Ozs7SUFDeEIsOENBQTBDOzs7OztJQUMxQyw4Q0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IERPV05fQVJST1csIEVOVEVSLCBFU0NBUEUsIExFRlRfQVJST1csIFJJR0hUX0FSUk9XLCBUQUIsIFVQX0FSUk9XIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcclxuaW1wb3J0IHtcclxuICBDb25uZWN0aW9uUG9zaXRpb25QYWlyLFxyXG4gIEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSxcclxuICBPdmVybGF5LFxyXG4gIE92ZXJsYXlDb25maWcsXHJcbiAgT3ZlcmxheVJlZixcclxuICBQb3NpdGlvblN0cmF0ZWd5XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBUZW1wbGF0ZVBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xyXG5cclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEluamVjdCxcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0NvbnRhaW5lclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgZnJvbUV2ZW50LCBtZXJnZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIGdldENhcmV0Q29vcmRpbmF0ZXMsXHJcbiAgZ2V0TWVudGlvbnMsXHJcbiAgREVGQVVMVF9NRU5USU9OX0JPVFRPTV9QT1NJVElPTlMsXHJcbiAgREVGQVVMVF9NRU5USU9OX1RPUF9QT1NJVElPTlMsXHJcbiAgSW5wdXRCb29sZWFuXHJcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56TWVudGlvblN1Z2dlc3Rpb25EaXJlY3RpdmUgfSBmcm9tICcuL256LW1lbnRpb24tc3VnZ2VzdGlvbnMnO1xyXG5pbXBvcnQgeyBOek1lbnRpb25UcmlnZ2VyRGlyZWN0aXZlIH0gZnJvbSAnLi9uei1tZW50aW9uLXRyaWdnZXInO1xyXG5pbXBvcnQgeyBOek1lbnRpb25TZXJ2aWNlIH0gZnJvbSAnLi9uei1tZW50aW9uLnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNZW50aW9uT25TZWFyY2hUeXBlcyB7XHJcbiAgdmFsdWU6IHN0cmluZztcclxuICBwcmVmaXg6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNZW50aW9uIHtcclxuICBzdGFydFBvczogbnVtYmVyO1xyXG4gIGVuZFBvczogbnVtYmVyO1xyXG4gIG1lbnRpb246IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgTWVudGlvblBsYWNlbWVudCA9ICd0b3AnIHwgJ2JvdHRvbSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LW1lbnRpb24nLFxyXG4gIGV4cG9ydEFzOiAnbnpNZW50aW9uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotbWVudGlvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJvdmlkZXJzOiBbTnpNZW50aW9uU2VydmljZV0sXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIC5hbnQtbWVudGlvbi1kcm9wZG93biB7XHJcbiAgICAgICAgdG9wOiAxMDAlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOek1lbnRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBuelZhbHVlV2l0aDogKHZhbHVlOiBhbnkpID0+IHN0cmluZyA9IHZhbHVlID0+IHZhbHVlOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxyXG4gIEBJbnB1dCgpIG56UHJlZml4OiBzdHJpbmcgfCBzdHJpbmdbXSA9ICdAJztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpMb2FkaW5nID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpOb3RGb3VuZENvbnRlbnQ6IHN0cmluZyA9ICfml6DljLnphY3nu5PmnpzvvIzovbvmlbLnqbrmoLzlrozmiJDovpPlhaUnO1xyXG4gIEBJbnB1dCgpIG56UGxhY2VtZW50OiBNZW50aW9uUGxhY2VtZW50ID0gJ2JvdHRvbSc7XHJcbiAgQElucHV0KCkgbnpTdWdnZXN0aW9uczogc3RyaW5nW10gPSBbXTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPblNlbGVjdDogRXZlbnRFbWl0dGVyPHN0cmluZyB8IHt9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPblNlYXJjaENoYW5nZTogRXZlbnRFbWl0dGVyPE1lbnRpb25PblNlYXJjaFR5cGVzPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgdHJpZ2dlcjogTnpNZW50aW9uVHJpZ2dlckRpcmVjdGl2ZTtcclxuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmLCB7IHN0YXRpYzogZmFsc2UgfSkgc3VnZ2VzdGlvbnNUZW1wOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgQENvbnRlbnRDaGlsZChOek1lbnRpb25TdWdnZXN0aW9uRGlyZWN0aXZlLCB7IHN0YXRpYzogZmFsc2UsIHJlYWQ6IFRlbXBsYXRlUmVmIH0pXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHNldCBzdWdnZXN0aW9uQ2hpbGQodmFsdWU6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBhbnkgfT4pIHtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICB0aGlzLnN1Z2dlc3Rpb25UZW1wbGF0ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaXNPcGVuID0gZmFsc2U7XHJcbiAgZmlsdGVyZWRTdWdnZXN0aW9uczogc3RyaW5nW10gPSBbXTtcclxuICBzdWdnZXN0aW9uVGVtcGxhdGU6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBhbnkgfT4gfCBudWxsID0gbnVsbDsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcclxuICBhY3RpdmVJbmRleCA9IC0xO1xyXG5cclxuICBwcml2YXRlIHByZXZpb3VzVmFsdWU6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gIHByaXZhdGUgY3Vyc29yTWVudGlvbjogc3RyaW5nIHwgbnVsbDtcclxuICBwcml2YXRlIGN1cnNvck1lbnRpb25TdGFydDogbnVtYmVyO1xyXG4gIHByaXZhdGUgY3Vyc29yTWVudGlvbkVuZDogbnVtYmVyO1xyXG4gIHByaXZhdGUgb3ZlcmxheVJlZjogT3ZlcmxheVJlZiB8IG51bGw7XHJcbiAgcHJpdmF0ZSBwb3J0YWw6IFRlbXBsYXRlUG9ydGFsPHZvaWQ+O1xyXG4gIHByaXZhdGUgcG9zaXRpb25TdHJhdGVneTogRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5O1xyXG4gIHByaXZhdGUgb3ZlcmxheUJhY2tkcm9wQ2xpY2tTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgcHJpdmF0ZSBnZXQgdHJpZ2dlck5hdGl2ZUVsZW1lbnQoKTogSFRNTFRleHRBcmVhRWxlbWVudCB8IEhUTUxJbnB1dEVsZW1lbnQge1xyXG4gICAgcmV0dXJuIHRoaXMudHJpZ2dlci5lbC5uYXRpdmVFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIG5nRG9jdW1lbnQ6IGFueSwgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcclxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LFxyXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgcHJpdmF0ZSBuek1lbnRpb25TZXJ2aWNlOiBOek1lbnRpb25TZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMubnpNZW50aW9uU2VydmljZS50cmlnZ2VyQ2hhbmdlZCgpLnN1YnNjcmliZSh0cmlnZ2VyID0+IHtcclxuICAgICAgdGhpcy50cmlnZ2VyID0gdHJpZ2dlcjtcclxuICAgICAgdGhpcy5iaW5kVHJpZ2dlckV2ZW50cygpO1xyXG4gICAgICB0aGlzLmNsb3NlRHJvcGRvd24oKTtcclxuICAgICAgdGhpcy5vdmVybGF5UmVmID0gbnVsbDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ256U3VnZ2VzdGlvbnMnKSkge1xyXG4gICAgICBpZiAodGhpcy5pc09wZW4pIHtcclxuICAgICAgICB0aGlzLnByZXZpb3VzVmFsdWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSAtMTtcclxuICAgICAgICB0aGlzLnJlc2V0RHJvcGRvd24oZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xvc2VEcm9wZG93bigpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2VEcm9wZG93bigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYgJiYgdGhpcy5vdmVybGF5UmVmLmhhc0F0dGFjaGVkKCkpIHtcclxuICAgICAgdGhpcy5vdmVybGF5UmVmLmRldGFjaCgpO1xyXG4gICAgICB0aGlzLm92ZXJsYXlCYWNrZHJvcENsaWNrU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvcGVuRHJvcGRvd24oKTogdm9pZCB7XHJcbiAgICB0aGlzLmF0dGFjaE92ZXJsYXkoKTtcclxuICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBnZXRNZW50aW9ucygpOiBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gdGhpcy50cmlnZ2VyID8gZ2V0TWVudGlvbnModGhpcy50cmlnZ2VyLnZhbHVlLCB0aGlzLm56UHJlZml4KSA6IFtdO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0U3VnZ2VzdGlvbihzdWdnZXN0aW9uOiBzdHJpbmcgfCB7fSk6IHZvaWQge1xyXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLm56VmFsdWVXaXRoKHN1Z2dlc3Rpb24pO1xyXG4gICAgdGhpcy50cmlnZ2VyLmluc2VydE1lbnRpb24oe1xyXG4gICAgICBtZW50aW9uOiB2YWx1ZSxcclxuICAgICAgc3RhcnRQb3M6IHRoaXMuY3Vyc29yTWVudGlvblN0YXJ0LFxyXG4gICAgICBlbmRQb3M6IHRoaXMuY3Vyc29yTWVudGlvbkVuZFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLm56T25TZWxlY3QuZW1pdChzdWdnZXN0aW9uKTtcclxuICAgIHRoaXMuY2xvc2VEcm9wZG93bigpO1xyXG4gICAgdGhpcy5hY3RpdmVJbmRleCA9IC0xO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVJbnB1dChldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50O1xyXG4gICAgdGhpcy50cmlnZ2VyLm9uQ2hhbmdlKHRhcmdldC52YWx1ZSk7XHJcbiAgICB0aGlzLnRyaWdnZXIudmFsdWUgPSB0YXJnZXQudmFsdWU7XHJcbiAgICB0aGlzLnJlc2V0RHJvcGRvd24oKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlS2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgY29uc3Qga2V5Q29kZSA9IGV2ZW50LmtleUNvZGU7XHJcbiAgICBpZiAodGhpcy5pc09wZW4gJiYga2V5Q29kZSA9PT0gRU5URVIgJiYgdGhpcy5hY3RpdmVJbmRleCAhPT0gLTEgJiYgdGhpcy5maWx0ZXJlZFN1Z2dlc3Rpb25zLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLnNlbGVjdFN1Z2dlc3Rpb24odGhpcy5maWx0ZXJlZFN1Z2dlc3Rpb25zW3RoaXMuYWN0aXZlSW5kZXhdKTtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gTEVGVF9BUlJPVyB8fCBrZXlDb2RlID09PSBSSUdIVF9BUlJPVykge1xyXG4gICAgICB0aGlzLnJlc2V0RHJvcGRvd24oKTtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5pc09wZW4gJiYgKGtleUNvZGUgPT09IFRBQiB8fCBrZXlDb2RlID09PSBFU0NBUEUpKSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZURyb3Bkb3duKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5pc09wZW4gJiYga2V5Q29kZSA9PT0gVVBfQVJST1cpIHtcclxuICAgICAgICB0aGlzLnNldFByZXZpb3VzSXRlbUFjdGl2ZSgpO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLmlzT3BlbiAmJiBrZXlDb2RlID09PSBET1dOX0FSUk9XKSB7XHJcbiAgICAgICAgdGhpcy5zZXROZXh0SXRlbUFjdGl2ZSgpO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlQ2xpY2soKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlc2V0RHJvcGRvd24oKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYmluZFRyaWdnZXJFdmVudHMoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRyaWdnZXIub25JbnB1dC5zdWJzY3JpYmUoKGU6IEtleWJvYXJkRXZlbnQpID0+IHRoaXMuaGFuZGxlSW5wdXQoZSkpO1xyXG4gICAgdGhpcy50cmlnZ2VyLm9uS2V5ZG93bi5zdWJzY3JpYmUoKGU6IEtleWJvYXJkRXZlbnQpID0+IHRoaXMuaGFuZGxlS2V5ZG93bihlKSk7XHJcbiAgICB0aGlzLnRyaWdnZXIub25DbGljay5zdWJzY3JpYmUoKCkgPT4gdGhpcy5oYW5kbGVDbGljaygpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3VnZ2VzdGlvbnNGaWx0ZXIodmFsdWU6IHN0cmluZywgZW1pdDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgY29uc3Qgc3VnZ2VzdGlvbnMgPSB2YWx1ZS5zdWJzdHJpbmcoMSk7XHJcbiAgICBpZiAodGhpcy5wcmV2aW91c1ZhbHVlID09PSB2YWx1ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnByZXZpb3VzVmFsdWUgPSB2YWx1ZTtcclxuICAgIGlmIChlbWl0KSB7XHJcbiAgICAgIHRoaXMubnpPblNlYXJjaENoYW5nZS5lbWl0KHtcclxuICAgICAgICB2YWx1ZTogdGhpcy5jdXJzb3JNZW50aW9uIS5zdWJzdHJpbmcoMSksXHJcbiAgICAgICAgcHJlZml4OiB0aGlzLmN1cnNvck1lbnRpb24hWzBdXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2VhcmNoVmFsdWUgPSBzdWdnZXN0aW9ucy50b0xvd2VyQ2FzZSgpO1xyXG4gICAgdGhpcy5maWx0ZXJlZFN1Z2dlc3Rpb25zID0gdGhpcy5uelN1Z2dlc3Rpb25zLmZpbHRlcihzdWdnZXN0aW9uID0+XHJcbiAgICAgIHRoaXMubnpWYWx1ZVdpdGgoc3VnZ2VzdGlvbilcclxuICAgICAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgIC5pbmNsdWRlcyhzZWFyY2hWYWx1ZSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlc2V0RHJvcGRvd24oZW1pdDogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcclxuICAgIHRoaXMucmVzZXRDdXJzb3JNZW50aW9uKCk7XHJcbiAgICBpZiAodHlwZW9mIHRoaXMuY3Vyc29yTWVudGlvbiAhPT0gJ3N0cmluZycgfHwgIXRoaXMuY2FuT3BlbigpKSB7XHJcbiAgICAgIHRoaXMuY2xvc2VEcm9wZG93bigpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnN1Z2dlc3Rpb25zRmlsdGVyKHRoaXMuY3Vyc29yTWVudGlvbiwgZW1pdCk7XHJcbiAgICBjb25zdCBhY3RpdmVJbmRleCA9IHRoaXMuZmlsdGVyZWRTdWdnZXN0aW9ucy5pbmRleE9mKHRoaXMuY3Vyc29yTWVudGlvbi5zdWJzdHJpbmcoMSkpO1xyXG4gICAgdGhpcy5hY3RpdmVJbmRleCA9IGFjdGl2ZUluZGV4ID49IDAgPyBhY3RpdmVJbmRleCA6IDA7XHJcbiAgICB0aGlzLm9wZW5Ecm9wZG93bigpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXROZXh0SXRlbUFjdGl2ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuYWN0aXZlSW5kZXggPSB0aGlzLmFjdGl2ZUluZGV4ICsgMSA8PSB0aGlzLmZpbHRlcmVkU3VnZ2VzdGlvbnMubGVuZ3RoIC0gMSA/IHRoaXMuYWN0aXZlSW5kZXggKyAxIDogMDtcclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFByZXZpb3VzSXRlbUFjdGl2ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuYWN0aXZlSW5kZXggPSB0aGlzLmFjdGl2ZUluZGV4IC0gMSA8IDAgPyB0aGlzLmZpbHRlcmVkU3VnZ2VzdGlvbnMubGVuZ3RoIC0gMSA6IHRoaXMuYWN0aXZlSW5kZXggLSAxO1xyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FuT3BlbigpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50ID0gdGhpcy50cmlnZ2VyTmF0aXZlRWxlbWVudDtcclxuICAgIHJldHVybiAhZWxlbWVudC5yZWFkT25seSAmJiAhZWxlbWVudC5kaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVzZXRDdXJzb3JNZW50aW9uKCk6IHZvaWQge1xyXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnRyaWdnZXJOYXRpdmVFbGVtZW50LnZhbHVlLnJlcGxhY2UoL1tcXHJcXG5dL2csICcgJykgfHwgJyc7XHJcbiAgICBjb25zdCBzZWxlY3Rpb25TdGFydCA9IHRoaXMudHJpZ2dlck5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQhO1xyXG4gICAgY29uc3QgcHJlZml4ID0gdHlwZW9mIHRoaXMubnpQcmVmaXggPT09ICdzdHJpbmcnID8gW3RoaXMubnpQcmVmaXhdIDogdGhpcy5uelByZWZpeDtcclxuICAgIGxldCBpID0gcHJlZml4Lmxlbmd0aDtcclxuICAgIHdoaWxlIChpID49IDApIHtcclxuICAgICAgY29uc3Qgc3RhcnRQb3MgPSB2YWx1ZS5sYXN0SW5kZXhPZihwcmVmaXhbaV0sIHNlbGVjdGlvblN0YXJ0KTtcclxuICAgICAgY29uc3QgZW5kUG9zID0gdmFsdWUuaW5kZXhPZignICcsIHNlbGVjdGlvblN0YXJ0KSA+IC0xID8gdmFsdWUuaW5kZXhPZignICcsIHNlbGVjdGlvblN0YXJ0KSA6IHZhbHVlLmxlbmd0aDtcclxuICAgICAgY29uc3QgbWVudGlvbiA9IHZhbHVlLnN1YnN0cmluZyhzdGFydFBvcywgZW5kUG9zKTtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIChzdGFydFBvcyA+IDAgJiYgdmFsdWVbc3RhcnRQb3MgLSAxXSAhPT0gJyAnKSB8fFxyXG4gICAgICAgIHN0YXJ0UG9zIDwgMCB8fFxyXG4gICAgICAgIG1lbnRpb24uaW5jbHVkZXMocHJlZml4W2ldLCAxKSB8fFxyXG4gICAgICAgIG1lbnRpb24uaW5jbHVkZXMoJyAnKVxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLmN1cnNvck1lbnRpb24gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY3Vyc29yTWVudGlvblN0YXJ0ID0gLTE7XHJcbiAgICAgICAgdGhpcy5jdXJzb3JNZW50aW9uRW5kID0gLTE7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jdXJzb3JNZW50aW9uID0gbWVudGlvbjtcclxuICAgICAgICB0aGlzLmN1cnNvck1lbnRpb25TdGFydCA9IHN0YXJ0UG9zO1xyXG4gICAgICAgIHRoaXMuY3Vyc29yTWVudGlvbkVuZCA9IGVuZFBvcztcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaS0tO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVQb3NpdGlvbnMoKTogdm9pZCB7XHJcbiAgICBjb25zdCBjb29yZGluYXRlcyA9IGdldENhcmV0Q29vcmRpbmF0ZXModGhpcy50cmlnZ2VyTmF0aXZlRWxlbWVudCwgdGhpcy5jdXJzb3JNZW50aW9uU3RhcnQpO1xyXG4gICAgY29uc3QgdG9wID1cclxuICAgICAgY29vcmRpbmF0ZXMudG9wIC1cclxuICAgICAgdGhpcy50cmlnZ2VyTmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgLVxyXG4gICAgICB0aGlzLnRyaWdnZXJOYXRpdmVFbGVtZW50LnNjcm9sbFRvcCArXHJcbiAgICAgICh0aGlzLm56UGxhY2VtZW50ID09PSAnYm90dG9tJyA/IGNvb3JkaW5hdGVzLmhlaWdodCAtIDYgOiAtNik7XHJcbiAgICBjb25zdCBsZWZ0ID0gY29vcmRpbmF0ZXMubGVmdCAtIHRoaXMudHJpZ2dlck5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdDtcclxuICAgIHRoaXMucG9zaXRpb25TdHJhdGVneS53aXRoRGVmYXVsdE9mZnNldFgobGVmdCkud2l0aERlZmF1bHRPZmZzZXRZKHRvcCk7XHJcbiAgICBpZiAodGhpcy5uelBsYWNlbWVudCA9PT0gJ2JvdHRvbScpIHtcclxuICAgICAgdGhpcy5wb3NpdGlvblN0cmF0ZWd5LndpdGhQb3NpdGlvbnMoWy4uLkRFRkFVTFRfTUVOVElPTl9CT1RUT01fUE9TSVRJT05TXSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5uelBsYWNlbWVudCA9PT0gJ3RvcCcpIHtcclxuICAgICAgdGhpcy5wb3NpdGlvblN0cmF0ZWd5LndpdGhQb3NpdGlvbnMoWy4uLkRFRkFVTFRfTUVOVElPTl9UT1BfUE9TSVRJT05TXSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnBvc2l0aW9uU3RyYXRlZ3kuYXBwbHkoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3Vic2NyaWJlT3ZlcmxheUJhY2tkcm9wQ2xpY2soKTogU3Vic2NyaXB0aW9uIHtcclxuICAgIHJldHVybiBtZXJnZTxNb3VzZUV2ZW50IHwgVG91Y2hFdmVudD4oXHJcbiAgICAgIGZyb21FdmVudDxNb3VzZUV2ZW50Pih0aGlzLm5nRG9jdW1lbnQsICdjbGljaycpLFxyXG4gICAgICBmcm9tRXZlbnQ8VG91Y2hFdmVudD4odGhpcy5uZ0RvY3VtZW50LCAndG91Y2hlbmQnKVxyXG4gICAgKS5zdWJzY3JpYmUoKGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCkgPT4ge1xyXG4gICAgICBjb25zdCBjbGlja1RhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHRoaXMuaXNPcGVuICYmXHJcbiAgICAgICAgY2xpY2tUYXJnZXQgIT09IHRoaXMudHJpZ2dlci5lbC5uYXRpdmVFbGVtZW50ICYmXHJcbiAgICAgICAgKCEhdGhpcy5vdmVybGF5UmVmICYmICF0aGlzLm92ZXJsYXlSZWYub3ZlcmxheUVsZW1lbnQuY29udGFpbnMoY2xpY2tUYXJnZXQpKVxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLmNsb3NlRHJvcGRvd24oKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGF0dGFjaE92ZXJsYXkoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMub3ZlcmxheVJlZikge1xyXG4gICAgICB0aGlzLnBvcnRhbCA9IG5ldyBUZW1wbGF0ZVBvcnRhbCh0aGlzLnN1Z2dlc3Rpb25zVGVtcCwgdGhpcy52aWV3Q29udGFpbmVyUmVmKTtcclxuICAgICAgdGhpcy5vdmVybGF5UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZSh0aGlzLmdldE92ZXJsYXlDb25maWcoKSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5vdmVybGF5UmVmICYmICF0aGlzLm92ZXJsYXlSZWYuaGFzQXR0YWNoZWQoKSkge1xyXG4gICAgICB0aGlzLm92ZXJsYXlSZWYuYXR0YWNoKHRoaXMucG9ydGFsKTtcclxuICAgICAgdGhpcy5vdmVybGF5QmFja2Ryb3BDbGlja1N1YnNjcmlwdGlvbiA9IHRoaXMuc3Vic2NyaWJlT3ZlcmxheUJhY2tkcm9wQ2xpY2soKTtcclxuICAgIH1cclxuICAgIHRoaXMudXBkYXRlUG9zaXRpb25zKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE92ZXJsYXlDb25maWcoKTogT3ZlcmxheUNvbmZpZyB7XHJcbiAgICByZXR1cm4gbmV3IE92ZXJsYXlDb25maWcoe1xyXG4gICAgICBwb3NpdGlvblN0cmF0ZWd5OiB0aGlzLmdldE92ZXJsYXlQb3NpdGlvbigpLFxyXG4gICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMucmVwb3NpdGlvbigpXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0T3ZlcmxheVBvc2l0aW9uKCk6IFBvc2l0aW9uU3RyYXRlZ3kge1xyXG4gICAgY29uc3QgcG9zaXRpb25zID0gW1xyXG4gICAgICBuZXcgQ29ubmVjdGlvblBvc2l0aW9uUGFpcih7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICdib3R0b20nIH0sIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAndG9wJyB9KSxcclxuICAgICAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAndG9wJyB9LCB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ2JvdHRvbScgfSlcclxuICAgIF07XHJcbiAgICB0aGlzLnBvc2l0aW9uU3RyYXRlZ3kgPSB0aGlzLm92ZXJsYXlcclxuICAgICAgLnBvc2l0aW9uKClcclxuICAgICAgLmZsZXhpYmxlQ29ubmVjdGVkVG8odGhpcy50cmlnZ2VyLmVsKVxyXG4gICAgICAud2l0aFBvc2l0aW9ucyhwb3NpdGlvbnMpXHJcbiAgICAgIC53aXRoRmxleGlibGVEaW1lbnNpb25zKGZhbHNlKVxyXG4gICAgICAud2l0aFB1c2goZmFsc2UpO1xyXG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25TdHJhdGVneTtcclxuICB9XHJcbn1cclxuIl19
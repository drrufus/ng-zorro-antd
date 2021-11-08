/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { DOWN_ARROW, ENTER, ESCAPE, TAB, UP_ARROW } from '@angular/cdk/keycodes';
import { ConnectionPositionPair, Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import { forwardRef, Directive, ElementRef, Inject, Input, NgZone, Optional, ViewContainerRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { fromEvent, merge } from 'rxjs';
import { delay, distinct, map, take, tap } from 'rxjs/operators';
import { NzAutocompleteComponent } from './nz-autocomplete.component';
/** @type {?} */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/overlay';
export var NZ_AUTOCOMPLETE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return NzAutocompleteTriggerDirective; })),
    multi: true
};
/**
 * @return {?}
 */
export function getNzAutocompleteMissingPanelError() {
    return Error('Attempting to open an undefined instance of `nz-autocomplete`. ' +
        'Make sure that the id passed to the `nzAutocomplete` is correct and that ' +
        "you're attempting to open it after the ngAfterContentInit hook.");
}
var NzAutocompleteTriggerDirective = /** @class */ (function () {
    function NzAutocompleteTriggerDirective(elementRef, overlay, viewContainerRef, ngZone, document) {
        this.elementRef = elementRef;
        this.overlay = overlay;
        this.viewContainerRef = viewContainerRef;
        this.ngZone = ngZone;
        this.document = document;
        // tslint:disable-next-line:no-any
        this._onChange = (/**
         * @return {?}
         */
        function () { });
        this._onTouched = (/**
         * @return {?}
         */
        function () { });
        this.panelOpen = false;
    }
    Object.defineProperty(NzAutocompleteTriggerDirective.prototype, "activeOption", {
        /** Current active option */
        get: /**
         * Current active option
         * @return {?}
         */
        function () {
            if (this.nzAutocomplete && this.nzAutocomplete.options.length) {
                return this.nzAutocomplete.activeItem;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroyPanel();
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.writeValue = 
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.setTriggerValue(value);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        /** @type {?} */
        var element = this.elementRef.nativeElement;
        element.disabled = isDisabled;
        this.closePanel();
    };
    /**
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.openPanel = /**
     * @return {?}
     */
    function () {
        this.previousValue = this.elementRef.nativeElement.value;
        this.attachOverlay();
        this.updateStatus();
    };
    /**
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.closePanel = /**
     * @return {?}
     */
    function () {
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
    /**
     * @param {?} event
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.handleKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var keyCode = event.keyCode;
        /** @type {?} */
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
    /**
     * @param {?} event
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.handleInput = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var target = (/** @type {?} */ (event.target));
        /** @type {?} */
        var document = (/** @type {?} */ (this.document));
        /** @type {?} */
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
    /**
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.handleFocus = /**
     * @return {?}
     */
    function () {
        if (this.canOpen()) {
            this.openPanel();
        }
    };
    /**
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.handleBlur = /**
     * @return {?}
     */
    function () {
        this.closePanel();
        this._onTouched();
    };
    /**
     * Subscription data source changes event
     */
    /**
     * Subscription data source changes event
     * @private
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.subscribeOptionsChange = /**
     * Subscription data source changes event
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var firstStable = this.ngZone.onStable.asObservable().pipe(take(1));
        /** @type {?} */
        var optionChanges = this.nzAutocomplete.options.changes.pipe(tap((/**
         * @return {?}
         */
        function () { return _this.positionStrategy.reapplyLastPosition(); })), delay(0));
        return merge(firstStable, optionChanges).subscribe((/**
         * @return {?}
         */
        function () {
            _this.resetActiveItem();
            if (_this.panelOpen) {
                (/** @type {?} */ (_this.overlayRef)).updatePosition();
            }
        }));
    };
    /**
     * Subscription option changes event and set the value
     */
    /**
     * Subscription option changes event and set the value
     * @private
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.subscribeSelectionChange = /**
     * Subscription option changes event and set the value
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        return this.nzAutocomplete.selectionChange.subscribe((/**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            _this.setValueAndClose(option);
        }));
    };
    /**
     * Subscription external click and close panel
     */
    /**
     * Subscription external click and close panel
     * @private
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.subscribeOverlayBackdropClick = /**
     * Subscription external click and close panel
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        return merge(fromEvent(this.document, 'click'), fromEvent(this.document, 'touchend')).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var clickTarget = (/** @type {?} */ (event.target));
            // Make sure is not self
            if (clickTarget !== _this.elementRef.nativeElement &&
                !(/** @type {?} */ (_this.overlayRef)).overlayElement.contains(clickTarget) &&
                _this.panelOpen) {
                _this.closePanel();
            }
        }));
    };
    /**
     * Subscription overlay position changes and reset dropdown position
     */
    /**
     * Subscription overlay position changes and reset dropdown position
     * @private
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.subscribeOverlayPositionChange = /**
     * Subscription overlay position changes and reset dropdown position
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        return this.positionStrategy.positionChanges
            .pipe(map((/**
         * @param {?} position
         * @return {?}
         */
        function (position) { return position.connectionPair.originY; })), distinct(), delay(0))
            .subscribe((/**
         * @param {?} position
         * @return {?}
         */
        function (position) {
            _this.nzAutocomplete.updatePosition(position);
        }));
    };
    /**
     * @private
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.attachOverlay = /**
     * @private
     * @return {?}
     */
    function () {
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
    /**
     * @private
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.updateStatus = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.overlayRef) {
            this.overlayRef.updateSize({ width: this.nzAutocomplete.nzWidth || this.getHostWidth() });
        }
        this.nzAutocomplete.setVisibility();
        this.resetActiveItem();
        if (this.activeOption) {
            this.activeOption.scrollIntoViewIfNeeded();
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.destroyPanel = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.overlayRef) {
            this.closePanel();
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.getOverlayConfig = /**
     * @private
     * @return {?}
     */
    function () {
        return new OverlayConfig({
            positionStrategy: this.getOverlayPosition(),
            scrollStrategy: this.overlay.scrollStrategies.reposition(),
            // default host element width
            width: this.nzAutocomplete.nzWidth || this.getHostWidth()
        });
    };
    /**
     * @private
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.getConnectedElement = /**
     * @private
     * @return {?}
     */
    function () {
        return this.elementRef;
    };
    /**
     * @private
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.getHostWidth = /**
     * @private
     * @return {?}
     */
    function () {
        return this.getConnectedElement().nativeElement.getBoundingClientRect().width;
    };
    /**
     * @private
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.getOverlayPosition = /**
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
            .flexibleConnectedTo(this.getConnectedElement())
            .withFlexibleDimensions(false)
            .withPush(false)
            .withPositions(positions);
        return this.positionStrategy;
    };
    /**
     * @private
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.resetActiveItem = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
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
    /**
     * @private
     * @param {?} option
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.setValueAndClose = /**
     * @private
     * @param {?} option
     * @return {?}
     */
    function (option) {
        /** @type {?} */
        var value = option.nzValue;
        this.setTriggerValue(option.getLabel());
        this._onChange(value);
        this.elementRef.nativeElement.focus();
        this.closePanel();
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.setTriggerValue = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.elementRef.nativeElement.value = value || '';
        if (!this.nzAutocomplete.nzBackfill) {
            this.previousValue = value;
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.doBackfill = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.nzAutocomplete.nzBackfill && this.nzAutocomplete.activeItem) {
            this.setTriggerValue(this.nzAutocomplete.activeItem.getLabel());
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.canOpen = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = this.elementRef.nativeElement;
        return !element.readOnly && !element.disabled;
    };
    /** @nocollapse */
    NzAutocompleteTriggerDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Overlay },
        { type: ViewContainerRef },
        { type: NgZone },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] }
    ]; };
    NzAutocompleteTriggerDirective.propDecorators = {
        nzAutocomplete: [{ type: Input }]
    };
NzAutocompleteTriggerDirective.ɵfac = function NzAutocompleteTriggerDirective_Factory(t) { return new (t || NzAutocompleteTriggerDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Overlay), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(DOCUMENT, 8)); };
NzAutocompleteTriggerDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzAutocompleteTriggerDirective, selectors: [["input", "nzAutocomplete", ""], ["textarea", "nzAutocomplete", ""]], hostAttrs: ["autocomplete", "off", "aria-autocomplete", "list"], hostBindings: function NzAutocompleteTriggerDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("focusin", function NzAutocompleteTriggerDirective_focusin_HostBindingHandler() { return ctx.handleFocus(); })("blur", function NzAutocompleteTriggerDirective_blur_HostBindingHandler() { return ctx.handleBlur(); })("input", function NzAutocompleteTriggerDirective_input_HostBindingHandler($event) { return ctx.handleInput($event); })("keydown", function NzAutocompleteTriggerDirective_keydown_HostBindingHandler($event) { return ctx.handleKeydown($event); });
    } }, inputs: { nzAutocomplete: "nzAutocomplete" }, exportAs: ["nzAutocompleteTrigger"], features: [ɵngcc0.ɵɵProvidersFeature([NZ_AUTOCOMPLETE_VALUE_ACCESSOR])] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzAutocompleteTriggerDirective, [{
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
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.Overlay }, { type: ɵngcc0.ViewContainerRef }, { type: ɵngcc0.NgZone }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, { nzAutocomplete: [{
            type: Input
        }] }); })();
    return NzAutocompleteTriggerDirective;
}());
export { NzAutocompleteTriggerDirective };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYXV0b2NvbXBsZXRlLXRyaWdnZXIuZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyJuZzovbmctem9ycm8tYW50ZC9hdXRvLWNvbXBsZXRlL256LWF1dG9jb21wbGV0ZS10cmlnZ2VyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakYsT0FBTyxFQUVMLHNCQUFzQixFQUV0QixPQUFPLEVBQ1AsYUFBYSxFQUlkLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsVUFBVSxFQUNWLFNBQVMsRUFDVCxVQUFVLEVBRVYsTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEVBRU4sUUFBUSxFQUNSLGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHakUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7QUFFdEUsTUFBTSxLQUFPLDhCQUE4QixHQUFxQjtJQUM5RCxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxjQUFNLE9BQUEsOEJBQThCLEVBQTlCLENBQThCLEVBQUM7SUFDN0QsS0FBSyxFQUFFLElBQUk7Q0FDWjs7OztBQUVE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cUVBQWtEOzs7OztJQUNsRCxtRUFBZ0Q7Ozs7O0lBQ2hELDBFQUF1RDs7Ozs7SUFDdkQsMkVBQXdEOzs7OztJQUd0RCxvREFBOEI7Ozs7O0lBQzlCLGlEQUF3Qjs7Ozs7SUFDeEIsMERBQTBDOzs7OztJQUMxQyxnREFBc0I7Ozs7O0lBRXRCLGtEQUFtRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgRE9XTl9BUlJPVywgRU5URVIsIEVTQ0FQRSwgVEFCLCBVUF9BUlJPVyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XHJcbmltcG9ydCB7XHJcbiAgQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlLFxyXG4gIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIsXHJcbiAgRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5LFxyXG4gIE92ZXJsYXksXHJcbiAgT3ZlcmxheUNvbmZpZyxcclxuICBPdmVybGF5UmVmLFxyXG4gIFBvc2l0aW9uU3RyYXRlZ3ksXHJcbiAgVmVydGljYWxDb25uZWN0aW9uUG9zXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBUZW1wbGF0ZVBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgZm9yd2FyZFJlZixcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBFeGlzdGluZ1Byb3ZpZGVyLFxyXG4gIEluamVjdCxcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9wdGlvbmFsLFxyXG4gIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgZnJvbUV2ZW50LCBtZXJnZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRlbGF5LCBkaXN0aW5jdCwgbWFwLCB0YWtlLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbnotYXV0b2NvbXBsZXRlLW9wdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOekF1dG9jb21wbGV0ZUNvbXBvbmVudCB9IGZyb20gJy4vbnotYXV0b2NvbXBsZXRlLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgY29uc3QgTlpfQVVUT0NPTVBMRVRFX1ZBTFVFX0FDQ0VTU09SOiBFeGlzdGluZ1Byb3ZpZGVyID0ge1xyXG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE56QXV0b2NvbXBsZXRlVHJpZ2dlckRpcmVjdGl2ZSksXHJcbiAgbXVsdGk6IHRydWVcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXROekF1dG9jb21wbGV0ZU1pc3NpbmdQYW5lbEVycm9yKCk6IEVycm9yIHtcclxuICByZXR1cm4gRXJyb3IoXHJcbiAgICAnQXR0ZW1wdGluZyB0byBvcGVuIGFuIHVuZGVmaW5lZCBpbnN0YW5jZSBvZiBgbnotYXV0b2NvbXBsZXRlYC4gJyArXHJcbiAgICAgICdNYWtlIHN1cmUgdGhhdCB0aGUgaWQgcGFzc2VkIHRvIHRoZSBgbnpBdXRvY29tcGxldGVgIGlzIGNvcnJlY3QgYW5kIHRoYXQgJyArXHJcbiAgICAgIFwieW91J3JlIGF0dGVtcHRpbmcgdG8gb3BlbiBpdCBhZnRlciB0aGUgbmdBZnRlckNvbnRlbnRJbml0IGhvb2suXCJcclxuICApO1xyXG59XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogYGlucHV0W256QXV0b2NvbXBsZXRlXSwgdGV4dGFyZWFbbnpBdXRvY29tcGxldGVdYCxcclxuICBleHBvcnRBczogJ256QXV0b2NvbXBsZXRlVHJpZ2dlcicsXHJcbiAgcHJvdmlkZXJzOiBbTlpfQVVUT0NPTVBMRVRFX1ZBTFVFX0FDQ0VTU09SXSxcclxuICBob3N0OiB7XHJcbiAgICBhdXRvY29tcGxldGU6ICdvZmYnLFxyXG4gICAgJ2FyaWEtYXV0b2NvbXBsZXRlJzogJ2xpc3QnLFxyXG4gICAgJyhmb2N1c2luKSc6ICdoYW5kbGVGb2N1cygpJyxcclxuICAgICcoYmx1ciknOiAnaGFuZGxlQmx1cigpJyxcclxuICAgICcoaW5wdXQpJzogJ2hhbmRsZUlucHV0KCRldmVudCknLFxyXG4gICAgJyhrZXlkb3duKSc6ICdoYW5kbGVLZXlkb3duKCRldmVudCknXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpBdXRvY29tcGxldGVUcmlnZ2VyRGlyZWN0aXZlIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uRGVzdHJveSB7XHJcbiAgLyoqIEJpbmQgbnpBdXRvY29tcGxldGUgY29tcG9uZW50ICovXHJcbiAgQElucHV0KCkgbnpBdXRvY29tcGxldGU6IE56QXV0b2NvbXBsZXRlQ29tcG9uZW50O1xyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgX29uQ2hhbmdlOiAodmFsdWU6IGFueSkgPT4gdm9pZCA9ICgpID0+IHt9O1xyXG4gIF9vblRvdWNoZWQgPSAoKSA9PiB7fTtcclxuICBwYW5lbE9wZW46IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqIEN1cnJlbnQgYWN0aXZlIG9wdGlvbiAqL1xyXG4gIGdldCBhY3RpdmVPcHRpb24oKTogTnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQgfCB1bmRlZmluZWQge1xyXG4gICAgaWYgKHRoaXMubnpBdXRvY29tcGxldGUgJiYgdGhpcy5uekF1dG9jb21wbGV0ZS5vcHRpb25zLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5uekF1dG9jb21wbGV0ZS5hY3RpdmVJdGVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvdmVybGF5UmVmOiBPdmVybGF5UmVmIHwgbnVsbDtcclxuICBwcml2YXRlIHBvcnRhbDogVGVtcGxhdGVQb3J0YWw8e30+IHwgbnVsbDtcclxuICBwcml2YXRlIHBvc2l0aW9uU3RyYXRlZ3k6IEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneTtcclxuICBwcml2YXRlIHByZXZpb3VzVmFsdWU6IHN0cmluZyB8IG51bWJlciB8IG51bGw7XHJcbiAgcHJpdmF0ZSBzZWxlY3Rpb25DaGFuZ2VTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICBwcml2YXRlIG9wdGlvbnNDaGFuZ2VTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICBwcml2YXRlIG92ZXJsYXlCYWNrZHJvcENsaWNrU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgcHJpdmF0ZSBvdmVybGF5UG9zaXRpb25DaGFuZ2VTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksXHJcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55XHJcbiAgKSB7fVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveVBhbmVsKCk7XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLnNldFRyaWdnZXJWYWx1ZSh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IHt9KSA9PiB7fSk6IHZvaWQge1xyXG4gICAgdGhpcy5fb25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xyXG4gICAgdGhpcy5fb25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICAgIGVsZW1lbnQuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gICAgdGhpcy5jbG9zZVBhbmVsKCk7XHJcbiAgfVxyXG5cclxuICBvcGVuUGFuZWwoKTogdm9pZCB7XHJcbiAgICB0aGlzLnByZXZpb3VzVmFsdWUgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC52YWx1ZTtcclxuICAgIHRoaXMuYXR0YWNoT3ZlcmxheSgpO1xyXG4gICAgdGhpcy51cGRhdGVTdGF0dXMoKTtcclxuICB9XHJcblxyXG4gIGNsb3NlUGFuZWwoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5wYW5lbE9wZW4pIHtcclxuICAgICAgdGhpcy5uekF1dG9jb21wbGV0ZS5pc09wZW4gPSB0aGlzLnBhbmVsT3BlbiA9IGZhbHNlO1xyXG5cclxuICAgICAgaWYgKHRoaXMub3ZlcmxheVJlZiAmJiB0aGlzLm92ZXJsYXlSZWYuaGFzQXR0YWNoZWQoKSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgdGhpcy5vdmVybGF5QmFja2Ryb3BDbGlja1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIHRoaXMub3ZlcmxheVBvc2l0aW9uQ2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zQ2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgdGhpcy5vdmVybGF5UmVmLmRldGFjaCgpO1xyXG4gICAgICAgIHRoaXMub3ZlcmxheVJlZiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wb3J0YWwgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVLZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCBrZXlDb2RlID0gZXZlbnQua2V5Q29kZTtcclxuICAgIGNvbnN0IGlzQXJyb3dLZXkgPSBrZXlDb2RlID09PSBVUF9BUlJPVyB8fCBrZXlDb2RlID09PSBET1dOX0FSUk9XO1xyXG5cclxuICAgIGlmIChrZXlDb2RlID09PSBFU0NBUEUpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5wYW5lbE9wZW4gJiYgKGtleUNvZGUgPT09IEVTQ0FQRSB8fCBrZXlDb2RlID09PSBUQUIpKSB7XHJcbiAgICAgIC8vIFJlc2V0IHZhbHVlIHdoZW4gdGFiIC8gRVNDIGNsb3NlXHJcbiAgICAgIGlmICh0aGlzLmFjdGl2ZU9wdGlvbiAmJiB0aGlzLmFjdGl2ZU9wdGlvbi5nZXRMYWJlbCgpICE9PSB0aGlzLnByZXZpb3VzVmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldFRyaWdnZXJWYWx1ZSh0aGlzLnByZXZpb3VzVmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2xvc2VQYW5lbCgpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnBhbmVsT3BlbiAmJiBrZXlDb2RlID09PSBFTlRFUikge1xyXG4gICAgICBpZiAodGhpcy5uekF1dG9jb21wbGV0ZS5zaG93UGFuZWwgJiYgdGhpcy5hY3RpdmVPcHRpb24pIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlT3B0aW9uLnNlbGVjdFZpYUludGVyYWN0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodGhpcy5wYW5lbE9wZW4gJiYgaXNBcnJvd0tleSAmJiB0aGlzLm56QXV0b2NvbXBsZXRlLnNob3dQYW5lbCkge1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgaWYgKGtleUNvZGUgPT09IFVQX0FSUk9XKSB7XHJcbiAgICAgICAgdGhpcy5uekF1dG9jb21wbGV0ZS5zZXRQcmV2aW91c0l0ZW1BY3RpdmUoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLm56QXV0b2NvbXBsZXRlLnNldE5leHRJdGVtQWN0aXZlKCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuYWN0aXZlT3B0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVPcHRpb24uc2Nyb2xsSW50b1ZpZXdJZk5lZWRlZCgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZG9CYWNrZmlsbCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlSW5wdXQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgY29uc3QgZG9jdW1lbnQgPSB0aGlzLmRvY3VtZW50IGFzIERvY3VtZW50O1xyXG4gICAgbGV0IHZhbHVlOiBudW1iZXIgfCBzdHJpbmcgfCBudWxsID0gdGFyZ2V0LnZhbHVlO1xyXG5cclxuICAgIGlmICh0YXJnZXQudHlwZSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgdmFsdWUgPSB2YWx1ZSA9PT0gJycgPyBudWxsIDogcGFyc2VGbG9hdCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMucHJldmlvdXNWYWx1ZSAhPT0gdmFsdWUpIHtcclxuICAgICAgdGhpcy5wcmV2aW91c1ZhbHVlID0gdmFsdWU7XHJcbiAgICAgIHRoaXMuX29uQ2hhbmdlKHZhbHVlKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmNhbk9wZW4oKSAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBldmVudC50YXJnZXQpIHtcclxuICAgICAgICB0aGlzLm9wZW5QYW5lbCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVGb2N1cygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmNhbk9wZW4oKSkge1xyXG4gICAgICB0aGlzLm9wZW5QYW5lbCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlQmx1cigpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xvc2VQYW5lbCgpO1xyXG4gICAgdGhpcy5fb25Ub3VjaGVkKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdWJzY3JpcHRpb24gZGF0YSBzb3VyY2UgY2hhbmdlcyBldmVudFxyXG4gICAqL1xyXG4gIHByaXZhdGUgc3Vic2NyaWJlT3B0aW9uc0NoYW5nZSgpOiBTdWJzY3JpcHRpb24ge1xyXG4gICAgY29uc3QgZmlyc3RTdGFibGUgPSB0aGlzLm5nWm9uZS5vblN0YWJsZS5hc09ic2VydmFibGUoKS5waXBlKHRha2UoMSkpO1xyXG4gICAgY29uc3Qgb3B0aW9uQ2hhbmdlcyA9IHRoaXMubnpBdXRvY29tcGxldGUub3B0aW9ucy5jaGFuZ2VzLnBpcGUoXHJcbiAgICAgIHRhcCgoKSA9PiB0aGlzLnBvc2l0aW9uU3RyYXRlZ3kucmVhcHBseUxhc3RQb3NpdGlvbigpKSxcclxuICAgICAgZGVsYXkoMClcclxuICAgICk7XHJcbiAgICByZXR1cm4gbWVyZ2UoZmlyc3RTdGFibGUsIG9wdGlvbkNoYW5nZXMpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMucmVzZXRBY3RpdmVJdGVtKCk7XHJcbiAgICAgIGlmICh0aGlzLnBhbmVsT3Blbikge1xyXG4gICAgICAgIHRoaXMub3ZlcmxheVJlZiEudXBkYXRlUG9zaXRpb24oKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdWJzY3JpcHRpb24gb3B0aW9uIGNoYW5nZXMgZXZlbnQgYW5kIHNldCB0aGUgdmFsdWVcclxuICAgKi9cclxuICBwcml2YXRlIHN1YnNjcmliZVNlbGVjdGlvbkNoYW5nZSgpOiBTdWJzY3JpcHRpb24ge1xyXG4gICAgcmV0dXJuIHRoaXMubnpBdXRvY29tcGxldGUuc2VsZWN0aW9uQ2hhbmdlLnN1YnNjcmliZSgob3B0aW9uOiBOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFZhbHVlQW5kQ2xvc2Uob3B0aW9uKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3Vic2NyaXB0aW9uIGV4dGVybmFsIGNsaWNrIGFuZCBjbG9zZSBwYW5lbFxyXG4gICAqL1xyXG4gIHByaXZhdGUgc3Vic2NyaWJlT3ZlcmxheUJhY2tkcm9wQ2xpY2soKTogU3Vic2NyaXB0aW9uIHtcclxuICAgIHJldHVybiBtZXJnZTxNb3VzZUV2ZW50IHwgVG91Y2hFdmVudD4oXHJcbiAgICAgIGZyb21FdmVudDxNb3VzZUV2ZW50Pih0aGlzLmRvY3VtZW50LCAnY2xpY2snKSxcclxuICAgICAgZnJvbUV2ZW50PFRvdWNoRXZlbnQ+KHRoaXMuZG9jdW1lbnQsICd0b3VjaGVuZCcpXHJcbiAgICApLnN1YnNjcmliZSgoZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IGNsaWNrVGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xyXG5cclxuICAgICAgLy8gTWFrZSBzdXJlIGlzIG5vdCBzZWxmXHJcbiAgICAgIGlmIChcclxuICAgICAgICBjbGlja1RhcmdldCAhPT0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgJiZcclxuICAgICAgICAhdGhpcy5vdmVybGF5UmVmIS5vdmVybGF5RWxlbWVudC5jb250YWlucyhjbGlja1RhcmdldCkgJiZcclxuICAgICAgICB0aGlzLnBhbmVsT3BlblxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLmNsb3NlUGFuZWwoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdWJzY3JpcHRpb24gb3ZlcmxheSBwb3NpdGlvbiBjaGFuZ2VzIGFuZCByZXNldCBkcm9wZG93biBwb3NpdGlvblxyXG4gICAqL1xyXG4gIHByaXZhdGUgc3Vic2NyaWJlT3ZlcmxheVBvc2l0aW9uQ2hhbmdlKCk6IFN1YnNjcmlwdGlvbiB7XHJcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvblN0cmF0ZWd5LnBvc2l0aW9uQ2hhbmdlc1xyXG4gICAgICAucGlwZShcclxuICAgICAgICBtYXAoKHBvc2l0aW9uOiBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UpID0+IHBvc2l0aW9uLmNvbm5lY3Rpb25QYWlyLm9yaWdpblkpLFxyXG4gICAgICAgIGRpc3RpbmN0KCksXHJcbiAgICAgICAgZGVsYXkoMClcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKChwb3NpdGlvbjogVmVydGljYWxDb25uZWN0aW9uUG9zKSA9PiB7XHJcbiAgICAgICAgdGhpcy5uekF1dG9jb21wbGV0ZS51cGRhdGVQb3NpdGlvbihwb3NpdGlvbik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhdHRhY2hPdmVybGF5KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLm56QXV0b2NvbXBsZXRlKSB7XHJcbiAgICAgIHRocm93IGdldE56QXV0b2NvbXBsZXRlTWlzc2luZ1BhbmVsRXJyb3IoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMucG9ydGFsKSB7XHJcbiAgICAgIHRoaXMucG9ydGFsID0gbmV3IFRlbXBsYXRlUG9ydGFsKHRoaXMubnpBdXRvY29tcGxldGUudGVtcGxhdGUsIHRoaXMudmlld0NvbnRhaW5lclJlZik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLm92ZXJsYXlSZWYpIHtcclxuICAgICAgdGhpcy5vdmVybGF5UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZSh0aGlzLmdldE92ZXJsYXlDb25maWcoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZiAmJiAhdGhpcy5vdmVybGF5UmVmLmhhc0F0dGFjaGVkKCkpIHtcclxuICAgICAgdGhpcy5vdmVybGF5UmVmLmF0dGFjaCh0aGlzLnBvcnRhbCk7XHJcbiAgICAgIHRoaXMub3ZlcmxheVBvc2l0aW9uQ2hhbmdlU3Vic2NyaXB0aW9uID0gdGhpcy5zdWJzY3JpYmVPdmVybGF5UG9zaXRpb25DaGFuZ2UoKTtcclxuICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2VTdWJzY3JpcHRpb24gPSB0aGlzLnN1YnNjcmliZVNlbGVjdGlvbkNoYW5nZSgpO1xyXG4gICAgICB0aGlzLm92ZXJsYXlCYWNrZHJvcENsaWNrU3Vic2NyaXB0aW9uID0gdGhpcy5zdWJzY3JpYmVPdmVybGF5QmFja2Ryb3BDbGljaygpO1xyXG4gICAgICB0aGlzLm9wdGlvbnNDaGFuZ2VTdWJzY3JpcHRpb24gPSB0aGlzLnN1YnNjcmliZU9wdGlvbnNDaGFuZ2UoKTtcclxuICAgIH1cclxuICAgIHRoaXMubnpBdXRvY29tcGxldGUuaXNPcGVuID0gdGhpcy5wYW5lbE9wZW4gPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVTdGF0dXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5vdmVybGF5UmVmKSB7XHJcbiAgICAgIHRoaXMub3ZlcmxheVJlZi51cGRhdGVTaXplKHsgd2lkdGg6IHRoaXMubnpBdXRvY29tcGxldGUubnpXaWR0aCB8fCB0aGlzLmdldEhvc3RXaWR0aCgpIH0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5uekF1dG9jb21wbGV0ZS5zZXRWaXNpYmlsaXR5KCk7XHJcbiAgICB0aGlzLnJlc2V0QWN0aXZlSXRlbSgpO1xyXG4gICAgaWYgKHRoaXMuYWN0aXZlT3B0aW9uKSB7XHJcbiAgICAgIHRoaXMuYWN0aXZlT3B0aW9uLnNjcm9sbEludG9WaWV3SWZOZWVkZWQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGVzdHJveVBhbmVsKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZikge1xyXG4gICAgICB0aGlzLmNsb3NlUGFuZWwoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0T3ZlcmxheUNvbmZpZygpOiBPdmVybGF5Q29uZmlnIHtcclxuICAgIHJldHVybiBuZXcgT3ZlcmxheUNvbmZpZyh7XHJcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3k6IHRoaXMuZ2V0T3ZlcmxheVBvc2l0aW9uKCksXHJcbiAgICAgIHNjcm9sbFN0cmF0ZWd5OiB0aGlzLm92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5yZXBvc2l0aW9uKCksXHJcbiAgICAgIC8vIGRlZmF1bHQgaG9zdCBlbGVtZW50IHdpZHRoXHJcbiAgICAgIHdpZHRoOiB0aGlzLm56QXV0b2NvbXBsZXRlLm56V2lkdGggfHwgdGhpcy5nZXRIb3N0V2lkdGgoKVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldENvbm5lY3RlZEVsZW1lbnQoKTogRWxlbWVudFJlZiB7XHJcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRIb3N0V2lkdGgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmdldENvbm5lY3RlZEVsZW1lbnQoKS5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRPdmVybGF5UG9zaXRpb24oKTogUG9zaXRpb25TdHJhdGVneSB7XHJcbiAgICBjb25zdCBwb3NpdGlvbnMgPSBbXHJcbiAgICAgIG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ2JvdHRvbScgfSwgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICd0b3AnIH0pLFxyXG4gICAgICBuZXcgQ29ubmVjdGlvblBvc2l0aW9uUGFpcih7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICd0b3AnIH0sIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAnYm90dG9tJyB9KVxyXG4gICAgXTtcclxuICAgIHRoaXMucG9zaXRpb25TdHJhdGVneSA9IHRoaXMub3ZlcmxheVxyXG4gICAgICAucG9zaXRpb24oKVxyXG4gICAgICAuZmxleGlibGVDb25uZWN0ZWRUbyh0aGlzLmdldENvbm5lY3RlZEVsZW1lbnQoKSlcclxuICAgICAgLndpdGhGbGV4aWJsZURpbWVuc2lvbnMoZmFsc2UpXHJcbiAgICAgIC53aXRoUHVzaChmYWxzZSlcclxuICAgICAgLndpdGhQb3NpdGlvbnMocG9zaXRpb25zKTtcclxuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uU3RyYXRlZ3k7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlc2V0QWN0aXZlSXRlbSgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5uekF1dG9jb21wbGV0ZS5nZXRPcHRpb25JbmRleCh0aGlzLnByZXZpb3VzVmFsdWUpO1xyXG4gICAgdGhpcy5uekF1dG9jb21wbGV0ZS5jbGVhclNlbGVjdGVkT3B0aW9ucyhudWxsLCB0cnVlKTtcclxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgdGhpcy5uekF1dG9jb21wbGV0ZS5zZXRBY3RpdmVJdGVtKGluZGV4KTtcclxuICAgICAgdGhpcy5uekF1dG9jb21wbGV0ZS5hY3RpdmVJdGVtLnNlbGVjdChmYWxzZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm56QXV0b2NvbXBsZXRlLnNldEFjdGl2ZUl0ZW0odGhpcy5uekF1dG9jb21wbGV0ZS5uekRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvbiA/IDAgOiAtMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFZhbHVlQW5kQ2xvc2Uob3B0aW9uOiBOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudCk6IHZvaWQge1xyXG4gICAgY29uc3QgdmFsdWUgPSBvcHRpb24ubnpWYWx1ZTtcclxuICAgIHRoaXMuc2V0VHJpZ2dlclZhbHVlKG9wdGlvbi5nZXRMYWJlbCgpKTtcclxuICAgIHRoaXMuX29uQ2hhbmdlKHZhbHVlKTtcclxuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICB0aGlzLmNsb3NlUGFuZWwoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0VHJpZ2dlclZhbHVlKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfCBudWxsKTogdm9pZCB7XHJcbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC52YWx1ZSA9IHZhbHVlIHx8ICcnO1xyXG4gICAgaWYgKCF0aGlzLm56QXV0b2NvbXBsZXRlLm56QmFja2ZpbGwpIHtcclxuICAgICAgdGhpcy5wcmV2aW91c1ZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRvQmFja2ZpbGwoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uekF1dG9jb21wbGV0ZS5uekJhY2tmaWxsICYmIHRoaXMubnpBdXRvY29tcGxldGUuYWN0aXZlSXRlbSkge1xyXG4gICAgICB0aGlzLnNldFRyaWdnZXJWYWx1ZSh0aGlzLm56QXV0b2NvbXBsZXRlLmFjdGl2ZUl0ZW0uZ2V0TGFiZWwoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhbk9wZW4oKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBlbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICByZXR1cm4gIWVsZW1lbnQucmVhZE9ubHkgJiYgIWVsZW1lbnQuZGlzYWJsZWQ7XHJcbiAgfVxyXG59XHJcbiJdfQ==
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
import { Directive, ElementRef, forwardRef, Inject, Input, NgZone, Optional, ViewContainerRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { fromEvent, merge } from 'rxjs';
import { delay, distinct, map, take, tap } from 'rxjs/operators';
import { NzAutocompleteComponent } from './nz-autocomplete.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
var _c0 = ["autocomplete", "off", "aria-autocomplete", "list"];
export var NZ_AUTOCOMPLETE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return NzAutocompleteTriggerDirective; }),
    multi: true
};
export function getNzAutocompleteMissingPanelError() {
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
    /** @nocollapse */ NzAutocompleteTriggerDirective.ɵfac = function NzAutocompleteTriggerDirective_Factory(t) { return new (t || NzAutocompleteTriggerDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.Overlay), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(DOCUMENT, 8)); };
    /** @nocollapse */ NzAutocompleteTriggerDirective.ɵdir = i0.ɵɵdefineDirective({ type: NzAutocompleteTriggerDirective, selectors: [["input", "nzAutocomplete", ""], ["textarea", "nzAutocomplete", ""]], hostBindings: function NzAutocompleteTriggerDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            i0.ɵɵlistener("focusin", function NzAutocompleteTriggerDirective_focusin_HostBindingHandler($event) { return ctx.handleFocus(); })("blur", function NzAutocompleteTriggerDirective_blur_HostBindingHandler($event) { return ctx.handleBlur(); })("input", function NzAutocompleteTriggerDirective_input_HostBindingHandler($event) { return ctx.handleInput($event); })("keydown", function NzAutocompleteTriggerDirective_keydown_HostBindingHandler($event) { return ctx.handleKeydown($event); });
            i0.ɵɵelementHostAttrs(_c0);
        } }, inputs: { nzAutocomplete: "nzAutocomplete" }, exportAs: ["nzAutocompleteTrigger"], features: [i0.ɵɵProvidersFeature([NZ_AUTOCOMPLETE_VALUE_ACCESSOR])] });
    return NzAutocompleteTriggerDirective;
}());
export { NzAutocompleteTriggerDirective };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzAutocompleteTriggerDirective, [{
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
    }], function () { return [{ type: i0.ElementRef }, { type: i1.Overlay }, { type: i0.ViewContainerRef }, { type: i0.NgZone }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, { nzAutocomplete: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYXV0b2NvbXBsZXRlLXRyaWdnZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9hdXRvLWNvbXBsZXRlLyIsInNvdXJjZXMiOlsibnotYXV0b2NvbXBsZXRlLXRyaWdnZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakYsT0FBTyxFQUVMLHNCQUFzQixFQUV0QixPQUFPLEVBQ1AsYUFBYSxFQUlkLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFFVixVQUFVLEVBQ1YsTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEVBRU4sUUFBUSxFQUNSLGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHakUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7QUFFdEUsTUFBTSxDQUFDLElBQU0sOEJBQThCLEdBQXFCO0lBQzlELE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsOEJBQThCLEVBQTlCLENBQThCLENBQUM7SUFDN0QsS0FB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QUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FDakU7SUFDSCxDQUFDO0lBRU8sZ0RBQU8sR0FBZjtRQUNFLElBQU0sT0FBTyxHQUFxQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUNoRSxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7SUFDaEQsQ0FBQztnSEFuVFUsOEJBQThCLDBLQStCbkIsUUFBUTt1RUEvQm5CLDhCQUE4Qjs7O2lJQVY5QixDQUFDLDhCQUE4QixDQUFDO3lDQTFEN0M7Q0F3WEMsQUFqVUQsSUFpVUM7U0FwVFksOEJBQThCO2tEQUE5Qiw4QkFBOEI7Y0FiMUMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpREFBaUQ7Z0JBQzNELFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2dCQUMzQyxJQUFJLEVBQUU7b0JBQ0osWUFBWSxFQUFFLEtBQUs7b0JBQ25CLG1CQUFtQixFQUFFLE1BQU07b0JBQzNCLFdBQVcsRUFBRSxlQUFlO29CQUM1QixRQUFRLEVBQUUsY0FBYztvQkFDeEIsU0FBUyxFQUFFLHFCQUFxQjtvQkFDaEMsV0FBVyxFQUFFLHVCQUF1QjtpQkFDckM7YUFDRjs7c0JBZ0NJLFFBQVE7O3NCQUFJLE1BQU07dUJBQUMsUUFBUTs7a0JBN0I3QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBET1dOX0FSUk9XLCBFTlRFUiwgRVNDQVBFLCBUQUIsIFVQX0FSUk9XIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcclxuaW1wb3J0IHtcclxuICBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UsXHJcbiAgQ29ubmVjdGlvblBvc2l0aW9uUGFpcixcclxuICBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3ksXHJcbiAgT3ZlcmxheSxcclxuICBPdmVybGF5Q29uZmlnLFxyXG4gIE92ZXJsYXlSZWYsXHJcbiAgUG9zaXRpb25TdHJhdGVneSxcclxuICBWZXJ0aWNhbENvbm5lY3Rpb25Qb3NcclxufSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IFRlbXBsYXRlUG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBFeGlzdGluZ1Byb3ZpZGVyLFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgSW5qZWN0LFxyXG4gIElucHV0LFxyXG4gIE5nWm9uZSxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT3B0aW9uYWwsXHJcbiAgVmlld0NvbnRhaW5lclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBmcm9tRXZlbnQsIG1lcmdlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVsYXksIGRpc3RpbmN0LCBtYXAsIHRha2UsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9uei1hdXRvY29tcGxldGUtb3B0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56QXV0b2NvbXBsZXRlQ29tcG9uZW50IH0gZnJvbSAnLi9uei1hdXRvY29tcGxldGUuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBjb25zdCBOWl9BVVRPQ09NUExFVEVfVkFMVUVfQUNDRVNTT1I6IEV4aXN0aW5nUHJvdmlkZXIgPSB7XHJcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnpBdXRvY29tcGxldGVUcmlnZ2VyRGlyZWN0aXZlKSxcclxuICBtdWx0aTogdHJ1ZVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE56QXV0b2NvbXBsZXRlTWlzc2luZ1BhbmVsRXJyb3IoKTogRXJyb3Ige1xyXG4gIHJldHVybiBFcnJvcihcclxuICAgICdBdHRlbXB0aW5nIHRvIG9wZW4gYW4gdW5kZWZpbmVkIGluc3RhbmNlIG9mIGBuei1hdXRvY29tcGxldGVgLiAnICtcclxuICAgICAgJ01ha2Ugc3VyZSB0aGF0IHRoZSBpZCBwYXNzZWQgdG8gdGhlIGBuekF1dG9jb21wbGV0ZWAgaXMgY29ycmVjdCBhbmQgdGhhdCAnICtcclxuICAgICAgXCJ5b3UncmUgYXR0ZW1wdGluZyB0byBvcGVuIGl0IGFmdGVyIHRoZSBuZ0FmdGVyQ29udGVudEluaXQgaG9vay5cIlxyXG4gICk7XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBgaW5wdXRbbnpBdXRvY29tcGxldGVdLCB0ZXh0YXJlYVtuekF1dG9jb21wbGV0ZV1gLFxyXG4gIGV4cG9ydEFzOiAnbnpBdXRvY29tcGxldGVUcmlnZ2VyJyxcclxuICBwcm92aWRlcnM6IFtOWl9BVVRPQ09NUExFVEVfVkFMVUVfQUNDRVNTT1JdLFxyXG4gIGhvc3Q6IHtcclxuICAgIGF1dG9jb21wbGV0ZTogJ29mZicsXHJcbiAgICAnYXJpYS1hdXRvY29tcGxldGUnOiAnbGlzdCcsXHJcbiAgICAnKGZvY3VzaW4pJzogJ2hhbmRsZUZvY3VzKCknLFxyXG4gICAgJyhibHVyKSc6ICdoYW5kbGVCbHVyKCknLFxyXG4gICAgJyhpbnB1dCknOiAnaGFuZGxlSW5wdXQoJGV2ZW50KScsXHJcbiAgICAnKGtleWRvd24pJzogJ2hhbmRsZUtleWRvd24oJGV2ZW50KSdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekF1dG9jb21wbGV0ZVRyaWdnZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25EZXN0cm95IHtcclxuICAvKiogQmluZCBuekF1dG9jb21wbGV0ZSBjb21wb25lbnQgKi9cclxuICBASW5wdXQoKSBuekF1dG9jb21wbGV0ZTogTnpBdXRvY29tcGxldGVDb21wb25lbnQ7XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBfb25DaGFuZ2U6ICh2YWx1ZTogYW55KSA9PiB2b2lkID0gKCkgPT4ge307XHJcbiAgX29uVG91Y2hlZCA9ICgpID0+IHt9O1xyXG4gIHBhbmVsT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKiogQ3VycmVudCBhY3RpdmUgb3B0aW9uICovXHJcbiAgZ2V0IGFjdGl2ZU9wdGlvbigpOiBOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudCB8IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpBdXRvY29tcGxldGUgJiYgdGhpcy5uekF1dG9jb21wbGV0ZS5vcHRpb25zLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5uekF1dG9jb21wbGV0ZS5hY3RpdmVJdGVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvdmVybGF5UmVmOiBPdmVybGF5UmVmIHwgbnVsbDtcclxuICBwcml2YXRlIHBvcnRhbDogVGVtcGxhdGVQb3J0YWw8e30+IHwgbnVsbDtcclxuICBwcml2YXRlIHBvc2l0aW9uU3RyYXRlZ3k6IEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneTtcclxuICBwcml2YXRlIHByZXZpb3VzVmFsdWU6IHN0cmluZyB8IG51bWJlciB8IG51bGw7XHJcbiAgcHJpdmF0ZSBzZWxlY3Rpb25DaGFuZ2VTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICBwcml2YXRlIG9wdGlvbnNDaGFuZ2VTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICBwcml2YXRlIG92ZXJsYXlCYWNrZHJvcENsaWNrU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgcHJpdmF0ZSBvdmVybGF5UG9zaXRpb25DaGFuZ2VTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksXHJcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55XHJcbiAgKSB7fVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveVBhbmVsKCk7XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLnNldFRyaWdnZXJWYWx1ZSh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IHt9KSA9PiB7fSk6IHZvaWQge1xyXG4gICAgdGhpcy5fb25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xyXG4gICAgdGhpcy5fb25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICAgIGVsZW1lbnQuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gICAgdGhpcy5jbG9zZVBhbmVsKCk7XHJcbiAgfVxyXG5cclxuICBvcGVuUGFuZWwoKTogdm9pZCB7XHJcbiAgICB0aGlzLnByZXZpb3VzVmFsdWUgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC52YWx1ZTtcclxuICAgIHRoaXMuYXR0YWNoT3ZlcmxheSgpO1xyXG4gICAgdGhpcy51cGRhdGVTdGF0dXMoKTtcclxuICB9XHJcblxyXG4gIGNsb3NlUGFuZWwoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5wYW5lbE9wZW4pIHtcclxuICAgICAgdGhpcy5uekF1dG9jb21wbGV0ZS5pc09wZW4gPSB0aGlzLnBhbmVsT3BlbiA9IGZhbHNlO1xyXG5cclxuICAgICAgaWYgKHRoaXMub3ZlcmxheVJlZiAmJiB0aGlzLm92ZXJsYXlSZWYuaGFzQXR0YWNoZWQoKSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgdGhpcy5vdmVybGF5QmFja2Ryb3BDbGlja1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIHRoaXMub3ZlcmxheVBvc2l0aW9uQ2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zQ2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgdGhpcy5vdmVybGF5UmVmLmRldGFjaCgpO1xyXG4gICAgICAgIHRoaXMub3ZlcmxheVJlZiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wb3J0YWwgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVLZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCBrZXlDb2RlID0gZXZlbnQua2V5Q29kZTtcclxuICAgIGNvbnN0IGlzQXJyb3dLZXkgPSBrZXlDb2RlID09PSBVUF9BUlJPVyB8fCBrZXlDb2RlID09PSBET1dOX0FSUk9XO1xyXG5cclxuICAgIGlmIChrZXlDb2RlID09PSBFU0NBUEUpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5wYW5lbE9wZW4gJiYgKGtleUNvZGUgPT09IEVTQ0FQRSB8fCBrZXlDb2RlID09PSBUQUIpKSB7XHJcbiAgICAgIC8vIFJlc2V0IHZhbHVlIHdoZW4gdGFiIC8gRVNDIGNsb3NlXHJcbiAgICAgIGlmICh0aGlzLmFjdGl2ZU9wdGlvbiAmJiB0aGlzLmFjdGl2ZU9wdGlvbi5nZXRMYWJlbCgpICE9PSB0aGlzLnByZXZpb3VzVmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldFRyaWdnZXJWYWx1ZSh0aGlzLnByZXZpb3VzVmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2xvc2VQYW5lbCgpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnBhbmVsT3BlbiAmJiBrZXlDb2RlID09PSBFTlRFUikge1xyXG4gICAgICBpZiAodGhpcy5uekF1dG9jb21wbGV0ZS5zaG93UGFuZWwgJiYgdGhpcy5hY3RpdmVPcHRpb24pIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlT3B0aW9uLnNlbGVjdFZpYUludGVyYWN0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodGhpcy5wYW5lbE9wZW4gJiYgaXNBcnJvd0tleSAmJiB0aGlzLm56QXV0b2NvbXBsZXRlLnNob3dQYW5lbCkge1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgaWYgKGtleUNvZGUgPT09IFVQX0FSUk9XKSB7XHJcbiAgICAgICAgdGhpcy5uekF1dG9jb21wbGV0ZS5zZXRQcmV2aW91c0l0ZW1BY3RpdmUoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLm56QXV0b2NvbXBsZXRlLnNldE5leHRJdGVtQWN0aXZlKCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuYWN0aXZlT3B0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVPcHRpb24uc2Nyb2xsSW50b1ZpZXdJZk5lZWRlZCgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZG9CYWNrZmlsbCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlSW5wdXQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgY29uc3QgZG9jdW1lbnQgPSB0aGlzLmRvY3VtZW50IGFzIERvY3VtZW50O1xyXG4gICAgbGV0IHZhbHVlOiBudW1iZXIgfCBzdHJpbmcgfCBudWxsID0gdGFyZ2V0LnZhbHVlO1xyXG5cclxuICAgIGlmICh0YXJnZXQudHlwZSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgdmFsdWUgPSB2YWx1ZSA9PT0gJycgPyBudWxsIDogcGFyc2VGbG9hdCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMucHJldmlvdXNWYWx1ZSAhPT0gdmFsdWUpIHtcclxuICAgICAgdGhpcy5wcmV2aW91c1ZhbHVlID0gdmFsdWU7XHJcbiAgICAgIHRoaXMuX29uQ2hhbmdlKHZhbHVlKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmNhbk9wZW4oKSAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBldmVudC50YXJnZXQpIHtcclxuICAgICAgICB0aGlzLm9wZW5QYW5lbCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVGb2N1cygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmNhbk9wZW4oKSkge1xyXG4gICAgICB0aGlzLm9wZW5QYW5lbCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlQmx1cigpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xvc2VQYW5lbCgpO1xyXG4gICAgdGhpcy5fb25Ub3VjaGVkKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdWJzY3JpcHRpb24gZGF0YSBzb3VyY2UgY2hhbmdlcyBldmVudFxyXG4gICAqL1xyXG4gIHByaXZhdGUgc3Vic2NyaWJlT3B0aW9uc0NoYW5nZSgpOiBTdWJzY3JpcHRpb24ge1xyXG4gICAgY29uc3QgZmlyc3RTdGFibGUgPSB0aGlzLm5nWm9uZS5vblN0YWJsZS5hc09ic2VydmFibGUoKS5waXBlKHRha2UoMSkpO1xyXG4gICAgY29uc3Qgb3B0aW9uQ2hhbmdlcyA9IHRoaXMubnpBdXRvY29tcGxldGUub3B0aW9ucy5jaGFuZ2VzLnBpcGUoXHJcbiAgICAgIHRhcCgoKSA9PiB0aGlzLnBvc2l0aW9uU3RyYXRlZ3kucmVhcHBseUxhc3RQb3NpdGlvbigpKSxcclxuICAgICAgZGVsYXkoMClcclxuICAgICk7XHJcbiAgICByZXR1cm4gbWVyZ2UoZmlyc3RTdGFibGUsIG9wdGlvbkNoYW5nZXMpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMucmVzZXRBY3RpdmVJdGVtKCk7XHJcbiAgICAgIGlmICh0aGlzLnBhbmVsT3Blbikge1xyXG4gICAgICAgIHRoaXMub3ZlcmxheVJlZiEudXBkYXRlUG9zaXRpb24oKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdWJzY3JpcHRpb24gb3B0aW9uIGNoYW5nZXMgZXZlbnQgYW5kIHNldCB0aGUgdmFsdWVcclxuICAgKi9cclxuICBwcml2YXRlIHN1YnNjcmliZVNlbGVjdGlvbkNoYW5nZSgpOiBTdWJzY3JpcHRpb24ge1xyXG4gICAgcmV0dXJuIHRoaXMubnpBdXRvY29tcGxldGUuc2VsZWN0aW9uQ2hhbmdlLnN1YnNjcmliZSgob3B0aW9uOiBOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFZhbHVlQW5kQ2xvc2Uob3B0aW9uKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3Vic2NyaXB0aW9uIGV4dGVybmFsIGNsaWNrIGFuZCBjbG9zZSBwYW5lbFxyXG4gICAqL1xyXG4gIHByaXZhdGUgc3Vic2NyaWJlT3ZlcmxheUJhY2tkcm9wQ2xpY2soKTogU3Vic2NyaXB0aW9uIHtcclxuICAgIHJldHVybiBtZXJnZTxNb3VzZUV2ZW50IHwgVG91Y2hFdmVudD4oXHJcbiAgICAgIGZyb21FdmVudDxNb3VzZUV2ZW50Pih0aGlzLmRvY3VtZW50LCAnY2xpY2snKSxcclxuICAgICAgZnJvbUV2ZW50PFRvdWNoRXZlbnQ+KHRoaXMuZG9jdW1lbnQsICd0b3VjaGVuZCcpXHJcbiAgICApLnN1YnNjcmliZSgoZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IGNsaWNrVGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xyXG5cclxuICAgICAgLy8gTWFrZSBzdXJlIGlzIG5vdCBzZWxmXHJcbiAgICAgIGlmIChjbGlja1RhcmdldCAhPT0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgJiYgIXRoaXMub3ZlcmxheVJlZiEub3ZlcmxheUVsZW1lbnQuY29udGFpbnMoY2xpY2tUYXJnZXQpICYmIHRoaXMucGFuZWxPcGVuKSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZVBhbmVsKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3Vic2NyaXB0aW9uIG92ZXJsYXkgcG9zaXRpb24gY2hhbmdlcyBhbmQgcmVzZXQgZHJvcGRvd24gcG9zaXRpb25cclxuICAgKi9cclxuICBwcml2YXRlIHN1YnNjcmliZU92ZXJsYXlQb3NpdGlvbkNoYW5nZSgpOiBTdWJzY3JpcHRpb24ge1xyXG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25TdHJhdGVneS5wb3NpdGlvbkNoYW5nZXNcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgbWFwKChwb3NpdGlvbjogQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlKSA9PiBwb3NpdGlvbi5jb25uZWN0aW9uUGFpci5vcmlnaW5ZKSxcclxuICAgICAgICBkaXN0aW5jdCgpLFxyXG4gICAgICAgIGRlbGF5KDApXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZSgocG9zaXRpb246IFZlcnRpY2FsQ29ubmVjdGlvblBvcykgPT4ge1xyXG4gICAgICAgIHRoaXMubnpBdXRvY29tcGxldGUudXBkYXRlUG9zaXRpb24ocG9zaXRpb24pO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXR0YWNoT3ZlcmxheSgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5uekF1dG9jb21wbGV0ZSkge1xyXG4gICAgICB0aHJvdyBnZXROekF1dG9jb21wbGV0ZU1pc3NpbmdQYW5lbEVycm9yKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLnBvcnRhbCkge1xyXG4gICAgICB0aGlzLnBvcnRhbCA9IG5ldyBUZW1wbGF0ZVBvcnRhbCh0aGlzLm56QXV0b2NvbXBsZXRlLnRlbXBsYXRlLCB0aGlzLnZpZXdDb250YWluZXJSZWYpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5vdmVybGF5UmVmKSB7XHJcbiAgICAgIHRoaXMub3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUodGhpcy5nZXRPdmVybGF5Q29uZmlnKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYgJiYgIXRoaXMub3ZlcmxheVJlZi5oYXNBdHRhY2hlZCgpKSB7XHJcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5hdHRhY2godGhpcy5wb3J0YWwpO1xyXG4gICAgICB0aGlzLm92ZXJsYXlQb3NpdGlvbkNoYW5nZVN1YnNjcmlwdGlvbiA9IHRoaXMuc3Vic2NyaWJlT3ZlcmxheVBvc2l0aW9uQ2hhbmdlKCk7XHJcbiAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlU3Vic2NyaXB0aW9uID0gdGhpcy5zdWJzY3JpYmVTZWxlY3Rpb25DaGFuZ2UoKTtcclxuICAgICAgdGhpcy5vdmVybGF5QmFja2Ryb3BDbGlja1N1YnNjcmlwdGlvbiA9IHRoaXMuc3Vic2NyaWJlT3ZlcmxheUJhY2tkcm9wQ2xpY2soKTtcclxuICAgICAgdGhpcy5vcHRpb25zQ2hhbmdlU3Vic2NyaXB0aW9uID0gdGhpcy5zdWJzY3JpYmVPcHRpb25zQ2hhbmdlKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLm56QXV0b2NvbXBsZXRlLmlzT3BlbiA9IHRoaXMucGFuZWxPcGVuID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlU3RhdHVzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZikge1xyXG4gICAgICB0aGlzLm92ZXJsYXlSZWYudXBkYXRlU2l6ZSh7IHdpZHRoOiB0aGlzLm56QXV0b2NvbXBsZXRlLm56V2lkdGggfHwgdGhpcy5nZXRIb3N0V2lkdGgoKSB9KTtcclxuICAgIH1cclxuICAgIHRoaXMubnpBdXRvY29tcGxldGUuc2V0VmlzaWJpbGl0eSgpO1xyXG4gICAgdGhpcy5yZXNldEFjdGl2ZUl0ZW0oKTtcclxuICAgIGlmICh0aGlzLmFjdGl2ZU9wdGlvbikge1xyXG4gICAgICB0aGlzLmFjdGl2ZU9wdGlvbi5zY3JvbGxJbnRvVmlld0lmTmVlZGVkKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRlc3Ryb3lQYW5lbCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYpIHtcclxuICAgICAgdGhpcy5jbG9zZVBhbmVsKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE92ZXJsYXlDb25maWcoKTogT3ZlcmxheUNvbmZpZyB7XHJcbiAgICByZXR1cm4gbmV3IE92ZXJsYXlDb25maWcoe1xyXG4gICAgICBwb3NpdGlvblN0cmF0ZWd5OiB0aGlzLmdldE92ZXJsYXlQb3NpdGlvbigpLFxyXG4gICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMucmVwb3NpdGlvbigpLFxyXG4gICAgICAvLyBkZWZhdWx0IGhvc3QgZWxlbWVudCB3aWR0aFxyXG4gICAgICB3aWR0aDogdGhpcy5uekF1dG9jb21wbGV0ZS5ueldpZHRoIHx8IHRoaXMuZ2V0SG9zdFdpZHRoKClcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRDb25uZWN0ZWRFbGVtZW50KCk6IEVsZW1lbnRSZWYge1xyXG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0SG9zdFdpZHRoKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRDb25uZWN0ZWRFbGVtZW50KCkubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0T3ZlcmxheVBvc2l0aW9uKCk6IFBvc2l0aW9uU3RyYXRlZ3kge1xyXG4gICAgY29uc3QgcG9zaXRpb25zID0gW1xyXG4gICAgICBuZXcgQ29ubmVjdGlvblBvc2l0aW9uUGFpcih7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICdib3R0b20nIH0sIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAndG9wJyB9KSxcclxuICAgICAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAndG9wJyB9LCB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ2JvdHRvbScgfSlcclxuICAgIF07XHJcbiAgICB0aGlzLnBvc2l0aW9uU3RyYXRlZ3kgPSB0aGlzLm92ZXJsYXlcclxuICAgICAgLnBvc2l0aW9uKClcclxuICAgICAgLmZsZXhpYmxlQ29ubmVjdGVkVG8odGhpcy5nZXRDb25uZWN0ZWRFbGVtZW50KCkpXHJcbiAgICAgIC53aXRoRmxleGlibGVEaW1lbnNpb25zKGZhbHNlKVxyXG4gICAgICAud2l0aFB1c2goZmFsc2UpXHJcbiAgICAgIC53aXRoUG9zaXRpb25zKHBvc2l0aW9ucyk7XHJcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvblN0cmF0ZWd5O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZXNldEFjdGl2ZUl0ZW0oKTogdm9pZCB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMubnpBdXRvY29tcGxldGUuZ2V0T3B0aW9uSW5kZXgodGhpcy5wcmV2aW91c1ZhbHVlKTtcclxuICAgIHRoaXMubnpBdXRvY29tcGxldGUuY2xlYXJTZWxlY3RlZE9wdGlvbnMobnVsbCwgdHJ1ZSk7XHJcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgIHRoaXMubnpBdXRvY29tcGxldGUuc2V0QWN0aXZlSXRlbShpbmRleCk7XHJcbiAgICAgIHRoaXMubnpBdXRvY29tcGxldGUuYWN0aXZlSXRlbS5zZWxlY3QoZmFsc2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5uekF1dG9jb21wbGV0ZS5zZXRBY3RpdmVJdGVtKHRoaXMubnpBdXRvY29tcGxldGUubnpEZWZhdWx0QWN0aXZlRmlyc3RPcHRpb24gPyAwIDogLTEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRWYWx1ZUFuZENsb3NlKG9wdGlvbjogTnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IHZhbHVlID0gb3B0aW9uLm56VmFsdWU7XHJcbiAgICB0aGlzLnNldFRyaWdnZXJWYWx1ZShvcHRpb24uZ2V0TGFiZWwoKSk7XHJcbiAgICB0aGlzLl9vbkNoYW5nZSh2YWx1ZSk7XHJcbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgdGhpcy5jbG9zZVBhbmVsKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFRyaWdnZXJWYWx1ZSh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbCk6IHZvaWQge1xyXG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB2YWx1ZSB8fCAnJztcclxuICAgIGlmICghdGhpcy5uekF1dG9jb21wbGV0ZS5uekJhY2tmaWxsKSB7XHJcbiAgICAgIHRoaXMucHJldmlvdXNWYWx1ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkb0JhY2tmaWxsKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpBdXRvY29tcGxldGUubnpCYWNrZmlsbCAmJiB0aGlzLm56QXV0b2NvbXBsZXRlLmFjdGl2ZUl0ZW0pIHtcclxuICAgICAgdGhpcy5zZXRUcmlnZ2VyVmFsdWUodGhpcy5uekF1dG9jb21wbGV0ZS5hY3RpdmVJdGVtLmdldExhYmVsKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYW5PcGVuKCk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgZWxlbWVudDogSFRNTElucHV0RWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgcmV0dXJuICFlbGVtZW50LnJlYWRPbmx5ICYmICFlbGVtZW50LmRpc2FibGVkO1xyXG4gIH1cclxufVxyXG4iXX0=
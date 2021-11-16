/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Overlay } from '@angular/cdk/overlay';
import { ElementRef, ExistingProvider, NgZone, OnDestroy, ViewContainerRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NzAutocompleteOptionComponent } from './nz-autocomplete-option.component';
import { NzAutocompleteComponent } from './nz-autocomplete.component';
import * as ɵngcc0 from '@angular/core';
export declare const NZ_AUTOCOMPLETE_VALUE_ACCESSOR: ExistingProvider;
export declare function getNzAutocompleteMissingPanelError(): Error;
export declare class NzAutocompleteTriggerDirective implements ControlValueAccessor, OnDestroy {
    private elementRef;
    private overlay;
    private viewContainerRef;
    private ngZone;
    private document;
    /** Bind nzAutocomplete component */
    nzAutocomplete: NzAutocompleteComponent;
    _onChange: (value: any) => void;
    _onTouched: () => void;
    panelOpen: boolean;
    /** Current active option */
    readonly activeOption: NzAutocompleteOptionComponent | undefined;
    private overlayRef;
    private portal;
    private positionStrategy;
    private previousValue;
    private selectionChangeSubscription;
    private optionsChangeSubscription;
    private overlayBackdropClickSubscription;
    private overlayPositionChangeSubscription;
    constructor(elementRef: ElementRef, overlay: Overlay, viewContainerRef: ViewContainerRef, ngZone: NgZone, document: any);
    ngOnDestroy(): void;
    writeValue(value: any): void;
    registerOnChange(fn: (value: {}) => {}): void;
    registerOnTouched(fn: () => {}): void;
    setDisabledState(isDisabled: boolean): void;
    openPanel(): void;
    closePanel(): void;
    handleKeydown(event: KeyboardEvent): void;
    handleInput(event: KeyboardEvent): void;
    handleFocus(): void;
    handleBlur(): void;
    /**
     * Subscription data source changes event
     */
    private subscribeOptionsChange;
    /**
     * Subscription option changes event and set the value
     */
    private subscribeSelectionChange;
    /**
     * Subscription external click and close panel
     */
    private subscribeOverlayBackdropClick;
    /**
     * Subscription overlay position changes and reset dropdown position
     */
    private subscribeOverlayPositionChange;
    private attachOverlay;
    private updateStatus;
    private destroyPanel;
    private getOverlayConfig;
    private getConnectedElement;
    private getHostWidth;
    private getOverlayPosition;
    private resetActiveItem;
    private setValueAndClose;
    private setTriggerValue;
    private doBackfill;
    private canOpen;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzAutocompleteTriggerDirective, [null, null, null, null, { optional: true; }]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NzAutocompleteTriggerDirective, "input[nzAutocomplete], textarea[nzAutocomplete]", ["nzAutocompleteTrigger"], { "nzAutocomplete": "nzAutocomplete"; }, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYXV0b2NvbXBsZXRlLXRyaWdnZXIuZGlyZWN0aXZlLmQudHMiLCJzb3VyY2VzIjpbIm56LWF1dG9jb21wbGV0ZS10cmlnZ2VyLmRpcmVjdGl2ZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7O0FBWUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0RBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcbmltcG9ydCB7IE92ZXJsYXkgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IEVsZW1lbnRSZWYsIEV4aXN0aW5nUHJvdmlkZXIsIE5nWm9uZSwgT25EZXN0cm95LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbnotYXV0b2NvbXBsZXRlLW9wdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOekF1dG9jb21wbGV0ZUNvbXBvbmVudCB9IGZyb20gJy4vbnotYXV0b2NvbXBsZXRlLmNvbXBvbmVudCc7XHJcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IE5aX0FVVE9DT01QTEVURV9WQUxVRV9BQ0NFU1NPUjogRXhpc3RpbmdQcm92aWRlcjtcclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gZ2V0TnpBdXRvY29tcGxldGVNaXNzaW5nUGFuZWxFcnJvcigpOiBFcnJvcjtcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTnpBdXRvY29tcGxldGVUcmlnZ2VyRGlyZWN0aXZlIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uRGVzdHJveSB7XHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY7XHJcbiAgICBwcml2YXRlIG92ZXJsYXk7XHJcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY7XHJcbiAgICBwcml2YXRlIG5nWm9uZTtcclxuICAgIHByaXZhdGUgZG9jdW1lbnQ7XHJcbiAgICAvKiogQmluZCBuekF1dG9jb21wbGV0ZSBjb21wb25lbnQgKi9cclxuICAgIG56QXV0b2NvbXBsZXRlOiBOekF1dG9jb21wbGV0ZUNvbXBvbmVudDtcclxuICAgIF9vbkNoYW5nZTogKHZhbHVlOiBhbnkpID0+IHZvaWQ7XHJcbiAgICBfb25Ub3VjaGVkOiAoKSA9PiB2b2lkO1xyXG4gICAgcGFuZWxPcGVuOiBib29sZWFuO1xyXG4gICAgLyoqIEN1cnJlbnQgYWN0aXZlIG9wdGlvbiAqL1xyXG4gICAgcmVhZG9ubHkgYWN0aXZlT3B0aW9uOiBOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudCB8IHVuZGVmaW5lZDtcclxuICAgIHByaXZhdGUgb3ZlcmxheVJlZjtcclxuICAgIHByaXZhdGUgcG9ydGFsO1xyXG4gICAgcHJpdmF0ZSBwb3NpdGlvblN0cmF0ZWd5O1xyXG4gICAgcHJpdmF0ZSBwcmV2aW91c1ZhbHVlO1xyXG4gICAgcHJpdmF0ZSBzZWxlY3Rpb25DaGFuZ2VTdWJzY3JpcHRpb247XHJcbiAgICBwcml2YXRlIG9wdGlvbnNDaGFuZ2VTdWJzY3JpcHRpb247XHJcbiAgICBwcml2YXRlIG92ZXJsYXlCYWNrZHJvcENsaWNrU3Vic2NyaXB0aW9uO1xyXG4gICAgcHJpdmF0ZSBvdmVybGF5UG9zaXRpb25DaGFuZ2VTdWJzY3JpcHRpb247XHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBvdmVybGF5OiBPdmVybGF5LCB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBuZ1pvbmU6IE5nWm9uZSwgZG9jdW1lbnQ6IGFueSk7XHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xyXG4gICAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZDtcclxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZToge30pID0+IHt9KTogdm9pZDtcclxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQ7XHJcbiAgICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkO1xyXG4gICAgb3BlblBhbmVsKCk6IHZvaWQ7XHJcbiAgICBjbG9zZVBhbmVsKCk6IHZvaWQ7XHJcbiAgICBoYW5kbGVLZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZDtcclxuICAgIGhhbmRsZUlucHV0KGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZDtcclxuICAgIGhhbmRsZUZvY3VzKCk6IHZvaWQ7XHJcbiAgICBoYW5kbGVCbHVyKCk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIFN1YnNjcmlwdGlvbiBkYXRhIHNvdXJjZSBjaGFuZ2VzIGV2ZW50XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3Vic2NyaWJlT3B0aW9uc0NoYW5nZTtcclxuICAgIC8qKlxyXG4gICAgICogU3Vic2NyaXB0aW9uIG9wdGlvbiBjaGFuZ2VzIGV2ZW50IGFuZCBzZXQgdGhlIHZhbHVlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3Vic2NyaWJlU2VsZWN0aW9uQ2hhbmdlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBTdWJzY3JpcHRpb24gZXh0ZXJuYWwgY2xpY2sgYW5kIGNsb3NlIHBhbmVsXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3Vic2NyaWJlT3ZlcmxheUJhY2tkcm9wQ2xpY2s7XHJcbiAgICAvKipcclxuICAgICAqIFN1YnNjcmlwdGlvbiBvdmVybGF5IHBvc2l0aW9uIGNoYW5nZXMgYW5kIHJlc2V0IGRyb3Bkb3duIHBvc2l0aW9uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3Vic2NyaWJlT3ZlcmxheVBvc2l0aW9uQ2hhbmdlO1xyXG4gICAgcHJpdmF0ZSBhdHRhY2hPdmVybGF5O1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVTdGF0dXM7XHJcbiAgICBwcml2YXRlIGRlc3Ryb3lQYW5lbDtcclxuICAgIHByaXZhdGUgZ2V0T3ZlcmxheUNvbmZpZztcclxuICAgIHByaXZhdGUgZ2V0Q29ubmVjdGVkRWxlbWVudDtcclxuICAgIHByaXZhdGUgZ2V0SG9zdFdpZHRoO1xyXG4gICAgcHJpdmF0ZSBnZXRPdmVybGF5UG9zaXRpb247XHJcbiAgICBwcml2YXRlIHJlc2V0QWN0aXZlSXRlbTtcclxuICAgIHByaXZhdGUgc2V0VmFsdWVBbmRDbG9zZTtcclxuICAgIHByaXZhdGUgc2V0VHJpZ2dlclZhbHVlO1xyXG4gICAgcHJpdmF0ZSBkb0JhY2tmaWxsO1xyXG4gICAgcHJpdmF0ZSBjYW5PcGVuO1xyXG59XHJcbiJdfQ==
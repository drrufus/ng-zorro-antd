/**
 * @fileoverview added by tsickle
 * Generated from: nz-autocomplete.component.ts
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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, Host, Input, NgZone, Optional, Output, QueryList, TemplateRef, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { defer, merge, Subscription } from 'rxjs';
import { filter, switchMap, take } from 'rxjs/operators';
import { slideMotion, InputBoolean, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { NzAutocompleteOptionComponent } from './nz-autocomplete-option.component';
/**
 * @record
 */
export function AutocompleteDataSourceItem() { }
if (false) {
    /** @type {?} */
    AutocompleteDataSourceItem.prototype.value;
    /** @type {?} */
    AutocompleteDataSourceItem.prototype.label;
}
var NzAutocompleteComponent = /** @class */ (function () {
    function NzAutocompleteComponent(changeDetectorRef, ngZone, noAnimation) {
        var _this = this;
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
        function (o1, o2) { return o1 === o2; });
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
        function () {
            if (_this.options) {
                return merge.apply(void 0, tslib_1.__spread(_this.options.map((/**
                 * @param {?} option
                 * @return {?}
                 */
                function (option) { return option.selectionChange; }))));
            }
            return _this.ngZone.onStable.asObservable().pipe(take(1), switchMap((/**
             * @return {?}
             */
            function () { return _this.optionSelectionChanges; })));
        }));
    }
    Object.defineProperty(NzAutocompleteComponent.prototype, "options", {
        /**
         * Options accessor, its source may be content or dataSource
         */
        get: /**
         * Options accessor, its source may be content or dataSource
         * @return {?}
         */
        function () {
            // first dataSource
            if (this.nzDataSource) {
                return this.fromDataSourceOptions;
            }
            else {
                return this.fromContentOptions;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzAutocompleteComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        if (!this.nzDataSource) {
            this.optionsInit();
        }
    };
    /**
     * @return {?}
     */
    NzAutocompleteComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.nzDataSource) {
            this.optionsInit();
        }
    };
    /**
     * @return {?}
     */
    NzAutocompleteComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.dataSourceChangeSubscription.unsubscribe();
        this.selectionChangeSubscription.unsubscribe();
    };
    /**
     * @return {?}
     */
    NzAutocompleteComponent.prototype.setVisibility = /**
     * @return {?}
     */
    function () {
        this.showPanel = !!this.options.length;
        this.changeDetectorRef.markForCheck();
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NzAutocompleteComponent.prototype.setActiveItem = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var activeItem = this.options.toArray()[index];
        if (activeItem && !activeItem.active) {
            this.activeItem = activeItem;
            this.activeItemIndex = index;
            this.clearSelectedOptions(this.activeItem);
            this.activeItem.setActiveStyles();
            this.changeDetectorRef.markForCheck();
        }
    };
    /**
     * @return {?}
     */
    NzAutocompleteComponent.prototype.setNextItemActive = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var nextIndex = this.activeItemIndex + 1 <= this.options.length - 1 ? this.activeItemIndex + 1 : 0;
        this.setActiveItem(nextIndex);
    };
    /**
     * @return {?}
     */
    NzAutocompleteComponent.prototype.setPreviousItemActive = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var previousIndex = this.activeItemIndex - 1 < 0 ? this.options.length - 1 : this.activeItemIndex - 1;
        this.setActiveItem(previousIndex);
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @return {?}
     */
    NzAutocompleteComponent.prototype.getOptionIndex = 
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        return (/** @type {?} */ (this.options.reduce((/**
         * @param {?} result
         * @param {?} current
         * @param {?} index
         * @return {?}
         */
        function (result, current, index) {
            return result === -1 ? (_this.compareWith(value, current.nzValue) ? index : -1) : result;
        }), -1)));
    };
    /**
     * @param {?} position
     * @return {?}
     */
    NzAutocompleteComponent.prototype.updatePosition = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        this.dropDownPosition = position;
        this.changeDetectorRef.markForCheck();
    };
    /**
     * @private
     * @return {?}
     */
    NzAutocompleteComponent.prototype.optionsInit = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.setVisibility();
        this.subscribeOptionChanges();
        /** @type {?} */
        var changes = this.nzDataSource ? this.fromDataSourceOptions.changes : this.fromContentOptions.changes;
        // async
        this.dataSourceChangeSubscription = changes.subscribe((/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            if (!e.dirty && _this.isOpen) {
                setTimeout((/**
                 * @return {?}
                 */
                function () { return _this.setVisibility(); }));
            }
            _this.subscribeOptionChanges();
        }));
    };
    /**
     * Clear the status of options
     */
    /**
     * Clear the status of options
     * @param {?=} skip
     * @param {?=} deselect
     * @return {?}
     */
    NzAutocompleteComponent.prototype.clearSelectedOptions = /**
     * Clear the status of options
     * @param {?=} skip
     * @param {?=} deselect
     * @return {?}
     */
    function (skip, deselect) {
        if (deselect === void 0) { deselect = false; }
        this.options.forEach((/**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            if (option !== skip) {
                if (deselect) {
                    option.deselect();
                }
                option.setInactiveStyles();
            }
        }));
    };
    /**
     * @private
     * @return {?}
     */
    NzAutocompleteComponent.prototype.subscribeOptionChanges = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.selectionChangeSubscription.unsubscribe();
        this.selectionChangeSubscription = this.optionSelectionChanges
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.isUserInput; })))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            event.source.select();
            event.source.setActiveStyles();
            _this.activeItem = event.source;
            _this.activeItemIndex = _this.getOptionIndex(_this.activeItem.nzValue);
            _this.clearSelectedOptions(event.source, true);
            _this.selectionChange.emit(event.source);
        }));
    };
    NzAutocompleteComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-autocomplete',
                    exportAs: 'nzAutocomplete',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: "<ng-template>\r\n  <div class=\"ant-select-dropdown ant-select-dropdown--single ant-select-dropdown-placement-bottomLeft\"\r\n    #panel\r\n    [@.disabled]=\"noAnimation?.nzNoAnimation\"\r\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n    [@slideMotion]=\"dropDownPosition\"\r\n    [class.ant-select-dropdown-hidden]=\"!showPanel\"\r\n    [ngClass]=\"nzOverlayClassName\"\r\n    [ngStyle]=\"nzOverlayStyle\">\r\n    <div style=\"overflow: auto;\">\r\n      <ul class=\"ant-select-dropdown-menu  ant-select-dropdown-menu-root ant-select-dropdown-menu-vertical\"\r\n        role=\"menu\"\r\n        aria-activedescendant>\r\n        <ng-template *ngTemplateOutlet=\"nzDataSource ? optionsTemplate : contentTemplate\"></ng-template>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <ng-template #contentTemplate>\r\n    <ng-content></ng-content>\r\n  </ng-template>\r\n  <ng-template #optionsTemplate>\r\n    <nz-auto-option *ngFor=\"let option of nzDataSource\" [nzValue]=\"option\">{{option}}</nz-auto-option>\r\n  </ng-template>\r\n</ng-template>",
                    animations: [slideMotion],
                    styles: ["\n      .ant-select-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzAutocompleteComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NgZone },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
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
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzAutocompleteComponent.prototype, "nzDefaultActiveFirstOption", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzAutocompleteComponent.prototype, "nzBackfill", void 0);
    return NzAutocompleteComponent;
}());
export { NzAutocompleteComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvYXV0by1jb21wbGV0ZS8iLCJzb3VyY2VzIjpbIm56LWF1dG9jb21wbGV0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFHTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsVUFBVSxFQUNWLFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxFQUNMLE1BQU0sRUFFTixRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFDVCxXQUFXLEVBQ1gsU0FBUyxFQUNULFlBQVksRUFDWixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQWMsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlELE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpELE9BQU8sRUFBRSxXQUFXLEVBQWUsWUFBWSxFQUFzQixzQkFBc0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXhILE9BQU8sRUFBRSw2QkFBNkIsRUFBMkIsTUFBTSxvQ0FBb0MsQ0FBQzs7OztBQUU1RyxnREFHQzs7O0lBRkMsMkNBQWM7O0lBQ2QsMkNBQWM7O0FBS2hCO0lBNEVFLGlDQUNVLGlCQUFvQyxFQUNwQyxNQUFjLEVBQ0ssV0FBb0M7UUFIakUsaUJBSUk7UUFITSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDSyxnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUF4RHhELHVCQUFrQixHQUFHLEVBQUUsQ0FBQztRQUN4QixtQkFBYyxHQUE4QixFQUFFLENBQUM7UUFDL0IsK0JBQTBCLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLGVBQVUsR0FBRyxL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QUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7d0JBQ3hDLFNBQVMsU0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzBCQUNwQyxTQUFTLFNBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7SUFuQ2Q7UUFBZixZQUFZLEVBQUU7OytFQUFtQztJQUNsQztRQUFmLFlBQVksRUFBRTs7K0RBQW9CO0lBdUo5Qyw4QkFBQztDQUFBLEFBakxELElBaUxDO1NBNUpZLHVCQUF1Qjs7O0lBQ2xDLDBDQUF5Qjs7SUFDekIscURBQWlDOztJQUNqQyxpREFBd0Q7O0lBQ3hELDZEQUEyRDs7SUFDM0QsNkNBQTRDOztJQUM1Qyw4Q0FBMEQ7O0lBQzFELCtDQUE4Qzs7SUFDOUMsa0RBRUk7O0lBRUosNENBQTBCOztJQUMxQix5Q0FBd0I7O0lBQ3hCLDZDQUEwQzs7SUFDMUMsbURBQWdEOzs7OztJQWVoRCxxREFFRTs7Ozs7SUFFRix3REFBNkc7Ozs7O0lBRzdHLDJDQUFxRTs7SUFDckUsd0NBQXlEOztJQUN6RCwwQ0FBNkQ7Ozs7O0lBRTdELGtEQUFxQzs7Ozs7SUFDckMsOERBQXlEOzs7OztJQUN6RCwrREFBMEQ7Ozs7O0lBRTFELHlEQVFHOzs7OztJQUdELG9EQUE0Qzs7Ozs7SUFDNUMseUNBQXNCOztJQUN0Qiw4Q0FBK0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdCxcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBRdWVyeUxpc3QsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdDaGlsZHJlbixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBkZWZlciwgbWVyZ2UsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIHN3aXRjaE1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IHNsaWRlTW90aW9uLCBDb21wYXJlV2l0aCwgSW5wdXRCb29sZWFuLCBOekRyb3BEb3duUG9zaXRpb24sIE56Tm9BbmltYXRpb25EaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQsIE56T3B0aW9uU2VsZWN0aW9uQ2hhbmdlIH0gZnJvbSAnLi9uei1hdXRvY29tcGxldGUtb3B0aW9uLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEF1dG9jb21wbGV0ZURhdGFTb3VyY2VJdGVtIHtcclxuICB2YWx1ZTogc3RyaW5nO1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEF1dG9jb21wbGV0ZURhdGFTb3VyY2UgPSBBdXRvY29tcGxldGVEYXRhU291cmNlSXRlbVtdIHwgc3RyaW5nW10gfCBudW1iZXJbXTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotYXV0b2NvbXBsZXRlJyxcclxuICBleHBvcnRBczogJ256QXV0b2NvbXBsZXRlJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1hdXRvY29tcGxldGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGFuaW1hdGlvbnM6IFtzbGlkZU1vdGlvbl0sXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIC5hbnQtc2VsZWN0LWRyb3Bkb3duIHtcclxuICAgICAgICB0b3A6IDEwMCU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56QXV0b2NvbXBsZXRlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBueldpZHRoOiBudW1iZXI7XHJcbiAgQElucHV0KCkgbnpPdmVybGF5Q2xhc3NOYW1lID0gJyc7XHJcbiAgQElucHV0KCkgbnpPdmVybGF5U3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEZWZhdWx0QWN0aXZlRmlyc3RPcHRpb24gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekJhY2tmaWxsID0gZmFsc2U7XHJcbiAgQElucHV0KCkgY29tcGFyZVdpdGg6IENvbXBhcmVXaXRoID0gKG8xLCBvMikgPT4gbzEgPT09IG8yO1xyXG4gIEBJbnB1dCgpIG56RGF0YVNvdXJjZTogQXV0b2NvbXBsZXRlRGF0YVNvdXJjZTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2VsZWN0aW9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxcclxuICAgIE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50XHJcbiAgPigpO1xyXG5cclxuICBzaG93UGFuZWw6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIGlzT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGFjdGl2ZUl0ZW06IE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50O1xyXG4gIGRyb3BEb3duUG9zaXRpb246IE56RHJvcERvd25Qb3NpdGlvbiA9ICdib3R0b20nO1xyXG5cclxuICAvKipcclxuICAgKiBPcHRpb25zIGFjY2Vzc29yLCBpdHMgc291cmNlIG1heSBiZSBjb250ZW50IG9yIGRhdGFTb3VyY2VcclxuICAgKi9cclxuICBnZXQgb3B0aW9ucygpOiBRdWVyeUxpc3Q8TnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQ+IHtcclxuICAgIC8vIGZpcnN0IGRhdGFTb3VyY2VcclxuICAgIGlmICh0aGlzLm56RGF0YVNvdXJjZSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5mcm9tRGF0YVNvdXJjZU9wdGlvbnM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy5mcm9tQ29udGVudE9wdGlvbnM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogUHJvdmlkZWQgYnkgY29udGVudCAqL1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oTnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQsIHsgZGVzY2VuZGFudHM6IHRydWUgfSkgZnJvbUNvbnRlbnRPcHRpb25zOiBRdWVyeUxpc3Q8XHJcbiAgICBOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudFxyXG4gID47XHJcbiAgLyoqIFByb3ZpZGVkIGJ5IGRhdGFTb3VyY2UgKi9cclxuICBAVmlld0NoaWxkcmVuKE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50KSBmcm9tRGF0YVNvdXJjZU9wdGlvbnM6IFF1ZXJ5TGlzdDxOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudD47XHJcblxyXG4gIC8qKiBjZGstb3ZlcmxheSAqL1xyXG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYsIHsgc3RhdGljOiBmYWxzZSB9KSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8e30+O1xyXG4gIEBWaWV3Q2hpbGQoJ3BhbmVsJywgeyBzdGF0aWM6IGZhbHNlIH0pIHBhbmVsOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnQnLCB7IHN0YXRpYzogZmFsc2UgfSkgY29udGVudDogRWxlbWVudFJlZjtcclxuXHJcbiAgcHJpdmF0ZSBhY3RpdmVJdGVtSW5kZXg6IG51bWJlciA9IC0xO1xyXG4gIHByaXZhdGUgc2VsZWN0aW9uQ2hhbmdlU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xyXG4gIHByaXZhdGUgZGF0YVNvdXJjZUNoYW5nZVN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcclxuICAvKiogT3B0aW9ucyBjaGFuZ2VzIGxpc3RlbmVyICovXHJcbiAgcmVhZG9ubHkgb3B0aW9uU2VsZWN0aW9uQ2hhbmdlczogT2JzZXJ2YWJsZTxOek9wdGlvblNlbGVjdGlvbkNoYW5nZT4gPSBkZWZlcigoKSA9PiB7XHJcbiAgICBpZiAodGhpcy5vcHRpb25zKSB7XHJcbiAgICAgIHJldHVybiBtZXJnZTxOek9wdGlvblNlbGVjdGlvbkNoYW5nZT4oLi4udGhpcy5vcHRpb25zLm1hcChvcHRpb24gPT4gb3B0aW9uLnNlbGVjdGlvbkNoYW5nZSkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMubmdab25lLm9uU3RhYmxlLmFzT2JzZXJ2YWJsZSgpLnBpcGUoXHJcbiAgICAgIHRha2UoMSksXHJcbiAgICAgIHN3aXRjaE1hcCgoKSA9PiB0aGlzLm9wdGlvblNlbGVjdGlvbkNoYW5nZXMpXHJcbiAgICApO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcclxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxyXG4gICkge31cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLm56RGF0YVNvdXJjZSkge1xyXG4gICAgICB0aGlzLm9wdGlvbnNJbml0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uekRhdGFTb3VyY2UpIHtcclxuICAgICAgdGhpcy5vcHRpb25zSW5pdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRhdGFTb3VyY2VDaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBzZXRWaXNpYmlsaXR5KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zaG93UGFuZWwgPSAhIXRoaXMub3B0aW9ucy5sZW5ndGg7XHJcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgc2V0QWN0aXZlSXRlbShpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBjb25zdCBhY3RpdmVJdGVtID0gdGhpcy5vcHRpb25zLnRvQXJyYXkoKVtpbmRleF07XHJcbiAgICBpZiAoYWN0aXZlSXRlbSAmJiAhYWN0aXZlSXRlbS5hY3RpdmUpIHtcclxuICAgICAgdGhpcy5hY3RpdmVJdGVtID0gYWN0aXZlSXRlbTtcclxuICAgICAgdGhpcy5hY3RpdmVJdGVtSW5kZXggPSBpbmRleDtcclxuICAgICAgdGhpcy5jbGVhclNlbGVjdGVkT3B0aW9ucyh0aGlzLmFjdGl2ZUl0ZW0pO1xyXG4gICAgICB0aGlzLmFjdGl2ZUl0ZW0uc2V0QWN0aXZlU3R5bGVzKCk7XHJcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXROZXh0SXRlbUFjdGl2ZSgpOiB2b2lkIHtcclxuICAgIGNvbnN0IG5leHRJbmRleCA9IHRoaXMuYWN0aXZlSXRlbUluZGV4ICsgMSA8PSB0aGlzLm9wdGlvbnMubGVuZ3RoIC0gMSA/IHRoaXMuYWN0aXZlSXRlbUluZGV4ICsgMSA6IDA7XHJcbiAgICB0aGlzLnNldEFjdGl2ZUl0ZW0obmV4dEluZGV4KTtcclxuICB9XHJcblxyXG4gIHNldFByZXZpb3VzSXRlbUFjdGl2ZSgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHByZXZpb3VzSW5kZXggPSB0aGlzLmFjdGl2ZUl0ZW1JbmRleCAtIDEgPCAwID8gdGhpcy5vcHRpb25zLmxlbmd0aCAtIDEgOiB0aGlzLmFjdGl2ZUl0ZW1JbmRleCAtIDE7XHJcbiAgICB0aGlzLnNldEFjdGl2ZUl0ZW0ocHJldmlvdXNJbmRleCk7XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgZ2V0T3B0aW9uSW5kZXgodmFsdWU6IGFueSk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnJlZHVjZSgocmVzdWx0OiBudW1iZXIsIGN1cnJlbnQ6IE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXN1bHQgPT09IC0xID8gKHRoaXMuY29tcGFyZVdpdGgodmFsdWUsIGN1cnJlbnQubnpWYWx1ZSkgPyBpbmRleCA6IC0xKSA6IHJlc3VsdDtcclxuICAgIH0sIC0xKSE7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVQb3NpdGlvbihwb3NpdGlvbjogTnpEcm9wRG93blBvc2l0aW9uKTogdm9pZCB7XHJcbiAgICB0aGlzLmRyb3BEb3duUG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9wdGlvbnNJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRWaXNpYmlsaXR5KCk7XHJcbiAgICB0aGlzLnN1YnNjcmliZU9wdGlvbkNoYW5nZXMoKTtcclxuICAgIGNvbnN0IGNoYW5nZXMgPSB0aGlzLm56RGF0YVNvdXJjZSA/IHRoaXMuZnJvbURhdGFTb3VyY2VPcHRpb25zLmNoYW5nZXMgOiB0aGlzLmZyb21Db250ZW50T3B0aW9ucy5jaGFuZ2VzO1xyXG4gICAgLy8gYXN5bmNcclxuICAgIHRoaXMuZGF0YVNvdXJjZUNoYW5nZVN1YnNjcmlwdGlvbiA9IGNoYW5nZXMuc3Vic2NyaWJlKGUgPT4ge1xyXG4gICAgICBpZiAoIWUuZGlydHkgJiYgdGhpcy5pc09wZW4pIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2V0VmlzaWJpbGl0eSgpKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnN1YnNjcmliZU9wdGlvbkNoYW5nZXMoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2xlYXIgdGhlIHN0YXR1cyBvZiBvcHRpb25zXHJcbiAgICovXHJcbiAgY2xlYXJTZWxlY3RlZE9wdGlvbnMoc2tpcD86IE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50IHwgbnVsbCwgZGVzZWxlY3Q6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgdGhpcy5vcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgaWYgKG9wdGlvbiAhPT0gc2tpcCkge1xyXG4gICAgICAgIGlmIChkZXNlbGVjdCkge1xyXG4gICAgICAgICAgb3B0aW9uLmRlc2VsZWN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9wdGlvbi5zZXRJbmFjdGl2ZVN0eWxlcygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3Vic2NyaWJlT3B0aW9uQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZVN1YnNjcmlwdGlvbiA9IHRoaXMub3B0aW9uU2VsZWN0aW9uQ2hhbmdlc1xyXG4gICAgICAucGlwZShmaWx0ZXIoKGV2ZW50OiBOek9wdGlvblNlbGVjdGlvbkNoYW5nZSkgPT4gZXZlbnQuaXNVc2VySW5wdXQpKVxyXG4gICAgICAuc3Vic2NyaWJlKChldmVudDogTnpPcHRpb25TZWxlY3Rpb25DaGFuZ2UpID0+IHtcclxuICAgICAgICBldmVudC5zb3VyY2Uuc2VsZWN0KCk7XHJcbiAgICAgICAgZXZlbnQuc291cmNlLnNldEFjdGl2ZVN0eWxlcygpO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IGV2ZW50LnNvdXJjZTtcclxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW1JbmRleCA9IHRoaXMuZ2V0T3B0aW9uSW5kZXgodGhpcy5hY3RpdmVJdGVtLm56VmFsdWUpO1xyXG4gICAgICAgIHRoaXMuY2xlYXJTZWxlY3RlZE9wdGlvbnMoZXZlbnQuc291cmNlLCB0cnVlKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KGV2ZW50LnNvdXJjZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=
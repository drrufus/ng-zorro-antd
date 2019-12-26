/**
 * @fileoverview added by tsickle
 * Generated from: nz-select-top-control.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Host, Input, Optional, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { zoomMotion, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { NzSelectService } from './nz-select.service';
var NzSelectTopControlComponent = /** @class */ (function () {
    function NzSelectTopControlComponent(renderer, nzSelectService, cdr, noAnimation) {
        this.renderer = renderer;
        this.nzSelectService = nzSelectService;
        this.cdr = cdr;
        this.noAnimation = noAnimation;
        this.isComposing = false;
        this.destroy$ = new Subject();
        this.nzShowSearch = false;
        this.nzOpen = false;
        this.nzAllowClear = false;
        this.nzShowArrow = true;
        this.nzLoading = false;
        this.nzTokenSeparators = [];
    }
    /**
     * @param {?} e
     * @return {?}
     */
    NzSelectTopControlComponent.prototype.onClearSelection = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.stopPropagation();
        this.nzSelectService.updateListOfSelectedValue([], true);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzSelectTopControlComponent.prototype.setInputValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** fix clear value https://github.com/NG-ZORRO/ng-zorro-antd/issues/3825 **/
        if (this.inputDOM && !value) {
            this.inputDOM.value = value;
        }
        this.inputValue = value;
        this.updateWidth();
        this.nzSelectService.updateSearchValue(value);
        this.nzSelectService.tokenSeparate(this.inputValue, this.nzTokenSeparators);
    };
    Object.defineProperty(NzSelectTopControlComponent.prototype, "mirrorDOM", {
        get: /**
         * @return {?}
         */
        function () {
            return this.mirrorElement && this.mirrorElement.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectTopControlComponent.prototype, "inputDOM", {
        get: /**
         * @return {?}
         */
        function () {
            return this.inputElement && this.inputElement.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectTopControlComponent.prototype, "placeHolderDisplay", {
        get: /**
         * @return {?}
         */
        function () {
            return this.inputValue || this.isComposing || this.nzSelectService.listOfSelectedValue.length ? 'none' : 'block';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectTopControlComponent.prototype, "selectedValueStyle", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var showSelectedValue = false;
            /** @type {?} */
            var opacity = 1;
            if (!this.nzShowSearch) {
                showSelectedValue = true;
            }
            else {
                if (this.nzOpen) {
                    showSelectedValue = !(this.inputValue || this.isComposing);
                    if (showSelectedValue) {
                        opacity = 0.4;
                    }
                }
                else {
                    showSelectedValue = true;
                }
            }
            return {
                display: showSelectedValue ? 'block' : 'none',
                opacity: "" + opacity
            };
        },
        enumerable: true,
        configurable: true
    });
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} _index
     * @param {?} option
     * @return {?}
     */
    NzSelectTopControlComponent.prototype.trackValue = 
    // tslint:disable-next-line:no-any
    /**
     * @param {?} _index
     * @param {?} option
     * @return {?}
     */
    function (_index, option) {
        return option.nzValue;
    };
    /**
     * @return {?}
     */
    NzSelectTopControlComponent.prototype.updateWidth = /**
     * @return {?}
     */
    function () {
        if (this.mirrorDOM && this.inputDOM && this.inputDOM.value) {
            this.mirrorDOM.innerText = this.inputDOM.value + "&nbsp;";
            this.renderer.removeStyle(this.inputDOM, 'width');
            this.renderer.setStyle(this.inputDOM, 'width', this.mirrorDOM.clientWidth + "px");
        }
        else if (this.inputDOM) {
            this.renderer.removeStyle(this.inputDOM, 'width');
            this.mirrorDOM.innerText = '';
        }
    };
    /**
     * @param {?} option
     * @param {?} e
     * @return {?}
     */
    NzSelectTopControlComponent.prototype.removeSelectedValue = /**
     * @param {?} option
     * @param {?} e
     * @return {?}
     */
    function (option, e) {
        this.nzSelectService.removeValueFormSelected(option);
        e.stopPropagation();
    };
    /**
     * @return {?}
     */
    NzSelectTopControlComponent.prototype.animationEnd = /**
     * @return {?}
     */
    function () {
        this.nzSelectService.animationEvent$.next();
    };
    /**
     * @return {?}
     */
    NzSelectTopControlComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.nzSelectService.open$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} open
         * @return {?}
         */
        function (open) {
            if (_this.inputElement && open) {
                setTimeout((/**
                 * @return {?}
                 */
                function () { return _this.inputDOM.focus(); }));
            }
        }));
        this.nzSelectService.clearInput$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.setInputValue('');
        }));
        this.nzSelectService.check$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @return {?}
     */
    NzSelectTopControlComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzSelectTopControlComponent.decorators = [
        { type: Component, args: [{
                    selector: '[nz-select-top-control]',
                    exportAs: 'nzSelectTopControl',
                    preserveWhitespaces: false,
                    animations: [zoomMotion],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: "<ng-template #inputTemplate>\r\n  <input #inputElement\r\n    autocomplete=\"something-new\"\r\n    class=\"ant-select-search__field\"\r\n    (compositionstart)=\"isComposing = true\"\r\n    (compositionend)=\"isComposing = false\"\r\n    [ngModel]=\"inputValue\"\r\n    (ngModelChange)=\"setInputValue($event)\"\r\n    [disabled]=\"nzSelectService.disabled\">\r\n  <span #mirrorElement class=\"ant-select-search__field__mirror\"></span>\r\n</ng-template>\r\n<div class=\"ant-select-selection__rendered\">\r\n  <div *ngIf=\"nzPlaceHolder\"\r\n    nz-select-unselectable\r\n    [style.display]=\"placeHolderDisplay\"\r\n    class=\"ant-select-selection__placeholder\">{{ nzPlaceHolder }}</div>\r\n  <!--single mode-->\r\n  <ng-container *ngIf=\"nzSelectService.isSingleMode\">\r\n    <!--selected label-->\r\n    <div *ngIf=\"nzSelectService.listOfCachedSelectedOption.length && nzSelectService.listOfSelectedValue.length\"\r\n      class=\"ant-select-selection-selected-value\"\r\n      [attr.title]=\"nzSelectService.listOfCachedSelectedOption[0]?.nzLabel\"\r\n      [ngStyle]=\"selectedValueStyle\">\r\n      <ng-container *nzStringTemplateOutlet=\"nzCustomTemplate; context: { $implicit: nzSelectService.listOfCachedSelectedOption[0] }\">\r\n        <ng-container>{{ nzSelectService.listOfCachedSelectedOption[0]?.nzLabel }}</ng-container>\r\n      </ng-container>\r\n    </div>\r\n    <!--show search-->\r\n    <div *ngIf=\"nzShowSearch\"\r\n      class=\"ant-select-search ant-select-search--inline\" [style.display]=\"nzOpen ? 'block' : 'none'\">\r\n      <div class=\"ant-select-search__field__wrap\">\r\n        <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n  <!--multiple or tags mode-->\r\n  <ul *ngIf=\"nzSelectService.isMultipleOrTags\">\r\n    <ng-container *ngFor=\"let option of nzSelectService.listOfCachedSelectedOption | slice: 0 : nzMaxTagCount;trackBy:trackValue; let index = index\">\r\n      <li [@zoomMotion]\r\n        [@.disabled]=\"noAnimation?.nzNoAnimation\"\r\n        [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n        [attr.title]=\"option.nzLabel\"\r\n        [class.ant-select-selection__choice__disabled]=\"option.nzDisabled\"\r\n        (@zoomMotion.done)=\"animationEnd()\"\r\n        class=\"ant-select-selection__choice\">\r\n        <ng-container *nzStringTemplateOutlet=\"nzCustomTemplate; context:{ $implicit: nzSelectService.listOfCachedSelectedOption[index] }\">\r\n          <div class=\"ant-select-selection__choice__content\">{{ option.nzLabel }}</div>\r\n        </ng-container>\r\n        <span *ngIf=\"!option.nzDisabled\"\r\n          class=\"ant-select-selection__choice__remove\"\r\n          (mousedown)=\"$event.preventDefault()\"\r\n          (click)=\"removeSelectedValue(option, $event)\">\r\n          <i nz-icon nzType=\"close\" class=\"ant-select-remove-icon\" *ngIf=\"!nzRemoveIcon; else nzRemoveIcon\"></i>\r\n        </span>\r\n      </li>\r\n    </ng-container>\r\n    <li *ngIf=\"nzSelectService.listOfCachedSelectedOption.length > nzMaxTagCount\"\r\n      [@zoomMotion]\r\n      [@.disabled]=\"noAnimation?.nzNoAnimation\"\r\n      [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n      (@zoomMotion.done)=\"animationEnd()\"\r\n      class=\"ant-select-selection__choice\">\r\n      <div class=\"ant-select-selection__choice__content\">\r\n        <ng-container *ngIf=\"nzMaxTagPlaceholder\">\r\n          <ng-template\r\n            [ngTemplateOutlet]=\"nzMaxTagPlaceholder\"\r\n            [ngTemplateOutletContext]=\"{ $implicit: nzSelectService.listOfSelectedValue | slice: nzMaxTagCount}\">\r\n          </ng-template>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"!nzMaxTagPlaceholder\">\r\n          + {{ nzSelectService.listOfCachedSelectedOption.length - nzMaxTagCount }} ...\r\n        </ng-container>\r\n      </div>\r\n    </li>\r\n    <li class=\"ant-select-search ant-select-search--inline\">\r\n      <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\r\n    </li>\r\n  </ul>\r\n</div>\r\n<span *ngIf=\"nzAllowClear && nzSelectService.listOfSelectedValue.length\"\r\n  class=\"ant-select-selection__clear\"\r\n  nz-select-unselectable\r\n  (mousedown)=\"$event.preventDefault()\"\r\n  (click)=\"onClearSelection($event)\">\r\n    <i nz-icon nzType=\"close-circle\" nzTheme=\"fill\" *ngIf=\"!nzClearIcon; else nzClearIcon\" class=\"ant-select-close-icon\"></i>\r\n  </span>\r\n<span class=\"ant-select-arrow\" nz-select-unselectable *ngIf=\"nzShowArrow\">\r\n  <i nz-icon nzType=\"loading\" *ngIf=\"nzLoading; else defaultArrow\"></i>\r\n  <ng-template #defaultArrow>\r\n    <i nz-icon nzType=\"down\" class=\"ant-select-arrow-icon\" *ngIf=\"!nzSuffixIcon; else nzSuffixIcon\"></i>\r\n  </ng-template>\r\n</span>"
                }] }
    ];
    /** @nocollapse */
    NzSelectTopControlComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: NzSelectService },
        { type: ChangeDetectorRef },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    NzSelectTopControlComponent.propDecorators = {
        inputElement: [{ type: ViewChild, args: ['inputElement', { static: false },] }],
        mirrorElement: [{ type: ViewChild, args: ['mirrorElement', { static: false },] }],
        nzShowSearch: [{ type: Input }],
        nzPlaceHolder: [{ type: Input }],
        nzOpen: [{ type: Input }],
        nzMaxTagCount: [{ type: Input }],
        nzAllowClear: [{ type: Input }],
        nzShowArrow: [{ type: Input }],
        nzLoading: [{ type: Input }],
        nzCustomTemplate: [{ type: Input }],
        nzSuffixIcon: [{ type: Input }],
        nzClearIcon: [{ type: Input }],
        nzRemoveIcon: [{ type: Input }],
        nzMaxTagPlaceholder: [{ type: Input }],
        nzTokenSeparators: [{ type: Input }]
    };
    return NzSelectTopControlComponent;
}());
export { NzSelectTopControlComponent };
if (false) {
    /** @type {?} */
    NzSelectTopControlComponent.prototype.inputValue;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.isComposing;
    /**
     * @type {?}
     * @private
     */
    NzSelectTopControlComponent.prototype.destroy$;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.inputElement;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.mirrorElement;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.nzShowSearch;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.nzPlaceHolder;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.nzOpen;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.nzMaxTagCount;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.nzAllowClear;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.nzShowArrow;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.nzLoading;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.nzCustomTemplate;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.nzSuffixIcon;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.nzClearIcon;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.nzRemoveIcon;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.nzMaxTagPlaceholder;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.nzTokenSeparators;
    /**
     * @type {?}
     * @private
     */
    NzSelectTopControlComponent.prototype.renderer;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.nzSelectService;
    /**
     * @type {?}
     * @private
     */
    NzSelectTopControlComponent.prototype.cdr;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvc2VsZWN0LyIsInNvdXJjZXMiOlsibnotc2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLElBQUksRUFDSixLQUFLLEVBR0wsUUFBUSxFQUNSLFNBQVMsRUFDVCxXQUFXLEVBQ1gsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHeEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXREO0lBd0dFLHFDQUNVLFFBQW1CLEVBQ3BCLGVBQWdDLEVBQy9CLEdBQXNCLEVBQ0gsV0FBb0M7UUFIdkQsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNwQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDL0IsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDSCxnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUFqR2pFLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ1osYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFHeEIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFFckIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUVmLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFPbEIsc0JBQWlCLEdBQWEsRUFBRSxDQUFDO0lBaUZ2QyxDQUFDOzs7OztJQS9FSixzREFBZ0I7Ozs7SUFBaEIsVUFBaUIsQ0FBYTtRQUM1QixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyx5QkFBeUIsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Ozs7SUFFRCxtREFBYTs7OztJQUFiLFVBQWMsS0FBYTtRQUN6Qiw2RUFBNkU7UUFDN0UsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztTQUM3QjtRQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVELHNCQUFJLGtEQUFTOzs7O1FBQWI7WUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUM7UUFDaEUsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxpREFBUTs7OztRQUFaO1lBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDO1FBQzlELENBQUM7OztPQUFBO0lBRUQsc0JBQUksMkRBQWtCOzs7O1FBQXRCO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQ25ILENBQUM7OztPQUFBO0lBRUQsc0JBQUksMkRBQWtCOzs7O1FBQXRCOztnQkFDTSxpQkFBaUIsR0FBRyxLQUFLOztnQkFDekIsT0FBTyxHQUFHLENBQUM7WUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDdEIsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO2FBQzFCO2lCQUFNO2dCQUNMLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtvQkFDZixpQkFBaUIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQzNELElBQUksaUJBQWlCLEVBQUU7d0JBQ3JCLE9BQU8sR0FBRyxHQUFHLENBQUM7cUJBQ2Y7aUJBQ0Y7cUJBQU07b0JBQ0wsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO2lCQUMxQjthQUNGO1lBQ0QsT0FBTztnQkFDTCxPQUFPLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTTtnQkFDN0MsT0FBTyxFQUFFLEtBQUcsT0FBUzthQUN0QixDQUFDO1FBQ0osQ0FBQzs7O09BQUE7SUFFRCxrQ0FBa0M7Ozs7Ozs7SUFDbEMsZ0RBQVU7Ozs7Ozs7SUFBVixVQUFXLE1BQWMsRUFBRSxNQUF5QjtRQUNsRCxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELGlEQUFXOzs7SUFBWDtRQUNFLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFO1lBQzFELElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxXQUFRLENBQUM7WUFDMUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUNsRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBSyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsT0FBSSxDQUFDLENBQUM7U0FDbkY7YUFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUNsRCxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7U0FDL0I7SUFDSCxDQUFDOzs7Ozs7SUFFRCx5REFBbUI7Ozs7O0lBQW5CLFVBQW9CLE1BQXlCLEVBQUUsQ0FBYTtRQUMxRCxJQUFJLENBQUMsZUFBZSxDQUFDLHVCQUF1QixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JELENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsa0RBQVk7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDOUMsQ0FBQzs7OztJQVNELDhDQUFROzs7SUFBUjtRQUFBLGlCQVlDO1FBWEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxJQUFJO1lBQ3RFLElBQUksS0FBSSxDQUFDLFlBQVksSUFBSSxJQUFJLEVBQUU7Z0JBQzdCLFVBQVU7OztnQkFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBckIsQ0FBcUIsRUFBQyxDQUFDO2FBQ3pDO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVM7OztRQUFDO1lBQ3hFLEtBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDekIsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVM7OztRQUFDO1lBQ25FLEtBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsaURBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7O2dCQWhJRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsVUFBVSxFQUFFLENBQUMsVUFBVSxDQUFDO29CQUN4QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLDZzSkFBcUQ7aUJBQ3REOzs7O2dCQXJCQyxTQUFTO2dCQVdGLGVBQWU7Z0JBbkJ0QixpQkFBaUI7Z0JBZ0JFLHNCQUFzQix1QkFpSHRDLElBQUksWUFBSSxRQUFROzs7K0JBL0ZsQixTQUFTLFNBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtnQ0FDM0MsU0FBUyxTQUFDLGVBQWUsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7K0JBQzVDLEtBQUs7Z0NBQ0wsS0FBSzt5QkFDTCxLQUFLO2dDQUNMLEtBQUs7K0JBQ0wsS0FBSzs4QkFDTCxLQUFLOzRCQUNMLEtBQUs7bUNBQ0wsS0FBSzsrQkFDTCxLQUFLOzhCQUNMLEtBQUs7K0JBQ0wsS0FBSztzQ0FFTCxLQUFLO29DQUNMLEtBQUs7O0lBcUdSLGtDQUFDO0NBQUEsQUFqSUQsSUFpSUM7U0F4SFksMkJBQTJCOzs7SUFDdEMsaURBQW1COztJQUNuQixrREFBb0I7Ozs7O0lBQ3BCLCtDQUFpQzs7SUFDakMsbURBQXVFOztJQUN2RSxvREFBeUU7O0lBQ3pFLG1EQUE4Qjs7SUFDOUIsb0RBQStCOztJQUMvQiw2Q0FBd0I7O0lBQ3hCLG9EQUErQjs7SUFDL0IsbURBQThCOztJQUM5QixrREFBNEI7O0lBQzVCLGdEQUEyQjs7SUFDM0IsdURBQXlFOztJQUN6RSxtREFBeUM7O0lBQ3pDLGtEQUF3Qzs7SUFDeEMsbURBQXlDOztJQUV6QywwREFBZ0U7O0lBQ2hFLHdEQUEwQzs7Ozs7SUE2RXhDLCtDQUEyQjs7SUFDM0Isc0RBQXVDOzs7OztJQUN2QywwQ0FBOEI7O0lBQzlCLGtEQUErRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBIb3N0LFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IHpvb21Nb3Rpb24sIE56Tm9BbmltYXRpb25EaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpPcHRpb25Db21wb25lbnQgfSBmcm9tICcuL256LW9wdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOelNlbGVjdFNlcnZpY2UgfSBmcm9tICcuL256LXNlbGVjdC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnW256LXNlbGVjdC10b3AtY29udHJvbF0nLFxyXG4gIGV4cG9ydEFzOiAnbnpTZWxlY3RUb3BDb250cm9sJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBhbmltYXRpb25zOiBbem9vbU1vdGlvbl0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotc2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIGlucHV0VmFsdWU6IHN0cmluZztcclxuICBpc0NvbXBvc2luZyA9IGZhbHNlO1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xyXG4gIEBWaWV3Q2hpbGQoJ2lucHV0RWxlbWVudCcsIHsgc3RhdGljOiBmYWxzZSB9KSBpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnbWlycm9yRWxlbWVudCcsIHsgc3RhdGljOiBmYWxzZSB9KSBtaXJyb3JFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIEBJbnB1dCgpIG56U2hvd1NlYXJjaCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56UGxhY2VIb2xkZXI6IHN0cmluZztcclxuICBASW5wdXQoKSBuek9wZW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBuek1heFRhZ0NvdW50OiBudW1iZXI7XHJcbiAgQElucHV0KCkgbnpBbGxvd0NsZWFyID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpTaG93QXJyb3cgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIG56TG9hZGluZyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56Q3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOek9wdGlvbkNvbXBvbmVudCB9PjtcclxuICBASW5wdXQoKSBuelN1ZmZpeEljb246IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56Q2xlYXJJY29uOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuelJlbW92ZUljb246IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBASW5wdXQoKSBuek1heFRhZ1BsYWNlaG9sZGVyOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogYW55W10gfT47XHJcbiAgQElucHV0KCkgbnpUb2tlblNlcGFyYXRvcnM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gIG9uQ2xlYXJTZWxlY3Rpb24oZTogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLnVwZGF0ZUxpc3RPZlNlbGVjdGVkVmFsdWUoW10sIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgc2V0SW5wdXRWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAvKiogZml4IGNsZWFyIHZhbHVlIGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2lzc3Vlcy8zODI1ICoqL1xyXG4gICAgaWYgKHRoaXMuaW5wdXRET00gJiYgIXZhbHVlKSB7XHJcbiAgICAgIHRoaXMuaW5wdXRET00udmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy51cGRhdGVXaWR0aCgpO1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UudXBkYXRlU2VhcmNoVmFsdWUodmFsdWUpO1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UudG9rZW5TZXBhcmF0ZSh0aGlzLmlucHV0VmFsdWUsIHRoaXMubnpUb2tlblNlcGFyYXRvcnMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG1pcnJvckRPTSgpOiBIVE1MRWxlbWVudCB7XHJcbiAgICByZXR1cm4gdGhpcy5taXJyb3JFbGVtZW50ICYmIHRoaXMubWlycm9yRWxlbWVudC5uYXRpdmVFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlucHV0RE9NKCk6IEhUTUxJbnB1dEVsZW1lbnQge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5wdXRFbGVtZW50ICYmIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBnZXQgcGxhY2VIb2xkZXJEaXNwbGF5KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5pbnB1dFZhbHVlIHx8IHRoaXMuaXNDb21wb3NpbmcgfHwgdGhpcy5uelNlbGVjdFNlcnZpY2UubGlzdE9mU2VsZWN0ZWRWYWx1ZS5sZW5ndGggPyAnbm9uZScgOiAnYmxvY2snO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNlbGVjdGVkVmFsdWVTdHlsZSgpOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcclxuICAgIGxldCBzaG93U2VsZWN0ZWRWYWx1ZSA9IGZhbHNlO1xyXG4gICAgbGV0IG9wYWNpdHkgPSAxO1xyXG4gICAgaWYgKCF0aGlzLm56U2hvd1NlYXJjaCkge1xyXG4gICAgICBzaG93U2VsZWN0ZWRWYWx1ZSA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5uek9wZW4pIHtcclxuICAgICAgICBzaG93U2VsZWN0ZWRWYWx1ZSA9ICEodGhpcy5pbnB1dFZhbHVlIHx8IHRoaXMuaXNDb21wb3NpbmcpO1xyXG4gICAgICAgIGlmIChzaG93U2VsZWN0ZWRWYWx1ZSkge1xyXG4gICAgICAgICAgb3BhY2l0eSA9IDAuNDtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2hvd1NlbGVjdGVkVmFsdWUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBkaXNwbGF5OiBzaG93U2VsZWN0ZWRWYWx1ZSA/ICdibG9jaycgOiAnbm9uZScsXHJcbiAgICAgIG9wYWNpdHk6IGAke29wYWNpdHl9YFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICB0cmFja1ZhbHVlKF9pbmRleDogbnVtYmVyLCBvcHRpb246IE56T3B0aW9uQ29tcG9uZW50KTogYW55IHtcclxuICAgIHJldHVybiBvcHRpb24ubnpWYWx1ZTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVdpZHRoKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubWlycm9yRE9NICYmIHRoaXMuaW5wdXRET00gJiYgdGhpcy5pbnB1dERPTS52YWx1ZSkge1xyXG4gICAgICB0aGlzLm1pcnJvckRPTS5pbm5lclRleHQgPSBgJHt0aGlzLmlucHV0RE9NLnZhbHVlfSZuYnNwO2A7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5pbnB1dERPTSwgJ3dpZHRoJyk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5pbnB1dERPTSwgJ3dpZHRoJywgYCR7dGhpcy5taXJyb3JET00uY2xpZW50V2lkdGh9cHhgKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5pbnB1dERPTSkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuaW5wdXRET00sICd3aWR0aCcpO1xyXG4gICAgICB0aGlzLm1pcnJvckRPTS5pbm5lclRleHQgPSAnJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZVNlbGVjdGVkVmFsdWUob3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudCwgZTogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UucmVtb3ZlVmFsdWVGb3JtU2VsZWN0ZWQob3B0aW9uKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBhbmltYXRpb25FbmQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5hbmltYXRpb25FdmVudCQubmV4dCgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwdWJsaWMgbnpTZWxlY3RTZXJ2aWNlOiBOelNlbGVjdFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2Uub3BlbiQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShvcGVuID0+IHtcclxuICAgICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50ICYmIG9wZW4pIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5wdXRET00uZm9jdXMoKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UuY2xlYXJJbnB1dCQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0SW5wdXRWYWx1ZSgnJyk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmNoZWNrJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
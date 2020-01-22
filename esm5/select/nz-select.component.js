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
import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { Platform } from '@angular/cdk/platform';
import { forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, Host, Input, Optional, Output, QueryList, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { merge, EMPTY, Subject } from 'rxjs';
import { flatMap, startWith, takeUntil } from 'rxjs/operators';
import { isNotNil, slideMotion, toBoolean, InputBoolean, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { NzOptionGroupComponent } from './nz-option-group.component';
import { NzOptionComponent } from './nz-option.component';
import { NzSelectTopControlComponent } from './nz-select-top-control.component';
import { NzSelectService } from './nz-select.service';
var NzSelectComponent = /** @class */ (function () {
    function NzSelectComponent(renderer, nzSelectService, cdr, platform, elementRef, noAnimation) {
        this.nzSelectService = nzSelectService;
        this.cdr = cdr;
        this.platform = platform;
        this.noAnimation = noAnimation;
        this.open = false;
        this.onChange = (/**
         * @return {?}
         */
        function () { return null; });
        this.onTouched = (/**
         * @return {?}
         */
        function () { return null; });
        this.dropDownPosition = 'bottom';
        this._disabled = false;
        this.isInit = false;
        this.destroy$ = new Subject();
        this.nzOnSearch = new EventEmitter();
        this.nzScrollToBottom = new EventEmitter();
        this.nzOpenChange = new EventEmitter();
        this.nzBlur = new EventEmitter();
        this.nzFocus = new EventEmitter();
        this.nzSize = 'default';
        this.nzDropdownMatchSelectWidth = true;
        this.nzAllowClear = false;
        this.nzShowSearch = false;
        this.nzLoading = false;
        this.nzAutoFocus = false;
        this.nzShowArrow = true;
        this.nzTokenSeparators = [];
        renderer.addClass(elementRef.nativeElement, 'ant-select');
    }
    Object.defineProperty(NzSelectComponent.prototype, "nzAutoClearSearchValue", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.nzSelectService.autoClearSearchValue = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectComponent.prototype, "nzMaxMultipleCount", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.nzSelectService.maxMultipleCount = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectComponent.prototype, "nzServerSearch", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.nzSelectService.serverSearch = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectComponent.prototype, "nzMode", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.nzSelectService.mode = value;
            this.nzSelectService.check();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectComponent.prototype, "nzFilterOption", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.nzSelectService.filterOption = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectComponent.prototype, "compareWith", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.nzSelectService.compareWith = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectComponent.prototype, "nzOpen", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.open = value;
            this.nzSelectService.setOpenState(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectComponent.prototype, "nzDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = toBoolean(value);
            this.nzSelectService.disabled = this._disabled;
            this.nzSelectService.check();
            if (this.nzDisabled && this.isInit) {
                this.closeDropDown();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectComponent.prototype, "nzSelectTopControlDOM", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzSelectTopControlElement && this.nzSelectTopControlElement.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.updateAutoFocus = /**
     * @return {?}
     */
    function () {
        if (this.nzSelectTopControlDOM && this.nzAutoFocus) {
            this.nzSelectTopControlDOM.focus();
        }
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        if (this.nzSelectTopControlDOM) {
            this.nzSelectTopControlDOM.focus();
        }
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.blur = /**
     * @return {?}
     */
    function () {
        if (this.nzSelectTopControlDOM) {
            this.nzSelectTopControlDOM.blur();
        }
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.onFocus = /**
     * @return {?}
     */
    function () {
        this.nzFocus.emit();
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this.nzBlur.emit();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzSelectComponent.prototype.onKeyDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.nzSelectService.onKeyDown(event);
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.toggleDropDown = /**
     * @return {?}
     */
    function () {
        if (!this.nzDisabled) {
            this.nzSelectService.setOpenState(!this.open);
        }
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.closeDropDown = /**
     * @return {?}
     */
    function () {
        this.nzSelectService.setOpenState(false);
    };
    /**
     * @param {?} position
     * @return {?}
     */
    NzSelectComponent.prototype.onPositionChange = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        this.dropDownPosition = position.connectionPair.originY;
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.updateCdkConnectedOverlayStatus = /**
     * @return {?}
     */
    function () {
        if (this.platform.isBrowser) {
            this.triggerWidth = this.cdkOverlayOrigin.elementRef.nativeElement.getBoundingClientRect().width;
        }
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.updateCdkConnectedOverlayPositions = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (_this.cdkConnectedOverlay && _this.cdkConnectedOverlay.overlayRef) {
                _this.cdkConnectedOverlay.overlayRef.updatePosition();
            }
        }));
    };
    /** update ngModel -> update listOfSelectedValue **/
    // tslint:disable-next-line:no-any
    /**
     * update ngModel -> update listOfSelectedValue *
     * @param {?} value
     * @return {?}
     */
    // tslint:disable-next-line:no-any
    NzSelectComponent.prototype.writeValue = /**
     * update ngModel -> update listOfSelectedValue *
     * @param {?} value
     * @return {?}
     */
    // tslint:disable-next-line:no-any
    function (value) {
        this.value = value;
        /** @type {?} */
        var listValue = [];
        if (isNotNil(value)) {
            if (this.nzSelectService.isMultipleOrTags) {
                listValue = value;
            }
            else {
                listValue = [value];
            }
        }
        this.nzSelectService.updateListOfSelectedValue(listValue, false);
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzSelectComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzSelectComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NzSelectComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.nzDisabled = isDisabled;
        this.cdr.markForCheck();
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.nzSelectService.animationEvent$
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.updateCdkConnectedOverlayPositions(); }));
        this.nzSelectService.searchValue$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.nzOnSearch.emit(data);
            _this.updateCdkConnectedOverlayPositions();
        }));
        this.nzSelectService.modelChange$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} modelValue
         * @return {?}
         */
        function (modelValue) {
            if (_this.value !== modelValue) {
                _this.value = modelValue;
                _this.onChange(_this.value);
            }
        }));
        this.nzSelectService.open$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (_this.open !== value) {
                _this.nzOpenChange.emit(value);
            }
            if (value) {
                _this.focus();
                _this.updateCdkConnectedOverlayStatus();
            }
            else {
                _this.blur();
                _this.onTouched();
            }
            _this.open = value;
            _this.nzSelectService.clearInput();
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
    NzSelectComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.updateCdkConnectedOverlayStatus();
        this.updateAutoFocus();
        this.isInit = true;
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.listOfNzOptionGroupComponent.changes
            .pipe(startWith(true), flatMap((/**
         * @return {?}
         */
        function () {
            return merge.apply(void 0, tslib_1.__spread([_this.listOfNzOptionGroupComponent.changes,
                _this.listOfNzOptionComponent.changes], _this.listOfNzOptionComponent.map((/**
             * @param {?} option
             * @return {?}
             */
            function (option) { return option.changes; })), _this.listOfNzOptionGroupComponent.map((/**
             * @param {?} group
             * @return {?}
             */
            function (group) {
                return group.listOfNzOptionComponent ? group.listOfNzOptionComponent.changes : EMPTY;
            })))).pipe(startWith(true));
        })))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.nzSelectService.updateTemplateOption(_this.listOfNzOptionComponent.toArray(), _this.listOfNzOptionGroupComponent.toArray());
        }));
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-select',
                    exportAs: 'nzSelect',
                    preserveWhitespaces: false,
                    providers: [
                        NzSelectService,
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return NzSelectComponent; })),
                            multi: true
                        }
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    animations: [slideMotion],
                    template: "<div cdkOverlayOrigin\r\n  nz-select-top-control\r\n  tabindex=\"0\"\r\n  class=\"ant-select-selection\"\r\n  [nzOpen]=\"open\"\r\n  [@.disabled]=\"noAnimation?.nzNoAnimation\"\r\n  [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n  [nzMaxTagPlaceholder]=\"nzMaxTagPlaceholder\"\r\n  [nzPlaceHolder]=\"nzPlaceHolder\"\r\n  [nzAllowClear]=\"nzAllowClear\"\r\n  [nzMaxTagCount]=\"nzMaxTagCount\"\r\n  [nzShowArrow]=\"nzShowArrow\"\r\n  [nzLoading]=\"nzLoading\"\r\n  [nzCustomTemplate]=\"nzCustomTemplate\"\r\n  [nzSuffixIcon]=\"nzSuffixIcon\"\r\n  [nzClearIcon]=\"nzClearIcon\"\r\n  [nzRemoveIcon]=\"nzRemoveIcon\"\r\n  [nzShowSearch]=\"nzShowSearch\"\r\n  [nzTokenSeparators]=\"nzTokenSeparators\"\r\n  [class.ant-select-selection--single]=\"nzSelectService.isSingleMode\"\r\n  [class.ant-select-selection--multiple]=\"nzSelectService.isMultipleOrTags\"\r\n  (focus)=\"onFocus()\"\r\n  (blur)=\"onBlur()\"\r\n  (keydown)=\"onKeyDown($event)\">\r\n</div>\r\n<ng-template\r\n  cdkConnectedOverlay\r\n  nzConnectedOverlay\r\n  [cdkConnectedOverlayHasBackdrop]=\"true\"\r\n  [cdkConnectedOverlayMinWidth]=\"nzDropdownMatchSelectWidth? null : triggerWidth\"\r\n  [cdkConnectedOverlayWidth]=\"nzDropdownMatchSelectWidth? triggerWidth : null\"\r\n  [cdkConnectedOverlayOrigin]=\"cdkOverlayOrigin\"\r\n  (backdropClick)=\"closeDropDown()\"\r\n  (detach)=\"closeDropDown();\"\r\n  (positionChange)=\"onPositionChange($event)\"\r\n  [cdkConnectedOverlayOpen]=\"open\">\r\n  <div\r\n    class=\"ant-select-dropdown\"\r\n    [class.ant-select-dropdown--single]=\"nzSelectService.isSingleMode\"\r\n    [class.ant-select-dropdown--multiple]=\"nzSelectService.isMultipleOrTags\"\r\n    [class.ant-select-dropdown-placement-bottomLeft]=\"dropDownPosition === 'bottom'\"\r\n    [class.ant-select-dropdown-placement-topLeft]=\"dropDownPosition === 'top'\"\r\n    [nzClassListAdd]=\"[nzDropdownClassName]\"\r\n    [@slideMotion]=\"dropDownPosition\"\r\n    [@.disabled]=\"noAnimation?.nzNoAnimation\"\r\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n    [ngStyle]=\"nzDropdownStyle\">\r\n    <div nz-option-container\r\n      style=\"overflow: auto;transform: translateZ(0px);\"\r\n      (keydown)=\"onKeyDown($event)\"\r\n      [nzMenuItemSelectedIcon]=\"nzMenuItemSelectedIcon\"\r\n      [nzNotFoundContent]=\"nzNotFoundContent\"\r\n      (nzScrollToBottom)=\"nzScrollToBottom.emit()\">\r\n    </div>\r\n    <ng-template [ngTemplateOutlet]=\"nzDropdownRender\"></ng-template>\r\n  </div>\r\n</ng-template>\r\n<!--can not use ViewChild since it will match sub options in option group -->\r\n<ng-template>\r\n  <ng-content></ng-content>\r\n</ng-template>",
                    host: {
                        '[class.ant-select-lg]': 'nzSize==="large"',
                        '[class.ant-select-sm]': 'nzSize==="small"',
                        '[class.ant-select-enabled]': '!nzDisabled',
                        '[class.ant-select-no-arrow]': '!nzShowArrow',
                        '[class.ant-select-disabled]': 'nzDisabled',
                        '[class.ant-select-allow-clear]': 'nzAllowClear',
                        '[class.ant-select-open]': 'open',
                        '(click)': 'toggleDropDown()'
                    },
                    styles: ["\n      .ant-select-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzSelectComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: NzSelectService },
        { type: ChangeDetectorRef },
        { type: Platform },
        { type: ElementRef },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    NzSelectComponent.propDecorators = {
        cdkOverlayOrigin: [{ type: ViewChild, args: [CdkOverlayOrigin, { static: false },] }],
        cdkConnectedOverlay: [{ type: ViewChild, args: [CdkConnectedOverlay, { static: false },] }],
        nzSelectTopControlComponent: [{ type: ViewChild, args: [NzSelectTopControlComponent, { static: true },] }],
        nzSelectTopControlElement: [{ type: ViewChild, args: [NzSelectTopControlComponent, { static: true, read: ElementRef },] }],
        listOfNzOptionComponent: [{ type: ContentChildren, args: [NzOptionComponent,] }],
        listOfNzOptionGroupComponent: [{ type: ContentChildren, args: [NzOptionGroupComponent,] }],
        nzOnSearch: [{ type: Output }],
        nzScrollToBottom: [{ type: Output }],
        nzOpenChange: [{ type: Output }],
        nzBlur: [{ type: Output }],
        nzFocus: [{ type: Output }],
        nzSize: [{ type: Input }],
        nzDropdownClassName: [{ type: Input }],
        nzDropdownMatchSelectWidth: [{ type: Input }],
        nzDropdownStyle: [{ type: Input }],
        nzNotFoundContent: [{ type: Input }],
        nzAllowClear: [{ type: Input }],
        nzShowSearch: [{ type: Input }],
        nzLoading: [{ type: Input }],
        nzAutoFocus: [{ type: Input }],
        nzPlaceHolder: [{ type: Input }],
        nzMaxTagCount: [{ type: Input }],
        nzDropdownRender: [{ type: Input }],
        nzCustomTemplate: [{ type: Input }],
        nzSuffixIcon: [{ type: Input }],
        nzClearIcon: [{ type: Input }],
        nzRemoveIcon: [{ type: Input }],
        nzMenuItemSelectedIcon: [{ type: Input }],
        nzShowArrow: [{ type: Input }],
        nzTokenSeparators: [{ type: Input }],
        nzMaxTagPlaceholder: [{ type: Input }],
        nzAutoClearSearchValue: [{ type: Input }],
        nzMaxMultipleCount: [{ type: Input }],
        nzServerSearch: [{ type: Input }],
        nzMode: [{ type: Input }],
        nzFilterOption: [{ type: Input }],
        compareWith: [{ type: Input }],
        nzOpen: [{ type: Input }],
        nzDisabled: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzSelectComponent.prototype, "nzAllowClear", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzSelectComponent.prototype, "nzShowSearch", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzSelectComponent.prototype, "nzLoading", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzSelectComponent.prototype, "nzAutoFocus", void 0);
    return NzSelectComponent;
}());
export { NzSelectComponent };
if (false) {
    /** @type {?} */
    NzSelectComponent.prototype.open;
    /** @type {?} */
    NzSelectComponent.prototype.value;
    /** @type {?} */
    NzSelectComponent.prototype.onChange;
    /** @type {?} */
    NzSelectComponent.prototype.onTouched;
    /** @type {?} */
    NzSelectComponent.prototype.dropDownPosition;
    /** @type {?} */
    NzSelectComponent.prototype.triggerWidth;
    /**
     * @type {?}
     * @private
     */
    NzSelectComponent.prototype._disabled;
    /**
     * @type {?}
     * @private
     */
    NzSelectComponent.prototype.isInit;
    /**
     * @type {?}
     * @private
     */
    NzSelectComponent.prototype.destroy$;
    /** @type {?} */
    NzSelectComponent.prototype.cdkOverlayOrigin;
    /** @type {?} */
    NzSelectComponent.prototype.cdkConnectedOverlay;
    /** @type {?} */
    NzSelectComponent.prototype.nzSelectTopControlComponent;
    /** @type {?} */
    NzSelectComponent.prototype.nzSelectTopControlElement;
    /**
     * should move to nz-option-container when https://github.com/angular/angular/issues/20810 resolved *
     * @type {?}
     */
    NzSelectComponent.prototype.listOfNzOptionComponent;
    /** @type {?} */
    NzSelectComponent.prototype.listOfNzOptionGroupComponent;
    /** @type {?} */
    NzSelectComponent.prototype.nzOnSearch;
    /** @type {?} */
    NzSelectComponent.prototype.nzScrollToBottom;
    /** @type {?} */
    NzSelectComponent.prototype.nzOpenChange;
    /** @type {?} */
    NzSelectComponent.prototype.nzBlur;
    /** @type {?} */
    NzSelectComponent.prototype.nzFocus;
    /** @type {?} */
    NzSelectComponent.prototype.nzSize;
    /** @type {?} */
    NzSelectComponent.prototype.nzDropdownClassName;
    /** @type {?} */
    NzSelectComponent.prototype.nzDropdownMatchSelectWidth;
    /** @type {?} */
    NzSelectComponent.prototype.nzDropdownStyle;
    /** @type {?} */
    NzSelectComponent.prototype.nzNotFoundContent;
    /** @type {?} */
    NzSelectComponent.prototype.nzAllowClear;
    /** @type {?} */
    NzSelectComponent.prototype.nzShowSearch;
    /** @type {?} */
    NzSelectComponent.prototype.nzLoading;
    /** @type {?} */
    NzSelectComponent.prototype.nzAutoFocus;
    /** @type {?} */
    NzSelectComponent.prototype.nzPlaceHolder;
    /** @type {?} */
    NzSelectComponent.prototype.nzMaxTagCount;
    /** @type {?} */
    NzSelectComponent.prototype.nzDropdownRender;
    /** @type {?} */
    NzSelectComponent.prototype.nzCustomTemplate;
    /** @type {?} */
    NzSelectComponent.prototype.nzSuffixIcon;
    /** @type {?} */
    NzSelectComponent.prototype.nzClearIcon;
    /** @type {?} */
    NzSelectComponent.prototype.nzRemoveIcon;
    /** @type {?} */
    NzSelectComponent.prototype.nzMenuItemSelectedIcon;
    /** @type {?} */
    NzSelectComponent.prototype.nzShowArrow;
    /** @type {?} */
    NzSelectComponent.prototype.nzTokenSeparators;
    /** @type {?} */
    NzSelectComponent.prototype.nzMaxTagPlaceholder;
    /** @type {?} */
    NzSelectComponent.prototype.nzSelectService;
    /**
     * @type {?}
     * @private
     */
    NzSelectComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzSelectComponent.prototype.platform;
    /** @type {?} */
    NzSelectComponent.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvc2VsZWN0LyIsInNvdXJjZXMiOlsibnotc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQWtDLE1BQU0sc0JBQXNCLENBQUM7QUFDN0csT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFDTCxVQUFVLEVBR1YsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFDVixZQUFZLEVBQ1osSUFBSSxFQUNKLEtBQUssRUFHTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUvRCxPQUFPLEVBQ0wsUUFBUSxFQUNSLFdBQVcsRUFDWCxTQUFTLEVBQ1QsWUFBWSxFQUNaLHNCQUFzQixFQUV2QixNQUFNLG9CQUFvQixDQUFDO0FBRTVCLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTFELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV0RDtJ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REFBMEY7O0lBQzFGLHlEQUF5Rzs7SUFDekcsdUNBQTJEOztJQUMzRCw2Q0FBK0Q7O0lBQy9ELHlDQUE4RDs7SUFDOUQsbUNBQXFEOztJQUNyRCxvQ0FBc0Q7O0lBQ3RELG1DQUEyQzs7SUFDM0MsZ0RBQXFDOztJQUNyQyx1REFBMkM7O0lBQzNDLDRDQUFvRDs7SUFDcEQsOENBQW1DOztJQUNuQyx5Q0FBOEM7O0lBQzlDLHlDQUE4Qzs7SUFDOUMsc0NBQTJDOztJQUMzQyx3Q0FBNkM7O0lBQzdDLDBDQUErQjs7SUFDL0IsMENBQStCOztJQUMvQiw2Q0FBNkM7O0lBQzdDLDZDQUF5RTs7SUFDekUseUNBQXlDOztJQUN6Qyx3Q0FBd0M7O0lBQ3hDLHlDQUF5Qzs7SUFDekMsbURBQW1EOztJQUNuRCx3Q0FBNEI7O0lBQzVCLDhDQUEwQzs7SUFFMUMsZ0RBQWdFOztJQXNIOUQsNENBQXVDOzs7OztJQUN2QyxnQ0FBOEI7Ozs7O0lBQzlCLHFDQUEwQjs7SUFFMUIsd0NBQStEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBDZGtDb25uZWN0ZWRPdmVybGF5LCBDZGtPdmVybGF5T3JpZ2luLCBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHtcclxuICBmb3J3YXJkUmVmLFxyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEhvc3QsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFJlbmRlcmVyMixcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBtZXJnZSwgRU1QVFksIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmxhdE1hcCwgc3RhcnRXaXRoLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIGlzTm90TmlsLFxyXG4gIHNsaWRlTW90aW9uLFxyXG4gIHRvQm9vbGVhbixcclxuICBJbnB1dEJvb2xlYW4sXHJcbiAgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSxcclxuICBOelNpemVMRFNUeXBlXHJcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56T3B0aW9uR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL256LW9wdGlvbi1ncm91cC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOek9wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbnotb3B0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRGaWx0ZXJPcHRpb24gfSBmcm9tICcuL256LW9wdGlvbi5waXBlJztcclxuaW1wb3J0IHsgTnpTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9uei1zZWxlY3QtdG9wLWNvbnRyb2wuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpTZWxlY3RTZXJ2aWNlIH0gZnJvbSAnLi9uei1zZWxlY3Quc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LXNlbGVjdCcsXHJcbiAgZXhwb3J0QXM6ICduelNlbGVjdCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBOelNlbGVjdFNlcnZpY2UsXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOelNlbGVjdENvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGFuaW1hdGlvbnM6IFtzbGlkZU1vdGlvbl0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXNlbGVjdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWxnXSc6ICduelNpemU9PT1cImxhcmdlXCInLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LXNtXSc6ICduelNpemU9PT1cInNtYWxsXCInLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWVuYWJsZWRdJzogJyFuekRpc2FibGVkJyxcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1uby1hcnJvd10nOiAnIW56U2hvd0Fycm93JyxcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1kaXNhYmxlZF0nOiAnbnpEaXNhYmxlZCcsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtYWxsb3ctY2xlYXJdJzogJ256QWxsb3dDbGVhcicsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3Qtb3Blbl0nOiAnb3BlbicsXHJcbiAgICAnKGNsaWNrKSc6ICd0b2dnbGVEcm9wRG93bigpJ1xyXG4gIH0sXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIC5hbnQtc2VsZWN0LWRyb3Bkb3duIHtcclxuICAgICAgICB0b3A6IDEwMCU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56U2VsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBBZnRlckNvbnRlbnRJbml0IHtcclxuICBvcGVuID0gZmFsc2U7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHZhbHVlOiBhbnkgfCBhbnlbXTtcclxuICBvbkNoYW5nZTogKHZhbHVlOiBzdHJpbmcgfCBzdHJpbmdbXSkgPT4gdm9pZCA9ICgpID0+IG51bGw7XHJcbiAgb25Ub3VjaGVkOiAoKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcclxuICBkcm9wRG93blBvc2l0aW9uOiAndG9wJyB8ICdjZW50ZXInIHwgJ2JvdHRvbScgPSAnYm90dG9tJztcclxuICB0cmlnZ2VyV2lkdGg6IG51bWJlcjtcclxuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgaXNJbml0ID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgQFZpZXdDaGlsZChDZGtPdmVybGF5T3JpZ2luLCB7IHN0YXRpYzogZmFsc2UgfSkgY2RrT3ZlcmxheU9yaWdpbjogQ2RrT3ZlcmxheU9yaWdpbjtcclxuICBAVmlld0NoaWxkKENka0Nvbm5lY3RlZE92ZXJsYXksIHsgc3RhdGljOiBmYWxzZSB9KSBjZGtDb25uZWN0ZWRPdmVybGF5OiBDZGtDb25uZWN0ZWRPdmVybGF5O1xyXG4gIEBWaWV3Q2hpbGQoTnpTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50LCB7IHN0YXRpYzogdHJ1ZSB9KSBuelNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQ6IE56U2VsZWN0VG9wQ29udHJvbENvbXBvbmVudDtcclxuICBAVmlld0NoaWxkKE56U2VsZWN0VG9wQ29udHJvbENvbXBvbmVudCwgeyBzdGF0aWM6IHRydWUsIHJlYWQ6IEVsZW1lbnRSZWYgfSkgbnpTZWxlY3RUb3BDb250cm9sRWxlbWVudDogRWxlbWVudFJlZjtcclxuICAvKiogc2hvdWxkIG1vdmUgdG8gbnotb3B0aW9uLWNvbnRhaW5lciB3aGVuIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzIwODEwIHJlc29sdmVkICoqL1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oTnpPcHRpb25Db21wb25lbnQpIGxpc3RPZk56T3B0aW9uQ29tcG9uZW50OiBRdWVyeUxpc3Q8TnpPcHRpb25Db21wb25lbnQ+O1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oTnpPcHRpb25Hcm91cENvbXBvbmVudCkgbGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudDogUXVlcnlMaXN0PE56T3B0aW9uR3JvdXBDb21wb25lbnQ+O1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uU2VhcmNoID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56U2Nyb2xsVG9Cb3R0b20gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T3BlbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpCbHVyID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekZvY3VzID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBJbnB1dCgpIG56U2l6ZTogTnpTaXplTERTVHlwZSA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBuekRyb3Bkb3duQ2xhc3NOYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpEcm9wZG93bk1hdGNoU2VsZWN0V2lkdGggPSB0cnVlO1xyXG4gIEBJbnB1dCgpIG56RHJvcGRvd25TdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxuICBASW5wdXQoKSBuek5vdEZvdW5kQ29udGVudDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekFsbG93Q2xlYXIgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93U2VhcmNoID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56TG9hZGluZyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekF1dG9Gb2N1cyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56UGxhY2VIb2xkZXI6IHN0cmluZztcclxuICBASW5wdXQoKSBuek1heFRhZ0NvdW50OiBudW1iZXI7XHJcbiAgQElucHV0KCkgbnpEcm9wZG93blJlbmRlcjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpDdXN0b21UZW1wbGF0ZTogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56T3B0aW9uQ29tcG9uZW50IH0+O1xyXG4gIEBJbnB1dCgpIG56U3VmZml4SWNvbjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpDbGVhckljb246IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56UmVtb3ZlSWNvbjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpNZW51SXRlbVNlbGVjdGVkSWNvbjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpTaG93QXJyb3cgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIG56VG9rZW5TZXBhcmF0b3JzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBASW5wdXQoKSBuek1heFRhZ1BsYWNlaG9sZGVyOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogYW55W10gfT47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56QXV0b0NsZWFyU2VhcmNoVmFsdWUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmF1dG9DbGVhclNlYXJjaFZhbHVlID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56TWF4TXVsdGlwbGVDb3VudCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5tYXhNdWx0aXBsZUNvdW50ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelNlcnZlclNlYXJjaCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2Uuc2VydmVyU2VhcmNoID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56TW9kZSh2YWx1ZTogJ2RlZmF1bHQnIHwgJ211bHRpcGxlJyB8ICd0YWdzJykge1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UubW9kZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UuY2hlY2soKTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56RmlsdGVyT3B0aW9uKHZhbHVlOiBURmlsdGVyT3B0aW9uKSB7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5maWx0ZXJPcHRpb24gPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHNldCBjb21wYXJlV2l0aCh2YWx1ZTogKG8xOiBhbnksIG8yOiBhbnkpID0+IGJvb2xlYW4pIHtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmNvbXBhcmVXaXRoID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuek9wZW4odmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMub3BlbiA9IHZhbHVlO1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2Uuc2V0T3BlblN0YXRlKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56RGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2Rpc2FibGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmRpc2FibGVkID0gdGhpcy5fZGlzYWJsZWQ7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5jaGVjaygpO1xyXG4gICAgaWYgKHRoaXMubnpEaXNhYmxlZCAmJiB0aGlzLmlzSW5pdCkge1xyXG4gICAgICB0aGlzLmNsb3NlRHJvcERvd24oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBuekRpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56U2VsZWN0VG9wQ29udHJvbERPTSgpOiBIVE1MRWxlbWVudCB7XHJcbiAgICByZXR1cm4gdGhpcy5uelNlbGVjdFRvcENvbnRyb2xFbGVtZW50ICYmIHRoaXMubnpTZWxlY3RUb3BDb250cm9sRWxlbWVudC5uYXRpdmVFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQXV0b0ZvY3VzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpTZWxlY3RUb3BDb250cm9sRE9NICYmIHRoaXMubnpBdXRvRm9jdXMpIHtcclxuICAgICAgdGhpcy5uelNlbGVjdFRvcENvbnRyb2xET00uZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvY3VzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpTZWxlY3RUb3BDb250cm9sRE9NKSB7XHJcbiAgICAgIHRoaXMubnpTZWxlY3RUb3BDb250cm9sRE9NLmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBibHVyKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpTZWxlY3RUb3BDb250cm9sRE9NKSB7XHJcbiAgICAgIHRoaXMubnpTZWxlY3RUb3BDb250cm9sRE9NLmJsdXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uRm9jdXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLm56Rm9jdXMuZW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgb25CbHVyKCk6IHZvaWQge1xyXG4gICAgdGhpcy5uekJsdXIuZW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5vbktleURvd24oZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlRHJvcERvd24oKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMubnpEaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLm56U2VsZWN0U2VydmljZS5zZXRPcGVuU3RhdGUoIXRoaXMub3Blbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbG9zZURyb3BEb3duKCk6IHZvaWQge1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2Uuc2V0T3BlblN0YXRlKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIG9uUG9zaXRpb25DaGFuZ2UocG9zaXRpb246IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSk6IHZvaWQge1xyXG4gICAgdGhpcy5kcm9wRG93blBvc2l0aW9uID0gcG9zaXRpb24uY29ubmVjdGlvblBhaXIub3JpZ2luWTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlTdGF0dXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgdGhpcy50cmlnZ2VyV2lkdGggPSB0aGlzLmNka092ZXJsYXlPcmlnaW4uZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9ucygpOiB2b2lkIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5ICYmIHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheS5vdmVybGF5UmVmKSB7XHJcbiAgICAgICAgdGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5Lm92ZXJsYXlSZWYudXBkYXRlUG9zaXRpb24oKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwdWJsaWMgbnpTZWxlY3RTZXJ2aWNlOiBOelNlbGVjdFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcclxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcclxuICApIHtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1zZWxlY3QnKTtcclxuICB9XHJcblxyXG4gIC8qKiB1cGRhdGUgbmdNb2RlbCAtPiB1cGRhdGUgbGlzdE9mU2VsZWN0ZWRWYWx1ZSAqKi9cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55IHwgYW55W10pOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIGxldCBsaXN0VmFsdWU6IGFueVtdID0gW107IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XHJcbiAgICAgIGlmICh0aGlzLm56U2VsZWN0U2VydmljZS5pc011bHRpcGxlT3JUYWdzKSB7XHJcbiAgICAgICAgbGlzdFZhbHVlID0gdmFsdWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGlzdFZhbHVlID0gW3ZhbHVlXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UudXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZShsaXN0VmFsdWUsIGZhbHNlKTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBzdHJpbmcgfCBzdHJpbmdbXSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMubnpEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UuYW5pbWF0aW9uRXZlbnQkXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbnMoKSk7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5zZWFyY2hWYWx1ZSQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgdGhpcy5uek9uU2VhcmNoLmVtaXQoZGF0YSk7XHJcbiAgICAgIHRoaXMudXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9ucygpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5tb2RlbENoYW5nZSQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShtb2RlbFZhbHVlID0+IHtcclxuICAgICAgaWYgKHRoaXMudmFsdWUgIT09IG1vZGVsVmFsdWUpIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gbW9kZWxWYWx1ZTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLm9wZW4kLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUodmFsdWUgPT4ge1xyXG4gICAgICBpZiAodGhpcy5vcGVuICE9PSB2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMubnpPcGVuQ2hhbmdlLmVtaXQodmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuZm9jdXMoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlTdGF0dXMoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmJsdXIoKTtcclxuICAgICAgICB0aGlzLm9uVG91Y2hlZCgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMub3BlbiA9IHZhbHVlO1xyXG4gICAgICB0aGlzLm56U2VsZWN0U2VydmljZS5jbGVhcklucHV0KCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmNoZWNrJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVN0YXR1cygpO1xyXG4gICAgdGhpcy51cGRhdGVBdXRvRm9jdXMoKTtcclxuICAgIHRoaXMuaXNJbml0ID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMubGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudC5jaGFuZ2VzXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHN0YXJ0V2l0aCh0cnVlKSxcclxuICAgICAgICBmbGF0TWFwKCgpID0+XHJcbiAgICAgICAgICBtZXJnZShcclxuICAgICAgICAgICAgdGhpcy5saXN0T2ZOek9wdGlvbkdyb3VwQ29tcG9uZW50LmNoYW5nZXMsXHJcbiAgICAgICAgICAgIHRoaXMubGlzdE9mTnpPcHRpb25Db21wb25lbnQuY2hhbmdlcyxcclxuICAgICAgICAgICAgLi4udGhpcy5saXN0T2ZOek9wdGlvbkNvbXBvbmVudC5tYXAob3B0aW9uID0+IG9wdGlvbi5jaGFuZ2VzKSxcclxuICAgICAgICAgICAgLi4udGhpcy5saXN0T2ZOek9wdGlvbkdyb3VwQ29tcG9uZW50Lm1hcChncm91cCA9PlxyXG4gICAgICAgICAgICAgIGdyb3VwLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50ID8gZ3JvdXAubGlzdE9mTnpPcHRpb25Db21wb25lbnQuY2hhbmdlcyA6IEVNUFRZXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICkucGlwZShzdGFydFdpdGgodHJ1ZSkpXHJcbiAgICAgICAgKVxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLnVwZGF0ZVRlbXBsYXRlT3B0aW9uKFxyXG4gICAgICAgICAgdGhpcy5saXN0T2ZOek9wdGlvbkNvbXBvbmVudC50b0FycmF5KCksXHJcbiAgICAgICAgICB0aGlzLmxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQudG9BcnJheSgpXHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=
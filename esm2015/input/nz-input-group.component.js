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
import { ChangeDetectionStrategy, Component, ContentChildren, Input, QueryList, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core';
import { NzInputDirective } from './nz-input.directive';
export class NzInputGroupComponent {
    constructor() {
        this._size = 'default';
        this.nzSearch = false;
        this.nzCompact = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzSize(value) {
        this._size = value;
        this.updateChildrenInputSize();
    }
    /**
     * @return {?}
     */
    get nzSize() {
        return this._size;
    }
    /**
     * @return {?}
     */
    get isLarge() {
        return this.nzSize === 'large';
    }
    /**
     * @return {?}
     */
    get isSmall() {
        return this.nzSize === 'small';
    }
    /**
     * @return {?}
     */
    get isAffix() {
        return !!(this.nzSuffix || this.nzPrefix || this.nzPrefixIcon || this.nzSuffixIcon);
    }
    /**
     * @return {?}
     */
    get isAddOn() {
        return !!(this.nzAddOnAfter || this.nzAddOnBefore || this.nzAddOnAfterIcon || this.nzAddOnBeforeIcon);
    }
    /**
     * @return {?}
     */
    get isAffixWrapper() {
        return this.isAffix && !this.isAddOn;
    }
    /**
     * @return {?}
     */
    get isGroup() {
        return !this.isAffix && !this.isAddOn;
    }
    /**
     * @return {?}
     */
    get isLargeGroup() {
        return this.isGroup && this.isLarge;
    }
    /**
     * @return {?}
     */
    get isLargeGroupWrapper() {
        return this.isAddOn && this.isLarge;
    }
    /**
     * @return {?}
     */
    get isLargeAffix() {
        return this.isAffixWrapper && this.isLarge;
    }
    /**
     * @return {?}
     */
    get isLargeSearch() {
        return this.nzSearch && this.isLarge;
    }
    /**
     * @return {?}
     */
    get isSmallGroup() {
        return this.isGroup && this.isSmall;
    }
    /**
     * @return {?}
     */
    get isSmallAffix() {
        return this.isAffixWrapper && this.isSmall;
    }
    /**
     * @return {?}
     */
    get isSmallGroupWrapper() {
        return this.isAddOn && this.isSmall;
    }
    /**
     * @return {?}
     */
    get isSmallSearch() {
        return this.nzSearch && this.isSmall;
    }
    /**
     * @return {?}
     */
    updateChildrenInputSize() {
        if (this.listOfNzInputDirective) {
            this.listOfNzInputDirective.forEach((/**
             * @param {?} item
             * @return {?}
             */
            item => (item.nzSize = this.nzSize)));
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.updateChildrenInputSize();
    }
}
NzInputGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-input-group',
                exportAs: 'nzInputGroup',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: "<span class=\"ant-input-wrapper ant-input-group\" *ngIf=\"isAddOn\">\r\n  <span class=\"ant-input-group-addon\" *ngIf=\"nzAddOnBefore || nzAddOnBeforeIcon\">\r\n    <i nz-icon [nzType]=\"nzAddOnBeforeIcon\" *ngIf=\"nzAddOnBeforeIcon\"></i>\r\n    <ng-container *nzStringTemplateOutlet=\"nzAddOnBefore\">{{ nzAddOnBefore }}</ng-container>\r\n  </span>\r\n  <ng-container *ngIf=\"!isAffix\">\r\n    <ng-template *ngTemplateOutlet=\"contentTemplate\"></ng-template>\r\n  </ng-container>\r\n  <span class=\"ant-input-affix-wrapper\" [class.ant-input-affix-wrapper-sm]=\"isSmall\" [class.ant-input-affix-wrapper-lg]=\"isLarge\" *ngIf=\"isAffix\">\r\n    <ng-template *ngTemplateOutlet=\"affixTemplate\"></ng-template>\r\n  </span>\r\n  <span class=\"ant-input-group-addon\" *ngIf=\"nzAddOnAfter || nzAddOnAfterIcon\">\r\n    <i nz-icon [nzType]=\"nzAddOnAfterIcon\" *ngIf=\"nzAddOnAfterIcon\"></i>\r\n    <ng-container *nzStringTemplateOutlet=\"nzAddOnAfter\">{{ nzAddOnAfter }}</ng-container>\r\n  </span>\r\n</span>\r\n<ng-container *ngIf=\"isAffix && !isAddOn\">\r\n  <ng-template *ngTemplateOutlet=\"affixTemplate\"></ng-template>\r\n</ng-container>\r\n<ng-template #affixTemplate>\r\n  <span class=\"ant-input-prefix\" *ngIf=\"nzPrefix || nzPrefixIcon\">\r\n    <!-- TODO: should have a class to set its color, cc: antd-->\r\n    <i nz-icon [nzType]=\"nzPrefixIcon\" *ngIf=\"nzPrefixIcon\" style=\"color: rgba(0, 0, 0, 0.25)\"></i>\r\n    <ng-container *nzStringTemplateOutlet=\"nzPrefix\">{{ nzPrefix }}</ng-container>\r\n  </span>\r\n  <ng-template *ngTemplateOutlet=\"contentTemplate\"></ng-template>\r\n  <span class=\"ant-input-suffix\" *ngIf=\"nzSuffix || nzSuffixIcon\">\r\n    <i nz-icon [nzType]=\"nzSuffixIcon\" *ngIf=\"nzSuffixIcon\"></i>\r\n    <ng-container *nzStringTemplateOutlet=\"nzSuffix\">{{ nzSuffix }}</ng-container>\r\n  </span>\r\n</ng-template>\r\n<ng-container *ngIf=\"isGroup\">\r\n  <ng-template *ngTemplateOutlet=\"contentTemplate\"></ng-template>\r\n</ng-container>\r\n<ng-template #contentTemplate>\r\n  <ng-content></ng-content>\r\n</ng-template>\r\n",
                host: {
                    '[class.ant-input-group-compact]': 'nzCompact',
                    '[class.ant-input-search-enter-button]': 'nzSearch',
                    '[class.ant-input-search]': 'nzSearch',
                    '[class.ant-input-search-sm]': 'isSmallSearch',
                    '[class.ant-input-affix-wrapper]': 'isAffixWrapper',
                    '[class.ant-input-group-wrapper]': 'isAddOn',
                    '[class.ant-input-group]': 'isGroup',
                    '[class.ant-input-group-lg]': 'isLargeGroup',
                    '[class.ant-input-group-wrapper-lg]': 'isLargeGroupWrapper',
                    '[class.ant-input-affix-wrapper-lg]': 'isLargeAffix',
                    '[class.ant-input-search-lg]': 'isLargeSearch',
                    '[class.ant-input-group-sm]': 'isSmallGroup',
                    '[class.ant-input-affix-wrapper-sm]': 'isSmallAffix',
                    '[class.ant-input-group-wrapper-sm]': 'isSmallGroupWrapper'
                }
            }] }
];
NzInputGroupComponent.propDecorators = {
    listOfNzInputDirective: [{ type: ContentChildren, args: [NzInputDirective,] }],
    nzAddOnBeforeIcon: [{ type: Input }],
    nzAddOnAfterIcon: [{ type: Input }],
    nzPrefixIcon: [{ type: Input }],
    nzSuffixIcon: [{ type: Input }],
    nzAddOnBefore: [{ type: Input }],
    nzAddOnAfter: [{ type: Input }],
    nzPrefix: [{ type: Input }],
    nzSuffix: [{ type: Input }],
    nzSearch: [{ type: Input }],
    nzCompact: [{ type: Input }],
    nzSize: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzInputGroupComponent.prototype, "nzSearch", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzInputGroupComponent.prototype, "nzCompact", void 0);
if (false) {
    /** @type {?} */
    NzInputGroupComponent.prototype.listOfNzInputDirective;
    /**
     * @type {?}
     * @private
     */
    NzInputGroupComponent.prototype._size;
    /** @type {?} */
    NzInputGroupComponent.prototype.nzAddOnBeforeIcon;
    /** @type {?} */
    NzInputGroupComponent.prototype.nzAddOnAfterIcon;
    /** @type {?} */
    NzInputGroupComponent.prototype.nzPrefixIcon;
    /** @type {?} */
    NzInputGroupComponent.prototype.nzSuffixIcon;
    /** @type {?} */
    NzInputGroupComponent.prototype.nzAddOnBefore;
    /** @type {?} */
    NzInputGroupComponent.prototype.nzAddOnAfter;
    /** @type {?} */
    NzInputGroupComponent.prototype.nzPrefix;
    /** @type {?} */
    NzInputGroupComponent.prototype.nzSuffix;
    /** @type {?} */
    NzInputGroupComponent.prototype.nzSearch;
    /** @type {?} */
    NzInputGroupComponent.prototype.nzCompact;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaW5wdXQtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9pbnB1dC8iLCJzb3VyY2VzIjpbIm56LWlucHV0LWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsS0FBSyxFQUNMLFNBQVMsRUFFVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBOEIsTUFBTSxvQkFBb0IsQ0FBQztBQUM5RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQTBCeEQsTUFBTSxPQUFPLHFCQUFxQjtJQXhCbEM7UUEwQlUsVUFBSyxHQUFrQixTQUFTLENBQUM7UUFTaEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixjQUFTLEdBQUcsS0FBSyxDQUFDO0lBNEU3QyxDQUFDOzs7OztJQTFFQyxJQUFhLE1BQU0sQ0FBQyxLQUFvQjtRQUN0QyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztJQUNqQyxDQUFDOzs7O0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssT0FBTyxDQUFDO0lBQ2pDLENBQUM7Ozs7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssT0FBTyxDQUFDO0lBQ2pDLENBQUM7Ozs7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxZQUFZ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QUFLOzJCQUNMLEtBQUs7MkJBQ0wsS0FBSzs0QkFDTCxLQUFLOzJCQUNMLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSztxQkFFTCxLQUFLOztBQUhtQjtJQUFmLFlBQVksRUFBRTs7dURBQWtCO0FBQ2pCO0lBQWYsWUFBWSxFQUFFOzt3REFBbUI7OztJQVgzQyx1REFBdUY7Ozs7O0lBQ3ZGLHNDQUF5Qzs7SUFDekMsa0RBQXdDOztJQUN4QyxpREFBdUM7O0lBQ3ZDLDZDQUFtQzs7SUFDbkMsNkNBQW1DOztJQUNuQyw4Q0FBbUQ7O0lBQ25ELDZDQUFrRDs7SUFDbEQseUNBQThDOztJQUM5Qyx5Q0FBOEM7O0lBQzlDLHlDQUEwQzs7SUFDMUMsMENBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBJbnB1dCxcclxuICBRdWVyeUxpc3QsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBOZ0NsYXNzVHlwZSwgTnpTaXplTERTVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56SW5wdXREaXJlY3RpdmUgfSBmcm9tICcuL256LWlucHV0LmRpcmVjdGl2ZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LWlucHV0LWdyb3VwJyxcclxuICBleHBvcnRBczogJ256SW5wdXRHcm91cCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotaW5wdXQtZ3JvdXAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LWlucHV0LWdyb3VwLWNvbXBhY3RdJzogJ256Q29tcGFjdCcsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1zZWFyY2gtZW50ZXItYnV0dG9uXSc6ICduelNlYXJjaCcsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1zZWFyY2hdJzogJ256U2VhcmNoJyxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LXNlYXJjaC1zbV0nOiAnaXNTbWFsbFNlYXJjaCcsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1hZmZpeC13cmFwcGVyXSc6ICdpc0FmZml4V3JhcHBlcicsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1ncm91cC13cmFwcGVyXSc6ICdpc0FkZE9uJyxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LWdyb3VwXSc6ICdpc0dyb3VwJyxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LWdyb3VwLWxnXSc6ICdpc0xhcmdlR3JvdXAnLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtZ3JvdXAtd3JhcHBlci1sZ10nOiAnaXNMYXJnZUdyb3VwV3JhcHBlcicsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1hZmZpeC13cmFwcGVyLWxnXSc6ICdpc0xhcmdlQWZmaXgnLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtc2VhcmNoLWxnXSc6ICdpc0xhcmdlU2VhcmNoJyxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LWdyb3VwLXNtXSc6ICdpc1NtYWxsR3JvdXAnLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlci1zbV0nOiAnaXNTbWFsbEFmZml4JyxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LWdyb3VwLXdyYXBwZXItc21dJzogJ2lzU21hbGxHcm91cFdyYXBwZXInXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpJbnB1dEdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XHJcbiAgQENvbnRlbnRDaGlsZHJlbihOeklucHV0RGlyZWN0aXZlKSBsaXN0T2ZOeklucHV0RGlyZWN0aXZlOiBRdWVyeUxpc3Q8TnpJbnB1dERpcmVjdGl2ZT47XHJcbiAgcHJpdmF0ZSBfc2l6ZTogTnpTaXplTERTVHlwZSA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBuekFkZE9uQmVmb3JlSWNvbjogTmdDbGFzc1R5cGU7XHJcbiAgQElucHV0KCkgbnpBZGRPbkFmdGVySWNvbjogTmdDbGFzc1R5cGU7XHJcbiAgQElucHV0KCkgbnpQcmVmaXhJY29uOiBOZ0NsYXNzVHlwZTtcclxuICBASW5wdXQoKSBuelN1ZmZpeEljb246IE5nQ2xhc3NUeXBlO1xyXG4gIEBJbnB1dCgpIG56QWRkT25CZWZvcmU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56QWRkT25BZnRlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpQcmVmaXg6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56U3VmZml4OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTZWFyY2ggPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDb21wYWN0ID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIHNldCBuelNpemUodmFsdWU6IE56U2l6ZUxEU1R5cGUpIHtcclxuICAgIHRoaXMuX3NpemUgPSB2YWx1ZTtcclxuICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5JbnB1dFNpemUoKTtcclxuICB9XHJcblxyXG4gIGdldCBuelNpemUoKTogTnpTaXplTERTVHlwZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2l6ZTtcclxuICB9XHJcblxyXG4gIGdldCBpc0xhcmdlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubnpTaXplID09PSAnbGFyZ2UnO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzU21hbGwoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5uelNpemUgPT09ICdzbWFsbCc7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNBZmZpeCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhISh0aGlzLm56U3VmZml4IHx8IHRoaXMubnpQcmVmaXggfHwgdGhpcy5uelByZWZpeEljb24gfHwgdGhpcy5uelN1ZmZpeEljb24pO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzQWRkT24oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gISEodGhpcy5uekFkZE9uQWZ0ZXIgfHwgdGhpcy5uekFkZE9uQmVmb3JlIHx8IHRoaXMubnpBZGRPbkFmdGVySWNvbiB8fCB0aGlzLm56QWRkT25CZWZvcmVJY29uKTtcclxuICB9XHJcblxyXG4gIGdldCBpc0FmZml4V3JhcHBlcigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmlzQWZmaXggJiYgIXRoaXMuaXNBZGRPbjtcclxuICB9XHJcblxyXG4gIGdldCBpc0dyb3VwKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICF0aGlzLmlzQWZmaXggJiYgIXRoaXMuaXNBZGRPbjtcclxuICB9XHJcblxyXG4gIGdldCBpc0xhcmdlR3JvdXAoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pc0dyb3VwICYmIHRoaXMuaXNMYXJnZTtcclxuICB9XHJcblxyXG4gIGdldCBpc0xhcmdlR3JvdXBXcmFwcGVyKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNBZGRPbiAmJiB0aGlzLmlzTGFyZ2U7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNMYXJnZUFmZml4KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNBZmZpeFdyYXBwZXIgJiYgdGhpcy5pc0xhcmdlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzTGFyZ2VTZWFyY2goKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5uelNlYXJjaCAmJiB0aGlzLmlzTGFyZ2U7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNTbWFsbEdyb3VwKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNHcm91cCAmJiB0aGlzLmlzU21hbGw7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNTbWFsbEFmZml4KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNBZmZpeFdyYXBwZXIgJiYgdGhpcy5pc1NtYWxsO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzU21hbGxHcm91cFdyYXBwZXIoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pc0FkZE9uICYmIHRoaXMuaXNTbWFsbDtcclxuICB9XHJcblxyXG4gIGdldCBpc1NtYWxsU2VhcmNoKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubnpTZWFyY2ggJiYgdGhpcy5pc1NtYWxsO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ2hpbGRyZW5JbnB1dFNpemUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5saXN0T2ZOeklucHV0RGlyZWN0aXZlKSB7XHJcbiAgICAgIHRoaXMubGlzdE9mTnpJbnB1dERpcmVjdGl2ZS5mb3JFYWNoKGl0ZW0gPT4gKGl0ZW0ubnpTaXplID0gdGhpcy5uelNpemUpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5JbnB1dFNpemUoKTtcclxuICB9XHJcbn1cclxuIl19
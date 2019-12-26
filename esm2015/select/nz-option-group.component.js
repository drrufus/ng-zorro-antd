/**
 * @fileoverview added by tsickle
 * Generated from: nz-option-group.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ContentChildren, Input, QueryList, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NzOptionComponent } from './nz-option.component';
export class NzOptionGroupComponent {
    constructor() {
        this.isLabelString = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzLabel(value) {
        this.label = value;
        this.isLabelString = !(this.nzLabel instanceof TemplateRef);
    }
    /**
     * @return {?}
     */
    get nzLabel() {
        return this.label;
    }
}
NzOptionGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-option-group',
                exportAs: 'nzOptionGroup',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: "<ng-content></ng-content>"
            }] }
];
NzOptionGroupComponent.propDecorators = {
    listOfNzOptionComponent: [{ type: ContentChildren, args: [NzOptionComponent,] }],
    nzLabel: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NzOptionGroupComponent.prototype.isLabelString;
    /** @type {?} */
    NzOptionGroupComponent.prototype.label;
    /** @type {?} */
    NzOptionGroupComponent.prototype.listOfNzOptionComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotb3B0aW9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvc2VsZWN0LyIsInNvdXJjZXMiOlsibnotb3B0aW9uLWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsS0FBSyxFQUNMLFNBQVMsRUFDVCxXQUFXLEVBQ1gsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBUzFELE1BQU0sT0FBTyxzQkFBc0I7SUFQbkM7UUFRRSxrQkFBYSxHQUFHLEtBQUssQ0FBQztJQWF4QixDQUFDOzs7OztJQVRDLElBQ0ksT0FBTyxDQUFDLEtBQWlDO1FBQzNDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLFlBQVksV0FBVyxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7OztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7WUFwQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRSxlQUFlO2dCQUN6QixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLHFDQUErQzthQUNoRDs7O3NDQUlFLGVBQWUsU0FBQyxpQkFBaUI7c0JBRWpDLEtBQUs7Ozs7SUFKTiwrQ0FBc0I7O0lBQ3RCLHVDQUFrQzs7SUFDbEMseURBQTBGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgSW5wdXQsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE56T3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9uei1vcHRpb24uY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotb3B0aW9uLWdyb3VwJyxcclxuICBleHBvcnRBczogJ256T3B0aW9uR3JvdXAnLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LW9wdGlvbi1ncm91cC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE56T3B0aW9uR3JvdXBDb21wb25lbnQge1xyXG4gIGlzTGFiZWxTdHJpbmcgPSBmYWxzZTtcclxuICBsYWJlbDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQENvbnRlbnRDaGlsZHJlbihOek9wdGlvbkNvbXBvbmVudCkgbGlzdE9mTnpPcHRpb25Db21wb25lbnQ6IFF1ZXJ5TGlzdDxOek9wdGlvbkNvbXBvbmVudD47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56TGFiZWwodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XHJcbiAgICB0aGlzLmxhYmVsID0gdmFsdWU7XHJcbiAgICB0aGlzLmlzTGFiZWxTdHJpbmcgPSAhKHRoaXMubnpMYWJlbCBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKTtcclxuICB9XHJcblxyXG4gIGdldCBuekxhYmVsKCk6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLmxhYmVsO1xyXG4gIH1cclxufVxyXG4iXX0=
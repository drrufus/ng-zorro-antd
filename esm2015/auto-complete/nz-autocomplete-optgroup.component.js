/**
 * @fileoverview added by tsickle
 * Generated from: nz-autocomplete-optgroup.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
export class NzAutocompleteOptgroupComponent {
    constructor() { }
}
NzAutocompleteOptgroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-auto-optgroup',
                exportAs: 'nzAutoOptgroup',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: "<div class=\"ant-select-dropdown-menu-item-group-title\">\r\n  <ng-container *nzStringTemplateOutlet=\"nzLabel\">{{nzLabel}}</ng-container>\r\n</div>\r\n<ul class=\"ant-select-dropdown-menu-item-group-list\">\r\n  <ng-content select=\"nz-auto-option\"></ng-content>\r\n</ul>\r\n",
                host: {
                    role: 'group',
                    class: 'ant-select-dropdown-menu-item-group'
                }
            }] }
];
/** @nocollapse */
NzAutocompleteOptgroupComponent.ctorParameters = () => [];
NzAutocompleteOptgroupComponent.propDecorators = {
    nzLabel: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NzAutocompleteOptgroupComponent.prototype.nzLabel;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYXV0b2NvbXBsZXRlLW9wdGdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvYXV0by1jb21wbGV0ZS8iLCJzb3VyY2VzIjpbIm56LWF1dG9jb21wbGV0ZS1vcHRncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFjMUcsTUFBTSxPQUFPLCtCQUErQjtJQUcxQyxnQkFBZSxDQUFDOzs7WUFmakIsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsa1NBQXdEO2dCQUN4RCxJQUFJLEVBQUU7b0JBQ0osSUFBSSxFQUFFLE9BQU87b0JBQ2IsS0FBSyxFQUFFLHFDQUFxQztpQkFDN0M7YUFDRjs7Ozs7c0JBRUUsS0FBSzs7OztJQUFOLGtEQUE2QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei1hdXRvLW9wdGdyb3VwJyxcclxuICBleHBvcnRBczogJ256QXV0b09wdGdyb3VwJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1hdXRvY29tcGxldGUtb3B0Z3JvdXAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGhvc3Q6IHtcclxuICAgIHJvbGU6ICdncm91cCcsXHJcbiAgICBjbGFzczogJ2FudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtLWdyb3VwJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56QXV0b2NvbXBsZXRlT3B0Z3JvdXBDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIG56TGFiZWw6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcbn1cclxuIl19
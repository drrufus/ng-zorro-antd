/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzAddOnModule, NzNoAnimationModule } from 'ng-zorro-antd/core';
import { NzAutocompleteOptgroupComponent } from './nz-autocomplete-optgroup.component';
import { NzAutocompleteOptionComponent } from './nz-autocomplete-option.component';
import { NzAutocompleteTriggerDirective } from './nz-autocomplete-trigger.directive';
import { NzAutocompleteComponent } from './nz-autocomplete.component';
import * as i0 from "@angular/core";
var NzAutocompleteModule = /** @class */ (function () {
    function NzAutocompleteModule() {
    }
    /** @nocollapse */ NzAutocompleteModule.ɵmod = i0.ɵɵdefineNgModule({ type: NzAutocompleteModule });
    /** @nocollapse */ NzAutocompleteModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NzAutocompleteModule_Factory(t) { return new (t || NzAutocompleteModule)(); }, imports: [[CommonModule, OverlayModule, FormsModule, NzAddOnModule, NzNoAnimationModule]] });
    return NzAutocompleteModule;
}());
export { NzAutocompleteModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NzAutocompleteModule, { declarations: [NzAutocompleteComponent, NzAutocompleteOptionComponent, NzAutocompleteTriggerDirective, NzAutocompleteOptgroupComponent], imports: [CommonModule, OverlayModule, FormsModule, NzAddOnModule, NzNoAnimationModule], exports: [NzAutocompleteComponent, NzAutocompleteOptionComponent, NzAutocompleteTriggerDirective, NzAutocompleteOptgroupComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzAutocompleteModule, [{
        type: NgModule,
        args: [{
                declarations: [NzAutocompleteComponent, NzAutocompleteOptionComponent, NzAutocompleteTriggerDirective, NzAutocompleteOptgroupComponent],
                exports: [NzAutocompleteComponent, NzAutocompleteOptionComponent, NzAutocompleteTriggerDirective, NzAutocompleteOptgroupComponent],
                imports: [CommonModule, OverlayModule, FormsModule, NzAddOnModule, NzNoAnimationModule]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYXV0b2NvbXBsZXRlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvYXV0by1jb21wbGV0ZS8iLCJzb3VyY2VzIjpbIm56LWF1dG9jb21wbGV0ZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsYUFBYSxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFeEUsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDbkYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDckYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7O0FBRXRFO0lBQUE7S0FLb0M7NERBQXZCLG9CQUFvQjsySEFBcEIsb0JBQW9CLGtCQUZ0QixDQUFDLFlBQVksRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxtQkFBbUIsQ0FBQzsrQkF2QnpGO0NBeUJvQyxBQUxwQyxJQUtvQztTQUF2QixvQkFBb0I7d0ZBQXBCLG9CQUFvQixtQkFKaEIsdUJBQXVCLEVBQUUsNkJBQTZCLEVBQUUsOEJBQThCLEVBQUUsK0JBQStCLGFBRTVILFlBQVksRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxtQkFBbUIsYUFENUUsdUJBQXVCLEVBQUUsNkJBQTZCLEVBQUUsOEJBQThCLEVBQUUsK0JBQStCO2tEQUd0SCxvQkFBb0I7Y0FMaEMsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLHVCQUF1QixFQUFFLDZCQUE2QixFQUFFLDhCQUE4QixFQUFFLCtCQUErQixDQUFDO2dCQUN2SSxPQUFPLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSw2QkFBNkIsRUFBRSw4QkFBOEIsRUFBRSwrQkFBK0IsQ0FBQztnQkFDbEksT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLG1CQUFtQixDQUFDO2FBQ3hGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IE56QWRkT25Nb2R1bGUsIE56Tm9BbmltYXRpb25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpBdXRvY29tcGxldGVPcHRncm91cENvbXBvbmVudCB9IGZyb20gJy4vbnotYXV0b2NvbXBsZXRlLW9wdGdyb3VwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9uei1hdXRvY29tcGxldGUtb3B0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56QXV0b2NvbXBsZXRlVHJpZ2dlckRpcmVjdGl2ZSB9IGZyb20gJy4vbnotYXV0b2NvbXBsZXRlLXRyaWdnZXIuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTnpBdXRvY29tcGxldGVDb21wb25lbnQgfSBmcm9tICcuL256LWF1dG9jb21wbGV0ZS5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtOekF1dG9jb21wbGV0ZUNvbXBvbmVudCwgTnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQsIE56QXV0b2NvbXBsZXRlVHJpZ2dlckRpcmVjdGl2ZSwgTnpBdXRvY29tcGxldGVPcHRncm91cENvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW056QXV0b2NvbXBsZXRlQ29tcG9uZW50LCBOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudCwgTnpBdXRvY29tcGxldGVUcmlnZ2VyRGlyZWN0aXZlLCBOekF1dG9jb21wbGV0ZU9wdGdyb3VwQ29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBPdmVybGF5TW9kdWxlLCBGb3Jtc01vZHVsZSwgTnpBZGRPbk1vZHVsZSwgTnpOb0FuaW1hdGlvbk1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56QXV0b2NvbXBsZXRlTW9kdWxlIHt9XHJcbiJdfQ==
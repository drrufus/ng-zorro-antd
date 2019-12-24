/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { LayoutModule } from '@angular/cdk/layout';
import { PlatformModule } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAddOnModule } from 'ng-zorro-antd/core';
import { NzFormControlComponent } from './nz-form-control.component';
import { NzFormExplainComponent } from './nz-form-explain.component';
import { NzFormExtraComponent } from './nz-form-extra.component';
import { NzFormItemComponent } from './nz-form-item.component';
import { NzFormLabelComponent } from './nz-form-label.component';
import { NzFormSplitComponent } from './nz-form-split.component';
import { NzFormTextComponent } from './nz-form-text.component';
import { NzFormDirective } from './nz-form.directive';
import * as i0 from "@angular/core";
var NzFormModule = /** @class */ (function () {
    function NzFormModule() {
    }
    /** @nocollapse */ NzFormModule.ɵmod = i0.ɵɵdefineNgModule({ type: NzFormModule });
    /** @nocollapse */ NzFormModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NzFormModule_Factory(t) { return new (t || NzFormModule)(); }, imports: [[CommonModule, NzGridModule, NzIconModule, LayoutModule, PlatformModule, NzAddOnModule]] });
    return NzFormModule;
}());
export { NzFormModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NzFormModule, { declarations: [NzFormExtraComponent,
        NzFormLabelComponent,
        NzFormDirective,
        NzFormItemComponent,
        NzFormControlComponent,
        NzFormExplainComponent,
        NzFormTextComponent,
        NzFormSplitComponent], imports: [CommonModule, NzGridModule, NzIconModule, LayoutModule, PlatformModule, NzAddOnModule], exports: [NzFormExtraComponent,
        NzFormLabelComponent,
        NzFormDirective,
        NzFormItemComponent,
        NzFormControlComponent,
        NzFormExplainComponent,
        NzFormTextComponent,
        NzFormSplitComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzFormModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    NzFormExtraComponent,
                    NzFormLabelComponent,
                    NzFormDirective,
                    NzFormItemComponent,
                    NzFormControlComponent,
                    NzFormExplainComponent,
                    NzFormTextComponent,
                    NzFormSplitComponent
                ],
                exports: [
                    NzFormExtraComponent,
                    NzFormLabelComponent,
                    NzFormDirective,
                    NzFormItemComponent,
                    NzFormControlComponent,
                    NzFormExplainComponent,
                    NzFormTextComponent,
                    NzFormSplitComponent
                ],
                imports: [CommonModule, NzGridModule, NzIconModule, LayoutModule, PlatformModule, NzAddOnModule]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZm9ybS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2Zvcm0vIiwic291cmNlcyI6WyJuei1mb3JtLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFFdEQ7SUFBQTtLQXVCNEI7b0RBQWYsWUFBWTsyR0FBWixZQUFZLGtCQUZkLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxhQUFhLENBQUM7dUJBL0NsRztDQWlENEIsQUF2QjVCLElBdUI0QjtTQUFmLFlBQVk7d0ZBQVosWUFBWSxtQkFyQnJCLG9CQUFvQjtRQUNwQixvQkFBb0I7UUFDcEIsZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixzQkFBc0I7UUFDdEIsc0JBQXNCO1FBQ3RCLG1CQUFtQjtRQUNuQixvQkFBb0IsYUFZWixZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLGFBQWEsYUFUN0Ysb0JBQW9CO1FBQ3BCLG9CQUFvQjtRQUNwQixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLHNCQUFzQjtRQUN0QixzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLG9CQUFvQjtrREFJWCxZQUFZO2NBdkJ4QixRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLG9CQUFvQjtvQkFDcEIsb0JBQW9CO29CQUNwQixlQUFlO29CQUNmLG1CQUFtQjtvQkFDbkIsc0JBQXNCO29CQUN0QixzQkFBc0I7b0JBQ3RCLG1CQUFtQjtvQkFDbkIsb0JBQW9CO2lCQUNyQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1Asb0JBQW9CO29CQUNwQixvQkFBb0I7b0JBQ3BCLGVBQWU7b0JBQ2YsbUJBQW1CO29CQUNuQixzQkFBc0I7b0JBQ3RCLHNCQUFzQjtvQkFDdEIsbUJBQW1CO29CQUNuQixvQkFBb0I7aUJBQ3JCO2dCQUNELE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsYUFBYSxDQUFDO2FBQ2pHIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBMYXlvdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvbGF5b3V0JztcclxuaW1wb3J0IHsgUGxhdGZvcm1Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpHcmlkTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9ncmlkJztcclxuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcclxuXHJcbmltcG9ydCB7IE56QWRkT25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOekZvcm1Db250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9uei1mb3JtLWNvbnRyb2wuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpGb3JtRXhwbGFpbkNvbXBvbmVudCB9IGZyb20gJy4vbnotZm9ybS1leHBsYWluLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56Rm9ybUV4dHJhQ29tcG9uZW50IH0gZnJvbSAnLi9uei1mb3JtLWV4dHJhLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56Rm9ybUl0ZW1Db21wb25lbnQgfSBmcm9tICcuL256LWZvcm0taXRlbS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOekZvcm1MYWJlbENvbXBvbmVudCB9IGZyb20gJy4vbnotZm9ybS1sYWJlbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOekZvcm1TcGxpdENvbXBvbmVudCB9IGZyb20gJy4vbnotZm9ybS1zcGxpdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOekZvcm1UZXh0Q29tcG9uZW50IH0gZnJvbSAnLi9uei1mb3JtLXRleHQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpGb3JtRGlyZWN0aXZlIH0gZnJvbSAnLi9uei1mb3JtLmRpcmVjdGl2ZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTnpGb3JtRXh0cmFDb21wb25lbnQsXHJcbiAgICBOekZvcm1MYWJlbENvbXBvbmVudCxcclxuICAgIE56Rm9ybURpcmVjdGl2ZSxcclxuICAgIE56Rm9ybUl0ZW1Db21wb25lbnQsXHJcbiAgICBOekZvcm1Db250cm9sQ29tcG9uZW50LFxyXG4gICAgTnpGb3JtRXhwbGFpbkNvbXBvbmVudCxcclxuICAgIE56Rm9ybVRleHRDb21wb25lbnQsXHJcbiAgICBOekZvcm1TcGxpdENvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgTnpGb3JtRXh0cmFDb21wb25lbnQsXHJcbiAgICBOekZvcm1MYWJlbENvbXBvbmVudCxcclxuICAgIE56Rm9ybURpcmVjdGl2ZSxcclxuICAgIE56Rm9ybUl0ZW1Db21wb25lbnQsXHJcbiAgICBOekZvcm1Db250cm9sQ29tcG9uZW50LFxyXG4gICAgTnpGb3JtRXhwbGFpbkNvbXBvbmVudCxcclxuICAgIE56Rm9ybVRleHRDb21wb25lbnQsXHJcbiAgICBOekZvcm1TcGxpdENvbXBvbmVudFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTnpHcmlkTW9kdWxlLCBOekljb25Nb2R1bGUsIExheW91dE1vZHVsZSwgUGxhdGZvcm1Nb2R1bGUsIE56QWRkT25Nb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekZvcm1Nb2R1bGUge31cclxuIl19
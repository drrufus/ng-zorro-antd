/**
 * @fileoverview added by tsickle
 * Generated from: nz-form.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class NzFormModule {
}
NzFormModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZm9ybS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2Zvcm0vIiwic291cmNlcyI6WyJuei1mb3JtLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQXlCdEQsTUFBTSxPQUFPLFlBQVk7OztZQXZCeEIsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixvQkFBb0I7b0JBQ3BCLG9CQUFvQjtvQkFDcEIsZUFBZTtvQkFDZixtQkFBbUI7b0JBQ25CLHNCQUFzQjtvQkFDdEIsc0JBQXNCO29CQUN0QixtQkFBbUI7b0JBQ25CLG9CQUFvQjtpQkFDckI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLG9CQUFvQjtvQkFDcEIsb0JBQW9CO29CQUNwQixlQUFlO29CQUNmLG1CQUFtQjtvQkFDbkIsc0JBQXNCO29CQUN0QixzQkFBc0I7b0JBQ3RCLG1CQUFtQjtvQkFDbkIsb0JBQW9CO2lCQUNyQjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLGFBQWEsQ0FBQzthQUNqRyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgTGF5b3V0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2xheW91dCc7XHJcbmltcG9ydCB7IFBsYXRmb3JtTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56R3JpZE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvZ3JpZCc7XHJcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XHJcblxyXG5pbXBvcnQgeyBOekFkZE9uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpGb3JtQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vbnotZm9ybS1jb250cm9sLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56Rm9ybUV4cGxhaW5Db21wb25lbnQgfSBmcm9tICcuL256LWZvcm0tZXhwbGFpbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOekZvcm1FeHRyYUNvbXBvbmVudCB9IGZyb20gJy4vbnotZm9ybS1leHRyYS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOekZvcm1JdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9uei1mb3JtLWl0ZW0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpGb3JtTGFiZWxDb21wb25lbnQgfSBmcm9tICcuL256LWZvcm0tbGFiZWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpGb3JtU3BsaXRDb21wb25lbnQgfSBmcm9tICcuL256LWZvcm0tc3BsaXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpGb3JtVGV4dENvbXBvbmVudCB9IGZyb20gJy4vbnotZm9ybS10ZXh0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56Rm9ybURpcmVjdGl2ZSB9IGZyb20gJy4vbnotZm9ybS5kaXJlY3RpdmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE56Rm9ybUV4dHJhQ29tcG9uZW50LFxyXG4gICAgTnpGb3JtTGFiZWxDb21wb25lbnQsXHJcbiAgICBOekZvcm1EaXJlY3RpdmUsXHJcbiAgICBOekZvcm1JdGVtQ29tcG9uZW50LFxyXG4gICAgTnpGb3JtQ29udHJvbENvbXBvbmVudCxcclxuICAgIE56Rm9ybUV4cGxhaW5Db21wb25lbnQsXHJcbiAgICBOekZvcm1UZXh0Q29tcG9uZW50LFxyXG4gICAgTnpGb3JtU3BsaXRDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIE56Rm9ybUV4dHJhQ29tcG9uZW50LFxyXG4gICAgTnpGb3JtTGFiZWxDb21wb25lbnQsXHJcbiAgICBOekZvcm1EaXJlY3RpdmUsXHJcbiAgICBOekZvcm1JdGVtQ29tcG9uZW50LFxyXG4gICAgTnpGb3JtQ29udHJvbENvbXBvbmVudCxcclxuICAgIE56Rm9ybUV4cGxhaW5Db21wb25lbnQsXHJcbiAgICBOekZvcm1UZXh0Q29tcG9uZW50LFxyXG4gICAgTnpGb3JtU3BsaXRDb21wb25lbnRcclxuICBdLFxyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE56R3JpZE1vZHVsZSwgTnpJY29uTW9kdWxlLCBMYXlvdXRNb2R1bGUsIFBsYXRmb3JtTW9kdWxlLCBOekFkZE9uTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpGb3JtTW9kdWxlIHt9XHJcbiJdfQ==
/**
 * @fileoverview added by tsickle
 * Generated from: nz-typography.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { PlatformModule } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzCopyToClipboardServiceModule, NzTransButtonModule } from 'ng-zorro-antd/core';
import { NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTextCopyComponent } from './nz-text-copy.component';
import { NzTextEditComponent } from './nz-text-edit.component';
import { NzTypographyComponent } from './nz-typography.component';
var NzTypographyModule = /** @class */ (function () {
    function NzTypographyModule() {
    }
    NzTypographyModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        NzIconModule,
                        NzToolTipModule,
                        NzInputModule,
                        NzI18nModule,
                        NzTransButtonModule,
                        NzCopyToClipboardServiceModule
                    ],
                    exports: [NzTypographyComponent, NzTextCopyComponent, NzTextEditComponent, PlatformModule],
                    declarations: [NzTypographyComponent, NzTextCopyComponent, NzTextEditComponent]
                },] }
    ];
    return NzTypographyModule;
}());
export { NzTypographyModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHlwb2dyYXBoeS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3R5cG9ncmFwaHkvIiwic291cmNlcyI6WyJuei10eXBvZ3JhcGh5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFPQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLDhCQUE4QixFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDekYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXhELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRWxFO0lBQUE7SUFhaUMsQ0FBQzs7Z0JBYmpDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixZQUFZO3dCQUNaLGVBQWU7d0JBQ2YsYUFBYTt3QkFDYixZQUFZO3dCQUNaLG1CQUFtQjt3QkFDbkIsOEJBQThCO3FCQUMvQjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRSxjQUFjLENBQUM7b0JBQzFGLFlBQVksRUFBRSxDQUFDLHFCQUFxQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixDQUFDO2lCQUNoRjs7SUFDZ0MseUJBQUM7Q0FBQSxBQWJsQyxJQWFrQztTQUFyQixrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgUGxhdGZvcm1Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpDb3B5VG9DbGlwYm9hcmRTZXJ2aWNlTW9kdWxlLCBOelRyYW5zQnV0dG9uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpJMThuTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcclxuaW1wb3J0IHsgTnpJbnB1dE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaW5wdXQnO1xyXG5pbXBvcnQgeyBOelRvb2xUaXBNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3Rvb2x0aXAnO1xyXG5cclxuaW1wb3J0IHsgTnpUZXh0Q29weUNvbXBvbmVudCB9IGZyb20gJy4vbnotdGV4dC1jb3B5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56VGV4dEVkaXRDb21wb25lbnQgfSBmcm9tICcuL256LXRleHQtZWRpdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOelR5cG9ncmFwaHlDb21wb25lbnQgfSBmcm9tICcuL256LXR5cG9ncmFwaHkuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgTnpJY29uTW9kdWxlLFxyXG4gICAgTnpUb29sVGlwTW9kdWxlLFxyXG4gICAgTnpJbnB1dE1vZHVsZSxcclxuICAgIE56STE4bk1vZHVsZSxcclxuICAgIE56VHJhbnNCdXR0b25Nb2R1bGUsXHJcbiAgICBOekNvcHlUb0NsaXBib2FyZFNlcnZpY2VNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtOelR5cG9ncmFwaHlDb21wb25lbnQsIE56VGV4dENvcHlDb21wb25lbnQsIE56VGV4dEVkaXRDb21wb25lbnQsIFBsYXRmb3JtTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtOelR5cG9ncmFwaHlDb21wb25lbnQsIE56VGV4dENvcHlDb21wb25lbnQsIE56VGV4dEVkaXRDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelR5cG9ncmFwaHlNb2R1bGUge31cclxuIl19
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
import * as i0 from "@angular/core";
var NzTypographyModule = /** @class */ (function () {
    function NzTypographyModule() {
    }
    /** @nocollapse */ NzTypographyModule.ɵmod = i0.ɵɵdefineNgModule({ type: NzTypographyModule });
    /** @nocollapse */ NzTypographyModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NzTypographyModule_Factory(t) { return new (t || NzTypographyModule)(); }, imports: [[CommonModule, NzIconModule, NzToolTipModule, NzInputModule, NzI18nModule, NzTransButtonModule, NzCopyToClipboardServiceModule],
            PlatformModule] });
    return NzTypographyModule;
}());
export { NzTypographyModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NzTypographyModule, { declarations: [NzTypographyComponent, NzTextCopyComponent, NzTextEditComponent], imports: [CommonModule, NzIconModule, NzToolTipModule, NzInputModule, NzI18nModule, NzTransButtonModule, NzCopyToClipboardServiceModule], exports: [NzTypographyComponent, NzTextCopyComponent, NzTextEditComponent, PlatformModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzTypographyModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NzIconModule, NzToolTipModule, NzInputModule, NzI18nModule, NzTransButtonModule, NzCopyToClipboardServiceModule],
                exports: [NzTypographyComponent, NzTextCopyComponent, NzTextEditComponent, PlatformModule],
                declarations: [NzTypographyComponent, NzTextCopyComponent, NzTextEditComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHlwb2dyYXBoeS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3R5cG9ncmFwaHkvIiwic291cmNlcyI6WyJuei10eXBvZ3JhcGh5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFDSCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLDhCQUE4QixFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDekYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXhELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDOztBQUVsRTtJQUFBO0tBS2tDOzBEQUFyQixrQkFBa0I7dUhBQWxCLGtCQUFrQixrQkFKcEIsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixFQUFFLDhCQUE4QixDQUFDO1lBQzdELGNBQWM7NkJBdkIzRjtDQTBCa0MsQUFMbEMsSUFLa0M7U0FBckIsa0JBQWtCO3dGQUFsQixrQkFBa0IsbUJBRmQscUJBQXFCLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLGFBRnBFLFlBQVksRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsbUJBQW1CLEVBQUUsOEJBQThCLGFBQzdILHFCQUFxQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLGNBQWM7a0RBRzlFLGtCQUFrQjtjQUw5QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxtQkFBbUIsRUFBRSw4QkFBOEIsQ0FBQztnQkFDeEksT0FBTyxFQUFFLENBQUMscUJBQXFCLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsY0FBYyxDQUFDO2dCQUMxRixZQUFZLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUIsQ0FBQzthQUNoRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5pbXBvcnQgeyBQbGF0Zm9ybU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOekNvcHlUb0NsaXBib2FyZFNlcnZpY2VNb2R1bGUsIE56VHJhbnNCdXR0b25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOekkxOG5Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5pbXBvcnQgeyBOekljb25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2ljb24nO1xyXG5pbXBvcnQgeyBOeklucHV0TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pbnB1dCc7XHJcbmltcG9ydCB7IE56VG9vbFRpcE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvdG9vbHRpcCc7XHJcblxyXG5pbXBvcnQgeyBOelRleHRDb3B5Q29tcG9uZW50IH0gZnJvbSAnLi9uei10ZXh0LWNvcHkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpUZXh0RWRpdENvbXBvbmVudCB9IGZyb20gJy4vbnotdGV4dC1lZGl0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56VHlwb2dyYXBoeUNvbXBvbmVudCB9IGZyb20gJy4vbnotdHlwb2dyYXBoeS5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBOekljb25Nb2R1bGUsIE56VG9vbFRpcE1vZHVsZSwgTnpJbnB1dE1vZHVsZSwgTnpJMThuTW9kdWxlLCBOelRyYW5zQnV0dG9uTW9kdWxlLCBOekNvcHlUb0NsaXBib2FyZFNlcnZpY2VNb2R1bGVdLFxyXG4gIGV4cG9ydHM6IFtOelR5cG9ncmFwaHlDb21wb25lbnQsIE56VGV4dENvcHlDb21wb25lbnQsIE56VGV4dEVkaXRDb21wb25lbnQsIFBsYXRmb3JtTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtOelR5cG9ncmFwaHlDb21wb25lbnQsIE56VGV4dENvcHlDb21wb25lbnQsIE56VGV4dEVkaXRDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelR5cG9ncmFwaHlNb2R1bGUge31cclxuIl19
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { OverlayModule } from '@angular/cdk/overlay';
import { PlatformModule } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAddOnModule, NzNoAnimationModule } from 'ng-zorro-antd/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuDividerDirective } from './nz-menu-divider.directive';
import { NzMenuGroupComponent } from './nz-menu-group.component';
import { NzMenuItemDirective } from './nz-menu-item.directive';
import { NzMenuDirective } from './nz-menu.directive';
import { NzSubMenuComponent } from './nz-submenu.component';
import * as i0 from "@angular/core";
var NzMenuModule = /** @class */ (function () {
    function NzMenuModule() {
    }
    /** @nocollapse */ NzMenuModule.ɵmod = i0.ɵɵdefineNgModule({ type: NzMenuModule });
    /** @nocollapse */ NzMenuModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NzMenuModule_Factory(t) { return new (t || NzMenuModule)(); }, imports: [[CommonModule, FormsModule, PlatformModule, NzButtonModule, OverlayModule, NzIconModule, NzNoAnimationModule, NzAddOnModule]] });
    return NzMenuModule;
}());
export { NzMenuModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NzMenuModule, { declarations: [NzMenuDirective, NzMenuItemDirective, NzSubMenuComponent, NzMenuDividerDirective, NzMenuGroupComponent], imports: [CommonModule, FormsModule, PlatformModule, NzButtonModule, OverlayModule, NzIconModule, NzNoAnimationModule, NzAddOnModule], exports: [NzMenuDirective, NzMenuItemDirective, NzSubMenuComponent, NzMenuDividerDirective, NzMenuGroupComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzMenuModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule, PlatformModule, NzButtonModule, OverlayModule, NzIconModule, NzNoAnimationModule, NzAddOnModule],
                declarations: [NzMenuDirective, NzMenuItemDirective, NzSubMenuComponent, NzMenuDividerDirective, NzMenuGroupComponent],
                exports: [NzMenuDirective, NzMenuItemDirective, NzSubMenuComponent, NzMenuDividerDirective, NzMenuGroupComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL21lbnUvIiwic291cmNlcyI6WyJuei1tZW51Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFDSCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBRTVEO0lBQUE7S0FLNEI7b0RBQWYsWUFBWTsyR0FBWixZQUFZLGtCQUpkLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsbUJBQW1CLEVBQUUsYUFBYSxDQUFDO3VCQXZCdkk7Q0EyQjRCLEFBTDVCLElBSzRCO1NBQWYsWUFBWTt3RkFBWixZQUFZLG1CQUhSLGVBQWUsRUFBRSxtQkFBbUIsRUFBRSxrQkFBa0IsRUFBRSxzQkFBc0IsRUFBRSxvQkFBb0IsYUFEM0csWUFBWSxFQUFFLFdBQVcsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsbUJBQW1CLEVBQUUsYUFBYSxhQUUxSCxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsa0JBQWtCLEVBQUUsc0JBQXNCLEVBQUUsb0JBQW9CO2tEQUVyRyxZQUFZO2NBTHhCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxtQkFBbUIsRUFBRSxhQUFhLENBQUM7Z0JBQ3JJLFlBQVksRUFBRSxDQUFDLGVBQWUsRUFBRSxtQkFBbUIsRUFBRSxrQkFBa0IsRUFBRSxzQkFBc0IsRUFBRSxvQkFBb0IsQ0FBQztnQkFDdEgsT0FBTyxFQUFFLENBQUMsZUFBZSxFQUFFLG1CQUFtQixFQUFFLGtCQUFrQixFQUFFLHNCQUFzQixFQUFFLG9CQUFvQixDQUFDO2FBQ2xIIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IFBsYXRmb3JtTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE56QnV0dG9uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9idXR0b24nO1xyXG5pbXBvcnQgeyBOekFkZE9uTW9kdWxlLCBOek5vQW5pbWF0aW9uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcclxuXHJcbmltcG9ydCB7IE56TWVudURpdmlkZXJEaXJlY3RpdmUgfSBmcm9tICcuL256LW1lbnUtZGl2aWRlci5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBOek1lbnVHcm91cENvbXBvbmVudCB9IGZyb20gJy4vbnotbWVudS1ncm91cC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOek1lbnVJdGVtRGlyZWN0aXZlIH0gZnJvbSAnLi9uei1tZW51LWl0ZW0uZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTnpNZW51RGlyZWN0aXZlIH0gZnJvbSAnLi9uei1tZW51LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE56U3ViTWVudUNvbXBvbmVudCB9IGZyb20gJy4vbnotc3VibWVudS5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgUGxhdGZvcm1Nb2R1bGUsIE56QnV0dG9uTW9kdWxlLCBPdmVybGF5TW9kdWxlLCBOekljb25Nb2R1bGUsIE56Tm9BbmltYXRpb25Nb2R1bGUsIE56QWRkT25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW056TWVudURpcmVjdGl2ZSwgTnpNZW51SXRlbURpcmVjdGl2ZSwgTnpTdWJNZW51Q29tcG9uZW50LCBOek1lbnVEaXZpZGVyRGlyZWN0aXZlLCBOek1lbnVHcm91cENvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW056TWVudURpcmVjdGl2ZSwgTnpNZW51SXRlbURpcmVjdGl2ZSwgTnpTdWJNZW51Q29tcG9uZW50LCBOek1lbnVEaXZpZGVyRGlyZWN0aXZlLCBOek1lbnVHcm91cENvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56TWVudU1vZHVsZSB7fVxyXG4iXX0=
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
import { NzOverlayModule } from 'ng-zorro-antd/core';
import { NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTimePickerPanelComponent } from './nz-time-picker-panel.component';
import { NzTimePickerComponent } from './nz-time-picker.component';
import { NzTimeValueAccessorDirective } from './nz-time-value-accessor.directive';
import * as i0 from "@angular/core";
var NzTimePickerModule = /** @class */ (function () {
    function NzTimePickerModule() {
    }
    /** @nocollapse */ NzTimePickerModule.ɵmod = i0.ɵɵdefineNgModule({ type: NzTimePickerModule });
    /** @nocollapse */ NzTimePickerModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NzTimePickerModule_Factory(t) { return new (t || NzTimePickerModule)(); }, imports: [[CommonModule, FormsModule, NzI18nModule, OverlayModule, NzIconModule, NzOverlayModule]] });
    return NzTimePickerModule;
}());
export { NzTimePickerModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NzTimePickerModule, { declarations: [NzTimePickerComponent, NzTimePickerPanelComponent, NzTimeValueAccessorDirective], imports: [CommonModule, FormsModule, NzI18nModule, OverlayModule, NzIconModule, NzOverlayModule], exports: [NzTimePickerPanelComponent, NzTimePickerComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzTimePickerModule, [{
        type: NgModule,
        args: [{
                declarations: [NzTimePickerComponent, NzTimePickerPanelComponent, NzTimeValueAccessorDirective],
                exports: [NzTimePickerPanelComponent, NzTimePickerComponent],
                imports: [CommonModule, FormsModule, NzI18nModule, OverlayModule, NzIconModule, NzOverlayModule]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGltZS1waWNrZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90aW1lLXBpY2tlci8iLCJzb3VyY2VzIjpbIm56LXRpbWUtcGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOztBQUVsRjtJQUFBO0tBS2tDOzBEQUFyQixrQkFBa0I7dUhBQWxCLGtCQUFrQixrQkFGcEIsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLGVBQWUsQ0FBQzs2QkF4QmxHO0NBMEJrQyxBQUxsQyxJQUtrQztTQUFyQixrQkFBa0I7d0ZBQWxCLGtCQUFrQixtQkFKZCxxQkFBcUIsRUFBRSwwQkFBMEIsRUFBRSw0QkFBNEIsYUFFcEYsWUFBWSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxlQUFlLGFBRHJGLDBCQUEwQixFQUFFLHFCQUFxQjtrREFHaEQsa0JBQWtCO2NBTDlCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSwwQkFBMEIsRUFBRSw0QkFBNEIsQ0FBQztnQkFDL0YsT0FBTyxFQUFFLENBQUMsMEJBQTBCLEVBQUUscUJBQXFCLENBQUM7Z0JBQzVELE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsZUFBZSxDQUFDO2FBQ2pHIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTnpPdmVybGF5TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56STE4bk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XHJcblxyXG5pbXBvcnQgeyBOelRpbWVQaWNrZXJQYW5lbENvbXBvbmVudCB9IGZyb20gJy4vbnotdGltZS1waWNrZXItcGFuZWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpUaW1lUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9uei10aW1lLXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOelRpbWVWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlIH0gZnJvbSAnLi9uei10aW1lLXZhbHVlLWFjY2Vzc29yLmRpcmVjdGl2ZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW056VGltZVBpY2tlckNvbXBvbmVudCwgTnpUaW1lUGlja2VyUGFuZWxDb21wb25lbnQsIE56VGltZVZhbHVlQWNjZXNzb3JEaXJlY3RpdmVdLFxyXG4gIGV4cG9ydHM6IFtOelRpbWVQaWNrZXJQYW5lbENvbXBvbmVudCwgTnpUaW1lUGlja2VyQ29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgTnpJMThuTW9kdWxlLCBPdmVybGF5TW9kdWxlLCBOekljb25Nb2R1bGUsIE56T3ZlcmxheU1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56VGltZVBpY2tlck1vZHVsZSB7fVxyXG4iXX0=
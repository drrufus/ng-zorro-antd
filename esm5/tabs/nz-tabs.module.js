/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ObserversModule } from '@angular/cdk/observers';
import { PlatformModule } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzAddOnModule } from 'ng-zorro-antd/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTabBodyComponent } from './nz-tab-body.component';
import { NzTabLabelDirective } from './nz-tab-label.directive';
import { NzTabLinkDirective } from './nz-tab-link.directive';
import { NzTabComponent } from './nz-tab.component';
import { NzTabDirective } from './nz-tab.directive';
import { NzTabsInkBarDirective } from './nz-tabs-ink-bar.directive';
import { NzTabsNavComponent } from './nz-tabs-nav.component';
import { NzTabSetComponent } from './nz-tabset.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/cdk/observers";
import * as i3 from "ng-zorro-antd/icon";
import * as i4 from "ng-zorro-antd/core";
var NzTabsModule = /** @class */ (function () {
    function NzTabsModule() {
    }
    /** @nocollapse */ NzTabsModule.ɵmod = i0.ɵɵdefineNgModule({ type: NzTabsModule });
    /** @nocollapse */ NzTabsModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NzTabsModule_Factory(t) { return new (t || NzTabsModule)(); }, imports: [[CommonModule, ObserversModule, NzIconModule, NzAddOnModule, PlatformModule]] });
    return NzTabsModule;
}());
export { NzTabsModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NzTabsModule, { declarations: [NzTabComponent,
        NzTabDirective,
        NzTabSetComponent,
        NzTabsNavComponent,
        NzTabLabelDirective,
        NzTabsInkBarDirective,
        NzTabBodyComponent,
        NzTabLinkDirective], imports: [CommonModule, ObserversModule, NzIconModule, NzAddOnModule, PlatformModule], exports: [NzTabComponent,
        NzTabDirective,
        NzTabSetComponent,
        NzTabsNavComponent,
        NzTabLabelDirective,
        NzTabsInkBarDirective,
        NzTabBodyComponent,
        NzTabLinkDirective] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzTabsModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    NzTabComponent,
                    NzTabDirective,
                    NzTabSetComponent,
                    NzTabsNavComponent,
                    NzTabLabelDirective,
                    NzTabsInkBarDirective,
                    NzTabBodyComponent,
                    NzTabLinkDirective
                ],
                exports: [
                    NzTabComponent,
                    NzTabDirective,
                    NzTabSetComponent,
                    NzTabsNavComponent,
                    NzTabLabelDirective,
                    NzTabsInkBarDirective,
                    NzTabBodyComponent,
                    NzTabLinkDirective
                ],
                imports: [CommonModule, ObserversModule, NzIconModule, NzAddOnModule, PlatformModule]
            }]
    }], null, null); })();
i0.ɵɵsetComponentScope(NzTabSetComponent, [NzTabComponent,
    NzTabDirective,
    NzTabSetComponent,
    NzTabsNavComponent,
    NzTabLabelDirective,
    NzTabsInkBarDirective,
    NzTabBodyComponent,
    NzTabLinkDirective, i1.NgClass, i1.NgComponentOutlet, i1.NgForOf, i1.NgIf, i1.NgTemplateOutlet, i1.NgStyle, i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i1.NgPlural, i1.NgPluralCase, i2.CdkObserveContent, i3.NzIconDirective, i4.NzStringTemplateOutletDirective, i4.NzClassListAddDirective], [i1.AsyncPipe, i1.UpperCasePipe, i1.LowerCasePipe, i1.JsonPipe, i1.SlicePipe, i1.DecimalPipe, i1.PercentPipe, i1.TitleCasePipe, i1.CurrencyPipe, i1.DatePipe, i1.I18nPluralPipe, i1.I18nSelectPipe, i1.KeyValuePipe]);
i0.ɵɵsetComponentScope(NzTabsNavComponent, [NzTabComponent,
    NzTabDirective,
    NzTabSetComponent,
    NzTabsNavComponent,
    NzTabLabelDirective,
    NzTabsInkBarDirective,
    NzTabBodyComponent,
    NzTabLinkDirective, i1.NgClass, i1.NgComponentOutlet, i1.NgForOf, i1.NgIf, i1.NgTemplateOutlet, i1.NgStyle, i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i1.NgPlural, i1.NgPluralCase, i2.CdkObserveContent, i3.NzIconDirective, i4.NzStringTemplateOutletDirective, i4.NzClassListAddDirective], [i1.AsyncPipe, i1.UpperCasePipe, i1.LowerCasePipe, i1.JsonPipe, i1.SlicePipe, i1.DecimalPipe, i1.PercentPipe, i1.TitleCasePipe, i1.CurrencyPipe, i1.DatePipe, i1.I18nPluralPipe, i1.I18nSelectPipe, i1.KeyValuePipe]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFicy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3RhYnMvIiwic291cmNlcyI6WyJuei10YWJzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFDSCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDN0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7O0FBRTFEO0lBQUE7S0F1QjRCO29EQUFmLFlBQVk7MkdBQVosWUFBWSxrQkFGZCxDQUFDLFlBQVksRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxjQUFjLENBQUM7dUJBNUN2RjtDQThDNEIsQUF2QjVCLElBdUI0QjtTQUFmLFlBQVk7d0ZBQVosWUFBWSxtQkFyQnJCLGNBQWM7UUFDZCxjQUFjO1FBQ2QsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIscUJBQXFCO1FBQ3JCLGtCQUFrQjtRQUNsQixrQkFBa0IsYUFZVixZQUFZLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsY0FBYyxhQVRsRixjQUFjO1FBQ2QsY0FBYztRQUNkLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLHFCQUFxQjtRQUNyQixrQkFBa0I7UUFDbEIsa0JBQWtCO2tEQUlULFlBQVk7Y0F2QnhCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osY0FBYztvQkFDZCxjQUFjO29CQUNkLGlCQUFpQjtvQkFDakIsa0JBQWtCO29CQUNsQixtQkFBbUI7b0JBQ25CLHFCQUFxQjtvQkFDckIsa0JBQWtCO29CQUNsQixrQkFBa0I7aUJBQ25CO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxjQUFjO29CQUNkLGNBQWM7b0JBQ2QsaUJBQWlCO29CQUNqQixrQkFBa0I7b0JBQ2xCLG1CQUFtQjtvQkFDbkIscUJBQXFCO29CQUNyQixrQkFBa0I7b0JBQ2xCLGtCQUFrQjtpQkFDbkI7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLGNBQWMsQ0FBQzthQUN0Rjs7dUJBbEJHLGlCQUFpQixHQUZqQixjQUFjO0lBQ2QsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsa0JBQWtCO3VCQUpsQixrQkFBa0IsR0FIbEIsY0FBYztJQUNkLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5pbXBvcnQgeyBPYnNlcnZlcnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb2JzZXJ2ZXJzJztcclxuaW1wb3J0IHsgUGxhdGZvcm1Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOekFkZE9uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcclxuXHJcbmltcG9ydCB7IE56VGFiQm9keUNvbXBvbmVudCB9IGZyb20gJy4vbnotdGFiLWJvZHkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpUYWJMYWJlbERpcmVjdGl2ZSB9IGZyb20gJy4vbnotdGFiLWxhYmVsLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE56VGFiTGlua0RpcmVjdGl2ZSB9IGZyb20gJy4vbnotdGFiLWxpbmsuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTnpUYWJDb21wb25lbnQgfSBmcm9tICcuL256LXRhYi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOelRhYkRpcmVjdGl2ZSB9IGZyb20gJy4vbnotdGFiLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE56VGFic0lua0JhckRpcmVjdGl2ZSB9IGZyb20gJy4vbnotdGFicy1pbmstYmFyLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE56VGFic05hdkNvbXBvbmVudCB9IGZyb20gJy4vbnotdGFicy1uYXYuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpUYWJTZXRDb21wb25lbnQgfSBmcm9tICcuL256LXRhYnNldC5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE56VGFiQ29tcG9uZW50LFxyXG4gICAgTnpUYWJEaXJlY3RpdmUsXHJcbiAgICBOelRhYlNldENvbXBvbmVudCxcclxuICAgIE56VGFic05hdkNvbXBvbmVudCxcclxuICAgIE56VGFiTGFiZWxEaXJlY3RpdmUsXHJcbiAgICBOelRhYnNJbmtCYXJEaXJlY3RpdmUsXHJcbiAgICBOelRhYkJvZHlDb21wb25lbnQsXHJcbiAgICBOelRhYkxpbmtEaXJlY3RpdmVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIE56VGFiQ29tcG9uZW50LFxyXG4gICAgTnpUYWJEaXJlY3RpdmUsXHJcbiAgICBOelRhYlNldENvbXBvbmVudCxcclxuICAgIE56VGFic05hdkNvbXBvbmVudCxcclxuICAgIE56VGFiTGFiZWxEaXJlY3RpdmUsXHJcbiAgICBOelRhYnNJbmtCYXJEaXJlY3RpdmUsXHJcbiAgICBOelRhYkJvZHlDb21wb25lbnQsXHJcbiAgICBOelRhYkxpbmtEaXJlY3RpdmVcclxuICBdLFxyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE9ic2VydmVyc01vZHVsZSwgTnpJY29uTW9kdWxlLCBOekFkZE9uTW9kdWxlLCBQbGF0Zm9ybU1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56VGFic01vZHVsZSB7fVxyXG4iXX0=
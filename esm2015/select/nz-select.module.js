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
import { NzAddOnModule, NzNoAnimationModule, NzOverlayModule } from 'ng-zorro-antd/core';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzOptionContainerComponent } from './nz-option-container.component';
import { NzOptionGroupComponent } from './nz-option-group.component';
import { NzOptionLiComponent } from './nz-option-li.component';
import { NzOptionComponent } from './nz-option.component';
import { NzFilterGroupOptionPipe, NzFilterOptionPipe } from './nz-option.pipe';
import { NzSelectTopControlComponent } from './nz-select-top-control.component';
import { NzSelectUnselectableDirective } from './nz-select-unselectable.directive';
import { NzSelectComponent } from './nz-select.component';
import * as i0 from "@angular/core";
export class NzSelectModule {
}
/** @nocollapse */ NzSelectModule.ɵmod = i0.ɵɵdefineNgModule({ type: NzSelectModule });
/** @nocollapse */ NzSelectModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NzSelectModule_Factory(t) { return new (t || NzSelectModule)(); }, imports: [[
            CommonModule,
            NzI18nModule,
            FormsModule,
            PlatformModule,
            OverlayModule,
            NzIconModule,
            NzAddOnModule,
            NzEmptyModule,
            NzOverlayModule,
            NzNoAnimationModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NzSelectModule, { declarations: [NzFilterGroupOptionPipe,
        NzFilterOptionPipe,
        NzOptionComponent,
        NzSelectComponent,
        NzOptionContainerComponent,
        NzOptionGroupComponent,
        NzOptionLiComponent,
        NzSelectTopControlComponent,
        NzSelectUnselectableDirective], imports: [CommonModule,
        NzI18nModule,
        FormsModule,
        PlatformModule,
        OverlayModule,
        NzIconModule,
        NzAddOnModule,
        NzEmptyModule,
        NzOverlayModule,
        NzNoAnimationModule], exports: [NzOptionComponent, NzSelectComponent, NzOptionContainerComponent, NzOptionGroupComponent, NzSelectTopControlComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzSelectModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    NzI18nModule,
                    FormsModule,
                    PlatformModule,
                    OverlayModule,
                    NzIconModule,
                    NzAddOnModule,
                    NzEmptyModule,
                    NzOverlayModule,
                    NzNoAnimationModule
                ],
                declarations: [
                    NzFilterGroupOptionPipe,
                    NzFilterOptionPipe,
                    NzOptionComponent,
                    NzSelectComponent,
                    NzOptionContainerComponent,
                    NzOptionGroupComponent,
                    NzOptionLiComponent,
                    NzSelectTopControlComponent,
                    NzSelectUnselectableDirective
                ],
                exports: [NzOptionComponent, NzSelectComponent, NzOptionContainerComponent, NzOptionGroupComponent, NzSelectTopControlComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2VsZWN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvc2VsZWN0LyIsInNvdXJjZXMiOlsibnotc2VsZWN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFDSCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsYUFBYSxFQUFFLG1CQUFtQixFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3pGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQy9FLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQTRCMUQsTUFBTSxPQUFPLGNBQWM7O2tEQUFkLGNBQWM7MkdBQWQsY0FBYyxrQkF6QmhCO1lBQ1AsWUFBWTtZQUNaLFlBQVk7WUFDWixXQUFXO1lBQ1gsY0FBYztZQUNkLGFBQWE7WUFDYixZQUFZO1lBQ1osYUFBYTtZQUNiLGFBQWE7WUFDYixlQUFlO1lBQ2YsbUJBQW1CO1NBQ3BCO3dGQWNVLGNBQWMsbUJBWnZCLHVCQUF1QjtRQUN2QixrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQiwwQkFBMEI7UUFDMUIsc0JBQXNCO1FBQ3RCLG1CQUFtQjtRQUNuQiwyQkFBMkI7UUFDM0IsNkJBQTZCLGFBcEI3QixZQUFZO1FBQ1osWUFBWTtRQUNaLFdBQVc7UUFDWCxjQUFjO1FBQ2QsYUFBYTtRQUNiLFlBQVk7UUFDWixhQUFhO1FBQ2IsYUFBYTtRQUNiLGVBQWU7UUFDZixtQkFBbUIsYUFhWCxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSwwQkFBMEIsRUFBRSxzQkFBc0IsRUFBRSwyQkFBMkI7a0RBRXBILGNBQWM7Y0ExQjFCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixZQUFZO29CQUNaLFdBQVc7b0JBQ1gsY0FBYztvQkFDZCxhQUFhO29CQUNiLFlBQVk7b0JBQ1osYUFBYTtvQkFDYixhQUFhO29CQUNiLGVBQWU7b0JBQ2YsbUJBQW1CO2lCQUNwQjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osdUJBQXVCO29CQUN2QixrQkFBa0I7b0JBQ2xCLGlCQUFpQjtvQkFDakIsaUJBQWlCO29CQUNqQiwwQkFBMEI7b0JBQzFCLHNCQUFzQjtvQkFDdEIsbUJBQW1CO29CQUNuQiwyQkFBMkI7b0JBQzNCLDZCQUE2QjtpQkFDOUI7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsMEJBQTBCLEVBQUUsc0JBQXNCLEVBQUUsMkJBQTJCLENBQUM7YUFDakkiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgUGxhdGZvcm1Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTnpBZGRPbk1vZHVsZSwgTnpOb0FuaW1hdGlvbk1vZHVsZSwgTnpPdmVybGF5TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpFbXB0eU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvZW1wdHknO1xyXG5pbXBvcnQgeyBOekkxOG5Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5pbXBvcnQgeyBOekljb25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2ljb24nO1xyXG5cclxuaW1wb3J0IHsgTnpPcHRpb25Db250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL256LW9wdGlvbi1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpPcHRpb25Hcm91cENvbXBvbmVudCB9IGZyb20gJy4vbnotb3B0aW9uLWdyb3VwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56T3B0aW9uTGlDb21wb25lbnQgfSBmcm9tICcuL256LW9wdGlvbi1saS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOek9wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbnotb3B0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56RmlsdGVyR3JvdXBPcHRpb25QaXBlLCBOekZpbHRlck9wdGlvblBpcGUgfSBmcm9tICcuL256LW9wdGlvbi5waXBlJztcclxuaW1wb3J0IHsgTnpTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9uei1zZWxlY3QtdG9wLWNvbnRyb2wuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpTZWxlY3RVbnNlbGVjdGFibGVEaXJlY3RpdmUgfSBmcm9tICcuL256LXNlbGVjdC11bnNlbGVjdGFibGUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTnpTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL256LXNlbGVjdC5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBOekkxOG5Nb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIFBsYXRmb3JtTW9kdWxlLFxyXG4gICAgT3ZlcmxheU1vZHVsZSxcclxuICAgIE56SWNvbk1vZHVsZSxcclxuICAgIE56QWRkT25Nb2R1bGUsXHJcbiAgICBOekVtcHR5TW9kdWxlLFxyXG4gICAgTnpPdmVybGF5TW9kdWxlLFxyXG4gICAgTnpOb0FuaW1hdGlvbk1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBOekZpbHRlckdyb3VwT3B0aW9uUGlwZSxcclxuICAgIE56RmlsdGVyT3B0aW9uUGlwZSxcclxuICAgIE56T3B0aW9uQ29tcG9uZW50LFxyXG4gICAgTnpTZWxlY3RDb21wb25lbnQsXHJcbiAgICBOek9wdGlvbkNvbnRhaW5lckNvbXBvbmVudCxcclxuICAgIE56T3B0aW9uR3JvdXBDb21wb25lbnQsXHJcbiAgICBOek9wdGlvbkxpQ29tcG9uZW50LFxyXG4gICAgTnpTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50LFxyXG4gICAgTnpTZWxlY3RVbnNlbGVjdGFibGVEaXJlY3RpdmVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtOek9wdGlvbkNvbXBvbmVudCwgTnpTZWxlY3RDb21wb25lbnQsIE56T3B0aW9uQ29udGFpbmVyQ29tcG9uZW50LCBOek9wdGlvbkdyb3VwQ29tcG9uZW50LCBOelNlbGVjdFRvcENvbnRyb2xDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelNlbGVjdE1vZHVsZSB7fVxyXG4iXX0=
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
import { NzAddOnModule, NzHighlightModule, NzNoAnimationModule, NzOverlayModule } from 'ng-zorro-antd/core';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCascaderOptionComponent } from './nz-cascader-li.component';
import { NzCascaderComponent } from './nz-cascader.component';
import * as i0 from "@angular/core";
var NzCascaderModule = /** @class */ (function () {
    function NzCascaderModule() {
    }
    /** @nocollapse */ NzCascaderModule.ɵmod = i0.ɵɵdefineNgModule({ type: NzCascaderModule });
    /** @nocollapse */ NzCascaderModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NzCascaderModule_Factory(t) { return new (t || NzCascaderModule)(); }, imports: [[
                CommonModule,
                FormsModule,
                OverlayModule,
                NzAddOnModule,
                NzEmptyModule,
                NzHighlightModule,
                NzIconModule,
                NzInputModule,
                NzNoAnimationModule,
                NzOverlayModule
            ]] });
    return NzCascaderModule;
}());
export { NzCascaderModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NzCascaderModule, { declarations: [NzCascaderComponent, NzCascaderOptionComponent], imports: [CommonModule,
        FormsModule,
        OverlayModule,
        NzAddOnModule,
        NzEmptyModule,
        NzHighlightModule,
        NzIconModule,
        NzInputModule,
        NzNoAnimationModule,
        NzOverlayModule], exports: [NzCascaderComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzCascaderModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    OverlayModule,
                    NzAddOnModule,
                    NzEmptyModule,
                    NzHighlightModule,
                    NzIconModule,
                    NzInputModule,
                    NzNoAnimationModule,
                    NzOverlayModule
                ],
                declarations: [NzCascaderComponent, NzCascaderOptionComponent],
                exports: [NzCascaderComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FzY2FkZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jYXNjYWRlci8iLCJzb3VyY2VzIjpbIm56LWNhc2NhZGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxhQUFhLEVBQUUsaUJBQWlCLEVBQUUsbUJBQW1CLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDNUcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFcEQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7O0FBRTlEO0lBQUE7S0FnQmdDO3dEQUFuQixnQkFBZ0I7bUhBQWhCLGdCQUFnQixrQkFmbEI7Z0JBQ1AsWUFBWTtnQkFDWixXQUFXO2dCQUNYLGFBQWE7Z0JBQ2IsYUFBYTtnQkFDYixhQUFhO2dCQUNiLGlCQUFpQjtnQkFDakIsWUFBWTtnQkFDWixhQUFhO2dCQUNiLG1CQUFtQjtnQkFDbkIsZUFBZTthQUNoQjsyQkFqQ0g7Q0FxQ2dDLEFBaEJoQyxJQWdCZ0M7U0FBbkIsZ0JBQWdCO3dGQUFoQixnQkFBZ0IsbUJBSFosbUJBQW1CLEVBQUUseUJBQXlCLGFBWDNELFlBQVk7UUFDWixXQUFXO1FBQ1gsYUFBYTtRQUNiLGFBQWE7UUFDYixhQUFhO1FBQ2IsaUJBQWlCO1FBQ2pCLFlBQVk7UUFDWixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLGVBQWUsYUFHUCxtQkFBbUI7a0RBRWxCLGdCQUFnQjtjQWhCNUIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsYUFBYTtvQkFDYixhQUFhO29CQUNiLGFBQWE7b0JBQ2IsaUJBQWlCO29CQUNqQixZQUFZO29CQUNaLGFBQWE7b0JBQ2IsbUJBQW1CO29CQUNuQixlQUFlO2lCQUNoQjtnQkFDRCxZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSx5QkFBeUIsQ0FBQztnQkFDOUQsT0FBTyxFQUFFLENBQUMsbUJBQW1CLENBQUM7YUFDL0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgTnpBZGRPbk1vZHVsZSwgTnpIaWdobGlnaHRNb2R1bGUsIE56Tm9BbmltYXRpb25Nb2R1bGUsIE56T3ZlcmxheU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56RW1wdHlNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2VtcHR5JztcclxuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcclxuaW1wb3J0IHsgTnpJbnB1dE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaW5wdXQnO1xyXG5cclxuaW1wb3J0IHsgTnpDYXNjYWRlck9wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbnotY2FzY2FkZXItbGkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpDYXNjYWRlckNvbXBvbmVudCB9IGZyb20gJy4vbnotY2FzY2FkZXIuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBPdmVybGF5TW9kdWxlLFxyXG4gICAgTnpBZGRPbk1vZHVsZSxcclxuICAgIE56RW1wdHlNb2R1bGUsXHJcbiAgICBOekhpZ2hsaWdodE1vZHVsZSxcclxuICAgIE56SWNvbk1vZHVsZSxcclxuICAgIE56SW5wdXRNb2R1bGUsXHJcbiAgICBOek5vQW5pbWF0aW9uTW9kdWxlLFxyXG4gICAgTnpPdmVybGF5TW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtOekNhc2NhZGVyQ29tcG9uZW50LCBOekNhc2NhZGVyT3B0aW9uQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbTnpDYXNjYWRlckNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56Q2FzY2FkZXJNb2R1bGUge31cclxuIl19
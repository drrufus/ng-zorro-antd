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
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { SCROLL_SERVICE_PROVIDER } from 'ng-zorro-antd/core';
import { NzAnchorLinkComponent } from './nz-anchor-link.component';
import { NzAnchorComponent } from './nz-anchor.component';
import * as i0 from "@angular/core";
export class NzAnchorModule {
}
/** @nocollapse */ NzAnchorModule.ɵmod = i0.ɵɵdefineNgModule({ type: NzAnchorModule });
/** @nocollapse */ NzAnchorModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NzAnchorModule_Factory(t) { return new (t || NzAnchorModule)(); }, providers: [SCROLL_SERVICE_PROVIDER], imports: [[CommonModule, NzAffixModule, PlatformModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NzAnchorModule, { declarations: [NzAnchorComponent, NzAnchorLinkComponent], imports: [CommonModule, NzAffixModule, PlatformModule], exports: [NzAnchorComponent, NzAnchorLinkComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzAnchorModule, [{
        type: NgModule,
        args: [{
                declarations: [NzAnchorComponent, NzAnchorLinkComponent],
                exports: [NzAnchorComponent, NzAnchorLinkComponent],
                imports: [CommonModule, NzAffixModule, PlatformModule],
                providers: [SCROLL_SERVICE_PROVIDER]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYW5jaG9yLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvYW5jaG9yLyIsInNvdXJjZXMiOlsibnotYW5jaG9yLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFDSCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTdELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQVExRCxNQUFNLE9BQU8sY0FBYzs7a0RBQWQsY0FBYzsyR0FBZCxjQUFjLG1CQUZkLENBQUMsdUJBQXVCLENBQUMsWUFEM0IsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLGNBQWMsQ0FBQzt3RkFHM0MsY0FBYyxtQkFMVixpQkFBaUIsRUFBRSxxQkFBcUIsYUFFN0MsWUFBWSxFQUFFLGFBQWEsRUFBRSxjQUFjLGFBRDNDLGlCQUFpQixFQUFFLHFCQUFxQjtrREFJdkMsY0FBYztjQU4xQixRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsaUJBQWlCLEVBQUUscUJBQXFCLENBQUM7Z0JBQ3hELE9BQU8sRUFBRSxDQUFDLGlCQUFpQixFQUFFLHFCQUFxQixDQUFDO2dCQUNuRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLGNBQWMsQ0FBQztnQkFDdEQsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7YUFDckMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgUGxhdGZvcm1Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOekFmZml4TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9hZmZpeCc7XHJcbmltcG9ydCB7IFNDUk9MTF9TRVJWSUNFX1BST1ZJREVSIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56QW5jaG9yTGlua0NvbXBvbmVudCB9IGZyb20gJy4vbnotYW5jaG9yLWxpbmsuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpBbmNob3JDb21wb25lbnQgfSBmcm9tICcuL256LWFuY2hvci5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtOekFuY2hvckNvbXBvbmVudCwgTnpBbmNob3JMaW5rQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbTnpBbmNob3JDb21wb25lbnQsIE56QW5jaG9yTGlua0NvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTnpBZmZpeE1vZHVsZSwgUGxhdGZvcm1Nb2R1bGVdLFxyXG4gIHByb3ZpZGVyczogW1NDUk9MTF9TRVJWSUNFX1BST1ZJREVSXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpBbmNob3JNb2R1bGUge31cclxuIl19
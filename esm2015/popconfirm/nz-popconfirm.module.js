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
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAddOnModule, NzNoAnimationModule, NzOverlayModule } from 'ng-zorro-antd/core';
import { NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzPopconfirmComponent } from './nz-popconfirm.component';
import { NzPopconfirmDirective } from './nz-popconfirm.directive';
import * as i0 from "@angular/core";
export class NzPopconfirmModule {
}
/** @nocollapse */ NzPopconfirmModule.ɵmod = i0.ɵɵdefineNgModule({ type: NzPopconfirmModule });
/** @nocollapse */ NzPopconfirmModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NzPopconfirmModule_Factory(t) { return new (t || NzPopconfirmModule)(); }, imports: [[
            CommonModule,
            NzButtonModule,
            OverlayModule,
            NzI18nModule,
            NzIconModule,
            NzAddOnModule,
            NzOverlayModule,
            NzNoAnimationModule,
            NzToolTipModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NzPopconfirmModule, { declarations: [NzPopconfirmComponent, NzPopconfirmDirective], imports: [CommonModule,
        NzButtonModule,
        OverlayModule,
        NzI18nModule,
        NzIconModule,
        NzAddOnModule,
        NzOverlayModule,
        NzNoAnimationModule,
        NzToolTipModule], exports: [NzPopconfirmComponent, NzPopconfirmDirective] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzPopconfirmModule, [{
        type: NgModule,
        args: [{
                declarations: [NzPopconfirmComponent, NzPopconfirmDirective],
                exports: [NzPopconfirmComponent, NzPopconfirmDirective],
                imports: [
                    CommonModule,
                    NzButtonModule,
                    OverlayModule,
                    NzI18nModule,
                    NzIconModule,
                    NzAddOnModule,
                    NzOverlayModule,
                    NzNoAnimationModule,
                    NzToolTipModule
                ],
                entryComponents: [NzPopconfirmComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcG9wY29uZmlybS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3BvcGNvbmZpcm0vIiwic291cmNlcyI6WyJuei1wb3Bjb25maXJtLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxhQUFhLEVBQUUsbUJBQW1CLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDekYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFeEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0FBa0JsRSxNQUFNLE9BQU8sa0JBQWtCOztzREFBbEIsa0JBQWtCO21IQUFsQixrQkFBa0Isa0JBYnBCO1lBQ1AsWUFBWTtZQUNaLGNBQWM7WUFDZCxhQUFhO1lBQ2IsWUFBWTtZQUNaLFlBQVk7WUFDWixhQUFhO1lBQ2IsZUFBZTtZQUNmLG1CQUFtQjtZQUNuQixlQUFlO1NBQ2hCO3dGQUdVLGtCQUFrQixtQkFmZCxxQkFBcUIsRUFBRSxxQkFBcUIsYUFHekQsWUFBWTtRQUNaLGNBQWM7UUFDZCxhQUFhO1FBQ2IsWUFBWTtRQUNaLFlBQVk7UUFDWixhQUFhO1FBQ2IsZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixlQUFlLGFBVlAscUJBQXFCLEVBQUUscUJBQXFCO2tEQWMzQyxrQkFBa0I7Y0FoQjlCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxxQkFBcUIsQ0FBQztnQkFDNUQsT0FBTyxFQUFFLENBQUMscUJBQXFCLEVBQUUscUJBQXFCLENBQUM7Z0JBQ3ZELE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGNBQWM7b0JBQ2QsYUFBYTtvQkFDYixZQUFZO29CQUNaLFlBQVk7b0JBQ1osYUFBYTtvQkFDYixlQUFlO29CQUNmLG1CQUFtQjtvQkFDbkIsZUFBZTtpQkFDaEI7Z0JBQ0QsZUFBZSxFQUFFLENBQUMscUJBQXFCLENBQUM7YUFDekMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOekJ1dHRvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvYnV0dG9uJztcclxuaW1wb3J0IHsgTnpBZGRPbk1vZHVsZSwgTnpOb0FuaW1hdGlvbk1vZHVsZSwgTnpPdmVybGF5TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpJMThuTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcclxuaW1wb3J0IHsgTnpUb29sVGlwTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90b29sdGlwJztcclxuXHJcbmltcG9ydCB7IE56UG9wY29uZmlybUNvbXBvbmVudCB9IGZyb20gJy4vbnotcG9wY29uZmlybS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOelBvcGNvbmZpcm1EaXJlY3RpdmUgfSBmcm9tICcuL256LXBvcGNvbmZpcm0uZGlyZWN0aXZlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbTnpQb3Bjb25maXJtQ29tcG9uZW50LCBOelBvcGNvbmZpcm1EaXJlY3RpdmVdLFxyXG4gIGV4cG9ydHM6IFtOelBvcGNvbmZpcm1Db21wb25lbnQsIE56UG9wY29uZmlybURpcmVjdGl2ZV0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgTnpCdXR0b25Nb2R1bGUsXHJcbiAgICBPdmVybGF5TW9kdWxlLFxyXG4gICAgTnpJMThuTW9kdWxlLFxyXG4gICAgTnpJY29uTW9kdWxlLFxyXG4gICAgTnpBZGRPbk1vZHVsZSxcclxuICAgIE56T3ZlcmxheU1vZHVsZSxcclxuICAgIE56Tm9BbmltYXRpb25Nb2R1bGUsXHJcbiAgICBOelRvb2xUaXBNb2R1bGVcclxuICBdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW056UG9wY29uZmlybUNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56UG9wY29uZmlybU1vZHVsZSB7fVxyXG4iXX0=
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzAddOnModule } from 'ng-zorro-antd/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderAvatarDirective, NzPageHeaderBreadcrumbDirective, NzPageHeaderContentDirective, NzPageHeaderExtraDirective, NzPageHeaderFooterDirective, NzPageHeaderSubtitleDirective, NzPageHeaderTagDirective, NzPageHeaderTitleDirective } from './nz-page-header-cells';
import { NzPageHeaderComponent } from './nz-page-header.component';
import * as i0 from "@angular/core";
const NzPageHeaderCells = [
    NzPageHeaderTitleDirective,
    NzPageHeaderSubtitleDirective,
    NzPageHeaderContentDirective,
    NzPageHeaderTagDirective,
    NzPageHeaderExtraDirective,
    NzPageHeaderFooterDirective,
    NzPageHeaderBreadcrumbDirective,
    NzPageHeaderAvatarDirective
];
export class NzPageHeaderModule {
}
/** @nocollapse */ NzPageHeaderModule.ɵmod = i0.ɵɵdefineNgModule({ type: NzPageHeaderModule });
/** @nocollapse */ NzPageHeaderModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NzPageHeaderModule_Factory(t) { return new (t || NzPageHeaderModule)(); }, imports: [[CommonModule, NzAddOnModule, NzIconModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NzPageHeaderModule, { declarations: [NzPageHeaderComponent,
        NzPageHeaderTitleDirective,
        NzPageHeaderSubtitleDirective,
        NzPageHeaderContentDirective,
        NzPageHeaderTagDirective,
        NzPageHeaderExtraDirective,
        NzPageHeaderFooterDirective,
        NzPageHeaderBreadcrumbDirective,
        NzPageHeaderAvatarDirective], imports: [CommonModule, NzAddOnModule, NzIconModule], exports: [NzPageHeaderComponent,
        NzPageHeaderTitleDirective,
        NzPageHeaderSubtitleDirective,
        NzPageHeaderContentDirective,
        NzPageHeaderTagDirective,
        NzPageHeaderExtraDirective,
        NzPageHeaderFooterDirective,
        NzPageHeaderBreadcrumbDirective,
        NzPageHeaderAvatarDirective] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzPageHeaderModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NzAddOnModule, NzIconModule],
                exports: [NzPageHeaderComponent, NzPageHeaderCells],
                declarations: [NzPageHeaderComponent, NzPageHeaderCells]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcGFnZS1oZWFkZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9wYWdlLWhlYWRlci8iLCJzb3VyY2VzIjpbIm56LXBhZ2UtaGVhZGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFDTCwyQkFBMkIsRUFDM0IsK0JBQStCLEVBQy9CLDRCQUE0QixFQUM1QiwwQkFBMEIsRUFDMUIsMkJBQTJCLEVBQzNCLDZCQUE2QixFQUM3Qix3QkFBd0IsRUFDeEIsMEJBQTBCLEVBQzNCLE1BQU0sd0JBQXdCLENBQUM7QUFDaEMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7O0FBRW5FLE1BQU0saUJBQWlCLEdBQUc7SUFDeEIsMEJBQTBCO0lBQzFCLDZCQUE2QjtJQUM3Qiw0QkFBNEI7SUFDNUIsd0JBQXdCO0lBQ3hCLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0IsK0JBQStCO0lBQy9CLDJCQUEyQjtDQUM1QixDQUFDO0FBT0YsTUFBTSxPQUFPLGtCQUFrQjs7c0RBQWxCLGtCQUFrQjttSEFBbEIsa0JBQWtCLGtCQUpwQixDQUFDLFlBQVksRUFBRSxhQUFhLEVBQUUsWUFBWSxDQUFDO3dGQUl6QyxrQkFBa0IsbUJBRmQscUJBQXFCO1FBYnBDLDBCQUEwQjtRQUMxQiw2QkFBNkI7UUFDN0IsNEJBQTRCO1FBQzVCLHdCQUF3QjtRQUN4QiwwQkFBMEI7UUFDMUIsMkJBQTJCO1FBQzNCLCtCQUErQjtRQUMvQiwyQkFBMkIsYUFJakIsWUFBWSxFQUFFLGFBQWEsRUFBRSxZQUFZLGFBQ3pDLHFCQUFxQjtRQVovQiwwQkFBMEI7UUFDMUIsNkJBQTZCO1FBQzdCLDRCQUE0QjtRQUM1Qix3QkFBd0I7UUFDeEIsMEJBQTBCO1FBQzFCLDJCQUEyQjtRQUMzQiwrQkFBK0I7UUFDL0IsMkJBQTJCO2tEQVFoQixrQkFBa0I7Y0FMOUIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxhQUFhLEVBQUUsWUFBWSxDQUFDO2dCQUNwRCxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxpQkFBaUIsQ0FBQztnQkFDbkQsWUFBWSxFQUFFLENBQUMscUJBQXFCLEVBQUUsaUJBQWlCLENBQUM7YUFDekQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOekFkZE9uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcclxuXHJcbmltcG9ydCB7XHJcbiAgTnpQYWdlSGVhZGVyQXZhdGFyRGlyZWN0aXZlLFxyXG4gIE56UGFnZUhlYWRlckJyZWFkY3J1bWJEaXJlY3RpdmUsXHJcbiAgTnpQYWdlSGVhZGVyQ29udGVudERpcmVjdGl2ZSxcclxuICBOelBhZ2VIZWFkZXJFeHRyYURpcmVjdGl2ZSxcclxuICBOelBhZ2VIZWFkZXJGb290ZXJEaXJlY3RpdmUsXHJcbiAgTnpQYWdlSGVhZGVyU3VidGl0bGVEaXJlY3RpdmUsXHJcbiAgTnpQYWdlSGVhZGVyVGFnRGlyZWN0aXZlLFxyXG4gIE56UGFnZUhlYWRlclRpdGxlRGlyZWN0aXZlXHJcbn0gZnJvbSAnLi9uei1wYWdlLWhlYWRlci1jZWxscyc7XHJcbmltcG9ydCB7IE56UGFnZUhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vbnotcGFnZS1oZWFkZXIuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IE56UGFnZUhlYWRlckNlbGxzID0gW1xyXG4gIE56UGFnZUhlYWRlclRpdGxlRGlyZWN0aXZlLFxyXG4gIE56UGFnZUhlYWRlclN1YnRpdGxlRGlyZWN0aXZlLFxyXG4gIE56UGFnZUhlYWRlckNvbnRlbnREaXJlY3RpdmUsXHJcbiAgTnpQYWdlSGVhZGVyVGFnRGlyZWN0aXZlLFxyXG4gIE56UGFnZUhlYWRlckV4dHJhRGlyZWN0aXZlLFxyXG4gIE56UGFnZUhlYWRlckZvb3RlckRpcmVjdGl2ZSxcclxuICBOelBhZ2VIZWFkZXJCcmVhZGNydW1iRGlyZWN0aXZlLFxyXG4gIE56UGFnZUhlYWRlckF2YXRhckRpcmVjdGl2ZVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBOekFkZE9uTW9kdWxlLCBOekljb25Nb2R1bGVdLFxyXG4gIGV4cG9ydHM6IFtOelBhZ2VIZWFkZXJDb21wb25lbnQsIE56UGFnZUhlYWRlckNlbGxzXSxcclxuICBkZWNsYXJhdGlvbnM6IFtOelBhZ2VIZWFkZXJDb21wb25lbnQsIE56UGFnZUhlYWRlckNlbGxzXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpQYWdlSGVhZGVyTW9kdWxlIHt9XHJcbiJdfQ==
/**
 * @fileoverview added by tsickle
 * Generated from: nz-input.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
import { PlatformModule } from '@angular/cdk/platform';
import { NzAutosizeDirective } from './nz-autosize.directive';
import { NzInputGroupComponent } from './nz-input-group.component';
import { NzInputDirective } from './nz-input.directive';
var NzInputModule = /** @class */ (function () {
    function NzInputModule() {
    }
    NzInputModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NzInputDirective, NzInputGroupComponent, NzAutosizeDirective],
                    exports: [NzInputDirective, NzInputGroupComponent, NzAutosizeDirective],
                    imports: [CommonModule, NzIconModule, PlatformModule, NzAddOnModule]
                },] }
    ];
    return NzInputModule;
}());
export { NzInputModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaW5wdXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9pbnB1dC8iLCJzb3VyY2VzIjpbIm56LWlucHV0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RDtJQUFBO0lBSzRCLENBQUM7O2dCQUw1QixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUscUJBQXFCLEVBQUUsbUJBQW1CLENBQUM7b0JBQzVFLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixFQUFFLHFCQUFxQixFQUFFLG1CQUFtQixDQUFDO29CQUN2RSxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxhQUFhLENBQUM7aUJBQ3JFOztJQUMyQixvQkFBQztDQUFBLEFBTDdCLElBSzZCO1NBQWhCLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE56QWRkT25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcclxuXHJcbmltcG9ydCB7IFBsYXRmb3JtTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHsgTnpBdXRvc2l6ZURpcmVjdGl2ZSB9IGZyb20gJy4vbnotYXV0b3NpemUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTnpJbnB1dEdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9uei1pbnB1dC1ncm91cC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOeklucHV0RGlyZWN0aXZlIH0gZnJvbSAnLi9uei1pbnB1dC5kaXJlY3RpdmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtOeklucHV0RGlyZWN0aXZlLCBOeklucHV0R3JvdXBDb21wb25lbnQsIE56QXV0b3NpemVEaXJlY3RpdmVdLFxyXG4gIGV4cG9ydHM6IFtOeklucHV0RGlyZWN0aXZlLCBOeklucHV0R3JvdXBDb21wb25lbnQsIE56QXV0b3NpemVEaXJlY3RpdmVdLFxyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE56SWNvbk1vZHVsZSwgUGxhdGZvcm1Nb2R1bGUsIE56QWRkT25Nb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOeklucHV0TW9kdWxlIHt9XHJcbiJdfQ==
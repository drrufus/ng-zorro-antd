/**
 * @fileoverview added by tsickle
 * Generated from: pipe/nz-css-unit.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Pipe } from '@angular/core';
export class NzToCssUnitPipe {
    /**
     * @param {?} value
     * @param {?=} defaultUnit
     * @return {?}
     */
    transform(value, defaultUnit = 'px') {
        /** @type {?} */
        const formatted = +value;
        return isNaN(formatted) ? `${value}` : `${formatted}${defaultUnit}`;
    }
}
NzToCssUnitPipe.decorators = [
    { type: Pipe, args: [{
                name: 'nzToCssUnit'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY3NzLXVuaXQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbInBpcGUvbnotY3NzLXVuaXQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUtwRCxNQUFNLE9BQU8sZUFBZTs7Ozs7O0lBQzFCLFNBQVMsQ0FBQyxLQUFzQixFQUFFLGNBQXNCLElBQUk7O2NBQ3BELFNBQVMsR0FBRyxDQUFDLEtBQUs7UUFDeEIsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLFdBQVcsRUFBRSxDQUFDO0lBQ3RFLENBQUM7OztZQVBGLElBQUksU0FBQztnQkFDSixJQUFJLEVBQUUsYUFBYTthQUNwQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICduelRvQ3NzVW5pdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE56VG9Dc3NVbml0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybSh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nLCBkZWZhdWx0VW5pdDogc3RyaW5nID0gJ3B4Jyk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBmb3JtYXR0ZWQgPSArdmFsdWU7IC8vIGZvcmNlIGNvbnZlcnRcclxuICAgIHJldHVybiBpc05hTihmb3JtYXR0ZWQpID8gYCR7dmFsdWV9YCA6IGAke2Zvcm1hdHRlZH0ke2RlZmF1bHRVbml0fWA7XHJcbiAgfVxyXG59XHJcbiJdfQ==
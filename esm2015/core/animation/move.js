/**
 * @fileoverview added by tsickle
 * Generated from: animation/move.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { animate, style, transition, trigger } from '@angular/animations';
import { AnimationDuration } from './animation-consts';
/** @type {?} */
export const moveUpMotion = trigger('moveUpMotion', [
    transition('* => enter', [
        style({
            transformOrigin: '0 0',
            transform: 'translateY(-100%)',
            opacity: 0
        }),
        animate(`${AnimationDuration.BASE}`, style({
            transformOrigin: '0 0',
            transform: 'translateY(0%)',
            opacity: 1
        }))
    ]),
    transition('* => leave', [
        style({
            transformOrigin: '0 0',
            transform: 'translateY(0%)',
            opacity: 1
        }),
        animate(`${AnimationDuration.BASE}`, style({
            transformOrigin: '0 0',
            transform: 'translateY(-100%)',
            opacity: 0
        }))
    ])
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW92ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbImFuaW1hdGlvbi9tb3ZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQTRCLE1BQU0scUJBQXFCLENBQUM7QUFDcEcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBRXZELE1BQU0sT0FBTyxZQUFZLEdBQTZCLE9BQU8sQ0FBQyxjQUFjLEVBQUU7SUFDNUUsVUFBVSxDQUFDLFlBQVksRUFBRTtRQUN2QixLQUFLLENBQUM7WUFDSixlQUFlLEVBQUUsS0FBSztZQUN0QixTQUFTLEVBQUUsbUJBQW1CO1lBQzlCLE9BQU8sRUFBRSxDQUFDO1NBQ1gsQ0FBQztRQUNGLE9BQU8sQ0FDTCxHQUFHLGlCQUFpQixDQUFDLElBQUksRUFBRSxFQUMzQixLQUFLLENBQUM7WUFDSixlQUFlLEVBQUUsS0FBSztZQUN0QixTQUFTLEVBQUUsZ0JBQWdCO1lBQzNCLE9BQU8sRUFBRSxDQUFDO1NBQ1gsQ0FBQyxDQUNIO0tBQ0YsQ0FBQztJQUNGLFVBQVUsQ0FBQyxZQUFZLEVBQUU7UUFDdkIsS0FBSyxDQUFDO1lBQ0osZUFBZSxFQUFFLEtBQUs7WUFDdEIsU0FBUyxFQUFFLGdCQUFnQjtZQUMzQixPQUFPLEVBQUUsQ0FBQztTQUNYLENBQUM7UUFDRixPQUFPLENBQ0wsR0FBRyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsRUFDM0IsS0FBSyxDQUFDO1lBQ0osZUFBZSxFQUFFLEtBQUs7WUFDdEIsU0FBUyxFQUFFLG1CQUFtQjtZQUM5QixPQUFPLEVBQUUsQ0FBQztTQUNYLENBQUMsQ0FDSDtLQUNGLENBQUM7Q0FDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBhbmltYXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciwgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IEFuaW1hdGlvbkR1cmF0aW9uIH0gZnJvbSAnLi9hbmltYXRpb24tY29uc3RzJztcclxuXHJcbmV4cG9ydCBjb25zdCBtb3ZlVXBNb3Rpb246IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoJ21vdmVVcE1vdGlvbicsIFtcclxuICB0cmFuc2l0aW9uKCcqID0+IGVudGVyJywgW1xyXG4gICAgc3R5bGUoe1xyXG4gICAgICB0cmFuc2Zvcm1PcmlnaW46ICcwIDAnLFxyXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0xMDAlKScsXHJcbiAgICAgIG9wYWNpdHk6IDBcclxuICAgIH0pLFxyXG4gICAgYW5pbWF0ZShcclxuICAgICAgYCR7QW5pbWF0aW9uRHVyYXRpb24uQkFTRX1gLFxyXG4gICAgICBzdHlsZSh7XHJcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnMCAwJyxcclxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDAlKScsXHJcbiAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgICB9KVxyXG4gICAgKVxyXG4gIF0pLFxyXG4gIHRyYW5zaXRpb24oJyogPT4gbGVhdmUnLCBbXHJcbiAgICBzdHlsZSh7XHJcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzAgMCcsXHJcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCUpJyxcclxuICAgICAgb3BhY2l0eTogMVxyXG4gICAgfSksXHJcbiAgICBhbmltYXRlKFxyXG4gICAgICBgJHtBbmltYXRpb25EdXJhdGlvbi5CQVNFfWAsXHJcbiAgICAgIHN0eWxlKHtcclxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICcwIDAnLFxyXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTEwMCUpJyxcclxuICAgICAgICBvcGFjaXR5OiAwXHJcbiAgICAgIH0pXHJcbiAgICApXHJcbiAgXSlcclxuXSk7XHJcbiJdfQ==
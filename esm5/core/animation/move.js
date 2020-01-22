/**
 * @fileoverview added by tsickle
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
export var moveUpMotion = trigger('moveUpMotion', [
    transition('* => enter', [
        style({
            transformOrigin: '0 0',
            transform: 'translateY(-100%)',
            opacity: 0
        }),
        animate("" + AnimationDuration.BASE, style({
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
        animate("" + AnimationDuration.BASE, style({
            transformOrigin: '0 0',
            transform: 'translateY(-100%)',
            opacity: 0
        }))
    ])
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW92ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbImFuaW1hdGlvbi9tb3ZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBNEIsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFFdkQsTUFBTSxLQUFPLFlBQVksR0FBNkIsT0FBTyxDQUFDLGNBQWMsRUFBRTtJQUM1RSxVQUFVLENBQUMsWUFBWSxFQUFFO1FBQ3ZCLEtBQUssQ0FBQztZQUNKLGVBQWUsRUFBRSxLQUFLO1lBQ3RCLFNBQVMsRUFBRSxtQkFBbUI7WUFDOUIsT0FBTyxFQUFFLENBQUM7U0FDWCxDQUFDO1FBQ0YsT0FBTyxDQUNMLEtBQUcsaUJBQWlCLENBQUMsSUFBTSxFQUMzQixLQUFLLENBQUM7WUFDSixlQUFlLEVBQUUsS0FBSztZQUN0QixTQUFTLEVBQUUsZ0JBQWdCO1lBQzNCLE9BQU8sRUFBRSxDQUFDO1NBQ1gsQ0FBQyxDQUNIO0tBQ0YsQ0FBQztJQUNGLFVBQVUsQ0FBQyxZQUFZLEVBQUU7UUFDdkIsS0FBSyxDQUFDO1lBQ0osZUFBZSxFQUFFLEtBQUs7WUFDdEIsU0FBUyxFQUFFLGdCQUFnQjtZQUMzQixPQUFPLEVBQUUsQ0FBQztTQUNYLENBQUM7UUFDRixPQUFPLENBQ0wsS0FBRyxpQkFBaUIsQ0FBQyxJQUFNLEVBQzNCLEtBQUssQ0FBQztZQUNKLGVBQWUsRUFBRSxLQUFLO1lBQ3RCLFNBQVMsRUFBRSxtQkFBbUI7WUFDOUIsT0FBTyxFQUFFLENBQUM7U0FDWCxDQUFDLENBQ0g7S0FDRixDQUFDO0NBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgYW5pbWF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIsIEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBBbmltYXRpb25EdXJhdGlvbiB9IGZyb20gJy4vYW5pbWF0aW9uLWNvbnN0cyc7XHJcblxyXG5leHBvcnQgY29uc3QgbW92ZVVwTW90aW9uOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgPSB0cmlnZ2VyKCdtb3ZlVXBNb3Rpb24nLCBbXHJcbiAgdHJhbnNpdGlvbignKiA9PiBlbnRlcicsIFtcclxuICAgIHN0eWxlKHtcclxuICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnMCAwJyxcclxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtMTAwJSknLFxyXG4gICAgICBvcGFjaXR5OiAwXHJcbiAgICB9KSxcclxuICAgIGFuaW1hdGUoXHJcbiAgICAgIGAke0FuaW1hdGlvbkR1cmF0aW9uLkJBU0V9YCxcclxuICAgICAgc3R5bGUoe1xyXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzAgMCcsXHJcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwJSknLFxyXG4gICAgICAgIG9wYWNpdHk6IDFcclxuICAgICAgfSlcclxuICAgIClcclxuICBdKSxcclxuICB0cmFuc2l0aW9uKCcqID0+IGxlYXZlJywgW1xyXG4gICAgc3R5bGUoe1xyXG4gICAgICB0cmFuc2Zvcm1PcmlnaW46ICcwIDAnLFxyXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDAlKScsXHJcbiAgICAgIG9wYWNpdHk6IDFcclxuICAgIH0pLFxyXG4gICAgYW5pbWF0ZShcclxuICAgICAgYCR7QW5pbWF0aW9uRHVyYXRpb24uQkFTRX1gLFxyXG4gICAgICBzdHlsZSh7XHJcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnMCAwJyxcclxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0xMDAlKScsXHJcbiAgICAgICAgb3BhY2l0eTogMFxyXG4gICAgICB9KVxyXG4gICAgKVxyXG4gIF0pXHJcbl0pO1xyXG4iXX0=
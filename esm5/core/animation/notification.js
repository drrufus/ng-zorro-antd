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
import { animate, state, style, transition, trigger } from '@angular/animations';
/** @type {?} */
export var notificationMotion = trigger('notificationMotion', [
    state('enterRight', style({ opacity: 1, transform: 'translateX(0)' })),
    transition('* => enterRight', [style({ opacity: 0, transform: 'translateX(5%)' }), animate('100ms linear')]),
    state('enterLeft', style({ opacity: 1, transform: 'translateX(0)' })),
    transition('* => enterLeft', [style({ opacity: 0, transform: 'translateX(-5%)' }), animate('100ms linear')]),
    state('leave', style({
        opacity: 0,
        transform: 'scaleY(0.8)',
        transformOrigin: '0% 0%'
    })),
    transition('* => leave', [
        style({
            opacity: 1,
            transform: 'scaleY(1)',
            transformOrigin: '0% 0%'
        }),
        animate('100ms linear')
    ])
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsiYW5pbWF0aW9uL25vdGlmaWNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUE0QixNQUFNLHFCQUFxQixDQUFDOztBQUUzRyxNQUFNLEtBQU8sa0JBQWtCLEdBQTZCLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRTtJQUN4RixLQUFLLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxDQUFDLENBQUM7SUFDdEUsVUFBVSxDQUFDLGlCQUFpQixFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQzVHLEtBQUssQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLENBQUMsQ0FBQztJQUNyRSxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDNUcsS0FBSyxDQUNILE9BQU8sRUFDUCxLQUFLLENBQUM7UUFDSixPQUFPLEVBQUUsQ0FBQztRQUNWLFNBQVMsRUFBRSxhQUFhO1FBQ3hCLGVBQWUsRUFBRSxPQUFPO0tBQ3pCLENBQUMsQ0FDSDtJQUNELFVBQVUsQ0FBQyxZQUFZLEVBQUU7UUFDdkIsS0FBSyxDQUFDO1lBQ0osT0FBTyxFQUFFLENBQUM7WUFDVixTQUFTLEVBQUUsV0FBVztZQUN0QixlQUFlLEVBQUUsT0FBTztTQUN6QixDQUFDO1FBQ0YsT0FBTyxDQUFDLGNBQWMsQ0FBQztLQUN4QixDQUFDO0NBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgYW5pbWF0ZSwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyLCBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuXHJcbmV4cG9ydCBjb25zdCBub3RpZmljYXRpb25Nb3Rpb246IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoJ25vdGlmaWNhdGlvbk1vdGlvbicsIFtcclxuICBzdGF0ZSgnZW50ZXJSaWdodCcsIHN0eWxlKHsgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKScgfSkpLFxyXG4gIHRyYW5zaXRpb24oJyogPT4gZW50ZXJSaWdodCcsIFtzdHlsZSh7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoNSUpJyB9KSwgYW5pbWF0ZSgnMTAwbXMgbGluZWFyJyldKSxcclxuICBzdGF0ZSgnZW50ZXJMZWZ0Jywgc3R5bGUoeyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJyB9KSksXHJcbiAgdHJhbnNpdGlvbignKiA9PiBlbnRlckxlZnQnLCBbc3R5bGUoeyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC01JSknIH0pLCBhbmltYXRlKCcxMDBtcyBsaW5lYXInKV0pLFxyXG4gIHN0YXRlKFxyXG4gICAgJ2xlYXZlJyxcclxuICAgIHN0eWxlKHtcclxuICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgdHJhbnNmb3JtOiAnc2NhbGVZKDAuOCknLFxyXG4gICAgICB0cmFuc2Zvcm1PcmlnaW46ICcwJSAwJSdcclxuICAgIH0pXHJcbiAgKSxcclxuICB0cmFuc2l0aW9uKCcqID0+IGxlYXZlJywgW1xyXG4gICAgc3R5bGUoe1xyXG4gICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZVkoMSknLFxyXG4gICAgICB0cmFuc2Zvcm1PcmlnaW46ICcwJSAwJSdcclxuICAgIH0pLFxyXG4gICAgYW5pbWF0ZSgnMTAwbXMgbGluZWFyJylcclxuICBdKVxyXG5dKTtcclxuIl19
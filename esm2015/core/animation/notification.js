/**
 * @fileoverview added by tsickle
 * Generated from: animation/notification.ts
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
export const notificationMotion = trigger('notificationMotion', [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsiYW5pbWF0aW9uL25vdGlmaWNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBNEIsTUFBTSxxQkFBcUIsQ0FBQzs7QUFFM0csTUFBTSxPQUFPLGtCQUFrQixHQUE2QixPQUFPLENBQUMsb0JBQW9CLEVBQUU7SUFDeEYsS0FBSyxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsQ0FBQyxDQUFDO0lBQ3RFLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUM1RyxLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxDQUFDLENBQUM7SUFDckUsVUFBVSxDQUFDLGdCQUFnQixFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQzVHLEtBQUssQ0FDSCxPQUFPLEVBQ1AsS0FBSyxDQUFDO1FBQ0osT0FBTyxFQUFFLENBQUM7UUFDVixTQUFTLEVBQUUsYUFBYTtRQUN4QixlQUFlLEVBQUUsT0FBTztLQUN6QixDQUFDLENBQ0g7SUFDRCxVQUFVLENBQUMsWUFBWSxFQUFFO1FBQ3ZCLEtBQUssQ0FBQztZQUNKLE9BQU8sRUFBRSxDQUFDO1lBQ1YsU0FBUyxFQUFFLFdBQVc7WUFDdEIsZUFBZSxFQUFFLE9BQU87U0FDekIsQ0FBQztRQUNGLE9BQU8sQ0FBQyxjQUFjLENBQUM7S0FDeEIsQ0FBQztDQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IGFuaW1hdGUsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciwgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcblxyXG5leHBvcnQgY29uc3Qgbm90aWZpY2F0aW9uTW90aW9uOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgPSB0cmlnZ2VyKCdub3RpZmljYXRpb25Nb3Rpb24nLCBbXHJcbiAgc3RhdGUoJ2VudGVyUmlnaHQnLCBzdHlsZSh7IG9wYWNpdHk6IDEsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknIH0pKSxcclxuICB0cmFuc2l0aW9uKCcqID0+IGVudGVyUmlnaHQnLCBbc3R5bGUoeyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDUlKScgfSksIGFuaW1hdGUoJzEwMG1zIGxpbmVhcicpXSksXHJcbiAgc3RhdGUoJ2VudGVyTGVmdCcsIHN0eWxlKHsgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKScgfSkpLFxyXG4gIHRyYW5zaXRpb24oJyogPT4gZW50ZXJMZWZ0JywgW3N0eWxlKHsgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNSUpJyB9KSwgYW5pbWF0ZSgnMTAwbXMgbGluZWFyJyldKSxcclxuICBzdGF0ZShcclxuICAgICdsZWF2ZScsXHJcbiAgICBzdHlsZSh7XHJcbiAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWSgwLjgpJyxcclxuICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnMCUgMCUnXHJcbiAgICB9KVxyXG4gICksXHJcbiAgdHJhbnNpdGlvbignKiA9PiBsZWF2ZScsIFtcclxuICAgIHN0eWxlKHtcclxuICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgdHJhbnNmb3JtOiAnc2NhbGVZKDEpJyxcclxuICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnMCUgMCUnXHJcbiAgICB9KSxcclxuICAgIGFuaW1hdGUoJzEwMG1zIGxpbmVhcicpXHJcbiAgXSlcclxuXSk7XHJcbiJdfQ==
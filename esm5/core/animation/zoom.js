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
import { AnimationCurves, AnimationDuration } from './animation-consts';
/** @type {?} */
export var zoomMotion = trigger('zoomMotion', [
    transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.2)' }),
        animate(AnimationDuration.BASE + " " + AnimationCurves.EASE_OUT_CIRC, style({
            opacity: 1,
            transform: 'scale(1)'
        }))
    ]),
    transition(':leave', [
        style({ opacity: 1, transform: 'scale(1)' }),
        animate(AnimationDuration.BASE + " " + AnimationCurves.EASE_IN_OUT_CIRC, style({
            opacity: 0,
            transform: 'scale(0.2)'
        }))
    ])
]);
/** @type {?} */
export var zoomBigMotion = trigger('zoomBigMotion', [
    transition('void => active', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate(AnimationDuration.BASE + " " + AnimationCurves.EASE_OUT_CIRC, style({
            opacity: 1,
            transform: 'scale(1)'
        }))
    ]),
    transition('active => void', [
        style({ opacity: 1, transform: 'scale(1)' }),
        animate(AnimationDuration.BASE + " " + AnimationCurves.EASE_IN_OUT_CIRC, style({
            opacity: 0,
            transform: 'scale(0.8)'
        }))
    ])
]);
/** @type {?} */
export var zoomBadgeMotion = trigger('zoomBadgeMotion', [
    transition(':enter', [
        style({ opacity: 0, transform: 'scale(0) translate(50%, -50%)' }),
        animate(AnimationDuration.SLOW + " " + AnimationCurves.EASE_OUT_BACK, style({
            opacity: 1,
            transform: 'scale(1) translate(50%, -50%)'
        }))
    ]),
    transition(':leave', [
        style({ opacity: 1, transform: 'scale(1) translate(50%, -50%)' }),
        animate(AnimationDuration.SLOW + " " + AnimationCurves.EASE_IN_BACK, style({
            opacity: 0,
            transform: 'scale(0) translate(50%, -50%)'
        }))
    ])
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbImFuaW1hdGlvbi96b29tLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBNEIsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRyxPQUFPLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBRXhFLE1BQU0sS0FBTyxVQUFVLEdBQTZCLE9BQU8sQ0FBQyxZQUFZLEVBQUU7SUFDeEUsVUFBVSxDQUFDLFFBQVEsRUFBRTtRQUNuQixLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsQ0FBQztRQUM5QyxPQUFPLENBQ0YsaUJBQWlCLENBQUMsSUFBSSxTQUFJLGVBQWUsQ0FBQyxhQUFlLEVBQzVELEtBQUssQ0FBQztZQUNKLE9BQU8sRUFBRSxDQUFDO1lBQ1YsU0FBUyxFQUFFLFVBQVU7U0FDdEIsQ0FBQyxDQUNIO0tBQ0YsQ0FBQztJQUNGLFVBQVUsQ0FBQyxRQUFRLEVBQUU7UUFDbkIsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLENBQUM7UUFDNUMsT0FBTyxDQUNGLGlCQUFpQixDQUFDLElBQUksU0FBSSxlQUFlLENBQUMsZ0JBQWtCLEVBQy9ELEtBQUssQ0FBQztZQUNKLE9BQU8sRUFBRSxDQUFDO1lBQ1YsU0FBUyxFQUFFLFlBQVk7U0FDeEIsQ0FBQyxDQUNIO0tBQ0YsQ0FBQztDQUNILENBQUM7O0FBQ0YsTUFBTSxLQUFPLGFBQWEsR0FBNkIsT0FBTyxDQUFDLGVBQWUsRUFBRTtJQUM5RSxVQUFVLENBQUMsZ0JBQWdCLEVBQUU7UUFDM0IsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLENBQUM7UUFDOUMsT0FBTyxDQUNGLGlCQUFpQixDQUFDLElBQUksU0FBSSxlQUFlLENBQUMsYUFBZSxFQUM1RCxLQUFLLENBQUM7WUFDSixPQUFPLEVBQUUsQ0FBQztZQUNWLFNBQVMsRUFBRSxVQUFVO1NBQ3RCLENBQUMsQ0FDSDtLQUNGLENBQUM7SUFDRixVQUFVLENBQUMsZ0JBQWdCLEVBQUU7UUFDM0IsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLENBQUM7UUFDNUMsT0FBTyxDQUNGLGlCQUFpQixDQUFDLElBQUksU0FBSSxlQUFlLENBQUMsZ0JBQWtCLEVBQy9ELEtBQUssQ0FBQztZQUNKLE9BQU8sRUFBRSxDQUFDO1lBQ1YsU0FBUyxFQUFFLFlBQVk7U0FDeEIsQ0FBQyxDQUNIO0tBQ0YsQ0FBQztDQUNILENBQUM7O0FBQ0YsTUFBTSxLQUFPLGVBQWUsR0FBNkIsT0FBTyxDQUFDLGlCQUFpQixFQUFFO0lBQ2xGLFVBQVUsQ0FBQyxRQUFRLEVBQUU7UUFDbkIsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsK0JBQStCLEVBQUUsQ0FBQztRQUNqRSxPQUFPLENBQ0YsaUJBQWlCLENBQUMsSUFBSSxTQUFJLGVBQWUsQ0FBQyxhQUFlLEVBQzVELEtBQUssQ0FBQztZQUNKLE9BQU8sRUFBRSxDQUFDO1lBQ1YsU0FBUyxFQUFFLCtCQUErQjtTQUMzQyxDQUFDLENBQ0g7S0FDRixDQUFDO0lBQ0YsVUFBVSxDQUFDLFFBQVEsRUFBRTtRQUNuQixLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSwrQkFBK0IsRUFBRSxDQUFDO1FBQ2pFLE9BQU8sQ0FDRixpQkFBaUIsQ0FBQyxJQUFJLFNBQUksZUFBZSxDQUFDLFlBQWMsRUFDM0QsS0FBSyxDQUFDO1lBQ0osT0FBTyxFQUFFLENBQUM7WUFDVixTQUFTLEVBQUUsK0JBQStCO1NBQzNDLENBQUMsQ0FDSDtLQUNGLENBQUM7Q0FDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBhbmltYXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciwgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IEFuaW1hdGlvbkN1cnZlcywgQW5pbWF0aW9uRHVyYXRpb24gfSBmcm9tICcuL2FuaW1hdGlvbi1jb25zdHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHpvb21Nb3Rpb246IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoJ3pvb21Nb3Rpb24nLCBbXHJcbiAgdHJhbnNpdGlvbignOmVudGVyJywgW1xyXG4gICAgc3R5bGUoeyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICdzY2FsZSgwLjIpJyB9KSxcclxuICAgIGFuaW1hdGUoXHJcbiAgICAgIGAke0FuaW1hdGlvbkR1cmF0aW9uLkJBU0V9ICR7QW5pbWF0aW9uQ3VydmVzLkVBU0VfT1VUX0NJUkN9YCxcclxuICAgICAgc3R5bGUoe1xyXG4gICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknXHJcbiAgICAgIH0pXHJcbiAgICApXHJcbiAgXSksXHJcbiAgdHJhbnNpdGlvbignOmxlYXZlJywgW1xyXG4gICAgc3R5bGUoeyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICdzY2FsZSgxKScgfSksXHJcbiAgICBhbmltYXRlKFxyXG4gICAgICBgJHtBbmltYXRpb25EdXJhdGlvbi5CQVNFfSAke0FuaW1hdGlvbkN1cnZlcy5FQVNFX0lOX09VVF9DSVJDfWAsXHJcbiAgICAgIHN0eWxlKHtcclxuICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDAuMiknXHJcbiAgICAgIH0pXHJcbiAgICApXHJcbiAgXSlcclxuXSk7XHJcbmV4cG9ydCBjb25zdCB6b29tQmlnTW90aW9uOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgPSB0cmlnZ2VyKCd6b29tQmlnTW90aW9uJywgW1xyXG4gIHRyYW5zaXRpb24oJ3ZvaWQgPT4gYWN0aXZlJywgW1xyXG4gICAgc3R5bGUoeyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICdzY2FsZSgwLjgpJyB9KSxcclxuICAgIGFuaW1hdGUoXHJcbiAgICAgIGAke0FuaW1hdGlvbkR1cmF0aW9uLkJBU0V9ICR7QW5pbWF0aW9uQ3VydmVzLkVBU0VfT1VUX0NJUkN9YCxcclxuICAgICAgc3R5bGUoe1xyXG4gICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknXHJcbiAgICAgIH0pXHJcbiAgICApXHJcbiAgXSksXHJcbiAgdHJhbnNpdGlvbignYWN0aXZlID0+IHZvaWQnLCBbXHJcbiAgICBzdHlsZSh7IG9wYWNpdHk6IDEsIHRyYW5zZm9ybTogJ3NjYWxlKDEpJyB9KSxcclxuICAgIGFuaW1hdGUoXHJcbiAgICAgIGAke0FuaW1hdGlvbkR1cmF0aW9uLkJBU0V9ICR7QW5pbWF0aW9uQ3VydmVzLkVBU0VfSU5fT1VUX0NJUkN9YCxcclxuICAgICAgc3R5bGUoe1xyXG4gICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMC44KSdcclxuICAgICAgfSlcclxuICAgIClcclxuICBdKVxyXG5dKTtcclxuZXhwb3J0IGNvbnN0IHpvb21CYWRnZU1vdGlvbjogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhID0gdHJpZ2dlcignem9vbUJhZGdlTW90aW9uJywgW1xyXG4gIHRyYW5zaXRpb24oJzplbnRlcicsIFtcclxuICAgIHN0eWxlKHsgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAnc2NhbGUoMCkgdHJhbnNsYXRlKDUwJSwgLTUwJSknIH0pLFxyXG4gICAgYW5pbWF0ZShcclxuICAgICAgYCR7QW5pbWF0aW9uRHVyYXRpb24uU0xPV30gJHtBbmltYXRpb25DdXJ2ZXMuRUFTRV9PVVRfQkFDS31gLFxyXG4gICAgICBzdHlsZSh7XHJcbiAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKSB0cmFuc2xhdGUoNTAlLCAtNTAlKSdcclxuICAgICAgfSlcclxuICAgIClcclxuICBdKSxcclxuICB0cmFuc2l0aW9uKCc6bGVhdmUnLCBbXHJcbiAgICBzdHlsZSh7IG9wYWNpdHk6IDEsIHRyYW5zZm9ybTogJ3NjYWxlKDEpIHRyYW5zbGF0ZSg1MCUsIC01MCUpJyB9KSxcclxuICAgIGFuaW1hdGUoXHJcbiAgICAgIGAke0FuaW1hdGlvbkR1cmF0aW9uLlNMT1d9ICR7QW5pbWF0aW9uQ3VydmVzLkVBU0VfSU5fQkFDS31gLFxyXG4gICAgICBzdHlsZSh7XHJcbiAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgwKSB0cmFuc2xhdGUoNTAlLCAtNTAlKSdcclxuICAgICAgfSlcclxuICAgIClcclxuICBdKVxyXG5dKTtcclxuIl19
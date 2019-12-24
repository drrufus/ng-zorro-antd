/**
 * @fileoverview added by tsickle
 * Generated from: animation/zoom.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbImFuaW1hdGlvbi96b29tLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQTRCLE1BQU0scUJBQXFCLENBQUM7QUFDcEcsT0FBTyxFQUFFLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQUV4RSxNQUFNLEtBQU8sVUFBVSxHQUE2QixPQUFPLENBQUMsWUFBWSxFQUFFO0lBQ3hFLFVBQVUsQ0FBQyxRQUFRLEVBQUU7UUFDbkIsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLENBQUM7UUFDOUMsT0FBTyxDQUNGLGlCQUFpQixDQUFDLElBQUksU0FBSSxlQUFlLENBQUMsYUFBZSxFQUM1RCxLQUFLLENBQUM7WUFDSixPQUFPLEVBQUUsQ0FBQztZQUNWLFNBQVMsRUFBRSxVQUFVO1NBQ3RCLENBQUMsQ0FDSDtLQUNGLENBQUM7SUFDRixVQUFVLENBQUMsUUFBUSxFQUFFO1FBQ25CLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxDQUFDO1FBQzVDLE9BQU8sQ0FDRixpQkFBaUIsQ0FBQyxJQUFJLFNBQUksZUFBZSxDQUFDLGdCQUFrQixFQUMvRCxLQUFLLENBQUM7WUFDSixPQUFPLEVBQUUsQ0FBQztZQUNWLFNBQVMsRUFBRSxZQUFZO1NBQ3hCLENBQUMsQ0FDSDtLQUNGLENBQUM7Q0FDSCxDQUFDOztBQUNGLE1BQU0sS0FBTyxhQUFhLEdBQTZCLE9BQU8sQ0FBQyxlQUFlLEVBQUU7SUFDOUUsVUFBVSxDQUFDLGdCQUFnQixFQUFFO1FBQzNCLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxDQUFDO1FBQzlDLE9BQU8sQ0FDRixpQkFBaUIsQ0FBQyxJQUFJLFNBQUksZUFBZSxDQUFDLGFBQWUsRUFDNUQsS0FBSyxDQUFDO1lBQ0osT0FBTyxFQUFFLENBQUM7WUFDVixTQUFTLEVBQUUsVUFBVTtTQUN0QixDQUFDLENBQ0g7S0FDRixDQUFDO0lBQ0YsVUFBVSxDQUFDLGdCQUFnQixFQUFFO1FBQzNCLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxDQUFDO1FBQzVDLE9BQU8sQ0FDRixpQkFBaUIsQ0FBQyxJQUFJLFNBQUksZUFBZSxDQUFDLGdCQUFrQixFQUMvRCxLQUFLLENBQUM7WUFDSixPQUFPLEVBQUUsQ0FBQztZQUNWLFNBQVMsRUFBRSxZQUFZO1NBQ3hCLENBQUMsQ0FDSDtLQUNGLENBQUM7Q0FDSCxDQUFDOztBQUNGLE1BQU0sS0FBTyxlQUFlLEdBQTZCLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRTtJQUNsRixVQUFVLENBQUMsUUFBUSxFQUFFO1FBQ25CLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLCtCQUErQixFQUFFLENBQUM7UUFDakUsT0FBTyxDQUNGLGlCQUFpQixDQUFDLElBQUksU0FBSSxlQUFlLENBQUMsYUFBZSxFQUM1RCxLQUFLLENBQUM7WUFDSixPQUFPLEVBQUUsQ0FBQztZQUNWLFNBQVMsRUFBRSwrQkFBK0I7U0FDM0MsQ0FBQyxDQUNIO0tBQ0YsQ0FBQztJQUNGLFVBQVUsQ0FBQyxRQUFRLEVBQUU7UUFDbkIsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsK0JBQStCLEVBQUUsQ0FBQztRQUNqRSxPQUFPLENBQ0YsaUJBQWlCLENBQUMsSUFBSSxTQUFJLGVBQWUsQ0FBQyxZQUFjLEVBQzNELEtBQUssQ0FBQztZQUNKLE9BQU8sRUFBRSxDQUFDO1lBQ1YsU0FBUyxFQUFFLCtCQUErQjtTQUMzQyxDQUFDLENBQ0g7S0FDRixDQUFDO0NBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBhbmltYXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciwgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBBbmltYXRpb25DdXJ2ZXMsIEFuaW1hdGlvbkR1cmF0aW9uIH0gZnJvbSAnLi9hbmltYXRpb24tY29uc3RzJztcblxuZXhwb3J0IGNvbnN0IHpvb21Nb3Rpb246IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoJ3pvb21Nb3Rpb24nLCBbXG4gIHRyYW5zaXRpb24oJzplbnRlcicsIFtcbiAgICBzdHlsZSh7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3NjYWxlKDAuMiknIH0pLFxuICAgIGFuaW1hdGUoXG4gICAgICBgJHtBbmltYXRpb25EdXJhdGlvbi5CQVNFfSAke0FuaW1hdGlvbkN1cnZlcy5FQVNFX09VVF9DSVJDfWAsXG4gICAgICBzdHlsZSh7XG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJ1xuICAgICAgfSlcbiAgICApXG4gIF0pLFxuICB0cmFuc2l0aW9uKCc6bGVhdmUnLCBbXG4gICAgc3R5bGUoeyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICdzY2FsZSgxKScgfSksXG4gICAgYW5pbWF0ZShcbiAgICAgIGAke0FuaW1hdGlvbkR1cmF0aW9uLkJBU0V9ICR7QW5pbWF0aW9uQ3VydmVzLkVBU0VfSU5fT1VUX0NJUkN9YCxcbiAgICAgIHN0eWxlKHtcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMC4yKSdcbiAgICAgIH0pXG4gICAgKVxuICBdKVxuXSk7XG5leHBvcnQgY29uc3Qgem9vbUJpZ01vdGlvbjogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhID0gdHJpZ2dlcignem9vbUJpZ01vdGlvbicsIFtcbiAgdHJhbnNpdGlvbigndm9pZCA9PiBhY3RpdmUnLCBbXG4gICAgc3R5bGUoeyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICdzY2FsZSgwLjgpJyB9KSxcbiAgICBhbmltYXRlKFxuICAgICAgYCR7QW5pbWF0aW9uRHVyYXRpb24uQkFTRX0gJHtBbmltYXRpb25DdXJ2ZXMuRUFTRV9PVVRfQ0lSQ31gLFxuICAgICAgc3R5bGUoe1xuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKSdcbiAgICAgIH0pXG4gICAgKVxuICBdKSxcbiAgdHJhbnNpdGlvbignYWN0aXZlID0+IHZvaWQnLCBbXG4gICAgc3R5bGUoeyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICdzY2FsZSgxKScgfSksXG4gICAgYW5pbWF0ZShcbiAgICAgIGAke0FuaW1hdGlvbkR1cmF0aW9uLkJBU0V9ICR7QW5pbWF0aW9uQ3VydmVzLkVBU0VfSU5fT1VUX0NJUkN9YCxcbiAgICAgIHN0eWxlKHtcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMC44KSdcbiAgICAgIH0pXG4gICAgKVxuICBdKVxuXSk7XG5leHBvcnQgY29uc3Qgem9vbUJhZGdlTW90aW9uOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgPSB0cmlnZ2VyKCd6b29tQmFkZ2VNb3Rpb24nLCBbXG4gIHRyYW5zaXRpb24oJzplbnRlcicsIFtcbiAgICBzdHlsZSh7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3NjYWxlKDApIHRyYW5zbGF0ZSg1MCUsIC01MCUpJyB9KSxcbiAgICBhbmltYXRlKFxuICAgICAgYCR7QW5pbWF0aW9uRHVyYXRpb24uU0xPV30gJHtBbmltYXRpb25DdXJ2ZXMuRUFTRV9PVVRfQkFDS31gLFxuICAgICAgc3R5bGUoe1xuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKSB0cmFuc2xhdGUoNTAlLCAtNTAlKSdcbiAgICAgIH0pXG4gICAgKVxuICBdKSxcbiAgdHJhbnNpdGlvbignOmxlYXZlJywgW1xuICAgIHN0eWxlKHsgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAnc2NhbGUoMSkgdHJhbnNsYXRlKDUwJSwgLTUwJSknIH0pLFxuICAgIGFuaW1hdGUoXG4gICAgICBgJHtBbmltYXRpb25EdXJhdGlvbi5TTE9XfSAke0FuaW1hdGlvbkN1cnZlcy5FQVNFX0lOX0JBQ0t9YCxcbiAgICAgIHN0eWxlKHtcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMCkgdHJhbnNsYXRlKDUwJSwgLTUwJSknXG4gICAgICB9KVxuICAgIClcbiAgXSlcbl0pO1xuIl19
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbImFuaW1hdGlvbi96b29tLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQTRCLE1BQU0scUJBQXFCLENBQUM7QUFDcEcsT0FBTyxFQUFFLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQUV4RSxNQUFNLEtBQU8sVUFBVSxHQUE2QixPQUFPLENBQUMsWUFBWSxFQUFFO0lBQ3hFLFVBQVUsQ0FBQyxRQUFRLEVBQUU7UUFDbkIsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLENBQUM7UUFDOUMsT0FBTyxDQUNGLGlCQUFpQixDQUFDLElBQUksU0FBSSxlQUFlLENBQUMsYUFBZSxFQUM1RCxLQUFLLENBQUM7WUFDSixPQUFPLEVBQUUsQ0FBQztZQUNWLFNBQVMsRUFBRSxVQUFVO1NBQ3RCLENBQUMsQ0FDSDtLQUNGLENBQUM7SUFDRixVQUFVLENBQUMsUUFBUSxFQUFFO1FBQ25CLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxDQUFDO1FBQzVDLE9BQU8sQ0FDRixpQkFBaUIsQ0FBQyxJQUFJLFNBQUksZUFBZSxDQUFDLGdCQUFrQixFQUMvRCxLQUFLLENBQUM7WUFDSixPQUFPLEVBQUUsQ0FBQztZQUNWLFNBQVMsRUFBRSxZQUFZO1NBQ3hCLENBQUMsQ0FDSDtLQUNGLENBQUM7Q0FDSCxDQUFDOztBQUNGLE1BQU0sS0FBTyxhQUFhLEdBQTZCLE9BQU8sQ0FBQyxlQUFlLEVBQUU7SUFDOUUsVUFBVSxDQUFDLGdCQUFnQixFQUFFO1FBQzNCLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxDQUFDO1FBQzlDLE9BQU8sQ0FDRixpQkFBaUIsQ0FBQyxJQUFJLFNBQUksZUFBZSxDQUFDLGFBQWUsRUFDNUQsS0FBSyxDQUFDO1lBQ0osT0FBTyxFQUFFLENBQUM7WUFDVixTQUFTLEVBQUUsVUFBVTtTQUN0QixDQUFDLENBQ0g7S0FDRixDQUFDO0lBQ0YsVUFBVSxDQUFDLGdCQUFnQixFQUFFO1FBQzNCLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxDQUFDO1FBQzVDLE9BQU8sQ0FDRixpQkFBaUIsQ0FBQyxJQUFJLFNBQUksZUFBZSxDQUFDLGdCQUFrQixFQUMvRCxLQUFLLENBQUM7WUFDSixPQUFPLEVBQUUsQ0FBQztZQUNWLFNBQVMsRUFBRSxZQUFZO1NBQ3hCLENBQUMsQ0FDSDtLQUNGLENBQUM7Q0FDSCxDQUFDOztBQUNGLE1BQU0sS0FBTyxlQUFlLEdBQTZCLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRTtJQUNsRixVQUFVLENBQUMsUUFBUSxFQUFFO1FBQ25CLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLCtCQUErQixFQUFFLENBQUM7UUFDakUsT0FBTyxDQUNGLGlCQUFpQixDQUFDLElBQUksU0FBSSxlQUFlLENBQUMsYUFBZSxFQUM1RCxLQUFLLENBQUM7WUFDSixPQUFPLEVBQUUsQ0FBQztZQUNWLFNBQVMsRUFBRSwrQkFBK0I7U0FDM0MsQ0FBQyxDQUNIO0tBQ0YsQ0FBQztJQUNGLFVBQVUsQ0FBQyxRQUFRLEVBQUU7UUFDbkIsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsK0JBQStCLEVBQUUsQ0FBQztRQUNqRSxPQUFPLENBQ0YsaUJBQWlCLENBQUMsSUFBSSxTQUFJLGVBQWUsQ0FBQyxZQUFjLEVBQzNELEtBQUssQ0FBQztZQUNKLE9BQU8sRUFBRSxDQUFDO1lBQ1YsU0FBUyxFQUFFLCtCQUErQjtTQUMzQyxDQUFDLENBQ0g7S0FDRixDQUFDO0NBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgYW5pbWF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIsIEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBBbmltYXRpb25DdXJ2ZXMsIEFuaW1hdGlvbkR1cmF0aW9uIH0gZnJvbSAnLi9hbmltYXRpb24tY29uc3RzJztcclxuXHJcbmV4cG9ydCBjb25zdCB6b29tTW90aW9uOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgPSB0cmlnZ2VyKCd6b29tTW90aW9uJywgW1xyXG4gIHRyYW5zaXRpb24oJzplbnRlcicsIFtcclxuICAgIHN0eWxlKHsgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAnc2NhbGUoMC4yKScgfSksXHJcbiAgICBhbmltYXRlKFxyXG4gICAgICBgJHtBbmltYXRpb25EdXJhdGlvbi5CQVNFfSAke0FuaW1hdGlvbkN1cnZlcy5FQVNFX09VVF9DSVJDfWAsXHJcbiAgICAgIHN0eWxlKHtcclxuICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJ1xyXG4gICAgICB9KVxyXG4gICAgKVxyXG4gIF0pLFxyXG4gIHRyYW5zaXRpb24oJzpsZWF2ZScsIFtcclxuICAgIHN0eWxlKHsgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAnc2NhbGUoMSknIH0pLFxyXG4gICAgYW5pbWF0ZShcclxuICAgICAgYCR7QW5pbWF0aW9uRHVyYXRpb24uQkFTRX0gJHtBbmltYXRpb25DdXJ2ZXMuRUFTRV9JTl9PVVRfQ0lSQ31gLFxyXG4gICAgICBzdHlsZSh7XHJcbiAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgwLjIpJ1xyXG4gICAgICB9KVxyXG4gICAgKVxyXG4gIF0pXHJcbl0pO1xyXG5leHBvcnQgY29uc3Qgem9vbUJpZ01vdGlvbjogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhID0gdHJpZ2dlcignem9vbUJpZ01vdGlvbicsIFtcclxuICB0cmFuc2l0aW9uKCd2b2lkID0+IGFjdGl2ZScsIFtcclxuICAgIHN0eWxlKHsgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAnc2NhbGUoMC44KScgfSksXHJcbiAgICBhbmltYXRlKFxyXG4gICAgICBgJHtBbmltYXRpb25EdXJhdGlvbi5CQVNFfSAke0FuaW1hdGlvbkN1cnZlcy5FQVNFX09VVF9DSVJDfWAsXHJcbiAgICAgIHN0eWxlKHtcclxuICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJ1xyXG4gICAgICB9KVxyXG4gICAgKVxyXG4gIF0pLFxyXG4gIHRyYW5zaXRpb24oJ2FjdGl2ZSA9PiB2b2lkJywgW1xyXG4gICAgc3R5bGUoeyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICdzY2FsZSgxKScgfSksXHJcbiAgICBhbmltYXRlKFxyXG4gICAgICBgJHtBbmltYXRpb25EdXJhdGlvbi5CQVNFfSAke0FuaW1hdGlvbkN1cnZlcy5FQVNFX0lOX09VVF9DSVJDfWAsXHJcbiAgICAgIHN0eWxlKHtcclxuICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDAuOCknXHJcbiAgICAgIH0pXHJcbiAgICApXHJcbiAgXSlcclxuXSk7XHJcbmV4cG9ydCBjb25zdCB6b29tQmFkZ2VNb3Rpb246IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoJ3pvb21CYWRnZU1vdGlvbicsIFtcclxuICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBbXHJcbiAgICBzdHlsZSh7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3NjYWxlKDApIHRyYW5zbGF0ZSg1MCUsIC01MCUpJyB9KSxcclxuICAgIGFuaW1hdGUoXHJcbiAgICAgIGAke0FuaW1hdGlvbkR1cmF0aW9uLlNMT1d9ICR7QW5pbWF0aW9uQ3VydmVzLkVBU0VfT1VUX0JBQ0t9YCxcclxuICAgICAgc3R5bGUoe1xyXG4gICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMSkgdHJhbnNsYXRlKDUwJSwgLTUwJSknXHJcbiAgICAgIH0pXHJcbiAgICApXHJcbiAgXSksXHJcbiAgdHJhbnNpdGlvbignOmxlYXZlJywgW1xyXG4gICAgc3R5bGUoeyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICdzY2FsZSgxKSB0cmFuc2xhdGUoNTAlLCAtNTAlKScgfSksXHJcbiAgICBhbmltYXRlKFxyXG4gICAgICBgJHtBbmltYXRpb25EdXJhdGlvbi5TTE9XfSAke0FuaW1hdGlvbkN1cnZlcy5FQVNFX0lOX0JBQ0t9YCxcclxuICAgICAgc3R5bGUoe1xyXG4gICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMCkgdHJhbnNsYXRlKDUwJSwgLTUwJSknXHJcbiAgICAgIH0pXHJcbiAgICApXHJcbiAgXSlcclxuXSk7XHJcbiJdfQ==
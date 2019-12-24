/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AnimationCurves, AnimationDuration } from './animation-consts';
var ANIMATION_TRANSITION_IN = AnimationDuration.BASE + " " + AnimationCurves.EASE_OUT_QUINT;
var ANIMATION_TRANSITION_OUT = AnimationDuration.BASE + " " + AnimationCurves.EASE_IN_QUINT;
export var slideMotion = trigger('slideMotion', [
    state('bottom', style({
        opacity: 1,
        transform: 'scaleY(1)',
        transformOrigin: '0% 0%'
    })),
    state('top', style({
        opacity: 1,
        transform: 'scaleY(1)',
        transformOrigin: '0% 100%'
    })),
    transition('void => bottom', [
        style({
            opacity: 0,
            transform: 'scaleY(0.8)',
            transformOrigin: '0% 0%'
        }),
        animate(ANIMATION_TRANSITION_IN)
    ]),
    transition('bottom => void', [
        animate(ANIMATION_TRANSITION_OUT, style({
            opacity: 0,
            transform: 'scaleY(0.8)',
            transformOrigin: '0% 0%'
        }))
    ]),
    transition('void => top', [
        style({
            opacity: 0,
            transform: 'scaleY(0.8)',
            transformOrigin: '0% 100%'
        }),
        animate(ANIMATION_TRANSITION_IN)
    ]),
    transition('top => void', [
        animate(ANIMATION_TRANSITION_OUT, style({
            opacity: 0,
            transform: 'scaleY(0.8)',
            transformOrigin: '0% 100%'
        }))
    ])
]);
export var slideAlertMotion = trigger('slideAlertMotion', [
    transition(':leave', [
        style({ opacity: 1, transform: 'scaleY(1)', transformOrigin: '0% 0%' }),
        animate(AnimationDuration.SLOW + " " + AnimationCurves.EASE_IN_OUT_CIRC, style({
            opacity: 0,
            transform: 'scaleY(0)',
            transformOrigin: '0% 0%'
        }))
    ])
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJhbmltYXRpb24vc2xpZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLE9BQU8sRUFBNEIsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDM0csT0FBTyxFQUFFLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXhFLElBQU0sdUJBQXVCLEdBQU0saUJBQWlCLENBQUMsSUFBSSxTQUFJLGVBQWUsQ0FBQyxjQUFnQixDQUFDO0FBQzlGLElBQU0sd0JBQXdCLEdBQU0saUJBQWlCLENBQUMsSUFBSSxTQUFJLGVBQWUsQ0FBQyxhQUFlLENBQUM7QUFFOUYsTUFBTSxDQUFDLElBQU0sV0FBVyxHQUE2QixPQUFPLENBQUMsYUFBYSxFQUFFO0lBQzFFLEtBQUssQ0FDSCxRQUFRLEVBQ1IsS0FBSyxDQUFDO1FBQ0osT0FBTyxFQUFFLENBQUM7UUFDVixTQUFTLEVBQUUsV0FBVztRQUN0QixlQUFlLEVBQUUsT0FBTztLQUN6QixDQUFDLENBQ0g7SUFDRCxLQUFLLENBQ0gsS0FBSyxFQUNMLEtBQUssQ0FBQztRQUNKLE9BQU8sRUFBRSxDQUFDO1FBQ1YsU0FBUyxFQUFFLFdBQVc7UUFDdEIsZUFBZSxFQUFFLFNBQVM7S0FDM0IsQ0FBQyxDQUNIO0lBQ0QsVUFBVSxDQUFDLGdCQUFnQixFQUFFO1FBQzNCLEtBQUssQ0FBQztZQUNKLE9BQU8sRUFBRSxDQUFDO1lBQ1YsU0FBUyxFQUFFLGFBQWE7WUFDeEIsZUFBZSxFQUFFLE9BQU87U0FDekIsQ0FBQztRQUNGLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQztLQUNqQyxDQUFDO0lBQ0YsVUFBVSxDQUFDLGdCQUFnQixFQUFFO1FBQzNCLE9BQU8sQ0FDTCx3QkFBd0IsRUFDeEIsS0FBSyxDQUFDO1lBQ0osT0FBTyxFQUFFLENBQUM7WUFDVixTQUFTLEVBQUUsYUFBYTtZQUN4QixlQUFlLEVBQUUsT0FBTztTQUN6QixDQUFDLENBQ0g7S0FDRixDQUFDO0lBQ0YsVUFBVSxDQUFDLGFBQWEsRUFBRTtRQUN4QixLQUFLLENBQUM7WUFDSixPQUFPLEVBQUUsQ0FBQztZQUNWLFNBQVMsRUFBRSxhQUFhO1lBQ3hCLGVBQWUsRUFBRSxTQUFTO1NBQzNCLENBQUM7UUFDRixPQUFPLENBQUMsdUJBQXVCLENBQUM7S0FDakMsQ0FBQztJQUNGLFVBQVUsQ0FBQyxhQUFhLEVBQUU7UUFDeEIsT0FBTyxDQUNMLHdCQUF3QixFQUN4QixLQUFLLENBQUM7WUFDSixPQUFPLEVBQUUsQ0FBQztZQUNWLFNBQVMsRUFBRSxhQUFhO1lBQ3hCLGVBQWUsRUFBRSxTQUFTO1NBQzNCLENBQUMsQ0FDSDtLQUNGLENBQUM7Q0FDSCxDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsSUFBTSxnQkFBZ0IsR0FBNkIsT0FBTyxDQUFDLGtCQUFrQixFQUFFO0lBQ3BGLFVBQVUsQ0FBQyxRQUFRLEVBQUU7UUFDbkIsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsQ0FBQztRQUN2RSxPQUFPLENBQ0YsaUJBQWlCLENBQUMsSUFBSSxTQUFJLGVBQWUsQ0FBQyxnQkFBa0IsRUFDL0QsS0FBSyxDQUFDO1lBQ0osT0FBTyxFQUFFLENBQUM7WUFDVixTQUFTLEVBQUUsV0FBVztZQUN0QixlQUFlLEVBQUUsT0FBTztTQUN6QixDQUFDLENBQ0g7S0FDRixDQUFDO0NBQ0gsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBhbmltYXRlLCBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBBbmltYXRpb25DdXJ2ZXMsIEFuaW1hdGlvbkR1cmF0aW9uIH0gZnJvbSAnLi9hbmltYXRpb24tY29uc3RzJztcclxuXHJcbmNvbnN0IEFOSU1BVElPTl9UUkFOU0lUSU9OX0lOID0gYCR7QW5pbWF0aW9uRHVyYXRpb24uQkFTRX0gJHtBbmltYXRpb25DdXJ2ZXMuRUFTRV9PVVRfUVVJTlR9YDtcclxuY29uc3QgQU5JTUFUSU9OX1RSQU5TSVRJT05fT1VUID0gYCR7QW5pbWF0aW9uRHVyYXRpb24uQkFTRX0gJHtBbmltYXRpb25DdXJ2ZXMuRUFTRV9JTl9RVUlOVH1gO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNsaWRlTW90aW9uOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgPSB0cmlnZ2VyKCdzbGlkZU1vdGlvbicsIFtcclxuICBzdGF0ZShcclxuICAgICdib3R0b20nLFxyXG4gICAgc3R5bGUoe1xyXG4gICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZVkoMSknLFxyXG4gICAgICB0cmFuc2Zvcm1PcmlnaW46ICcwJSAwJSdcclxuICAgIH0pXHJcbiAgKSxcclxuICBzdGF0ZShcclxuICAgICd0b3AnLFxyXG4gICAgc3R5bGUoe1xyXG4gICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZVkoMSknLFxyXG4gICAgICB0cmFuc2Zvcm1PcmlnaW46ICcwJSAxMDAlJ1xyXG4gICAgfSlcclxuICApLFxyXG4gIHRyYW5zaXRpb24oJ3ZvaWQgPT4gYm90dG9tJywgW1xyXG4gICAgc3R5bGUoe1xyXG4gICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZVkoMC44KScsXHJcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzAlIDAlJ1xyXG4gICAgfSksXHJcbiAgICBhbmltYXRlKEFOSU1BVElPTl9UUkFOU0lUSU9OX0lOKVxyXG4gIF0pLFxyXG4gIHRyYW5zaXRpb24oJ2JvdHRvbSA9PiB2b2lkJywgW1xyXG4gICAgYW5pbWF0ZShcclxuICAgICAgQU5JTUFUSU9OX1RSQU5TSVRJT05fT1VULFxyXG4gICAgICBzdHlsZSh7XHJcbiAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZVkoMC44KScsXHJcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnMCUgMCUnXHJcbiAgICAgIH0pXHJcbiAgICApXHJcbiAgXSksXHJcbiAgdHJhbnNpdGlvbigndm9pZCA9PiB0b3AnLCBbXHJcbiAgICBzdHlsZSh7XHJcbiAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWSgwLjgpJyxcclxuICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnMCUgMTAwJSdcclxuICAgIH0pLFxyXG4gICAgYW5pbWF0ZShBTklNQVRJT05fVFJBTlNJVElPTl9JTilcclxuICBdKSxcclxuICB0cmFuc2l0aW9uKCd0b3AgPT4gdm9pZCcsIFtcclxuICAgIGFuaW1hdGUoXHJcbiAgICAgIEFOSU1BVElPTl9UUkFOU0lUSU9OX09VVCxcclxuICAgICAgc3R5bGUoe1xyXG4gICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGVZKDAuOCknLFxyXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzAlIDEwMCUnXHJcbiAgICAgIH0pXHJcbiAgICApXHJcbiAgXSlcclxuXSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2xpZGVBbGVydE1vdGlvbjogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhID0gdHJpZ2dlcignc2xpZGVBbGVydE1vdGlvbicsIFtcclxuICB0cmFuc2l0aW9uKCc6bGVhdmUnLCBbXHJcbiAgICBzdHlsZSh7IG9wYWNpdHk6IDEsIHRyYW5zZm9ybTogJ3NjYWxlWSgxKScsIHRyYW5zZm9ybU9yaWdpbjogJzAlIDAlJyB9KSxcclxuICAgIGFuaW1hdGUoXHJcbiAgICAgIGAke0FuaW1hdGlvbkR1cmF0aW9uLlNMT1d9ICR7QW5pbWF0aW9uQ3VydmVzLkVBU0VfSU5fT1VUX0NJUkN9YCxcclxuICAgICAgc3R5bGUoe1xyXG4gICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGVZKDApJyxcclxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICcwJSAwJSdcclxuICAgICAgfSlcclxuICAgIClcclxuICBdKVxyXG5dKTtcclxuIl19
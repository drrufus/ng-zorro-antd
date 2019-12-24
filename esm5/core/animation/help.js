/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { animate, style, transition, trigger } from '@angular/animations';
import { AnimationCurves, AnimationDuration } from './animation-consts';
export var helpMotion = trigger('helpMotion', [
    transition(':enter', [
        style({
            opacity: 0,
            transform: 'translateY(-5px)'
        }),
        animate(AnimationDuration.SLOW + " " + AnimationCurves.EASE_IN_OUT, style({
            opacity: 1,
            transform: 'translateY(0)'
        }))
    ]),
    transition(':leave', [
        style({
            opacity: 1,
            transform: 'translateY(0)'
        }),
        animate(AnimationDuration.SLOW + " " + AnimationCurves.EASE_IN_OUT, style({
            opacity: 0,
            transform: 'translateY(-5px)'
        }))
    ])
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbImFuaW1hdGlvbi9oZWxwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBRSxPQUFPLEVBQTRCLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDcEcsT0FBTyxFQUFFLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXhFLE1BQU0sQ0FBQyxJQUFNLFVBQVUsR0FBNkIsT0FBTyxDQUFDLFlBQVksRUFBRTtJQUN4RSxVQUFVLENBQUMsUUFBUSxFQUFFO1FBQ25CLEtBQUssQ0FBQztZQUNKLE9BQU8sRUFBRSxDQUFDO1lBQ1YsU0FBUyxFQUFFLGtCQUFrQjtTQUM5QixDQUFDO1FBQ0YsT0FBTyxDQUNGLGlCQUFpQixDQUFDLElBQUksU0FBSSxlQUFlLENBQUMsV0FBYSxFQUMxRCxLQUFLLENBQUM7WUFDSixPQUFPLEVBQUUsQ0FBQztZQUNWLFNBQVMsRUFBRSxlQUFlO1NBQzNCLENBQUMsQ0FDSDtLQUNGLENBQUM7SUFDRixVQUFVLENBQUMsUUFBUSxFQUFFO1FBQ25CLEtBQUssQ0FBQztZQUNKLE9BQU8sRUFBRSxDQUFDO1lBQ1YsU0FBUyxFQUFFLGVBQWU7U0FDM0IsQ0FBQztRQUNGLE9BQU8sQ0FDRixpQkFBaUIsQ0FBQyxJQUFJLFNBQUksZUFBZSxDQUFDLFdBQWEsRUFDMUQsS0FBSyxDQUFDO1lBQ0osT0FBTyxFQUFFLENBQUM7WUFDVixTQUFTLEVBQUUsa0JBQWtCO1NBQzlCLENBQUMsQ0FDSDtLQUNGLENBQUM7Q0FDSCxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IGFuaW1hdGUsIEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgQW5pbWF0aW9uQ3VydmVzLCBBbmltYXRpb25EdXJhdGlvbiB9IGZyb20gJy4vYW5pbWF0aW9uLWNvbnN0cyc7XHJcblxyXG5leHBvcnQgY29uc3QgaGVscE1vdGlvbjogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhID0gdHJpZ2dlcignaGVscE1vdGlvbicsIFtcclxuICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBbXHJcbiAgICBzdHlsZSh7XHJcbiAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTVweCknXHJcbiAgICB9KSxcclxuICAgIGFuaW1hdGUoXHJcbiAgICAgIGAke0FuaW1hdGlvbkR1cmF0aW9uLlNMT1d9ICR7QW5pbWF0aW9uQ3VydmVzLkVBU0VfSU5fT1VUfWAsXHJcbiAgICAgIHN0eWxlKHtcclxuICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknXHJcbiAgICAgIH0pXHJcbiAgICApXHJcbiAgXSksXHJcbiAgdHJhbnNpdGlvbignOmxlYXZlJywgW1xyXG4gICAgc3R5bGUoe1xyXG4gICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJ1xyXG4gICAgfSksXHJcbiAgICBhbmltYXRlKFxyXG4gICAgICBgJHtBbmltYXRpb25EdXJhdGlvbi5TTE9XfSAke0FuaW1hdGlvbkN1cnZlcy5FQVNFX0lOX09VVH1gLFxyXG4gICAgICBzdHlsZSh7XHJcbiAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01cHgpJ1xyXG4gICAgICB9KVxyXG4gICAgKVxyXG4gIF0pXHJcbl0pO1xyXG4iXX0=
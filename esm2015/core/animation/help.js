/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { animate, style, transition, trigger } from '@angular/animations';
import { AnimationCurves, AnimationDuration } from './animation-consts';
export const helpMotion = trigger('helpMotion', [
    transition(':enter', [
        style({
            opacity: 0,
            transform: 'translateY(-5px)'
        }),
        animate(`${AnimationDuration.SLOW} ${AnimationCurves.EASE_IN_OUT}`, style({
            opacity: 1,
            transform: 'translateY(0)'
        }))
    ]),
    transition(':leave', [
        style({
            opacity: 1,
            transform: 'translateY(0)'
        }),
        animate(`${AnimationDuration.SLOW} ${AnimationCurves.EASE_IN_OUT}`, style({
            opacity: 0,
            transform: 'translateY(-5px)'
        }))
    ])
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbImFuaW1hdGlvbi9oZWxwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBRSxPQUFPLEVBQTRCLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDcEcsT0FBTyxFQUFFLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXhFLE1BQU0sQ0FBQyxNQUFNLFVBQVUsR0FBNkIsT0FBTyxDQUFDLFlBQVksRUFBRTtJQUN4RSxVQUFVLENBQUMsUUFBUSxFQUFFO1FBQ25CLEtBQUssQ0FBQztZQUNKLE9BQU8sRUFBRSxDQUFDO1lBQ1YsU0FBUyxFQUFFLGtCQUFrQjtTQUM5QixDQUFDO1FBQ0YsT0FBTyxDQUNMLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxJQUFJLGVBQWUsQ0FBQyxXQUFXLEVBQUUsRUFDMUQsS0FBSyxDQUFDO1lBQ0osT0FBTyxFQUFFLENBQUM7WUFDVixTQUFTLEVBQUUsZUFBZTtTQUMzQixDQUFDLENBQ0g7S0FDRixDQUFDO0lBQ0YsVUFBVSxDQUFDLFFBQVEsRUFBRTtRQUNuQixLQUFLLENBQUM7WUFDSixPQUFPLEVBQUUsQ0FBQztZQUNWLFNBQVMsRUFBRSxlQUFlO1NBQzNCLENBQUM7UUFDRixPQUFPLENBQ0wsR0FBRyxpQkFBaUIsQ0FBQyxJQUFJLElBQUksZUFBZSxDQUFDLFdBQVcsRUFBRSxFQUMxRCxLQUFLLENBQUM7WUFDSixPQUFPLEVBQUUsQ0FBQztZQUNWLFNBQVMsRUFBRSxrQkFBa0I7U0FDOUIsQ0FBQyxDQUNIO0tBQ0YsQ0FBQztDQUNILENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgYW5pbWF0ZSwgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBBbmltYXRpb25DdXJ2ZXMsIEFuaW1hdGlvbkR1cmF0aW9uIH0gZnJvbSAnLi9hbmltYXRpb24tY29uc3RzJztcclxuXHJcbmV4cG9ydCBjb25zdCBoZWxwTW90aW9uOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgPSB0cmlnZ2VyKCdoZWxwTW90aW9uJywgW1xyXG4gIHRyYW5zaXRpb24oJzplbnRlcicsIFtcclxuICAgIHN0eWxlKHtcclxuICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNXB4KSdcclxuICAgIH0pLFxyXG4gICAgYW5pbWF0ZShcclxuICAgICAgYCR7QW5pbWF0aW9uRHVyYXRpb24uU0xPV30gJHtBbmltYXRpb25DdXJ2ZXMuRUFTRV9JTl9PVVR9YCxcclxuICAgICAgc3R5bGUoe1xyXG4gICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKSdcclxuICAgICAgfSlcclxuICAgIClcclxuICBdKSxcclxuICB0cmFuc2l0aW9uKCc6bGVhdmUnLCBbXHJcbiAgICBzdHlsZSh7XHJcbiAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknXHJcbiAgICB9KSxcclxuICAgIGFuaW1hdGUoXHJcbiAgICAgIGAke0FuaW1hdGlvbkR1cmF0aW9uLlNMT1d9ICR7QW5pbWF0aW9uQ3VydmVzLkVBU0VfSU5fT1VUfWAsXHJcbiAgICAgIHN0eWxlKHtcclxuICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTVweCknXHJcbiAgICAgIH0pXHJcbiAgICApXHJcbiAgXSlcclxuXSk7XHJcbiJdfQ==
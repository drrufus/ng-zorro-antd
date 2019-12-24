/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { animate, style, transition, trigger } from '@angular/animations';
import { AnimationDuration } from './animation-consts';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW92ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbImFuaW1hdGlvbi9tb3ZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBRSxPQUFPLEVBQTRCLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDcEcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdkQsTUFBTSxDQUFDLElBQU0sWUFBWSxHQUE2QixPQUFPLENBQUMsY0FBYyxFQUFFO0lBQzVFLFVBQVUsQ0FBQyxZQUFZLEVBQUU7UUFDdkIsS0FBSyxDQUFDO1lBQ0osZUFBZSxFQUFFLEtBQUs7WUFDdEIsU0FBUyxFQUFFLG1CQUFtQjtZQUM5QixPQUFPLEVBQUUsQ0FBQztTQUNYLENBQUM7UUFDRixPQUFPLENBQ0wsS0FBRyxpQkFBaUIsQ0FBQyxJQUFNLEVBQzNCLEtBQUssQ0FBQztZQUNKLGVBQWUsRUFBRSxLQUFLO1lBQ3RCLFNBQVMsRUFBRSxnQkFBZ0I7WUFDM0IsT0FBTyxFQUFFLENBQUM7U0FDWCxDQUFDLENBQ0g7S0FDRixDQUFDO0lBQ0YsVUFBVSxDQUFDLFlBQVksRUFBRTtRQUN2QixLQUFLLENBQUM7WUFDSixlQUFlLEVBQUUsS0FBSztZQUN0QixTQUFTLEVBQUUsZ0JBQWdCO1lBQzNCLE9BQU8sRUFBRSxDQUFDO1NBQ1gsQ0FBQztRQUNGLE9BQU8sQ0FDTCxLQUFHLGlCQUFpQixDQUFDLElBQU0sRUFDM0IsS0FBSyxDQUFDO1lBQ0osZUFBZSxFQUFFLEtBQUs7WUFDdEIsU0FBUyxFQUFFLG1CQUFtQjtZQUM5QixPQUFPLEVBQUUsQ0FBQztTQUNYLENBQUMsQ0FDSDtLQUNGLENBQUM7Q0FDSCxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IGFuaW1hdGUsIEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgQW5pbWF0aW9uRHVyYXRpb24gfSBmcm9tICcuL2FuaW1hdGlvbi1jb25zdHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1vdmVVcE1vdGlvbjogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhID0gdHJpZ2dlcignbW92ZVVwTW90aW9uJywgW1xyXG4gIHRyYW5zaXRpb24oJyogPT4gZW50ZXInLCBbXHJcbiAgICBzdHlsZSh7XHJcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzAgMCcsXHJcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTEwMCUpJyxcclxuICAgICAgb3BhY2l0eTogMFxyXG4gICAgfSksXHJcbiAgICBhbmltYXRlKFxyXG4gICAgICBgJHtBbmltYXRpb25EdXJhdGlvbi5CQVNFfWAsXHJcbiAgICAgIHN0eWxlKHtcclxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICcwIDAnLFxyXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCUpJyxcclxuICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICAgIH0pXHJcbiAgICApXHJcbiAgXSksXHJcbiAgdHJhbnNpdGlvbignKiA9PiBsZWF2ZScsIFtcclxuICAgIHN0eWxlKHtcclxuICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnMCAwJyxcclxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwJSknLFxyXG4gICAgICBvcGFjaXR5OiAxXHJcbiAgICB9KSxcclxuICAgIGFuaW1hdGUoXHJcbiAgICAgIGAke0FuaW1hdGlvbkR1cmF0aW9uLkJBU0V9YCxcclxuICAgICAgc3R5bGUoe1xyXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzAgMCcsXHJcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtMTAwJSknLFxyXG4gICAgICAgIG9wYWNpdHk6IDBcclxuICAgICAgfSlcclxuICAgIClcclxuICBdKVxyXG5dKTtcclxuIl19
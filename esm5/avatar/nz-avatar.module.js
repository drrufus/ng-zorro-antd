/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { PlatformModule } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAvatarComponent } from './nz-avatar.component';
import * as i0 from "@angular/core";
var NzAvatarModule = /** @class */ (function () {
    function NzAvatarModule() {
    }
    /** @nocollapse */ NzAvatarModule.ɵmod = i0.ɵɵdefineNgModule({ type: NzAvatarModule });
    /** @nocollapse */ NzAvatarModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NzAvatarModule_Factory(t) { return new (t || NzAvatarModule)(); }, imports: [[CommonModule, NzIconModule, PlatformModule]] });
    return NzAvatarModule;
}());
export { NzAvatarModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NzAvatarModule, { declarations: [NzAvatarComponent], imports: [CommonModule, NzIconModule, PlatformModule], exports: [NzAvatarComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzAvatarModule, [{
        type: NgModule,
        args: [{
                declarations: [NzAvatarComponent],
                exports: [NzAvatarComponent],
                imports: [CommonModule, NzIconModule, PlatformModule]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYXZhdGFyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvYXZhdGFyLyIsInNvdXJjZXMiOlsibnotYXZhdGFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFDSCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQUUxRDtJQUFBO0tBSzhCO3NEQUFqQixjQUFjOytHQUFkLGNBQWMsa0JBRmhCLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxjQUFjLENBQUM7eUJBakJ2RDtDQW1COEIsQUFMOUIsSUFLOEI7U0FBakIsY0FBYzt3RkFBZCxjQUFjLG1CQUpWLGlCQUFpQixhQUV0QixZQUFZLEVBQUUsWUFBWSxFQUFFLGNBQWMsYUFEMUMsaUJBQWlCO2tEQUdoQixjQUFjO2NBTDFCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDakMsT0FBTyxFQUFFLENBQUMsaUJBQWlCLENBQUM7Z0JBQzVCLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsY0FBYyxDQUFDO2FBQ3REIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcbmltcG9ydCB7IFBsYXRmb3JtTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcclxuXHJcbmltcG9ydCB7IE56QXZhdGFyQ29tcG9uZW50IH0gZnJvbSAnLi9uei1hdmF0YXIuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbTnpBdmF0YXJDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtOekF2YXRhckNvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTnpJY29uTW9kdWxlLCBQbGF0Zm9ybU1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56QXZhdGFyTW9kdWxlIHt9XHJcbiJdfQ==
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzAddOnModule } from 'ng-zorro-antd/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCollapsePanelComponent } from './nz-collapse-panel.component';
import { NzCollapseComponent } from './nz-collapse.component';
import * as i0 from "@angular/core";
export class NzCollapseModule {
}
/** @nocollapse */ NzCollapseModule.ɵmod = i0.ɵɵdefineNgModule({ type: NzCollapseModule });
/** @nocollapse */ NzCollapseModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NzCollapseModule_Factory(t) { return new (t || NzCollapseModule)(); }, imports: [[CommonModule, NzIconModule, NzAddOnModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NzCollapseModule, { declarations: [NzCollapsePanelComponent, NzCollapseComponent], imports: [CommonModule, NzIconModule, NzAddOnModule], exports: [NzCollapsePanelComponent, NzCollapseComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzCollapseModule, [{
        type: NgModule,
        args: [{
                declarations: [NzCollapsePanelComponent, NzCollapseComponent],
                exports: [NzCollapsePanelComponent, NzCollapseComponent],
                imports: [CommonModule, NzIconModule, NzAddOnModule]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29sbGFwc2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb2xsYXBzZS8iLCJzb3VyY2VzIjpbIm56LWNvbGxhcHNlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztBQU85RCxNQUFNLE9BQU8sZ0JBQWdCOztvREFBaEIsZ0JBQWdCOytHQUFoQixnQkFBZ0Isa0JBRmxCLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxhQUFhLENBQUM7d0ZBRXpDLGdCQUFnQixtQkFKWix3QkFBd0IsRUFBRSxtQkFBbUIsYUFFbEQsWUFBWSxFQUFFLFlBQVksRUFBRSxhQUFhLGFBRHpDLHdCQUF3QixFQUFFLG1CQUFtQjtrREFHNUMsZ0JBQWdCO2NBTDVCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxtQkFBbUIsQ0FBQztnQkFDN0QsT0FBTyxFQUFFLENBQUMsd0JBQXdCLEVBQUUsbUJBQW1CLENBQUM7Z0JBQ3hELE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsYUFBYSxDQUFDO2FBQ3JEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOekFkZE9uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcclxuXHJcbmltcG9ydCB7IE56Q29sbGFwc2VQYW5lbENvbXBvbmVudCB9IGZyb20gJy4vbnotY29sbGFwc2UtcGFuZWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpDb2xsYXBzZUNvbXBvbmVudCB9IGZyb20gJy4vbnotY29sbGFwc2UuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbTnpDb2xsYXBzZVBhbmVsQ29tcG9uZW50LCBOekNvbGxhcHNlQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbTnpDb2xsYXBzZVBhbmVsQ29tcG9uZW50LCBOekNvbGxhcHNlQ29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBOekljb25Nb2R1bGUsIE56QWRkT25Nb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekNvbGxhcHNlTW9kdWxlIHt9XHJcbiJdfQ==
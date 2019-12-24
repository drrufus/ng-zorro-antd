/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { NzUpdateHostClassService } from 'ng-zorro-antd/core';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
const _c0 = ["*"];
export class NzButtonGroupComponent {
    constructor(nzUpdateHostClassService, elementRef) {
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.elementRef = elementRef;
        this.isInDropdown = false;
    }
    get nzSize() {
        return this._size;
    }
    set nzSize(value) {
        this._size = value;
        this.setClassMap();
    }
    setClassMap() {
        const prefixCls = 'ant-btn-group';
        const classMap = {
            [prefixCls]: true,
            [`ant-dropdown-button`]: this.isInDropdown,
            [`${prefixCls}-lg`]: this.nzSize === 'large',
            [`${prefixCls}-sm`]: this.nzSize === 'small'
        };
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, classMap);
    }
    ngOnInit() {
        this.setClassMap();
    }
}
/** @nocollapse */ NzButtonGroupComponent.ɵfac = function NzButtonGroupComponent_Factory(t) { return new (t || NzButtonGroupComponent)(i0.ɵɵdirectiveInject(i1.NzUpdateHostClassService), i0.ɵɵdirectiveInject(i0.ElementRef)); };
/** @nocollapse */ NzButtonGroupComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzButtonGroupComponent, selectors: [["nz-button-group"]], inputs: { nzSize: "nzSize" }, exportAs: ["nzButtonGroup"], features: [i0.ɵɵProvidersFeature([NzUpdateHostClassService])], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzButtonGroupComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzButtonGroupComponent, [{
        type: Component,
        args: [{
                selector: 'nz-button-group',
                exportAs: 'nzButtonGroup',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                providers: [NzUpdateHostClassService],
                templateUrl: './nz-button-group.component.html'
            }]
    }], function () { return [{ type: i1.NzUpdateHostClassService }, { type: i0.ElementRef }]; }, { nzSize: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYnV0dG9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvYnV0dG9uLyIsInNvdXJjZXMiOlsibnotYnV0dG9uLWdyb3VwLmNvbXBvbmVudC50cyIsIm56LWJ1dHRvbi1ncm91cC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakgsT0FBTyxFQUFpQix3QkFBd0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7O0FBVzdFLE1BQU0sT0FBTyxzQkFBc0I7SUFjakMsWUFBb0Isd0JBQWtELEVBQVUsVUFBc0I7UUFBbEYsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7UUFadEcsaUJBQVksR0FBRyxLQUFLLENBQUM7SUFZb0YsQ0FBQztJQVYxRyxJQUNJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVELElBQUksTUFBTSxDQUFDLEtBQW9CO1FBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBSUQsV0FBVztRQUNULE1BQU0sU0FBUyxHQUFHLGVBQWUsQ0FBQztRQUNsQyxNQUFNLFFBQVEsR0FBRztZQUNmLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSTtZQUNqQixDQUFDLHFCQUFxQixDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDMUMsQ0FBQyxHQUFHLFNBQVMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sS0FBSyxPQUFPO1lBQzVDLENBQUMsR0FBRyxTQUFTLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLEtBQUssT0FBTztTQUM3QyxDQUFDO1FBQ0YsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN6RixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs0RkE3QlUsc0JBQXNCOzJEQUF0QixzQkFBc0IsZ0lBSHRCLENBQUMsd0JBQXdCLENBQUM7O1FDakJ2QyxrQkFBWTs7a0REb0JDLHNCQUFzQjtjQVRsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7Z0JBQ3JDLFdBQVcsRUFBRSxrQ0FBa0M7YUFDaEQ7O2tCQUtFLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE56U2l6ZUxEU1R5cGUsIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LWJ1dHRvbi1ncm91cCcsXHJcbiAgZXhwb3J0QXM6ICduekJ1dHRvbkdyb3VwJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHByb3ZpZGVyczogW056VXBkYXRlSG9zdENsYXNzU2VydmljZV0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LWJ1dHRvbi1ncm91cC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE56QnV0dG9uR3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHByaXZhdGUgX3NpemU6IE56U2l6ZUxEU1R5cGU7XHJcbiAgaXNJbkRyb3Bkb3duID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IG56U2l6ZSgpOiBOelNpemVMRFNUeXBlIHtcclxuICAgIHJldHVybiB0aGlzLl9zaXplO1xyXG4gIH1cclxuXHJcbiAgc2V0IG56U2l6ZSh2YWx1ZTogTnpTaXplTERTVHlwZSkge1xyXG4gICAgdGhpcy5fc2l6ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7fVxyXG5cclxuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHByZWZpeENscyA9ICdhbnQtYnRuLWdyb3VwJztcclxuICAgIGNvbnN0IGNsYXNzTWFwID0ge1xyXG4gICAgICBbcHJlZml4Q2xzXTogdHJ1ZSxcclxuICAgICAgW2BhbnQtZHJvcGRvd24tYnV0dG9uYF06IHRoaXMuaXNJbkRyb3Bkb3duLFxyXG4gICAgICBbYCR7cHJlZml4Q2xzfS1sZ2BdOiB0aGlzLm56U2l6ZSA9PT0gJ2xhcmdlJyxcclxuICAgICAgW2Ake3ByZWZpeENsc30tc21gXTogdGhpcy5uelNpemUgPT09ICdzbWFsbCdcclxuICAgIH07XHJcbiAgICB0aGlzLm56VXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGNsYXNzTWFwKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gIH1cclxufVxyXG4iLCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiJdfQ==
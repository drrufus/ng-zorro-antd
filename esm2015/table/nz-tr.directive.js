/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, ElementRef, Host, Input, Optional, Renderer2 } from '@angular/core';
import { toBoolean } from 'ng-zorro-antd/core';
import { NzTableComponent } from './nz-table.component';
import * as i0 from "@angular/core";
import * as i1 from "./nz-table.component";
export class NzTrDirective {
    constructor(elementRef, renderer, nzTableComponent) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.nzTableComponent = nzTableComponent;
    }
    set nzExpand(value) {
        if (toBoolean(value)) {
            this.renderer.removeStyle(this.elementRef.nativeElement, 'display');
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-table-expanded-row');
        }
        else {
            this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'none');
            this.renderer.removeClass(this.elementRef.nativeElement, 'ant-table-expanded-row');
        }
    }
}
/** @nocollapse */ NzTrDirective.ɵfac = function NzTrDirective_Factory(t) { return new (t || NzTrDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.NzTableComponent, 9)); };
/** @nocollapse */ NzTrDirective.ɵdir = i0.ɵɵdefineDirective({ type: NzTrDirective, selectors: [["tr", 3, "mat-row", "", 3, "mat-header-row", ""]], hostBindings: function NzTrDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        i0.ɵɵallocHostVars(1);
    } if (rf & 2) {
        i0.ɵɵclassProp("ant-table-row", ctx.nzTableComponent);
    } }, inputs: { nzExpand: "nzExpand" } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzTrDirective, [{
        type: Directive,
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: 'tr:not([mat-row]):not([mat-header-row])',
                host: {
                    '[class.ant-table-row]': 'nzTableComponent'
                }
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.NzTableComponent, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, { nzExpand: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90YWJsZS8iLCJzb3VyY2VzIjpbIm56LXRyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFTeEQsTUFBTSxPQUFPLGFBQWE7SUFZeEIsWUFBb0IsVUFBc0IsRUFBVSxRQUFtQixFQUE2QixnQkFBa0M7UUFBbEgsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBNkIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFHLENBQUM7SUFYMUksSUFDSSxRQUFRLENBQUMsS0FBYztRQUN6QixJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUNwRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO1NBQ2pGO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDekUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztTQUNwRjtJQUNILENBQUM7OzBFQVZVLGFBQWE7a0RBQWIsYUFBYTs7Ozs7a0RBQWIsYUFBYTtjQVB6QixTQUFTO2VBQUM7Z0JBQ1QsOENBQThDO2dCQUM5QyxRQUFRLEVBQUUseUNBQXlDO2dCQUNuRCxJQUFJLEVBQUU7b0JBQ0osdUJBQXVCLEVBQUUsa0JBQWtCO2lCQUM1QzthQUNGOztzQkFhMkUsSUFBSTs7c0JBQUksUUFBUTs7a0JBWHpGLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdCwgSW5wdXQsIE9wdGlvbmFsLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vbnotdGFibGUuY29tcG9uZW50JztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ3RyOm5vdChbbWF0LXJvd10pOm5vdChbbWF0LWhlYWRlci1yb3ddKScsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtdGFibGUtcm93XSc6ICduelRhYmxlQ29tcG9uZW50J1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56VHJEaXJlY3RpdmUge1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56RXhwYW5kKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICBpZiAodG9Cb29sZWFuKHZhbHVlKSkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScpO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LXRhYmxlLWV4cGFuZGVkLXJvdycpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LXRhYmxlLWV4cGFuZGVkLXJvdycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG56VGFibGVDb21wb25lbnQ6IE56VGFibGVDb21wb25lbnQpIHt9XHJcbn1cclxuIl19
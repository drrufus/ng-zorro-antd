/**
 * @fileoverview added by tsickle
 * Generated from: nz-tbody.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, Host, Optional } from '@angular/core';
import { NzTableComponent } from './nz-table.component';
export class NzTbodyDirective {
    /**
     * @param {?} nzTableComponent
     */
    constructor(nzTableComponent) {
        this.nzTableComponent = nzTableComponent;
    }
}
NzTbodyDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: 'tbody',
                host: {
                    '[class.ant-table-tbody]': 'nzTableComponent'
                }
            },] }
];
/** @nocollapse */
NzTbodyDirective.ctorParameters = () => [
    { type: NzTableComponent, decorators: [{ type: Host }, { type: Optional }] }
];
if (false) {
    /** @type {?} */
    NzTbodyDirective.prototype.nzTableComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGJvZHkuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90YWJsZS8iLCJzb3VyY2VzIjpbIm56LXRib2R5LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFTeEQsTUFBTSxPQUFPLGdCQUFnQjs7OztJQUMzQixZQUF1QyxnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFHLENBQUM7OztZQVI5RSxTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSxPQUFPO2dCQUNqQixJQUFJLEVBQUU7b0JBQ0oseUJBQXlCLEVBQUUsa0JBQWtCO2lCQUM5QzthQUNGOzs7O1lBUlEsZ0JBQWdCLHVCQVVWLElBQUksWUFBSSxRQUFROzs7O0lBQWpCLDRDQUE2RCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOelRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9uei10YWJsZS5jb21wb25lbnQnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAndGJvZHknLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LXRhYmxlLXRib2R5XSc6ICduelRhYmxlQ29tcG9uZW50J1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56VGJvZHlEaXJlY3RpdmUge1xyXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG56VGFibGVDb21wb25lbnQ6IE56VGFibGVDb21wb25lbnQpIHt9XHJcbn1cclxuIl19
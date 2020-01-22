/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, Input, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
export class NzOptionComponent {
    constructor() {
        this.changes = new Subject();
        this.nzDisabled = false;
        this.nzHide = false;
        this.nzCustomContent = false;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.changes.next();
    }
}
NzOptionComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-option',
                exportAs: 'nzOption',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: "<ng-template>\r\n  <ng-content></ng-content>\r\n</ng-template>"
            }] }
];
NzOptionComponent.propDecorators = {
    template: [{ type: ViewChild, args: [TemplateRef, { static: false },] }],
    nzLabel: [{ type: Input }],
    nzValue: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzHide: [{ type: Input }],
    nzCustomContent: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzOptionComponent.prototype, "nzDisabled", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzOptionComponent.prototype, "nzHide", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzOptionComponent.prototype, "nzCustomContent", void 0);
if (false) {
    /** @type {?} */
    NzOptionComponent.prototype.changes;
    /** @type {?} */
    NzOptionComponent.prototype.template;
    /** @type {?} */
    NzOptionComponent.prototype.nzLabel;
    /** @type {?} */
    NzOptionComponent.prototype.nzValue;
    /** @type {?} */
    NzOptionComponent.prototype.nzDisabled;
    /** @type {?} */
    NzOptionComponent.prototype.nzHide;
    /** @type {?} */
    NzOptionComponent.prototype.nzCustomContent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotb3B0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvc2VsZWN0LyIsInNvdXJjZXMiOlsibnotb3B0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEVBRUwsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFTL0IsTUFBTSxPQUFPLGlCQUFpQjtJQVA5QjtRQVFFLFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBS0MsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2Ysb0JBQWUsR0FBRyxLQUFLLENBQUM7SUFLbkQsQ0FBQzs7OztJQUhDLFdBQVc7UUFDVCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7OztZQW5CRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRSxVQUFVO2dCQUNwQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLDBFQUF5QzthQUMxQzs7O3VCQUdFLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO3NCQUN4QyxLQUFLO3NCQUVMLEtBQUs7eUJBQ0wsS0FBSztxQkFDTCxLQUFLOzhCQUNMLEtBQUs7O0FBRm1CO0lBQWYsWUFBWSxFQUFFOztxREFBb0I7QUFDbkI7SUFBZixZQUFZLEVBQUU7O2lEQUFnQjtBQUNmO0lBQWYsWUFBWSxFQUFFOzswREFBeUI7OztJQVBqRCxvQ0FBd0I7O0lBQ3hCLHFDQUF1RTs7SUFDdkUsb0NBQXlCOztJQUV6QixvQ0FBc0I7O0lBQ3RCLHVDQUE0Qzs7SUFDNUMsbUNBQXdDOztJQUN4Qyw0Q0FBaUQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotb3B0aW9uJyxcclxuICBleHBvcnRBczogJ256T3B0aW9uJyxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1vcHRpb24uY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOek9wdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgY2hhbmdlcyA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZiwgeyBzdGF0aWM6IGZhbHNlIH0pIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuekxhYmVsOiBzdHJpbmc7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIEBJbnB1dCgpIG56VmFsdWU6IGFueTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekhpZGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDdXN0b21Db250ZW50ID0gZmFsc2U7XHJcblxyXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jaGFuZ2VzLm5leHQoKTtcclxuICB9XHJcbn1cclxuIl19
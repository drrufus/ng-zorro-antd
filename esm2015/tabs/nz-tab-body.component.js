/**
 * @fileoverview added by tsickle
 * Generated from: nz-tab-body.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
export class NzTabBodyComponent {
    constructor() {
        this.active = false;
        this.forceRender = false;
    }
}
NzTabBodyComponent.decorators = [
    { type: Component, args: [{
                selector: '[nz-tab-body]',
                exportAs: 'nzTabBody',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: "<ng-container *ngIf=\"active || forceRender\">\r\n  <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\r\n</ng-container>",
                host: {
                    '[class.ant-tabs-tabpane-active]': 'active',
                    '[class.ant-tabs-tabpane-inactive]': '!active'
                }
            }] }
];
NzTabBodyComponent.propDecorators = {
    content: [{ type: Input }],
    active: [{ type: Input }],
    forceRender: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NzTabBodyComponent.prototype.content;
    /** @type {?} */
    NzTabBodyComponent.prototype.active;
    /** @type {?} */
    NzTabBodyComponent.prototype.forceRender;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFiLWJvZHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90YWJzLyIsInNvdXJjZXMiOlsibnotdGFiLWJvZHkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQWMxRyxNQUFNLE9BQU8sa0JBQWtCO0lBWi9CO1FBY1csV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLGdCQUFXLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7OztZQWhCQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLDZJQUEyQztnQkFDM0MsSUFBSSxFQUFFO29CQUNKLGlDQUFpQyxFQUFFLFFBQVE7b0JBQzNDLG1DQUFtQyxFQUFFLFNBQVM7aUJBQy9DO2FBQ0Y7OztzQkFFRSxLQUFLO3FCQUNMLEtBQUs7MEJBQ0wsS0FBSzs7OztJQUZOLHFDQUFvQzs7SUFDcEMsb0NBQXdCOztJQUN4Qix5Q0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnW256LXRhYi1ib2R5XScsXHJcbiAgZXhwb3J0QXM6ICduelRhYkJvZHknLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXRhYi1ib2R5LmNvbXBvbmVudC5odG1sJyxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC10YWJzLXRhYnBhbmUtYWN0aXZlXSc6ICdhY3RpdmUnLFxyXG4gICAgJ1tjbGFzcy5hbnQtdGFicy10YWJwYW5lLWluYWN0aXZlXSc6ICchYWN0aXZlJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56VGFiQm9keUNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgY29udGVudDogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgYWN0aXZlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZm9yY2VSZW5kZXIgPSBmYWxzZTtcclxufVxyXG4iXX0=
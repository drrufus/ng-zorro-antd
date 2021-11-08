/**
 * @fileoverview added by tsickle
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
import * as ɵngcc0 from '@angular/core';
export class NzTbodyDirective {
    /**
     * @param {?} nzTableComponent
     */
    constructor(nzTableComponent) {
        this.nzTableComponent = nzTableComponent;
    }
}
NzTbodyDirective.ɵfac = function NzTbodyDirective_Factory(t) { return new (t || NzTbodyDirective)(ɵngcc0.ɵɵdirectiveInject(NzTableComponent, 9)); };
NzTbodyDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzTbodyDirective, selectors: [["tbody"]], hostVars: 2, hostBindings: function NzTbodyDirective_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-table-tbody", ctx.nzTableComponent);
    } } });
/** @nocollapse */
NzTbodyDirective.ctorParameters = () => [
    { type: NzTableComponent, decorators: [{ type: Host }, { type: Optional }] }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTbodyDirective, [{
        type: Directive,
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: 'tbody',
                host: {
                    '[class.ant-table-tbody]': 'nzTableComponent'
                }
            }]
    }], function () { return [{ type: NzTableComponent, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, null); })();
if (false) {
    /** @type {?} */
    NzTbodyDirective.prototype.nzTableComponent;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGJvZHkuZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyJuZzovbmctem9ycm8tYW50ZC90YWJsZS9uei10Ym9keS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBU3hELE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFDM0IsWUFBdUMsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFBRyxDQUFDOzs7OztDQUM5RSxVQUZJOztlQVBKLFNBQVMsU0FBQzt3RUFFVCxRQUFRLHBFQUpELGdCQUFnQix1QkFVVixJQUFJLFlBQUksUUFBUTtDQU5uQjtLQUFPLGtCQUNqQixJQUFJLEVBQUUsc0JBQ0o7Q0FBeUIsRUFBRSxrQkFBa0I7Y0FDOUM7V0FDRjs7Ozs7Ozs7OztrQ0FFc0M7OztJQUF6Qiw0Q0FBNkQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vbnotdGFibGUuY29tcG9uZW50JztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ3Rib2R5JyxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC10YWJsZS10Ym9keV0nOiAnbnpUYWJsZUNvbXBvbmVudCdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelRib2R5RGlyZWN0aXZlIHtcclxuICBjb25zdHJ1Y3RvcihASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBuelRhYmxlQ29tcG9uZW50OiBOelRhYmxlQ29tcG9uZW50KSB7fVxyXG59XHJcbiJdfQ==
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
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
/** @type {?} */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from './nz-resize-handle.component';

function NzResizeHandlesComponent_nz_resize_handle_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nz-resize-handle", 1);
} if (rf & 2) {
    var dir_r1 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("nzDirection", dir_r1);
} }
export var DEFAULT_RESIZE_DIRECTION = [
    'bottomRight',
    'topRight',
    'bottomLeft',
    'topLeft',
    'bottom',
    'right',
    'top',
    'left'
];
var NzResizeHandlesComponent = /** @class */ (function () {
    function NzResizeHandlesComponent() {
        this.nzDirections = DEFAULT_RESIZE_DIRECTION;
        this.directions = new Set(this.nzDirections);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    NzResizeHandlesComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzDirections) {
            this.directions = new Set(changes.nzDirections.currentValue);
        }
    };
    /** @nocollapse */
    NzResizeHandlesComponent.ctorParameters = function () { return []; };
    NzResizeHandlesComponent.propDecorators = {
        nzDirections: [{ type: Input }]
    };
NzResizeHandlesComponent.ɵfac = function NzResizeHandlesComponent_Factory(t) { return new (t || NzResizeHandlesComponent)(); };
NzResizeHandlesComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzResizeHandlesComponent, selectors: [["nz-resize-handles"]], inputs: { nzDirections: "nzDirections" }, exportAs: ["nzResizeHandles"], features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [[3, "nzDirection", 4, "ngFor", "ngForOf"], [3, "nzDirection"]], template: function NzResizeHandlesComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzResizeHandlesComponent_nz_resize_handle_0_Template, 1, 1, "nz-resize-handle", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngForOf", ctx.directions);
    } }, directives: [ɵngcc1.NgForOf, ɵngcc2.NzResizeHandleComponent], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzResizeHandlesComponent, [{
        type: Component,
        args: [{
                selector: 'nz-resize-handles',
                exportAs: 'nzResizeHandles',
                template: "<nz-resize-handle *ngFor=\"let dir of directions\" [nzDirection]=\"dir\"></nz-resize-handle>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { nzDirections: [{
            type: Input
        }] }); })();
    return NzResizeHandlesComponent;
}());
export { NzResizeHandlesComponent };
if (false) {
    /** @type {?} */
    NzResizeHandlesComponent.prototype.nzDirections;
    /** @type {?} */
    NzResizeHandlesComponent.prototype.directions;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmVzaXplLWhhbmRsZXMuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJuZzovbmctem9ycm8tYW50ZC9yZXNpemFibGUvbnotcmVzaXplLWhhbmRsZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7QUFJcEcsTUFBTSxLQUFPLHdCQUF3QixHQUF3QjtJQUMzRCxhQUFhO0lBQ2IsVUFBVTtJQUNWLFlBQVk7SUFDWixTQUFTO0lBQ1QsUUFBUTtJQUNSLE9BQU87SUFDUCxLQUFLO0lBQ0wsTUFBTTtDQUNQO0FBRUQ7SUFVRTtRQUhTLGlCQUFZLEdBQXdCLHdCQUF3QixDQUFDO1FBSXBFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7O0lBRUQsOENBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLFlBQVksRUFBRTtZQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDOUQ7SUFDSCxDQUFDLENBQ0gsQUFiUTs7cUNBTlAsU0FBUyxTQUFDO0dBQ1QsUUFBUSxFQUFFLG1CQUFtQjtNQUM3QixRQUFRLEVBQUUsaUJBQWlCLEZBSzFCLEtBQUs7O1FBSk4sNEdBQWlEO1VBQ2pELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNLGtCQUNoRDs7Ozs7Ozs7Ozs7Ozs7O29CQUVpQjtJQVlsQiwrQkFBQztDQUFBLEFBbkJELElBbUJDO1NBYlksd0JBQXdCOzs7SUFDbkMsZ0RBQXNFOztJQUN0RSw4Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56UmVzaXplRGlyZWN0aW9uIH0gZnJvbSAnLi9uei1yZXNpemUtaGFuZGxlLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgY29uc3QgREVGQVVMVF9SRVNJWkVfRElSRUNUSU9OOiBOelJlc2l6ZURpcmVjdGlvbltdID0gW1xyXG4gICdib3R0b21SaWdodCcsXHJcbiAgJ3RvcFJpZ2h0JyxcclxuICAnYm90dG9tTGVmdCcsXHJcbiAgJ3RvcExlZnQnLFxyXG4gICdib3R0b20nLFxyXG4gICdyaWdodCcsXHJcbiAgJ3RvcCcsXHJcbiAgJ2xlZnQnXHJcbl07XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LXJlc2l6ZS1oYW5kbGVzJyxcclxuICBleHBvcnRBczogJ256UmVzaXplSGFuZGxlcycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXJlc2l6ZS1oYW5kbGVzLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpSZXNpemVIYW5kbGVzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBuekRpcmVjdGlvbnM6IE56UmVzaXplRGlyZWN0aW9uW10gPSBERUZBVUxUX1JFU0laRV9ESVJFQ1RJT047XHJcbiAgZGlyZWN0aW9uczogU2V0PE56UmVzaXplRGlyZWN0aW9uPjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmRpcmVjdGlvbnMgPSBuZXcgU2V0KHRoaXMubnpEaXJlY3Rpb25zKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLm56RGlyZWN0aW9ucykge1xyXG4gICAgICB0aGlzLmRpcmVjdGlvbnMgPSBuZXcgU2V0KGNoYW5nZXMubnpEaXJlY3Rpb25zLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==
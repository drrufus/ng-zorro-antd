/**
 * @fileoverview added by tsickle
 * Generated from: nz-modal-footer.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, Optional, TemplateRef } from '@angular/core';
import { NzModalRef } from './nz-modal-ref.class';
export class NzModalFooterDirective {
    /**
     * @param {?} nzModalRef
     * @param {?} templateRef
     */
    constructor(nzModalRef, templateRef) {
        this.nzModalRef = nzModalRef;
        this.templateRef = templateRef;
        if (this.nzModalRef) {
            this.nzModalRef.getInstance().setFooterWithTemplate(this.templateRef);
        }
    }
}
NzModalFooterDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nzModalFooter]',
                exportAs: 'nzModalFooter'
            },] }
];
/** @nocollapse */
NzModalFooterDirective.ctorParameters = () => [
    { type: NzModalRef, decorators: [{ type: Optional }] },
    { type: TemplateRef }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzModalFooterDirective.prototype.nzModalRef;
    /** @type {?} */
    NzModalFooterDirective.prototype.templateRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbW9kYWwtZm9vdGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvbW9kYWwvIiwic291cmNlcyI6WyJuei1tb2RhbC1mb290ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFNbEQsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7SUFDakMsWUFBZ0MsVUFBc0IsRUFBUyxXQUE0QjtRQUEzRCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVMsZ0JBQVcsR0FBWCxXQUFXLENBQWlCO1FBQ3pGLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUN2RTtJQUNILENBQUM7OztZQVRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUUsZUFBZTthQUMxQjs7OztZQUxRLFVBQVUsdUJBT0osUUFBUTtZQVJPLFdBQVc7Ozs7Ozs7SUFRM0IsNENBQTBDOztJQUFFLDZDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgRGlyZWN0aXZlLCBPcHRpb25hbCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpNb2RhbFJlZiB9IGZyb20gJy4vbnotbW9kYWwtcmVmLmNsYXNzJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW256TW9kYWxGb290ZXJdJyxcclxuICBleHBvcnRBczogJ256TW9kYWxGb290ZXInXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOek1vZGFsRm9vdGVyRGlyZWN0aXZlIHtcclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwcml2YXRlIG56TW9kYWxSZWY6IE56TW9kYWxSZWYsIHB1YmxpYyB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8e30+KSB7XHJcbiAgICBpZiAodGhpcy5uek1vZGFsUmVmKSB7XHJcbiAgICAgIHRoaXMubnpNb2RhbFJlZi5nZXRJbnN0YW5jZSgpLnNldEZvb3RlcldpdGhUZW1wbGF0ZSh0aGlzLnRlbXBsYXRlUmVmKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19
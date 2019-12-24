/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, Optional, TemplateRef } from '@angular/core';
import { NzModalRef } from './nz-modal-ref.class';
import * as i0 from "@angular/core";
import * as i1 from "./nz-modal-ref.class";
export class NzModalFooterDirective {
    constructor(nzModalRef, templateRef) {
        this.nzModalRef = nzModalRef;
        this.templateRef = templateRef;
        if (this.nzModalRef) {
            this.nzModalRef.getInstance().setFooterWithTemplate(this.templateRef);
        }
    }
}
/** @nocollapse */ NzModalFooterDirective.ɵfac = function NzModalFooterDirective_Factory(t) { return new (t || NzModalFooterDirective)(i0.ɵɵdirectiveInject(i1.NzModalRef, 8), i0.ɵɵdirectiveInject(i0.TemplateRef)); };
/** @nocollapse */ NzModalFooterDirective.ɵdir = i0.ɵɵdefineDirective({ type: NzModalFooterDirective, selectors: [["", "nzModalFooter", ""]], exportAs: ["nzModalFooter"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzModalFooterDirective, [{
        type: Directive,
        args: [{
                selector: '[nzModalFooter]',
                exportAs: 'nzModalFooter'
            }]
    }], function () { return [{ type: i1.NzModalRef, decorators: [{
                type: Optional
            }] }, { type: i0.TemplateRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbW9kYWwtZm9vdGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvbW9kYWwvIiwic291cmNlcyI6WyJuei1tb2RhbC1mb290ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQU1sRCxNQUFNLE9BQU8sc0JBQXNCO0lBQ2pDLFlBQWdDLFVBQXNCLEVBQVMsV0FBNEI7UUFBM0QsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFpQjtRQUN6RixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDdkU7SUFDSCxDQUFDOzs0RkFMVSxzQkFBc0I7MkRBQXRCLHNCQUFzQjtrREFBdEIsc0JBQXNCO2NBSmxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUUsZUFBZTthQUMxQjs7c0JBRWMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgRGlyZWN0aXZlLCBPcHRpb25hbCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpNb2RhbFJlZiB9IGZyb20gJy4vbnotbW9kYWwtcmVmLmNsYXNzJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW256TW9kYWxGb290ZXJdJyxcclxuICBleHBvcnRBczogJ256TW9kYWxGb290ZXInXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOek1vZGFsRm9vdGVyRGlyZWN0aXZlIHtcclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwcml2YXRlIG56TW9kYWxSZWY6IE56TW9kYWxSZWYsIHB1YmxpYyB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8e30+KSB7XHJcbiAgICBpZiAodGhpcy5uek1vZGFsUmVmKSB7XHJcbiAgICAgIHRoaXMubnpNb2RhbFJlZi5nZXRJbnN0YW5jZSgpLnNldEZvb3RlcldpdGhUZW1wbGF0ZSh0aGlzLnRlbXBsYXRlUmVmKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19
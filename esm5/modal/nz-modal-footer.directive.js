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
var NzModalFooterDirective = /** @class */ (function () {
    function NzModalFooterDirective(nzModalRef, templateRef) {
        this.nzModalRef = nzModalRef;
        this.templateRef = templateRef;
        if (this.nzModalRef) {
            this.nzModalRef.getInstance().setFooterWithTemplate(this.templateRef);
        }
    }
    /** @nocollapse */ NzModalFooterDirective.ɵfac = function NzModalFooterDirective_Factory(t) { return new (t || NzModalFooterDirective)(i0.ɵɵdirectiveInject(i1.NzModalRef, 8), i0.ɵɵdirectiveInject(i0.TemplateRef)); };
    /** @nocollapse */ NzModalFooterDirective.ɵdir = i0.ɵɵdefineDirective({ type: NzModalFooterDirective, selectors: [["", "nzModalFooter", ""]], exportAs: ["nzModalFooter"] });
    return NzModalFooterDirective;
}());
export { NzModalFooterDirective };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzModalFooterDirective, [{
        type: Directive,
        args: [{
                selector: '[nzModalFooter]',
                exportAs: 'nzModalFooter'
            }]
    }], function () { return [{ type: i1.NzModalRef, decorators: [{
                type: Optional
            }] }, { type: i0.TemplateRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbW9kYWwtZm9vdGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvbW9kYWwvIiwic291cmNlcyI6WyJuei1tb2RhbC1mb290ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQUVsRDtJQUtFLGdDQUFnQyxVQUFzQixFQUFTLFdBQTRCO1FBQTNELGVBQVUsR0FBVixVQUFVLENBQVk7UUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBaUI7UUFDekYsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3ZFO0lBQ0gsQ0FBQztnR0FMVSxzQkFBc0I7K0RBQXRCLHNCQUFzQjtpQ0FmbkM7Q0FxQkMsQUFWRCxJQVVDO1NBTlksc0JBQXNCO2tEQUF0QixzQkFBc0I7Y0FKbEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRSxlQUFlO2FBQzFCOztzQkFFYyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIE9wdGlvbmFsLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOek1vZGFsUmVmIH0gZnJvbSAnLi9uei1tb2RhbC1yZWYuY2xhc3MnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbnpNb2RhbEZvb3Rlcl0nLFxyXG4gIGV4cG9ydEFzOiAnbnpNb2RhbEZvb3RlcidcclxufSlcclxuZXhwb3J0IGNsYXNzIE56TW9kYWxGb290ZXJEaXJlY3RpdmUge1xyXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHByaXZhdGUgbnpNb2RhbFJlZjogTnpNb2RhbFJlZiwgcHVibGljIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjx7fT4pIHtcclxuICAgIGlmICh0aGlzLm56TW9kYWxSZWYpIHtcclxuICAgICAgdGhpcy5uek1vZGFsUmVmLmdldEluc3RhbmNlKCkuc2V0Rm9vdGVyV2l0aFRlbXBsYXRlKHRoaXMudGVtcGxhdGVSZWYpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=
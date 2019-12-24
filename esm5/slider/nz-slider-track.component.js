import { __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { InputBoolean, InputNumber } from 'ng-zorro-antd/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
var NzSliderTrackComponent = /** @class */ (function () {
    function NzSliderTrackComponent() {
        this.nzVertical = false;
        this.nzIncluded = false;
        this.style = {};
    }
    NzSliderTrackComponent.prototype.ngOnChanges = function (changes) {
        if (changes.nzIncluded) {
            this.style.visibility = this.nzIncluded ? 'visible' : 'hidden';
        }
        if (changes.nzVertical || changes.nzOffset || changes.nzLength) {
            if (this.nzVertical) {
                this.style.bottom = this.nzOffset + "%";
                this.style.height = this.nzLength + "%";
                this.style.left = null;
                this.style.width = null;
            }
            else {
                this.style.left = this.nzOffset + "%";
                this.style.width = this.nzLength + "%";
                this.style.bottom = null;
                this.style.height = null;
            }
        }
    };
    /** @nocollapse */ NzSliderTrackComponent.ɵfac = function NzSliderTrackComponent_Factory(t) { return new (t || NzSliderTrackComponent)(); };
    /** @nocollapse */ NzSliderTrackComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzSliderTrackComponent, selectors: [["nz-slider-track"]], inputs: { nzOffset: "nzOffset", nzLength: "nzLength", nzVertical: "nzVertical", nzIncluded: "nzIncluded" }, exportAs: ["nzSliderTrack"], features: [i0.ɵɵNgOnChangesFeature()], decls: 1, vars: 1, consts: [[1, "ant-slider-track", 3, "ngStyle"]], template: function NzSliderTrackComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngStyle", ctx.style);
        } }, directives: [i1.NgStyle], encapsulation: 2, changeDetection: 0 });
    __decorate([
        InputNumber(),
        __metadata("design:type", Number)
    ], NzSliderTrackComponent.prototype, "nzOffset", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Number)
    ], NzSliderTrackComponent.prototype, "nzLength", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzSliderTrackComponent.prototype, "nzVertical", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzSliderTrackComponent.prototype, "nzIncluded", void 0);
    return NzSliderTrackComponent;
}());
export { NzSliderTrackComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzSliderTrackComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-slider-track',
                exportAs: 'nzSliderTrack',
                preserveWhitespaces: false,
                templateUrl: './nz-slider-track.component.html'
            }]
    }], null, { nzOffset: [{
            type: Input
        }], nzLength: [{
            type: Input
        }], nzVertical: [{
            type: Input
        }], nzIncluded: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLXRyYWNrLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvc2xpZGVyLyIsInNvdXJjZXMiOlsibnotc2xpZGVyLXRyYWNrLmNvbXBvbmVudC50cyIsIm56LXNsaWRlci10cmFjay5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZILE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7OztBQVUvRDtJQUFBO1FBVzJCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUU1QyxVQUFLLEdBQXVCLEVBQUUsQ0FBQztLQW9CaEM7SUFsQkMsNENBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtZQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztTQUNoRTtRQUNELElBQUksT0FBTyxDQUFDLFVBQVUsSUFBSSxPQUFPLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUU7WUFDOUQsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBTSxJQUFJLENBQUMsUUFBUSxNQUFHLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFNLElBQUksQ0FBQyxRQUFRLE1BQUcsQ0FBQztnQkFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7YUFDekI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQU0sSUFBSSxDQUFDLFFBQVEsTUFBRyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBTSxJQUFJLENBQUMsUUFBUSxNQUFHLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2FBQzFCO1NBQ0Y7SUFDSCxDQUFDO2dHQXpCVSxzQkFBc0I7K0RBQXRCLHNCQUFzQjtZQzVCbkMseUJBQXNEOztZQUF4QixtQ0FBaUI7O0lENkJyQjtRQUFkLFdBQVcsRUFBRTs7NERBQWtCO0lBQ2pCO1FBQWQsV0FBVyxFQUFFOzs0REFBa0I7SUFDaEI7UUFBZixZQUFZLEVBQUU7OzhEQUFvQjtJQUNuQjtRQUFmLFlBQVksRUFBRTs7OERBQW9CO2lDQWhDOUM7Q0FzREMsQUFsQ0QsSUFrQ0M7U0ExQlksc0JBQXNCO2tEQUF0QixzQkFBc0I7Y0FSbEMsU0FBUztlQUFDO2dCQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLFdBQVcsRUFBRSxrQ0FBa0M7YUFDaEQ7O2tCQUVFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTnpTbGlkZXJUcmFja1N0eWxlIHtcclxuICBib3R0b20/OiBzdHJpbmcgfCBudWxsO1xyXG4gIGhlaWdodD86IHN0cmluZyB8IG51bGw7XHJcbiAgbGVmdD86IHN0cmluZyB8IG51bGw7XHJcbiAgd2lkdGg/OiBzdHJpbmcgfCBudWxsO1xyXG4gIHZpc2liaWxpdHk/OiBzdHJpbmc7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc2VsZWN0b3I6ICduei1zbGlkZXItdHJhY2snLFxyXG4gIGV4cG9ydEFzOiAnbnpTbGlkZXJUcmFjaycsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXNsaWRlci10cmFjay5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE56U2xpZGVyVHJhY2tDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG56T2Zmc2V0OiBudW1iZXI7XHJcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbnpMZW5ndGg6IG51bWJlcjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpWZXJ0aWNhbCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekluY2x1ZGVkID0gZmFsc2U7XHJcblxyXG4gIHN0eWxlOiBOelNsaWRlclRyYWNrU3R5bGUgPSB7fTtcclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMubnpJbmNsdWRlZCkge1xyXG4gICAgICB0aGlzLnN0eWxlLnZpc2liaWxpdHkgPSB0aGlzLm56SW5jbHVkZWQgPyAndmlzaWJsZScgOiAnaGlkZGVuJztcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLm56VmVydGljYWwgfHwgY2hhbmdlcy5uek9mZnNldCB8fCBjaGFuZ2VzLm56TGVuZ3RoKSB7XHJcbiAgICAgIGlmICh0aGlzLm56VmVydGljYWwpIHtcclxuICAgICAgICB0aGlzLnN0eWxlLmJvdHRvbSA9IGAke3RoaXMubnpPZmZzZXR9JWA7XHJcbiAgICAgICAgdGhpcy5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLm56TGVuZ3RofSVgO1xyXG4gICAgICAgIHRoaXMuc3R5bGUubGVmdCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zdHlsZS53aWR0aCA9IG51bGw7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zdHlsZS5sZWZ0ID0gYCR7dGhpcy5uek9mZnNldH0lYDtcclxuICAgICAgICB0aGlzLnN0eWxlLndpZHRoID0gYCR7dGhpcy5uekxlbmd0aH0lYDtcclxuICAgICAgICB0aGlzLnN0eWxlLmJvdHRvbSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zdHlsZS5oZWlnaHQgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJhbnQtc2xpZGVyLXRyYWNrXCIgW25nU3R5bGVdPVwic3R5bGVcIj48L2Rpdj5cclxuIl19
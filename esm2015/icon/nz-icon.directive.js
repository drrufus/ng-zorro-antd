import { __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { IconDirective } from '@ant-design/icons-angular';
import { InputBoolean, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { NzIconService } from './nz-icon.service';
import * as i0 from "@angular/core";
import * as i1 from "./nz-icon.service";
import * as i2 from "ng-zorro-antd/core";
/**
 * This directive extends IconDirective to provide:
 *
 * - IconFont support
 * - spinning
 * - old API compatibility
 *
 * @break-changes
 *
 * - old API compatibility, icon class names would not be supported.
 * - properties that not started with `nz`.
 */
export class NzIconDirective extends IconDirective {
    constructor(elementRef, iconService, renderer, nzUpdateHostClassService) {
        super(iconService, elementRef, renderer);
        this.iconService = iconService;
        this.renderer = renderer;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.nzRotate = 0;
        this.spin = false;
        this.el = elementRef.nativeElement;
    }
    set nzSpin(value) {
        this.spin = value;
    }
    set nzType(value) {
        this.type = value;
    }
    set nzTheme(value) {
        this.theme = value;
    }
    set nzTwotoneColor(value) {
        this.twoToneColor = value;
    }
    set nzIconfont(value) {
        this.iconfont = value;
    }
    ngOnChanges(changes) {
        const { nzType, nzTwotoneColor, nzSpin, nzTheme, nzRotate } = changes;
        if (nzType || nzTwotoneColor || nzSpin || nzTheme) {
            this.changeIcon2();
        }
        else if (nzRotate) {
            this.handleRotate(this.el.firstChild);
        }
        else {
            this._setSVGElement(this.iconService.createIconfontIcon(`#${this.iconfont}`));
        }
    }
    ngOnInit() {
        this.renderer.setAttribute(this.el, 'class', `anticon ${this.el.className}`.trim());
    }
    /**
     * If custom content is provided, try to normalize SVG elements.
     */
    ngAfterContentChecked() {
        if (!this.type) {
            const children = this.el.children;
            let length = children.length;
            if (!this.type && children.length) {
                while (length--) {
                    const child = children[length];
                    if (child.tagName.toLowerCase() === 'svg') {
                        this.iconService.normalizeSvgElement(child);
                    }
                }
            }
        }
    }
    /**
     * Replacement of `changeIcon` for more modifications.
     */
    changeIcon2() {
        this.setClassName();
        this._changeIcon().then(svgOrRemove => {
            if (svgOrRemove) {
                this.setSVGData(svgOrRemove);
                this.handleSpin(svgOrRemove);
                this.handleRotate(svgOrRemove);
            }
        });
    }
    handleSpin(svg) {
        if (this.spin || this.type === 'loading') {
            this.renderer.addClass(svg, 'anticon-spin');
        }
        else {
            this.renderer.removeClass(svg, 'anticon-spin');
        }
    }
    handleRotate(svg) {
        if (this.nzRotate) {
            this.renderer.setAttribute(svg, 'style', `transform: rotate(${this.nzRotate}deg)`);
        }
        else {
            this.renderer.removeAttribute(svg, 'style');
        }
    }
    setClassName() {
        this.nzUpdateHostClassService.updateHostClass(this.el, {
            [`anticon-${this.type}`]: true
        });
    }
    setSVGData(svg) {
        this.renderer.setAttribute(svg, 'data-icon', this.type);
        this.renderer.setAttribute(svg, 'aria-hidden', 'true');
    }
}
/** @nocollapse */ NzIconDirective.ɵfac = function NzIconDirective_Factory(t) { return new (t || NzIconDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.NzIconService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i2.NzUpdateHostClassService)); };
/** @nocollapse */ NzIconDirective.ɵdir = i0.ɵɵdefineDirective({ type: NzIconDirective, selectors: [["", "nz-icon", ""]], hostBindings: function NzIconDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        i0.ɵɵallocHostVars(1);
    } if (rf & 2) {
        i0.ɵɵclassProp("anticon", true);
    } }, inputs: { nzSpin: "nzSpin", nzRotate: "nzRotate", nzType: "nzType", nzTheme: "nzTheme", nzTwotoneColor: "nzTwotoneColor", nzIconfont: "nzIconfont" }, exportAs: ["nzIcon"], features: [i0.ɵɵProvidersFeature([NzUpdateHostClassService]), i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature()] });
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], NzIconDirective.prototype, "nzSpin", null);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzIconDirective, [{
        type: Directive,
        args: [{
                selector: '[nz-icon]',
                exportAs: 'nzIcon',
                providers: [NzUpdateHostClassService],
                host: {
                    '[class.anticon]': 'true'
                }
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.NzIconService }, { type: i0.Renderer2 }, { type: i2.NzUpdateHostClassService }]; }, { nzSpin: [{
            type: Input
        }], nzRotate: [{
            type: Input
        }], nzType: [{
            type: Input
        }], nzTheme: [{
            type: Input
        }], nzTwotoneColor: [{
            type: Input
        }], nzIconfont: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaWNvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2ljb24vIiwic291cmNlcyI6WyJuei1pY29uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUF1QixTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBcUIsU0FBUyxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUMvSCxPQUFPLEVBQUUsYUFBYSxFQUFhLE1BQU0sMkJBQTJCLENBQUM7QUFDckUsT0FBTyxFQUFFLFlBQVksRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTVFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUVsRDs7Ozs7Ozs7Ozs7R0FXRztBQVNILE1BQU0sT0FBTyxlQUFnQixTQUFRLGFBQWE7SUF1Q2hELFlBQ0UsVUFBc0IsRUFDZixXQUEwQixFQUMxQixRQUFtQixFQUNsQix3QkFBa0Q7UUFFMUQsS0FBSyxDQUFDLFdBQVcsRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFKbEMsZ0JBQVcsR0FBWCxXQUFXLENBQWU7UUFDMUIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNsQiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBcENuRCxhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBOEJ0QixTQUFJLEdBQVksS0FBSyxDQUFDO1FBVTVCLElBQUksQ0FBQyxFQUFFLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBQztJQUNyQyxDQUFDO0lBN0NELElBQUksTUFBTSxDQUFDLEtBQWM7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUlELElBQ0ksTUFBTSxDQUFDLEtBQWE7UUFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVELElBQ0ksT0FBTyxDQUFDLEtBQWdCO1FB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QUFRLE1BQU0sQ0FBQyxDQUFDO1NBQ3BGO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDN0M7SUFDSCxDQUFDO0lBRU8sWUFBWTtRQUNsQixJQUFJLENBQUMsd0JBQXdCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDckQsQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUk7U0FDL0IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLFVBQVUsQ0FBQyxHQUFlO1FBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDekQsQ0FBQzs7OEVBM0hVLGVBQWU7b0RBQWYsZUFBZTs7OztzTkFMZixDQUFDLHdCQUF3QixDQUFDO0FBUXJDO0lBREMsWUFBWSxFQUFFOzs7NkNBR2Q7a0RBTFUsZUFBZTtjQVIzQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztnQkFDckMsSUFBSSxFQUFFO29CQUNKLGlCQUFpQixFQUFFLE1BQU07aUJBQzFCO2FBQ0Y7O2tCQUVFLEtBQUs7O2tCQU1MLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUtMLEtBQUs7O2tCQUtMLEtBQUs7O2tCQUtMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEFmdGVyQ29udGVudENoZWNrZWQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSWNvbkRpcmVjdGl2ZSwgVGhlbWVUeXBlIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMtYW5ndWxhcic7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56SWNvblNlcnZpY2UgfSBmcm9tICcuL256LWljb24uc2VydmljZSc7XHJcblxyXG4vKipcclxuICogVGhpcyBkaXJlY3RpdmUgZXh0ZW5kcyBJY29uRGlyZWN0aXZlIHRvIHByb3ZpZGU6XHJcbiAqXHJcbiAqIC0gSWNvbkZvbnQgc3VwcG9ydFxyXG4gKiAtIHNwaW5uaW5nXHJcbiAqIC0gb2xkIEFQSSBjb21wYXRpYmlsaXR5XHJcbiAqXHJcbiAqIEBicmVhay1jaGFuZ2VzXHJcbiAqXHJcbiAqIC0gb2xkIEFQSSBjb21wYXRpYmlsaXR5LCBpY29uIGNsYXNzIG5hbWVzIHdvdWxkIG5vdCBiZSBzdXBwb3J0ZWQuXHJcbiAqIC0gcHJvcGVydGllcyB0aGF0IG5vdCBzdGFydGVkIHdpdGggYG56YC5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW256LWljb25dJyxcclxuICBleHBvcnRBczogJ256SWNvbicsXHJcbiAgcHJvdmlkZXJzOiBbTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXSxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudGljb25dJzogJ3RydWUnXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpJY29uRGlyZWN0aXZlIGV4dGVuZHMgSWNvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBBZnRlckNvbnRlbnRDaGVja2VkIHtcclxuICBASW5wdXQoKVxyXG4gIEBJbnB1dEJvb2xlYW4oKVxyXG4gIHNldCBuelNwaW4odmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuc3BpbiA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgbnpSb3RhdGU6IG51bWJlciA9IDA7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56VHlwZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnR5cGUgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56VGhlbWUodmFsdWU6IFRoZW1lVHlwZSkge1xyXG4gICAgdGhpcy50aGVtZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpUd290b25lQ29sb3IodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy50d29Ub25lQ29sb3IgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56SWNvbmZvbnQodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5pY29uZm9udCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZWFkb25seSBlbDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gIHR5cGU6IHN0cmluZztcclxuICB0aGVtZTogVGhlbWVUeXBlO1xyXG4gIC8vIEB0cy1pZ25vcmVcclxuICB0d290b25lQ29sb3I6IHN0cmluZztcclxuXHJcbiAgcHJpdmF0ZSBpY29uZm9udDogc3RyaW5nO1xyXG4gIHByaXZhdGUgc3BpbjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwdWJsaWMgaWNvblNlcnZpY2U6IE56SWNvblNlcnZpY2UsXHJcbiAgICBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VcclxuICApIHtcclxuICAgIHN1cGVyKGljb25TZXJ2aWNlLCBlbGVtZW50UmVmLCByZW5kZXJlcik7XHJcblxyXG4gICAgdGhpcy5lbCA9IGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgbnpUeXBlLCBuelR3b3RvbmVDb2xvciwgbnpTcGluLCBuelRoZW1lLCBuelJvdGF0ZSB9ID0gY2hhbmdlcztcclxuXHJcbiAgICBpZiAobnpUeXBlIHx8IG56VHdvdG9uZUNvbG9yIHx8IG56U3BpbiB8fCBuelRoZW1lKSB7XHJcbiAgICAgIHRoaXMuY2hhbmdlSWNvbjIoKTtcclxuICAgIH0gZWxzZSBpZiAobnpSb3RhdGUpIHtcclxuICAgICAgdGhpcy5oYW5kbGVSb3RhdGUodGhpcy5lbC5maXJzdENoaWxkIGFzIFNWR0VsZW1lbnQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fc2V0U1ZHRWxlbWVudCh0aGlzLmljb25TZXJ2aWNlLmNyZWF0ZUljb25mb250SWNvbihgIyR7dGhpcy5pY29uZm9udH1gKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWwsICdjbGFzcycsIGBhbnRpY29uICR7dGhpcy5lbC5jbGFzc05hbWV9YC50cmltKCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSWYgY3VzdG9tIGNvbnRlbnQgaXMgcHJvdmlkZWQsIHRyeSB0byBub3JtYWxpemUgU1ZHIGVsZW1lbnRzLlxyXG4gICAqL1xyXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy50eXBlKSB7XHJcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5lbC5jaGlsZHJlbjtcclxuICAgICAgbGV0IGxlbmd0aCA9IGNoaWxkcmVuLmxlbmd0aDtcclxuICAgICAgaWYgKCF0aGlzLnR5cGUgJiYgY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgICAgd2hpbGUgKGxlbmd0aC0tKSB7XHJcbiAgICAgICAgICBjb25zdCBjaGlsZCA9IGNoaWxkcmVuW2xlbmd0aF07XHJcbiAgICAgICAgICBpZiAoY2hpbGQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnc3ZnJykge1xyXG4gICAgICAgICAgICB0aGlzLmljb25TZXJ2aWNlLm5vcm1hbGl6ZVN2Z0VsZW1lbnQoY2hpbGQgYXMgU1ZHRWxlbWVudCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXBsYWNlbWVudCBvZiBgY2hhbmdlSWNvbmAgZm9yIG1vcmUgbW9kaWZpY2F0aW9ucy5cclxuICAgKi9cclxuICBwcml2YXRlIGNoYW5nZUljb24yKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDbGFzc05hbWUoKTtcclxuICAgIHRoaXMuX2NoYW5nZUljb24oKS50aGVuKHN2Z09yUmVtb3ZlID0+IHtcclxuICAgICAgaWYgKHN2Z09yUmVtb3ZlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTVkdEYXRhKHN2Z09yUmVtb3ZlKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVNwaW4oc3ZnT3JSZW1vdmUpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlUm90YXRlKHN2Z09yUmVtb3ZlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhbmRsZVNwaW4oc3ZnOiBTVkdFbGVtZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zcGluIHx8IHRoaXMudHlwZSA9PT0gJ2xvYWRpbmcnKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3Moc3ZnLCAnYW50aWNvbi1zcGluJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHN2ZywgJ2FudGljb24tc3BpbicpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVSb3RhdGUoc3ZnOiBTVkdFbGVtZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uelJvdGF0ZSkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShzdmcsICdzdHlsZScsIGB0cmFuc2Zvcm06IHJvdGF0ZSgke3RoaXMubnpSb3RhdGV9ZGVnKWApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUoc3ZnLCAnc3R5bGUnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0Q2xhc3NOYW1lKCk6IHZvaWQge1xyXG4gICAgdGhpcy5uelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWwsIHtcclxuICAgICAgW2BhbnRpY29uLSR7dGhpcy50eXBlfWBdOiB0cnVlXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0U1ZHRGF0YShzdmc6IFNWR0VsZW1lbnQpOiB2b2lkIHtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHN2ZywgJ2RhdGEtaWNvbicsIHRoaXMudHlwZSk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShzdmcsICdhcmlhLWhpZGRlbicsICd0cnVlJyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
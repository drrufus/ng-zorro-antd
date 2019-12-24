import { __decorate, __extends, __metadata } from "tslib";
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
var NzIconDirective = /** @class */ (function (_super) {
    __extends(NzIconDirective, _super);
    function NzIconDirective(elementRef, iconService, renderer, nzUpdateHostClassService) {
        var _this = _super.call(this, iconService, elementRef, renderer) || this;
        _this.iconService = iconService;
        _this.renderer = renderer;
        _this.nzUpdateHostClassService = nzUpdateHostClassService;
        _this.nzRotate = 0;
        _this.spin = false;
        _this.el = elementRef.nativeElement;
        return _this;
    }
    Object.defineProperty(NzIconDirective.prototype, "nzSpin", {
        set: function (value) {
            this.spin = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzIconDirective.prototype, "nzType", {
        set: function (value) {
            this.type = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzIconDirective.prototype, "nzTheme", {
        set: function (value) {
            this.theme = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzIconDirective.prototype, "nzTwotoneColor", {
        set: function (value) {
            this.twoToneColor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzIconDirective.prototype, "nzIconfont", {
        set: function (value) {
            this.iconfont = value;
        },
        enumerable: true,
        configurable: true
    });
    NzIconDirective.prototype.ngOnChanges = function (changes) {
        var nzType = changes.nzType, nzTwotoneColor = changes.nzTwotoneColor, nzSpin = changes.nzSpin, nzTheme = changes.nzTheme, nzRotate = changes.nzRotate;
        if (nzType || nzTwotoneColor || nzSpin || nzTheme) {
            this.changeIcon2();
        }
        else if (nzRotate) {
            this.handleRotate(this.el.firstChild);
        }
        else {
            this._setSVGElement(this.iconService.createIconfontIcon("#" + this.iconfont));
        }
    };
    NzIconDirective.prototype.ngOnInit = function () {
        this.renderer.setAttribute(this.el, 'class', ("anticon " + this.el.className).trim());
    };
    /**
     * If custom content is provided, try to normalize SVG elements.
     */
    NzIconDirective.prototype.ngAfterContentChecked = function () {
        if (!this.type) {
            var children = this.el.children;
            var length_1 = children.length;
            if (!this.type && children.length) {
                while (length_1--) {
                    var child = children[length_1];
                    if (child.tagName.toLowerCase() === 'svg') {
                        this.iconService.normalizeSvgElement(child);
                    }
                }
            }
        }
    };
    /**
     * Replacement of `changeIcon` for more modifications.
     */
    NzIconDirective.prototype.changeIcon2 = function () {
        var _this = this;
        this.setClassName();
        this._changeIcon().then(function (svgOrRemove) {
            if (svgOrRemove) {
                _this.setSVGData(svgOrRemove);
                _this.handleSpin(svgOrRemove);
                _this.handleRotate(svgOrRemove);
            }
        });
    };
    NzIconDirective.prototype.handleSpin = function (svg) {
        if (this.spin || this.type === 'loading') {
            this.renderer.addClass(svg, 'anticon-spin');
        }
        else {
            this.renderer.removeClass(svg, 'anticon-spin');
        }
    };
    NzIconDirective.prototype.handleRotate = function (svg) {
        if (this.nzRotate) {
            this.renderer.setAttribute(svg, 'style', "transform: rotate(" + this.nzRotate + "deg)");
        }
        else {
            this.renderer.removeAttribute(svg, 'style');
        }
    };
    NzIconDirective.prototype.setClassName = function () {
        var _a;
        this.nzUpdateHostClassService.updateHostClass(this.el, (_a = {},
            _a["anticon-" + this.type] = true,
            _a));
    };
    NzIconDirective.prototype.setSVGData = function (svg) {
        this.renderer.setAttribute(svg, 'data-icon', this.type);
        this.renderer.setAttribute(svg, 'aria-hidden', 'true');
    };
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
    return NzIconDirective;
}(IconDirective));
export { NzIconDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaWNvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2ljb24vIiwic291cmNlcyI6WyJuei1pY29uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUF1QixTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBcUIsU0FBUyxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUMvSCxPQUFPLEVBQUUsYUFBYSxFQUFhLE1BQU0sMkJBQTJCLENBQUM7QUFDckUsT0FBTyxFQUFFLFlBQVksRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTVFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUVsRDs7Ozs7Ozs7Ozs7R0FXRztBQUNIO0lBUXFDLG1DQUFhO0lBdUNoRCx5QkFDRSxVQUFzQixFQUNmLFdBQTBCLEVBQzFCLFFBQW1CLEVBQ2xCLHdCQUFrRDtRQUo1RCxZQU1FLGtCQUFNLFdBQVcsRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLFNBR3pDO1FBUFEsaUJBQVcsR0FBWCxXQUFXLENBQWU7UUFDMUIsY0FBUSxHQUFSLFFBQVEsQ0FBVztRQUNsQiw4QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBcENuRCxjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBOEJ0QixVQUFJLEdBQVksS0FBSyxDQUFDO1FBVTVCLEtBQUksQ0FBQyxFQUFFLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBQzs7SUFDckMsQ0FBQztJQTdDRCxzQkFBSSxtQ0FBTTthQUFWLFVBQVcsS0FBYztZQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUNwQixDQUFDOzs7T0FBQTtJQUlELHNCQUNJLG1DQUFNO2FBRFYsVUFDVyxLQUFhO1lBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLENBQUM7OztPQUFBO0lBRUQsc0JBQ0ks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XG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFJlbmRlcmVyMiwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJY29uRGlyZWN0aXZlLCBUaGVtZVR5cGUgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy1hbmd1bGFyJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpJY29uU2VydmljZSB9IGZyb20gJy4vbnotaWNvbi5zZXJ2aWNlJztcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGRpcmVjdGl2ZSBleHRlbmRzIEljb25EaXJlY3RpdmUgdG8gcHJvdmlkZTpcclxuICpcclxuICogLSBJY29uRm9udCBzdXBwb3J0XHJcbiAqIC0gc3Bpbm5pbmdcclxuICogLSBvbGQgQVBJIGNvbXBhdGliaWxpdHlcclxuICpcclxuICogQGJyZWFrLWNoYW5nZXNcclxuICpcclxuICogLSBvbGQgQVBJIGNvbXBhdGliaWxpdHksIGljb24gY2xhc3MgbmFtZXMgd291bGQgbm90IGJlIHN1cHBvcnRlZC5cclxuICogLSBwcm9wZXJ0aWVzIHRoYXQgbm90IHN0YXJ0ZWQgd2l0aCBgbnpgLlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbnotaWNvbl0nLFxyXG4gIGV4cG9ydEFzOiAnbnpJY29uJyxcclxuICBwcm92aWRlcnM6IFtOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VdLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50aWNvbl0nOiAndHJ1ZSdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekljb25EaXJlY3RpdmUgZXh0ZW5kcyBJY29uRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIEFmdGVyQ29udGVudENoZWNrZWQge1xyXG4gIEBJbnB1dCgpXHJcbiAgQElucHV0Qm9vbGVhbigpXHJcbiAgc2V0IG56U3Bpbih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5zcGluID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBuelJvdGF0ZTogbnVtYmVyID0gMDtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpUeXBlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMudHlwZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpUaGVtZSh2YWx1ZTogVGhlbWVUeXBlKSB7XHJcbiAgICB0aGlzLnRoZW1lID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelR3b3RvbmVDb2xvcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnR3b1RvbmVDb2xvciA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpJY29uZm9udCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmljb25mb250ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IGVsOiBIVE1MRWxlbWVudDtcclxuXHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIHRoZW1lOiBUaGVtZVR5cGU7XHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIHR3b3RvbmVDb2xvcjogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIGljb25mb250OiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBzcGluOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHB1YmxpYyBpY29uU2VydmljZTogTnpJY29uU2VydmljZSxcclxuICAgIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZVxyXG4gICkge1xyXG4gICAgc3VwZXIoaWNvblNlcnZpY2UsIGVsZW1lbnRSZWYsIHJlbmRlcmVyKTtcclxuXHJcbiAgICB0aGlzLmVsID0gZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc3QgeyBuelR5cGUsIG56VHdvdG9uZUNvbG9yLCBuelNwaW4sIG56VGhlbWUsIG56Um90YXRlIH0gPSBjaGFuZ2VzO1xyXG5cclxuICAgIGlmIChuelR5cGUgfHwgbnpUd290b25lQ29sb3IgfHwgbnpTcGluIHx8IG56VGhlbWUpIHtcclxuICAgICAgdGhpcy5jaGFuZ2VJY29uMigpO1xyXG4gICAgfSBlbHNlIGlmIChuelJvdGF0ZSkge1xyXG4gICAgICB0aGlzLmhhbmRsZVJvdGF0ZSh0aGlzLmVsLmZpcnN0Q2hpbGQgYXMgU1ZHRWxlbWVudCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9zZXRTVkdFbGVtZW50KHRoaXMuaWNvblNlcnZpY2UuY3JlYXRlSWNvbmZvbnRJY29uKGAjJHt0aGlzLmljb25mb250fWApKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5lbCwgJ2NsYXNzJywgYGFudGljb24gJHt0aGlzLmVsLmNsYXNzTmFtZX1gLnRyaW0oKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJZiBjdXN0b20gY29udGVudCBpcyBwcm92aWRlZCwgdHJ5IHRvIG5vcm1hbGl6ZSBTVkcgZWxlbWVudHMuXHJcbiAgICovXHJcbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnR5cGUpIHtcclxuICAgICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLmVsLmNoaWxkcmVuO1xyXG4gICAgICBsZXQgbGVuZ3RoID0gY2hpbGRyZW4ubGVuZ3RoO1xyXG4gICAgICBpZiAoIXRoaXMudHlwZSAmJiBjaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgICB3aGlsZSAobGVuZ3RoLS0pIHtcclxuICAgICAgICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW5bbGVuZ3RoXTtcclxuICAgICAgICAgIGlmIChjaGlsZC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdzdmcnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvblNlcnZpY2Uubm9ybWFsaXplU3ZnRWxlbWVudChjaGlsZCBhcyBTVkdFbGVtZW50KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlcGxhY2VtZW50IG9mIGBjaGFuZ2VJY29uYCBmb3IgbW9yZSBtb2RpZmljYXRpb25zLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgY2hhbmdlSWNvbjIoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldENsYXNzTmFtZSgpO1xyXG4gICAgdGhpcy5fY2hhbmdlSWNvbigpLnRoZW4oc3ZnT3JSZW1vdmUgPT4ge1xyXG4gICAgICBpZiAoc3ZnT3JSZW1vdmUpIHtcclxuICAgICAgICB0aGlzLnNldFNWR0RhdGEoc3ZnT3JSZW1vdmUpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU3BpbihzdmdPclJlbW92ZSk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVSb3RhdGUoc3ZnT3JSZW1vdmUpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlU3Bpbihzdmc6IFNWR0VsZW1lbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnNwaW4gfHwgdGhpcy50eXBlID09PSAnbG9hZGluZycpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhzdmcsICdhbnRpY29uLXNwaW4nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3Moc3ZnLCAnYW50aWNvbi1zcGluJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhbmRsZVJvdGF0ZShzdmc6IFNWR0VsZW1lbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56Um90YXRlKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHN2ZywgJ3N0eWxlJywgYHRyYW5zZm9ybTogcm90YXRlKCR7dGhpcy5uelJvdGF0ZX1kZWcpYCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZShzdmcsICdzdHlsZScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRDbGFzc05hbWUoKTogdm9pZCB7XHJcbiAgICB0aGlzLm56VXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbCwge1xyXG4gICAgICBbYGFudGljb24tJHt0aGlzLnR5cGV9YF06IHRydWVcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRTVkdEYXRhKHN2ZzogU1ZHRWxlbWVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoc3ZnLCAnZGF0YS1pY29uJywgdGhpcy50eXBlKTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHN2ZywgJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcclxuICB9XHJcbn1cclxuIl19
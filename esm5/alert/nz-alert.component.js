import { __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { InputBoolean, NzConfigService, slideAlertMotion, WithConfig } from 'ng-zorro-antd/core';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/icon";
function NzAlertComponent_div_0_ng_container_1_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 8);
} if (rf & 2) {
    var ctx_r341 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngClass", ctx_r341.nzIconType);
} }
function NzAlertComponent_div_0_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 9);
} if (rf & 2) {
    var ctx_r343 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("nzType", ctx_r343.iconType)("nzTheme", ctx_r343.iconTheme);
} }
function NzAlertComponent_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzAlertComponent_div_0_ng_container_1_i_1_Template, 1, 1, "i", 6);
    i0.ɵɵtemplate(2, NzAlertComponent_div_0_ng_container_1_ng_template_2_Template, 1, 2, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var _r342 = i0.ɵɵreference(3);
    var ctx_r337 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r337.isIconTypeObject)("ngIfElse", _r342);
} }
function NzAlertComponent_div_0_span_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r344 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r344.nzMessage);
} }
function NzAlertComponent_div_0_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 10);
    i0.ɵɵtemplate(1, NzAlertComponent_div_0_span_2_ng_container_1_Template, 2, 1, "ng-container", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r338 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r338.nzMessage);
} }
function NzAlertComponent_div_0_span_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r345 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r345.nzDescription);
} }
function NzAlertComponent_div_0_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 12);
    i0.ɵɵtemplate(1, NzAlertComponent_div_0_span_3_ng_container_1_Template, 2, 1, "ng-container", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r339 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r339.nzDescription);
} }
function NzAlertComponent_div_0_a_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 16);
} }
function NzAlertComponent_div_0_a_4_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r349 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r349.nzCloseText);
} }
function NzAlertComponent_div_0_a_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzAlertComponent_div_0_a_4_ng_container_3_ng_container_1_Template, 2, 1, "ng-container", 11);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r348 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r348.nzCloseText);
} }
function NzAlertComponent_div_0_a_4_Template(rf, ctx) { if (rf & 1) {
    var _r351 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 13);
    i0.ɵɵlistener("click", function NzAlertComponent_div_0_a_4_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r351); var ctx_r350 = i0.ɵɵnextContext(2); return ctx_r350.closeAlert(); });
    i0.ɵɵtemplate(1, NzAlertComponent_div_0_a_4_ng_template_1_Template, 1, 0, "ng-template", null, 14, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(3, NzAlertComponent_div_0_a_4_ng_container_3_Template, 2, 1, "ng-container", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var _r346 = i0.ɵɵreference(2);
    var ctx_r340 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r340.nzCloseText)("ngIfElse", _r346);
} }
function NzAlertComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r353 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵlistener("@slideAlertMotion.done", function NzAlertComponent_div_0_Template_div_animation_slideAlertMotion_done_0_listener($event) { i0.ɵɵrestoreView(_r353); var ctx_r352 = i0.ɵɵnextContext(); return ctx_r352.onFadeAnimationDone(); });
    i0.ɵɵtemplate(1, NzAlertComponent_div_0_ng_container_1_Template, 4, 2, "ng-container", 2);
    i0.ɵɵtemplate(2, NzAlertComponent_div_0_span_2_Template, 2, 1, "span", 3);
    i0.ɵɵtemplate(3, NzAlertComponent_div_0_span_3_Template, 2, 1, "span", 4);
    i0.ɵɵtemplate(4, NzAlertComponent_div_0_a_4_Template, 4, 2, "a", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r336 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("ant-alert-success", ctx_r336.nzType === "success")("ant-alert-info", ctx_r336.nzType === "info")("ant-alert-warning", ctx_r336.nzType === "warning")("ant-alert-error", ctx_r336.nzType === "error")("ant-alert-no-icon", !ctx_r336.nzShowIcon)("ant-alert-banner", ctx_r336.nzBanner)("ant-alert-closable", ctx_r336.nzCloseable)("ant-alert-with-description", !!ctx_r336.nzDescription);
    i0.ɵɵproperty("@slideAlertMotion", undefined);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r336.nzShowIcon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r336.nzMessage);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r336.nzDescription);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r336.nzCloseable || ctx_r336.nzCloseText);
} }
var NZ_CONFIG_COMPONENT_NAME = 'alert';
var NzAlertComponent = /** @class */ (function () {
    function NzAlertComponent(nzConfigService) {
        this.nzConfigService = nzConfigService;
        this.nzType = 'info';
        this.nzBanner = false;
        this.nzOnClose = new EventEmitter();
        this.destroy = false;
        this.iconTheme = 'fill';
        this.isIconTypeObject = false;
        this.isTypeSet = false;
        this.isShowIconSet = false;
        this.inferredIconType = 'info-circle';
    }
    Object.defineProperty(NzAlertComponent.prototype, "iconType", {
        get: function () {
            return this.nzIconType || this.inferredIconType;
        },
        enumerable: true,
        configurable: true
    });
    NzAlertComponent.prototype.closeAlert = function () {
        this.destroy = true;
    };
    NzAlertComponent.prototype.onFadeAnimationDone = function () {
        if (this.destroy) {
            this.nzOnClose.emit(true);
        }
    };
    NzAlertComponent.prototype.updateIconClassMap = function () {
        switch (this.nzType) {
            case 'error':
                this.inferredIconType = 'close-circle';
                break;
            case 'success':
                this.inferredIconType = 'check-circle';
                break;
            case 'info':
                this.inferredIconType = 'info-circle';
                break;
            case 'warning':
                this.inferredIconType = 'exclamation-circle';
                break;
        }
        this.iconTheme = this.nzDescription ? 'outline' : 'fill';
    };
    NzAlertComponent.prototype.ngOnChanges = function (changes) {
        var nzShowIcon = changes.nzShowIcon, nzDescription = changes.nzDescription, nzType = changes.nzType, nzBanner = changes.nzBanner, nzIconType = changes.nzIconType;
        if (nzShowIcon) {
            this.isShowIconSet = true;
        }
        if (nzDescription || nzType) {
            this.updateIconClassMap();
        }
        if (nzType) {
            this.isTypeSet = true;
        }
        if (nzBanner) {
            if (!this.isTypeSet) {
                this.nzType = 'warning';
            }
            if (!this.isShowIconSet) {
                this.nzShowIcon = true;
            }
        }
        if (nzIconType) {
            this.isIconTypeObject = typeof nzIconType.currentValue === 'object';
        }
    };
    /** @nocollapse */ NzAlertComponent.ɵfac = function NzAlertComponent_Factory(t) { return new (t || NzAlertComponent)(i0.ɵɵdirectiveInject(i1.NzConfigService)); };
    /** @nocollapse */ NzAlertComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzAlertComponent, selectors: [["nz-alert"]], inputs: { nzCloseText: "nzCloseText", nzIconType: "nzIconType", nzMessage: "nzMessage", nzDescription: "nzDescription", nzType: "nzType", nzCloseable: "nzCloseable", nzShowIcon: "nzShowIcon", nzBanner: "nzBanner" }, outputs: { nzOnClose: "nzOnClose" }, exportAs: ["nzAlert"], features: [i0.ɵɵNgOnChangesFeature()], decls: 1, vars: 1, consts: [["class", "ant-alert", 3, "ant-alert-success", "ant-alert-info", "ant-alert-warning", "ant-alert-error", "ant-alert-no-icon", "ant-alert-banner", "ant-alert-closable", "ant-alert-with-description", 4, "ngIf"], [1, "ant-alert"], [4, "ngIf"], ["class", "ant-alert-message", 4, "ngIf"], ["class", "ant-alert-description", 4, "ngIf"], ["class", "ant-alert-close-icon", 3, "click", 4, "ngIf"], ["class", "ant-alert-icon", 3, "ngClass", 4, "ngIf", "ngIfElse"], ["iconTemplate", ""], [1, "ant-alert-icon", 3, "ngClass"], ["nz-icon", "", 1, "ant-alert-icon", 3, "nzType", "nzTheme"], [1, "ant-alert-message"], [4, "nzStringTemplateOutlet"], [1, "ant-alert-description"], [1, "ant-alert-close-icon", 3, "click"], ["closeDefaultTemplate", ""], [4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "close"]], template: function NzAlertComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, NzAlertComponent_div_0_Template, 5, 13, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.destroy);
        } }, directives: [i2.NgIf, i2.NgClass, i3.NzIconDirective, i1.NzStringTemplateOutletDirective], styles: ["\n      nz-alert {\n        display: block;\n      }\n    "], encapsulation: 2, data: { animation: [slideAlertMotion] }, changeDetection: 0 });
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzAlertComponent.prototype, "nzCloseable", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzAlertComponent.prototype, "nzShowIcon", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzAlertComponent.prototype, "nzBanner", void 0);
    return NzAlertComponent;
}());
export { NzAlertComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzAlertComponent, [{
        type: Component,
        args: [{
                selector: 'nz-alert',
                exportAs: 'nzAlert',
                animations: [slideAlertMotion],
                templateUrl: './nz-alert.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                styles: [
                    "\n      nz-alert {\n        display: block;\n      }\n    "
                ]
            }]
    }], function () { return [{ type: i1.NzConfigService }]; }, { nzCloseText: [{
            type: Input
        }], nzIconType: [{
            type: Input
        }], nzMessage: [{
            type: Input
        }], nzDescription: [{
            type: Input
        }], nzType: [{
            type: Input
        }], nzCloseable: [{
            type: Input
        }], nzShowIcon: [{
            type: Input
        }], nzBanner: [{
            type: Input
        }], nzOnClose: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9hbGVydC8iLCJzb3VyY2VzIjpbIm56LWFsZXJ0LmNvbXBvbmVudC50cyIsIm56LWFsZXJ0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFHTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBZSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7OztJQ0oxRyx1QkFJSzs7O0lBRkgsNkNBQXNCOzs7SUFJdEIsdUJBQWdGOzs7SUFBOUMsMENBQW1CLCtCQUFBOzs7SUFQekQsNkJBQ0U7SUFBQSxrRkFJQztJQUNELHVJQUNFO0lBRUosMEJBQWU7Ozs7SUFMWCxlQUEyQztJQUEzQyxnREFBMkMsbUJBQUE7OztJQU83Qyw2QkFBa0Q7SUFBQSxZQUFlO0lBQUEsMEJBQWU7OztJQUE5QixlQUFlO0lBQWYsd0NBQWU7OztJQURuRSxnQ0FDRTtJQUFBLGlHQUFrRDtJQUNwRCxpQkFBTzs7O0lBRFMsZUFBbUM7SUFBbkMsMkRBQW1DOzs7SUFHakQsNkJBQXNEO0lBQUEsWUFBbUI7SUFBQSwwQkFBZTs7O0lBQWxDLGVBQW1CO0lBQW5CLDRDQUFtQjs7O0lBRDNFLGdDQUNFO0lBQUEsaUdBQXNEO0lBQ3hELGlCQUFPOzs7SUFEUyxlQUF1QztJQUF2QywrREFBdUM7OztJQUluRCx3QkFBOEI7OztJQUc5Qiw2QkFBb0Q7SUFBQSxZQUFpQjtJQUFBLDBCQUFlOzs7SUFBaEMsZUFBaUI7SUFBakIsMENBQWlCOzs7SUFEdkUsNkJBQ0U7SUFBQSw2R0FBb0Q7SUFDdEQsMEJBQWU7OztJQURDLGVBQXFDO0lBQXJDLDZEQUFxQzs7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SUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7YUFDeEI7U0FDRjtRQUVELElBQUksVUFBVSxFQUFFO1lBQ2QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE9BQU8sVUFBVSxDQUFDLFlBQVksS0FBSyxRQUFRLENBQUM7U0FDckU7SUFDSCxDQUFDO29GQWhGVSxnQkFBZ0I7eURBQWhCLGdCQUFnQjtZQ3ZDN0Isa0VBY0U7O1lBYkEsbUNBQWdCO3FORHlCSixDQUFDLGdCQUFnQixDQUFDO0lBbUJ3QztRQUE1RCxVQUFVLENBQUMsd0JBQXdCLEVBQUUsS0FBSyxDQUFDLEVBQUUsWUFBWSxFQUFFOzt5REFBc0I7SUFDckI7UUFBNUQsVUFBVSxDQUFDLHdCQUF3QixFQUFFLEtBQUssQ0FBQyxFQUFFLFlBQVksRUFBRTs7d0RBQXFCO0lBQ2pFO1FBQWYsWUFBWSxFQUFFOztzREFBa0I7MkJBL0M1QztDQXdIQyxBQWpHRCxJQWlHQztTQWpGWSxnQkFBZ0I7a0RBQWhCLGdCQUFnQjtjQWhCNUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQixRQUFRLEVBQUUsU0FBUztnQkFDbkIsVUFBVSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7Z0JBQzlCLFdBQVcsRUFBRSwyQkFBMkI7Z0JBQ3hDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsTUFBTSxFQUFFO29CQUNOLDREQUlDO2lCQUNGO2FBQ0Y7O2tCQUVFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBOZ0NsYXNzVHlwZSwgTnpDb25maWdTZXJ2aWNlLCBzbGlkZUFsZXJ0TW90aW9uLCBXaXRoQ29uZmlnIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICdhbGVydCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LWFsZXJ0JyxcclxuICBleHBvcnRBczogJ256QWxlcnQnLFxyXG4gIGFuaW1hdGlvbnM6IFtzbGlkZUFsZXJ0TW90aW9uXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotYWxlcnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIG56LWFsZXJ0IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56QWxlcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIG56Q2xvc2VUZXh0OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuekljb25UeXBlOiBOZ0NsYXNzVHlwZTtcclxuICBASW5wdXQoKSBuek1lc3NhZ2U6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56RGVzY3JpcHRpb246IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56VHlwZTogJ3N1Y2Nlc3MnIHwgJ2luZm8nIHwgJ3dhcm5pbmcnIHwgJ2Vycm9yJyA9ICdpbmZvJztcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIGZhbHNlKSBASW5wdXRCb29sZWFuKCkgbnpDbG9zZWFibGU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCBmYWxzZSkgQElucHV0Qm9vbGVhbigpIG56U2hvd0ljb246IGJvb2xlYW47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QmFubmVyID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25DbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgZ2V0IGljb25UeXBlKCk6IE5nQ2xhc3NUeXBlIHtcclxuICAgIHJldHVybiB0aGlzLm56SWNvblR5cGUgfHwgdGhpcy5pbmZlcnJlZEljb25UeXBlO1xyXG4gIH1cclxuXHJcbiAgZGVzdHJveSA9IGZhbHNlO1xyXG4gIGljb25UaGVtZSA9ICdmaWxsJztcclxuICBpc0ljb25UeXBlT2JqZWN0ID0gZmFsc2U7XHJcblxyXG4gIHByaXZhdGUgaXNUeXBlU2V0ID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBpc1Nob3dJY29uU2V0ID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBpbmZlcnJlZEljb25UeXBlOiBzdHJpbmcgPSAnaW5mby1jaXJjbGUnO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UpIHt9XHJcblxyXG4gIGNsb3NlQWxlcnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgb25GYWRlQW5pbWF0aW9uRG9uZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRlc3Ryb3kpIHtcclxuICAgICAgdGhpcy5uek9uQ2xvc2UuZW1pdCh0cnVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZUljb25DbGFzc01hcCgpOiB2b2lkIHtcclxuICAgIHN3aXRjaCAodGhpcy5uelR5cGUpIHtcclxuICAgICAgY2FzZSAnZXJyb3InOlxyXG4gICAgICAgIHRoaXMuaW5mZXJyZWRJY29uVHlwZSA9ICdjbG9zZS1jaXJjbGUnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdzdWNjZXNzJzpcclxuICAgICAgICB0aGlzLmluZmVycmVkSWNvblR5cGUgPSAnY2hlY2stY2lyY2xlJztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnaW5mbyc6XHJcbiAgICAgICAgdGhpcy5pbmZlcnJlZEljb25UeXBlID0gJ2luZm8tY2lyY2xlJztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnd2FybmluZyc6XHJcbiAgICAgICAgdGhpcy5pbmZlcnJlZEljb25UeXBlID0gJ2V4Y2xhbWF0aW9uLWNpcmNsZSc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICB0aGlzLmljb25UaGVtZSA9IHRoaXMubnpEZXNjcmlwdGlvbiA/ICdvdXRsaW5lJyA6ICdmaWxsJztcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgbnpTaG93SWNvbiwgbnpEZXNjcmlwdGlvbiwgbnpUeXBlLCBuekJhbm5lciwgbnpJY29uVHlwZSB9ID0gY2hhbmdlcztcclxuXHJcbiAgICBpZiAobnpTaG93SWNvbikge1xyXG4gICAgICB0aGlzLmlzU2hvd0ljb25TZXQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChuekRlc2NyaXB0aW9uIHx8IG56VHlwZSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUljb25DbGFzc01hcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChuelR5cGUpIHtcclxuICAgICAgdGhpcy5pc1R5cGVTZXQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChuekJhbm5lcikge1xyXG4gICAgICBpZiAoIXRoaXMuaXNUeXBlU2V0KSB7XHJcbiAgICAgICAgdGhpcy5uelR5cGUgPSAnd2FybmluZyc7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCF0aGlzLmlzU2hvd0ljb25TZXQpIHtcclxuICAgICAgICB0aGlzLm56U2hvd0ljb24gPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG56SWNvblR5cGUpIHtcclxuICAgICAgdGhpcy5pc0ljb25UeXBlT2JqZWN0ID0gdHlwZW9mIG56SWNvblR5cGUuY3VycmVudFZhbHVlID09PSAnb2JqZWN0JztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPGRpdlxyXG4gICpuZ0lmPVwiIWRlc3Ryb3lcIlxyXG4gIGNsYXNzPVwiYW50LWFsZXJ0XCJcclxuICBbY2xhc3MuYW50LWFsZXJ0LXN1Y2Nlc3NdPVwibnpUeXBlID09PSAnc3VjY2VzcydcIlxyXG4gIFtjbGFzcy5hbnQtYWxlcnQtaW5mb109XCJuelR5cGUgPT09ICdpbmZvJ1wiXHJcbiAgW2NsYXNzLmFudC1hbGVydC13YXJuaW5nXT1cIm56VHlwZSA9PT0gJ3dhcm5pbmcnXCJcclxuICBbY2xhc3MuYW50LWFsZXJ0LWVycm9yXT1cIm56VHlwZSA9PT0gJ2Vycm9yJ1wiXHJcbiAgW2NsYXNzLmFudC1hbGVydC1uby1pY29uXT1cIiFuelNob3dJY29uXCJcclxuICBbY2xhc3MuYW50LWFsZXJ0LWJhbm5lcl09XCJuekJhbm5lclwiXHJcbiAgW2NsYXNzLmFudC1hbGVydC1jbG9zYWJsZV09XCJuekNsb3NlYWJsZVwiXHJcbiAgW2NsYXNzLmFudC1hbGVydC13aXRoLWRlc2NyaXB0aW9uXT1cIiEhbnpEZXNjcmlwdGlvblwiXHJcbiAgW0BzbGlkZUFsZXJ0TW90aW9uXVxyXG4gIChAc2xpZGVBbGVydE1vdGlvbi5kb25lKT1cIm9uRmFkZUFuaW1hdGlvbkRvbmUoKVwiXHJcbj5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwibnpTaG93SWNvblwiPlxyXG4gICAgPGlcclxuICAgICAgY2xhc3M9XCJhbnQtYWxlcnQtaWNvblwiXHJcbiAgICAgIFtuZ0NsYXNzXT1cIm56SWNvblR5cGVcIlxyXG4gICAgICAqbmdJZj1cImlzSWNvblR5cGVPYmplY3Q7IGVsc2UgaWNvblRlbXBsYXRlXCJcclxuICAgID48L2k+XHJcbiAgICA8bmctdGVtcGxhdGUgI2ljb25UZW1wbGF0ZT5cclxuICAgICAgPGkgbnotaWNvbiBjbGFzcz1cImFudC1hbGVydC1pY29uXCIgW256VHlwZV09XCJpY29uVHlwZVwiIFtuelRoZW1lXT1cImljb25UaGVtZVwiPjwvaT5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbiAgPHNwYW4gY2xhc3M9XCJhbnQtYWxlcnQtbWVzc2FnZVwiICpuZ0lmPVwibnpNZXNzYWdlXCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpNZXNzYWdlXCI+e3sgbnpNZXNzYWdlIH19PC9uZy1jb250YWluZXI+XHJcbiAgPC9zcGFuPlxyXG4gIDxzcGFuIGNsYXNzPVwiYW50LWFsZXJ0LWRlc2NyaXB0aW9uXCIgKm5nSWY9XCJuekRlc2NyaXB0aW9uXCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpEZXNjcmlwdGlvblwiPnt7IG56RGVzY3JpcHRpb24gfX08L25nLWNvbnRhaW5lcj5cclxuICA8L3NwYW4+XHJcbiAgPGEgKm5nSWY9XCJuekNsb3NlYWJsZSB8fCBuekNsb3NlVGV4dFwiIGNsYXNzPVwiYW50LWFsZXJ0LWNsb3NlLWljb25cIiAoY2xpY2spPVwiY2xvc2VBbGVydCgpXCI+XHJcbiAgICA8bmctdGVtcGxhdGUgI2Nsb3NlRGVmYXVsdFRlbXBsYXRlPlxyXG4gICAgICA8aSBuei1pY29uIG56VHlwZT1cImNsb3NlXCI+PC9pPlxyXG4gICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJuekNsb3NlVGV4dDsgZWxzZSBjbG9zZURlZmF1bHRUZW1wbGF0ZVwiPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpDbG9zZVRleHRcIj57eyBuekNsb3NlVGV4dCB9fTwvbmctY29udGFpbmVyPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgPC9hPlxyXG48L2Rpdj5cclxuIl19
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ComponentPortal, PortalInjector, TemplatePortal } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Injector, Input, TemplateRef, Type, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { NZ_EMPTY_COMPONENT_NAME, simpleEmptyImage } from './nz-empty-config';
import { NzEmptyService } from './nz-empty.service';
import * as i0 from "@angular/core";
import * as i1 from "./nz-empty.service";
import * as i2 from "@angular/platform-browser";
import * as i3 from "@angular/common";
import * as i4 from "./nz-empty.component";
import * as i5 from "@angular/cdk/portal";
function NzEmbedEmptyComponent_ng_container_0_nz_empty_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nz-empty", 6);
} if (rf & 2) {
    var ctx_r436 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("nzNotFoundImage", ctx_r436.defaultSvg);
} }
function NzEmbedEmptyComponent_ng_container_0_nz_empty_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nz-empty", 7);
} if (rf & 2) {
    var ctx_r437 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("nzNotFoundImage", ctx_r437.defaultSvg);
} }
function NzEmbedEmptyComponent_ng_container_0_nz_empty_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nz-empty");
} }
function NzEmbedEmptyComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 2);
    i0.ɵɵtemplate(1, NzEmbedEmptyComponent_ng_container_0_nz_empty_1_Template, 1, 1, "nz-empty", 3);
    i0.ɵɵtemplate(2, NzEmbedEmptyComponent_ng_container_0_nz_empty_2_Template, 1, 1, "nz-empty", 4);
    i0.ɵɵtemplate(3, NzEmbedEmptyComponent_ng_container_0_nz_empty_3_Template, 1, 0, "nz-empty", 5);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r434 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngSwitch", ctx_r434.size);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "normal");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "small");
} }
function NzEmbedEmptyComponent_ng_container_1_1_ng_template_0_Template(rf, ctx) { }
function NzEmbedEmptyComponent_ng_container_1_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NzEmbedEmptyComponent_ng_container_1_1_ng_template_0_Template, 0, 0, "ng-template", 8);
} if (rf & 2) {
    var ctx_r439 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("cdkPortalOutlet", ctx_r439.contentPortal);
} }
function NzEmbedEmptyComponent_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r440 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r440.content, " ");
} }
function NzEmbedEmptyComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzEmbedEmptyComponent_ng_container_1_1_Template, 1, 1, undefined, 1);
    i0.ɵɵtemplate(2, NzEmbedEmptyComponent_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r435 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r435.contentType !== "string");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r435.contentType === "string");
} }
var NzEmbedEmptyComponent = /** @class */ (function () {
    function NzEmbedEmptyComponent(emptyService, sanitizer, viewContainerRef, cdr, injector) {
        this.emptyService = emptyService;
        this.sanitizer = sanitizer;
        this.viewContainerRef = viewContainerRef;
        this.cdr = cdr;
        this.injector = injector;
        this.contentType = 'string';
        this.defaultSvg = this.sanitizer.bypassSecurityTrustResourceUrl(simpleEmptyImage);
        this.size = '';
        this.subs_ = new Subscription();
    }
    NzEmbedEmptyComponent.prototype.ngOnChanges = function (changes) {
        if (changes.nzComponentName) {
            this.size = this.getEmptySize(changes.nzComponentName.currentValue);
        }
        if (changes.specificContent && !changes.specificContent.isFirstChange()) {
            this.content = changes.specificContent.currentValue;
            this.renderEmpty();
        }
    };
    NzEmbedEmptyComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userContent_ = this.emptyService.userDefaultContent$.subscribe(function (content) {
            _this.content = _this.specificContent || content;
            _this.renderEmpty();
        });
        this.subs_.add(userContent_);
    };
    NzEmbedEmptyComponent.prototype.ngOnDestroy = function () {
        this.subs_.unsubscribe();
    };
    NzEmbedEmptyComponent.prototype.getEmptySize = function (componentName) {
        switch (componentName) {
            case 'table':
            case 'list':
                return 'normal';
            case 'select':
            case 'tree-select':
            case 'cascader':
            case 'transfer':
                return 'small';
            default:
                return '';
        }
    };
    NzEmbedEmptyComponent.prototype.renderEmpty = function () {
        var content = this.content;
        if (typeof content === 'string') {
            this.contentType = 'string';
        }
        else if (content instanceof TemplateRef) {
            var context = { $implicit: this.nzComponentName }; // tslint:disable-line:no-any
            this.contentType = 'template';
            this.contentPortal = new TemplatePortal(content, this.viewContainerRef, context);
        }
        else if (content instanceof Type) {
            var context = new WeakMap([[NZ_EMPTY_COMPONENT_NAME, this.nzComponentName]]);
            var injector = new PortalInjector(this.injector, context);
            this.contentType = 'component';
            this.contentPortal = new ComponentPortal(content, this.viewContainerRef, injector);
        }
        else {
            this.contentType = 'string';
            this.contentPortal = undefined;
        }
        this.cdr.markForCheck();
    };
    /** @nocollapse */ NzEmbedEmptyComponent.ɵfac = function NzEmbedEmptyComponent_Factory(t) { return new (t || NzEmbedEmptyComponent)(i0.ɵɵdirectiveInject(i1.NzEmptyService), i0.ɵɵdirectiveInject(i2.DomSanitizer), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.Injector)); };
    /** @nocollapse */ NzEmbedEmptyComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzEmbedEmptyComponent, selectors: [["nz-embed-empty"]], inputs: { nzComponentName: "nzComponentName", specificContent: "specificContent" }, exportAs: ["nzEmbedEmpty"], features: [i0.ɵɵNgOnChangesFeature()], decls: 2, vars: 2, consts: [[3, "ngSwitch", 4, "ngIf"], [4, "ngIf"], [3, "ngSwitch"], ["class", "ant-empty-normal", 3, "nzNotFoundImage", 4, "ngSwitchCase"], ["class", "ant-empty-small", 3, "nzNotFoundImage", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "ant-empty-normal", 3, "nzNotFoundImage"], [1, "ant-empty-small", 3, "nzNotFoundImage"], [3, "cdkPortalOutlet"]], template: function NzEmbedEmptyComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, NzEmbedEmptyComponent_ng_container_0_Template, 4, 3, "ng-container", 0);
            i0.ɵɵtemplate(1, NzEmbedEmptyComponent_ng_container_1_Template, 3, 2, "ng-container", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.content && ctx.specificContent !== null);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.content);
        } }, directives: [i3.NgIf, i3.NgSwitch, i3.NgSwitchCase, i3.NgSwitchDefault, i4.NzEmptyComponent, i5.CdkPortalOutlet], encapsulation: 2, changeDetection: 0 });
    return NzEmbedEmptyComponent;
}());
export { NzEmbedEmptyComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzEmbedEmptyComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-embed-empty',
                exportAs: 'nzEmbedEmpty',
                templateUrl: './nz-embed-empty.component.html'
            }]
    }], function () { return [{ type: i1.NzEmptyService }, { type: i2.DomSanitizer }, { type: i0.ViewContainerRef }, { type: i0.ChangeDetectorRef }, { type: i0.Injector }]; }, { nzComponentName: [{
            type: Input
        }], specificContent: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZW1iZWQtZW1wdHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9lbXB0eS8iLCJzb3VyY2VzIjpbIm56LWVtYmVkLWVtcHR5LmNvbXBvbmVudC50cyIsIm56LWVtYmVkLWVtcHR5LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBRSxlQUFlLEVBQVUsY0FBYyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzlGLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxRQUFRLEVBQ1IsS0FBSyxFQUtMLFdBQVcsRUFDWCxJQUFJLEVBQ0osZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVwQyxPQUFPLEVBQUUsdUJBQXVCLEVBQXFDLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakgsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7Ozs7OztJQzNCbEQsOEJBSVk7OztJQURWLHFEQUE4Qjs7O0lBRWhDLDhCQUlZOzs7SUFEVixxREFBOEI7OztJQUVoQywyQkFBc0M7OztJQVh4QyxnQ0FDRTtJQUFBLCtGQUlDO0lBQ0QsK0ZBSUM7SUFDRCwrRkFBMkI7SUFDN0IsMEJBQWU7OztJQVo0Qyx3Q0FBaUI7SUFFeEUsZUFBd0I7SUFBeEIsdUNBQXdCO0lBS3hCLGVBQXVCO0lBQXZCLHNDQUF1Qjs7OztJQU96Qix1R0FBZ0Y7OztJQUFsQyx3REFBaUM7OztJQUMvRSw2QkFDRTtJQUFBLFlBQ0Y7SUFBQSwwQkFBZTs7O0lBRGIsZUFDRjtJQURFLGlEQUNGOzs7SUFKRiw2QkFDRTtJQUFBLHFGQUFnRjtJ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QUF1QixFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0UsSUFBTSxRQUFRLEdBQUcsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUM1RCxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztZQUMvQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksZUFBZSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDcEY7YUFBTTtZQUNMLElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO1lBQzVCLElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1NBQ2hDO1FBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDOzhGQTlFVSxxQkFBcUI7OERBQXJCLHFCQUFxQjtZQ3JDbEMsd0ZBQ0U7WUFZRix3RkFDRTs7WUFkWSxtRUFBNEM7WUFhNUMsZUFBZTtZQUFmLGtDQUFlOztnQ0RiN0I7Q0FvSEMsQUF0RkQsSUFzRkM7U0EvRVkscUJBQXFCO2tEQUFyQixxQkFBcUI7Y0FQakMsU0FBUztlQUFDO2dCQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFdBQVcsRUFBRSxpQ0FBaUM7YUFDL0M7O2tCQUVFLEtBQUs7O2tCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCwgUG9ydGFsLCBQb3J0YWxJbmplY3RvciwgVGVtcGxhdGVQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgSW5qZWN0b3IsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBUeXBlLFxyXG4gIFZpZXdDb250YWluZXJSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgTlpfRU1QVFlfQ09NUE9ORU5UX05BTUUsIE56RW1wdHlDdXN0b21Db250ZW50LCBOekVtcHR5U2l6ZSwgc2ltcGxlRW1wdHlJbWFnZSB9IGZyb20gJy4vbnotZW1wdHktY29uZmlnJztcclxuaW1wb3J0IHsgTnpFbXB0eVNlcnZpY2UgfSBmcm9tICcuL256LWVtcHR5LnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzZWxlY3RvcjogJ256LWVtYmVkLWVtcHR5JyxcclxuICBleHBvcnRBczogJ256RW1iZWRFbXB0eScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LWVtYmVkLWVtcHR5LmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpFbWJlZEVtcHR5Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgbnpDb21wb25lbnROYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc3BlY2lmaWNDb250ZW50OiBOekVtcHR5Q3VzdG9tQ29udGVudDtcclxuXHJcbiAgY29udGVudD86IE56RW1wdHlDdXN0b21Db250ZW50O1xyXG4gIGNvbnRlbnRUeXBlOiAnY29tcG9uZW50JyB8ICd0ZW1wbGF0ZScgfCAnc3RyaW5nJyA9ICdzdHJpbmcnO1xyXG4gIGNvbnRlbnRQb3J0YWw/OiBQb3J0YWw8YW55PjsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcclxuICBkZWZhdWx0U3ZnID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKHNpbXBsZUVtcHR5SW1hZ2UpO1xyXG4gIHNpemU6IE56RW1wdHlTaXplID0gJyc7XHJcbiAgc3Vic18gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGVtcHR5U2VydmljZTogTnpFbXB0eVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyLFxyXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3JcclxuICApIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLm56Q29tcG9uZW50TmFtZSkge1xyXG4gICAgICB0aGlzLnNpemUgPSB0aGlzLmdldEVtcHR5U2l6ZShjaGFuZ2VzLm56Q29tcG9uZW50TmFtZS5jdXJyZW50VmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VzLnNwZWNpZmljQ29udGVudCAmJiAhY2hhbmdlcy5zcGVjaWZpY0NvbnRlbnQuaXNGaXJzdENoYW5nZSgpKSB7XHJcbiAgICAgIHRoaXMuY29udGVudCA9IGNoYW5nZXMuc3BlY2lmaWNDb250ZW50LmN1cnJlbnRWYWx1ZTtcclxuICAgICAgdGhpcy5yZW5kZXJFbXB0eSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBjb25zdCB1c2VyQ29udGVudF8gPSB0aGlzLmVtcHR5U2VydmljZS51c2VyRGVmYXVsdENvbnRlbnQkLnN1YnNjcmliZShjb250ZW50ID0+IHtcclxuICAgICAgdGhpcy5jb250ZW50ID0gdGhpcy5zcGVjaWZpY0NvbnRlbnQgfHwgY29udGVudDtcclxuICAgICAgdGhpcy5yZW5kZXJFbXB0eSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5zdWJzXy5hZGQodXNlckNvbnRlbnRfKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zdWJzXy51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRFbXB0eVNpemUoY29tcG9uZW50TmFtZTogc3RyaW5nKTogTnpFbXB0eVNpemUge1xyXG4gICAgc3dpdGNoIChjb21wb25lbnROYW1lKSB7XHJcbiAgICAgIGNhc2UgJ3RhYmxlJzpcclxuICAgICAgY2FzZSAnbGlzdCc6XHJcbiAgICAgICAgcmV0dXJuICdub3JtYWwnO1xyXG4gICAgICBjYXNlICdzZWxlY3QnOlxyXG4gICAgICBjYXNlICd0cmVlLXNlbGVjdCc6XHJcbiAgICAgIGNhc2UgJ2Nhc2NhZGVyJzpcclxuICAgICAgY2FzZSAndHJhbnNmZXInOlxyXG4gICAgICAgIHJldHVybiAnc21hbGwnO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVuZGVyRW1wdHkoKTogdm9pZCB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5jb250ZW50O1xyXG5cclxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgdGhpcy5jb250ZW50VHlwZSA9ICdzdHJpbmcnO1xyXG4gICAgfSBlbHNlIGlmIChjb250ZW50IGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcclxuICAgICAgY29uc3QgY29udGV4dCA9IHsgJGltcGxpY2l0OiB0aGlzLm56Q29tcG9uZW50TmFtZSB9IGFzIGFueTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcclxuICAgICAgdGhpcy5jb250ZW50VHlwZSA9ICd0ZW1wbGF0ZSc7XHJcbiAgICAgIHRoaXMuY29udGVudFBvcnRhbCA9IG5ldyBUZW1wbGF0ZVBvcnRhbChjb250ZW50LCB0aGlzLnZpZXdDb250YWluZXJSZWYsIGNvbnRleHQpO1xyXG4gICAgfSBlbHNlIGlmIChjb250ZW50IGluc3RhbmNlb2YgVHlwZSkge1xyXG4gICAgICBjb25zdCBjb250ZXh0ID0gbmV3IFdlYWtNYXAoW1tOWl9FTVBUWV9DT01QT05FTlRfTkFNRSwgdGhpcy5uekNvbXBvbmVudE5hbWVdXSk7XHJcbiAgICAgIGNvbnN0IGluamVjdG9yID0gbmV3IFBvcnRhbEluamVjdG9yKHRoaXMuaW5qZWN0b3IsIGNvbnRleHQpO1xyXG4gICAgICB0aGlzLmNvbnRlbnRUeXBlID0gJ2NvbXBvbmVudCc7XHJcbiAgICAgIHRoaXMuY29udGVudFBvcnRhbCA9IG5ldyBDb21wb25lbnRQb3J0YWwoY29udGVudCwgdGhpcy52aWV3Q29udGFpbmVyUmVmLCBpbmplY3Rvcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNvbnRlbnRUeXBlID0gJ3N0cmluZyc7XHJcbiAgICAgIHRoaXMuY29udGVudFBvcnRhbCA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcbn1cclxuIiwiPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFjb250ZW50ICYmIHNwZWNpZmljQ29udGVudCAhPT0gbnVsbFwiIFtuZ1N3aXRjaF09XCJzaXplXCI+XHJcbiAgPG56LWVtcHR5XHJcbiAgICAqbmdTd2l0Y2hDYXNlPVwiJ25vcm1hbCdcIlxyXG4gICAgY2xhc3M9XCJhbnQtZW1wdHktbm9ybWFsXCJcclxuICAgIFtuek5vdEZvdW5kSW1hZ2VdPVwiZGVmYXVsdFN2Z1wiXHJcbiAgPjwvbnotZW1wdHk+XHJcbiAgPG56LWVtcHR5XHJcbiAgICAqbmdTd2l0Y2hDYXNlPVwiJ3NtYWxsJ1wiXHJcbiAgICBjbGFzcz1cImFudC1lbXB0eS1zbWFsbFwiXHJcbiAgICBbbnpOb3RGb3VuZEltYWdlXT1cImRlZmF1bHRTdmdcIlxyXG4gID48L256LWVtcHR5PlxyXG4gIDxuei1lbXB0eSAqbmdTd2l0Y2hEZWZhdWx0PjwvbnotZW1wdHk+XHJcbjwvbmctY29udGFpbmVyPlxyXG48bmctY29udGFpbmVyICpuZ0lmPVwiY29udGVudFwiPlxyXG4gIDxuZy10ZW1wbGF0ZSAqbmdJZj1cImNvbnRlbnRUeXBlICE9PSAnc3RyaW5nJ1wiIFtjZGtQb3J0YWxPdXRsZXRdPVwiY29udGVudFBvcnRhbFwiPjwvbmctdGVtcGxhdGU+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbnRlbnRUeXBlID09PSAnc3RyaW5nJ1wiPlxyXG4gICAge3sgY29udGVudCB9fVxyXG4gIDwvbmctY29udGFpbmVyPlxyXG48L25nLWNvbnRhaW5lcj5cclxuIl19
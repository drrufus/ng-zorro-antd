/**
 * @fileoverview added by tsickle
 * Generated from: nz-dropdown-menu.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Host, Injector, Optional, Renderer2, Self, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { slideMotion, NzDropdownHigherOrderServiceToken, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import { NzMenuDropdownService } from './nz-menu-dropdown.service';
/**
 * @param {?} injector
 * @return {?}
 */
export function dropdownMenuServiceFactory(injector) {
    return injector.get(NzMenuDropdownService);
}
var NzDropdownMenuComponent = /** @class */ (function () {
    function NzDropdownMenuComponent(cdr, elementRef, renderer, viewContainerRef, nzMenuDropdownService, noAnimation) {
        this.cdr = cdr;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.viewContainerRef = viewContainerRef;
        this.nzMenuDropdownService = nzMenuDropdownService;
        this.noAnimation = noAnimation;
        this.open = false;
        this.triggerWidth = 0;
        this.dropDownPosition = 'bottom';
        this.visible$ = new Subject();
        this.nzTrigger = 'hover';
        this.nzPlacement = 'bottomLeft';
        this.nzOverlayClassName = '';
        this.nzOverlayStyle = {};
        this.nzTableFilter = false;
    }
    /**
     * @param {?} visible
     * @param {?=} trigger
     * @return {?}
     */
    NzDropdownMenuComponent.prototype.setVisibleStateWhen = /**
     * @param {?} visible
     * @param {?=} trigger
     * @return {?}
     */
    function (visible, trigger) {
        if (trigger === void 0) { trigger = 'all'; }
        if (this.nzTrigger === trigger || trigger === 'all') {
            this.visible$.next(visible);
        }
    };
    /**
     * @template T
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    NzDropdownMenuComponent.prototype.setValue = /**
     * @template T
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        this[key] = value;
        this.cdr.markForCheck();
    };
    /**
     * @return {?}
     */
    NzDropdownMenuComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
    };
    NzDropdownMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: "nz-dropdown-menu",
                    template: "<ng-template>\r\n  <div *ngIf=\"open\" class=\"{{'ant-dropdown nz-dropdown ant-dropdown-placement-'+nzPlacement}}\"\r\n       [ngClass]=\"nzOverlayClassName\"\r\n       [ngStyle]=\"nzOverlayStyle\"\r\n       [@slideMotion]=\"dropDownPosition\"\r\n       [@.disabled]=\"noAnimation?.nzNoAnimation\"\r\n       [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n       (mouseenter)=\"setVisibleStateWhen(true,'hover')\"\r\n       (mouseleave)=\"setVisibleStateWhen(false,'hover')\">\r\n    <div [class.ant-table-filter-dropdown]=\"nzTableFilter\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n</ng-template>",
                    exportAs: "nzDropdownMenu",
                    animations: [slideMotion],
                    providers: [
                        NzMenuDropdownService,
                        {
                            provide: NzDropdownHigherOrderServiceToken,
                            useFactory: dropdownMenuServiceFactory,
                            deps: [[new Self(), Injector]]
                        }
                    ],
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["\n      :root .ant-dropdown.nz-dropdown {\n        top: 0;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzDropdownMenuComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: Renderer2 },
        { type: ViewContainerRef },
        { type: NzMenuDropdownService },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    NzDropdownMenuComponent.propDecorators = {
        templateRef: [{ type: ViewChild, args: [TemplateRef, { static: true },] }]
    };
    return NzDropdownMenuComponent;
}());
export { NzDropdownMenuComponent };
if (false) {
    /** @type {?} */
    NzDropdownMenuComponent.prototype.open;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.triggerWidth;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.dropDownPosition;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.visible$;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.nzTrigger;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.nzPlacement;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.nzOverlayClassName;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.nzOverlayStyle;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.nzTableFilter;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.templateRef;
    /**
     * @type {?}
     * @private
     */
    NzDropdownMenuComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzDropdownMenuComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzDropdownMenuComponent.prototype.renderer;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.viewContainerRef;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.nzMenuDropdownService;
    /** @type {?} */
    NzDropdownMenuComponent.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJvcGRvd24tbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2Ryb3Bkb3duLyIsInNvdXJjZXMiOlsibnotZHJvcGRvd24tbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVEsRUFDUixTQUFTLEVBQ1QsSUFBSSxFQUNKLFdBQVcsRUFDWCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsV0FBVyxFQUNYLGlDQUFpQyxFQUVqQyxzQkFBc0IsRUFDdkIsTUFBTSxvQkFBb0IsQ0FBQztBQUU1QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7OztBQUluRSxNQUFNLFVBQVUsMEJBQTBCLENBQUMsUUFBa0I7SUFDM0QsT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDN0MsQ0FBQztBQUVEO0lBcURFLGlDQUNVLEdBQXNCLEVBQ3RCLFVBQXNCLEVBQ3RCLFFBQW1CLEVBQ3BCLGdCQUFrQyxFQUNsQyxxQkFBNEMsRUFDeEIsV0FBb0M7UUFMdkQsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ3BCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUN4QixnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUE3QmpFLFNBQUksR0FBRyxLQUFLLENBQUM7UUFDYixpQkFBWSxHQUFHLENBQUMsQ0FBQztRQUNqQixxQkFBZ0IsR0FBZ0MsUUFBUSxDQUFDO1FBQ3pELGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBVyxDQUFDO1FBQ2xDLGNBQVMsR0FBc0IsT0FBTyxDQUFDO1FBQ3ZDLGdCQUFXLEdBQW9CLFlBQVksQ0FBQztRQUM1Qyx1QkFBa0IsR0FBRyxFQUFFLENBQUM7UUFDeEIsbUJBQWMsR0FBOEIsRUFBRSxDQUFDO1FBQy9DLGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBc0JuQixDQUFDOzs7Ozs7SUFsQkoscURBQW1COzs7OztJQUFuQixVQUFvQixPQUFnQixFQUFFLE9BQTBDO1FBQTFDLHdCQUFBLEVBQUEsZUFBMEM7UUFDOUUsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLE9BQU8sSUFBSSxPQUFPLEtBQUssS0FBSyxFQUFFO1lBQ25ELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQzs7Ozs7OztJQUVELDBDQUFROzs7Ozs7SUFBUixVQUFrRCxHQUFNLEVBQUUsS0FBYztRQUN0RSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7OztJQVdELG9EQUFrQjs7O0lBQWxCO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3BILENBQUM7O2dCQWhFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsMG5CQUFnRDtvQkFDaEQsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsVUFBVSxFQUFFLENBQUMsV0FBVyxDQUFDO29CQUN6QixTQUFTLEVBQUU7d0JBQ1QscUJBQXFCO3dCQUNyQjs0QkFDRSxPQUFPLEVBQUUsaUNBQWlDOzRCQUMxQyxVQUFVLEVBQUUsMEJBQTBCOzRCQUN0QyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7eUJBQy9CO3FCQUNGO29CQWFELG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs2QkFiN0MsdU1BU0M7aUJBS0o7Ozs7Z0JBekRDLGlCQUFpQjtnQkFFakIsVUFBVTtnQkFJVixTQUFTO2dCQUlULGdCQUFnQjtnQkFXVCxxQkFBcUI7Z0JBSjVCLHNCQUFzQix1QkF1RW5CLElBQUksWUFBSSxRQUFROzs7OEJBbkJsQixTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7SUF5QjFDLDhCQUFDO0NBQUEsQUFqRUQsSUFpRUM7U0FwQ1ksdUJBQXVCOzs7SUFDbEMsdUNBQWE7O0lBQ2IsK0NBQWlCOztJQUNqQixtREFBeUQ7O0lBQ3pELDJDQUFrQzs7SUFDbEMsNENBQXVDOztJQUN2Qyw4Q0FBNEM7O0lBQzVDLHFEQUF3Qjs7SUFDeEIsaURBQStDOztJQUMvQyxnREFBc0I7O0lBRXRCLDhDQUF3RTs7Ozs7SUFjdEUsc0NBQThCOzs7OztJQUM5Qiw2Q0FBOEI7Ozs7O0lBQzlCLDJDQUEyQjs7SUFDM0IsbURBQXlDOztJQUN6Qyx3REFBbUQ7O0lBQ25ELDhDQUErRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEhvc3QsXHJcbiAgSW5qZWN0b3IsXHJcbiAgT3B0aW9uYWwsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNlbGYsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdDb250YWluZXJSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBzbGlkZU1vdGlvbixcclxuICBOekRyb3Bkb3duSGlnaGVyT3JkZXJTZXJ2aWNlVG9rZW4sXHJcbiAgTnpNZW51QmFzZVNlcnZpY2UsXHJcbiAgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxyXG59IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE56TWVudURyb3Bkb3duU2VydmljZSB9IGZyb20gJy4vbnotbWVudS1kcm9wZG93bi5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCB0eXBlIE56UGxhY2VtZW50VHlwZSA9ICdib3R0b21MZWZ0JyB8ICdib3R0b21DZW50ZXInIHwgJ2JvdHRvbVJpZ2h0JyB8ICd0b3BMZWZ0JyB8ICd0b3BDZW50ZXInIHwgJ3RvcFJpZ2h0JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkcm9wZG93bk1lbnVTZXJ2aWNlRmFjdG9yeShpbmplY3RvcjogSW5qZWN0b3IpOiBOek1lbnVCYXNlU2VydmljZSB7XHJcbiAgcmV0dXJuIGluamVjdG9yLmdldChOek1lbnVEcm9wZG93blNlcnZpY2UpO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogYG56LWRyb3Bkb3duLW1lbnVgLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1kcm9wZG93bi1tZW51LmNvbXBvbmVudC5odG1sJyxcclxuICBleHBvcnRBczogYG56RHJvcGRvd25NZW51YCxcclxuICBhbmltYXRpb25zOiBbc2xpZGVNb3Rpb25dLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgTnpNZW51RHJvcGRvd25TZXJ2aWNlLFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOekRyb3Bkb3duSGlnaGVyT3JkZXJTZXJ2aWNlVG9rZW4sXHJcbiAgICAgIHVzZUZhY3Rvcnk6IGRyb3Bkb3duTWVudVNlcnZpY2VGYWN0b3J5LFxyXG4gICAgICBkZXBzOiBbW25ldyBTZWxmKCksIEluamVjdG9yXV1cclxuICAgIH1cclxuICBdLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICA6cm9vdCAuYW50LWRyb3Bkb3duLm56LWRyb3Bkb3duIHtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF0sXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpEcm9wZG93bk1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcclxuICBvcGVuID0gZmFsc2U7XHJcbiAgdHJpZ2dlcldpZHRoID0gMDtcclxuICBkcm9wRG93blBvc2l0aW9uOiAndG9wJyB8ICdjZW50ZXInIHwgJ2JvdHRvbScgPSAnYm90dG9tJztcclxuICB2aXNpYmxlJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcbiAgbnpUcmlnZ2VyOiAnY2xpY2snIHwgJ2hvdmVyJyA9ICdob3Zlcic7XHJcbiAgbnpQbGFjZW1lbnQ6IE56UGxhY2VtZW50VHlwZSA9ICdib3R0b21MZWZ0JztcclxuICBuek92ZXJsYXlDbGFzc05hbWUgPSAnJztcclxuICBuek92ZXJsYXlTdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xyXG4gIG56VGFibGVGaWx0ZXIgPSBmYWxzZTtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZiwgeyBzdGF0aWM6IHRydWUgfSkgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIHNldFZpc2libGVTdGF0ZVdoZW4odmlzaWJsZTogYm9vbGVhbiwgdHJpZ2dlcjogJ2NsaWNrJyB8ICdob3ZlcicgfCAnYWxsJyA9ICdhbGwnKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uelRyaWdnZXIgPT09IHRyaWdnZXIgfHwgdHJpZ2dlciA9PT0gJ2FsbCcpIHtcclxuICAgICAgdGhpcy52aXNpYmxlJC5uZXh0KHZpc2libGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0VmFsdWU8VCBleHRlbmRzIGtleW9mIE56RHJvcGRvd25NZW51Q29tcG9uZW50PihrZXk6IFQsIHZhbHVlOiB0aGlzW1RdKTogdm9pZCB7XHJcbiAgICB0aGlzW2tleV0gPSB2YWx1ZTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwdWJsaWMgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgIHB1YmxpYyBuek1lbnVEcm9wZG93blNlcnZpY2U6IE56TWVudURyb3Bkb3duU2VydmljZSxcclxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxyXG4gICkge31cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLnJlbmRlcmVyLnBhcmVudE5vZGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
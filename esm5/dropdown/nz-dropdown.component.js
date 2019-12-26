/**
 * @fileoverview added by tsickle
 * Generated from: nz-dropdown.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, EventEmitter, Host, Injector, Input, Optional, Output, Self, ViewEncapsulation } from '@angular/core';
import { combineLatest, merge, EMPTY, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, mapTo, takeUntil } from 'rxjs/operators';
import { slideMotion, warnDeprecation, DEFAULT_DROPDOWN_POSITIONS, InputBoolean, NzDropdownHigherOrderServiceToken, NzNoAnimationDirective, POSITION_MAP } from 'ng-zorro-antd/core';
import { NzDropDownDirective } from './nz-dropdown.directive';
import { NzMenuDropdownService } from './nz-menu-dropdown.service';
/**
 * @param {?} injector
 * @return {?}
 */
export function menuServiceFactory(injector) {
    return injector.get(NzMenuDropdownService);
}
var NzDropDownComponent = /** @class */ (function () {
    function NzDropDownComponent(cdr, nzMenuDropdownService, noAnimation) {
        this.cdr = cdr;
        this.nzMenuDropdownService = nzMenuDropdownService;
        this.noAnimation = noAnimation;
        this.triggerWidth = 0;
        this.dropDownPosition = 'bottom';
        this.positions = tslib_1.__spread(DEFAULT_DROPDOWN_POSITIONS);
        this.visible$ = new Subject();
        this.destroy$ = new Subject();
        this.nzTrigger = 'hover';
        this.nzOverlayClassName = '';
        this.nzOverlayStyle = {};
        this.nzPlacement = 'bottomLeft';
        this.nzClickHide = true;
        this.nzDisabled = false;
        this.nzVisible = false;
        this.nzTableFilter = false;
        this.nzVisibleChange = new EventEmitter();
        warnDeprecation("'nz-dropdown' Component is going to be removed in 9.0.0. Please use 'nz-dropdown-menu' instead. Read https://ng.ant.design/components/dropdown/en");
    }
    /**
     * @param {?} visible
     * @param {?=} trigger
     * @return {?}
     */
    NzDropDownComponent.prototype.setVisibleStateWhen = /**
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
     * @param {?} position
     * @return {?}
     */
    NzDropDownComponent.prototype.onPositionChange = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        this.dropDownPosition = position.connectionPair.originY;
        this.cdr.markForCheck();
    };
    /**
     * @param {?} observable$
     * @return {?}
     */
    NzDropDownComponent.prototype.startSubscribe = /**
     * @param {?} observable$
     * @return {?}
     */
    function (observable$) {
        var _this = this;
        /** @type {?} */
        var click$ = this.nzClickHide ? this.nzMenuDropdownService.menuItemClick$.pipe(mapTo(false)) : EMPTY;
        combineLatest([merge(observable$, click$), this.nzMenuDropdownService.menuOpen$])
            .pipe(map((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return value[0] || value[1]; })), debounceTime(50), distinctUntilChanged(), takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} visible
         * @return {?}
         */
        function (visible) {
            if (!_this.nzDisabled && _this.nzVisible !== visible) {
                _this.nzVisible = visible;
                _this.nzVisibleChange.emit(_this.nzVisible);
                _this.triggerWidth = _this.nzDropDownDirective.elementRef.nativeElement.getBoundingClientRect().width;
                _this.cdr.markForCheck();
            }
        }));
    };
    /**
     * @return {?}
     */
    NzDropDownComponent.prototype.updateDisabledState = /**
     * @return {?}
     */
    function () {
        if (this.nzDropDownDirective) {
            this.nzDropDownDirective.setDisabled(this.nzDisabled);
        }
    };
    /**
     * @return {?}
     */
    NzDropDownComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * @return {?}
     */
    NzDropDownComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.startSubscribe(merge(this.visible$, this.nzTrigger === 'hover' ? this.nzDropDownDirective.hover$ : this.nzDropDownDirective.$click));
        this.updateDisabledState();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzDropDownComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzVisible) {
            this.visible$.next(this.nzVisible);
        }
        if (changes.nzDisabled) {
            this.updateDisabledState();
        }
        if (changes.nzPlacement) {
            this.dropDownPosition = this.nzPlacement.indexOf('top') !== -1 ? 'top' : 'bottom';
            this.positions = tslib_1.__spread([POSITION_MAP[this.nzPlacement]], this.positions);
        }
    };
    NzDropDownComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-dropdown',
                    exportAs: 'nzDropdown',
                    preserveWhitespaces: false,
                    providers: [
                        NzMenuDropdownService,
                        {
                            provide: NzDropdownHigherOrderServiceToken,
                            useFactory: menuServiceFactory,
                            deps: [[new Self(), Injector]]
                        }
                    ],
                    animations: [slideMotion],
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "<ng-content select=\"[nz-dropdown]\"></ng-content>\r\n<ng-template\r\n  cdkConnectedOverlay\r\n  nzConnectedOverlay\r\n  [cdkConnectedOverlayHasBackdrop]=\"nzTrigger === 'click'\"\r\n  [cdkConnectedOverlayPositions]=\"positions\"\r\n  [cdkConnectedOverlayOrigin]=\"nzDropDownDirective\"\r\n  [cdkConnectedOverlayMinWidth]=\"triggerWidth\"\r\n  [cdkConnectedOverlayOpen]=\"nzVisible\"\r\n  (backdropClick)=\"setVisibleStateWhen(false)\"\r\n  (detach)=\"setVisibleStateWhen(false)\"\r\n  (positionChange)=\"onPositionChange($event)\">\r\n  <div class=\"{{'ant-dropdown ant-dropdown-placement-'+nzPlacement}}\"\r\n    [ngClass]=\"nzOverlayClassName\"\r\n    [ngStyle]=\"nzOverlayStyle\"\r\n    [@slideMotion]=\"dropDownPosition\"\r\n    [@.disabled]=\"noAnimation?.nzNoAnimation\"\r\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n    [style.minWidth.px]=\"triggerWidth\"\r\n    (mouseenter)=\"setVisibleStateWhen(true,'hover')\"\r\n    (mouseleave)=\"setVisibleStateWhen(false,'hover')\">\r\n    <div [class.ant-table-filter-dropdown]=\"nzTableFilter\">\r\n      <ng-content select=\"[nz-menu]\"></ng-content>\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n</ng-template>",
                    styles: ["\n      :root .ant-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzDropDownComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NzMenuDropdownService },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    NzDropDownComponent.propDecorators = {
        nzDropDownDirective: [{ type: ContentChild, args: [NzDropDownDirective, { static: false },] }],
        nzTrigger: [{ type: Input }],
        nzOverlayClassName: [{ type: Input }],
        nzOverlayStyle: [{ type: Input }],
        nzPlacement: [{ type: Input }],
        nzClickHide: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzVisible: [{ type: Input }],
        nzTableFilter: [{ type: Input }],
        nzVisibleChange: [{ type: Output }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzDropDownComponent.prototype, "nzClickHide", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzDropDownComponent.prototype, "nzDisabled", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzDropDownComponent.prototype, "nzVisible", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzDropDownComponent.prototype, "nzTableFilter", void 0);
    return NzDropDownComponent;
}());
export { NzDropDownComponent };
if (false) {
    /** @type {?} */
    NzDropDownComponent.prototype.triggerWidth;
    /** @type {?} */
    NzDropDownComponent.prototype.dropDownPosition;
    /** @type {?} */
    NzDropDownComponent.prototype.positions;
    /** @type {?} */
    NzDropDownComponent.prototype.visible$;
    /**
     * @type {?}
     * @private
     */
    NzDropDownComponent.prototype.destroy$;
    /** @type {?} */
    NzDropDownComponent.prototype.nzDropDownDirective;
    /** @type {?} */
    NzDropDownComponent.prototype.nzTrigger;
    /** @type {?} */
    NzDropDownComponent.prototype.nzOverlayClassName;
    /** @type {?} */
    NzDropDownComponent.prototype.nzOverlayStyle;
    /** @type {?} */
    NzDropDownComponent.prototype.nzPlacement;
    /** @type {?} */
    NzDropDownComponent.prototype.nzClickHide;
    /** @type {?} */
    NzDropDownComponent.prototype.nzDisabled;
    /** @type {?} */
    NzDropDownComponent.prototype.nzVisible;
    /** @type {?} */
    NzDropDownComponent.prototype.nzTableFilter;
    /** @type {?} */
    NzDropDownComponent.prototype.nzVisibleChange;
    /**
     * @type {?}
     * @protected
     */
    NzDropDownComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzDropDownComponent.prototype.nzMenuDropdownService;
    /** @type {?} */
    NzDropDownComponent.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9kcm9wZG93bi8iLCJzb3VyY2VzIjpbIm56LWRyb3Bkb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBU0EsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixZQUFZLEVBQ1osSUFBSSxFQUNKLFFBQVEsRUFDUixLQUFLLEVBR0wsUUFBUSxFQUNSLE1BQU0sRUFDTixJQUFJLEVBRUosaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDeEUsT0FBTyxFQUFFLFlBQVksRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNGLE9BQU8sRUFDTCxXQUFXLEVBQ1gsZUFBZSxFQUNmLDBCQUEwQixFQUMxQixZQUFZLEVBQ1osaUNBQWlDLEVBRWpDLHNCQUFzQixFQUN0QixZQUFZLEVBQ2IsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7QUFJbkUsTUFBTSxVQUFVLGtCQUFrQixDQUFDLFFBQWtCO0lBQ25ELE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBQzdDLENBQUM7QUFFRDtJQXFGRSw2QkFDWSxHQUFzQixFQUN4QixxQkFBNEMsRUFDekIsV0FBb0M7UUFGckQsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDeEIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUN6QixnQkFBVyxH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QzdFLGtDQUFnQzs7Ozs7SUFDaEMsb0RBQW9EOztJQUNwRCwwQ0FBK0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSwgQ29ubmVjdGlvblBvc2l0aW9uUGFpciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEhvc3QsXHJcbiAgSW5qZWN0b3IsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgU2VsZixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBtZXJnZSwgRU1QVFksIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwLCBtYXBUbywgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBzbGlkZU1vdGlvbixcclxuICB3YXJuRGVwcmVjYXRpb24sXHJcbiAgREVGQVVMVF9EUk9QRE9XTl9QT1NJVElPTlMsXHJcbiAgSW5wdXRCb29sZWFuLFxyXG4gIE56RHJvcGRvd25IaWdoZXJPcmRlclNlcnZpY2VUb2tlbixcclxuICBOek1lbnVCYXNlU2VydmljZSxcclxuICBOek5vQW5pbWF0aW9uRGlyZWN0aXZlLFxyXG4gIFBPU0lUSU9OX01BUFxyXG59IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56RHJvcERvd25EaXJlY3RpdmUgfSBmcm9tICcuL256LWRyb3Bkb3duLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE56TWVudURyb3Bkb3duU2VydmljZSB9IGZyb20gJy4vbnotbWVudS1kcm9wZG93bi5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCB0eXBlIE56UGxhY2VtZW50ID0gJ2JvdHRvbUxlZnQnIHwgJ2JvdHRvbUNlbnRlcicgfCAnYm90dG9tUmlnaHQnIHwgJ3RvcExlZnQnIHwgJ3RvcENlbnRlcicgfCAndG9wUmlnaHQnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1lbnVTZXJ2aWNlRmFjdG9yeShpbmplY3RvcjogSW5qZWN0b3IpOiBOek1lbnVCYXNlU2VydmljZSB7XHJcbiAgcmV0dXJuIGluamVjdG9yLmdldChOek1lbnVEcm9wZG93blNlcnZpY2UpO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LWRyb3Bkb3duJyxcclxuICBleHBvcnRBczogJ256RHJvcGRvd24nLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgTnpNZW51RHJvcGRvd25TZXJ2aWNlLFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOekRyb3Bkb3duSGlnaGVyT3JkZXJTZXJ2aWNlVG9rZW4sXHJcbiAgICAgIHVzZUZhY3Rvcnk6IG1lbnVTZXJ2aWNlRmFjdG9yeSxcclxuICAgICAgZGVwczogW1tuZXcgU2VsZigpLCBJbmplY3Rvcl1dXHJcbiAgICB9XHJcbiAgXSxcclxuICBhbmltYXRpb25zOiBbc2xpZGVNb3Rpb25dLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LWRyb3Bkb3duLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgOnJvb3QgLmFudC1kcm9wZG93biB7XHJcbiAgICAgICAgdG9wOiAxMDAlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbi8qKlxyXG4gKiBAZGVwcmVjYXRlZCBVc2UgYE56RHJvcGRvd25EaXJlY3RpdmVgIGluc3RlYWQsIHdpbGwgcmVtb3ZlIGluIDkuMC4wLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE56RHJvcERvd25Db21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgdHJpZ2dlcldpZHRoID0gMDtcclxuICBkcm9wRG93blBvc2l0aW9uOiAndG9wJyB8ICdjZW50ZXInIHwgJ2JvdHRvbScgPSAnYm90dG9tJztcclxuICBwb3NpdGlvbnM6IENvbm5lY3Rpb25Qb3NpdGlvblBhaXJbXSA9IFsuLi5ERUZBVUxUX0RST1BET1dOX1BPU0lUSU9OU107XHJcbiAgdmlzaWJsZSQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIEBDb250ZW50Q2hpbGQoTnpEcm9wRG93bkRpcmVjdGl2ZSwgeyBzdGF0aWM6IGZhbHNlIH0pIG56RHJvcERvd25EaXJlY3RpdmU6IE56RHJvcERvd25EaXJlY3RpdmU7XHJcbiAgQElucHV0KCkgbnpUcmlnZ2VyOiAnY2xpY2snIHwgJ2hvdmVyJyA9ICdob3Zlcic7XHJcbiAgQElucHV0KCkgbnpPdmVybGF5Q2xhc3NOYW1lID0gJyc7XHJcbiAgQElucHV0KCkgbnpPdmVybGF5U3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcclxuICBASW5wdXQoKSBuelBsYWNlbWVudDogTnpQbGFjZW1lbnQgPSAnYm90dG9tTGVmdCc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q2xpY2tIaWRlID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelZpc2libGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpUYWJsZUZpbHRlciA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelZpc2libGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgc2V0VmlzaWJsZVN0YXRlV2hlbih2aXNpYmxlOiBib29sZWFuLCB0cmlnZ2VyOiAnY2xpY2snIHwgJ2hvdmVyJyB8ICdhbGwnID0gJ2FsbCcpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56VHJpZ2dlciA9PT0gdHJpZ2dlciB8fCB0cmlnZ2VyID09PSAnYWxsJykge1xyXG4gICAgICB0aGlzLnZpc2libGUkLm5leHQodmlzaWJsZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblBvc2l0aW9uQ2hhbmdlKHBvc2l0aW9uOiBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UpOiB2b2lkIHtcclxuICAgIHRoaXMuZHJvcERvd25Qb3NpdGlvbiA9IHBvc2l0aW9uLmNvbm5lY3Rpb25QYWlyLm9yaWdpblk7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHN0YXJ0U3Vic2NyaWJlKG9ic2VydmFibGUkOiBPYnNlcnZhYmxlPGJvb2xlYW4+KTogdm9pZCB7XHJcbiAgICBjb25zdCBjbGljayQgPSB0aGlzLm56Q2xpY2tIaWRlID8gdGhpcy5uek1lbnVEcm9wZG93blNlcnZpY2UubWVudUl0ZW1DbGljayQucGlwZShtYXBUbyhmYWxzZSkpIDogRU1QVFk7XHJcbiAgICBjb21iaW5lTGF0ZXN0KFttZXJnZShvYnNlcnZhYmxlJCwgY2xpY2skKSwgdGhpcy5uek1lbnVEcm9wZG93blNlcnZpY2UubWVudU9wZW4kXSlcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgbWFwKHZhbHVlID0+IHZhbHVlWzBdIHx8IHZhbHVlWzFdKSxcclxuICAgICAgICBkZWJvdW5jZVRpbWUoNTApLFxyXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXHJcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZSh2aXNpYmxlID0+IHtcclxuICAgICAgICBpZiAoIXRoaXMubnpEaXNhYmxlZCAmJiB0aGlzLm56VmlzaWJsZSAhPT0gdmlzaWJsZSkge1xyXG4gICAgICAgICAgdGhpcy5uelZpc2libGUgPSB2aXNpYmxlO1xyXG4gICAgICAgICAgdGhpcy5uelZpc2libGVDaGFuZ2UuZW1pdCh0aGlzLm56VmlzaWJsZSk7XHJcbiAgICAgICAgICB0aGlzLnRyaWdnZXJXaWR0aCA9IHRoaXMubnpEcm9wRG93bkRpcmVjdGl2ZS5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XHJcbiAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlRGlzYWJsZWRTdGF0ZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56RHJvcERvd25EaXJlY3RpdmUpIHtcclxuICAgICAgdGhpcy5uekRyb3BEb3duRGlyZWN0aXZlLnNldERpc2FibGVkKHRoaXMubnpEaXNhYmxlZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByb3RlY3RlZCBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBuek1lbnVEcm9wZG93blNlcnZpY2U6IE56TWVudURyb3Bkb3duU2VydmljZSxcclxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxyXG4gICkge1xyXG4gICAgd2FybkRlcHJlY2F0aW9uKFxyXG4gICAgICBgJ256LWRyb3Bkb3duJyBDb21wb25lbnQgaXMgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiA5LjAuMC4gUGxlYXNlIHVzZSAnbnotZHJvcGRvd24tbWVudScgaW5zdGVhZC4gUmVhZCBodHRwczovL25nLmFudC5kZXNpZ24vY29tcG9uZW50cy9kcm9wZG93bi9lbmBcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zdGFydFN1YnNjcmliZShcclxuICAgICAgbWVyZ2UoXHJcbiAgICAgICAgdGhpcy52aXNpYmxlJCxcclxuICAgICAgICB0aGlzLm56VHJpZ2dlciA9PT0gJ2hvdmVyJyA/IHRoaXMubnpEcm9wRG93bkRpcmVjdGl2ZS5ob3ZlciQgOiB0aGlzLm56RHJvcERvd25EaXJlY3RpdmUuJGNsaWNrXHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgICB0aGlzLnVwZGF0ZURpc2FibGVkU3RhdGUoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLm56VmlzaWJsZSkge1xyXG4gICAgICB0aGlzLnZpc2libGUkLm5leHQodGhpcy5uelZpc2libGUpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMubnpEaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZURpc2FibGVkU3RhdGUoKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLm56UGxhY2VtZW50KSB7XHJcbiAgICAgIHRoaXMuZHJvcERvd25Qb3NpdGlvbiA9IHRoaXMubnpQbGFjZW1lbnQuaW5kZXhPZigndG9wJykgIT09IC0xID8gJ3RvcCcgOiAnYm90dG9tJztcclxuICAgICAgdGhpcy5wb3NpdGlvbnMgPSBbUE9TSVRJT05fTUFQW3RoaXMubnpQbGFjZW1lbnRdLCAuLi50aGlzLnBvc2l0aW9uc107XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==
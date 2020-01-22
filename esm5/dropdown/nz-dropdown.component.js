/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9kcm9wZG93bi8iLCJzb3VyY2VzIjpbIm56LWRyb3Bkb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFTQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFlBQVksRUFDWixJQUFJLEVBQ0osUUFBUSxFQUNSLEtBQUssRUFHTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLElBQUksRUFFSixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN4RSxPQUFPLEVBQUUsWUFBWSxFQUFFLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0YsT0FBTyxFQUNMLFdBQVcsRUFDWCxlQUFlLEVBQ2YsMEJBQTBCLEVBQzFCLFlBQVksRUFDWixpQ0FBaUMsRUFFakMsc0JBQXNCLEVBQ3RCLFlBQVksRUFDYixNQUFNLG9CQUFvQixDQUFDO0FBQzVCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7OztBQUluRSxNQUFNLFVBQVUsa0JBQWtCLENBQUMsUUFBa0I7SUFDbkQsT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDN0MsQ0FBQztBQUVEO0lBcUZFLDZCQUNZLEdBQXNCLEVBQ3hCLHFCQUE0QyxFQUN6QixXQUFvQztRQUZyRCxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN4QiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQ3pCLGdCQUFXLEdB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N0Usa0NBQWdDOzs7OztJQUNoQyxvREFBb0Q7O0lBQ3BELDBDQUErRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlLCBDb25uZWN0aW9uUG9zaXRpb25QYWlyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdCxcclxuICBJbmplY3RvcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBTZWxmLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIG1lcmdlLCBFTVBUWSwgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAsIG1hcFRvLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIHNsaWRlTW90aW9uLFxyXG4gIHdhcm5EZXByZWNhdGlvbixcclxuICBERUZBVUxUX0RST1BET1dOX1BPU0lUSU9OUyxcclxuICBJbnB1dEJvb2xlYW4sXHJcbiAgTnpEcm9wZG93bkhpZ2hlck9yZGVyU2VydmljZVRva2VuLFxyXG4gIE56TWVudUJhc2VTZXJ2aWNlLFxyXG4gIE56Tm9BbmltYXRpb25EaXJlY3RpdmUsXHJcbiAgUE9TSVRJT05fTUFQXHJcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpEcm9wRG93bkRpcmVjdGl2ZSB9IGZyb20gJy4vbnotZHJvcGRvd24uZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTnpNZW51RHJvcGRvd25TZXJ2aWNlIH0gZnJvbSAnLi9uei1tZW51LWRyb3Bkb3duLnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IHR5cGUgTnpQbGFjZW1lbnQgPSAnYm90dG9tTGVmdCcgfCAnYm90dG9tQ2VudGVyJyB8ICdib3R0b21SaWdodCcgfCAndG9wTGVmdCcgfCAndG9wQ2VudGVyJyB8ICd0b3BSaWdodCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWVudVNlcnZpY2VGYWN0b3J5KGluamVjdG9yOiBJbmplY3Rvcik6IE56TWVudUJhc2VTZXJ2aWNlIHtcclxuICByZXR1cm4gaW5qZWN0b3IuZ2V0KE56TWVudURyb3Bkb3duU2VydmljZSk7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotZHJvcGRvd24nLFxyXG4gIGV4cG9ydEFzOiAnbnpEcm9wZG93bicsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBOek1lbnVEcm9wZG93blNlcnZpY2UsXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE56RHJvcGRvd25IaWdoZXJPcmRlclNlcnZpY2VUb2tlbixcclxuICAgICAgdXNlRmFjdG9yeTogbWVudVNlcnZpY2VGYWN0b3J5LFxyXG4gICAgICBkZXBzOiBbW25ldyBTZWxmKCksIEluamVjdG9yXV1cclxuICAgIH1cclxuICBdLFxyXG4gIGFuaW1hdGlvbnM6IFtzbGlkZU1vdGlvbl0sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotZHJvcGRvd24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICA6cm9vdCAuYW50LWRyb3Bkb3duIHtcclxuICAgICAgICB0b3A6IDEwMCU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuLyoqXHJcbiAqIEBkZXByZWNhdGVkIFVzZSBgTnpEcm9wZG93bkRpcmVjdGl2ZWAgaW5zdGVhZCwgd2lsbCByZW1vdmUgaW4gOS4wLjAuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTnpEcm9wRG93bkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzIHtcclxuICB0cmlnZ2VyV2lkdGggPSAwO1xyXG4gIGRyb3BEb3duUG9zaXRpb246ICd0b3AnIHwgJ2NlbnRlcicgfCAnYm90dG9tJyA9ICdib3R0b20nO1xyXG4gIHBvc2l0aW9uczogQ29ubmVjdGlvblBvc2l0aW9uUGFpcltdID0gWy4uLkRFRkFVTFRfRFJPUERPV05fUE9TSVRJT05TXTtcclxuICB2aXNpYmxlJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgQENvbnRlbnRDaGlsZChOekRyb3BEb3duRGlyZWN0aXZlLCB7IHN0YXRpYzogZmFsc2UgfSkgbnpEcm9wRG93bkRpcmVjdGl2ZTogTnpEcm9wRG93bkRpcmVjdGl2ZTtcclxuICBASW5wdXQoKSBuelRyaWdnZXI6ICdjbGljaycgfCAnaG92ZXInID0gJ2hvdmVyJztcclxuICBASW5wdXQoKSBuek92ZXJsYXlDbGFzc05hbWUgPSAnJztcclxuICBASW5wdXQoKSBuek92ZXJsYXlTdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xyXG4gIEBJbnB1dCgpIG56UGxhY2VtZW50OiBOelBsYWNlbWVudCA9ICdib3R0b21MZWZ0JztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDbGlja0hpZGUgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56VmlzaWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelRhYmxlRmlsdGVyID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56VmlzaWJsZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBzZXRWaXNpYmxlU3RhdGVXaGVuKHZpc2libGU6IGJvb2xlYW4sIHRyaWdnZXI6ICdjbGljaycgfCAnaG92ZXInIHwgJ2FsbCcgPSAnYWxsJyk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpUcmlnZ2VyID09PSB0cmlnZ2VyIHx8IHRyaWdnZXIgPT09ICdhbGwnKSB7XHJcbiAgICAgIHRoaXMudmlzaWJsZSQubmV4dCh2aXNpYmxlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uUG9zaXRpb25DaGFuZ2UocG9zaXRpb246IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSk6IHZvaWQge1xyXG4gICAgdGhpcy5kcm9wRG93blBvc2l0aW9uID0gcG9zaXRpb24uY29ubmVjdGlvblBhaXIub3JpZ2luWTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgc3RhcnRTdWJzY3JpYmUob2JzZXJ2YWJsZSQ6IE9ic2VydmFibGU8Ym9vbGVhbj4pOiB2b2lkIHtcclxuICAgIGNvbnN0IGNsaWNrJCA9IHRoaXMubnpDbGlja0hpZGUgPyB0aGlzLm56TWVudURyb3Bkb3duU2VydmljZS5tZW51SXRlbUNsaWNrJC5waXBlKG1hcFRvKGZhbHNlKSkgOiBFTVBUWTtcclxuICAgIGNvbWJpbmVMYXRlc3QoW21lcmdlKG9ic2VydmFibGUkLCBjbGljayQpLCB0aGlzLm56TWVudURyb3Bkb3duU2VydmljZS5tZW51T3BlbiRdKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBtYXAodmFsdWUgPT4gdmFsdWVbMF0gfHwgdmFsdWVbMV0pLFxyXG4gICAgICAgIGRlYm91bmNlVGltZSg1MCksXHJcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcclxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKHZpc2libGUgPT4ge1xyXG4gICAgICAgIGlmICghdGhpcy5uekRpc2FibGVkICYmIHRoaXMubnpWaXNpYmxlICE9PSB2aXNpYmxlKSB7XHJcbiAgICAgICAgICB0aGlzLm56VmlzaWJsZSA9IHZpc2libGU7XHJcbiAgICAgICAgICB0aGlzLm56VmlzaWJsZUNoYW5nZS5lbWl0KHRoaXMubnpWaXNpYmxlKTtcclxuICAgICAgICAgIHRoaXMudHJpZ2dlcldpZHRoID0gdGhpcy5uekRyb3BEb3duRGlyZWN0aXZlLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcclxuICAgICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVEaXNhYmxlZFN0YXRlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpEcm9wRG93bkRpcmVjdGl2ZSkge1xyXG4gICAgICB0aGlzLm56RHJvcERvd25EaXJlY3RpdmUuc2V0RGlzYWJsZWQodGhpcy5uekRpc2FibGVkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJvdGVjdGVkIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIG56TWVudURyb3Bkb3duU2VydmljZTogTnpNZW51RHJvcGRvd25TZXJ2aWNlLFxyXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXHJcbiAgKSB7XHJcbiAgICB3YXJuRGVwcmVjYXRpb24oXHJcbiAgICAgIGAnbnotZHJvcGRvd24nIENvbXBvbmVudCBpcyBnb2luZyB0byBiZSByZW1vdmVkIGluIDkuMC4wLiBQbGVhc2UgdXNlICduei1kcm9wZG93bi1tZW51JyBpbnN0ZWFkLiBSZWFkIGh0dHBzOi8vbmcuYW50LmRlc2lnbi9jb21wb25lbnRzL2Ryb3Bkb3duL2VuYFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnN0YXJ0U3Vic2NyaWJlKFxyXG4gICAgICBtZXJnZShcclxuICAgICAgICB0aGlzLnZpc2libGUkLFxyXG4gICAgICAgIHRoaXMubnpUcmlnZ2VyID09PSAnaG92ZXInID8gdGhpcy5uekRyb3BEb3duRGlyZWN0aXZlLmhvdmVyJCA6IHRoaXMubnpEcm9wRG93bkRpcmVjdGl2ZS4kY2xpY2tcclxuICAgICAgKVxyXG4gICAgKTtcclxuICAgIHRoaXMudXBkYXRlRGlzYWJsZWRTdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMubnpWaXNpYmxlKSB7XHJcbiAgICAgIHRoaXMudmlzaWJsZSQubmV4dCh0aGlzLm56VmlzaWJsZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy5uekRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlRGlzYWJsZWRTdGF0ZSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMubnpQbGFjZW1lbnQpIHtcclxuICAgICAgdGhpcy5kcm9wRG93blBvc2l0aW9uID0gdGhpcy5uelBsYWNlbWVudC5pbmRleE9mKCd0b3AnKSAhPT0gLTEgPyAndG9wJyA6ICdib3R0b20nO1xyXG4gICAgICB0aGlzLnBvc2l0aW9ucyA9IFtQT1NJVElPTl9NQVBbdGhpcy5uelBsYWNlbWVudF0sIC4uLnRoaXMucG9zaXRpb25zXTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19
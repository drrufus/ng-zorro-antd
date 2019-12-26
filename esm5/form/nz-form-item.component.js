/**
 * @fileoverview added by tsickle
 * Generated from: nz-form-item.component.ts
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
import { MediaMatcher } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, Input, NgZone, QueryList, Renderer2, ViewEncapsulation } from '@angular/core';
import { startWith, takeUntil } from 'rxjs/operators';
import { InputBoolean, NzDomEventService, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { NzRowDirective } from 'ng-zorro-antd/grid';
import { NzFormExplainComponent } from './nz-form-explain.component';
/**
 * should add nz-row directive to host, track https://github.com/angular/angular/issues/8785 *
 */
var NzFormItemComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NzFormItemComponent, _super);
    function NzFormItemComponent(elementRef, renderer, nzUpdateHostClassService, mediaMatcher, ngZone, platform, nzDomEventService, cdr) {
        var _this = _super.call(this, elementRef, renderer, nzUpdateHostClassService, mediaMatcher, ngZone, platform, nzDomEventService) || this;
        _this.cdr = cdr;
        _this.nzFlex = false;
        _this.withHelpClass = false;
        _this.tipsMode = false;
        renderer.addClass(elementRef.nativeElement, 'ant-form-item');
        return _this;
    }
    /**
     * @return {?}
     */
    NzFormItemComponent.prototype.updateFlexStyle = /**
     * @return {?}
     */
    function () {
        if (this.nzFlex) {
            this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'flex');
        }
        else {
            this.renderer.removeStyle(this.elementRef.nativeElement, 'display');
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzFormItemComponent.prototype.setWithHelpViaTips = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.tipsMode = true;
        this.withHelpClass = value;
        this.cdr.markForCheck();
    };
    /**
     * @return {?}
     */
    NzFormItemComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.tipsMode) {
            this.listOfNzFormExplainComponent.changes
                .pipe(startWith(true), takeUntil(this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            function () {
                _this.withHelpClass = _this.listOfNzFormExplainComponent && _this.listOfNzFormExplainComponent.length > 0;
                _this.cdr.markForCheck();
            }));
        }
    };
    /**
     * @return {?}
     */
    NzFormItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnInit.call(this);
        this.updateFlexStyle();
    };
    /**
     * @return {?}
     */
    NzFormItemComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzFormItemComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        if (changes.hasOwnProperty('nzFlex')) {
            this.updateFlexStyle();
        }
    };
    NzFormItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-form-item',
                    exportAs: 'nzFormItem',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    providers: [NzUpdateHostClassService],
                    template: "<ng-content></ng-content>",
                    host: {
                        '[class.ant-form-item-with-help]': 'withHelpClass'
                    },
                    styles: ["\n      nz-form-item {\n        display: block;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzFormItemComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: NzUpdateHostClassService },
        { type: MediaMatcher },
        { type: NgZone },
        { type: Platform },
        { type: NzDomEventService },
        { type: ChangeDetectorRef }
    ]; };
    NzFormItemComponent.propDecorators = {
        nzFlex: [{ type: Input }],
        listOfNzFormExplainComponent: [{ type: ContentChildren, args: [NzFormExplainComponent, { descendants: true },] }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzFormItemComponent.prototype, "nzFlex", void 0);
    return NzFormItemComponent;
}(NzRowDirective));
export { NzFormItemComponent };
if (false) {
    /** @type {?} */
    NzFormItemComponent.prototype.nzFlex;
    /** @type {?} */
    NzFormItemComponent.prototype.listOfNzFormExplainComponent;
    /** @type {?} */
    NzFormItemComponent.prototype.withHelpClass;
    /** @type {?} */
    NzFormItemComponent.prototype.tipsMode;
    /**
     * @type {?}
     * @private
     */
    NzFormItemComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZm9ybS1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZm9ybS8iLCJzb3VyY2VzIjpbIm56LWZvcm0taXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFJTixTQUFTLEVBQ1QsU0FBUyxFQUVULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRELE9BQU8sRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMvRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFcEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7QUFHckU7SUFtQnlDLCtDQUFjO0lBc0JyRCw2QkFDRSxVQUFzQixFQUN0QixRQUFtQixFQUNuQix3QkFBa0QsRUFDbEQsWUFBMEIsRUFDMUIsTUFBYyxFQUNkLFFBQWtCLEVBQ2xCLGlCQUFvQyxFQUM1QixHQUFzQjtRQVJoQyxZQVVFLGtCQUFNLFVBQVUsRUFBRSxRQUFRLEVBQUUsd0JBQXdCLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsaUJBQWlCLENBQUMsU0FFekc7UUFKUyxTQUFHLEdBQUgsR0FBRyxDQUFtQjtRQTVCUCxZQUFNLEdBQVksS0FBSyxDQUFDO1FBR2pELG1CQUFhLEdBQUcsS0FBSyxDQUFDO1FB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OlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBNZWRpYU1hdGNoZXIgfSBmcm9tICdAYW5ndWxhci9jZGsvbGF5b3V0JztcclxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIE5nWm9uZSxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBRdWVyeUxpc3QsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgc3RhcnRXaXRoLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIE56RG9tRXZlbnRTZXJ2aWNlLCBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOelJvd0RpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvZ3JpZCc7XHJcblxyXG5pbXBvcnQgeyBOekZvcm1FeHBsYWluQ29tcG9uZW50IH0gZnJvbSAnLi9uei1mb3JtLWV4cGxhaW4uY29tcG9uZW50JztcclxuXHJcbi8qKiBzaG91bGQgYWRkIG56LXJvdyBkaXJlY3RpdmUgdG8gaG9zdCwgdHJhY2sgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvODc4NSAqKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei1mb3JtLWl0ZW0nLFxyXG4gIGV4cG9ydEFzOiAnbnpGb3JtSXRlbScsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcm92aWRlcnM6IFtOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VdLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1mb3JtLWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LWZvcm0taXRlbS13aXRoLWhlbHBdJzogJ3dpdGhIZWxwQ2xhc3MnXHJcbiAgfSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgbnotZm9ybS1pdGVtIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56Rm9ybUl0ZW1Db21wb25lbnQgZXh0ZW5kcyBOelJvd0RpcmVjdGl2ZVxyXG4gIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpGbGV4OiBib29sZWFuID0gZmFsc2U7XHJcbiAgQENvbnRlbnRDaGlsZHJlbihOekZvcm1FeHBsYWluQ29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pXHJcbiAgbGlzdE9mTnpGb3JtRXhwbGFpbkNvbXBvbmVudDogUXVlcnlMaXN0PE56Rm9ybUV4cGxhaW5Db21wb25lbnQ+O1xyXG4gIHdpdGhIZWxwQ2xhc3MgPSBmYWxzZTtcclxuICB0aXBzTW9kZSA9IGZhbHNlO1xyXG5cclxuICB1cGRhdGVGbGV4U3R5bGUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uekZsZXgpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknLCAnZmxleCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldFdpdGhIZWxwVmlhVGlwcyh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy50aXBzTW9kZSA9IHRydWU7XHJcbiAgICB0aGlzLndpdGhIZWxwQ2xhc3MgPSB2YWx1ZTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLFxyXG4gICAgbWVkaWFNYXRjaGVyOiBNZWRpYU1hdGNoZXIsXHJcbiAgICBuZ1pvbmU6IE5nWm9uZSxcclxuICAgIHBsYXRmb3JtOiBQbGF0Zm9ybSxcclxuICAgIG56RG9tRXZlbnRTZXJ2aWNlOiBOekRvbUV2ZW50U2VydmljZSxcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge1xyXG4gICAgc3VwZXIoZWxlbWVudFJlZiwgcmVuZGVyZXIsIG56VXBkYXRlSG9zdENsYXNzU2VydmljZSwgbWVkaWFNYXRjaGVyLCBuZ1pvbmUsIHBsYXRmb3JtLCBuekRvbUV2ZW50U2VydmljZSk7XHJcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtZm9ybS1pdGVtJyk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMudGlwc01vZGUpIHtcclxuICAgICAgdGhpcy5saXN0T2ZOekZvcm1FeHBsYWluQ29tcG9uZW50LmNoYW5nZXNcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgIHN0YXJ0V2l0aCh0cnVlKSxcclxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxyXG4gICAgICAgIClcclxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMud2l0aEhlbHBDbGFzcyA9IHRoaXMubGlzdE9mTnpGb3JtRXhwbGFpbkNvbXBvbmVudCAmJiB0aGlzLmxpc3RPZk56Rm9ybUV4cGxhaW5Db21wb25lbnQubGVuZ3RoID4gMDtcclxuICAgICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xyXG5cclxuICAgIHRoaXMudXBkYXRlRmxleFN0eWxlKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHN1cGVyLm5nT25EZXN0cm95KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBzdXBlci5uZ09uQ2hhbmdlcyhjaGFuZ2VzKTtcclxuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCduekZsZXgnKSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUZsZXhTdHlsZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=
/**
 * @fileoverview added by tsickle
 * Generated from: nz-steps.component.ts
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
import { ChangeDetectionStrategy, Component, ContentChildren, EventEmitter, Input, Output, QueryList, TemplateRef, ViewEncapsulation } from '@angular/core';
import { merge, Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
import { toBoolean } from 'ng-zorro-antd/core';
import { NzStepComponent } from './nz-step.component';
var NzStepsComponent = /** @class */ (function () {
    function NzStepsComponent() {
        this.nzCurrent = 0;
        this.nzDirection = 'horizontal';
        this.nzLabelPlacement = 'horizontal';
        this.nzType = 'default';
        this.nzSize = 'default';
        this.nzStartIndex = 0;
        this.nzStatus = 'process';
        this.nzIndexChange = new EventEmitter();
        this.destroy$ = new Subject();
        this.showProcessDot = false;
    }
    Object.defineProperty(NzStepsComponent.prototype, "nzProgressDot", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this.showProcessDot = true;
                this.customProcessDotTemplate = value;
            }
            else {
                this.showProcessDot = toBoolean(value);
            }
            this.updateChildrenSteps();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    NzStepsComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzStartIndex || changes.nzDirection || changes.nzStatus || changes.nzCurrent) {
            this.updateChildrenSteps();
        }
        if (changes.nzDirection || changes.nzProgressDot || changes.nzLabelPlacement || changes.nzSize) {
            this.setClassMap();
        }
    };
    /**
     * @return {?}
     */
    NzStepsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
        this.updateChildrenSteps();
    };
    /**
     * @return {?}
     */
    NzStepsComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
        if (this.indexChangeSubscription) {
            this.indexChangeSubscription.unsubscribe();
        }
    };
    /**
     * @return {?}
     */
    NzStepsComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.steps) {
            this.steps.changes
                .pipe(startWith(null), takeUntil(this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            function () {
                _this.updateChildrenSteps();
            }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzStepsComponent.prototype.updateChildrenSteps = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.steps) {
            /** @type {?} */
            var length_1 = this.steps.length;
            this.steps.toArray().forEach((/**
             * @param {?} step
             * @param {?} index
             * @return {?}
             */
            function (step, index) {
                Promise.resolve().then((/**
                 * @return {?}
                 */
                function () {
                    step.outStatus = _this.nzStatus;
                    step.showProcessDot = _this.showProcessDot;
                    if (_this.customProcessDotTemplate) {
                        step.customProcessTemplate = _this.customProcessDotTemplate;
                    }
                    step.clickable = _this.nzIndexChange.observers.length > 0;
                    step.direction = _this.nzDirection;
                    step.index = index + _this.nzStartIndex;
                    step.currentIndex = _this.nzCurrent;
                    step.last = length_1 === index + 1;
                    step.markForCheck();
                }));
            }));
            if (this.indexChangeSubscription) {
                this.indexChangeSubscription.unsubscribe();
            }
            this.indexChangeSubscription = merge.apply(void 0, tslib_1.__spread(this.steps.map((/**
             * @param {?} step
             * @return {?}
             */
            function (step) { return step.click$; })))).subscribe((/**
             * @param {?} index
             * @return {?}
             */
            function (index) {
                return _this.nzIndexChange.emit(index);
            }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzStepsComponent.prototype.setClassMap = /**
     * @private
     * @return {?}
     */
    function () {
        var _a;
        this.classMap = (_a = {},
            _a["ant-steps-" + this.nzDirection] = true,
            _a["ant-steps-label-horizontal"] = this.nzDirection === 'horizontal',
            _a["ant-steps-label-vertical"] = (this.showProcessDot || this.nzLabelPlacement === 'vertical') && this.nzDirection === 'horizontal',
            _a["ant-steps-dot"] = this.showProcessDot,
            _a['ant-steps-small'] = this.nzSize === 'small',
            _a['ant-steps-navigation'] = this.nzType === 'navigation',
            _a);
    };
    NzStepsComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    selector: 'nz-steps',
                    exportAs: 'nzSteps',
                    template: "<div class=\"ant-steps\" [ngClass]=\"classMap\">\r\n  <ng-content></ng-content>\r\n</div>"
                }] }
    ];
    NzStepsComponent.propDecorators = {
        steps: [{ type: ContentChildren, args: [NzStepComponent,] }],
        nzCurrent: [{ type: Input }],
        nzDirection: [{ type: Input }],
        nzLabelPlacement: [{ type: Input }],
        nzType: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzStartIndex: [{ type: Input }],
        nzStatus: [{ type: Input }],
        nzProgressDot: [{ type: Input }],
        nzIndexChange: [{ type: Output }]
    };
    return NzStepsComponent;
}());
export { NzStepsComponent };
if (false) {
    /** @type {?} */
    NzStepsComponent.prototype.steps;
    /** @type {?} */
    NzStepsComponent.prototype.nzCurrent;
    /** @type {?} */
    NzStepsComponent.prototype.nzDirection;
    /** @type {?} */
    NzStepsComponent.prototype.nzLabelPlacement;
    /** @type {?} */
    NzStepsComponent.prototype.nzType;
    /** @type {?} */
    NzStepsComponent.prototype.nzSize;
    /** @type {?} */
    NzStepsComponent.prototype.nzStartIndex;
    /** @type {?} */
    NzStepsComponent.prototype.nzStatus;
    /** @type {?} */
    NzStepsComponent.prototype.nzIndexChange;
    /**
     * @type {?}
     * @private
     */
    NzStepsComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzStepsComponent.prototype.indexChangeSubscription;
    /** @type {?} */
    NzStepsComponent.prototype.showProcessDot;
    /** @type {?} */
    NzStepsComponent.prototype.customProcessDotTemplate;
    /** @type {?} */
    NzStepsComponent.prototype.classMap;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3RlcHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9zdGVwcy8iLCJzb3VyY2VzIjpbIm56LXN0ZXBzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsZUFBZSxFQUNmLFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUNOLFNBQVMsRUFFVCxXQUFXLEVBQ1gsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUNwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRELE9BQU8sRUFBRSxTQUFTLEVBQTZCLE1BQU0sb0JBQW9CLENBQUM7QUFFMUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBS3REO0lBQUE7UUFXVyxjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsZ0JBQVcsR0FBb0IsWUFBWSxDQUFDO1FBQzVDLHFCQUFnQixHQUE4QixZQUFZLENBQUM7UUFDM0QsV0FBTSxHQUE2QixTQUFTLENBQUM7UUFDN0MsV0FBTSxHQUFpQixTQUFTLENBQUM7UUFDakMsaUJBQVksR0FBRyxDQUFDLENBQUM7UUFDakIsYUFBUSxHQUFpQixTQUFTLENBQUM7UUFhekIsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBRXRELGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBR3ZDLG1CQUFjLEdBQUcsS0FBSyxDQUFDO0lBNkV6QixDQUFDO0lBN0ZDLHNCQUNJLDJDQUFhOzs7OztRQURqQixVQUNrQixLQUE2RjtZQUM3RyxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO2dCQUMz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QUFLOzhCQUNMLEtBQUs7bUNBQ0wsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7K0JBQ0wsS0FBSzsyQkFDTCxLQUFLO2dDQUVMLEtBQUs7Z0NBV0wsTUFBTTs7SUFrRlQsdUJBQUM7Q0FBQSxBQWhIRCxJQWdIQztTQXhHWSxnQkFBZ0I7OztJQUMzQixpQ0FBb0U7O0lBRXBFLHFDQUF1Qjs7SUFDdkIsdUNBQXFEOztJQUNyRCw0Q0FBb0U7O0lBQ3BFLGtDQUFzRDs7SUFDdEQsa0NBQTBDOztJQUMxQyx3Q0FBMEI7O0lBQzFCLG9DQUE0Qzs7SUFhNUMseUNBQThEOzs7OztJQUU5RCxvQ0FBdUM7Ozs7O0lBQ3ZDLG1EQUE4Qzs7SUFFOUMsMENBQXVCOztJQUN2QixvREFBdUc7O0lBQ3ZHLG9DQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBRdWVyeUxpc3QsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBtZXJnZSwgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHN0YXJ0V2l0aCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgdG9Cb29sZWFuLCBOZ0NsYXNzVHlwZSwgTnpTaXplRFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56U3RlcENvbXBvbmVudCB9IGZyb20gJy4vbnotc3RlcC5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IHR5cGUgTnpEaXJlY3Rpb25UeXBlID0gJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJztcclxuZXhwb3J0IHR5cGUgTnpTdGF0dXNUeXBlID0gJ3dhaXQnIHwgJ3Byb2Nlc3MnIHwgJ2ZpbmlzaCcgfCAnZXJyb3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBzZWxlY3RvcjogJ256LXN0ZXBzJyxcclxuICBleHBvcnRBczogJ256U3RlcHMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1zdGVwcy5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE56U3RlcHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlckNvbnRlbnRJbml0IHtcclxuICBAQ29udGVudENoaWxkcmVuKE56U3RlcENvbXBvbmVudCkgc3RlcHM6IFF1ZXJ5TGlzdDxOelN0ZXBDb21wb25lbnQ+O1xyXG5cclxuICBASW5wdXQoKSBuekN1cnJlbnQgPSAwO1xyXG4gIEBJbnB1dCgpIG56RGlyZWN0aW9uOiBOekRpcmVjdGlvblR5cGUgPSAnaG9yaXpvbnRhbCc7XHJcbiAgQElucHV0KCkgbnpMYWJlbFBsYWNlbWVudDogJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJyA9ICdob3Jpem9udGFsJztcclxuICBASW5wdXQoKSBuelR5cGU6ICdkZWZhdWx0JyB8ICduYXZpZ2F0aW9uJyA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBuelNpemU6IE56U2l6ZURTVHlwZSA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBuelN0YXJ0SW5kZXggPSAwO1xyXG4gIEBJbnB1dCgpIG56U3RhdHVzOiBOelN0YXR1c1R5cGUgPSAncHJvY2Vzcyc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56UHJvZ3Jlc3NEb3QodmFsdWU6IGJvb2xlYW4gfCBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogVGVtcGxhdGVSZWY8dm9pZD47IHN0YXR1czogc3RyaW5nOyBpbmRleDogbnVtYmVyIH0+KSB7XHJcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xyXG4gICAgICB0aGlzLnNob3dQcm9jZXNzRG90ID0gdHJ1ZTtcclxuICAgICAgdGhpcy5jdXN0b21Qcm9jZXNzRG90VGVtcGxhdGUgPSB2YWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2hvd1Byb2Nlc3NEb3QgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy51cGRhdGVDaGlsZHJlblN0ZXBzKCk7XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpJbmRleENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG5cclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBwcml2YXRlIGluZGV4Q2hhbmdlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIHNob3dQcm9jZXNzRG90ID0gZmFsc2U7XHJcbiAgY3VzdG9tUHJvY2Vzc0RvdFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogVGVtcGxhdGVSZWY8dm9pZD47IHN0YXR1czogc3RyaW5nOyBpbmRleDogbnVtYmVyIH0+O1xyXG4gIGNsYXNzTWFwOiBOZ0NsYXNzVHlwZTtcclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMubnpTdGFydEluZGV4IHx8IGNoYW5nZXMubnpEaXJlY3Rpb24gfHwgY2hhbmdlcy5uelN0YXR1cyB8fCBjaGFuZ2VzLm56Q3VycmVudCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuU3RlcHMoKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLm56RGlyZWN0aW9uIHx8IGNoYW5nZXMubnpQcm9ncmVzc0RvdCB8fCBjaGFuZ2VzLm56TGFiZWxQbGFjZW1lbnQgfHwgY2hhbmdlcy5uelNpemUpIHtcclxuICAgICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuU3RlcHMoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgICBpZiAodGhpcy5pbmRleENoYW5nZVN1YnNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLmluZGV4Q2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zdGVwcykge1xyXG4gICAgICB0aGlzLnN0ZXBzLmNoYW5nZXNcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgIHN0YXJ0V2l0aChudWxsKSxcclxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxyXG4gICAgICAgIClcclxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5TdGVwcygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVDaGlsZHJlblN0ZXBzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuc3RlcHMpIHtcclxuICAgICAgY29uc3QgbGVuZ3RoID0gdGhpcy5zdGVwcy5sZW5ndGg7XHJcbiAgICAgIHRoaXMuc3RlcHMudG9BcnJheSgpLmZvckVhY2goKHN0ZXAsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICBzdGVwLm91dFN0YXR1cyA9IHRoaXMubnpTdGF0dXM7XHJcbiAgICAgICAgICBzdGVwLnNob3dQcm9jZXNzRG90ID0gdGhpcy5zaG93UHJvY2Vzc0RvdDtcclxuICAgICAgICAgIGlmICh0aGlzLmN1c3RvbVByb2Nlc3NEb3RUZW1wbGF0ZSkge1xyXG4gICAgICAgICAgICBzdGVwLmN1c3RvbVByb2Nlc3NUZW1wbGF0ZSA9IHRoaXMuY3VzdG9tUHJvY2Vzc0RvdFRlbXBsYXRlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc3RlcC5jbGlja2FibGUgPSB0aGlzLm56SW5kZXhDaGFuZ2Uub2JzZXJ2ZXJzLmxlbmd0aCA+IDA7XHJcbiAgICAgICAgICBzdGVwLmRpcmVjdGlvbiA9IHRoaXMubnpEaXJlY3Rpb247XHJcbiAgICAgICAgICBzdGVwLmluZGV4ID0gaW5kZXggKyB0aGlzLm56U3RhcnRJbmRleDtcclxuICAgICAgICAgIHN0ZXAuY3VycmVudEluZGV4ID0gdGhpcy5uekN1cnJlbnQ7XHJcbiAgICAgICAgICBzdGVwLmxhc3QgPSBsZW5ndGggPT09IGluZGV4ICsgMTtcclxuICAgICAgICAgIHN0ZXAubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAodGhpcy5pbmRleENoYW5nZVN1YnNjcmlwdGlvbikge1xyXG4gICAgICAgIHRoaXMuaW5kZXhDaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmluZGV4Q2hhbmdlU3Vic2NyaXB0aW9uID0gbWVyZ2UoLi4udGhpcy5zdGVwcy5tYXAoc3RlcCA9PiBzdGVwLmNsaWNrJCkpLnN1YnNjcmliZShpbmRleCA9PlxyXG4gICAgICAgIHRoaXMubnpJbmRleENoYW5nZS5lbWl0KGluZGV4KVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRDbGFzc01hcCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xhc3NNYXAgPSB7XHJcbiAgICAgIFtgYW50LXN0ZXBzLSR7dGhpcy5uekRpcmVjdGlvbn1gXTogdHJ1ZSxcclxuICAgICAgW2BhbnQtc3RlcHMtbGFiZWwtaG9yaXpvbnRhbGBdOiB0aGlzLm56RGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcsXHJcbiAgICAgIFtgYW50LXN0ZXBzLWxhYmVsLXZlcnRpY2FsYF06XHJcbiAgICAgICAgKHRoaXMuc2hvd1Byb2Nlc3NEb3QgfHwgdGhpcy5uekxhYmVsUGxhY2VtZW50ID09PSAndmVydGljYWwnKSAmJiB0aGlzLm56RGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcsXHJcbiAgICAgIFtgYW50LXN0ZXBzLWRvdGBdOiB0aGlzLnNob3dQcm9jZXNzRG90LFxyXG4gICAgICBbJ2FudC1zdGVwcy1zbWFsbCddOiB0aGlzLm56U2l6ZSA9PT0gJ3NtYWxsJyxcclxuICAgICAgWydhbnQtc3RlcHMtbmF2aWdhdGlvbiddOiB0aGlzLm56VHlwZSA9PT0gJ25hdmlnYXRpb24nXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = ["*"];
export class NzStepsComponent {
    constructor() {
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
    /**
     * @param {?} value
     * @return {?}
     */
    set nzProgressDot(value) {
        if (value instanceof TemplateRef) {
            this.showProcessDot = true;
            this.customProcessDotTemplate = value;
        }
        else {
            this.showProcessDot = toBoolean(value);
        }
        this.updateChildrenSteps();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzStartIndex || changes.nzDirection || changes.nzStatus || changes.nzCurrent) {
            this.updateChildrenSteps();
        }
        if (changes.nzDirection || changes.nzProgressDot || changes.nzLabelPlacement || changes.nzSize) {
            this.setClassMap();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setClassMap();
        this.updateChildrenSteps();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        if (this.indexChangeSubscription) {
            this.indexChangeSubscription.unsubscribe();
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (this.steps) {
            this.steps.changes
                .pipe(startWith(null), takeUntil(this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            () => {
                this.updateChildrenSteps();
            }));
        }
    }
    /**
     * @private
     * @return {?}
     */
    updateChildrenSteps() {
        if (this.steps) {
            /** @type {?} */
            const length = this.steps.length;
            this.steps.toArray().forEach((/**
             * @param {?} step
             * @param {?} index
             * @return {?}
             */
            (step, index) => {
                Promise.resolve().then((/**
                 * @return {?}
                 */
                () => {
                    step.outStatus = this.nzStatus;
                    step.showProcessDot = this.showProcessDot;
                    if (this.customProcessDotTemplate) {
                        step.customProcessTemplate = this.customProcessDotTemplate;
                    }
                    step.clickable = this.nzIndexChange.observers.length > 0;
                    step.direction = this.nzDirection;
                    step.index = index + this.nzStartIndex;
                    step.currentIndex = this.nzCurrent;
                    step.last = length === index + 1;
                    step.markForCheck();
                }));
            }));
            if (this.indexChangeSubscription) {
                this.indexChangeSubscription.unsubscribe();
            }
            this.indexChangeSubscription = merge(...this.steps.map((/**
             * @param {?} step
             * @return {?}
             */
            step => step.click$))).subscribe((/**
             * @param {?} index
             * @return {?}
             */
            index => this.nzIndexChange.emit(index)));
        }
    }
    /**
     * @private
     * @return {?}
     */
    setClassMap() {
        this.classMap = {
            [`ant-steps-${this.nzDirection}`]: true,
            [`ant-steps-label-horizontal`]: this.nzDirection === 'horizontal',
            [`ant-steps-label-vertical`]: (this.showProcessDot || this.nzLabelPlacement === 'vertical') && this.nzDirection === 'horizontal',
            [`ant-steps-dot`]: this.showProcessDot,
            ['ant-steps-small']: this.nzSize === 'small',
            ['ant-steps-navigation']: this.nzType === 'navigation'
        };
    }
}
NzStepsComponent.ɵfac = function NzStepsComponent_Factory(t) { return new (t || NzStepsComponent)(); };
NzStepsComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzStepsComponent, selectors: [["nz-steps"]], contentQueries: function NzStepsComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzStepComponent, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.steps = _t);
    } }, inputs: { nzCurrent: "nzCurrent", nzDirection: "nzDirection", nzLabelPlacement: "nzLabelPlacement", nzType: "nzType", nzSize: "nzSize", nzStartIndex: "nzStartIndex", nzStatus: "nzStatus", nzProgressDot: "nzProgressDot" }, outputs: { nzIndexChange: "nzIndexChange" }, exportAs: ["nzSteps"], features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[1, "ant-steps", 3, "ngClass"]], template: function NzStepsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngClass", ctx.classMap);
    } }, directives: [ɵngcc1.NgClass], encapsulation: 2, changeDetection: 0 });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzStepsComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                selector: 'nz-steps',
                exportAs: 'nzSteps',
                template: "<div class=\"ant-steps\" [ngClass]=\"classMap\">\r\n  <ng-content></ng-content>\r\n</div>"
            }]
    }], function () { return []; }, { nzCurrent: [{
            type: Input
        }], nzDirection: [{
            type: Input
        }], nzLabelPlacement: [{
            type: Input
        }], nzType: [{
            type: Input
        }], nzSize: [{
            type: Input
        }], nzStartIndex: [{
            type: Input
        }], nzStatus: [{
            type: Input
        }], nzIndexChange: [{
            type: Output
        }], nzProgressDot: [{
            type: Input
        }], steps: [{
            type: ContentChildren,
            args: [NzStepComponent]
        }] }); })();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3RlcHMuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJuZzovbmctem9ycm8tYW50ZC9zdGVwcy9uei1zdGVwcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBQ04sU0FBUyxFQUVULFdBQVcsRUFDWCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEQsT0FBTyxFQUFFLFNBQVMsRUFBNkIsTUFBTSxvQkFBb0IsQ0FBQztBQUUxRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7O0FBYXRELE1BQU0sT0FBTyxnQkFBZ0I7SUFSN0I7UUFXVyxjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsZ0JBQVcsR0FBb0IsWUFBWSxDQUFDO1FBQzVDLHFCQUFnQixHQUE4QixZQUFZLENBQUM7UUFDM0QsV0FBTSxHQUE2QixTQUFTLENBQUM7UUFDN0MsV0FBTSxHQUFpQixTQUFTLENBQUM7UUFDakMsaUJBQVksR0FBRyxDQUFDLENBQUM7UUFDakIsYUFBUSxHQUFpQixTQUFTLENBQUM7UUFhekIsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBRXRELGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBR3ZDLG1CQUFjLEdBQUcsS0FBSyxDQUFDO0lBNkV6QixDQUFDOzs7OztJQTdGQyxJQUNJLGFBQWEsQ0FBQyxLQUE2RjtRQUM3RyxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7WUFDaEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7WUFDM0IsSUFBSSxD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O3FCQUNMLEtBQUs7MkJBQ0wsS0FBSzs4QkFWa0MsUEFXdkMsS0FBSztXQVZQLGlCQVlFLEtBQUs7NEJBV0wsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFNOzs7SUFyQmIsaUNBQW9FOztJQUVwRSxxQ0FBdUI7O0lBQ3ZCLHVDQUFxRDs7SUFDckQsNENBQW9FOztJQUNwRSxrQ0FBc0Q7O0lBQ3RELGtDQUEwQzs7SUFDMUMsd0NBQTBCOztJQUMxQixvQ0FBNEM7O0lBYTVDLHlDQUE4RDs7Ozs7SUFFOUQsb0NBQXVDOzs7OztJQUN2QyxtREFBOEM7O0lBRTlDLDBDQUF1Qjs7SUFDdkIsb0RBQXVHOztJQUN2RyxvQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgbWVyZ2UsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBzdGFydFdpdGgsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IHRvQm9vbGVhbiwgTmdDbGFzc1R5cGUsIE56U2l6ZURTVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOelN0ZXBDb21wb25lbnQgfSBmcm9tICcuL256LXN0ZXAuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCB0eXBlIE56RGlyZWN0aW9uVHlwZSA9ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCc7XHJcbmV4cG9ydCB0eXBlIE56U3RhdHVzVHlwZSA9ICd3YWl0JyB8ICdwcm9jZXNzJyB8ICdmaW5pc2gnIHwgJ2Vycm9yJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgc2VsZWN0b3I6ICduei1zdGVwcycsXHJcbiAgZXhwb3J0QXM6ICduelN0ZXBzJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotc3RlcHMuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelN0ZXBzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCB7XHJcbiAgQENvbnRlbnRDaGlsZHJlbihOelN0ZXBDb21wb25lbnQpIHN0ZXBzOiBRdWVyeUxpc3Q8TnpTdGVwQ29tcG9uZW50PjtcclxuXHJcbiAgQElucHV0KCkgbnpDdXJyZW50ID0gMDtcclxuICBASW5wdXQoKSBuekRpcmVjdGlvbjogTnpEaXJlY3Rpb25UeXBlID0gJ2hvcml6b250YWwnO1xyXG4gIEBJbnB1dCgpIG56TGFiZWxQbGFjZW1lbnQ6ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCcgPSAnaG9yaXpvbnRhbCc7XHJcbiAgQElucHV0KCkgbnpUeXBlOiAnZGVmYXVsdCcgfCAnbmF2aWdhdGlvbicgPSAnZGVmYXVsdCc7XHJcbiAgQElucHV0KCkgbnpTaXplOiBOelNpemVEU1R5cGUgPSAnZGVmYXVsdCc7XHJcbiAgQElucHV0KCkgbnpTdGFydEluZGV4ID0gMDtcclxuICBASW5wdXQoKSBuelN0YXR1czogTnpTdGF0dXNUeXBlID0gJ3Byb2Nlc3MnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelByb2dyZXNzRG90KHZhbHVlOiBib29sZWFuIHwgVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IFRlbXBsYXRlUmVmPHZvaWQ+OyBzdGF0dXM6IHN0cmluZzsgaW5kZXg6IG51bWJlciB9Pikge1xyXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcclxuICAgICAgdGhpcy5zaG93UHJvY2Vzc0RvdCA9IHRydWU7XHJcbiAgICAgIHRoaXMuY3VzdG9tUHJvY2Vzc0RvdFRlbXBsYXRlID0gdmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNob3dQcm9jZXNzRG90ID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICAgIH1cclxuICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5TdGVwcygpO1xyXG4gIH1cclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56SW5kZXhDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuXHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgcHJpdmF0ZSBpbmRleENoYW5nZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICBzaG93UHJvY2Vzc0RvdCA9IGZhbHNlO1xyXG4gIGN1c3RvbVByb2Nlc3NEb3RUZW1wbGF0ZTogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IFRlbXBsYXRlUmVmPHZvaWQ+OyBzdGF0dXM6IHN0cmluZzsgaW5kZXg6IG51bWJlciB9PjtcclxuICBjbGFzc01hcDogTmdDbGFzc1R5cGU7XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLm56U3RhcnRJbmRleCB8fCBjaGFuZ2VzLm56RGlyZWN0aW9uIHx8IGNoYW5nZXMubnpTdGF0dXMgfHwgY2hhbmdlcy5uekN1cnJlbnQpIHtcclxuICAgICAgdGhpcy51cGRhdGVDaGlsZHJlblN0ZXBzKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy5uekRpcmVjdGlvbiB8fCBjaGFuZ2VzLm56UHJvZ3Jlc3NEb3QgfHwgY2hhbmdlcy5uekxhYmVsUGxhY2VtZW50IHx8IGNoYW5nZXMubnpTaXplKSB7XHJcbiAgICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgdGhpcy51cGRhdGVDaGlsZHJlblN0ZXBzKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gICAgaWYgKHRoaXMuaW5kZXhDaGFuZ2VTdWJzY3JpcHRpb24pIHtcclxuICAgICAgdGhpcy5pbmRleENoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuc3RlcHMpIHtcclxuICAgICAgdGhpcy5zdGVwcy5jaGFuZ2VzXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICBzdGFydFdpdGgobnVsbCksXHJcbiAgICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcclxuICAgICAgICApXHJcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuU3RlcHMoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlQ2hpbGRyZW5TdGVwcygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnN0ZXBzKSB7XHJcbiAgICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuc3RlcHMubGVuZ3RoO1xyXG4gICAgICB0aGlzLnN0ZXBzLnRvQXJyYXkoKS5mb3JFYWNoKChzdGVwLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgc3RlcC5vdXRTdGF0dXMgPSB0aGlzLm56U3RhdHVzO1xyXG4gICAgICAgICAgc3RlcC5zaG93UHJvY2Vzc0RvdCA9IHRoaXMuc2hvd1Byb2Nlc3NEb3Q7XHJcbiAgICAgICAgICBpZiAodGhpcy5jdXN0b21Qcm9jZXNzRG90VGVtcGxhdGUpIHtcclxuICAgICAgICAgICAgc3RlcC5jdXN0b21Qcm9jZXNzVGVtcGxhdGUgPSB0aGlzLmN1c3RvbVByb2Nlc3NEb3RUZW1wbGF0ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHN0ZXAuY2xpY2thYmxlID0gdGhpcy5uekluZGV4Q2hhbmdlLm9ic2VydmVycy5sZW5ndGggPiAwO1xyXG4gICAgICAgICAgc3RlcC5kaXJlY3Rpb24gPSB0aGlzLm56RGlyZWN0aW9uO1xyXG4gICAgICAgICAgc3RlcC5pbmRleCA9IGluZGV4ICsgdGhpcy5uelN0YXJ0SW5kZXg7XHJcbiAgICAgICAgICBzdGVwLmN1cnJlbnRJbmRleCA9IHRoaXMubnpDdXJyZW50O1xyXG4gICAgICAgICAgc3RlcC5sYXN0ID0gbGVuZ3RoID09PSBpbmRleCArIDE7XHJcbiAgICAgICAgICBzdGVwLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgaWYgKHRoaXMuaW5kZXhDaGFuZ2VTdWJzY3JpcHRpb24pIHtcclxuICAgICAgICB0aGlzLmluZGV4Q2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5pbmRleENoYW5nZVN1YnNjcmlwdGlvbiA9IG1lcmdlKC4uLnRoaXMuc3RlcHMubWFwKHN0ZXAgPT4gc3RlcC5jbGljayQpKS5zdWJzY3JpYmUoaW5kZXggPT5cclxuICAgICAgICB0aGlzLm56SW5kZXhDaGFuZ2UuZW1pdChpbmRleClcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsYXNzTWFwID0ge1xyXG4gICAgICBbYGFudC1zdGVwcy0ke3RoaXMubnpEaXJlY3Rpb259YF06IHRydWUsXHJcbiAgICAgIFtgYW50LXN0ZXBzLWxhYmVsLWhvcml6b250YWxgXTogdGhpcy5uekRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnLFxyXG4gICAgICBbYGFudC1zdGVwcy1sYWJlbC12ZXJ0aWNhbGBdOlxyXG4gICAgICAgICh0aGlzLnNob3dQcm9jZXNzRG90IHx8IHRoaXMubnpMYWJlbFBsYWNlbWVudCA9PT0gJ3ZlcnRpY2FsJykgJiYgdGhpcy5uekRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnLFxyXG4gICAgICBbYGFudC1zdGVwcy1kb3RgXTogdGhpcy5zaG93UHJvY2Vzc0RvdCxcclxuICAgICAgWydhbnQtc3RlcHMtc21hbGwnXTogdGhpcy5uelNpemUgPT09ICdzbWFsbCcsXHJcbiAgICAgIFsnYW50LXN0ZXBzLW5hdmlnYXRpb24nXTogdGhpcy5uelR5cGUgPT09ICduYXZpZ2F0aW9uJ1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19
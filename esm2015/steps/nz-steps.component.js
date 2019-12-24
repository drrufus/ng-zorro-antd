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
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
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
    ngOnChanges(changes) {
        if (changes.nzStartIndex || changes.nzDirection || changes.nzStatus || changes.nzCurrent) {
            this.updateChildrenSteps();
        }
        if (changes.nzDirection || changes.nzProgressDot || changes.nzLabelPlacement || changes.nzSize) {
            this.setClassMap();
        }
    }
    ngOnInit() {
        this.setClassMap();
        this.updateChildrenSteps();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        if (this.indexChangeSubscription) {
            this.indexChangeSubscription.unsubscribe();
        }
    }
    ngAfterContentInit() {
        if (this.steps) {
            this.steps.changes.pipe(startWith(null), takeUntil(this.destroy$)).subscribe(() => {
                this.updateChildrenSteps();
            });
        }
    }
    updateChildrenSteps() {
        if (this.steps) {
            const length = this.steps.length;
            this.steps.toArray().forEach((step, index) => {
                Promise.resolve().then(() => {
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
                });
            });
            if (this.indexChangeSubscription) {
                this.indexChangeSubscription.unsubscribe();
            }
            this.indexChangeSubscription = merge(...this.steps.map(step => step.click$)).subscribe(index => this.nzIndexChange.emit(index));
        }
    }
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
/** @nocollapse */ NzStepsComponent.ɵfac = function NzStepsComponent_Factory(t) { return new (t || NzStepsComponent)(); };
/** @nocollapse */ NzStepsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzStepsComponent, selectors: [["nz-steps"]], contentQueries: function NzStepsComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, NzStepComponent, false);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.steps = _t);
    } }, inputs: { nzCurrent: "nzCurrent", nzDirection: "nzDirection", nzLabelPlacement: "nzLabelPlacement", nzType: "nzType", nzSize: "nzSize", nzStartIndex: "nzStartIndex", nzStatus: "nzStatus", nzProgressDot: "nzProgressDot" }, outputs: { nzIndexChange: "nzIndexChange" }, exportAs: ["nzSteps"], features: [i0.ɵɵNgOnChangesFeature()], ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[1, "ant-steps", 3, "ngClass"]], template: function NzStepsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵprojection(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.classMap);
    } }, directives: [i1.NgClass], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzStepsComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                selector: 'nz-steps',
                exportAs: 'nzSteps',
                templateUrl: './nz-steps.component.html'
            }]
    }], null, { steps: [{
            type: ContentChildren,
            args: [NzStepComponent]
        }], nzCurrent: [{
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
        }], nzProgressDot: [{
            type: Input
        }], nzIndexChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3RlcHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9zdGVwcy8iLCJzb3VyY2VzIjpbIm56LXN0ZXBzLmNvbXBvbmVudC50cyIsIm56LXN0ZXBzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULGVBQWUsRUFDZixZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFDTixTQUFTLEVBRVQsV0FBVyxFQUNYLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RCxPQUFPLEVBQTZCLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7OztBQWF0RCxNQUFNLE9BQU8sZ0JBQWdCO0lBUjdCO1FBV1csY0FBUyxHQUFHLENBQUMsQ0FBQztRQUNkLGdCQUFXLEdBQW9CLFlBQVksQ0FBQztRQUM1QyxxQkFBZ0IsR0FBOEIsWUFBWSxDQUFDO1FBQzNELFdBQU0sR0FBNkIsU0FBUyxDQUFDO1FBQzdDLFdBQU0sR0FBaUIsU0FBUyxDQUFDO1FBQ2pDLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGFBQVEsR0FBaUIsU0FBUyxDQUFDO1FBYXpCLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUV0RCxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUd2QyxtQkFBYyxHQUFHLEtBQUssQ0FBQztLQXFFeEI7SUFyRkMsSUFDSSxhQUFhLENBQUMsS0FBNkY7UUFDN0csSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO1lBQ2hDLElBQUks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QUFVO2dCQUNwQixRQUFRLEVBQUUsU0FBUztnQkFDbkIsV0FBVyxFQUFFLDJCQUEyQjthQUN6Qzs7a0JBRUUsZUFBZTttQkFBQyxlQUFlOztrQkFFL0IsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsS0FBSzs7a0JBV0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBRdWVyeUxpc3QsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBtZXJnZSwgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHN0YXJ0V2l0aCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgTmdDbGFzc1R5cGUsIE56U2l6ZURTVHlwZSwgdG9Cb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56U3RlcENvbXBvbmVudCB9IGZyb20gJy4vbnotc3RlcC5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IHR5cGUgTnpEaXJlY3Rpb25UeXBlID0gJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJztcclxuZXhwb3J0IHR5cGUgTnpTdGF0dXNUeXBlID0gJ3dhaXQnIHwgJ3Byb2Nlc3MnIHwgJ2ZpbmlzaCcgfCAnZXJyb3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBzZWxlY3RvcjogJ256LXN0ZXBzJyxcclxuICBleHBvcnRBczogJ256U3RlcHMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1zdGVwcy5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE56U3RlcHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlckNvbnRlbnRJbml0IHtcclxuICBAQ29udGVudENoaWxkcmVuKE56U3RlcENvbXBvbmVudCkgc3RlcHM6IFF1ZXJ5TGlzdDxOelN0ZXBDb21wb25lbnQ+O1xyXG5cclxuICBASW5wdXQoKSBuekN1cnJlbnQgPSAwO1xyXG4gIEBJbnB1dCgpIG56RGlyZWN0aW9uOiBOekRpcmVjdGlvblR5cGUgPSAnaG9yaXpvbnRhbCc7XHJcbiAgQElucHV0KCkgbnpMYWJlbFBsYWNlbWVudDogJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJyA9ICdob3Jpem9udGFsJztcclxuICBASW5wdXQoKSBuelR5cGU6ICdkZWZhdWx0JyB8ICduYXZpZ2F0aW9uJyA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBuelNpemU6IE56U2l6ZURTVHlwZSA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBuelN0YXJ0SW5kZXggPSAwO1xyXG4gIEBJbnB1dCgpIG56U3RhdHVzOiBOelN0YXR1c1R5cGUgPSAncHJvY2Vzcyc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56UHJvZ3Jlc3NEb3QodmFsdWU6IGJvb2xlYW4gfCBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogVGVtcGxhdGVSZWY8dm9pZD47IHN0YXR1czogc3RyaW5nOyBpbmRleDogbnVtYmVyIH0+KSB7XHJcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xyXG4gICAgICB0aGlzLnNob3dQcm9jZXNzRG90ID0gdHJ1ZTtcclxuICAgICAgdGhpcy5jdXN0b21Qcm9jZXNzRG90VGVtcGxhdGUgPSB2YWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2hvd1Byb2Nlc3NEb3QgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy51cGRhdGVDaGlsZHJlblN0ZXBzKCk7XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpJbmRleENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG5cclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBwcml2YXRlIGluZGV4Q2hhbmdlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIHNob3dQcm9jZXNzRG90ID0gZmFsc2U7XHJcbiAgY3VzdG9tUHJvY2Vzc0RvdFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogVGVtcGxhdGVSZWY8dm9pZD47IHN0YXR1czogc3RyaW5nOyBpbmRleDogbnVtYmVyIH0+O1xyXG4gIGNsYXNzTWFwOiBOZ0NsYXNzVHlwZTtcclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMubnpTdGFydEluZGV4IHx8IGNoYW5nZXMubnpEaXJlY3Rpb24gfHwgY2hhbmdlcy5uelN0YXR1cyB8fCBjaGFuZ2VzLm56Q3VycmVudCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuU3RlcHMoKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLm56RGlyZWN0aW9uIHx8IGNoYW5nZXMubnpQcm9ncmVzc0RvdCB8fCBjaGFuZ2VzLm56TGFiZWxQbGFjZW1lbnQgfHwgY2hhbmdlcy5uelNpemUpIHtcclxuICAgICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuU3RlcHMoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgICBpZiAodGhpcy5pbmRleENoYW5nZVN1YnNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLmluZGV4Q2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zdGVwcykge1xyXG4gICAgICB0aGlzLnN0ZXBzLmNoYW5nZXMucGlwZShzdGFydFdpdGgobnVsbCksIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuU3RlcHMoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZUNoaWxkcmVuU3RlcHMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zdGVwcykge1xyXG4gICAgICBjb25zdCBsZW5ndGggPSB0aGlzLnN0ZXBzLmxlbmd0aDtcclxuICAgICAgdGhpcy5zdGVwcy50b0FycmF5KCkuZm9yRWFjaCgoc3RlcCwgaW5kZXgpID0+IHtcclxuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHN0ZXAub3V0U3RhdHVzID0gdGhpcy5uelN0YXR1cztcclxuICAgICAgICAgIHN0ZXAuc2hvd1Byb2Nlc3NEb3QgPSB0aGlzLnNob3dQcm9jZXNzRG90O1xyXG4gICAgICAgICAgaWYgKHRoaXMuY3VzdG9tUHJvY2Vzc0RvdFRlbXBsYXRlKSB7XHJcbiAgICAgICAgICAgIHN0ZXAuY3VzdG9tUHJvY2Vzc1RlbXBsYXRlID0gdGhpcy5jdXN0b21Qcm9jZXNzRG90VGVtcGxhdGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzdGVwLmNsaWNrYWJsZSA9IHRoaXMubnpJbmRleENoYW5nZS5vYnNlcnZlcnMubGVuZ3RoID4gMDtcclxuICAgICAgICAgIHN0ZXAuZGlyZWN0aW9uID0gdGhpcy5uekRpcmVjdGlvbjtcclxuICAgICAgICAgIHN0ZXAuaW5kZXggPSBpbmRleCArIHRoaXMubnpTdGFydEluZGV4O1xyXG4gICAgICAgICAgc3RlcC5jdXJyZW50SW5kZXggPSB0aGlzLm56Q3VycmVudDtcclxuICAgICAgICAgIHN0ZXAubGFzdCA9IGxlbmd0aCA9PT0gaW5kZXggKyAxO1xyXG4gICAgICAgICAgc3RlcC5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIGlmICh0aGlzLmluZGV4Q2hhbmdlU3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5pbmRleENoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuaW5kZXhDaGFuZ2VTdWJzY3JpcHRpb24gPSBtZXJnZSguLi50aGlzLnN0ZXBzLm1hcChzdGVwID0+IHN0ZXAuY2xpY2skKSkuc3Vic2NyaWJlKGluZGV4ID0+IHRoaXMubnpJbmRleENoYW5nZS5lbWl0KGluZGV4KSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jbGFzc01hcCA9IHtcclxuICAgICAgW2BhbnQtc3RlcHMtJHt0aGlzLm56RGlyZWN0aW9ufWBdOiB0cnVlLFxyXG4gICAgICBbYGFudC1zdGVwcy1sYWJlbC1ob3Jpem9udGFsYF06IHRoaXMubnpEaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyxcclxuICAgICAgW2BhbnQtc3RlcHMtbGFiZWwtdmVydGljYWxgXTogKHRoaXMuc2hvd1Byb2Nlc3NEb3QgfHwgdGhpcy5uekxhYmVsUGxhY2VtZW50ID09PSAndmVydGljYWwnKSAmJiB0aGlzLm56RGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcsXHJcbiAgICAgIFtgYW50LXN0ZXBzLWRvdGBdOiB0aGlzLnNob3dQcm9jZXNzRG90LFxyXG4gICAgICBbJ2FudC1zdGVwcy1zbWFsbCddOiB0aGlzLm56U2l6ZSA9PT0gJ3NtYWxsJyxcclxuICAgICAgWydhbnQtc3RlcHMtbmF2aWdhdGlvbiddOiB0aGlzLm56VHlwZSA9PT0gJ25hdmlnYXRpb24nXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiYW50LXN0ZXBzXCIgW25nQ2xhc3NdPVwiY2xhc3NNYXBcIj5cclxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvZGl2PlxyXG4iXX0=
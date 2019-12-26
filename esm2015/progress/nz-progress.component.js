/**
 * @fileoverview added by tsickle
 * Generated from: nz-progress.component.ts
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
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { isNotNil, InputNumber, NzConfigService, WithConfig } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { handleCircleGradient, handleLinearGradient } from './nz-progress-utils';
/** @type {?} */
let gradientIdSeed = 0;
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'progress';
/** @type {?} */
const statusIconNameMap = new Map([['success', 'check'], ['exception', 'close']]);
/** @type {?} */
const statusColorMap = new Map([['normal', '#108ee9'], ['exception', '#ff5500'], ['success', '#87d068']]);
/** @type {?} */
const defaultFormatter = (/**
 * @param {?} p
 * @return {?}
 */
(p) => `${p}%`);
const ɵ0 = defaultFormatter;
export class NzProgressComponent {
    /**
     * @param {?} nzConfigService
     */
    constructor(nzConfigService) {
        this.nzConfigService = nzConfigService;
        this.nzWidth = 132;
        this.nzPercent = 0;
        this.nzType = 'line';
        /**
         * Gradient style when `nzType` is `line`.
         */
        this.lineGradient = null;
        /**
         * If user uses gradient color.
         */
        this.isGradient = false;
        /**
         * Each progress whose `nzType` is circle or dashboard should have unique id to
         * define `<linearGradient>`.
         */
        this.gradientId = gradientIdSeed++;
        /**
         * Paths to rendered in the template.
         */
        this.progressCirclePath = [];
        this.trackByFn = (/**
         * @param {?} index
         * @return {?}
         */
        (index) => `${index}`);
        this.cachedStatus = 'normal';
        this.inferredStatus = 'normal';
        this.destroy$ = new Subject();
    }
    /**
     * @return {?}
     */
    get formatter() {
        return this.nzFormat || defaultFormatter;
    }
    /**
     * @return {?}
     */
    get status() {
        return this.nzStatus || this.inferredStatus;
    }
    /**
     * @return {?}
     */
    get strokeWidth() {
        return this.nzStrokeWidth || (this.nzType === 'line' && this.nzSize !== 'small' ? 8 : 6);
    }
    /**
     * @return {?}
     */
    get isCircleStyle() {
        return this.nzType === 'circle' || this.nzType === 'dashboard';
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzGapPosition, nzStrokeLinecap, nzStrokeColor, nzGapDegree, nzType, nzStatus, nzPercent, nzSuccessPercent } = changes;
        if (nzStatus) {
            this.cachedStatus = this.nzStatus || this.cachedStatus;
        }
        if (nzPercent || nzSuccessPercent) {
            /** @type {?} */
            const fillAll = parseInt(this.nzPercent.toString(), 10) >= 100;
            if (fillAll) {
                if ((isNotNil(this.nzSuccessPercent) && (/** @type {?} */ (this.nzSuccessPercent)) >= 100) || this.nzSuccessPercent === undefined) {
                    this.inferredStatus = 'success';
                }
            }
            else {
                this.inferredStatus = this.cachedStatus;
            }
        }
        if (nzStatus || nzPercent || nzSuccessPercent) {
            this.updateIcon();
        }
        if (nzStrokeColor) {
            this.setStrokeColor();
        }
        if (nzGapPosition || nzStrokeLinecap || nzGapDegree || nzType || nzPercent || nzStrokeColor) {
            this.getCirclePaths();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.updateIcon();
            this.setStrokeColor();
            this.getCirclePaths();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @private
     * @return {?}
     */
    updateIcon() {
        /** @type {?} */
        const ret = statusIconNameMap.get(this.status);
        this.icon = ret ? ret + (this.isCircleStyle ? '-o' : '-circle-fill') : '';
    }
    /**
     * Calculate paths when the type is circle or dashboard.
     * @private
     * @return {?}
     */
    getCirclePaths() {
        if (!this.isCircleStyle) {
            return;
        }
        /** @type {?} */
        const values = isNotNil(this.nzSuccessPercent) ? [(/** @type {?} */ (this.nzSuccessPercent)), this.nzPercent] : [this.nzPercent];
        // Calculate shared styles.
        /** @type {?} */
        const radius = 50 - this.strokeWidth / 2;
        /** @type {?} */
        const gapPosition = this.nzGapPosition || (this.nzType === 'circle' ? 'top' : 'bottom');
        /** @type {?} */
        const len = Math.PI * 2 * radius;
        /** @type {?} */
        const gapDegree = this.nzGapDegree || (this.nzType === 'circle' ? 0 : 75);
        /** @type {?} */
        let beginPositionX = 0;
        /** @type {?} */
        let beginPositionY = -radius;
        /** @type {?} */
        let endPositionX = 0;
        /** @type {?} */
        let endPositionY = radius * -2;
        switch (gapPosition) {
            case 'left':
                beginPositionX = -radius;
                beginPositionY = 0;
                endPositionX = radius * 2;
                endPositionY = 0;
                break;
            case 'right':
                beginPositionX = radius;
                beginPositionY = 0;
                endPositionX = radius * -2;
                endPositionY = 0;
                break;
            case 'bottom':
                beginPositionY = radius;
                endPositionY = radius * 2;
                break;
            default:
        }
        this.pathString = `M 50,50 m ${beginPositionX},${beginPositionY}
       a ${radius},${radius} 0 1 1 ${endPositionX},${-endPositionY}
       a ${radius},${radius} 0 1 1 ${-endPositionX},${endPositionY}`;
        this.trailPathStyle = {
            strokeDasharray: `${len - gapDegree}px ${len}px`,
            strokeDashoffset: `-${gapDegree / 2}px`,
            transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s'
        };
        // Calculate styles for each path.
        this.progressCirclePath = values
            .map((/**
         * @param {?} value
         * @param {?} index
         * @return {?}
         */
        (value, index) => {
            /** @type {?} */
            const isSuccessPercent = values.length === 2 && index === 0;
            return {
                stroke: this.isGradient && !isSuccessPercent ? `url(#gradient-${this.gradientId})` : null,
                strokePathStyle: {
                    stroke: !this.isGradient
                        ? isSuccessPercent
                            ? statusColorMap.get('success')
                            : ((/** @type {?} */ (this.nzStrokeColor)))
                        : null,
                    transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s',
                    strokeDasharray: `${((value || 0) / 100) * (len - gapDegree)}px ${len}px`,
                    strokeDashoffset: `-${gapDegree / 2}px`
                }
            };
        }))
            .reverse();
    }
    /**
     * @private
     * @return {?}
     */
    setStrokeColor() {
        /** @type {?} */
        const color = this.nzStrokeColor;
        /** @type {?} */
        const isGradient = (this.isGradient = !!color && typeof color !== 'string');
        if (isGradient && !this.isCircleStyle) {
            this.lineGradient = handleLinearGradient((/** @type {?} */ (color)));
        }
        else if (isGradient && this.isCircleStyle) {
            this.circleGradient = handleCircleGradient((/** @type {?} */ (this.nzStrokeColor)));
        }
        else {
            this.lineGradient = null;
            this.circleGradient = [];
        }
    }
}
NzProgressComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-progress',
                exportAs: 'nzProgress',
                preserveWhitespaces: false,
                template: "<ng-template #progressInfoTemplate>\r\n  <span class=\"ant-progress-text\"\r\n        *ngIf=\"nzShowInfo\">\r\n    <ng-container *ngIf=\"status === 'exception' || (status === 'success' && !nzFormat); else formatTemplate\">\r\n      <i nz-icon\r\n         [nzType]=\"icon\"></i>\r\n    </ng-container>\r\n    <ng-template #formatTemplate>\r\n      {{ formatter(nzPercent) }}\r\n    </ng-template>\r\n  </span>\r\n</ng-template>\r\n\r\n<div [ngClass]=\"'ant-progress ant-progress-status-' + status\"\r\n     [class.ant-progress-line]=\"nzType == 'line'\"\r\n     [class.ant-progress-small]=\"nzSize == 'small'\"\r\n     [class.ant-progress-show-info]=\"nzShowInfo\"\r\n     [class.ant-progress-circle]=\"isCircleStyle\">\r\n  <!-- line progress -->\r\n  <div *ngIf=\"nzType === 'line'\">\r\n    <div class=\"ant-progress-outer\">\r\n      <div class=\"ant-progress-inner\">\r\n        <div class=\"ant-progress-bg\"\r\n             [style.width.%]=\"nzPercent\"\r\n             [style.border-radius]=\"nzStrokeLinecap === 'round' ? '100px' : '0'\"\r\n             [style.background]=\"!isGradient ? nzStrokeColor : null\"\r\n             [style.background-image]=\"isGradient ? lineGradient : null\"\r\n             [style.height.px]=\"strokeWidth\"></div>\r\n        <div *ngIf=\"nzSuccessPercent || nzSuccessPercent === 0\"\r\n             class=\"ant-progress-success-bg\"\r\n             [style.width.%]=\"nzSuccessPercent\"\r\n             [style.border-radius]=\"nzStrokeLinecap === 'round' ? '100px' : '0'\"\r\n             [style.height.px]=\"strokeWidth\"></div>\r\n      </div>\r\n    </div>\r\n    <ng-template [ngTemplateOutlet]=\"progressInfoTemplate\"></ng-template>\r\n  </div>\r\n\r\n  <!-- circle / dashboard progress -->\r\n  <div [style.width.px]=\"this.nzWidth\"\r\n       [style.height.px]=\"this.nzWidth\"\r\n       [style.fontSize.px]=\"this.nzWidth * 0.15 + 6\"\r\n       class=\"ant-progress-inner\"\r\n       [class.ant-progress-circle-gradient]=\"isGradient\"\r\n       *ngIf=\"isCircleStyle\">\r\n    <svg class=\"ant-progress-circle \"\r\n         viewBox=\"0 0 100 100\">\r\n      <defs *ngIf=\"isGradient\">\r\n        <linearGradient [id]=\"'gradient-' + gradientId\"\r\n                        x1=\"100%\"\r\n                        y1=\"0%\"\r\n                        x2=\"0%\"\r\n                        y2=\"0%\">\r\n          <stop *ngFor=\"let i of circleGradient;\"\r\n                [attr.offset]=\"i.offset\"\r\n                [attr.stop-color]=\"i.color\"></stop>\r\n        </linearGradient>\r\n      </defs>\r\n      <path class=\"ant-progress-circle-trail\"\r\n            stroke=\"#f3f3f3\"\r\n            fill-opacity=\"0\"\r\n            [attr.stroke-width]=\"strokeWidth\"\r\n            [attr.d]=\"pathString\"\r\n            [ngStyle]=\"trailPathStyle\"></path>\r\n      <path *ngFor=\"let p of progressCirclePath; trackBy: trackByFn\"\r\n            class=\"ant-progress-circle-path\"\r\n            fill-opacity=\"0\"\r\n            [attr.d]=\"pathString\"\r\n            [attr.stroke-linecap]=\"nzStrokeLinecap\"\r\n            [attr.stroke]=\"p.stroke\"\r\n            [attr.stroke-width]=\"nzPercent ? strokeWidth : 0\"\r\n            [ngStyle]=\"p.strokePathStyle\">\r\n      </path>\r\n    </svg>\r\n    <ng-template [ngTemplateOutlet]=\"progressInfoTemplate\"></ng-template>\r\n  </div>\r\n</div>\r\n"
            }] }
];
/** @nocollapse */
NzProgressComponent.ctorParameters = () => [
    { type: NzConfigService }
];
NzProgressComponent.propDecorators = {
    nzShowInfo: [{ type: Input }],
    nzWidth: [{ type: Input }],
    nzStrokeColor: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzFormat: [{ type: Input }],
    nzSuccessPercent: [{ type: Input }],
    nzPercent: [{ type: Input }],
    nzStrokeWidth: [{ type: Input }],
    nzGapDegree: [{ type: Input }],
    nzStatus: [{ type: Input }],
    nzType: [{ type: Input }],
    nzGapPosition: [{ type: Input }],
    nzStrokeLinecap: [{ type: Input }]
};
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, true),
    tslib_1.__metadata("design:type", Boolean)
], NzProgressComponent.prototype, "nzShowInfo", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME),
    tslib_1.__metadata("design:type", Object)
], NzProgressComponent.prototype, "nzStrokeColor", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, 'default'),
    tslib_1.__metadata("design:type", String)
], NzProgressComponent.prototype, "nzSize", void 0);
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Number)
], NzProgressComponent.prototype, "nzSuccessPercent", void 0);
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Number)
], NzProgressComponent.prototype, "nzPercent", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME), InputNumber(),
    tslib_1.__metadata("design:type", Number)
], NzProgressComponent.prototype, "nzStrokeWidth", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME), InputNumber(),
    tslib_1.__metadata("design:type", Number)
], NzProgressComponent.prototype, "nzGapDegree", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, 'top'),
    tslib_1.__metadata("design:type", String)
], NzProgressComponent.prototype, "nzGapPosition", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, 'round'),
    tslib_1.__metadata("design:type", String)
], NzProgressComponent.prototype, "nzStrokeLinecap", void 0);
if (false) {
    /** @type {?} */
    NzProgressComponent.prototype.nzShowInfo;
    /** @type {?} */
    NzProgressComponent.prototype.nzWidth;
    /** @type {?} */
    NzProgressComponent.prototype.nzStrokeColor;
    /** @type {?} */
    NzProgressComponent.prototype.nzSize;
    /** @type {?} */
    NzProgressComponent.prototype.nzFormat;
    /** @type {?} */
    NzProgressComponent.prototype.nzSuccessPercent;
    /** @type {?} */
    NzProgressComponent.prototype.nzPercent;
    /** @type {?} */
    NzProgressComponent.prototype.nzStrokeWidth;
    /** @type {?} */
    NzProgressComponent.prototype.nzGapDegree;
    /** @type {?} */
    NzProgressComponent.prototype.nzStatus;
    /** @type {?} */
    NzProgressComponent.prototype.nzType;
    /** @type {?} */
    NzProgressComponent.prototype.nzGapPosition;
    /** @type {?} */
    NzProgressComponent.prototype.nzStrokeLinecap;
    /**
     * Gradient style when `nzType` is `line`.
     * @type {?}
     */
    NzProgressComponent.prototype.lineGradient;
    /**
     * If user uses gradient color.
     * @type {?}
     */
    NzProgressComponent.prototype.isGradient;
    /**
     * Each progress whose `nzType` is circle or dashboard should have unique id to
     * define `<linearGradient>`.
     * @type {?}
     */
    NzProgressComponent.prototype.gradientId;
    /**
     * Paths to rendered in the template.
     * @type {?}
     */
    NzProgressComponent.prototype.progressCirclePath;
    /** @type {?} */
    NzProgressComponent.prototype.circleGradient;
    /** @type {?} */
    NzProgressComponent.prototype.trailPathStyle;
    /** @type {?} */
    NzProgressComponent.prototype.pathString;
    /** @type {?} */
    NzProgressComponent.prototype.icon;
    /** @type {?} */
    NzProgressComponent.prototype.trackByFn;
    /**
     * @type {?}
     * @private
     */
    NzProgressComponent.prototype.cachedStatus;
    /**
     * @type {?}
     * @private
     */
    NzProgressComponent.prototype.inferredStatus;
    /**
     * @type {?}
     * @private
     */
    NzProgressComponent.prototype.destroy$;
    /** @type {?} */
    NzProgressComponent.prototype.nzConfigService;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcHJvZ3Jlc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9wcm9ncmVzcy8iLCJzb3VyY2VzIjpbIm56LXByb2dyZXNzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsS0FBSyxFQUtMLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBb0IsZUFBZSxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTFHLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztJQWE3RSxjQUFjLEdBQUcsQ0FBQzs7TUFFaEIsd0JBQXdCLEdBQUcsVUFBVTs7TUFDckMsaUJBQWlCLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDOztNQUMzRSxjQUFjLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDOztNQUNuRyxnQkFBZ0I7Ozs7QUFBd0IsQ0FBQyxDQUFTLEVBQVUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUE7O0FBVTVFLE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUE0RDlCLFlBQW1CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQTFEMUMsWUFBTyxHQUFHLEdB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Q3RCO0lBQXBELFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFLFdBQVcsRUFBRTs7d0RBQXFCO0FBRzVCO0lBQTVDLFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxLQUFLLENBQUM7OzBEQUEwQztBQUN2QztJQUE5QyxVQUFVLENBQUMsd0JBQXdCLEVBQUUsT0FBTyxDQUFDOzs0REFBOEM7OztJQVpyRyx5Q0FBeUU7O0lBQ3pFLHNDQUF1Qjs7SUFDdkIsNENBQXdGOztJQUN4RixxQ0FBc0Y7O0lBQ3RGLHVDQUF3Qzs7SUFDeEMsK0NBQWtEOztJQUNsRCx3Q0FBOEM7O0lBQzlDLDRDQUFvRjs7SUFDcEYsMENBQWtGOztJQUNsRix1Q0FBd0M7O0lBQ3hDLHFDQUE2Qzs7SUFDN0MsNENBQStGOztJQUMvRiw4Q0FBcUc7Ozs7O0lBR3JHLDJDQUFtQzs7Ozs7SUFHbkMseUNBQW1COzs7Ozs7SUFNbkIseUNBQThCOzs7OztJQUc5QixpREFBZ0Q7O0lBRWhELDZDQUF5RDs7SUFFekQsNkNBQWlDOztJQUVqQyx5Q0FBbUI7O0lBRW5CLG1DQUFhOztJQUViLHdDQUEwQzs7Ozs7SUFrQjFDLDJDQUFzRDs7Ozs7SUFDdEQsNkNBQXdEOzs7OztJQUN4RCx1Q0FBdUM7O0lBRTNCLDhDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgaXNOb3ROaWwsIElucHV0TnVtYmVyLCBOZ1N0eWxlSW50ZXJmYWNlLCBOekNvbmZpZ1NlcnZpY2UsIFdpdGhDb25maWcgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IGhhbmRsZUNpcmNsZUdyYWRpZW50LCBoYW5kbGVMaW5lYXJHcmFkaWVudCB9IGZyb20gJy4vbnotcHJvZ3Jlc3MtdXRpbHMnO1xyXG5pbXBvcnQge1xyXG4gIE56UHJvZ3Jlc3NDaXJjbGVQYXRoLFxyXG4gIE56UHJvZ3Jlc3NDb2xvckdyYWRpZW50LFxyXG4gIE56UHJvZ3Jlc3NGb3JtYXR0ZXIsXHJcbiAgTnpQcm9ncmVzc0dhcFBvc2l0aW9uVHlwZSxcclxuICBOelByb2dyZXNzR3JhZGllbnRQcm9ncmVzcyxcclxuICBOelByb2dyZXNzU3RhdHVzVHlwZSxcclxuICBOelByb2dyZXNzU3Ryb2tlQ29sb3JUeXBlLFxyXG4gIE56UHJvZ3Jlc3NTdHJva2VMaW5lY2FwVHlwZSxcclxuICBOelByb2dyZXNzVHlwZVR5cGVcclxufSBmcm9tICcuL256LXByb2dyZXNzLmRlZmluaXRpb25zJztcclxuXHJcbmxldCBncmFkaWVudElkU2VlZCA9IDA7XHJcblxyXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAncHJvZ3Jlc3MnO1xyXG5jb25zdCBzdGF0dXNJY29uTmFtZU1hcCA9IG5ldyBNYXAoW1snc3VjY2VzcycsICdjaGVjayddLCBbJ2V4Y2VwdGlvbicsICdjbG9zZSddXSk7XHJcbmNvbnN0IHN0YXR1c0NvbG9yTWFwID0gbmV3IE1hcChbWydub3JtYWwnLCAnIzEwOGVlOSddLCBbJ2V4Y2VwdGlvbicsICcjZmY1NTAwJ10sIFsnc3VjY2VzcycsICcjODdkMDY4J11dKTtcclxuY29uc3QgZGVmYXVsdEZvcm1hdHRlcjogTnpQcm9ncmVzc0Zvcm1hdHRlciA9IChwOiBudW1iZXIpOiBzdHJpbmcgPT4gYCR7cH0lYDtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc2VsZWN0b3I6ICduei1wcm9ncmVzcycsXHJcbiAgZXhwb3J0QXM6ICduelByb2dyZXNzJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotcHJvZ3Jlc3MuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelByb2dyZXNzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCB0cnVlKSBuelNob3dJbmZvOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIG56V2lkdGggPSAxMzI7XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKSBuelN0cm9rZUNvbG9yOiBOelByb2dyZXNzU3Ryb2tlQ29sb3JUeXBlO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgJ2RlZmF1bHQnKSBuelNpemU6ICdkZWZhdWx0JyB8ICdzbWFsbCc7XHJcbiAgQElucHV0KCkgbnpGb3JtYXQ/OiBOelByb2dyZXNzRm9ybWF0dGVyO1xyXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG56U3VjY2Vzc1BlcmNlbnQ/OiBudW1iZXI7XHJcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbnpQZXJjZW50OiBudW1iZXIgPSAwO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkgQElucHV0TnVtYmVyKCkgbnpTdHJva2VXaWR0aDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkgQElucHV0TnVtYmVyKCkgbnpHYXBEZWdyZWU6IG51bWJlcjtcclxuICBASW5wdXQoKSBuelN0YXR1czogTnpQcm9ncmVzc1N0YXR1c1R5cGU7XHJcbiAgQElucHV0KCkgbnpUeXBlOiBOelByb2dyZXNzVHlwZVR5cGUgPSAnbGluZSc7XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCAndG9wJykgbnpHYXBQb3NpdGlvbjogTnpQcm9ncmVzc0dhcFBvc2l0aW9uVHlwZTtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsICdyb3VuZCcpIG56U3Ryb2tlTGluZWNhcDogTnpQcm9ncmVzc1N0cm9rZUxpbmVjYXBUeXBlO1xyXG5cclxuICAvKiogR3JhZGllbnQgc3R5bGUgd2hlbiBgbnpUeXBlYCBpcyBgbGluZWAuICovXHJcbiAgbGluZUdyYWRpZW50OiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgLyoqIElmIHVzZXIgdXNlcyBncmFkaWVudCBjb2xvci4gKi9cclxuICBpc0dyYWRpZW50ID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEVhY2ggcHJvZ3Jlc3Mgd2hvc2UgYG56VHlwZWAgaXMgY2lyY2xlIG9yIGRhc2hib2FyZCBzaG91bGQgaGF2ZSB1bmlxdWUgaWQgdG9cclxuICAgKiBkZWZpbmUgYDxsaW5lYXJHcmFkaWVudD5gLlxyXG4gICAqL1xyXG4gIGdyYWRpZW50SWQgPSBncmFkaWVudElkU2VlZCsrO1xyXG5cclxuICAvKiogUGF0aHMgdG8gcmVuZGVyZWQgaW4gdGhlIHRlbXBsYXRlLiAqL1xyXG4gIHByb2dyZXNzQ2lyY2xlUGF0aDogTnpQcm9ncmVzc0NpcmNsZVBhdGhbXSA9IFtdO1xyXG5cclxuICBjaXJjbGVHcmFkaWVudDogQXJyYXk8eyBvZmZzZXQ6IHN0cmluZzsgY29sb3I6IHN0cmluZyB9PjtcclxuXHJcbiAgdHJhaWxQYXRoU3R5bGU6IE5nU3R5bGVJbnRlcmZhY2U7XHJcblxyXG4gIHBhdGhTdHJpbmc6IHN0cmluZztcclxuXHJcbiAgaWNvbjogc3RyaW5nO1xyXG5cclxuICB0cmFja0J5Rm4gPSAoaW5kZXg6IG51bWJlcikgPT4gYCR7aW5kZXh9YDtcclxuXHJcbiAgZ2V0IGZvcm1hdHRlcigpOiBOelByb2dyZXNzRm9ybWF0dGVyIHtcclxuICAgIHJldHVybiB0aGlzLm56Rm9ybWF0IHx8IGRlZmF1bHRGb3JtYXR0ZXI7XHJcbiAgfVxyXG5cclxuICBnZXQgc3RhdHVzKCk6IE56UHJvZ3Jlc3NTdGF0dXNUeXBlIHtcclxuICAgIHJldHVybiB0aGlzLm56U3RhdHVzIHx8IHRoaXMuaW5mZXJyZWRTdGF0dXM7XHJcbiAgfVxyXG5cclxuICBnZXQgc3Ryb2tlV2lkdGgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLm56U3Ryb2tlV2lkdGggfHwgKHRoaXMubnpUeXBlID09PSAnbGluZScgJiYgdGhpcy5uelNpemUgIT09ICdzbWFsbCcgPyA4IDogNik7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNDaXJjbGVTdHlsZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm56VHlwZSA9PT0gJ2NpcmNsZScgfHwgdGhpcy5uelR5cGUgPT09ICdkYXNoYm9hcmQnO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYWNoZWRTdGF0dXM6IE56UHJvZ3Jlc3NTdGF0dXNUeXBlID0gJ25vcm1hbCc7XHJcbiAgcHJpdmF0ZSBpbmZlcnJlZFN0YXR1czogTnpQcm9ncmVzc1N0YXR1c1R5cGUgPSAnbm9ybWFsJztcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlKSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIG56R2FwUG9zaXRpb24sXHJcbiAgICAgIG56U3Ryb2tlTGluZWNhcCxcclxuICAgICAgbnpTdHJva2VDb2xvcixcclxuICAgICAgbnpHYXBEZWdyZWUsXHJcbiAgICAgIG56VHlwZSxcclxuICAgICAgbnpTdGF0dXMsXHJcbiAgICAgIG56UGVyY2VudCxcclxuICAgICAgbnpTdWNjZXNzUGVyY2VudFxyXG4gICAgfSA9IGNoYW5nZXM7XHJcblxyXG4gICAgaWYgKG56U3RhdHVzKSB7XHJcbiAgICAgIHRoaXMuY2FjaGVkU3RhdHVzID0gdGhpcy5uelN0YXR1cyB8fCB0aGlzLmNhY2hlZFN0YXR1cztcclxuICAgIH1cclxuXHJcbiAgICBpZiAobnpQZXJjZW50IHx8IG56U3VjY2Vzc1BlcmNlbnQpIHtcclxuICAgICAgY29uc3QgZmlsbEFsbCA9IHBhcnNlSW50KHRoaXMubnpQZXJjZW50LnRvU3RyaW5nKCksIDEwKSA+PSAxMDA7XHJcbiAgICAgIGlmIChmaWxsQWxsKSB7XHJcbiAgICAgICAgaWYgKChpc05vdE5pbCh0aGlzLm56U3VjY2Vzc1BlcmNlbnQpICYmIHRoaXMubnpTdWNjZXNzUGVyY2VudCEgPj0gMTAwKSB8fCB0aGlzLm56U3VjY2Vzc1BlcmNlbnQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgdGhpcy5pbmZlcnJlZFN0YXR1cyA9ICdzdWNjZXNzJztcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5pbmZlcnJlZFN0YXR1cyA9IHRoaXMuY2FjaGVkU3RhdHVzO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG56U3RhdHVzIHx8IG56UGVyY2VudCB8fCBuelN1Y2Nlc3NQZXJjZW50KSB7XHJcbiAgICAgIHRoaXMudXBkYXRlSWNvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChuelN0cm9rZUNvbG9yKSB7XHJcbiAgICAgIHRoaXMuc2V0U3Ryb2tlQ29sb3IoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobnpHYXBQb3NpdGlvbiB8fCBuelN0cm9rZUxpbmVjYXAgfHwgbnpHYXBEZWdyZWUgfHwgbnpUeXBlIHx8IG56UGVyY2VudCB8fCBuelN0cm9rZUNvbG9yKSB7XHJcbiAgICAgIHRoaXMuZ2V0Q2lyY2xlUGF0aHMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5uekNvbmZpZ1NlcnZpY2VcclxuICAgICAgLmdldENvbmZpZ0NoYW5nZUV2ZW50Rm9yQ29tcG9uZW50KE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSlcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUljb24oKTtcclxuICAgICAgICB0aGlzLnNldFN0cm9rZUNvbG9yKCk7XHJcbiAgICAgICAgdGhpcy5nZXRDaXJjbGVQYXRocygpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZUljb24oKTogdm9pZCB7XHJcbiAgICBjb25zdCByZXQgPSBzdGF0dXNJY29uTmFtZU1hcC5nZXQodGhpcy5zdGF0dXMpO1xyXG4gICAgdGhpcy5pY29uID0gcmV0ID8gcmV0ICsgKHRoaXMuaXNDaXJjbGVTdHlsZSA/ICctbycgOiAnLWNpcmNsZS1maWxsJykgOiAnJztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGN1bGF0ZSBwYXRocyB3aGVuIHRoZSB0eXBlIGlzIGNpcmNsZSBvciBkYXNoYm9hcmQuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBnZXRDaXJjbGVQYXRocygpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5pc0NpcmNsZVN0eWxlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB2YWx1ZXMgPSBpc05vdE5pbCh0aGlzLm56U3VjY2Vzc1BlcmNlbnQpID8gW3RoaXMubnpTdWNjZXNzUGVyY2VudCEsIHRoaXMubnpQZXJjZW50XSA6IFt0aGlzLm56UGVyY2VudF07XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIHNoYXJlZCBzdHlsZXMuXHJcbiAgICBjb25zdCByYWRpdXMgPSA1MCAtIHRoaXMuc3Ryb2tlV2lkdGggLyAyO1xyXG4gICAgY29uc3QgZ2FwUG9zaXRpb24gPSB0aGlzLm56R2FwUG9zaXRpb24gfHwgKHRoaXMubnpUeXBlID09PSAnY2lyY2xlJyA/ICd0b3AnIDogJ2JvdHRvbScpO1xyXG4gICAgY29uc3QgbGVuID0gTWF0aC5QSSAqIDIgKiByYWRpdXM7XHJcbiAgICBjb25zdCBnYXBEZWdyZWUgPSB0aGlzLm56R2FwRGVncmVlIHx8ICh0aGlzLm56VHlwZSA9PT0gJ2NpcmNsZScgPyAwIDogNzUpO1xyXG5cclxuICAgIGxldCBiZWdpblBvc2l0aW9uWCA9IDA7XHJcbiAgICBsZXQgYmVnaW5Qb3NpdGlvblkgPSAtcmFkaXVzO1xyXG4gICAgbGV0IGVuZFBvc2l0aW9uWCA9IDA7XHJcbiAgICBsZXQgZW5kUG9zaXRpb25ZID0gcmFkaXVzICogLTI7XHJcblxyXG4gICAgc3dpdGNoIChnYXBQb3NpdGlvbikge1xyXG4gICAgICBjYXNlICdsZWZ0JzpcclxuICAgICAgICBiZWdpblBvc2l0aW9uWCA9IC1yYWRpdXM7XHJcbiAgICAgICAgYmVnaW5Qb3NpdGlvblkgPSAwO1xyXG4gICAgICAgIGVuZFBvc2l0aW9uWCA9IHJhZGl1cyAqIDI7XHJcbiAgICAgICAgZW5kUG9zaXRpb25ZID0gMDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAncmlnaHQnOlxyXG4gICAgICAgIGJlZ2luUG9zaXRpb25YID0gcmFkaXVzO1xyXG4gICAgICAgIGJlZ2luUG9zaXRpb25ZID0gMDtcclxuICAgICAgICBlbmRQb3NpdGlvblggPSByYWRpdXMgKiAtMjtcclxuICAgICAgICBlbmRQb3NpdGlvblkgPSAwO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdib3R0b20nOlxyXG4gICAgICAgIGJlZ2luUG9zaXRpb25ZID0gcmFkaXVzO1xyXG4gICAgICAgIGVuZFBvc2l0aW9uWSA9IHJhZGl1cyAqIDI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wYXRoU3RyaW5nID0gYE0gNTAsNTAgbSAke2JlZ2luUG9zaXRpb25YfSwke2JlZ2luUG9zaXRpb25ZfVxyXG4gICAgICAgYSAke3JhZGl1c30sJHtyYWRpdXN9IDAgMSAxICR7ZW5kUG9zaXRpb25YfSwkey1lbmRQb3NpdGlvbll9XHJcbiAgICAgICBhICR7cmFkaXVzfSwke3JhZGl1c30gMCAxIDEgJHstZW5kUG9zaXRpb25YfSwke2VuZFBvc2l0aW9uWX1gO1xyXG5cclxuICAgIHRoaXMudHJhaWxQYXRoU3R5bGUgPSB7XHJcbiAgICAgIHN0cm9rZURhc2hhcnJheTogYCR7bGVuIC0gZ2FwRGVncmVlfXB4ICR7bGVufXB4YCxcclxuICAgICAgc3Ryb2tlRGFzaG9mZnNldDogYC0ke2dhcERlZ3JlZSAvIDJ9cHhgLFxyXG4gICAgICB0cmFuc2l0aW9uOiAnc3Ryb2tlLWRhc2hvZmZzZXQgLjNzIGVhc2UgMHMsIHN0cm9rZS1kYXNoYXJyYXkgLjNzIGVhc2UgMHMsIHN0cm9rZSAuM3MnXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIENhbGN1bGF0ZSBzdHlsZXMgZm9yIGVhY2ggcGF0aC5cclxuICAgIHRoaXMucHJvZ3Jlc3NDaXJjbGVQYXRoID0gdmFsdWVzXHJcbiAgICAgIC5tYXAoKHZhbHVlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlzU3VjY2Vzc1BlcmNlbnQgPSB2YWx1ZXMubGVuZ3RoID09PSAyICYmIGluZGV4ID09PSAwO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBzdHJva2U6IHRoaXMuaXNHcmFkaWVudCAmJiAhaXNTdWNjZXNzUGVyY2VudCA/IGB1cmwoI2dyYWRpZW50LSR7dGhpcy5ncmFkaWVudElkfSlgIDogbnVsbCxcclxuICAgICAgICAgIHN0cm9rZVBhdGhTdHlsZToge1xyXG4gICAgICAgICAgICBzdHJva2U6ICF0aGlzLmlzR3JhZGllbnRcclxuICAgICAgICAgICAgICA/IGlzU3VjY2Vzc1BlcmNlbnRcclxuICAgICAgICAgICAgICAgID8gc3RhdHVzQ29sb3JNYXAuZ2V0KCdzdWNjZXNzJylcclxuICAgICAgICAgICAgICAgIDogKHRoaXMubnpTdHJva2VDb2xvciBhcyBzdHJpbmcpXHJcbiAgICAgICAgICAgICAgOiBudWxsLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOlxyXG4gICAgICAgICAgICAgICdzdHJva2UtZGFzaG9mZnNldCAuM3MgZWFzZSAwcywgc3Ryb2tlLWRhc2hhcnJheSAuM3MgZWFzZSAwcywgc3Ryb2tlIC4zcywgc3Ryb2tlLXdpZHRoIC4wNnMgZWFzZSAuM3MnLFxyXG4gICAgICAgICAgICBzdHJva2VEYXNoYXJyYXk6IGAkeygodmFsdWUgfHwgMCkgLyAxMDApICogKGxlbiAtIGdhcERlZ3JlZSl9cHggJHtsZW59cHhgLFxyXG4gICAgICAgICAgICBzdHJva2VEYXNob2Zmc2V0OiBgLSR7Z2FwRGVncmVlIC8gMn1weGBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICB9KVxyXG4gICAgICAucmV2ZXJzZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRTdHJva2VDb2xvcigpOiB2b2lkIHtcclxuICAgIGNvbnN0IGNvbG9yID0gdGhpcy5uelN0cm9rZUNvbG9yO1xyXG4gICAgY29uc3QgaXNHcmFkaWVudCA9ICh0aGlzLmlzR3JhZGllbnQgPSAhIWNvbG9yICYmIHR5cGVvZiBjb2xvciAhPT0gJ3N0cmluZycpO1xyXG4gICAgaWYgKGlzR3JhZGllbnQgJiYgIXRoaXMuaXNDaXJjbGVTdHlsZSkge1xyXG4gICAgICB0aGlzLmxpbmVHcmFkaWVudCA9IGhhbmRsZUxpbmVhckdyYWRpZW50KGNvbG9yIGFzIE56UHJvZ3Jlc3NDb2xvckdyYWRpZW50KTtcclxuICAgIH0gZWxzZSBpZiAoaXNHcmFkaWVudCAmJiB0aGlzLmlzQ2lyY2xlU3R5bGUpIHtcclxuICAgICAgdGhpcy5jaXJjbGVHcmFkaWVudCA9IGhhbmRsZUNpcmNsZUdyYWRpZW50KHRoaXMubnpTdHJva2VDb2xvciBhcyBOelByb2dyZXNzR3JhZGllbnRQcm9ncmVzcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmxpbmVHcmFkaWVudCA9IG51bGw7XHJcbiAgICAgIHRoaXMuY2lyY2xlR3JhZGllbnQgPSBbXTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19
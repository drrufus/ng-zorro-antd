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
var gradientIdSeed = 0;
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'progress';
/** @type {?} */
var statusIconNameMap = new Map([['success', 'check'], ['exception', 'close']]);
/** @type {?} */
var statusColorMap = new Map([['normal', '#108ee9'], ['exception', '#ff5500'], ['success', '#87d068']]);
/** @type {?} */
var defaultFormatter = (/**
 * @param {?} p
 * @return {?}
 */
function (p) { return p + "%"; });
var ɵ0 = defaultFormatter;
var NzProgressComponent = /** @class */ (function () {
    function NzProgressComponent(nzConfigService) {
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
        function (index) { return "" + index; });
        this.cachedStatus = 'normal';
        this.inferredStatus = 'normal';
        this.destroy$ = new Subject();
    }
    Object.defineProperty(NzProgressComponent.prototype, "formatter", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzFormat || defaultFormatter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzProgressComponent.prototype, "status", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzStatus || this.inferredStatus;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzProgressComponent.prototype, "strokeWidth", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzStrokeWidth || (this.nzType === 'line' && this.nzSize !== 'small' ? 8 : 6);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzProgressComponent.prototype, "isCircleStyle", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzType === 'circle' || this.nzType === 'dashboard';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    NzProgressComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzGapPosition = changes.nzGapPosition, nzStrokeLinecap = changes.nzStrokeLinecap, nzStrokeColor = changes.nzStrokeColor, nzGapDegree = changes.nzGapDegree, nzType = changes.nzType, nzStatus = changes.nzStatus, nzPercent = changes.nzPercent, nzSuccessPercent = changes.nzSuccessPercent;
        if (nzStatus) {
            this.cachedStatus = this.nzStatus || this.cachedStatus;
        }
        if (nzPercent || nzSuccessPercent) {
            /** @type {?} */
            var fillAll = parseInt(this.nzPercent.toString(), 10) >= 100;
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
    };
    /**
     * @return {?}
     */
    NzProgressComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.updateIcon();
            _this.setStrokeColor();
            _this.getCirclePaths();
        }));
    };
    /**
     * @return {?}
     */
    NzProgressComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * @private
     * @return {?}
     */
    NzProgressComponent.prototype.updateIcon = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var ret = statusIconNameMap.get(this.status);
        this.icon = ret ? ret + (this.isCircleStyle ? '-o' : '-circle-fill') : '';
    };
    /**
     * Calculate paths when the type is circle or dashboard.
     */
    /**
     * Calculate paths when the type is circle or dashboard.
     * @private
     * @return {?}
     */
    NzProgressComponent.prototype.getCirclePaths = /**
     * Calculate paths when the type is circle or dashboard.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.isCircleStyle) {
            return;
        }
        /** @type {?} */
        var values = isNotNil(this.nzSuccessPercent) ? [(/** @type {?} */ (this.nzSuccessPercent)), this.nzPercent] : [this.nzPercent];
        // Calculate shared styles.
        /** @type {?} */
        var radius = 50 - this.strokeWidth / 2;
        /** @type {?} */
        var gapPosition = this.nzGapPosition || (this.nzType === 'circle' ? 'top' : 'bottom');
        /** @type {?} */
        var len = Math.PI * 2 * radius;
        /** @type {?} */
        var gapDegree = this.nzGapDegree || (this.nzType === 'circle' ? 0 : 75);
        /** @type {?} */
        var beginPositionX = 0;
        /** @type {?} */
        var beginPositionY = -radius;
        /** @type {?} */
        var endPositionX = 0;
        /** @type {?} */
        var endPositionY = radius * -2;
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
        this.pathString = "M 50,50 m " + beginPositionX + "," + beginPositionY + "\n       a " + radius + "," + radius + " 0 1 1 " + endPositionX + "," + -endPositionY + "\n       a " + radius + "," + radius + " 0 1 1 " + -endPositionX + "," + endPositionY;
        this.trailPathStyle = {
            strokeDasharray: len - gapDegree + "px " + len + "px",
            strokeDashoffset: "-" + gapDegree / 2 + "px",
            transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s'
        };
        // Calculate styles for each path.
        this.progressCirclePath = values
            .map((/**
         * @param {?} value
         * @param {?} index
         * @return {?}
         */
        function (value, index) {
            /** @type {?} */
            var isSuccessPercent = values.length === 2 && index === 0;
            return {
                stroke: _this.isGradient && !isSuccessPercent ? "url(#gradient-" + _this.gradientId + ")" : null,
                strokePathStyle: {
                    stroke: !_this.isGradient
                        ? isSuccessPercent
                            ? statusColorMap.get('success')
                            : ((/** @type {?} */ (_this.nzStrokeColor)))
                        : null,
                    transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s',
                    strokeDasharray: ((value || 0) / 100) * (len - gapDegree) + "px " + len + "px",
                    strokeDashoffset: "-" + gapDegree / 2 + "px"
                }
            };
        }))
            .reverse();
    };
    /**
     * @private
     * @return {?}
     */
    NzProgressComponent.prototype.setStrokeColor = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var color = this.nzStrokeColor;
        /** @type {?} */
        var isGradient = (this.isGradient = !!color && typeof color !== 'string');
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
    };
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
    NzProgressComponent.ctorParameters = function () { return [
        { type: NzConfigService }
    ]; };
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
    return NzProgressComponent;
}());
export { NzProgressComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcHJvZ3Jlc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9wcm9ncmVzcy8iLCJzb3VyY2VzIjpbIm56LXByb2dyZXNzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsS0FBSyxFQUtMLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBb0IsZUFBZSxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTFHLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztJQWE3RSxjQUFjLEdBQUcsQ0FBQzs7SUFFaEIsd0JBQXdCLEdBQUcsVUFBVTs7SUFDckMsaUJBQWlCLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDOztJQUMzRSxjQUFjLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDOztJQUNuRyxnQkFBZ0I7Ozs7QUFBd0IsVUFBQyxDQUFTLElBQWEsT0FBRyxDQUFDLE1BQUcsRUFBUCxDQUFPLENBQUE7O0FBRTVFO0lBb0VFLDZCQUFtQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUExRDFDLFlBQU8sR0FBRyxHQUFHLENBQUM7UUFLQyxjQUFTLEdB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SUFDMUI7UUFBZCxXQUFXLEVBQUU7OzBEQUF1QjtJQUNnQjtRQUFwRCxVQUFVLENBQUMsd0JBQXdCLENBQUMsRUFBRSxXQUFXLEVBQUU7OzhEQUF1QjtJQUN0QjtRQUFwRCxVQUFVLENBQUMsd0JBQXdCLENBQUMsRUFBRSxXQUFXLEVBQUU7OzREQUFxQjtJQUc1QjtRQUE1QyxVQUFVLENBQUMsd0JBQXdCLEVBQUUsS0FBSyxDQUFDOzs4REFBMEM7SUFDdkM7UUFBOUMsVUFBVSxDQUFDLHdCQUF3QixFQUFFLE9BQU8sQ0FBQzs7Z0VBQThDO0lBbU12RywwQkFBQztDQUFBLEFBeE5ELElBd05DO1NBaE5ZLG1CQUFtQjs7O0lBQzlCLHlDQUF5RTs7SUFDekUsc0NBQXVCOztJQUN2Qiw0Q0FBd0Y7O0lBQ3hGLHFDQUFzRjs7SUFDdEYsdUNBQXdDOztJQUN4QywrQ0FBa0Q7O0lBQ2xELHdDQUE4Qzs7SUFDOUMsNENBQW9GOztJQUNwRiwwQ0FBa0Y7O0lBQ2xGLHVDQUF3Qzs7SUFDeEMscUNBQTZDOztJQUM3Qyw0Q0FBK0Y7O0lBQy9GLDhDQUFxRzs7Ozs7SUFHckcsMkNBQW1DOzs7OztJQUduQyx5Q0FBbUI7Ozs7OztJQU1uQix5Q0FBOEI7Ozs7O0lBRzlCLGlEQUFnRDs7SUFFaEQsNkNBQXlEOztJQUV6RCw2Q0FBaUM7O0lBRWpDLHlDQUFtQjs7SUFFbkIsbUNBQWE7O0lBRWIsd0NBQTBDOzs7OztJQWtCMUMsMkNBQXNEOzs7OztJQUN0RCw2Q0FBd0Q7Ozs7O0lBQ3hELHVDQUF1Qzs7SUFFM0IsOENBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBpc05vdE5pbCwgSW5wdXROdW1iZXIsIE5nU3R5bGVJbnRlcmZhY2UsIE56Q29uZmlnU2VydmljZSwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgaGFuZGxlQ2lyY2xlR3JhZGllbnQsIGhhbmRsZUxpbmVhckdyYWRpZW50IH0gZnJvbSAnLi9uei1wcm9ncmVzcy11dGlscyc7XHJcbmltcG9ydCB7XHJcbiAgTnpQcm9ncmVzc0NpcmNsZVBhdGgsXHJcbiAgTnpQcm9ncmVzc0NvbG9yR3JhZGllbnQsXHJcbiAgTnpQcm9ncmVzc0Zvcm1hdHRlcixcclxuICBOelByb2dyZXNzR2FwUG9zaXRpb25UeXBlLFxyXG4gIE56UHJvZ3Jlc3NHcmFkaWVudFByb2dyZXNzLFxyXG4gIE56UHJvZ3Jlc3NTdGF0dXNUeXBlLFxyXG4gIE56UHJvZ3Jlc3NTdHJva2VDb2xvclR5cGUsXHJcbiAgTnpQcm9ncmVzc1N0cm9rZUxpbmVjYXBUeXBlLFxyXG4gIE56UHJvZ3Jlc3NUeXBlVHlwZVxyXG59IGZyb20gJy4vbnotcHJvZ3Jlc3MuZGVmaW5pdGlvbnMnO1xyXG5cclxubGV0IGdyYWRpZW50SWRTZWVkID0gMDtcclxuXHJcbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICdwcm9ncmVzcyc7XHJcbmNvbnN0IHN0YXR1c0ljb25OYW1lTWFwID0gbmV3IE1hcChbWydzdWNjZXNzJywgJ2NoZWNrJ10sIFsnZXhjZXB0aW9uJywgJ2Nsb3NlJ11dKTtcclxuY29uc3Qgc3RhdHVzQ29sb3JNYXAgPSBuZXcgTWFwKFtbJ25vcm1hbCcsICcjMTA4ZWU5J10sIFsnZXhjZXB0aW9uJywgJyNmZjU1MDAnXSwgWydzdWNjZXNzJywgJyM4N2QwNjgnXV0pO1xyXG5jb25zdCBkZWZhdWx0Rm9ybWF0dGVyOiBOelByb2dyZXNzRm9ybWF0dGVyID0gKHA6IG51bWJlcik6IHN0cmluZyA9PiBgJHtwfSVgO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzZWxlY3RvcjogJ256LXByb2dyZXNzJyxcclxuICBleHBvcnRBczogJ256UHJvZ3Jlc3MnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1wcm9ncmVzcy5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE56UHJvZ3Jlc3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIHRydWUpIG56U2hvd0luZm86IGJvb2xlYW47XHJcbiAgQElucHV0KCkgbnpXaWR0aCA9IDEzMjtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpIG56U3Ryb2tlQ29sb3I6IE56UHJvZ3Jlc3NTdHJva2VDb2xvclR5cGU7XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCAnZGVmYXVsdCcpIG56U2l6ZTogJ2RlZmF1bHQnIHwgJ3NtYWxsJztcclxuICBASW5wdXQoKSBuekZvcm1hdD86IE56UHJvZ3Jlc3NGb3JtYXR0ZXI7XHJcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbnpTdWNjZXNzUGVyY2VudD86IG51bWJlcjtcclxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBuelBlcmNlbnQ6IG51bWJlciA9IDA7XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKSBASW5wdXROdW1iZXIoKSBuelN0cm9rZVdpZHRoOiBudW1iZXI7XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKSBASW5wdXROdW1iZXIoKSBuekdhcERlZ3JlZTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIG56U3RhdHVzOiBOelByb2dyZXNzU3RhdHVzVHlwZTtcclxuICBASW5wdXQoKSBuelR5cGU6IE56UHJvZ3Jlc3NUeXBlVHlwZSA9ICdsaW5lJztcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsICd0b3AnKSBuekdhcFBvc2l0aW9uOiBOelByb2dyZXNzR2FwUG9zaXRpb25UeXBlO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgJ3JvdW5kJykgbnpTdHJva2VMaW5lY2FwOiBOelByb2dyZXNzU3Ryb2tlTGluZWNhcFR5cGU7XHJcblxyXG4gIC8qKiBHcmFkaWVudCBzdHlsZSB3aGVuIGBuelR5cGVgIGlzIGBsaW5lYC4gKi9cclxuICBsaW5lR3JhZGllbnQ6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG5cclxuICAvKiogSWYgdXNlciB1c2VzIGdyYWRpZW50IGNvbG9yLiAqL1xyXG4gIGlzR3JhZGllbnQgPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogRWFjaCBwcm9ncmVzcyB3aG9zZSBgbnpUeXBlYCBpcyBjaXJjbGUgb3IgZGFzaGJvYXJkIHNob3VsZCBoYXZlIHVuaXF1ZSBpZCB0b1xyXG4gICAqIGRlZmluZSBgPGxpbmVhckdyYWRpZW50PmAuXHJcbiAgICovXHJcbiAgZ3JhZGllbnRJZCA9IGdyYWRpZW50SWRTZWVkKys7XHJcblxyXG4gIC8qKiBQYXRocyB0byByZW5kZXJlZCBpbiB0aGUgdGVtcGxhdGUuICovXHJcbiAgcHJvZ3Jlc3NDaXJjbGVQYXRoOiBOelByb2dyZXNzQ2lyY2xlUGF0aFtdID0gW107XHJcblxyXG4gIGNpcmNsZUdyYWRpZW50OiBBcnJheTx7IG9mZnNldDogc3RyaW5nOyBjb2xvcjogc3RyaW5nIH0+O1xyXG5cclxuICB0cmFpbFBhdGhTdHlsZTogTmdTdHlsZUludGVyZmFjZTtcclxuXHJcbiAgcGF0aFN0cmluZzogc3RyaW5nO1xyXG5cclxuICBpY29uOiBzdHJpbmc7XHJcblxyXG4gIHRyYWNrQnlGbiA9IChpbmRleDogbnVtYmVyKSA9PiBgJHtpbmRleH1gO1xyXG5cclxuICBnZXQgZm9ybWF0dGVyKCk6IE56UHJvZ3Jlc3NGb3JtYXR0ZXIge1xyXG4gICAgcmV0dXJuIHRoaXMubnpGb3JtYXQgfHwgZGVmYXVsdEZvcm1hdHRlcjtcclxuICB9XHJcblxyXG4gIGdldCBzdGF0dXMoKTogTnpQcm9ncmVzc1N0YXR1c1R5cGUge1xyXG4gICAgcmV0dXJuIHRoaXMubnpTdGF0dXMgfHwgdGhpcy5pbmZlcnJlZFN0YXR1cztcclxuICB9XHJcblxyXG4gIGdldCBzdHJva2VXaWR0aCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMubnpTdHJva2VXaWR0aCB8fCAodGhpcy5uelR5cGUgPT09ICdsaW5lJyAmJiB0aGlzLm56U2l6ZSAhPT0gJ3NtYWxsJyA/IDggOiA2KTtcclxuICB9XHJcblxyXG4gIGdldCBpc0NpcmNsZVN0eWxlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubnpUeXBlID09PSAnY2lyY2xlJyB8fCB0aGlzLm56VHlwZSA9PT0gJ2Rhc2hib2FyZCc7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhY2hlZFN0YXR1czogTnpQcm9ncmVzc1N0YXR1c1R5cGUgPSAnbm9ybWFsJztcclxuICBwcml2YXRlIGluZmVycmVkU3RhdHVzOiBOelByb2dyZXNzU3RhdHVzVHlwZSA9ICdub3JtYWwnO1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UpIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgbnpHYXBQb3NpdGlvbixcclxuICAgICAgbnpTdHJva2VMaW5lY2FwLFxyXG4gICAgICBuelN0cm9rZUNvbG9yLFxyXG4gICAgICBuekdhcERlZ3JlZSxcclxuICAgICAgbnpUeXBlLFxyXG4gICAgICBuelN0YXR1cyxcclxuICAgICAgbnpQZXJjZW50LFxyXG4gICAgICBuelN1Y2Nlc3NQZXJjZW50XHJcbiAgICB9ID0gY2hhbmdlcztcclxuXHJcbiAgICBpZiAobnpTdGF0dXMpIHtcclxuICAgICAgdGhpcy5jYWNoZWRTdGF0dXMgPSB0aGlzLm56U3RhdHVzIHx8IHRoaXMuY2FjaGVkU3RhdHVzO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChuelBlcmNlbnQgfHwgbnpTdWNjZXNzUGVyY2VudCkge1xyXG4gICAgICBjb25zdCBmaWxsQWxsID0gcGFyc2VJbnQodGhpcy5uelBlcmNlbnQudG9TdHJpbmcoKSwgMTApID49IDEwMDtcclxuICAgICAgaWYgKGZpbGxBbGwpIHtcclxuICAgICAgICBpZiAoKGlzTm90TmlsKHRoaXMubnpTdWNjZXNzUGVyY2VudCkgJiYgdGhpcy5uelN1Y2Nlc3NQZXJjZW50ISA+PSAxMDApIHx8IHRoaXMubnpTdWNjZXNzUGVyY2VudCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICB0aGlzLmluZmVycmVkU3RhdHVzID0gJ3N1Y2Nlc3MnO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmluZmVycmVkU3RhdHVzID0gdGhpcy5jYWNoZWRTdGF0dXM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAobnpTdGF0dXMgfHwgbnpQZXJjZW50IHx8IG56U3VjY2Vzc1BlcmNlbnQpIHtcclxuICAgICAgdGhpcy51cGRhdGVJY29uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG56U3Ryb2tlQ29sb3IpIHtcclxuICAgICAgdGhpcy5zZXRTdHJva2VDb2xvcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChuekdhcFBvc2l0aW9uIHx8IG56U3Ryb2tlTGluZWNhcCB8fCBuekdhcERlZ3JlZSB8fCBuelR5cGUgfHwgbnpQZXJjZW50IHx8IG56U3Ryb2tlQ29sb3IpIHtcclxuICAgICAgdGhpcy5nZXRDaXJjbGVQYXRocygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm56Q29uZmlnU2VydmljZVxyXG4gICAgICAuZ2V0Q29uZmlnQ2hhbmdlRXZlbnRGb3JDb21wb25lbnQoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMudXBkYXRlSWNvbigpO1xyXG4gICAgICAgIHRoaXMuc2V0U3Ryb2tlQ29sb3IoKTtcclxuICAgICAgICB0aGlzLmdldENpcmNsZVBhdGhzKCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlSWNvbigpOiB2b2lkIHtcclxuICAgIGNvbnN0IHJldCA9IHN0YXR1c0ljb25OYW1lTWFwLmdldCh0aGlzLnN0YXR1cyk7XHJcbiAgICB0aGlzLmljb24gPSByZXQgPyByZXQgKyAodGhpcy5pc0NpcmNsZVN0eWxlID8gJy1vJyA6ICctY2lyY2xlLWZpbGwnKSA6ICcnO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsY3VsYXRlIHBhdGhzIHdoZW4gdGhlIHR5cGUgaXMgY2lyY2xlIG9yIGRhc2hib2FyZC5cclxuICAgKi9cclxuICBwcml2YXRlIGdldENpcmNsZVBhdGhzKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmlzQ2lyY2xlU3R5bGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHZhbHVlcyA9IGlzTm90TmlsKHRoaXMubnpTdWNjZXNzUGVyY2VudCkgPyBbdGhpcy5uelN1Y2Nlc3NQZXJjZW50ISwgdGhpcy5uelBlcmNlbnRdIDogW3RoaXMubnpQZXJjZW50XTtcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgc2hhcmVkIHN0eWxlcy5cclxuICAgIGNvbnN0IHJhZGl1cyA9IDUwIC0gdGhpcy5zdHJva2VXaWR0aCAvIDI7XHJcbiAgICBjb25zdCBnYXBQb3NpdGlvbiA9IHRoaXMubnpHYXBQb3NpdGlvbiB8fCAodGhpcy5uelR5cGUgPT09ICdjaXJjbGUnID8gJ3RvcCcgOiAnYm90dG9tJyk7XHJcbiAgICBjb25zdCBsZW4gPSBNYXRoLlBJICogMiAqIHJhZGl1cztcclxuICAgIGNvbnN0IGdhcERlZ3JlZSA9IHRoaXMubnpHYXBEZWdyZWUgfHwgKHRoaXMubnpUeXBlID09PSAnY2lyY2xlJyA/IDAgOiA3NSk7XHJcblxyXG4gICAgbGV0IGJlZ2luUG9zaXRpb25YID0gMDtcclxuICAgIGxldCBiZWdpblBvc2l0aW9uWSA9IC1yYWRpdXM7XHJcbiAgICBsZXQgZW5kUG9zaXRpb25YID0gMDtcclxuICAgIGxldCBlbmRQb3NpdGlvblkgPSByYWRpdXMgKiAtMjtcclxuXHJcbiAgICBzd2l0Y2ggKGdhcFBvc2l0aW9uKSB7XHJcbiAgICAgIGNhc2UgJ2xlZnQnOlxyXG4gICAgICAgIGJlZ2luUG9zaXRpb25YID0gLXJhZGl1cztcclxuICAgICAgICBiZWdpblBvc2l0aW9uWSA9IDA7XHJcbiAgICAgICAgZW5kUG9zaXRpb25YID0gcmFkaXVzICogMjtcclxuICAgICAgICBlbmRQb3NpdGlvblkgPSAwO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdyaWdodCc6XHJcbiAgICAgICAgYmVnaW5Qb3NpdGlvblggPSByYWRpdXM7XHJcbiAgICAgICAgYmVnaW5Qb3NpdGlvblkgPSAwO1xyXG4gICAgICAgIGVuZFBvc2l0aW9uWCA9IHJhZGl1cyAqIC0yO1xyXG4gICAgICAgIGVuZFBvc2l0aW9uWSA9IDA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2JvdHRvbSc6XHJcbiAgICAgICAgYmVnaW5Qb3NpdGlvblkgPSByYWRpdXM7XHJcbiAgICAgICAgZW5kUG9zaXRpb25ZID0gcmFkaXVzICogMjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnBhdGhTdHJpbmcgPSBgTSA1MCw1MCBtICR7YmVnaW5Qb3NpdGlvblh9LCR7YmVnaW5Qb3NpdGlvbll9XHJcbiAgICAgICBhICR7cmFkaXVzfSwke3JhZGl1c30gMCAxIDEgJHtlbmRQb3NpdGlvblh9LCR7LWVuZFBvc2l0aW9uWX1cclxuICAgICAgIGEgJHtyYWRpdXN9LCR7cmFkaXVzfSAwIDEgMSAkey1lbmRQb3NpdGlvblh9LCR7ZW5kUG9zaXRpb25ZfWA7XHJcblxyXG4gICAgdGhpcy50cmFpbFBhdGhTdHlsZSA9IHtcclxuICAgICAgc3Ryb2tlRGFzaGFycmF5OiBgJHtsZW4gLSBnYXBEZWdyZWV9cHggJHtsZW59cHhgLFxyXG4gICAgICBzdHJva2VEYXNob2Zmc2V0OiBgLSR7Z2FwRGVncmVlIC8gMn1weGAsXHJcbiAgICAgIHRyYW5zaXRpb246ICdzdHJva2UtZGFzaG9mZnNldCAuM3MgZWFzZSAwcywgc3Ryb2tlLWRhc2hhcnJheSAuM3MgZWFzZSAwcywgc3Ryb2tlIC4zcydcclxuICAgIH07XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIHN0eWxlcyBmb3IgZWFjaCBwYXRoLlxyXG4gICAgdGhpcy5wcm9ncmVzc0NpcmNsZVBhdGggPSB2YWx1ZXNcclxuICAgICAgLm1hcCgodmFsdWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaXNTdWNjZXNzUGVyY2VudCA9IHZhbHVlcy5sZW5ndGggPT09IDIgJiYgaW5kZXggPT09IDA7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHN0cm9rZTogdGhpcy5pc0dyYWRpZW50ICYmICFpc1N1Y2Nlc3NQZXJjZW50ID8gYHVybCgjZ3JhZGllbnQtJHt0aGlzLmdyYWRpZW50SWR9KWAgOiBudWxsLFxyXG4gICAgICAgICAgc3Ryb2tlUGF0aFN0eWxlOiB7XHJcbiAgICAgICAgICAgIHN0cm9rZTogIXRoaXMuaXNHcmFkaWVudFxyXG4gICAgICAgICAgICAgID8gaXNTdWNjZXNzUGVyY2VudFxyXG4gICAgICAgICAgICAgICAgPyBzdGF0dXNDb2xvck1hcC5nZXQoJ3N1Y2Nlc3MnKVxyXG4gICAgICAgICAgICAgICAgOiAodGhpcy5uelN0cm9rZUNvbG9yIGFzIHN0cmluZylcclxuICAgICAgICAgICAgICA6IG51bGwsXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246XHJcbiAgICAgICAgICAgICAgJ3N0cm9rZS1kYXNob2Zmc2V0IC4zcyBlYXNlIDBzLCBzdHJva2UtZGFzaGFycmF5IC4zcyBlYXNlIDBzLCBzdHJva2UgLjNzLCBzdHJva2Utd2lkdGggLjA2cyBlYXNlIC4zcycsXHJcbiAgICAgICAgICAgIHN0cm9rZURhc2hhcnJheTogYCR7KCh2YWx1ZSB8fCAwKSAvIDEwMCkgKiAobGVuIC0gZ2FwRGVncmVlKX1weCAke2xlbn1weGAsXHJcbiAgICAgICAgICAgIHN0cm9rZURhc2hvZmZzZXQ6IGAtJHtnYXBEZWdyZWUgLyAyfXB4YFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pXHJcbiAgICAgIC5yZXZlcnNlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFN0cm9rZUNvbG9yKCk6IHZvaWQge1xyXG4gICAgY29uc3QgY29sb3IgPSB0aGlzLm56U3Ryb2tlQ29sb3I7XHJcbiAgICBjb25zdCBpc0dyYWRpZW50ID0gKHRoaXMuaXNHcmFkaWVudCA9ICEhY29sb3IgJiYgdHlwZW9mIGNvbG9yICE9PSAnc3RyaW5nJyk7XHJcbiAgICBpZiAoaXNHcmFkaWVudCAmJiAhdGhpcy5pc0NpcmNsZVN0eWxlKSB7XHJcbiAgICAgIHRoaXMubGluZUdyYWRpZW50ID0gaGFuZGxlTGluZWFyR3JhZGllbnQoY29sb3IgYXMgTnpQcm9ncmVzc0NvbG9yR3JhZGllbnQpO1xyXG4gICAgfSBlbHNlIGlmIChpc0dyYWRpZW50ICYmIHRoaXMuaXNDaXJjbGVTdHlsZSkge1xyXG4gICAgICB0aGlzLmNpcmNsZUdyYWRpZW50ID0gaGFuZGxlQ2lyY2xlR3JhZGllbnQodGhpcy5uelN0cm9rZUNvbG9yIGFzIE56UHJvZ3Jlc3NHcmFkaWVudFByb2dyZXNzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubGluZUdyYWRpZW50ID0gbnVsbDtcclxuICAgICAgdGhpcy5jaXJjbGVHcmFkaWVudCA9IFtdO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcHJvZ3Jlc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9wcm9ncmVzcy8iLCJzb3VyY2VzIjpbIm56LXByb2dyZXNzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEVBS0wsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFvQixlQUFlLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFMUcsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLE1BQU0scUJBQXFCLENBQUM7O0lBYTdFLGNBQWMsR0FBRyxDQUFDOztJQUVoQix3QkFBd0IsR0FBRyxVQUFVOztJQUNyQyxpQkFBaUIsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7O0lBQzNFLGNBQWMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7O0lBQ25HLGdCQUFnQjs7OztBQUF3QixVQUFDLENBQVMsSUFBYSxPQUFHLENBQUMsTUFBRyxFQUFQLENBQU8sQ0FBQTs7QUFFNUU7SUFvRUUsNkJBQW1CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQTFEMUMsWUFBTyxHQUFHLEdBQUcsQ0FBQztRQUtDLGNBQVMsR0FB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QUMxQjtRQUFkLFdBQVcsRUFBRTs7MERBQXVCO0lBQ2dCO1FBQXBELFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFLFdBQVcsRUFBRTs7OERBQXVCO0lBQ3RCO1FBQXBELFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFLFdBQVcsRUFBRTs7NERBQXFCO0lBRzVCO1FBQTVDLFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxLQUFLLENBQUM7OzhEQUEwQztJQUN2QztRQUE5QyxVQUFVLENBQUMsd0JBQXdCLEVBQUUsT0FBTyxDQUFDOztnRUFBOEM7SUFtTXZHLDBCQUFDO0NBQUEsQUF4TkQsSUF3TkM7U0FoTlksbUJBQW1COzs7SUFDOUIseUNBQXlFOztJQUN6RSxzQ0FBdUI7O0lBQ3ZCLDRDQUF3Rjs7SUFDeEYscUNBQXNGOztJQUN0Rix1Q0FBd0M7O0lBQ3hDLCtDQUFrRDs7SUFDbEQsd0NBQThDOztJQUM5Qyw0Q0FBb0Y7O0lBQ3BGLDBDQUFrRjs7SUFDbEYsdUNBQXdDOztJQUN4QyxxQ0FBNkM7O0lBQzdDLDRDQUErRjs7SUFDL0YsOENBQXFHOzs7OztJQUdyRywyQ0FBbUM7Ozs7O0lBR25DLHlDQUFtQjs7Ozs7O0lBTW5CLHlDQUE4Qjs7Ozs7SUFHOUIsaURBQWdEOztJQUVoRCw2Q0FBeUQ7O0lBRXpELDZDQUFpQzs7SUFFakMseUNBQW1COztJQUVuQixtQ0FBYTs7SUFFYix3Q0FBMEM7Ozs7O0lBa0IxQywyQ0FBc0Q7Ozs7O0lBQ3RELDZDQUF3RDs7Ozs7SUFDeEQsdUNBQXVDOztJQUUzQiw4Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGlzTm90TmlsLCBJbnB1dE51bWJlciwgTmdTdHlsZUludGVyZmFjZSwgTnpDb25maWdTZXJ2aWNlLCBXaXRoQ29uZmlnIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBoYW5kbGVDaXJjbGVHcmFkaWVudCwgaGFuZGxlTGluZWFyR3JhZGllbnQgfSBmcm9tICcuL256LXByb2dyZXNzLXV0aWxzJztcclxuaW1wb3J0IHtcclxuICBOelByb2dyZXNzQ2lyY2xlUGF0aCxcclxuICBOelByb2dyZXNzQ29sb3JHcmFkaWVudCxcclxuICBOelByb2dyZXNzRm9ybWF0dGVyLFxyXG4gIE56UHJvZ3Jlc3NHYXBQb3NpdGlvblR5cGUsXHJcbiAgTnpQcm9ncmVzc0dyYWRpZW50UHJvZ3Jlc3MsXHJcbiAgTnpQcm9ncmVzc1N0YXR1c1R5cGUsXHJcbiAgTnpQcm9ncmVzc1N0cm9rZUNvbG9yVHlwZSxcclxuICBOelByb2dyZXNzU3Ryb2tlTGluZWNhcFR5cGUsXHJcbiAgTnpQcm9ncmVzc1R5cGVUeXBlXHJcbn0gZnJvbSAnLi9uei1wcm9ncmVzcy5kZWZpbml0aW9ucyc7XHJcblxyXG5sZXQgZ3JhZGllbnRJZFNlZWQgPSAwO1xyXG5cclxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ3Byb2dyZXNzJztcclxuY29uc3Qgc3RhdHVzSWNvbk5hbWVNYXAgPSBuZXcgTWFwKFtbJ3N1Y2Nlc3MnLCAnY2hlY2snXSwgWydleGNlcHRpb24nLCAnY2xvc2UnXV0pO1xyXG5jb25zdCBzdGF0dXNDb2xvck1hcCA9IG5ldyBNYXAoW1snbm9ybWFsJywgJyMxMDhlZTknXSwgWydleGNlcHRpb24nLCAnI2ZmNTUwMCddLCBbJ3N1Y2Nlc3MnLCAnIzg3ZDA2OCddXSk7XHJcbmNvbnN0IGRlZmF1bHRGb3JtYXR0ZXI6IE56UHJvZ3Jlc3NGb3JtYXR0ZXIgPSAocDogbnVtYmVyKTogc3RyaW5nID0+IGAke3B9JWA7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHNlbGVjdG9yOiAnbnotcHJvZ3Jlc3MnLFxyXG4gIGV4cG9ydEFzOiAnbnpQcm9ncmVzcycsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXByb2dyZXNzLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpQcm9ncmVzc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgdHJ1ZSkgbnpTaG93SW5mbzogYm9vbGVhbjtcclxuICBASW5wdXQoKSBueldpZHRoID0gMTMyO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkgbnpTdHJva2VDb2xvcjogTnpQcm9ncmVzc1N0cm9rZUNvbG9yVHlwZTtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsICdkZWZhdWx0JykgbnpTaXplOiAnZGVmYXVsdCcgfCAnc21hbGwnO1xyXG4gIEBJbnB1dCgpIG56Rm9ybWF0PzogTnpQcm9ncmVzc0Zvcm1hdHRlcjtcclxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBuelN1Y2Nlc3NQZXJjZW50PzogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG56UGVyY2VudDogbnVtYmVyID0gMDtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpIEBJbnB1dE51bWJlcigpIG56U3Ryb2tlV2lkdGg6IG51bWJlcjtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpIEBJbnB1dE51bWJlcigpIG56R2FwRGVncmVlOiBudW1iZXI7XHJcbiAgQElucHV0KCkgbnpTdGF0dXM6IE56UHJvZ3Jlc3NTdGF0dXNUeXBlO1xyXG4gIEBJbnB1dCgpIG56VHlwZTogTnpQcm9ncmVzc1R5cGVUeXBlID0gJ2xpbmUnO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgJ3RvcCcpIG56R2FwUG9zaXRpb246IE56UHJvZ3Jlc3NHYXBQb3NpdGlvblR5cGU7XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCAncm91bmQnKSBuelN0cm9rZUxpbmVjYXA6IE56UHJvZ3Jlc3NTdHJva2VMaW5lY2FwVHlwZTtcclxuXHJcbiAgLyoqIEdyYWRpZW50IHN0eWxlIHdoZW4gYG56VHlwZWAgaXMgYGxpbmVgLiAqL1xyXG4gIGxpbmVHcmFkaWVudDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIC8qKiBJZiB1c2VyIHVzZXMgZ3JhZGllbnQgY29sb3IuICovXHJcbiAgaXNHcmFkaWVudCA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBFYWNoIHByb2dyZXNzIHdob3NlIGBuelR5cGVgIGlzIGNpcmNsZSBvciBkYXNoYm9hcmQgc2hvdWxkIGhhdmUgdW5pcXVlIGlkIHRvXHJcbiAgICogZGVmaW5lIGA8bGluZWFyR3JhZGllbnQ+YC5cclxuICAgKi9cclxuICBncmFkaWVudElkID0gZ3JhZGllbnRJZFNlZWQrKztcclxuXHJcbiAgLyoqIFBhdGhzIHRvIHJlbmRlcmVkIGluIHRoZSB0ZW1wbGF0ZS4gKi9cclxuICBwcm9ncmVzc0NpcmNsZVBhdGg6IE56UHJvZ3Jlc3NDaXJjbGVQYXRoW10gPSBbXTtcclxuXHJcbiAgY2lyY2xlR3JhZGllbnQ6IEFycmF5PHsgb2Zmc2V0OiBzdHJpbmc7IGNvbG9yOiBzdHJpbmcgfT47XHJcblxyXG4gIHRyYWlsUGF0aFN0eWxlOiBOZ1N0eWxlSW50ZXJmYWNlO1xyXG5cclxuICBwYXRoU3RyaW5nOiBzdHJpbmc7XHJcblxyXG4gIGljb246IHN0cmluZztcclxuXHJcbiAgdHJhY2tCeUZuID0gKGluZGV4OiBudW1iZXIpID0+IGAke2luZGV4fWA7XHJcblxyXG4gIGdldCBmb3JtYXR0ZXIoKTogTnpQcm9ncmVzc0Zvcm1hdHRlciB7XHJcbiAgICByZXR1cm4gdGhpcy5uekZvcm1hdCB8fCBkZWZhdWx0Rm9ybWF0dGVyO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHN0YXR1cygpOiBOelByb2dyZXNzU3RhdHVzVHlwZSB7XHJcbiAgICByZXR1cm4gdGhpcy5uelN0YXR1cyB8fCB0aGlzLmluZmVycmVkU3RhdHVzO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHN0cm9rZVdpZHRoKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5uelN0cm9rZVdpZHRoIHx8ICh0aGlzLm56VHlwZSA9PT0gJ2xpbmUnICYmIHRoaXMubnpTaXplICE9PSAnc21hbGwnID8gOCA6IDYpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzQ2lyY2xlU3R5bGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5uelR5cGUgPT09ICdjaXJjbGUnIHx8IHRoaXMubnpUeXBlID09PSAnZGFzaGJvYXJkJztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FjaGVkU3RhdHVzOiBOelByb2dyZXNzU3RhdHVzVHlwZSA9ICdub3JtYWwnO1xyXG4gIHByaXZhdGUgaW5mZXJyZWRTdGF0dXM6IE56UHJvZ3Jlc3NTdGF0dXNUeXBlID0gJ25vcm1hbCc7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSkge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBuekdhcFBvc2l0aW9uLFxyXG4gICAgICBuelN0cm9rZUxpbmVjYXAsXHJcbiAgICAgIG56U3Ryb2tlQ29sb3IsXHJcbiAgICAgIG56R2FwRGVncmVlLFxyXG4gICAgICBuelR5cGUsXHJcbiAgICAgIG56U3RhdHVzLFxyXG4gICAgICBuelBlcmNlbnQsXHJcbiAgICAgIG56U3VjY2Vzc1BlcmNlbnRcclxuICAgIH0gPSBjaGFuZ2VzO1xyXG5cclxuICAgIGlmIChuelN0YXR1cykge1xyXG4gICAgICB0aGlzLmNhY2hlZFN0YXR1cyA9IHRoaXMubnpTdGF0dXMgfHwgdGhpcy5jYWNoZWRTdGF0dXM7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG56UGVyY2VudCB8fCBuelN1Y2Nlc3NQZXJjZW50KSB7XHJcbiAgICAgIGNvbnN0IGZpbGxBbGwgPSBwYXJzZUludCh0aGlzLm56UGVyY2VudC50b1N0cmluZygpLCAxMCkgPj0gMTAwO1xyXG4gICAgICBpZiAoZmlsbEFsbCkge1xyXG4gICAgICAgIGlmICgoaXNOb3ROaWwodGhpcy5uelN1Y2Nlc3NQZXJjZW50KSAmJiB0aGlzLm56U3VjY2Vzc1BlcmNlbnQhID49IDEwMCkgfHwgdGhpcy5uelN1Y2Nlc3NQZXJjZW50ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHRoaXMuaW5mZXJyZWRTdGF0dXMgPSAnc3VjY2Vzcyc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaW5mZXJyZWRTdGF0dXMgPSB0aGlzLmNhY2hlZFN0YXR1cztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChuelN0YXR1cyB8fCBuelBlcmNlbnQgfHwgbnpTdWNjZXNzUGVyY2VudCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUljb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobnpTdHJva2VDb2xvcikge1xyXG4gICAgICB0aGlzLnNldFN0cm9rZUNvbG9yKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG56R2FwUG9zaXRpb24gfHwgbnpTdHJva2VMaW5lY2FwIHx8IG56R2FwRGVncmVlIHx8IG56VHlwZSB8fCBuelBlcmNlbnQgfHwgbnpTdHJva2VDb2xvcikge1xyXG4gICAgICB0aGlzLmdldENpcmNsZVBhdGhzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMubnpDb25maWdTZXJ2aWNlXHJcbiAgICAgIC5nZXRDb25maWdDaGFuZ2VFdmVudEZvckNvbXBvbmVudChOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVJY29uKCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdHJva2VDb2xvcigpO1xyXG4gICAgICAgIHRoaXMuZ2V0Q2lyY2xlUGF0aHMoKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVJY29uKCk6IHZvaWQge1xyXG4gICAgY29uc3QgcmV0ID0gc3RhdHVzSWNvbk5hbWVNYXAuZ2V0KHRoaXMuc3RhdHVzKTtcclxuICAgIHRoaXMuaWNvbiA9IHJldCA/IHJldCArICh0aGlzLmlzQ2lyY2xlU3R5bGUgPyAnLW8nIDogJy1jaXJjbGUtZmlsbCcpIDogJyc7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDYWxjdWxhdGUgcGF0aHMgd2hlbiB0aGUgdHlwZSBpcyBjaXJjbGUgb3IgZGFzaGJvYXJkLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgZ2V0Q2lyY2xlUGF0aHMoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuaXNDaXJjbGVTdHlsZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdmFsdWVzID0gaXNOb3ROaWwodGhpcy5uelN1Y2Nlc3NQZXJjZW50KSA/IFt0aGlzLm56U3VjY2Vzc1BlcmNlbnQhLCB0aGlzLm56UGVyY2VudF0gOiBbdGhpcy5uelBlcmNlbnRdO1xyXG5cclxuICAgIC8vIENhbGN1bGF0ZSBzaGFyZWQgc3R5bGVzLlxyXG4gICAgY29uc3QgcmFkaXVzID0gNTAgLSB0aGlzLnN0cm9rZVdpZHRoIC8gMjtcclxuICAgIGNvbnN0IGdhcFBvc2l0aW9uID0gdGhpcy5uekdhcFBvc2l0aW9uIHx8ICh0aGlzLm56VHlwZSA9PT0gJ2NpcmNsZScgPyAndG9wJyA6ICdib3R0b20nKTtcclxuICAgIGNvbnN0IGxlbiA9IE1hdGguUEkgKiAyICogcmFkaXVzO1xyXG4gICAgY29uc3QgZ2FwRGVncmVlID0gdGhpcy5uekdhcERlZ3JlZSB8fCAodGhpcy5uelR5cGUgPT09ICdjaXJjbGUnID8gMCA6IDc1KTtcclxuXHJcbiAgICBsZXQgYmVnaW5Qb3NpdGlvblggPSAwO1xyXG4gICAgbGV0IGJlZ2luUG9zaXRpb25ZID0gLXJhZGl1cztcclxuICAgIGxldCBlbmRQb3NpdGlvblggPSAwO1xyXG4gICAgbGV0IGVuZFBvc2l0aW9uWSA9IHJhZGl1cyAqIC0yO1xyXG5cclxuICAgIHN3aXRjaCAoZ2FwUG9zaXRpb24pIHtcclxuICAgICAgY2FzZSAnbGVmdCc6XHJcbiAgICAgICAgYmVnaW5Qb3NpdGlvblggPSAtcmFkaXVzO1xyXG4gICAgICAgIGJlZ2luUG9zaXRpb25ZID0gMDtcclxuICAgICAgICBlbmRQb3NpdGlvblggPSByYWRpdXMgKiAyO1xyXG4gICAgICAgIGVuZFBvc2l0aW9uWSA9IDA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3JpZ2h0JzpcclxuICAgICAgICBiZWdpblBvc2l0aW9uWCA9IHJhZGl1cztcclxuICAgICAgICBiZWdpblBvc2l0aW9uWSA9IDA7XHJcbiAgICAgICAgZW5kUG9zaXRpb25YID0gcmFkaXVzICogLTI7XHJcbiAgICAgICAgZW5kUG9zaXRpb25ZID0gMDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnYm90dG9tJzpcclxuICAgICAgICBiZWdpblBvc2l0aW9uWSA9IHJhZGl1cztcclxuICAgICAgICBlbmRQb3NpdGlvblkgPSByYWRpdXMgKiAyO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucGF0aFN0cmluZyA9IGBNIDUwLDUwIG0gJHtiZWdpblBvc2l0aW9uWH0sJHtiZWdpblBvc2l0aW9uWX1cclxuICAgICAgIGEgJHtyYWRpdXN9LCR7cmFkaXVzfSAwIDEgMSAke2VuZFBvc2l0aW9uWH0sJHstZW5kUG9zaXRpb25ZfVxyXG4gICAgICAgYSAke3JhZGl1c30sJHtyYWRpdXN9IDAgMSAxICR7LWVuZFBvc2l0aW9uWH0sJHtlbmRQb3NpdGlvbll9YDtcclxuXHJcbiAgICB0aGlzLnRyYWlsUGF0aFN0eWxlID0ge1xyXG4gICAgICBzdHJva2VEYXNoYXJyYXk6IGAke2xlbiAtIGdhcERlZ3JlZX1weCAke2xlbn1weGAsXHJcbiAgICAgIHN0cm9rZURhc2hvZmZzZXQ6IGAtJHtnYXBEZWdyZWUgLyAyfXB4YCxcclxuICAgICAgdHJhbnNpdGlvbjogJ3N0cm9rZS1kYXNob2Zmc2V0IC4zcyBlYXNlIDBzLCBzdHJva2UtZGFzaGFycmF5IC4zcyBlYXNlIDBzLCBzdHJva2UgLjNzJ1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgc3R5bGVzIGZvciBlYWNoIHBhdGguXHJcbiAgICB0aGlzLnByb2dyZXNzQ2lyY2xlUGF0aCA9IHZhbHVlc1xyXG4gICAgICAubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBpc1N1Y2Nlc3NQZXJjZW50ID0gdmFsdWVzLmxlbmd0aCA9PT0gMiAmJiBpbmRleCA9PT0gMDtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgc3Ryb2tlOiB0aGlzLmlzR3JhZGllbnQgJiYgIWlzU3VjY2Vzc1BlcmNlbnQgPyBgdXJsKCNncmFkaWVudC0ke3RoaXMuZ3JhZGllbnRJZH0pYCA6IG51bGwsXHJcbiAgICAgICAgICBzdHJva2VQYXRoU3R5bGU6IHtcclxuICAgICAgICAgICAgc3Ryb2tlOiAhdGhpcy5pc0dyYWRpZW50XHJcbiAgICAgICAgICAgICAgPyBpc1N1Y2Nlc3NQZXJjZW50XHJcbiAgICAgICAgICAgICAgICA/IHN0YXR1c0NvbG9yTWFwLmdldCgnc3VjY2VzcycpXHJcbiAgICAgICAgICAgICAgICA6ICh0aGlzLm56U3Ryb2tlQ29sb3IgYXMgc3RyaW5nKVxyXG4gICAgICAgICAgICAgIDogbnVsbCxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjpcclxuICAgICAgICAgICAgICAnc3Ryb2tlLWRhc2hvZmZzZXQgLjNzIGVhc2UgMHMsIHN0cm9rZS1kYXNoYXJyYXkgLjNzIGVhc2UgMHMsIHN0cm9rZSAuM3MsIHN0cm9rZS13aWR0aCAuMDZzIGVhc2UgLjNzJyxcclxuICAgICAgICAgICAgc3Ryb2tlRGFzaGFycmF5OiBgJHsoKHZhbHVlIHx8IDApIC8gMTAwKSAqIChsZW4gLSBnYXBEZWdyZWUpfXB4ICR7bGVufXB4YCxcclxuICAgICAgICAgICAgc3Ryb2tlRGFzaG9mZnNldDogYC0ke2dhcERlZ3JlZSAvIDJ9cHhgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgfSlcclxuICAgICAgLnJldmVyc2UoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0U3Ryb2tlQ29sb3IoKTogdm9pZCB7XHJcbiAgICBjb25zdCBjb2xvciA9IHRoaXMubnpTdHJva2VDb2xvcjtcclxuICAgIGNvbnN0IGlzR3JhZGllbnQgPSAodGhpcy5pc0dyYWRpZW50ID0gISFjb2xvciAmJiB0eXBlb2YgY29sb3IgIT09ICdzdHJpbmcnKTtcclxuICAgIGlmIChpc0dyYWRpZW50ICYmICF0aGlzLmlzQ2lyY2xlU3R5bGUpIHtcclxuICAgICAgdGhpcy5saW5lR3JhZGllbnQgPSBoYW5kbGVMaW5lYXJHcmFkaWVudChjb2xvciBhcyBOelByb2dyZXNzQ29sb3JHcmFkaWVudCk7XHJcbiAgICB9IGVsc2UgaWYgKGlzR3JhZGllbnQgJiYgdGhpcy5pc0NpcmNsZVN0eWxlKSB7XHJcbiAgICAgIHRoaXMuY2lyY2xlR3JhZGllbnQgPSBoYW5kbGVDaXJjbGVHcmFkaWVudCh0aGlzLm56U3Ryb2tlQ29sb3IgYXMgTnpQcm9ncmVzc0dyYWRpZW50UHJvZ3Jlc3MpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5saW5lR3JhZGllbnQgPSBudWxsO1xyXG4gICAgICB0aGlzLmNpcmNsZUdyYWRpZW50ID0gW107XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==
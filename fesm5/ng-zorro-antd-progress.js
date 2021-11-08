import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, NgModule } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { __rest, __decorate, __metadata } from 'tslib';
import { isNotNil, NzConfigService, WithConfig, InputNumber } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

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
/**
 * @param {?} percent
 * @return {?}
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from 'ng-zorro-antd/icon';

function NzProgressComponent_ng_template_0_span_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelement(1, "i", 8);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r5 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzType", ctx_r5.icon);
} }
function NzProgressComponent_ng_template_0_span_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtext(0);
} if (rf & 2) {
    var ctx_r7 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r7.formatter(ctx_r7.nzPercent), " ");
} }
function NzProgressComponent_ng_template_0_span_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 5);
    ɵngcc0.ɵɵtemplate(1, NzProgressComponent_ng_template_0_span_0_ng_container_1_Template, 2, 1, "ng-container", 6);
    ɵngcc0.ɵɵtemplate(2, NzProgressComponent_ng_template_0_span_0_ng_template_2_Template, 1, 1, "ng-template", null, 7, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var _r6 = ɵngcc0.ɵɵreference(3);
    var ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.status === "exception" || ctx_r4.status === "success" && !ctx_r4.nzFormat)("ngIfElse", _r6);
} }
function NzProgressComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NzProgressComponent_ng_template_0_span_0_Template, 4, 2, "span", 4);
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.nzShowInfo);
} }
function NzProgressComponent_div_3_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 14);
} if (rf & 2) {
    var ctx_r8 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵstyleProp("width", ctx_r8.nzSuccessPercent, "%")("border-radius", ctx_r8.nzStrokeLinecap === "round" ? "100px" : "0")("height", ctx_r8.strokeWidth, "px");
} }
function NzProgressComponent_div_3_ng_template_5_Template(rf, ctx) { }
function NzProgressComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementStart(1, "div", 9);
    ɵngcc0.ɵɵelementStart(2, "div", 10);
    ɵngcc0.ɵɵelement(3, "div", 11);
    ɵngcc0.ɵɵtemplate(4, NzProgressComponent_div_3_div_4_Template, 1, 6, "div", 12);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(5, NzProgressComponent_div_3_ng_template_5_Template, 0, 0, "ng-template", 13);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    var _r0 = ɵngcc0.ɵɵreference(1);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵstyleProp("width", ctx_r2.nzPercent, "%")("border-radius", ctx_r2.nzStrokeLinecap === "round" ? "100px" : "0")("background", !ctx_r2.isGradient ? ctx_r2.nzStrokeColor : null, ɵngcc0.ɵɵdefaultStyleSanitizer)("background-image", ctx_r2.isGradient ? ctx_r2.lineGradient : null, ɵngcc0.ɵɵdefaultStyleSanitizer)("height", ctx_r2.strokeWidth, "px");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.nzSuccessPercent || ctx_r2.nzSuccessPercent === 0);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r0);
} }
function NzProgressComponent_div_4__svg_defs_2__svg_stop_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelement(0, "stop");
} if (rf & 2) {
    var i_r14 = ctx.$implicit;
    ɵngcc0.ɵɵattribute("offset", i_r14.offset)("stop-color", i_r14.color);
} }
function NzProgressComponent_div_4__svg_defs_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "defs");
    ɵngcc0.ɵɵelementStart(1, "linearGradient", 18);
    ɵngcc0.ɵɵtemplate(2, NzProgressComponent_div_4__svg_defs_2__svg_stop_2_Template, 1, 2, "stop", 19);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r10 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("id", "gradient-" + ctx_r10.gradientId);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r10.circleGradient);
} }
function NzProgressComponent_div_4__svg_path_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelement(0, "path", 20);
} if (rf & 2) {
    var p_r15 = ctx.$implicit;
    var ctx_r11 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngStyle", p_r15.strokePathStyle);
    ɵngcc0.ɵɵattribute("d", ctx_r11.pathString)("stroke-linecap", ctx_r11.nzStrokeLinecap)("stroke", p_r15.stroke)("stroke-width", ctx_r11.nzPercent ? ctx_r11.strokeWidth : 0);
} }
function NzProgressComponent_div_4_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
} }
function NzProgressComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 10);
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(1, "svg", 15);
    ɵngcc0.ɵɵtemplate(2, NzProgressComponent_div_4__svg_defs_2_Template, 3, 2, "defs", 2);
    ɵngcc0.ɵɵelement(3, "path", 16);
    ɵngcc0.ɵɵtemplate(4, NzProgressComponent_div_4__svg_path_4_Template, 1, 5, "path", 17);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(5, NzProgressComponent_div_4_ng_template_5_Template, 0, 0, "ng-template", 13);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext();
    var _r0 = ɵngcc0.ɵɵreference(1);
    ɵngcc0.ɵɵstyleProp("width", ctx_r3.nzWidth, "px")("height", ctx_r3.nzWidth, "px")("font-size", ctx_r3.nzWidth * 0.15 + 6, "px");
    ɵngcc0.ɵɵclassProp("ant-progress-circle-gradient", ctx_r3.isGradient);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.isGradient);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r3.trailPathStyle);
    ɵngcc0.ɵɵattribute("stroke-width", ctx_r3.strokeWidth)("d", ctx_r3.pathString);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r3.progressCirclePath)("ngForTrackBy", ctx_r3.trackByFn);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r0);
} }
function stripPercentToNumber(percent) {
    return +percent.replace('%', '');
}
/** @type {?} */
var sortGradient = (/**
 * @param {?} gradients
 * @return {?}
 */
function (gradients) {
    /** @type {?} */
    var tempArr = [];
    Object.keys(gradients).forEach((/**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var value = gradients[key];
        /** @type {?} */
        var formatKey = stripPercentToNumber(key);
        if (isNaN(formatKey)) {
            return {};
        }
        tempArr.push({
            key: formatKey,
            value: value
        });
    }));
    tempArr = tempArr.sort((/**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function (a, b) { return a.key - b.key; }));
    return tempArr;
});
/** @type {?} */
var handleCircleGradient = (/**
 * @param {?} strokeColor
 * @return {?}
 */
function (strokeColor) {
    return sortGradient(strokeColor).map((/**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var key = _a.key, value = _a.value;
        return ({ offset: key + "%", color: value });
    }));
});
/** @type {?} */
var handleLinearGradient = (/**
 * @param {?} strokeColor
 * @return {?}
 */
function (strokeColor) {
    var _a = strokeColor.from, from = _a === void 0 ? '#1890ff' : _a, _b = strokeColor.to, to = _b === void 0 ? '#1890ff' : _b, _c = strokeColor.direction, direction = _c === void 0 ? 'to right' : _c, rest = __rest(strokeColor, ["from", "to", "direction"]);
    if (Object.keys(rest).length !== 0) {
        /** @type {?} */
        var sortedGradients = sortGradient((/** @type {?} */ (rest)))
            .map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var key = _a.key, value = _a.value;
            return value + " " + key + "%";
        }))
            .join(', ');
        return "linear-gradient(" + direction + ", " + sortedGradients + ")";
    }
    return "linear-gradient(" + direction + ", " + from + ", " + to + ")";
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, true),
        __metadata("design:type", Boolean)
    ], NzProgressComponent.prototype, "nzShowInfo", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", Object)
    ], NzProgressComponent.prototype, "nzStrokeColor", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, 'default'),
        __metadata("design:type", String)
    ], NzProgressComponent.prototype, "nzSize", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Number)
    ], NzProgressComponent.prototype, "nzSuccessPercent", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Number)
    ], NzProgressComponent.prototype, "nzPercent", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME), InputNumber(),
        __metadata("design:type", Number)
    ], NzProgressComponent.prototype, "nzStrokeWidth", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME), InputNumber(),
        __metadata("design:type", Number)
    ], NzProgressComponent.prototype, "nzGapDegree", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, 'top'),
        __metadata("design:type", String)
    ], NzProgressComponent.prototype, "nzGapPosition", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, 'round'),
        __metadata("design:type", String)
    ], NzProgressComponent.prototype, "nzStrokeLinecap", void 0);
NzProgressComponent.ɵfac = function NzProgressComponent_Factory(t) { return new (t || NzProgressComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzConfigService)); };
NzProgressComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzProgressComponent, selectors: [["nz-progress"]], inputs: { nzWidth: "nzWidth", nzPercent: "nzPercent", nzType: "nzType", nzShowInfo: "nzShowInfo", nzStrokeColor: "nzStrokeColor", nzSize: "nzSize", nzFormat: "nzFormat", nzSuccessPercent: "nzSuccessPercent", nzStrokeWidth: "nzStrokeWidth", nzGapDegree: "nzGapDegree", nzStatus: "nzStatus", nzGapPosition: "nzGapPosition", nzStrokeLinecap: "nzStrokeLinecap" }, exportAs: ["nzProgress"], features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 5, vars: 11, consts: [["progressInfoTemplate", ""], [3, "ngClass"], [4, "ngIf"], ["class", "ant-progress-inner", 3, "width", "height", "fontSize", "ant-progress-circle-gradient", 4, "ngIf"], ["class", "ant-progress-text", 4, "ngIf"], [1, "ant-progress-text"], [4, "ngIf", "ngIfElse"], ["formatTemplate", ""], ["nz-icon", "", 3, "nzType"], [1, "ant-progress-outer"], [1, "ant-progress-inner"], [1, "ant-progress-bg"], ["class", "ant-progress-success-bg", 3, "width", "border-radius", "height", 4, "ngIf"], [3, "ngTemplateOutlet"], [1, "ant-progress-success-bg"], ["viewBox", "0 0 100 100", 1, "ant-progress-circle"], ["stroke", "#f3f3f3", "fill-opacity", "0", 1, "ant-progress-circle-trail", 3, "ngStyle"], ["class", "ant-progress-circle-path", "fill-opacity", "0", 3, "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["x1", "100%", "y1", "0%", "x2", "0%", "y2", "0%", 3, "id"], [4, "ngFor", "ngForOf"], ["fill-opacity", "0", 1, "ant-progress-circle-path", 3, "ngStyle"]], template: function NzProgressComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzProgressComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵelementStart(2, "div", 1);
        ɵngcc0.ɵɵtemplate(3, NzProgressComponent_div_3_Template, 6, 12, "div", 2);
        ɵngcc0.ɵɵtemplate(4, NzProgressComponent_div_4_Template, 6, 15, "div", 3);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassProp("ant-progress-line", ctx.nzType == "line")("ant-progress-small", ctx.nzSize == "small")("ant-progress-show-info", ctx.nzShowInfo)("ant-progress-circle", ctx.isCircleStyle);
        ɵngcc0.ɵɵproperty("ngClass", "ant-progress ant-progress-status-" + ctx.status);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzType === "line");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.isCircleStyle);
    } }, directives: [ɵngcc2.NgClass, ɵngcc2.NgIf, ɵngcc3.NzIconDirective, ɵngcc2.NgTemplateOutlet, ɵngcc2.NgStyle, ɵngcc2.NgForOf], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzProgressComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-progress',
                exportAs: 'nzProgress',
                preserveWhitespaces: false,
                template: "<ng-template #progressInfoTemplate>\r\n  <span class=\"ant-progress-text\"\r\n        *ngIf=\"nzShowInfo\">\r\n    <ng-container *ngIf=\"status === 'exception' || (status === 'success' && !nzFormat); else formatTemplate\">\r\n      <i nz-icon\r\n         [nzType]=\"icon\"></i>\r\n    </ng-container>\r\n    <ng-template #formatTemplate>\r\n      {{ formatter(nzPercent) }}\r\n    </ng-template>\r\n  </span>\r\n</ng-template>\r\n\r\n<div [ngClass]=\"'ant-progress ant-progress-status-' + status\"\r\n     [class.ant-progress-line]=\"nzType == 'line'\"\r\n     [class.ant-progress-small]=\"nzSize == 'small'\"\r\n     [class.ant-progress-show-info]=\"nzShowInfo\"\r\n     [class.ant-progress-circle]=\"isCircleStyle\">\r\n  <!-- line progress -->\r\n  <div *ngIf=\"nzType === 'line'\">\r\n    <div class=\"ant-progress-outer\">\r\n      <div class=\"ant-progress-inner\">\r\n        <div class=\"ant-progress-bg\"\r\n             [style.width.%]=\"nzPercent\"\r\n             [style.border-radius]=\"nzStrokeLinecap === 'round' ? '100px' : '0'\"\r\n             [style.background]=\"!isGradient ? nzStrokeColor : null\"\r\n             [style.background-image]=\"isGradient ? lineGradient : null\"\r\n             [style.height.px]=\"strokeWidth\"></div>\r\n        <div *ngIf=\"nzSuccessPercent || nzSuccessPercent === 0\"\r\n             class=\"ant-progress-success-bg\"\r\n             [style.width.%]=\"nzSuccessPercent\"\r\n             [style.border-radius]=\"nzStrokeLinecap === 'round' ? '100px' : '0'\"\r\n             [style.height.px]=\"strokeWidth\"></div>\r\n      </div>\r\n    </div>\r\n    <ng-template [ngTemplateOutlet]=\"progressInfoTemplate\"></ng-template>\r\n  </div>\r\n\r\n  <!-- circle / dashboard progress -->\r\n  <div [style.width.px]=\"this.nzWidth\"\r\n       [style.height.px]=\"this.nzWidth\"\r\n       [style.fontSize.px]=\"this.nzWidth * 0.15 + 6\"\r\n       class=\"ant-progress-inner\"\r\n       [class.ant-progress-circle-gradient]=\"isGradient\"\r\n       *ngIf=\"isCircleStyle\">\r\n    <svg class=\"ant-progress-circle \"\r\n         viewBox=\"0 0 100 100\">\r\n      <defs *ngIf=\"isGradient\">\r\n        <linearGradient [id]=\"'gradient-' + gradientId\"\r\n                        x1=\"100%\"\r\n                        y1=\"0%\"\r\n                        x2=\"0%\"\r\n                        y2=\"0%\">\r\n          <stop *ngFor=\"let i of circleGradient;\"\r\n                [attr.offset]=\"i.offset\"\r\n                [attr.stop-color]=\"i.color\"></stop>\r\n        </linearGradient>\r\n      </defs>\r\n      <path class=\"ant-progress-circle-trail\"\r\n            stroke=\"#f3f3f3\"\r\n            fill-opacity=\"0\"\r\n            [attr.stroke-width]=\"strokeWidth\"\r\n            [attr.d]=\"pathString\"\r\n            [ngStyle]=\"trailPathStyle\"></path>\r\n      <path *ngFor=\"let p of progressCirclePath; trackBy: trackByFn\"\r\n            class=\"ant-progress-circle-path\"\r\n            fill-opacity=\"0\"\r\n            [attr.d]=\"pathString\"\r\n            [attr.stroke-linecap]=\"nzStrokeLinecap\"\r\n            [attr.stroke]=\"p.stroke\"\r\n            [attr.stroke-width]=\"nzPercent ? strokeWidth : 0\"\r\n            [ngStyle]=\"p.strokePathStyle\">\r\n      </path>\r\n    </svg>\r\n    <ng-template [ngTemplateOutlet]=\"progressInfoTemplate\"></ng-template>\r\n  </div>\r\n</div>\r\n"
            }]
    }], function () { return [{ type: ɵngcc1.NzConfigService }]; }, { nzWidth: [{
            type: Input
        }], nzPercent: [{
            type: Input
        }], nzType: [{
            type: Input
        }], nzShowInfo: [{
            type: Input
        }], nzStrokeColor: [{
            type: Input
        }], nzSize: [{
            type: Input
        }], nzFormat: [{
            type: Input
        }], nzSuccessPercent: [{
            type: Input
        }], nzStrokeWidth: [{
            type: Input
        }], nzGapDegree: [{
            type: Input
        }], nzStatus: [{
            type: Input
        }], nzGapPosition: [{
            type: Input
        }], nzStrokeLinecap: [{
            type: Input
        }] }); })();
    return NzProgressComponent;
}());
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzProgressModule = /** @class */ (function () {
    function NzProgressModule() {
    }
NzProgressModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzProgressModule });
NzProgressModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzProgressModule_Factory(t) { return new (t || NzProgressModule)(); }, imports: [[CommonModule, NzIconModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzProgressModule, { declarations: function () { return [NzProgressComponent]; }, imports: function () { return [CommonModule, NzIconModule]; }, exports: function () { return [NzProgressComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzProgressModule, [{
        type: NgModule,
        args: [{
                exports: [NzProgressComponent],
                declarations: [NzProgressComponent],
                imports: [CommonModule, NzIconModule]
            }]
    }], function () { return []; }, null); })();
    return NzProgressModule;
}());

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
/**
 * @record
 */
function NzProgressGradientProgress() { }
/**
 * @record
 */
function NzProgressGradientFromTo() { }
if (false) {
    /** @type {?} */
    NzProgressGradientFromTo.prototype.from;
    /** @type {?} */
    NzProgressGradientFromTo.prototype.to;
}
/**
 * @record
 */
function NzProgressCirclePath() { }
if (false) {
    /** @type {?} */
    NzProgressCirclePath.prototype.stroke;
    /** @type {?} */
    NzProgressCirclePath.prototype.strokePathStyle;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzProgressComponent, NzProgressModule };


//# sourceMappingURL=ng-zorro-antd-progress.js.map
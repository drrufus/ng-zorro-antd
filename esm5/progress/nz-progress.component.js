import { __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { InputNumber, isNotNil, NzConfigService, WithConfig } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { handleCircleGradient, handleLinearGradient } from './nz-progress-utils';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/icon";
function NzProgressComponent_ng_template_0_span_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "i", 8);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r671 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzType", ctx_r671.icon);
} }
function NzProgressComponent_ng_template_0_span_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    var ctx_r673 = i0.ɵɵnextContext(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r673.formatter(ctx_r673.nzPercent), " ");
} }
function NzProgressComponent_ng_template_0_span_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 5);
    i0.ɵɵtemplate(1, NzProgressComponent_ng_template_0_span_0_ng_container_1_Template, 2, 1, "ng-container", 6);
    i0.ɵɵtemplate(2, NzProgressComponent_ng_template_0_span_0_ng_template_2_Template, 1, 1, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var _r672 = i0.ɵɵreference(3);
    var ctx_r670 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r670.status === "exception" || ctx_r670.status === "success" && !ctx_r670.nzFormat)("ngIfElse", _r672);
} }
function NzProgressComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NzProgressComponent_ng_template_0_span_0_Template, 4, 2, "span", 4);
} if (rf & 2) {
    var ctx_r667 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r667.nzShowInfo);
} }
function NzProgressComponent_div_3_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 14);
} if (rf & 2) {
    var ctx_r674 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("width", ctx_r674.nzSuccessPercent, "%")("border-radius", ctx_r674.nzStrokeLinecap === "round" ? "100px" : "0")("height", ctx_r674.strokeWidth, "px");
} }
function NzProgressComponent_div_3_ng_template_5_Template(rf, ctx) { }
function NzProgressComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "div", 9);
    i0.ɵɵelementStart(2, "div", 10);
    i0.ɵɵelement(3, "div", 11);
    i0.ɵɵtemplate(4, NzProgressComponent_div_3_div_4_Template, 1, 3, "div", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, NzProgressComponent_div_3_ng_template_5_Template, 0, 0, "ng-template", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r668 = i0.ɵɵnextContext();
    var _r666 = i0.ɵɵreference(1);
    i0.ɵɵadvance(3);
    i0.ɵɵstyleSanitizer(i0.ɵɵdefaultStyleSanitizer);
    i0.ɵɵstyleProp("width", ctx_r668.nzPercent, "%")("border-radius", ctx_r668.nzStrokeLinecap === "round" ? "100px" : "0")("background", !ctx_r668.isGradient ? ctx_r668.nzStrokeColor : null)("background-image", ctx_r668.isGradient ? ctx_r668.lineGradient : null)("height", ctx_r668.strokeWidth, "px");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r668.nzSuccessPercent || ctx_r668.nzSuccessPercent === 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r666);
} }
function NzProgressComponent_div_4__svg_defs_2__svg_stop_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "stop");
} if (rf & 2) {
    var i_r680 = ctx.$implicit;
    i0.ɵɵattribute("offset", i_r680.offset)("stop-color", i_r680.color);
} }
function NzProgressComponent_div_4__svg_defs_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "defs");
    i0.ɵɵelementStart(1, "linearGradient", 18);
    i0.ɵɵtemplate(2, NzProgressComponent_div_4__svg_defs_2__svg_stop_2_Template, 1, 2, "stop", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r676 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("id", "gradient-" + ctx_r676.gradientId);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r676.circleGradient);
} }
function NzProgressComponent_div_4__svg_path_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "path", 20);
} if (rf & 2) {
    var p_r681 = ctx.$implicit;
    var ctx_r677 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngStyle", p_r681.strokePathStyle);
    i0.ɵɵattribute("d", ctx_r677.pathString)("stroke-linecap", ctx_r677.nzStrokeLinecap)("stroke", p_r681.stroke)("stroke-width", ctx_r677.nzPercent ? ctx_r677.strokeWidth : 0);
} }
function NzProgressComponent_div_4_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
} }
function NzProgressComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 15);
    i0.ɵɵtemplate(2, NzProgressComponent_div_4__svg_defs_2_Template, 3, 2, "defs", 2);
    i0.ɵɵelement(3, "path", 16);
    i0.ɵɵtemplate(4, NzProgressComponent_div_4__svg_path_4_Template, 1, 5, "path", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, NzProgressComponent_div_4_ng_template_5_Template, 0, 0, "ng-template", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r669 = i0.ɵɵnextContext();
    var _r666 = i0.ɵɵreference(1);
    i0.ɵɵstyleProp("width", ctx_r669.nzWidth, "px")("height", ctx_r669.nzWidth, "px")("font-size", ctx_r669.nzWidth * 0.15 + 6, "px");
    i0.ɵɵclassProp("ant-progress-circle-gradient", ctx_r669.isGradient);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r669.isGradient);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", ctx_r669.trailPathStyle);
    i0.ɵɵattribute("stroke-width", ctx_r669.strokeWidth)("d", ctx_r669.pathString);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r669.progressCirclePath)("ngForTrackBy", ctx_r669.trackByFn);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r666);
} }
var gradientIdSeed = 0;
var NZ_CONFIG_COMPONENT_NAME = 'progress';
var statusIconNameMap = new Map([
    ['success', 'check'],
    ['exception', 'close']
]);
var statusColorMap = new Map([
    ['normal', '#108ee9'],
    ['exception', '#ff5500'],
    ['success', '#87d068']
]);
var defaultFormatter = function (p) { return p + "%"; };
var NzProgressComponent = /** @class */ (function () {
    function NzProgressComponent(nzConfigService) {
        this.nzConfigService = nzConfigService;
        this.nzWidth = 132;
        this.nzPercent = 0;
        this.nzType = 'line';
        /** Gradient style when `nzType` is `line`. */
        this.lineGradient = null;
        /** If user uses gradient color. */
        this.isGradient = false;
        /**
         * Each progress whose `nzType` is circle or dashboard should have unique id to
         * define `<linearGradient>`.
         */
        this.gradientId = gradientIdSeed++;
        /** Paths to rendered in the template. */
        this.progressCirclePath = [];
        this.trackByFn = function (index) { return "" + index; };
        this.cachedStatus = 'normal';
        this.inferredStatus = 'normal';
        this.destroy$ = new Subject();
    }
    Object.defineProperty(NzProgressComponent.prototype, "formatter", {
        get: function () {
            return this.nzFormat || defaultFormatter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzProgressComponent.prototype, "status", {
        get: function () {
            return this.nzStatus || this.inferredStatus;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzProgressComponent.prototype, "strokeWidth", {
        get: function () {
            return this.nzStrokeWidth || (this.nzType === 'line' && this.nzSize !== 'small' ? 8 : 6);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzProgressComponent.prototype, "isCircleStyle", {
        get: function () {
            return this.nzType === 'circle' || this.nzType === 'dashboard';
        },
        enumerable: true,
        configurable: true
    });
    NzProgressComponent.prototype.ngOnChanges = function (changes) {
        var nzGapPosition = changes.nzGapPosition, nzStrokeLinecap = changes.nzStrokeLinecap, nzStrokeColor = changes.nzStrokeColor, nzGapDegree = changes.nzGapDegree, nzType = changes.nzType, nzStatus = changes.nzStatus, nzPercent = changes.nzPercent, nzSuccessPercent = changes.nzSuccessPercent;
        if (nzStatus) {
            this.cachedStatus = this.nzStatus || this.cachedStatus;
        }
        if (nzPercent || nzSuccessPercent) {
            var fillAll = parseInt(this.nzPercent.toString(), 10) >= 100;
            if (fillAll) {
                if ((isNotNil(this.nzSuccessPercent) && this.nzSuccessPercent >= 100) || this.nzSuccessPercent === undefined) {
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
    NzProgressComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe(function () {
            _this.updateIcon();
            _this.setStrokeColor();
            _this.getCirclePaths();
        });
    };
    NzProgressComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzProgressComponent.prototype.updateIcon = function () {
        var ret = statusIconNameMap.get(this.status);
        this.icon = ret ? ret + (this.isCircleStyle ? '-o' : '-circle-fill') : '';
    };
    /**
     * Calculate paths when the type is circle or dashboard.
     */
    NzProgressComponent.prototype.getCirclePaths = function () {
        var _this = this;
        if (!this.isCircleStyle) {
            return;
        }
        var values = isNotNil(this.nzSuccessPercent) ? [this.nzSuccessPercent, this.nzPercent] : [this.nzPercent];
        // Calculate shared styles.
        var radius = 50 - this.strokeWidth / 2;
        var gapPosition = this.nzGapPosition || (this.nzType === 'circle' ? 'top' : 'bottom');
        var len = Math.PI * 2 * radius;
        var gapDegree = this.nzGapDegree || (this.nzType === 'circle' ? 0 : 75);
        var beginPositionX = 0;
        var beginPositionY = -radius;
        var endPositionX = 0;
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
            .map(function (value, index) {
            var isSuccessPercent = values.length === 2 && index === 0;
            return {
                stroke: _this.isGradient && !isSuccessPercent ? "url(#gradient-" + _this.gradientId + ")" : null,
                strokePathStyle: {
                    stroke: !_this.isGradient ? (isSuccessPercent ? statusColorMap.get('success') : _this.nzStrokeColor) : null,
                    transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s',
                    strokeDasharray: ((value || 0) / 100) * (len - gapDegree) + "px " + len + "px",
                    strokeDashoffset: "-" + gapDegree / 2 + "px"
                }
            };
        })
            .reverse();
    };
    NzProgressComponent.prototype.setStrokeColor = function () {
        var color = this.nzStrokeColor;
        var isGradient = (this.isGradient = !!color && typeof color !== 'string');
        if (isGradient && !this.isCircleStyle) {
            this.lineGradient = handleLinearGradient(color);
        }
        else if (isGradient && this.isCircleStyle) {
            this.circleGradient = handleCircleGradient(this.nzStrokeColor);
        }
        else {
            this.lineGradient = null;
            this.circleGradient = [];
        }
    };
    /** @nocollapse */ NzProgressComponent.ɵfac = function NzProgressComponent_Factory(t) { return new (t || NzProgressComponent)(i0.ɵɵdirectiveInject(i1.NzConfigService)); };
    /** @nocollapse */ NzProgressComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzProgressComponent, selectors: [["nz-progress"]], inputs: { nzShowInfo: "nzShowInfo", nzWidth: "nzWidth", nzStrokeColor: "nzStrokeColor", nzSize: "nzSize", nzFormat: "nzFormat", nzSuccessPercent: "nzSuccessPercent", nzPercent: "nzPercent", nzStrokeWidth: "nzStrokeWidth", nzGapDegree: "nzGapDegree", nzStatus: "nzStatus", nzType: "nzType", nzGapPosition: "nzGapPosition", nzStrokeLinecap: "nzStrokeLinecap" }, exportAs: ["nzProgress"], features: [i0.ɵɵNgOnChangesFeature()], decls: 5, vars: 7, consts: [["progressInfoTemplate", ""], [3, "ngClass"], [4, "ngIf"], ["class", "ant-progress-inner", 3, "width", "height", "fontSize", "ant-progress-circle-gradient", 4, "ngIf"], ["class", "ant-progress-text", 4, "ngIf"], [1, "ant-progress-text"], [4, "ngIf", "ngIfElse"], ["formatTemplate", ""], ["nz-icon", "", 3, "nzType"], [1, "ant-progress-outer"], [1, "ant-progress-inner"], [1, "ant-progress-bg"], ["class", "ant-progress-success-bg", 3, "width", "border-radius", "height", 4, "ngIf"], [3, "ngTemplateOutlet"], [1, "ant-progress-success-bg"], ["viewBox", "0 0 100 100", 1, "ant-progress-circle"], ["stroke", "#f3f3f3", "fill-opacity", "0", 1, "ant-progress-circle-trail", 3, "ngStyle"], ["class", "ant-progress-circle-path", "fill-opacity", "0", 3, "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["x1", "100%", "y1", "0%", "x2", "0%", "y2", "0%", 3, "id"], [4, "ngFor", "ngForOf"], ["fill-opacity", "0", 1, "ant-progress-circle-path", 3, "ngStyle"]], template: function NzProgressComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, NzProgressComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementStart(2, "div", 1);
            i0.ɵɵtemplate(3, NzProgressComponent_div_3_Template, 6, 7, "div", 2);
            i0.ɵɵtemplate(4, NzProgressComponent_div_4_Template, 6, 11, "div", 3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("ant-progress-line", ctx.nzType == "line")("ant-progress-small", ctx.nzSize == "small")("ant-progress-show-info", ctx.nzShowInfo)("ant-progress-circle", ctx.isCircleStyle);
            i0.ɵɵproperty("ngClass", "ant-progress ant-progress-status-" + ctx.status);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.nzType === "line");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.isCircleStyle);
        } }, directives: [i2.NgClass, i2.NgIf, i3.NzIconDirective, i2.NgTemplateOutlet, i2.NgStyle, i2.NgForOf], encapsulation: 2, changeDetection: 0 });
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
    return NzProgressComponent;
}());
export { NzProgressComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzProgressComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-progress',
                exportAs: 'nzProgress',
                preserveWhitespaces: false,
                templateUrl: './nz-progress.component.html'
            }]
    }], function () { return [{ type: i1.NzConfigService }]; }, { nzShowInfo: [{
            type: Input
        }], nzWidth: [{
            type: Input
        }], nzStrokeColor: [{
            type: Input
        }], nzSize: [{
            type: Input
        }], nzFormat: [{
            type: Input
        }], nzSuccessPercent: [{
            type: Input
        }], nzPercent: [{
            type: Input
        }], nzStrokeWidth: [{
            type: Input
        }], nzGapDegree: [{
            type: Input
        }], nzStatus: [{
            type: Input
        }], nzType: [{
            type: Input
        }], nzGapPosition: [{
            type: Input
        }], nzStrokeLinecap: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcHJvZ3Jlc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9wcm9ncmVzcy8iLCJzb3VyY2VzIjpbIm56LXByb2dyZXNzLmNvbXBvbmVudC50cyIsIm56LXByb2dyZXNzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBK0MsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUksT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQW9CLGVBQWUsRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUxRyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7O0lDWjdFLDZCQUdFO0lBQUEsdUJBQStCO0lBQ2pDLDBCQUFlOzs7SUFERixlQUFlO0lBQWYsc0NBQWU7OztJQUcxQixZQUNGOzs7SUFERSx1RUFDRjs7O0lBUkYsK0JBQ0U7SUFBQSwyR0FHRTtJQUVGLDBJQUNFO0lBRUosaUJBQU87Ozs7SUFQSCxlQUEwRjtJQUExRiw2R0FBMEYsbUJBQUE7OztJQUY5RixvRkFDRTs7O0lBRDhCLDBDQUFrQjs7O0lBK0I1QywwQkFNTzs7O0lBSEwsdURBQWtDLHVFQUFBLHNDQUFBOzs7O0lBZDFDLDJCQUNFO0lBQUEsOEJBQ0U7SUFBQSwrQkFDRTtJQUFBLDBCQU9PO0lBQ1AsMkVBTUM7SUFDSCxpQkFBTTtJQUNSLGlCQUFNO0lBQ04sMkZBQXVEO0lBQ3pELGlCQUFNOzs7O0lBaEJFLGVBQTJCO0lBQTNCLCtDQUEyQjtJQUEzQixnREFBMkIsdUVBQUEsb0VBQUEsd0VBQUEsc0NBQUE7SUFP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O0lBRTlEO1FBQWQsV0FBVyxFQUFFOztpRUFBMkI7SUFDMUI7UUFBZCxXQUFXLEVBQUU7OzBEQUF1QjtJQUNnQjtRQUFwRCxVQUFVLENBQUMsd0JBQXdCLENBQUMsRUFBRSxXQUFXLEVBQUU7OzhEQUF1QjtJQUN0QjtRQUFwRCxVQUFVLENBQUMsd0JBQXdCLENBQUMsRUFBRSxXQUFXLEVBQUU7OzREQUFxQjtJQUc1QjtRQUE1QyxVQUFVLENBQUMsd0JBQXdCLEVBQUUsS0FBSyxDQUFDOzs4REFBMEM7SUFDdkM7UUFBOUMsVUFBVSxDQUFDLHdCQUF3QixFQUFFLE9BQU8sQ0FBQzs7Z0VBQThDOzhCQTlEdkc7Q0FtUEMsQUExTUQsSUEwTUM7U0FsTVksbUJBQW1CO2tEQUFuQixtQkFBbUI7Y0FSL0IsU0FBUztlQUFDO2dCQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRSxZQUFZO2dCQUN0QixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixXQUFXLEVBQUUsOEJBQThCO2FBQzVDOztrQkFFRSxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcywgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IElucHV0TnVtYmVyLCBpc05vdE5pbCwgTmdTdHlsZUludGVyZmFjZSwgTnpDb25maWdTZXJ2aWNlLCBXaXRoQ29uZmlnIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBoYW5kbGVDaXJjbGVHcmFkaWVudCwgaGFuZGxlTGluZWFyR3JhZGllbnQgfSBmcm9tICcuL256LXByb2dyZXNzLXV0aWxzJztcclxuaW1wb3J0IHtcclxuICBOelByb2dyZXNzQ2lyY2xlUGF0aCxcclxuICBOelByb2dyZXNzQ29sb3JHcmFkaWVudCxcclxuICBOelByb2dyZXNzRm9ybWF0dGVyLFxyXG4gIE56UHJvZ3Jlc3NHYXBQb3NpdGlvblR5cGUsXHJcbiAgTnpQcm9ncmVzc0dyYWRpZW50UHJvZ3Jlc3MsXHJcbiAgTnpQcm9ncmVzc1N0YXR1c1R5cGUsXHJcbiAgTnpQcm9ncmVzc1N0cm9rZUNvbG9yVHlwZSxcclxuICBOelByb2dyZXNzU3Ryb2tlTGluZWNhcFR5cGUsXHJcbiAgTnpQcm9ncmVzc1R5cGVUeXBlXHJcbn0gZnJvbSAnLi9uei1wcm9ncmVzcy5kZWZpbml0aW9ucyc7XHJcblxyXG5sZXQgZ3JhZGllbnRJZFNlZWQgPSAwO1xyXG5cclxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ3Byb2dyZXNzJztcclxuY29uc3Qgc3RhdHVzSWNvbk5hbWVNYXAgPSBuZXcgTWFwKFtcclxuICBbJ3N1Y2Nlc3MnLCAnY2hlY2snXSxcclxuICBbJ2V4Y2VwdGlvbicsICdjbG9zZSddXHJcbl0pO1xyXG5jb25zdCBzdGF0dXNDb2xvck1hcCA9IG5ldyBNYXAoW1xyXG4gIFsnbm9ybWFsJywgJyMxMDhlZTknXSxcclxuICBbJ2V4Y2VwdGlvbicsICcjZmY1NTAwJ10sXHJcbiAgWydzdWNjZXNzJywgJyM4N2QwNjgnXVxyXG5dKTtcclxuY29uc3QgZGVmYXVsdEZvcm1hdHRlcjogTnpQcm9ncmVzc0Zvcm1hdHRlciA9IChwOiBudW1iZXIpOiBzdHJpbmcgPT4gYCR7cH0lYDtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc2VsZWN0b3I6ICduei1wcm9ncmVzcycsXHJcbiAgZXhwb3J0QXM6ICduelByb2dyZXNzJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotcHJvZ3Jlc3MuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelByb2dyZXNzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCB0cnVlKSBuelNob3dJbmZvOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIG56V2lkdGggPSAxMzI7XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKSBuelN0cm9rZUNvbG9yOiBOelByb2dyZXNzU3Ryb2tlQ29sb3JUeXBlO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgJ2RlZmF1bHQnKSBuelNpemU6ICdkZWZhdWx0JyB8ICdzbWFsbCc7XHJcbiAgQElucHV0KCkgbnpGb3JtYXQ/OiBOelByb2dyZXNzRm9ybWF0dGVyO1xyXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG56U3VjY2Vzc1BlcmNlbnQ/OiBudW1iZXI7XHJcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbnpQZXJjZW50OiBudW1iZXIgPSAwO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkgQElucHV0TnVtYmVyKCkgbnpTdHJva2VXaWR0aDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkgQElucHV0TnVtYmVyKCkgbnpHYXBEZWdyZWU6IG51bWJlcjtcclxuICBASW5wdXQoKSBuelN0YXR1czogTnpQcm9ncmVzc1N0YXR1c1R5cGU7XHJcbiAgQElucHV0KCkgbnpUeXBlOiBOelByb2dyZXNzVHlwZVR5cGUgPSAnbGluZSc7XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCAndG9wJykgbnpHYXBQb3NpdGlvbjogTnpQcm9ncmVzc0dhcFBvc2l0aW9uVHlwZTtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsICdyb3VuZCcpIG56U3Ryb2tlTGluZWNhcDogTnpQcm9ncmVzc1N0cm9rZUxpbmVjYXBUeXBlO1xyXG5cclxuICAvKiogR3JhZGllbnQgc3R5bGUgd2hlbiBgbnpUeXBlYCBpcyBgbGluZWAuICovXHJcbiAgbGluZUdyYWRpZW50OiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgLyoqIElmIHVzZXIgdXNlcyBncmFkaWVudCBjb2xvci4gKi9cclxuICBpc0dyYWRpZW50ID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEVhY2ggcHJvZ3Jlc3Mgd2hvc2UgYG56VHlwZWAgaXMgY2lyY2xlIG9yIGRhc2hib2FyZCBzaG91bGQgaGF2ZSB1bmlxdWUgaWQgdG9cclxuICAgKiBkZWZpbmUgYDxsaW5lYXJHcmFkaWVudD5gLlxyXG4gICAqL1xyXG4gIGdyYWRpZW50SWQgPSBncmFkaWVudElkU2VlZCsrO1xyXG5cclxuICAvKiogUGF0aHMgdG8gcmVuZGVyZWQgaW4gdGhlIHRlbXBsYXRlLiAqL1xyXG4gIHByb2dyZXNzQ2lyY2xlUGF0aDogTnpQcm9ncmVzc0NpcmNsZVBhdGhbXSA9IFtdO1xyXG5cclxuICBjaXJjbGVHcmFkaWVudDogQXJyYXk8eyBvZmZzZXQ6IHN0cmluZzsgY29sb3I6IHN0cmluZyB9PjtcclxuXHJcbiAgdHJhaWxQYXRoU3R5bGU6IE5nU3R5bGVJbnRlcmZhY2U7XHJcblxyXG4gIHBhdGhTdHJpbmc6IHN0cmluZztcclxuXHJcbiAgaWNvbjogc3RyaW5nO1xyXG5cclxuICB0cmFja0J5Rm4gPSAoaW5kZXg6IG51bWJlcikgPT4gYCR7aW5kZXh9YDtcclxuXHJcbiAgZ2V0IGZvcm1hdHRlcigpOiBOelByb2dyZXNzRm9ybWF0dGVyIHtcclxuICAgIHJldHVybiB0aGlzLm56Rm9ybWF0IHx8IGRlZmF1bHRGb3JtYXR0ZXI7XHJcbiAgfVxyXG5cclxuICBnZXQgc3RhdHVzKCk6IE56UHJvZ3Jlc3NTdGF0dXNUeXBlIHtcclxuICAgIHJldHVybiB0aGlzLm56U3RhdHVzIHx8IHRoaXMuaW5mZXJyZWRTdGF0dXM7XHJcbiAgfVxyXG5cclxuICBnZXQgc3Ryb2tlV2lkdGgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLm56U3Ryb2tlV2lkdGggfHwgKHRoaXMubnpUeXBlID09PSAnbGluZScgJiYgdGhpcy5uelNpemUgIT09ICdzbWFsbCcgPyA4IDogNik7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNDaXJjbGVTdHlsZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm56VHlwZSA9PT0gJ2NpcmNsZScgfHwgdGhpcy5uelR5cGUgPT09ICdkYXNoYm9hcmQnO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYWNoZWRTdGF0dXM6IE56UHJvZ3Jlc3NTdGF0dXNUeXBlID0gJ25vcm1hbCc7XHJcbiAgcHJpdmF0ZSBpbmZlcnJlZFN0YXR1czogTnpQcm9ncmVzc1N0YXR1c1R5cGUgPSAnbm9ybWFsJztcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlKSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBjb25zdCB7IG56R2FwUG9zaXRpb24sIG56U3Ryb2tlTGluZWNhcCwgbnpTdHJva2VDb2xvciwgbnpHYXBEZWdyZWUsIG56VHlwZSwgbnpTdGF0dXMsIG56UGVyY2VudCwgbnpTdWNjZXNzUGVyY2VudCB9ID0gY2hhbmdlcztcclxuXHJcbiAgICBpZiAobnpTdGF0dXMpIHtcclxuICAgICAgdGhpcy5jYWNoZWRTdGF0dXMgPSB0aGlzLm56U3RhdHVzIHx8IHRoaXMuY2FjaGVkU3RhdHVzO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChuelBlcmNlbnQgfHwgbnpTdWNjZXNzUGVyY2VudCkge1xyXG4gICAgICBjb25zdCBmaWxsQWxsID0gcGFyc2VJbnQodGhpcy5uelBlcmNlbnQudG9TdHJpbmcoKSwgMTApID49IDEwMDtcclxuICAgICAgaWYgKGZpbGxBbGwpIHtcclxuICAgICAgICBpZiAoKGlzTm90TmlsKHRoaXMubnpTdWNjZXNzUGVyY2VudCkgJiYgdGhpcy5uelN1Y2Nlc3NQZXJjZW50ISA+PSAxMDApIHx8IHRoaXMubnpTdWNjZXNzUGVyY2VudCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICB0aGlzLmluZmVycmVkU3RhdHVzID0gJ3N1Y2Nlc3MnO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmluZmVycmVkU3RhdHVzID0gdGhpcy5jYWNoZWRTdGF0dXM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAobnpTdGF0dXMgfHwgbnpQZXJjZW50IHx8IG56U3VjY2Vzc1BlcmNlbnQpIHtcclxuICAgICAgdGhpcy51cGRhdGVJY29uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG56U3Ryb2tlQ29sb3IpIHtcclxuICAgICAgdGhpcy5zZXRTdHJva2VDb2xvcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChuekdhcFBvc2l0aW9uIHx8IG56U3Ryb2tlTGluZWNhcCB8fCBuekdhcERlZ3JlZSB8fCBuelR5cGUgfHwgbnpQZXJjZW50IHx8IG56U3Ryb2tlQ29sb3IpIHtcclxuICAgICAgdGhpcy5nZXRDaXJjbGVQYXRocygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm56Q29uZmlnU2VydmljZVxyXG4gICAgICAuZ2V0Q29uZmlnQ2hhbmdlRXZlbnRGb3JDb21wb25lbnQoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMudXBkYXRlSWNvbigpO1xyXG4gICAgICAgIHRoaXMuc2V0U3Ryb2tlQ29sb3IoKTtcclxuICAgICAgICB0aGlzLmdldENpcmNsZVBhdGhzKCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlSWNvbigpOiB2b2lkIHtcclxuICAgIGNvbnN0IHJldCA9IHN0YXR1c0ljb25OYW1lTWFwLmdldCh0aGlzLnN0YXR1cyk7XHJcbiAgICB0aGlzLmljb24gPSByZXQgPyByZXQgKyAodGhpcy5pc0NpcmNsZVN0eWxlID8gJy1vJyA6ICctY2lyY2xlLWZpbGwnKSA6ICcnO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsY3VsYXRlIHBhdGhzIHdoZW4gdGhlIHR5cGUgaXMgY2lyY2xlIG9yIGRhc2hib2FyZC5cclxuICAgKi9cclxuICBwcml2YXRlIGdldENpcmNsZVBhdGhzKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmlzQ2lyY2xlU3R5bGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHZhbHVlcyA9IGlzTm90TmlsKHRoaXMubnpTdWNjZXNzUGVyY2VudCkgPyBbdGhpcy5uelN1Y2Nlc3NQZXJjZW50ISwgdGhpcy5uelBlcmNlbnRdIDogW3RoaXMubnpQZXJjZW50XTtcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgc2hhcmVkIHN0eWxlcy5cclxuICAgIGNvbnN0IHJhZGl1cyA9IDUwIC0gdGhpcy5zdHJva2VXaWR0aCAvIDI7XHJcbiAgICBjb25zdCBnYXBQb3NpdGlvbiA9IHRoaXMubnpHYXBQb3NpdGlvbiB8fCAodGhpcy5uelR5cGUgPT09ICdjaXJjbGUnID8gJ3RvcCcgOiAnYm90dG9tJyk7XHJcbiAgICBjb25zdCBsZW4gPSBNYXRoLlBJICogMiAqIHJhZGl1cztcclxuICAgIGNvbnN0IGdhcERlZ3JlZSA9IHRoaXMubnpHYXBEZWdyZWUgfHwgKHRoaXMubnpUeXBlID09PSAnY2lyY2xlJyA/IDAgOiA3NSk7XHJcblxyXG4gICAgbGV0IGJlZ2luUG9zaXRpb25YID0gMDtcclxuICAgIGxldCBiZWdpblBvc2l0aW9uWSA9IC1yYWRpdXM7XHJcbiAgICBsZXQgZW5kUG9zaXRpb25YID0gMDtcclxuICAgIGxldCBlbmRQb3NpdGlvblkgPSByYWRpdXMgKiAtMjtcclxuXHJcbiAgICBzd2l0Y2ggKGdhcFBvc2l0aW9uKSB7XHJcbiAgICAgIGNhc2UgJ2xlZnQnOlxyXG4gICAgICAgIGJlZ2luUG9zaXRpb25YID0gLXJhZGl1cztcclxuICAgICAgICBiZWdpblBvc2l0aW9uWSA9IDA7XHJcbiAgICAgICAgZW5kUG9zaXRpb25YID0gcmFkaXVzICogMjtcclxuICAgICAgICBlbmRQb3NpdGlvblkgPSAwO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdyaWdodCc6XHJcbiAgICAgICAgYmVnaW5Qb3NpdGlvblggPSByYWRpdXM7XHJcbiAgICAgICAgYmVnaW5Qb3NpdGlvblkgPSAwO1xyXG4gICAgICAgIGVuZFBvc2l0aW9uWCA9IHJhZGl1cyAqIC0yO1xyXG4gICAgICAgIGVuZFBvc2l0aW9uWSA9IDA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2JvdHRvbSc6XHJcbiAgICAgICAgYmVnaW5Qb3NpdGlvblkgPSByYWRpdXM7XHJcbiAgICAgICAgZW5kUG9zaXRpb25ZID0gcmFkaXVzICogMjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnBhdGhTdHJpbmcgPSBgTSA1MCw1MCBtICR7YmVnaW5Qb3NpdGlvblh9LCR7YmVnaW5Qb3NpdGlvbll9XHJcbiAgICAgICBhICR7cmFkaXVzfSwke3JhZGl1c30gMCAxIDEgJHtlbmRQb3NpdGlvblh9LCR7LWVuZFBvc2l0aW9uWX1cclxuICAgICAgIGEgJHtyYWRpdXN9LCR7cmFkaXVzfSAwIDEgMSAkey1lbmRQb3NpdGlvblh9LCR7ZW5kUG9zaXRpb25ZfWA7XHJcblxyXG4gICAgdGhpcy50cmFpbFBhdGhTdHlsZSA9IHtcclxuICAgICAgc3Ryb2tlRGFzaGFycmF5OiBgJHtsZW4gLSBnYXBEZWdyZWV9cHggJHtsZW59cHhgLFxyXG4gICAgICBzdHJva2VEYXNob2Zmc2V0OiBgLSR7Z2FwRGVncmVlIC8gMn1weGAsXHJcbiAgICAgIHRyYW5zaXRpb246ICdzdHJva2UtZGFzaG9mZnNldCAuM3MgZWFzZSAwcywgc3Ryb2tlLWRhc2hhcnJheSAuM3MgZWFzZSAwcywgc3Ryb2tlIC4zcydcclxuICAgIH07XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIHN0eWxlcyBmb3IgZWFjaCBwYXRoLlxyXG4gICAgdGhpcy5wcm9ncmVzc0NpcmNsZVBhdGggPSB2YWx1ZXNcclxuICAgICAgLm1hcCgodmFsdWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaXNTdWNjZXNzUGVyY2VudCA9IHZhbHVlcy5sZW5ndGggPT09IDIgJiYgaW5kZXggPT09IDA7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHN0cm9rZTogdGhpcy5pc0dyYWRpZW50ICYmICFpc1N1Y2Nlc3NQZXJjZW50ID8gYHVybCgjZ3JhZGllbnQtJHt0aGlzLmdyYWRpZW50SWR9KWAgOiBudWxsLFxyXG4gICAgICAgICAgc3Ryb2tlUGF0aFN0eWxlOiB7XHJcbiAgICAgICAgICAgIHN0cm9rZTogIXRoaXMuaXNHcmFkaWVudCA/IChpc1N1Y2Nlc3NQZXJjZW50ID8gc3RhdHVzQ29sb3JNYXAuZ2V0KCdzdWNjZXNzJykgOiAodGhpcy5uelN0cm9rZUNvbG9yIGFzIHN0cmluZykpIDogbnVsbCxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogJ3N0cm9rZS1kYXNob2Zmc2V0IC4zcyBlYXNlIDBzLCBzdHJva2UtZGFzaGFycmF5IC4zcyBlYXNlIDBzLCBzdHJva2UgLjNzLCBzdHJva2Utd2lkdGggLjA2cyBlYXNlIC4zcycsXHJcbiAgICAgICAgICAgIHN0cm9rZURhc2hhcnJheTogYCR7KCh2YWx1ZSB8fCAwKSAvIDEwMCkgKiAobGVuIC0gZ2FwRGVncmVlKX1weCAke2xlbn1weGAsXHJcbiAgICAgICAgICAgIHN0cm9rZURhc2hvZmZzZXQ6IGAtJHtnYXBEZWdyZWUgLyAyfXB4YFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pXHJcbiAgICAgIC5yZXZlcnNlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFN0cm9rZUNvbG9yKCk6IHZvaWQge1xyXG4gICAgY29uc3QgY29sb3IgPSB0aGlzLm56U3Ryb2tlQ29sb3I7XHJcbiAgICBjb25zdCBpc0dyYWRpZW50ID0gKHRoaXMuaXNHcmFkaWVudCA9ICEhY29sb3IgJiYgdHlwZW9mIGNvbG9yICE9PSAnc3RyaW5nJyk7XHJcbiAgICBpZiAoaXNHcmFkaWVudCAmJiAhdGhpcy5pc0NpcmNsZVN0eWxlKSB7XHJcbiAgICAgIHRoaXMubGluZUdyYWRpZW50ID0gaGFuZGxlTGluZWFyR3JhZGllbnQoY29sb3IgYXMgTnpQcm9ncmVzc0NvbG9yR3JhZGllbnQpO1xyXG4gICAgfSBlbHNlIGlmIChpc0dyYWRpZW50ICYmIHRoaXMuaXNDaXJjbGVTdHlsZSkge1xyXG4gICAgICB0aGlzLmNpcmNsZUdyYWRpZW50ID0gaGFuZGxlQ2lyY2xlR3JhZGllbnQodGhpcy5uelN0cm9rZUNvbG9yIGFzIE56UHJvZ3Jlc3NHcmFkaWVudFByb2dyZXNzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubGluZUdyYWRpZW50ID0gbnVsbDtcclxuICAgICAgdGhpcy5jaXJjbGVHcmFkaWVudCA9IFtdO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8bmctdGVtcGxhdGUgI3Byb2dyZXNzSW5mb1RlbXBsYXRlPlxyXG4gIDxzcGFuIGNsYXNzPVwiYW50LXByb2dyZXNzLXRleHRcIiAqbmdJZj1cIm56U2hvd0luZm9cIj5cclxuICAgIDxuZy1jb250YWluZXJcclxuICAgICAgKm5nSWY9XCJzdGF0dXMgPT09ICdleGNlcHRpb24nIHx8IChzdGF0dXMgPT09ICdzdWNjZXNzJyAmJiAhbnpGb3JtYXQpOyBlbHNlIGZvcm1hdFRlbXBsYXRlXCJcclxuICAgID5cclxuICAgICAgPGkgbnotaWNvbiBbbnpUeXBlXT1cImljb25cIj48L2k+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDxuZy10ZW1wbGF0ZSAjZm9ybWF0VGVtcGxhdGU+XHJcbiAgICAgIHt7IGZvcm1hdHRlcihuelBlcmNlbnQpIH19XHJcbiAgICA8L25nLXRlbXBsYXRlPlxyXG4gIDwvc3Bhbj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjxkaXZcclxuICBbbmdDbGFzc109XCInYW50LXByb2dyZXNzIGFudC1wcm9ncmVzcy1zdGF0dXMtJyArIHN0YXR1c1wiXHJcbiAgW2NsYXNzLmFudC1wcm9ncmVzcy1saW5lXT1cIm56VHlwZSA9PSAnbGluZSdcIlxyXG4gIFtjbGFzcy5hbnQtcHJvZ3Jlc3Mtc21hbGxdPVwibnpTaXplID09ICdzbWFsbCdcIlxyXG4gIFtjbGFzcy5hbnQtcHJvZ3Jlc3Mtc2hvdy1pbmZvXT1cIm56U2hvd0luZm9cIlxyXG4gIFtjbGFzcy5hbnQtcHJvZ3Jlc3MtY2lyY2xlXT1cImlzQ2lyY2xlU3R5bGVcIlxyXG4+XHJcbiAgPCEtLSBsaW5lIHByb2dyZXNzIC0tPlxyXG4gIDxkaXYgKm5nSWY9XCJuelR5cGUgPT09ICdsaW5lJ1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImFudC1wcm9ncmVzcy1vdXRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LXByb2dyZXNzLWlubmVyXCI+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3M9XCJhbnQtcHJvZ3Jlc3MtYmdcIlxyXG4gICAgICAgICAgW3N0eWxlLndpZHRoLiVdPVwibnpQZXJjZW50XCJcclxuICAgICAgICAgIFtzdHlsZS5ib3JkZXItcmFkaXVzXT1cIm56U3Ryb2tlTGluZWNhcCA9PT0gJ3JvdW5kJyA/ICcxMDBweCcgOiAnMCdcIlxyXG4gICAgICAgICAgW3N0eWxlLmJhY2tncm91bmRdPVwiIWlzR3JhZGllbnQgPyBuelN0cm9rZUNvbG9yIDogbnVsbFwiXHJcbiAgICAgICAgICBbc3R5bGUuYmFja2dyb3VuZC1pbWFnZV09XCJpc0dyYWRpZW50ID8gbGluZUdyYWRpZW50IDogbnVsbFwiXHJcbiAgICAgICAgICBbc3R5bGUuaGVpZ2h0LnB4XT1cInN0cm9rZVdpZHRoXCJcclxuICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgKm5nSWY9XCJuelN1Y2Nlc3NQZXJjZW50IHx8IG56U3VjY2Vzc1BlcmNlbnQgPT09IDBcIlxyXG4gICAgICAgICAgY2xhc3M9XCJhbnQtcHJvZ3Jlc3Mtc3VjY2Vzcy1iZ1wiXHJcbiAgICAgICAgICBbc3R5bGUud2lkdGguJV09XCJuelN1Y2Nlc3NQZXJjZW50XCJcclxuICAgICAgICAgIFtzdHlsZS5ib3JkZXItcmFkaXVzXT1cIm56U3Ryb2tlTGluZWNhcCA9PT0gJ3JvdW5kJyA/ICcxMDBweCcgOiAnMCdcIlxyXG4gICAgICAgICAgW3N0eWxlLmhlaWdodC5weF09XCJzdHJva2VXaWR0aFwiXHJcbiAgICAgICAgPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInByb2dyZXNzSW5mb1RlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cclxuICA8L2Rpdj5cclxuXHJcbiAgPCEtLSBjaXJjbGUgLyBkYXNoYm9hcmQgcHJvZ3Jlc3MgLS0+XHJcbiAgPGRpdlxyXG4gICAgW3N0eWxlLndpZHRoLnB4XT1cInRoaXMubnpXaWR0aFwiXHJcbiAgICBbc3R5bGUuaGVpZ2h0LnB4XT1cInRoaXMubnpXaWR0aFwiXHJcbiAgICBbc3R5bGUuZm9udFNpemUucHhdPVwidGhpcy5ueldpZHRoICogMC4xNSArIDZcIlxyXG4gICAgY2xhc3M9XCJhbnQtcHJvZ3Jlc3MtaW5uZXJcIlxyXG4gICAgW2NsYXNzLmFudC1wcm9ncmVzcy1jaXJjbGUtZ3JhZGllbnRdPVwiaXNHcmFkaWVudFwiXHJcbiAgICAqbmdJZj1cImlzQ2lyY2xlU3R5bGVcIlxyXG4gID5cclxuICAgIDxzdmcgY2xhc3M9XCJhbnQtcHJvZ3Jlc3MtY2lyY2xlIFwiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiPlxyXG4gICAgICA8ZGVmcyAqbmdJZj1cImlzR3JhZGllbnRcIj5cclxuICAgICAgICA8bGluZWFyR3JhZGllbnQgW2lkXT1cIidncmFkaWVudC0nICsgZ3JhZGllbnRJZFwiIHgxPVwiMTAwJVwiIHkxPVwiMCVcIiB4Mj1cIjAlXCIgeTI9XCIwJVwiPlxyXG4gICAgICAgICAgPHN0b3BcclxuICAgICAgICAgICAgKm5nRm9yPVwibGV0IGkgb2YgY2lyY2xlR3JhZGllbnRcIlxyXG4gICAgICAgICAgICBbYXR0ci5vZmZzZXRdPVwiaS5vZmZzZXRcIlxyXG4gICAgICAgICAgICBbYXR0ci5zdG9wLWNvbG9yXT1cImkuY29sb3JcIlxyXG4gICAgICAgICAgPjwvc3RvcD5cclxuICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICA8L2RlZnM+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgY2xhc3M9XCJhbnQtcHJvZ3Jlc3MtY2lyY2xlLXRyYWlsXCJcclxuICAgICAgICBzdHJva2U9XCIjZjNmM2YzXCJcclxuICAgICAgICBmaWxsLW9wYWNpdHk9XCIwXCJcclxuICAgICAgICBbYXR0ci5zdHJva2Utd2lkdGhdPVwic3Ryb2tlV2lkdGhcIlxyXG4gICAgICAgIFthdHRyLmRdPVwicGF0aFN0cmluZ1wiXHJcbiAgICAgICAgW25nU3R5bGVdPVwidHJhaWxQYXRoU3R5bGVcIlxyXG4gICAgICA+PC9wYXRoPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgICpuZ0Zvcj1cImxldCBwIG9mIHByb2dyZXNzQ2lyY2xlUGF0aDsgdHJhY2tCeTogdHJhY2tCeUZuXCJcclxuICAgICAgICBjbGFzcz1cImFudC1wcm9ncmVzcy1jaXJjbGUtcGF0aFwiXHJcbiAgICAgICAgZmlsbC1vcGFjaXR5PVwiMFwiXHJcbiAgICAgICAgW2F0dHIuZF09XCJwYXRoU3RyaW5nXCJcclxuICAgICAgICBbYXR0ci5zdHJva2UtbGluZWNhcF09XCJuelN0cm9rZUxpbmVjYXBcIlxyXG4gICAgICAgIFthdHRyLnN0cm9rZV09XCJwLnN0cm9rZVwiXHJcbiAgICAgICAgW2F0dHIuc3Ryb2tlLXdpZHRoXT1cIm56UGVyY2VudCA/IHN0cm9rZVdpZHRoIDogMFwiXHJcbiAgICAgICAgW25nU3R5bGVdPVwicC5zdHJva2VQYXRoU3R5bGVcIlxyXG4gICAgICA+PC9wYXRoPlxyXG4gICAgPC9zdmc+XHJcbiAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwicHJvZ3Jlc3NJbmZvVGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19
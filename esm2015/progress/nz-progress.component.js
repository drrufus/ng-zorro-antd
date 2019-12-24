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
    const ctx_r655 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzType", ctx_r655.icon);
} }
function NzProgressComponent_ng_template_0_span_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r657 = i0.ɵɵnextContext(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r657.formatter(ctx_r657.nzPercent), " ");
} }
function NzProgressComponent_ng_template_0_span_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 5);
    i0.ɵɵtemplate(1, NzProgressComponent_ng_template_0_span_0_ng_container_1_Template, 2, 1, "ng-container", 6);
    i0.ɵɵtemplate(2, NzProgressComponent_ng_template_0_span_0_ng_template_2_Template, 1, 1, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r656 = i0.ɵɵreference(3);
    const ctx_r654 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r654.status === "exception" || ctx_r654.status === "success" && !ctx_r654.nzFormat)("ngIfElse", _r656);
} }
function NzProgressComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NzProgressComponent_ng_template_0_span_0_Template, 4, 2, "span", 4);
} if (rf & 2) {
    const ctx_r651 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r651.nzShowInfo);
} }
function NzProgressComponent_div_3_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 14);
} if (rf & 2) {
    const ctx_r658 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("width", ctx_r658.nzSuccessPercent, "%")("border-radius", ctx_r658.nzStrokeLinecap === "round" ? "100px" : "0")("height", ctx_r658.strokeWidth, "px");
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
    const ctx_r652 = i0.ɵɵnextContext();
    const _r650 = i0.ɵɵreference(1);
    i0.ɵɵadvance(3);
    i0.ɵɵstyleSanitizer(i0.ɵɵdefaultStyleSanitizer);
    i0.ɵɵstyleProp("width", ctx_r652.nzPercent, "%")("border-radius", ctx_r652.nzStrokeLinecap === "round" ? "100px" : "0")("background", !ctx_r652.isGradient ? ctx_r652.nzStrokeColor : null)("background-image", ctx_r652.isGradient ? ctx_r652.lineGradient : null)("height", ctx_r652.strokeWidth, "px");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r652.nzSuccessPercent || ctx_r652.nzSuccessPercent === 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r650);
} }
function NzProgressComponent_div_4__svg_defs_2__svg_stop_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "stop");
} if (rf & 2) {
    const i_r664 = ctx.$implicit;
    i0.ɵɵattribute("offset", i_r664.offset)("stop-color", i_r664.color);
} }
function NzProgressComponent_div_4__svg_defs_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "defs");
    i0.ɵɵelementStart(1, "linearGradient", 18);
    i0.ɵɵtemplate(2, NzProgressComponent_div_4__svg_defs_2__svg_stop_2_Template, 1, 2, "stop", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r660 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("id", "gradient-" + ctx_r660.gradientId);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r660.circleGradient);
} }
function NzProgressComponent_div_4__svg_path_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "path", 20);
} if (rf & 2) {
    const p_r665 = ctx.$implicit;
    const ctx_r661 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngStyle", p_r665.strokePathStyle);
    i0.ɵɵattribute("d", ctx_r661.pathString)("stroke-linecap", ctx_r661.nzStrokeLinecap)("stroke", p_r665.stroke)("stroke-width", ctx_r661.nzPercent ? ctx_r661.strokeWidth : 0);
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
    const ctx_r653 = i0.ɵɵnextContext();
    const _r650 = i0.ɵɵreference(1);
    i0.ɵɵstyleProp("width", ctx_r653.nzWidth, "px")("height", ctx_r653.nzWidth, "px")("font-size", ctx_r653.nzWidth * 0.15 + 6, "px");
    i0.ɵɵclassProp("ant-progress-circle-gradient", ctx_r653.isGradient);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r653.isGradient);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", ctx_r653.trailPathStyle);
    i0.ɵɵattribute("stroke-width", ctx_r653.strokeWidth)("d", ctx_r653.pathString);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r653.progressCirclePath)("ngForTrackBy", ctx_r653.trackByFn);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r650);
} }
let gradientIdSeed = 0;
const NZ_CONFIG_COMPONENT_NAME = 'progress';
const statusIconNameMap = new Map([
    ['success', 'check'],
    ['exception', 'close']
]);
const statusColorMap = new Map([
    ['normal', '#108ee9'],
    ['exception', '#ff5500'],
    ['success', '#87d068']
]);
const defaultFormatter = (p) => `${p}%`;
export class NzProgressComponent {
    constructor(nzConfigService) {
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
        this.trackByFn = (index) => `${index}`;
        this.cachedStatus = 'normal';
        this.inferredStatus = 'normal';
        this.destroy$ = new Subject();
    }
    get formatter() {
        return this.nzFormat || defaultFormatter;
    }
    get status() {
        return this.nzStatus || this.inferredStatus;
    }
    get strokeWidth() {
        return this.nzStrokeWidth || (this.nzType === 'line' && this.nzSize !== 'small' ? 8 : 6);
    }
    get isCircleStyle() {
        return this.nzType === 'circle' || this.nzType === 'dashboard';
    }
    ngOnChanges(changes) {
        const { nzGapPosition, nzStrokeLinecap, nzStrokeColor, nzGapDegree, nzType, nzStatus, nzPercent, nzSuccessPercent } = changes;
        if (nzStatus) {
            this.cachedStatus = this.nzStatus || this.cachedStatus;
        }
        if (nzPercent || nzSuccessPercent) {
            const fillAll = parseInt(this.nzPercent.toString(), 10) >= 100;
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
    }
    ngOnInit() {
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            this.updateIcon();
            this.setStrokeColor();
            this.getCirclePaths();
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    updateIcon() {
        const ret = statusIconNameMap.get(this.status);
        this.icon = ret ? ret + (this.isCircleStyle ? '-o' : '-circle-fill') : '';
    }
    /**
     * Calculate paths when the type is circle or dashboard.
     */
    getCirclePaths() {
        if (!this.isCircleStyle) {
            return;
        }
        const values = isNotNil(this.nzSuccessPercent) ? [this.nzSuccessPercent, this.nzPercent] : [this.nzPercent];
        // Calculate shared styles.
        const radius = 50 - this.strokeWidth / 2;
        const gapPosition = this.nzGapPosition || (this.nzType === 'circle' ? 'top' : 'bottom');
        const len = Math.PI * 2 * radius;
        const gapDegree = this.nzGapDegree || (this.nzType === 'circle' ? 0 : 75);
        let beginPositionX = 0;
        let beginPositionY = -radius;
        let endPositionX = 0;
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
            .map((value, index) => {
            const isSuccessPercent = values.length === 2 && index === 0;
            return {
                stroke: this.isGradient && !isSuccessPercent ? `url(#gradient-${this.gradientId})` : null,
                strokePathStyle: {
                    stroke: !this.isGradient ? (isSuccessPercent ? statusColorMap.get('success') : this.nzStrokeColor) : null,
                    transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s',
                    strokeDasharray: `${((value || 0) / 100) * (len - gapDegree)}px ${len}px`,
                    strokeDashoffset: `-${gapDegree / 2}px`
                }
            };
        })
            .reverse();
    }
    setStrokeColor() {
        const color = this.nzStrokeColor;
        const isGradient = (this.isGradient = !!color && typeof color !== 'string');
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
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcHJvZ3Jlc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9wcm9ncmVzcy8iLCJzb3VyY2VzIjpbIm56LXByb2dyZXNzLmNvbXBvbmVudC50cyIsIm56LXByb2dyZXNzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBK0MsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUksT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQW9CLGVBQWUsRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUxRyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7O0lDWjdFLDZCQUdFO0lBQUEsdUJBQStCO0lBQ2pDLDBCQUFlOzs7SUFERixlQUFlO0lBQWYsc0NBQWU7OztJQUcxQixZQUNGOzs7SUFERSx1RUFDRjs7O0lBUkYsK0JBQ0U7SUFBQSwyR0FHRTtJQUVGLDBJQUNFO0lBRUosaUJBQU87Ozs7SUFQSCxlQUEwRjtJQUExRiw2R0FBMEYsbUJBQUE7OztJQUY5RixvRkFDRTs7O0lBRDhCLDBDQUFrQjs7O0lBK0I1QywwQkFNTzs7O0lBSEwsdURBQWtDLHVFQUFBLHNDQUFBOzs7O0lBZDFDLDJCQUNFO0lBQUEsOEJBQ0U7SUFBQSwrQkFDRTtJQUFBLDBCQU9PO0lBQ1AsMkVBTUM7SUFDSCxpQkFBTTtJQUNSLGlCQUFNO0lBQ04sMkZBQXVEO0lBQ3pELGlCQUFNOzs7O0lBaEJFLGVBQTJCO0lBQTNCLCtDQUEyQjtJQUEzQixnREFBMkIsdUVBQUEsb0VBQUEsd0VBQUEsc0NBQUE7SUFP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REFBdUI7QUFDZ0I7SUFBcEQsVUFBVSxDQUFDLHdCQUF3QixDQUFDLEVBQUUsV0FBVyxFQUFFOzswREFBdUI7QUFDdEI7SUFBcEQsVUFBVSxDQUFDLHdCQUF3QixDQUFDLEVBQUUsV0FBVyxFQUFFOzt3REFBcUI7QUFHNUI7SUFBNUMsVUFBVSxDQUFDLHdCQUF3QixFQUFFLEtBQUssQ0FBQzs7MERBQTBDO0FBQ3ZDO0lBQTlDLFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxPQUFPLENBQUM7OzREQUE4QztrREFiMUYsbUJBQW1CO2NBUi9CLFNBQVM7ZUFBQztnQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUUsWUFBWTtnQkFDdEIsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsV0FBVyxFQUFFLDhCQUE4QjthQUM1Qzs7a0JBRUUsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIFNpbXBsZUNoYW5nZXMsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBJbnB1dE51bWJlciwgaXNOb3ROaWwsIE5nU3R5bGVJbnRlcmZhY2UsIE56Q29uZmlnU2VydmljZSwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgaGFuZGxlQ2lyY2xlR3JhZGllbnQsIGhhbmRsZUxpbmVhckdyYWRpZW50IH0gZnJvbSAnLi9uei1wcm9ncmVzcy11dGlscyc7XHJcbmltcG9ydCB7XHJcbiAgTnpQcm9ncmVzc0NpcmNsZVBhdGgsXHJcbiAgTnpQcm9ncmVzc0NvbG9yR3JhZGllbnQsXHJcbiAgTnpQcm9ncmVzc0Zvcm1hdHRlcixcclxuICBOelByb2dyZXNzR2FwUG9zaXRpb25UeXBlLFxyXG4gIE56UHJvZ3Jlc3NHcmFkaWVudFByb2dyZXNzLFxyXG4gIE56UHJvZ3Jlc3NTdGF0dXNUeXBlLFxyXG4gIE56UHJvZ3Jlc3NTdHJva2VDb2xvclR5cGUsXHJcbiAgTnpQcm9ncmVzc1N0cm9rZUxpbmVjYXBUeXBlLFxyXG4gIE56UHJvZ3Jlc3NUeXBlVHlwZVxyXG59IGZyb20gJy4vbnotcHJvZ3Jlc3MuZGVmaW5pdGlvbnMnO1xyXG5cclxubGV0IGdyYWRpZW50SWRTZWVkID0gMDtcclxuXHJcbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICdwcm9ncmVzcyc7XHJcbmNvbnN0IHN0YXR1c0ljb25OYW1lTWFwID0gbmV3IE1hcChbXHJcbiAgWydzdWNjZXNzJywgJ2NoZWNrJ10sXHJcbiAgWydleGNlcHRpb24nLCAnY2xvc2UnXVxyXG5dKTtcclxuY29uc3Qgc3RhdHVzQ29sb3JNYXAgPSBuZXcgTWFwKFtcclxuICBbJ25vcm1hbCcsICcjMTA4ZWU5J10sXHJcbiAgWydleGNlcHRpb24nLCAnI2ZmNTUwMCddLFxyXG4gIFsnc3VjY2VzcycsICcjODdkMDY4J11cclxuXSk7XHJcbmNvbnN0IGRlZmF1bHRGb3JtYXR0ZXI6IE56UHJvZ3Jlc3NGb3JtYXR0ZXIgPSAocDogbnVtYmVyKTogc3RyaW5nID0+IGAke3B9JWA7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHNlbGVjdG9yOiAnbnotcHJvZ3Jlc3MnLFxyXG4gIGV4cG9ydEFzOiAnbnpQcm9ncmVzcycsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXByb2dyZXNzLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpQcm9ncmVzc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgdHJ1ZSkgbnpTaG93SW5mbzogYm9vbGVhbjtcclxuICBASW5wdXQoKSBueldpZHRoID0gMTMyO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkgbnpTdHJva2VDb2xvcjogTnpQcm9ncmVzc1N0cm9rZUNvbG9yVHlwZTtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsICdkZWZhdWx0JykgbnpTaXplOiAnZGVmYXVsdCcgfCAnc21hbGwnO1xyXG4gIEBJbnB1dCgpIG56Rm9ybWF0PzogTnpQcm9ncmVzc0Zvcm1hdHRlcjtcclxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBuelN1Y2Nlc3NQZXJjZW50PzogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG56UGVyY2VudDogbnVtYmVyID0gMDtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpIEBJbnB1dE51bWJlcigpIG56U3Ryb2tlV2lkdGg6IG51bWJlcjtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpIEBJbnB1dE51bWJlcigpIG56R2FwRGVncmVlOiBudW1iZXI7XHJcbiAgQElucHV0KCkgbnpTdGF0dXM6IE56UHJvZ3Jlc3NTdGF0dXNUeXBlO1xyXG4gIEBJbnB1dCgpIG56VHlwZTogTnpQcm9ncmVzc1R5cGVUeXBlID0gJ2xpbmUnO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgJ3RvcCcpIG56R2FwUG9zaXRpb246IE56UHJvZ3Jlc3NHYXBQb3NpdGlvblR5cGU7XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCAncm91bmQnKSBuelN0cm9rZUxpbmVjYXA6IE56UHJvZ3Jlc3NTdHJva2VMaW5lY2FwVHlwZTtcclxuXHJcbiAgLyoqIEdyYWRpZW50IHN0eWxlIHdoZW4gYG56VHlwZWAgaXMgYGxpbmVgLiAqL1xyXG4gIGxpbmVHcmFkaWVudDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIC8qKiBJZiB1c2VyIHVzZXMgZ3JhZGllbnQgY29sb3IuICovXHJcbiAgaXNHcmFkaWVudCA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBFYWNoIHByb2dyZXNzIHdob3NlIGBuelR5cGVgIGlzIGNpcmNsZSBvciBkYXNoYm9hcmQgc2hvdWxkIGhhdmUgdW5pcXVlIGlkIHRvXHJcbiAgICogZGVmaW5lIGA8bGluZWFyR3JhZGllbnQ+YC5cclxuICAgKi9cclxuICBncmFkaWVudElkID0gZ3JhZGllbnRJZFNlZWQrKztcclxuXHJcbiAgLyoqIFBhdGhzIHRvIHJlbmRlcmVkIGluIHRoZSB0ZW1wbGF0ZS4gKi9cclxuICBwcm9ncmVzc0NpcmNsZVBhdGg6IE56UHJvZ3Jlc3NDaXJjbGVQYXRoW10gPSBbXTtcclxuXHJcbiAgY2lyY2xlR3JhZGllbnQ6IEFycmF5PHsgb2Zmc2V0OiBzdHJpbmc7IGNvbG9yOiBzdHJpbmcgfT47XHJcblxyXG4gIHRyYWlsUGF0aFN0eWxlOiBOZ1N0eWxlSW50ZXJmYWNlO1xyXG5cclxuICBwYXRoU3RyaW5nOiBzdHJpbmc7XHJcblxyXG4gIGljb246IHN0cmluZztcclxuXHJcbiAgdHJhY2tCeUZuID0gKGluZGV4OiBudW1iZXIpID0+IGAke2luZGV4fWA7XHJcblxyXG4gIGdldCBmb3JtYXR0ZXIoKTogTnpQcm9ncmVzc0Zvcm1hdHRlciB7XHJcbiAgICByZXR1cm4gdGhpcy5uekZvcm1hdCB8fCBkZWZhdWx0Rm9ybWF0dGVyO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHN0YXR1cygpOiBOelByb2dyZXNzU3RhdHVzVHlwZSB7XHJcbiAgICByZXR1cm4gdGhpcy5uelN0YXR1cyB8fCB0aGlzLmluZmVycmVkU3RhdHVzO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHN0cm9rZVdpZHRoKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5uelN0cm9rZVdpZHRoIHx8ICh0aGlzLm56VHlwZSA9PT0gJ2xpbmUnICYmIHRoaXMubnpTaXplICE9PSAnc21hbGwnID8gOCA6IDYpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzQ2lyY2xlU3R5bGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5uelR5cGUgPT09ICdjaXJjbGUnIHx8IHRoaXMubnpUeXBlID09PSAnZGFzaGJvYXJkJztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FjaGVkU3RhdHVzOiBOelByb2dyZXNzU3RhdHVzVHlwZSA9ICdub3JtYWwnO1xyXG4gIHByaXZhdGUgaW5mZXJyZWRTdGF0dXM6IE56UHJvZ3Jlc3NTdGF0dXNUeXBlID0gJ25vcm1hbCc7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSkge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc3QgeyBuekdhcFBvc2l0aW9uLCBuelN0cm9rZUxpbmVjYXAsIG56U3Ryb2tlQ29sb3IsIG56R2FwRGVncmVlLCBuelR5cGUsIG56U3RhdHVzLCBuelBlcmNlbnQsIG56U3VjY2Vzc1BlcmNlbnQgfSA9IGNoYW5nZXM7XHJcblxyXG4gICAgaWYgKG56U3RhdHVzKSB7XHJcbiAgICAgIHRoaXMuY2FjaGVkU3RhdHVzID0gdGhpcy5uelN0YXR1cyB8fCB0aGlzLmNhY2hlZFN0YXR1cztcclxuICAgIH1cclxuXHJcbiAgICBpZiAobnpQZXJjZW50IHx8IG56U3VjY2Vzc1BlcmNlbnQpIHtcclxuICAgICAgY29uc3QgZmlsbEFsbCA9IHBhcnNlSW50KHRoaXMubnpQZXJjZW50LnRvU3RyaW5nKCksIDEwKSA+PSAxMDA7XHJcbiAgICAgIGlmIChmaWxsQWxsKSB7XHJcbiAgICAgICAgaWYgKChpc05vdE5pbCh0aGlzLm56U3VjY2Vzc1BlcmNlbnQpICYmIHRoaXMubnpTdWNjZXNzUGVyY2VudCEgPj0gMTAwKSB8fCB0aGlzLm56U3VjY2Vzc1BlcmNlbnQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgdGhpcy5pbmZlcnJlZFN0YXR1cyA9ICdzdWNjZXNzJztcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5pbmZlcnJlZFN0YXR1cyA9IHRoaXMuY2FjaGVkU3RhdHVzO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG56U3RhdHVzIHx8IG56UGVyY2VudCB8fCBuelN1Y2Nlc3NQZXJjZW50KSB7XHJcbiAgICAgIHRoaXMudXBkYXRlSWNvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChuelN0cm9rZUNvbG9yKSB7XHJcbiAgICAgIHRoaXMuc2V0U3Ryb2tlQ29sb3IoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobnpHYXBQb3NpdGlvbiB8fCBuelN0cm9rZUxpbmVjYXAgfHwgbnpHYXBEZWdyZWUgfHwgbnpUeXBlIHx8IG56UGVyY2VudCB8fCBuelN0cm9rZUNvbG9yKSB7XHJcbiAgICAgIHRoaXMuZ2V0Q2lyY2xlUGF0aHMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5uekNvbmZpZ1NlcnZpY2VcclxuICAgICAgLmdldENvbmZpZ0NoYW5nZUV2ZW50Rm9yQ29tcG9uZW50KE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSlcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUljb24oKTtcclxuICAgICAgICB0aGlzLnNldFN0cm9rZUNvbG9yKCk7XHJcbiAgICAgICAgdGhpcy5nZXRDaXJjbGVQYXRocygpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZUljb24oKTogdm9pZCB7XHJcbiAgICBjb25zdCByZXQgPSBzdGF0dXNJY29uTmFtZU1hcC5nZXQodGhpcy5zdGF0dXMpO1xyXG4gICAgdGhpcy5pY29uID0gcmV0ID8gcmV0ICsgKHRoaXMuaXNDaXJjbGVTdHlsZSA/ICctbycgOiAnLWNpcmNsZS1maWxsJykgOiAnJztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGN1bGF0ZSBwYXRocyB3aGVuIHRoZSB0eXBlIGlzIGNpcmNsZSBvciBkYXNoYm9hcmQuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBnZXRDaXJjbGVQYXRocygpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5pc0NpcmNsZVN0eWxlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB2YWx1ZXMgPSBpc05vdE5pbCh0aGlzLm56U3VjY2Vzc1BlcmNlbnQpID8gW3RoaXMubnpTdWNjZXNzUGVyY2VudCEsIHRoaXMubnpQZXJjZW50XSA6IFt0aGlzLm56UGVyY2VudF07XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIHNoYXJlZCBzdHlsZXMuXHJcbiAgICBjb25zdCByYWRpdXMgPSA1MCAtIHRoaXMuc3Ryb2tlV2lkdGggLyAyO1xyXG4gICAgY29uc3QgZ2FwUG9zaXRpb24gPSB0aGlzLm56R2FwUG9zaXRpb24gfHwgKHRoaXMubnpUeXBlID09PSAnY2lyY2xlJyA/ICd0b3AnIDogJ2JvdHRvbScpO1xyXG4gICAgY29uc3QgbGVuID0gTWF0aC5QSSAqIDIgKiByYWRpdXM7XHJcbiAgICBjb25zdCBnYXBEZWdyZWUgPSB0aGlzLm56R2FwRGVncmVlIHx8ICh0aGlzLm56VHlwZSA9PT0gJ2NpcmNsZScgPyAwIDogNzUpO1xyXG5cclxuICAgIGxldCBiZWdpblBvc2l0aW9uWCA9IDA7XHJcbiAgICBsZXQgYmVnaW5Qb3NpdGlvblkgPSAtcmFkaXVzO1xyXG4gICAgbGV0IGVuZFBvc2l0aW9uWCA9IDA7XHJcbiAgICBsZXQgZW5kUG9zaXRpb25ZID0gcmFkaXVzICogLTI7XHJcblxyXG4gICAgc3dpdGNoIChnYXBQb3NpdGlvbikge1xyXG4gICAgICBjYXNlICdsZWZ0JzpcclxuICAgICAgICBiZWdpblBvc2l0aW9uWCA9IC1yYWRpdXM7XHJcbiAgICAgICAgYmVnaW5Qb3NpdGlvblkgPSAwO1xyXG4gICAgICAgIGVuZFBvc2l0aW9uWCA9IHJhZGl1cyAqIDI7XHJcbiAgICAgICAgZW5kUG9zaXRpb25ZID0gMDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAncmlnaHQnOlxyXG4gICAgICAgIGJlZ2luUG9zaXRpb25YID0gcmFkaXVzO1xyXG4gICAgICAgIGJlZ2luUG9zaXRpb25ZID0gMDtcclxuICAgICAgICBlbmRQb3NpdGlvblggPSByYWRpdXMgKiAtMjtcclxuICAgICAgICBlbmRQb3NpdGlvblkgPSAwO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdib3R0b20nOlxyXG4gICAgICAgIGJlZ2luUG9zaXRpb25ZID0gcmFkaXVzO1xyXG4gICAgICAgIGVuZFBvc2l0aW9uWSA9IHJhZGl1cyAqIDI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wYXRoU3RyaW5nID0gYE0gNTAsNTAgbSAke2JlZ2luUG9zaXRpb25YfSwke2JlZ2luUG9zaXRpb25ZfVxyXG4gICAgICAgYSAke3JhZGl1c30sJHtyYWRpdXN9IDAgMSAxICR7ZW5kUG9zaXRpb25YfSwkey1lbmRQb3NpdGlvbll9XHJcbiAgICAgICBhICR7cmFkaXVzfSwke3JhZGl1c30gMCAxIDEgJHstZW5kUG9zaXRpb25YfSwke2VuZFBvc2l0aW9uWX1gO1xyXG5cclxuICAgIHRoaXMudHJhaWxQYXRoU3R5bGUgPSB7XHJcbiAgICAgIHN0cm9rZURhc2hhcnJheTogYCR7bGVuIC0gZ2FwRGVncmVlfXB4ICR7bGVufXB4YCxcclxuICAgICAgc3Ryb2tlRGFzaG9mZnNldDogYC0ke2dhcERlZ3JlZSAvIDJ9cHhgLFxyXG4gICAgICB0cmFuc2l0aW9uOiAnc3Ryb2tlLWRhc2hvZmZzZXQgLjNzIGVhc2UgMHMsIHN0cm9rZS1kYXNoYXJyYXkgLjNzIGVhc2UgMHMsIHN0cm9rZSAuM3MnXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIENhbGN1bGF0ZSBzdHlsZXMgZm9yIGVhY2ggcGF0aC5cclxuICAgIHRoaXMucHJvZ3Jlc3NDaXJjbGVQYXRoID0gdmFsdWVzXHJcbiAgICAgIC5tYXAoKHZhbHVlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlzU3VjY2Vzc1BlcmNlbnQgPSB2YWx1ZXMubGVuZ3RoID09PSAyICYmIGluZGV4ID09PSAwO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBzdHJva2U6IHRoaXMuaXNHcmFkaWVudCAmJiAhaXNTdWNjZXNzUGVyY2VudCA/IGB1cmwoI2dyYWRpZW50LSR7dGhpcy5ncmFkaWVudElkfSlgIDogbnVsbCxcclxuICAgICAgICAgIHN0cm9rZVBhdGhTdHlsZToge1xyXG4gICAgICAgICAgICBzdHJva2U6ICF0aGlzLmlzR3JhZGllbnQgPyAoaXNTdWNjZXNzUGVyY2VudCA/IHN0YXR1c0NvbG9yTWFwLmdldCgnc3VjY2VzcycpIDogKHRoaXMubnpTdHJva2VDb2xvciBhcyBzdHJpbmcpKSA6IG51bGwsXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICdzdHJva2UtZGFzaG9mZnNldCAuM3MgZWFzZSAwcywgc3Ryb2tlLWRhc2hhcnJheSAuM3MgZWFzZSAwcywgc3Ryb2tlIC4zcywgc3Ryb2tlLXdpZHRoIC4wNnMgZWFzZSAuM3MnLFxyXG4gICAgICAgICAgICBzdHJva2VEYXNoYXJyYXk6IGAkeygodmFsdWUgfHwgMCkgLyAxMDApICogKGxlbiAtIGdhcERlZ3JlZSl9cHggJHtsZW59cHhgLFxyXG4gICAgICAgICAgICBzdHJva2VEYXNob2Zmc2V0OiBgLSR7Z2FwRGVncmVlIC8gMn1weGBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICB9KVxyXG4gICAgICAucmV2ZXJzZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRTdHJva2VDb2xvcigpOiB2b2lkIHtcclxuICAgIGNvbnN0IGNvbG9yID0gdGhpcy5uelN0cm9rZUNvbG9yO1xyXG4gICAgY29uc3QgaXNHcmFkaWVudCA9ICh0aGlzLmlzR3JhZGllbnQgPSAhIWNvbG9yICYmIHR5cGVvZiBjb2xvciAhPT0gJ3N0cmluZycpO1xyXG4gICAgaWYgKGlzR3JhZGllbnQgJiYgIXRoaXMuaXNDaXJjbGVTdHlsZSkge1xyXG4gICAgICB0aGlzLmxpbmVHcmFkaWVudCA9IGhhbmRsZUxpbmVhckdyYWRpZW50KGNvbG9yIGFzIE56UHJvZ3Jlc3NDb2xvckdyYWRpZW50KTtcclxuICAgIH0gZWxzZSBpZiAoaXNHcmFkaWVudCAmJiB0aGlzLmlzQ2lyY2xlU3R5bGUpIHtcclxuICAgICAgdGhpcy5jaXJjbGVHcmFkaWVudCA9IGhhbmRsZUNpcmNsZUdyYWRpZW50KHRoaXMubnpTdHJva2VDb2xvciBhcyBOelByb2dyZXNzR3JhZGllbnRQcm9ncmVzcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmxpbmVHcmFkaWVudCA9IG51bGw7XHJcbiAgICAgIHRoaXMuY2lyY2xlR3JhZGllbnQgPSBbXTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPG5nLXRlbXBsYXRlICNwcm9ncmVzc0luZm9UZW1wbGF0ZT5cclxuICA8c3BhbiBjbGFzcz1cImFudC1wcm9ncmVzcy10ZXh0XCIgKm5nSWY9XCJuelNob3dJbmZvXCI+XHJcbiAgICA8bmctY29udGFpbmVyXHJcbiAgICAgICpuZ0lmPVwic3RhdHVzID09PSAnZXhjZXB0aW9uJyB8fCAoc3RhdHVzID09PSAnc3VjY2VzcycgJiYgIW56Rm9ybWF0KTsgZWxzZSBmb3JtYXRUZW1wbGF0ZVwiXHJcbiAgICA+XHJcbiAgICAgIDxpIG56LWljb24gW256VHlwZV09XCJpY29uXCI+PC9pPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8bmctdGVtcGxhdGUgI2Zvcm1hdFRlbXBsYXRlPlxyXG4gICAgICB7eyBmb3JtYXR0ZXIobnpQZXJjZW50KSB9fVxyXG4gICAgPC9uZy10ZW1wbGF0ZT5cclxuICA8L3NwYW4+XHJcbjwvbmctdGVtcGxhdGU+XHJcblxyXG48ZGl2XHJcbiAgW25nQ2xhc3NdPVwiJ2FudC1wcm9ncmVzcyBhbnQtcHJvZ3Jlc3Mtc3RhdHVzLScgKyBzdGF0dXNcIlxyXG4gIFtjbGFzcy5hbnQtcHJvZ3Jlc3MtbGluZV09XCJuelR5cGUgPT0gJ2xpbmUnXCJcclxuICBbY2xhc3MuYW50LXByb2dyZXNzLXNtYWxsXT1cIm56U2l6ZSA9PSAnc21hbGwnXCJcclxuICBbY2xhc3MuYW50LXByb2dyZXNzLXNob3ctaW5mb109XCJuelNob3dJbmZvXCJcclxuICBbY2xhc3MuYW50LXByb2dyZXNzLWNpcmNsZV09XCJpc0NpcmNsZVN0eWxlXCJcclxuPlxyXG4gIDwhLS0gbGluZSBwcm9ncmVzcyAtLT5cclxuICA8ZGl2ICpuZ0lmPVwibnpUeXBlID09PSAnbGluZSdcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJhbnQtcHJvZ3Jlc3Mtb3V0ZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImFudC1wcm9ncmVzcy1pbm5lclwiPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzPVwiYW50LXByb2dyZXNzLWJnXCJcclxuICAgICAgICAgIFtzdHlsZS53aWR0aC4lXT1cIm56UGVyY2VudFwiXHJcbiAgICAgICAgICBbc3R5bGUuYm9yZGVyLXJhZGl1c109XCJuelN0cm9rZUxpbmVjYXAgPT09ICdyb3VuZCcgPyAnMTAwcHgnIDogJzAnXCJcclxuICAgICAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kXT1cIiFpc0dyYWRpZW50ID8gbnpTdHJva2VDb2xvciA6IG51bGxcIlxyXG4gICAgICAgICAgW3N0eWxlLmJhY2tncm91bmQtaW1hZ2VdPVwiaXNHcmFkaWVudCA/IGxpbmVHcmFkaWVudCA6IG51bGxcIlxyXG4gICAgICAgICAgW3N0eWxlLmhlaWdodC5weF09XCJzdHJva2VXaWR0aFwiXHJcbiAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICpuZ0lmPVwibnpTdWNjZXNzUGVyY2VudCB8fCBuelN1Y2Nlc3NQZXJjZW50ID09PSAwXCJcclxuICAgICAgICAgIGNsYXNzPVwiYW50LXByb2dyZXNzLXN1Y2Nlc3MtYmdcIlxyXG4gICAgICAgICAgW3N0eWxlLndpZHRoLiVdPVwibnpTdWNjZXNzUGVyY2VudFwiXHJcbiAgICAgICAgICBbc3R5bGUuYm9yZGVyLXJhZGl1c109XCJuelN0cm9rZUxpbmVjYXAgPT09ICdyb3VuZCcgPyAnMTAwcHgnIDogJzAnXCJcclxuICAgICAgICAgIFtzdHlsZS5oZWlnaHQucHhdPVwic3Ryb2tlV2lkdGhcIlxyXG4gICAgICAgID48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJwcm9ncmVzc0luZm9UZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDwhLS0gY2lyY2xlIC8gZGFzaGJvYXJkIHByb2dyZXNzIC0tPlxyXG4gIDxkaXZcclxuICAgIFtzdHlsZS53aWR0aC5weF09XCJ0aGlzLm56V2lkdGhcIlxyXG4gICAgW3N0eWxlLmhlaWdodC5weF09XCJ0aGlzLm56V2lkdGhcIlxyXG4gICAgW3N0eWxlLmZvbnRTaXplLnB4XT1cInRoaXMubnpXaWR0aCAqIDAuMTUgKyA2XCJcclxuICAgIGNsYXNzPVwiYW50LXByb2dyZXNzLWlubmVyXCJcclxuICAgIFtjbGFzcy5hbnQtcHJvZ3Jlc3MtY2lyY2xlLWdyYWRpZW50XT1cImlzR3JhZGllbnRcIlxyXG4gICAgKm5nSWY9XCJpc0NpcmNsZVN0eWxlXCJcclxuICA+XHJcbiAgICA8c3ZnIGNsYXNzPVwiYW50LXByb2dyZXNzLWNpcmNsZSBcIiB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIj5cclxuICAgICAgPGRlZnMgKm5nSWY9XCJpc0dyYWRpZW50XCI+XHJcbiAgICAgICAgPGxpbmVhckdyYWRpZW50IFtpZF09XCInZ3JhZGllbnQtJyArIGdyYWRpZW50SWRcIiB4MT1cIjEwMCVcIiB5MT1cIjAlXCIgeDI9XCIwJVwiIHkyPVwiMCVcIj5cclxuICAgICAgICAgIDxzdG9wXHJcbiAgICAgICAgICAgICpuZ0Zvcj1cImxldCBpIG9mIGNpcmNsZUdyYWRpZW50XCJcclxuICAgICAgICAgICAgW2F0dHIub2Zmc2V0XT1cImkub2Zmc2V0XCJcclxuICAgICAgICAgICAgW2F0dHIuc3RvcC1jb2xvcl09XCJpLmNvbG9yXCJcclxuICAgICAgICAgID48L3N0b3A+XHJcbiAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgPC9kZWZzPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGNsYXNzPVwiYW50LXByb2dyZXNzLWNpcmNsZS10cmFpbFwiXHJcbiAgICAgICAgc3Ryb2tlPVwiI2YzZjNmM1wiXHJcbiAgICAgICAgZmlsbC1vcGFjaXR5PVwiMFwiXHJcbiAgICAgICAgW2F0dHIuc3Ryb2tlLXdpZHRoXT1cInN0cm9rZVdpZHRoXCJcclxuICAgICAgICBbYXR0ci5kXT1cInBhdGhTdHJpbmdcIlxyXG4gICAgICAgIFtuZ1N0eWxlXT1cInRyYWlsUGF0aFN0eWxlXCJcclxuICAgICAgPjwvcGF0aD5cclxuICAgICAgPHBhdGhcclxuICAgICAgICAqbmdGb3I9XCJsZXQgcCBvZiBwcm9ncmVzc0NpcmNsZVBhdGg7IHRyYWNrQnk6IHRyYWNrQnlGblwiXHJcbiAgICAgICAgY2xhc3M9XCJhbnQtcHJvZ3Jlc3MtY2lyY2xlLXBhdGhcIlxyXG4gICAgICAgIGZpbGwtb3BhY2l0eT1cIjBcIlxyXG4gICAgICAgIFthdHRyLmRdPVwicGF0aFN0cmluZ1wiXHJcbiAgICAgICAgW2F0dHIuc3Ryb2tlLWxpbmVjYXBdPVwibnpTdHJva2VMaW5lY2FwXCJcclxuICAgICAgICBbYXR0ci5zdHJva2VdPVwicC5zdHJva2VcIlxyXG4gICAgICAgIFthdHRyLnN0cm9rZS13aWR0aF09XCJuelBlcmNlbnQgPyBzdHJva2VXaWR0aCA6IDBcIlxyXG4gICAgICAgIFtuZ1N0eWxlXT1cInAuc3Ryb2tlUGF0aFN0eWxlXCJcclxuICAgICAgPjwvcGF0aD5cclxuICAgIDwvc3ZnPlxyXG4gICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInByb2dyZXNzSW5mb1RlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==
import { NgClass, NgIf, NgTemplateOutlet, NgStyle, NgForOf, CommonModule } from '@angular/common';
import { ɵɵelementContainerStart, ɵɵelement, ɵɵelementContainerEnd, ɵɵnextContext, ɵɵadvance, ɵɵproperty, ɵɵtext, ɵɵtextInterpolate1, ɵɵelementStart, ɵɵtemplate, ɵɵtemplateRefExtractor, ɵɵelementEnd, ɵɵreference, ɵɵstyleProp, ɵɵstyleSanitizer, ɵɵdefaultStyleSanitizer, ɵɵnamespaceSVG, ɵɵattribute, ɵɵclassProp, ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵNgOnChangesFeature, ɵsetClassMetadata, Component, ChangeDetectionStrategy, ViewEncapsulation, Input, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import { __rest, __decorate, __metadata } from 'tslib';
import { isNotNil, NzConfigService, WithConfig, InputNumber } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function stripPercentToNumber(percent) {
    return +percent.replace('%', '');
}
const sortGradient = (gradients) => {
    let tempArr = [];
    Object.keys(gradients).forEach(key => {
        const value = gradients[key];
        const formatKey = stripPercentToNumber(key);
        if (!isNaN(formatKey)) {
            tempArr.push({
                key: formatKey,
                value
            });
        }
    });
    tempArr = tempArr.sort((a, b) => a.key - b.key);
    return tempArr;
};
const handleCircleGradient = (strokeColor) => {
    return sortGradient(strokeColor).map(({ key, value }) => ({ offset: `${key}%`, color: value }));
};
const handleLinearGradient = (strokeColor) => {
    const { from = '#1890ff', to = '#1890ff', direction = 'to right' } = strokeColor, rest = __rest(strokeColor, ["from", "to", "direction"]);
    if (Object.keys(rest).length !== 0) {
        const sortedGradients = sortGradient(rest)
            .map(({ key, value }) => `${value} ${key}%`)
            .join(', ');
        return `linear-gradient(${direction}, ${sortedGradients})`;
    }
    return `linear-gradient(${direction}, ${from}, ${to})`;
};

function NzProgressComponent_ng_template_0_span_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "i", 8);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r655 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("nzType", ctx_r655.icon);
} }
function NzProgressComponent_ng_template_0_span_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0);
} if (rf & 2) {
    const ctx_r657 = ɵɵnextContext(3);
    ɵɵtextInterpolate1(" ", ctx_r657.formatter(ctx_r657.nzPercent), " ");
} }
function NzProgressComponent_ng_template_0_span_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵtemplate(1, NzProgressComponent_ng_template_0_span_0_ng_container_1_Template, 2, 1, "ng-container", 6);
    ɵɵtemplate(2, NzProgressComponent_ng_template_0_span_0_ng_template_2_Template, 1, 1, "ng-template", null, 7, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
} if (rf & 2) {
    const _r656 = ɵɵreference(3);
    const ctx_r654 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r654.status === "exception" || ctx_r654.status === "success" && !ctx_r654.nzFormat)("ngIfElse", _r656);
} }
function NzProgressComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, NzProgressComponent_ng_template_0_span_0_Template, 4, 2, "span", 4);
} if (rf & 2) {
    const ctx_r651 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r651.nzShowInfo);
} }
function NzProgressComponent_div_3_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 14);
} if (rf & 2) {
    const ctx_r658 = ɵɵnextContext(2);
    ɵɵstyleProp("width", ctx_r658.nzSuccessPercent, "%")("border-radius", ctx_r658.nzStrokeLinecap === "round" ? "100px" : "0")("height", ctx_r658.strokeWidth, "px");
} }
function NzProgressComponent_div_3_ng_template_5_Template(rf, ctx) { }
function NzProgressComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "div", 9);
    ɵɵelementStart(2, "div", 10);
    ɵɵelement(3, "div", 11);
    ɵɵtemplate(4, NzProgressComponent_div_3_div_4_Template, 1, 3, "div", 12);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(5, NzProgressComponent_div_3_ng_template_5_Template, 0, 0, "ng-template", 13);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r652 = ɵɵnextContext();
    const _r650 = ɵɵreference(1);
    ɵɵadvance(3);
    ɵɵstyleSanitizer(ɵɵdefaultStyleSanitizer);
    ɵɵstyleProp("width", ctx_r652.nzPercent, "%")("border-radius", ctx_r652.nzStrokeLinecap === "round" ? "100px" : "0")("background", !ctx_r652.isGradient ? ctx_r652.nzStrokeColor : null)("background-image", ctx_r652.isGradient ? ctx_r652.lineGradient : null)("height", ctx_r652.strokeWidth, "px");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r652.nzSuccessPercent || ctx_r652.nzSuccessPercent === 0);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r650);
} }
function NzProgressComponent_div_4__svg_defs_2__svg_stop_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "stop");
} if (rf & 2) {
    const i_r664 = ctx.$implicit;
    ɵɵattribute("offset", i_r664.offset)("stop-color", i_r664.color);
} }
function NzProgressComponent_div_4__svg_defs_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "defs");
    ɵɵelementStart(1, "linearGradient", 18);
    ɵɵtemplate(2, NzProgressComponent_div_4__svg_defs_2__svg_stop_2_Template, 1, 2, "stop", 19);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r660 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("id", "gradient-" + ctx_r660.gradientId);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r660.circleGradient);
} }
function NzProgressComponent_div_4__svg_path_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "path", 20);
} if (rf & 2) {
    const p_r665 = ctx.$implicit;
    const ctx_r661 = ɵɵnextContext(2);
    ɵɵproperty("ngStyle", p_r665.strokePathStyle);
    ɵɵattribute("d", ctx_r661.pathString)("stroke-linecap", ctx_r661.nzStrokeLinecap)("stroke", p_r665.stroke)("stroke-width", ctx_r661.nzPercent ? ctx_r661.strokeWidth : 0);
} }
function NzProgressComponent_div_4_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵnamespaceSVG();
} }
function NzProgressComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵnamespaceSVG();
    ɵɵelementStart(1, "svg", 15);
    ɵɵtemplate(2, NzProgressComponent_div_4__svg_defs_2_Template, 3, 2, "defs", 2);
    ɵɵelement(3, "path", 16);
    ɵɵtemplate(4, NzProgressComponent_div_4__svg_path_4_Template, 1, 5, "path", 17);
    ɵɵelementEnd();
    ɵɵtemplate(5, NzProgressComponent_div_4_ng_template_5_Template, 0, 0, "ng-template", 13);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r653 = ɵɵnextContext();
    const _r650 = ɵɵreference(1);
    ɵɵstyleProp("width", ctx_r653.nzWidth, "px")("height", ctx_r653.nzWidth, "px")("font-size", ctx_r653.nzWidth * 0.15 + 6, "px");
    ɵɵclassProp("ant-progress-circle-gradient", ctx_r653.isGradient);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r653.isGradient);
    ɵɵadvance(1);
    ɵɵproperty("ngStyle", ctx_r653.trailPathStyle);
    ɵɵattribute("stroke-width", ctx_r653.strokeWidth)("d", ctx_r653.pathString);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r653.progressCirclePath)("ngForTrackBy", ctx_r653.trackByFn);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r650);
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
class NzProgressComponent {
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
/** @nocollapse */ NzProgressComponent.ɵfac = function NzProgressComponent_Factory(t) { return new (t || NzProgressComponent)(ɵɵdirectiveInject(NzConfigService)); };
/** @nocollapse */ NzProgressComponent.ɵcmp = ɵɵdefineComponent({ type: NzProgressComponent, selectors: [["nz-progress"]], inputs: { nzShowInfo: "nzShowInfo", nzWidth: "nzWidth", nzStrokeColor: "nzStrokeColor", nzSize: "nzSize", nzFormat: "nzFormat", nzSuccessPercent: "nzSuccessPercent", nzPercent: "nzPercent", nzStrokeWidth: "nzStrokeWidth", nzGapDegree: "nzGapDegree", nzStatus: "nzStatus", nzType: "nzType", nzGapPosition: "nzGapPosition", nzStrokeLinecap: "nzStrokeLinecap" }, exportAs: ["nzProgress"], features: [ɵɵNgOnChangesFeature()], decls: 5, vars: 7, consts: [["progressInfoTemplate", ""], [3, "ngClass"], [4, "ngIf"], ["class", "ant-progress-inner", 3, "width", "height", "fontSize", "ant-progress-circle-gradient", 4, "ngIf"], ["class", "ant-progress-text", 4, "ngIf"], [1, "ant-progress-text"], [4, "ngIf", "ngIfElse"], ["formatTemplate", ""], ["nz-icon", "", 3, "nzType"], [1, "ant-progress-outer"], [1, "ant-progress-inner"], [1, "ant-progress-bg"], ["class", "ant-progress-success-bg", 3, "width", "border-radius", "height", 4, "ngIf"], [3, "ngTemplateOutlet"], [1, "ant-progress-success-bg"], ["viewBox", "0 0 100 100", 1, "ant-progress-circle"], ["stroke", "#f3f3f3", "fill-opacity", "0", 1, "ant-progress-circle-trail", 3, "ngStyle"], ["class", "ant-progress-circle-path", "fill-opacity", "0", 3, "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["x1", "100%", "y1", "0%", "x2", "0%", "y2", "0%", 3, "id"], [4, "ngFor", "ngForOf"], ["fill-opacity", "0", 1, "ant-progress-circle-path", 3, "ngStyle"]], template: function NzProgressComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, NzProgressComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        ɵɵelementStart(2, "div", 1);
        ɵɵtemplate(3, NzProgressComponent_div_3_Template, 6, 7, "div", 2);
        ɵɵtemplate(4, NzProgressComponent_div_4_Template, 6, 11, "div", 3);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵclassProp("ant-progress-line", ctx.nzType == "line")("ant-progress-small", ctx.nzSize == "small")("ant-progress-show-info", ctx.nzShowInfo)("ant-progress-circle", ctx.isCircleStyle);
        ɵɵproperty("ngClass", "ant-progress ant-progress-status-" + ctx.status);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.nzType === "line");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.isCircleStyle);
    } }, directives: [NgClass, NgIf, NzIconDirective, NgTemplateOutlet, NgStyle, NgForOf], encapsulation: 2, changeDetection: 0 });
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
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzProgressComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-progress',
                exportAs: 'nzProgress',
                preserveWhitespaces: false,
                templateUrl: './nz-progress.component.html'
            }]
    }], function () { return [{ type: NzConfigService }]; }, { nzShowInfo: [{
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

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzProgressModule {
}
/** @nocollapse */ NzProgressModule.ɵmod = ɵɵdefineNgModule({ type: NzProgressModule });
/** @nocollapse */ NzProgressModule.ɵinj = ɵɵdefineInjector({ factory: function NzProgressModule_Factory(t) { return new (t || NzProgressModule)(); }, imports: [[CommonModule, NzIconModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzProgressModule, { declarations: [NzProgressComponent], imports: [CommonModule, NzIconModule], exports: [NzProgressComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzProgressModule, [{
        type: NgModule,
        args: [{
                exports: [NzProgressComponent],
                declarations: [NzProgressComponent],
                imports: [CommonModule, NzIconModule]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NzProgressComponent, NzProgressModule };
//# sourceMappingURL=ng-zorro-antd-progress.js.map

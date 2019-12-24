import { ɵɵelementContainerStart, ɵɵtext, ɵɵelementContainerEnd, ɵɵnextContext, ɵɵadvance, ɵɵtextInterpolate, ɵɵdirectiveInject, Renderer2, ChangeDetectorRef, ɵɵdefineComponent, ɵɵstaticViewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵNgOnChangesFeature, ɵɵprojectionDef, ɵɵelementStart, ɵɵelement, ɵɵtemplate, ɵɵelementEnd, ɵɵprojection, ɵɵclassProp, ɵɵproperty, ɵsetClassMetadata, Component, ChangeDetectionStrategy, ViewEncapsulation, ViewChild, Input, ɵɵtextInterpolate1, ɵɵcontentQuery, ɵɵviewQuery, ContentChildren, ContentChild, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NzStringTemplateOutletDirective, reverseChildNodes, NzAddOnModule } from 'ng-zorro-antd/core';
import { Platform, PlatformModule } from '@angular/cdk/platform';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NgIf, CommonModule } from '@angular/common';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const _c0 = ["liTemplate"];
function NzTimelineItemComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r964 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r964.nzDot);
} }
const _c1 = ["*"];
class NzTimelineItemComponent {
    constructor(renderer, cdr) {
        this.renderer = renderer;
        this.cdr = cdr;
        this.nzColor = 'blue';
        this.isLast = false;
    }
    ngOnInit() {
        this.tryUpdateCustomColor();
    }
    ngOnChanges(changes) {
        if (changes.nzColor) {
            this.tryUpdateCustomColor();
        }
    }
    detectChanges() {
        this.cdr.detectChanges();
    }
    tryUpdateCustomColor() {
        const defaultColors = ['blue', 'red', 'green', 'gray'];
        const circle = this.liTemplate.nativeElement.querySelector('.ant-timeline-item-head');
        if (defaultColors.indexOf(this.nzColor) === -1) {
            this.renderer.setStyle(circle, 'border-color', this.nzColor);
        }
        else {
            this.renderer.removeStyle(circle, 'border-color');
        }
    }
}
/** @nocollapse */ NzTimelineItemComponent.ɵfac = function NzTimelineItemComponent_Factory(t) { return new (t || NzTimelineItemComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef)); };
/** @nocollapse */ NzTimelineItemComponent.ɵcmp = ɵɵdefineComponent({ type: NzTimelineItemComponent, selectors: [["nz-timeline-item"], ["", "nz-timeline-item", ""]], viewQuery: function NzTimelineItemComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.liTemplate = _t.first);
    } }, inputs: { nzColor: "nzColor", nzDot: "nzDot" }, exportAs: ["nzTimelineItem"], features: [ɵɵNgOnChangesFeature()], ngContentSelectors: _c1, decls: 7, vars: 9, consts: [[1, "ant-timeline-item"], ["liTemplate", ""], [1, "ant-timeline-item-tail"], [1, "ant-timeline-item-head"], [4, "nzStringTemplateOutlet"], [1, "ant-timeline-item-content"]], template: function NzTimelineItemComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "li", 0, 1);
        ɵɵelement(2, "div", 2);
        ɵɵelementStart(3, "div", 3);
        ɵɵtemplate(4, NzTimelineItemComponent_ng_container_4_Template, 2, 1, "ng-container", 4);
        ɵɵelementEnd();
        ɵɵelementStart(5, "div", 5);
        ɵɵprojection(6);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵclassProp("ant-timeline-item-right", ctx.position === "right")("ant-timeline-item-left", ctx.position === "left")("ant-timeline-item-last", ctx.isLast);
        ɵɵadvance(3);
        ɵɵclassProp("ant-timeline-item-head-red", ctx.nzColor === "red")("ant-timeline-item-head-blue", ctx.nzColor === "blue")("ant-timeline-item-head-green", ctx.nzColor === "green")("ant-timeline-item-head-gray", ctx.nzColor === "gray")("ant-timeline-item-head-custom", !!ctx.nzDot);
        ɵɵadvance(1);
        ɵɵproperty("nzStringTemplateOutlet", ctx.nzDot);
    } }, directives: [NzStringTemplateOutletDirective], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzTimelineItemComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                selector: 'nz-timeline-item, [nz-timeline-item]',
                exportAs: 'nzTimelineItem',
                templateUrl: './nz-timeline-item.component.html'
            }]
    }], function () { return [{ type: Renderer2 }, { type: ChangeDetectorRef }]; }, { liTemplate: [{
            type: ViewChild,
            args: ['liTemplate', { static: true }]
        }], nzColor: [{
            type: Input
        }], nzDot: [{
            type: Input
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const _c0$1 = ["pending"];
const _c1$1 = ["timeline"];
function NzTimelineComponent_li_3_ng_container_3_i_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 9);
} }
function NzTimelineComponent_li_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵtemplate(2, NzTimelineComponent_li_3_ng_container_3_i_2_Template, 1, 0, "i", 8);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r960 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r960.nzPendingDot, "");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r960.nzPendingDot);
} }
function NzTimelineComponent_li_3_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r961 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r961.isPendingBoolean ? "" : ctx_r961.nzPending, " ");
} }
function NzTimelineComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li", 3);
    ɵɵelement(1, "div", 4);
    ɵɵelementStart(2, "div", 5);
    ɵɵtemplate(3, NzTimelineComponent_li_3_ng_container_3_Template, 3, 2, "ng-container", 6);
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 7);
    ɵɵtemplate(5, NzTimelineComponent_li_3_ng_container_5_Template, 2, 1, "ng-container", 6);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r959 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r959.nzPendingDot);
    ɵɵadvance(2);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r959.nzPending);
} }
const _c2 = ["*"];
class NzTimelineComponent {
    constructor(cdr, platform) {
        this.cdr = cdr;
        this.platform = platform;
        this.nzReverse = false;
        this.isPendingBoolean = false;
        this.destroy$ = new Subject();
    }
    ngOnChanges(changes) {
        const modeChanges = changes.nzMode;
        const reverseChanges = changes.nzReverse;
        const pendingChanges = changes.nzPending;
        if (modeChanges && (modeChanges.previousValue !== modeChanges.currentValue || modeChanges.isFirstChange())) {
            this.updateChildren();
        }
        if (reverseChanges && reverseChanges.previousValue !== reverseChanges.currentValue && !reverseChanges.isFirstChange()) {
            this.reverseChildTimelineDots();
        }
        if (pendingChanges) {
            this.isPendingBoolean = pendingChanges.currentValue === true;
        }
    }
    ngAfterContentInit() {
        this.updateChildren();
        if (this.listOfTimeLine) {
            this.listOfTimeLine.changes.pipe(takeUntil(this.destroy$)).subscribe(() => {
                this.updateChildren();
            });
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    updateChildren() {
        if (this.listOfTimeLine && this.listOfTimeLine.length) {
            const length = this.listOfTimeLine.length;
            this.listOfTimeLine.toArray().forEach((item, index) => {
                item.isLast = !this.nzReverse ? index === length - 1 : index === 0;
                item.position =
                    this.nzMode === 'left' || !this.nzMode
                        ? undefined
                        : this.nzMode === 'right'
                            ? 'right'
                            : this.nzMode === 'alternate' && index % 2 === 0
                                ? 'left'
                                : 'right';
                item.detectChanges();
            });
            this.cdr.markForCheck();
        }
    }
    reverseChildTimelineDots() {
        if (this.platform.isBrowser) {
            reverseChildNodes(this.timeline.nativeElement);
            this.updateChildren();
        }
    }
}
/** @nocollapse */ NzTimelineComponent.ɵfac = function NzTimelineComponent_Factory(t) { return new (t || NzTimelineComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Platform)); };
/** @nocollapse */ NzTimelineComponent.ɵcmp = ɵɵdefineComponent({ type: NzTimelineComponent, selectors: [["nz-timeline"]], contentQueries: function NzTimelineComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵɵcontentQuery(dirIndex, _c0$1, true);
        ɵɵcontentQuery(dirIndex, NzTimelineItemComponent, false);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._pendingContent = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfTimeLine = _t);
    } }, viewQuery: function NzTimelineComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c1$1, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.timeline = _t.first);
    } }, inputs: { nzMode: "nzMode", nzPending: "nzPending", nzPendingDot: "nzPendingDot", nzReverse: "nzReverse" }, exportAs: ["nzTimeline"], features: [ɵɵNgOnChangesFeature()], ngContentSelectors: _c2, decls: 4, vars: 5, consts: [[1, "ant-timeline"], ["timeline", ""], ["class", "ant-timeline-item ant-timeline-item-pending", 4, "ngIf"], [1, "ant-timeline-item", "ant-timeline-item-pending"], [1, "ant-timeline-item-tail"], [1, "ant-timeline-item-head", "ant-timeline-item-head-custom", "ant-timeline-item-head-blue"], [4, "nzStringTemplateOutlet"], [1, "ant-timeline-item-content"], ["nz-icon", "", "nzType", "loading", 4, "ngIf"], ["nz-icon", "", "nzType", "loading"]], template: function NzTimelineComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "ul", 0, 1);
        ɵɵprojection(2);
        ɵɵtemplate(3, NzTimelineComponent_li_3_Template, 6, 2, "li", 2);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵclassProp("ant-timeline-right", ctx.nzMode === "right")("ant-timeline-alternate", ctx.nzMode === "alternate")("ant-timeline-pending", !!ctx.nzPending)("ant-timeline-reverse", ctx.nzReverse);
        ɵɵadvance(3);
        ɵɵproperty("ngIf", ctx.nzPending);
    } }, directives: [NgIf, NzStringTemplateOutletDirective, NzIconDirective], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzTimelineComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                selector: 'nz-timeline',
                exportAs: 'nzTimeline',
                templateUrl: './nz-timeline.component.html'
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: Platform }]; }, { timeline: [{
            type: ViewChild,
            args: ['timeline', { static: false }]
        }], listOfTimeLine: [{
            type: ContentChildren,
            args: [NzTimelineItemComponent]
        }], _pendingContent: [{
            type: ContentChild,
            args: ['pending', { static: false }]
        }], nzMode: [{
            type: Input
        }], nzPending: [{
            type: Input
        }], nzPendingDot: [{
            type: Input
        }], nzReverse: [{
            type: Input
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTimelineModule {
}
/** @nocollapse */ NzTimelineModule.ɵmod = ɵɵdefineNgModule({ type: NzTimelineModule });
/** @nocollapse */ NzTimelineModule.ɵinj = ɵɵdefineInjector({ factory: function NzTimelineModule_Factory(t) { return new (t || NzTimelineModule)(); }, imports: [[CommonModule, PlatformModule, NzIconModule, NzAddOnModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzTimelineModule, { declarations: [NzTimelineItemComponent, NzTimelineComponent], imports: [CommonModule, PlatformModule, NzIconModule, NzAddOnModule], exports: [NzTimelineItemComponent, NzTimelineComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzTimelineModule, [{
        type: NgModule,
        args: [{
                declarations: [NzTimelineItemComponent, NzTimelineComponent],
                exports: [NzTimelineItemComponent, NzTimelineComponent],
                imports: [CommonModule, PlatformModule, NzIconModule, NzAddOnModule]
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

export { NzTimelineComponent, NzTimelineItemComponent, NzTimelineModule };
//# sourceMappingURL=ng-zorro-antd-timeline.js.map

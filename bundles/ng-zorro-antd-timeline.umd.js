(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ng-zorro-antd/core'), require('@angular/cdk/platform'), require('rxjs'), require('rxjs/operators'), require('@angular/common'), require('ng-zorro-antd/icon')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/timeline', ['exports', '@angular/core', 'ng-zorro-antd/core', '@angular/cdk/platform', 'rxjs', 'rxjs/operators', '@angular/common', 'ng-zorro-antd/icon'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].timeline = {}), global.ng.core, global['ng-zorro-antd'].core, global.ng.cdk.platform, global.rxjs, global.rxjs.operators, global.ng.common, global['ng-zorro-antd'].icon));
}(this, (function (exports, core, core$1, platform, rxjs, operators, common, icon) { 'use strict';

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var _c0 = ["liTemplate"];
    function NzTimelineItemComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtext(1);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r971 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(ctx_r971.nzDot);
    } }
    var _c1 = ["*"];
    var NzTimelineItemComponent = /** @class */ (function () {
        function NzTimelineItemComponent(renderer, cdr) {
            this.renderer = renderer;
            this.cdr = cdr;
            this.nzColor = 'blue';
            this.isLast = false;
        }
        NzTimelineItemComponent.prototype.ngOnInit = function () {
            this.tryUpdateCustomColor();
        };
        NzTimelineItemComponent.prototype.ngOnChanges = function (changes) {
            if (changes.nzColor) {
                this.tryUpdateCustomColor();
            }
        };
        NzTimelineItemComponent.prototype.detectChanges = function () {
            this.cdr.detectChanges();
        };
        NzTimelineItemComponent.prototype.tryUpdateCustomColor = function () {
            var defaultColors = ['blue', 'red', 'green', 'gray'];
            var circle = this.liTemplate.nativeElement.querySelector('.ant-timeline-item-head');
            if (defaultColors.indexOf(this.nzColor) === -1) {
                this.renderer.setStyle(circle, 'border-color', this.nzColor);
            }
            else {
                this.renderer.removeStyle(circle, 'border-color');
            }
        };
        /** @nocollapse */ NzTimelineItemComponent.ɵfac = function NzTimelineItemComponent_Factory(t) { return new (t || NzTimelineItemComponent)(core.ɵɵdirectiveInject(core.Renderer2), core.ɵɵdirectiveInject(core.ChangeDetectorRef)); };
        /** @nocollapse */ NzTimelineItemComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzTimelineItemComponent, selectors: [["nz-timeline-item"], ["", "nz-timeline-item", ""]], viewQuery: function NzTimelineItemComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵstaticViewQuery(_c0, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.liTemplate = _t.first);
            } }, inputs: { nzColor: "nzColor", nzDot: "nzDot" }, exportAs: ["nzTimelineItem"], features: [core.ɵɵNgOnChangesFeature()], ngContentSelectors: _c1, decls: 7, vars: 9, consts: [[1, "ant-timeline-item"], ["liTemplate", ""], [1, "ant-timeline-item-tail"], [1, "ant-timeline-item-head"], [4, "nzStringTemplateOutlet"], [1, "ant-timeline-item-content"]], template: function NzTimelineItemComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵelementStart(0, "li", 0, 1);
                core.ɵɵelement(2, "div", 2);
                core.ɵɵelementStart(3, "div", 3);
                core.ɵɵtemplate(4, NzTimelineItemComponent_ng_container_4_Template, 2, 1, "ng-container", 4);
                core.ɵɵelementEnd();
                core.ɵɵelementStart(5, "div", 5);
                core.ɵɵprojection(6);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵclassProp("ant-timeline-item-right", ctx.position === "right")("ant-timeline-item-left", ctx.position === "left")("ant-timeline-item-last", ctx.isLast);
                core.ɵɵadvance(3);
                core.ɵɵclassProp("ant-timeline-item-head-red", ctx.nzColor === "red")("ant-timeline-item-head-blue", ctx.nzColor === "blue")("ant-timeline-item-head-green", ctx.nzColor === "green")("ant-timeline-item-head-gray", ctx.nzColor === "gray")("ant-timeline-item-head-custom", !!ctx.nzDot);
                core.ɵɵadvance(1);
                core.ɵɵproperty("nzStringTemplateOutlet", ctx.nzDot);
            } }, directives: [core$1.NzStringTemplateOutletDirective], encapsulation: 2, changeDetection: 0 });
        return NzTimelineItemComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzTimelineItemComponent, [{
            type: core.Component,
            args: [{
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    selector: 'nz-timeline-item, [nz-timeline-item]',
                    exportAs: 'nzTimelineItem',
                    templateUrl: './nz-timeline-item.component.html'
                }]
        }], function () { return [{ type: core.Renderer2 }, { type: core.ChangeDetectorRef }]; }, { liTemplate: [{
                type: core.ViewChild,
                args: ['liTemplate', { static: true }]
            }], nzColor: [{
                type: core.Input
            }], nzDot: [{
                type: core.Input
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var _c0$1 = ["pending"];
    var _c1$1 = ["timeline"];
    function NzTimelineComponent_li_3_ng_container_3_i_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "i", 9);
    } }
    function NzTimelineComponent_li_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtext(1);
        core.ɵɵtemplate(2, NzTimelineComponent_li_3_ng_container_3_i_2_Template, 1, 0, "i", 8);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r967 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", ctx_r967.nzPendingDot, "");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !ctx_r967.nzPendingDot);
    } }
    function NzTimelineComponent_li_3_ng_container_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtext(1);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r968 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", ctx_r968.isPendingBoolean ? "" : ctx_r968.nzPending, " ");
    } }
    function NzTimelineComponent_li_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "li", 3);
        core.ɵɵelement(1, "div", 4);
        core.ɵɵelementStart(2, "div", 5);
        core.ɵɵtemplate(3, NzTimelineComponent_li_3_ng_container_3_Template, 3, 2, "ng-container", 6);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(4, "div", 7);
        core.ɵɵtemplate(5, NzTimelineComponent_li_3_ng_container_5_Template, 2, 1, "ng-container", 6);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r966 = core.ɵɵnextContext();
        core.ɵɵadvance(3);
        core.ɵɵproperty("nzStringTemplateOutlet", ctx_r966.nzPendingDot);
        core.ɵɵadvance(2);
        core.ɵɵproperty("nzStringTemplateOutlet", ctx_r966.nzPending);
    } }
    var _c2 = ["*"];
    var NzTimelineComponent = /** @class */ (function () {
        function NzTimelineComponent(cdr, platform) {
            this.cdr = cdr;
            this.platform = platform;
            this.nzReverse = false;
            this.isPendingBoolean = false;
            this.destroy$ = new rxjs.Subject();
        }
        NzTimelineComponent.prototype.ngOnChanges = function (changes) {
            var modeChanges = changes.nzMode;
            var reverseChanges = changes.nzReverse;
            var pendingChanges = changes.nzPending;
            if (modeChanges && (modeChanges.previousValue !== modeChanges.currentValue || modeChanges.isFirstChange())) {
                this.updateChildren();
            }
            if (reverseChanges && reverseChanges.previousValue !== reverseChanges.currentValue && !reverseChanges.isFirstChange()) {
                this.reverseChildTimelineDots();
            }
            if (pendingChanges) {
                this.isPendingBoolean = pendingChanges.currentValue === true;
            }
        };
        NzTimelineComponent.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.updateChildren();
            if (this.listOfTimeLine) {
                this.listOfTimeLine.changes.pipe(operators.takeUntil(this.destroy$)).subscribe(function () {
                    _this.updateChildren();
                });
            }
        };
        NzTimelineComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        NzTimelineComponent.prototype.updateChildren = function () {
            var _this = this;
            if (this.listOfTimeLine && this.listOfTimeLine.length) {
                var length_1 = this.listOfTimeLine.length;
                this.listOfTimeLine.toArray().forEach(function (item, index) {
                    item.isLast = !_this.nzReverse ? index === length_1 - 1 : index === 0;
                    item.position =
                        _this.nzMode === 'left' || !_this.nzMode
                            ? undefined
                            : _this.nzMode === 'right'
                                ? 'right'
                                : _this.nzMode === 'alternate' && index % 2 === 0
                                    ? 'left'
                                    : 'right';
                    item.detectChanges();
                });
                this.cdr.markForCheck();
            }
        };
        NzTimelineComponent.prototype.reverseChildTimelineDots = function () {
            if (this.platform.isBrowser) {
                core$1.reverseChildNodes(this.timeline.nativeElement);
                this.updateChildren();
            }
        };
        /** @nocollapse */ NzTimelineComponent.ɵfac = function NzTimelineComponent_Factory(t) { return new (t || NzTimelineComponent)(core.ɵɵdirectiveInject(core.ChangeDetectorRef), core.ɵɵdirectiveInject(platform.Platform)); };
        /** @nocollapse */ NzTimelineComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzTimelineComponent, selectors: [["nz-timeline"]], contentQueries: function NzTimelineComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
                core.ɵɵcontentQuery(dirIndex, _c0$1, true);
                core.ɵɵcontentQuery(dirIndex, NzTimelineItemComponent, false);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx._pendingContent = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.listOfTimeLine = _t);
            } }, viewQuery: function NzTimelineComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵviewQuery(_c1$1, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.timeline = _t.first);
            } }, inputs: { nzMode: "nzMode", nzPending: "nzPending", nzPendingDot: "nzPendingDot", nzReverse: "nzReverse" }, exportAs: ["nzTimeline"], features: [core.ɵɵNgOnChangesFeature()], ngContentSelectors: _c2, decls: 4, vars: 5, consts: [[1, "ant-timeline"], ["timeline", ""], ["class", "ant-timeline-item ant-timeline-item-pending", 4, "ngIf"], [1, "ant-timeline-item", "ant-timeline-item-pending"], [1, "ant-timeline-item-tail"], [1, "ant-timeline-item-head", "ant-timeline-item-head-custom", "ant-timeline-item-head-blue"], [4, "nzStringTemplateOutlet"], [1, "ant-timeline-item-content"], ["nz-icon", "", "nzType", "loading", 4, "ngIf"], ["nz-icon", "", "nzType", "loading"]], template: function NzTimelineComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵelementStart(0, "ul", 0, 1);
                core.ɵɵprojection(2);
                core.ɵɵtemplate(3, NzTimelineComponent_li_3_Template, 6, 2, "li", 2);
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵclassProp("ant-timeline-right", ctx.nzMode === "right")("ant-timeline-alternate", ctx.nzMode === "alternate")("ant-timeline-pending", !!ctx.nzPending)("ant-timeline-reverse", ctx.nzReverse);
                core.ɵɵadvance(3);
                core.ɵɵproperty("ngIf", ctx.nzPending);
            } }, directives: [common.NgIf, core$1.NzStringTemplateOutletDirective, icon.NzIconDirective], encapsulation: 2, changeDetection: 0 });
        return NzTimelineComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzTimelineComponent, [{
            type: core.Component,
            args: [{
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    selector: 'nz-timeline',
                    exportAs: 'nzTimeline',
                    templateUrl: './nz-timeline.component.html'
                }]
        }], function () { return [{ type: core.ChangeDetectorRef }, { type: platform.Platform }]; }, { timeline: [{
                type: core.ViewChild,
                args: ['timeline', { static: false }]
            }], listOfTimeLine: [{
                type: core.ContentChildren,
                args: [NzTimelineItemComponent]
            }], _pendingContent: [{
                type: core.ContentChild,
                args: ['pending', { static: false }]
            }], nzMode: [{
                type: core.Input
            }], nzPending: [{
                type: core.Input
            }], nzPendingDot: [{
                type: core.Input
            }], nzReverse: [{
                type: core.Input
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzTimelineModule = /** @class */ (function () {
        function NzTimelineModule() {
        }
        /** @nocollapse */ NzTimelineModule.ɵmod = core.ɵɵdefineNgModule({ type: NzTimelineModule });
        /** @nocollapse */ NzTimelineModule.ɵinj = core.ɵɵdefineInjector({ factory: function NzTimelineModule_Factory(t) { return new (t || NzTimelineModule)(); }, imports: [[common.CommonModule, platform.PlatformModule, icon.NzIconModule, core$1.NzAddOnModule]] });
        return NzTimelineModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(NzTimelineModule, { declarations: [NzTimelineItemComponent, NzTimelineComponent], imports: [common.CommonModule, platform.PlatformModule, icon.NzIconModule, core$1.NzAddOnModule], exports: [NzTimelineItemComponent, NzTimelineComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzTimelineModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [NzTimelineItemComponent, NzTimelineComponent],
                    exports: [NzTimelineItemComponent, NzTimelineComponent],
                    imports: [common.CommonModule, platform.PlatformModule, icon.NzIconModule, core$1.NzAddOnModule]
                }]
        }], null, null); })();

    exports.NzTimelineComponent = NzTimelineComponent;
    exports.NzTimelineItemComponent = NzTimelineItemComponent;
    exports.NzTimelineModule = NzTimelineModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-timeline.umd.js.map

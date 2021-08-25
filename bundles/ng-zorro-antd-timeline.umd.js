(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('ng-zorro-antd/core'),require('@angular/cdk/platform'),require('@angular/common'),require('ng-zorro-antd/icon'),exports, require('@angular/core'), require('@angular/cdk/platform'), require('rxjs'), require('rxjs/operators'), require('ng-zorro-antd/core'), require('@angular/common'), require('ng-zorro-antd/icon')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/timeline', ['@angular/core','ng-zorro-antd/core','@angular/cdk/platform','@angular/common','ng-zorro-antd/icon','exports', '@angular/core', '@angular/cdk/platform', 'rxjs', 'rxjs/operators', 'ng-zorro-antd/core', '@angular/common', 'ng-zorro-antd/icon'], factory) :
    (global = global || self, factory(global.ng.core,global.ngZorroAntd.core,global.ng.cdk.platform,global.ng.common,global.ngZorroAntd.icon,(global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].timeline = {}), global.ng.core, global.ng.cdk.platform, global.rxjs, global.rxjs.operators, global['ng-zorro-antd'].core, global.ng.common, global['ng-zorro-antd'].icon));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,ɵngcc4,exports, core, platform, rxjs, operators, core$1, common, icon) { 
var _c0 = ["liTemplate"];
function NzTimelineItemComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.nzDot);
} }
var _c1 = ["*"];
var _c2 = ["pending"];
var _c3 = ["timeline"];
function NzTimelineComponent_li_3_ng_container_3_i_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 9);
} }
function NzTimelineComponent_li_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵtemplate(2, NzTimelineComponent_li_3_ng_container_3_i_2_Template, 1, 0, "i", 8);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r2.nzPendingDot, "");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r2.nzPendingDot);
} }
function NzTimelineComponent_li_3_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r3.isPendingBoolean ? "" : ctx_r3.nzPending, " ");
} }
function NzTimelineComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 3);
    ɵngcc0.ɵɵelement(1, "div", 4);
    ɵngcc0.ɵɵelementStart(2, "div", 5);
    ɵngcc0.ɵɵtemplate(3, NzTimelineComponent_li_3_ng_container_3_Template, 3, 2, "ng-container", 6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "div", 7);
    ɵngcc0.ɵɵtemplate(5, NzTimelineComponent_li_3_ng_container_5_Template, 2, 1, "ng-container", 6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r1.nzPendingDot);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r1.nzPending);
} }
'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzTimelineItemComponent = /** @class */ (function () {
        function NzTimelineItemComponent(renderer, cdr) {
            this.renderer = renderer;
            this.cdr = cdr;
            this.nzColor = 'blue';
            this.isLast = false;
        }
        /**
         * @return {?}
         */
        NzTimelineItemComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.tryUpdateCustomColor();
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        NzTimelineItemComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.nzColor) {
                this.tryUpdateCustomColor();
            }
        };
        /**
         * @return {?}
         */
        NzTimelineItemComponent.prototype.detectChanges = /**
         * @return {?}
         */
        function () {
            this.cdr.detectChanges();
        };
        /**
         * @private
         * @return {?}
         */
        NzTimelineItemComponent.prototype.tryUpdateCustomColor = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var defaultColors = ['blue', 'red', 'green', 'gray'];
            /** @type {?} */
            var circle = this.liTemplate.nativeElement.querySelector('.ant-timeline-item-head');
            if (defaultColors.indexOf(this.nzColor) === -1) {
                this.renderer.setStyle(circle, 'border-color', this.nzColor);
            }
            else {
                this.renderer.removeStyle(circle, 'border-color');
            }
        };
        /** @nocollapse */
        NzTimelineItemComponent.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: core.ChangeDetectorRef }
        ]; };
        NzTimelineItemComponent.propDecorators = {
            liTemplate: [{ type: core.ViewChild, args: ['liTemplate', { static: true },] }],
            nzColor: [{ type: core.Input }],
            nzDot: [{ type: core.Input }]
        };
NzTimelineItemComponent.ɵfac = function NzTimelineItemComponent_Factory(t) { return new (t || NzTimelineItemComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
NzTimelineItemComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTimelineItemComponent, selectors: [["nz-timeline-item"], ["", "nz-timeline-item", ""]], viewQuery: function NzTimelineItemComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.liTemplate = _t.first);
    } }, inputs: { nzColor: "nzColor", nzDot: "nzDot" }, exportAs: ["nzTimelineItem"], features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c1, decls: 7, vars: 17, consts: [[1, "ant-timeline-item"], ["liTemplate", ""], [1, "ant-timeline-item-tail"], [1, "ant-timeline-item-head"], [4, "nzStringTemplateOutlet"], [1, "ant-timeline-item-content"]], template: function NzTimelineItemComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "li", 0, 1);
        ɵngcc0.ɵɵelement(2, "div", 2);
        ɵngcc0.ɵɵelementStart(3, "div", 3);
        ɵngcc0.ɵɵtemplate(4, NzTimelineItemComponent_ng_container_4_Template, 2, 1, "ng-container", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "div", 5);
        ɵngcc0.ɵɵprojection(6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-timeline-item-right", ctx.position === "right")("ant-timeline-item-left", ctx.position === "left")("ant-timeline-item-last", ctx.isLast);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵclassProp("ant-timeline-item-head-red", ctx.nzColor === "red")("ant-timeline-item-head-blue", ctx.nzColor === "blue")("ant-timeline-item-head-green", ctx.nzColor === "green")("ant-timeline-item-head-gray", ctx.nzColor === "gray")("ant-timeline-item-head-custom", !!ctx.nzDot);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx.nzDot);
    } }, directives: [ɵngcc1.NzStringTemplateOutletDirective], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTimelineItemComponent, [{
        type: core.Component,
        args: [{
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                preserveWhitespaces: false,
                selector: 'nz-timeline-item, [nz-timeline-item]',
                exportAs: 'nzTimelineItem',
                template: "<li\r\n  class=\"ant-timeline-item\"\r\n  [class.ant-timeline-item-right]=\"position === 'right'\"\r\n  [class.ant-timeline-item-left]=\"position === 'left'\"\r\n  [class.ant-timeline-item-last]=\"isLast\"\r\n  #liTemplate>\r\n  <div class=\"ant-timeline-item-tail\"></div>\r\n  <div\r\n    class=\"ant-timeline-item-head\"\r\n    [class.ant-timeline-item-head-red]=\"nzColor === 'red'\"\r\n    [class.ant-timeline-item-head-blue]=\"nzColor === 'blue'\"\r\n    [class.ant-timeline-item-head-green]=\"nzColor === 'green'\"\r\n    [class.ant-timeline-item-head-gray]=\"nzColor === 'gray'\"\r\n    [class.ant-timeline-item-head-custom]=\"!!nzDot\">\r\n    <ng-container *nzStringTemplateOutlet=\"nzDot\">{{ nzDot }}</ng-container>\r\n  </div>\r\n  <div class=\"ant-timeline-item-content\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</li>\r\n"
            }]
    }], function () { return [{ type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ChangeDetectorRef }]; }, { nzColor: [{
            type: core.Input
        }], liTemplate: [{
            type: core.ViewChild,
            args: ['liTemplate', { static: true }]
        }], nzDot: [{
            type: core.Input
        }] }); })();
        return NzTimelineItemComponent;
    }());
    if (false) {
        /** @type {?} */
        NzTimelineItemComponent.prototype.liTemplate;
        /** @type {?} */
        NzTimelineItemComponent.prototype.nzColor;
        /** @type {?} */
        NzTimelineItemComponent.prototype.nzDot;
        /** @type {?} */
        NzTimelineItemComponent.prototype.isLast;
        /** @type {?} */
        NzTimelineItemComponent.prototype.position;
        /**
         * @type {?}
         * @private
         */
        NzTimelineItemComponent.prototype.renderer;
        /**
         * @type {?}
         * @private
         */
        NzTimelineItemComponent.prototype.cdr;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzTimelineComponent = /** @class */ (function () {
        function NzTimelineComponent(cdr, platform) {
            this.cdr = cdr;
            this.platform = platform;
            this.nzReverse = false;
            this.isPendingBoolean = false;
            this.destroy$ = new rxjs.Subject();
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        NzTimelineComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            /** @type {?} */
            var modeChanges = changes.nzMode;
            /** @type {?} */
            var reverseChanges = changes.nzReverse;
            /** @type {?} */
            var pendingChanges = changes.nzPending;
            if (modeChanges && (modeChanges.previousValue !== modeChanges.currentValue || modeChanges.isFirstChange())) {
                this.updateChildren();
            }
            if (reverseChanges &&
                reverseChanges.previousValue !== reverseChanges.currentValue &&
                !reverseChanges.isFirstChange()) {
                this.reverseChildTimelineDots();
            }
            if (pendingChanges) {
                this.isPendingBoolean = pendingChanges.currentValue === true;
            }
        };
        /**
         * @return {?}
         */
        NzTimelineComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.updateChildren();
            if (this.listOfTimeLine) {
                this.listOfTimeLine.changes.pipe(operators.takeUntil(this.destroy$)).subscribe((/**
                 * @return {?}
                 */
                function () {
                    _this.updateChildren();
                }));
            }
        };
        /**
         * @return {?}
         */
        NzTimelineComponent.prototype.ngOnDestroy = /**
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
        NzTimelineComponent.prototype.updateChildren = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.listOfTimeLine && this.listOfTimeLine.length) {
                /** @type {?} */
                var length_1 = this.listOfTimeLine.length;
                this.listOfTimeLine.toArray().forEach((/**
                 * @param {?} item
                 * @param {?} index
                 * @return {?}
                 */
                function (item, index) {
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
                }));
                this.cdr.markForCheck();
            }
        };
        /**
         * @private
         * @return {?}
         */
        NzTimelineComponent.prototype.reverseChildTimelineDots = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.platform.isBrowser) {
                core$1.reverseChildNodes((/** @type {?} */ (this.timeline.nativeElement)));
                this.updateChildren();
            }
        };
        /** @nocollapse */
        NzTimelineComponent.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef },
            { type: platform.Platform }
        ]; };
        NzTimelineComponent.propDecorators = {
            timeline: [{ type: core.ViewChild, args: ['timeline', { static: false },] }],
            listOfTimeLine: [{ type: core.ContentChildren, args: [NzTimelineItemComponent,] }],
            _pendingContent: [{ type: core.ContentChild, args: ['pending', { static: false },] }],
            nzMode: [{ type: core.Input }],
            nzPending: [{ type: core.Input }],
            nzPendingDot: [{ type: core.Input }],
            nzReverse: [{ type: core.Input }]
        };
NzTimelineComponent.ɵfac = function NzTimelineComponent_Factory(t) { return new (t || NzTimelineComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Platform)); };
NzTimelineComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTimelineComponent, selectors: [["nz-timeline"]], contentQueries: function NzTimelineComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, _c2, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzTimelineItemComponent, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._pendingContent = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.listOfTimeLine = _t);
    } }, viewQuery: function NzTimelineComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c3, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.timeline = _t.first);
    } }, inputs: { nzReverse: "nzReverse", nzMode: "nzMode", nzPending: "nzPending", nzPendingDot: "nzPendingDot" }, exportAs: ["nzTimeline"], features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c1, decls: 4, vars: 9, consts: [[1, "ant-timeline"], ["timeline", ""], ["class", "ant-timeline-item ant-timeline-item-pending", 4, "ngIf"], [1, "ant-timeline-item", "ant-timeline-item-pending"], [1, "ant-timeline-item-tail"], [1, "ant-timeline-item-head", "ant-timeline-item-head-custom", "ant-timeline-item-head-blue"], [4, "nzStringTemplateOutlet"], [1, "ant-timeline-item-content"], ["nz-icon", "", "nzType", "loading", 4, "ngIf"], ["nz-icon", "", "nzType", "loading"]], template: function NzTimelineComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "ul", 0, 1);
        ɵngcc0.ɵɵprojection(2);
        ɵngcc0.ɵɵtemplate(3, NzTimelineComponent_li_3_Template, 6, 2, "li", 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-timeline-right", ctx.nzMode === "right")("ant-timeline-alternate", ctx.nzMode === "alternate")("ant-timeline-pending", !!ctx.nzPending)("ant-timeline-reverse", ctx.nzReverse);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzPending);
    } }, directives: [ɵngcc3.NgIf, ɵngcc1.NzStringTemplateOutletDirective, ɵngcc4.NzIconDirective], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTimelineComponent, [{
        type: core.Component,
        args: [{
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                preserveWhitespaces: false,
                selector: 'nz-timeline',
                exportAs: 'nzTimeline',
                template: "<ul\r\n  class=\"ant-timeline\"\r\n  [class.ant-timeline-right]=\"nzMode === 'right'\"\r\n  [class.ant-timeline-alternate]=\"nzMode === 'alternate'\"\r\n  [class.ant-timeline-pending]=\"!!nzPending\"\r\n  [class.ant-timeline-reverse]=\"nzReverse\"\r\n  #timeline>\r\n  <!-- User inserted timeline dots. -->\r\n  <ng-content></ng-content>\r\n  <!-- Pending dot. -->\r\n  <li *ngIf=\"nzPending\" class=\"ant-timeline-item ant-timeline-item-pending\">\r\n    <div class=\"ant-timeline-item-tail\"></div>\r\n    <div class=\"ant-timeline-item-head ant-timeline-item-head-custom ant-timeline-item-head-blue\">\r\n      <ng-container *nzStringTemplateOutlet=\"nzPendingDot\">\r\n        {{ nzPendingDot }}<i *ngIf=\"!nzPendingDot\" nz-icon nzType=\"loading\"></i>\r\n      </ng-container>\r\n    </div>\r\n    <div class=\"ant-timeline-item-content\">\r\n      <ng-container *nzStringTemplateOutlet=\"nzPending\">\r\n        {{ isPendingBoolean ? '' : nzPending }}\r\n      </ng-container>\r\n    </div>\r\n  </li>\r\n</ul>\r\n"
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc2.Platform }]; }, { nzReverse: [{
            type: core.Input
        }], timeline: [{
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
        }] }); })();
        return NzTimelineComponent;
    }());
    if (false) {
        /** @type {?} */
        NzTimelineComponent.prototype.timeline;
        /** @type {?} */
        NzTimelineComponent.prototype.listOfTimeLine;
        /** @type {?} */
        NzTimelineComponent.prototype._pendingContent;
        /** @type {?} */
        NzTimelineComponent.prototype.nzMode;
        /** @type {?} */
        NzTimelineComponent.prototype.nzPending;
        /** @type {?} */
        NzTimelineComponent.prototype.nzPendingDot;
        /** @type {?} */
        NzTimelineComponent.prototype.nzReverse;
        /** @type {?} */
        NzTimelineComponent.prototype.isPendingBoolean;
        /**
         * @type {?}
         * @private
         */
        NzTimelineComponent.prototype.destroy$;
        /**
         * @type {?}
         * @private
         */
        NzTimelineComponent.prototype.cdr;
        /**
         * @type {?}
         * @private
         */
        NzTimelineComponent.prototype.platform;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzTimelineModule = /** @class */ (function () {
        function NzTimelineModule() {
        }
NzTimelineModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzTimelineModule });
NzTimelineModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzTimelineModule_Factory(t) { return new (t || NzTimelineModule)(); }, imports: [[common.CommonModule, platform.PlatformModule, icon.NzIconModule, core$1.NzAddOnModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzTimelineModule, { declarations: [NzTimelineItemComponent,
        NzTimelineComponent], imports: [ɵngcc3.CommonModule, ɵngcc2.PlatformModule, ɵngcc4.NzIconModule, ɵngcc1.NzAddOnModule], exports: [NzTimelineItemComponent,
        NzTimelineComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTimelineModule, [{
        type: core.NgModule,
        args: [{
                declarations: [NzTimelineItemComponent, NzTimelineComponent],
                exports: [NzTimelineItemComponent, NzTimelineComponent],
                imports: [common.CommonModule, platform.PlatformModule, icon.NzIconModule, core$1.NzAddOnModule]
            }]
    }], function () { return []; }, null); })();
        return NzTimelineModule;
    }());

    exports.NzTimelineComponent = NzTimelineComponent;
    exports.NzTimelineItemComponent = NzTimelineItemComponent;
    exports.NzTimelineModule = NzTimelineModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-zorro-antd-timeline.umd.js.map
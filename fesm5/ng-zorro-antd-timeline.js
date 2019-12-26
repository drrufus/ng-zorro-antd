import { Component, ChangeDetectionStrategy, ViewEncapsulation, Renderer2, ChangeDetectorRef, ViewChild, Input, ContentChildren, ContentChild, NgModule } from '@angular/core';
import { Platform, PlatformModule } from '@angular/cdk/platform';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { reverseChildNodes, NzAddOnModule } from 'ng-zorro-antd/core';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';

/**
 * @fileoverview added by tsickle
 * Generated from: nz-timeline-item.component.ts
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
    NzTimelineItemComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    selector: 'nz-timeline-item, [nz-timeline-item]',
                    exportAs: 'nzTimelineItem',
                    template: "<li\r\n  class=\"ant-timeline-item\"\r\n  [class.ant-timeline-item-right]=\"position === 'right'\"\r\n  [class.ant-timeline-item-left]=\"position === 'left'\"\r\n  [class.ant-timeline-item-last]=\"isLast\"\r\n  #liTemplate>\r\n  <div class=\"ant-timeline-item-tail\"></div>\r\n  <div\r\n    class=\"ant-timeline-item-head\"\r\n    [class.ant-timeline-item-head-red]=\"nzColor === 'red'\"\r\n    [class.ant-timeline-item-head-blue]=\"nzColor === 'blue'\"\r\n    [class.ant-timeline-item-head-green]=\"nzColor === 'green'\"\r\n    [class.ant-timeline-item-head-gray]=\"nzColor === 'gray'\"\r\n    [class.ant-timeline-item-head-custom]=\"!!nzDot\">\r\n    <ng-container *nzStringTemplateOutlet=\"nzDot\">{{ nzDot }}</ng-container>\r\n  </div>\r\n  <div class=\"ant-timeline-item-content\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</li>\r\n"
                }] }
    ];
    /** @nocollapse */
    NzTimelineItemComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ChangeDetectorRef }
    ]; };
    NzTimelineItemComponent.propDecorators = {
        liTemplate: [{ type: ViewChild, args: ['liTemplate', { static: true },] }],
        nzColor: [{ type: Input }],
        nzDot: [{ type: Input }]
    };
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
 * Generated from: nz-timeline.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzTimelineComponent = /** @class */ (function () {
    function NzTimelineComponent(cdr, platform) {
        this.cdr = cdr;
        this.platform = platform;
        this.nzReverse = false;
        this.isPendingBoolean = false;
        this.destroy$ = new Subject();
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
            this.listOfTimeLine.changes.pipe(takeUntil(this.destroy$)).subscribe((/**
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
            reverseChildNodes((/** @type {?} */ (this.timeline.nativeElement)));
            this.updateChildren();
        }
    };
    NzTimelineComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    selector: 'nz-timeline',
                    exportAs: 'nzTimeline',
                    template: "<ul\r\n  class=\"ant-timeline\"\r\n  [class.ant-timeline-right]=\"nzMode === 'right'\"\r\n  [class.ant-timeline-alternate]=\"nzMode === 'alternate'\"\r\n  [class.ant-timeline-pending]=\"!!nzPending\"\r\n  [class.ant-timeline-reverse]=\"nzReverse\"\r\n  #timeline>\r\n  <!-- User inserted timeline dots. -->\r\n  <ng-content></ng-content>\r\n  <!-- Pending dot. -->\r\n  <li *ngIf=\"nzPending\" class=\"ant-timeline-item ant-timeline-item-pending\">\r\n    <div class=\"ant-timeline-item-tail\"></div>\r\n    <div class=\"ant-timeline-item-head ant-timeline-item-head-custom ant-timeline-item-head-blue\">\r\n      <ng-container *nzStringTemplateOutlet=\"nzPendingDot\">\r\n        {{ nzPendingDot }}<i *ngIf=\"!nzPendingDot\" nz-icon nzType=\"loading\"></i>\r\n      </ng-container>\r\n    </div>\r\n    <div class=\"ant-timeline-item-content\">\r\n      <ng-container *nzStringTemplateOutlet=\"nzPending\">\r\n        {{ isPendingBoolean ? '' : nzPending }}\r\n      </ng-container>\r\n    </div>\r\n  </li>\r\n</ul>\r\n"
                }] }
    ];
    /** @nocollapse */
    NzTimelineComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: Platform }
    ]; };
    NzTimelineComponent.propDecorators = {
        timeline: [{ type: ViewChild, args: ['timeline', { static: false },] }],
        listOfTimeLine: [{ type: ContentChildren, args: [NzTimelineItemComponent,] }],
        _pendingContent: [{ type: ContentChild, args: ['pending', { static: false },] }],
        nzMode: [{ type: Input }],
        nzPending: [{ type: Input }],
        nzPendingDot: [{ type: Input }],
        nzReverse: [{ type: Input }]
    };
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
 * Generated from: nz-timeline.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzTimelineModule = /** @class */ (function () {
    function NzTimelineModule() {
    }
    NzTimelineModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NzTimelineItemComponent, NzTimelineComponent],
                    exports: [NzTimelineItemComponent, NzTimelineComponent],
                    imports: [CommonModule, PlatformModule, NzIconModule, NzAddOnModule]
                },] }
    ];
    return NzTimelineModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-timeline.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzTimelineComponent, NzTimelineItemComponent, NzTimelineModule };
//# sourceMappingURL=ng-zorro-antd-timeline.js.map

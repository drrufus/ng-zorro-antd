import { __decorate, __metadata } from 'tslib';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, EventEmitter, ChangeDetectorRef, Host, ElementRef, Renderer2, Output, NgModule } from '@angular/core';
import { NzConfigService, WithConfig, InputBoolean, collapseMotion, NzAddOnModule } from 'ng-zorro-antd/core';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';

/**
 * @fileoverview added by tsickle
 * Generated from: nz-collapse.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'collapse';
var NzCollapseComponent = /** @class */ (function () {
    function NzCollapseComponent(nzConfigService) {
        this.nzConfigService = nzConfigService;
        this.listOfNzCollapsePanelComponent = [];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    NzCollapseComponent.prototype.addPanel = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.listOfNzCollapsePanelComponent.push(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzCollapseComponent.prototype.removePanel = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.listOfNzCollapsePanelComponent.splice(this.listOfNzCollapsePanelComponent.indexOf(value), 1);
    };
    /**
     * @param {?} collapse
     * @return {?}
     */
    NzCollapseComponent.prototype.click = /**
     * @param {?} collapse
     * @return {?}
     */
    function (collapse) {
        if (this.nzAccordion && !collapse.nzActive) {
            this.listOfNzCollapsePanelComponent
                .filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item !== collapse; }))
                .forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                if (item.nzActive) {
                    item.nzActive = false;
                    item.nzActiveChange.emit(item.nzActive);
                    item.markForCheck();
                }
            }));
        }
        collapse.nzActive = !collapse.nzActive;
        collapse.nzActiveChange.emit(collapse.nzActive);
    };
    NzCollapseComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-collapse',
                    exportAs: 'nzCollapse',
                    template: "<div class=\"ant-collapse\" [class.ant-collapse-borderless]=\"!nzBordered\">\r\n  <ng-content></ng-content>\r\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    styles: ["\n      nz-collapse {\n        display: block;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzCollapseComponent.ctorParameters = function () { return [
        { type: NzConfigService }
    ]; };
    NzCollapseComponent.propDecorators = {
        nzAccordion: [{ type: Input }],
        nzBordered: [{ type: Input }]
    };
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzCollapseComponent.prototype, "nzAccordion", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, true), InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzCollapseComponent.prototype, "nzBordered", void 0);
    return NzCollapseComponent;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzCollapseComponent.prototype.listOfNzCollapsePanelComponent;
    /** @type {?} */
    NzCollapseComponent.prototype.nzAccordion;
    /** @type {?} */
    NzCollapseComponent.prototype.nzBordered;
    /** @type {?} */
    NzCollapseComponent.prototype.nzConfigService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: nz-collapse-panel.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME$1 = 'collapsePanel';
var NzCollapsePanelComponent = /** @class */ (function () {
    function NzCollapsePanelComponent(nzConfigService, cdr, nzCollapseComponent, elementRef, renderer) {
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.nzCollapseComponent = nzCollapseComponent;
        this.nzActive = false;
        this.nzDisabled = false;
        this.nzRole = 'tab';
        this.nzActiveChange = new EventEmitter();
        renderer.addClass(elementRef.nativeElement, 'ant-collapse-item');
    }
    /**
     * @return {?}
     */
    NzCollapsePanelComponent.prototype.clickHeader = /**
     * @return {?}
     */
    function () {
        if (!this.nzDisabled) {
            this.nzCollapseComponent.click(this);
        }
    };
    /**
     * @return {?}
     */
    NzCollapsePanelComponent.prototype.markForCheck = /**
     * @return {?}
     */
    function () {
        this.cdr.markForCheck();
    };
    /**
     * @return {?}
     */
    NzCollapsePanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.nzCollapseComponent.addPanel(this);
    };
    /**
     * @return {?}
     */
    NzCollapsePanelComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.nzCollapseComponent.removePanel(this);
    };
    NzCollapsePanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-collapse-panel',
                    exportAs: 'nzCollapsePanel',
                    template: "<div [attr.role]=\"nzRole\" [attr.aria-expanded]=\"nzActive\" class=\"ant-collapse-header\" (click)=\"clickHeader()\">\r\n  <ng-container *ngIf=\"nzShowArrow\">\r\n    <ng-container *nzStringTemplateOutlet=\"nzExpandedIcon\">\r\n      <a href=\"javascript:\" tabindex=\"0\">\r\n        <i nz-icon [nzType]=\"nzExpandedIcon || 'right'\" class=\"ant-collapse-arrow\" [nzRotate]=\"nzActive ? 90 : 0\"></i>\r\n      </a>\r\n    </ng-container>\r\n  </ng-container>\r\n  <ng-container *nzStringTemplateOutlet=\"nzHeader\">{{ nzHeader }}</ng-container>\r\n  <div class=\"ant-collapse-extra\" *ngIf=\"nzExtra\">\r\n    <ng-container *nzStringTemplateOutlet=\"nzExtra\">{{ nzExtra }}</ng-container>\r\n  </div>\r\n</div>\r\n<div class=\"ant-collapse-content\" [class.ant-collapse-content-active]=\"nzActive\"\r\n  [@collapseMotion]=\"nzActive ? 'expanded' : 'hidden' \">\r\n  <div class=\"ant-collapse-content-box\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    animations: [collapseMotion],
                    host: {
                        '[class.ant-collapse-no-arrow]': '!nzShowArrow',
                        '[class.ant-collapse-item-active]': 'nzActive',
                        '[class.ant-collapse-item-disabled]': 'nzDisabled'
                    },
                    styles: ["\n      nz-collapse-panel {\n        display: block;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzCollapsePanelComponent.ctorParameters = function () { return [
        { type: NzConfigService },
        { type: ChangeDetectorRef },
        { type: NzCollapseComponent, decorators: [{ type: Host }] },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    NzCollapsePanelComponent.propDecorators = {
        nzActive: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzShowArrow: [{ type: Input }],
        nzExtra: [{ type: Input }],
        nzHeader: [{ type: Input }],
        nzExpandedIcon: [{ type: Input }],
        nzRole: [{ type: Input }],
        nzActiveChange: [{ type: Output }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzCollapsePanelComponent.prototype, "nzActive", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzCollapsePanelComponent.prototype, "nzDisabled", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME$1, true), InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzCollapsePanelComponent.prototype, "nzShowArrow", void 0);
    return NzCollapsePanelComponent;
}());
if (false) {
    /** @type {?} */
    NzCollapsePanelComponent.prototype.nzActive;
    /** @type {?} */
    NzCollapsePanelComponent.prototype.nzDisabled;
    /** @type {?} */
    NzCollapsePanelComponent.prototype.nzShowArrow;
    /** @type {?} */
    NzCollapsePanelComponent.prototype.nzExtra;
    /** @type {?} */
    NzCollapsePanelComponent.prototype.nzHeader;
    /** @type {?} */
    NzCollapsePanelComponent.prototype.nzExpandedIcon;
    /** @type {?} */
    NzCollapsePanelComponent.prototype.nzRole;
    /** @type {?} */
    NzCollapsePanelComponent.prototype.nzActiveChange;
    /** @type {?} */
    NzCollapsePanelComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzCollapsePanelComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzCollapsePanelComponent.prototype.nzCollapseComponent;
}

/**
 * @fileoverview added by tsickle
 * Generated from: nz-collapse.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzCollapseModule = /** @class */ (function () {
    function NzCollapseModule() {
    }
    NzCollapseModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NzCollapsePanelComponent, NzCollapseComponent],
                    exports: [NzCollapsePanelComponent, NzCollapseComponent],
                    imports: [CommonModule, NzIconModule, NzAddOnModule]
                },] }
    ];
    return NzCollapseModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-collapse.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzCollapseComponent, NzCollapseModule, NzCollapsePanelComponent };
//# sourceMappingURL=ng-zorro-antd-collapse.js.map

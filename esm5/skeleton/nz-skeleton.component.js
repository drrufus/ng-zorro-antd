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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';
import { toCssPixel } from 'ng-zorro-antd/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function NzSkeletonComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 5);
    ɵngcc0.ɵɵelement(1, "span", 6);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("ant-skeleton-avatar-lg", ctx_r2.avatar.size === "large")("ant-skeleton-avatar-sm", ctx_r2.avatar.size === "small")("ant-skeleton-avatar-circle", ctx_r2.avatar.shape === "circle")("ant-skeleton-avatar-square", ctx_r2.avatar.shape === "square");
} }
function NzSkeletonComponent_ng_container_0_h3_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "h3", 7);
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵstyleProp("width", ctx_r3.toCSSUnit(ctx_r3.title.width));
} }
function NzSkeletonComponent_ng_container_0_ul_4_li_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "li");
} if (rf & 2) {
    var i_r7 = ctx.index;
    var ctx_r5 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵstyleProp("width", ctx_r5.toCSSUnit(ctx_r5.widthList[i_r7]));
} }
function NzSkeletonComponent_ng_container_0_ul_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "ul", 8);
    ɵngcc0.ɵɵtemplate(1, NzSkeletonComponent_ng_container_0_ul_4_li_1_Template, 1, 2, "li", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r4.rowsList);
} }
function NzSkeletonComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzSkeletonComponent_ng_container_0_div_1_Template, 2, 8, "div", 1);
    ɵngcc0.ɵɵelementStart(2, "div", 2);
    ɵngcc0.ɵɵtemplate(3, NzSkeletonComponent_ng_container_0_h3_3_Template, 1, 2, "h3", 3);
    ɵngcc0.ɵɵtemplate(4, NzSkeletonComponent_ng_container_0_ul_4_Template, 2, 1, "ul", 4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !!ctx_r0.nzAvatar);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", !!ctx_r0.nzTitle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !!ctx_r0.nzParagraph);
} }
function NzSkeletonComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵprojection(1);
    ɵngcc0.ɵɵelementContainerEnd();
} }
var _c0 = ["*"];
var NzSkeletonComponent = /** @class */ (function () {
    function NzSkeletonComponent(cdr, renderer, elementRef) {
        this.cdr = cdr;
        this.nzActive = false;
        this.nzLoading = true;
        this.nzTitle = true;
        this.nzAvatar = false;
        this.nzParagraph = true;
        this.rowsList = [];
        this.widthList = [];
        renderer.addClass(elementRef.nativeElement, 'ant-skeleton');
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    NzSkeletonComponent.prototype.toCSSUnit = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = ''; }
        return toCssPixel(value);
    };
    /**
     * @private
     * @return {?}
     */
    NzSkeletonComponent.prototype.getTitleProps = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var hasAvatar = !!this.nzAvatar;
        /** @type {?} */
        var hasParagraph = !!this.nzParagraph;
        /** @type {?} */
        var width = '';
        if (!hasAvatar && hasParagraph) {
            width = '38%';
        }
        else if (hasAvatar && hasParagraph) {
            width = '50%';
        }
        return tslib_1.__assign({ width: width }, this.getProps(this.nzTitle));
    };
    /**
     * @private
     * @return {?}
     */
    NzSkeletonComponent.prototype.getAvatarProps = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var shape = !!this.nzTitle && !this.nzParagraph ? 'square' : 'circle';
        /** @type {?} */
        var size = 'large';
        return tslib_1.__assign({ shape: shape, size: size }, this.getProps(this.nzAvatar));
    };
    /**
     * @private
     * @return {?}
     */
    NzSkeletonComponent.prototype.getParagraphProps = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var hasAvatar = !!this.nzAvatar;
        /** @type {?} */
        var hasTitle = !!this.nzTitle;
        /** @type {?} */
        var basicProps = {};
        // Width
        if (!hasAvatar || !hasTitle) {
            basicProps.width = '61%';
        }
        // Rows
        if (!hasAvatar && hasTitle) {
            basicProps.rows = 3;
        }
        else {
            basicProps.rows = 2;
        }
        return tslib_1.__assign({}, basicProps, this.getProps(this.nzParagraph));
    };
    /**
     * @private
     * @template T
     * @param {?} prop
     * @return {?}
     */
    NzSkeletonComponent.prototype.getProps = /**
     * @private
     * @template T
     * @param {?} prop
     * @return {?}
     */
    function (prop) {
        return prop && typeof prop === 'object' ? prop : {};
    };
    /**
     * @private
     * @return {?}
     */
    NzSkeletonComponent.prototype.getWidthList = /**
     * @private
     * @return {?}
     */
    function () {
        var _a = this.paragraph, width = _a.width, rows = _a.rows;
        /** @type {?} */
        var widthList = [];
        if (width && Array.isArray(width)) {
            widthList = width;
        }
        else if (width && !Array.isArray(width)) {
            widthList = [];
            widthList[(/** @type {?} */ (rows)) - 1] = width;
        }
        return widthList;
    };
    /**
     * @private
     * @return {?}
     */
    NzSkeletonComponent.prototype.updateProps = /**
     * @private
     * @return {?}
     */
    function () {
        this.title = this.getTitleProps();
        this.avatar = this.getAvatarProps();
        this.paragraph = this.getParagraphProps();
        this.rowsList = tslib_1.__spread(Array(this.paragraph.rows));
        this.widthList = this.getWidthList();
        this.cdr.markForCheck();
    };
    /**
     * @return {?}
     */
    NzSkeletonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.updateProps();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzSkeletonComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzTitle || changes.nzAvatar || changes.nzParagraph) {
            this.updateProps();
        }
    };
    /** @nocollapse */
    NzSkeletonComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    NzSkeletonComponent.propDecorators = {
        nzActive: [{ type: Input }],
        nzLoading: [{ type: Input }],
        nzTitle: [{ type: Input }],
        nzAvatar: [{ type: Input }],
        nzParagraph: [{ type: Input }]
    };
NzSkeletonComponent.ɵfac = function NzSkeletonComponent_Factory(t) { return new (t || NzSkeletonComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NzSkeletonComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzSkeletonComponent, selectors: [["nz-skeleton"]], hostVars: 4, hostBindings: function NzSkeletonComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-skeleton-with-avatar", !!ctx.nzAvatar)("ant-skeleton-active", ctx.nzActive);
    } }, inputs: { nzActive: "nzActive", nzLoading: "nzLoading", nzTitle: "nzTitle", nzAvatar: "nzAvatar", nzParagraph: "nzParagraph" }, exportAs: ["nzSkeleton"], features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "ant-skeleton-header", 4, "ngIf"], [1, "ant-skeleton-content"], ["class", "ant-skeleton-title", 3, "width", 4, "ngIf"], ["class", "ant-skeleton-paragraph", 4, "ngIf"], [1, "ant-skeleton-header"], [1, "ant-skeleton-avatar"], [1, "ant-skeleton-title"], [1, "ant-skeleton-paragraph"], [3, "width", 4, "ngFor", "ngForOf"]], template: function NzSkeletonComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, NzSkeletonComponent_ng_container_0_Template, 5, 3, "ng-container", 0);
        ɵngcc0.ɵɵtemplate(1, NzSkeletonComponent_ng_container_1_Template, 2, 0, "ng-container", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzLoading);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.nzLoading);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgForOf], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzSkeletonComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-skeleton',
                exportAs: 'nzSkeleton',
                template: "<ng-container *ngIf=\"nzLoading\">\r\n  <div class=\"ant-skeleton-header\" *ngIf=\"!!nzAvatar\">\r\n    <span\r\n      class=\"ant-skeleton-avatar\"\r\n      [class.ant-skeleton-avatar-lg]=\"avatar.size === 'large'\"\r\n      [class.ant-skeleton-avatar-sm]=\"avatar.size === 'small'\"\r\n      [class.ant-skeleton-avatar-circle]=\"avatar.shape === 'circle'\"\r\n      [class.ant-skeleton-avatar-square]=\"avatar.shape === 'square'\">\r\n    </span>\r\n  </div>\r\n  <div class=\"ant-skeleton-content\">\r\n    <h3 *ngIf=\"!!nzTitle\" class=\"ant-skeleton-title\" [style.width]=\"toCSSUnit(title.width)\"></h3>\r\n    <ul *ngIf=\"!!nzParagraph\" class=\"ant-skeleton-paragraph\">\r\n      <li *ngFor=\"let row of rowsList; let i=index\" [style.width]=\"toCSSUnit(widthList[i])\">\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</ng-container>\r\n<ng-container *ngIf=\"!nzLoading\">\r\n  <ng-content></ng-content>\r\n</ng-container>",
                host: {
                    '[class.ant-skeleton-with-avatar]': '!!nzAvatar',
                    '[class.ant-skeleton-active]': 'nzActive'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ElementRef }]; }, { nzActive: [{
            type: Input
        }], nzLoading: [{
            type: Input
        }], nzTitle: [{
            type: Input
        }], nzAvatar: [{
            type: Input
        }], nzParagraph: [{
            type: Input
        }] }); })();
    return NzSkeletonComponent;
}());
export { NzSkeletonComponent };
if (false) {
    /** @type {?} */
    NzSkeletonComponent.prototype.nzActive;
    /** @type {?} */
    NzSkeletonComponent.prototype.nzLoading;
    /** @type {?} */
    NzSkeletonComponent.prototype.nzTitle;
    /** @type {?} */
    NzSkeletonComponent.prototype.nzAvatar;
    /** @type {?} */
    NzSkeletonComponent.prototype.nzParagraph;
    /** @type {?} */
    NzSkeletonComponent.prototype.title;
    /** @type {?} */
    NzSkeletonComponent.prototype.avatar;
    /** @type {?} */
    NzSkeletonComponent.prototype.paragraph;
    /** @type {?} */
    NzSkeletonComponent.prototype.rowsList;
    /** @type {?} */
    NzSkeletonComponent.prototype.widthList;
    /**
     * @type {?}
     * @private
     */
    NzSkeletonComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2tlbGV0b24uY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJuZzovbmctem9ycm8tYW50ZC9za2VsZXRvbi9uei1za2VsZXRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBR0wsU0FBUyxFQUVULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHaEQ7SUF3QkUsNkJBQW9CLEdBQXNCLEVBQUUsUUFBbUIsRUFBRSxVQUFzQjtRQUFuRSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQVpqQyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsWUFBTyxHQUE4QixJQUFJLENBQUM7UUFDMUMsYUFBUSxHQUErQixLQUFLLENBQUM7UUFDN0MsZ0JBQVcsR0FBa0MsSUFBSSxDQUFDO1FBSzNELGFBQVEsR0FBYSxFQUFFLENBQUM7UUFDeEIsY0FBUyxHQUEyQixFQUFFLENBQUM7UUFHckMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7O0lBRUQsdUNBQVM7Ozs7SUFBVCxVQUFVLEtBQTJCO1FBQTNCLHNCQUFBLEVBQUEsVUFBMkI7UUFDbkMsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFTywyQ0FBYTs7OztJQUFyQjs7WUFDUSxTQUFTLEdBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFROztZQUNwQyxZQUFZLEdBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFX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SSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQseUNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQyxXQUFXLEVBQUU7WUFDOUQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQyxDQUNILEFBMUZROztnQ0FYUCxTQUFTLFNBQUM7UUFDVCxlQUFlLEVBQUUsVEFmakIsaUJBQWlCO1dBZXVCLENBQUMsTUFBTSxGQVQvQyxTQUFTO1dBVVQsYUFBYSxFQUFFLFZBZGYsVUFBVTs7SUFjc0IsQ0FBQyxJQUFJLHNCQUNyQyxRQUFRLEVBQUU7V0FBYSxzQkFDdkIsTkFRQyxLQUFLO0lBUkUsRUFBRSxZQUFZLFVBU3JCLEtBQUs7RUFSTix3QkFTQyxLQUFLOzJCQUNMLEtBQUs7OEJBQ0wsS0FBSzs7Ozs7K1BBWHFDLHNCQUMzQyxJQUFJLEVBQUUsMEJBQ0osa0NBQWtDLEVBQUUsWUFBWSwwQkFDaEQsNkJBQTZCLEVBQUUsVUFBVSxzQkFDMUMsa0JBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQU1pQjtJQXFGbEIsMEJBQUM7Q0FBQSxBQXJHRCxJQXFHQztTQTFGWSxtQkFBbUI7OztJQUM5Qix1Q0FBMEI7O0lBQzFCLHdDQUEwQjs7SUFDMUIsc0NBQW1EOztJQUNuRCx1Q0FBc0Q7O0lBQ3RELDBDQUEyRDs7SUFFM0Qsb0NBQXVCOztJQUN2QixxQ0FBeUI7O0lBQ3pCLHdDQUErQjs7SUFDL0IsdUNBQXdCOztJQUN4Qix3Q0FBdUM7Ozs7O0lBRTNCLGtDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25Jbml0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyB0b0Nzc1BpeGVsIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgQXZhdGFyU2hhcGUsIEF2YXRhclNpemUsIE56U2tlbGV0b25BdmF0YXIsIE56U2tlbGV0b25QYXJhZ3JhcGgsIE56U2tlbGV0b25UaXRsZSB9IGZyb20gJy4vbnotc2tlbGV0b24udHlwZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHNlbGVjdG9yOiAnbnotc2tlbGV0b24nLFxyXG4gIGV4cG9ydEFzOiAnbnpTa2VsZXRvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXNrZWxldG9uLmNvbXBvbmVudC5odG1sJyxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC1za2VsZXRvbi13aXRoLWF2YXRhcl0nOiAnISFuekF2YXRhcicsXHJcbiAgICAnW2NsYXNzLmFudC1za2VsZXRvbi1hY3RpdmVdJzogJ256QWN0aXZlJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56U2tlbGV0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgbnpBY3RpdmUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBuekxvYWRpbmcgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIG56VGl0bGU6IE56U2tlbGV0b25UaXRsZSB8IGJvb2xlYW4gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIG56QXZhdGFyOiBOelNrZWxldG9uQXZhdGFyIHwgYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56UGFyYWdyYXBoOiBOelNrZWxldG9uUGFyYWdyYXBoIHwgYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIHRpdGxlOiBOelNrZWxldG9uVGl0bGU7XHJcbiAgYXZhdGFyOiBOelNrZWxldG9uQXZhdGFyO1xyXG4gIHBhcmFncmFwaDogTnpTa2VsZXRvblBhcmFncmFwaDtcclxuICByb3dzTGlzdDogbnVtYmVyW10gPSBbXTtcclxuICB3aWR0aExpc3Q6IEFycmF5PG51bWJlciB8IHN0cmluZz4gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlcjogUmVuZGVyZXIyLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XHJcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtc2tlbGV0b24nKTtcclxuICB9XHJcblxyXG4gIHRvQ1NTVW5pdCh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nID0gJycpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRvQ3NzUGl4ZWwodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRUaXRsZVByb3BzKCk6IE56U2tlbGV0b25UaXRsZSB7XHJcbiAgICBjb25zdCBoYXNBdmF0YXI6IGJvb2xlYW4gPSAhIXRoaXMubnpBdmF0YXI7XHJcbiAgICBjb25zdCBoYXNQYXJhZ3JhcGg6IGJvb2xlYW4gPSAhIXRoaXMubnpQYXJhZ3JhcGg7XHJcbiAgICBsZXQgd2lkdGggPSAnJztcclxuICAgIGlmICghaGFzQXZhdGFyICYmIGhhc1BhcmFncmFwaCkge1xyXG4gICAgICB3aWR0aCA9ICczOCUnO1xyXG4gICAgfSBlbHNlIGlmIChoYXNBdmF0YXIgJiYgaGFzUGFyYWdyYXBoKSB7XHJcbiAgICAgIHdpZHRoID0gJzUwJSc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyB3aWR0aCwgLi4udGhpcy5nZXRQcm9wcyh0aGlzLm56VGl0bGUpIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEF2YXRhclByb3BzKCk6IE56U2tlbGV0b25BdmF0YXIge1xyXG4gICAgY29uc3Qgc2hhcGU6IEF2YXRhclNoYXBlID0gISF0aGlzLm56VGl0bGUgJiYgIXRoaXMubnpQYXJhZ3JhcGggPyAnc3F1YXJlJyA6ICdjaXJjbGUnO1xyXG4gICAgY29uc3Qgc2l6ZTogQXZhdGFyU2l6ZSA9ICdsYXJnZSc7XHJcbiAgICByZXR1cm4geyBzaGFwZSwgc2l6ZSwgLi4udGhpcy5nZXRQcm9wcyh0aGlzLm56QXZhdGFyKSB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRQYXJhZ3JhcGhQcm9wcygpOiBOelNrZWxldG9uUGFyYWdyYXBoIHtcclxuICAgIGNvbnN0IGhhc0F2YXRhcjogYm9vbGVhbiA9ICEhdGhpcy5uekF2YXRhcjtcclxuICAgIGNvbnN0IGhhc1RpdGxlOiBib29sZWFuID0gISF0aGlzLm56VGl0bGU7XHJcbiAgICBjb25zdCBiYXNpY1Byb3BzOiBOelNrZWxldG9uUGFyYWdyYXBoID0ge307XHJcbiAgICAvLyBXaWR0aFxyXG4gICAgaWYgKCFoYXNBdmF0YXIgfHwgIWhhc1RpdGxlKSB7XHJcbiAgICAgIGJhc2ljUHJvcHMud2lkdGggPSAnNjElJztcclxuICAgIH1cclxuICAgIC8vIFJvd3NcclxuICAgIGlmICghaGFzQXZhdGFyICYmIGhhc1RpdGxlKSB7XHJcbiAgICAgIGJhc2ljUHJvcHMucm93cyA9IDM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBiYXNpY1Byb3BzLnJvd3MgPSAyO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgLi4uYmFzaWNQcm9wcywgLi4udGhpcy5nZXRQcm9wcyh0aGlzLm56UGFyYWdyYXBoKSB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRQcm9wczxUPihwcm9wOiBUIHwgYm9vbGVhbiB8IHVuZGVmaW5lZCk6IFQgfCB7fSB7XHJcbiAgICByZXR1cm4gcHJvcCAmJiB0eXBlb2YgcHJvcCA9PT0gJ29iamVjdCcgPyBwcm9wIDoge307XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFdpZHRoTGlzdCgpOiBBcnJheTxudW1iZXIgfCBzdHJpbmc+IHtcclxuICAgIGNvbnN0IHsgd2lkdGgsIHJvd3MgfSA9IHRoaXMucGFyYWdyYXBoO1xyXG4gICAgbGV0IHdpZHRoTGlzdDogQXJyYXk8c3RyaW5nIHwgbnVtYmVyPiA9IFtdO1xyXG4gICAgaWYgKHdpZHRoICYmIEFycmF5LmlzQXJyYXkod2lkdGgpKSB7XHJcbiAgICAgIHdpZHRoTGlzdCA9IHdpZHRoO1xyXG4gICAgfSBlbHNlIGlmICh3aWR0aCAmJiAhQXJyYXkuaXNBcnJheSh3aWR0aCkpIHtcclxuICAgICAgd2lkdGhMaXN0ID0gW107XHJcbiAgICAgIHdpZHRoTGlzdFtyb3dzISAtIDFdID0gd2lkdGg7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gd2lkdGhMaXN0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVQcm9wcygpOiB2b2lkIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aGlzLmdldFRpdGxlUHJvcHMoKTtcclxuICAgIHRoaXMuYXZhdGFyID0gdGhpcy5nZXRBdmF0YXJQcm9wcygpO1xyXG4gICAgdGhpcy5wYXJhZ3JhcGggPSB0aGlzLmdldFBhcmFncmFwaFByb3BzKCk7XHJcbiAgICB0aGlzLnJvd3NMaXN0ID0gWy4uLkFycmF5KHRoaXMucGFyYWdyYXBoLnJvd3MpXTtcclxuICAgIHRoaXMud2lkdGhMaXN0ID0gdGhpcy5nZXRXaWR0aExpc3QoKTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZVByb3BzKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5uelRpdGxlIHx8IGNoYW5nZXMubnpBdmF0YXIgfHwgY2hhbmdlcy5uelBhcmFncmFwaCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZVByb3BzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==
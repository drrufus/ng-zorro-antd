import { __decorate, __metadata, __read, __spread } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, Host, Input, NgZone, Optional, Output, QueryList, TemplateRef, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { defer, merge, Subscription } from 'rxjs';
import { filter, switchMap, take } from 'rxjs/operators';
import { InputBoolean, NzNoAnimationDirective, slideMotion } from 'ng-zorro-antd/core';
import { NzAutocompleteOptionComponent } from './nz-autocomplete-option.component';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
import * as i2 from "@angular/common";
import * as i3 from "./nz-autocomplete-option.component";
var _c0 = ["panel"];
var _c1 = ["content"];
function NzAutocompleteComponent_ng_template_0_4_ng_template_0_Template(rf, ctx) { }
function NzAutocompleteComponent_ng_template_0_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NzAutocompleteComponent_ng_template_0_4_ng_template_0_Template, 0, 0, "ng-template");
} }
function NzAutocompleteComponent_ng_template_0_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
function NzAutocompleteComponent_ng_template_0_ng_template_7_nz_auto_option_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nz-auto-option", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var option_r23 = ctx.$implicit;
    i0.ɵɵproperty("nzValue", option_r23);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(option_r23);
} }
function NzAutocompleteComponent_ng_template_0_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NzAutocompleteComponent_ng_template_0_ng_template_7_nz_auto_option_0_Template, 2, 2, "nz-auto-option", 7);
} if (rf & 2) {
    var ctx_r20 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngForOf", ctx_r20.nzDataSource);
} }
function NzAutocompleteComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 0, 1);
    i0.ɵɵelementStart(2, "div", 2);
    i0.ɵɵelementStart(3, "ul", 3);
    i0.ɵɵtemplate(4, NzAutocompleteComponent_ng_template_0_4_Template, 1, 0, undefined, 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, NzAutocompleteComponent_ng_template_0_ng_template_5_Template, 1, 0, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(7, NzAutocompleteComponent_ng_template_0_ng_template_7_Template, 1, 1, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    var _r17 = i0.ɵɵreference(6);
    var _r19 = i0.ɵɵreference(8);
    var ctx_r14 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("ant-select-dropdown-hidden", !ctx_r14.showPanel);
    i0.ɵɵproperty("@.disabled", ctx_r14.noAnimation == null ? null : ctx_r14.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r14.noAnimation == null ? null : ctx_r14.noAnimation.nzNoAnimation)("@slideMotion", ctx_r14.dropDownPosition)("ngClass", ctx_r14.nzOverlayClassName)("ngStyle", ctx_r14.nzOverlayStyle);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r14.nzDataSource ? _r19 : _r17);
} }
var _c2 = ["*"];
var NzAutocompleteComponent = /** @class */ (function () {
    function NzAutocompleteComponent(changeDetectorRef, ngZone, noAnimation) {
        var _this = this;
        this.changeDetectorRef = changeDetectorRef;
        this.ngZone = ngZone;
        this.noAnimation = noAnimation;
        this.nzOverlayClassName = '';
        this.nzOverlayStyle = {};
        this.nzDefaultActiveFirstOption = true;
        this.nzBackfill = false;
        this.compareWith = function (o1, o2) { return o1 === o2; };
        this.selectionChange = new EventEmitter();
        this.showPanel = true;
        this.isOpen = false;
        this.dropDownPosition = 'bottom';
        this.activeItemIndex = -1;
        this.selectionChangeSubscription = Subscription.EMPTY;
        this.dataSourceChangeSubscription = Subscription.EMPTY;
        /** Options changes listener */
        this.optionSelectionChanges = defer(function () {
            if (_this.options) {
                return merge.apply(void 0, __spread(_this.options.map(function (option) { return option.selectionChange; })));
            }
            return _this.ngZone.onStable.asObservable().pipe(take(1), switchMap(function () { return _this.optionSelectionChanges; }));
        });
    }
    Object.defineProperty(NzAutocompleteComponent.prototype, "options", {
        /**
         * Options accessor, its source may be content or dataSource
         */
        get: function () {
            // first dataSource
            if (this.nzDataSource) {
                return this.fromDataSourceOptions;
            }
            else {
                return this.fromContentOptions;
            }
        },
        enumerable: true,
        configurable: true
    });
    NzAutocompleteComponent.prototype.ngAfterContentInit = function () {
        if (!this.nzDataSource) {
            this.optionsInit();
        }
    };
    NzAutocompleteComponent.prototype.ngAfterViewInit = function () {
        if (this.nzDataSource) {
            this.optionsInit();
        }
    };
    NzAutocompleteComponent.prototype.ngOnDestroy = function () {
        this.dataSourceChangeSubscription.unsubscribe();
        this.selectionChangeSubscription.unsubscribe();
    };
    NzAutocompleteComponent.prototype.setVisibility = function () {
        this.showPanel = !!this.options.length;
        this.changeDetectorRef.markForCheck();
    };
    NzAutocompleteComponent.prototype.setActiveItem = function (index) {
        var activeItem = this.options.toArray()[index];
        if (activeItem && !activeItem.active) {
            this.activeItem = activeItem;
            this.activeItemIndex = index;
            this.clearSelectedOptions(this.activeItem);
            this.activeItem.setActiveStyles();
            this.changeDetectorRef.markForCheck();
        }
    };
    NzAutocompleteComponent.prototype.setNextItemActive = function () {
        var nextIndex = this.activeItemIndex + 1 <= this.options.length - 1 ? this.activeItemIndex + 1 : 0;
        this.setActiveItem(nextIndex);
    };
    NzAutocompleteComponent.prototype.setPreviousItemActive = function () {
        var previousIndex = this.activeItemIndex - 1 < 0 ? this.options.length - 1 : this.activeItemIndex - 1;
        this.setActiveItem(previousIndex);
    };
    // tslint:disable-next-line:no-any
    NzAutocompleteComponent.prototype.getOptionIndex = function (value) {
        var _this = this;
        return this.options.reduce(function (result, current, index) {
            return result === -1 ? (_this.compareWith(value, current.nzValue) ? index : -1) : result;
        }, -1);
    };
    NzAutocompleteComponent.prototype.updatePosition = function (position) {
        this.dropDownPosition = position;
        this.changeDetectorRef.markForCheck();
    };
    NzAutocompleteComponent.prototype.optionsInit = function () {
        var _this = this;
        this.setVisibility();
        this.subscribeOptionChanges();
        var changes = this.nzDataSource ? this.fromDataSourceOptions.changes : this.fromContentOptions.changes;
        // async
        this.dataSourceChangeSubscription = changes.subscribe(function (e) {
            if (!e.dirty && _this.isOpen) {
                setTimeout(function () { return _this.setVisibility(); });
            }
            _this.subscribeOptionChanges();
        });
    };
    /**
     * Clear the status of options
     */
    NzAutocompleteComponent.prototype.clearSelectedOptions = function (skip, deselect) {
        if (deselect === void 0) { deselect = false; }
        this.options.forEach(function (option) {
            if (option !== skip) {
                if (deselect) {
                    option.deselect();
                }
                option.setInactiveStyles();
            }
        });
    };
    NzAutocompleteComponent.prototype.subscribeOptionChanges = function () {
        var _this = this;
        this.selectionChangeSubscription.unsubscribe();
        this.selectionChangeSubscription = this.optionSelectionChanges
            .pipe(filter(function (event) { return event.isUserInput; }))
            .subscribe(function (event) {
            event.source.select();
            event.source.setActiveStyles();
            _this.activeItem = event.source;
            _this.activeItemIndex = _this.getOptionIndex(_this.activeItem.nzValue);
            _this.clearSelectedOptions(event.source, true);
            _this.selectionChange.emit(event.source);
        });
    };
    /** @nocollapse */ NzAutocompleteComponent.ɵfac = function NzAutocompleteComponent_Factory(t) { return new (t || NzAutocompleteComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i1.NzNoAnimationDirective, 9)); };
    /** @nocollapse */ NzAutocompleteComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzAutocompleteComponent, selectors: [["nz-autocomplete"]], contentQueries: function NzAutocompleteComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, NzAutocompleteOptionComponent, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.fromContentOptions = _t);
        } }, viewQuery: function NzAutocompleteComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(TemplateRef, true);
            i0.ɵɵviewQuery(_c0, true);
            i0.ɵɵviewQuery(_c1, true);
            i0.ɵɵviewQuery(NzAutocompleteOptionComponent, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.template = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.panel = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.content = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.fromDataSourceOptions = _t);
        } }, inputs: { nzWidth: "nzWidth", nzOverlayClassName: "nzOverlayClassName", nzOverlayStyle: "nzOverlayStyle", nzDefaultActiveFirstOption: "nzDefaultActiveFirstOption", nzBackfill: "nzBackfill", compareWith: "compareWith", nzDataSource: "nzDataSource" }, outputs: { selectionChange: "selectionChange" }, exportAs: ["nzAutocomplete"], ngContentSelectors: _c2, decls: 1, vars: 0, consts: [[1, "ant-select-dropdown", "ant-select-dropdown--single", "ant-select-dropdown-placement-bottomLeft", 3, "nzNoAnimation", "ngClass", "ngStyle"], ["panel", ""], [2, "overflow", "auto"], ["role", "menu", "aria-activedescendant", "", 1, "ant-select-dropdown-menu", "ant-select-dropdown-menu-root", "ant-select-dropdown-menu-vertical"], [4, "ngTemplateOutlet"], ["contentTemplate", ""], ["optionsTemplate", ""], [3, "nzValue", 4, "ngFor", "ngForOf"], [3, "nzValue"]], template: function NzAutocompleteComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, NzAutocompleteComponent_ng_template_0_Template, 9, 7, "ng-template");
        } }, directives: [i1.NzNoAnimationDirective, i2.NgClass, i2.NgStyle, i2.NgTemplateOutlet, i2.NgForOf, i3.NzAutocompleteOptionComponent], styles: ["\n      .ant-select-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "], encapsulation: 2, data: { animation: [slideMotion] }, changeDetection: 0 });
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzAutocompleteComponent.prototype, "nzDefaultActiveFirstOption", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzAutocompleteComponent.prototype, "nzBackfill", void 0);
    return NzAutocompleteComponent;
}());
export { NzAutocompleteComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzAutocompleteComponent, [{
        type: Component,
        args: [{
                selector: 'nz-autocomplete',
                exportAs: 'nzAutocomplete',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                templateUrl: './nz-autocomplete.component.html',
                animations: [slideMotion],
                styles: [
                    "\n      .ant-select-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "
                ]
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.NgZone }, { type: i1.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, { nzWidth: [{
            type: Input
        }], nzOverlayClassName: [{
            type: Input
        }], nzOverlayStyle: [{
            type: Input
        }], nzDefaultActiveFirstOption: [{
            type: Input
        }], nzBackfill: [{
            type: Input
        }], compareWith: [{
            type: Input
        }], nzDataSource: [{
            type: Input
        }], selectionChange: [{
            type: Output
        }], fromContentOptions: [{
            type: ContentChildren,
            args: [NzAutocompleteOptionComponent, { descendants: true }]
        }], fromDataSourceOptions: [{
            type: ViewChildren,
            args: [NzAutocompleteOptionComponent]
        }], template: [{
            type: ViewChild,
            args: [TemplateRef, { static: false }]
        }], panel: [{
            type: ViewChild,
            args: ['panel', { static: false }]
        }], content: [{
            type: ViewChild,
            args: ['content', { static: false }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvYXV0by1jb21wbGV0ZS8iLCJzb3VyY2VzIjpbIm56LWF1dG9jb21wbGV0ZS5jb21wb25lbnQudHMiLCJuei1hdXRvY29tcGxldGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFHTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsVUFBVSxFQUNWLFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxFQUNMLE1BQU0sRUFFTixRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFDVCxXQUFXLEVBQ1gsU0FBUyxFQUNULFlBQVksRUFDWixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQWMsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlELE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpELE9BQU8sRUFBZSxZQUFZLEVBQXNCLHNCQUFzQixFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXhILE9BQU8sRUFBRSw2QkFBNkIsRUFBMkIsTUFBTSxvQ0FBb0MsQ0FBQzs7Ozs7Ozs7O0lDakJwRyxxR0FFQzs7O0lBS0wsa0JBQVk7OztJQUdaLHlDQUF1RTtJQUFBLFlBRXJFO0lBQUEsaUJBQWlCOzs7SUFGaUMsb0NBQWtCO0lBQUMsZUFFckU7SUFGcUUsZ0NBRXJFOzs7SUFGRiwwSEFBdUU7OztJQUF2RCw4Q0FBbUM7OztJQTFCckQsaUNBVUU7SUFBQSw4QkFDRTtJQUFBLDZCQUtFO0lBQUEsc0ZBRUM7SUFDSCxpQkFBSztJQUNQLGlCQUFNO0lBQ1IsaUJBQU07SUFDTix1SUFDRTtJQUVGLHVJQUNFOzs7OztJQXBC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QUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsV0FBVyxFQUFFLGtDQUFrQztnQkFDL0MsVUFBVSxFQUFFLENBQUMsV0FBVyxDQUFDO2dCQUN6QixNQUFNLEVBQUU7b0JBQ04sK0xBU0M7aUJBQ0Y7YUFDRjs7c0JBdURJLElBQUk7O3NCQUFJLFFBQVE7O2tCQXJEbEIsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsTUFBTTs7a0JBb0JOLGVBQWU7bUJBQUMsNkJBQTZCLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFOztrQkFFcEUsWUFBWTttQkFBQyw2QkFBNkI7O2tCQUcxQyxTQUFTO21CQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7O2tCQUN4QyxTQUFTO21CQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7O2tCQUNwQyxTQUFTO21CQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdCxcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBRdWVyeUxpc3QsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdDaGlsZHJlbixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBkZWZlciwgbWVyZ2UsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIHN3aXRjaE1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IENvbXBhcmVXaXRoLCBJbnB1dEJvb2xlYW4sIE56RHJvcERvd25Qb3NpdGlvbiwgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSwgc2xpZGVNb3Rpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQsIE56T3B0aW9uU2VsZWN0aW9uQ2hhbmdlIH0gZnJvbSAnLi9uei1hdXRvY29tcGxldGUtb3B0aW9uLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEF1dG9jb21wbGV0ZURhdGFTb3VyY2VJdGVtIHtcclxuICB2YWx1ZTogc3RyaW5nO1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEF1dG9jb21wbGV0ZURhdGFTb3VyY2UgPSBBdXRvY29tcGxldGVEYXRhU291cmNlSXRlbVtdIHwgc3RyaW5nW10gfCBudW1iZXJbXTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotYXV0b2NvbXBsZXRlJyxcclxuICBleHBvcnRBczogJ256QXV0b2NvbXBsZXRlJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1hdXRvY29tcGxldGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGFuaW1hdGlvbnM6IFtzbGlkZU1vdGlvbl0sXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIC5hbnQtc2VsZWN0LWRyb3Bkb3duIHtcclxuICAgICAgICB0b3A6IDEwMCU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56QXV0b2NvbXBsZXRlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBueldpZHRoOiBudW1iZXI7XHJcbiAgQElucHV0KCkgbnpPdmVybGF5Q2xhc3NOYW1lID0gJyc7XHJcbiAgQElucHV0KCkgbnpPdmVybGF5U3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEZWZhdWx0QWN0aXZlRmlyc3RPcHRpb24gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekJhY2tmaWxsID0gZmFsc2U7XHJcbiAgQElucHV0KCkgY29tcGFyZVdpdGg6IENvbXBhcmVXaXRoID0gKG8xLCBvMikgPT4gbzEgPT09IG8yO1xyXG4gIEBJbnB1dCgpIG56RGF0YVNvdXJjZTogQXV0b2NvbXBsZXRlRGF0YVNvdXJjZTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2VsZWN0aW9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudD4oKTtcclxuXHJcbiAgc2hvd1BhbmVsOiBib29sZWFuID0gdHJ1ZTtcclxuICBpc09wZW46IGJvb2xlYW4gPSBmYWxzZTtcclxuICBhY3RpdmVJdGVtOiBOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudDtcclxuICBkcm9wRG93blBvc2l0aW9uOiBOekRyb3BEb3duUG9zaXRpb24gPSAnYm90dG9tJztcclxuXHJcbiAgLyoqXHJcbiAgICogT3B0aW9ucyBhY2Nlc3NvciwgaXRzIHNvdXJjZSBtYXkgYmUgY29udGVudCBvciBkYXRhU291cmNlXHJcbiAgICovXHJcbiAgZ2V0IG9wdGlvbnMoKTogUXVlcnlMaXN0PE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50PiB7XHJcbiAgICAvLyBmaXJzdCBkYXRhU291cmNlXHJcbiAgICBpZiAodGhpcy5uekRhdGFTb3VyY2UpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZnJvbURhdGFTb3VyY2VPcHRpb25zO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZnJvbUNvbnRlbnRPcHRpb25zO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIFByb3ZpZGVkIGJ5IGNvbnRlbnQgKi9cclxuICBAQ29udGVudENoaWxkcmVuKE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIGZyb21Db250ZW50T3B0aW9uczogUXVlcnlMaXN0PE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50PjtcclxuICAvKiogUHJvdmlkZWQgYnkgZGF0YVNvdXJjZSAqL1xyXG4gIEBWaWV3Q2hpbGRyZW4oTnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQpIGZyb21EYXRhU291cmNlT3B0aW9uczogUXVlcnlMaXN0PE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50PjtcclxuXHJcbiAgLyoqIGNkay1vdmVybGF5ICovXHJcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZiwgeyBzdGF0aWM6IGZhbHNlIH0pIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx7fT47XHJcbiAgQFZpZXdDaGlsZCgncGFuZWwnLCB7IHN0YXRpYzogZmFsc2UgfSkgcGFuZWw6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnY29udGVudCcsIHsgc3RhdGljOiBmYWxzZSB9KSBjb250ZW50OiBFbGVtZW50UmVmO1xyXG5cclxuICBwcml2YXRlIGFjdGl2ZUl0ZW1JbmRleDogbnVtYmVyID0gLTE7XHJcbiAgcHJpdmF0ZSBzZWxlY3Rpb25DaGFuZ2VTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XHJcbiAgcHJpdmF0ZSBkYXRhU291cmNlQ2hhbmdlU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xyXG4gIC8qKiBPcHRpb25zIGNoYW5nZXMgbGlzdGVuZXIgKi9cclxuICByZWFkb25seSBvcHRpb25TZWxlY3Rpb25DaGFuZ2VzOiBPYnNlcnZhYmxlPE56T3B0aW9uU2VsZWN0aW9uQ2hhbmdlPiA9IGRlZmVyKCgpID0+IHtcclxuICAgIGlmICh0aGlzLm9wdGlvbnMpIHtcclxuICAgICAgcmV0dXJuIG1lcmdlPE56T3B0aW9uU2VsZWN0aW9uQ2hhbmdlPiguLi50aGlzLm9wdGlvbnMubWFwKG9wdGlvbiA9PiBvcHRpb24uc2VsZWN0aW9uQ2hhbmdlKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5uZ1pvbmUub25TdGFibGUuYXNPYnNlcnZhYmxlKCkucGlwZShcclxuICAgICAgdGFrZSgxKSxcclxuICAgICAgc3dpdGNoTWFwKCgpID0+IHRoaXMub3B0aW9uU2VsZWN0aW9uQ2hhbmdlcylcclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxyXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXHJcbiAgKSB7fVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMubnpEYXRhU291cmNlKSB7XHJcbiAgICAgIHRoaXMub3B0aW9uc0luaXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56RGF0YVNvdXJjZSkge1xyXG4gICAgICB0aGlzLm9wdGlvbnNJbml0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGF0YVNvdXJjZUNoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIHNldFZpc2liaWxpdHkoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNob3dQYW5lbCA9ICEhdGhpcy5vcHRpb25zLmxlbmd0aDtcclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBzZXRBY3RpdmVJdGVtKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGNvbnN0IGFjdGl2ZUl0ZW0gPSB0aGlzLm9wdGlvbnMudG9BcnJheSgpW2luZGV4XTtcclxuICAgIGlmIChhY3RpdmVJdGVtICYmICFhY3RpdmVJdGVtLmFjdGl2ZSkge1xyXG4gICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSBhY3RpdmVJdGVtO1xyXG4gICAgICB0aGlzLmFjdGl2ZUl0ZW1JbmRleCA9IGluZGV4O1xyXG4gICAgICB0aGlzLmNsZWFyU2VsZWN0ZWRPcHRpb25zKHRoaXMuYWN0aXZlSXRlbSk7XHJcbiAgICAgIHRoaXMuYWN0aXZlSXRlbS5zZXRBY3RpdmVTdHlsZXMoKTtcclxuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldE5leHRJdGVtQWN0aXZlKCk6IHZvaWQge1xyXG4gICAgY29uc3QgbmV4dEluZGV4ID0gdGhpcy5hY3RpdmVJdGVtSW5kZXggKyAxIDw9IHRoaXMub3B0aW9ucy5sZW5ndGggLSAxID8gdGhpcy5hY3RpdmVJdGVtSW5kZXggKyAxIDogMDtcclxuICAgIHRoaXMuc2V0QWN0aXZlSXRlbShuZXh0SW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgc2V0UHJldmlvdXNJdGVtQWN0aXZlKCk6IHZvaWQge1xyXG4gICAgY29uc3QgcHJldmlvdXNJbmRleCA9IHRoaXMuYWN0aXZlSXRlbUluZGV4IC0gMSA8IDAgPyB0aGlzLm9wdGlvbnMubGVuZ3RoIC0gMSA6IHRoaXMuYWN0aXZlSXRlbUluZGV4IC0gMTtcclxuICAgIHRoaXMuc2V0QWN0aXZlSXRlbShwcmV2aW91c0luZGV4KTtcclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBnZXRPcHRpb25JbmRleCh2YWx1ZTogYW55KTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLm9wdGlvbnMucmVkdWNlKChyZXN1bHQ6IG51bWJlciwgY3VycmVudDogTnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3VsdCA9PT0gLTEgPyAodGhpcy5jb21wYXJlV2l0aCh2YWx1ZSwgY3VycmVudC5uelZhbHVlKSA/IGluZGV4IDogLTEpIDogcmVzdWx0O1xyXG4gICAgfSwgLTEpITtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVBvc2l0aW9uKHBvc2l0aW9uOiBOekRyb3BEb3duUG9zaXRpb24pOiB2b2lkIHtcclxuICAgIHRoaXMuZHJvcERvd25Qb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb3B0aW9uc0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldFZpc2liaWxpdHkoKTtcclxuICAgIHRoaXMuc3Vic2NyaWJlT3B0aW9uQ2hhbmdlcygpO1xyXG4gICAgY29uc3QgY2hhbmdlcyA9IHRoaXMubnpEYXRhU291cmNlID8gdGhpcy5mcm9tRGF0YVNvdXJjZU9wdGlvbnMuY2hhbmdlcyA6IHRoaXMuZnJvbUNvbnRlbnRPcHRpb25zLmNoYW5nZXM7XHJcbiAgICAvLyBhc3luY1xyXG4gICAgdGhpcy5kYXRhU291cmNlQ2hhbmdlU3Vic2NyaXB0aW9uID0gY2hhbmdlcy5zdWJzY3JpYmUoZSA9PiB7XHJcbiAgICAgIGlmICghZS5kaXJ0eSAmJiB0aGlzLmlzT3Blbikge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zZXRWaXNpYmlsaXR5KCkpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc3Vic2NyaWJlT3B0aW9uQ2hhbmdlcygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDbGVhciB0aGUgc3RhdHVzIG9mIG9wdGlvbnNcclxuICAgKi9cclxuICBjbGVhclNlbGVjdGVkT3B0aW9ucyhza2lwPzogTnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQgfCBudWxsLCBkZXNlbGVjdDogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICBpZiAob3B0aW9uICE9PSBza2lwKSB7XHJcbiAgICAgICAgaWYgKGRlc2VsZWN0KSB7XHJcbiAgICAgICAgICBvcHRpb24uZGVzZWxlY3QoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb3B0aW9uLnNldEluYWN0aXZlU3R5bGVzKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdWJzY3JpYmVPcHRpb25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlU3Vic2NyaXB0aW9uID0gdGhpcy5vcHRpb25TZWxlY3Rpb25DaGFuZ2VzXHJcbiAgICAgIC5waXBlKGZpbHRlcigoZXZlbnQ6IE56T3B0aW9uU2VsZWN0aW9uQ2hhbmdlKSA9PiBldmVudC5pc1VzZXJJbnB1dCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKGV2ZW50OiBOek9wdGlvblNlbGVjdGlvbkNoYW5nZSkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnNvdXJjZS5zZWxlY3QoKTtcclxuICAgICAgICBldmVudC5zb3VyY2Uuc2V0QWN0aXZlU3R5bGVzKCk7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtID0gZXZlbnQuc291cmNlO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbUluZGV4ID0gdGhpcy5nZXRPcHRpb25JbmRleCh0aGlzLmFjdGl2ZUl0ZW0ubnpWYWx1ZSk7XHJcbiAgICAgICAgdGhpcy5jbGVhclNlbGVjdGVkT3B0aW9ucyhldmVudC5zb3VyY2UsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQoZXZlbnQuc291cmNlKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsIjxuZy10ZW1wbGF0ZT5cclxuICA8ZGl2XHJcbiAgICBjbGFzcz1cImFudC1zZWxlY3QtZHJvcGRvd24gYW50LXNlbGVjdC1kcm9wZG93bi0tc2luZ2xlIGFudC1zZWxlY3QtZHJvcGRvd24tcGxhY2VtZW50LWJvdHRvbUxlZnRcIlxyXG4gICAgI3BhbmVsXHJcbiAgICBbQC5kaXNhYmxlZF09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXHJcbiAgICBbbnpOb0FuaW1hdGlvbl09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXHJcbiAgICBbQHNsaWRlTW90aW9uXT1cImRyb3BEb3duUG9zaXRpb25cIlxyXG4gICAgW2NsYXNzLmFudC1zZWxlY3QtZHJvcGRvd24taGlkZGVuXT1cIiFzaG93UGFuZWxcIlxyXG4gICAgW25nQ2xhc3NdPVwibnpPdmVybGF5Q2xhc3NOYW1lXCJcclxuICAgIFtuZ1N0eWxlXT1cIm56T3ZlcmxheVN0eWxlXCJcclxuICA+XHJcbiAgICA8ZGl2IHN0eWxlPVwib3ZlcmZsb3c6IGF1dG87XCI+XHJcbiAgICAgIDx1bFxyXG4gICAgICAgIGNsYXNzPVwiYW50LXNlbGVjdC1kcm9wZG93bi1tZW51ICBhbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtcm9vdCBhbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtdmVydGljYWxcIlxyXG4gICAgICAgIHJvbGU9XCJtZW51XCJcclxuICAgICAgICBhcmlhLWFjdGl2ZWRlc2NlbmRhbnRcclxuICAgICAgPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZVxyXG4gICAgICAgICAgKm5nVGVtcGxhdGVPdXRsZXQ9XCJuekRhdGFTb3VyY2UgPyBvcHRpb25zVGVtcGxhdGUgOiBjb250ZW50VGVtcGxhdGVcIlxyXG4gICAgICAgID48L25nLXRlbXBsYXRlPlxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPG5nLXRlbXBsYXRlICNjb250ZW50VGVtcGxhdGU+XHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgPC9uZy10ZW1wbGF0ZT5cclxuICA8bmctdGVtcGxhdGUgI29wdGlvbnNUZW1wbGF0ZT5cclxuICAgIDxuei1hdXRvLW9wdGlvbiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG56RGF0YVNvdXJjZVwiIFtuelZhbHVlXT1cIm9wdGlvblwiPnt7XHJcbiAgICAgIG9wdGlvblxyXG4gICAgfX08L256LWF1dG8tb3B0aW9uPlxyXG4gIDwvbmctdGVtcGxhdGU+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==
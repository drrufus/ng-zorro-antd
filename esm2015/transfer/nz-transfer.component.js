import { __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, QueryList, Renderer2, TemplateRef, ViewChildren, ViewEncapsulation } from '@angular/core';
import { of, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { InputBoolean, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { NzTransferListComponent } from './nz-transfer-list.component';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/i18n";
import * as i2 from "ng-zorro-antd/core";
import * as i3 from "./nz-transfer-list.component";
import * as i4 from "@angular/common";
import * as i5 from "ng-zorro-antd/button";
import * as i6 from "ng-zorro-antd/icon";
function NzTransferComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1585 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1585.nzOperations[1]);
} }
function NzTransferComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1586 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1586.nzOperations[0]);
} }
export class NzTransferComponent {
    // #endregion
    constructor(cdr, i18n, nzUpdateHostClassService, elementRef, renderer) {
        this.cdr = cdr;
        this.i18n = i18n;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.elementRef = elementRef;
        this.unsubscribe$ = new Subject();
        // tslint:disable-next-line:no-any
        this.locale = {};
        this.leftFilter = '';
        this.rightFilter = '';
        // #region fields
        this.nzDisabled = false;
        this.nzDataSource = [];
        this.nzTitles = ['', ''];
        this.nzOperations = [];
        this.nzShowSelectAll = true;
        this.nzCanMove = (arg) => of(arg.list);
        this.nzRenderList = [null, null];
        this.nzShowSearch = false;
        // events
        this.nzChange = new EventEmitter();
        this.nzSearchChange = new EventEmitter();
        this.nzSelectChange = new EventEmitter();
        // #endregion
        // #region process data
        // left
        this.leftDataSource = [];
        // right
        this.rightDataSource = [];
        this.handleLeftSelectAll = (checked) => this.handleSelect('left', checked);
        this.handleRightSelectAll = (checked) => this.handleSelect('right', checked);
        this.handleLeftSelect = (item) => this.handleSelect('left', !!item.checked, item);
        this.handleRightSelect = (item) => this.handleSelect('right', !!item.checked, item);
        // #endregion
        // #region operation
        this.leftActive = false;
        this.rightActive = false;
        this.moveToLeft = () => this.moveTo('left');
        this.moveToRight = () => this.moveTo('right');
        renderer.addClass(elementRef.nativeElement, 'ant-transfer');
    }
    splitDataSource() {
        this.leftDataSource = [];
        this.rightDataSource = [];
        this.nzDataSource.forEach(record => {
            if (record.direction === 'right') {
                record.direction = 'right';
                this.rightDataSource.push(record);
            }
            else {
                record.direction = 'left';
                this.leftDataSource.push(record);
            }
        });
    }
    getCheckedData(direction) {
        return this[direction === 'left' ? 'leftDataSource' : 'rightDataSource'].filter(w => w.checked);
    }
    handleSelect(direction, checked, item) {
        const list = this.getCheckedData(direction);
        this.updateOperationStatus(direction, list.length);
        this.nzSelectChange.emit({ direction, checked, list, item });
    }
    handleFilterChange(ret) {
        this.nzSearchChange.emit(ret);
    }
    updateOperationStatus(direction, count) {
        this[direction === 'right' ? 'leftActive' : 'rightActive'] =
            (typeof count === 'undefined' ? this.getCheckedData(direction).filter(w => !w.disabled).length : count) > 0;
    }
    moveTo(direction) {
        const oppositeDirection = direction === 'left' ? 'right' : 'left';
        this.updateOperationStatus(oppositeDirection, 0);
        const datasource = direction === 'left' ? this.rightDataSource : this.leftDataSource;
        const moveList = datasource.filter(item => item.checked === true && !item.disabled);
        this.nzCanMove({ direction, list: moveList }).subscribe(newMoveList => this.truthMoveTo(direction, newMoveList.filter(i => !!i)), () => moveList.forEach(i => (i.checked = false)));
    }
    truthMoveTo(direction, list) {
        const oppositeDirection = direction === 'left' ? 'right' : 'left';
        const datasource = direction === 'left' ? this.rightDataSource : this.leftDataSource;
        const targetDatasource = direction === 'left' ? this.leftDataSource : this.rightDataSource;
        for (const item of list) {
            item.checked = false;
            item.hide = false;
            item.direction = direction;
            datasource.splice(datasource.indexOf(item), 1);
        }
        targetDatasource.splice(0, 0, ...list);
        this.updateOperationStatus(oppositeDirection);
        this.nzChange.emit({
            from: oppositeDirection,
            to: direction,
            list
        });
        this.markForCheckAllList();
    }
    setClassMap() {
        const prefixCls = 'ant-transfer';
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, {
            [`${prefixCls}-disabled`]: this.nzDisabled,
            [`${prefixCls}-customize-list`]: this.nzRenderList.some(i => !!i)
        });
    }
    markForCheckAllList() {
        if (!this.lists) {
            return;
        }
        this.lists.forEach(i => i.markForCheck());
    }
    ngOnInit() {
        this.i18n.localeChange.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
            this.locale = this.i18n.getLocaleData('Transfer');
            this.markForCheckAllList();
        });
        this.setClassMap();
    }
    ngOnChanges(changes) {
        this.setClassMap();
        if (changes.nzDataSource || changes.nzTargetKeys) {
            this.splitDataSource();
            this.updateOperationStatus('left');
            this.updateOperationStatus('right');
            this.cdr.detectChanges();
            this.markForCheckAllList();
        }
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
/** @nocollapse */ NzTransferComponent.ɵfac = function NzTransferComponent_Factory(t) { return new (t || NzTransferComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.NzI18nService), i0.ɵɵdirectiveInject(i2.NzUpdateHostClassService), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
/** @nocollapse */ NzTransferComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzTransferComponent, selectors: [["nz-transfer"]], viewQuery: function NzTransferComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(NzTransferListComponent, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.lists = _t);
    } }, hostBindings: function NzTransferComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        i0.ɵɵallocHostVars(1);
    } if (rf & 2) {
        i0.ɵɵclassProp("ant-transfer-disabled", ctx.nzDisabled);
    } }, inputs: { nzDisabled: "nzDisabled", nzDataSource: "nzDataSource", nzTitles: "nzTitles", nzOperations: "nzOperations", nzListStyle: "nzListStyle", nzShowSelectAll: "nzShowSelectAll", nzItemUnit: "nzItemUnit", nzItemsUnit: "nzItemsUnit", nzCanMove: "nzCanMove", nzRenderList: "nzRenderList", nzRender: "nzRender", nzFooter: "nzFooter", nzShowSearch: "nzShowSearch", nzFilterOption: "nzFilterOption", nzSearchPlaceholder: "nzSearchPlaceholder", nzNotFoundContent: "nzNotFoundContent" }, outputs: { nzChange: "nzChange", nzSearchChange: "nzSearchChange", nzSelectChange: "nzSelectChange" }, exportAs: ["nzTransfer"], features: [i0.ɵɵProvidersFeature([NzUpdateHostClassService]), i0.ɵɵNgOnChangesFeature()], decls: 9, vars: 38, consts: [["data-direction", "left", 1, "ant-transfer-list", 3, "ngStyle", "titleText", "showSelectAll", "dataSource", "filter", "filterOption", "renderList", "render", "disabled", "showSearch", "searchPlaceholder", "notFoundContent", "itemUnit", "itemsUnit", "footer", "filterChange", "handleSelect", "handleSelectAll"], [1, "ant-transfer-operation"], ["nz-button", "", 3, "disabled", "nzType", "nzSize", "click"], ["nz-icon", "", "nzType", "left"], [4, "ngIf"], ["nz-icon", "", "nzType", "right"], ["data-direction", "right", 1, "ant-transfer-list", 3, "ngStyle", "titleText", "showSelectAll", "dataSource", "filter", "filterOption", "renderList", "render", "disabled", "showSearch", "searchPlaceholder", "notFoundContent", "itemUnit", "itemsUnit", "footer", "filterChange", "handleSelect", "handleSelectAll"]], template: function NzTransferComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "nz-transfer-list", 0);
        i0.ɵɵlistener("filterChange", function NzTransferComponent_Template_nz_transfer_list_filterChange_0_listener($event) { return ctx.handleFilterChange($event); })("handleSelect", function NzTransferComponent_Template_nz_transfer_list_handleSelect_0_listener($event) { return ctx.handleLeftSelect($event); })("handleSelectAll", function NzTransferComponent_Template_nz_transfer_list_handleSelectAll_0_listener($event) { return ctx.handleLeftSelectAll($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "button", 2);
        i0.ɵɵlistener("click", function NzTransferComponent_Template_button_click_2_listener($event) { return ctx.moveToLeft(); });
        i0.ɵɵelement(3, "i", 3);
        i0.ɵɵtemplate(4, NzTransferComponent_span_4_Template, 2, 1, "span", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "button", 2);
        i0.ɵɵlistener("click", function NzTransferComponent_Template_button_click_5_listener($event) { return ctx.moveToRight(); });
        i0.ɵɵelement(6, "i", 5);
        i0.ɵɵtemplate(7, NzTransferComponent_span_7_Template, 2, 1, "span", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "nz-transfer-list", 6);
        i0.ɵɵlistener("filterChange", function NzTransferComponent_Template_nz_transfer_list_filterChange_8_listener($event) { return ctx.handleFilterChange($event); })("handleSelect", function NzTransferComponent_Template_nz_transfer_list_handleSelect_8_listener($event) { return ctx.handleRightSelect($event); })("handleSelectAll", function NzTransferComponent_Template_nz_transfer_list_handleSelectAll_8_listener($event) { return ctx.handleRightSelectAll($event); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngStyle", ctx.nzListStyle)("titleText", ctx.nzTitles[0])("showSelectAll", ctx.nzShowSelectAll)("dataSource", ctx.leftDataSource)("filter", ctx.leftFilter)("filterOption", ctx.nzFilterOption)("renderList", ctx.nzRenderList[0])("render", ctx.nzRender)("disabled", ctx.nzDisabled)("showSearch", ctx.nzShowSearch)("searchPlaceholder", ctx.nzSearchPlaceholder || ctx.locale.searchPlaceholder)("notFoundContent", ctx.nzNotFoundContent)("itemUnit", ctx.nzItemUnit || ctx.locale.itemUnit)("itemsUnit", ctx.nzItemsUnit || ctx.locale.itemsUnit)("footer", ctx.nzFooter);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("disabled", ctx.nzDisabled || !ctx.leftActive)("nzType", "primary")("nzSize", "small");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.nzOperations[1]);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("disabled", ctx.nzDisabled || !ctx.rightActive)("nzType", "primary")("nzSize", "small");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.nzOperations[0]);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngStyle", ctx.nzListStyle)("titleText", ctx.nzTitles[1])("showSelectAll", ctx.nzShowSelectAll)("dataSource", ctx.rightDataSource)("filter", ctx.rightFilter)("filterOption", ctx.nzFilterOption)("renderList", ctx.nzRenderList[1])("render", ctx.nzRender)("disabled", ctx.nzDisabled)("showSearch", ctx.nzShowSearch)("searchPlaceholder", ctx.nzSearchPlaceholder || ctx.locale.searchPlaceholder)("notFoundContent", ctx.nzNotFoundContent)("itemUnit", ctx.nzItemUnit || ctx.locale.itemUnit)("itemsUnit", ctx.nzItemsUnit || ctx.locale.itemsUnit)("footer", ctx.nzFooter);
    } }, directives: [i3.NzTransferListComponent, i4.NgStyle, i5.NzButtonComponent, i6.NzIconDirective, i4.NgIf], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTransferComponent.prototype, "nzDisabled", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTransferComponent.prototype, "nzShowSelectAll", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTransferComponent.prototype, "nzShowSearch", void 0);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzTransferComponent, [{
        type: Component,
        args: [{
                selector: 'nz-transfer',
                exportAs: 'nzTransfer',
                preserveWhitespaces: false,
                templateUrl: './nz-transfer.component.html',
                host: {
                    '[class.ant-transfer-disabled]': 'nzDisabled'
                },
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [NzUpdateHostClassService]
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.NzI18nService }, { type: i2.NzUpdateHostClassService }, { type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { lists: [{
            type: ViewChildren,
            args: [NzTransferListComponent]
        }], nzDisabled: [{
            type: Input
        }], nzDataSource: [{
            type: Input
        }], nzTitles: [{
            type: Input
        }], nzOperations: [{
            type: Input
        }], nzListStyle: [{
            type: Input
        }], nzShowSelectAll: [{
            type: Input
        }], nzItemUnit: [{
            type: Input
        }], nzItemsUnit: [{
            type: Input
        }], nzCanMove: [{
            type: Input
        }], nzRenderList: [{
            type: Input
        }], nzRender: [{
            type: Input
        }], nzFooter: [{
            type: Input
        }], nzShowSearch: [{
            type: Input
        }], nzFilterOption: [{
            type: Input
        }], nzSearchPlaceholder: [{
            type: Input
        }], nzNotFoundContent: [{
            type: Input
        }], nzChange: [{
            type: Output
        }], nzSearchChange: [{
            type: Output
        }], nzSelectChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJhbnNmZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90cmFuc2Zlci8iLCJzb3VyY2VzIjpbIm56LXRyYW5zZmVyLmNvbXBvbmVudC50cyIsIm56LXRyYW5zZmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBRVQsV0FBVyxFQUNYLFlBQVksRUFDWixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFjLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM1RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHbkQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7OztJQ0h0Qyw0QkFBOEI7SUFBQSxZQUFxQjtJQUFBLGlCQUFPOzs7SUFBNUIsZUFBcUI7SUFBckIsK0NBQXFCOzs7SUFTbEQsNEJBQThCO0lBQUEsWUFBcUI7SUFBQSxpQkFBTzs7O0lBQTVCLGVBQXFCO0lBQXJCLCtDQUFxQjs7QURRckYsTUFBTSxPQUFPLG1CQUFtQjtJQWdJOUIsYUFBYTtJQUViLFlBQ1UsR0FBc0IsRUFDdEIsSUFBbUIsRUFDbkIsd0JBQWtELEVBQ2xELFVBQXNCLEVBQzlCLFFBQW1CO1FBSlgsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsU0FBSSxHQUFKLElBQUksQ0FBZTtRQUNuQiw2QkFBd0IsR0FBeEIs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RCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO2FBQ3RDOztrQkFHRSxZQUFZO21CQUFDLHVCQUF1Qjs7a0JBVXBDLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUdMLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBRdWVyeUxpc3QsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkcmVuLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5cclxuaW1wb3J0IHsgVHJhbnNmZXJDYW5Nb3ZlLCBUcmFuc2ZlckNoYW5nZSwgVHJhbnNmZXJEaXJlY3Rpb24sIFRyYW5zZmVySXRlbSwgVHJhbnNmZXJTZWFyY2hDaGFuZ2UsIFRyYW5zZmVyU2VsZWN0Q2hhbmdlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBOelRyYW5zZmVyTGlzdENvbXBvbmVudCB9IGZyb20gJy4vbnotdHJhbnNmZXItbGlzdC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei10cmFuc2ZlcicsXHJcbiAgZXhwb3J0QXM6ICduelRyYW5zZmVyJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotdHJhbnNmZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LXRyYW5zZmVyLWRpc2FibGVkXSc6ICduekRpc2FibGVkJ1xyXG4gIH0sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcm92aWRlcnM6IFtOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelRyYW5zZmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIEBWaWV3Q2hpbGRyZW4oTnpUcmFuc2Zlckxpc3RDb21wb25lbnQpXHJcbiAgcHJpdmF0ZSBsaXN0cyE6IFF1ZXJ5TGlzdDxOelRyYW5zZmVyTGlzdENvbXBvbmVudD47XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIGxvY2FsZTogYW55ID0ge307XHJcblxyXG4gIGxlZnRGaWx0ZXIgPSAnJztcclxuICByaWdodEZpbHRlciA9ICcnO1xyXG5cclxuICAvLyAjcmVnaW9uIGZpZWxkc1xyXG5cclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56RGF0YVNvdXJjZTogVHJhbnNmZXJJdGVtW10gPSBbXTtcclxuICBASW5wdXQoKSBuelRpdGxlczogc3RyaW5nW10gPSBbJycsICcnXTtcclxuICBASW5wdXQoKSBuek9wZXJhdGlvbnM6IHN0cmluZ1tdID0gW107XHJcbiAgQElucHV0KCkgbnpMaXN0U3R5bGU6IG9iamVjdDtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93U2VsZWN0QWxsID0gdHJ1ZTtcclxuICBASW5wdXQoKSBuekl0ZW1Vbml0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpJdGVtc1VuaXQ6IHN0cmluZztcclxuICBASW5wdXQoKSBuekNhbk1vdmU6IChhcmc6IFRyYW5zZmVyQ2FuTW92ZSkgPT4gT2JzZXJ2YWJsZTxUcmFuc2Zlckl0ZW1bXT4gPSAoYXJnOiBUcmFuc2ZlckNhbk1vdmUpID0+IG9mKGFyZy5saXN0KTtcclxuICBASW5wdXQoKSBuelJlbmRlckxpc3Q6IEFycmF5PFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbD4gPSBbbnVsbCwgbnVsbF07XHJcbiAgQElucHV0KCkgbnpSZW5kZXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56Rm9vdGVyOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93U2VhcmNoID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpGaWx0ZXJPcHRpb246IChpbnB1dFZhbHVlOiBzdHJpbmcsIGl0ZW06IFRyYW5zZmVySXRlbSkgPT4gYm9vbGVhbjtcclxuICBASW5wdXQoKSBuelNlYXJjaFBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpOb3RGb3VuZENvbnRlbnQ6IHN0cmluZztcclxuXHJcbiAgLy8gZXZlbnRzXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxUcmFuc2ZlckNoYW5nZT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpTZWFyY2hDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFRyYW5zZmVyU2VhcmNoQ2hhbmdlPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNlbGVjdENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8VHJhbnNmZXJTZWxlY3RDaGFuZ2U+KCk7XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgLy8gI3JlZ2lvbiBwcm9jZXNzIGRhdGFcclxuXHJcbiAgLy8gbGVmdFxyXG4gIGxlZnREYXRhU291cmNlOiBUcmFuc2Zlckl0ZW1bXSA9IFtdO1xyXG5cclxuICAvLyByaWdodFxyXG4gIHJpZ2h0RGF0YVNvdXJjZTogVHJhbnNmZXJJdGVtW10gPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSBzcGxpdERhdGFTb3VyY2UoKTogdm9pZCB7XHJcbiAgICB0aGlzLmxlZnREYXRhU291cmNlID0gW107XHJcbiAgICB0aGlzLnJpZ2h0RGF0YVNvdXJjZSA9IFtdO1xyXG4gICAgdGhpcy5uekRhdGFTb3VyY2UuZm9yRWFjaChyZWNvcmQgPT4ge1xyXG4gICAgICBpZiAocmVjb3JkLmRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jykge1xyXG4gICAgICAgIHJlY29yZC5kaXJlY3Rpb24gPSAncmlnaHQnO1xyXG4gICAgICAgIHRoaXMucmlnaHREYXRhU291cmNlLnB1c2gocmVjb3JkKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZWNvcmQuZGlyZWN0aW9uID0gJ2xlZnQnO1xyXG4gICAgICAgIHRoaXMubGVmdERhdGFTb3VyY2UucHVzaChyZWNvcmQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0Q2hlY2tlZERhdGEoZGlyZWN0aW9uOiBzdHJpbmcpOiBUcmFuc2Zlckl0ZW1bXSB7XHJcbiAgICByZXR1cm4gdGhpc1tkaXJlY3Rpb24gPT09ICdsZWZ0JyA/ICdsZWZ0RGF0YVNvdXJjZScgOiAncmlnaHREYXRhU291cmNlJ10uZmlsdGVyKHcgPT4gdy5jaGVja2VkKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUxlZnRTZWxlY3RBbGwgPSAoY2hlY2tlZDogYm9vbGVhbikgPT4gdGhpcy5oYW5kbGVTZWxlY3QoJ2xlZnQnLCBjaGVja2VkKTtcclxuICBoYW5kbGVSaWdodFNlbGVjdEFsbCA9IChjaGVja2VkOiBib29sZWFuKSA9PiB0aGlzLmhhbmRsZVNlbGVjdCgncmlnaHQnLCBjaGVja2VkKTtcclxuXHJcbiAgaGFuZGxlTGVmdFNlbGVjdCA9IChpdGVtOiBUcmFuc2Zlckl0ZW0pID0+IHRoaXMuaGFuZGxlU2VsZWN0KCdsZWZ0JywgISFpdGVtLmNoZWNrZWQsIGl0ZW0pO1xyXG4gIGhhbmRsZVJpZ2h0U2VsZWN0ID0gKGl0ZW06IFRyYW5zZmVySXRlbSkgPT4gdGhpcy5oYW5kbGVTZWxlY3QoJ3JpZ2h0JywgISFpdGVtLmNoZWNrZWQsIGl0ZW0pO1xyXG5cclxuICBoYW5kbGVTZWxlY3QoZGlyZWN0aW9uOiBUcmFuc2ZlckRpcmVjdGlvbiwgY2hlY2tlZDogYm9vbGVhbiwgaXRlbT86IFRyYW5zZmVySXRlbSk6IHZvaWQge1xyXG4gICAgY29uc3QgbGlzdCA9IHRoaXMuZ2V0Q2hlY2tlZERhdGEoZGlyZWN0aW9uKTtcclxuICAgIHRoaXMudXBkYXRlT3BlcmF0aW9uU3RhdHVzKGRpcmVjdGlvbiwgbGlzdC5sZW5ndGgpO1xyXG4gICAgdGhpcy5uelNlbGVjdENoYW5nZS5lbWl0KHsgZGlyZWN0aW9uLCBjaGVja2VkLCBsaXN0LCBpdGVtIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRmlsdGVyQ2hhbmdlKHJldDogeyBkaXJlY3Rpb246IFRyYW5zZmVyRGlyZWN0aW9uOyB2YWx1ZTogc3RyaW5nIH0pOiB2b2lkIHtcclxuICAgIHRoaXMubnpTZWFyY2hDaGFuZ2UuZW1pdChyZXQpO1xyXG4gIH1cclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAvLyAjcmVnaW9uIG9wZXJhdGlvblxyXG5cclxuICBsZWZ0QWN0aXZlID0gZmFsc2U7XHJcbiAgcmlnaHRBY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVPcGVyYXRpb25TdGF0dXMoZGlyZWN0aW9uOiBzdHJpbmcsIGNvdW50PzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzW2RpcmVjdGlvbiA9PT0gJ3JpZ2h0JyA/ICdsZWZ0QWN0aXZlJyA6ICdyaWdodEFjdGl2ZSddID1cclxuICAgICAgKHR5cGVvZiBjb3VudCA9PT0gJ3VuZGVmaW5lZCcgPyB0aGlzLmdldENoZWNrZWREYXRhKGRpcmVjdGlvbikuZmlsdGVyKHcgPT4gIXcuZGlzYWJsZWQpLmxlbmd0aCA6IGNvdW50KSA+IDA7XHJcbiAgfVxyXG5cclxuICBtb3ZlVG9MZWZ0ID0gKCkgPT4gdGhpcy5tb3ZlVG8oJ2xlZnQnKTtcclxuICBtb3ZlVG9SaWdodCA9ICgpID0+IHRoaXMubW92ZVRvKCdyaWdodCcpO1xyXG5cclxuICBtb3ZlVG8oZGlyZWN0aW9uOiBUcmFuc2ZlckRpcmVjdGlvbik6IHZvaWQge1xyXG4gICAgY29uc3Qgb3Bwb3NpdGVEaXJlY3Rpb24gPSBkaXJlY3Rpb24gPT09ICdsZWZ0JyA/ICdyaWdodCcgOiAnbGVmdCc7XHJcbiAgICB0aGlzLnVwZGF0ZU9wZXJhdGlvblN0YXR1cyhvcHBvc2l0ZURpcmVjdGlvbiwgMCk7XHJcbiAgICBjb25zdCBkYXRhc291cmNlID0gZGlyZWN0aW9uID09PSAnbGVmdCcgPyB0aGlzLnJpZ2h0RGF0YVNvdXJjZSA6IHRoaXMubGVmdERhdGFTb3VyY2U7XHJcbiAgICBjb25zdCBtb3ZlTGlzdCA9IGRhdGFzb3VyY2UuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jaGVja2VkID09PSB0cnVlICYmICFpdGVtLmRpc2FibGVkKTtcclxuICAgIHRoaXMubnpDYW5Nb3ZlKHsgZGlyZWN0aW9uLCBsaXN0OiBtb3ZlTGlzdCB9KS5zdWJzY3JpYmUoXHJcbiAgICAgIG5ld01vdmVMaXN0ID0+XHJcbiAgICAgICAgdGhpcy50cnV0aE1vdmVUbyhcclxuICAgICAgICAgIGRpcmVjdGlvbixcclxuICAgICAgICAgIG5ld01vdmVMaXN0LmZpbHRlcihpID0+ICEhaSlcclxuICAgICAgICApLFxyXG4gICAgICAoKSA9PiBtb3ZlTGlzdC5mb3JFYWNoKGkgPT4gKGkuY2hlY2tlZCA9IGZhbHNlKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRydXRoTW92ZVRvKGRpcmVjdGlvbjogVHJhbnNmZXJEaXJlY3Rpb24sIGxpc3Q6IFRyYW5zZmVySXRlbVtdKTogdm9pZCB7XHJcbiAgICBjb25zdCBvcHBvc2l0ZURpcmVjdGlvbiA9IGRpcmVjdGlvbiA9PT0gJ2xlZnQnID8gJ3JpZ2h0JyA6ICdsZWZ0JztcclxuICAgIGNvbnN0IGRhdGFzb3VyY2UgPSBkaXJlY3Rpb24gPT09ICdsZWZ0JyA/IHRoaXMucmlnaHREYXRhU291cmNlIDogdGhpcy5sZWZ0RGF0YVNvdXJjZTtcclxuICAgIGNvbnN0IHRhcmdldERhdGFzb3VyY2UgPSBkaXJlY3Rpb24gPT09ICdsZWZ0JyA/IHRoaXMubGVmdERhdGFTb3VyY2UgOiB0aGlzLnJpZ2h0RGF0YVNvdXJjZTtcclxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBsaXN0KSB7XHJcbiAgICAgIGl0ZW0uY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICBpdGVtLmhpZGUgPSBmYWxzZTtcclxuICAgICAgaXRlbS5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XHJcbiAgICAgIGRhdGFzb3VyY2Uuc3BsaWNlKGRhdGFzb3VyY2UuaW5kZXhPZihpdGVtKSwgMSk7XHJcbiAgICB9XHJcbiAgICB0YXJnZXREYXRhc291cmNlLnNwbGljZSgwLCAwLCAuLi5saXN0KTtcclxuICAgIHRoaXMudXBkYXRlT3BlcmF0aW9uU3RhdHVzKG9wcG9zaXRlRGlyZWN0aW9uKTtcclxuICAgIHRoaXMubnpDaGFuZ2UuZW1pdCh7XHJcbiAgICAgIGZyb206IG9wcG9zaXRlRGlyZWN0aW9uLFxyXG4gICAgICB0bzogZGlyZWN0aW9uLFxyXG4gICAgICBsaXN0XHJcbiAgICB9KTtcclxuICAgIHRoaXMubWFya0ZvckNoZWNrQWxsTGlzdCgpO1xyXG4gIH1cclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZSxcclxuICAgIHByaXZhdGUgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyXHJcbiAgKSB7XHJcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtdHJhbnNmZXInKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICBjb25zdCBwcmVmaXhDbHMgPSAnYW50LXRyYW5zZmVyJztcclxuICAgIHRoaXMubnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwge1xyXG4gICAgICBbYCR7cHJlZml4Q2xzfS1kaXNhYmxlZGBdOiB0aGlzLm56RGlzYWJsZWQsXHJcbiAgICAgIFtgJHtwcmVmaXhDbHN9LWN1c3RvbWl6ZS1saXN0YF06IHRoaXMubnpSZW5kZXJMaXN0LnNvbWUoaSA9PiAhIWkpXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbWFya0ZvckNoZWNrQWxsTGlzdCgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5saXN0cykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmxpc3RzLmZvckVhY2goaSA9PiBpLm1hcmtGb3JDaGVjaygpKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMubG9jYWxlID0gdGhpcy5pMThuLmdldExvY2FsZURhdGEoJ1RyYW5zZmVyJyk7XHJcbiAgICAgIHRoaXMubWFya0ZvckNoZWNrQWxsTGlzdCgpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICBpZiAoY2hhbmdlcy5uekRhdGFTb3VyY2UgfHwgY2hhbmdlcy5uelRhcmdldEtleXMpIHtcclxuICAgICAgdGhpcy5zcGxpdERhdGFTb3VyY2UoKTtcclxuICAgICAgdGhpcy51cGRhdGVPcGVyYXRpb25TdGF0dXMoJ2xlZnQnKTtcclxuICAgICAgdGhpcy51cGRhdGVPcGVyYXRpb25TdGF0dXMoJ3JpZ2h0Jyk7XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgdGhpcy5tYXJrRm9yQ2hlY2tBbGxMaXN0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMudW5zdWJzY3JpYmUkLm5leHQoKTtcclxuICAgIHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG59XHJcbiIsIjxuei10cmFuc2Zlci1saXN0XHJcbiAgY2xhc3M9XCJhbnQtdHJhbnNmZXItbGlzdFwiXHJcbiAgW25nU3R5bGVdPVwibnpMaXN0U3R5bGVcIlxyXG4gIGRhdGEtZGlyZWN0aW9uPVwibGVmdFwiXHJcbiAgW3RpdGxlVGV4dF09XCJuelRpdGxlc1swXVwiXHJcbiAgW3Nob3dTZWxlY3RBbGxdPVwibnpTaG93U2VsZWN0QWxsXCJcclxuICBbZGF0YVNvdXJjZV09XCJsZWZ0RGF0YVNvdXJjZVwiXHJcbiAgW2ZpbHRlcl09XCJsZWZ0RmlsdGVyXCJcclxuICBbZmlsdGVyT3B0aW9uXT1cIm56RmlsdGVyT3B0aW9uXCJcclxuICAoZmlsdGVyQ2hhbmdlKT1cImhhbmRsZUZpbHRlckNoYW5nZSgkZXZlbnQpXCJcclxuICBbcmVuZGVyTGlzdF09XCJuelJlbmRlckxpc3RbMF1cIlxyXG4gIFtyZW5kZXJdPVwibnpSZW5kZXJcIlxyXG4gIFtkaXNhYmxlZF09XCJuekRpc2FibGVkXCJcclxuICBbc2hvd1NlYXJjaF09XCJuelNob3dTZWFyY2hcIlxyXG4gIFtzZWFyY2hQbGFjZWhvbGRlcl09XCJuelNlYXJjaFBsYWNlaG9sZGVyIHx8IGxvY2FsZS5zZWFyY2hQbGFjZWhvbGRlclwiXHJcbiAgW25vdEZvdW5kQ29udGVudF09XCJuek5vdEZvdW5kQ29udGVudFwiXHJcbiAgW2l0ZW1Vbml0XT1cIm56SXRlbVVuaXQgfHwgbG9jYWxlLml0ZW1Vbml0XCJcclxuICBbaXRlbXNVbml0XT1cIm56SXRlbXNVbml0IHx8IGxvY2FsZS5pdGVtc1VuaXRcIlxyXG4gIFtmb290ZXJdPVwibnpGb290ZXJcIlxyXG4gIChoYW5kbGVTZWxlY3QpPVwiaGFuZGxlTGVmdFNlbGVjdCgkZXZlbnQpXCJcclxuICAoaGFuZGxlU2VsZWN0QWxsKT1cImhhbmRsZUxlZnRTZWxlY3RBbGwoJGV2ZW50KVwiXHJcbj5cclxuPC9uei10cmFuc2Zlci1saXN0PlxyXG48ZGl2IGNsYXNzPVwiYW50LXRyYW5zZmVyLW9wZXJhdGlvblwiPlxyXG4gIDxidXR0b25cclxuICAgIG56LWJ1dHRvblxyXG4gICAgKGNsaWNrKT1cIm1vdmVUb0xlZnQoKVwiXHJcbiAgICBbZGlzYWJsZWRdPVwibnpEaXNhYmxlZCB8fCAhbGVmdEFjdGl2ZVwiXHJcbiAgICBbbnpUeXBlXT1cIidwcmltYXJ5J1wiXHJcbiAgICBbbnpTaXplXT1cIidzbWFsbCdcIlxyXG4gID5cclxuICAgIDxpIG56LWljb24gbnpUeXBlPVwibGVmdFwiPjwvaT48c3BhbiAqbmdJZj1cIm56T3BlcmF0aW9uc1sxXVwiPnt7IG56T3BlcmF0aW9uc1sxXSB9fTwvc3Bhbj5cclxuICA8L2J1dHRvbj5cclxuICA8YnV0dG9uXHJcbiAgICBuei1idXR0b25cclxuICAgIChjbGljayk9XCJtb3ZlVG9SaWdodCgpXCJcclxuICAgIFtkaXNhYmxlZF09XCJuekRpc2FibGVkIHx8ICFyaWdodEFjdGl2ZVwiXHJcbiAgICBbbnpUeXBlXT1cIidwcmltYXJ5J1wiXHJcbiAgICBbbnpTaXplXT1cIidzbWFsbCdcIlxyXG4gID5cclxuICAgIDxpIG56LWljb24gbnpUeXBlPVwicmlnaHRcIj48L2k+PHNwYW4gKm5nSWY9XCJuek9wZXJhdGlvbnNbMF1cIj57eyBuek9wZXJhdGlvbnNbMF0gfX08L3NwYW4+XHJcbiAgPC9idXR0b24+XHJcbjwvZGl2PlxyXG48bnotdHJhbnNmZXItbGlzdFxyXG4gIGNsYXNzPVwiYW50LXRyYW5zZmVyLWxpc3RcIlxyXG4gIFtuZ1N0eWxlXT1cIm56TGlzdFN0eWxlXCJcclxuICBkYXRhLWRpcmVjdGlvbj1cInJpZ2h0XCJcclxuICBbdGl0bGVUZXh0XT1cIm56VGl0bGVzWzFdXCJcclxuICBbc2hvd1NlbGVjdEFsbF09XCJuelNob3dTZWxlY3RBbGxcIlxyXG4gIFtkYXRhU291cmNlXT1cInJpZ2h0RGF0YVNvdXJjZVwiXHJcbiAgW2ZpbHRlcl09XCJyaWdodEZpbHRlclwiXHJcbiAgW2ZpbHRlck9wdGlvbl09XCJuekZpbHRlck9wdGlvblwiXHJcbiAgKGZpbHRlckNoYW5nZSk9XCJoYW5kbGVGaWx0ZXJDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgW3JlbmRlckxpc3RdPVwibnpSZW5kZXJMaXN0WzFdXCJcclxuICBbcmVuZGVyXT1cIm56UmVuZGVyXCJcclxuICBbZGlzYWJsZWRdPVwibnpEaXNhYmxlZFwiXHJcbiAgW3Nob3dTZWFyY2hdPVwibnpTaG93U2VhcmNoXCJcclxuICBbc2VhcmNoUGxhY2Vob2xkZXJdPVwibnpTZWFyY2hQbGFjZWhvbGRlciB8fCBsb2NhbGUuc2VhcmNoUGxhY2Vob2xkZXJcIlxyXG4gIFtub3RGb3VuZENvbnRlbnRdPVwibnpOb3RGb3VuZENvbnRlbnRcIlxyXG4gIFtpdGVtVW5pdF09XCJuekl0ZW1Vbml0IHx8IGxvY2FsZS5pdGVtVW5pdFwiXHJcbiAgW2l0ZW1zVW5pdF09XCJuekl0ZW1zVW5pdCB8fCBsb2NhbGUuaXRlbXNVbml0XCJcclxuICBbZm9vdGVyXT1cIm56Rm9vdGVyXCJcclxuICAoaGFuZGxlU2VsZWN0KT1cImhhbmRsZVJpZ2h0U2VsZWN0KCRldmVudClcIlxyXG4gIChoYW5kbGVTZWxlY3RBbGwpPVwiaGFuZGxlUmlnaHRTZWxlY3RBbGwoJGV2ZW50KVwiXHJcbj5cclxuPC9uei10cmFuc2Zlci1saXN0PlxyXG4iXX0=
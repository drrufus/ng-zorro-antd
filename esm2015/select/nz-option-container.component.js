/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, NgZone, Output, QueryList, TemplateRef, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { filter, map, pairwise, takeUntil } from 'rxjs/operators';
import { NzOptionLiComponent } from './nz-option-li.component';
import { NzSelectService } from './nz-select.service';
import * as i0 from "@angular/core";
import * as i1 from "./nz-select.service";
import * as i2 from "@angular/common";
import * as i3 from "./nz-select-unselectable.directive";
import * as i4 from "ng-zorro-antd/empty";
import * as i5 from "./nz-option-li.component";
import * as i6 from "ng-zorro-antd/core";
import * as i7 from "./nz-option.pipe";
const _c0 = ["dropdownUl"];
const _c1 = ["nz-option-container", ""];
function NzOptionContainerComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 7);
    i0.ɵɵelement(1, "nz-embed-empty", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1411 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzComponentName", "select")("specificContent", ctx_r1411.nzNotFoundContent);
} }
function NzOptionContainerComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "li", 9);
} if (rf & 2) {
    const ctx_r1412 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nzMenuItemSelectedIcon", ctx_r1412.nzMenuItemSelectedIcon)("nzOption", ctx_r1412.nzSelectService.addedTagOption);
} }
function NzOptionContainerComponent_ng_container_4_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "li", 9);
} if (rf & 2) {
    const option_r1416 = i0.ɵɵnextContext().$implicit;
    const ctx_r1417 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nzMenuItemSelectedIcon", ctx_r1417.nzMenuItemSelectedIcon)("nzOption", option_r1416);
} }
function NzOptionContainerComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzOptionContainerComponent_ng_container_4_li_1_Template, 1, 2, "li", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const option_r1416 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !option_r1416.nzHide);
} }
function NzOptionContainerComponent_li_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const group_r1419 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", group_r1419.nzLabel, " ");
} }
function NzOptionContainerComponent_li_6_ng_container_4_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "li", 9);
} if (rf & 2) {
    const option_r1423 = i0.ɵɵnextContext().$implicit;
    const ctx_r1424 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("nzMenuItemSelectedIcon", ctx_r1424.nzMenuItemSelectedIcon)("nzOption", option_r1423);
} }
function NzOptionContainerComponent_li_6_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzOptionContainerComponent_li_6_ng_container_4_li_1_Template, 1, 2, "li", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const option_r1423 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !option_r1423.nzHide);
} }
function NzOptionContainerComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 10);
    i0.ɵɵelementStart(1, "div", 11);
    i0.ɵɵtemplate(2, NzOptionContainerComponent_li_6_ng_container_2_Template, 2, 1, "ng-container", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ul", 13);
    i0.ɵɵtemplate(4, NzOptionContainerComponent_li_6_ng_container_4_Template, 2, 1, "ng-container", 4);
    i0.ɵɵpipe(5, "nzFilterOption");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const group_r1419 = ctx.$implicit;
    const ctx_r1414 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("title", group_r1419.isLabelString ? group_r1419.nzLabel : "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", group_r1419.nzLabel);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind4(5, 4, group_r1419.listOfNzOptionComponent, ctx_r1414.nzSelectService.searchValue, ctx_r1414.nzSelectService.filterOption, ctx_r1414.nzSelectService.serverSearch))("ngForTrackBy", ctx_r1414.trackValue);
} }
function NzOptionContainerComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "li", 9);
} if (rf & 2) {
    const option_r1426 = ctx.$implicit;
    const ctx_r1415 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nzMenuItemSelectedIcon", ctx_r1415.nzMenuItemSelectedIcon)("nzOption", option_r1426);
} }
export class NzOptionContainerComponent {
    constructor(nzSelectService, cdr, ngZone) {
        this.nzSelectService = nzSelectService;
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.destroy$ = new Subject();
        this.lastScrollTop = 0;
        this.nzScrollToBottom = new EventEmitter();
    }
    scrollIntoViewIfNeeded(option) {
        // delay after open
        setTimeout(() => {
            if (this.listOfNzOptionLiComponent && this.listOfNzOptionLiComponent.length && option) {
                const targetOption = this.listOfNzOptionLiComponent.find(o => this.nzSelectService.compareWith(o.nzOption.nzValue, option.nzValue));
                // tslint:disable:no-any
                if (targetOption && targetOption.el && targetOption.el.scrollIntoViewIfNeeded) {
                    targetOption.el.scrollIntoViewIfNeeded(false);
                }
            }
        });
    }
    trackLabel(_index, option) {
        return option.nzLabel;
    }
    // tslint:disable-next-line:no-any
    trackValue(_index, option) {
        return option.nzValue;
    }
    ngOnInit() {
        this.nzSelectService.activatedOption$.pipe(takeUntil(this.destroy$)).subscribe(option => {
            this.scrollIntoViewIfNeeded(option);
        });
        this.nzSelectService.check$.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.cdr.markForCheck();
        });
        this.ngZone.runOutsideAngular(() => {
            const ul = this.dropdownUl.nativeElement;
            fromEvent(ul, 'scroll')
                .pipe(takeUntil(this.destroy$))
                .subscribe(e => {
                e.preventDefault();
                e.stopPropagation();
                if (ul && ul.scrollTop > this.lastScrollTop && ul.scrollHeight < ul.clientHeight + ul.scrollTop + 10) {
                    this.lastScrollTop = ul.scrollTop;
                    this.ngZone.run(() => {
                        this.nzScrollToBottom.emit();
                    });
                }
            });
        });
    }
    ngAfterViewInit() {
        this.listOfNzOptionLiComponent.changes
            .pipe(map(list => list.length), pairwise(), filter(([before, after]) => after < before), takeUntil(this.destroy$))
            .subscribe(() => (this.lastScrollTop = 0));
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
/** @nocollapse */ NzOptionContainerComponent.ɵfac = function NzOptionContainerComponent_Factory(t) { return new (t || NzOptionContainerComponent)(i0.ɵɵdirectiveInject(i1.NzSelectService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ NzOptionContainerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzOptionContainerComponent, selectors: [["", "nz-option-container", ""]], viewQuery: function NzOptionContainerComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true);
        i0.ɵɵviewQuery(NzOptionLiComponent, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dropdownUl = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.listOfNzOptionLiComponent = _t);
    } }, inputs: { nzNotFoundContent: "nzNotFoundContent", nzMenuItemSelectedIcon: "nzMenuItemSelectedIcon" }, outputs: { nzScrollToBottom: "nzScrollToBottom" }, exportAs: ["nzOptionContainer"], attrs: _c1, decls: 10, vars: 23, consts: [["role", "menu", "tabindex", "0", 1, "ant-select-dropdown-menu", "ant-select-dropdown-menu-root", "ant-select-dropdown-menu-vertical"], ["dropdownUl", ""], ["nz-select-unselectable", "", "class", "ant-select-dropdown-menu-item ant-select-dropdown-menu-item-disabled", 4, "ngIf"], ["nz-option-li", "", 3, "nzMenuItemSelectedIcon", "nzOption", 4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "ant-select-dropdown-menu-item-group", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["nz-option-li", "", 3, "nzMenuItemSelectedIcon", "nzOption", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["nz-select-unselectable", "", 1, "ant-select-dropdown-menu-item", "ant-select-dropdown-menu-item-disabled"], [3, "nzComponentName", "specificContent"], ["nz-option-li", "", 3, "nzMenuItemSelectedIcon", "nzOption"], [1, "ant-select-dropdown-menu-item-group"], [1, "ant-select-dropdown-menu-item-group-title"], [4, "nzStringTemplateOutlet"], [1, "ant-select-dropdown-menu-item-group-list"]], template: function NzOptionContainerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "ul", 0, 1);
        i0.ɵɵtemplate(2, NzOptionContainerComponent_li_2_Template, 2, 2, "li", 2);
        i0.ɵɵtemplate(3, NzOptionContainerComponent_li_3_Template, 1, 2, "li", 3);
        i0.ɵɵtemplate(4, NzOptionContainerComponent_ng_container_4_Template, 2, 1, "ng-container", 4);
        i0.ɵɵpipe(5, "nzFilterOption");
        i0.ɵɵtemplate(6, NzOptionContainerComponent_li_6_Template, 6, 9, "li", 5);
        i0.ɵɵpipe(7, "nzFilterGroupOption");
        i0.ɵɵtemplate(8, NzOptionContainerComponent_li_8_Template, 1, 2, "li", 6);
        i0.ɵɵpipe(9, "nzFilterOption");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.nzSelectService.isShowNotFound);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.nzSelectService.addedTagOption);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind4(5, 8, ctx.nzSelectService.listOfNzOptionComponent, ctx.nzSelectService.searchValue, ctx.nzSelectService.filterOption, ctx.nzSelectService.serverSearch))("ngForTrackBy", ctx.trackValue);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind4(7, 13, ctx.nzSelectService.listOfNzOptionGroupComponent, ctx.nzSelectService.searchValue, ctx.nzSelectService.filterOption, ctx.nzSelectService.serverSearch))("ngForTrackBy", ctx.trackLabel);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind4(9, 18, ctx.nzSelectService.listOfTagOption, ctx.nzSelectService.searchValue, ctx.nzSelectService.filterOption, ctx.nzSelectService.serverSearch))("ngForTrackBy", ctx.trackValue);
    } }, directives: [i2.NgIf, i2.NgForOf, i3.NzSelectUnselectableDirective, i4.NzEmbedEmptyComponent, i5.NzOptionLiComponent, i6.NzStringTemplateOutletDirective], pipes: [i7.NzFilterOptionPipe, i7.NzFilterGroupOptionPipe], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzOptionContainerComponent, [{
        type: Component,
        args: [{
                selector: '[nz-option-container]',
                exportAs: 'nzOptionContainer',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                templateUrl: './nz-option-container.component.html'
            }]
    }], function () { return [{ type: i1.NzSelectService }, { type: i0.ChangeDetectorRef }, { type: i0.NgZone }]; }, { listOfNzOptionLiComponent: [{
            type: ViewChildren,
            args: [NzOptionLiComponent]
        }], dropdownUl: [{
            type: ViewChild,
            args: ['dropdownUl', { static: true }]
        }], nzNotFoundContent: [{
            type: Input
        }], nzMenuItemSelectedIcon: [{
            type: Input
        }], nzScrollToBottom: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotb3B0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3NlbGVjdC8iLCJzb3VyY2VzIjpbIm56LW9wdGlvbi1jb250YWluZXIuY29tcG9uZW50LnRzIiwibnotb3B0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUdOLE1BQU0sRUFDTixTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxZQUFZLEVBQ1osaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUUvRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7Ozs7OztJQ3pCcEQsNkJBS0U7SUFBQSxvQ0FHa0I7SUFDcEIsaUJBQUs7OztJQUhELGVBQTRCO0lBQTVCLDBDQUE0QixnREFBQTs7O0lBSWhDLHdCQUtNOzs7SUFGSix5RUFBaUQsc0RBQUE7OztJQWFqRCx3QkFLTTs7OztJQUZKLHlFQUFpRCwwQkFBQTs7O0lBYnJELDZCQVVFO0lBQUEsd0ZBS0M7SUFDSCwwQkFBZTs7O0lBSlgsZUFBc0I7SUFBdEIsMkNBQXNCOzs7SUFvQnRCLDZCQUF1RDtJQUFBLFlBQW9CO0lBQUEsMEJBQWU7OztJQUFuQyxlQUFvQjtJQUFwQixvREFBb0I7OztJQWF6RSx3QkFLTTs7OztJQUZKLHlF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Rix5RUFXRTs7UUEwQkYseUVBWUM7O1FBQ0gsaUJBQUs7O1FBbEZELGVBQXNDO1FBQXRDLHlEQUFzQztRQVd0QyxlQUFzQztRQUF0Qyx5REFBc0M7UUFLdEMsZUFPQztRQVBELGdNQU9DLGdDQUFBO1FBV0QsZUFPQztRQVBELHNNQU9DLGdDQUFBO1FBOEJELGVBT0M7UUFQRCx5TEFPQyxnQ0FBQTs7a0RENUNRLDBCQUEwQjtjQVJ0QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixXQUFXLEVBQUUsc0NBQXNDO2FBQ3BEOztrQkFJRSxZQUFZO21CQUFDLG1CQUFtQjs7a0JBQ2hDLFNBQVM7bUJBQUMsWUFBWSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7a0JBQ3hDLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0NoaWxkcmVuLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGZyb21FdmVudCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgcGFpcndpc2UsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgTnpPcHRpb25Hcm91cENvbXBvbmVudCB9IGZyb20gJy4vbnotb3B0aW9uLWdyb3VwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56T3B0aW9uTGlDb21wb25lbnQgfSBmcm9tICcuL256LW9wdGlvbi1saS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOek9wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbnotb3B0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56U2VsZWN0U2VydmljZSB9IGZyb20gJy4vbnotc2VsZWN0LnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdbbnotb3B0aW9uLWNvbnRhaW5lcl0nLFxyXG4gIGV4cG9ydEFzOiAnbnpPcHRpb25Db250YWluZXInLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LW9wdGlvbi1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOek9wdGlvbkNvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcclxuICBwcml2YXRlIGxhc3RTY3JvbGxUb3AgPSAwO1xyXG4gIEBWaWV3Q2hpbGRyZW4oTnpPcHRpb25MaUNvbXBvbmVudCkgbGlzdE9mTnpPcHRpb25MaUNvbXBvbmVudDogUXVlcnlMaXN0PE56T3B0aW9uTGlDb21wb25lbnQ+O1xyXG4gIEBWaWV3Q2hpbGQoJ2Ryb3Bkb3duVWwnLCB7IHN0YXRpYzogdHJ1ZSB9KSBkcm9wZG93blVsOiBFbGVtZW50UmVmPEhUTUxVTGlzdEVsZW1lbnQ+O1xyXG4gIEBJbnB1dCgpIG56Tm90Rm91bmRDb250ZW50OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpNZW51SXRlbVNlbGVjdGVkSWNvbjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56U2Nyb2xsVG9Cb3R0b20gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIHNjcm9sbEludG9WaWV3SWZOZWVkZWQob3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudCk6IHZvaWQge1xyXG4gICAgLy8gZGVsYXkgYWZ0ZXIgb3BlblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmxpc3RPZk56T3B0aW9uTGlDb21wb25lbnQgJiYgdGhpcy5saXN0T2ZOek9wdGlvbkxpQ29tcG9uZW50Lmxlbmd0aCAmJiBvcHRpb24pIHtcclxuICAgICAgICBjb25zdCB0YXJnZXRPcHRpb24gPSB0aGlzLmxpc3RPZk56T3B0aW9uTGlDb21wb25lbnQuZmluZChvID0+IHRoaXMubnpTZWxlY3RTZXJ2aWNlLmNvbXBhcmVXaXRoKG8ubnpPcHRpb24ubnpWYWx1ZSwgb3B0aW9uLm56VmFsdWUpKTtcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpuby1hbnlcclxuICAgICAgICBpZiAodGFyZ2V0T3B0aW9uICYmIHRhcmdldE9wdGlvbi5lbCAmJiAodGFyZ2V0T3B0aW9uLmVsIGFzIGFueSkuc2Nyb2xsSW50b1ZpZXdJZk5lZWRlZCkge1xyXG4gICAgICAgICAgKHRhcmdldE9wdGlvbi5lbCBhcyBhbnkpLnNjcm9sbEludG9WaWV3SWZOZWVkZWQoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB0cmFja0xhYmVsKF9pbmRleDogbnVtYmVyLCBvcHRpb246IE56T3B0aW9uR3JvdXBDb21wb25lbnQpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB7XHJcbiAgICByZXR1cm4gb3B0aW9uLm56TGFiZWw7XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgdHJhY2tWYWx1ZShfaW5kZXg6IG51bWJlciwgb3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudCk6IGFueSB7XHJcbiAgICByZXR1cm4gb3B0aW9uLm56VmFsdWU7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbnpTZWxlY3RTZXJ2aWNlOiBOelNlbGVjdFNlcnZpY2UsIHB1YmxpYyBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIG5nWm9uZTogTmdab25lKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmFjdGl2YXRlZE9wdGlvbiQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShvcHRpb24gPT4ge1xyXG4gICAgICB0aGlzLnNjcm9sbEludG9WaWV3SWZOZWVkZWQob3B0aW9uISk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmNoZWNrJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgY29uc3QgdWwgPSB0aGlzLmRyb3Bkb3duVWwubmF0aXZlRWxlbWVudDtcclxuICAgICAgZnJvbUV2ZW50PE1vdXNlRXZlbnQ+KHVsLCAnc2Nyb2xsJylcclxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgICAgLnN1YnNjcmliZShlID0+IHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICBpZiAodWwgJiYgdWwuc2Nyb2xsVG9wID4gdGhpcy5sYXN0U2Nyb2xsVG9wICYmIHVsLnNjcm9sbEhlaWdodCA8IHVsLmNsaWVudEhlaWdodCArIHVsLnNjcm9sbFRvcCArIDEwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFNjcm9sbFRvcCA9IHVsLnNjcm9sbFRvcDtcclxuICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLm56U2Nyb2xsVG9Cb3R0b20uZW1pdCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5saXN0T2ZOek9wdGlvbkxpQ29tcG9uZW50LmNoYW5nZXNcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgbWFwKGxpc3QgPT4gbGlzdC5sZW5ndGgpLFxyXG4gICAgICAgIHBhaXJ3aXNlKCksXHJcbiAgICAgICAgZmlsdGVyKChbYmVmb3JlLCBhZnRlcl0pID0+IGFmdGVyIDwgYmVmb3JlKSxcclxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+ICh0aGlzLmxhc3RTY3JvbGxUb3AgPSAwKSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxufVxyXG4iLCI8dWxcclxuICAjZHJvcGRvd25VbFxyXG4gIGNsYXNzPVwiYW50LXNlbGVjdC1kcm9wZG93bi1tZW51IGFudC1zZWxlY3QtZHJvcGRvd24tbWVudS1yb290IGFudC1zZWxlY3QtZHJvcGRvd24tbWVudS12ZXJ0aWNhbFwiXHJcbiAgcm9sZT1cIm1lbnVcIlxyXG4gIHRhYmluZGV4PVwiMFwiXHJcbj5cclxuICA8bGlcclxuICAgICpuZ0lmPVwibnpTZWxlY3RTZXJ2aWNlLmlzU2hvd05vdEZvdW5kXCJcclxuICAgIG56LXNlbGVjdC11bnNlbGVjdGFibGVcclxuICAgIGNsYXNzPVwiYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0gYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0tZGlzYWJsZWRcIlxyXG4gID5cclxuICAgIDxuei1lbWJlZC1lbXB0eVxyXG4gICAgICBbbnpDb21wb25lbnROYW1lXT1cIidzZWxlY3QnXCJcclxuICAgICAgW3NwZWNpZmljQ29udGVudF09XCJuek5vdEZvdW5kQ29udGVudFwiXHJcbiAgICA+PC9uei1lbWJlZC1lbXB0eT5cclxuICA8L2xpPlxyXG4gIDxsaVxyXG4gICAgbnotb3B0aW9uLWxpXHJcbiAgICAqbmdJZj1cIm56U2VsZWN0U2VydmljZS5hZGRlZFRhZ09wdGlvblwiXHJcbiAgICBbbnpNZW51SXRlbVNlbGVjdGVkSWNvbl09XCJuek1lbnVJdGVtU2VsZWN0ZWRJY29uXCJcclxuICAgIFtuek9wdGlvbl09XCJuelNlbGVjdFNlcnZpY2UuYWRkZWRUYWdPcHRpb25cIlxyXG4gID48L2xpPlxyXG4gIDxuZy1jb250YWluZXJcclxuICAgICpuZ0Zvcj1cIlxyXG4gICAgICBsZXQgb3B0aW9uIG9mIG56U2VsZWN0U2VydmljZS5saXN0T2ZOek9wdGlvbkNvbXBvbmVudFxyXG4gICAgICAgIHwgbnpGaWx0ZXJPcHRpb25cclxuICAgICAgICAgIDogbnpTZWxlY3RTZXJ2aWNlLnNlYXJjaFZhbHVlXHJcbiAgICAgICAgICA6IG56U2VsZWN0U2VydmljZS5maWx0ZXJPcHRpb25cclxuICAgICAgICAgIDogbnpTZWxlY3RTZXJ2aWNlLnNlcnZlclNlYXJjaDtcclxuICAgICAgdHJhY2tCeTogdHJhY2tWYWx1ZVxyXG4gICAgXCJcclxuICA+XHJcbiAgICA8bGlcclxuICAgICAgbnotb3B0aW9uLWxpXHJcbiAgICAgICpuZ0lmPVwiIW9wdGlvbi5uekhpZGVcIlxyXG4gICAgICBbbnpNZW51SXRlbVNlbGVjdGVkSWNvbl09XCJuek1lbnVJdGVtU2VsZWN0ZWRJY29uXCJcclxuICAgICAgW256T3B0aW9uXT1cIm9wdGlvblwiXHJcbiAgICA+PC9saT5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuICA8bGlcclxuICAgIGNsYXNzPVwiYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0tZ3JvdXBcIlxyXG4gICAgKm5nRm9yPVwiXHJcbiAgICAgIGxldCBncm91cCBvZiBuelNlbGVjdFNlcnZpY2UubGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudFxyXG4gICAgICAgIHwgbnpGaWx0ZXJHcm91cE9wdGlvblxyXG4gICAgICAgICAgOiBuelNlbGVjdFNlcnZpY2Uuc2VhcmNoVmFsdWVcclxuICAgICAgICAgIDogbnpTZWxlY3RTZXJ2aWNlLmZpbHRlck9wdGlvblxyXG4gICAgICAgICAgOiBuelNlbGVjdFNlcnZpY2Uuc2VydmVyU2VhcmNoO1xyXG4gICAgICB0cmFja0J5OiB0cmFja0xhYmVsXHJcbiAgICBcIlxyXG4gID5cclxuICAgIDxkaXZcclxuICAgICAgY2xhc3M9XCJhbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbS1ncm91cC10aXRsZVwiXHJcbiAgICAgIFthdHRyLnRpdGxlXT1cImdyb3VwLmlzTGFiZWxTdHJpbmcgPyBncm91cC5uekxhYmVsIDogJydcIlxyXG4gICAgPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiZ3JvdXAubnpMYWJlbFwiPiB7eyBncm91cC5uekxhYmVsIH19IDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8dWwgY2xhc3M9XCJhbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbS1ncm91cC1saXN0XCI+XHJcbiAgICAgIDxuZy1jb250YWluZXJcclxuICAgICAgICAqbmdGb3I9XCJcclxuICAgICAgICAgIGxldCBvcHRpb24gb2YgZ3JvdXAubGlzdE9mTnpPcHRpb25Db21wb25lbnRcclxuICAgICAgICAgICAgfCBuekZpbHRlck9wdGlvblxyXG4gICAgICAgICAgICAgIDogbnpTZWxlY3RTZXJ2aWNlLnNlYXJjaFZhbHVlXHJcbiAgICAgICAgICAgICAgOiBuelNlbGVjdFNlcnZpY2UuZmlsdGVyT3B0aW9uXHJcbiAgICAgICAgICAgICAgOiBuelNlbGVjdFNlcnZpY2Uuc2VydmVyU2VhcmNoO1xyXG4gICAgICAgICAgdHJhY2tCeTogdHJhY2tWYWx1ZVxyXG4gICAgICAgIFwiXHJcbiAgICAgID5cclxuICAgICAgICA8bGlcclxuICAgICAgICAgIG56LW9wdGlvbi1saVxyXG4gICAgICAgICAgKm5nSWY9XCIhb3B0aW9uLm56SGlkZVwiXHJcbiAgICAgICAgICBbbnpNZW51SXRlbVNlbGVjdGVkSWNvbl09XCJuek1lbnVJdGVtU2VsZWN0ZWRJY29uXCJcclxuICAgICAgICAgIFtuek9wdGlvbl09XCJvcHRpb25cIlxyXG4gICAgICAgID48L2xpPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvdWw+XHJcbiAgPC9saT5cclxuICA8bGlcclxuICAgIG56LW9wdGlvbi1saVxyXG4gICAgKm5nRm9yPVwiXHJcbiAgICAgIGxldCBvcHRpb24gb2YgbnpTZWxlY3RTZXJ2aWNlLmxpc3RPZlRhZ09wdGlvblxyXG4gICAgICAgIHwgbnpGaWx0ZXJPcHRpb25cclxuICAgICAgICAgIDogbnpTZWxlY3RTZXJ2aWNlLnNlYXJjaFZhbHVlXHJcbiAgICAgICAgICA6IG56U2VsZWN0U2VydmljZS5maWx0ZXJPcHRpb25cclxuICAgICAgICAgIDogbnpTZWxlY3RTZXJ2aWNlLnNlcnZlclNlYXJjaDtcclxuICAgICAgdHJhY2tCeTogdHJhY2tWYWx1ZVxyXG4gICAgXCJcclxuICAgIFtuek1lbnVJdGVtU2VsZWN0ZWRJY29uXT1cIm56TWVudUl0ZW1TZWxlY3RlZEljb25cIlxyXG4gICAgW256T3B0aW9uXT1cIm9wdGlvblwiXHJcbiAgPjwvbGk+XHJcbjwvdWw+XHJcbiJdfQ==
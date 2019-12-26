/**
 * @fileoverview added by tsickle
 * Generated from: nz-td.component.ts
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
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { isNotNil, InputBoolean, NzUpdateHostClassService } from 'ng-zorro-antd/core';
var NzTdComponent = /** @class */ (function () {
    function NzTdComponent(elementRef, nzUpdateHostClassService) {
        this.elementRef = elementRef;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.nzChecked = false;
        this.nzDisabled = false;
        this.nzIndeterminate = false;
        this.nzExpand = false;
        this.nzShowExpand = false;
        this.nzShowCheckbox = false;
        this.nzBreakWord = false;
        this.nzCheckedChange = new EventEmitter();
        this.nzExpandChange = new EventEmitter();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    NzTdComponent.prototype.expandChange = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.stopPropagation();
        this.nzExpand = !this.nzExpand;
        this.nzExpandChange.emit(this.nzExpand);
    };
    /**
     * @return {?}
     */
    NzTdComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, (_a = {},
            _a["ant-table-row-expand-icon-cell"] = this.nzShowExpand && !isNotNil(this.nzIndentSize),
            _a["ant-table-selection-column"] = this.nzShowCheckbox,
            _a["ant-table-td-left-sticky"] = isNotNil(this.nzLeft),
            _a["ant-table-td-right-sticky"] = isNotNil(this.nzRight),
            _a));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzTdComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzIndentSize || changes.nzShowExpand || changes.nzShowCheckbox || changes.nzRight || changes.nzLeft) {
            this.setClassMap();
        }
    };
    NzTdComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'td:not(.nz-disable-td):not([mat-cell])',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [NzUpdateHostClassService],
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    template: "<span class=\"ant-table-row-indent\" *ngIf=\"nzIndentSize >= 0\" [style.padding-left.px]=\"nzIndentSize\"></span>\r\n<label *ngIf=\"nzShowCheckbox\"\r\n  nz-checkbox\r\n  [nzDisabled]=\"nzDisabled\"\r\n  [(ngModel)]=\"nzChecked\"\r\n  [nzIndeterminate]=\"nzIndeterminate\"\r\n  (ngModelChange)=\"nzCheckedChange.emit($event)\">\r\n</label>\r\n<span *ngIf=\"!nzShowExpand && nzIndentSize >= 0\"\r\n  class=\"ant-table-row-expand-icon ant-table-row-spaced\">\r\n</span>\r\n<span *ngIf=\"nzShowExpand\"\r\n  class=\"ant-table-row-expand-icon\"\r\n  [class.ant-table-row-expanded]=\"nzExpand\"\r\n  [class.ant-table-row-collapsed]=\"!nzExpand\"\r\n  (click)=\"expandChange($event)\">\r\n</span>\r\n<ng-content></ng-content>",
                    host: {
                        '[style.left]': 'nzLeft',
                        '[style.right]': 'nzRight',
                        '[style.text-align]': 'nzAlign',
                        '[style.word-break]': "nzBreakWord ? 'break-all' : ''"
                    }
                }] }
    ];
    /** @nocollapse */
    NzTdComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NzUpdateHostClassService }
    ]; };
    NzTdComponent.propDecorators = {
        nzChecked: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzIndeterminate: [{ type: Input }],
        nzLeft: [{ type: Input }],
        nzRight: [{ type: Input }],
        nzAlign: [{ type: Input }],
        nzIndentSize: [{ type: Input }],
        nzExpand: [{ type: Input }],
        nzShowExpand: [{ type: Input }],
        nzShowCheckbox: [{ type: Input }],
        nzBreakWord: [{ type: Input }],
        nzCheckedChange: [{ type: Output }],
        nzExpandChange: [{ type: Output }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTdComponent.prototype, "nzExpand", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTdComponent.prototype, "nzShowExpand", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTdComponent.prototype, "nzShowCheckbox", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTdComponent.prototype, "nzBreakWord", void 0);
    return NzTdComponent;
}());
export { NzTdComponent };
if (false) {
    /** @type {?} */
    NzTdComponent.prototype.nzChecked;
    /** @type {?} */
    NzTdComponent.prototype.nzDisabled;
    /** @type {?} */
    NzTdComponent.prototype.nzIndeterminate;
    /** @type {?} */
    NzTdComponent.prototype.nzLeft;
    /** @type {?} */
    NzTdComponent.prototype.nzRight;
    /** @type {?} */
    NzTdComponent.prototype.nzAlign;
    /** @type {?} */
    NzTdComponent.prototype.nzIndentSize;
    /** @type {?} */
    NzTdComponent.prototype.nzExpand;
    /** @type {?} */
    NzTdComponent.prototype.nzShowExpand;
    /** @type {?} */
    NzTdComponent.prototype.nzShowCheckbox;
    /** @type {?} */
    NzTdComponent.prototype.nzBreakWord;
    /** @type {?} */
    NzTdComponent.prototype.nzCheckedChange;
    /** @type {?} */
    NzTdComponent.prototype.nzExpandChange;
    /**
     * @type {?}
     * @private
     */
    NzTdComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzTdComponent.prototype.nzUpdateHostClassService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90YWJsZS8iLCJzb3VyY2VzIjpbIm56LXRkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUVOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXRGO0lBNkNFLHVCQUFvQixVQUFzQixFQUFVLHdCQUFrRDtRQUFsRixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQTdCN0YsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBS1IsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUMxQixvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFDOUMsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0lBaUJ5QyxDQUFDOzs7OztJQWYxRyxvQ0FBWTs7OztJQUFaLFVBQWEsQ0FBUTtRQUNuQixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDL0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7SUFFRCxtQ0FBVzs7O0lBQVg7O1FBQ0UsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWE7WUFDekUsR0FBQyxnQ0FBZ0MsSUFBRyxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDckYsR0FBQyw0QkFBNEIsSUFBRyxJQUFJLENBQUMsY0FBYztZQUNuRCxHQUFDLDBCQUEwQixJQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ25ELEdBQUMsMkJBQTJCLElBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ3JELENBQUM7SUFDTCxDQUFDOzs7OztJQUlELG1DQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxZQUFZLElBQUksT0FBTyxDQUFDLFlBQVksSUFBSSxPQUFPLENBQUMsY0FBYyxJQUFJLE9BQU8sQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUMvRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7SUFDSCxDQUFDOztnQkFuREYsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUsd0NBQXdDO29CQUNsRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7b0JBQ3JDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQywydEJBQXFDO29CQUNyQyxJQUFJLEVBQUU7d0JBQ0osY0FBYyxFQUFFLFFBQVE7d0JBQ3hCLGVBQWUsRUFBRSxTQUFTO3dCQUMxQixvQkFBb0IsRUFBRSxTQUFTO3dCQUMvQixvQkFBb0IsRUFBRSxnQ0FBZ0M7cUJBQ3ZEO2lCQUNGOzs7O2dCQXpCQyxVQUFVO2dCQVNxQix3QkFBd0I7Ozs0QkFrQnRELEtBQUs7NkJBQ0wsS0FBSztrQ0FDTCxLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLOytCQUNMLEtBQUs7MkJBQ0wsS0FBSzsrQkFDTCxLQUFLO2lDQUNMLEtBQUs7OEJBQ0wsS0FBSztrQ0FDTCxNQUFNO2lDQUNOLE1BQU07O0lBTGtCO1FBQWYsWUFBWSxFQUFFOzttREFBa0I7SUFDakI7UUFBZixZQUFZLEVBQUU7O3VEQUFzQjtJQUNyQjtRQUFmLFlBQVksRUFBRTs7eURBQXdCO0lBQ3ZCO1FBQWYsWUFBWSxFQUFFOztzREFBcUI7SUEwQi9DLG9CQUFDO0NBQUEsQUFwREQsSUFvREM7U0FyQ1ksYUFBYTs7O0lBQ3hCLGtDQUEyQjs7SUFDM0IsbUNBQTRCOztJQUM1Qix3Q0FBaUM7O0lBQ2pDLCtCQUF3Qjs7SUFDeEIsZ0NBQXlCOztJQUN6QixnQ0FBOEM7O0lBQzlDLHFDQUE4Qjs7SUFDOUIsaUNBQTBDOztJQUMxQyxxQ0FBOEM7O0lBQzlDLHVDQUFnRDs7SUFDaEQsb0NBQTZDOztJQUM3Qyx3Q0FBaUU7O0lBQ2pFLHVDQUFnRTs7Ozs7SUFpQnBELG1DQUE4Qjs7Ozs7SUFBRSxpREFBMEQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgaXNOb3ROaWwsIElucHV0Qm9vbGVhbiwgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ3RkOm5vdCgubnotZGlzYWJsZS10ZCk6bm90KFttYXQtY2VsbF0pJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcm92aWRlcnM6IFtOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VdLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXRkLmNvbXBvbmVudC5odG1sJyxcclxuICBob3N0OiB7XHJcbiAgICAnW3N0eWxlLmxlZnRdJzogJ256TGVmdCcsXHJcbiAgICAnW3N0eWxlLnJpZ2h0XSc6ICduelJpZ2h0JyxcclxuICAgICdbc3R5bGUudGV4dC1hbGlnbl0nOiAnbnpBbGlnbicsXHJcbiAgICAnW3N0eWxlLndvcmQtYnJlYWtdJzogYG56QnJlYWtXb3JkID8gJ2JyZWFrLWFsbCcgOiAnJ2BcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelRkQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBuekNoZWNrZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBuekRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpJbmRldGVybWluYXRlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpMZWZ0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpSaWdodDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG56QWxpZ246ICdsZWZ0JyB8ICdyaWdodCcgfCAnY2VudGVyJztcclxuICBASW5wdXQoKSBuekluZGVudFNpemU6IG51bWJlcjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpFeHBhbmQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93RXhwYW5kID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd0NoZWNrYm94ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QnJlYWtXb3JkID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2hlY2tlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpFeHBhbmRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIGV4cGFuZENoYW5nZShlOiBFdmVudCk6IHZvaWQge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMubnpFeHBhbmQgPSAhdGhpcy5uekV4cGFuZDtcclxuICAgIHRoaXMubnpFeHBhbmRDaGFuZ2UuZW1pdCh0aGlzLm56RXhwYW5kKTtcclxuICB9XHJcblxyXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgdGhpcy5uelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB7XHJcbiAgICAgIFtgYW50LXRhYmxlLXJvdy1leHBhbmQtaWNvbi1jZWxsYF06IHRoaXMubnpTaG93RXhwYW5kICYmICFpc05vdE5pbCh0aGlzLm56SW5kZW50U2l6ZSksXHJcbiAgICAgIFtgYW50LXRhYmxlLXNlbGVjdGlvbi1jb2x1bW5gXTogdGhpcy5uelNob3dDaGVja2JveCxcclxuICAgICAgW2BhbnQtdGFibGUtdGQtbGVmdC1zdGlja3lgXTogaXNOb3ROaWwodGhpcy5uekxlZnQpLFxyXG4gICAgICBbYGFudC10YWJsZS10ZC1yaWdodC1zdGlja3lgXTogaXNOb3ROaWwodGhpcy5uelJpZ2h0KVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UpIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLm56SW5kZW50U2l6ZSB8fCBjaGFuZ2VzLm56U2hvd0V4cGFuZCB8fCBjaGFuZ2VzLm56U2hvd0NoZWNrYm94IHx8IGNoYW5nZXMubnpSaWdodCB8fCBjaGFuZ2VzLm56TGVmdCkge1xyXG4gICAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==
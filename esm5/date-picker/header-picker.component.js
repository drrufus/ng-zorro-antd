/**
 * @fileoverview added by tsickle
 * Generated from: header-picker.component.ts
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
import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { valueFunctionProp, CandyDate, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { DateHelperService, NzI18nService } from 'ng-zorro-antd/i18n';
import { AbstractPickerComponent } from './abstract-picker.component';
/**
 * The base picker for header panels, current support: Year/Month
 */
var HeaderPickerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(HeaderPickerComponent, _super);
    function HeaderPickerComponent(i18n, cdr, dateHelper, noAnimation) {
        return _super.call(this, i18n, cdr, dateHelper, noAnimation) || this;
    }
    /**
     * @return {?}
     */
    HeaderPickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnInit.call(this);
        this.panelMode = this.endPanelMode;
        /** @type {?} */
        var allHeaderPanels = ['decade', 'year', 'month'];
        this.supportPanels = allHeaderPanels.slice(0, allHeaderPanels.indexOf(this.endPanelMode) + 1);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    HeaderPickerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        if (changes.nzRenderExtraFooter) {
            this.extraFooter = valueFunctionProp(this.nzRenderExtraFooter);
        }
    };
    /**
     * @param {?} mode
     * @return {?}
     */
    HeaderPickerComponent.prototype.onPanelModeChange = /**
     * @param {?} mode
     * @return {?}
     */
    function (mode) {
        if (this.supportPanels.indexOf(mode) > -1) {
            this.panelMode = mode;
        }
        else {
            // Since the default "click year" logic can be "year panel" -> "date panel", we need force to the end panel otherwise
            this.panelMode = this.endPanelMode;
        }
    };
    /**
     * @param {?} mode
     * @param {?} value
     * @return {?}
     */
    HeaderPickerComponent.prototype.onChooseValue = /**
     * @param {?} mode
     * @param {?} value
     * @return {?}
     */
    function (mode, value) {
        if (this.endPanelMode === mode) {
            _super.prototype.onValueChange.call(this, value);
            this.closeOverlay();
        }
    };
    /**
     * @param {?} open
     * @return {?}
     */
    HeaderPickerComponent.prototype.onOpenChange = /**
     * @param {?} open
     * @return {?}
     */
    function (open) {
        if (!open) {
            this.cleanUp();
        }
        this.nzOnOpenChange.emit(open);
    };
    // Restore some initial props to let open as new in next time
    // Restore some initial props to let open as new in next time
    /**
     * @private
     * @return {?}
     */
    HeaderPickerComponent.prototype.cleanUp = 
    // Restore some initial props to let open as new in next time
    /**
     * @private
     * @return {?}
     */
    function () {
        this.panelMode = this.endPanelMode;
    };
    HeaderPickerComponent.decorators = [
        { type: Component, args: [{
                    template: ""
                }] }
    ];
    /** @nocollapse */
    HeaderPickerComponent.ctorParameters = function () { return [
        { type: NzI18nService },
        { type: ChangeDetectorRef },
        { type: DateHelperService },
        { type: NzNoAnimationDirective }
    ]; };
    HeaderPickerComponent.propDecorators = {
        nzPlaceHolder: [{ type: Input }],
        nzRenderExtraFooter: [{ type: Input }],
        nzDefaultValue: [{ type: Input }],
        nzFormat: [{ type: Input }]
    };
    return HeaderPickerComponent;
}(AbstractPickerComponent));
export { HeaderPickerComponent };
if (false) {
    /** @type {?} */
    HeaderPickerComponent.prototype.nzPlaceHolder;
    /** @type {?} */
    HeaderPickerComponent.prototype.nzRenderExtraFooter;
    /** @type {?} */
    HeaderPickerComponent.prototype.nzDefaultValue;
    /** @type {?} */
    HeaderPickerComponent.prototype.nzFormat;
    /** @type {?} */
    HeaderPickerComponent.prototype.endPanelMode;
    /** @type {?} */
    HeaderPickerComponent.prototype.panelMode;
    /** @type {?} */
    HeaderPickerComponent.prototype.extraFooter;
    /**
     * @type {?}
     * @private
     */
    HeaderPickerComponent.prototype.supportPanels;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2RhdGUtcGlja2VyLyIsInNvdXJjZXMiOlsiaGVhZGVyLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFpRCxNQUFNLGVBQWUsQ0FBQztBQUVuSCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFnQixzQkFBc0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3hHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV0RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7OztBQU90RTtJQUcyQyxpREFBdUI7SUFhaEUsK0JBQ0UsSUFBbUIsRUFDbkIsR0FBc0IsRUFDdEIsVUFBNkIsRUFDN0IsV0FBb0M7ZUFFcEMsa0JBQU0sSUFBSSxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsV0FBVyxDQUFDO0lBQzNDLENBQUM7Ozs7SUFFRCx3Q0FBUTs7O0lBQVI7UUFDRSxpQkFBTSxRQUFRLFdBQUUsQ0FBQztRQUVqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7O1lBRTdCLGVBQWUsR0FBZ0IsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQztRQUNoRSxJQUFJLENBQUMsYUFBYSxHQUFHLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7Ozs7O0lBRUQsMkNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLGlCQUFNLFdBQVcsWUFBQyxPQUFPLENBQUMsQ0FBQztRQUUzQixJQUFJLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRTtZQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLGlCQUFpQixDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1NBQ2hFO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxpREFBaUI7Ozs7SUFBakIsVUFBa0IsSUFBZTtRQUMvQixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ3pDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ3ZCO2FBQU07WUFDTCxxSEFBcUg7WUFDckgsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsNkNBQWE7Ozs7O0lBQWIsVUFBYyxJQUF3QixFQUFFLEtBQWdCO1FBQ3RELElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxJQUFJLEVBQUU7WUFDOUIsaUJBQU0sYUFBYSxZQUFDLEtBQUssQ0FBQyxDQUFDO1lBRTNCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjtJQUNILENBQUM7Ozs7O0lBRUQsNENBQVk7Ozs7SUFBWixVQUFhLElBQWE7UUFDeEIsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNoQjtRQUNELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCw2REFBNkQ7Ozs7OztJQUNyRCx1Q0FBTzs7Ozs7O0lBQWY7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDckMsQ0FBQzs7Z0JBckVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsRUFBRTtpQkFDYjs7OztnQkFYMkIsYUFBYTtnQkFIaEMsaUJBQWlCO2dCQUdqQixpQkFBaUI7Z0JBRDJCLHNCQUFzQjs7O2dDQWN4RSxLQUFLO3NDQUVMLEtBQUs7aUNBQ0wsS0FBSzsyQkFDTCxLQUFLOztJQThEUiw0QkFBQztDQUFBLEFBdEVELENBRzJDLHVCQUF1QixHQW1FakU7U0FuRVkscUJBQXFCOzs7SUFDaEMsOENBQStCOztJQUUvQixvREFBdUU7O0lBQ3ZFLCtDQUFtQzs7SUFDbkMseUNBQTBCOztJQUUxQiw2Q0FBaUM7O0lBQ2pDLDBDQUFxQjs7SUFDckIsNENBQXdDOzs7OztJQUV4Qyw4Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcywgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IHZhbHVlRnVuY3Rpb25Qcm9wLCBDYW5keURhdGUsIEZ1bmN0aW9uUHJvcCwgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IERhdGVIZWxwZXJTZXJ2aWNlLCBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuXHJcbmltcG9ydCB7IEFic3RyYWN0UGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9hYnN0cmFjdC1waWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGFuZWxNb2RlIH0gZnJvbSAnLi9zdGFuZGFyZC10eXBlcyc7XHJcblxyXG4vKipcclxuICogVGhlIGJhc2UgcGlja2VyIGZvciBoZWFkZXIgcGFuZWxzLCBjdXJyZW50IHN1cHBvcnQ6IFllYXIvTW9udGhcclxuICovXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICB0ZW1wbGF0ZTogYGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEhlYWRlclBpY2tlckNvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0UGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIG56UGxhY2VIb2xkZXI6IHN0cmluZztcclxuXHJcbiAgQElucHV0KCkgbnpSZW5kZXJFeHRyYUZvb3RlcjogRnVuY3Rpb25Qcm9wPFRlbXBsYXRlUmVmPHZvaWQ+IHwgc3RyaW5nPjtcclxuICBASW5wdXQoKSBuekRlZmF1bHRWYWx1ZTogQ2FuZHlEYXRlO1xyXG4gIEBJbnB1dCgpIG56Rm9ybWF0OiBzdHJpbmc7IC8vIFtDYW5tcGxlbWVudGVkIGJ5IHN1YiBjbGFzc10gVGhlIG91dHB1dCBmb3JtYXRcclxuXHJcbiAgZW5kUGFuZWxNb2RlOiBTdXBwb3J0SGVhZGVyUGFuZWw7IC8vIFtJbXBsZW1lbnRlZCBieSBzdWIgY2xhc3NdIFRoZSBmaW5hbCBwYW5lbCBmb3IgcGlja2luZyBhIGRhdGVcclxuICBwYW5lbE1vZGU6IFBhbmVsTW9kZTsgLy8gQ3VycmVudCBwYW5lbCBtb2RlXHJcbiAgZXh0cmFGb290ZXI6IFRlbXBsYXRlUmVmPHZvaWQ+IHwgc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIHN1cHBvcnRQYW5lbHM6IFBhbmVsTW9kZVtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGkxOG46IE56STE4blNlcnZpY2UsXHJcbiAgICBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgZGF0ZUhlbHBlcjogRGF0ZUhlbHBlclNlcnZpY2UsXHJcbiAgICBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcclxuICApIHtcclxuICAgIHN1cGVyKGkxOG4sIGNkciwgZGF0ZUhlbHBlciwgbm9BbmltYXRpb24pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xyXG5cclxuICAgIHRoaXMucGFuZWxNb2RlID0gdGhpcy5lbmRQYW5lbE1vZGU7XHJcblxyXG4gICAgY29uc3QgYWxsSGVhZGVyUGFuZWxzOiBQYW5lbE1vZGVbXSA9IFsnZGVjYWRlJywgJ3llYXInLCAnbW9udGgnXTtcclxuICAgIHRoaXMuc3VwcG9ydFBhbmVscyA9IGFsbEhlYWRlclBhbmVscy5zbGljZSgwLCBhbGxIZWFkZXJQYW5lbHMuaW5kZXhPZih0aGlzLmVuZFBhbmVsTW9kZSkgKyAxKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIHN1cGVyLm5nT25DaGFuZ2VzKGNoYW5nZXMpO1xyXG5cclxuICAgIGlmIChjaGFuZ2VzLm56UmVuZGVyRXh0cmFGb290ZXIpIHtcclxuICAgICAgdGhpcy5leHRyYUZvb3RlciA9IHZhbHVlRnVuY3Rpb25Qcm9wKHRoaXMubnpSZW5kZXJFeHRyYUZvb3Rlcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblBhbmVsTW9kZUNoYW5nZShtb2RlOiBQYW5lbE1vZGUpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnN1cHBvcnRQYW5lbHMuaW5kZXhPZihtb2RlKSA+IC0xKSB7XHJcbiAgICAgIHRoaXMucGFuZWxNb2RlID0gbW9kZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFNpbmNlIHRoZSBkZWZhdWx0IFwiY2xpY2sgeWVhclwiIGxvZ2ljIGNhbiBiZSBcInllYXIgcGFuZWxcIiAtPiBcImRhdGUgcGFuZWxcIiwgd2UgbmVlZCBmb3JjZSB0byB0aGUgZW5kIHBhbmVsIG90aGVyd2lzZVxyXG4gICAgICB0aGlzLnBhbmVsTW9kZSA9IHRoaXMuZW5kUGFuZWxNb2RlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DaG9vc2VWYWx1ZShtb2RlOiBTdXBwb3J0SGVhZGVyUGFuZWwsIHZhbHVlOiBDYW5keURhdGUpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmVuZFBhbmVsTW9kZSA9PT0gbW9kZSkge1xyXG4gICAgICBzdXBlci5vblZhbHVlQ2hhbmdlKHZhbHVlKTtcclxuXHJcbiAgICAgIHRoaXMuY2xvc2VPdmVybGF5KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbk9wZW5DaGFuZ2Uob3BlbjogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKCFvcGVuKSB7XHJcbiAgICAgIHRoaXMuY2xlYW5VcCgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5uek9uT3BlbkNoYW5nZS5lbWl0KG9wZW4pO1xyXG4gIH1cclxuXHJcbiAgLy8gUmVzdG9yZSBzb21lIGluaXRpYWwgcHJvcHMgdG8gbGV0IG9wZW4gYXMgbmV3IGluIG5leHQgdGltZVxyXG4gIHByaXZhdGUgY2xlYW5VcCgpOiB2b2lkIHtcclxuICAgIHRoaXMucGFuZWxNb2RlID0gdGhpcy5lbmRQYW5lbE1vZGU7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBTdXBwb3J0SGVhZGVyUGFuZWwgPSAneWVhcicgfCAnbW9udGgnO1xyXG4iXX0=
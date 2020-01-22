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
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { FocusMonitor } from '@angular/cdk/a11y';
import { ENTER, LEFT_ARROW, RIGHT_ARROW, SPACE } from '@angular/cdk/keycodes';
import { forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputBoolean, NzConfigService, WithConfig } from 'ng-zorro-antd/core';
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'switch';
export class NzSwitchComponent {
    /**
     * @param {?} nzConfigService
     * @param {?} cdr
     * @param {?} focusMonitor
     */
    constructor(nzConfigService, cdr, focusMonitor) {
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.focusMonitor = focusMonitor;
        this.checked = false;
        this.onChange = (/**
         * @return {?}
         */
        () => null);
        this.onTouched = (/**
         * @return {?}
         */
        () => null);
        this.nzLoading = false;
        this.nzDisabled = false;
        this.nzControl = false;
        this.nzLabel = '';
    }
    /**
     * @param {?} e
     * @return {?}
     */
    hostClick(e) {
        e.preventDefault();
        if (!this.nzDisabled && !this.nzLoading && !this.nzControl) {
            this.updateValue(!this.checked);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    updateValue(value) {
        if (this.checked !== value) {
            this.checked = value;
            this.onChange(this.checked);
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDown(e) {
        if (!this.nzControl && !this.nzDisabled && !this.nzLoading) {
            if (e.keyCode === LEFT_ARROW) {
                this.updateValue(false);
                e.preventDefault();
            }
            else if (e.keyCode === RIGHT_ARROW) {
                this.updateValue(true);
                e.preventDefault();
            }
            else if (e.keyCode === SPACE || e.keyCode === ENTER) {
                this.updateValue(!this.checked);
                e.preventDefault();
            }
        }
    }
    /**
     * @return {?}
     */
    focus() {
        this.focusMonitor.focusVia(this.switchElement.nativeElement, 'keyboard');
    }
    /**
     * @return {?}
     */
    blur() {
        this.switchElement.nativeElement.blur();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.focusMonitor.monitor(this.switchElement.nativeElement, true).subscribe((/**
         * @param {?} focusOrigin
         * @return {?}
         */
        focusOrigin => {
            if (!focusOrigin) {
                // When a focused element becomes disabled, the browser *immediately* fires a blur event.
                // Angular does not expect events to be raised during change detection, so any state change
                // (such as a form control's 'ng-touched') will cause a changed-after-checked error.
                // See https://github.com/angular/angular/issues/17793. To work around this, we defer
                // telling the form control it has been touched until the next tick.
                Promise.resolve().then((/**
                 * @return {?}
                 */
                () => this.onTouched()));
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.focusMonitor.stopMonitoring(this.switchElement.nativeElement);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.checked = value;
        this.cdr.markForCheck();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.nzDisabled = isDisabled;
        this.cdr.markForCheck();
    }
}
NzSwitchComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-switch',
                exportAs: 'nzSwitch',
                preserveWhitespaces: false,
                template: "<label>\r\n  <button type=\"button\" #switchElement nz-wave class=\"ant-switch\" [disabled]=\"nzDisabled\" [attr.aria-checked]=\"checked\"\r\n    [class.ant-switch-checked]=\"checked\" [class.ant-switch-loading]=\"nzLoading\" [class.ant-switch-disabled]=\"nzDisabled\"\r\n    [class.ant-switch-small]=\"nzSize === 'small'\" [nzWaveExtraNode]=\"true\" (keydown)=\"onKeyDown($event)\">\r\n    <i *ngIf=\"nzLoading\" nz-icon nzType=\"loading\" class=\"ant-switch-loading-icon\"></i>\r\n    <span class=\"ant-switch-inner\">\r\n      <span>\r\n        <ng-container *ngIf=\"checked\">\r\n          <ng-container *nzStringTemplateOutlet=\"nzCheckedChildren\">{{ nzCheckedChildren }}</ng-container>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"!checked\">\r\n          <ng-container *nzStringTemplateOutlet=\"nzUnCheckedChildren\">{{ nzUnCheckedChildren }}</ng-container>\r\n        </ng-container>\r\n      </span>\r\n    </span>\r\n  </button>\r\n  {{ nzLabel }}\r\n</label>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => NzSwitchComponent)),
                        multi: true
                    }
                ],
                host: {
                    '(click)': 'hostClick($event)'
                },
                styles: [`
      nz-switch {
        display: inline-block;
      }
    `]
            }] }
];
/** @nocollapse */
NzSwitchComponent.ctorParameters = () => [
    { type: NzConfigService },
    { type: ChangeDetectorRef },
    { type: FocusMonitor }
];
NzSwitchComponent.propDecorators = {
    switchElement: [{ type: ViewChild, args: ['switchElement', { static: true },] }],
    nzLoading: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzControl: [{ type: Input }],
    nzCheckedChildren: [{ type: Input }],
    nzUnCheckedChildren: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzLabel: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzSwitchComponent.prototype, "nzLoading", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzSwitchComponent.prototype, "nzDisabled", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzSwitchComponent.prototype, "nzControl", void 0);
tslib_1.__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, 'default'),
    tslib_1.__metadata("design:type", String)
], NzSwitchComponent.prototype, "nzSize", void 0);
if (false) {
    /** @type {?} */
    NzSwitchComponent.prototype.checked;
    /** @type {?} */
    NzSwitchComponent.prototype.onChange;
    /** @type {?} */
    NzSwitchComponent.prototype.onTouched;
    /**
     * @type {?}
     * @private
     */
    NzSwitchComponent.prototype.switchElement;
    /** @type {?} */
    NzSwitchComponent.prototype.nzLoading;
    /** @type {?} */
    NzSwitchComponent.prototype.nzDisabled;
    /** @type {?} */
    NzSwitchComponent.prototype.nzControl;
    /** @type {?} */
    NzSwitchComponent.prototype.nzCheckedChildren;
    /** @type {?} */
    NzSwitchComponent.prototype.nzUnCheckedChildren;
    /** @type {?} */
    NzSwitchComponent.prototype.nzSize;
    /** @type {?} */
    NzSwitchComponent.prototype.nzLabel;
    /** @type {?} */
    NzSwitchComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzSwitchComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzSwitchComponent.prototype.focusMonitor;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3dpdGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvc3dpdGNoLyIsInNvdXJjZXMiOlsibnotc3dpdGNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDOUUsT0FBTyxFQUNMLFVBQVUsRUFFVix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUdMLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFnQixVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7TUFFdkYsd0JBQXdCLEdBQUcsUUFBUTtBQTJCekMsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7O0lBa0Q1QixZQUNTLGVBQWdDLEVBQy9CLEdBQXNCLEVBQ3RCLFlBQTBCO1FBRjNCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUMvQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQXBEcEMsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixhQUFROzs7UUFBNkIsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFDO1FBQ2hELGNBQVM7OztRQUFlLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBQztRQUVWLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBSWxDLFlBQU8sR0FBVyxFQUFF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QUEyQzs7SUFDM0MsOENBQXVEOztJQUN2RCxnREFBeUQ7O0lBQ3pELG1DQUErRTs7SUFDL0Usb0NBQThCOztJQXdDNUIsNENBQXVDOzs7OztJQUN2QyxnQ0FBOEI7Ozs7O0lBQzlCLHlDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgRm9jdXNNb25pdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHsgRU5URVIsIExFRlRfQVJST1csIFJJR0hUX0FSUk9XLCBTUEFDRSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQge1xuICBmb3J3YXJkUmVmLFxuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgTnpDb25maWdTZXJ2aWNlLCBOelNpemVEU1R5cGUsIFdpdGhDb25maWcgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAnc3dpdGNoJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotc3dpdGNoJyxcbiAgZXhwb3J0QXM6ICduelN3aXRjaCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotc3dpdGNoLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnpTd2l0Y2hDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF0sXG4gIGhvc3Q6IHtcbiAgICAnKGNsaWNrKSc6ICdob3N0Q2xpY2soJGV2ZW50KSdcbiAgfSxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgbnotc3dpdGNoIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgfVxuICAgIGBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOelN3aXRjaENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBjaGVja2VkID0gZmFsc2U7XG4gIG9uQ2hhbmdlOiAodmFsdWU6IGJvb2xlYW4pID0+IHZvaWQgPSAoKSA9PiBudWxsO1xuICBvblRvdWNoZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiBudWxsO1xuICBAVmlld0NoaWxkKCdzd2l0Y2hFbGVtZW50JywgeyBzdGF0aWM6IHRydWUgfSkgcHJpdmF0ZSBzd2l0Y2hFbGVtZW50OiBFbGVtZW50UmVmO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpMb2FkaW5nID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekNvbnRyb2wgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpDaGVja2VkQ2hpbGRyZW46IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBuelVuQ2hlY2tlZENoaWxkcmVuOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCAnZGVmYXVsdCcpIG56U2l6ZTogTnpTaXplRFNUeXBlO1xuICBASW5wdXQoKSBuekxhYmVsOiBzdHJpbmcgPSAnJztcblxuICBob3N0Q2xpY2soZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIXRoaXMubnpEaXNhYmxlZCAmJiAhdGhpcy5uekxvYWRpbmcgJiYgIXRoaXMubnpDb250cm9sKSB7XG4gICAgICB0aGlzLnVwZGF0ZVZhbHVlKCF0aGlzLmNoZWNrZWQpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVZhbHVlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2hlY2tlZCAhPT0gdmFsdWUpIHtcbiAgICAgIHRoaXMuY2hlY2tlZCA9IHZhbHVlO1xuICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLmNoZWNrZWQpO1xuICAgIH1cbiAgfVxuXG4gIG9uS2V5RG93bihlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm56Q29udHJvbCAmJiAhdGhpcy5uekRpc2FibGVkICYmICF0aGlzLm56TG9hZGluZykge1xuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gTEVGVF9BUlJPVykge1xuICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKGZhbHNlKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IFJJR0hUX0FSUk9XKSB7XG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWUodHJ1ZSk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSBTUEFDRSB8fCBlLmtleUNvZGUgPT09IEVOVEVSKSB7XG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWUoIXRoaXMuY2hlY2tlZCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmb2N1cygpOiB2b2lkIHtcbiAgICB0aGlzLmZvY3VzTW9uaXRvci5mb2N1c1ZpYSh0aGlzLnN3aXRjaEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2tleWJvYXJkJyk7XG4gIH1cblxuICBibHVyKCk6IHZvaWQge1xuICAgIHRoaXMuc3dpdGNoRWxlbWVudC5uYXRpdmVFbGVtZW50LmJsdXIoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBmb2N1c01vbml0b3I6IEZvY3VzTW9uaXRvclxuICApIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZm9jdXNNb25pdG9yLm1vbml0b3IodGhpcy5zd2l0Y2hFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRydWUpLnN1YnNjcmliZShmb2N1c09yaWdpbiA9PiB7XG4gICAgICBpZiAoIWZvY3VzT3JpZ2luKSB7XG4gICAgICAgIC8vIFdoZW4gYSBmb2N1c2VkIGVsZW1lbnQgYmVjb21lcyBkaXNhYmxlZCwgdGhlIGJyb3dzZXIgKmltbWVkaWF0ZWx5KiBmaXJlcyBhIGJsdXIgZXZlbnQuXG4gICAgICAgIC8vIEFuZ3VsYXIgZG9lcyBub3QgZXhwZWN0IGV2ZW50cyB0byBiZSByYWlzZWQgZHVyaW5nIGNoYW5nZSBkZXRlY3Rpb24sIHNvIGFueSBzdGF0ZSBjaGFuZ2VcbiAgICAgICAgLy8gKHN1Y2ggYXMgYSBmb3JtIGNvbnRyb2wncyAnbmctdG91Y2hlZCcpIHdpbGwgY2F1c2UgYSBjaGFuZ2VkLWFmdGVyLWNoZWNrZWQgZXJyb3IuXG4gICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xNzc5My4gVG8gd29yayBhcm91bmQgdGhpcywgd2UgZGVmZXJcbiAgICAgICAgLy8gdGVsbGluZyB0aGUgZm9ybSBjb250cm9sIGl0IGhhcyBiZWVuIHRvdWNoZWQgdW50aWwgdGhlIG5leHQgdGljay5cbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLm9uVG91Y2hlZCgpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZm9jdXNNb25pdG9yLnN0b3BNb25pdG9yaW5nKHRoaXMuc3dpdGNoRWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrZWQgPSB2YWx1ZTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBib29sZWFuKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5uekRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxufVxuIl19
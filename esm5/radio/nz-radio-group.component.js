import { __decorate, __metadata, __read, __spread } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, forwardRef, Input, QueryList, Renderer2, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { merge, Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
import { InputBoolean, isNotNil } from 'ng-zorro-antd/core';
import { NzRadioComponent } from './nz-radio.component';
import * as i0 from "@angular/core";
var _c0 = ["*"];
var NzRadioGroupComponent = /** @class */ (function () {
    function NzRadioGroupComponent(cdr, renderer, elementRef) {
        this.cdr = cdr;
        this.destroy$ = new Subject();
        this.onChange = function () { return null; };
        this.onTouched = function () { return null; };
        this.nzButtonStyle = 'outline';
        this.nzSize = 'default';
        renderer.addClass(elementRef.nativeElement, 'ant-radio-group');
    }
    NzRadioGroupComponent.prototype.updateChildrenStatus = function () {
        var _this = this;
        if (this.radios) {
            Promise.resolve().then(function () {
                _this.radios.forEach(function (radio) {
                    radio.checked = radio.nzValue === _this.value;
                    if (isNotNil(_this.nzDisabled)) {
                        radio.nzDisabled = _this.nzDisabled;
                    }
                    if (_this.nzName) {
                        radio.name = _this.nzName;
                    }
                    radio.markForCheck();
                });
            });
        }
    };
    NzRadioGroupComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.radios.changes.pipe(startWith(null), takeUntil(this.destroy$)).subscribe(function () {
            _this.updateChildrenStatus();
            if (_this.selectSubscription) {
                _this.selectSubscription.unsubscribe();
            }
            _this.selectSubscription = merge.apply(void 0, __spread(_this.radios.map(function (radio) { return radio.select$; }))).pipe(takeUntil(_this.destroy$))
                .subscribe(function (radio) {
                if (_this.value !== radio.nzValue) {
                    _this.value = radio.nzValue;
                    _this.updateChildrenStatus();
                    _this.onChange(_this.value);
                }
            });
            if (_this.touchedSubscription) {
                _this.touchedSubscription.unsubscribe();
            }
            _this.touchedSubscription = merge.apply(void 0, __spread(_this.radios.map(function (radio) { return radio.touched$; }))).pipe(takeUntil(_this.destroy$))
                .subscribe(function () {
                Promise.resolve().then(function () { return _this.onTouched(); });
            });
        });
    };
    NzRadioGroupComponent.prototype.ngOnChanges = function (changes) {
        if (changes.nzDisabled || changes.nzName) {
            this.updateChildrenStatus();
        }
    };
    NzRadioGroupComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /* tslint:disable-next-line:no-any */
    NzRadioGroupComponent.prototype.writeValue = function (value) {
        this.value = value;
        this.updateChildrenStatus();
        this.cdr.markForCheck();
    };
    NzRadioGroupComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    NzRadioGroupComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    NzRadioGroupComponent.prototype.setDisabledState = function (isDisabled) {
        this.nzDisabled = isDisabled;
        this.cdr.markForCheck();
    };
    /** @nocollapse */ NzRadioGroupComponent.ɵfac = function NzRadioGroupComponent_Factory(t) { return new (t || NzRadioGroupComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    /** @nocollapse */ NzRadioGroupComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzRadioGroupComponent, selectors: [["nz-radio-group"]], contentQueries: function NzRadioGroupComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, NzRadioComponent, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.radios = _t);
        } }, hostBindings: function NzRadioGroupComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            i0.ɵɵallocHostVars(3);
        } if (rf & 2) {
            i0.ɵɵclassProp("ant-radio-group-large", ctx.nzSize === "large")("ant-radio-group-small", ctx.nzSize === "small")("ant-radio-group-solid", ctx.nzButtonStyle === "solid");
        } }, inputs: { nzDisabled: "nzDisabled", nzButtonStyle: "nzButtonStyle", nzSize: "nzSize", nzName: "nzName" }, exportAs: ["nzRadioGroup"], features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef((function () { return NzRadioGroupComponent; })),
                    multi: true
                }
            ]), i0.ɵɵNgOnChangesFeature()], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzRadioGroupComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzRadioGroupComponent.prototype, "nzDisabled", void 0);
    return NzRadioGroupComponent;
}());
export { NzRadioGroupComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzRadioGroupComponent, [{
        type: Component,
        args: [{
                selector: 'nz-radio-group',
                exportAs: 'nzRadioGroup',
                preserveWhitespaces: false,
                templateUrl: './nz-radio-group.component.html',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((function () { return NzRadioGroupComponent; })),
                        multi: true
                    }
                ],
                host: {
                    '[class.ant-radio-group-large]': "nzSize === 'large'",
                    '[class.ant-radio-group-small]': "nzSize === 'small'",
                    '[class.ant-radio-group-solid]': "nzButtonStyle === 'solid'"
                }
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { radios: [{
            type: ContentChildren,
            args: [forwardRef(function () { return NzRadioComponent; }),
                { descendants: true }]
        }], nzDisabled: [{
            type: Input
        }], nzButtonStyle: [{
            type: Input
        }], nzSize: [{
            type: Input
        }], nzName: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmFkaW8tZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9yYWRpby8iLCJzb3VyY2VzIjpbIm56LXJhZGlvLWdyb3VwLmNvbXBvbmVudC50cyIsIm56LXJhZGlvLWdyb3VwLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFDVixVQUFVLEVBQ1YsS0FBSyxFQUdMLFNBQVMsRUFDVCxTQUFTLEVBRVQsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBaUIsTUFBTSxvQkFBb0IsQ0FBQztBQUUzRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBSXhEO0lBdURFLCtCQUFvQixHQUFzQixFQUFFLFFBQW1CLEVBQUUsVUFBc0I7UUFBbkUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFoQ2xDLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBR2pDLGFBQVEsR0FBd0IsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLENBQUM7UUFDM0MsY0FBUyxHQUFlLGNBQU0sT0FBQSxJQUFJLEVBQUosQ0FBSSxDQUFDO1FBTzFCLGtCQUFhLEdBQXVCLFNBQVMsQ0FBQztRQUM5QyxXQUFNLEdBQWtCLFNBQVMsQ0FBQztRQXFCekMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFF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QUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVSxFQUFDLGNBQU0sT0FBQSxxQkFBcUIsRUFBckIsQ0FBcUIsRUFBQzt3QkFDcEQsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7Z0JBQ0QsSUFBSSxFQUFFO29CQUNKLCtCQUErQixFQUFFLG9CQUFvQjtvQkFDckQsK0JBQStCLEVBQUUsb0JBQW9CO29CQUNyRCwrQkFBK0IsRUFBRSwyQkFBMkI7aUJBQzdEO2FBQ0Y7O2tCQVNFLGVBQWU7bUJBQ2QsVUFBVSxDQUFDLGNBQU0sT0FBQSxnQkFBZ0IsRUFBaEIsQ0FBZ0IsQ0FBQztnQkFDbEMsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFOztrQkFHdEIsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgRWxlbWVudFJlZixcclxuICBmb3J3YXJkUmVmLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgbWVyZ2UsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBzdGFydFdpdGgsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgaXNOb3ROaWwsIE56U2l6ZUxEU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpSYWRpb0NvbXBvbmVudCB9IGZyb20gJy4vbnotcmFkaW8uY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCB0eXBlIE56UmFkaW9CdXR0b25TdHlsZSA9ICdvdXRsaW5lJyB8ICdzb2xpZCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LXJhZGlvLWdyb3VwJyxcclxuICBleHBvcnRBczogJ256UmFkaW9Hcm91cCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXJhZGlvLWdyb3VwLmNvbXBvbmVudC5odG1sJyxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnpSYWRpb0dyb3VwQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LXJhZGlvLWdyb3VwLWxhcmdlXSc6IGBuelNpemUgPT09ICdsYXJnZSdgLFxyXG4gICAgJ1tjbGFzcy5hbnQtcmFkaW8tZ3JvdXAtc21hbGxdJzogYG56U2l6ZSA9PT0gJ3NtYWxsJ2AsXHJcbiAgICAnW2NsYXNzLmFudC1yYWRpby1ncm91cC1zb2xpZF0nOiBgbnpCdXR0b25TdHlsZSA9PT0gJ3NvbGlkJ2BcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelJhZGlvR3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cclxuICBwcml2YXRlIHZhbHVlOiBhbnk7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHJpdmF0ZSBzZWxlY3RTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICBwcml2YXRlIHRvdWNoZWRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICBvbkNoYW5nZTogKF86IHN0cmluZykgPT4gdm9pZCA9ICgpID0+IG51bGw7XHJcbiAgb25Ub3VjaGVkOiAoKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcclxuICBAQ29udGVudENoaWxkcmVuKFxyXG4gICAgZm9yd2FyZFJlZigoKSA9PiBOelJhZGlvQ29tcG9uZW50KSxcclxuICAgIHsgZGVzY2VuZGFudHM6IHRydWUgfVxyXG4gIClcclxuICByYWRpb3M6IFF1ZXJ5TGlzdDxOelJhZGlvQ29tcG9uZW50PjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBuekJ1dHRvblN0eWxlOiBOelJhZGlvQnV0dG9uU3R5bGUgPSAnb3V0bGluZSc7XHJcbiAgQElucHV0KCkgbnpTaXplOiBOelNpemVMRFNUeXBlID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIG56TmFtZTogc3RyaW5nO1xyXG5cclxuICB1cGRhdGVDaGlsZHJlblN0YXR1cygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnJhZGlvcykge1xyXG4gICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLnJhZGlvcy5mb3JFYWNoKHJhZGlvID0+IHtcclxuICAgICAgICAgIHJhZGlvLmNoZWNrZWQgPSByYWRpby5uelZhbHVlID09PSB0aGlzLnZhbHVlO1xyXG4gICAgICAgICAgaWYgKGlzTm90TmlsKHRoaXMubnpEaXNhYmxlZCkpIHtcclxuICAgICAgICAgICAgcmFkaW8ubnpEaXNhYmxlZCA9IHRoaXMubnpEaXNhYmxlZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICh0aGlzLm56TmFtZSkge1xyXG4gICAgICAgICAgICByYWRpby5uYW1lID0gdGhpcy5uek5hbWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByYWRpby5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1yYWRpby1ncm91cCcpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5yYWRpb3MuY2hhbmdlcy5waXBlKHN0YXJ0V2l0aChudWxsKSwgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuU3RhdHVzKCk7XHJcbiAgICAgIGlmICh0aGlzLnNlbGVjdFN1YnNjcmlwdGlvbikge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZWxlY3RTdWJzY3JpcHRpb24gPSBtZXJnZSguLi50aGlzLnJhZGlvcy5tYXAocmFkaW8gPT4gcmFkaW8uc2VsZWN0JCkpXHJcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAgIC5zdWJzY3JpYmUocmFkaW8gPT4ge1xyXG4gICAgICAgICAgaWYgKHRoaXMudmFsdWUgIT09IHJhZGlvLm56VmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHJhZGlvLm56VmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5TdGF0dXMoKTtcclxuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgaWYgKHRoaXMudG91Y2hlZFN1YnNjcmlwdGlvbikge1xyXG4gICAgICAgIHRoaXMudG91Y2hlZFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudG91Y2hlZFN1YnNjcmlwdGlvbiA9IG1lcmdlKC4uLnRoaXMucmFkaW9zLm1hcChyYWRpbyA9PiByYWRpby50b3VjaGVkJCkpXHJcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLm9uVG91Y2hlZCgpKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMubnpEaXNhYmxlZCB8fCBjaGFuZ2VzLm56TmFtZSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuU3RhdHVzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xyXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy51cGRhdGVDaGlsZHJlblN0YXR1cygpO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5uekRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxufVxyXG4iLCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiJdfQ==
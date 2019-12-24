import { __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { FocusMonitor } from '@angular/cdk/a11y';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, forwardRef, HostListener, Input, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { InputBoolean } from 'ng-zorro-antd/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/a11y";
const _c0 = ["inputElement"];
const _c1 = ["nz-radio", ""];
const _c2 = ["*"];
export class NzRadioComponent {
    /* tslint:disable-next-line:no-any */
    constructor(elementRef, renderer, cdr, focusMonitor) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.cdr = cdr;
        this.focusMonitor = focusMonitor;
        this.select$ = new Subject();
        this.touched$ = new Subject();
        this.checked = false;
        this.isNgModel = false;
        this.onChange = () => null;
        this.onTouched = () => null;
        this.nzDisabled = false;
        this.nzAutoFocus = false;
        this.renderer.addClass(elementRef.nativeElement, 'ant-radio-wrapper');
    }
    updateAutoFocus() {
        if (this.inputElement) {
            if (this.nzAutoFocus) {
                this.renderer.setAttribute(this.inputElement.nativeElement, 'autofocus', 'autofocus');
            }
            else {
                this.renderer.removeAttribute(this.inputElement.nativeElement, 'autofocus');
            }
        }
    }
    onClick(event) {
        // Prevent label click triggered twice.
        event.stopPropagation();
        event.preventDefault();
        if (!this.nzDisabled && !this.checked) {
            this.select$.next(this);
            if (this.isNgModel) {
                this.checked = true;
                this.onChange(true);
            }
        }
    }
    focus() {
        this.focusMonitor.focusVia(this.inputElement, 'keyboard');
    }
    blur() {
        this.inputElement.nativeElement.blur();
    }
    markForCheck() {
        this.cdr.markForCheck();
    }
    setDisabledState(isDisabled) {
        this.nzDisabled = isDisabled;
        this.cdr.markForCheck();
    }
    writeValue(value) {
        this.checked = value;
        this.cdr.markForCheck();
    }
    registerOnChange(fn) {
        this.isNgModel = true;
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    ngAfterViewInit() {
        this.focusMonitor.monitor(this.elementRef, true).subscribe(focusOrigin => {
            if (!focusOrigin) {
                Promise.resolve().then(() => this.onTouched());
                this.touched$.next();
            }
        });
        this.updateAutoFocus();
    }
    ngOnChanges(changes) {
        if (changes.nzAutoFocus) {
            this.updateAutoFocus();
        }
    }
    ngOnDestroy() {
        this.focusMonitor.stopMonitoring(this.elementRef);
    }
}
/** @nocollapse */ NzRadioComponent.ɵfac = function NzRadioComponent_Factory(t) { return new (t || NzRadioComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.FocusMonitor)); };
/** @nocollapse */ NzRadioComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzRadioComponent, selectors: [["", "nz-radio", ""]], viewQuery: function NzRadioComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
    } }, hostBindings: function NzRadioComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        i0.ɵɵallocHostVars(2);
        i0.ɵɵlistener("click", function NzRadioComponent_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } if (rf & 2) {
        i0.ɵɵclassProp("ant-radio-wrapper-checked", ctx.checked)("ant-radio-wrapper-disabled", ctx.nzDisabled);
    } }, inputs: { nzValue: "nzValue", nzDisabled: "nzDisabled", nzAutoFocus: "nzAutoFocus" }, exportAs: ["nzRadio"], features: [i0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef((() => NzRadioComponent)),
                multi: true
            }
        ]), i0.ɵɵNgOnChangesFeature()], attrs: _c1, ngContentSelectors: _c2, decls: 6, vars: 5, consts: [[1, "ant-radio"], ["type", "radio", 1, "ant-radio-input", 3, "disabled", "checked"], ["inputElement", ""], [1, "ant-radio-inner"]], template: function NzRadioComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "span", 0);
        i0.ɵɵelement(1, "input", 1, 2);
        i0.ɵɵelement(3, "span", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "span");
        i0.ɵɵprojection(5);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassProp("ant-radio-checked", ctx.checked)("ant-radio-disabled", ctx.nzDisabled);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("disabled", ctx.nzDisabled)("checked", ctx.checked);
        i0.ɵɵattribute("name", ctx.name);
    } }, encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzRadioComponent.prototype, "nzDisabled", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzRadioComponent.prototype, "nzAutoFocus", void 0);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzRadioComponent, [{
        type: Component,
        args: [{
                selector: '[nz-radio]',
                exportAs: 'nzRadio',
                preserveWhitespaces: false,
                templateUrl: './nz-radio.component.html',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((() => NzRadioComponent)),
                        multi: true
                    }
                ],
                host: {
                    '[class.ant-radio-wrapper-checked]': 'checked',
                    '[class.ant-radio-wrapper-disabled]': 'nzDisabled'
                }
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }, { type: i1.FocusMonitor }]; }, { inputElement: [{
            type: ViewChild,
            args: ['inputElement', { static: false }]
        }], nzValue: [{
            type: Input
        }], nzDisabled: [{
            type: Input
        }], nzAutoFocus: [{
            type: Input
        }], onClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9yYWRpby8iLCJzb3VyY2VzIjpbIm56LXJhZGlvLmNvbXBvbmVudC50cyIsIm56LXJhZGlvLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFHTCxTQUFTLEVBRVQsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7OztBQXFCbEQsTUFBTSxPQUFPLGdCQUFnQjtJQWtEM0IscUNBQXFDO0lBQ3JDLFlBQ1UsVUFBc0IsRUFDdEIsUUFBbUIsRUFDbkIsR0FBc0IsRUFDdEIsWUFBMEI7UUFIMUIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBdERwQyxZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQW9CLENBQUM7UUFDMUMsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFDL0IsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUVoQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGFBQVEsR0FBeUIsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDO1FBQzVDLGNBQVMsR0FBZSxHQUFHLEVBQUUsQ0FBQyxJ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OztrQkFFM0MsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBWUwsWUFBWTttQkFBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEZvY3VzTW9uaXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcclxuaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnW256LXJhZGlvXScsXHJcbiAgZXhwb3J0QXM6ICduelJhZGlvJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotcmFkaW8uY29tcG9uZW50Lmh0bWwnLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOelJhZGlvQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LXJhZGlvLXdyYXBwZXItY2hlY2tlZF0nOiAnY2hlY2tlZCcsXHJcbiAgICAnW2NsYXNzLmFudC1yYWRpby13cmFwcGVyLWRpc2FibGVkXSc6ICduekRpc2FibGVkJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56UmFkaW9Db21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIHNlbGVjdCQgPSBuZXcgU3ViamVjdDxOelJhZGlvQ29tcG9uZW50PigpO1xyXG4gIHRvdWNoZWQkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBjaGVja2VkID0gZmFsc2U7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGlzTmdNb2RlbCA9IGZhbHNlO1xyXG4gIG9uQ2hhbmdlOiAoXzogYm9vbGVhbikgPT4gdm9pZCA9ICgpID0+IG51bGw7XHJcbiAgb25Ub3VjaGVkOiAoKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcclxuICBAVmlld0NoaWxkKCdpbnB1dEVsZW1lbnQnLCB7IHN0YXRpYzogZmFsc2UgfSkgaW5wdXRFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cclxuICBASW5wdXQoKSBuelZhbHVlOiBhbnk7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpBdXRvRm9jdXMgPSBmYWxzZTtcclxuXHJcbiAgdXBkYXRlQXV0b0ZvY3VzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50KSB7XHJcbiAgICAgIGlmICh0aGlzLm56QXV0b0ZvY3VzKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2F1dG9mb2N1cycsICdhdXRvZm9jdXMnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnYXV0b2ZvY3VzJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcclxuICBvbkNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICAvLyBQcmV2ZW50IGxhYmVsIGNsaWNrIHRyaWdnZXJlZCB0d2ljZS5cclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICghdGhpcy5uekRpc2FibGVkICYmICF0aGlzLmNoZWNrZWQpIHtcclxuICAgICAgdGhpcy5zZWxlY3QkLm5leHQodGhpcyk7XHJcbiAgICAgIGlmICh0aGlzLmlzTmdNb2RlbCkge1xyXG4gICAgICAgIHRoaXMuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZSh0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9jdXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmZvY3VzTW9uaXRvci5mb2N1c1ZpYSh0aGlzLmlucHV0RWxlbWVudCwgJ2tleWJvYXJkJyk7XHJcbiAgfVxyXG5cclxuICBibHVyKCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5ibHVyKCk7XHJcbiAgfVxyXG5cclxuICBtYXJrRm9yQ2hlY2soKTogdm9pZCB7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgZm9jdXNNb25pdG9yOiBGb2N1c01vbml0b3JcclxuICApIHtcclxuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LXJhZGlvLXdyYXBwZXInKTtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5uekRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5jaGVja2VkID0gdmFsdWU7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBib29sZWFuKSA9PiB7fSk6IHZvaWQge1xyXG4gICAgdGhpcy5pc05nTW9kZWwgPSB0cnVlO1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5mb2N1c01vbml0b3IubW9uaXRvcih0aGlzLmVsZW1lbnRSZWYsIHRydWUpLnN1YnNjcmliZShmb2N1c09yaWdpbiA9PiB7XHJcbiAgICAgIGlmICghZm9jdXNPcmlnaW4pIHtcclxuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMub25Ub3VjaGVkKCkpO1xyXG4gICAgICAgIHRoaXMudG91Y2hlZCQubmV4dCgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMudXBkYXRlQXV0b0ZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5uekF1dG9Gb2N1cykge1xyXG4gICAgICB0aGlzLnVwZGF0ZUF1dG9Gb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmZvY3VzTW9uaXRvci5zdG9wTW9uaXRvcmluZyh0aGlzLmVsZW1lbnRSZWYpO1xyXG4gIH1cclxufVxyXG4iLCI8c3BhbiBjbGFzcz1cImFudC1yYWRpb1wiIFtjbGFzcy5hbnQtcmFkaW8tY2hlY2tlZF09XCJjaGVja2VkXCIgW2NsYXNzLmFudC1yYWRpby1kaXNhYmxlZF09XCJuekRpc2FibGVkXCI+XHJcbiAgPGlucHV0XHJcbiAgICAjaW5wdXRFbGVtZW50XHJcbiAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgY2xhc3M9XCJhbnQtcmFkaW8taW5wdXRcIlxyXG4gICAgW2Rpc2FibGVkXT1cIm56RGlzYWJsZWRcIlxyXG4gICAgW2NoZWNrZWRdPVwiY2hlY2tlZFwiXHJcbiAgICBbYXR0ci5uYW1lXT1cIm5hbWVcIlxyXG4gIC8+XHJcbiAgPHNwYW4gY2xhc3M9XCJhbnQtcmFkaW8taW5uZXJcIj48L3NwYW4+XHJcbjwvc3Bhbj5cclxuPHNwYW4+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50Pjwvc3Bhbj5cclxuIl19
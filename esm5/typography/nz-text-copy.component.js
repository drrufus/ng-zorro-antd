/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { NzCopyToClipboardService } from 'ng-zorro-antd/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
import * as i2 from "ng-zorro-antd/i18n";
import * as i3 from "ng-zorro-antd/tooltip";
import * as i4 from "ng-zorro-antd/icon";
var NzTextCopyComponent = /** @class */ (function () {
    function NzTextCopyComponent(host, cdr, copyToClipboard, i18n) {
        this.host = host;
        this.cdr = cdr;
        this.copyToClipboard = copyToClipboard;
        this.i18n = i18n;
        this.copied = false;
        // tslint:disable-next-line:no-any
        this.locale = {};
        this.nativeElement = this.host.nativeElement;
        this.destroy$ = new Subject();
        this.textCopy = new EventEmitter();
    }
    NzTextCopyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(function () {
            _this.locale = _this.i18n.getLocaleData('Text');
            _this.cdr.markForCheck();
        });
    };
    NzTextCopyComponent.prototype.ngOnDestroy = function () {
        clearTimeout(this.copyId);
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzTextCopyComponent.prototype.onClick = function () {
        var _this = this;
        if (this.copied) {
            return;
        }
        this.copied = true;
        this.cdr.detectChanges();
        var text = this.text;
        this.textCopy.emit(text);
        this.copyToClipboard
            .copy(text)
            .then(function () { return _this.onCopied(); })
            .catch(function () { return _this.onCopied(); });
    };
    NzTextCopyComponent.prototype.onCopied = function () {
        var _this = this;
        clearTimeout(this.copyId);
        this.copyId = setTimeout(function () {
            _this.copied = false;
            _this.cdr.detectChanges();
        }, 3000);
    };
    /** @nocollapse */ NzTextCopyComponent.ɵfac = function NzTextCopyComponent_Factory(t) { return new (t || NzTextCopyComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.NzCopyToClipboardService), i0.ɵɵdirectiveInject(i2.NzI18nService)); };
    /** @nocollapse */ NzTextCopyComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzTextCopyComponent, selectors: [["nz-text-copy"]], inputs: { text: "text" }, outputs: { textCopy: "textCopy" }, exportAs: ["nzTextCopy"], decls: 2, vars: 3, consts: [["nz-tooltip", "", "nz-trans-button", "", 1, "ant-typography-copy", 3, "nzTitle", "click"], ["nz-icon", "", 3, "nzType"]], template: function NzTextCopyComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function NzTextCopyComponent_Template_button_click_0_listener($event) { return ctx.onClick(); });
            i0.ɵɵelement(1, "i", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassProp("ant-typography-copy-success", ctx.copied);
            i0.ɵɵproperty("nzTitle", ctx.copied ? ctx.locale == null ? null : ctx.locale.copied : ctx.locale == null ? null : ctx.locale.copy);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzType", ctx.copied ? "check" : "copy");
        } }, directives: [i1.NzTransButtonDirective, i3.NzTooltipDirective, i4.NzIconDirective], encapsulation: 2, changeDetection: 0 });
    return NzTextCopyComponent;
}());
export { NzTextCopyComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzTextCopyComponent, [{
        type: Component,
        args: [{
                selector: 'nz-text-copy',
                exportAs: 'nzTextCopy',
                templateUrl: './nz-text-copy.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i1.NzCopyToClipboardService }, { type: i2.NzI18nService }]; }, { text: [{
            type: Input
        }], textCopy: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGV4dC1jb3B5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdHlwb2dyYXBoeS8iLCJzb3VyY2VzIjpbIm56LXRleHQtY29weS5jb21wb25lbnQudHMiLCJuei10ZXh0LWNvcHkuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7QUFFM0M7SUFtQkUsNkJBQ1UsSUFBZ0IsRUFDaEIsR0FBc0IsRUFDdEIsZUFBeUMsRUFDekMsSUFBbUI7UUFIbkIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixvQkFBZSxHQUFmLGVBQWUsQ0FBMEI7UUFDekMsU0FBSSxHQUFKLElBQUksQ0FBZTtRQWQ3QixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBRWYsa0NBQWtDO1FBQ2xDLFdBQU0sR0FBUSxFQUFFLENBQUM7UUFDakIsa0JBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUNoQyxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUdkLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBT3RELENBQUM7SUFFSixzQ0FBUSxHQUFSO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUM5RCxLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzlDLEtBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQseUNBQVcsR0FBWDtRQUNFLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxxQ0FBTyxHQUFQO1FBQUEsaUJBWUM7UUFYQyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLGVBQWU7YUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNWLElBQUksQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFFBQVEsRUFBRSxFQUFmLENBQWUsQ0FBQzthQUMzQixLQUFLLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxRQUFRLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsc0NBQVEsR0FBUjtRQUFBLGlCQU1DO1FBTEMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQztZQUN2QixLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixLQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzNCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNYLENBQUM7MEZBbkRVLG1CQUFtQjs0REFBbkIsbUJBQW1CO1lDbENoQyxpQ0FRRTtZQUZBLHNHQUFTLGFBQVMsSUFBQztZQUVuQix1QkFBb0Q7WUFDdEQsaUJBQVM7O1lBSlAseURBQTRDO1lBRjVDLGtJQUFrRDtZQUt2QyxlQUFvQztZQUFwQyxzREFBb0M7OzhCRFJqRDtDQXNGQyxBQTVERCxJQTREQztTQXBEWSxtQkFBbUI7a0RBQW5CLG1CQUFtQjtjQVIvQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRSxZQUFZO2dCQUN0QixXQUFXLEVBQUUsK0JBQStCO2dCQUM1QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLG1CQUFtQixFQUFFLEtBQUs7YUFDM0I7O2tCQVNFLEtBQUs7O2tCQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOekNvcHlUb0NsaXBib2FyZFNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LXRleHQtY29weScsXHJcbiAgZXhwb3J0QXM6ICduelRleHRDb3B5JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotdGV4dC1jb3B5LmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelRleHRDb3B5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIGNvcGllZCA9IGZhbHNlO1xyXG4gIGNvcHlJZDogbnVtYmVyO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBsb2NhbGU6IGFueSA9IHt9O1xyXG4gIG5hdGl2ZUVsZW1lbnQgPSB0aGlzLmhvc3QubmF0aXZlRWxlbWVudDtcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgQElucHV0KCkgdGV4dDogc3RyaW5nO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSB0ZXh0Q29weSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgaG9zdDogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgY29weVRvQ2xpcGJvYXJkOiBOekNvcHlUb0NsaXBib2FyZFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YSgnVGV4dCcpO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBjbGVhclRpbWVvdXQodGhpcy5jb3B5SWQpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuY29waWVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuY29waWVkID0gdHJ1ZTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIGNvbnN0IHRleHQgPSB0aGlzLnRleHQ7XHJcbiAgICB0aGlzLnRleHRDb3B5LmVtaXQodGV4dCk7XHJcbiAgICB0aGlzLmNvcHlUb0NsaXBib2FyZFxyXG4gICAgICAuY29weSh0ZXh0KVxyXG4gICAgICAudGhlbigoKSA9PiB0aGlzLm9uQ29waWVkKCkpXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLm9uQ29waWVkKCkpO1xyXG4gIH1cclxuXHJcbiAgb25Db3BpZWQoKTogdm9pZCB7XHJcbiAgICBjbGVhclRpbWVvdXQodGhpcy5jb3B5SWQpO1xyXG4gICAgdGhpcy5jb3B5SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5jb3BpZWQgPSBmYWxzZTtcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfSwgMzAwMCk7XHJcbiAgfVxyXG59XHJcbiIsIjxidXR0b25cclxuICBuei10b29sdGlwXHJcbiAgbnotdHJhbnMtYnV0dG9uXHJcbiAgW256VGl0bGVdPVwiY29waWVkID8gbG9jYWxlPy5jb3BpZWQgOiBsb2NhbGU/LmNvcHlcIlxyXG4gIGNsYXNzPVwiYW50LXR5cG9ncmFwaHktY29weVwiXHJcbiAgW2NsYXNzLmFudC10eXBvZ3JhcGh5LWNvcHktc3VjY2Vzc109XCJjb3BpZWRcIlxyXG4gIChjbGljayk9XCJvbkNsaWNrKClcIlxyXG4+XHJcbiAgPGkgbnotaWNvbiBbbnpUeXBlXT1cImNvcGllZCA/ICdjaGVjaycgOiAnY29weSdcIj48L2k+XHJcbjwvYnV0dG9uPlxyXG4iXX0=
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewEncapsulation } from '@angular/core';
import { fadeMotion, InputBoolean, NzUpdateHostClassService, warnDeprecation } from 'ng-zorro-antd/core';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/icon";
function NzTagComponent_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r864 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 1);
    i0.ɵɵlistener("click", function NzTagComponent_i_1_Template_i_click_0_listener($event) { i0.ɵɵrestoreView(_r864); const ctx_r863 = i0.ɵɵnextContext(); return ctx_r863.closeTag($event); });
    i0.ɵɵelementEnd();
} }
const _c0 = ["*"];
export class NzTagComponent {
    constructor(renderer, elementRef, nzUpdateHostClassService) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.presetColor = false;
        this.nzMode = 'default';
        this.nzChecked = false;
        this.nzNoAnimation = false;
        this.nzAfterClose = new EventEmitter();
        this.nzOnClose = new EventEmitter();
        this.nzCheckedChange = new EventEmitter();
    }
    isPresetColor(color) {
        if (!color) {
            return false;
        }
        return /^(pink|red|yellow|orange|cyan|green|blue|purple|geekblue|magenta|volcano|gold|lime)(-inverse)?$/.test(color);
    }
    updateClassMap() {
        this.presetColor = this.isPresetColor(this.nzColor);
        const prefix = 'ant-tag';
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, {
            [`${prefix}`]: true,
            [`${prefix}-has-color`]: this.nzColor && !this.presetColor,
            [`${prefix}-${this.nzColor}`]: this.presetColor,
            [`${prefix}-checkable`]: this.nzMode === 'checkable',
            [`${prefix}-checkable-checked`]: this.nzChecked
        });
    }
    updateCheckedStatus() {
        if (this.nzMode === 'checkable') {
            this.nzChecked = !this.nzChecked;
            this.nzCheckedChange.emit(this.nzChecked);
            this.updateClassMap();
        }
    }
    closeTag(e) {
        this.nzOnClose.emit(e);
        if (!e.defaultPrevented) {
            this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
        }
    }
    afterAnimation(e) {
        if (e.toState === 'void') {
            this.nzAfterClose.emit();
            if (this.nzAfterClose.observers.length) {
                warnDeprecation(`'(nzAfterClose)' Output is going to be removed in 9.0.0. Please use '(nzOnClose)' instead.`);
            }
        }
    }
    ngOnInit() {
        this.updateClassMap();
    }
    ngOnChanges() {
        this.updateClassMap();
    }
}
/** @nocollapse */ NzTagComponent.ɵfac = function NzTagComponent_Factory(t) { return new (t || NzTagComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.NzUpdateHostClassService)); };
/** @nocollapse */ NzTagComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzTagComponent, selectors: [["nz-tag"]], hostBindings: function NzTagComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        i0.ɵɵallocHostVars(3);
        i0.ɵɵcomponentHostSyntheticListener("@fadeMotion.done", function NzTagComponent_animation_fadeMotion_done_HostBindingHandler($event) { return ctx.afterAnimation($event); });
        i0.ɵɵlistener("click", function NzTagComponent_click_HostBindingHandler($event) { return ctx.updateCheckedStatus(); });
    } if (rf & 2) {
        i0.ɵɵupdateSyntheticHostBinding("@fadeMotion", undefined)("@.disabled", ctx.nzNoAnimation);
        i0.ɵɵstyleProp("background-color", ctx.presetColor ? null : ctx.nzColor);
    } }, inputs: { nzMode: "nzMode", nzColor: "nzColor", nzChecked: "nzChecked", nzNoAnimation: "nzNoAnimation" }, outputs: { nzAfterClose: "nzAfterClose", nzOnClose: "nzOnClose", nzCheckedChange: "nzCheckedChange" }, exportAs: ["nzTag"], features: [i0.ɵɵProvidersFeature([NzUpdateHostClassService]), i0.ɵɵNgOnChangesFeature()], ngContentSelectors: _c0, decls: 2, vars: 1, consts: [["nz-icon", "", "nzType", "close", "tabindex", "-1", 3, "click", 4, "ngIf"], ["nz-icon", "", "nzType", "close", "tabindex", "-1", 3, "click"]], template: function NzTagComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
        i0.ɵɵtemplate(1, NzTagComponent_i_1_Template, 1, 0, "i", 0);
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.nzMode === "closeable");
    } }, directives: [i2.NgIf, i3.NzIconDirective], encapsulation: 2, data: { animation: [fadeMotion] }, changeDetection: 0 });
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTagComponent.prototype, "nzChecked", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTagComponent.prototype, "nzNoAnimation", void 0);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzTagComponent, [{
        type: Component,
        args: [{
                selector: 'nz-tag',
                exportAs: 'nzTag',
                preserveWhitespaces: false,
                providers: [NzUpdateHostClassService],
                animations: [fadeMotion],
                templateUrl: './nz-tag.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[@fadeMotion]': '',
                    '[@.disabled]': 'nzNoAnimation',
                    '(@fadeMotion.done)': 'afterAnimation($event)',
                    '(click)': 'updateCheckedStatus()',
                    '[style.background-color]': 'presetColor? null : nzColor'
                }
            }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i1.NzUpdateHostClassService }]; }, { nzMode: [{
            type: Input
        }], nzColor: [{
            type: Input
        }], nzChecked: [{
            type: Input
        }], nzNoAnimation: [{
            type: Input
        }], nzAfterClose: [{
            type: Output
        }], nzOnClose: [{
            type: Output
        }], nzCheckedChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdGFnLyIsInNvdXJjZXMiOlsibnotdGFnLmNvbXBvbmVudC50cyIsIm56LXRhZy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBU0EsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsd0JBQXdCLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7SUNyQnpHLDRCQU1LO0lBREgsMkxBQTBCO0lBQzNCLGlCQUFJOzs7QURrQ0wsTUFBTSxPQUFPLGNBQWM7SUFxRHpCLFlBQW9CLFFBQW1CLEVBQVUsVUFBc0IsRUFBVSx3QkFBa0Q7UUFBL0csYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBcERuSSxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNYLFdBQU0sR0FBMEMsU0FBUyxDQUFDO1FBRTFDLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDNUIsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQ3hDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBQzNDLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQTZDcUUsQ0FBQztJQTNDL0gsYUFBYSxDQUFDLEtBQWM7UUFDbEMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLGlHQUFpRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2SCxD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LG9CQUFvQixFQUFFLHdCQUF3QjtvQkFDOUMsU0FBUyxFQUFFLHVCQUF1QjtvQkFDbEMsMEJBQTBCLEVBQUUsNkJBQTZCO2lCQUMxRDthQUNGOztrQkFHRSxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBBbmltYXRpb25FdmVudCB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGZhZGVNb3Rpb24sIElucHV0Qm9vbGVhbiwgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLCB3YXJuRGVwcmVjYXRpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei10YWcnLFxyXG4gIGV4cG9ydEFzOiAnbnpUYWcnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHByb3ZpZGVyczogW056VXBkYXRlSG9zdENsYXNzU2VydmljZV0sXHJcbiAgYW5pbWF0aW9uczogW2ZhZGVNb3Rpb25dLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei10YWcuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tAZmFkZU1vdGlvbl0nOiAnJyxcclxuICAgICdbQC5kaXNhYmxlZF0nOiAnbnpOb0FuaW1hdGlvbicsXHJcbiAgICAnKEBmYWRlTW90aW9uLmRvbmUpJzogJ2FmdGVyQW5pbWF0aW9uKCRldmVudCknLFxyXG4gICAgJyhjbGljayknOiAndXBkYXRlQ2hlY2tlZFN0YXR1cygpJyxcclxuICAgICdbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl0nOiAncHJlc2V0Q29sb3I/IG51bGwgOiBuekNvbG9yJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56VGFnQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIHByZXNldENvbG9yID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpNb2RlOiAnZGVmYXVsdCcgfCAnY2xvc2VhYmxlJyB8ICdjaGVja2FibGUnID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIG56Q29sb3I6IHN0cmluZztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDaGVja2VkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Tm9BbmltYXRpb24gPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpBZnRlckNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2hlY2tlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgcHJpdmF0ZSBpc1ByZXNldENvbG9yKGNvbG9yPzogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIWNvbG9yKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiAvXihwaW5rfHJlZHx5ZWxsb3d8b3JhbmdlfGN5YW58Z3JlZW58Ymx1ZXxwdXJwbGV8Z2Vla2JsdWV8bWFnZW50YXx2b2xjYW5vfGdvbGR8bGltZSkoLWludmVyc2UpPyQvLnRlc3QoY29sb3IpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVDbGFzc01hcCgpOiB2b2lkIHtcclxuICAgIHRoaXMucHJlc2V0Q29sb3IgPSB0aGlzLmlzUHJlc2V0Q29sb3IodGhpcy5uekNvbG9yKTtcclxuICAgIGNvbnN0IHByZWZpeCA9ICdhbnQtdGFnJztcclxuICAgIHRoaXMubnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwge1xyXG4gICAgICBbYCR7cHJlZml4fWBdOiB0cnVlLFxyXG4gICAgICBbYCR7cHJlZml4fS1oYXMtY29sb3JgXTogdGhpcy5uekNvbG9yICYmICF0aGlzLnByZXNldENvbG9yLFxyXG4gICAgICBbYCR7cHJlZml4fS0ke3RoaXMubnpDb2xvcn1gXTogdGhpcy5wcmVzZXRDb2xvcixcclxuICAgICAgW2Ake3ByZWZpeH0tY2hlY2thYmxlYF06IHRoaXMubnpNb2RlID09PSAnY2hlY2thYmxlJyxcclxuICAgICAgW2Ake3ByZWZpeH0tY2hlY2thYmxlLWNoZWNrZWRgXTogdGhpcy5uekNoZWNrZWRcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ2hlY2tlZFN0YXR1cygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56TW9kZSA9PT0gJ2NoZWNrYWJsZScpIHtcclxuICAgICAgdGhpcy5uekNoZWNrZWQgPSAhdGhpcy5uekNoZWNrZWQ7XHJcbiAgICAgIHRoaXMubnpDaGVja2VkQ2hhbmdlLmVtaXQodGhpcy5uekNoZWNrZWQpO1xyXG4gICAgICB0aGlzLnVwZGF0ZUNsYXNzTWFwKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbG9zZVRhZyhlOiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLm56T25DbG9zZS5lbWl0KGUpO1xyXG4gICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLnJlbmRlcmVyLnBhcmVudE5vZGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZnRlckFuaW1hdGlvbihlOiBBbmltYXRpb25FdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKGUudG9TdGF0ZSA9PT0gJ3ZvaWQnKSB7XHJcbiAgICAgIHRoaXMubnpBZnRlckNsb3NlLmVtaXQoKTtcclxuICAgICAgaWYgKHRoaXMubnpBZnRlckNsb3NlLm9ic2VydmVycy5sZW5ndGgpIHtcclxuICAgICAgICB3YXJuRGVwcmVjYXRpb24oYCcobnpBZnRlckNsb3NlKScgT3V0cHV0IGlzIGdvaW5nIHRvIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFBsZWFzZSB1c2UgJyhuek9uQ2xvc2UpJyBpbnN0ZWFkLmApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZUNsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIHRoaXMudXBkYXRlQ2xhc3NNYXAoKTtcclxuICB9XHJcbn1cclxuIiwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48aVxyXG4gIG56LWljb25cclxuICBuelR5cGU9XCJjbG9zZVwiXHJcbiAgKm5nSWY9XCJuek1vZGUgPT09ICdjbG9zZWFibGUnXCJcclxuICB0YWJpbmRleD1cIi0xXCJcclxuICAoY2xpY2spPVwiY2xvc2VUYWcoJGV2ZW50KVwiXHJcbj48L2k+XHJcbiJdfQ==
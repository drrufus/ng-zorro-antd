/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Optional, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { NzConfigService, toCssPixel, warnDeprecation } from 'ng-zorro-antd/core';
import { NZ_MESSAGE_CONFIG, NZ_MESSAGE_DEFAULT_CONFIG } from './nz-message-config';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
function NzMessageContainerComponent_nz_message_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nz-message", 2);
} if (rf & 2) {
    const message_r601 = ctx.$implicit;
    const i_r602 = ctx.index;
    i0.ɵɵproperty("nzMessage", message_r601)("nzIndex", i_r602);
} }
const NZ_CONFIG_COMPONENT_NAME = 'message';
export class NzMessageContainerComponent {
    constructor(cdr, nzConfigService, defaultConfig, config) {
        this.cdr = cdr;
        this.nzConfigService = nzConfigService;
        this.messages = [];
        if (!!config) {
            warnDeprecation(`Injection token 'NZ_MESSAGE_CONFIG' is deprecated and will be removed in 9.0.0. Please use 'NzConfigService' instead.`);
        }
        this.setConfig(Object.assign(Object.assign({}, defaultConfig), config));
    }
    ngOnInit() {
        this.subscribeConfigChange();
    }
    setConfig(config) {
        this.config = this.mergeMessageConfig(config);
        this.top = toCssPixel(this.config.nzTop);
        this.cdr.markForCheck();
    }
    /**
     * Create a new message.
     * @param message Parsed message configuration.
     */
    createMessage(message) {
        if (this.messages.length >= this.config.nzMaxStack) {
            this.messages.splice(0, 1);
        }
        message.options = this._mergeMessageOptions(message.options);
        message.onClose = new Subject();
        this.messages.push(message);
        this.cdr.detectChanges();
    }
    /**
     * Remove a message by `messageId`.
     * @param messageId Id of the message to be removed.
     * @param userAction Whether this is closed by user interaction.
     */
    removeMessage(messageId, userAction = false) {
        this.messages.some((message, index) => {
            if (message.messageId === messageId) {
                this.messages.splice(index, 1);
                this.cdr.detectChanges();
                message.onClose.next(userAction);
                message.onClose.complete();
                return true;
            }
            return false;
        });
    }
    /**
     * Remove all messages.
     */
    removeMessageAll() {
        this.messages = [];
        this.cdr.detectChanges();
    }
    subscribeConfigChange() {
        this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME).subscribe(() => this.setConfig());
    }
    mergeMessageConfig(config) {
        return Object.assign(Object.assign(Object.assign({}, this.config), config), this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME));
    }
    /**
     * Merge default options and custom message options
     * @param options
     */
    _mergeMessageOptions(options) {
        const defaultOptions = {
            nzDuration: this.config.nzDuration,
            nzAnimate: this.config.nzAnimate,
            nzPauseOnHover: this.config.nzPauseOnHover
        };
        return Object.assign(Object.assign({}, defaultOptions), options);
    }
}
/** @nocollapse */ NzMessageContainerComponent.ɵfac = function NzMessageContainerComponent_Factory(t) { return new (t || NzMessageContainerComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.NzConfigService), i0.ɵɵdirectiveInject(NZ_MESSAGE_DEFAULT_CONFIG, 8), i0.ɵɵdirectiveInject(NZ_MESSAGE_CONFIG, 8)); };
/** @nocollapse */ NzMessageContainerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzMessageContainerComponent, selectors: [["nz-message-container"]], exportAs: ["nzMessageContainer"], decls: 2, vars: 2, consts: [[1, "ant-message"], [3, "nzMessage", "nzIndex", 4, "ngFor", "ngForOf"], [3, "nzMessage", "nzIndex"]], template: function NzMessageContainerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, NzMessageContainerComponent_nz_message_1_Template, 1, 2, "nz-message", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleProp("top", ctx.top);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.messages);
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzMessageContainerComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-message-container',
                exportAs: 'nzMessageContainer',
                preserveWhitespaces: false,
                templateUrl: './nz-message-container.component.html'
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.NzConfigService }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [NZ_MESSAGE_DEFAULT_CONFIG]
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [NZ_MESSAGE_CONFIG]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVzc2FnZS1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9tZXNzYWdlLyIsInNvdXJjZXMiOlsibnotbWVzc2FnZS1jb250YWluZXIuY29tcG9uZW50LnRzIiwibnotbWVzc2FnZS1jb250YWluZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQVUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25JLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0IsT0FBTyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLHlCQUF5QixFQUF5QixNQUFNLHFCQUFxQixDQUFDOzs7O0lDWnhHLGdDQUljOzs7O0lBRlosd0NBQXFCLG1CQUFBOztBRGF6QixNQUFNLHdCQUF3QixHQUFHLFNBQVMsQ0FBQztBQVUzQyxNQUFNLE9BQU8sMkJBQTJCO0lBS3RDLFlBQ1ksR0FBc0IsRUFDdEIsZUFBZ0MsRUFDSyxhQUFvQyxFQUM1QyxNQUE2QjtRQUgxRCxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFONUMsYUFBUSxHQUEwQixFQUFFLENBQUM7UUFVbkMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFO1lBQ1osZUFBZSxDQUNiLHVIQUF1SCxDQUN4SCxDQUFDO1NBQ0g7UUFDRCxJQUFJLENBQUMsU0FBUyxpQ0FBTSxhQUFhLEdBQUssTUFBTSxFQUFHLENBQUM7SUFDbEQsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQsU0FB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QUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLFdBQVcsRUFBRSx1Q0FBdUM7YUFDckQ7O3NCQVNJLFFBQVE7O3NCQUFJLE1BQU07dUJBQUMseUJBQXlCOztzQkFDNUMsUUFBUTs7c0JBQUksTUFBTTt1QkFBQyxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbmplY3QsIE9uSW5pdCwgT3B0aW9uYWwsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IE56Q29uZmlnU2VydmljZSwgdG9Dc3NQaXhlbCwgd2FybkRlcHJlY2F0aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IE5aX01FU1NBR0VfQ09ORklHLCBOWl9NRVNTQUdFX0RFRkFVTFRfQ09ORklHLCBOek1lc3NhZ2VDb25maWdMZWdhY3kgfSBmcm9tICcuL256LW1lc3NhZ2UtY29uZmlnJztcclxuaW1wb3J0IHsgTnpNZXNzYWdlRGF0YUZpbGxlZCwgTnpNZXNzYWdlRGF0YU9wdGlvbnMgfSBmcm9tICcuL256LW1lc3NhZ2UuZGVmaW5pdGlvbnMnO1xyXG5cclxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ21lc3NhZ2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzZWxlY3RvcjogJ256LW1lc3NhZ2UtY29udGFpbmVyJyxcclxuICBleHBvcnRBczogJ256TWVzc2FnZUNvbnRhaW5lcicsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LW1lc3NhZ2UtY29udGFpbmVyLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBtZXNzYWdlczogTnpNZXNzYWdlRGF0YUZpbGxlZFtdID0gW107XHJcbiAgY29uZmlnOiBSZXF1aXJlZDxOek1lc3NhZ2VDb25maWdMZWdhY3k+O1xyXG4gIHRvcDogc3RyaW5nIHwgbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcm90ZWN0ZWQgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByb3RlY3RlZCBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcclxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTlpfTUVTU0FHRV9ERUZBVUxUX0NPTkZJRykgZGVmYXVsdENvbmZpZzogTnpNZXNzYWdlQ29uZmlnTGVnYWN5LFxyXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChOWl9NRVNTQUdFX0NPTkZJRykgY29uZmlnOiBOek1lc3NhZ2VDb25maWdMZWdhY3lcclxuICApIHtcclxuICAgIGlmICghIWNvbmZpZykge1xyXG4gICAgICB3YXJuRGVwcmVjYXRpb24oXHJcbiAgICAgICAgYEluamVjdGlvbiB0b2tlbiAnTlpfTUVTU0FHRV9DT05GSUcnIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiA5LjAuMC4gUGxlYXNlIHVzZSAnTnpDb25maWdTZXJ2aWNlJyBpbnN0ZWFkLmBcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0Q29uZmlnKHsgLi4uZGVmYXVsdENvbmZpZywgLi4uY29uZmlnIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnN1YnNjcmliZUNvbmZpZ0NoYW5nZSgpO1xyXG4gIH1cclxuXHJcbiAgc2V0Q29uZmlnKGNvbmZpZz86IE56TWVzc2FnZUNvbmZpZ0xlZ2FjeSk6IHZvaWQge1xyXG4gICAgdGhpcy5jb25maWcgPSB0aGlzLm1lcmdlTWVzc2FnZUNvbmZpZyhjb25maWcpO1xyXG4gICAgdGhpcy50b3AgPSB0b0Nzc1BpeGVsKHRoaXMuY29uZmlnLm56VG9wKTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgbmV3IG1lc3NhZ2UuXHJcbiAgICogQHBhcmFtIG1lc3NhZ2UgUGFyc2VkIG1lc3NhZ2UgY29uZmlndXJhdGlvbi5cclxuICAgKi9cclxuICBjcmVhdGVNZXNzYWdlKG1lc3NhZ2U6IE56TWVzc2FnZURhdGFGaWxsZWQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm1lc3NhZ2VzLmxlbmd0aCA+PSB0aGlzLmNvbmZpZy5uek1heFN0YWNrKSB7XHJcbiAgICAgIHRoaXMubWVzc2FnZXMuc3BsaWNlKDAsIDEpO1xyXG4gICAgfVxyXG4gICAgbWVzc2FnZS5vcHRpb25zID0gdGhpcy5fbWVyZ2VNZXNzYWdlT3B0aW9ucyhtZXNzYWdlLm9wdGlvbnMpO1xyXG4gICAgbWVzc2FnZS5vbkNsb3NlID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcclxuICAgIHRoaXMubWVzc2FnZXMucHVzaChtZXNzYWdlKTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZSBhIG1lc3NhZ2UgYnkgYG1lc3NhZ2VJZGAuXHJcbiAgICogQHBhcmFtIG1lc3NhZ2VJZCBJZCBvZiB0aGUgbWVzc2FnZSB0byBiZSByZW1vdmVkLlxyXG4gICAqIEBwYXJhbSB1c2VyQWN0aW9uIFdoZXRoZXIgdGhpcyBpcyBjbG9zZWQgYnkgdXNlciBpbnRlcmFjdGlvbi5cclxuICAgKi9cclxuICByZW1vdmVNZXNzYWdlKG1lc3NhZ2VJZDogc3RyaW5nLCB1c2VyQWN0aW9uOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuICAgIHRoaXMubWVzc2FnZXMuc29tZSgobWVzc2FnZSwgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKG1lc3NhZ2UubWVzc2FnZUlkID09PSBtZXNzYWdlSWQpIHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIG1lc3NhZ2Uub25DbG9zZSEubmV4dCh1c2VyQWN0aW9uKTtcclxuICAgICAgICBtZXNzYWdlLm9uQ2xvc2UhLmNvbXBsZXRlKCk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmUgYWxsIG1lc3NhZ2VzLlxyXG4gICAqL1xyXG4gIHJlbW92ZU1lc3NhZ2VBbGwoKTogdm9pZCB7XHJcbiAgICB0aGlzLm1lc3NhZ2VzID0gW107XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgc3Vic2NyaWJlQ29uZmlnQ2hhbmdlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5uekNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnQ2hhbmdlRXZlbnRGb3JDb21wb25lbnQoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5zZXRDb25maWcoKSk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgbWVyZ2VNZXNzYWdlQ29uZmlnKGNvbmZpZz86IE56TWVzc2FnZUNvbmZpZ0xlZ2FjeSk6IFJlcXVpcmVkPE56TWVzc2FnZUNvbmZpZ0xlZ2FjeT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4udGhpcy5jb25maWcsXHJcbiAgICAgIC4uLmNvbmZpZyxcclxuICAgICAgLi4udGhpcy5uekNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnRm9yQ29tcG9uZW50KE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSlcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNZXJnZSBkZWZhdWx0IG9wdGlvbnMgYW5kIGN1c3RvbSBtZXNzYWdlIG9wdGlvbnNcclxuICAgKiBAcGFyYW0gb3B0aW9uc1xyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBfbWVyZ2VNZXNzYWdlT3B0aW9ucyhvcHRpb25zPzogTnpNZXNzYWdlRGF0YU9wdGlvbnMpOiBOek1lc3NhZ2VEYXRhT3B0aW9ucyB7XHJcbiAgICBjb25zdCBkZWZhdWx0T3B0aW9uczogTnpNZXNzYWdlRGF0YU9wdGlvbnMgPSB7XHJcbiAgICAgIG56RHVyYXRpb246IHRoaXMuY29uZmlnLm56RHVyYXRpb24sXHJcbiAgICAgIG56QW5pbWF0ZTogdGhpcy5jb25maWcubnpBbmltYXRlLFxyXG4gICAgICBuelBhdXNlT25Ib3ZlcjogdGhpcy5jb25maWcubnpQYXVzZU9uSG92ZXJcclxuICAgIH07XHJcbiAgICByZXR1cm4geyAuLi5kZWZhdWx0T3B0aW9ucywgLi4ub3B0aW9ucyB9O1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiYW50LW1lc3NhZ2VcIiBbc3R5bGUudG9wXT1cInRvcFwiPlxyXG4gIDxuei1tZXNzYWdlXHJcbiAgICAqbmdGb3I9XCJsZXQgbWVzc2FnZSBvZiBtZXNzYWdlczsgbGV0IGkgPSBpbmRleFwiXHJcbiAgICBbbnpNZXNzYWdlXT1cIm1lc3NhZ2VcIlxyXG4gICAgW256SW5kZXhdPVwiaVwiXHJcbiAgPjwvbnotbWVzc2FnZT5cclxuPC9kaXY+XHJcbiJdfQ==
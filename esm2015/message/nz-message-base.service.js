/**
 * @fileoverview added by tsickle
 * Generated from: nz-message-base.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { warnDeprecation } from 'ng-zorro-antd/core';
/** @type {?} */
let globalCounter = 0;
/**
 * @template ContainerClass, MessageData, MessageConfig
 */
export class NzMessageBaseService {
    /**
     * @param {?} nzSingletonService
     * @param {?} overlay
     * @param {?} containerClass
     * @param {?} injector
     * @param {?} cfr
     * @param {?} appRef
     * @param {?=} name
     */
    constructor(nzSingletonService, overlay, containerClass, injector, cfr, appRef, name = '') {
        this.nzSingletonService = nzSingletonService;
        this.overlay = overlay;
        this.containerClass = containerClass;
        this.injector = injector;
        this.cfr = cfr;
        this.appRef = appRef;
        this.name = name;
        this._container = this.withContainer();
        this.nzSingletonService.registerSingletonWithKey(this.name, this._container);
    }
    /**
     * @param {?=} messageId
     * @return {?}
     */
    remove(messageId) {
        if (messageId) {
            this._container.removeMessage(messageId);
        }
        else {
            this._container.removeMessageAll();
        }
    }
    /**
     * @param {?} message
     * @param {?=} options
     * @return {?}
     */
    createMessage(message, options) {
        /** @type {?} */
        const resultMessage = Object.assign({}, ((/** @type {?} */ (message))), {
            createdAt: new Date(),
            messageId: this._generateMessageId(),
            options
        });
        this._container.createMessage(resultMessage);
        return resultMessage;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    config(config) {
        warnDeprecation(`'config' of 'NzMessageService' and 'NzNotificationService' is deprecated and will be removed in 9.0.0. Please use 'set' of 'NzConfigService' instead.`);
        this._container.setConfig(config);
    }
    /**
     * @protected
     * @return {?}
     */
    _generateMessageId() {
        return `${this.name}-${globalCounter++}`;
    }
    // Manually creating container for overlay to avoid multi-checking error, see: https://github.com/NG-ZORRO/ng-zorro-antd/issues/391
    // NOTE: we never clean up the container component and it's overlay resources, if we should, we need to do it by our own codes.
    /**
     * @private
     * @return {?}
     */
    withContainer() {
        /** @type {?} */
        const containerInstance = this.nzSingletonService.getSingletonWithKey(this.name);
        if (containerInstance) {
            return (/** @type {?} */ (containerInstance));
        }
        /** @type {?} */
        const factory = this.cfr.resolveComponentFactory(this.containerClass);
        /** @type {?} */
        const componentRef = factory.create(this.injector);
        componentRef.changeDetectorRef.detectChanges(); // Immediately change detection to avoid multi-checking error
        this.appRef.attachView(componentRef.hostView); // Load view into app root
        // Load view into app root
        /** @type {?} */
        const overlayPane = this.overlay.create().overlayElement;
        overlayPane.style.zIndex = '1010'; // Patching: assign the same zIndex of ant-message to it's parent overlay panel, to the ant-message's zindex work.
        overlayPane.appendChild((/** @type {?} */ (((/** @type {?} */ (componentRef.hostView))).rootNodes[0])));
        return componentRef.instance;
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    NzMessageBaseService.prototype._container;
    /**
     * @type {?}
     * @private
     */
    NzMessageBaseService.prototype.nzSingletonService;
    /**
     * @type {?}
     * @private
     */
    NzMessageBaseService.prototype.overlay;
    /**
     * @type {?}
     * @private
     */
    NzMessageBaseService.prototype.containerClass;
    /**
     * @type {?}
     * @private
     */
    NzMessageBaseService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    NzMessageBaseService.prototype.cfr;
    /**
     * @type {?}
     * @private
     */
    NzMessageBaseService.prototype.appRef;
    /**
     * @type {?}
     * @private
     */
    NzMessageBaseService.prototype.name;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVzc2FnZS1iYXNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL21lc3NhZ2UvIiwic291cmNlcyI6WyJuei1tZXNzYWdlLWJhc2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFVQSxPQUFPLEVBQUUsZUFBZSxFQUFzQixNQUFNLG9CQUFvQixDQUFDOztJQU1yRSxhQUFhLEdBQUcsQ0FBQzs7OztBQUVyQixNQUFNLE9BQU8sb0JBQW9COzs7Ozs7Ozs7O0lBTy9CLFlBQ1Usa0JBQXNDLEVBQ3RDLE9BQWdCLEVBQ2hCLGNBQW9DLEVBQ3BDLFFBQWtCLEVBQ2xCLEdBQTZCLEVBQzdCLE1BQXNCLEVBQ3RCLE9BQWUsRUFBRTtRQU5qQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDaEIsbUJBQWMsR0FBZCxjQUFjLENBQXNCO1FBQ3BDLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsUUFBRyxHQUFILEdBQUcsQ0FBMEI7UUFDN0IsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDdEIsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUV6QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDL0UsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsU0FBa0I7UUFDdkIsSUFBSSxTQUFTLEVBQUU7WUFDYixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMxQzthQUFNO1lBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsYUFBYSxDQUFDLE9BQW9CLEVBQUUsT0FBOEI7O2NBQzFELGFBQWEscUJBQ2QsQ0FBQyxtQkFBQSxPQUFPLEVBQWlCLENBQUMsRUFDMUI7WUFDRCxTQUFTLEVBQUUsSUFBSSxJQUFJLEVBQUU7WUFDckIsU0FBUyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUNwQyxPQUFPO1NBQ1IsQ0FDRjtRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRTdDLE9BQU8sYUFBYSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLE1BQXFCO1FBQzFCLGVBQWUsQ0FBQyx1SkFBdUosQ0FBQyxDQUFDO1FBRXpLLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBRVMsa0JBQWtCO1FBQzFCLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLGFBQWEsRUFBRSxFQUFFLENBQUM7SUFDM0MsQ0FBQzs7Ozs7OztJQUlPLGFBQWE7O2NBQ2IsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFaEYsSUFBSSxpQkFBaUIsRUFBRTtZQUNyQixPQUFPLG1CQUFBLGlCQUFpQixFQUFrQixDQUFDO1NBQzVDOztjQUVLLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7O2NBQy9ELFlBQVksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDbEQsWUFBWSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsNkRBQTZEO1FBQzdHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLDBCQUEwQjs7O2NBQ25FLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLGNBQWM7UUFDeEQsV0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUMsa0hBQWtIO1FBQ3JKLFdBQVcsQ0FBQyxXQUFXLENBQUMsbUJBQUEsQ0FBQyxtQkFBQSxZQUFZLENBQUMsUUFBUSxFQUF1QixDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFlLENBQUMsQ0FBQztRQUVwRyxPQUFPLFlBQVksQ0FBQyxRQUFRLENBQUM7SUFDL0IsQ0FBQztDQUNGOzs7Ozs7SUFsRUMsMENBQXFDOzs7OztJQUduQyxrREFBOEM7Ozs7O0lBQzlDLHVDQUF3Qjs7Ozs7SUFDeEIsOENBQTRDOzs7OztJQUM1Qyx3Q0FBMEI7Ozs7O0lBQzFCLG1DQUFxQzs7Ozs7SUFDckMsc0NBQThCOzs7OztJQUM5QixvQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IE92ZXJsYXkgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uUmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEVtYmVkZGVkVmlld1JlZiwgSW5qZWN0b3IsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgd2FybkRlcHJlY2F0aW9uLCBOelNpbmdsZXRvblNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpNZXNzYWdlQ29uZmlnTGVnYWN5IH0gZnJvbSAnLi9uei1tZXNzYWdlLWNvbmZpZyc7XHJcbmltcG9ydCB7IE56TWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vbnotbWVzc2FnZS1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpNZXNzYWdlRGF0YSwgTnpNZXNzYWdlRGF0YUZpbGxlZCwgTnpNZXNzYWdlRGF0YU9wdGlvbnMgfSBmcm9tICcuL256LW1lc3NhZ2UuZGVmaW5pdGlvbnMnO1xyXG5cclxubGV0IGdsb2JhbENvdW50ZXIgPSAwO1xyXG5cclxuZXhwb3J0IGNsYXNzIE56TWVzc2FnZUJhc2VTZXJ2aWNlPFxyXG4gIENvbnRhaW5lckNsYXNzIGV4dGVuZHMgTnpNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gIE1lc3NhZ2VEYXRhLFxyXG4gIE1lc3NhZ2VDb25maWcgZXh0ZW5kcyBOek1lc3NhZ2VDb25maWdMZWdhY3lcclxuPiB7XHJcbiAgcHJvdGVjdGVkIF9jb250YWluZXI6IENvbnRhaW5lckNsYXNzO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgbnpTaW5nbGV0b25TZXJ2aWNlOiBOelNpbmdsZXRvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksXHJcbiAgICBwcml2YXRlIGNvbnRhaW5lckNsYXNzOiBUeXBlPENvbnRhaW5lckNsYXNzPixcclxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxyXG4gICAgcHJpdmF0ZSBjZnI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIHByaXZhdGUgYXBwUmVmOiBBcHBsaWNhdGlvblJlZixcclxuICAgIHByaXZhdGUgbmFtZTogc3RyaW5nID0gJydcclxuICApIHtcclxuICAgIHRoaXMuX2NvbnRhaW5lciA9IHRoaXMud2l0aENvbnRhaW5lcigpO1xyXG4gICAgdGhpcy5uelNpbmdsZXRvblNlcnZpY2UucmVnaXN0ZXJTaW5nbGV0b25XaXRoS2V5KHRoaXMubmFtZSwgdGhpcy5fY29udGFpbmVyKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZShtZXNzYWdlSWQ/OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmIChtZXNzYWdlSWQpIHtcclxuICAgICAgdGhpcy5fY29udGFpbmVyLnJlbW92ZU1lc3NhZ2UobWVzc2FnZUlkKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2NvbnRhaW5lci5yZW1vdmVNZXNzYWdlQWxsKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGVNZXNzYWdlKG1lc3NhZ2U6IE1lc3NhZ2VEYXRhLCBvcHRpb25zPzogTnpNZXNzYWdlRGF0YU9wdGlvbnMpOiBOek1lc3NhZ2VEYXRhRmlsbGVkIHtcclxuICAgIGNvbnN0IHJlc3VsdE1lc3NhZ2U6IE56TWVzc2FnZURhdGFGaWxsZWQgPSB7XHJcbiAgICAgIC4uLihtZXNzYWdlIGFzIE56TWVzc2FnZURhdGEpLFxyXG4gICAgICAuLi57XHJcbiAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIG1lc3NhZ2VJZDogdGhpcy5fZ2VuZXJhdGVNZXNzYWdlSWQoKSxcclxuICAgICAgICBvcHRpb25zXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aGlzLl9jb250YWluZXIuY3JlYXRlTWVzc2FnZShyZXN1bHRNZXNzYWdlKTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0TWVzc2FnZTtcclxuICB9XHJcblxyXG4gIGNvbmZpZyhjb25maWc6IE1lc3NhZ2VDb25maWcpOiB2b2lkIHtcclxuICAgIHdhcm5EZXByZWNhdGlvbihgJ2NvbmZpZycgb2YgJ056TWVzc2FnZVNlcnZpY2UnIGFuZCAnTnpOb3RpZmljYXRpb25TZXJ2aWNlJyBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFBsZWFzZSB1c2UgJ3NldCcgb2YgJ056Q29uZmlnU2VydmljZScgaW5zdGVhZC5gKTtcclxuXHJcbiAgICB0aGlzLl9jb250YWluZXIuc2V0Q29uZmlnKGNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgX2dlbmVyYXRlTWVzc2FnZUlkKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYCR7dGhpcy5uYW1lfS0ke2dsb2JhbENvdW50ZXIrK31gO1xyXG4gIH1cclxuXHJcbiAgLy8gTWFudWFsbHkgY3JlYXRpbmcgY29udGFpbmVyIGZvciBvdmVybGF5IHRvIGF2b2lkIG11bHRpLWNoZWNraW5nIGVycm9yLCBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2lzc3Vlcy8zOTFcclxuICAvLyBOT1RFOiB3ZSBuZXZlciBjbGVhbiB1cCB0aGUgY29udGFpbmVyIGNvbXBvbmVudCBhbmQgaXQncyBvdmVybGF5IHJlc291cmNlcywgaWYgd2Ugc2hvdWxkLCB3ZSBuZWVkIHRvIGRvIGl0IGJ5IG91ciBvd24gY29kZXMuXHJcbiAgcHJpdmF0ZSB3aXRoQ29udGFpbmVyKCk6IENvbnRhaW5lckNsYXNzIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lckluc3RhbmNlID0gdGhpcy5uelNpbmdsZXRvblNlcnZpY2UuZ2V0U2luZ2xldG9uV2l0aEtleSh0aGlzLm5hbWUpO1xyXG5cclxuICAgIGlmIChjb250YWluZXJJbnN0YW5jZSkge1xyXG4gICAgICByZXR1cm4gY29udGFpbmVySW5zdGFuY2UgYXMgQ29udGFpbmVyQ2xhc3M7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmFjdG9yeSA9IHRoaXMuY2ZyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHRoaXMuY29udGFpbmVyQ2xhc3MpO1xyXG4gICAgY29uc3QgY29tcG9uZW50UmVmID0gZmFjdG9yeS5jcmVhdGUodGhpcy5pbmplY3Rvcik7IC8vIFVzZSByb290IGluamVjdG9yXHJcbiAgICBjb21wb25lbnRSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpOyAvLyBJbW1lZGlhdGVseSBjaGFuZ2UgZGV0ZWN0aW9uIHRvIGF2b2lkIG11bHRpLWNoZWNraW5nIGVycm9yXHJcbiAgICB0aGlzLmFwcFJlZi5hdHRhY2hWaWV3KGNvbXBvbmVudFJlZi5ob3N0Vmlldyk7IC8vIExvYWQgdmlldyBpbnRvIGFwcCByb290XHJcbiAgICBjb25zdCBvdmVybGF5UGFuZSA9IHRoaXMub3ZlcmxheS5jcmVhdGUoKS5vdmVybGF5RWxlbWVudDtcclxuICAgIG92ZXJsYXlQYW5lLnN0eWxlLnpJbmRleCA9ICcxMDEwJzsgLy8gUGF0Y2hpbmc6IGFzc2lnbiB0aGUgc2FtZSB6SW5kZXggb2YgYW50LW1lc3NhZ2UgdG8gaXQncyBwYXJlbnQgb3ZlcmxheSBwYW5lbCwgdG8gdGhlIGFudC1tZXNzYWdlJ3MgemluZGV4IHdvcmsuXHJcbiAgICBvdmVybGF5UGFuZS5hcHBlbmRDaGlsZCgoY29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjx7fT4pLnJvb3ROb2Rlc1swXSBhcyBIVE1MRWxlbWVudCk7XHJcblxyXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlZi5pbnN0YW5jZTtcclxuICB9XHJcbn1cclxuIl19
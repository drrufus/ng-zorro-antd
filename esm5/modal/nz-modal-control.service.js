/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Subject } from 'rxjs';
import { NzModalControlServiceModule } from './nz-modal-control.service.module';
import * as i0 from "@angular/core";
var NzModalControlService = /** @class */ (function () {
    function NzModalControlService(parentService) {
        this.parentService = parentService;
        this.rootOpenModals = this.parentService ? null : [];
        this.rootAfterAllClose = this.parentService ? null : new Subject();
        this.rootRegisteredMetaMap = this.parentService ? null : new Map();
    }
    Object.defineProperty(NzModalControlService.prototype, "afterAllClose", {
        // Track singleton afterAllClose through over the injection tree
        get: function () {
            return this.parentService ? this.parentService.afterAllClose : this.rootAfterAllClose;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzModalControlService.prototype, "openModals", {
        // Track singleton openModals array through over the injection tree
        get: function () {
            return this.parentService ? this.parentService.openModals : this.rootOpenModals;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzModalControlService.prototype, "registeredMetaMap", {
        get: function () {
            // Registered modal for later usage
            return this.parentService ? this.parentService.registeredMetaMap : this.rootRegisteredMetaMap;
        },
        enumerable: true,
        configurable: true
    });
    // Register a modal to listen its open/close
    NzModalControlService.prototype.registerModal = function (modalRef) {
        var _this = this;
        if (!this.hasRegistered(modalRef)) {
            var afterOpenSubscription = modalRef.afterOpen.subscribe(function () { return _this.openModals.push(modalRef); });
            var afterCloseSubscription = modalRef.afterClose.subscribe(function () { return _this.removeOpenModal(modalRef); });
            this.registeredMetaMap.set(modalRef, { modalRef: modalRef, afterOpenSubscription: afterOpenSubscription, afterCloseSubscription: afterCloseSubscription });
        }
    };
    // deregister modals
    NzModalControlService.prototype.deregisterModal = function (modalRef) {
        var registeredMeta = this.registeredMetaMap.get(modalRef);
        if (registeredMeta) {
            // Remove this modal if it is still in the opened modal list (NOTE: it may trigger "afterAllClose")
            this.removeOpenModal(registeredMeta.modalRef);
            registeredMeta.afterOpenSubscription.unsubscribe();
            registeredMeta.afterCloseSubscription.unsubscribe();
            this.registeredMetaMap.delete(modalRef);
        }
    };
    NzModalControlService.prototype.hasRegistered = function (modalRef) {
        return this.registeredMetaMap.has(modalRef);
    };
    // Close all registered opened modals
    NzModalControlService.prototype.closeAll = function () {
        var i = this.openModals.length;
        while (i--) {
            this.openModals[i].close();
        }
    };
    NzModalControlService.prototype.removeOpenModal = function (modalRef) {
        var index = this.openModals.indexOf(modalRef);
        if (index > -1) {
            this.openModals.splice(index, 1);
            if (!this.openModals.length) {
                this.afterAllClose.next();
            }
        }
    };
    /** @nocollapse */ NzModalControlService.ɵfac = function NzModalControlService_Factory(t) { return new (t || NzModalControlService)(i0.ɵɵinject(NzModalControlService, 12)); };
    /** @nocollapse */ NzModalControlService.ɵprov = i0.ɵɵdefineInjectable({ token: NzModalControlService, factory: NzModalControlService.ɵfac, providedIn: NzModalControlServiceModule });
    return NzModalControlService;
}());
export { NzModalControlService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzModalControlService, [{
        type: Injectable,
        args: [{
                providedIn: NzModalControlServiceModule
            }]
    }], function () { return [{ type: NzModalControlService, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbW9kYWwtY29udHJvbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9tb2RhbC8iLCJzb3VyY2VzIjpbIm56LW1vZGFsLWNvbnRyb2wuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0QsT0FBTyxFQUFFLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFFN0MsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7O0FBU2hGO0lBdUJFLCtCQUE0QyxhQUFvQztRQUFwQyxrQkFBYSxHQUFiLGFBQWEsQ0FBdUI7UUFUeEUsbUJBQWMsR0FBd0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDckUsc0JBQWlCLEdBQXlCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUMxRiwwQkFBcUIsR0FBMkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBTzNCLENBQUM7SUFsQnBGLHNCQUFJLGdEQUFhO1FBRGpCLGdFQUFnRTthQUNoRTtZQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBa0IsQ0FBQztRQUN6RixDQUFDOzs7T0FBQTtJQUdELHNCQUFJLDZDQUFVO1FBRGQsbUVBQW1FO2FBQ25FO1lBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWUsQ0FBQztRQUNuRixDQUFDOzs7T0FBQTtJQU1ELHNCQUFZLG9EQUFpQjthQUE3QjtZQUNFLG1DQUFtQztZQUNuQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBc0IsQ0FBQztRQUNqRyxDQUFDOzs7T0FBQTtJQUlELDRDQUE0QztJQUM1Qyw2Q0FBYSxHQUFiLFVBQWMsUUFBb0I7UUFBbEMsaUJBT0M7UUFOQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNqQyxJQUFNLHFCQUFxQixHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO1lBQ2pHLElBQU0sc0JBQXNCLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEVBQTlCLENBQThCLENBQUMsQ0FBQztZQUVuRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFLFFBQVEsVUFBQSxFQUFFLHFCQUFxQix1QkFBQSxFQUFFLHNCQUFzQix3QkFBQSxFQUFFLENBQUMsQ0FBQztTQUNuRztJQUNILENBQUM7SUFFRCxvQkFBb0I7SUFDcEIsK0NBQWUsR0FBZixVQUFnQixRQUFvQjtRQUNsQyxJQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVELElBQUksY0FBYyxFQUFFO1lBQ2xCLG1HQUFtRztZQUNuRyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM5QyxjQUFjLENBQUMscUJBQXFCLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkQsY0FBYyxDQUFDLHNCQUFzQixDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3BELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDekM7SUFDSCxDQUFDO0lBRUQsNkNBQWEsR0FBYixVQUFjLFFBQW9CO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQscUNBQXFDO0lBQ3JDLHdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUUvQixPQUFPLENBQUMsRUFBRSxFQUFFO1lBQ1YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUM1QjtJQUNILENBQUM7SUFFTywrQ0FBZSxHQUF2QixVQUF3QixRQUFvQjtRQUMxQyxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVoRCxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNkLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUVqQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDM0I7U0FDRjtJQUNILENBQUM7OEZBbkVVLHFCQUFxQixjQW9CMkIscUJBQXFCO2lFQXBCckUscUJBQXFCLFdBQXJCLHFCQUFxQixtQkFGcEIsMkJBQTJCO2dDQXJCekM7Q0EyRkMsQUF2RUQsSUF1RUM7U0FwRVkscUJBQXFCO2tEQUFyQixxQkFBcUI7Y0FIakMsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSwyQkFBMkI7YUFDeEM7c0NBcUI0RCxxQkFBcUI7c0JBQW5FLFFBQVE7O3NCQUFJLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IE56TW9kYWxDb250cm9sU2VydmljZU1vZHVsZSB9IGZyb20gJy4vbnotbW9kYWwtY29udHJvbC5zZXJ2aWNlLm1vZHVsZSc7XHJcbmltcG9ydCB7IE56TW9kYWxSZWYgfSBmcm9tICcuL256LW1vZGFsLXJlZi5jbGFzcyc7XHJcblxyXG5pbnRlcmZhY2UgUmVnaXN0ZXJlZE1ldGEge1xyXG4gIG1vZGFsUmVmOiBOek1vZGFsUmVmO1xyXG4gIGFmdGVyT3BlblN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gIGFmdGVyQ2xvc2VTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxufVxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46IE56TW9kYWxDb250cm9sU2VydmljZU1vZHVsZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpNb2RhbENvbnRyb2xTZXJ2aWNlIHtcclxuICAvLyBUcmFjayBzaW5nbGV0b24gYWZ0ZXJBbGxDbG9zZSB0aHJvdWdoIG92ZXIgdGhlIGluamVjdGlvbiB0cmVlXHJcbiAgZ2V0IGFmdGVyQWxsQ2xvc2UoKTogU3ViamVjdDx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5wYXJlbnRTZXJ2aWNlID8gdGhpcy5wYXJlbnRTZXJ2aWNlLmFmdGVyQWxsQ2xvc2UgOiB0aGlzLnJvb3RBZnRlckFsbENsb3NlITtcclxuICB9XHJcblxyXG4gIC8vIFRyYWNrIHNpbmdsZXRvbiBvcGVuTW9kYWxzIGFycmF5IHRocm91Z2ggb3ZlciB0aGUgaW5qZWN0aW9uIHRyZWVcclxuICBnZXQgb3Blbk1vZGFscygpOiBOek1vZGFsUmVmW10ge1xyXG4gICAgcmV0dXJuIHRoaXMucGFyZW50U2VydmljZSA/IHRoaXMucGFyZW50U2VydmljZS5vcGVuTW9kYWxzIDogdGhpcy5yb290T3Blbk1vZGFscyE7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJvb3RPcGVuTW9kYWxzOiBOek1vZGFsUmVmW10gfCBudWxsID0gdGhpcy5wYXJlbnRTZXJ2aWNlID8gbnVsbCA6IFtdO1xyXG4gIHByaXZhdGUgcm9vdEFmdGVyQWxsQ2xvc2U6IFN1YmplY3Q8dm9pZD4gfCBudWxsID0gdGhpcy5wYXJlbnRTZXJ2aWNlID8gbnVsbCA6IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgcHJpdmF0ZSByb290UmVnaXN0ZXJlZE1ldGFNYXA6IE1hcDxOek1vZGFsUmVmLCBSZWdpc3RlcmVkTWV0YT4gfCBudWxsID0gdGhpcy5wYXJlbnRTZXJ2aWNlID8gbnVsbCA6IG5ldyBNYXAoKTtcclxuXHJcbiAgcHJpdmF0ZSBnZXQgcmVnaXN0ZXJlZE1ldGFNYXAoKTogTWFwPE56TW9kYWxSZWYsIFJlZ2lzdGVyZWRNZXRhPiB7XHJcbiAgICAvLyBSZWdpc3RlcmVkIG1vZGFsIGZvciBsYXRlciB1c2FnZVxyXG4gICAgcmV0dXJuIHRoaXMucGFyZW50U2VydmljZSA/IHRoaXMucGFyZW50U2VydmljZS5yZWdpc3RlcmVkTWV0YU1hcCA6IHRoaXMucm9vdFJlZ2lzdGVyZWRNZXRhTWFwITtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHByaXZhdGUgcGFyZW50U2VydmljZTogTnpNb2RhbENvbnRyb2xTZXJ2aWNlKSB7fVxyXG5cclxuICAvLyBSZWdpc3RlciBhIG1vZGFsIHRvIGxpc3RlbiBpdHMgb3Blbi9jbG9zZVxyXG4gIHJlZ2lzdGVyTW9kYWwobW9kYWxSZWY6IE56TW9kYWxSZWYpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5oYXNSZWdpc3RlcmVkKG1vZGFsUmVmKSkge1xyXG4gICAgICBjb25zdCBhZnRlck9wZW5TdWJzY3JpcHRpb24gPSBtb2RhbFJlZi5hZnRlck9wZW4uc3Vic2NyaWJlKCgpID0+IHRoaXMub3Blbk1vZGFscy5wdXNoKG1vZGFsUmVmKSk7XHJcbiAgICAgIGNvbnN0IGFmdGVyQ2xvc2VTdWJzY3JpcHRpb24gPSBtb2RhbFJlZi5hZnRlckNsb3NlLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlbW92ZU9wZW5Nb2RhbChtb2RhbFJlZikpO1xyXG5cclxuICAgICAgdGhpcy5yZWdpc3RlcmVkTWV0YU1hcC5zZXQobW9kYWxSZWYsIHsgbW9kYWxSZWYsIGFmdGVyT3BlblN1YnNjcmlwdGlvbiwgYWZ0ZXJDbG9zZVN1YnNjcmlwdGlvbiB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGRlcmVnaXN0ZXIgbW9kYWxzXHJcbiAgZGVyZWdpc3Rlck1vZGFsKG1vZGFsUmVmOiBOek1vZGFsUmVmKTogdm9pZCB7XHJcbiAgICBjb25zdCByZWdpc3RlcmVkTWV0YSA9IHRoaXMucmVnaXN0ZXJlZE1ldGFNYXAuZ2V0KG1vZGFsUmVmKTtcclxuICAgIGlmIChyZWdpc3RlcmVkTWV0YSkge1xyXG4gICAgICAvLyBSZW1vdmUgdGhpcyBtb2RhbCBpZiBpdCBpcyBzdGlsbCBpbiB0aGUgb3BlbmVkIG1vZGFsIGxpc3QgKE5PVEU6IGl0IG1heSB0cmlnZ2VyIFwiYWZ0ZXJBbGxDbG9zZVwiKVxyXG4gICAgICB0aGlzLnJlbW92ZU9wZW5Nb2RhbChyZWdpc3RlcmVkTWV0YS5tb2RhbFJlZik7XHJcbiAgICAgIHJlZ2lzdGVyZWRNZXRhLmFmdGVyT3BlblN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICByZWdpc3RlcmVkTWV0YS5hZnRlckNsb3NlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIHRoaXMucmVnaXN0ZXJlZE1ldGFNYXAuZGVsZXRlKG1vZGFsUmVmKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhc1JlZ2lzdGVyZWQobW9kYWxSZWY6IE56TW9kYWxSZWYpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnJlZ2lzdGVyZWRNZXRhTWFwLmhhcyhtb2RhbFJlZik7XHJcbiAgfVxyXG5cclxuICAvLyBDbG9zZSBhbGwgcmVnaXN0ZXJlZCBvcGVuZWQgbW9kYWxzXHJcbiAgY2xvc2VBbGwoKTogdm9pZCB7XHJcbiAgICBsZXQgaSA9IHRoaXMub3Blbk1vZGFscy5sZW5ndGg7XHJcblxyXG4gICAgd2hpbGUgKGktLSkge1xyXG4gICAgICB0aGlzLm9wZW5Nb2RhbHNbaV0uY2xvc2UoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVtb3ZlT3Blbk1vZGFsKG1vZGFsUmVmOiBOek1vZGFsUmVmKTogdm9pZCB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMub3Blbk1vZGFscy5pbmRleE9mKG1vZGFsUmVmKTtcclxuXHJcbiAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICB0aGlzLm9wZW5Nb2RhbHMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHJcbiAgICAgIGlmICghdGhpcy5vcGVuTW9kYWxzLmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMuYWZ0ZXJBbGxDbG9zZS5uZXh0KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19
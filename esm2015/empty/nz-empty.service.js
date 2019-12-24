/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Inject, Injectable, Optional, TemplateRef, Type } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NzConfigService, PREFIX, warnDeprecation } from 'ng-zorro-antd/core';
import { NZ_DEFAULT_EMPTY_CONTENT } from './nz-empty-config';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
// tslint:disable-next-line:no-any
export class NzEmptyService {
    constructor(nzConfigService, legacyDefaultEmptyContent) {
        this.nzConfigService = nzConfigService;
        this.legacyDefaultEmptyContent = legacyDefaultEmptyContent;
        this.userDefaultContent$ = new BehaviorSubject(undefined);
        if (legacyDefaultEmptyContent) {
            warnDeprecation(`'NZ_DEFAULT_EMPTY_CONTENT' is deprecated and would be removed in 9.0.0. Please migrate to 'NZ_CONFIG'.`);
        }
        const userDefaultEmptyContent = this.getUserDefaultEmptyContent();
        if (userDefaultEmptyContent) {
            this.userDefaultContent$.next(userDefaultEmptyContent);
        }
        this.nzConfigService.getConfigChangeEventForComponent('empty').subscribe(() => {
            this.userDefaultContent$.next(this.getUserDefaultEmptyContent());
        });
    }
    setDefaultContent(content) {
        warnDeprecation(`'setDefaultContent' is deprecated and would be removed in 9.0.0. Please migrate to 'NzConfigService'.`);
        if (typeof content === 'string' ||
            content === undefined ||
            content === null ||
            content instanceof TemplateRef ||
            content instanceof Type) {
            this.userDefaultContent$.next(content);
        }
        else {
            throw new Error(`${PREFIX} 'useDefaultContent' expect 'string', 'templateRef' or 'component' but get ${content}.`);
        }
    }
    resetDefault() {
        warnDeprecation(`'resetDefault' is deprecated and would be removed in 9.0.0. Please migrate to 'NzConfigService' and provide an 'undefined'.`);
        this.userDefaultContent$.next(undefined);
    }
    getUserDefaultEmptyContent() {
        return (this.nzConfigService.getConfigForComponent('empty') || {}).nzDefaultEmptyContent || this.legacyDefaultEmptyContent;
    }
}
/** @nocollapse */ NzEmptyService.ɵfac = function NzEmptyService_Factory(t) { return new (t || NzEmptyService)(i0.ɵɵinject(i1.NzConfigService), i0.ɵɵinject(NZ_DEFAULT_EMPTY_CONTENT, 8)); };
/** @nocollapse */ NzEmptyService.ɵprov = i0.ɵɵdefineInjectable({ token: NzEmptyService, factory: NzEmptyService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzEmptyService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.NzConfigService }, { type: i0.Type, decorators: [{
                type: Inject,
                args: [NZ_DEFAULT_EMPTY_CONTENT]
            }, {
                type: Optional
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZW1wdHkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZW1wdHkvIiwic291cmNlcyI6WyJuei1lbXB0eS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFdkMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFOUUsT0FBTyxFQUFFLHdCQUF3QixFQUF3QixNQUFNLG1CQUFtQixDQUFDOzs7QUFLbkYsa0NBQWtDO0FBQ2xDLE1BQU0sT0FBTyxjQUFjO0lBR3pCLFlBQ1UsZUFBZ0MsRUFDYyx5QkFBa0M7UUFEaEYsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2MsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUFTO1FBSjFGLHdCQUFtQixHQUFHLElBQUksZUFBZSxDQUFtQyxTQUFTLENBQUMsQ0FBQztRQU1yRixJQUFJLHlCQUF5QixFQUFFO1lBQzdCLGVBQWUsQ0FBQyx3R0FBd0csQ0FBQyxDQUFDO1NBQzNIO1FBRUQsTUFBTSx1QkFBdUIsR0FBRyxJQUFJLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztRQUVsRSxJQUFJLHVCQUF1QixFQUFFO1lBQzNCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQztTQUN4RDtRQUVELElBQUksQ0FBQyxlQUFlLENBQUMsZ0NBQWdDLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUM1RSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDLENBQUM7UUFDbkUsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsaUJBQWlCLENBQUMsT0FBOEI7UUFDOUMsZUFBZSxDQUFDLHVHQUF1RyxDQUFDLENBQUM7UUFFekgsSUFDRSxPQUFPLE9BQU8sS0FBSyxRQUFRO1lBQzNCLE9BQU8sS0FBSyxTQUFTO1lBQ3JCLE9BQU8sS0FBSyxJQUFJO1lBQ2hCLE9BQU8sWUFBWSxXQUFXO1lBQzlCLE9BQU8sWUFBWSxJQUFJLEVBQ3ZCO1lBQ0EsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN4QzthQUFNO1lBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLE1BQU0sOEVBQThFLE9BQU8sR0FBRyxDQUFDLENBQUM7U0FDcEg7SUFDSCxDQUFDO0lBRUQsWUFBWTtRQUNWLGVBQWUsQ0FDYiw2SEFBNkgsQ0FDOUgsQ0FBQztRQUNGLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVPLDBCQUEwQjtRQUNoQyxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxxQkFBcUIsSUFBSSxJQUFJLENBQUMseUJBQXlCLENBQUM7SUFDN0gsQ0FBQzs7NEVBL0NVLGNBQWMsK0NBS2Ysd0JBQXdCO3NEQUx2QixjQUFjLFdBQWQsY0FBYyxtQkFIYixNQUFNO2tEQUdQLGNBQWM7Y0FKMUIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COztzQkFPSSxNQUFNO3VCQUFDLHdCQUF3Qjs7c0JBQUcsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCwgVGVtcGxhdGVSZWYsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBOekNvbmZpZ1NlcnZpY2UsIFBSRUZJWCwgd2FybkRlcHJlY2F0aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IE5aX0RFRkFVTFRfRU1QVFlfQ09OVEVOVCwgTnpFbXB0eUN1c3RvbUNvbnRlbnQgfSBmcm9tICcuL256LWVtcHR5LWNvbmZpZyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuZXhwb3J0IGNsYXNzIE56RW1wdHlTZXJ2aWNlPFQgPSBhbnk+IHtcclxuICB1c2VyRGVmYXVsdENvbnRlbnQkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxOekVtcHR5Q3VzdG9tQ29udGVudCB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxyXG4gICAgQEluamVjdChOWl9ERUZBVUxUX0VNUFRZX0NPTlRFTlQpIEBPcHRpb25hbCgpIHByaXZhdGUgbGVnYWN5RGVmYXVsdEVtcHR5Q29udGVudDogVHlwZTxUPlxyXG4gICkge1xyXG4gICAgaWYgKGxlZ2FjeURlZmF1bHRFbXB0eUNvbnRlbnQpIHtcclxuICAgICAgd2FybkRlcHJlY2F0aW9uKGAnTlpfREVGQVVMVF9FTVBUWV9DT05URU5UJyBpcyBkZXByZWNhdGVkIGFuZCB3b3VsZCBiZSByZW1vdmVkIGluIDkuMC4wLiBQbGVhc2UgbWlncmF0ZSB0byAnTlpfQ09ORklHJy5gKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1c2VyRGVmYXVsdEVtcHR5Q29udGVudCA9IHRoaXMuZ2V0VXNlckRlZmF1bHRFbXB0eUNvbnRlbnQoKTtcclxuXHJcbiAgICBpZiAodXNlckRlZmF1bHRFbXB0eUNvbnRlbnQpIHtcclxuICAgICAgdGhpcy51c2VyRGVmYXVsdENvbnRlbnQkLm5leHQodXNlckRlZmF1bHRFbXB0eUNvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubnpDb25maWdTZXJ2aWNlLmdldENvbmZpZ0NoYW5nZUV2ZW50Rm9yQ29tcG9uZW50KCdlbXB0eScpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMudXNlckRlZmF1bHRDb250ZW50JC5uZXh0KHRoaXMuZ2V0VXNlckRlZmF1bHRFbXB0eUNvbnRlbnQoKSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldERlZmF1bHRDb250ZW50KGNvbnRlbnQ/OiBOekVtcHR5Q3VzdG9tQ29udGVudCk6IHZvaWQge1xyXG4gICAgd2FybkRlcHJlY2F0aW9uKGAnc2V0RGVmYXVsdENvbnRlbnQnIGlzIGRlcHJlY2F0ZWQgYW5kIHdvdWxkIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFBsZWFzZSBtaWdyYXRlIHRvICdOekNvbmZpZ1NlcnZpY2UnLmApO1xyXG5cclxuICAgIGlmIChcclxuICAgICAgdHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnIHx8XHJcbiAgICAgIGNvbnRlbnQgPT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICBjb250ZW50ID09PSBudWxsIHx8XHJcbiAgICAgIGNvbnRlbnQgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZiB8fFxyXG4gICAgICBjb250ZW50IGluc3RhbmNlb2YgVHlwZVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMudXNlckRlZmF1bHRDb250ZW50JC5uZXh0KGNvbnRlbnQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGAke1BSRUZJWH0gJ3VzZURlZmF1bHRDb250ZW50JyBleHBlY3QgJ3N0cmluZycsICd0ZW1wbGF0ZVJlZicgb3IgJ2NvbXBvbmVudCcgYnV0IGdldCAke2NvbnRlbnR9LmApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVzZXREZWZhdWx0KCk6IHZvaWQge1xyXG4gICAgd2FybkRlcHJlY2F0aW9uKFxyXG4gICAgICBgJ3Jlc2V0RGVmYXVsdCcgaXMgZGVwcmVjYXRlZCBhbmQgd291bGQgYmUgcmVtb3ZlZCBpbiA5LjAuMC4gUGxlYXNlIG1pZ3JhdGUgdG8gJ056Q29uZmlnU2VydmljZScgYW5kIHByb3ZpZGUgYW4gJ3VuZGVmaW5lZCcuYFxyXG4gICAgKTtcclxuICAgIHRoaXMudXNlckRlZmF1bHRDb250ZW50JC5uZXh0KHVuZGVmaW5lZCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFVzZXJEZWZhdWx0RW1wdHlDb250ZW50KCk6IFR5cGU8VD4gfCBUZW1wbGF0ZVJlZjxzdHJpbmc+IHwgc3RyaW5nIHtcclxuICAgIHJldHVybiAodGhpcy5uekNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnRm9yQ29tcG9uZW50KCdlbXB0eScpIHx8IHt9KS5uekRlZmF1bHRFbXB0eUNvbnRlbnQgfHwgdGhpcy5sZWdhY3lEZWZhdWx0RW1wdHlDb250ZW50O1xyXG4gIH1cclxufVxyXG4iXX0=
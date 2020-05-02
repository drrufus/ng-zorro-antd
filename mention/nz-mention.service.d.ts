/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { NzMentionTriggerDirective } from './nz-mention-trigger';
import * as ɵngcc0 from '@angular/core';
export declare class NzMentionService implements OnDestroy {
    private trigger;
    private triggerChange$;
    triggerChanged(): Observable<NzMentionTriggerDirective>;
    registerTrigger(trigger: NzMentionTriggerDirective): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzMentionService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NzMentionService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudGlvbi5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbIm56LW1lbnRpb24uc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztBQVVBOzs7Ozs7OztBQU1BIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcbmltcG9ydCB7IE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE56TWVudGlvblRyaWdnZXJEaXJlY3RpdmUgfSBmcm9tICcuL256LW1lbnRpb24tdHJpZ2dlcic7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE56TWVudGlvblNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gICAgcHJpdmF0ZSB0cmlnZ2VyO1xyXG4gICAgcHJpdmF0ZSB0cmlnZ2VyQ2hhbmdlJDtcclxuICAgIHRyaWdnZXJDaGFuZ2VkKCk6IE9ic2VydmFibGU8TnpNZW50aW9uVHJpZ2dlckRpcmVjdGl2ZT47XHJcbiAgICByZWdpc3RlclRyaWdnZXIodHJpZ2dlcjogTnpNZW50aW9uVHJpZ2dlckRpcmVjdGl2ZSk6IHZvaWQ7XHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xyXG59XHJcbiJdfQ==
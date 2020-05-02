/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ConnectedOverlayPositionChange } from '@angular/cdk/overlay';
import { ChangeDetectorRef, OnDestroy, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { NzDropdownService } from './nz-dropdown.service';
import * as ɵngcc0 from '@angular/core';
export declare class NzDropdownContextComponent implements OnDestroy {
    private cdr;
    open: boolean;
    templateRef: TemplateRef<void>;
    dropDownPosition: 'top' | 'bottom';
    private control;
    private destroy$;
    init(open: boolean, templateRef: TemplateRef<void>, positionChanges: Observable<ConnectedOverlayPositionChange>, control: NzDropdownService): void;
    close(): void;
    afterAnimation(): void;
    constructor(cdr: ChangeDetectorRef);
    /** https://github.com/angular/angular/issues/14842 **/
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzDropdownContextComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzDropdownContextComponent, "nz-dropdown-context", ["nzDropdownContext"], {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJvcGRvd24tY29udGV4dC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsibnotZHJvcGRvd24tY29udGV4dC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBV0E7Ozs7Ozs7Ozs7Ozs7OztBQWFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcbmltcG9ydCB7IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uRGVzdHJveSwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBOekRyb3Bkb3duU2VydmljZSB9IGZyb20gJy4vbnotZHJvcGRvd24uc2VydmljZSc7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE56RHJvcGRvd25Db250ZXh0Q29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICAgIHByaXZhdGUgY2RyO1xyXG4gICAgb3BlbjogYm9vbGVhbjtcclxuICAgIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICAgIGRyb3BEb3duUG9zaXRpb246ICd0b3AnIHwgJ2JvdHRvbSc7XHJcbiAgICBwcml2YXRlIGNvbnRyb2w7XHJcbiAgICBwcml2YXRlIGRlc3Ryb3kkO1xyXG4gICAgaW5pdChvcGVuOiBib29sZWFuLCB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8dm9pZD4sIHBvc2l0aW9uQ2hhbmdlczogT2JzZXJ2YWJsZTxDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2U+LCBjb250cm9sOiBOekRyb3Bkb3duU2VydmljZSk6IHZvaWQ7XHJcbiAgICBjbG9zZSgpOiB2b2lkO1xyXG4gICAgYWZ0ZXJBbmltYXRpb24oKTogdm9pZDtcclxuICAgIGNvbnN0cnVjdG9yKGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpO1xyXG4gICAgLyoqIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzE0ODQyICoqL1xyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcclxufVxyXG4iXX0=
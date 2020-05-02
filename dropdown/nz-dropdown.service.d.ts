/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/** keep track https://github.com/angular/material2/issues/5007 **/
import { Overlay } from '@angular/cdk/overlay';
import { TemplateRef } from '@angular/core';
import { NzDropdownContextComponent } from './nz-dropdown-context.component';
import * as ɵngcc0 from '@angular/core';
export declare class NzDropdownService {
    private overlay;
    private overlayRef;
    constructor(overlay: Overlay);
    create($event: MouseEvent, templateRef: TemplateRef<void>): NzDropdownContextComponent;
    dispose(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzDropdownService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NzDropdownService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJvcGRvd24uc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJuei1kcm9wZG93bi5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQVdBOzs7Ozs7OztBQU1BIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcbi8qKiBrZWVwIHRyYWNrIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL21hdGVyaWFsMi9pc3N1ZXMvNTAwNyAqKi9cclxuaW1wb3J0IHsgT3ZlcmxheSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpEcm9wZG93bkNvbnRleHRDb21wb25lbnQgfSBmcm9tICcuL256LWRyb3Bkb3duLWNvbnRleHQuY29tcG9uZW50JztcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTnpEcm9wZG93blNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBvdmVybGF5O1xyXG4gICAgcHJpdmF0ZSBvdmVybGF5UmVmO1xyXG4gICAgY29uc3RydWN0b3Iob3ZlcmxheTogT3ZlcmxheSk7XHJcbiAgICBjcmVhdGUoJGV2ZW50OiBNb3VzZUV2ZW50LCB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8dm9pZD4pOiBOekRyb3Bkb3duQ29udGV4dENvbXBvbmVudDtcclxuICAgIGRpc3Bvc2UoKTogdm9pZDtcclxufVxyXG4iXX0=
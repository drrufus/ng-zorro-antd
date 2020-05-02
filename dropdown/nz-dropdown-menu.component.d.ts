/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AfterContentInit, ChangeDetectorRef, ElementRef, Injector, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { NzMenuBaseService, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import { NzMenuDropdownService } from './nz-menu-dropdown.service';
import * as ɵngcc0 from '@angular/core';
export declare type NzPlacementType = 'bottomLeft' | 'bottomCenter' | 'bottomRight' | 'topLeft' | 'topCenter' | 'topRight';
export declare function dropdownMenuServiceFactory(injector: Injector): NzMenuBaseService;
export declare class NzDropdownMenuComponent implements AfterContentInit {
    private cdr;
    private elementRef;
    private renderer;
    viewContainerRef: ViewContainerRef;
    nzMenuDropdownService: NzMenuDropdownService;
    noAnimation?: NzNoAnimationDirective | undefined;
    open: boolean;
    triggerWidth: number;
    dropDownPosition: 'top' | 'center' | 'bottom';
    visible$: Subject<boolean>;
    nzTrigger: 'click' | 'hover';
    nzPlacement: NzPlacementType;
    nzOverlayClassName: string;
    nzOverlayStyle: {
        [key: string]: string;
    };
    nzTableFilter: boolean;
    templateRef: TemplateRef<any>;
    setVisibleStateWhen(visible: boolean, trigger?: 'click' | 'hover' | 'all'): void;
    setValue<T extends keyof NzDropdownMenuComponent>(key: T, value: this[T]): void;
    constructor(cdr: ChangeDetectorRef, elementRef: ElementRef, renderer: Renderer2, viewContainerRef: ViewContainerRef, nzMenuDropdownService: NzMenuDropdownService, noAnimation?: NzNoAnimationDirective | undefined);
    ngAfterContentInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzDropdownMenuComponent, [null, null, null, null, null, { optional: true; host: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzDropdownMenuComponent, "nz-dropdown-menu", ["nzDropdownMenu"], {}, {}, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJvcGRvd24tbWVudS5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsibnotZHJvcGRvd24tbWVudS5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5pbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBDaGFuZ2VEZXRlY3RvclJlZiwgRWxlbWVudFJlZiwgSW5qZWN0b3IsIFJlbmRlcmVyMiwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpNZW51QmFzZVNlcnZpY2UsIE56Tm9BbmltYXRpb25EaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE56TWVudURyb3Bkb3duU2VydmljZSB9IGZyb20gJy4vbnotbWVudS1kcm9wZG93bi5zZXJ2aWNlJztcclxuZXhwb3J0IGRlY2xhcmUgdHlwZSBOelBsYWNlbWVudFR5cGUgPSAnYm90dG9tTGVmdCcgfCAnYm90dG9tQ2VudGVyJyB8ICdib3R0b21SaWdodCcgfCAndG9wTGVmdCcgfCAndG9wQ2VudGVyJyB8ICd0b3BSaWdodCc7XHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIGRyb3Bkb3duTWVudVNlcnZpY2VGYWN0b3J5KGluamVjdG9yOiBJbmplY3Rvcik6IE56TWVudUJhc2VTZXJ2aWNlO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOekRyb3Bkb3duTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xyXG4gICAgcHJpdmF0ZSBjZHI7XHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY7XHJcbiAgICBwcml2YXRlIHJlbmRlcmVyO1xyXG4gICAgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZjtcclxuICAgIG56TWVudURyb3Bkb3duU2VydmljZTogTnpNZW51RHJvcGRvd25TZXJ2aWNlO1xyXG4gICAgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIHwgdW5kZWZpbmVkO1xyXG4gICAgb3BlbjogYm9vbGVhbjtcclxuICAgIHRyaWdnZXJXaWR0aDogbnVtYmVyO1xyXG4gICAgZHJvcERvd25Qb3NpdGlvbjogJ3RvcCcgfCAnY2VudGVyJyB8ICdib3R0b20nO1xyXG4gICAgdmlzaWJsZSQ6IFN1YmplY3Q8Ym9vbGVhbj47XHJcbiAgICBuelRyaWdnZXI6ICdjbGljaycgfCAnaG92ZXInO1xyXG4gICAgbnpQbGFjZW1lbnQ6IE56UGxhY2VtZW50VHlwZTtcclxuICAgIG56T3ZlcmxheUNsYXNzTmFtZTogc3RyaW5nO1xyXG4gICAgbnpPdmVybGF5U3R5bGU6IHtcclxuICAgICAgICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XHJcbiAgICB9O1xyXG4gICAgbnpUYWJsZUZpbHRlcjogYm9vbGVhbjtcclxuICAgIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gICAgc2V0VmlzaWJsZVN0YXRlV2hlbih2aXNpYmxlOiBib29sZWFuLCB0cmlnZ2VyPzogJ2NsaWNrJyB8ICdob3ZlcicgfCAnYWxsJyk6IHZvaWQ7XHJcbiAgICBzZXRWYWx1ZTxUIGV4dGVuZHMga2V5b2YgTnpEcm9wZG93bk1lbnVDb21wb25lbnQ+KGtleTogVCwgdmFsdWU6IHRoaXNbVF0pOiB2b2lkO1xyXG4gICAgY29uc3RydWN0b3IoY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZiwgbnpNZW51RHJvcGRvd25TZXJ2aWNlOiBOek1lbnVEcm9wZG93blNlcnZpY2UsIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSB8IHVuZGVmaW5lZCk7XHJcbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZDtcclxufVxyXG4iXX0=
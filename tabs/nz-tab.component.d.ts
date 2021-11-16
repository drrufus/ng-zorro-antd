/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, EventEmitter, OnChanges, OnDestroy, Renderer2, SimpleChanges, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
import { NzTabLinkDirective } from './nz-tab-link.directive';
import * as ɵngcc0 from '@angular/core';
export declare class NzTabComponent implements OnChanges, OnDestroy {
    elementRef: ElementRef;
    private renderer;
    position: number | null;
    origin: number | null;
    isActive: boolean;
    readonly stateChanges: Subject<void>;
    content: TemplateRef<void>;
    title: TemplateRef<void>;
    template: TemplateRef<void>;
    linkDirective: NzTabLinkDirective;
    nzTitle: string | TemplateRef<void>;
    nzTitleAriaLabel: string | null;
    nzRouterIdentifier: string;
    nzForceRender: boolean;
    nzDisabled: boolean;
    readonly nzClick: EventEmitter<void>;
    readonly nzSelect: EventEmitter<void>;
    readonly nzDeselect: EventEmitter<void>;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzTabComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzTabComponent, "nz-tab", ["nzTab"], { "nzTitleAriaLabel": "nzTitleAriaLabel"; "nzForceRender": "nzForceRender"; "nzDisabled": "nzDisabled"; "nzTitle": "nzTitle"; "nzRouterIdentifier": "nzRouterIdentifier"; }, { "nzClick": "nzClick"; "nzSelect": "nzSelect"; "nzDeselect": "nzDeselect"; }, ["template", "linkDirective"], ["[nz-tab-link]", "*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFiLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJuei10YWIuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0FBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5pbXBvcnQgeyBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXMsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTnpUYWJMaW5rRGlyZWN0aXZlIH0gZnJvbSAnLi9uei10YWItbGluay5kaXJlY3RpdmUnO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOelRhYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XHJcbiAgICBwcml2YXRlIHJlbmRlcmVyO1xyXG4gICAgcG9zaXRpb246IG51bWJlciB8IG51bGw7XHJcbiAgICBvcmlnaW46IG51bWJlciB8IG51bGw7XHJcbiAgICBpc0FjdGl2ZTogYm9vbGVhbjtcclxuICAgIHJlYWRvbmx5IHN0YXRlQ2hhbmdlczogU3ViamVjdDx2b2lkPjtcclxuICAgIGNvbnRlbnQ6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gICAgdGl0bGU6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gICAgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gICAgbGlua0RpcmVjdGl2ZTogTnpUYWJMaW5rRGlyZWN0aXZlO1xyXG4gICAgbnpUaXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgICBuelRpdGxlQXJpYUxhYmVsOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgbnpSb3V0ZXJJZGVudGlmaWVyOiBzdHJpbmc7XHJcbiAgICBuekZvcmNlUmVuZGVyOiBib29sZWFuO1xyXG4gICAgbnpEaXNhYmxlZDogYm9vbGVhbjtcclxuICAgIHJlYWRvbmx5IG56Q2xpY2s6IEV2ZW50RW1pdHRlcjx2b2lkPjtcclxuICAgIHJlYWRvbmx5IG56U2VsZWN0OiBFdmVudEVtaXR0ZXI8dm9pZD47XHJcbiAgICByZWFkb25seSBuekRlc2VsZWN0OiBFdmVudEVtaXR0ZXI8dm9pZD47XHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCByZW5kZXJlcjogUmVuZGVyZXIyKTtcclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcclxufVxyXG4iXX0=
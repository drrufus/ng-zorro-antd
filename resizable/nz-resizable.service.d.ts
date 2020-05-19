/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { NgZone, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { NzResizeHandleMouseDownEvent } from './nz-resize-handle.component';
import * as ɵngcc0 from '@angular/core';
export declare class NzResizableService implements OnDestroy {
    private ngZone;
    private document;
    private listeners;
    handleMouseDown$: Subject<NzResizeHandleMouseDownEvent>;
    documentMouseUp$: Subject<MouseEvent | TouchEvent>;
    documentMouseMove$: Subject<MouseEvent | TouchEvent>;
    mouseEntered$: Subject<boolean>;
    constructor(ngZone: NgZone, document: any);
    startResizing(event: MouseEvent | TouchEvent): void;
    private clearListeners;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzResizableService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NzResizableService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmVzaXphYmxlLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsibnotcmVzaXphYmxlLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7QUFVQTs7Ozs7Ozs7Ozs7Ozs7QUFZQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5pbXBvcnQgeyBOZ1pvbmUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE56UmVzaXplSGFuZGxlTW91c2VEb3duRXZlbnQgfSBmcm9tICcuL256LXJlc2l6ZS1oYW5kbGUuY29tcG9uZW50JztcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTnpSZXNpemFibGVTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICAgIHByaXZhdGUgbmdab25lO1xyXG4gICAgcHJpdmF0ZSBkb2N1bWVudDtcclxuICAgIHByaXZhdGUgbGlzdGVuZXJzO1xyXG4gICAgaGFuZGxlTW91c2VEb3duJDogU3ViamVjdDxOelJlc2l6ZUhhbmRsZU1vdXNlRG93bkV2ZW50PjtcclxuICAgIGRvY3VtZW50TW91c2VVcCQ6IFN1YmplY3Q8TW91c2VFdmVudCB8IFRvdWNoRXZlbnQ+O1xyXG4gICAgZG9jdW1lbnRNb3VzZU1vdmUkOiBTdWJqZWN0PE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50PjtcclxuICAgIG1vdXNlRW50ZXJlZCQ6IFN1YmplY3Q8Ym9vbGVhbj47XHJcbiAgICBjb25zdHJ1Y3RvcihuZ1pvbmU6IE5nWm9uZSwgZG9jdW1lbnQ6IGFueSk7XHJcbiAgICBzdGFydFJlc2l6aW5nKGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCk6IHZvaWQ7XHJcbiAgICBwcml2YXRlIGNsZWFyTGlzdGVuZXJzO1xyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcclxufVxyXG4iXX0=
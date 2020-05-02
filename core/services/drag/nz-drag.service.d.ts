/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { RendererFactory2 } from '@angular/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
interface Point {
    x: number;
    y: number;
}
declare type Delta = Point;
/**
 * This module provide a global dragging service to other components.
 */
export declare class NzDragService {
    private draggingThreshold;
    private currentDraggingSequence;
    private currentStartingPoint;
    private handleRegistry;
    private renderer;
    constructor(rendererFactory2: RendererFactory2);
    requestDraggingSequence(event: MouseEvent | TouchEvent): Observable<Delta>;
    private registerDraggingHandler;
    private teardownDraggingSequence;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzDragService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NzDragService>;
}
export {};

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJhZy5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbIm56LWRyYWcuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcbmltcG9ydCB7IFJlbmRlcmVyRmFjdG9yeTIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbnRlcmZhY2UgUG9pbnQge1xyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG59XHJcbmRlY2xhcmUgdHlwZSBEZWx0YSA9IFBvaW50O1xyXG4vKipcclxuICogVGhpcyBtb2R1bGUgcHJvdmlkZSBhIGdsb2JhbCBkcmFnZ2luZyBzZXJ2aWNlIHRvIG90aGVyIGNvbXBvbmVudHMuXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOekRyYWdTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgZHJhZ2dpbmdUaHJlc2hvbGQ7XHJcbiAgICBwcml2YXRlIGN1cnJlbnREcmFnZ2luZ1NlcXVlbmNlO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50U3RhcnRpbmdQb2ludDtcclxuICAgIHByaXZhdGUgaGFuZGxlUmVnaXN0cnk7XHJcbiAgICBwcml2YXRlIHJlbmRlcmVyO1xyXG4gICAgY29uc3RydWN0b3IocmVuZGVyZXJGYWN0b3J5MjogUmVuZGVyZXJGYWN0b3J5Mik7XHJcbiAgICByZXF1ZXN0RHJhZ2dpbmdTZXF1ZW5jZShldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpOiBPYnNlcnZhYmxlPERlbHRhPjtcclxuICAgIHByaXZhdGUgcmVnaXN0ZXJEcmFnZ2luZ0hhbmRsZXI7XHJcbiAgICBwcml2YXRlIHRlYXJkb3duRHJhZ2dpbmdTZXF1ZW5jZTtcclxufVxyXG5leHBvcnQge307XHJcbiJdfQ==
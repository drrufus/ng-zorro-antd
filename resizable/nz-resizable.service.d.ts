import { NgZone, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { NzResizeHandleMouseDownEvent } from './nz-resize-handle.component';
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDef<NzResizableService>;
    static ɵprov: i0.ɵɵInjectableDef<NzResizableService>;
}

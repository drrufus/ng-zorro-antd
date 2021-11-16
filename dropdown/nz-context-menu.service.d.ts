/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/** keep track https://github.com/angular/material2/issues/5007 **/
import { Overlay } from '@angular/cdk/overlay';
import { NzDropdownMenuComponent } from './nz-dropdown-menu.component';
import * as ɵngcc0 from '@angular/core';
export declare class NzContextMenuService {
    private overlay;
    private overlayRef;
    private nzDropdownMenuComponent;
    private clickOutsideSubscription;
    private clickMenuSubscription;
    private positionSubscription;
    constructor(overlay: Overlay);
    create($event: MouseEvent, nzDropdownMenuComponent: NzDropdownMenuComponent): void;
    close(): void;
    private handleClickOutside;
    private attachTemplatePortal;
    private setOpenState;
    private getOverlayConfig;
    private generatePositionStrategy;
    private subscribeToPositions;
    private createOverlay;
    private updatePosition;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzContextMenuService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NzContextMenuService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29udGV4dC1tZW51LnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsibnotY29udGV4dC1tZW51LnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7QUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuLyoqIGtlZXAgdHJhY2sgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvbWF0ZXJpYWwyL2lzc3Vlcy81MDA3ICoqL1xyXG5pbXBvcnQgeyBPdmVybGF5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBOekRyb3Bkb3duTWVudUNvbXBvbmVudCB9IGZyb20gJy4vbnotZHJvcGRvd24tbWVudS5jb21wb25lbnQnO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOekNvbnRleHRNZW51U2VydmljZSB7XHJcbiAgICBwcml2YXRlIG92ZXJsYXk7XHJcbiAgICBwcml2YXRlIG92ZXJsYXlSZWY7XHJcbiAgICBwcml2YXRlIG56RHJvcGRvd25NZW51Q29tcG9uZW50O1xyXG4gICAgcHJpdmF0ZSBjbGlja091dHNpZGVTdWJzY3JpcHRpb247XHJcbiAgICBwcml2YXRlIGNsaWNrTWVudVN1YnNjcmlwdGlvbjtcclxuICAgIHByaXZhdGUgcG9zaXRpb25TdWJzY3JpcHRpb247XHJcbiAgICBjb25zdHJ1Y3RvcihvdmVybGF5OiBPdmVybGF5KTtcclxuICAgIGNyZWF0ZSgkZXZlbnQ6IE1vdXNlRXZlbnQsIG56RHJvcGRvd25NZW51Q29tcG9uZW50OiBOekRyb3Bkb3duTWVudUNvbXBvbmVudCk6IHZvaWQ7XHJcbiAgICBjbG9zZSgpOiB2b2lkO1xyXG4gICAgcHJpdmF0ZSBoYW5kbGVDbGlja091dHNpZGU7XHJcbiAgICBwcml2YXRlIGF0dGFjaFRlbXBsYXRlUG9ydGFsO1xyXG4gICAgcHJpdmF0ZSBzZXRPcGVuU3RhdGU7XHJcbiAgICBwcml2YXRlIGdldE92ZXJsYXlDb25maWc7XHJcbiAgICBwcml2YXRlIGdlbmVyYXRlUG9zaXRpb25TdHJhdGVneTtcclxuICAgIHByaXZhdGUgc3Vic2NyaWJlVG9Qb3NpdGlvbnM7XHJcbiAgICBwcml2YXRlIGNyZWF0ZU92ZXJsYXk7XHJcbiAgICBwcml2YXRlIHVwZGF0ZVBvc2l0aW9uO1xyXG59XHJcbiJdfQ==
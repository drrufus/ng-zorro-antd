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
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDef<NzContextMenuService>;
    static ɵprov: i0.ɵɵInjectableDef<NzContextMenuService>;
}

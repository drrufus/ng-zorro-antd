/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ComponentFactory, ComponentFactoryResolver, ElementRef, Renderer2, ViewContainerRef } from '@angular/core';
import { NzNoAnimationDirective, NzTSType } from 'ng-zorro-antd/core';
import { NzTooltipBaseComponentLegacy } from './base/nz-tooltip-base-legacy.component';
import { NzTooltipBaseDirective } from './base/nz-tooltip-base.directive';
import { NzToolTipComponent } from './nz-tooltip.component';
import { NzTooltipTrigger } from './nz-tooltip.definitions';
import * as ɵngcc0 from '@angular/core';
export declare class NzTooltipDirective extends NzTooltipBaseDirective {
    /**
     * The title that should have highest priority.
     */
    specificTitle: NzTSType;
    /**
     * Use the directive's name as the title that have priority in the second place.
     */
    directiveNameTitle: NzTSType | null;
    specificTrigger: NzTooltipTrigger;
    specificPlacement: string;
    componentFactory: ComponentFactory<NzToolTipComponent>;
    constructor(elementRef: ElementRef, hostView: ViewContainerRef, resolver: ComponentFactoryResolver, renderer: Renderer2, _tooltip?: NzTooltipBaseComponentLegacy, noAnimation?: NzNoAnimationDirective);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzTooltipDirective, [null, null, null, null, { optional: true; }, { optional: true; host: true; }]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NzTooltipDirective, "[nz-tooltip]", ["nzTooltip"], { "specificTitle": "nzTooltipTitle"; "directiveNameTitle": "nz-tooltip"; "specificTrigger": "nzTooltipTrigger"; "specificPlacement": "nzTooltipPlacement"; }, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdG9vbHRpcC5kaXJlY3RpdmUuZC50cyIsInNvdXJjZXMiOlsibnotdG9vbHRpcC5kaXJlY3RpdmUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFhQTs7Ozs7Ozs7Ozs7Ozs7O0FBYUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgQ29tcG9uZW50RmFjdG9yeSwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSwgTnpUU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOelRvb2x0aXBCYXNlQ29tcG9uZW50TGVnYWN5IH0gZnJvbSAnLi9iYXNlL256LXRvb2x0aXAtYmFzZS1sZWdhY3kuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpUb29sdGlwQmFzZURpcmVjdGl2ZSB9IGZyb20gJy4vYmFzZS9uei10b29sdGlwLWJhc2UuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTnpUb29sVGlwQ29tcG9uZW50IH0gZnJvbSAnLi9uei10b29sdGlwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56VG9vbHRpcFRyaWdnZXIgfSBmcm9tICcuL256LXRvb2x0aXAuZGVmaW5pdGlvbnMnO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOelRvb2x0aXBEaXJlY3RpdmUgZXh0ZW5kcyBOelRvb2x0aXBCYXNlRGlyZWN0aXZlIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHRpdGxlIHRoYXQgc2hvdWxkIGhhdmUgaGlnaGVzdCBwcmlvcml0eS5cclxuICAgICAqL1xyXG4gICAgc3BlY2lmaWNUaXRsZTogTnpUU1R5cGU7XHJcbiAgICAvKipcclxuICAgICAqIFVzZSB0aGUgZGlyZWN0aXZlJ3MgbmFtZSBhcyB0aGUgdGl0bGUgdGhhdCBoYXZlIHByaW9yaXR5IGluIHRoZSBzZWNvbmQgcGxhY2UuXHJcbiAgICAgKi9cclxuICAgIGRpcmVjdGl2ZU5hbWVUaXRsZTogTnpUU1R5cGUgfCBudWxsO1xyXG4gICAgc3BlY2lmaWNUcmlnZ2VyOiBOelRvb2x0aXBUcmlnZ2VyO1xyXG4gICAgc3BlY2lmaWNQbGFjZW1lbnQ6IHN0cmluZztcclxuICAgIGNvbXBvbmVudEZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8TnpUb29sVGlwQ29tcG9uZW50PjtcclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIGhvc3RWaWV3OiBWaWV3Q29udGFpbmVyUmVmLCByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCByZW5kZXJlcjogUmVuZGVyZXIyLCBfdG9vbHRpcD86IE56VG9vbHRpcEJhc2VDb21wb25lbnRMZWdhY3ksIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSk7XHJcbn1cclxuIl19
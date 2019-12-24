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
import * as i0 from "@angular/core";
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
    nzRouterIdentifier: string;
    nzForceRender: boolean;
    nzDisabled: boolean;
    readonly nzClick: EventEmitter<void>;
    readonly nzSelect: EventEmitter<void>;
    readonly nzDeselect: EventEmitter<void>;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<NzTabComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NzTabComponent, "nz-tab", ["nzTab"], { 'nzTitle': "nzTitle", 'nzRouterIdentifier': "nzRouterIdentifier", 'nzForceRender': "nzForceRender", 'nzDisabled': "nzDisabled" }, { 'nzClick': "nzClick", 'nzSelect': "nzSelect", 'nzDeselect': "nzDeselect" }, ["template", "linkDirective"]>;
}

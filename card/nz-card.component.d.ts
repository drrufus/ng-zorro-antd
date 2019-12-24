/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, QueryList, Renderer2, TemplateRef } from '@angular/core';
import { NzConfigService, NzSizeDSType } from 'ng-zorro-antd/core';
import { NzCardGridDirective } from './nz-card-grid.directive';
import { NzCardTabComponent } from './nz-card-tab.component';
import * as i0 from "@angular/core";
export declare class NzCardComponent {
    nzConfigService: NzConfigService;
    nzBordered: boolean;
    nzLoading: boolean;
    nzHoverable: boolean;
    nzBodyStyle: {
        [key: string]: string;
    };
    nzCover: TemplateRef<void>;
    nzActions: Array<TemplateRef<void>>;
    nzType: string;
    nzSize: NzSizeDSType;
    nzTitle: string | TemplateRef<void>;
    nzExtra: string | TemplateRef<void>;
    tab: NzCardTabComponent;
    grids: QueryList<NzCardGridDirective>;
    constructor(nzConfigService: NzConfigService, renderer: Renderer2, elementRef: ElementRef);
    static ɵfac: i0.ɵɵFactoryDef<NzCardComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NzCardComponent, "nz-card", ["nzCard"], { 'nzBordered': "nzBordered", 'nzLoading': "nzLoading", 'nzHoverable': "nzHoverable", 'nzBodyStyle': "nzBodyStyle", 'nzCover': "nzCover", 'nzActions': "nzActions", 'nzType': "nzType", 'nzSize': "nzSize", 'nzTitle': "nzTitle", 'nzExtra': "nzExtra" }, {}, ["tab", "grids"]>;
}

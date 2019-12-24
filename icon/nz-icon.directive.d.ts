/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AfterContentChecked, ElementRef, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { IconDirective, ThemeType } from '@ant-design/icons-angular';
import { NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { NzIconService } from './nz-icon.service';
import * as i0 from "@angular/core";
/**
 * This directive extends IconDirective to provide:
 *
 * - IconFont support
 * - spinning
 * - old API compatibility
 *
 * @break-changes
 *
 * - old API compatibility, icon class names would not be supported.
 * - properties that not started with `nz`.
 */
export declare class NzIconDirective extends IconDirective implements OnInit, OnChanges, AfterContentChecked {
    iconService: NzIconService;
    renderer: Renderer2;
    private nzUpdateHostClassService;
    nzSpin: boolean;
    nzRotate: number;
    nzType: string;
    nzTheme: ThemeType;
    nzTwotoneColor: string;
    nzIconfont: string;
    private readonly el;
    type: string;
    theme: ThemeType;
    twotoneColor: string;
    private iconfont;
    private spin;
    constructor(elementRef: ElementRef, iconService: NzIconService, renderer: Renderer2, nzUpdateHostClassService: NzUpdateHostClassService);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    /**
     * If custom content is provided, try to normalize SVG elements.
     */
    ngAfterContentChecked(): void;
    /**
     * Replacement of `changeIcon` for more modifications.
     */
    private changeIcon2;
    private handleSpin;
    private handleRotate;
    private setClassName;
    private setSVGData;
    static ɵfac: i0.ɵɵFactoryDef<NzIconDirective>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<NzIconDirective, "[nz-icon]", ["nzIcon"], { 'nzSpin': "nzSpin", 'nzRotate': "nzRotate", 'nzType': "nzType", 'nzTheme': "nzTheme", 'nzTwotoneColor': "nzTwotoneColor", 'nzIconfont': "nzIconfont" }, {}, never>;
}

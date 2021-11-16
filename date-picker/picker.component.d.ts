/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CdkConnectedOverlay, CdkOverlayOrigin, ConnectedOverlayPositionChange, ConnectionPositionPair } from '@angular/cdk/overlay';
import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CandyDate } from 'ng-zorro-antd/core';
import { DateHelperService } from 'ng-zorro-antd/i18n';
import * as ɵngcc0 from '@angular/core';
export declare class NzPickerComponent implements AfterViewInit, OnChanges {
    private dateHelper;
    private changeDetector;
    noAnimation: boolean;
    isRange: boolean;
    open: boolean | undefined;
    disabled: boolean;
    placeholder: string | string[];
    allowClear: boolean;
    autoFocus: boolean;
    className: string;
    format: string;
    size: 'large' | 'small';
    style: object;
    value: CandyDate | CandyDate[] | null;
    readonly valueChange: EventEmitter<CandyDate | CandyDate[] | null>;
    readonly openChange: EventEmitter<boolean>;
    origin: CdkOverlayOrigin;
    cdkConnectedOverlay: CdkConnectedOverlay;
    pickerInput: ElementRef;
    prefixCls: string;
    animationOpenState: boolean;
    overlayOpen: boolean;
    overlayOffsetY: number;
    overlayOffsetX: number;
    overlayPositions: ConnectionPositionPair[];
    dropdownAnimation: 'top' | 'bottom';
    currentPositionX: 'start' | 'end';
    currentPositionY: 'top' | 'bottom';
    readonly realOpenState: boolean;
    constructor(dateHelper: DateHelperService, changeDetector: ChangeDetectorRef);
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    focus(): void;
    showOverlay(): void;
    hideOverlay(): void;
    onClickInputBox(): void;
    onClickBackdrop(): void;
    onOverlayDetach(): void;
    onPositionChange(position: ConnectedOverlayPositionChange): void;
    onClickClear(event: MouseEvent): void;
    getReadableValue(partType?: RangePartType): string | null;
    getPartTypeIndex(partType: RangePartType): number;
    getPlaceholder(partType?: RangePartType): string;
    isEmptyValue(value: CandyDate[] | CandyDate | null): boolean;
    isOpenHandledByUser(): boolean;
    animationStart(): void;
    animationDone(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzPickerComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzPickerComponent, "nz-picker", ["nzPicker"], { "noAnimation": "noAnimation"; "isRange": "isRange"; "open": "open"; "value": "value"; "disabled": "disabled"; "placeholder": "placeholder"; "allowClear": "allowClear"; "autoFocus": "autoFocus"; "className": "className"; "format": "format"; "size": "size"; "style": "style"; }, { "valueChange": "valueChange"; "openChange": "openChange"; }, never, ["*"]>;
}
export declare type RangePartType = 'left' | 'right';

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja2VyLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJwaWNrZXIuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQVdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdEQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5pbXBvcnQgeyBDZGtDb25uZWN0ZWRPdmVybGF5LCBDZGtPdmVybGF5T3JpZ2luLCBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UsIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDYW5keURhdGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRlSGVscGVyU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE56UGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcclxuICAgIHByaXZhdGUgZGF0ZUhlbHBlcjtcclxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3I7XHJcbiAgICBub0FuaW1hdGlvbjogYm9vbGVhbjtcclxuICAgIGlzUmFuZ2U6IGJvb2xlYW47XHJcbiAgICBvcGVuOiBib29sZWFuIHwgdW5kZWZpbmVkO1xyXG4gICAgZGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgICBwbGFjZWhvbGRlcjogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICBhbGxvd0NsZWFyOiBib29sZWFuO1xyXG4gICAgYXV0b0ZvY3VzOiBib29sZWFuO1xyXG4gICAgY2xhc3NOYW1lOiBzdHJpbmc7XHJcbiAgICBmb3JtYXQ6IHN0cmluZztcclxuICAgIHNpemU6ICdsYXJnZScgfCAnc21hbGwnO1xyXG4gICAgc3R5bGU6IG9iamVjdDtcclxuICAgIHZhbHVlOiBDYW5keURhdGUgfCBDYW5keURhdGVbXSB8IG51bGw7XHJcbiAgICByZWFkb25seSB2YWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPENhbmR5RGF0ZSB8IENhbmR5RGF0ZVtdIHwgbnVsbD47XHJcbiAgICByZWFkb25seSBvcGVuQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcbiAgICBvcmlnaW46IENka092ZXJsYXlPcmlnaW47XHJcbiAgICBjZGtDb25uZWN0ZWRPdmVybGF5OiBDZGtDb25uZWN0ZWRPdmVybGF5O1xyXG4gICAgcGlja2VySW5wdXQ6IEVsZW1lbnRSZWY7XHJcbiAgICBwcmVmaXhDbHM6IHN0cmluZztcclxuICAgIGFuaW1hdGlvbk9wZW5TdGF0ZTogYm9vbGVhbjtcclxuICAgIG92ZXJsYXlPcGVuOiBib29sZWFuO1xyXG4gICAgb3ZlcmxheU9mZnNldFk6IG51bWJlcjtcclxuICAgIG92ZXJsYXlPZmZzZXRYOiBudW1iZXI7XHJcbiAgICBvdmVybGF5UG9zaXRpb25zOiBDb25uZWN0aW9uUG9zaXRpb25QYWlyW107XHJcbiAgICBkcm9wZG93bkFuaW1hdGlvbjogJ3RvcCcgfCAnYm90dG9tJztcclxuICAgIGN1cnJlbnRQb3NpdGlvblg6ICdzdGFydCcgfCAnZW5kJztcclxuICAgIGN1cnJlbnRQb3NpdGlvblk6ICd0b3AnIHwgJ2JvdHRvbSc7XHJcbiAgICByZWFkb25seSByZWFsT3BlblN0YXRlOiBib29sZWFuO1xyXG4gICAgY29uc3RydWN0b3IoZGF0ZUhlbHBlcjogRGF0ZUhlbHBlclNlcnZpY2UsIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZik7XHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZDtcclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xyXG4gICAgZm9jdXMoKTogdm9pZDtcclxuICAgIHNob3dPdmVybGF5KCk6IHZvaWQ7XHJcbiAgICBoaWRlT3ZlcmxheSgpOiB2b2lkO1xyXG4gICAgb25DbGlja0lucHV0Qm94KCk6IHZvaWQ7XHJcbiAgICBvbkNsaWNrQmFja2Ryb3AoKTogdm9pZDtcclxuICAgIG9uT3ZlcmxheURldGFjaCgpOiB2b2lkO1xyXG4gICAgb25Qb3NpdGlvbkNoYW5nZShwb3NpdGlvbjogQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlKTogdm9pZDtcclxuICAgIG9uQ2xpY2tDbGVhcihldmVudDogTW91c2VFdmVudCk6IHZvaWQ7XHJcbiAgICBnZXRSZWFkYWJsZVZhbHVlKHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IHN0cmluZyB8IG51bGw7XHJcbiAgICBnZXRQYXJ0VHlwZUluZGV4KHBhcnRUeXBlOiBSYW5nZVBhcnRUeXBlKTogbnVtYmVyO1xyXG4gICAgZ2V0UGxhY2Vob2xkZXIocGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogc3RyaW5nO1xyXG4gICAgaXNFbXB0eVZhbHVlKHZhbHVlOiBDYW5keURhdGVbXSB8IENhbmR5RGF0ZSB8IG51bGwpOiBib29sZWFuO1xyXG4gICAgaXNPcGVuSGFuZGxlZEJ5VXNlcigpOiBib29sZWFuO1xyXG4gICAgYW5pbWF0aW9uU3RhcnQoKTogdm9pZDtcclxuICAgIGFuaW1hdGlvbkRvbmUoKTogdm9pZDtcclxufVxyXG5leHBvcnQgZGVjbGFyZSB0eXBlIFJhbmdlUGFydFR5cGUgPSAnbGVmdCcgfCAncmlnaHQnO1xyXG4iXX0=
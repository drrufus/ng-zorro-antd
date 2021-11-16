/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Overlay } from '@angular/cdk/overlay';
import { ChangeDetectorRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { NzMentionTriggerDirective } from './nz-mention-trigger';
import { NzMentionService } from './nz-mention.service';
import * as ɵngcc0 from '@angular/core';
export interface MentionOnSearchTypes {
    value: string;
    prefix: string;
}
export interface Mention {
    startPos: number;
    endPos: number;
    mention: string;
}
export declare type MentionPlacement = 'top' | 'bottom';
export declare class NzMentionComponent implements OnDestroy, OnInit, OnChanges {
    private ngDocument;
    private changeDetectorRef;
    private overlay;
    private viewContainerRef;
    private nzMentionService;
    nzValueWith: (value: any) => string;
    nzPrefix: string | string[];
    nzLoading: boolean;
    nzNotFoundContent: string;
    nzPlacement: MentionPlacement;
    nzSuggestions: string[];
    readonly nzOnSelect: EventEmitter<string | {}>;
    readonly nzOnSearchChange: EventEmitter<MentionOnSearchTypes>;
    trigger: NzMentionTriggerDirective;
    suggestionsTemp: TemplateRef<void>;
    suggestionChild: TemplateRef<{
        $implicit: any;
    }>;
    isOpen: boolean;
    filteredSuggestions: string[];
    suggestionTemplate: TemplateRef<{
        $implicit: any;
    }> | null;
    activeIndex: number;
    private previousValue;
    private cursorMention;
    private cursorMentionStart;
    private cursorMentionEnd;
    private overlayRef;
    private portal;
    private positionStrategy;
    private overlayBackdropClickSubscription;
    private readonly triggerNativeElement;
    constructor(ngDocument: any, // tslint:disable-line:no-any
    changeDetectorRef: ChangeDetectorRef, overlay: Overlay, viewContainerRef: ViewContainerRef, nzMentionService: NzMentionService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    closeDropdown(): void;
    openDropdown(): void;
    getMentions(): string[];
    selectSuggestion(suggestion: string | {}): void;
    private handleInput;
    private handleKeydown;
    private handleClick;
    private bindTriggerEvents;
    private suggestionsFilter;
    private resetDropdown;
    private setNextItemActive;
    private setPreviousItemActive;
    private canOpen;
    private resetCursorMention;
    private updatePositions;
    private subscribeOverlayBackdropClick;
    private attachOverlay;
    private getOverlayConfig;
    private getOverlayPosition;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzMentionComponent, [{ optional: true; }, null, null, null, null]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzMentionComponent, "nz-mention", ["nzMention"], { "nzValueWith": "nzValueWith"; "nzPrefix": "nzPrefix"; "nzLoading": "nzLoading"; "nzNotFoundContent": "nzNotFoundContent"; "nzPlacement": "nzPlacement"; "nzSuggestions": "nzSuggestions"; }, { "nzOnSelect": "nzOnSelect"; "nzOnSearchChange": "nzOnSearchChange"; }, ["suggestionChild"], ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudGlvbi5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsibnotbWVudGlvbi5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvRUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgT3ZlcmxheSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcywgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpNZW50aW9uVHJpZ2dlckRpcmVjdGl2ZSB9IGZyb20gJy4vbnotbWVudGlvbi10cmlnZ2VyJztcclxuaW1wb3J0IHsgTnpNZW50aW9uU2VydmljZSB9IGZyb20gJy4vbnotbWVudGlvbi5zZXJ2aWNlJztcclxuZXhwb3J0IGludGVyZmFjZSBNZW50aW9uT25TZWFyY2hUeXBlcyB7XHJcbiAgICB2YWx1ZTogc3RyaW5nO1xyXG4gICAgcHJlZml4OiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBNZW50aW9uIHtcclxuICAgIHN0YXJ0UG9zOiBudW1iZXI7XHJcbiAgICBlbmRQb3M6IG51bWJlcjtcclxuICAgIG1lbnRpb246IHN0cmluZztcclxufVxyXG5leHBvcnQgZGVjbGFyZSB0eXBlIE1lbnRpb25QbGFjZW1lbnQgPSAndG9wJyB8ICdib3R0b20nO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOek1lbnRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICAgIHByaXZhdGUgbmdEb2N1bWVudDtcclxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY7XHJcbiAgICBwcml2YXRlIG92ZXJsYXk7XHJcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY7XHJcbiAgICBwcml2YXRlIG56TWVudGlvblNlcnZpY2U7XHJcbiAgICBuelZhbHVlV2l0aDogKHZhbHVlOiBhbnkpID0+IHN0cmluZztcclxuICAgIG56UHJlZml4OiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgIG56TG9hZGluZzogYm9vbGVhbjtcclxuICAgIG56Tm90Rm91bmRDb250ZW50OiBzdHJpbmc7XHJcbiAgICBuelBsYWNlbWVudDogTWVudGlvblBsYWNlbWVudDtcclxuICAgIG56U3VnZ2VzdGlvbnM6IHN0cmluZ1tdO1xyXG4gICAgcmVhZG9ubHkgbnpPblNlbGVjdDogRXZlbnRFbWl0dGVyPHN0cmluZyB8IHt9PjtcclxuICAgIHJlYWRvbmx5IG56T25TZWFyY2hDaGFuZ2U6IEV2ZW50RW1pdHRlcjxNZW50aW9uT25TZWFyY2hUeXBlcz47XHJcbiAgICB0cmlnZ2VyOiBOek1lbnRpb25UcmlnZ2VyRGlyZWN0aXZlO1xyXG4gICAgc3VnZ2VzdGlvbnNUZW1wOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICAgIHN1Z2dlc3Rpb25DaGlsZDogVGVtcGxhdGVSZWY8e1xyXG4gICAgICAgICRpbXBsaWNpdDogYW55O1xyXG4gICAgfT47XHJcbiAgICBpc09wZW46IGJvb2xlYW47XHJcbiAgICBmaWx0ZXJlZFN1Z2dlc3Rpb25zOiBzdHJpbmdbXTtcclxuICAgIHN1Z2dlc3Rpb25UZW1wbGF0ZTogVGVtcGxhdGVSZWY8e1xyXG4gICAgICAgICRpbXBsaWNpdDogYW55O1xyXG4gICAgfT4gfCBudWxsO1xyXG4gICAgYWN0aXZlSW5kZXg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgcHJldmlvdXNWYWx1ZTtcclxuICAgIHByaXZhdGUgY3Vyc29yTWVudGlvbjtcclxuICAgIHByaXZhdGUgY3Vyc29yTWVudGlvblN0YXJ0O1xyXG4gICAgcHJpdmF0ZSBjdXJzb3JNZW50aW9uRW5kO1xyXG4gICAgcHJpdmF0ZSBvdmVybGF5UmVmO1xyXG4gICAgcHJpdmF0ZSBwb3J0YWw7XHJcbiAgICBwcml2YXRlIHBvc2l0aW9uU3RyYXRlZ3k7XHJcbiAgICBwcml2YXRlIG92ZXJsYXlCYWNrZHJvcENsaWNrU3Vic2NyaXB0aW9uO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSB0cmlnZ2VyTmF0aXZlRWxlbWVudDtcclxuICAgIGNvbnN0cnVjdG9yKG5nRG9jdW1lbnQ6IGFueSwgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcclxuICAgIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgb3ZlcmxheTogT3ZlcmxheSwgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZiwgbnpNZW50aW9uU2VydmljZTogTnpNZW50aW9uU2VydmljZSk7XHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xyXG4gICAgY2xvc2VEcm9wZG93bigpOiB2b2lkO1xyXG4gICAgb3BlbkRyb3Bkb3duKCk6IHZvaWQ7XHJcbiAgICBnZXRNZW50aW9ucygpOiBzdHJpbmdbXTtcclxuICAgIHNlbGVjdFN1Z2dlc3Rpb24oc3VnZ2VzdGlvbjogc3RyaW5nIHwge30pOiB2b2lkO1xyXG4gICAgcHJpdmF0ZSBoYW5kbGVJbnB1dDtcclxuICAgIHByaXZhdGUgaGFuZGxlS2V5ZG93bjtcclxuICAgIHByaXZhdGUgaGFuZGxlQ2xpY2s7XHJcbiAgICBwcml2YXRlIGJpbmRUcmlnZ2VyRXZlbnRzO1xyXG4gICAgcHJpdmF0ZSBzdWdnZXN0aW9uc0ZpbHRlcjtcclxuICAgIHByaXZhdGUgcmVzZXREcm9wZG93bjtcclxuICAgIHByaXZhdGUgc2V0TmV4dEl0ZW1BY3RpdmU7XHJcbiAgICBwcml2YXRlIHNldFByZXZpb3VzSXRlbUFjdGl2ZTtcclxuICAgIHByaXZhdGUgY2FuT3BlbjtcclxuICAgIHByaXZhdGUgcmVzZXRDdXJzb3JNZW50aW9uO1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVQb3NpdGlvbnM7XHJcbiAgICBwcml2YXRlIHN1YnNjcmliZU92ZXJsYXlCYWNrZHJvcENsaWNrO1xyXG4gICAgcHJpdmF0ZSBhdHRhY2hPdmVybGF5O1xyXG4gICAgcHJpdmF0ZSBnZXRPdmVybGF5Q29uZmlnO1xyXG4gICAgcHJpdmF0ZSBnZXRPdmVybGF5UG9zaXRpb247XHJcbn1cclxuIl19
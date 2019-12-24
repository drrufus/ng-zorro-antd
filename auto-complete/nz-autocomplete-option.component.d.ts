/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, ElementRef, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NzOptionSelectionChange {
    source: NzAutocompleteOptionComponent;
    isUserInput: boolean;
    constructor(source: NzAutocompleteOptionComponent, isUserInput?: boolean);
}
export declare class NzAutocompleteOptionComponent {
    private changeDetectorRef;
    private element;
    nzValue: any;
    nzLabel: string;
    nzDisabled: boolean;
    readonly selectionChange: EventEmitter<NzOptionSelectionChange>;
    active: boolean;
    selected: boolean;
    constructor(changeDetectorRef: ChangeDetectorRef, element: ElementRef);
    select(emit?: boolean): void;
    deselect(): void;
    /** Git display label */
    getLabel(): string;
    /** Set active (only styles) */
    setActiveStyles(): void;
    /** Unset active (only styles) */
    setInactiveStyles(): void;
    scrollIntoViewIfNeeded(): void;
    selectViaInteraction(): void;
    private emitSelectionChangeEvent;
    static ɵfac: i0.ɵɵFactoryDef<NzAutocompleteOptionComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NzAutocompleteOptionComponent, "nz-auto-option", ["nzAutoOption"], { 'nzValue': "nzValue", 'nzLabel': "nzLabel", 'nzDisabled': "nzDisabled" }, { 'selectionChange': "selectionChange" }, never>;
}

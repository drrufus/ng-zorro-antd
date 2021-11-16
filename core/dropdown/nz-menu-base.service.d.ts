/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { BehaviorSubject, Subject } from 'rxjs';
import { NzDirectionVHIType } from '../types';
import * as ɵngcc0 from '@angular/core';
export declare class NzMenuBaseService {
    isInDropDown: boolean;
    menuItemClick$: Subject<any>;
    theme$: Subject<unknown>;
    mode$: BehaviorSubject<NzDirectionVHIType>;
    inlineIndent$: BehaviorSubject<number>;
    theme: 'light' | 'dark';
    mode: NzDirectionVHIType;
    inlineIndent: number;
    menuOpen$: BehaviorSubject<boolean>;
    onMenuItemClick(menu: any): void;
    setMode(mode: NzDirectionVHIType): void;
    setTheme(theme: 'light' | 'dark'): void;
    setInlineIndent(indent: number): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzMenuBaseService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NzMenuBaseService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudS1iYXNlLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsibnotbWVudS1iYXNlLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQVNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBY0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE56RGlyZWN0aW9uVkhJVHlwZSB9IGZyb20gJy4uL3R5cGVzJztcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTnpNZW51QmFzZVNlcnZpY2Uge1xyXG4gICAgaXNJbkRyb3BEb3duOiBib29sZWFuO1xyXG4gICAgbWVudUl0ZW1DbGljayQ6IFN1YmplY3Q8YW55PjtcclxuICAgIHRoZW1lJDogU3ViamVjdDx1bmtub3duPjtcclxuICAgIG1vZGUkOiBCZWhhdmlvclN1YmplY3Q8TnpEaXJlY3Rpb25WSElUeXBlPjtcclxuICAgIGlubGluZUluZGVudCQ6IEJlaGF2aW9yU3ViamVjdDxudW1iZXI+O1xyXG4gICAgdGhlbWU6ICdsaWdodCcgfCAnZGFyayc7XHJcbiAgICBtb2RlOiBOekRpcmVjdGlvblZISVR5cGU7XHJcbiAgICBpbmxpbmVJbmRlbnQ6IG51bWJlcjtcclxuICAgIG1lbnVPcGVuJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+O1xyXG4gICAgb25NZW51SXRlbUNsaWNrKG1lbnU6IGFueSk6IHZvaWQ7XHJcbiAgICBzZXRNb2RlKG1vZGU6IE56RGlyZWN0aW9uVkhJVHlwZSk6IHZvaWQ7XHJcbiAgICBzZXRUaGVtZSh0aGVtZTogJ2xpZ2h0JyB8ICdkYXJrJyk6IHZvaWQ7XHJcbiAgICBzZXRJbmxpbmVJbmRlbnQoaW5kZW50OiBudW1iZXIpOiB2b2lkO1xyXG59XHJcbiJdfQ==
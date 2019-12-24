import { BehaviorSubject, Subject } from 'rxjs';
import { NzDirectionVHIType } from '../types';
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDef<NzMenuBaseService>;
    static ɵprov: i0.ɵɵInjectableDef<NzMenuBaseService>;
}

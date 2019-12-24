import { BehaviorSubject, Observable } from 'rxjs';
import { NzConfigService } from 'ng-zorro-antd/core';
import { JoinedEditorOptions, NzCodeEditorConfig } from './nz-code-editor.definitions';
import * as i0 from "@angular/core";
export declare class NzCodeEditorService {
    private readonly nzConfigService;
    private document;
    private firstEditorInitialized;
    private loaded$;
    private loadingStatus;
    private option;
    private config;
    option$: BehaviorSubject<JoinedEditorOptions>;
    constructor(nzConfigService: NzConfigService, _document: any, // tslint:disable-line no-any
    config?: NzCodeEditorConfig);
    updateDefaultOption(option: JoinedEditorOptions): void;
    private _updateDefaultOption;
    requestToInit(): Observable<JoinedEditorOptions>;
    private loadMonacoScript;
    private onLoad;
    private onInit;
    private getLatestOption;
    static ɵfac: i0.ɵɵFactoryDef<NzCodeEditorService>;
    static ɵprov: i0.ɵɵInjectableDef<NzCodeEditorService>;
}

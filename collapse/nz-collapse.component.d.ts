import { NzConfigService } from 'ng-zorro-antd/core';
import { NzCollapsePanelComponent } from './nz-collapse-panel.component';
import * as i0 from "@angular/core";
export declare class NzCollapseComponent {
    nzConfigService: NzConfigService;
    private listOfNzCollapsePanelComponent;
    nzAccordion: boolean;
    nzBordered: boolean;
    constructor(nzConfigService: NzConfigService);
    addPanel(value: NzCollapsePanelComponent): void;
    removePanel(value: NzCollapsePanelComponent): void;
    click(collapse: NzCollapsePanelComponent): void;
    static ɵfac: i0.ɵɵFactoryDef<NzCollapseComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NzCollapseComponent, "nz-collapse", ["nzCollapse"], { 'nzAccordion': "nzAccordion", 'nzBordered': "nzBordered" }, {}, never>;
}

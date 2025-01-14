/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef,
  Host,
  Input,
  Optional,
  TemplateRef,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

import { zoomBigMotion, NzNoAnimationDirective, NzTSType } from 'ng-zorro-antd/core';
import { NzTooltipBaseComponentLegacy, NzToolTipComponent } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'nz-popover',
  exportAs: 'nzPopoverComponent',
  animations: [zoomBigMotion],
  templateUrl: './nz-popover.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NzTooltipBaseComponentLegacy,
      useExisting: NzPopoverComponent
    }
  ],
  preserveWhitespaces: false,
  styles: [
    `
      .ant-popover {
        position: relative;
      }
    `
  ]
})
export class NzPopoverComponent extends NzToolTipComponent {
  _prefix = 'ant-popover-placement';

  /**
   * Use `neverUsedTemplate` to force `nzTemplate` to be catched by `nzPopoverContent`.
   */
  @Input() nzTitle: NzTSType;
  @ContentChild('neverUsedTemplate', { static: true }) nzTitleTemplate: TemplateRef<void>;

  @Input() nzContent: NzTSType;
  @ContentChild('nzTemplate', { static: true }) nzContentTemplate: TemplateRef<void>;

  @Input() nzShowPopoverCloseButton: boolean = false;
  @Input() nzPopoverCloseButtonLabel: string = 'close';
  @Input() nzPopoverForceRestoreFocus: boolean = false;

  get simpleHeader(): boolean {
    return typeof(this.nzTitle) == 'string';
  }
  
  @ViewChild('focusableHeader', { static: false }) focusableHeader: ElementRef;

  constructor(cdr: ChangeDetectorRef, @Host() @Optional() public noAnimation?: NzNoAnimationDirective) {
    super(cdr, noAnimation);
  }

  focusOnHeader(): void {
    if (this.simpleHeader && this.focusableHeader != null) {
      this.focusableHeader.nativeElement.focus();
    }
  }

  afterAppearing(): void {
    this.focusOnHeader();
  }
}

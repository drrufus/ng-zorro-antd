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
  EventEmitter,
  Host,
  Input,
  Optional,
  Output,
  TemplateRef,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

import { zoomBigMotion, InputBoolean, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { NzTooltipBaseComponentLegacy, NzTooltipTrigger, NzToolTipComponent } from 'ng-zorro-antd/tooltip';
import { ElementRef } from '@angular/core';
import { FocusTrapFactory, FocusTrap } from '@angular/cdk/a11y';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'nz-popconfirm',
  exportAs: 'nzPopconfirmComponent',
  preserveWhitespaces: false,
  animations: [zoomBigMotion],
  templateUrl: './nz-popconfirm.component.html',
  providers: [
    {
      provide: NzTooltipBaseComponentLegacy,
      useExisting: NzPopconfirmComponent
    }
  ],
  styles: [
    `
      .ant-popover {
        position: relative;
      }
    `
  ]
})
export class NzPopconfirmComponent extends NzToolTipComponent {
  @Input() nzOkText: string;
  @Input() nzOkType: string = 'primary';
  @Input() nzCancelText: string;
  @Input() @InputBoolean() nzCondition = false;
  @Input() nzIcon: string | TemplateRef<void>;

  @Output() readonly nzOnCancel: EventEmitter<void> = new EventEmitter();
  @Output() readonly nzOnConfirm: EventEmitter<void> = new EventEmitter();

  // some stuff for focus-trap (a11y):
  @ViewChild('popoverContainer', { static: false })
  popoverContainer: ElementRef;
  private focusTrap: FocusTrap | null = null;
  private previouslyFocusedElement: HTMLElement | null;

  _prefix = 'ant-popover-placement';
  _trigger: NzTooltipTrigger = 'click';
  _hasBackdrop = true;

  constructor(
    cdr: ChangeDetectorRef,
    private focusTrapFactory: FocusTrapFactory,
    @Host() @Optional() public noAnimation?: NzNoAnimationDirective,
  ) {
    super(cdr, noAnimation);
  }

  show(): void {
    if (!this.nzCondition) {
      this.previouslyFocusedElement = document.activeElement as HTMLElement;
      super.show();
      this.focusTrap = this.focusTrapFactory.create(this.popoverContainer.nativeElement);
      this.focusTrap.focusFirstTabbableElementWhenReady();
    } else {
      this.onConfirm();
    }
  }

  close(): void {
    this.focusTrap && this.focusTrap.destroy();
    super.hide();
    this.previouslyFocusedElement && this.previouslyFocusedElement.focus();
  }

  onCancel(): void {
    this.nzOnCancel.emit();
    this.close();
  }

  onConfirm(): void {
    this.nzOnConfirm.emit();
    this.close();
  }
}

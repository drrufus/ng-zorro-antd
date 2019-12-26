/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { NgModule } from '@angular/core';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { warnDeprecation, NzNoAnimationModule, NzTransButtonModule, NzWaveModule } from 'ng-zorro-antd/core';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMentionModule } from 'ng-zorro-antd/mention';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTransferModule } from 'ng-zorro-antd/transfer';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzUploadModule } from 'ng-zorro-antd/upload';
export { NzAffixComponent, NzAffixModule } from 'ng-zorro-antd/affix';
export { NzAlertComponent, NzAlertModule } from 'ng-zorro-antd/alert';
export { NzAnchorLinkComponent, NzAnchorComponent, NzAnchorModule } from 'ng-zorro-antd/anchor';
export { NzAutocompleteModule, NzAutocompleteComponent, getNzAutocompleteMissingPanelError, NZ_AUTOCOMPLETE_VALUE_ACCESSOR, NzAutocompleteTriggerDirective, NzOptionSelectionChange, NzAutocompleteOptionComponent, NzAutocompleteOptgroupComponent } from 'ng-zorro-antd/auto-complete';
export { NzAvatarComponent, NzAvatarModule } from 'ng-zorro-antd/avatar';
export { NzBackTopComponent, NzBackTopModule } from 'ng-zorro-antd/back-top';
export { NzBadgeComponent, NzBadgeModule } from 'ng-zorro-antd/badge';
export { NzBreadCrumbItemComponent, NzBreadCrumbComponent, NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
export { NzButtonComponent, NzButtonGroupComponent, NzButtonModule } from 'ng-zorro-antd/button';
export { DateTableCellComponent, DateTableComponent, MonthTableComponent, NzCalendarModule, NzCalendarComponent, NzDateCellDirective, NzMonthCellDirective, NzDateFullCellDirective, NzMonthFullCellDirective, NzCalendarHeaderComponent } from 'ng-zorro-antd/calendar';
export { NzCardGridDirective, NzCardComponent, NzCardModule, NzCardLoadingComponent, NzCardMetaComponent, NzCardTabComponent } from 'ng-zorro-antd/card';
export { NzCarouselModule, NzCarouselComponent, NzCarouselContentDirective, NZ_CAROUSEL_CUSTOM_STRATEGIES, NzCarouselBaseStrategy } from 'ng-zorro-antd/carousel';
export { isShowSearchObject, isChildOption, isParentOption, NzCascaderComponent, NzCascaderModule, NzCascaderService, NzCascaderOptionComponent } from 'ng-zorro-antd/cascader';
export { NzCheckboxComponent, NzCheckboxModule, NzCheckboxGroupComponent, NzCheckboxWrapperComponent } from 'ng-zorro-antd/checkbox';
export { NzCollapsePanelComponent, NzCollapseComponent, NzCollapseModule } from 'ng-zorro-antd/collapse';
export { NzCommentModule, NzCommentComponent, NzCommentAvatarDirective, NzCommentContentDirective, NzCommentActionHostDirective, NzCommentActionComponent } from 'ng-zorro-antd/comment';
export { NzAddOnModule, NzClassListAddDirective, NzStringTemplateOutletDirective, AnimationDuration, AnimationCurves, collapseMotion, treeCollapseMotion, fadeMotion, helpMotion, moveUpMotion, notificationMotion, slideMotion, slideAlertMotion, zoomMotion, zoomBigMotion, zoomBadgeMotion, NzNoAnimationModule, NzNoAnimationDirective, NzConnectedOverlayDirective, NzOverlayModule, getPlacementName, POSITION_MAP, DEFAULT_TOOLTIP_POSITIONS, DEFAULT_DROPDOWN_POSITIONS, DEFAULT_SUBMENU_POSITIONS, DEFAULT_MENTION_TOP_POSITIONS, DEFAULT_MENTION_BOTTOM_POSITIONS, sortRangeValue, CandyDate, timeUnits, cancelRequestAnimationFrame, reqAnimFrame, SCROLL_SERVICE_PROVIDER_FACTORY, NzScrollService, SCROLL_SERVICE_PROVIDER, NzUpdateHostClassService, NzCopyToClipboardService, NzCopyToClipboardServiceModule, NzDomEventService, NzSingletonService, NzDragService, dispatchEvent, dispatchFakeEvent, dispatchKeyboardEvent, dispatchMouseEvent, dispatchTouchEvent, createMouseEvent, createTouchEvent, createKeyboardEvent, createFakeEvent, typeInElement, wrappedErrorMessage, FakeViewportRuler, MockNgZone, NzTreeNode, NzTreeBaseService, NzTreeHigherOrderServiceToken, NzTreeBase, toArray, arraysEqual, shallowCopyArray, isNotNil, isNil, shallowEqual, isInteger, isEmpty, filterNotEmptyNode, isNonEmptyString, isTemplateRef, isComponent, toBoolean, toNumber, toCssPixel, valueFunctionProp, InputBoolean, InputCssPixel, InputNumber, silentEvent, getElementOffset, findFirstNotEmptyNode, findLastNotEmptyNode, reverseChildNodes, isTouchEvent, getEventPosition, getRegExp, getMentions, padStart, padEnd, getRepeatedElement, isPromise, getPercent, getPrecision, ensureNumberInRange, scrollIntoView, getCaretCoordinates, createDebugEle, properties, isStyleSupport, getStyleAsText, pxToNumber, measure, measureScrollbar, ensureInBounds, inNextTick, NzWaveRenderer, NZ_WAVE_GLOBAL_CONFIG_FACTORY, NZ_WAVE_GLOBAL_DEFAULT_CONFIG, NZ_WAVE_GLOBAL_CONFIG, NzWaveDirective, NzWaveModule, NzMenuBaseService, NzDropdownHigherOrderServiceToken, PREFIX, warn, warnDeprecation, log, NzBreakpoint, responsiveMap, NzTransButtonModule, NzTransButtonDirective, NzHighlightPipe, NzHighlightModule, WithConfig, NzConfigService, NZ_CONFIG, NzPipesModule, NzTimeRangePipe, NzToCssUnitPipe } from 'ng-zorro-antd/core';
export { ɵn, ɵm, ɵp, ɵd, ɵb, ɵc, ɵe, ɵf, ɵg, ɵj, ɵa, ɵi, ɵl, ɵk, ɵh, ɵo, NzDatePickerModule, NzDatePickerComponent, NzRangePickerComponent, NzMonthPickerComponent, NzWeekPickerComponent, NzYearPickerComponent } from 'ng-zorro-antd/date-picker';
export { NzDescriptionsModule, NzDescriptionsComponent, NzDescriptionsItemComponent } from 'ng-zorro-antd/descriptions';
export { NzDividerComponent, NzDividerModule } from 'ng-zorro-antd/divider';
export { DRAWER_ANIMATE_DURATION, NzDrawerComponent, NzDrawerModule, DrawerBuilderForService, NzDrawerService, NzDrawerServiceModule, NzDrawerRef } from 'ng-zorro-antd/drawer';
export { NzDropdownContextComponent, menuServiceFactory, NzDropDownComponent, NzDropDownDirective, NzDropdownService, NzDropdownServiceModule, NzDropDownButtonComponent, NzDropDownModule, NzMenuDropdownService, NzDropDownADirective, dropdownMenuServiceFactory, NzDropdownMenuComponent, NzContextMenuService, NzContextMenuServiceModule } from 'ng-zorro-antd/dropdown';
export { NzEmbedEmptyComponent, NzEmptyComponent, NzEmptyModule, NzEmptyService, NZ_DEFAULT_EMPTY_CONTENT, NZ_EMPTY_COMPONENT_NAME, emptyImage, simpleEmptyImage } from 'ng-zorro-antd/empty';
export { NzFormModule, NzFormDirective, NzFormControlComponent, NzFormExplainComponent, NzFormItemComponent, NzFormExtraComponent, NzFormLabelComponent, NzFormSplitComponent, NzFormTextComponent } from 'ng-zorro-antd/form';
export { NzRowDirective, NzColDirective, NzGridModule } from 'ng-zorro-antd/grid';
export { NzI18nModule, NzI18nService, NZ_DATE_CONFIG, ar_EG, bg_BG, ca_ES, cs_CZ, da_DK, de_DE, el_GR, en_GB, en_US, es_ES, et_EE, fa_IR, fi_FI, fr_BE, fr_FR, he_IL, hi_IN, hr_HR, hu_HU, id_ID, is_IS, it_IT, ja_JP, kn_IN, ko_KR, ku_IQ, lv_LV, mn_MN, ms_MY, nb_NO, ne_NP, nl_BE, nl_NL, pl_PL, pt_BR, pt_PT, ro_RO, ru_RU, sk_SK, sl_SI, sr_RS, sv_SE, ta_IN, th_TH, tr_TR, uk_UA, vi_VN, zh_CN, zh_TW, NZ_I18N, NZ_DATE_LOCALE, DATE_HELPER_SERVICE_FACTORY, DateHelperService, DateHelperByDateFns, DateHelperByDatePipe, NzI18nPipe } from 'ng-zorro-antd/i18n';
export { NzIconModule, NzIconDirective, NZ_ICONS, NZ_ICON_DEFAULT_TWOTONE_COLOR, DEFAULT_TWOTONE_COLOR, NZ_ICONS_USED_BY_ZORRO, NzIconService } from 'ng-zorro-antd/icon';
export { NzInputGroupComponent, NzInputModule, NzInputDirective, isAutoSizeType, NzAutosizeDirective } from 'ng-zorro-antd/input';
export { NzInputNumberComponent, NzInputNumberModule } from 'ng-zorro-antd/input-number';
export { NzContentComponent, NzFooterComponent, NzHeaderComponent, NzLayoutComponent, NzSiderComponent, NzLayoutModule } from 'ng-zorro-antd/layout';
export { NzListItemMetaComponent, NzListItemComponent, NzListComponent, NzListModule } from 'ng-zorro-antd/list';
export { NzMentionModule, NzMentionComponent, NZ_MENTION_TRIGGER_ACCESSOR, NzMentionTriggerDirective, NzMentionSuggestionDirective, NzMentionService } from 'ng-zorro-antd/mention';
export { NzMenuDirective, NzMenuGroupComponent, NzMenuDividerDirective, NzMenuItemDirective, NzSubMenuComponent, NzMenuModule, NzMenuService, NzSubmenuService, NzMenuServiceFactory } from 'ng-zorro-antd/menu';
export { NzMessageBaseService, NzMessageService, NzMessageServiceModule, NzMessageModule, NzMessageComponent, NzMessageContainerComponent, NZ_MESSAGE_DEFAULT_CONFIG, NZ_MESSAGE_CONFIG, NZ_MESSAGE_DEFAULT_CONFIG_PROVIDER } from 'ng-zorro-antd/message';
export { NzModalComponent, NzModalFooterDirective, NzModalRef, NzModalModule, NzModalService, NzModalServiceModule, NZ_MODAL_CONFIG, NzModalControlService, NzModalControlServiceModule } from 'ng-zorro-antd/modal';
export { NZ_NOTIFICATION_DEFAULT_CONFIG, NZ_NOTIFICATION_CONFIG, NZ_NOTIFICATION_DEFAULT_CONFIG_PROVIDER, NzNotificationComponent, NzNotificationModule, NzNotificationService, NzNotificationServiceModule, NzNotificationContainerComponent } from 'ng-zorro-antd/notification';
export { NzPageHeaderModule, NzPageHeaderComponent, NzPageHeaderTitleDirective, NzPageHeaderSubtitleDirective, NzPageHeaderContentDirective, NzPageHeaderTagDirective, NzPageHeaderExtraDirective, NzPageHeaderFooterDirective, NzPageHeaderBreadcrumbDirective, NzPageHeaderAvatarDirective } from 'ng-zorro-antd/page-header';
export { NzPaginationComponent, NzPaginationModule } from 'ng-zorro-antd/pagination';
export { NzPopconfirmComponent, NzPopconfirmDirective, NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
export { NzPopoverComponent, NzPopoverDirective, NzPopoverModule } from 'ng-zorro-antd/popover';
export { NzProgressModule, NzProgressComponent } from 'ng-zorro-antd/progress';
export { NzRadioButtonComponent, NzRadioGroupComponent, NzRadioComponent, NzRadioModule } from 'ng-zorro-antd/radio';
export { NzRateComponent, NzRateModule, NzRateItemComponent } from 'ng-zorro-antd/rate';
export { θNzResultNotFoundComponent, θNzResultServerErrorComponent, θNzResultUnauthorizedComponent, NzResultModule, NzResultComponent, NzResultTitleDirective, NzResultSubtitleDirective, NzResultIconDirective, NzResultContentDirective, NzResultExtraDirective } from 'ng-zorro-antd/result';
export { NzOptionGroupComponent, NzOptionContainerComponent, NzOptionComponent, NzSelectComponent, NzSelectModule, NzOptionLiComponent, defaultFilterOption, NzFilterOptionPipe, NzFilterGroupOptionPipe, NzSelectTopControlComponent, NzSelectUnselectableDirective, NzSelectService } from 'ng-zorro-antd/select';
export { NzSkeletonComponent, NzSkeletonModule } from 'ng-zorro-antd/skeleton';
export { NzSliderComponent, NzSliderModule, NzSliderHandleComponent, NzSliderMarksComponent, NzSliderStepComponent, NzSliderTrackComponent, isValueARange, isConfigAObject, Marks } from 'ng-zorro-antd/slider';
export { NzSpinComponent, NzSpinModule } from 'ng-zorro-antd/spin';
export { NzCountdownComponent, NzStatisticComponent, NzStatisticModule, NzStatisticNumberComponent } from 'ng-zorro-antd/statistic';
export { NzStepsComponent, NzStepComponent, NzStepsModule } from 'ng-zorro-antd/steps';
export { NzSwitchComponent, NzSwitchModule } from 'ng-zorro-antd/switch';
export { NzTableComponent, NzTableModule, NzTbodyDirective, NzTdComponent, NzThComponent, NzTheadComponent, NzTrDirective, NzVirtualScrollDirective } from 'ng-zorro-antd/table';
export { NzTabBodyComponent, NzTabLabelDirective, NzTabComponent, NzTabsInkBarDirective, NzTabsModule, NzTabsNavComponent, NzTabChangeEvent, NzTabSetComponent, NzTabDirective, NzTabLinkDirective } from 'ng-zorro-antd/tabs';
export { NzTagComponent, NzTagModule } from 'ng-zorro-antd/tag';
export { NzTimePickerComponent, NzTimePickerModule, NzTimePickerPanelComponent, NzTimeValueAccessorDirective } from 'ng-zorro-antd/time-picker';
export { NzTimelineItemComponent, NzTimelineComponent, NzTimelineModule } from 'ng-zorro-antd/timeline';
export { NzToolTipComponent, NzTooltipDirective, NzToolTipModule, NzTooltipBaseComponentLegacy, NzTooltipBaseComponent, NzTooltipBaseDirective } from 'ng-zorro-antd/tooltip';
export { NzTransferListComponent, NzTransferSearchComponent, NzTransferComponent, NzTransferModule } from 'ng-zorro-antd/transfer';
export { NzTreeModule, NzTreeServiceFactory, NzTreeComponent, NzTreeNodeComponent, NzTreeService } from 'ng-zorro-antd/tree';
export { higherOrderServiceFactory, NzTreeSelectComponent, NzTreeSelectModule, NzTreeSelectService } from 'ng-zorro-antd/tree-select';
export { NzTypographyModule, NzTypographyComponent, NzTextCopyComponent, NzTextEditComponent } from 'ng-zorro-antd/typography';
export { NzUploadBtnComponent, NzUploadListComponent, NzUploadComponent, NzUploadModule } from 'ng-zorro-antd/upload';
export { VERSION } from 'ng-zorro-antd/version';
export class NgZorroAntdModule {
    /**
     * @deprecated Use `NgZorroAntdModule` instead.
     * @return {?}
     */
    static forRoot() {
        warnDeprecation(`'forRoot' is not recommended if you are using Angular 6.0.0+. This API is going to be removed in 9.0.0.`);
        return {
            ngModule: NgZorroAntdModule
        };
    }
}
NgZorroAntdModule.decorators = [
    { type: NgModule, args: [{
                exports: [
                    NzAffixModule,
                    NzAlertModule,
                    NzAnchorModule,
                    NzAutocompleteModule,
                    NzAvatarModule,
                    NzBackTopModule,
                    NzBadgeModule,
                    NzButtonModule,
                    NzBreadCrumbModule,
                    NzCalendarModule,
                    NzCardModule,
                    NzCarouselModule,
                    NzCascaderModule,
                    NzCheckboxModule,
                    NzCollapseModule,
                    NzCommentModule,
                    NzDatePickerModule,
                    NzDescriptionsModule,
                    NzDividerModule,
                    NzDrawerModule,
                    NzDropDownModule,
                    NzEmptyModule,
                    NzFormModule,
                    NzGridModule,
                    NzI18nModule,
                    NzIconModule,
                    NzInputModule,
                    NzInputNumberModule,
                    NzLayoutModule,
                    NzListModule,
                    NzMentionModule,
                    NzMenuModule,
                    NzMessageModule,
                    NzModalModule,
                    NzNoAnimationModule,
                    NzNotificationModule,
                    NzPageHeaderModule,
                    NzPaginationModule,
                    NzPopconfirmModule,
                    NzPopoverModule,
                    NzProgressModule,
                    NzRadioModule,
                    NzRateModule,
                    NzResultModule,
                    NzSelectModule,
                    NzSkeletonModule,
                    NzSliderModule,
                    NzSpinModule,
                    NzStatisticModule,
                    NzStepsModule,
                    NzSwitchModule,
                    NzTableModule,
                    NzTabsModule,
                    NzTagModule,
                    NzTimePickerModule,
                    NzTimelineModule,
                    NzToolTipModule,
                    NzTransButtonModule,
                    NzTransferModule,
                    NzTreeModule,
                    NzTreeSelectModule,
                    NzTypographyModule,
                    NzUploadModule,
                    NzWaveModule
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctem9ycm8tYW50ZC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsibmctem9ycm8tYW50ZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFD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QWMscUJBQXFCLENBQUM7QUFDcEMsNERBQWMsNEJBQTRCLENBQUM7QUFDM0MsOEhBQWMsc0JBQXNCLENBQUM7QUFDckMsNEZBQWMsb0JBQW9CLENBQUM7QUFDbkMsNEpBQWMsdUJBQXVCLENBQUM7QUFDdEMsNExBQWMsb0JBQW9CLENBQUM7QUFDbkMsbU9BQWMsdUJBQXVCLENBQUM7QUFDdEMsK0xBQWMscUJBQXFCLENBQUM7QUFDcEMscVBBQWMsNEJBQTRCLENBQUM7QUFDM0Msb1NBQWMsMkJBQTJCLENBQUM7QUFDMUMsMERBQWMsMEJBQTBCLENBQUM7QUFDekMsaUZBQWMsMEJBQTBCLENBQUM7QUFDekMsd0VBQWMsdUJBQXVCLENBQUM7QUFDdEMsc0RBQWMsd0JBQXdCLENBQUM7QUFDdkMsK0ZBQWMscUJBQXFCLENBQUM7QUFDcEMsbUVBQWMsb0JBQW9CLENBQUM7QUFDbkMseVFBQWMsc0JBQXNCLENBQUM7QUFDckMsNlJBQWMsc0JBQXNCLENBQUM7QUFDckMsc0RBQWMsd0JBQXdCLENBQUM7QUFDdkMseUxBQWMsc0JBQXNCLENBQUM7QUFDckMsOENBQWMsb0JBQW9CLENBQUM7QUFDbkMsMEdBQWMseUJBQXlCLENBQUM7QUFDeEMsaUVBQWMscUJBQXFCLENBQUM7QUFDcEMsa0RBQWMsc0JBQXNCLENBQUM7QUFDckMsMkpBQWMscUJBQXFCLENBQUM7QUFDcEMsME1BQWMsb0JBQW9CLENBQUM7QUFDbkMsNENBQWMsbUJBQW1CLENBQUM7QUFDbEMsb0hBQWMsMkJBQTJCLENBQUM7QUFDMUMsK0VBQWMsd0JBQXdCLENBQUM7QUFDdkMsc0pBQWMsdUJBQXVCLENBQUM7QUFDdEMsMEdBQWMsd0JBQXdCLENBQUM7QUFDdkMsd0dBQWMsb0JBQW9CLENBQUM7QUFDbkMsMEdBQWMsMkJBQTJCLENBQUM7QUFDMUMsb0dBQWMsMEJBQTBCLENBQUM7QUFDekMsK0ZBQWMsc0JBQXNCLENBQUM7QUFFckMsd0JBQWMsdUJBQXVCLENBQUM7QUFzRXRDLE1BQU0sT0FBTyxpQkFBaUI7Ozs7O0lBSTVCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osZUFBZSxDQUNiLHlHQUF5RyxDQUMxRyxDQUFDO1FBQ0YsT0FBTztZQUNMLFFBQVEsRUFBRSxpQkFBaUI7U0FDNUIsQ0FBQztJQUNKLENBQUM7OztZQS9FRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLGFBQWE7b0JBQ2IsYUFBYTtvQkFDYixjQUFjO29CQUNkLG9CQUFvQjtvQkFDcEIsY0FBYztvQkFDZCxlQUFlO29CQUNmLGFBQWE7b0JBQ2IsY0FBYztvQkFDZCxrQkFBa0I7b0JBQ2xCLGdCQUFnQjtvQkFDaEIsWUFBWTtvQkFDWixnQkFBZ0I7b0JBQ2hCLGdCQUFnQjtvQkFDaEIsZ0JBQWdCO29CQUNoQixnQkFBZ0I7b0JBQ2hCLGVBQWU7b0JBQ2Ysa0JBQWtCO29CQUNsQixvQkFBb0I7b0JBQ3BCLGVBQWU7b0JBQ2YsY0FBYztvQkFDZCxnQkFBZ0I7b0JBQ2hCLGFBQWE7b0JBQ2IsWUFBWTtvQkFDWixZQUFZO29CQUNaLFlBQVk7b0JBQ1osWUFBWTtvQkFDWixhQUFhO29CQUNiLG1CQUFtQjtvQkFDbkIsY0FBYztvQkFDZCxZQUFZO29CQUNaLGVBQWU7b0JBQ2YsWUFBWTtvQkFDWixlQUFlO29CQUNmLGFBQWE7b0JBQ2IsbUJBQW1CO29CQUNuQixvQkFBb0I7b0JBQ3BCLGtCQUFrQjtvQkFDbEIsa0JBQWtCO29CQUNsQixrQkFBa0I7b0JBQ2xCLGVBQWU7b0JBQ2YsZ0JBQWdCO29CQUNoQixhQUFhO29CQUNiLFlBQVk7b0JBQ1osY0FBYztvQkFDZCxjQUFjO29CQUNkLGdCQUFnQjtvQkFDaEIsY0FBYztvQkFDZCxZQUFZO29CQUNaLGlCQUFpQjtvQkFDakIsYUFBYTtvQkFDYixjQUFjO29CQUNkLGFBQWE7b0JBQ2IsWUFBWTtvQkFDWixXQUFXO29CQUNYLGtCQUFrQjtvQkFDbEIsZ0JBQWdCO29CQUNoQixlQUFlO29CQUNmLG1CQUFtQjtvQkFDbkIsZ0JBQWdCO29CQUNoQixZQUFZO29CQUNaLGtCQUFrQjtvQkFDbEIsa0JBQWtCO29CQUNsQixjQUFjO29CQUNkLFlBQVk7aUJBQ2I7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56QWZmaXhNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2FmZml4JztcclxuaW1wb3J0IHsgTnpBbGVydE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvYWxlcnQnO1xyXG5pbXBvcnQgeyBOekFuY2hvck1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvYW5jaG9yJztcclxuaW1wb3J0IHsgTnpBdXRvY29tcGxldGVNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2F1dG8tY29tcGxldGUnO1xyXG5pbXBvcnQgeyBOekF2YXRhck1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvYXZhdGFyJztcclxuaW1wb3J0IHsgTnpCYWNrVG9wTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9iYWNrLXRvcCc7XHJcbmltcG9ydCB7IE56QmFkZ2VNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2JhZGdlJztcclxuaW1wb3J0IHsgTnpCcmVhZENydW1iTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9icmVhZGNydW1iJztcclxuaW1wb3J0IHsgTnpCdXR0b25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2J1dHRvbic7XHJcbmltcG9ydCB7IE56Q2FsZW5kYXJNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NhbGVuZGFyJztcclxuaW1wb3J0IHsgTnpDYXJkTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jYXJkJztcclxuaW1wb3J0IHsgTnpDYXJvdXNlbE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY2Fyb3VzZWwnO1xyXG5pbXBvcnQgeyBOekNhc2NhZGVyTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jYXNjYWRlcic7XHJcbmltcG9ydCB7IE56Q2hlY2tib3hNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NoZWNrYm94JztcclxuaW1wb3J0IHsgTnpDb2xsYXBzZU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29sbGFwc2UnO1xyXG5pbXBvcnQgeyBOekNvbW1lbnRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvbW1lbnQnO1xyXG5pbXBvcnQgeyB3YXJuRGVwcmVjYXRpb24sIE56Tm9BbmltYXRpb25Nb2R1bGUsIE56VHJhbnNCdXR0b25Nb2R1bGUsIE56V2F2ZU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56RGF0ZVBpY2tlck1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXInO1xyXG5pbXBvcnQgeyBOekRlc2NyaXB0aW9uc01vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvZGVzY3JpcHRpb25zJztcclxuaW1wb3J0IHsgTnpEaXZpZGVyTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9kaXZpZGVyJztcclxuaW1wb3J0IHsgTnpEcmF3ZXJNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2RyYXdlcic7XHJcbmltcG9ydCB7IE56RHJvcERvd25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2Ryb3Bkb3duJztcclxuaW1wb3J0IHsgTnpFbXB0eU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvZW1wdHknO1xyXG5pbXBvcnQgeyBOekZvcm1Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2Zvcm0nO1xyXG5pbXBvcnQgeyBOekdyaWRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2dyaWQnO1xyXG5pbXBvcnQgeyBOekkxOG5Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5pbXBvcnQgeyBOekljb25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2ljb24nO1xyXG5pbXBvcnQgeyBOeklucHV0TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pbnB1dCc7XHJcbmltcG9ydCB7IE56SW5wdXROdW1iZXJNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2lucHV0LW51bWJlcic7XHJcbmltcG9ydCB7IE56TGF5b3V0TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9sYXlvdXQnO1xyXG5pbXBvcnQgeyBOekxpc3RNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2xpc3QnO1xyXG5pbXBvcnQgeyBOek1lbnRpb25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL21lbnRpb24nO1xyXG5pbXBvcnQgeyBOek1lbnVNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL21lbnUnO1xyXG5pbXBvcnQgeyBOek1lc3NhZ2VNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL21lc3NhZ2UnO1xyXG5pbXBvcnQgeyBOek1vZGFsTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9tb2RhbCc7XHJcbmltcG9ydCB7IE56Tm90aWZpY2F0aW9uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9ub3RpZmljYXRpb24nO1xyXG5pbXBvcnQgeyBOelBhZ2VIZWFkZXJNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3BhZ2UtaGVhZGVyJztcclxuaW1wb3J0IHsgTnpQYWdpbmF0aW9uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9wYWdpbmF0aW9uJztcclxuaW1wb3J0IHsgTnpQb3Bjb25maXJtTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9wb3Bjb25maXJtJztcclxuaW1wb3J0IHsgTnpQb3BvdmVyTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9wb3BvdmVyJztcclxuaW1wb3J0IHsgTnpQcm9ncmVzc01vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvcHJvZ3Jlc3MnO1xyXG5pbXBvcnQgeyBOelJhZGlvTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9yYWRpbyc7XHJcbmltcG9ydCB7IE56UmF0ZU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvcmF0ZSc7XHJcbmltcG9ydCB7IE56UmVzdWx0TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9yZXN1bHQnO1xyXG5pbXBvcnQgeyBOelNlbGVjdE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvc2VsZWN0JztcclxuaW1wb3J0IHsgTnpTa2VsZXRvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvc2tlbGV0b24nO1xyXG5pbXBvcnQgeyBOelNsaWRlck1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvc2xpZGVyJztcclxuaW1wb3J0IHsgTnpTcGluTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9zcGluJztcclxuaW1wb3J0IHsgTnpTdGF0aXN0aWNNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3N0YXRpc3RpYyc7XHJcbmltcG9ydCB7IE56U3RlcHNNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3N0ZXBzJztcclxuaW1wb3J0IHsgTnpTd2l0Y2hNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3N3aXRjaCc7XHJcbmltcG9ydCB7IE56VGFibGVNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3RhYmxlJztcclxuaW1wb3J0IHsgTnpUYWJzTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90YWJzJztcclxuaW1wb3J0IHsgTnpUYWdNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3RhZyc7XHJcbmltcG9ydCB7IE56VGltZVBpY2tlck1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvdGltZS1waWNrZXInO1xyXG5pbXBvcnQgeyBOelRpbWVsaW5lTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90aW1lbGluZSc7XHJcbmltcG9ydCB7IE56VG9vbFRpcE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvdG9vbHRpcCc7XHJcbmltcG9ydCB7IE56VHJhbnNmZXJNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3RyYW5zZmVyJztcclxuaW1wb3J0IHsgTnpUcmVlTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90cmVlJztcclxuaW1wb3J0IHsgTnpUcmVlU2VsZWN0TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90cmVlLXNlbGVjdCc7XHJcbmltcG9ydCB7IE56VHlwb2dyYXBoeU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvdHlwb2dyYXBoeSc7XHJcbmltcG9ydCB7IE56VXBsb2FkTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC91cGxvYWQnO1xyXG5cclxuZXhwb3J0ICogZnJvbSAnbmctem9ycm8tYW50ZC9hZmZpeCc7XHJcbmV4cG9ydCAqIGZyb20gJ25nLXpvcnJvLWFudGQvYWxlcnQnO1xyXG5leHBvcnQgKiBmcm9tICduZy16b3Jyby1hbnRkL2FuY2hvcic7XHJcbmV4cG9ydCAqIGZyb20gJ25nLXpvcnJvLWFudGQvYXV0by1jb21wbGV0ZSc7XHJcbmV4cG9ydCAqIGZyb20gJ25nLXpvcnJvLWFudGQvYXZhdGFyJztcclxuZXhwb3J0ICogZnJvbSAnbmctem9ycm8tYW50ZC9iYWNrLXRvcCc7XHJcbmV4cG9ydCAqIGZyb20gJ25nLXpvcnJvLWFudGQvYmFkZ2UnO1xyXG5leHBvcnQgKiBmcm9tICduZy16b3Jyby1hbnRkL2JyZWFkY3J1bWInO1xyXG5leHBvcnQgKiBmcm9tICduZy16b3Jyby1hbnRkL2J1dHRvbic7XHJcbmV4cG9ydCAqIGZyb20gJ25nLXpvcnJvLWFudGQvY2FsZW5kYXInO1xyXG5leHBvcnQgKiBmcm9tICduZy16b3Jyby1hbnRkL2NhcmQnO1xyXG5leHBvcnQgKiBmcm9tICduZy16b3Jyby1hbnRkL2Nhcm91c2VsJztcclxuZXhwb3J0ICogZnJvbSAnbmctem9ycm8tYW50ZC9jYXNjYWRlcic7XHJcbmV4cG9ydCAqIGZyb20gJ25nLXpvcnJvLWFudGQvY2hlY2tib3gnO1xyXG5leHBvcnQgKiBmcm9tICduZy16b3Jyby1hbnRkL2NvbGxhcHNlJztcclxuZXhwb3J0ICogZnJvbSAnbmctem9ycm8tYW50ZC9jb21tZW50JztcclxuZXhwb3J0ICogZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuZXhwb3J0ICogZnJvbSAnbmctem9ycm8tYW50ZC9kYXRlLXBpY2tlcic7XHJcbmV4cG9ydCAqIGZyb20gJ25nLXpvcnJvLWFudGQvZGVzY3JpcHRpb25zJztcclxuZXhwb3J0ICogZnJvbSAnbmctem9ycm8tYW50ZC9kaXZpZGVyJztcclxuZXhwb3J0ICogZnJvbSAnbmctem9ycm8tYW50ZC9kcmF3ZXInO1xyXG5leHBvcnQgKiBmcm9tICduZy16b3Jyby1hbnRkL2Ryb3Bkb3duJztcclxuZXhwb3J0ICogZnJvbSAnbmctem9ycm8tYW50ZC9lbXB0eSc7XHJcbmV4cG9ydCAqIGZyb20gJ25nLXpvcnJvLWFudGQvZm9ybSc7XHJcbmV4cG9ydCAqIGZyb20gJ25nLXpvcnJvLWFudGQvZ3JpZCc7XHJcbmV4cG9ydCAqIGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcbmV4cG9ydCAqIGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XHJcbmV4cG9ydCAqIGZyb20gJ25nLXpvcnJvLWFudGQvaW5wdXQnO1xyXG5leHBvcnQgKiBmcm9tICduZy16b3Jyby1hbnRkL2lucHV0LW51bWJlcic7XHJcbmV4cG9ydCAqIGZyb20gJ25nLXpvcnJvLWFudGQvbGF5b3V0JztcclxuZXhwb3J0ICogZnJvbSAnbmctem9ycm8tYW50ZC9saXN0JztcclxuZXhwb3J0ICogZnJvbSAnbmctem9ycm8tYW50ZC9tZW50aW9uJztcclxuZXhwb3J0ICogZnJvbSAnbmctem9ycm8tYW50ZC9tZW51JztcclxuZXhwb3J0ICogZnJvbSAnbmctem9ycm8tYW50ZC9tZXNzYWdlJztcclxuZXhwb3J0ICogZnJvbSAnbmctem9ycm8tYW50ZC9tb2RhbCc7XHJcbmV4cG9ydCAqIGZyb20gJ25nLXpvcnJvLWFudGQvbm90aWZpY2F0aW9uJztcclxuZXhwb3J0ICogZnJvbSAnbmctem9ycm8tYW50ZC9wYWdlLWhlYWRlcic7XHJcbmV4cG9ydCAqIGZyb20gJ25nLXpvcnJvLWFudGQvcGFnaW5hdGlvbic7XHJcbmV4cG9ydCAqIGZyb20gJ25nLXpvcnJvLWFudGQvcG9wY29uZmlybSc7XHJcbmV4cG9ydCAqIGZyb20gJ25nLXpvcnJvLWFudGQvcG9wb3Zlcic7XHJcbmV4cG9ydCAqIGZyb20gJ25nLXpvcnJvLWFudGQvcHJvZ3Jlc3MnO1xyXG5leHBvcnQgKiBmcm9tICduZy16b3Jyby1hbnRkL3JhZGlvJztcclxuZXhwb3J0ICogZnJvbSAnbmctem9ycm8tYW50ZC9yYXRlJztcclxuZXhwb3J0ICogZnJvbSAnbmctem9ycm8tYW50ZC9yZXN1bHQnO1xyXG5leHBvcnQgKiBmcm9tICduZy16b3Jyby1hbnRkL3NlbGVjdCc7XHJcbmV4cG9ydCAqIGZyb20gJ25nLXpvcnJvLWFudGQvc2tlbGV0b24nO1xyXG5leHBvcnQgKiBmcm9tICduZy16b3Jyby1hbnRkL3NsaWRlcic7XHJcbmV4cG9ydCAqIGZyb20gJ25nLXpvcnJvLWFudGQvc3Bpbic7XHJcbmV4cG9ydCAqIGZyb20gJ25nLXpvcnJvLWFudGQvc3RhdGlzdGljJztcclxuZXhwb3J0ICogZnJvbSAnbmctem9ycm8tYW50ZC9zdGVwcyc7XHJcbmV4cG9ydCAqIGZyb20gJ25nLXpvcnJvLWFudGQvc3dpdGNoJztcclxuZXhwb3J0ICogZnJvbSAnbmctem9ycm8tYW50ZC90YWJsZSc7XHJcbmV4cG9ydCAqIGZyb20gJ25nLXpvcnJvLWFudGQvdGFicyc7XHJcbmV4cG9ydCAqIGZyb20gJ25nLXpvcnJvLWFudGQvdGFnJztcclxuZXhwb3J0ICogZnJvbSAnbmctem9ycm8tYW50ZC90aW1lLXBpY2tlcic7XHJcbmV4cG9ydCAqIGZyb20gJ25nLXpvcnJvLWFudGQvdGltZWxpbmUnO1xyXG5leHBvcnQgKiBmcm9tICduZy16b3Jyby1hbnRkL3Rvb2x0aXAnO1xyXG5leHBvcnQgKiBmcm9tICduZy16b3Jyby1hbnRkL3RyYW5zZmVyJztcclxuZXhwb3J0ICogZnJvbSAnbmctem9ycm8tYW50ZC90cmVlJztcclxuZXhwb3J0ICogZnJvbSAnbmctem9ycm8tYW50ZC90cmVlLXNlbGVjdCc7XHJcbmV4cG9ydCAqIGZyb20gJ25nLXpvcnJvLWFudGQvdHlwb2dyYXBoeSc7XHJcbmV4cG9ydCAqIGZyb20gJ25nLXpvcnJvLWFudGQvdXBsb2FkJztcclxuXHJcbmV4cG9ydCAqIGZyb20gJ25nLXpvcnJvLWFudGQvdmVyc2lvbic7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGV4cG9ydHM6IFtcclxuICAgIE56QWZmaXhNb2R1bGUsXHJcbiAgICBOekFsZXJ0TW9kdWxlLFxyXG4gICAgTnpBbmNob3JNb2R1bGUsXHJcbiAgICBOekF1dG9jb21wbGV0ZU1vZHVsZSxcclxuICAgIE56QXZhdGFyTW9kdWxlLFxyXG4gICAgTnpCYWNrVG9wTW9kdWxlLFxyXG4gICAgTnpCYWRnZU1vZHVsZSxcclxuICAgIE56QnV0dG9uTW9kdWxlLFxyXG4gICAgTnpCcmVhZENydW1iTW9kdWxlLFxyXG4gICAgTnpDYWxlbmRhck1vZHVsZSxcclxuICAgIE56Q2FyZE1vZHVsZSxcclxuICAgIE56Q2Fyb3VzZWxNb2R1bGUsXHJcbiAgICBOekNhc2NhZGVyTW9kdWxlLFxyXG4gICAgTnpDaGVja2JveE1vZHVsZSxcclxuICAgIE56Q29sbGFwc2VNb2R1bGUsXHJcbiAgICBOekNvbW1lbnRNb2R1bGUsXHJcbiAgICBOekRhdGVQaWNrZXJNb2R1bGUsXHJcbiAgICBOekRlc2NyaXB0aW9uc01vZHVsZSxcclxuICAgIE56RGl2aWRlck1vZHVsZSxcclxuICAgIE56RHJhd2VyTW9kdWxlLFxyXG4gICAgTnpEcm9wRG93bk1vZHVsZSxcclxuICAgIE56RW1wdHlNb2R1bGUsXHJcbiAgICBOekZvcm1Nb2R1bGUsXHJcbiAgICBOekdyaWRNb2R1bGUsXHJcbiAgICBOekkxOG5Nb2R1bGUsXHJcbiAgICBOekljb25Nb2R1bGUsXHJcbiAgICBOeklucHV0TW9kdWxlLFxyXG4gICAgTnpJbnB1dE51bWJlck1vZHVsZSxcclxuICAgIE56TGF5b3V0TW9kdWxlLFxyXG4gICAgTnpMaXN0TW9kdWxlLFxyXG4gICAgTnpNZW50aW9uTW9kdWxlLFxyXG4gICAgTnpNZW51TW9kdWxlLFxyXG4gICAgTnpNZXNzYWdlTW9kdWxlLFxyXG4gICAgTnpNb2RhbE1vZHVsZSxcclxuICAgIE56Tm9BbmltYXRpb25Nb2R1bGUsXHJcbiAgICBOek5vdGlmaWNhdGlvbk1vZHVsZSxcclxuICAgIE56UGFnZUhlYWRlck1vZHVsZSxcclxuICAgIE56UGFnaW5hdGlvbk1vZHVsZSxcclxuICAgIE56UG9wY29uZmlybU1vZHVsZSxcclxuICAgIE56UG9wb3Zlck1vZHVsZSxcclxuICAgIE56UHJvZ3Jlc3NNb2R1bGUsXHJcbiAgICBOelJhZGlvTW9kdWxlLFxyXG4gICAgTnpSYXRlTW9kdWxlLFxyXG4gICAgTnpSZXN1bHRNb2R1bGUsXHJcbiAgICBOelNlbGVjdE1vZHVsZSxcclxuICAgIE56U2tlbGV0b25Nb2R1bGUsXHJcbiAgICBOelNsaWRlck1vZHVsZSxcclxuICAgIE56U3Bpbk1vZHVsZSxcclxuICAgIE56U3RhdGlzdGljTW9kdWxlLFxyXG4gICAgTnpTdGVwc01vZHVsZSxcclxuICAgIE56U3dpdGNoTW9kdWxlLFxyXG4gICAgTnpUYWJsZU1vZHVsZSxcclxuICAgIE56VGFic01vZHVsZSxcclxuICAgIE56VGFnTW9kdWxlLFxyXG4gICAgTnpUaW1lUGlja2VyTW9kdWxlLFxyXG4gICAgTnpUaW1lbGluZU1vZHVsZSxcclxuICAgIE56VG9vbFRpcE1vZHVsZSxcclxuICAgIE56VHJhbnNCdXR0b25Nb2R1bGUsXHJcbiAgICBOelRyYW5zZmVyTW9kdWxlLFxyXG4gICAgTnpUcmVlTW9kdWxlLFxyXG4gICAgTnpUcmVlU2VsZWN0TW9kdWxlLFxyXG4gICAgTnpUeXBvZ3JhcGh5TW9kdWxlLFxyXG4gICAgTnpVcGxvYWRNb2R1bGUsXHJcbiAgICBOeldhdmVNb2R1bGVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ1pvcnJvQW50ZE1vZHVsZSB7XHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgVXNlIGBOZ1pvcnJvQW50ZE1vZHVsZWAgaW5zdGVhZC5cclxuICAgKi9cclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHdhcm5EZXByZWNhdGlvbihcclxuICAgICAgYCdmb3JSb290JyBpcyBub3QgcmVjb21tZW5kZWQgaWYgeW91IGFyZSB1c2luZyBBbmd1bGFyIDYuMC4wKy4gVGhpcyBBUEkgaXMgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiA5LjAuMC5gXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IE5nWm9ycm9BbnRkTW9kdWxlXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=
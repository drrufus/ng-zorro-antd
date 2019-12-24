(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ng-zorro-antd/affix'), require('ng-zorro-antd/alert'), require('ng-zorro-antd/anchor'), require('ng-zorro-antd/auto-complete'), require('ng-zorro-antd/avatar'), require('ng-zorro-antd/back-top'), require('ng-zorro-antd/badge'), require('ng-zorro-antd/breadcrumb'), require('ng-zorro-antd/button'), require('ng-zorro-antd/calendar'), require('ng-zorro-antd/card'), require('ng-zorro-antd/carousel'), require('ng-zorro-antd/cascader'), require('ng-zorro-antd/checkbox'), require('ng-zorro-antd/collapse'), require('ng-zorro-antd/comment'), require('ng-zorro-antd/core'), require('ng-zorro-antd/date-picker'), require('ng-zorro-antd/descriptions'), require('ng-zorro-antd/divider'), require('ng-zorro-antd/drawer'), require('ng-zorro-antd/dropdown'), require('ng-zorro-antd/empty'), require('ng-zorro-antd/form'), require('ng-zorro-antd/grid'), require('ng-zorro-antd/i18n'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/input'), require('ng-zorro-antd/input-number'), require('ng-zorro-antd/layout'), require('ng-zorro-antd/list'), require('ng-zorro-antd/mention'), require('ng-zorro-antd/menu'), require('ng-zorro-antd/message'), require('ng-zorro-antd/modal'), require('ng-zorro-antd/notification'), require('ng-zorro-antd/page-header'), require('ng-zorro-antd/pagination'), require('ng-zorro-antd/popconfirm'), require('ng-zorro-antd/popover'), require('ng-zorro-antd/progress'), require('ng-zorro-antd/radio'), require('ng-zorro-antd/rate'), require('ng-zorro-antd/result'), require('ng-zorro-antd/select'), require('ng-zorro-antd/skeleton'), require('ng-zorro-antd/slider'), require('ng-zorro-antd/spin'), require('ng-zorro-antd/statistic'), require('ng-zorro-antd/steps'), require('ng-zorro-antd/switch'), require('ng-zorro-antd/table'), require('ng-zorro-antd/tabs'), require('ng-zorro-antd/tag'), require('ng-zorro-antd/time-picker'), require('ng-zorro-antd/timeline'), require('ng-zorro-antd/tooltip'), require('ng-zorro-antd/transfer'), require('ng-zorro-antd/tree'), require('ng-zorro-antd/tree-select'), require('ng-zorro-antd/typography'), require('ng-zorro-antd/upload'), require('ng-zorro-antd/version')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd', ['exports', '@angular/core', 'ng-zorro-antd/affix', 'ng-zorro-antd/alert', 'ng-zorro-antd/anchor', 'ng-zorro-antd/auto-complete', 'ng-zorro-antd/avatar', 'ng-zorro-antd/back-top', 'ng-zorro-antd/badge', 'ng-zorro-antd/breadcrumb', 'ng-zorro-antd/button', 'ng-zorro-antd/calendar', 'ng-zorro-antd/card', 'ng-zorro-antd/carousel', 'ng-zorro-antd/cascader', 'ng-zorro-antd/checkbox', 'ng-zorro-antd/collapse', 'ng-zorro-antd/comment', 'ng-zorro-antd/core', 'ng-zorro-antd/date-picker', 'ng-zorro-antd/descriptions', 'ng-zorro-antd/divider', 'ng-zorro-antd/drawer', 'ng-zorro-antd/dropdown', 'ng-zorro-antd/empty', 'ng-zorro-antd/form', 'ng-zorro-antd/grid', 'ng-zorro-antd/i18n', 'ng-zorro-antd/icon', 'ng-zorro-antd/input', 'ng-zorro-antd/input-number', 'ng-zorro-antd/layout', 'ng-zorro-antd/list', 'ng-zorro-antd/mention', 'ng-zorro-antd/menu', 'ng-zorro-antd/message', 'ng-zorro-antd/modal', 'ng-zorro-antd/notification', 'ng-zorro-antd/page-header', 'ng-zorro-antd/pagination', 'ng-zorro-antd/popconfirm', 'ng-zorro-antd/popover', 'ng-zorro-antd/progress', 'ng-zorro-antd/radio', 'ng-zorro-antd/rate', 'ng-zorro-antd/result', 'ng-zorro-antd/select', 'ng-zorro-antd/skeleton', 'ng-zorro-antd/slider', 'ng-zorro-antd/spin', 'ng-zorro-antd/statistic', 'ng-zorro-antd/steps', 'ng-zorro-antd/switch', 'ng-zorro-antd/table', 'ng-zorro-antd/tabs', 'ng-zorro-antd/tag', 'ng-zorro-antd/time-picker', 'ng-zorro-antd/timeline', 'ng-zorro-antd/tooltip', 'ng-zorro-antd/transfer', 'ng-zorro-antd/tree', 'ng-zorro-antd/tree-select', 'ng-zorro-antd/typography', 'ng-zorro-antd/upload', 'ng-zorro-antd/version'], factory) :
    (global = global || self, factory(global['ng-zorro-antd'] = {}, global.ng.core, global['ng-zorro-antd'].affix, global['ng-zorro-antd'].alert, global['ng-zorro-antd'].anchor, global['ng-zorro-antd']['auto-complete'], global['ng-zorro-antd'].avatar, global['ng-zorro-antd']['back-top'], global['ng-zorro-antd'].badge, global['ng-zorro-antd'].breadcrumb, global['ng-zorro-antd'].button, global['ng-zorro-antd'].calendar, global['ng-zorro-antd'].card, global['ng-zorro-antd'].carousel, global['ng-zorro-antd'].cascader, global['ng-zorro-antd'].checkbox, global['ng-zorro-antd'].collapse, global['ng-zorro-antd'].comment, global['ng-zorro-antd'].core, global['ng-zorro-antd']['date-picker'], global['ng-zorro-antd'].descriptions, global['ng-zorro-antd'].divider, global['ng-zorro-antd'].drawer, global['ng-zorro-antd'].dropdown, global['ng-zorro-antd'].empty, global['ng-zorro-antd'].form, global['ng-zorro-antd'].grid, global['ng-zorro-antd'].i18n, global['ng-zorro-antd'].icon, global['ng-zorro-antd'].input, global['ng-zorro-antd']['input-number'], global['ng-zorro-antd'].layout, global['ng-zorro-antd'].list, global['ng-zorro-antd'].mention, global['ng-zorro-antd'].menu, global['ng-zorro-antd'].message, global['ng-zorro-antd'].modal, global['ng-zorro-antd'].notification, global['ng-zorro-antd']['page-header'], global['ng-zorro-antd'].pagination, global['ng-zorro-antd'].popconfirm, global['ng-zorro-antd'].popover, global['ng-zorro-antd'].progress, global['ng-zorro-antd'].radio, global['ng-zorro-antd'].rate, global['ng-zorro-antd'].result, global['ng-zorro-antd'].select, global['ng-zorro-antd'].skeleton, global['ng-zorro-antd'].slider, global['ng-zorro-antd'].spin, global['ng-zorro-antd'].statistic, global['ng-zorro-antd'].steps, global['ng-zorro-antd'].switch, global['ng-zorro-antd'].table, global['ng-zorro-antd'].tabs, global['ng-zorro-antd'].tag, global['ng-zorro-antd']['time-picker'], global['ng-zorro-antd'].timeline, global['ng-zorro-antd'].tooltip, global['ng-zorro-antd'].transfer, global['ng-zorro-antd'].tree, global['ng-zorro-antd']['tree-select'], global['ng-zorro-antd'].typography, global['ng-zorro-antd'].upload, global['ng-zorro-antd'].version));
}(this, (function (exports, core, affix, alert, anchor, autoComplete, avatar, backTop, badge, breadcrumb, button, calendar, card, carousel, cascader, checkbox, collapse, comment, core$1, datePicker, descriptions, divider, drawer, dropdown, empty, form, grid, i18n, icon, input, inputNumber, layout, list, mention, menu, message, modal, notification, pageHeader, pagination, popconfirm, popover, progress, radio, rate, result, select, skeleton, slider, spin, statistic, steps, _switch, table, tabs, tag, timePicker, timeline, tooltip, transfer, tree, treeSelect, typography, upload, version) { 'use strict';

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NgZorroAntdModule = /** @class */ (function () {
        function NgZorroAntdModule() {
            core$1.warnDeprecation('The `NgZorroAntdModule` has been deprecated and will be removed in 10.0.0.' + ' Please use secondary entry instead.');
        }
        /** @nocollapse */ NgZorroAntdModule.ɵmod = core.ɵɵdefineNgModule({ type: NgZorroAntdModule });
        /** @nocollapse */ NgZorroAntdModule.ɵinj = core.ɵɵdefineInjector({ factory: function NgZorroAntdModule_Factory(t) { return new (t || NgZorroAntdModule)(); }, imports: [affix.NzAffixModule,
                alert.NzAlertModule,
                anchor.NzAnchorModule,
                autoComplete.NzAutocompleteModule,
                avatar.NzAvatarModule,
                backTop.NzBackTopModule,
                badge.NzBadgeModule,
                button.NzButtonModule,
                breadcrumb.NzBreadCrumbModule,
                calendar.NzCalendarModule,
                card.NzCardModule,
                carousel.NzCarouselModule,
                cascader.NzCascaderModule,
                checkbox.NzCheckboxModule,
                collapse.NzCollapseModule,
                comment.NzCommentModule,
                datePicker.NzDatePickerModule,
                descriptions.NzDescriptionsModule,
                divider.NzDividerModule,
                drawer.NzDrawerModule,
                dropdown.NzDropDownModule,
                empty.NzEmptyModule,
                form.NzFormModule,
                grid.NzGridModule,
                i18n.NzI18nModule,
                icon.NzIconModule,
                input.NzInputModule,
                inputNumber.NzInputNumberModule,
                layout.NzLayoutModule,
                list.NzListModule,
                mention.NzMentionModule,
                menu.NzMenuModule,
                message.NzMessageModule,
                modal.NzModalModule,
                core$1.NzNoAnimationModule,
                notification.NzNotificationModule,
                pageHeader.NzPageHeaderModule,
                pagination.NzPaginationModule,
                popconfirm.NzPopconfirmModule,
                popover.NzPopoverModule,
                progress.NzProgressModule,
                radio.NzRadioModule,
                rate.NzRateModule,
                result.NzResultModule,
                select.NzSelectModule,
                skeleton.NzSkeletonModule,
                slider.NzSliderModule,
                spin.NzSpinModule,
                statistic.NzStatisticModule,
                steps.NzStepsModule,
                _switch.NzSwitchModule,
                table.NzTableModule,
                tabs.NzTabsModule,
                tag.NzTagModule,
                timePicker.NzTimePickerModule,
                timeline.NzTimelineModule,
                tooltip.NzToolTipModule,
                core$1.NzTransButtonModule,
                transfer.NzTransferModule,
                tree.NzTreeModule,
                treeSelect.NzTreeSelectModule,
                typography.NzTypographyModule,
                upload.NzUploadModule,
                core$1.NzWaveModule] });
        return NgZorroAntdModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(NgZorroAntdModule, { exports: [affix.NzAffixModule,
            alert.NzAlertModule,
            anchor.NzAnchorModule,
            autoComplete.NzAutocompleteModule,
            avatar.NzAvatarModule,
            backTop.NzBackTopModule,
            badge.NzBadgeModule,
            button.NzButtonModule,
            breadcrumb.NzBreadCrumbModule,
            calendar.NzCalendarModule,
            card.NzCardModule,
            carousel.NzCarouselModule,
            cascader.NzCascaderModule,
            checkbox.NzCheckboxModule,
            collapse.NzCollapseModule,
            comment.NzCommentModule,
            datePicker.NzDatePickerModule,
            descriptions.NzDescriptionsModule,
            divider.NzDividerModule,
            drawer.NzDrawerModule,
            dropdown.NzDropDownModule,
            empty.NzEmptyModule,
            form.NzFormModule,
            grid.NzGridModule,
            i18n.NzI18nModule,
            icon.NzIconModule,
            input.NzInputModule,
            inputNumber.NzInputNumberModule,
            layout.NzLayoutModule,
            list.NzListModule,
            mention.NzMentionModule,
            menu.NzMenuModule,
            message.NzMessageModule,
            modal.NzModalModule,
            core$1.NzNoAnimationModule,
            notification.NzNotificationModule,
            pageHeader.NzPageHeaderModule,
            pagination.NzPaginationModule,
            popconfirm.NzPopconfirmModule,
            popover.NzPopoverModule,
            progress.NzProgressModule,
            radio.NzRadioModule,
            rate.NzRateModule,
            result.NzResultModule,
            select.NzSelectModule,
            skeleton.NzSkeletonModule,
            slider.NzSliderModule,
            spin.NzSpinModule,
            statistic.NzStatisticModule,
            steps.NzStepsModule,
            _switch.NzSwitchModule,
            table.NzTableModule,
            tabs.NzTabsModule,
            tag.NzTagModule,
            timePicker.NzTimePickerModule,
            timeline.NzTimelineModule,
            tooltip.NzToolTipModule,
            core$1.NzTransButtonModule,
            transfer.NzTransferModule,
            tree.NzTreeModule,
            treeSelect.NzTreeSelectModule,
            typography.NzTypographyModule,
            upload.NzUploadModule,
            core$1.NzWaveModule] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NgZorroAntdModule, [{
            type: core.NgModule,
            args: [{
                    exports: [
                        affix.NzAffixModule,
                        alert.NzAlertModule,
                        anchor.NzAnchorModule,
                        autoComplete.NzAutocompleteModule,
                        avatar.NzAvatarModule,
                        backTop.NzBackTopModule,
                        badge.NzBadgeModule,
                        button.NzButtonModule,
                        breadcrumb.NzBreadCrumbModule,
                        calendar.NzCalendarModule,
                        card.NzCardModule,
                        carousel.NzCarouselModule,
                        cascader.NzCascaderModule,
                        checkbox.NzCheckboxModule,
                        collapse.NzCollapseModule,
                        comment.NzCommentModule,
                        datePicker.NzDatePickerModule,
                        descriptions.NzDescriptionsModule,
                        divider.NzDividerModule,
                        drawer.NzDrawerModule,
                        dropdown.NzDropDownModule,
                        empty.NzEmptyModule,
                        form.NzFormModule,
                        grid.NzGridModule,
                        i18n.NzI18nModule,
                        icon.NzIconModule,
                        input.NzInputModule,
                        inputNumber.NzInputNumberModule,
                        layout.NzLayoutModule,
                        list.NzListModule,
                        mention.NzMentionModule,
                        menu.NzMenuModule,
                        message.NzMessageModule,
                        modal.NzModalModule,
                        core$1.NzNoAnimationModule,
                        notification.NzNotificationModule,
                        pageHeader.NzPageHeaderModule,
                        pagination.NzPaginationModule,
                        popconfirm.NzPopconfirmModule,
                        popover.NzPopoverModule,
                        progress.NzProgressModule,
                        radio.NzRadioModule,
                        rate.NzRateModule,
                        result.NzResultModule,
                        select.NzSelectModule,
                        skeleton.NzSkeletonModule,
                        slider.NzSliderModule,
                        spin.NzSpinModule,
                        statistic.NzStatisticModule,
                        steps.NzStepsModule,
                        _switch.NzSwitchModule,
                        table.NzTableModule,
                        tabs.NzTabsModule,
                        tag.NzTagModule,
                        timePicker.NzTimePickerModule,
                        timeline.NzTimelineModule,
                        tooltip.NzToolTipModule,
                        core$1.NzTransButtonModule,
                        transfer.NzTransferModule,
                        tree.NzTreeModule,
                        treeSelect.NzTreeSelectModule,
                        typography.NzTypographyModule,
                        upload.NzUploadModule,
                        core$1.NzWaveModule
                    ]
                }]
        }], function () { return []; }, null); })();

    Object.keys(affix).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return affix[k];
            }
        });
    });
    Object.keys(alert).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return alert[k];
            }
        });
    });
    Object.keys(anchor).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return anchor[k];
            }
        });
    });
    Object.keys(autoComplete).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return autoComplete[k];
            }
        });
    });
    Object.keys(avatar).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return avatar[k];
            }
        });
    });
    Object.keys(backTop).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return backTop[k];
            }
        });
    });
    Object.keys(badge).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return badge[k];
            }
        });
    });
    Object.keys(breadcrumb).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return breadcrumb[k];
            }
        });
    });
    Object.keys(button).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return button[k];
            }
        });
    });
    Object.keys(calendar).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return calendar[k];
            }
        });
    });
    Object.keys(card).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return card[k];
            }
        });
    });
    Object.keys(carousel).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return carousel[k];
            }
        });
    });
    Object.keys(cascader).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return cascader[k];
            }
        });
    });
    Object.keys(checkbox).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return checkbox[k];
            }
        });
    });
    Object.keys(collapse).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return collapse[k];
            }
        });
    });
    Object.keys(comment).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return comment[k];
            }
        });
    });
    Object.keys(core$1).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return core$1[k];
            }
        });
    });
    Object.keys(datePicker).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return datePicker[k];
            }
        });
    });
    Object.keys(descriptions).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return descriptions[k];
            }
        });
    });
    Object.keys(divider).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return divider[k];
            }
        });
    });
    Object.keys(drawer).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return drawer[k];
            }
        });
    });
    Object.keys(dropdown).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return dropdown[k];
            }
        });
    });
    Object.keys(empty).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return empty[k];
            }
        });
    });
    Object.keys(form).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return form[k];
            }
        });
    });
    Object.keys(grid).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return grid[k];
            }
        });
    });
    Object.keys(i18n).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return i18n[k];
            }
        });
    });
    Object.keys(icon).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return icon[k];
            }
        });
    });
    Object.keys(input).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return input[k];
            }
        });
    });
    Object.keys(inputNumber).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return inputNumber[k];
            }
        });
    });
    Object.keys(layout).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return layout[k];
            }
        });
    });
    Object.keys(list).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return list[k];
            }
        });
    });
    Object.keys(mention).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return mention[k];
            }
        });
    });
    Object.keys(menu).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return menu[k];
            }
        });
    });
    Object.keys(message).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return message[k];
            }
        });
    });
    Object.keys(modal).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return modal[k];
            }
        });
    });
    Object.keys(notification).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return notification[k];
            }
        });
    });
    Object.keys(pageHeader).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return pageHeader[k];
            }
        });
    });
    Object.keys(pagination).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return pagination[k];
            }
        });
    });
    Object.keys(popconfirm).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return popconfirm[k];
            }
        });
    });
    Object.keys(popover).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return popover[k];
            }
        });
    });
    Object.keys(progress).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return progress[k];
            }
        });
    });
    Object.keys(radio).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return radio[k];
            }
        });
    });
    Object.keys(rate).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return rate[k];
            }
        });
    });
    Object.keys(result).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return result[k];
            }
        });
    });
    Object.keys(select).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return select[k];
            }
        });
    });
    Object.keys(skeleton).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return skeleton[k];
            }
        });
    });
    Object.keys(slider).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return slider[k];
            }
        });
    });
    Object.keys(spin).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return spin[k];
            }
        });
    });
    Object.keys(statistic).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return statistic[k];
            }
        });
    });
    Object.keys(steps).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return steps[k];
            }
        });
    });
    Object.keys(_switch).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return _switch[k];
            }
        });
    });
    Object.keys(table).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return table[k];
            }
        });
    });
    Object.keys(tabs).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return tabs[k];
            }
        });
    });
    Object.keys(tag).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return tag[k];
            }
        });
    });
    Object.keys(timePicker).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return timePicker[k];
            }
        });
    });
    Object.keys(timeline).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return timeline[k];
            }
        });
    });
    Object.keys(tooltip).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return tooltip[k];
            }
        });
    });
    Object.keys(transfer).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return transfer[k];
            }
        });
    });
    Object.keys(tree).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return tree[k];
            }
        });
    });
    Object.keys(treeSelect).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return treeSelect[k];
            }
        });
    });
    Object.keys(typography).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return typography[k];
            }
        });
    });
    Object.keys(upload).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return upload[k];
            }
        });
    });
    Object.keys(version).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return version[k];
            }
        });
    });
    exports.NgZorroAntdModule = NgZorroAntdModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd.umd.js.map

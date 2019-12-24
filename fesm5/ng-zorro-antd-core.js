import { CommonModule, DOCUMENT } from '@angular/common';
import { ɵɵdirectiveInject, ElementRef, Renderer2, ɵɵdefineDirective, ɵsetClassMetadata, Directive, Input, TemplateRef, ViewContainerRef, ɵɵNgOnChangesFeature, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, isDevMode, Optional, Inject, ɵɵinject, ɵɵdefineInjectable, Injectable, SkipSelf, RendererFactory2, NgZone, Type, EventEmitter, InjectionToken, ɵɵallocHostVars, ɵɵstyleSanitizer, ɵɵdefaultStyleSanitizer, ɵɵstyleProp, ɵɵdefinePipe, Pipe } from '@angular/core';
import { __values, __spread, __decorate, __metadata, __read, __assign, __extends } from 'tslib';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { coerceBooleanProperty, _isNumberValue, coerceCssPixelValue, coerceElement } from '@angular/cdk/coercion';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import { CdkConnectedOverlay, ConnectionPositionPair } from '@angular/cdk/overlay';
import { startOfWeek, startOfMonth, setYear, isSameDay, isSameSecond, isSameMinute, isSameHour, isSameMonth, isSameYear, differenceInCalendarDays, differenceInSeconds, differenceInMinutes, differenceInHours, differenceInCalendarMonths, differenceInCalendarYears, isToday, isValid } from 'date-fns';
import addMonths from 'date-fns/add_months';
import addYears from 'date-fns/add_years';
import setDay from 'date-fns/set_day';
import setMonth from 'date-fns/set_month';
import { Subject, BehaviorSubject } from 'rxjs';
import { auditTime, map, filter, finalize, take, mapTo } from 'rxjs/operators';
import { Platform, PlatformModule } from '@angular/cdk/platform';

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzClassListAddDirective = /** @class */ (function () {
    function NzClassListAddDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.classList = [];
    }
    Object.defineProperty(NzClassListAddDirective.prototype, "nzClassListAdd", {
        set: function (list) {
            var _this = this;
            this.classList.forEach(function (name) {
                _this.renderer.removeClass(_this.elementRef.nativeElement, name);
            });
            list.forEach(function (name) {
                _this.renderer.addClass(_this.elementRef.nativeElement, name);
            });
            this.classList = list;
        },
        enumerable: true,
        configurable: true
    });
    /** @nocollapse */ NzClassListAddDirective.ɵfac = function NzClassListAddDirective_Factory(t) { return new (t || NzClassListAddDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2)); };
    /** @nocollapse */ NzClassListAddDirective.ɵdir = ɵɵdefineDirective({ type: NzClassListAddDirective, selectors: [["", "nzClassListAdd", ""]], inputs: { nzClassListAdd: "nzClassListAdd" }, exportAs: ["nzClassListAdd"] });
    return NzClassListAddDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzClassListAddDirective, [{
        type: Directive,
        args: [{
                selector: '[nzClassListAdd]',
                exportAs: 'nzClassListAdd'
            }]
    }], function () { return [{ type: ElementRef }, { type: Renderer2 }]; }, { nzClassListAdd: [{
            type: Input
        }] }); })();

var NzStringTemplateOutletDirective = /** @class */ (function () {
    function NzStringTemplateOutletDirective(viewContainer, defaultTemplate) {
        this.viewContainer = viewContainer;
        this.defaultTemplate = defaultTemplate;
        // tslint:disable-next-line:no-any
        this.inputTemplate = null;
        this.inputViewRef = null;
        this.defaultViewRef = null;
        // tslint:disable-next-line:no-any
        this.nzStringTemplateOutletContext = null;
    }
    Object.defineProperty(NzStringTemplateOutletDirective.prototype, "nzStringTemplateOutlet", {
        set: function (value) {
            if (value instanceof TemplateRef) {
                this.isTemplate = true;
                this.inputTemplate = value;
            }
            else {
                this.isTemplate = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    NzStringTemplateOutletDirective.prototype.recreateView = function () {
        if (!this.isTemplate) {
            /** use default template when input is string **/
            if (!this.defaultViewRef) {
                if (this.defaultTemplate) {
                    this.defaultViewRef = this.viewContainer.createEmbeddedView(this.defaultTemplate, this.nzStringTemplateOutletContext);
                }
            }
        }
        else {
            /** use input template when input is templateRef **/
            if (!this.inputViewRef) {
                if (this.inputTemplate) {
                    this.inputViewRef = this.viewContainer.createEmbeddedView(this.inputTemplate, this.nzStringTemplateOutletContext);
                }
            }
        }
    };
    // tslint:disable-next-line:no-any
    NzStringTemplateOutletDirective.prototype.getType = function (value) {
        if (value instanceof TemplateRef) {
            return 'template';
        }
        else {
            return 'string';
        }
    };
    NzStringTemplateOutletDirective.prototype.shouldRecreateView = function (changes) {
        var nzStringTemplateOutletContext = changes.nzStringTemplateOutletContext, nzStringTemplateOutlet = changes.nzStringTemplateOutlet;
        var shouldOutletRecreate = false;
        if (nzStringTemplateOutlet) {
            if (nzStringTemplateOutlet.firstChange) {
                shouldOutletRecreate = true;
            }
            else {
                var previousOutletType = this.getType(nzStringTemplateOutlet.previousValue);
                var currentOutletType = this.getType(nzStringTemplateOutlet.currentValue);
                shouldOutletRecreate = !(previousOutletType === 'string' && currentOutletType === 'string');
            }
        }
        var shouldContextRecreate = nzStringTemplateOutletContext && this.hasContextShapeChanged(nzStringTemplateOutletContext);
        return shouldContextRecreate || shouldOutletRecreate;
    };
    NzStringTemplateOutletDirective.prototype.hasContextShapeChanged = function (ctxChange) {
        var e_1, _a;
        var prevCtxKeys = Object.keys(ctxChange.previousValue || {});
        var currCtxKeys = Object.keys(ctxChange.currentValue || {});
        if (prevCtxKeys.length === currCtxKeys.length) {
            try {
                for (var currCtxKeys_1 = __values(currCtxKeys), currCtxKeys_1_1 = currCtxKeys_1.next(); !currCtxKeys_1_1.done; currCtxKeys_1_1 = currCtxKeys_1.next()) {
                    var propName = currCtxKeys_1_1.value;
                    if (prevCtxKeys.indexOf(propName) === -1) {
                        return true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (currCtxKeys_1_1 && !currCtxKeys_1_1.done && (_a = currCtxKeys_1.return)) _a.call(currCtxKeys_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return false;
        }
        else {
            return true;
        }
    };
    // tslint:disable-next-line:no-any
    NzStringTemplateOutletDirective.prototype.updateExistingContext = function (ctx) {
        var e_2, _a;
        try {
            for (var _b = __values(Object.keys(ctx)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var propName = _c.value;
                // tslint:disable-next-line:no-any
                this.inputViewRef.context[propName] = this.nzStringTemplateOutletContext[propName];
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    NzStringTemplateOutletDirective.prototype.ngOnChanges = function (changes) {
        var recreateView = this.shouldRecreateView(changes);
        if (recreateView) {
            if (this.viewContainer) {
                this.viewContainer.clear();
                this.defaultViewRef = null;
                this.inputViewRef = null;
            }
            this.recreateView();
        }
        else {
            if (this.inputViewRef && this.nzStringTemplateOutletContext) {
                this.updateExistingContext(this.nzStringTemplateOutletContext);
            }
        }
    };
    /** @nocollapse */ NzStringTemplateOutletDirective.ɵfac = function NzStringTemplateOutletDirective_Factory(t) { return new (t || NzStringTemplateOutletDirective)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(TemplateRef)); };
    /** @nocollapse */ NzStringTemplateOutletDirective.ɵdir = ɵɵdefineDirective({ type: NzStringTemplateOutletDirective, selectors: [["", "nzStringTemplateOutlet", ""]], inputs: { nzStringTemplateOutletContext: "nzStringTemplateOutletContext", nzStringTemplateOutlet: "nzStringTemplateOutlet" }, exportAs: ["nzStringTemplateOutlet"], features: [ɵɵNgOnChangesFeature()] });
    return NzStringTemplateOutletDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzStringTemplateOutletDirective, [{
        type: Directive,
        args: [{
                selector: '[nzStringTemplateOutlet]',
                exportAs: 'nzStringTemplateOutlet'
            }]
    }], function () { return [{ type: ViewContainerRef }, { type: TemplateRef }]; }, { nzStringTemplateOutletContext: [{
            type: Input
        }], nzStringTemplateOutlet: [{
            type: Input
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzAddOnModule = /** @class */ (function () {
    function NzAddOnModule() {
    }
    /** @nocollapse */ NzAddOnModule.ɵmod = ɵɵdefineNgModule({ type: NzAddOnModule });
    /** @nocollapse */ NzAddOnModule.ɵinj = ɵɵdefineInjector({ factory: function NzAddOnModule_Factory(t) { return new (t || NzAddOnModule)(); }, imports: [[CommonModule]] });
    return NzAddOnModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzAddOnModule, { declarations: [NzStringTemplateOutletDirective, NzClassListAddDirective], imports: [CommonModule], exports: [NzStringTemplateOutletDirective, NzClassListAddDirective] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzAddOnModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [NzStringTemplateOutletDirective, NzClassListAddDirective],
                declarations: [NzStringTemplateOutletDirective, NzClassListAddDirective]
            }]
    }], null, null); })();

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
var AnimationDuration = /** @class */ (function () {
    function AnimationDuration() {
    }
    AnimationDuration.SLOW = '0.3s'; // Modal
    AnimationDuration.BASE = '0.2s';
    AnimationDuration.FAST = '0.1s'; // Tooltip
    return AnimationDuration;
}());
var AnimationCurves = /** @class */ (function () {
    function AnimationCurves() {
    }
    AnimationCurves.EASE_BASE_OUT = 'cubic-bezier(0.7, 0.3, 0.1, 1)';
    AnimationCurves.EASE_BASE_IN = 'cubic-bezier(0.9, 0, 0.3, 0.7)';
    AnimationCurves.EASE_OUT = 'cubic-bezier(0.215, 0.61, 0.355, 1)';
    AnimationCurves.EASE_IN = 'cubic-bezier(0.55, 0.055, 0.675, 0.19)';
    AnimationCurves.EASE_IN_OUT = 'cubic-bezier(0.645, 0.045, 0.355, 1)';
    AnimationCurves.EASE_OUT_BACK = 'cubic-bezier(0.12, 0.4, 0.29, 1.46)';
    AnimationCurves.EASE_IN_BACK = 'cubic-bezier(0.71, -0.46, 0.88, 0.6)';
    AnimationCurves.EASE_IN_OUT_BACK = 'cubic-bezier(0.71, -0.46, 0.29, 1.46)';
    AnimationCurves.EASE_OUT_CIRC = 'cubic-bezier(0.08, 0.82, 0.17, 1)';
    AnimationCurves.EASE_IN_CIRC = 'cubic-bezier(0.6, 0.04, 0.98, 0.34)';
    AnimationCurves.EASE_IN_OUT_CIRC = 'cubic-bezier(0.78, 0.14, 0.15, 0.86)';
    AnimationCurves.EASE_OUT_QUINT = 'cubic-bezier(0.23, 1, 0.32, 1)';
    AnimationCurves.EASE_IN_QUINT = 'cubic-bezier(0.755, 0.05, 0.855, 0.06)';
    AnimationCurves.EASE_IN_OUT_QUINT = 'cubic-bezier(0.86, 0, 0.07, 1)';
    return AnimationCurves;
}());

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var collapseMotion = trigger('collapseMotion', [
    state('expanded', style({ height: '*' })),
    state('collapsed', style({ height: 0, overflow: 'hidden' })),
    state('hidden', style({ height: 0, overflow: 'hidden', borderTopWidth: '0' })),
    transition('expanded => collapsed', animate("150ms " + AnimationCurves.EASE_IN_OUT)),
    transition('expanded => hidden', animate("150ms " + AnimationCurves.EASE_IN_OUT)),
    transition('collapsed => expanded', animate("150ms " + AnimationCurves.EASE_IN_OUT)),
    transition('hidden => expanded', animate("150ms " + AnimationCurves.EASE_IN_OUT))
]);
var treeCollapseMotion = trigger('treeCollapseMotion', [
    transition(':leave', [style({ overflow: 'hidden' }), animate("150ms " + AnimationCurves.EASE_IN_OUT, style({ height: 0 }))]),
    transition(':enter', [
        style({ overflow: 'hidden', height: 0 }),
        animate("150ms " + AnimationCurves.EASE_IN_OUT, style({ overflow: 'hidden', height: '*' }))
    ])
]);

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var fadeMotion = trigger('fadeMotion', [
    transition(':enter', [style({ opacity: 0 }), animate("" + AnimationDuration.BASE, style({ opacity: 1 }))]),
    transition(':leave', [style({ opacity: 1 }), animate("" + AnimationDuration.BASE, style({ opacity: 0 }))])
]);

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var helpMotion = trigger('helpMotion', [
    transition(':enter', [
        style({
            opacity: 0,
            transform: 'translateY(-5px)'
        }),
        animate(AnimationDuration.SLOW + " " + AnimationCurves.EASE_IN_OUT, style({
            opacity: 1,
            transform: 'translateY(0)'
        }))
    ]),
    transition(':leave', [
        style({
            opacity: 1,
            transform: 'translateY(0)'
        }),
        animate(AnimationDuration.SLOW + " " + AnimationCurves.EASE_IN_OUT, style({
            opacity: 0,
            transform: 'translateY(-5px)'
        }))
    ])
]);

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var moveUpMotion = trigger('moveUpMotion', [
    transition('* => enter', [
        style({
            transformOrigin: '0 0',
            transform: 'translateY(-100%)',
            opacity: 0
        }),
        animate("" + AnimationDuration.BASE, style({
            transformOrigin: '0 0',
            transform: 'translateY(0%)',
            opacity: 1
        }))
    ]),
    transition('* => leave', [
        style({
            transformOrigin: '0 0',
            transform: 'translateY(0%)',
            opacity: 1
        }),
        animate("" + AnimationDuration.BASE, style({
            transformOrigin: '0 0',
            transform: 'translateY(-100%)',
            opacity: 0
        }))
    ])
]);

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var notificationMotion = trigger('notificationMotion', [
    state('enterRight', style({ opacity: 1, transform: 'translateX(0)' })),
    transition('* => enterRight', [style({ opacity: 0, transform: 'translateX(5%)' }), animate('100ms linear')]),
    state('enterLeft', style({ opacity: 1, transform: 'translateX(0)' })),
    transition('* => enterLeft', [style({ opacity: 0, transform: 'translateX(-5%)' }), animate('100ms linear')]),
    state('leave', style({
        opacity: 0,
        transform: 'scaleY(0.8)',
        transformOrigin: '0% 0%'
    })),
    transition('* => leave', [
        style({
            opacity: 1,
            transform: 'scaleY(1)',
            transformOrigin: '0% 0%'
        }),
        animate('100ms linear')
    ])
]);

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var ANIMATION_TRANSITION_IN = AnimationDuration.BASE + " " + AnimationCurves.EASE_OUT_QUINT;
var ANIMATION_TRANSITION_OUT = AnimationDuration.BASE + " " + AnimationCurves.EASE_IN_QUINT;
var slideMotion = trigger('slideMotion', [
    state('bottom', style({
        opacity: 1,
        transform: 'scaleY(1)',
        transformOrigin: '0% 0%'
    })),
    state('top', style({
        opacity: 1,
        transform: 'scaleY(1)',
        transformOrigin: '0% 100%'
    })),
    transition('void => bottom', [
        style({
            opacity: 0,
            transform: 'scaleY(0.8)',
            transformOrigin: '0% 0%'
        }),
        animate(ANIMATION_TRANSITION_IN)
    ]),
    transition('bottom => void', [
        animate(ANIMATION_TRANSITION_OUT, style({
            opacity: 0,
            transform: 'scaleY(0.8)',
            transformOrigin: '0% 0%'
        }))
    ]),
    transition('void => top', [
        style({
            opacity: 0,
            transform: 'scaleY(0.8)',
            transformOrigin: '0% 100%'
        }),
        animate(ANIMATION_TRANSITION_IN)
    ]),
    transition('top => void', [
        animate(ANIMATION_TRANSITION_OUT, style({
            opacity: 0,
            transform: 'scaleY(0.8)',
            transformOrigin: '0% 100%'
        }))
    ])
]);
var slideAlertMotion = trigger('slideAlertMotion', [
    transition(':leave', [
        style({ opacity: 1, transform: 'scaleY(1)', transformOrigin: '0% 0%' }),
        animate(AnimationDuration.SLOW + " " + AnimationCurves.EASE_IN_OUT_CIRC, style({
            opacity: 0,
            transform: 'scaleY(0)',
            transformOrigin: '0% 0%'
        }))
    ])
]);

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var zoomMotion = trigger('zoomMotion', [
    transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.2)' }),
        animate(AnimationDuration.BASE + " " + AnimationCurves.EASE_OUT_CIRC, style({
            opacity: 1,
            transform: 'scale(1)'
        }))
    ]),
    transition(':leave', [
        style({ opacity: 1, transform: 'scale(1)' }),
        animate(AnimationDuration.BASE + " " + AnimationCurves.EASE_IN_OUT_CIRC, style({
            opacity: 0,
            transform: 'scale(0.2)'
        }))
    ])
]);
var zoomBigMotion = trigger('zoomBigMotion', [
    transition('void => active', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate(AnimationDuration.BASE + " " + AnimationCurves.EASE_OUT_CIRC, style({
            opacity: 1,
            transform: 'scale(1)'
        }))
    ]),
    transition('active => void', [
        style({ opacity: 1, transform: 'scale(1)' }),
        animate(AnimationDuration.BASE + " " + AnimationCurves.EASE_IN_OUT_CIRC, style({
            opacity: 0,
            transform: 'scale(0.8)'
        }))
    ])
]);
var zoomBadgeMotion = trigger('zoomBadgeMotion', [
    transition(':enter', [
        style({ opacity: 0, transform: 'scale(0) translate(50%, -50%)' }),
        animate(AnimationDuration.SLOW + " " + AnimationCurves.EASE_OUT_BACK, style({
            opacity: 1,
            transform: 'scale(1) translate(50%, -50%)'
        }))
    ]),
    transition(':leave', [
        style({ opacity: 1, transform: 'scale(1) translate(50%, -50%)' }),
        animate(AnimationDuration.SLOW + " " + AnimationCurves.EASE_IN_BACK, style({
            opacity: 0,
            transform: 'scale(0) translate(50%, -50%)'
        }))
    ])
]);

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
var environment = {
    isTestMode: false
};

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var record = {};
var PREFIX = '[NG-ZORRO]:';
function notRecorded() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var asRecord = args.reduce(function (acc, c) { return acc + c.toString(); }, '');
    if (record[asRecord]) {
        return false;
    }
    else {
        record[asRecord] = true;
        return true;
    }
}
function consoleCommonBehavior(consoleFunc) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (environment.isTestMode || (isDevMode() && notRecorded.apply(void 0, __spread(args)))) {
        consoleFunc.apply(void 0, __spread(args));
    }
}
// Warning should only be printed in dev mode and only once.
var warn = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return consoleCommonBehavior.apply(void 0, __spread([function () {
            var arg = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                arg[_i] = arguments[_i];
            }
            return console.warn.apply(console, __spread([PREFIX], arg));
        }], args));
};
var warnDeprecation = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!environment.isTestMode) {
        var stack_1 = new Error().stack;
        return consoleCommonBehavior.apply(void 0, __spread([function () {
                var arg = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    arg[_i] = arguments[_i];
                }
                return console.warn.apply(console, __spread([PREFIX, 'deprecated:'], arg, [stack_1]));
            }], args));
    }
    else {
        return function () { };
    }
};
// Log should only be printed in dev mode.
var log = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (isDevMode()) {
        console.log.apply(console, __spread([PREFIX], args));
    }
};

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function toBoolean(value) {
    return coerceBooleanProperty(value);
}
function toNumber(value, fallbackValue) {
    if (fallbackValue === void 0) { fallbackValue = 0; }
    return _isNumberValue(value) ? Number(value) : fallbackValue;
}
function toCssPixel(value) {
    return coerceCssPixelValue(value);
}
// tslint:disable no-any
// tslint:disable no-invalid-this
/**
 * Get the function-property type's value
 */
function valueFunctionProp(prop) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return typeof prop === 'function' ? prop.apply(void 0, __spread(args)) : prop;
}
function propDecoratorFactory(name, fallback) {
    function propDecorator(target, propName, originalDescriptor) {
        var privatePropName = "$$__" + propName;
        if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
            warn("The prop \"" + privatePropName + "\" is already exist, it will be overrided by " + name + " decorator.");
        }
        Object.defineProperty(target, privatePropName, {
            configurable: true,
            writable: true
        });
        return {
            get: function () {
                return originalDescriptor && originalDescriptor.get ? originalDescriptor.get.bind(this)() : this[privatePropName];
            },
            set: function (value) {
                if (originalDescriptor && originalDescriptor.set) {
                    originalDescriptor.set.bind(this)(fallback(value));
                }
                this[privatePropName] = fallback(value);
            }
        };
    }
    return propDecorator;
}
/**
 * Input decorator that handle a prop to do get/set automatically with toBoolean
 *
 * Why not using @InputBoolean alone without @Input? AOT needs @Input to be visible
 *
 * @howToUse
 * ```
 * @Input() @InputBoolean() visible: boolean = false;
 *
 * // Act as below:
 * // @Input()
 * // get visible() { return this.__visible; }
 * // set visible(value) { this.__visible = value; }
 * // __visible = false;
 * ```
 */
function InputBoolean() {
    return propDecoratorFactory('InputBoolean', toBoolean);
}
function InputCssPixel() {
    return propDecoratorFactory('InputCssPixel', toCssPixel);
}
function InputNumber() {
    // tslint:disable-line: no-any
    return propDecoratorFactory('InputNumber', toNumber);
}

var DISABLED_CLASSNAME = 'nz-animate-disabled';
var NzNoAnimationDirective = /** @class */ (function () {
    function NzNoAnimationDirective(element, renderer, animationType) {
        this.element = element;
        this.renderer = renderer;
        this.animationType = animationType;
        this.nzNoAnimation = false;
    }
    NzNoAnimationDirective.prototype.ngOnChanges = function () {
        this.updateClass();
    };
    NzNoAnimationDirective.prototype.ngAfterViewInit = function () {
        this.updateClass();
    };
    NzNoAnimationDirective.prototype.updateClass = function () {
        var element = coerceElement(this.element);
        if (!element) {
            return;
        }
        if (this.nzNoAnimation || this.animationType === 'NoopAnimations') {
            this.renderer.addClass(element, DISABLED_CLASSNAME);
        }
        else {
            this.renderer.removeClass(element, DISABLED_CLASSNAME);
        }
    };
    /** @nocollapse */ NzNoAnimationDirective.ɵfac = function NzNoAnimationDirective_Factory(t) { return new (t || NzNoAnimationDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8)); };
    /** @nocollapse */ NzNoAnimationDirective.ɵdir = ɵɵdefineDirective({ type: NzNoAnimationDirective, selectors: [["", "nzNoAnimation", ""]], inputs: { nzNoAnimation: "nzNoAnimation" }, exportAs: ["nzNoAnimation"], features: [ɵɵNgOnChangesFeature()] });
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzNoAnimationDirective.prototype, "nzNoAnimation", void 0);
    return NzNoAnimationDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzNoAnimationDirective, [{
        type: Directive,
        args: [{
                selector: '[nzNoAnimation]',
                exportAs: 'nzNoAnimation'
            }]
    }], function () { return [{ type: ElementRef }, { type: Renderer2 }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [ANIMATION_MODULE_TYPE]
            }] }]; }, { nzNoAnimation: [{
            type: Input
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzNoAnimationModule = /** @class */ (function () {
    function NzNoAnimationModule() {
    }
    /** @nocollapse */ NzNoAnimationModule.ɵmod = ɵɵdefineNgModule({ type: NzNoAnimationModule });
    /** @nocollapse */ NzNoAnimationModule.ɵinj = ɵɵdefineInjector({ factory: function NzNoAnimationModule_Factory(t) { return new (t || NzNoAnimationModule)(); }, imports: [[CommonModule]] });
    return NzNoAnimationModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzNoAnimationModule, { declarations: [NzNoAnimationDirective], imports: [CommonModule], exports: [NzNoAnimationDirective] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzNoAnimationModule, [{
        type: NgModule,
        args: [{
                declarations: [NzNoAnimationDirective],
                exports: [NzNoAnimationDirective],
                imports: [CommonModule]
            }]
    }], null, null); })();

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
var NzConnectedOverlayDirective = /** @class */ (function () {
    function NzConnectedOverlayDirective(cdkConnectedOverlay) {
        this.cdkConnectedOverlay = cdkConnectedOverlay;
        this.cdkConnectedOverlay.backdropClass = 'nz-overlay-transparent-backdrop';
    }
    /** @nocollapse */ NzConnectedOverlayDirective.ɵfac = function NzConnectedOverlayDirective_Factory(t) { return new (t || NzConnectedOverlayDirective)(ɵɵdirectiveInject(CdkConnectedOverlay)); };
    /** @nocollapse */ NzConnectedOverlayDirective.ɵdir = ɵɵdefineDirective({ type: NzConnectedOverlayDirective, selectors: [["", "cdkConnectedOverlay", "", "nzConnectedOverlay", ""]], exportAs: ["nzConnectedOverlay"] });
    return NzConnectedOverlayDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzConnectedOverlayDirective, [{
        type: Directive,
        args: [{
                selector: '[cdkConnectedOverlay][nzConnectedOverlay]',
                exportAs: 'nzConnectedOverlay'
            }]
    }], function () { return [{ type: CdkConnectedOverlay }]; }, null); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzOverlayModule = /** @class */ (function () {
    function NzOverlayModule() {
    }
    /** @nocollapse */ NzOverlayModule.ɵmod = ɵɵdefineNgModule({ type: NzOverlayModule });
    /** @nocollapse */ NzOverlayModule.ɵinj = ɵɵdefineInjector({ factory: function NzOverlayModule_Factory(t) { return new (t || NzOverlayModule)(); } });
    return NzOverlayModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzOverlayModule, { declarations: [NzConnectedOverlayDirective], exports: [NzConnectedOverlayDirective] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzOverlayModule, [{
        type: NgModule,
        args: [{
                declarations: [NzConnectedOverlayDirective],
                exports: [NzConnectedOverlayDirective]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var POSITION_MAP = {
    top: new ConnectionPositionPair({ originX: 'center', originY: 'top' }, { overlayX: 'center', overlayY: 'bottom' }),
    topCenter: new ConnectionPositionPair({ originX: 'center', originY: 'top' }, { overlayX: 'center', overlayY: 'bottom' }),
    topLeft: new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
    topRight: new ConnectionPositionPair({ originX: 'end', originY: 'top' }, { overlayX: 'end', overlayY: 'bottom' }),
    right: new ConnectionPositionPair({ originX: 'end', originY: 'center' }, { overlayX: 'start', overlayY: 'center' }),
    rightTop: new ConnectionPositionPair({ originX: 'end', originY: 'top' }, { overlayX: 'start', overlayY: 'top' }),
    rightBottom: new ConnectionPositionPair({ originX: 'end', originY: 'bottom' }, { overlayX: 'start', overlayY: 'bottom' }),
    bottom: new ConnectionPositionPair({ originX: 'center', originY: 'bottom' }, { overlayX: 'center', overlayY: 'top' }),
    bottomCenter: new ConnectionPositionPair({ originX: 'center', originY: 'bottom' }, { overlayX: 'center', overlayY: 'top' }),
    bottomLeft: new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
    bottomRight: new ConnectionPositionPair({ originX: 'end', originY: 'bottom' }, { overlayX: 'end', overlayY: 'top' }),
    left: new ConnectionPositionPair({ originX: 'start', originY: 'center' }, { overlayX: 'end', overlayY: 'center' }),
    leftTop: new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'top' }),
    leftBottom: new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'end', overlayY: 'bottom' })
};
var DEFAULT_TOOLTIP_POSITIONS = [POSITION_MAP.top, POSITION_MAP.right, POSITION_MAP.bottom, POSITION_MAP.left];
var DEFAULT_DROPDOWN_POSITIONS = [POSITION_MAP.bottomLeft, POSITION_MAP.bottomRight, POSITION_MAP.topRight, POSITION_MAP.topLeft];
var DEFAULT_SUBMENU_POSITIONS = [POSITION_MAP.rightTop, POSITION_MAP.leftTop];
var DEFAULT_MENTION_TOP_POSITIONS = [
    new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'bottom' }),
    new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'end', overlayY: 'bottom' })
];
var DEFAULT_MENTION_BOTTOM_POSITIONS = [
    POSITION_MAP.bottomLeft,
    new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'end', overlayY: 'top' })
];
function getPlacementName(position) {
    var keyList = ['originX', 'originY', 'overlayX', 'overlayY'];
    var _loop_1 = function (placement) {
        // @ts-ignore
        if (keyList.every(function (key) { return position.connectionPair[key] === POSITION_MAP[placement][key]; })) {
            return { value: placement };
        }
    };
    for (var placement in POSITION_MAP) {
        var state_1 = _loop_1(placement);
        if (typeof state_1 === "object")
            return state_1.value;
    }
    return undefined;
}

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
function sortRangeValue(rangeValue) {
    if (Array.isArray(rangeValue)) {
        var _a = __read(rangeValue, 2), start = _a[0], end = _a[1];
        return start && end && start.isAfterSecond(end) ? [end, start] : [start, end];
    }
    return rangeValue;
}
/**
 * Wrapping kind APIs for date operating and unify
 * NOTE: every new API return new CandyDate object without side effects to the former Date object
 * NOTE: most APIs are based on local time other than customized locale id (this needs tobe support in future)
 * TODO: support format() against to angular's core API
 */
var CandyDate = /** @class */ (function () {
    // locale: string; // Custom specified locale ID
    function CandyDate(date) {
        if (date) {
            if (date instanceof Date) {
                this.nativeDate = date;
            }
            else if (typeof date === 'string' || typeof date === 'number') {
                warn('The string type is not recommended for date-picker, use "Date" type');
                this.nativeDate = new Date(date);
            }
            else {
                throw new Error('The input date type is not supported ("Date" is now recommended)');
            }
        }
        else {
            this.nativeDate = new Date();
        }
    }
    // getLocale(): string {
    //   return this.locale;
    // }
    // setLocale(locale: string): CandyDate {
    //   this.locale = locale;
    //   return this;
    // }
    CandyDate.prototype.calendarStart = function (options) {
        return new CandyDate(startOfWeek(startOfMonth(this.nativeDate), options));
    };
    // ---------------------------------------------------------------------
    // | Native shortcuts
    // ---------------------------------------------------------------------
    CandyDate.prototype.getYear = function () {
        return this.nativeDate.getFullYear();
    };
    CandyDate.prototype.getMonth = function () {
        return this.nativeDate.getMonth();
    };
    CandyDate.prototype.getDay = function () {
        return this.nativeDate.getDay();
    };
    CandyDate.prototype.getTime = function () {
        return this.nativeDate.getTime();
    };
    CandyDate.prototype.getDate = function () {
        return this.nativeDate.getDate();
    };
    CandyDate.prototype.getHours = function () {
        return this.nativeDate.getHours();
    };
    CandyDate.prototype.getMinutes = function () {
        return this.nativeDate.getMinutes();
    };
    CandyDate.prototype.getSeconds = function () {
        return this.nativeDate.getSeconds();
    };
    CandyDate.prototype.getMilliseconds = function () {
        return this.nativeDate.getMilliseconds();
    };
    // ---------------------------------------------------------------------
    // | New implementing APIs
    // ---------------------------------------------------------------------
    CandyDate.prototype.clone = function () {
        return new CandyDate(new Date(this.nativeDate));
    };
    CandyDate.prototype.setHms = function (hour, minute, second) {
        return new CandyDate(this.nativeDate.setHours(hour, minute, second));
    };
    CandyDate.prototype.setYear = function (year) {
        return new CandyDate(setYear(this.nativeDate, year));
    };
    CandyDate.prototype.addYears = function (amount) {
        return new CandyDate(addYears(this.nativeDate, amount));
    };
    // NOTE: month starts from 0
    // NOTE: Don't use the native API for month manipulation as it not restrict the date when it overflows, eg. (new Date('2018-7-31')).setMonth(1) will be date of 2018-3-03 instead of 2018-2-28
    CandyDate.prototype.setMonth = function (month) {
        return new CandyDate(setMonth(this.nativeDate, month));
    };
    CandyDate.prototype.addMonths = function (amount) {
        return new CandyDate(addMonths(this.nativeDate, amount));
    };
    CandyDate.prototype.setDay = function (day, options) {
        return new CandyDate(setDay(this.nativeDate, day, options));
    };
    CandyDate.prototype.setDate = function (amount) {
        var date = new Date(this.nativeDate);
        date.setDate(amount);
        return new CandyDate(date);
    };
    CandyDate.prototype.addDays = function (amount) {
        return this.setDate(this.getDate() + amount);
    };
    CandyDate.prototype.isSame = function (date, grain) {
        if (grain === void 0) { grain = 'day'; }
        var fn;
        switch (grain) {
            case 'year':
                fn = isSameYear;
                break;
            case 'month':
                fn = isSameMonth;
                break;
            case 'day':
                fn = isSameDay;
                break;
            case 'hour':
                fn = isSameHour;
                break;
            case 'minute':
                fn = isSameMinute;
                break;
            case 'second':
                fn = isSameSecond;
                break;
            default:
                fn = isSameDay;
                break;
        }
        return fn(this.nativeDate, this.toNativeDate(date));
    };
    CandyDate.prototype.isSameYear = function (date) {
        return this.isSame(date, 'year');
    };
    CandyDate.prototype.isSameMonth = function (date) {
        return this.isSame(date, 'month');
    };
    CandyDate.prototype.isSameDay = function (date) {
        return this.isSame(date, 'day');
    };
    CandyDate.prototype.isSameHour = function (date) {
        return this.isSame(date, 'hour');
    };
    CandyDate.prototype.isSameMinute = function (date) {
        return this.isSame(date, 'minute');
    };
    CandyDate.prototype.isSameSecond = function (date) {
        return this.isSame(date, 'second');
    };
    CandyDate.prototype.compare = function (date, grain, isBefore) {
        if (grain === void 0) { grain = 'day'; }
        if (isBefore === void 0) { isBefore = true; }
        if (date === null) {
            return false;
        }
        var fn;
        switch (grain) {
            case 'year':
                fn = differenceInCalendarYears;
                break;
            case 'month':
                fn = differenceInCalendarMonths;
                break;
            case 'day':
                fn = differenceInCalendarDays;
                break;
            case 'hour':
                fn = differenceInHours;
                break;
            case 'minute':
                fn = differenceInMinutes;
                break;
            case 'second':
                fn = differenceInSeconds;
                break;
            default:
                fn = differenceInCalendarDays;
                break;
        }
        return isBefore ? fn(this.nativeDate, this.toNativeDate(date)) < 0 : fn(this.nativeDate, this.toNativeDate(date)) > 0;
    };
    CandyDate.prototype.isBeforeYear = function (date) {
        return this.compare(date, 'year');
    };
    CandyDate.prototype.isBeforeMonth = function (date) {
        return this.compare(date, 'month');
    };
    CandyDate.prototype.isBeforeDay = function (date) {
        return this.compare(date, 'day');
    };
    CandyDate.prototype.isBeforeHour = function (date) {
        return this.compare(date, 'hour');
    };
    CandyDate.prototype.isBeforeMinute = function (date) {
        return this.compare(date, 'minute');
    };
    CandyDate.prototype.isBeforeSecond = function (date) {
        return this.compare(date, 'second');
    };
    // TODO: isBefore
    CandyDate.prototype.isAfterYear = function (date) {
        return this.compare(date, 'year', false);
    };
    CandyDate.prototype.isAfterMonth = function (date) {
        return this.compare(date, 'month', false);
    };
    CandyDate.prototype.isAfterDay = function (date) {
        return this.compare(date, 'day', false);
    };
    CandyDate.prototype.isAfterHour = function (date) {
        return this.compare(date, 'hour', false);
    };
    CandyDate.prototype.isAfterMinute = function (date) {
        return this.compare(date, 'minute', false);
    };
    CandyDate.prototype.isAfterSecond = function (date) {
        return this.compare(date, 'second', false);
    };
    // Equal to today accurate to "day"
    CandyDate.prototype.isToday = function () {
        return isToday(this.nativeDate);
    };
    CandyDate.prototype.isValid = function () {
        return isValid(this.nativeDate);
    };
    // tslint:disable-next-line: no-any
    CandyDate.prototype.toNativeDate = function (date) {
        return date instanceof CandyDate ? date.nativeDate : date;
    };
    return CandyDate;
}());

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var timeUnits = [
    ['Y', 1000 * 60 * 60 * 24 * 365],
    ['M', 1000 * 60 * 60 * 24 * 30],
    ['D', 1000 * 60 * 60 * 24],
    ['H', 1000 * 60 * 60],
    ['m', 1000 * 60],
    ['s', 1000],
    ['S', 1] // million seconds
];

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
// tslint:disable:no-any typedef no-invalid-this
var availablePrefixes = ['moz', 'ms', 'webkit'];
function requestAnimationFramePolyfill() {
    var lastTime = 0;
    return function (callback) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = setTimeout(function () {
            callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    };
}
function getRequestAnimationFrame() {
    if (typeof window === 'undefined') {
        return function () { return 0; };
    }
    if (window.requestAnimationFrame) {
        // https://github.com/vuejs/vue/issues/4465
        return window.requestAnimationFrame.bind(window);
    }
    var prefix = availablePrefixes.filter(function (key) { return key + "RequestAnimationFrame" in window; })[0];
    return prefix ? window[prefix + "RequestAnimationFrame"] : requestAnimationFramePolyfill();
}
function cancelRequestAnimationFrame(id) {
    if (typeof window === 'undefined') {
        return null;
    }
    if (window.cancelAnimationFrame) {
        return window.cancelAnimationFrame(id);
    }
    var prefix = availablePrefixes.filter(function (key) { return key + "CancelAnimationFrame" in window || key + "CancelRequestAnimationFrame" in window; })[0];
    return prefix
        ? (window[prefix + "CancelAnimationFrame"] || window[prefix + "CancelRequestAnimationFrame"])
            // @ts-ignore
            .call(this, id)
        : clearTimeout(id);
}
var reqAnimFrame = getRequestAnimationFrame();

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
function easeInOutCubic(t, b, c, d) {
    var cc = c - b;
    var tt = t / (d / 2);
    if (tt < 1) {
        return (cc / 2) * tt * tt * tt + b;
    }
    else {
        return (cc / 2) * ((tt -= 2) * tt * tt + 2) + b;
    }
}
var NzScrollService = /** @class */ (function () {
    /* tslint:disable-next-line:no-any */
    function NzScrollService(doc) {
        this.doc = doc;
    }
    /** Set the position of the scroll bar of `el`. */
    NzScrollService.prototype.setScrollTop = function (el, topValue) {
        if (topValue === void 0) { topValue = 0; }
        if (el === window) {
            this.doc.body.scrollTop = topValue;
            this.doc.documentElement.scrollTop = topValue;
        }
        else {
            el.scrollTop = topValue;
        }
    };
    /** Get position of `el` against window. */
    NzScrollService.prototype.getOffset = function (el) {
        var ret = {
            top: 0,
            left: 0
        };
        if (!el || !el.getClientRects().length) {
            return ret;
        }
        var rect = el.getBoundingClientRect();
        if (rect.width || rect.height) {
            var doc = el.ownerDocument.documentElement;
            ret.top = rect.top - doc.clientTop;
            ret.left = rect.left - doc.clientLeft;
        }
        else {
            ret.top = rect.top;
            ret.left = rect.left;
        }
        return ret;
    };
    /** Get the position of the scoll bar of `el`. */
    // TODO: remove '| Window' as the fallback already happens here
    NzScrollService.prototype.getScroll = function (el, top) {
        if (top === void 0) { top = true; }
        var target = el ? el : window;
        var prop = top ? 'pageYOffset' : 'pageXOffset';
        var method = top ? 'scrollTop' : 'scrollLeft';
        var isWindow = target === window;
        // @ts-ignore
        var ret = isWindow ? target[prop] : target[method];
        if (isWindow && typeof ret !== 'number') {
            ret = this.doc.documentElement[method];
        }
        return ret;
    };
    /**
     * Scroll `el` to some position with animation.
     *
     * @param containerEl container, `window` by default
     * @param targetTopValue Scroll to `top`, 0 by default
     * @param easing Transition curve, `easeInOutCubic` by default
     * @param callback callback invoked when transition is done
     */
    NzScrollService.prototype.scrollTo = function (containerEl, targetTopValue, easing, callback) {
        var _this = this;
        if (targetTopValue === void 0) { targetTopValue = 0; }
        var target = containerEl ? containerEl : window;
        var scrollTop = this.getScroll(target);
        var startTime = Date.now();
        var frameFunc = function () {
            var timestamp = Date.now();
            var time = timestamp - startTime;
            _this.setScrollTop(target, (easing || easeInOutCubic)(time, scrollTop, targetTopValue, 450));
            if (time < 450) {
                reqAnimFrame(frameFunc);
            }
            else {
                if (callback) {
                    callback();
                }
            }
        };
        reqAnimFrame(frameFunc);
    };
    /** @nocollapse */ NzScrollService.ɵfac = function NzScrollService_Factory(t) { return new (t || NzScrollService)(ɵɵinject(DOCUMENT)); };
    /** @nocollapse */ NzScrollService.ɵprov = ɵɵdefineInjectable({ token: NzScrollService, factory: NzScrollService.ɵfac });
    return NzScrollService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzScrollService, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();
function SCROLL_SERVICE_PROVIDER_FACTORY(doc, scrollService) {
    return scrollService || new NzScrollService(doc);
}
var SCROLL_SERVICE_PROVIDER = {
    provide: NzScrollService,
    useFactory: SCROLL_SERVICE_PROVIDER_FACTORY,
    deps: [DOCUMENT, [new Optional(), new SkipSelf(), NzScrollService]]
};

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

var NzUpdateHostClassService = /** @class */ (function () {
    function NzUpdateHostClassService(rendererFactory2) {
        this.classMap = {};
        this.renderer = rendererFactory2.createRenderer(null, null);
    }
    NzUpdateHostClassService.prototype.updateHostClass = function (el, classMap) {
        this.removeClass(el, this.classMap, this.renderer);
        this.classMap = __assign({}, classMap);
        this.addClass(el, this.classMap, this.renderer);
    };
    NzUpdateHostClassService.prototype.removeClass = function (el, classMap, renderer) {
        for (var i in classMap) {
            if (classMap.hasOwnProperty(i)) {
                renderer.removeClass(el, i);
            }
        }
    };
    NzUpdateHostClassService.prototype.addClass = function (el, classMap, renderer) {
        for (var i in classMap) {
            if (classMap.hasOwnProperty(i) && classMap[i]) {
                renderer.addClass(el, i);
            }
        }
    };
    /** @nocollapse */ NzUpdateHostClassService.ɵfac = function NzUpdateHostClassService_Factory(t) { return new (t || NzUpdateHostClassService)(ɵɵinject(RendererFactory2)); };
    /** @nocollapse */ NzUpdateHostClassService.ɵprov = ɵɵdefineInjectable({ token: NzUpdateHostClassService, factory: NzUpdateHostClassService.ɵfac });
    return NzUpdateHostClassService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzUpdateHostClassService, [{
        type: Injectable
    }], function () { return [{ type: RendererFactory2 }]; }, null); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzCopyToClipboardServiceModule = /** @class */ (function () {
    function NzCopyToClipboardServiceModule() {
    }
    /** @nocollapse */ NzCopyToClipboardServiceModule.ɵmod = ɵɵdefineNgModule({ type: NzCopyToClipboardServiceModule });
    /** @nocollapse */ NzCopyToClipboardServiceModule.ɵinj = ɵɵdefineInjector({ factory: function NzCopyToClipboardServiceModule_Factory(t) { return new (t || NzCopyToClipboardServiceModule)(); } });
    return NzCopyToClipboardServiceModule;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzCopyToClipboardServiceModule, [{
        type: NgModule
    }], null, null); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzCopyToClipboardService = /** @class */ (function () {
    // tslint:disable-next-line:no-any
    function NzCopyToClipboardService(document) {
        this.document = document;
    }
    NzCopyToClipboardService.prototype.copy = function (text) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var copyTextArea = null;
            try {
                // tslint:disable-next-line no-any
                copyTextArea = _this.document.createElement('textarea');
                copyTextArea.style.all = 'unset';
                copyTextArea.style.position = 'fixed';
                copyTextArea.style.top = '0';
                copyTextArea.style.clip = 'rect(0, 0, 0, 0)';
                copyTextArea.style.whiteSpace = 'pre';
                copyTextArea.style.webkitUserSelect = 'text';
                copyTextArea.style.MozUserSelect = 'text';
                copyTextArea.style.msUserSelect = 'text';
                copyTextArea.style.userSelect = 'text';
                _this.document.body.appendChild(copyTextArea);
                copyTextArea.value = text;
                copyTextArea.select();
                var successful = _this.document.execCommand('copy');
                if (!successful) {
                    reject(text);
                }
                resolve(text);
            }
            finally {
                if (copyTextArea) {
                    _this.document.body.removeChild(copyTextArea);
                }
            }
        });
    };
    /** @nocollapse */ NzCopyToClipboardService.ɵfac = function NzCopyToClipboardService_Factory(t) { return new (t || NzCopyToClipboardService)(ɵɵinject(DOCUMENT)); };
    /** @nocollapse */ NzCopyToClipboardService.ɵprov = ɵɵdefineInjectable({ token: NzCopyToClipboardService, factory: NzCopyToClipboardService.ɵfac, providedIn: NzCopyToClipboardServiceModule });
    return NzCopyToClipboardService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzCopyToClipboardService, [{
        type: Injectable,
        args: [{
                providedIn: NzCopyToClipboardServiceModule
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzDomEventService = /** @class */ (function () {
    function NzDomEventService(ngZone, rendererFactory2) {
        this.ngZone = ngZone;
        this.rendererFactory2 = rendererFactory2;
        this.resizeSource = new Subject();
        this.domEventListeners = new Map();
        this.renderer = this.rendererFactory2.createRenderer(null, null);
    }
    NzDomEventService.prototype.registerResizeListener = function () {
        var _this = this;
        if (!this.domEventListeners.has('resize')) {
            this.domEventListeners.set('resize', {
                handler: function () {
                    _this.resizeSource.next();
                },
                countOfListeners: 0
            });
        }
        var listener = this.domEventListeners.get('resize');
        this.tryToStartListener(listener, 'resize');
        return this.resizeSource.pipe(auditTime(16));
    };
    NzDomEventService.prototype.unregisterResizeListener = function () {
        if (!this.domEventListeners.has('resize')) {
            return;
        }
        var listener = this.domEventListeners.get('resize');
        this.tryToStopListener(listener);
    };
    NzDomEventService.prototype.tryToStartListener = function (l, name) {
        var _this = this;
        l.countOfListeners += 1;
        this.ngZone.runOutsideAngular(function () {
            if (l.countOfListeners === 1) {
                l.unsubscribe = _this.renderer.listen('window', name, l.handler);
            }
        });
    };
    NzDomEventService.prototype.tryToStopListener = function (l) {
        l.countOfListeners -= 1;
        if (l.countOfListeners === 0) {
            l.unsubscribe();
            l.unsubscribe = undefined;
        }
    };
    /** @nocollapse */ NzDomEventService.ɵfac = function NzDomEventService_Factory(t) { return new (t || NzDomEventService)(ɵɵinject(NgZone), ɵɵinject(RendererFactory2)); };
    /** @nocollapse */ NzDomEventService.ɵprov = ɵɵdefineInjectable({ token: NzDomEventService, factory: NzDomEventService.ɵfac, providedIn: 'root' });
    return NzDomEventService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzDomEventService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: NgZone }, { type: RendererFactory2 }]; }, null); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * When running in test, singletons should not be destroyed. So we keep references of singletons
 * in this global variable.
 */
var testSingleRegistry = new Map();
/**
 * Some singletons should have life cycle that is same to Angular's. This service make sure that
 * those singletons get destroyed in HMR.
 */
var NzSingletonService = /** @class */ (function () {
    function NzSingletonService() {
        /**
         * This registry is used to register singleton in dev mode.
         * So that singletons get destroyed when hot module reload happens.
         *
         * This works in prod mode too but with no specific effect.
         */
        this._singletonRegistry = new Map();
    }
    Object.defineProperty(NzSingletonService.prototype, "singletonRegistry", {
        get: function () {
            return environment.isTestMode ? testSingleRegistry : this._singletonRegistry;
        },
        enumerable: true,
        configurable: true
    });
    NzSingletonService.prototype.registerSingletonWithKey = function (key, target) {
        var alreadyHave = this.singletonRegistry.has(key);
        var item = alreadyHave ? this.singletonRegistry.get(key) : this.withNewTarget(target);
        if (!alreadyHave) {
            this.singletonRegistry.set(key, item);
        }
    };
    NzSingletonService.prototype.getSingletonWithKey = function (key) {
        return this.singletonRegistry.has(key) ? this.singletonRegistry.get(key).target : null;
    };
    NzSingletonService.prototype.withNewTarget = function (target) {
        return {
            target: target
        };
    };
    /** @nocollapse */ NzSingletonService.ɵfac = function NzSingletonService_Factory(t) { return new (t || NzSingletonService)(); };
    /** @nocollapse */ NzSingletonService.ɵprov = ɵɵdefineInjectable({ token: NzSingletonService, factory: NzSingletonService.ɵfac, providedIn: 'root' });
    return NzSingletonService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzSingletonService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function isNotNil(value) {
    return typeof value !== 'undefined' && value !== null;
}
function isNil(value) {
    return typeof value === 'undefined' || value === null;
}
/**
 * Examine if two objects are shallowly equaled.
 */
function shallowEqual(objA, objB) {
    if (objA === objB) {
        return true;
    }
    if (typeof objA !== 'object' || !objA || typeof objB !== 'object' || !objB) {
        return false;
    }
    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) {
        return false;
    }
    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
    // tslint:disable-next-line:prefer-for-of
    for (var idx = 0; idx < keysA.length; idx++) {
        var key = keysA[idx];
        if (!bHasOwnProperty(key)) {
            return false;
        }
        if (objA[key] !== objB[key]) {
            return false;
        }
    }
    return true;
}
function isInteger(value) {
    return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}
function isEmpty(element) {
    var nodes = element.childNodes;
    for (var i = 0; i < nodes.length; i++) {
        if (filterNotEmptyNode(nodes.item(i))) {
            return false;
        }
    }
    return true;
}
function filterNotEmptyNode(node) {
    if (node) {
        if (node.nodeType === 1 && node.outerHTML.toString().trim().length !== 0) {
            // ELEMENT_NODE
            return node;
        }
        else if (node.nodeType === 3 && node.textContent.toString().trim().length !== 0) {
            // TEXT_NODE
            return node;
        }
        return null;
    }
    return null;
}
// tslint:disable-next-line:no-any
function isNonEmptyString(value) {
    return typeof value === 'string' && value !== '';
}
// tslint:disable-next-line:no-any
function isTemplateRef(value) {
    return value instanceof TemplateRef;
}
// tslint:disable-next-line:no-any
function isComponent(value) {
    return value instanceof Type;
}

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * Silent an event by stopping and preventing it.
 */
function silentEvent(e) {
    e.stopPropagation();
    e.preventDefault();
}
function getElementOffset(elem) {
    if (!elem.getClientRects().length) {
        return { top: 0, left: 0 };
    }
    var rect = elem.getBoundingClientRect();
    var win = elem.ownerDocument.defaultView;
    return {
        top: rect.top + win.pageYOffset,
        left: rect.left + win.pageXOffset
    };
}
function findFirstNotEmptyNode(element) {
    var children = element.childNodes;
    for (var i = 0; i < children.length; i++) {
        var node = children.item(i);
        if (filterNotEmptyNode(node)) {
            return node;
        }
    }
    return null;
}
function findLastNotEmptyNode(element) {
    var children = element.childNodes;
    for (var i = children.length - 1; i >= 0; i--) {
        var node = children.item(i);
        if (filterNotEmptyNode(node)) {
            return node;
        }
    }
    return null;
}
function reverseChildNodes(parent) {
    var children = parent.childNodes;
    var length = children.length;
    if (length) {
        var nodes_1 = [];
        children.forEach(function (node, i) { return (nodes_1[i] = node); });
        while (length--) {
            parent.appendChild(nodes_1[length]);
        }
    }
}
/**
 * Investigate if an event is a `TouchEvent`.
 */
function isTouchEvent(event) {
    return event.type.startsWith('touch');
}
function getEventPosition(event) {
    return isTouchEvent(event) ? event.touches[0] || event.changedTouches[0] : event;
}

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function getPagePosition(event) {
    var e = getEventPosition(event);
    return {
        x: e.pageX,
        y: e.pageY
    };
}
/**
 * This module provide a global dragging service to other components.
 */
var NzDragService = /** @class */ (function () {
    function NzDragService(rendererFactory2) {
        this.draggingThreshold = 5;
        this.currentDraggingSequence = null;
        this.currentStartingPoint = null;
        this.handleRegistry = new Set();
        this.renderer = rendererFactory2.createRenderer(null, null);
    }
    NzDragService.prototype.requestDraggingSequence = function (event) {
        var _this = this;
        if (!this.handleRegistry.size) {
            this.registerDraggingHandler(isTouchEvent(event));
        }
        // Complete last dragging sequence if a new target is dragged.
        if (this.currentDraggingSequence) {
            this.currentDraggingSequence.complete();
        }
        this.currentStartingPoint = getPagePosition(event);
        this.currentDraggingSequence = new Subject();
        return this.currentDraggingSequence.pipe(map(function (e) {
            return {
                x: e.pageX - _this.currentStartingPoint.x,
                y: e.pageY - _this.currentStartingPoint.y
            };
        }), filter(function (e) { return Math.abs(e.x) > _this.draggingThreshold || Math.abs(e.y) > _this.draggingThreshold; }), finalize(function () { return _this.teardownDraggingSequence(); }));
    };
    NzDragService.prototype.registerDraggingHandler = function (isTouch) {
        var _this = this;
        if (isTouch) {
            this.handleRegistry.add({
                teardown: this.renderer.listen('document', 'touchmove', function (e) {
                    if (_this.currentDraggingSequence) {
                        _this.currentDraggingSequence.next(e.touches[0] || e.changedTouches[0]);
                    }
                })
            });
            this.handleRegistry.add({
                teardown: this.renderer.listen('document', 'touchend', function () {
                    if (_this.currentDraggingSequence) {
                        _this.currentDraggingSequence.complete();
                    }
                })
            });
        }
        else {
            this.handleRegistry.add({
                teardown: this.renderer.listen('document', 'mousemove', function (e) {
                    if (_this.currentDraggingSequence) {
                        _this.currentDraggingSequence.next(e);
                    }
                })
            });
            this.handleRegistry.add({
                teardown: this.renderer.listen('document', 'mouseup', function () {
                    if (_this.currentDraggingSequence) {
                        _this.currentDraggingSequence.complete();
                    }
                })
            });
        }
    };
    NzDragService.prototype.teardownDraggingSequence = function () {
        this.currentDraggingSequence = null;
    };
    /** @nocollapse */ NzDragService.ɵfac = function NzDragService_Factory(t) { return new (t || NzDragService)(ɵɵinject(RendererFactory2)); };
    /** @nocollapse */ NzDragService.ɵprov = ɵɵdefineInjectable({ token: NzDragService, factory: NzDragService.ɵfac, providedIn: 'root' });
    return NzDragService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzDragService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: RendererFactory2 }]; }, null); })();

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

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Creates a browser MouseEvent with the specified options. */
function createMouseEvent(type, x, y, button) {
    if (x === void 0) { x = 0; }
    if (y === void 0) { y = 0; }
    if (button === void 0) { button = 0; }
    var event = document.createEvent('MouseEvent');
    event.initMouseEvent(type, true /* canBubble */, false /* cancelable */, window /* view */, 0 /* detail */, x /* screenX */, y /* screenY */, x /* clientX */, y /* clientY */, false /* ctrlKey */, false /* altKey */, false /* shiftKey */, false /* metaKey */, button /* button */, null /* relatedTarget */);
    // `initMouseEvent` doesn't allow us to pass the `buttons` and
    // defaults it to 0 which looks like a fake event.
    Object.defineProperty(event, 'buttons', { get: function () { return 1; } });
    return event;
}
/** Creates a browser TouchEvent with the specified pointer coordinates. */
function createTouchEvent(type, pageX, pageY) {
    if (pageX === void 0) { pageX = 0; }
    if (pageY === void 0) { pageY = 0; }
    // In favor of creating events that work for most of the browsers, the event is created
    // as a basic UI Event. The necessary details for the event will be set manually.
    var event = new UIEvent(type, { detail: 0, view: window });
    var touchDetails = { pageX: pageX, pageY: pageY, clientX: pageX, clientY: pageY };
    // Most of the browsers don't have a "initTouchEvent" method that can be used to define
    // the touch details.
    Object.defineProperties(event, {
        touches: { value: [touchDetails] },
        targetTouches: { value: [touchDetails] },
        changedTouches: { value: [touchDetails] }
    });
    return event;
}
/** Dispatches a keydown event from an element. */
function createKeyboardEvent(type, keyCode, target, key) {
    // tslint:disable-next-line:no-any
    var event = document.createEvent('KeyboardEvent');
    var originalPreventDefault = event.preventDefault;
    // Firefox does not support `initKeyboardEvent`, but supports `initKeyEvent`.
    if (event.initKeyEvent) {
        event.initKeyEvent(type, true, true, window, 0, 0, 0, 0, 0, keyCode);
    }
    else {
        event.initKeyboardEvent(type, true, true, window, 0, key, 0, '', false);
    }
    // Webkit Browsers don't set the keyCode when calling the init function.
    // See related bug https://bugs.webkit.org/show_bug.cgi?id=16735
    Object.defineProperties(event, {
        keyCode: { get: function () { return keyCode; } },
        key: { get: function () { return key; } },
        target: { get: function () { return target; } }
    });
    // IE won't set `defaultPrevented` on synthetic events so we need to do it manually.
    // tslint:disable-next-line:typedef
    event.preventDefault = function () {
        Object.defineProperty(event, 'defaultPrevented', { get: function () { return true; }, configurable: true });
        // tslint:disable-next-line:no-invalid-this
        return originalPreventDefault.apply(this, arguments);
    };
    return event;
}
/** Creates a fake event object with any desired event type. */
function createFakeEvent(type, canBubble, cancelable) {
    if (canBubble === void 0) { canBubble = true; }
    if (cancelable === void 0) { cancelable = true; }
    var event = document.createEvent('Event');
    event.initEvent(type, canBubble, cancelable);
    return event;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Utility to dispatch any event on a Node. */
function dispatchEvent(node, event) {
    node.dispatchEvent(event);
    return event;
}
/** Shorthand to dispatch a fake event on a specified node. */
function dispatchFakeEvent(node, type, canBubble) {
    return dispatchEvent(node, createFakeEvent(type, canBubble));
}
/** Shorthand to dispatch a keyboard event with a specified key code. */
function dispatchKeyboardEvent(node, type, keyCode, target) {
    return dispatchEvent(node, createKeyboardEvent(type, keyCode, target));
}
/** Shorthand to dispatch a mouse event on the specified coordinates. */
function dispatchMouseEvent(node, type, x, y, event) {
    if (x === void 0) { x = 0; }
    if (y === void 0) { y = 0; }
    if (event === void 0) { event = createMouseEvent(type, x, y); }
    return dispatchEvent(node, event);
}
/** Shorthand to dispatch a touch event on the specified coordinates. */
function dispatchTouchEvent(node, type, x, y) {
    if (x === void 0) { x = 0; }
    if (y === void 0) { y = 0; }
    return dispatchEvent(node, createTouchEvent(type, x, y));
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Focuses an input, sets its value and dispatches
 * the `input` event, simulating the user typing.
 * @param value Value to be set on the input.
 * @param element Element onto which to set the value.
 */
function typeInElement(value, element) {
    element.focus();
    element.value = value;
    dispatchFakeEvent(element, 'input');
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Gets a RegExp used to detect an angular wrapped error message.
 * See https://github.com/angular/angular/issues/8348
 */
function wrappedErrorMessage(e) {
    var escapedMessage = e.message.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
    return new RegExp(escapedMessage);
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** @docs-private */
var FakeViewportRuler = /** @class */ (function () {
    function FakeViewportRuler() {
    }
    FakeViewportRuler.prototype.getViewportRect = function () {
        return {
            left: 0,
            top: 0,
            width: 1014,
            height: 686,
            bottom: 686,
            right: 1014
        };
    };
    FakeViewportRuler.prototype.getViewportSize = function () {
        return { width: 1014, height: 686 };
    };
    FakeViewportRuler.prototype.getViewportScrollPosition = function () {
        return { top: 0, left: 0 };
    };
    return FakeViewportRuler;
}());

/**
 * Mock synchronous NgZone implementation that can be used
 * to flush out `onStable` subscriptions in tests.
 *
 * via: https://github.com/angular/angular/blob/master/packages/core/testing/src/ng_zone_mock.ts
 * @docs-private
 */
var MockNgZone = /** @class */ (function (_super) {
    __extends(MockNgZone, _super);
    function MockNgZone() {
        var _this = _super.call(this, { enableLongStackTrace: false }) || this;
        _this.onStable = new EventEmitter(false);
        return _this;
    }
    MockNgZone.prototype.run = function (fn) {
        return fn();
    };
    MockNgZone.prototype.runOutsideAngular = function (fn) {
        return fn();
    };
    MockNgZone.prototype.simulateZoneExit = function () {
        this.onStable.emit(null);
    };
    /** @nocollapse */ MockNgZone.ɵfac = function MockNgZone_Factory(t) { return new (t || MockNgZone)(); };
    /** @nocollapse */ MockNgZone.ɵprov = ɵɵdefineInjectable({ token: MockNgZone, factory: MockNgZone.ɵfac });
    return MockNgZone;
}(NgZone));
/*@__PURE__*/ (function () { ɵsetClassMetadata(MockNgZone, [{
        type: Injectable
    }], function () { return []; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzTreeNode = /** @class */ (function () {
    function NzTreeNode(option, parent, service) {
        var _this = this;
        if (parent === void 0) { parent = null; }
        if (service === void 0) { service = null; }
        this.level = 0;
        if (option instanceof NzTreeNode) {
            return option;
        }
        this.service = service || null;
        this.origin = option;
        this.key = option.key;
        this.parentNode = parent;
        this._title = option.title || '---';
        this._icon = option.icon || '';
        this._isLeaf = option.isLeaf || false;
        this._children = [];
        // option params
        this._isChecked = option.checked || false;
        this._isSelectable = option.disabled || option.selectable !== false;
        this._isDisabled = option.disabled || false;
        this._isDisableCheckbox = option.disableCheckbox || false;
        this._isExpanded = option.isLeaf ? false : option.expanded || false;
        this._isHalfChecked = false;
        this._isSelected = (!option.disabled && option.selected) || false;
        this._isLoading = false;
        this.isMatched = false;
        /**
         * parent's checked status will affect children while initializing
         */
        if (parent) {
            this.level = parent.level + 1;
        }
        else {
            this.level = 0;
        }
        if (typeof option.children !== 'undefined' && option.children !== null) {
            option.children.forEach(function (nodeOptions) {
                var s = _this.treeService;
                if (s && !s.isCheckStrictly && option.checked && !option.disabled && !nodeOptions.disabled && !nodeOptions.disableCheckbox) {
                    nodeOptions.checked = option.checked;
                }
                _this._children.push(new NzTreeNode(nodeOptions, _this));
            });
        }
    }
    Object.defineProperty(NzTreeNode.prototype, "treeService", {
        get: function () {
            return this.service || (this.parentNode && this.parentNode.treeService);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNode.prototype, "title", {
        /**
         * auto generate
         * get
         * set
         */
        get: function () {
            return this._title;
        },
        set: function (value) {
            this._title = value;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNode.prototype, "icon", {
        get: function () {
            return this._icon;
        },
        set: function (value) {
            this._icon = value;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNode.prototype, "children", {
        get: function () {
            return this._children;
        },
        set: function (value) {
            this._children = value;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNode.prototype, "isLeaf", {
        get: function () {
            return this._isLeaf;
        },
        set: function (value) {
            this._isLeaf = value;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNode.prototype, "isChecked", {
        get: function () {
            return this._isChecked;
        },
        set: function (value) {
            this._isChecked = value;
            this._isAllChecked = value;
            this.origin.checked = value;
            this.afterValueChange('isChecked');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNode.prototype, "isAllChecked", {
        get: function () {
            return this._isAllChecked;
        },
        /**
         * @deprecated Maybe removed in next major version, use `isChecked` instead.
         */
        set: function (value) {
            warnDeprecation("'isAllChecked' is going to be removed in 9.0.0. Please use 'isChecked' instead.");
            this._isAllChecked = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNode.prototype, "isHalfChecked", {
        get: function () {
            return this._isHalfChecked;
        },
        set: function (value) {
            this._isHalfChecked = value;
            this.afterValueChange('isHalfChecked');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNode.prototype, "isSelectable", {
        get: function () {
            return this._isSelectable;
        },
        set: function (value) {
            this._isSelectable = value;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNode.prototype, "isDisabled", {
        get: function () {
            return this._isDisabled;
        },
        set: function (value) {
            this._isDisabled = value;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNode.prototype, "isDisableCheckbox", {
        get: function () {
            return this._isDisableCheckbox;
        },
        set: function (value) {
            this._isDisableCheckbox = value;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNode.prototype, "isExpanded", {
        get: function () {
            return this._isExpanded;
        },
        set: function (value) {
            this._isExpanded = value;
            this.origin.expanded = value;
            this.afterValueChange('isExpanded');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNode.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        set: function (value) {
            this._isSelected = value;
            this.origin.selected = value;
            this.afterValueChange('isSelected');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNode.prototype, "isLoading", {
        get: function () {
            return this._isLoading;
        },
        set: function (value) {
            this._isLoading = value;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    NzTreeNode.prototype.setSyncChecked = function (checked, halfChecked) {
        if (checked === void 0) { checked = false; }
        if (halfChecked === void 0) { halfChecked = false; }
        this.setChecked(checked, halfChecked);
        if (this.treeService && !this.treeService.isCheckStrictly) {
            this.treeService.conduct(this);
        }
    };
    /**
     * @deprecated Maybe removed in next major version, use `isChecked` instead.
     */
    NzTreeNode.prototype.setChecked = function (checked, halfChecked) {
        if (checked === void 0) { checked = false; }
        if (halfChecked === void 0) { halfChecked = false; }
        warnDeprecation("'setChecked' is going to be removed in 9.0.0. Please use 'isChecked' instead.");
        this.origin.checked = checked;
        this.isChecked = checked;
        this.isAllChecked = checked;
        this.isHalfChecked = halfChecked;
    };
    /**
     * @deprecated Maybe removed in next major version, use `isExpanded` instead.
     */
    NzTreeNode.prototype.setExpanded = function (value) {
        warnDeprecation("'setExpanded' is going to be removed in 9.0.0. Please use 'isExpanded' instead.");
        this.isExpanded = value;
    };
    /**
     * @deprecated Maybe removed in next major version, use `isSelected` instead.
     */
    NzTreeNode.prototype.setSelected = function (value) {
        warnDeprecation("'setSelected' is going to be removed in 9.0.0. Please use 'isExpanded' isSelected.");
        if (this.isDisabled) {
            return;
        }
        this.isSelected = value;
    };
    NzTreeNode.prototype.getParentNode = function () {
        return this.parentNode;
    };
    NzTreeNode.prototype.getChildren = function () {
        return this.children;
    };
    /**
     * Support appending child nodes by position. Leaf node cannot be appended.
     */
    // tslint:disable-next-line:no-any
    NzTreeNode.prototype.addChildren = function (children, childPos) {
        var _this = this;
        if (childPos === void 0) { childPos = -1; }
        if (!this.isLeaf) {
            children.forEach(function (node) {
                var refreshLevel = function (n) {
                    n.getChildren().forEach(function (c) {
                        c.level = c.getParentNode().level + 1;
                        // flush origin
                        c.origin.level = c.level;
                        refreshLevel(c);
                    });
                };
                var child = node;
                if (child instanceof NzTreeNode) {
                    child.parentNode = _this;
                }
                else {
                    child = new NzTreeNode(node, _this);
                }
                child.level = _this.level + 1;
                child.origin.level = child.level;
                refreshLevel(child);
                try {
                    childPos === -1 ? _this.children.push(child) : _this.children.splice(childPos, 0, child);
                    // flush origin
                }
                catch (e) { }
            });
            this.origin.children = this.getChildren().map(function (v) { return v.origin; });
            // remove loading state
            this.isLoading = false;
        }
    };
    NzTreeNode.prototype.clearChildren = function () {
        // refresh checked state
        this.afterValueChange('clearChildren');
        this.children = [];
        this.origin.children = [];
    };
    NzTreeNode.prototype.remove = function () {
        var _this = this;
        var parentNode = this.getParentNode();
        if (parentNode) {
            parentNode.children = parentNode.getChildren().filter(function (v) { return v.key !== _this.key; });
            parentNode.origin.children = parentNode.origin.children.filter(function (v) { return v.key !== _this.key; });
            this.afterValueChange('remove');
        }
    };
    NzTreeNode.prototype.afterValueChange = function (key) {
        if (this.treeService) {
            switch (key) {
                case 'isChecked':
                    this.treeService.setCheckedNodeList(this);
                    break;
                case 'isHalfChecked':
                    this.treeService.setHalfCheckedNodeList(this);
                    break;
                case 'isExpanded':
                    this.treeService.setExpandedNodeList(this);
                    break;
                case 'isSelected':
                    this.treeService.setNodeActive(this);
                    break;
                case 'clearChildren':
                    this.treeService.afterRemove(this.getChildren());
                    break;
                case 'remove':
                    this.treeService.afterRemove([this]);
                    break;
            }
        }
        this.update();
    };
    NzTreeNode.prototype.update = function () {
        if (this.component) {
            this.component.setClassMap();
            this.component.markForCheck();
        }
    };
    return NzTreeNode;
}());

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function toArray(value) {
    var ret;
    if (value == null) {
        ret = [];
    }
    else if (!Array.isArray(value)) {
        ret = [value];
    }
    else {
        ret = value;
    }
    return ret;
}
function arraysEqual(array1, array2) {
    if (!array1 || !array2 || array1.length !== array2.length) {
        return false;
    }
    var len = array1.length;
    for (var i = 0; i < len; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
}
function shallowCopyArray(source) {
    return source.slice();
}

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function getRegExp(prefix) {
    var prefixArray = Array.isArray(prefix) ? prefix : [prefix];
    var prefixToken = prefixArray.join('').replace(/(\$|\^)/g, '\\$1');
    if (prefixArray.length > 1) {
        prefixToken = "[" + prefixToken + "]";
    }
    return new RegExp("(\\s|^)(" + prefixToken + ")[^\\s]*", 'g');
}
function getMentions(value, prefix) {
    if (prefix === void 0) { prefix = '@'; }
    if (typeof value !== 'string') {
        return [];
    }
    var regex = getRegExp(prefix);
    var mentions = value.match(regex);
    return mentions !== null ? mentions.map(function (e) { return e.trim(); }) : [];
}

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * Much like lodash.
 */
function padStart(toPad, length, element) {
    if (toPad.length > length) {
        return toPad;
    }
    var joined = "" + getRepeatedElement(length, element) + toPad;
    return joined.slice(joined.length - length, joined.length);
}
function padEnd(toPad, length, element) {
    var joined = "" + toPad + getRepeatedElement(length, element);
    return joined.slice(0, length);
}
function getRepeatedElement(length, element) {
    return Array(length)
        .fill(element)
        .join('');
}

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
// tslint:disable-next-line:no-any
function isPromise(obj) {
    return !!obj && typeof obj.then === 'function' && typeof obj.catch === 'function';
}

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function getPercent(min, max, value) {
    return ((value - min) / (max - min)) * 100;
}
function getPrecision(num) {
    var numStr = num.toString();
    var dotIndex = numStr.indexOf('.');
    return dotIndex >= 0 ? numStr.length - dotIndex - 1 : 0;
}
function ensureNumberInRange(num, min, max) {
    if (isNaN(num) || num < min) {
        return min;
    }
    else if (num > max) {
        return max;
    }
    else {
        return num;
    }
}

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function scrollIntoView(node) {
    var nodeAsAny = node; // tslint:disable-line:no-any
    if (nodeAsAny.scrollIntoViewIfNeeded) {
        /* tslint:disable-next-line:no-string-literal */
        nodeAsAny.scrollIntoViewIfNeeded(false);
        return;
    }
    if (node.scrollIntoView) {
        node.scrollIntoView(false);
        return;
    }
}

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
// from https://github.com/component/textarea-caret-position
// We'll copy the properties below into the mirror div.
// Note that some browsers, such as Firefox, do not concatenate properties
// into their shorthand (e.g. padding-top, padding-bottom etc. -> padding),
// so we have to list every single property explicitly.
var properties = [
    'direction',
    'boxSizing',
    'width',
    'height',
    'overflowX',
    'overflowY',
    'borderTopWidth',
    'borderRightWidth',
    'borderBottomWidth',
    'borderLeftWidth',
    'borderStyle',
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft',
    // https://developer.mozilla.org/en-US/docs/Web/CSS/font
    'fontStyle',
    'fontVariant',
    'fontWeight',
    'fontStretch',
    'fontSize',
    'fontSizeAdjust',
    'lineHeight',
    'fontFamily',
    'textAlign',
    'textTransform',
    'textIndent',
    'textDecoration',
    'letterSpacing',
    'wordSpacing',
    'tabSize',
    'MozTabSize'
];
var isBrowser = typeof window !== 'undefined';
// tslint:disable-next-line:no-any
var isFirefox = isBrowser && window.mozInnerScreenX != null;
var _parseInt = function (str) { return parseInt(str, 10); };
function getCaretCoordinates(element, position, options) {
    if (!isBrowser) {
        throw new Error('textarea-caret-position#getCaretCoordinates should only be called in a browser');
    }
    var debug = (options && options.debug) || false;
    if (debug) {
        var el = document.querySelector('#input-textarea-caret-position-mirror-div');
        if (el) {
            el.parentNode.removeChild(el);
        }
    }
    // The mirror div will replicate the textarea's style
    var div = document.createElement('div');
    div.id = 'input-textarea-caret-position-mirror-div';
    document.body.appendChild(div);
    var style = div.style;
    // tslint:disable-next-line:no-any
    var computed = window.getComputedStyle ? window.getComputedStyle(element) : element.currentStyle; // currentStyle for IE < 9
    var isInput = element.nodeName === 'INPUT';
    // Default textarea styles
    style.whiteSpace = 'pre-wrap';
    if (!isInput) {
        style.wordWrap = 'break-word'; // only for textarea-s
    }
    // Position off-screen
    style.position = 'absolute'; // required to return coordinates properly
    if (!debug) {
        style.visibility = 'hidden';
    } // not 'display: none' because we want rendering
    // Transfer the element's properties to the div
    properties.forEach(function (prop) {
        if (isInput && prop === 'lineHeight') {
            // Special case for <input>s because text is rendered centered and line height may be != height
            style.lineHeight = computed.height;
        }
        else {
            // @ts-ignore
            style[prop] = computed[prop];
        }
    });
    if (isFirefox) {
        // Firefox lies about the overflow property for textareas: https://bugzilla.mozilla.org/show_bug.cgi?id=984275
        if (element.scrollHeight > _parseInt(computed.height)) {
            style.overflowY = 'scroll';
        }
    }
    else {
        style.overflow = 'hidden'; // for Chrome to not render a scrollbar; IE keeps overflowY = 'scroll'
    }
    div.textContent = element.value.substring(0, position);
    // The second special handling for input type="text" vs textarea:
    // spaces need to be replaced with non-breaking spaces - http://stackoverflow.com/a/13402035/1269037
    if (isInput) {
        div.textContent = div.textContent.replace(/\s/g, '\u00a0');
    }
    var span = document.createElement('span');
    // Wrapping must be replicated *exactly*, including when a long word gets
    // onto the next line, with whitespace at the end of the line before (#7).
    // The  *only* reliable way to do that is to copy the *entire* rest of the
    // textarea's content into the <span> created at the caret position.
    // For inputs, just '.' would be enough, but no need to bother.
    span.textContent = element.value.substring(position) || '.'; // || because a completely empty faux span doesn't render at all
    div.appendChild(span);
    var coordinates = {
        top: span.offsetTop + _parseInt(computed.borderTopWidth),
        left: span.offsetLeft + _parseInt(computed.borderLeftWidth),
        height: _parseInt(computed.lineHeight)
    };
    if (debug) {
        span.style.backgroundColor = '#eee';
        createDebugEle(element, coordinates);
    }
    else {
        document.body.removeChild(div);
    }
    return coordinates;
}
function createDebugEle(element, coordinates) {
    var fontSize = getComputedStyle(element).getPropertyValue('font-size');
    var rect = document.querySelector('#DEBUG') || document.createElement('div');
    document.body.appendChild(rect);
    rect.id = 'DEBUG';
    rect.style.position = 'absolute';
    rect.style.backgroundColor = 'red';
    rect.style.height = fontSize;
    rect.style.width = '1px';
    rect.style.top = element.getBoundingClientRect().top - element.scrollTop + window.pageYOffset + coordinates.top + "px";
    rect.style.left = element.getBoundingClientRect().left - element.scrollLeft + window.pageXOffset + coordinates.left + "px";
}

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function isStyleSupport(styleName) {
    if (typeof window !== 'undefined' && window.document && window.document.documentElement) {
        var styleNameList = Array.isArray(styleName) ? styleName : [styleName];
        var documentElement_1 = window.document.documentElement;
        return styleNameList.some(function (name) { return name in documentElement_1.style; });
    }
    return false;
}
function getStyleAsText(styles) {
    if (!styles) {
        return '';
    }
    return Object.keys(styles)
        .map(function (key) {
        var val = styles[key];
        return key + ":" + (typeof val === 'string' ? val : val + 'px');
    })
        .join(';');
}

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
// We only handle element & text node.
var ELEMENT_NODE = 1;
var TEXT_NODE = 3;
var COMMENT_NODE = 8;
var ellipsisContainer;
var wrapperStyle = {
    padding: '0',
    margin: '0',
    display: 'inline',
    lineHeight: 'inherit'
};
function pxToNumber(value) {
    if (!value) {
        return 0;
    }
    var match = value.match(/^\d*(\.\d*)?/);
    return match ? Number(match[0]) : 0;
}
function styleToString(style) {
    // There are some different behavior between Firefox & Chrome.
    // We have to handle this ourself.
    var styleNames = Array.prototype.slice.apply(style);
    return styleNames.map(function (name) { return name + ": " + style.getPropertyValue(name) + ";"; }).join('');
}
function mergeChildren(children) {
    var childList = [];
    children.forEach(function (child) {
        var prevChild = childList[childList.length - 1];
        if (prevChild && child.nodeType === TEXT_NODE && prevChild.nodeType === TEXT_NODE) {
            prevChild.data += child.data;
        }
        else {
            childList.push(child);
        }
    });
    return childList;
}
function measure(originEle, rows, contentNodes, fixedContent, ellipsisStr) {
    if (!ellipsisContainer) {
        ellipsisContainer = document.createElement('div');
        ellipsisContainer.setAttribute('aria-hidden', 'true');
        document.body.appendChild(ellipsisContainer);
    }
    // Get origin style
    var originStyle = window.getComputedStyle(originEle);
    var originCSS = styleToString(originStyle);
    var lineHeight = pxToNumber(originStyle.lineHeight);
    var maxHeight = lineHeight * (rows + 1) + pxToNumber(originStyle.paddingTop) + pxToNumber(originStyle.paddingBottom);
    // Set shadow
    ellipsisContainer.setAttribute('style', originCSS);
    ellipsisContainer.style.position = 'fixed';
    ellipsisContainer.style.left = '0';
    ellipsisContainer.style.height = 'auto';
    ellipsisContainer.style.minHeight = 'auto';
    ellipsisContainer.style.maxHeight = 'auto';
    ellipsisContainer.style.top = '-999999px';
    ellipsisContainer.style.zIndex = '-1000';
    // clean up css overflow
    ellipsisContainer.style.textOverflow = 'clip';
    ellipsisContainer.style.whiteSpace = 'normal';
    // tslint:disable-next-line no-any
    ellipsisContainer.style.webkitLineClamp = 'none';
    var contentList = mergeChildren(contentNodes);
    var container = document.createElement('div');
    var contentContainer = document.createElement('span');
    var fixedContainer = document.createElement('span');
    // Add styles in container
    Object.assign(container.style, wrapperStyle);
    Object.assign(contentContainer.style, wrapperStyle);
    Object.assign(fixedContainer.style, wrapperStyle);
    contentList.forEach(function (n) {
        contentContainer.appendChild(n);
    });
    fixedContent.forEach(function (node) {
        fixedContainer.appendChild(node.cloneNode(true));
    });
    container.appendChild(contentContainer);
    container.appendChild(fixedContainer);
    // Render in the fake container
    ellipsisContainer.appendChild(container);
    // Check if ellipsis in measure div is height enough for content
    function inRange() {
        return ellipsisContainer.offsetHeight < maxHeight;
    }
    if (inRange()) {
        var text = ellipsisContainer.innerHTML;
        ellipsisContainer.removeChild(container);
        return { contentNodes: contentNodes, text: text, ellipsis: false };
    }
    // We should clone the childNode since they're controlled by React and we can't reuse it without warning
    var childNodes = Array.prototype.slice
        .apply(ellipsisContainer.childNodes[0].childNodes[0].cloneNode(true).childNodes)
        .filter(function (_a) {
        var nodeType = _a.nodeType;
        return nodeType !== COMMENT_NODE;
    });
    var fixedNodes = Array.prototype.slice.apply(ellipsisContainer.childNodes[0].childNodes[1].cloneNode(true).childNodes);
    ellipsisContainer.removeChild(container);
    // ========================= Find match ellipsis content =========================
    ellipsisContainer.innerHTML = '';
    // Create origin content holder
    var ellipsisContentHolder = document.createElement('span');
    ellipsisContainer.appendChild(ellipsisContentHolder);
    var ellipsisTextNode = document.createTextNode(ellipsisStr);
    ellipsisContentHolder.appendChild(ellipsisTextNode);
    fixedNodes.forEach(function (childNode) {
        ellipsisContainer.appendChild(childNode);
    });
    // Append before fixed nodes
    function appendChildNode(node) {
        ellipsisContentHolder.insertBefore(node, ellipsisTextNode);
    }
    // Get maximum text
    function measureText(textNode, fullText, startLoc, endLoc, lastSuccessLoc) {
        if (startLoc === void 0) { startLoc = 0; }
        if (endLoc === void 0) { endLoc = fullText.length; }
        if (lastSuccessLoc === void 0) { lastSuccessLoc = 0; }
        var midLoc = Math.floor((startLoc + endLoc) / 2);
        var currentText = fullText.slice(0, midLoc);
        textNode.textContent = currentText;
        if (startLoc >= endLoc - 1) {
            // Loop when step is small
            for (var step = endLoc; step >= startLoc; step -= 1) {
                var currentStepText = fullText.slice(0, step);
                textNode.textContent = currentStepText;
                if (inRange()) {
                    return step === fullText.length
                        ? {
                            finished: false,
                            node: document.createTextNode(fullText)
                        }
                        : {
                            finished: true,
                            node: document.createTextNode(currentStepText)
                        };
                }
            }
        }
        if (inRange()) {
            return measureText(textNode, fullText, midLoc, endLoc, midLoc);
        }
        else {
            return measureText(textNode, fullText, startLoc, midLoc, lastSuccessLoc);
        }
    }
    function measureNode(childNode, index) {
        var type = childNode.nodeType;
        if (type === ELEMENT_NODE) {
            // We don't split element, it will keep if whole element can be displayed.
            // appendChildNode(childNode);
            if (inRange()) {
                return {
                    finished: false,
                    node: contentList[index]
                };
            }
            // Clean up if can not pull in
            ellipsisContentHolder.removeChild(childNode);
            return {
                finished: true,
                node: null
            };
        }
        else if (type === TEXT_NODE) {
            var fullText = childNode.textContent || '';
            var textNode = document.createTextNode(fullText);
            appendChildNode(textNode);
            return measureText(textNode, fullText);
        }
        // Not handle other type of content
        // PS: This code should not be attached after react 16
        return {
            finished: false,
            node: null
        };
    }
    var ellipsisNodes = [];
    childNodes.some(function (childNode, index) {
        var _a = measureNode(childNode, index), finished = _a.finished, node = _a.node;
        if (node) {
            ellipsisNodes.push(node);
        }
        return finished;
    });
    var result = {
        contentNodes: ellipsisNodes,
        text: ellipsisContainer.innerHTML,
        ellipsis: true
    };
    while (ellipsisContainer.firstChild) {
        ellipsisContainer.removeChild(ellipsisContainer.firstChild);
    }
    return result;
}

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var scrollbarVerticalSize;
var scrollbarHorizontalSize;
// Measure scrollbar width for padding body during modal show/hide
var scrollbarMeasure = {
    position: 'absolute',
    top: '-9999px',
    width: '50px',
    height: '50px'
};
function measureScrollbar(direction, prefix) {
    if (direction === void 0) { direction = 'vertical'; }
    if (prefix === void 0) { prefix = 'ant'; }
    if (typeof document === 'undefined' || typeof window === 'undefined') {
        return 0;
    }
    var isVertical = direction === 'vertical';
    if (isVertical && scrollbarVerticalSize) {
        return scrollbarVerticalSize;
    }
    else if (!isVertical && scrollbarHorizontalSize) {
        return scrollbarHorizontalSize;
    }
    var scrollDiv = document.createElement('div');
    Object.keys(scrollbarMeasure).forEach(function (scrollProp) {
        // @ts-ignore
        scrollDiv.style[scrollProp] = scrollbarMeasure[scrollProp];
    });
    // apply hide scrollbar className ahead
    scrollDiv.className = prefix + "-hide-scrollbar scroll-div-append-to-body";
    // Append related overflow style
    if (isVertical) {
        scrollDiv.style.overflowY = 'scroll';
    }
    else {
        scrollDiv.style.overflowX = 'scroll';
    }
    document.body.appendChild(scrollDiv);
    var size = 0;
    if (isVertical) {
        size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        scrollbarVerticalSize = size;
    }
    else {
        size = scrollDiv.offsetHeight - scrollDiv.clientHeight;
        scrollbarHorizontalSize = size;
    }
    document.body.removeChild(scrollDiv);
    return size;
}

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function ensureInBounds(value, boundValue) {
    return value ? (value < boundValue ? value : boundValue) : boundValue;
}

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function inNextTick() {
    var timer = new Subject();
    Promise.resolve().then(function () { return timer.next(); });
    return timer.pipe(take(1));
}

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

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function isCheckDisabled(node) {
    var isDisabled = node.isDisabled, isDisableCheckbox = node.isDisableCheckbox;
    return !!(isDisabled || isDisableCheckbox);
}
// tslint:disable-next-line:no-any
function isInArray(needle, haystack) {
    return haystack.length > 0 && haystack.indexOf(needle) > -1;
}

var NzTreeBaseService = /** @class */ (function () {
    function NzTreeBaseService() {
        this.DRAG_SIDE_RANGE = 0.25;
        this.DRAG_MIN_GAP = 2;
        this.isCheckStrictly = false;
        this.isMultiple = false;
        this.rootNodes = [];
        this.selectedNodeList = [];
        this.expandedNodeList = [];
        this.checkedNodeList = [];
        this.halfCheckedNodeList = [];
        this.matchedNodeList = [];
        this.triggerEventChange$ = new Subject();
    }
    /**
     * trigger event
     */
    NzTreeBaseService.prototype.eventTriggerChanged = function () {
        return this.triggerEventChange$.asObservable();
    };
    /**
     * reset tree nodes will clear default node list
     */
    NzTreeBaseService.prototype.initTree = function (nzNodes) {
        var _this = this;
        this.rootNodes = nzNodes;
        this.expandedNodeList = [];
        this.selectedNodeList = [];
        this.halfCheckedNodeList = [];
        this.checkedNodeList = [];
        this.matchedNodeList = [];
        // refresh node checked state
        setTimeout(function () {
            _this.refreshCheckState(_this.isCheckStrictly);
        });
    };
    NzTreeBaseService.prototype.getSelectedNode = function () {
        return this.selectedNode;
    };
    /**
     * get some list
     */
    NzTreeBaseService.prototype.getSelectedNodeList = function () {
        return this.conductNodeState('select');
    };
    /**
     * return checked nodes
     */
    NzTreeBaseService.prototype.getCheckedNodeList = function () {
        return this.conductNodeState('check');
    };
    NzTreeBaseService.prototype.getHalfCheckedNodeList = function () {
        return this.conductNodeState('halfCheck');
    };
    /**
     * return expanded nodes
     */
    NzTreeBaseService.prototype.getExpandedNodeList = function () {
        return this.conductNodeState('expand');
    };
    /**
     * return search matched nodes
     */
    NzTreeBaseService.prototype.getMatchedNodeList = function () {
        return this.conductNodeState('match');
    };
    // tslint:disable-next-line:no-any
    NzTreeBaseService.prototype.isArrayOfNzTreeNode = function (value) {
        return value.every(function (item) { return item instanceof NzTreeNode; });
    };
    /**
     * reset selectedNodeList
     */
    NzTreeBaseService.prototype.calcSelectedKeys = function (selectedKeys, nzNodes, isMulti) {
        if (isMulti === void 0) { isMulti = false; }
        var calc = function (nodes) {
            return nodes.every(function (node) {
                if (isInArray(node.key, selectedKeys)) {
                    node.isSelected = true;
                    if (!isMulti) {
                        // if not support multi select
                        return false;
                    }
                }
                else {
                    node.isSelected = false;
                }
                if (node.children.length > 0) {
                    // Recursion
                    return calc(node.children);
                }
                return true;
            });
        };
        calc(nzNodes);
    };
    /**
     * reset expandedNodeList
     */
    NzTreeBaseService.prototype.calcExpandedKeys = function (expandedKeys, nzNodes) {
        this.expandedNodeList = [];
        var calc = function (nodes) {
            nodes.forEach(function (node) {
                node.isExpanded = isInArray(node.key, expandedKeys);
                if (node.children.length > 0) {
                    calc(node.children);
                }
            });
        };
        calc(nzNodes);
    };
    /**
     * reset checkedNodeList
     */
    NzTreeBaseService.prototype.calcCheckedKeys = function (checkedKeys, nzNodes, isCheckStrictly) {
        if (isCheckStrictly === void 0) { isCheckStrictly = false; }
        this.checkedNodeList = [];
        this.halfCheckedNodeList = [];
        var calc = function (nodes) {
            nodes.forEach(function (node) {
                if (isInArray(node.key, checkedKeys)) {
                    node.isChecked = true;
                    node.isHalfChecked = false;
                }
                else {
                    node.isChecked = false;
                    node.isHalfChecked = false;
                }
                if (node.children.length > 0) {
                    calc(node.children);
                }
            });
        };
        calc(nzNodes);
        // controlled state
        this.refreshCheckState(isCheckStrictly);
    };
    /**
     * set drag node
     */
    NzTreeBaseService.prototype.setSelectedNode = function (node) {
        this.selectedNode = node;
    };
    /**
     * set node selected status
     */
    NzTreeBaseService.prototype.setNodeActive = function (node) {
        if (!this.isMultiple && node.isSelected) {
            this.selectedNodeList.forEach(function (n) {
                if (node.key !== n.key) {
                    // reset other nodes
                    n.isSelected = false;
                }
            });
            // single mode: remove pre node
            this.selectedNodeList = [];
        }
        this.setSelectedNodeList(node, this.isMultiple);
    };
    /**
     * add or remove node to selectedNodeList
     */
    NzTreeBaseService.prototype.setSelectedNodeList = function (node, isMultiple) {
        if (isMultiple === void 0) { isMultiple = false; }
        var index = this.selectedNodeList.findIndex(function (n) { return node.key === n.key; });
        if (isMultiple) {
            if (node.isSelected && index === -1) {
                this.selectedNodeList.push(node);
            }
        }
        else {
            if (node.isSelected && index === -1) {
                this.selectedNodeList = [node];
            }
        }
        if (!node.isSelected) {
            this.selectedNodeList = this.selectedNodeList.filter(function (n) { return n.key !== node.key; });
        }
    };
    /**
     * merge checked nodes
     */
    NzTreeBaseService.prototype.setHalfCheckedNodeList = function (node) {
        var index = this.halfCheckedNodeList.findIndex(function (n) { return node.key === n.key; });
        if (node.isHalfChecked && index === -1) {
            this.halfCheckedNodeList.push(node);
        }
        else if (!node.isHalfChecked && index > -1) {
            this.halfCheckedNodeList = this.halfCheckedNodeList.filter(function (n) { return node.key !== n.key; });
        }
    };
    NzTreeBaseService.prototype.setCheckedNodeList = function (node) {
        var index = this.checkedNodeList.findIndex(function (n) { return node.key === n.key; });
        if (node.isChecked && index === -1) {
            this.checkedNodeList.push(node);
        }
        else if (!node.isChecked && index > -1) {
            this.checkedNodeList = this.checkedNodeList.filter(function (n) { return node.key !== n.key; });
        }
    };
    /**
     * conduct checked/selected/expanded keys
     */
    NzTreeBaseService.prototype.conductNodeState = function (type) {
        var _this = this;
        if (type === void 0) { type = 'check'; }
        var resultNodesList = [];
        switch (type) {
            case 'select':
                resultNodesList = this.selectedNodeList;
                break;
            case 'expand':
                resultNodesList = this.expandedNodeList;
                break;
            case 'match':
                resultNodesList = this.matchedNodeList;
                break;
            case 'check':
                resultNodesList = this.checkedNodeList;
                var isIgnore_1 = function (node) {
                    var parentNode = node.getParentNode();
                    if (parentNode) {
                        if (_this.checkedNodeList.findIndex(function (n) { return n.key === parentNode.key; }) > -1) {
                            return true;
                        }
                        else {
                            return isIgnore_1(parentNode);
                        }
                    }
                    return false;
                };
                // merge checked
                if (!this.isCheckStrictly) {
                    resultNodesList = this.checkedNodeList.filter(function (n) { return !isIgnore_1(n); });
                }
                break;
            case 'halfCheck':
                if (!this.isCheckStrictly) {
                    resultNodesList = this.halfCheckedNodeList;
                }
                break;
        }
        return resultNodesList;
    };
    /**
     * set expanded nodes
     */
    NzTreeBaseService.prototype.setExpandedNodeList = function (node) {
        if (node.isLeaf) {
            return;
        }
        var index = this.expandedNodeList.findIndex(function (n) { return node.key === n.key; });
        if (node.isExpanded && index === -1) {
            this.expandedNodeList.push(node);
        }
        else if (!node.isExpanded && index > -1) {
            this.expandedNodeList = this.expandedNodeList.filter(function (n) { return node.key !== n.key; });
        }
    };
    /**
     * check state
     * @param isCheckStrictly
     */
    NzTreeBaseService.prototype.refreshCheckState = function (isCheckStrictly) {
        var _this = this;
        if (isCheckStrictly === void 0) { isCheckStrictly = false; }
        if (isCheckStrictly) {
            return;
        }
        this.checkedNodeList.forEach(function (node) {
            _this.conduct(node);
        });
    };
    // reset other node checked state based current node
    NzTreeBaseService.prototype.conduct = function (node) {
        var isChecked = node.isChecked;
        if (node) {
            this.conductUp(node);
            this.conductDown(node, isChecked);
        }
    };
    /**
     * 1、children half checked
     * 2、children all checked, parent checked
     * 3、no children checked
     */
    NzTreeBaseService.prototype.conductUp = function (node) {
        var parentNode = node.getParentNode();
        if (parentNode) {
            if (!isCheckDisabled(parentNode)) {
                if (parentNode.children.every(function (child) { return isCheckDisabled(child) || (!child.isHalfChecked && child.isChecked); })) {
                    parentNode.isChecked = true;
                    parentNode.isHalfChecked = false;
                }
                else if (parentNode.children.some(function (child) { return child.isHalfChecked || child.isChecked; })) {
                    parentNode.isChecked = false;
                    parentNode.isHalfChecked = true;
                }
                else {
                    parentNode.isChecked = false;
                    parentNode.isHalfChecked = false;
                }
            }
            this.setCheckedNodeList(parentNode);
            this.setHalfCheckedNodeList(parentNode);
            this.conductUp(parentNode);
        }
    };
    /**
     * reset child check state
     */
    NzTreeBaseService.prototype.conductDown = function (node, value) {
        var _this = this;
        if (!isCheckDisabled(node)) {
            node.isChecked = value;
            node.isHalfChecked = false;
            this.setCheckedNodeList(node);
            this.setHalfCheckedNodeList(node);
            node.children.forEach(function (n) {
                _this.conductDown(n, value);
            });
        }
    };
    /**
     * search value & expand node
     * should add expandlist
     */
    NzTreeBaseService.prototype.searchExpand = function (value) {
        var _this = this;
        this.matchedNodeList = [];
        var expandedKeys = [];
        if (!isNotNil(value)) {
            return;
        }
        // to reset expandedNodeList
        var expandParent = function (n) {
            // expand parent node
            var parentNode = n.getParentNode();
            if (parentNode) {
                expandedKeys.push(parentNode.key);
                expandParent(parentNode);
            }
        };
        var searchChild = function (n) {
            if (value && n.title.includes(value)) {
                // match the node
                n.isMatched = true;
                _this.matchedNodeList.push(n);
                // expand parentNode
                expandParent(n);
            }
            else {
                n.isMatched = false;
            }
            n.canHide = !n.isMatched;
            n.children.forEach(function (child) {
                searchChild(child);
            });
        };
        this.rootNodes.forEach(function (child) {
            searchChild(child);
        });
        // expand matched keys
        this.calcExpandedKeys(expandedKeys, this.rootNodes);
    };
    /**
     * flush after delete node
     */
    NzTreeBaseService.prototype.afterRemove = function (nodes) {
        var _this = this;
        // to reset selectedNodeList & expandedNodeList
        var loopNode = function (node) {
            // remove selected node
            _this.selectedNodeList = _this.selectedNodeList.filter(function (n) { return n.key !== node.key; });
            // remove expanded node
            _this.expandedNodeList = _this.expandedNodeList.filter(function (n) { return n.key !== node.key; });
            // remove checked node
            _this.checkedNodeList = _this.checkedNodeList.filter(function (n) { return n.key !== node.key; });
            if (node.children) {
                node.children.forEach(function (child) {
                    loopNode(child);
                });
            }
        };
        nodes.forEach(function (n) {
            loopNode(n);
        });
        this.refreshCheckState(this.isCheckStrictly);
    };
    /**
     * drag event
     */
    NzTreeBaseService.prototype.refreshDragNode = function (node) {
        var _this = this;
        if (node.children.length === 0) {
            // until root
            this.conductUp(node);
        }
        else {
            node.children.forEach(function (child) {
                _this.refreshDragNode(child);
            });
        }
    };
    // reset node level
    NzTreeBaseService.prototype.resetNodeLevel = function (node) {
        var e_1, _a;
        var parentNode = node.getParentNode();
        if (parentNode) {
            node.level = parentNode.level + 1;
        }
        else {
            node.level = 0;
        }
        try {
            for (var _b = __values(node.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                var child = _c.value;
                this.resetNodeLevel(child);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    NzTreeBaseService.prototype.calcDropPosition = function (event) {
        var clientY = event.clientY;
        // to fix firefox undefined
        var _a = event.srcElement
            ? event.srcElement.getBoundingClientRect()
            : event.target.getBoundingClientRect(), top = _a.top, bottom = _a.bottom, height = _a.height;
        var des = Math.max(height * this.DRAG_SIDE_RANGE, this.DRAG_MIN_GAP);
        if (clientY <= top + des) {
            return -1;
        }
        else if (clientY >= bottom - des) {
            return 1;
        }
        return 0;
    };
    /**
     * drop
     * 0: inner -1: pre 1: next
     */
    NzTreeBaseService.prototype.dropAndApply = function (targetNode, dragPos) {
        var _this = this;
        if (dragPos === void 0) { dragPos = -1; }
        if (!targetNode || dragPos > 1) {
            return;
        }
        var treeService = targetNode.treeService;
        var targetParent = targetNode.getParentNode();
        var isSelectedRootNode = this.selectedNode.getParentNode();
        // remove the dragNode
        if (isSelectedRootNode) {
            isSelectedRootNode.children = isSelectedRootNode.children.filter(function (n) { return n.key !== _this.selectedNode.key; });
        }
        else {
            this.rootNodes = this.rootNodes.filter(function (n) { return n.key !== _this.selectedNode.key; });
        }
        switch (dragPos) {
            case 0:
                targetNode.addChildren([this.selectedNode]);
                this.resetNodeLevel(targetNode);
                break;
            case -1:
            case 1:
                var tIndex = dragPos === 1 ? 1 : 0;
                if (targetParent) {
                    targetParent.addChildren([this.selectedNode], targetParent.children.indexOf(targetNode) + tIndex);
                    var parentNode = this.selectedNode.getParentNode();
                    if (parentNode) {
                        this.resetNodeLevel(parentNode);
                    }
                }
                else {
                    var targetIndex = this.rootNodes.indexOf(targetNode) + tIndex;
                    // Insert root node.
                    this.rootNodes.splice(targetIndex, 0, this.selectedNode);
                    this.rootNodes[targetIndex].parentNode = null;
                    this.rootNodes[targetIndex].level = 0;
                }
                break;
        }
        // flush all nodes
        this.rootNodes.forEach(function (child) {
            if (!child.treeService) {
                child.service = treeService;
            }
            _this.refreshDragNode(child);
        });
    };
    /**
     * emit Structure
     * eventName
     * node
     * event: MouseEvent / DragEvent
     * dragNode
     */
    NzTreeBaseService.prototype.formatEvent = function (eventName, node, event) {
        var emitStructure = {
            eventName: eventName,
            node: node,
            event: event
        };
        switch (eventName) {
            case 'dragstart':
            case 'dragenter':
            case 'dragover':
            case 'dragleave':
            case 'drop':
            case 'dragend':
                Object.assign(emitStructure, { dragNode: this.getSelectedNode() });
                break;
            case 'click':
            case 'dblclick':
                Object.assign(emitStructure, { selectedKeys: this.selectedNodeList });
                Object.assign(emitStructure, { nodes: this.selectedNodeList });
                Object.assign(emitStructure, { keys: this.selectedNodeList.map(function (n) { return n.key; }) });
                break;
            case 'check':
                var checkedNodeList = this.getCheckedNodeList();
                Object.assign(emitStructure, { checkedKeys: checkedNodeList });
                Object.assign(emitStructure, { nodes: checkedNodeList });
                Object.assign(emitStructure, { keys: checkedNodeList.map(function (n) { return n.key; }) });
                break;
            case 'search':
                Object.assign(emitStructure, { matchedKeys: this.getMatchedNodeList() });
                Object.assign(emitStructure, { nodes: this.getMatchedNodeList() });
                Object.assign(emitStructure, { keys: this.getMatchedNodeList().map(function (n) { return n.key; }) });
                break;
            case 'expand':
                Object.assign(emitStructure, { nodes: this.expandedNodeList });
                Object.assign(emitStructure, { keys: this.expandedNodeList.map(function (n) { return n.key; }) });
                break;
        }
        return emitStructure;
    };
    NzTreeBaseService.prototype.ngOnDestroy = function () {
        this.triggerEventChange$.complete();
    };
    /** @nocollapse */ NzTreeBaseService.ɵfac = function NzTreeBaseService_Factory(t) { return new (t || NzTreeBaseService)(); };
    /** @nocollapse */ NzTreeBaseService.ɵprov = ɵɵdefineInjectable({ token: NzTreeBaseService, factory: NzTreeBaseService.ɵfac });
    return NzTreeBaseService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzTreeBaseService, [{
        type: Injectable
    }], null, null); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzTreeHigherOrderServiceToken = new InjectionToken('NzTreeHigherOrder');

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzTreeBase = /** @class */ (function () {
    function NzTreeBase(nzTreeService) {
        this.nzTreeService = nzTreeService;
    }
    /**
     * Coerces a value({@link any[]}) to a TreeNodes({@link NzTreeNode[]})
     */
    NzTreeBase.prototype.coerceTreeNodes = function (
    // tslint:disable-next-line:no-any
    value) {
        var _this = this;
        var nodes = [];
        if (!this.nzTreeService.isArrayOfNzTreeNode(value)) {
            // has not been new NzTreeNode
            nodes = value.map(function (item) { return new NzTreeNode(item, null, _this.nzTreeService); });
        }
        else {
            nodes = value.map(function (item) {
                item.service = _this.nzTreeService;
                return item;
            });
        }
        return nodes;
    };
    /**
     * Get all nodes({@link NzTreeNode})
     */
    NzTreeBase.prototype.getTreeNodes = function () {
        return this.nzTreeService.rootNodes;
    };
    /**
     * Get {@link NzTreeNode} with key
     */
    NzTreeBase.prototype.getTreeNodeByKey = function (key) {
        // flat tree nodes
        var nodes = [];
        var getNode = function (node) {
            nodes.push(node);
            node.getChildren().forEach(function (n) {
                getNode(n);
            });
        };
        this.getTreeNodes().forEach(function (n) {
            getNode(n);
        });
        return nodes.find(function (n) { return n.key === key; }) || null;
    };
    /**
     * Get checked nodes(merged)
     */
    NzTreeBase.prototype.getCheckedNodeList = function () {
        return this.nzTreeService.getCheckedNodeList();
    };
    /**
     * Get selected nodes
     */
    NzTreeBase.prototype.getSelectedNodeList = function () {
        return this.nzTreeService.getSelectedNodeList();
    };
    /**
     * Get half checked nodes
     */
    NzTreeBase.prototype.getHalfCheckedNodeList = function () {
        return this.nzTreeService.getHalfCheckedNodeList();
    };
    /**
     * Get expanded nodes
     */
    NzTreeBase.prototype.getExpandedNodeList = function () {
        return this.nzTreeService.getExpandedNodeList();
    };
    /**
     * Get matched nodes(if nzSearchValue is not null)
     */
    NzTreeBase.prototype.getMatchedNodeList = function () {
        return this.nzTreeService.getMatchedNodeList();
    };
    return NzTreeBase;
}());

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
var NzWaveRenderer = /** @class */ (function () {
    function NzWaveRenderer(triggerElement, ngZone, insertExtraNode) {
        var _this = this;
        this.triggerElement = triggerElement;
        this.ngZone = ngZone;
        this.insertExtraNode = insertExtraNode;
        this.waveTransitionDuration = 400;
        this.lastTime = 0;
        this.platform = new Platform();
        this.onClick = function (event) {
            if (!_this.triggerElement ||
                !_this.triggerElement.getAttribute ||
                _this.triggerElement.getAttribute('disabled') ||
                event.target.tagName === 'INPUT' ||
                _this.triggerElement.className.indexOf('disabled') >= 0) {
                return;
            }
            _this.fadeOutWave();
        };
        this.clickHandler = this.onClick.bind(this);
        this.bindTriggerEvent();
    }
    Object.defineProperty(NzWaveRenderer.prototype, "waveAttributeName", {
        get: function () {
            return this.insertExtraNode ? 'ant-click-animating' : 'ant-click-animating-without-extra-node';
        },
        enumerable: true,
        configurable: true
    });
    NzWaveRenderer.prototype.bindTriggerEvent = function () {
        var _this = this;
        if (this.platform.isBrowser) {
            this.ngZone.runOutsideAngular(function () {
                _this.removeTriggerEvent();
                if (_this.triggerElement) {
                    _this.triggerElement.addEventListener('click', _this.clickHandler, true);
                }
            });
        }
    };
    NzWaveRenderer.prototype.removeTriggerEvent = function () {
        if (this.triggerElement) {
            this.triggerElement.removeEventListener('click', this.clickHandler, true);
        }
    };
    NzWaveRenderer.prototype.removeStyleAndExtraNode = function () {
        if (this.styleForPseudo && document.body.contains(this.styleForPseudo)) {
            document.body.removeChild(this.styleForPseudo);
            this.styleForPseudo = null;
        }
        if (this.insertExtraNode && this.triggerElement.contains(this.extraNode)) {
            this.triggerElement.removeChild(this.extraNode);
        }
    };
    NzWaveRenderer.prototype.destroy = function () {
        this.removeTriggerEvent();
        this.removeStyleAndExtraNode();
    };
    NzWaveRenderer.prototype.fadeOutWave = function () {
        var _this = this;
        var node = this.triggerElement;
        var waveColor = this.getWaveColor(node);
        node.setAttribute(this.waveAttributeName, 'true');
        if (Date.now() < this.lastTime + this.waveTransitionDuration) {
            return;
        }
        if (this.isValidColor(waveColor)) {
            if (!this.styleForPseudo) {
                this.styleForPseudo = document.createElement('style');
            }
            this.styleForPseudo.innerHTML = "\n      [ant-click-animating-without-extra-node='true']::after, .ant-click-animating-node {\n        --antd-wave-shadow-color: " + waveColor + ";\n      }";
            document.body.appendChild(this.styleForPseudo);
        }
        if (this.insertExtraNode) {
            if (!this.extraNode) {
                this.extraNode = document.createElement('div');
            }
            this.extraNode.className = 'ant-click-animating-node';
            node.appendChild(this.extraNode);
        }
        this.lastTime = Date.now();
        this.runTimeoutOutsideZone(function () {
            node.removeAttribute(_this.waveAttributeName);
            _this.removeStyleAndExtraNode();
        }, this.waveTransitionDuration);
    };
    NzWaveRenderer.prototype.isValidColor = function (color) {
        return (!!color &&
            color !== '#ffffff' &&
            color !== 'rgb(255, 255, 255)' &&
            this.isNotGrey(color) &&
            !/rgba\(\d*, \d*, \d*, 0\)/.test(color) &&
            color !== 'transparent');
    };
    NzWaveRenderer.prototype.isNotGrey = function (color) {
        var match = color.match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);
        if (match && match[1] && match[2] && match[3]) {
            return !(match[1] === match[2] && match[2] === match[3]);
        }
        return true;
    };
    NzWaveRenderer.prototype.getWaveColor = function (node) {
        var nodeStyle = getComputedStyle(node);
        return (nodeStyle.getPropertyValue('border-top-color') || // Firefox Compatible
            nodeStyle.getPropertyValue('border-color') ||
            nodeStyle.getPropertyValue('background-color'));
    };
    NzWaveRenderer.prototype.runTimeoutOutsideZone = function (fn, delay) {
        this.ngZone.runOutsideAngular(function () { return setTimeout(fn, delay); });
    };
    return NzWaveRenderer;
}());

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NZ_WAVE_GLOBAL_DEFAULT_CONFIG = {
    disabled: false
};
var NZ_WAVE_GLOBAL_CONFIG = new InjectionToken('nz-wave-global-options', {
    providedIn: 'root',
    factory: NZ_WAVE_GLOBAL_CONFIG_FACTORY
});
function NZ_WAVE_GLOBAL_CONFIG_FACTORY() {
    return NZ_WAVE_GLOBAL_DEFAULT_CONFIG;
}
var NzWaveDirective = /** @class */ (function () {
    function NzWaveDirective(ngZone, elementRef, config, animationType) {
        this.ngZone = ngZone;
        this.elementRef = elementRef;
        this.config = config;
        this.animationType = animationType;
        this.nzWaveExtraNode = false;
        this.waveDisabled = false;
        this.waveDisabled = this.isConfigDisabled();
    }
    Object.defineProperty(NzWaveDirective.prototype, "disabled", {
        get: function () {
            return this.waveDisabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzWaveDirective.prototype, "rendererRef", {
        get: function () {
            return this.waveRenderer;
        },
        enumerable: true,
        configurable: true
    });
    NzWaveDirective.prototype.isConfigDisabled = function () {
        var disabled = false;
        if (this.config && typeof this.config.disabled === 'boolean') {
            disabled = this.config.disabled;
        }
        if (this.animationType === 'NoopAnimations') {
            disabled = true;
        }
        return disabled;
    };
    NzWaveDirective.prototype.ngOnDestroy = function () {
        if (this.waveRenderer) {
            this.waveRenderer.destroy();
        }
    };
    NzWaveDirective.prototype.ngOnInit = function () {
        this.renderWaveIfEnabled();
    };
    NzWaveDirective.prototype.renderWaveIfEnabled = function () {
        if (!this.waveDisabled && this.elementRef.nativeElement) {
            this.waveRenderer = new NzWaveRenderer(this.elementRef.nativeElement, this.ngZone, this.nzWaveExtraNode);
        }
    };
    NzWaveDirective.prototype.disable = function () {
        this.waveDisabled = true;
        if (this.waveRenderer) {
            this.waveRenderer.removeTriggerEvent();
            this.waveRenderer.removeStyleAndExtraNode();
        }
    };
    NzWaveDirective.prototype.enable = function () {
        // config priority
        this.waveDisabled = this.isConfigDisabled() || false;
        if (this.waveRenderer) {
            this.waveRenderer.bindTriggerEvent();
        }
    };
    /** @nocollapse */ NzWaveDirective.ɵfac = function NzWaveDirective_Factory(t) { return new (t || NzWaveDirective)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NZ_WAVE_GLOBAL_CONFIG, 8), ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8)); };
    /** @nocollapse */ NzWaveDirective.ɵdir = ɵɵdefineDirective({ type: NzWaveDirective, selectors: [["", "nz-wave", ""]], inputs: { nzWaveExtraNode: "nzWaveExtraNode" }, exportAs: ["nzWave"] });
    return NzWaveDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzWaveDirective, [{
        type: Directive,
        args: [{
                selector: '[nz-wave]',
                exportAs: 'nzWave'
            }]
    }], function () { return [{ type: NgZone }, { type: ElementRef }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [NZ_WAVE_GLOBAL_CONFIG]
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [ANIMATION_MODULE_TYPE]
            }] }]; }, { nzWaveExtraNode: [{
            type: Input
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzWaveModule = /** @class */ (function () {
    function NzWaveModule() {
    }
    /** @nocollapse */ NzWaveModule.ɵmod = ɵɵdefineNgModule({ type: NzWaveModule });
    /** @nocollapse */ NzWaveModule.ɵinj = ɵɵdefineInjector({ factory: function NzWaveModule_Factory(t) { return new (t || NzWaveModule)(); }, imports: [[PlatformModule]] });
    return NzWaveModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzWaveModule, { declarations: [NzWaveDirective], imports: [PlatformModule], exports: [NzWaveDirective] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzWaveModule, [{
        type: NgModule,
        args: [{
                imports: [PlatformModule],
                exports: [NzWaveDirective],
                declarations: [NzWaveDirective]
            }]
    }], null, null); })();

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
var NzMenuBaseService = /** @class */ (function () {
    function NzMenuBaseService() {
        this.menuItemClick$ = new Subject(); // tslint:disable-line no-any
        this.theme$ = new Subject();
        this.mode$ = new BehaviorSubject('vertical');
        this.inlineIndent$ = new BehaviorSubject(24);
        this.theme = 'light';
        this.mode = 'vertical';
        this.inlineIndent = 24;
        this.menuOpen$ = new BehaviorSubject(false);
    }
    // tslint:disable-next-line no-any
    NzMenuBaseService.prototype.onMenuItemClick = function (menu) {
        this.menuItemClick$.next(menu);
    };
    NzMenuBaseService.prototype.setMode = function (mode) {
        this.mode = mode;
        this.mode$.next(mode);
    };
    NzMenuBaseService.prototype.setTheme = function (theme) {
        this.theme = theme;
        this.theme$.next(theme);
    };
    NzMenuBaseService.prototype.setInlineIndent = function (indent) {
        this.inlineIndent = indent;
        this.inlineIndent$.next(indent);
    };
    /** @nocollapse */ NzMenuBaseService.ɵfac = function NzMenuBaseService_Factory(t) { return new (t || NzMenuBaseService)(); };
    /** @nocollapse */ NzMenuBaseService.ɵprov = ɵɵdefineInjectable({ token: NzMenuBaseService, factory: NzMenuBaseService.ɵfac });
    return NzMenuBaseService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzMenuBaseService, [{
        type: Injectable
    }], null, null); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzDropdownHigherOrderServiceToken = new InjectionToken('NzMenuHigherOrder');

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
var NzBreakpoint;
(function (NzBreakpoint) {
    NzBreakpoint["xxl"] = "xxl";
    NzBreakpoint["xl"] = "xl";
    NzBreakpoint["lg"] = "lg";
    NzBreakpoint["md"] = "md";
    NzBreakpoint["sm"] = "sm";
    NzBreakpoint["xs"] = "xs";
})(NzBreakpoint || (NzBreakpoint = {}));
var responsiveMap = {
    xs: '(max-width: 575px)',
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
    xxl: '(min-width: 1600px)'
};

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
var NzTransButtonDirective = /** @class */ (function () {
    function NzTransButtonDirective() {
    }
    /** @nocollapse */ NzTransButtonDirective.ɵfac = function NzTransButtonDirective_Factory(t) { return new (t || NzTransButtonDirective)(); };
    /** @nocollapse */ NzTransButtonDirective.ɵdir = ɵɵdefineDirective({ type: NzTransButtonDirective, selectors: [["button", "nz-trans-button", ""]], hostBindings: function NzTransButtonDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            ɵɵallocHostVars(4);
        } if (rf & 2) {
            ɵɵstyleSanitizer(ɵɵdefaultStyleSanitizer);
            ɵɵstyleProp("border", "0")("background", "transparent")("padding", "0")("line-height", "inherit");
        } } });
    return NzTransButtonDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzTransButtonDirective, [{
        type: Directive,
        args: [{
                selector: 'button[nz-trans-button]',
                host: {
                    '[style.border]': '"0"',
                    '[style.background]': '"transparent"',
                    '[style.padding]': '"0"',
                    '[style.line-height]': '"inherit"'
                }
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzTransButtonModule = /** @class */ (function () {
    function NzTransButtonModule() {
    }
    /** @nocollapse */ NzTransButtonModule.ɵmod = ɵɵdefineNgModule({ type: NzTransButtonModule });
    /** @nocollapse */ NzTransButtonModule.ɵinj = ɵɵdefineInjector({ factory: function NzTransButtonModule_Factory(t) { return new (t || NzTransButtonModule)(); }, imports: [[CommonModule]] });
    return NzTransButtonModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzTransButtonModule, { declarations: [NzTransButtonDirective], imports: [CommonModule], exports: [NzTransButtonDirective] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzTransButtonModule, [{
        type: NgModule,
        args: [{
                declarations: [NzTransButtonDirective],
                exports: [NzTransButtonDirective],
                imports: [CommonModule]
            }]
    }], null, null); })();

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
// Regular Expressions for parsing tags and attributes
var SURROGATE_PAIR_REGEXP = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
// ! to ~ is the ASCII range.
var NON_ALPHANUMERIC_REGEXP = /([^\#-~ |!])/g;
/**
 * Escapes all potentially dangerous characters, so that the
 * resulting string can be safely inserted into attribute or
 * element text.
 */
function encodeEntities(value) {
    return value
        .replace(/&/g, '&amp;')
        .replace(SURROGATE_PAIR_REGEXP, function (match) {
        var hi = match.charCodeAt(0);
        var low = match.charCodeAt(1);
        return "&#" + ((hi - 0xd800) * 0x400 + (low - 0xdc00) + 0x10000) + ";";
    })
        .replace(NON_ALPHANUMERIC_REGEXP, function (match) { return "&#" + match.charCodeAt(0) + ";"; })
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}
var NzHighlightPipe = /** @class */ (function () {
    function NzHighlightPipe() {
        this.UNIQUE_WRAPPERS = ['##==-open_tag-==##', '##==-close_tag-==##'];
    }
    NzHighlightPipe.prototype.transform = function (value, highlightValue, flags, klass) {
        if (!highlightValue) {
            return value;
        }
        // Escapes regex keyword to interpret these characters literally
        var searchValue = new RegExp(highlightValue.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$&'), flags);
        var wrapValue = value.replace(searchValue, this.UNIQUE_WRAPPERS[0] + "$&" + this.UNIQUE_WRAPPERS[1]);
        return encodeEntities(wrapValue)
            .replace(new RegExp(this.UNIQUE_WRAPPERS[0], 'g'), klass ? "<span class=\"" + klass + "\">" : '<span>')
            .replace(new RegExp(this.UNIQUE_WRAPPERS[1], 'g'), '</span>');
    };
    /** @nocollapse */ NzHighlightPipe.ɵfac = function NzHighlightPipe_Factory(t) { return new (t || NzHighlightPipe)(); };
    /** @nocollapse */ NzHighlightPipe.ɵpipe = ɵɵdefinePipe({ name: "nzHighlight", type: NzHighlightPipe, pure: true });
    return NzHighlightPipe;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzHighlightPipe, [{
        type: Pipe,
        args: [{
                name: 'nzHighlight',
                pure: true
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzHighlightModule = /** @class */ (function () {
    function NzHighlightModule() {
    }
    /** @nocollapse */ NzHighlightModule.ɵmod = ɵɵdefineNgModule({ type: NzHighlightModule });
    /** @nocollapse */ NzHighlightModule.ɵinj = ɵɵdefineInjector({ factory: function NzHighlightModule_Factory(t) { return new (t || NzHighlightModule)(); }, imports: [[CommonModule]] });
    return NzHighlightModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzHighlightModule, { declarations: [NzHighlightPipe], imports: [CommonModule], exports: [NzHighlightPipe] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzHighlightModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [NzHighlightPipe],
                declarations: [NzHighlightPipe]
            }]
    }], null, null); })();

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
/**
 * User should provide an object implements this interface to set global configurations.
 */
var NZ_CONFIG = new InjectionToken('nz-config');

var isDefined = function (value) {
    return value !== undefined;
};
var NzConfigService = /** @class */ (function () {
    function NzConfigService(defaultConfig) {
        this.configUpdated$ = new Subject();
        this.config = defaultConfig || {};
    }
    NzConfigService.prototype.getConfigForComponent = function (componentName) {
        return this.config[componentName];
    };
    NzConfigService.prototype.getConfigChangeEventForComponent = function (componentName) {
        return this.configUpdated$.pipe(filter(function (n) { return n === componentName; }), mapTo(undefined));
    };
    NzConfigService.prototype.set = function (componentName, value) {
        this.config[componentName] = __assign(__assign({}, this.config[componentName]), value);
        this.configUpdated$.next(componentName);
    };
    /** @nocollapse */ NzConfigService.ɵfac = function NzConfigService_Factory(t) { return new (t || NzConfigService)(ɵɵinject(NZ_CONFIG, 8)); };
    /** @nocollapse */ NzConfigService.ɵprov = ɵɵdefineInjectable({ token: NzConfigService, factory: NzConfigService.ɵfac, providedIn: 'root' });
    return NzConfigService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzConfigService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [NZ_CONFIG]
            }] }]; }, null); })();
// tslint:disable:no-invalid-this
// tslint:disable:no-any
/**
 * This decorator is used to decorate properties. If a property is decorated, it would try to load default value from
 * config.
 */
// tslint:disable-next-line:typedef
function WithConfig(componentName, innerDefaultValue) {
    return function ConfigDecorator(target, propName, originalDescriptor) {
        var privatePropName = "$$__assignedValue__" + propName;
        Object.defineProperty(target, privatePropName, {
            configurable: true,
            writable: true,
            enumerable: false
        });
        return {
            get: function () {
                var originalValue = originalDescriptor && originalDescriptor.get ? originalDescriptor.get.bind(this)() : this[privatePropName];
                if (isDefined(originalValue)) {
                    return originalValue;
                }
                var componentConfig = this.nzConfigService.getConfigForComponent(componentName) || {};
                var configValue = componentConfig[propName];
                return isDefined(configValue) ? configValue : innerDefaultValue;
            },
            set: function (value) {
                if (originalDescriptor && originalDescriptor.set) {
                    originalDescriptor.set.bind(this)(value);
                }
                else {
                    this[privatePropName] = value;
                }
            },
            configurable: true,
            enumerable: true
        };
    };
}

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
var NzToCssUnitPipe = /** @class */ (function () {
    function NzToCssUnitPipe() {
    }
    NzToCssUnitPipe.prototype.transform = function (value, defaultUnit) {
        if (defaultUnit === void 0) { defaultUnit = 'px'; }
        var formatted = +value; // force convert
        return isNaN(formatted) ? "" + value : "" + formatted + defaultUnit;
    };
    /** @nocollapse */ NzToCssUnitPipe.ɵfac = function NzToCssUnitPipe_Factory(t) { return new (t || NzToCssUnitPipe)(); };
    /** @nocollapse */ NzToCssUnitPipe.ɵpipe = ɵɵdefinePipe({ name: "nzToCssUnit", type: NzToCssUnitPipe, pure: true });
    return NzToCssUnitPipe;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzToCssUnitPipe, [{
        type: Pipe,
        args: [{
                name: 'nzToCssUnit'
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

var NzTimeRangePipe = /** @class */ (function () {
    function NzTimeRangePipe() {
    }
    NzTimeRangePipe.prototype.transform = function (value, format) {
        if (format === void 0) { format = 'HH:mm:ss'; }
        var duration = Number(value || 0);
        return timeUnits.reduce(function (current, _a) {
            var _b = __read(_a, 2), name = _b[0], unit = _b[1];
            if (current.indexOf(name) !== -1) {
                var v_1 = Math.floor(duration / unit);
                duration -= v_1 * unit;
                return current.replace(new RegExp(name + "+", 'g'), function (match) {
                    return padStart(v_1.toString(), match.length, '0');
                });
            }
            return current;
        }, format);
    };
    /** @nocollapse */ NzTimeRangePipe.ɵfac = function NzTimeRangePipe_Factory(t) { return new (t || NzTimeRangePipe)(); };
    /** @nocollapse */ NzTimeRangePipe.ɵpipe = ɵɵdefinePipe({ name: "nzTimeRange", type: NzTimeRangePipe, pure: true });
    return NzTimeRangePipe;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzTimeRangePipe, [{
        type: Pipe,
        args: [{
                name: 'nzTimeRange',
                pure: true
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzPipesModule = /** @class */ (function () {
    function NzPipesModule() {
    }
    /** @nocollapse */ NzPipesModule.ɵmod = ɵɵdefineNgModule({ type: NzPipesModule });
    /** @nocollapse */ NzPipesModule.ɵinj = ɵɵdefineInjector({ factory: function NzPipesModule_Factory(t) { return new (t || NzPipesModule)(); }, imports: [[CommonModule]] });
    return NzPipesModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzPipesModule, { declarations: [NzTimeRangePipe, NzToCssUnitPipe], imports: [CommonModule], exports: [NzTimeRangePipe, NzToCssUnitPipe] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzPipesModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [NzTimeRangePipe, NzToCssUnitPipe],
                declarations: [NzTimeRangePipe, NzToCssUnitPipe]
            }]
    }], null, null); })();

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

/**
 * Generated bundle index. Do not edit.
 */

export { AnimationCurves, AnimationDuration, CandyDate, DEFAULT_DROPDOWN_POSITIONS, DEFAULT_MENTION_BOTTOM_POSITIONS, DEFAULT_MENTION_TOP_POSITIONS, DEFAULT_SUBMENU_POSITIONS, DEFAULT_TOOLTIP_POSITIONS, FakeViewportRuler, InputBoolean, InputCssPixel, InputNumber, MockNgZone, NZ_CONFIG, NZ_WAVE_GLOBAL_CONFIG, NZ_WAVE_GLOBAL_CONFIG_FACTORY, NZ_WAVE_GLOBAL_DEFAULT_CONFIG, NzAddOnModule, NzBreakpoint, NzClassListAddDirective, NzConfigService, NzConnectedOverlayDirective, NzCopyToClipboardService, NzCopyToClipboardServiceModule, NzDomEventService, NzDragService, NzDropdownHigherOrderServiceToken, NzHighlightModule, NzHighlightPipe, NzMenuBaseService, NzNoAnimationDirective, NzNoAnimationModule, NzOverlayModule, NzPipesModule, NzScrollService, NzSingletonService, NzStringTemplateOutletDirective, NzTimeRangePipe, NzToCssUnitPipe, NzTransButtonDirective, NzTransButtonModule, NzTreeBase, NzTreeBaseService, NzTreeHigherOrderServiceToken, NzTreeNode, NzUpdateHostClassService, NzWaveDirective, NzWaveModule, NzWaveRenderer, POSITION_MAP, PREFIX, SCROLL_SERVICE_PROVIDER, SCROLL_SERVICE_PROVIDER_FACTORY, WithConfig, arraysEqual, cancelRequestAnimationFrame, collapseMotion, createDebugEle, createFakeEvent, createKeyboardEvent, createMouseEvent, createTouchEvent, dispatchEvent, dispatchFakeEvent, dispatchKeyboardEvent, dispatchMouseEvent, dispatchTouchEvent, ensureInBounds, ensureNumberInRange, fadeMotion, filterNotEmptyNode, findFirstNotEmptyNode, findLastNotEmptyNode, getCaretCoordinates, getElementOffset, getEventPosition, getMentions, getPercent, getPlacementName, getPrecision, getRegExp, getRepeatedElement, getStyleAsText, helpMotion, inNextTick, isComponent, isEmpty, isInteger, isNil, isNonEmptyString, isNotNil, isPromise, isStyleSupport, isTemplateRef, isTouchEvent, log, measure, measureScrollbar, moveUpMotion, notificationMotion, padEnd, padStart, properties, pxToNumber, reqAnimFrame, responsiveMap, reverseChildNodes, scrollIntoView, shallowCopyArray, shallowEqual, silentEvent, slideAlertMotion, slideMotion, sortRangeValue, timeUnits, toArray, toBoolean, toCssPixel, toNumber, treeCollapseMotion, typeInElement, valueFunctionProp, warn, warnDeprecation, wrappedErrorMessage, zoomBadgeMotion, zoomBigMotion, zoomMotion };
//# sourceMappingURL=ng-zorro-antd-core.js.map

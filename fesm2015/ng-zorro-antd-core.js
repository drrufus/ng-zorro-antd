import { CommonModule, DOCUMENT } from '@angular/common';
import { ɵɵdirectiveInject, ElementRef, Renderer2, ɵɵdefineDirective, ɵsetClassMetadata, Directive, Input, TemplateRef, ViewContainerRef, ɵɵNgOnChangesFeature, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, isDevMode, Optional, Inject, ɵɵinject, ɵɵdefineInjectable, Injectable, SkipSelf, RendererFactory2, NgZone, Type, EventEmitter, InjectionToken, ɵɵallocHostVars, ɵɵstyleSanitizer, ɵɵdefaultStyleSanitizer, ɵɵstyleProp, ɵɵdefinePipe, Pipe } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { __decorate, __metadata } from 'tslib';
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
class NzClassListAddDirective {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.classList = [];
    }
    set nzClassListAdd(list) {
        this.classList.forEach(name => {
            this.renderer.removeClass(this.elementRef.nativeElement, name);
        });
        list.forEach(name => {
            this.renderer.addClass(this.elementRef.nativeElement, name);
        });
        this.classList = list;
    }
}
/** @nocollapse */ NzClassListAddDirective.ɵfac = function NzClassListAddDirective_Factory(t) { return new (t || NzClassListAddDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2)); };
/** @nocollapse */ NzClassListAddDirective.ɵdir = ɵɵdefineDirective({ type: NzClassListAddDirective, selectors: [["", "nzClassListAdd", ""]], inputs: { nzClassListAdd: "nzClassListAdd" }, exportAs: ["nzClassListAdd"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzClassListAddDirective, [{
        type: Directive,
        args: [{
                selector: '[nzClassListAdd]',
                exportAs: 'nzClassListAdd'
            }]
    }], function () { return [{ type: ElementRef }, { type: Renderer2 }]; }, { nzClassListAdd: [{
            type: Input
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzStringTemplateOutletDirective {
    constructor(viewContainer, defaultTemplate) {
        this.viewContainer = viewContainer;
        this.defaultTemplate = defaultTemplate;
        // tslint:disable-next-line:no-any
        this.inputTemplate = null;
        this.inputViewRef = null;
        this.defaultViewRef = null;
        // tslint:disable-next-line:no-any
        this.nzStringTemplateOutletContext = null;
    }
    set nzStringTemplateOutlet(value) {
        if (value instanceof TemplateRef) {
            this.isTemplate = true;
            this.inputTemplate = value;
        }
        else {
            this.isTemplate = false;
        }
    }
    recreateView() {
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
    }
    // tslint:disable-next-line:no-any
    getType(value) {
        if (value instanceof TemplateRef) {
            return 'template';
        }
        else {
            return 'string';
        }
    }
    shouldRecreateView(changes) {
        const { nzStringTemplateOutletContext, nzStringTemplateOutlet } = changes;
        let shouldOutletRecreate = false;
        if (nzStringTemplateOutlet) {
            if (nzStringTemplateOutlet.firstChange) {
                shouldOutletRecreate = true;
            }
            else {
                const previousOutletType = this.getType(nzStringTemplateOutlet.previousValue);
                const currentOutletType = this.getType(nzStringTemplateOutlet.currentValue);
                shouldOutletRecreate = !(previousOutletType === 'string' && currentOutletType === 'string');
            }
        }
        const shouldContextRecreate = nzStringTemplateOutletContext && this.hasContextShapeChanged(nzStringTemplateOutletContext);
        return shouldContextRecreate || shouldOutletRecreate;
    }
    hasContextShapeChanged(ctxChange) {
        const prevCtxKeys = Object.keys(ctxChange.previousValue || {});
        const currCtxKeys = Object.keys(ctxChange.currentValue || {});
        if (prevCtxKeys.length === currCtxKeys.length) {
            for (const propName of currCtxKeys) {
                if (prevCtxKeys.indexOf(propName) === -1) {
                    return true;
                }
            }
            return false;
        }
        else {
            return true;
        }
    }
    // tslint:disable-next-line:no-any
    updateExistingContext(ctx) {
        for (const propName of Object.keys(ctx)) {
            // tslint:disable-next-line:no-any
            this.inputViewRef.context[propName] = this.nzStringTemplateOutletContext[propName];
        }
    }
    ngOnChanges(changes) {
        const recreateView = this.shouldRecreateView(changes);
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
    }
}
/** @nocollapse */ NzStringTemplateOutletDirective.ɵfac = function NzStringTemplateOutletDirective_Factory(t) { return new (t || NzStringTemplateOutletDirective)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(TemplateRef)); };
/** @nocollapse */ NzStringTemplateOutletDirective.ɵdir = ɵɵdefineDirective({ type: NzStringTemplateOutletDirective, selectors: [["", "nzStringTemplateOutlet", ""]], inputs: { nzStringTemplateOutletContext: "nzStringTemplateOutletContext", nzStringTemplateOutlet: "nzStringTemplateOutlet" }, exportAs: ["nzStringTemplateOutlet"], features: [ɵɵNgOnChangesFeature()] });
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
class NzAddOnModule {
}
/** @nocollapse */ NzAddOnModule.ɵmod = ɵɵdefineNgModule({ type: NzAddOnModule });
/** @nocollapse */ NzAddOnModule.ɵinj = ɵɵdefineInjector({ factory: function NzAddOnModule_Factory(t) { return new (t || NzAddOnModule)(); }, imports: [[CommonModule]] });
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
class AnimationDuration {
}
AnimationDuration.SLOW = '0.3s'; // Modal
AnimationDuration.BASE = '0.2s';
AnimationDuration.FAST = '0.1s'; // Tooltip
class AnimationCurves {
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

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const collapseMotion = trigger('collapseMotion', [
    state('expanded', style({ height: '*' })),
    state('collapsed', style({ height: 0, overflow: 'hidden' })),
    state('hidden', style({ height: 0, overflow: 'hidden', borderTopWidth: '0' })),
    transition('expanded => collapsed', animate(`150ms ${AnimationCurves.EASE_IN_OUT}`)),
    transition('expanded => hidden', animate(`150ms ${AnimationCurves.EASE_IN_OUT}`)),
    transition('collapsed => expanded', animate(`150ms ${AnimationCurves.EASE_IN_OUT}`)),
    transition('hidden => expanded', animate(`150ms ${AnimationCurves.EASE_IN_OUT}`))
]);
const treeCollapseMotion = trigger('treeCollapseMotion', [
    transition(':leave', [style({ overflow: 'hidden' }), animate(`150ms ${AnimationCurves.EASE_IN_OUT}`, style({ height: 0 }))]),
    transition(':enter', [
        style({ overflow: 'hidden', height: 0 }),
        animate(`150ms ${AnimationCurves.EASE_IN_OUT}`, style({ overflow: 'hidden', height: '*' }))
    ])
]);

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const fadeMotion = trigger('fadeMotion', [
    transition(':enter', [style({ opacity: 0 }), animate(`${AnimationDuration.BASE}`, style({ opacity: 1 }))]),
    transition(':leave', [style({ opacity: 1 }), animate(`${AnimationDuration.BASE}`, style({ opacity: 0 }))])
]);

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const helpMotion = trigger('helpMotion', [
    transition(':enter', [
        style({
            opacity: 0,
            transform: 'translateY(-5px)'
        }),
        animate(`${AnimationDuration.SLOW} ${AnimationCurves.EASE_IN_OUT}`, style({
            opacity: 1,
            transform: 'translateY(0)'
        }))
    ]),
    transition(':leave', [
        style({
            opacity: 1,
            transform: 'translateY(0)'
        }),
        animate(`${AnimationDuration.SLOW} ${AnimationCurves.EASE_IN_OUT}`, style({
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
const moveUpMotion = trigger('moveUpMotion', [
    transition('* => enter', [
        style({
            transformOrigin: '0 0',
            transform: 'translateY(-100%)',
            opacity: 0
        }),
        animate(`${AnimationDuration.BASE}`, style({
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
        animate(`${AnimationDuration.BASE}`, style({
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
const notificationMotion = trigger('notificationMotion', [
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
const ANIMATION_TRANSITION_IN = `${AnimationDuration.BASE} ${AnimationCurves.EASE_OUT_QUINT}`;
const ANIMATION_TRANSITION_OUT = `${AnimationDuration.BASE} ${AnimationCurves.EASE_IN_QUINT}`;
const slideMotion = trigger('slideMotion', [
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
const slideAlertMotion = trigger('slideAlertMotion', [
    transition(':leave', [
        style({ opacity: 1, transform: 'scaleY(1)', transformOrigin: '0% 0%' }),
        animate(`${AnimationDuration.SLOW} ${AnimationCurves.EASE_IN_OUT_CIRC}`, style({
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
const zoomMotion = trigger('zoomMotion', [
    transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.2)' }),
        animate(`${AnimationDuration.BASE} ${AnimationCurves.EASE_OUT_CIRC}`, style({
            opacity: 1,
            transform: 'scale(1)'
        }))
    ]),
    transition(':leave', [
        style({ opacity: 1, transform: 'scale(1)' }),
        animate(`${AnimationDuration.BASE} ${AnimationCurves.EASE_IN_OUT_CIRC}`, style({
            opacity: 0,
            transform: 'scale(0.2)'
        }))
    ])
]);
const zoomBigMotion = trigger('zoomBigMotion', [
    transition('void => active', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate(`${AnimationDuration.BASE} ${AnimationCurves.EASE_OUT_CIRC}`, style({
            opacity: 1,
            transform: 'scale(1)'
        }))
    ]),
    transition('active => void', [
        style({ opacity: 1, transform: 'scale(1)' }),
        animate(`${AnimationDuration.BASE} ${AnimationCurves.EASE_IN_OUT_CIRC}`, style({
            opacity: 0,
            transform: 'scale(0.8)'
        }))
    ])
]);
const zoomBadgeMotion = trigger('zoomBadgeMotion', [
    transition(':enter', [
        style({ opacity: 0, transform: 'scale(0) translate(50%, -50%)' }),
        animate(`${AnimationDuration.SLOW} ${AnimationCurves.EASE_OUT_BACK}`, style({
            opacity: 1,
            transform: 'scale(1) translate(50%, -50%)'
        }))
    ]),
    transition(':leave', [
        style({ opacity: 1, transform: 'scale(1) translate(50%, -50%)' }),
        animate(`${AnimationDuration.SLOW} ${AnimationCurves.EASE_IN_BACK}`, style({
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
const environment = {
    isTestMode: false
};

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const record = {};
const PREFIX = '[NG-ZORRO]:';
function notRecorded(...args) {
    const asRecord = args.reduce((acc, c) => acc + c.toString(), '');
    if (record[asRecord]) {
        return false;
    }
    else {
        record[asRecord] = true;
        return true;
    }
}
function consoleCommonBehavior(consoleFunc, ...args) {
    if (environment.isTestMode || (isDevMode() && notRecorded(...args))) {
        consoleFunc(...args);
    }
}
// Warning should only be printed in dev mode and only once.
const warn = (...args) => consoleCommonBehavior((...arg) => console.warn(PREFIX, ...arg), ...args);
const warnDeprecation = (...args) => {
    if (!environment.isTestMode) {
        const stack = new Error().stack;
        return consoleCommonBehavior((...arg) => console.warn(PREFIX, 'deprecated:', ...arg, stack), ...args);
    }
    else {
        return () => { };
    }
};
// Log should only be printed in dev mode.
const log = (...args) => {
    if (isDevMode()) {
        console.log(PREFIX, ...args);
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
function toNumber(value, fallbackValue = 0) {
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
function valueFunctionProp(prop, ...args) {
    return typeof prop === 'function' ? prop(...args) : prop;
}
function propDecoratorFactory(name, fallback) {
    function propDecorator(target, propName, originalDescriptor) {
        const privatePropName = `$$__${propName}`;
        if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
            warn(`The prop "${privatePropName}" is already exist, it will be overrided by ${name} decorator.`);
        }
        Object.defineProperty(target, privatePropName, {
            configurable: true,
            writable: true
        });
        return {
            get() {
                return originalDescriptor && originalDescriptor.get ? originalDescriptor.get.bind(this)() : this[privatePropName];
            },
            set(value) {
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

const DISABLED_CLASSNAME = 'nz-animate-disabled';
class NzNoAnimationDirective {
    constructor(element, renderer, animationType) {
        this.element = element;
        this.renderer = renderer;
        this.animationType = animationType;
        this.nzNoAnimation = false;
    }
    ngOnChanges() {
        this.updateClass();
    }
    ngAfterViewInit() {
        this.updateClass();
    }
    updateClass() {
        const element = coerceElement(this.element);
        if (!element) {
            return;
        }
        if (this.nzNoAnimation || this.animationType === 'NoopAnimations') {
            this.renderer.addClass(element, DISABLED_CLASSNAME);
        }
        else {
            this.renderer.removeClass(element, DISABLED_CLASSNAME);
        }
    }
}
/** @nocollapse */ NzNoAnimationDirective.ɵfac = function NzNoAnimationDirective_Factory(t) { return new (t || NzNoAnimationDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8)); };
/** @nocollapse */ NzNoAnimationDirective.ɵdir = ɵɵdefineDirective({ type: NzNoAnimationDirective, selectors: [["", "nzNoAnimation", ""]], inputs: { nzNoAnimation: "nzNoAnimation" }, exportAs: ["nzNoAnimation"], features: [ɵɵNgOnChangesFeature()] });
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzNoAnimationDirective.prototype, "nzNoAnimation", void 0);
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
class NzNoAnimationModule {
}
/** @nocollapse */ NzNoAnimationModule.ɵmod = ɵɵdefineNgModule({ type: NzNoAnimationModule });
/** @nocollapse */ NzNoAnimationModule.ɵinj = ɵɵdefineInjector({ factory: function NzNoAnimationModule_Factory(t) { return new (t || NzNoAnimationModule)(); }, imports: [[CommonModule]] });
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
class NzConnectedOverlayDirective {
    constructor(cdkConnectedOverlay) {
        this.cdkConnectedOverlay = cdkConnectedOverlay;
        this.cdkConnectedOverlay.backdropClass = 'nz-overlay-transparent-backdrop';
    }
}
/** @nocollapse */ NzConnectedOverlayDirective.ɵfac = function NzConnectedOverlayDirective_Factory(t) { return new (t || NzConnectedOverlayDirective)(ɵɵdirectiveInject(CdkConnectedOverlay)); };
/** @nocollapse */ NzConnectedOverlayDirective.ɵdir = ɵɵdefineDirective({ type: NzConnectedOverlayDirective, selectors: [["", "cdkConnectedOverlay", "", "nzConnectedOverlay", ""]], exportAs: ["nzConnectedOverlay"] });
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
class NzOverlayModule {
}
/** @nocollapse */ NzOverlayModule.ɵmod = ɵɵdefineNgModule({ type: NzOverlayModule });
/** @nocollapse */ NzOverlayModule.ɵinj = ɵɵdefineInjector({ factory: function NzOverlayModule_Factory(t) { return new (t || NzOverlayModule)(); } });
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
const POSITION_MAP = {
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
const DEFAULT_TOOLTIP_POSITIONS = [POSITION_MAP.top, POSITION_MAP.right, POSITION_MAP.bottom, POSITION_MAP.left];
const DEFAULT_DROPDOWN_POSITIONS = [POSITION_MAP.bottomLeft, POSITION_MAP.bottomRight, POSITION_MAP.topRight, POSITION_MAP.topLeft];
const DEFAULT_SUBMENU_POSITIONS = [POSITION_MAP.rightTop, POSITION_MAP.leftTop];
const DEFAULT_MENTION_TOP_POSITIONS = [
    new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'bottom' }),
    new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'end', overlayY: 'bottom' })
];
const DEFAULT_MENTION_BOTTOM_POSITIONS = [
    POSITION_MAP.bottomLeft,
    new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'end', overlayY: 'top' })
];
function getPlacementName(position) {
    const keyList = ['originX', 'originY', 'overlayX', 'overlayY'];
    for (const placement in POSITION_MAP) {
        // @ts-ignore
        if (keyList.every(key => position.connectionPair[key] === POSITION_MAP[placement][key])) {
            return placement;
        }
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
        const [start, end] = rangeValue;
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
class CandyDate {
    // locale: string; // Custom specified locale ID
    constructor(date) {
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
    calendarStart(options) {
        return new CandyDate(startOfWeek(startOfMonth(this.nativeDate), options));
    }
    // ---------------------------------------------------------------------
    // | Native shortcuts
    // ---------------------------------------------------------------------
    getYear() {
        return this.nativeDate.getFullYear();
    }
    getMonth() {
        return this.nativeDate.getMonth();
    }
    getDay() {
        return this.nativeDate.getDay();
    }
    getTime() {
        return this.nativeDate.getTime();
    }
    getDate() {
        return this.nativeDate.getDate();
    }
    getHours() {
        return this.nativeDate.getHours();
    }
    getMinutes() {
        return this.nativeDate.getMinutes();
    }
    getSeconds() {
        return this.nativeDate.getSeconds();
    }
    getMilliseconds() {
        return this.nativeDate.getMilliseconds();
    }
    // ---------------------------------------------------------------------
    // | New implementing APIs
    // ---------------------------------------------------------------------
    clone() {
        return new CandyDate(new Date(this.nativeDate));
    }
    setHms(hour, minute, second) {
        return new CandyDate(this.nativeDate.setHours(hour, minute, second));
    }
    setYear(year) {
        return new CandyDate(setYear(this.nativeDate, year));
    }
    addYears(amount) {
        return new CandyDate(addYears(this.nativeDate, amount));
    }
    // NOTE: month starts from 0
    // NOTE: Don't use the native API for month manipulation as it not restrict the date when it overflows, eg. (new Date('2018-7-31')).setMonth(1) will be date of 2018-3-03 instead of 2018-2-28
    setMonth(month) {
        return new CandyDate(setMonth(this.nativeDate, month));
    }
    addMonths(amount) {
        return new CandyDate(addMonths(this.nativeDate, amount));
    }
    setDay(day, options) {
        return new CandyDate(setDay(this.nativeDate, day, options));
    }
    setDate(amount) {
        const date = new Date(this.nativeDate);
        date.setDate(amount);
        return new CandyDate(date);
    }
    addDays(amount) {
        return this.setDate(this.getDate() + amount);
    }
    isSame(date, grain = 'day') {
        let fn;
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
    }
    isSameYear(date) {
        return this.isSame(date, 'year');
    }
    isSameMonth(date) {
        return this.isSame(date, 'month');
    }
    isSameDay(date) {
        return this.isSame(date, 'day');
    }
    isSameHour(date) {
        return this.isSame(date, 'hour');
    }
    isSameMinute(date) {
        return this.isSame(date, 'minute');
    }
    isSameSecond(date) {
        return this.isSame(date, 'second');
    }
    compare(date, grain = 'day', isBefore = true) {
        if (date === null) {
            return false;
        }
        let fn;
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
    }
    isBeforeYear(date) {
        return this.compare(date, 'year');
    }
    isBeforeMonth(date) {
        return this.compare(date, 'month');
    }
    isBeforeDay(date) {
        return this.compare(date, 'day');
    }
    isBeforeHour(date) {
        return this.compare(date, 'hour');
    }
    isBeforeMinute(date) {
        return this.compare(date, 'minute');
    }
    isBeforeSecond(date) {
        return this.compare(date, 'second');
    }
    // TODO: isBefore
    isAfterYear(date) {
        return this.compare(date, 'year', false);
    }
    isAfterMonth(date) {
        return this.compare(date, 'month', false);
    }
    isAfterDay(date) {
        return this.compare(date, 'day', false);
    }
    isAfterHour(date) {
        return this.compare(date, 'hour', false);
    }
    isAfterMinute(date) {
        return this.compare(date, 'minute', false);
    }
    isAfterSecond(date) {
        return this.compare(date, 'second', false);
    }
    // Equal to today accurate to "day"
    isToday() {
        return isToday(this.nativeDate);
    }
    isValid() {
        return isValid(this.nativeDate);
    }
    // tslint:disable-next-line: no-any
    toNativeDate(date) {
        return date instanceof CandyDate ? date.nativeDate : date;
    }
}

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const timeUnits = [
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
const availablePrefixes = ['moz', 'ms', 'webkit'];
function requestAnimationFramePolyfill() {
    let lastTime = 0;
    return function (callback) {
        const currTime = new Date().getTime();
        const timeToCall = Math.max(0, 16 - (currTime - lastTime));
        const id = setTimeout(() => {
            callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    };
}
function getRequestAnimationFrame() {
    if (typeof window === 'undefined') {
        return () => 0;
    }
    if (window.requestAnimationFrame) {
        // https://github.com/vuejs/vue/issues/4465
        return window.requestAnimationFrame.bind(window);
    }
    const prefix = availablePrefixes.filter(key => `${key}RequestAnimationFrame` in window)[0];
    return prefix ? window[`${prefix}RequestAnimationFrame`] : requestAnimationFramePolyfill();
}
function cancelRequestAnimationFrame(id) {
    if (typeof window === 'undefined') {
        return null;
    }
    if (window.cancelAnimationFrame) {
        return window.cancelAnimationFrame(id);
    }
    const prefix = availablePrefixes.filter(key => `${key}CancelAnimationFrame` in window || `${key}CancelRequestAnimationFrame` in window)[0];
    return prefix
        ? (window[`${prefix}CancelAnimationFrame`] || window[`${prefix}CancelRequestAnimationFrame`])
            // @ts-ignore
            .call(this, id)
        : clearTimeout(id);
}
const reqAnimFrame = getRequestAnimationFrame();

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
    const cc = c - b;
    let tt = t / (d / 2);
    if (tt < 1) {
        return (cc / 2) * tt * tt * tt + b;
    }
    else {
        return (cc / 2) * ((tt -= 2) * tt * tt + 2) + b;
    }
}
class NzScrollService {
    /* tslint:disable-next-line:no-any */
    constructor(doc) {
        this.doc = doc;
    }
    /** Set the position of the scroll bar of `el`. */
    setScrollTop(el, topValue = 0) {
        if (el === window) {
            this.doc.body.scrollTop = topValue;
            this.doc.documentElement.scrollTop = topValue;
        }
        else {
            el.scrollTop = topValue;
        }
    }
    /** Get position of `el` against window. */
    getOffset(el) {
        const ret = {
            top: 0,
            left: 0
        };
        if (!el || !el.getClientRects().length) {
            return ret;
        }
        const rect = el.getBoundingClientRect();
        if (rect.width || rect.height) {
            const doc = el.ownerDocument.documentElement;
            ret.top = rect.top - doc.clientTop;
            ret.left = rect.left - doc.clientLeft;
        }
        else {
            ret.top = rect.top;
            ret.left = rect.left;
        }
        return ret;
    }
    /** Get the position of the scoll bar of `el`. */
    // TODO: remove '| Window' as the fallback already happens here
    getScroll(el, top = true) {
        const target = el ? el : window;
        const prop = top ? 'pageYOffset' : 'pageXOffset';
        const method = top ? 'scrollTop' : 'scrollLeft';
        const isWindow = target === window;
        // @ts-ignore
        let ret = isWindow ? target[prop] : target[method];
        if (isWindow && typeof ret !== 'number') {
            ret = this.doc.documentElement[method];
        }
        return ret;
    }
    /**
     * Scroll `el` to some position with animation.
     *
     * @param containerEl container, `window` by default
     * @param targetTopValue Scroll to `top`, 0 by default
     * @param easing Transition curve, `easeInOutCubic` by default
     * @param callback callback invoked when transition is done
     */
    scrollTo(containerEl, targetTopValue = 0, easing, callback) {
        const target = containerEl ? containerEl : window;
        const scrollTop = this.getScroll(target);
        const startTime = Date.now();
        const frameFunc = () => {
            const timestamp = Date.now();
            const time = timestamp - startTime;
            this.setScrollTop(target, (easing || easeInOutCubic)(time, scrollTop, targetTopValue, 450));
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
    }
}
/** @nocollapse */ NzScrollService.ɵfac = function NzScrollService_Factory(t) { return new (t || NzScrollService)(ɵɵinject(DOCUMENT)); };
/** @nocollapse */ NzScrollService.ɵprov = ɵɵdefineInjectable({ token: NzScrollService, factory: NzScrollService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzScrollService, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();
function SCROLL_SERVICE_PROVIDER_FACTORY(doc, scrollService) {
    return scrollService || new NzScrollService(doc);
}
const SCROLL_SERVICE_PROVIDER = {
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

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzUpdateHostClassService {
    constructor(rendererFactory2) {
        this.classMap = {};
        this.renderer = rendererFactory2.createRenderer(null, null);
    }
    updateHostClass(el, classMap) {
        this.removeClass(el, this.classMap, this.renderer);
        this.classMap = Object.assign({}, classMap);
        this.addClass(el, this.classMap, this.renderer);
    }
    removeClass(el, classMap, renderer) {
        for (const i in classMap) {
            if (classMap.hasOwnProperty(i)) {
                renderer.removeClass(el, i);
            }
        }
    }
    addClass(el, classMap, renderer) {
        for (const i in classMap) {
            if (classMap.hasOwnProperty(i) && classMap[i]) {
                renderer.addClass(el, i);
            }
        }
    }
}
/** @nocollapse */ NzUpdateHostClassService.ɵfac = function NzUpdateHostClassService_Factory(t) { return new (t || NzUpdateHostClassService)(ɵɵinject(RendererFactory2)); };
/** @nocollapse */ NzUpdateHostClassService.ɵprov = ɵɵdefineInjectable({ token: NzUpdateHostClassService, factory: NzUpdateHostClassService.ɵfac });
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
class NzCopyToClipboardServiceModule {
}
/** @nocollapse */ NzCopyToClipboardServiceModule.ɵmod = ɵɵdefineNgModule({ type: NzCopyToClipboardServiceModule });
/** @nocollapse */ NzCopyToClipboardServiceModule.ɵinj = ɵɵdefineInjector({ factory: function NzCopyToClipboardServiceModule_Factory(t) { return new (t || NzCopyToClipboardServiceModule)(); } });
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
class NzCopyToClipboardService {
    // tslint:disable-next-line:no-any
    constructor(document) {
        this.document = document;
    }
    copy(text) {
        return new Promise((resolve, reject) => {
            let copyTextArea = null;
            try {
                // tslint:disable-next-line no-any
                copyTextArea = this.document.createElement('textarea');
                copyTextArea.style.all = 'unset';
                copyTextArea.style.position = 'fixed';
                copyTextArea.style.top = '0';
                copyTextArea.style.clip = 'rect(0, 0, 0, 0)';
                copyTextArea.style.whiteSpace = 'pre';
                copyTextArea.style.webkitUserSelect = 'text';
                copyTextArea.style.MozUserSelect = 'text';
                copyTextArea.style.msUserSelect = 'text';
                copyTextArea.style.userSelect = 'text';
                this.document.body.appendChild(copyTextArea);
                copyTextArea.value = text;
                copyTextArea.select();
                const successful = this.document.execCommand('copy');
                if (!successful) {
                    reject(text);
                }
                resolve(text);
            }
            finally {
                if (copyTextArea) {
                    this.document.body.removeChild(copyTextArea);
                }
            }
        });
    }
}
/** @nocollapse */ NzCopyToClipboardService.ɵfac = function NzCopyToClipboardService_Factory(t) { return new (t || NzCopyToClipboardService)(ɵɵinject(DOCUMENT)); };
/** @nocollapse */ NzCopyToClipboardService.ɵprov = ɵɵdefineInjectable({ token: NzCopyToClipboardService, factory: NzCopyToClipboardService.ɵfac, providedIn: NzCopyToClipboardServiceModule });
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
class NzDomEventService {
    constructor(ngZone, rendererFactory2) {
        this.ngZone = ngZone;
        this.rendererFactory2 = rendererFactory2;
        this.resizeSource = new Subject();
        this.domEventListeners = new Map();
        this.renderer = this.rendererFactory2.createRenderer(null, null);
    }
    registerResizeListener() {
        if (!this.domEventListeners.has('resize')) {
            this.domEventListeners.set('resize', {
                handler: () => {
                    this.resizeSource.next();
                },
                countOfListeners: 0
            });
        }
        const listener = this.domEventListeners.get('resize');
        this.tryToStartListener(listener, 'resize');
        return this.resizeSource.pipe(auditTime(16));
    }
    unregisterResizeListener() {
        if (!this.domEventListeners.has('resize')) {
            return;
        }
        const listener = this.domEventListeners.get('resize');
        this.tryToStopListener(listener);
    }
    tryToStartListener(l, name) {
        l.countOfListeners += 1;
        this.ngZone.runOutsideAngular(() => {
            if (l.countOfListeners === 1) {
                l.unsubscribe = this.renderer.listen('window', name, l.handler);
            }
        });
    }
    tryToStopListener(l) {
        l.countOfListeners -= 1;
        if (l.countOfListeners === 0) {
            l.unsubscribe();
            l.unsubscribe = undefined;
        }
    }
}
/** @nocollapse */ NzDomEventService.ɵfac = function NzDomEventService_Factory(t) { return new (t || NzDomEventService)(ɵɵinject(NgZone), ɵɵinject(RendererFactory2)); };
/** @nocollapse */ NzDomEventService.ɵprov = ɵɵdefineInjectable({ token: NzDomEventService, factory: NzDomEventService.ɵfac, providedIn: 'root' });
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
const testSingleRegistry = new Map();
/**
 * Some singletons should have life cycle that is same to Angular's. This service make sure that
 * those singletons get destroyed in HMR.
 */
class NzSingletonService {
    constructor() {
        /**
         * This registry is used to register singleton in dev mode.
         * So that singletons get destroyed when hot module reload happens.
         *
         * This works in prod mode too but with no specific effect.
         */
        this._singletonRegistry = new Map();
    }
    get singletonRegistry() {
        return environment.isTestMode ? testSingleRegistry : this._singletonRegistry;
    }
    registerSingletonWithKey(key, target) {
        const alreadyHave = this.singletonRegistry.has(key);
        const item = alreadyHave ? this.singletonRegistry.get(key) : this.withNewTarget(target);
        if (!alreadyHave) {
            this.singletonRegistry.set(key, item);
        }
    }
    getSingletonWithKey(key) {
        return this.singletonRegistry.has(key) ? this.singletonRegistry.get(key).target : null;
    }
    withNewTarget(target) {
        return {
            target
        };
    }
}
/** @nocollapse */ NzSingletonService.ɵfac = function NzSingletonService_Factory(t) { return new (t || NzSingletonService)(); };
/** @nocollapse */ NzSingletonService.ɵprov = ɵɵdefineInjectable({ token: NzSingletonService, factory: NzSingletonService.ɵfac, providedIn: 'root' });
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
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) {
        return false;
    }
    const bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
    // tslint:disable-next-line:prefer-for-of
    for (let idx = 0; idx < keysA.length; idx++) {
        const key = keysA[idx];
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
    const nodes = element.childNodes;
    for (let i = 0; i < nodes.length; i++) {
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
    const rect = elem.getBoundingClientRect();
    const win = elem.ownerDocument.defaultView;
    return {
        top: rect.top + win.pageYOffset,
        left: rect.left + win.pageXOffset
    };
}
function findFirstNotEmptyNode(element) {
    const children = element.childNodes;
    for (let i = 0; i < children.length; i++) {
        const node = children.item(i);
        if (filterNotEmptyNode(node)) {
            return node;
        }
    }
    return null;
}
function findLastNotEmptyNode(element) {
    const children = element.childNodes;
    for (let i = children.length - 1; i >= 0; i--) {
        const node = children.item(i);
        if (filterNotEmptyNode(node)) {
            return node;
        }
    }
    return null;
}
function reverseChildNodes(parent) {
    const children = parent.childNodes;
    let length = children.length;
    if (length) {
        const nodes = [];
        children.forEach((node, i) => (nodes[i] = node));
        while (length--) {
            parent.appendChild(nodes[length]);
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
    const e = getEventPosition(event);
    return {
        x: e.pageX,
        y: e.pageY
    };
}
/**
 * This module provide a global dragging service to other components.
 */
class NzDragService {
    constructor(rendererFactory2) {
        this.draggingThreshold = 5;
        this.currentDraggingSequence = null;
        this.currentStartingPoint = null;
        this.handleRegistry = new Set();
        this.renderer = rendererFactory2.createRenderer(null, null);
    }
    requestDraggingSequence(event) {
        if (!this.handleRegistry.size) {
            this.registerDraggingHandler(isTouchEvent(event));
        }
        // Complete last dragging sequence if a new target is dragged.
        if (this.currentDraggingSequence) {
            this.currentDraggingSequence.complete();
        }
        this.currentStartingPoint = getPagePosition(event);
        this.currentDraggingSequence = new Subject();
        return this.currentDraggingSequence.pipe(map((e) => {
            return {
                x: e.pageX - this.currentStartingPoint.x,
                y: e.pageY - this.currentStartingPoint.y
            };
        }), filter((e) => Math.abs(e.x) > this.draggingThreshold || Math.abs(e.y) > this.draggingThreshold), finalize(() => this.teardownDraggingSequence()));
    }
    registerDraggingHandler(isTouch) {
        if (isTouch) {
            this.handleRegistry.add({
                teardown: this.renderer.listen('document', 'touchmove', (e) => {
                    if (this.currentDraggingSequence) {
                        this.currentDraggingSequence.next(e.touches[0] || e.changedTouches[0]);
                    }
                })
            });
            this.handleRegistry.add({
                teardown: this.renderer.listen('document', 'touchend', () => {
                    if (this.currentDraggingSequence) {
                        this.currentDraggingSequence.complete();
                    }
                })
            });
        }
        else {
            this.handleRegistry.add({
                teardown: this.renderer.listen('document', 'mousemove', e => {
                    if (this.currentDraggingSequence) {
                        this.currentDraggingSequence.next(e);
                    }
                })
            });
            this.handleRegistry.add({
                teardown: this.renderer.listen('document', 'mouseup', () => {
                    if (this.currentDraggingSequence) {
                        this.currentDraggingSequence.complete();
                    }
                })
            });
        }
    }
    teardownDraggingSequence() {
        this.currentDraggingSequence = null;
    }
}
/** @nocollapse */ NzDragService.ɵfac = function NzDragService_Factory(t) { return new (t || NzDragService)(ɵɵinject(RendererFactory2)); };
/** @nocollapse */ NzDragService.ɵprov = ɵɵdefineInjectable({ token: NzDragService, factory: NzDragService.ɵfac, providedIn: 'root' });
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
function createMouseEvent(type, x = 0, y = 0, button = 0) {
    const event = document.createEvent('MouseEvent');
    event.initMouseEvent(type, true /* canBubble */, false /* cancelable */, window /* view */, 0 /* detail */, x /* screenX */, y /* screenY */, x /* clientX */, y /* clientY */, false /* ctrlKey */, false /* altKey */, false /* shiftKey */, false /* metaKey */, button /* button */, null /* relatedTarget */);
    // `initMouseEvent` doesn't allow us to pass the `buttons` and
    // defaults it to 0 which looks like a fake event.
    Object.defineProperty(event, 'buttons', { get: () => 1 });
    return event;
}
/** Creates a browser TouchEvent with the specified pointer coordinates. */
function createTouchEvent(type, pageX = 0, pageY = 0) {
    // In favor of creating events that work for most of the browsers, the event is created
    // as a basic UI Event. The necessary details for the event will be set manually.
    const event = new UIEvent(type, { detail: 0, view: window });
    const touchDetails = { pageX, pageY, clientX: pageX, clientY: pageY };
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
    const event = document.createEvent('KeyboardEvent');
    const originalPreventDefault = event.preventDefault;
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
        keyCode: { get: () => keyCode },
        key: { get: () => key },
        target: { get: () => target }
    });
    // IE won't set `defaultPrevented` on synthetic events so we need to do it manually.
    // tslint:disable-next-line:typedef
    event.preventDefault = function () {
        Object.defineProperty(event, 'defaultPrevented', { get: () => true, configurable: true });
        // tslint:disable-next-line:no-invalid-this
        return originalPreventDefault.apply(this, arguments);
    };
    return event;
}
/** Creates a fake event object with any desired event type. */
function createFakeEvent(type, canBubble = true, cancelable = true) {
    const event = document.createEvent('Event');
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
function dispatchMouseEvent(node, type, x = 0, y = 0, event = createMouseEvent(type, x, y)) {
    return dispatchEvent(node, event);
}
/** Shorthand to dispatch a touch event on the specified coordinates. */
function dispatchTouchEvent(node, type, x = 0, y = 0) {
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
    const escapedMessage = e.message.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
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
class FakeViewportRuler {
    getViewportRect() {
        return {
            left: 0,
            top: 0,
            width: 1014,
            height: 686,
            bottom: 686,
            right: 1014
        };
    }
    getViewportSize() {
        return { width: 1014, height: 686 };
    }
    getViewportScrollPosition() {
        return { top: 0, left: 0 };
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Mock synchronous NgZone implementation that can be used
 * to flush out `onStable` subscriptions in tests.
 *
 * via: https://github.com/angular/angular/blob/master/packages/core/testing/src/ng_zone_mock.ts
 * @docs-private
 */
class MockNgZone extends NgZone {
    constructor() {
        super({ enableLongStackTrace: false });
        this.onStable = new EventEmitter(false);
    }
    run(fn) {
        return fn();
    }
    runOutsideAngular(fn) {
        return fn();
    }
    simulateZoneExit() {
        this.onStable.emit(null);
    }
}
/** @nocollapse */ MockNgZone.ɵfac = function MockNgZone_Factory(t) { return new (t || MockNgZone)(); };
/** @nocollapse */ MockNgZone.ɵprov = ɵɵdefineInjectable({ token: MockNgZone, factory: MockNgZone.ɵfac });
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
class NzTreeNode {
    constructor(option, parent = null, service = null) {
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
            option.children.forEach(nodeOptions => {
                const s = this.treeService;
                if (s && !s.isCheckStrictly && option.checked && !option.disabled && !nodeOptions.disabled && !nodeOptions.disableCheckbox) {
                    nodeOptions.checked = option.checked;
                }
                this._children.push(new NzTreeNode(nodeOptions, this));
            });
        }
    }
    get treeService() {
        return this.service || (this.parentNode && this.parentNode.treeService);
    }
    /**
     * auto generate
     * get
     * set
     */
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
        this.update();
    }
    get icon() {
        return this._icon;
    }
    set icon(value) {
        this._icon = value;
        this.update();
    }
    get children() {
        return this._children;
    }
    set children(value) {
        this._children = value;
        this.update();
    }
    get isLeaf() {
        return this._isLeaf;
    }
    set isLeaf(value) {
        this._isLeaf = value;
        this.update();
    }
    get isChecked() {
        return this._isChecked;
    }
    set isChecked(value) {
        this._isChecked = value;
        this._isAllChecked = value;
        this.origin.checked = value;
        this.afterValueChange('isChecked');
    }
    get isAllChecked() {
        return this._isAllChecked;
    }
    /**
     * @deprecated Maybe removed in next major version, use `isChecked` instead.
     */
    set isAllChecked(value) {
        warnDeprecation(`'isAllChecked' is going to be removed in 9.0.0. Please use 'isChecked' instead.`);
        this._isAllChecked = value;
    }
    get isHalfChecked() {
        return this._isHalfChecked;
    }
    set isHalfChecked(value) {
        this._isHalfChecked = value;
        this.afterValueChange('isHalfChecked');
    }
    get isSelectable() {
        return this._isSelectable;
    }
    set isSelectable(value) {
        this._isSelectable = value;
        this.update();
    }
    get isDisabled() {
        return this._isDisabled;
    }
    set isDisabled(value) {
        this._isDisabled = value;
        this.update();
    }
    get isDisableCheckbox() {
        return this._isDisableCheckbox;
    }
    set isDisableCheckbox(value) {
        this._isDisableCheckbox = value;
        this.update();
    }
    get isExpanded() {
        return this._isExpanded;
    }
    set isExpanded(value) {
        this._isExpanded = value;
        this.origin.expanded = value;
        this.afterValueChange('isExpanded');
    }
    get isSelected() {
        return this._isSelected;
    }
    set isSelected(value) {
        this._isSelected = value;
        this.origin.selected = value;
        this.afterValueChange('isSelected');
    }
    get isLoading() {
        return this._isLoading;
    }
    set isLoading(value) {
        this._isLoading = value;
        this.update();
    }
    setSyncChecked(checked = false, halfChecked = false) {
        this.setChecked(checked, halfChecked);
        if (this.treeService && !this.treeService.isCheckStrictly) {
            this.treeService.conduct(this);
        }
    }
    /**
     * @deprecated Maybe removed in next major version, use `isChecked` instead.
     */
    setChecked(checked = false, halfChecked = false) {
        warnDeprecation(`'setChecked' is going to be removed in 9.0.0. Please use 'isChecked' instead.`);
        this.origin.checked = checked;
        this.isChecked = checked;
        this.isAllChecked = checked;
        this.isHalfChecked = halfChecked;
    }
    /**
     * @deprecated Maybe removed in next major version, use `isExpanded` instead.
     */
    setExpanded(value) {
        warnDeprecation(`'setExpanded' is going to be removed in 9.0.0. Please use 'isExpanded' instead.`);
        this.isExpanded = value;
    }
    /**
     * @deprecated Maybe removed in next major version, use `isSelected` instead.
     */
    setSelected(value) {
        warnDeprecation(`'setSelected' is going to be removed in 9.0.0. Please use 'isExpanded' isSelected.`);
        if (this.isDisabled) {
            return;
        }
        this.isSelected = value;
    }
    getParentNode() {
        return this.parentNode;
    }
    getChildren() {
        return this.children;
    }
    /**
     * Support appending child nodes by position. Leaf node cannot be appended.
     */
    // tslint:disable-next-line:no-any
    addChildren(children, childPos = -1) {
        if (!this.isLeaf) {
            children.forEach(node => {
                const refreshLevel = (n) => {
                    n.getChildren().forEach(c => {
                        c.level = c.getParentNode().level + 1;
                        // flush origin
                        c.origin.level = c.level;
                        refreshLevel(c);
                    });
                };
                let child = node;
                if (child instanceof NzTreeNode) {
                    child.parentNode = this;
                }
                else {
                    child = new NzTreeNode(node, this);
                }
                child.level = this.level + 1;
                child.origin.level = child.level;
                refreshLevel(child);
                try {
                    childPos === -1 ? this.children.push(child) : this.children.splice(childPos, 0, child);
                    // flush origin
                }
                catch (e) { }
            });
            this.origin.children = this.getChildren().map(v => v.origin);
            // remove loading state
            this.isLoading = false;
        }
    }
    clearChildren() {
        // refresh checked state
        this.afterValueChange('clearChildren');
        this.children = [];
        this.origin.children = [];
    }
    remove() {
        const parentNode = this.getParentNode();
        if (parentNode) {
            parentNode.children = parentNode.getChildren().filter(v => v.key !== this.key);
            parentNode.origin.children = parentNode.origin.children.filter(v => v.key !== this.key);
            this.afterValueChange('remove');
        }
    }
    afterValueChange(key) {
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
    }
    update() {
        if (this.component) {
            this.component.setClassMap();
            this.component.markForCheck();
        }
    }
}

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function toArray(value) {
    let ret;
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
    const len = array1.length;
    for (let i = 0; i < len; i++) {
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
    const prefixArray = Array.isArray(prefix) ? prefix : [prefix];
    let prefixToken = prefixArray.join('').replace(/(\$|\^)/g, '\\$1');
    if (prefixArray.length > 1) {
        prefixToken = `[${prefixToken}]`;
    }
    return new RegExp(`(\\s|^)(${prefixToken})[^\\s]*`, 'g');
}
function getMentions(value, prefix = '@') {
    if (typeof value !== 'string') {
        return [];
    }
    const regex = getRegExp(prefix);
    const mentions = value.match(regex);
    return mentions !== null ? mentions.map(e => e.trim()) : [];
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
    const joined = `${getRepeatedElement(length, element)}${toPad}`;
    return joined.slice(joined.length - length, joined.length);
}
function padEnd(toPad, length, element) {
    const joined = `${toPad}${getRepeatedElement(length, element)}`;
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
    const numStr = num.toString();
    const dotIndex = numStr.indexOf('.');
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
    const nodeAsAny = node; // tslint:disable-line:no-any
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
const properties = [
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
const isBrowser = typeof window !== 'undefined';
// tslint:disable-next-line:no-any
const isFirefox = isBrowser && window.mozInnerScreenX != null;
const _parseInt = (str) => parseInt(str, 10);
function getCaretCoordinates(element, position, options) {
    if (!isBrowser) {
        throw new Error('textarea-caret-position#getCaretCoordinates should only be called in a browser');
    }
    const debug = (options && options.debug) || false;
    if (debug) {
        const el = document.querySelector('#input-textarea-caret-position-mirror-div');
        if (el) {
            el.parentNode.removeChild(el);
        }
    }
    // The mirror div will replicate the textarea's style
    const div = document.createElement('div');
    div.id = 'input-textarea-caret-position-mirror-div';
    document.body.appendChild(div);
    const style = div.style;
    // tslint:disable-next-line:no-any
    const computed = window.getComputedStyle ? window.getComputedStyle(element) : element.currentStyle; // currentStyle for IE < 9
    const isInput = element.nodeName === 'INPUT';
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
    properties.forEach((prop) => {
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
    const span = document.createElement('span');
    // Wrapping must be replicated *exactly*, including when a long word gets
    // onto the next line, with whitespace at the end of the line before (#7).
    // The  *only* reliable way to do that is to copy the *entire* rest of the
    // textarea's content into the <span> created at the caret position.
    // For inputs, just '.' would be enough, but no need to bother.
    span.textContent = element.value.substring(position) || '.'; // || because a completely empty faux span doesn't render at all
    div.appendChild(span);
    const coordinates = {
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
    const fontSize = getComputedStyle(element).getPropertyValue('font-size');
    const rect = document.querySelector('#DEBUG') || document.createElement('div');
    document.body.appendChild(rect);
    rect.id = 'DEBUG';
    rect.style.position = 'absolute';
    rect.style.backgroundColor = 'red';
    rect.style.height = fontSize;
    rect.style.width = '1px';
    rect.style.top = `${element.getBoundingClientRect().top - element.scrollTop + window.pageYOffset + coordinates.top}px`;
    rect.style.left = `${element.getBoundingClientRect().left - element.scrollLeft + window.pageXOffset + coordinates.left}px`;
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
        const styleNameList = Array.isArray(styleName) ? styleName : [styleName];
        const { documentElement } = window.document;
        return styleNameList.some(name => name in documentElement.style);
    }
    return false;
}
function getStyleAsText(styles) {
    if (!styles) {
        return '';
    }
    return Object.keys(styles)
        .map(key => {
        const val = styles[key];
        return `${key}:${typeof val === 'string' ? val : val + 'px'}`;
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
const ELEMENT_NODE = 1;
const TEXT_NODE = 3;
const COMMENT_NODE = 8;
let ellipsisContainer;
const wrapperStyle = {
    padding: '0',
    margin: '0',
    display: 'inline',
    lineHeight: 'inherit'
};
function pxToNumber(value) {
    if (!value) {
        return 0;
    }
    const match = value.match(/^\d*(\.\d*)?/);
    return match ? Number(match[0]) : 0;
}
function styleToString(style) {
    // There are some different behavior between Firefox & Chrome.
    // We have to handle this ourself.
    const styleNames = Array.prototype.slice.apply(style);
    return styleNames.map(name => `${name}: ${style.getPropertyValue(name)};`).join('');
}
function mergeChildren(children) {
    const childList = [];
    children.forEach((child) => {
        const prevChild = childList[childList.length - 1];
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
    const originStyle = window.getComputedStyle(originEle);
    const originCSS = styleToString(originStyle);
    const lineHeight = pxToNumber(originStyle.lineHeight);
    const maxHeight = lineHeight * (rows + 1) + pxToNumber(originStyle.paddingTop) + pxToNumber(originStyle.paddingBottom);
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
    const contentList = mergeChildren(contentNodes);
    const container = document.createElement('div');
    const contentContainer = document.createElement('span');
    const fixedContainer = document.createElement('span');
    // Add styles in container
    Object.assign(container.style, wrapperStyle);
    Object.assign(contentContainer.style, wrapperStyle);
    Object.assign(fixedContainer.style, wrapperStyle);
    contentList.forEach(n => {
        contentContainer.appendChild(n);
    });
    fixedContent.forEach(node => {
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
        const text = ellipsisContainer.innerHTML;
        ellipsisContainer.removeChild(container);
        return { contentNodes, text, ellipsis: false };
    }
    // We should clone the childNode since they're controlled by React and we can't reuse it without warning
    const childNodes = Array.prototype.slice
        .apply(ellipsisContainer.childNodes[0].childNodes[0].cloneNode(true).childNodes)
        .filter(({ nodeType }) => nodeType !== COMMENT_NODE);
    const fixedNodes = Array.prototype.slice.apply(ellipsisContainer.childNodes[0].childNodes[1].cloneNode(true).childNodes);
    ellipsisContainer.removeChild(container);
    // ========================= Find match ellipsis content =========================
    ellipsisContainer.innerHTML = '';
    // Create origin content holder
    const ellipsisContentHolder = document.createElement('span');
    ellipsisContainer.appendChild(ellipsisContentHolder);
    const ellipsisTextNode = document.createTextNode(ellipsisStr);
    ellipsisContentHolder.appendChild(ellipsisTextNode);
    fixedNodes.forEach(childNode => {
        ellipsisContainer.appendChild(childNode);
    });
    // Append before fixed nodes
    function appendChildNode(node) {
        ellipsisContentHolder.insertBefore(node, ellipsisTextNode);
    }
    // Get maximum text
    function measureText(textNode, fullText, startLoc = 0, endLoc = fullText.length, lastSuccessLoc = 0) {
        const midLoc = Math.floor((startLoc + endLoc) / 2);
        const currentText = fullText.slice(0, midLoc);
        textNode.textContent = currentText;
        if (startLoc >= endLoc - 1) {
            // Loop when step is small
            for (let step = endLoc; step >= startLoc; step -= 1) {
                const currentStepText = fullText.slice(0, step);
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
        const type = childNode.nodeType;
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
            const fullText = childNode.textContent || '';
            const textNode = document.createTextNode(fullText);
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
    const ellipsisNodes = [];
    childNodes.some((childNode, index) => {
        const { finished, node } = measureNode(childNode, index);
        if (node) {
            ellipsisNodes.push(node);
        }
        return finished;
    });
    const result = {
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
let scrollbarVerticalSize;
let scrollbarHorizontalSize;
// Measure scrollbar width for padding body during modal show/hide
const scrollbarMeasure = {
    position: 'absolute',
    top: '-9999px',
    width: '50px',
    height: '50px'
};
function measureScrollbar(direction = 'vertical', prefix = 'ant') {
    if (typeof document === 'undefined' || typeof window === 'undefined') {
        return 0;
    }
    const isVertical = direction === 'vertical';
    if (isVertical && scrollbarVerticalSize) {
        return scrollbarVerticalSize;
    }
    else if (!isVertical && scrollbarHorizontalSize) {
        return scrollbarHorizontalSize;
    }
    const scrollDiv = document.createElement('div');
    Object.keys(scrollbarMeasure).forEach(scrollProp => {
        // @ts-ignore
        scrollDiv.style[scrollProp] = scrollbarMeasure[scrollProp];
    });
    // apply hide scrollbar className ahead
    scrollDiv.className = `${prefix}-hide-scrollbar scroll-div-append-to-body`;
    // Append related overflow style
    if (isVertical) {
        scrollDiv.style.overflowY = 'scroll';
    }
    else {
        scrollDiv.style.overflowX = 'scroll';
    }
    document.body.appendChild(scrollDiv);
    let size = 0;
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
    const timer = new Subject();
    Promise.resolve().then(() => timer.next());
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
    const { isDisabled, isDisableCheckbox } = node;
    return !!(isDisabled || isDisableCheckbox);
}
// tslint:disable-next-line:no-any
function isInArray(needle, haystack) {
    return haystack.length > 0 && haystack.indexOf(needle) > -1;
}

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTreeBaseService {
    constructor() {
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
    eventTriggerChanged() {
        return this.triggerEventChange$.asObservable();
    }
    /**
     * reset tree nodes will clear default node list
     */
    initTree(nzNodes) {
        this.rootNodes = nzNodes;
        this.expandedNodeList = [];
        this.selectedNodeList = [];
        this.halfCheckedNodeList = [];
        this.checkedNodeList = [];
        this.matchedNodeList = [];
        // refresh node checked state
        setTimeout(() => {
            this.refreshCheckState(this.isCheckStrictly);
        });
    }
    getSelectedNode() {
        return this.selectedNode;
    }
    /**
     * get some list
     */
    getSelectedNodeList() {
        return this.conductNodeState('select');
    }
    /**
     * return checked nodes
     */
    getCheckedNodeList() {
        return this.conductNodeState('check');
    }
    getHalfCheckedNodeList() {
        return this.conductNodeState('halfCheck');
    }
    /**
     * return expanded nodes
     */
    getExpandedNodeList() {
        return this.conductNodeState('expand');
    }
    /**
     * return search matched nodes
     */
    getMatchedNodeList() {
        return this.conductNodeState('match');
    }
    // tslint:disable-next-line:no-any
    isArrayOfNzTreeNode(value) {
        return value.every(item => item instanceof NzTreeNode);
    }
    /**
     * reset selectedNodeList
     */
    calcSelectedKeys(selectedKeys, nzNodes, isMulti = false) {
        const calc = (nodes) => {
            return nodes.every(node => {
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
    }
    /**
     * reset expandedNodeList
     */
    calcExpandedKeys(expandedKeys, nzNodes) {
        this.expandedNodeList = [];
        const calc = (nodes) => {
            nodes.forEach(node => {
                node.isExpanded = isInArray(node.key, expandedKeys);
                if (node.children.length > 0) {
                    calc(node.children);
                }
            });
        };
        calc(nzNodes);
    }
    /**
     * reset checkedNodeList
     */
    calcCheckedKeys(checkedKeys, nzNodes, isCheckStrictly = false) {
        this.checkedNodeList = [];
        this.halfCheckedNodeList = [];
        const calc = (nodes) => {
            nodes.forEach(node => {
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
    }
    /**
     * set drag node
     */
    setSelectedNode(node) {
        this.selectedNode = node;
    }
    /**
     * set node selected status
     */
    setNodeActive(node) {
        if (!this.isMultiple && node.isSelected) {
            this.selectedNodeList.forEach(n => {
                if (node.key !== n.key) {
                    // reset other nodes
                    n.isSelected = false;
                }
            });
            // single mode: remove pre node
            this.selectedNodeList = [];
        }
        this.setSelectedNodeList(node, this.isMultiple);
    }
    /**
     * add or remove node to selectedNodeList
     */
    setSelectedNodeList(node, isMultiple = false) {
        const index = this.selectedNodeList.findIndex(n => node.key === n.key);
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
            this.selectedNodeList = this.selectedNodeList.filter(n => n.key !== node.key);
        }
    }
    /**
     * merge checked nodes
     */
    setHalfCheckedNodeList(node) {
        const index = this.halfCheckedNodeList.findIndex(n => node.key === n.key);
        if (node.isHalfChecked && index === -1) {
            this.halfCheckedNodeList.push(node);
        }
        else if (!node.isHalfChecked && index > -1) {
            this.halfCheckedNodeList = this.halfCheckedNodeList.filter(n => node.key !== n.key);
        }
    }
    setCheckedNodeList(node) {
        const index = this.checkedNodeList.findIndex(n => node.key === n.key);
        if (node.isChecked && index === -1) {
            this.checkedNodeList.push(node);
        }
        else if (!node.isChecked && index > -1) {
            this.checkedNodeList = this.checkedNodeList.filter(n => node.key !== n.key);
        }
    }
    /**
     * conduct checked/selected/expanded keys
     */
    conductNodeState(type = 'check') {
        let resultNodesList = [];
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
                const isIgnore = (node) => {
                    const parentNode = node.getParentNode();
                    if (parentNode) {
                        if (this.checkedNodeList.findIndex(n => n.key === parentNode.key) > -1) {
                            return true;
                        }
                        else {
                            return isIgnore(parentNode);
                        }
                    }
                    return false;
                };
                // merge checked
                if (!this.isCheckStrictly) {
                    resultNodesList = this.checkedNodeList.filter(n => !isIgnore(n));
                }
                break;
            case 'halfCheck':
                if (!this.isCheckStrictly) {
                    resultNodesList = this.halfCheckedNodeList;
                }
                break;
        }
        return resultNodesList;
    }
    /**
     * set expanded nodes
     */
    setExpandedNodeList(node) {
        if (node.isLeaf) {
            return;
        }
        const index = this.expandedNodeList.findIndex(n => node.key === n.key);
        if (node.isExpanded && index === -1) {
            this.expandedNodeList.push(node);
        }
        else if (!node.isExpanded && index > -1) {
            this.expandedNodeList = this.expandedNodeList.filter(n => node.key !== n.key);
        }
    }
    /**
     * check state
     * @param isCheckStrictly
     */
    refreshCheckState(isCheckStrictly = false) {
        if (isCheckStrictly) {
            return;
        }
        this.checkedNodeList.forEach(node => {
            this.conduct(node);
        });
    }
    // reset other node checked state based current node
    conduct(node) {
        const isChecked = node.isChecked;
        if (node) {
            this.conductUp(node);
            this.conductDown(node, isChecked);
        }
    }
    /**
     * 1、children half checked
     * 2、children all checked, parent checked
     * 3、no children checked
     */
    conductUp(node) {
        const parentNode = node.getParentNode();
        if (parentNode) {
            if (!isCheckDisabled(parentNode)) {
                if (parentNode.children.every(child => isCheckDisabled(child) || (!child.isHalfChecked && child.isChecked))) {
                    parentNode.isChecked = true;
                    parentNode.isHalfChecked = false;
                }
                else if (parentNode.children.some(child => child.isHalfChecked || child.isChecked)) {
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
    }
    /**
     * reset child check state
     */
    conductDown(node, value) {
        if (!isCheckDisabled(node)) {
            node.isChecked = value;
            node.isHalfChecked = false;
            this.setCheckedNodeList(node);
            this.setHalfCheckedNodeList(node);
            node.children.forEach(n => {
                this.conductDown(n, value);
            });
        }
    }
    /**
     * search value & expand node
     * should add expandlist
     */
    searchExpand(value) {
        this.matchedNodeList = [];
        const expandedKeys = [];
        if (!isNotNil(value)) {
            return;
        }
        // to reset expandedNodeList
        const expandParent = (n) => {
            // expand parent node
            const parentNode = n.getParentNode();
            if (parentNode) {
                expandedKeys.push(parentNode.key);
                expandParent(parentNode);
            }
        };
        const searchChild = (n) => {
            if (value && n.title.includes(value)) {
                // match the node
                n.isMatched = true;
                this.matchedNodeList.push(n);
                // expand parentNode
                expandParent(n);
            }
            else {
                n.isMatched = false;
            }
            n.canHide = !n.isMatched;
            n.children.forEach(child => {
                searchChild(child);
            });
        };
        this.rootNodes.forEach(child => {
            searchChild(child);
        });
        // expand matched keys
        this.calcExpandedKeys(expandedKeys, this.rootNodes);
    }
    /**
     * flush after delete node
     */
    afterRemove(nodes) {
        // to reset selectedNodeList & expandedNodeList
        const loopNode = (node) => {
            // remove selected node
            this.selectedNodeList = this.selectedNodeList.filter(n => n.key !== node.key);
            // remove expanded node
            this.expandedNodeList = this.expandedNodeList.filter(n => n.key !== node.key);
            // remove checked node
            this.checkedNodeList = this.checkedNodeList.filter(n => n.key !== node.key);
            if (node.children) {
                node.children.forEach(child => {
                    loopNode(child);
                });
            }
        };
        nodes.forEach(n => {
            loopNode(n);
        });
        this.refreshCheckState(this.isCheckStrictly);
    }
    /**
     * drag event
     */
    refreshDragNode(node) {
        if (node.children.length === 0) {
            // until root
            this.conductUp(node);
        }
        else {
            node.children.forEach(child => {
                this.refreshDragNode(child);
            });
        }
    }
    // reset node level
    resetNodeLevel(node) {
        const parentNode = node.getParentNode();
        if (parentNode) {
            node.level = parentNode.level + 1;
        }
        else {
            node.level = 0;
        }
        for (const child of node.children) {
            this.resetNodeLevel(child);
        }
    }
    calcDropPosition(event) {
        const { clientY } = event;
        // to fix firefox undefined
        const { top, bottom, height } = event.srcElement
            ? event.srcElement.getBoundingClientRect()
            : event.target.getBoundingClientRect();
        const des = Math.max(height * this.DRAG_SIDE_RANGE, this.DRAG_MIN_GAP);
        if (clientY <= top + des) {
            return -1;
        }
        else if (clientY >= bottom - des) {
            return 1;
        }
        return 0;
    }
    /**
     * drop
     * 0: inner -1: pre 1: next
     */
    dropAndApply(targetNode, dragPos = -1) {
        if (!targetNode || dragPos > 1) {
            return;
        }
        const treeService = targetNode.treeService;
        const targetParent = targetNode.getParentNode();
        const isSelectedRootNode = this.selectedNode.getParentNode();
        // remove the dragNode
        if (isSelectedRootNode) {
            isSelectedRootNode.children = isSelectedRootNode.children.filter(n => n.key !== this.selectedNode.key);
        }
        else {
            this.rootNodes = this.rootNodes.filter(n => n.key !== this.selectedNode.key);
        }
        switch (dragPos) {
            case 0:
                targetNode.addChildren([this.selectedNode]);
                this.resetNodeLevel(targetNode);
                break;
            case -1:
            case 1:
                const tIndex = dragPos === 1 ? 1 : 0;
                if (targetParent) {
                    targetParent.addChildren([this.selectedNode], targetParent.children.indexOf(targetNode) + tIndex);
                    const parentNode = this.selectedNode.getParentNode();
                    if (parentNode) {
                        this.resetNodeLevel(parentNode);
                    }
                }
                else {
                    const targetIndex = this.rootNodes.indexOf(targetNode) + tIndex;
                    // Insert root node.
                    this.rootNodes.splice(targetIndex, 0, this.selectedNode);
                    this.rootNodes[targetIndex].parentNode = null;
                    this.rootNodes[targetIndex].level = 0;
                }
                break;
        }
        // flush all nodes
        this.rootNodes.forEach(child => {
            if (!child.treeService) {
                child.service = treeService;
            }
            this.refreshDragNode(child);
        });
    }
    /**
     * emit Structure
     * eventName
     * node
     * event: MouseEvent / DragEvent
     * dragNode
     */
    formatEvent(eventName, node, event) {
        const emitStructure = {
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
                Object.assign(emitStructure, { keys: this.selectedNodeList.map(n => n.key) });
                break;
            case 'check':
                const checkedNodeList = this.getCheckedNodeList();
                Object.assign(emitStructure, { checkedKeys: checkedNodeList });
                Object.assign(emitStructure, { nodes: checkedNodeList });
                Object.assign(emitStructure, { keys: checkedNodeList.map(n => n.key) });
                break;
            case 'search':
                Object.assign(emitStructure, { matchedKeys: this.getMatchedNodeList() });
                Object.assign(emitStructure, { nodes: this.getMatchedNodeList() });
                Object.assign(emitStructure, { keys: this.getMatchedNodeList().map(n => n.key) });
                break;
            case 'expand':
                Object.assign(emitStructure, { nodes: this.expandedNodeList });
                Object.assign(emitStructure, { keys: this.expandedNodeList.map(n => n.key) });
                break;
        }
        return emitStructure;
    }
    ngOnDestroy() {
        this.triggerEventChange$.complete();
    }
}
/** @nocollapse */ NzTreeBaseService.ɵfac = function NzTreeBaseService_Factory(t) { return new (t || NzTreeBaseService)(); };
/** @nocollapse */ NzTreeBaseService.ɵprov = ɵɵdefineInjectable({ token: NzTreeBaseService, factory: NzTreeBaseService.ɵfac });
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
const NzTreeHigherOrderServiceToken = new InjectionToken('NzTreeHigherOrder');

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTreeBase {
    constructor(nzTreeService) {
        this.nzTreeService = nzTreeService;
    }
    /**
     * Coerces a value({@link any[]}) to a TreeNodes({@link NzTreeNode[]})
     */
    coerceTreeNodes(
    // tslint:disable-next-line:no-any
    value) {
        let nodes = [];
        if (!this.nzTreeService.isArrayOfNzTreeNode(value)) {
            // has not been new NzTreeNode
            nodes = value.map(item => new NzTreeNode(item, null, this.nzTreeService));
        }
        else {
            nodes = value.map((item) => {
                item.service = this.nzTreeService;
                return item;
            });
        }
        return nodes;
    }
    /**
     * Get all nodes({@link NzTreeNode})
     */
    getTreeNodes() {
        return this.nzTreeService.rootNodes;
    }
    /**
     * Get {@link NzTreeNode} with key
     */
    getTreeNodeByKey(key) {
        // flat tree nodes
        const nodes = [];
        const getNode = (node) => {
            nodes.push(node);
            node.getChildren().forEach(n => {
                getNode(n);
            });
        };
        this.getTreeNodes().forEach(n => {
            getNode(n);
        });
        return nodes.find(n => n.key === key) || null;
    }
    /**
     * Get checked nodes(merged)
     */
    getCheckedNodeList() {
        return this.nzTreeService.getCheckedNodeList();
    }
    /**
     * Get selected nodes
     */
    getSelectedNodeList() {
        return this.nzTreeService.getSelectedNodeList();
    }
    /**
     * Get half checked nodes
     */
    getHalfCheckedNodeList() {
        return this.nzTreeService.getHalfCheckedNodeList();
    }
    /**
     * Get expanded nodes
     */
    getExpandedNodeList() {
        return this.nzTreeService.getExpandedNodeList();
    }
    /**
     * Get matched nodes(if nzSearchValue is not null)
     */
    getMatchedNodeList() {
        return this.nzTreeService.getMatchedNodeList();
    }
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
class NzWaveRenderer {
    constructor(triggerElement, ngZone, insertExtraNode) {
        this.triggerElement = triggerElement;
        this.ngZone = ngZone;
        this.insertExtraNode = insertExtraNode;
        this.waveTransitionDuration = 400;
        this.lastTime = 0;
        this.platform = new Platform();
        this.onClick = (event) => {
            if (!this.triggerElement ||
                !this.triggerElement.getAttribute ||
                this.triggerElement.getAttribute('disabled') ||
                event.target.tagName === 'INPUT' ||
                this.triggerElement.className.indexOf('disabled') >= 0) {
                return;
            }
            this.fadeOutWave();
        };
        this.clickHandler = this.onClick.bind(this);
        this.bindTriggerEvent();
    }
    get waveAttributeName() {
        return this.insertExtraNode ? 'ant-click-animating' : 'ant-click-animating-without-extra-node';
    }
    bindTriggerEvent() {
        if (this.platform.isBrowser) {
            this.ngZone.runOutsideAngular(() => {
                this.removeTriggerEvent();
                if (this.triggerElement) {
                    this.triggerElement.addEventListener('click', this.clickHandler, true);
                }
            });
        }
    }
    removeTriggerEvent() {
        if (this.triggerElement) {
            this.triggerElement.removeEventListener('click', this.clickHandler, true);
        }
    }
    removeStyleAndExtraNode() {
        if (this.styleForPseudo && document.body.contains(this.styleForPseudo)) {
            document.body.removeChild(this.styleForPseudo);
            this.styleForPseudo = null;
        }
        if (this.insertExtraNode && this.triggerElement.contains(this.extraNode)) {
            this.triggerElement.removeChild(this.extraNode);
        }
    }
    destroy() {
        this.removeTriggerEvent();
        this.removeStyleAndExtraNode();
    }
    fadeOutWave() {
        const node = this.triggerElement;
        const waveColor = this.getWaveColor(node);
        node.setAttribute(this.waveAttributeName, 'true');
        if (Date.now() < this.lastTime + this.waveTransitionDuration) {
            return;
        }
        if (this.isValidColor(waveColor)) {
            if (!this.styleForPseudo) {
                this.styleForPseudo = document.createElement('style');
            }
            this.styleForPseudo.innerHTML = `
      [ant-click-animating-without-extra-node='true']::after, .ant-click-animating-node {
        --antd-wave-shadow-color: ${waveColor};
      }`;
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
        this.runTimeoutOutsideZone(() => {
            node.removeAttribute(this.waveAttributeName);
            this.removeStyleAndExtraNode();
        }, this.waveTransitionDuration);
    }
    isValidColor(color) {
        return (!!color &&
            color !== '#ffffff' &&
            color !== 'rgb(255, 255, 255)' &&
            this.isNotGrey(color) &&
            !/rgba\(\d*, \d*, \d*, 0\)/.test(color) &&
            color !== 'transparent');
    }
    isNotGrey(color) {
        const match = color.match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);
        if (match && match[1] && match[2] && match[3]) {
            return !(match[1] === match[2] && match[2] === match[3]);
        }
        return true;
    }
    getWaveColor(node) {
        const nodeStyle = getComputedStyle(node);
        return (nodeStyle.getPropertyValue('border-top-color') || // Firefox Compatible
            nodeStyle.getPropertyValue('border-color') ||
            nodeStyle.getPropertyValue('background-color'));
    }
    runTimeoutOutsideZone(fn, delay) {
        this.ngZone.runOutsideAngular(() => setTimeout(fn, delay));
    }
}

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const NZ_WAVE_GLOBAL_DEFAULT_CONFIG = {
    disabled: false
};
const NZ_WAVE_GLOBAL_CONFIG = new InjectionToken('nz-wave-global-options', {
    providedIn: 'root',
    factory: NZ_WAVE_GLOBAL_CONFIG_FACTORY
});
function NZ_WAVE_GLOBAL_CONFIG_FACTORY() {
    return NZ_WAVE_GLOBAL_DEFAULT_CONFIG;
}
class NzWaveDirective {
    constructor(ngZone, elementRef, config, animationType) {
        this.ngZone = ngZone;
        this.elementRef = elementRef;
        this.config = config;
        this.animationType = animationType;
        this.nzWaveExtraNode = false;
        this.waveDisabled = false;
        this.waveDisabled = this.isConfigDisabled();
    }
    get disabled() {
        return this.waveDisabled;
    }
    get rendererRef() {
        return this.waveRenderer;
    }
    isConfigDisabled() {
        let disabled = false;
        if (this.config && typeof this.config.disabled === 'boolean') {
            disabled = this.config.disabled;
        }
        if (this.animationType === 'NoopAnimations') {
            disabled = true;
        }
        return disabled;
    }
    ngOnDestroy() {
        if (this.waveRenderer) {
            this.waveRenderer.destroy();
        }
    }
    ngOnInit() {
        this.renderWaveIfEnabled();
    }
    renderWaveIfEnabled() {
        if (!this.waveDisabled && this.elementRef.nativeElement) {
            this.waveRenderer = new NzWaveRenderer(this.elementRef.nativeElement, this.ngZone, this.nzWaveExtraNode);
        }
    }
    disable() {
        this.waveDisabled = true;
        if (this.waveRenderer) {
            this.waveRenderer.removeTriggerEvent();
            this.waveRenderer.removeStyleAndExtraNode();
        }
    }
    enable() {
        // config priority
        this.waveDisabled = this.isConfigDisabled() || false;
        if (this.waveRenderer) {
            this.waveRenderer.bindTriggerEvent();
        }
    }
}
/** @nocollapse */ NzWaveDirective.ɵfac = function NzWaveDirective_Factory(t) { return new (t || NzWaveDirective)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NZ_WAVE_GLOBAL_CONFIG, 8), ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8)); };
/** @nocollapse */ NzWaveDirective.ɵdir = ɵɵdefineDirective({ type: NzWaveDirective, selectors: [["", "nz-wave", ""]], inputs: { nzWaveExtraNode: "nzWaveExtraNode" }, exportAs: ["nzWave"] });
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
class NzWaveModule {
}
/** @nocollapse */ NzWaveModule.ɵmod = ɵɵdefineNgModule({ type: NzWaveModule });
/** @nocollapse */ NzWaveModule.ɵinj = ɵɵdefineInjector({ factory: function NzWaveModule_Factory(t) { return new (t || NzWaveModule)(); }, imports: [[PlatformModule]] });
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
class NzMenuBaseService {
    constructor() {
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
    onMenuItemClick(menu) {
        this.menuItemClick$.next(menu);
    }
    setMode(mode) {
        this.mode = mode;
        this.mode$.next(mode);
    }
    setTheme(theme) {
        this.theme = theme;
        this.theme$.next(theme);
    }
    setInlineIndent(indent) {
        this.inlineIndent = indent;
        this.inlineIndent$.next(indent);
    }
}
/** @nocollapse */ NzMenuBaseService.ɵfac = function NzMenuBaseService_Factory(t) { return new (t || NzMenuBaseService)(); };
/** @nocollapse */ NzMenuBaseService.ɵprov = ɵɵdefineInjectable({ token: NzMenuBaseService, factory: NzMenuBaseService.ɵfac });
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
const NzDropdownHigherOrderServiceToken = new InjectionToken('NzMenuHigherOrder');

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
const responsiveMap = {
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
class NzTransButtonDirective {
}
/** @nocollapse */ NzTransButtonDirective.ɵfac = function NzTransButtonDirective_Factory(t) { return new (t || NzTransButtonDirective)(); };
/** @nocollapse */ NzTransButtonDirective.ɵdir = ɵɵdefineDirective({ type: NzTransButtonDirective, selectors: [["button", "nz-trans-button", ""]], hostBindings: function NzTransButtonDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        ɵɵallocHostVars(4);
    } if (rf & 2) {
        ɵɵstyleSanitizer(ɵɵdefaultStyleSanitizer);
        ɵɵstyleProp("border", "0")("background", "transparent")("padding", "0")("line-height", "inherit");
    } } });
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
class NzTransButtonModule {
}
/** @nocollapse */ NzTransButtonModule.ɵmod = ɵɵdefineNgModule({ type: NzTransButtonModule });
/** @nocollapse */ NzTransButtonModule.ɵinj = ɵɵdefineInjector({ factory: function NzTransButtonModule_Factory(t) { return new (t || NzTransButtonModule)(); }, imports: [[CommonModule]] });
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
const SURROGATE_PAIR_REGEXP = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
// ! to ~ is the ASCII range.
const NON_ALPHANUMERIC_REGEXP = /([^\#-~ |!])/g;
/**
 * Escapes all potentially dangerous characters, so that the
 * resulting string can be safely inserted into attribute or
 * element text.
 */
function encodeEntities(value) {
    return value
        .replace(/&/g, '&amp;')
        .replace(SURROGATE_PAIR_REGEXP, (match) => {
        const hi = match.charCodeAt(0);
        const low = match.charCodeAt(1);
        return `&#${(hi - 0xd800) * 0x400 + (low - 0xdc00) + 0x10000};`;
    })
        .replace(NON_ALPHANUMERIC_REGEXP, (match) => `&#${match.charCodeAt(0)};`)
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}
class NzHighlightPipe {
    constructor() {
        this.UNIQUE_WRAPPERS = ['##==-open_tag-==##', '##==-close_tag-==##'];
    }
    transform(value, highlightValue, flags, klass) {
        if (!highlightValue) {
            return value;
        }
        // Escapes regex keyword to interpret these characters literally
        const searchValue = new RegExp(highlightValue.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$&'), flags);
        const wrapValue = value.replace(searchValue, `${this.UNIQUE_WRAPPERS[0]}$&${this.UNIQUE_WRAPPERS[1]}`);
        return encodeEntities(wrapValue)
            .replace(new RegExp(this.UNIQUE_WRAPPERS[0], 'g'), klass ? `<span class="${klass}">` : '<span>')
            .replace(new RegExp(this.UNIQUE_WRAPPERS[1], 'g'), '</span>');
    }
}
/** @nocollapse */ NzHighlightPipe.ɵfac = function NzHighlightPipe_Factory(t) { return new (t || NzHighlightPipe)(); };
/** @nocollapse */ NzHighlightPipe.ɵpipe = ɵɵdefinePipe({ name: "nzHighlight", type: NzHighlightPipe, pure: true });
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
class NzHighlightModule {
}
/** @nocollapse */ NzHighlightModule.ɵmod = ɵɵdefineNgModule({ type: NzHighlightModule });
/** @nocollapse */ NzHighlightModule.ɵinj = ɵɵdefineInjector({ factory: function NzHighlightModule_Factory(t) { return new (t || NzHighlightModule)(); }, imports: [[CommonModule]] });
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
const NZ_CONFIG = new InjectionToken('nz-config');

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const isDefined = function (value) {
    return value !== undefined;
};
class NzConfigService {
    constructor(defaultConfig) {
        this.configUpdated$ = new Subject();
        this.config = defaultConfig || {};
    }
    getConfigForComponent(componentName) {
        return this.config[componentName];
    }
    getConfigChangeEventForComponent(componentName) {
        return this.configUpdated$.pipe(filter(n => n === componentName), mapTo(undefined));
    }
    set(componentName, value) {
        this.config[componentName] = Object.assign(Object.assign({}, this.config[componentName]), value);
        this.configUpdated$.next(componentName);
    }
}
/** @nocollapse */ NzConfigService.ɵfac = function NzConfigService_Factory(t) { return new (t || NzConfigService)(ɵɵinject(NZ_CONFIG, 8)); };
/** @nocollapse */ NzConfigService.ɵprov = ɵɵdefineInjectable({ token: NzConfigService, factory: NzConfigService.ɵfac, providedIn: 'root' });
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
        const privatePropName = `$$__assignedValue__${propName}`;
        Object.defineProperty(target, privatePropName, {
            configurable: true,
            writable: true,
            enumerable: false
        });
        return {
            get() {
                const originalValue = originalDescriptor && originalDescriptor.get ? originalDescriptor.get.bind(this)() : this[privatePropName];
                if (isDefined(originalValue)) {
                    return originalValue;
                }
                const componentConfig = this.nzConfigService.getConfigForComponent(componentName) || {};
                const configValue = componentConfig[propName];
                return isDefined(configValue) ? configValue : innerDefaultValue;
            },
            set(value) {
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
class NzToCssUnitPipe {
    transform(value, defaultUnit = 'px') {
        const formatted = +value; // force convert
        return isNaN(formatted) ? `${value}` : `${formatted}${defaultUnit}`;
    }
}
/** @nocollapse */ NzToCssUnitPipe.ɵfac = function NzToCssUnitPipe_Factory(t) { return new (t || NzToCssUnitPipe)(); };
/** @nocollapse */ NzToCssUnitPipe.ɵpipe = ɵɵdefinePipe({ name: "nzToCssUnit", type: NzToCssUnitPipe, pure: true });
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

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTimeRangePipe {
    transform(value, format = 'HH:mm:ss') {
        let duration = Number(value || 0);
        return timeUnits.reduce((current, [name, unit]) => {
            if (current.indexOf(name) !== -1) {
                const v = Math.floor(duration / unit);
                duration -= v * unit;
                return current.replace(new RegExp(`${name}+`, 'g'), (match) => {
                    return padStart(v.toString(), match.length, '0');
                });
            }
            return current;
        }, format);
    }
}
/** @nocollapse */ NzTimeRangePipe.ɵfac = function NzTimeRangePipe_Factory(t) { return new (t || NzTimeRangePipe)(); };
/** @nocollapse */ NzTimeRangePipe.ɵpipe = ɵɵdefinePipe({ name: "nzTimeRange", type: NzTimeRangePipe, pure: true });
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
class NzPipesModule {
}
/** @nocollapse */ NzPipesModule.ɵmod = ɵɵdefineNgModule({ type: NzPipesModule });
/** @nocollapse */ NzPipesModule.ɵinj = ɵɵdefineInjector({ factory: function NzPipesModule_Factory(t) { return new (t || NzPipesModule)(); }, imports: [[CommonModule]] });
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

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
export { NzAddOnModule, NzClassListAddDirective, NzStringTemplateOutletDirective } from './addon/public-api';
export { AnimationDuration, AnimationCurves, collapseMotion, treeCollapseMotion, fadeMotion, helpMotion, moveUpMotion, notificationMotion, slideMotion, slideAlertMotion, zoomMotion, zoomBigMotion, zoomBadgeMotion } from './animation/public-api';
export { NzNoAnimationModule, NzNoAnimationDirective } from './no-animation/public-api';
export { NzConnectedOverlayDirective, NzOverlayModule, getPlacementName, POSITION_MAP, DEFAULT_TOOLTIP_POSITIONS, DEFAULT_DROPDOWN_POSITIONS, DEFAULT_SUBMENU_POSITIONS, DEFAULT_MENTION_TOP_POSITIONS, DEFAULT_MENTION_BOTTOM_POSITIONS } from './overlay/public-api';
export { sortRangeValue, CandyDate, timeUnits } from './time/public-api';
export { cancelRequestAnimationFrame, reqAnimFrame } from './polyfill/public-api';
export { SCROLL_SERVICE_PROVIDER_FACTORY, NzScrollService, SCROLL_SERVICE_PROVIDER } from './scroll/public-api';
export { NzUpdateHostClassService, NzCopyToClipboardService, NzCopyToClipboardServiceModule, NzDomEventService, NzSingletonService, NzDragService } from './services/public-api';
export { dispatchEvent, dispatchFakeEvent, dispatchKeyboardEvent, dispatchMouseEvent, dispatchTouchEvent, createMouseEvent, createTouchEvent, createKeyboardEvent, createFakeEvent, typeInElement, wrappedErrorMessage, FakeViewportRuler, MockNgZone } from './testing/public-api';
export { NzTreeNode, NzTreeBaseService, NzTreeHigherOrderServiceToken, NzTreeBase } from './tree/public-api';
export {} from './types/public-api';
export { toArray, arraysEqual, shallowCopyArray, isNotNil, isNil, shallowEqual, isInteger, isEmpty, filterNotEmptyNode, isNonEmptyString, isTemplateRef, isComponent, toBoolean, toNumber, toCssPixel, valueFunctionProp, InputBoolean, InputCssPixel, InputNumber, silentEvent, getElementOffset, findFirstNotEmptyNode, findLastNotEmptyNode, reverseChildNodes, isTouchEvent, getEventPosition, getRegExp, getMentions, padStart, padEnd, getRepeatedElement, isPromise, getPercent, getPrecision, ensureNumberInRange, scrollIntoView, getCaretCoordinates, createDebugEle, properties, isStyleSupport, getStyleAsText, pxToNumber, measure, measureScrollbar, ensureInBounds, inNextTick } from './util/public-api';
export { NzWaveRenderer, NZ_WAVE_GLOBAL_CONFIG_FACTORY, NZ_WAVE_GLOBAL_DEFAULT_CONFIG, NZ_WAVE_GLOBAL_CONFIG, NzWaveDirective, NzWaveModule } from './wave/public-api';
export { NzMenuBaseService, NzDropdownHigherOrderServiceToken } from './dropdown/public-api';
export { PREFIX, warn, warnDeprecation, log } from './logger/public-api';
export { NzBreakpoint, responsiveMap } from './responsive/public-api';
export { NzTransButtonModule, NzTransButtonDirective } from './trans-button/public-api';
export { NzHighlightPipe, NzHighlightModule } from './highlight/public-api';
export { WithConfig, NzConfigService, NZ_CONFIG } from './config/public-api';
export { NzPipesModule, NzTimeRangePipe, NzToCssUnitPipe } from './pipe/public-api';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljLWFwaS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbInB1YmxpYy1hcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsd0ZBQWMsb0JBQW9CLENBQUM7QUFDbkMsNE5BQWMsd0JBQXdCLENBQUM7QUFDdkMsNERBQWMsMkJBQTJCLENBQUM7QUFDMUMsZ1BBQWMsc0JBQXNCLENBQUM7QUFDckMscURBQWMsbUJBQW1CLENBQUM7QUFDbEMsMERBQWMsdUJBQXVCLENBQUM7QUFDdEMsMEZBQWMscUJBQXFCLENBQUM7QUFDcEMseUpBQWMsdUJBQXVCLENBQUM7QUFDdEMsNlBBQWMsc0JBQXNCLENBQUM7QUFDckMseUZBQWMsbUJBQW1CLENBQUM7QUFDbEMsZUFBYyxvQkFBb0IsQ0FBQztBQUNuQyxxcUJBQWMsbUJBQW1CLENBQUM7QUFDbEMsbUpBQWMsbUJBQW1CLENBQUM7QUFDbEMscUVBQWMsdUJBQXVCLENBQUM7QUFDdEMsbURBQWMscUJBQXFCLENBQUM7QUFDcEMsNENBQWMseUJBQXlCLENBQUM7QUFDeEMsNERBQWMsMkJBQTJCLENBQUM7QUFDMUMsbURBQWMsd0JBQXdCLENBQUM7QUFDdkMsdURBQWMscUJBQXFCLENBQUM7QUFDcEMsZ0VBQWMsbUJBQW1CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmV4cG9ydCAqIGZyb20gJy4vYWRkb24vcHVibGljLWFwaSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vYW5pbWF0aW9uL3B1YmxpYy1hcGknO1xyXG5leHBvcnQgKiBmcm9tICcuL25vLWFuaW1hdGlvbi9wdWJsaWMtYXBpJztcclxuZXhwb3J0ICogZnJvbSAnLi9vdmVybGF5L3B1YmxpYy1hcGknO1xyXG5leHBvcnQgKiBmcm9tICcuL3RpbWUvcHVibGljLWFwaSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcG9seWZpbGwvcHVibGljLWFwaSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vc2Nyb2xsL3B1YmxpYy1hcGknO1xyXG5leHBvcnQgKiBmcm9tICcuL3NlcnZpY2VzL3B1YmxpYy1hcGknO1xyXG5leHBvcnQgKiBmcm9tICcuL3Rlc3RpbmcvcHVibGljLWFwaSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vdHJlZS9wdWJsaWMtYXBpJztcclxuZXhwb3J0ICogZnJvbSAnLi90eXBlcy9wdWJsaWMtYXBpJztcclxuZXhwb3J0ICogZnJvbSAnLi91dGlsL3B1YmxpYy1hcGknO1xyXG5leHBvcnQgKiBmcm9tICcuL3dhdmUvcHVibGljLWFwaSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZHJvcGRvd24vcHVibGljLWFwaSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vbG9nZ2VyL3B1YmxpYy1hcGknO1xyXG5leHBvcnQgKiBmcm9tICcuL3Jlc3BvbnNpdmUvcHVibGljLWFwaSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vdHJhbnMtYnV0dG9uL3B1YmxpYy1hcGknO1xyXG5leHBvcnQgKiBmcm9tICcuL2hpZ2hsaWdodC9wdWJsaWMtYXBpJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb25maWcvcHVibGljLWFwaSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcGlwZS9wdWJsaWMtYXBpJztcclxuIl19
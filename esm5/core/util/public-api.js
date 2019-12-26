/**
 * @fileoverview added by tsickle
 * Generated from: util/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
export { toArray, arraysEqual, shallowCopyArray } from './array';
export { isNotNil, isNil, shallowEqual, isInteger, isEmpty, filterNotEmptyNode, isNonEmptyString, isTemplateRef, isComponent } from './check';
export { toBoolean, toNumber, toCssPixel, valueFunctionProp, InputBoolean, InputCssPixel, InputNumber } from './convert';
export { silentEvent, getElementOffset, findFirstNotEmptyNode, findLastNotEmptyNode, reverseChildNodes, isTouchEvent, getEventPosition } from './dom';
export { getRegExp, getMentions } from './getMentions';
export { padStart, padEnd, getRepeatedElement } from './string';
export { isPromise } from './is-promise';
export { getPercent, getPrecision, ensureNumberInRange } from './number';
export { scrollIntoView } from './scroll-into-view-if-needed';
export { getCaretCoordinates, createDebugEle, properties } from './textarea-caret-position';
export { isStyleSupport, getStyleAsText } from './style';
export { pxToNumber, measure } from './text-measure';
export { measureScrollbar } from './measure-scrollbar';
export { ensureInBounds } from './ensure-in-bounds';
export { inNextTick } from './tick';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljLWFwaS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbInV0aWwvcHVibGljLWFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSx1REFBYyxTQUFTLENBQUM7QUFDeEIsb0lBQWMsU0FBUyxDQUFDO0FBQ3hCLDZHQUFjLFdBQVcsQ0FBQztBQUMxQiw4SUFBYyxPQUFPLENBQUM7QUFDdEIsdUNBQWMsZUFBZSxDQUFDO0FBQzlCLHFEQUFjLFVBQVUsQ0FBQztBQUN6QiwwQkFBYyxjQUFjLENBQUM7QUFDN0IsOERBQWMsVUFBVSxDQUFDO0FBQ3pCLCtCQUFjLDhCQUE4QixDQUFDO0FBQzdDLGdFQUFjLDJCQUEyQixDQUFDO0FBQzFDLCtDQUFjLFNBQVMsQ0FBQztBQUN4QixvQ0FBYyxnQkFBZ0IsQ0FBQztBQUMvQixpQ0FBYyxxQkFBcUIsQ0FBQztBQUNwQywrQkFBYyxvQkFBb0IsQ0FBQztBQUNuQywyQkFBYyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmV4cG9ydCAqIGZyb20gJy4vYXJyYXknO1xyXG5leHBvcnQgKiBmcm9tICcuL2NoZWNrJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb252ZXJ0JztcclxuZXhwb3J0ICogZnJvbSAnLi9kb20nO1xyXG5leHBvcnQgKiBmcm9tICcuL2dldE1lbnRpb25zJztcclxuZXhwb3J0ICogZnJvbSAnLi9zdHJpbmcnO1xyXG5leHBvcnQgKiBmcm9tICcuL2lzLXByb21pc2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL251bWJlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vc2Nyb2xsLWludG8tdmlldy1pZi1uZWVkZWQnO1xyXG5leHBvcnQgKiBmcm9tICcuL3RleHRhcmVhLWNhcmV0LXBvc2l0aW9uJztcclxuZXhwb3J0ICogZnJvbSAnLi9zdHlsZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vdGV4dC1tZWFzdXJlJztcclxuZXhwb3J0ICogZnJvbSAnLi9tZWFzdXJlLXNjcm9sbGJhcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vZW5zdXJlLWluLWJvdW5kcyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vdGljayc7XHJcbiJdfQ==
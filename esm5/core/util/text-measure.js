/**
 * @fileoverview added by tsickle
 * Generated from: util/text-measure.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * @record
 */
export function MeasureResult() { }
if (false) {
    /** @type {?} */
    MeasureResult.prototype.finished;
    /** @type {?} */
    MeasureResult.prototype.node;
}
// We only handle element & text node.
/** @type {?} */
var ELEMENT_NODE = 1;
/** @type {?} */
var TEXT_NODE = 3;
/** @type {?} */
var COMMENT_NODE = 8;
/** @type {?} */
var ellipsisContainer;
/** @type {?} */
var wrapperStyle = {
    padding: '0',
    margin: '0',
    display: 'inline',
    lineHeight: 'inherit'
};
/**
 * @param {?} value
 * @return {?}
 */
export function pxToNumber(value) {
    if (!value) {
        return 0;
    }
    /** @type {?} */
    var match = value.match(/^\d*(\.\d*)?/);
    return match ? Number(match[0]) : 0;
}
/**
 * @param {?} style
 * @return {?}
 */
function styleToString(style) {
    // There are some different behavior between Firefox & Chrome.
    // We have to handle this ourself.
    /** @type {?} */
    var styleNames = Array.prototype.slice.apply(style);
    return styleNames.map((/**
     * @param {?} name
     * @return {?}
     */
    function (name) { return name + ": " + style.getPropertyValue(name) + ";"; })).join('');
}
/**
 * @param {?} children
 * @return {?}
 */
function mergeChildren(children) {
    /** @type {?} */
    var childList = [];
    children.forEach((/**
     * @param {?} child
     * @return {?}
     */
    function (child) {
        /** @type {?} */
        var prevChild = childList[childList.length - 1];
        if (prevChild && child.nodeType === TEXT_NODE && prevChild.nodeType === TEXT_NODE) {
            ((/** @type {?} */ (prevChild))).data += ((/** @type {?} */ (child))).data;
        }
        else {
            childList.push(child);
        }
    }));
    return childList;
}
/**
 * @param {?} originEle
 * @param {?} rows
 * @param {?} contentNodes
 * @param {?} fixedContent
 * @param {?} ellipsisStr
 * @return {?}
 */
export function measure(originEle, rows, contentNodes, fixedContent, ellipsisStr) {
    if (!ellipsisContainer) {
        ellipsisContainer = document.createElement('div');
        ellipsisContainer.setAttribute('aria-hidden', 'true');
        document.body.appendChild(ellipsisContainer);
    }
    // Get origin style
    /** @type {?} */
    var originStyle = window.getComputedStyle(originEle);
    /** @type {?} */
    var originCSS = styleToString(originStyle);
    /** @type {?} */
    var lineHeight = pxToNumber(originStyle.lineHeight);
    /** @type {?} */
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
    ((/** @type {?} */ (ellipsisContainer.style))).webkitLineClamp = 'none';
    /** @type {?} */
    var contentList = mergeChildren(contentNodes);
    /** @type {?} */
    var container = document.createElement('div');
    /** @type {?} */
    var contentContainer = document.createElement('span');
    /** @type {?} */
    var fixedContainer = document.createElement('span');
    // Add styles in container
    Object.assign(container.style, wrapperStyle);
    Object.assign(contentContainer.style, wrapperStyle);
    Object.assign(fixedContainer.style, wrapperStyle);
    contentList.forEach((/**
     * @param {?} n
     * @return {?}
     */
    function (n) {
        contentContainer.appendChild(n);
    }));
    fixedContent.forEach((/**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        fixedContainer.appendChild(node.cloneNode(true));
    }));
    container.appendChild(contentContainer);
    container.appendChild(fixedContainer);
    // Render in the fake container
    ellipsisContainer.appendChild(container);
    // Check if ellipsis in measure div is height enough for content
    /**
     * @return {?}
     */
    function inRange() {
        return ellipsisContainer.offsetHeight < maxHeight;
    }
    if (inRange()) {
        /** @type {?} */
        var text = ellipsisContainer.innerHTML;
        ellipsisContainer.removeChild(container);
        return { contentNodes: contentNodes, text: text, ellipsis: false };
    }
    // We should clone the childNode since they're controlled by React and we can't reuse it without warning
    /** @type {?} */
    var childNodes = Array.prototype.slice
        .apply(ellipsisContainer.childNodes[0].childNodes[0].cloneNode(true).childNodes)
        .filter((/**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var nodeType = _a.nodeType;
        return nodeType !== COMMENT_NODE;
    }));
    /** @type {?} */
    var fixedNodes = Array.prototype.slice.apply(ellipsisContainer.childNodes[0].childNodes[1].cloneNode(true).childNodes);
    ellipsisContainer.removeChild(container);
    // ========================= Find match ellipsis content =========================
    ellipsisContainer.innerHTML = '';
    // Create origin content holder
    /** @type {?} */
    var ellipsisContentHolder = document.createElement('span');
    ellipsisContainer.appendChild(ellipsisContentHolder);
    /** @type {?} */
    var ellipsisTextNode = document.createTextNode(ellipsisStr);
    ellipsisContentHolder.appendChild(ellipsisTextNode);
    fixedNodes.forEach((/**
     * @param {?} childNode
     * @return {?}
     */
    function (childNode) {
        ellipsisContainer.appendChild(childNode);
    }));
    // Append before fixed nodes
    /**
     * @param {?} node
     * @return {?}
     */
    function appendChildNode(node) {
        ellipsisContentHolder.insertBefore(node, ellipsisTextNode);
    }
    // Get maximum text
    /**
     * @param {?} textNode
     * @param {?} fullText
     * @param {?=} startLoc
     * @param {?=} endLoc
     * @param {?=} lastSuccessLoc
     * @return {?}
     */
    function measureText(textNode, fullText, startLoc, endLoc, lastSuccessLoc) {
        if (startLoc === void 0) { startLoc = 0; }
        if (endLoc === void 0) { endLoc = fullText.length; }
        if (lastSuccessLoc === void 0) { lastSuccessLoc = 0; }
        /** @type {?} */
        var midLoc = Math.floor((startLoc + endLoc) / 2);
        /** @type {?} */
        var currentText = fullText.slice(0, midLoc);
        textNode.textContent = currentText;
        if (startLoc >= endLoc - 1) {
            // Loop when step is small
            for (var step = endLoc; step >= startLoc; step -= 1) {
                /** @type {?} */
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
    /**
     * @param {?} childNode
     * @param {?} index
     * @return {?}
     */
    function measureNode(childNode, index) {
        /** @type {?} */
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
            /** @type {?} */
            var fullText = childNode.textContent || '';
            /** @type {?} */
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
    /** @type {?} */
    var ellipsisNodes = [];
    childNodes.some((/**
     * @param {?} childNode
     * @param {?} index
     * @return {?}
     */
    function (childNode, index) {
        var _a = measureNode(childNode, index), finished = _a.finished, node = _a.node;
        if (node) {
            ellipsisNodes.push(node);
        }
        return finished;
    }));
    /** @type {?} */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1tZWFzdXJlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsidXRpbC90ZXh0LW1lYXN1cmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBUUEsbUNBR0M7OztJQUZDLGlDQUFrQjs7SUFDbEIsNkJBQWtCOzs7O0lBSWQsWUFBWSxHQUFHLENBQUM7O0lBQ2hCLFNBQVMsR0FBRyxDQUFDOztJQUNiLFlBQVksR0FBRyxDQUFDOztJQUVsQixpQkFBdUM7O0lBRXJDLFlBQVksR0FBRztJQUNuQixPQUFPLEVBQUUsR0FBRztJQUNaLE1BQU0sRUFBRSxHQUFHO0lBQ1gsT0FBTyxFQUFFLFFBQVE7SUFDakIsVUFBVSxFQUFFLFNBQVM7Q0FDdEI7Ozs7O0FBRUQsTUFBTSxVQUFVLFVBQVUsQ0FBQyxLQUFvQjtJQUM3QyxJQUFJLENBQUMsS0FBSyxFQUFFO1FBQ1YsT0FBTyxDQUFDLENBQUM7S0FDVjs7UUFFSyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUM7SUFFekMsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3RDLENBQUM7Ozs7O0FBRUQsU0FBUyxhQUFhLENBQUMsS0FBMEI7Ozs7UUFHekMsVUFBVSxHQUFhLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDL0QsT0FBTyxVQUFVLENBQUMsR0FBRzs7OztJQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUcsSUFBSSxVQUFLLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBRyxFQUEzQyxDQUEyQyxFQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3RGLENBQUM7Ozs7O0FBRUQsU0FBUyxhQUFhLENBQUMsUUFBZ0I7O1FB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QUNELE9BQU8saUJBQWlCLENBQUMsVUFBVSxFQUFFO1FBQ25DLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztLQUM3RDtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWVhc3VyZVJlc3VsdCB7XHJcbiAgZmluaXNoZWQ6IGJvb2xlYW47XHJcbiAgbm9kZTogTm9kZSB8IG51bGw7XHJcbn1cclxuXHJcbi8vIFdlIG9ubHkgaGFuZGxlIGVsZW1lbnQgJiB0ZXh0IG5vZGUuXHJcbmNvbnN0IEVMRU1FTlRfTk9ERSA9IDE7XHJcbmNvbnN0IFRFWFRfTk9ERSA9IDM7XHJcbmNvbnN0IENPTU1FTlRfTk9ERSA9IDg7XHJcblxyXG5sZXQgZWxsaXBzaXNDb250YWluZXI6IEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG5cclxuY29uc3Qgd3JhcHBlclN0eWxlID0ge1xyXG4gIHBhZGRpbmc6ICcwJyxcclxuICBtYXJnaW46ICcwJyxcclxuICBkaXNwbGF5OiAnaW5saW5lJyxcclxuICBsaW5lSGVpZ2h0OiAnaW5oZXJpdCdcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBweFRvTnVtYmVyKHZhbHVlOiBzdHJpbmcgfCBudWxsKTogbnVtYmVyIHtcclxuICBpZiAoIXZhbHVlKSB7XHJcbiAgICByZXR1cm4gMDtcclxuICB9XHJcblxyXG4gIGNvbnN0IG1hdGNoID0gdmFsdWUubWF0Y2goL15cXGQqKFxcLlxcZCopPy8pO1xyXG5cclxuICByZXR1cm4gbWF0Y2ggPyBOdW1iZXIobWF0Y2hbMF0pIDogMDtcclxufVxyXG5cclxuZnVuY3Rpb24gc3R5bGVUb1N0cmluZyhzdHlsZTogQ1NTU3R5bGVEZWNsYXJhdGlvbik6IHN0cmluZyB7XHJcbiAgLy8gVGhlcmUgYXJlIHNvbWUgZGlmZmVyZW50IGJlaGF2aW9yIGJldHdlZW4gRmlyZWZveCAmIENocm9tZS5cclxuICAvLyBXZSBoYXZlIHRvIGhhbmRsZSB0aGlzIG91cnNlbGYuXHJcbiAgY29uc3Qgc3R5bGVOYW1lczogc3RyaW5nW10gPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoc3R5bGUpO1xyXG4gIHJldHVybiBzdHlsZU5hbWVzLm1hcChuYW1lID0+IGAke25hbWV9OiAke3N0eWxlLmdldFByb3BlcnR5VmFsdWUobmFtZSl9O2ApLmpvaW4oJycpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtZXJnZUNoaWxkcmVuKGNoaWxkcmVuOiBOb2RlW10pOiBOb2RlW10ge1xyXG4gIGNvbnN0IGNoaWxkTGlzdDogTm9kZVtdID0gW107XHJcblxyXG4gIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkOiBOb2RlKSA9PiB7XHJcbiAgICBjb25zdCBwcmV2Q2hpbGQgPSBjaGlsZExpc3RbY2hpbGRMaXN0Lmxlbmd0aCAtIDFdO1xyXG4gICAgaWYgKHByZXZDaGlsZCAmJiBjaGlsZC5ub2RlVHlwZSA9PT0gVEVYVF9OT0RFICYmIHByZXZDaGlsZC5ub2RlVHlwZSA9PT0gVEVYVF9OT0RFKSB7XHJcbiAgICAgIChwcmV2Q2hpbGQgYXMgVGV4dCkuZGF0YSArPSAoY2hpbGQgYXMgVGV4dCkuZGF0YTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNoaWxkTGlzdC5wdXNoKGNoaWxkKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGNoaWxkTGlzdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1lYXN1cmUoXHJcbiAgb3JpZ2luRWxlOiBIVE1MRWxlbWVudCxcclxuICByb3dzOiBudW1iZXIsXHJcbiAgY29udGVudE5vZGVzOiBOb2RlW10sXHJcbiAgZml4ZWRDb250ZW50OiBIVE1MRWxlbWVudFtdLFxyXG4gIGVsbGlwc2lzU3RyOiBzdHJpbmdcclxuKTogeyBjb250ZW50Tm9kZXM6IE5vZGVbXTsgdGV4dDogc3RyaW5nOyBlbGxpcHNpczogYm9vbGVhbiB9IHtcclxuICBpZiAoIWVsbGlwc2lzQ29udGFpbmVyKSB7XHJcbiAgICBlbGxpcHNpc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZWxsaXBzaXNDb250YWluZXIuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsbGlwc2lzQ29udGFpbmVyKTtcclxuICB9XHJcblxyXG4gIC8vIEdldCBvcmlnaW4gc3R5bGVcclxuICBjb25zdCBvcmlnaW5TdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG9yaWdpbkVsZSk7XHJcbiAgY29uc3Qgb3JpZ2luQ1NTID0gc3R5bGVUb1N0cmluZyhvcmlnaW5TdHlsZSk7XHJcbiAgY29uc3QgbGluZUhlaWdodCA9IHB4VG9OdW1iZXIob3JpZ2luU3R5bGUubGluZUhlaWdodCk7XHJcbiAgY29uc3QgbWF4SGVpZ2h0ID1cclxuICAgIGxpbmVIZWlnaHQgKiAocm93cyArIDEpICsgcHhUb051bWJlcihvcmlnaW5TdHlsZS5wYWRkaW5nVG9wKSArIHB4VG9OdW1iZXIob3JpZ2luU3R5bGUucGFkZGluZ0JvdHRvbSk7XHJcbiAgLy8gU2V0IHNoYWRvd1xyXG4gIGVsbGlwc2lzQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBvcmlnaW5DU1MpO1xyXG4gIGVsbGlwc2lzQ29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcclxuICBlbGxpcHNpc0NvbnRhaW5lci5zdHlsZS5sZWZ0ID0gJzAnO1xyXG4gIGVsbGlwc2lzQ29udGFpbmVyLnN0eWxlLmhlaWdodCA9ICdhdXRvJztcclxuICBlbGxpcHNpc0NvbnRhaW5lci5zdHlsZS5taW5IZWlnaHQgPSAnYXV0byc7XHJcbiAgZWxsaXBzaXNDb250YWluZXIuc3R5bGUubWF4SGVpZ2h0ID0gJ2F1dG8nO1xyXG4gIGVsbGlwc2lzQ29udGFpbmVyLnN0eWxlLnRvcCA9ICctOTk5OTk5cHgnO1xyXG4gIGVsbGlwc2lzQ29udGFpbmVyLnN0eWxlLnpJbmRleCA9ICctMTAwMCc7XHJcblxyXG4gIC8vIGNsZWFuIHVwIGNzcyBvdmVyZmxvd1xyXG4gIGVsbGlwc2lzQ29udGFpbmVyLnN0eWxlLnRleHRPdmVyZmxvdyA9ICdjbGlwJztcclxuICBlbGxpcHNpc0NvbnRhaW5lci5zdHlsZS53aGl0ZVNwYWNlID0gJ25vcm1hbCc7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWFueVxyXG4gIChlbGxpcHNpc0NvbnRhaW5lci5zdHlsZSBhcyBhbnkpLndlYmtpdExpbmVDbGFtcCA9ICdub25lJztcclxuXHJcbiAgY29uc3QgY29udGVudExpc3QgPSBtZXJnZUNoaWxkcmVuKGNvbnRlbnROb2Rlcyk7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBjb25zdCBmaXhlZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHJcbiAgLy8gQWRkIHN0eWxlcyBpbiBjb250YWluZXJcclxuICBPYmplY3QuYXNzaWduKGNvbnRhaW5lci5zdHlsZSwgd3JhcHBlclN0eWxlKTtcclxuICBPYmplY3QuYXNzaWduKGNvbnRlbnRDb250YWluZXIuc3R5bGUsIHdyYXBwZXJTdHlsZSk7XHJcbiAgT2JqZWN0LmFzc2lnbihmaXhlZENvbnRhaW5lci5zdHlsZSwgd3JhcHBlclN0eWxlKTtcclxuXHJcbiAgY29udGVudExpc3QuZm9yRWFjaChuID0+IHtcclxuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobik7XHJcbiAgfSk7XHJcbiAgZml4ZWRDb250ZW50LmZvckVhY2gobm9kZSA9PiB7XHJcbiAgICBmaXhlZENvbnRhaW5lci5hcHBlbmRDaGlsZChub2RlLmNsb25lTm9kZSh0cnVlKSk7XHJcbiAgfSk7XHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnRDb250YWluZXIpO1xyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmaXhlZENvbnRhaW5lcik7XHJcblxyXG4gIC8vIFJlbmRlciBpbiB0aGUgZmFrZSBjb250YWluZXJcclxuICBlbGxpcHNpc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG5cclxuICAvLyBDaGVjayBpZiBlbGxpcHNpcyBpbiBtZWFzdXJlIGRpdiBpcyBoZWlnaHQgZW5vdWdoIGZvciBjb250ZW50XHJcbiAgZnVuY3Rpb24gaW5SYW5nZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBlbGxpcHNpc0NvbnRhaW5lci5vZmZzZXRIZWlnaHQgPCBtYXhIZWlnaHQ7XHJcbiAgfVxyXG5cclxuICBpZiAoaW5SYW5nZSgpKSB7XHJcbiAgICBjb25zdCB0ZXh0ID0gZWxsaXBzaXNDb250YWluZXIuaW5uZXJIVE1MO1xyXG4gICAgZWxsaXBzaXNDb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyKTtcclxuICAgIHJldHVybiB7IGNvbnRlbnROb2RlcywgdGV4dCwgZWxsaXBzaXM6IGZhbHNlIH07XHJcbiAgfVxyXG5cclxuICAvLyBXZSBzaG91bGQgY2xvbmUgdGhlIGNoaWxkTm9kZSBzaW5jZSB0aGV5J3JlIGNvbnRyb2xsZWQgYnkgUmVhY3QgYW5kIHdlIGNhbid0IHJldXNlIGl0IHdpdGhvdXQgd2FybmluZ1xyXG4gIGNvbnN0IGNoaWxkTm9kZXM6IENoaWxkTm9kZVtdID0gQXJyYXkucHJvdG90eXBlLnNsaWNlXHJcbiAgICAuYXBwbHkoZWxsaXBzaXNDb250YWluZXIuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdLmNsb25lTm9kZSh0cnVlKS5jaGlsZE5vZGVzKVxyXG4gICAgLmZpbHRlcigoeyBub2RlVHlwZSB9OiBDaGlsZE5vZGUpID0+IG5vZGVUeXBlICE9PSBDT01NRU5UX05PREUpO1xyXG4gIGNvbnN0IGZpeGVkTm9kZXM6IENoaWxkTm9kZVtdID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KFxyXG4gICAgZWxsaXBzaXNDb250YWluZXIuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzFdLmNsb25lTm9kZSh0cnVlKS5jaGlsZE5vZGVzXHJcbiAgKTtcclxuICBlbGxpcHNpc0NvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIpO1xyXG5cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09IEZpbmQgbWF0Y2ggZWxsaXBzaXMgY29udGVudCA9PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgZWxsaXBzaXNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gIC8vIENyZWF0ZSBvcmlnaW4gY29udGVudCBob2xkZXJcclxuICBjb25zdCBlbGxpcHNpc0NvbnRlbnRIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgZWxsaXBzaXNDb250YWluZXIuYXBwZW5kQ2hpbGQoZWxsaXBzaXNDb250ZW50SG9sZGVyKTtcclxuICBjb25zdCBlbGxpcHNpc1RleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZWxsaXBzaXNTdHIpO1xyXG4gIGVsbGlwc2lzQ29udGVudEhvbGRlci5hcHBlbmRDaGlsZChlbGxpcHNpc1RleHROb2RlKTtcclxuXHJcbiAgZml4ZWROb2Rlcy5mb3JFYWNoKGNoaWxkTm9kZSA9PiB7XHJcbiAgICBlbGxpcHNpc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjaGlsZE5vZGUpO1xyXG4gIH0pO1xyXG5cclxuICAvLyBBcHBlbmQgYmVmb3JlIGZpeGVkIG5vZGVzXHJcbiAgZnVuY3Rpb24gYXBwZW5kQ2hpbGROb2RlKG5vZGU6IENoaWxkTm9kZSk6IHZvaWQge1xyXG4gICAgZWxsaXBzaXNDb250ZW50SG9sZGVyLmluc2VydEJlZm9yZShub2RlLCBlbGxpcHNpc1RleHROb2RlKTtcclxuICB9XHJcblxyXG4gIC8vIEdldCBtYXhpbXVtIHRleHRcclxuICBmdW5jdGlvbiBtZWFzdXJlVGV4dChcclxuICAgIHRleHROb2RlOiBUZXh0LFxyXG4gICAgZnVsbFRleHQ6IHN0cmluZyxcclxuICAgIHN0YXJ0TG9jOiBudW1iZXIgPSAwLFxyXG4gICAgZW5kTG9jOiBudW1iZXIgPSBmdWxsVGV4dC5sZW5ndGgsXHJcbiAgICBsYXN0U3VjY2Vzc0xvYzogbnVtYmVyID0gMFxyXG4gICk6IE1lYXN1cmVSZXN1bHQge1xyXG4gICAgY29uc3QgbWlkTG9jID0gTWF0aC5mbG9vcigoc3RhcnRMb2MgKyBlbmRMb2MpIC8gMik7XHJcbiAgICBjb25zdCBjdXJyZW50VGV4dCA9IGZ1bGxUZXh0LnNsaWNlKDAsIG1pZExvYyk7XHJcbiAgICB0ZXh0Tm9kZS50ZXh0Q29udGVudCA9IGN1cnJlbnRUZXh0O1xyXG5cclxuICAgIGlmIChzdGFydExvYyA+PSBlbmRMb2MgLSAxKSB7XHJcbiAgICAgIC8vIExvb3Agd2hlbiBzdGVwIGlzIHNtYWxsXHJcbiAgICAgIGZvciAobGV0IHN0ZXAgPSBlbmRMb2M7IHN0ZXAgPj0gc3RhcnRMb2M7IHN0ZXAgLT0gMSkge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRTdGVwVGV4dCA9IGZ1bGxUZXh0LnNsaWNlKDAsIHN0ZXApO1xyXG4gICAgICAgIHRleHROb2RlLnRleHRDb250ZW50ID0gY3VycmVudFN0ZXBUZXh0O1xyXG5cclxuICAgICAgICBpZiAoaW5SYW5nZSgpKSB7XHJcbiAgICAgICAgICByZXR1cm4gc3RlcCA9PT0gZnVsbFRleHQubGVuZ3RoXHJcbiAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgICAgZmluaXNoZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbm9kZTogZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZnVsbFRleHQpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA6IHtcclxuICAgICAgICAgICAgICAgIGZpbmlzaGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbm9kZTogZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3VycmVudFN0ZXBUZXh0KVxyXG4gICAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoaW5SYW5nZSgpKSB7XHJcbiAgICAgIHJldHVybiBtZWFzdXJlVGV4dCh0ZXh0Tm9kZSwgZnVsbFRleHQsIG1pZExvYywgZW5kTG9jLCBtaWRMb2MpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG1lYXN1cmVUZXh0KHRleHROb2RlLCBmdWxsVGV4dCwgc3RhcnRMb2MsIG1pZExvYywgbGFzdFN1Y2Nlc3NMb2MpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWVhc3VyZU5vZGUoY2hpbGROb2RlOiBDaGlsZE5vZGUsIGluZGV4OiBudW1iZXIpOiBNZWFzdXJlUmVzdWx0IHtcclxuICAgIGNvbnN0IHR5cGUgPSBjaGlsZE5vZGUubm9kZVR5cGU7XHJcblxyXG4gICAgaWYgKHR5cGUgPT09IEVMRU1FTlRfTk9ERSkge1xyXG4gICAgICAvLyBXZSBkb24ndCBzcGxpdCBlbGVtZW50LCBpdCB3aWxsIGtlZXAgaWYgd2hvbGUgZWxlbWVudCBjYW4gYmUgZGlzcGxheWVkLlxyXG4gICAgICAvLyBhcHBlbmRDaGlsZE5vZGUoY2hpbGROb2RlKTtcclxuICAgICAgaWYgKGluUmFuZ2UoKSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBmaW5pc2hlZDogZmFsc2UsXHJcbiAgICAgICAgICBub2RlOiBjb250ZW50TGlzdFtpbmRleF1cclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBDbGVhbiB1cCBpZiBjYW4gbm90IHB1bGwgaW5cclxuICAgICAgZWxsaXBzaXNDb250ZW50SG9sZGVyLnJlbW92ZUNoaWxkKGNoaWxkTm9kZSk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgZmluaXNoZWQ6IHRydWUsXHJcbiAgICAgICAgbm9kZTogbnVsbFxyXG4gICAgICB9O1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBURVhUX05PREUpIHtcclxuICAgICAgY29uc3QgZnVsbFRleHQgPSBjaGlsZE5vZGUudGV4dENvbnRlbnQgfHwgJyc7XHJcbiAgICAgIGNvbnN0IHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZnVsbFRleHQpO1xyXG4gICAgICBhcHBlbmRDaGlsZE5vZGUodGV4dE5vZGUpO1xyXG4gICAgICByZXR1cm4gbWVhc3VyZVRleHQodGV4dE5vZGUsIGZ1bGxUZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBOb3QgaGFuZGxlIG90aGVyIHR5cGUgb2YgY29udGVudFxyXG4gICAgLy8gUFM6IFRoaXMgY29kZSBzaG91bGQgbm90IGJlIGF0dGFjaGVkIGFmdGVyIHJlYWN0IDE2XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBmaW5pc2hlZDogZmFsc2UsXHJcbiAgICAgIG5vZGU6IG51bGxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb25zdCBlbGxpcHNpc05vZGVzOiBOb2RlW10gPSBbXTtcclxuICBjaGlsZE5vZGVzLnNvbWUoKGNoaWxkTm9kZSwgaW5kZXgpID0+IHtcclxuICAgIGNvbnN0IHsgZmluaXNoZWQsIG5vZGUgfSA9IG1lYXN1cmVOb2RlKGNoaWxkTm9kZSwgaW5kZXgpO1xyXG4gICAgaWYgKG5vZGUpIHtcclxuICAgICAgZWxsaXBzaXNOb2Rlcy5wdXNoKG5vZGUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZpbmlzaGVkO1xyXG4gIH0pO1xyXG4gIGNvbnN0IHJlc3VsdCA9IHtcclxuICAgIGNvbnRlbnROb2RlczogZWxsaXBzaXNOb2RlcyxcclxuICAgIHRleHQ6IGVsbGlwc2lzQ29udGFpbmVyLmlubmVySFRNTCxcclxuICAgIGVsbGlwc2lzOiB0cnVlXHJcbiAgfTtcclxuICB3aGlsZSAoZWxsaXBzaXNDb250YWluZXIuZmlyc3RDaGlsZCkge1xyXG4gICAgZWxsaXBzaXNDb250YWluZXIucmVtb3ZlQ2hpbGQoZWxsaXBzaXNDb250YWluZXIuZmlyc3RDaGlsZCk7XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuIl19
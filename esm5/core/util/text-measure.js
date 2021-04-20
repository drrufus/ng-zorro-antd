/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1tZWFzdXJlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsidXRpbC90ZXh0LW1lYXN1cmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFRQSxtQ0FHQzs7O0lBRkMsaUNBQWtCOztJQUNsQiw2QkFBa0I7Ozs7SUFJZCxZQUFZLEdBQUcsQ0FBQzs7SUFDaEIsU0FBUyxHQUFHLENBQUM7O0lBQ2IsWUFBWSxHQUFHLENBQUM7O0lBRWxCLGlCQUF1Qzs7SUFFckMsWUFBWSxHQUFHO0lBQ25CLE9BQU8sRUFBRSxHQUFHO0lBQ1osTUFBTSxFQUFFLEdBQUc7SUFDWCxPQUFPLEVBQUUsUUFBUTtJQUNqQixVQUFVLEVBQUUsU0FBUztDQUN0Qjs7Ozs7QUFFRCxNQUFNLFVBQVUsVUFBVSxDQUFDLEtBQW9CO0lBQzdDLElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDVixPQUFPLENBQUMsQ0FBQztLQUNWOztRQUVLLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQztJQUV6QyxPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEMsQ0FBQzs7Ozs7QUFFRCxTQUFTLGFBQWEsQ0FBQyxLQUEwQjs7OztRQUd6QyxVQUFVLEdBQWEsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztJQUMvRCxPQUFPLFVBQVUsQ0FBQyxHQUFHOzs7O0lBQUMsVUFBQSxJQUFJLElBQUksT0FBRyxJQUFJLFVBQUssS0FBSyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFHLEVBQTNDLENBQTJDLEVBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDdEYsQ0FBQzs7Ozs7QUFFRCxTQUFTLGFBQWEsQ0FBQyxRQUFnQjs7UUFD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Q0QsT0FBTyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUU7UUFDbkMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQzdEO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNZWFzdXJlUmVzdWx0IHtcclxuICBmaW5pc2hlZDogYm9vbGVhbjtcclxuICBub2RlOiBOb2RlIHwgbnVsbDtcclxufVxyXG5cclxuLy8gV2Ugb25seSBoYW5kbGUgZWxlbWVudCAmIHRleHQgbm9kZS5cclxuY29uc3QgRUxFTUVOVF9OT0RFID0gMTtcclxuY29uc3QgVEVYVF9OT0RFID0gMztcclxuY29uc3QgQ09NTUVOVF9OT0RFID0gODtcclxuXHJcbmxldCBlbGxpcHNpc0NvbnRhaW5lcjogSFRNTFBhcmFncmFwaEVsZW1lbnQ7XHJcblxyXG5jb25zdCB3cmFwcGVyU3R5bGUgPSB7XHJcbiAgcGFkZGluZzogJzAnLFxyXG4gIG1hcmdpbjogJzAnLFxyXG4gIGRpc3BsYXk6ICdpbmxpbmUnLFxyXG4gIGxpbmVIZWlnaHQ6ICdpbmhlcml0J1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHB4VG9OdW1iZXIodmFsdWU6IHN0cmluZyB8IG51bGwpOiBudW1iZXIge1xyXG4gIGlmICghdmFsdWUpIHtcclxuICAgIHJldHVybiAwO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbWF0Y2ggPSB2YWx1ZS5tYXRjaCgvXlxcZCooXFwuXFxkKik/Lyk7XHJcblxyXG4gIHJldHVybiBtYXRjaCA/IE51bWJlcihtYXRjaFswXSkgOiAwO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdHlsZVRvU3RyaW5nKHN0eWxlOiBDU1NTdHlsZURlY2xhcmF0aW9uKTogc3RyaW5nIHtcclxuICAvLyBUaGVyZSBhcmUgc29tZSBkaWZmZXJlbnQgYmVoYXZpb3IgYmV0d2VlbiBGaXJlZm94ICYgQ2hyb21lLlxyXG4gIC8vIFdlIGhhdmUgdG8gaGFuZGxlIHRoaXMgb3Vyc2VsZi5cclxuICBjb25zdCBzdHlsZU5hbWVzOiBzdHJpbmdbXSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShzdHlsZSk7XHJcbiAgcmV0dXJuIHN0eWxlTmFtZXMubWFwKG5hbWUgPT4gYCR7bmFtZX06ICR7c3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKX07YCkuam9pbignJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1lcmdlQ2hpbGRyZW4oY2hpbGRyZW46IE5vZGVbXSk6IE5vZGVbXSB7XHJcbiAgY29uc3QgY2hpbGRMaXN0OiBOb2RlW10gPSBbXTtcclxuXHJcbiAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQ6IE5vZGUpID0+IHtcclxuICAgIGNvbnN0IHByZXZDaGlsZCA9IGNoaWxkTGlzdFtjaGlsZExpc3QubGVuZ3RoIC0gMV07XHJcbiAgICBpZiAocHJldkNoaWxkICYmIGNoaWxkLm5vZGVUeXBlID09PSBURVhUX05PREUgJiYgcHJldkNoaWxkLm5vZGVUeXBlID09PSBURVhUX05PREUpIHtcclxuICAgICAgKHByZXZDaGlsZCBhcyBUZXh0KS5kYXRhICs9IChjaGlsZCBhcyBUZXh0KS5kYXRhO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2hpbGRMaXN0LnB1c2goY2hpbGQpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gY2hpbGRMaXN0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWVhc3VyZShcclxuICBvcmlnaW5FbGU6IEhUTUxFbGVtZW50LFxyXG4gIHJvd3M6IG51bWJlcixcclxuICBjb250ZW50Tm9kZXM6IE5vZGVbXSxcclxuICBmaXhlZENvbnRlbnQ6IEhUTUxFbGVtZW50W10sXHJcbiAgZWxsaXBzaXNTdHI6IHN0cmluZ1xyXG4pOiB7IGNvbnRlbnROb2RlczogTm9kZVtdOyB0ZXh0OiBzdHJpbmc7IGVsbGlwc2lzOiBib29sZWFuIH0ge1xyXG4gIGlmICghZWxsaXBzaXNDb250YWluZXIpIHtcclxuICAgIGVsbGlwc2lzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBlbGxpcHNpc0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxsaXBzaXNDb250YWluZXIpO1xyXG4gIH1cclxuXHJcbiAgLy8gR2V0IG9yaWdpbiBzdHlsZVxyXG4gIGNvbnN0IG9yaWdpblN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUob3JpZ2luRWxlKTtcclxuICBjb25zdCBvcmlnaW5DU1MgPSBzdHlsZVRvU3RyaW5nKG9yaWdpblN0eWxlKTtcclxuICBjb25zdCBsaW5lSGVpZ2h0ID0gcHhUb051bWJlcihvcmlnaW5TdHlsZS5saW5lSGVpZ2h0KTtcclxuICBjb25zdCBtYXhIZWlnaHQgPVxyXG4gICAgbGluZUhlaWdodCAqIChyb3dzICsgMSkgKyBweFRvTnVtYmVyKG9yaWdpblN0eWxlLnBhZGRpbmdUb3ApICsgcHhUb051bWJlcihvcmlnaW5TdHlsZS5wYWRkaW5nQm90dG9tKTtcclxuICAvLyBTZXQgc2hhZG93XHJcbiAgZWxsaXBzaXNDb250YWluZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsIG9yaWdpbkNTUyk7XHJcbiAgZWxsaXBzaXNDb250YWluZXIuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xyXG4gIGVsbGlwc2lzQ29udGFpbmVyLnN0eWxlLmxlZnQgPSAnMCc7XHJcbiAgZWxsaXBzaXNDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xyXG4gIGVsbGlwc2lzQ29udGFpbmVyLnN0eWxlLm1pbkhlaWdodCA9ICdhdXRvJztcclxuICBlbGxpcHNpc0NvbnRhaW5lci5zdHlsZS5tYXhIZWlnaHQgPSAnYXV0byc7XHJcbiAgZWxsaXBzaXNDb250YWluZXIuc3R5bGUudG9wID0gJy05OTk5OTlweCc7XHJcbiAgZWxsaXBzaXNDb250YWluZXIuc3R5bGUuekluZGV4ID0gJy0xMDAwJztcclxuXHJcbiAgLy8gY2xlYW4gdXAgY3NzIG92ZXJmbG93XHJcbiAgZWxsaXBzaXNDb250YWluZXIuc3R5bGUudGV4dE92ZXJmbG93ID0gJ2NsaXAnO1xyXG4gIGVsbGlwc2lzQ29udGFpbmVyLnN0eWxlLndoaXRlU3BhY2UgPSAnbm9ybWFsJztcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tYW55XHJcbiAgKGVsbGlwc2lzQ29udGFpbmVyLnN0eWxlIGFzIGFueSkud2Via2l0TGluZUNsYW1wID0gJ25vbmUnO1xyXG5cclxuICBjb25zdCBjb250ZW50TGlzdCA9IG1lcmdlQ2hpbGRyZW4oY29udGVudE5vZGVzKTtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIGNvbnN0IGZpeGVkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG5cclxuICAvLyBBZGQgc3R5bGVzIGluIGNvbnRhaW5lclxyXG4gIE9iamVjdC5hc3NpZ24oY29udGFpbmVyLnN0eWxlLCB3cmFwcGVyU3R5bGUpO1xyXG4gIE9iamVjdC5hc3NpZ24oY29udGVudENvbnRhaW5lci5zdHlsZSwgd3JhcHBlclN0eWxlKTtcclxuICBPYmplY3QuYXNzaWduKGZpeGVkQ29udGFpbmVyLnN0eWxlLCB3cmFwcGVyU3R5bGUpO1xyXG5cclxuICBjb250ZW50TGlzdC5mb3JFYWNoKG4gPT4ge1xyXG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChuKTtcclxuICB9KTtcclxuICBmaXhlZENvbnRlbnQuZm9yRWFjaChub2RlID0+IHtcclxuICAgIGZpeGVkQ29udGFpbmVyLmFwcGVuZENoaWxkKG5vZGUuY2xvbmVOb2RlKHRydWUpKTtcclxuICB9KTtcclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudENvbnRhaW5lcik7XHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZpeGVkQ29udGFpbmVyKTtcclxuXHJcbiAgLy8gUmVuZGVyIGluIHRoZSBmYWtlIGNvbnRhaW5lclxyXG4gIGVsbGlwc2lzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcblxyXG4gIC8vIENoZWNrIGlmIGVsbGlwc2lzIGluIG1lYXN1cmUgZGl2IGlzIGhlaWdodCBlbm91Z2ggZm9yIGNvbnRlbnRcclxuICBmdW5jdGlvbiBpblJhbmdlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGVsbGlwc2lzQ29udGFpbmVyLm9mZnNldEhlaWdodCA8IG1heEhlaWdodDtcclxuICB9XHJcblxyXG4gIGlmIChpblJhbmdlKCkpIHtcclxuICAgIGNvbnN0IHRleHQgPSBlbGxpcHNpc0NvbnRhaW5lci5pbm5lckhUTUw7XHJcbiAgICBlbGxpcHNpc0NvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIpO1xyXG4gICAgcmV0dXJuIHsgY29udGVudE5vZGVzLCB0ZXh0LCBlbGxpcHNpczogZmFsc2UgfTtcclxuICB9XHJcblxyXG4gIC8vIFdlIHNob3VsZCBjbG9uZSB0aGUgY2hpbGROb2RlIHNpbmNlIHRoZXkncmUgY29udHJvbGxlZCBieSBSZWFjdCBhbmQgd2UgY2FuJ3QgcmV1c2UgaXQgd2l0aG91dCB3YXJuaW5nXHJcbiAgY29uc3QgY2hpbGROb2RlczogQ2hpbGROb2RlW10gPSBBcnJheS5wcm90b3R5cGUuc2xpY2VcclxuICAgIC5hcHBseShlbGxpcHNpc0NvbnRhaW5lci5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF0uY2xvbmVOb2RlKHRydWUpLmNoaWxkTm9kZXMpXHJcbiAgICAuZmlsdGVyKCh7IG5vZGVUeXBlIH06IENoaWxkTm9kZSkgPT4gbm9kZVR5cGUgIT09IENPTU1FTlRfTk9ERSk7XHJcbiAgY29uc3QgZml4ZWROb2RlczogQ2hpbGROb2RlW10gPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoXHJcbiAgICBlbGxpcHNpc0NvbnRhaW5lci5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMV0uY2xvbmVOb2RlKHRydWUpLmNoaWxkTm9kZXNcclxuICApO1xyXG4gIGVsbGlwc2lzQ29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lcik7XHJcblxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT0gRmluZCBtYXRjaCBlbGxpcHNpcyBjb250ZW50ID09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICBlbGxpcHNpc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgLy8gQ3JlYXRlIG9yaWdpbiBjb250ZW50IGhvbGRlclxyXG4gIGNvbnN0IGVsbGlwc2lzQ29udGVudEhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBlbGxpcHNpc0NvbnRhaW5lci5hcHBlbmRDaGlsZChlbGxpcHNpc0NvbnRlbnRIb2xkZXIpO1xyXG4gIGNvbnN0IGVsbGlwc2lzVGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShlbGxpcHNpc1N0cik7XHJcbiAgZWxsaXBzaXNDb250ZW50SG9sZGVyLmFwcGVuZENoaWxkKGVsbGlwc2lzVGV4dE5vZGUpO1xyXG5cclxuICBmaXhlZE5vZGVzLmZvckVhY2goY2hpbGROb2RlID0+IHtcclxuICAgIGVsbGlwc2lzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoaWxkTm9kZSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIEFwcGVuZCBiZWZvcmUgZml4ZWQgbm9kZXNcclxuICBmdW5jdGlvbiBhcHBlbmRDaGlsZE5vZGUobm9kZTogQ2hpbGROb2RlKTogdm9pZCB7XHJcbiAgICBlbGxpcHNpc0NvbnRlbnRIb2xkZXIuaW5zZXJ0QmVmb3JlKG5vZGUsIGVsbGlwc2lzVGV4dE5vZGUpO1xyXG4gIH1cclxuXHJcbiAgLy8gR2V0IG1heGltdW0gdGV4dFxyXG4gIGZ1bmN0aW9uIG1lYXN1cmVUZXh0KFxyXG4gICAgdGV4dE5vZGU6IFRleHQsXHJcbiAgICBmdWxsVGV4dDogc3RyaW5nLFxyXG4gICAgc3RhcnRMb2M6IG51bWJlciA9IDAsXHJcbiAgICBlbmRMb2M6IG51bWJlciA9IGZ1bGxUZXh0Lmxlbmd0aCxcclxuICAgIGxhc3RTdWNjZXNzTG9jOiBudW1iZXIgPSAwXHJcbiAgKTogTWVhc3VyZVJlc3VsdCB7XHJcbiAgICBjb25zdCBtaWRMb2MgPSBNYXRoLmZsb29yKChzdGFydExvYyArIGVuZExvYykgLyAyKTtcclxuICAgIGNvbnN0IGN1cnJlbnRUZXh0ID0gZnVsbFRleHQuc2xpY2UoMCwgbWlkTG9jKTtcclxuICAgIHRleHROb2RlLnRleHRDb250ZW50ID0gY3VycmVudFRleHQ7XHJcblxyXG4gICAgaWYgKHN0YXJ0TG9jID49IGVuZExvYyAtIDEpIHtcclxuICAgICAgLy8gTG9vcCB3aGVuIHN0ZXAgaXMgc21hbGxcclxuICAgICAgZm9yIChsZXQgc3RlcCA9IGVuZExvYzsgc3RlcCA+PSBzdGFydExvYzsgc3RlcCAtPSAxKSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFN0ZXBUZXh0ID0gZnVsbFRleHQuc2xpY2UoMCwgc3RlcCk7XHJcbiAgICAgICAgdGV4dE5vZGUudGV4dENvbnRlbnQgPSBjdXJyZW50U3RlcFRleHQ7XHJcblxyXG4gICAgICAgIGlmIChpblJhbmdlKCkpIHtcclxuICAgICAgICAgIHJldHVybiBzdGVwID09PSBmdWxsVGV4dC5sZW5ndGhcclxuICAgICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgICBmaW5pc2hlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBub2RlOiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShmdWxsVGV4dClcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDoge1xyXG4gICAgICAgICAgICAgICAgZmluaXNoZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBub2RlOiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjdXJyZW50U3RlcFRleHQpXHJcbiAgICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChpblJhbmdlKCkpIHtcclxuICAgICAgcmV0dXJuIG1lYXN1cmVUZXh0KHRleHROb2RlLCBmdWxsVGV4dCwgbWlkTG9jLCBlbmRMb2MsIG1pZExvYyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gbWVhc3VyZVRleHQodGV4dE5vZGUsIGZ1bGxUZXh0LCBzdGFydExvYywgbWlkTG9jLCBsYXN0U3VjY2Vzc0xvYyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtZWFzdXJlTm9kZShjaGlsZE5vZGU6IENoaWxkTm9kZSwgaW5kZXg6IG51bWJlcik6IE1lYXN1cmVSZXN1bHQge1xyXG4gICAgY29uc3QgdHlwZSA9IGNoaWxkTm9kZS5ub2RlVHlwZTtcclxuXHJcbiAgICBpZiAodHlwZSA9PT0gRUxFTUVOVF9OT0RFKSB7XHJcbiAgICAgIC8vIFdlIGRvbid0IHNwbGl0IGVsZW1lbnQsIGl0IHdpbGwga2VlcCBpZiB3aG9sZSBlbGVtZW50IGNhbiBiZSBkaXNwbGF5ZWQuXHJcbiAgICAgIC8vIGFwcGVuZENoaWxkTm9kZShjaGlsZE5vZGUpO1xyXG4gICAgICBpZiAoaW5SYW5nZSgpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGZpbmlzaGVkOiBmYWxzZSxcclxuICAgICAgICAgIG5vZGU6IGNvbnRlbnRMaXN0W2luZGV4XVxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIENsZWFuIHVwIGlmIGNhbiBub3QgcHVsbCBpblxyXG4gICAgICBlbGxpcHNpc0NvbnRlbnRIb2xkZXIucmVtb3ZlQ2hpbGQoY2hpbGROb2RlKTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBmaW5pc2hlZDogdHJ1ZSxcclxuICAgICAgICBub2RlOiBudWxsXHJcbiAgICAgIH07XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFRFWFRfTk9ERSkge1xyXG4gICAgICBjb25zdCBmdWxsVGV4dCA9IGNoaWxkTm9kZS50ZXh0Q29udGVudCB8fCAnJztcclxuICAgICAgY29uc3QgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShmdWxsVGV4dCk7XHJcbiAgICAgIGFwcGVuZENoaWxkTm9kZSh0ZXh0Tm9kZSk7XHJcbiAgICAgIHJldHVybiBtZWFzdXJlVGV4dCh0ZXh0Tm9kZSwgZnVsbFRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE5vdCBoYW5kbGUgb3RoZXIgdHlwZSBvZiBjb250ZW50XHJcbiAgICAvLyBQUzogVGhpcyBjb2RlIHNob3VsZCBub3QgYmUgYXR0YWNoZWQgYWZ0ZXIgcmVhY3QgMTZcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGZpbmlzaGVkOiBmYWxzZSxcclxuICAgICAgbm9kZTogbnVsbFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGVsbGlwc2lzTm9kZXM6IE5vZGVbXSA9IFtdO1xyXG4gIGNoaWxkTm9kZXMuc29tZSgoY2hpbGROb2RlLCBpbmRleCkgPT4ge1xyXG4gICAgY29uc3QgeyBmaW5pc2hlZCwgbm9kZSB9ID0gbWVhc3VyZU5vZGUoY2hpbGROb2RlLCBpbmRleCk7XHJcbiAgICBpZiAobm9kZSkge1xyXG4gICAgICBlbGxpcHNpc05vZGVzLnB1c2gobm9kZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmluaXNoZWQ7XHJcbiAgfSk7XHJcbiAgY29uc3QgcmVzdWx0ID0ge1xyXG4gICAgY29udGVudE5vZGVzOiBlbGxpcHNpc05vZGVzLFxyXG4gICAgdGV4dDogZWxsaXBzaXNDb250YWluZXIuaW5uZXJIVE1MLFxyXG4gICAgZWxsaXBzaXM6IHRydWVcclxuICB9O1xyXG4gIHdoaWxlIChlbGxpcHNpc0NvbnRhaW5lci5maXJzdENoaWxkKSB7XHJcbiAgICBlbGxpcHNpc0NvbnRhaW5lci5yZW1vdmVDaGlsZChlbGxpcHNpc0NvbnRhaW5lci5maXJzdENoaWxkKTtcclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG4iXX0=
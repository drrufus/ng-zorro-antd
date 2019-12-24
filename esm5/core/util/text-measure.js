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
export function pxToNumber(value) {
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
export function measure(originEle, rows, contentNodes, fixedContent, ellipsisStr) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1tZWFzdXJlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsidXRpbC90ZXh0LW1lYXN1cmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBT0gsc0NBQXNDO0FBQ3RDLElBQU0sWUFBWSxHQUFHLENBQUMsQ0FBQztBQUN2QixJQUFNLFNBQVMsR0FBRyxDQUFDLENBQUM7QUFDcEIsSUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFDO0FBRXZCLElBQUksaUJBQXVDLENBQUM7QUFFNUMsSUFBTSxZQUFZLEdBQUc7SUFDbkIsT0FBTyxFQUFFLEdBQUc7SUFDWixNQUFNLEVBQUUsR0FBRztJQUNYLE9BQU8sRUFBRSxRQUFRO0lBQ2pCLFVBQVUsRUFBRSxTQUFTO0NBQ3RCLENBQUM7QUFFRixNQUFNLFVBQVUsVUFBVSxDQUFDLEtBQW9CO0lBQzdDLElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDVixPQUFPLENBQUMsQ0FBQztLQUNWO0lBRUQsSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUUxQyxPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEMsQ0FBQztBQUVELFNBQVMsYUFBYSxDQUFDLEtBQTBCO0lBQy9DLDhEQUE4RDtJQUM5RCxrQ0FBa0M7SUFDbEMsSUFBTSxVQUFVLEdBQWEsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hFLE9BQU8sVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFHLElBQUksVUFBSyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQUcsRUFBM0MsQ0FBMkMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMs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QUFDO1FBQ3pELElBQUksSUFBSSxFQUFFO1lBQ1IsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMxQjtRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUMsQ0FBQyxDQUFDO0lBQ0gsSUFBTSxNQUFNLEdBQUc7UUFDYixZQUFZLEVBQUUsYUFBYTtRQUMzQixJQUFJLEVBQUUsaUJBQWlCLENBQUMsU0FBUztRQUNqQyxRQUFRLEVBQUUsSUFBSTtLQUNmLENBQUM7SUFDRixPQUFPLGlCQUFpQixDQUFDLFVBQVUsRUFBRTtRQUNuQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7S0FDN0Q7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1lYXN1cmVSZXN1bHQge1xyXG4gIGZpbmlzaGVkOiBib29sZWFuO1xyXG4gIG5vZGU6IE5vZGUgfCBudWxsO1xyXG59XHJcblxyXG4vLyBXZSBvbmx5IGhhbmRsZSBlbGVtZW50ICYgdGV4dCBub2RlLlxyXG5jb25zdCBFTEVNRU5UX05PREUgPSAxO1xyXG5jb25zdCBURVhUX05PREUgPSAzO1xyXG5jb25zdCBDT01NRU5UX05PREUgPSA4O1xyXG5cclxubGV0IGVsbGlwc2lzQ29udGFpbmVyOiBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuXHJcbmNvbnN0IHdyYXBwZXJTdHlsZSA9IHtcclxuICBwYWRkaW5nOiAnMCcsXHJcbiAgbWFyZ2luOiAnMCcsXHJcbiAgZGlzcGxheTogJ2lubGluZScsXHJcbiAgbGluZUhlaWdodDogJ2luaGVyaXQnXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcHhUb051bWJlcih2YWx1ZTogc3RyaW5nIHwgbnVsbCk6IG51bWJlciB7XHJcbiAgaWYgKCF2YWx1ZSkge1xyXG4gICAgcmV0dXJuIDA7XHJcbiAgfVxyXG5cclxuICBjb25zdCBtYXRjaCA9IHZhbHVlLm1hdGNoKC9eXFxkKihcXC5cXGQqKT8vKTtcclxuXHJcbiAgcmV0dXJuIG1hdGNoID8gTnVtYmVyKG1hdGNoWzBdKSA6IDA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0eWxlVG9TdHJpbmcoc3R5bGU6IENTU1N0eWxlRGVjbGFyYXRpb24pOiBzdHJpbmcge1xyXG4gIC8vIFRoZXJlIGFyZSBzb21lIGRpZmZlcmVudCBiZWhhdmlvciBiZXR3ZWVuIEZpcmVmb3ggJiBDaHJvbWUuXHJcbiAgLy8gV2UgaGF2ZSB0byBoYW5kbGUgdGhpcyBvdXJzZWxmLlxyXG4gIGNvbnN0IHN0eWxlTmFtZXM6IHN0cmluZ1tdID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KHN0eWxlKTtcclxuICByZXR1cm4gc3R5bGVOYW1lcy5tYXAobmFtZSA9PiBgJHtuYW1lfTogJHtzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpfTtgKS5qb2luKCcnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWVyZ2VDaGlsZHJlbihjaGlsZHJlbjogTm9kZVtdKTogTm9kZVtdIHtcclxuICBjb25zdCBjaGlsZExpc3Q6IE5vZGVbXSA9IFtdO1xyXG5cclxuICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZDogTm9kZSkgPT4ge1xyXG4gICAgY29uc3QgcHJldkNoaWxkID0gY2hpbGRMaXN0W2NoaWxkTGlzdC5sZW5ndGggLSAxXTtcclxuICAgIGlmIChwcmV2Q2hpbGQgJiYgY2hpbGQubm9kZVR5cGUgPT09IFRFWFRfTk9ERSAmJiBwcmV2Q2hpbGQubm9kZVR5cGUgPT09IFRFWFRfTk9ERSkge1xyXG4gICAgICAocHJldkNoaWxkIGFzIFRleHQpLmRhdGEgKz0gKGNoaWxkIGFzIFRleHQpLmRhdGE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjaGlsZExpc3QucHVzaChjaGlsZCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBjaGlsZExpc3Q7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtZWFzdXJlKFxyXG4gIG9yaWdpbkVsZTogSFRNTEVsZW1lbnQsXHJcbiAgcm93czogbnVtYmVyLFxyXG4gIGNvbnRlbnROb2RlczogTm9kZVtdLFxyXG4gIGZpeGVkQ29udGVudDogSFRNTEVsZW1lbnRbXSxcclxuICBlbGxpcHNpc1N0cjogc3RyaW5nXHJcbik6IHsgY29udGVudE5vZGVzOiBOb2RlW107IHRleHQ6IHN0cmluZzsgZWxsaXBzaXM6IGJvb2xlYW4gfSB7XHJcbiAgaWYgKCFlbGxpcHNpc0NvbnRhaW5lcikge1xyXG4gICAgZWxsaXBzaXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGVsbGlwc2lzQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGxpcHNpc0NvbnRhaW5lcik7XHJcbiAgfVxyXG5cclxuICAvLyBHZXQgb3JpZ2luIHN0eWxlXHJcbiAgY29uc3Qgb3JpZ2luU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShvcmlnaW5FbGUpO1xyXG4gIGNvbnN0IG9yaWdpbkNTUyA9IHN0eWxlVG9TdHJpbmcob3JpZ2luU3R5bGUpO1xyXG4gIGNvbnN0IGxpbmVIZWlnaHQgPSBweFRvTnVtYmVyKG9yaWdpblN0eWxlLmxpbmVIZWlnaHQpO1xyXG4gIGNvbnN0IG1heEhlaWdodCA9IGxpbmVIZWlnaHQgKiAocm93cyArIDEpICsgcHhUb051bWJlcihvcmlnaW5TdHlsZS5wYWRkaW5nVG9wKSArIHB4VG9OdW1iZXIob3JpZ2luU3R5bGUucGFkZGluZ0JvdHRvbSk7XHJcbiAgLy8gU2V0IHNoYWRvd1xyXG4gIGVsbGlwc2lzQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBvcmlnaW5DU1MpO1xyXG4gIGVsbGlwc2lzQ29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcclxuICBlbGxpcHNpc0NvbnRhaW5lci5zdHlsZS5sZWZ0ID0gJzAnO1xyXG4gIGVsbGlwc2lzQ29udGFpbmVyLnN0eWxlLmhlaWdodCA9ICdhdXRvJztcclxuICBlbGxpcHNpc0NvbnRhaW5lci5zdHlsZS5taW5IZWlnaHQgPSAnYXV0byc7XHJcbiAgZWxsaXBzaXNDb250YWluZXIuc3R5bGUubWF4SGVpZ2h0ID0gJ2F1dG8nO1xyXG4gIGVsbGlwc2lzQ29udGFpbmVyLnN0eWxlLnRvcCA9ICctOTk5OTk5cHgnO1xyXG4gIGVsbGlwc2lzQ29udGFpbmVyLnN0eWxlLnpJbmRleCA9ICctMTAwMCc7XHJcblxyXG4gIC8vIGNsZWFuIHVwIGNzcyBvdmVyZmxvd1xyXG4gIGVsbGlwc2lzQ29udGFpbmVyLnN0eWxlLnRleHRPdmVyZmxvdyA9ICdjbGlwJztcclxuICBlbGxpcHNpc0NvbnRhaW5lci5zdHlsZS53aGl0ZVNwYWNlID0gJ25vcm1hbCc7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWFueVxyXG4gIChlbGxpcHNpc0NvbnRhaW5lci5zdHlsZSBhcyBhbnkpLndlYmtpdExpbmVDbGFtcCA9ICdub25lJztcclxuXHJcbiAgY29uc3QgY29udGVudExpc3QgPSBtZXJnZUNoaWxkcmVuKGNvbnRlbnROb2Rlcyk7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBjb25zdCBmaXhlZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHJcbiAgLy8gQWRkIHN0eWxlcyBpbiBjb250YWluZXJcclxuICBPYmplY3QuYXNzaWduKGNvbnRhaW5lci5zdHlsZSwgd3JhcHBlclN0eWxlKTtcclxuICBPYmplY3QuYXNzaWduKGNvbnRlbnRDb250YWluZXIuc3R5bGUsIHdyYXBwZXJTdHlsZSk7XHJcbiAgT2JqZWN0LmFzc2lnbihmaXhlZENvbnRhaW5lci5zdHlsZSwgd3JhcHBlclN0eWxlKTtcclxuXHJcbiAgY29udGVudExpc3QuZm9yRWFjaChuID0+IHtcclxuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobik7XHJcbiAgfSk7XHJcbiAgZml4ZWRDb250ZW50LmZvckVhY2gobm9kZSA9PiB7XHJcbiAgICBmaXhlZENvbnRhaW5lci5hcHBlbmRDaGlsZChub2RlLmNsb25lTm9kZSh0cnVlKSk7XHJcbiAgfSk7XHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnRDb250YWluZXIpO1xyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmaXhlZENvbnRhaW5lcik7XHJcblxyXG4gIC8vIFJlbmRlciBpbiB0aGUgZmFrZSBjb250YWluZXJcclxuICBlbGxpcHNpc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG5cclxuICAvLyBDaGVjayBpZiBlbGxpcHNpcyBpbiBtZWFzdXJlIGRpdiBpcyBoZWlnaHQgZW5vdWdoIGZvciBjb250ZW50XHJcbiAgZnVuY3Rpb24gaW5SYW5nZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBlbGxpcHNpc0NvbnRhaW5lci5vZmZzZXRIZWlnaHQgPCBtYXhIZWlnaHQ7XHJcbiAgfVxyXG5cclxuICBpZiAoaW5SYW5nZSgpKSB7XHJcbiAgICBjb25zdCB0ZXh0ID0gZWxsaXBzaXNDb250YWluZXIuaW5uZXJIVE1MO1xyXG4gICAgZWxsaXBzaXNDb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyKTtcclxuICAgIHJldHVybiB7IGNvbnRlbnROb2RlcywgdGV4dCwgZWxsaXBzaXM6IGZhbHNlIH07XHJcbiAgfVxyXG5cclxuICAvLyBXZSBzaG91bGQgY2xvbmUgdGhlIGNoaWxkTm9kZSBzaW5jZSB0aGV5J3JlIGNvbnRyb2xsZWQgYnkgUmVhY3QgYW5kIHdlIGNhbid0IHJldXNlIGl0IHdpdGhvdXQgd2FybmluZ1xyXG4gIGNvbnN0IGNoaWxkTm9kZXM6IENoaWxkTm9kZVtdID0gQXJyYXkucHJvdG90eXBlLnNsaWNlXHJcbiAgICAuYXBwbHkoZWxsaXBzaXNDb250YWluZXIuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdLmNsb25lTm9kZSh0cnVlKS5jaGlsZE5vZGVzKVxyXG4gICAgLmZpbHRlcigoeyBub2RlVHlwZSB9OiBDaGlsZE5vZGUpID0+IG5vZGVUeXBlICE9PSBDT01NRU5UX05PREUpO1xyXG4gIGNvbnN0IGZpeGVkTm9kZXM6IENoaWxkTm9kZVtdID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGVsbGlwc2lzQ29udGFpbmVyLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1sxXS5jbG9uZU5vZGUodHJ1ZSkuY2hpbGROb2Rlcyk7XHJcbiAgZWxsaXBzaXNDb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyKTtcclxuXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PSBGaW5kIG1hdGNoIGVsbGlwc2lzIGNvbnRlbnQgPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIGVsbGlwc2lzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAvLyBDcmVhdGUgb3JpZ2luIGNvbnRlbnQgaG9sZGVyXHJcbiAgY29uc3QgZWxsaXBzaXNDb250ZW50SG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIGVsbGlwc2lzQ29udGFpbmVyLmFwcGVuZENoaWxkKGVsbGlwc2lzQ29udGVudEhvbGRlcik7XHJcbiAgY29uc3QgZWxsaXBzaXNUZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGVsbGlwc2lzU3RyKTtcclxuICBlbGxpcHNpc0NvbnRlbnRIb2xkZXIuYXBwZW5kQ2hpbGQoZWxsaXBzaXNUZXh0Tm9kZSk7XHJcblxyXG4gIGZpeGVkTm9kZXMuZm9yRWFjaChjaGlsZE5vZGUgPT4ge1xyXG4gICAgZWxsaXBzaXNDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hpbGROb2RlKTtcclxuICB9KTtcclxuXHJcbiAgLy8gQXBwZW5kIGJlZm9yZSBmaXhlZCBub2Rlc1xyXG4gIGZ1bmN0aW9uIGFwcGVuZENoaWxkTm9kZShub2RlOiBDaGlsZE5vZGUpOiB2b2lkIHtcclxuICAgIGVsbGlwc2lzQ29udGVudEhvbGRlci5pbnNlcnRCZWZvcmUobm9kZSwgZWxsaXBzaXNUZXh0Tm9kZSk7XHJcbiAgfVxyXG5cclxuICAvLyBHZXQgbWF4aW11bSB0ZXh0XHJcbiAgZnVuY3Rpb24gbWVhc3VyZVRleHQoXHJcbiAgICB0ZXh0Tm9kZTogVGV4dCxcclxuICAgIGZ1bGxUZXh0OiBzdHJpbmcsXHJcbiAgICBzdGFydExvYzogbnVtYmVyID0gMCxcclxuICAgIGVuZExvYzogbnVtYmVyID0gZnVsbFRleHQubGVuZ3RoLFxyXG4gICAgbGFzdFN1Y2Nlc3NMb2M6IG51bWJlciA9IDBcclxuICApOiBNZWFzdXJlUmVzdWx0IHtcclxuICAgIGNvbnN0IG1pZExvYyA9IE1hdGguZmxvb3IoKHN0YXJ0TG9jICsgZW5kTG9jKSAvIDIpO1xyXG4gICAgY29uc3QgY3VycmVudFRleHQgPSBmdWxsVGV4dC5zbGljZSgwLCBtaWRMb2MpO1xyXG4gICAgdGV4dE5vZGUudGV4dENvbnRlbnQgPSBjdXJyZW50VGV4dDtcclxuXHJcbiAgICBpZiAoc3RhcnRMb2MgPj0gZW5kTG9jIC0gMSkge1xyXG4gICAgICAvLyBMb29wIHdoZW4gc3RlcCBpcyBzbWFsbFxyXG4gICAgICBmb3IgKGxldCBzdGVwID0gZW5kTG9jOyBzdGVwID49IHN0YXJ0TG9jOyBzdGVwIC09IDEpIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50U3RlcFRleHQgPSBmdWxsVGV4dC5zbGljZSgwLCBzdGVwKTtcclxuICAgICAgICB0ZXh0Tm9kZS50ZXh0Q29udGVudCA9IGN1cnJlbnRTdGVwVGV4dDtcclxuXHJcbiAgICAgICAgaWYgKGluUmFuZ2UoKSkge1xyXG4gICAgICAgICAgcmV0dXJuIHN0ZXAgPT09IGZ1bGxUZXh0Lmxlbmd0aFxyXG4gICAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICAgIGZpbmlzaGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG5vZGU6IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGZ1bGxUZXh0KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgOiB7XHJcbiAgICAgICAgICAgICAgICBmaW5pc2hlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG5vZGU6IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGN1cnJlbnRTdGVwVGV4dClcclxuICAgICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGluUmFuZ2UoKSkge1xyXG4gICAgICByZXR1cm4gbWVhc3VyZVRleHQodGV4dE5vZGUsIGZ1bGxUZXh0LCBtaWRMb2MsIGVuZExvYywgbWlkTG9jKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBtZWFzdXJlVGV4dCh0ZXh0Tm9kZSwgZnVsbFRleHQsIHN0YXJ0TG9jLCBtaWRMb2MsIGxhc3RTdWNjZXNzTG9jKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1lYXN1cmVOb2RlKGNoaWxkTm9kZTogQ2hpbGROb2RlLCBpbmRleDogbnVtYmVyKTogTWVhc3VyZVJlc3VsdCB7XHJcbiAgICBjb25zdCB0eXBlID0gY2hpbGROb2RlLm5vZGVUeXBlO1xyXG5cclxuICAgIGlmICh0eXBlID09PSBFTEVNRU5UX05PREUpIHtcclxuICAgICAgLy8gV2UgZG9uJ3Qgc3BsaXQgZWxlbWVudCwgaXQgd2lsbCBrZWVwIGlmIHdob2xlIGVsZW1lbnQgY2FuIGJlIGRpc3BsYXllZC5cclxuICAgICAgLy8gYXBwZW5kQ2hpbGROb2RlKGNoaWxkTm9kZSk7XHJcbiAgICAgIGlmIChpblJhbmdlKCkpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgZmluaXNoZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgbm9kZTogY29udGVudExpc3RbaW5kZXhdXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQ2xlYW4gdXAgaWYgY2FuIG5vdCBwdWxsIGluXHJcbiAgICAgIGVsbGlwc2lzQ29udGVudEhvbGRlci5yZW1vdmVDaGlsZChjaGlsZE5vZGUpO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGZpbmlzaGVkOiB0cnVlLFxyXG4gICAgICAgIG5vZGU6IG51bGxcclxuICAgICAgfTtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gVEVYVF9OT0RFKSB7XHJcbiAgICAgIGNvbnN0IGZ1bGxUZXh0ID0gY2hpbGROb2RlLnRleHRDb250ZW50IHx8ICcnO1xyXG4gICAgICBjb25zdCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGZ1bGxUZXh0KTtcclxuICAgICAgYXBwZW5kQ2hpbGROb2RlKHRleHROb2RlKTtcclxuICAgICAgcmV0dXJuIG1lYXN1cmVUZXh0KHRleHROb2RlLCBmdWxsVGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTm90IGhhbmRsZSBvdGhlciB0eXBlIG9mIGNvbnRlbnRcclxuICAgIC8vIFBTOiBUaGlzIGNvZGUgc2hvdWxkIG5vdCBiZSBhdHRhY2hlZCBhZnRlciByZWFjdCAxNlxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZmluaXNoZWQ6IGZhbHNlLFxyXG4gICAgICBub2RlOiBudWxsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZWxsaXBzaXNOb2RlczogTm9kZVtdID0gW107XHJcbiAgY2hpbGROb2Rlcy5zb21lKChjaGlsZE5vZGUsIGluZGV4KSA9PiB7XHJcbiAgICBjb25zdCB7IGZpbmlzaGVkLCBub2RlIH0gPSBtZWFzdXJlTm9kZShjaGlsZE5vZGUsIGluZGV4KTtcclxuICAgIGlmIChub2RlKSB7XHJcbiAgICAgIGVsbGlwc2lzTm9kZXMucHVzaChub2RlKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmaW5pc2hlZDtcclxuICB9KTtcclxuICBjb25zdCByZXN1bHQgPSB7XHJcbiAgICBjb250ZW50Tm9kZXM6IGVsbGlwc2lzTm9kZXMsXHJcbiAgICB0ZXh0OiBlbGxpcHNpc0NvbnRhaW5lci5pbm5lckhUTUwsXHJcbiAgICBlbGxpcHNpczogdHJ1ZVxyXG4gIH07XHJcbiAgd2hpbGUgKGVsbGlwc2lzQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcclxuICAgIGVsbGlwc2lzQ29udGFpbmVyLnJlbW92ZUNoaWxkKGVsbGlwc2lzQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbiJdfQ==
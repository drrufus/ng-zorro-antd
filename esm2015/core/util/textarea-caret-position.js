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
// from https://github.com/component/textarea-caret-position
// We'll copy the properties below into the mirror div.
// Note that some browsers, such as Firefox, do not concatenate properties
// into their shorthand (e.g. padding-top, padding-bottom etc. -> padding),
// so we have to list every single property explicitly.
/** @type {?} */
export const properties = [
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
/** @type {?} */
const isBrowser = typeof window !== 'undefined';
// tslint:disable-next-line:no-any
/** @type {?} */
const isFirefox = isBrowser && ((/** @type {?} */ (window))).mozInnerScreenX != null;
/** @type {?} */
const _parseInt = (/**
 * @param {?} str
 * @return {?}
 */
(str) => parseInt(str, 10));
const ɵ0 = _parseInt;
/**
 * @record
 */
export function Coordinates() { }
if (false) {
    /** @type {?} */
    Coordinates.prototype.top;
    /** @type {?} */
    Coordinates.prototype.left;
    /** @type {?} */
    Coordinates.prototype.height;
}
/**
 * @param {?} element
 * @param {?} position
 * @param {?=} options
 * @return {?}
 */
export function getCaretCoordinates(element, position, options) {
    if (!isBrowser) {
        throw new Error('textarea-caret-position#getCaretCoordinates should only be called in a browser');
    }
    /** @type {?} */
    const debug = (options && options.debug) || false;
    if (debug) {
        /** @type {?} */
        const el = document.querySelector('#input-textarea-caret-position-mirror-div');
        if (el) {
            (/** @type {?} */ (el.parentNode)).removeChild(el);
        }
    }
    // The mirror div will replicate the textarea's style
    /** @type {?} */
    const div = document.createElement('div');
    div.id = 'input-textarea-caret-position-mirror-div';
    document.body.appendChild(div);
    /** @type {?} */
    const style = div.style;
    // tslint:disable-next-line:no-any
    /** @type {?} */
    const computed = window.getComputedStyle ? window.getComputedStyle(element) : ((/** @type {?} */ (element))).currentStyle;
    // currentStyle for IE < 9
    /** @type {?} */
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
    properties.forEach((/**
     * @param {?} prop
     * @return {?}
     */
    (prop) => {
        if (isInput && prop === 'lineHeight') {
            // Special case for <input>s because text is rendered centered and line height may be != height
            style.lineHeight = computed.height;
        }
        else {
            // @ts-ignore
            style[prop] = computed[prop];
        }
    }));
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
    /** @type {?} */
    const span = document.createElement('span');
    // Wrapping must be replicated *exactly*, including when a long word gets
    // onto the next line, with whitespace at the end of the line before (#7).
    // The  *only* reliable way to do that is to copy the *entire* rest of the
    // textarea's content into the <span> created at the caret position.
    // For inputs, just '.' would be enough, but no need to bother.
    span.textContent = element.value.substring(position) || '.'; // || because a completely empty faux span doesn't render at all
    div.appendChild(span);
    /** @type {?} */
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
/**
 * @param {?} element
 * @param {?} coordinates
 * @return {?}
 */
export function createDebugEle(element, coordinates) {
    /** @type {?} */
    const fontSize = getComputedStyle(element).getPropertyValue('font-size');
    /** @type {?} */
    const rect = ((/** @type {?} */ (document.querySelector('#DEBUG')))) || document.createElement('div');
    document.body.appendChild(rect);
    rect.id = 'DEBUG';
    rect.style.position = 'absolute';
    rect.style.backgroundColor = 'red';
    rect.style.height = fontSize;
    rect.style.width = '1px';
    rect.style.top = `${element.getBoundingClientRect().top -
        element.scrollTop +
        window.pageYOffset +
        coordinates.top}px`;
    rect.style.left = `${element.getBoundingClientRect().left -
        element.scrollLeft +
        window.pageXOffset +
        coordinates.left}px`;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEtY2FyZXQtcG9zaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJ1dGlsL3RleHRhcmVhLWNhcmV0LXBvc2l0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY0EsTUFBTSxPQUFPLFVBQVUsR0FBRztJQUN4QixXQUFXO0lBQ1gsV0FBVztJQUNYLE9BQU87SUFDUCxRQUFRO0lBQ1IsV0FBVztJQUNYLFdBQVc7SUFFWCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsYUFBYTtJQUViLFlBQVk7SUFDWixjQUFjO0lBQ2QsZUFBZTtJQUNmLGFBQWE7SUFFYix3REFBd0Q7SUFDeEQsV0FBVztJQUNYLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7SUFFWixXQUFXO0lBQ1gsZUFBZTtJQUNmLFlBQVk7SUFDWixnQkFBZ0I7SUFFaEIsZUFBZTtJQUNmLGFBQWE7SUFFYixTQUFTO0lBQ1QsWUFBWTtDQUNiOztNQUVLLFNBQVMsR0FBRyxPQUFPLE1BQU0sS0FBSyxXQUFXOzs7TUFHekMsU0FBUyxHQUFHLFNBQVMsSUFBSSxDQUFDLG1CQUFBLE1BQU0sRUFBTyxDQUFDLENBQUMsZUFBZSxJQUFJLElBQUk7O01BRWhFLFNBQVM7Ozs7QUFBRyxDQUFDLEdBQVcsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQTs7Ozs7QUFFcEQsaUNBSUM7OztJQUhDLDBCQUFZOztJQUNaLDJCQUFhOztJQUNiLDZCQUFlOzs7Ozs7OztBQUdqQixNQUFNLFVBQVUsbUJBQW1CLENBQ2pDLE9BQStDLEVBQy9DLFFBQWdCLEVBQ2hCLE9BQTZCO0lBRTdCLElBQUksQ0FBQyxTQUFTLEVBQUU7UUFDZCxNQUFNLElBQUksS0FB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QUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixFQUFFLENBQUMsR0FBRztRQUNyRCxPQUFPLENBQUMsU0FBUztRQUNqQixNQUFNLENBQUMsV0FBVztRQUNsQixXQUFXLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxJQUFJO1FBQ3ZELE9BQU8sQ0FBQyxVQUFVO1FBQ2xCLE1BQU0sQ0FBQyxXQUFXO1FBQ2xCLFdBQVcsQ0FBQyxJQUFJLElBQUksQ0FBQztBQUN6QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG4vLyBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9jb21wb25lbnQvdGV4dGFyZWEtY2FyZXQtcG9zaXRpb25cclxuXHJcbi8vIFdlJ2xsIGNvcHkgdGhlIHByb3BlcnRpZXMgYmVsb3cgaW50byB0aGUgbWlycm9yIGRpdi5cclxuLy8gTm90ZSB0aGF0IHNvbWUgYnJvd3NlcnMsIHN1Y2ggYXMgRmlyZWZveCwgZG8gbm90IGNvbmNhdGVuYXRlIHByb3BlcnRpZXNcclxuLy8gaW50byB0aGVpciBzaG9ydGhhbmQgKGUuZy4gcGFkZGluZy10b3AsIHBhZGRpbmctYm90dG9tIGV0Yy4gLT4gcGFkZGluZyksXHJcbi8vIHNvIHdlIGhhdmUgdG8gbGlzdCBldmVyeSBzaW5nbGUgcHJvcGVydHkgZXhwbGljaXRseS5cclxuZXhwb3J0IGNvbnN0IHByb3BlcnRpZXMgPSBbXHJcbiAgJ2RpcmVjdGlvbicsIC8vIFJUTCBzdXBwb3J0XHJcbiAgJ2JveFNpemluZycsXHJcbiAgJ3dpZHRoJywgLy8gb24gQ2hyb21lIGFuZCBJRSwgZXhjbHVkZSB0aGUgc2Nyb2xsYmFyLCBzbyB0aGUgbWlycm9yIGRpdiB3cmFwcyBleGFjdGx5IGFzIHRoZSB0ZXh0YXJlYSBkb2VzXHJcbiAgJ2hlaWdodCcsXHJcbiAgJ292ZXJmbG93WCcsXHJcbiAgJ292ZXJmbG93WScsIC8vIGNvcHkgdGhlIHNjcm9sbGJhciBmb3IgSUVcclxuXHJcbiAgJ2JvcmRlclRvcFdpZHRoJyxcclxuICAnYm9yZGVyUmlnaHRXaWR0aCcsXHJcbiAgJ2JvcmRlckJvdHRvbVdpZHRoJyxcclxuICAnYm9yZGVyTGVmdFdpZHRoJyxcclxuICAnYm9yZGVyU3R5bGUnLFxyXG5cclxuICAncGFkZGluZ1RvcCcsXHJcbiAgJ3BhZGRpbmdSaWdodCcsXHJcbiAgJ3BhZGRpbmdCb3R0b20nLFxyXG4gICdwYWRkaW5nTGVmdCcsXHJcblxyXG4gIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9mb250XHJcbiAgJ2ZvbnRTdHlsZScsXHJcbiAgJ2ZvbnRWYXJpYW50JyxcclxuICAnZm9udFdlaWdodCcsXHJcbiAgJ2ZvbnRTdHJldGNoJyxcclxuICAnZm9udFNpemUnLFxyXG4gICdmb250U2l6ZUFkanVzdCcsXHJcbiAgJ2xpbmVIZWlnaHQnLFxyXG4gICdmb250RmFtaWx5JyxcclxuXHJcbiAgJ3RleHRBbGlnbicsXHJcbiAgJ3RleHRUcmFuc2Zvcm0nLFxyXG4gICd0ZXh0SW5kZW50JyxcclxuICAndGV4dERlY29yYXRpb24nLCAvLyBtaWdodCBub3QgbWFrZSBhIGRpZmZlcmVuY2UsIGJ1dCBiZXR0ZXIgYmUgc2FmZVxyXG5cclxuICAnbGV0dGVyU3BhY2luZycsXHJcbiAgJ3dvcmRTcGFjaW5nJyxcclxuXHJcbiAgJ3RhYlNpemUnLFxyXG4gICdNb3pUYWJTaXplJ1xyXG5dO1xyXG5cclxuY29uc3QgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XHJcblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbmNvbnN0IGlzRmlyZWZveCA9IGlzQnJvd3NlciAmJiAod2luZG93IGFzIGFueSkubW96SW5uZXJTY3JlZW5YICE9IG51bGw7XHJcblxyXG5jb25zdCBfcGFyc2VJbnQgPSAoc3RyOiBzdHJpbmcpID0+IHBhcnNlSW50KHN0ciwgMTApO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb29yZGluYXRlcyB7XHJcbiAgdG9wOiBudW1iZXI7XHJcbiAgbGVmdDogbnVtYmVyO1xyXG4gIGhlaWdodDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2FyZXRDb29yZGluYXRlcyhcclxuICBlbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFRleHRBcmVhRWxlbWVudCxcclxuICBwb3NpdGlvbjogbnVtYmVyLFxyXG4gIG9wdGlvbnM/OiB7IGRlYnVnPzogYm9vbGVhbiB9XHJcbik6IENvb3JkaW5hdGVzIHtcclxuICBpZiAoIWlzQnJvd3Nlcikge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCd0ZXh0YXJlYS1jYXJldC1wb3NpdGlvbiNnZXRDYXJldENvb3JkaW5hdGVzIHNob3VsZCBvbmx5IGJlIGNhbGxlZCBpbiBhIGJyb3dzZXInKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGRlYnVnID0gKG9wdGlvbnMgJiYgb3B0aW9ucy5kZWJ1ZykgfHwgZmFsc2U7XHJcbiAgaWYgKGRlYnVnKSB7XHJcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dC10ZXh0YXJlYS1jYXJldC1wb3NpdGlvbi1taXJyb3ItZGl2Jyk7XHJcbiAgICBpZiAoZWwpIHtcclxuICAgICAgZWwucGFyZW50Tm9kZSEucmVtb3ZlQ2hpbGQoZWwpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gVGhlIG1pcnJvciBkaXYgd2lsbCByZXBsaWNhdGUgdGhlIHRleHRhcmVhJ3Mgc3R5bGVcclxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBkaXYuaWQgPSAnaW5wdXQtdGV4dGFyZWEtY2FyZXQtcG9zaXRpb24tbWlycm9yLWRpdic7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xyXG5cclxuICBjb25zdCBzdHlsZSA9IGRpdi5zdHlsZTtcclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIGNvbnN0IGNvbXB1dGVkID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUgPyB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KSA6IChlbGVtZW50IGFzIGFueSkuY3VycmVudFN0eWxlOyAvLyBjdXJyZW50U3R5bGUgZm9yIElFIDwgOVxyXG4gIGNvbnN0IGlzSW5wdXQgPSBlbGVtZW50Lm5vZGVOYW1lID09PSAnSU5QVVQnO1xyXG5cclxuICAvLyBEZWZhdWx0IHRleHRhcmVhIHN0eWxlc1xyXG4gIHN0eWxlLndoaXRlU3BhY2UgPSAncHJlLXdyYXAnO1xyXG4gIGlmICghaXNJbnB1dCkge1xyXG4gICAgc3R5bGUud29yZFdyYXAgPSAnYnJlYWstd29yZCc7IC8vIG9ubHkgZm9yIHRleHRhcmVhLXNcclxuICB9XHJcblxyXG4gIC8vIFBvc2l0aW9uIG9mZi1zY3JlZW5cclxuICBzdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7IC8vIHJlcXVpcmVkIHRvIHJldHVybiBjb29yZGluYXRlcyBwcm9wZXJseVxyXG4gIGlmICghZGVidWcpIHtcclxuICAgIHN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICB9IC8vIG5vdCAnZGlzcGxheTogbm9uZScgYmVjYXVzZSB3ZSB3YW50IHJlbmRlcmluZ1xyXG5cclxuICAvLyBUcmFuc2ZlciB0aGUgZWxlbWVudCdzIHByb3BlcnRpZXMgdG8gdGhlIGRpdlxyXG4gIHByb3BlcnRpZXMuZm9yRWFjaCgocHJvcDogc3RyaW5nKSA9PiB7XHJcbiAgICBpZiAoaXNJbnB1dCAmJiBwcm9wID09PSAnbGluZUhlaWdodCcpIHtcclxuICAgICAgLy8gU3BlY2lhbCBjYXNlIGZvciA8aW5wdXQ+cyBiZWNhdXNlIHRleHQgaXMgcmVuZGVyZWQgY2VudGVyZWQgYW5kIGxpbmUgaGVpZ2h0IG1heSBiZSAhPSBoZWlnaHRcclxuICAgICAgc3R5bGUubGluZUhlaWdodCA9IGNvbXB1dGVkLmhlaWdodDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgc3R5bGVbcHJvcF0gPSBjb21wdXRlZFtwcm9wXTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgaWYgKGlzRmlyZWZveCkge1xyXG4gICAgLy8gRmlyZWZveCBsaWVzIGFib3V0IHRoZSBvdmVyZmxvdyBwcm9wZXJ0eSBmb3IgdGV4dGFyZWFzOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD05ODQyNzVcclxuICAgIGlmIChlbGVtZW50LnNjcm9sbEhlaWdodCA+IF9wYXJzZUludChjb21wdXRlZC5oZWlnaHQpKSB7XHJcbiAgICAgIHN0eWxlLm92ZXJmbG93WSA9ICdzY3JvbGwnO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBzdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nOyAvLyBmb3IgQ2hyb21lIHRvIG5vdCByZW5kZXIgYSBzY3JvbGxiYXI7IElFIGtlZXBzIG92ZXJmbG93WSA9ICdzY3JvbGwnXHJcbiAgfVxyXG5cclxuICBkaXYudGV4dENvbnRlbnQgPSBlbGVtZW50LnZhbHVlLnN1YnN0cmluZygwLCBwb3NpdGlvbik7XHJcbiAgLy8gVGhlIHNlY29uZCBzcGVjaWFsIGhhbmRsaW5nIGZvciBpbnB1dCB0eXBlPVwidGV4dFwiIHZzIHRleHRhcmVhOlxyXG4gIC8vIHNwYWNlcyBuZWVkIHRvIGJlIHJlcGxhY2VkIHdpdGggbm9uLWJyZWFraW5nIHNwYWNlcyAtIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzEzNDAyMDM1LzEyNjkwMzdcclxuICBpZiAoaXNJbnB1dCkge1xyXG4gICAgZGl2LnRleHRDb250ZW50ID0gZGl2LnRleHRDb250ZW50LnJlcGxhY2UoL1xccy9nLCAnXFx1MDBhMCcpO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAvLyBXcmFwcGluZyBtdXN0IGJlIHJlcGxpY2F0ZWQgKmV4YWN0bHkqLCBpbmNsdWRpbmcgd2hlbiBhIGxvbmcgd29yZCBnZXRzXHJcbiAgLy8gb250byB0aGUgbmV4dCBsaW5lLCB3aXRoIHdoaXRlc3BhY2UgYXQgdGhlIGVuZCBvZiB0aGUgbGluZSBiZWZvcmUgKCM3KS5cclxuICAvLyBUaGUgICpvbmx5KiByZWxpYWJsZSB3YXkgdG8gZG8gdGhhdCBpcyB0byBjb3B5IHRoZSAqZW50aXJlKiByZXN0IG9mIHRoZVxyXG4gIC8vIHRleHRhcmVhJ3MgY29udGVudCBpbnRvIHRoZSA8c3Bhbj4gY3JlYXRlZCBhdCB0aGUgY2FyZXQgcG9zaXRpb24uXHJcbiAgLy8gRm9yIGlucHV0cywganVzdCAnLicgd291bGQgYmUgZW5vdWdoLCBidXQgbm8gbmVlZCB0byBib3RoZXIuXHJcbiAgc3Bhbi50ZXh0Q29udGVudCA9IGVsZW1lbnQudmFsdWUuc3Vic3RyaW5nKHBvc2l0aW9uKSB8fCAnLic7IC8vIHx8IGJlY2F1c2UgYSBjb21wbGV0ZWx5IGVtcHR5IGZhdXggc3BhbiBkb2Vzbid0IHJlbmRlciBhdCBhbGxcclxuICBkaXYuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcblxyXG4gIGNvbnN0IGNvb3JkaW5hdGVzID0ge1xyXG4gICAgdG9wOiBzcGFuLm9mZnNldFRvcCArIF9wYXJzZUludChjb21wdXRlZC5ib3JkZXJUb3BXaWR0aCksXHJcbiAgICBsZWZ0OiBzcGFuLm9mZnNldExlZnQgKyBfcGFyc2VJbnQoY29tcHV0ZWQuYm9yZGVyTGVmdFdpZHRoKSxcclxuICAgIGhlaWdodDogX3BhcnNlSW50KGNvbXB1dGVkLmxpbmVIZWlnaHQpXHJcbiAgfTtcclxuXHJcbiAgaWYgKGRlYnVnKSB7XHJcbiAgICBzcGFuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZWVlJztcclxuICAgIGNyZWF0ZURlYnVnRWxlKGVsZW1lbnQsIGNvb3JkaW5hdGVzKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkaXYpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvb3JkaW5hdGVzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGVidWdFbGUoZWxlbWVudDogSFRNTElucHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnQsIGNvb3JkaW5hdGVzOiBDb29yZGluYXRlcyk6IHZvaWQge1xyXG4gIGNvbnN0IGZvbnRTaXplID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKCdmb250LXNpemUnKTtcclxuICBjb25zdCByZWN0OiBIVE1MU3BhbkVsZW1lbnQgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0RFQlVHJykgYXMgSFRNTFNwYW5FbGVtZW50KSB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJlY3QpO1xyXG4gIHJlY3QuaWQgPSAnREVCVUcnO1xyXG4gIHJlY3Quc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gIHJlY3Quc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XHJcbiAgcmVjdC5zdHlsZS5oZWlnaHQgPSBmb250U2l6ZTtcclxuICByZWN0LnN0eWxlLndpZHRoID0gJzFweCc7XHJcbiAgcmVjdC5zdHlsZS50b3AgPSBgJHtlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtXHJcbiAgICBlbGVtZW50LnNjcm9sbFRvcCArXHJcbiAgICB3aW5kb3cucGFnZVlPZmZzZXQgK1xyXG4gICAgY29vcmRpbmF0ZXMudG9wfXB4YDtcclxuICByZWN0LnN0eWxlLmxlZnQgPSBgJHtlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgLVxyXG4gICAgZWxlbWVudC5zY3JvbGxMZWZ0ICtcclxuICAgIHdpbmRvdy5wYWdlWE9mZnNldCArXHJcbiAgICBjb29yZGluYXRlcy5sZWZ0fXB4YDtcclxufVxyXG4iXX0=
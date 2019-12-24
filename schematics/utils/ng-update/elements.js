"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parse5_1 = require("parse5");
function findElementWithTag(html, tagName) {
    const document = parse5_1.parseFragment(html, { sourceCodeLocationInfo: true });
    const elements = [];
    const visitNodes = nodes => {
        nodes.forEach(node => {
            if (node.childNodes) {
                visitNodes(node.childNodes);
            }
            if (node.tagName && node.tagName.toLowerCase() === tagName.toLowerCase()) {
                elements.push(node);
            }
        });
    };
    visitNodes(document.childNodes);
    return elements.map(element => element.sourceCodeLocation.startTag.startOffset);
}
exports.findElementWithTag = findElementWithTag;
//# sourceMappingURL=elements.js.map
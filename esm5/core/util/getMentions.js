/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
export function getRegExp(prefix) {
    var prefixArray = Array.isArray(prefix) ? prefix : [prefix];
    var prefixToken = prefixArray.join('').replace(/(\$|\^)/g, '\\$1');
    if (prefixArray.length > 1) {
        prefixToken = "[" + prefixToken + "]";
    }
    return new RegExp("(\\s|^)(" + prefixToken + ")[^\\s]*", 'g');
}
export function getMentions(value, prefix) {
    if (prefix === void 0) { prefix = '@'; }
    if (typeof value !== 'string') {
        return [];
    }
    var regex = getRegExp(prefix);
    var mentions = value.match(regex);
    return mentions !== null ? mentions.map(function (e) { return e.trim(); }) : [];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0TWVudGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJ1dGlsL2dldE1lbnRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE1BQU0sVUFBVSxTQUFTLENBQUMsTUFBeUI7SUFDakQsSUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlELElBQUksV0FBVyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUVuRSxJQUFJLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQzFCLFdBQVcsR0FBRyxNQUFJLFdBQVcsTUFBRyxDQUFDO0tBQ2xDO0lBRUQsT0FBTyxJQUFJLE1BQU0sQ0FBQyxhQUFXLFdBQVcsYUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQzNELENBQUM7QUFFRCxNQUFNLFVBQVUsV0FBVyxDQUFDLEtBQWEsRUFBRSxNQUErQjtJQUEvQix1QkFBQSxFQUFBLFlBQStCO0lBQ3hFLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1FBQzdCLE9BQU8sRUFBRSxDQUFDO0tBQ1g7SUFDRCxJQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEMsSUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxPQUFPLFFBQVEsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQVIsQ0FBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUM5RCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVnRXhwKHByZWZpeDogc3RyaW5nIHwgc3RyaW5nW10pOiBSZWdFeHAge1xyXG4gIGNvbnN0IHByZWZpeEFycmF5ID0gQXJyYXkuaXNBcnJheShwcmVmaXgpID8gcHJlZml4IDogW3ByZWZpeF07XHJcbiAgbGV0IHByZWZpeFRva2VuID0gcHJlZml4QXJyYXkuam9pbignJykucmVwbGFjZSgvKFxcJHxcXF4pL2csICdcXFxcJDEnKTtcclxuXHJcbiAgaWYgKHByZWZpeEFycmF5Lmxlbmd0aCA+IDEpIHtcclxuICAgIHByZWZpeFRva2VuID0gYFske3ByZWZpeFRva2VufV1gO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG5ldyBSZWdFeHAoYChcXFxcc3xeKSgke3ByZWZpeFRva2VufSlbXlxcXFxzXSpgLCAnZycpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWVudGlvbnModmFsdWU6IHN0cmluZywgcHJlZml4OiBzdHJpbmcgfCBzdHJpbmdbXSA9ICdAJyk6IHN0cmluZ1tdIHtcclxuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxuICBjb25zdCByZWdleCA9IGdldFJlZ0V4cChwcmVmaXgpO1xyXG4gIGNvbnN0IG1lbnRpb25zID0gdmFsdWUubWF0Y2gocmVnZXgpO1xyXG4gIHJldHVybiBtZW50aW9ucyAhPT0gbnVsbCA/IG1lbnRpb25zLm1hcChlID0+IGUudHJpbSgpKSA6IFtdO1xyXG59XHJcbiJdfQ==
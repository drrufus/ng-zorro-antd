/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
export function getRegExp(prefix) {
    const prefixArray = Array.isArray(prefix) ? prefix : [prefix];
    let prefixToken = prefixArray.join('').replace(/(\$|\^)/g, '\\$1');
    if (prefixArray.length > 1) {
        prefixToken = `[${prefixToken}]`;
    }
    return new RegExp(`(\\s|^)(${prefixToken})[^\\s]*`, 'g');
}
export function getMentions(value, prefix = '@') {
    if (typeof value !== 'string') {
        return [];
    }
    const regex = getRegExp(prefix);
    const mentions = value.match(regex);
    return mentions !== null ? mentions.map(e => e.trim()) : [];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0TWVudGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJ1dGlsL2dldE1lbnRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE1BQU0sVUFBVSxTQUFTLENBQUMsTUFBeUI7SUFDakQsTUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlELElBQUksV0FBVyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUVuRSxJQUFJLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQzFCLFdBQVcsR0FBRyxJQUFJLFdBQVcsR0FBRyxDQUFDO0tBQ2xDO0lBRUQsT0FBTyxJQUFJLE1BQU0sQ0FBQyxXQUFXLFdBQVcsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQzNELENBQUM7QUFFRCxNQUFNLFVBQVUsV0FBVyxDQUFDLEtBQWEsRUFBRSxTQUE0QixHQUFHO0lBQ3hFLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1FBQzdCLE9BQU8sRUFBRSxDQUFDO0tBQ1g7SUFDRCxNQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEMsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxPQUFPLFFBQVEsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQzlELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWdFeHAocHJlZml4OiBzdHJpbmcgfCBzdHJpbmdbXSk6IFJlZ0V4cCB7XHJcbiAgY29uc3QgcHJlZml4QXJyYXkgPSBBcnJheS5pc0FycmF5KHByZWZpeCkgPyBwcmVmaXggOiBbcHJlZml4XTtcclxuICBsZXQgcHJlZml4VG9rZW4gPSBwcmVmaXhBcnJheS5qb2luKCcnKS5yZXBsYWNlKC8oXFwkfFxcXikvZywgJ1xcXFwkMScpO1xyXG5cclxuICBpZiAocHJlZml4QXJyYXkubGVuZ3RoID4gMSkge1xyXG4gICAgcHJlZml4VG9rZW4gPSBgWyR7cHJlZml4VG9rZW59XWA7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbmV3IFJlZ0V4cChgKFxcXFxzfF4pKCR7cHJlZml4VG9rZW59KVteXFxcXHNdKmAsICdnJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRNZW50aW9ucyh2YWx1ZTogc3RyaW5nLCBwcmVmaXg6IHN0cmluZyB8IHN0cmluZ1tdID0gJ0AnKTogc3RyaW5nW10ge1xyXG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG4gIGNvbnN0IHJlZ2V4ID0gZ2V0UmVnRXhwKHByZWZpeCk7XHJcbiAgY29uc3QgbWVudGlvbnMgPSB2YWx1ZS5tYXRjaChyZWdleCk7XHJcbiAgcmV0dXJuIG1lbnRpb25zICE9PSBudWxsID8gbWVudGlvbnMubWFwKGUgPT4gZS50cmltKCkpIDogW107XHJcbn1cclxuIl19
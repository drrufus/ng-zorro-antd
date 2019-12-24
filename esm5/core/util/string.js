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
export function padStart(toPad, length, element) {
    if (toPad.length > length) {
        return toPad;
    }
    var joined = "" + getRepeatedElement(length, element) + toPad;
    return joined.slice(joined.length - length, joined.length);
}
export function padEnd(toPad, length, element) {
    var joined = "" + toPad + getRepeatedElement(length, element);
    return joined.slice(0, length);
}
export function getRepeatedElement(length, element) {
    return Array(length)
        .fill(element)
        .join('');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsidXRpbC9zdHJpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUg7O0dBRUc7QUFDSCxNQUFNLFVBQVUsUUFBUSxDQUFDLEtBQWEsRUFBRSxNQUFjLEVBQUUsT0FBZTtJQUNyRSxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxFQUFFO1FBQ3pCLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxJQUFNLE1BQU0sR0FBRyxLQUFHLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FBRyxLQUFPLENBQUM7SUFDaEUsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM3RCxDQUFDO0FBRUQsTUFBTSxVQUFVLE1BQU0sQ0FBQyxLQUFhLEVBQUUsTUFBYyxFQUFFLE9BQWU7SUFDbkUsSUFBTSxNQUFNLEdBQUcsS0FBRyxLQUFLLEdBQUcsa0JBQWtCLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBRyxDQUFDO0lBQ2hFLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDakMsQ0FBQztBQUVELE1BQU0sVUFBVSxrQkFBa0IsQ0FBQyxNQUFjLEVBQUUsT0FBZTtJQUNoRSxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUM7U0FDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNiLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBNdWNoIGxpa2UgbG9kYXNoLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBhZFN0YXJ0KHRvUGFkOiBzdHJpbmcsIGxlbmd0aDogbnVtYmVyLCBlbGVtZW50OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gIGlmICh0b1BhZC5sZW5ndGggPiBsZW5ndGgpIHtcclxuICAgIHJldHVybiB0b1BhZDtcclxuICB9XHJcblxyXG4gIGNvbnN0IGpvaW5lZCA9IGAke2dldFJlcGVhdGVkRWxlbWVudChsZW5ndGgsIGVsZW1lbnQpfSR7dG9QYWR9YDtcclxuICByZXR1cm4gam9pbmVkLnNsaWNlKGpvaW5lZC5sZW5ndGggLSBsZW5ndGgsIGpvaW5lZC5sZW5ndGgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGFkRW5kKHRvUGFkOiBzdHJpbmcsIGxlbmd0aDogbnVtYmVyLCBlbGVtZW50OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gIGNvbnN0IGpvaW5lZCA9IGAke3RvUGFkfSR7Z2V0UmVwZWF0ZWRFbGVtZW50KGxlbmd0aCwgZWxlbWVudCl9YDtcclxuICByZXR1cm4gam9pbmVkLnNsaWNlKDAsIGxlbmd0aCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSZXBlYXRlZEVsZW1lbnQobGVuZ3RoOiBudW1iZXIsIGVsZW1lbnQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgcmV0dXJuIEFycmF5KGxlbmd0aClcclxuICAgIC5maWxsKGVsZW1lbnQpXHJcbiAgICAuam9pbignJyk7XHJcbn1cclxuIl19
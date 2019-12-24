/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { __assign } from "tslib";
import CalendarLocale from '../calendar/ar_EG';
import TimePickerLocale from '../time-picker/ar_EG';
// Merge into a locale object
var locale = {
    lang: __assign({ placeholder: 'اختيار التاريخ', rangePlaceholder: ['البداية', 'النهاية'] }, CalendarLocale),
    timePickerLocale: __assign({}, TimePickerLocale),
    dateFormat: 'DD-MM-YYYY',
    monthFormat: 'MM-YYYY',
    dateTimeFormat: 'DD-MM-YYYY HH:mm:ss',
    weekFormat: 'wo-YYYY'
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
export default locale;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJfRUcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2kxOG4vIiwic291cmNlcyI6WyJsYW5ndWFnZXMvZGF0ZS1waWNrZXIvYXJfRUcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOztBQUVILE9BQU8sY0FBYyxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sZ0JBQWdCLE1BQU0sc0JBQXNCLENBQUM7QUFFcEQsNkJBQTZCO0FBQzdCLElBQU0sTUFBTSxHQUFHO0lBQ2IsSUFBSSxhQUNGLFdBQVcsRUFBRSxnQkFBZ0IsRUFDN0IsZ0JBQWdCLEVBQUUsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLElBQ3JDLGNBQWMsQ0FDbEI7SUFDRCxnQkFBZ0IsZUFDWCxnQkFBZ0IsQ0FDcEI7SUFDRCxVQUFVLEVBQUUsWUFBWTtJQUN4QixXQUFXLEVBQUUsU0FBUztJQUN0QixjQUFjLEVBQUUscUJBQXFCO0lBQ3JDLFVBQVUsRUFBRSxTQUFTO0NBQ3RCLENBQUM7QUFFRixtQkFBbUI7QUFDbkIsa0dBQWtHO0FBRWxHLGVBQWUsTUFBTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgQ2FsZW5kYXJMb2NhbGUgZnJvbSAnLi4vY2FsZW5kYXIvYXJfRUcnO1xyXG5pbXBvcnQgVGltZVBpY2tlckxvY2FsZSBmcm9tICcuLi90aW1lLXBpY2tlci9hcl9FRyc7XHJcblxyXG4vLyBNZXJnZSBpbnRvIGEgbG9jYWxlIG9iamVjdFxyXG5jb25zdCBsb2NhbGUgPSB7XHJcbiAgbGFuZzoge1xyXG4gICAgcGxhY2Vob2xkZXI6ICfYp9iu2KrZitin2LEg2KfZhNiq2KfYsdmK2K4nLFxyXG4gICAgcmFuZ2VQbGFjZWhvbGRlcjogWyfYp9mE2KjYr9in2YrYqScsICfYp9mE2YbZh9in2YrYqSddLFxyXG4gICAgLi4uQ2FsZW5kYXJMb2NhbGVcclxuICB9LFxyXG4gIHRpbWVQaWNrZXJMb2NhbGU6IHtcclxuICAgIC4uLlRpbWVQaWNrZXJMb2NhbGVcclxuICB9LFxyXG4gIGRhdGVGb3JtYXQ6ICdERC1NTS1ZWVlZJyxcclxuICBtb250aEZvcm1hdDogJ01NLVlZWVknLFxyXG4gIGRhdGVUaW1lRm9ybWF0OiAnREQtTU0tWVlZWSBISDptbTpzcycsXHJcbiAgd2Vla0Zvcm1hdDogJ3dvLVlZWVknXHJcbn07XHJcblxyXG4vLyBBbGwgc2V0dGluZ3MgYXQ6XHJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vYmxvYi9tYXN0ZXIvY29tcG9uZW50cy9kYXRlLXBpY2tlci9sb2NhbGUvZXhhbXBsZS5qc29uXHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2NhbGU7XHJcbiJdfQ==
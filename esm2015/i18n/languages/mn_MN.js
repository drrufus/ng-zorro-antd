/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import Calendar from './calendar/mn_MN';
import DatePicker from './date-picker/mn_MN';
import Pagination from './pagination/mn_MN';
import TimePicker from './time-picker/mn_MN';
export default {
    locale: 'mn-mn',
    Pagination,
    DatePicker,
    TimePicker,
    Calendar,
    Table: {
        filterTitle: 'Хайх цэс',
        filterConfirm: 'OK',
        filterReset: 'Цэвэрлэх',
        selectAll: 'Бүгдийг сонгох',
        selectInvert: 'Бусдыг сонгох'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Цуцлах',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Цуцлах'
    },
    Transfer: {
        searchPlaceholder: 'Хайх',
        itemUnit: 'Зүйл',
        itemsUnit: 'Зүйлүүд'
    },
    Upload: {
        uploading: 'Хуулж байна...',
        removeFile: 'Файл устгах',
        uploadError: 'Хуулахад алдаа гарлаа',
        previewFile: 'Файлыг түргэн үзэх'
    },
    Empty: {
        description: 'Мэдээлэл байхгүй байна'
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW5fTU4uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2kxOG4vIiwic291cmNlcyI6WyJsYW5ndWFnZXMvbW5fTU4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxRQUFRLE1BQU0sa0JBQWtCLENBQUM7QUFDeEMsT0FBTyxVQUFVLE1BQU0scUJBQXFCLENBQUM7QUFDN0MsT0FBTyxVQUFVLE1BQU0sb0JBQW9CLENBQUM7QUFDNUMsT0FBTyxVQUFVLE1BQU0scUJBQXFCLENBQUM7QUFFN0MsZUFBZTtJQUNiLE1BQU0sRUFBRSxPQUFPO0lBQ2YsVUFBVTtJQUNWLFVBQVU7SUFDVixVQUFVO0lBQ1YsUUFBUTtJQUNSLEtBQUssRUFBRTtRQUNMLFdBQVcsRUFBRSxVQUFVO1FBQ3ZCLGFBQWEsRUFBRSxJQUFJO1FBQ25CLFdBQVcsRUFBRSxVQUFVO1FBQ3ZCLFNBQVMsRUFBRSxnQkFBZ0I7UUFDM0IsWUFBWSxFQUFFLGVBQWU7S0FDOUI7SUFDRCxLQUFLLEVBQUU7UUFDTCxNQUFNLEVBQUUsSUFBSTtRQUNaLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLFVBQVUsRUFBRSxJQUFJO0tBQ2pCO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsTUFBTSxFQUFFLElBQUk7UUFDWixVQUFVLEVBQUUsUUFBUTtLQUNyQjtJQUNELFFBQVEsRUFBRTtRQUNSLGlCQUFpQixFQUFFLE1BQU07UUFDekIsUUFBUSxFQUFFLE1BQU07UUFDaEIsU0FBUyxFQUFFLFNBQVM7S0FDckI7SUFDRCxNQUFNLEVBQUU7UUFDTixTQUFTLEVBQUUsZ0JBQWdCO1FBQzNCLFVBQVUsRUFBRSxhQUFhO1FBQ3pCLFdBQVcsRUFBRSx1QkFBdUI7UUFDcEMsV0FBVyxFQUFFLG9CQUFvQjtLQUNsQztJQUNELEtBQUssRUFBRTtRQUNMLFdBQVcsRUFBRSx3QkFBd0I7S0FDdEM7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSAnLi9jYWxlbmRhci9tbl9NTic7XHJcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gJy4vZGF0ZS1waWNrZXIvbW5fTU4nO1xyXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuL3BhZ2luYXRpb24vbW5fTU4nO1xyXG5pbXBvcnQgVGltZVBpY2tlciBmcm9tICcuL3RpbWUtcGlja2VyL21uX01OJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBsb2NhbGU6ICdtbi1tbicsXHJcbiAgUGFnaW5hdGlvbixcclxuICBEYXRlUGlja2VyLFxyXG4gIFRpbWVQaWNrZXIsXHJcbiAgQ2FsZW5kYXIsXHJcbiAgVGFibGU6IHtcclxuICAgIGZpbHRlclRpdGxlOiAn0KXQsNC50YUg0YbRjdGBJyxcclxuICAgIGZpbHRlckNvbmZpcm06ICdPSycsXHJcbiAgICBmaWx0ZXJSZXNldDogJ9Cm0Y3QstGN0YDQu9GN0YUnLFxyXG4gICAgc2VsZWN0QWxsOiAn0JHSr9Cz0LTQuNC50LMg0YHQvtC90LPQvtGFJyxcclxuICAgIHNlbGVjdEludmVydDogJ9CR0YPRgdC00YvQsyDRgdC+0L3Qs9C+0YUnXHJcbiAgfSxcclxuICBNb2RhbDoge1xyXG4gICAgb2tUZXh0OiAnT0snLFxyXG4gICAgY2FuY2VsVGV4dDogJ9Cm0YPRhtC70LDRhScsXHJcbiAgICBqdXN0T2tUZXh0OiAnT0snXHJcbiAgfSxcclxuICBQb3Bjb25maXJtOiB7XHJcbiAgICBva1RleHQ6ICdPSycsXHJcbiAgICBjYW5jZWxUZXh0OiAn0KbRg9GG0LvQsNGFJ1xyXG4gIH0sXHJcbiAgVHJhbnNmZXI6IHtcclxuICAgIHNlYXJjaFBsYWNlaG9sZGVyOiAn0KXQsNC50YUnLFxyXG4gICAgaXRlbVVuaXQ6ICfQl9Kv0LnQuycsXHJcbiAgICBpdGVtc1VuaXQ6ICfQl9Kv0LnQu9Kv0q/QtCdcclxuICB9LFxyXG4gIFVwbG9hZDoge1xyXG4gICAgdXBsb2FkaW5nOiAn0KXRg9GD0LvQtiDQsdCw0LnQvdCwLi4uJyxcclxuICAgIHJlbW92ZUZpbGU6ICfQpNCw0LnQuyDRg9GB0YLQs9Cw0YUnLFxyXG4gICAgdXBsb2FkRXJyb3I6ICfQpdGD0YPQu9Cw0YXQsNC0INCw0LvQtNCw0LAg0LPQsNGA0LvQsNCwJyxcclxuICAgIHByZXZpZXdGaWxlOiAn0KTQsNC50LvRi9CzINGC0q/RgNCz0Y3QvSDSr9C30Y3RhSdcclxuICB9LFxyXG4gIEVtcHR5OiB7XHJcbiAgICBkZXNjcmlwdGlvbjogJ9Cc0Y3QtNGN0Y3Qu9GN0Lsg0LHQsNC50YXQs9Kv0Lkg0LHQsNC50L3QsCdcclxuICB9XHJcbn07XHJcbiJdfQ==
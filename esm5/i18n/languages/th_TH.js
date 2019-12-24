/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import Calendar from './calendar/th_TH';
import DatePicker from './date-picker/th_TH';
import Pagination from './pagination/th_TH';
import TimePicker from './time-picker/th_TH';
export default {
    locale: 'th',
    Pagination: Pagination,
    DatePicker: DatePicker,
    TimePicker: TimePicker,
    Calendar: Calendar,
    Table: {
        filterTitle: 'ตัวกรอง',
        filterConfirm: 'ยืนยัน',
        filterReset: 'รีเซ็ต',
        selectAll: 'เลือกทั้งหมดในหน้านี้',
        selectInvert: 'เลือกสถานะตรงกันข้าม'
    },
    Modal: {
        okText: 'ตกลง',
        cancelText: 'ยกเลิก',
        justOkText: 'ตกลง'
    },
    Popconfirm: {
        okText: 'ตกลง',
        cancelText: 'ยกเลิก'
    },
    Transfer: {
        searchPlaceholder: 'ค้นหา',
        itemUnit: 'ชิ้น',
        itemsUnit: 'ชิ้น'
    },
    Upload: {
        uploading: 'กำลังอัปโหลด...',
        removeFile: 'ลบไฟล์',
        uploadError: 'เกิดข้อผิดพลาดในการอัปโหลด',
        previewFile: 'ดูตัวอย่างไฟล์'
    },
    Empty: {
        description: 'ไม่มีข้อมูล'
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhfVEguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2kxOG4vIiwic291cmNlcyI6WyJsYW5ndWFnZXMvdGhfVEgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxRQUFRLE1BQU0sa0JBQWtCLENBQUM7QUFDeEMsT0FBTyxVQUFVLE1BQU0scUJBQXFCLENBQUM7QUFDN0MsT0FBTyxVQUFVLE1BQU0sb0JBQW9CLENBQUM7QUFDNUMsT0FBTyxVQUFVLE1BQU0scUJBQXFCLENBQUM7QUFFN0MsZUFBZTtJQUNiLE1BQU0sRUFBRSxJQUFJO0lBQ1osVUFBVSxZQUFBO0lBQ1YsVUFBVSxZQUFBO0lBQ1YsVUFBVSxZQUFBO0lBQ1YsUUFBUSxVQUFBO0lBQ1IsS0FBSyxFQUFFO1FBQ0wsV0FBVyxFQUFFLFNBQVM7UUFDdEIsYUFBYSxFQUFFLFFBQVE7UUFDdkIsV0FBVyxFQUFFLFFBQVE7UUFDckIsU0FBUyxFQUFFLHVCQUF1QjtRQUNsQyxZQUFZLEVBQUUsc0JBQXNCO0tBQ3JDO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsTUFBTSxFQUFFLE1BQU07UUFDZCxVQUFVLEVBQUUsUUFBUTtRQUNwQixVQUFVLEVBQUUsTUFBTTtLQUNuQjtJQUNELFVBQVUsRUFBRTtRQUNWLE1BQU0sRUFBRSxNQUFNO1FBQ2QsVUFBVSxFQUFFLFFBQVE7S0FDckI7SUFDRCxRQUFRLEVBQUU7UUFDUixpQkFBaUIsRUFBRSxPQUFPO1FBQzFCLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFNBQVMsRUFBRSxNQUFNO0tBQ2xCO0lBQ0QsTUFBTSxFQUFFO1FBQ04sU0FBUyxFQUFFLGlCQUFpQjtRQUM1QixVQUFVLEVBQUUsUUFBUTtRQUNwQixXQUFXLEVBQUUsNEJBQTRCO1FBQ3pDLFdBQVcsRUFBRSxnQkFBZ0I7S0FDOUI7SUFDRCxLQUFLLEVBQUU7UUFDTCxXQUFXLEVBQUUsYUFBYTtLQUMzQjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCBDYWxlbmRhciBmcm9tICcuL2NhbGVuZGFyL3RoX1RIJztcclxuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSAnLi9kYXRlLXBpY2tlci90aF9USCc7XHJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4vcGFnaW5hdGlvbi90aF9USCc7XHJcbmltcG9ydCBUaW1lUGlja2VyIGZyb20gJy4vdGltZS1waWNrZXIvdGhfVEgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGxvY2FsZTogJ3RoJyxcclxuICBQYWdpbmF0aW9uLFxyXG4gIERhdGVQaWNrZXIsXHJcbiAgVGltZVBpY2tlcixcclxuICBDYWxlbmRhcixcclxuICBUYWJsZToge1xyXG4gICAgZmlsdGVyVGl0bGU6ICfguJXguLHguKfguIHguKPguK3guIcnLFxyXG4gICAgZmlsdGVyQ29uZmlybTogJ+C4ouC4t+C4meC4ouC4seC4mScsXHJcbiAgICBmaWx0ZXJSZXNldDogJ+C4o+C4teC5gOC4i+C5h+C4lScsXHJcbiAgICBzZWxlY3RBbGw6ICfguYDguKXguLfguK3guIHguJfguLHguYnguIfguKvguKHguJTguYPguJnguKvguJnguYnguLLguJnguLXguYknLFxyXG4gICAgc2VsZWN0SW52ZXJ0OiAn4LmA4Lil4Li34Lit4LiB4Liq4LiW4Liy4LiZ4Liw4LiV4Lij4LiH4LiB4Lix4LiZ4LiC4LmJ4Liy4LihJ1xyXG4gIH0sXHJcbiAgTW9kYWw6IHtcclxuICAgIG9rVGV4dDogJ+C4leC4geC4peC4hycsXHJcbiAgICBjYW5jZWxUZXh0OiAn4Lii4LiB4LmA4Lil4Li04LiBJyxcclxuICAgIGp1c3RPa1RleHQ6ICfguJXguIHguKXguIcnXHJcbiAgfSxcclxuICBQb3Bjb25maXJtOiB7XHJcbiAgICBva1RleHQ6ICfguJXguIHguKXguIcnLFxyXG4gICAgY2FuY2VsVGV4dDogJ+C4ouC4geC5gOC4peC4tOC4gSdcclxuICB9LFxyXG4gIFRyYW5zZmVyOiB7XHJcbiAgICBzZWFyY2hQbGFjZWhvbGRlcjogJ+C4hOC5ieC4meC4q+C4sicsXHJcbiAgICBpdGVtVW5pdDogJ+C4iuC4tOC5ieC4mScsXHJcbiAgICBpdGVtc1VuaXQ6ICfguIrguLTguYnguJknXHJcbiAgfSxcclxuICBVcGxvYWQ6IHtcclxuICAgIHVwbG9hZGluZzogJ+C4geC4s+C4peC4seC4h+C4reC4seC4m+C5guC4q+C4peC4lC4uLicsXHJcbiAgICByZW1vdmVGaWxlOiAn4Lil4Lia4LmE4Lif4Lil4LmMJyxcclxuICAgIHVwbG9hZEVycm9yOiAn4LmA4LiB4Li04LiU4LiC4LmJ4Lit4Lic4Li04LiU4Lie4Lil4Liy4LiU4LmD4LiZ4LiB4Liy4Lij4Lit4Lix4Lib4LmC4Lir4Lil4LiUJyxcclxuICAgIHByZXZpZXdGaWxlOiAn4LiU4Li54LiV4Lix4Lin4Lit4Lii4LmI4Liy4LiH4LmE4Lif4Lil4LmMJ1xyXG4gIH0sXHJcbiAgRW1wdHk6IHtcclxuICAgIGRlc2NyaXB0aW9uOiAn4LmE4Lih4LmI4Lih4Li14LiC4LmJ4Lit4Lih4Li54LilJ1xyXG4gIH1cclxufTtcclxuIl19
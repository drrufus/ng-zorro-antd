/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
var NzFilterOptionPipe = /** @class */ (function () {
    function NzFilterOptionPipe() {
    }
    NzFilterOptionPipe.prototype.transform = function (options, searchValue, filterOption, serverSearch) {
        if (serverSearch || !searchValue) {
            return options;
        }
        else {
            return options.filter(function (o) { return filterOption(searchValue, o); });
        }
    };
    /** @nocollapse */ NzFilterOptionPipe.ɵfac = function NzFilterOptionPipe_Factory(t) { return new (t || NzFilterOptionPipe)(); };
    /** @nocollapse */ NzFilterOptionPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "nzFilterOption", type: NzFilterOptionPipe, pure: true });
    return NzFilterOptionPipe;
}());
export { NzFilterOptionPipe };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzFilterOptionPipe, [{
        type: Pipe,
        args: [{ name: 'nzFilterOption' }]
    }], null, null); })();
var NzFilterGroupOptionPipe = /** @class */ (function () {
    function NzFilterGroupOptionPipe() {
    }
    NzFilterGroupOptionPipe.prototype.transform = function (groups, searchValue, filterOption, serverSearch) {
        if (serverSearch || !searchValue) {
            return groups;
        }
        else {
            return groups.filter(function (g) {
                return g.listOfNzOptionComponent.some(function (o) { return filterOption(searchValue, o); });
            });
        }
    };
    /** @nocollapse */ NzFilterGroupOptionPipe.ɵfac = function NzFilterGroupOptionPipe_Factory(t) { return new (t || NzFilterGroupOptionPipe)(); };
    /** @nocollapse */ NzFilterGroupOptionPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "nzFilterGroupOption", type: NzFilterGroupOptionPipe, pure: true });
    return NzFilterGroupOptionPipe;
}());
export { NzFilterGroupOptionPipe };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzFilterGroupOptionPipe, [{
        type: Pipe,
        args: [{ name: 'nzFilterGroupOption' }]
    }], null, null); })();
export function defaultFilterOption(searchValue, option) {
    if (option && option.nzLabel) {
        return option.nzLabel.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
    }
    else {
        return false;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotb3B0aW9uLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3NlbGVjdC8iLCJzb3VyY2VzIjpbIm56LW9wdGlvbi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBRSxJQUFJLEVBQTRCLE1BQU0sZUFBZSxDQUFDOztBQU0vRDtJQUFBO0tBY0M7SUFaQyxzQ0FBUyxHQUFULFVBQ0UsT0FBMkQsRUFDM0QsV0FBbUIsRUFDbkIsWUFBMkIsRUFDM0IsWUFBcUI7UUFFckIsSUFBSSxZQUFZLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDaEMsT0FBTyxPQUE4QixDQUFDO1NBQ3ZDO2FBQU07WUFDTCxPQUFRLE9BQStCLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFDO1NBQ25GO0lBQ0gsQ0FBQzt3RkFaVSxrQkFBa0I7K0VBQWxCLGtCQUFrQjs2QkFmL0I7Q0E0QkMsQUFkRCxJQWNDO1NBYlksa0JBQWtCO2tEQUFsQixrQkFBa0I7Y0FEOUIsSUFBSTtlQUFDLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFOztBQWdCaEM7SUFBQTtLQWdCQztJQWRDLDJDQUFTLEdBQVQsVUFDRSxNQUFnQyxFQUNoQyxXQUFtQixFQUNuQixZQUEyQixFQUMzQixZQUFxQjtRQUVyQixJQUFJLFlBQVksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNoQyxPQUFPLE1BQU0sQ0FBQztTQUNmO2FBQU07WUFDTCxPQUFRLE1BQW1DLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQztnQkFDbEQsT0FBTyxDQUFDLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFDO1lBQzNFLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO2tHQWRVLHVCQUF1Qjt5RkFBdkIsdUJBQXVCO2tDQS9CcEM7Q0E4Q0MsQUFoQkQsSUFnQkM7U0FmWSx1QkFBdUI7a0RBQXZCLHVCQUF1QjtjQURuQyxJQUFJO2VBQUMsRUFBRSxJQUFJLEVBQUUscUJBQXFCLEVBQUU7O0FBa0JyQyxNQUFNLFVBQVUsbUJBQW1CLENBQUMsV0FBbUIsRUFBRSxNQUF5QjtJQUNoRixJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFO1FBQzVCLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDN0U7U0FBTTtRQUNMLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtLCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpPcHRpb25Hcm91cENvbXBvbmVudCB9IGZyb20gJy4vbnotb3B0aW9uLWdyb3VwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56T3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9uei1vcHRpb24uY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCB0eXBlIFRGaWx0ZXJPcHRpb24gPSAoaW5wdXQ6IHN0cmluZywgb3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudCkgPT4gYm9vbGVhbjtcclxuXHJcbkBQaXBlKHsgbmFtZTogJ256RmlsdGVyT3B0aW9uJyB9KVxyXG5leHBvcnQgY2xhc3MgTnpGaWx0ZXJPcHRpb25QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKFxyXG4gICAgb3B0aW9uczogTnpPcHRpb25Db21wb25lbnRbXSB8IFF1ZXJ5TGlzdDxOek9wdGlvbkNvbXBvbmVudD4sXHJcbiAgICBzZWFyY2hWYWx1ZTogc3RyaW5nLFxyXG4gICAgZmlsdGVyT3B0aW9uOiBURmlsdGVyT3B0aW9uLFxyXG4gICAgc2VydmVyU2VhcmNoOiBib29sZWFuXHJcbiAgKTogTnpPcHRpb25Db21wb25lbnRbXSB7XHJcbiAgICBpZiAoc2VydmVyU2VhcmNoIHx8ICFzZWFyY2hWYWx1ZSkge1xyXG4gICAgICByZXR1cm4gb3B0aW9ucyBhcyBOek9wdGlvbkNvbXBvbmVudFtdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIChvcHRpb25zIGFzIE56T3B0aW9uQ29tcG9uZW50W10pLmZpbHRlcihvID0+IGZpbHRlck9wdGlvbihzZWFyY2hWYWx1ZSwgbykpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQFBpcGUoeyBuYW1lOiAnbnpGaWx0ZXJHcm91cE9wdGlvbicgfSlcclxuZXhwb3J0IGNsYXNzIE56RmlsdGVyR3JvdXBPcHRpb25QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKFxyXG4gICAgZ3JvdXBzOiBOek9wdGlvbkdyb3VwQ29tcG9uZW50W10sXHJcbiAgICBzZWFyY2hWYWx1ZTogc3RyaW5nLFxyXG4gICAgZmlsdGVyT3B0aW9uOiBURmlsdGVyT3B0aW9uLFxyXG4gICAgc2VydmVyU2VhcmNoOiBib29sZWFuXHJcbiAgKTogTnpPcHRpb25Hcm91cENvbXBvbmVudFtdIHtcclxuICAgIGlmIChzZXJ2ZXJTZWFyY2ggfHwgIXNlYXJjaFZhbHVlKSB7XHJcbiAgICAgIHJldHVybiBncm91cHM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gKGdyb3VwcyBhcyBOek9wdGlvbkdyb3VwQ29tcG9uZW50W10pLmZpbHRlcihnID0+IHtcclxuICAgICAgICByZXR1cm4gZy5saXN0T2ZOek9wdGlvbkNvbXBvbmVudC5zb21lKG8gPT4gZmlsdGVyT3B0aW9uKHNlYXJjaFZhbHVlLCBvKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRGaWx0ZXJPcHRpb24oc2VhcmNoVmFsdWU6IHN0cmluZywgb3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudCk6IGJvb2xlYW4ge1xyXG4gIGlmIChvcHRpb24gJiYgb3B0aW9uLm56TGFiZWwpIHtcclxuICAgIHJldHVybiBvcHRpb24ubnpMYWJlbC50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoVmFsdWUudG9Mb3dlckNhc2UoKSkgPiAtMTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG4iXX0=
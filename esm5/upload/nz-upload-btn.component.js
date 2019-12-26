/**
 * @fileoverview added by tsickle
 * Generated from: nz-upload-btn.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ENTER } from '@angular/cdk/keycodes';
import { HttpClient, HttpEventType, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Component, ElementRef, HostListener, Input, Optional, ViewChild, ViewEncapsulation } from '@angular/core';
import { of, Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { warn, NzUpdateHostClassService } from 'ng-zorro-antd/core';
var NzUploadBtnComponent = /** @class */ (function () {
    // #endregion
    function NzUploadBtnComponent(http, el, updateHostClassService) {
        this.http = http;
        this.el = el;
        this.updateHostClassService = updateHostClassService;
        this.reqs = {};
        this.inited = false;
        this.destroy = false;
        // #region fields
        this.classes = {};
        // #region styles
        this.prefixCls = 'ant-upload';
        if (!http) {
            throw new Error("Not found 'HttpClient', You can import 'HttpClientModule' in your root module.");
        }
    }
    // #endregion
    // #endregion
    /**
     * @return {?}
     */
    NzUploadBtnComponent.prototype.onClick = 
    // #endregion
    /**
     * @return {?}
     */
    function () {
        if (this.options.disabled || !this.options.openFileDialogOnClick) {
            return;
        }
        ((/** @type {?} */ (this.file.nativeElement))).click();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzUploadBtnComponent.prototype.onKeyDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (this.options.disabled) {
            return;
        }
        if (e.key === 'Enter' || e.keyCode === ENTER) {
            this.onClick();
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    // skip safari bug
    // tslint:disable-next-line:no-any
    NzUploadBtnComponent.prototype.onFileDrop = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        if (this.options.disabled || e.type === 'dragover') {
            e.preventDefault();
            return;
        }
        if (this.options.directory) {
            this.traverseFileTree((/** @type {?} */ (e.dataTransfer)).items);
        }
        else {
            /** @type {?} */
            var files = Array.prototype.slice
                .call((/** @type {?} */ (e.dataTransfer)).files)
                .filter((/**
             * @param {?} file
             * @return {?}
             */
            function (file) { return _this.attrAccept(file, _this.options.accept); }));
            if (files.length) {
                this.uploadFiles(files);
            }
        }
        e.preventDefault();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzUploadBtnComponent.prototype.onChange = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (this.options.disabled) {
            return;
        }
        /** @type {?} */
        var hie = (/** @type {?} */ (e.target));
        this.uploadFiles((/** @type {?} */ (hie.files)));
        hie.value = '';
    };
    /**
     * @private
     * @param {?} files
     * @return {?}
     */
    NzUploadBtnComponent.prototype.traverseFileTree = /**
     * @private
     * @param {?} files
     * @return {?}
     */
    function (files) {
        var e_1, _a;
        var _this = this;
        // tslint:disable-next-line:no-any
        /** @type {?} */
        var _traverseFileTree = (/**
         * @param {?} item
         * @param {?} path
         * @return {?}
         */
        function (item, path) {
            if (item.isFile) {
                item.file((/**
                 * @param {?} file
                 * @return {?}
                 */
                function (file) {
                    if (_this.attrAccept(file, _this.options.accept)) {
                        _this.uploadFiles([file]);
                    }
                }));
            }
            else if (item.isDirectory) {
                /** @type {?} */
                var dirReader = item.createReader();
                // tslint:disable-next-line:no-any
                dirReader.readEntries((/**
                 * @param {?} entries
                 * @return {?}
                 */
                function (entries) {
                    var e_2, _a;
                    try {
                        for (var entries_1 = tslib_1.__values(entries), entries_1_1 = entries_1.next(); !entries_1_1.done; entries_1_1 = entries_1.next()) {
                            var entrieItem = entries_1_1.value;
                            _traverseFileTree(entrieItem, "" + path + item.name + "/");
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (entries_1_1 && !entries_1_1.done && (_a = entries_1.return)) _a.call(entries_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }));
            }
        });
        try {
            // tslint:disable-next-line:no-any
            for (var _b = tslib_1.__values((/** @type {?} */ (files))), _c = _b.next(); !_c.done; _c = _b.next()) {
                var file = _c.value;
                _traverseFileTree(file.webkitGetAsEntry(), '');
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @private
     * @param {?} file
     * @param {?=} acceptedFiles
     * @return {?}
     */
    NzUploadBtnComponent.prototype.attrAccept = /**
     * @private
     * @param {?} file
     * @param {?=} acceptedFiles
     * @return {?}
     */
    function (file, acceptedFiles) {
        if (file && acceptedFiles) {
            /** @type {?} */
            var acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(',');
            /** @type {?} */
            var fileName_1 = '' + file.name;
            /** @type {?} */
            var mimeType_1 = '' + file.type;
            /** @type {?} */
            var baseMimeType_1 = mimeType_1.replace(/\/.*$/, '');
            return acceptedFilesArray.some((/**
             * @param {?} type
             * @return {?}
             */
            function (type) {
                /** @type {?} */
                var validType = type.trim();
                if (validType.charAt(0) === '.') {
                    return (fileName_1
                        .toLowerCase()
                        .indexOf(validType.toLowerCase(), fileName_1.toLowerCase().length - validType.toLowerCase().length) !== -1);
                }
                else if (/\/\*$/.test(validType)) {
                    // This is something like a image/* mime type
                    return baseMimeType_1 === validType.replace(/\/.*$/, '');
                }
                return mimeType_1 === validType;
            }));
        }
        return true;
    };
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    NzUploadBtnComponent.prototype.attachUid = /**
     * @private
     * @param {?} file
     * @return {?}
     */
    function (file) {
        if (!file.uid) {
            file.uid = Math.random()
                .toString(36)
                .substring(2);
        }
        return file;
    };
    /**
     * @param {?} fileList
     * @return {?}
     */
    NzUploadBtnComponent.prototype.uploadFiles = /**
     * @param {?} fileList
     * @return {?}
     */
    function (fileList) {
        var _this = this;
        /** @type {?} */
        var filters$ = of(Array.prototype.slice.call(fileList));
        if (this.options.filters) {
            this.options.filters.forEach((/**
             * @param {?} f
             * @return {?}
             */
            function (f) {
                filters$ = filters$.pipe(switchMap((/**
                 * @param {?} list
                 * @return {?}
                 */
                function (list) {
                    /** @type {?} */
                    var fnRes = f.fn(list);
                    return fnRes instanceof Observable ? fnRes : of(fnRes);
                })));
            }));
        }
        filters$.subscribe((/**
         * @param {?} list
         * @return {?}
         */
        function (list) {
            list.forEach((/**
             * @param {?} file
             * @return {?}
             */
            function (file) {
                _this.attachUid(file);
                _this.upload(file, list);
            }));
        }), (/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            warn("Unhandled upload filter error", e);
        }));
    };
    /**
     * @private
     * @param {?} file
     * @param {?} fileList
     * @return {?}
     */
    NzUploadBtnComponent.prototype.upload = /**
     * @private
     * @param {?} file
     * @param {?} fileList
     * @return {?}
     */
    function (file, fileList) {
        var _this = this;
        if (!this.options.beforeUpload) {
            return this.post(file);
        }
        /** @type {?} */
        var before = this.options.beforeUpload(file, fileList);
        if (before instanceof Observable) {
            before.subscribe((/**
             * @param {?} processedFile
             * @return {?}
             */
            function (processedFile) {
                /** @type {?} */
                var processedFileType = Object.prototype.toString.call(processedFile);
                if (processedFileType === '[object File]' || processedFileType === '[object Blob]') {
                    _this.attachUid(processedFile);
                    _this.post(processedFile);
                }
                else if (typeof processedFile === 'boolean' && processedFile !== false) {
                    _this.post(file);
                }
            }), (/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                warn("Unhandled upload beforeUpload error", e);
            }));
        }
        else if (before !== false) {
            return this.post(file);
        }
    };
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    NzUploadBtnComponent.prototype.post = /**
     * @private
     * @param {?} file
     * @return {?}
     */
    function (file) {
        var _this = this;
        if (this.destroy) {
            return;
        }
        /** @type {?} */
        var opt = this.options;
        var uid = file.uid;
        var data = opt.data, headers = opt.headers;
        if (typeof data === 'function') {
            data = ((/** @type {?} */ (data)))(file);
        }
        if (typeof headers === 'function') {
            headers = ((/** @type {?} */ (headers)))(file);
        }
        /** @type {?} */
        var args = {
            action: opt.action,
            name: opt.name,
            headers: headers,
            file: file,
            data: data,
            withCredentials: opt.withCredentials,
            onProgress: opt.onProgress
                ? (/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) {
                    (/** @type {?} */ (opt.onProgress))(e, file);
                })
                : undefined,
            onSuccess: (/**
             * @param {?} ret
             * @param {?} xhr
             * @return {?}
             */
            function (ret, xhr) {
                _this.clean(uid);
                (/** @type {?} */ (opt.onSuccess))(ret, file, xhr);
            }),
            onError: (/**
             * @param {?} xhr
             * @return {?}
             */
            function (xhr) {
                _this.clean(uid);
                (/** @type {?} */ (opt.onError))(xhr, file);
            })
        };
        /** @type {?} */
        var req$ = (opt.customRequest || this.xhr).call(this, args);
        if (!(req$ instanceof Subscription)) {
            warn("Must return Subscription type in '[nzCustomRequest]' property");
        }
        this.reqs[uid] = req$;
        (/** @type {?} */ (opt.onStart))(file);
    };
    /**
     * @private
     * @param {?} args
     * @return {?}
     */
    NzUploadBtnComponent.prototype.xhr = /**
     * @private
     * @param {?} args
     * @return {?}
     */
    function (args) {
        var _this = this;
        /** @type {?} */
        var formData = new FormData();
        // tslint:disable-next-line:no-any
        formData.append((/** @type {?} */ (args.name)), (/** @type {?} */ (args.file)));
        if (args.data) {
            Object.keys(args.data).map((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
                formData.append(key, (/** @type {?} */ (args.data))[key]);
            }));
        }
        if (!args.headers) {
            args.headers = {};
        }
        if (args.headers['X-Requested-With'] !== null) {
            args.headers['X-Requested-With'] = "XMLHttpRequest";
        }
        else {
            delete args.headers['X-Requested-With'];
        }
        /** @type {?} */
        var req = new HttpRequest('POST', (/** @type {?} */ (args.action)), formData, {
            reportProgress: true,
            withCredentials: args.withCredentials,
            headers: new HttpHeaders(args.headers)
        });
        return this.http.request(req).subscribe((
        // tslint:disable-next-line no-any
        // tslint:disable-next-line no-any
        /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (event.type === HttpEventType.UploadProgress) {
                if ((/** @type {?} */ (event.total)) > 0) {
                    // tslint:disable-next-line:no-any
                    ((/** @type {?} */ (event))).percent = (event.loaded / (/** @type {?} */ (event.total))) * 100;
                }
                (/** @type {?} */ (args.onProgress))(event, args.file);
            }
            else if (event instanceof HttpResponse) {
                (/** @type {?} */ (args.onSuccess))(event.body, args.file, event);
            }
        }), (/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            _this.abort(args.file);
            (/** @type {?} */ (args.onError))(err, args.file);
        }));
    };
    /**
     * @private
     * @param {?} uid
     * @return {?}
     */
    NzUploadBtnComponent.prototype.clean = /**
     * @private
     * @param {?} uid
     * @return {?}
     */
    function (uid) {
        /** @type {?} */
        var req$ = this.reqs[uid];
        if (req$ instanceof Subscription) {
            req$.unsubscribe();
        }
        delete this.reqs[uid];
    };
    /**
     * @param {?=} file
     * @return {?}
     */
    NzUploadBtnComponent.prototype.abort = /**
     * @param {?=} file
     * @return {?}
     */
    function (file) {
        var _this = this;
        if (file) {
            this.clean(file && file.uid);
        }
        else {
            Object.keys(this.reqs).forEach((/**
             * @param {?} uid
             * @return {?}
             */
            function (uid) { return _this.clean(uid); }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzUploadBtnComponent.prototype.setClassMap = /**
     * @private
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var classMap = tslib_1.__assign((_a = {}, _a[this.prefixCls] = true, _a[this.prefixCls + "-disabled"] = this.options.disabled, _a), this.classes);
        this.updateHostClassService.updateHostClass(this.el.nativeElement, classMap);
    };
    /**
     * @return {?}
     */
    NzUploadBtnComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.inited = true;
        this.setClassMap();
    };
    /**
     * @return {?}
     */
    NzUploadBtnComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.inited) {
            this.setClassMap();
        }
    };
    /**
     * @return {?}
     */
    NzUploadBtnComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy = true;
        this.abort();
    };
    NzUploadBtnComponent.decorators = [
        { type: Component, args: [{
                    selector: '[nz-upload-btn]',
                    exportAs: 'nzUploadBtn',
                    template: "<input type=\"file\" #file (change)=\"onChange($event)\"\r\n  [attr.accept]=\"options.accept\"\r\n  [attr.directory]=\"options.directory ? 'directory': null\"\r\n  [attr.webkitdirectory]=\"options.directory ? 'webkitdirectory': null\"\r\n  [multiple]=\"options.multiple\" style=\"display: none;\">\r\n<ng-content></ng-content>",
                    host: {
                        '[attr.tabindex]': '"0"',
                        '[attr.role]': '"button"'
                    },
                    providers: [NzUpdateHostClassService],
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    NzUploadBtnComponent.ctorParameters = function () { return [
        { type: HttpClient, decorators: [{ type: Optional }] },
        { type: ElementRef },
        { type: NzUpdateHostClassService }
    ]; };
    NzUploadBtnComponent.propDecorators = {
        file: [{ type: ViewChild, args: ['file', { static: false },] }],
        classes: [{ type: Input }],
        options: [{ type: Input }],
        onClick: [{ type: HostListener, args: ['click',] }],
        onKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }],
        onFileDrop: [{ type: HostListener, args: ['drop', ['$event'],] }, { type: HostListener, args: ['dragover', ['$event'],] }]
    };
    return NzUploadBtnComponent;
}());
export { NzUploadBtnComponent };
if (false) {
    /** @type {?} */
    NzUploadBtnComponent.prototype.reqs;
    /**
     * @type {?}
     * @private
     */
    NzUploadBtnComponent.prototype.inited;
    /**
     * @type {?}
     * @private
     */
    NzUploadBtnComponent.prototype.destroy;
    /** @type {?} */
    NzUploadBtnComponent.prototype.file;
    /** @type {?} */
    NzUploadBtnComponent.prototype.classes;
    /** @type {?} */
    NzUploadBtnComponent.prototype.options;
    /**
     * @type {?}
     * @private
     */
    NzUploadBtnComponent.prototype.prefixCls;
    /**
     * @type {?}
     * @private
     */
    NzUploadBtnComponent.prototype.http;
    /**
     * @type {?}
     * @private
     */
    NzUploadBtnComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NzUploadBtnComponent.prototype.updateHostClassService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdXBsb2FkLWJ0bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3VwbG9hZC8iLCJzb3VyY2VzIjpbIm56LXVwbG9hZC1idG4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBYSxhQUFhLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNwSCxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUlMLFFBQVEsRUFDUixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLElBQUksRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBSXBFO0lBMFNFLGFBQWE7SUFFYiw4QkFDc0IsSUFBZ0IsRUFDNUIsRUFBYyxFQUNkLHNCQUFnRDtRQUZwQyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQzVCLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQTBCO1FBbFMxRCxTQUFJLEdBQW9DLEVBQUUsQ0FBQztRQUNuQyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsWUFBTyxHQUFHLEtBQUssQ0FBQzs7UUFLZixZQUFPLEdBQU8sRUFBRSxDQUFDOztRQTJRbEIsY0FBUyxHQUFHLFlBQVksQ0FBQztRQWtCL0IsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULE1BQU0sSUFBSSxLQUFLLENBQUMsZ0ZBQWdGLENBQUMsQ0FBQztTQUNuRztJQUNILENBQUM7SUE3UkQsYUFBYTs7Ozs7SUFHYixzQ0FBTzs7Ozs7SUFEUDtRQUVFLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLHFCQUFxQixFQUFFO1lBQ2hFLE9BQU87U0FDUjtRQUNELENBQUMsbUJBQUEsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQW9CLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN4RCxDQUFDOzs7OztJQUdELHdDQUFTOzs7O0lBRFQsVUFDVSxDQUFnQjtRQUN4QixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO1lBQ3pCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxPQUFPLElBQUksQ0FBQyxDQUFDLE9BQU8sS0FBSyxLQUFLLEVBQUU7WUFDNUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2hCO0lBQ0gsQ0FBQzs7Ozs7SUFJRCxrQkFBa0I7SUFDbEIsa0NBQWtDO0lBQ2xDLHlDQUFVOzs7O0lBSlYsVUFJVyxDQUFNO1FBSmpCLGlCQXFCQztRQWhCQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssVUFBVSxFQUFFO1lBQ2xELENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNuQixPQUFPO1NBQ1I7UUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFO1lBQzFCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBQSxDQUFDLENBQUMsWUFBWSxFQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDOUM7YUFBTTs7Z0JBQ0MsS0FBSyxHQUFXLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSztpQkFDeEMsSUFBSSxDQUFDLG1CQUFBLENBQUMsQ0FBQyxZQUFZLEVBQUMsQ0FBQyxLQUFLLENBQUM7aUJBQzNCLE1BQU07Ozs7WUFBQyxVQUFDLElBQVUsSUFBSyxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQTFDLENBQTBDLEVBQUM7WUFDckUsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO2dCQUNoQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3pCO1NBQ0Y7UUFFRCxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCx1Q0FBUTs7OztJQUFSLFVBQVMsQ0FBUTtRQUNmLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUU7WUFDekIsT0FBTztTQUNSOztZQUNLLEdBQUcsR0FBRyxtQkFBQSxDQUFDLENBQUMsTUFBTSxFQUFvQjtRQUN4QyxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFBLEdBQUcsQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDO1FBQzdCLEdBQUcsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLENBQUM7Ozs7OztJQUVPLCtDQUFnQjs7Ozs7SUFBeEIsVUFBeUIsS0FBMkI7O1FBQXBELGlCQXdCQzs7O1lBdEJPLGlCQUFpQjs7Ozs7UUFBRyxVQUFDLElBQVMsRUFBRSxJQUFZO1lBQ2hELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDZixJQUFJLENBQUMsSUFBSTs7OztnQkFBQyxVQUFDLElBQVU7b0JBQ25CLElBQUksS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTt3QkFDOUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7cUJBQzFCO2dCQUNILENBQUMsRUFBQyxDQUFDO2FBQ0o7aUJBQU0sSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFOztvQkFDckIsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBRXJDLGtDQUFrQztnQkFDbEMsU0FBUyxDQUFDLFdBQVc7Ozs7Z0JBQUMsVUFBQyxPQUFZOzs7d0JBQ2pDLEtBQXlCLElBQUEsWUFBQSxpQkFBQSxPQUFPLENBQUEsZ0NBQUEscURBQUU7NEJBQTdCLElBQU0sVUFBVSxvQkFBQTs0QkFDbkIsaUJBQWlCLENBQUMsVUFBVSxFQUFFLEtBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLE1BQUcsQ0FBQyxDQUFDO3lCQUN2RDs7Ozs7Ozs7O2dCQUNILENBQUMsRUFBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDLENBQUE7O1lBQ0Qsa0NBQWtDO1lBQ2xDLCtCQUFtQixtQkFBQSxLQUFLLEVBQU8sNkNBQUU7Z0JBQTVCLElBQU0sSUFBSSxXQUFBO2dCQUNiLGlCQUFpQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQ2hEOzs7Ozs7Ozs7SUFDSCxDQUFDOzs7Ozs7O0lBRU8seUNBQVU7Ozs7OztJQUFsQixVQUFtQixJQUFVLEVBQUUsYUFBaUM7UUFDOUQsSUFBSSxJQUFJLElBQUksYUFBYSxFQUFFOztnQkFDbkIsa0JBQWtCLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7Z0JBQzVGLFVBQVEsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUk7O2dCQUN6QixVQUFRLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJOztnQkFDekIsY0FBWSxHQUFHLFVBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQztZQUVsRCxPQUFPLGtCQUFrQixDQUFDLElBQUk7Ozs7WUFBQyxVQUFBLElBQUk7O29CQUMzQixTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDN0IsSUFBSSxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtvQkFDL0IsT0FBTyxDQUNMLFVBQVE7eUJBQ0wsV0FBVyxFQUFFO3lCQUNiLE9BQU8sQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLEVBQUUsVUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQzNHLENBQUM7aUJBQ0g7cUJBQU0sSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFO29CQUNsQyw2Q0FBNkM7b0JBQzdDLE9BQU8sY0FBWSxLQUFLLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2lCQUN4RDtnQkFDRCxPQUFPLFVBQVEsS0FBSyxTQUFTLENBQUM7WUFDaEMsQ0FBQyxFQUFDLENBQUM7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7O0lBRU8sd0NBQVM7Ozs7O0lBQWpCLFVBQWtCLElBQWdCO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ2IsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFO2lCQUNyQixRQUFRLENBQUMsRUFBRSxDQUFDO2lCQUNaLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNqQjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFFRCwwQ0FBVzs7OztJQUFYLFVBQVksUUFBMkI7UUFBdkMsaUJBdUJDOztZQXRCSyxRQUFRLEdBQTZCLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDakYsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQSxDQUFDO2dCQUM1QixRQUFRLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FDdEIsU0FBUzs7OztnQkFBQyxVQUFBLElBQUk7O3dCQUNOLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvQkFDeEIsT0FBTyxLQUFLLFlBQVksVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDekQsQ0FBQyxFQUFDLENBQ0gsQ0FBQztZQUNKLENBQUMsRUFBQyxDQUFDO1NBQ0o7UUFDRCxRQUFRLENBQUMsU0FBUzs7OztRQUNoQixVQUFBLElBQUk7WUFDRixJQUFJLENBQUMsT0FBTzs7OztZQUFDLFVBQUMsSUFBZ0I7Z0JBQzVCLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3JCLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzFCLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQzs7OztRQUNELFVBQUEsQ0FBQztZQUNDLElBQUksQ0FBQywrQkFBK0IsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMzQyxDQUFDLEVBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7SUFFTyxxQ0FBTTs7Ozs7O0lBQWQsVUFBZSxJQUFnQixFQUFFLFFBQXNCO1FBQXZELGlCQXVCQztRQXRCQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUU7WUFDOUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hCOztZQUNLLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDO1FBQ3hELElBQUksTUFBTSxZQUFZLFVBQVUsRUFBRTtZQUNoQyxNQUFNLENBQUMsU0FBUzs7OztZQUNkLFVBQUMsYUFBeUI7O29CQUNsQixpQkFBaUIsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO2dCQUN2RSxJQUFJLGlCQUFpQixLQUFLLGVBQWUsSUFBSSxpQkFBaUIsS0FBSyxlQUFlLEVBQUU7b0JBQ2xGLEtBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQzlCLEtBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7aUJBQzFCO3FCQUFNLElBQUksT0FBTyxhQUFhLEtBQUssU0FBUyxJQUFJLGFBQWEsS0FBSyxLQUFLLEVBQUU7b0JBQ3hFLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ2pCO1lBQ0gsQ0FBQzs7OztZQUNELFVBQUEsQ0FBQztnQkFDQyxJQUFJLENBQUMscUNBQXFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDakQsQ0FBQyxFQUNGLENBQUM7U0FDSDthQUFNLElBQUksTUFBTSxLQUFLLEtBQUssRUFBRTtZQUMzQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDeEI7SUFDSCxDQUFDOzs7Ozs7SUFFTyxtQ0FBSTs7Ozs7SUFBWixVQUFhLElBQWdCO1FBQTdCLGlCQXdDQztRQXZDQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsT0FBTztTQUNSOztZQUNLLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTztRQUNoQixJQUFBLGNBQUc7UUFDTCxJQUFBLGVBQUksRUFBRSxxQkFBTztRQUNuQixJQUFJLE9BQU8sSUFBSSxLQUFLLFVBQVUsRUFBRTtZQUM5QixJQUFJLEdBQUcsQ0FBQyxtQkFBQSxJQUFJLEVBQTRCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNqRDtRQUNELElBQUksT0FBTyxPQUFPLEtBQUssVUFBVSxFQUFFO1lBQ2pDLE9BQU8sR0FBRyxDQUFDLG1CQUFBLE9BQU8sRUFBNEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZEOztZQUNLLElBQUksR0FBa0I7WUFDMUIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNO1lBQ2xCLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSTtZQUNkLE9BQU8sU0FBQTtZQUNQLElBQUksTUFBQTtZQUNKLElBQUksTUFBQTtZQUNKLGVBQWUsRUFBRSxHQUFHLENBQUMsZUFBZTtZQUNwQyxVQUFVLEVBQUUsR0FBRyxDQUFDLFVBQVU7Z0JBQ3hCLENBQUM7Ozs7Z0JBQUMsVUFBQSxDQUFDO29CQUNDLG1CQUFBLEdBQUcsQ0FBQyxVQUFVLEVBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQzNCLENBQUM7Z0JBQ0gsQ0FBQyxDQUFDLFNBQVM7WUFDYixTQUFTOzs7OztZQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUc7Z0JBQ2xCLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2hCLG1CQUFBLEdBQUcsQ0FBQyxTQUFTLEVBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ2pDLENBQUMsQ0FBQTtZQUNELE9BQU87Ozs7WUFBRSxVQUFBLEdBQUc7Z0JBQ1YsS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDaEIsbUJBQUEsR0FBRyxDQUFDLE9BQU8sRUFBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUMxQixDQUFDLENBQUE7U0FDRjs7WUFDSyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztRQUM3RCxJQUFJLENBQUMsQ0FBQyxJQUFJLFlBQVksWUFBWSxDQUFDLEVBQUU7WUFDbkMsSUFBSSxDQUFDLCtEQUErRCxDQUFDLENBQUM7U0FDdkU7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUN0QixtQkFBQSxHQUFHLENBQUMsT0FBTyxFQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckIsQ0FBQzs7Ozs7O0lBRU8sa0NBQUc7Ozs7O0lBQVgsVUFBWSxJQUFtQjtRQUEvQixpQkF3Q0M7O1lBdkNPLFFBQVEsR0FBRyxJQUFJLFFBQVEsRUFBRTtRQUMvQixrQ0FBa0M7UUFDbEMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxtQkFBQSxJQUFJLENBQUMsSUFBSSxFQUFDLEVBQUUsbUJBQUEsSUFBSSxDQUFDLElBQUksRUFBTyxDQUFDLENBQUM7UUFDOUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRzs7OztZQUFDLFVBQUEsR0FBRztnQkFDNUIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsbUJBQUEsSUFBSSxDQUFDLElBQUksRUFBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDeEMsQ0FBQyxFQUFDLENBQUM7U0FDSjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1NBQ25CO1FBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLEtBQUssSUFBSSxFQUFFO1lBQzdDLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQztTQUNyRDthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7U0FDekM7O1lBQ0ssR0FBRyxHQUFHLElBQUksV0FBVyxDQUFDLE1BQU0sRUFBRSxtQkFBQSxJQUFJLENBQUMsTUFBTSxFQUFDLEVBQUUsUUFBUSxFQUFFO1lBQzFELGNBQWMsRUFBRSxJQUFJO1lBQ3BCLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUN2QyxDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTO1FBQ3JDLGtDQUFrQzs7Ozs7O1FBQ2xDLFVBQUMsS0FBcUI7WUFDcEIsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLGFBQWEsQ0FBQyxjQUFjLEVBQUU7Z0JBQy9DLElBQUksbUJBQUEsS0FBSyxDQUFDLEtBQUssRUFBQyxHQUFHLENBQUMsRUFBRTtvQkFDcEIsa0NBQWtDO29CQUNsQyxDQUFDLG1CQUFBLEtBQUssRUFBTyxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxtQkFBQSxLQUFLLENBQUMsS0FBSyxFQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7aUJBQzlEO2dCQUNELG1CQUFBLElBQUksQ0FBQyxVQUFVLEVBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3BDO2lCQUFNLElBQUksS0FBSyxZQUFZLFlBQVksRUFBRTtnQkFDeEMsbUJBQUEsSUFBSSxDQUFDLFNBQVMsRUFBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQzthQUMvQztRQUNILENBQUM7Ozs7UUFDRCxVQUFBLEdBQUc7WUFDRCxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QixtQkFBQSxJQUFJLENBQUMsT0FBTyxFQUFDLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxDQUFDLEVBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVPLG9DQUFLOzs7OztJQUFiLFVBQWMsR0FBVzs7WUFDakIsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQzNCLElBQUksSUFBSSxZQUFZLFlBQVksRUFBRTtZQUNoQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7UUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxvQ0FBSzs7OztJQUFMLFVBQU0sSUFBaUI7UUFBdkIsaUJBTUM7UUFMQyxJQUFJLElBQUksRUFBRTtZQUNSLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM5QjthQUFNO1lBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTzs7OztZQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBZixDQUFlLEVBQUMsQ0FBQztTQUN4RDtJQUNILENBQUM7Ozs7O0lBTU8sMENBQVc7Ozs7SUFBbkI7OztZQUNRLFFBQVEsaUNBQ1gsSUFBSSxDQUFDLFNBQVMsSUFBRyxJQUFJLEtBQ2xCLElBQUksQ0FBQyxTQUFTLGNBQVcsSUFBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsT0FDbEQsSUFBSSxDQUFDLE9BQU8sQ0FDaEI7UUFDRCxJQUFJLENBQUMsc0JBQXNCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQy9FLENBQUM7Ozs7SUFjRCx1Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELDBDQUFXOzs7SUFBWDtRQUNFLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQjtJQUNILENBQUM7Ozs7SUFFRCwwQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZixDQUFDOztnQkFwVUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSxhQUFhO29CQUN2QixrVkFBNkM7b0JBQzdDLElBQUksRUFBRTt3QkFDSixpQkFBaUIsRUFBRSxLQUFLO3dCQUN4QixhQUFhLEVBQUUsVUFBVTtxQkFDMUI7b0JBQ0QsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7b0JBQ3JDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0Qzs7OztnQkEvQlEsVUFBVSx1QkFpVWQsUUFBUTtnQkE5VFgsVUFBVTtnQkFhRyx3QkFBd0I7Ozt1QkFxQnBDLFNBQVMsU0FBQyxNQUFNLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzBCQUduQyxLQUFLOzBCQUNMLEtBQUs7MEJBSUwsWUFBWSxTQUFDLE9BQU87NEJBUXBCLFlBQVksU0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7NkJBVWxDLFlBQVksU0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsY0FDL0IsWUFBWSxTQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUF5UnRDLDJCQUFDO0NBQUEsQUFyVUQsSUFxVUM7U0F6VFksb0JBQW9COzs7SUFDL0Isb0NBQTJDOzs7OztJQUMzQyxzQ0FBdUI7Ozs7O0lBQ3ZCLHVDQUF3Qjs7SUFFeEIsb0NBQXVEOztJQUd2RCx1Q0FBMEI7O0lBQzFCLHVDQUFtQzs7Ozs7SUEwUW5DLHlDQUFpQzs7Ozs7SUFjL0Isb0NBQW9DOzs7OztJQUNwQyxrQ0FBc0I7Ozs7O0lBQ3RCLHNEQUF3RCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgRU5URVIgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwRXZlbnQsIEh0dHBFdmVudFR5cGUsIEh0dHBIZWFkZXJzLCBIdHRwUmVxdWVzdCwgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgb2YsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyB3YXJuLCBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgVXBsb2FkRmlsZSwgVXBsb2FkWEhSQXJncywgWmlwQnV0dG9uT3B0aW9ucyB9IGZyb20gJy4vaW50ZXJmYWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnW256LXVwbG9hZC1idG5dJyxcclxuICBleHBvcnRBczogJ256VXBsb2FkQnRuJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotdXBsb2FkLWJ0bi5jb21wb25lbnQuaHRtbCcsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1thdHRyLnRhYmluZGV4XSc6ICdcIjBcIicsXHJcbiAgICAnW2F0dHIucm9sZV0nOiAnXCJidXR0b25cIidcclxuICB9LFxyXG4gIHByb3ZpZGVyczogW056VXBkYXRlSG9zdENsYXNzU2VydmljZV0sXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpVcGxvYWRCdG5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICByZXFzOiB7IFtrZXk6IHN0cmluZ106IFN1YnNjcmlwdGlvbiB9ID0ge307XHJcbiAgcHJpdmF0ZSBpbml0ZWQgPSBmYWxzZTtcclxuICBwcml2YXRlIGRlc3Ryb3kgPSBmYWxzZTtcclxuXHJcbiAgQFZpZXdDaGlsZCgnZmlsZScsIHsgc3RhdGljOiBmYWxzZSB9KSBmaWxlOiBFbGVtZW50UmVmO1xyXG5cclxuICAvLyAjcmVnaW9uIGZpZWxkc1xyXG4gIEBJbnB1dCgpIGNsYXNzZXM6IHt9ID0ge307XHJcbiAgQElucHV0KCkgb3B0aW9uczogWmlwQnV0dG9uT3B0aW9ucztcclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXHJcbiAgb25DbGljaygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm9wdGlvbnMuZGlzYWJsZWQgfHwgIXRoaXMub3B0aW9ucy5vcGVuRmlsZURpYWxvZ09uQ2xpY2spIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgKHRoaXMuZmlsZS5uYXRpdmVFbGVtZW50IGFzIEhUTUxJbnB1dEVsZW1lbnQpLmNsaWNrKCk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcclxuICBvbktleURvd24oZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5kaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicgfHwgZS5rZXlDb2RlID09PSBFTlRFUikge1xyXG4gICAgICB0aGlzLm9uQ2xpY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2Ryb3AnLCBbJyRldmVudCddKVxyXG4gIEBIb3N0TGlzdGVuZXIoJ2RyYWdvdmVyJywgWyckZXZlbnQnXSlcclxuICAvLyBza2lwIHNhZmFyaSBidWdcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgb25GaWxlRHJvcChlOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm9wdGlvbnMuZGlzYWJsZWQgfHwgZS50eXBlID09PSAnZHJhZ292ZXInKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5kaXJlY3RvcnkpIHtcclxuICAgICAgdGhpcy50cmF2ZXJzZUZpbGVUcmVlKGUuZGF0YVRyYW5zZmVyIS5pdGVtcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBmaWxlczogRmlsZVtdID0gQXJyYXkucHJvdG90eXBlLnNsaWNlXHJcbiAgICAgICAgLmNhbGwoZS5kYXRhVHJhbnNmZXIhLmZpbGVzKVxyXG4gICAgICAgIC5maWx0ZXIoKGZpbGU6IEZpbGUpID0+IHRoaXMuYXR0ckFjY2VwdChmaWxlLCB0aGlzLm9wdGlvbnMuYWNjZXB0KSk7XHJcbiAgICAgIGlmIChmaWxlcy5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLnVwbG9hZEZpbGVzKGZpbGVzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlKGU6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5vcHRpb25zLmRpc2FibGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGhpZSA9IGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICB0aGlzLnVwbG9hZEZpbGVzKGhpZS5maWxlcyEpO1xyXG4gICAgaGllLnZhbHVlID0gJyc7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRyYXZlcnNlRmlsZVRyZWUoZmlsZXM6IERhdGFUcmFuc2Zlckl0ZW1MaXN0KTogdm9pZCB7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgICBjb25zdCBfdHJhdmVyc2VGaWxlVHJlZSA9IChpdGVtOiBhbnksIHBhdGg6IHN0cmluZykgPT4ge1xyXG4gICAgICBpZiAoaXRlbS5pc0ZpbGUpIHtcclxuICAgICAgICBpdGVtLmZpbGUoKGZpbGU6IEZpbGUpID0+IHtcclxuICAgICAgICAgIGlmICh0aGlzLmF0dHJBY2NlcHQoZmlsZSwgdGhpcy5vcHRpb25zLmFjY2VwdCkpIHtcclxuICAgICAgICAgICAgdGhpcy51cGxvYWRGaWxlcyhbZmlsZV0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKGl0ZW0uaXNEaXJlY3RvcnkpIHtcclxuICAgICAgICBjb25zdCBkaXJSZWFkZXIgPSBpdGVtLmNyZWF0ZVJlYWRlcigpO1xyXG5cclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgICAgICAgZGlyUmVhZGVyLnJlYWRFbnRyaWVzKChlbnRyaWVzOiBhbnkpID0+IHtcclxuICAgICAgICAgIGZvciAoY29uc3QgZW50cmllSXRlbSBvZiBlbnRyaWVzKSB7XHJcbiAgICAgICAgICAgIF90cmF2ZXJzZUZpbGVUcmVlKGVudHJpZUl0ZW0sIGAke3BhdGh9JHtpdGVtLm5hbWV9L2ApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gICAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzIGFzIGFueSkge1xyXG4gICAgICBfdHJhdmVyc2VGaWxlVHJlZShmaWxlLndlYmtpdEdldEFzRW50cnkoKSwgJycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhdHRyQWNjZXB0KGZpbGU6IEZpbGUsIGFjY2VwdGVkRmlsZXM/OiBzdHJpbmcgfCBzdHJpbmdbXSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKGZpbGUgJiYgYWNjZXB0ZWRGaWxlcykge1xyXG4gICAgICBjb25zdCBhY2NlcHRlZEZpbGVzQXJyYXkgPSBBcnJheS5pc0FycmF5KGFjY2VwdGVkRmlsZXMpID8gYWNjZXB0ZWRGaWxlcyA6IGFjY2VwdGVkRmlsZXMuc3BsaXQoJywnKTtcclxuICAgICAgY29uc3QgZmlsZU5hbWUgPSAnJyArIGZpbGUubmFtZTtcclxuICAgICAgY29uc3QgbWltZVR5cGUgPSAnJyArIGZpbGUudHlwZTtcclxuICAgICAgY29uc3QgYmFzZU1pbWVUeXBlID0gbWltZVR5cGUucmVwbGFjZSgvXFwvLiokLywgJycpO1xyXG5cclxuICAgICAgcmV0dXJuIGFjY2VwdGVkRmlsZXNBcnJheS5zb21lKHR5cGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IHZhbGlkVHlwZSA9IHR5cGUudHJpbSgpO1xyXG4gICAgICAgIGlmICh2YWxpZFR5cGUuY2hhckF0KDApID09PSAnLicpIHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIGZpbGVOYW1lXHJcbiAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgICAuaW5kZXhPZih2YWxpZFR5cGUudG9Mb3dlckNhc2UoKSwgZmlsZU5hbWUudG9Mb3dlckNhc2UoKS5sZW5ndGggLSB2YWxpZFR5cGUudG9Mb3dlckNhc2UoKS5sZW5ndGgpICE9PSAtMVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2UgaWYgKC9cXC9cXCokLy50ZXN0KHZhbGlkVHlwZSkpIHtcclxuICAgICAgICAgIC8vIFRoaXMgaXMgc29tZXRoaW5nIGxpa2UgYSBpbWFnZS8qIG1pbWUgdHlwZVxyXG4gICAgICAgICAgcmV0dXJuIGJhc2VNaW1lVHlwZSA9PT0gdmFsaWRUeXBlLnJlcGxhY2UoL1xcLy4qJC8sICcnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1pbWVUeXBlID09PSB2YWxpZFR5cGU7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGF0dGFjaFVpZChmaWxlOiBVcGxvYWRGaWxlKTogVXBsb2FkRmlsZSB7XHJcbiAgICBpZiAoIWZpbGUudWlkKSB7XHJcbiAgICAgIGZpbGUudWlkID0gTWF0aC5yYW5kb20oKVxyXG4gICAgICAgIC50b1N0cmluZygzNilcclxuICAgICAgICAuc3Vic3RyaW5nKDIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZpbGU7XHJcbiAgfVxyXG5cclxuICB1cGxvYWRGaWxlcyhmaWxlTGlzdDogRmlsZUxpc3QgfCBGaWxlW10pOiB2b2lkIHtcclxuICAgIGxldCBmaWx0ZXJzJDogT2JzZXJ2YWJsZTxVcGxvYWRGaWxlW10+ID0gb2YoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZmlsZUxpc3QpKTtcclxuICAgIGlmICh0aGlzLm9wdGlvbnMuZmlsdGVycykge1xyXG4gICAgICB0aGlzLm9wdGlvbnMuZmlsdGVycy5mb3JFYWNoKGYgPT4ge1xyXG4gICAgICAgIGZpbHRlcnMkID0gZmlsdGVycyQucGlwZShcclxuICAgICAgICAgIHN3aXRjaE1hcChsaXN0ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZm5SZXMgPSBmLmZuKGxpc3QpO1xyXG4gICAgICAgICAgICByZXR1cm4gZm5SZXMgaW5zdGFuY2VvZiBPYnNlcnZhYmxlID8gZm5SZXMgOiBvZihmblJlcyk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZmlsdGVycyQuc3Vic2NyaWJlKFxyXG4gICAgICBsaXN0ID0+IHtcclxuICAgICAgICBsaXN0LmZvckVhY2goKGZpbGU6IFVwbG9hZEZpbGUpID0+IHtcclxuICAgICAgICAgIHRoaXMuYXR0YWNoVWlkKGZpbGUpO1xyXG4gICAgICAgICAgdGhpcy51cGxvYWQoZmlsZSwgbGlzdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGUgPT4ge1xyXG4gICAgICAgIHdhcm4oYFVuaGFuZGxlZCB1cGxvYWQgZmlsdGVyIGVycm9yYCwgZSk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwbG9hZChmaWxlOiBVcGxvYWRGaWxlLCBmaWxlTGlzdDogVXBsb2FkRmlsZVtdKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5iZWZvcmVVcGxvYWQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucG9zdChmaWxlKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGJlZm9yZSA9IHRoaXMub3B0aW9ucy5iZWZvcmVVcGxvYWQoZmlsZSwgZmlsZUxpc3QpO1xyXG4gICAgaWYgKGJlZm9yZSBpbnN0YW5jZW9mIE9ic2VydmFibGUpIHtcclxuICAgICAgYmVmb3JlLnN1YnNjcmliZShcclxuICAgICAgICAocHJvY2Vzc2VkRmlsZTogVXBsb2FkRmlsZSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgcHJvY2Vzc2VkRmlsZVR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwocHJvY2Vzc2VkRmlsZSk7XHJcbiAgICAgICAgICBpZiAocHJvY2Vzc2VkRmlsZVR5cGUgPT09ICdbb2JqZWN0IEZpbGVdJyB8fCBwcm9jZXNzZWRGaWxlVHlwZSA9PT0gJ1tvYmplY3QgQmxvYl0nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXR0YWNoVWlkKHByb2Nlc3NlZEZpbGUpO1xyXG4gICAgICAgICAgICB0aGlzLnBvc3QocHJvY2Vzc2VkRmlsZSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9jZXNzZWRGaWxlID09PSAnYm9vbGVhbicgJiYgcHJvY2Vzc2VkRmlsZSAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5wb3N0KGZpbGUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZSA9PiB7XHJcbiAgICAgICAgICB3YXJuKGBVbmhhbmRsZWQgdXBsb2FkIGJlZm9yZVVwbG9hZCBlcnJvcmAsIGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAoYmVmb3JlICE9PSBmYWxzZSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5wb3N0KGZpbGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwb3N0KGZpbGU6IFVwbG9hZEZpbGUpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRlc3Ryb3kpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgb3B0ID0gdGhpcy5vcHRpb25zO1xyXG4gICAgY29uc3QgeyB1aWQgfSA9IGZpbGU7XHJcbiAgICBsZXQgeyBkYXRhLCBoZWFkZXJzIH0gPSBvcHQ7XHJcbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgZGF0YSA9IChkYXRhIGFzIChmaWxlOiBVcGxvYWRGaWxlKSA9PiB7fSkoZmlsZSk7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIGhlYWRlcnMgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgaGVhZGVycyA9IChoZWFkZXJzIGFzIChmaWxlOiBVcGxvYWRGaWxlKSA9PiB7fSkoZmlsZSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBhcmdzOiBVcGxvYWRYSFJBcmdzID0ge1xyXG4gICAgICBhY3Rpb246IG9wdC5hY3Rpb24sXHJcbiAgICAgIG5hbWU6IG9wdC5uYW1lLFxyXG4gICAgICBoZWFkZXJzLFxyXG4gICAgICBmaWxlLFxyXG4gICAgICBkYXRhLFxyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IG9wdC53aXRoQ3JlZGVudGlhbHMsXHJcbiAgICAgIG9uUHJvZ3Jlc3M6IG9wdC5vblByb2dyZXNzXHJcbiAgICAgICAgPyBlID0+IHtcclxuICAgICAgICAgICAgb3B0Lm9uUHJvZ3Jlc3MhKGUsIGZpbGUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDogdW5kZWZpbmVkLFxyXG4gICAgICBvblN1Y2Nlc3M6IChyZXQsIHhocikgPT4ge1xyXG4gICAgICAgIHRoaXMuY2xlYW4odWlkKTtcclxuICAgICAgICBvcHQub25TdWNjZXNzIShyZXQsIGZpbGUsIHhocik7XHJcbiAgICAgIH0sXHJcbiAgICAgIG9uRXJyb3I6IHhociA9PiB7XHJcbiAgICAgICAgdGhpcy5jbGVhbih1aWQpO1xyXG4gICAgICAgIG9wdC5vbkVycm9yISh4aHIsIGZpbGUpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgcmVxJCA9IChvcHQuY3VzdG9tUmVxdWVzdCB8fCB0aGlzLnhocikuY2FsbCh0aGlzLCBhcmdzKTtcclxuICAgIGlmICghKHJlcSQgaW5zdGFuY2VvZiBTdWJzY3JpcHRpb24pKSB7XHJcbiAgICAgIHdhcm4oYE11c3QgcmV0dXJuIFN1YnNjcmlwdGlvbiB0eXBlIGluICdbbnpDdXN0b21SZXF1ZXN0XScgcHJvcGVydHlgKTtcclxuICAgIH1cclxuICAgIHRoaXMucmVxc1t1aWRdID0gcmVxJDtcclxuICAgIG9wdC5vblN0YXJ0IShmaWxlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgeGhyKGFyZ3M6IFVwbG9hZFhIUkFyZ3MpOiBTdWJzY3JpcHRpb24ge1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICAgIGZvcm1EYXRhLmFwcGVuZChhcmdzLm5hbWUhLCBhcmdzLmZpbGUgYXMgYW55KTtcclxuICAgIGlmIChhcmdzLmRhdGEpIHtcclxuICAgICAgT2JqZWN0LmtleXMoYXJncy5kYXRhKS5tYXAoa2V5ID0+IHtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoa2V5LCBhcmdzLmRhdGEhW2tleV0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmICghYXJncy5oZWFkZXJzKSB7XHJcbiAgICAgIGFyZ3MuaGVhZGVycyA9IHt9O1xyXG4gICAgfVxyXG4gICAgaWYgKGFyZ3MuaGVhZGVyc1snWC1SZXF1ZXN0ZWQtV2l0aCddICE9PSBudWxsKSB7XHJcbiAgICAgIGFyZ3MuaGVhZGVyc1snWC1SZXF1ZXN0ZWQtV2l0aCddID0gYFhNTEh0dHBSZXF1ZXN0YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRlbGV0ZSBhcmdzLmhlYWRlcnNbJ1gtUmVxdWVzdGVkLVdpdGgnXTtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlcSA9IG5ldyBIdHRwUmVxdWVzdCgnUE9TVCcsIGFyZ3MuYWN0aW9uISwgZm9ybURhdGEsIHtcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M6IHRydWUsXHJcbiAgICAgIHdpdGhDcmVkZW50aWFsczogYXJncy53aXRoQ3JlZGVudGlhbHMsXHJcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyhhcmdzLmhlYWRlcnMpXHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdChyZXEpLnN1YnNjcmliZShcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWFueVxyXG4gICAgICAoZXZlbnQ6IEh0dHBFdmVudDxhbnk+KSA9PiB7XHJcbiAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09IEh0dHBFdmVudFR5cGUuVXBsb2FkUHJvZ3Jlc3MpIHtcclxuICAgICAgICAgIGlmIChldmVudC50b3RhbCEgPiAwKSB7XHJcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICAgICAgICAgICAgKGV2ZW50IGFzIGFueSkucGVyY2VudCA9IChldmVudC5sb2FkZWQgLyBldmVudC50b3RhbCEpICogMTAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYXJncy5vblByb2dyZXNzIShldmVudCwgYXJncy5maWxlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50IGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlKSB7XHJcbiAgICAgICAgICBhcmdzLm9uU3VjY2VzcyEoZXZlbnQuYm9keSwgYXJncy5maWxlLCBldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBlcnIgPT4ge1xyXG4gICAgICAgIHRoaXMuYWJvcnQoYXJncy5maWxlKTtcclxuICAgICAgICBhcmdzLm9uRXJyb3IhKGVyciwgYXJncy5maWxlKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xlYW4odWlkOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGNvbnN0IHJlcSQgPSB0aGlzLnJlcXNbdWlkXTtcclxuICAgIGlmIChyZXEkIGluc3RhbmNlb2YgU3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgIHJlcSQudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICAgIGRlbGV0ZSB0aGlzLnJlcXNbdWlkXTtcclxuICB9XHJcblxyXG4gIGFib3J0KGZpbGU/OiBVcGxvYWRGaWxlKTogdm9pZCB7XHJcbiAgICBpZiAoZmlsZSkge1xyXG4gICAgICB0aGlzLmNsZWFuKGZpbGUgJiYgZmlsZS51aWQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgT2JqZWN0LmtleXModGhpcy5yZXFzKS5mb3JFYWNoKHVpZCA9PiB0aGlzLmNsZWFuKHVpZCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gI3JlZ2lvbiBzdHlsZXNcclxuXHJcbiAgcHJpdmF0ZSBwcmVmaXhDbHMgPSAnYW50LXVwbG9hZCc7XHJcblxyXG4gIHByaXZhdGUgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICBjb25zdCBjbGFzc01hcCA9IHtcclxuICAgICAgW3RoaXMucHJlZml4Q2xzXTogdHJ1ZSxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1kaXNhYmxlZGBdOiB0aGlzLm9wdGlvbnMuZGlzYWJsZWQsXHJcbiAgICAgIC4uLnRoaXMuY2xhc3Nlc1xyXG4gICAgfTtcclxuICAgIHRoaXMudXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCBjbGFzc01hcCk7XHJcbiAgfVxyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgdXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICBpZiAoIWh0dHApIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBOb3QgZm91bmQgJ0h0dHBDbGllbnQnLCBZb3UgY2FuIGltcG9ydCAnSHR0cENsaWVudE1vZHVsZScgaW4geW91ciByb290IG1vZHVsZS5gKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pbml0ZWQpIHtcclxuICAgICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kgPSB0cnVlO1xyXG4gICAgdGhpcy5hYm9ydCgpO1xyXG4gIH1cclxufVxyXG4iXX0=
/**
 * @fileoverview added by tsickle
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
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common/http';
import * as ɵngcc2 from 'ng-zorro-antd/core';

var _c0 = ["file"];
var _c1 = ["nz-upload-btn", ""];
var _c2 = ["*"];
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
NzUploadBtnComponent.ɵfac = function NzUploadBtnComponent_Factory(t) { return new (t || NzUploadBtnComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.HttpClient, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NzUpdateHostClassService)); };
NzUploadBtnComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzUploadBtnComponent, selectors: [["", "nz-upload-btn", ""]], viewQuery: function NzUploadBtnComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.file = _t.first);
    } }, hostVars: 2, hostBindings: function NzUploadBtnComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function NzUploadBtnComponent_click_HostBindingHandler() { return ctx.onClick(); })("keydown", function NzUploadBtnComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); })("drop", function NzUploadBtnComponent_drop_HostBindingHandler($event) { return ctx.onFileDrop($event); })("dragover", function NzUploadBtnComponent_dragover_HostBindingHandler($event) { return ctx.onFileDrop($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("tabindex", "0")("role", "button");
    } }, inputs: { classes: "classes", options: "options" }, exportAs: ["nzUploadBtn"], features: [ɵngcc0.ɵɵProvidersFeature([NzUpdateHostClassService]), ɵngcc0.ɵɵNgOnChangesFeature], attrs: _c1, ngContentSelectors: _c2, decls: 3, vars: 4, consts: [["type", "file", 2, "display", "none", 3, "multiple", "change"], ["file", ""]], template: function NzUploadBtnComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "input", 0, 1);
        ɵngcc0.ɵɵlistener("change", function NzUploadBtnComponent_Template_input_change_0_listener($event) { return ctx.onChange($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵprojection(2);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("multiple", ctx.options.multiple);
        ɵngcc0.ɵɵattribute("accept", ctx.options.accept)("directory", ctx.options.directory ? "directory" : null)("webkitdirectory", ctx.options.directory ? "webkitdirectory" : null);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzUploadBtnComponent, [{
        type: Component,
        args: [{
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
            }]
    }], function () { return [{ type: ɵngcc1.HttpClient, decorators: [{
                type: Optional
            }] }, { type: ɵngcc0.ElementRef }, { type: ɵngcc2.NzUpdateHostClassService }]; }, { classes: [{
            type: Input
        }], onClick: [{
            type: HostListener,
            args: ['click']
        }], onKeyDown: [{
            type: HostListener,
            args: ['keydown', ['$event']]
        }], onFileDrop: [{
            type: HostListener,
            args: ['drop', ['$event']]
        }, {
            type: HostListener,
            args: ['dragover', ['$event']]
        }], file: [{
            type: ViewChild,
            args: ['file', { static: false }]
        }], options: [{
            type: Input
        }] }); })();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdXBsb2FkLWJ0bi5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIm5nOi9uZy16b3Jyby1hbnRkL3VwbG9hZC9uei11cGxvYWQtYnRuLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBYSxhQUFhLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNwSCxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUlMLFFBQVEsRUFDUixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLElBQUksRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7Ozs7OztBQUlwRTtJQTBTRSxhQUFhO0lBRWIsOEJBQ3NCLElBQWdCLEVBQzVCLEVBQWMsRUFDZCxzQkFBZ0Q7UUFGcEMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUM1QixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUEwQjtRQWxTMUQsU0FBSSxHQUFvQyxFQUFFLENBQUM7UUFDbkMsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLFlBQU8sR0FBRyxLQUFLLENBQUM7O1FBS2YsWUFBTyxHQUFPLEVBQUUsQ0FBQzs7UUEyUWxCLGNBQVMsR0FBRyxZQUFZLENBQUM7UUFrQi9CLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxNQUFNLElBQUksS0FBSyxDQUFDLGdGQUFnRixDQUFDLENBQUM7U0FDbkc7SUFDSCxD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QUFFLENBQUMsUUFBUSxDQUFDO29CQTVCakMsaUJBQWlCLEVBQUUsS0FBSywwQkFDeEIsYUFBYSxFQUFFLFVBQVUsc0JBQzFCLHhGQW9DQSxZQUFZLFNBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLGNBQy9CLFlBQVksU0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0NBcENwQyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQyxzQkFDckMsbUJBQW1CLEVBQUUsS0FBSyxzQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUksa0JBQ3RDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQWtDUztJQXdSViwyQkFBQztDQUFBLEFBclVELElBcVVDO1NBelRZLG9CQUFvQjs7O0lBQy9CLG9DQUEyQzs7Ozs7SUFDM0Msc0NBQXVCOzs7OztJQUN2Qix1Q0FBd0I7O0lBRXhCLG9DQUF1RDs7SUFHdkQsdUNBQTBCOztJQUMxQix1Q0FBbUM7Ozs7O0lBMFFuQyx5Q0FBaUM7Ozs7O0lBYy9CLG9DQUFvQzs7Ozs7SUFDcEMsa0NBQXNCOzs7OztJQUN0QixzREFBd0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEVOVEVSIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEV2ZW50LCBIdHRwRXZlbnRUeXBlLCBIdHRwSGVhZGVycywgSHR0cFJlcXVlc3QsIEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IG9mLCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgd2FybiwgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IFVwbG9hZEZpbGUsIFVwbG9hZFhIUkFyZ3MsIFppcEJ1dHRvbk9wdGlvbnMgfSBmcm9tICcuL2ludGVyZmFjZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1tuei11cGxvYWQtYnRuXScsXHJcbiAgZXhwb3J0QXM6ICduelVwbG9hZEJ0bicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXVwbG9hZC1idG4uY29tcG9uZW50Lmh0bWwnLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbYXR0ci50YWJpbmRleF0nOiAnXCIwXCInLFxyXG4gICAgJ1thdHRyLnJvbGVdJzogJ1wiYnV0dG9uXCInXHJcbiAgfSxcclxuICBwcm92aWRlcnM6IFtOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VdLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIE56VXBsb2FkQnRuQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgcmVxczogeyBba2V5OiBzdHJpbmddOiBTdWJzY3JpcHRpb24gfSA9IHt9O1xyXG4gIHByaXZhdGUgaW5pdGVkID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBkZXN0cm95ID0gZmFsc2U7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2ZpbGUnLCB7IHN0YXRpYzogZmFsc2UgfSkgZmlsZTogRWxlbWVudFJlZjtcclxuXHJcbiAgLy8gI3JlZ2lvbiBmaWVsZHNcclxuICBASW5wdXQoKSBjbGFzc2VzOiB7fSA9IHt9O1xyXG4gIEBJbnB1dCgpIG9wdGlvbnM6IFppcEJ1dHRvbk9wdGlvbnM7XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxyXG4gIG9uQ2xpY2soKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5vcHRpb25zLmRpc2FibGVkIHx8ICF0aGlzLm9wdGlvbnMub3BlbkZpbGVEaWFsb2dPbkNsaWNrKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgICh0aGlzLmZpbGUubmF0aXZlRWxlbWVudCBhcyBIVE1MSW5wdXRFbGVtZW50KS5jbGljaygpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXHJcbiAgb25LZXlEb3duKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm9wdGlvbnMuZGlzYWJsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInIHx8IGUua2V5Q29kZSA9PT0gRU5URVIpIHtcclxuICAgICAgdGhpcy5vbkNsaWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdkcm9wJywgWyckZXZlbnQnXSlcclxuICBASG9zdExpc3RlbmVyKCdkcmFnb3ZlcicsIFsnJGV2ZW50J10pXHJcbiAgLy8gc2tpcCBzYWZhcmkgYnVnXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIG9uRmlsZURyb3AoZTogYW55KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5vcHRpb25zLmRpc2FibGVkIHx8IGUudHlwZSA9PT0gJ2RyYWdvdmVyJykge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm9wdGlvbnMuZGlyZWN0b3J5KSB7XHJcbiAgICAgIHRoaXMudHJhdmVyc2VGaWxlVHJlZShlLmRhdGFUcmFuc2ZlciEuaXRlbXMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgZmlsZXM6IEZpbGVbXSA9IEFycmF5LnByb3RvdHlwZS5zbGljZVxyXG4gICAgICAgIC5jYWxsKGUuZGF0YVRyYW5zZmVyIS5maWxlcylcclxuICAgICAgICAuZmlsdGVyKChmaWxlOiBGaWxlKSA9PiB0aGlzLmF0dHJBY2NlcHQoZmlsZSwgdGhpcy5vcHRpb25zLmFjY2VwdCkpO1xyXG4gICAgICBpZiAoZmlsZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy51cGxvYWRGaWxlcyhmaWxlcyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZShlOiBFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5kaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBoaWUgPSBlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgdGhpcy51cGxvYWRGaWxlcyhoaWUuZmlsZXMhKTtcclxuICAgIGhpZS52YWx1ZSA9ICcnO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0cmF2ZXJzZUZpbGVUcmVlKGZpbGVzOiBEYXRhVHJhbnNmZXJJdGVtTGlzdCk6IHZvaWQge1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gICAgY29uc3QgX3RyYXZlcnNlRmlsZVRyZWUgPSAoaXRlbTogYW55LCBwYXRoOiBzdHJpbmcpID0+IHtcclxuICAgICAgaWYgKGl0ZW0uaXNGaWxlKSB7XHJcbiAgICAgICAgaXRlbS5maWxlKChmaWxlOiBGaWxlKSA9PiB7XHJcbiAgICAgICAgICBpZiAodGhpcy5hdHRyQWNjZXB0KGZpbGUsIHRoaXMub3B0aW9ucy5hY2NlcHQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBsb2FkRmlsZXMoW2ZpbGVdKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmIChpdGVtLmlzRGlyZWN0b3J5KSB7XHJcbiAgICAgICAgY29uc3QgZGlyUmVhZGVyID0gaXRlbS5jcmVhdGVSZWFkZXIoKTtcclxuXHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gICAgICAgIGRpclJlYWRlci5yZWFkRW50cmllcygoZW50cmllczogYW55KSA9PiB7XHJcbiAgICAgICAgICBmb3IgKGNvbnN0IGVudHJpZUl0ZW0gb2YgZW50cmllcykge1xyXG4gICAgICAgICAgICBfdHJhdmVyc2VGaWxlVHJlZShlbnRyaWVJdGVtLCBgJHtwYXRofSR7aXRlbS5uYW1lfS9gKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICAgIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcyBhcyBhbnkpIHtcclxuICAgICAgX3RyYXZlcnNlRmlsZVRyZWUoZmlsZS53ZWJraXRHZXRBc0VudHJ5KCksICcnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXR0ckFjY2VwdChmaWxlOiBGaWxlLCBhY2NlcHRlZEZpbGVzPzogc3RyaW5nIHwgc3RyaW5nW10pOiBib29sZWFuIHtcclxuICAgIGlmIChmaWxlICYmIGFjY2VwdGVkRmlsZXMpIHtcclxuICAgICAgY29uc3QgYWNjZXB0ZWRGaWxlc0FycmF5ID0gQXJyYXkuaXNBcnJheShhY2NlcHRlZEZpbGVzKSA/IGFjY2VwdGVkRmlsZXMgOiBhY2NlcHRlZEZpbGVzLnNwbGl0KCcsJyk7XHJcbiAgICAgIGNvbnN0IGZpbGVOYW1lID0gJycgKyBmaWxlLm5hbWU7XHJcbiAgICAgIGNvbnN0IG1pbWVUeXBlID0gJycgKyBmaWxlLnR5cGU7XHJcbiAgICAgIGNvbnN0IGJhc2VNaW1lVHlwZSA9IG1pbWVUeXBlLnJlcGxhY2UoL1xcLy4qJC8sICcnKTtcclxuXHJcbiAgICAgIHJldHVybiBhY2NlcHRlZEZpbGVzQXJyYXkuc29tZSh0eXBlID0+IHtcclxuICAgICAgICBjb25zdCB2YWxpZFR5cGUgPSB0eXBlLnRyaW0oKTtcclxuICAgICAgICBpZiAodmFsaWRUeXBlLmNoYXJBdCgwKSA9PT0gJy4nKSB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBmaWxlTmFtZVxyXG4gICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgICAgLmluZGV4T2YodmFsaWRUeXBlLnRvTG93ZXJDYXNlKCksIGZpbGVOYW1lLnRvTG93ZXJDYXNlKCkubGVuZ3RoIC0gdmFsaWRUeXBlLnRvTG93ZXJDYXNlKCkubGVuZ3RoKSAhPT0gLTFcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIGlmICgvXFwvXFwqJC8udGVzdCh2YWxpZFR5cGUpKSB7XHJcbiAgICAgICAgICAvLyBUaGlzIGlzIHNvbWV0aGluZyBsaWtlIGEgaW1hZ2UvKiBtaW1lIHR5cGVcclxuICAgICAgICAgIHJldHVybiBiYXNlTWltZVR5cGUgPT09IHZhbGlkVHlwZS5yZXBsYWNlKC9cXC8uKiQvLCAnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtaW1lVHlwZSA9PT0gdmFsaWRUeXBlO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhdHRhY2hVaWQoZmlsZTogVXBsb2FkRmlsZSk6IFVwbG9hZEZpbGUge1xyXG4gICAgaWYgKCFmaWxlLnVpZCkge1xyXG4gICAgICBmaWxlLnVpZCA9IE1hdGgucmFuZG9tKClcclxuICAgICAgICAudG9TdHJpbmcoMzYpXHJcbiAgICAgICAgLnN1YnN0cmluZygyKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmaWxlO1xyXG4gIH1cclxuXHJcbiAgdXBsb2FkRmlsZXMoZmlsZUxpc3Q6IEZpbGVMaXN0IHwgRmlsZVtdKTogdm9pZCB7XHJcbiAgICBsZXQgZmlsdGVycyQ6IE9ic2VydmFibGU8VXBsb2FkRmlsZVtdPiA9IG9mKEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZpbGVMaXN0KSk7XHJcbiAgICBpZiAodGhpcy5vcHRpb25zLmZpbHRlcnMpIHtcclxuICAgICAgdGhpcy5vcHRpb25zLmZpbHRlcnMuZm9yRWFjaChmID0+IHtcclxuICAgICAgICBmaWx0ZXJzJCA9IGZpbHRlcnMkLnBpcGUoXHJcbiAgICAgICAgICBzd2l0Y2hNYXAobGlzdCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZuUmVzID0gZi5mbihsaXN0KTtcclxuICAgICAgICAgICAgcmV0dXJuIGZuUmVzIGluc3RhbmNlb2YgT2JzZXJ2YWJsZSA/IGZuUmVzIDogb2YoZm5SZXMpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGZpbHRlcnMkLnN1YnNjcmliZShcclxuICAgICAgbGlzdCA9PiB7XHJcbiAgICAgICAgbGlzdC5mb3JFYWNoKChmaWxlOiBVcGxvYWRGaWxlKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmF0dGFjaFVpZChmaWxlKTtcclxuICAgICAgICAgIHRoaXMudXBsb2FkKGZpbGUsIGxpc3QpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICBlID0+IHtcclxuICAgICAgICB3YXJuKGBVbmhhbmRsZWQgdXBsb2FkIGZpbHRlciBlcnJvcmAsIGUpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGxvYWQoZmlsZTogVXBsb2FkRmlsZSwgZmlsZUxpc3Q6IFVwbG9hZEZpbGVbXSk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuYmVmb3JlVXBsb2FkKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnBvc3QoZmlsZSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBiZWZvcmUgPSB0aGlzLm9wdGlvbnMuYmVmb3JlVXBsb2FkKGZpbGUsIGZpbGVMaXN0KTtcclxuICAgIGlmIChiZWZvcmUgaW5zdGFuY2VvZiBPYnNlcnZhYmxlKSB7XHJcbiAgICAgIGJlZm9yZS5zdWJzY3JpYmUoXHJcbiAgICAgICAgKHByb2Nlc3NlZEZpbGU6IFVwbG9hZEZpbGUpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHByb2Nlc3NlZEZpbGVUeXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHByb2Nlc3NlZEZpbGUpO1xyXG4gICAgICAgICAgaWYgKHByb2Nlc3NlZEZpbGVUeXBlID09PSAnW29iamVjdCBGaWxlXScgfHwgcHJvY2Vzc2VkRmlsZVR5cGUgPT09ICdbb2JqZWN0IEJsb2JdJykge1xyXG4gICAgICAgICAgICB0aGlzLmF0dGFjaFVpZChwcm9jZXNzZWRGaWxlKTtcclxuICAgICAgICAgICAgdGhpcy5wb3N0KHByb2Nlc3NlZEZpbGUpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcHJvY2Vzc2VkRmlsZSA9PT0gJ2Jvb2xlYW4nICYmIHByb2Nlc3NlZEZpbGUgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9zdChmaWxlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGUgPT4ge1xyXG4gICAgICAgICAgd2FybihgVW5oYW5kbGVkIHVwbG9hZCBiZWZvcmVVcGxvYWQgZXJyb3JgLCBlKTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2UgaWYgKGJlZm9yZSAhPT0gZmFsc2UpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucG9zdChmaWxlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcG9zdChmaWxlOiBVcGxvYWRGaWxlKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kZXN0cm95KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IG9wdCA9IHRoaXMub3B0aW9ucztcclxuICAgIGNvbnN0IHsgdWlkIH0gPSBmaWxlO1xyXG4gICAgbGV0IHsgZGF0YSwgaGVhZGVycyB9ID0gb3B0O1xyXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIGRhdGEgPSAoZGF0YSBhcyAoZmlsZTogVXBsb2FkRmlsZSkgPT4ge30pKGZpbGUpO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBoZWFkZXJzID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIGhlYWRlcnMgPSAoaGVhZGVycyBhcyAoZmlsZTogVXBsb2FkRmlsZSkgPT4ge30pKGZpbGUpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYXJnczogVXBsb2FkWEhSQXJncyA9IHtcclxuICAgICAgYWN0aW9uOiBvcHQuYWN0aW9uLFxyXG4gICAgICBuYW1lOiBvcHQubmFtZSxcclxuICAgICAgaGVhZGVycyxcclxuICAgICAgZmlsZSxcclxuICAgICAgZGF0YSxcclxuICAgICAgd2l0aENyZWRlbnRpYWxzOiBvcHQud2l0aENyZWRlbnRpYWxzLFxyXG4gICAgICBvblByb2dyZXNzOiBvcHQub25Qcm9ncmVzc1xyXG4gICAgICAgID8gZSA9PiB7XHJcbiAgICAgICAgICAgIG9wdC5vblByb2dyZXNzIShlLCBmaWxlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICA6IHVuZGVmaW5lZCxcclxuICAgICAgb25TdWNjZXNzOiAocmV0LCB4aHIpID0+IHtcclxuICAgICAgICB0aGlzLmNsZWFuKHVpZCk7XHJcbiAgICAgICAgb3B0Lm9uU3VjY2VzcyEocmV0LCBmaWxlLCB4aHIpO1xyXG4gICAgICB9LFxyXG4gICAgICBvbkVycm9yOiB4aHIgPT4ge1xyXG4gICAgICAgIHRoaXMuY2xlYW4odWlkKTtcclxuICAgICAgICBvcHQub25FcnJvciEoeGhyLCBmaWxlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IHJlcSQgPSAob3B0LmN1c3RvbVJlcXVlc3QgfHwgdGhpcy54aHIpLmNhbGwodGhpcywgYXJncyk7XHJcbiAgICBpZiAoIShyZXEkIGluc3RhbmNlb2YgU3Vic2NyaXB0aW9uKSkge1xyXG4gICAgICB3YXJuKGBNdXN0IHJldHVybiBTdWJzY3JpcHRpb24gdHlwZSBpbiAnW256Q3VzdG9tUmVxdWVzdF0nIHByb3BlcnR5YCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnJlcXNbdWlkXSA9IHJlcSQ7XHJcbiAgICBvcHQub25TdGFydCEoZmlsZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHhocihhcmdzOiBVcGxvYWRYSFJBcmdzKTogU3Vic2NyaXB0aW9uIHtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoYXJncy5uYW1lISwgYXJncy5maWxlIGFzIGFueSk7XHJcbiAgICBpZiAoYXJncy5kYXRhKSB7XHJcbiAgICAgIE9iamVjdC5rZXlzKGFyZ3MuZGF0YSkubWFwKGtleSA9PiB7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKGtleSwgYXJncy5kYXRhIVtrZXldKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoIWFyZ3MuaGVhZGVycykge1xyXG4gICAgICBhcmdzLmhlYWRlcnMgPSB7fTtcclxuICAgIH1cclxuICAgIGlmIChhcmdzLmhlYWRlcnNbJ1gtUmVxdWVzdGVkLVdpdGgnXSAhPT0gbnVsbCkge1xyXG4gICAgICBhcmdzLmhlYWRlcnNbJ1gtUmVxdWVzdGVkLVdpdGgnXSA9IGBYTUxIdHRwUmVxdWVzdGA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkZWxldGUgYXJncy5oZWFkZXJzWydYLVJlcXVlc3RlZC1XaXRoJ107XHJcbiAgICB9XHJcbiAgICBjb25zdCByZXEgPSBuZXcgSHR0cFJlcXVlc3QoJ1BPU1QnLCBhcmdzLmFjdGlvbiEsIGZvcm1EYXRhLCB7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzOiB0cnVlLFxyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IGFyZ3Mud2l0aENyZWRlbnRpYWxzLFxyXG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoYXJncy5oZWFkZXJzKVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3QocmVxKS5zdWJzY3JpYmUoXHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1hbnlcclxuICAgICAgKGV2ZW50OiBIdHRwRXZlbnQ8YW55PikgPT4ge1xyXG4gICAgICAgIGlmIChldmVudC50eXBlID09PSBIdHRwRXZlbnRUeXBlLlVwbG9hZFByb2dyZXNzKSB7XHJcbiAgICAgICAgICBpZiAoZXZlbnQudG90YWwhID4gMCkge1xyXG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgICAgICAgICAgIChldmVudCBhcyBhbnkpLnBlcmNlbnQgPSAoZXZlbnQubG9hZGVkIC8gZXZlbnQudG90YWwhKSAqIDEwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGFyZ3Mub25Qcm9ncmVzcyEoZXZlbnQsIGFyZ3MuZmlsZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudCBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSkge1xyXG4gICAgICAgICAgYXJncy5vblN1Y2Nlc3MhKGV2ZW50LmJvZHksIGFyZ3MuZmlsZSwgZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgZXJyID0+IHtcclxuICAgICAgICB0aGlzLmFib3J0KGFyZ3MuZmlsZSk7XHJcbiAgICAgICAgYXJncy5vbkVycm9yIShlcnIsIGFyZ3MuZmlsZSk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsZWFuKHVpZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBjb25zdCByZXEkID0gdGhpcy5yZXFzW3VpZF07XHJcbiAgICBpZiAocmVxJCBpbnN0YW5jZW9mIFN1YnNjcmlwdGlvbikge1xyXG4gICAgICByZXEkLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgICBkZWxldGUgdGhpcy5yZXFzW3VpZF07XHJcbiAgfVxyXG5cclxuICBhYm9ydChmaWxlPzogVXBsb2FkRmlsZSk6IHZvaWQge1xyXG4gICAgaWYgKGZpbGUpIHtcclxuICAgICAgdGhpcy5jbGVhbihmaWxlICYmIGZpbGUudWlkKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMucmVxcykuZm9yRWFjaCh1aWQgPT4gdGhpcy5jbGVhbih1aWQpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vICNyZWdpb24gc3R5bGVzXHJcblxyXG4gIHByaXZhdGUgcHJlZml4Q2xzID0gJ2FudC11cGxvYWQnO1xyXG5cclxuICBwcml2YXRlIHNldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgY29uc3QgY2xhc3NNYXAgPSB7XHJcbiAgICAgIFt0aGlzLnByZWZpeENsc106IHRydWUsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tZGlzYWJsZWRgXTogdGhpcy5vcHRpb25zLmRpc2FibGVkLFxyXG4gICAgICAuLi50aGlzLmNsYXNzZXNcclxuICAgIH07XHJcbiAgICB0aGlzLnVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgY2xhc3NNYXApO1xyXG4gIH1cclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZVxyXG4gICkge1xyXG4gICAgaWYgKCFodHRwKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTm90IGZvdW5kICdIdHRwQ2xpZW50JywgWW91IGNhbiBpbXBvcnQgJ0h0dHBDbGllbnRNb2R1bGUnIGluIHlvdXIgcm9vdCBtb2R1bGUuYCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaW5pdGVkKSB7XHJcbiAgICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95ID0gdHJ1ZTtcclxuICAgIHRoaXMuYWJvcnQoKTtcclxuICB9XHJcbn1cclxuIl19
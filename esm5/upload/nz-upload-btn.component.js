import { __assign, __values } from "tslib";
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
import { Observable, of, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { NzUpdateHostClassService, warn } from 'ng-zorro-antd/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "ng-zorro-antd/core";
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
    NzUploadBtnComponent.prototype.onClick = function () {
        if (this.options.disabled || !this.options.openFileDialogOnClick) {
            return;
        }
        this.file.nativeElement.click();
    };
    NzUploadBtnComponent.prototype.onKeyDown = function (e) {
        if (this.options.disabled) {
            return;
        }
        if (e.key === 'Enter' || e.keyCode === ENTER) {
            this.onClick();
        }
    };
    // skip safari bug
    // tslint:disable-next-line:no-any
    NzUploadBtnComponent.prototype.onFileDrop = function (e) {
        var _this = this;
        if (this.options.disabled || e.type === 'dragover') {
            e.preventDefault();
            return;
        }
        if (this.options.directory) {
            this.traverseFileTree(e.dataTransfer.items);
        }
        else {
            var files = Array.prototype.slice
                .call(e.dataTransfer.files)
                .filter(function (file) { return _this.attrAccept(file, _this.options.accept); });
            if (files.length) {
                this.uploadFiles(files);
            }
        }
        e.preventDefault();
    };
    NzUploadBtnComponent.prototype.onChange = function (e) {
        if (this.options.disabled) {
            return;
        }
        var hie = e.target;
        this.uploadFiles(hie.files);
        hie.value = '';
    };
    NzUploadBtnComponent.prototype.traverseFileTree = function (files) {
        var e_1, _a;
        var _this = this;
        // tslint:disable-next-line:no-any
        var _traverseFileTree = function (item, path) {
            if (item.isFile) {
                item.file(function (file) {
                    if (_this.attrAccept(file, _this.options.accept)) {
                        _this.uploadFiles([file]);
                    }
                });
            }
            else if (item.isDirectory) {
                var dirReader = item.createReader();
                // tslint:disable-next-line:no-any
                dirReader.readEntries(function (entries) {
                    var e_2, _a;
                    try {
                        for (var entries_1 = __values(entries), entries_1_1 = entries_1.next(); !entries_1_1.done; entries_1_1 = entries_1.next()) {
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
                });
            }
        };
        try {
            // tslint:disable-next-line:no-any
            for (var _b = __values(files), _c = _b.next(); !_c.done; _c = _b.next()) {
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
    NzUploadBtnComponent.prototype.attrAccept = function (file, acceptedFiles) {
        if (file && acceptedFiles) {
            var acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(',');
            var fileName_1 = '' + file.name;
            var mimeType_1 = '' + file.type;
            var baseMimeType_1 = mimeType_1.replace(/\/.*$/, '');
            return acceptedFilesArray.some(function (type) {
                var validType = type.trim();
                if (validType.charAt(0) === '.') {
                    return (fileName_1.toLowerCase().indexOf(validType.toLowerCase(), fileName_1.toLowerCase().length - validType.toLowerCase().length) !== -1);
                }
                else if (/\/\*$/.test(validType)) {
                    // This is something like a image/* mime type
                    return baseMimeType_1 === validType.replace(/\/.*$/, '');
                }
                return mimeType_1 === validType;
            });
        }
        return true;
    };
    NzUploadBtnComponent.prototype.attachUid = function (file) {
        if (!file.uid) {
            file.uid = Math.random()
                .toString(36)
                .substring(2);
        }
        return file;
    };
    NzUploadBtnComponent.prototype.uploadFiles = function (fileList) {
        var _this = this;
        var filters$ = of(Array.prototype.slice.call(fileList));
        if (this.options.filters) {
            this.options.filters.forEach(function (f) {
                filters$ = filters$.pipe(switchMap(function (list) {
                    var fnRes = f.fn(list);
                    return fnRes instanceof Observable ? fnRes : of(fnRes);
                }));
            });
        }
        filters$.subscribe(function (list) {
            list.forEach(function (file) {
                _this.attachUid(file);
                _this.upload(file, list);
            });
        }, function (e) {
            warn("Unhandled upload filter error", e);
        });
    };
    NzUploadBtnComponent.prototype.upload = function (file, fileList) {
        var _this = this;
        if (!this.options.beforeUpload) {
            return this.post(file);
        }
        var before = this.options.beforeUpload(file, fileList);
        if (before instanceof Observable) {
            before.subscribe(function (processedFile) {
                var processedFileType = Object.prototype.toString.call(processedFile);
                if (processedFileType === '[object File]' || processedFileType === '[object Blob]') {
                    _this.attachUid(processedFile);
                    _this.post(processedFile);
                }
                else if (typeof processedFile === 'boolean' && processedFile !== false) {
                    _this.post(file);
                }
            }, function (e) {
                warn("Unhandled upload beforeUpload error", e);
            });
        }
        else if (before !== false) {
            return this.post(file);
        }
    };
    NzUploadBtnComponent.prototype.post = function (file) {
        var _this = this;
        if (this.destroy) {
            return;
        }
        var opt = this.options;
        var uid = file.uid;
        var data = opt.data, headers = opt.headers;
        if (typeof data === 'function') {
            data = data(file);
        }
        if (typeof headers === 'function') {
            headers = headers(file);
        }
        var args = {
            action: opt.action,
            name: opt.name,
            headers: headers,
            file: file,
            data: data,
            withCredentials: opt.withCredentials,
            onProgress: opt.onProgress
                ? function (e) {
                    opt.onProgress(e, file);
                }
                : undefined,
            onSuccess: function (ret, xhr) {
                _this.clean(uid);
                opt.onSuccess(ret, file, xhr);
            },
            onError: function (xhr) {
                _this.clean(uid);
                opt.onError(xhr, file);
            }
        };
        var req$ = (opt.customRequest || this.xhr).call(this, args);
        if (!(req$ instanceof Subscription)) {
            warn("Must return Subscription type in '[nzCustomRequest]' property");
        }
        this.reqs[uid] = req$;
        opt.onStart(file);
    };
    NzUploadBtnComponent.prototype.xhr = function (args) {
        var _this = this;
        var formData = new FormData();
        // tslint:disable-next-line:no-any
        formData.append(args.name, args.file);
        if (args.data) {
            Object.keys(args.data).map(function (key) {
                formData.append(key, args.data[key]);
            });
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
        var req = new HttpRequest('POST', args.action, formData, {
            reportProgress: true,
            withCredentials: args.withCredentials,
            headers: new HttpHeaders(args.headers)
        });
        return this.http.request(req).subscribe(
        // tslint:disable-next-line no-any
        function (event) {
            if (event.type === HttpEventType.UploadProgress) {
                if (event.total > 0) {
                    // tslint:disable-next-line:no-any
                    event.percent = (event.loaded / event.total) * 100;
                }
                args.onProgress(event, args.file);
            }
            else if (event instanceof HttpResponse) {
                args.onSuccess(event.body, args.file, event);
            }
        }, function (err) {
            _this.abort(args.file);
            args.onError(err, args.file);
        });
    };
    NzUploadBtnComponent.prototype.clean = function (uid) {
        var req$ = this.reqs[uid];
        if (req$ instanceof Subscription) {
            req$.unsubscribe();
        }
        delete this.reqs[uid];
    };
    NzUploadBtnComponent.prototype.abort = function (file) {
        var _this = this;
        if (file) {
            this.clean(file && file.uid);
        }
        else {
            Object.keys(this.reqs).forEach(function (uid) { return _this.clean(uid); });
        }
    };
    NzUploadBtnComponent.prototype.setClassMap = function () {
        var _a;
        var classMap = __assign((_a = {}, _a[this.prefixCls] = true, _a[this.prefixCls + "-disabled"] = this.options.disabled, _a), this.classes);
        this.updateHostClassService.updateHostClass(this.el.nativeElement, classMap);
    };
    NzUploadBtnComponent.prototype.ngOnInit = function () {
        this.inited = true;
        this.setClassMap();
    };
    NzUploadBtnComponent.prototype.ngOnChanges = function () {
        if (this.inited) {
            this.setClassMap();
        }
    };
    NzUploadBtnComponent.prototype.ngOnDestroy = function () {
        this.destroy = true;
        this.abort();
    };
    /** @nocollapse */ NzUploadBtnComponent.ɵfac = function NzUploadBtnComponent_Factory(t) { return new (t || NzUploadBtnComponent)(i0.ɵɵdirectiveInject(i1.HttpClient, 8), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i2.NzUpdateHostClassService)); };
    /** @nocollapse */ NzUploadBtnComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzUploadBtnComponent, selectors: [["", "nz-upload-btn", ""]], viewQuery: function NzUploadBtnComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.file = _t.first);
        } }, hostBindings: function NzUploadBtnComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            i0.ɵɵallocHostVars(2);
            i0.ɵɵlistener("click", function NzUploadBtnComponent_click_HostBindingHandler($event) { return ctx.onClick(); })("keydown", function NzUploadBtnComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); })("drop", function NzUploadBtnComponent_drop_HostBindingHandler($event) { return ctx.onFileDrop($event); })("dragover", function NzUploadBtnComponent_dragover_HostBindingHandler($event) { return ctx.onFileDrop($event); });
        } if (rf & 2) {
            i0.ɵɵattribute("tabindex", "0")("role", "button");
        } }, inputs: { classes: "classes", options: "options" }, exportAs: ["nzUploadBtn"], features: [i0.ɵɵProvidersFeature([NzUpdateHostClassService]), i0.ɵɵNgOnChangesFeature()], attrs: _c1, ngContentSelectors: _c2, decls: 3, vars: 4, consts: [["type", "file", 2, "display", "none", 3, "multiple", "change"], ["file", ""]], template: function NzUploadBtnComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "input", 0, 1);
            i0.ɵɵlistener("change", function NzUploadBtnComponent_Template_input_change_0_listener($event) { return ctx.onChange($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵprojection(2);
        } if (rf & 2) {
            i0.ɵɵproperty("multiple", ctx.options.multiple);
            i0.ɵɵattribute("accept", ctx.options.accept)("directory", ctx.options.directory ? "directory" : null)("webkitdirectory", ctx.options.directory ? "webkitdirectory" : null);
        } }, encapsulation: 2 });
    return NzUploadBtnComponent;
}());
export { NzUploadBtnComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzUploadBtnComponent, [{
        type: Component,
        args: [{
                selector: '[nz-upload-btn]',
                exportAs: 'nzUploadBtn',
                templateUrl: './nz-upload-btn.component.html',
                host: {
                    '[attr.tabindex]': '"0"',
                    '[attr.role]': '"button"'
                },
                providers: [NzUpdateHostClassService],
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i1.HttpClient, decorators: [{
                type: Optional
            }] }, { type: i0.ElementRef }, { type: i2.NzUpdateHostClassService }]; }, { file: [{
            type: ViewChild,
            args: ['file', { static: false }]
        }], classes: [{
            type: Input
        }], options: [{
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
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdXBsb2FkLWJ0bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3VwbG9hZC8iLCJzb3VyY2VzIjpbIm56LXVwbG9hZC1idG4uY29tcG9uZW50LnRzIiwibnotdXBsb2FkLWJ0bi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQWEsYUFBYSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDcEgsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFJTCxRQUFRLEVBQ1IsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxJQUFJLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7OztBQUlwRTtJQXdTRSxhQUFhO0lBRWIsOEJBQWdDLElBQWdCLEVBQVUsRUFBYyxFQUFVLHNCQUFnRDtRQUFsRyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBMEI7UUE3UmxJLFNBQUksR0FBb0MsRUFBRSxDQUFDO1FBQ25DLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBSXhCLGlCQUFpQjtRQUNSLFlBQU8sR0FBTyxFQUFFLENBQUM7UUF1UTFCLGlCQUFpQjtRQUVULGNBQVMsR0FBRyxZQUFZLENBQUM7UUFjL0IsSUFB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QkF6UnBCLFNBQVM7bUJBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7a0JBR25DLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUlMLFlBQVk7bUJBQUMsT0FBTzs7a0JBUXBCLFlBQVk7bUJBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDOztrQkFVbEMsWUFBWTttQkFBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUM7O2tCQUMvQixZQUFZO21CQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgRU5URVIgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwRXZlbnQsIEh0dHBFdmVudFR5cGUsIEh0dHBIZWFkZXJzLCBIdHRwUmVxdWVzdCwgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsIHdhcm4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgVXBsb2FkRmlsZSwgVXBsb2FkWEhSQXJncywgWmlwQnV0dG9uT3B0aW9ucyB9IGZyb20gJy4vaW50ZXJmYWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnW256LXVwbG9hZC1idG5dJyxcclxuICBleHBvcnRBczogJ256VXBsb2FkQnRuJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotdXBsb2FkLWJ0bi5jb21wb25lbnQuaHRtbCcsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1thdHRyLnRhYmluZGV4XSc6ICdcIjBcIicsXHJcbiAgICAnW2F0dHIucm9sZV0nOiAnXCJidXR0b25cIidcclxuICB9LFxyXG4gIHByb3ZpZGVyczogW056VXBkYXRlSG9zdENsYXNzU2VydmljZV0sXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpVcGxvYWRCdG5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICByZXFzOiB7IFtrZXk6IHN0cmluZ106IFN1YnNjcmlwdGlvbiB9ID0ge307XHJcbiAgcHJpdmF0ZSBpbml0ZWQgPSBmYWxzZTtcclxuICBwcml2YXRlIGRlc3Ryb3kgPSBmYWxzZTtcclxuXHJcbiAgQFZpZXdDaGlsZCgnZmlsZScsIHsgc3RhdGljOiBmYWxzZSB9KSBmaWxlOiBFbGVtZW50UmVmO1xyXG5cclxuICAvLyAjcmVnaW9uIGZpZWxkc1xyXG4gIEBJbnB1dCgpIGNsYXNzZXM6IHt9ID0ge307XHJcbiAgQElucHV0KCkgb3B0aW9uczogWmlwQnV0dG9uT3B0aW9ucztcclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXHJcbiAgb25DbGljaygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm9wdGlvbnMuZGlzYWJsZWQgfHwgIXRoaXMub3B0aW9ucy5vcGVuRmlsZURpYWxvZ09uQ2xpY2spIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgKHRoaXMuZmlsZS5uYXRpdmVFbGVtZW50IGFzIEhUTUxJbnB1dEVsZW1lbnQpLmNsaWNrKCk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcclxuICBvbktleURvd24oZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5kaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicgfHwgZS5rZXlDb2RlID09PSBFTlRFUikge1xyXG4gICAgICB0aGlzLm9uQ2xpY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2Ryb3AnLCBbJyRldmVudCddKVxyXG4gIEBIb3N0TGlzdGVuZXIoJ2RyYWdvdmVyJywgWyckZXZlbnQnXSlcclxuICAvLyBza2lwIHNhZmFyaSBidWdcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgb25GaWxlRHJvcChlOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm9wdGlvbnMuZGlzYWJsZWQgfHwgZS50eXBlID09PSAnZHJhZ292ZXInKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5kaXJlY3RvcnkpIHtcclxuICAgICAgdGhpcy50cmF2ZXJzZUZpbGVUcmVlKGUuZGF0YVRyYW5zZmVyIS5pdGVtcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBmaWxlczogRmlsZVtdID0gQXJyYXkucHJvdG90eXBlLnNsaWNlXHJcbiAgICAgICAgLmNhbGwoZS5kYXRhVHJhbnNmZXIhLmZpbGVzKVxyXG4gICAgICAgIC5maWx0ZXIoKGZpbGU6IEZpbGUpID0+IHRoaXMuYXR0ckFjY2VwdChmaWxlLCB0aGlzLm9wdGlvbnMuYWNjZXB0KSk7XHJcbiAgICAgIGlmIChmaWxlcy5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLnVwbG9hZEZpbGVzKGZpbGVzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlKGU6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5vcHRpb25zLmRpc2FibGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGhpZSA9IGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICB0aGlzLnVwbG9hZEZpbGVzKGhpZS5maWxlcyEpO1xyXG4gICAgaGllLnZhbHVlID0gJyc7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRyYXZlcnNlRmlsZVRyZWUoZmlsZXM6IERhdGFUcmFuc2Zlckl0ZW1MaXN0KTogdm9pZCB7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgICBjb25zdCBfdHJhdmVyc2VGaWxlVHJlZSA9IChpdGVtOiBhbnksIHBhdGg6IHN0cmluZykgPT4ge1xyXG4gICAgICBpZiAoaXRlbS5pc0ZpbGUpIHtcclxuICAgICAgICBpdGVtLmZpbGUoKGZpbGU6IEZpbGUpID0+IHtcclxuICAgICAgICAgIGlmICh0aGlzLmF0dHJBY2NlcHQoZmlsZSwgdGhpcy5vcHRpb25zLmFjY2VwdCkpIHtcclxuICAgICAgICAgICAgdGhpcy51cGxvYWRGaWxlcyhbZmlsZV0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKGl0ZW0uaXNEaXJlY3RvcnkpIHtcclxuICAgICAgICBjb25zdCBkaXJSZWFkZXIgPSBpdGVtLmNyZWF0ZVJlYWRlcigpO1xyXG5cclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgICAgICAgZGlyUmVhZGVyLnJlYWRFbnRyaWVzKChlbnRyaWVzOiBhbnkpID0+IHtcclxuICAgICAgICAgIGZvciAoY29uc3QgZW50cmllSXRlbSBvZiBlbnRyaWVzKSB7XHJcbiAgICAgICAgICAgIF90cmF2ZXJzZUZpbGVUcmVlKGVudHJpZUl0ZW0sIGAke3BhdGh9JHtpdGVtLm5hbWV9L2ApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gICAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzIGFzIGFueSkge1xyXG4gICAgICBfdHJhdmVyc2VGaWxlVHJlZShmaWxlLndlYmtpdEdldEFzRW50cnkoKSwgJycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhdHRyQWNjZXB0KGZpbGU6IEZpbGUsIGFjY2VwdGVkRmlsZXM/OiBzdHJpbmcgfCBzdHJpbmdbXSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKGZpbGUgJiYgYWNjZXB0ZWRGaWxlcykge1xyXG4gICAgICBjb25zdCBhY2NlcHRlZEZpbGVzQXJyYXkgPSBBcnJheS5pc0FycmF5KGFjY2VwdGVkRmlsZXMpID8gYWNjZXB0ZWRGaWxlcyA6IGFjY2VwdGVkRmlsZXMuc3BsaXQoJywnKTtcclxuICAgICAgY29uc3QgZmlsZU5hbWUgPSAnJyArIGZpbGUubmFtZTtcclxuICAgICAgY29uc3QgbWltZVR5cGUgPSAnJyArIGZpbGUudHlwZTtcclxuICAgICAgY29uc3QgYmFzZU1pbWVUeXBlID0gbWltZVR5cGUucmVwbGFjZSgvXFwvLiokLywgJycpO1xyXG5cclxuICAgICAgcmV0dXJuIGFjY2VwdGVkRmlsZXNBcnJheS5zb21lKHR5cGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IHZhbGlkVHlwZSA9IHR5cGUudHJpbSgpO1xyXG4gICAgICAgIGlmICh2YWxpZFR5cGUuY2hhckF0KDApID09PSAnLicpIHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIGZpbGVOYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih2YWxpZFR5cGUudG9Mb3dlckNhc2UoKSwgZmlsZU5hbWUudG9Mb3dlckNhc2UoKS5sZW5ndGggLSB2YWxpZFR5cGUudG9Mb3dlckNhc2UoKS5sZW5ndGgpICE9PSAtMVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2UgaWYgKC9cXC9cXCokLy50ZXN0KHZhbGlkVHlwZSkpIHtcclxuICAgICAgICAgIC8vIFRoaXMgaXMgc29tZXRoaW5nIGxpa2UgYSBpbWFnZS8qIG1pbWUgdHlwZVxyXG4gICAgICAgICAgcmV0dXJuIGJhc2VNaW1lVHlwZSA9PT0gdmFsaWRUeXBlLnJlcGxhY2UoL1xcLy4qJC8sICcnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1pbWVUeXBlID09PSB2YWxpZFR5cGU7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGF0dGFjaFVpZChmaWxlOiBVcGxvYWRGaWxlKTogVXBsb2FkRmlsZSB7XHJcbiAgICBpZiAoIWZpbGUudWlkKSB7XHJcbiAgICAgIGZpbGUudWlkID0gTWF0aC5yYW5kb20oKVxyXG4gICAgICAgIC50b1N0cmluZygzNilcclxuICAgICAgICAuc3Vic3RyaW5nKDIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZpbGU7XHJcbiAgfVxyXG5cclxuICB1cGxvYWRGaWxlcyhmaWxlTGlzdDogRmlsZUxpc3QgfCBGaWxlW10pOiB2b2lkIHtcclxuICAgIGxldCBmaWx0ZXJzJDogT2JzZXJ2YWJsZTxVcGxvYWRGaWxlW10+ID0gb2YoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZmlsZUxpc3QpKTtcclxuICAgIGlmICh0aGlzLm9wdGlvbnMuZmlsdGVycykge1xyXG4gICAgICB0aGlzLm9wdGlvbnMuZmlsdGVycy5mb3JFYWNoKGYgPT4ge1xyXG4gICAgICAgIGZpbHRlcnMkID0gZmlsdGVycyQucGlwZShcclxuICAgICAgICAgIHN3aXRjaE1hcChsaXN0ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZm5SZXMgPSBmLmZuKGxpc3QpO1xyXG4gICAgICAgICAgICByZXR1cm4gZm5SZXMgaW5zdGFuY2VvZiBPYnNlcnZhYmxlID8gZm5SZXMgOiBvZihmblJlcyk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZmlsdGVycyQuc3Vic2NyaWJlKFxyXG4gICAgICBsaXN0ID0+IHtcclxuICAgICAgICBsaXN0LmZvckVhY2goKGZpbGU6IFVwbG9hZEZpbGUpID0+IHtcclxuICAgICAgICAgIHRoaXMuYXR0YWNoVWlkKGZpbGUpO1xyXG4gICAgICAgICAgdGhpcy51cGxvYWQoZmlsZSwgbGlzdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGUgPT4ge1xyXG4gICAgICAgIHdhcm4oYFVuaGFuZGxlZCB1cGxvYWQgZmlsdGVyIGVycm9yYCwgZSk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwbG9hZChmaWxlOiBVcGxvYWRGaWxlLCBmaWxlTGlzdDogVXBsb2FkRmlsZVtdKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5iZWZvcmVVcGxvYWQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucG9zdChmaWxlKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGJlZm9yZSA9IHRoaXMub3B0aW9ucy5iZWZvcmVVcGxvYWQoZmlsZSwgZmlsZUxpc3QpO1xyXG4gICAgaWYgKGJlZm9yZSBpbnN0YW5jZW9mIE9ic2VydmFibGUpIHtcclxuICAgICAgYmVmb3JlLnN1YnNjcmliZShcclxuICAgICAgICAocHJvY2Vzc2VkRmlsZTogVXBsb2FkRmlsZSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgcHJvY2Vzc2VkRmlsZVR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwocHJvY2Vzc2VkRmlsZSk7XHJcbiAgICAgICAgICBpZiAocHJvY2Vzc2VkRmlsZVR5cGUgPT09ICdbb2JqZWN0IEZpbGVdJyB8fCBwcm9jZXNzZWRGaWxlVHlwZSA9PT0gJ1tvYmplY3QgQmxvYl0nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXR0YWNoVWlkKHByb2Nlc3NlZEZpbGUpO1xyXG4gICAgICAgICAgICB0aGlzLnBvc3QocHJvY2Vzc2VkRmlsZSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9jZXNzZWRGaWxlID09PSAnYm9vbGVhbicgJiYgcHJvY2Vzc2VkRmlsZSAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5wb3N0KGZpbGUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZSA9PiB7XHJcbiAgICAgICAgICB3YXJuKGBVbmhhbmRsZWQgdXBsb2FkIGJlZm9yZVVwbG9hZCBlcnJvcmAsIGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAoYmVmb3JlICE9PSBmYWxzZSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5wb3N0KGZpbGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwb3N0KGZpbGU6IFVwbG9hZEZpbGUpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRlc3Ryb3kpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgb3B0ID0gdGhpcy5vcHRpb25zO1xyXG4gICAgY29uc3QgeyB1aWQgfSA9IGZpbGU7XHJcbiAgICBsZXQgeyBkYXRhLCBoZWFkZXJzIH0gPSBvcHQ7XHJcbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgZGF0YSA9IChkYXRhIGFzIChmaWxlOiBVcGxvYWRGaWxlKSA9PiB7fSkoZmlsZSk7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIGhlYWRlcnMgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgaGVhZGVycyA9IChoZWFkZXJzIGFzIChmaWxlOiBVcGxvYWRGaWxlKSA9PiB7fSkoZmlsZSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBhcmdzOiBVcGxvYWRYSFJBcmdzID0ge1xyXG4gICAgICBhY3Rpb246IG9wdC5hY3Rpb24sXHJcbiAgICAgIG5hbWU6IG9wdC5uYW1lLFxyXG4gICAgICBoZWFkZXJzLFxyXG4gICAgICBmaWxlLFxyXG4gICAgICBkYXRhLFxyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IG9wdC53aXRoQ3JlZGVudGlhbHMsXHJcbiAgICAgIG9uUHJvZ3Jlc3M6IG9wdC5vblByb2dyZXNzXHJcbiAgICAgICAgPyBlID0+IHtcclxuICAgICAgICAgICAgb3B0Lm9uUHJvZ3Jlc3MhKGUsIGZpbGUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDogdW5kZWZpbmVkLFxyXG4gICAgICBvblN1Y2Nlc3M6IChyZXQsIHhocikgPT4ge1xyXG4gICAgICAgIHRoaXMuY2xlYW4odWlkKTtcclxuICAgICAgICBvcHQub25TdWNjZXNzIShyZXQsIGZpbGUsIHhocik7XHJcbiAgICAgIH0sXHJcbiAgICAgIG9uRXJyb3I6IHhociA9PiB7XHJcbiAgICAgICAgdGhpcy5jbGVhbih1aWQpO1xyXG4gICAgICAgIG9wdC5vbkVycm9yISh4aHIsIGZpbGUpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgcmVxJCA9IChvcHQuY3VzdG9tUmVxdWVzdCB8fCB0aGlzLnhocikuY2FsbCh0aGlzLCBhcmdzKTtcclxuICAgIGlmICghKHJlcSQgaW5zdGFuY2VvZiBTdWJzY3JpcHRpb24pKSB7XHJcbiAgICAgIHdhcm4oYE11c3QgcmV0dXJuIFN1YnNjcmlwdGlvbiB0eXBlIGluICdbbnpDdXN0b21SZXF1ZXN0XScgcHJvcGVydHlgKTtcclxuICAgIH1cclxuICAgIHRoaXMucmVxc1t1aWRdID0gcmVxJDtcclxuICAgIG9wdC5vblN0YXJ0IShmaWxlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgeGhyKGFyZ3M6IFVwbG9hZFhIUkFyZ3MpOiBTdWJzY3JpcHRpb24ge1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICAgIGZvcm1EYXRhLmFwcGVuZChhcmdzLm5hbWUhLCBhcmdzLmZpbGUgYXMgYW55KTtcclxuICAgIGlmIChhcmdzLmRhdGEpIHtcclxuICAgICAgT2JqZWN0LmtleXMoYXJncy5kYXRhKS5tYXAoa2V5ID0+IHtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoa2V5LCBhcmdzLmRhdGEhW2tleV0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmICghYXJncy5oZWFkZXJzKSB7XHJcbiAgICAgIGFyZ3MuaGVhZGVycyA9IHt9O1xyXG4gICAgfVxyXG4gICAgaWYgKGFyZ3MuaGVhZGVyc1snWC1SZXF1ZXN0ZWQtV2l0aCddICE9PSBudWxsKSB7XHJcbiAgICAgIGFyZ3MuaGVhZGVyc1snWC1SZXF1ZXN0ZWQtV2l0aCddID0gYFhNTEh0dHBSZXF1ZXN0YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRlbGV0ZSBhcmdzLmhlYWRlcnNbJ1gtUmVxdWVzdGVkLVdpdGgnXTtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlcSA9IG5ldyBIdHRwUmVxdWVzdCgnUE9TVCcsIGFyZ3MuYWN0aW9uISwgZm9ybURhdGEsIHtcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M6IHRydWUsXHJcbiAgICAgIHdpdGhDcmVkZW50aWFsczogYXJncy53aXRoQ3JlZGVudGlhbHMsXHJcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyhhcmdzLmhlYWRlcnMpXHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdChyZXEpLnN1YnNjcmliZShcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWFueVxyXG4gICAgICAoZXZlbnQ6IEh0dHBFdmVudDxhbnk+KSA9PiB7XHJcbiAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09IEh0dHBFdmVudFR5cGUuVXBsb2FkUHJvZ3Jlc3MpIHtcclxuICAgICAgICAgIGlmIChldmVudC50b3RhbCEgPiAwKSB7XHJcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICAgICAgICAgICAgKGV2ZW50IGFzIGFueSkucGVyY2VudCA9IChldmVudC5sb2FkZWQgLyBldmVudC50b3RhbCEpICogMTAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYXJncy5vblByb2dyZXNzIShldmVudCwgYXJncy5maWxlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50IGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlKSB7XHJcbiAgICAgICAgICBhcmdzLm9uU3VjY2VzcyEoZXZlbnQuYm9keSwgYXJncy5maWxlLCBldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBlcnIgPT4ge1xyXG4gICAgICAgIHRoaXMuYWJvcnQoYXJncy5maWxlKTtcclxuICAgICAgICBhcmdzLm9uRXJyb3IhKGVyciwgYXJncy5maWxlKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xlYW4odWlkOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGNvbnN0IHJlcSQgPSB0aGlzLnJlcXNbdWlkXTtcclxuICAgIGlmIChyZXEkIGluc3RhbmNlb2YgU3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgIHJlcSQudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICAgIGRlbGV0ZSB0aGlzLnJlcXNbdWlkXTtcclxuICB9XHJcblxyXG4gIGFib3J0KGZpbGU/OiBVcGxvYWRGaWxlKTogdm9pZCB7XHJcbiAgICBpZiAoZmlsZSkge1xyXG4gICAgICB0aGlzLmNsZWFuKGZpbGUgJiYgZmlsZS51aWQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgT2JqZWN0LmtleXModGhpcy5yZXFzKS5mb3JFYWNoKHVpZCA9PiB0aGlzLmNsZWFuKHVpZCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gI3JlZ2lvbiBzdHlsZXNcclxuXHJcbiAgcHJpdmF0ZSBwcmVmaXhDbHMgPSAnYW50LXVwbG9hZCc7XHJcblxyXG4gIHByaXZhdGUgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICBjb25zdCBjbGFzc01hcCA9IHtcclxuICAgICAgW3RoaXMucHJlZml4Q2xzXTogdHJ1ZSxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1kaXNhYmxlZGBdOiB0aGlzLm9wdGlvbnMuZGlzYWJsZWQsXHJcbiAgICAgIC4uLnRoaXMuY2xhc3Nlc1xyXG4gICAgfTtcclxuICAgIHRoaXMudXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCBjbGFzc01hcCk7XHJcbiAgfVxyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSB1cGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UpIHtcclxuICAgIGlmICghaHR0cCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBmb3VuZCAnSHR0cENsaWVudCcsIFlvdSBjYW4gaW1wb3J0ICdIdHRwQ2xpZW50TW9kdWxlJyBpbiB5b3VyIHJvb3QgbW9kdWxlLmApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmluaXRlZCA9IHRydWU7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmluaXRlZCkge1xyXG4gICAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSA9IHRydWU7XHJcbiAgICB0aGlzLmFib3J0KCk7XHJcbiAgfVxyXG59XHJcbiIsIjxpbnB1dFxyXG4gIHR5cGU9XCJmaWxlXCJcclxuICAjZmlsZVxyXG4gIChjaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50KVwiXHJcbiAgW2F0dHIuYWNjZXB0XT1cIm9wdGlvbnMuYWNjZXB0XCJcclxuICBbYXR0ci5kaXJlY3RvcnldPVwib3B0aW9ucy5kaXJlY3RvcnkgPyAnZGlyZWN0b3J5JyA6IG51bGxcIlxyXG4gIFthdHRyLndlYmtpdGRpcmVjdG9yeV09XCJvcHRpb25zLmRpcmVjdG9yeSA/ICd3ZWJraXRkaXJlY3RvcnknIDogbnVsbFwiXHJcbiAgW211bHRpcGxlXT1cIm9wdGlvbnMubXVsdGlwbGVcIlxyXG4gIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIlxyXG4vPlxyXG48bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiJdfQ==
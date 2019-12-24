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
const _c0 = ["file"];
const _c1 = ["nz-upload-btn", ""];
const _c2 = ["*"];
export class NzUploadBtnComponent {
    // #endregion
    constructor(http, el, updateHostClassService) {
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
            throw new Error(`Not found 'HttpClient', You can import 'HttpClientModule' in your root module.`);
        }
    }
    // #endregion
    onClick() {
        if (this.options.disabled || !this.options.openFileDialogOnClick) {
            return;
        }
        this.file.nativeElement.click();
    }
    onKeyDown(e) {
        if (this.options.disabled) {
            return;
        }
        if (e.key === 'Enter' || e.keyCode === ENTER) {
            this.onClick();
        }
    }
    // skip safari bug
    // tslint:disable-next-line:no-any
    onFileDrop(e) {
        if (this.options.disabled || e.type === 'dragover') {
            e.preventDefault();
            return;
        }
        if (this.options.directory) {
            this.traverseFileTree(e.dataTransfer.items);
        }
        else {
            const files = Array.prototype.slice
                .call(e.dataTransfer.files)
                .filter((file) => this.attrAccept(file, this.options.accept));
            if (files.length) {
                this.uploadFiles(files);
            }
        }
        e.preventDefault();
    }
    onChange(e) {
        if (this.options.disabled) {
            return;
        }
        const hie = e.target;
        this.uploadFiles(hie.files);
        hie.value = '';
    }
    traverseFileTree(files) {
        // tslint:disable-next-line:no-any
        const _traverseFileTree = (item, path) => {
            if (item.isFile) {
                item.file((file) => {
                    if (this.attrAccept(file, this.options.accept)) {
                        this.uploadFiles([file]);
                    }
                });
            }
            else if (item.isDirectory) {
                const dirReader = item.createReader();
                // tslint:disable-next-line:no-any
                dirReader.readEntries((entries) => {
                    for (const entrieItem of entries) {
                        _traverseFileTree(entrieItem, `${path}${item.name}/`);
                    }
                });
            }
        };
        // tslint:disable-next-line:no-any
        for (const file of files) {
            _traverseFileTree(file.webkitGetAsEntry(), '');
        }
    }
    attrAccept(file, acceptedFiles) {
        if (file && acceptedFiles) {
            const acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(',');
            const fileName = '' + file.name;
            const mimeType = '' + file.type;
            const baseMimeType = mimeType.replace(/\/.*$/, '');
            return acceptedFilesArray.some(type => {
                const validType = type.trim();
                if (validType.charAt(0) === '.') {
                    return (fileName.toLowerCase().indexOf(validType.toLowerCase(), fileName.toLowerCase().length - validType.toLowerCase().length) !== -1);
                }
                else if (/\/\*$/.test(validType)) {
                    // This is something like a image/* mime type
                    return baseMimeType === validType.replace(/\/.*$/, '');
                }
                return mimeType === validType;
            });
        }
        return true;
    }
    attachUid(file) {
        if (!file.uid) {
            file.uid = Math.random()
                .toString(36)
                .substring(2);
        }
        return file;
    }
    uploadFiles(fileList) {
        let filters$ = of(Array.prototype.slice.call(fileList));
        if (this.options.filters) {
            this.options.filters.forEach(f => {
                filters$ = filters$.pipe(switchMap(list => {
                    const fnRes = f.fn(list);
                    return fnRes instanceof Observable ? fnRes : of(fnRes);
                }));
            });
        }
        filters$.subscribe(list => {
            list.forEach((file) => {
                this.attachUid(file);
                this.upload(file, list);
            });
        }, e => {
            warn(`Unhandled upload filter error`, e);
        });
    }
    upload(file, fileList) {
        if (!this.options.beforeUpload) {
            return this.post(file);
        }
        const before = this.options.beforeUpload(file, fileList);
        if (before instanceof Observable) {
            before.subscribe((processedFile) => {
                const processedFileType = Object.prototype.toString.call(processedFile);
                if (processedFileType === '[object File]' || processedFileType === '[object Blob]') {
                    this.attachUid(processedFile);
                    this.post(processedFile);
                }
                else if (typeof processedFile === 'boolean' && processedFile !== false) {
                    this.post(file);
                }
            }, e => {
                warn(`Unhandled upload beforeUpload error`, e);
            });
        }
        else if (before !== false) {
            return this.post(file);
        }
    }
    post(file) {
        if (this.destroy) {
            return;
        }
        const opt = this.options;
        const { uid } = file;
        let { data, headers } = opt;
        if (typeof data === 'function') {
            data = data(file);
        }
        if (typeof headers === 'function') {
            headers = headers(file);
        }
        const args = {
            action: opt.action,
            name: opt.name,
            headers,
            file,
            data,
            withCredentials: opt.withCredentials,
            onProgress: opt.onProgress
                ? e => {
                    opt.onProgress(e, file);
                }
                : undefined,
            onSuccess: (ret, xhr) => {
                this.clean(uid);
                opt.onSuccess(ret, file, xhr);
            },
            onError: xhr => {
                this.clean(uid);
                opt.onError(xhr, file);
            }
        };
        const req$ = (opt.customRequest || this.xhr).call(this, args);
        if (!(req$ instanceof Subscription)) {
            warn(`Must return Subscription type in '[nzCustomRequest]' property`);
        }
        this.reqs[uid] = req$;
        opt.onStart(file);
    }
    xhr(args) {
        const formData = new FormData();
        // tslint:disable-next-line:no-any
        formData.append(args.name, args.file);
        if (args.data) {
            Object.keys(args.data).map(key => {
                formData.append(key, args.data[key]);
            });
        }
        if (!args.headers) {
            args.headers = {};
        }
        if (args.headers['X-Requested-With'] !== null) {
            args.headers['X-Requested-With'] = `XMLHttpRequest`;
        }
        else {
            delete args.headers['X-Requested-With'];
        }
        const req = new HttpRequest('POST', args.action, formData, {
            reportProgress: true,
            withCredentials: args.withCredentials,
            headers: new HttpHeaders(args.headers)
        });
        return this.http.request(req).subscribe(
        // tslint:disable-next-line no-any
        (event) => {
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
        }, err => {
            this.abort(args.file);
            args.onError(err, args.file);
        });
    }
    clean(uid) {
        const req$ = this.reqs[uid];
        if (req$ instanceof Subscription) {
            req$.unsubscribe();
        }
        delete this.reqs[uid];
    }
    abort(file) {
        if (file) {
            this.clean(file && file.uid);
        }
        else {
            Object.keys(this.reqs).forEach(uid => this.clean(uid));
        }
    }
    setClassMap() {
        const classMap = Object.assign({ [this.prefixCls]: true, [`${this.prefixCls}-disabled`]: this.options.disabled }, this.classes);
        this.updateHostClassService.updateHostClass(this.el.nativeElement, classMap);
    }
    ngOnInit() {
        this.inited = true;
        this.setClassMap();
    }
    ngOnChanges() {
        if (this.inited) {
            this.setClassMap();
        }
    }
    ngOnDestroy() {
        this.destroy = true;
        this.abort();
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdXBsb2FkLWJ0bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3VwbG9hZC8iLCJzb3VyY2VzIjpbIm56LXVwbG9hZC1idG4uY29tcG9uZW50LnRzIiwibnotdXBsb2FkLWJ0bi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBYSxhQUFhLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNwSCxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUlMLFFBQVEsRUFDUixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLElBQUksRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7Ozs7O0FBZ0JwRSxNQUFNLE9BQU8sb0JBQW9CO0lBNFIvQixhQUFhO0lBRWIsWUFBZ0MsSUFBZ0IsRUFBVSxFQUFjLEVBQVUsc0JBQWdEO1FBQWxHLFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUEwQjtRQTdSbEksU0FBSSxHQUFvQyxFQUFFLENBQUM7UUFDbkMsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFJeEIsaUJBQWlCO1FBQ1IsWUFBTyxHQUFPLEVBQUUsQ0FBQztRQXVRMUIsaUJBQWlCO1FBRVQsY0FBUyxHQUFHLFlB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QVk7bUJBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDOztrQkFDL0IsWUFBWTttQkFBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEVOVEVSIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEV2ZW50LCBIdHRwRXZlbnRUeXBlLCBIdHRwSGVhZGVycywgSHR0cFJlcXVlc3QsIEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLCB3YXJuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IFVwbG9hZEZpbGUsIFVwbG9hZFhIUkFyZ3MsIFppcEJ1dHRvbk9wdGlvbnMgfSBmcm9tICcuL2ludGVyZmFjZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1tuei11cGxvYWQtYnRuXScsXHJcbiAgZXhwb3J0QXM6ICduelVwbG9hZEJ0bicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXVwbG9hZC1idG4uY29tcG9uZW50Lmh0bWwnLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbYXR0ci50YWJpbmRleF0nOiAnXCIwXCInLFxyXG4gICAgJ1thdHRyLnJvbGVdJzogJ1wiYnV0dG9uXCInXHJcbiAgfSxcclxuICBwcm92aWRlcnM6IFtOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VdLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIE56VXBsb2FkQnRuQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgcmVxczogeyBba2V5OiBzdHJpbmddOiBTdWJzY3JpcHRpb24gfSA9IHt9O1xyXG4gIHByaXZhdGUgaW5pdGVkID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBkZXN0cm95ID0gZmFsc2U7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2ZpbGUnLCB7IHN0YXRpYzogZmFsc2UgfSkgZmlsZTogRWxlbWVudFJlZjtcclxuXHJcbiAgLy8gI3JlZ2lvbiBmaWVsZHNcclxuICBASW5wdXQoKSBjbGFzc2VzOiB7fSA9IHt9O1xyXG4gIEBJbnB1dCgpIG9wdGlvbnM6IFppcEJ1dHRvbk9wdGlvbnM7XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxyXG4gIG9uQ2xpY2soKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5vcHRpb25zLmRpc2FibGVkIHx8ICF0aGlzLm9wdGlvbnMub3BlbkZpbGVEaWFsb2dPbkNsaWNrKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgICh0aGlzLmZpbGUubmF0aXZlRWxlbWVudCBhcyBIVE1MSW5wdXRFbGVtZW50KS5jbGljaygpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXHJcbiAgb25LZXlEb3duKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm9wdGlvbnMuZGlzYWJsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInIHx8IGUua2V5Q29kZSA9PT0gRU5URVIpIHtcclxuICAgICAgdGhpcy5vbkNsaWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdkcm9wJywgWyckZXZlbnQnXSlcclxuICBASG9zdExpc3RlbmVyKCdkcmFnb3ZlcicsIFsnJGV2ZW50J10pXHJcbiAgLy8gc2tpcCBzYWZhcmkgYnVnXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIG9uRmlsZURyb3AoZTogYW55KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5vcHRpb25zLmRpc2FibGVkIHx8IGUudHlwZSA9PT0gJ2RyYWdvdmVyJykge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm9wdGlvbnMuZGlyZWN0b3J5KSB7XHJcbiAgICAgIHRoaXMudHJhdmVyc2VGaWxlVHJlZShlLmRhdGFUcmFuc2ZlciEuaXRlbXMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgZmlsZXM6IEZpbGVbXSA9IEFycmF5LnByb3RvdHlwZS5zbGljZVxyXG4gICAgICAgIC5jYWxsKGUuZGF0YVRyYW5zZmVyIS5maWxlcylcclxuICAgICAgICAuZmlsdGVyKChmaWxlOiBGaWxlKSA9PiB0aGlzLmF0dHJBY2NlcHQoZmlsZSwgdGhpcy5vcHRpb25zLmFjY2VwdCkpO1xyXG4gICAgICBpZiAoZmlsZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy51cGxvYWRGaWxlcyhmaWxlcyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZShlOiBFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5kaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBoaWUgPSBlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgdGhpcy51cGxvYWRGaWxlcyhoaWUuZmlsZXMhKTtcclxuICAgIGhpZS52YWx1ZSA9ICcnO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0cmF2ZXJzZUZpbGVUcmVlKGZpbGVzOiBEYXRhVHJhbnNmZXJJdGVtTGlzdCk6IHZvaWQge1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gICAgY29uc3QgX3RyYXZlcnNlRmlsZVRyZWUgPSAoaXRlbTogYW55LCBwYXRoOiBzdHJpbmcpID0+IHtcclxuICAgICAgaWYgKGl0ZW0uaXNGaWxlKSB7XHJcbiAgICAgICAgaXRlbS5maWxlKChmaWxlOiBGaWxlKSA9PiB7XHJcbiAgICAgICAgICBpZiAodGhpcy5hdHRyQWNjZXB0KGZpbGUsIHRoaXMub3B0aW9ucy5hY2NlcHQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBsb2FkRmlsZXMoW2ZpbGVdKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmIChpdGVtLmlzRGlyZWN0b3J5KSB7XHJcbiAgICAgICAgY29uc3QgZGlyUmVhZGVyID0gaXRlbS5jcmVhdGVSZWFkZXIoKTtcclxuXHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gICAgICAgIGRpclJlYWRlci5yZWFkRW50cmllcygoZW50cmllczogYW55KSA9PiB7XHJcbiAgICAgICAgICBmb3IgKGNvbnN0IGVudHJpZUl0ZW0gb2YgZW50cmllcykge1xyXG4gICAgICAgICAgICBfdHJhdmVyc2VGaWxlVHJlZShlbnRyaWVJdGVtLCBgJHtwYXRofSR7aXRlbS5uYW1lfS9gKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICAgIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcyBhcyBhbnkpIHtcclxuICAgICAgX3RyYXZlcnNlRmlsZVRyZWUoZmlsZS53ZWJraXRHZXRBc0VudHJ5KCksICcnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXR0ckFjY2VwdChmaWxlOiBGaWxlLCBhY2NlcHRlZEZpbGVzPzogc3RyaW5nIHwgc3RyaW5nW10pOiBib29sZWFuIHtcclxuICAgIGlmIChmaWxlICYmIGFjY2VwdGVkRmlsZXMpIHtcclxuICAgICAgY29uc3QgYWNjZXB0ZWRGaWxlc0FycmF5ID0gQXJyYXkuaXNBcnJheShhY2NlcHRlZEZpbGVzKSA/IGFjY2VwdGVkRmlsZXMgOiBhY2NlcHRlZEZpbGVzLnNwbGl0KCcsJyk7XHJcbiAgICAgIGNvbnN0IGZpbGVOYW1lID0gJycgKyBmaWxlLm5hbWU7XHJcbiAgICAgIGNvbnN0IG1pbWVUeXBlID0gJycgKyBmaWxlLnR5cGU7XHJcbiAgICAgIGNvbnN0IGJhc2VNaW1lVHlwZSA9IG1pbWVUeXBlLnJlcGxhY2UoL1xcLy4qJC8sICcnKTtcclxuXHJcbiAgICAgIHJldHVybiBhY2NlcHRlZEZpbGVzQXJyYXkuc29tZSh0eXBlID0+IHtcclxuICAgICAgICBjb25zdCB2YWxpZFR5cGUgPSB0eXBlLnRyaW0oKTtcclxuICAgICAgICBpZiAodmFsaWRUeXBlLmNoYXJBdCgwKSA9PT0gJy4nKSB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBmaWxlTmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodmFsaWRUeXBlLnRvTG93ZXJDYXNlKCksIGZpbGVOYW1lLnRvTG93ZXJDYXNlKCkubGVuZ3RoIC0gdmFsaWRUeXBlLnRvTG93ZXJDYXNlKCkubGVuZ3RoKSAhPT0gLTFcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIGlmICgvXFwvXFwqJC8udGVzdCh2YWxpZFR5cGUpKSB7XHJcbiAgICAgICAgICAvLyBUaGlzIGlzIHNvbWV0aGluZyBsaWtlIGEgaW1hZ2UvKiBtaW1lIHR5cGVcclxuICAgICAgICAgIHJldHVybiBiYXNlTWltZVR5cGUgPT09IHZhbGlkVHlwZS5yZXBsYWNlKC9cXC8uKiQvLCAnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtaW1lVHlwZSA9PT0gdmFsaWRUeXBlO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhdHRhY2hVaWQoZmlsZTogVXBsb2FkRmlsZSk6IFVwbG9hZEZpbGUge1xyXG4gICAgaWYgKCFmaWxlLnVpZCkge1xyXG4gICAgICBmaWxlLnVpZCA9IE1hdGgucmFuZG9tKClcclxuICAgICAgICAudG9TdHJpbmcoMzYpXHJcbiAgICAgICAgLnN1YnN0cmluZygyKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmaWxlO1xyXG4gIH1cclxuXHJcbiAgdXBsb2FkRmlsZXMoZmlsZUxpc3Q6IEZpbGVMaXN0IHwgRmlsZVtdKTogdm9pZCB7XHJcbiAgICBsZXQgZmlsdGVycyQ6IE9ic2VydmFibGU8VXBsb2FkRmlsZVtdPiA9IG9mKEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZpbGVMaXN0KSk7XHJcbiAgICBpZiAodGhpcy5vcHRpb25zLmZpbHRlcnMpIHtcclxuICAgICAgdGhpcy5vcHRpb25zLmZpbHRlcnMuZm9yRWFjaChmID0+IHtcclxuICAgICAgICBmaWx0ZXJzJCA9IGZpbHRlcnMkLnBpcGUoXHJcbiAgICAgICAgICBzd2l0Y2hNYXAobGlzdCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZuUmVzID0gZi5mbihsaXN0KTtcclxuICAgICAgICAgICAgcmV0dXJuIGZuUmVzIGluc3RhbmNlb2YgT2JzZXJ2YWJsZSA/IGZuUmVzIDogb2YoZm5SZXMpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGZpbHRlcnMkLnN1YnNjcmliZShcclxuICAgICAgbGlzdCA9PiB7XHJcbiAgICAgICAgbGlzdC5mb3JFYWNoKChmaWxlOiBVcGxvYWRGaWxlKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmF0dGFjaFVpZChmaWxlKTtcclxuICAgICAgICAgIHRoaXMudXBsb2FkKGZpbGUsIGxpc3QpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICBlID0+IHtcclxuICAgICAgICB3YXJuKGBVbmhhbmRsZWQgdXBsb2FkIGZpbHRlciBlcnJvcmAsIGUpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGxvYWQoZmlsZTogVXBsb2FkRmlsZSwgZmlsZUxpc3Q6IFVwbG9hZEZpbGVbXSk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuYmVmb3JlVXBsb2FkKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnBvc3QoZmlsZSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBiZWZvcmUgPSB0aGlzLm9wdGlvbnMuYmVmb3JlVXBsb2FkKGZpbGUsIGZpbGVMaXN0KTtcclxuICAgIGlmIChiZWZvcmUgaW5zdGFuY2VvZiBPYnNlcnZhYmxlKSB7XHJcbiAgICAgIGJlZm9yZS5zdWJzY3JpYmUoXHJcbiAgICAgICAgKHByb2Nlc3NlZEZpbGU6IFVwbG9hZEZpbGUpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHByb2Nlc3NlZEZpbGVUeXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHByb2Nlc3NlZEZpbGUpO1xyXG4gICAgICAgICAgaWYgKHByb2Nlc3NlZEZpbGVUeXBlID09PSAnW29iamVjdCBGaWxlXScgfHwgcHJvY2Vzc2VkRmlsZVR5cGUgPT09ICdbb2JqZWN0IEJsb2JdJykge1xyXG4gICAgICAgICAgICB0aGlzLmF0dGFjaFVpZChwcm9jZXNzZWRGaWxlKTtcclxuICAgICAgICAgICAgdGhpcy5wb3N0KHByb2Nlc3NlZEZpbGUpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcHJvY2Vzc2VkRmlsZSA9PT0gJ2Jvb2xlYW4nICYmIHByb2Nlc3NlZEZpbGUgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9zdChmaWxlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGUgPT4ge1xyXG4gICAgICAgICAgd2FybihgVW5oYW5kbGVkIHVwbG9hZCBiZWZvcmVVcGxvYWQgZXJyb3JgLCBlKTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2UgaWYgKGJlZm9yZSAhPT0gZmFsc2UpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucG9zdChmaWxlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcG9zdChmaWxlOiBVcGxvYWRGaWxlKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kZXN0cm95KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IG9wdCA9IHRoaXMub3B0aW9ucztcclxuICAgIGNvbnN0IHsgdWlkIH0gPSBmaWxlO1xyXG4gICAgbGV0IHsgZGF0YSwgaGVhZGVycyB9ID0gb3B0O1xyXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIGRhdGEgPSAoZGF0YSBhcyAoZmlsZTogVXBsb2FkRmlsZSkgPT4ge30pKGZpbGUpO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBoZWFkZXJzID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIGhlYWRlcnMgPSAoaGVhZGVycyBhcyAoZmlsZTogVXBsb2FkRmlsZSkgPT4ge30pKGZpbGUpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYXJnczogVXBsb2FkWEhSQXJncyA9IHtcclxuICAgICAgYWN0aW9uOiBvcHQuYWN0aW9uLFxyXG4gICAgICBuYW1lOiBvcHQubmFtZSxcclxuICAgICAgaGVhZGVycyxcclxuICAgICAgZmlsZSxcclxuICAgICAgZGF0YSxcclxuICAgICAgd2l0aENyZWRlbnRpYWxzOiBvcHQud2l0aENyZWRlbnRpYWxzLFxyXG4gICAgICBvblByb2dyZXNzOiBvcHQub25Qcm9ncmVzc1xyXG4gICAgICAgID8gZSA9PiB7XHJcbiAgICAgICAgICAgIG9wdC5vblByb2dyZXNzIShlLCBmaWxlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICA6IHVuZGVmaW5lZCxcclxuICAgICAgb25TdWNjZXNzOiAocmV0LCB4aHIpID0+IHtcclxuICAgICAgICB0aGlzLmNsZWFuKHVpZCk7XHJcbiAgICAgICAgb3B0Lm9uU3VjY2VzcyEocmV0LCBmaWxlLCB4aHIpO1xyXG4gICAgICB9LFxyXG4gICAgICBvbkVycm9yOiB4aHIgPT4ge1xyXG4gICAgICAgIHRoaXMuY2xlYW4odWlkKTtcclxuICAgICAgICBvcHQub25FcnJvciEoeGhyLCBmaWxlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IHJlcSQgPSAob3B0LmN1c3RvbVJlcXVlc3QgfHwgdGhpcy54aHIpLmNhbGwodGhpcywgYXJncyk7XHJcbiAgICBpZiAoIShyZXEkIGluc3RhbmNlb2YgU3Vic2NyaXB0aW9uKSkge1xyXG4gICAgICB3YXJuKGBNdXN0IHJldHVybiBTdWJzY3JpcHRpb24gdHlwZSBpbiAnW256Q3VzdG9tUmVxdWVzdF0nIHByb3BlcnR5YCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnJlcXNbdWlkXSA9IHJlcSQ7XHJcbiAgICBvcHQub25TdGFydCEoZmlsZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHhocihhcmdzOiBVcGxvYWRYSFJBcmdzKTogU3Vic2NyaXB0aW9uIHtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoYXJncy5uYW1lISwgYXJncy5maWxlIGFzIGFueSk7XHJcbiAgICBpZiAoYXJncy5kYXRhKSB7XHJcbiAgICAgIE9iamVjdC5rZXlzKGFyZ3MuZGF0YSkubWFwKGtleSA9PiB7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKGtleSwgYXJncy5kYXRhIVtrZXldKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoIWFyZ3MuaGVhZGVycykge1xyXG4gICAgICBhcmdzLmhlYWRlcnMgPSB7fTtcclxuICAgIH1cclxuICAgIGlmIChhcmdzLmhlYWRlcnNbJ1gtUmVxdWVzdGVkLVdpdGgnXSAhPT0gbnVsbCkge1xyXG4gICAgICBhcmdzLmhlYWRlcnNbJ1gtUmVxdWVzdGVkLVdpdGgnXSA9IGBYTUxIdHRwUmVxdWVzdGA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkZWxldGUgYXJncy5oZWFkZXJzWydYLVJlcXVlc3RlZC1XaXRoJ107XHJcbiAgICB9XHJcbiAgICBjb25zdCByZXEgPSBuZXcgSHR0cFJlcXVlc3QoJ1BPU1QnLCBhcmdzLmFjdGlvbiEsIGZvcm1EYXRhLCB7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzOiB0cnVlLFxyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IGFyZ3Mud2l0aENyZWRlbnRpYWxzLFxyXG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoYXJncy5oZWFkZXJzKVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3QocmVxKS5zdWJzY3JpYmUoXHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1hbnlcclxuICAgICAgKGV2ZW50OiBIdHRwRXZlbnQ8YW55PikgPT4ge1xyXG4gICAgICAgIGlmIChldmVudC50eXBlID09PSBIdHRwRXZlbnRUeXBlLlVwbG9hZFByb2dyZXNzKSB7XHJcbiAgICAgICAgICBpZiAoZXZlbnQudG90YWwhID4gMCkge1xyXG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgICAgICAgICAgIChldmVudCBhcyBhbnkpLnBlcmNlbnQgPSAoZXZlbnQubG9hZGVkIC8gZXZlbnQudG90YWwhKSAqIDEwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGFyZ3Mub25Qcm9ncmVzcyEoZXZlbnQsIGFyZ3MuZmlsZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudCBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSkge1xyXG4gICAgICAgICAgYXJncy5vblN1Y2Nlc3MhKGV2ZW50LmJvZHksIGFyZ3MuZmlsZSwgZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgZXJyID0+IHtcclxuICAgICAgICB0aGlzLmFib3J0KGFyZ3MuZmlsZSk7XHJcbiAgICAgICAgYXJncy5vbkVycm9yIShlcnIsIGFyZ3MuZmlsZSk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsZWFuKHVpZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBjb25zdCByZXEkID0gdGhpcy5yZXFzW3VpZF07XHJcbiAgICBpZiAocmVxJCBpbnN0YW5jZW9mIFN1YnNjcmlwdGlvbikge1xyXG4gICAgICByZXEkLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgICBkZWxldGUgdGhpcy5yZXFzW3VpZF07XHJcbiAgfVxyXG5cclxuICBhYm9ydChmaWxlPzogVXBsb2FkRmlsZSk6IHZvaWQge1xyXG4gICAgaWYgKGZpbGUpIHtcclxuICAgICAgdGhpcy5jbGVhbihmaWxlICYmIGZpbGUudWlkKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMucmVxcykuZm9yRWFjaCh1aWQgPT4gdGhpcy5jbGVhbih1aWQpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vICNyZWdpb24gc3R5bGVzXHJcblxyXG4gIHByaXZhdGUgcHJlZml4Q2xzID0gJ2FudC11cGxvYWQnO1xyXG5cclxuICBwcml2YXRlIHNldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgY29uc3QgY2xhc3NNYXAgPSB7XHJcbiAgICAgIFt0aGlzLnByZWZpeENsc106IHRydWUsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tZGlzYWJsZWRgXTogdGhpcy5vcHRpb25zLmRpc2FibGVkLFxyXG4gICAgICAuLi50aGlzLmNsYXNzZXNcclxuICAgIH07XHJcbiAgICB0aGlzLnVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgY2xhc3NNYXApO1xyXG4gIH1cclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgdXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlKSB7XHJcbiAgICBpZiAoIWh0dHApIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBOb3QgZm91bmQgJ0h0dHBDbGllbnQnLCBZb3UgY2FuIGltcG9ydCAnSHR0cENsaWVudE1vZHVsZScgaW4geW91ciByb290IG1vZHVsZS5gKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pbml0ZWQpIHtcclxuICAgICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kgPSB0cnVlO1xyXG4gICAgdGhpcy5hYm9ydCgpO1xyXG4gIH1cclxufVxyXG4iLCI8aW5wdXRcclxuICB0eXBlPVwiZmlsZVwiXHJcbiAgI2ZpbGVcclxuICAoY2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIlxyXG4gIFthdHRyLmFjY2VwdF09XCJvcHRpb25zLmFjY2VwdFwiXHJcbiAgW2F0dHIuZGlyZWN0b3J5XT1cIm9wdGlvbnMuZGlyZWN0b3J5ID8gJ2RpcmVjdG9yeScgOiBudWxsXCJcclxuICBbYXR0ci53ZWJraXRkaXJlY3RvcnldPVwib3B0aW9ucy5kaXJlY3RvcnkgPyAnd2Via2l0ZGlyZWN0b3J5JyA6IG51bGxcIlxyXG4gIFttdWx0aXBsZV09XCJvcHRpb25zLm11bHRpcGxlXCJcclxuICBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCJcclxuLz5cclxuPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4iXX0=
/**
 * @fileoverview added by tsickle
 * Generated from: nz-upload-btn.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class NzUploadBtnComponent {
    // #endregion
    /**
     * @param {?} http
     * @param {?} el
     * @param {?} updateHostClassService
     */
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
    /**
     * @return {?}
     */
    onClick() {
        if (this.options.disabled || !this.options.openFileDialogOnClick) {
            return;
        }
        ((/** @type {?} */ (this.file.nativeElement))).click();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDown(e) {
        if (this.options.disabled) {
            return;
        }
        if (e.key === 'Enter' || e.keyCode === ENTER) {
            this.onClick();
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    // skip safari bug
    // tslint:disable-next-line:no-any
    onFileDrop(e) {
        if (this.options.disabled || e.type === 'dragover') {
            e.preventDefault();
            return;
        }
        if (this.options.directory) {
            this.traverseFileTree((/** @type {?} */ (e.dataTransfer)).items);
        }
        else {
            /** @type {?} */
            const files = Array.prototype.slice
                .call((/** @type {?} */ (e.dataTransfer)).files)
                .filter((/**
             * @param {?} file
             * @return {?}
             */
            (file) => this.attrAccept(file, this.options.accept)));
            if (files.length) {
                this.uploadFiles(files);
            }
        }
        e.preventDefault();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onChange(e) {
        if (this.options.disabled) {
            return;
        }
        /** @type {?} */
        const hie = (/** @type {?} */ (e.target));
        this.uploadFiles((/** @type {?} */ (hie.files)));
        hie.value = '';
    }
    /**
     * @private
     * @param {?} files
     * @return {?}
     */
    traverseFileTree(files) {
        // tslint:disable-next-line:no-any
        /** @type {?} */
        const _traverseFileTree = (/**
         * @param {?} item
         * @param {?} path
         * @return {?}
         */
        (item, path) => {
            if (item.isFile) {
                item.file((/**
                 * @param {?} file
                 * @return {?}
                 */
                (file) => {
                    if (this.attrAccept(file, this.options.accept)) {
                        this.uploadFiles([file]);
                    }
                }));
            }
            else if (item.isDirectory) {
                /** @type {?} */
                const dirReader = item.createReader();
                // tslint:disable-next-line:no-any
                dirReader.readEntries((/**
                 * @param {?} entries
                 * @return {?}
                 */
                (entries) => {
                    for (const entrieItem of entries) {
                        _traverseFileTree(entrieItem, `${path}${item.name}/`);
                    }
                }));
            }
        });
        // tslint:disable-next-line:no-any
        for (const file of (/** @type {?} */ (files))) {
            _traverseFileTree(file.webkitGetAsEntry(), '');
        }
    }
    /**
     * @private
     * @param {?} file
     * @param {?=} acceptedFiles
     * @return {?}
     */
    attrAccept(file, acceptedFiles) {
        if (file && acceptedFiles) {
            /** @type {?} */
            const acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(',');
            /** @type {?} */
            const fileName = '' + file.name;
            /** @type {?} */
            const mimeType = '' + file.type;
            /** @type {?} */
            const baseMimeType = mimeType.replace(/\/.*$/, '');
            return acceptedFilesArray.some((/**
             * @param {?} type
             * @return {?}
             */
            type => {
                /** @type {?} */
                const validType = type.trim();
                if (validType.charAt(0) === '.') {
                    return (fileName
                        .toLowerCase()
                        .indexOf(validType.toLowerCase(), fileName.toLowerCase().length - validType.toLowerCase().length) !== -1);
                }
                else if (/\/\*$/.test(validType)) {
                    // This is something like a image/* mime type
                    return baseMimeType === validType.replace(/\/.*$/, '');
                }
                return mimeType === validType;
            }));
        }
        return true;
    }
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    attachUid(file) {
        if (!file.uid) {
            file.uid = Math.random()
                .toString(36)
                .substring(2);
        }
        return file;
    }
    /**
     * @param {?} fileList
     * @return {?}
     */
    uploadFiles(fileList) {
        /** @type {?} */
        let filters$ = of(Array.prototype.slice.call(fileList));
        if (this.options.filters) {
            this.options.filters.forEach((/**
             * @param {?} f
             * @return {?}
             */
            f => {
                filters$ = filters$.pipe(switchMap((/**
                 * @param {?} list
                 * @return {?}
                 */
                list => {
                    /** @type {?} */
                    const fnRes = f.fn(list);
                    return fnRes instanceof Observable ? fnRes : of(fnRes);
                })));
            }));
        }
        filters$.subscribe((/**
         * @param {?} list
         * @return {?}
         */
        list => {
            list.forEach((/**
             * @param {?} file
             * @return {?}
             */
            (file) => {
                this.attachUid(file);
                this.upload(file, list);
            }));
        }), (/**
         * @param {?} e
         * @return {?}
         */
        e => {
            warn(`Unhandled upload filter error`, e);
        }));
    }
    /**
     * @private
     * @param {?} file
     * @param {?} fileList
     * @return {?}
     */
    upload(file, fileList) {
        if (!this.options.beforeUpload) {
            return this.post(file);
        }
        /** @type {?} */
        const before = this.options.beforeUpload(file, fileList);
        if (before instanceof Observable) {
            before.subscribe((/**
             * @param {?} processedFile
             * @return {?}
             */
            (processedFile) => {
                /** @type {?} */
                const processedFileType = Object.prototype.toString.call(processedFile);
                if (processedFileType === '[object File]' || processedFileType === '[object Blob]') {
                    this.attachUid(processedFile);
                    this.post(processedFile);
                }
                else if (typeof processedFile === 'boolean' && processedFile !== false) {
                    this.post(file);
                }
            }), (/**
             * @param {?} e
             * @return {?}
             */
            e => {
                warn(`Unhandled upload beforeUpload error`, e);
            }));
        }
        else if (before !== false) {
            return this.post(file);
        }
    }
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    post(file) {
        if (this.destroy) {
            return;
        }
        /** @type {?} */
        const opt = this.options;
        const { uid } = file;
        let { data, headers } = opt;
        if (typeof data === 'function') {
            data = ((/** @type {?} */ (data)))(file);
        }
        if (typeof headers === 'function') {
            headers = ((/** @type {?} */ (headers)))(file);
        }
        /** @type {?} */
        const args = {
            action: opt.action,
            name: opt.name,
            headers,
            file,
            data,
            withCredentials: opt.withCredentials,
            onProgress: opt.onProgress
                ? (/**
                 * @param {?} e
                 * @return {?}
                 */
                e => {
                    (/** @type {?} */ (opt.onProgress))(e, file);
                })
                : undefined,
            onSuccess: (/**
             * @param {?} ret
             * @param {?} xhr
             * @return {?}
             */
            (ret, xhr) => {
                this.clean(uid);
                (/** @type {?} */ (opt.onSuccess))(ret, file, xhr);
            }),
            onError: (/**
             * @param {?} xhr
             * @return {?}
             */
            xhr => {
                this.clean(uid);
                (/** @type {?} */ (opt.onError))(xhr, file);
            })
        };
        /** @type {?} */
        const req$ = (opt.customRequest || this.xhr).call(this, args);
        if (!(req$ instanceof Subscription)) {
            warn(`Must return Subscription type in '[nzCustomRequest]' property`);
        }
        this.reqs[uid] = req$;
        (/** @type {?} */ (opt.onStart))(file);
    }
    /**
     * @private
     * @param {?} args
     * @return {?}
     */
    xhr(args) {
        /** @type {?} */
        const formData = new FormData();
        // tslint:disable-next-line:no-any
        formData.append((/** @type {?} */ (args.name)), (/** @type {?} */ (args.file)));
        if (args.data) {
            Object.keys(args.data).map((/**
             * @param {?} key
             * @return {?}
             */
            key => {
                formData.append(key, (/** @type {?} */ (args.data))[key]);
            }));
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
        /** @type {?} */
        const req = new HttpRequest('POST', (/** @type {?} */ (args.action)), formData, {
            reportProgress: true,
            withCredentials: args.withCredentials,
            headers: new HttpHeaders(args.headers)
        });
        return this.http.request(req).subscribe((
        // tslint:disable-next-line no-any
        /**
         * @param {?} event
         * @return {?}
         */
        (event) => {
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
        err => {
            this.abort(args.file);
            (/** @type {?} */ (args.onError))(err, args.file);
        }));
    }
    /**
     * @private
     * @param {?} uid
     * @return {?}
     */
    clean(uid) {
        /** @type {?} */
        const req$ = this.reqs[uid];
        if (req$ instanceof Subscription) {
            req$.unsubscribe();
        }
        delete this.reqs[uid];
    }
    /**
     * @param {?=} file
     * @return {?}
     */
    abort(file) {
        if (file) {
            this.clean(file && file.uid);
        }
        else {
            Object.keys(this.reqs).forEach((/**
             * @param {?} uid
             * @return {?}
             */
            uid => this.clean(uid)));
        }
    }
    /**
     * @private
     * @return {?}
     */
    setClassMap() {
        /** @type {?} */
        const classMap = Object.assign({ [this.prefixCls]: true, [`${this.prefixCls}-disabled`]: this.options.disabled }, this.classes);
        this.updateHostClassService.updateHostClass(this.el.nativeElement, classMap);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.inited = true;
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.inited) {
            this.setClassMap();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy = true;
        this.abort();
    }
}
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
NzUploadBtnComponent.ctorParameters = () => [
    { type: HttpClient, decorators: [{ type: Optional }] },
    { type: ElementRef },
    { type: NzUpdateHostClassService }
];
NzUploadBtnComponent.propDecorators = {
    file: [{ type: ViewChild, args: ['file', { static: false },] }],
    classes: [{ type: Input }],
    options: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['click',] }],
    onKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }],
    onFileDrop: [{ type: HostListener, args: ['drop', ['$event'],] }, { type: HostListener, args: ['dragover', ['$event'],] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdXBsb2FkLWJ0bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3VwbG9hZC8iLCJzb3VyY2VzIjpbIm56LXVwbG9hZC1idG4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFhLGFBQWEsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3BILE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBSUwsUUFBUSxFQUNSLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsSUFBSSxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFnQnBFLE1BQU0sT0FBTyxvQkFBb0I7Ozs7Ozs7SUFnUy9CLFlBQ3NCLElBQWdCLEVBQzVCLEVBQWMsRUFDZCxzQkFBZ0Q7UUFGcEMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUM1QixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUEwQjtRQWxTMUQsU0FBSSxHQUFvQyxFQUFFLENBQUM7UUFDbkMsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLFlBQU8sR0FBRyxLQUFLLENBQUM7O1FBS2YsWUFBTyxHQUFPLEVBQUUsQ0FBQzs7UUEyUWxCLGNBQVMsR0FBRyxZQUFZLENBQUM7UUFrQi9CLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxNQUFNLElBQUksS0FBSyxDQUFDLGdGQUFn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LEVBQUUsQ0FBQyxRQUFRLENBQUMsY0FDL0IsWUFBWSxTQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7OztJQS9CcEMsb0NBQTJDOzs7OztJQUMzQyxzQ0FBdUI7Ozs7O0lBQ3ZCLHVDQUF3Qjs7SUFFeEIsb0NBQXVEOztJQUd2RCx1Q0FBMEI7O0lBQzFCLHVDQUFtQzs7Ozs7SUEwUW5DLHlDQUFpQzs7Ozs7SUFjL0Isb0NBQW9DOzs7OztJQUNwQyxrQ0FBc0I7Ozs7O0lBQ3RCLHNEQUF3RCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgRU5URVIgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwRXZlbnQsIEh0dHBFdmVudFR5cGUsIEh0dHBIZWFkZXJzLCBIdHRwUmVxdWVzdCwgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgb2YsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyB3YXJuLCBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgVXBsb2FkRmlsZSwgVXBsb2FkWEhSQXJncywgWmlwQnV0dG9uT3B0aW9ucyB9IGZyb20gJy4vaW50ZXJmYWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnW256LXVwbG9hZC1idG5dJyxcclxuICBleHBvcnRBczogJ256VXBsb2FkQnRuJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotdXBsb2FkLWJ0bi5jb21wb25lbnQuaHRtbCcsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1thdHRyLnRhYmluZGV4XSc6ICdcIjBcIicsXHJcbiAgICAnW2F0dHIucm9sZV0nOiAnXCJidXR0b25cIidcclxuICB9LFxyXG4gIHByb3ZpZGVyczogW056VXBkYXRlSG9zdENsYXNzU2VydmljZV0sXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpVcGxvYWRCdG5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICByZXFzOiB7IFtrZXk6IHN0cmluZ106IFN1YnNjcmlwdGlvbiB9ID0ge307XHJcbiAgcHJpdmF0ZSBpbml0ZWQgPSBmYWxzZTtcclxuICBwcml2YXRlIGRlc3Ryb3kgPSBmYWxzZTtcclxuXHJcbiAgQFZpZXdDaGlsZCgnZmlsZScsIHsgc3RhdGljOiBmYWxzZSB9KSBmaWxlOiBFbGVtZW50UmVmO1xyXG5cclxuICAvLyAjcmVnaW9uIGZpZWxkc1xyXG4gIEBJbnB1dCgpIGNsYXNzZXM6IHt9ID0ge307XHJcbiAgQElucHV0KCkgb3B0aW9uczogWmlwQnV0dG9uT3B0aW9ucztcclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXHJcbiAgb25DbGljaygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm9wdGlvbnMuZGlzYWJsZWQgfHwgIXRoaXMub3B0aW9ucy5vcGVuRmlsZURpYWxvZ09uQ2xpY2spIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgKHRoaXMuZmlsZS5uYXRpdmVFbGVtZW50IGFzIEhUTUxJbnB1dEVsZW1lbnQpLmNsaWNrKCk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcclxuICBvbktleURvd24oZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5kaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicgfHwgZS5rZXlDb2RlID09PSBFTlRFUikge1xyXG4gICAgICB0aGlzLm9uQ2xpY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2Ryb3AnLCBbJyRldmVudCddKVxyXG4gIEBIb3N0TGlzdGVuZXIoJ2RyYWdvdmVyJywgWyckZXZlbnQnXSlcclxuICAvLyBza2lwIHNhZmFyaSBidWdcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgb25GaWxlRHJvcChlOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm9wdGlvbnMuZGlzYWJsZWQgfHwgZS50eXBlID09PSAnZHJhZ292ZXInKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5kaXJlY3RvcnkpIHtcclxuICAgICAgdGhpcy50cmF2ZXJzZUZpbGVUcmVlKGUuZGF0YVRyYW5zZmVyIS5pdGVtcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBmaWxlczogRmlsZVtdID0gQXJyYXkucHJvdG90eXBlLnNsaWNlXHJcbiAgICAgICAgLmNhbGwoZS5kYXRhVHJhbnNmZXIhLmZpbGVzKVxyXG4gICAgICAgIC5maWx0ZXIoKGZpbGU6IEZpbGUpID0+IHRoaXMuYXR0ckFjY2VwdChmaWxlLCB0aGlzLm9wdGlvbnMuYWNjZXB0KSk7XHJcbiAgICAgIGlmIChmaWxlcy5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLnVwbG9hZEZpbGVzKGZpbGVzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlKGU6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5vcHRpb25zLmRpc2FibGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGhpZSA9IGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICB0aGlzLnVwbG9hZEZpbGVzKGhpZS5maWxlcyEpO1xyXG4gICAgaGllLnZhbHVlID0gJyc7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRyYXZlcnNlRmlsZVRyZWUoZmlsZXM6IERhdGFUcmFuc2Zlckl0ZW1MaXN0KTogdm9pZCB7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgICBjb25zdCBfdHJhdmVyc2VGaWxlVHJlZSA9IChpdGVtOiBhbnksIHBhdGg6IHN0cmluZykgPT4ge1xyXG4gICAgICBpZiAoaXRlbS5pc0ZpbGUpIHtcclxuICAgICAgICBpdGVtLmZpbGUoKGZpbGU6IEZpbGUpID0+IHtcclxuICAgICAgICAgIGlmICh0aGlzLmF0dHJBY2NlcHQoZmlsZSwgdGhpcy5vcHRpb25zLmFjY2VwdCkpIHtcclxuICAgICAgICAgICAgdGhpcy51cGxvYWRGaWxlcyhbZmlsZV0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKGl0ZW0uaXNEaXJlY3RvcnkpIHtcclxuICAgICAgICBjb25zdCBkaXJSZWFkZXIgPSBpdGVtLmNyZWF0ZVJlYWRlcigpO1xyXG5cclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgICAgICAgZGlyUmVhZGVyLnJlYWRFbnRyaWVzKChlbnRyaWVzOiBhbnkpID0+IHtcclxuICAgICAgICAgIGZvciAoY29uc3QgZW50cmllSXRlbSBvZiBlbnRyaWVzKSB7XHJcbiAgICAgICAgICAgIF90cmF2ZXJzZUZpbGVUcmVlKGVudHJpZUl0ZW0sIGAke3BhdGh9JHtpdGVtLm5hbWV9L2ApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gICAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzIGFzIGFueSkge1xyXG4gICAgICBfdHJhdmVyc2VGaWxlVHJlZShmaWxlLndlYmtpdEdldEFzRW50cnkoKSwgJycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhdHRyQWNjZXB0KGZpbGU6IEZpbGUsIGFjY2VwdGVkRmlsZXM/OiBzdHJpbmcgfCBzdHJpbmdbXSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKGZpbGUgJiYgYWNjZXB0ZWRGaWxlcykge1xyXG4gICAgICBjb25zdCBhY2NlcHRlZEZpbGVzQXJyYXkgPSBBcnJheS5pc0FycmF5KGFjY2VwdGVkRmlsZXMpID8gYWNjZXB0ZWRGaWxlcyA6IGFjY2VwdGVkRmlsZXMuc3BsaXQoJywnKTtcclxuICAgICAgY29uc3QgZmlsZU5hbWUgPSAnJyArIGZpbGUubmFtZTtcclxuICAgICAgY29uc3QgbWltZVR5cGUgPSAnJyArIGZpbGUudHlwZTtcclxuICAgICAgY29uc3QgYmFzZU1pbWVUeXBlID0gbWltZVR5cGUucmVwbGFjZSgvXFwvLiokLywgJycpO1xyXG5cclxuICAgICAgcmV0dXJuIGFjY2VwdGVkRmlsZXNBcnJheS5zb21lKHR5cGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IHZhbGlkVHlwZSA9IHR5cGUudHJpbSgpO1xyXG4gICAgICAgIGlmICh2YWxpZFR5cGUuY2hhckF0KDApID09PSAnLicpIHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIGZpbGVOYW1lXHJcbiAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgICAuaW5kZXhPZih2YWxpZFR5cGUudG9Mb3dlckNhc2UoKSwgZmlsZU5hbWUudG9Mb3dlckNhc2UoKS5sZW5ndGggLSB2YWxpZFR5cGUudG9Mb3dlckNhc2UoKS5sZW5ndGgpICE9PSAtMVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2UgaWYgKC9cXC9cXCokLy50ZXN0KHZhbGlkVHlwZSkpIHtcclxuICAgICAgICAgIC8vIFRoaXMgaXMgc29tZXRoaW5nIGxpa2UgYSBpbWFnZS8qIG1pbWUgdHlwZVxyXG4gICAgICAgICAgcmV0dXJuIGJhc2VNaW1lVHlwZSA9PT0gdmFsaWRUeXBlLnJlcGxhY2UoL1xcLy4qJC8sICcnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1pbWVUeXBlID09PSB2YWxpZFR5cGU7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGF0dGFjaFVpZChmaWxlOiBVcGxvYWRGaWxlKTogVXBsb2FkRmlsZSB7XHJcbiAgICBpZiAoIWZpbGUudWlkKSB7XHJcbiAgICAgIGZpbGUudWlkID0gTWF0aC5yYW5kb20oKVxyXG4gICAgICAgIC50b1N0cmluZygzNilcclxuICAgICAgICAuc3Vic3RyaW5nKDIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZpbGU7XHJcbiAgfVxyXG5cclxuICB1cGxvYWRGaWxlcyhmaWxlTGlzdDogRmlsZUxpc3QgfCBGaWxlW10pOiB2b2lkIHtcclxuICAgIGxldCBmaWx0ZXJzJDogT2JzZXJ2YWJsZTxVcGxvYWRGaWxlW10+ID0gb2YoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZmlsZUxpc3QpKTtcclxuICAgIGlmICh0aGlzLm9wdGlvbnMuZmlsdGVycykge1xyXG4gICAgICB0aGlzLm9wdGlvbnMuZmlsdGVycy5mb3JFYWNoKGYgPT4ge1xyXG4gICAgICAgIGZpbHRlcnMkID0gZmlsdGVycyQucGlwZShcclxuICAgICAgICAgIHN3aXRjaE1hcChsaXN0ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZm5SZXMgPSBmLmZuKGxpc3QpO1xyXG4gICAgICAgICAgICByZXR1cm4gZm5SZXMgaW5zdGFuY2VvZiBPYnNlcnZhYmxlID8gZm5SZXMgOiBvZihmblJlcyk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZmlsdGVycyQuc3Vic2NyaWJlKFxyXG4gICAgICBsaXN0ID0+IHtcclxuICAgICAgICBsaXN0LmZvckVhY2goKGZpbGU6IFVwbG9hZEZpbGUpID0+IHtcclxuICAgICAgICAgIHRoaXMuYXR0YWNoVWlkKGZpbGUpO1xyXG4gICAgICAgICAgdGhpcy51cGxvYWQoZmlsZSwgbGlzdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGUgPT4ge1xyXG4gICAgICAgIHdhcm4oYFVuaGFuZGxlZCB1cGxvYWQgZmlsdGVyIGVycm9yYCwgZSk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwbG9hZChmaWxlOiBVcGxvYWRGaWxlLCBmaWxlTGlzdDogVXBsb2FkRmlsZVtdKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5iZWZvcmVVcGxvYWQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucG9zdChmaWxlKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGJlZm9yZSA9IHRoaXMub3B0aW9ucy5iZWZvcmVVcGxvYWQoZmlsZSwgZmlsZUxpc3QpO1xyXG4gICAgaWYgKGJlZm9yZSBpbnN0YW5jZW9mIE9ic2VydmFibGUpIHtcclxuICAgICAgYmVmb3JlLnN1YnNjcmliZShcclxuICAgICAgICAocHJvY2Vzc2VkRmlsZTogVXBsb2FkRmlsZSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgcHJvY2Vzc2VkRmlsZVR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwocHJvY2Vzc2VkRmlsZSk7XHJcbiAgICAgICAgICBpZiAocHJvY2Vzc2VkRmlsZVR5cGUgPT09ICdbb2JqZWN0IEZpbGVdJyB8fCBwcm9jZXNzZWRGaWxlVHlwZSA9PT0gJ1tvYmplY3QgQmxvYl0nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXR0YWNoVWlkKHByb2Nlc3NlZEZpbGUpO1xyXG4gICAgICAgICAgICB0aGlzLnBvc3QocHJvY2Vzc2VkRmlsZSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9jZXNzZWRGaWxlID09PSAnYm9vbGVhbicgJiYgcHJvY2Vzc2VkRmlsZSAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5wb3N0KGZpbGUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZSA9PiB7XHJcbiAgICAgICAgICB3YXJuKGBVbmhhbmRsZWQgdXBsb2FkIGJlZm9yZVVwbG9hZCBlcnJvcmAsIGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAoYmVmb3JlICE9PSBmYWxzZSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5wb3N0KGZpbGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwb3N0KGZpbGU6IFVwbG9hZEZpbGUpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRlc3Ryb3kpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgb3B0ID0gdGhpcy5vcHRpb25zO1xyXG4gICAgY29uc3QgeyB1aWQgfSA9IGZpbGU7XHJcbiAgICBsZXQgeyBkYXRhLCBoZWFkZXJzIH0gPSBvcHQ7XHJcbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgZGF0YSA9IChkYXRhIGFzIChmaWxlOiBVcGxvYWRGaWxlKSA9PiB7fSkoZmlsZSk7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIGhlYWRlcnMgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgaGVhZGVycyA9IChoZWFkZXJzIGFzIChmaWxlOiBVcGxvYWRGaWxlKSA9PiB7fSkoZmlsZSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBhcmdzOiBVcGxvYWRYSFJBcmdzID0ge1xyXG4gICAgICBhY3Rpb246IG9wdC5hY3Rpb24sXHJcbiAgICAgIG5hbWU6IG9wdC5uYW1lLFxyXG4gICAgICBoZWFkZXJzLFxyXG4gICAgICBmaWxlLFxyXG4gICAgICBkYXRhLFxyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IG9wdC53aXRoQ3JlZGVudGlhbHMsXHJcbiAgICAgIG9uUHJvZ3Jlc3M6IG9wdC5vblByb2dyZXNzXHJcbiAgICAgICAgPyBlID0+IHtcclxuICAgICAgICAgICAgb3B0Lm9uUHJvZ3Jlc3MhKGUsIGZpbGUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDogdW5kZWZpbmVkLFxyXG4gICAgICBvblN1Y2Nlc3M6IChyZXQsIHhocikgPT4ge1xyXG4gICAgICAgIHRoaXMuY2xlYW4odWlkKTtcclxuICAgICAgICBvcHQub25TdWNjZXNzIShyZXQsIGZpbGUsIHhocik7XHJcbiAgICAgIH0sXHJcbiAgICAgIG9uRXJyb3I6IHhociA9PiB7XHJcbiAgICAgICAgdGhpcy5jbGVhbih1aWQpO1xyXG4gICAgICAgIG9wdC5vbkVycm9yISh4aHIsIGZpbGUpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgcmVxJCA9IChvcHQuY3VzdG9tUmVxdWVzdCB8fCB0aGlzLnhocikuY2FsbCh0aGlzLCBhcmdzKTtcclxuICAgIGlmICghKHJlcSQgaW5zdGFuY2VvZiBTdWJzY3JpcHRpb24pKSB7XHJcbiAgICAgIHdhcm4oYE11c3QgcmV0dXJuIFN1YnNjcmlwdGlvbiB0eXBlIGluICdbbnpDdXN0b21SZXF1ZXN0XScgcHJvcGVydHlgKTtcclxuICAgIH1cclxuICAgIHRoaXMucmVxc1t1aWRdID0gcmVxJDtcclxuICAgIG9wdC5vblN0YXJ0IShmaWxlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgeGhyKGFyZ3M6IFVwbG9hZFhIUkFyZ3MpOiBTdWJzY3JpcHRpb24ge1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICAgIGZvcm1EYXRhLmFwcGVuZChhcmdzLm5hbWUhLCBhcmdzLmZpbGUgYXMgYW55KTtcclxuICAgIGlmIChhcmdzLmRhdGEpIHtcclxuICAgICAgT2JqZWN0LmtleXMoYXJncy5kYXRhKS5tYXAoa2V5ID0+IHtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoa2V5LCBhcmdzLmRhdGEhW2tleV0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmICghYXJncy5oZWFkZXJzKSB7XHJcbiAgICAgIGFyZ3MuaGVhZGVycyA9IHt9O1xyXG4gICAgfVxyXG4gICAgaWYgKGFyZ3MuaGVhZGVyc1snWC1SZXF1ZXN0ZWQtV2l0aCddICE9PSBudWxsKSB7XHJcbiAgICAgIGFyZ3MuaGVhZGVyc1snWC1SZXF1ZXN0ZWQtV2l0aCddID0gYFhNTEh0dHBSZXF1ZXN0YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRlbGV0ZSBhcmdzLmhlYWRlcnNbJ1gtUmVxdWVzdGVkLVdpdGgnXTtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlcSA9IG5ldyBIdHRwUmVxdWVzdCgnUE9TVCcsIGFyZ3MuYWN0aW9uISwgZm9ybURhdGEsIHtcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M6IHRydWUsXHJcbiAgICAgIHdpdGhDcmVkZW50aWFsczogYXJncy53aXRoQ3JlZGVudGlhbHMsXHJcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyhhcmdzLmhlYWRlcnMpXHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdChyZXEpLnN1YnNjcmliZShcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWFueVxyXG4gICAgICAoZXZlbnQ6IEh0dHBFdmVudDxhbnk+KSA9PiB7XHJcbiAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09IEh0dHBFdmVudFR5cGUuVXBsb2FkUHJvZ3Jlc3MpIHtcclxuICAgICAgICAgIGlmIChldmVudC50b3RhbCEgPiAwKSB7XHJcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICAgICAgICAgICAgKGV2ZW50IGFzIGFueSkucGVyY2VudCA9IChldmVudC5sb2FkZWQgLyBldmVudC50b3RhbCEpICogMTAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYXJncy5vblByb2dyZXNzIShldmVudCwgYXJncy5maWxlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50IGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlKSB7XHJcbiAgICAgICAgICBhcmdzLm9uU3VjY2VzcyEoZXZlbnQuYm9keSwgYXJncy5maWxlLCBldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBlcnIgPT4ge1xyXG4gICAgICAgIHRoaXMuYWJvcnQoYXJncy5maWxlKTtcclxuICAgICAgICBhcmdzLm9uRXJyb3IhKGVyciwgYXJncy5maWxlKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xlYW4odWlkOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGNvbnN0IHJlcSQgPSB0aGlzLnJlcXNbdWlkXTtcclxuICAgIGlmIChyZXEkIGluc3RhbmNlb2YgU3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgIHJlcSQudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICAgIGRlbGV0ZSB0aGlzLnJlcXNbdWlkXTtcclxuICB9XHJcblxyXG4gIGFib3J0KGZpbGU/OiBVcGxvYWRGaWxlKTogdm9pZCB7XHJcbiAgICBpZiAoZmlsZSkge1xyXG4gICAgICB0aGlzLmNsZWFuKGZpbGUgJiYgZmlsZS51aWQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgT2JqZWN0LmtleXModGhpcy5yZXFzKS5mb3JFYWNoKHVpZCA9PiB0aGlzLmNsZWFuKHVpZCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gI3JlZ2lvbiBzdHlsZXNcclxuXHJcbiAgcHJpdmF0ZSBwcmVmaXhDbHMgPSAnYW50LXVwbG9hZCc7XHJcblxyXG4gIHByaXZhdGUgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICBjb25zdCBjbGFzc01hcCA9IHtcclxuICAgICAgW3RoaXMucHJlZml4Q2xzXTogdHJ1ZSxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1kaXNhYmxlZGBdOiB0aGlzLm9wdGlvbnMuZGlzYWJsZWQsXHJcbiAgICAgIC4uLnRoaXMuY2xhc3Nlc1xyXG4gICAgfTtcclxuICAgIHRoaXMudXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCBjbGFzc01hcCk7XHJcbiAgfVxyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgdXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICBpZiAoIWh0dHApIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBOb3QgZm91bmQgJ0h0dHBDbGllbnQnLCBZb3UgY2FuIGltcG9ydCAnSHR0cENsaWVudE1vZHVsZScgaW4geW91ciByb290IG1vZHVsZS5gKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pbml0ZWQpIHtcclxuICAgICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kgPSB0cnVlO1xyXG4gICAgdGhpcy5hYm9ydCgpO1xyXG4gIH1cclxufVxyXG4iXX0=
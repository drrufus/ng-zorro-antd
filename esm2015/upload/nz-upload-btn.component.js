/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdXBsb2FkLWJ0bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3VwbG9hZC8iLCJzb3VyY2VzIjpbIm56LXVwbG9hZC1idG4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQWEsYUFBYSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDcEgsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFJTCxRQUFRLEVBQ1IsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxJQUFJLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQWdCcEUsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7OztJQWdTL0IsWUFDc0IsSUFBZ0IsRUFDNUIsRUFBYyxFQUNkLHNCQUFnRDtRQUZwQyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQzVCLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQTBCO1FBbFMxRCxTQUFJLEdBQW9DLEVBQUUsQ0FBQztRQUNuQyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsWUFBTyxHQUFHLEtBQUssQ0FBQzs7UUFLZixZQUFPLEdBQU8sRUFBRSxDQUFDOztRQTJRbEIsY0FBUyxHQUFHLFlBQVksQ0FBQztRQWtCL0IsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULE1BQU0sSUFBSSxLQUFLLENBQUMsZ0ZBQWdG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RUFBRSxDQUFDLFFBQVEsQ0FBQyxjQUMvQixZQUFZLFNBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDOzs7O0lBL0JwQyxvQ0FBMkM7Ozs7O0lBQzNDLHNDQUF1Qjs7Ozs7SUFDdkIsdUNBQXdCOztJQUV4QixvQ0FBdUQ7O0lBR3ZELHVDQUEwQjs7SUFDMUIsdUNBQW1DOzs7OztJQTBRbkMseUNBQWlDOzs7OztJQWMvQixvQ0FBb0M7Ozs7O0lBQ3BDLGtDQUFzQjs7Ozs7SUFDdEIsc0RBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBFTlRFUiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBFdmVudCwgSHR0cEV2ZW50VHlwZSwgSHR0cEhlYWRlcnMsIEh0dHBSZXF1ZXN0LCBIdHRwUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBvZiwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IHdhcm4sIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBVcGxvYWRGaWxlLCBVcGxvYWRYSFJBcmdzLCBaaXBCdXR0b25PcHRpb25zIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdbbnotdXBsb2FkLWJ0bl0nLFxyXG4gIGV4cG9ydEFzOiAnbnpVcGxvYWRCdG4nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei11cGxvYWQtYnRuLmNvbXBvbmVudC5odG1sJyxcclxuICBob3N0OiB7XHJcbiAgICAnW2F0dHIudGFiaW5kZXhdJzogJ1wiMFwiJyxcclxuICAgICdbYXR0ci5yb2xlXSc6ICdcImJ1dHRvblwiJ1xyXG4gIH0sXHJcbiAgcHJvdmlkZXJzOiBbTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelVwbG9hZEJ0bkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIHJlcXM6IHsgW2tleTogc3RyaW5nXTogU3Vic2NyaXB0aW9uIH0gPSB7fTtcclxuICBwcml2YXRlIGluaXRlZCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgZGVzdHJveSA9IGZhbHNlO1xyXG5cclxuICBAVmlld0NoaWxkKCdmaWxlJywgeyBzdGF0aWM6IGZhbHNlIH0pIGZpbGU6IEVsZW1lbnRSZWY7XHJcblxyXG4gIC8vICNyZWdpb24gZmllbGRzXHJcbiAgQElucHV0KCkgY2xhc3Nlczoge30gPSB7fTtcclxuICBASW5wdXQoKSBvcHRpb25zOiBaaXBCdXR0b25PcHRpb25zO1xyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcclxuICBvbkNsaWNrKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5kaXNhYmxlZCB8fCAhdGhpcy5vcHRpb25zLm9wZW5GaWxlRGlhbG9nT25DbGljaykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAodGhpcy5maWxlLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTElucHV0RWxlbWVudCkuY2xpY2soKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKVxyXG4gIG9uS2V5RG93bihlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5vcHRpb25zLmRpc2FibGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJyB8fCBlLmtleUNvZGUgPT09IEVOVEVSKSB7XHJcbiAgICAgIHRoaXMub25DbGljaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZHJvcCcsIFsnJGV2ZW50J10pXHJcbiAgQEhvc3RMaXN0ZW5lcignZHJhZ292ZXInLCBbJyRldmVudCddKVxyXG4gIC8vIHNraXAgc2FmYXJpIGJ1Z1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBvbkZpbGVEcm9wKGU6IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5kaXNhYmxlZCB8fCBlLnR5cGUgPT09ICdkcmFnb3ZlcicpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5vcHRpb25zLmRpcmVjdG9yeSkge1xyXG4gICAgICB0aGlzLnRyYXZlcnNlRmlsZVRyZWUoZS5kYXRhVHJhbnNmZXIhLml0ZW1zKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGZpbGVzOiBGaWxlW10gPSBBcnJheS5wcm90b3R5cGUuc2xpY2VcclxuICAgICAgICAuY2FsbChlLmRhdGFUcmFuc2ZlciEuZmlsZXMpXHJcbiAgICAgICAgLmZpbHRlcigoZmlsZTogRmlsZSkgPT4gdGhpcy5hdHRyQWNjZXB0KGZpbGUsIHRoaXMub3B0aW9ucy5hY2NlcHQpKTtcclxuICAgICAgaWYgKGZpbGVzLmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMudXBsb2FkRmlsZXMoZmlsZXMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2UoZTogRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm9wdGlvbnMuZGlzYWJsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaGllID0gZS50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIHRoaXMudXBsb2FkRmlsZXMoaGllLmZpbGVzISk7XHJcbiAgICBoaWUudmFsdWUgPSAnJztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdHJhdmVyc2VGaWxlVHJlZShmaWxlczogRGF0YVRyYW5zZmVySXRlbUxpc3QpOiB2b2lkIHtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICAgIGNvbnN0IF90cmF2ZXJzZUZpbGVUcmVlID0gKGl0ZW06IGFueSwgcGF0aDogc3RyaW5nKSA9PiB7XHJcbiAgICAgIGlmIChpdGVtLmlzRmlsZSkge1xyXG4gICAgICAgIGl0ZW0uZmlsZSgoZmlsZTogRmlsZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKHRoaXMuYXR0ckFjY2VwdChmaWxlLCB0aGlzLm9wdGlvbnMuYWNjZXB0KSkge1xyXG4gICAgICAgICAgICB0aGlzLnVwbG9hZEZpbGVzKFtmaWxlXSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoaXRlbS5pc0RpcmVjdG9yeSkge1xyXG4gICAgICAgIGNvbnN0IGRpclJlYWRlciA9IGl0ZW0uY3JlYXRlUmVhZGVyKCk7XHJcblxyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICAgICAgICBkaXJSZWFkZXIucmVhZEVudHJpZXMoKGVudHJpZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgZm9yIChjb25zdCBlbnRyaWVJdGVtIG9mIGVudHJpZXMpIHtcclxuICAgICAgICAgICAgX3RyYXZlcnNlRmlsZVRyZWUoZW50cmllSXRlbSwgYCR7cGF0aH0ke2l0ZW0ubmFtZX0vYCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMgYXMgYW55KSB7XHJcbiAgICAgIF90cmF2ZXJzZUZpbGVUcmVlKGZpbGUud2Via2l0R2V0QXNFbnRyeSgpLCAnJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGF0dHJBY2NlcHQoZmlsZTogRmlsZSwgYWNjZXB0ZWRGaWxlcz86IHN0cmluZyB8IHN0cmluZ1tdKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoZmlsZSAmJiBhY2NlcHRlZEZpbGVzKSB7XHJcbiAgICAgIGNvbnN0IGFjY2VwdGVkRmlsZXNBcnJheSA9IEFycmF5LmlzQXJyYXkoYWNjZXB0ZWRGaWxlcykgPyBhY2NlcHRlZEZpbGVzIDogYWNjZXB0ZWRGaWxlcy5zcGxpdCgnLCcpO1xyXG4gICAgICBjb25zdCBmaWxlTmFtZSA9ICcnICsgZmlsZS5uYW1lO1xyXG4gICAgICBjb25zdCBtaW1lVHlwZSA9ICcnICsgZmlsZS50eXBlO1xyXG4gICAgICBjb25zdCBiYXNlTWltZVR5cGUgPSBtaW1lVHlwZS5yZXBsYWNlKC9cXC8uKiQvLCAnJyk7XHJcblxyXG4gICAgICByZXR1cm4gYWNjZXB0ZWRGaWxlc0FycmF5LnNvbWUodHlwZSA9PiB7XHJcbiAgICAgICAgY29uc3QgdmFsaWRUeXBlID0gdHlwZS50cmltKCk7XHJcbiAgICAgICAgaWYgKHZhbGlkVHlwZS5jaGFyQXQoMCkgPT09ICcuJykge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgZmlsZU5hbWVcclxuICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICAgIC5pbmRleE9mKHZhbGlkVHlwZS50b0xvd2VyQ2FzZSgpLCBmaWxlTmFtZS50b0xvd2VyQ2FzZSgpLmxlbmd0aCAtIHZhbGlkVHlwZS50b0xvd2VyQ2FzZSgpLmxlbmd0aCkgIT09IC0xXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoL1xcL1xcKiQvLnRlc3QodmFsaWRUeXBlKSkge1xyXG4gICAgICAgICAgLy8gVGhpcyBpcyBzb21ldGhpbmcgbGlrZSBhIGltYWdlLyogbWltZSB0eXBlXHJcbiAgICAgICAgICByZXR1cm4gYmFzZU1pbWVUeXBlID09PSB2YWxpZFR5cGUucmVwbGFjZSgvXFwvLiokLywgJycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWltZVR5cGUgPT09IHZhbGlkVHlwZTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXR0YWNoVWlkKGZpbGU6IFVwbG9hZEZpbGUpOiBVcGxvYWRGaWxlIHtcclxuICAgIGlmICghZmlsZS51aWQpIHtcclxuICAgICAgZmlsZS51aWQgPSBNYXRoLnJhbmRvbSgpXHJcbiAgICAgICAgLnRvU3RyaW5nKDM2KVxyXG4gICAgICAgIC5zdWJzdHJpbmcoMik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmlsZTtcclxuICB9XHJcblxyXG4gIHVwbG9hZEZpbGVzKGZpbGVMaXN0OiBGaWxlTGlzdCB8IEZpbGVbXSk6IHZvaWQge1xyXG4gICAgbGV0IGZpbHRlcnMkOiBPYnNlcnZhYmxlPFVwbG9hZEZpbGVbXT4gPSBvZihBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmaWxlTGlzdCkpO1xyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5maWx0ZXJzKSB7XHJcbiAgICAgIHRoaXMub3B0aW9ucy5maWx0ZXJzLmZvckVhY2goZiA9PiB7XHJcbiAgICAgICAgZmlsdGVycyQgPSBmaWx0ZXJzJC5waXBlKFxyXG4gICAgICAgICAgc3dpdGNoTWFwKGxpc3QgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBmblJlcyA9IGYuZm4obGlzdCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmblJlcyBpbnN0YW5jZW9mIE9ic2VydmFibGUgPyBmblJlcyA6IG9mKGZuUmVzKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmaWx0ZXJzJC5zdWJzY3JpYmUoXHJcbiAgICAgIGxpc3QgPT4ge1xyXG4gICAgICAgIGxpc3QuZm9yRWFjaCgoZmlsZTogVXBsb2FkRmlsZSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5hdHRhY2hVaWQoZmlsZSk7XHJcbiAgICAgICAgICB0aGlzLnVwbG9hZChmaWxlLCBsaXN0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgZSA9PiB7XHJcbiAgICAgICAgd2FybihgVW5oYW5kbGVkIHVwbG9hZCBmaWx0ZXIgZXJyb3JgLCBlKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBsb2FkKGZpbGU6IFVwbG9hZEZpbGUsIGZpbGVMaXN0OiBVcGxvYWRGaWxlW10pOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5vcHRpb25zLmJlZm9yZVVwbG9hZCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5wb3N0KGZpbGUpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYmVmb3JlID0gdGhpcy5vcHRpb25zLmJlZm9yZVVwbG9hZChmaWxlLCBmaWxlTGlzdCk7XHJcbiAgICBpZiAoYmVmb3JlIGluc3RhbmNlb2YgT2JzZXJ2YWJsZSkge1xyXG4gICAgICBiZWZvcmUuc3Vic2NyaWJlKFxyXG4gICAgICAgIChwcm9jZXNzZWRGaWxlOiBVcGxvYWRGaWxlKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBwcm9jZXNzZWRGaWxlVHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChwcm9jZXNzZWRGaWxlKTtcclxuICAgICAgICAgIGlmIChwcm9jZXNzZWRGaWxlVHlwZSA9PT0gJ1tvYmplY3QgRmlsZV0nIHx8IHByb2Nlc3NlZEZpbGVUeXBlID09PSAnW29iamVjdCBCbG9iXScpIHtcclxuICAgICAgICAgICAgdGhpcy5hdHRhY2hVaWQocHJvY2Vzc2VkRmlsZSk7XHJcbiAgICAgICAgICAgIHRoaXMucG9zdChwcm9jZXNzZWRGaWxlKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHByb2Nlc3NlZEZpbGUgPT09ICdib29sZWFuJyAmJiBwcm9jZXNzZWRGaWxlICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLnBvc3QoZmlsZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlID0+IHtcclxuICAgICAgICAgIHdhcm4oYFVuaGFuZGxlZCB1cGxvYWQgYmVmb3JlVXBsb2FkIGVycm9yYCwgZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIGlmIChiZWZvcmUgIT09IGZhbHNlKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnBvc3QoZmlsZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHBvc3QoZmlsZTogVXBsb2FkRmlsZSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZGVzdHJveSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBvcHQgPSB0aGlzLm9wdGlvbnM7XHJcbiAgICBjb25zdCB7IHVpZCB9ID0gZmlsZTtcclxuICAgIGxldCB7IGRhdGEsIGhlYWRlcnMgfSA9IG9wdDtcclxuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICBkYXRhID0gKGRhdGEgYXMgKGZpbGU6IFVwbG9hZEZpbGUpID0+IHt9KShmaWxlKTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgaGVhZGVycyA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICBoZWFkZXJzID0gKGhlYWRlcnMgYXMgKGZpbGU6IFVwbG9hZEZpbGUpID0+IHt9KShmaWxlKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGFyZ3M6IFVwbG9hZFhIUkFyZ3MgPSB7XHJcbiAgICAgIGFjdGlvbjogb3B0LmFjdGlvbixcclxuICAgICAgbmFtZTogb3B0Lm5hbWUsXHJcbiAgICAgIGhlYWRlcnMsXHJcbiAgICAgIGZpbGUsXHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIHdpdGhDcmVkZW50aWFsczogb3B0LndpdGhDcmVkZW50aWFscyxcclxuICAgICAgb25Qcm9ncmVzczogb3B0Lm9uUHJvZ3Jlc3NcclxuICAgICAgICA/IGUgPT4ge1xyXG4gICAgICAgICAgICBvcHQub25Qcm9ncmVzcyEoZSwgZmlsZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgOiB1bmRlZmluZWQsXHJcbiAgICAgIG9uU3VjY2VzczogKHJldCwgeGhyKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jbGVhbih1aWQpO1xyXG4gICAgICAgIG9wdC5vblN1Y2Nlc3MhKHJldCwgZmlsZSwgeGhyKTtcclxuICAgICAgfSxcclxuICAgICAgb25FcnJvcjogeGhyID0+IHtcclxuICAgICAgICB0aGlzLmNsZWFuKHVpZCk7XHJcbiAgICAgICAgb3B0Lm9uRXJyb3IhKHhociwgZmlsZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCByZXEkID0gKG9wdC5jdXN0b21SZXF1ZXN0IHx8IHRoaXMueGhyKS5jYWxsKHRoaXMsIGFyZ3MpO1xyXG4gICAgaWYgKCEocmVxJCBpbnN0YW5jZW9mIFN1YnNjcmlwdGlvbikpIHtcclxuICAgICAgd2FybihgTXVzdCByZXR1cm4gU3Vic2NyaXB0aW9uIHR5cGUgaW4gJ1tuekN1c3RvbVJlcXVlc3RdJyBwcm9wZXJ0eWApO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yZXFzW3VpZF0gPSByZXEkO1xyXG4gICAgb3B0Lm9uU3RhcnQhKGZpbGUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB4aHIoYXJnczogVXBsb2FkWEhSQXJncyk6IFN1YnNjcmlwdGlvbiB7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gICAgZm9ybURhdGEuYXBwZW5kKGFyZ3MubmFtZSEsIGFyZ3MuZmlsZSBhcyBhbnkpO1xyXG4gICAgaWYgKGFyZ3MuZGF0YSkge1xyXG4gICAgICBPYmplY3Qua2V5cyhhcmdzLmRhdGEpLm1hcChrZXkgPT4ge1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChrZXksIGFyZ3MuZGF0YSFba2V5XSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKCFhcmdzLmhlYWRlcnMpIHtcclxuICAgICAgYXJncy5oZWFkZXJzID0ge307XHJcbiAgICB9XHJcbiAgICBpZiAoYXJncy5oZWFkZXJzWydYLVJlcXVlc3RlZC1XaXRoJ10gIT09IG51bGwpIHtcclxuICAgICAgYXJncy5oZWFkZXJzWydYLVJlcXVlc3RlZC1XaXRoJ10gPSBgWE1MSHR0cFJlcXVlc3RgO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGVsZXRlIGFyZ3MuaGVhZGVyc1snWC1SZXF1ZXN0ZWQtV2l0aCddO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVxID0gbmV3IEh0dHBSZXF1ZXN0KCdQT1NUJywgYXJncy5hY3Rpb24hLCBmb3JtRGF0YSwge1xyXG4gICAgICByZXBvcnRQcm9ncmVzczogdHJ1ZSxcclxuICAgICAgd2l0aENyZWRlbnRpYWxzOiBhcmdzLndpdGhDcmVkZW50aWFscyxcclxuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKGFyZ3MuaGVhZGVycylcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5yZXF1ZXN0KHJlcSkuc3Vic2NyaWJlKFxyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tYW55XHJcbiAgICAgIChldmVudDogSHR0cEV2ZW50PGFueT4pID0+IHtcclxuICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gSHR0cEV2ZW50VHlwZS5VcGxvYWRQcm9ncmVzcykge1xyXG4gICAgICAgICAgaWYgKGV2ZW50LnRvdGFsISA+IDApIHtcclxuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gICAgICAgICAgICAoZXZlbnQgYXMgYW55KS5wZXJjZW50ID0gKGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsISkgKiAxMDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBhcmdzLm9uUHJvZ3Jlc3MhKGV2ZW50LCBhcmdzLmZpbGUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpIHtcclxuICAgICAgICAgIGFyZ3Mub25TdWNjZXNzIShldmVudC5ib2R5LCBhcmdzLmZpbGUsIGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgdGhpcy5hYm9ydChhcmdzLmZpbGUpO1xyXG4gICAgICAgIGFyZ3Mub25FcnJvciEoZXJyLCBhcmdzLmZpbGUpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGVhbih1aWQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3QgcmVxJCA9IHRoaXMucmVxc1t1aWRdO1xyXG4gICAgaWYgKHJlcSQgaW5zdGFuY2VvZiBTdWJzY3JpcHRpb24pIHtcclxuICAgICAgcmVxJC51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gICAgZGVsZXRlIHRoaXMucmVxc1t1aWRdO1xyXG4gIH1cclxuXHJcbiAgYWJvcnQoZmlsZT86IFVwbG9hZEZpbGUpOiB2b2lkIHtcclxuICAgIGlmIChmaWxlKSB7XHJcbiAgICAgIHRoaXMuY2xlYW4oZmlsZSAmJiBmaWxlLnVpZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBPYmplY3Qua2V5cyh0aGlzLnJlcXMpLmZvckVhY2godWlkID0+IHRoaXMuY2xlYW4odWlkKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAjcmVnaW9uIHN0eWxlc1xyXG5cclxuICBwcml2YXRlIHByZWZpeENscyA9ICdhbnQtdXBsb2FkJztcclxuXHJcbiAgcHJpdmF0ZSBzZXRDbGFzc01hcCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGNsYXNzTWFwID0ge1xyXG4gICAgICBbdGhpcy5wcmVmaXhDbHNdOiB0cnVlLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWRpc2FibGVkYF06IHRoaXMub3B0aW9ucy5kaXNhYmxlZCxcclxuICAgICAgLi4udGhpcy5jbGFzc2VzXHJcbiAgICB9O1xyXG4gICAgdGhpcy51cGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIGNsYXNzTWFwKTtcclxuICB9XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSB1cGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VcclxuICApIHtcclxuICAgIGlmICghaHR0cCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBmb3VuZCAnSHR0cENsaWVudCcsIFlvdSBjYW4gaW1wb3J0ICdIdHRwQ2xpZW50TW9kdWxlJyBpbiB5b3VyIHJvb3QgbW9kdWxlLmApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmluaXRlZCA9IHRydWU7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmluaXRlZCkge1xyXG4gICAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSA9IHRydWU7XHJcbiAgICB0aGlzLmFib3J0KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
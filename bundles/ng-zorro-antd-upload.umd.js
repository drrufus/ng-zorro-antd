(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/keycodes'), require('@angular/common/http'), require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('ng-zorro-antd/core'), require('@angular/animations'), require('@angular/cdk/platform'), require('@angular/common'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/tooltip'), require('ng-zorro-antd/progress'), require('ng-zorro-antd/i18n'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/upload', ['exports', '@angular/cdk/keycodes', '@angular/common/http', '@angular/core', 'rxjs', 'rxjs/operators', 'ng-zorro-antd/core', '@angular/animations', '@angular/cdk/platform', '@angular/common', 'ng-zorro-antd/icon', 'ng-zorro-antd/tooltip', 'ng-zorro-antd/progress', 'ng-zorro-antd/i18n', '@angular/forms'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].upload = {}), global.ng.cdk.keycodes, global.ng.common.http, global.ng.core, global.rxjs, global.rxjs.operators, global['ng-zorro-antd'].core, global.ng.animations, global.ng.cdk.platform, global.ng.common, global['ng-zorro-antd'].icon, global['ng-zorro-antd'].tooltip, global['ng-zorro-antd'].progress, global['ng-zorro-antd'].i18n, global.ng.forms));
}(this, (function (exports, keycodes, http, core, rxjs, operators, core$1, animations, platform, common, icon, tooltip, progress, i18n, forms) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

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
            if (e.key === 'Enter' || e.keyCode === keycodes.ENTER) {
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
            var filters$ = rxjs.of(Array.prototype.slice.call(fileList));
            if (this.options.filters) {
                this.options.filters.forEach(function (f) {
                    filters$ = filters$.pipe(operators.switchMap(function (list) {
                        var fnRes = f.fn(list);
                        return fnRes instanceof rxjs.Observable ? fnRes : rxjs.of(fnRes);
                    }));
                });
            }
            filters$.subscribe(function (list) {
                list.forEach(function (file) {
                    _this.attachUid(file);
                    _this.upload(file, list);
                });
            }, function (e) {
                core$1.warn("Unhandled upload filter error", e);
            });
        };
        NzUploadBtnComponent.prototype.upload = function (file, fileList) {
            var _this = this;
            if (!this.options.beforeUpload) {
                return this.post(file);
            }
            var before = this.options.beforeUpload(file, fileList);
            if (before instanceof rxjs.Observable) {
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
                    core$1.warn("Unhandled upload beforeUpload error", e);
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
            if (!(req$ instanceof rxjs.Subscription)) {
                core$1.warn("Must return Subscription type in '[nzCustomRequest]' property");
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
            var req = new http.HttpRequest('POST', args.action, formData, {
                reportProgress: true,
                withCredentials: args.withCredentials,
                headers: new http.HttpHeaders(args.headers)
            });
            return this.http.request(req).subscribe(
            // tslint:disable-next-line no-any
            function (event) {
                if (event.type === http.HttpEventType.UploadProgress) {
                    if (event.total > 0) {
                        // tslint:disable-next-line:no-any
                        event.percent = (event.loaded / event.total) * 100;
                    }
                    args.onProgress(event, args.file);
                }
                else if (event instanceof http.HttpResponse) {
                    args.onSuccess(event.body, args.file, event);
                }
            }, function (err) {
                _this.abort(args.file);
                args.onError(err, args.file);
            });
        };
        NzUploadBtnComponent.prototype.clean = function (uid) {
            var req$ = this.reqs[uid];
            if (req$ instanceof rxjs.Subscription) {
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
        /** @nocollapse */ NzUploadBtnComponent.ɵfac = function NzUploadBtnComponent_Factory(t) { return new (t || NzUploadBtnComponent)(core.ɵɵdirectiveInject(http.HttpClient, 8), core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(core$1.NzUpdateHostClassService)); };
        /** @nocollapse */ NzUploadBtnComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzUploadBtnComponent, selectors: [["", "nz-upload-btn", ""]], viewQuery: function NzUploadBtnComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵviewQuery(_c0, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.file = _t.first);
            } }, hostBindings: function NzUploadBtnComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
                core.ɵɵallocHostVars(2);
                core.ɵɵlistener("click", function NzUploadBtnComponent_click_HostBindingHandler($event) { return ctx.onClick(); })("keydown", function NzUploadBtnComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); })("drop", function NzUploadBtnComponent_drop_HostBindingHandler($event) { return ctx.onFileDrop($event); })("dragover", function NzUploadBtnComponent_dragover_HostBindingHandler($event) { return ctx.onFileDrop($event); });
            } if (rf & 2) {
                core.ɵɵattribute("tabindex", "0")("role", "button");
            } }, inputs: { classes: "classes", options: "options" }, exportAs: ["nzUploadBtn"], features: [core.ɵɵProvidersFeature([core$1.NzUpdateHostClassService]), core.ɵɵNgOnChangesFeature()], attrs: _c1, ngContentSelectors: _c2, decls: 3, vars: 4, consts: [["type", "file", 2, "display", "none", 3, "multiple", "change"], ["file", ""]], template: function NzUploadBtnComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵelementStart(0, "input", 0, 1);
                core.ɵɵlistener("change", function NzUploadBtnComponent_Template_input_change_0_listener($event) { return ctx.onChange($event); });
                core.ɵɵelementEnd();
                core.ɵɵprojection(2);
            } if (rf & 2) {
                core.ɵɵproperty("multiple", ctx.options.multiple);
                core.ɵɵattribute("accept", ctx.options.accept)("directory", ctx.options.directory ? "directory" : null)("webkitdirectory", ctx.options.directory ? "webkitdirectory" : null);
            } }, encapsulation: 2 });
        return NzUploadBtnComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzUploadBtnComponent, [{
            type: core.Component,
            args: [{
                    selector: '[nz-upload-btn]',
                    exportAs: 'nzUploadBtn',
                    templateUrl: './nz-upload-btn.component.html',
                    host: {
                        '[attr.tabindex]': '"0"',
                        '[attr.role]': '"button"'
                    },
                    providers: [core$1.NzUpdateHostClassService],
                    preserveWhitespaces: false,
                    encapsulation: core.ViewEncapsulation.None
                }]
        }], function () { return [{ type: http.HttpClient, decorators: [{
                    type: core.Optional
                }] }, { type: core.ElementRef }, { type: core$1.NzUpdateHostClassService }]; }, { file: [{
                type: core.ViewChild,
                args: ['file', { static: false }]
            }], classes: [{
                type: core.Input
            }], options: [{
                type: core.Input
            }], onClick: [{
                type: core.HostListener,
                args: ['click']
            }], onKeyDown: [{
                type: core.HostListener,
                args: ['keydown', ['$event']]
            }], onFileDrop: [{
                type: core.HostListener,
                args: ['drop', ['$event']]
            }, {
                type: core.HostListener,
                args: ['dragover', ['$event']]
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    function NzUploadListComponent_div_0_ng_template_1_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 14);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1885 = core.ɵɵnextContext(4);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", ctx_r1885.locale.uploading, " ");
    } }
    function NzUploadListComponent_div_0_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, NzUploadListComponent_div_0_ng_template_1_ng_container_0_div_1_Template, 2, 1, "div", 13);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        core.ɵɵnextContext();
        var _r1877 = core.ɵɵreference(2);
        var file_r1865 = core.ɵɵnextContext().$implicit;
        var ctx_r1876 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r1876.listType === "picture-card" && file_r1865.status === "uploading")("ngIfElse", _r1877);
    } }
    function NzUploadListComponent_div_0_ng_template_1_ng_template_1_i_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "i", 16);
    } }
    function NzUploadListComponent_div_0_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtemplate(0, NzUploadListComponent_div_0_ng_template_1_ng_template_1_i_0_Template, 1, 0, "i", 15);
    } if (rf & 2) {
        core.ɵɵnextContext();
        var _r1879 = core.ɵɵreference(4);
        var file_r1865 = core.ɵɵnextContext().$implicit;
        core.ɵɵproperty("ngIf", !file_r1865.thumbUrl && !file_r1865.url)("ngIfElse", _r1879);
    } }
    function NzUploadListComponent_div_0_ng_template_1_ng_template_3_img_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "img", 19);
    } if (rf & 2) {
        var file_r1865 = core.ɵɵnextContext(3).$implicit;
        core.ɵɵproperty("src", file_r1865.thumbUrl || file_r1865.url, core.ɵɵsanitizeUrl);
        core.ɵɵattribute("alt", file_r1865.name);
    } }
    function NzUploadListComponent_div_0_ng_template_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
        var _r1893 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "a", 17);
        core.ɵɵlistener("click", function NzUploadListComponent_div_0_ng_template_1_ng_template_3_Template_a_click_0_listener($event) { core.ɵɵrestoreView(_r1893); var file_r1865 = core.ɵɵnextContext(2).$implicit; var ctx_r1891 = core.ɵɵnextContext(); return ctx_r1891.handlePreview(file_r1865, $event); });
        core.ɵɵtemplate(1, NzUploadListComponent_div_0_ng_template_1_ng_template_3_img_1_Template, 1, 2, "img", 18);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        core.ɵɵnextContext();
        var _r1881 = core.ɵɵreference(6);
        var file_r1865 = core.ɵɵnextContext().$implicit;
        var ctx_r1880 = core.ɵɵnextContext();
        core.ɵɵproperty("href", file_r1865.thumbUrl || file_r1865.url, core.ɵɵsanitizeUrl);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r1880.isImageUrl(file_r1865))("ngIfElse", _r1881);
    } }
    function NzUploadListComponent_div_0_ng_template_1_ng_template_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "i", 20);
    } }
    function NzUploadListComponent_div_0_ng_template_1_ng_template_7_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "i", 21);
    } if (rf & 2) {
        var file_r1865 = core.ɵɵnextContext(2).$implicit;
        core.ɵɵproperty("nzType", file_r1865.status === "uploading" ? "loading" : "paper-clip");
    } }
    function NzUploadListComponent_div_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtemplate(0, NzUploadListComponent_div_0_ng_template_1_ng_container_0_Template, 2, 2, "ng-container", 6);
        core.ɵɵtemplate(1, NzUploadListComponent_div_0_ng_template_1_ng_template_1_Template, 1, 2, "ng-template", null, 9, core.ɵɵtemplateRefExtractor);
        core.ɵɵtemplate(3, NzUploadListComponent_div_0_ng_template_1_ng_template_3_Template, 2, 3, "ng-template", null, 10, core.ɵɵtemplateRefExtractor);
        core.ɵɵtemplate(5, NzUploadListComponent_div_0_ng_template_1_ng_template_5_Template, 1, 0, "ng-template", null, 11, core.ɵɵtemplateRefExtractor);
        core.ɵɵtemplate(7, NzUploadListComponent_div_0_ng_template_1_ng_template_7_Template, 1, 1, "ng-template", null, 12, core.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        var _r1883 = core.ɵɵreference(8);
        var ctx_r1867 = core.ɵɵnextContext(2);
        core.ɵɵproperty("ngIf", ctx_r1867.showPic)("ngIfElse", _r1883);
    } }
    function NzUploadListComponent_div_0_ng_template_3_ng_container_0_Template(rf, ctx) { if (rf & 1) {
        var _r1901 = core.ɵɵgetCurrentView();
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "a", 23);
        core.ɵɵlistener("click", function NzUploadListComponent_div_0_ng_template_3_ng_container_0_Template_a_click_1_listener($event) { core.ɵɵrestoreView(_r1901); var file_r1865 = core.ɵɵnextContext(2).$implicit; var ctx_r1899 = core.ɵɵnextContext(); return ctx_r1899.handlePreview(file_r1865, $event); });
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var file_r1865 = core.ɵɵnextContext(2).$implicit;
        core.ɵɵadvance(1);
        core.ɵɵpropertyInterpolate("title", file_r1865.name);
        core.ɵɵproperty("href", file_r1865.thumbUrl || file_r1865.url, core.ɵɵsanitizeUrl);
        core.ɵɵattribute("download", file_r1865.linkProps && file_r1865.linkProps.download);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(file_r1865.name);
    } }
    function NzUploadListComponent_div_0_ng_template_3_ng_template_1_Template(rf, ctx) { if (rf & 1) {
        var _r1905 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "span", 24);
        core.ɵɵlistener("click", function NzUploadListComponent_div_0_ng_template_3_ng_template_1_Template_span_click_0_listener($event) { core.ɵɵrestoreView(_r1905); var file_r1865 = core.ɵɵnextContext(2).$implicit; var ctx_r1903 = core.ɵɵnextContext(); return ctx_r1903.handlePreview(file_r1865, $event); });
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var file_r1865 = core.ɵɵnextContext(2).$implicit;
        core.ɵɵpropertyInterpolate("title", file_r1865.name);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(file_r1865.name);
    } }
    function NzUploadListComponent_div_0_ng_template_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtemplate(0, NzUploadListComponent_div_0_ng_template_3_ng_container_0_Template, 3, 4, "ng-container", 6);
        core.ɵɵtemplate(1, NzUploadListComponent_div_0_ng_template_3_ng_template_1_Template, 2, 2, "ng-template", null, 22, core.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        var _r1897 = core.ɵɵreference(2);
        var file_r1865 = core.ɵɵnextContext().$implicit;
        core.ɵɵproperty("ngIf", file_r1865.url)("ngIfElse", _r1897);
    } }
    function NzUploadListComponent_div_0_span_6_ng_template_1_Template(rf, ctx) { }
    function NzUploadListComponent_div_0_span_6_ng_template_2_Template(rf, ctx) { }
    function NzUploadListComponent_div_0_span_6_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span", 25);
        core.ɵɵtemplate(1, NzUploadListComponent_div_0_span_6_ng_template_1_Template, 0, 0, "ng-template", 26);
        core.ɵɵtemplate(2, NzUploadListComponent_div_0_span_6_ng_template_2_Template, 0, 0, "ng-template", 26);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var file_r1865 = core.ɵɵnextContext().$implicit;
        var _r1866 = core.ɵɵreference(2);
        var _r1868 = core.ɵɵreference(4);
        core.ɵɵproperty("nzTitle", file_r1865.message);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", _r1866);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", _r1868);
    } }
    function NzUploadListComponent_div_0_span_7_ng_template_1_Template(rf, ctx) { }
    function NzUploadListComponent_div_0_span_7_ng_template_2_Template(rf, ctx) { }
    function NzUploadListComponent_div_0_span_7_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span");
        core.ɵɵtemplate(1, NzUploadListComponent_div_0_span_7_ng_template_1_Template, 0, 0, "ng-template", 26);
        core.ɵɵtemplate(2, NzUploadListComponent_div_0_span_7_ng_template_2_Template, 0, 0, "ng-template", 26);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        core.ɵɵnextContext();
        var _r1866 = core.ɵɵreference(2);
        var _r1868 = core.ɵɵreference(4);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", _r1866);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", _r1868);
    } }
    var _c0$1 = function () { return { opacity: 0.5, "pointer-events": "none" }; };
    function NzUploadListComponent_div_0_ng_container_8_a_2_Template(rf, ctx) { if (rf & 1) {
        var _r1917 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "a", 30);
        core.ɵɵlistener("click", function NzUploadListComponent_div_0_ng_container_8_a_2_Template_a_click_0_listener($event) { core.ɵɵrestoreView(_r1917); var file_r1865 = core.ɵɵnextContext(2).$implicit; var ctx_r1915 = core.ɵɵnextContext(); return ctx_r1915.handlePreview(file_r1865, $event); });
        core.ɵɵelement(1, "i", 31);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var file_r1865 = core.ɵɵnextContext(2).$implicit;
        var ctx_r1913 = core.ɵɵnextContext();
        core.ɵɵpropertyInterpolate("title", ctx_r1913.locale.previewFile);
        core.ɵɵproperty("href", file_r1865.thumbUrl || file_r1865.url, core.ɵɵsanitizeUrl)("ngStyle", !(file_r1865.url || file_r1865.thumbUrl) && core.ɵɵpureFunction0(3, _c0$1));
    } }
    function NzUploadListComponent_div_0_ng_container_8_i_3_Template(rf, ctx) { if (rf & 1) {
        var _r1921 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "i", 32);
        core.ɵɵlistener("click", function NzUploadListComponent_div_0_ng_container_8_i_3_Template_i_click_0_listener($event) { core.ɵɵrestoreView(_r1921); var file_r1865 = core.ɵɵnextContext(2).$implicit; var ctx_r1919 = core.ɵɵnextContext(); return ctx_r1919.handleRemove(file_r1865, $event); });
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1914 = core.ɵɵnextContext(3);
        core.ɵɵpropertyInterpolate("title", ctx_r1914.locale.removeFile);
    } }
    function NzUploadListComponent_div_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "span", 27);
        core.ɵɵtemplate(2, NzUploadListComponent_div_0_ng_container_8_a_2_Template, 2, 4, "a", 28);
        core.ɵɵtemplate(3, NzUploadListComponent_div_0_ng_container_8_i_3_Template, 1, 1, "i", 29);
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var file_r1865 = core.ɵɵnextContext().$implicit;
        var ctx_r1872 = core.ɵɵnextContext();
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", ctx_r1872.showPreview(file_r1865));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r1872.icons.showRemoveIcon);
    } }
    function NzUploadListComponent_div_0_ng_template_9_i_0_Template(rf, ctx) { if (rf & 1) {
        var _r1926 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "i", 34);
        core.ɵɵlistener("click", function NzUploadListComponent_div_0_ng_template_9_i_0_Template_i_click_0_listener($event) { core.ɵɵrestoreView(_r1926); var file_r1865 = core.ɵɵnextContext(2).$implicit; var ctx_r1924 = core.ɵɵnextContext(); return ctx_r1924.handleRemove(file_r1865, $event); });
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1923 = core.ɵɵnextContext(3);
        core.ɵɵpropertyInterpolate("title", ctx_r1923.locale.removeFile);
    } }
    function NzUploadListComponent_div_0_ng_template_9_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtemplate(0, NzUploadListComponent_div_0_ng_template_9_i_0_Template, 1, 1, "i", 33);
    } if (rf & 2) {
        var ctx_r1874 = core.ɵɵnextContext(2);
        core.ɵɵproperty("ngIf", ctx_r1874.icons.showRemoveIcon);
    } }
    function NzUploadListComponent_div_0_div_11_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 35);
        core.ɵɵelement(1, "nz-progress", 36);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var file_r1865 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(1);
        core.ɵɵproperty("nzPercent", file_r1865.percent)("nzShowInfo", false)("nzStrokeWidth", 2);
    } }
    function NzUploadListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div");
        core.ɵɵtemplate(1, NzUploadListComponent_div_0_ng_template_1_Template, 9, 2, "ng-template", null, 1, core.ɵɵtemplateRefExtractor);
        core.ɵɵtemplate(3, NzUploadListComponent_div_0_ng_template_3_Template, 3, 2, "ng-template", null, 2, core.ɵɵtemplateRefExtractor);
        core.ɵɵelementStart(5, "div", 3);
        core.ɵɵtemplate(6, NzUploadListComponent_div_0_span_6_Template, 3, 3, "span", 4);
        core.ɵɵtemplate(7, NzUploadListComponent_div_0_span_7_Template, 3, 2, "span", 5);
        core.ɵɵelementEnd();
        core.ɵɵtemplate(8, NzUploadListComponent_div_0_ng_container_8_Template, 4, 2, "ng-container", 6);
        core.ɵɵtemplate(9, NzUploadListComponent_div_0_ng_template_9_Template, 1, 1, "ng-template", null, 7, core.ɵɵtemplateRefExtractor);
        core.ɵɵtemplate(11, NzUploadListComponent_div_0_div_11_Template, 2, 3, "div", 8);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var file_r1865 = ctx.$implicit;
        var _r1873 = core.ɵɵreference(10);
        var ctx_r1864 = core.ɵɵnextContext();
        core.ɵɵclassMapInterpolate1("ant-upload-list-item ant-upload-list-item-", file_r1865.status, "");
        core.ɵɵproperty("@itemState", undefined);
        core.ɵɵadvance(6);
        core.ɵɵproperty("ngIf", file_r1865.status === "error");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", file_r1865.status !== "error");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r1864.listType === "picture-card" && file_r1865.status !== "uploading")("ngIfElse", _r1873);
        core.ɵɵadvance(3);
        core.ɵɵproperty("ngIf", file_r1865.status === "uploading");
    } }
    var NzUploadListComponent = /** @class */ (function () {
        // #endregion
        function NzUploadListComponent(el, cdr, updateHostClassService, platform) {
            this.el = el;
            this.cdr = cdr;
            this.updateHostClassService = updateHostClassService;
            this.platform = platform;
            this.imageTypes = ['image', 'webp', 'png', 'svg', 'gif', 'jpg', 'jpeg', 'bmp'];
            // #region fields
            // tslint:disable-next-line:no-any
            this.locale = {};
            // #endregion
            // #region styles
            this.prefixCls = 'ant-upload-list';
        }
        Object.defineProperty(NzUploadListComponent.prototype, "showPic", {
            get: function () {
                return this.listType === 'picture' || this.listType === 'picture-card';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzUploadListComponent.prototype, "items", {
            get: function () {
                return this._items;
            },
            set: function (list) {
                list.forEach(function (file) {
                    file.linkProps = typeof file.linkProps === 'string' ? JSON.parse(file.linkProps) : file.linkProps;
                });
                this._items = list;
            },
            enumerable: true,
            configurable: true
        });
        NzUploadListComponent.prototype.setClassMap = function () {
            var _a;
            var classMap = (_a = {},
                _a[this.prefixCls] = true,
                _a[this.prefixCls + "-" + this.listType] = true,
                _a);
            this.updateHostClassService.updateHostClass(this.el.nativeElement, classMap);
        };
        // #endregion
        // #region render
        NzUploadListComponent.prototype.extname = function (url) {
            var temp = url.split('/');
            var filename = temp[temp.length - 1];
            var filenameWithoutSuffix = filename.split(/#|\?/)[0];
            return (/\.[^./\\]*$/.exec(filenameWithoutSuffix) || [''])[0];
        };
        NzUploadListComponent.prototype.isImageUrl = function (file) {
            if (~this.imageTypes.indexOf(file.type)) {
                return true;
            }
            var url = (file.thumbUrl || file.url || '');
            if (!url) {
                return false;
            }
            var extension = this.extname(url);
            if (/^data:image\//.test(url) || /(webp|svg|png|gif|jpg|jpeg|bmp)$/i.test(extension)) {
                return true;
            }
            else if (/^data:/.test(url)) {
                // other file types of base64
                return false;
            }
            else if (extension) {
                // other file types which have extension
                return false;
            }
            return true;
        };
        NzUploadListComponent.prototype.previewFile = function (file, callback) {
            if (file.type && this.imageTypes.indexOf(file.type) === -1) {
                callback('');
            }
            var reader = new FileReader();
            // https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
            reader.onloadend = function () { return callback(reader.result); };
            reader.readAsDataURL(file);
        };
        NzUploadListComponent.prototype.genThumb = function () {
            var _this = this;
            if (!this.platform.isBrowser) {
                return;
            }
            // tslint:disable-next-line:no-any
            var win = window;
            if (!this.showPic || typeof document === 'undefined' || typeof win === 'undefined' || !win.FileReader || !win.File) {
                return;
            }
            this.items
                .filter(function (file) { return file.originFileObj instanceof File && file.thumbUrl === undefined; })
                .forEach(function (file) {
                file.thumbUrl = '';
                _this.previewFile(file.originFileObj, function (previewDataUrl) {
                    file.thumbUrl = previewDataUrl;
                    _this.detectChanges();
                });
            });
        };
        NzUploadListComponent.prototype.showPreview = function (file) {
            var _a = this.icons, showPreviewIcon = _a.showPreviewIcon, hidePreviewIconInNonImage = _a.hidePreviewIconInNonImage;
            if (!showPreviewIcon) {
                return false;
            }
            return this.isImageUrl(file) ? true : !hidePreviewIconInNonImage;
        };
        NzUploadListComponent.prototype.handlePreview = function (file, e) {
            if (!this.onPreview) {
                return;
            }
            e.preventDefault();
            return this.onPreview(file);
        };
        NzUploadListComponent.prototype.handleRemove = function (file, e) {
            e.preventDefault();
            if (this.onRemove) {
                this.onRemove(file);
            }
            return;
        };
        NzUploadListComponent.prototype.detectChanges = function () {
            this.cdr.detectChanges();
        };
        NzUploadListComponent.prototype.ngOnChanges = function () {
            this.setClassMap();
            this.genThumb();
        };
        /** @nocollapse */ NzUploadListComponent.ɵfac = function NzUploadListComponent_Factory(t) { return new (t || NzUploadListComponent)(core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(core.ChangeDetectorRef), core.ɵɵdirectiveInject(core$1.NzUpdateHostClassService), core.ɵɵdirectiveInject(platform.Platform)); };
        /** @nocollapse */ NzUploadListComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzUploadListComponent, selectors: [["nz-upload-list"]], inputs: { locale: "locale", listType: "listType", items: "items", icons: "icons", onPreview: "onPreview", onRemove: "onRemove" }, exportAs: ["nzUploadList"], features: [core.ɵɵProvidersFeature([core$1.NzUpdateHostClassService]), core.ɵɵNgOnChangesFeature()], decls: 1, vars: 1, consts: [[3, "class", 4, "ngFor", "ngForOf"], ["icon", ""], ["preview", ""], [1, "ant-upload-list-item-info"], ["nz-tooltip", "", 3, "nzTitle", 4, "ngIf"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], ["close", ""], ["class", "ant-upload-list-item-progress", 4, "ngIf"], ["thumbUrlCheck", ""], ["thumbTpl", ""], ["noThumbTpl", ""], ["noPicTpl", ""], ["class", "ant-upload-list-item-uploading-text", 4, "ngIf", "ngIfElse"], [1, "ant-upload-list-item-uploading-text"], ["class", "ant-upload-list-item-thumbnail", "nz-icon", "", "nzType", "picture", "nzTheme", "twotone", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "picture", "nzTheme", "twotone", 1, "ant-upload-list-item-thumbnail"], ["target", "_blank", "rel", "noopener noreferrer", 1, "ant-upload-list-item-thumbnail", 3, "href", "click"], [3, "src", 4, "ngIf", "ngIfElse"], [3, "src"], ["nz-icon", "", "nzType", "file", "nzTheme", "twotone", 1, "ant-upload-list-item-icon"], ["nz-icon", "", 3, "nzType"], ["prevText", ""], ["target", "_blank", "rel", "noopener noreferrer", 1, "ant-upload-list-item-name", 3, "href", "title", "click"], [1, "ant-upload-list-item-name", 3, "title", "click"], ["nz-tooltip", "", 3, "nzTitle"], [3, "ngTemplateOutlet"], [1, "ant-upload-list-item-actions"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href", "title", "ngStyle", "click", 4, "ngIf"], ["nz-icon", "", "nzType", "delete", 3, "title", "click", 4, "ngIf"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href", "title", "ngStyle", "click"], ["nz-icon", "", "nzType", "eye-o"], ["nz-icon", "", "nzType", "delete", 3, "title", "click"], ["nz-icon", "", "nzType", "close", 3, "title", "click", 4, "ngIf"], ["nz-icon", "", "nzType", "close", 3, "title", "click"], [1, "ant-upload-list-item-progress"], [3, "nzPercent", "nzShowInfo", "nzStrokeWidth"]], template: function NzUploadListComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵtemplate(0, NzUploadListComponent_div_0_Template, 12, 9, "div", 0);
            } if (rf & 2) {
                core.ɵɵproperty("ngForOf", ctx.items);
            } }, directives: [common.NgForOf, common.NgIf, icon.NzIconDirective, tooltip.NzTooltipDirective, common.NgTemplateOutlet, common.NgStyle, progress.NzProgressComponent], encapsulation: 2, data: { animation: [
                    animations.trigger('itemState', [
                        animations.transition(':enter', [animations.style({ height: '0', width: '0', opacity: 0 }), animations.animate(150, animations.style({ height: '*', width: '*', opacity: 1 }))]),
                        animations.transition(':leave', [animations.animate(150, animations.style({ height: '0', width: '0', opacity: 0 }))])
                    ])
                ] }, changeDetection: 0 });
        return NzUploadListComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzUploadListComponent, [{
            type: core.Component,
            args: [{
                    selector: 'nz-upload-list',
                    exportAs: 'nzUploadList',
                    templateUrl: './nz-upload-list.component.html',
                    providers: [core$1.NzUpdateHostClassService],
                    animations: [
                        animations.trigger('itemState', [
                            animations.transition(':enter', [animations.style({ height: '0', width: '0', opacity: 0 }), animations.animate(150, animations.style({ height: '*', width: '*', opacity: 1 }))]),
                            animations.transition(':leave', [animations.animate(150, animations.style({ height: '0', width: '0', opacity: 0 }))])
                        ])
                    ],
                    preserveWhitespaces: false,
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                }]
        }], function () { return [{ type: core.ElementRef }, { type: core.ChangeDetectorRef }, { type: core$1.NzUpdateHostClassService }, { type: platform.Platform }]; }, { locale: [{
                type: core.Input
            }], listType: [{
                type: core.Input
            }], items: [{
                type: core.Input
            }], icons: [{
                type: core.Input
            }], onPreview: [{
                type: core.Input
            }], onRemove: [{
                type: core.Input
            }] }); })();

    var _c0$2 = ["uploadComp"];
    var _c1$1 = ["listComp"];
    var _c2$1 = function () { return []; };
    function NzUploadComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "nz-upload-list", 6, 7);
    } if (rf & 2) {
        var ctx_r1929 = core.ɵɵnextContext();
        core.ɵɵstyleProp("display", ctx_r1929.nzShowUploadList ? "" : "none");
        core.ɵɵproperty("locale", ctx_r1929.locale)("listType", ctx_r1929.nzListType)("items", ctx_r1929.nzFileList || core.ɵɵpureFunction0(7, _c2$1))("icons", ctx_r1929.nzShowUploadList)("onPreview", ctx_r1929.nzPreview)("onRemove", ctx_r1929.onRemove);
    } }
    function NzUploadComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵprojection(0);
    } }
    function NzUploadComponent_ng_template_4_ng_template_3_Template(rf, ctx) { }
    function NzUploadComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 8);
        core.ɵɵelementStart(1, "div", 9, 10);
        core.ɵɵtemplate(3, NzUploadComponent_ng_template_4_ng_template_3_Template, 0, 0, "ng-template", 11);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1933 = core.ɵɵnextContext();
        var _r1930 = core.ɵɵreference(3);
        core.ɵɵstyleProp("display", ctx_r1933.nzShowButton ? "" : "none");
        core.ɵɵproperty("ngClass", ctx_r1933.classList);
        core.ɵɵadvance(1);
        core.ɵɵproperty("options", ctx_r1933._btnOptions);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngTemplateOutlet", _r1930);
    } }
    function NzUploadComponent_ng_container_6_ng_template_5_Template(rf, ctx) { }
    function NzUploadComponent_ng_container_6_ng_template_6_Template(rf, ctx) { }
    var _c3 = function () { return { "ant-upload-btn": true }; };
    function NzUploadComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
        var _r1946 = core.ɵɵgetCurrentView();
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "div", 12);
        core.ɵɵlistener("drop", function NzUploadComponent_ng_container_6_Template_div_drop_1_listener($event) { core.ɵɵrestoreView(_r1946); var ctx_r1945 = core.ɵɵnextContext(); return ctx_r1945.fileDrop($event); })("dragover", function NzUploadComponent_ng_container_6_Template_div_dragover_1_listener($event) { core.ɵɵrestoreView(_r1946); var ctx_r1947 = core.ɵɵnextContext(); return ctx_r1947.fileDrop($event); })("dragleave", function NzUploadComponent_ng_container_6_Template_div_dragleave_1_listener($event) { core.ɵɵrestoreView(_r1946); var ctx_r1948 = core.ɵɵnextContext(); return ctx_r1948.fileDrop($event); });
        core.ɵɵelementStart(2, "div", 13, 10);
        core.ɵɵelementStart(4, "div", 14);
        core.ɵɵtemplate(5, NzUploadComponent_ng_container_6_ng_template_5_Template, 0, 0, "ng-template", 11);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵtemplate(6, NzUploadComponent_ng_container_6_ng_template_6_Template, 0, 0, "ng-template", 11);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r1934 = core.ɵɵnextContext();
        var _r1930 = core.ɵɵreference(3);
        var _r1928 = core.ɵɵreference(1);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngClass", ctx_r1934.classList);
        core.ɵɵadvance(1);
        core.ɵɵproperty("options", ctx_r1934._btnOptions)("classes", core.ɵɵpureFunction0(5, _c3));
        core.ɵɵadvance(3);
        core.ɵɵproperty("ngTemplateOutlet", _r1930);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", _r1928);
    } }
    function NzUploadComponent_ng_template_7_ng_container_0_ng_template_1_Template(rf, ctx) { }
    function NzUploadComponent_ng_template_7_ng_container_0_ng_template_2_Template(rf, ctx) { }
    function NzUploadComponent_ng_template_7_ng_container_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, NzUploadComponent_ng_template_7_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 11);
        core.ɵɵtemplate(2, NzUploadComponent_ng_template_7_ng_container_0_ng_template_2_Template, 0, 0, "ng-template", 11);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        core.ɵɵnextContext(2);
        var _r1928 = core.ɵɵreference(1);
        var _r1932 = core.ɵɵreference(5);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", _r1928);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", _r1932);
    } }
    function NzUploadComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtemplate(0, NzUploadComponent_ng_template_7_ng_container_0_Template, 3, 2, "ng-container", 3);
    } if (rf & 2) {
        var ctx_r1936 = core.ɵɵnextContext();
        var _r1937 = core.ɵɵreference(10);
        core.ɵɵproperty("ngIf", ctx_r1936.nzListType === "picture-card")("ngIfElse", _r1937);
    } }
    function NzUploadComponent_ng_template_9_ng_template_0_Template(rf, ctx) { }
    function NzUploadComponent_ng_template_9_ng_template_1_Template(rf, ctx) { }
    function NzUploadComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtemplate(0, NzUploadComponent_ng_template_9_ng_template_0_Template, 0, 0, "ng-template", 11);
        core.ɵɵtemplate(1, NzUploadComponent_ng_template_9_ng_template_1_Template, 0, 0, "ng-template", 11);
    } if (rf & 2) {
        core.ɵɵnextContext();
        var _r1932 = core.ɵɵreference(5);
        var _r1928 = core.ɵɵreference(1);
        core.ɵɵproperty("ngTemplateOutlet", _r1932);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", _r1928);
    } }
    var _c4 = ["*"];
    var NzUploadComponent = /** @class */ (function () {
        // #endregion
        function NzUploadComponent(cdr, i18n) {
            var _this = this;
            this.cdr = cdr;
            this.i18n = i18n;
            // tslint:disable-next-line:no-any
            this.locale = {};
            // #region fields
            this.nzType = 'select';
            this.nzLimit = 0;
            this.nzSize = 0;
            this.nzDirectory = false;
            this.nzOpenFileDialogOnClick = true;
            this.nzFilter = [];
            this.nzFileList = [];
            this.nzDisabled = false;
            this.nzListType = 'text';
            this.nzMultiple = false;
            this.nzName = 'file';
            this._showUploadList = true;
            this.nzShowButton = true;
            this.nzWithCredentials = false;
            this.nzChange = new core.EventEmitter();
            this.nzFileListChange = new core.EventEmitter();
            this.onStart = function (file) {
                if (!_this.nzFileList) {
                    _this.nzFileList = [];
                }
                var targetItem = _this.fileToObject(file);
                targetItem.status = 'uploading';
                _this.nzFileList = _this.nzFileList.concat(targetItem);
                _this.nzFileListChange.emit(_this.nzFileList);
                _this.nzChange.emit({ file: targetItem, fileList: _this.nzFileList, type: 'start' });
                _this.detectChangesList();
            };
            this.onProgress = function (e, file) {
                var fileList = _this.nzFileList;
                var targetItem = _this.getFileItem(file, fileList);
                targetItem.percent = e.percent;
                _this.nzChange.emit({
                    event: e,
                    file: __assign({}, targetItem),
                    fileList: _this.nzFileList,
                    type: 'progress'
                });
                _this.detectChangesList();
            };
            this.onSuccess = function (res, file) {
                var fileList = _this.nzFileList;
                var targetItem = _this.getFileItem(file, fileList);
                targetItem.status = 'done';
                targetItem.response = res;
                _this.nzChange.emit({
                    file: __assign({}, targetItem),
                    fileList: fileList,
                    type: 'success'
                });
                _this.detectChangesList();
            };
            this.onError = function (err, file) {
                var fileList = _this.nzFileList;
                var targetItem = _this.getFileItem(file, fileList);
                targetItem.error = err;
                targetItem.status = 'error';
                targetItem.message = _this.genErr(targetItem);
                _this.nzChange.emit({
                    file: __assign({}, targetItem),
                    fileList: fileList,
                    type: 'error'
                });
                _this.detectChangesList();
            };
            this.onRemove = function (file) {
                _this.uploadComp.abort(file);
                file.status = 'removed';
                var fnRes = typeof _this.nzRemove === 'function' ? _this.nzRemove(file) : _this.nzRemove == null ? true : _this.nzRemove;
                (fnRes instanceof rxjs.Observable ? fnRes : rxjs.of(fnRes)).pipe(operators.filter(function (res) { return res; })).subscribe(function () {
                    _this.nzFileList = _this.removeFileItem(file, _this.nzFileList);
                    _this.nzChange.emit({
                        file: file,
                        fileList: _this.nzFileList,
                        type: 'removed'
                    });
                    _this.nzFileListChange.emit(_this.nzFileList);
                    _this.cdr.detectChanges();
                });
            };
            // #endregion
            // #region styles
            this.prefixCls = 'ant-upload';
            this.classList = [];
        }
        Object.defineProperty(NzUploadComponent.prototype, "nzShowUploadList", {
            get: function () {
                return this._showUploadList;
            },
            set: function (value) {
                this._showUploadList = typeof value === 'boolean' ? core$1.toBoolean(value) : value;
            },
            enumerable: true,
            configurable: true
        });
        NzUploadComponent.prototype.zipOptions = function () {
            var _this = this;
            if (typeof this.nzShowUploadList === 'boolean' && this.nzShowUploadList) {
                this.nzShowUploadList = {
                    showPreviewIcon: true,
                    showRemoveIcon: true,
                    hidePreviewIconInNonImage: false
                };
            }
            // filters
            var filters = this.nzFilter.slice();
            if (this.nzMultiple && this.nzLimit > 0 && filters.findIndex(function (w) { return w.name === 'limit'; }) === -1) {
                filters.push({
                    name: 'limit',
                    fn: function (fileList) { return fileList.slice(-_this.nzLimit); }
                });
            }
            if (this.nzSize > 0 && filters.findIndex(function (w) { return w.name === 'size'; }) === -1) {
                filters.push({
                    name: 'size',
                    fn: function (fileList) { return fileList.filter(function (w) { return w.size / 1024 <= _this.nzSize; }); }
                });
            }
            if (this.nzFileType && this.nzFileType.length > 0 && filters.findIndex(function (w) { return w.name === 'type'; }) === -1) {
                var types_1 = this.nzFileType.split(',');
                filters.push({
                    name: 'type',
                    fn: function (fileList) { return fileList.filter(function (w) { return ~types_1.indexOf(w.type); }); }
                });
            }
            this._btnOptions = {
                disabled: this.nzDisabled,
                accept: this.nzAccept,
                action: this.nzAction,
                directory: this.nzDirectory,
                openFileDialogOnClick: this.nzOpenFileDialogOnClick,
                beforeUpload: this.nzBeforeUpload,
                customRequest: this.nzCustomRequest,
                data: this.nzData,
                headers: this.nzHeaders,
                name: this.nzName,
                multiple: this.nzMultiple,
                withCredentials: this.nzWithCredentials,
                filters: filters,
                onStart: this.onStart,
                onProgress: this.onProgress,
                onSuccess: this.onSuccess,
                onError: this.onError
            };
            return this;
        };
        // #region upload
        NzUploadComponent.prototype.fileToObject = function (file) {
            return {
                lastModified: file.lastModified,
                lastModifiedDate: file.lastModifiedDate,
                name: file.filename || file.name,
                size: file.size,
                type: file.type,
                uid: file.uid,
                response: file.response,
                error: file.error,
                percent: 0,
                // tslint:disable-next-line:no-any
                originFileObj: file
            };
        };
        NzUploadComponent.prototype.getFileItem = function (file, fileList) {
            return fileList.filter(function (item) { return item.uid === file.uid; })[0];
        };
        NzUploadComponent.prototype.removeFileItem = function (file, fileList) {
            return fileList.filter(function (item) { return item.uid !== file.uid; });
        };
        NzUploadComponent.prototype.genErr = function (file) {
            return file.response && typeof file.response === 'string'
                ? file.response
                : (file.error && file.error.statusText) || this.locale.uploadError;
        };
        // skip safari bug
        // tslint:disable-next-line:no-any
        NzUploadComponent.prototype.fileDrop = function (e) {
            if (e.type === this.dragState) {
                return;
            }
            this.dragState = e.type;
            this.setClassMap();
        };
        // #endregion
        // #region list
        NzUploadComponent.prototype.detectChangesList = function () {
            this.cdr.detectChanges();
            this.listComp.detectChanges();
        };
        NzUploadComponent.prototype.setClassMap = function () {
            var subCls = [];
            if (this.nzType === 'drag') {
                if (this.nzFileList.some(function (file) { return file.status === 'uploading'; })) {
                    subCls.push(this.prefixCls + "-drag-uploading");
                }
                if (this.dragState === 'dragover') {
                    subCls.push(this.prefixCls + "-drag-hover");
                }
            }
            else {
                subCls = [this.prefixCls + "-select-" + this.nzListType];
            }
            this.classList = __spread([
                this.prefixCls,
                this.prefixCls + "-" + this.nzType
            ], subCls, [
                (this.nzDisabled && this.prefixCls + "-disabled") || ''
            ]).filter(function (item) { return !!item; });
            this.cdr.detectChanges();
        };
        // #endregion
        NzUploadComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.i18n$ = this.i18n.localeChange.subscribe(function () {
                _this.locale = _this.i18n.getLocaleData('Upload');
                _this.detectChangesList();
            });
        };
        NzUploadComponent.prototype.ngOnChanges = function (changes) {
            var _this = this;
            if (changes.nzFileList) {
                (this.nzFileList || []).forEach(function (file) { return (file.message = _this.genErr(file)); });
            }
            this.zipOptions().setClassMap();
        };
        NzUploadComponent.prototype.ngOnDestroy = function () {
            this.i18n$.unsubscribe();
        };
        /** @nocollapse */ NzUploadComponent.ɵfac = function NzUploadComponent_Factory(t) { return new (t || NzUploadComponent)(core.ɵɵdirectiveInject(core.ChangeDetectorRef), core.ɵɵdirectiveInject(i18n.NzI18nService)); };
        /** @nocollapse */ NzUploadComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzUploadComponent, selectors: [["nz-upload"]], viewQuery: function NzUploadComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵviewQuery(_c0$2, true);
                core.ɵɵviewQuery(_c1$1, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.uploadComp = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.listComp = _t.first);
            } }, hostBindings: function NzUploadComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
                core.ɵɵallocHostVars(1);
            } if (rf & 2) {
                core.ɵɵclassProp("ant-upload-picture-card-wrapper", ctx.nzListType === "picture-card");
            } }, inputs: { nzType: "nzType", nzLimit: "nzLimit", nzSize: "nzSize", nzFileType: "nzFileType", nzAccept: "nzAccept", nzAction: "nzAction", nzDirectory: "nzDirectory", nzOpenFileDialogOnClick: "nzOpenFileDialogOnClick", nzBeforeUpload: "nzBeforeUpload", nzCustomRequest: "nzCustomRequest", nzData: "nzData", nzFilter: "nzFilter", nzFileList: "nzFileList", nzDisabled: "nzDisabled", nzHeaders: "nzHeaders", nzListType: "nzListType", nzMultiple: "nzMultiple", nzName: "nzName", nzShowUploadList: "nzShowUploadList", nzShowButton: "nzShowButton", nzWithCredentials: "nzWithCredentials", nzRemove: "nzRemove", nzPreview: "nzPreview" }, outputs: { nzChange: "nzChange", nzFileListChange: "nzFileListChange" }, exportAs: ["nzUpload"], features: [core.ɵɵNgOnChangesFeature()], ngContentSelectors: _c4, decls: 11, vars: 2, consts: [["list", ""], ["con", ""], ["btn", ""], [4, "ngIf", "ngIfElse"], ["select", ""], ["pic", ""], [3, "locale", "listType", "items", "icons", "onPreview", "onRemove"], ["listComp", ""], [3, "ngClass"], ["nz-upload-btn", "", 3, "options"], ["uploadComp", ""], [3, "ngTemplateOutlet"], [3, "ngClass", "drop", "dragover", "dragleave"], ["nz-upload-btn", "", 3, "options", "classes"], [1, "ant-upload-drag-container"]], template: function NzUploadComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵtemplate(0, NzUploadComponent_ng_template_0_Template, 2, 8, "ng-template", null, 0, core.ɵɵtemplateRefExtractor);
                core.ɵɵtemplate(2, NzUploadComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, core.ɵɵtemplateRefExtractor);
                core.ɵɵtemplate(4, NzUploadComponent_ng_template_4_Template, 4, 4, "ng-template", null, 2, core.ɵɵtemplateRefExtractor);
                core.ɵɵtemplate(6, NzUploadComponent_ng_container_6_Template, 7, 6, "ng-container", 3);
                core.ɵɵtemplate(7, NzUploadComponent_ng_template_7_Template, 1, 2, "ng-template", null, 4, core.ɵɵtemplateRefExtractor);
                core.ɵɵtemplate(9, NzUploadComponent_ng_template_9_Template, 2, 2, "ng-template", null, 5, core.ɵɵtemplateRefExtractor);
            } if (rf & 2) {
                var _r1935 = core.ɵɵreference(8);
                core.ɵɵadvance(6);
                core.ɵɵproperty("ngIf", ctx.nzType === "drag")("ngIfElse", _r1935);
            } }, directives: [common.NgIf, NzUploadListComponent, common.NgClass, NzUploadBtnComponent, common.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
        __decorate([
            core$1.InputNumber(),
            __metadata("design:type", Object)
        ], NzUploadComponent.prototype, "nzLimit", void 0);
        __decorate([
            core$1.InputNumber(),
            __metadata("design:type", Object)
        ], NzUploadComponent.prototype, "nzSize", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzUploadComponent.prototype, "nzDirectory", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzUploadComponent.prototype, "nzOpenFileDialogOnClick", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzUploadComponent.prototype, "nzDisabled", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzUploadComponent.prototype, "nzMultiple", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzUploadComponent.prototype, "nzShowButton", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzUploadComponent.prototype, "nzWithCredentials", void 0);
        return NzUploadComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzUploadComponent, [{
            type: core.Component,
            args: [{
                    selector: 'nz-upload',
                    exportAs: 'nzUpload',
                    templateUrl: './nz-upload.component.html',
                    preserveWhitespaces: false,
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    host: {
                        '[class.ant-upload-picture-card-wrapper]': 'nzListType === "picture-card"'
                    }
                }]
        }], function () { return [{ type: core.ChangeDetectorRef }, { type: i18n.NzI18nService }]; }, { uploadComp: [{
                type: core.ViewChild,
                args: ['uploadComp', { static: false }]
            }], listComp: [{
                type: core.ViewChild,
                args: ['listComp', { static: false }]
            }], nzType: [{
                type: core.Input
            }], nzLimit: [{
                type: core.Input
            }], nzSize: [{
                type: core.Input
            }], nzFileType: [{
                type: core.Input
            }], nzAccept: [{
                type: core.Input
            }], nzAction: [{
                type: core.Input
            }], nzDirectory: [{
                type: core.Input
            }], nzOpenFileDialogOnClick: [{
                type: core.Input
            }], nzBeforeUpload: [{
                type: core.Input
            }], nzCustomRequest: [{
                type: core.Input
            }], nzData: [{
                type: core.Input
            }], nzFilter: [{
                type: core.Input
            }], nzFileList: [{
                type: core.Input
            }], nzDisabled: [{
                type: core.Input
            }], nzHeaders: [{
                type: core.Input
            }], nzListType: [{
                type: core.Input
            }], nzMultiple: [{
                type: core.Input
            }], nzName: [{
                type: core.Input
            }], nzShowUploadList: [{
                type: core.Input
            }], nzShowButton: [{
                type: core.Input
            }], nzWithCredentials: [{
                type: core.Input
            }], nzRemove: [{
                type: core.Input
            }], nzPreview: [{
                type: core.Input
            }], nzChange: [{
                type: core.Output
            }], nzFileListChange: [{
                type: core.Output
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzUploadModule = /** @class */ (function () {
        function NzUploadModule() {
        }
        /** @nocollapse */ NzUploadModule.ɵmod = core.ɵɵdefineNgModule({ type: NzUploadModule });
        /** @nocollapse */ NzUploadModule.ɵinj = core.ɵɵdefineInjector({ factory: function NzUploadModule_Factory(t) { return new (t || NzUploadModule)(); }, imports: [[common.CommonModule, forms.FormsModule, platform.PlatformModule, tooltip.NzToolTipModule, progress.NzProgressModule, i18n.NzI18nModule, icon.NzIconModule]] });
        return NzUploadModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(NzUploadModule, { declarations: [NzUploadComponent, NzUploadBtnComponent, NzUploadListComponent], imports: [common.CommonModule, forms.FormsModule, platform.PlatformModule, tooltip.NzToolTipModule, progress.NzProgressModule, i18n.NzI18nModule, icon.NzIconModule], exports: [NzUploadComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzUploadModule, [{
            type: core.NgModule,
            args: [{
                    imports: [common.CommonModule, forms.FormsModule, platform.PlatformModule, tooltip.NzToolTipModule, progress.NzProgressModule, i18n.NzI18nModule, icon.NzIconModule],
                    declarations: [NzUploadComponent, NzUploadBtnComponent, NzUploadListComponent],
                    exports: [NzUploadComponent]
                }]
        }], null, null); })();

    exports.NzUploadBtnComponent = NzUploadBtnComponent;
    exports.NzUploadComponent = NzUploadComponent;
    exports.NzUploadListComponent = NzUploadListComponent;
    exports.NzUploadModule = NzUploadModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-upload.umd.js.map

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/core'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/progress', ['exports', '@angular/common', '@angular/core', 'ng-zorro-antd/icon', 'ng-zorro-antd/core', 'rxjs', 'rxjs/operators'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].progress = {}), global.ng.common, global.ng.core, global['ng-zorro-antd'].icon, global['ng-zorro-antd'].core, global.rxjs, global.rxjs.operators));
}(this, (function (exports, common, core, icon, core$1, rxjs, operators) { 'use strict';

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

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    function stripPercentToNumber(percent) {
        return +percent.replace('%', '');
    }
    var sortGradient = function (gradients) {
        var tempArr = [];
        Object.keys(gradients).forEach(function (key) {
            var value = gradients[key];
            var formatKey = stripPercentToNumber(key);
            if (!isNaN(formatKey)) {
                tempArr.push({
                    key: formatKey,
                    value: value
                });
            }
        });
        tempArr = tempArr.sort(function (a, b) { return a.key - b.key; });
        return tempArr;
    };
    var handleCircleGradient = function (strokeColor) {
        return sortGradient(strokeColor).map(function (_a) {
            var key = _a.key, value = _a.value;
            return ({ offset: key + "%", color: value });
        });
    };
    var handleLinearGradient = function (strokeColor) {
        var _a = strokeColor.from, from = _a === void 0 ? '#1890ff' : _a, _b = strokeColor.to, to = _b === void 0 ? '#1890ff' : _b, _c = strokeColor.direction, direction = _c === void 0 ? 'to right' : _c, rest = __rest(strokeColor, ["from", "to", "direction"]);
        if (Object.keys(rest).length !== 0) {
            var sortedGradients = sortGradient(rest)
                .map(function (_a) {
                var key = _a.key, value = _a.value;
                return value + " " + key + "%";
            })
                .join(', ');
            return "linear-gradient(" + direction + ", " + sortedGradients + ")";
        }
        return "linear-gradient(" + direction + ", " + from + ", " + to + ")";
    };

    function NzProgressComponent_ng_template_0_span_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelement(1, "i", 8);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r671 = core.ɵɵnextContext(3);
        core.ɵɵadvance(1);
        core.ɵɵproperty("nzType", ctx_r671.icon);
    } }
    function NzProgressComponent_ng_template_0_span_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtext(0);
    } if (rf & 2) {
        var ctx_r673 = core.ɵɵnextContext(3);
        core.ɵɵtextInterpolate1(" ", ctx_r673.formatter(ctx_r673.nzPercent), " ");
    } }
    function NzProgressComponent_ng_template_0_span_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span", 5);
        core.ɵɵtemplate(1, NzProgressComponent_ng_template_0_span_0_ng_container_1_Template, 2, 1, "ng-container", 6);
        core.ɵɵtemplate(2, NzProgressComponent_ng_template_0_span_0_ng_template_2_Template, 1, 1, "ng-template", null, 7, core.ɵɵtemplateRefExtractor);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var _r672 = core.ɵɵreference(3);
        var ctx_r670 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r670.status === "exception" || ctx_r670.status === "success" && !ctx_r670.nzFormat)("ngIfElse", _r672);
    } }
    function NzProgressComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtemplate(0, NzProgressComponent_ng_template_0_span_0_Template, 4, 2, "span", 4);
    } if (rf & 2) {
        var ctx_r667 = core.ɵɵnextContext();
        core.ɵɵproperty("ngIf", ctx_r667.nzShowInfo);
    } }
    function NzProgressComponent_div_3_div_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "div", 14);
    } if (rf & 2) {
        var ctx_r674 = core.ɵɵnextContext(2);
        core.ɵɵstyleProp("width", ctx_r674.nzSuccessPercent, "%")("border-radius", ctx_r674.nzStrokeLinecap === "round" ? "100px" : "0")("height", ctx_r674.strokeWidth, "px");
    } }
    function NzProgressComponent_div_3_ng_template_5_Template(rf, ctx) { }
    function NzProgressComponent_div_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div");
        core.ɵɵelementStart(1, "div", 9);
        core.ɵɵelementStart(2, "div", 10);
        core.ɵɵelement(3, "div", 11);
        core.ɵɵtemplate(4, NzProgressComponent_div_3_div_4_Template, 1, 3, "div", 12);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵtemplate(5, NzProgressComponent_div_3_ng_template_5_Template, 0, 0, "ng-template", 13);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r668 = core.ɵɵnextContext();
        var _r666 = core.ɵɵreference(1);
        core.ɵɵadvance(3);
        core.ɵɵstyleSanitizer(core.ɵɵdefaultStyleSanitizer);
        core.ɵɵstyleProp("width", ctx_r668.nzPercent, "%")("border-radius", ctx_r668.nzStrokeLinecap === "round" ? "100px" : "0")("background", !ctx_r668.isGradient ? ctx_r668.nzStrokeColor : null)("background-image", ctx_r668.isGradient ? ctx_r668.lineGradient : null)("height", ctx_r668.strokeWidth, "px");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r668.nzSuccessPercent || ctx_r668.nzSuccessPercent === 0);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", _r666);
    } }
    function NzProgressComponent_div_4__svg_defs_2__svg_stop_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵnamespaceSVG();
        core.ɵɵelement(0, "stop");
    } if (rf & 2) {
        var i_r680 = ctx.$implicit;
        core.ɵɵattribute("offset", i_r680.offset)("stop-color", i_r680.color);
    } }
    function NzProgressComponent_div_4__svg_defs_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵnamespaceSVG();
        core.ɵɵelementStart(0, "defs");
        core.ɵɵelementStart(1, "linearGradient", 18);
        core.ɵɵtemplate(2, NzProgressComponent_div_4__svg_defs_2__svg_stop_2_Template, 1, 2, "stop", 19);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r676 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("id", "gradient-" + ctx_r676.gradientId);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", ctx_r676.circleGradient);
    } }
    function NzProgressComponent_div_4__svg_path_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵnamespaceSVG();
        core.ɵɵelement(0, "path", 20);
    } if (rf & 2) {
        var p_r681 = ctx.$implicit;
        var ctx_r677 = core.ɵɵnextContext(2);
        core.ɵɵproperty("ngStyle", p_r681.strokePathStyle);
        core.ɵɵattribute("d", ctx_r677.pathString)("stroke-linecap", ctx_r677.nzStrokeLinecap)("stroke", p_r681.stroke)("stroke-width", ctx_r677.nzPercent ? ctx_r677.strokeWidth : 0);
    } }
    function NzProgressComponent_div_4_ng_template_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵnamespaceSVG();
    } }
    function NzProgressComponent_div_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 10);
        core.ɵɵnamespaceSVG();
        core.ɵɵelementStart(1, "svg", 15);
        core.ɵɵtemplate(2, NzProgressComponent_div_4__svg_defs_2_Template, 3, 2, "defs", 2);
        core.ɵɵelement(3, "path", 16);
        core.ɵɵtemplate(4, NzProgressComponent_div_4__svg_path_4_Template, 1, 5, "path", 17);
        core.ɵɵelementEnd();
        core.ɵɵtemplate(5, NzProgressComponent_div_4_ng_template_5_Template, 0, 0, "ng-template", 13);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r669 = core.ɵɵnextContext();
        var _r666 = core.ɵɵreference(1);
        core.ɵɵstyleProp("width", ctx_r669.nzWidth, "px")("height", ctx_r669.nzWidth, "px")("font-size", ctx_r669.nzWidth * 0.15 + 6, "px");
        core.ɵɵclassProp("ant-progress-circle-gradient", ctx_r669.isGradient);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", ctx_r669.isGradient);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngStyle", ctx_r669.trailPathStyle);
        core.ɵɵattribute("stroke-width", ctx_r669.strokeWidth)("d", ctx_r669.pathString);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", ctx_r669.progressCirclePath)("ngForTrackBy", ctx_r669.trackByFn);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", _r666);
    } }
    var gradientIdSeed = 0;
    var NZ_CONFIG_COMPONENT_NAME = 'progress';
    var statusIconNameMap = new Map([
        ['success', 'check'],
        ['exception', 'close']
    ]);
    var statusColorMap = new Map([
        ['normal', '#108ee9'],
        ['exception', '#ff5500'],
        ['success', '#87d068']
    ]);
    var defaultFormatter = function (p) { return p + "%"; };
    var NzProgressComponent = /** @class */ (function () {
        function NzProgressComponent(nzConfigService) {
            this.nzConfigService = nzConfigService;
            this.nzWidth = 132;
            this.nzPercent = 0;
            this.nzType = 'line';
            /** Gradient style when `nzType` is `line`. */
            this.lineGradient = null;
            /** If user uses gradient color. */
            this.isGradient = false;
            /**
             * Each progress whose `nzType` is circle or dashboard should have unique id to
             * define `<linearGradient>`.
             */
            this.gradientId = gradientIdSeed++;
            /** Paths to rendered in the template. */
            this.progressCirclePath = [];
            this.trackByFn = function (index) { return "" + index; };
            this.cachedStatus = 'normal';
            this.inferredStatus = 'normal';
            this.destroy$ = new rxjs.Subject();
        }
        Object.defineProperty(NzProgressComponent.prototype, "formatter", {
            get: function () {
                return this.nzFormat || defaultFormatter;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzProgressComponent.prototype, "status", {
            get: function () {
                return this.nzStatus || this.inferredStatus;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzProgressComponent.prototype, "strokeWidth", {
            get: function () {
                return this.nzStrokeWidth || (this.nzType === 'line' && this.nzSize !== 'small' ? 8 : 6);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzProgressComponent.prototype, "isCircleStyle", {
            get: function () {
                return this.nzType === 'circle' || this.nzType === 'dashboard';
            },
            enumerable: true,
            configurable: true
        });
        NzProgressComponent.prototype.ngOnChanges = function (changes) {
            var nzGapPosition = changes.nzGapPosition, nzStrokeLinecap = changes.nzStrokeLinecap, nzStrokeColor = changes.nzStrokeColor, nzGapDegree = changes.nzGapDegree, nzType = changes.nzType, nzStatus = changes.nzStatus, nzPercent = changes.nzPercent, nzSuccessPercent = changes.nzSuccessPercent;
            if (nzStatus) {
                this.cachedStatus = this.nzStatus || this.cachedStatus;
            }
            if (nzPercent || nzSuccessPercent) {
                var fillAll = parseInt(this.nzPercent.toString(), 10) >= 100;
                if (fillAll) {
                    if ((core$1.isNotNil(this.nzSuccessPercent) && this.nzSuccessPercent >= 100) || this.nzSuccessPercent === undefined) {
                        this.inferredStatus = 'success';
                    }
                }
                else {
                    this.inferredStatus = this.cachedStatus;
                }
            }
            if (nzStatus || nzPercent || nzSuccessPercent) {
                this.updateIcon();
            }
            if (nzStrokeColor) {
                this.setStrokeColor();
            }
            if (nzGapPosition || nzStrokeLinecap || nzGapDegree || nzType || nzPercent || nzStrokeColor) {
                this.getCirclePaths();
            }
        };
        NzProgressComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.nzConfigService
                .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function () {
                _this.updateIcon();
                _this.setStrokeColor();
                _this.getCirclePaths();
            });
        };
        NzProgressComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        NzProgressComponent.prototype.updateIcon = function () {
            var ret = statusIconNameMap.get(this.status);
            this.icon = ret ? ret + (this.isCircleStyle ? '-o' : '-circle-fill') : '';
        };
        /**
         * Calculate paths when the type is circle or dashboard.
         */
        NzProgressComponent.prototype.getCirclePaths = function () {
            var _this = this;
            if (!this.isCircleStyle) {
                return;
            }
            var values = core$1.isNotNil(this.nzSuccessPercent) ? [this.nzSuccessPercent, this.nzPercent] : [this.nzPercent];
            // Calculate shared styles.
            var radius = 50 - this.strokeWidth / 2;
            var gapPosition = this.nzGapPosition || (this.nzType === 'circle' ? 'top' : 'bottom');
            var len = Math.PI * 2 * radius;
            var gapDegree = this.nzGapDegree || (this.nzType === 'circle' ? 0 : 75);
            var beginPositionX = 0;
            var beginPositionY = -radius;
            var endPositionX = 0;
            var endPositionY = radius * -2;
            switch (gapPosition) {
                case 'left':
                    beginPositionX = -radius;
                    beginPositionY = 0;
                    endPositionX = radius * 2;
                    endPositionY = 0;
                    break;
                case 'right':
                    beginPositionX = radius;
                    beginPositionY = 0;
                    endPositionX = radius * -2;
                    endPositionY = 0;
                    break;
                case 'bottom':
                    beginPositionY = radius;
                    endPositionY = radius * 2;
                    break;
                default:
            }
            this.pathString = "M 50,50 m " + beginPositionX + "," + beginPositionY + "\n       a " + radius + "," + radius + " 0 1 1 " + endPositionX + "," + -endPositionY + "\n       a " + radius + "," + radius + " 0 1 1 " + -endPositionX + "," + endPositionY;
            this.trailPathStyle = {
                strokeDasharray: len - gapDegree + "px " + len + "px",
                strokeDashoffset: "-" + gapDegree / 2 + "px",
                transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s'
            };
            // Calculate styles for each path.
            this.progressCirclePath = values
                .map(function (value, index) {
                var isSuccessPercent = values.length === 2 && index === 0;
                return {
                    stroke: _this.isGradient && !isSuccessPercent ? "url(#gradient-" + _this.gradientId + ")" : null,
                    strokePathStyle: {
                        stroke: !_this.isGradient ? (isSuccessPercent ? statusColorMap.get('success') : _this.nzStrokeColor) : null,
                        transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s',
                        strokeDasharray: ((value || 0) / 100) * (len - gapDegree) + "px " + len + "px",
                        strokeDashoffset: "-" + gapDegree / 2 + "px"
                    }
                };
            })
                .reverse();
        };
        NzProgressComponent.prototype.setStrokeColor = function () {
            var color = this.nzStrokeColor;
            var isGradient = (this.isGradient = !!color && typeof color !== 'string');
            if (isGradient && !this.isCircleStyle) {
                this.lineGradient = handleLinearGradient(color);
            }
            else if (isGradient && this.isCircleStyle) {
                this.circleGradient = handleCircleGradient(this.nzStrokeColor);
            }
            else {
                this.lineGradient = null;
                this.circleGradient = [];
            }
        };
        /** @nocollapse */ NzProgressComponent.ɵfac = function NzProgressComponent_Factory(t) { return new (t || NzProgressComponent)(core.ɵɵdirectiveInject(core$1.NzConfigService)); };
        /** @nocollapse */ NzProgressComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzProgressComponent, selectors: [["nz-progress"]], inputs: { nzShowInfo: "nzShowInfo", nzWidth: "nzWidth", nzStrokeColor: "nzStrokeColor", nzSize: "nzSize", nzFormat: "nzFormat", nzSuccessPercent: "nzSuccessPercent", nzPercent: "nzPercent", nzStrokeWidth: "nzStrokeWidth", nzGapDegree: "nzGapDegree", nzStatus: "nzStatus", nzType: "nzType", nzGapPosition: "nzGapPosition", nzStrokeLinecap: "nzStrokeLinecap" }, exportAs: ["nzProgress"], features: [core.ɵɵNgOnChangesFeature()], decls: 5, vars: 7, consts: [["progressInfoTemplate", ""], [3, "ngClass"], [4, "ngIf"], ["class", "ant-progress-inner", 3, "width", "height", "fontSize", "ant-progress-circle-gradient", 4, "ngIf"], ["class", "ant-progress-text", 4, "ngIf"], [1, "ant-progress-text"], [4, "ngIf", "ngIfElse"], ["formatTemplate", ""], ["nz-icon", "", 3, "nzType"], [1, "ant-progress-outer"], [1, "ant-progress-inner"], [1, "ant-progress-bg"], ["class", "ant-progress-success-bg", 3, "width", "border-radius", "height", 4, "ngIf"], [3, "ngTemplateOutlet"], [1, "ant-progress-success-bg"], ["viewBox", "0 0 100 100", 1, "ant-progress-circle"], ["stroke", "#f3f3f3", "fill-opacity", "0", 1, "ant-progress-circle-trail", 3, "ngStyle"], ["class", "ant-progress-circle-path", "fill-opacity", "0", 3, "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["x1", "100%", "y1", "0%", "x2", "0%", "y2", "0%", 3, "id"], [4, "ngFor", "ngForOf"], ["fill-opacity", "0", 1, "ant-progress-circle-path", 3, "ngStyle"]], template: function NzProgressComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵtemplate(0, NzProgressComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, core.ɵɵtemplateRefExtractor);
                core.ɵɵelementStart(2, "div", 1);
                core.ɵɵtemplate(3, NzProgressComponent_div_3_Template, 6, 7, "div", 2);
                core.ɵɵtemplate(4, NzProgressComponent_div_4_Template, 6, 11, "div", 3);
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵadvance(2);
                core.ɵɵclassProp("ant-progress-line", ctx.nzType == "line")("ant-progress-small", ctx.nzSize == "small")("ant-progress-show-info", ctx.nzShowInfo)("ant-progress-circle", ctx.isCircleStyle);
                core.ɵɵproperty("ngClass", "ant-progress ant-progress-status-" + ctx.status);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.nzType === "line");
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.isCircleStyle);
            } }, directives: [common.NgClass, common.NgIf, icon.NzIconDirective, common.NgTemplateOutlet, common.NgStyle, common.NgForOf], encapsulation: 2, changeDetection: 0 });
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, true),
            __metadata("design:type", Boolean)
        ], NzProgressComponent.prototype, "nzShowInfo", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME),
            __metadata("design:type", Object)
        ], NzProgressComponent.prototype, "nzStrokeColor", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, 'default'),
            __metadata("design:type", String)
        ], NzProgressComponent.prototype, "nzSize", void 0);
        __decorate([
            core$1.InputNumber(),
            __metadata("design:type", Number)
        ], NzProgressComponent.prototype, "nzSuccessPercent", void 0);
        __decorate([
            core$1.InputNumber(),
            __metadata("design:type", Number)
        ], NzProgressComponent.prototype, "nzPercent", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME), core$1.InputNumber(),
            __metadata("design:type", Number)
        ], NzProgressComponent.prototype, "nzStrokeWidth", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME), core$1.InputNumber(),
            __metadata("design:type", Number)
        ], NzProgressComponent.prototype, "nzGapDegree", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, 'top'),
            __metadata("design:type", String)
        ], NzProgressComponent.prototype, "nzGapPosition", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, 'round'),
            __metadata("design:type", String)
        ], NzProgressComponent.prototype, "nzStrokeLinecap", void 0);
        return NzProgressComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzProgressComponent, [{
            type: core.Component,
            args: [{
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    selector: 'nz-progress',
                    exportAs: 'nzProgress',
                    preserveWhitespaces: false,
                    templateUrl: './nz-progress.component.html'
                }]
        }], function () { return [{ type: core$1.NzConfigService }]; }, { nzShowInfo: [{
                type: core.Input
            }], nzWidth: [{
                type: core.Input
            }], nzStrokeColor: [{
                type: core.Input
            }], nzSize: [{
                type: core.Input
            }], nzFormat: [{
                type: core.Input
            }], nzSuccessPercent: [{
                type: core.Input
            }], nzPercent: [{
                type: core.Input
            }], nzStrokeWidth: [{
                type: core.Input
            }], nzGapDegree: [{
                type: core.Input
            }], nzStatus: [{
                type: core.Input
            }], nzType: [{
                type: core.Input
            }], nzGapPosition: [{
                type: core.Input
            }], nzStrokeLinecap: [{
                type: core.Input
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzProgressModule = /** @class */ (function () {
        function NzProgressModule() {
        }
        /** @nocollapse */ NzProgressModule.ɵmod = core.ɵɵdefineNgModule({ type: NzProgressModule });
        /** @nocollapse */ NzProgressModule.ɵinj = core.ɵɵdefineInjector({ factory: function NzProgressModule_Factory(t) { return new (t || NzProgressModule)(); }, imports: [[common.CommonModule, icon.NzIconModule]] });
        return NzProgressModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(NzProgressModule, { declarations: [NzProgressComponent], imports: [common.CommonModule, icon.NzIconModule], exports: [NzProgressComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzProgressModule, [{
            type: core.NgModule,
            args: [{
                    exports: [NzProgressComponent],
                    declarations: [NzProgressComponent],
                    imports: [common.CommonModule, icon.NzIconModule]
                }]
        }], null, null); })();

    exports.NzProgressComponent = NzProgressComponent;
    exports.NzProgressModule = NzProgressModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-progress.umd.js.map

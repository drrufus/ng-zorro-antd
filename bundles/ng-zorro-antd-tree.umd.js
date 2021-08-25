(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('ng-zorro-antd/core'),require('@angular/common'),require('ng-zorro-antd/icon'),exports, require('@angular/common'), require('@angular/core'), require('ng-zorro-antd/core'), require('ng-zorro-antd/icon'), require('rxjs'), require('rxjs/operators'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/tree', ['@angular/core','ng-zorro-antd/core','@angular/common','ng-zorro-antd/icon','exports', '@angular/common', '@angular/core', 'ng-zorro-antd/core', 'ng-zorro-antd/icon', 'rxjs', 'rxjs/operators', '@angular/forms'], factory) :
    (global = global || self, factory(global.ng.core,global.ngZorroAntd.core,global.ng.common,global.ngZorroAntd.icon,(global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].tree = {}), global.ng.common, global.ng.core, global['ng-zorro-antd'].core, global['ng-zorro-antd'].icon, global.rxjs, global.rxjs.operators, global.ng.forms));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,exports, common, core, core$1, icon, rxjs, operators, forms) { 
var _c0 = ["dragElement"];
function NzTreeNodeComponent_ng_container_2_ng_container_2_ng_container_1_1_ng_template_0_Template(rf, ctx) { }
var _c1 = function (a0) { return { $implicit: a0 }; };
function NzTreeNodeComponent_ng_container_2_ng_container_2_ng_container_1_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NzTreeNodeComponent_ng_container_2_ng_container_2_ng_container_1_1_ng_template_0_Template, 0, 0, "ng-template", 3);
} if (rf & 2) {
    var ctx_r10 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r10.nzExpandedIcon)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c1, ctx_r10.nzTreeNode));
} }
function NzTreeNodeComponent_ng_container_2_ng_container_2_ng_container_1_i_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 8);
} if (rf & 2) {
    var ctx_r11 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵclassProp("ant-select-switcher-icon", ctx_r11.nzSelectMode)("ant-tree-switcher-icon", !ctx_r11.nzSelectMode);
} }
function NzTreeNodeComponent_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzTreeNodeComponent_ng_container_2_ng_container_2_ng_container_1_1_Template, 1, 4, undefined, 2);
    ɵngcc0.ɵɵtemplate(2, NzTreeNodeComponent_ng_container_2_ng_container_2_ng_container_1_i_2_Template, 1, 4, "i", 7);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r8 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r8.isTemplateRef(ctx_r8.nzExpandedIcon));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r8.isTemplateRef(ctx_r8.nzExpandedIcon));
} }
function NzTreeNodeComponent_ng_container_2_ng_container_2_i_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 9);
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("nzSpin", true);
} }
function NzTreeNodeComponent_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzTreeNodeComponent_ng_container_2_ng_container_2_ng_container_1_Template, 3, 2, "ng-container", 2);
    ɵngcc0.ɵɵtemplate(2, NzTreeNodeComponent_ng_container_2_ng_container_2_i_2_Template, 1, 1, "i", 6);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r6.nzTreeNode.isLoading);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r6.nzTreeNode.isLoading);
} }
function NzTreeNodeComponent_ng_container_2_ng_container_3_1_ng_template_0_Template(rf, ctx) { }
function NzTreeNodeComponent_ng_container_2_ng_container_3_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NzTreeNodeComponent_ng_container_2_ng_container_3_1_ng_template_0_Template, 0, 0, "ng-template", 3);
} if (rf & 2) {
    var ctx_r13 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r13.nzExpandedIcon)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c1, ctx_r13.nzTreeNode));
} }
function NzTreeNodeComponent_ng_container_2_ng_container_3_ng_container_2_i_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 12);
} if (rf & 2) {
    var ctx_r16 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵproperty("nzType", ctx_r16.isSwitcherOpen ? "minus-square" : "plus-square");
} }
function NzTreeNodeComponent_ng_container_2_ng_container_3_ng_container_2_i_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 13);
} }
function NzTreeNodeComponent_ng_container_2_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzTreeNodeComponent_ng_container_2_ng_container_3_ng_container_2_i_1_Template, 1, 1, "i", 10);
    ɵngcc0.ɵɵtemplate(2, NzTreeNodeComponent_ng_container_2_ng_container_3_ng_container_2_i_2_Template, 1, 0, "i", 11);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r14 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r14.isShowLineIcon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r14.isShowLineIcon);
} }
function NzTreeNodeComponent_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzTreeNodeComponent_ng_container_2_ng_container_3_1_Template, 1, 4, undefined, 2);
    ɵngcc0.ɵɵtemplate(2, NzTreeNodeComponent_ng_container_2_ng_container_3_ng_container_2_Template, 3, 2, "ng-container", 2);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r7.isTemplateRef(ctx_r7.nzExpandedIcon));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r7.isTemplateRef(ctx_r7.nzExpandedIcon));
} }
function NzTreeNodeComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    var _r19 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "span", 5);
    ɵngcc0.ɵɵlistener("click", function NzTreeNodeComponent_ng_container_2_Template_span_click_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r19); var ctx_r18 = ɵngcc0.ɵɵnextContext(); return ctx_r18._clickExpand($event); });
    ɵngcc0.ɵɵtemplate(2, NzTreeNodeComponent_ng_container_2_ng_container_2_Template, 3, 2, "ng-container", 2);
    ɵngcc0.ɵɵtemplate(3, NzTreeNodeComponent_ng_container_2_ng_container_3_Template, 3, 2, "ng-container", 2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r1.nzNodeSwitcherClass);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.isShowSwitchIcon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.nzShowLine);
} }
function NzTreeNodeComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    var _r21 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "span", 5);
    ɵngcc0.ɵɵlistener("click", function NzTreeNodeComponent_ng_container_3_Template_span_click_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r21); var ctx_r20 = ɵngcc0.ɵɵnextContext(); return ctx_r20._clickCheckBox($event); });
    ɵngcc0.ɵɵelement(2, "span");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r2.nzNodeCheckboxClass);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("ant-tree-checkbox-inner", !ctx_r2.nzSelectMode)("ant-select-tree-checkbox-inner", ctx_r2.nzSelectMode);
} }
function NzTreeNodeComponent_ng_container_4_span_2_i_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 19);
} if (rf & 2) {
    var ctx_r23 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("nzType", ctx_r23.nzIcon);
} }
function NzTreeNodeComponent_ng_container_4_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 17);
    ɵngcc0.ɵɵelementStart(1, "span", 17);
    ɵngcc0.ɵɵtemplate(2, NzTreeNodeComponent_ng_container_4_span_2_i_2_Template, 1, 1, "i", 18);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r22 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassProp("ant-tree-icon__open", ctx_r22.isSwitcherOpen)("ant-tree-icon__close", ctx_r22.isSwitcherClose)("ant-tree-icon_loading", ctx_r22.nzTreeNode.isLoading);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r22.nzNodeContentLoadingClass);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r22.nzNodeContentIconClass);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r22.nzIcon);
} }
function NzTreeNodeComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "span", 14);
    ɵngcc0.ɵɵtemplate(2, NzTreeNodeComponent_ng_container_4_span_2_Template, 3, 9, "span", 15);
    ɵngcc0.ɵɵelement(3, "span", 16);
    ɵngcc0.ɵɵpipe(4, "nzHighlight");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("draggable", ctx_r3.canDraggable);
    ɵngcc0.ɵɵpropertyInterpolate("title", ctx_r3.nzTreeNode.title);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r3.nzNodeContentClass);
    ɵngcc0.ɵɵattribute("draggable", ctx_r3.canDraggable)("aria-grabbed", ctx_r3.canDraggable);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.nzTreeNode.icon && ctx_r3.nzShowIcon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("innerHTML", ɵngcc0.ɵɵpipeBind4(4, 8, ctx_r3.nzTreeNode.title, ctx_r3.nzSearchValue, "", "font-highlight"), ɵngcc0.ɵɵsanitizeHtml);
} }
function NzTreeNodeComponent_ng_template_5_Template(rf, ctx) { }
function NzTreeNodeComponent_ul_6_nz_tree_node_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nz-tree-node", 22);
} if (rf & 2) {
    var node_r25 = ctx.$implicit;
    var ctx_r24 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("nzTreeNode", node_r25)("nzShowExpand", ctx_r24.nzShowExpand)("@.disabled", ctx_r24.noAnimation == null ? null : ctx_r24.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r24.noAnimation == null ? null : ctx_r24.noAnimation.nzNoAnimation)("nzSelectMode", ctx_r24.nzSelectMode)("nzShowLine", ctx_r24.nzShowLine)("nzExpandedIcon", ctx_r24.nzExpandedIcon)("nzDraggable", ctx_r24.nzDraggable)("nzCheckable", ctx_r24.nzCheckable)("nzAsyncData", ctx_r24.nzAsyncData)("nzExpandAll", ctx_r24.nzExpandAll)("nzShowIcon", ctx_r24.nzShowIcon)("nzSearchValue", ctx_r24.nzSearchValue)("nzHideUnMatched", ctx_r24.nzHideUnMatched)("nzBeforeDrop", ctx_r24.nzBeforeDrop)("nzTreeTemplate", ctx_r24.nzTreeTemplate);
} }
function NzTreeNodeComponent_ul_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "ul", 20);
    ɵngcc0.ɵɵtemplate(1, NzTreeNodeComponent_ul_6_nz_tree_node_1_Template, 1, 16, "nz-tree-node", 21);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("ant-tree-child-tree-open", !ctx_r5.nzSelectMode || ctx_r5.nzTreeNode.isExpanded);
    ɵngcc0.ɵɵproperty("@.disabled", ctx_r5.noAnimation == null ? null : ctx_r5.noAnimation.nzNoAnimation)("@treeCollapseMotion", undefined);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r5.nzTreeNode.getChildren());
} }
var _c2 = ["nzTreeTemplate"];
function NzTreeComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelement(1, "nz-tree-node", 2);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var node_r1 = ctx.$implicit;
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzTreeNode", node_r1)("nzSelectMode", ctx_r0.nzSelectMode)("nzShowLine", ctx_r0.nzShowLine)("nzExpandedIcon", ctx_r0.nzExpandedIcon)("nzDraggable", ctx_r0.nzDraggable)("nzCheckable", ctx_r0.nzCheckable)("nzShowExpand", ctx_r0.nzShowExpand)("nzAsyncData", ctx_r0.nzAsyncData)("nzSearchValue", ctx_r0.nzSearchValue)("nzHideUnMatched", ctx_r0.nzHideUnMatched)("nzBeforeDrop", ctx_r0.nzBeforeDrop)("nzExpandAll", ctx_r0.nzExpandAll)("nzShowIcon", ctx_r0.nzShowIcon)("nzTreeTemplate", ctx_r0.treeTemplate)("@.disabled", ctx_r0.noAnimation == null ? null : ctx_r0.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r0.noAnimation == null ? null : ctx_r0.noAnimation.nzNoAnimation);
} }
'use strict';

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
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzTreeNodeComponent = /** @class */ (function () {
        function NzTreeNodeComponent(nzTreeService, ngZone, renderer, elRef, cdr, noAnimation) {
            this.nzTreeService = nzTreeService;
            this.ngZone = ngZone;
            this.renderer = renderer;
            this.elRef = elRef;
            this.cdr = cdr;
            this.noAnimation = noAnimation;
            this.nzHideUnMatched = false;
            this.nzNoAnimation = false;
            this.nzSelectMode = false;
            this.nzShowIcon = false;
            this.nzSearchValue = '';
            // default var
            this.prefixCls = 'ant-tree';
            this.nzNodeClass = {};
            this.nzNodeSwitcherClass = {};
            this.nzNodeContentClass = {};
            this.nzNodeCheckboxClass = {};
            this.nzNodeContentIconClass = {};
            this.nzNodeContentLoadingClass = {};
            /**
             * drag var
             */
            this.destroy$ = new rxjs.Subject();
            this.dragPos = 2;
            this.dragPosClass = {
                '0': 'drag-over',
                '1': 'drag-over-gap-bottom',
                '-1': 'drag-over-gap-top'
            };
            /**
             * default set
             */
            this._nzDraggable = false;
            this._nzExpandAll = false;
        }
        Object.defineProperty(NzTreeNodeComponent.prototype, "nzDraggable", {
            get: /**
             * @return {?}
             */
            function () {
                return this._nzDraggable;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._nzDraggable = value;
                this.handDragEvent();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTreeNodeComponent.prototype, "nzDefaultExpandAll", {
            get: /**
             * @return {?}
             */
            function () {
                return this._nzExpandAll;
            },
            /**
             * @deprecated use `nzExpandAll` instead.
             */
            set: /**
             * @deprecated use `nzExpandAll` instead.
             * @param {?} value
             * @return {?}
             */
            function (value) {
                core$1.warnDeprecation("'nzDefaultExpandAll' is going to be removed in 9.0.0. Please use 'nzExpandAll' instead.");
                this._nzExpandAll = value;
                if (value && this.nzTreeNode && !this.nzTreeNode.isLeaf) {
                    this.nzTreeNode.isExpanded = true;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTreeNodeComponent.prototype, "nzExpandAll", {
            get: /**
             * @return {?}
             */
            function () {
                return this._nzExpandAll;
            },
            // default set
            set: 
            // default set
            /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._nzExpandAll = value;
                if (value && this.nzTreeNode && !this.nzTreeNode.isLeaf) {
                    this.nzTreeNode.isExpanded = true;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTreeNodeComponent.prototype, "nzIcon", {
            get: /**
             * @return {?}
             */
            function () {
                return this.nzTreeNode.icon;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTreeNodeComponent.prototype, "canDraggable", {
            get: /**
             * @return {?}
             */
            function () {
                return this.nzDraggable && !this.nzTreeNode.isDisabled ? true : null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTreeNodeComponent.prototype, "isShowLineIcon", {
            get: /**
             * @return {?}
             */
            function () {
                return !this.nzTreeNode.isLeaf && this.nzShowLine;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTreeNodeComponent.prototype, "isShowSwitchIcon", {
            get: /**
             * @return {?}
             */
            function () {
                return !this.nzTreeNode.isLeaf && !this.nzShowLine;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTreeNodeComponent.prototype, "isSwitcherOpen", {
            get: /**
             * @return {?}
             */
            function () {
                return this.nzTreeNode.isExpanded && !this.nzTreeNode.isLeaf;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTreeNodeComponent.prototype, "isSwitcherClose", {
            get: /**
             * @return {?}
             */
            function () {
                return !this.nzTreeNode.isExpanded && !this.nzTreeNode.isLeaf;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTreeNodeComponent.prototype, "displayStyle", {
            get: /**
             * @return {?}
             */
            function () {
                // to hide unmatched nodes
                return this.nzSearchValue &&
                    this.nzHideUnMatched &&
                    !this.nzTreeNode.isMatched &&
                    !this.nzTreeNode.isExpanded &&
                    this.nzTreeNode.canHide
                    ? 'none'
                    : '';
            },
            enumerable: true,
            configurable: true
        });
        /**
         * reset node class
         */
        /**
         * reset node class
         * @return {?}
         */
        NzTreeNodeComponent.prototype.setClassMap = /**
         * reset node class
         * @return {?}
         */
        function () {
            var _a, _b, _c, _d, _e, _f;
            this.prefixCls = this.nzSelectMode ? 'ant-select-tree' : 'ant-tree';
            this.nzNodeClass = (_a = {},
                _a[this.prefixCls + "-treenode-disabled"] = this.nzTreeNode.isDisabled,
                _a[this.prefixCls + "-treenode-switcher-open"] = this.isSwitcherOpen,
                _a[this.prefixCls + "-treenode-switcher-close"] = this.isSwitcherClose,
                _a[this.prefixCls + "-treenode-checkbox-checked"] = this.nzTreeNode.isChecked,
                _a[this.prefixCls + "-treenode-checkbox-indeterminate"] = this.nzTreeNode.isHalfChecked,
                _a[this.prefixCls + "-treenode-selected"] = this.nzTreeNode.isSelected,
                _a[this.prefixCls + "-treenode-loading"] = this.nzTreeNode.isLoading,
                _a);
            this.nzNodeSwitcherClass = (_b = {},
                _b[this.prefixCls + "-switcher"] = true,
                _b[this.prefixCls + "-switcher-noop"] = this.nzTreeNode.isLeaf,
                _b[this.prefixCls + "-switcher_open"] = this.isSwitcherOpen,
                _b[this.prefixCls + "-switcher_close"] = this.isSwitcherClose,
                _b);
            this.nzNodeCheckboxClass = (_c = {},
                _c[this.prefixCls + "-checkbox"] = true,
                _c[this.prefixCls + "-checkbox-checked"] = this.nzTreeNode.isChecked,
                _c[this.prefixCls + "-checkbox-indeterminate"] = this.nzTreeNode.isHalfChecked,
                _c[this.prefixCls + "-checkbox-disabled"] = this.nzTreeNode.isDisabled || this.nzTreeNode.isDisableCheckbox,
                _c);
            this.nzNodeContentClass = (_d = {},
                _d[this.prefixCls + "-node-content-wrapper"] = true,
                _d[this.prefixCls + "-node-content-wrapper-open"] = this.isSwitcherOpen,
                _d[this.prefixCls + "-node-content-wrapper-close"] = this.isSwitcherClose,
                _d[this.prefixCls + "-node-selected"] = this.nzTreeNode.isSelected,
                _d);
            this.nzNodeContentIconClass = (_e = {},
                _e[this.prefixCls + "-iconEle"] = true,
                _e[this.prefixCls + "-icon__customize"] = true,
                _e);
            this.nzNodeContentLoadingClass = (_f = {},
                _f[this.prefixCls + "-iconEle"] = true,
                _f);
        };
        /**
         * @param {?} event
         * @return {?}
         */
        NzTreeNodeComponent.prototype.onMousedown = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (this.nzSelectMode) {
                event.preventDefault();
            }
        };
        /**
         * click node to select, 200ms to dbl click
         */
        /**
         * click node to select, 200ms to dbl click
         * @param {?} event
         * @return {?}
         */
        NzTreeNodeComponent.prototype.nzClick = /**
         * click node to select, 200ms to dbl click
         * @param {?} event
         * @return {?}
         */
        function (event) {
            event.preventDefault();
            event.stopPropagation();
            if (this.nzTreeNode.isSelectable && !this.nzTreeNode.isDisabled) {
                this.nzTreeNode.isSelected = !this.nzTreeNode.isSelected;
            }
            /** @type {?} */
            var eventNext = this.nzTreeService.formatEvent('click', this.nzTreeNode, event);
            (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
        };
        /**
         * @param {?} event
         * @return {?}
         */
        NzTreeNodeComponent.prototype.nzDblClick = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            event.preventDefault();
            event.stopPropagation();
            /** @type {?} */
            var eventNext = this.nzTreeService.formatEvent('dblclick', this.nzTreeNode, event);
            (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
        };
        /**
         * @param event
         */
        /**
         * @param {?} event
         * @return {?}
         */
        NzTreeNodeComponent.prototype.nzContextMenu = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            event.preventDefault();
            event.stopPropagation();
            /** @type {?} */
            var eventNext = this.nzTreeService.formatEvent('contextmenu', this.nzTreeNode, event);
            (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
        };
        /**
         * collapse node
         * @param event
         */
        /**
         * collapse node
         * @param {?} event
         * @return {?}
         */
        NzTreeNodeComponent.prototype._clickExpand = /**
         * collapse node
         * @param {?} event
         * @return {?}
         */
        function (event) {
            event.preventDefault();
            event.stopPropagation();
            if (!this.nzTreeNode.isLoading && !this.nzTreeNode.isLeaf) {
                // set async state
                if (this.nzAsyncData && this.nzTreeNode.children.length === 0 && !this.nzTreeNode.isExpanded) {
                    this.nzTreeNode.isLoading = true;
                }
                this.nzTreeNode.isExpanded = !this.nzTreeNode.isExpanded;
                if (this.nzTreeNode.isMatched) {
                    this.setDisplayForParentNodes(this.nzTreeNode);
                }
                this.setDisplayForChildNodes(this.nzTreeNode);
                /** @type {?} */
                var eventNext = this.nzTreeService.formatEvent('expand', this.nzTreeNode, event);
                (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
            }
        };
        /**
         * @private
         * @param {?} parentNode
         * @return {?}
         */
        NzTreeNodeComponent.prototype.setDisplayForChildNodes = /**
         * @private
         * @param {?} parentNode
         * @return {?}
         */
        function (parentNode) {
            var _this = this;
            var children = parentNode.children;
            if (children.length > 0) {
                children.map((/**
                 * @param {?} node
                 * @return {?}
                 */
                function (node) {
                    /** @type {?} */
                    var canHide = !node.isMatched;
                    node.canHide = canHide;
                    _this.setDisplayForChildNodes(node);
                }));
            }
        };
        /**
         * @private
         * @param {?} targetNode
         * @return {?}
         */
        NzTreeNodeComponent.prototype.setDisplayForParentNodes = /**
         * @private
         * @param {?} targetNode
         * @return {?}
         */
        function (targetNode) {
            /** @type {?} */
            var parentNode = targetNode.getParentNode();
            if (parentNode) {
                parentNode.canHide = false;
                this.setDisplayForParentNodes(parentNode);
            }
        };
        /**
         * check node
         * @param event
         */
        /**
         * check node
         * @param {?} event
         * @return {?}
         */
        NzTreeNodeComponent.prototype._clickCheckBox = /**
         * check node
         * @param {?} event
         * @return {?}
         */
        function (event) {
            event.preventDefault();
            event.stopPropagation();
            // return if node is disabled
            if (this.nzTreeNode.isDisabled || this.nzTreeNode.isDisableCheckbox) {
                return;
            }
            this.nzTreeNode.isChecked = !this.nzTreeNode.isChecked;
            this.nzTreeNode.isHalfChecked = false;
            if (!this.nzTreeService.isCheckStrictly) {
                this.nzTreeService.conduct(this.nzTreeNode);
            }
            /** @type {?} */
            var eventNext = this.nzTreeService.formatEvent('check', this.nzTreeNode, event);
            (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
        };
        /**
         * drag event
         * @param e
         */
        /**
         * drag event
         * @return {?}
         */
        NzTreeNodeComponent.prototype.clearDragClass = /**
         * drag event
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var dragClass = ['drag-over-gap-top', 'drag-over-gap-bottom', 'drag-over'];
            dragClass.forEach((/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                _this.renderer.removeClass(_this.dragElement.nativeElement, e);
            }));
        };
        /**
         * @param {?} e
         * @return {?}
         */
        NzTreeNodeComponent.prototype.handleDragStart = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            e.stopPropagation();
            try {
                // ie throw error
                // firefox-need-it
                (/** @type {?} */ (e.dataTransfer)).setData('text/plain', (/** @type {?} */ (this.nzTreeNode.key)));
            }
            catch (error) {
                // empty
            }
            this.nzTreeService.setSelectedNode(this.nzTreeNode);
            this.nzTreeNode.isExpanded = false;
            /** @type {?} */
            var eventNext = this.nzTreeService.formatEvent('dragstart', this.nzTreeNode, e);
            (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
        };
        /**
         * @param {?} e
         * @return {?}
         */
        NzTreeNodeComponent.prototype.handleDragEnter = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            var _this = this;
            e.preventDefault();
            e.stopPropagation();
            // reset position
            this.dragPos = 2;
            this.ngZone.run((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var node = _this.nzTreeService.getSelectedNode();
                if (node && node.key !== _this.nzTreeNode.key && !_this.nzTreeNode.isExpanded && !_this.nzTreeNode.isLeaf) {
                    _this.nzTreeNode.isExpanded = true;
                }
                /** @type {?} */
                var eventNext = _this.nzTreeService.formatEvent('dragenter', _this.nzTreeNode, e);
                (/** @type {?} */ ((/** @type {?} */ (_this.nzTreeService)).triggerEventChange$)).next(eventNext);
            }));
        };
        /**
         * @param {?} e
         * @return {?}
         */
        NzTreeNodeComponent.prototype.handleDragOver = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            e.preventDefault();
            e.stopPropagation();
            /** @type {?} */
            var dropPosition = this.nzTreeService.calcDropPosition(e);
            if (this.dragPos !== dropPosition) {
                this.clearDragClass();
                this.dragPos = dropPosition;
                // leaf node will pass
                if (!(this.dragPos === 0 && this.nzTreeNode.isLeaf)) {
                    this.renderer.addClass(this.dragElement.nativeElement, this.dragPosClass[this.dragPos]);
                }
            }
            /** @type {?} */
            var eventNext = this.nzTreeService.formatEvent('dragover', this.nzTreeNode, e);
            (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
        };
        /**
         * @param {?} e
         * @return {?}
         */
        NzTreeNodeComponent.prototype.handleDragLeave = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            var _this = this;
            e.stopPropagation();
            this.ngZone.run((/**
             * @return {?}
             */
            function () {
                _this.clearDragClass();
            }));
            /** @type {?} */
            var eventNext = this.nzTreeService.formatEvent('dragleave', this.nzTreeNode, e);
            (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
        };
        /**
         * @param {?} e
         * @return {?}
         */
        NzTreeNodeComponent.prototype.handleDragDrop = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            var _this = this;
            e.preventDefault();
            e.stopPropagation();
            this.ngZone.run((/**
             * @return {?}
             */
            function () {
                _this.clearDragClass();
                /** @type {?} */
                var node = _this.nzTreeService.getSelectedNode();
                if (!node || (node && node.key === _this.nzTreeNode.key) || (_this.dragPos === 0 && _this.nzTreeNode.isLeaf)) {
                    return;
                }
                // pass if node is leafNo
                /** @type {?} */
                var dropEvent = _this.nzTreeService.formatEvent('drop', _this.nzTreeNode, e);
                /** @type {?} */
                var dragEndEvent = _this.nzTreeService.formatEvent('dragend', _this.nzTreeNode, e);
                if (_this.nzBeforeDrop) {
                    _this.nzBeforeDrop({
                        dragNode: (/** @type {?} */ (_this.nzTreeService.getSelectedNode())),
                        node: _this.nzTreeNode,
                        pos: _this.dragPos
                    }).subscribe((/**
                     * @param {?} canDrop
                     * @return {?}
                     */
                    function (canDrop) {
                        if (canDrop) {
                            _this.nzTreeService.dropAndApply(_this.nzTreeNode, _this.dragPos);
                        }
                        (/** @type {?} */ ((/** @type {?} */ (_this.nzTreeService)).triggerEventChange$)).next(dropEvent);
                        (/** @type {?} */ ((/** @type {?} */ (_this.nzTreeService)).triggerEventChange$)).next(dragEndEvent);
                    }));
                }
                else if (_this.nzTreeNode) {
                    _this.nzTreeService.dropAndApply(_this.nzTreeNode, _this.dragPos);
                    (/** @type {?} */ ((/** @type {?} */ (_this.nzTreeService)).triggerEventChange$)).next(dropEvent);
                }
            }));
        };
        /**
         * @param {?} e
         * @return {?}
         */
        NzTreeNodeComponent.prototype.handleDragEnd = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            var _this = this;
            e.stopPropagation();
            this.ngZone.run((/**
             * @return {?}
             */
            function () {
                // if user do not custom beforeDrop
                if (!_this.nzBeforeDrop) {
                    /** @type {?} */
                    var eventNext = _this.nzTreeService.formatEvent('dragend', _this.nzTreeNode, e);
                    (/** @type {?} */ ((/** @type {?} */ (_this.nzTreeService)).triggerEventChange$)).next(eventNext);
                }
            }));
        };
        /**
         * Listening to dragging events.
         */
        /**
         * Listening to dragging events.
         * @return {?}
         */
        NzTreeNodeComponent.prototype.handDragEvent = /**
         * Listening to dragging events.
         * @return {?}
         */
        function () {
            var _this = this;
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                if (_this.nzDraggable) {
                    _this.destroy$ = new rxjs.Subject();
                    rxjs.fromEvent(_this.elRef.nativeElement, 'dragstart')
                        .pipe(operators.takeUntil(_this.destroy$))
                        .subscribe((/**
                     * @param {?} e
                     * @return {?}
                     */
                    function (e) { return _this.handleDragStart(e); }));
                    rxjs.fromEvent(_this.elRef.nativeElement, 'dragenter')
                        .pipe(operators.takeUntil(_this.destroy$))
                        .subscribe((/**
                     * @param {?} e
                     * @return {?}
                     */
                    function (e) { return _this.handleDragEnter(e); }));
                    rxjs.fromEvent(_this.elRef.nativeElement, 'dragover')
                        .pipe(operators.takeUntil(_this.destroy$))
                        .subscribe((/**
                     * @param {?} e
                     * @return {?}
                     */
                    function (e) { return _this.handleDragOver(e); }));
                    rxjs.fromEvent(_this.elRef.nativeElement, 'dragleave')
                        .pipe(operators.takeUntil(_this.destroy$))
                        .subscribe((/**
                     * @param {?} e
                     * @return {?}
                     */
                    function (e) { return _this.handleDragLeave(e); }));
                    rxjs.fromEvent(_this.elRef.nativeElement, 'drop')
                        .pipe(operators.takeUntil(_this.destroy$))
                        .subscribe((/**
                     * @param {?} e
                     * @return {?}
                     */
                    function (e) { return _this.handleDragDrop(e); }));
                    rxjs.fromEvent(_this.elRef.nativeElement, 'dragend')
                        .pipe(operators.takeUntil(_this.destroy$))
                        .subscribe((/**
                     * @param {?} e
                     * @return {?}
                     */
                    function (e) { return _this.handleDragEnd(e); }));
                }
                else {
                    _this.destroy$.next();
                    _this.destroy$.complete();
                }
            }));
        };
        /**
         * @param {?} value
         * @return {?}
         */
        NzTreeNodeComponent.prototype.isTemplateRef = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            return value instanceof core.TemplateRef;
        };
        /**
         * @return {?}
         */
        NzTreeNodeComponent.prototype.markForCheck = /**
         * @return {?}
         */
        function () {
            this.cdr.markForCheck();
        };
        /**
         * @return {?}
         */
        NzTreeNodeComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            // init expanded / selected / checked list
            if (this.nzTreeNode.isSelected) {
                this.nzTreeService.setNodeActive(this.nzTreeNode);
            }
            if (this.nzTreeNode.isExpanded) {
                this.nzTreeService.setExpandedNodeList(this.nzTreeNode);
            }
            if (this.nzTreeNode.isChecked) {
                this.nzTreeService.setCheckedNodeList(this.nzTreeNode);
            }
            // TODO
            this.nzTreeNode.component = this;
            this.nzTreeService
                .eventTriggerChanged()
                .pipe(operators.filter((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return (/** @type {?} */ (data.node)).key === _this.nzTreeNode.key; })), operators.takeUntil(this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            function () {
                _this.setClassMap();
                _this.markForCheck();
            }));
            this.setClassMap();
        };
        /**
         * @return {?}
         */
        NzTreeNodeComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
        function () {
            this.setClassMap();
        };
        /**
         * @return {?}
         */
        NzTreeNodeComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        /** @nocollapse */
        NzTreeNodeComponent.ctorParameters = function () { return [
            { type: core$1.NzTreeBaseService },
            { type: core.NgZone },
            { type: core.Renderer2 },
            { type: core.ElementRef },
            { type: core.ChangeDetectorRef },
            { type: core$1.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] }
        ]; };
        NzTreeNodeComponent.propDecorators = {
            dragElement: [{ type: core.ViewChild, args: ['dragElement', { static: false },] }],
            nzTreeNode: [{ type: core.Input }],
            nzShowLine: [{ type: core.Input }],
            nzShowExpand: [{ type: core.Input }],
            nzCheckable: [{ type: core.Input }],
            nzAsyncData: [{ type: core.Input }],
            nzHideUnMatched: [{ type: core.Input }],
            nzNoAnimation: [{ type: core.Input }],
            nzSelectMode: [{ type: core.Input }],
            nzShowIcon: [{ type: core.Input }],
            nzExpandedIcon: [{ type: core.Input }],
            nzTreeTemplate: [{ type: core.Input }],
            nzBeforeDrop: [{ type: core.Input }],
            nzSearchValue: [{ type: core.Input }],
            nzDraggable: [{ type: core.Input }],
            nzDefaultExpandAll: [{ type: core.Input }],
            nzExpandAll: [{ type: core.Input }],
            onMousedown: [{ type: core.HostListener, args: ['mousedown', ['$event'],] }],
            nzClick: [{ type: core.HostListener, args: ['click', ['$event'],] }],
            nzDblClick: [{ type: core.HostListener, args: ['dblclick', ['$event'],] }],
            nzContextMenu: [{ type: core.HostListener, args: ['contextmenu', ['$event'],] }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzTreeNodeComponent.prototype, "nzShowLine", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzTreeNodeComponent.prototype, "nzShowExpand", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzTreeNodeComponent.prototype, "nzCheckable", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzTreeNodeComponent.prototype, "nzAsyncData", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTreeNodeComponent.prototype, "nzHideUnMatched", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTreeNodeComponent.prototype, "nzNoAnimation", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTreeNodeComponent.prototype, "nzSelectMode", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTreeNodeComponent.prototype, "nzShowIcon", void 0);
NzTreeNodeComponent.ɵfac = function NzTreeNodeComponent_Factory(t) { return new (t || NzTreeNodeComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzTreeBaseService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzNoAnimationDirective, 9)); };
NzTreeNodeComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTreeNodeComponent, selectors: [["nz-tree-node"]], viewQuery: function NzTreeNodeComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.dragElement = _t.first);
    } }, hostBindings: function NzTreeNodeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("mousedown", function NzTreeNodeComponent_mousedown_HostBindingHandler($event) { return ctx.onMousedown($event); })("click", function NzTreeNodeComponent_click_HostBindingHandler($event) { return ctx.nzClick($event); })("dblclick", function NzTreeNodeComponent_dblclick_HostBindingHandler($event) { return ctx.nzDblClick($event); })("contextmenu", function NzTreeNodeComponent_contextmenu_HostBindingHandler($event) { return ctx.nzContextMenu($event); });
    } }, inputs: { nzHideUnMatched: "nzHideUnMatched", nzNoAnimation: "nzNoAnimation", nzSelectMode: "nzSelectMode", nzShowIcon: "nzShowIcon", nzSearchValue: "nzSearchValue", nzDraggable: "nzDraggable", nzDefaultExpandAll: "nzDefaultExpandAll", nzExpandAll: "nzExpandAll", nzTreeNode: "nzTreeNode", nzShowLine: "nzShowLine", nzShowExpand: "nzShowExpand", nzCheckable: "nzCheckable", nzAsyncData: "nzAsyncData", nzExpandedIcon: "nzExpandedIcon", nzTreeTemplate: "nzTreeTemplate", nzBeforeDrop: "nzBeforeDrop" }, exportAs: ["nzTreeNode"], features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 7, vars: 11, consts: [["role", "treeitem", 3, "ngClass"], ["dragElement", ""], [4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "group", "class", "ant-tree-child-tree", "data-expanded", "true", 3, "ant-tree-child-tree-open", 4, "ngIf"], [3, "ngClass", "click"], ["nz-icon", "", "nzType", "loading", "class", "ant-tree-switcher-loading-icon", 3, "nzSpin", 4, "ngIf"], ["nz-icon", "", "nzType", "caret-down", 3, "ant-select-switcher-icon", "ant-tree-switcher-icon", 4, "ngIf"], ["nz-icon", "", "nzType", "caret-down"], ["nz-icon", "", "nzType", "loading", 1, "ant-tree-switcher-loading-icon", 3, "nzSpin"], ["nz-icon", "", "class", "ant-tree-switcher-line-icon", 3, "nzType", 4, "ngIf"], ["nz-icon", "", "nzType", "file", "class", "ant-tree-switcher-line-icon", 4, "ngIf"], ["nz-icon", "", 1, "ant-tree-switcher-line-icon", 3, "nzType"], ["nz-icon", "", "nzType", "file", 1, "ant-tree-switcher-line-icon"], [3, "title", "ngClass"], [3, "ant-tree-icon__open", "ant-tree-icon__close", "ant-tree-icon_loading", "ngClass", 4, "ngIf"], [1, "ant-tree-title", 3, "innerHTML"], [3, "ngClass"], ["nz-icon", "", 3, "nzType", 4, "ngIf"], ["nz-icon", "", 3, "nzType"], ["role", "group", "data-expanded", "true", 1, "ant-tree-child-tree"], [3, "nzTreeNode", "nzShowExpand", "nzNoAnimation", "nzSelectMode", "nzShowLine", "nzExpandedIcon", "nzDraggable", "nzCheckable", "nzAsyncData", "nzExpandAll", "nzShowIcon", "nzSearchValue", "nzHideUnMatched", "nzBeforeDrop", "nzTreeTemplate", 4, "ngFor", "ngForOf"], [3, "nzTreeNode", "nzShowExpand", "nzNoAnimation", "nzSelectMode", "nzShowLine", "nzExpandedIcon", "nzDraggable", "nzCheckable", "nzAsyncData", "nzExpandAll", "nzShowIcon", "nzSearchValue", "nzHideUnMatched", "nzBeforeDrop", "nzTreeTemplate"]], template: function NzTreeNodeComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "li", 0, 1);
        ɵngcc0.ɵɵtemplate(2, NzTreeNodeComponent_ng_container_2_Template, 4, 3, "ng-container", 2);
        ɵngcc0.ɵɵtemplate(3, NzTreeNodeComponent_ng_container_3_Template, 3, 5, "ng-container", 2);
        ɵngcc0.ɵɵtemplate(4, NzTreeNodeComponent_ng_container_4_Template, 5, 13, "ng-container", 2);
        ɵngcc0.ɵɵtemplate(5, NzTreeNodeComponent_ng_template_5_Template, 0, 0, "ng-template", 3);
        ɵngcc0.ɵɵtemplate(6, NzTreeNodeComponent_ul_6_Template, 2, 5, "ul", 4);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("display", ctx.displayStyle);
        ɵngcc0.ɵɵproperty("ngClass", ctx.nzNodeClass);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzShowExpand);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzCheckable);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.nzTreeTemplate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.nzTreeTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(9, _c1, ctx.nzTreeNode));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzTreeNode.isExpanded);
    } }, directives: [ɵngcc2.NgClass, ɵngcc2.NgIf, ɵngcc2.NgTemplateOutlet, ɵngcc3.NzIconDirective, ɵngcc2.NgForOf, NzTreeNodeComponent, ɵngcc1.NzNoAnimationDirective], pipes: [ɵngcc1.NzHighlightPipe], encapsulation: 2, data: { animation: [core$1.treeCollapseMotion] }, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTreeNodeComponent, [{
        type: core.Component,
        args: [{
                selector: 'nz-tree-node',
                exportAs: 'nzTreeNode',
                template: "<li\r\n  #dragElement\r\n  role=\"treeitem\"\r\n  [style.display]=\"displayStyle\"\r\n  [ngClass]=\"nzNodeClass\">\r\n  <ng-container *ngIf=\"nzShowExpand\">\r\n    <span\r\n      [ngClass]=\"nzNodeSwitcherClass\"\r\n      (click)=\"_clickExpand($event)\">\r\n      <ng-container *ngIf=\"isShowSwitchIcon\">\r\n        <ng-container *ngIf=\"!nzTreeNode.isLoading\">\r\n          <ng-template\r\n            *ngIf=\"isTemplateRef(nzExpandedIcon)\"\r\n            [ngTemplateOutlet]=\"nzExpandedIcon\"\r\n            [ngTemplateOutletContext]=\"{ $implicit: nzTreeNode }\">\r\n          </ng-template>\r\n          <i\r\n            *ngIf=\"!isTemplateRef(nzExpandedIcon)\"\r\n            nz-icon\r\n            nzType=\"caret-down\"\r\n            [class.ant-select-switcher-icon]=\"nzSelectMode\"\r\n            [class.ant-tree-switcher-icon]=\"!nzSelectMode\">\r\n          </i>\r\n        </ng-container>\r\n        <i *ngIf=\"nzTreeNode.isLoading\" nz-icon nzType=\"loading\" [nzSpin]=\"true\" class=\"ant-tree-switcher-loading-icon\"></i>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"nzShowLine\">\r\n        <ng-template\r\n          *ngIf=\"isTemplateRef(nzExpandedIcon)\"\r\n          [ngTemplateOutlet]=\"nzExpandedIcon\"\r\n          [ngTemplateOutletContext]=\"{ $implicit: nzTreeNode }\">\r\n        </ng-template>\r\n        <ng-container *ngIf=\"!isTemplateRef(nzExpandedIcon)\">\r\n          <i *ngIf=\"isShowLineIcon\" nz-icon [nzType]=\"isSwitcherOpen ? 'minus-square' : 'plus-square'\" class=\"ant-tree-switcher-line-icon\"></i>\r\n          <i *ngIf=\"!isShowLineIcon\" nz-icon nzType=\"file\" class=\"ant-tree-switcher-line-icon\"></i>\r\n        </ng-container>\r\n      </ng-container>\r\n    </span>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"nzCheckable\">\r\n    <span\r\n      [ngClass]=\"nzNodeCheckboxClass\"\r\n      (click)=\"_clickCheckBox($event)\">\r\n      <span [class.ant-tree-checkbox-inner]=\"!nzSelectMode\"\r\n            [class.ant-select-tree-checkbox-inner]=\"nzSelectMode\"></span>\r\n    </span>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"!nzTreeTemplate\">\r\n    <span\r\n      title=\"{{nzTreeNode.title}}\"\r\n      [attr.draggable]=\"canDraggable\"\r\n      [attr.aria-grabbed]=\"canDraggable\"\r\n      [ngClass]=\"nzNodeContentClass\"\r\n      [class.draggable]=\"canDraggable\">\r\n      <span\r\n        *ngIf=\"nzTreeNode.icon && nzShowIcon\"\r\n        [class.ant-tree-icon__open]=\"isSwitcherOpen\"\r\n        [class.ant-tree-icon__close]=\"isSwitcherClose\"\r\n        [class.ant-tree-icon_loading]=\"nzTreeNode.isLoading\"\r\n        [ngClass]=\"nzNodeContentLoadingClass\">\r\n        <span\r\n          [ngClass]=\"nzNodeContentIconClass\">\r\n          <i nz-icon *ngIf=\"nzIcon\" [nzType]=\"nzIcon\"></i>\r\n        </span>\r\n      </span>\r\n      <span class=\"ant-tree-title\" [innerHTML]=\"nzTreeNode.title | nzHighlight: nzSearchValue: '' : 'font-highlight'\">\r\n      </span>\r\n    </span>\r\n  </ng-container>\r\n  <ng-template\r\n    [ngTemplateOutlet]=\"nzTreeTemplate\"\r\n    [ngTemplateOutletContext]=\"{ $implicit: nzTreeNode }\">\r\n  </ng-template>\r\n\r\n  <ul\r\n    *ngIf=\"nzTreeNode.isExpanded\"\r\n    role=\"group\"\r\n    class=\"ant-tree-child-tree\"\r\n    [class.ant-tree-child-tree-open]=\"!nzSelectMode || nzTreeNode.isExpanded\"\r\n    data-expanded=\"true\"\r\n    [@.disabled]=\"noAnimation?.nzNoAnimation\"\r\n    @treeCollapseMotion>\r\n    <nz-tree-node\r\n      *ngFor=\"let node of nzTreeNode.getChildren()\"\r\n      [nzTreeNode]=\"node\"\r\n      [nzShowExpand]=\"nzShowExpand\"\r\n      [@.disabled]=\"noAnimation?.nzNoAnimation\"\r\n      [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n      [nzSelectMode]=\"nzSelectMode\"\r\n      [nzShowLine]=\"nzShowLine\"\r\n      [nzExpandedIcon]=\"nzExpandedIcon\"\r\n      [nzDraggable]=\"nzDraggable\"\r\n      [nzCheckable]=\"nzCheckable\"\r\n      [nzAsyncData]=\"nzAsyncData\"\r\n      [nzExpandAll]=\"nzExpandAll\"\r\n      [nzShowIcon]=\"nzShowIcon\"\r\n      [nzSearchValue]=\"nzSearchValue\"\r\n      [nzHideUnMatched]=\"nzHideUnMatched\"\r\n      [nzBeforeDrop]=\"nzBeforeDrop\"\r\n      [nzTreeTemplate]=\"nzTreeTemplate\">\r\n    </nz-tree-node>\r\n  </ul>\r\n</li>\r\n",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                animations: [core$1.treeCollapseMotion]
            }]
    }], function () { return [{ type: ɵngcc1.NzTreeBaseService }, { type: ɵngcc0.NgZone }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc1.NzNoAnimationDirective, decorators: [{
                type: core.Host
            }, {
                type: core.Optional
            }] }]; }, { nzHideUnMatched: [{
            type: core.Input
        }], nzNoAnimation: [{
            type: core.Input
        }], nzSelectMode: [{
            type: core.Input
        }], nzShowIcon: [{
            type: core.Input
        }], nzSearchValue: [{
            type: core.Input
        }], nzDraggable: [{
            type: core.Input
        }], nzDefaultExpandAll: [{
            type: core.Input
        }], nzExpandAll: [{
            type: core.Input
        }], onMousedown: [{
            type: core.HostListener,
            args: ['mousedown', ['$event']]
        }], nzClick: [{
            type: core.HostListener,
            args: ['click', ['$event']]
        }], nzDblClick: [{
            type: core.HostListener,
            args: ['dblclick', ['$event']]
        }], nzContextMenu: [{
            type: core.HostListener,
            args: ['contextmenu', ['$event']]
        }], dragElement: [{
            type: core.ViewChild,
            args: ['dragElement', { static: false }]
        }], nzTreeNode: [{
            type: core.Input
        }], nzShowLine: [{
            type: core.Input
        }], nzShowExpand: [{
            type: core.Input
        }], nzCheckable: [{
            type: core.Input
        }], nzAsyncData: [{
            type: core.Input
        }], nzExpandedIcon: [{
            type: core.Input
        }], nzTreeTemplate: [{
            type: core.Input
        }], nzBeforeDrop: [{
            type: core.Input
        }] }); })();
        return NzTreeNodeComponent;
    }());
    if (false) {
        /** @type {?} */
        NzTreeNodeComponent.prototype.dragElement;
        /**
         * for global property
         * @type {?}
         */
        NzTreeNodeComponent.prototype.nzTreeNode;
        /** @type {?} */
        NzTreeNodeComponent.prototype.nzShowLine;
        /** @type {?} */
        NzTreeNodeComponent.prototype.nzShowExpand;
        /** @type {?} */
        NzTreeNodeComponent.prototype.nzCheckable;
        /** @type {?} */
        NzTreeNodeComponent.prototype.nzAsyncData;
        /** @type {?} */
        NzTreeNodeComponent.prototype.nzHideUnMatched;
        /** @type {?} */
        NzTreeNodeComponent.prototype.nzNoAnimation;
        /** @type {?} */
        NzTreeNodeComponent.prototype.nzSelectMode;
        /** @type {?} */
        NzTreeNodeComponent.prototype.nzShowIcon;
        /** @type {?} */
        NzTreeNodeComponent.prototype.nzExpandedIcon;
        /** @type {?} */
        NzTreeNodeComponent.prototype.nzTreeTemplate;
        /** @type {?} */
        NzTreeNodeComponent.prototype.nzBeforeDrop;
        /** @type {?} */
        NzTreeNodeComponent.prototype.nzSearchValue;
        /** @type {?} */
        NzTreeNodeComponent.prototype.prefixCls;
        /** @type {?} */
        NzTreeNodeComponent.prototype.nzNodeClass;
        /** @type {?} */
        NzTreeNodeComponent.prototype.nzNodeSwitcherClass;
        /** @type {?} */
        NzTreeNodeComponent.prototype.nzNodeContentClass;
        /** @type {?} */
        NzTreeNodeComponent.prototype.nzNodeCheckboxClass;
        /** @type {?} */
        NzTreeNodeComponent.prototype.nzNodeContentIconClass;
        /** @type {?} */
        NzTreeNodeComponent.prototype.nzNodeContentLoadingClass;
        /**
         * drag var
         * @type {?}
         */
        NzTreeNodeComponent.prototype.destroy$;
        /** @type {?} */
        NzTreeNodeComponent.prototype.dragPos;
        /** @type {?} */
        NzTreeNodeComponent.prototype.dragPosClass;
        /**
         * default set
         * @type {?}
         */
        NzTreeNodeComponent.prototype._nzDraggable;
        /** @type {?} */
        NzTreeNodeComponent.prototype._nzExpandAll;
        /** @type {?} */
        NzTreeNodeComponent.prototype.nzTreeService;
        /**
         * @type {?}
         * @private
         */
        NzTreeNodeComponent.prototype.ngZone;
        /**
         * @type {?}
         * @private
         */
        NzTreeNodeComponent.prototype.renderer;
        /**
         * @type {?}
         * @private
         */
        NzTreeNodeComponent.prototype.elRef;
        /**
         * @type {?}
         * @private
         */
        NzTreeNodeComponent.prototype.cdr;
        /** @type {?} */
        NzTreeNodeComponent.prototype.noAnimation;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzTreeService = /** @class */ (function (_super) {
        __extends(NzTreeService, _super);
        function NzTreeService() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
NzTreeService.ɵfac = function NzTreeService_Factory(t) { return ɵNzTreeService_BaseFactory(t || NzTreeService); };
NzTreeService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: NzTreeService, factory: function (t) { return NzTreeService.ɵfac(t); } });
var ɵNzTreeService_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(NzTreeService);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTreeService, [{
        type: core.Injectable
    }], null, null); })();
        return NzTreeService;
    }(core$1.NzTreeBaseService));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} higherOrderService
     * @param {?} treeService
     * @return {?}
     */
    function NzTreeServiceFactory(higherOrderService, treeService) {
        return higherOrderService ? higherOrderService : treeService;
    }
    /** @type {?} */
    var NZ_CONFIG_COMPONENT_NAME = 'tree';
    var NzTreeComponent = /** @class */ (function (_super) {
        __extends(NzTreeComponent, _super);
        function NzTreeComponent(nzTreeService, nzConfigService, cdr, noAnimation) {
            var _this = _super.call(this, nzTreeService) || this;
            _this.nzConfigService = nzConfigService;
            _this.cdr = cdr;
            _this.noAnimation = noAnimation;
            _this.nzShowExpand = true;
            _this.nzShowLine = false;
            _this.nzCheckable = false;
            _this.nzAsyncData = false;
            _this.nzDraggable = false;
            _this.nzSelectMode = false;
            _this.nzCheckStrictly = false;
            _this.nzExpandAll = false;
            _this._nzDefaultExpandAll = false;
            _this.nzMultiple = false;
            _this.nzExpandedKeysChange = new core.EventEmitter();
            _this.nzSelectedKeysChange = new core.EventEmitter();
            _this.nzCheckedKeysChange = new core.EventEmitter();
            _this.nzSearchValueChange = new core.EventEmitter();
            /**
             * @deprecated use `nzSearchValueChange` instead.
             */
            _this.nzOnSearchNode = new core.EventEmitter();
            _this.nzClick = new core.EventEmitter();
            _this.nzDblClick = new core.EventEmitter();
            _this.nzContextMenu = new core.EventEmitter();
            _this.nzCheckBoxChange = new core.EventEmitter();
            _this.nzExpandChange = new core.EventEmitter();
            _this.nzOnDragStart = new core.EventEmitter();
            _this.nzOnDragEnter = new core.EventEmitter();
            _this.nzOnDragOver = new core.EventEmitter();
            _this.nzOnDragLeave = new core.EventEmitter();
            _this.nzOnDrop = new core.EventEmitter();
            _this.nzOnDragEnd = new core.EventEmitter();
            _this.nzDefaultSubject = new rxjs.ReplaySubject(6);
            _this.destroy$ = new rxjs.Subject();
            _this.prefixCls = 'ant-tree';
            _this.classMap = {};
            _this.onChange = (/**
             * @return {?}
             */
            function () { return null; });
            _this.onTouched = (/**
             * @return {?}
             */
            function () { return null; });
            return _this;
        }
        Object.defineProperty(NzTreeComponent.prototype, "treeTemplate", {
            get: /**
             * @return {?}
             */
            function () {
                return this.nzTreeTemplate || this.nzTreeTemplateChild;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTreeComponent.prototype, "nzDefaultExpandAll", {
            get: /**
             * @return {?}
             */
            function () {
                return this._nzDefaultExpandAll;
            },
            /**
             * @deprecated 9.0.0 use `nzExpandAll` instead.
             */
            set: /**
             * @deprecated 9.0.0 use `nzExpandAll` instead.
             * @param {?} value
             * @return {?}
             */
            function (value) {
                core$1.warnDeprecation("'nzDefaultExpandAll' would be removed in 9.0.0. Please use 'nzExpandAll' instead.");
                this.nzExpandAll = value;
                this._nzDefaultExpandAll = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTreeComponent.prototype, "nzData", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.initNzData(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTreeComponent.prototype, "nzDefaultExpandedKeys", {
            /**
             * @deprecated 9.0.0 - use `nzExpandedKeys` instead.
             */
            set: /**
             * @deprecated 9.0.0 - use `nzExpandedKeys` instead.
             * @param {?} value
             * @return {?}
             */
            function (value) {
                core$1.warnDeprecation("'nzDefaultExpandedKeys' would be removed in 9.0.0. Please use 'nzExpandedKeys' instead.");
                this.nzDefaultSubject.next({ type: 'nzExpandedKeys', keys: value });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTreeComponent.prototype, "nzDefaultSelectedKeys", {
            /**
             * @deprecated 9.0.0 - use `nzSelectedKeys` instead.
             */
            set: /**
             * @deprecated 9.0.0 - use `nzSelectedKeys` instead.
             * @param {?} value
             * @return {?}
             */
            function (value) {
                core$1.warnDeprecation("'nzDefaultSelectedKeys' would be removed in 9.0.0. Please use 'nzSelectedKeys' instead.");
                this.nzDefaultSubject.next({ type: 'nzSelectedKeys', keys: value });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTreeComponent.prototype, "nzDefaultCheckedKeys", {
            /**
             * @deprecated 9.0.0 - use `nzCheckedKeys` instead.
             */
            set: /**
             * @deprecated 9.0.0 - use `nzCheckedKeys` instead.
             * @param {?} value
             * @return {?}
             */
            function (value) {
                core$1.warnDeprecation("'nzDefaultCheckedKeys' would be removed in 9.0.0. Please use 'nzCheckedKeys' instead.");
                this.nzDefaultSubject.next({ type: 'nzCheckedKeys', keys: value });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTreeComponent.prototype, "nzExpandedKeys", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.nzDefaultSubject.next({ type: 'nzExpandedKeys', keys: value });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTreeComponent.prototype, "nzSelectedKeys", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.nzDefaultSubject.next({ type: 'nzSelectedKeys', keys: value });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTreeComponent.prototype, "nzCheckedKeys", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.nzDefaultSubject.next({ type: 'nzCheckedKeys', keys: value });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTreeComponent.prototype, "nzSearchValue", {
            get: /**
             * @return {?}
             */
            function () {
                return this._searchValue;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._searchValue = value;
                this.nzTreeService.searchExpand(value);
                if (core$1.isNotNil(value)) {
                    this.nzSearchValueChange.emit(this.nzTreeService.formatEvent('search', null, null));
                    /**
                     * @deprecated 9.0.0 - use `nzOnSearchNode` instead.
                     * Hide warning, need remove next version
                     */
                    this.nzOnSearchNode.emit(this.nzTreeService.formatEvent('search', null, null));
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTreeComponent.prototype, "nzNodes", {
            /**
             * To render nodes if root is changed.
             */
            get: /**
             * To render nodes if root is changed.
             * @return {?}
             */
            function () {
                return this.nzTreeService.rootNodes;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NzTreeComponent.prototype.setClassMap = /**
         * @return {?}
         */
        function () {
            var _a;
            this.classMap = (_a = {},
                _a[this.prefixCls] = true,
                _a[this.prefixCls + '-show-line'] = this.nzShowLine,
                _a[this.prefixCls + "-icon-hide"] = !this.nzShowIcon,
                _a[this.prefixCls + "-block-node"] = this.nzBlockNode,
                _a['draggable-tree'] = this.nzDraggable,
                _a['ant-select-tree'] = this.nzSelectMode,
                _a);
        };
        /**
         * @param {?} value
         * @return {?}
         */
        NzTreeComponent.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.initNzData(value);
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        NzTreeComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onChange = fn;
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        NzTreeComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onTouched = fn;
        };
        // tslint:disable-next-line:no-any
        // tslint:disable-next-line:no-any
        /**
         * @param {?} value
         * @return {?}
         */
        NzTreeComponent.prototype.initNzData = 
        // tslint:disable-next-line:no-any
        /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (Array.isArray(value)) {
                this.nzTreeService.isCheckStrictly = this.nzCheckStrictly;
                this.nzTreeService.isMultiple = this.nzMultiple;
                this.nzTreeService.initTree(this.coerceTreeNodes(value));
            }
        };
        /**
         * @return {?}
         */
        NzTreeComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.setClassMap();
            this.nzDefaultSubject.pipe(operators.takeUntil(this.destroy$)).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                if (!data || !data.keys) {
                    return;
                }
                switch (data.type) {
                    case 'nzExpandedKeys':
                        _this.nzTreeService.calcExpandedKeys(data.keys, _this.nzNodes);
                        _this.nzExpandedKeysChange.emit(data.keys);
                        break;
                    case 'nzSelectedKeys':
                        _this.nzTreeService.calcSelectedKeys(data.keys, _this.nzNodes, _this.nzMultiple);
                        _this.nzSelectedKeysChange.emit(data.keys);
                        break;
                    case 'nzCheckedKeys':
                        _this.nzTreeService.calcCheckedKeys(data.keys, _this.nzNodes, _this.nzCheckStrictly);
                        _this.nzCheckedKeysChange.emit(data.keys);
                        break;
                }
                _this.cdr.markForCheck();
            }));
            this.nzTreeService
                .eventTriggerChanged()
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                switch (data.eventName) {
                    case 'expand':
                        _this.nzExpandChange.emit(data);
                        break;
                    case 'click':
                        _this.nzClick.emit(data);
                        break;
                    case 'check':
                        _this.nzCheckBoxChange.emit(data);
                        break;
                    case 'dblclick':
                        _this.nzDblClick.emit(data);
                        break;
                    case 'contextmenu':
                        _this.nzContextMenu.emit(data);
                        break;
                    // drag drop
                    case 'dragstart':
                        _this.nzOnDragStart.emit(data);
                        break;
                    case 'dragenter':
                        _this.nzOnDragEnter.emit(data);
                        break;
                    case 'dragover':
                        _this.nzOnDragOver.emit(data);
                        break;
                    case 'dragleave':
                        _this.nzOnDragLeave.emit(data);
                        break;
                    case 'drop':
                        _this.nzOnDrop.emit(data);
                        break;
                    case 'dragend':
                        _this.nzOnDragEnd.emit(data);
                        break;
                }
            }));
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        NzTreeComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.nzCheckStrictly) {
                this.nzTreeService.isCheckStrictly = this.nzCheckStrictly;
            }
            if (changes.nzMultiple) {
                this.nzTreeService.isMultiple = this.nzMultiple;
            }
        };
        /**
         * @return {?}
         */
        NzTreeComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        /** @nocollapse */
        NzTreeComponent.ctorParameters = function () { return [
            { type: core$1.NzTreeBaseService },
            { type: core$1.NzConfigService },
            { type: core.ChangeDetectorRef },
            { type: core$1.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] }
        ]; };
        NzTreeComponent.propDecorators = {
            nzShowIcon: [{ type: core.Input }],
            nzShowExpand: [{ type: core.Input }],
            nzShowLine: [{ type: core.Input }],
            nzExpandedIcon: [{ type: core.Input }],
            nzCheckable: [{ type: core.Input }],
            nzAsyncData: [{ type: core.Input }],
            nzDraggable: [{ type: core.Input }],
            nzHideUnMatched: [{ type: core.Input }],
            nzSelectMode: [{ type: core.Input }],
            nzCheckStrictly: [{ type: core.Input }],
            nzBlockNode: [{ type: core.Input }],
            nzExpandAll: [{ type: core.Input }],
            nzTreeTemplate: [{ type: core.Input }],
            nzTreeTemplateChild: [{ type: core.ContentChild, args: ['nzTreeTemplate', { static: true },] }],
            nzDefaultExpandAll: [{ type: core.Input }],
            nzBeforeDrop: [{ type: core.Input }],
            nzMultiple: [{ type: core.Input }],
            nzData: [{ type: core.Input }],
            nzDefaultExpandedKeys: [{ type: core.Input }],
            nzDefaultSelectedKeys: [{ type: core.Input }],
            nzDefaultCheckedKeys: [{ type: core.Input }],
            nzExpandedKeys: [{ type: core.Input }],
            nzSelectedKeys: [{ type: core.Input }],
            nzCheckedKeys: [{ type: core.Input }],
            nzSearchValue: [{ type: core.Input }],
            nzExpandedKeysChange: [{ type: core.Output }],
            nzSelectedKeysChange: [{ type: core.Output }],
            nzCheckedKeysChange: [{ type: core.Output }],
            nzSearchValueChange: [{ type: core.Output }],
            nzOnSearchNode: [{ type: core.Output }],
            nzClick: [{ type: core.Output }],
            nzDblClick: [{ type: core.Output }],
            nzContextMenu: [{ type: core.Output }],
            nzCheckBoxChange: [{ type: core.Output }],
            nzExpandChange: [{ type: core.Output }],
            nzOnDragStart: [{ type: core.Output }],
            nzOnDragEnter: [{ type: core.Output }],
            nzOnDragOver: [{ type: core.Output }],
            nzOnDragLeave: [{ type: core.Output }],
            nzOnDrop: [{ type: core.Output }],
            nzOnDragEnd: [{ type: core.Output }]
        };
        __decorate([
            core$1.InputBoolean(), core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, false),
            __metadata("design:type", Boolean)
        ], NzTreeComponent.prototype, "nzShowIcon", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzTreeComponent.prototype, "nzShowExpand", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTreeComponent.prototype, "nzShowLine", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTreeComponent.prototype, "nzCheckable", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTreeComponent.prototype, "nzAsyncData", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzTreeComponent.prototype, "nzDraggable", void 0);
        __decorate([
            core$1.InputBoolean(), core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, false),
            __metadata("design:type", Boolean)
        ], NzTreeComponent.prototype, "nzHideUnMatched", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTreeComponent.prototype, "nzSelectMode", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTreeComponent.prototype, "nzCheckStrictly", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, false), core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzTreeComponent.prototype, "nzBlockNode", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTreeComponent.prototype, "nzExpandAll", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean),
            __metadata("design:paramtypes", [Boolean])
        ], NzTreeComponent.prototype, "nzDefaultExpandAll", null);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTreeComponent.prototype, "nzMultiple", void 0);
NzTreeComponent.ɵfac = function NzTreeComponent_Factory(t) { return new (t || NzTreeComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzTreeBaseService), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzConfigService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzNoAnimationDirective, 9)); };
NzTreeComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTreeComponent, selectors: [["nz-tree"]], contentQueries: function NzTreeComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵstaticContentQuery(dirIndex, _c2, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nzTreeTemplateChild = _t.first);
    } }, inputs: { nzDefaultExpandAll: "nzDefaultExpandAll", nzData: "nzData", nzDefaultExpandedKeys: "nzDefaultExpandedKeys", nzDefaultSelectedKeys: "nzDefaultSelectedKeys", nzDefaultCheckedKeys: "nzDefaultCheckedKeys", nzExpandedKeys: "nzExpandedKeys", nzSelectedKeys: "nzSelectedKeys", nzCheckedKeys: "nzCheckedKeys", nzSearchValue: "nzSearchValue", nzShowIcon: "nzShowIcon", nzShowExpand: "nzShowExpand", nzShowLine: "nzShowLine", nzExpandedIcon: "nzExpandedIcon", nzCheckable: "nzCheckable", nzAsyncData: "nzAsyncData", nzDraggable: "nzDraggable", nzHideUnMatched: "nzHideUnMatched", nzSelectMode: "nzSelectMode", nzCheckStrictly: "nzCheckStrictly", nzBlockNode: "nzBlockNode", nzExpandAll: "nzExpandAll", nzTreeTemplate: "nzTreeTemplate", nzBeforeDrop: "nzBeforeDrop", nzMultiple: "nzMultiple" }, outputs: { nzExpandedKeysChange: "nzExpandedKeysChange", nzSelectedKeysChange: "nzSelectedKeysChange", nzCheckedKeysChange: "nzCheckedKeysChange", nzSearchValueChange: "nzSearchValueChange", nzOnSearchNode: "nzOnSearchNode", nzClick: "nzClick", nzDblClick: "nzDblClick", nzContextMenu: "nzContextMenu", nzCheckBoxChange: "nzCheckBoxChange", nzExpandChange: "nzExpandChange", nzOnDragStart: "nzOnDragStart", nzOnDragEnter: "nzOnDragEnter", nzOnDragOver: "nzOnDragOver", nzOnDragLeave: "nzOnDragLeave", nzOnDrop: "nzOnDrop", nzOnDragEnd: "nzOnDragEnd" }, exportAs: ["nzTree"], features: [ɵngcc0.ɵɵProvidersFeature([
            NzTreeService,
            {
                provide: core$1.NzTreeBaseService,
                useFactory: NzTreeServiceFactory,
                deps: [[new core.SkipSelf(), new core.Optional(), core$1.NzTreeHigherOrderServiceToken], NzTreeService]
            },
            {
                provide: forms.NG_VALUE_ACCESSOR,
                useExisting: core.forwardRef(( /**
                 * @return {?}
                 */function () { return NzTreeComponent; })),
                multi: true
            }
        ]), ɵngcc0.ɵɵInheritDefinitionFeature, ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 2, consts: [["role", "tree", "unselectable", "on", 3, "ngClass"], [4, "ngFor", "ngForOf"], [3, "nzTreeNode", "nzSelectMode", "nzShowLine", "nzExpandedIcon", "nzDraggable", "nzCheckable", "nzShowExpand", "nzAsyncData", "nzSearchValue", "nzHideUnMatched", "nzBeforeDrop", "nzExpandAll", "nzShowIcon", "nzTreeTemplate", "nzNoAnimation"]], template: function NzTreeComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ul", 0);
        ɵngcc0.ɵɵtemplate(1, NzTreeComponent_ng_container_1_Template, 2, 16, "ng-container", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngClass", ctx.classMap);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.nzNodes);
    } }, directives: [ɵngcc2.NgClass, ɵngcc2.NgForOf, NzTreeNodeComponent, ɵngcc1.NzNoAnimationDirective], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTreeComponent, [{
        type: core.Component,
        args: [{
                selector: 'nz-tree',
                exportAs: 'nzTree',
                template: "<ul\r\n  role=\"tree\"\r\n  unselectable=\"on\"\r\n  [ngClass]=\"classMap\">\r\n  <ng-container *ngFor=\"let node of nzNodes\">\r\n    <nz-tree-node\r\n      [nzTreeNode]=\"node\"\r\n      [nzSelectMode]=\"nzSelectMode\"\r\n      [nzShowLine]=\"nzShowLine\"\r\n      [nzExpandedIcon]=\"nzExpandedIcon\"\r\n      [nzDraggable]=\"nzDraggable\"\r\n      [nzCheckable]=\"nzCheckable\"\r\n      [nzShowExpand]=\"nzShowExpand\"\r\n      [nzAsyncData]=\"nzAsyncData\"\r\n      [nzSearchValue]=\"nzSearchValue\"\r\n      [nzHideUnMatched]=\"nzHideUnMatched\"\r\n      [nzBeforeDrop]=\"nzBeforeDrop\"\r\n      [nzExpandAll]=\"nzExpandAll\"\r\n      [nzShowIcon]=\"nzShowIcon\"\r\n      [nzTreeTemplate]=\"treeTemplate\"\r\n      [@.disabled]=\"noAnimation?.nzNoAnimation\"\r\n      [nzNoAnimation]=\"noAnimation?.nzNoAnimation\">\r\n    </nz-tree-node>\r\n  </ng-container>\r\n</ul>",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                providers: [
                    NzTreeService,
                    {
                        provide: core$1.NzTreeBaseService,
                        useFactory: NzTreeServiceFactory,
                        deps: [[new core.SkipSelf(), new core.Optional(), core$1.NzTreeHigherOrderServiceToken], NzTreeService]
                    },
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(( /**
                         * @return {?}
                         */function () { return NzTreeComponent; })),
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: ɵngcc1.NzTreeBaseService }, { type: ɵngcc1.NzConfigService }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc1.NzNoAnimationDirective, decorators: [{
                type: core.Host
            }, {
                type: core.Optional
            }] }]; }, { nzDefaultExpandAll: [{
            type: core.Input
        }], nzData: [{
            type: core.Input
        }], nzDefaultExpandedKeys: [{
            type: core.Input
        }], nzDefaultSelectedKeys: [{
            type: core.Input
        }], nzDefaultCheckedKeys: [{
            type: core.Input
        }], nzExpandedKeys: [{
            type: core.Input
        }], nzSelectedKeys: [{
            type: core.Input
        }], nzCheckedKeys: [{
            type: core.Input
        }], nzSearchValue: [{
            type: core.Input
        }], nzShowIcon: [{
            type: core.Input
        }], nzShowExpand: [{
            type: core.Input
        }], nzShowLine: [{
            type: core.Input
        }], nzExpandedIcon: [{
            type: core.Input
        }], nzCheckable: [{
            type: core.Input
        }], nzAsyncData: [{
            type: core.Input
        }], nzDraggable: [{
            type: core.Input
        }], nzHideUnMatched: [{
            type: core.Input
        }], nzSelectMode: [{
            type: core.Input
        }], nzCheckStrictly: [{
            type: core.Input
        }], nzBlockNode: [{
            type: core.Input
        }], nzExpandAll: [{
            type: core.Input
        }], nzTreeTemplate: [{
            type: core.Input
        }], nzTreeTemplateChild: [{
            type: core.ContentChild,
            args: ['nzTreeTemplate', { static: true }]
        }], nzBeforeDrop: [{
            type: core.Input
        }], nzMultiple: [{
            type: core.Input
        }], nzExpandedKeysChange: [{
            type: core.Output
        }], nzSelectedKeysChange: [{
            type: core.Output
        }], nzCheckedKeysChange: [{
            type: core.Output
        }], nzSearchValueChange: [{
            type: core.Output
        }], nzOnSearchNode: [{
            type: core.Output
        }], nzClick: [{
            type: core.Output
        }], nzDblClick: [{
            type: core.Output
        }], nzContextMenu: [{
            type: core.Output
        }], nzCheckBoxChange: [{
            type: core.Output
        }], nzExpandChange: [{
            type: core.Output
        }], nzOnDragStart: [{
            type: core.Output
        }], nzOnDragEnter: [{
            type: core.Output
        }], nzOnDragOver: [{
            type: core.Output
        }], nzOnDragLeave: [{
            type: core.Output
        }], nzOnDrop: [{
            type: core.Output
        }], nzOnDragEnd: [{
            type: core.Output
        }] }); })();
        return NzTreeComponent;
    }(core$1.NzTreeBase));
    if (false) {
        /** @type {?} */
        NzTreeComponent.prototype.nzShowIcon;
        /** @type {?} */
        NzTreeComponent.prototype.nzShowExpand;
        /** @type {?} */
        NzTreeComponent.prototype.nzShowLine;
        /** @type {?} */
        NzTreeComponent.prototype.nzExpandedIcon;
        /** @type {?} */
        NzTreeComponent.prototype.nzCheckable;
        /** @type {?} */
        NzTreeComponent.prototype.nzAsyncData;
        /** @type {?} */
        NzTreeComponent.prototype.nzDraggable;
        /** @type {?} */
        NzTreeComponent.prototype.nzHideUnMatched;
        /** @type {?} */
        NzTreeComponent.prototype.nzSelectMode;
        /** @type {?} */
        NzTreeComponent.prototype.nzCheckStrictly;
        /** @type {?} */
        NzTreeComponent.prototype.nzBlockNode;
        /** @type {?} */
        NzTreeComponent.prototype.nzExpandAll;
        /** @type {?} */
        NzTreeComponent.prototype.nzTreeTemplate;
        /** @type {?} */
        NzTreeComponent.prototype.nzTreeTemplateChild;
        /**
         * @type {?}
         * @private
         */
        NzTreeComponent.prototype._nzDefaultExpandAll;
        /** @type {?} */
        NzTreeComponent.prototype.nzBeforeDrop;
        /** @type {?} */
        NzTreeComponent.prototype.nzMultiple;
        /** @type {?} */
        NzTreeComponent.prototype.nzExpandedKeysChange;
        /** @type {?} */
        NzTreeComponent.prototype.nzSelectedKeysChange;
        /** @type {?} */
        NzTreeComponent.prototype.nzCheckedKeysChange;
        /** @type {?} */
        NzTreeComponent.prototype.nzSearchValueChange;
        /**
         * @deprecated use `nzSearchValueChange` instead.
         * @type {?}
         */
        NzTreeComponent.prototype.nzOnSearchNode;
        /** @type {?} */
        NzTreeComponent.prototype.nzClick;
        /** @type {?} */
        NzTreeComponent.prototype.nzDblClick;
        /** @type {?} */
        NzTreeComponent.prototype.nzContextMenu;
        /** @type {?} */
        NzTreeComponent.prototype.nzCheckBoxChange;
        /** @type {?} */
        NzTreeComponent.prototype.nzExpandChange;
        /** @type {?} */
        NzTreeComponent.prototype.nzOnDragStart;
        /** @type {?} */
        NzTreeComponent.prototype.nzOnDragEnter;
        /** @type {?} */
        NzTreeComponent.prototype.nzOnDragOver;
        /** @type {?} */
        NzTreeComponent.prototype.nzOnDragLeave;
        /** @type {?} */
        NzTreeComponent.prototype.nzOnDrop;
        /** @type {?} */
        NzTreeComponent.prototype.nzOnDragEnd;
        /** @type {?} */
        NzTreeComponent.prototype._searchValue;
        /** @type {?} */
        NzTreeComponent.prototype.nzDefaultSubject;
        /** @type {?} */
        NzTreeComponent.prototype.destroy$;
        /** @type {?} */
        NzTreeComponent.prototype.prefixCls;
        /** @type {?} */
        NzTreeComponent.prototype.classMap;
        /** @type {?} */
        NzTreeComponent.prototype.onChange;
        /** @type {?} */
        NzTreeComponent.prototype.onTouched;
        /** @type {?} */
        NzTreeComponent.prototype.nzConfigService;
        /**
         * @type {?}
         * @private
         */
        NzTreeComponent.prototype.cdr;
        /** @type {?} */
        NzTreeComponent.prototype.noAnimation;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzTreeModule = /** @class */ (function () {
        function NzTreeModule() {
        }
NzTreeModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzTreeModule });
NzTreeModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzTreeModule_Factory(t) { return new (t || NzTreeModule)(); }, imports: [[common.CommonModule, core$1.NzAddOnModule, icon.NzIconModule, core$1.NzNoAnimationModule, core$1.NzHighlightModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzTreeModule, { declarations: [NzTreeComponent,
        NzTreeNodeComponent], imports: [ɵngcc2.CommonModule, ɵngcc1.NzAddOnModule, ɵngcc3.NzIconModule, ɵngcc1.NzNoAnimationModule, ɵngcc1.NzHighlightModule], exports: [NzTreeComponent,
        NzTreeNodeComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTreeModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule, core$1.NzAddOnModule, icon.NzIconModule, core$1.NzNoAnimationModule, core$1.NzHighlightModule],
                declarations: [NzTreeComponent, NzTreeNodeComponent],
                exports: [NzTreeComponent, NzTreeNodeComponent]
            }]
    }], function () { return []; }, null); })();
        return NzTreeModule;
    }());

    exports.NzTreeComponent = NzTreeComponent;
    exports.NzTreeModule = NzTreeModule;
    exports.NzTreeNodeComponent = NzTreeNodeComponent;
    exports.NzTreeService = NzTreeService;
    exports.NzTreeServiceFactory = NzTreeServiceFactory;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-zorro-antd-tree.umd.js.map
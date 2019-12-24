/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Host, Input, Optional, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzNoAnimationDirective, zoomMotion } from 'ng-zorro-antd/core';
import { NzSelectService } from './nz-select.service';
import * as i0 from "@angular/core";
import * as i1 from "./nz-select.service";
import * as i2 from "ng-zorro-antd/core";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
import * as i5 from "./nz-select-unselectable.directive";
import * as i6 from "ng-zorro-antd/icon";
var _c0 = ["inputElement"];
var _c1 = ["mirrorElement"];
var _c2 = ["nz-select-top-control", ""];
function NzSelectTopControlComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    var _r1509 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 6, 7);
    i0.ɵɵlistener("compositionstart", function NzSelectTopControlComponent_ng_template_0_Template_input_compositionstart_0_listener($event) { i0.ɵɵrestoreView(_r1509); var ctx_r1508 = i0.ɵɵnextContext(); return ctx_r1508.isComposing = true; })("compositionend", function NzSelectTopControlComponent_ng_template_0_Template_input_compositionend_0_listener($event) { i0.ɵɵrestoreView(_r1509); var ctx_r1510 = i0.ɵɵnextContext(); return ctx_r1510.isComposing = false; })("ngModelChange", function NzSelectTopControlComponent_ng_template_0_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r1509); var ctx_r1511 = i0.ɵɵnextContext(); return ctx_r1511.setInputValue($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(2, "span", 8, 9);
} if (rf & 2) {
    var ctx_r1500 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngModel", ctx_r1500.inputValue)("disabled", ctx_r1500.nzSelectService.disabled);
} }
function NzSelectTopControlComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1501 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("display", ctx_r1501.placeHolderDisplay);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1501.nzPlaceHolder, " ");
} }
function NzSelectTopControlComponent_ng_container_4_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementContainerStart(1);
    i0.ɵɵtext(2);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1514 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1514.nzSelectService.listOfCachedSelectedOption[0] == null ? null : ctx_r1514.nzSelectService.listOfCachedSelectedOption[0].nzLabel);
} }
var _c3 = function (a0) { return { $implicit: a0 }; };
function NzSelectTopControlComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵtemplate(1, NzSelectTopControlComponent_ng_container_4_div_1_ng_container_1_Template, 3, 1, "ng-container", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1512 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngStyle", ctx_r1512.selectedValueStyle);
    i0.ɵɵattribute("title", ctx_r1512.nzSelectService.listOfCachedSelectedOption[0] == null ? null : ctx_r1512.nzSelectService.listOfCachedSelectedOption[0].nzLabel);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r1512.nzCustomTemplate)("nzStringTemplateOutletContext", i0.ɵɵpureFunction1(4, _c3, ctx_r1512.nzSelectService.listOfCachedSelectedOption[0]));
} }
function NzSelectTopControlComponent_ng_container_4_div_2_ng_template_2_Template(rf, ctx) { }
function NzSelectTopControlComponent_ng_container_4_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵelementStart(1, "div", 16);
    i0.ɵɵtemplate(2, NzSelectTopControlComponent_ng_container_4_div_2_ng_template_2_Template, 0, 0, "ng-template", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1513 = i0.ɵɵnextContext(2);
    var _r1499 = i0.ɵɵreference(1);
    i0.ɵɵstyleProp("display", ctx_r1513.nzOpen ? "block" : "none");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", _r1499);
} }
function NzSelectTopControlComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzSelectTopControlComponent_ng_container_4_div_1_Template, 2, 6, "div", 11);
    i0.ɵɵtemplate(2, NzSelectTopControlComponent_ng_container_4_div_2_Template, 3, 2, "div", 12);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1502 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1502.nzSelectService.listOfCachedSelectedOption.length && ctx_r1502.nzSelectService.listOfSelectedValue.length);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1502.nzShowSearch);
} }
function NzSelectTopControlComponent_ul_5_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 22);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var option_r1519 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(option_r1519.nzLabel);
} }
function NzSelectTopControlComponent_ul_5_ng_container_1_span_3_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 25);
} }
function NzSelectTopControlComponent_ul_5_ng_container_1_span_3_Template(rf, ctx) { if (rf & 1) {
    var _r1526 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 23);
    i0.ɵɵlistener("mousedown", function NzSelectTopControlComponent_ul_5_ng_container_1_span_3_Template_span_mousedown_0_listener($event) { i0.ɵɵrestoreView(_r1526); return $event.preventDefault(); })("click", function NzSelectTopControlComponent_ul_5_ng_container_1_span_3_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r1526); var option_r1519 = i0.ɵɵnextContext().$implicit; var ctx_r1527 = i0.ɵɵnextContext(2); return ctx_r1527.removeSelectedValue(option_r1519, $event); });
    i0.ɵɵtemplate(1, NzSelectTopControlComponent_ul_5_ng_container_1_span_3_i_1_Template, 1, 0, "i", 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1522 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1522.nzRemoveIcon)("ngIfElse", ctx_r1522.nzRemoveIcon);
} }
function NzSelectTopControlComponent_ul_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    var _r1530 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "li", 20);
    i0.ɵɵlistener("@zoomMotion.done", function NzSelectTopControlComponent_ul_5_ng_container_1_Template_li_animation_zoomMotion_done_1_listener($event) { i0.ɵɵrestoreView(_r1530); var ctx_r1529 = i0.ɵɵnextContext(2); return ctx_r1529.animationEnd(); });
    i0.ɵɵtemplate(2, NzSelectTopControlComponent_ul_5_ng_container_1_ng_container_2_Template, 3, 1, "ng-container", 14);
    i0.ɵɵtemplate(3, NzSelectTopControlComponent_ul_5_ng_container_1_span_3_Template, 2, 2, "span", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var option_r1519 = ctx.$implicit;
    var index_r1520 = ctx.index;
    var ctx_r1516 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("ant-select-selection__choice__disabled", option_r1519.nzDisabled);
    i0.ɵɵproperty("@zoomMotion", undefined)("@.disabled", ctx_r1516.noAnimation == null ? null : ctx_r1516.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r1516.noAnimation == null ? null : ctx_r1516.noAnimation.nzNoAnimation);
    i0.ɵɵattribute("title", option_r1519.nzLabel);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r1516.nzCustomTemplate)("nzStringTemplateOutletContext", i0.ɵɵpureFunction1(8, _c3, ctx_r1516.nzSelectService.listOfCachedSelectedOption[index_r1520]));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !option_r1519.nzDisabled);
} }
function NzSelectTopControlComponent_ul_5_li_3_ng_container_2_ng_template_1_Template(rf, ctx) { }
function NzSelectTopControlComponent_ul_5_li_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzSelectTopControlComponent_ul_5_li_3_ng_container_2_ng_template_1_Template, 0, 0, "ng-template", 26);
    i0.ɵɵpipe(2, "slice");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1531 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1531.nzMaxTagPlaceholder)("ngTemplateOutletContext", i0.ɵɵpureFunction1(5, _c3, i0.ɵɵpipeBind2(2, 2, ctx_r1531.nzSelectService.listOfSelectedValue, ctx_r1531.nzMaxTagCount)));
} }
function NzSelectTopControlComponent_ul_5_li_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1532 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" + ", ctx_r1532.nzSelectService.listOfCachedSelectedOption.length - ctx_r1532.nzMaxTagCount, " ... ");
} }
function NzSelectTopControlComponent_ul_5_li_3_Template(rf, ctx) { if (rf & 1) {
    var _r1535 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 20);
    i0.ɵɵlistener("@zoomMotion.done", function NzSelectTopControlComponent_ul_5_li_3_Template_li_animation_zoomMotion_done_0_listener($event) { i0.ɵɵrestoreView(_r1535); var ctx_r1534 = i0.ɵɵnextContext(2); return ctx_r1534.animationEnd(); });
    i0.ɵɵelementStart(1, "div", 22);
    i0.ɵɵtemplate(2, NzSelectTopControlComponent_ul_5_li_3_ng_container_2_Template, 3, 7, "ng-container", 3);
    i0.ɵɵtemplate(3, NzSelectTopControlComponent_ul_5_li_3_ng_container_3_Template, 2, 1, "ng-container", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1517 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("@zoomMotion", undefined)("@.disabled", ctx_r1517.noAnimation == null ? null : ctx_r1517.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r1517.noAnimation == null ? null : ctx_r1517.noAnimation.nzNoAnimation);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1517.nzMaxTagPlaceholder);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1517.nzMaxTagPlaceholder);
} }
function NzSelectTopControlComponent_ul_5_ng_template_5_Template(rf, ctx) { }
function NzSelectTopControlComponent_ul_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul");
    i0.ɵɵtemplate(1, NzSelectTopControlComponent_ul_5_ng_container_1_Template, 4, 10, "ng-container", 18);
    i0.ɵɵpipe(2, "slice");
    i0.ɵɵtemplate(3, NzSelectTopControlComponent_ul_5_li_3_Template, 4, 5, "li", 19);
    i0.ɵɵelementStart(4, "li", 15);
    i0.ɵɵtemplate(5, NzSelectTopControlComponent_ul_5_ng_template_5_Template, 0, 0, "ng-template", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1503 = i0.ɵɵnextContext();
    var _r1499 = i0.ɵɵreference(1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind3(2, 4, ctx_r1503.nzSelectService.listOfCachedSelectedOption, 0, ctx_r1503.nzMaxTagCount))("ngForTrackBy", ctx_r1503.trackValue);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1503.nzSelectService.listOfCachedSelectedOption.length > ctx_r1503.nzMaxTagCount);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", _r1499);
} }
function NzSelectTopControlComponent_span_6_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 29);
} }
function NzSelectTopControlComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    var _r1538 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 27);
    i0.ɵɵlistener("mousedown", function NzSelectTopControlComponent_span_6_Template_span_mousedown_0_listener($event) { i0.ɵɵrestoreView(_r1538); return $event.preventDefault(); })("click", function NzSelectTopControlComponent_span_6_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r1538); var ctx_r1539 = i0.ɵɵnextContext(); return ctx_r1539.onClearSelection($event); });
    i0.ɵɵtemplate(1, NzSelectTopControlComponent_span_6_i_1_Template, 1, 0, "i", 28);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1504 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1504.nzClearIcon)("ngIfElse", ctx_r1504.nzClearIcon);
} }
function NzSelectTopControlComponent_span_7_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 33);
} }
function NzSelectTopControlComponent_span_7_ng_template_2_i_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 35);
} }
function NzSelectTopControlComponent_span_7_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NzSelectTopControlComponent_span_7_ng_template_2_i_0_Template, 1, 0, "i", 34);
} if (rf & 2) {
    var ctx_r1542 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", !ctx_r1542.nzSuffixIcon)("ngIfElse", ctx_r1542.nzSuffixIcon);
} }
function NzSelectTopControlComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 30);
    i0.ɵɵtemplate(1, NzSelectTopControlComponent_span_7_i_1_Template, 1, 0, "i", 31);
    i0.ɵɵtemplate(2, NzSelectTopControlComponent_span_7_ng_template_2_Template, 1, 2, "ng-template", null, 32, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var _r1541 = i0.ɵɵreference(3);
    var ctx_r1505 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1505.nzLoading)("ngIfElse", _r1541);
} }
var NzSelectTopControlComponent = /** @class */ (function () {
    function NzSelectTopControlComponent(renderer, nzSelectService, cdr, noAnimation) {
        this.renderer = renderer;
        this.nzSelectService = nzSelectService;
        this.cdr = cdr;
        this.noAnimation = noAnimation;
        this.isComposing = false;
        this.destroy$ = new Subject();
        this.nzShowSearch = false;
        this.nzOpen = false;
        this.nzAllowClear = false;
        this.nzShowArrow = true;
        this.nzLoading = false;
        this.nzTokenSeparators = [];
    }
    NzSelectTopControlComponent.prototype.onClearSelection = function (e) {
        e.stopPropagation();
        this.nzSelectService.updateListOfSelectedValue([], true);
    };
    NzSelectTopControlComponent.prototype.setInputValue = function (value) {
        /** fix clear value https://github.com/NG-ZORRO/ng-zorro-antd/issues/3825 **/
        if (this.inputDOM && !value) {
            this.inputDOM.value = value;
        }
        this.inputValue = value;
        this.updateWidth();
        this.nzSelectService.updateSearchValue(value);
        this.nzSelectService.tokenSeparate(this.inputValue, this.nzTokenSeparators);
    };
    Object.defineProperty(NzSelectTopControlComponent.prototype, "mirrorDOM", {
        get: function () {
            return this.mirrorElement && this.mirrorElement.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectTopControlComponent.prototype, "inputDOM", {
        get: function () {
            return this.inputElement && this.inputElement.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectTopControlComponent.prototype, "placeHolderDisplay", {
        get: function () {
            return this.inputValue || this.isComposing || this.nzSelectService.listOfSelectedValue.length ? 'none' : 'block';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectTopControlComponent.prototype, "selectedValueStyle", {
        get: function () {
            var showSelectedValue = false;
            var opacity = 1;
            if (!this.nzShowSearch) {
                showSelectedValue = true;
            }
            else {
                if (this.nzOpen) {
                    showSelectedValue = !(this.inputValue || this.isComposing);
                    if (showSelectedValue) {
                        opacity = 0.4;
                    }
                }
                else {
                    showSelectedValue = true;
                }
            }
            return {
                display: showSelectedValue ? 'block' : 'none',
                opacity: "" + opacity
            };
        },
        enumerable: true,
        configurable: true
    });
    // tslint:disable-next-line:no-any
    NzSelectTopControlComponent.prototype.trackValue = function (_index, option) {
        return option.nzValue;
    };
    NzSelectTopControlComponent.prototype.updateWidth = function () {
        if (this.mirrorDOM && this.inputDOM && this.inputDOM.value) {
            this.mirrorDOM.innerText = this.inputDOM.value + "&nbsp;";
            this.renderer.removeStyle(this.inputDOM, 'width');
            this.renderer.setStyle(this.inputDOM, 'width', this.mirrorDOM.clientWidth + "px");
        }
        else if (this.inputDOM) {
            this.renderer.removeStyle(this.inputDOM, 'width');
            this.mirrorDOM.innerText = '';
        }
    };
    NzSelectTopControlComponent.prototype.removeSelectedValue = function (option, e) {
        this.nzSelectService.removeValueFormSelected(option);
        e.stopPropagation();
    };
    NzSelectTopControlComponent.prototype.animationEnd = function () {
        this.nzSelectService.animationEvent$.next();
    };
    NzSelectTopControlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nzSelectService.open$.pipe(takeUntil(this.destroy$)).subscribe(function (open) {
            if (_this.inputElement && open) {
                setTimeout(function () { return _this.inputDOM.focus(); });
            }
        });
        this.nzSelectService.clearInput$.pipe(takeUntil(this.destroy$)).subscribe(function () {
            _this.setInputValue('');
        });
        this.nzSelectService.check$.pipe(takeUntil(this.destroy$)).subscribe(function () {
            _this.cdr.markForCheck();
        });
    };
    NzSelectTopControlComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /** @nocollapse */ NzSelectTopControlComponent.ɵfac = function NzSelectTopControlComponent_Factory(t) { return new (t || NzSelectTopControlComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.NzSelectService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.NzNoAnimationDirective, 9)); };
    /** @nocollapse */ NzSelectTopControlComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzSelectTopControlComponent, selectors: [["", "nz-select-top-control", ""]], viewQuery: function NzSelectTopControlComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, true);
            i0.ɵɵviewQuery(_c1, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.mirrorElement = _t.first);
        } }, inputs: { nzShowSearch: "nzShowSearch", nzPlaceHolder: "nzPlaceHolder", nzOpen: "nzOpen", nzMaxTagCount: "nzMaxTagCount", nzAllowClear: "nzAllowClear", nzShowArrow: "nzShowArrow", nzLoading: "nzLoading", nzCustomTemplate: "nzCustomTemplate", nzSuffixIcon: "nzSuffixIcon", nzClearIcon: "nzClearIcon", nzRemoveIcon: "nzRemoveIcon", nzMaxTagPlaceholder: "nzMaxTagPlaceholder", nzTokenSeparators: "nzTokenSeparators" }, exportAs: ["nzSelectTopControl"], attrs: _c2, decls: 8, vars: 5, consts: [["inputTemplate", ""], [1, "ant-select-selection__rendered"], ["nz-select-unselectable", "", "class", "ant-select-selection__placeholder", 3, "display", 4, "ngIf"], [4, "ngIf"], ["class", "ant-select-selection__clear", "nz-select-unselectable", "", 3, "mousedown", "click", 4, "ngIf"], ["class", "ant-select-arrow", "nz-select-unselectable", "", 4, "ngIf"], ["autocomplete", "something-new", 1, "ant-select-search__field", 3, "ngModel", "disabled", "compositionstart", "compositionend", "ngModelChange"], ["inputElement", ""], [1, "ant-select-search__field__mirror"], ["mirrorElement", ""], ["nz-select-unselectable", "", 1, "ant-select-selection__placeholder"], ["class", "ant-select-selection-selected-value", 3, "ngStyle", 4, "ngIf"], ["class", "ant-select-search ant-select-search--inline", 3, "display", 4, "ngIf"], [1, "ant-select-selection-selected-value", 3, "ngStyle"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], [1, "ant-select-search", "ant-select-search--inline"], [1, "ant-select-search__field__wrap"], [3, "ngTemplateOutlet"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "ant-select-selection__choice", 3, "nzNoAnimation", 4, "ngIf"], [1, "ant-select-selection__choice", 3, "nzNoAnimation"], ["class", "ant-select-selection__choice__remove", 3, "mousedown", "click", 4, "ngIf"], [1, "ant-select-selection__choice__content"], [1, "ant-select-selection__choice__remove", 3, "mousedown", "click"], ["nz-icon", "", "nzType", "close", "class", "ant-select-remove-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "close", 1, "ant-select-remove-icon"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["nz-select-unselectable", "", 1, "ant-select-selection__clear", 3, "mousedown", "click"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", "class", "ant-select-close-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", 1, "ant-select-close-icon"], ["nz-select-unselectable", "", 1, "ant-select-arrow"], ["nz-icon", "", "nzType", "loading", 4, "ngIf", "ngIfElse"], ["defaultArrow", ""], ["nz-icon", "", "nzType", "loading"], ["nz-icon", "", "nzType", "down", "class", "ant-select-arrow-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "down", 1, "ant-select-arrow-icon"]], template: function NzSelectTopControlComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, NzSelectTopControlComponent_ng_template_0_Template, 4, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementStart(2, "div", 1);
            i0.ɵɵtemplate(3, NzSelectTopControlComponent_div_3_Template, 2, 2, "div", 2);
            i0.ɵɵtemplate(4, NzSelectTopControlComponent_ng_container_4_Template, 3, 2, "ng-container", 3);
            i0.ɵɵtemplate(5, NzSelectTopControlComponent_ul_5_Template, 6, 8, "ul", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(6, NzSelectTopControlComponent_span_6_Template, 2, 2, "span", 4);
            i0.ɵɵtemplate(7, NzSelectTopControlComponent_span_7_Template, 4, 2, "span", 5);
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.nzPlaceHolder);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.nzSelectService.isSingleMode);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.nzSelectService.isMultipleOrTags);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.nzAllowClear && ctx.nzSelectService.listOfSelectedValue.length);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.nzShowArrow);
        } }, directives: [i3.NgIf, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel, i5.NzSelectUnselectableDirective, i3.NgStyle, i2.NzStringTemplateOutletDirective, i3.NgTemplateOutlet, i3.NgForOf, i2.NzNoAnimationDirective, i6.NzIconDirective], pipes: [i3.SlicePipe], encapsulation: 2, data: { animation: [zoomMotion] }, changeDetection: 0 });
    return NzSelectTopControlComponent;
}());
export { NzSelectTopControlComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzSelectTopControlComponent, [{
        type: Component,
        args: [{
                selector: '[nz-select-top-control]',
                exportAs: 'nzSelectTopControl',
                preserveWhitespaces: false,
                animations: [zoomMotion],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                templateUrl: './nz-select-top-control.component.html'
            }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i1.NzSelectService }, { type: i0.ChangeDetectorRef }, { type: i2.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, { inputElement: [{
            type: ViewChild,
            args: ['inputElement', { static: false }]
        }], mirrorElement: [{
            type: ViewChild,
            args: ['mirrorElement', { static: false }]
        }], nzShowSearch: [{
            type: Input
        }], nzPlaceHolder: [{
            type: Input
        }], nzOpen: [{
            type: Input
        }], nzMaxTagCount: [{
            type: Input
        }], nzAllowClear: [{
            type: Input
        }], nzShowArrow: [{
            type: Input
        }], nzLoading: [{
            type: Input
        }], nzCustomTemplate: [{
            type: Input
        }], nzSuffixIcon: [{
            type: Input
        }], nzClearIcon: [{
            type: Input
        }], nzRemoveIcon: [{
            type: Input
        }], nzMaxTagPlaceholder: [{
            type: Input
        }], nzTokenSeparators: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvc2VsZWN0LyIsInNvdXJjZXMiOlsibnotc2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudC50cyIsIm56LXNlbGVjdC10b3AtY29udHJvbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLElBQUksRUFDSixLQUFLLEVBR0wsUUFBUSxFQUNSLFNBQVMsRUFDVCxXQUFXLEVBQ1gsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHeEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7Ozs7Ozs7O0lDNUJwRCxtQ0FVQTtJQU5FLHVPQUFrQyxJQUFJLElBQUMsc05BQ1AsS0FBSyxJQURFLCtOQUFBO0lBSnpDLGlCQVVBO0lBQUEsNkJBQXFFOzs7SUFKbkUsOENBQXNCLGdEQUFBOzs7SUFPeEIsK0JBTUU7SUFBQSxZQUNGO0lBQUEsaUJBQU07OztJQUpKLHVEQUFvQztJQUdwQyxlQUNGO0lBREUsd0RBQ0Y7OztJQWFJLDZCQU1FO0lBQUEsNkJBQWM7SUFBQSxZQUE0RDtJQUFBLDBCQUFlO0lBQzNGLDBCQUFlOzs7SUFEQyxlQUE0RDtJQUE1RCw4SkFBNEQ7Ozs7SUFmOUUsK0JBU0U7SUFBQSxvSEFNRTtJQUVKLGlCQUFNOzs7SUFWSixzREFBOEI7SUFEOUIsaUtBQXFFO0lBSW5FLGVBR0M7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a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsS0FBSzs7a0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBIb3N0LFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IE56Tm9BbmltYXRpb25EaXJlY3RpdmUsIHpvb21Nb3Rpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpPcHRpb25Db21wb25lbnQgfSBmcm9tICcuL256LW9wdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOelNlbGVjdFNlcnZpY2UgfSBmcm9tICcuL256LXNlbGVjdC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnW256LXNlbGVjdC10b3AtY29udHJvbF0nLFxyXG4gIGV4cG9ydEFzOiAnbnpTZWxlY3RUb3BDb250cm9sJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBhbmltYXRpb25zOiBbem9vbU1vdGlvbl0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotc2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIGlucHV0VmFsdWU6IHN0cmluZztcclxuICBpc0NvbXBvc2luZyA9IGZhbHNlO1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xyXG4gIEBWaWV3Q2hpbGQoJ2lucHV0RWxlbWVudCcsIHsgc3RhdGljOiBmYWxzZSB9KSBpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnbWlycm9yRWxlbWVudCcsIHsgc3RhdGljOiBmYWxzZSB9KSBtaXJyb3JFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIEBJbnB1dCgpIG56U2hvd1NlYXJjaCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56UGxhY2VIb2xkZXI6IHN0cmluZztcclxuICBASW5wdXQoKSBuek9wZW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBuek1heFRhZ0NvdW50OiBudW1iZXI7XHJcbiAgQElucHV0KCkgbnpBbGxvd0NsZWFyID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpTaG93QXJyb3cgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIG56TG9hZGluZyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56Q3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOek9wdGlvbkNvbXBvbmVudCB9PjtcclxuICBASW5wdXQoKSBuelN1ZmZpeEljb246IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56Q2xlYXJJY29uOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuelJlbW92ZUljb246IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBASW5wdXQoKSBuek1heFRhZ1BsYWNlaG9sZGVyOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogYW55W10gfT47XHJcbiAgQElucHV0KCkgbnpUb2tlblNlcGFyYXRvcnM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gIG9uQ2xlYXJTZWxlY3Rpb24oZTogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLnVwZGF0ZUxpc3RPZlNlbGVjdGVkVmFsdWUoW10sIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgc2V0SW5wdXRWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAvKiogZml4IGNsZWFyIHZhbHVlIGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2lzc3Vlcy8zODI1ICoqL1xyXG4gICAgaWYgKHRoaXMuaW5wdXRET00gJiYgIXZhbHVlKSB7XHJcbiAgICAgIHRoaXMuaW5wdXRET00udmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy51cGRhdGVXaWR0aCgpO1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UudXBkYXRlU2VhcmNoVmFsdWUodmFsdWUpO1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UudG9rZW5TZXBhcmF0ZSh0aGlzLmlucHV0VmFsdWUsIHRoaXMubnpUb2tlblNlcGFyYXRvcnMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG1pcnJvckRPTSgpOiBIVE1MRWxlbWVudCB7XHJcbiAgICByZXR1cm4gdGhpcy5taXJyb3JFbGVtZW50ICYmIHRoaXMubWlycm9yRWxlbWVudC5uYXRpdmVFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlucHV0RE9NKCk6IEhUTUxJbnB1dEVsZW1lbnQge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5wdXRFbGVtZW50ICYmIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBnZXQgcGxhY2VIb2xkZXJEaXNwbGF5KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5pbnB1dFZhbHVlIHx8IHRoaXMuaXNDb21wb3NpbmcgfHwgdGhpcy5uelNlbGVjdFNlcnZpY2UubGlzdE9mU2VsZWN0ZWRWYWx1ZS5sZW5ndGggPyAnbm9uZScgOiAnYmxvY2snO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNlbGVjdGVkVmFsdWVTdHlsZSgpOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcclxuICAgIGxldCBzaG93U2VsZWN0ZWRWYWx1ZSA9IGZhbHNlO1xyXG4gICAgbGV0IG9wYWNpdHkgPSAxO1xyXG4gICAgaWYgKCF0aGlzLm56U2hvd1NlYXJjaCkge1xyXG4gICAgICBzaG93U2VsZWN0ZWRWYWx1ZSA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5uek9wZW4pIHtcclxuICAgICAgICBzaG93U2VsZWN0ZWRWYWx1ZSA9ICEodGhpcy5pbnB1dFZhbHVlIHx8IHRoaXMuaXNDb21wb3NpbmcpO1xyXG4gICAgICAgIGlmIChzaG93U2VsZWN0ZWRWYWx1ZSkge1xyXG4gICAgICAgICAgb3BhY2l0eSA9IDAuNDtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2hvd1NlbGVjdGVkVmFsdWUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBkaXNwbGF5OiBzaG93U2VsZWN0ZWRWYWx1ZSA/ICdibG9jaycgOiAnbm9uZScsXHJcbiAgICAgIG9wYWNpdHk6IGAke29wYWNpdHl9YFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICB0cmFja1ZhbHVlKF9pbmRleDogbnVtYmVyLCBvcHRpb246IE56T3B0aW9uQ29tcG9uZW50KTogYW55IHtcclxuICAgIHJldHVybiBvcHRpb24ubnpWYWx1ZTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVdpZHRoKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubWlycm9yRE9NICYmIHRoaXMuaW5wdXRET00gJiYgdGhpcy5pbnB1dERPTS52YWx1ZSkge1xyXG4gICAgICB0aGlzLm1pcnJvckRPTS5pbm5lclRleHQgPSBgJHt0aGlzLmlucHV0RE9NLnZhbHVlfSZuYnNwO2A7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5pbnB1dERPTSwgJ3dpZHRoJyk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5pbnB1dERPTSwgJ3dpZHRoJywgYCR7dGhpcy5taXJyb3JET00uY2xpZW50V2lkdGh9cHhgKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5pbnB1dERPTSkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuaW5wdXRET00sICd3aWR0aCcpO1xyXG4gICAgICB0aGlzLm1pcnJvckRPTS5pbm5lclRleHQgPSAnJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZVNlbGVjdGVkVmFsdWUob3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudCwgZTogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UucmVtb3ZlVmFsdWVGb3JtU2VsZWN0ZWQob3B0aW9uKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBhbmltYXRpb25FbmQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5hbmltYXRpb25FdmVudCQubmV4dCgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwdWJsaWMgbnpTZWxlY3RTZXJ2aWNlOiBOelNlbGVjdFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2Uub3BlbiQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShvcGVuID0+IHtcclxuICAgICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50ICYmIG9wZW4pIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5wdXRET00uZm9jdXMoKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UuY2xlYXJJbnB1dCQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0SW5wdXRWYWx1ZSgnJyk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmNoZWNrJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG59XHJcbiIsIjxuZy10ZW1wbGF0ZSAjaW5wdXRUZW1wbGF0ZT5cclxuICA8aW5wdXRcclxuICAgICNpbnB1dEVsZW1lbnRcclxuICAgIGF1dG9jb21wbGV0ZT1cInNvbWV0aGluZy1uZXdcIlxyXG4gICAgY2xhc3M9XCJhbnQtc2VsZWN0LXNlYXJjaF9fZmllbGRcIlxyXG4gICAgKGNvbXBvc2l0aW9uc3RhcnQpPVwiaXNDb21wb3NpbmcgPSB0cnVlXCJcclxuICAgIChjb21wb3NpdGlvbmVuZCk9XCJpc0NvbXBvc2luZyA9IGZhbHNlXCJcclxuICAgIFtuZ01vZGVsXT1cImlucHV0VmFsdWVcIlxyXG4gICAgKG5nTW9kZWxDaGFuZ2UpPVwic2V0SW5wdXRWYWx1ZSgkZXZlbnQpXCJcclxuICAgIFtkaXNhYmxlZF09XCJuelNlbGVjdFNlcnZpY2UuZGlzYWJsZWRcIlxyXG4gIC8+XHJcbiAgPHNwYW4gI21pcnJvckVsZW1lbnQgY2xhc3M9XCJhbnQtc2VsZWN0LXNlYXJjaF9fZmllbGRfX21pcnJvclwiPjwvc3Bhbj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuPGRpdiBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0aW9uX19yZW5kZXJlZFwiPlxyXG4gIDxkaXZcclxuICAgICpuZ0lmPVwibnpQbGFjZUhvbGRlclwiXHJcbiAgICBuei1zZWxlY3QtdW5zZWxlY3RhYmxlXHJcbiAgICBbc3R5bGUuZGlzcGxheV09XCJwbGFjZUhvbGRlckRpc3BsYXlcIlxyXG4gICAgY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGlvbl9fcGxhY2Vob2xkZXJcIlxyXG4gID5cclxuICAgIHt7IG56UGxhY2VIb2xkZXIgfX1cclxuICA8L2Rpdj5cclxuICA8IS0tc2luZ2xlIG1vZGUtLT5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwibnpTZWxlY3RTZXJ2aWNlLmlzU2luZ2xlTW9kZVwiPlxyXG4gICAgPCEtLXNlbGVjdGVkIGxhYmVsLS0+XHJcbiAgICA8ZGl2XHJcbiAgICAgICpuZ0lmPVwiXHJcbiAgICAgICAgbnpTZWxlY3RTZXJ2aWNlLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uLmxlbmd0aCAmJlxyXG4gICAgICAgIG56U2VsZWN0U2VydmljZS5saXN0T2ZTZWxlY3RlZFZhbHVlLmxlbmd0aFxyXG4gICAgICBcIlxyXG4gICAgICBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0aW9uLXNlbGVjdGVkLXZhbHVlXCJcclxuICAgICAgW2F0dHIudGl0bGVdPVwibnpTZWxlY3RTZXJ2aWNlLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uWzBdPy5uekxhYmVsXCJcclxuICAgICAgW25nU3R5bGVdPVwic2VsZWN0ZWRWYWx1ZVN0eWxlXCJcclxuICAgID5cclxuICAgICAgPG5nLWNvbnRhaW5lclxyXG4gICAgICAgICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiXHJcbiAgICAgICAgICBuekN1c3RvbVRlbXBsYXRlO1xyXG4gICAgICAgICAgY29udGV4dDogeyAkaW1wbGljaXQ6IG56U2VsZWN0U2VydmljZS5saXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvblswXSB9XHJcbiAgICAgICAgXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxuZy1jb250YWluZXI+e3sgbnpTZWxlY3RTZXJ2aWNlLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uWzBdPy5uekxhYmVsIH19PC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8IS0tc2hvdyBzZWFyY2gtLT5cclxuICAgIDxkaXZcclxuICAgICAgKm5nSWY9XCJuelNob3dTZWFyY2hcIlxyXG4gICAgICBjbGFzcz1cImFudC1zZWxlY3Qtc2VhcmNoIGFudC1zZWxlY3Qtc2VhcmNoLS1pbmxpbmVcIlxyXG4gICAgICBbc3R5bGUuZGlzcGxheV09XCJuek9wZW4gPyAnYmxvY2snIDogJ25vbmUnXCJcclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzcz1cImFudC1zZWxlY3Qtc2VhcmNoX19maWVsZF9fd3JhcFwiPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJpbnB1dFRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuICA8IS0tbXVsdGlwbGUgb3IgdGFncyBtb2RlLS0+XHJcbiAgPHVsICpuZ0lmPVwibnpTZWxlY3RTZXJ2aWNlLmlzTXVsdGlwbGVPclRhZ3NcIj5cclxuICAgIDxuZy1jb250YWluZXJcclxuICAgICAgKm5nRm9yPVwiXHJcbiAgICAgICAgbGV0IG9wdGlvbiBvZiBuelNlbGVjdFNlcnZpY2UubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb24gfCBzbGljZTogMDpuek1heFRhZ0NvdW50O1xyXG4gICAgICAgIHRyYWNrQnk6IHRyYWNrVmFsdWU7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gaW5kZXhcclxuICAgICAgXCJcclxuICAgID5cclxuICAgICAgPGxpXHJcbiAgICAgICAgW0B6b29tTW90aW9uXVxyXG4gICAgICAgIFtALmRpc2FibGVkXT1cIm5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCJcclxuICAgICAgICBbbnpOb0FuaW1hdGlvbl09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXHJcbiAgICAgICAgW2F0dHIudGl0bGVdPVwib3B0aW9uLm56TGFiZWxcIlxyXG4gICAgICAgIFtjbGFzcy5hbnQtc2VsZWN0LXNlbGVjdGlvbl9fY2hvaWNlX19kaXNhYmxlZF09XCJvcHRpb24ubnpEaXNhYmxlZFwiXHJcbiAgICAgICAgKEB6b29tTW90aW9uLmRvbmUpPVwiYW5pbWF0aW9uRW5kKClcIlxyXG4gICAgICAgIGNsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3Rpb25fX2Nob2ljZVwiXHJcbiAgICAgID5cclxuICAgICAgICA8bmctY29udGFpbmVyXHJcbiAgICAgICAgICAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIlxyXG4gICAgICAgICAgICBuekN1c3RvbVRlbXBsYXRlO1xyXG4gICAgICAgICAgICBjb250ZXh0OiB7ICRpbXBsaWNpdDogbnpTZWxlY3RTZXJ2aWNlLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uW2luZGV4XSB9XHJcbiAgICAgICAgICBcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGlvbl9fY2hvaWNlX19jb250ZW50XCI+e3sgb3B0aW9uLm56TGFiZWwgfX08L2Rpdj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8c3BhblxyXG4gICAgICAgICAgKm5nSWY9XCIhb3B0aW9uLm56RGlzYWJsZWRcIlxyXG4gICAgICAgICAgY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGlvbl9fY2hvaWNlX19yZW1vdmVcIlxyXG4gICAgICAgICAgKG1vdXNlZG93bik9XCIkZXZlbnQucHJldmVudERlZmF1bHQoKVwiXHJcbiAgICAgICAgICAoY2xpY2spPVwicmVtb3ZlU2VsZWN0ZWRWYWx1ZShvcHRpb24sICRldmVudClcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgIG56LWljb25cclxuICAgICAgICAgICAgbnpUeXBlPVwiY2xvc2VcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImFudC1zZWxlY3QtcmVtb3ZlLWljb25cIlxyXG4gICAgICAgICAgICAqbmdJZj1cIiFuelJlbW92ZUljb247IGVsc2UgbnpSZW1vdmVJY29uXCJcclxuICAgICAgICAgID48L2k+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2xpPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8bGlcclxuICAgICAgKm5nSWY9XCJuelNlbGVjdFNlcnZpY2UubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb24ubGVuZ3RoID4gbnpNYXhUYWdDb3VudFwiXHJcbiAgICAgIFtAem9vbU1vdGlvbl1cclxuICAgICAgW0AuZGlzYWJsZWRdPVwibm9BbmltYXRpb24/Lm56Tm9BbmltYXRpb25cIlxyXG4gICAgICBbbnpOb0FuaW1hdGlvbl09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXHJcbiAgICAgIChAem9vbU1vdGlvbi5kb25lKT1cImFuaW1hdGlvbkVuZCgpXCJcclxuICAgICAgY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGlvbl9fY2hvaWNlXCJcclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0aW9uX19jaG9pY2VfX2NvbnRlbnRcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibnpNYXhUYWdQbGFjZWhvbGRlclwiPlxyXG4gICAgICAgICAgPG5nLXRlbXBsYXRlXHJcbiAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIm56TWF4VGFnUGxhY2Vob2xkZXJcIlxyXG4gICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie1xyXG4gICAgICAgICAgICAgICRpbXBsaWNpdDogbnpTZWxlY3RTZXJ2aWNlLmxpc3RPZlNlbGVjdGVkVmFsdWUgfCBzbGljZTogbnpNYXhUYWdDb3VudFxyXG4gICAgICAgICAgICB9XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFuek1heFRhZ1BsYWNlaG9sZGVyXCI+XHJcbiAgICAgICAgICArIHt7IG56U2VsZWN0U2VydmljZS5saXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbi5sZW5ndGggLSBuek1heFRhZ0NvdW50IH19IC4uLlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbGk+XHJcbiAgICA8bGkgY2xhc3M9XCJhbnQtc2VsZWN0LXNlYXJjaCBhbnQtc2VsZWN0LXNlYXJjaC0taW5saW5lXCI+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJpbnB1dFRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgIDwvbGk+XHJcbiAgPC91bD5cclxuPC9kaXY+XHJcbjxzcGFuXHJcbiAgKm5nSWY9XCJuekFsbG93Q2xlYXIgJiYgbnpTZWxlY3RTZXJ2aWNlLmxpc3RPZlNlbGVjdGVkVmFsdWUubGVuZ3RoXCJcclxuICBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0aW9uX19jbGVhclwiXHJcbiAgbnotc2VsZWN0LXVuc2VsZWN0YWJsZVxyXG4gIChtb3VzZWRvd24pPVwiJGV2ZW50LnByZXZlbnREZWZhdWx0KClcIlxyXG4gIChjbGljayk9XCJvbkNsZWFyU2VsZWN0aW9uKCRldmVudClcIlxyXG4+XHJcbiAgPGlcclxuICAgIG56LWljb25cclxuICAgIG56VHlwZT1cImNsb3NlLWNpcmNsZVwiXHJcbiAgICBuelRoZW1lPVwiZmlsbFwiXHJcbiAgICAqbmdJZj1cIiFuekNsZWFySWNvbjsgZWxzZSBuekNsZWFySWNvblwiXHJcbiAgICBjbGFzcz1cImFudC1zZWxlY3QtY2xvc2UtaWNvblwiXHJcbiAgPjwvaT5cclxuPC9zcGFuPlxyXG48c3BhbiBjbGFzcz1cImFudC1zZWxlY3QtYXJyb3dcIiBuei1zZWxlY3QtdW5zZWxlY3RhYmxlICpuZ0lmPVwibnpTaG93QXJyb3dcIj5cclxuICA8aSBuei1pY29uIG56VHlwZT1cImxvYWRpbmdcIiAqbmdJZj1cIm56TG9hZGluZzsgZWxzZSBkZWZhdWx0QXJyb3dcIj48L2k+XHJcbiAgPG5nLXRlbXBsYXRlICNkZWZhdWx0QXJyb3c+XHJcbiAgICA8aVxyXG4gICAgICBuei1pY29uXHJcbiAgICAgIG56VHlwZT1cImRvd25cIlxyXG4gICAgICBjbGFzcz1cImFudC1zZWxlY3QtYXJyb3ctaWNvblwiXHJcbiAgICAgICpuZ0lmPVwiIW56U3VmZml4SWNvbjsgZWxzZSBuelN1ZmZpeEljb25cIlxyXG4gICAgPjwvaT5cclxuICA8L25nLXRlbXBsYXRlPlxyXG48L3NwYW4+XHJcbiJdfQ==
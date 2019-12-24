/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** @docs-private */
var FakeViewportRuler = /** @class */ (function () {
    function FakeViewportRuler() {
    }
    FakeViewportRuler.prototype.getViewportRect = function () {
        return {
            left: 0,
            top: 0,
            width: 1014,
            height: 686,
            bottom: 686,
            right: 1014
        };
    };
    FakeViewportRuler.prototype.getViewportSize = function () {
        return { width: 1014, height: 686 };
    };
    FakeViewportRuler.prototype.getViewportScrollPosition = function () {
        return { top: 0, left: 0 };
    };
    return FakeViewportRuler;
}());
export { FakeViewportRuler };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFrZS12aWV3cG9ydC1ydWxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbInRlc3RpbmcvZmFrZS12aWV3cG9ydC1ydWxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxvQkFBb0I7QUFDcEI7SUFBQTtJQW1CQSxDQUFDO0lBbEJDLDJDQUFlLEdBQWY7UUFDRSxPQUFPO1lBQ0wsSUFBSSxFQUFFLENBQUM7WUFDUCxHQUFHLEVBQUUsQ0FBQztZQUNOLEtBQUssRUFBRSxJQUFJO1lBQ1gsTUFBTSxFQUFFLEdBQUc7WUFDWCxNQUFNLEVBQUUsR0FBRztZQUNYLEtBQUssRUFBRSxJQUFJO1NBQ1osQ0FBQztJQUNKLENBQUM7SUFFRCwyQ0FBZSxHQUFmO1FBQ0UsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFRCxxREFBeUIsR0FBekI7UUFDRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQW5CRCxJQW1CQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXHJcbiAqL1xyXG5cclxuLyoqIEBkb2NzLXByaXZhdGUgKi9cclxuZXhwb3J0IGNsYXNzIEZha2VWaWV3cG9ydFJ1bGVyIHtcclxuICBnZXRWaWV3cG9ydFJlY3QoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBsZWZ0OiAwLFxyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIHdpZHRoOiAxMDE0LFxyXG4gICAgICBoZWlnaHQ6IDY4NixcclxuICAgICAgYm90dG9tOiA2ODYsXHJcbiAgICAgIHJpZ2h0OiAxMDE0XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0Vmlld3BvcnRTaXplKCkge1xyXG4gICAgcmV0dXJuIHsgd2lkdGg6IDEwMTQsIGhlaWdodDogNjg2IH07XHJcbiAgfVxyXG5cclxuICBnZXRWaWV3cG9ydFNjcm9sbFBvc2l0aW9uKCkge1xyXG4gICAgcmV0dXJuIHsgdG9wOiAwLCBsZWZ0OiAwIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==
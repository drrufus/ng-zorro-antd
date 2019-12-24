/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzCarouselBaseStrategy = /** @class */ (function () {
    function NzCarouselBaseStrategy(carouselComponent, cdr, renderer) {
        this.cdr = cdr;
        this.renderer = renderer;
        this.carouselComponent = carouselComponent;
    }
    Object.defineProperty(NzCarouselBaseStrategy.prototype, "maxIndex", {
        get: function () {
            return this.length - 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCarouselBaseStrategy.prototype, "firstEl", {
        get: function () {
            return this.contents[0].el;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCarouselBaseStrategy.prototype, "lastEl", {
        get: function () {
            return this.contents[this.maxIndex].el;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Initialize dragging sequences.
     * @param contents
     */
    NzCarouselBaseStrategy.prototype.withCarouselContents = function (contents) {
        // TODO: carousel and its contents should be separated.
        var carousel = this.carouselComponent;
        var rect = carousel.el.getBoundingClientRect();
        this.slickListEl = carousel.slickListEl;
        this.slickTrackEl = carousel.slickTrackEl;
        this.unitWidth = rect.width;
        this.unitHeight = rect.height;
        this.contents = contents ? contents.toArray() : [];
        this.length = this.contents.length;
    };
    /**
     * When user drag the carousel component.
     * @optional
     */
    NzCarouselBaseStrategy.prototype.dragging = function (_vector) { };
    /**
     * Destroy a scroll strategy.
     */
    NzCarouselBaseStrategy.prototype.dispose = function () { };
    NzCarouselBaseStrategy.prototype.getFromToInBoundary = function (f, t) {
        var length = this.maxIndex + 1;
        return { from: (f + length) % length, to: (t + length) % length };
    };
    return NzCarouselBaseStrategy;
}());
export { NzCarouselBaseStrategy };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY2Fyb3VzZWwvIiwic291cmNlcyI6WyJzdHJhdGVnaWVzL2Jhc2Utc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBUUg7SUFzQkUsZ0NBQVksaUJBQThDLEVBQVksR0FBc0IsRUFBWSxRQUFtQjtRQUFyRCxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFZLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDekgsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO0lBQzdDLENBQUM7SUFkRCxzQkFBYyw0Q0FBUTthQUF0QjtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBYywyQ0FBTzthQUFyQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBYywwQ0FBTTthQUFwQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3pDLENBQUM7OztPQUFBO0lBTUQ7OztPQUdHO0lBQ0gscURBQW9CLEdBQXBCLFVBQXFCLFFBQXNEO1FBQ3pFLHVEQUF1RDtRQUN2RCxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsaUJBQWtCLENBQUM7UUFDekMsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQ2pELElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQztRQUN4QyxJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUM7UUFDMUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDbkQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUNyQyxDQUFDO0lBT0Q7OztPQUdHO0lBQ0gseUNBQVEsR0FBUixVQUFTLE9BQXNCLElBQVMsQ0FBQztJQUV6Qzs7T0FFRztJQUNILHdDQUFPLEdBQVAsY0FBaUIsQ0FBQztJQUVSLG9EQUFtQixHQUE3QixVQUE4QixDQUFTLEVBQUUsQ0FBUztRQUNoRCxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNqQyxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLE1BQU0sRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUM7SUFDcEUsQ0FBQztJQUNILDZCQUFDO0FBQUQsQ0FBQyxBQTlERCxJQThEQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIFF1ZXJ5TGlzdCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IE56Q2Fyb3VzZWxDb250ZW50RGlyZWN0aXZlIH0gZnJvbSAnLi4vbnotY2Fyb3VzZWwtY29udGVudC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBGcm9tVG9JbnRlcmZhY2UsIE56Q2Fyb3VzZWxDb21wb25lbnRBc1NvdXJjZSwgUG9pbnRlclZlY3RvciB9IGZyb20gJy4uL256LWNhcm91c2VsLWRlZmluaXRpb25zJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBOekNhcm91c2VsQmFzZVN0cmF0ZWd5IHtcclxuICAvLyBQcm9wZXJ0aWVzIHRoYXQgc3RyYXRlZ2llcyBtYXkgd2FudCB0byB1c2UuXHJcbiAgcHJvdGVjdGVkIGNhcm91c2VsQ29tcG9uZW50OiBOekNhcm91c2VsQ29tcG9uZW50QXNTb3VyY2UgfCBudWxsO1xyXG4gIHByb3RlY3RlZCBjb250ZW50czogTnpDYXJvdXNlbENvbnRlbnREaXJlY3RpdmVbXTtcclxuICBwcm90ZWN0ZWQgc2xpY2tMaXN0RWw6IEhUTUxFbGVtZW50O1xyXG4gIHByb3RlY3RlZCBzbGlja1RyYWNrRWw6IEhUTUxFbGVtZW50O1xyXG4gIHByb3RlY3RlZCBsZW5ndGg6IG51bWJlcjtcclxuICBwcm90ZWN0ZWQgdW5pdFdpZHRoOiBudW1iZXI7XHJcbiAgcHJvdGVjdGVkIHVuaXRIZWlnaHQ6IG51bWJlcjtcclxuXHJcbiAgcHJvdGVjdGVkIGdldCBtYXhJbmRleCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMubGVuZ3RoIC0gMTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBnZXQgZmlyc3RFbCgpOiBIVE1MRWxlbWVudCB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250ZW50c1swXS5lbDtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBnZXQgbGFzdEVsKCk6IEhUTUxFbGVtZW50IHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRlbnRzW3RoaXMubWF4SW5kZXhdLmVsO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoY2Fyb3VzZWxDb21wb25lbnQ6IE56Q2Fyb3VzZWxDb21wb25lbnRBc1NvdXJjZSwgcHJvdGVjdGVkIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyKSB7XHJcbiAgICB0aGlzLmNhcm91c2VsQ29tcG9uZW50ID0gY2Fyb3VzZWxDb21wb25lbnQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJbml0aWFsaXplIGRyYWdnaW5nIHNlcXVlbmNlcy5cclxuICAgKiBAcGFyYW0gY29udGVudHNcclxuICAgKi9cclxuICB3aXRoQ2Fyb3VzZWxDb250ZW50cyhjb250ZW50czogUXVlcnlMaXN0PE56Q2Fyb3VzZWxDb250ZW50RGlyZWN0aXZlPiB8IG51bGwpOiB2b2lkIHtcclxuICAgIC8vIFRPRE86IGNhcm91c2VsIGFuZCBpdHMgY29udGVudHMgc2hvdWxkIGJlIHNlcGFyYXRlZC5cclxuICAgIGNvbnN0IGNhcm91c2VsID0gdGhpcy5jYXJvdXNlbENvbXBvbmVudCE7XHJcbiAgICBjb25zdCByZWN0ID0gY2Fyb3VzZWwuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICB0aGlzLnNsaWNrTGlzdEVsID0gY2Fyb3VzZWwuc2xpY2tMaXN0RWw7XHJcbiAgICB0aGlzLnNsaWNrVHJhY2tFbCA9IGNhcm91c2VsLnNsaWNrVHJhY2tFbDtcclxuICAgIHRoaXMudW5pdFdpZHRoID0gcmVjdC53aWR0aDtcclxuICAgIHRoaXMudW5pdEhlaWdodCA9IHJlY3QuaGVpZ2h0O1xyXG4gICAgdGhpcy5jb250ZW50cyA9IGNvbnRlbnRzID8gY29udGVudHMudG9BcnJheSgpIDogW107XHJcbiAgICB0aGlzLmxlbmd0aCA9IHRoaXMuY29udGVudHMubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVHJpZ2dlciB0cmFuc2l0aW9uLlxyXG4gICAqL1xyXG4gIGFic3RyYWN0IHN3aXRjaChfZjogbnVtYmVyLCBfdDogbnVtYmVyKTogT2JzZXJ2YWJsZTx2b2lkPjtcclxuXHJcbiAgLyoqXHJcbiAgICogV2hlbiB1c2VyIGRyYWcgdGhlIGNhcm91c2VsIGNvbXBvbmVudC5cclxuICAgKiBAb3B0aW9uYWxcclxuICAgKi9cclxuICBkcmFnZ2luZyhfdmVjdG9yOiBQb2ludGVyVmVjdG9yKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBEZXN0cm95IGEgc2Nyb2xsIHN0cmF0ZWd5LlxyXG4gICAqL1xyXG4gIGRpc3Bvc2UoKTogdm9pZCB7fVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0RnJvbVRvSW5Cb3VuZGFyeShmOiBudW1iZXIsIHQ6IG51bWJlcik6IEZyb21Ub0ludGVyZmFjZSB7XHJcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLm1heEluZGV4ICsgMTtcclxuICAgIHJldHVybiB7IGZyb206IChmICsgbGVuZ3RoKSAlIGxlbmd0aCwgdG86ICh0ICsgbGVuZ3RoKSAlIGxlbmd0aCB9O1xyXG4gIH1cclxufVxyXG4iXX0=
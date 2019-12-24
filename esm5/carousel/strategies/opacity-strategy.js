/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { __extends } from "tslib";
import { Subject } from 'rxjs';
import { NzCarouselBaseStrategy } from './base-strategy';
var NzCarouselOpacityStrategy = /** @class */ (function (_super) {
    __extends(NzCarouselOpacityStrategy, _super);
    function NzCarouselOpacityStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NzCarouselOpacityStrategy.prototype.withCarouselContents = function (contents) {
        var _this = this;
        _super.prototype.withCarouselContents.call(this, contents);
        if (this.contents) {
            this.slickTrackEl.style.width = this.length * this.unitWidth + "px";
            this.contents.forEach(function (content, i) {
                _this.renderer.setStyle(content.el, 'opacity', _this.carouselComponent.activeIndex === i ? '1' : '0');
                _this.renderer.setStyle(content.el, 'position', 'relative');
                _this.renderer.setStyle(content.el, 'width', _this.unitWidth + "px");
                _this.renderer.setStyle(content.el, 'left', -_this.unitWidth * i + "px");
                _this.renderer.setStyle(content.el, 'transition', ['opacity 500ms ease 0s', 'visibility 500ms ease 0s']);
            });
        }
    };
    NzCarouselOpacityStrategy.prototype.switch = function (_f, _t) {
        var _this = this;
        var t = this.getFromToInBoundary(_f, _t).to;
        var complete$ = new Subject();
        this.contents.forEach(function (content, i) {
            _this.renderer.setStyle(content.el, 'opacity', t === i ? '1' : '0');
        });
        setTimeout(function () {
            complete$.next();
            complete$.complete();
        }, this.carouselComponent.nzTransitionSpeed);
        return complete$;
    };
    NzCarouselOpacityStrategy.prototype.dispose = function () {
        var _this = this;
        this.contents.forEach(function (content) {
            _this.renderer.setStyle(content.el, 'transition', null);
        });
        _super.prototype.dispose.call(this);
    };
    return NzCarouselOpacityStrategy;
}(NzCarouselBaseStrategy));
export { NzCarouselOpacityStrategy };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3BhY2l0eS1zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY2Fyb3VzZWwvIiwic291cmNlcyI6WyJzdHJhdGVnaWVzL29wYWNpdHktc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOztBQUdILE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFJM0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFekQ7SUFBK0MsNkNBQXNCO0lBQXJFOztJQXdDQSxDQUFDO0lBdkNDLHdEQUFvQixHQUFwQixVQUFxQixRQUFzRDtRQUEzRSxpQkFjQztRQWJDLGlCQUFNLG9CQUFvQixZQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXJDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQU0sSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxPQUFJLENBQUM7WUFFcEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFtQyxFQUFFLENBQVM7Z0JBQ25FLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLEtBQUksQ0FBQyxpQkFBa0IsQ0FBQyxXQUFXLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNyRyxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztnQkFDM0QsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUssS0FBSSxDQUFDLFNBQVMsT0FBSSxDQUFDLENBQUM7Z0JBQ25FLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFLLENBQUMsS0FBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLE9BQUksQ0FBQyxDQUFDO2dCQUN2RSxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLHVCQUF1QixFQUFFLDBCQUEwQixDQUFDLENBQUMsQ0FBQztZQUMxRyxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVELDBDQUFNLEdBQU4sVUFBTyxFQUFVLEVBQUUsRUFBVTtRQUE3QixpQkFjQztRQWJTLElBQUEsdUNBQUssQ0FBc0M7UUFDbkQsSUFBTSxTQUFTLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUV0QyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQW1DLEVBQUUsQ0FBUztZQUNuRSxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JFLENBQUMsQ0FBQyxDQUFDO1FBRUgsVUFBVSxDQUFDO1lBQ1QsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2pCLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN2QixDQUFDLEVBQUUsSUFBSSxDQUFDLGlCQUFrQixDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFFOUMsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUVELDJDQUFPLEdBQVA7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBbUM7WUFDeEQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekQsQ0FBQyxDQUFDLENBQUM7UUFFSCxpQkFBTSxPQUFPLFdBQUUsQ0FBQztJQUNsQixDQUFDO0lBQ0gsZ0NBQUM7QUFBRCxDQUFDLEFBeENELENBQStDLHNCQUFzQixHQXdDcEUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBOekNhcm91c2VsQ29udGVudERpcmVjdGl2ZSB9IGZyb20gJy4uL256LWNhcm91c2VsLWNvbnRlbnQuZGlyZWN0aXZlJztcclxuXHJcbmltcG9ydCB7IE56Q2Fyb3VzZWxCYXNlU3RyYXRlZ3kgfSBmcm9tICcuL2Jhc2Utc3RyYXRlZ3knO1xyXG5cclxuZXhwb3J0IGNsYXNzIE56Q2Fyb3VzZWxPcGFjaXR5U3RyYXRlZ3kgZXh0ZW5kcyBOekNhcm91c2VsQmFzZVN0cmF0ZWd5IHtcclxuICB3aXRoQ2Fyb3VzZWxDb250ZW50cyhjb250ZW50czogUXVlcnlMaXN0PE56Q2Fyb3VzZWxDb250ZW50RGlyZWN0aXZlPiB8IG51bGwpOiB2b2lkIHtcclxuICAgIHN1cGVyLndpdGhDYXJvdXNlbENvbnRlbnRzKGNvbnRlbnRzKTtcclxuXHJcbiAgICBpZiAodGhpcy5jb250ZW50cykge1xyXG4gICAgICB0aGlzLnNsaWNrVHJhY2tFbC5zdHlsZS53aWR0aCA9IGAke3RoaXMubGVuZ3RoICogdGhpcy51bml0V2lkdGh9cHhgO1xyXG5cclxuICAgICAgdGhpcy5jb250ZW50cy5mb3JFYWNoKChjb250ZW50OiBOekNhcm91c2VsQ29udGVudERpcmVjdGl2ZSwgaTogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShjb250ZW50LmVsLCAnb3BhY2l0eScsIHRoaXMuY2Fyb3VzZWxDb21wb25lbnQhLmFjdGl2ZUluZGV4ID09PSBpID8gJzEnIDogJzAnKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGNvbnRlbnQuZWwsICdwb3NpdGlvbicsICdyZWxhdGl2ZScpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoY29udGVudC5lbCwgJ3dpZHRoJywgYCR7dGhpcy51bml0V2lkdGh9cHhgKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGNvbnRlbnQuZWwsICdsZWZ0JywgYCR7LXRoaXMudW5pdFdpZHRoICogaX1weGApO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoY29udGVudC5lbCwgJ3RyYW5zaXRpb24nLCBbJ29wYWNpdHkgNTAwbXMgZWFzZSAwcycsICd2aXNpYmlsaXR5IDUwMG1zIGVhc2UgMHMnXSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3dpdGNoKF9mOiBudW1iZXIsIF90OiBudW1iZXIpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcclxuICAgIGNvbnN0IHsgdG86IHQgfSA9IHRoaXMuZ2V0RnJvbVRvSW5Cb3VuZGFyeShfZiwgX3QpO1xyXG4gICAgY29uc3QgY29tcGxldGUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgICB0aGlzLmNvbnRlbnRzLmZvckVhY2goKGNvbnRlbnQ6IE56Q2Fyb3VzZWxDb250ZW50RGlyZWN0aXZlLCBpOiBudW1iZXIpID0+IHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShjb250ZW50LmVsLCAnb3BhY2l0eScsIHQgPT09IGkgPyAnMScgOiAnMCcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGNvbXBsZXRlJC5uZXh0KCk7XHJcbiAgICAgIGNvbXBsZXRlJC5jb21wbGV0ZSgpO1xyXG4gICAgfSwgdGhpcy5jYXJvdXNlbENvbXBvbmVudCEubnpUcmFuc2l0aW9uU3BlZWQpO1xyXG5cclxuICAgIHJldHVybiBjb21wbGV0ZSQ7XHJcbiAgfVxyXG5cclxuICBkaXNwb3NlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jb250ZW50cy5mb3JFYWNoKChjb250ZW50OiBOekNhcm91c2VsQ29udGVudERpcmVjdGl2ZSkgPT4ge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGNvbnRlbnQuZWwsICd0cmFuc2l0aW9uJywgbnVsbCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBzdXBlci5kaXNwb3NlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var AnimationDuration = /** @class */ (function () {
    function AnimationDuration() {
    }
    AnimationDuration.SLOW = '0.3s'; // Modal
    AnimationDuration.BASE = '0.2s';
    AnimationDuration.FAST = '0.1s'; // Tooltip
    return AnimationDuration;
}());
export { AnimationDuration };
var AnimationCurves = /** @class */ (function () {
    function AnimationCurves() {
    }
    AnimationCurves.EASE_BASE_OUT = 'cubic-bezier(0.7, 0.3, 0.1, 1)';
    AnimationCurves.EASE_BASE_IN = 'cubic-bezier(0.9, 0, 0.3, 0.7)';
    AnimationCurves.EASE_OUT = 'cubic-bezier(0.215, 0.61, 0.355, 1)';
    AnimationCurves.EASE_IN = 'cubic-bezier(0.55, 0.055, 0.675, 0.19)';
    AnimationCurves.EASE_IN_OUT = 'cubic-bezier(0.645, 0.045, 0.355, 1)';
    AnimationCurves.EASE_OUT_BACK = 'cubic-bezier(0.12, 0.4, 0.29, 1.46)';
    AnimationCurves.EASE_IN_BACK = 'cubic-bezier(0.71, -0.46, 0.88, 0.6)';
    AnimationCurves.EASE_IN_OUT_BACK = 'cubic-bezier(0.71, -0.46, 0.29, 1.46)';
    AnimationCurves.EASE_OUT_CIRC = 'cubic-bezier(0.08, 0.82, 0.17, 1)';
    AnimationCurves.EASE_IN_CIRC = 'cubic-bezier(0.6, 0.04, 0.98, 0.34)';
    AnimationCurves.EASE_IN_OUT_CIRC = 'cubic-bezier(0.78, 0.14, 0.15, 0.86)';
    AnimationCurves.EASE_OUT_QUINT = 'cubic-bezier(0.23, 1, 0.32, 1)';
    AnimationCurves.EASE_IN_QUINT = 'cubic-bezier(0.755, 0.05, 0.855, 0.06)';
    AnimationCurves.EASE_IN_OUT_QUINT = 'cubic-bezier(0.86, 0, 0.07, 1)';
    return AnimationCurves;
}());
export { AnimationCurves };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWF0aW9uLWNvbnN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbImFuaW1hdGlvbi9hbmltYXRpb24tY29uc3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVIO0lBQUE7SUFJQSxDQUFDO0lBSFEsc0JBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxRQUFRO0lBQ3ZCLHNCQUFJLEdBQUcsTUFBTSxDQUFDO0lBQ2Qsc0JBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxVQUFVO0lBQ2xDLHdCQUFDO0NBQUEsQUFKRCxJQUlDO1NBSlksaUJBQWlCO0FBTTlCO0lBQUE7SUFlQSxDQUFDO0lBZFEsNkJBQWEsR0FBRyxnQ0FBZ0MsQ0FBQztJQUNqRCw0QkFBWSxHQUFHLGdDQUFnQyxDQUFDO0lBQ2hELHdCQUFRLEdBQUcscUNBQXFDLENBQUM7SUFDakQsdUJBQU8sR0FBRyx3Q0FBd0MsQ0FBQztJQUNuRCwyQkFBVyxHQUFHLHNDQUFzQyxDQUFDO0lBQ3JELDZCQUFhLEdBQUcscUNBQXFDLENBQUM7SUFDdEQsNEJBQVksR0FBRyxzQ0FBc0MsQ0FBQztJQUN0RCxnQ0FBZ0IsR0FBRyx1Q0FBdUMsQ0FBQztJQUMzRCw2QkFBYSxHQUFHLG1DQUFtQyxDQUFDO0lBQ3BELDRCQUFZLEdBQUcscUNBQXFDLENBQUM7SUFDckQsZ0NBQWdCLEdBQUcsc0NBQXNDLENBQUM7SUFDMUQsOEJBQWMsR0FBRyxnQ0FBZ0MsQ0FBQztJQUNsRCw2QkFBYSxHQUFHLHdDQUF3QyxDQUFDO0lBQ3pELGlDQUFpQixHQUFHLGdDQUFnQyxDQUFDO0lBQzlELHNCQUFDO0NBQUEsQUFmRCxJQWVDO1NBZlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIEFuaW1hdGlvbkR1cmF0aW9uIHtcclxuICBzdGF0aWMgU0xPVyA9ICcwLjNzJzsgLy8gTW9kYWxcclxuICBzdGF0aWMgQkFTRSA9ICcwLjJzJztcclxuICBzdGF0aWMgRkFTVCA9ICcwLjFzJzsgLy8gVG9vbHRpcFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQW5pbWF0aW9uQ3VydmVzIHtcclxuICBzdGF0aWMgRUFTRV9CQVNFX09VVCA9ICdjdWJpYy1iZXppZXIoMC43LCAwLjMsIDAuMSwgMSknO1xyXG4gIHN0YXRpYyBFQVNFX0JBU0VfSU4gPSAnY3ViaWMtYmV6aWVyKDAuOSwgMCwgMC4zLCAwLjcpJztcclxuICBzdGF0aWMgRUFTRV9PVVQgPSAnY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSknO1xyXG4gIHN0YXRpYyBFQVNFX0lOID0gJ2N1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpJztcclxuICBzdGF0aWMgRUFTRV9JTl9PVVQgPSAnY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpJztcclxuICBzdGF0aWMgRUFTRV9PVVRfQkFDSyA9ICdjdWJpYy1iZXppZXIoMC4xMiwgMC40LCAwLjI5LCAxLjQ2KSc7XHJcbiAgc3RhdGljIEVBU0VfSU5fQkFDSyA9ICdjdWJpYy1iZXppZXIoMC43MSwgLTAuNDYsIDAuODgsIDAuNiknO1xyXG4gIHN0YXRpYyBFQVNFX0lOX09VVF9CQUNLID0gJ2N1YmljLWJlemllcigwLjcxLCAtMC40NiwgMC4yOSwgMS40NiknO1xyXG4gIHN0YXRpYyBFQVNFX09VVF9DSVJDID0gJ2N1YmljLWJlemllcigwLjA4LCAwLjgyLCAwLjE3LCAxKSc7XHJcbiAgc3RhdGljIEVBU0VfSU5fQ0lSQyA9ICdjdWJpYy1iZXppZXIoMC42LCAwLjA0LCAwLjk4LCAwLjM0KSc7XHJcbiAgc3RhdGljIEVBU0VfSU5fT1VUX0NJUkMgPSAnY3ViaWMtYmV6aWVyKDAuNzgsIDAuMTQsIDAuMTUsIDAuODYpJztcclxuICBzdGF0aWMgRUFTRV9PVVRfUVVJTlQgPSAnY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpJztcclxuICBzdGF0aWMgRUFTRV9JTl9RVUlOVCA9ICdjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KSc7XHJcbiAgc3RhdGljIEVBU0VfSU5fT1VUX1FVSU5UID0gJ2N1YmljLWJlemllcigwLjg2LCAwLCAwLjA3LCAxKSc7XHJcbn1cclxuIl19
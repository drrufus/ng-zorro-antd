/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ConnectionPositionPair } from '@angular/cdk/overlay';
export const POSITION_MAP = {
    top: new ConnectionPositionPair({ originX: 'center', originY: 'top' }, { overlayX: 'center', overlayY: 'bottom' }),
    topCenter: new ConnectionPositionPair({ originX: 'center', originY: 'top' }, { overlayX: 'center', overlayY: 'bottom' }),
    topLeft: new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
    topRight: new ConnectionPositionPair({ originX: 'end', originY: 'top' }, { overlayX: 'end', overlayY: 'bottom' }),
    right: new ConnectionPositionPair({ originX: 'end', originY: 'center' }, { overlayX: 'start', overlayY: 'center' }),
    rightTop: new ConnectionPositionPair({ originX: 'end', originY: 'top' }, { overlayX: 'start', overlayY: 'top' }),
    rightBottom: new ConnectionPositionPair({ originX: 'end', originY: 'bottom' }, { overlayX: 'start', overlayY: 'bottom' }),
    bottom: new ConnectionPositionPair({ originX: 'center', originY: 'bottom' }, { overlayX: 'center', overlayY: 'top' }),
    bottomCenter: new ConnectionPositionPair({ originX: 'center', originY: 'bottom' }, { overlayX: 'center', overlayY: 'top' }),
    bottomLeft: new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
    bottomRight: new ConnectionPositionPair({ originX: 'end', originY: 'bottom' }, { overlayX: 'end', overlayY: 'top' }),
    left: new ConnectionPositionPair({ originX: 'start', originY: 'center' }, { overlayX: 'end', overlayY: 'center' }),
    leftTop: new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'top' }),
    leftBottom: new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'end', overlayY: 'bottom' })
};
export const DEFAULT_TOOLTIP_POSITIONS = [POSITION_MAP.top, POSITION_MAP.right, POSITION_MAP.bottom, POSITION_MAP.left];
export const DEFAULT_DROPDOWN_POSITIONS = [POSITION_MAP.bottomLeft, POSITION_MAP.bottomRight, POSITION_MAP.topRight, POSITION_MAP.topLeft];
export const DEFAULT_SUBMENU_POSITIONS = [POSITION_MAP.rightTop, POSITION_MAP.leftTop];
export const DEFAULT_MENTION_TOP_POSITIONS = [
    new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'bottom' }),
    new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'end', overlayY: 'bottom' })
];
export const DEFAULT_MENTION_BOTTOM_POSITIONS = [
    POSITION_MAP.bottomLeft,
    new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'end', overlayY: 'top' })
];
export function getPlacementName(position) {
    const keyList = ['originX', 'originY', 'overlayX', 'overlayY'];
    for (const placement in POSITION_MAP) {
        // @ts-ignore
        if (keyList.every(key => position.connectionPair[key] === POSITION_MAP[placement][key])) {
            return placement;
        }
    }
    return undefined;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1wb3NpdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbIm92ZXJsYXkvb3ZlcmxheS1wb3NpdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQWtDLHNCQUFzQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFOUYsTUFBTSxDQUFDLE1BQU0sWUFBWSxHQUE4QztJQUNyRSxHQUFHLEVBQUUsSUFBSSxzQkFBc0IsQ0FBQyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUM7SUFDbEgsU0FBUyxFQUFFLElBQUksc0JBQXNCLENBQUMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDO0lBQ3hILE9BQU8sRUFBRSxJQUFJLHNCQUFzQixDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQztJQUNwSCxRQUFRLEVBQUUsSUFBSSxzQkFBc0IsQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUM7SUFDakgsS0FBSyxFQUFFLElBQUksc0JBQXNCLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxD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QUFFLFFBQVEsRUFBRSxDQUFDO0NBQzdHLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxnQ0FBZ0MsR0FBRztJQUM5QyxZQUFZLENBQUMsVUFBVTtJQUN2QixJQUFJLHNCQUFzQixDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQztDQUMxRyxDQUFDO0FBRUYsTUFBTSxVQUFVLGdCQUFnQixDQUFDLFFBQXdDO0lBQ3ZFLE1BQU0sT0FBTyxHQUFHLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDL0QsS0FBSyxNQUFNLFNBQVMsSUFBSSxZQUFZLEVBQUU7UUFDcEMsYUFBYTtRQUNiLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEtBQUssWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDdkYsT0FBTyxTQUFTLENBQUM7U0FDbEI7S0FDRjtJQUNELE9BQU8sU0FBUyxDQUFDO0FBQ25CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSwgQ29ubmVjdGlvblBvc2l0aW9uUGFpciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuXHJcbmV4cG9ydCBjb25zdCBQT1NJVElPTl9NQVA6IHsgW2tleTogc3RyaW5nXTogQ29ubmVjdGlvblBvc2l0aW9uUGFpciB9ID0ge1xyXG4gIHRvcDogbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoeyBvcmlnaW5YOiAnY2VudGVyJywgb3JpZ2luWTogJ3RvcCcgfSwgeyBvdmVybGF5WDogJ2NlbnRlcicsIG92ZXJsYXlZOiAnYm90dG9tJyB9KSxcclxuICB0b3BDZW50ZXI6IG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKHsgb3JpZ2luWDogJ2NlbnRlcicsIG9yaWdpblk6ICd0b3AnIH0sIHsgb3ZlcmxheVg6ICdjZW50ZXInLCBvdmVybGF5WTogJ2JvdHRvbScgfSksXHJcbiAgdG9wTGVmdDogbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAndG9wJyB9LCB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ2JvdHRvbScgfSksXHJcbiAgdG9wUmlnaHQ6IG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKHsgb3JpZ2luWDogJ2VuZCcsIG9yaWdpblk6ICd0b3AnIH0sIHsgb3ZlcmxheVg6ICdlbmQnLCBvdmVybGF5WTogJ2JvdHRvbScgfSksXHJcbiAgcmlnaHQ6IG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKHsgb3JpZ2luWDogJ2VuZCcsIG9yaWdpblk6ICdjZW50ZXInIH0sIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAnY2VudGVyJyB9KSxcclxuICByaWdodFRvcDogbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoeyBvcmlnaW5YOiAnZW5kJywgb3JpZ2luWTogJ3RvcCcgfSwgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICd0b3AnIH0pLFxyXG4gIHJpZ2h0Qm90dG9tOiBuZXcgQ29ubmVjdGlvblBvc2l0aW9uUGFpcih7IG9yaWdpblg6ICdlbmQnLCBvcmlnaW5ZOiAnYm90dG9tJyB9LCB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ2JvdHRvbScgfSksXHJcbiAgYm90dG9tOiBuZXcgQ29ubmVjdGlvblBvc2l0aW9uUGFpcih7IG9yaWdpblg6ICdjZW50ZXInLCBvcmlnaW5ZOiAnYm90dG9tJyB9LCB7IG92ZXJsYXlYOiAnY2VudGVyJywgb3ZlcmxheVk6ICd0b3AnIH0pLFxyXG4gIGJvdHRvbUNlbnRlcjogbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoeyBvcmlnaW5YOiAnY2VudGVyJywgb3JpZ2luWTogJ2JvdHRvbScgfSwgeyBvdmVybGF5WDogJ2NlbnRlcicsIG92ZXJsYXlZOiAndG9wJyB9KSxcclxuICBib3R0b21MZWZ0OiBuZXcgQ29ubmVjdGlvblBvc2l0aW9uUGFpcih7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICdib3R0b20nIH0sIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAndG9wJyB9KSxcclxuICBib3R0b21SaWdodDogbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoeyBvcmlnaW5YOiAnZW5kJywgb3JpZ2luWTogJ2JvdHRvbScgfSwgeyBvdmVybGF5WDogJ2VuZCcsIG92ZXJsYXlZOiAndG9wJyB9KSxcclxuICBsZWZ0OiBuZXcgQ29ubmVjdGlvblBvc2l0aW9uUGFpcih7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICdjZW50ZXInIH0sIHsgb3ZlcmxheVg6ICdlbmQnLCBvdmVybGF5WTogJ2NlbnRlcicgfSksXHJcbiAgbGVmdFRvcDogbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAndG9wJyB9LCB7IG92ZXJsYXlYOiAnZW5kJywgb3ZlcmxheVk6ICd0b3AnIH0pLFxyXG4gIGxlZnRCb3R0b206IG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ2JvdHRvbScgfSwgeyBvdmVybGF5WDogJ2VuZCcsIG92ZXJsYXlZOiAnYm90dG9tJyB9KVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfVE9PTFRJUF9QT1NJVElPTlMgPSBbUE9TSVRJT05fTUFQLnRvcCwgUE9TSVRJT05fTUFQLnJpZ2h0LCBQT1NJVElPTl9NQVAuYm90dG9tLCBQT1NJVElPTl9NQVAubGVmdF07XHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX0RST1BET1dOX1BPU0lUSU9OUyA9IFtQT1NJVElPTl9NQVAuYm90dG9tTGVmdCwgUE9TSVRJT05fTUFQLmJvdHRvbVJpZ2h0LCBQT1NJVElPTl9NQVAudG9wUmlnaHQsIFBPU0lUSU9OX01BUC50b3BMZWZ0XTtcclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfU1VCTUVOVV9QT1NJVElPTlMgPSBbUE9TSVRJT05fTUFQLnJpZ2h0VG9wLCBQT1NJVElPTl9NQVAubGVmdFRvcF07XHJcblxyXG5leHBvcnQgY29uc3QgREVGQVVMVF9NRU5USU9OX1RPUF9QT1NJVElPTlMgPSBbXHJcbiAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAnYm90dG9tJyB9LCB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ2JvdHRvbScgfSksXHJcbiAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAnYm90dG9tJyB9LCB7IG92ZXJsYXlYOiAnZW5kJywgb3ZlcmxheVk6ICdib3R0b20nIH0pXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgREVGQVVMVF9NRU5USU9OX0JPVFRPTV9QT1NJVElPTlMgPSBbXHJcbiAgUE9TSVRJT05fTUFQLmJvdHRvbUxlZnQsXHJcbiAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAnYm90dG9tJyB9LCB7IG92ZXJsYXlYOiAnZW5kJywgb3ZlcmxheVk6ICd0b3AnIH0pXHJcbl07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGxhY2VtZW50TmFtZShwb3NpdGlvbjogQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcclxuICBjb25zdCBrZXlMaXN0ID0gWydvcmlnaW5YJywgJ29yaWdpblknLCAnb3ZlcmxheVgnLCAnb3ZlcmxheVknXTtcclxuICBmb3IgKGNvbnN0IHBsYWNlbWVudCBpbiBQT1NJVElPTl9NQVApIHtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGlmIChrZXlMaXN0LmV2ZXJ5KGtleSA9PiBwb3NpdGlvbi5jb25uZWN0aW9uUGFpcltrZXldID09PSBQT1NJVElPTl9NQVBbcGxhY2VtZW50XVtrZXldKSkge1xyXG4gICAgICByZXR1cm4gcGxhY2VtZW50O1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdW5kZWZpbmVkO1xyXG59XHJcbiJdfQ==
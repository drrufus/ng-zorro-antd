/**
 * @fileoverview added by tsickle
 * Generated from: testing/wrapped-error-message.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Gets a RegExp used to detect an angular wrapped error message.
 * See https://github.com/angular/angular/issues/8348
 * @param {?} e
 * @return {?}
 */
export function wrappedErrorMessage(e) {
    /** @type {?} */
    const escapedMessage = e.message.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
    return new RegExp(escapedMessage);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3JhcHBlZC1lcnJvci1tZXNzYWdlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsidGVzdGluZy93cmFwcGVkLWVycm9yLW1lc3NhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWUEsTUFBTSxVQUFVLG1CQUFtQixDQUFDLENBQVE7O1VBQ3BDLGNBQWMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxNQUFNLENBQUM7SUFDdkUsT0FBTyxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUNwQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcclxuICovXHJcblxyXG4vKipcclxuICogR2V0cyBhIFJlZ0V4cCB1c2VkIHRvIGRldGVjdCBhbiBhbmd1bGFyIHdyYXBwZWQgZXJyb3IgbWVzc2FnZS5cclxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzgzNDhcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB3cmFwcGVkRXJyb3JNZXNzYWdlKGU6IEVycm9yKSB7XHJcbiAgY29uc3QgZXNjYXBlZE1lc3NhZ2UgPSBlLm1lc3NhZ2UucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy5dL2csICdcXFxcJCYnKTtcclxuICByZXR1cm4gbmV3IFJlZ0V4cChlc2NhcGVkTWVzc2FnZSk7XHJcbn1cclxuIl19
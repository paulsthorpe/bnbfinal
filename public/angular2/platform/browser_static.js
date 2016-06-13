'use strict';"use strict";
var browser_common_1 = require('angular2/src/platform/browser_common');
exports.BROWSER_PROVIDERS = browser_common_1.BROWSER_PROVIDERS;
exports.ELEMENT_PROBE_PROVIDERS = browser_common_1.ELEMENT_PROBE_PROVIDERS;
exports.ELEMENT_PROBE_PROVIDERS_PROD_MODE = browser_common_1.ELEMENT_PROBE_PROVIDERS_PROD_MODE;
exports.inspectNativeElement = browser_common_1.inspectNativeElement;
exports.BrowserDomAdapter = browser_common_1.BrowserDomAdapter;
exports.By = browser_common_1.By;
exports.Title = browser_common_1.Title;
exports.enableDebugTools = browser_common_1.enableDebugTools;
exports.disableDebugTools = browser_common_1.disableDebugTools;
var lang_1 = require('angular2/src/facade/lang');
var browser_common_2 = require('angular2/src/platform/browser_common');
var core_1 = require('angular2/core');
/**
 * An array of providers that should be passed into `application()` when bootstrapping a component
 * when all templates
 * have been precompiled offline.
 */
exports.BROWSER_APP_PROVIDERS = browser_common_2.BROWSER_APP_COMMON_PROVIDERS;
function browserStaticPlatform() {
    if (lang_1.isBlank(core_1.getPlatform())) {
        core_1.createPlatform(core_1.ReflectiveInjector.resolveAndCreate(browser_common_2.BROWSER_PROVIDERS));
    }
    return core_1.assertPlatform(browser_common_2.BROWSER_PLATFORM_MARKER);
}
exports.browserStaticPlatform = browserStaticPlatform;
/**
 * See {@link bootstrap} for more information.
 */
function bootstrapStatic(appComponentType, customProviders, initReflector) {
    if (lang_1.isPresent(initReflector)) {
        initReflector();
    }
    var appProviders = lang_1.isPresent(customProviders) ? [exports.BROWSER_APP_PROVIDERS, customProviders] : exports.BROWSER_APP_PROVIDERS;
    var appInjector = core_1.ReflectiveInjector.resolveAndCreate(appProviders, browserStaticPlatform().injector);
    return core_1.coreLoadAndBootstrap(appInjector, appComponentType);
}
exports.bootstrapStatic = bootstrapStatic;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlcl9zdGF0aWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLUJSSmVyMUo5LnRtcC9hbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyX3N0YXRpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsK0JBVU8sc0NBQXNDLENBQUM7QUFUNUMsK0RBQWlCO0FBQ2pCLDJFQUF1QjtBQUN2QiwrRkFBaUM7QUFDakMscUVBQW9CO0FBQ3BCLCtEQUFpQjtBQUNqQixpQ0FBRTtBQUNGLHVDQUFLO0FBQ0wsNkRBQWdCO0FBQ2hCLCtEQUM0QztBQUU5QyxxQkFBdUMsMEJBQTBCLENBQUMsQ0FBQTtBQUNsRSwrQkFJTyxzQ0FBc0MsQ0FBQyxDQUFBO0FBQzlDLHFCQVFPLGVBQWUsQ0FBQyxDQUFBO0FBRXZCOzs7O0dBSUc7QUFDVSw2QkFBcUIsR0FDOUIsNkNBQTRCLENBQUM7QUFFakM7SUFDRSxFQUFFLENBQUMsQ0FBQyxjQUFPLENBQUMsa0JBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNCLHFCQUFjLENBQUMseUJBQWtCLENBQUMsZ0JBQWdCLENBQUMsa0NBQWlCLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFDRCxNQUFNLENBQUMscUJBQWMsQ0FBQyx3Q0FBdUIsQ0FBQyxDQUFDO0FBQ2pELENBQUM7QUFMZSw2QkFBcUIsd0JBS3BDLENBQUE7QUFFRDs7R0FFRztBQUNILHlCQUFnQyxnQkFBc0IsRUFDdEIsZUFBd0QsRUFDeEQsYUFBd0I7SUFDdEQsRUFBRSxDQUFDLENBQUMsZ0JBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0IsYUFBYSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELElBQUksWUFBWSxHQUNaLGdCQUFTLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyw2QkFBcUIsRUFBRSxlQUFlLENBQUMsR0FBRyw2QkFBcUIsQ0FBQztJQUNsRyxJQUFJLFdBQVcsR0FDWCx5QkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUscUJBQXFCLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN4RixNQUFNLENBQUMsMkJBQW9CLENBQUMsV0FBVyxFQUFFLGdCQUFnQixDQUFDLENBQUM7QUFDN0QsQ0FBQztBQVplLHVCQUFlLGtCQVk5QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvYW5ndWxhcl9lbnRyeXBvaW50JztcbmV4cG9ydCB7XG4gIEJST1dTRVJfUFJPVklERVJTLFxuICBFTEVNRU5UX1BST0JFX1BST1ZJREVSUyxcbiAgRUxFTUVOVF9QUk9CRV9QUk9WSURFUlNfUFJPRF9NT0RFLFxuICBpbnNwZWN0TmF0aXZlRWxlbWVudCxcbiAgQnJvd3NlckRvbUFkYXB0ZXIsXG4gIEJ5LFxuICBUaXRsZSxcbiAgZW5hYmxlRGVidWdUb29scyxcbiAgZGlzYWJsZURlYnVnVG9vbHNcbn0gZnJvbSAnYW5ndWxhcjIvc3JjL3BsYXRmb3JtL2Jyb3dzZXJfY29tbW9uJztcblxuaW1wb3J0IHtUeXBlLCBpc1ByZXNlbnQsIGlzQmxhbmt9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge1xuICBCUk9XU0VSX1BST1ZJREVSUyxcbiAgQlJPV1NFUl9BUFBfQ09NTU9OX1BST1ZJREVSUyxcbiAgQlJPV1NFUl9QTEFURk9STV9NQVJLRVJcbn0gZnJvbSAnYW5ndWxhcjIvc3JjL3BsYXRmb3JtL2Jyb3dzZXJfY29tbW9uJztcbmltcG9ydCB7XG4gIENvbXBvbmVudFJlZixcbiAgY29yZUxvYWRBbmRCb290c3RyYXAsXG4gIFJlZmxlY3RpdmVJbmplY3RvcixcbiAgUGxhdGZvcm1SZWYsXG4gIGdldFBsYXRmb3JtLFxuICBjcmVhdGVQbGF0Zm9ybSxcbiAgYXNzZXJ0UGxhdGZvcm1cbn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbi8qKlxuICogQW4gYXJyYXkgb2YgcHJvdmlkZXJzIHRoYXQgc2hvdWxkIGJlIHBhc3NlZCBpbnRvIGBhcHBsaWNhdGlvbigpYCB3aGVuIGJvb3RzdHJhcHBpbmcgYSBjb21wb25lbnRcbiAqIHdoZW4gYWxsIHRlbXBsYXRlc1xuICogaGF2ZSBiZWVuIHByZWNvbXBpbGVkIG9mZmxpbmUuXG4gKi9cbmV4cG9ydCBjb25zdCBCUk9XU0VSX0FQUF9QUk9WSURFUlM6IEFycmF5PGFueSAvKlR5cGUgfCBQcm92aWRlciB8IGFueVtdKi8+ID1cbiAgICBCUk9XU0VSX0FQUF9DT01NT05fUFJPVklERVJTO1xuXG5leHBvcnQgZnVuY3Rpb24gYnJvd3NlclN0YXRpY1BsYXRmb3JtKCk6IFBsYXRmb3JtUmVmIHtcbiAgaWYgKGlzQmxhbmsoZ2V0UGxhdGZvcm0oKSkpIHtcbiAgICBjcmVhdGVQbGF0Zm9ybShSZWZsZWN0aXZlSW5qZWN0b3IucmVzb2x2ZUFuZENyZWF0ZShCUk9XU0VSX1BST1ZJREVSUykpO1xuICB9XG4gIHJldHVybiBhc3NlcnRQbGF0Zm9ybShCUk9XU0VSX1BMQVRGT1JNX01BUktFUik7XG59XG5cbi8qKlxuICogU2VlIHtAbGluayBib290c3RyYXB9IGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYm9vdHN0cmFwU3RhdGljKGFwcENvbXBvbmVudFR5cGU6IFR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbVByb3ZpZGVycz86IEFycmF5PGFueSAvKlR5cGUgfCBQcm92aWRlciB8IGFueVtdKi8+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0UmVmbGVjdG9yPzogRnVuY3Rpb24pOiBQcm9taXNlPENvbXBvbmVudFJlZj4ge1xuICBpZiAoaXNQcmVzZW50KGluaXRSZWZsZWN0b3IpKSB7XG4gICAgaW5pdFJlZmxlY3RvcigpO1xuICB9XG5cbiAgbGV0IGFwcFByb3ZpZGVycyA9XG4gICAgICBpc1ByZXNlbnQoY3VzdG9tUHJvdmlkZXJzKSA/IFtCUk9XU0VSX0FQUF9QUk9WSURFUlMsIGN1c3RvbVByb3ZpZGVyc10gOiBCUk9XU0VSX0FQUF9QUk9WSURFUlM7XG4gIHZhciBhcHBJbmplY3RvciA9XG4gICAgICBSZWZsZWN0aXZlSW5qZWN0b3IucmVzb2x2ZUFuZENyZWF0ZShhcHBQcm92aWRlcnMsIGJyb3dzZXJTdGF0aWNQbGF0Zm9ybSgpLmluamVjdG9yKTtcbiAgcmV0dXJuIGNvcmVMb2FkQW5kQm9vdHN0cmFwKGFwcEluamVjdG9yLCBhcHBDb21wb25lbnRUeXBlKTtcbn1cbiJdfQ==
// Some of the code comes from WebComponents.JS
// https://github.com/webcomponents/webcomponentsjs/blob/master/src/HTMLImports/path.js
import { RegExpWrapper, StringWrapper, isPresent, isBlank } from 'angular2/src/facade/lang';
export class StyleWithImports {
    constructor(style, styleUrls) {
        this.style = style;
        this.styleUrls = styleUrls;
    }
}
export function isStyleUrlResolvable(url) {
    if (isBlank(url) || url.length === 0 || url[0] == '/')
        return false;
    var schemeMatch = RegExpWrapper.firstMatch(_urlWithSchemaRe, url);
    return isBlank(schemeMatch) || schemeMatch[1] == 'package' || schemeMatch[1] == 'asset';
}
/**
 * Rewrites stylesheets by resolving and removing the @import urls that
 * are either relative or don't have a `package:` scheme
 */
export function extractStyleUrls(resolver, baseUrl, cssText) {
    var foundUrls = [];
    var modifiedCssText = StringWrapper.replaceAllMapped(cssText, _cssImportRe, (m) => {
        var url = isPresent(m[1]) ? m[1] : m[2];
        if (!isStyleUrlResolvable(url)) {
            // Do not attempt to resolve non-package absolute URLs with URI scheme
            return m[0];
        }
        foundUrls.push(resolver.resolve(baseUrl, url));
        return '';
    });
    return new StyleWithImports(modifiedCssText, foundUrls);
}
var _cssImportRe = /@import\s+(?:url\()?\s*(?:(?:['"]([^'"]*))|([^;\)\s]*))[^;]*;?/g;
// TODO: can't use /^[^:/?#.]+:/g due to clang-format bug:
//       https://github.com/angular/angular/issues/4596
var _urlWithSchemaRe = /^([a-zA-Z\-\+\.]+):/g;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGVfdXJsX3Jlc29sdmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlmZmluZ19wbHVnaW5fd3JhcHBlci1vdXRwdXRfcGF0aC14QkxJQnJWUi50bXAvYW5ndWxhcjIvc3JjL2NvbXBpbGVyL3N0eWxlX3VybF9yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrQ0FBK0M7QUFDL0MsdUZBQXVGO09BRWhGLEVBQVMsYUFBYSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFDLE1BQU0sMEJBQTBCO0FBR2pHO0lBQ0UsWUFBbUIsS0FBYSxFQUFTLFNBQW1CO1FBQXpDLFVBQUssR0FBTCxLQUFLLENBQVE7UUFBUyxjQUFTLEdBQVQsU0FBUyxDQUFVO0lBQUcsQ0FBQztBQUNsRSxDQUFDO0FBRUQscUNBQXFDLEdBQVc7SUFDOUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUM7UUFBQyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ3BFLElBQUksV0FBVyxHQUFHLGFBQWEsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDbEUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUM7QUFDMUYsQ0FBQztBQUVEOzs7R0FHRztBQUNILGlDQUFpQyxRQUFxQixFQUFFLE9BQWUsRUFDdEMsT0FBZTtJQUM5QyxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDbkIsSUFBSSxlQUFlLEdBQUcsYUFBYSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBQzVFLElBQUksR0FBRyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLEVBQUUsQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9CLHNFQUFzRTtZQUN0RSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2QsQ0FBQztRQUNELFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMvQyxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQ1osQ0FBQyxDQUFDLENBQUM7SUFDSCxNQUFNLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDMUQsQ0FBQztBQUVELElBQUksWUFBWSxHQUFHLGlFQUFpRSxDQUFDO0FBQ3JGLDBEQUEwRDtBQUMxRCx1REFBdUQ7QUFDdkQsSUFBSSxnQkFBZ0IsR0FBRyxzQkFBc0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFNvbWUgb2YgdGhlIGNvZGUgY29tZXMgZnJvbSBXZWJDb21wb25lbnRzLkpTXG4vLyBodHRwczovL2dpdGh1Yi5jb20vd2ViY29tcG9uZW50cy93ZWJjb21wb25lbnRzanMvYmxvYi9tYXN0ZXIvc3JjL0hUTUxJbXBvcnRzL3BhdGguanNcblxuaW1wb3J0IHtSZWdFeHAsIFJlZ0V4cFdyYXBwZXIsIFN0cmluZ1dyYXBwZXIsIGlzUHJlc2VudCwgaXNCbGFua30gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbmltcG9ydCB7VXJsUmVzb2x2ZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb21waWxlci91cmxfcmVzb2x2ZXInO1xuXG5leHBvcnQgY2xhc3MgU3R5bGVXaXRoSW1wb3J0cyB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzdHlsZTogc3RyaW5nLCBwdWJsaWMgc3R5bGVVcmxzOiBzdHJpbmdbXSkge31cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU3R5bGVVcmxSZXNvbHZhYmxlKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmIChpc0JsYW5rKHVybCkgfHwgdXJsLmxlbmd0aCA9PT0gMCB8fCB1cmxbMF0gPT0gJy8nKSByZXR1cm4gZmFsc2U7XG4gIHZhciBzY2hlbWVNYXRjaCA9IFJlZ0V4cFdyYXBwZXIuZmlyc3RNYXRjaChfdXJsV2l0aFNjaGVtYVJlLCB1cmwpO1xuICByZXR1cm4gaXNCbGFuayhzY2hlbWVNYXRjaCkgfHwgc2NoZW1lTWF0Y2hbMV0gPT0gJ3BhY2thZ2UnIHx8IHNjaGVtZU1hdGNoWzFdID09ICdhc3NldCc7XG59XG5cbi8qKlxuICogUmV3cml0ZXMgc3R5bGVzaGVldHMgYnkgcmVzb2x2aW5nIGFuZCByZW1vdmluZyB0aGUgQGltcG9ydCB1cmxzIHRoYXRcbiAqIGFyZSBlaXRoZXIgcmVsYXRpdmUgb3IgZG9uJ3QgaGF2ZSBhIGBwYWNrYWdlOmAgc2NoZW1lXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0U3R5bGVVcmxzKHJlc29sdmVyOiBVcmxSZXNvbHZlciwgYmFzZVVybDogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzVGV4dDogc3RyaW5nKTogU3R5bGVXaXRoSW1wb3J0cyB7XG4gIHZhciBmb3VuZFVybHMgPSBbXTtcbiAgdmFyIG1vZGlmaWVkQ3NzVGV4dCA9IFN0cmluZ1dyYXBwZXIucmVwbGFjZUFsbE1hcHBlZChjc3NUZXh0LCBfY3NzSW1wb3J0UmUsIChtKSA9PiB7XG4gICAgdmFyIHVybCA9IGlzUHJlc2VudChtWzFdKSA/IG1bMV0gOiBtWzJdO1xuICAgIGlmICghaXNTdHlsZVVybFJlc29sdmFibGUodXJsKSkge1xuICAgICAgLy8gRG8gbm90IGF0dGVtcHQgdG8gcmVzb2x2ZSBub24tcGFja2FnZSBhYnNvbHV0ZSBVUkxzIHdpdGggVVJJIHNjaGVtZVxuICAgICAgcmV0dXJuIG1bMF07XG4gICAgfVxuICAgIGZvdW5kVXJscy5wdXNoKHJlc29sdmVyLnJlc29sdmUoYmFzZVVybCwgdXJsKSk7XG4gICAgcmV0dXJuICcnO1xuICB9KTtcbiAgcmV0dXJuIG5ldyBTdHlsZVdpdGhJbXBvcnRzKG1vZGlmaWVkQ3NzVGV4dCwgZm91bmRVcmxzKTtcbn1cblxudmFyIF9jc3NJbXBvcnRSZSA9IC9AaW1wb3J0XFxzKyg/OnVybFxcKCk/XFxzKig/Oig/OlsnXCJdKFteJ1wiXSopKXwoW147XFwpXFxzXSopKVteO10qOz8vZztcbi8vIFRPRE86IGNhbid0IHVzZSAvXlteOi8/Iy5dKzovZyBkdWUgdG8gY2xhbmctZm9ybWF0IGJ1Zzpcbi8vICAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzQ1OTZcbnZhciBfdXJsV2l0aFNjaGVtYVJlID0gL14oW2EtekEtWlxcLVxcK1xcLl0rKTovZztcbiJdfQ==
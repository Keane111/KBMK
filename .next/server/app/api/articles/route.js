"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/articles/route";
exports.ids = ["app/api/articles/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Farticles%2Froute&page=%2Fapi%2Farticles%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Farticles%2Froute.ts&appDir=C%3A%5CUsers%5CUSER%5CPictures%5CKBMK-master%5CKBMK-master%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CUSER%5CPictures%5CKBMK-master%5CKBMK-master&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Farticles%2Froute&page=%2Fapi%2Farticles%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Farticles%2Froute.ts&appDir=C%3A%5CUsers%5CUSER%5CPictures%5CKBMK-master%5CKBMK-master%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CUSER%5CPictures%5CKBMK-master%5CKBMK-master&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_USER_Pictures_KBMK_master_KBMK_master_src_app_api_articles_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/articles/route.ts */ \"(rsc)/./src/app/api/articles/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/articles/route\",\n        pathname: \"/api/articles\",\n        filename: \"route\",\n        bundlePath: \"app/api/articles/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\USER\\\\Pictures\\\\KBMK-master\\\\KBMK-master\\\\src\\\\app\\\\api\\\\articles\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_USER_Pictures_KBMK_master_KBMK_master_src_app_api_articles_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/articles/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhcnRpY2xlcyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGYXJ0aWNsZXMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZhcnRpY2xlcyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNVU0VSJTVDUGljdHVyZXMlNUNLQk1LLW1hc3RlciU1Q0tCTUstbWFzdGVyJTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNVU0VSJTVDUGljdHVyZXMlNUNLQk1LLW1hc3RlciU1Q0tCTUstbWFzdGVyJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNzQztBQUNuSDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL2tibWsvP2Y1ODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcVVNFUlxcXFxQaWN0dXJlc1xcXFxLQk1LLW1hc3RlclxcXFxLQk1LLW1hc3RlclxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxhcnRpY2xlc1xcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXJ0aWNsZXMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hcnRpY2xlc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYXJ0aWNsZXMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxVU0VSXFxcXFBpY3R1cmVzXFxcXEtCTUstbWFzdGVyXFxcXEtCTUstbWFzdGVyXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGFydGljbGVzXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9hcnRpY2xlcy9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Farticles%2Froute&page=%2Fapi%2Farticles%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Farticles%2Froute.ts&appDir=C%3A%5CUsers%5CUSER%5CPictures%5CKBMK-master%5CKBMK-master%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CUSER%5CPictures%5CKBMK-master%5CKBMK-master&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/articles/route.ts":
/*!***************************************!*\
  !*** ./src/app/api/articles/route.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @supabase/supabase-js */ \"(rsc)/./node_modules/@supabase/supabase-js/dist/module/index.js\");\n\n\nconst supabaseUrl = \"https://pipcwrenqmyaqhoqybmb.supabase.co\";\nconst supabaseKey = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpcGN3cmVucW15YXFob3F5Ym1iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkwODUxOTIsImV4cCI6MjA3NDY2MTE5Mn0.WXWPV0Gq0CqmfxkfmlmCZArgTqKabyXFKQ7E0jjQzvY\";\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_1__.createClient)(supabaseUrl, supabaseKey);\n// ✅ Ambil semua artikel\nasync function GET() {\n    const { data, error } = await supabase.from(\"articles\").select(\"*\").order(\"created_at\", {\n        ascending: false\n    });\n    if (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(data, {\n        status: 200\n    });\n}\n// ✅ Tambah artikel baru\nasync function POST(req) {\n    const body = await req.json();\n    const { title, content, category, author, image_url } = body;\n    if (!title || !content || !category || !author) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Semua field wajib diisi.\"\n        }, {\n            status: 400\n        });\n    }\n    const { data, error } = await supabase.from(\"articles\").insert([\n        {\n            title,\n            content,\n            category,\n            author,\n            image_url\n        }\n    ]);\n    if (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        message: \"✅ Artikel berhasil ditambahkan\",\n        data\n    }, {\n        status: 201\n    });\n}\n// ✅ Hapus artikel berdasarkan ID\nasync function DELETE(req) {\n    const { id } = await req.json();\n    if (!id) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"ID artikel wajib disertakan.\"\n        }, {\n            status: 400\n        });\n    }\n    const { error } = await supabase.from(\"articles\").delete().eq(\"id\", id);\n    if (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        message: \"\\uD83D\\uDDD1️ Artikel berhasil dihapus.\"\n    }, {\n        status: 200\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hcnRpY2xlcy9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEyQztBQUNVO0FBRXJELE1BQU1FLGNBQWNDLDBDQUFvQztBQUN4RCxNQUFNRyxjQUFjSCxrTkFBeUM7QUFDN0QsTUFBTUssV0FBV1AsbUVBQVlBLENBQUNDLGFBQWFJO0FBRTNDLHdCQUF3QjtBQUNqQixlQUFlRztJQUNwQixNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUcsTUFBTUgsU0FDM0JJLElBQUksQ0FBQyxZQUNMQyxNQUFNLENBQUMsS0FDUEMsS0FBSyxDQUFDLGNBQWM7UUFBRUMsV0FBVztJQUFNO0lBRTFDLElBQUlKLE9BQU87UUFDVCxPQUFPWCxxREFBWUEsQ0FBQ2dCLElBQUksQ0FBQztZQUFFTCxPQUFPQSxNQUFNTSxPQUFPO1FBQUMsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDbkU7SUFFQSxPQUFPbEIscURBQVlBLENBQUNnQixJQUFJLENBQUNOLE1BQU07UUFBRVEsUUFBUTtJQUFJO0FBQy9DO0FBRUEsd0JBQXdCO0FBQ2pCLGVBQWVDLEtBQUtDLEdBQVk7SUFDckMsTUFBTUMsT0FBTyxNQUFNRCxJQUFJSixJQUFJO0lBQzNCLE1BQU0sRUFBRU0sS0FBSyxFQUFFQyxPQUFPLEVBQUVDLFFBQVEsRUFBRUMsTUFBTSxFQUFFQyxTQUFTLEVBQUUsR0FBR0w7SUFFeEQsSUFBSSxDQUFDQyxTQUFTLENBQUNDLFdBQVcsQ0FBQ0MsWUFBWSxDQUFDQyxRQUFRO1FBQzlDLE9BQU96QixxREFBWUEsQ0FBQ2dCLElBQUksQ0FDdEI7WUFBRUwsT0FBTztRQUEyQixHQUNwQztZQUFFTyxRQUFRO1FBQUk7SUFFbEI7SUFFQSxNQUFNLEVBQUVSLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUcsTUFBTUgsU0FBU0ksSUFBSSxDQUFDLFlBQVllLE1BQU0sQ0FBQztRQUM3RDtZQUNFTDtZQUNBQztZQUNBQztZQUNBQztZQUNBQztRQUNGO0tBQ0Q7SUFFRCxJQUFJZixPQUFPO1FBQ1QsT0FBT1gscURBQVlBLENBQUNnQixJQUFJLENBQUM7WUFBRUwsT0FBT0EsTUFBTU0sT0FBTztRQUFDLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ25FO0lBRUEsT0FBT2xCLHFEQUFZQSxDQUFDZ0IsSUFBSSxDQUN0QjtRQUFFQyxTQUFTO1FBQWtDUDtJQUFLLEdBQ2xEO1FBQUVRLFFBQVE7SUFBSTtBQUVsQjtBQUVBLGlDQUFpQztBQUMxQixlQUFlVSxPQUFPUixHQUFZO0lBQ3ZDLE1BQU0sRUFBRVMsRUFBRSxFQUFFLEdBQUcsTUFBTVQsSUFBSUosSUFBSTtJQUU3QixJQUFJLENBQUNhLElBQUk7UUFDUCxPQUFPN0IscURBQVlBLENBQUNnQixJQUFJLENBQUM7WUFBRUwsT0FBTztRQUErQixHQUFHO1lBQUVPLFFBQVE7UUFBSTtJQUNwRjtJQUVBLE1BQU0sRUFBRVAsS0FBSyxFQUFFLEdBQUcsTUFBTUgsU0FBU0ksSUFBSSxDQUFDLFlBQVlrQixNQUFNLEdBQUdDLEVBQUUsQ0FBQyxNQUFNRjtJQUVwRSxJQUFJbEIsT0FBTztRQUNULE9BQU9YLHFEQUFZQSxDQUFDZ0IsSUFBSSxDQUFDO1lBQUVMLE9BQU9BLE1BQU1NLE9BQU87UUFBQyxHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUNuRTtJQUVBLE9BQU9sQixxREFBWUEsQ0FBQ2dCLElBQUksQ0FDdEI7UUFBRUMsU0FBUztJQUFnQyxHQUMzQztRQUFFQyxRQUFRO0lBQUk7QUFFbEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rYm1rLy4vc3JjL2FwcC9hcGkvYXJ0aWNsZXMvcm91dGUudHM/N2E0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSBcIkBzdXBhYmFzZS9zdXBhYmFzZS1qc1wiO1xyXG5cclxuY29uc3Qgc3VwYWJhc2VVcmwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwhO1xyXG5jb25zdCBzdXBhYmFzZUtleSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX0FOT05fS0VZITtcclxuY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVDbGllbnQoc3VwYWJhc2VVcmwsIHN1cGFiYXNlS2V5KTtcclxuXHJcbi8vIOKchSBBbWJpbCBzZW11YSBhcnRpa2VsXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwiYXJ0aWNsZXNcIilcclxuICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAub3JkZXIoXCJjcmVhdGVkX2F0XCIsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KTtcclxuXHJcbiAgaWYgKGVycm9yKSB7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogZXJyb3IubWVzc2FnZSB9LCB7IHN0YXR1czogNTAwIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKGRhdGEsIHsgc3RhdHVzOiAyMDAgfSk7XHJcbn1cclxuXHJcbi8vIOKchSBUYW1iYWggYXJ0aWtlbCBiYXJ1XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTogUmVxdWVzdCkge1xyXG4gIGNvbnN0IGJvZHkgPSBhd2FpdCByZXEuanNvbigpO1xyXG4gIGNvbnN0IHsgdGl0bGUsIGNvbnRlbnQsIGNhdGVnb3J5LCBhdXRob3IsIGltYWdlX3VybCB9ID0gYm9keTtcclxuXHJcbiAgaWYgKCF0aXRsZSB8fCAhY29udGVudCB8fCAhY2F0ZWdvcnkgfHwgIWF1dGhvcikge1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICB7IGVycm9yOiBcIlNlbXVhIGZpZWxkIHdhamliIGRpaXNpLlwiIH0sXHJcbiAgICAgIHsgc3RhdHVzOiA0MDAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oXCJhcnRpY2xlc1wiKS5pbnNlcnQoW1xyXG4gICAge1xyXG4gICAgICB0aXRsZSxcclxuICAgICAgY29udGVudCxcclxuICAgICAgY2F0ZWdvcnksXHJcbiAgICAgIGF1dGhvcixcclxuICAgICAgaW1hZ2VfdXJsLFxyXG4gICAgfSxcclxuICBdKTtcclxuXHJcbiAgaWYgKGVycm9yKSB7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogZXJyb3IubWVzc2FnZSB9LCB7IHN0YXR1czogNTAwIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgeyBtZXNzYWdlOiBcIuKchSBBcnRpa2VsIGJlcmhhc2lsIGRpdGFtYmFoa2FuXCIsIGRhdGEgfSxcclxuICAgIHsgc3RhdHVzOiAyMDEgfVxyXG4gICk7XHJcbn1cclxuXHJcbi8vIOKchSBIYXB1cyBhcnRpa2VsIGJlcmRhc2Fya2FuIElEXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBERUxFVEUocmVxOiBSZXF1ZXN0KSB7XHJcbiAgY29uc3QgeyBpZCB9ID0gYXdhaXQgcmVxLmpzb24oKTtcclxuXHJcbiAgaWYgKCFpZCkge1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiSUQgYXJ0aWtlbCB3YWppYiBkaXNlcnRha2FuLlwiIH0sIHsgc3RhdHVzOiA0MDAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKFwiYXJ0aWNsZXNcIikuZGVsZXRlKCkuZXEoXCJpZFwiLCBpZCk7XHJcblxyXG4gIGlmIChlcnJvcikge1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgIHsgbWVzc2FnZTogXCLwn5eR77iPIEFydGlrZWwgYmVyaGFzaWwgZGloYXB1cy5cIiB9LFxyXG4gICAgeyBzdGF0dXM6IDIwMCB9XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiY3JlYXRlQ2xpZW50Iiwic3VwYWJhc2VVcmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMIiwic3VwYWJhc2VLZXkiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9BTk9OX0tFWSIsInN1cGFiYXNlIiwiR0VUIiwiZGF0YSIsImVycm9yIiwiZnJvbSIsInNlbGVjdCIsIm9yZGVyIiwiYXNjZW5kaW5nIiwianNvbiIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJQT1NUIiwicmVxIiwiYm9keSIsInRpdGxlIiwiY29udGVudCIsImNhdGVnb3J5IiwiYXV0aG9yIiwiaW1hZ2VfdXJsIiwiaW5zZXJ0IiwiREVMRVRFIiwiaWQiLCJkZWxldGUiLCJlcSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/articles/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@supabase","vendor-chunks/whatwg-url","vendor-chunks/tr46","vendor-chunks/webidl-conversions"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Farticles%2Froute&page=%2Fapi%2Farticles%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Farticles%2Froute.ts&appDir=C%3A%5CUsers%5CUSER%5CPictures%5CKBMK-master%5CKBMK-master%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CUSER%5CPictures%5CKBMK-master%5CKBMK-master&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();
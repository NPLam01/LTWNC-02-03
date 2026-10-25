module.exports = [
"[project]/src/app/products/opengraph-image--metadata.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$opengraph$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/products/opengraph-image.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$lib$2f$metadata$2f$get$2d$metadata$2d$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/lib/metadata/get-metadata-route.js [app-rsc] (ecmascript)");
;
;
const imageModule = {
    alt: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$opengraph$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["alt"],
    contentType: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$opengraph$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["contentType"],
    runtime: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$opengraph$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["runtime"],
    size: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$opengraph$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["size"]
};
async function __TURBOPACK__default__export__(props) {
    const { __metadata_id__: _, ...params } = await props.params;
    const imageUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$lib$2f$metadata$2f$get$2d$metadata$2d$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fillMetadataSegment"])("/products", params, "opengraph-image", false);
    function getImageMetadata(imageMetadata, idParam) {
        const data = {
            alt: imageMetadata.alt,
            type: imageMetadata.contentType || 'image/png',
            url: imageUrl + (idParam ? '/' + idParam : '') + '?' + "86a57e99b493108d"
        };
        const { size } = imageMetadata;
        if (size) {
            data.width = size.width;
            data.height = size.height;
        }
        return data;
    }
    return [
        getImageMetadata(imageModule, '')
    ];
}
}),
"[project]/src/app/products/opengraph-image--metadata.js [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/products/opengraph-image--metadata.js [app-rsc] (ecmascript)"));
}),
"[project]/src/app/products/opengraph-image.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "alt",
    ()=>alt,
    "contentType",
    ()=>contentType,
    "default",
    ()=>Image,
    "runtime",
    ()=>runtime,
    "size",
    ()=>size
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
// ============================================================
// src/app/products/opengraph-image.tsx
// OG image động cho trang /products — 1200×630px
// ============================================================
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$og$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/og.js [app-rsc] (ecmascript)");
;
;
const runtime = "edge";
const alt = "Danh sách Sản phẩm Công nghệ — Product Explorer";
const size = {
    width: 1200,
    height: 630
};
const contentType = "image/png";
const PRODUCTS_PREVIEW = [
    {
        icon: "💻",
        name: "MacBook Pro M3",
        price: "59.990.000 ₫"
    },
    {
        icon: "📱",
        name: "iPhone 15 Pro Max",
        price: "29.490.000 ₫"
    },
    {
        icon: "🎧",
        name: "Sony WH-1000XM5",
        price: "6.990.000 ₫"
    },
    {
        icon: "📷",
        name: "Sony Alpha 7 IV",
        price: "49.990.000 ₫"
    }
];
function Image() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$og$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ImageResponse"](/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: "linear-gradient(135deg, #0a0a12 0%, #16162a 100%)",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "system-ui, sans-serif",
            padding: 60
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    marginBottom: 40
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: 48
                        },
                        children: "🛍️"
                    }, void 0, false, {
                        fileName: "[project]/src/app/products/opengraph-image.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 48,
                                    fontWeight: 800,
                                    color: "#f1f5f9",
                                    lineHeight: 1
                                },
                                children: "Sản phẩm Công nghệ"
                            }, void 0, false, {
                                fileName: "[project]/src/app/products/opengraph-image.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 22,
                                    color: "#94a3b8",
                                    marginTop: 8
                                },
                                children: [
                                    "Product Explorer · ",
                                    new Date().getFullYear()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/products/opengraph-image.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/products/opengraph-image.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/products/opengraph-image.tsx",
                lineNumber: 37,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: 20,
                    width: "100%"
                },
                children: PRODUCTS_PREVIEW.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(99,102,241,0.3)",
                            borderRadius: 16,
                            padding: "20px 16px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 10
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 40
                                },
                                children: p.icon
                            }, void 0, false, {
                                fileName: "[project]/src/app/products/opengraph-image.tsx",
                                lineNumber: 81,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 14,
                                    color: "#f1f5f9",
                                    fontWeight: 600,
                                    textAlign: "center",
                                    lineHeight: 1.3
                                },
                                children: p.name
                            }, void 0, false, {
                                fileName: "[project]/src/app/products/opengraph-image.tsx",
                                lineNumber: 82,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 13,
                                    color: "#06b6d4",
                                    fontWeight: 700
                                },
                                children: p.price
                            }, void 0, false, {
                                fileName: "[project]/src/app/products/opengraph-image.tsx",
                                lineNumber: 93,
                                columnNumber: 15
                            }, this)
                        ]
                    }, p.name, true, {
                        fileName: "[project]/src/app/products/opengraph-image.tsx",
                        lineNumber: 67,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/products/opengraph-image.tsx",
                lineNumber: 59,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 36,
                    fontSize: 18,
                    color: "#6366f1",
                    fontWeight: 600
                },
                children: "⚡ Khám phá ngay tại productexplorer.vn"
            }, void 0, false, {
                fileName: "[project]/src/app/products/opengraph-image.tsx",
                lineNumber: 101,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/products/opengraph-image.tsx",
        lineNumber: 23,
        columnNumber: 7
    }, this), {
        ...size
    });
}
}),
];

//# sourceMappingURL=src_app_products_1lkbqsvpq2d_8._.js.map
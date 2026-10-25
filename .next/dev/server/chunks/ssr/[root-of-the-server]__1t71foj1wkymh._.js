module.exports = [
(()=>{"use strict";return[
"[project]/src/app/products/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ============================================================
// src/app/products/page.tsx
// Trang danh sách sản phẩm (/products) — Public, Server Component
// SEO: canonical, OpenGraph, JSON-LD CollectionPage + ItemList
// ============================================================
__turbopack_context__.s([
    "default",
    ()=>ProductsPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$JsonLd$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/JsonLd.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductExplorerClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProductExplorerClient.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockProducts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mockProducts.ts [app-rsc] (ecmascript)");
;
;
;
;
;
const APP_URL = process.env.NEXTAUTH_URL ?? "http://localhost:3000";
const PAGE_URL = `${APP_URL}/products`;
const metadata = {
    title: "Danh sách Sản phẩm Công nghệ",
    description: "Tìm kiếm và lọc hàng trăm sản phẩm công nghệ: Laptop, Điện thoại, Tablet, Màn hình, Bàn phím, Chuột, Tai nghe, Camera, Loa. So sánh giá và đặt hàng ngay.",
    alternates: {
        canonical: PAGE_URL
    },
    openGraph: {
        title: "Danh sách Sản phẩm Công nghệ | Product Explorer",
        description: "Khám phá và lọc sản phẩm công nghệ theo danh mục, giá và đánh giá. Hơn 24 sản phẩm hàng đầu.",
        url: PAGE_URL,
        type: "website",
        images: [
            {
                url: `${APP_URL}/products/opengraph-image`,
                width: 1200,
                height: 630,
                alt: "Danh sách sản phẩm công nghệ — Product Explorer"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Danh sách Sản phẩm | Product Explorer",
        description: "Tìm kiếm sản phẩm công nghệ phù hợp với nhu cầu của bạn.",
        images: [
            `${APP_URL}/products/opengraph-image`
        ]
    },
    robots: {
        index: true,
        follow: true
    }
};
/** JSON-LD: CollectionPage */ const collectionPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Danh sách Sản phẩm Công nghệ",
    description: "Tìm kiếm và lọc sản phẩm công nghệ: Laptop, Điện thoại, Tablet và nhiều hơn nữa.",
    url: PAGE_URL,
    breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Trang chủ",
                item: APP_URL
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Sản phẩm",
                item: PAGE_URL
            }
        ]
    }
};
/** JSON-LD: ItemList — hiển thị top 5 sản phẩm */ const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Sản phẩm nổi bật",
    url: PAGE_URL,
    numberOfItems: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockProducts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INITIAL_MOCK_PRODUCTS"].length,
    itemListElement: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockProducts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INITIAL_MOCK_PRODUCTS"].slice(0, 5).map((p, i)=>({
            "@type": "ListItem",
            position: i + 1,
            name: p.name,
            url: `${PAGE_URL}#product-${p.id}`,
            item: {
                "@type": "Product",
                name: p.name,
                brand: {
                    "@type": "Brand",
                    name: p.brand
                },
                offers: {
                    "@type": "Offer",
                    priceCurrency: "VND",
                    price: p.price,
                    availability: p.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
                }
            }
        }))
};
function ProductsPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$JsonLd$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JsonLd"], {
                data: collectionPageJsonLd
            }, void 0, false, {
                fileName: "[project]/src/app/products/page.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$JsonLd$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JsonLd"], {
                data: itemListJsonLd
            }, void 0, false, {
                fileName: "[project]/src/app/products/page.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        minHeight: "100vh",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#94a3b8"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "spinner"
                        }, void 0, false, {
                            fileName: "[project]/src/app/products/page.tsx",
                            lineNumber: 110,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                marginLeft: 12
                            },
                            children: "Đang tải sản phẩm..."
                        }, void 0, false, {
                            fileName: "[project]/src/app/products/page.tsx",
                            lineNumber: 111,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/products/page.tsx",
                    lineNumber: 101,
                    columnNumber: 11
                }, this),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductExplorerClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProductExplorerClient"], {}, void 0, false, {
                    fileName: "[project]/src/app/products/page.tsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/products/page.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/products/page.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/JsonLd.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ============================================================
// src/components/JsonLd.tsx
// Component chèn JSON-LD structured data an toàn
// ============================================================
__turbopack_context__.s([
    "JsonLd",
    ()=>JsonLd
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function JsonLd({ data }) {
    // Escape </script> để tránh XSS khi dữ liệu động
    const jsonString = JSON.stringify(data).replace(/<\/script>/gi, "<\\/script>");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
        type: "application/ld+json",
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML: {
            __html: jsonString
        }
    }, void 0, false, {
        fileName: "[project]/src/components/JsonLd.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ProductExplorerClient.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductExplorerClient",
    ()=>ProductExplorerClient
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ProductExplorerClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ProductExplorerClient() from the server but ProductExplorerClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ProductExplorerClient.tsx", "ProductExplorerClient");
}),
"[project]/src/components/ProductExplorerClient.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductExplorerClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/ProductExplorerClient.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductExplorerClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/data/mockProducts.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INITIAL_MOCK_PRODUCTS",
    ()=>INITIAL_MOCK_PRODUCTS
]);
const INITIAL_MOCK_PRODUCTS = [
    // Laptop
    {
        id: 1,
        name: "Apple MacBook Pro 16\" M3 Max",
        category: "Laptop",
        brand: "Apple",
        price: 59_990_000,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
        stock: 12
    },
    {
        id: 2,
        name: "Dell XPS 15 9530 Core i9",
        category: "Laptop",
        brand: "Dell",
        price: 44_500_000,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=600&q=80",
        stock: 8
    },
    {
        id: 3,
        name: "ASUS ROG Zephyrus G16 OLED",
        category: "Laptop",
        brand: "Asus",
        price: 38_990_000,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=600&q=80",
        stock: 5
    },
    // Phone
    {
        id: 4,
        name: "iPhone 15 Pro Max 256GB Titanium",
        category: "Phone",
        brand: "Apple",
        price: 29_490_000,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80",
        stock: 20
    },
    {
        id: 5,
        name: "Samsung Galaxy S24 Ultra 5G",
        category: "Phone",
        brand: "Samsung",
        price: 28_990_000,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80",
        stock: 15
    },
    {
        id: 6,
        name: "Google Pixel 8 Pro AI Camera",
        category: "Phone",
        brand: "Google",
        price: 18_500_000,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80",
        stock: 7
    },
    // Tablet
    {
        id: 7,
        name: "iPad Pro 11\" M4 Ultra Retina OLED",
        category: "Tablet",
        brand: "Apple",
        price: 26_990_000,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80",
        stock: 10
    },
    {
        id: 8,
        name: "Samsung Galaxy Tab S9 Ultra",
        category: "Tablet",
        brand: "Samsung",
        price: 22_490_000,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=600&q=80",
        stock: 6
    },
    // Monitor
    {
        id: 9,
        name: "Dell UltraSharp 27 4K U2723QE",
        category: "Monitor",
        brand: "Dell",
        price: 12_800_000,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80",
        stock: 14
    },
    {
        id: 10,
        name: "LG UltraGear OLED 27\" 240Hz",
        category: "Monitor",
        brand: "LG",
        price: 17_900_000,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?auto=format&fit=crop&w=600&q=80",
        stock: 4
    },
    // Keyboard
    {
        id: 11,
        name: "Keychron Q1 Pro QMK Wireless Custom",
        category: "Keyboard",
        brand: "Keychron",
        price: 4_250_000,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80",
        stock: 18
    },
    {
        id: 12,
        name: "Logitech MX Mechanical Wireless",
        category: "Keyboard",
        brand: "Logitech",
        price: 3_690_000,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=600&q=80",
        stock: 22
    },
    {
        id: 13,
        name: "Razer BlackWidow V4 Pro Chroma",
        category: "Keyboard",
        brand: "Razer",
        price: 4_890_000,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=600&q=80",
        stock: 9
    },
    // Mouse
    {
        id: 14,
        name: "Logitech MX Master 3S Quiet Click",
        category: "Mouse",
        brand: "Logitech",
        price: 2_190_000,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80",
        stock: 25
    },
    {
        id: 15,
        name: "Razer DeathAdder V3 Pro Wireless",
        category: "Mouse",
        brand: "Razer",
        price: 2_890_000,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=600&q=80",
        stock: 11
    },
    {
        id: 16,
        name: "Logitech G Pro X Superlight 2",
        category: "Mouse",
        brand: "Logitech",
        price: 3_190_000,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1626218174358-7769486c4b79?auto=format&fit=crop&w=600&q=80",
        stock: 16
    },
    // Headphone
    {
        id: 17,
        name: "Sony WH-1000XM5 Hi-Res Wireless",
        category: "Headphone",
        brand: "Sony",
        price: 6_990_000,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
        stock: 19
    },
    {
        id: 18,
        name: "Apple AirPods Max Space Gray",
        category: "Headphone",
        brand: "Apple",
        price: 11_990_000,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80",
        stock: 8
    },
    {
        id: 19,
        name: "Bose QuietComfort Ultra Headphones",
        category: "Headphone",
        brand: "Bose",
        price: 7_990_000,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=600&q=80",
        stock: 12
    },
    // Camera
    {
        id: 20,
        name: "Sony Alpha 7 IV Full-frame Mirrorless",
        category: "Camera",
        brand: "Sony",
        price: 49_990_000,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80",
        stock: 4
    },
    {
        id: 21,
        name: "Canon EOS R6 Mark II Body",
        category: "Camera",
        brand: "Canon",
        price: 53_500_000,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=600&q=80",
        stock: 3
    },
    {
        id: 22,
        name: "Fujifilm X-T5 Mirrorless Classic",
        category: "Camera",
        brand: "Fujifilm",
        price: 39_990_000,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?auto=format&fit=crop&w=600&q=80",
        stock: 6
    },
    // Speaker
    {
        id: 23,
        name: "Marshall Stanmore III Bluetooth Speaker",
        category: "Speaker",
        brand: "Marshall",
        price: 8_990_000,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=600&q=80",
        stock: 10
    },
    {
        id: 24,
        name: "JBL Charge 5 Waterproof Portable",
        category: "Speaker",
        brand: "JBL",
        price: 3_490_000,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80",
        stock: 20
    }
];
}),
]})(),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/products/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/products/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1t71foj1wkymh._.js.map
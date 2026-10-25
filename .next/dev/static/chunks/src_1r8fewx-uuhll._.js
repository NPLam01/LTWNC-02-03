(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/CartDrawer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartDrawer",
    ()=>CartDrawer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ShopContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ShopContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
function formatPrice(price) {
    return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
        maximumFractionDigits: 0
    }).format(price);
}
const FREE_SHIPPING_THRESHOLD = 1_000_000;
function CartDrawer() {
    _s();
    const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, clearCart, totalCartCount, totalCartPrice, showToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ShopContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShop"])();
    const [isCheckingOut, setIsCheckingOut] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [checkoutSuccess, setCheckoutSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (!isCartOpen) return null;
    const freeShippingProgress = Math.min(100, Math.round(totalCartPrice / FREE_SHIPPING_THRESHOLD * 100));
    const handleCheckout = ()=>{
        if (cart.length === 0) return;
        setIsCheckingOut(true);
        setTimeout(()=>{
            setIsCheckingOut(false);
            setCheckoutSuccess(true);
            clearCart();
        }, 1200);
    };
    const handleClose = ()=>{
        setIsCartOpen(false);
        setCheckoutSuccess(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "drawer-overlay",
        onClick: handleClose,
        role: "dialog",
        "aria-modal": "true",
        "aria-label": "Giỏ hàng",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "drawer-panel",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "drawer-header",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "drawer-title-group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "Giỏ hàng của bạn"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CartDrawer.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "drawer-badge",
                                    children: [
                                        totalCartCount,
                                        " sản phẩm"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CartDrawer.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CartDrawer.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "drawer-close-btn",
                            onClick: handleClose,
                            "aria-label": "Đóng giỏ hàng",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CartDrawer.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CartDrawer.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this),
                checkoutSuccess ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "drawer-empty-state checkout-success-view",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: "Đặt hàng thành công!"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CartDrawer.tsx",
                            lineNumber: 80,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Cảm ơn bạn đã mua hàng. Đơn hàng của bạn đang được chuẩn bị và sẽ được giao trong thời gian sớm nhất!"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CartDrawer.tsx",
                            lineNumber: 81,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "drawer-cta-btn",
                            onClick: handleClose,
                            children: "Tiếp tục mua sắm"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CartDrawer.tsx",
                            lineNumber: 85,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CartDrawer.tsx",
                    lineNumber: 79,
                    columnNumber: 11
                }, this) : cart.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "drawer-empty-state",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: "Giỏ hàng đang trống"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CartDrawer.tsx",
                            lineNumber: 94,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Bạn chưa thêm sản phẩm nào. Hãy lựa chọn sản phẩm yêu thích nhé!"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CartDrawer.tsx",
                            lineNumber: 95,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "drawer-cta-btn",
                            onClick: handleClose,
                            children: "Khám phá sản phẩm ngay"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CartDrawer.tsx",
                            lineNumber: 96,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CartDrawer.tsx",
                    lineNumber: 93,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "shipping-progress-container",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "shipping-progress-text",
                                    children: totalCartPrice >= FREE_SHIPPING_THRESHOLD ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "shipping-free-unlocked",
                                        children: [
                                            "🎉 Đơn hàng của bạn được ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "MIỄN PHÍ VẬN CHUYỂN"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CartDrawer.tsx",
                                                lineNumber: 110,
                                                columnNumber: 46
                                            }, this),
                                            "!"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CartDrawer.tsx",
                                        lineNumber: 109,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "Mua thêm",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: formatPrice(FREE_SHIPPING_THRESHOLD - totalCartPrice)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CartDrawer.tsx",
                                                lineNumber: 115,
                                                columnNumber: 21
                                            }, this),
                                            " ",
                                            "để được miễn phí vận chuyển"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CartDrawer.tsx",
                                        lineNumber: 113,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CartDrawer.tsx",
                                    lineNumber: 107,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "shipping-progress-bar",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "shipping-progress-fill",
                                        style: {
                                            width: `${freeShippingProgress}%`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CartDrawer.tsx",
                                        lineNumber: 123,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CartDrawer.tsx",
                                    lineNumber: 122,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CartDrawer.tsx",
                            lineNumber: 106,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "drawer-items-list",
                            children: cart.map(({ product, quantity })=>{
                                const isMax = quantity >= product.stock;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "drawer-item-card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: product.image,
                                            alt: product.name,
                                            className: "drawer-item-img"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CartDrawer.tsx",
                                            lineNumber: 136,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "drawer-item-info",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "drawer-item-top",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "drawer-item-brand",
                                                            children: product.brand
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CartDrawer.tsx",
                                                            lineNumber: 143,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "drawer-item-remove",
                                                            onClick: ()=>removeFromCart(product.id),
                                                            title: "Xóa khỏi giỏ hàng",
                                                            "aria-label": `Xóa ${product.name}`,
                                                            children: "✕"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CartDrawer.tsx",
                                                            lineNumber: 144,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CartDrawer.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "drawer-item-title",
                                                    children: product.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CartDrawer.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "drawer-item-price-unit",
                                                    children: formatPrice(product.price)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CartDrawer.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "drawer-item-bottom",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "quantity-control",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "qty-btn",
                                                                    onClick: ()=>updateQuantity(product.id, quantity - 1),
                                                                    "aria-label": "Giảm số lượng",
                                                                    children: "−"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CartDrawer.tsx",
                                                                    lineNumber: 160,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "qty-value",
                                                                    children: quantity
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CartDrawer.tsx",
                                                                    lineNumber: 167,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: `qty-btn ${isMax ? "disabled" : ""}`,
                                                                    onClick: ()=>{
                                                                        if (isMax) {
                                                                            showToast(`Chỉ còn ${product.stock} sản phẩm trong kho!`, "warning");
                                                                        } else {
                                                                            updateQuantity(product.id, quantity + 1);
                                                                        }
                                                                    },
                                                                    disabled: isMax,
                                                                    "aria-label": "Tăng số lượng",
                                                                    children: "+"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CartDrawer.tsx",
                                                                    lineNumber: 168,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CartDrawer.tsx",
                                                            lineNumber: 159,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "drawer-item-subtotal",
                                                            children: formatPrice(product.price * quantity)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CartDrawer.tsx",
                                                            lineNumber: 187,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CartDrawer.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 23
                                                }, this),
                                                isMax && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "stock-limit-note",
                                                    children: [
                                                        "(Đã đạt giới hạn kho: ",
                                                        product.stock,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CartDrawer.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CartDrawer.tsx",
                                            lineNumber: 141,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, product.id, true, {
                                    fileName: "[project]/src/components/CartDrawer.tsx",
                                    lineNumber: 135,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/CartDrawer.tsx",
                            lineNumber: 131,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "drawer-footer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "drawer-summary-row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "Tạm tính (",
                                                totalCartCount,
                                                " món):"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CartDrawer.tsx",
                                            lineNumber: 206,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: formatPrice(totalCartPrice)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CartDrawer.tsx",
                                            lineNumber: 207,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CartDrawer.tsx",
                                    lineNumber: 205,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "drawer-summary-row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Phí vận chuyển:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CartDrawer.tsx",
                                            lineNumber: 210,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: totalCartPrice >= FREE_SHIPPING_THRESHOLD ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-success",
                                                children: "Miễn phí"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CartDrawer.tsx",
                                                lineNumber: 213,
                                                columnNumber: 21
                                            }, this) : "30.000 ₫"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CartDrawer.tsx",
                                            lineNumber: 211,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CartDrawer.tsx",
                                    lineNumber: 209,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "drawer-summary-row total-row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Tổng cộng:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CartDrawer.tsx",
                                            lineNumber: 220,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "drawer-total-price",
                                            children: formatPrice(totalCartPrice + (totalCartPrice >= FREE_SHIPPING_THRESHOLD ? 0 : 30_000))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CartDrawer.tsx",
                                            lineNumber: 221,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CartDrawer.tsx",
                                    lineNumber: 219,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "drawer-actions",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "drawer-checkout-btn",
                                            onClick: handleCheckout,
                                            disabled: isCheckingOut,
                                            children: isCheckingOut ? "Đang xử lý..." : "Tiến hành thanh toán"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CartDrawer.tsx",
                                            lineNumber: 230,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "drawer-clear-btn",
                                            type: "button",
                                            onClick: clearCart,
                                            title: "Xóa tất cả sản phẩm trong giỏ hàng",
                                            children: "Xóa tất cả"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CartDrawer.tsx",
                                            lineNumber: 237,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CartDrawer.tsx",
                                    lineNumber: 229,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CartDrawer.tsx",
                            lineNumber: 204,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CartDrawer.tsx",
                    lineNumber: 104,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/CartDrawer.tsx",
            lineNumber: 60,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/CartDrawer.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_s(CartDrawer, "5y+OtW4JGBmVq7hjKuJIScuIXpI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ShopContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShop"]
    ];
});
_c = CartDrawer;
var _c;
__turbopack_context__.k.register(_c, "CartDrawer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/FilterBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FilterBar",
    ()=>FilterBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/products.ts [app-client] (ecmascript)");
;
;
function FilterBar({ category, sortOption, onCategoryChange, onSortChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "filter-bar",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "filter-group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "filter-label",
                        htmlFor: "category-select",
                        children: "Danh mục"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FilterBar.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        id: "category-select",
                        className: "filter-select",
                        value: category,
                        onChange: (e)=>onCategoryChange(e.target.value),
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORIES_LIST"].map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: cat,
                                children: cat === "All" ? "Tất cả" : cat
                            }, cat, false, {
                                fileName: "[project]/src/components/FilterBar.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/FilterBar.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FilterBar.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "filter-group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "filter-label",
                        htmlFor: "sort-select",
                        children: "Sắp xếp"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FilterBar.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        id: "sort-select",
                        className: "filter-select",
                        value: sortOption,
                        onChange: (e)=>onSortChange(e.target.value),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "price-asc",
                                children: "Giá: Thấp → Cao"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FilterBar.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "price-desc",
                                children: "Giá: Cao → Thấp"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FilterBar.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "rating-desc",
                                children: "Đánh giá cao nhất"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FilterBar.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "name-asc",
                                children: "Tên A → Z"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FilterBar.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FilterBar.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FilterBar.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FilterBar.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = FilterBar;
var _c;
__turbopack_context__.k.register(_c, "FilterBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ProductCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductCard",
    ()=>ProductCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ShopContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ShopContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
function formatPrice(price) {
    return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
        maximumFractionDigits: 0
    }).format(price);
}
function renderStars(rating) {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5 ? 1 : 0;
    const empty = 5 - full - half;
    return "★".repeat(full) + (half ? "½" : "") + "☆".repeat(empty);
}
const ProductCard = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = _s(function ProductCard({ product, onClick }) {
    _s();
    const { isWishlisted, toggleWishlist, addToCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ShopContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShop"])();
    const isLiked = isWishlisted(product.id);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "product-card",
        onClick: ()=>onClick(product),
        role: "button",
        tabIndex: 0,
        onKeyDown: (e)=>e.key === "Enter" && onClick(product),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "product-card-image-wrapper",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: product.image,
                        alt: product.name,
                        className: "product-card-image",
                        loading: "lazy"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductCard.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "product-card-category",
                        children: product.category
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductCard.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `product-card-stock ${product.stock <= 5 ? "low" : ""}`,
                        children: product.stock <= 0 ? "Hết hàng" : product.stock <= 5 ? `Còn ${product.stock}` : "Còn hàng"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductCard.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `product-card-wishlist-btn ${isLiked ? "active" : ""}`,
                        onClick: (e)=>{
                            e.stopPropagation();
                            toggleWishlist(product);
                        },
                        title: isLiked ? "Bỏ yêu thích" : "Thêm vào yêu thích",
                        "aria-label": isLiked ? "Bỏ yêu thích" : "Thêm vào yêu thích",
                        children: isLiked ? "Đã lưu" : "Lưu"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductCard.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProductCard.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "product-card-body",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "product-card-brand",
                        children: product.brand
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductCard.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "product-card-name",
                        title: product.name,
                        children: product.name
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductCard.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "product-card-rating",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "product-card-rating-value",
                            children: [
                                product.rating,
                                " / 5"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProductCard.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductCard.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "product-card-footer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "product-card-price",
                                children: formatPrice(product.price)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductCard.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "product-card-actions",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "product-card-cart-btn",
                                        onClick: (e)=>{
                                            e.stopPropagation();
                                            addToCart(product, 1);
                                        },
                                        title: "Thêm vào giỏ hàng",
                                        "aria-label": "Thêm vào giỏ hàng",
                                        disabled: product.stock <= 0,
                                        children: "Thêm"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductCard.tsx",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "product-card-btn",
                                        onClick: (e)=>{
                                            e.stopPropagation();
                                            onClick(product);
                                        },
                                        children: "Chi tiết"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductCard.tsx",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProductCard.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductCard.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProductCard.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ProductCard.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}, "locKsaQ0qgVcdRKBASWCzTMaTYA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ShopContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShop"]
    ];
})), "locKsaQ0qgVcdRKBASWCzTMaTYA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ShopContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShop"]
    ];
});
_c1 = ProductCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "ProductCard$memo");
__turbopack_context__.k.register(_c1, "ProductCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ProductDetail.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductDetail",
    ()=>ProductDetail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ShopContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ShopContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
function formatPrice(price) {
    return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
        maximumFractionDigits: 0
    }).format(price);
}
function renderStars(rating) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "modal-rating-score",
        children: [
            rating,
            " / 5"
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ProductDetail.tsx",
        lineNumber: 19,
        columnNumber: 10
    }, this);
}
function ProductDetail({ product, onClose }) {
    _s();
    const { addToCart, toggleWishlist, isWishlisted } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ShopContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShop"])();
    const [quantity, setQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const isLiked = isWishlisted(product.id);
    const handleAddToCart = ()=>{
        if (product.stock <= 0) return;
        const ok = addToCart(product, quantity);
        if (ok) {
        // Optional: keep modal open or let user continue browsing
        }
    };
    const handleDecrease = ()=>{
        setQuantity((q)=>Math.max(1, q - 1));
    };
    const handleIncrease = ()=>{
        setQuantity((q)=>Math.min(product.stock, q + 1));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "modal-overlay",
        onClick: onClose,
        role: "dialog",
        "aria-modal": "true",
        "aria-label": `Chi tiết sản phẩm ${product.name}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "modal-content",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "modal-close",
                    onClick: onClose,
                    "aria-label": "Đóng",
                    children: "✕"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProductDetail.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-body",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "modal-image-section",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: product.image,
                                    alt: product.name,
                                    className: "modal-image"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductDetail.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "modal-category-badge",
                                    children: product.category
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductDetail.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProductDetail.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "modal-info-section",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "modal-brand",
                                    children: product.brand
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductDetail.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "modal-product-name",
                                    children: product.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductDetail.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "modal-rating",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "modal-stars",
                                            children: renderStars(product.rating)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductDetail.tsx",
                                            lineNumber: 78,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "modal-rating-value",
                                            children: [
                                                product.rating,
                                                " / 5.0"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ProductDetail.tsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProductDetail.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "modal-price-section",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "modal-price",
                                        children: formatPrice(product.price)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductDetail.tsx",
                                        lineNumber: 85,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductDetail.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "modal-meta",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "modal-meta-item",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "modal-meta-label",
                                                    children: "Danh mục"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProductDetail.tsx",
                                                    lineNumber: 90,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "modal-meta-value",
                                                    children: product.category
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProductDetail.tsx",
                                                    lineNumber: 91,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ProductDetail.tsx",
                                            lineNumber: 89,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "modal-meta-item",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "modal-meta-label",
                                                    children: "Thương hiệu"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProductDetail.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "modal-meta-value",
                                                    children: product.brand
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProductDetail.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ProductDetail.tsx",
                                            lineNumber: 93,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "modal-meta-item",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "modal-meta-label",
                                                    children: "Mã sản phẩm"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProductDetail.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "modal-meta-value",
                                                    children: [
                                                        "#",
                                                        String(product.id).padStart(5, "0")
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ProductDetail.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ProductDetail.tsx",
                                            lineNumber: 97,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "modal-meta-item",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "modal-meta-label",
                                                    children: "Kho hàng"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProductDetail.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `modal-meta-value ${product.stock <= 0 ? "stock-low" : product.stock <= 5 ? "stock-low" : "stock-ok"}`,
                                                    children: product.stock <= 0 ? "Hết hàng" : product.stock <= 5 ? `Chỉ còn ${product.stock} sản phẩm` : `Còn ${product.stock} sản phẩm`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProductDetail.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ProductDetail.tsx",
                                            lineNumber: 101,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProductDetail.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this),
                                product.stock > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "modal-quantity-row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "modal-quantity-label",
                                            children: "Số lượng:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductDetail.tsx",
                                            lineNumber: 124,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "quantity-control detail-qty",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "qty-btn",
                                                    onClick: handleDecrease,
                                                    disabled: quantity <= 1,
                                                    "aria-label": "Giảm số lượng",
                                                    children: "−"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProductDetail.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "qty-value",
                                                    children: quantity
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProductDetail.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "qty-btn",
                                                    onClick: handleIncrease,
                                                    disabled: quantity >= product.stock,
                                                    "aria-label": "Tăng số lượng",
                                                    children: "+"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProductDetail.tsx",
                                                    lineNumber: 135,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ProductDetail.tsx",
                                            lineNumber: 125,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "modal-quantity-subtotal",
                                            children: [
                                                "Tổng: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: formatPrice(product.price * quantity)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProductDetail.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ProductDetail.tsx",
                                            lineNumber: 144,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProductDetail.tsx",
                                    lineNumber: 123,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "modal-actions",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn-add-cart",
                                            onClick: handleAddToCart,
                                            disabled: product.stock <= 0,
                                            children: product.stock <= 0 ? "Tạm hết hàng" : `Thêm vào giỏ hàng (${quantity})`
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductDetail.tsx",
                                            lineNumber: 151,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: `btn-wishlist ${isLiked ? "active" : ""}`,
                                            onClick: ()=>toggleWishlist(product),
                                            "aria-label": isLiked ? "Bỏ yêu thích" : "Yêu thích",
                                            children: isLiked ? "Đã lưu" : "Lưu vào yêu thích"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductDetail.tsx",
                                            lineNumber: 160,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProductDetail.tsx",
                                    lineNumber: 150,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProductDetail.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProductDetail.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProductDetail.tsx",
            lineNumber: 51,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ProductDetail.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(ProductDetail, "yoJPK7ykFHEutF1574jdeWX5ltY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ShopContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShop"]
    ];
});
_c = ProductDetail;
var _c;
__turbopack_context__.k.register(_c, "ProductDetail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ProductExplorerClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductExplorerClient",
    ()=>ProductExplorerClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// ============================================================
// src/components/ProductExplorerClient.tsx
// Client Component — wrapper cho toàn bộ Product Explorer UI
// Giữ nguyên logic từ Vite, thêm Nav header cho Next.js
// ============================================================
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProducts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useProducts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDebounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useDebounce.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ShopContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ShopContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SearchBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FilterBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProductList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductDetail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProductDetail.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CartDrawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CartDrawer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WishlistDrawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/WishlistDrawer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToastContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ToastContainer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
function formatCompactPrice(price) {
    return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
        maximumFractionDigits: 0
    }).format(price);
}
function ProductExplorerInner() {
    _s();
    const [keyword, setKeyword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const [sortOption, setSortOption] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("price-asc");
    const [selectedProduct, setSelectedProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const debouncedKeyword = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDebounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebounce"])(keyword, 300);
    const { totalCartCount, totalCartPrice, totalWishlistCount, setIsCartOpen, setIsWishlistOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ShopContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShop"])();
    const { filteredProducts, totalCount, loading, error, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProducts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilteredProducts"])({
        keyword: debouncedKeyword,
        category,
        sortOption
    });
    const handleSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProductExplorerInner.useCallback[handleSelect]": (product)=>{
            setSelectedProduct(product);
        }
    }["ProductExplorerInner.useCallback[handleSelect]"], []);
    const handleClose = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProductExplorerInner.useCallback[handleClose]": ()=>{
            setSelectedProduct(null);
        }
    }["ProductExplorerInner.useCallback[handleClose]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "app-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "app-header",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "header-inner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "header-brand",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "header-title",
                                        children: "Product Explorer"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductExplorerClient.tsx",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "header-subtitle",
                                        children: "Danh sách sản phẩm công nghệ"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductExplorerClient.tsx",
                                        lineNumber: 65,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProductExplorerClient.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProductExplorerClient.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "header-actions",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/dashboard",
                                    className: "nav-link",
                                    style: {
                                        color: "var(--text-secondary)",
                                        textDecoration: "none",
                                        fontSize: "0.85rem",
                                        fontWeight: 500
                                    },
                                    children: "Tài khoản"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductExplorerClient.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "header-action-btn header-wishlist-btn",
                                    onClick: ()=>setIsWishlistOpen(true),
                                    title: "Danh sách yêu thích",
                                    "aria-label": "Danh sách yêu thích",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "header-action-text",
                                            children: "Yêu thích"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductExplorerClient.tsx",
                                            lineNumber: 80,
                                            columnNumber: 15
                                        }, this),
                                        totalWishlistCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "header-action-badge wishlist-badge",
                                            children: totalWishlistCount
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductExplorerClient.tsx",
                                            lineNumber: 82,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProductExplorerClient.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "header-action-btn header-cart-btn",
                                    onClick: ()=>setIsCartOpen(true),
                                    title: "Giỏ hàng của bạn",
                                    "aria-label": "Giỏ hàng của bạn",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "header-cart-text-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "header-action-text",
                                                    children: "Giỏ hàng"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProductExplorerClient.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 17
                                                }, this),
                                                totalCartCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "header-cart-total-mini",
                                                    children: formatCompactPrice(totalCartPrice)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProductExplorerClient.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ProductExplorerClient.tsx",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, this),
                                        totalCartCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "header-action-badge cart-badge",
                                            children: totalCartCount
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductExplorerClient.tsx",
                                            lineNumber: 103,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProductExplorerClient.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProductExplorerClient.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProductExplorerClient.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ProductExplorerClient.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "controls-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchBar"], {
                        value: keyword,
                        onChange: setKeyword,
                        total: totalCount,
                        filtered: filteredProducts.length
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductExplorerClient.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilterBar"], {
                        category: category,
                        sortOption: sortOption,
                        onCategoryChange: setCategory,
                        onSortChange: setSortOption
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductExplorerClient.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProductExplorerClient.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "main-content",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductList"], {
                    products: filteredProducts,
                    loading: loading,
                    error: error,
                    onRetry: refetch,
                    onSelect: handleSelect
                }, void 0, false, {
                    fileName: "[project]/src/components/ProductExplorerClient.tsx",
                    lineNumber: 128,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ProductExplorerClient.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this),
            selectedProduct && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductDetail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductDetail"], {
                product: selectedProduct,
                onClose: handleClose
            }, void 0, false, {
                fileName: "[project]/src/components/ProductExplorerClient.tsx",
                lineNumber: 138,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CartDrawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartDrawer"], {}, void 0, false, {
                fileName: "[project]/src/components/ProductExplorerClient.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WishlistDrawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WishlistDrawer"], {}, void 0, false, {
                fileName: "[project]/src/components/ProductExplorerClient.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToastContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastContainer"], {}, void 0, false, {
                fileName: "[project]/src/components/ProductExplorerClient.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ProductExplorerClient.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_s(ProductExplorerInner, "OqQRz+sdAWQbdV0/v6ORCf1ISNc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDebounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebounce"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ShopContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShop"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProducts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilteredProducts"]
    ];
});
_c = ProductExplorerInner;
function ProductExplorerClient() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ShopContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShopProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProductExplorerInner, {}, void 0, false, {
            fileName: "[project]/src/components/ProductExplorerClient.tsx",
            lineNumber: 151,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ProductExplorerClient.tsx",
        lineNumber: 150,
        columnNumber: 5
    }, this);
}
_c1 = ProductExplorerClient;
var _c, _c1;
__turbopack_context__.k.register(_c, "ProductExplorerInner");
__turbopack_context__.k.register(_c1, "ProductExplorerClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ProductList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductList",
    ()=>ProductList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProductCard.tsx [app-client] (ecmascript)");
;
;
function ProductList({ products, onSelect, loading = false, error = null, onRetry }) {
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "product-grid",
            "aria-label": "Đang tải sản phẩm...",
            children: Array.from({
                length: 8
            }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "skeleton-card",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "skeleton-image"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProductList.tsx",
                            lineNumber: 24,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "skeleton-body",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "skeleton-line short"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductList.tsx",
                                    lineNumber: 26,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "skeleton-line title"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductList.tsx",
                                    lineNumber: 27,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "skeleton-line medium"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductList.tsx",
                                    lineNumber: 28,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "skeleton-line",
                                    style: {
                                        width: "45%",
                                        marginTop: "auto"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductList.tsx",
                                    lineNumber: 29,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProductList.tsx",
                            lineNumber: 25,
                            columnNumber: 13
                        }, this)
                    ]
                }, `skeleton-${index}`, true, {
                    fileName: "[project]/src/components/ProductList.tsx",
                    lineNumber: 23,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/ProductList.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "product-list-error",
            role: "alert",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    children: "Lỗi kết nối Mock API"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProductList.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: error
                }, void 0, false, {
                    fileName: "[project]/src/components/ProductList.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this),
                onRetry && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "retry-btn",
                    onClick: onRetry,
                    children: "Thử lại"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProductList.tsx",
                    lineNumber: 46,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProductList.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this);
    }
    if (products.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "product-list-empty",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    children: "Không tìm thấy sản phẩm"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProductList.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Thử thay đổi từ khóa hoặc bộ lọc danh mục"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProductList.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProductList.tsx",
            lineNumber: 56,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "product-grid",
        children: products.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductCard"], {
                product: product,
                onClick: onSelect
            }, product.id, false, {
                fileName: "[project]/src/components/ProductList.tsx",
                lineNumber: 66,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/ProductList.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
_c = ProductList;
var _c;
__turbopack_context__.k.register(_c, "ProductList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SearchBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SearchBar",
    ()=>SearchBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function SearchBar({ value, onChange, total, filtered }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "search-bar",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "search-input-wrapper",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "search-input",
                        type: "text",
                        className: "search-input",
                        placeholder: "Tìm kiếm sản phẩm...",
                        value: value,
                        onChange: (e)=>onChange(e.target.value),
                        autoComplete: "off",
                        spellCheck: false
                    }, void 0, false, {
                        fileName: "[project]/src/components/SearchBar.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this),
                    value && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        id: "clear-search-btn",
                        className: "clear-btn",
                        onClick: ()=>onChange(""),
                        "aria-label": "Xóa tìm kiếm",
                        children: "✕"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SearchBar.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SearchBar.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "search-meta",
                children: value || filtered < total ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: filtered.toLocaleString("vi-VN")
                        }, void 0, false, {
                            fileName: "[project]/src/components/SearchBar.tsx",
                            lineNumber: 36,
                            columnNumber: 13
                        }, this),
                        " / ",
                        total.toLocaleString("vi-VN"),
                        " sản phẩm"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SearchBar.tsx",
                    lineNumber: 35,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: total.toLocaleString("vi-VN")
                        }, void 0, false, {
                            fileName: "[project]/src/components/SearchBar.tsx",
                            lineNumber: 39,
                            columnNumber: 17
                        }, this),
                        " sản phẩm"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SearchBar.tsx",
                    lineNumber: 39,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/SearchBar.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SearchBar.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = SearchBar;
var _c;
__turbopack_context__.k.register(_c, "SearchBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ToastContainer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToastContainer",
    ()=>ToastContainer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ShopContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ShopContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
function ToastContainer() {
    _s();
    const { toasts, removeToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ShopContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShop"])();
    if (toasts.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "toast-container",
        "aria-live": "polite",
        children: toasts.map((toast)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `toast-item toast-${toast.type}`,
                onClick: ()=>removeToast(toast.id),
                role: "alert",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "toast-text",
                        children: toast.message
                    }, void 0, false, {
                        fileName: "[project]/src/components/ToastContainer.tsx",
                        lineNumber: 17,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "toast-close",
                        onClick: (e)=>{
                            e.stopPropagation();
                            removeToast(toast.id);
                        },
                        "aria-label": "Đóng thông báo",
                        children: "✕"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ToastContainer.tsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this)
                ]
            }, toast.id, true, {
                fileName: "[project]/src/components/ToastContainer.tsx",
                lineNumber: 11,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/ToastContainer.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_s(ToastContainer, "8c2YId3VOG5VxQMjnY3EFTHTBnY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ShopContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShop"]
    ];
});
_c = ToastContainer;
var _c;
__turbopack_context__.k.register(_c, "ToastContainer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/WishlistDrawer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WishlistDrawer",
    ()=>WishlistDrawer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ShopContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ShopContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
function formatPrice(price) {
    return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
        maximumFractionDigits: 0
    }).format(price);
}
function WishlistDrawer() {
    _s();
    const { wishlist, isWishlistOpen, setIsWishlistOpen, removeFromWishlist, clearWishlist, addToCart, addAllWishlistToCart, totalWishlistCount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ShopContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShop"])();
    if (!isWishlistOpen) return null;
    const handleClose = ()=>{
        setIsWishlistOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "drawer-overlay",
        onClick: handleClose,
        role: "dialog",
        "aria-modal": "true",
        "aria-label": "Danh sách yêu thích",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "drawer-panel",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "drawer-header",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "drawer-title-group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "Danh sách yêu thích"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/WishlistDrawer.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "drawer-badge wishlist-badge-accent",
                                    children: [
                                        totalWishlistCount,
                                        " sản phẩm"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/WishlistDrawer.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/WishlistDrawer.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "drawer-close-btn",
                            onClick: handleClose,
                            "aria-label": "Đóng danh sách yêu thích",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/src/components/WishlistDrawer.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/WishlistDrawer.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this),
                wishlist.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "drawer-empty-state",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: "Chưa có sản phẩm yêu thích"
                        }, void 0, false, {
                            fileName: "[project]/src/components/WishlistDrawer.tsx",
                            lineNumber: 59,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Nhấn vào biểu tượng trái tim trên bất kỳ sản phẩm nào để lưu lại danh sách mua sắm yêu thích của bạn!"
                        }, void 0, false, {
                            fileName: "[project]/src/components/WishlistDrawer.tsx",
                            lineNumber: 60,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "drawer-cta-btn",
                            onClick: handleClose,
                            children: "Khám phá sản phẩm ngay"
                        }, void 0, false, {
                            fileName: "[project]/src/components/WishlistDrawer.tsx",
                            lineNumber: 64,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/WishlistDrawer.tsx",
                    lineNumber: 58,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "wishlist-top-bar",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "wishlist-hint",
                                    children: "Lưu trữ các sản phẩm bạn quan tâm để mua sắm thuận tiện hơn"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/WishlistDrawer.tsx",
                                    lineNumber: 74,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "wishlist-bulk-actions",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "wishlist-add-all-btn",
                                            onClick: addAllWishlistToCart,
                                            children: "Thêm tất cả vào giỏ"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/WishlistDrawer.tsx",
                                            lineNumber: 78,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "wishlist-clear-btn",
                                            type: "button",
                                            onClick: clearWishlist,
                                            title: "Xóa tất cả sản phẩm khỏi danh sách yêu thích",
                                            children: "Xóa tất cả"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/WishlistDrawer.tsx",
                                            lineNumber: 84,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/WishlistDrawer.tsx",
                                    lineNumber: 77,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/WishlistDrawer.tsx",
                            lineNumber: 73,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "drawer-items-list",
                            children: wishlist.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "drawer-item-card wishlist-item-card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: product.image,
                                            alt: product.name,
                                            className: "drawer-item-img"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/WishlistDrawer.tsx",
                                            lineNumber: 98,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "drawer-item-info",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "drawer-item-top",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "drawer-item-brand",
                                                            children: product.brand
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/WishlistDrawer.tsx",
                                                            lineNumber: 105,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "drawer-item-remove",
                                                            onClick: ()=>removeFromWishlist(product.id),
                                                            title: "Xóa khỏi yêu thích",
                                                            "aria-label": `Xóa ${product.name} khỏi yêu thích`,
                                                            children: "✕"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/WishlistDrawer.tsx",
                                                            lineNumber: 106,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/WishlistDrawer.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "drawer-item-title",
                                                    children: product.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/WishlistDrawer.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "drawer-item-meta-row",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "drawer-item-category-tag",
                                                            children: product.category
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/WishlistDrawer.tsx",
                                                            lineNumber: 117,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `drawer-stock-pill ${product.stock <= 5 ? "low" : ""}`,
                                                            children: product.stock <= 5 ? `Còn ${product.stock}` : "Còn hàng"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/WishlistDrawer.tsx",
                                                            lineNumber: 120,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/WishlistDrawer.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "wishlist-item-footer",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "wishlist-price",
                                                            children: formatPrice(product.price)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/WishlistDrawer.tsx",
                                                            lineNumber: 132,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "wishlist-to-cart-btn",
                                                            onClick: ()=>addToCart(product, 1),
                                                            disabled: product.stock <= 0,
                                                            children: product.stock > 0 ? "Thêm vào giỏ" : "Hết hàng"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/WishlistDrawer.tsx",
                                                            lineNumber: 135,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/WishlistDrawer.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/WishlistDrawer.tsx",
                                            lineNumber: 103,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, product.id, true, {
                                    fileName: "[project]/src/components/WishlistDrawer.tsx",
                                    lineNumber: 97,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/WishlistDrawer.tsx",
                            lineNumber: 95,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "drawer-footer",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "drawer-cta-btn secondary",
                                onClick: handleClose,
                                children: "Tiếp tục xem sản phẩm khác"
                            }, void 0, false, {
                                fileName: "[project]/src/components/WishlistDrawer.tsx",
                                lineNumber: 149,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/WishlistDrawer.tsx",
                            lineNumber: 148,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/WishlistDrawer.tsx",
                    lineNumber: 72,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/WishlistDrawer.tsx",
            lineNumber: 37,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/WishlistDrawer.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(WishlistDrawer, "6XcmEXaeZTc8L1APGVMRkR/s8XQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ShopContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShop"]
    ];
});
_c = WishlistDrawer;
var _c;
__turbopack_context__.k.register(_c, "WishlistDrawer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/context/ShopContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShopProvider",
    ()=>ShopProvider,
    "useShop",
    ()=>useShop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
const ShopContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const CART_STORAGE_KEY = "shopping_app_cart_v1";
const WISHLIST_STORAGE_KEY = "shopping_app_wishlist_v1";
function loadFromStorage(key, fallback) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = localStorage.getItem(key);
        if (!raw) return fallback;
        return JSON.parse(raw);
    } catch (error) {
        console.error(`Error loading ${key} from localStorage:`, error);
        return fallback;
    }
}
function ShopProvider({ children }) {
    _s();
    // --- Cart State ---
    const [cart, setCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ShopProvider.useState": ()=>loadFromStorage(CART_STORAGE_KEY, [])
    }["ShopProvider.useState"]);
    const [isCartOpen, setIsCartOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // --- Wishlist State ---
    const [wishlist, setWishlist] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ShopProvider.useState": ()=>loadFromStorage(WISHLIST_STORAGE_KEY, [])
    }["ShopProvider.useState"]);
    const [isWishlistOpen, setIsWishlistOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // --- Toast Notifications ---
    const [toasts, setToasts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Persist Cart
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ShopProvider.useEffect": ()=>{
            try {
                localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
            } catch (e) {
                console.error("Failed to save cart to localStorage", e);
            }
        }
    }["ShopProvider.useEffect"], [
        cart
    ]);
    // Persist Wishlist
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ShopProvider.useEffect": ()=>{
            try {
                localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlist));
            } catch (e) {
                console.error("Failed to save wishlist to localStorage", e);
            }
        }
    }["ShopProvider.useEffect"], [
        wishlist
    ]);
    // Toast actions
    const removeToast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ShopProvider.useCallback[removeToast]": (id)=>{
            setToasts({
                "ShopProvider.useCallback[removeToast]": (prev)=>prev.filter({
                        "ShopProvider.useCallback[removeToast]": (t)=>t.id !== id
                    }["ShopProvider.useCallback[removeToast]"])
            }["ShopProvider.useCallback[removeToast]"]);
        }
    }["ShopProvider.useCallback[removeToast]"], []);
    const showToast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ShopProvider.useCallback[showToast]": (message, type = "success")=>{
            const id = Math.random().toString(36).substring(2, 9);
            setToasts({
                "ShopProvider.useCallback[showToast]": (prev)=>[
                        ...prev,
                        {
                            id,
                            message,
                            type
                        }
                    ]
            }["ShopProvider.useCallback[showToast]"]);
            setTimeout({
                "ShopProvider.useCallback[showToast]": ()=>{
                    removeToast(id);
                }
            }["ShopProvider.useCallback[showToast]"], 3000);
        }
    }["ShopProvider.useCallback[showToast]"], [
        removeToast
    ]);
    // Cart operations
    const addToCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ShopProvider.useCallback[addToCart]": (product, quantity = 1)=>{
            if (product.stock <= 0) {
                showToast(`Sản phẩm "${product.name}" đã hết hàng!`, "warning");
                return false;
            }
            const existingItem = cart.find({
                "ShopProvider.useCallback[addToCart].existingItem": (item)=>item.product.id === product.id
            }["ShopProvider.useCallback[addToCart].existingItem"]);
            const currentQty = existingItem ? existingItem.quantity : 0;
            if (currentQty + quantity > product.stock) {
                showToast(`Chỉ còn ${product.stock} sản phẩm trong kho (bạn đã có ${currentQty})!`, "warning");
                return false;
            }
            setCart({
                "ShopProvider.useCallback[addToCart]": (prev)=>{
                    const existingIndex = prev.findIndex({
                        "ShopProvider.useCallback[addToCart].existingIndex": (item)=>item.product.id === product.id
                    }["ShopProvider.useCallback[addToCart].existingIndex"]);
                    if (existingIndex > -1) {
                        const updated = [
                            ...prev
                        ];
                        updated[existingIndex] = {
                            ...updated[existingIndex],
                            quantity: updated[existingIndex].quantity + quantity
                        };
                        return updated;
                    } else {
                        return [
                            ...prev,
                            {
                                product,
                                quantity
                            }
                        ];
                    }
                }
            }["ShopProvider.useCallback[addToCart]"]);
            showToast(`Đã thêm "${product.name}" (${quantity}) vào giỏ hàng!`, "success");
            return true;
        }
    }["ShopProvider.useCallback[addToCart]"], [
        cart,
        showToast
    ]);
    const removeFromCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ShopProvider.useCallback[removeFromCart]": (productId)=>{
            setCart({
                "ShopProvider.useCallback[removeFromCart]": (prev)=>{
                    const item = prev.find({
                        "ShopProvider.useCallback[removeFromCart].item": (i)=>i.product.id === productId
                    }["ShopProvider.useCallback[removeFromCart].item"]);
                    if (item) {
                        showToast(`Đã xóa "${item.product.name}" khỏi giỏ hàng`, "info");
                    }
                    return prev.filter({
                        "ShopProvider.useCallback[removeFromCart]": (i)=>i.product.id !== productId
                    }["ShopProvider.useCallback[removeFromCart]"]);
                }
            }["ShopProvider.useCallback[removeFromCart]"]);
        }
    }["ShopProvider.useCallback[removeFromCart]"], [
        showToast
    ]);
    const updateQuantity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ShopProvider.useCallback[updateQuantity]": (productId, quantity)=>{
            if (quantity <= 0) {
                removeFromCart(productId);
                return;
            }
            setCart({
                "ShopProvider.useCallback[updateQuantity]": (prev)=>prev.map({
                        "ShopProvider.useCallback[updateQuantity]": (item)=>{
                            if (item.product.id === productId) {
                                if (quantity > item.product.stock) {
                                    showToast(`Kho chỉ còn ${item.product.stock} sản phẩm "${item.product.name}"`, "warning");
                                    return {
                                        ...item,
                                        quantity: item.product.stock
                                    };
                                }
                                return {
                                    ...item,
                                    quantity
                                };
                            }
                            return item;
                        }
                    }["ShopProvider.useCallback[updateQuantity]"])
            }["ShopProvider.useCallback[updateQuantity]"]);
        }
    }["ShopProvider.useCallback[updateQuantity]"], [
        removeFromCart,
        showToast
    ]);
    const clearCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ShopProvider.useCallback[clearCart]": ()=>{
            setCart([]);
            try {
                localStorage.setItem(CART_STORAGE_KEY, JSON.stringify([]));
            } catch (e) {
                console.error("Failed to clear cart storage", e);
            }
            showToast("Đã dọn sạch giỏ hàng", "info");
        }
    }["ShopProvider.useCallback[clearCart]"], [
        showToast
    ]);
    const totalCartCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ShopProvider.useMemo[totalCartCount]": ()=>cart.reduce({
                "ShopProvider.useMemo[totalCartCount]": (sum, item)=>sum + item.quantity
            }["ShopProvider.useMemo[totalCartCount]"], 0)
    }["ShopProvider.useMemo[totalCartCount]"], [
        cart
    ]);
    const totalCartPrice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ShopProvider.useMemo[totalCartPrice]": ()=>cart.reduce({
                "ShopProvider.useMemo[totalCartPrice]": (sum, item)=>sum + item.product.price * item.quantity
            }["ShopProvider.useMemo[totalCartPrice]"], 0)
    }["ShopProvider.useMemo[totalCartPrice]"], [
        cart
    ]);
    // Wishlist operations
    const isWishlisted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ShopProvider.useCallback[isWishlisted]": (productId)=>{
            return wishlist.some({
                "ShopProvider.useCallback[isWishlisted]": (item)=>item.id === productId
            }["ShopProvider.useCallback[isWishlisted]"]);
        }
    }["ShopProvider.useCallback[isWishlisted]"], [
        wishlist
    ]);
    const toggleWishlist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ShopProvider.useCallback[toggleWishlist]": (product)=>{
            const exists = wishlist.some({
                "ShopProvider.useCallback[toggleWishlist].exists": (item)=>item.id === product.id
            }["ShopProvider.useCallback[toggleWishlist].exists"]);
            if (exists) {
                setWishlist({
                    "ShopProvider.useCallback[toggleWishlist]": (prev)=>prev.filter({
                            "ShopProvider.useCallback[toggleWishlist]": (item)=>item.id !== product.id
                        }["ShopProvider.useCallback[toggleWishlist]"])
                }["ShopProvider.useCallback[toggleWishlist]"]);
                showToast(`Đã xóa "${product.name}" khỏi danh sách yêu thích`, "info");
                return false;
            } else {
                setWishlist({
                    "ShopProvider.useCallback[toggleWishlist]": (prev)=>[
                            ...prev,
                            product
                        ]
                }["ShopProvider.useCallback[toggleWishlist]"]);
                showToast(`Đã thêm "${product.name}" vào danh sách yêu thích`, "success");
                return true;
            }
        }
    }["ShopProvider.useCallback[toggleWishlist]"], [
        wishlist,
        showToast
    ]);
    const removeFromWishlist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ShopProvider.useCallback[removeFromWishlist]": (productId)=>{
            setWishlist({
                "ShopProvider.useCallback[removeFromWishlist]": (prev)=>{
                    const item = prev.find({
                        "ShopProvider.useCallback[removeFromWishlist].item": (p)=>p.id === productId
                    }["ShopProvider.useCallback[removeFromWishlist].item"]);
                    if (item) {
                        showToast(`Đã xóa "${item.name}" khỏi danh sách yêu thích`, "info");
                    }
                    return prev.filter({
                        "ShopProvider.useCallback[removeFromWishlist]": (p)=>p.id !== productId
                    }["ShopProvider.useCallback[removeFromWishlist]"]);
                }
            }["ShopProvider.useCallback[removeFromWishlist]"]);
        }
    }["ShopProvider.useCallback[removeFromWishlist]"], [
        showToast
    ]);
    const clearWishlist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ShopProvider.useCallback[clearWishlist]": ()=>{
            setWishlist([]);
            try {
                localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify([]));
            } catch (e) {
                console.error("Failed to clear wishlist storage", e);
            }
            showToast("Đã dọn sạch danh sách yêu thích", "info");
        }
    }["ShopProvider.useCallback[clearWishlist]"], [
        showToast
    ]);
    const addAllWishlistToCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ShopProvider.useCallback[addAllWishlistToCart]": ()=>{
            if (wishlist.length === 0) return;
            let addedCount = 0;
            wishlist.forEach({
                "ShopProvider.useCallback[addAllWishlistToCart]": (product)=>{
                    if (product.stock > 0) {
                        addToCart(product, 1);
                        addedCount++;
                    }
                }
            }["ShopProvider.useCallback[addAllWishlistToCart]"]);
            if (addedCount > 0) {
                showToast(`Đã thêm ${addedCount} sản phẩm từ mục yêu thích vào giỏ hàng!`, "success");
            } else {
                showToast("Tất cả sản phẩm yêu thích đều đã hết hàng!", "warning");
            }
        }
    }["ShopProvider.useCallback[addAllWishlistToCart]"], [
        wishlist,
        addToCart,
        showToast
    ]);
    const totalWishlistCount = wishlist.length;
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ShopProvider.useMemo[value]": ()=>({
                cart,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                totalCartCount,
                totalCartPrice,
                isCartOpen,
                setIsCartOpen,
                wishlist,
                toggleWishlist,
                isWishlisted,
                removeFromWishlist,
                clearWishlist,
                addAllWishlistToCart,
                totalWishlistCount,
                isWishlistOpen,
                setIsWishlistOpen,
                toasts,
                showToast,
                removeToast
            })
    }["ShopProvider.useMemo[value]"], [
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalCartCount,
        totalCartPrice,
        isCartOpen,
        wishlist,
        toggleWishlist,
        isWishlisted,
        removeFromWishlist,
        clearWishlist,
        addAllWishlistToCart,
        totalWishlistCount,
        isWishlistOpen,
        toasts,
        showToast,
        removeToast
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShopContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/ShopContext.tsx",
        lineNumber: 327,
        columnNumber: 10
    }, this);
}
_s(ShopProvider, "m0KAhL2uBt+pQhk55c7uAWMrCRA=");
_c = ShopProvider;
function useShop() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ShopContext);
    if (!context) {
        throw new Error("useShop must be used within a ShopProvider");
    }
    return context;
}
_s1(useShop, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "ShopProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/mockProducts.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/products.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CATEGORIES_LIST",
    ()=>CATEGORIES_LIST,
    "generateProducts",
    ()=>generateProducts
]);
const CATEGORIES = [
    "Laptop",
    "Phone",
    "Tablet",
    "Monitor",
    "Keyboard",
    "Mouse",
    "Headphone",
    "Camera",
    "Speaker"
];
const BRANDS = [
    "Dell",
    "Apple",
    "Samsung",
    "Sony",
    "LG",
    "Asus",
    "Acer",
    "HP",
    "Lenovo",
    "Microsoft",
    "Logitech",
    "Razer",
    "Corsair",
    "SteelSeries",
    "Jabra",
    "Bose",
    "Sennheiser",
    "Canon",
    "Nikon",
    "JBL"
];
const PRODUCT_NAMES = {
    All: [],
    Laptop: [
        "ProBook Elite",
        "UltraSlim Pro",
        "GamerForce X",
        "WorkStation Z",
        "Chromebook Air",
        "ThinkPad Carbon",
        "Spectre Fold",
        "Surface Studio",
        "Yoga Slim",
        "ZBook Fury"
    ],
    Phone: [
        "Galaxy Ultra",
        "iPhone Pro Max",
        "Pixel XL",
        "OnePlus Ace",
        "Xperia Pro",
        "Find X",
        "Reno Series",
        "Nord Edge",
        "Zenfone Flip",
        "Motorola Edge"
    ],
    Tablet: [
        "iPad Air",
        "Galaxy Tab S",
        "Surface Pro",
        "MediaPad M",
        "Lenovo Tab P",
        "Fire HD",
        "Xiaomi Pad",
        "OPPO Pad",
        "Nokia T20",
        "TCL Tab"
    ],
    Monitor: [
        "UltraSharp 4K",
        "Predator XB",
        "ROG Swift",
        "ViewFinity S",
        "ProDisplay XDR",
        "UltraGear QHD",
        "Odyssey Neo",
        "SpectraView",
        "EX Series WQHD",
        "BenQ EW"
    ],
    Keyboard: [
        "MX Keys",
        "Huntsman Elite",
        "BlackWidow V4",
        "K100 RGB",
        "G915 TKL",
        "Anne Pro 2",
        "Ducky One 3",
        "GMMK Pro",
        "Keychron Q1",
        "Tofu65"
    ],
    Mouse: [
        "MX Master 3S",
        "DeathAdder V3",
        "G Pro X",
        "Viper Ultimate",
        "Model O Pro",
        "Basilisk V3",
        "Rival 650",
        "IEM V2",
        "Pulsar X2",
        "Endgame XM1r"
    ],
    Headphone: [
        "QuietComfort 45",
        "WH-1000XM5",
        "AirPods Max",
        "Momentum 4",
        "Arctis Nova Pro",
        "Kraken V3",
        "Cloud Alpha",
        "Fidelio L3",
        "ATH-M50xBT",
        "Sundara"
    ],
    Camera: [
        "Alpha 7 IV",
        "EOS R6",
        "Nikon Z9",
        "GH6",
        "X-T5",
        "G9 II",
        "K-3 III",
        "SL2-S",
        "1DX Mark III",
        "Z7 II"
    ],
    Speaker: [
        "Soundbar Q990C",
        "HomePod mini",
        "Echo Studio",
        "Sonos Arc",
        "Beam Gen2",
        "Charge 5",
        "Flip 6",
        "SRS-XB43",
        "PartyBox 110",
        "Wonderboom 3"
    ]
};
function generateImageUrl(category, id) {
    const seed = `product-${id}-${category}`;
    return `https://picsum.photos/seed/${seed}/400/300`;
}
function generateProducts(count = 10_000) {
    return Array.from({
        length: count
    }, (_, index)=>{
        const id = index + 1;
        const category = CATEGORIES[index % CATEGORIES.length];
        const nameList = PRODUCT_NAMES[category];
        const baseName = nameList[index % nameList.length];
        const brand = BRANDS[index % BRANDS.length];
        const variant = Math.floor(index / nameList.length) + 1;
        const basePrice = category === "Laptop" ? 15_000_000 : category === "Phone" ? 10_000_000 : category === "Tablet" ? 8_000_000 : category === "Monitor" ? 7_000_000 : category === "Camera" ? 20_000_000 : category === "Headphone" ? 3_000_000 : category === "Speaker" ? 2_000_000 : 1_500_000;
        const priceVariation = index % 20 * (basePrice * 0.05);
        const price = basePrice + priceVariation;
        const rating = parseFloat((3.0 + index % 21 * 0.1).toFixed(1));
        return {
            id,
            name: `${brand} ${baseName} ${variant > 1 ? `Gen ${variant}` : ""}`.trim(),
            category,
            price,
            rating: Math.min(rating, 5.0),
            image: generateImageUrl(category, id),
            brand,
            stock: index % 50 + 1
        };
    });
}
const CATEGORIES_LIST = [
    "All",
    "Laptop",
    "Phone",
    "Tablet",
    "Monitor",
    "Keyboard",
    "Mouse",
    "Headphone",
    "Camera",
    "Speaker"
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useDebounce.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDebounce",
    ()=>useDebounce
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useDebounce(value, delay = 300) {
    _s();
    const [debouncedValue, setDebouncedValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(value);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDebounce.useEffect": ()=>{
            const timer = setTimeout({
                "useDebounce.useEffect.timer": ()=>{
                    setDebouncedValue(value);
                }
            }["useDebounce.useEffect.timer"], delay);
            return ({
                "useDebounce.useEffect": ()=>{
                    clearTimeout(timer);
                }
            })["useDebounce.useEffect"];
        }
    }["useDebounce.useEffect"], [
        value,
        delay
    ]);
    return debouncedValue;
}
_s(useDebounce, "KDuPAtDOgxm8PU6legVJOb3oOmA=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useProducts.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFilteredProducts",
    ()=>useFilteredProducts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$productApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/productApi.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useFilteredProducts({ keyword, category, sortOption }) {
    _s();
    const [filteredProducts, setFilteredProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [totalCount, setTotalCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const fetchProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFilteredProducts.useCallback[fetchProducts]": async ()=>{
            const currentFetchId = ++fetchIdRef.current;
            setLoading(true);
            setError(null);
            try {
                const data = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$productApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["productApi"].getProducts({
                    keyword,
                    category,
                    sortOption,
                    delayMs: 200
                });
                // Avoid race conditions
                if (currentFetchId === fetchIdRef.current) {
                    setFilteredProducts(data);
                    setTotalCount({
                        "useFilteredProducts.useCallback[fetchProducts]": (prev)=>prev === 0 || !keyword && category === "All" ? data.length : prev
                    }["useFilteredProducts.useCallback[fetchProducts]"]);
                    setLoading(false);
                }
            } catch (err) {
                if (currentFetchId === fetchIdRef.current) {
                    setError(err instanceof Error ? err.message : "Có lỗi xảy ra khi tải danh sách sản phẩm");
                    setLoading(false);
                }
            }
        }
    }["useFilteredProducts.useCallback[fetchProducts]"], [
        keyword,
        category,
        sortOption
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFilteredProducts.useEffect": ()=>{
            fetchProducts();
        }
    }["useFilteredProducts.useEffect"], [
        fetchProducts
    ]);
    return {
        products: filteredProducts,
        filteredProducts,
        totalCount,
        loading,
        error,
        refetch: fetchProducts
    };
}
_s(useFilteredProducts, "eV7fxxYRetjBGXE9ZTOfVfy39Eg=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/productApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "productApi",
    ()=>productApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockProducts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mockProducts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/products.ts [app-client] (ecmascript)");
;
;
// In-memory mock database
let productDatabase = JSON.parse(JSON.stringify(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockProducts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_MOCK_PRODUCTS"]));
function delay(ms = 250) {
    return new Promise((resolve)=>setTimeout(resolve, ms));
}
const productApi = {
    /**
   * Fetch list of products with optional filtering and sorting
   */ async getProducts (params = {}) {
        const { keyword = "", category = "All", sortOption = "price-asc", delayMs = 250 } = params;
        // Simulate network delay
        if (delayMs > 0) {
            await delay(delayMs);
        }
        let result = [
            ...productDatabase
        ];
        // Filter by Category
        if (category && category !== "All") {
            result = result.filter((p)=>p.category === category);
        }
        // Filter by Keyword (search in name, brand, category)
        if (keyword && keyword.trim()) {
            const lower = keyword.toLowerCase().trim();
            result = result.filter((p)=>p.name.toLowerCase().includes(lower) || p.brand.toLowerCase().includes(lower) || p.category.toLowerCase().includes(lower));
        }
        // Sort
        switch(sortOption){
            case "price-asc":
                result.sort((a, b)=>a.price - b.price);
                break;
            case "price-desc":
                result.sort((a, b)=>b.price - a.price);
                break;
            case "rating-desc":
                result.sort((a, b)=>b.rating - a.rating);
                break;
            case "name-asc":
                result.sort((a, b)=>a.name.localeCompare(b.name));
                break;
        }
        // Return a cloned array to prevent external mutations
        return JSON.parse(JSON.stringify(result));
    },
    /**
   * Fetch a single product by its ID
   */ async getProductById (id, delayMs = 150) {
        if (delayMs > 0) {
            await delay(delayMs);
        }
        const found = productDatabase.find((p)=>p.id === id);
        return found ? JSON.parse(JSON.stringify(found)) : null;
    },
    /**
   * Fetch all product categories
   */ async getCategories (delayMs = 100) {
        if (delayMs > 0) {
            await delay(delayMs);
        }
        return [
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORIES_LIST"]
        ];
    },
    /**
   * Update stock for a product (e.g. upon order placement)
   */ async updateStock (id, quantityDelta, delayMs = 150) {
        if (delayMs > 0) {
            await delay(delayMs);
        }
        const product = productDatabase.find((p)=>p.id === id);
        if (!product) {
            throw new Error(`Sản phẩm với ID #${id} không tồn tại`);
        }
        product.stock = Math.max(0, product.stock + quantityDelta);
        return JSON.parse(JSON.stringify(product));
    },
    /**
   * Reset mock database to initial state (useful for tests)
   */ resetDatabase () {
        productDatabase = JSON.parse(JSON.stringify(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockProducts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_MOCK_PRODUCTS"]));
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=src_1r8fewx-uuhll._.js.map
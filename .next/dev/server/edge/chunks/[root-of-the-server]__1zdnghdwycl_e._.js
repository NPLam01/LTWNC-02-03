(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push(["chunks/[root-of-the-server]__1zdnghdwycl_e._.js",
(()=>{"use strict";return[
"[project]/src/auth.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "auth",
    ()=>auth,
    "handlers",
    ()=>handlers,
    "signIn",
    ()=>signIn,
    "signOut",
    ()=>signOut
]);
// ============================================================
// src/auth.ts
// Cấu hình Auth.js v5 (next-auth@beta)
// ============================================================
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/index.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$github$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/providers/github.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$providers$2f$github$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@auth/core/providers/github.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$credentials$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/providers/credentials.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$providers$2f$credentials$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@auth/core/providers/credentials.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [middleware-edge] (ecmascript) <export * as z .object>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [middleware-edge] (ecmascript) <export * as z .string>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$users$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/users.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$permissions$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/permissions.ts [middleware-edge] (ecmascript)");
;
;
;
;
;
;
/** Schema validate form đăng nhập */ const credentialsSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().email("Email không hợp lệ"),
    password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().min(6, "Mật khẩu tối thiểu 6 ký tự")
});
const { handlers, auth, signIn, signOut } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])({
    /**
   * Strategy: JWT (bắt buộc khi dùng Credentials provider
   * vì không có DB adapter).
   */ session: {
        strategy: "jwt"
    },
    /**
   * Secret dùng để ký/mã hoá JWT.
   * Cấu hình biến môi trường AUTH_SECRET.
   */ secret: process.env.AUTH_SECRET,
    /** Trang đăng nhập tuỳ chỉnh */ pages: {
        signIn: "/login",
        error: "/login"
    },
    providers: [
        // ── Provider 1: GitHub OAuth ──────────────────────────────
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$providers$2f$github$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"])({
            clientId: process.env.AUTH_GITHUB_ID ?? "",
            clientSecret: process.env.AUTH_GITHUB_SECRET ?? ""
        }),
        // ── Provider 2: Email + Mật khẩu ─────────────────────────
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$providers$2f$credentials$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"])({
            name: "Email & Mật khẩu",
            credentials: {
                email: {
                    label: "Email",
                    type: "email"
                },
                password: {
                    label: "Mật khẩu",
                    type: "password"
                }
            },
            async authorize (rawCredentials) {
                // 1. Validate đầu vào bằng Zod
                const parsed = credentialsSchema.safeParse(rawCredentials);
                if (!parsed.success) return null;
                const { email, password } = parsed.data;
                // 2. Xác thực email + mật khẩu với mock DB
                const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$users$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["verifyCredentials"])(email, password);
                if (!user) return null;
                // 3. Trả về user object (KHÔNG có passwordHash)
                return {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                    image: user.image ?? null
                };
            }
        })
    ],
    callbacks: {
        /**
     * Callback jwt(): chạy khi tạo/cập nhật JWT token.
     * Đưa id và role từ nguồn đáng tin cậy vào token.
     */ async jwt ({ token, user, account }) {
            // Lần đăng nhập đầu tiên — user object có đầy đủ thông tin
            if (user) {
                token.id = user.id;
                // Với Credentials provider: lấy role từ user object (từ DB)
                // Với OAuth (GitHub): tài khoản mới mặc định role = "user"
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$permissions$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["isValidRole"])(user.role)) {
                    token.id = user.id;
                    token.role = user.role;
                } else {
                    // OAuth user: tra cứu DB hoặc gán mặc định "user"
                    // Trong production: tạo user record trong DB tại đây
                    token.role = "user";
                }
            }
            // Refresh token: tra cứu DB để lấy role mới nhất (nếu cần)
            // Chỉ áp dụng cho Credentials; OAuth dùng sub làm id
            if (!user && token.sub && account === null) {
                const dbUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$users$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["findUserById"])(token.id);
                if (dbUser) {
                    token.role = dbUser.role;
                }
            }
            return token;
        },
        /**
     * Callback session(): cung cấp dữ liệu an toàn cho client.
     * Chỉ trả về những gì client cần — KHÔNG trả role từ client input.
     */ async session ({ session, token }) {
            if (token) {
                session.user.id = token.id;
                session.user.role = token.role;
            }
            return session;
        },
        /**
     * Callback signIn(): kiểm soát ai được đăng nhập.
     * Trả false để chặn, trả true hoặc URL để tiếp tục.
     */ async signIn ({ user, account }) {
            // Cho phép tất cả OAuth users đăng nhập
            // (vai trò sẽ được gán trong jwt callback)
            if (account?.provider === "github") {
                return true;
            }
            // Credentials: chỉ cho phép nếu user tồn tại
            return !!user;
        }
    }
});
}),
"[project]/src/lib/permissions.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ============================================================
// src/lib/permissions.ts
// Hệ thống phân quyền RBAC tập trung
// ============================================================
__turbopack_context__.s([
    "getPermissions",
    ()=>getPermissions,
    "hasAllPermissions",
    ()=>hasAllPermissions,
    "hasPermission",
    ()=>hasPermission,
    "isAdmin",
    ()=>isAdmin,
    "isValidRole",
    ()=>isValidRole
]);
/**
 * Ma trận quyền theo vai trò.
 * Mở rộng tại đây khi thêm chức năng mới.
 */ const ROLE_PERMISSIONS = {
    admin: [
        "view:dashboard",
        "view:admin",
        "manage:products",
        "manage:users",
        "view:analytics",
        "read:own-data"
    ],
    user: [
        "view:dashboard",
        "read:own-data"
    ]
};
function hasPermission(role, permission) {
    return ROLE_PERMISSIONS[role]?.includes(permission) ?? false;
}
function isAdmin(role) {
    return role === "admin";
}
function isValidRole(value) {
    return value === "admin" || value === "user";
}
function getPermissions(role) {
    return [
        ...ROLE_PERMISSIONS[role] ?? []
    ];
}
function hasAllPermissions(role, permissions) {
    return permissions.every((p)=>hasPermission(role, p));
}
}),
"[project]/src/lib/users.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MOCK_USERS",
    ()=>MOCK_USERS,
    "findUserByEmail",
    ()=>findUserByEmail,
    "findUserById",
    ()=>findUserById,
    "verifyCredentials",
    ()=>verifyCredentials
]);
// ============================================================
// src/lib/users.ts
// Mock user database — thay bằng Prisma/DB thật nếu cần
// ============================================================
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [middleware-edge] (ecmascript)");
;
const MOCK_USERS = [
    {
        id: "usr_admin_001",
        name: "Admin",
        email: "admin@example.com",
        // Hash của "Admin@123456"
        passwordHash: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].hashSync("Admin@123456", 12),
        role: "admin",
        image: undefined
    },
    {
        id: "usr_user_001",
        name: "Nguyễn Văn A",
        email: "user@example.com",
        // Hash của "User@123456"
        passwordHash: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].hashSync("User@123456", 12),
        role: "user",
        image: undefined
    }
];
function findUserByEmail(email) {
    return MOCK_USERS.find((u)=>u.email.toLowerCase() === email.toLowerCase()) ?? null;
}
function findUserById(id) {
    return MOCK_USERS.find((u)=>u.id === id) ?? null;
}
async function verifyCredentials(email, password) {
    const user = findUserByEmail(email);
    if (!user) return null;
    const isValid = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].compare(password, user.passwordHash);
    if (!isValid) return null;
    // KHÔNG trả passwordHash ra ngoài
    const { passwordHash: _omit, ...safeUser } = user;
    void _omit;
    return safeUser;
}
}),
"[project]/src/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "default",
    ()=>__TURBOPACK__default__export__
]);
// ============================================================
// src/middleware.ts
// Middleware bảo vệ route — lớp bảo mật đầu tiên
// ============================================================
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/auth.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware-edge] (ecmascript)");
;
;
/**
 * Route cần đăng nhập (bất kỳ vai trò nào).
 */ const PROTECTED_ROUTES = [
    "/dashboard"
];
/**
 * Route chỉ dành cho admin.
 */ const ADMIN_ROUTES = [
    "/admin"
];
/**
 * Route dành cho người CHƯA đăng nhập.
 * Nếu đã đăng nhập thì redirect về dashboard.
 */ const AUTH_ROUTES = [
    "/login"
];
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["auth"])((req)=>{
    const { nextUrl } = req;
    const session = req.auth;
    const isLoggedIn = !!session?.user;
    const role = session?.user?.role;
    const pathname = nextUrl.pathname;
    // ── 1. Trang auth (login hoặc root) — nếu đã đăng nhập redirect sang /products ──
    const isAuthRoute = AUTH_ROUTES.some((r)=>pathname.startsWith(r)) || pathname === "/";
    if (isAuthRoute && isLoggedIn) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/products", nextUrl));
    }
    // ── 2. Route admin — chỉ admin mới được vào ────────────────
    const isAdminRoute = ADMIN_ROUTES.some((r)=>pathname.startsWith(r));
    if (isAdminRoute) {
        if (!isLoggedIn) {
            const loginUrl = new URL("/login", nextUrl);
            loginUrl.searchParams.set("callbackUrl", pathname);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(loginUrl);
        }
        if (role !== "admin") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/403", nextUrl));
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    // ── 3. Route protected — cần đăng nhập ─────────────────────
    const isProtectedRoute = PROTECTED_ROUTES.some((r)=>pathname.startsWith(r));
    if (isProtectedRoute && !isLoggedIn) {
        const loginUrl = new URL("/login", nextUrl);
        loginUrl.searchParams.set("callbackUrl", pathname);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(loginUrl);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
});
const config = {
    matcher: [
        "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"
    ]
};
}),
]})(),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[project]/ [middleware-edge] (unsupported edge import 'crypto', ecmascript)", ((__turbopack_context__, module, exports) => {

__turbopack_context__.n(__import_unsupported(`crypto`));
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__1zdnghdwycl_e._.js.map
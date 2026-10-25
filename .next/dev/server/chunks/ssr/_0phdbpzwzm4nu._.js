(()=>{"use strict";module.exports = [
"[project]/.next-internal/server/app/admin/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "4086958961f7d1c956010e8bdff58c630e958f9325",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminBroadcast"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/admin/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions.ts [app-rsc] (ecmascript)");
}),
"[project]/.next-internal/server/app/admin/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions.ts [app-rsc] (ecmascript)");
;
}),
"[project]/src/auth.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$github$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/providers/github.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$providers$2f$github$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@auth/core/providers/github.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$credentials$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/providers/credentials.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$providers$2f$credentials$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@auth/core/providers/credentials.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z .object>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z .string>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$users$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/users.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$permissions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/permissions.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
/** Schema validate form đăng nhập */ const credentialsSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().email("Email không hợp lệ"),
    password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().min(6, "Mật khẩu tối thiểu 6 ký tự")
});
const { handlers, auth, signIn, signOut } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])({
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$providers$2f$github$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])({
            clientId: process.env.AUTH_GITHUB_ID ?? "",
            clientSecret: process.env.AUTH_GITHUB_SECRET ?? ""
        }),
        // ── Provider 2: Email + Mật khẩu ─────────────────────────
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$providers$2f$credentials$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])({
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
                const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$users$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyCredentials"])(email, password);
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
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$permissions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidRole"])(user.role)) {
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
                const dbUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$users$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findUserById"])(token.id);
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
"[project]/src/lib/actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ============================================================
// src/lib/actions.ts
// Server Actions — kiểm tra session + quyền bên trong
// ============================================================
/* __next_internal_action_entry_do_not_use__ [{"0035df86f1bf6648604dcbbec5318f6efa09ad7050":{"name":"getUserData"},"4086958961f7d1c956010e8bdff58c630e958f9325":{"name":"adminBroadcast"}},"src/lib/actions.ts",""] */ __turbopack_context__.s([
    "adminBroadcast",
    ()=>adminBroadcast,
    "getUserData",
    ()=>getUserData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$permissions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/permissions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z .object>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z .string>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
/** Schema validate đầu vào cho admin action */ const adminActionSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().min(1, "Nội dung không được để trống").max(500, "Nội dung tối đa 500 ký tự")
});
async function adminBroadcast(formData) {
    // ── Layer 3: Kiểm tra session trong Server Action ───────────
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user) {
        return {
            success: false,
            message: "Bạn chưa đăng nhập. Vui lòng đăng nhập để tiếp tục."
        };
    }
    // Kiểm tra quyền — KHÔNG tin dữ liệu client gửi lên
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$permissions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAdmin"])(session.user.role)) {
        return {
            success: false,
            message: "Bạn không có quyền thực hiện thao tác này."
        };
    }
    // Validate dữ liệu đầu vào bằng Zod
    const rawMessage = formData.get("message");
    const parsed = adminActionSchema.safeParse({
        message: rawMessage
    });
    if (!parsed.success) {
        return {
            success: false,
            message: parsed.error.issues[0]?.message ?? "Dữ liệu không hợp lệ."
        };
    }
    const { message } = parsed.data;
    // Trong production: gửi thông báo, cập nhật DB, v.v.
    console.log(`[ADMIN ACTION] ${session.user.email} broadcast: ${message}`);
    return {
        success: true,
        message: `✅ Đã gửi thông báo: "${message}"`,
        data: {
            actor: session.user.email,
            role: session.user.role,
            timestamp: new Date().toISOString()
        }
    };
}
async function getUserData() {
    // ── Layer 3: Kiểm tra session ───────────────────────────────
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user) {
        return {
            success: false,
            message: "Chưa đăng nhập."
        };
    }
    // Kiểm tra quyền đọc dữ liệu cá nhân
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$permissions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasPermission"])(session.user.role, "read:own-data")) {
        return {
            success: false,
            message: "Không có quyền."
        };
    }
    // ── Layer 4: Tầng dữ liệu — chỉ trả data của user hiện tại ─
    // userId lấy từ session (nguồn đáng tin cậy), KHÔNG từ client
    const userId = session.user.id;
    // Mock: trả thông tin user từ session
    return {
        success: true,
        message: "Lấy dữ liệu thành công.",
        data: {
            id: userId,
            email: session.user.email,
            name: session.user.name,
            role: session.user.role
        }
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    adminBroadcast,
    getUserData
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(adminBroadcast, "4086958961f7d1c956010e8bdff58c630e958f9325", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUserData, "0035df86f1bf6648604dcbbec5318f6efa09ad7050", null);
}),
"[project]/src/lib/permissions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/lib/users.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-rsc] (ecmascript)");
;
const MOCK_USERS = [
    {
        id: "usr_admin_001",
        name: "Admin",
        email: "admin@example.com",
        // Hash của "Admin@123456"
        passwordHash: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].hashSync("Admin@123456", 12),
        role: "admin",
        image: undefined
    },
    {
        id: "usr_user_001",
        name: "Nguyễn Văn A",
        email: "user@example.com",
        // Hash của "User@123456"
        passwordHash: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].hashSync("User@123456", 12),
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
    const isValid = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].compare(password, user.passwordHash);
    if (!isValid) return null;
    // KHÔNG trả passwordHash ra ngoài
    const { passwordHash: _omit, ...safeUser } = user;
    void _omit;
    return safeUser;
}
}),
];})()

//# sourceMappingURL=_0phdbpzwzm4nu._.js.map
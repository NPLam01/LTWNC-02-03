"use client";

// ============================================================
// src/components/LoginForm.tsx
// Form đăng nhập — Email & Mật khẩu (không icon, không GitHub)
// ============================================================

import { useState, useTransition } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("Email không hợp lệ"),
  password: z.string().min(6, "Mật khẩu tối thiểu 6 ký tự"),
});

type FieldErrors = Partial<Record<"email" | "password", string>>;

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams?.get("callbackUrl") ?? "/products";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [serverError, setServerError] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleCredentialsSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setServerError("");
    setFieldErrors({});

    const result = loginSchema.safeParse({ email, password });
    if (!result.success) {
      const errors: FieldErrors = {};
      result.error.issues.forEach((err) => {
        const field = err.path[0] as keyof FieldErrors;
        if (field) errors[field] = err.message;
      });
      setFieldErrors(errors);
      return;
    }

    startTransition(async () => {
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (response?.error) {
        setServerError("Email hoặc mật khẩu không đúng. Vui lòng thử lại.");
        return;
      }

      if (response?.ok) {
        router.push(callbackUrl);
        router.refresh();
      }
    });
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        {/* Tiêu đề */}
        <div className="auth-logo">
          <h1 className="auth-title">Đăng nhập</h1>
          <p className="auth-subtitle">Product Explorer</p>
        </div>

        {/* Thông báo lỗi */}
        {serverError && (
          <div className="alert alert-error" role="alert">
            {serverError}
          </div>
        )}

        {/* Form đăng nhập */}
        <form
          id="form-credentials-login"
          className="auth-form"
          onSubmit={handleCredentialsSubmit}
          noValidate
        >
          <div className="form-group">
            <label htmlFor="input-email" className="form-label">
              Email
            </label>
            <input
              id="input-email"
              type="email"
              className="form-input"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              disabled={isPending}
              required
              aria-describedby={fieldErrors.email ? "error-email" : undefined}
            />
            {fieldErrors.email && (
              <span id="error-email" className="form-error" role="alert">
                {fieldErrors.email}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="input-password" className="form-label">
              Mật khẩu
            </label>
            <input
              id="input-password"
              type="password"
              className="form-input"
              placeholder="Nhập mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              disabled={isPending}
              required
              aria-describedby={fieldErrors.password ? "error-password" : undefined}
            />
            {fieldErrors.password && (
              <span id="error-password" className="form-error" role="alert">
                {fieldErrors.password}
              </span>
            )}
          </div>

          <button
            id="btn-credentials-login"
            type="submit"
            className="btn-primary"
            disabled={isPending}
          >
            {isPending ? "Đang xử lý..." : "Đăng nhập"}
          </button>
        </form>

        {/* Gợi ý tài khoản kiểm thử */}
        <div className="test-accounts-box">
          <div className="test-accounts-title">Tài khoản thử nghiệm:</div>
          <div className="test-account-row">
            <span>Admin:</span> <code>admin@example.com</code> / <code>Admin@123456</code>
          </div>
          <div className="test-account-row">
            <span>User:</span> <code>user@example.com</code> / <code>User@123456</code>
          </div>
        </div>
      </div>
    </div>
  );
}

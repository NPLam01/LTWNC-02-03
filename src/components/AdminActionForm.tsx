"use client";

// ============================================================
// src/components/AdminActionForm.tsx
// Form gọi Server Action chỉ dành cho admin
// Minh hoạ Layer 3 (Server Action) kiểm tra quyền độc lập
// ============================================================

import { useState, useTransition } from "react";
import { adminBroadcast } from "@/lib/actions";

export function AdminActionForm() {
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      const res = await adminBroadcast(formData);
      setResult(res);
    });
  };

  return (
    <div className="session-card">
      <h2>Server Action (Admin only)</h2>
      <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", marginBottom: 16 }}>
        Action này kiểm tra quyền độc lập phía server — người dùng không thể
        vượt quyền bằng cách gọi trực tiếp.
      </p>

      <form id="form-admin-action" onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <div className="form-group">
          <label htmlFor="input-broadcast-msg" className="form-label">
            Nội dung thông báo
          </label>
          <input
            id="input-broadcast-msg"
            type="text"
            name="message"
            className="form-input"
            placeholder="Nhập nội dung thông báo hệ thống..."
            maxLength={500}
            required
            disabled={isPending}
          />
        </div>

        <button
          id="btn-admin-action"
          type="submit"
          className="btn-primary"
          disabled={isPending}
          style={{ width: "auto", alignSelf: "flex-start", padding: "10px 20px" }}
        >
          {isPending ? (
            <>
              <span className="spinner" style={{ marginRight: 8 }} />
              Đang gửi...
            </>
          ) : (
            "Gửi thông báo"
          )}
        </button>
      </form>

      {result && (
        <div
          className={`alert ${result.success ? "alert-success" : "alert-error"}`}
          style={{ marginTop: 16 }}
          role="status"
        >
          {result.message}
        </div>
      )}
    </div>
  );
}

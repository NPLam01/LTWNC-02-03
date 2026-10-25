"use client";

// ============================================================
// src/components/UserMenu.tsx
// Menu người dùng — Client Component (cần signOut)
// ============================================================

import { signOut } from "next-auth/react";
import type { Session } from "next-auth";

interface UserMenuProps {
  user: Session["user"];
}

export function UserMenu({ user }: UserMenuProps) {
  const initials = user?.name
    ? user.name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase()
    : (user?.email?.[0] ?? "?").toUpperCase();

  return (
    <div className="user-menu">
      <div className="user-avatar" title={user?.name ?? user?.email ?? ""}>
        {user?.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={user.image} alt={user.name ?? "Avatar"} />
        ) : (
          initials
        )}
      </div>
      <span className="user-name">{user?.name ?? user?.email}</span>
      <button
        id="btn-signout"
        className="btn-signout"
        onClick={() => signOut({ callbackUrl: "/" })}
        title="Đăng xuất"
        aria-label="Đăng xuất"
      >
        Đăng xuất
      </button>
    </div>
  );
}

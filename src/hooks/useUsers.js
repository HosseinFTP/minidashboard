"use client";

import { useEffect, useMemo, useState } from "react";
import { initialUsers } from "@/data/users";

const USERS_KEY = "dashboard_users";

function readUsers() {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    const stored = raw ? JSON.parse(raw) : [];

    const storedIds = new Set(stored.map((u) => u.id));
    const merged = [
      ...stored,
      ...initialUsers.filter((u) => !storedIds.has(u.id)),
    ];

    localStorage.setItem(USERS_KEY, JSON.stringify(merged));
    return merged;
  } catch {
    localStorage.setItem(USERS_KEY, JSON.stringify(initialUsers));
    return initialUsers;
  }
}

function writeUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  window.dispatchEvent(new Event("users-updated"));
}

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [ready, setReady] = useState(false);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  useEffect(() => {
    setUsers(readUsers());
    setReady(true);

    const sync = () => setUsers(readUsers());
    window.addEventListener("users-updated", sync);
    return () => window.removeEventListener("users-updated", sync);
  }, []);

  const persist = (next) => {
    setUsers(next);
    writeUsers(next);
  };

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return users.filter((u) => {
      const matchSearch =
        !q ||
        u.name.toLowerCase().includes(q) ||
        u.email.toLowerCase().includes(q);
      const matchRole = roleFilter === "all" || u.role === roleFilter;
      const matchStatus = statusFilter === "all" || u.status === statusFilter;
      return matchSearch && matchRole && matchStatus;
    });
  }, [users, search, roleFilter, statusFilter]);

  const stats = useMemo(
    () => ({
      total: users.length,
      active: users.filter((u) => u.status === "active").length,
      inactive: users.filter((u) => u.status === "inactive").length,
      admins: users.filter((u) => u.role === "admin").length,
    }),
    [users]
  );

  const addUser = (user) => {
    persist([
      {
        ...user,
        id: Date.now(),
        password: user.password || "123456",
        joinedAt: new Date().toLocaleDateString("fa-IR"),
      },
      ...users,
    ]);
  };

  const updateUser = (id, updated) => {
    persist(users.map((u) => (u.id === id ? { ...u, ...updated } : u)));
  };

  const deleteUser = (id) => {
    persist(users.filter((u) => u.id !== id));
  };

  const toggleBan = (id) => {
    persist(
      users.map((u) =>
        u.id === id
          ? { ...u, status: u.status === "banned" ? "active" : "banned" }
          : u
      )
    );
  };

  const resetFilters = () => {
    setSearch("");
    setRoleFilter("all");
    setStatusFilter("all");
  };

  return {
    users: filtered,
    allUsers: users,
    stats,
    ready,
    search,
    setSearch,
    roleFilter,
    setRoleFilter,
    statusFilter,
    setStatusFilter,
    addUser,
    updateUser,
    deleteUser,
    toggleBan,
    resetFilters,
  };
}
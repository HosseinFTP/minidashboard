"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { initialUsers } from "@/data/users";

const AuthContext = createContext(undefined);

const USERS_KEY = "dashboard_users";
const SESSION_KEY = "dashboard_auth";

function readUsers() {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    if (!raw) {
      localStorage.setItem(USERS_KEY, JSON.stringify(initialUsers));
      return initialUsers;
    }
    return JSON.parse(raw);
  } catch {
    return initialUsers;
  }
}

function writeUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  window.dispatchEvent(new Event("users-updated"));
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    readUsers();
    try {
      const saved = localStorage.getItem(SESSION_KEY);
      if (saved) setUser(JSON.parse(saved));
    } catch {}
    setLoading(false);
  }, []);

  const login = ({ email, password }) => {
    const users = readUsers();
    const account = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase()
    );

    if (!account) throw new Error("کاربری با این ایمیل یافت نشد");
    if (account.password !== password) throw new Error("رمز عبور اشتباه است");
    if (account.status === "banned")
      throw new Error("حساب شما بن شده است. با پشتیبانی تماس بگیرید");
    if (account.status === "inactive")
      throw new Error("حساب شما غیرفعال است");

    const session = {
      id: account.id,
      email: account.email,
      name: account.name,
      role: account.role,
      loggedAt: Date.now(),
    };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    setUser(session);
    return session;
  };

  const register = ({ name, email, password }) => {
    const users = readUsers();

    if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
      throw new Error("این ایمیل قبلاً ثبت شده است");
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
      role: "user",
      status: "active",
      joinedAt: new Date().toLocaleDateString("fa-IR"),
    };

    const updated = [newUser, ...users];
    writeUsers(updated);

    const session = {
      id: newUser.id,
      email: newUser.email,
      name: newUser.name,
      role: newUser.role,
      loggedAt: Date.now(),
    };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    setUser(session);
    return session;
  };

  const logout = () => {
    localStorage.removeItem(SESSION_KEY);
    setUser(null);
  };

  useEffect(() => {
    const checkSession = () => {
      if (!user) return;
      const users = readUsers();
      const current = users.find((u) => u.id === user.id);
      if (!current || current.status === "banned" || current.status === "inactive") {
        localStorage.removeItem(SESSION_KEY);
        setUser(null);
      }
    };

    window.addEventListener("users-updated", checkSession);
    return () => window.removeEventListener("users-updated", checkSession);
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth باید داخل AuthProvider استفاده بشه");
  }
  return context;
}
"use client";

import { SidebarProvider } from "./SidebarContext";

export default function DashboardProviders({ children }) {
  return <SidebarProvider>{children}</SidebarProvider>;
}
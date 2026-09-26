"use client";

import { createContext, useContext, useState } from "react";

const SidebarContext = createContext(undefined);

export function SidebarProvider({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ open, setOpen }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error("useSidebar باید داخل SidebarProvider استفاده بشه");
  }
  return context;
}
'use client'

import { ToggleContext } from "@/contexts/toggle-context";
import React, { useState } from "react";

export const ToggleProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((open) => !open);
  }

  return (
    <ToggleContext.Provider
      value={{ isOpen: isOpen, handleToggle: handleToggle }}
    >
      {children}
    </ToggleContext.Provider>
  );
};

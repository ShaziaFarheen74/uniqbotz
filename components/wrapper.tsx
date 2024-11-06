import { cn } from "@/lib/utils";
import React from "react";

const Wrapper = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn("container mx-auto w-full max-w-screen-xl", className)}
    >
      {children}
    </div>
  );
};

export default Wrapper;

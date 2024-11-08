import { cn } from "@/lib/utils";
import React from "react";


interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({className, children, ...props }) => {
  return (
    <div
      className={cn("container mx-auto w-full max-w-screen-xl", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Wrapper;

import React, { ComponentProps } from "react";
import { cn } from "../lib/utils";

type CardProviderProps = ComponentProps<"div">;
const CardProvider = ({ className, ...rest }: CardProviderProps) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center flex-col bg-white gap-4 p-6 rounded-lg shadow-md",
        className
      )}
      {...rest}
    />
  );
};

export default CardProvider;

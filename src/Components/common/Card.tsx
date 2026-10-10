import type { HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

export function Card({className = '', ...props}: HTMLAttributes<HTMLDivElement>) {
  return(
    <div {...props} className={cn('rounded-lg border border-muted p-6', className)}/>
  )
}
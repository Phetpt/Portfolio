import type { ReactNode } from "react";

export function Badge({children}: {children: ReactNode}) {
  return (
    <span className="rounded border border-muted px-2 py-1 text-sm">{children}</span>
  )
}
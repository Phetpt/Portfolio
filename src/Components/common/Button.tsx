import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

type ButtonProps = 
  | ({href: string} & AnchorHTMLAttributes<HTMLAnchorElement>)
  | ({href?: never} & ButtonHTMLAttributes<HTMLButtonElement>)

  const style = 
  'inline-flex min-h-11 items-center rounded-lg border border-muted px-4 py-2 font-medium focus-visible:outline-2 focus-visible:outline-offset-4';

export default function Button(props: ButtonProps) {

  if (typeof props.href == 'string') {
    const {className = '', ...rest} =
      props as AnchorHTMLAttributes<HTMLAnchorElement>
    return <a {...rest} className={cn(style, className)}/>;
  } 
  const {className = '', type = 'button', ...rest} = 
    props as ButtonHTMLAttributes<HTMLButtonElement>;
  return <button {...rest} type={type} className={cn(style, className)} />;
  }

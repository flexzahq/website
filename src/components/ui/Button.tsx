import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
  showArrow?: boolean;
};

export function Button({ children, variant = "primary", showArrow = false, className = "", style, ...props }: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-primary text-white shadow-glow hover:bg-[#4c8f8a]"
      : "border border-black/10 bg-white text-ink shadow-sm hover:border-primary/30 hover:text-primary";

  const finalStyle = { ...(style as any), cornerShape: "squircle" };

  return (
    <button
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-bold transition duration-300 focus:outline-none focus:ring-4 focus:ring-primary/20 ${styles} ${className}`}
      style={finalStyle}
      {...props}
    >
      {children}
      {showArrow ? <ArrowRight aria-hidden="true" className="h-4 w-4" /> : null}
    </button>
  );
}

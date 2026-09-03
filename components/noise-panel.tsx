import type { ReactNode } from "react";

export function NoisePanel({
  className = "",
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-[url('/images/noise.png')] bg-cover bg-center ${className}`}
    >
      <div className="absolute inset-0 bg-black/60" />
      {children ? (
        <div className="relative flex h-full items-center justify-center p-4 text-center">
          {children}
        </div>
      ) : null}
    </div>
  );
}

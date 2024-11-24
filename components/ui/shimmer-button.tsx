"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface ShimmerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string
  shimmerSize?: string
  borderRadius?: string
  shimmerDuration?: string
}

const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  ({ className, shimmerColor, shimmerSize, borderRadius, shimmerDuration, ...props }, ref) => {
    return (
      <button
        className={cn(
          "group relative inline-flex items-center justify-center overflow-hidden rounded-md bg-orange-500 px-8 py-3 font-medium text-white transition duration-300 ease-out hover:bg-orange-600",
          className
        )}
        ref={ref}
        {...props}
      >
        <span className="absolute inset-0 flex h-full w-full">
          <span
            className={cn(
              "absolute inset-0 h-[300%] w-[300%] rotate-45 translate-x-[-50%] transition-all group-hover:translate-x-[-10%] duration-1000 ease-out",
              shimmerDuration || "duration-1000"
            )}
            style={{
              background: `conic-gradient(from 0deg at 50% 50%, ${shimmerColor || "#0000"} 0deg, ${
                shimmerColor || "#fff8"
              } 60deg, ${shimmerColor || "#0000"} 120deg)`,
              borderRadius: borderRadius || "100%",
            }}
          />
        </span>
        <span className="relative">{props.children}</span>
      </button>
    )
  }
)
ShimmerButton.displayName = "ShimmerButton"

export { ShimmerButton }


import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    const errorId = props.id || props.name ? `${props.id || props.name}-error` : undefined

    return (
      <div className="w-full">
        <input
          type={type}
          className={cn(
            "flex w-full rounded-lg border border-gray-600/40 bg-[#0f1628]/80 px-4 py-3 text-sm text-gray-100",
            "placeholder:text-gray-500",
            "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "transition-colors",
            error && "border-red-500 focus:ring-red-500 focus:border-red-500",
            className
          )}
          ref={ref}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? errorId : undefined}
          {...props}
        />
        {error && (
          <p
            id={errorId}
            className="mt-1 text-sm text-red-400"
            role="alert"
          >
            {error}
          </p>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }


"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface AccordionContextValue {
  value: string[]
  onValueChange: (value: string[]) => void
  type: "single" | "multiple"
}

const AccordionContext = React.createContext<AccordionContextValue | undefined>(undefined)
const AccordionItemContext = React.createContext<{ value: string } | undefined>(undefined)

const useAccordion = () => {
  const context = React.useContext(AccordionContext)
  if (!context) {
    throw new Error("Accordion components must be used within Accordion")
  }
  return context
}

interface AccordionProps {
  type?: "single" | "multiple"
  defaultValue?: string | string[]
  value?: string | string[]
  onValueChange?: (value: string | string[]) => void
  children: React.ReactNode
  className?: string
  collapsible?: boolean
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ type = "single", defaultValue, value, onValueChange, children, className, collapsible = true, ...props }, ref) => {
    const [internalValue, setInternalValue] = React.useState<string[]>(
      value ? (Array.isArray(value) ? value : [value]) : (defaultValue ? (Array.isArray(defaultValue) ? defaultValue : [defaultValue]) : [])
    )

    const handleValueChange = React.useCallback((newValue: string[]) => {
      if (type === "single") {
        const singleValue = newValue.length > 0 ? newValue[0] : ""
        if (onValueChange) {
          onValueChange(singleValue)
        }
        setInternalValue(newValue.length > 0 ? [newValue[0]] : [])
      } else {
        if (onValueChange) {
          onValueChange(newValue)
        }
        setInternalValue(newValue)
      }
    }, [type, onValueChange])

    React.useEffect(() => {
      if (value !== undefined) {
        setInternalValue(Array.isArray(value) ? value : [value])
      }
    }, [value])

    return (
      <AccordionContext.Provider value={{ value: internalValue, onValueChange: handleValueChange, type }}>
        <div ref={ref} className={cn("space-y-2", className)} {...props}>
          {children}
        </div>
      </AccordionContext.Provider>
    )
  }
)
Accordion.displayName = "Accordion"

interface AccordionItemProps {
  value: string
  children: React.ReactNode
  className?: string
}

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ value, children, className, ...props }, ref) => {
    return (
      <AccordionItemContext.Provider value={{ value }}>
        <div ref={ref} className={cn("border-b border-gray-800", className)} {...props}>
          {children}
        </div>
      </AccordionItemContext.Provider>
    )
  }
)
AccordionItem.displayName = "AccordionItem"

interface AccordionTriggerProps {
  children: React.ReactNode
  className?: string
}

const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ children, className, ...props }, ref) => {
    const { value, onValueChange, type } = useAccordion()
    const itemContext = React.useContext(AccordionItemContext)
    const itemValue = itemContext?.value || ""
    const isOpen = value.includes(itemValue)

    const handleClick = () => {
      if (type === "single") {
        if (isOpen) {
          onValueChange([])
        } else {
          onValueChange([itemValue])
        }
      } else {
        if (isOpen) {
          onValueChange(value.filter((v) => v !== itemValue))
        } else {
          onValueChange([...value, itemValue])
        }
      }
    }

    return (
      <button
        ref={ref}
        type="button"
        onClick={handleClick}
        className={cn(
          "flex w-full items-center justify-between py-4 text-left font-medium text-white transition-all hover:text-blue-400 [&[data-state=open]>svg]:rotate-180",
          className
        )}
        data-state={isOpen ? "open" : "closed"}
        {...props}
      >
        {children}
        <ChevronDown className="h-4 w-4 shrink-0 text-gray-400 transition-transform duration-200" />
      </button>
    )
  }
)
AccordionTrigger.displayName = "AccordionTrigger"

interface AccordionContentProps {
  children: React.ReactNode
  className?: string
}

const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ children, className, ...props }, ref) => {
    const { value } = useAccordion()
    const itemContext = React.useContext(AccordionItemContext)
    const itemValue = itemContext?.value || ""
    const isOpen = value.includes(itemValue)

    return (
      <div
        ref={ref}
        className={cn(
          "overflow-hidden text-sm transition-all",
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        )}
        data-state={isOpen ? "open" : "closed"}
        {...props}
      >
        <div className={cn("pb-4 pt-0 text-gray-400", className)}>{children}</div>
      </div>
    )
  }
)
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }


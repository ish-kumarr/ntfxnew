import { type ComponentPropsWithoutRef, type ReactNode } from "react"
import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode
  className?: string
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string
  className?: string
  background: ReactNode
  Icon: React.ElementType
  description: string
  href: string
  cta: string
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-[2rem]",
      // The premium dark theme
      "bg-[#0d0f17] border border-white/[0.04] transition-colors duration-700 hover:bg-[#11131c]",
      className
    )}
    {...props}
  >
    <div>{background}</div>
    <div className="p-4">
      <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 transition-all duration-500 lg:group-hover:-translate-y-8">
        <Icon className="h-10 w-10 origin-left transform-gpu text-[#5271ff]/80 transition-all duration-300 ease-in-out group-hover:scale-75 group-hover:text-[#2e62ff] mb-2" />
        <h3 className="text-[22px] tracking-tight font-semibold text-white">
          {name}
        </h3>
        <p className="max-w-lg text-white/40 font-medium text-[13px] leading-relaxed pr-2">{description}</p>
      </div>

      <div
        className={cn(
          "pointer-events-none flex w-full translate-y-0 transform-gpu flex-row items-center transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:hidden"
        )}
      >
        <Button
          variant="link"
          asChild
          size="sm"
          className="pointer-events-auto p-0"
        >
          <a href={href} className="text-[11px] font-semibold text-[#8ea5ff] hover:text-[#5271ff] transition-colors uppercase tracking-widest inline-flex items-center">
            {cta}
            <ArrowRight className="ms-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>

    <div
      className={cn(
        "pointer-events-none absolute bottom-0 hidden w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:flex"
      )}
    >
      <Button
        variant="link"
        asChild
        size="sm"
        className="pointer-events-auto p-0"
      >
        <a href={href} className="text-[11px] font-semibold text-[#8ea5ff] hover:text-[#5271ff] transition-colors uppercase tracking-widest inline-flex items-center">
          {cta}
          <ArrowRight className="ms-2 h-4 w-4" />
        </a>
      </Button>
    </div>

    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-500 group-hover:bg-[#5271ff]/[0.02]" />
  </div>
)

export { BentoCard, BentoGrid }

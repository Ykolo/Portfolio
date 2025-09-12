import { cn } from "@/lib/cn";
import * as RadixSwitch from "@radix-ui/react-switch";
import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";

export type SwitchProps = React.ComponentProps<typeof RadixSwitch.Root>;

export function Switch({ className, checked, ...props }: SwitchProps) {
  return (
    <RadixSwitch.Root
      {...props}
      checked={checked}
      className={cn(
        // base
        "group inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border border-border p-0.5 transition-colors",
        // bg clair/sombre
        "bg-muted data-[state=checked]:bg-primary",
        // focus ring
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className
      )}
    >
      <RadixSwitch.Thumb asChild>
        <motion.div
          className="relative flex items-center justify-center aspect-square h-full rounded-full bg-background shadow-sm"
          animate={{ x: checked ? 20 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            className="absolute"
            initial={false}
            animate={{
              opacity: checked ? 0 : 1,
              scale: checked ? 0.5 : 1,
              rotate: checked ? -90 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <Sun className="h-3.5 w-3.5 text-foreground" />
          </motion.div>

          <motion.div
            className="absolute"
            initial={false}
            animate={{
              opacity: checked ? 1 : 0,
              scale: checked ? 1 : 0.5,
              rotate: checked ? 0 : 90,
            }}
            transition={{ duration: 0.3 }}
          >
            <Moon className="h-3.5 w-3.5 text-foreground" />
          </motion.div>
        </motion.div>
      </RadixSwitch.Thumb>
    </RadixSwitch.Root>
  );
}

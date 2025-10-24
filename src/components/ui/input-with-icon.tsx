import * as React from "react";
import { Input } from "@/components/ui/input"; // Adjust path as needed
import { cn } from "@/lib/utils";

interface InputWithIconProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;

  // iconPosition?: "left" | "right";
}

const InputWithIcon = React.forwardRef<HTMLInputElement, InputWithIconProps>(
  ({ className, leftIcon, rightIcon, ...props }, ref) => {
    return (
      <div className={cn("relative flex items-center", className)}>
        {leftIcon && (
          <div className="absolute left-3 text-muted-foreground pointer-events-none">
            {leftIcon}
          </div>
        )}
        <Input
          ref={ref}
          className={cn(leftIcon && "pl-10", rightIcon && "pr-10")}
          {...props}
        />
        {rightIcon && (
          <div className="absolute right-3 text-muted-foreground pointer-events-none">
            {rightIcon}
          </div>
        )}
      </div>
    );
  }
);

InputWithIcon.displayName = "InputWithIcon";

export { InputWithIcon };

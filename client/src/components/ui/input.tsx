import * as React from "react";

import { cn } from "@/lib/utils";
import { Label } from "./label";
import clsx from "clsx";

function InputField({
  className,
  type,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-9 w-full min-w-0 rounded-4xl border border-input bg-input/30 px-3 py-1 text-base transition-colors outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/20 md:text-sm dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    />
  );
}

export interface InputDto extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: { message?: string };
  leftIcon?: React.ReactNode;
  leftEle?: React.ReactNode;
  wrapperClassName?: string;
}

export function Input({
  label,
  error,
  leftIcon,
  leftEle,
  wrapperClassName,
  ...props
}: InputDto) {
  const [isVisiblePassword, _] = React.useState(false);
  const id = React.useId();

  return (
    <div className="flex w-full flex-col gap-0.5">
      <div className="flex items-center justify-between">
        {label && (
          <Label htmlFor={props?.id ?? id} className="text-[13px] font-medium">
            {label}
          </Label>
        )}
        {leftEle && leftEle}
      </div>
      <div
        className={clsx(
          "input flex w-full items-center gap-2",
          wrapperClassName || "rounded-lg"
        )}
      >
        {leftIcon && (
          <span className="text-base-content/40 flex items-center">
            {leftIcon}
          </span>
        )}
        <InputField
          {...props}
          id={props?.id ?? id}
          className={clsx("grow", props.className)}
          type={isVisiblePassword ? "text" : props.type}
        />
      </div>
      {error && (
        <span className="mt-0.5 text-[13px] text-destructive">
          {error?.message}
        </span>
      )}
    </div>
  );
}
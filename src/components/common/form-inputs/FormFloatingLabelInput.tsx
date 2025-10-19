"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Eye, EyeClosed } from "lucide-react";
import type { ComponentProps, HTMLInputTypeAttribute, ReactNode } from "react";
import { useEffect, useState } from "react";
import type { FieldValues, Path, UseFormReturn } from "react-hook-form";

export type FormFloatinglabelInputProps<T extends FieldValues> = Omit<
  ComponentProps<"input">,
  "form" | "input"
> & {
  form: UseFormReturn<T>;
  name: Path<T>;
  label: string | ReactNode;
  type?: HTMLInputTypeAttribute;
  wrapperClass?: string;
  labelClass?: string;
  registerOptions?: any;
};

function FormFloatinglabelInput<T extends FieldValues>({
  form,
  name,
  label,
  type,
  wrapperClass,
  labelClass,
  registerOptions,
  ...props
}: FormFloatinglabelInputProps<T>) {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const { register } = form;

  const handleViewPasswordToggle = () => {
    setShowPassword((prev) => (prev ? false : true));
  };

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => {
        const isFilled = !!field.value;

        return (
          <FormItem className={cn("relative", wrapperClass)}>
            <FormControl>
              <div className="relative">
                <Input
                  autoComplete="new-password"
                  type={type === "password" && showPassword ? "text" : type}
                  {...field}
                  {...props}
                  className={cn(
                    "peer transition-all pr-10 pl-0 focus:ring-0 placeholder:text-transparent shadow-none border-0 border-b border-gray-300 rounded-none focus:border-b-2 ",
                    "focus-visible:ring-0",
                    props.className
                  )}
                  {...register(name, registerOptions)}
                />
                <FormLabel
                  className={cn(
                    "absolute left-0 text-gray-400 transition-all duration-200 pointer-events-none",
                    isFilled
                      ? "top-0 -translate-y-full text-xs "
                      : "top-1/2 -translate-y-1/2 text-sm text-gray-200 peer-focus:top-0 peer-focus:-translate-y-full peer-focus:text-xs peer-focus:text-gray-400",
                    labelClass
                  )}
                >
                  {label}
                  {props.required && <span className="text-red-500">*</span>}
                </FormLabel>

                {type === "password" && (
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      handleViewPasswordToggle();
                    }}
                    className="absolute z-10 cursor-pointer right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-all"
                  >
                    {showPassword ? (
                      <Eye className="w-5 h-5" />
                    ) : (
                      <EyeClosed className="w-5 h-5" />
                    )}
                  </span>
                )}
              </div>
            </FormControl>
            <FormMessage className="text-xs mt-1" />
          </FormItem>
        );
      }}
    />
  );
}

export default FormFloatinglabelInput;

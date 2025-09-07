/*****
 *
 * This code was generated using Seldon (https://seldon.app)
 *
 * Licensed under the Terms of Use: https://seldon.digital/terms-of-service
 * Do not redistribute or sublicense without permission.
 *
 * You may not use this software, or any derivative works of it,
 * in whole or in part, for the purposes of training, fine-tuning,
 * or otherwise improving (directly or indirectly) any machine learning
 * or artificial intelligence system.
 * 
 *****/
 
import { InputHTMLAttributes } from "react"
import { HTMLInput } from "../native-react/HTML.Input"

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  inputType?:
    | "text"
    | "number"
    | "email"
    | "password"
    | "search"
    | "tel"
    | "url"
    | "date"
    | "datetime-local"
}

/**
 * Input
 *
 * Level: Primitive
 *
 * Intent: Low-level text input control for collecting user input.
 *
 * Tags: input, form, text, primitive, field, user entry, control
 *
 * @example
 * ```tsx
 * <Input
 *   inputType="text"
 *   placeholder="Placeholder text"
 *   width="fill"
 *   height="fit"
 *   color="@swatch.black"
 *   textCase="normal"
 *   textDecoration="none"
 * />
 * ```
 */
export function Input({ className = "", ...props }: InputProps) {
  return <HTMLInput className={"sdn-input " + className} {...props} />
}

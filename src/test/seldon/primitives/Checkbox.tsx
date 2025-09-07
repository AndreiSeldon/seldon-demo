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

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  buttonSize?:
    | "@fontSize.xsmall"
    | "@fontSize.small"
    | "@fontSize.medium"
    | "@fontSize.large"
    | "@fontSize.xlarge"
  inputType?: "checkbox"
}

/**
 * Checkbox
 *
 * Level: Primitive
 *
 * Intent: Basic form control for toggling a binary value.
 *
 * Tags: checkbox, form, input, boolean, toggle, primitive, control
 *
 * @example
 * ```tsx
 * <Checkbox
 *   buttonSize="@fontSize.medium"
 *   checked="false"
 *   inputType="checkbox"
 *   width="fit"
 *   color="@swatch.black"
 *   accentColor="@swatch.primary"
 * />
 * ```
 */
export function Checkbox({ className = "", ...props }: CheckboxProps) {
  return <HTMLInput className={"sdn-checkbox " + className} {...props} />
}

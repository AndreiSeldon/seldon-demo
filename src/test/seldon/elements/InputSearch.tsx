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
 
import { HTMLAttributes } from "react"
import { Frame } from "../frames/Frame"
import { Icon, IconProps } from "../primitives/Icon"
import { Input, InputProps } from "../primitives/Input"
import { combineClassNames } from "../utils/class-name-utils"

export interface InputSearchProps extends HTMLAttributes<HTMLElement> {
  className?: string
  icon?: IconProps
  input?: InputProps
}

/**
 * Search Input
 *
 * Level: Element
 *
 * Intent: Specialized input field for entering and submitting search queries.
 *
 * Tags: search, input, form, query, field, UI, text, control
 *
 * @example
 * ```tsx
 * <InputSearch
 *   icon="material-star"
 *   input="{}"
 * />
 * ```
 */
export function InputSearch({
  className = "",
  icon = sdn.icon,
  input = sdn.input,
  ...props
}: InputSearchProps) {
  const frameClassName = combineClassNames("sdn-inputSearch", className)
  const iconProps = {
    ...sdn.icon,
    ...icon,
    className: combineClassNames(sdn.icon?.className, icon?.className),
  }
  const inputProps = {
    ...sdn.input,
    ...input,
    className: combineClassNames(sdn.input?.className, input?.className),
  }

  return (
    <Frame className={frameClassName} {...props}>
      <Icon {...iconProps} />
      <Input {...inputProps} />
    </Frame>
  )
}

const sdn: InputSearchProps = {
  icon: {
    icon: "material-search",
    className: "sdn-icon-SakY06Rx",
  },
  input: {
    inputType: "text",
    className: "sdn-input-kFUwcMTq",
  },
}

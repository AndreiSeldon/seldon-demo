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
 
import { ButtonHTMLAttributes } from "react"
import { HTMLButton } from "../native-react/HTML.Button"
import { Icon, IconProps } from "../primitives/Icon"
import { Label, LabelProps } from "../primitives/Label"
import { combineClassNames } from "../utils/class-name-utils"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  buttonSize?:
    | "@fontSize.xxsmall"
    | "@fontSize.xsmall"
    | "@fontSize.small"
    | "@fontSize.medium"
    | "@fontSize.large"
    | "@fontSize.xlarge"
    | "@fontSize.xxlarge"
  icon?: IconProps
  label?: LabelProps
}

/**
 * Button
 *
 * Level: Element
 *
 * Intent: Standard button for triggering actions like submit, confirm, or cancel.
 *
 * Tags: button, action, UI, primary, click, control, submit, call to action
 *
 * @example
 * ```tsx
 * <Button
 *   buttonSize="@fontSize.medium"
 *   orientation="horizontal"
 *   align="center"
 *   width="fit"
 *   height="fit"
 *   gap="[object Object]"
 *   cursor="pointer"
 * />
 * ```
 */
export function Button({ className = "", icon, label, ...props }: ButtonProps) {
  const frameClassName = combineClassNames("sdn-button", className)
  const iconProps = {
    ...sdn.icon,
    ...icon,
    className: combineClassNames(sdn.icon?.className, icon?.className),
  }
  const labelProps = {
    ...sdn.label,
    ...label,
    className: combineClassNames(sdn.label?.className, label?.className),
  }

  return (
    <HTMLButton className={frameClassName} {...props}>
      <Icon {...iconProps} />
      <Label {...labelProps} />
    </HTMLButton>
  )
}

const sdn: ButtonProps = {
  icon: {
    icon: "__default__",
    color: "[object Object]",
    size: "[object Object]",
    ariaHidden: "false",
    className: "sdn-icon-wKsld4qS",
  },
  label: {
    children: "Button",
    htmlElement: "label",
    width: "fit",
    height: "fit",
    color: "[object Object]",
    opacity: "[object Object]",
    wrapText: "false",
    className: "sdn-label-QE5N5XMK",
  },
}

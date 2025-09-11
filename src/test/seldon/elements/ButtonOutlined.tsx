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
import { combineClassNames } from "../utils/class-name"

export interface ButtonOutlinedProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
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
 * <ButtonOutlined
 *   icon="material-star"
 *   label="Button Label"
 * />
 * ```
 */
export function ButtonOutlined({
  className = "",
  icon = sdn.icon,
  label = sdn.label,
  ...props
}: ButtonOutlinedProps) {
  const frameClassName = combineClassNames(
    "sdn-button sdn-button-rgfIWs",
    className,
  )
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

const sdn: ButtonOutlinedProps = {
  icon: {
    icon: "__default__",
    className: "sdn-icon-0symaN",
  },
  label: {
    children: "Label",
    htmlElement: "label",
    className: "sdn-label-FuunCK",
  },
}

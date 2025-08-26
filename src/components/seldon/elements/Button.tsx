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

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string

  icon?: IconProps
  label?: LabelProps
}

export function Button({
  className = "",
  icon = sdn.icon,
  label = sdn.label,
  ...props
}: ButtonProps) {
  return (
    <HTMLButton className={"sdn-button " + className} {...props}>
      <Icon
        {...{ ...sdn.icon, ...icon }}
        className={
          "sdn-icon-9N9vH4yn" + (icon?.className ? " " + icon.className : "")
        }
      />
      <Label
        {...{ ...sdn.label, ...label }}
        className={
          "sdn-label-BOyxJbm8" + (label?.className ? " " + label.className : "")
        }
      />
    </HTMLButton>
  )
}

const sdn: ButtonProps = {
  icon: {
    icon: "__default__",
    className: "sdn-icon-9N9vH4yn",
  },
  label: {
    children: "Label",
    htmlElement: "label",
    className: "sdn-label-BOyxJbm8",
  },
}

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
import { Button, ButtonProps } from "../elements/Button"
import { Frame } from "../frames/Frame"
import { Icon, IconProps } from "../primitives/Icon"
import { Label, LabelProps } from "../primitives/Label"
import { combineClassNames } from "../utils/class-name"

export interface ButtonBarProps extends HTMLAttributes<HTMLElement> {
  className?: string
  button?: ButtonProps
  icon?: IconProps
  label?: LabelProps
}

/**
 * Button Bar
 *
 * Level: Part
 *
 * Intent: Groups multiple buttons in a horizontal layout for related actions.
 *
 * Tags: button group, bar, actions, UI, layout, controls, inline, cluster
 *
 * @example
 * ```tsx
 * <ButtonBar
 *   button={() => {}}
 *   icon="material-star"
 *   label="Button Label"
 * />
 * ```
 */
export function ButtonBar({
  className = "",
  button = sdn.button,
  icon,
  label,
  ...props
}: ButtonBarProps) {
  const frameClassName = combineClassNames("sdn-buttonBar", className)
  const buttonProps = {
    ...sdn.button,
    ...button,
    className: combineClassNames(sdn.button?.className, button?.className),
  }
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
    <Frame className={frameClassName} {...props}>
      <Button {...buttonProps} icon={iconProps} label={labelProps} />
    </Frame>
  )
}

const sdn: ButtonBarProps = {
  button: {
    className: "sdn-button-HjzV76",
  },
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

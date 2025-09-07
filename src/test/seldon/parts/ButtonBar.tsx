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
import { combineClassNames } from "../utils/class-name-utils"

export interface ButtonBarProps extends HTMLAttributes<HTMLElement> {
  className?: string
  button?: ButtonProps
  icon?: IconProps
  label?: LabelProps
  button2?: ButtonProps
  icon2?: IconProps
  label2?: LabelProps
  button3?: ButtonProps
  icon3?: IconProps
  label3?: LabelProps
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
 *   ariaHidden="false"
 *   orientation="horizontal"
 *   align="right"
 *   wrapChildren="true"
 *   width="fill"
 *   height="fit"
 *   gap="@gap.cozy"
 * />
 * ```
 */
export function ButtonBar({
  className = "",
  button,
  icon,
  label,
  button2,
  icon2,
  label2,
  button3,
  icon3,
  label3,
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
  const button2Props = {
    ...sdn.button2,
    ...button2,
    className: combineClassNames(sdn.button2?.className, button2?.className),
  }
  const icon2Props = {
    ...sdn.icon2,
    ...icon2,
    className: combineClassNames(sdn.icon2?.className, icon2?.className),
  }
  const label2Props = {
    ...sdn.label2,
    ...label2,
    className: combineClassNames(sdn.label2?.className, label2?.className),
  }
  const button3Props = {
    ...sdn.button3,
    ...button3,
    className: combineClassNames(sdn.button3?.className, button3?.className),
  }
  const icon3Props = {
    ...sdn.icon3,
    ...icon3,
    className: combineClassNames(sdn.icon3?.className, icon3?.className),
  }
  const label3Props = {
    ...sdn.label3,
    ...label3,
    className: combineClassNames(sdn.label3?.className, label3?.className),
  }

  return (
    <Frame className={frameClassName} {...props}>
      <Button {...buttonProps} />
      <Button {...button2Props} />
      <Button {...button3Props} />
    </Frame>
  )
}

const sdn: ButtonBarProps = {
  button: {
    buttonSize: "@fontSize.medium",
    orientation: "horizontal",
    align: "center",
    width: "fit",
    height: "fit",
    gap: "[object Object]",
    cursor: "pointer",
    className: "sdn-button-bEAjiYmh",
  },
  icon: {
    icon: "material-add",
    color: "[object Object]",
    size: "[object Object]",
    ariaHidden: "false",
    className: "sdn-icon-vkgwzWrj",
  },
  label: {
    children: "Add",
    htmlElement: "label",
    width: "fit",
    height: "fit",
    color: "[object Object]",
    opacity: "[object Object]",
    wrapText: "false",
    className: "sdn-label-iBTpKhvZ",
  },
  button2: {
    buttonSize: "@fontSize.medium",
    orientation: "horizontal",
    align: "center",
    width: "fit",
    height: "fit",
    gap: "[object Object]",
    cursor: "pointer",
    className: "sdn-button-bEAjiYmh",
  },
  icon2: {
    icon: "material-remove",
    color: "[object Object]",
    size: "[object Object]",
    ariaHidden: "false",
    className: "sdn-icon-vkgwzWrj",
  },
  label2: {
    children: "Remove",
    htmlElement: "label",
    width: "fit",
    height: "fit",
    color: "[object Object]",
    opacity: "[object Object]",
    wrapText: "false",
    className: "sdn-label-iBTpKhvZ",
  },
  button3: {
    buttonSize: "@fontSize.medium",
    orientation: "horizontal",
    align: "center",
    width: "fit",
    height: "fit",
    gap: "[object Object]",
    cursor: "pointer",
    className: "sdn-button-bEAjiYmh",
  },
  icon3: {
    icon: "__default__",
    color: "[object Object]",
    size: "[object Object]",
    ariaHidden: "false",
    className: "sdn-icon-vkgwzWrj",
  },
  label3: {
    children: "Button",
    htmlElement: "label",
    width: "fit",
    height: "fit",
    color: "[object Object]",
    opacity: "[object Object]",
    wrapText: "false",
    className: "sdn-label-iBTpKhvZ",
  },
}

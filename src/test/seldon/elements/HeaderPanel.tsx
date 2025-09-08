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
import { Title, TitleProps } from "../primitives/Title"
import { combineClassNames } from "../utils/class-name-utils"

export interface HeaderPanelProps extends HTMLAttributes<HTMLElement> {
  className?: string
  titleProps?: TitleProps
  button?: ButtonProps
  icon?: IconProps
  label?: LabelProps
}

/**
 * Panel Header
 *
 * Level: Element
 *
 * Intent: Divides header space into interactive or informational panels.
 *
 * Tags: header, panels, layout, top bar, UI, modular, zones, sections
 *
 * @example
 * ```tsx
 * <HeaderPanel
 *   title="Product Title"
 *   button={() => {}}
 *   icon="material-star"
 *   label="Button Label"
 * />
 * ```
 */
export function HeaderPanel({
  className = "",
  titleProps = sdn.titleProps,
  button = sdn.button,
  icon,
  label,
  ...props
}: HeaderPanelProps) {
  const frameClassName = combineClassNames("sdn-headerPanel", className)
  const titlePropsProps = {
    ...sdn.titleProps,
    ...titleProps,
    className: combineClassNames(
      sdn.titleProps?.className,
      titleProps?.className,
    ),
  }
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
      <Title {...titlePropsProps} />
      <Button {...buttonProps} icon={iconProps} label={labelProps} />
    </Frame>
  )
}

const sdn: HeaderPanelProps = {
  titleProps: {
    children: "Title",
    htmlElement: "h4",
    className: "sdn-title-26xYrQ67",
  },
  button: {
    className: "sdn-button-zKVzh6Co",
  },
  icon: {
    icon: "__default__",
    className: "sdn-icon-tYgrnrpK",
  },
  label: {
    children: "Button",
    htmlElement: "label",
    className: "sdn-label-J4a5vLPS",
  },
}

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
 *   ariaHidden="false"
 *   orientation="horizontal"
 *   align="center"
 *   width="fill"
 *   height="fit"
 *   gap="@gap.cozy"
 *   wrapChildren="false"
 * />
 * ```
 */
export function HeaderPanel({
  className = "",
  titleProps,
  button,
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
      <Button {...buttonProps} />
    </Frame>
  )
}

const sdn: HeaderPanelProps = {
  titleProps: {
    children: "Title",
    htmlElement: "h4",
    width: "fill",
    height: "fit",
    color: "[object Object]",
    opacity: "[object Object]",
    textCase: "normal",
    textDecoration: "none",
    wrapText: "true",
    lines: "2",
    className: "sdn-title-dUVYCsWI",
  },
  button: {
    buttonSize: "@fontSize.medium",
    orientation: "horizontal",
    align: "center",
    width: "fit",
    height: "fit",
    gap: "[object Object]",
    cursor: "pointer",
    className: "sdn-button-HoT3tFK6",
  },
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

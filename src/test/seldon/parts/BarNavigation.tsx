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

export interface BarNavigationProps extends HTMLAttributes<HTMLElement> {
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
  button4?: ButtonProps
  icon4?: IconProps
  label4?: LabelProps
  button5?: ButtonProps
  icon5?: IconProps
  label5?: LabelProps
}

/**
 * Navigation Bar
 *
 * Level: Part
 *
 * Intent: Provides primary navigation controls for traversing sections or views.
 *
 * Tags: navigation, navbar, menu, UI, header, section, links, routing
 *
 * @example
 * ```tsx
 * <BarNavigation
 *   ariaHidden="false"
 *   orientation="horizontal"
 *   align="left"
 *   width="fill"
 *   height="fit"
 *   gap="@gap.compact"
 *   wrapChildren="false"
 * />
 * ```
 */
export function BarNavigation({
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
  button4,
  icon4,
  label4,
  button5,
  icon5,
  label5,
  ...props
}: BarNavigationProps) {
  const frameClassName = combineClassNames("sdn-barNavigation", className)
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
  const button4Props = {
    ...sdn.button4,
    ...button4,
    className: combineClassNames(sdn.button4?.className, button4?.className),
  }
  const icon4Props = {
    ...sdn.icon4,
    ...icon4,
    className: combineClassNames(sdn.icon4?.className, icon4?.className),
  }
  const label4Props = {
    ...sdn.label4,
    ...label4,
    className: combineClassNames(sdn.label4?.className, label4?.className),
  }
  const button5Props = {
    ...sdn.button5,
    ...button5,
    className: combineClassNames(sdn.button5?.className, button5?.className),
  }
  const icon5Props = {
    ...sdn.icon5,
    ...icon5,
    className: combineClassNames(sdn.icon5?.className, icon5?.className),
  }
  const label5Props = {
    ...sdn.label5,
    ...label5,
    className: combineClassNames(sdn.label5?.className, label5?.className),
  }

  return (
    <Frame className={frameClassName} {...props}>
      <Button {...buttonProps} />
      <Button {...button2Props} />
      <Button {...button3Props} />
      <Button {...button4Props} />
      <Button {...button5Props} />
    </Frame>
  )
}

const sdn: BarNavigationProps = {
  button: {
    buttonSize: "@fontSize.medium",
    orientation: "vertical",
    align: "center",
    width: "fill",
    height: "fit",
    gap: "[object Object]",
    cursor: "pointer",
    className: "sdn-button-3Ie49tQr",
  },
  icon: {
    icon: "material-home",
    color: "[object Object]",
    size: "@size.medium",
    ariaHidden: "false",
    className: "sdn-icon-R26bpHVd",
  },
  label: {
    children: "Home",
    htmlElement: "label",
    width: "fit",
    height: "fit",
    color: "[object Object]",
    opacity: "[object Object]",
    wrapText: "false",
    className: "sdn-label-VZw5Qkvo",
  },
  button2: {
    buttonSize: "@fontSize.medium",
    orientation: "vertical",
    align: "center",
    width: "fill",
    height: "fit",
    gap: "[object Object]",
    cursor: "pointer",
    className: "sdn-button-baHFtibY",
  },
  icon2: {
    icon: "material-search",
    color: "[object Object]",
    size: "@size.medium",
    ariaHidden: "false",
    className: "sdn-icon-SakY06Rx",
  },
  label2: {
    children: "Search",
    htmlElement: "label",
    width: "fit",
    height: "fit",
    color: "[object Object]",
    opacity: "[object Object]",
    wrapText: "false",
    className: "sdn-label-gapBP7xo",
  },
  button3: {
    buttonSize: "@fontSize.medium",
    orientation: "vertical",
    align: "center",
    width: "fill",
    height: "fit",
    gap: "[object Object]",
    cursor: "pointer",
    className: "sdn-button-baHFtibY",
  },
  icon3: {
    icon: "material-favorite",
    color: "[object Object]",
    size: "@size.medium",
    ariaHidden: "false",
    className: "sdn-icon-SakY06Rx",
  },
  label3: {
    children: "Favorites",
    htmlElement: "label",
    width: "fit",
    height: "fit",
    color: "[object Object]",
    opacity: "[object Object]",
    wrapText: "false",
    className: "sdn-label-gapBP7xo",
  },
  button4: {
    buttonSize: "@fontSize.medium",
    orientation: "vertical",
    align: "center",
    width: "fill",
    height: "fit",
    gap: "[object Object]",
    cursor: "pointer",
    className: "sdn-button-baHFtibY",
  },
  icon4: {
    icon: "material-accountCircle",
    color: "[object Object]",
    size: "@size.medium",
    ariaHidden: "false",
    className: "sdn-icon-SakY06Rx",
  },
  label4: {
    children: "Profile",
    htmlElement: "label",
    width: "fit",
    height: "fit",
    color: "[object Object]",
    opacity: "[object Object]",
    wrapText: "false",
    className: "sdn-label-gapBP7xo",
  },
  button5: {
    buttonSize: "@fontSize.medium",
    orientation: "vertical",
    align: "center",
    width: "fill",
    height: "fit",
    gap: "[object Object]",
    cursor: "pointer",
    className: "sdn-button-baHFtibY",
  },
  icon5: {
    icon: "material-settings",
    color: "[object Object]",
    size: "@size.medium",
    ariaHidden: "false",
    className: "sdn-icon-SakY06Rx",
  },
  label5: {
    children: "Settings",
    htmlElement: "label",
    width: "fit",
    height: "fit",
    color: "[object Object]",
    opacity: "[object Object]",
    wrapText: "false",
    className: "sdn-label-gapBP7xo",
  },
}

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

export interface BarNavigationDesktopProps extends HTMLAttributes<HTMLElement> {
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
 * Level: Module
 *
 * Intent: Provides primary navigation controls for traversing sections or views.
 *
 * Tags: navigation, navbar, menu, UI, header, section, links, routing
 *
 * @example
 * ```tsx
 * <BarNavigationDesktop
 *   button={() => {}}
 *   icon="material-star"
 *   label="Button Label"
 *   button1={() => {}}
 *   button2={() => {}}
 *   button3={() => {}}
 *   button4={() => {}}
 * />
 * ```
 */
export function BarNavigationDesktop({
  className = "",
  button = sdn.button,
  icon,
  label,
  button2 = sdn.button2,
  icon2,
  label2,
  button3 = sdn.button3,
  icon3,
  label3,
  button4 = sdn.button4,
  icon4,
  label4,
  button5 = sdn.button5,
  icon5,
  label5,
  ...props
}: BarNavigationDesktopProps) {
  const frameClassName = combineClassNames(
    "sdn-barNavigation sdn-barNavigation-QJymzK1h",
    className,
  )
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
      <Button {...buttonProps} icon={iconProps} label={labelProps} />
      <Button {...button2Props} icon={icon2Props} label={label2Props} />
      <Button {...button3Props} icon={icon3Props} label={label3Props} />
      <Button {...button4Props} icon={icon4Props} label={label4Props} />
      <Button {...button5Props} icon={icon5Props} label={label5Props} />
    </Frame>
  )
}

const sdn: BarNavigationDesktopProps = {
  button: {
    className: "sdn-button-4L86kr5w",
  },
  icon: {
    icon: "seldon-component",
    className: "sdn-icon-1OIuOePg",
  },
  label: {
    children: "General",
    htmlElement: "label",
    className: "sdn-label-00aBAay1",
  },
  button2: {
    className: "sdn-button-4L86kr5w",
  },
  icon2: {
    icon: "seldon-image",
    className: "sdn-icon-1OIuOePg",
  },
  label2: {
    children: "Cards",
    htmlElement: "label",
    className: "sdn-label-00aBAay1",
  },
  button3: {
    className: "sdn-button-4L86kr5w",
  },
  icon3: {
    icon: "material-accountCircle",
    className: "sdn-icon-1OIuOePg",
  },
  label3: {
    children: "Avatars",
    htmlElement: "label",
    className: "sdn-label-00aBAay1",
  },
  button4: {
    className: "sdn-button-4L86kr5w",
  },
  icon4: {
    icon: "seldon-frameColumns",
    className: "sdn-icon-1OIuOePg",
  },
  label4: {
    children: "Calendars",
    htmlElement: "label",
    className: "sdn-label-00aBAay1",
  },
  button5: {
    className: "sdn-button-4L86kr5w",
  },
  icon5: {
    icon: "seldon-input",
    className: "sdn-icon-1OIuOePg",
  },
  label5: {
    children: "Forms",
    htmlElement: "label",
    className: "sdn-label-00aBAay1",
  },
}

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
import { ButtonNav, ButtonNavProps } from "../elements/ButtonNav"
import { Frame } from "../frames/Frame"
import { Icon, IconProps } from "../primitives/Icon"
import { Label, LabelProps } from "../primitives/Label"

export interface BarNavigationProps extends HTMLAttributes<HTMLElement> {
  className?: string
  buttonNav?: ButtonNavProps
  icon?: IconProps
  label?: LabelProps
  buttonNav2?: ButtonNavProps
  icon2?: IconProps
  label2?: LabelProps
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
 * <BarNavigation
 *   buttonNav={() => {}}
 *   icon="material-star"
 *   label="Button Label"
 *   buttonNav1={() => {}}
 * />
 * ```
 */
export function BarNavigation({
  className = "",
  buttonNav,
  icon,
  label,
  buttonNav2,
  icon2,
  label2,
  ...props
}: BarNavigationProps) {
  return (
    <Frame className={"sdn-barNavigation " + className} {...props}>
      {buttonNav && (
        <ButtonNav
          {...{ ...sdn.buttonNav, ...buttonNav }}
          className={
            "sdn-button-G8vyYXTc" +
            (buttonNav?.className ? " " + buttonNav.className : "")
          }
          icon={{ ...sdn.icon, ...icon }}
          label={{ ...sdn.label, ...label }}
        />
      )}
      {buttonNav2 && (
        <ButtonNav
          {...{ ...sdn.buttonNav2, ...buttonNav2 }}
          className={
            "sdn-button-G8vyYXTc" +
            (buttonNav2?.className ? " " + buttonNav2.className : "")
          }
          icon={{ ...sdn.icon2, ...icon2 }}
          label={{ ...sdn.label2, ...label2 }}
        />
      )}
    </Frame>
  )
}

const sdn: BarNavigationProps = {
  buttonNav: {
    className: "sdn-button-G8vyYXTc",
  },
  icon: {
    icon: "seldon-component",
    className: "sdn-icon-1ihZT8Ll",
  },
  label: {
    children: "General",
    htmlElement: "label",
    className: "sdn-label-1WuqrUuH",
  },
  buttonNav2: {
    className: "sdn-button-G8vyYXTc",
  },
  icon2: {
    icon: "seldon-component",
    className: "sdn-icon-1ihZT8Ll",
  },
  label2: {
    children: "Cards",
    htmlElement: "label",
    className: "sdn-label-1WuqrUuH",
  },
}

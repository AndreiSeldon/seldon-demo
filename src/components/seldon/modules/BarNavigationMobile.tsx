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

export interface BarNavigationMobileProps extends HTMLAttributes<HTMLElement> {
  className?: string
  buttonNav?: ButtonNavProps
  icon?: IconProps
  buttonNav2?: ButtonNavProps
  icon2?: IconProps
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
 * <BarNavigationMobile
 *   buttonNav={() => {}}
 *   icon="material-star"
 *   buttonNav1={() => {}}
 * />
 * ```
 */
export function BarNavigationMobile({
  className = "",
  buttonNav,
  icon,
  buttonNav2,
  icon2,
  ...props
}: BarNavigationMobileProps) {
  return (
    <Frame
      className={"sdn-barNavigation sdn-barNavigation-3LOEMAIz " + className}
      {...props}
    >
      {buttonNav && (
        <ButtonNav
          {...{ ...sdn.buttonNav, ...buttonNav }}
          className={
            "sdn-button-G8vyYXTc" +
            (buttonNav?.className ? " " + buttonNav.className : "")
          }
          icon={{ ...sdn.icon, ...icon }}
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
        />
      )}
    </Frame>
  )
}

const sdn: BarNavigationMobileProps = {
  buttonNav: {
    className: "sdn-button-G8vyYXTc",
  },
  icon: {
    icon: "seldon-component",
    className: "sdn-icon-1ihZT8Ll",
  },
  buttonNav2: {
    className: "sdn-button-G8vyYXTc",
  },
  icon2: {
    icon: "seldon-component",
    className: "sdn-icon-1ihZT8Ll",
  },
}

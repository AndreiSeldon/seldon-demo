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
import { ButtonIconic, ButtonIconicProps } from "../elements/ButtonIconic"
import { Frame } from "../frames/Frame"
import { Icon, IconProps } from "../primitives/Icon"

export interface BarNavigationMobileProps extends HTMLAttributes<HTMLElement> {
  className?: string
  buttonIconic?: ButtonIconicProps
  icon?: IconProps
  buttonIconic2?: ButtonIconicProps
  icon2?: IconProps
  buttonIconic3?: ButtonIconicProps
  icon3?: IconProps
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
 *   buttonIconic={() => {}}
 *   icon="material-star"
 *   buttonIconic1={() => {}}
 *   buttonIconic2={() => {}}
 * />
 * ```
 */
export function BarNavigationMobile({
  className = "",
  buttonIconic,
  icon,
  buttonIconic2,
  icon2,
  buttonIconic3,
  icon3,
  ...props
}: BarNavigationMobileProps) {
  return (
    <Frame
      className={"sdn-barNavigation sdn-barNavigation-3LOEMAIz " + className}
      {...props}
    >
      {buttonIconic && (
        <ButtonIconic
          {...{ ...sdn.buttonIconic, ...buttonIconic }}
          className={
            "sdn-button-GZMXBjbU" +
            (buttonIconic?.className ? " " + buttonIconic.className : "")
          }
          icon={{ ...sdn.icon, ...icon }}
        />
      )}
      {buttonIconic2 && (
        <ButtonIconic
          {...{ ...sdn.buttonIconic2, ...buttonIconic2 }}
          className={
            "sdn-button-GZMXBjbU" +
            (buttonIconic2?.className ? " " + buttonIconic2.className : "")
          }
          icon={{ ...sdn.icon2, ...icon2 }}
        />
      )}
      {buttonIconic3 && (
        <ButtonIconic
          {...{ ...sdn.buttonIconic3, ...buttonIconic3 }}
          className={
            "sdn-button-GZMXBjbU" +
            (buttonIconic3?.className ? " " + buttonIconic3.className : "")
          }
          icon={{ ...sdn.icon3, ...icon3 }}
        />
      )}
    </Frame>
  )
}

const sdn: BarNavigationMobileProps = {
  buttonIconic: {
    className: "sdn-button-GZMXBjbU",
  },
  icon: {
    icon: "seldon-component",
    className: "sdn-icon-1ihZT8Ll",
  },
  buttonIconic2: {
    className: "sdn-button-GZMXBjbU",
  },
  icon2: {
    icon: "seldon-image",
    className: "sdn-icon-1ihZT8Ll",
  },
  buttonIconic3: {
    className: "sdn-button-GZMXBjbU",
  },
  icon3: {
    icon: "material-accountCircle",
    className: "sdn-icon-1ihZT8Ll",
  },
}

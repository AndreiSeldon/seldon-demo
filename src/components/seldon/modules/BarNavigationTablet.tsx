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

export interface BarNavigationTabletProps extends HTMLAttributes<HTMLElement> {
  className?: string
  button?: ButtonProps
  icon?: IconProps
  button2?: ButtonProps
  icon2?: IconProps
  button3?: ButtonProps
  icon3?: IconProps
  button4?: ButtonProps
  icon4?: IconProps
  button5?: ButtonProps
  icon5?: IconProps
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
 * <BarNavigationTablet
 *   button={() => {}}
 *   icon="material-star"
 *   button1={() => {}}
 *   button2={() => {}}
 *   button3={() => {}}
 *   button4={() => {}}
 * />
 * ```
 */
export function BarNavigationTablet({
  className = "",
  button = sdn.button,
  icon,
  button2 = sdn.button2,
  icon2,
  button3 = sdn.button3,
  icon3,
  button4 = sdn.button4,
  icon4,
  button5 = sdn.button5,
  icon5,
  ...props
}: BarNavigationTabletProps) {
  return (
    <Frame
      className={"sdn-barNavigation sdn-barNavigation-f9VVgFGt " + className}
      {...props}
    >
      <Button
        {...{ ...sdn.button, ...button }}
        className={
          "sdn-button-G8vyYXTc" +
          (button?.className ? " " + button.className : "")
        }
        icon={{
          ...sdn.icon,
          ...icon,
          className:
            "sdn-icon-1ihZT8Ll" + (icon?.className ? " " + icon.className : ""),
        }}
      />
      <Button
        {...{ ...sdn.button2, ...button2 }}
        className={
          "sdn-button-G8vyYXTc" +
          (button2?.className ? " " + button2.className : "")
        }
        icon={{
          ...sdn.icon2,
          ...icon2,
          className:
            "sdn-icon-1ihZT8Ll" +
            (icon2?.className ? " " + icon2.className : ""),
        }}
      />
      <Button
        {...{ ...sdn.button3, ...button3 }}
        className={
          "sdn-button-G8vyYXTc" +
          (button3?.className ? " " + button3.className : "")
        }
        icon={{
          ...sdn.icon3,
          ...icon3,
          className:
            "sdn-icon-1ihZT8Ll" +
            (icon3?.className ? " " + icon3.className : ""),
        }}
      />
      <Button
        {...{ ...sdn.button4, ...button4 }}
        className={
          "sdn-button-G8vyYXTc" +
          (button4?.className ? " " + button4.className : "")
        }
        icon={{
          ...sdn.icon4,
          ...icon4,
          className:
            "sdn-icon-1ihZT8Ll" +
            (icon4?.className ? " " + icon4.className : ""),
        }}
      />
      <Button
        {...{ ...sdn.button5, ...button5 }}
        className={
          "sdn-button-G8vyYXTc" +
          (button5?.className ? " " + button5.className : "")
        }
        icon={{
          ...sdn.icon5,
          ...icon5,
          className:
            "sdn-icon-1ihZT8Ll" +
            (icon5?.className ? " " + icon5.className : ""),
        }}
      />
    </Frame>
  )
}

const sdn: BarNavigationTabletProps = {
  button: {
    className: "sdn-button-G8vyYXTc",
  },
  icon: {
    icon: "seldon-component",
    className: "sdn-icon-1ihZT8Ll",
  },
  button2: {
    className: "sdn-button-G8vyYXTc",
  },
  icon2: {
    icon: "seldon-image",
    className: "sdn-icon-1ihZT8Ll",
  },
  button3: {
    className: "sdn-button-G8vyYXTc",
  },
  icon3: {
    icon: "material-accountCircle",
    className: "sdn-icon-1ihZT8Ll",
  },
  button4: {
    className: "sdn-button-G8vyYXTc",
  },
  icon4: {
    icon: "seldon-frameColumns",
    className: "sdn-icon-1ihZT8Ll",
  },
  button5: {
    className: "sdn-button-G8vyYXTc",
  },
  icon5: {
    icon: "seldon-input",
    className: "sdn-icon-1ihZT8Ll",
  },
}

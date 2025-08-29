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

export interface BarNavigationTabletProps extends HTMLAttributes<HTMLElement> {
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
 * <BarNavigationTablet
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
export function BarNavigationTablet({
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
}: BarNavigationTabletProps) {
  return (
    <Frame
      className={"sdn-barNavigation sdn-barNavigation-xPRwUQdN " + className}
      {...props}
    >
      <Button
        {...{ ...sdn.button, ...button }}
        className={
          "sdn-button-1Tl24Q4e" +
          (button?.className ? " " + button.className : "")
        }
        icon={{
          ...sdn.icon,
          ...icon,
          className:
            "sdn-icon-1OIuOePg" + (icon?.className ? " " + icon.className : ""),
        }}
        label={{
          ...sdn.label,
          ...label,
          className:
            "sdn-label-00aBAay1" +
            (label?.className ? " " + label.className : ""),
        }}
      />
      <Button
        {...{ ...sdn.button2, ...button2 }}
        className={
          "sdn-button-1Tl24Q4e" +
          (button2?.className ? " " + button2.className : "")
        }
        icon={{
          ...sdn.icon2,
          ...icon2,
          className:
            "sdn-icon-1OIuOePg" +
            (icon2?.className ? " " + icon2.className : ""),
        }}
        label={{
          ...sdn.label2,
          ...label2,
          className:
            "sdn-label-00aBAay1" +
            (label2?.className ? " " + label2.className : ""),
        }}
      />
      <Button
        {...{ ...sdn.button3, ...button3 }}
        className={
          "sdn-button-1Tl24Q4e" +
          (button3?.className ? " " + button3.className : "")
        }
        icon={{
          ...sdn.icon3,
          ...icon3,
          className:
            "sdn-icon-1OIuOePg" +
            (icon3?.className ? " " + icon3.className : ""),
        }}
        label={{
          ...sdn.label3,
          ...label3,
          className:
            "sdn-label-00aBAay1" +
            (label3?.className ? " " + label3.className : ""),
        }}
      />
      <Button
        {...{ ...sdn.button4, ...button4 }}
        className={
          "sdn-button-1Tl24Q4e" +
          (button4?.className ? " " + button4.className : "")
        }
        icon={{
          ...sdn.icon4,
          ...icon4,
          className:
            "sdn-icon-1OIuOePg" +
            (icon4?.className ? " " + icon4.className : ""),
        }}
        label={{
          ...sdn.label4,
          ...label4,
          className:
            "sdn-label-00aBAay1" +
            (label4?.className ? " " + label4.className : ""),
        }}
      />
      <Button
        {...{ ...sdn.button5, ...button5 }}
        className={
          "sdn-button-1Tl24Q4e" +
          (button5?.className ? " " + button5.className : "")
        }
        icon={{
          ...sdn.icon5,
          ...icon5,
          className:
            "sdn-icon-1OIuOePg" +
            (icon5?.className ? " " + icon5.className : ""),
        }}
        label={{
          ...sdn.label5,
          ...label5,
          className:
            "sdn-label-00aBAay1" +
            (label5?.className ? " " + label5.className : ""),
        }}
      />
    </Frame>
  )
}

const sdn: BarNavigationTabletProps = {
  button: {
    className: "sdn-button-1Tl24Q4e",
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
    className: "sdn-button-1Tl24Q4e",
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
    className: "sdn-button-1Tl24Q4e",
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
    className: "sdn-button-1Tl24Q4e",
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
    className: "sdn-button-1Tl24Q4e",
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

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
 * Level: Module
 *
 * Intent: Provides primary navigation controls for traversing sections or views.
 *
 * Tags: navigation, navbar, menu, UI, header, section, links, routing
 *
 * @example
 * ```tsx
 * <BarNavigation
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
export function BarNavigation({
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
}: BarNavigationProps) {
  return (
    <Frame className={"sdn-barNavigation " + className} {...props}>
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
        label={{
          ...sdn.label,
          ...label,
          className:
            "sdn-label-1WuqrUuH" +
            (label?.className ? " " + label.className : ""),
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
        label={{
          ...sdn.label2,
          ...label2,
          className:
            "sdn-label-1WuqrUuH" +
            (label2?.className ? " " + label2.className : ""),
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
        label={{
          ...sdn.label3,
          ...label3,
          className:
            "sdn-label-1WuqrUuH" +
            (label3?.className ? " " + label3.className : ""),
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
        label={{
          ...sdn.label4,
          ...label4,
          className:
            "sdn-label-1WuqrUuH" +
            (label4?.className ? " " + label4.className : ""),
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
        label={{
          ...sdn.label5,
          ...label5,
          className:
            "sdn-label-1WuqrUuH" +
            (label5?.className ? " " + label5.className : ""),
        }}
      />
    </Frame>
  )
}

const sdn: BarNavigationProps = {
  button: {
    className: "sdn-button-G8vyYXTc",
  },
  icon: {
    icon: "material-deviceMobile",
    className: "sdn-icon-1ihZT8Ll",
  },
  label: {
    children: "Mobile",
    htmlElement: "label",
    className: "sdn-label-1WuqrUuH",
  },
  button2: {
    className: "sdn-button-G8vyYXTc",
  },
  icon2: {
    icon: "material-deviceTablet",
    className: "sdn-icon-1ihZT8Ll",
  },
  label2: {
    children: "Tablet",
    htmlElement: "label",
    className: "sdn-label-1WuqrUuH",
  },
  button3: {
    className: "sdn-button-G8vyYXTc",
  },
  icon3: {
    icon: "material-laptopMac",
    className: "sdn-icon-1ihZT8Ll",
  },
  label3: {
    children: "Laptop",
    htmlElement: "label",
    className: "sdn-label-1WuqrUuH",
  },
  button4: {
    className: "sdn-button-G8vyYXTc",
  },
  icon4: {
    icon: "material-desktopMac",
    className: "sdn-icon-1ihZT8Ll",
  },
  label4: {
    children: "Desktop",
    htmlElement: "label",
    className: "sdn-label-1WuqrUuH",
  },
  button5: {
    className: "sdn-button-G8vyYXTc",
  },
  icon5: {
    icon: "seldon-component",
    className: "sdn-icon-1ihZT8Ll",
  },
  label5: {
    children: "General",
    htmlElement: "label",
    className: "sdn-label-1WuqrUuH",
  },
}

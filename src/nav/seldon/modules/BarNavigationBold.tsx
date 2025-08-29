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

export interface BarNavigationBoldProps extends HTMLAttributes<HTMLElement> {
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
 * <BarNavigationBold
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
export function BarNavigationBold({
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
}: BarNavigationBoldProps) {
  return (
    <Frame
      className={"sdn-barNavigation sdn-barNavigation-2Z_9JS " + className}
      {...props}
    >
      <Button
        {...{ ...sdn.button, ...button }}
        className={
          "sdn-button-bLMBHv" +
          (button?.className ? " " + button.className : "")
        }
        icon={{
          ...sdn.icon,
          ...icon,
          className:
            "sdn-icon-0U6Kee" + (icon?.className ? " " + icon.className : ""),
        }}
        label={{
          ...sdn.label,
          ...label,
          className:
            "sdn-label-QC92Cr" +
            (label?.className ? " " + label.className : ""),
        }}
      />
      <Button
        {...{ ...sdn.button2, ...button2 }}
        className={
          "sdn-button-96Rs2C" +
          (button2?.className ? " " + button2.className : "")
        }
        icon={{
          ...sdn.icon2,
          ...icon2,
          className:
            "sdn-icon-0Ykmk8" + (icon2?.className ? " " + icon2.className : ""),
        }}
        label={{
          ...sdn.label2,
          ...label2,
          className:
            "sdn-label-0MRZD5" +
            (label2?.className ? " " + label2.className : ""),
        }}
      />
      <Button
        {...{ ...sdn.button3, ...button3 }}
        className={
          "sdn-button-96Rs2C" +
          (button3?.className ? " " + button3.className : "")
        }
        icon={{
          ...sdn.icon3,
          ...icon3,
          className:
            "sdn-icon-0Ykmk8" + (icon3?.className ? " " + icon3.className : ""),
        }}
        label={{
          ...sdn.label3,
          ...label3,
          className:
            "sdn-label-7rd-wK" +
            (label3?.className ? " " + label3.className : ""),
        }}
      />
      <Button
        {...{ ...sdn.button4, ...button4 }}
        className={
          "sdn-button-96Rs2C" +
          (button4?.className ? " " + button4.className : "")
        }
        icon={{
          ...sdn.icon4,
          ...icon4,
          className:
            "sdn-icon-0Ykmk8" + (icon4?.className ? " " + icon4.className : ""),
        }}
        label={{
          ...sdn.label4,
          ...label4,
          className:
            "sdn-label-0MRZD5" +
            (label4?.className ? " " + label4.className : ""),
        }}
      />
      <Button
        {...{ ...sdn.button5, ...button5 }}
        className={
          "sdn-button-96Rs2C" +
          (button5?.className ? " " + button5.className : "")
        }
        icon={{
          ...sdn.icon5,
          ...icon5,
          className:
            "sdn-icon-0Ykmk8" + (icon5?.className ? " " + icon5.className : ""),
        }}
        label={{
          ...sdn.label5,
          ...label5,
          className:
            "sdn-label-0MRZD5" +
            (label5?.className ? " " + label5.className : ""),
        }}
      />
    </Frame>
  )
}

const sdn: BarNavigationBoldProps = {
  button: {
    className: "sdn-button-bLMBHv",
  },
  icon: {
    icon: "material-home",
    className: "sdn-icon-0U6Kee",
  },
  label: {
    children: "Home",
    htmlElement: "span",
    className: "sdn-label-QC92Cr",
  },
  button2: {
    className: "sdn-button-96Rs2C",
  },
  icon2: {
    icon: "material-search",
    className: "sdn-icon-0Ykmk8",
  },
  label2: {
    children: "Search",
    htmlElement: "span",
    className: "sdn-label-0MRZD5",
  },
  button3: {
    className: "sdn-button-96Rs2C",
  },
  icon3: {
    icon: "material-favorite",
    className: "sdn-icon-0Ykmk8",
  },
  label3: {
    children: "Favorites",
    htmlElement: "span",
    className: "sdn-label-7rd-wK",
  },
  button4: {
    className: "sdn-button-96Rs2C",
  },
  icon4: {
    icon: "material-shoppingCartCheckout",
    className: "sdn-icon-0Ykmk8",
  },
  label4: {
    children: "Cart",
    htmlElement: "span",
    className: "sdn-label-0MRZD5",
  },
  button5: {
    className: "sdn-button-96Rs2C",
  },
  icon5: {
    icon: "material-accountCircle",
    className: "sdn-icon-0Ykmk8",
  },
  label5: {
    children: "Account",
    htmlElement: "span",
    className: "sdn-label-0MRZD5",
  },
}

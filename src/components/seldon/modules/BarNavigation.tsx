/*
 * This code was generated using Seldon (https://seldon.app)
 *
 * Licensed under the Terms of Use: https://seldon.digital/terms-of-service
 * Do not redistribute or sublicense without permission.
 *
 * You may not use this software, or any derivative works of it,
 * in whole or in part, for the purposes of training, fine-tuning,
 * or otherwise improving (directly or indirectly) any machine learning
 * or artificial intelligence system.
 */
import { HTMLAttributes } from "react"
import { Button, ButtonProps } from "../elements/Button"
import { Frame } from "../frames/Frame"
import { IconProps } from "../primitives/Icon"
import { LabelProps } from "../primitives/Label"

export interface BarNavigationProps extends HTMLAttributes<HTMLElement> {
  className?: string

  buttonProps?: ButtonProps
  buttonIconProps?: IconProps
  buttonLabelProps?: LabelProps
  button1Props?: ButtonProps
  button1IconProps?: IconProps
  button1LabelProps?: LabelProps
  button2Props?: ButtonProps
  button2IconProps?: IconProps
  button2LabelProps?: LabelProps
  button3Props?: ButtonProps
  button3IconProps?: IconProps
  button3LabelProps?: LabelProps
  button4Props?: ButtonProps
  button4IconProps?: IconProps
  button4LabelProps?: LabelProps
}

export function BarNavigation({
  className = "",
  buttonProps,
  buttonIconProps,
  buttonLabelProps,
  button1Props,
  button1IconProps,
  button1LabelProps,
  button2Props,
  button2IconProps,
  button2LabelProps,
  button3Props,
  button3IconProps,
  button3LabelProps,
  button4Props,
  button4IconProps,
  button4LabelProps,
  ...props
}: BarNavigationProps) {
  return (
    <Frame className={"variant-barNavigation-default " + className} {...props}>
      <Button
        {...{ ...seldon.buttonProps, ...buttonProps }}
        className={
          "seldon-instance child-button-2Vt0je " +
          (buttonProps?.className ?? "")
        }
        iconProps={{ ...seldon.buttonIconProps, ...buttonIconProps }}
        labelProps={{ ...seldon.buttonLabelProps, ...buttonLabelProps }}
      />
      <Button
        {...{ ...seldon.button1Props, ...button1Props }}
        className={
          "seldon-instance child-button-WHVdp9 " +
          (button1Props?.className ?? "")
        }
        iconProps={{ ...seldon.button1IconProps, ...button1IconProps }}
        labelProps={{ ...seldon.button1LabelProps, ...button1LabelProps }}
      />
      <Button
        {...{ ...seldon.button2Props, ...button2Props }}
        className={
          "seldon-instance child-button-A4lBhv " +
          (button2Props?.className ?? "")
        }
        iconProps={{ ...seldon.button2IconProps, ...button2IconProps }}
        labelProps={{ ...seldon.button2LabelProps, ...button2LabelProps }}
      />
      <Button
        {...{ ...seldon.button3Props, ...button3Props }}
        className={
          "seldon-instance child-button-oMKpqz " +
          (button3Props?.className ?? "")
        }
        iconProps={{ ...seldon.button3IconProps, ...button3IconProps }}
        labelProps={{ ...seldon.button3LabelProps, ...button3LabelProps }}
      />
      <Button
        {...{ ...seldon.button4Props, ...button4Props }}
        className={
          "seldon-instance child-button-M1LAPQ " +
          (button4Props?.className ?? "")
        }
        iconProps={{ ...seldon.button4IconProps, ...button4IconProps }}
        labelProps={{ ...seldon.button4LabelProps, ...button4LabelProps }}
      />
    </Frame>
  )
}

const seldon: BarNavigationProps = {
  buttonProps: {},
  buttonIconProps: {
    icon: "material-home",
  },
  buttonLabelProps: {
    children: "Home",
    htmlElement: "span",
  },
  button1Props: {},
  button1IconProps: {
    icon: "material-search",
  },
  button1LabelProps: {
    children: "Search",
    htmlElement: "span",
  },
  button2Props: {},
  button2IconProps: {
    icon: "material-favorite",
  },
  button2LabelProps: {
    children: "Favorites",
    htmlElement: "span",
  },
  button3Props: {},
  button3IconProps: {
    icon: "material-shoppingCartCheckout",
  },
  button3LabelProps: {
    children: "Cart",
    htmlElement: "span",
  },
  button4Props: {},
  button4IconProps: {
    icon: "material-accountCircle",
  },
  button4LabelProps: {
    children: "Account",
    htmlElement: "span",
  },
}

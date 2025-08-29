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

export interface ButtonBarProps extends HTMLAttributes<HTMLElement> {
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
}

/**
 * Button Bar
 *
 * Level: Element
 *
 * Intent: Groups multiple buttons in a horizontal layout for related actions.
 *
 * Tags: button group, bar, actions, UI, layout, controls, inline, cluster
 *
 * @example
 * ```tsx
 * <ButtonBar
 *   button={() => {}}
 *   icon="material-star"
 *   label="Button Label"
 *   button1={() => {}}
 *   button2={() => {}}
 * />
 * ```
 */
export function ButtonBar({
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
  ...props
}: ButtonBarProps) {
  return (
    <Frame className={"sdn-buttonBar " + className} {...props}>
      <Button
        {...{ ...sdn.button, ...button }}
        className={
          "sdn-button-U1rpy2gN" +
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
            "sdn-label-1R07j0Td" +
            (label?.className ? " " + label.className : ""),
        }}
      />
      <Button
        {...{ ...sdn.button2, ...button2 }}
        className={
          "sdn-button-7k7U4i3x" +
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
            "sdn-label-1R07j0Td" +
            (label2?.className ? " " + label2.className : ""),
        }}
      />
      <Button
        {...{ ...sdn.button3, ...button3 }}
        className={
          "sdn-button-fugpTcqJ" +
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
            "sdn-label-1R07j0Td" +
            (label3?.className ? " " + label3.className : ""),
        }}
      />
    </Frame>
  )
}

const sdn: ButtonBarProps = {
  button: {
    className: "sdn-button-U1rpy2gN",
  },
  icon: {
    icon: "__default__",
    className: "sdn-icon-1OIuOePg",
  },
  label: {
    children: "Label",
    htmlElement: "label",
    className: "sdn-label-1R07j0Td",
  },
  button2: {
    className: "sdn-button-7k7U4i3x",
  },
  icon2: {
    icon: "__default__",
    className: "sdn-icon-1OIuOePg",
  },
  label2: {
    children: "Label",
    htmlElement: "label",
    className: "sdn-label-1R07j0Td",
  },
  button3: {
    className: "sdn-button-fugpTcqJ",
  },
  icon3: {
    icon: "__default__",
    className: "sdn-icon-1OIuOePg",
  },
  label3: {
    children: "Label",
    htmlElement: "label",
    className: "sdn-label-1R07j0Td",
  },
}

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
  button1?: ButtonProps
  icon?: IconProps
  label?: LabelProps
  button2?: ButtonProps
  icon?: IconProps
  label?: LabelProps
}

export function ButtonBar({
  className = "",
  button = sdn.button,
  icon,
  label,
  button1 = sdn.button1,
  button2 = sdn.button2,
  ...props
}: ButtonBarProps) {
  return (
    <Frame className={"sdn-buttonBar " + className} {...props}>
      <Button
        {...{ ...sdn.button, ...button }}
        className={
          "sdn-button-7k7U4i3x" +
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
            "sdn-label-BOyxJbm8" +
            (label?.className ? " " + label.className : ""),
        }}
      />
      <Button
        {...{ ...sdn.button1, ...button1 }}
        className={
          "sdn-button-7k7U4i3x" +
          (button1?.className ? " " + button1.className : "")
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
            "sdn-label-BOyxJbm8" +
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
          ...sdn.icon,
          ...icon,
          className:
            "sdn-icon-1ihZT8Ll" + (icon?.className ? " " + icon.className : ""),
        }}
        label={{
          ...sdn.label,
          ...label,
          className:
            "sdn-label-BOyxJbm8" +
            (label?.className ? " " + label.className : ""),
        }}
      />
    </Frame>
  )
}

const sdn: ButtonBarProps = {
  button: {
    className: "sdn-button-7k7U4i3x",
  },
  icon: {
    icon: "__default__",
    className: "sdn-icon-1ihZT8Ll",
  },
  label: {
    children: "Label",
    htmlElement: "label",
    className: "sdn-label-BOyxJbm8",
  },
  button1: {
    className: "sdn-button-7k7U4i3x",
  },
  button2: {
    className: "sdn-button-7k7U4i3x",
  },
}

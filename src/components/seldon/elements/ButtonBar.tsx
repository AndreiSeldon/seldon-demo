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

  button2?: ButtonProps

  button3?: ButtonProps

  icon?: IconProps

  icon2?: IconProps

  icon3?: IconProps

  label?: LabelProps

  label2?: LabelProps

  label3?: LabelProps
}

export function ButtonBar({
  className = "",
  button,
  button2,
  button3,
  icon,
  icon2,
  icon3,
  label,
  label2,
  label3,
  ...props
}: ButtonBarProps) {
  return (
    <Frame className={"sdn-buttonBar " + className} {...props}>
      <Button
        {...{ ...sdn.button, ...button }}
        className={
          "sdn-button-U1rpy2gN sdn-button" +
          (button?.className ? " " + button.className : "")
        }
        icon={{ ...sdn.icon, ...icon }}
        label={{ ...sdn.label, ...label }}
      />
      <Button
        {...{ ...sdn.button2, ...button2 }}
        className={
          "sdn-button-U1rpy2gN sdn-button" +
          (button2?.className ? " " + button2.className : "")
        }
        icon={{ ...sdn.icon2, ...icon2 }}
        label={{ ...sdn.label2, ...label2 }}
      />
      <Button
        {...{ ...sdn.button3, ...button3 }}
        className={
          "sdn-button-U1rpy2gN sdn-button" +
          (button3?.className ? " " + button3.className : "")
        }
        icon={{ ...sdn.icon3, ...icon3 }}
        label={{ ...sdn.label3, ...label3 }}
      />
    </Frame>
  )
}

const sdn: ButtonBarProps = {
  button: {},
  icon: {
    icon: "__default__",
  },
  label: {
    children: "Label",
    htmlElement: "label",
  },
  button2: {},
  icon2: {
    icon: "__default__",
  },
  label2: {
    children: "Label",
    htmlElement: "label",
  },
  button3: {},
  icon3: {
    icon: "__default__",
  },
  label3: {
    children: "Label",
    htmlElement: "label",
  },
}

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
import { IconProps } from "../primitives/Icon"
import { LabelProps } from "../primitives/Label"

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
  button4?: ButtonProps
  icon4?: IconProps
  label4?: LabelProps
}

export function ButtonBar({
  className = "",
  button,
  icon,
  label,
  button2,
  icon2,
  label2,
  button3,
  icon3,
  label3,
  button4,
  icon4,
  label4,
  ...props
}: ButtonBarProps) {
  return (
    <Frame className={"sdn-buttonBar " + className} {...props}>
      <Button
        {...{ ...sdn.button, ...button }}
        className={
          "sdn-button-LLbOfXdB sdn-button " + (button?.className ?? "")
        }
        icon={{ ...sdn.icon, ...icon }}
        label={{ ...sdn.label, ...label }}
      />
      <Button
        {...{ ...sdn.button2, ...button2 }}
        className={
          "sdn-button-LLbOfXdB sdn-button " + (button2?.className ?? "")
        }
        icon2={{ ...sdn.icon2, ...icon2 }}
        label2={{ ...sdn.label2, ...label2 }}
      />
      <Button
        {...{ ...sdn.button3, ...button3 }}
        className={
          "sdn-button-LLbOfXdB sdn-button " + (button3?.className ?? "")
        }
        icon3={{ ...sdn.icon3, ...icon3 }}
        label3={{ ...sdn.label3, ...label3 }}
      />
      <Button
        {...{ ...sdn.button4, ...button4 }}
        className={
          "sdn-button-LLbOfXdB sdn-button " + (button4?.className ?? "")
        }
        icon4={{ ...sdn.icon4, ...icon4 }}
        label4={{ ...sdn.label4, ...label4 }}
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
  button4: {},
  icon4: {
    icon: "__default__",
  },
  label4: {
    children: "Label",
    htmlElement: "label",
  },
}

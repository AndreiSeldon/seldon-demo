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

export interface ButtonBarProps extends HTMLAttributes<HTMLElement> {
  className?: string

  button?: ButtonProps
  icon?: IconProps
  label?: LabelProps
  button1?: ButtonProps
  icon2?: IconProps
  label2?: LabelProps
  button2?: ButtonProps
  icon3?: IconProps
  label3?: LabelProps
}

export function ButtonBar({
  className = "",
  button,
  icon,
  label,
  button1,
  icon2,
  label2,
  button2,
  icon3,
  label3,
  ...props
}: ButtonBarProps) {
  return (
    <Frame className={"sdn-buttonBar " + className} {...props}>
      <Button
        {...{ ...seldon.button, ...button }}
        className={
          "sdn-button-4H5eOOLe sdn-button " + (button?.className ?? "")
        }
        iconProps={{ ...seldon.icon, ...icon }}
        labelProps={{ ...seldon.label, ...label }}
      />
      <Button
        {...{ ...seldon.button1, ...button1 }}
        className={
          "sdn-button-4H5eOOLe sdn-button " + (button1?.className ?? "")
        }
        iconProps={{ ...seldon.icon2, ...icon2 }}
        labelProps={{ ...seldon.label2, ...label2 }}
      />
      <Button
        {...{ ...seldon.button2, ...button2 }}
        className={
          "sdn-button-4H5eOOLe sdn-button " + (button2?.className ?? "")
        }
        iconProps={{ ...seldon.icon3, ...icon3 }}
        labelProps={{ ...seldon.label3, ...label3 }}
      />
    </Frame>
  )
}

const seldon: ButtonBarProps = {
  button: {},
  icon: {
    icon: "__default__",
  },
  label: {
    children: "Label",
    htmlElement: "label",
  },
  button1: {},
  button2: {},
}

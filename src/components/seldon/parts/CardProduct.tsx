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
import { ButtonBar, ButtonBarProps } from "../elements/ButtonBar"
import {
  TextblockDetails,
  TextblockDetailsProps,
} from "../elements/TextblockDetails"
import { Frame } from "../frames/Frame"
import { DescriptionProps } from "../primitives/Description"
import { IconProps } from "../primitives/Icon"
import { LabelProps } from "../primitives/Label"
import { TaglineProps } from "../primitives/Tagline"
import { TitleProps } from "../primitives/Title"

export interface CardProductProps extends HTMLAttributes<HTMLElement> {
  className?: string

  button?: ButtonProps
  icon?: IconProps
  label?: LabelProps
  textblockDetails?: TextblockDetailsProps
  tagline?: TaglineProps
  titleProps?: TitleProps
  description?: DescriptionProps
  button2?: ButtonProps
  icon2?: IconProps
  label2?: LabelProps
  button1?: ButtonProps
  icon3?: IconProps
  label3?: LabelProps
  buttonBar?: ButtonBarProps
  button3?: ButtonProps
  icon4?: IconProps
  label4?: LabelProps
  button12?: ButtonProps
  icon5?: IconProps
  label5?: LabelProps
  button22?: ButtonProps
  icon6?: IconProps
  label6?: LabelProps
  button32?: ButtonProps
  icon7?: IconProps
  label7?: LabelProps
}

export function CardProduct({
  className = "",
  button,
  icon,
  label,
  textblockDetails,
  tagline,
  titleProps,
  description,
  button2,
  icon2,
  label2,
  button1,
  icon3,
  label3,
  buttonBar,
  button3,
  icon4,
  label4,
  button12,
  icon5,
  label5,
  button22,
  icon6,
  label6,
  button32,
  icon7,
  label7,
  ...props
}: CardProductProps) {
  return (
    <Frame className={"sdn-cardProduct " + className} {...props}>
      <Button
        {...{ ...seldon.button, ...button }}
        className={
          "sdn-button-4H5eOOLe sdn-button-4H5eOOLe sdn-button " +
          (button?.className ?? "")
        }
        iconProps={{ ...seldon.icon, ...icon }}
        labelProps={{ ...seldon.label, ...label }}
      />
      <TextblockDetails
        {...{ ...seldon.textblockDetails, ...textblockDetails }}
        className={
          "sdn-textblockDetails-pWavDCZm sdn-textblockDetails " +
          (textblockDetails?.className ?? "")
        }
        taglineProps={{ ...seldon.tagline, ...tagline }}
        titleProps={{ ...seldon.titleProps, ...titleProps }}
        descriptionProps={{ ...seldon.description, ...description }}
        buttonProps={{ ...seldon.button2, ...button2 }}
        button1Props={{ ...seldon.button1, ...button1 }}
      />
      <ButtonBar
        {...{ ...seldon.buttonBar, ...buttonBar }}
        className={
          "sdn-buttonBar-9sNmcUKH sdn-buttonBar " + (buttonBar?.className ?? "")
        }
        buttonProps={{ ...seldon.button3, ...button3 }}
        button1Props={{ ...seldon.button12, ...button12 }}
        button2Props={{ ...seldon.button22, ...button22 }}
        button3Props={{ ...seldon.button32, ...button32 }}
      />
    </Frame>
  )
}

const seldon: CardProductProps = {
  button: {},
  icon: {
    icon: "__default__",
  },
  label: {
    children: "Label",
    htmlElement: "label",
  },
  textblockDetails: {},
  tagline: {
    children: "Tagline",
    htmlElement: "p",
  },
  titleProps: {
    children: "Product Card Title",
    htmlElement: "h4",
  },
  description: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus.",
    htmlElement: "p",
  },
  button1: {},
  buttonBar: {},
  button2: {},
  button3: {},
}

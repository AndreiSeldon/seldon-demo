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
import { ButtonBar, ButtonBarProps } from "../elements/ButtonBar"
import {
  TextblockDetails,
  TextblockDetailsProps,
} from "../elements/TextblockDetails"
import { Frame } from "../frames/Frame"
import { Description, DescriptionProps } from "../primitives/Description"
import { Icon, IconProps } from "../primitives/Icon"
import { Label, LabelProps } from "../primitives/Label"
import { Tagline, TaglineProps } from "../primitives/Tagline"
import { Title, TitleProps } from "../primitives/Title"

export interface CardProductProps extends HTMLAttributes<HTMLElement> {
  className?: string

  textblockDetails?: TextblockDetailsProps
  tagline?: TaglineProps
  titleProps?: TitleProps
  description?: DescriptionProps
  buttonBar?: ButtonBarProps
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

export function CardProduct({
  className = "",
  textblockDetails = sdn.textblockDetails,
  tagline = sdn.tagline,
  titleProps = sdn.titleProps,
  description = sdn.description,
  buttonBar = sdn.buttonBar,
  button = sdn.button,
  icon = sdn.icon,
  label = sdn.label,
  button2 = sdn.button2,
  icon2 = sdn.icon2,
  label2 = sdn.label2,
  button3 = sdn.button3,
  icon3 = sdn.icon3,
  label3 = sdn.label3,
  ...props
}: CardProductProps) {
  return (
    <Frame className={"sdn-cardProduct " + className} {...props}>
      <TextblockDetails
        {...{ ...sdn.textblockDetails, ...textblockDetails }}
        className={
          "sdn-textblockDetails-Njjvy0sD sdn-textblockDetails" +
          (textblockDetails?.className ? " " + textblockDetails.className : "")
        }
        tagline={{ ...sdn.tagline, ...tagline }}
        titleProps={{ ...sdn.titleProps, ...titleProps }}
        description={{ ...sdn.description, ...description }}
      />
      <ButtonBar
        {...{ ...sdn.buttonBar, ...buttonBar }}
        className={
          "sdn-buttonBar-o7wdbl2Z sdn-buttonBar" +
          (buttonBar?.className ? " " + buttonBar.className : "")
        }
        button={{ ...sdn.button, ...button }}
        button2={{ ...sdn.button2, ...button2 }}
        button3={{ ...sdn.button3, ...button3 }}
      />
    </Frame>
  )
}

const sdn: CardProductProps = {
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
  buttonBar: {},
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

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
import { Description, DescriptionProps } from "../primitives/Description"
import { IconProps } from "../primitives/Icon"
import { LabelProps } from "../primitives/Label"
import { Tagline, TaglineProps } from "../primitives/Tagline"
import { Title, TitleProps } from "../primitives/Title"

export interface TextblockDetailsProps extends HTMLAttributes<HTMLElement> {
  className?: string

  tagline?: TaglineProps
  titleProps?: TitleProps
  button?: ButtonProps
  icon?: IconProps
  label?: LabelProps
  button2?: ButtonProps
  icon2?: IconProps
  label2?: LabelProps
  description?: DescriptionProps
}

export function TextblockDetails({
  className = "",
  tagline,
  titleProps,
  button,
  icon,
  label,
  button2,
  icon2,
  label2,
  description,
  ...props
}: TextblockDetailsProps) {
  return (
    <Frame className={"sdn-textblockDetails " + className} {...props}>
      <Tagline
        {...{ ...sdn.tagline, ...tagline }}
        className={" sdn-tagline " + (tagline?.className ?? "")}
      />
      <Title
        {...{ ...sdn.titleProps, ...titleProps }}
        className={
          "sdn-title-lnsr54q1 sdn-title " + (titleProps?.className ?? "")
        }
      />
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
        icon={{ ...sdn.icon2, ...icon2 }}
        label={{ ...sdn.label2, ...label2 }}
      />
      <Description
        {...{ ...sdn.description, ...description }}
        className={" sdn-description " + (description?.className ?? "")}
      />
    </Frame>
  )
}

const sdn: TextblockDetailsProps = {
  tagline: {
    children: "Tagline",
    htmlElement: "p",
  },
  titleProps: {
    children: "Product Card Title",
    htmlElement: "h4",
  },
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
  description: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus.",
    htmlElement: "p",
  },
}

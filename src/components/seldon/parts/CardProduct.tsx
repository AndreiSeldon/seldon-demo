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
  button1?: ButtonProps
  icon?: IconProps
  label?: LabelProps
  button2?: ButtonProps
  icon?: IconProps
  label?: LabelProps
}

export function CardProduct({
  className = "",
  textblockDetails = sdn.textblockDetails,
  tagline,
  titleProps,
  description,
  buttonBar = sdn.buttonBar,
  button,
  icon,
  label,
  button1,
  button2,
  ...props
}: CardProductProps) {
  return (
    <Frame className={"sdn-cardProduct " + className} {...props}>
      <TextblockDetails
        {...{ ...sdn.textblockDetails, ...textblockDetails }}
        className={
          "sdn-textblockDetails-Njjvy0sD" +
          (textblockDetails?.className ? " " + textblockDetails.className : "")
        }
        tagline={{
          ...sdn.tagline,
          ...tagline,
          className:
            "sdn-tagline-RYPEIO98" +
            (tagline?.className ? " " + tagline.className : ""),
        }}
        titleProps={{
          ...sdn.titleProps,
          ...titleProps,
          className:
            "sdn-title-83oQ44Bx" +
            (titleProps?.className ? " " + titleProps.className : ""),
        }}
        description={{
          ...sdn.description,
          ...description,
          className:
            "sdn-description-QJZ11zsK" +
            (description?.className ? " " + description.className : ""),
        }}
      />
      <ButtonBar
        {...{ ...sdn.buttonBar, ...buttonBar }}
        className={
          "sdn-buttonBar-MMcNZdBT" +
          (buttonBar?.className ? " " + buttonBar.className : "")
        }
        button={{
          ...sdn.button,
          ...button,
          className:
            "sdn-button-4o13hVru" +
            (button?.className ? " " + button.className : ""),
        }}
        button2={{
          ...sdn.button1,
          ...button1,
          className:
            "sdn-button-3D4pvOBS" +
            (button1?.className ? " " + button1.className : ""),
        }}
        button3={{
          ...sdn.button2,
          ...button2,
          className:
            "sdn-button-3D4pvOBS" +
            (button2?.className ? " " + button2.className : ""),
        }}
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
            "sdn-label-1R07j0Td" +
            (label?.className ? " " + label.className : ""),
        }}
        icon2={{
          ...sdn.icon,
          ...icon,
          className:
            "sdn-icon-1ihZT8Ll" + (icon?.className ? " " + icon.className : ""),
        }}
        label2={{
          ...sdn.label,
          ...label,
          className:
            "sdn-label-1R07j0Td" +
            (label?.className ? " " + label.className : ""),
        }}
        icon3={{
          ...sdn.icon,
          ...icon,
          className:
            "sdn-icon-1ihZT8Ll" + (icon?.className ? " " + icon.className : ""),
        }}
        label3={{
          ...sdn.label,
          ...label,
          className:
            "sdn-label-1R07j0Td" +
            (label?.className ? " " + label.className : ""),
        }}
      />
    </Frame>
  )
}

const sdn: CardProductProps = {
  textblockDetails: {
    className: "sdn-textblockDetails-Njjvy0sD",
  },
  tagline: {
    children: "Tagline",
    htmlElement: "p",
    className: "sdn-tagline-RYPEIO98",
  },
  titleProps: {
    children: "Product Card",
    htmlElement: "h4",
    className: "sdn-title-83oQ44Bx",
  },
  description: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus.",
    htmlElement: "p",
    className: "sdn-description-QJZ11zsK",
  },
  buttonBar: {
    className: "sdn-buttonBar-MMcNZdBT",
  },
  button: {
    className: "sdn-button-4o13hVru",
  },
  icon: {
    icon: "__default__",
    className: "sdn-icon-1ihZT8Ll",
  },
  label: {
    children: "Default 3",
    htmlElement: "label",
    className: "sdn-label-1R07j0Td",
  },
  button1: {
    className: "sdn-button-3D4pvOBS",
  },
  button2: {
    className: "sdn-button-3D4pvOBS",
  },
}

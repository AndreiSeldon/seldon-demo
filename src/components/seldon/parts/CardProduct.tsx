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

/**
 * Product Card
 *
 * Level: Part
 *
 * Intent: Product card schema optimized for ecommerce use cases, supporting pricing, images, descriptions, and action triggers.
 *
 * Tags: card, product, ecommerce, ui, pricing, image, cta, catalog
 *
 * @example
 * ```tsx
 * <CardProduct
 *   textblockDetails="{}"
 *   tagline="Featured Product"
 *   title="Product Title"
 *   description="Product description text"
 *   buttonBar="{}"
 *   button={() => {}}
 *   icon="material-star"
 *   label="Button Label"
 *   button1={() => {}}
 *   button2={() => {}}
 * />
 * ```
 */
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
  button2,
  icon2,
  label2,
  button3,
  icon3,
  label3,
  ...props
}: CardProductProps) {
  return (
    <Frame
      className={
        "sdn-cardProduct " +
        (className && !className.includes("sdn-cardProduct") ? className : "")
      }
      {...props}
    >
      <TextblockDetails
        {...{ ...sdn.textblockDetails, ...textblockDetails }}
        className={
          "sdn-textblockDetails-Njjvy0sD" +
          (textblockDetails?.className &&
          !textblockDetails.className.includes("sdn-textblockDetails-Njjvy0sD")
            ? " " + textblockDetails.className
            : "")
        }
        tagline={{
          ...sdn.tagline,
          ...tagline,
          className:
            "sdn-tagline-57ug71iC" +
            (tagline?.className &&
            !tagline.className.includes("sdn-tagline-57ug71iC")
              ? " " + tagline.className
              : ""),
        }}
        titleProps={{
          ...sdn.titleProps,
          ...titleProps,
          className:
            "sdn-title-83oQ44Bx" +
            (titleProps?.className &&
            !titleProps.className.includes("sdn-title-83oQ44Bx")
              ? " " + titleProps.className
              : ""),
        }}
        description={{
          ...sdn.description,
          ...description,
          className:
            "sdn-description-8Y5lFu0w" +
            (description?.className &&
            !description.className.includes("sdn-description-8Y5lFu0w")
              ? " " + description.className
              : ""),
        }}
      />
      <ButtonBar
        {...{ ...sdn.buttonBar, ...buttonBar }}
        className={
          "sdn-buttonBar-MMcNZdBT" +
          (buttonBar?.className &&
          !buttonBar.className.includes("sdn-buttonBar-MMcNZdBT")
            ? " " + buttonBar.className
            : "")
        }
        button={{
          ...sdn.button,
          ...button,
          className:
            "sdn-button-EOkV8PVa" +
            (button?.className &&
            !button.className.includes("sdn-button-EOkV8PVa")
              ? " " + button.className
              : ""),
        }}
        icon={{
          ...sdn.icon,
          ...icon,
          className:
            "sdn-icon-1ihZT8Ll" +
            (icon?.className && !icon.className.includes("sdn-icon-1ihZT8Ll")
              ? " " + icon.className
              : ""),
        }}
        label={{
          ...sdn.label,
          ...label,
          className:
            "sdn-label-1R07j0Td" +
            (label?.className && !label.className.includes("sdn-label-1R07j0Td")
              ? " " + label.className
              : ""),
        }}
        button2={{
          ...sdn.button2,
          ...button2,
          className:
            "sdn-button-3D4pvOBS" +
            (button2?.className &&
            !button2.className.includes("sdn-button-3D4pvOBS")
              ? " " + button2.className
              : ""),
        }}
        icon2={{
          ...sdn.icon2,
          ...icon2,
          className:
            "sdn-icon-1ihZT8Ll" +
            (icon2?.className && !icon2.className.includes("sdn-icon-1ihZT8Ll")
              ? " " + icon2.className
              : ""),
        }}
        label2={{
          ...sdn.label2,
          ...label2,
          className:
            "sdn-label-1R07j0Td" +
            (label2?.className &&
            !label2.className.includes("sdn-label-1R07j0Td")
              ? " " + label2.className
              : ""),
        }}
        button3={{
          ...sdn.button3,
          ...button3,
          className:
            "sdn-button-3D4pvOBS" +
            (button3?.className &&
            !button3.className.includes("sdn-button-3D4pvOBS")
              ? " " + button3.className
              : ""),
        }}
        icon3={{
          ...sdn.icon3,
          ...icon3,
          className:
            "sdn-icon-1ihZT8Ll" +
            (icon3?.className && !icon3.className.includes("sdn-icon-1ihZT8Ll")
              ? " " + icon3.className
              : ""),
        }}
        label3={{
          ...sdn.label3,
          ...label3,
          className:
            "sdn-label-1R07j0Td" +
            (label3?.className &&
            !label3.className.includes("sdn-label-1R07j0Td")
              ? " " + label3.className
              : ""),
        }}
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
    children: "Product Card",
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
    children: "Default 1",
    htmlElement: "label",
  },
  button2: {},
  icon2: {
    icon: "__default__",
  },
  label2: {
    children: "Default 2",
    htmlElement: "label",
  },
  button3: {},
  icon3: {
    icon: "__default__",
  },
  label3: {
    children: "Default 3",
    htmlElement: "label",
  },
}

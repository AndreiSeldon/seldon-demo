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
import { ButtonProps } from "../elements/Button"
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

  textblockDetailsProps?: TextblockDetailsProps
  textblockDetailsTaglineProps?: TaglineProps
  textblockDetailsTitleProps?: TitleProps
  textblockDetailsDescriptionProps?: DescriptionProps
  buttonBarProps?: ButtonBarProps
  buttonBarButtonProps?: ButtonProps
  buttonBarButtonIconProps?: IconProps
  buttonBarButtonLabelProps?: LabelProps
  buttonBarButton1Props?: ButtonProps
  buttonBarButton1IconProps?: IconProps
  buttonBarButton1LabelProps?: LabelProps
  buttonBarButton2Props?: ButtonProps
  buttonBarButton2IconProps?: IconProps
  buttonBarButton2LabelProps?: LabelProps
}

export function CardProduct({
  className = "",
  textblockDetailsProps,
  textblockDetailsTaglineProps,
  textblockDetailsTitleProps,
  textblockDetailsDescriptionProps,
  buttonBarProps,
  buttonBarButtonProps,
  buttonBarButtonIconProps,
  buttonBarButtonLabelProps,
  buttonBarButton1Props,
  buttonBarButton1IconProps,
  buttonBarButton1LabelProps,
  buttonBarButton2Props,
  buttonBarButton2IconProps,
  buttonBarButton2LabelProps,
  ...props
}: CardProductProps) {
  return (
    <Frame className={"sdn-cardProduct " + className} {...props}>
      <TextblockDetails
        {...{ ...seldon.textblockDetailsProps, ...textblockDetailsProps }}
        className={
          "sdn-textblockDetails-RdpAL30g sdn-textblockDetails " +
          (textblockDetailsProps?.className ?? "")
        }
        taglineProps={{
          ...seldon.textblockDetailsTaglineProps,
          ...textblockDetailsTaglineProps,
        }}
        titleProps={{
          ...seldon.textblockDetailsTitleProps,
          ...textblockDetailsTitleProps,
        }}
        descriptionProps={{
          ...seldon.textblockDetailsDescriptionProps,
          ...textblockDetailsDescriptionProps,
        }}
      />
      <ButtonBar
        {...{ ...seldon.buttonBarProps, ...buttonBarProps }}
        className={
          "sdn-buttonBar-VrtkEXPr sdn-buttonBar " +
          (buttonBarProps?.className ?? "")
        }
        buttonProps={{
          ...seldon.buttonBarButtonProps,
          ...buttonBarButtonProps,
        }}
        button1Props={{
          ...seldon.buttonBarButton1Props,
          ...buttonBarButton1Props,
        }}
        button2Props={{
          ...seldon.buttonBarButton2Props,
          ...buttonBarButton2Props,
        }}
      />
    </Frame>
  )
}

const seldon: CardProductProps = {
  textblockDetailsProps: {},
  textblockDetailsTaglineProps: {
    children: "Tagline",
    htmlElement: "p",
  },
  textblockDetailsTitleProps: {
    children: "Product Card Title",
    htmlElement: "h4",
  },
  textblockDetailsDescriptionProps: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus.",
    htmlElement: "p",
  },
  buttonBarProps: {},
  buttonBarButtonProps: {},
  buttonBarButtonIconProps: {
    icon: "__default__",
  },
  buttonBarButtonLabelProps: {
    children: "Label",
    htmlElement: "label",
  },
  buttonBarButton1Props: {},
  buttonBarButton1IconProps: {
    icon: "__default__",
  },
  buttonBarButton1LabelProps: {
    children: "Label",
    htmlElement: "label",
  },
  buttonBarButton2Props: {},
  buttonBarButton2IconProps: {
    icon: "__default__",
  },
  buttonBarButton2LabelProps: {
    children: "Label",
    htmlElement: "label",
  },
}

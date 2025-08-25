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

  buttonProps?: ButtonProps
  buttonIconProps?: IconProps
  buttonLabelProps?: LabelProps
  textblockDetailsProps?: TextblockDetailsProps
  textblockDetailsTaglineProps?: TaglineProps
  textblockDetailsTitleProps?: TitleProps
  textblockDetailsButtonProps?: ButtonProps
  textblockDetailsButtonIconProps?: IconProps
  textblockDetailsButtonLabelProps?: LabelProps
  textblockDetailsButton1Props?: ButtonProps
  textblockDetailsButton1IconProps?: IconProps
  textblockDetailsButton1LabelProps?: LabelProps
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
  buttonBarButton3Props?: ButtonProps
  buttonBarButton3IconProps?: IconProps
  buttonBarButton3LabelProps?: LabelProps
}

export function CardProduct({
  className = "",
  buttonProps,
  buttonIconProps,
  buttonLabelProps,
  textblockDetailsProps,
  textblockDetailsTaglineProps,
  textblockDetailsTitleProps,
  textblockDetailsButtonProps,
  textblockDetailsButtonIconProps,
  textblockDetailsButtonLabelProps,
  textblockDetailsButton1Props,
  textblockDetailsButton1IconProps,
  textblockDetailsButton1LabelProps,
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
  buttonBarButton3Props,
  buttonBarButton3IconProps,
  buttonBarButton3LabelProps,
  ...props
}: CardProductProps) {
  return (
    <Frame className={"sdn-cardProduct " + className} {...props}>
      <Button
        {...{ ...seldon.buttonProps, ...buttonProps }}
        className={
          "sdn-button-3oKi2hxY sdn-button-3oKi2hxY sdn-button " +
          (buttonProps?.className ?? "")
        }
        iconProps={{ ...seldon.buttonIconProps, ...buttonIconProps }}
        labelProps={{ ...seldon.buttonLabelProps, ...buttonLabelProps }}
      />
      <TextblockDetails
        {...{ ...seldon.textblockDetailsProps, ...textblockDetailsProps }}
        className={
          "sdn-textblockDetails-HhvvHray sdn-textblockDetails " +
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
        buttonProps={{
          ...seldon.textblockDetailsButtonProps,
          ...textblockDetailsButtonProps,
        }}
        button1Props={{
          ...seldon.textblockDetailsButton1Props,
          ...textblockDetailsButton1Props,
        }}
        descriptionProps={{
          ...seldon.textblockDetailsDescriptionProps,
          ...textblockDetailsDescriptionProps,
        }}
      />
      <ButtonBar
        {...{ ...seldon.buttonBarProps, ...buttonBarProps }}
        className={
          "sdn-buttonBar-FmWZir54 sdn-buttonBar " +
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
        button3Props={{
          ...seldon.buttonBarButton3Props,
          ...buttonBarButton3Props,
        }}
      />
    </Frame>
  )
}

const seldon: CardProductProps = {
  buttonProps: {},
  buttonIconProps: {
    icon: "__default__",
  },
  buttonLabelProps: {
    children: "Label",
    htmlElement: "label",
  },
  textblockDetailsProps: {},
  textblockDetailsTaglineProps: {
    children: "Tagline",
    htmlElement: "p",
  },
  textblockDetailsTitleProps: {
    children: "Product Card Title",
    htmlElement: "h4",
  },
  textblockDetailsButtonProps: {},
  textblockDetailsButtonIconProps: {
    icon: "__default__",
  },
  textblockDetailsButtonLabelProps: {
    children: "Label",
    htmlElement: "label",
  },
  textblockDetailsButton1Props: {},
  textblockDetailsButton1IconProps: {
    icon: "__default__",
  },
  textblockDetailsButton1LabelProps: {
    children: "Label",
    htmlElement: "label",
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
  buttonBarButton3Props: {},
  buttonBarButton3IconProps: {
    icon: "__default__",
  },
  buttonBarButton3LabelProps: {
    children: "Label",
    htmlElement: "label",
  },
}

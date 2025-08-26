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
import { TextblockDetailsProps } from "../elements/TextblockDetails"
import { Frame } from "../frames/Frame"
import { Description, DescriptionProps } from "../primitives/Description"
import { Icon, IconProps } from "../primitives/Icon"
import { Label, LabelProps } from "../primitives/Label"
import { Tagline, TaglineProps } from "../primitives/Tagline"
import { Title, TitleProps } from "../primitives/Title"

export interface CardProductMixedProps extends HTMLAttributes<HTMLElement> {
  className?: string

  textblockDetails?: TextblockDetailsProps
  tagline?: TaglineProps
  button?: ButtonProps
  icon?: IconProps
  label?: LabelProps
  titleProps?: TitleProps
  tagline1?: TaglineProps
  description?: DescriptionProps
  buttonBar?: ButtonBarProps
  button2?: ButtonProps
  icon2?: IconProps
  label2?: LabelProps
  button1?: ButtonProps
  icon3?: IconProps
  label3?: LabelProps
  button2?: ButtonProps
  icon4?: IconProps
  label4?: LabelProps
}

export function CardProductMixed({
  className = "",
  textblockDetails = sdn.textblockDetails,
  tagline,
  button,
  icon,
  label,
  titleProps,
  tagline1,
  description,
  buttonBar = sdn.buttonBar,
  button2,
  icon2,
  label2,
  button1,
  icon3,
  label3,
  icon4,
  label4,
  ...props
}: CardProductMixedProps) {
  return (
    <Frame
      className={"sdn-cardProduct sdn-cardProduct-0IbtAwmQ " + className}
      {...props}
    >
      <Frame
        className={
          "sdn-textblockDetails-XKYdln17" +
          (textblockDetails?.className ? " " + textblockDetails.className : "")
        }
      >
        <Tagline
          {...{ ...sdn.tagline, ...tagline }}
          className={
            "sdn-tagline-RYPEIO98" +
            (tagline?.className ? " " + tagline.className : "")
          }
        />
        {button && (
          <Button
            {...{ ...sdn.button, ...button }}
            className={
              "sdn-button-3D4pvOBS" +
              (button?.className ? " " + button.className : "")
            }
            icon={{
              ...sdn.icon,
              ...icon,
              className:
                "sdn-icon-1ihZT8Ll" +
                (icon?.className ? " " + icon.className : ""),
            }}
            label={{
              ...sdn.label,
              ...label,
              className:
                "sdn-label-1R07j0Td" +
                (label?.className ? " " + label.className : ""),
            }}
          />
        )}
        <Title
          {...{ ...sdn.titleProps, ...titleProps }}
          className={
            "sdn-title-83oQ44Bx" +
            (titleProps?.className ? " " + titleProps.className : "")
          }
        />
        {tagline1 && (
          <Tagline
            {...{ ...sdn.tagline1, ...tagline1 }}
            className={
              "sdn-tagline-RYPEIO98" +
              (tagline1?.className ? " " + tagline1.className : "")
            }
          />
        )}
        <Description
          {...{ ...sdn.description, ...description }}
          className={
            "sdn-description-QJZ11zsK" +
            (description?.className ? " " + description.className : "")
          }
        />
      </Frame>
      <ButtonBar
        {...{ ...sdn.buttonBar, ...buttonBar }}
        className={
          "sdn-buttonBar-MMcNZdBT" +
          (buttonBar?.className ? " " + buttonBar.className : "")
        }
        button={{
          ...sdn.button2,
          ...button2,
          className:
            "sdn-button-JnRIw2cY" +
            (button2?.className ? " " + button2.className : ""),
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
          ...sdn.icon2,
          ...icon2,
          className:
            "sdn-icon-1ihZT8Ll" +
            (icon2?.className ? " " + icon2.className : ""),
        }}
        label={{
          ...sdn.label2,
          ...label2,
          className:
            "sdn-label-1R07j0Td" +
            (label2?.className ? " " + label2.className : ""),
        }}
        icon2={{
          ...sdn.icon3,
          ...icon3,
          className:
            "sdn-icon-1ihZT8Ll" +
            (icon3?.className ? " " + icon3.className : ""),
        }}
        label2={{
          ...sdn.label3,
          ...label3,
          className:
            "sdn-label-1R07j0Td" +
            (label3?.className ? " " + label3.className : ""),
        }}
        icon3={{
          ...sdn.icon4,
          ...icon4,
          className:
            "sdn-icon-1ihZT8Ll" +
            (icon4?.className ? " " + icon4.className : ""),
        }}
        label3={{
          ...sdn.label4,
          ...label4,
          className:
            "sdn-label-1R07j0Td" +
            (label4?.className ? " " + label4.className : ""),
        }}
      />
    </Frame>
  )
}

const sdn: CardProductMixedProps = {
  textblockDetails: {
    className: "sdn-textblockDetails-XKYdln17",
  },
  tagline: {
    children: "Mixed Tagline",
    htmlElement: "p",
    className: "sdn-tagline-RYPEIO98",
  },
  button: {
    className: "sdn-button-3D4pvOBS",
  },
  icon: {
    icon: "material-addCircle",
    className: "sdn-icon-1ihZT8Ll",
  },
  label: {
    children: "Mixed",
    htmlElement: "label",
    className: "sdn-label-1R07j0Td",
  },
  titleProps: {
    children: "Mixed Card Title",
    htmlElement: "h4",
    className: "sdn-title-83oQ44Bx",
  },
  tagline1: {
    children: "Additional Tagline",
    htmlElement: "p",
    className: "sdn-tagline-RYPEIO98",
  },
  description: {
    children: "Special text for mixed case",
    htmlElement: "p",
    className: "sdn-description-QJZ11zsK",
  },
  buttonBar: {
    className: "sdn-buttonBar-MMcNZdBT",
  },
  button2: {
    className: "sdn-button-3D4pvOBS",
  },
  icon2: {
    icon: "material-dataset",
    className: "sdn-icon-1ihZT8Ll",
  },
  label2: {
    children: "Mixed X",
    htmlElement: "label",
    className: "sdn-label-1R07j0Td",
  },
  button1: {
    className: "sdn-button-3D4pvOBS",
  },
  icon3: {
    icon: "material-cancel",
    className: "sdn-icon-1ihZT8Ll",
  },
  label3: {
    children: "Mixed Y",
    htmlElement: "label",
    className: "sdn-label-1R07j0Td",
  },
  icon4: {
    icon: "material-borderColor",
    className: "sdn-icon-1ihZT8Ll",
  },
  label4: {
    children: "Mixed Z",
    htmlElement: "label",
    className: "sdn-label-1R07j0Td",
  },
}

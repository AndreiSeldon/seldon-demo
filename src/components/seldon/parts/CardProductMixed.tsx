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
  tagline2?: TaglineProps
  description?: DescriptionProps
  buttonBar?: ButtonBarProps
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

export function CardProductMixed({
  className = "",
  textblockDetails = sdn.textblockDetails,
  tagline,
  button,
  icon,
  label,
  titleProps,
  tagline2,
  description,
  buttonBar = sdn.buttonBar,
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
}: CardProductMixedProps) {
  return (
    <Frame
      className={"sdn-cardProduct sdn-cardProduct-glyJ5UUE " + className}
      {...props}
    >
      <Frame
        className={
          "sdn-textblockDetails sdn-textblockDetails-jRyRpai8" +
          (textblockDetails?.className ? " " + textblockDetails.className : "")
        }
      >
        <Tagline
          {...{ ...sdn.tagline, ...tagline }}
          className={
            "sdn-tagline" + (tagline?.className ? " " + tagline.className : "")
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
                "sdn-icon" + (icon?.className ? " " + icon.className : ""),
            }}
            label={{
              ...sdn.label,
              ...label,
              className:
                "sdn-label" + (label?.className ? " " + label.className : ""),
            }}
          />
        )}
        <Title
          {...{ ...sdn.titleProps, ...titleProps }}
          className={
            "sdn-title" +
            (titleProps?.className ? " " + titleProps.className : "")
          }
        />
        {tagline2 && (
          <Tagline
            {...{ ...sdn.tagline2, ...tagline2 }}
            className={
              "sdn-tagline" +
              (tagline2?.className ? " " + tagline2.className : "")
            }
          />
        )}
        <Description
          {...{ ...sdn.description, ...description }}
          className={
            "sdn-description" +
            (description?.className ? " " + description.className : "")
          }
        />
      </Frame>
      <ButtonBar
        {...{ ...sdn.buttonBar, ...buttonBar }}
        className={
          "sdn-buttonBar-rWRytCG8" +
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
          ...sdn.button3,
          ...button3,
          className:
            "sdn-button-3D4pvOBS" +
            (button3?.className ? " " + button3.className : ""),
        }}
        button3={{
          ...sdn.button4,
          ...button4,
          className:
            "sdn-button-3D4pvOBS" +
            (button4?.className ? " " + button4.className : ""),
        }}
      />
    </Frame>
  )
}

const sdn: CardProductMixedProps = {
  textblockDetails: {},
  tagline: {
    children: "Mixed Tagline",
    htmlElement: "p",
  },
  button: {},
  icon: {
    icon: "material-addCircle",
  },
  label: {
    children: "Mixed",
    htmlElement: "label",
  },
  titleProps: {
    children: "Mixed Card Title",
    htmlElement: "h4",
  },
  tagline2: {
    children: "Additional Tagline",
    htmlElement: "p",
  },
  description: {
    children: "Special text for mixed case",
    htmlElement: "p",
  },
  buttonBar: {},
  button2: {},
  icon2: {
    icon: "__default__",
  },
  label2: {
    children: "Mixed X",
    htmlElement: "label",
  },
  button3: {},
  icon3: {
    icon: "__default__",
  },
  label3: {
    children: "Mixed Y",
    htmlElement: "label",
  },
  button4: {},
  icon4: {
    icon: "__default__",
  },
  label4: {
    children: "Mixed Z",
    htmlElement: "label",
  },
}

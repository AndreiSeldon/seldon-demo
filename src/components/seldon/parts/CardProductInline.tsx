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
import { ButtonBarProps } from "../elements/ButtonBar"
import { TextblockDetailsProps } from "../elements/TextblockDetails"
import { Frame } from "../frames/Frame"
import { Description, DescriptionProps } from "../primitives/Description"
import { Icon, IconProps } from "../primitives/Icon"
import { Label, LabelProps } from "../primitives/Label"
import { Tagline, TaglineProps } from "../primitives/Tagline"
import { Title, TitleProps } from "../primitives/Title"

export interface CardProductInlineProps extends HTMLAttributes<HTMLElement> {
  className?: string

  button?: ButtonProps
  icon?: IconProps
  label?: LabelProps
  textblockDetails?: TextblockDetailsProps
  tagline?: TaglineProps
  titleProps?: TitleProps
  button2?: ButtonProps
  icon2?: IconProps
  label2?: LabelProps
  button3?: ButtonProps
  icon3?: IconProps
  label3?: LabelProps
  description?: DescriptionProps
  buttonBar?: ButtonBarProps
  button4?: ButtonProps
  icon4?: IconProps
  label4?: LabelProps
  button5?: ButtonProps
  icon5?: IconProps
  label5?: LabelProps
  button6?: ButtonProps
  icon6?: IconProps
  label6?: LabelProps
  button7?: ButtonProps
  icon7?: IconProps
  label7?: LabelProps
}

export function CardProductInline({
  className = "",
  button = sdn.button,
  icon = sdn.icon,
  label = sdn.label,
  textblockDetails = sdn.textblockDetails,
  tagline = sdn.tagline,
  titleProps = sdn.titleProps,
  button2 = sdn.button2,
  icon2 = sdn.icon2,
  label2 = sdn.label2,
  button3 = sdn.button3,
  icon3 = sdn.icon3,
  label3 = sdn.label3,
  description = sdn.description,
  buttonBar = sdn.buttonBar,
  button4 = sdn.button4,
  icon4 = sdn.icon4,
  label4 = sdn.label4,
  button5 = sdn.button5,
  icon5 = sdn.icon5,
  label5 = sdn.label5,
  button6 = sdn.button6,
  icon6 = sdn.icon6,
  label6 = sdn.label6,
  button7 = sdn.button7,
  icon7 = sdn.icon7,
  label7 = sdn.label7,
  ...props
}: CardProductInlineProps) {
  return (
    <Frame
      className={"sdn-cardProduct sdn-cardProduct-glyJ5UUE " + className}
      {...props}
    >
      {button && (
        <Button
          {...{ ...sdn.button, ...button }}
          className={
            "sdn-button-PZ55a4By sdn-button-3D4pvOBS sdn-button" +
            (button?.className ? " " + button.className : "")
          }
          icon={{ ...sdn.icon, ...icon }}
          label={{ ...sdn.label, ...label }}
        />
      )}
      <Frame
        className={
          "sdn-textblockDetails-jRyRpai8 sdn-textblockDetails-Njjvy0sD sdn-textblockDetails" +
          (textblockDetails?.className ? " " + textblockDetails.className : "")
        }
      >
        <Tagline
          {...{ ...sdn.tagline, ...tagline }}
          className={
            "sdn-tagline" + (tagline?.className ? " " + tagline.className : "")
          }
        />
        <Title
          {...{ ...sdn.titleProps, ...titleProps }}
          className={
            "sdn-title-AWpEkwtT sdn-title-NxxLFPyV sdn-title" +
            (titleProps?.className ? " " + titleProps.className : "")
          }
        />
        {button2 && (
          <Button
            {...{ ...sdn.button2, ...button2 }}
            className={
              "sdn-button-3D4pvOBS sdn-button" +
              (button2?.className ? " " + button2.className : "")
            }
            icon={{ ...sdn.icon2, ...icon2 }}
            label={{ ...sdn.label2, ...label2 }}
          />
        )}
        {button3 && (
          <Button
            {...{ ...sdn.button3, ...button3 }}
            className={
              "sdn-button-3D4pvOBS sdn-button" +
              (button3?.className ? " " + button3.className : "")
            }
            icon={{ ...sdn.icon3, ...icon3 }}
            label={{ ...sdn.label3, ...label3 }}
          />
        )}
        <Description
          {...{ ...sdn.description, ...description }}
          className={
            "sdn-description-rWA5n84C sdn-description" +
            (description?.className ? " " + description.className : "")
          }
        />
      </Frame>
      <Frame
        className={
          "sdn-buttonBar-rWRytCG8 sdn-buttonBar-o7wdbl2Z sdn-buttonBar" +
          (buttonBar?.className ? " " + buttonBar.className : "")
        }
      >
        <Button
          {...{ ...sdn.button4, ...button4 }}
          className={
            "sdn-button-4o13hVru sdn-button-3D4pvOBS sdn-button" +
            (button4?.className ? " " + button4.className : "")
          }
          icon={{ ...sdn.icon4, ...icon4 }}
          label={{ ...sdn.label4, ...label4 }}
        />
        <Button
          {...{ ...sdn.button5, ...button5 }}
          className={
            "sdn-button-OPNTxNTH sdn-button-3D4pvOBS sdn-button" +
            (button5?.className ? " " + button5.className : "")
          }
          icon={{ ...sdn.icon5, ...icon5 }}
          label={{ ...sdn.label5, ...label5 }}
        />
        <Button
          {...{ ...sdn.button6, ...button6 }}
          className={
            "sdn-button-3D4pvOBS sdn-button" +
            (button6?.className ? " " + button6.className : "")
          }
          icon={{ ...sdn.icon6, ...icon6 }}
          label={{ ...sdn.label6, ...label6 }}
        />
        {button7 && (
          <Button
            {...{ ...sdn.button7, ...button7 }}
            className={
              "sdn-button-3D4pvOBS sdn-button" +
              (button7?.className ? " " + button7.className : "")
            }
            icon={{ ...sdn.icon7, ...icon7 }}
            label={{ ...sdn.label7, ...label7 }}
          />
        )}
      </Frame>
    </Frame>
  )
}

const sdn: CardProductInlineProps = {
  button: {},
  icon: {
    icon: "material-bolt",
  },
  label: {
    children: "Special",
    htmlElement: "label",
  },
  textblockDetails: {},
  tagline: {
    children: "Inline Tagline",
    htmlElement: "p",
  },
  titleProps: {
    children: "Inline Card Title",
    htmlElement: "h4",
  },
  button2: {},
  icon2: {
    icon: "material-arrowDownward",
  },
  label2: {
    children: "Inline A",
    htmlElement: "label",
  },
  button3: {},
  icon3: {
    icon: "material-addChart",
  },
  label3: {
    children: "Inline B",
    htmlElement: "label",
  },
  description: {
    children: "Special inline text for testing.",
    htmlElement: "p",
  },
  buttonBar: {},
  button4: {},
  icon4: {
    icon: "material-addComment",
  },
  label4: {
    children: "Button A",
    htmlElement: "label",
  },
  button5: {},
  icon5: {
    icon: "material-addLocation",
  },
  label5: {
    children: "Button B",
    htmlElement: "label",
  },
  button6: {},
  icon6: {
    icon: "material-accountCircle",
  },
  label6: {
    children: "Button C",
    htmlElement: "label",
  },
  button7: {},
  icon7: {
    icon: "material-addBox",
  },
  label7: {
    children: "Button D",
    htmlElement: "label",
  },
}

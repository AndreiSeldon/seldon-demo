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
  button2?: ButtonProps
  icon2?: IconProps
  label2?: LabelProps
  tagline?: TaglineProps
  button3?: ButtonProps
  icon3?: IconProps
  label3?: LabelProps
  titleProps?: TitleProps
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
  button,
  icon,
  label,
  textblockDetails = sdn.textblockDetails,
  button2,
  icon2,
  label2,
  tagline,
  button3,
  icon3,
  label3,
  titleProps,
  buttonBar = sdn.buttonBar,
  button4,
  icon4,
  label4,
  button5,
  icon5,
  label5,
  button6,
  icon6,
  label6,
  button7,
  icon7,
  label7,
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
            "sdn-button-PZ55a4By" +
            (button?.className ? " " + button.className : "")
          }
          icon={{ ...sdn.icon, ...icon }}
          label={{ ...sdn.label, ...label }}
        />
      )}
      <Frame
        className={
          "sdn-textblockDetails-jRyRpai8" +
          (textblockDetails?.className ? " " + textblockDetails.className : "")
        }
      >
        {button2 && (
          <Button
            {...{ ...sdn.button2, ...button2 }}
            className={
              "sdn-button-3D4pvOBS" +
              (button2?.className ? " " + button2.className : "")
            }
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
          />
        )}
        <Tagline
          {...{ ...sdn.tagline, ...tagline }}
          className={
            "sdn-tagline-57ug71iC" +
            (tagline?.className ? " " + tagline.className : "")
          }
        />
        {button3 && (
          <Button
            {...{ ...sdn.button3, ...button3 }}
            className={
              "sdn-button-3D4pvOBS" +
              (button3?.className ? " " + button3.className : "")
            }
            icon={{
              ...sdn.icon3,
              ...icon3,
              className:
                "sdn-icon-1ihZT8Ll" +
                (icon3?.className ? " " + icon3.className : ""),
            }}
            label={{
              ...sdn.label3,
              ...label3,
              className:
                "sdn-label-1R07j0Td" +
                (label3?.className ? " " + label3.className : ""),
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
      </Frame>
      <Frame
        className={
          "sdn-buttonBar-o7wdbl2Z" +
          (buttonBar?.className ? " " + buttonBar.className : "")
        }
      >
        <Button
          {...{ ...sdn.button4, ...button4 }}
          className={
            "sdn-button-4o13hVru" +
            (button4?.className ? " " + button4.className : "")
          }
          icon={{
            ...sdn.icon4,
            ...icon4,
            className:
              "sdn-icon-1ihZT8Ll" +
              (icon4?.className ? " " + icon4.className : ""),
          }}
          label={{
            ...sdn.label4,
            ...label4,
            className:
              "sdn-label-1R07j0Td" +
              (label4?.className ? " " + label4.className : ""),
          }}
        />
        <Button
          {...{ ...sdn.button5, ...button5 }}
          className={
            "sdn-button-OPNTxNTH" +
            (button5?.className ? " " + button5.className : "")
          }
          icon={{
            ...sdn.icon5,
            ...icon5,
            className:
              "sdn-icon-1ihZT8Ll" +
              (icon5?.className ? " " + icon5.className : ""),
          }}
          label={{
            ...sdn.label5,
            ...label5,
            className:
              "sdn-label-1R07j0Td" +
              (label5?.className ? " " + label5.className : ""),
          }}
        />
        <Button
          {...{ ...sdn.button6, ...button6 }}
          className={
            "sdn-button-3D4pvOBS" +
            (button6?.className ? " " + button6.className : "")
          }
          icon={{
            ...sdn.icon6,
            ...icon6,
            className:
              "sdn-icon-1ihZT8Ll" +
              (icon6?.className ? " " + icon6.className : ""),
          }}
          label={{
            ...sdn.label6,
            ...label6,
            className:
              "sdn-label-1R07j0Td" +
              (label6?.className ? " " + label6.className : ""),
          }}
        />
        {button7 && (
          <Button
            {...{ ...sdn.button7, ...button7 }}
            className={
              "sdn-button-3D4pvOBS" +
              (button7?.className ? " " + button7.className : "")
            }
            icon={{
              ...sdn.icon7,
              ...icon7,
              className:
                "sdn-icon-1ihZT8Ll" +
                (icon7?.className ? " " + icon7.className : ""),
            }}
            label={{
              ...sdn.label7,
              ...label7,
              className:
                "sdn-label-1R07j0Td" +
                (label7?.className ? " " + label7.className : ""),
            }}
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
  button2: {},
  icon2: {
    icon: "material-arrowDownward",
  },
  label2: {
    children: "Inline A",
    htmlElement: "label",
  },
  tagline: {
    children: "Inline Tagline",
    htmlElement: "p",
  },
  button3: {},
  icon3: {
    icon: "material-addChart",
  },
  label3: {
    children: "Inline B",
    htmlElement: "label",
  },
  titleProps: {
    children: "Inline Card Title",
    htmlElement: "h4",
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

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
  button?: ButtonProps
  icon?: IconProps
  label?: LabelProps
  button1?: ButtonProps
  icon?: IconProps
  label?: LabelProps
  tagline?: TaglineProps
  titleProps?: TitleProps
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
  button3?: ButtonProps
  icon?: IconProps
  label?: LabelProps
}

export function CardProductInline({
  className = "",
  button,
  icon,
  label,
  textblockDetails = sdn.textblockDetails,
  button1,
  tagline,
  titleProps,
  buttonBar = sdn.buttonBar,
  button2,
  button3,
  ...props
}: CardProductInlineProps) {
  return (
    <Frame
      className={"sdn-cardProduct sdn-cardProduct-0IbtAwmQ " + className}
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
        {button1 && (
          <Button
            {...{ ...sdn.button1, ...button1 }}
            className={
              "sdn-button-3D4pvOBS" +
              (button1?.className ? " " + button1.className : "")
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
        <Tagline
          {...{ ...sdn.tagline, ...tagline }}
          className={
            "sdn-tagline-RYPEIO98" +
            (tagline?.className ? " " + tagline.className : "")
          }
        />
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
          "sdn-buttonBar-MMcNZdBT" +
          (buttonBar?.className ? " " + buttonBar.className : "")
        }
      >
        <Button
          {...{ ...sdn.button, ...button }}
          className={
            "sdn-button-4o13hVru" +
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
        <Button
          {...{ ...sdn.button1, ...button1 }}
          className={
            "sdn-button-OPNTxNTH" +
            (button1?.className ? " " + button1.className : "")
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
        <Button
          {...{ ...sdn.button2, ...button2 }}
          className={
            "sdn-button-3D4pvOBS" +
            (button2?.className ? " " + button2.className : "")
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
        {button3 && (
          <Button
            {...{ ...sdn.button3, ...button3 }}
            className={
              "sdn-button-3D4pvOBS" +
              (button3?.className ? " " + button3.className : "")
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
      </Frame>
    </Frame>
  )
}

const sdn: CardProductInlineProps = {
  button: {
    className: "sdn-button-4o13hVru",
  },
  icon: {
    icon: "material-addBox",
    className: "sdn-icon-1ihZT8Ll",
  },
  label: {
    children: "Button D",
    htmlElement: "label",
    className: "sdn-label-1R07j0Td",
  },
  textblockDetails: {
    className: "sdn-textblockDetails-jRyRpai8",
  },
  button1: {
    className: "sdn-button-OPNTxNTH",
  },
  tagline: {
    children: "Inline Tagline",
    htmlElement: "p",
    className: "sdn-tagline-RYPEIO98",
  },
  titleProps: {
    children: "Inline Card Title",
    htmlElement: "h4",
    className: "sdn-title-83oQ44Bx",
  },
  buttonBar: {
    className: "sdn-buttonBar-MMcNZdBT",
  },
  button2: {
    className: "sdn-button-3D4pvOBS",
  },
  button3: {
    className: "sdn-button-3D4pvOBS",
  },
}

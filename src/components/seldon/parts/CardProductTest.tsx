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
import { DescriptionProps } from "../primitives/Description"
import { IconProps } from "../primitives/Icon"
import { LabelProps } from "../primitives/Label"
import { TaglineProps } from "../primitives/Tagline"
import { TitleProps } from "../primitives/Title"

export interface CardProductTestProps extends HTMLAttributes<HTMLElement> {
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

export function CardProductTest({
  className = "",
  button,
  icon,
  label,
  textblockDetails,
  tagline,
  titleProps,
  button2,
  icon2,
  label2,
  button3,
  icon3,
  label3,
  description,
  buttonBar,
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
}: CardProductTestProps) {
  return (
    <Frame
      className={"sdn-cardProduct sdn-cardProduct-1jt9y4Ne " + className}
      {...props}
    >
      {button && (
        <Button
          {...{ ...sdn.button, ...button }}
          className={
            "sdn-button-2BBvyfaJ sdn-button-2BBvyfaJ sdn-button-2BBvyfaJ sdn-button " +
            (button?.className ?? "")
          }
        />
      )}
      <div
        className={
          "sdn-textblockDetails-anDbbcMd sdn-textblockDetails-Mn7No9dM sdn-textblockDetails " +
          (textblockDetails?.className ?? "")
        }
      >
        <Tagline
          {...{ ...sdn.tagline, ...tagline }}
          className={"   sdn-tagline " + (tagline?.className ?? "")}
        />
        <Title
          {...{ ...sdn.titleProps, ...titleProps }}
          className={
            "  sdn-title-hSn5CIeE sdn-title " + (titleProps?.className ?? "")
          }
        />
        {button2 && (
          <Button
            {...{ ...sdn.button2, ...button2 }}
            className={
              "sdn-button-2BBvyfaJ sdn-button-2BBvyfaJ sdn-button-2BBvyfaJ sdn-button " +
              (button2?.className ?? "")
            }
          />
        )}
        {button3 && (
          <Button
            {...{ ...sdn.button3, ...button3 }}
            className={
              "sdn-button-2BBvyfaJ sdn-button-2BBvyfaJ sdn-button-2BBvyfaJ sdn-button " +
              (button3?.className ?? "")
            }
          />
        )}
        <Description
          {...{ ...sdn.description, ...description }}
          className={"   sdn-description " + (description?.className ?? "")}
        />
      </div>
      <ButtonBar
        {...{ ...sdn.buttonBar, ...buttonBar }}
        className={
          "sdn-buttonBar-TKZw657P sdn-buttonBar-bxSi11kk sdn-buttonBar " +
          (buttonBar?.className ?? "")
        }
        button={{ ...sdn.button4, ...button4 }}
        button2={{ ...sdn.button5, ...button5 }}
        button3={{ ...sdn.button6, ...button6 }}
        button4={{ ...sdn.button7, ...button7 }}
      />
    </Frame>
  )
}

const sdn: CardProductTestProps = {
  button: {},
  icon: {
    icon: "__default__",
  },
  label: {
    children: "Andrei!",
    htmlElement: "label",
  },
  textblockDetails: {},
  tagline: {
    children: "Tagline",
    htmlElement: "p",
  },
  titleProps: {
    children: "Product Card Title",
    htmlElement: "h4",
  },
  button2: {},
  icon2: {
    icon: "__default__",
  },
  label2: {
    children: "Button 1",
    htmlElement: "label",
  },
  button3: {},
  icon3: {
    icon: "__default__",
  },
  label3: {
    children: "Button 2",
    htmlElement: "label",
  },
  description: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus.",
    htmlElement: "p",
  },
  buttonBar: {},
  button4: {},
  icon4: {
    icon: "__default__",
  },
  label4: {
    children: "Button W",
    htmlElement: "label",
  },
  button5: {},
  icon5: {
    icon: "__default__",
  },
  label5: {
    children: "Button X",
    htmlElement: "label",
  },
  button6: {},
  icon6: {
    icon: "__default__",
  },
  label6: {
    children: "Button Y",
    htmlElement: "label",
  },
  button7: {},
  icon7: {
    icon: "__default__",
  },
  label7: {
    children: "Button Z",
    htmlElement: "label",
  },
}

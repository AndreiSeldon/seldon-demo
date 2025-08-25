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

  // Custom component prop (not in schema)
  button?: ButtonProps
  // Custom component prop (not in schema)
  icon?: IconProps
  // Custom component prop (not in schema)
  label?: LabelProps
  textblockDetails?: TextblockDetailsProps
  // Custom component prop (not in schema)
  tagline?: TaglineProps
  // Custom component prop (not in schema)
  titleProps?: TitleProps
  // Custom component prop (not in schema)
  button2?: ButtonProps
  // Custom component prop (not in schema)
  icon2?: IconProps
  // Custom component prop (not in schema)
  label2?: LabelProps
  // Custom component prop (not in schema)
  button3?: ButtonProps
  // Custom component prop (not in schema)
  icon3?: IconProps
  // Custom component prop (not in schema)
  label3?: LabelProps
  // Custom component prop (not in schema)
  description?: DescriptionProps
  buttonBar?: ButtonBarProps
  // Custom component prop (not in schema)
  button4?: ButtonProps
  // Custom component prop (not in schema)
  icon4?: IconProps
  // Custom component prop (not in schema)
  label4?: LabelProps
  // Custom component prop (not in schema)
  button5?: ButtonProps
  // Custom component prop (not in schema)
  icon5?: IconProps
  // Custom component prop (not in schema)
  label5?: LabelProps
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
      <TextblockDetails
        {...{ ...sdn.textblockDetails, ...textblockDetails }}
        className={
          "sdn-textblockDetails-anDbbcMd sdn-textblockDetails-Mn7No9dM sdn-textblockDetails " +
          (textblockDetails?.className ?? "")
        }
        tagline={{ ...sdn.tagline, ...tagline }}
        titleProps={{ ...sdn.titleProps, ...titleProps }}
        description={{ ...sdn.description, ...description }}
      />
      <ButtonBar
        {...{ ...sdn.buttonBar, ...buttonBar }}
        className={
          "sdn-buttonBar-TKZw657P sdn-buttonBar-bxSi11kk sdn-buttonBar " +
          (buttonBar?.className ?? "")
        }
        button={{ ...sdn.button4, ...button4 }}
        button2={{ ...sdn.button5, ...button5 }}
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
    children: "Label",
    htmlElement: "label",
  },
  button3: {},
  icon3: {
    icon: "__default__",
  },
  label3: {
    children: "Label",
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
    children: "Label",
    htmlElement: "label",
  },
  button5: {},
  icon5: {
    icon: "__default__",
  },
  label5: {
    children: "Label",
    htmlElement: "label",
  },
}

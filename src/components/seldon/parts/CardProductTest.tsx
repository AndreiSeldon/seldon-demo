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
      <Button
        {...{ ...sdn.button, ...button }}
        className={
          "sdn-button-jEE7khYS sdn-button-jEE7khYS sdn-button-jEE7khYS sdn-button " +
          (button?.className ?? "")
        }
        icon={{ ...sdn.icon, ...icon }}
        label={{ ...sdn.label, ...label }}
      />
      <TextblockDetails
        {...{ ...sdn.textblockDetails, ...textblockDetails }}
        className={
          "sdn-textblockDetails-anDbbcMd sdn-textblockDetails-Mn7No9dM sdn-textblockDetails " +
          (textblockDetails?.className ?? "")
        }
        tagline={{ ...sdn.tagline, ...tagline }}
        titleProps={{ ...sdn.titleProps, ...titleProps }}
        button={{ ...sdn.button2, ...button2 }}
        button2={{ ...sdn.button3, ...button3 }}
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
    children: "Label",
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

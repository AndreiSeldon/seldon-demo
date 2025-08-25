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
import { AvatarProps } from "../elements/Avatar"
import { Button, ButtonProps } from "../elements/Button"
import { ButtonBar, ButtonBarProps } from "../elements/ButtonBar"
import { TextblockAvatarProps } from "../elements/TextblockAvatar"
import {
  TextblockDetails,
  TextblockDetailsProps,
} from "../elements/TextblockDetails"
import { Frame } from "../frames/Frame"
import { DescriptionProps } from "../primitives/Description"
import { IconProps } from "../primitives/Icon"
import { ImageProps } from "../primitives/Image"
import { LabelProps } from "../primitives/Label"
import { SubtitleProps } from "../primitives/Subtitle"
import { TaglineProps } from "../primitives/Tagline"
import { TitleProps } from "../primitives/Title"

export interface CardProductProps extends HTMLAttributes<HTMLElement> {
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
  avatar?: AvatarProps
  image?: ImageProps
  textblockAvatar?: TextblockAvatarProps
  title2Props?: TitleProps
  subtitle?: SubtitleProps
}

export function CardProduct({
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
  avatar,
  image,
  textblockAvatar,
  title2Props,
  subtitle,
  ...props
}: CardProductProps) {
  return (
    <Frame className={"sdn-cardProduct " + className} {...props}>
      <Button
        {...{ ...sdn.button, ...button }}
        className={
          "sdn-button-7btDGonq sdn-button-7btDGonq sdn-button " +
          (button?.className ?? "")
        }
        icon={{ ...sdn.icon, ...icon }}
        label={{ ...sdn.label, ...label }}
      />
      <TextblockDetails
        {...{ ...sdn.textblockDetails, ...textblockDetails }}
        className={
          "sdn-textblockDetails-cP4tC9Qj sdn-textblockDetails " +
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
          "sdn-buttonBar-pEk5FYzX sdn-buttonBar " + (buttonBar?.className ?? "")
        }
        button={{ ...sdn.button4, ...button4 }}
        button2={{ ...sdn.button5, ...button5 }}
        button3={{ ...sdn.button6, ...button6 }}
        button4={{ ...sdn.button7, ...button7 }}
        avatar={{ ...sdn.avatar, ...avatar }}
      />
    </Frame>
  )
}

const sdn: CardProductProps = {
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
  button6: {},
  icon6: {
    icon: "__default__",
  },
  label6: {
    children: "Label",
    htmlElement: "label",
  },
  button7: {},
  icon7: {
    icon: "__default__",
  },
  label7: {
    children: "Label",
    htmlElement: "label",
  },
  avatar: {},
  image: {
    src: "https://static.seldon.app/avatar-user.jpg",
  },
  textblockAvatar: {},
  title2Props: {
    children: "Name",
    htmlElement: "h4",
  },
  subtitle: {
    children: "Details",
    htmlElement: "h5",
  },
}

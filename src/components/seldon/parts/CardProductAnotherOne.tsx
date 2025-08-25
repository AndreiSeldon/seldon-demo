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
import { Avatar, AvatarProps } from "../elements/Avatar"
import { Button, ButtonProps } from "../elements/Button"
import { ButtonBar, ButtonBarProps } from "../elements/ButtonBar"
import {
  TextblockAvatar,
  TextblockAvatarProps,
} from "../elements/TextblockAvatar"
import {
  TextblockDetails,
  TextblockDetailsProps,
} from "../elements/TextblockDetails"
import { Frame } from "../frames/Frame"
import { Icon, IconProps } from "../primitives/Icon"
import { Image, ImageProps } from "../primitives/Image"
import { Label, LabelProps } from "../primitives/Label"
import { Subtitle, SubtitleProps } from "../primitives/Subtitle"
import { Tagline, TaglineProps } from "../primitives/Tagline"
import { Title, TitleProps } from "../primitives/Title"

export interface CardProductAnotherOneProps
  extends HTMLAttributes<HTMLElement> {
  className?: string

  avatar?: AvatarProps
  image?: ImageProps
  textblockAvatar?: TextblockAvatarProps
  titleProps?: TitleProps
  subtitle?: SubtitleProps
  textblockDetails?: TextblockDetailsProps
  tagline?: TaglineProps
  title2Props?: TitleProps
  buttonBar?: ButtonBarProps
  button?: ButtonProps
  icon?: IconProps
  label?: LabelProps
  button2?: ButtonProps
  icon2?: IconProps
  label2?: LabelProps
}

export function CardProductAnotherOne({
  className = "",
  avatar,
  image,
  textblockAvatar,
  titleProps,
  subtitle,
  textblockDetails,
  tagline,
  title2Props,
  buttonBar,
  button,
  icon,
  label,
  button2,
  icon2,
  label2,
  ...props
}: CardProductAnotherOneProps) {
  return (
    <Frame
      className={"sdn-cardProduct sdn-cardProduct-1jt9y4Ne " + className}
      {...props}
    >
      {avatar && (
        <Avatar
          {...{ ...sdn.avatar, ...avatar }}
          className={
            "sdn-avatar-F1NB5NPg sdn-avatar" +
            (avatar?.className ? " " + avatar.className : "")
          }
        />
      )}
      <TextblockDetails
        {...{ ...sdn.textblockDetails, ...textblockDetails }}
        className={
          "sdn-textblockAvatar-6qke1loE sdn-textblockDetails-Mn7No9dM sdn-textblockAvatar" +
          (textblockDetails?.className ? " " + textblockDetails.className : "")
        }
        tagline={{ ...sdn.tagline, ...tagline }}
        titleProps={{ ...sdn.title2Props, ...title2Props }}
      />
      <ButtonBar
        {...{ ...sdn.buttonBar, ...buttonBar }}
        className={
          "sdn-buttonBar-Pxqn6L7O sdn-buttonBar-bxSi11kk sdn-buttonBar" +
          (buttonBar?.className ? " " + buttonBar.className : "")
        }
        button={{ ...sdn.button, ...button }}
        button2={{ ...sdn.button2, ...button2 }}
      />
    </Frame>
  )
}

const sdn: CardProductAnotherOneProps = {
  avatar: {},
  image: {
    src: "https://static.seldon.app/avatar-user.jpg",
  },
  textblockAvatar: {},
  titleProps: {
    children: "Name",
    htmlElement: "h4",
  },
  subtitle: {
    children: "Details",
    htmlElement: "h5",
  },
  textblockDetails: {},
  tagline: {
    children: "Tagline",
    htmlElement: "p",
  },
  title2Props: {
    children: "Product Card Title",
    htmlElement: "h4",
  },
  buttonBar: {},
  button: {},
  icon: {
    icon: "__default__",
  },
  label: {
    children: "Label",
    htmlElement: "label",
  },
  button2: {},
  icon2: {
    icon: "__default__",
  },
  label2: {
    children: "Label",
    htmlElement: "label",
  },
}

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
import {
  TextblockAvatar,
  TextblockAvatarProps,
} from "../elements/TextblockAvatar"
import { Frame } from "../frames/Frame"
import { Image, ImageProps } from "../primitives/Image"
import { SubtitleProps } from "../primitives/Subtitle"
import { TitleProps } from "../primitives/Title"

export interface AvatarProps extends HTMLAttributes<HTMLElement> {
  className?: string

  image?: ImageProps
  textblockAvatar?: TextblockAvatarProps
  titleProps?: TitleProps
  subtitle?: SubtitleProps
}

export function Avatar({
  className = "",
  image,
  textblockAvatar,
  titleProps,
  subtitle,
  ...props
}: AvatarProps) {
  return (
    <Frame className={"sdn-avatar " + className} {...props}>
      <Image
        {...{ ...sdn.image, ...image }}
        className={"sdn-image-nFaDxt90 sdn-image " + (image?.className ?? "")}
      />
      <TextblockAvatar
        {...{ ...sdn.textblockAvatar, ...textblockAvatar }}
        className={
          "sdn-textblockAvatar-1RJjmMec sdn-textblockDetails " +
          (textblockAvatar?.className ?? "")
        }
        titleProps={{ ...sdn.titleProps, ...titleProps }}
        subtitle={{ ...sdn.subtitle, ...subtitle }}
      />
    </Frame>
  )
}

const sdn: AvatarProps = {
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
}

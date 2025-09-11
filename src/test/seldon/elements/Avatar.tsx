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
import { Subtitle, SubtitleProps } from "../primitives/Subtitle"
import { Title, TitleProps } from "../primitives/Title"
import { combineClassNames } from "../utils/class-name"

export interface AvatarProps extends HTMLAttributes<HTMLElement> {
  className?: string
  image?: ImageProps
  textblockAvatar?: TextblockAvatarProps
  titleProps?: TitleProps
  subtitle?: SubtitleProps
}

/**
 * Avatar
 *
 * Level: Element
 *
 * Intent: Displays a user or entity's image or initials in UI elements like lists, headers, or profiles.
 *
 * Tags: avatar, user image, profile, identity, initials, picture, circle, UI element
 *
 * @example
 * ```tsx
 * <Avatar
 *   image="/image.jpg"
 *   textblockAvatar="{}"
 *   title="Product Title"
 *   subtitle="Product Title"
 * />
 * ```
 */
export function Avatar({
  className = "",
  image = sdn.image,
  textblockAvatar = sdn.textblockAvatar,
  titleProps,
  subtitle,
  ...props
}: AvatarProps) {
  const frameClassName = combineClassNames("sdn-avatar", className)
  const imageProps = {
    ...sdn.image,
    ...image,
    className: combineClassNames(sdn.image?.className, image?.className),
  }
  const textblockAvatarProps = {
    ...sdn.textblockAvatar,
    ...textblockAvatar,
    className: combineClassNames(
      sdn.textblockAvatar?.className,
      textblockAvatar?.className,
    ),
  }
  const titlePropsProps = {
    ...sdn.titleProps,
    ...titleProps,
    className: combineClassNames(
      sdn.titleProps?.className,
      titleProps?.className,
    ),
  }
  const subtitleProps = {
    ...sdn.subtitle,
    ...subtitle,
    className: combineClassNames(sdn.subtitle?.className, subtitle?.className),
  }

  return (
    <Frame className={frameClassName} {...props}>
      <Image {...imageProps} />
      <TextblockAvatar
        {...textblockAvatarProps}
        titleProps={titlePropsProps}
        subtitle={subtitleProps}
      />
    </Frame>
  )
}

const sdn: AvatarProps = {
  image: {
    src: "https://static.seldon.app/avatar-user.jpg",
    className: "sdn-image-znpp6zy2",
  },
  textblockAvatar: {
    className: "sdn-textblockAvatar-afDCPQWJ",
  },
  titleProps: {
    children: "Full Name",
    htmlElement: "h4",
    className: "sdn-title-UEuudVR6",
  },
  subtitle: {
    children: "email@example.com",
    htmlElement: "h5",
    className: "sdn-subtitle-dhdWGtPD",
  },
}

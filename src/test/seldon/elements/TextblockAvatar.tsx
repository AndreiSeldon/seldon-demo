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
import { Frame } from "../frames/Frame"
import { Subtitle, SubtitleProps } from "../primitives/Subtitle"
import { Title, TitleProps } from "../primitives/Title"
import { combineClassNames } from "../utils/class-name-utils"

export interface TextblockAvatarProps extends HTMLAttributes<HTMLElement> {
  className?: string
  titleProps?: TitleProps
  subtitle?: SubtitleProps
}

/**
 * Textblock Avatar
 *
 * Level: Element
 *
 * Intent: Textblock paired with an avatar for contextual user content.
 *
 * Tags: text, avatar, block, user, message, comment, UI, identity
 *
 * @example
 * ```tsx
 * <TextblockAvatar
 *   ariaHidden="false"
 *   orientation="vertical"
 *   width="fill"
 *   height="fit"
 *   gap="@gap.tight"
 *   wrapChildren="false"
 * />
 * ```
 */
export function TextblockAvatar({
  className = "",
  titleProps,
  subtitle,
  ...props
}: TextblockAvatarProps) {
  const frameClassName = combineClassNames("sdn-textblockAvatar", className)
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
      <Title {...titlePropsProps} />
      <Subtitle {...subtitleProps} />
    </Frame>
  )
}

const sdn: TextblockAvatarProps = {
  titleProps: {
    children: "Default Title",
    htmlElement: "h4",
    width: "fill",
    height: "fit",
    color: "@swatch.black",
    opacity: "[object Object]",
    textCase: "normal",
    textDecoration: "none",
    wrapText: "true",
    lines: "2",
    className: "sdn-title-eHPXbujP",
  },
  subtitle: {
    children: "Details",
    htmlElement: "h5",
    width: "fill",
    height: "fit",
    color: "@swatch.black",
    opacity: "[object Object]",
    textCase: "normal",
    textDecoration: "none",
    wrapText: "true",
    lines: "2",
    className: "sdn-subtitle-aE7NioiN",
  },
}

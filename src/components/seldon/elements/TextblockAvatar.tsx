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

export interface TextblockAvatarProps extends HTMLAttributes<HTMLElement> {
  className?: string

  titleProps?: TitleProps
  subtitle?: SubtitleProps
}

export function TextblockAvatar({
  className = "",
  titleProps,
  subtitle,
  ...props
}: TextblockAvatarProps) {
  return (
    <Frame className={"sdn-textblockDetails " + className} {...props}>
      <Title
        {...{ ...sdn.titleProps, ...titleProps }}
        className={" sdn-title " + (titleProps?.className ?? "")}
      />
      <Subtitle
        {...{ ...sdn.subtitle, ...subtitle }}
        className={
          "sdn-subtitle-yVRaKeYN sdn-subtitle " + (subtitle?.className ?? "")
        }
      />
    </Frame>
  )
}

const sdn: TextblockAvatarProps = {
  titleProps: {
    children: "Name",
    htmlElement: "h4",
  },
  subtitle: {
    children: "Details",
    htmlElement: "h5",
  },
}

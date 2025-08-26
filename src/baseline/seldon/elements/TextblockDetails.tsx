/*
 * This code was generated using Seldon (https://seldon.app)
 *
 * Licensed under the Terms of Use: https://seldon.digital/terms-of-service
 * Do not redistribute or sublicense without permission.
 *
 * You may not use this software, or any derivative works of it,
 * in whole or in part, for the purposes of training, fine-tuning,
 * or otherwise improving (directly or indirectly) any machine learning
 * or artificial intelligence system.
 */
import { HTMLAttributes } from "react"
import { Frame } from "../frames/Frame"
import { Description, DescriptionProps } from "../primitives/Description"
import { Tagline, TaglineProps } from "../primitives/Tagline"
import { Title, TitleProps } from "../primitives/Title"

export interface TextblockDetailsProps extends HTMLAttributes<HTMLElement> {
  className?: string

  taglineProps?: TaglineProps
  titleProps?: TitleProps
  descriptionProps?: DescriptionProps
}

export function TextblockDetails({
  className = "",
  taglineProps,
  titleProps,
  descriptionProps,
  ...props
}: TextblockDetailsProps) {
  return (
    <Frame className={"sdn-textblockDetails " + className} {...props}>
      <Tagline
        {...{ ...seldon.taglineProps, ...taglineProps }}
        className={" sdn-tagline " + (taglineProps?.className ?? "")}
      />
      <Title
        {...{ ...seldon.titleProps, ...titleProps }}
        className={
          "sdn-title-J3VG02iY sdn-title " + (titleProps?.className ?? "")
        }
      />
      <Description
        {...{ ...seldon.descriptionProps, ...descriptionProps }}
        className={" sdn-description " + (descriptionProps?.className ?? "")}
      />
    </Frame>
  )
}

const seldon: TextblockDetailsProps = {
  taglineProps: {
    children: "Tagline",
    htmlElement: "p",
  },
  titleProps: {
    children: "Product Card Title",
    htmlElement: "h4",
  },
  descriptionProps: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus.",
    htmlElement: "p",
  },
}

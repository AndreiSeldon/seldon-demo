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
import { Description, DescriptionProps } from "../primitives/Description"
import { Tagline, TaglineProps } from "../primitives/Tagline"
import { Title, TitleProps } from "../primitives/Title"

export interface TextblockDetailsProps extends HTMLAttributes<HTMLElement> {
  className?: string

  tagline?: TaglineProps
  titleProps?: TitleProps
  description?: DescriptionProps
}

export function TextblockDetails({
  className = "",
  tagline = sdn.tagline,
  titleProps = sdn.titleProps,
  description = sdn.description,
  ...props
}: TextblockDetailsProps) {
  return (
    <Frame className={"sdn-textblockDetails " + className} {...props}>
      <Tagline
        {...{ ...sdn.tagline, ...tagline }}
        className={
          "sdn-tagline" + (tagline?.className ? " " + tagline.className : "")
        }
      />
      <Title
        {...{ ...sdn.titleProps, ...titleProps }}
        className={
          "sdn-title-NxxLFPyV" +
          (titleProps?.className ? " " + titleProps.className : "")
        }
      />
      <Description
        {...{ ...sdn.description, ...description }}
        className={
          "sdn-description" +
          (description?.className ? " " + description.className : "")
        }
      />
    </Frame>
  )
}

const sdn: TextblockDetailsProps = {
  tagline: {
    children: "Tagline",
    htmlElement: "p",
  },
  titleProps: {
    children: "Product Card Title",
    htmlElement: "h4",
  },
  description: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus.",
    htmlElement: "p",
  },
}

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
import { combineClassNames } from "../utils/class-name"

export interface TextblockDetailsProps extends HTMLAttributes<HTMLElement> {
  className?: string
  tagline?: TaglineProps
  titleProps?: TitleProps
  description?: DescriptionProps
}

/**
 * Textblock Details
 *
 * Level: Element
 *
 * Intent: Displays detailed text content like descriptions or metadata.
 *
 * Tags: text, details, description, metadata, info, UI, content
 *
 * @example
 * ```tsx
 * <TextblockDetails
 *   tagline="Featured Product"
 *   title="Product Title"
 *   description="Product description text"
 * />
 * ```
 */
export function TextblockDetails({
  className = "",
  tagline = sdn.tagline,
  titleProps = sdn.titleProps,
  description = sdn.description,
  ...props
}: TextblockDetailsProps) {
  const frameClassName = combineClassNames("sdn-textblockDetails", className)
  const taglineProps = {
    ...sdn.tagline,
    ...tagline,
    className: combineClassNames(sdn.tagline?.className, tagline?.className),
  }
  const titlePropsProps = {
    ...sdn.titleProps,
    ...titleProps,
    className: combineClassNames(
      sdn.titleProps?.className,
      titleProps?.className,
    ),
  }
  const descriptionProps = {
    ...sdn.description,
    ...description,
    className: combineClassNames(
      sdn.description?.className,
      description?.className,
    ),
  }

  return (
    <Frame className={frameClassName} {...props}>
      <Tagline {...taglineProps} />
      <Title {...titlePropsProps} />
      <Description {...descriptionProps} />
    </Frame>
  )
}

const sdn: TextblockDetailsProps = {
  tagline: {
    children: "Tagline",
    htmlElement: "p",
    className: "sdn-tagline-KDpkqT",
  },
  titleProps: {
    children: "Title",
    htmlElement: "h4",
    className: "sdn-title-heinma",
  },
  description: {
    children: "Description",
    htmlElement: "p",
    className: "sdn-description-GET2Fm",
  },
}

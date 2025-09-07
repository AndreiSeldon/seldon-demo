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
import { Image, ImageProps } from "../primitives/Image"
import { Title, TitleProps } from "../primitives/Title"
import { combineClassNames } from "../utils/class-name-utils"

export interface SectionBrandProps extends HTMLAttributes<HTMLElement> {
  className?: string
  image?: ImageProps
  titleProps?: TitleProps
  description?: DescriptionProps
}

/**
 * Section Brand
 *
 * Level: Element
 *
 * Intent: Brand section containing logo, company name, and tagline. Can be used in footers, headers, or any other layout context. Follows Material Design layout patterns.
 *
 * Tags: section, brand, logo, company, element, layout, header, footer
 *
 * @example
 * ```tsx
 * <SectionBrand
 *   image="/image.jpg"
 *   title="Product Title"
 *   description="Product description text"
 * />
 * ```
 */
export function SectionBrand({
  className = "",
  image = sdn.image,
  titleProps = sdn.titleProps,
  description = sdn.description,
  ...props
}: SectionBrandProps) {
  const frameClassName = combineClassNames("sdn-sectionLegal", className)
  const imageProps = {
    ...sdn.image,
    ...image,
    className: combineClassNames(sdn.image?.className, image?.className),
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
      <Image {...imageProps} />
      <Title {...titlePropsProps} />
      <Description {...descriptionProps} />
    </Frame>
  )
}

const sdn: SectionBrandProps = {
  image: {
    src: "https://static.seldon.app/logo.svg",
    className: "sdn-image-Jt9aipZ9",
  },
  titleProps: {
    children: "Company Name",
    htmlElement: "h4",
    className: "sdn-title-eHPXbujP",
  },
  description: {
    children: "Building amazing products for the future.",
    htmlElement: "p",
    className: "sdn-description-wvuIQKxS",
  },
}

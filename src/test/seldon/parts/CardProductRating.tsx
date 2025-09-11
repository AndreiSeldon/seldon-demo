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
import { ButtonIconic, ButtonIconicProps } from "../elements/ButtonIconic"
import {
  TextblockDetails,
  TextblockDetailsProps,
} from "../elements/TextblockDetails"
import { Frame } from "../frames/Frame"
import { BarButtonsProps } from "../parts/BarButtons"
import { Description, DescriptionProps } from "../primitives/Description"
import { Icon, IconProps } from "../primitives/Icon"
import { Tagline, TaglineProps } from "../primitives/Tagline"
import { Title, TitleProps } from "../primitives/Title"
import { combineClassNames } from "../utils/class-name"

export interface CardProductRatingProps extends HTMLAttributes<HTMLElement> {
  className?: string
  barButtons?: BarButtonsProps
  buttonIconic?: ButtonIconicProps
  icon?: IconProps
  buttonIconic2?: ButtonIconicProps
  icon2?: IconProps
  textblockDetails?: TextblockDetailsProps
  tagline?: TaglineProps
  titleProps?: TitleProps
  description?: DescriptionProps
}

/**
 * Product Card
 *
 * Level: Part
 *
 * Intent: Product card schema optimized for ecommerce use cases, supporting pricing, images, descriptions, and action triggers.
 *
 * Tags: card, product, ecommerce, ui, pricing, image, cta, catalog
 *
 * @example
 * ```tsx
 * <CardProductRating
 *   barButtons="{}"
 *   buttonIconic={() => {}}
 *   icon="material-star"
 *   buttonIconic1={() => {}}
 *   textblockDetails="{}"
 *   tagline="Featured Product"
 *   title="Product Title"
 *   description="Product description text"
 * />
 * ```
 */
export function CardProductRating({
  className = "",
  barButtons = sdn.barButtons,
  buttonIconic,
  icon,
  buttonIconic2,
  icon2,
  textblockDetails = sdn.textblockDetails,
  tagline,
  titleProps,
  description,
  ...props
}: CardProductRatingProps) {
  const frameClassName = combineClassNames(
    "sdn-cardProduct sdn-cardProduct-4XXTyN",
    className,
  )
  const barButtonsProps = {
    ...sdn.barButtons,
    ...barButtons,
    className: combineClassNames(
      sdn.barButtons?.className,
      barButtons?.className,
    ),
  }
  const buttonIconicProps = {
    ...sdn.buttonIconic,
    ...buttonIconic,
    className: combineClassNames(
      sdn.buttonIconic?.className,
      buttonIconic?.className,
    ),
  }
  const iconProps = {
    ...sdn.icon,
    ...icon,
    className: combineClassNames(sdn.icon?.className, icon?.className),
  }
  const buttonIconic2Props = {
    ...sdn.buttonIconic2,
    ...buttonIconic2,
    className: combineClassNames(
      sdn.buttonIconic2?.className,
      buttonIconic2?.className,
    ),
  }
  const icon2Props = {
    ...sdn.icon2,
    ...icon2,
    className: combineClassNames(sdn.icon2?.className, icon2?.className),
  }
  const textblockDetailsProps = {
    ...sdn.textblockDetails,
    ...textblockDetails,
    className: combineClassNames(
      sdn.textblockDetails?.className,
      textblockDetails?.className,
    ),
  }
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
      <Frame {...barButtonsProps}>
        {buttonIconic && (
          <ButtonIconic {...buttonIconicProps} icon={iconProps} />
        )}
        {buttonIconic2 && (
          <ButtonIconic {...buttonIconic2Props} icon={icon2Props} />
        )}
      </Frame>
      <TextblockDetails
        {...textblockDetailsProps}
        tagline={taglineProps}
        titleProps={titlePropsProps}
        description={descriptionProps}
      />
    </Frame>
  )
}

const sdn: CardProductRatingProps = {
  barButtons: {
    className: "sdn-buttonBar-NXSwAB",
  },
  buttonIconic: {
    className: "sdn-button--Nygng",
  },
  icon: {
    icon: "__default__",
    className: "sdn-icon-0symaN",
  },
  buttonIconic2: {
    className: "sdn-button-4yIieN",
  },
  icon2: {
    icon: "__default__",
    className: "sdn-icon-0symaN",
  },
  textblockDetails: {
    className: "sdn-textblockDetails-Xx9AA1",
  },
  tagline: {
    children: "Tagline",
    htmlElement: "p",
    className: "sdn-tagline-qh_8ke",
  },
  titleProps: {
    children: "Title",
    htmlElement: "h4",
    className: "sdn-title-urTlxY",
  },
  description: {
    children: "Description",
    htmlElement: "p",
    className: "sdn-description-vmMJE8",
  },
}

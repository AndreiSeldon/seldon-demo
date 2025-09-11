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
import { ButtonOutlined, ButtonOutlinedProps } from "../elements/ButtonOutlined"
import {
  TextblockDetails,
  TextblockDetailsProps,
} from "../elements/TextblockDetails"
import { Frame } from "../frames/Frame"
import { BarButtonsProps } from "../parts/BarButtons"
import { Description, DescriptionProps } from "../primitives/Description"
import { Icon, IconProps } from "../primitives/Icon"
import { Label, LabelProps } from "../primitives/Label"
import { Tagline, TaglineProps } from "../primitives/Tagline"
import { Title, TitleProps } from "../primitives/Title"
import { combineClassNames } from "../utils/class-name"

export interface CardProductHeroProps extends HTMLAttributes<HTMLElement> {
  className?: string
  textblockDetails?: TextblockDetailsProps
  tagline?: TaglineProps
  titleProps?: TitleProps
  description?: DescriptionProps
  barButtons?: BarButtonsProps
  buttonOutlined?: ButtonOutlinedProps
  icon?: IconProps
  label?: LabelProps
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
 * <CardProductHero
 *   textblockDetails="{}"
 *   tagline="Featured Product"
 *   title="Product Title"
 *   description="Product description text"
 *   barButtons="{}"
 *   buttonOutlined={() => {}}
 *   icon="material-star"
 *   label="Button Label"
 * />
 * ```
 */
export function CardProductHero({
  className = "",
  textblockDetails = sdn.textblockDetails,
  tagline,
  titleProps,
  description,
  barButtons = sdn.barButtons,
  buttonOutlined,
  icon,
  label,
  ...props
}: CardProductHeroProps) {
  const frameClassName = combineClassNames(
    "sdn-cardProduct sdn-cardProduct-oqID55",
    className,
  )
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
  const barButtonsProps = {
    ...sdn.barButtons,
    ...barButtons,
    className: combineClassNames(
      sdn.barButtons?.className,
      barButtons?.className,
    ),
  }
  const buttonOutlinedProps = {
    ...sdn.buttonOutlined,
    ...buttonOutlined,
    className: combineClassNames(
      sdn.buttonOutlined?.className,
      buttonOutlined?.className,
    ),
  }
  const iconProps = {
    ...sdn.icon,
    ...icon,
    className: combineClassNames(sdn.icon?.className, icon?.className),
  }
  const labelProps = {
    ...sdn.label,
    ...label,
    className: combineClassNames(sdn.label?.className, label?.className),
  }

  return (
    <Frame className={frameClassName} {...props}>
      <TextblockDetails
        {...textblockDetailsProps}
        tagline={taglineProps}
        titleProps={titlePropsProps}
        description={descriptionProps}
      />
      <Frame {...barButtonsProps}>
        {buttonOutlined && (
          <ButtonOutlined
            {...buttonOutlinedProps}
            icon={iconProps}
            label={labelProps}
          />
        )}
      </Frame>
    </Frame>
  )
}

const sdn: CardProductHeroProps = {
  textblockDetails: {
    className: "sdn-textblockDetails-gwjK0Q",
  },
  tagline: {
    children: "Tagline",
    htmlElement: "p",
    className: "sdn-tagline-JHxwEI",
  },
  titleProps: {
    children: "Title",
    htmlElement: "h4",
    className: "sdn-title-YjOJyx",
  },
  description: {
    children: "Description",
    htmlElement: "p",
    className: "sdn-description-NUNsNj",
  },
  barButtons: {
    className: "sdn-buttonBar-8_pBvl",
  },
  buttonOutlined: {
    className: "sdn-button-rgfIWs",
  },
  icon: {
    icon: "__default__",
    className: "sdn-icon-0symaN",
  },
  label: {
    children: "Label",
    htmlElement: "label",
    className: "sdn-label-KLbdk5",
  },
}

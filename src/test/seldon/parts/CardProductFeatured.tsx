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
import { ButtonBarProps } from "../elements/ButtonBar"
import { ButtonChip, ButtonChipProps } from "../elements/ButtonChip"
import { TextblockDetailsProps } from "../elements/TextblockDetails"
import { Frame } from "../frames/Frame"
import { Description, DescriptionProps } from "../primitives/Description"
import { Icon, IconProps } from "../primitives/Icon"
import { Label, LabelProps } from "../primitives/Label"
import { Title, TitleProps } from "../primitives/Title"
import { combineClassNames } from "../utils/class-name"

export interface CardProductFeaturedProps extends HTMLAttributes<HTMLElement> {
  className?: string
  textblockDetails?: TextblockDetailsProps
  titleProps?: TitleProps
  description?: DescriptionProps
  description2?: DescriptionProps
  buttonBar?: ButtonBarProps
  buttonChip?: ButtonChipProps
  icon?: IconProps
  label?: LabelProps
  buttonChip2?: ButtonChipProps
  icon2?: IconProps
  label2?: LabelProps
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
 * <CardProductFeatured
 *   textblockDetails="{}"
 *   title="Product Title"
 *   description="Product description text"
 *   description1="Product description text"
 *   buttonBar="{}"
 *   buttonChip={() => {}}
 *   icon="material-star"
 *   label="Button Label"
 *   buttonChip1={() => {}}
 * />
 * ```
 */
export function CardProductFeatured({
  className = "",
  textblockDetails = sdn.textblockDetails,
  titleProps,
  description,
  description2,
  buttonBar = sdn.buttonBar,
  buttonChip,
  icon,
  label,
  buttonChip2,
  icon2,
  label2,
  ...props
}: CardProductFeaturedProps) {
  const frameClassName = combineClassNames(
    "sdn-cardProduct sdn-cardProduct-kAqE6k",
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
  const description2Props = {
    ...sdn.description2,
    ...description2,
    className: combineClassNames(
      sdn.description2?.className,
      description2?.className,
    ),
  }
  const buttonBarProps = {
    ...sdn.buttonBar,
    ...buttonBar,
    className: combineClassNames(
      sdn.buttonBar?.className,
      buttonBar?.className,
    ),
  }
  const buttonChipProps = {
    ...sdn.buttonChip,
    ...buttonChip,
    className: combineClassNames(
      sdn.buttonChip?.className,
      buttonChip?.className,
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
  const buttonChip2Props = {
    ...sdn.buttonChip2,
    ...buttonChip2,
    className: combineClassNames(
      sdn.buttonChip2?.className,
      buttonChip2?.className,
    ),
  }
  const icon2Props = {
    ...sdn.icon2,
    ...icon2,
    className: combineClassNames(sdn.icon2?.className, icon2?.className),
  }
  const label2Props = {
    ...sdn.label2,
    ...label2,
    className: combineClassNames(sdn.label2?.className, label2?.className),
  }

  return (
    <Frame className={frameClassName} {...props}>
      <Frame {...textblockDetailsProps}>
        <Title {...titlePropsProps} />
        <Description {...descriptionProps} />
        {description2 && <Description {...description2Props} />}
      </Frame>
      <Frame {...buttonBarProps}>
        {buttonChip && (
          <ButtonChip
            {...buttonChipProps}
            icon={iconProps}
            label={labelProps}
          />
        )}
        {buttonChip2 && (
          <ButtonChip
            {...buttonChip2Props}
            icon={icon2Props}
            label={label2Props}
          />
        )}
      </Frame>
    </Frame>
  )
}

const sdn: CardProductFeaturedProps = {
  textblockDetails: {
    className: "sdn-textblockDetails-fSv-i8",
  },
  titleProps: {
    children: "Title",
    htmlElement: "h4",
    className: "sdn-title-QQMR_a",
  },
  description: {
    children: "Description",
    htmlElement: "p",
    className: "sdn-description-aCgSm9",
  },
  description2: {
    children: "Description",
    htmlElement: "p",
    className: "sdn-description-aCgSm9",
  },
  buttonBar: {
    className: "sdn-buttonBar-qSv7kp",
  },
  buttonChip: {
    className: "sdn-button-0QOda7",
  },
  icon: {
    icon: "__default__",
    className: "sdn-icon-0symaN",
  },
  label: {
    children: "Label",
    htmlElement: "label",
    className: "sdn-label-HeWOtm",
  },
  buttonChip2: {
    className: "sdn-button-0QOda7",
  },
  icon2: {
    icon: "__default__",
    className: "sdn-icon-0symaN",
  },
  label2: {
    children: "Label",
    htmlElement: "label",
    className: "sdn-label-HeWOtm",
  },
}

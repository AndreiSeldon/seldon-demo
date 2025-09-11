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
import { Button, ButtonProps } from "../elements/Button"
import { ButtonBarProps } from "../elements/ButtonBar"
import { ButtonIconic, ButtonIconicProps } from "../elements/ButtonIconic"
import {
  TextblockDetails,
  TextblockDetailsProps,
} from "../elements/TextblockDetails"
import { Frame } from "../frames/Frame"
import { Description, DescriptionProps } from "../primitives/Description"
import { Icon, IconProps } from "../primitives/Icon"
import { Label, LabelProps } from "../primitives/Label"
import { Tagline, TaglineProps } from "../primitives/Tagline"
import { Title, TitleProps } from "../primitives/Title"
import { combineClassNames } from "../utils/class-name"

export interface CardProductProps extends HTMLAttributes<HTMLElement> {
  className?: string
  textblockDetails?: TextblockDetailsProps
  tagline?: TaglineProps
  titleProps?: TitleProps
  description?: DescriptionProps
  buttonBar?: ButtonBarProps
  button?: ButtonProps
  icon?: IconProps
  label?: LabelProps
  buttonIconic1?: ButtonIconicProps
  icon2?: IconProps
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
 * <CardProduct
 *   textblockDetails="{}"
 *   tagline="Featured Product"
 *   title="Product Title"
 *   description="Product description text"
 *   buttonBar="{}"
 *   button={() => {}}
 *   icon="material-star"
 *   label="Button Label"
 *   buttonIconic1={() => {}}
 * />
 * ```
 */
export function CardProduct({
  className = "",
  textblockDetails = sdn.textblockDetails,
  tagline,
  titleProps,
  description,
  buttonBar = sdn.buttonBar,
  button,
  icon,
  label,
  buttonIconic1,
  icon2,
  ...props
}: CardProductProps) {
  const frameClassName = combineClassNames("sdn-cardProduct", className)
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
  const buttonBarProps = {
    ...sdn.buttonBar,
    ...buttonBar,
    className: combineClassNames(
      sdn.buttonBar?.className,
      buttonBar?.className,
    ),
  }
  const buttonProps = {
    ...sdn.button,
    ...button,
    className: combineClassNames(sdn.button?.className, button?.className),
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
  const buttonIconic1Props = {
    ...sdn.buttonIconic1,
    ...buttonIconic1,
    className: combineClassNames(
      sdn.buttonIconic1?.className,
      buttonIconic1?.className,
    ),
  }
  const icon2Props = {
    ...sdn.icon2,
    ...icon2,
    className: combineClassNames(sdn.icon2?.className, icon2?.className),
  }

  return (
    <Frame className={frameClassName} {...props}>
      <TextblockDetails
        {...textblockDetailsProps}
        tagline={taglineProps}
        titleProps={titlePropsProps}
        description={descriptionProps}
      />
      <Frame {...buttonBarProps}>
        <Button {...buttonProps} icon={iconProps} label={labelProps} />
        {buttonIconic1 && (
          <ButtonIconic {...buttonIconic1Props} icon={icon2Props} />
        )}
      </Frame>
    </Frame>
  )
}

const sdn: CardProductProps = {
  textblockDetails: {
    className: "sdn-textblockDetails-Xx9AA1",
  },
  tagline: {
    children: "Tagline",
    htmlElement: "p",
    className: "sdn-tagline-1EkRxm",
  },
  titleProps: {
    children: "Title",
    htmlElement: "h4",
    className: "sdn-title-BTzexg",
  },
  description: {
    children: "Description",
    htmlElement: "p",
    className: "sdn-description-V1GofM",
  },
  buttonBar: {
    className: "sdn-buttonBar-NXSwAB",
  },
  button: {
    className: "sdn-button-HjzV76",
  },
  icon: {
    icon: "__default__",
    className: "sdn-icon-0symaN",
  },
  label: {
    children: "Label",
    htmlElement: "label",
    className: "sdn-label-FuunCK",
  },
  buttonIconic1: {
    className: "sdn-button-EmvstI",
  },
  icon2: {
    icon: "__default__",
    className: "sdn-icon-0symaN",
  },
}

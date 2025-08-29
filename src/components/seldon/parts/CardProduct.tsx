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
import { ButtonBar, ButtonBarProps } from "../elements/ButtonBar"
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
import { combineClassNames } from "../utils/class-name-utils"

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
  button2?: ButtonProps
  icon2?: IconProps
  label2?: LabelProps
  button3?: ButtonProps
  icon3?: IconProps
  label3?: LabelProps
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
 *   button1={() => {}}
 *   button2={() => {}}
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
  button2,
  icon2,
  label2,
  button3,
  icon3,
  label3,
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
  const button2Props = {
    ...sdn.button2,
    ...button2,
    className: combineClassNames(sdn.button2?.className, button2?.className),
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
  const button3Props = {
    ...sdn.button3,
    ...button3,
    className: combineClassNames(sdn.button3?.className, button3?.className),
  }
  const icon3Props = {
    ...sdn.icon3,
    ...icon3,
    className: combineClassNames(sdn.icon3?.className, icon3?.className),
  }
  const label3Props = {
    ...sdn.label3,
    ...label3,
    className: combineClassNames(sdn.label3?.className, label3?.className),
  }

  return (
    <Frame className={frameClassName} {...props}>
      <TextblockDetails
        {...textblockDetailsProps}
        tagline={taglineProps}
        titleProps={titlePropsProps}
        description={descriptionProps}
      />
      <ButtonBar
        {...buttonBarProps}
        button={buttonProps}
        icon={iconProps}
        label={labelProps}
        button2={button2Props}
        icon2={icon2Props}
        label2={label2Props}
        button3={button3Props}
        icon3={icon3Props}
        label3={label3Props}
      />
    </Frame>
  )
}

const sdn: CardProductProps = {
  textblockDetails: {
    className: "sdn-textblockDetails-Njjvy0sD",
  },
  tagline: {
    children: "Tagline",
    htmlElement: "p",
    className: "sdn-tagline-57ug71iC",
  },
  titleProps: {
    children: "Product Card",
    htmlElement: "h4",
    className: "sdn-title-83oQ44Bx",
  },
  description: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus.",
    htmlElement: "p",
    className: "sdn-description-8Y5lFu0w",
  },
  buttonBar: {
    className: "sdn-buttonBar-MMcNZdBT",
  },
  button: {
    className: "sdn-button-EOkV8PVa",
  },
  icon: {
    icon: "__default__",
    className: "sdn-icon-1OIuOePg",
  },
  label: {
    children: "Default 1",
    htmlElement: "label",
    className: "sdn-label-1R07j0Td",
  },
  button2: {
    className: "sdn-button-3D4pvOBS",
  },
  icon2: {
    icon: "__default__",
    className: "sdn-icon-1OIuOePg",
  },
  label2: {
    children: "Default 2",
    htmlElement: "label",
    className: "sdn-label-1R07j0Td",
  },
  button3: {
    className: "sdn-button-3D4pvOBS",
  },
  icon3: {
    icon: "__default__",
    className: "sdn-icon-1OIuOePg",
  },
  label3: {
    children: "Default 3",
    htmlElement: "label",
    className: "sdn-label-1R07j0Td",
  },
}

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
import { TextblockDetailsProps } from "../elements/TextblockDetails"
import { Frame } from "../frames/Frame"
import { Description, DescriptionProps } from "../primitives/Description"
import { Icon, IconProps } from "../primitives/Icon"
import { Label, LabelProps } from "../primitives/Label"
import { Tagline, TaglineProps } from "../primitives/Tagline"
import { Title, TitleProps } from "../primitives/Title"
import { combineClassNames } from "../utils/class-name-utils"

export interface CardProductMixedProps extends HTMLAttributes<HTMLElement> {
  className?: string
  textblockDetails?: TextblockDetailsProps
  tagline?: TaglineProps
  button?: ButtonProps
  icon?: IconProps
  label?: LabelProps
  titleProps?: TitleProps
  tagline2?: TaglineProps
  description?: DescriptionProps
  buttonBar?: ButtonBarProps
  button2?: ButtonProps
  icon2?: IconProps
  label2?: LabelProps
  button3?: ButtonProps
  icon3?: IconProps
  label3?: LabelProps
  button4?: ButtonProps
  icon4?: IconProps
  label4?: LabelProps
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
 * <CardProductMixed
 *   textblockDetails="{}"
 *   tagline="Featured Product"
 *   button={() => {}}
 *   icon="material-star"
 *   label="Button Label"
 *   title="Product Title"
 *   tagline1="Featured Product"
 *   description="Product description text"
 *   buttonBar="{}"
 *   button1={() => {}}
 *   button2={() => {}}
 * />
 * ```
 */
export function CardProductMixed({
  className = "",
  textblockDetails = sdn.textblockDetails,
  tagline,
  button,
  icon,
  label,
  titleProps,
  tagline2,
  description,
  buttonBar = sdn.buttonBar,
  button2,
  icon2,
  label2,
  button3,
  icon3,
  label3,
  button4,
  icon4,
  label4,
  ...props
}: CardProductMixedProps) {
  const frameClassName = combineClassNames(
    "sdn-cardProduct sdn-cardProduct-0IbtAwmQ",
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
  const titlePropsProps = {
    ...sdn.titleProps,
    ...titleProps,
    className: combineClassNames(
      sdn.titleProps?.className,
      titleProps?.className,
    ),
  }
  const tagline2Props = {
    ...sdn.tagline2,
    ...tagline2,
    className: combineClassNames(sdn.tagline2?.className, tagline2?.className),
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
  const button4Props = {
    ...sdn.button4,
    ...button4,
    className: combineClassNames(sdn.button4?.className, button4?.className),
  }
  const icon4Props = {
    ...sdn.icon4,
    ...icon4,
    className: combineClassNames(sdn.icon4?.className, icon4?.className),
  }
  const label4Props = {
    ...sdn.label4,
    ...label4,
    className: combineClassNames(sdn.label4?.className, label4?.className),
  }

  return (
    <Frame className={frameClassName} {...props}>
      <Frame {...textblockDetailsProps}>
        <Tagline {...taglineProps} />
        {button && (
          <Button {...buttonProps} icon={iconProps} label={labelProps} />
        )}
        <Title {...titlePropsProps} />
        {tagline2 && <Tagline {...tagline2Props} />}
        <Description {...descriptionProps} />
      </Frame>
      <ButtonBar
        {...buttonBarProps}
        button={button2Props}
        icon={icon2Props}
        label={label2Props}
        button2={button3Props}
        icon2={icon3Props}
        label2={label3Props}
        button3={button4Props}
        icon3={icon4Props}
        label3={label4Props}
      />
    </Frame>
  )
}

const sdn: CardProductMixedProps = {
  textblockDetails: {
    className: "sdn-textblockDetails-Njjvy0sD",
  },
  tagline: {
    children: "Mixed Tagline",
    htmlElement: "p",
    className: "sdn-tagline-57ug71iC",
  },
  button: {
    className: "sdn-button-3D4pvOBS",
  },
  icon: {
    icon: "material-addCircle",
    className: "sdn-icon-1ihZT8Ll",
  },
  label: {
    children: "Mixed",
    htmlElement: "label",
    className: "sdn-label-1R07j0Td",
  },
  titleProps: {
    children: "Mixed Card Title",
    htmlElement: "h4",
    className: "sdn-title-83oQ44Bx",
  },
  tagline2: {
    children: "Additional Tagline",
    htmlElement: "p",
    className: "sdn-tagline-57ug71iC",
  },
  description: {
    children: "Special text for mixed case",
    htmlElement: "p",
    className: "sdn-description-8Y5lFu0w",
  },
  buttonBar: {
    className: "sdn-buttonBar-MMcNZdBT",
  },
  button2: {
    className: "sdn-button-JnRIw2cY",
  },
  icon2: {
    icon: "material-dataset",
    className: "sdn-icon-1ihZT8Ll",
  },
  label2: {
    children: "Mixed X",
    htmlElement: "label",
    className: "sdn-label-1R07j0Td",
  },
  button3: {
    className: "sdn-button-3D4pvOBS",
  },
  icon3: {
    icon: "material-cancel",
    className: "sdn-icon-1ihZT8Ll",
  },
  label3: {
    children: "Mixed Y",
    htmlElement: "label",
    className: "sdn-label-1R07j0Td",
  },
  button4: {
    className: "sdn-button-3D4pvOBS",
  },
  icon4: {
    icon: "material-borderColor",
    className: "sdn-icon-1ihZT8Ll",
  },
  label4: {
    children: "Mixed Z",
    htmlElement: "label",
    className: "sdn-label-1R07j0Td",
  },
}

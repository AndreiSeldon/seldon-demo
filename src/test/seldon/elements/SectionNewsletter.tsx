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
import { Frame } from "../frames/Frame"
import { Description, DescriptionProps } from "../primitives/Description"
import { Icon, IconProps } from "../primitives/Icon"
import { Input, InputProps } from "../primitives/Input"
import { Label, LabelProps } from "../primitives/Label"
import { Title, TitleProps } from "../primitives/Title"
import { combineClassNames } from "../utils/class-name"

export interface SectionNewsletterProps extends HTMLAttributes<HTMLElement> {
  className?: string
  titleProps?: TitleProps
  description?: DescriptionProps
  input?: InputProps
  button?: ButtonProps
  icon?: IconProps
  label?: LabelProps
}

/**
 * Section Newsletter
 *
 * Level: Element
 *
 * Intent: Newsletter signup section with email input and subscribe button. Can be used in footers, headers, sidebars, or any other layout context. Follows Material Design form patterns.
 *
 * Tags: section, newsletter, signup, form, email, subscription, element, layout, header, footer, sidebar
 *
 * @example
 * ```tsx
 * <SectionNewsletter
 *   title="Product Title"
 *   description="Product description text"
 *   input="{}"
 *   button={() => {}}
 *   icon="material-star"
 *   label="Button Label"
 * />
 * ```
 */
export function SectionNewsletter({
  className = "",
  titleProps = sdn.titleProps,
  description = sdn.description,
  input = sdn.input,
  button = sdn.button,
  icon,
  label,
  ...props
}: SectionNewsletterProps) {
  const frameClassName = combineClassNames("sdn-sectionNav", className)
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
  const inputProps = {
    ...sdn.input,
    ...input,
    className: combineClassNames(sdn.input?.className, input?.className),
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

  return (
    <Frame className={frameClassName} {...props}>
      <Title {...titlePropsProps} />
      <Description {...descriptionProps} />
      <Input {...inputProps} />
      <Button {...buttonProps} icon={iconProps} label={labelProps} />
    </Frame>
  )
}

const sdn: SectionNewsletterProps = {
  titleProps: {
    children: "Stay Updated",
    htmlElement: "h4",
    className: "sdn-title-0xSc1G0N",
  },
  description: {
    children: "Subscribe to our newsletter for the latest updates.",
    htmlElement: "p",
    className: "sdn-description-3Es5yJvv",
  },
  input: {
    inputType: "email",
    className: "sdn-input-Za1siZsO",
  },
  button: {
    className: "sdn-button-2gH8qkgH",
  },
  icon: {
    icon: "material-send",
    className: "sdn-icon-As6Ye9dV",
  },
  label: {
    children: "Subscribe",
    htmlElement: "label",
    className: "sdn-label-09i9Wory",
  },
}

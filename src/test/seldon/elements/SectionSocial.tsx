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
import { Icon, IconProps } from "../primitives/Icon"
import { Label, LabelProps } from "../primitives/Label"
import { combineClassNames } from "../utils/class-name-utils"

export interface SectionSocialProps extends HTMLAttributes<HTMLElement> {
  className?: string
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
 * Section Social
 *
 * Level: Element
 *
 * Intent: Social media section containing social media buttons. Can be used in footers, headers, sidebars, or any other layout context. Follows Material Design button patterns.
 *
 * Tags: section, social, media, buttons, element, layout, header, footer, sidebar
 *
 * @example
 * ```tsx
 * <SectionSocial
 *   button={() => {}}
 *   icon="material-star"
 *   label="Button Label"
 *   button1={() => {}}
 *   button2={() => {}}
 * />
 * ```
 */
export function SectionSocial({
  className = "",
  button = sdn.button,
  icon,
  label,
  button2 = sdn.button2,
  icon2,
  label2,
  button3 = sdn.button3,
  icon3,
  label3,
  ...props
}: SectionSocialProps) {
  const frameClassName = combineClassNames("sdn-sectionLegal", className)
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
      <Button {...buttonProps} icon={iconProps} label={labelProps} />
      <Button {...button2Props} icon={icon2Props} label={label2Props} />
      <Button {...button3Props} icon={icon3Props} label={label3Props} />
    </Frame>
  )
}

const sdn: SectionSocialProps = {
  button: {
    className: "sdn-button-psYiblqm",
  },
  icon: {
    icon: "social-twitter",
    className: "sdn-icon-LsZW5WwN",
  },
  label: {
    children: "Twitter",
    htmlElement: "label",
    className: "sdn-label-6fhi2gOH",
  },
  button2: {
    className: "sdn-button-psYiblqm",
  },
  icon2: {
    icon: "social-linkedin",
    className: "sdn-icon-LsZW5WwN",
  },
  label2: {
    children: "LinkedIn",
    htmlElement: "label",
    className: "sdn-label-6fhi2gOH",
  },
  button3: {
    className: "sdn-button-psYiblqm",
  },
  icon3: {
    icon: "social-instagram",
    className: "sdn-icon-LsZW5WwN",
  },
  label3: {
    children: "Instagram",
    htmlElement: "label",
    className: "sdn-label-6fhi2gOH",
  },
}

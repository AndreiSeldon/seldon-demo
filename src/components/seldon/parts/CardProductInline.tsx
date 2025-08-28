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
import { TextblockDetailsProps } from "../elements/TextblockDetails"
import { Frame } from "../frames/Frame"
import { Icon, IconProps } from "../primitives/Icon"
import { Label, LabelProps } from "../primitives/Label"
import { Tagline, TaglineProps } from "../primitives/Tagline"
import { Title, TitleProps } from "../primitives/Title"
import { combineClassNames } from "../utils/classNames"

export interface CardProductInlineProps extends HTMLAttributes<HTMLElement> {
  className?: string
  button?: ButtonProps
  icon?: IconProps
  label?: LabelProps
  textblockDetails?: TextblockDetailsProps
  button2?: ButtonProps
  icon2?: IconProps
  label2?: LabelProps
  button3?: ButtonProps
  icon3?: IconProps
  label3?: LabelProps
  tagline?: TaglineProps
  titleProps?: TitleProps
  buttonBar?: ButtonBarProps
  button4?: ButtonProps
  icon4?: IconProps
  label4?: LabelProps
  button5?: ButtonProps
  icon5?: IconProps
  label5?: LabelProps
  button6?: ButtonProps
  icon6?: IconProps
  label6?: LabelProps
  button7?: ButtonProps
  icon7?: IconProps
  label7?: LabelProps
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
 * <CardProductInline
 *   button={() => {}}
 *   icon="material-star"
 *   label="Button Label"
 *   textblockDetails="{}"
 *   button1={() => {}}
 *   tagline="Featured Product"
 *   title="Product Title"
 *   buttonBar="{}"
 *   button2={() => {}}
 *   button3={() => {}}
 * />
 * ```
 */
export function CardProductInline({
  className = "",
  button,
  icon,
  label,
  textblockDetails = sdn.textblockDetails,
  button2,
  icon2,
  label2,
  button3,
  icon3,
  label3,
  tagline,
  titleProps,
  buttonBar = sdn.buttonBar,
  button4,
  icon4,
  label4,
  button5,
  icon5,
  label5,
  button6,
  icon6,
  label6,
  button7,
  icon7,
  label7,
  ...props
}: CardProductInlineProps) {
  const frameClassName = combineClassNames(
    "sdn-cardProduct sdn-cardProduct-0IbtAwmQ",
    className,
  )
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
  const textblockDetailsProps = {
    ...sdn.textblockDetails,
    ...textblockDetails,
    className: combineClassNames(
      sdn.textblockDetails?.className,
      textblockDetails?.className,
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
  const buttonBarProps = {
    ...sdn.buttonBar,
    ...buttonBar,
    className: combineClassNames(
      sdn.buttonBar?.className,
      buttonBar?.className,
    ),
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
  const button5Props = {
    ...sdn.button5,
    ...button5,
    className: combineClassNames(sdn.button5?.className, button5?.className),
  }
  const icon5Props = {
    ...sdn.icon5,
    ...icon5,
    className: combineClassNames(sdn.icon5?.className, icon5?.className),
  }
  const label5Props = {
    ...sdn.label5,
    ...label5,
    className: combineClassNames(sdn.label5?.className, label5?.className),
  }
  const button6Props = {
    ...sdn.button6,
    ...button6,
    className: combineClassNames(sdn.button6?.className, button6?.className),
  }
  const icon6Props = {
    ...sdn.icon6,
    ...icon6,
    className: combineClassNames(sdn.icon6?.className, icon6?.className),
  }
  const label6Props = {
    ...sdn.label6,
    ...label6,
    className: combineClassNames(sdn.label6?.className, label6?.className),
  }
  const button7Props = {
    ...sdn.button7,
    ...button7,
    className: combineClassNames(sdn.button7?.className, button7?.className),
  }
  const icon7Props = {
    ...sdn.icon7,
    ...icon7,
    className: combineClassNames(sdn.icon7?.className, icon7?.className),
  }
  const label7Props = {
    ...sdn.label7,
    ...label7,
    className: combineClassNames(sdn.label7?.className, label7?.className),
  }

  return (
    <Frame className={frameClassName} {...props}>
      {button && (
        <Button {...buttonProps} icon={iconProps} label={labelProps} />
      )}
      <Frame {...textblockDetailsProps}>
        {button2 && (
          <Button {...button2Props} icon={icon2Props} label={label2Props} />
        )}
        {button3 && (
          <Button {...button3Props} icon={icon3Props} label={label3Props} />
        )}
        <Tagline {...taglineProps} />
        <Title {...titlePropsProps} />
      </Frame>
      <Frame {...buttonBarProps}>
        <Button {...button4Props} icon={icon4Props} label={label4Props} />
        <Button {...button5Props} icon={icon5Props} label={label5Props} />
        <Button {...button6Props} icon={icon6Props} label={label6Props} />
        {button7 && (
          <Button {...button7Props} icon={icon7Props} label={label7Props} />
        )}
      </Frame>
    </Frame>
  )
}

const sdn: CardProductInlineProps = {
  button: {
    className: "sdn-button-PZ55a4By",
  },
  icon: {
    icon: "material-bolt",
    className: "sdn-icon-1ihZT8Ll",
  },
  label: {
    children: "Special",
    htmlElement: "label",
    className: "sdn-label-1R07j0Td",
  },
  textblockDetails: {
    className: "sdn-textblockDetails-jRyRpai8",
  },
  button2: {
    className: "sdn-button-3D4pvOBS",
  },
  icon2: {
    icon: "material-arrowDownward",
    className: "sdn-icon-1ihZT8Ll",
  },
  label2: {
    children: "Inline A",
    htmlElement: "label",
    className: "sdn-label-1R07j0Td",
  },
  button3: {
    className: "sdn-button-3D4pvOBS",
  },
  icon3: {
    icon: "material-addChart",
    className: "sdn-icon-1ihZT8Ll",
  },
  label3: {
    children: "Inline B",
    htmlElement: "label",
    className: "sdn-label-1R07j0Td",
  },
  tagline: {
    children: "Inline Tagline",
    htmlElement: "p",
    className: "sdn-tagline-57ug71iC",
  },
  titleProps: {
    children: "Inline Card Title",
    htmlElement: "h4",
    className: "sdn-title-83oQ44Bx",
  },
  buttonBar: {
    className: "sdn-buttonBar-MMcNZdBT",
  },
  button4: {
    className: "sdn-button-4o13hVru",
  },
  icon4: {
    icon: "material-addComment",
    className: "sdn-icon-1ihZT8Ll",
  },
  label4: {
    children: "Button A",
    htmlElement: "label",
    className: "sdn-label-1R07j0Td",
  },
  button5: {
    className: "sdn-button-OPNTxNTH",
  },
  icon5: {
    icon: "material-addLocation",
    className: "sdn-icon-1ihZT8Ll",
  },
  label5: {
    children: "Button B",
    htmlElement: "label",
    className: "sdn-label-1R07j0Td",
  },
  button6: {
    className: "sdn-button-3D4pvOBS",
  },
  icon6: {
    icon: "material-accountCircle",
    className: "sdn-icon-1ihZT8Ll",
  },
  label6: {
    children: "Button C",
    htmlElement: "label",
    className: "sdn-label-1R07j0Td",
  },
  button7: {
    className: "sdn-button-3D4pvOBS",
  },
  icon7: {
    icon: "material-addBox",
    className: "sdn-icon-1ihZT8Ll",
  },
  label7: {
    children: "Button D",
    htmlElement: "label",
    className: "sdn-label-1R07j0Td",
  },
}

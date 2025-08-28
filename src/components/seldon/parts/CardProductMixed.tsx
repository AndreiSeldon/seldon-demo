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
  return (
    <Frame
      className={"sdn-cardProduct sdn-cardProduct-0IbtAwmQ " + className}
      {...props}
    >
      <Frame
        className={
          "sdn-textblockDetails-XKYdln17" +
          (textblockDetails?.className ? " " + textblockDetails.className : "")
        }
      >
        <Tagline
          {...{ ...sdn.tagline, ...tagline }}
          className={
            "sdn-tagline-57ug71iC" +
            (tagline?.className ? " " + tagline.className : "")
          }
        />
        {button && (
          <Button
            {...{ ...sdn.button, ...button }}
            className={
              "sdn-button-3D4pvOBS" +
              (button?.className ? " " + button.className : "")
            }
            icon={{
              ...sdn.icon,
              ...icon,
              className: combineClassNames(
                "sdn-icon-1ihZT8Ll",
                icon?.className,
              ),
            }}
            label={{
              ...sdn.label,
              ...label,
              className: combineClassNames(
                "sdn-label-1R07j0Td",
                label?.className,
              ),
            }}
          />
        )}
        <Title
          {...{ ...sdn.titleProps, ...titleProps }}
          className={
            "sdn-title-83oQ44Bx" +
            (titleProps?.className ? " " + titleProps.className : "")
          }
        />
        {tagline2 && (
          <Tagline
            {...{ ...sdn.tagline2, ...tagline2 }}
            className={
              "sdn-tagline-57ug71iC" +
              (tagline2?.className ? " " + tagline2.className : "")
            }
          />
        )}
        <Description
          {...{ ...sdn.description, ...description }}
          className={
            "sdn-description-8Y5lFu0w" +
            (description?.className ? " " + description.className : "")
          }
        />
      </Frame>
      <ButtonBar
        {...{ ...sdn.buttonBar, ...buttonBar }}
        className={combineClassNames(
          "sdn-buttonBar-MMcNZdBT",
          buttonBar?.className,
        )}
        button={{
          ...sdn.button2,
          ...button2,
          className: combineClassNames(
            "sdn-button-JnRIw2cY",
            button2?.className,
          ),
        }}
        icon={{
          ...sdn.icon2,
          ...icon2,
          className: combineClassNames("sdn-icon-1ihZT8Ll", icon2?.className),
        }}
        label={{
          ...sdn.label2,
          ...label2,
          className: combineClassNames("sdn-label-1R07j0Td", label2?.className),
        }}
        button2={{
          ...sdn.button3,
          ...button3,
          className: combineClassNames(
            "sdn-button-3D4pvOBS",
            button3?.className,
          ),
        }}
        icon2={{
          ...sdn.icon3,
          ...icon3,
          className: combineClassNames("sdn-icon-1ihZT8Ll", icon3?.className),
        }}
        label2={{
          ...sdn.label3,
          ...label3,
          className: combineClassNames("sdn-label-1R07j0Td", label3?.className),
        }}
        button3={{
          ...sdn.button4,
          ...button4,
          className: combineClassNames(
            "sdn-button-3D4pvOBS",
            button4?.className,
          ),
        }}
        icon3={{
          ...sdn.icon4,
          ...icon4,
          className: combineClassNames("sdn-icon-1ihZT8Ll", icon4?.className),
        }}
        label3={{
          ...sdn.label4,
          ...label4,
          className: combineClassNames("sdn-label-1R07j0Td", label4?.className),
        }}
      />
    </Frame>
  )
}

const sdn: CardProductMixedProps = {
  textblockDetails: {},
  tagline: {
    children: "Mixed Tagline",
    htmlElement: "p",
  },
  button: {},
  icon: {
    icon: "material-addCircle",
  },
  label: {
    children: "Mixed",
    htmlElement: "label",
  },
  titleProps: {
    children: "Mixed Card Title",
    htmlElement: "h4",
  },
  tagline2: {
    children: "Additional Tagline",
    htmlElement: "p",
  },
  description: {
    children: "Special text for mixed case",
    htmlElement: "p",
  },
  buttonBar: {},
  button2: {},
  icon2: {
    icon: "material-dataset",
  },
  label2: {
    children: "Mixed X",
    htmlElement: "label",
  },
  button3: {},
  icon3: {
    icon: "material-cancel",
  },
  label3: {
    children: "Mixed Y",
    htmlElement: "label",
  },
  button4: {},
  icon4: {
    icon: "material-borderColor",
  },
  label4: {
    children: "Mixed Z",
    htmlElement: "label",
  },
}

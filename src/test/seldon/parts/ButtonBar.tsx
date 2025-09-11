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
import { ButtonIconic, ButtonIconicProps } from "../elements/ButtonIconic"
import { Frame } from "../frames/Frame"
import { Icon, IconProps } from "../primitives/Icon"
import { Label, LabelProps } from "../primitives/Label"
import { combineClassNames } from "../utils/class-name"

export interface ButtonBarProps extends HTMLAttributes<HTMLElement> {
  className?: string
  button?: ButtonProps
  icon?: IconProps
  label?: LabelProps
  button2?: ButtonProps
  icon2?: IconProps
  label2?: LabelProps
  buttonIconic2?: ButtonIconicProps
  icon3?: IconProps
}

/**
 * Button Bar
 *
 * Level: Part
 *
 * Intent: Groups multiple buttons in a horizontal layout for related actions.
 *
 * Tags: button group, bar, actions, UI, layout, controls, inline, cluster
 *
 * @example
 * ```tsx
 * <ButtonBar
 *   button={() => {}}
 *   icon="material-star"
 *   label="Button Label"
 *   button1={() => {}}
 *   buttonIconic2={() => {}}
 * />
 * ```
 */
export function ButtonBar({
  className = "",
  button = sdn.button,
  icon,
  label,
  button2 = sdn.button2,
  icon2,
  label2,
  buttonIconic2,
  icon3,
  ...props
}: ButtonBarProps) {
  const frameClassName = combineClassNames("sdn-buttonBar", className)
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
  const buttonIconic2Props = {
    ...sdn.buttonIconic2,
    ...buttonIconic2,
    className: combineClassNames(
      sdn.buttonIconic2?.className,
      buttonIconic2?.className,
    ),
  }
  const icon3Props = {
    ...sdn.icon3,
    ...icon3,
    className: combineClassNames(sdn.icon3?.className, icon3?.className),
  }

  return (
    <Frame className={frameClassName} {...props}>
      <Button {...buttonProps} icon={iconProps} label={labelProps} />
      <Button {...button2Props} icon={icon2Props} label={label2Props} />
      {buttonIconic2 && (
        <ButtonIconic {...buttonIconic2Props} icon={iconProps} />
      )}
    </Frame>
  )
}

const sdn: ButtonBarProps = {
  button: {
    className: "sdn-button-HjzV76",
  },
  icon: {
    icon: "material-add",
    className: "sdn-icon-0symaN",
  },
  label: {
    children: "First",
    htmlElement: "label",
    className: "sdn-label-FuunCK",
  },
  button2: {
    className: "sdn-button-HjzV76",
  },
  icon2: {
    icon: "material-delete",
    className: "sdn-icon-0symaN",
  },
  label2: {
    children: "Second",
    htmlElement: "label",
    className: "sdn-label-FuunCK",
  },
  buttonIconic2: {
    className: "sdn-button-EmvstI",
  },
  icon3: {
    icon: "__default__",
    className: "sdn-icon-0symaN",
  },
}

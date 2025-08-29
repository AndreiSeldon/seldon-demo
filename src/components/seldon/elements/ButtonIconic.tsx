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
 
import { ButtonHTMLAttributes } from "react"
import { HTMLButton } from "../native-react/HTML.Button"
import { Icon, IconProps } from "../primitives/Icon"
import { combineClassNames } from "../utils/class-name-utils"

export interface ButtonIconicProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  icon?: IconProps
}

/**
 * Button
 *
 * Level: Element
 *
 * Intent: Standard button for triggering actions like submit, confirm, or cancel.
 *
 * Tags: button, action, UI, primary, click, control, submit, call to action
 *
 * @example
 * ```tsx
 * <ButtonIconic
 *   icon="material-star"
 * />
 * ```
 */
export function ButtonIconic({
  className = "",
  icon = sdn.icon,
  ...props
}: ButtonIconicProps) {
  const frameClassName = combineClassNames(
    "sdn-button sdn-button-jDaoMHTT",
    className,
  )
  const iconProps = {
    ...sdn.icon,
    ...icon,
    className: combineClassNames(sdn.icon?.className, icon?.className),
  }

  return (
    <HTMLButton className={frameClassName} {...props}>
      <Icon {...iconProps} />
    </HTMLButton>
  )
}

const sdn: ButtonIconicProps = {
  icon: {
    icon: "__default__",
    className: "sdn-icon-1OIuOePg",
  },
}

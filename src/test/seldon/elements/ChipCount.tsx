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
import { HTMLSpan } from "../native-react/HTML.Span"
import { Label, LabelProps } from "../primitives/Label"
import { combineClassNames } from "../utils/class-name-utils"

export interface ChipCountProps extends HTMLAttributes<HTMLSpanElement> {
  className?: string
  label?: LabelProps
}

/**
 * Chip Count
 *
 * Level: Element
 *
 * Intent: Defines a chip component variant that displays a numeric count, often used for notifications, filters, or grouped item indicators.
 *
 * Tags: chip, count, ui, badge, number, indicator, filter, tag
 *
 * @example
 * ```tsx
 * <ChipCount
 *   label="Button Label"
 * />
 * ```
 */
export function ChipCount({
  className = "",
  label = sdn.label,
  ...props
}: ChipCountProps) {
  const frameClassName = combineClassNames("sdn-chipCount", className)
  const labelProps = {
    ...sdn.label,
    ...label,
    className: combineClassNames(sdn.label?.className, label?.className),
  }

  return (
    <HTMLSpan className={frameClassName} {...props}>
      <Label {...labelProps} />
    </HTMLSpan>
  )
}

const sdn: ChipCountProps = {
  label: {
    children: "Label",
    htmlElement: "label",
    className: "sdn-label-4xhSms9L",
  },
}

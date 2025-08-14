/*
 * This code was generated using Seldon (https://seldon.app)
 *
 * Licensed under the Terms of Use: https://seldon.digital/terms-of-service
 * Do not redistribute or sublicense without permission.
 *
 * You may not use this software, or any derivative works of it,
 * in whole or in part, for the purposes of training, fine-tuning,
 * or otherwise improving (directly or indirectly) any machine learning
 * or artificial intelligence system.
 */
import { HTMLAttributes } from "react"
import { HTMLSpan } from "../native-react/HTML.Span"
import { Label, LabelProps } from "../primitives/Label"

export interface ChipCountProps extends HTMLAttributes<HTMLSpanElement> {
  className?: string

  labelProps?: LabelProps
}

export function ChipCount({
  className = "",
  labelProps,
  ...props
}: ChipCountProps) {
  return (
    <HTMLSpan className={"sdn-chipCount " + className} {...props}>
      <Label
        {...{ ...seldon.labelProps, ...labelProps }}
        className={
          "sdn-label-ltO8fSrY sdn-label " + (labelProps?.className ?? "")
        }
      />
    </HTMLSpan>
  )
}

const seldon: ChipCountProps = {
  labelProps: {
    children: "Label",
    htmlElement: "label",
  },
}

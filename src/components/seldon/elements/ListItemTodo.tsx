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
import { LiHTMLAttributes } from "react"
import { ChipCount, ChipCountProps } from "../elements/ChipCount"
import { HTMLLi } from "../native-react/HTML.Li"
import { Checkbox, CheckboxProps } from "../primitives/Checkbox"
import { Label, LabelProps } from "../primitives/Label"

export interface ListItemTodoProps extends LiHTMLAttributes<HTMLLIElement> {
  className?: string

  checkboxProps?: CheckboxProps
  labelProps?: LabelProps
  chipCountProps?: ChipCountProps
  chipCountLabelProps?: LabelProps
}

export function ListItemTodo({
  className = "",
  checkboxProps,
  labelProps,
  chipCountProps,
  chipCountLabelProps,
  ...props
}: ListItemTodoProps) {
  return (
    <HTMLLi className={"sdn-listItemTodo " + className} {...props}>
      <Checkbox
        {...{ ...seldon.checkboxProps, ...checkboxProps }}
        className={
          "sdn-checkbox-CWCraIa0 sdn-checkbox " +
          (checkboxProps?.className ?? "")
        }
      />
      <Label
        {...{ ...seldon.labelProps, ...labelProps }}
        className={
          "sdn-label-nJa33VcM sdn-label " + (labelProps?.className ?? "")
        }
      />
      <ChipCount
        {...{ ...seldon.chipCountProps, ...chipCountProps }}
        className={
          "sdn-chipCount-gsm2eP6n sdn-chipCount " +
          (chipCountProps?.className ?? "")
        }
        labelProps={{ ...seldon.chipCountLabelProps, ...chipCountLabelProps }}
      />
    </HTMLLi>
  )
}

const seldon: ListItemTodoProps = {
  checkboxProps: {
    inputType: "checkbox",
  },
  labelProps: {
    children: "Label",
    htmlElement: "label",
  },
  chipCountProps: {},
  chipCountLabelProps: {
    children: "Label",
    htmlElement: "label",
  },
}

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
 
import { LiHTMLAttributes } from "react"
import { ChipCount, ChipCountProps } from "../elements/ChipCount"
import { HTMLLi } from "../native-react/HTML.Li"
import { Checkbox, CheckboxProps } from "../primitives/Checkbox"
import { Label, LabelProps } from "../primitives/Label"
import { combineClassNames } from "../utils/class-name-utils"

export interface ListItemTodoProps extends LiHTMLAttributes<HTMLLIElement> {
  className?: string
  checkbox?: CheckboxProps
  label?: LabelProps
  chipCount?: ChipCountProps
  label2?: LabelProps
}

/**
 * To-Do Item
 *
 * Level: Element
 *
 * Intent: Schema for an individual to-do entry containing title, description, status, due date, and optional priority or labels.
 *
 * Tags: todo, item, task, entry, ui, status, priority, label
 *
 * @example
 * ```tsx
 * <ListItemTodo
 *   checkbox="{}"
 *   label="Button Label"
 *   chipCount="{}"
 * />
 * ```
 */
export function ListItemTodo({
  className = "",
  checkbox = sdn.checkbox,
  label = sdn.label,
  chipCount = sdn.chipCount,
  label2,
  ...props
}: ListItemTodoProps) {
  const frameClassName = combineClassNames("sdn-listItemTodo", className)
  const checkboxProps = {
    ...sdn.checkbox,
    ...checkbox,
    className: combineClassNames(sdn.checkbox?.className, checkbox?.className),
  }
  const labelProps = {
    ...sdn.label,
    ...label,
    className: combineClassNames(sdn.label?.className, label?.className),
  }
  const chipCountProps = {
    ...sdn.chipCount,
    ...chipCount,
    className: combineClassNames(
      sdn.chipCount?.className,
      chipCount?.className,
    ),
  }
  const label2Props = {
    ...sdn.label2,
    ...label2,
    className: combineClassNames(sdn.label2?.className, label2?.className),
  }

  return (
    <HTMLLi className={frameClassName} {...props}>
      <Checkbox {...checkboxProps} />
      <Label {...labelProps} />
      <ChipCount {...chipCountProps} label={label2Props} />
    </HTMLLi>
  )
}

const sdn: ListItemTodoProps = {
  checkbox: {
    inputType: "checkbox",
    className: "sdn-checkbox-bGfzuWyQ",
  },
  label: {
    children: "Label",
    htmlElement: "label",
    className: "sdn-label-Ewbe0cOG",
  },
  chipCount: {
    className: "sdn-chipCount-x9JOw5FJ",
  },
  label2: {
    children: "Label",
    htmlElement: "label",
    className: "sdn-label-WTCxGWIz",
  },
}

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
import { ChipCount, ChipCountProps } from "../elements/ChipCount"
import { ListItemTodo, ListItemTodoProps } from "../elements/ListItemTodo"
import { HTMLUl } from "../native-react/HTML.Ul"
import { Checkbox, CheckboxProps } from "../primitives/Checkbox"
import { Label, LabelProps } from "../primitives/Label"
import { combineClassNames } from "../utils/class-name-utils"

export interface ListTodoProps extends HTMLAttributes<HTMLUListElement> {
  className?: string
  listItemTodo?: ListItemTodoProps
  checkbox?: CheckboxProps
  label?: LabelProps
  chipCount?: ChipCountProps
  label2?: LabelProps
  listItemTodo2?: ListItemTodoProps
  checkbox2?: CheckboxProps
  label3?: LabelProps
  chipCount2?: ChipCountProps
  label4?: LabelProps
  listItemTodo3?: ListItemTodoProps
  checkbox3?: CheckboxProps
  label5?: LabelProps
  chipCount3?: ChipCountProps
  label6?: LabelProps
  listItemTodo4?: ListItemTodoProps
  checkbox4?: CheckboxProps
  label7?: LabelProps
  chipCount4?: ChipCountProps
  label8?: LabelProps
  listItemTodo5?: ListItemTodoProps
  checkbox5?: CheckboxProps
  label9?: LabelProps
  chipCount5?: ChipCountProps
  label10?: LabelProps
}

/**
 * To-Do List
 *
 * Level: Part
 *
 * Intent: Defines a list of to-do items with grouping, sorting, and filtering capabilities for task management interfaces.
 *
 * Tags: todo, list, tasks, ui, group, filter, sort, management
 *
 * @example
 * ```tsx
 * <ListTodo
 *   listItemTodo="{}"
 *   checkbox="{}"
 *   label="Button Label"
 *   chipCount="{}"
 *   listItemTodo1="{}"
 *   listItemTodo2="{}"
 *   listItemTodo3="{}"
 *   listItemTodo4="{}"
 * />
 * ```
 */
export function ListTodo({
  className = "",
  listItemTodo = sdn.listItemTodo,
  checkbox,
  label,
  chipCount,
  label2,
  listItemTodo2 = sdn.listItemTodo2,
  checkbox2,
  label3,
  chipCount2,
  label4,
  listItemTodo3 = sdn.listItemTodo3,
  checkbox3,
  label5,
  chipCount3,
  label6,
  listItemTodo4 = sdn.listItemTodo4,
  checkbox4,
  label7,
  chipCount4,
  label8,
  listItemTodo5 = sdn.listItemTodo5,
  checkbox5,
  label9,
  chipCount5,
  label10,
  ...props
}: ListTodoProps) {
  const frameClassName = combineClassNames("sdn-listTodo", className)
  const listItemTodoProps = {
    ...sdn.listItemTodo,
    ...listItemTodo,
    className: combineClassNames(
      sdn.listItemTodo?.className,
      listItemTodo?.className,
    ),
  }
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
  const listItemTodo2Props = {
    ...sdn.listItemTodo2,
    ...listItemTodo2,
    className: combineClassNames(
      sdn.listItemTodo2?.className,
      listItemTodo2?.className,
    ),
  }
  const checkbox2Props = {
    ...sdn.checkbox2,
    ...checkbox2,
    className: combineClassNames(
      sdn.checkbox2?.className,
      checkbox2?.className,
    ),
  }
  const label3Props = {
    ...sdn.label3,
    ...label3,
    className: combineClassNames(sdn.label3?.className, label3?.className),
  }
  const chipCount2Props = {
    ...sdn.chipCount2,
    ...chipCount2,
    className: combineClassNames(
      sdn.chipCount2?.className,
      chipCount2?.className,
    ),
  }
  const label4Props = {
    ...sdn.label4,
    ...label4,
    className: combineClassNames(sdn.label4?.className, label4?.className),
  }
  const listItemTodo3Props = {
    ...sdn.listItemTodo3,
    ...listItemTodo3,
    className: combineClassNames(
      sdn.listItemTodo3?.className,
      listItemTodo3?.className,
    ),
  }
  const checkbox3Props = {
    ...sdn.checkbox3,
    ...checkbox3,
    className: combineClassNames(
      sdn.checkbox3?.className,
      checkbox3?.className,
    ),
  }
  const label5Props = {
    ...sdn.label5,
    ...label5,
    className: combineClassNames(sdn.label5?.className, label5?.className),
  }
  const chipCount3Props = {
    ...sdn.chipCount3,
    ...chipCount3,
    className: combineClassNames(
      sdn.chipCount3?.className,
      chipCount3?.className,
    ),
  }
  const label6Props = {
    ...sdn.label6,
    ...label6,
    className: combineClassNames(sdn.label6?.className, label6?.className),
  }
  const listItemTodo4Props = {
    ...sdn.listItemTodo4,
    ...listItemTodo4,
    className: combineClassNames(
      sdn.listItemTodo4?.className,
      listItemTodo4?.className,
    ),
  }
  const checkbox4Props = {
    ...sdn.checkbox4,
    ...checkbox4,
    className: combineClassNames(
      sdn.checkbox4?.className,
      checkbox4?.className,
    ),
  }
  const label7Props = {
    ...sdn.label7,
    ...label7,
    className: combineClassNames(sdn.label7?.className, label7?.className),
  }
  const chipCount4Props = {
    ...sdn.chipCount4,
    ...chipCount4,
    className: combineClassNames(
      sdn.chipCount4?.className,
      chipCount4?.className,
    ),
  }
  const label8Props = {
    ...sdn.label8,
    ...label8,
    className: combineClassNames(sdn.label8?.className, label8?.className),
  }
  const listItemTodo5Props = {
    ...sdn.listItemTodo5,
    ...listItemTodo5,
    className: combineClassNames(
      sdn.listItemTodo5?.className,
      listItemTodo5?.className,
    ),
  }
  const checkbox5Props = {
    ...sdn.checkbox5,
    ...checkbox5,
    className: combineClassNames(
      sdn.checkbox5?.className,
      checkbox5?.className,
    ),
  }
  const label9Props = {
    ...sdn.label9,
    ...label9,
    className: combineClassNames(sdn.label9?.className, label9?.className),
  }
  const chipCount5Props = {
    ...sdn.chipCount5,
    ...chipCount5,
    className: combineClassNames(
      sdn.chipCount5?.className,
      chipCount5?.className,
    ),
  }
  const label10Props = {
    ...sdn.label10,
    ...label10,
    className: combineClassNames(sdn.label10?.className, label10?.className),
  }

  return (
    <HTMLUl className={frameClassName} {...props}>
      <ListItemTodo
        {...listItemTodoProps}
        checkbox={checkboxProps}
        label={labelProps}
        chipCount={chipCountProps}
        label={label2Props}
      />
      <ListItemTodo
        {...listItemTodo2Props}
        checkbox2={checkbox2Props}
        label3={label3Props}
        chipCount2={chipCount2Props}
        label={label4Props}
      />
      <ListItemTodo
        {...listItemTodo3Props}
        checkbox3={checkbox3Props}
        label5={label5Props}
        chipCount3={chipCount3Props}
        label={label6Props}
      />
      <ListItemTodo
        {...listItemTodo4Props}
        checkbox4={checkbox4Props}
        label7={label7Props}
        chipCount4={chipCount4Props}
        label={label8Props}
      />
      <ListItemTodo
        {...listItemTodo5Props}
        checkbox5={checkbox5Props}
        label9={label9Props}
        chipCount5={chipCount5Props}
        label={label10Props}
      />
    </HTMLUl>
  )
}

const sdn: ListTodoProps = {
  listItemTodo: {
    className: "sdn-listItemTodo-MwSraoIQ",
  },
  checkbox: {
    inputType: "checkbox",
    className: "sdn-checkbox-e4nLS1ce",
  },
  label: {
    children: "Label",
    htmlElement: "label",
    className: "sdn-label-kUPUPew7",
  },
  chipCount: {
    className: "sdn-chipCount-juyoB86N",
  },
  label2: {
    children: "Label",
    htmlElement: "label",
    className: "sdn-label-4xhSms9L",
  },
  listItemTodo2: {
    className: "sdn-listItemTodo-MwSraoIQ",
  },
  checkbox2: {
    inputType: "checkbox",
    className: "sdn-checkbox-e4nLS1ce",
  },
  label3: {
    children: "Label",
    htmlElement: "label",
    className: "sdn-label-kUPUPew7",
  },
  chipCount2: {
    className: "sdn-chipCount-juyoB86N",
  },
  label4: {
    children: "Label",
    htmlElement: "label",
    className: "sdn-label-4xhSms9L",
  },
  listItemTodo3: {
    className: "sdn-listItemTodo-MwSraoIQ",
  },
  checkbox3: {
    inputType: "checkbox",
    className: "sdn-checkbox-e4nLS1ce",
  },
  label5: {
    children: "Label",
    htmlElement: "label",
    className: "sdn-label-kUPUPew7",
  },
  chipCount3: {
    className: "sdn-chipCount-juyoB86N",
  },
  label6: {
    children: "Label",
    htmlElement: "label",
    className: "sdn-label-4xhSms9L",
  },
  listItemTodo4: {
    className: "sdn-listItemTodo-MwSraoIQ",
  },
  checkbox4: {
    inputType: "checkbox",
    className: "sdn-checkbox-e4nLS1ce",
  },
  label7: {
    children: "Label",
    htmlElement: "label",
    className: "sdn-label-kUPUPew7",
  },
  chipCount4: {
    className: "sdn-chipCount-juyoB86N",
  },
  label8: {
    children: "Label",
    htmlElement: "label",
    className: "sdn-label-4xhSms9L",
  },
  listItemTodo5: {
    className: "sdn-listItemTodo-bsBo6hNF",
  },
  checkbox5: {
    inputType: "checkbox",
    className: "sdn-checkbox-e4nLS1ce",
  },
  label9: {
    children: "Label",
    htmlElement: "label",
    className: "sdn-label-kUPUPew7",
  },
  chipCount5: {
    className: "sdn-chipCount-juyoB86N",
  },
  label10: {
    children: "Label",
    htmlElement: "label",
    className: "sdn-label-4xhSms9L",
  },
}

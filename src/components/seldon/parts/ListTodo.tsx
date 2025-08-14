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
import { ChipCountProps } from "../elements/ChipCount"
import { ListItemTodo, ListItemTodoProps } from "../elements/ListItemTodo"
import { HTMLUl } from "../native-react/HTML.Ul"
import { CheckboxProps } from "../primitives/Checkbox"
import { LabelProps } from "../primitives/Label"

export interface ListTodoProps extends HTMLAttributes<HTMLUListElement> {
  className?: string

  listItemTodoProps?: ListItemTodoProps
  listItemTodoCheckboxProps?: CheckboxProps
  listItemTodoLabelProps?: LabelProps
  listItemTodoChipCountProps?: ChipCountProps
  listItemTodoChipCountLabelProps?: LabelProps
  listItemTodo1Props?: ListItemTodoProps
  listItemTodo1CheckboxProps?: CheckboxProps
  listItemTodo1LabelProps?: LabelProps
  listItemTodo1ChipCountProps?: ChipCountProps
  listItemTodo1ChipCountLabelProps?: LabelProps
  listItemTodo2Props?: ListItemTodoProps
  listItemTodo2CheckboxProps?: CheckboxProps
  listItemTodo2LabelProps?: LabelProps
  listItemTodo2ChipCountProps?: ChipCountProps
  listItemTodo2ChipCountLabelProps?: LabelProps
  listItemTodo3Props?: ListItemTodoProps
  listItemTodo3CheckboxProps?: CheckboxProps
  listItemTodo3LabelProps?: LabelProps
  listItemTodo3ChipCountProps?: ChipCountProps
  listItemTodo3ChipCountLabelProps?: LabelProps
  listItemTodo4Props?: ListItemTodoProps
  listItemTodo4CheckboxProps?: CheckboxProps
  listItemTodo4LabelProps?: LabelProps
  listItemTodo4ChipCountProps?: ChipCountProps
  listItemTodo4ChipCountLabelProps?: LabelProps
}

export function ListTodo({
  className = "",
  listItemTodoProps,
  listItemTodoCheckboxProps,
  listItemTodoLabelProps,
  listItemTodoChipCountProps,
  listItemTodoChipCountLabelProps,
  listItemTodo1Props,
  listItemTodo1CheckboxProps,
  listItemTodo1LabelProps,
  listItemTodo1ChipCountProps,
  listItemTodo1ChipCountLabelProps,
  listItemTodo2Props,
  listItemTodo2CheckboxProps,
  listItemTodo2LabelProps,
  listItemTodo2ChipCountProps,
  listItemTodo2ChipCountLabelProps,
  listItemTodo3Props,
  listItemTodo3CheckboxProps,
  listItemTodo3LabelProps,
  listItemTodo3ChipCountProps,
  listItemTodo3ChipCountLabelProps,
  listItemTodo4Props,
  listItemTodo4CheckboxProps,
  listItemTodo4LabelProps,
  listItemTodo4ChipCountProps,
  listItemTodo4ChipCountLabelProps,
  ...props
}: ListTodoProps) {
  return (
    <HTMLUl className={"sdn-listTodo " + className} {...props}>
      <ListItemTodo
        {...{ ...seldon.listItemTodoProps, ...listItemTodoProps }}
        className={
          "sdn-listItemTodo-JKsj7nPU sdn-listItemTodo " +
          (listItemTodoProps?.className ?? "")
        }
        checkboxProps={{
          ...seldon.listItemTodoCheckboxProps,
          ...listItemTodoCheckboxProps,
        }}
        labelProps={{
          ...seldon.listItemTodoLabelProps,
          ...listItemTodoLabelProps,
        }}
        chipCountProps={{
          ...seldon.listItemTodoChipCountProps,
          ...listItemTodoChipCountProps,
        }}
      />
      <ListItemTodo
        {...{ ...seldon.listItemTodo1Props, ...listItemTodo1Props }}
        className={
          "sdn-listItemTodo-JKsj7nPU sdn-listItemTodo " +
          (listItemTodo1Props?.className ?? "")
        }
        checkboxProps={{
          ...seldon.listItemTodo1CheckboxProps,
          ...listItemTodo1CheckboxProps,
        }}
        labelProps={{
          ...seldon.listItemTodo1LabelProps,
          ...listItemTodo1LabelProps,
        }}
        chipCountProps={{
          ...seldon.listItemTodo1ChipCountProps,
          ...listItemTodo1ChipCountProps,
        }}
      />
      <ListItemTodo
        {...{ ...seldon.listItemTodo2Props, ...listItemTodo2Props }}
        className={
          "sdn-listItemTodo-JKsj7nPU sdn-listItemTodo " +
          (listItemTodo2Props?.className ?? "")
        }
        checkboxProps={{
          ...seldon.listItemTodo2CheckboxProps,
          ...listItemTodo2CheckboxProps,
        }}
        labelProps={{
          ...seldon.listItemTodo2LabelProps,
          ...listItemTodo2LabelProps,
        }}
        chipCountProps={{
          ...seldon.listItemTodo2ChipCountProps,
          ...listItemTodo2ChipCountProps,
        }}
      />
      <ListItemTodo
        {...{ ...seldon.listItemTodo3Props, ...listItemTodo3Props }}
        className={
          "sdn-listItemTodo-JKsj7nPU sdn-listItemTodo " +
          (listItemTodo3Props?.className ?? "")
        }
        checkboxProps={{
          ...seldon.listItemTodo3CheckboxProps,
          ...listItemTodo3CheckboxProps,
        }}
        labelProps={{
          ...seldon.listItemTodo3LabelProps,
          ...listItemTodo3LabelProps,
        }}
        chipCountProps={{
          ...seldon.listItemTodo3ChipCountProps,
          ...listItemTodo3ChipCountProps,
        }}
      />
      <ListItemTodo
        {...{ ...seldon.listItemTodo4Props, ...listItemTodo4Props }}
        className={
          "sdn-listItemTodo-bF3lSPyC sdn-listItemTodo " +
          (listItemTodo4Props?.className ?? "")
        }
        checkboxProps={{
          ...seldon.listItemTodo4CheckboxProps,
          ...listItemTodo4CheckboxProps,
        }}
        labelProps={{
          ...seldon.listItemTodo4LabelProps,
          ...listItemTodo4LabelProps,
        }}
        chipCountProps={{
          ...seldon.listItemTodo4ChipCountProps,
          ...listItemTodo4ChipCountProps,
        }}
      />
    </HTMLUl>
  )
}

const seldon: ListTodoProps = {
  listItemTodoProps: {},
  listItemTodoCheckboxProps: {
    inputType: "checkbox",
  },
  listItemTodoLabelProps: {
    children: "Label",
    htmlElement: "label",
  },
  listItemTodoChipCountProps: {},
  listItemTodoChipCountLabelProps: {
    children: "Label",
    htmlElement: "label",
  },
  listItemTodo1Props: {},
  listItemTodo1CheckboxProps: {
    inputType: "checkbox",
  },
  listItemTodo1LabelProps: {
    children: "Label",
    htmlElement: "label",
  },
  listItemTodo1ChipCountProps: {},
  listItemTodo1ChipCountLabelProps: {
    children: "Label",
    htmlElement: "label",
  },
  listItemTodo2Props: {},
  listItemTodo2CheckboxProps: {
    inputType: "checkbox",
  },
  listItemTodo2LabelProps: {
    children: "Label",
    htmlElement: "label",
  },
  listItemTodo2ChipCountProps: {},
  listItemTodo2ChipCountLabelProps: {
    children: "Label",
    htmlElement: "label",
  },
  listItemTodo3Props: {},
  listItemTodo3CheckboxProps: {
    inputType: "checkbox",
  },
  listItemTodo3LabelProps: {
    children: "Label",
    htmlElement: "label",
  },
  listItemTodo3ChipCountProps: {},
  listItemTodo3ChipCountLabelProps: {
    children: "Label",
    htmlElement: "label",
  },
  listItemTodo4Props: {},
  listItemTodo4CheckboxProps: {
    inputType: "checkbox",
  },
  listItemTodo4LabelProps: {
    children: "Label",
    htmlElement: "label",
  },
  listItemTodo4ChipCountProps: {},
  listItemTodo4ChipCountLabelProps: {
    children: "Label",
    htmlElement: "label",
  },
}

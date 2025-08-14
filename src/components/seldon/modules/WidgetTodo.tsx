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
import { ButtonProps } from "../elements/Button"
import { ChipCountProps } from "../elements/ChipCount"
import { HeaderPanel, HeaderPanelProps } from "../elements/HeaderPanel"
import { InputSearch, InputSearchProps } from "../elements/InputSearch"
import { ListItemTodoProps } from "../elements/ListItemTodo"
import { HTMLDiv } from "../native-react/HTML.Div"
import { ListTodo, ListTodoProps } from "../parts/ListTodo"
import { CheckboxProps } from "../primitives/Checkbox"
import { IconProps } from "../primitives/Icon"
import { InputProps } from "../primitives/Input"
import { LabelProps } from "../primitives/Label"
import { TitleProps } from "../primitives/Title"

export interface WidgetTodoProps extends HTMLAttributes<HTMLDivElement> {
  className?: string

  headerPanelProps?: HeaderPanelProps
  headerPanelTitleProps?: TitleProps
  headerPanelButtonProps?: ButtonProps
  headerPanelButtonIconProps?: IconProps
  headerPanelButtonLabelProps?: LabelProps
  inputSearchProps?: InputSearchProps
  inputSearchIconProps?: IconProps
  inputSearchInputProps?: InputProps
  listTodoProps?: ListTodoProps
  listTodoListItemTodoProps?: ListItemTodoProps
  listTodoListItemTodoCheckboxProps?: CheckboxProps
  listTodoListItemTodoLabelProps?: LabelProps
  listTodoListItemTodoChipCountProps?: ChipCountProps
  listTodoListItemTodoChipCountLabelProps?: LabelProps
  listTodoListItemTodo1Props?: ListItemTodoProps
  listTodoListItemTodo1CheckboxProps?: CheckboxProps
  listTodoListItemTodo1LabelProps?: LabelProps
  listTodoListItemTodo1ChipCountProps?: ChipCountProps
  listTodoListItemTodo1ChipCountLabelProps?: LabelProps
  listTodoListItemTodo2Props?: ListItemTodoProps
  listTodoListItemTodo2CheckboxProps?: CheckboxProps
  listTodoListItemTodo2LabelProps?: LabelProps
  listTodoListItemTodo2ChipCountProps?: ChipCountProps
  listTodoListItemTodo2ChipCountLabelProps?: LabelProps
  listTodoListItemTodo3Props?: ListItemTodoProps
  listTodoListItemTodo3CheckboxProps?: CheckboxProps
  listTodoListItemTodo3LabelProps?: LabelProps
  listTodoListItemTodo3ChipCountProps?: ChipCountProps
  listTodoListItemTodo3ChipCountLabelProps?: LabelProps
  listTodoListItemTodo4Props?: ListItemTodoProps
  listTodoListItemTodo4CheckboxProps?: CheckboxProps
  listTodoListItemTodo4LabelProps?: LabelProps
  listTodoListItemTodo4ChipCountProps?: ChipCountProps
  listTodoListItemTodo4ChipCountLabelProps?: LabelProps
}

export function WidgetTodo({
  className = "",
  headerPanelProps,
  headerPanelTitleProps,
  headerPanelButtonProps,
  headerPanelButtonIconProps,
  headerPanelButtonLabelProps,
  inputSearchProps,
  inputSearchIconProps,
  inputSearchInputProps,
  listTodoProps,
  listTodoListItemTodoProps,
  listTodoListItemTodoCheckboxProps,
  listTodoListItemTodoLabelProps,
  listTodoListItemTodoChipCountProps,
  listTodoListItemTodoChipCountLabelProps,
  listTodoListItemTodo1Props,
  listTodoListItemTodo1CheckboxProps,
  listTodoListItemTodo1LabelProps,
  listTodoListItemTodo1ChipCountProps,
  listTodoListItemTodo1ChipCountLabelProps,
  listTodoListItemTodo2Props,
  listTodoListItemTodo2CheckboxProps,
  listTodoListItemTodo2LabelProps,
  listTodoListItemTodo2ChipCountProps,
  listTodoListItemTodo2ChipCountLabelProps,
  listTodoListItemTodo3Props,
  listTodoListItemTodo3CheckboxProps,
  listTodoListItemTodo3LabelProps,
  listTodoListItemTodo3ChipCountProps,
  listTodoListItemTodo3ChipCountLabelProps,
  listTodoListItemTodo4Props,
  listTodoListItemTodo4CheckboxProps,
  listTodoListItemTodo4LabelProps,
  listTodoListItemTodo4ChipCountProps,
  listTodoListItemTodo4ChipCountLabelProps,
  ...props
}: WidgetTodoProps) {
  return (
    <HTMLDiv className={"sdn-widgetTodo " + className} {...props}>
      <HeaderPanel
        {...{ ...seldon.headerPanelProps, ...headerPanelProps }}
        className={
          "sdn-headerPanel-eCQuOT6i sdn-headerPanel " +
          (headerPanelProps?.className ?? "")
        }
        titleProps={{
          ...seldon.headerPanelTitleProps,
          ...headerPanelTitleProps,
        }}
        buttonProps={{
          ...seldon.headerPanelButtonProps,
          ...headerPanelButtonProps,
        }}
      />
      <InputSearch
        {...{ ...seldon.inputSearchProps, ...inputSearchProps }}
        className={
          "sdn-inputSearch-pCbDupYy sdn-inputSearch " +
          (inputSearchProps?.className ?? "")
        }
        iconProps={{ ...seldon.inputSearchIconProps, ...inputSearchIconProps }}
        inputProps={{
          ...seldon.inputSearchInputProps,
          ...inputSearchInputProps,
        }}
      />
      <ListTodo
        {...{ ...seldon.listTodoProps, ...listTodoProps }}
        className={
          "sdn-listTodo-VOlH2LAa sdn-listTodo " +
          (listTodoProps?.className ?? "")
        }
        listItemTodoProps={{
          ...seldon.listTodoListItemTodoProps,
          ...listTodoListItemTodoProps,
        }}
        listItemTodo1Props={{
          ...seldon.listTodoListItemTodo1Props,
          ...listTodoListItemTodo1Props,
        }}
        listItemTodo2Props={{
          ...seldon.listTodoListItemTodo2Props,
          ...listTodoListItemTodo2Props,
        }}
        listItemTodo3Props={{
          ...seldon.listTodoListItemTodo3Props,
          ...listTodoListItemTodo3Props,
        }}
        listItemTodo4Props={{
          ...seldon.listTodoListItemTodo4Props,
          ...listTodoListItemTodo4Props,
        }}
      />
    </HTMLDiv>
  )
}

const seldon: WidgetTodoProps = {
  headerPanelProps: {},
  headerPanelTitleProps: {
    children: "Title",
    htmlElement: "h4",
  },
  headerPanelButtonProps: {},
  headerPanelButtonIconProps: {
    icon: "__default__",
  },
  headerPanelButtonLabelProps: {
    children: "Label",
    htmlElement: "label",
  },
  inputSearchProps: {},
  inputSearchIconProps: {
    icon: "material-search",
  },
  inputSearchInputProps: {
    inputType: "text",
  },
  listTodoProps: {},
  listTodoListItemTodoProps: {},
  listTodoListItemTodoCheckboxProps: {
    inputType: "checkbox",
  },
  listTodoListItemTodoLabelProps: {
    children: "Label",
    htmlElement: "label",
  },
  listTodoListItemTodoChipCountProps: {},
  listTodoListItemTodoChipCountLabelProps: {
    children: "Label",
    htmlElement: "label",
  },
  listTodoListItemTodo1Props: {},
  listTodoListItemTodo1CheckboxProps: {
    inputType: "checkbox",
  },
  listTodoListItemTodo1LabelProps: {
    children: "Label",
    htmlElement: "label",
  },
  listTodoListItemTodo1ChipCountProps: {},
  listTodoListItemTodo1ChipCountLabelProps: {
    children: "Label",
    htmlElement: "label",
  },
  listTodoListItemTodo2Props: {},
  listTodoListItemTodo2CheckboxProps: {
    inputType: "checkbox",
  },
  listTodoListItemTodo2LabelProps: {
    children: "Label",
    htmlElement: "label",
  },
  listTodoListItemTodo2ChipCountProps: {},
  listTodoListItemTodo2ChipCountLabelProps: {
    children: "Label",
    htmlElement: "label",
  },
  listTodoListItemTodo3Props: {},
  listTodoListItemTodo3CheckboxProps: {
    inputType: "checkbox",
  },
  listTodoListItemTodo3LabelProps: {
    children: "Label",
    htmlElement: "label",
  },
  listTodoListItemTodo3ChipCountProps: {},
  listTodoListItemTodo3ChipCountLabelProps: {
    children: "Label",
    htmlElement: "label",
  },
  listTodoListItemTodo4Props: {},
  listTodoListItemTodo4CheckboxProps: {
    inputType: "checkbox",
  },
  listTodoListItemTodo4LabelProps: {
    children: "Label",
    htmlElement: "label",
  },
  listTodoListItemTodo4ChipCountProps: {},
  listTodoListItemTodo4ChipCountLabelProps: {
    children: "Label",
    htmlElement: "label",
  },
}

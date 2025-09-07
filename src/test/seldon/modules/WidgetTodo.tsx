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
import { ChipCount, ChipCountProps } from "../elements/ChipCount"
import { HeaderPanel, HeaderPanelProps } from "../elements/HeaderPanel"
import { InputSearch, InputSearchProps } from "../elements/InputSearch"
import { ListItemTodo, ListItemTodoProps } from "../elements/ListItemTodo"
import { HTMLDiv } from "../native-react/HTML.Div"
import { ListTodo, ListTodoProps } from "../parts/ListTodo"
import { Checkbox, CheckboxProps } from "../primitives/Checkbox"
import { Icon, IconProps } from "../primitives/Icon"
import { Input, InputProps } from "../primitives/Input"
import { Label, LabelProps } from "../primitives/Label"
import { Title, TitleProps } from "../primitives/Title"
import { combineClassNames } from "../utils/class-name-utils"

export interface WidgetTodoProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  headerPanel?: HeaderPanelProps
  titleProps?: TitleProps
  button?: ButtonProps
  icon?: IconProps
  label?: LabelProps
  inputSearch?: InputSearchProps
  icon2?: IconProps
  input?: InputProps
  listTodo?: ListTodoProps
  listItemTodo?: ListItemTodoProps
  checkbox?: CheckboxProps
  label2?: LabelProps
  chipCount?: ChipCountProps
  label3?: LabelProps
  listItemTodo2?: ListItemTodoProps
  checkbox2?: CheckboxProps
  label4?: LabelProps
  chipCount2?: ChipCountProps
  label5?: LabelProps
  listItemTodo3?: ListItemTodoProps
  checkbox3?: CheckboxProps
  label6?: LabelProps
  chipCount3?: ChipCountProps
  label7?: LabelProps
  listItemTodo4?: ListItemTodoProps
  checkbox4?: CheckboxProps
  label8?: LabelProps
  chipCount4?: ChipCountProps
  label9?: LabelProps
  listItemTodo5?: ListItemTodoProps
  checkbox5?: CheckboxProps
  label10?: LabelProps
  chipCount5?: ChipCountProps
  label11?: LabelProps
}

/**
 * To-Do Widget
 *
 * Level: Module
 *
 * Intent: Compact UI widget for displaying and managing to-do items, supporting quick add, update, and complete actions.
 *
 * Tags: todo, widget, tasks, ui, quick, add, update, complete
 *
 * @example
 * ```tsx
 * <WidgetTodo
 *   headerPanel="{}"
 *   title="Product Title"
 *   button={() => {}}
 *   icon="material-star"
 *   label="Button Label"
 *   inputSearch="{}"
 *   input="{}"
 *   listTodo="{}"
 *   listItemTodo="{}"
 *   checkbox="{}"
 *   chipCount="{}"
 *   listItemTodo1="{}"
 *   listItemTodo2="{}"
 *   listItemTodo3="{}"
 *   listItemTodo4="{}"
 * />
 * ```
 */
export function WidgetTodo({
  className = "",
  headerPanel = sdn.headerPanel,
  titleProps,
  button,
  icon,
  label,
  inputSearch = sdn.inputSearch,
  icon2,
  input,
  listTodo,
  listItemTodo,
  checkbox,
  label2,
  chipCount,
  label3,
  listItemTodo2,
  checkbox2,
  label4,
  chipCount2,
  label5,
  listItemTodo3,
  checkbox3,
  label6,
  chipCount3,
  label7,
  listItemTodo4,
  checkbox4,
  label8,
  chipCount4,
  label9,
  listItemTodo5,
  checkbox5,
  label10,
  chipCount5,
  label11,
  ...props
}: WidgetTodoProps) {
  const frameClassName = combineClassNames("sdn-widgetTodo", className)
  const headerPanelProps = {
    ...sdn.headerPanel,
    ...headerPanel,
    className: combineClassNames(
      sdn.headerPanel?.className,
      headerPanel?.className,
    ),
  }
  const titlePropsProps = {
    ...sdn.titleProps,
    ...titleProps,
    className: combineClassNames(
      sdn.titleProps?.className,
      titleProps?.className,
    ),
  }
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
  const inputSearchProps = {
    ...sdn.inputSearch,
    ...inputSearch,
    className: combineClassNames(
      sdn.inputSearch?.className,
      inputSearch?.className,
    ),
  }
  const icon2Props = {
    ...sdn.icon2,
    ...icon2,
    className: combineClassNames(sdn.icon2?.className, icon2?.className),
  }
  const inputProps = {
    ...sdn.input,
    ...input,
    className: combineClassNames(sdn.input?.className, input?.className),
  }
  const listTodoProps = {
    ...sdn.listTodo,
    ...listTodo,
    className: combineClassNames(sdn.listTodo?.className, listTodo?.className),
  }
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
  const label2Props = {
    ...sdn.label2,
    ...label2,
    className: combineClassNames(sdn.label2?.className, label2?.className),
  }
  const chipCountProps = {
    ...sdn.chipCount,
    ...chipCount,
    className: combineClassNames(
      sdn.chipCount?.className,
      chipCount?.className,
    ),
  }
  const label3Props = {
    ...sdn.label3,
    ...label3,
    className: combineClassNames(sdn.label3?.className, label3?.className),
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
  const label4Props = {
    ...sdn.label4,
    ...label4,
    className: combineClassNames(sdn.label4?.className, label4?.className),
  }
  const chipCount2Props = {
    ...sdn.chipCount2,
    ...chipCount2,
    className: combineClassNames(
      sdn.chipCount2?.className,
      chipCount2?.className,
    ),
  }
  const label5Props = {
    ...sdn.label5,
    ...label5,
    className: combineClassNames(sdn.label5?.className, label5?.className),
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
  const label6Props = {
    ...sdn.label6,
    ...label6,
    className: combineClassNames(sdn.label6?.className, label6?.className),
  }
  const chipCount3Props = {
    ...sdn.chipCount3,
    ...chipCount3,
    className: combineClassNames(
      sdn.chipCount3?.className,
      chipCount3?.className,
    ),
  }
  const label7Props = {
    ...sdn.label7,
    ...label7,
    className: combineClassNames(sdn.label7?.className, label7?.className),
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
  const label8Props = {
    ...sdn.label8,
    ...label8,
    className: combineClassNames(sdn.label8?.className, label8?.className),
  }
  const chipCount4Props = {
    ...sdn.chipCount4,
    ...chipCount4,
    className: combineClassNames(
      sdn.chipCount4?.className,
      chipCount4?.className,
    ),
  }
  const label9Props = {
    ...sdn.label9,
    ...label9,
    className: combineClassNames(sdn.label9?.className, label9?.className),
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
  const label10Props = {
    ...sdn.label10,
    ...label10,
    className: combineClassNames(sdn.label10?.className, label10?.className),
  }
  const chipCount5Props = {
    ...sdn.chipCount5,
    ...chipCount5,
    className: combineClassNames(
      sdn.chipCount5?.className,
      chipCount5?.className,
    ),
  }
  const label11Props = {
    ...sdn.label11,
    ...label11,
    className: combineClassNames(sdn.label11?.className, label11?.className),
  }

  return (
    <HTMLDiv className={frameClassName} {...props}>
      <HeaderPanel
        {...headerPanelProps}
        titleProps={titlePropsProps}
        button={buttonProps}
        icon={iconProps}
        label={labelProps}
      />
      <InputSearch {...inputSearchProps} icon={icon2Props} input={inputProps} />
      {listTodo && (
        <ListTodo
          {...listTodoProps}
          listItemTodo={listItemTodoProps}
          listItemTodo2={listItemTodo2Props}
          listItemTodo3={listItemTodo3Props}
          listItemTodo4={listItemTodo4Props}
          listItemTodo5={listItemTodo5Props}
        />
      )}
    </HTMLDiv>
  )
}

const sdn: WidgetTodoProps = {
  headerPanel: {
    className: "sdn-headerPanel-JaYwjnHG",
  },
  titleProps: {
    children: "Title",
    htmlElement: "h4",
    className: "sdn-title-JooGsPwE",
  },
  button: {
    className: "sdn-button-tmW0D5Yl",
  },
  icon: {
    icon: "__default__",
    className: "sdn-icon-vkgwzWrj",
  },
  label: {
    children: "Button",
    htmlElement: "label",
    className: "sdn-label-iBTpKhvZ",
  },
  inputSearch: {
    className: "sdn-inputSearch-AvA61QtL",
  },
  icon2: {
    icon: "material-search",
    className: "sdn-icon-EoNoqX7Q",
  },
  input: {
    inputType: "text",
    className: "sdn-input-45AmU5Pj",
  },
  listTodo: {
    className: "sdn-listTodo-KwdT1DmY",
  },
  listItemTodo: {
    className: "sdn-listItemTodo-lMNurJWj",
  },
  checkbox: {
    inputType: "checkbox",
    className: "sdn-checkbox-urbJTVek",
  },
  label2: {
    children: "Label",
    htmlElement: "label",
    className: "sdn-label-OuNDR5PZ",
  },
  chipCount: {
    className: "sdn-chipCount-bvUeHYSs",
  },
  label3: {
    children: "Label",
    htmlElement: "label",
    className: "sdn-label-NYdtKGmd",
  },
  listItemTodo2: {
    className: "sdn-listItemTodo-lMNurJWj",
  },
  checkbox2: {
    inputType: "checkbox",
    className: "sdn-checkbox-urbJTVek",
  },
  label4: {
    children: "Label",
    htmlElement: "label",
    className: "sdn-label-OuNDR5PZ",
  },
  chipCount2: {
    className: "sdn-chipCount-bvUeHYSs",
  },
  label5: {
    children: "Label",
    htmlElement: "label",
    className: "sdn-label-NYdtKGmd",
  },
  listItemTodo3: {
    className: "sdn-listItemTodo-lMNurJWj",
  },
  checkbox3: {
    inputType: "checkbox",
    className: "sdn-checkbox-urbJTVek",
  },
  label6: {
    children: "Label",
    htmlElement: "label",
    className: "sdn-label-OuNDR5PZ",
  },
  chipCount3: {
    className: "sdn-chipCount-bvUeHYSs",
  },
  label7: {
    children: "Label",
    htmlElement: "label",
    className: "sdn-label-NYdtKGmd",
  },
  listItemTodo4: {
    className: "sdn-listItemTodo-lMNurJWj",
  },
  checkbox4: {
    inputType: "checkbox",
    className: "sdn-checkbox-urbJTVek",
  },
  label8: {
    children: "Label",
    htmlElement: "label",
    className: "sdn-label-OuNDR5PZ",
  },
  chipCount4: {
    className: "sdn-chipCount-bvUeHYSs",
  },
  label9: {
    children: "Label",
    htmlElement: "label",
    className: "sdn-label-NYdtKGmd",
  },
  listItemTodo5: {
    className: "sdn-listItemTodo-bsBo6hNF",
  },
  checkbox5: {
    inputType: "checkbox",
    className: "sdn-checkbox-urbJTVek",
  },
  label10: {
    children: "Label",
    htmlElement: "label",
    className: "sdn-label-OuNDR5PZ",
  },
  chipCount5: {
    className: "sdn-chipCount-bvUeHYSs",
  },
  label11: {
    children: "Label",
    htmlElement: "label",
    className: "sdn-label-NYdtKGmd",
  },
}

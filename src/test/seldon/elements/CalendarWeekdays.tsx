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
import { HTMLTr } from "../native-react/HTML.Tr"
import { TableHeader, TableHeaderProps } from "../primitives/TableHeader"
import { combineClassNames } from "../utils/class-name-utils"

export interface CalendarWeekdaysProps
  extends HTMLAttributes<HTMLTableRowElement> {
  className?: string
  tableHeader?: TableHeaderProps
  tableHeader1?: TableHeaderProps
  tableHeader2?: TableHeaderProps
  tableHeader3?: TableHeaderProps
  tableHeader4?: TableHeaderProps
  tableHeader5?: TableHeaderProps
  tableHeader6?: TableHeaderProps
  tableHeader7?: TableHeaderProps
}

/**
 * Weekdays
 *
 * Level: Element
 *
 * Intent: Schema for the calendar header row with month, year, navigation controls, and optional view switcher.
 *
 * Tags: calendar, header, month, year, navigation, controls, switcher, ui
 *
 * @example
 * ```tsx
 * <CalendarWeekdays
 *   tableHeader="{}"
 *   tableHeader1="{}"
 *   tableHeader2="{}"
 *   tableHeader3="{}"
 *   tableHeader4="{}"
 *   tableHeader5="{}"
 *   tableHeader6="{}"
 *   tableHeader7="{}"
 * />
 * ```
 */
export function CalendarWeekdays({
  className = "",
  tableHeader = sdn.tableHeader,
  tableHeader1 = sdn.tableHeader1,
  tableHeader2 = sdn.tableHeader2,
  tableHeader3 = sdn.tableHeader3,
  tableHeader4 = sdn.tableHeader4,
  tableHeader5 = sdn.tableHeader5,
  tableHeader6 = sdn.tableHeader6,
  tableHeader7 = sdn.tableHeader7,
  ...props
}: CalendarWeekdaysProps) {
  const frameClassName = combineClassNames("sdn-calendarWeek", className)
  const tableHeaderProps = {
    ...sdn.tableHeader,
    ...tableHeader,
    className: combineClassNames(
      sdn.tableHeader?.className,
      tableHeader?.className,
    ),
  }
  const tableHeader1Props = {
    ...sdn.tableHeader1,
    ...tableHeader1,
    className: combineClassNames(
      sdn.tableHeader1?.className,
      tableHeader1?.className,
    ),
  }
  const tableHeader2Props = {
    ...sdn.tableHeader2,
    ...tableHeader2,
    className: combineClassNames(
      sdn.tableHeader2?.className,
      tableHeader2?.className,
    ),
  }
  const tableHeader3Props = {
    ...sdn.tableHeader3,
    ...tableHeader3,
    className: combineClassNames(
      sdn.tableHeader3?.className,
      tableHeader3?.className,
    ),
  }
  const tableHeader4Props = {
    ...sdn.tableHeader4,
    ...tableHeader4,
    className: combineClassNames(
      sdn.tableHeader4?.className,
      tableHeader4?.className,
    ),
  }
  const tableHeader5Props = {
    ...sdn.tableHeader5,
    ...tableHeader5,
    className: combineClassNames(
      sdn.tableHeader5?.className,
      tableHeader5?.className,
    ),
  }
  const tableHeader6Props = {
    ...sdn.tableHeader6,
    ...tableHeader6,
    className: combineClassNames(
      sdn.tableHeader6?.className,
      tableHeader6?.className,
    ),
  }
  const tableHeader7Props = {
    ...sdn.tableHeader7,
    ...tableHeader7,
    className: combineClassNames(
      sdn.tableHeader7?.className,
      tableHeader7?.className,
    ),
  }

  return (
    <HTMLTr className={frameClassName} {...props}>
      <TableHeader {...tableHeaderProps} />
      <TableHeader {...tableHeader1Props} />
      <TableHeader {...tableHeader2Props} />
      <TableHeader {...tableHeader3Props} />
      <TableHeader {...tableHeader4Props} />
      <TableHeader {...tableHeader5Props} />
      <TableHeader {...tableHeader6Props} />
      <TableHeader {...tableHeader7Props} />
    </HTMLTr>
  )
}

const sdn: CalendarWeekdaysProps = {
  tableHeader: {
    children: "January",
    className: "sdn-tableHeader-ZE6bK5aT",
  },
  tableHeader1: {
    children: "Monday",
    className: "sdn-tableHeader-VXZy267v",
  },
  tableHeader2: {
    children: "Tuesday",
    className: "sdn-tableHeader-VXZy267v",
  },
  tableHeader3: {
    children: "Wednesday",
    className: "sdn-tableHeader-VXZy267v",
  },
  tableHeader4: {
    children: "Thursday",
    className: "sdn-tableHeader-VXZy267v",
  },
  tableHeader5: {
    children: "Friday",
    className: "sdn-tableHeader-VXZy267v",
  },
  tableHeader6: {
    children: "Saturday",
    className: "sdn-tableHeader-VXZy267v",
  },
  tableHeader7: {
    children: "Sunday",
    className: "sdn-tableHeader-VXZy267v",
  },
}

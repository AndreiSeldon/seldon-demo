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
import {
  CalendarWeekdays,
  CalendarWeekdaysProps,
} from "../elements/CalendarWeekdays"
import { HTMLThead } from "../native-react/HTML.Thead"
import { TableHeader, TableHeaderProps } from "../primitives/TableHeader"
import { combineClassNames } from "../utils/class-name-utils"

export interface CalendarHeaderProps
  extends HTMLAttributes<HTMLTableSectionElement> {
  className?: string
  calendarWeekdays?: CalendarWeekdaysProps
  tableHeader?: TableHeaderProps
  tableHeader2?: TableHeaderProps
  tableHeader3?: TableHeaderProps
  tableHeader4?: TableHeaderProps
  tableHeader5?: TableHeaderProps
  tableHeader6?: TableHeaderProps
  tableHeader7?: TableHeaderProps
  tableHeader8?: TableHeaderProps
}

/**
 * Calendar Header
 *
 * Level: Part
 *
 * Intent: Schema for the calendar header row with month, year, navigation controls, and optional view switcher.
 *
 * Tags: calendar, header, month, year, navigation, controls, switcher, ui
 *
 * @example
 * ```tsx
 * <CalendarHeader
 *   calendarWeekdays="{}"
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
export function CalendarHeader({
  className = "",
  calendarWeekdays = sdn.calendarWeekdays,
  tableHeader,
  tableHeader2,
  tableHeader3,
  tableHeader4,
  tableHeader5,
  tableHeader6,
  tableHeader7,
  tableHeader8,
  ...props
}: CalendarHeaderProps) {
  const frameClassName = combineClassNames("sdn-calendarHeader", className)
  const calendarWeekdaysProps = {
    ...sdn.calendarWeekdays,
    ...calendarWeekdays,
    className: combineClassNames(
      sdn.calendarWeekdays?.className,
      calendarWeekdays?.className,
    ),
  }
  const tableHeaderProps = {
    ...sdn.tableHeader,
    ...tableHeader,
    className: combineClassNames(
      sdn.tableHeader?.className,
      tableHeader?.className,
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
  const tableHeader8Props = {
    ...sdn.tableHeader8,
    ...tableHeader8,
    className: combineClassNames(
      sdn.tableHeader8?.className,
      tableHeader8?.className,
    ),
  }

  return (
    <HTMLThead className={frameClassName} {...props}>
      <CalendarWeekdays
        {...calendarWeekdaysProps}
        tableHeader={tableHeaderProps}
        tableHeader2={tableHeader2Props}
        tableHeader3={tableHeader3Props}
        tableHeader4={tableHeader4Props}
        tableHeader5={tableHeader5Props}
        tableHeader6={tableHeader6Props}
        tableHeader7={tableHeader7Props}
        tableHeader8={tableHeader8Props}
      />
    </HTMLThead>
  )
}

const sdn: CalendarHeaderProps = {
  calendarWeekdays: {
    className: "sdn-calendarWeekdays-STZhncNs",
  },
  tableHeader: {
    children: "Jan",
    className: "sdn-tableHeader-ZE6bK5aT",
  },
  tableHeader2: {
    children: "Mon",
    className: "sdn-tableHeader-VXZy267v",
  },
  tableHeader3: {
    children: "Tue",
    className: "sdn-tableHeader-VXZy267v",
  },
  tableHeader4: {
    children: "Wed",
    className: "sdn-tableHeader-VXZy267v",
  },
  tableHeader5: {
    children: "Thu",
    className: "sdn-tableHeader-VXZy267v",
  },
  tableHeader6: {
    children: "Fri",
    className: "sdn-tableHeader-VXZy267v",
  },
  tableHeader7: {
    children: "Sat",
    className: "sdn-tableHeader-VXZy267v",
  },
  tableHeader8: {
    children: "Sun",
    className: "sdn-tableHeader-VXZy267v",
  },
}

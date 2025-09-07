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
 *   display="show"
 *   ariaHidden="false"
 *   orientation="horizontal"
 *   align="left"
 *   width="fill"
 *   height="fit"
 *   wrapChildren="false"
 * />
 * ```
 */
export function CalendarHeader({
  className = "",
  calendarWeekdays,
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
      <CalendarWeekdays {...calendarWeekdaysProps} />
    </HTMLThead>
  )
}

const sdn: CalendarHeaderProps = {
  calendarWeekdays: {
    display: "show",
    ariaHidden: "false",
    orientation: "horizontal",
    align: "left",
    width: "fill",
    height: "fill",
    wrapChildren: "false",
    className: "sdn-calendarWeekdays-QJPVHGuG",
  },
  tableHeader: {
    ariaHidden: "false",
    children: "Jan",
    width: "[object Object]",
    height: "fit",
    color: "@swatch.black",
    textAlign: "left",
    textCase: "normal",
    textDecoration: "none",
    wrapText: "true",
    className: "sdn-tableHeader-nYRsU1Bx",
  },
  tableHeader2: {
    ariaHidden: "false",
    children: "Mon",
    width: "[object Object]",
    height: "fit",
    color: "@swatch.black",
    textAlign: "left",
    textCase: "normal",
    textDecoration: "none",
    wrapText: "true",
    className: "sdn-tableHeader-N5DNHkDt",
  },
  tableHeader3: {
    ariaHidden: "false",
    children: "Tue",
    width: "[object Object]",
    height: "fit",
    color: "@swatch.black",
    textAlign: "left",
    textCase: "normal",
    textDecoration: "none",
    wrapText: "true",
    className: "sdn-tableHeader-N5DNHkDt",
  },
  tableHeader4: {
    ariaHidden: "false",
    children: "Wed",
    width: "[object Object]",
    height: "fit",
    color: "@swatch.black",
    textAlign: "left",
    textCase: "normal",
    textDecoration: "none",
    wrapText: "true",
    className: "sdn-tableHeader-N5DNHkDt",
  },
  tableHeader5: {
    ariaHidden: "false",
    children: "Thu",
    width: "[object Object]",
    height: "fit",
    color: "@swatch.black",
    textAlign: "left",
    textCase: "normal",
    textDecoration: "none",
    wrapText: "true",
    className: "sdn-tableHeader-N5DNHkDt",
  },
  tableHeader6: {
    ariaHidden: "false",
    children: "Fri",
    width: "[object Object]",
    height: "fit",
    color: "@swatch.black",
    textAlign: "left",
    textCase: "normal",
    textDecoration: "none",
    wrapText: "true",
    className: "sdn-tableHeader-N5DNHkDt",
  },
  tableHeader7: {
    ariaHidden: "false",
    children: "Sat",
    width: "[object Object]",
    height: "fit",
    color: "@swatch.black",
    textAlign: "left",
    textCase: "normal",
    textDecoration: "none",
    wrapText: "true",
    className: "sdn-tableHeader-N5DNHkDt",
  },
  tableHeader8: {
    ariaHidden: "false",
    children: "Sun",
    width: "[object Object]",
    height: "fit",
    color: "@swatch.black",
    textAlign: "left",
    textCase: "normal",
    textDecoration: "none",
    wrapText: "true",
    className: "sdn-tableHeader-N5DNHkDt",
  },
}

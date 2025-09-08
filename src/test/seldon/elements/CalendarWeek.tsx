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
import { TableData, TableDataProps } from "../primitives/TableData"
import { combineClassNames } from "../utils/class-name-utils"

export interface CalendarWeekProps extends HTMLAttributes<HTMLTableRowElement> {
  className?: string
  tableData?: TableDataProps
  tableData2?: TableDataProps
  tableData3?: TableDataProps
  tableData4?: TableDataProps
  tableData5?: TableDataProps
  tableData6?: TableDataProps
  tableData7?: TableDataProps
  tableData8?: TableDataProps
}

/**
 * Week
 *
 * Level: Element
 *
 * Intent: Schema for a full week view, rendering seven days with events, selection state, and range interactions.
 *
 * Tags: calendar, week, schedule, timeslot, events, overlap, scroll, ui
 *
 * @example
 * ```tsx
 * <CalendarWeek
 *   tableData="{}"
 *   tableData1="{}"
 *   tableData2="{}"
 *   tableData3="{}"
 *   tableData4="{}"
 *   tableData5="{}"
 *   tableData6="{}"
 *   tableData7="{}"
 * />
 * ```
 */
export function CalendarWeek({
  className = "",
  tableData = sdn.tableData,
  tableData2 = sdn.tableData2,
  tableData3 = sdn.tableData3,
  tableData4 = sdn.tableData4,
  tableData5 = sdn.tableData5,
  tableData6 = sdn.tableData6,
  tableData7 = sdn.tableData7,
  tableData8 = sdn.tableData8,
  ...props
}: CalendarWeekProps) {
  const frameClassName = combineClassNames("sdn-calendarWeek", className)
  const tableDataProps = {
    ...sdn.tableData,
    ...tableData,
    className: combineClassNames(
      sdn.tableData?.className,
      tableData?.className,
    ),
  }
  const tableData2Props = {
    ...sdn.tableData2,
    ...tableData2,
    className: combineClassNames(
      sdn.tableData2?.className,
      tableData2?.className,
    ),
  }
  const tableData3Props = {
    ...sdn.tableData3,
    ...tableData3,
    className: combineClassNames(
      sdn.tableData3?.className,
      tableData3?.className,
    ),
  }
  const tableData4Props = {
    ...sdn.tableData4,
    ...tableData4,
    className: combineClassNames(
      sdn.tableData4?.className,
      tableData4?.className,
    ),
  }
  const tableData5Props = {
    ...sdn.tableData5,
    ...tableData5,
    className: combineClassNames(
      sdn.tableData5?.className,
      tableData5?.className,
    ),
  }
  const tableData6Props = {
    ...sdn.tableData6,
    ...tableData6,
    className: combineClassNames(
      sdn.tableData6?.className,
      tableData6?.className,
    ),
  }
  const tableData7Props = {
    ...sdn.tableData7,
    ...tableData7,
    className: combineClassNames(
      sdn.tableData7?.className,
      tableData7?.className,
    ),
  }
  const tableData8Props = {
    ...sdn.tableData8,
    ...tableData8,
    className: combineClassNames(
      sdn.tableData8?.className,
      tableData8?.className,
    ),
  }

  return (
    <HTMLTr className={frameClassName} {...props}>
      <TableData {...tableDataProps} />
      <TableData {...tableData2Props} />
      <TableData {...tableData3Props} />
      <TableData {...tableData4Props} />
      <TableData {...tableData5Props} />
      <TableData {...tableData6Props} />
      <TableData {...tableData7Props} />
      <TableData {...tableData8Props} />
    </HTMLTr>
  )
}

const sdn: CalendarWeekProps = {
  tableData: {
    children: "##",
    className: "sdn-tableData-xIxYZnz3",
  },
  tableData2: {
    children: "##",
    className: "sdn-tableData-ZKXSDcvW",
  },
  tableData3: {
    children: "##",
    className: "sdn-tableData-ZKXSDcvW",
  },
  tableData4: {
    children: "##",
    className: "sdn-tableData-ZKXSDcvW",
  },
  tableData5: {
    children: "##",
    className: "sdn-tableData-ZKXSDcvW",
  },
  tableData6: {
    children: "##",
    className: "sdn-tableData-ZKXSDcvW",
  },
  tableData7: {
    children: "##",
    className: "sdn-tableData-ZKXSDcvW",
  },
  tableData8: {
    children: "##",
    className: "sdn-tableData-ZKXSDcvW",
  },
}

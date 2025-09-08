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
import { combineClassNames } from "../utils/class-name"

export interface TableRowFooterProps
  extends HTMLAttributes<HTMLTableRowElement> {
  className?: string
  tableData?: TableDataProps
  tableData2?: TableDataProps
  tableData3?: TableDataProps
  tableData4?: TableDataProps
  tableData5?: TableDataProps
}

/**
 * Footer Row
 *
 * Level: Element
 *
 * Intent: Specialized table row for summaries, totals, or controls.
 *
 * Tags: table, footer, summary, row, UI, control, total, ending
 *
 * @example
 * ```tsx
 * <TableRowFooter
 *   tableData="{}"
 *   tableData1="{}"
 *   tableData2="{}"
 *   tableData3="{}"
 *   tableData4="{}"
 * />
 * ```
 */
export function TableRowFooter({
  className = "",
  tableData = sdn.tableData,
  tableData2 = sdn.tableData2,
  tableData3 = sdn.tableData3,
  tableData4 = sdn.tableData4,
  tableData5 = sdn.tableData5,
  ...props
}: TableRowFooterProps) {
  const frameClassName = combineClassNames("sdn-tableRowFooter", className)
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

  return (
    <HTMLTr className={frameClassName} {...props}>
      <TableData {...tableDataProps} />
      <TableData {...tableData2Props} />
      <TableData {...tableData3Props} />
      <TableData {...tableData4Props} />
      <TableData {...tableData5Props} />
    </HTMLTr>
  )
}

const sdn: TableRowFooterProps = {
  tableData: {
    children: "Cell",
    className: "sdn-tableData-2eoPSiJA",
  },
  tableData2: {
    children: "Cell",
    className: "sdn-tableData-2eoPSiJA",
  },
  tableData3: {
    children: "Cell",
    className: "sdn-tableData-2eoPSiJA",
  },
  tableData4: {
    children: "Cell",
    className: "sdn-tableData-2eoPSiJA",
  },
  tableData5: {
    children: "Cell",
    className: "sdn-tableData-2eoPSiJA",
  },
}

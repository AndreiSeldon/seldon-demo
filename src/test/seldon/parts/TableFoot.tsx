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
import { TableRowFooter, TableRowFooterProps } from "../elements/TableRowFooter"
import { HTMLTfoot } from "../native-react/HTML.Tfoot"
import { TableData, TableDataProps } from "../primitives/TableData"
import { combineClassNames } from "../utils/class-name-utils"

export interface TableFootProps
  extends HTMLAttributes<HTMLTableSectionElement> {
  className?: string
  tableRowFooter?: TableRowFooterProps
  tableData?: TableDataProps
  tableData2?: TableDataProps
  tableData3?: TableDataProps
  tableData4?: TableDataProps
  tableData5?: TableDataProps
}

/**
 * Table Foot
 *
 * Level: Part
 *
 * Intent: Schema for rendering table footers, typically used for summaries, totals, or end-of-table actions and annotations.
 *
 * Tags: table, footer, foot, ui, summary, totals, actions, end
 *
 * @example
 * ```tsx
 * <TableFoot
 *   tableRowFooter="{}"
 *   tableData="{}"
 *   tableData1="{}"
 *   tableData2="{}"
 *   tableData3="{}"
 *   tableData4="{}"
 * />
 * ```
 */
export function TableFoot({
  className = "",
  tableRowFooter = sdn.tableRowFooter,
  tableData,
  tableData2,
  tableData3,
  tableData4,
  tableData5,
  ...props
}: TableFootProps) {
  const frameClassName = combineClassNames("sdn-tableFoot", className)
  const tableRowFooterProps = {
    ...sdn.tableRowFooter,
    ...tableRowFooter,
    className: combineClassNames(
      sdn.tableRowFooter?.className,
      tableRowFooter?.className,
    ),
  }
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
    <HTMLTfoot className={frameClassName} {...props}>
      <TableRowFooter
        {...tableRowFooterProps}
        tableData={tableDataProps}
        tableData2={tableData2Props}
        tableData3={tableData3Props}
        tableData4={tableData4Props}
        tableData5={tableData5Props}
      />
    </HTMLTfoot>
  )
}

const sdn: TableFootProps = {
  tableRowFooter: {
    className: "sdn-tableRowFooter-69sgRXa4",
  },
  tableData: {
    children: "Cell",
    className: "sdn-tableData-FPFZ6E5l",
  },
  tableData2: {
    children: "Cell",
    className: "sdn-tableData-FPFZ6E5l",
  },
  tableData3: {
    children: "Cell",
    className: "sdn-tableData-FPFZ6E5l",
  },
  tableData4: {
    children: "Cell",
    className: "sdn-tableData-FPFZ6E5l",
  },
  tableData5: {
    children: "Cell",
    className: "sdn-tableData-FPFZ6E5l",
  },
}
